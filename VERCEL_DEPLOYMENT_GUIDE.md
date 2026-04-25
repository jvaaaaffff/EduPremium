# Complete Vercel Deployment Guide - EduPremium

This guide covers running the project locally and deploying to Vercel with all recent updates.

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18 or higher
- npm or yarn
- At least 6GB free disk space

### Local Development Setup

#### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

#### Step 2: Configure Environment Variables

Create `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
# Optional: Add MongoDB URI, otherwise in-memory DB will be used
# MONGODB_URI=mongodb://localhost:27017/edupremium
```

#### Step 3: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run start
```
You should see:
```
No MONGODB_URI provided. Starting in-memory MongoDB instance...
In-memory MongoDB started at mongodb://127.0.0.1:xxxxx/
Connected to MongoDB successfully
Server running on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
You should see:
```
VITE v6.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

#### Step 4: Access Your Application

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api/health`

The frontend is configured to proxy API requests to the backend automatically.

---

## 🌐 Deploying to Vercel

### Overview

Vercel deployment strategy:
1. **Frontend**: Built with Vite and served as static files
2. **Backend**: Runs as Vercel Serverless Functions
3. **Database**: MongoDB Atlas (cloud database)
4. **Routing**: `/api/*` routes to backend, everything else to frontend

### Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with password
4. Whitelist all IPs: `0.0.0.0/0` (for Vercel)
5. Get your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/edupremium?retryWrites=true&w=majority
   ```

### Step 2: Create `vercel.json`

Create this file in the **root** directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "backend/server.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Step 3: Update Backend for Vercel

The backend needs to export the Express app for Vercel. Update `backend/server.ts`:

```typescript
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

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectDB() {
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
}

// API routes
app.use("/api/v1", apiRoutes);
app.use("/api", apiRoutes);

// Global Error Handler
app.use(errorHandler);

// Only start server if not in Vercel (Vercel handles this)
if (process.env.VERCEL !== "1") {
  async function startServer() {
    await connectDB();
    
    const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
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
} else {
  // For Vercel, connect to DB immediately
  connectDB();
}

// Export for Vercel
export default app;
```

### Step 4: Update Root `package.json`

Make sure your root `package.json` has the build script:

```json
{
  "scripts": {
    "dev": "tsx backend/server.ts",
    "dev:backend": "cross-env PORT=3000 tsx backend/server.ts",
    "dev:frontend": "vite",
    "start": "cross-env NODE_ENV=production tsx backend/server.ts",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rimraf dist",
    "lint": "tsc --noEmit",
    "check": "node check-environment.js",
    "vercel-build": "npm run build"
  }
}
```

### Step 5: Push to GitHub

1. Initialize git (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for Vercel deployment"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git branch -M main
   git push -u origin main
   ```

### Step 6: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com/)** and sign in with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository**

4. **Configure Project:**
   - Framework Preset: `Vite`
   - Root Directory: `./` (leave as root)
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `NODE_ENV` | `production` |
   | `MONGODB_URI` | `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/edupremium` |
   | `PORT` | `5000` |

6. **Click "Deploy"**

### Step 7: Verify Deployment

After deployment completes:

1. **Test the frontend**: Visit your Vercel URL (e.g., `https://your-app.vercel.app`)

2. **Test the API**: Visit `https://your-app.vercel.app/api/health`
   
   Expected response:
   ```json
   {
     "status": "success",
     "message": "API is working!"
   }
   ```

3. **Test API endpoints**:
   - `GET /api/tasks` - Get all tasks
   - `POST /api/leads` - Create a lead
   - `GET /api/leads/stats` - Get lead statistics

---

## 🔧 Troubleshooting

### Issue: "Module not found" errors

**Solution**: Make sure all dependencies are in `package.json`:
```bash
npm install --save express cors mongoose dotenv
npm install --save-dev @types/express @types/cors @types/node tsx typescript
```

### Issue: MongoDB connection fails

**Solution**: 
1. Check your MongoDB Atlas connection string
2. Ensure IP whitelist includes `0.0.0.0/0`
3. Verify username and password are correct
4. Check environment variables in Vercel dashboard

### Issue: API routes return 404

**Solution**: 
1. Verify `vercel.json` is in the root directory
2. Check that routes are configured correctly
3. Ensure backend exports the Express app: `export default app;`

### Issue: CORS errors

**Solution**: Make sure `cors()` middleware is enabled in `backend/server.ts`:
```typescript
import cors from "cors";
app.use(cors());
```

### Issue: Build fails on Vercel

**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify all dependencies are listed in `package.json`
4. Check TypeScript errors: `npm run lint`

---

## 📝 Environment Variables Reference

### Local Development (backend/.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/edupremium
```

### Production (Vercel Dashboard)
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=5000
```

---

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/leads` | Get all leads |
| POST | `/api/leads` | Create a lead |
| GET | `/api/leads/stats` | Get lead statistics |

---

## 🔄 Redeployment

To redeploy after making changes:

1. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **Vercel auto-deploys** from your main branch

3. **Manual redeploy**: Go to Vercel dashboard → Deployments → Redeploy

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created and configured
- [ ] Connection string obtained with correct credentials
- [ ] IP whitelist set to `0.0.0.0/0`
- [ ] `vercel.json` created in root directory
- [ ] Backend exports Express app: `export default app;`
- [ ] Root `package.json` has `vercel-build` script
- [ ] Code pushed to GitHub
- [ ] Vercel project created and linked to GitHub repo
- [ ] Environment variables added in Vercel dashboard
- [ ] Deployment successful
- [ ] Frontend loads correctly
- [ ] API endpoints respond correctly
- [ ] Database operations work

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)

---

**Last Updated**: April 25, 2026
**Project**: EduPremium
**Stack**: React + Vite + Express + MongoDB + TypeScript
