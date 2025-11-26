// services/spotifyService.js (UNBREAKABLE VERSION)
import axios from "axios";

// Retry helper (built-in, no extra deps)
const createRetry = (fn, retries = 3, delay = 1000) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (err) {
      if (retries === 0) throw err;
      await new Promise(resolve => setTimeout(resolve, delay));
      return createRetry(fn, retries - 1, delay * 2)(...args);
    }
  };
};

export const downloadSpotify = async (url) => {
  try {
    // Retry wrapper for the API call
    const retryApiCall = createRetry(async () => {
      console.log(`[Spotify] Fetching: ${url}`); // Vercel log

      const response = await axios.get(
        `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`,
        {
          timeout: 30000, // 30s — crushes cold starts
          headers: {
            'User-Agent': 'UniversalDL/1.0 (Vercel)', // Faster routing
            'Accept': 'application/json',
          },
        }
      );

      console.log(`[Spotify] Success: ${response.status}`); // Log success
      return response.data;
    }, 3, 1000); // 3 retries, start with 1s delay

    const data = await retryApiCall();

    // prenivdl always returns status: true, even if downloads empty
    if (!data || data.status === false) {
      console.error(`[Spotify] API error:`, data);
      return {
        status: false,
        message: data?.message || "Prenivdl returned invalid response",
        debug: "Check Vercel logs for details"
      };
    }

    // Add a helpful message if no downloads (rare, but handles it)
    let warning = null;
    if (!data.data?.downloads?.length) {
      warning = "No audio download available (Spotify restrictions). Try another track.";
    }

    console.log(`[Spotify] Downloads found: ${data.data?.downloads?.length || 0}`);

    return {
      ...data,
      warning // Optional warning
    };

  } catch (error) {
    console.error(`[Spotify] Full error:`, {
      message: error.message,
      code: error.code,
      response: error.response?.status,
      url: url
    });

    return {
      status: false,
      message: "Request timed out — try again in 10s (Vercel cold start).",
      retryLink: `https://prenivdl.vercel.app/api/download?url=${encodeURIComponent(url)}`, // Direct fallback
      error: error.code === 'ECONNABORTED' ? 'Timeout' : error.message
    };
  }
};
