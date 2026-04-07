/**
 * generated-meta.ts
 *
 * Provides programmatic variation for meta descriptions on generated posts.
 * Each post type has 8 distinct template structures so no two destinations
 * share the same description pattern.
 *
 * Selection is deterministic — the same destination always gets the same
 * template, but different destinations get different ones.
 */

import type { GeneratedPost } from "@/data/generated-posts";

// ---------------------------------------------------------------------------
// Destination-specific data lookups
// These mirror data available in content-generators.tsx but are kept
// lightweight here — only the values needed for meta description injection.
// ---------------------------------------------------------------------------

interface BestTimeMeta {
  peak: string;    // peak months e.g. "Oct–Feb"
  budget: string;  // cheapest months e.g. "Apr–Jun"
  avoid: string;   // worst months e.g. "Jun–Sep"
}

const BEST_TIME_META: Record<string, BestTimeMeta> = {
  Kashmir:       { peak: "May–Jun & Oct",   budget: "Jan–Feb",  avoid: "Jul–Aug"  },
  Rajasthan:     { peak: "Oct–Feb",          budget: "Jul–Sep",  avoid: "Apr–Jun"  },
  Goa:           { peak: "Nov–Feb",          budget: "Jun–Sep",  avoid: "Apr–May"  },
  Kerala:        { peak: "Oct–Feb",          budget: "Jun–Aug",  avoid: "Jun–Aug"  },
  Manali:        { peak: "May–Jun & Sep",    budget: "Nov–Mar",  avoid: "Dec–Feb"  },
  "Leh Ladakh":  { peak: "Jul–Aug",          budget: "Jun & Sep",avoid: "Oct–May"  },
  Shimla:        { peak: "Mar–Jun & Sep–Nov",budget: "Jan–Feb",  avoid: "Jul–Aug"  },
  Rishikesh:     { peak: "Sep–Nov & Feb–Apr",budget: "Dec–Jan",  avoid: "Jul–Aug"  },
  Varanasi:      { peak: "Oct–Feb",          budget: "May–Jun",  avoid: "Jun–Sep"  },
  Darjeeling:    { peak: "Apr–May & Oct–Nov",budget: "Dec–Feb",  avoid: "Jun–Sep"  },
  Andaman:       { peak: "Dec–Jan",          budget: "Mar–May",  avoid: "Jun–Sep"  },
  Coorg:         { peak: "Oct–Feb",          budget: "Jun–Sep",  avoid: "Jun–Sep"  },
  Dharamshala:   { peak: "Apr–Jun & Sep–Nov",budget: "Dec–Feb",  avoid: "Jul–Aug"  },
  Udaipur:       { peak: "Oct–Feb",          budget: "Jul–Sep",  avoid: "Apr–Jun"  },
  Jaipur:        { peak: "Oct–Feb",          budget: "Jul–Sep",  avoid: "Apr–Jun"  },
  Hampi:         { peak: "Oct–Jan",          budget: "Mar–Apr",  avoid: "Apr–Jun"  },
  Pondicherry:   { peak: "Nov–Feb",          budget: "May–Sep",  avoid: "Oct–Nov"  },
  Ooty:          { peak: "Apr–Jun & Sep–Dec",budget: "Jan–Mar",  avoid: "Jul–Aug"  },
  Mysore:        { peak: "Oct–Jan",          budget: "Apr–Jun",  avoid: "Feb–Mar"  },
  Spiti:         { peak: "Jul–Aug",          budget: "Jun & Sep",avoid: "Oct–May"  },
  Amritsar:      { peak: "Oct–Feb",          budget: "Jul–Sep",  avoid: "Apr–Jun"  },
  Nainital:      { peak: "Mar–Jun & Sep–Oct",budget: "Nov–Feb",  avoid: "Jul–Aug"  },
  Meghalaya:     { peak: "Oct–Feb",          budget: "Jun–Sep",  avoid: "Jun–Sep"  },
  Bali:          { peak: "Apr–Jun & Sep–Oct",budget: "Nov–Mar",  avoid: "Jul–Aug"  },
  Bangkok:       { peak: "Nov–Feb",          budget: "May–Oct",  avoid: "May–Oct"  },
  Tokyo:         { peak: "Mar–Apr & Oct–Nov",budget: "Jun–Aug",  avoid: "Aug"      },
  Rome:          { peak: "Apr–May & Sep–Oct",budget: "Dec–Jan",  avoid: "Jun–Aug"  },
  Dubai:         { peak: "Nov–Mar",          budget: "May–Sep",  avoid: "May–Sep"  },
  Singapore:     { peak: "Feb–Apr & Jun–Aug",budget: "Nov–Jan",  avoid: "Nov–Jan"  },
  Vietnam:       { peak: "Oct–Apr",          budget: "Jun–Sep",  avoid: "Jun–Sep"  },
  "Sri Lanka":   { peak: "Dec–Mar",          budget: "May–Aug",  avoid: "May–Aug"  },
};

