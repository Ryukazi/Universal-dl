import axios from "axios";

export const download = async (url) => {
  try {
    // Detect Instagram story
    if (url.includes("/stories/")) {
      const { data } = await axios.get(
        `https://dens-insta-story.vercel.app/api/story?url=${encodeURIComponent(url)}`
      );

      // If multiple stories, return the last one
      if (Array.isArray(data.downloads)) {
        return data.downloads[data.downloads.length - 1];
      }
      return data.downloads || data;
    } else {
      // Instagram post/reel
      const { data } = await axios.get(
        `https://dens-instal-dl.vercel.app/api/instagram?url=${encodeURIComponent(url)}`
      );
      return data.result || data;
    }
  } catch (err) {
    console.error("Download error:", err.message);
    return { status: false, message: "Failed to fetch Instagram video/story" };
  }
};
