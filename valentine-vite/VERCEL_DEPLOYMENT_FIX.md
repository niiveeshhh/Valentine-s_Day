# Vercel Deployment Fix Guide 🚀

## Problem
Your Vercel domain is not opening - likely due to incorrect build configuration or deployment settings.

## Solution Steps

### 1. ✅ Vercel Configuration Created
I've created `vercel.json` with the correct settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### 2. 🔧 Vercel Deployment Settings

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**:
   - Click "Add New" → "Project"
   - Import from GitHub: `niiveeshhh/Valentine-s_Day`
3. **Configure Build Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `valentine-vite` ← **IMPORTANT!**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to the vite project
cd valentine-vite

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new one
# - Confirm settings
# - Deploy!
```

### 3. 🎯 Important: Root Directory Setting

**CRITICAL**: Your Vercel project MUST use `valentine-vite` as the root directory because:
- The `package.json` is in `valentine-vite/`
- The Vite config is in `valentine-vite/`
- The source code is in `valentine-vite/src/`

If you don't set this, Vercel will fail to build!

### 4. 📁 File Structure Check
```
Valentine-s_Day/
├── valentine-vite/          ← Deploy THIS directory
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json         ← NEW! Config file
│   ├── src/
│   └── public/
├── valentine-nextjs/
└── ... (other files)
```

### 5. 🔍 Common Issues & Fixes

**Issue: "Build Failed"**
- Check that build runs locally: `cd valentine-vite && npm run build`
- Ensure all dependencies are in package.json
- Check build logs in Vercel dashboard

**Issue: "404 Not Found"**
- Verify Output Directory is set to `dist`
- Check that `dist` folder is generated after build

**Issue: "Module not found" errors**
- Check all imports use correct paths
- Ensure all files are committed to GitHub
- Verify `public/photos/` and `public/videos/` exist

**Issue: "Blank page"**
- Check browser console for errors
- Verify all images/videos are in the `public/` folder
- Check that routes are configured correctly

### 6. ✅ Verify Deployment

After deploying:
1. Visit your Vercel domain
2. Check all pages load correctly
3. Test the scroll on gifts page
4. Verify images and videos display
5. Test the puzzle page

### 7. 🔄 Redeploy After Changes

Every time you push to GitHub:
- Vercel auto-deploys if connected to GitHub
- Check deployment status in Vercel dashboard
- Wait 1-2 minutes for build to complete

## Quick Commands Reference

```bash
# Test build locally
cd valentine-vite
npm run build

# Test production build locally
npm run preview

# Deploy via CLI
vercel

# Production deployment
vercel --prod
```

## Need Help?
If deployment still fails:
1. Check Vercel build logs (in dashboard)
2. Share the error message
3. Verify GitHub repo is connected to Vercel
