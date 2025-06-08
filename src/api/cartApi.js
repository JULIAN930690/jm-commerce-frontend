// src/api/cartApi.js
import axios from "axios";

const API_URL = "http://localhost:8000/cart";

export const fetchCart = async () => {
  const response = await axios.get(API_URL + "/");
  return response.data;
};

export const addToCart = async (productId, quantity = 1) => {
  const response = await axios.post(API_URL + "/", {
    product_id: productId,
    quantity: quantity,
  });
  return response.data;
};

export const removeFromCart = async (itemId) => {
  const response = await axios.delete(`${API_URL}/${itemId}`);
  return response.data;
};
