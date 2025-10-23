import axios from "axios";

export const downloadPinterest = async (url) => {
  try {
    if (!url) throw new Error("URL is required");

    const apiUrl = `https://pinterest-api-theta.vercel.app/api/pinterest?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.status) {
      throw new Error("Failed to fetch Pinterest media");
    }

    return {
      status: true,
      creator: data.creator || "Denish Tharu",
      platform: "Pinterest",
      source: data.source,
      image: data.image,
      download: data.download
    };
  } catch (err) {
    return { status: false, message: err.message };
  }
};
