import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ProductGallery from '../components/ProductGallery';
import ProductReviews from '../components/ProductReviews';
import AddReviewForm from '../components/AddReviewForm';
import { addToCart } from "../api/cartApi";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error al cargar producto:', err);
        toast.error('No se pudo cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.info("⚠️ Debes iniciar sesión para agregar al carrito");
      return;
    }

    try {
      setAdding(true);
      await addToCart(product.id, 1, token);
      toast.success('Producto agregado al carrito 🛒');
    } catch (error) {
      toast.error('❌ Error al agregar al carrito');
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <div className="text-center mt-10 text-gray-600">Cargando producto...</div>;
  if (!product) return <div className="text-center mt-10 text-red-500">Producto no encontrado.</div>;

  return (
    <motion.div className="container mx-auto p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery image={product.image} />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description || 'Sin descripción disponible.'}</p>
          <p className="text-2xl font-semibold text-green-600 mb-2">${product.price}</p>
          <p className="mb-4 text-gray-600">Stock disponible: {product.stock ?? 'N/D'}</p>
          <button
            onClick={handleAddToCart}
            disabled={adding}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {adding ? "Agregando..." : "Agregar al carrito"}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <ProductReviews reviews={product.reviews} />
        <AddReviewForm productId={id} onReviewAdded={() => window.location.reload()} />
      </div>
    </motion.div>
  );
}

export default ProductDetail;


