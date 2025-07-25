import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const getPromotions = async () => {
  const response = await axios.get(`${BASE_URL}/promotions`);
  return response.data;
};

export const createPromotion = async (promotionData) => {
  const response = await axios.post(`${BASE_URL}/promotions`, promotionData);
  return response.data;
};
