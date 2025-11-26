import { downloadInstagramPost } from "../services/instaService.js";
import { downloadInstagramStory } from "../services/instaStoryService.js";
import * as TikTokService from "../services/tiktokService.js";
import * as YouTubeService from "../services/youtubeService.js";
import * as FacebookService from "../services/facebookService.js";
import { downloadPinterest } from "../services/pinterestService.js";
import { downloadTwitter } from "../services/twitterService.js";
import { downloadReddit } from "../services/redditService.js";
import { downloadSpotify } from "../services/spotifyService.js"; // Fixed import

// Instagram
export const instagramDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    let result;
    if (url.includes("/stories/")) {
      result = await downloadInstagramStory(url);
    } else {
      result = await downloadInstagramPost(url);
    }

    if (!result) {
      return res.json({ status: false, message: "Failed to fetch Instagram media" });
    }

    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({ status: true, platform: "Instagram", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({
      status: false,
      message: "Failed to fetch Instagram media",
      error: err.response?.data || err.message,
    });
  }
};

// TikTok
export const tiktokDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await TikTokService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({ status: true, platform: "TikTok", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch TikTok video", error: err.message });
  }
};

// YouTube
export const youtubeDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await YouTubeService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({ status: true, platform: "YouTube", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch YouTube video", error: err.message });
  }
};

// Facebook
export const facebookDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await FacebookService.download(url);
    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({ status: true, platform: "Facebook", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Facebook video", error: err.message });
  }
};

// Pinterest
export const pinterestDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await downloadPinterest(url);
    if (!result || !result.status) {
      return res.json({ status: false, message: "Failed to fetch Pinterest media" });
    }

    res.json({ status: true, platform: "Pinterest", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Pinterest media", error: err.message });
  }
};

// Twitter
export const twitterDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await downloadTwitter(url);
    if (!result || !result.status) {
      return res.json({ status: false, message: "Failed to fetch Twitter media" });
    }

    res.json({ status: true, platform: "Twitter", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Twitter media", error: err.message });
  }
};

// Reddit
export const redditDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await downloadReddit(url);

    if (!result || !result.status) {
      return res.json({ status: false, message: "Failed to fetch Reddit media" });
    }

    res.json({ status: true, platform: "Reddit", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({ status: false, message: "Failed to fetch Reddit media", error: err.message });
  }
};

// Spotify (NOW FULLY WORKING)
export const spotifyDownload = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ status: false, message: "URL is required" });

  try {
    const result = await downloadSpotify(url);

    if (!result || !result.status) {
      return res.json({ status: false, message: "Failed to fetch Spotify media" });
    }

    if (typeof result === "object") result.creator = "Denish Tharu";

    res.json({ status: true, platform: "Spotify", creator: "Denish Tharu", result });
  } catch (err) {
    res.json({
      status: false,
      message: "Failed to fetch Spotify media",
      error: err.response?.data || err.message,
    });
  }
};
