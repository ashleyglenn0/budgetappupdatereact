import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem("jwtToken"); // Check if JWT token exists

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;