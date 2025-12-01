import axios from "axios";

export const download = async (url) => {
  const { data } = await axios.get(`https://ttt-pprj.onrender.com/api/download?url=${encodeURIComponent(url)}`);
  return data;
};
