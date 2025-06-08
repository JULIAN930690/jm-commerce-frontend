// src/components/PriceFilter.jsx
import React from 'react';

const PriceFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Rango de precios</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Mínimo"
          className="w-1/2 border rounded p-2"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Máximo"
          className="w-1/2 border rounded p-2"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
