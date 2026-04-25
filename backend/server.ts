import express from "express";
import http from "http";
import { createServer as createViteServer } from "vite";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Routes
import apiRoutes from "./routes/api.ts";
// Middleware
import { errorHandler } from "./middleware/errorHandler.ts";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Connect to MongoDB
  try {
    let MONGODB_URI = process.env.MONGODB_URI;

    // If no explicit MongoDB URI is provided, start a local in-memory instance
    if (!MONGODB_URI) {
      console.log("No MONGODB_URI provided. Starting in-memory MongoDB instance...");
      const { MongoMemoryServer } = await import("mongodb-memory-server");
      const mongoServer = await MongoMemoryServer.create();
      MONGODB_URI = mongoServer.getUri();
      console.log(`In-memory MongoDB started at ${MONGODB_URI}`);
    }

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }

  // API routes FIRST
  app.use("/api/v1", apiRoutes);
  app.use("/api", apiRoutes);

  // Global Error Handler
  app.use(errorHandler);

  // Create HTTP server to share with Vite HMR WebSocket
  const httpServer = http.createServer(app);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: true,
        hmr: { server: httpServer },
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
