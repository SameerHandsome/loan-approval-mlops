import mlflow
from mlflow.tracking import MlflowClient
import pandas as pd


mlflow.set_tracking_uri("http://127.0.0.1:5000")
client = MlflowClient()

model_name = "Best_Model"
model_versions = client.search_model_versions(f"name='{model_name}'")

if not model_versions:
    print(" No models found in the registry. Train models first.")
    exit()

model_metrics = []

for mv in model_versions:
    run_id = mv.run_id
    run = client.get_run(run_id)
    metrics = run.data.metrics

    accuracy = metrics.get("Accuracy")
    f1 = metrics.get("F1_Score")
    auc = metrics.get("ROC_AUC")

    model_metrics.append({
        "version": mv.version,
        "run_id": run_id,
        "accuracy": accuracy,
        "f1": f1,
        "roc_auc": auc
    })

df = pd.DataFrame(model_metrics)
print("\n Model Metrics:\n", df)


if df["f1"].notna().any():
    best_model = df.loc[df["f1"].idxmax()]
else:
    best_model = df.loc[df["accuracy"].idxmax()]

best_version = int(best_model["version"])
best_acc = best_model["accuracy"]
best_f1 = best_model["f1"]

print(f"\n🏆 Best Model → Version: {best_version} | Accuracy: {best_acc:.4f} | F1: {best_f1:.4f}")


client.transition_model_version_stage(
    name=model_name,
    version=best_version,
    stage="Production",
    archive_existing_versions=True
)

print(f"\n Model version {best_version} promoted to 'Production' successfully!")
