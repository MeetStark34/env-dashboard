# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press enter or type custom name
   - Directory? `./` (press enter)
   - Override settings? **N**

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration (Recommended for Continuous Deployment)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Auto-deployments**
   - Every push to `main` branch will auto-deploy to production
   - Pull requests will create preview deployments

### Method 3: Vercel Dashboard (Manual Upload)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Drag and drop the `dist` folder
   - Or use Vercel CLI: `vercel --prod`

## ⚙️ Configuration

The project includes `vercel.json` with optimal settings:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing configured
- Asset caching enabled

## 🔐 Environment Variables (Optional)

If using real APIs, add these in Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add:
   - `VITE_AIR_QUALITY_API_KEY`
   - `VITE_WEATHER_API_KEY`
   - `VITE_TIME_API_KEY`

## 📝 Build Settings

Vercel will auto-detect these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18.x (auto) |

## 🔍 Verify Deployment

After deployment:
- ✅ Check the live URL
- ✅ Test location dropdowns
- ✅ Verify maps load correctly
- ✅ Ensure data cards update on location change
- ✅ Test responsive design on mobile

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing issues
- Ensure `vercel.json` has the rewrites configuration
- Check that `dist` folder is generated correctly

### Performance
- Vercel automatically optimizes assets
- Uses Edge Network for fast global delivery
- Includes automatic compression

## 📊 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS as instructed
4. SSL certificate is auto-generated

## 🔄 Update Deployment

**Via Git:**
```bash
git add .
git commit -m "Update message"
git push
```

**Via CLI:**
```bash
vercel --prod
```

## 📈 Analytics & Monitoring

Enable in Vercel Dashboard:
- Analytics: Track page views and performance
- Logs: View build and function logs
- Insights: Monitor Core Web Vitals

## 🎉 Success!

Your dashboard should now be live at:
- Production: `https://your-project.vercel.app`
- Or your custom domain

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)
