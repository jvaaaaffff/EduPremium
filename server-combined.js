import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

// Import backend routes
const apiRoutes = await import('./backend/routes/api.ts');
const errorHandler = await import('./backend/middleware/errorHandler.ts');

// API routes - MUST come before static files
app.use("/api/v1", apiRoutes.default);
app.use("/api", apiRoutes.default);

// Global Error Handler for API
app.use(errorHandler.errorHandler);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Handle React routing - return index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start server
async function startServer() {
  await connectDB();
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`🔌 API: http://localhost:${PORT}/api`);
  });
}

startServer();
