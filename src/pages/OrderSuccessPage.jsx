import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Icono de éxito

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">¡Compra realizada con éxito!</h1>
      <p className="text-center text-gray-600 mb-6">
        Gracias por tu compra. Pronto recibirás la confirmación en tu correo.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default OrderSuccessPage;

