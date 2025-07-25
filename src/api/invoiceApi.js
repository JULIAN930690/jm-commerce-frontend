import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://jm-commerce-backend.vercel.app/api';

export const getInvoices = async (userId) => {
  const response = await axios.get(`${BASE_URL}/invoices/user/${userId}`);
  return response.data;
};

export const downloadInvoice = async (invoiceId) => {
  const response = await axios.get(`${BASE_URL}/invoices/${invoiceId}/download`, { responseType: 'blob' });
  return response.data;
};
