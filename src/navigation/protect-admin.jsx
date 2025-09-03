import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const admin = localStorage.getItem("admin");
  const navigate = useNavigate();
  if (!admin) {
    return(
      <Navigate to={"/admin/login"} />
    )
  }
  return children;
}

export default ProtectedAdmin;
