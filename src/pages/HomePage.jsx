import React from "react";
import { useProducts } from "../context/ProductContext";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SectionCarousel from "../components/SectionCarousel";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryFilter from "../components/CategoryFilter";
import ProductosPopulares from "../components/ProductosPopulares";

import RecentlyViewed from "../components/HomeSections/RecentlyViewed";
import OffersOfTheDay from "../components/HomeSections/OffersOfTheDay";
import BenefitsBanner from "../components/HomeSections/BenefitsBanner";
import RecommendedByCategory from "../components/HomeSections/RecommendedByCategory";

function HomePage() {
  const {
    products = [],
    categories = [],
    selectedCategory,
    setSelectedCategory,
    search = "",
    setSearch,
    minPrice = "",
    setMinPrice,
    maxPrice = "",
    setMaxPrice,
    sortBy = "created_at",
    setSortBy,
    order = "desc",
    setOrder,
    offers = [],
  } = useProducts();

  const validProducts = Array.isArray(products)
    ? products.filter((p) => p && typeof p === "object" && p.id)
    : [];

  const bestSellers = validProducts.slice(0, 6);
  const recommended = validProducts.slice(6, 12);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <section className="text-center p-6 bg-yellow-100 rounded-lg shadow-md space-y-4">
        <h1 className="text-3xl font-extrabold">🛍️ Bienvenido a Mi Mercado</h1>
        <p className="text-lg max-w-xl mx-auto">
          Las mejores ofertas, lo más nuevo y envíos gratis a todo el país en pedidos desde $50.
        </p>
        <p className="text-md max-w-xl mx-auto">
          Compra fácil, rápido y seguro. ¡Explora miles de productos hoy mismo!
        </p>
        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          Ver productos
        </button>
        <div className="flex justify-center gap-8 mt-6 text-sm font-medium text-gray-700">
          <div>🚚 Envíos rápidos</div>
          <div>💳 Pagos seguros</div>
          <div>🔒 Compra protegida</div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎉 Promociones y productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PromoCard src="/promo-celulares.jpg" label="Celulares en oferta" />
          <PromoCard src="/promo-ropa.jpg" label="Ropa con descuento" />
          <PromoCard src="/ropa.jpg" label="Moda para vos" />
          <PromoCard src="/alimentos.jpg" label="Alimentos seleccionados" />
        </div>
      </section>

      <BenefitsBanner />
      <RecentlyViewed />

      {/* Filtros de búsqueda */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded col-span-2"
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="created_at">Recientes</option>
          <option value="price">Precio</option>
          <option value="name">Nombre</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </div>

      {/* Productos Populares */}
      <ProductosPopulares />

      {/* ✅ TODAS LAS CATEGORÍAS */}
      <RecommendedByCategory />

      {/* 🔥 Ofertas del día */}
      {offers.length > 0 && (
        <SectionCarousel title="🔥 Ofertas del día" products={offers} />
      )}

      {/* ⭐ Más vendidos */}
      {bestSellers.length > 0 && (
        <SectionCarousel title="⭐ Más vendidos" products={bestSellers} />
      )}

      {/* 🛒 Todos los productos destacados */}
      <FeaturedProducts products={validProducts} />
    </div>
  );
}

const PromoCard = ({ src, label }) => (
  <div className="relative">
    <img
      src={src}
      alt={label}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-3 py-1 rounded text-sm font-semibold">
      {label}
    </div>
  </div>
);

export default HomePage;

