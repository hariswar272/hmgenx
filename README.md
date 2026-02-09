# HMGenX - Premium Modern Website

A premium, professional website built with Next.js 15, TypeScript, and Tailwind CSS featuring dark mode, advanced animations, and modern design.

## Features

- ✨ **Dark Mode Toggle** - Seamless theme switching with system preference detection
- 🎬 **Advanced Scroll Animations** - Parallax effects, stagger animations, scroll-triggered reveals
- 💬 **WhatsApp Integration** - Floating chat button for instant messaging
- ⏳ **Loading Animations** - Branded page loader with "HMGenX Pvt.Ltd"
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Performance Optimized** - Fast loading with Next.js image optimization
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎨 **Premium Design** - Glassmorphism, gradients, and smooth micro-interactions

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd hmgenx-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Project Structure

```
hmgenx-site/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections (Hero, About, etc.)
│   ├── ui/                  # Reusable UI components
│   └── features/            # Feature components (WhatsApp, PageLoader)
├── lib/
│   ├── data/                # Data files for content
│   ├── utils.ts             # Utility functions
│   ├── constants.ts         # Site-wide constants
│   └── validations.ts       # Zod schemas
├── providers/               # React context providers
├── types/                   # TypeScript type definitions
└── public/
    └── images/              # Static images
```

## Customization

### Updating Content

All content is stored in `lib/data/` directory:

- **Team Members:** `lib/data/team.ts`
- **Portfolio Projects:** `lib/data/portfolio.ts`
- **Services:** `lib/data/services.ts`
- **Pricing Plans:** `lib/data/pricing.ts`
- **FAQ Items:** `lib/data/faq.ts`
- **Technologies:** `lib/data/technologies.ts`
- **Why Choose Items:** `lib/data/whychoose.ts`

### Site Configuration

Update site-wide settings in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'HMGenX',
  fullName: 'HMGenX Pvt.Ltd',
  description: 'Your All-in-One Digital Solutions Partner',
  email: 'hmgenx@gmail.com',
  phone: '+91 8328471219',
  // ... more settings
};
```

### Colors & Theme

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#3b82f6',  // Change primary color
    // ... other shades
  },
  // ... more colors
}
```

### Adding Images

1. Place images in `public/images/` directory:
   - Team photos: `public/images/team/`
   - Portfolio: `public/images/portfolio/`
   - Logo: `public/images/logo.svg`

2. Update image paths in data files

## Image Requirements

- **Logo:** SVG or PNG with transparent background
- **Team Photos:** 400x400px, optimized for web (JPG/WebP)
- **Portfolio Screenshots:** 800x600px minimum
- **Hero Background:** 1920x1080px (optional)

## Sections Overview

1. **Hero** - Landing section with gradient text and CTAs
2. **About** - Company information and mission
3. **Why Choose** - 5 value propositions
4. **Technology Stack** - Tech badges showcase
5. **Services** - 4 main service categories
6. **Portfolio** - Project showcase grid
7. **Team** - Team members with stats
8. **Pricing** - 6 pricing plans
9. **FAQ** - Accordion with common questions
10. **OMR System** - Special OMR product section
11. **Contact** - Contact form and info

## Dark Mode

Dark mode is implemented using `next-themes`:

- Automatically detects system preference
- Manual toggle in navbar
- Persists user choice in localStorage
- Smooth transitions between themes

## Performance Optimization

- Next.js automatic code splitting
- Image optimization with `next/image`
- Lazy loading for below-the-fold content
- Framer Motion animations optimized for performance
- Tailwind CSS purges unused styles

## SEO

- Semantic HTML structure
- Meta tags in `app/layout.tsx`
- Open Graph tags for social sharing
- Responsive images with proper alt text
- Clean URLs with smooth scrolling

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm run start
```

3. Deploy `./` folder to your hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## Contact Form

The contact form includes:
- Client-side validation with Zod
- Error messages for invalid inputs
- Success/loading states
- No backend (ready for integration)

To add backend:
1. Create API route in `app/api/contact/route.ts`
2. Integrate email service (Resend, SendGrid, etc.)
3. Update form submission handler

## Troubleshooting

### Build Errors

If you encounter build errors:
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Type Errors

Ensure TypeScript version matches:
```bash
npm install typescript@latest
```

### Dark Mode Not Working

Check if ThemeProvider is properly wrapped in layout:
```tsx
<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

## License

This project is proprietary and confidential.

© 2024 HMGenX Pvt.Ltd. All rights reserved.

---

**Built with ❤️ by HMGenX Team**

For questions or support, contact us at hmgenx@gmail.com or call +91 8328471219
