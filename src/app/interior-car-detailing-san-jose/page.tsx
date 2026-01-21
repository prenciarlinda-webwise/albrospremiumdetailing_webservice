import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Interior Car Detailing San Jose | Deep Clean from $200 | Albros",
  description: "Professional interior car detailing in San Jose. Deep cleaning for seats, carpets, dashboard & more. Mobile service comes to you. Book online!",
  keywords: [
    "interior car detailing near me",
    "car interior detailing",
    "interior car detailing",
    "how much does interior car detailing cost",
    "interior car detailing cost",
    "deep interior cleaning car",
  ],
  alternates: {
    canonical: `${siteConfig.url}/interior-car-detailing-san-jose`,
  },
  openGraph: {
    title: "Interior Car Detailing San Jose | Deep Clean from $200",
    description: "Professional interior car detailing in San Jose. Deep cleaning for seats, carpets, dashboard & more. Mobile service comes to you.",
    url: `${siteConfig.url}/interior-car-detailing-san-jose`,
  },
};

const interiorFAQs = [
  {
    question: "How often should I get interior detailing?",
    answer: "For most drivers, we recommend interior detailing every 3-4 months. If you have kids, pets, or spend significant time in your car, every 2-3 months is ideal to maintain cleanliness and protect your surfaces."
  },
  {
    question: "Can you remove tough stains?",
    answer: "Yes! Our professional-grade steam cleaning and extraction equipment can remove most stains from fabric and carpet. We also have specialized treatments for leather, ink, grease, and other stubborn stains."
  },
  {
    question: "Is it safe for leather seats?",
    answer: "Absolutely. We use pH-balanced leather cleaners and high-quality conditioners that clean without damaging leather. Our conditioning treatment helps prevent cracking and keeps leather supple."
  },
  {
    question: "Do you clean child car seats?",
    answer: "We can clean around and under child car seats. For safety reasons, we don't remove them, but we thoroughly vacuum and clean all accessible areas. The car seat itself can be cleaned upon request."
  }
];

function InteriorFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: interiorFAQs.map((faq) => ({
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

function InteriorServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Car Detailing San Jose",
    description: "Professional interior car detailing service in San Jose. Complete deep cleaning of seats, carpets, dashboard, and all interior surfaces.",
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

export default function InteriorDetailingPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Interior Detailing", url: `${siteConfig.url}/interior-car-detailing-san-jose` },
  ];

  const includedServices = [
    "Complete vacuum (seats, carpets, trunk, crevices)",
    "Seat cleaning (leather conditioning OR fabric shampooing)",
    "Dashboard, console, door panel wipe-down",
    "Window cleaning (interior)",
    "Air vent cleaning and sanitization",
    "Floor mat deep cleaning",
    "Odor elimination treatment",
    "UV protectant application on plastics",
  ];

  const detailingProcess = [
    { step: 1, title: "Assessment & Prep", description: "We inspect your vehicle's interior condition and identify areas needing special attention." },
    { step: 2, title: "Thorough Vacuuming", description: "Deep vacuum of all carpets, seats, crevices, trunk, and hard-to-reach areas." },
    { step: 3, title: "Surface Cleaning", description: "All hard surfaces are cleaned and sanitized including dashboard, console, and door panels." },
    { step: 4, title: "Leather/Fabric Treatment", description: "Leather seats are cleaned and conditioned; fabric seats are shampooed and extracted." },
    { step: 5, title: "Detail Work", description: "Air vents, cup holders, buttons, and crevices are meticulously cleaned." },
    { step: 6, title: "Final Inspection", description: "We walk through the completed work with you to ensure your satisfaction." },
  ];

  const sanJoseNeighborhoods = [
    "Willow Glen", "Almaden Valley", "Rose Garden", "Evergreen", "Cambrian",
    "Silver Creek", "Berryessa", "Downtown San Jose", "Japantown", "Santana Row"
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <InteriorFAQSchema />
      <InteriorServiceSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/interior-detailing-san-jose.webp"
            alt="Interior car detailing service in San Jose"
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
              <li className="text-white font-medium">Interior Detailing</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Interior Car Detailing San Jose
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Professional interior detailing that transforms your cabin. We come to your location in San Jose and the Bay Area with professional-grade equipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Interior Detail - $200
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
                What's Included in Interior Detailing
              </h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive interior detailing service addresses every surface inside your vehicle. From deep cleaning to protection, we restore your cabin to like-new condition.
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
                src="/images/interior-detailing-san-jose.webp"
                alt="Professional interior car detailing in San Jose showing clean seats and dashboard"
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
              Interior Detailing Pricing
            </h2>
            <p className="mt-4 text-gray-600">
              Transparent pricing with no hidden fees. <Link href="/services" className="text-blue-600 hover:text-blue-700">View all services and pricing</Link>.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Vehicle Size</th>
                    <th className="px-6 py-4 text-right font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Sedan / Coupe</td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">$200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">SUV / Crossover</td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">$225</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Truck / Large SUV</td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">$250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 text-center">
              Prices may vary based on vehicle condition. Contact us for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Interior Detailing Process
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

      {/* How Long */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Long Does Interior Detailing Take?
            </h2>
            <p className="text-lg text-gray-600">
              A typical interior detail takes <strong>2-3 hours</strong> depending on vehicle size and condition.
              We work efficiently without rushing, ensuring every surface receives proper attention.
              Heavily soiled vehicles or those with pet hair may require additional time.
            </p>
          </div>
        </div>
      </section>

      {/* When Do You Need It */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              When Do You Need Interior Detailing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "After Long Road Trips", description: "Remove accumulated dirt, crumbs, and stains from extended travel." },
              { title: "Spills or Stains", description: "Coffee, food, or drink spills that regular cleaning can't handle." },
              { title: "Pet Hair and Odors", description: "Deep extraction removes embedded pet hair and eliminates odors." },
              { title: "Before Selling Your Vehicle", description: "A clean interior significantly increases resale value and buyer interest." },
              { title: "Regular Maintenance", description: "Every 3-4 months to maintain cleanliness and protect surfaces." },
              { title: "Allergy Concerns", description: "Remove dust, pollen, and allergens from fabric and air vents." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Areas We Serve
            </h2>
            <p className="mt-4 text-gray-600">
              We provide mobile interior detailing throughout San Jose and surrounding areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {sanJoseNeighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
              >
                {neighborhood}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/mobile-detailing-san-jose"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all San Jose mobile detailing services →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Interior Detailing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {interiorFAQs.map((faq, index) => (
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

      {/* Book Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book Interior Detailing
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to transform your car's interior? Book online or call us for same-day availability.
            Want the complete package? Check out our{" "}
            <Link href="/exterior-car-detailing-san-jose" className="text-blue-400 hover:text-blue-300">
              exterior detailing
            </Link>{" "}
            or{" "}
            <Link href="/services#all-in-detail" className="text-blue-400 hover:text-blue-300">
              All-in Detail
            </Link>{" "}
            for the best value.
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
