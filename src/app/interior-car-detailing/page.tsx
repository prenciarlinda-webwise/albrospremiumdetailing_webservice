import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Interior Car Detailing - Mobile Bay Area Service from $200",
  description: "Mobile interior car detailing across the Bay Area from $200. Deep vacuum, leather conditioning, odor removal at your home or office. Book online.",
  alternates: {
    canonical: `${siteConfig.url}/interior-car-detailing`,
  },
  openGraph: {
    title: "Interior Car Detailing - Mobile Bay Area Service from $200",
    description: "Mobile interior car detailing across the Bay Area from $200. Deep vacuum, leather conditioning, odor removal at your home or office.",
    url: `${siteConfig.url}/interior-car-detailing`,
  },
};

const interiorFAQs = [
  {
    question: "What does interior car detailing include?",
    answer: "Interior car detailing includes a deep vacuum of carpets, mats, seats, and trunk, dashboard and console detailing, leather or vinyl conditioning, door panel and cup holder cleaning, headliner spot cleaning, air vent cleaning, and interior window cleaning."
  },
  {
    question: "Is there interior car detailing near me?",
    answer: "Yes. We're a mobile service headquartered in Santa Clara, covering San Jose, Sunnyvale, Mountain View, Palo Alto, and the wider Bay Area, so interior detailing comes to your driveway or office lot instead of a shop."
  },
  {
    question: "Can interior detailing remove pet hair and odors?",
    answer: "Yes, deep extraction removes embedded pet hair and our odor elimination treatment addresses smoke, pet, and food smells at the source rather than masking them."
  },
  {
    question: "How much does interior car detailing cost?",
    answer: "Interior car detailing starts at $200 for a standard sedan or mid-size vehicle and takes about 2 hours. Larger vehicles or heavily soiled interiors may cost more; we confirm pricing before starting."
  }
];

function InteriorHubServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Car Detailing",
    description: "Mobile interior car detailing service across the San Francisco Bay Area, including deep vacuuming, leather conditioning, and odor elimination.",
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
      price: "200",
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

export default function InteriorCarDetailingHubPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Interior Car Detailing", url: `${siteConfig.url}/interior-car-detailing` },
  ];

  const service = services.find((s) => s.id === "interior-detail")!;

  const signs = [
    { title: "Dust on the dashboard", description: "Visible when sunlight hits at an angle, a sign it's been too long." },
    { title: "Stains on seats or carpet", description: "Coffee, food, or drink spills that regular vacuuming can't lift." },
    { title: "Persistent odors", description: "Smoke, pet, or food smells that linger after opening the windows." },
    { title: "Selling your car soon", description: "A clean interior is one of the biggest factors in buyer impressions." },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={interiorFAQs} />
      <InteriorHubServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/interior-detailing-san-jose.webp"
            alt="Mobile interior car detailing service in the Bay Area"
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
              <li className="text-white font-medium">Interior Car Detailing</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Interior Car Detailing
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A complete restoration of your cabin, from carpets to headliner, starting at $200. Mobile service anywhere in the Bay Area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Interior Detailing - $200
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
                src="/images/interior-detailing-san-jose.webp"
                alt="Deep cleaned car interior after detailing"
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
            <h2 className="text-3xl font-bold text-gray-900">Signs your interior needs attention</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signs.map((item, index) => (
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
            We built a dedicated page for our busiest market:{" "}
            <Link href="/interior-car-detailing-san-jose" className="text-blue-600 hover:text-blue-700">interior car detailing in San Jose</Link>.
            {" "}Want the exterior too? Add <Link href="/exterior-car-detailing" className="text-blue-600 hover:text-blue-700">exterior detailing</Link>, or book both at once with{" "}
            <Link href="/full-car-detailing" className="text-blue-600 hover:text-blue-700">Full Car Detailing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Interior detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {interiorFAQs.map((faq, index) => (
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
