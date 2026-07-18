import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Auto Detailing Santa Clara, CA - Local Mobile Detailer",
  description: "Auto detailing in Santa Clara from the team headquartered right here. Mobile service from $80, same-day availability, fully insured.",
  alternates: {
    canonical: `${siteConfig.url}/auto-detailing-santa-clara`,
  },
  openGraph: {
    title: "Auto Detailing Santa Clara, CA - Local Mobile Detailer",
    description: "Auto detailing in Santa Clara from the team headquartered right here. Mobile service from $80, same-day availability, fully insured.",
    url: `${siteConfig.url}/auto-detailing-santa-clara`,
  },
};

const santaClaraFAQs = [
  {
    question: "How much does auto detailing cost in Santa Clara?",
    answer: "Auto detailing in Santa Clara ranges from $80 for a Premium Car Wash to $285 for Full Car Detailing. Most Santa Clara customers choose the $165 Deluxe Car Wash or the $200 Interior Detailing package. See our full pricing guide for a breakdown of every package."
  },
  {
    question: "Do you offer same-day car detailing in Santa Clara?",
    answer: "Yes, same-day appointments are often available in Santa Clara since our team is headquartered here. Call (669) 253-0420 to check same-day availability, or book online for the next open slot in your neighborhood."
  },
  {
    question: "What areas of Santa Clara do you serve?",
    answer: "We serve all of Santa Clara, including Rivermark, Old Quad, Central Park, Mission, and Northside, plus the areas around Levi's Stadium and Santa Clara University. If you're unsure whether we cover your address, contact us and we'll confirm."
  },
  {
    question: "Is Albros insured for mobile detailing in Santa Clara?",
    answer: "Yes, Albros Premium Car Detailing is fully insured for mobile service throughout Santa Clara and the greater Bay Area, so you can book with confidence whether we're working in your driveway, office lot, or apartment complex."
  }
];

function SantaClaraServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Detailing Santa Clara",
    description: "Mobile auto detailing service serving Santa Clara, CA, from the Albros Premium team headquartered in Santa Clara.",
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
      "@type": "AggregateOffer",
      lowPrice: "80",
      highPrice: "285",
      priceCurrency: "USD",
      offerCount: "5",
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

export default function AutoDetailingSantaClaraPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: "Santa Clara", url: `${siteConfig.url}/auto-detailing-santa-clara` },
  ];

  const mainServices = services.filter((s) => s.price !== null && s.id !== "free-assessment");
  const neighborhoods = ["Rivermark", "Old Quad", "Central Park", "Mission", "Northside"];
  const landmarks = ["Levi's Stadium", "Santa Clara University", "California's Great America", "Mission Santa Clara de Asis"];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={santaClaraFAQs} />
      <SantaClaraServiceSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/premium-auto-wash-santa-clara.webp"
            alt="Auto detailing service in Santa Clara, California"
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
              <li><Link href="/locations" className="hover:text-white">Locations</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Santa Clara</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Headquartered in Santa Clara
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Auto Detailing in Santa Clara, CA
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Albros Premium is a Santa Clara car detailing company in the truest sense: our home base is on Flora Vista Ave, and we detail more cars here than in any other city we serve. Mobile auto detailing that comes to your home or office, starting at $80.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book in Santa Clara
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>{siteConfig.reviews.googleRating} stars ({siteConfig.reviews.googleReviewCount} reviews)</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Fully insured</span>
            <span className="hidden sm:inline">•</span>
            <span>Same-day available</span>
          </div>
        </div>
      </section>

      {/* Service in Location block + local area info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Serving Santa Clara
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Car detailing Santa Clara drivers already trust
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Because we're based in Santa Clara (zip codes 95050, 95051, and 95054), we're often able to fit in same-day and next-day appointments here before we can in cities farther out. Our team knows the neighborhoods, the traffic patterns around Levi's Stadium on event days, and the tech-commuter schedules that make mobile detailing so convenient for Santa Clara residents.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">
                Auto detailing near you in Santa Clara
              </h3>
              <p className="mt-3 text-gray-600">
                We cover every neighborhood in Santa Clara, from Rivermark to the Old Quad near{" "}
                <a href="https://www.scu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Santa Clara University</a>, out to Mission and Central Park. Santa Clara's municipal services and permitting information are available at{" "}
                <a href="https://www.santaclaraca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">santaclaraca.gov</a> if you need to confirm parking or HOA rules for mobile service at your address. We're fully mobile, so driveways, office lots, and parking structures near{" "}
                <a href="https://www.levisstadium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Levi's Stadium</a> all work.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">Neighborhoods we serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((n) => (
                    <span key={n} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Near these Santa Clara landmarks:</h3>
                <div className="flex flex-wrap gap-2">
                  {landmarks.map((l) => (
                    <span key={l} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                      {l}
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

      {/* Why Santa Clara cars need detailing */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Why Santa Clara cars need regular detailing
          </h2>
          <p className="text-gray-600 text-lg">
            Santa Clara's mix of tech-commuter traffic and event days at Levi's Stadium and California's Great America means local vehicles accumulate dust, brake dust, and stadium-lot grime faster than average. Add in Bay Area morning fog that leaves mineral water spots on paint, and Santa Clara cars benefit from more frequent attention than cars parked in a garage every night. We recommend a full detail every 3 to 4 months and a maintenance wash every 2 to 4 weeks for most Santa Clara drivers.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Santa Clara auto detailing prices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparent pricing, no surprises. See our{" "}
              <Link href="/blog/how-much-does-mobile-car-detailing-cost-san-jose" className="text-blue-600 hover:text-blue-700">full pricing guide</Link>
              {" "}or{" "}
              <Link href="/services" className="text-blue-600 hover:text-blue-700">view all services</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                {service.popular && (
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-blue-600">{service.priceLabel}</span>
                  <span className="text-gray-500 text-sm">{service.duration}</span>
                </div>
                <p className="mt-3 text-gray-600 text-sm">{service.description}</p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Santa Clara residents choose Albros
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Locally headquartered</h3>
              <p className="text-gray-600 text-sm">Our home base is in Santa Clara, not a call center in another state.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-day service</h3>
              <p className="text-gray-600 text-sm">Often available for same-day appointments in Santa Clara.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully insured</h3>
              <p className="text-gray-600 text-sm">Complete insurance coverage for peace of mind.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed results</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guaranteed on every detail, every time.</p>
            </div>
          </div>

          <p className="mt-12 text-center text-gray-600">
            Need one service in particular? See{" "}
            <Link href="/interior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">interior detailing</Link>,{" "}
            <Link href="/exterior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">exterior detailing</Link>, or{" "}
            <Link href="/full-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">Full Car Detailing</Link> in Santa Clara. Need a different area?
            {" "}See <Link href="/mobile-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">mobile detailing across Santa Clara</Link> or{" "}
            <Link href="/locations" className="text-blue-600 hover:text-blue-700">view every city we serve</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Santa Clara auto detailing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {santaClaraFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
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
