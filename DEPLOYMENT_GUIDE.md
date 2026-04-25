# Complete Deployment Guide - Frontend (Vercel) + Backend (Render)

This guide shows how to deploy your frontend on Vercel and backend on Render, then connect them together.

---

## 🎯 Architecture Overview

- **Frontend**: Deployed on Vercel (React + Vite)
- **Backend**: Deployed on Render (Express + Node.js)
- **Database**: MongoDB Atlas (Cloud Database)
- **Connection**: Frontend calls backend API via environment variable

---

## Part 1: Deploy Backend on Render

### Step 1: Create MongoDB Atlas Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with password
4. **Network Access**: Add `0.0.0.0/0` to whitelist (allows connections from anywhere)
5. Get your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/edupremium?retryWrites=true&w=majority
   ```
   Replace `<username>` and `<password>` with your actual credentials.

### Step 2: Deploy Backend on Render

1. **Go to [Render.com](https://render.com/)** and sign in with GitHub

2. **Click "New +" → "Web Service"**

3. **Connect your GitHub repository**: `https://github.com/jvaaaaffff/EduPremium.git`

4. **Configure the service:**
   - **Name**: `edupremium-backend` (or any name you prefer)
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

5. **Add Environment Variables** (click "Advanced" → "Add Environment Variable"):
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/edupremium
   PORT=5000
   ```

6. **Click "Create Web Service"**

7. **Wait for deployment** (takes 2-5 minutes)

8. **Copy your backend URL** - It will look like:
   ```
   https://edupremium-backend.onrender.com
   ```
   **Save this URL - you'll need it for the frontend!**

9. **Test your backend** - Visit:
   ```
   https://edupremium-backend.onrender.com/api/health
   ```
   You should see:
   ```json
   {
     "status": "success",
     "message": "API is working!"
   }
   ```

---

## Part 2: Deploy Frontend on Vercel

### Step 1: Update Frontend Environment Variable

Before deploying, you need to tell the frontend where your backend is.

**Option A: Update locally and push**

1. Edit `frontend/.env`:
   ```env
   VITE_API_URL=https://edupremium-backend.onrender.com
   ```
   Replace with your actual Render backend URL.

2. Commit and push:
   ```bash
   git add frontend/.env
   git commit -m "Update API URL for production"
   git push origin main
   ```

**Option B: Set in Vercel Dashboard** (Recommended - keeps .env out of git)

You'll add this as an environment variable in Vercel (see Step 3 below).

### Step 2: Deploy on Vercel

1. **Go to [Vercel.com](https://vercel.com/)** and sign in with GitHub

2. **Click "Add New..." → "Project"**

3. **Import your GitHub repository**: `https://github.com/jvaaaaffff/EduPremium.git`

4. **Configure Project:**
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `VITE_API_URL` | `https://edupremium-backend.onrender.com` |
   
   Replace with your actual Render backend URL!

6. **Click "Deploy"**

7. **Wait for deployment** (takes 1-3 minutes)

8. **Your frontend URL** will be something like:
   ```
   https://edu-premium.vercel.app
   ```

---

## Part 3: Enable CORS on Backend

Your backend needs to allow requests from your Vercel frontend domain.

### Update Backend CORS Configuration

The backend already has CORS enabled with `app.use(cors())`, which allows all origins. This is fine for development.

**For production security**, you can restrict it to only your frontend domain:

1. Edit `backend/server.ts` and update the CORS configuration:
   ```typescript
   app.use(cors({
     origin: [
       'http://localhost:5173', // Local development
       'https://edu-premium.vercel.app', // Your Vercel domain
       'https://*.vercel.app' // All Vercel preview deployments
     ],
     credentials: true
   }));
   ```

2. Commit and push:
   ```bash
   git add backend/server.ts
   git commit -m "Update CORS for production"
   git push origin main
   ```

3. Render will automatically redeploy your backend.

---

## Part 4: Test the Connection

### Test Backend API

Visit your backend health endpoint:
```
https://edupremium-backend.onrender.com/api/health
```

Expected response:
```json
{
  "status": "success",
  "message": "API is working!"
}
```

### Test Frontend

1. Visit your Vercel URL: `https://edu-premium.vercel.app`

