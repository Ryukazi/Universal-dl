import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://dens-tt-dl.vercel.app/api/tiktok?url=${encodeURIComponent(url)}`);
  return data;
};
