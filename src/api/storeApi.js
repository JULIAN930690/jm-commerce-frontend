import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const createStore = async (storeData) => {
  const response = await axios.post(`${BASE_URL}/stores`, storeData);
  return response.data;
};

export const getStores = async () => {
  const response = await axios.get(`${BASE_URL}/stores`);
  return response.data;
};
