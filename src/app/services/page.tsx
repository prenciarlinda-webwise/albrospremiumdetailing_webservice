import type { Metadata } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Services & Pricing",
  description: "View our complete menu of mobile car detailing services in San Jose and Bay Area. From premium washes starting at $80 to full details at $285. Book online today!",
  keywords: [
    "car detailing prices San Jose",
    "mobile detailing services",
    "interior car detailing cost",
    "exterior car detailing prices",
    "full car detail package",
    "auto detailing menu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Car Detailing Services & Pricing | Albros Premium",
    description: "Professional mobile car detailing starting at $80. Interior, exterior, and full detail packages available throughout the Bay Area.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
  ];

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
                  <a href="/" className="hover:text-blue-600">Home</a>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-medium">Services</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Our Detailing Services
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Professional mobile car detailing packages for every need and budget.
              All services performed at your location throughout the Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <ServiceSchema service={service} />
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Service Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      {service.popular && (
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                          Most Popular
                        </span>
                      )}
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {service.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {service.name}
                    </h2>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-blue-600">
                        {service.priceLabel}
                      </span>
                      {service.price !== null && (
                        <span className="text-gray-500">per service</span>
                      )}
                    </div>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-8">
                      <a
                        href={siteConfig.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                      >
                        Book This Service
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className={`bg-gray-50 rounded-2xl p-6 lg:p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <hr className="mt-16 border-gray-200" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Quick Service Comparison
            </h2>
            <p className="mt-4 text-gray-600">
              Find the right package for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Price</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Duration</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Exterior</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Interior</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold hidden sm:table-cell">Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.filter(s => s.price !== null && s.id !== 'free-assessment').map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <a href={`#${service.id}`} className="font-medium text-gray-900 hover:text-blue-600">
                        {service.shortName}
                      </a>
                      {service.popular && (
                        <span className="ml-2 text-xs text-blue-600 font-semibold">Popular</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">
                      {service.priceLabel}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {service.duration}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {["premium-wash", "deluxe-wash", "exterior-detail", "all-in-detail"].includes(service.id) ? (
                        <svg className="w-5 h-5 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {["deluxe-wash", "interior-detail", "all-in-detail"].includes(service.id) ? (
                        <svg className="w-5 h-5 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center hidden sm:table-cell">
                      {["exterior-detail", "all-in-detail"].includes(service.id) ? (
                        <svg className="w-5 h-5 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
