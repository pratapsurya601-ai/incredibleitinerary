#!/usr/bin/env node
/**
 * Pinterest Bulk Upload Script
 * Creates boards and pins from pinterest-pin-copy.csv
 *
 * Usage:
 *   node scripts/pinterest-bulk-upload.js --boards     # Create boards only
 *   node scripts/pinterest-bulk-upload.js --pins       # Create pins only
 *   node scripts/pinterest-bulk-upload.js --all        # Create boards then pins
 *   node scripts/pinterest-bulk-upload.js --test       # Dry run, no API calls
 */

const fs = require("fs");
const path = require("path");

// ── Config ──────────────────────────────────────────────────────────────────
require("dotenv").config({ path: path.join(__dirname, "..", ".env.local") });

const TOKEN = process.env.PINTEREST_ACCESS_TOKEN;
if (!TOKEN) {
  console.error("Missing PINTEREST_ACCESS_TOKEN in .env.local");
  process.exit(1);
}

const API = "https://api.pinterest.com/v5";
const SITE = "https://www.incredibleitinerary.com";
const CSV_PATH = path.join(__dirname, "..", "..", "pinterest-pin-copy.csv");
const BOARDS_PATH = path.join(__dirname, "..", "..", "pinterest-boards.md");
const LOG_PATH = path.join(__dirname, "..", "..", "pinterest-upload-log.json");

