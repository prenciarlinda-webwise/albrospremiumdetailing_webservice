import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { locations } from "@/data/locations";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Service Areas | Mobile Car Detailing Bay Area | Albros",
  description: "Albros Premium Car Detailing serves San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont & 20+ Bay Area cities. Find mobile detailing near you!",
  keywords: [
    "mobile car detailing near me",
    "car detailing Bay Area",
    "auto detailing Silicon Valley",
  ],
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  openGraph: {
    title: "Service Areas | Mobile Car Detailing Bay Area",
    description: "Albros Premium Car Detailing serves San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont & 20+ Bay Area cities. Find mobile detailing near you!",
    url: `${siteConfig.url}/locations`,
  },
};

export default function LocationsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
  ];

  // Group locations by county
  const santaClaraCounty = locations.filter(l => l.county === "Santa Clara County");
  const alamedaCounty = locations.filter(l => l.county === "Alameda County");
  const sfCounty = locations.filter(l => l.county === "San Francisco County");
  const otherCounties = locations.filter(l => !["Santa Clara County", "Alameda County", "San Francisco County"].includes(l.county));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-blue-600">Home</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-medium">Locations</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Mobile Car Detailing Service Areas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We bring professional mobile car detailing to you anywhere in the San Francisco Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.57240736474!2d-122.26379395!3d37.4134391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1704900000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Albros Premium Car Detailing Service Area Map"
            />
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Santa Clara County */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Santa Clara County
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {santaClaraCounty.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>

          {/* Alameda County */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              Alameda County
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {alamedaCounty.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>

          {/* San Francisco County */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              San Francisco County
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sfCounty.map((location) => (
                <LocationCard key={location.slug} location={location} />
              ))}
            </div>
          </div>

          {/* Other Areas */}
          {otherCounties.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Additional Service Areas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {otherCounties.map((location) => (
                  <LocationCard key={location.slug} location={location} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your City?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may still be able to service your area. Contact us to check availability in your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function LocationCard({ location }: { location: typeof locations[0] }) {
  return (
    <Link
      href={`/mobile-detailing-${location.slug}`}
      className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-5 transition-colors group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{location.county}</p>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        {location.neighborhoods.slice(0, 2).map((neighborhood) => (
          <span
            key={neighborhood}
            className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs text-gray-600"
          >
            {neighborhood}
          </span>
        ))}
        {location.neighborhoods.length > 2 && (
          <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs text-gray-500">
            +{location.neighborhoods.length - 2} more
          </span>
        )}
      </div>
    </Link>
  );
}
