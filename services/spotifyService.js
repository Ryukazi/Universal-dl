// services/spotifyService.js
import axios from "axios";

export const downloadSpotify = async (url) => {
  try {
    const response = await axios.get(
      `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`,
      { timeout: 10000 } // 10s timeout to avoid hangs
    );

    const data = response.data;

    // Only fail on real API errors (e.g., status: false or network issues)
    if (!data || data.status === false) {
      return {
        status: false,
        message: data?.message || "Prenivdl API returned an error",
        error: data
      };
    }

    // Check for empty downloads and add a warning, but don't fail
    let message = null;
    if (!data.data?.downloads || data.data.downloads.length === 0) {
      message = "No download links available (Spotify DRM or regional block). Metadata only.";
    }

    // Return the EXACT prenivdl response + optional message
    return {
      ...data,
      message: message // Add warning if needed
    };

  } catch (error) {
    console.error("Spotify Service Error:", error.message);

    return {
      status: false,
      message: "Failed to fetch from prenivdl API (network timeout or server issue)",
      error: error.response?.status || error.message
    };
  }
};
