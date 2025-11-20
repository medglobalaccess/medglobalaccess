# Quick Start - Deploy to Vercel (No Local Setup Needed)

## ✅ Yes! You can skip local development and deploy directly

If you don't want to set up local development, you can:
1. Push your code to GitHub
2. Vercel will auto-deploy
3. Test on the live deployed site

## 🚀 Simple Deployment Workflow

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Add contact form with file uploads"
git push origin main
```

(Replace `main` with your branch name if different)

### Step 2: Connect to Vercel (First Time Only)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure it

### Step 3: Add Environment Variables in Vercel

**Before the first deployment completes:**

1. In Vercel project settings, go to **Settings** → **Environment Variables**
2. Add these three variables:

   | Variable Name | Value |
   |--------------|-------|
   | `SENDGRID_API_KEY` | Your SendGrid API key (starts with `SG.`) |
   | `EMAIL_TO` | Email to receive submissions (e.g., `contact@yourdomain.com`) |
   | `EMAIL_FROM` | Verified SendGrid sender (e.g., `noreply@yourdomain.com`) |

3. Select all environments: **Production**, **Preview**, **Development**
4. Click **Save**

### Step 4: Set Up SendGrid (If Not Done Yet)

1. **Create SendGrid Account**: [sendgrid.com](https://sendgrid.com)
2. **Create API Key**: Settings → API Keys → Create API Key
3. **Verify Sender**:
   - Settings → Sender Authentication → Verify a Single Sender
   - Fill the form and verify via email
   - Use this email as `EMAIL_FROM`

### Step 5: Wait for Deployment

- Vercel will automatically deploy when you push to GitHub
- Watch the deployment in Vercel dashboard
- Deployment usually takes 1-2 minutes

### Step 6: Test on Live Site

1. Visit your deployed site (URL shown in Vercel dashboard)
2. Navigate to the contact form
3. Fill out the form
4. Upload files (optional)
5. Submit
6. Check your `EMAIL_TO` inbox!

## 🔄 Making Changes

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your change description"
   git push
   ```
3. Vercel automatically redeploys
4. Test on the new deployment

## ⚠️ Important Notes

- **Environment variables must be set in Vercel** before the form will work
- **SendGrid sender must be verified** before emails can be sent
- **First deployment** might fail if env vars aren't set - just add them and redeploy
- **Check Vercel function logs** if something doesn't work:
  - Vercel Dashboard → Your Project → Functions → `api/sendForm` → Logs

## 🐛 Troubleshooting

### Form shows error after deployment

1. **Check environment variables are set** in Vercel dashboard
2. **Redeploy** after adding variables:
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

### Emails not sending

1. **Verify SendGrid sender** is verified
2. **Check API key** is correct in Vercel
3. **Check Vercel function logs** for errors:
   - Vercel Dashboard → Functions → `api/sendForm` → Logs

### 404 on `/api/sendForm`

- This only happens locally with `npm run dev`
- On Vercel deployment, API routes work automatically
- If you see 404 on deployed site, check function logs

## 📊 Viewing Logs

To debug issues:

1. Go to Vercel Dashboard
2. Select your project
3. Click **Functions** tab
4. Click on `api/sendForm`
5. View real-time logs

## ✅ That's It!

You don't need to set up local development. Just:
- Push to GitHub
- Set environment variables in Vercel
- Test on the live site

Much simpler! 🎉

