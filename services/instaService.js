import axios from "axios";

export const downloadInstagramPost = async (url) => {
  try {
    const { data } = await axios.get(
      `https://dens-instal-dl.vercel.app/api/instagram?url=${encodeURIComponent(url)}`
    );
    return data.result || data;
  } catch (err) {
    console.error("Instagram post/reel download error:", err.response?.data || err.message);
    return { status: false, message: "Failed to fetch Instagram post/reel" };
  }
};
