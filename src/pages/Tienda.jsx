import React from "react";
import ProductList from "../components/ProductList";

export default function Tienda() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Todos los Productos</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Explora todos los productos disponibles en nuestra tienda. Filtrá por categorías, ordená por precio o fecha, y encontrá las mejores ofertas.
      </p>

      <ProductList />
    </main>
  );
}
