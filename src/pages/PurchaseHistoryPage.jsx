import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const PurchaseHistoryPage = () => {
  const { user } = useUser();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('/api/orders/my-orders', {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setPurchases(response.data);
      } catch (error) {
        console.error('Error al cargar el historial de compras:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchPurchases();
    }
  }, [user]);

  if (loading) {
    return <div className="p-4 text-center">Cargando historial de compras...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">🧾 Historial de Compras</h1>

      {purchases.length === 0 ? (
        <p className="text-gray-600 text-center">Todavía no has realizado ninguna compra.</p>
      ) : (
        <div className="grid gap-4">
          {purchases.map((purchase) => (
            <div key={purchase._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-semibold">
                  🗓️ {new Date(purchase.createdAt).toLocaleDateString()}
                </span>
                <span className="text-green-600 font-bold">
                  ${purchase.totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Estado: <strong>{purchase.status}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchaseHistoryPage;
