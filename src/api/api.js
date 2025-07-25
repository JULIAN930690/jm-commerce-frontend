# src/services/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

if (!baseURL) {
  console.warn("⚠️ VITE_API_URL no está definido. Asegurate de tener .env o .env.production configurado.");
}

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
  withCredentials: false,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error?.response;
    if (res?.status === 401 || res?.status === 403) {
      console.error('🔒 No autorizado o acceso prohibido:', res.data);
    } else if (res?.status === 404) {
      console.error('🔎 Recurso no encontrado:', res.data);
    } else if (res?.status === 500) {
      console.error('💥 Error del servidor:', res.data);
    } else {
      console.error('❌ Error desconocido:', error?.message);
    }
    return Promise.reject(error);
  }
);

export default api;

