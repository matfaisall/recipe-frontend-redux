import React from "react";
import { Navigate } from "react-router-dom";

const AuthChacker = ({ children }) => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    return <Navigate to="/auth/login" replace="true" />;
  }
  return children;
};

export default AuthChacker;
