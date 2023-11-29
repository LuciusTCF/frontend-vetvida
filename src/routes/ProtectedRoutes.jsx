import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, estadoLogin}) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
if (estadoLogin){
  if (token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

};

export default ProtectedRoutes;
