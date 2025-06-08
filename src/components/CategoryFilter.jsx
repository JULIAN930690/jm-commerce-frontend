import React from "react";
import { useProducts } from "../context/ProductContext";

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();

  // Validación para evitar errores si categories no está cargado aún
  const categoryList = Array.isArray(categories) ? categories : [];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value !== "" ? Number(value) : "");
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filtrar por categoría</h3>
      <select
        className="w-full p-2 border border-gray-300 rounded"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">Todas las categorías</option>
        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;