// Rate limit: Pinterest allows ~100 requests/minute. We'll be conservative.
const DELAY_MS = 800; // 800ms between requests

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── API helpers ─────────────────────────────────────────────────────────────
async function apiCall(method, endpoint, body = null) {
  const opts = {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${API}${endpoint}`, opts);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(`API ${res.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

// ── Parse CSV ───────────────────────────────────────────────────────────────
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.trim().split("\n");
  const header = lines[0];
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    // Handle quoted CSV fields
    const matches = lines[i].match(/(?:^|,)("(?:[^"]*(?:""[^"]*)*)"|[^,]*)/g);
    if (!matches || matches.length < 4) continue;

    const fields = matches.map((f) =>
      f.replace(/^,/, "").replace(/^"|"$/g, "").replace(/""/g, '"')
    );

    rows.push({
      slug: fields[0],
      title: fields[1],
      description: fields[2],
      board: fields[3],
    });
  }
  return rows;
}

// ── Board name list ─────────────────────────────────────────────────────────
const BOARD_NAMES = [
  "Kashmir Travel Guide",
  "Rajasthan Travel Itinerary",
  "Goa Beach Guide",
  "Kerala Backwaters & Hills",
  "Ladakh Road Trip",
  "Himalayan Treks & Adventures",
  "South India Travel",
  "Northeast India Travel",
  "India Heritage & Spiritual",
  "Budget Travel India",
  "Honeymoon Destinations India",
  "Southeast Asia Travel",
  "Japan & Korea Travel",
  "Europe Travel Guides",
  "Middle East & Dubai",
  "Africa & Americas Travel",
  "Weekend Getaways India",
  "India Travel Tips",
];

// Board descriptions from pinterest-boards.md
const BOARD_DESCRIPTIONS = {
  "Kashmir Travel Guide":
    "Plan your dream Kashmir trip with day-by-day itineraries for Srinagar, Gulmarg, Pahalgam, and Sonmarg. Real costs for houseboats, gondola tickets, and best time to visit. All guides from IncredibleItinerary — real trips, honest prices.",
  "Rajasthan Travel Itinerary":
    "Explore Rajasthan with detailed itineraries covering Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar, and Mount Abu. Desert safari costs, heritage hotels on a budget, and day-by-day plans. All guides from IncredibleItinerary — real trips, honest prices.",
  "Goa Beach Guide":
    "Complete guide to North Goa and South Goa beaches, nightlife, water sports. Budget itineraries for Calangute, Baga, Palolem, Arambol. Real costs for beach shacks, scooter rentals. All guides from IncredibleItinerary — real trips, honest prices.",
  "Kerala Backwaters & Hills":
    "Discover Kerala with itineraries for Alleppey houseboats, Munnar tea gardens, Wayanad wildlife, Thekkady, and Varkala. Day-by-day plans with real costs. All guides from IncredibleItinerary — real trips, honest prices.",
  "Ladakh Road Trip":
    "Plan your Leh Ladakh road trip with routes from Manali and Srinagar, permit details, acclimatization tips. Pangong Lake, Nubra Valley, Khardung La. Real costs and bike rental prices. All guides from IncredibleItinerary — real trips, honest prices.",
  "Himalayan Treks & Adventures":
    "Trekking guides for Manali, Spiti Valley, Rishikesh, Kedarnath, Gangotri, Valley of Flowers. Day-by-day itineraries with real costs for treks, campsites, and permits. All guides from IncredibleItinerary — real trips, honest prices.",
  "South India Travel":
    "Travel guides for Tamil Nadu, Karnataka, Andhra Pradesh. Pondicherry, Ooty, Kodaikanal, Hampi, Coorg, Mysore, Rameshwaram, Tirupati, Hyderabad. Day-by-day plans with real costs. All guides from IncredibleItinerary — real trips, honest prices.",
  "Northeast India Travel":
    "Explore Meghalaya, Sikkim, Assam, Arunachal Pradesh. Shillong, Cherrapunji, Gangtok, Kaziranga, Tawang, Ziro Valley. Permit guides, real costs. All guides from IncredibleItinerary — real trips, honest prices.",
  "India Heritage & Spiritual":
    "Spiritual and heritage guides for Varanasi, Amritsar, Agra, Haridwar-Rishikesh, Char Dham Yatra. Day-by-day itineraries with temple timings, real costs. All guides from IncredibleItinerary — real trips, honest prices.",
  "Budget Travel India":
    "Budget travel guides across India. Cheapest ways to explore Goa, Rajasthan, Himachal, Kerala. Hostel picks, train hacks, street food guides, trips under ₹5000-₹15000. All guides from IncredibleItinerary — real trips, honest prices.",
  "Honeymoon Destinations India":
    "Romantic getaway ideas and honeymoon itineraries for Kashmir, Kerala, Andaman, Udaipur, Shimla, Manali, Coorg. Real costs for couple-friendly resorts. All guides from IncredibleItinerary — real trips, honest prices.",
  "Southeast Asia Travel":
    "Southeast Asia guides for Thailand, Bali, Vietnam, Malaysia, Singapore, Cambodia, Philippines. Bangkok, Phuket, Hanoi, Kuala Lumpur. Real costs, visa info for Indians. All guides from IncredibleItinerary — real trips, honest prices.",
  "Japan & Korea Travel":
    "Japan and South Korea itineraries for Tokyo, Kyoto, Osaka, Seoul, Busan, Jeju. Cherry blossom guides, JR Pass tips, budget breakdowns. All guides from IncredibleItinerary — real trips, honest prices.",
  "Europe Travel Guides":
    "Europe itineraries for Italy, Spain, France, Portugal, Greece, UK. Rome, Barcelona, Paris, Lisbon, Santorini, London on a budget. Schengen visa tips. All guides from IncredibleItinerary — real trips, honest prices.",
  "Middle East & Dubai":
    "Travel guides for Dubai, Abu Dhabi, Jordan, Turkey, Oman. Burj Khalifa, desert safaris, Petra, Cappadocia, Istanbul. Visa details for Indians. All guides from IncredibleItinerary — real trips, honest prices.",
  "Africa & Americas Travel":
    "Travel itineraries for Africa and the Americas. Maldives, Mauritius, Kenya safari, Egypt, New York, South America. Real costs, visa guides for Indian passport holders. All guides from IncredibleItinerary — real trips, honest prices.",
  "Weekend Getaways India":
    "Short 2-3 day trip ideas from Delhi, Mumbai, Bangalore. Rishikesh, Lonavala, Coorg, Nainital, Pondicherry. Real costs and road trip routes. All guides from IncredibleItinerary — real trips, honest prices.",
  "India Travel Tips":
    "Practical India travel tips — packing lists, budget planning, monsoon travel, visa guides, travel apps. Train booking hacks, SIM card tips, safety advice. All guides from IncredibleItinerary — real trips, honest prices.",
};

// ── Get image URL for a slug ────────────────────────────────────────────────
function getImageUrl(slug) {
  // Read blog.ts to find the image for this slug
  try {
    const blogContent = fs.readFileSync(
      path.join(__dirname, "..", "src", "data", "blog.ts"),
      "utf8"
    );
    // Find the post entry for this slug
    const slugIdx = blogContent.indexOf(`slug: "${slug}"`);
    if (slugIdx === -1) return null;

    // Find the image field near this slug
    const chunk = blogContent.slice(slugIdx, slugIdx + 500);
    const imageMatch = chunk.match(/image:\s*"([^"]+)"/);
    return imageMatch ? imageMatch[1] : null;
  } catch {
    return null;
  }
}

// ── Create boards ───────────────────────────────────────────────────────────
async function createBoards(dryRun = false) {
  console.log("\n=== Creating Pinterest Boards ===\n");

  // First, get existing boards
  let existingBoards = [];
  try {
    const res = await apiCall("GET", "/boards?page_size=100");
    existingBoards = res.items || [];
    console.log(`Found ${existingBoards.length} existing boards\n`);
  } catch (e) {
    console.log("Could not fetch existing boards:", e.message);
  }

  const existingNames = new Set(
    existingBoards.map((b) => b.name.toLowerCase())
  );
  const boardMap = {};

  // Map existing boards
  for (const b of existingBoards) {
    boardMap[b.name] = b.id;
  }

  for (const name of BOARD_NAMES) {
    if (existingNames.has(name.toLowerCase())) {
      console.log(`  ✓ Board exists: "${name}" (${boardMap[name] || "id cached"})`);
      continue;
    }

    if (dryRun) {
      console.log(`  [DRY RUN] Would create board: "${name}"`);
      continue;
    }

    try {
      const board = await apiCall("POST", "/boards", {
        name,
        description: BOARD_DESCRIPTIONS[name] || "",
        privacy: "PUBLIC",
      });
      boardMap[name] = board.id;
      console.log(`  ✓ Created board: "${name}" (${board.id})`);
      await sleep(DELAY_MS);
    } catch (e) {
      console.error(`  ✗ Failed to create "${name}":`, e.message);
    }
  }

  // Save board map for pin creation
  fs.writeFileSync(
    path.join(__dirname, "..", "..", "pinterest-board-map.json"),
    JSON.stringify(boardMap, null, 2)
  );
  console.log(`\nBoard map saved. ${Object.keys(boardMap).length} boards ready.`);
  return boardMap;
}

// ── Create pins ─────────────────────────────────────────────────────────────
async function createPins(boardMap, dryRun = false, batchSize = 150) {
  console.log("\n=== Creating Pinterest Pins ===\n");

  const pins = parseCSV(CSV_PATH);
  console.log(`Loaded ${pins.length} pins from CSV\n`);

  // Load existing log to skip already-created pins
  let log = {};
  try {
    log = JSON.parse(fs.readFileSync(LOG_PATH, "utf8"));
  } catch {
    log = { created: [], failed: [], skipped: [] };
  }
  const createdSlugs = new Set((log.created || []).map((p) => p.slug));

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < pins.length; i++) {
    const pin = pins[i];

    // Skip already created
    if (createdSlugs.has(pin.slug)) {
      skipped++;
      continue;
    }

    // Batch limit
    if (created >= batchSize) {
      console.log(`\n  Batch limit reached (${batchSize} pins). Run again to continue.`);
      break;
    }

    // Find board ID
    const boardId = boardMap[pin.board];
    if (!boardId) {
      console.error(
        `  ✗ [${i + 1}/${pins.length}] No board ID for "${pin.board}" (pin: ${pin.slug})`
      );
      log.failed = log.failed || [];
      log.failed.push({ slug: pin.slug, error: `No board: ${pin.board}` });
      failed++;
      continue;
    }

    // Get image URL from blog data
    const imageUrl = getImageUrl(pin.slug);
    if (!imageUrl) {
      console.error(`  ✗ [${i + 1}/${pins.length}] No image for ${pin.slug}`);
      log.failed = log.failed || [];
      log.failed.push({ slug: pin.slug, error: "No image URL" });
      failed++;
      continue;
    }

    const pinData = {
      title: pin.title,
      description: pin.description,
      board_id: boardId,
      link: `${SITE}/blog/${pin.slug}?utm_source=Pinterest&utm_medium=organic`,
      media_source: {
        source_type: "image_url",
        url: imageUrl.startsWith("http")
          ? imageUrl
          : `${SITE}${imageUrl}`,
      },
    };

    if (dryRun) {
      console.log(
        `  [DRY RUN] [${i + 1}/${pins.length}] ${pin.slug} → ${pin.board}`
      );
      continue;
    }

    try {
      const result = await apiCall("POST", "/pins", pinData);
      log.created = log.created || [];
      log.created.push({
        slug: pin.slug,
        pinId: result.id,
        board: pin.board,
        timestamp: new Date().toISOString(),
      });
      createdSlugs.add(pin.slug);
      created++;
      console.log(
        `  ✓ [${i + 1}/${pins.length}] ${pin.slug} → ${pin.board} (${result.id})`
      );

      // Save progress every 10 pins
      if (created % 10 === 0) {
        fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
      }

      await sleep(DELAY_MS);
    } catch (e) {
      console.error(
        `  ✗ [${i + 1}/${pins.length}] ${pin.slug}: ${e.message}`
      );
      log.failed = log.failed || [];
      log.failed.push({
        slug: pin.slug,
        error: e.message,
        timestamp: new Date().toISOString(),
      });
      failed++;

      // If rate limited, wait longer
      if (e.message.includes("429") || e.message.includes("rate")) {
        console.log("    Rate limited — waiting 60 seconds...");
        await sleep(60000);
      }
    }
  }

  // Final save
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));

  console.log(`\n=== Done ===`);
  console.log(`  Created: ${created}`);
  console.log(`  Skipped (already done): ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Log saved to: ${LOG_PATH}`);
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--test");
  const doBoards = args.includes("--boards") || args.includes("--all");
  const doPins = args.includes("--pins") || args.includes("--all");

  // Batch size — Pinterest rate limits, so we process in batches
  const batchArg = args.find((a) => a.startsWith("--batch="));
  const BATCH_SIZE = batchArg ? parseInt(batchArg.split("=")[1]) : 150;

  if (!doBoards && !doPins && !dryRun) {
    console.log(`
Pinterest Bulk Upload Script
============================
Usage:
  node scripts/pinterest-bulk-upload.js --boards          Create 18 boards
  node scripts/pinterest-bulk-upload.js --pins            Create pins (default: 150 per run)
  node scripts/pinterest-bulk-upload.js --pins --batch=50 Create 50 pins per run
  node scripts/pinterest-bulk-upload.js --all             Create boards then pins
  node scripts/pinterest-bulk-upload.js --test            Dry run (no API calls)

Pins are created in batches. Run --pins multiple times to process all 375.
Progress is saved — it skips already-created pins automatically.
    `);
    return;
  }

  console.log(dryRun ? "\n🔍 DRY RUN MODE — no API calls\n" : "\n🚀 LIVE MODE\n");

  let boardMap = {};

  if (doBoards || doPins) {
    // Always fetch/create boards first (need board IDs for pins)
    boardMap = await createBoards(dryRun && !doPins);
  }

  // If only pins requested, try to load board map from file
  if (doPins && Object.keys(boardMap).length === 0) {
    try {
      boardMap = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "..", "pinterest-board-map.json"),
          "utf8"
        )
      );
    } catch {
      console.error("No board map found. Run with --boards first.");
      return;
    }
  }

  if (doPins) {
    await createPins(boardMap, dryRun, BATCH_SIZE);
  }
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
