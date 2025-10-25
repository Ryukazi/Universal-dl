import express from "express";
import { 
  instagramDownload, 
  tiktokDownload, 
  youtubeDownload, 
  facebookDownload,
  pinterestDownload, // ✅ Pinterest controller
  twitterDownload    // ✅ Twitter controller (new)
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

// ✅ Twitter (new)
router.get("/twitter", twitterDownload);

export default router;
