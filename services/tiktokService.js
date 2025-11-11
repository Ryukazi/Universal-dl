import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://tiktok-dll-api.vercel.app/api/tiktok?url=${encodeURIComponent(url)}`);
  return data;
};
