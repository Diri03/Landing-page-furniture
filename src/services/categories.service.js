import axios from "axios";

const API_URL_CATEGORIES = "https://lumoshive-api-furniture.vercel.app/api/category";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URL_CATEGORIES);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
