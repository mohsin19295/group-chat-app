import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  if (!auth.currentUser) {
    return <Navigate to="login" />;
  }
  return children;
}
