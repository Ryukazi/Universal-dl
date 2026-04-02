import axios from "axios";

export const download = async (url) => {
  try {
    const api = `https://tiktock-web.vercel.app/api/downloadVideo?url=${encodeURIComponent(url)}`;

    // Check if video exists (optional but useful)
    await axios.get(api, {
      responseType: "stream"
    });

    return {
      status: true,
      creator: "Denish",
      result: {
        download: api
      }
    };

  } catch (err) {
    return {
      status: false,
      message: "Failed to fetch video",
      error: err.message
    };
  }
};
