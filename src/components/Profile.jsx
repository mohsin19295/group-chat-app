import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./css/profile.css";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="profile-box">
        <div>
          <img src="https://via.placeholder.com/50" alt="" />
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        <p>{currentUser.email}</p>

        <button
          onClick={() => {
            navigate("/update-profile");
          }}
        >
          Update Profile
        </button>

        <div className="profile-btn-box">
          <button onClick={handleLogout}>Log Out</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
