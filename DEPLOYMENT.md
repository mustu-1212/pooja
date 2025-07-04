# Vercel Deployment Guide for Pooja Markam Portfolio

## Quick Setup

Your portfolio is now ready for Vercel deployment! Here's how to deploy:

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pooja Markam Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pooja-markam-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the `vercel.json` configuration
   - Click "Deploy"

### Method 2: Direct Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the `dist/public` folder
   - Your site will be live instantly

## Project Configuration

The project includes:

✅ **vercel.json** - Vercel deployment configuration
✅ **build-vercel.js** - Custom build script for Vercel
✅ **Static site optimization** - All images and assets properly bundled
✅ **Contact form** - Uses mailto links (works without backend)
✅ **Responsive design** - Works on all devices
✅ **Theme switching** - Royal/Classic mode toggle
✅ **Portfolio gallery** - All 16 images with lightbox functionality

## Build Output

The build creates:
- `dist/public/index.html` - Main HTML file
- `dist/public/assets/` - All images, CSS, and JavaScript files
- Optimized and compressed for fast loading

## Domain Setup

After deployment, you can:
1. Use the free Vercel domain (e.g., `pooja-markam-portfolio.vercel.app`)
2. Add a custom domain in Vercel dashboard
3. Vercel provides automatic HTTPS and global CDN

## Contact Form

The contact form uses mailto links that open the user's email client with:
- Pre-filled recipient: 95poojamarkam@gmail.com
- Subject line with sender's name
- Message body with all form details

This works perfectly for static sites without requiring a backend.

## Performance Features

- ⚡ Fast loading with Vite optimization
- 📱 Mobile-responsive design
- 🎨 Smooth animations with Framer Motion
- 🖼️ Optimized image loading
- 🎯 SEO-friendly structure

Your portfolio is now production-ready for Vercel deployment!