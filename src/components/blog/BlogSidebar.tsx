import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";

interface RelatedPost {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
}

interface BlogSidebarProps {
  relatedPosts: RelatedPost[];
}

export default function BlogSidebar({ relatedPosts }: BlogSidebarProps) {
  const hubServices = services.filter((s) => s.hubSlug);

  return (
    <aside className="lg:sticky lg:top-24 space-y-6">
      {/* CTA card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 to-blue-800 p-6 text-center">
        <p className="text-lg font-bold text-white">Need detailing?</p>
        <p className="mt-2 text-sm text-blue-100">
          Mobile service across the Bay Area. We come to you.
        </p>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
        >
          Book Now
        </a>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="mt-3 block text-sm font-medium text-blue-100 hover:text-white"
        >
          {siteConfig.phone}
        </a>
      </div>

      {/* Services list */}
      <div className="rounded-2xl bg-gray-50 p-6">
        <p className="text-sm font-semibold text-gray-900 mb-3">Our services</p>
        <ul className="space-y-2">
          {hubServices.map((service) => (
            <li key={service.id}>
              <Link
                href={`/${service.hubSlug}`}
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {service.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="rounded-2xl bg-gray-50 p-6">
          <p className="text-sm font-semibold text-gray-900 mb-4">You might also like</p>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center gap-3 group"
              >
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="56px" />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-blue-600 line-clamp-2">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
