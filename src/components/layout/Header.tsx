"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "locations" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const hubServices = services.filter((s) => s.hubSlug);

  const santaClaraCounty = locations.filter((l) => l.county === "Santa Clara County");
  const otherLocations = locations.filter((l) => l.county !== "Santa Clara County");
  const santaClaraColumn1 = santaClaraCounty.slice(0, 5);
  const santaClaraColumn2 = santaClaraCounty.slice(5);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const locationHref = (slug: string) => `/mobile-detailing-${slug}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation" ref={navRef}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Albros Premium Car Detailing LLC Home">
              <Image
                src="/cropped-albros-car-detailing-200x108 - Edited.png"
                alt="Albros Premium Car Detailing LLC Logo"
                width={200}
                height={108}
                priority
                className="h-12 sm:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                aria-expanded={openDropdown === "services"}
                aria-haspopup="true"
                onClick={() => setOpenDropdown((d) => (d === "services" ? null : "services"))}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "services" && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-3">
                  <Link
                    href="/services"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                    onClick={() => setOpenDropdown(null)}
                  >
                    All Services and Pricing
                  </Link>
                  <div className="mt-1 border-t border-gray-100 pt-1">
                    {hubServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.hubSlug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>{service.shortName}</span>
                        {service.price !== null && (
                          <span className="text-xs text-gray-400">{service.priceLabel}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div
              className="relative"
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                aria-expanded={openDropdown === "locations"}
                aria-haspopup="true"
                onClick={() => setOpenDropdown((d) => (d === "locations" ? null : "locations"))}
              >
                Locations
                <svg
                  className={`h-4 w-4 transition-transform ${openDropdown === "locations" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "locations" && (
                <div className="absolute left-1/2 top-full mt-2 w-[36rem] max-w-[90vw] -translate-x-1/2 rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 p-4">
                  <Link
                    href="/locations"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                    onClick={() => setOpenDropdown(null)}
                  >
                    View All Service Areas
                  </Link>
                  <div className="mt-2 grid grid-cols-3 gap-4 border-t border-gray-100 pt-3">
                    <div>
                      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                        Santa Clara County
                      </p>
                      {santaClaraColumn1.map((location) => (
                        <Link
                          key={location.slug}
                          href={locationHref(location.slug)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1 md:invisible">
                        Santa Clara County
                      </p>
                      {santaClaraColumn2.map((location) => (
                        <Link
                          key={location.slug}
                          href={locationHref(location.slug)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                        Bay Area and Beyond
                      </p>
                      {otherLocations.map((location) => (
                        <Link
                          key={location.slug}
                          href={locationHref(location.slug)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Call us"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto" id="mobile-menu">
            <div className="space-y-1 pb-4 pt-2">
              <Link
                href="/"
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <svg
                    className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pb-2 space-y-1">
                    <Link
                      href="/services"
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Services and Pricing
                    </Link>
                    {hubServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/${service.hubSlug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{service.shortName}</span>
                        {service.price !== null && (
                          <span className="text-xs text-gray-400">{service.priceLabel}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Locations accordion */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
                  aria-expanded={mobileLocationsOpen}
                  onClick={() => setMobileLocationsOpen((open) => !open)}
                >
                  Locations
                  <svg
                    className={`h-5 w-5 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-3 pb-2 space-y-1">
                    <Link
                      href="/locations"
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Service Areas
                    </Link>
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={locationHref(location.slug)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-100 mt-4 pt-4 px-3 space-y-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
