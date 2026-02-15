import axios from "axios";

const API_URL_DATA = "https://lumoshive-api-furniture.vercel.app/api/data";

export const getAllData = async () => {
  try {
    const response = await axios.get(API_URL_DATA);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
