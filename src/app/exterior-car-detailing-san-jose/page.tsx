import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Exterior Car Detailing San Jose | Wash, Polish & Protect | Albros",
  description: "Professional exterior car detailing in San Jose. Hand wash, clay bar, polish & wax. Restore your paint's shine. Mobile service available!",
  keywords: [
    "exterior car detailing",
    "exterior detailing",
    "outside car detail",
    "paint correction San Jose",
    "car polish and wax",
    "hand car wash San Jose",
  ],
  alternates: {
    canonical: `${siteConfig.url}/exterior-car-detailing-san-jose`,
  },
  openGraph: {
    title: "Exterior Car Detailing San Jose | Wash, Polish & Protect",
    description: "Professional exterior car detailing in San Jose. Hand wash, clay bar, polish & wax. Restore your paint's shine. Mobile service available!",
    url: `${siteConfig.url}/exterior-car-detailing-san-jose`,
  },
};

const exteriorFAQs = [
  {
    question: "How often should I get exterior detailing?",
    answer: "We recommend exterior detailing every 3-4 months to maintain paint protection and shine. In California's climate with UV exposure and coastal salt air, regular protection is essential for preserving your paint."
  },
  {
    question: "Will you remove scratches?",
    answer: "Our exterior detail includes light paint correction that removes minor scratches, swirl marks, and water spots. For deeper scratches, we can provide a custom quote for paint correction services."
  },
  {
    question: "What's the difference between wax and sealant?",
    answer: "Wax provides a warm, deep shine and lasts 4-8 weeks. Sealants offer more durable protection lasting 4-6 months and better UV resistance. We use professional sealants for longer-lasting results."
  },
  {
    question: "Can you detail in my driveway?",
    answer: "Yes! We're fully mobile and bring everything needed—water, power, and all equipment. Driveways, parking lots, and even covered parking structures work great for our service."
  }
];

function ExteriorFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: exteriorFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ExteriorServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Car Detailing San Jose",
    description: "Professional exterior car detailing service in San Jose. Hand wash, clay bar decontamination, paint correction, polishing, and sealant protection.",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "San Jose",
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

export default function ExteriorDetailingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Exterior Detailing", url: `${siteConfig.url}/exterior-car-detailing-san-jose` },
  ];

  const includedServices = [
    "Hand wash (two-bucket method) - gentle yet thorough cleaning",
    "Wheel & tire deep cleaning and dressing",
    "Clay bar treatment for paint decontamination",
    "Paint polish to remove light scratches and swirls",
    "Wax or sealant application for protection",
    "Trim restoration and protection",
    "Window and mirror cleaning with water repellent",
    "Chrome polishing",
  ];

  const detailingProcess = [
    { step: 1, title: "Pre-Rinse", description: "Thorough rinse to remove loose dirt and debris before touching the paint." },
    { step: 2, title: "Foam Cannon", description: "pH-balanced foam loosens remaining dirt for safe removal." },
    { step: 3, title: "Two-Bucket Wash", description: "Hand wash using separate wash and rinse buckets to prevent scratching." },
    { step: 4, title: "Wheel & Tire Detail", description: "Deep cleaning of wheels, tires, and wheel wells with dedicated brushes." },
    { step: 5, title: "Clay Bar Treatment", description: "Remove embedded contaminants for a smooth-as-glass finish." },
    { step: 6, title: "Polish & Protect", description: "Machine polish if needed, followed by professional sealant application." },
  ];

  const paintProtectionOptions = [
    {
      name: "Carnauba Wax",
      duration: "4-8 weeks",
      description: "Traditional warm shine, ideal for show cars and enthusiasts.",
    },
    {
      name: "Paint Sealant",
      duration: "4-6 months",
      description: "Durable synthetic protection with excellent UV resistance. Our standard choice.",
    },
    {
      name: "Ceramic Coating",
      duration: "2-5 years",
      description: "Maximum protection with superior hydrophobic properties. Contact us for pricing.",
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ExteriorFAQSchema />
      <ExteriorServiceSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/exterior-detailing-bay-area.webp"
            alt="Exterior car detailing service in San Jose"
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
              <li className="text-white font-medium">Exterior Detailing</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Exterior Car Detailing San Jose
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Restore your vehicle's exterior to showroom condition. Professional hand washing, polishing, and protection delivered at your location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Exterior Detail - $185
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

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included in Exterior Detailing
              </h2>
              <p className="text-gray-600 mb-8">
                Our exterior detailing service goes far beyond a regular car wash. We clean, correct, and protect every exterior surface to restore that showroom shine.
              </p>
              <ul className="space-y-4">
                {includedServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/exterior-detailing-bay-area.webp"
                alt="Professional exterior car detailing showing polished paint finish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Exterior Detailing Packages
            </h2>
            <p className="mt-4 text-gray-600">
              Choose the level of care your vehicle needs. <Link href="/services" className="text-blue-600 hover:text-blue-700">View all services</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Premium Wash</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$80</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hand wash
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Tire & wheel clean
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Window cleaning
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 ring-2 ring-blue-600 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Recommended
              </span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Full Exterior Detail</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$185</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Premium
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Clay bar treatment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Polish & sealant
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Trim restoration
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">All-in Detail</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$285</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Full exterior detail
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Complete interior
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Engine bay cleaning
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Best value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Exterior Detailing Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailingProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hand Washing */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Hand Washing Matters
            </h2>
            <p className="text-lg text-gray-600">
              Automatic car washes use harsh brushes that create micro-scratches and swirl marks over time.
              Our professional hand washing technique uses the two-bucket method with premium microfiber mitts
              to safely lift dirt without scratching your paint. The difference is visible—especially on dark colored vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Paint Protection Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Paint Protection Options
            </h2>
            <p className="mt-4 text-gray-600">
              Choose the right protection level for your needs.
              Learn more in our <Link href="/blog/why-bay-area-drivers-need-paint-protection" className="text-blue-600 hover:text-blue-700">paint protection guide</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paintProtectionOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{option.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">Lasts {option.duration}</p>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Exterior Detailing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {exteriorFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book Exterior Detailing
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Give your car's exterior the care it deserves. Book online or call for same-day availability.
            Need interior cleaning too? Add our{" "}
            <Link href="/interior-car-detailing-san-jose" className="text-blue-400 hover:text-blue-300">
              interior detailing
            </Link>{" "}
            or get the{" "}
            <Link href="/services#all-in-detail" className="text-blue-400 hover:text-blue-300">
              All-in Detail
            </Link>{" "}
            for complete care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
            <Link
              href="/mobile-detailing-san-jose"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Mobile Service San Jose
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
