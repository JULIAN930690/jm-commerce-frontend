import axios from "axios";
const API_URL = "http://localhost:8000";

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // { token, userData }
  } catch (err) {
    throw new Error("Error de autenticación");
  }
};

// Registro
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data; // { token, userData }
  } catch (err) {
    throw new Error("Error al registrar usuario");
  }
};
