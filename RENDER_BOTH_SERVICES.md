# Deploy Both Frontend & Backend on Render

This guide shows how to deploy both your frontend website and backend API on Render.

---

## 🎯 Final URLs

- **Frontend (Website):** `https://edupremium.onrender.com`
- **Backend (API):** `https://edupremium-api.onrender.com`

---

## Step 1: Deploy Backend API First

### Backend Configuration:

1. **Go to Render.com** → Click "New +" → "Web Service"

2. **Connect Repository:** `https://github.com/jvaaaaffff/EduPremium.git`

3. **Fill in the form:**

| Field | Value |
|-------|-------|
| **Name** | `edupremium-api` |
| **Branch** | `main` |
| **Region** | `Oregon (US West)` |
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

4. **Environment Variables:**

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/edupremium
PORT=10000
```

5. **Click "Create Web Service"**

6. **Wait for deployment** (2-5 minutes)

7. **Copy your backend URL:** `https://edupremium-api.onrender.com`

8. **Test it:** Visit `https://edupremium-api.onrender.com/api/health`

---

## Step 2: Deploy Frontend Website

### Frontend Configuration:

1. **Go to Render.com** → Click "New +" → "Web Service"

2. **Connect Repository:** `https://github.com/jvaaaaffff/EduPremium.git`

3. **Fill in the form:**

| Field | Value |
|-------|-------|
| **Name** | `edupremium` |
| **Branch** | `main` |
| **Region** | `Oregon (US West)` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` |

4. **Environment Variables:**

```
VITE_API_URL=https://edupremium-api.onrender.com
```

5. **Click "Create Web Service"**

6. **Wait for deployment** (2-5 minutes)

7. **Your website URL:** `https://edupremium.onrender.com`

---

## Step 3: Update Backend CORS

Now that you have your frontend URL, update the backend to allow requests from it:

1. Go to Render dashboard → `edupremium-api` service
2. Go to "Environment" tab
3. Click "Add Environment Variable"
4. Add:
   ```
   FRONTEND_URL=https://edupremium.onrender.com
   ```
5. Click "Save Changes" (Render will auto-redeploy)

---

## ✅ Verification

### Test Backend API:
```
https://edupremium-api.onrender.com/api/health
```
Should return:
```json
{
  "status": "success",
  "message": "API is working!"
}
```

### Test Frontend Website:
```
https://edupremium.onrender.com
```
Should show your React website with homepage, navigation, etc.

### Test Connection:
Open your website, open browser console (F12), and run:
```javascript
fetch('https://edupremium-api.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
```

---

## 📋 Quick Reference

### Backend Service (edupremium-api)

```
Name: edupremium-api
Root Directory: backend
Build Command: npm install
Start Command: npm start

Environment Variables:
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
PORT=10000
FRONTEND_URL=https://edupremium.onrender.com
```

### Frontend Service (edupremium)

```
Name: edupremium
Root Directory: frontend
Build Command: npm install && npm run build
Start Command: npm start

Environment Variables:
VITE_API_URL=https://edupremium-api.onrender.com
```

---

## 🔄 Redeployment

Both services auto-deploy when you push to GitHub:

```bash
git add .
git commit -m "Update code"
git push origin main
```

Render will automatically redeploy both services.

---

## 💡 Alternative: Use Custom Domains

If you have a custom domain (e.g., `edupremium.com`):

1. **Frontend:** `edupremium.com` or `www.edupremium.com`
2. **Backend:** `api.edupremium.com`

Configure in Render dashboard → Settings → Custom Domain

---

## 🐛 Troubleshooting

### Frontend shows API JSON response

**Cause:** Wrong service is deployed or root directory is incorrect.

**Solution:** 
- Check Root Directory is set to `frontend`
- Verify Build Command is `npm install && npm run build`
- Verify Start Command is `npm start`

### CORS errors

**Cause:** Backend doesn't allow requests from frontend domain.

**Solution:**
- Add `FRONTEND_URL` environment variable to backend
- Value should be your frontend URL: `https://edupremium.onrender.com`

### Frontend can't connect to backend

**Cause:** `VITE_API_URL` not set or incorrect.

**Solution:**
- Go to frontend service → Environment
- Verify `VITE_API_URL=https://edupremium-api.onrender.com`
- Redeploy frontend

---

## 💰 Cost

Both services on **Free tier**:
- **Cost:** $0/month
- **Limitation:** Services sleep after 15 minutes of inactivity
- **Wake time:** 30-60 seconds on first request

To keep services always-on:
- Upgrade to **Starter** ($7/month per service = $14/month total)

---

**Last Updated:** April 25, 2026
