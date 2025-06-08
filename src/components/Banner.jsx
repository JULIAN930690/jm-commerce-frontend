// frontend/src/components/Banner.jsx
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-xl shadow-lg mb-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold">🔥 Ofertas imperdibles esta semana</h1>
      <p className="mt-2">Descuentos en tecnología, hogar y más. ¡Aprovechá ahora!</p>
    </motion.div>
  );
};

export default Banner;
