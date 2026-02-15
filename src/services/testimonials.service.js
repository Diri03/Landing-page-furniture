import axios from "axios";

export const getAllTestimonials = async (page) => {
  const API_URL_TESTIMONIALS = `https://lumoshive-api-furniture.vercel.app/api/testimonials?page=${page}&limit=1`;

  try {
    const response = await axios.get(API_URL_TESTIMONIALS);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
