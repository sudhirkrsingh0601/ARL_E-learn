import React from "react";
import Sidebar from "./Sidebar";
import "./common.css";

const Layout = ({ children }) => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
