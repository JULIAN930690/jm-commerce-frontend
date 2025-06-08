import React from 'react';

function ProductReviews({ reviews }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Reseñas de usuarios</h2>

      {!reviews || reviews.length === 0 ? (
        <p className="text-gray-500">Este producto aún no tiene reseñas.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="font-semibold text-sm text-gray-700">
                {review.username || 'Usuario anónimo'}
              </p>
              <p className="text-yellow-500 text-sm mb-1">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-800">{review.comment}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(review.created_at).toLocaleDateString() || ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductReviews;

