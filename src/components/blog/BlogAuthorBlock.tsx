interface BlogAuthorBlockProps {
  author: string;
  authorTitle: string;
  publishedAt: string;
  updatedAt: string;
}

export default function BlogAuthorBlock({ author, authorTitle, publishedAt, updatedAt }: BlogAuthorBlockProps) {
  const published = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updated = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const wasUpdated = updatedAt !== publishedAt;

  return (
    <div className="mb-10 flex items-center gap-4 rounded-2xl border border-gray-100 p-5">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
        {author.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{authorTitle}</p>
        <p className="mt-1 text-xs text-gray-400">
          Published {published}
          {wasUpdated && <> &middot; Updated {updated}</>}
        </p>
      </div>
    </div>
  );
}
