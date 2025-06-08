import { useState } from "react";
import { addToCart } from "../api/cartApi";
import { useNotification } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [adding, setAdding] = useState(false);
  const { triggerNotification } = useNotification();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      triggerNotification(⚠️ Debes iniciar sesión para agregar al carrito.", "info");
      return;
    }

    try {
      setAdding(true);
      await addToCart(product.id, 1, token);
      triggerNotification(`✅ ${product.name} agregado al carrito`, "success");
    } catch (error) {
      console.error(error);
      triggerNotification("❌ Error al agregar al carrito", "error");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div
      className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-white cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image || "https://dummyimage.com/300x200/cccccc/000000&text=Sin+imagen"}
        alt={product.name || "Imagen del producto"}
        className="w-full h-40 object-contain mb-2 rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://dummyimage.com/300x200/ff0000/ffffff&text=Imagen+no+disponible";
        }}
      />
      <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-1">{product.description}</p>
      <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        disabled={adding}
        className={`${
          adding ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
        } text-white font-bold py-2 px-4 rounded w-full transition`}
      >
        {adding ? "Agregando..." : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ProductCard;








