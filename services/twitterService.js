import axios from "axios";

/**
 * Downloads Twitter media using Denish's public API
 * @param {string} url - The Twitter/X post URL
 * @returns {Promise<object>}
 */
export const downloadTwitter = async (url) => {
  try {
    // 🧠 Using your deployed API
    const api = `https://dens-twiter-dl.vercel.app/api/twitter?url=${encodeURIComponent(url)}`;
    const { data } = await axios.get(api);

    if (!data || !data.medias || data.medias.length === 0) {
      return { status: false, message: "No media found or invalid Twitter post" };
    }

    return {
      status: true,
      medias: data.medias,
      author: data.author || null,
      caption: data.caption || null,
      source: url,
    };
  } catch (error) {
    console.error("❌ Twitter Service Error:", error.message);
    return { status: false, message: "Failed to fetch Twitter media", error: error.message };
  }
};
