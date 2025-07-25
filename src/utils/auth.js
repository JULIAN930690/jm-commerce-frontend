// ✅ ARCHIVO CORREGIDO: frontend/src/utils/auth.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"; // sin /api duplicado

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
  } catch (err) {
    throw new Error("Error de autenticación");
  }
};

// Registro
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    if (err.response?.status === 409) {
      throw new Error("Ese correo ya está en uso");
    }
    throw new Error("Error al registrar usuario");
  }
};
