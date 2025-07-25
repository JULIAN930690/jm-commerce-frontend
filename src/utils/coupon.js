import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const applyCoupon = async (code, userId) => {
  const response = await axios.post(`${BASE_URL}/coupons/apply`, {
    code,
    user_id: userId,
  });
  return response.data;
};

export const createCoupon = async (data) => {
  const response = await axios.post(`${BASE_URL}/coupons/create`, data);
  return response.data;
};
