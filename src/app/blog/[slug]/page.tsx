import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { blogPosts, getBlogPostBySlug, getRecentBlogPosts } from "@/data/blog-posts";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.tags,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: [post.image],
    },
  };
}

function BlogPostSchema({ post }: { post: NonNullable<ReturnType<typeof getBlogPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/albros-main-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema({ post }: { post: NonNullable<ReturnType<typeof getBlogPostBySlug>> }) {
  // Extract FAQ items from content
  const faqRegex = /### (.+?)\n([^#]+?)(?=\n###|\n---|\n##|$)/g;
  const faqSection = post.content.match(/## Frequently Asked Questions[\s\S]*$/);

  if (!faqSection) return null;

  const faqs: { question: string; answer: string }[] = [];
  let match;

  while ((match = faqRegex.exec(faqSection[0])) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove markdown links for schema
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentBlogPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <BlogPostSchema post={post} />
      <FAQSchema post={post} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl prose-h3:mt-8 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-table:shadow-sm prose-th:bg-gray-100 prose-th:p-3 prose-td:p-3 prose-table:rounded-lg prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready for Professional Detailing?
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the difference with Albros Premium mobile car detailing.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {recentPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-square sm:w-48 flex-shrink-0">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function formatContent(content: string): string {
  // Convert markdown to HTML (basic conversion)
  let html = content
    // Links - must be processed before other transformations
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>')
    // Horizontal rule
    .replace(/^---$/gim, '<hr class="my-8 border-gray-200">')
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Tables (basic)
    .replace(/\|(.*)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br>');

  // Wrap in paragraphs
  html = '<p>' + html + '</p>';

  // Fix list wrapping
  html = html.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');

  // Fix table wrapping
  html = html.replace(/(<tr>.*?<\/tr>)+/g, '<table><tbody>$&</tbody></table>');

  return html;
}
