import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Premium Car Wash - Mobile Bay Area Service from $80",
  description: "Mobile premium car wash across the Bay Area from $80. Hand wash, spot-free rinse, tire and wheel cleaning at your home or office. Book online.",
  alternates: {
    canonical: `${siteConfig.url}/premium-car-wash`,
  },
  openGraph: {
    title: "Premium Car Wash - Mobile Bay Area Service from $80",
    description: "Mobile premium car wash across the Bay Area from $80. Hand wash, spot-free rinse, tire and wheel cleaning at your home or office.",
    url: `${siteConfig.url}/premium-car-wash`,
  },
};

const washFAQs = [
  {
    question: "What's included in a premium car wash?",
    answer: "Our premium car wash includes a gentle two-bucket hand wash, spot-free rinse with purified water, hand dry with microfiber towels, tire and wheel cleaning, and interior and exterior window cleaning. It takes about an hour."
  },
  {
    question: "Is there a premium car wash near me?",
    answer: "Yes. We're a fully mobile service based in Santa Clara, so we bring the premium car wash to you anywhere in San Jose, Santa Clara, Sunnyvale, Mountain View, Palo Alto, and the wider Bay Area."
  },
  {
    question: "How is this different from an automatic car wash?",
    answer: "Automatic car washes use rotating brushes that can cause micro-scratches over time. Our premium wash is entirely hand-applied with a two-bucket method and premium microfiber towels, which is gentler on your paint."
  },
  {
    question: "How often should I book a premium wash?",
    answer: "We recommend a premium wash every 2 to 4 weeks between full details to remove dust, pollen, and road film before it bonds to your paint."
  }
];

function PremiumWashServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Premium Car Wash",
    description: "Mobile premium car wash service across the San Francisco Bay Area, including hand wash, spot-free rinse, and tire and wheel cleaning.",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    offers: {
      "@type": "Offer",
      price: "80",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PremiumCarWashPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Premium Car Wash", url: `${siteConfig.url}/premium-car-wash` },
  ];

  const service = services.find((s) => s.id === "premium-wash")!;

  const processSteps = [
    { step: 1, title: "Pre-rinse", description: "A thorough rinse loosens dirt and debris before any contact with the paint." },
    { step: 2, title: "Hand wash", description: "Two-bucket hand wash with pH-balanced soap lifts dirt without scratching." },
    { step: 3, title: "Spot-free rinse", description: "Purified water rinse leaves no mineral spots as it dries." },
    { step: 4, title: "Dry and detail", description: "Premium microfiber towels for a streak-free dry, plus tire, wheel, and window cleaning." },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={washFAQs} />
      <PremiumWashServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/professional-hand-car-wash.webp"
            alt="Premium mobile car wash service"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Premium Car Wash</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Car Wash
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A gentle, thorough hand wash that goes well beyond a typical car wash tunnel. Starting at $80, mobile across the entire Bay Area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Premium Car Wash - $80
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's included
              </h2>
              <p className="text-gray-600 mb-8">
                Our entry-level wash is built for drivers who want their car looking sharp on a regular schedule, without paying for services they don't need yet.
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-blue-600">{service.priceLabel}</span>
                <span className="text-gray-500">{service.duration}</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/professional-hand-car-wash.webp"
                alt="Hand wash technique used in the premium car wash service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need more than a wash?
          </h2>
          <p className="text-lg text-gray-600">
            If your car needs deeper attention, step up to a{" "}
            <Link href="/deluxe-car-wash" className="text-blue-600 hover:text-blue-700">Deluxe Car Wash</Link>,{" "}
            <Link href="/interior-car-detailing" className="text-blue-600 hover:text-blue-700">interior detailing</Link>, or{" "}
            <Link href="/full-car-detailing" className="text-blue-600 hover:text-blue-700">Full Car Detailing</Link>{" "}
            for a complete transformation. See <Link href="/services" className="text-blue-600 hover:text-blue-700">every package and price</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Premium car wash FAQ</h2>
          </div>
          <div className="space-y-6">
            {washFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
