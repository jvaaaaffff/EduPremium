# Render Deployment - Separate Backend & Frontend

Deploy backend as **Web Service** and frontend as **Static Site** on Render.

---

## 🎯 Final Result

- **Backend API (Web Service):** `https://edupremium-api.onrender.com`
- **Frontend Website (Static Site):** `https://edupremium.onrender.com`

---

## Part 1: Deploy Backend as Web Service

### Step 1: Create Web Service

1. Go to [Render.com](https://render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect repository: `jvaaaaffff/EduPremium`

### Step 2: Configure Backend

| Field | Value |
|-------|-------|
| **Name** | `edupremium-api` |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

### Step 3: Environment Variables

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

### Step 4: Deploy

Click **"Create Web Service"**

✅ **Backend URL:** `https://edupremium-api.onrender.com`

**Test:** Visit `https://edupremium-api.onrender.com/api/health`

---

## Part 2: Deploy Frontend as Static Site

### Step 1: Create Static Site

1. Go to [Render.com](https://render.com)
2. Click **"New +"** → **"Static Site"**
3. Connect repository: `jvaaaaffff/EduPremium`

### Step 2: Configure Frontend

| Field | Value |
|-------|-------|
| **Name** | `edupremium` |
| **Branch** | `main` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### Step 3: Environment Variables

```
VITE_API_URL=https://edupremium-api.onrender.com
```

### Step 4: Deploy

Click **"Create Static Site"**

✅ **Frontend URL:** `https://edupremium.onrender.com`

---

## ✅ Verification

### Test Backend API:
```
https://edupremium-api.onrender.com/api/health
```
Should return:
```json
{"status":"success","message":"API is working!"}
```

### Test Frontend Website:
```
https://edupremium.onrender.com
```
Should show: **Your React website with homepage, navigation, etc.**

---

## 🔄 How It Works

### Backend (Web Service):
- Runs Node.js server
- Serves API at `/api/*` endpoints
- Always running (or sleeps on free tier)

### Frontend (Static Site):
- Builds React app to static HTML/CSS/JS
- Served by Render's CDN
- Fast and efficient
- Calls backend API for data

---

## 📝 Summary

| Service | Type | URL | Purpose |
|---------|------|-----|---------|
| Backend | Web Service | `edupremium-api.onrender.com` | API endpoints |
| Frontend | Static Site | `edupremium.onrender.com` | Website pages |

---

## 🐛 Troubleshooting

### Backend shows JSON at root URL
✅ **This is correct!** Backend is API-only. The root endpoint shows API info.

### Frontend can't connect to backend
- Check `VITE_API_URL` environment variable in frontend
- Make sure it points to: `https://edupremium-api.onrender.com`
- Redeploy frontend after changing environment variables

### Frontend shows blank page
- Check build logs in Render dashboard
- Make sure `Publish Directory` is set to `dist`
- Verify `npm run build` works locally

---

## 💰 Cost

Both services on **Free tier**: $0/month

**Limitations:**
- Backend sleeps after 15 min inactivity
- 750 hours/month free (enough for one service 24/7)

**To keep always-on:**
- Upgrade backend to Starter: $7/month
- Frontend (static site) is always fast

---

**Last Updated:** April 25, 2026
