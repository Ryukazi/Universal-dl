import * as InstagramService from "../services/instagramService.js";
import * as TikTokService from "../services/tiktokService.js";
import * as YouTubeService from "../services/youtubeService.js";
import * as FacebookService from "../services/facebookService.js";
import * as StoryService from "../services/storyService.js";

export const downloadVideo = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    let result = null;
    let platform = "";

    if (url.includes("tiktok.com")) {
      platform = "TikTok";
      result = await TikTokService.download(url);
    } else if (url.includes("instagram.com/stories")) {
      platform = "Instagram Story";
      result = await StoryService.download(url);
    } else if (url.includes("instagram.com")) {
      platform = "Instagram";
      result = await InstagramService.download(url);
    } else if (url.includes("facebook.com") || url.includes("fb.watch")) {
      platform = "Facebook";
      result = await FacebookService.download(url);
    } else if (url.includes("youtube.com") || url.includes("youtu.be")) {
      platform = "YouTube";
      result = await YouTubeService.download(url);
    } else {
      return res.json({ status: false, message: "Unsupported platform" });
    }

    // Ensure creator is always "Denish Tharu"
    if (typeof result === "object") {
      result.creator = "Denish Tharu";
    }

    res.json({
      status: true,
      platform,
      creator: "Denish Tharu",
      result
    });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch video", error: err.message });
  }
};
