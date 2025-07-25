import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";

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

const RecommendedByCategory = () => {
  const { categories, products } = useProducts();

  const allCategoryNames = Object.keys(categoryImages);

  const mergedCategories = allCategoryNames.map((name) => {
    const match = categories.find((c) => c.name === name);
    const id = match?.id || name;
    const categoryProducts = match
      ? products.filter((p) => p.category === match.id)
      : [];

    return {
      id,
      name,
      products: categoryProducts,
    };
  });

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold mb-6 text-center">🗂️ Todas las Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {mergedCategories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${encodeURIComponent(category.name)}`}
            className="bg-white border shadow rounded-lg p-4 text-center hover:shadow-md transition block"
          >
            <img
              src={categoryImages[category.name] || "/logo.png"}
              alt={category.name}
              className="w-20 h-20 mx-auto object-cover mb-2 rounded"
              onError={(e) => (e.target.src = "/logo.png")}
            />
            <h3 className="text-sm font-bold">{category.name}</h3>
            <p className="text-xs text-green-600 mt-1">
              {category.products.length > 0
                ? `${category.products.length} producto(s)`
                : "Sin productos"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedByCategory;




