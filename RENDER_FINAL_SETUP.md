# Final Render Deployment Setup

## 🎯 One Service - Both Frontend & Backend

---

## ✅ Render Configuration

### Service Settings:

```
Service Type: Web Service
Name: edupremium
Branch: main
Root Directory: (LEAVE COMPLETELY EMPTY!)
Runtime: Node
Build Command: npm run build
Start Command: npm start
Instance Type: Free
```

### Environment Variables:

Click "Advanced" → "Add Environment Variable"

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

⚠️ **Replace `MONGODB_URI` with your actual MongoDB Atlas connection string!**

---

## 🔨 What Happens During Build

1. **Install root dependencies**
2. **Install backend dependencies** (`backend/`)
3. **Install frontend dependencies** (`frontend/`)
4. **Build frontend** → Creates `frontend/dist/`
5. **Verify** `frontend/dist/index.html` exists

---

## 🚀 What Happens When Starting

1. Runs `npm start`
2. Changes to `backend/` directory
3. Runs `npm start` in backend
4. Backend server starts with `tsx server.ts`
5. Backend checks if `NODE_ENV=production`
6. If production, serves frontend from `../frontend/dist/`
7. Server listens on port 10000

---

## ✅ Expected Result

**Your URL:** `https://edupremium.onrender.com`

- **Root (`/`)** → Your React website 🎉
- **API (`/api/health`)** → Backend API response

---

## 📋 Deployment Checklist

Before deploying:

- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string ready
- [ ] Code pushed to GitHub
- [ ] Root Directory is **EMPTY** (not "backend" or "frontend")
- [ ] Build Command is `npm run build`
- [ ] Start Command is `npm start`
- [ ] Environment variables added

---

## 🔍 Check Deployment Logs

### During Build - Look for:

```
🚀 EduPremium Deployment Script
================================
1️⃣ Installing root dependencies...
✅ Root dependencies installed
2️⃣ Installing backend dependencies...
✅ Backend dependencies installed
3️⃣ Installing frontend dependencies...
✅ Frontend dependencies installed
4️⃣ Building frontend...
✅ Frontend built
5️⃣ Verifying build...
✅ index.html found in dist/
🎉 Build completed successfully!
```

### During Start - Look for:

```
=================================
🚀 Server running on port 10000
📍 Environment: production
🔗 API available at: http://localhost:10000/api
📁 Looking for frontend at: /opt/render/project/src/frontend/dist
✅ Frontend found!
📱 Frontend: http://localhost:10000
=================================
```

---

## ❌ If Build Fails

### Error: "Command not found: bash"

**Solution:** Render will fallback to `node build.js` automatically

### Error: "Cannot find module"

**Solution:** 
- Check all `package.json` files have correct dependencies
- Make sure `npm install` completed for all folders

### Error: "Frontend not found"

**Solution:**
- Check build logs - did `frontend/dist/` get created?
- Verify `npm run build` in frontend completed successfully

---

## 🐛 If Website Shows JSON

**Problem:** Backend is running but not serving frontend

**Check:**
1. Is `NODE_ENV=production` set in environment variables?
2. Did the build create `frontend/dist/index.html`?
3. Check server logs for "✅ Frontend found!"

**Solution:**
- Make sure `NODE_ENV=production` is set
- Redeploy to rebuild frontend

---

## 🔄 To Update/Redeploy

```bash
git add .
git commit -m "Update"
git push origin main
```

Render will automatically redeploy!

---

## 📞 Test After Deployment

### Test 1: Homepage
```
Visit: https://edupremium.onrender.com/
Expected: Your React website homepage
```

### Test 2: API
```
Visit: https://edupremium.onrender.com/api/health
Expected: {"status":"success","message":"API is working!"}
```

### Test 3: Navigation
```
Click menu items on your website
Expected: Pages load correctly
```

---

## ✅ Success Indicators

- ✅ Build completes without errors
- ✅ Server starts successfully
- ✅ Logs show "Frontend found!"
- ✅ Root URL shows React website (not JSON)
- ✅ API endpoints work
- ✅ No errors in browser console

---

## 💡 Tips

1. **First deployment takes 3-5 minutes** - be patient!
2. **Free tier sleeps after 15 min** - first request takes 30-60 sec to wake
3. **Check logs if something fails** - they show exactly what went wrong
4. **Environment variables require redeploy** - change them, then redeploy

---

**Last Updated:** April 25, 2026

**Your project is ready to deploy!** 🚀
