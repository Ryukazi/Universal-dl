import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://dens-yoitube-ldwn.vercel.app/api/youtube?url=${encodeURIComponent(url)}`);
  return data.result || data;
};
