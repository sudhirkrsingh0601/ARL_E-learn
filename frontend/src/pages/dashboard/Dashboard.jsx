import React from "react";
import "./dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      <div className="dashboard-content">
        <h2>Your Learning Dashboard</h2>
        <p>Start your learning journey by exploring our courses.</p>
      </div>
    </div>
  );
};

export default Dashboard;
