import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";

const AdminProductForm = ({ categoryId }) => {
  const { fetchProducts } = useProducts();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    stock: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, category_id: categoryId })
      });
      if (!res.ok) throw new Error("Error al crear producto");
      setFormData({ name: "", description: "", price: "", image_url: "", stock: "" });
      fetchProducts();
    } catch (err) {
      console.error("Error al agregar producto:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-bold">Agregar nuevo producto</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={formData.price}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="image_url"
        placeholder="URL de imagen"
        value={formData.image_url}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Agregar Producto
      </button>
    </form>
  );
};

export default AdminProductForm;


