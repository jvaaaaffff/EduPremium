import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }

  // API routes - MUST come before static files
  app.use("/api/v1", apiRoutes);
  app.use("/api", apiRoutes);

  // Global Error Handler for API
  app.use(errorHandler);

  // Serve frontend in production
  if (process.env.NODE_ENV === 'production') {
    // Resolve frontend path relative to this file (__dirname is backend/)
    const fs = await import('fs');
    const rootDistPath = path.join(__dirname, '..', 'dist'); // Copied by build.js
    const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist'); // Original build output
    
    // Check which dist folder actually exists
    const frontendPath = fs.existsSync(rootDistPath) ? rootDistPath : frontendDistPath;
    
    console.log(`📁 Looking for frontend at: ${frontendPath}`);
    console.log(`📍 Current working directory: ${process.cwd()}`);
    
    try {
      if (fs.existsSync(frontendPath)) {
        console.log(`✅ Frontend found!`);
        
        // Serve static files
        app.use(express.static(frontendPath));
        
        // Handle React routing - return index.html for all non-API routes
        app.get('*', (req, res) => {
          const indexPath = path.join(frontendPath, 'index.html');
          res.sendFile(indexPath, (err) => {
            if (err) {
              console.error('❌ Error serving index.html:', err);
              res.status(500).json({ 
                status: "error", 
                message: "Error loading page" 
              });
            }
          });
        });
      } else {
        console.error(`❌ Frontend not found at: ${frontendPath}`);
        
        // Try to list what's in the current directory
        try {
          const files = fs.readdirSync(process.cwd());
          console.error('📂 Files in current directory:', files);
          
          if (files.includes('frontend')) {
            const frontendFiles = fs.readdirSync(path.join(process.cwd(), 'frontend'));
            console.error('📂 Files in frontend directory:', frontendFiles);
          }
        } catch (e) {
          console.error('Could not list directory contents');
        }
        
        // Fallback: show error message
        app.get('*', (req, res) => {
          res.status(500).json({ 
            status: "error", 
            message: "Frontend not found. Make sure frontend is built.",
            expectedPath: frontendPath,
            cwd: process.cwd()
          });
        });
      }
    } catch (err) {
      console.error('❌ Error checking frontend path:', err);
    }
  } else {
    // Development: Show API info at root
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
  }

  // Start server
  app.listen(PORT, "0.0.0.0", () => {
    console.log('=================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API available at: http://localhost:${PORT}/api`);
    if (process.env.NODE_ENV === 'production') {
      console.log(`📱 Frontend: http://localhost:${PORT}`);
    }
    console.log('=================================');
  });
}

startServer();
