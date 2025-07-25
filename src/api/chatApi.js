import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const sendMessage = async (chatId, message) => {
  const response = await axios.post(`${BASE_URL}/chat/send`, { chatId, message });
  return response.data;
};

export const getMessages = async (chatId) => {
  const response = await axios.get(`${BASE_URL}/chat/${chatId}/messages`);
  return response.data;
};
