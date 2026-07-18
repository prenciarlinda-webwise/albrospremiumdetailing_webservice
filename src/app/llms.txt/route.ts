import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog-posts";

export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const baseUrl = siteConfig.url;
  const hubServices = services.filter((s) => s.hubSlug);
  const paidPrices = services
    .filter((s) => s.price !== null && s.id !== "free-assessment")
    .map((s) => s.price as number);
  const minPrice = Math.min(...paidPrices);
  const maxPrice = Math.max(...paidPrices);

  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(
    `> Mobile car detailing company headquartered in ${siteConfig.address.city}, CA, serving ${siteConfig.address.areaServed}. Technicians travel to the customer's home or office with all water, power, and equipment needed.`
  );
  lines.push("");
  lines.push(
    `Fully insured, ${siteConfig.reviews.googleRating}/5 rated on Google. Core packages range from $${minPrice} to $${maxPrice}, mobile service included at every tier. Phone: ${siteConfig.phone}.`
  );
  lines.push("");

  lines.push("## Services");
  lines.push("");
  lines.push(`- [All Services and Pricing](${baseUrl}/services): Full price list and package comparison`);
  for (const service of hubServices) {
    const priceText = service.price !== null ? `${service.priceLabel}, ${service.duration}` : service.priceLabel;
    lines.push(`- [${service.name}](${baseUrl}/${service.hubSlug}): ${service.description} ${priceText}.`);
  }
  lines.push("");

  lines.push("## Locations");
  lines.push("");
  lines.push(`- [All Service Areas](${baseUrl}/locations): Every city served across the Bay Area`);
  lines.push(`- [Santa Clara (headquarters)](${baseUrl}/auto-detailing-santa-clara): Full service overview for the home market`);
  lines.push(`- [Interior Detailing in Santa Clara](${baseUrl}/interior-car-detailing-santa-clara)`);
  lines.push(`- [Exterior Detailing in Santa Clara](${baseUrl}/exterior-car-detailing-santa-clara)`);
  lines.push(`- [Full Car Detailing in Santa Clara](${baseUrl}/full-car-detailing-santa-clara)`);
  lines.push(`- [Interior Detailing in San Jose](${baseUrl}/interior-car-detailing-san-jose)`);
  lines.push(`- [Exterior Detailing in San Jose](${baseUrl}/exterior-car-detailing-san-jose)`);
  for (const location of locations) {
    lines.push(`- [Mobile Detailing in ${location.name}](${baseUrl}/mobile-detailing-${location.slug})`);
  }
  lines.push("");

  lines.push("## Guides");
  lines.push("");
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${baseUrl}/blog/${post.slug}): ${post.excerpt}`);
  }
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [About](${baseUrl}/about)`);
  lines.push(`- [Contact](${baseUrl}/contact)`);
  lines.push(`- [Blog index](${baseUrl}/blog)`);

  return lines.join("\n") + "\n";
}

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
