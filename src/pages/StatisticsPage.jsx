import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatisticsPage = () => {
  const [data, setData] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/statistics/me`).then((res) => setData(res.data));
  }, []);

  if (!data) return <div>Cargando estadísticas...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Estadísticas</h2>
      <ul>
        <li>Ventas totales: {data.total_sales}</li>
        <li>Productos vendidos: {data.products_sold}</li>
        <li>Clicks en productos: {data.total_clicks}</li>
      </ul>
    </div>
  );
};

export default StatisticsPage;
