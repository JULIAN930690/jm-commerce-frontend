import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const getTrackingStatus = async (orderId) => {
  const response = await axios.get(`${BASE_URL}/tracking/${orderId}`);
  return response.data;
};

export const updateTrackingStatus = async (orderId, status) => {
  const response = await axios.put(`${BASE_URL}/tracking/${orderId}`, { status });
  return response.data;
};
