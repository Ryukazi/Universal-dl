import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`);
  return data.result || data;
};
