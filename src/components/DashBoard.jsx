import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-container">
        <h2>Group Chat App</h2>
        </div>
        <div
          onClick={() => {
            navigate("/profile");
          }}
          className="logo-box"
        >
          <img src="https://via.placeholder.com/50" alt="" />
        </div>
    </>
  );
}
