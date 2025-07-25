import React, { useEffect, useState } from 'react';
import { getRecommendedProducts } from '../utils/recommendation';

const RecommendationList = ({ userId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getRecommendedProducts(userId).then(setProducts);
  }, [userId]);

  if (!products.length) return null;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Recomendados para vos</h2>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <li key={p.id} className="border p-2 rounded bg-white shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
