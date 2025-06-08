import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function PrivateRoute({ element }) {
  const { user, loading } = useUser();

  if (loading) {
    return <div className="text-center mt-10">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
}

export default PrivateRoute;


