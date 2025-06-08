import React from 'react';

function BestSellers() {
  const bestSellers = [
    { id: 1, name: 'Auriculares Gamer', price: 99.99 },
    { id: 2, name: 'Laptop Pro', price: 1199.99 },
    { id: 3, name: 'Smartphone Z', price: 899.99 },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">🔥 Más vendidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestSellers.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
