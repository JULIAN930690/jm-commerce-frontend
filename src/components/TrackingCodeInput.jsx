import React, { useState } from 'react';

const TrackingCodeInput = ({ onTrack }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      onTrack(code);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Código de seguimiento"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border rounded px-3 py-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
        Ver estado
      </button>
    </form>
  );
};

export default TrackingCodeInput;
