import React, { useState } from 'react';
import axios from 'axios';

const PromotionForm = ({ productId }) => {
  const [budget, setBudget] = useState('');
  const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

  const submitPromotion = async () => {
    await axios.post(`${BASE_URL}/promotions/create`, {
      product_id: productId,
      budget: parseFloat(budget),
    });
    alert('Promoción creada con éxito');
  };

  return (
    <div className="p-2 border rounded">
      <h3 className="font-semibold mb-2">Promocionar producto</h3>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Presupuesto en USD"
        className="border p-2 w-full mb-2"
      />
      <button onClick={submitPromotion} className="bg-blue-600 text-white px-4 py-2 rounded">
        Crear promoción
      </button>
    </div>
  );
};

export default PromotionForm;
