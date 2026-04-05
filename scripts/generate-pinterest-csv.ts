/**
 * Pinterest Bulk Pin Generator
 * ────────────────────────────
 * Generates a Pinterest bulk-upload CSV (3 pin variations per blog post)
 * and a boards.txt listing all unique board names.
 *
 * Usage:
 *   npx tsx scripts/generate-pinterest-csv.ts
 *
 * On first run → generates pins for all published posts.
 * On repeat runs → only generates pins for NEW posts not yet in pinterest-pinned.json.
 *
 * Upload the resulting pinterest-pins.csv at:
 *   https://www.pinterest.com/pin-builder/bulk/
 */

import { writeFileSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { blogPosts } from "../src/data/blog";
import type { BlogPost } from "../src/data/blog";

/* ─────────────────── config ─────────────────── */
const BASE_URL = "https://www.incredibleitinerary.com";
const ROOT = join(__dirname, "..");
const OUTPUT_CSV = join(ROOT, "pinterest-pins.csv");
const OUTPUT_BOARDS = join(ROOT, "pinterest-boards.txt");
const PINNED_TRACKER = join(ROOT, "pinterest-pinned.json");

/* ─────────────────── helpers ─────────────────── */

/** Upgrade Unsplash images to a portrait-optimised resolution (1000px wide) */
function pinImage(url: string): string {
  if (!url || url.startsWith("/_next/")) return `${BASE_URL}/og-image.jpg`;
  // If it's a Next.js image proxy, extract the original URL
  if (url.includes("/_next/image")) {
    const match = url.match(/[?&]url=([^&]+)/);
    if (match) url = decodeURIComponent(match[1]);
  }
  // Upgrade Unsplash to w=1000&q=85 for crisp pin images
  if (url.includes("unsplash.com")) {
    url = url.replace(/[?&]w=\d+/, "").replace(/[?&]q=\d+/, "");
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}w=1000&q=85&fit=crop&ar=2:3`;
  }
  return url;
}

/** Escape a single CSV field — wraps in quotes if needed */
function csv(value: string): string {
  const s = (value || "").replace(/\r?\n/g, " ").trim();
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

/** Extract numeric days from "5 Days", "10 Days", etc. */
function days(duration: string): number {
  const m = (duration || "").match(/(\d+)/);
  return m ? parseInt(m[1]) : 3;
}

/** Trim to max length, breaking at a word boundary */
function trim(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).replace(/\s\S*$/, "") + "…";
}

/* ─────────────────── board mapping ─────────────────── */

const BEACH_KW   = ["beach", "coast", "island", "andaman", "goa", "gokarna", "maldives", "phuket", "bali", "diu", "varkala", "puri"];
const MOUNTAIN_KW = ["mountain", "hill", "trek", "valley", "snow", "glacier", "ladakh", "kashmir", "manali", "spiti", "shimla", "ooty", "darjeeling", "auli", "mussoorie", "nainital", "coorg", "himachal"];
const HERITAGE_KW = ["heritage", "fort", "palace", "mughal", "ruins", "historical", "golden triangle", "rajasthan", "hampi", "khajuraho", "agra", "delhi", "orchha"];
const SPIRITUAL_KW = ["spiritual", "temple", "yoga", "ashram", "aarti", "pilgrimage", "varanasi", "rishikesh", "haridwar", "amritsar", "madurai", "tirupati"];
const NORTHEAST_KW = ["meghalaya", "sikkim", "assam", "arunachal", "nagaland", "manipur", "northeast", "cherrapunji", "kaziranga", "darjeeling", "tawang", "shillong"];
const SEA_COUNTRIES = ["thailand", "indonesia", "vietnam", "malaysia", "singapore", "cambodia", "myanmar", "philippines", "bali"];
const EAST_ASIA_COUNTRIES = ["japan", "korea", "china", "taiwan"];
const EUROPE_COUNTRIES = ["italy", "spain", "portugal", "greece", "turkey", "france", "germany", "netherlands", "uk", "croatia", "switzerland", "austria", "hungary", "poland", "czech", "ireland", "scotland"];
const MIDDLE_EAST_COUNTRIES = ["uae", "oman", "qatar", "jordan", "bahrain", "saudi"];

function getBoard(post: BlogPost): string {
  const country = (post.country || "India").toLowerCase();
  const hay = [post.destination, post.category, (post.tags || []).join(" "), post.slug]
    .join(" ")
    .toLowerCase();

  // International first — determined entirely by country field
  if (SEA_COUNTRIES.some(c => country.includes(c)))         return "Southeast Asia Travel";
  if (EAST_ASIA_COUNTRIES.some(c => country.includes(c)))   return "Japan & East Asia Travel";
  if (EUROPE_COUNTRIES.some(c => country.includes(c)))      return "Europe Travel Guides";
  if (MIDDLE_EAST_COUNTRIES.some(c => country.includes(c))) return "Middle East Travel";
  if (country === "maldives")                                return "Maldives & Island Escapes";
  if (!["india", ""].includes(country) && country !== "in") return "Travel Guides & Itineraries";

  // India — determine sub-board by content
  if (NORTHEAST_KW.some(kw => hay.includes(kw)))            return "Northeast India";
  if (SPIRITUAL_KW.some(kw => hay.includes(kw)))            return "Spiritual India";
  if (BEACH_KW.some(kw => hay.includes(kw)))                return "India Beach Getaways";
  if (MOUNTAIN_KW.some(kw => hay.includes(kw)))             return "Himalayan Adventures";
  if (HERITAGE_KW.some(kw => hay.includes(kw)))             return "Indian Heritage & Culture";

  return "India Travel Guides";
}

/* ─────────────────── hashtag builder ─────────────────── */

function hashtags(post: BlogPost): string {
  const country = post.country || "India";
  const dest = post.destination.replace(/\s+/g, "");
  const tags = [
    `#${dest}Travel`,
    `#${dest}`,
    country === "India" ? "#IncredibleIndia" : `#${country.replace(/\s+/g, "")}Travel`,
    "#TravelGuide",
    "#TravelItinerary",
    country === "India" ? "#IndiaTravel" : "#WorldTravel",
    "#TripPlanning",
    "#TravelBlog",
  ];
  // Add a category-specific tag
  const cat = post.category.replace(/\s+&\s+/, "").replace(/\s+/g, "");
  if (cat.length > 2 && cat.length < 20) tags.push(`#${cat}`);
  return Array.from(new Set(tags)).slice(0, 8).join(" ");
}

