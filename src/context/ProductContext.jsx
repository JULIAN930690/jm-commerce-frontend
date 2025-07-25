import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const dummyProducts = [
  {
    id: 1,
    name: "Smartphone Galaxy S21",
    price: 799,
    category: "electronics",
    image: "/images/products/smartphone-galaxy.jpg",
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Laptop Lenovo ThinkPad",
    price: 1200,
    category: "electronics",
    image: "/images/products/laptop-lenovo.jpg",
    created_at: "2024-05-15T12:00:00Z",
  },
  {
    id: 3,
    name: "Camiseta Nike",
    price: 35,
    category: "clothing",
    image: "/images/products/camiseta-nike.jpg",
    created_at: "2024-07-01T09:00:00Z",
  },
  {
    id: 4,
    name: "Zapatos Adidas Running",
    price: 80,
    category: "clothing",
    image: "/images/products/zapatos-adidas.jpg",
    created_at: "2024-06-20T15:00:00Z",
  },
  {
    id: 5,
    name: "Sofá 3 plazas moderno",
    price: 550,
    category: "home",
    image: "/images/products/sofa-3plazas.jpg",
    created_at: "2024-05-30T11:00:00Z",
  },
  {
    id: 6,
    name: "Lámpara LED de mesa",
    price: 40,
    category: "home",
    image: "/images/products/lampara-led.jpg",
    created_at: "2024-06-25T14:00:00Z",
  },
];

const dummyCategories = [
  { id: "electronics", name: "Electrónica" },
  { id: "clothing", name: "Ropa" },
  { id: "home", name: "Hogar" },
];

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

  const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000").replace(/\/$/, "");

  const getFilteredProducts = () => {
    let filtered = dummyProducts;

    if (search.trim())
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    if (selectedCategory)
      filtered = filtered.filter((p) => p.category === selectedCategory);

    if (minPrice !== "")
      filtered = filtered.filter((p) => p.price >= Number(minPrice));

    if (maxPrice !== "")
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));

    if (sortBy) {
      filtered = filtered.sort((a, b) => {
        if (sortBy === "price") {
          return order === "asc" ? a.price - b.price : b.price - a.price;
        } else if (sortBy === "name") {
          return order === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else if (sortBy === "created_at") {
          return order === "asc"
            ? new Date(a.created_at) - new Date(b.created_at)
            : new Date(b.created_at) - new Date(a.created_at);
        }
        return 0;
      });
    }

    const pageSize = 6;
    const total = Math.ceil(filtered.length / pageSize);
    setTotalPages(total);

    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  };

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
      setProducts(getFilteredProducts());
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
      setOffers([
        {
          id: 101,
          name: "Oferta Smartphone Samsung",
          price: 699,
          image: "/images/products/smartphone-galaxy.jpg",
        },
        {
          id: 102,
          name: "Oferta Camiseta Adidas",
          price: 25,
          image: "/images/products/camiseta-nike.jpg",
        },
      ]);
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
      setCategories(dummyCategories);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOffers();
    fetchCategories();
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
