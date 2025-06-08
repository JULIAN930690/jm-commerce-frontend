// src/components/AddToCartButton.jsx
import React from "react";
import { addToCart } from "../api/cartApi";
import { toast } from "react-toastify";

const AddToCartButton = ({ productId }) => {
  const handleAdd = async () => {
    try {
      await addToCart(productId);
      toast.success("Producto agregado al carrito 🎉");
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      toast.error("Error al agregar al carrito");
    }
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
    >
      Agregar al Carrito
    </button>
  );
};

export default AddToCartButton;
