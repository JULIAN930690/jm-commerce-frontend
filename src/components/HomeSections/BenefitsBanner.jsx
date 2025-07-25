import React from "react";
import { FaShippingFast, FaUndo, FaShieldAlt } from "react-icons/fa";

const BenefitsBanner = () => {
  return (
    <section className="bg-blue-50 rounded-xl p-6 grid gap-4 md:grid-cols-3 text-center text-sm text-gray-700">
      <div className="flex flex-col items-center">
        <FaShippingFast className="text-2xl mb-2 text-blue-600" />
        <p>Envíos gratis desde $33.000</p>
      </div>
      <div className="flex flex-col items-center">
        <FaUndo className="text-2xl mb-2 text-blue-600" />
        <p>Devoluciones fáciles y rápidas</p>
      </div>
      <div className="flex flex-col items-center">
        <FaShieldAlt className="text-2xl mb-2 text-blue-600" />
        <p>Compra protegida con garantía total</p>
      </div>
    </section>
  );
};

export default BenefitsBanner;