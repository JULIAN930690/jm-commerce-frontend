import React from 'react';

function Recommended() {
  const recommended = [
    { id: 4, name: 'Tablet Max', price: 499.99 },
    { id: 5, name: 'Smartwatch Fit', price: 199.99 },
    { id: 6, name: 'Cámara HD', price: 299.99 },
  ];

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">💡 Recomendado para ti</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommended.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommended;
