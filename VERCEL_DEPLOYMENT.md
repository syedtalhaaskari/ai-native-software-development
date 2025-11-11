# 🚀 Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? ai-native-software-development
# - In which directory is your code located? ./
```

### Option 2: Deploy via GitHub Integration

1. **Push to GitHub** (if not already pushed)
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository: `syedtalhaaskari/ai-native-software-development`
   - Vercel will auto-detect the configuration from `vercel.json`

3. **Configure (if needed)**
   - Framework Preset: **Other** (or Docusaurus if available)
   - Root Directory: `./` (leave as root)
   - Build Command: `cd book-source && pnpm install && pnpm build`
   - Output Directory: `book-source/build`
   - Install Command: `cd book-source && pnpm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-5 minutes)

---

## Configuration Details

### Project Structure

```
ai-native-software-development/
├── book-source/              ← Docusaurus site
│   ├── package.json
│   ├── docusaurus.config.ts
│   └── build/               ← Output directory
├── vercel.json              ← Deployment config
└── README.md
```

### Build Settings

The `vercel.json` file configures:

```json
{
  "buildCommand": "cd book-source && pnpm install && pnpm build",
  "outputDirectory": "book-source/build",
  "installCommand": "cd book-source && pnpm install",
  "framework": "docusaurus"
}
```

---

## Environment Variables

If you have any environment variables (like GA4_MEASUREMENT_ID), add them in Vercel:

1. Go to your project settings in Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add variables:
   - `GA4_MEASUREMENT_ID` (if using Google Analytics)
   - Any other custom variables

**Note:** User Gemini API keys are stored in browser localStorage, not on the server.

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at your Vercel URL
- [ ] Navigation works correctly
- [ ] All docs pages accessible
- [ ] Search functionality works
- [ ] Dark mode toggle works
- [ ] Settings button (⚙️) appears on `/docs` pages
- [ ] Can save Gemini API key in settings
- [ ] Heading summaries work when clicking headings
- [ ] Mobile responsive design works
- [ ] All assets (images, fonts) load correctly

---

## Custom Domain Setup

### Add Custom Domain

1. Go to your project in Vercel
2. Navigate to **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain (e.g., `ai-native.panaversity.org`)
5. Follow DNS configuration instructions

### Update Docusaurus Config

Update `book-source/docusaurus.config.ts`:

```typescript
url: "https://your-custom-domain.com",
baseUrl: "/",
```

Commit and push changes. Vercel will auto-redeploy.

---

## Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically detects and deploys
```

### Branch Deployments

- **main** branch → Production deployment
- **Other branches** → Preview deployments
- Every pull request gets a unique preview URL

---

## Troubleshooting

### Build Fails

**Error: "Command failed"**
```bash
# Test build locally first
cd book-source
pnpm install
pnpm build
```

If local build works but Vercel fails:
- Check Vercel build logs
- Ensure Node.js version matches (20+)
- Verify all dependencies are in `package.json`

**Error: "Module not found"**
- Ensure all imports use correct paths
- Check TypeScript paths in `tsconfig.json`

### Site Loads but Features Don't Work

**Settings button not appearing:**
- Check browser console for errors
- Verify `Root.tsx` includes `ApiSettings` and `HeadingSummaryManager`
- Clear browser cache

**Heading summaries not working:**
- Verify user has configured Gemini API key
- Check browser console for CORS errors
- Test with a different heading

**404 on some pages:**
- Check `docusaurus.config.ts` for correct `baseUrl`
- Verify `trailingSlash: false` in both configs
- Clear Vercel cache and redeploy

---

## Performance Optimization

### Enable Edge Caching

Vercel automatically caches static assets. For optimal performance:

1. **Prerender pages** (already done by Docusaurus)
2. **Optimize images** - Use WebP format where possible
3. **Minimize bundle size** - Remove unused dependencies

### Monitor Performance

- Use Vercel Analytics (free tier available)
- Check Core Web Vitals in deployment dashboard
- Monitor build times and optimize if > 5 minutes

---

## Deployment Commands Reference

```bash
# Deploy to production
vercel --prod

# Deploy preview (staging)
vercel

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]

# Link local project to Vercel project
vercel link
```

---

## Cost Considerations

### Vercel Free Tier

- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Preview deployments
- ✅ Analytics (limited)

**For this project:**
- Static site: Minimal costs
- No serverless functions: No function invocations
- Estimated: **FREE** (well within free tier limits)

### Gemini API Costs

- User API keys: Not your cost
- Free tier: 1,500 requests/day per user
- Your Vercel deployment: **$0**

---

## Security Checklist

Before going live:

- [ ] No API keys committed to Git
- [ ] `.env.local` in `.gitignore`
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Content Security Policy reviewed
- [ ] No sensitive data in client-side code
- [ ] User API keys stored in localStorage (client-side only)

---

## Monitoring & Maintenance

### Set Up Monitoring

1. **Vercel Analytics**
   - Enable in project settings
   - Track page views, performance

2. **Error Tracking** (optional)
   - Integrate Sentry or similar
   - Monitor client-side errors

3. **Uptime Monitoring** (optional)
   - Use UptimeRobot or similar
   - Get alerts if site goes down

### Regular Maintenance

- **Weekly**: Check build status
- **Monthly**: Review analytics, update dependencies
- **Quarterly**: Performance audit, security review

---

## Rollback Strategy

If deployment breaks production:

```bash
# List recent deployments
vercel ls

# Promote previous deployment to production
vercel promote [previous-deployment-url]
```

Or via Vercel Dashboard:
1. Go to **Deployments**
2. Find working deployment
3. Click **⋯** → **Promote to Production**

---

## Support & Resources

### Vercel Documentation
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/docusaurus

### Docusaurus Deployment Guide
- https://docusaurus.io/docs/deployment#deploying-to-vercel

### Getting Help
- Vercel Support: https://vercel.com/support
- Vercel Community: https://github.com/vercel/vercel/discussions

---

## Success Criteria

Deployment is successful when:

✅ Build completes without errors  
✅ Site accessible at Vercel URL  
✅ All pages load correctly  
✅ Navigation works  
✅ AI summary feature works on `/docs` pages  
✅ Mobile responsive  
✅ Fast loading times (< 3s)  
✅ No console errors  
✅ HTTPS enabled  
✅ Custom domain configured (if applicable)  

---

**Ready to deploy? Run `vercel` in the project root!** 🚀

**Deployment complete?** Share your live URL! 🎉