/* ─────────────────── pin variation builders ─────────────────── */

function budgetHint(post: BlogPost): string {
  const country = (post.country || "India").toLowerCase();
  if (country === "india") return "from ₹800/day";
  if (SEA_COUNTRIES.some(c => country.includes(c))) return "from $30/day";
  if (MIDDLE_EAST_COUNTRIES.some(c => country.includes(c))) return "from $80/day";
  return "from $50/day";
}

type Pin = {
  title: string;
  media_url: string;
  destination_url: string;
  description: string;
  board: string;
};

function buildPins(post: BlogPost): Pin[] {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const img = pinImage(post.image);
  const board = getBoard(post);
  const d = days(post.duration);
  const dest = post.destination;
  const tags = hashtags(post);
  const budget = budgetHint(post);
  const excerpt = post.excerpt || post.title;

  // Variation 1 — Budget / practical focus
  const v1Title = trim(`${dest} in ${d} Days — Complete Guide ${budget}`, 100);
  const v1Desc = trim(
    `Plan your ${dest} trip with real prices. ${d}-day itinerary with budget, mid-range & luxury plans — hotel picks, Google Maps routes & insider tips. Free guide!\n\n${excerpt}\n\n${tags} #BudgetTravel #TravelGuide`,
    500
  );

  // Variation 2 — Experience / tips focus
  const v2Title = trim(`${d} Things to Know Before Visiting ${dest} (2026)`, 100);
  const v2Desc = trim(
    `Don't make these mistakes on your ${dest} trip. Best time to visit, where to stay, what to eat & the tourist traps to avoid. Real traveller tips from our free guide.\n\n${tags} #TravelTips #TravelHacks`,
    500
  );

  // Variation 3 — Itinerary / day-by-day focus
  const v3Title = trim(`The Perfect ${d}-Day ${dest} Itinerary (2026)`, 100);
  const v3Desc = trim(
    `Day-by-day ${dest} plan with 4 travel styles — budget, couple, adventure & family. Real costs, real routes, real tips from IncredibleItinerary. Plan smarter, travel better!\n\n${excerpt}\n\n${tags} #${dest.replace(/\s+/g, "")}Itinerary #TripPlanning`,
    500
  );

  return [
    { title: v1Title, media_url: img, destination_url: url, description: v1Desc, board },
    { title: v2Title, media_url: img, destination_url: url, description: v2Desc, board },
    { title: v3Title, media_url: img, destination_url: url, description: v3Desc, board },
  ];
}

