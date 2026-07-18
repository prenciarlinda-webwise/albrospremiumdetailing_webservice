import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Biohazard Cleanup Service - Mobile Bay Area Car Sanitizing",
  description: "Discreet biohazard and vomit cleanup for vehicles across the Bay Area. Hospital-grade disinfection and odor removal. Call for a same-day quote.",
  alternates: {
    canonical: `${siteConfig.url}/biohazard-cleanup`,
  },
  openGraph: {
    title: "Biohazard Cleanup Service - Mobile Bay Area Car Sanitizing",
    description: "Discreet biohazard and vomit cleanup for vehicles across the Bay Area. Hospital-grade disinfection and odor removal.",
    url: `${siteConfig.url}/biohazard-cleanup`,
  },
};

const biohazardFAQs = [
  {
    question: "What does biohazard cleanup for a car cost?",
    answer: "Biohazard cleanup is quoted per job because scope varies with the substance, how long it sat, and how much of the interior is affected. Call us and we'll give you a same-day quote and typically get a technician out within hours."
  },
  {
    question: "Is biohazard cleanup near me available quickly?",
    answer: "Yes. We're mobile across the Bay Area and treat biohazard cleanup as a priority booking, since these situations usually need fast attention."
  },
  {
    question: "What substances do you clean up?",
    answer: "We handle vomit and other biological substances that pose health and odor risks, using hospital-grade disinfectants to sanitize and deodorize the affected area."
  },
  {
    question: "Will the odor come back after cleanup?",
    answer: "Our process includes odor neutralization and air quality restoration, not just surface cleaning, so smells are addressed at the source rather than masked."
  }
];

function BiohazardServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Biohazard Cleanup Service",
    description: "Mobile biohazard and vomit cleanup for vehicles across the San Francisco Bay Area, using hospital-grade disinfectants and odor neutralization.",
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

export default function BiohazardCleanupPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Biohazard Cleanup Service", url: `${siteConfig.url}/biohazard-cleanup` },
  ];

  const service = services.find((s) => s.id === "biohazard-cleanup")!;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={biohazardFAQs} />
      <BiohazardServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/car-detailing-service-fremont.webp"
            alt="Mobile biohazard cleanup service for vehicles"
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
              <li className="text-white font-medium">Biohazard Cleanup</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Biohazard Cleanup Service
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Discreet, hospital-grade cleanup for vomit and other biological substances in your vehicle. Mobile across the Bay Area, priority booking available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Request a Quote
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
                Biological substances pose real health risks if not handled properly. Our process sanitizes and deodorizes so your vehicle is safe and clean again.
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
              <div className="mt-8">
                <span className="text-2xl font-bold text-blue-600">{service.priceLabel}</span>
                <p className="mt-2 text-sm text-gray-500">
                  Priced per job based on the substance, how long it sat, and the affected area. We give you a firm number before starting.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/car-detailing-service-fremont.webp"
                alt="Vehicle interior sanitized after biohazard cleanup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need this handled fast?
          </h2>
          <p className="text-lg text-gray-600">
            Biohazard cleanup gets priority scheduling. Call {siteConfig.phone} and we'll confirm same-day availability, or see our{" "}
            <Link href="/services" className="text-blue-600 hover:text-blue-700">full list of services</Link> if you also need a regular detail afterward.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Biohazard cleanup FAQ</h2>
          </div>
          <div className="space-y-6">
            {biohazardFAQs.map((faq, index) => (
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
