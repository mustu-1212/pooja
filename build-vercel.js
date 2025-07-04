#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for Vercel deployment...');

// Run Vite build for frontend
try {
  execSync('vite build', { stdio: 'inherit' });
  console.log('✅ Frontend build completed');
} catch (error) {
  console.error('❌ Frontend build failed:', error.message);
  process.exit(1);
}

// Copy the built files to ensure proper structure
const distDir = './dist/public';
if (fs.existsSync(distDir)) {
  console.log('✅ Build output ready for Vercel deployment');
} else {
  console.error('❌ Build output directory not found');
  process.exit(1);
}