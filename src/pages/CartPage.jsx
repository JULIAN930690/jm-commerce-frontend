import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!cartItems.length)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">Tu carrito está vacío.</p>
        <Link to="/" className="text-yellow-600 font-semibold underline">
          Volver al inicio
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">🛒 Tu Carrito</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.product.title}</p>
              <p className="text-sm text-gray-500">
                Cantidad:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.product.id, parseInt(e.target.value))
                  }
                  className="w-16 border ml-2 rounded p-1 text-center"
                />
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-medium">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemoveItem(item.product.id)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <div className="text-right mt-6">
          <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          <Link
            to="/checkout"
            className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Ir al pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
