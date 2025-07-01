import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [offers, setOffers] = useState([]);

  // ✅ Elimina doble /api
  const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000").replace(/\/$/, "");

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams();

      if (search.trim()) params.append("search", search);
      if (selectedCategory) params.append("category", selectedCategory);
      if (minPrice !== "") params.append("min_price", minPrice);
      if (maxPrice !== "") params.append("max_price", maxPrice);
      if (sortBy) params.append("sort_by", sortBy);
      if (order) params.append("order", order);
      params.append("page", currentPage);

      const response = await fetch(`${API_URL}/products?${params.toString()}`);
      if (!response.ok) throw new Error("Error al obtener productos");

      const data = await response.json();
      setProducts(data.products || []);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  const fetchOffers = async () => {
    try {
      const res = await fetch(`${API_URL}/products/offers`);
      if (!res.ok) throw new Error("Error al obtener ofertas");
      const data = await res.json();
      setOffers(data.offers || []);
    } catch (error) {
      console.error("Error al cargar ofertas:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_URL}/categories`);
      if (!res.ok) throw new Error("Error al obtener categorías");
      const data = await res.json();
      setCategories(data || []);
    } catch (error) {
      console.error("Error al cargar categorías:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOffers();
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, selectedCategory, minPrice, maxPrice, sortBy, order, currentPage]);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        search,
        setSearch,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        order,
        setOrder,
        currentPage,
        setCurrentPage,
        totalPages,
        offers,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);


















