#!/bin/bash

echo "🚀 EduPremium Deployment Script"
echo "================================"
echo ""

# Exit on error
set -e

# Step 1: Install root dependencies
echo "1️⃣ Installing root dependencies..."
npm install --production=false
echo "✅ Root dependencies installed"
echo ""

# Step 2: Install backend dependencies
echo "2️⃣ Installing backend dependencies..."
cd backend
npm install --production=false
cd ..
echo "✅ Backend dependencies installed"
echo ""

# Step 3: Install frontend dependencies
echo "3️⃣ Installing frontend dependencies..."
cd frontend
npm install --production=false
echo "✅ Frontend dependencies installed"
echo ""

# Step 4: Build frontend
echo "4️⃣ Building frontend..."
npm run build
echo "✅ Frontend built"
echo ""

# Step 5: Verify build
echo "5️⃣ Verifying build..."
if [ -f "dist/index.html" ]; then
    echo "✅ index.html found in dist/"
    echo "📦 Contents of dist/:"
    ls -la dist/
else
    echo "❌ ERROR: index.html not found in dist/"
    exit 1
fi

cd ..

echo ""
echo "🎉 Build completed successfully!"
echo "================================"
