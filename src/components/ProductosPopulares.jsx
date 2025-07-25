import React from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

export default function ProductosPopulares() {
  const { products = [] } = useProducts();
  const populares = products
    .filter(prod => prod.popular || prod.rating >= 4.5)
    .slice(0, 6);

  if (!populares.length)
    return <p className="text-center text-gray-500">No hay productos populares disponibles.</p>;

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Productos Populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {populares.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}
