import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 font-semibold text-lg">404</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-4 text-gray-600">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Services
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
