"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { DESTINATIONS_DISPLAY } from "@/lib/siteStats";

/* ═══════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════ */
type Prefs = {
  experiences: string[];
  region: string;
  indianRegion: string;
  duration: string;
  budget: string;
  traveller: string;
};

const INIT: Prefs = {
  experiences: [],
  region: "",
  indianRegion: "all",
  duration: "",
  budget: "",
  traveller: "",
};

type Reason = { cat: string; label: string; hit: boolean };
type ScoredPost = { post: BlogPost; pct: number; reasons: Reason[] };

/* ═══════════════════════════════════════════════════
   QUESTION OPTIONS
═══════════════════════════════════════════════════ */
const EXP_OPTS = [
  { id: "beach",      emoji: "🏖️", label: "Beach & Coast",      desc: "Sun, sand, water sports" },
  { id: "mountains",  emoji: "🏔️", label: "Mountains & Nature",  desc: "Trekking, valleys, fresh air" },
  { id: "heritage",   emoji: "🏰", label: "Heritage & Culture",  desc: "Forts, temples, history" },
  { id: "spiritual",  emoji: "🕌", label: "Spiritual & Wellness", desc: "Temples, yoga, inner peace" },
  { id: "nightlife",  emoji: "🎉", label: "Nightlife & Party",    desc: "Clubs, bars, beach parties" },
  { id: "food",       emoji: "🍛", label: "Food & Culinary",      desc: "Street food, local cuisine" },
  { id: "wildlife",   emoji: "🦁", label: "Wildlife & Safari",    desc: "Tigers, elephants, national parks" },
  { id: "relaxation", emoji: "🧘", label: "Relaxation",           desc: "Slow pace, spas, scenic views" },
  { id: "adventure",  emoji: "🏃", label: "Adventure",            desc: "Rafting, skiing, paragliding" },
];

const REGION_OPTS = [
  { id: "india",       emoji: "🇮🇳", label: "India",         desc: "60+ guides across all regions" },
  { id: "sea",         emoji: "🌏", label: "Southeast Asia", desc: "Bali, Thailand, Vietnam, Malaysia" },
  { id: "east-asia",   emoji: "🗾",  label: "East Asia",      desc: "Japan, Korea" },
  { id: "europe",      emoji: "🏰", label: "Europe",         desc: "Italy, Spain, Portugal, Greece" },
  { id: "middle-east", emoji: "🕌", label: "Middle East",    desc: "Dubai, UAE, Oman" },
  { id: "americas",    emoji: "🌎", label: "Americas",       desc: "All American destinations" },
  { id: "africa",      emoji: "🌍", label: "Africa",         desc: "All African destinations" },
  { id: "anywhere",    emoji: "✨",  label: "Anywhere",       desc: "Surprise me with the best match" },
];

const INDIA_SUB_OPTS = [
  { id: "all",       label: "All of India" },
  { id: "north",     label: "North India" },
  { id: "south",     label: "South India" },
  { id: "northeast", label: "Northeast" },
  { id: "rajasthan", label: "Rajasthan" },
  { id: "himalayas", label: "Himalayas" },
  { id: "coastal",   label: "Coastal" },
];

const DURATION_OPTS = [
  { id: "weekend",  emoji: "⚡",  label: "Weekend",    desc: "2–3 days" },
  { id: "short",    emoji: "📅",  label: "Short Trip", desc: "4–5 days" },
  { id: "week",     emoji: "🗓️",  label: "One Week",   desc: "6–7 days" },
  { id: "extended", emoji: "📆",  label: "Extended",   desc: "8–14 days" },
  { id: "long",     emoji: "🌍",  label: "Long Trip",  desc: "15+ days" },
  { id: "flexible", emoji: "🤷",  label: "Flexible",   desc: "Show me all" },
];

const BUDGET_OPTS = [
  { id: "budget",   emoji: "💰", label: "Budget",      desc: "Under \u20b92,000/day or $30/day" },
  { id: "midrange", emoji: "💳", label: "Mid-range",   desc: "\u20b92,000–5,000/day or $30–80/day" },
  { id: "comfort",  emoji: "💎", label: "Comfortable", desc: "\u20b95,000–10,000/day or $80–150/day" },
  { id: "luxury",   emoji: "👑", label: "Luxury",      desc: "\u20b910,000+/day or $150+/day" },
  { id: "nolimit",  emoji: "🤷", label: "No Limit",    desc: "Money is no object" },
];

