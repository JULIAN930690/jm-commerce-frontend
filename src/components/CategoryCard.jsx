import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <div
      className="border rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition bg-white"
      onClick={handleClick}
    >
      <img
        src={category.image || "https://via.placeholder.com/300x200?text=Sin+imagen"}
        alt={category.name}
        className="w-full h-36 object-cover mb-2 rounded-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://dummyimage.com/300x200/ff0000/ffffff&text=Imagen+no+disponible";
        }}
      />
      <h3 className="text-lg font-semibold text-center">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
