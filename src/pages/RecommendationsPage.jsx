import React, { useEffect, useState } from 'react';
import { getRecommendedProducts } from '../utils/recommendation';
import ProductCard from '../components/ProductCard';

const RecommendationsPage = ({ userId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await getRecommendedProducts(userId);
      setProducts(res);
    };
    if (userId) load();
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recomendaciones para vos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
