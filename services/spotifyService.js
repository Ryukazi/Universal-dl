// services/spotifyService.js
import axios from "axios";

export const downloadSpotify = async (url) => {
  try {
    const response = await axios.get(
      `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`
    );

    // Return the EXACT response from prenivdl (no changes)
    return response.data;

  } catch (error) {
    return {
      status: false,
      message: "Failed to fetch from prenivdl API",
      error: error.message
    };
  }
};
