import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routers/routers";
import ScrollToTop from "./utils/scrolltotop"; // ✅ en minúscula para que funcione en Linux/Vercel

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Evita que se quede abajo al cambiar de página */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16 px-4">
          <AppRoutes />
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </BrowserRouter>
  );
}

export default App;







