/**
 * fix-blog-metadata.mjs
 * Batch-updates title + description in all static blog page.tsx files.
 *
 * Rules applied:
 *   Title  → under 60 chars, matches search intent ("X-Day Itinerary 2026")
 *   Desc   → under 155 chars, starts with search-intent hook
 *   OG/Twitter title → same as new title
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "../src/app/blog");

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Extract destination + duration from old title patterns like:
 *  "Goa in 3 Days: ..."
 *  "Meghalaya in 5 Days: ..."
 *  "Leh-Ladakh in 7 Days: ..."
 */
function parseTitle(raw) {
  // Match "X in N Days" or "X: N-Day" patterns
  const m1 = raw.match(/^(.+?)\s+in\s+(\d+)\s+days?[:\s]/i);
  if (m1) return { destination: m1[1].trim(), days: m1[2] };

  // Match "X N-Day" patterns
  const m2 = raw.match(/^(.+?)\s+(\d+)-day/i);
  if (m2) return { destination: m2[1].trim(), days: m2[2] };

  // Match "X: Complete ... N days" patterns
  const m3 = raw.match(/^(.+?):\s+.*?(\d+)[\s-]day/i);
  if (m3) return { destination: m3[1].trim(), days: m3[2] };

  return null;
}

/** Build new title under 60 chars */
function buildTitle(destination, days) {
  // Try with "Trip Planner"
  const full = `${destination} ${days}-Day Itinerary 2026: Trip Planner`;
  if (full.length <= 60) return full;

  // Shorten
  const med = `${destination} ${days}-Day Itinerary 2026`;
  if (med.length <= 60) return med;

  // Destination is long — just use core
  const short = `${destination} Itinerary 2026`;
  return short.slice(0, 60);
}

/** Build new description under 155 chars */
function buildDescription(destination, days, oldDesc) {
  // Hook that matches "planning X trip" search intent
  const hook = `Plan your ${destination} trip in ${days} days. `;

  // Take as much of the old description as fits after the hook
  const budget = 155 - hook.length;
  let rest = oldDesc.replace(/^\d+\s+complete\s+\S+\s+plans?\s*[—–-]/i, "").trim();
  // Remove trailing parenthetical year or similar
  rest = rest.replace(/\s*\(\d{4}\)\s*$/, "").trim();

  if (rest.length <= budget) return hook + rest;

  // Trim at last word boundary within budget
  const trimmed = rest.slice(0, budget);
  const lastSpace = trimmed.lastIndexOf(" ");
  return hook + (lastSpace > 20 ? trimmed.slice(0, lastSpace) : trimmed) + ".";
}

/** Trim a string to maxLen at word boundary */
function trimAt(str, maxLen) {
  if (str.length <= maxLen) return str;
  const cut = str.slice(0, maxLen);
  const ls = cut.lastIndexOf(" ");
  return (ls > maxLen * 0.6 ? cut.slice(0, ls) : cut).trimEnd();
}

// ── Main ─────────────────────────────────────────────────────────────────────

const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== "[slug]")
  .map(d => d.name);

let updated = 0;
let skipped = 0;
const log = [];

for (const slug of entries) {
  const filePath = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(filePath)) { skipped++; continue; }

  let src = fs.readFileSync(filePath, "utf8");

  // Only process files that have a metadata export with a title
  if (!src.includes("export const metadata")) { skipped++; continue; }

  // Extract current title string
  const titleMatch = src.match(/title:\s*["'`](.+?)["'`]/);
  if (!titleMatch) { skipped++; continue; }
  const oldTitle = titleMatch[1];

  // Skip if already short enough and already contains "Itinerary 2026" or "Trip Planner"
  if (oldTitle.length <= 60 && /itinerary 2026|trip planner/i.test(oldTitle)) {
    skipped++;
    continue;
  }

  // Parse destination + days
  const parsed = parseTitle(oldTitle);
  if (!parsed) {
    log.push(`SKIP (no parse): ${slug} — "${oldTitle}"`);
    skipped++;
    continue;
  }

  const { destination, days } = parsed;
  const newTitle = buildTitle(destination, days);

  // Extract current description
  // Handles both single-line and multi-line description strings
  const descMatch = src.match(/description:\s*\n?\s*["'`]([\s\S]*?)["'`]\s*,/);
  const oldDesc = descMatch ? descMatch[1].replace(/\s+/g, " ").trim() : "";

  const newDesc = oldDesc
    ? buildDescription(destination, days, oldDesc)
    : `Plan your ${destination} trip in ${days} days. Real itinerary, costs, and honest tips.`;

  // Replace title (all occurrences — main metadata + OG + Twitter)
  let newSrc = src.replace(
    /(title:\s*)["'`](.+?)["'`]/g,
    (match, prefix, val) => {
      // Only replace titles that look like our old blog titles
      if (val.length > 60 || /in \d+ days/i.test(val)) {
        return `${prefix}"${newTitle}"`;
      }
      return match;
    }
  );

  // Replace description (first occurrence = main metadata description)
  if (oldDesc && oldDesc.length > 155) {
    const escapedOld = oldDesc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    newSrc = newSrc.replace(
      new RegExp(`(description:\\s*\\n?\\s*)["'\`]${escapedOld}["'\`]`, ""),
      `$1"${newDesc}"`
    );
  }

  if (newSrc === src) { skipped++; continue; }

  fs.writeFileSync(filePath, newSrc, "utf8");
  log.push(`✅ ${slug}\n   Title: "${newTitle}" (${newTitle.length} chars)\n   Desc:  "${newDesc.slice(0, 80)}..." (${newDesc.length} chars)`);
  updated++;
}

console.log(`\n${"=".repeat(60)}`);
console.log(`RESULTS: ${updated} updated, ${skipped} skipped`);
console.log("=".repeat(60));
log.forEach(l => console.log(l));
