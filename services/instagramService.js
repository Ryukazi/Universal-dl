import axios from "axios";

export const download = async (url) => {
  try {
    if (url.includes("/stories/")) {
      const { data } = await axios.get(
        `https://dens-insta-story.vercel.app/api/story?url=${encodeURIComponent(url)}`
      );

      if (Array.isArray(data.downloads) && data.downloads.length > 0) {
        // return last story if multiple exist
        return data.downloads[data.downloads.length - 1];
      }
      return data.downloads || data;
    } else {
      const { data } = await axios.get(
        `https://dens-instal-dl.vercel.app/api/instagram?url=${encodeURIComponent(url)}`
      );
      return data.result || data;
    }
  } catch (err) {
    console.error("Download error:", err.response?.data || err.message);
    return { status: false, message: "Failed to fetch Instagram video/story" };
  }
};
