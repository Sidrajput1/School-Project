import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth({ allowedRoles }) {
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    const isAdmin = isLoggedIn && role === "ADMIN";

    return isAdmin ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;