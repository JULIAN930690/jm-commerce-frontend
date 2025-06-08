import { motion } from "framer-motion";

const Checkout = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Método de pago</h2>
      {/* Aquí va el formulario de pago */}
    </motion.div>
  );
};

export default Checkout;
