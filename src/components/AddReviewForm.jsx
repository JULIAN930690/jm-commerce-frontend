import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddReviewForm({ productId, onReviewAdded }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      toast.info('⚠️ Debes iniciar sesión para dejar una reseña.');
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`/api/reviews/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: productId,
          rating: parseInt(rating),
          comment,
        }),
      });

      if (!res.ok) throw new Error('Error al enviar la reseña');

      toast.success('✅ ¡Gracias por tu reseña!');
      setComment('');
      setRating(5);
      if (onReviewAdded) onReviewAdded();
    } catch (error) {
      console.error(error);
      toast.error('❌ No se pudo enviar la reseña');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4 bg-white p-6 rounded-lg shadow border">
      <h3 className="text-xl font-semibold mb-2">Agregar una reseña</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe tu opinión..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        required
      />
      <div>
        <label className="block mb-1 font-medium text-sm">Calificación</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} estrella{num > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-2 px-4 rounded font-bold text-white transition ${
          submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {submitting ? 'Enviando...' : 'Enviar reseña'}
      </button>
    </form>
  );
}

export default AddReviewForm;