const TRAVELLER_OPTS = [
  { id: "solo",      emoji: "🧑",    label: "Solo",               desc: "Flying free, no compromises" },
  { id: "couple",    emoji: "💑",    label: "Couple / Honeymoon", desc: "Romance, privacy, sunsets" },
  { id: "family",    emoji: "👨‍👩‍👧‍👦", label: "Family with Kids",   desc: "Child-friendly, easy pacing" },
  { id: "friends",   emoji: "👫",    label: "Friends / Group",    desc: "Shared adventures, group fun" },
  { id: "undecided", emoji: "🤷",    label: "Not Decided Yet",    desc: "Show me everything" },
];

/* ═══════════════════════════════════════════════════
   SCORING ENGINE
═══════════════════════════════════════════════════ */
const EXP_KW: Record<string, string[]> = {
  beach: [
    "beach", "coast", "island", "diving", "snorkel", "lagoon",
    "andaman", "phuket", "bali", "maldives", "gokarna", "diu",
    "varkala", "kovalam", "radhanagar", "havelock", "agonda", "palolem",
  ],
  mountains: [
    "mountain", "trek", "trekking", "valley", "hill", "snow", "peak",
    "glacier", "ladakh", "kashmir", "manali", "shimla", "spiti", "ooty",
    "darjeeling", "coorg", "sikkim", "meghalaya", "dharamshala",
    "mussoorie", "nainital", "auli", "solang", "rohtang", "chandratal",
    "pangong", "himalay",
  ],
  heritage: [
    "heritage", "culture", "fort", "palace", "mughal", "historical",
    "ruins", "monument", "hampi", "rajasthan", "golden triangle",
    "khajuraho", "orchha", "agra", "medieval", "vijayanagar",
    "amber fort", "mehrangarh", "hawa mahal", "unesco", "ancient",
  ],
  spiritual: [
    "spiritual", "temple", "yoga", "wellness", "ashram", "pilgrimage",
    "ganga aarti", "aarti", "varanasi", "rishikesh", "haridwar",
    "amritsar", "dwarka", "rameswaram", "madurai", "tirupati",
    "kashi", "meenakshi", "vishwanath", "monks", "monastery",
  ],
  nightlife: ["nightlife", "party", "club", "bar", "pub", "beach party"],
  food: [
    "food", "culinary", "street food", "cuisine", "biryani",
    "food trail", "spice", "bazaar", "market tour", "taste",
    "dining", "local eats", "charminar",
  ],
  wildlife: [
    "wildlife", "safari", "national park", "tiger", "rhino",
    "elephant", "bird", "jungle", "corbett", "ranthambore",
    "kaziranga", "wayanad", "bandhavgarh", "one-horned", "sundarban",
  ],
  relaxation: [
    "backwater", "houseboat", "spa", "resort", "plantation", "scenic",
    "peaceful", "alleppey", "munnar", "coffee estate", "tea garden",
    "tea plantation", "kodaikanal", "serene", "tranquil", "slow travel",
  ],
  adventure: [
    "adventure", "rafting", "skiing", "ski", "paragliding", "bungee",
    "camping", "road trip", "bike trip", "auli", "bir billing",
    "chopta", "white water", "extreme", "motorbike",
  ],
};

const REGION_COUNTRIES: Record<string, string[]> = {
  india:         ["India"],
  sea:           ["Thailand", "Indonesia", "Vietnam", "Malaysia", "Singapore", "Cambodia", "Myanmar", "Philippines"],
  "east-asia":   ["Japan", "Korea", "China", "Taiwan"],
  europe:        ["Italy", "Spain", "Portugal", "Greece", "Turkey", "France", "Germany", "Netherlands", "UK", "Czech", "Poland", "Croatia", "Switzerland", "Austria", "Hungary", "Serbia", "Ireland", "Scotland", "Belgium"],
  "middle-east": ["UAE", "Oman", "Qatar", "Jordan", "Bahrain", "Saudi Arabia"],
  americas:      ["USA", "Mexico", "Brazil", "Canada", "Peru", "Colombia", "Argentina", "Chile"],
  africa:        ["Morocco", "Kenya", "South Africa", "Egypt", "Tanzania", "Ethiopia"],
};

