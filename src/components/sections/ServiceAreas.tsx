import Image from "next/image";
import Link from "next/link";
import { serviceAreas } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export default function ServiceAreas() {
  return (
    <section className="py-14 lg:py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Service Areas
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              Areas We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We bring our premium detailing services throughout the San Francisco Bay Area
              and San Benito County. No matter where you are, we'll come to you.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  href={`/mobile-detailing-${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm">Mobile detailing {area}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Book in Your Area
              </a>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white hover:border-white transition-colors"
              >
                See all service areas
              </Link>
            </div>
          </div>

          {/* Single Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/mobile-detailing-service-bay-area.webp"
                alt="Mobile car detailing service covering the San Francisco Bay Area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">14+</p>
                <p className="text-xs text-gray-500">Cities Served</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <p className="text-2xl font-bold text-gray-900">7</p>
                <p className="text-xs text-gray-500">Days a Week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">13hr</p>
                <p className="text-xs text-gray-500">Daily Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
