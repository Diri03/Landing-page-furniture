import axios from "axios";

const API_URL_SUBSCRIBE =
  "https://lumoshive-api-furniture.vercel.app/api/subscribe";

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
