import express from "express";
import { 
  instagramDownload, 
  tiktokDownload, 
  youtubeDownload, 
  facebookDownload,
  pinterestDownload,
  twitterDownload,
  redditDownload,
  spotifyDownload // ✅ Added Reddit
} from "../controllers/downloadController.js";

const router = express.Router();

// ✅ Instagram (posts + stories)
router.get("/instagram", instagramDownload);

// ✅ TikTok
router.get("/tiktok", tiktokDownload);

// ✅ YouTube
router.get("/youtube", youtubeDownload);

// ✅ Facebook
router.get("/facebook", facebookDownload);

// ✅ Pinterest
router.get("/pinterest", pinterestDownload);

// ✅ Twitter
router.get("/twitter", twitterDownload);

// ✅ Reddit (NEW)
router.get("/reddit", redditDownload);

// ✅ spotify (NEW)
router.get("/spotify", spotifyDownload);

export default router;
