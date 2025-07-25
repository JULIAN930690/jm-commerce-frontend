import React from "react";
import { Link } from "react-router-dom";

const HorizontalCategorySlider = ({ categories = [], error = "" }) => {
  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  if (!categories.length) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold px-4 mb-2">Todas las Categorías</h2>
      <div className="flex overflow-x-auto gap-4 px-4 pb-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="min-w-[150px] bg-white border rounded-xl shadow p-4 flex-shrink-0 text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 mx-auto mb-2 object-contain"
            />
            <p className="text-sm font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCategorySlider;
