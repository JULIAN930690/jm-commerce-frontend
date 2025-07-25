import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/config";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  const categoryImages = {
    "Electrónica": "/electronica.jpg",
    "Electrodomésticos": "/electrodomesticos.jpg",
    "Computación": "/computacion.jpg",
    "Celulares y Teléfonos": "/celulares.jpg",
    "TV, Audio y Video": "/tv.jpg",
    "Ropa": "/ropa.jpg",
    "Calzado": "/calzado.jpg",
    "Accesorios de Moda": "/accesorios.jpg",
    "Hogar": "/hogar.jpg",
    "Muebles": "/muebles.jpg",
    "Decoración": "/decoracion.jpg",
    "Herramientas": "/herramientas.jpg",
    "Autos": "/autos.jpg",
    "Motos": "/motos.jpg",
    "Camiones": "/camiones.jpg",
    "Náutica": "/lanchas.jpg",
    "Inmuebles": "/casas.jpg",
    "Deportes": "/deportes.jpg",
    "Fitness": "/fitness.jpg",
    "Camping": "/camping.jpg",
    "Juguetes": "/juguetes.jpg",
    "Bebés": "/bebes.jpg",
    "Alimentos y Bebidas": "/comida.jpg",
    "Mascotas": "/mascotas.jpg",
    "Libros": "/libros.jpg",
    "Instrumentos Musicales": "/instrumentos.jpg",
    "Salud y Belleza": "/belleza.jpg",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/categories`);
        if (!res.ok) throw new Error("Error al obtener categorías");
        const data = await res.json();

        const uniqueByName = [];
        const names = new Set();
        for (const c of data) {
          if (!names.has(c.name)) {
            names.add(c.name);
            uniqueByName.push(c);
          }
        }

        setCategories(uniqueByName);
      } catch (err) {
        console.error("Error al cargar categorías:", err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  if (!Array.isArray(categories)) return null;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${encodeURIComponent(cat.name)}`}
            className="border rounded-xl p-4 flex flex-col items-center hover:bg-gray-100 transition text-center shadow-sm hover:shadow-md bg-white"
          >
            <img
              src={categoryImages[cat.name] || "/logo192.png"}
              alt={cat.name}
              className="w-20 h-20 object-cover rounded mb-2"
              onError={(e) => (e.target.src = "/logo192.png")}
            />
            <span className="text-base font-semibold">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

