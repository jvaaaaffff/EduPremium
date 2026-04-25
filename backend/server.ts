import express from "express";
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

  // CORS Configuration - Allow requests from your frontend
  app.use(cors({
    origin: [
      'http://localhost:5173', // Local development
      'http://localhost:3000',
      'https://*.vercel.app', // All Vercel deployments
      'https://vercel.app',
      'https://*.onrender.com', // All Render deployments
      'https://edupremium.onrender.com', // Your frontend static site
      process.env.FRONTEND_URL || '*' // Your production frontend URL
    ],
    credentials: true
  }));
  
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

  // Root route for health check
  app.get("/", (req, res) => {
    res.json({ 
      status: "success", 
      message: "EduPremium API Server is running!",
      version: "1.0.0",
      endpoints: {
        health: "/api/health",
        tasks: "/api/tasks",
        leads: "/api/leads"
      }
    });
  });

  // API routes
  app.use("/api/v1", apiRoutes);
  app.use("/api", apiRoutes);

  // Global Error Handler
  app.use(errorHandler);

  // Start server
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API available at: http://localhost:${PORT}/api`);
  });
}

startServer();
