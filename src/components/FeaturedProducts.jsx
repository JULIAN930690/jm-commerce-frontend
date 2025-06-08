import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';

const FeaturedProducts = () => {
  const { offers } = useProducts();

  return (
    <section className="mt-10 px-4">
      <h2 className="text-xl font-bold mb-4">🏷️ Ofertas destacadas</h2>

      {!offers ? (
        <p className="text-gray-500">Cargando productos...</p>
      ) : offers.length === 0 ? (
        <p className="text-gray-500">No hay productos en oferta por ahora.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {offers.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-md rounded p-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.image || "https://via.placeholder.com/200"}
                alt={product.name || "Producto sin nombre"}
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <h3 className="font-semibold">{product.name || "Sin nombre"}</h3>
              <div className="mb-2">
                {product.discount ? (
                  <div>
                    <span className="line-through text-gray-400 text-sm mr-2">
                      ${product.original_price || (product.price + product.discount)}
                    </span>
                    <span className="text-green-600 font-bold">
                      ${product.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-700">${product.price}</span>
                )}
              </div>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Ver más
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;

