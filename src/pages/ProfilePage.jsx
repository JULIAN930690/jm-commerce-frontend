// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (userData) {
      fetch(`/api/orders/user/${userData.id}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        .catch(err => console.error("Error cargando pedidos:", err));

      fetch(`/api/addresses/user/${userData.id}`)
        .then(res => res.json())
        .then(data => setAddresses(data))
        .catch(err => console.error("Error cargando direcciones:", err));
    }
  }, [userData]);

  if (!userData) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Acceso denegado</h2>
        <p>Debes iniciar sesión para ver esta página.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold">👤 Mi Perfil</h2>

      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">📄 Información personal</h3>
        <p><strong>Nombre:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">📦 Historial de pedidos</h3>
        {orders.length === 0 ? (
          <p>No tienes pedidos registrados.</p>
        ) : (
          <ul className="list-disc pl-4">
            {orders.map(order => (
              <li key={order.id}>
                Pedido #{order.id} - Total: ${order.total} - {new Date(order.created_at).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-2">🏠 Direcciones</h3>
        {addresses.length === 0 ? (
          <p>No tienes direcciones guardadas.</p>
        ) : (
          <ul className="list-disc pl-4">
            {addresses.map(addr => (
              <li key={addr.id}>
                {addr.street}, {addr.city}, {addr.state}, {addr.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

