import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import AdminProductForm from "../components/AdminProductForm";

const API_URL = import.meta.env.VITE_API_URL || "https://jm-commerce-backend.vercel.app/api";

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

const CategoryDetail = () => {
  const { id } = useParams(); // ahora es el nombre
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/categories/by-name/${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error("Categoría no encontrada");
      const data = await res.json();
      setCategory(data);
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Error al cargar la categoría");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const handleProductAdded = () => {
    fetchCategory();
  };

  if (loading) return <div className="text-center p-6">Cargando categoría...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {category && (
        <div className="mb-6 text-center">
          <img
            src={categoryImages[category.name] || "/logo.png"}
            alt={category.name}
            className="w-32 h-32 object-cover mx-auto rounded"
          />
          <h1 className="text-3xl font-bold mt-2">{category.name}</h1>

          <div className="mt-4">
            <AdminProductForm categoryId={category.id} onProductAdded={handleProductAdded} />
          </div>
        </div>
      )}

      {products.length === 0 ? (
        <p className="text-gray-600">No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showActions={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;




