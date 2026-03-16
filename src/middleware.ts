import { NextRequest, NextResponse } from "next/server";

// Spam/hack URL patterns from the WordPress compromise.
// These return 410 Gone to tell search engines to de-index them.
const SPAM_PATTERNS = [
  // Pirated software / crack / keygen / activator pages
  /\/(crack|keygen|activator|portable|serial-key|license-key|patch|pre-activated|freeactivated|licenseactivated|cracked|activated)-/,
  /\/(adobe|office|microsoft|kmspico|winrar|ccleaner|vmware|teamviewer|ableton|vegas|lumion|solidworks|autocad|easeus|recuva|coreldraw|sketchup|filmora|anydesk|fl-studio|virtualdj|adguard|bitdefender|mcafee|eset|kaspersky|malwarebytes|avast|avg)-/,
  /-(crack|keygen|activator|portable|serial-key|license-key|patch|pre-activated|freeactivated|licenseactivated|cracked|activated|product-key)\/?$/,
  /-(crack|keygen|activator|portable|serial-key|patch|pre-activated|freeactivated|licenseactivated|cracked|activated)-(exe|tool|for-pc|windows|universal|latest|stable|clean|full|lifetime|final|all-versions|no-virus|100-worked)/,
  /-(x86|x64|x32|x86x64|x32x64)-/,
  /-(filehippo|gdrive|mediafire|mega|github|reddit|bypass|genuine|verified|tested|instant|premium|unlimited|multilingual|zip)\/?$/,
  // WordPress remnants
  /^\/wp-login/,
  /^\/wp-admin/,
  /^\/wp-content/,
  /^\/wp-includes/,
  /^\/xmlrpc\.php/,
  // WordPress categories and feeds from hack
  /^\/category\/(activators|skippers|injects|interior-detailing)/,
  /\/feed\/?$/,
  // WordPress date archives
  /^\/\d{4}\/\d{2}\/?$/,
  // Hello world and hex spam
  /^\/hello-world/,
  /^\/0x[0-9a-f]+/,
  // Office torrent spam (with unicode chars)
  /office.*to.*rent/i,
  /office.*magnet-link/i,
  /office.*direct-download/i,
  /m365.*to.*rent/i,
  /m365.*magnet-link/i,
  /m365.*direct-download/i,
  /ms-office.*to.*rent/i,
  /ms-ms-office/,
  /microsoft-office.*to.*rent/i,
  /microsoft-365.*to.*rent/i,
  // Specific spam patterns
  /^\/cdn-cgi\//,
  /^\/author\/?$/,
  /^\/search\?/,
  // Old WordPress pages that don't exist
  /^\/car-hand-wash-services/,
  /^\/mobile-car-wash-service/,
  /^\/mobile-car-detailing\/?$/,
  /^\/fleet-menagement/,
  /^\/car-detailing-prices-san-jose-cost-guide/,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rewrite /mobile-detailing-{city} to /mobile-detailing/{city}
  const locationMatch = pathname.match(/^\/mobile-detailing-(.+)$/);
  if (locationMatch) {
    const city = locationMatch[1];
    return NextResponse.rewrite(new URL(`/mobile-detailing/${city}`, request.url));
  }

  // Return 410 Gone for spam/hack URLs
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse("Gone", { status: 410 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|images/|manifest.json|robots.txt|sitemap.xml|.*\\.png$|.*\\.webp$|.*\\.ico$|.*\\.svg$).*)",
  ],
};
