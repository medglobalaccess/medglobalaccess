# Contact Form Backend Setup Guide

This guide will help you set up the contact form with file uploads using Vercel serverless functions and SendGrid.

## 📋 Prerequisites

1. A Vercel account (free tier works)
2. A SendGrid account (free tier includes 100 emails/day)
3. Your project deployed to Vercel

## 🔧 Step 1: Install Dependencies

The required packages have already been installed:
- `@sendgrid/mail` - For sending emails
- `busboy` - For parsing multipart/form-data
- `@vercel/node` - For Vercel serverless functions
- `@types/busboy` - TypeScript types for busboy

## 🔑 Step 2: Set Up SendGrid

### 2.1 Create a SendGrid Account

1. Go to [https://sendgrid.com](https://sendgrid.com)
2. Sign up for a free account (100 emails/day free)

### 2.2 Create an API Key

1. Log in to your SendGrid dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it (e.g., "Vercel Contact Form")
5. Select **Full Access** or **Restricted Access** with "Mail Send" permissions
6. Click **Create & View**
7. **Copy the API key immediately** (you won't see it again!)

### 2.3 Verify Sender Identity

**Option A: Single Sender Verification (Recommended for testing)**

1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in the form:
   - **From Email Address**: Your email (e.g., `noreply@yourdomain.com`)
   - **From Name**: Your name or company name
   - **Reply To**: Your email
   - **Company Address**: Your address
   - **City**: Your city
   - **State**: Your state
   - **Country**: Your country
   - **Zip Code**: Your zip code
4. Click **Create**
5. Check your email inbox for a verification email from SendGrid
6. Click the verification link in the email
7. Once verified, you can use this email as `EMAIL_FROM`

**Option B: Domain Authentication (Recommended for production)**

1. Go to **Settings** → **Sender Authentication**
2. Click **Authenticate Your Domain**
3. Select your DNS provider (or choose "Other" for manual setup)
4. Follow the instructions to add DNS records:
   - CNAME records for domain authentication
   - These records prove you own the domain
5. Once verified, you can use any email from your domain as `EMAIL_FROM` (e.g., `contact@yourdomain.com`)

## 🌍 Step 3: Configure Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

### Required Environment Variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `SENDGRID_API_KEY` | Your SendGrid API key from Step 2.2 | `SG.xxxxxxxxxxxxxxxxxxxxx` |
| `EMAIL_TO` | Email address to receive form submissions | `contact@yourdomain.com` |
| `EMAIL_FROM` | Verified sender email from Step 2.3 | `noreply@yourdomain.com` |

### How to Add:

1. Click **Add New**
2. Enter the variable name (e.g., `SENDGRID_API_KEY`)
3. Enter the value
4. Select environments:
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Development** (optional, for local testing)
5. Click **Save**
6. Repeat for all three variables

### Important Notes:

- **SENDGRID_API_KEY**: Must start with `SG.`
- **EMAIL_FROM**: Must be a verified sender in SendGrid (see Step 2.3)
- **EMAIL_TO**: Can be any valid email address
- After adding variables, **redeploy your application** for changes to take effect

## 🚀 Step 4: Deploy to Vercel

### If you haven't deployed yet:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project root
3. Follow the prompts to link your project

### After adding environment variables:

1. Go to your Vercel dashboard
2. Navigate to your project
3. Go to **Deployments**
4. Click the **⋯** menu on the latest deployment
5. Click **Redeploy**
6. Or push a new commit to trigger a redeploy

## 🧪 Step 5: Deploy to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add contact form with file uploads"
   git push
   ```

2. **Connect to Vercel** (if not already):
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite

3. **Add environment variables** (see Step 3 above)

4. **Wait for deployment** (1-2 minutes)

5. **Test on live site** - Visit your deployed URL and test the form!

See `QUICK_START.md` for the complete quick deployment guide.

## 🧪 Step 6: Test the Form

1. Visit your deployed site
2. Navigate to the contact form
3. Fill out the form with test data
4. Upload a test file (optional)
5. Submit the form
6. Check your `EMAIL_TO` inbox for the submission

## 📁 File Structure

```
your-project/
├── api/
│   └── sendForm.ts          # Serverless function
├── src/
│   └── pages/
│       └── Contact.tsx      # Contact form component
└── package.json
```

## 🔍 Troubleshooting

### Error: "Server configuration error"

- Check that all three environment variables are set in Vercel
- Make sure you've redeployed after adding variables
- Verify the variable names are exactly: `SENDGRID_API_KEY`, `EMAIL_TO`, `EMAIL_FROM`

### Error: "Unauthorized" or "Forbidden" from SendGrid

- Verify your `SENDGRID_API_KEY` is correct
- Check that the API key has "Mail Send" permissions
- Ensure `EMAIL_FROM` is a verified sender in SendGrid

### Files not attaching to email

- Check that files are under 10MB each
- Verify the file input name is `files` (multiple attribute)
- Check Vercel function logs for errors

### Form submission fails

- Open browser DevTools (F12) → Console tab
- Check for error messages
- Check Vercel function logs:
  1. Go to Vercel dashboard
  2. Select your project
  3. Go to **Functions** tab
  4. Click on `api/sendForm`
  5. View logs for errors

## 📊 Vercel Function Logs

To view logs:
1. Go to Vercel dashboard → Your project
2. Click **Functions** tab
3. Click on `api/sendForm`
4. View real-time logs

## 🔒 Security Notes

- Never commit API keys or environment variables to Git
- Use Vercel environment variables for all secrets
- SendGrid API keys should have minimal required permissions
- Consider adding rate limiting for production use

## 📝 API Endpoint

The form submits to: `/api/sendForm`

**Method**: POST  
**Content-Type**: multipart/form-data

**Form Fields**:
- `name` (required)
- `email` (required)
- `phone` (required)
- `message` (required)
- `country` (optional)
- `service` (optional)
- `travel_date` (optional)
- `files` (optional, multiple files supported)

**Response**:
```json
{
  "success": true
}
```

Or on error:
```json
{
  "success": false,
  "error": "Error message"
}
```

## ✅ Verification Checklist

- [ ] SendGrid account created
- [ ] SendGrid API key created and copied
- [ ] Sender email verified in SendGrid
- [ ] All three environment variables added to Vercel
- [ ] Application redeployed after adding variables
- [ ] Test form submission successful
- [ ] Email received with form data
- [ ] File attachments working (if tested)

## 🆘 Need Help?

- SendGrid Documentation: https://docs.sendgrid.com
- Vercel Documentation: https://vercel.com/docs
- Check Vercel function logs for detailed error messages