interface CostMeta {
  budgetLow: string;   // e.g. "2,500"
  budgetHigh: string;  // e.g. "4,000"
  mid: string;         // e.g. "7,500"
  luxury: string;      // e.g. "25,000"
}

const COST_META: Record<string, CostMeta> = {
  Kashmir:       { budgetLow: "2,500",  budgetHigh: "4,500",  mid: "9,500",   luxury: "25,000" },
  Rajasthan:     { budgetLow: "2,000",  budgetHigh: "4,000",  mid: "7,500",   luxury: "20,000" },
  Goa:           { budgetLow: "2,500",  budgetHigh: "4,000",  mid: "7,000",   luxury: "22,000" },
  Kerala:        { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,000",   luxury: "20,000" },
  Manali:        { budgetLow: "2,000",  budgetHigh: "4,000",  mid: "7,000",   luxury: "18,000" },
  "Leh Ladakh":  { budgetLow: "3,000",  budgetHigh: "5,500",  mid: "10,000",  luxury: "28,000" },
  Shimla:        { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "20,000" },
  Rishikesh:     { budgetLow: "1,500",  budgetHigh: "3,000",  mid: "6,000",   luxury: "17,000" },
  Varanasi:      { budgetLow: "1,500",  budgetHigh: "3,500",  mid: "7,000",   luxury: "20,000" },
  Darjeeling:    { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "20,000" },
  Andaman:       { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,000",   luxury: "30,000" },
  Coorg:         { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,000",   luxury: "22,000" },
  Dharamshala:   { budgetLow: "1,800",  budgetHigh: "4,000",  mid: "7,000",   luxury: "18,000" },
  Udaipur:       { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,000",   luxury: "35,000" },
  Jaipur:        { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "22,000" },
  Hampi:         { budgetLow: "1,500",  budgetHigh: "3,500",  mid: "6,000",   luxury: "15,000" },
  Pondicherry:   { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "20,000" },
  Ooty:          { budgetLow: "1,800",  budgetHigh: "4,000",  mid: "7,000",   luxury: "18,000" },
  Mysore:        { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "20,000" },
  Spiti:         { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,000",   luxury: "22,000" },
  Amritsar:      { budgetLow: "1,500",  budgetHigh: "3,500",  mid: "6,500",   luxury: "18,000" },
  Nainital:      { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "7,500",   luxury: "20,000" },
  Meghalaya:     { budgetLow: "2,000",  budgetHigh: "4,500",  mid: "8,000",   luxury: "22,000" },
  Bali:          { budgetLow: "3,000",  budgetHigh: "6,000",  mid: "11,000",  luxury: "32,000" },
  Bangkok:       { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,500",   luxury: "29,000" },
  Tokyo:         { budgetLow: "6,000",  budgetHigh: "10,000", mid: "17,000",  luxury: "57,000" },
  Rome:          { budgetLow: "6,000",  budgetHigh: "10,000", mid: "17,000",  luxury: "50,000" },
  Dubai:         { budgetLow: "7,000",  budgetHigh: "12,000", mid: "20,000",  luxury: "62,000" },
  Singapore:     { budgetLow: "7,000",  budgetHigh: "12,000", mid: "19,000",  luxury: "60,000" },
  Vietnam:       { budgetLow: "2,500",  budgetHigh: "5,500",  mid: "10,000",  luxury: "28,000" },
  "Sri Lanka":   { budgetLow: "2,500",  budgetHigh: "5,000",  mid: "9,000",   luxury: "25,000" },
};

interface TransportMeta {
  flightCost: string;   // e.g. "₹4,000–10,000"
  trainHours: string;   // e.g. "18"
  distance: string;     // e.g. "876km"
}

const TRANSPORT_META: Record<string, TransportMeta> = {
  Kashmir:       { flightCost: "₹4,000–10,000", trainHours: "18",  distance: "876km"  },
  Rajasthan:     { flightCost: "₹2,500–6,000",  trainHours: "5",   distance: "280km"  },
  Goa:           { flightCost: "₹3,500–8,000",  trainHours: "10",  distance: "600km"  },
  Kerala:        { flightCost: "₹4,000–9,000",  trainHours: "36",  distance: "2,100km"},
  Manali:        { flightCost: "₹4,000–8,000",  trainHours: "14",  distance: "570km"  },
  "Leh Ladakh":  { flightCost: "₹6,000–15,000", trainHours: "N/A", distance: "1,025km"},
  Shimla:        { flightCost: "₹3,000–7,000",  trainHours: "8",   distance: "370km"  },
  Rishikesh:     { flightCost: "₹3,000–6,000",  trainHours: "6",   distance: "260km"  },
  Varanasi:      { flightCost: "₹3,500–9,000",  trainHours: "12",  distance: "820km"  },
  Darjeeling:    { flightCost: "₹3,000–9,000",  trainHours: "12",  distance: "650km"  },
  Andaman:       { flightCost: "₹8,000–22,000", trainHours: "N/A", distance: "1,370km"},
  Coorg:         { flightCost: "₹3,000–7,000",  trainHours: "N/A", distance: "265km"  },
  Dharamshala:   { flightCost: "₹3,500–8,000",  trainHours: "13",  distance: "480km"  },
  Udaipur:       { flightCost: "₹3,500–9,000",  trainHours: "12",  distance: "665km"  },
  Jaipur:        { flightCost: "₹2,500–5,000",  trainHours: "5",   distance: "280km"  },
  Hampi:         { flightCost: "₹4,000–9,000",  trainHours: "N/A", distance: "350km"  },
  Pondicherry:   { flightCost: "₹4,000–8,000",  trainHours: "N/A", distance: "162km"  },
  Ooty:          { flightCost: "₹4,000–8,000",  trainHours: "N/A", distance: "540km"  },
  Mysore:        { flightCost: "₹3,500–8,000",  trainHours: "2",   distance: "140km"  },
  Spiti:         { flightCost: "₹5,000–10,000", trainHours: "N/A", distance: "430km"  },
  Amritsar:      { flightCost: "₹3,000–7,000",  trainHours: "6",   distance: "450km"  },
  Nainital:      { flightCost: "₹3,500–8,000",  trainHours: "6",   distance: "310km"  },
  Meghalaya:     { flightCost: "₹4,000–9,000",  trainHours: "22",  distance: "1,600km"},
  Bali:          { flightCost: "₹28,000–45,000",trainHours: "N/A", distance: "N/A"    },
  Bangkok:       { flightCost: "₹18,000–35,000",trainHours: "N/A", distance: "N/A"    },
  Tokyo:         { flightCost: "₹40,000–70,000",trainHours: "N/A", distance: "N/A"    },
  Rome:          { flightCost: "₹60,000–1,10,000",trainHours:"N/A",distance: "N/A"    },
  Dubai:         { flightCost: "₹18,000–35,000",trainHours: "N/A", distance: "N/A"    },
  Singapore:     { flightCost: "₹20,000–45,000",trainHours: "N/A", distance: "N/A"    },
  Vietnam:       { flightCost: "₹20,000–40,000",trainHours: "N/A", distance: "N/A"    },
  "Sri Lanka":   { flightCost: "₹15,000–30,000",trainHours: "N/A", distance: "N/A"    },
};

// ---------------------------------------------------------------------------
// Deterministic template selector
// Uses a simple djb2-style hash of the destination string so the same
// destination always maps to the same index (0–7) but different destinations
// spread across all 8 templates.
// ---------------------------------------------------------------------------

function hashDestination(dest: string): number {
  let h = 5381;
  for (let i = 0; i < dest.length; i++) {
    h = ((h << 5) + h) ^ dest.charCodeAt(i);
    h = h >>> 0; // keep as 32-bit unsigned
  }
  return h % 8;
}

// ---------------------------------------------------------------------------
// Truncate to 160 characters at a word boundary
// ---------------------------------------------------------------------------

function truncate(s: string, max = 160): string {
  if (s.length <= max) return s;
  const cut = s.lastIndexOf(" ", max);
  return cut > 100 ? s.slice(0, cut) + "…" : s.slice(0, max) + "…";
}

// ---------------------------------------------------------------------------
// Template banks — 8 per post type
// Each entry is a factory function receiving resolved data.
// ---------------------------------------------------------------------------

// -- best-time ---------------------------------------------------------------

type BestTimeFn = (dest: string, dur: string, bt: BestTimeMeta) => string;

const BEST_TIME_TEMPLATES: BestTimeFn[] = [
  // T0
  (dest, _dur, bt) =>
    `Planning a trip to ${dest}? ${bt.peak} is peak season — here's the full month-by-month weather, crowd and price breakdown.`,
  // T1
  (dest, dur, _bt) =>
    `${dest} weather guide: when to visit for clear skies, fewer crowds, and the best prices. Month-by-month breakdown for ${dur} trips.`,
  // T2
  (dest, _dur, bt) =>
    `Best time to visit ${dest}: ${bt.peak} for good weather, ${bt.budget} for low prices. Full seasonal guide with crowd levels.`,
  // T3
  (dest, _dur, _bt) =>
    `When to visit ${dest} — the honest guide. Peak season crowds, off-season bargains, and the months most travellers get wrong.`,
  // T4
  (dest, _dur, bt) =>
    `${dest} in ${bt.peak}: perfect weather, full-price hotels. ${bt.budget}: 30% cheaper, thinner crowds. Full seasonal breakdown inside.`,
  // T5
  (dest, _dur, bt) =>
    `Visit ${dest} in ${bt.peak} for the best experience. Avoid ${bt.avoid}. Month-by-month guide with prices, weather and local events.`,
  // T6
  (dest, _dur, _bt) =>
    `${dest} travel seasons explained — when it's worth full price, when to go budget, and the one month everyone skips that's actually brilliant.`,
  // T7
  (dest, _dur, bt) =>
    `Is ${bt.peak} the right time for your ${dest} trip? Compare all seasons: weather windows, festival dates, hotel prices and crowd levels.`,
];

// -- cost-breakdown ----------------------------------------------------------

type CostFn = (dest: string, dur: string, c: CostMeta) => string;

const COST_BREAKDOWN_TEMPLATES: CostFn[] = [
  // T0
  (dest, dur, c) =>
    `${dest} trip cost for 2 (${dur}): ₹${c.budgetLow}–₹${c.budgetHigh} budget to ₹${c.luxury} luxury. Full hotel, food and transport breakdown.`,
  // T1
  (dest, dur, c) =>
    `How much does ${dest} cost? Budget: ₹${c.budgetLow}/day. Mid-range: ₹${c.mid}/day. Full cost breakdown for a ${dur} trip.`,
  // T2
  (dest, _dur, _c) =>
    `${dest} on a budget: what you'll actually spend on hotels, food, transport and activities. Real 2026 prices, not estimates.`,
  // T3
  (dest, dur, _c) =>
    `Planning a ${dest} trip? Here's every cost — accommodation, food, transport, entry fees — for budget, mid-range and luxury travellers.`,
  // T4
  (dest, _dur, c) =>
    `${dest} travel costs broken down: ₹${c.budgetLow}–${c.budgetHigh}/day depending on your style. What to splurge on, what to skip.`,
  // T5
  (dest, dur, c) =>
    `Is ${dest} expensive? Full ${dur} trip cost for couples and solo travellers — budget ₹${c.budgetLow}/day to luxury ₹${c.luxury}/day.`,
  // T6
  (dest, _dur, c) =>
    `${dest} trip budget: the real numbers for 2026. What costs changed, what's overpriced, and how to do it for under ₹${c.budgetHigh}/day.`,
  // T7
  (dest, dur, _c) =>
    `How to plan a ${dest} trip without overspending: complete cost guide for ${dur} with budget tips that actually work.`,
];

// -- how-to-reach ------------------------------------------------------------

type TransportFn = (dest: string, dur: string, t: TransportMeta) => string;

const HOW_TO_REACH_TEMPLATES: TransportFn[] = [
  // T0
  (dest, _dur, _t) =>
    `How to reach ${dest} from Delhi, Mumbai and Bangalore — flights, trains, buses and road. Prices, timings and booking tips for 2026.`,
  // T1
  (dest, _dur, t) =>
    `Getting to ${dest}: cheapest flights, best trains, and the road trip option. Real travel times and 2026 prices from major Indian cities.`,
  // T2
  (dest, _dur, _t) =>
    `${dest} transport guide: fly, train or drive? Honest comparison of all options from Delhi, Mumbai and Bengaluru with current prices.`,
  // T3
  (dest, _dur, t) =>
    `Flights to ${dest} cost ${t.flightCost}. ${t.trainHours !== "N/A" ? `Trains take ${t.trainHours} hrs.` : "No direct trains."} Full how-to-reach guide with all options and booking platforms.`,
  // T4
  (dest, _dur, _t) =>
    `Reaching ${dest} in 2026: the fastest route, the cheapest route, and the most scenic route. Prices and timings from 6 Indian cities.`,
  // T5
  (dest, _dur, _t) =>
    `How Indians travel to ${dest} — the routes that work, the ones that waste a day, and where to book to save ₹2,000+ on transport.`,
  // T6
  (dest, _dur, t) =>
    `${dest} is ${t.distance !== "N/A" ? t.distance + " from Delhi" : "a flight away"}. Here's how to get there by air, rail and road — with prices, durations and booking tips.`,
  // T7
  (dest, _dur, _t) =>
    `Complete ${dest} transport guide: airport, railway station, bus routes and road conditions. Everything to plan your journey in 2026.`,
];

// -- travel-tips -------------------------------------------------------------

type TipsFn = (dest: string, dur: string) => string;

const TRAVEL_TIPS_TEMPLATES: TipsFn[] = [
  // T0
  (dest, _dur) =>
    `12 ${dest} travel tips that save money and avoid mistakes: what to carry, what to skip, local scams, SIM cards and the rules no one tells you.`,
  // T1
  (dest, _dur) =>
    `Before you visit ${dest}: safety tips, local customs, what not to do, and the practical info every traveller needs but most guides skip.`,
  // T2
  (dest, _dur) =>
    `${dest} travel tips for first-timers: how locals actually live here, what tourists always get wrong, and how to have a better trip.`,
  // T3
  (dest, _dur) =>
    `Essential ${dest} travel advice: best apps, local transport tricks, accommodation tips, and 5 common mistakes that ruin the first day.`,
  // T4
  (dest, _dur) =>
    `What no one tells you about travelling in ${dest}: honest tips on safety, costs, crowds, and the things that actually matter on the ground.`,
  // T5
  (dest, _dur) =>
    `${dest} travel guide: practical tips on getting a SIM, finding budget food, avoiding tourist traps, and the cultural rules worth knowing.`,
  // T6
  (dest, _dur) =>
    `Planning your first ${dest} trip? Read this first — local tips on transport, food, safety and the mistakes that cost time and money.`,
  // T7
  (dest, _dur) =>
    `${dest} travel tips 2026: updated advice on visas, safety, apps, local etiquette and the one thing most visitors wish they'd known earlier.`,
];

// ---------------------------------------------------------------------------
// Default fallback data for destinations not in lookup tables
// ---------------------------------------------------------------------------

const DEFAULT_BEST_TIME: BestTimeMeta = {
  peak: "Oct–Feb",
  budget: "Apr–Jun",
  avoid: "Jun–Sep",
};

const DEFAULT_COST: CostMeta = {
  budgetLow: "2,000",
  budgetHigh: "4,500",
  mid: "7,500",
  luxury: "20,000",
};

const DEFAULT_TRANSPORT: TransportMeta = {
  flightCost: "₹4,000–10,000",
  trainHours: "N/A",
  distance: "N/A",
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns a unique meta description for a generated post.
 * - Deterministic: same destination + type always returns same template index.
 * - Different destinations across a type get different template structures.
 * - All outputs are truncated to 160 characters at a word boundary.
 */
export function getGeneratedPostDescription(post: GeneratedPost): string {
  const dest = post.destination;
  const dur = post.duration ?? "a few days";
  const idx = hashDestination(dest);

  let raw: string;

  switch (post.type) {
    case "best-time": {
      const bt = BEST_TIME_META[dest] ?? DEFAULT_BEST_TIME;
      raw = BEST_TIME_TEMPLATES[idx](dest, dur, bt);
      break;
    }
    case "cost-breakdown": {
      const c = COST_META[dest] ?? DEFAULT_COST;
      raw = COST_BREAKDOWN_TEMPLATES[idx](dest, dur, c);
      break;
    }
    case "how-to-reach": {
      const t = TRANSPORT_META[dest] ?? DEFAULT_TRANSPORT;
      raw = HOW_TO_REACH_TEMPLATES[idx](dest, dur, t);
      break;
    }
    case "travel-tips": {
      raw = TRAVEL_TIPS_TEMPLATES[idx](dest, dur);
      break;
    }
    default:
      raw = post.description;
  }

  return truncate(raw);
}
