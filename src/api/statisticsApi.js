import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const getSellerStatistics = async (sellerId) => {
  const response = await axios.get(`${BASE_URL}/statistics/seller/${sellerId}`);
  return response.data;
};
