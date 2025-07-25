// src/pages/PromotionsPage.jsx
import React from "react";

const promotions = [
  {
    title: "2x1 en celulares",
    details: "Válido hasta el 30 de junio",
    image: "/promo-celulares.jpg",
  },
  {
    title: "50% en ropa de invierno",
    details: "Descuentos en artículos seleccionados",
    image: "/promo-ropa.jpg",
  },
];

const PromotionsPage = () => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Promociones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {promo.image && (
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover rounded-t"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{promo.title}</h2>
              <p className="text-gray-600">{promo.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsPage;


