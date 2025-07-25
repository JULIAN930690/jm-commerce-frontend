import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const socialLogin = async (provider, token) => {
  const response = await axios.post(`${BASE_URL}/social-login/${provider}`, { token });
  return response.data;
};
