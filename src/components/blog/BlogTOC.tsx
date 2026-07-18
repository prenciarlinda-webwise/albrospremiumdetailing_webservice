import type { Heading } from "@/lib/markdown";

interface BlogTOCProps {
  headings: Heading[];
}

export default function BlogTOC({ headings }: BlogTOCProps) {
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="mb-10 rounded-2xl bg-gray-50 p-6">
      <p className="text-sm font-semibold text-gray-900 mb-3">In this article</p>
      <ol className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
