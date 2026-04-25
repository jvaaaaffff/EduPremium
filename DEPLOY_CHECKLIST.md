# Deployment Checklist ✅

## Before You Start

- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string ready
- [ ] GitHub repository updated with latest code

---

## Step 1: Deploy Backend (Web Service)

### Configuration:
```
Service Type: Web Service
Name: edupremium-api
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

### Environment Variables:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
PORT=10000
```

### After Deploy:
- [ ] Backend deployed successfully
- [ ] Copy backend URL: `https://edupremium-api.onrender.com`
- [ ] Test: Visit `https://edupremium-api.onrender.com/api/health`
- [ ] Should see: `{"status":"success","message":"API is working!"}`

---

## Step 2: Deploy Frontend (Static Site)

### Configuration:
```
Service Type: Static Site
Name: edupremium
Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: dist
```

### Environment Variables:
```
VITE_API_URL=https://edupremium-api.onrender.com
```
⚠️ Use the backend URL from Step 1!

### After Deploy:
- [ ] Frontend deployed successfully
- [ ] Visit: `https://edupremium.onrender.com`
- [ ] Should see: Your React website (NOT JSON)
- [ ] Test navigation: Click menu items
- [ ] Check browser console: No CORS errors

---

## Step 3: Verify Connection

### Test API from Frontend:
1. Open `https://edupremium.onrender.com`
2. Open browser DevTools (F12) → Console
3. Run:
```javascript
fetch('https://edupremium-api.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```
4. Should see: `{status: "success", message: "API is working!"}`

### Checklist:
- [ ] Frontend loads correctly
- [ ] Backend API responds
- [ ] No CORS errors
- [ ] Forms work (if any)
- [ ] Navigation works

---

## 🎉 Deployment Complete!

**Your URLs:**
- Website: `https://edupremium.onrender.com`
- API: `https://edupremium-api.onrender.com`

---

## 🔄 To Update Later

```bash
git add .
git commit -m "Update"
git push origin main
```

Both services will auto-redeploy!

---

## ❌ Common Issues

### Issue: Backend shows JSON at root
✅ **This is correct!** Backend is API-only.
- Root URL shows API info
- Your website is on the Static Site

### Issue: Frontend shows blank page
- Check Render logs for build errors
- Verify `Publish Directory` is `dist`
- Check environment variables

### Issue: CORS errors
- Add frontend URL to backend CORS
- Redeploy backend after CORS changes

### Issue: API calls fail
- Verify `VITE_API_URL` in frontend environment variables
- Check backend is running
- Test backend URL directly

---

**Need Help?** Check `RENDER_SEPARATE_DEPLOY.md` for detailed instructions!
