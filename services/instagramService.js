import axios from "axios";

export const download = async (url) => {
  // Detect story or post
  if (url.includes("/stories/")) {
    const { data } = await axios.get(`https://dens-insta-story.vercel.app/api/story?url=${encodeURIComponent(url)}`);
    return data.downloads || data;
  } else {
    const { data } = await axios.get(`https://dens-instal-dl.vercel.app/api/instagram?url=${encodeURIComponent(url)}`);
    return data.result || data;
  }
};
