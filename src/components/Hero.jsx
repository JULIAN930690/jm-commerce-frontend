import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTruck, FaCreditCard, FaLock } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      className="bg-yellow-300 py-10 px-6 rounded-2xl shadow-lg mb-10 flex flex-col md:flex-row items-center justify-between"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Texto principal y llamado a la acción */}
      <div className="mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          🛍️ Bienvenido a Mi Mercado
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-4">
          Las mejores ofertas, lo más nuevo y envíos gratis a todo el país en pedidos desde $50.
        </p>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          Compra fácil, rápido y seguro. ¡Explora miles de productos hoy mismo!
        </p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Ver productos
        </Link>
      </div>

      {/* Imagen del logo */}
      <div className="flex flex-col items-center md:w-1/2">
        <img
          src="/logo.png"
          alt="Logo Mi Mercado"
          className="w-36 md:w-56 mb-4"
        />
        
        {/* Beneficios rápidos con íconos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-gray-800">
          <div className="flex items-center gap-2 justify-center">
            <FaTruck className="text-xl" />
            <span>Envíos rápidos</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaCreditCard className="text-xl" />
            <span>Pagos seguros</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaLock className="text-xl" />
            <span>Compra protegida</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

