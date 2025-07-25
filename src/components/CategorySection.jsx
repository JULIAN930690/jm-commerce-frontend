import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

function CategorySection() {
  const { categories = [], products = [] } = useProducts();
  const [localCategories, setLocalCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!categories.length || !products.length) {
      setError("No se pudieron cargar las categorías.");
    } else {
      setError("");
      // Agrupar productos por categoría
      const grouped = categories.map((cat) => {
        const categoryProducts = products.filter(p => p.category === cat.id);
        return {
          ...cat,
          products: categoryProducts,
        };
      }).filter(group => group.products.length > 0); // eliminar vacíos

      setLocalCategories(grouped);
    }
  }, [categories, products]);

  if (error && !localCategories.length) {
    return (
      <section className="text-center py-8 text-red-600">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <h2 className="text-3xl font-bold mb-6 text-center">🗂️ Todas las Categorías</h2>
      {localCategories.map((cat) => (
        <div key={cat.id}>
          <h3 className="text-xl font-semibold mb-4">{cat.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cat.products.map((product) => (
              <div key={product.id} className="border rounded-lg p-2 text-center bg-white shadow hover:shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-28 object-cover mb-2 rounded"
                />
                <h4 className="text-sm font-medium">{product.name}</h4>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default CategorySection;