2. Open browser DevTools (F12) → Console

3. Check for any API errors

4. Try submitting a form (if you have one) to test the connection

### Test API Endpoints

You can test with curl or Postman:

```bash
# Health check
curl https://edupremium-backend.onrender.com/api/health

# Get all tasks
curl https://edupremium-backend.onrender.com/api/tasks

# Create a lead
curl -X POST https://edupremium-backend.onrender.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com"}'
```

---

## 🔧 Configuration Summary

### Backend (Render)
- **URL**: `https://edupremium-backend.onrender.com`
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV=production`
  - `MONGODB_URI=mongodb+srv://...`
  - `PORT=5000`

### Frontend (Vercel)
- **URL**: `https://edu-premium.vercel.app`
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL=https://edupremium-backend.onrender.com`

---

## 📝 Using the API in Frontend Code

Use the API configuration file we created:

```typescript
import { API_ENDPOINTS, apiCall } from './config/api';

// Example: Fetch all tasks
const fetchTasks = async () => {
  try {
    const data = await apiCall(API_ENDPOINTS.tasks);
    console.log(data);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

// Example: Create a lead
const createLead = async (leadData) => {
  try {
    const data = await apiCall(API_ENDPOINTS.leads, {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
    console.log('Lead created:', data);
  } catch (error) {
    console.error('Error creating lead:', error);
  }
};
```

---

## 🔄 Redeployment

### Update Backend
```bash
# Make changes to backend code
git add backend/
git commit -m "Update backend"
git push origin main
```
Render will automatically redeploy.

### Update Frontend
```bash
# Make changes to frontend code
git add frontend/
git commit -m "Update frontend"
git push origin main
```
Vercel will automatically redeploy.

---

## 🐛 Troubleshooting

### Issue: Frontend can't connect to backend

**Check:**
1. Backend is running: Visit `https://your-backend.onrender.com/api/health`
2. CORS is enabled in backend
3. `VITE_API_URL` environment variable is set correctly in Vercel
4. Check browser console for CORS errors

**Solution:**
- Verify the backend URL in Vercel environment variables
- Check CORS configuration in `backend/server.ts`
- Redeploy frontend after changing environment variables

### Issue: Backend shows "Application failed to respond"

**Check:**
1. MongoDB connection string is correct
2. MongoDB Atlas IP whitelist includes `0.0.0.0/0`
3. Environment variables are set in Render dashboard
4. Check Render logs for errors

**Solution:**
- Go to Render dashboard → Your service → Logs
- Look for connection errors
- Verify all environment variables

### Issue: "Cannot GET /api/..."

**Check:**
1. API route exists in `backend/routes/api.ts`
2. Backend is running
3. URL is correct (includes `/api/` prefix)

### Issue: Render free tier sleeps after inactivity

**Note:** Render's free tier puts services to sleep after 15 minutes of inactivity. First request after sleep takes 30-60 seconds to wake up.

**Solutions:**
- Upgrade to paid tier for always-on service
- Use a service like UptimeRobot to ping your backend every 10 minutes
- Accept the cold start delay

---

## ✅ Deployment Checklist

### Backend (Render)
- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] IP whitelist set to `0.0.0.0/0`
- [ ] Connection string obtained
- [ ] Render web service created
- [ ] Root directory set to `backend`
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Health endpoint responds
- [ ] Backend URL copied

### Frontend (Vercel)
- [ ] Backend URL obtained from Render
- [ ] Vercel project created
- [ ] Root directory set to `frontend`
- [ ] `VITE_API_URL` environment variable added
- [ ] Deployment successful
- [ ] Frontend loads correctly
- [ ] API calls work from frontend

### Connection
- [ ] CORS enabled on backend
- [ ] Frontend can call backend API
- [ ] Forms submit successfully
- [ ] Data saves to MongoDB

---

## 🌐 Your Deployed URLs

**Frontend (Vercel)**: `https://your-app.vercel.app`

**Backend (Render)**: `https://your-backend.onrender.com`

**API Health Check**: `https://your-backend.onrender.com/api/health`

---

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

**Last Updated**: April 25, 2026
**Project**: EduPremium
**Stack**: React + Vite (Vercel) + Express + Node.js (Render) + MongoDB Atlas
