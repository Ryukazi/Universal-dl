import * as InstagramService from "../services/instagramService.js";
import * as TikTokService from "../services/tiktokService.js";
import * as YouTubeService from "../services/youtubeService.js";
import * as FacebookService from "../services/facebookService.js";

export const instagramDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    let result;
    
    if (url.includes("/stories/")) {
      // Use story download service
      result = await InstagramService.downloadStory(url);
    } else {
      // Use regular post download service
      result = await InstagramService.download(url);
    }

    // Add creator info
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({
      status: true,
      platform: "Instagram",
      creator: "Denish Tharu",
      result
    });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Instagram video/story", error: err.message });
  }
};

export const tiktokDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await TikTokService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({
      status: true,
      platform: "TikTok",
      creator: "Denish Tharu",
      result
    });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch TikTok video", error: err.message });
  }
};

export const youtubeDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await YouTubeService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({
      status: true,
      platform: "YouTube",
      creator: "Denish Tharu",
      result
    });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch YouTube video", error: err.message });
  }
};

export const facebookDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await FacebookService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({
      status: true,
      platform: "Facebook",
      creator: "Denish Tharu",
      result
    });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Facebook video", error: err.message });
  }
};
