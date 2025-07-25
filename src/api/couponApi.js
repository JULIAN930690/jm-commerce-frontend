import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const createCoupon = async (couponData) => {
  const response = await axios.post(`${BASE_URL}/coupons`, couponData);
  return response.data;
};

export const redeemCoupon = async (code) => {
  const response = await axios.post(`${BASE_URL}/coupons/redeem`, { code });
  return response.data;
};
