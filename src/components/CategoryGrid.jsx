import React from "react";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";

function CategoryGrid() {
  const { categories } = useProducts();

  if (!categories || categories.length === 0) return null;

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">🗂️ Categorías populares</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
        {categories.map((category, index) => (
          <Link
            to={`/categories/${category.id}`}
            key={index}
            className="bg-yellow-100 p-4 rounded shadow hover:bg-yellow-200 cursor-pointer block"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;

