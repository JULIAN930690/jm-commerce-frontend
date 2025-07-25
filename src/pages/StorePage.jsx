import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StorePage = ({ userId }) => {
  const [store, setStore] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/stores/${userId}`).then((res) => setStore(res.data));
  }, [userId]);

  if (!store) return <div>Cargando tienda...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{store.name}</h1>
      <p className="text-gray-700">{store.description}</p>
    </div>
  );
};

export default StorePage;
