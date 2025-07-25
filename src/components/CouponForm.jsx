import React, { useState } from 'react';
import axios from 'axios';

const CouponForm = ({ onApply }) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

  const applyCoupon = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/coupons/apply`, { code });
      onApply(response.data.discount);
      setMessage('Cupón aplicado: -' + response.data.discount + '%');
    } catch (err) {
      setMessage('Cupón inválido');
    }
  };

  return (
    <div className="p-2">
      <input
        className="border p-2 mr-2"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código de cupón"
      />
      <button onClick={applyCoupon} className="bg-green-600 text-white px-4 py-2 rounded">
        Aplicar
      </button>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
};

export default CouponForm;
