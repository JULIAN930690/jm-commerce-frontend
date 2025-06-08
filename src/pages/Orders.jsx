import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";

const Orders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orders/me", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError("No se pudieron cargar las órdenes.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchOrders();
    } else {
      setLoading(false);
      setError("Debes iniciar sesión para ver tus órdenes.");
    }
  }, [user]);

  if (loading) return <p className="p-4">Cargando órdenes...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <main lang="es-AR" className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Órdenes</h1>
      {orders.length === 0 ? (
        <p>No tienes órdenes registradas.</p>
      ) : (
        <section className="space-y-4">
          {orders.map((order) => (
            <article
              key={order.id}
              className="border rounded-lg shadow p-4 bg-white"
            >
              <h2 className="font-semibold">Orden #{order.id}</h2>
              <p>Total: ${order.total}</p>
              <p>Fecha: {new Date(order.created_at).toLocaleString()}</p>
              <h3 className="mt-2 font-medium">Productos:</h3>
              <ul className="list-disc list-inside">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.product_name} (x{item.quantity})
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Orders;

