import React from "react";
import { Link } from "react-router-dom";

const dummyCategories = [
  { id: 1, name: "Electrónica" },
  { id: 2, name: "Ropa" },
  { id: 3, name: "Hogar" },
  { id: 4, name: "Deportes" },
  { id: 5, name: "Alimentos" },
];

const CategoriesPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dummyCategories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.id}`}
            className="border p-4 rounded hover:bg-gray-100 transition text-center"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

