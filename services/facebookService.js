import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://dens-fb-dl.vercel.app/api/fb?url=${encodeURIComponent(url)}`);
  return data.data || data;
};
