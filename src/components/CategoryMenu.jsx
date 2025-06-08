import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  return (
    <div className="bg-white shadow-md p-4 rounded w-full md:w-64">
      <h2 className="text-lg font-semibold mb-2">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              to={`/?category=${cat.id}`}
              className="block text-blue-600 hover:underline"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
