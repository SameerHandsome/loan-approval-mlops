import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
import os

data = pd.read_csv("data/loan_approval.csv")

print("Shape:", data.shape)
print("Columns:", data.columns.tolist())


for col in data.columns:
    if data[col].dtype == "object":
        data[col] = data[col].fillna(data[col].mode()[0])
    else:
        data[col] = data[col].fillna(data[col].mean())

label_encoders = {}
for col in data.select_dtypes(include=["object"]).columns:
    le = LabelEncoder()
    data[col] = le.fit_transform(data[col])
    label_encoders[col] = le

print("\nEncoded Columns:", list(label_encoders.keys()))

scaler = StandardScaler()
numeric_cols = data.select_dtypes(include=["int64", "float64"]).columns
data[numeric_cols] = scaler.fit_transform(data[numeric_cols])

target_col = "loan_approved"  
if target_col not in data.columns:
    raise ValueError(f"❌ Target column '{target_col}' not found in dataset!")

X = data.drop(columns=[target_col])
y = data[target_col]

X.to_csv("data/X.csv", index=False)
y.to_csv("data/y.csv", index=False)

print("\n Cleaned data saved to 'data/' folder successfully!")
