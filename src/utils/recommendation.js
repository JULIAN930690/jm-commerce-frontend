import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const getRecommendedProducts = async (userId) => {
  const response = await axios.get(`${BASE_URL}/recommendations/${userId}`);
  return response.data;
};
