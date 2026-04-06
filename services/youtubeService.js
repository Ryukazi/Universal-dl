import axios from "axios";

export const download = async (url) => {
  try {
    const api = `https://eliteprotech-apis.zone.id/ytdown?url=${encodeURIComponent(url)}&format=mp4`;

    const { data } = await axios.get(api);

    // check success
    if (!data || !data.success) {
      throw new Error("API failed");
    }

    return {
      title: data.title,
      url: data.downloadURL
    };

  } catch (err) {
    console.error("Download Error:", err.message);
    return { error: "Failed to fetch video" };
  }
};