const INDIA_SUB_KW: Record<string, string[]> = {
  north:     ["delhi", "agra", "varanasi", "amritsar", "lucknow", "mathura", "golden-triangle", "golden triangle", "orchha", "khajuraho", "pushkar", "ajmer"],
  south:     ["kerala", "goa", "karnataka", "tamil", "ooty", "coorg", "mysore", "hampi", "pondicherry", "kodaikanal", "munnar", "alleppey", "wayanad", "kochi", "varkala", "gokarna", "chikmagalur", "thekkady", "mangalore", "madurai", "hyderabad", "vizag", "kanyakumari", "rameswaram", "tirupati", "mahabalipuram"],
  northeast: ["meghalaya", "sikkim", "assam", "tawang", "darjeeling", "kaziranga", "shillong", "cherrapunji", "majuli"],
  rajasthan: ["rajasthan", "jaipur", "jodhpur", "jaisalmer", "udaipur", "pushkar", "ranthambore", "mount abu", "ajmer"],
  himalayas: ["kashmir", "ladakh", "manali", "shimla", "spiti", "dharamshala", "kasol", "jibhi", "tirthan", "rishikesh", "haridwar", "auli", "mussoorie", "nainital", "chopta", "bir billing", "mukteshwar"],
  coastal:   ["goa", "gokarna", "andaman", "pondicherry", "kanyakumari", "vizag", "diu", "rameswaram", "puri", "varkala", "kovalam"],
};

// 1=budget, 2=mid, 3=comfortable, 4=luxury
const COUNTRY_BUDGET_TIER: Record<string, number> = {
  India: 1,
  Thailand: 2, Indonesia: 2, Vietnam: 1, Malaysia: 2, Cambodia: 1,
  Myanmar: 1, Singapore: 3, Japan: 3, Korea: 3, China: 2, Taiwan: 2,
  Italy: 3, Spain: 3, Portugal: 2, Greece: 3, Turkey: 2, France: 4,
  Germany: 3, Netherlands: 3, Croatia: 2, Switzerland: 4,
  UAE: 4, Oman: 3, Qatar: 4, Jordan: 3,
  USA: 3, Mexico: 2, Brazil: 2, Canada: 3, Peru: 2,
  Morocco: 2, Kenya: 3, "South Africa": 3, Egypt: 2, Tanzania: 3,
};

const BUDGET_TIER_IDX: Record<string, number> = {
  budget: 1, midrange: 2, comfort: 3, luxury: 4, nolimit: 0,
};

const DUR_RANGE: Record<string, [number, number]> = {
  weekend: [2, 3], short: [4, 5], week: [6, 7], extended: [8, 14], long: [15, 99],
};

const TRAV_KW: Record<string, string[]> = {
  solo:    ["solo", "backpack", "solo trip"],
  couple:  ["couple", "honeymoon", "romantic"],
  family:  ["family", "kids", "child"],
  friends: ["group", "friends", "gang"],
};

function makeHaystack(post: BlogPost): string {
  return [
    post.slug.replace(/-/g, " "),
    post.destination.toLowerCase(),
    post.category.toLowerCase(),
    (post.tags || []).join(" ").toLowerCase(),
    post.title.toLowerCase(),
    (post.country || "india").toLowerCase(),
  ].join(" ");
}

function extractDays(duration: string): number {
  const m = (duration || "").match(/(\d+)/);
  return m ? parseInt(m[1]) : 3;
}

