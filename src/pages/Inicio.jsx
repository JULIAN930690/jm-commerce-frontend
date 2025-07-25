import React from "react";
import ProductosPopulares from "../components/ProductosPopulares";
import PromotionsPage from "./PromotionsPage";
import CategoriesPage from "./CategoriesPage";

export default function Inicio() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra tienda</h1>
        <p className="text-lg text-gray-700">Explora los productos más populares, promociones y categorías.</p>
      </section>

      <ProductosPopulares />
      
      <section className="my-12">
        <PromotionsPage />
      </section>

      <section className="my-12">
        <CategoriesPage />
      </section>
    </main>
  );
}
