import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://dens-instal-dl.vercel.app/api/instagram?url=${encodeURIComponent(url)}`);
  return data.result || data;
};
