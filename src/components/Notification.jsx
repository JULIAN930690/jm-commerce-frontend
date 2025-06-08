import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, type = "info", onClose }) => {
  if (!message) return null;

  const colorMap = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white ${colorMap[type]}`}
      >
        <div className="flex items-center justify-between gap-4">
          <span>{message}</span>
          <button onClick={onClose} className="text-white font-bold">X</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;

