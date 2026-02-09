# Image Assets Directory

This directory contains all images used in the HMGenX website.

## Directory Structure

```
images/
├── team/          # Team member photos (5 images)
├── portfolio/     # Portfolio project screenshots (6+ images)
├── logo.svg       # Company logo
└── README.md      # This file
```

## Required Images

### Team Photos (`team/`)
Upload 5 team member photos with the following names:

- `hariswar.jpg` - Hariswar (Founder) - 400x400px
- `maneesha.jpg` - Maneesha (Co-Founder) - 400x400px
- `rayyan.jpg` - Syed Rayyan Azeem (CEO) - 400x400px
- `manasa.jpg` - Manasa Reddy (CMO) - 400x400px
- `david.jpg` - David Raju (Game Developer) - 400x400px

**Requirements:**
- Size: 400x400px (square)
- Format: JPG or WebP
- File size: < 200KB (optimized)
- Background: Professional, neutral colors preferred

### Portfolio Screenshots (`portfolio/`)
Currently using placeholder images from Unsplash. Replace with actual project screenshots:

**Requirements:**
- Size: 800x600px minimum
- Format: JPG or WebP
- File size: < 500KB per image
- Quality: High-quality screenshots of actual projects

### Logo (`logo.svg`)
Company logo with transparent background.

**Requirements:**
- Format: SVG (preferred) or PNG
- Size: Vector (SVG) or 512x512px (PNG)
- Background: Transparent
- Colors: Match brand colors (primary blue gradient)

## Image Optimization

Before uploading images:

1. **Resize** to required dimensions
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)
3. **Convert** to WebP for better compression (optional)
4. **Test** in both light and dark modes

## Current Status

- ✅ Portfolio images: Using Unsplash placeholders
- ❌ Team photos: Placeholder images needed
- ❌ Logo: Needs to be added

## How to Add Images

1. **Place images** in the appropriate subdirectory
2. **Name files** exactly as specified above
3. **Verify** images display correctly by running `npm run dev`
4. **Optimize** images before deploying to production

## Fallback Images

The website uses Unsplash API for portfolio placeholders. These will automatically be replaced when you add actual images to the `portfolio/` directory.

For team photos, add a placeholder avatar generator or use professional headshots.

## Notes

- All images are automatically optimized by Next.js `Image` component
- Images are lazy-loaded except for hero section
- Dark mode compatibility is handled automatically
- Ensure images are properly licensed for commercial use

---

For questions about images, contact the HMGenX team.
