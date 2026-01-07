import Link from "next/link";
import type { Service } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
        featured
          ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg"
          : "bg-white border border-gray-200 hover:border-blue-200"
      }`}
    >
      {service.popular && (
        <span className={`absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full ${
          featured ? "bg-yellow-400 text-gray-900" : "bg-blue-600 text-white"
        }`}>
          Most Popular
        </span>
      )}

      <div className="mb-4">
        <h3 className={`text-xl font-bold ${featured ? "text-white" : "text-gray-900"}`}>
          {service.name}
        </h3>
        <p className={`mt-2 text-sm ${featured ? "text-blue-100" : "text-gray-600"}`}>
          {service.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-bold ${featured ? "text-white" : "text-gray-900"}`}>
            {service.priceLabel}
          </span>
          {service.price !== null && (
            <span className={`text-sm ${featured ? "text-blue-200" : "text-gray-500"}`}>
              / session
            </span>
          )}
        </div>
        <p className={`text-sm mt-1 ${featured ? "text-blue-200" : "text-gray-500"}`}>
          Duration: {service.duration}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.slice(0, 5).map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${featured ? "text-blue-200" : "text-blue-600"}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${featured ? "text-blue-100" : "text-gray-600"}`}>
              {feature}
            </span>
          </li>
        ))}
        {service.features.length > 5 && (
          <li className={`text-sm ${featured ? "text-blue-200" : "text-gray-500"}`}>
            +{service.features.length - 5} more included
          </li>
        )}
      </ul>

      <div className="flex flex-col gap-3">
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full rounded-full py-3 px-4 text-center text-sm font-semibold transition-colors ${
            featured
              ? "bg-white text-blue-600 hover:bg-blue-50"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Book Now
        </a>
        <Link
          href={`/services#${service.id}`}
          className={`block w-full rounded-full py-3 px-4 text-center text-sm font-medium transition-colors ${
            featured
              ? "border border-white/30 text-white hover:bg-white/10"
              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
