import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, Sun, Moon, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import UserMenu from "./UserMenu";
import UserGreeting from "./UserGreeting";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const totalItems = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");
  const [region, setRegion] = useState("AR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <motion.nav className="bg-yellow-400 dark:bg-gray-800 p-4 shadow-md sticky top-0 z-50 w-full" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo size={44} />

        <input
          type="search"
          placeholder="Buscar productos..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 dark:bg-gray-700 dark:text-white"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="flex items-center gap-3 text-sm text-black dark:text-white">
          <UserGreeting />
          <UserMenu />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:underline flex items-center gap-1"
          >
            <Menu size={18} /> Mi Mercado
          </button>

          <Link to="/help" className="hover:underline flex items-center gap-1">
            Ayuda
          </Link>

          <Link to="/cart" className="relative flex items-center gap-1 hover:underline">
            <ShoppingCart size={18} /> Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>

          <button onClick={toggleDarkMode} className="hover:underline flex items-center gap-1">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="hover:underline flex items-center gap-1">
            <Globe size={18} /> {language.toUpperCase()}
          </button>

          <button onClick={() => setRegion(region === "AR" ? "US" : "AR")} className="hover:underline flex items-center gap-1">
            <MapPin size={18} /> {region}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white dark:bg-gray-900 p-4 mt-2 shadow rounded text-black dark:text-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <NavItem to="/products" label="🛍️ Productos" />
            <NavItem to="/history" label="📑 Historial" />
            <NavItem to="/my-sales" label="📦 Mis Ventas" />
            <NavItem to="/reviews" label="📝 Reseñas" />
            <NavItem to="/categories" label="📚 Categorías" />
            <NavItem to="/promotions" label="💸 Promos" />
            <NavItem to="/chat" label="💬 Chat" />
            <NavItem to="/store" label="🏬 Tienda" />
            <NavItem to="/statistics" label="📈 Estadísticas" />
            <NavItem to="/coupon" label="🎁 Cupones" />
            <NavItem to="/tracking" label="📦 Seguimiento" />
          </div>
        </div>
      )}
    </motion.nav>
  );
};

const NavItem = ({ to, label }) => (
  <Link to={to} className="hover:underline flex items-center gap-1">
    {label}
  </Link>
);

export default Navbar;


