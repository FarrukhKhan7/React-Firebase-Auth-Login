import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth} from "../firebase";
import useUserRole from "../hooks/useUserRole";

export default function PrivateRoute({ children, adminOnly=false }) {
  const user = auth.currentUser;
  const location = useLocation();
  const { role, loading } = useUserRole();

  if (loading) return <div>Loading...</div>;
  console.log(role);
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  // Block non-admins from admin-only routes
  if (adminOnly && role !== "admin") {
    return <Navigate to="/" replace />; // Redirect to dashboard if not admin
  }

  return children;
}