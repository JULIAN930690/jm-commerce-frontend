import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <AlertTriangle size={48} className="text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
