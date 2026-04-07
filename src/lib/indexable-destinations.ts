/**
 * INDEXED_INTERNATIONAL_DESTINATIONS
 *
 * The set of international (non-India) destination names that have REAL
 * hardcoded data in content-generators.tsx (BEST_TIME_DATA, COST_DATA,
 * TRANSPORT_DATA, TRAVEL_TIPS_DATA). Posts for these destinations produce
 * high-quality, specific content and should remain indexed by search engines.
 *
 * All other international destinations fall back to generic regional defaults,
 * producing thin content (audit score 1.0–1.5/5) that wastes crawl budget.
 * Their generated posts receive robots: noindex via generateMetadata().
 *
 * IMPORTANT: India destinations are always indexed regardless of this set —
 * they are handled separately via post.country === "India" in page.tsx.
 *
 * NOTE on data quality: The `country` field in generated-posts.ts is corrupted
 * for many international entries (e.g. Bangkok is tagged as country: 'India',
 * Tokyo as 'Thailand', Rome as 'Japan'). Therefore this check is destination-
 * name-based, NOT country-field-based, which is the only reliable approach.
 *
 * Destinations and their hardcoded data coverage:
 *   Bali       — BEST_TIME + COST + TRANSPORT + TRAVEL_TIPS  (full)
 *   Bangkok    — BEST_TIME + COST + TRANSPORT + TRAVEL_TIPS  (full)
 *   Tokyo      — BEST_TIME + COST + TRANSPORT + TRAVEL_TIPS  (full)
 *   Rome       — BEST_TIME + COST + TRANSPORT + TRAVEL_TIPS  (full)
 *   Dubai      — BEST_TIME + COST + TRANSPORT + TRAVEL_TIPS  (full)
 *   Singapore  — BEST_TIME + COST + TRANSPORT               (partial — no TIPS)
 *   Vietnam    — BEST_TIME only                             (partial)
 *   Sri Lanka  — BEST_TIME only                             (partial)
 */
export const INDEXED_INTERNATIONAL_DESTINATIONS = new Set<string>([
  "Bali",
  "Bangkok",
  "Tokyo",
  "Rome",
  "Dubai",
  "Singapore",
  "Vietnam",
  "Sri Lanka",
]);
