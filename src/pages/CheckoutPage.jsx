import React from "react";
import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  paymentMethod: yup.string().required("Selecciona un método de pago"),
});

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const confirmed = window.confirm(
      `¿Confirmar compra con método: ${data.paymentMethod}?`
    );
    if (confirmed) {
      toast.success("¡Orden confirmada! Gracias por tu compra.");
      clearCart();
      setTimeout(() => navigate("/orden-exitosa"), 1000);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
        Finalizar Compra
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="mb-4 space-y-1">
            {cartItems.map((item) => (
              <li key={item.product.id} className="text-sm">
                {item.product.title} x {item.quantity} = $
                {(item.product.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="text-right font-bold mb-6">
            Total: ${total.toFixed(2)}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">
                Método de pago
              </label>
              <select
                {...register("paymentMethod")}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Selecciona una opción</option>
                <option value="credit_card">💳 Tarjeta de crédito</option>
                <option value="paypal">🅿️ PayPal</option>
                <option value="bank_transfer">🏦 Transferencia bancaria</option>
                <option value="cash_on_delivery">🚚 Contra entrega</option>
              </select>
              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentMethod.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
            >
              Confirmar compra
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default CheckoutPage;

