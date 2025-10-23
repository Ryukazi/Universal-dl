import axios from "axios";

export const downloadInstagramStory = async (url) => {
  try {
    const { data } = await axios.get(
      `https://dens-insta-story.vercel.app/api/story?url=${encodeURIComponent(url)}`
    );

    if (Array.isArray(data.downloads) && data.downloads.length > 0) {
      // Return last story if multiple exist
      return data.downloads[data.downloads.length - 1];
    }

    return data.downloads || data;
  } catch (err) {
    console.error("Instagram story download error:", err.response?.data || err.message);
    return { status: false, message: "Failed to fetch Instagram story" };
  }
};
