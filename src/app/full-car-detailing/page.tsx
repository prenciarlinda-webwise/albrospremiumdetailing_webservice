import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Full Car Detailing - Mobile Bay Area Service from $285",
  description: "Complete mobile car detailing across the Bay Area from $285. Interior and exterior, clay bar, engine bay, headlight restoration. Book online today.",
  alternates: {
    canonical: `${siteConfig.url}/full-car-detailing`,
  },
  openGraph: {
    title: "Full Car Detailing - Mobile Bay Area Service from $285",
    description: "Complete mobile car detailing across the Bay Area from $285. Interior and exterior, clay bar, engine bay, headlight restoration.",
    url: `${siteConfig.url}/full-car-detailing`,
  },
};

const fullDetailFAQs = [
  {
    question: "What's included in full car detailing?",
    answer: "Full car detailing combines complete interior vacuum and steam cleaning, dashboard conditioning, leather treatment, full exterior hand wash, clay bar decontamination, paint sealant, wheel and tire detailing, engine bay cleaning, and headlight restoration in one appointment."
  },
  {
    question: "Is there full car detailing near me?",
    answer: "Yes. We bring the complete package to you anywhere in San Jose, Santa Clara, Sunnyvale, Mountain View, Palo Alto, and the rest of the Bay Area we serve, no drop-off required."
  },
  {
    question: "How long does a full detail take?",
    answer: "A full detail takes about 4 hours for a standard sedan or mid-size vehicle. Larger vehicles or heavily soiled cars may take longer."
  },
  {
    question: "Is full detailing worth it compared to booking interior and exterior separately?",
    answer: "Yes. Full Car Detailing is priced lower than booking interior and exterior detailing separately, and you only need to schedule one appointment for the complete transformation."
  }
];

function FullDetailServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Car Detailing",
    description: "Complete mobile car detailing service across the San Francisco Bay Area, combining interior and exterior detailing in one visit.",
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
      price: "285",
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

export default function FullCarDetailingHubPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Full Car Detailing", url: `${siteConfig.url}/full-car-detailing` },
  ];

  const service = services.find((s) => s.id === "all-in-detail")!;

  const occasions = [
    { title: "Selling your vehicle", description: "A fully detailed car photographs better and supports a stronger asking price." },
    { title: "Seasonal maintenance", description: "Quarterly full details protect paint and interior surfaces year-round." },
    { title: "After a road trip", description: "Reset the cabin and exterior after miles of dust, bugs, and fast food wrappers." },
    { title: "A special occasion", description: "Weddings, reunions, or just wanting your car to look its absolute best." },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={fullDetailFAQs} />
      <FullDetailServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/premium-car-detail-results.webp"
            alt="Full mobile car detailing service in the Bay Area"
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
              <li className="text-white font-medium">Full Car Detailing</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Our most complete package
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Full Car Detailing
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Interior and exterior detailing combined into one complete transformation, starting at $285. The best value if your car needs it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Full Car Detailing - $285
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
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-4xl font-bold text-blue-600">{service.priceLabel}</span>
                <span className="text-gray-500">{service.duration}</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/full-car-detailing-services.webp"
                alt="Complete car detailing results, interior and exterior"
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
            <h2 className="text-3xl font-bold text-gray-900">When a full detail makes sense</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Available in your city
          </h2>
          <p className="text-lg text-gray-600">
            See our dedicated page for{" "}
            <Link href="/full-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">full car detailing in Santa Clara</Link>. Not ready for the full package?
            {" "}Start with <Link href="/interior-car-detailing" className="text-blue-600 hover:text-blue-700">interior detailing</Link> or{" "}
            <Link href="/exterior-car-detailing" className="text-blue-600 hover:text-blue-700">exterior detailing</Link> alone.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Full car detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {fullDetailFAQs.map((faq, index) => (
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
