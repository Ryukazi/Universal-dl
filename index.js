import express from "express";
import downloadRoutes from "./routes/downloadRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Use download routes
app.use("/api", downloadRoutes);

// Root route to show API info
app.get("/", (req, res) => {
  res.send(`
    <h2>🎬 Universal Downloader API</h2>
    <p>Creator: Denish Tharu</p>
    <p>Available Endpoints:</p>
    <ul>
      <li>/api/instagram?url=INSTAGRAM_URL</li>
      <li>/api/tiktok?url=TIKTOK_URL</li>
      <li>/api/youtube?url=YOUTUBE_URL</li>
      <li>/api/facebook?url=FACEBOOK_URL</li>
    </ul>
    <p>Use the endpoints with a <strong>GET</strong> request and add the <code>url</code> query parameter.</p>
  `);
});

// Start server
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
