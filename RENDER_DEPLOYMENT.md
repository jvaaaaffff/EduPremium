# Render Backend Deployment Guide

## Quick Setup for Render.com

### Step 1: Deploy Backend on Render

1. **Go to [Render.com](https://render.com/)** and sign in with GitHub

2. **Click "New +" → "Web Service"**

3. **Connect Repository**: `https://github.com/jvaaaaffff/EduPremium.git`

4. **Configure Service:**

   | Setting | Value |
   |---------|-------|
   | **Name** | `edupremium` (this will be your URL: edupremium.onrender.com) |
   | **Region** | Choose closest to you |
   | **Branch** | `main` |
   | **Root Directory** | `backend` |
   | **Runtime** | `Node` |
   | **Build Command** | `npm install` |
   | **Start Command** | `npm start` |
   | **Instance Type** | `Free` |

5. **Environment Variables** (Click "Advanced" → "Add Environment Variable"):

   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
   PORT=10000
   FRONTEND_URL=https://your-app.vercel.app
   ```

   **Important Notes:**
   - Replace `MONGODB_URI` with your actual MongoDB Atlas connection string
   - Replace `FRONTEND_URL` with your Vercel frontend URL (add this after deploying frontend)
   - Render uses port `10000` by default, but the app will use `process.env.PORT`

6. **Click "Create Web Service"**

7. **Wait for deployment** (2-5 minutes)

8. **Your backend URL will be:**
   ```
   https://edupremium.onrender.com
   ```

### Step 2: Test Your Backend

Visit these URLs to verify:

1. **Root endpoint:**
   ```
   https://edupremium.onrender.com/
   ```
   Should show:
   ```json
   {
     "status": "success",
     "message": "EduPremium API Server is running!",
     "version": "1.0.0",
     "endpoints": {
       "health": "/api/health",
       "tasks": "/api/tasks",
       "leads": "/api/leads"
     }
   }
   ```

2. **Health check:**
   ```
   https://edupremium.onrender.com/api/health
   ```
   Should show:
   ```json
   {
     "status": "success",
     "message": "API is working!"
   }
   ```

### Step 3: Get Your Backend URL

Copy your backend URL:
```
https://edupremium.onrender.com
```

You'll need this for the frontend deployment!

---

## Deploy Frontend on Vercel

### Step 1: Deploy on Vercel

1. **Go to [Vercel.com](https://vercel.com/)** and sign in

2. **Click "Add New..." → "Project"**

3. **Import Repository**: `https://github.com/jvaaaaffff/EduPremium.git`

4. **Configure Project:**

   | Setting | Value |
   |---------|-------|
   | **Framework Preset** | `Vite` |
   | **Root Directory** | `frontend` |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |

5. **Environment Variables:**

   Add this environment variable:
   ```
   VITE_API_URL=https://edupremium.onrender.com
   ```

6. **Click "Deploy"**

7. **Your frontend URL** will be something like:
   ```
   https://edu-premium.vercel.app
   ```

### Step 2: Update Backend CORS (Optional)

If you want to restrict CORS to only your frontend domain:

1. Go back to Render dashboard
2. Click on your backend service
3. Go to "Environment" tab
4. Update `FRONTEND_URL` to your Vercel URL:
   ```
   FRONTEND_URL=https://edu-premium.vercel.app
   ```
5. Save changes (Render will auto-redeploy)

---

## Custom Domain on Render (Optional)

To get `edupremium.onrender.com` instead of a random name:

1. When creating the service, set **Name** to `edupremium`
2. This becomes your subdomain: `edupremium.onrender.com`

If the name is taken, try:
- `edupremium-api`
- `edupremium-backend`
- `edupremium-server`

---

## Testing the Full Stack

### Test Backend
```bash
curl https://edupremium.onrender.com/api/health
```

### Test Frontend → Backend Connection

1. Open your Vercel frontend URL
2. Open browser DevTools (F12) → Console
3. Run this in console:
```javascript
fetch('https://edupremium.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```

Should see:
```json
{
  "status": "success",
  "message": "API is working!"
}
```

---

## API Endpoints

All endpoints are prefixed with `/api`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root - API info |
| GET | `/api/health` | Health check |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create task |
| PATCH | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/leads` | Get all leads |
| POST | `/api/leads` | Create lead |
| GET | `/api/leads/stats` | Lead statistics |

---

## Troubleshooting

### Issue: "ENOENT: no such file or directory, stat 'dist/index.html'"

**Cause:** Backend is trying to serve frontend files that don't exist.

**Solution:** ✅ Already fixed! The updated `backend/server.ts` no longer tries to serve static files in production.

### Issue: CORS errors in browser

**Check:**
1. `FRONTEND_URL` is set in Render environment variables
2. CORS is enabled in `backend/server.ts`

**Solution:**
```typescript
app.use(cors({
  origin: ['https://your-frontend.vercel.app'],
  credentials: true
}));
```

### Issue: MongoDB connection fails

**Check:**
1. `MONGODB_URI` is correct in Render environment variables
2. MongoDB Atlas IP whitelist includes `0.0.0.0/0`
3. Username and password are correct

### Issue: Render service sleeps (Free tier)

**Note:** Free tier services sleep after 15 minutes of inactivity. First request takes 30-60 seconds to wake up.

**Solutions:**
- Upgrade to paid tier ($7/month for always-on)
- Use UptimeRobot to ping every 10 minutes
- Accept the cold start delay

---

## Environment Variables Summary

### Backend (Render)
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
FRONTEND_URL=https://your-app.vercel.app
```

### Frontend (Vercel)
```env
VITE_API_URL=https://edupremium.onrender.com
```

---

## Deployment URLs

**Backend API**: `https://edupremium.onrender.com`

**Frontend**: `https://your-app.vercel.app`

**API Health**: `https://edupremium.onrender.com/api/health`

---

## Redeployment

### Auto-deploy on Git Push

Both Render and Vercel auto-deploy when you push to `main` branch:

```bash
git add .
git commit -m "Update code"
git push origin main
```

### Manual Redeploy

**Render:**
1. Go to dashboard → Your service
2. Click "Manual Deploy" → "Deploy latest commit"

**Vercel:**
1. Go to dashboard → Your project
2. Click "Deployments" → "Redeploy"

---

**Last Updated**: April 25, 2026
