import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LocalBusinessSchema, WebsiteSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Mobile Car Detailing San Jose | Premium Auto Detail | Albros`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Premium mobile car detailing in San Jose & Bay Area. We come to you with professional-grade equipment. 5-star rated, fully insured. Book online today!",
  keywords: [
    "mobile car detailing San Jose",
    "car detailing San Jose",
    "mobile auto detailing Bay Area",
    "premium car detailing",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Premium Mobile Car Detailing`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Mobile Car Detailing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Mobile Car Detailing San Jose`,
    description: siteConfig.description,
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6R2KVMD');`,
          }}
        />
        <link rel="icon" href="/cropped-albros-car-detailing-200x108 - Edited.png" type="image/png" />
        <link rel="apple-touch-icon" href="/cropped-albros-car-detailing-200x108 - Edited.png" />
        <link rel="manifest" href="/manifest.json" />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6R2KVMD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
