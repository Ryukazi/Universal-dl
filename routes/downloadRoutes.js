import express from "express";
import {
  instagramDownload,
  tiktokDownload,
  youtubeDownload,
  facebookDownload,
  pinterestDownload,
  twitterDownload,
  redditDownload,
  spotifyDownload,
} from "../controllers/downloadController.js";

const router = express.Router();

router.get("/instagram", instagramDownload);
router.get("/tiktok", tiktokDownload);
router.get("/youtube", youtubeDownload);
router.get("/facebook", facebookDownload);
router.get("/pinterest", pinterestDownload);
router.get("/twitter", twitterDownload);
router.get("/reddit", redditDownload);
router.get("/spotify", spotifyDownload); // Working!

export default router;
