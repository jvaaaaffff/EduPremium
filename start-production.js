import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting EduPremium Production Server...');
console.log('📁 Working directory:', process.cwd());
console.log('📍 Environment:', process.env.NODE_ENV);

// Start the backend server using tsx
const backendProcess = spawn('npx', ['tsx', 'backend/server.ts'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
});

backendProcess.on('error', (err) => {
  console.error('❌ Failed to start backend:', err);
  process.exit(1);
});

backendProcess.on('exit', (code) => {
  console.log(`Backend process exited with code ${code}`);
  process.exit(code);
});

// Handle termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  backendProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  backendProcess.kill('SIGINT');
});
