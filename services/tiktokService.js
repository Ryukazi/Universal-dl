import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(
    `https://love-text-rouge.vercel.app/api/tiktok?url=${encodeURIComponent(url)}`
  );
  return data;
};
