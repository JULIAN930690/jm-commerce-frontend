import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

function FeaturedOffers() {
  const { offers } = useProducts();

  return (
    <div className="bg-yellow-100 p-6 my-6 rounded">
      <h2 className="text-2xl font-bold text-center mb-4">🎯 Ofertas Especiales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers?.length === 0 ? (
          <p className="text-center text-gray-500">No hay ofertas disponibles por ahora.</p>
        ) : (
          offers.map((offer) => (
            <div key={offer.id} className="bg-white shadow-md rounded p-4 text-center">
              <img
                src={offer.image || "/logo192.png"}
                alt={offer.name}
                className="w-full h-40 object-cover mb-2 rounded"
                onError={(e) => (e.target.src = "/logo192.png")}
              />
              <h3 className="text-lg font-semibold">{offer.name}</h3>
              <p className="text-red-600 font-bold mb-1">${offer.price}</p>
              <Link
                to={`/product/${offer.id}`}
                className="text-blue-500 hover:underline"
              >
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
