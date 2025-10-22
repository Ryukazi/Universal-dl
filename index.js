import express from "express";
import downloadRoutes from "./routes/downloadRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Use all download routes
app.use("/api", downloadRoutes);

// Root route showing API info
app.get("/", (req, res) => {
  res.send(`
    <h2>🎬 Universal Downloader API</h2>
    <p>Creator: Denish Tharu</p>
    <h3>Available Endpoints:</h3>
    <ul>
      <li><strong>/api/instagram?url=INSTAGRAM_URL</strong> - For Instagram posts & stories</li>
      <li><strong>/api/tiktok?url=TIKTOK_URL</strong> - For TikTok videos</li>
      <li><strong>/api/youtube?url=YOUTUBE_URL</strong> - For YouTube videos</li>
      <li><strong>/api/facebook?url=FACEBOOK_URL</strong> - For Facebook videos</li>
    </ul>
    <p>Use <strong>GET</strong> request with <code>url</code> query parameter.</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log("======================================");
  console.log("🎬 Universal Downloader API is running!");
  console.log(`📌 Creator: Denish Tharu`);
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
  console.log("📄 Available Endpoints:");
  console.log("   [GET] /api/instagram?url=INSTAGRAM_URL");
  console.log("   [GET] /api/tiktok?url=TIKTOK_URL");
  console.log("   [GET] /api/youtube?url=YOUTUBE_URL");
  console.log("   [GET] /api/facebook?url=FACEBOOK_URL");
  console.log("======================================");
});
