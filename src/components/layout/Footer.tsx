import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { serviceAreas } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: "Premium Wash", href: "/services#premium-wash" },
      { name: "Deluxe Wash", href: "/services#deluxe-wash" },
      { name: "Interior Detail", href: "/services#interior-detail" },
      { name: "Exterior Detail", href: "/services#exterior-detail" },
      { name: "All-in Detail", href: "/services#all-in-detail" },
      { name: "Fleet Services", href: "/services#fleet-management" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Book Appointment", href: siteConfig.bookingUrl, external: true },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Albros Premium Detailing Home">
              <Image
                src="/images/albros-premium-logo.webp"
                alt="Albros Premium Car Detailing Logo"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-white">Albros</span>
                <span className="text-xl font-light text-blue-400"> Premium</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>{siteConfig.phone}</span>
              </a>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{siteConfig.hours.display}</span>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">Service Areas</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {serviceAreas.slice(0, 10).map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
