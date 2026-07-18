import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Deluxe Car Wash - Mobile Bay Area Service from $165",
  description: "Mobile deluxe car wash across the Bay Area from $165. Full exterior hand wash plus interior vacuum and wipe-down. We come to you, book online.",
  alternates: {
    canonical: `${siteConfig.url}/deluxe-car-wash`,
  },
  openGraph: {
    title: "Deluxe Car Wash - Mobile Bay Area Service from $165",
    description: "Mobile deluxe car wash across the Bay Area from $165. Full exterior hand wash plus interior vacuum and wipe-down. We come to you.",
    url: `${siteConfig.url}/deluxe-car-wash`,
  },
};

const deluxeFAQs = [
  {
    question: "What makes the deluxe car wash different from the premium wash?",
    answer: "The Deluxe Car Wash includes everything in the Premium Car Wash plus an interior vacuum, dashboard and console wipe-down, door jamb cleaning, and air freshener application, so both the outside and cabin get attention in one visit."
  },
  {
    question: "Is deluxe car wash near me available same day?",
    answer: "Often, yes. We're headquartered in Santa Clara and cover the surrounding Bay Area daily, so same-day deluxe wash appointments are frequently available. Call or book online to check your neighborhood."
  },
  {
    question: "How long does a deluxe car wash take?",
    answer: "A deluxe car wash takes about 2 hours for a standard sedan or mid-size vehicle, slightly longer for larger vehicles or heavily soiled interiors."
  },
  {
    question: "Should I get a deluxe wash or a full interior detail?",
    answer: "Choose the deluxe wash for a light interior refresh alongside your exterior wash. If your interior needs deep cleaning, stain removal, or leather conditioning, book full interior detailing instead."
  }
];

function DeluxeWashServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deluxe Car Wash",
    description: "Mobile deluxe car wash service across the San Francisco Bay Area, combining a full exterior hand wash with a light interior refresh.",
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
      price: "165",
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

export default function DeluxeCarWashPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Deluxe Car Wash", url: `${siteConfig.url}/deluxe-car-wash` },
  ];

  const service = services.find((s) => s.id === "deluxe-wash")!;

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={deluxeFAQs} />
      <DeluxeWashServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/car-wash-service-california.webp"
            alt="Deluxe mobile car wash service"
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
              <li className="text-white font-medium">Deluxe Car Wash</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Our most booked starter package
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Deluxe Car Wash
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Exterior hand wash plus a light interior refresh, at your home or office for $165. The package most Bay Area customers start with.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Deluxe Car Wash - $165
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
                Everything in the Premium Car Wash, plus the extra steps that make the cabin feel as good as the paint looks.
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
                src="/images/car-wash-service-california.webp"
                alt="Deluxe car wash exterior and interior refresh"
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
            Ready for the next level?
          </h2>
          <p className="text-lg text-gray-600">
            For a deeper clean, upgrade to <Link href="/interior-car-detailing" className="text-blue-600 hover:text-blue-700">interior detailing</Link> or{" "}
            <Link href="/exterior-car-detailing" className="text-blue-600 hover:text-blue-700">exterior detailing</Link>, or go all in with{" "}
            <Link href="/full-car-detailing" className="text-blue-600 hover:text-blue-700">Full Car Detailing</Link>. Compare every option on our{" "}
            <Link href="/services" className="text-blue-600 hover:text-blue-700">services and pricing page</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Deluxe car wash FAQ</h2>
          </div>
          <div className="space-y-6">
            {deluxeFAQs.map((faq, index) => (
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
