import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Full Car Detailing Santa Clara, CA - Complete Detail from $285",
  description: "Full car detailing in Santa Clara from the team headquartered here. Complete interior and exterior service, engine bay, headlights, from $285.",
  alternates: {
    canonical: `${siteConfig.url}/full-car-detailing-santa-clara`,
  },
  openGraph: {
    title: "Full Car Detailing Santa Clara, CA - Complete Detail from $285",
    description: "Full car detailing in Santa Clara from the team headquartered here. Complete interior and exterior service, engine bay, headlights, from $285.",
    url: `${siteConfig.url}/full-car-detailing-santa-clara`,
  },
};

const santaClaraFullFAQs = [
  {
    question: "How much does a full car detail cost in Santa Clara?",
    answer: "A full car detail in Santa Clara costs $285 and takes about 4 hours. It combines complete interior and exterior detailing, engine bay cleaning, and headlight restoration in one appointment."
  },
  {
    question: "Is full car detailing near me available same-day in Santa Clara?",
    answer: "Often, yes. Since we're headquartered in Santa Clara, full details here get priority scheduling and same-day slots are frequently open, especially on weekdays."
  },
  {
    question: "Is a full detail worth it over booking interior and exterior separately?",
    answer: "Yes. Full Car Detailing costs less than booking interior and exterior detailing as two separate appointments, and you only need to schedule your car once for the complete transformation."
  },
  {
    question: "Can I book a full detail before selling my car in Santa Clara?",
    answer: "Yes, this is one of the most common reasons Santa Clara customers book a full detail. A clean interior and exterior meaningfully improve buyer impressions and support a stronger asking price."
  }
];

function SantaClaraFullDetailServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Car Detailing Santa Clara",
    description: "Complete mobile car detailing service in Santa Clara, CA, from the Albros Premium team headquartered in the city.",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Santa Clara",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
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

export default function FullCarDetailingSantaClaraPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: "Santa Clara", url: `${siteConfig.url}/auto-detailing-santa-clara` },
    { name: "Full Car Detailing", url: `${siteConfig.url}/full-car-detailing-santa-clara` },
  ];

  const service = services.find((s) => s.id === "all-in-detail")!;
  const zips = ["95050", "95051", "95054"];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={santaClaraFullFAQs} />
      <SantaClaraFullDetailServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/premium-car-detail-results.webp"
            alt="Full car detailing service in Santa Clara"
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
              <li><Link href="/auto-detailing-santa-clara" className="hover:text-white">Santa Clara</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Full Car Detailing</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Our most complete Santa Clara package
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Full Car Detailing in Santa Clara, CA
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Complete interior and exterior detailing from the team headquartered right here in Santa Clara. One appointment, total transformation, from $285.
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

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Full detailing near you in Santa Clara
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                What's included
              </h2>
              <p className="mt-4 text-gray-600">
                Because our home base is in Santa Clara (zip codes 95050, 95051, and 95054), full details here get some of our fastest turnaround. We bring everything needed, water, power, and the full equipment list, directly to your driveway or office lot.
              </p>
              <ul className="mt-6 space-y-4">
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
                <h3 className="font-semibold text-gray-900 mb-3">Santa Clara zip codes we cover:</h3>
                <div className="flex flex-wrap gap-2">
                  {zips.map((z) => (
                    <span key={z} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                      {z}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.271892982197!2d-121.9552!3d37.3541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae50ea71d1cc564b%3A0x78d1ebb5988565ca!2sAlbros%20Premium%20Car%20Detailing%20LLC!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Albros Premium Car Detailing - Santa Clara, CA"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            One appointment, everything handled
          </h2>
          <p className="text-gray-600 text-lg">
            Rather than booking interior and exterior detailing separately, Santa Clara customers who want the complete transformation choose this package. It costs less than the two services combined and only takes one visit to your home or office, ideal before selling a car, after a road trip, or ahead of a special event.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prefer to split it up?
          </h2>
          <p className="text-lg text-gray-600">
            Book just the <Link href="/interior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">interior</Link> or{" "}
            <Link href="/exterior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">exterior</Link> service instead, or see the{" "}
            <Link href="/auto-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">complete Santa Clara service overview</Link> and{" "}
            <Link href="/services" className="text-blue-600 hover:text-blue-700">full pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Santa Clara full detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {santaClaraFullFAQs.map((faq, index) => (
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
