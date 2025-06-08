import React from 'react';
import { motion } from 'framer-motion';

const ProductCarousel = ({ products, sectionTitle }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{sectionTitle}</h2>
      <motion.div
        className="flex overflow-x-scroll space-x-4"
        whileTap={{ cursor: "grabbing" }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="w-64 h-80 bg-white p-4 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="mt-1 text-gray-600">${product.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCarousel;
