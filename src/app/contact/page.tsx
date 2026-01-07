import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { serviceAreas } from "@/data/services";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us - Book Your Mobile Detail",
  description: `Contact Albros Premium Car Detailing at ${siteConfig.phone}. Book your mobile car detailing appointment online or call us. Serving San Jose and the Bay Area.`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Albros Premium Car Detailing",
    description: `Get in touch with us at ${siteConfig.phone}. Mobile car detailing throughout San Jose and the Bay Area.`,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
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
                <li className="text-gray-900 font-medium">Contact</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ready to give your vehicle the care it deserves? Contact us to book your appointment
              or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-blue-600 hover:text-blue-700 text-lg font-medium"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Call or text anytime</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-700">{siteConfig.hours.display}</p>
                    <p className="text-sm text-gray-500 mt-1">Open 7 days a week</p>
                  </div>
                </div>

                {/* Service Type */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile Service</h3>
                    <p className="text-gray-700">We come to you!</p>
                    <p className="text-sm text-gray-500 mt-1">Home, office, or anywhere convenient</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-10">
                <h3 className="font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking CTA */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-gray-600 mb-8">
                  The easiest way to schedule your detailing service is through our online
                  booking system. Select your service, choose a time that works for you,
                  and we'll take care of the rest.
                </p>

                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Book Online Now
                  <svg className="inline-block ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">or call us directly at</p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <hr className="my-8 border-gray-200" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free vehicle assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">100% satisfaction guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Service Coverage
            </h2>
            <p className="mt-4 text-gray-600">
              We proudly serve the entire San Francisco Bay Area
            </p>
          </div>

          {/* Map placeholder */}
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="mt-4 text-gray-600 font-medium">Service Area Map</p>
                <p className="text-sm text-gray-500">Embed Google Maps here for better UX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
