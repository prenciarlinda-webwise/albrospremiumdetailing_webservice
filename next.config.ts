import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // Cache static assets
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO - Only legitimate URL changes
  async redirects() {
    return [
      // Old /locations/[city] pattern -> new /mobile-detailing-[city]
      { source: "/locations/san-jose", destination: "/mobile-detailing-san-jose", statusCode: 301 },
      { source: "/locations/santa-clara", destination: "/mobile-detailing-santa-clara", statusCode: 301 },
      { source: "/locations/sunnyvale", destination: "/mobile-detailing-sunnyvale", statusCode: 301 },
      { source: "/locations/mountain-view", destination: "/mobile-detailing-mountain-view", statusCode: 301 },
      { source: "/locations/palo-alto", destination: "/mobile-detailing-palo-alto", statusCode: 301 },
      { source: "/locations/cupertino", destination: "/mobile-detailing-cupertino", statusCode: 301 },
      { source: "/locations/milpitas", destination: "/mobile-detailing-milpitas", statusCode: 301 },
      { source: "/locations/fremont", destination: "/mobile-detailing-fremont", statusCode: 301 },
      { source: "/locations/campbell", destination: "/mobile-detailing-campbell", statusCode: 301 },
      { source: "/locations/los-gatos", destination: "/mobile-detailing-los-gatos", statusCode: 301 },
      { source: "/locations/saratoga", destination: "/mobile-detailing-saratoga", statusCode: 301 },
      { source: "/locations/san-francisco", destination: "/mobile-detailing-san-francisco", statusCode: 301 },
      { source: "/locations/oakland", destination: "/mobile-detailing-oakland", statusCode: 301 },
      { source: "/locations/san-benito-county", destination: "/mobile-detailing-san-benito-county", statusCode: 301 },

      // Old legitimate blog URLs -> relevant pages
      { source: "/bring-back-the-shine-albros-premium-car-detailing", destination: "/services", statusCode: 301 },
      { source: "/car-detaili-cost-guide", destination: "/services", statusCode: 301 },
      { source: "/how-often-should-you-detail-your-car-guide", destination: "/blog/how-often-should-you-detail-your-car-california", statusCode: 301 },
      { source: "/leather-car-seats-cleaning-santa-clara", destination: "/services#interior-detail", statusCode: 301 },
      { source: "/car-odor-removal-eliminate-bad-smells", destination: "/services#interior-detail", statusCode: 301 },

      // Spam/hack URLs are handled by middleware returning 410 Gone
    ];
  },
};

export default nextConfig;
