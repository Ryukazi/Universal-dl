import express from "express";
import { instagramDownload, tiktokDownload, youtubeDownload, facebookDownload } from "../controllers/downloadController.js";

const router = express.Router();

// Instagram posts + stories
router.get("/instagram", instagramDownload);

// TikTok
router.get("/tiktok", tiktokDownload);

// YouTube
router.get("/youtube", youtubeDownload);

// Facebook
router.get("/facebook", facebookDownload);

export default router;
