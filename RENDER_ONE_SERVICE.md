# Deploy as ONE Service on Render

Deploy both frontend and backend together in a single Web Service.

---

## 🎯 Result

**One URL for everything:**
- Website: `https://edupremium.onrender.com/` ← Your React website
- API: `https://edupremium.onrender.com/api` ← Backend API

---

## 🚀 Deployment Steps

### Step 1: Go to Render

1. Visit [Render.com](https://render.com)
2. Sign in with GitHub
3. Click **"New +"** → **"Web Service"**

### Step 2: Connect Repository

1. Click "Connect a repository"
2. Find and select: **`jvaaaaffff/EduPremium`**
3. Click "Connect"

### Step 3: Configure Service

Fill in these fields **EXACTLY**:

| Field | Value |
|-------|-------|
| **Name** | `edupremium` |
| **Region** | `Oregon (US West)` or closest |
| **Branch** | `main` |
| **Root Directory** | *(LEAVE EMPTY - DO NOT type anything!)* |
| **Runtime** | `Node` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

⚠️ **IMPORTANT:** Root Directory must be **EMPTY**!

### Step 4: Environment Variables

Click "Advanced" → "Add Environment Variable"

Add these 3 variables:

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

⚠️ Replace `MONGODB_URI` with your actual MongoDB Atlas connection string!

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. Watch the logs

---

## ✅ After Deployment

### Your URL:
```
https://edupremium.onrender.com
```

### Test Website:
Visit: `https://edupremium.onrender.com/`

Should show: **Your React website with homepage, navigation, etc.** 🎉

### Test API:
Visit: `https://edupremium.onrender.com/api/health`

Should show:
```json
{"status":"success","message":"API is working!"}
```

---

## 🔍 How It Works

The `server-combined.js` file:
1. Loads backend API routes
2. Serves API at `/api/*` endpoints
3. Serves frontend React app for all other routes
4. One service, one URL, everything together!

---

## 📊 What You'll See in Logs

During deployment, you should see:
```
==> Installing dependencies
==> Building frontend
==> Build complete!
==> Starting server
✅ Connected to MongoDB successfully
✅ Backend routes loaded
✅ API routes registered
📁 Serving frontend from: /opt/render/project/src/frontend/dist
🚀 Server running on port 10000
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module"
**Solution:** Make sure Root Directory is **EMPTY** (not "backend" or "frontend")

### Issue: Shows "Not Found"
**Cause:** Frontend didn't build properly
**Solution:** 
- Check logs for build errors
- Make sure `npm run build` completed successfully
- Verify `frontend/dist` folder was created

### Issue: Shows only JSON at root
**Cause:** Frontend files not found
**Solution:**
- Check that `frontend/dist/index.html` exists after build
- Verify build command ran successfully
- Check logs for "Serving frontend from:" message

### Issue: API works but website doesn't
**Cause:** Frontend build failed
**Solution:**
- Check build logs
- Make sure all frontend dependencies installed
- Verify `frontend/vite.config.ts` is correct

---

## 🔄 To Update

Just push to GitHub:
```bash
git add .
git commit -m "Update"
git push origin main
```

Render will automatically redeploy!

---

## 📝 Configuration Summary

```
Service Type: Web Service
Name: edupremium
Root Directory: (empty)
Build Command: npm run build
Start Command: npm start

Environment Variables:
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
PORT=10000
```

---

## ✅ Success Checklist

After deployment:
- [ ] No errors in logs
- [ ] See "Server running on port 10000"
- [ ] Visit root URL - see React website (not JSON)
- [ ] Visit /api/health - see JSON response
- [ ] Navigation works
- [ ] No console errors in browser

---

**Last Updated:** April 25, 2026
