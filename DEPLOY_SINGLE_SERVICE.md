# Deploy as Single Service on Render

This deploys both frontend and backend together in ONE service.

## 🎯 Result

**One URL for everything:**
- Website: `https://edupremium.onrender.com` ← Your React website
- API: `https://edupremium.onrender.com/api` ← Backend API

---

## 📋 Render Configuration

### Step 1: Create New Web Service

Go to [Render.com](https://render.com) → New + → Web Service

### Step 2: Connect Repository

Select: `jvaaaaffff/EduPremium`

### Step 3: Configure Service

| Field | Value |
|-------|-------|
| **Name** | `edupremium` |
| **Branch** | `main` |
| **Root Directory** | *(leave empty)* |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### Step 4: Environment Variables

Add these:

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

### Step 5: Deploy

Click **"Create Web Service"**

---

## ✅ After Deployment

**Your website:** `https://edupremium.onrender.com`

**Test:**
- Homepage: `https://edupremium.onrender.com/` ← Shows React website
- API: `https://edupremium.onrender.com/api/health` ← Shows API response

---

## 🎯 How It Works

The `server-combined.js` file:
1. Serves API routes at `/api/*`
2. Serves React website for all other routes
3. One service, one URL, everything together!

---

## 🔄 To Update

```bash
git add .
git commit -m "Update"
git push origin main
```

Render will auto-redeploy!
