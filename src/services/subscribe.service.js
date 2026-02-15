import axios from "axios";

const API_URL_SUBSCRIBE =
  `${import.meta.env.VITE_URL_ROOT}/subscribe`;

export const emailSubscribe = async (dataEmail) => {
  try {
    const response = await axios.post(API_URL_SUBSCRIBE, dataEmail, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
