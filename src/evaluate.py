import mlflow
from mlflow.tracking import MlflowClient
import pandas as pd
import os

# ✅ Use local file storage (same as train.py)
mlflow_dir = os.path.abspath("mlruns")
mlflow.set_tracking_uri(f"file://{mlflow_dir}")
mlflow.set_experiment("Loan_Approval_Models")

client = MlflowClient()

# Get all runs from the experiment
experiment = client.get_experiment_by_name("Loan_Approval_Models")

if experiment is None:
    print("❌ No experiment found. Train models first.")
    exit()

# Get all runs from the experiment
runs = client.search_runs(
    experiment_ids=[experiment.experiment_id],
    order_by=["metrics.Accuracy DESC"]
)

if not runs:
    print("❌ No runs found in the experiment. Train models first.")
    exit()

# Collect metrics from all runs
model_metrics = []
for run in runs:
    metrics = run.data.metrics
    params = run.data.params
    
    accuracy = metrics.get("Accuracy")
    f1 = metrics.get("F1_Score")
    auc = metrics.get("ROC_AUC")
    model_name = params.get("model", "Unknown")
    
    model_metrics.append({
        "run_id": run.info.run_id,
        "run_name": run.info.run_name,
        "model": model_name,
        "accuracy": accuracy,
        "f1": f1,
        "roc_auc": auc
    })

df = pd.DataFrame(model_metrics)
print("\n📊 All Model Metrics:\n")
print(df.to_string(index=False))

# Find the best model based on F1 score (or accuracy if F1 is not available)
if df["f1"].notna().any():
    best_model = df.loc[df["f1"].idxmax()]
    metric_used = "F1 Score"
else:
    best_model = df.loc[df["accuracy"].idxmax()]
    metric_used = "Accuracy"

best_run_id = best_model["run_id"]
best_acc = best_model["accuracy"]
best_f1 = best_model["f1"]
best_model_name = best_model["model"]

print(f"\n🏆 Best Model (based on {metric_used}):")
print(f"   Model: {best_model_name}")
print(f"   Run ID: {best_run_id}")
print(f"   Accuracy: {best_acc:.4f}")
print(f"   F1 Score: {best_f1:.4f}")
print(f"   ROC AUC: {best_model['roc_auc']:.4f}")

# Register the best model (optional - for model registry)
try:
    # Try to register the model
    model_uri = f"runs:/{best_run_id}/model"
    model_details = mlflow.register_model(model_uri, "Best_Model")
    print(f"\n✅ Model registered as 'Best_Model' version {model_details.version}")
    
    # Transition to production
    client.transition_model_version_stage(
        name="Best_Model",
        version=model_details.version,
        stage="Production",
        archive_existing_versions=True
    )
    print(f"✅ Model version {model_details.version} promoted to 'Production'!")
    
except Exception as e:
    print(f"\n⚠️  Model registration skipped (not critical): {e}")
    print("   The best model is still identified and can be loaded using its run_id")

print(f"\n💡 To load the best model, use:")
print(f"   model = mlflow.sklearn.load_model('runs:/{best_run_id}/model')")
