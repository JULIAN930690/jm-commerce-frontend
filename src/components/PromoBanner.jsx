// src/components/PromoBanner.jsx
import React from "react";

// ✅ Usamos las imágenes reales que subiste a /public
const banners = [
  "/promo-celulares.jpg",
  "/promo-ropa.jpg",
];

const PromoBanner = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {banners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner promoción ${i + 1}`}
            className="w-full object-cover h-[200px] md:h-[300px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;


