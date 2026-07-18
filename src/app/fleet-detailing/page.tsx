import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Fleet Detailing Services - Mobile Bay Area Business Fleets",
  description: "Mobile fleet detailing for Bay Area businesses. Volume pricing, scheduled maintenance, and priority booking for company vehicles. Get a custom quote.",
  alternates: {
    canonical: `${siteConfig.url}/fleet-detailing`,
  },
  openGraph: {
    title: "Fleet Detailing Services - Mobile Bay Area Business Fleets",
    description: "Mobile fleet detailing for Bay Area businesses. Volume pricing, scheduled maintenance, and priority booking for company vehicles.",
    url: `${siteConfig.url}/fleet-detailing`,
  },
};

const fleetFAQs = [
  {
    question: "How does fleet detailing pricing work?",
    answer: "Fleet detailing is quoted per fleet based on vehicle count, vehicle type, and how often you want service. Volume discounts apply as your fleet size grows. Contact us for a custom quote."
  },
  {
    question: "Do you come to our business location?",
    answer: "Yes. We service fleets at your office, lot, or depot anywhere in San Jose, Santa Clara, and the greater Bay Area, so vehicles stay on-site during service."
  },
  {
    question: "Can you set up a recurring detailing schedule?",
    answer: "Yes. Most fleet clients set up weekly, biweekly, or monthly maintenance programs so vehicles stay presentable without anyone having to remember to book."
  },
  {
    question: "What types of fleets do you service?",
    answer: "We work with delivery vans, sales team vehicles, rideshare fleets, and other company cars. Let us know your fleet size and vehicle mix and we'll put together a program."
  }
];

function FleetServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fleet Detailing Services",
    description: "Mobile fleet detailing programs for Bay Area businesses, with volume pricing and scheduled maintenance for company vehicles.",
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

export default function FleetDetailingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Fleet Detailing Services", url: `${siteConfig.url}/fleet-detailing` },
  ];

  const service = services.find((s) => s.id === "fleet-management")!;

  const benefits = [
    { title: "Volume pricing", description: "Per-vehicle cost drops as your fleet size grows." },
    { title: "Scheduled maintenance", description: "Set a recurring cadence and we handle the rest." },
    { title: "On-site service", description: "We come to your lot or depot, no vehicles taken off the road." },
    { title: "Dedicated account manager", description: "One point of contact for scheduling, billing, and reporting." },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={fleetFAQs} />
      <FleetServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/professional-auto-wash-service.webp"
            alt="Mobile fleet detailing service for Bay Area businesses"
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
              <li className="text-white font-medium">Fleet Detailing</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Fleet Detailing Services
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Keep your company vehicles looking professional with a mobile detailing program built around your fleet, on-site across the Bay Area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get a Fleet Quote
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
              <div className="mt-8">
                <span className="text-2xl font-bold text-blue-600">{service.priceLabel}</span>
                <p className="mt-2 text-sm text-gray-500">
                  Priced by vehicle count, vehicle type, and service frequency. Volume discounts apply.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/professional-auto-wash-service.webp"
                alt="Fleet of business vehicles after mobile detailing"
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
            <h2 className="text-3xl font-bold text-gray-900">Why businesses choose us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Fleet detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {fleetFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
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
