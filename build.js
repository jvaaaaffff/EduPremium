import { execSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

console.log('🔨 Starting build process...\n');

function runCommand(command, cwd = process.cwd()) {
  console.log(`📍 Running: ${command}`);
  console.log(`📁 In directory: ${cwd}\n`);
  try {
    execSync(command, { 
      cwd, 
      stdio: 'inherit',
      env: process.env
    });
    console.log('✅ Command completed\n');
    return true;
  } catch (error) {
    console.error(`❌ Command failed: ${error.message}\n`);
    return false;
  }
}

// Step 1: Install root dependencies
console.log('1️⃣ Installing root dependencies...');
if (!runCommand('npm install')) {
  process.exit(1);
}

// Step 2: Install backend dependencies
console.log('2️⃣ Installing backend dependencies...');
if (!runCommand('npm install', 'backend')) {
  process.exit(1);
}

// Step 3: Install frontend dependencies
console.log('3️⃣ Installing frontend dependencies...');
if (!runCommand('npm install', 'frontend')) {
  process.exit(1);
}

// Step 4: Build frontend
console.log('4️⃣ Building frontend...');
if (!runCommand('npm run build', 'frontend')) {
  process.exit(1);
}

// Step 5: Verify build
console.log('5️⃣ Verifying build...');
const distPath = join(process.cwd(), 'frontend', 'dist');
if (existsSync(distPath)) {
  console.log(`✅ Frontend dist folder exists at: ${distPath}`);
  const files = readdirSync(distPath);
  console.log(`📦 Files in dist: ${files.join(', ')}`);
  
  const indexPath = join(distPath, 'index.html');
  if (existsSync(indexPath)) {
    console.log('✅ index.html found!');
  } else {
    console.error('❌ index.html NOT found!');
    process.exit(1);
  }
} else {
  console.error(`❌ Frontend dist folder NOT found at: ${distPath}`);
  process.exit(1);
}

// Step 6: Copy dist to root for Static Site deployment
console.log('6️⃣ Copying dist to root...');
const rootDistPath = join(process.cwd(), 'dist');
try {
  // Remove existing dist if it exists
  if (existsSync(rootDistPath)) {
    const { rmSync } = await import('fs');
    rmSync(rootDistPath, { recursive: true, force: true });
  }
  
  // Copy frontend/dist to root/dist
  const { cpSync } = await import('fs');
  cpSync(distPath, rootDistPath, { recursive: true });
  console.log(`✅ Dist copied to: ${rootDistPath}`);
  
  // Verify
  if (existsSync(join(rootDistPath, 'index.html'))) {
    console.log('✅ index.html found in root dist!');
  } else {
    console.error('❌ index.html NOT found in root dist!');
    process.exit(1);
  }
} catch (err) {
  console.error('❌ Error copying dist:', err);
  process.exit(1);
}

console.log('\n🎉 Build completed successfully!');
