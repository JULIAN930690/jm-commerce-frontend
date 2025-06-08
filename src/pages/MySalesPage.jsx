import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import axios from "axios";

const MySalesPage = () => {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(res.data);
      } catch (err) {
        setError("Error al cargar tus publicaciones.");
      } finally {
        setLoading(false);
      }
    };

    if (user && user.id) fetchMyProducts();
  }, [user]);

  if (!user || !user.id)
    return <p className="text-gray-500">Inicia sesión para ver tus ventas.</p>;
  if (loading) return <p>Cargando tus publicaciones...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Mis Publicaciones</h2>
      {products.length === 0 ? (
        <p>No has publicado productos aún.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MySalesPage;




