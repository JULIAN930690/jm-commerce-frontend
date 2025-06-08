// src/components/FeaturedOffers.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FeaturedOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Suponiendo que el backend tiene una ruta para obtener ofertas
    fetch('http://localhost:8000/api/products/offers')
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error('Error al obtener ofertas:', err));
  }, []);

  return (
    <div className="bg-yellow-100 p-6 my-6 rounded">
      <h2 className="text-2xl font-bold text-center mb-4">¡Ofertas Especiales!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.length === 0 ? (
          <p className="text-center text-gray-500">No hay ofertas disponibles por ahora.</p>
        ) : (
          offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-md rounded p-4">
              <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
              <p className="text-red-500 mb-2">Descuento: {offer.discount}%</p>
              <p className="text-gray-700 mb-2">Precio: ${offer.price}</p>
              <Link to={`/product/${offer.id}`} className="text-blue-500 hover:underline">
                Ver detalles
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedOffers;
