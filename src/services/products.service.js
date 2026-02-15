import axios from "axios";

export const getAllProducts = async (page) => {
  const API_URL_PRODUCTS = `${import.meta.env.VITE_URL_ROOT}/products?page=${page}&limit=8`;

  try {
    const response = await axios.get(API_URL_PRODUCTS);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
