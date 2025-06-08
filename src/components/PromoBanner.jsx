import React from "react";

const PromoBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-6 px-4 rounded-md shadow-md mb-6">
      <div className="text-center text-black">
        <h2 className="text-3xl font-bold mb-2">¡Ofertas de temporada!</h2>
        <p className="text-lg">Descuentos increíbles en tecnología, moda y más</p>
      </div>
    </div>
  );
};

export default PromoBanner;