/* ─────────────────── main ─────────────────── */

function main() {
  const now = new Date();

  // Load previously pinned slugs
  let pinned: string[] = [];
  if (existsSync(PINNED_TRACKER)) {
    try {
      pinned = JSON.parse(readFileSync(PINNED_TRACKER, "utf-8"));
    } catch {
      pinned = [];
    }
  }
  const pinnedSet = new Set(pinned);
  const isFirstRun = pinned.length === 0;

  // Get published posts not yet pinned
  const posts = blogPosts.filter((p) => {
    const d = new Date(p.date);
    const isPublished = isNaN(d.getTime()) || d <= now;
    return isPublished && !pinnedSet.has(p.slug);
  });

  if (posts.length === 0) {
    console.log("✅  No new posts to pin. All published posts are already in pinterest-pinned.json.");
    return;
  }

  console.log(`\n📌  ${isFirstRun ? "First run" : "Incremental run"} — generating pins for ${posts.length} post${posts.length === 1 ? "" : "s"}...\n`);

  // Build all pins
  const allPins: Pin[] = [];
  for (const post of posts) {
    allPins.push(...buildPins(post));
  }

  // CSV header + rows
  const header = ["title", "media_url", "destination_url", "description", "board"];
  const rows = allPins.map((pin) => [
    csv(pin.title),
    csv(pin.media_url),
    csv(pin.destination_url),
    csv(pin.description),
    csv(pin.board),
  ].join(","));

  const csvContent = [header.join(","), ...rows].join("\n");
  writeFileSync(OUTPUT_CSV, csvContent, "utf-8");

  // Board list
  const boards = Array.from(new Set(allPins.map((p) => p.board))).sort();
  writeFileSync(OUTPUT_BOARDS, boards.join("\n") + "\n", "utf-8");

  // Update tracker
  const newPinned = [...pinned, ...posts.map((p) => p.slug)];
  writeFileSync(PINNED_TRACKER, JSON.stringify(newPinned, null, 2), "utf-8");

  // Summary
  console.log(`✅  Done!\n`);
  console.log(`   Posts processed : ${posts.length}`);
  console.log(`   Pins generated  : ${allPins.length}  (3 per post)`);
  console.log(`   Unique boards   : ${boards.length}`);
  console.log(`\n   Output files:`);
  console.log(`   📄  pinterest-pins.csv     → upload at pinterest.com/pin-builder/bulk/`);
  console.log(`   📋  pinterest-boards.txt   → create these boards on Pinterest first`);
  console.log(`   🗂   pinterest-pinned.json  → tracks processed slugs for future runs\n`);
  console.log(`   Boards to create on Pinterest:`);
  boards.forEach((b) => console.log(`     • ${b}`));
  console.log();

  // Warn if large batch
  if (allPins.length > 200) {
    console.log(`⚠️   Pinterest bulk upload limit is ~1,000 pins/request.`);
    console.log(`    Your CSV has ${allPins.length} pins — should be fine in one upload.\n`);
  }
}

main();
