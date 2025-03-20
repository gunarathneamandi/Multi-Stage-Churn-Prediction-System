import { useState } from "react";
import "../components/ChurnForm.css";

// Helper function to calculate days between two dates
const calculateDaysDifference = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  const difference = today - date;
  return Math.floor(difference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
};

const ChurnForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    flirtinterests_friends: "",
    counts_kisses: "",
    profile_views: "",
    last_login: "",
    subscription_upgrade: "",
    flirtinterests_date: "",
    subscription_cost: "",
    time_to_first_message: "",
    activity_score: "",
    usage_frequency: "",
    profile_completeness: "",
    matches_made: "",
    interactions_with_premium_users: "",
    messages_sent: "",
    age: "",
    discount_offers: "",
    app_feedback: "",
    counts_pictures: "",
    flirtinterests_chat: "",
    trial_end_date: "",
    subscription_duration: "",
    messages_received: "",
    push_notifications_opt_in: "",
    renewal_status: "",
    user_id: "",
    daily_active_time: "",
    favorites_added: "",
    subscription_plan: "",
    subscription_start_date: "",
    counts_profilevisits: "",
    signup_date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert date fields to the number of days since the date
    const updatedFormData = { ...formData };

    // Convert date fields to days since date
    updatedFormData.days_since_subscription = calculateDaysDifference(formData.subscription_start_date);
    updatedFormData.days_since_last_login = calculateDaysDifference(formData.last_login);
    updatedFormData.days_since_trial_end_date = calculateDaysDifference(formData.trial_end_date);
    updatedFormData.days_since_signup_date = calculateDaysDifference(formData.signup_date);

    // Remove the original date fields
    delete updatedFormData.subscription_start_date;
    delete updatedFormData.last_login;
    delete updatedFormData.trial_end_date;
    delete updatedFormData.signup_date;

    console.log("Updated Data:", updatedFormData);
    // Here, you can send the updatedFormData to Firebase or your backend
  };

  return (
    <div className="churn-form-container">
      <div className="churn-form">
        <h2 className="form-title">Churn Prediction Form</h2>
        <form onSubmit={handleSubmit} className="form-fields">
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-section">
              <label className="form-label">{key.replace(/_/g, " ")}</label>
              <input
                type={["last_login", "trial_end_date", "subscription_start_date", "signup_date"].includes(key) ? "date" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          ))}
          <button type="submit" className="submit-btn">
            Predict Churn
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChurnForm;
