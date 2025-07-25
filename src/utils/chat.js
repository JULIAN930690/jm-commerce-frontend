import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const fetchChatMessages = async (conversationId) => {
  const response = await axios.get(`${BASE_URL}/chat/${conversationId}`);
  return response.data;
};

export const sendChatMessage = async (data) => {
  const response = await axios.post(`${BASE_URL}/chat/send`, data);
  return response.data;
};
