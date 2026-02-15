import axios from "axios";

const API_URL_CATEGORIES = `${import.meta.env.VITE_URL_ROOT}/category`;

export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URL_CATEGORIES);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
