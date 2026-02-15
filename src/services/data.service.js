import axios from "axios";

const API_URL_DATA = `${import.meta.env.VITE_URL_ROOT}/data`;

export const getAllData = async () => {
  try {
    const response = await axios.get(API_URL_DATA);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
