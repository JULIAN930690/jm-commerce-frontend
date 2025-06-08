import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: '📱 Tecnología', id: 'tech' },
  { name: '👕 Ropa', id: 'clothing' },
  { name: '🏠 Hogar', id: 'home' },
  { name: '📚 Libros', id: 'books' },
  { name: '🎮 Videojuegos', id: 'games' },
  { name: '🛒 Ofertas', id: 'offers' },
];

// Mock de productos por categoría
const mockProducts = [
  { id: 1, name: "Smartphone Galaxy", price: 899, category: "tech", image: "https://via.placeholder.com/150" },
  { id: 2, name: "TV 4K Ultra HD", price: 1299, category: "tech", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Camiseta Nike", price: 39, category: "clothing", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Jeans Levis", price: 59, category: "clothing", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Sofá de 3 plazas", price: 599, category: "home", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Lámpara LED", price: 29, category: "home", image: "https://via.placeholder.com/150" },
  { id: 7, name: "El Principito", price: 19, category: "books", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Harry Potter", price: 25, category: "books", image: "https://via.placeholder.com/150" },
  { id: 9, name: "PlayStation 5", price: 499, category: "games", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Nintendo Switch", price: 299, category: "games", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Oferta relámpago!", price: 49, category: "offers", image: "https://via.placeholder.com/150" },
];

function CategorySection() {
  return (
    <div className="my-8 px-4 space-y-12">
      {/* MENÚ VISUAL DE CATEGORÍAS */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Categorías populares</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIONES POR CATEGORÍA CON PRODUCTOS */}
      {categories.map((category) => {
        const filtered = mockProducts.filter(p => p.category === category.id);
        if (filtered.length === 0) return null;

        return (
          <section key={category.id} className="space-y-4">
            <motion.h2
              className="text-2xl font-semibold"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {category.name}
            </motion.h2>

            <motion.div
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[180px] bg-white rounded-xl shadow-md p-2 hover:scale-105 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <div className="mt-2">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}

export default CategorySection;

