const CartItem = ({ item, onRemove }) => {
  if (!item?.product) return null;

  return (
    <div className="border p-4 rounded flex justify-between items-center shadow bg-white">
      <div className="flex items-center gap-4">
        <img
          src={item.product.image || "/placeholder.png"}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="font-semibold text-lg">{item.product.name}</p>
          <p className="text-sm text-gray-600">
            ${item.product.price.toFixed(2)} x {item.quantity}
          </p>
          <p className="text-sm font-medium">
            Total: ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.product.id)}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;


