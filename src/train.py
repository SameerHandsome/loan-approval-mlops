import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import RidgeClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
import mlflow
import mlflow.sklearn
import optuna
import numpy as np
import os

os.makedirs("mlruns", exist_ok=True)
mlflow.set_tracking_uri("file:./mlruns")
mlflow.set_experiment("Loan_Approval_Models")

X = pd.read_csv("data/X.csv")
y = pd.read_csv("data/y.csv").values.ravel()
y = y.astype(int)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


def evaluate_model(model, X_test, y_test):
    preds = model.predict(X_test)
    acc = accuracy_score(y_test, preds)
    f1 = f1_score(y_test, preds)
    auc = roc_auc_score(y_test, preds)
    return acc, f1, auc

def ridge_objective(trial):
    alpha = trial.suggest_float("alpha", 0.001, 10.0, log=True)
    model = RidgeClassifier(alpha=alpha)
    model.fit(X_train, y_train)
    acc, _, _ = evaluate_model(model, X_test, y_test)
    return 1 - acc

ridge_study = optuna.create_study(direction="minimize")
ridge_study.optimize(ridge_objective, n_trials=15)

best_ridge_alpha = ridge_study.best_params["alpha"]
best_ridge = RidgeClassifier(alpha=best_ridge_alpha)
best_ridge.fit(X_train, y_train)
ridge_acc, ridge_f1, ridge_auc = evaluate_model(best_ridge, X_test, y_test)

with mlflow.start_run(run_name="Ridge_Classifier"):
    mlflow.log_params({"model": "RidgeClassifier", "alpha": best_ridge_alpha})
    mlflow.log_metrics({"Accuracy": ridge_acc, "F1_Score": ridge_f1, "ROC_AUC": ridge_auc})
    mlflow.sklearn.log_model(best_ridge, "model")

def dt_objective(trial):
    max_depth = trial.suggest_int("max_depth", 2, 20)
    min_samples_split = trial.suggest_int("min_samples_split", 2, 10)
    model = DecisionTreeClassifier(max_depth=max_depth, min_samples_split=min_samples_split, random_state=42)
    model.fit(X_train, y_train)
    acc, _, _ = evaluate_model(model, X_test, y_test)
    return 1 - acc

dt_study = optuna.create_study(direction="minimize")
dt_study.optimize(dt_objective, n_trials=15)

best_dt_params = dt_study.best_params
best_dt = DecisionTreeClassifier(**best_dt_params, random_state=42)
best_dt.fit(X_train, y_train)
dt_acc, dt_f1, dt_auc = evaluate_model(best_dt, X_test, y_test)

with mlflow.start_run(run_name="Decision_Tree_Classifier"):
    mlflow.log_params({"model": "DecisionTreeClassifier", **best_dt_params})
    mlflow.log_metrics({"Accuracy": dt_acc, "F1_Score": dt_f1, "ROC_AUC": dt_auc})
    mlflow.sklearn.log_model(best_dt, "model")

print("\n🔍 Ridge Classifier — Accuracy:", ridge_acc, "| F1:", ridge_f1, "| AUC:", ridge_auc)
print("🔍 Decision Tree — Accuracy:", dt_acc, "| F1:", dt_f1, "| AUC:", dt_auc)

if ridge_acc > dt_acc:
    print("\n✅ Ridge Classifier performed better and saved as Best_Model")
else:
    print("\n✅ Decision Tree Classifier performed better and saved as Best_Model")
