import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="font-bold mb-2">Mi Mercado</h3>
          <p>Tu tienda de confianza</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Enlaces útiles</h4>
          <ul>
            <li><Link to="/help" className="hover:underline">Ayuda</Link></li>
            <li><Link to="/terms" className="hover:underline">Términos</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacidad</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <p>correo@ejemplo.com</p>
          <p>+54 11 1234-5678</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




