import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";  // Importamos motion de framer-motion
import { useNotification } from "../context/NotificationContext"; // Importamos el hook

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { triggerNotification } = useNotification(); // Usamos el triggerNotification

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo cargar el producto.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Aquí puedes agregar lógica para manejar el carrito (como hacer una API POST)
    triggerNotification("Producto agregado al carrito", "success");
  };

  if (loading) return <div className="text-center my-8 text-gray-600">Cargando producto...</div>;
  if (error) return <div className="text-center my-8 text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center my-8 text-gray-500">Producto no encontrado.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description || "Sin descripción"}</p>
        <p className="text-lg font-semibold mb-4">Precio: ${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
        >
          Agregar al carrito
        </button>

        {product.images && product.images.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Imágenes del producto</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={`http://localhost:8000${img.url}`}
                  alt={`Imagen ${idx + 1}`}
                  className="rounded shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductPage;

