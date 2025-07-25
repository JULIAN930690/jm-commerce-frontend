import React from "react";
import ProductCard from "../ProductCard";

const FavoritesInspired = ({ products }) => {
  if (!products?.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        ⭐ Inspirado en tus favoritos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FavoritesInspired;
