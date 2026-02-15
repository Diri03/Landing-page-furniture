import axios from "axios";

const API_URL_HEADER = `${import.meta.env.VITE_URL_ROOT}/header`;

export const getDataHeader = async () => {
  try {
    const response = await axios.get(API_URL_HEADER);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
