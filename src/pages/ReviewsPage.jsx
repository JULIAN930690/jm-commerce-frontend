import React from "react";
import { useUser } from "../context/UserContext";

const ReviewsPage = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Inicia sesión para ver tus reseñas</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mis Reseñas</h1>
      <p className="text-gray-600 mb-4">
        Aquí verás tus reseñas en productos comprados. (Ejemplo)
      </p>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          <h2 className="font-semibold">Producto Ejemplo 1</h2>
          <p>⭐️⭐️⭐️⭐️⭐️ Muy buen producto, recomendado.</p>
        </li>
        <li className="border p-4 rounded shadow">
          <h2 className="font-semibold">Producto Ejemplo 2</h2>
          <p>⭐️⭐️⭐️ Producto decente pero llegó con retraso.</p>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsPage;

