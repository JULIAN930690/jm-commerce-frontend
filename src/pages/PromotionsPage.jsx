import React from "react";

const promotions = [
  { title: "2x1 en celulares", details: "Válido hasta el 30 de junio" },
  { title: "50% en ropa de invierno", details: "Descuentos en artículos seleccionados" },
];

const PromotionsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Promociones</h1>
      <ul className="space-y-4">
        {promotions.map((promo, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{promo.title}</h2>
            <p className="text-gray-600">{promo.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionsPage;

