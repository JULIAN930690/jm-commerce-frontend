// src/api/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  console.warn("⚠️ VITE_API_URL no está definido. Asegurate de tener .env o .env.production configurado.");
}

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000, // Máximo 10s de espera
  withCredentials: false, // Si usas cookies y sesiones, esto puede ser true
});

// Interceptor opcional: para mostrar errores por consola
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('❌ Error en la API:', error?.response || error?.message);
    return Promise.reject(error);
  }
);

export default api;
