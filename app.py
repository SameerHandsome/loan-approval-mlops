from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
import mlflow
import mlflow.sklearn
from prometheus_client import Counter, Histogram, Gauge, generate_latest
import prometheus_client
import time
import uvicorn
from fastapi.responses import Response

REQUEST_COUNT = Counter('total_requests', 'Total number of prediction requests')
SUCCESS_COUNT = Counter('successful_predictions', 'Number of successful predictions')
LATENCY = Histogram('request_latency_seconds', 'Time taken for prediction requests (in seconds)')
ACTIVE_MODELS = Gauge('active_model_version', 'Currently deployed model version')

app = FastAPI(title="🏦 Loan Approval Predictor with MLOps Monitoring")

mlflow.set_tracking_uri("http://127.0.0.1:5000")
model_name = "Best_Model"

client = mlflow.tracking.MlflowClient()

versions = client.search_model_versions(f"name='{model_name}'")
prod_version = None
for v in versions:
    if getattr(v, "current_stage", None) == "Production":
        prod_version = v
        break

if prod_version:
    model_uri = f"models:/{model_name}/Production"
    model = mlflow.sklearn.load_model(model_uri)
    ACTIVE_MODELS.set(int(prod_version.version))
    print(f"✅ Loaded Production model version: {prod_version.version}")
else:
    raise ValueError("❌ No production model found in MLflow registry!")

class LoanApplication(BaseModel):
    name: str
    city: str
    income: float
    credit_score: float
    loan_amount: float
    years_employed: int
    points: float

def preprocess_input(df: pd.DataFrame):
    for col in df.columns:
        if df[col].dtype == "object":
            df[col] = df[col].fillna(df[col].mode()[0])
        else:
            df[col] = df[col].fillna(df[col].mean())

    label_encoders = {}
    for col in df.select_dtypes(include=["object"]).columns:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le

    scaler = StandardScaler()
    num_cols = df.select_dtypes(include=["int64", "float64"]).columns
    df[num_cols] = scaler.fit_transform(df[num_cols])

    return df


@app.post("/predict")
def predict_loan_status(application: LoanApplication):
    start_time = time.time()
    REQUEST_COUNT.inc()

    try:
        input_df = pd.DataFrame([application.dict()])
        processed = preprocess_input(input_df)

        pred = model.predict(processed)[0]
        success = True
        result = {"loan_approved": bool(pred)}

    except Exception as e:
        success = False
        result = {"error": str(e)}

    finally:
        LATENCY.observe(time.time() - start_time)
        if success:
            SUCCESS_COUNT.inc()

    return result


@app.get("/metrics")
def metrics():
    return Response(
        prometheus_client.generate_latest(),
        media_type="text/plain; version=0.0.4"
    )