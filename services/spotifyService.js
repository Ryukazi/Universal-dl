import axios from "axios";

export const downloadSpotify = async (url) => {
  const { data } = await axios.get(
    `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`
  );
  return data;
};