function scorePost(post: BlogPost, prefs: Prefs): ScoredPost {
  const h = makeHaystack(post);
  const postCountry = post.country || "India";
  const reasons: Reason[] = [];
  let score = 0;

  /* 1. Experience — 0–35 pts */
  if (prefs.experiences.length === 0) {
    score += 35;
  } else {
    const hits = prefs.experiences.filter(exp =>
      (EXP_KW[exp] || []).some(kw => h.includes(kw))
    );
    score += (hits.length / prefs.experiences.length) * 35;
    const hitLabels = hits.map(e => EXP_OPTS.find(o => o.id === e)?.label ?? e);
    reasons.push({
      cat: "Experience",
      label: hitLabels.length > 0 ? hitLabels.join(", ") : "No experience match",
      hit: hits.length > 0,
    });
  }

  /* 2. Region — 0–25 pts (+5 bonus for India sub-region) */
  if (!prefs.region || prefs.region === "anywhere") {
    score += 25;
    reasons.push({ cat: "Region", label: "Anywhere", hit: true });
  } else {
    const allowed = REGION_COUNTRIES[prefs.region] || [];
    const regionHit = allowed.some(c => postCountry.toLowerCase() === c.toLowerCase());
    if (regionHit) {
      score += 25;
      if (prefs.region === "india" && prefs.indianRegion && prefs.indianRegion !== "all") {
        const subKW = INDIA_SUB_KW[prefs.indianRegion] || [];
        if (subKW.some(kw => h.includes(kw))) score += 5;
      }
    }
    const regionLabel = REGION_OPTS.find(o => o.id === prefs.region)?.label ?? prefs.region;
    reasons.push({ cat: "Region", label: regionLabel, hit: regionHit });
  }

  /* 3. Duration — 0–20 pts */
  if (!prefs.duration || prefs.duration === "flexible") {
    score += 20;
    reasons.push({ cat: "Duration", label: "Any duration", hit: true });
  } else {
    const d = extractDays(post.duration);
    const [min, max] = DUR_RANGE[prefs.duration] || [0, 99];
    let ds = 0;
    let dHit = false;
    if (d >= min && d <= max)              { ds = 20; dHit = true; }
    else if (d >= min - 1 && d <= max + 1) { ds = 12; dHit = true; }
    else if (d >= min - 2 && d <= max + 2) { ds = 5; }
    score += ds;
    const durLabel = DURATION_OPTS.find(o => o.id === prefs.duration)?.label ?? prefs.duration;
    reasons.push({ cat: "Duration", label: `${post.duration} (${durLabel})`, hit: dHit });
  }

  /* 4. Budget — 0–10 pts */
  if (!prefs.budget || prefs.budget === "nolimit") {
    score += 10;
    reasons.push({ cat: "Budget", label: "No limit", hit: true });
  } else {
    const userTier = BUDGET_TIER_IDX[prefs.budget] || 2;
    const postTier = COUNTRY_BUDGET_TIER[postCountry] ?? 2;
    let bs = 0;
    let bHit = false;
    if (postTier <= userTier)           { bs = 10; bHit = true; }
    else if (postTier === userTier + 1) { bs = 5; }
    score += bs;
    const budLabel = BUDGET_OPTS.find(o => o.id === prefs.budget)?.label ?? prefs.budget;
    reasons.push({ cat: "Budget", label: budLabel, hit: bHit });
  }

  /* 5. Traveller — 4 pts neutral, 10 pts on keyword match */
  if (!prefs.traveller || prefs.traveller === "undecided") {
    score += 10;
    reasons.push({ cat: "Travel style", label: "Any style", hit: true });
  } else {
    const kws = TRAV_KW[prefs.traveller] || [];
    const tHit = kws.some(kw => h.includes(kw));
    score += tHit ? 10 : 4;
    const tLabel = TRAVELLER_OPTS.find(o => o.id === prefs.traveller)?.label ?? prefs.traveller;
    reasons.push({ cat: "Travel style", label: tLabel, hit: tHit });
  }

  const pct = Math.max(40, Math.min(99, Math.round(score)));
  return { post, pct, reasons };
}

/* ═══════════════════════════════════════════════════
   BADGE COLOUR
═══════════════════════════════════════════════════ */
function badgeCls(pct: number): string {
  if (pct >= 85) return "bg-emerald-500 text-white";
  if (pct >= 70) return "bg-amber-400 text-ink";
  return "bg-gray-400 text-white";
}

