import axios from "axios";

export const getAllTestimonials = async (page) => {
  const API_URL_TESTIMONIALS = `${import.meta.env.VITE_URL_ROOT}/testimonials?page=${page}&limit=1`;

  try {
    const response = await axios.get(API_URL_TESTIMONIALS);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
