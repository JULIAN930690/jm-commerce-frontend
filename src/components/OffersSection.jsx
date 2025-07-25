import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const OffersSection = () => {
  const { offers } = useProducts();

  if (!offers || offers.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Ofertas del día</h2>
        <p>No hay ofertas disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ofertas del día</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
