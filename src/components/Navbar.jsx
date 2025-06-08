import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle, List, Tag, HelpCircle } from "lucide-react";
import UserMenu from "./UserMenu";
import UserGreeting from "./UserGreeting";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      className="bg-yellow-400 p-4 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold text-black">
          🛒 Mi Mercado
        </Link>

        <input
          type="search"
          placeholder="Buscar productos..."
          className="w-full sm:w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />

        <div className="flex gap-4 items-center">
          <UserGreeting />
          <UserMenu />

          {/* 📦 Productos */}
          <Link to="/products" className="text-sm text-black hover:underline">
            🛍️ Productos
          </Link>

          {/* 📑 Historial de compras */}
          <Link to="/history" className="text-sm text-black hover:underline">
            📑 Historial
          </Link>

          {/* 📦 Mis ventas/publicaciones */}
          <Link to="/my-sales" className="text-sm text-black hover:underline">
            📦 Mis Ventas
          </Link>

          {/* 📝 Reseñas */}
          <Link to="/reviews" className="text-sm text-black hover:underline">
            📝 Reseñas
          </Link>

          {/* 📂 Categorías */}
          <Link to="/categories" className="text-sm text-black hover:underline flex items-center gap-1">
            <List size={18} /> Categorías
          </Link>

          {/* 🏷️ Promos */}
          <Link to="/promotions" className="text-sm text-black hover:underline flex items-center gap-1">
            <Tag size={18} /> Promos
          </Link>

          {/* ❓ Ayuda */}
          <Link to="/help" className="text-sm text-black hover:underline flex items-center gap-1">
            <HelpCircle size={18} /> Ayuda
          </Link>

          {/* 🛒 Carrito */}
          <Link
            to="/cart"
            className="text-sm text-black hover:underline flex items-center gap-1 relative"
          >
            <ShoppingCart size={18} />
            Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;





