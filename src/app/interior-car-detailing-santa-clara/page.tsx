import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Interior Car Detailing Santa Clara, CA - From $200",
  description: "Interior car detailing in Santa Clara from the team headquartered here. Deep vacuum, leather conditioning, odor removal, mobile service from $200.",
  alternates: {
    canonical: `${siteConfig.url}/interior-car-detailing-santa-clara`,
  },
  openGraph: {
    title: "Interior Car Detailing Santa Clara, CA - From $200",
    description: "Interior car detailing in Santa Clara from the team headquartered here. Deep vacuum, leather conditioning, odor removal, mobile service from $200.",
    url: `${siteConfig.url}/interior-car-detailing-santa-clara`,
  },
};

const santaClaraInteriorFAQs = [
  {
    question: "How much does interior car detailing cost in Santa Clara?",
    answer: "Interior car detailing in Santa Clara starts at $200 for a standard sedan or mid-size vehicle and takes about 2 hours. Larger vehicles or heavily soiled interiors may cost more; we always confirm pricing before we start."
  },
  {
    question: "Is interior detailing near me available in Santa Clara?",
    answer: "Yes. Santa Clara is our home base, so interior detailing appointments here are often the easiest to schedule, including same-day slots near Rivermark, the Old Quad, and Central Park."
  },
  {
    question: "Can you get pet hair and odors out of a Santa Clara commuter car?",
    answer: "Yes. Deep extraction removes embedded pet hair and our odor treatment addresses smoke, food, and pet smells at the source, which matters for cars that spend hours a day on 101 and 280 commutes."
  },
  {
    question: "Do you serve Santa Clara University housing and apartments?",
    answer: "Yes. We work in driveways, apartment lots, and parking structures throughout Santa Clara, including near SCU. Just confirm with your property manager if you're unsure about mobile service in your complex."
  }
];

function SantaClaraInteriorServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Car Detailing Santa Clara",
    description: "Mobile interior car detailing service in Santa Clara, CA, from the Albros Premium team headquartered in the city.",
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

export default function InteriorCarDetailingSantaClaraPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: "Santa Clara", url: `${siteConfig.url}/auto-detailing-santa-clara` },
    { name: "Interior Detailing", url: `${siteConfig.url}/interior-car-detailing-santa-clara` },
  ];

  const service = services.find((s) => s.id === "interior-detail")!;
  const neighborhoods = ["Rivermark", "Old Quad", "Central Park", "Mission", "Northside"];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={santaClaraInteriorFAQs} />
      <SantaClaraInteriorServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/interior-detailing-san-jose.webp"
            alt="Interior car detailing service in Santa Clara"
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
              <li className="text-white font-medium">Interior Detailing</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Headquartered in Santa Clara
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Interior Car Detailing in Santa Clara, CA
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            A full cabin restoration from the detailing team already based on Flora Vista Ave. Deep vacuum, leather conditioning, and odor removal from $200.
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

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Interior detailing near you in Santa Clara
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                What's included
              </h2>
              <p className="mt-4 text-gray-600">
                Because we operate out of Santa Clara, interior appointments here rarely need advance notice. We cover every neighborhood from Rivermark to Mission, including the apartment complexes and office lots around{" "}
                <a href="https://www.scu.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Santa Clara University</a>.
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
                <h3 className="font-semibold text-gray-900 mb-3">Neighborhoods we serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((n) => (
                    <span key={n} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                      {n}
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
            Why Santa Clara commuters need it
          </h2>
          <p className="text-gray-600 text-lg">
            Tech commuters spend hours a day in the car between Santa Clara offices and highways 101 and 280. That means more dust, more fast food wrappers, and faster fabric wear than a car that only runs errands. A quarterly interior detail keeps the cabin from becoming the part of the car nobody wants to sit in.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Want the outside done too?
          </h2>
          <p className="text-lg text-gray-600">
            Add <Link href="/exterior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">exterior detailing in Santa Clara</Link>, or book both at once with{" "}
            <Link href="/full-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">Full Car Detailing in Santa Clara</Link>. See the{" "}
            <Link href="/auto-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">complete Santa Clara service overview</Link> or check{" "}
            <Link href="/blog/how-much-does-mobile-car-detailing-cost-san-jose" className="text-blue-600 hover:text-blue-700">full pricing</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Santa Clara interior detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {santaClaraInteriorFAQs.map((faq, index) => (
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
