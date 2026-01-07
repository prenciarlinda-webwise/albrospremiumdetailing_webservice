import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesOverview() {
  // Show featured services on homepage
  const featuredServices = services.filter(s =>
    ["premium-wash", "deluxe-wash", "all-in-detail"].includes(s.id)
  );

  return (
    <section className="py-20 lg:py-28 bg-gray-50" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Detailing Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From quick refreshes to complete transformations, we have the perfect detailing
            package for your vehicle. All services performed at your location.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={service.id === "all-in-detail"}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
