// src/components/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ size = 48, showText = true }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
      aria-label="Ir al inicio"
    >
      <img
        src="/logo192.png" // Imagen real que ya subiste en /public
        alt="Logo de Mi Mercado"
        width={size}
        height={size}
        className="rounded-2xl object-contain"
        loading="lazy"
        decoding="async"
        aria-hidden="false"
      />
      {showText && (
        <span className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
          Mi Mercado
        </span>
      )}
    </Link>
  );
};

export default Logo;

