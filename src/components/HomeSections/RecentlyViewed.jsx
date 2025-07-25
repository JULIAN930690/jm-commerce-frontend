import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const RecentlyViewed = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("recently_viewed");
    if (items) {
      try {
        const parsed = JSON.parse(items);
        setRecent(parsed);
      } catch (e) {
        console.error("Error parsing recently viewed", e);
      }
    }
  }, []);

  if (!recent.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        👀 Inspirado en lo último que viste
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recent.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
