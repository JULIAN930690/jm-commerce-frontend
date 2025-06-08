import React from "react";
import { useProducts } from "../context/ProductContext";

import PromoBanner from "../components/PromoBanner";
import Banner from "../components/Banner";
import BannerSlider from "../components/BannerSlider";
import CategorySection from "../components/CategorySection";
import CategoryFilter from "../components/CategoryFilter";
import SectionCarousel from "../components/SectionCarousel";
import FeaturedProducts from "../components/FeaturedProducts";

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
    ? products.filter(p => p && typeof p === "object" && p.id)
    : [];

  const validOffers = Array.isArray(offers)
    ? offers.filter(p => p && typeof p === "object" && p.id)
    : [];

  const bestSellers = validProducts.slice(0, 6);
  const recommended = validProducts.slice(6, 12);

  return (
    <div className="container mx-auto p-4">
      <PromoBanner />
      <Banner />
      <BannerSlider />
      <CategorySection />

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

      {validOffers.length > 0 && (
        <SectionCarousel title="🔥 Ofertas del día" products={validOffers} />
      )}

      {bestSellers.length > 0 && (
        <SectionCarousel title="⭐ Más vendidos" products={bestSellers} />
      )}

      {recommended.length > 0 && (
        <SectionCarousel title="✨ Recomendados para ti" products={recommended} />
      )}

      <FeaturedProducts products={validProducts} />
    </div>
  );
}

export default HomePage;












