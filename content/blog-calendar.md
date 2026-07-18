# Albros blog content calendar

This file is the source of truth for the 3x/week automated publishing routine. Each run:

1. Find the **first unchecked (`- [ ]`) entry** below.
2. Read `.claude/skills/blog-post-seo/SKILL.md` and `.claude/skills/page-seo/SKILL.md` and follow their hard rules exactly (title/meta format, no `|`, no em dashes, sentence-case headings, FAQ cap, internal-linking rules, word count by content type).
3. Use the structural template already built this session: `authorTitle` field on `BlogPost`, and the `BlogTOC` / `BlogAuthorBlock` / `BlogSidebar` components (already wired into `src/app/blog/[slug]/page.tsx` — no changes needed there for a normal post).
4. Pull real prices and service names from `src/data/services.ts` and real location data from `src/data/locations.ts`. Never fabricate a number, a service Albros doesn't offer, or a credential.
5. Add the new post as a new entry at the **top** of the `blogPosts` array in `src/data/blog-posts.ts`, with `publishedAt` and `updatedAt` set to today's real date (get it via the `date` shell command, never guessed).
6. Check off the entry below (`- [x]`) in the same commit.
7. Run `npx tsc --noEmit` and `npm run build`. If either fails, stop — do not commit or push. Leave the working tree as-is for manual review and send the failure details in the notification email instead of a "published" email.
8. Commit and push to `main`.
9. Email a short confirmation (title, URL, word count) via the connected Gmail MCP connector.

**Mandatory per post (from `blog-post-seo`):** a first-paragraph link to the commercial page listed in "Links to", at least one more contextual link to a service/location page, 3-4 FAQ questions at 40-80 words each, no geo modifier in the title/H1 (location-angle posts describe the city in the body, not the headline), real numbers not adjectives, one outbound link to an authoritative source.

**Image rule:** check `public/images/` for unused images first. If fewer than 5 unused images remain, do not reuse an image already on another page — instead leave `image`/`imageAlt` for the highest-quality thematically-close existing image, and flag the low-inventory situation in the confirmation email so more photos can be sourced.

---

## Backlog

- [x] **Ceramic coating cost vs. paint sealant: which is right for your car** — type: comparison — primary keyword: ceramic coating cost — links to: `/exterior-car-detailing` — angle: informational only, Albros does not offer ceramic coating; explain the real cost/durability tradeoff between ceramic coating and paint sealant, then pivot to paint sealant as the accessible option included in Exterior Car Detailing
- [x] **Mobile detailing vs. drive-in car wash: what's actually different** — type: comparison — primary keyword: mobile detailing vs car wash — links to: `/full-car-detailing`
- [x] **How to protect your car from Bay Area fog and salt air** — type: how-to — primary keyword: protect car paint from fog — links to: `/exterior-car-detailing`
- [x] **Signs your car needs an interior detail** — type: definition/checklist — primary keyword: signs you need an interior detail — links to: `/interior-car-detailing` — distinct angle from the existing "interior vs exterior" post: symptom-based (odors, stains, allergens), not a side-by-side comparison
- [x] **What to expect from mobile detailing in Sunnyvale** — type: how-to/local guide, no geo modifier in title — primary keyword: mobile detailing near me — links to: `/mobile-detailing-sunnyvale`
- [x] **What to expect from mobile detailing in Mountain View** — type: how-to/local guide, no geo modifier in title — primary keyword: mobile detailing near me — links to: `/mobile-detailing-mountain-view`
- [x] **How much does fleet detailing cost for a small business** — type: definition/how-to — primary keyword: fleet detailing cost — links to: `/fleet-detailing`
- [x] **Best time of year to get a full car detail in the Bay Area** — type: definitive-guide, seasonal — primary keyword: when to detail your car — links to: `/full-car-detailing`
- [x] **DIY car wash vs. professional mobile wash: what you're actually saving** — type: comparison — primary keyword: diy car wash vs professional — links to: `/premium-car-wash`
- [x] **How to remove pet hair from car seats and carpets** — type: how-to — primary keyword: remove pet hair from car — links to: `/interior-car-detailing`
- [x] **What is paint correction and do you need it before selling your car** — type: definition — primary keyword: what is paint correction — links to: `/exterior-car-detailing`
- [x] **A tech commuter's car care checklist for Silicon Valley drivers** — type: listicle — primary keyword: car care checklist — links to: `/deluxe-car-wash`
- [x] **How often should you wash a car parked outside vs. in a garage** — type: how-to — primary keyword: how often to wash your car — links to: `/premium-car-wash`
- [x] **What to do about biohazard spills in your car** — type: definition/how-to — primary keyword: car biohazard cleanup — links to: `/biohazard-cleanup`
- [x] **What to expect from mobile detailing in Palo Alto** — type: how-to/local guide, no geo modifier in title — primary keyword: mobile detailing near me — links to: `/mobile-detailing-palo-alto`
