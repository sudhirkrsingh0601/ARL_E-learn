import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./common.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <div className="sidebar-menu">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/course">Courses</Link>
        <Link to="/admin/users">Users</Link>
        <button onClick={logoutHandler} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 