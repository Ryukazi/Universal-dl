import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://yt-dl-mp4.vercel.app/api/ytmp4?url=${encodeURIComponent(url)}`);
  return data.result || data;
};
