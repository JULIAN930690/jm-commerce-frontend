import React from 'react';

const TrackingStatus = ({ tracking }) => {
  if (!tracking) return null;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold text-lg mb-2">Seguimiento del pedido</h3>
      <ul className="list-disc list-inside">
        {tracking.status_history.map((entry, i) => (
          <li key={i}>
            <strong>{entry.status}</strong> — {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingStatus;
