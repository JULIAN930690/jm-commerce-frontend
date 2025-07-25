import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000").replace(/\/$/, "");

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg w-full">
      <h2 className="text-xl font-bold mb-4 text-center">Categorías</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Link
            to={`/?category=${cat.id}`}
            key={cat.id}
            className="flex flex-col items-center gap-2 hover:bg-yellow-100 dark:hover:bg-gray-700 p-2 rounded-lg transition"
          >
            <span className="text-3xl">
              {cat.icon || "📦"}
            </span>
            <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
