# Deployment Guide

## Quick Start

Your HMGenX website is ready to deploy! Follow these simple steps:

### 1. Test Locally

```bash
cd hmgenx-site
npm run dev
```

Visit http://localhost:3000 to see your site in action.

### 2. Deploy to Vercel (Recommended - FREE)

Vercel offers the best experience for Next.js applications with zero configuration.

#### Steps:

1. **Create Vercel Account**
   - Go to [https://vercel.com/signup](https://vercel.com/signup)
   - Sign up with GitHub (recommended)

2. **Push to GitHub**
   ```bash
   cd hmgenx-site
   git init
   git add .
   git commit -m "Initial commit: HMGenX premium website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

3. **Import to Vercel**
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

4. **Done!** Your site will be live at `https://your-project.vercel.app`

### 3. Custom Domain (Optional)

#### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `hmgenx.com`)
3. Update DNS records as instructed
4. SSL certificate automatically provisioned

## Alternative Deployment Options

### Deploy to Netlify

1. **Create Netlify Account**
   - Sign up at [https://www.netlify.com](https://www.netlify.com)

2. **Deploy**
   ```bash
   npm run build
   ```
   - Drag and drop the `.next` folder to Netlify
   - Or connect GitHub repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Your Own Server

```bash
# Build the project
npm run build

# Start production server
npm run start
```

Server will run on port 3000. Use Nginx or Apache as reverse proxy:

**Nginx config:**
```nginx
server {
    listen 80;
    server_name hmgenx.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables (If Needed)

Create `.env.local` file:

```env
# Add if you implement backend for contact form
# RESEND_API_KEY=your_api_key_here
# CONTACT_EMAIL=hmgenx@gmail.com
```

## Performance Checklist

Before deploying, ensure:

- [ ] Images are optimized (< 200KB for photos)
- [ ] All team photos added to `public/images/team/`
- [ ] Logo added to `public/images/`
- [ ] Social media links updated in `lib/constants.ts`
- [ ] Contact information verified
- [ ] Dark mode tested
- [ ] Mobile responsiveness checked
- [ ] Forms validated

## Post-Deployment

### 1. Add Google Analytics (Optional)

1. Get tracking ID from Google Analytics
2. Create `app/GoogleAnalytics.tsx`:
```tsx
import Script from 'next/script';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
```

3. Add to `app/layout.tsx`

### 2. Setup Contact Form Backend

To make the contact form functional:

1. Create API route: `app/api/contact/route.ts`
2. Use email service (Resend recommended):

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await resend.emails.send({
      from: 'website@hmgenx.com',
      to: 'hmgenx@gmail.com',
      subject: `New Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

3. Update form submission in `ContactSection.tsx`

### 3. Monitor Performance

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Vercel Analytics (built-in)

Target scores:
- Performance: > 90
- Accessibility: > 90
- SEO: > 90

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `public/images/` directory
- Check file names match data files
- Verify image formats (JPG, PNG, WebP, SVG)

### Dark Mode Issues

- Check ThemeProvider wraps entire app
- Verify Tailwind `darkMode: 'class'` in config
- Test with browser DevTools

## Support

For deployment issues:
- Email: hmgenx@gmail.com
- Phone: +91 8328471219

## Next Steps

1. Add actual team photos
2. Replace portfolio placeholder images
3. Add company logo
4. Setup custom domain
5. Enable analytics
6. Implement contact form backend
7. Add blog section (optional)
8. Setup CI/CD pipeline (optional)

---

**Congratulations! Your premium HMGenX website is ready to go live! 🚀**
