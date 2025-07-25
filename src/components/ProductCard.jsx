import { useState } from "react";
import { addToCart } from "../api/cartApi";
import { useNotification } from "../context/NotificationContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { triggerNotification } = useNotification();
  const { fetchProducts } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const handleAddToCart = async () => {
    if (!token) {
      triggerNotification("⚠️ Debes iniciar sesión para agregar al carrito.", "info");
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

  const handleDelete = async (e) => {
    e.stopPropagation();
    const confirm = window.confirm(`¿Eliminar producto "${product.name}"?`);
    if (!confirm) return;

    try {
      setDeleting(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products/${product.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error al eliminar producto");
      triggerNotification("🗑️ Producto eliminado correctamente", "success");
      fetchProducts();
    } catch (err) {
      console.error(err);
      triggerNotification("❌ Error al eliminar producto", "error");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-white cursor-pointer relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image_url || "/images/default-product.jpg"}
        alt={product.name || "Imagen del producto"}
        className="w-full h-40 object-contain mb-2 rounded"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/logo.png";
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

      {/* BOTÓN ELIMINAR SOLO SI HAY TOKEN Y ESTÁS EN /categories/:id */}
      {token && location.pathname.startsWith("/categories/") && (
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={`absolute top-2 right-2 text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded ${
            deleting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {deleting ? "Eliminando..." : "Eliminar"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;

