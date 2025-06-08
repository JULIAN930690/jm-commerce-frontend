const HelpPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ayuda</h1>
      <p className="text-gray-600 mb-6">¿Necesitas ayuda? Aquí encontrarás respuestas a las preguntas más frecuentes.</p>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">¿Cómo comprar?</h2>
          <p className="text-gray-700">Para comprar, solo tienes que añadir el producto que te interesa a tu carrito, luego proceder al checkout y seleccionar el método de pago que prefieras.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">¿Cómo vender?</h2>
          <p className="text-gray-700">Para vender tus productos, necesitas registrarte como vendedor y agregar tus productos desde tu panel de vendedor. Después, los compradores podrán verlos y comprarlos.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">¿Métodos de pago aceptados?</h2>
          <p className="text-gray-700">Aceptamos tarjeta de crédito, débito, PayPal, Mercado Pago, Yape, y transferencias bancarias.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">¿Qué pasa si tengo un problema con mi pedido?</h2>
          <p className="text-gray-700">Si tienes problemas con tu pedido, puedes contactarnos desde la sección de 'Soporte' en tu perfil, o enviar un correo a nuestro servicio de atención al cliente.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">¿Cómo realizar un reembolso?</h2>
          <p className="text-gray-700">Si tu pedido llega dañado o no es lo que esperabas, puedes solicitar un reembolso a través de la opción 'Solicitar Reembolso' en tu historial de compras.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">¿Cuánto tarda en llegar mi pedido?</h2>
          <p className="text-gray-700">El tiempo de entrega depende de tu ubicación y el vendedor. Generalmente, los pedidos tardan entre 3 y 7 días hábiles.</p>
        </div>
        {/* Puedes agregar más preguntas aquí */}
      </div>
    </div>
  );
};

export default HelpPage;
