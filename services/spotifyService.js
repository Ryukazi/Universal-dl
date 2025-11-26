// services/spotifyService.js
import axios from "axios";

export const downloadSpotify = async (url) => {
  try {
    const response = await axios.get(
      `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`
    );

    const api = response.data;

    // If prenivdl failed
    if (!api.status || !api.data?.downloads?.length) {
      return { status: false, message: "No downloadable link found" };
    }

    // Normalize to match your Universal Downloader format
    return {
      status: true,
      title: api.data.title || "Unknown Song",
      artist: api.data.author || "Unknown Artist",
      thumbnail: api.data.thumbnail,
      duration: api.data.duration,
      album: api.data.album,
      url: api.data.downloads[0].url,        // Direct MP3 link
      quality: api.data.downloads[0].quality,
      size: api.maxFileSize || "Unknown",
      type: "audio",
    };
  } catch (err) {
    return {
      status: false,
      message: "Spotify download failed",
      error: err.response?.data || err.message,
    };
  }
};
