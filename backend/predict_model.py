import numpy as np
import joblib

# Load your ensemble model (Random Forest + XGBoost)
ensemble_model = joblib.load('ensemble_model.pkl')

def predict(data):
    # Prepare the data for prediction
    data_array = np.array([data])

    # Make prediction using the ensemble model
    final_pred = ensemble_model.predict(data_array)

    return final_pred[0]  # Return the prediction (single value)

# Example usage (ensure you replace this with actual input data):
if __name__ == "__main__":
    # Replace this with the actual data you'd like to predict on 
    sample_data = [1, 5, 10, 50, 30, 1, 4, 15, 2, 85, 10, 95, 20, 10, 50, 25, 2, 1, 30, 3, 10, 6, 40, 1, 0, 1001, 120, 5, 2, 2023, 25, 2022, 2]



    prediction = predict(sample_data)
    if(prediction == 0):
        print(f"Prediction: {prediction}")
        print(f"This user will churn")
    elif(prediction == 1):
        print(f"Prediction: {prediction}")
        print(f"This user will not churn")
    else:
        print(f"Prediction: {prediction}")
        print(f"Error")
    
    
