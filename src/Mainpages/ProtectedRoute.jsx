import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  if (localStorage.getItem("token") == null) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default ProtectedRouter;
