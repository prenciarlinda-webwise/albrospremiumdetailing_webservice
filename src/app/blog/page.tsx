import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts } from "@/data/blog-posts";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Car Detailing Blog | Expert Tips & How-To Guides | Albros",
  description: "Expert car detailing tips and guides from professional Bay Area detailers. Learn about paint protection, interior cleaning, California car care, and more.",
  keywords: [
    "car detailing tips",
    "auto detailing guide",
    "car care advice",
    "how to detail a car",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Car Detailing Blog - Expert Tips & Professional Guides",
    description: "Professional car detailing tips and guides for Bay Area drivers. Expert advice on car care, maintenance, and protection from certified detailers.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
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
                  <Link href="/" className="hover:text-blue-600">Home</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-medium">Blog</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Car Detailing Tips & Guides
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Expert advice on car care, maintenance, and keeping your vehicle looking its best.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-blue-600 font-medium text-sm">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Give Your Car the Care It Deserves?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Book your mobile detailing appointment today and experience the Albros Premium difference.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-colors"
          >
            Book Your Detail Now
          </a>
        </div>
      </section>
    </>
  );
}
