// services/redditService.js
import axios from "axios";

export const downloadReddit = async (url) => {
  try {
    const apiURL = `https://reddit-api-drns.vercel.app/api/reddit?url=${encodeURIComponent(url)}`;

    const { data } = await axios.get(apiURL);

    if (!data || data.status === false) {
      return {
        status: false,
        message: "Failed to fetch Reddit media"
      };
    }

    return {
      status: true,
      data: data.data,        // contains title, video, audio, etc.
      creator: "Denish Tharu"
    };

  } catch (error) {
    return {
      status: false,
      message: error.message || "Reddit API request failed"
    };
  }
};
