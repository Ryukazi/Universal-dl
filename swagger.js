export default {
  swaggerDefinition: {
    openapi: "3.0.0", // Version of OpenAPI spec
    info: {
      title: "Universal Downloader API", // API name
      version: "1.0.0",                 // API version
      description: "API for downloading videos from multiple platforms", // Short description
      contact: {
        name: "Denish Tharu"            // Your name as creator
      }
    },
    servers: [
      {
        url: "https://your-deployment-url.vercel.app/api" // Base URL of your API
      }
    ],
  },
  apis: ["./routes/*.js"], // Swagger will read all routes in this folder to auto-generate docs
};
