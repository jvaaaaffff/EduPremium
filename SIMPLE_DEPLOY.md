# Simple Deployment Guide

## 🎯 Goal
- **Frontend Website:** `https://edupremium.onrender.com`
- **Backend API:** `https://edupremium-api.onrender.com`

---

## Step 1: Deploy Backend API

Go to [Render.com](https://render.com) → New Web Service

### Settings:
```
Name: edupremium-api
Branch: main
Root Directory: backend
Build Command: npm install
Start Command: npm start
Instance Type: Free
```

### Environment Variables:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

**Click "Create Web Service"**

✅ Backend will be at: `https://edupremium-api.onrender.com`

---

## Step 2: Deploy Frontend Website

Go to [Render.com](https://render.com) → New Web Service

### Settings:
```
Name: edupremium
Branch: main
Root Directory: frontend
Build Command: npm install && npm run build
Start Command: npm start
Instance Type: Free
```

### Environment Variables:
```
VITE_API_URL=https://edupremium-api.onrender.com
```

**Click "Create Web Service"**

✅ Website will be at: `https://edupremium.onrender.com`

---

## Step 3: Test

### Test Backend:
Visit: `https://edupremium-api.onrender.com/api/health`

Should see:
```json
{"status":"success","message":"API is working!"}
```

### Test Frontend:
Visit: `https://edupremium.onrender.com`

Should see: **Your React website with homepage, navigation, etc.**

---

## ✅ Done!

Your website is live at `https://edupremium.onrender.com`

---

## 🔄 To Update

Just push to GitHub:
```bash
git add .
git commit -m "Update"
git push origin main
```

Both services will auto-redeploy!
