import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionCarousel = ({ title = "", products = [] }) => {
  const validProducts = Array.isArray(products)
    ? products.filter((p) => p && typeof p === "object" && p.id)
    : [];

  if (validProducts.length === 0) return null;

  const fallbackImage = "https://placehold.co/300x300?text=Producto";

  const renderCard = (product) => {
    const { id, name = "Sin nombre", price = 0, image, image_url } = product;
    const imgSrc = image || image_url || fallbackImage;

    return (
      <motion.div
        key={id}
        className="min-w-[200px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex-shrink-0"
        whileHover={{ scale: 1.03 }}
      >
        <Link to={`/product/${id}`}>
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-44 object-cover rounded-t-2xl"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
          />
          <div className="p-3">
            <h3 className="text-sm font-semibold truncate">{name}</h3>
            <p className="text-green-600 font-bold mt-1">${Number(price).toFixed(2)}</p>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 px-2">{title}</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-2 pb-2">{validProducts.map(renderCard)}</div>
      </div>
    </motion.div>
  );
};

export default SectionCarousel;













