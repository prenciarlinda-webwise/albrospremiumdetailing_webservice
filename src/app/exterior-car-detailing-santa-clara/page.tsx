import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Exterior Car Detailing Santa Clara, CA - From $185",
  description: "Exterior car detailing in Santa Clara from the team headquartered here. Hand wash, clay bar, paint sealant, mobile service starting at $185.",
  alternates: {
    canonical: `${siteConfig.url}/exterior-car-detailing-santa-clara`,
  },
  openGraph: {
    title: "Exterior Car Detailing Santa Clara, CA - From $185",
    description: "Exterior car detailing in Santa Clara from the team headquartered here. Hand wash, clay bar, paint sealant, mobile service starting at $185.",
    url: `${siteConfig.url}/exterior-car-detailing-santa-clara`,
  },
};

const santaClaraExteriorFAQs = [
  {
    question: "How much does exterior car detailing cost in Santa Clara?",
    answer: "Exterior car detailing in Santa Clara starts at $185 and takes about 2 hours for a standard sedan or mid-size vehicle. It includes a hand wash, clay bar treatment, and paint sealant."
  },
  {
    question: "Is exterior detailing near me available in Santa Clara?",
    answer: "Yes. We're headquartered in Santa Clara, so exterior detailing here is often one of the easiest appointments to schedule, including near Levi's Stadium and the Mission neighborhood."
  },
  {
    question: "Does Bay Area fog cause water spots on my paint here?",
    answer: "Yes. Santa Clara's morning fog deposits mineral-rich moisture that etches into clear coat if left untreated. Regular exterior detailing with paint sealant helps prevent that damage."
  },
  {
    question: "Can you detail my car before or after a Levi's Stadium event?",
    answer: "Yes, we schedule around event traffic near the stadium and Great America. Let us know your event day when booking and we'll plan a time that avoids the worst of it."
  }
];

function SantaClaraExteriorServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Car Detailing Santa Clara",
    description: "Mobile exterior car detailing service in Santa Clara, CA, from the Albros Premium team headquartered in the city.",
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

export default function ExteriorCarDetailingSantaClaraPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: "Santa Clara", url: `${siteConfig.url}/auto-detailing-santa-clara` },
    { name: "Exterior Detailing", url: `${siteConfig.url}/exterior-car-detailing-santa-clara` },
  ];

  const service = services.find((s) => s.id === "exterior-detail")!;
  const landmarks = ["Levi's Stadium", "Santa Clara University", "California's Great America", "Mission Santa Clara de Asis"];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={santaClaraExteriorFAQs} />
      <SantaClaraExteriorServiceSchema />

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/exterior-detailing-bay-area.webp"
            alt="Exterior car detailing service in Santa Clara"
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
              <li className="text-white font-medium">Exterior Detailing</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            Headquartered in Santa Clara
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Exterior Car Detailing in Santa Clara, CA
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Hand wash, decontamination, and paint protection from the team based right on Flora Vista Ave. Restore your paint's shine from $185.
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

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Exterior detailing near you in Santa Clara
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                What's included
              </h2>
              <p className="mt-4 text-gray-600">
                We cover every corner of Santa Clara, from the lots around{" "}
                <a href="https://www.levisstadium.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Levi's Stadium</a>{" "}
                to driveways near Central Park. Check permitting or HOA rules for mobile service at{" "}
                <a href="https://www.santaclaraca.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">santaclaraca.gov</a> if needed.
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

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Santa Clara paint needs protection
          </h2>
          <p className="text-gray-600 text-lg">
            Between morning fog off the bay, stadium-lot dust on event days, and constant tech-campus construction, Santa Clara cars pick up contaminants faster than average. Clay bar treatment removes what a regular wash leaves behind, and paint sealant protects against the next round.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Want the inside done too?
          </h2>
          <p className="text-lg text-gray-600">
            Add <Link href="/interior-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">interior detailing in Santa Clara</Link>, or book both at once with{" "}
            <Link href="/full-car-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">Full Car Detailing in Santa Clara</Link>. See the{" "}
            <Link href="/auto-detailing-santa-clara" className="text-blue-600 hover:text-blue-700">complete Santa Clara service overview</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Santa Clara exterior detailing FAQ</h2>
          </div>
          <div className="space-y-6">
            {santaClaraExteriorFAQs.map((faq, index) => (
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
