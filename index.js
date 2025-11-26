import express from "express";
import downloadRoutes from "./routes/downloadRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", downloadRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h2>Universal Downloader API</h2>
    <p>Creator: Denish Tharu</p>
    <p>Available Endpoints:</p>
    <ul>
      <li>/api/instagram?url=INSTAGRAM_URL</li>
      <li>/api/tiktok?url=TIKTOK_URL</li>
      <li>/api/youtube?url=YOUTUBE_URL</li>
      <li>/api/facebook?url=FACEBOOK_URL</li>
      <li>/api/pinterest?url=PINTEREST_URL</li>
      <li>/api/twitter?url=TWITTER_URL</li>
      <li>/api/reddit?url=REDDIT_URL</li>
      <li>/api/spotify?url=SPOTIFY_URL</li>
    </ul>
    <p>Use the endpoints with a <strong>GET</strong> request and add the <code>url</code> query parameter.</p>
  `);
});

app.listen(PORT, () => {
  console.log("======================================");
  console.log("Universal Downloader API is running!");
  console.log("Creator: Denish Tharu");
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log("Available Endpoints:");
  console.log("   [GET] /api/instagram?url=...");
  console.log("   [GET] /api/tiktok?url=...");
  console.log("   [GET] /api/youtube?url=...");
  console.log("   [GET] /api/facebook?url=...");
  console.log("   [GET] /api/pinterest?url=...");
  console.log("   [GET] /api/twitter?url=...");
  console.log("   [GET] /api/reddit?url=...");
  console.log("   [GET] /api/spotify?url=...");
  console.log("======================================");
});
