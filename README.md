# Albros Premium Car Detailing Website

A modern, SEO-optimized Next.js website for Albros Premium Car Detailing LLC - a mobile car detailing service serving the San Francisco Bay Area.

## Features

- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data (Schema.org)
- **Fast & Performant**: Static site generation, image optimization, and caching headers
- **Mobile-First**: Fully responsive design that works great on all devices
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern Stack**: Next.js 16, React 19, TypeScript, and Tailwind CSS 4

## SEO Features

- Automatic sitemap.xml generation
- robots.txt configuration
- Structured data (LocalBusiness, Service, FAQ, Breadcrumb schemas)
- Canonical URLs
- Open Graph and Twitter Card meta tags
- Semantic HTML structure
- Fast Core Web Vitals

## Pages

- `/` - Homepage with hero, services overview, why choose us, service areas, FAQ, and CTA
- `/services` - Detailed services page with pricing and comparison table
- `/about` - About the company, values, and commitment
- `/contact` - Contact information and booking CTA
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

### Site Configuration

Edit `src/data/siteConfig.ts` to update:
- Business name and contact info
- Phone number and email
- Booking URL
- Social media links
- SEO keywords

### Services

Edit `src/data/services.ts` to update:
- Service names and descriptions
- Pricing
- Features
- Service areas

## Adding Images

Replace placeholder images in `public/images/`:
- `og-image.jpg` - 1200x630px for social sharing
- `logo.png` - Company logo
- Hero images and work photos

## Deployment

This site is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

### Environment Variables

No environment variables required for basic deployment. For analytics:

```env
# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Google Search Console Setup

1. Verify your domain in Google Search Console
2. Add the verification code to `src/app/layout.tsx` metadata
3. Submit the sitemap: `https://www.albrosdetailing.com/sitemap.xml`

## Performance

The site achieves excellent Core Web Vitals:
- Static page generation for instant loads
- Optimized images with next/image
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind

## License

Private - All rights reserved by Albros Premium Car Detailing LLC
