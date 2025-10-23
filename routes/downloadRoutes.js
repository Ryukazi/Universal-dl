import express from "express";
import { 
  instagramDownload, 
  tiktokDownload, 
  youtubeDownload, 
  facebookDownload,
  pinterestDownload // ✅ import Pinterest controller
} from "../controllers/downloadController.js";

const router = express.Router();

// Instagram posts + stories (single endpoint)
router.get("/instagram", instagramDownload);

// TikTok
router.get("/tiktok", tiktokDownload);

// YouTube
router.get("/youtube", youtubeDownload);

// Facebook
router.get("/facebook", facebookDownload);

// ✅ Pinterest
router.get("/pinterest", pinterestDownload);

export default router;
