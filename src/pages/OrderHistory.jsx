import React from "react";
import { useUser } from "../context/UserContext";

const OrderHistory = () => {
  const { user } = useUser();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Historial de Compras</h1>
      {user && user.id ? (
        <p className="text-gray-600">Aquí se mostrará el historial de tus pedidos.</p>
      ) : (
        <p className="text-gray-500">Debes iniciar sesión para ver tu historial.</p>
      )}
    </div>
  );
};

export default OrderHistory;




