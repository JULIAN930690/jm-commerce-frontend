import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <UserProvider>
        <CartProvider>
          <SearchProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </SearchProvider>
        </CartProvider>
      </UserProvider>
    </NotificationProvider>
  </React.StrictMode>
);

// Registrar Service Worker para PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        console.log("✅ Service Worker registrado:", reg.scope);
      })
      .catch((err) => {
        console.error("❌ Error al registrar el Service Worker:", err);
      });
  });
}

