import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Exterior Car Detailing - Mobile Bay Area Service from $185",
  description: "Mobile exterior car detailing across the Bay Area from $185. Hand wash, clay bar, polish, and sealant to restore your paint's shine. Book online.",
  alternates: {
    canonical: `${siteConfig.url}/exterior-car-detailing`,
  },
  openGraph: {
    title: "Exterior Car Detailing - Mobile Bay Area Service from $185",
    description: "Mobile exterior car detailing across the Bay Area from $185. Hand wash, clay bar, polish, and sealant to restore your paint's shine.",
    url: `${siteConfig.url}/exterior-car-detailing`,
  },
};

const exteriorFAQs = [
  {
    question: "What does exterior car detailing include?",
    answer: "Exterior car detailing includes a scratch-free hand wash, clay bar treatment to remove bonded contaminants, paint sealant application, tire dressing, wheel detailing, trim restoration, and chrome polishing."
  },
  {
    question: "Is there exterior car detailing near me?",
    answer: "Yes. We're mobile and based in Santa Clara, so we bring exterior detailing to your driveway or office anywhere in San Jose, Sunnyvale, Mountain View, Palo Alto, and the surrounding Bay Area."
  },
  {
    question: "Will exterior detailing remove swirl marks and water spots?",
    answer: "Our clay bar and polish steps remove embedded contaminants, light swirl marks, and water spots. Deeper scratches may need a dedicated paint correction quote."
  },
  {
    question: "How often should I book exterior detailing?",
    answer: "We recommend a full exterior detail every 3 to 4 months to maintain paint protection, with maintenance washes every 2 to 4 weeks in between."
  }
];

function ExteriorHubServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Car Detailing",
    description: "Mobile exterior car detailing service across the San Francisco Bay Area, including hand wash, clay bar decontamination, and paint sealant.",
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
      price: "185",
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

export default function ExteriorCarDetailingHubPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Exterior Car Detailing", url: `${siteConfig.url}/exterior-car-detailing` },
  ];

  const service = services.find((s) => s.id === "exterior-detail")!;

  const protectionOptions = [
    { name: "Carnauba wax", duration: "4-8 weeks", description: "Warm, deep shine, popular with show cars and enthusiasts." },
    { name: "Paint sealant", duration: "4-6 months", description: "Durable synthetic protection with strong UV resistance. Included in this package." },
    { name: "Ceramic coating", duration: "2-5 years", description: "Maximum long-term protection. Contact us for a custom quote." },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={exteriorFAQs} />
      <ExteriorHubServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/exterior-detailing-bay-area.webp"
            alt="Mobile exterior car detailing service in the Bay Area"
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
              <li className="text-white font-medium">Exterior Car Detailing</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Exterior Car Detailing
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Hand wash, decontamination, and paint protection that restores the shine, starting at $185. Mobile across the Bay Area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Exterior Detailing - $185
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
                src="/images/exterior-detailing-bay-area.webp"
                alt="Polished car exterior after detailing"
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
            <h2 className="text-3xl font-bold text-gray-900">Paint protection options</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {protectionOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{option.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Lasts {option.duration}</p>
                <p className="text-gray-600 text-sm">{option.description}</p>
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
            <Link href="/exterior-car-detailing-san-jose" className="text-blue-600 hover:text-blue-700">exterior car detailing in San Jose</Link>.
            {" "}Want the inside done too? Add <Link href="/interior-car-detailing" className="text-blue-600 hover:text-blue-700">interior detailing</Link>, or book both with{" "}
            <Link href="/full-car-detailing" className="text-blue-600 hover:text-blue-700">Full Car Detailing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Exterior detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {exteriorFAQs.map((faq, index) => (
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