/* ═══════════════════════════════════════════════════
   INTRO SCREEN
═══════════════════════════════════════════════════ */
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="relative h-[45vh] min-h-[260px] overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
          alt="World travel destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-cream" />
        <div className="absolute bottom-6 left-0 right-0 text-center px-4">
          <span className="inline-block text-xs tracking-[0.18em] uppercase text-gold font-medium bg-ink/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            Free &middot; {blogPosts.length}+ destinations &middot; No signup required
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 max-w-[560px] mx-auto w-full text-center">
        <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light text-ink leading-tight mb-4">
          Find Your Perfect Trip
        </h1>
        <p className="text-base text-muted font-light leading-relaxed mb-3 max-w-md">
          Answer 5 questions. We&apos;ll match you with the best guides from{" "}
          <strong className="text-ink font-medium">{DESTINATIONS_DISPLAY} destinations</strong>{" "}
          — scored to your exact preferences.
        </p>
        <p className="text-xs text-muted/60 font-light mb-8">
          {DESTINATIONS_DISPLAY} destinations &middot; Personalized match scores &middot; No signup required &middot; Free forever
        </p>

        <div className="grid grid-cols-4 gap-4 mb-10 w-full max-w-xs">
          {([[DESTINATIONS_DISPLAY, "Destinations"], ["5", "Questions"], ["<1min", "Takes"], ["Free", "Forever"]] as [string, string][]).map(
            ([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="font-serif text-xl font-light text-ink">{val}</p>
                <p className="text-[0.56rem] tracking-[0.1em] uppercase text-muted/60 mt-0.5 leading-tight">
                  {lbl}
                </p>
              </div>
            )
          )}
        </div>

        <button
          onClick={onStart}
          className="w-full max-w-[360px] py-4 bg-gold text-ink text-sm font-medium tracking-[0.12em] uppercase rounded-[2px] hover:bg-gold-dark hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Start the Quiz &rarr;
        </button>
        <p className="text-xs text-muted/50 mt-4 font-light">
          Personalized match scores &middot; No signup required
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   RESULT CARD
═══════════════════════════════════════════════════ */
function ResultCard({
  sp,
  openWhy,
  setOpenWhy,
}: {
  sp: ScoredPost;
  openWhy: string | null;
  setOpenWhy: (s: string | null) => void;
}) {
  const { post, pct, reasons } = sp;
  const isOpen = openWhy === post.slug;
  const hitReasons = reasons.filter(r => r.hit);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-parchment-2 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Hero image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        {/* Match badge */}
        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg ${badgeCls(pct)}`}>
          {pct}% Match
        </span>
        {/* Destination overlay */}
        <div className="absolute bottom-3 left-3 right-12">
          <p className="font-serif text-base text-white font-light leading-tight truncate">
            {post.destination}
          </p>
          <p className="text-white/65 text-[0.68rem] mt-0.5">
            {post.duration} &middot; {post.category}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        {hitReasons.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hitReasons.slice(0, 3).map((r, i) => (
              <span
                key={i}
                className="text-[0.6rem] bg-gold/10 text-gold-dark border border-gold/20 px-2 py-0.5 rounded-full font-medium leading-tight"
              >
                {r.cat === "Experience" ? r.label.split(",")[0].trim() : r.label} &#10003;
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <Link
              href={`/blog/${post.slug}`}
              className="flex-1 text-center py-2.5 bg-gold text-ink text-[0.72rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-gold-dark hover:text-white transition-all duration-200"
            >
              Read Guide &rarr;
            </Link>
            <button
              onClick={() => setOpenWhy(isOpen ? null : post.slug)}
              className="py-2.5 px-3 text-[0.7rem] text-muted border border-parchment-2 rounded-[1px] hover:border-gold/50 hover:text-ink transition-all duration-200 whitespace-nowrap"
            >
              Why {pct}%?
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 pt-3 border-t border-parchment-2 space-y-2">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 w-3 h-3 rounded-full flex-shrink-0 ${
                      r.hit ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  />
                  <p className="text-[0.68rem] text-muted font-light leading-snug">
                    <span className="font-medium text-ink/70">{r.cat}:</span> {r.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   FILTER CHIPS
═══════════════════════════════════════════════════ */
function FilterChips({
  prefs,
  onRemove,
}: {
  prefs: Prefs;
  onRemove: (key: keyof Prefs) => void;
}) {
  const chips: { key: keyof Prefs; label: string }[] = [];

  if (prefs.experiences.length > 0)
    chips.push({
      key: "experiences",
      label: prefs.experiences.map(e => EXP_OPTS.find(o => o.id === e)?.label ?? e).join(", "),
    });
  if (prefs.region && prefs.region !== "anywhere")
    chips.push({ key: "region", label: REGION_OPTS.find(o => o.id === prefs.region)?.label ?? prefs.region });
  if (prefs.duration && prefs.duration !== "flexible")
    chips.push({ key: "duration", label: DURATION_OPTS.find(o => o.id === prefs.duration)?.label ?? prefs.duration });
  if (prefs.budget && prefs.budget !== "nolimit")
    chips.push({ key: "budget", label: BUDGET_OPTS.find(o => o.id === prefs.budget)?.label ?? prefs.budget });
  if (prefs.traveller && prefs.traveller !== "undecided")
    chips.push({ key: "traveller", label: TRAVELLER_OPTS.find(o => o.id === prefs.traveller)?.label ?? prefs.traveller });

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6 items-center">
      <span className="text-[0.66rem] text-muted/60 uppercase tracking-[0.1em] mr-1">Filters:</span>
      {chips.map(c => (
        <button
          key={c.key as string}
          onClick={() => onRemove(c.key)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/30 text-ink text-xs font-medium rounded-full hover:bg-gold/20 transition-colors"
        >
          {c.label}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   RESULTS SCREEN
═══════════════════════════════════════════════════ */
function ResultsScreen({
  results,
  prefs,
  showMore,
  setShowMore,
  openWhy,
  setOpenWhy,
  onRetake,
  onRemoveFilter,
  onWhatsApp,
  onCopy,
  copied,
}: {
  results: ScoredPost[];
  prefs: Prefs;
  showMore: boolean;
  setShowMore: (b: boolean) => void;
  openWhy: string | null;
  setOpenWhy: (s: string | null) => void;
  onRetake: () => void;
  onRemoveFilter: (key: keyof Prefs) => void;
  onWhatsApp: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  const top8 = results.slice(0, 8);
  const next20 = results.slice(8, 28);
  const totalMatched = results.filter(r => r.pct >= 60).length;

  const summaryParts: string[] = [];
  if (prefs.experiences.length > 0)
    summaryParts.push(
      prefs.experiences.slice(0, 2).map(e => EXP_OPTS.find(o => o.id === e)?.label ?? e).join(" & ")
    );
  if (prefs.region && prefs.region !== "anywhere")
    summaryParts.push(REGION_OPTS.find(o => o.id === prefs.region)?.label ?? prefs.region);
  if (prefs.duration && prefs.duration !== "flexible")
    summaryParts.push(DURATION_OPTS.find(o => o.id === prefs.duration)?.label ?? prefs.duration);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-ink py-12 px-6 md:px-12 text-center">
        <p className="text-[0.6rem] tracking-[0.22em] uppercase text-gold font-medium mb-3">
          Your Results
        </p>
        <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight mb-2">
          Your Top Matches
        </h1>
        {summaryParts.length > 0 && (
          <p className="text-sm text-white/45 font-light mb-3 tracking-wide">
            Based on {summaryParts.join(" \u00b7 ")}
          </p>
        )}
        <p className="text-sm text-white/50 font-light">
          We scored <strong className="text-white/80">{results.length} destinations</strong> against
          your preferences.{" "}
          <strong className="text-white/70">{totalMatched}</strong> scored 60%+.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-10">
        <FilterChips prefs={prefs} onRemove={onRemoveFilter} />

        {/* Top 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {top8.map(sp => (
            <ResultCard key={sp.post.slug} sp={sp} openWhy={openWhy} setOpenWhy={setOpenWhy} />
          ))}
        </div>

        {/* Load more */}
        {next20.length > 0 && (
          <div className="mb-10">
            {!showMore ? (
              <button
                onClick={() => setShowMore(true)}
                className="w-full py-3.5 border border-parchment-2 text-muted text-sm font-light rounded-xl hover:border-gold hover:text-gold transition-all duration-200"
              >
                See {results.length - 8} more destinations &rarr;
              </button>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {next20.map(sp => (
                  <ResultCard key={sp.post.slug} sp={sp} openWhy={openWhy} setOpenWhy={setOpenWhy} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Share */}
        <div className="bg-white rounded-2xl border border-parchment-2 p-6 mb-6">
          <p className="text-sm font-medium text-ink mb-4 text-center">
            Share your matches with friends
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={onWhatsApp}
              className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#1ebe5d] transition-colors shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.737 5.476 2.027 7.782L0 32l8.452-2.014A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.785-1.856l-.487-.289-5.014 1.196 1.22-4.876-.318-.503A13.262 13.262 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.293-9.876c-.4-.2-2.365-1.166-2.731-1.3-.367-.133-.634-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.622-3.213-1.98-1.188-1.057-1.99-2.362-2.224-2.762-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.234-2.966-.325-.78-.655-.674-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.866 1.633 4.133c.2.267 2.82 4.3 6.833 6.033.954.412 1.699.658 2.28.843.957.305 1.83.262 2.52.159.769-.114 2.365-.967 2.698-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
              </svg>
              Share on WhatsApp
            </button>
            <button
              onClick={onCopy}
              className="flex items-center gap-2 px-5 py-3 border border-parchment-2 text-muted text-sm font-medium rounded-lg hover:border-gold hover:text-gold transition-colors"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="flex-1 py-4 bg-gold text-ink text-sm font-medium tracking-[0.1em] uppercase text-center rounded-[2px] hover:bg-gold-dark hover:text-white transition-all duration-200 shadow-sm"
          >
            Still not sure? Plan My Free Trip &rarr;
          </Link>
          <button
            onClick={onRetake}
            className="flex-1 py-4 border border-parchment-2 text-muted text-sm font-light text-center rounded-[2px] hover:border-gold hover:text-gold transition-all duration-200"
          >
            &#8635; Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN QUIZ CLIENT
═══════════════════════════════════════════════════ */
export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [prefs, setPrefs] = useState<Prefs>(INIT);
  const [showMore, setShowMore] = useState(false);
  const [openWhy, setOpenWhy] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const results = useMemo((): ScoredPost[] => {
    if (step < 6) return [];
    return blogPosts
      .map(p => scorePost(p, prefs))
      .sort((a, b) => b.pct - a.pct);
  }, [step, prefs]);

  const canNext = useMemo(() => {
    if (step === 1) return prefs.experiences.length > 0;
    if (step === 2) return !!prefs.region;
    if (step === 3) return !!prefs.duration;
    if (step === 4) return !!prefs.budget;
    if (step === 5) return !!prefs.traveller;
    return true;
  }, [step, prefs]);

  function toggleExp(id: string) {
    setPrefs(p => {
      const has = p.experiences.includes(id);
      if (has) return { ...p, experiences: p.experiences.filter(e => e !== id) };
      if (p.experiences.length >= 3) return p;
      return { ...p, experiences: [...p.experiences, id] };
    });
  }

  function removeFilter(key: keyof Prefs) {
    setPrefs(p => ({
      ...p,
      ...(key === "experiences" ? { experiences: [] }                       : {}),
      ...(key === "region"      ? { region: "anywhere", indianRegion: "all" } : {}),
      ...(key === "duration"    ? { duration: "flexible" }                   : {}),
      ...(key === "budget"      ? { budget: "nolimit" }                      : {}),
      ...(key === "traveller"   ? { traveller: "undecided" }                 : {}),
    }));
  }

  function shareWhatsApp() {
    const top3 = results
      .slice(0, 3)
      .map(r => `${r.post.destination} (${r.pct}% match)`)
      .join(", ");
    const text = encodeURIComponent(
      `My top travel matches from IncredibleItinerary: ${top3}\u{1F30D}\nFind yours at: https://www.incredibleitinerary.com/quiz`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  function copyLink() {
    const top4 = results.slice(0, 4).map(r => r.post.slug).join(",");
    navigator.clipboard
      ?.writeText(`https://www.incredibleitinerary.com/quiz?r=${top4}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  }

  /* Intro */
  if (step === 0) return <IntroScreen onStart={() => setStep(1)} />;

  /* Results */
  if (step === 6) {
    return (
      <ResultsScreen
        results={results}
        prefs={prefs}
        showMore={showMore}
        setShowMore={setShowMore}
        openWhy={openWhy}
        setOpenWhy={setOpenWhy}
        onRetake={() => { setStep(0); setPrefs(INIT); setShowMore(false); setOpenWhy(null); }}
        onRemoveFilter={removeFilter}
        onWhatsApp={shareWhatsApp}
        onCopy={copyLink}
        copied={copied}
      />
    );
  }

  /* Questions 1–5 */
  const STEP_TITLES = [
    "",
    "What kind of experience are you looking for?",
    "Which region excites you most?",
    "How many days do you have?",
    "What’s your budget per person per day?",
    "Who are you travelling with?",
  ];
  const STEP_SUBS = [
    "",
    "Select up to 3 that excite you most",
    "Pick one region — you can adjust after seeing results",
    "How long is your trip?",
    "Per person per day, roughly",
    "This helps us match the right vibe",
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1 bg-parchment-2">
          <div
            className="h-full bg-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-8 pb-28">
        {/* Nav row */}
        <div className="flex items-center justify-between pt-6 mb-8">
          <button
            onClick={() => (step > 1 ? setStep(s => s - 1) : setStep(0))}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors py-2 pr-4 min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <div className="text-center">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-gold font-medium">
              Step {step} of 5
            </p>
            <div className="flex gap-1.5 mt-1.5 justify-center">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className={`h-1 w-5 rounded-full transition-all duration-300 ${i <= step ? "bg-gold" : "bg-parchment-2"}`}
                />
              ))}
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-serif text-[clamp(1.4rem,3.5vw,2.2rem)] font-light text-ink leading-tight">
            {STEP_TITLES[step]}
          </h2>
          <p className="text-sm text-muted font-light mt-2">{STEP_SUBS[step]}</p>
        </div>

        {/* Q1: Experience (multi-select, max 3) */}
        {step === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {EXP_OPTS.map(opt => {
              const sel = prefs.experiences.includes(opt.id);
              const maxed = !sel && prefs.experiences.length >= 3;
              return (
                <button
                  key={opt.id}
                  onClick={() => !maxed && toggleExp(opt.id)}
                  aria-pressed={sel}
                  className={`relative text-left p-4 rounded-xl border-2 transition-all duration-200 min-h-[90px] ${
                    sel
                      ? "border-gold bg-gold/10 shadow-sm"
                      : maxed
                      ? "border-parchment-2 bg-parchment-2/30 opacity-40 cursor-not-allowed"
                      : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-sm cursor-pointer"
                  }`}
                >
                  <span className="text-2xl block mb-2 leading-none">{opt.emoji}</span>
                  <p className="text-sm font-medium text-ink leading-tight">{opt.label}</p>
                  <p className="text-[0.62rem] text-muted font-light mt-0.5 leading-snug">{opt.desc}</p>
                  {sel && (
                    <span className="absolute top-2 right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Q2: Region (single-select + India sub-question) */}
        {step === 2 && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {REGION_OPTS.map(opt => {
                const sel = prefs.region === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setPrefs(p => ({ ...p, region: opt.id }))}
                    aria-pressed={sel}
                    className={`text-left p-3.5 rounded-xl border-2 transition-all duration-200 ${
                      sel
                        ? "border-gold bg-gold/10 shadow-sm"
                        : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-sm"
                    }`}
                  >
                    <span className="text-xl block mb-1.5 leading-none">{opt.emoji}</span>
                    <p className="text-sm font-medium text-ink leading-tight">{opt.label}</p>
                    <p className="text-[0.6rem] text-muted font-light mt-0.5 leading-snug">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
            {prefs.region === "india" && (
              <div className="mt-4 p-4 bg-white rounded-xl border border-parchment-2">
                <p className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-3">
                  Any specific region in India?
                </p>
                <div className="flex flex-wrap gap-2">
                  {INDIA_SUB_OPTS.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setPrefs(p => ({ ...p, indianRegion: s.id }))}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 min-h-[36px] ${
                        prefs.indianRegion === s.id
                          ? "bg-gold/20 border-gold text-ink"
                          : "border-parchment-2 bg-parchment text-muted hover:border-gold/40"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Q3: Duration */}
        {step === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DURATION_OPTS.map(opt => {
              const sel = prefs.duration === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setPrefs(p => ({ ...p, duration: opt.id }))}
                  aria-pressed={sel}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 min-h-[90px] ${
                    sel
                      ? "border-gold bg-gold/10 shadow-sm"
                      : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl block mb-2 leading-none">{opt.emoji}</span>
                  <p className="text-sm font-medium text-ink">{opt.label}</p>
                  <p className="text-[0.62rem] text-muted font-light mt-0.5">{opt.desc}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* Q4: Budget */}
        {step === 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BUDGET_OPTS.map(opt => {
              const sel = prefs.budget === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setPrefs(p => ({ ...p, budget: opt.id }))}
                  aria-pressed={sel}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 min-h-[72px] ${
                    sel
                      ? "border-gold bg-gold/10 shadow-sm"
                      : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5 leading-none">{opt.emoji}</span>
                  <div className="text-left">
                    <p className="text-sm font-medium text-ink">{opt.label}</p>
                    <p className="text-[0.62rem] text-muted font-light mt-0.5 leading-snug">{opt.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Q5: Traveller type */}
        {step === 5 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TRAVELLER_OPTS.map(opt => {
              const sel = prefs.traveller === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setPrefs(p => ({ ...p, traveller: opt.id }))}
                  aria-pressed={sel}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 min-h-[90px] ${
                    sel
                      ? "border-gold bg-gold/10 shadow-sm"
                      : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl block mb-2 leading-none">{opt.emoji}</span>
                  <p className="text-sm font-medium text-ink leading-tight">{opt.label}</p>
                  <p className="text-[0.62rem] text-muted font-light mt-0.5 leading-snug">{opt.desc}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* Continue / Submit */}
        <div className="mt-10">
          <button
            disabled={!canNext}
            onClick={() => (step === 5 ? setStep(6) : setStep(s => s + 1))}
            className={`w-full py-4 rounded-[2px] text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 ${
              canNext
                ? "bg-gold text-ink hover:bg-gold-dark hover:text-white shadow-md hover:shadow-lg"
                : "bg-parchment-2 text-muted/40 cursor-not-allowed"
            }`}
          >
            {step === 5 ? "Find My Matches →" : "Continue →"}
          </button>
          {step === 1 && prefs.experiences.length === 0 && (
            <p className="text-center text-[0.7rem] text-muted/60 mt-3">
              Select at least 1 experience to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
