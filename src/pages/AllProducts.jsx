import React from "react";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products } = useProducts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todos los Productos</h1>
      {products?.length === 0 ? (
        <p className="text-gray-500">No hay productos para mostrar.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image || "https://via.placeholder.com/300x300?text=Producto"}
                alt={product.title || "Producto sin título"}
                className="w-full h-48 object-cover mb-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x300?text=Producto";
                }}
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;






