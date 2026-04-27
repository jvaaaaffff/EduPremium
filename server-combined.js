import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
dotenv.config({ path: './backend/.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
  try {
    let MONGODB_URI = process.env.MONGODB_URI;

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
}

// Import backend routes dynamically
let apiRoutes, errorHandler;
try {
  const apiModule = await import('./backend/routes/api.ts');
  const errorModule = await import('./backend/middleware/errorHandler.ts');
  apiRoutes = apiModule.default;
  errorHandler = errorModule.errorHandler;
  console.log("✅ Backend routes loaded");
} catch (err) {
  console.error("❌ Error loading backend routes:", err);
  console.error("Stack:", err.stack);
}

// API routes - MUST come before static files
if (apiRoutes) {
  app.use("/api/v1", apiRoutes);
  app.use("/api", apiRoutes);
  console.log("✅ API routes registered");
}

// Global Error Handler for API
if (errorHandler) {
  app.use(errorHandler);
}

// Serve static frontend files
// Resolve relative to server-combined.js
import fs from 'fs';
const rootDistPath = path.join(__dirname, 'dist');
const frontendDistPath = path.join(__dirname, 'frontend', 'dist');

// Use the dist folder created by build.js if available, else fallback
const frontendPath = fs.existsSync(rootDistPath) ? rootDistPath : frontendDistPath;
console.log(`📁 Serving frontend from: ${frontendPath}`);
app.use(express.static(frontendPath));

// Handle React routing - return index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = path.join(frontendPath, 'index.html');
  console.log(`📄 Serving index.html for: ${req.path}`);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('❌ Error serving index.html:', err);
      res.status(500).send('Error loading page');
    }
  });
});

// Start server
async function startServer() {
  await connectDB();
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log('=================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`🔌 API: http://localhost:${PORT}/api`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('=================================');
  });
}

startServer();
