import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us - Professional Mobile Detailers",
  description: "Learn about Albros Premium Car Detailing LLC. We're Bay Area's trusted mobile car detailing service, bringing showroom-quality results directly to your location.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Albros Premium Car Detailing",
    description: "Professional mobile car detailing in San Jose and the Bay Area. Learn about our commitment to quality and customer satisfaction.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: "Quality First",
    description: "We never cut corners. Every detail matters, from the products we use to the techniques we employ.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Convenience",
    description: "Your time is valuable. We bring professional detailing to your doorstep, saving you time and hassle.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Reliability",
    description: "When we say we'll be there, we'll be there. Count on us for consistent, dependable service.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Transparency",
    description: "No hidden fees, no surprises. What we quote is what you pay, with clear communication throughout.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "About", url: `${siteConfig.url}/about` },
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
                <li className="text-gray-900 font-medium">About</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About Albros Premium
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your trusted partner for premium mobile car detailing in the San Francisco Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Bringing the Showroom to You
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Albros Premium LLC was founded with a simple mission: to deliver high-end
                  detailing and hand-wash services that exceed expectations, all while
                  providing the ultimate convenience of mobile service.
                </p>
                <p>
                  We understand that your vehicle is more than just transportation—it's an
                  investment, a statement, and often a source of pride. That's why we treat
                  every car we touch as if it were our own, using only premium products and
                  proven techniques to achieve showroom-quality results.
                </p>
                <p>
                  Based in the Bay Area, we serve San Jose, Santa Clara, San Francisco,
                  and surrounding communities. Whether you're at home, at work, or anywhere
                  in between, we bring the expertise to you.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/professional-auto-detailing-bay-area.webp"
                  alt="Professional auto detailing service in Bay Area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">5.0</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <p className="text-sm text-gray-500">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Commitment to You
            </h2>
            <div className="mt-8 space-y-6 text-gray-600 text-left">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>
                  <strong className="text-gray-900">100% Satisfaction Guarantee:</strong> We're
                  not satisfied until you are. If something isn't right, we'll make it right.
                </p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>
                  <strong className="text-gray-900">Fully Insured:</strong> Your vehicle is
                  protected. We carry comprehensive insurance for your peace of mind.
                </p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>
                  <strong className="text-gray-900">Professional Products:</strong> We use only
                  professional-grade, pH-balanced products that are safe for your vehicle's surfaces.
                </p>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>
                  <strong className="text-gray-900">Trained Technicians:</strong> Our team is
                  professionally trained in the latest detailing techniques and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
