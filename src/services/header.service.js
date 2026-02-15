import axios from "axios";

const API_URL_HEADER = "https://lumoshive-api-furniture.vercel.app/api/header";

export const getDataHeader = async () => {
  try {
    const response = await axios.get(API_URL_HEADER);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
