import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.meta.title,
    description: location.meta.description,
    keywords: [
      `mobile car detailing ${location.name}`,
      `car detailing ${location.name} CA`,
      `auto detailing ${location.name}`,
      `mobile detailing ${location.name}`,
      `car wash ${location.name}`,
      `professional detailing ${location.name}`,
    ],
    alternates: {
      canonical: `${siteConfig.url}/mobile-detailing-${location.slug}`,
    },
    openGraph: {
      title: location.meta.title,
      description: location.meta.description,
      url: `${siteConfig.url}/mobile-detailing-${location.slug}`,
    },
  };
}

function LocationBusinessSchema({ location }: { location: NonNullable<ReturnType<typeof getLocationBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": `${siteConfig.url}/mobile-detailing-${location.slug}#localbusiness`,
    name: `${siteConfig.name} - ${location.name}`,
    description: location.description,
    url: `${siteConfig.url}/mobile-detailing-${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: siteConfig.hours.open,
        closes: siteConfig.hours.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviews.googleRating.toString(),
      reviewCount: siteConfig.reviews.googleReviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [siteConfig.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/locations` },
    { name: location.name, url: `${siteConfig.url}/mobile-detailing-${location.slug}` },
  ];

  const mainServices = services.filter((s) => s.price !== null && s.id !== "free-assessment");

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <LocationBusinessSchema location={location} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/mobile-detailing-service-bay-area.webp"
            alt={`Mobile car detailing in ${location.name}`}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/locations" className="hover:text-white">Locations</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{location.name}</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mobile Car Detailing in {location.name}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            {location.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Book Now in {location.name}
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          {/* Trust indicators */}
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
            <span>Fully Insured</span>
            <span className="hidden sm:inline">•</span>
            <span>100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Serving {location.name}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                We Come to You in {location.name}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our mobile detailing team serves all {location.name} neighborhoods. Whether you're at home, work, or anywhere else, we bring professional detailing directly to your location.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">Neighborhoods We Serve:</h3>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">Popular Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {location.landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/professional-auto-detailing-bay-area.webp"
                alt={`Professional auto detailing in ${location.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Services in {location.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Full range of mobile detailing services available throughout {location.name}.{" "}
              <Link href="/interior-car-detailing-san-jose" className="text-blue-600 hover:text-blue-700">Interior detailing</Link>,{" "}
              <Link href="/exterior-car-detailing-san-jose" className="text-blue-600 hover:text-blue-700">exterior detailing</Link>,{" "}
              and complete packages. <Link href="/services" className="text-blue-600 hover:text-blue-700">View services and pricing</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
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
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 flex-shrink-0 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
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

      {/* Why Choose Us for this location */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why {location.name} Residents Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">We know {location.name} and understand the unique challenges your car faces here.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">Often available for same-day appointments in {location.name}.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">Complete insurance coverage for peace of mind.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guaranteed on every detail.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
