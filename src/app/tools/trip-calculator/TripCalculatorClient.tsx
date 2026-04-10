"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

/* ─────────────────────── Types ─────────────────────── */
type Tier = "budget" | "mid" | "luxury";

interface CostRange {
  min: number;
  max: number;
}

interface DestinationData {
  name: string;
  slug: string; // blog slug
  country: "India" | "Thailand" | "Japan" | "Italy";
  currency: string;
  currencySymbol: string;
  usdRate: number; // 1 local unit = X USD
  costs: Record<Tier, CostRange>;
}

/* ─────────────── Cost Data (per person per day) ─────────────── */

const INDIA_COSTS: Record<Tier, CostRange> = {
  budget: { min: 2000, max: 3500 },
  mid: { min: 4000, max: 8000 },
  luxury: { min: 10000, max: 25000 },
};

const THAILAND_COSTS: Record<Tier, CostRange> = {
  budget: { min: 800, max: 1500 },
  mid: { min: 2000, max: 4000 },
  luxury: { min: 6000, max: 15000 },
};

const JAPAN_COSTS: Record<Tier, CostRange> = {
  budget: { min: 8000, max: 12000 },
  mid: { min: 15000, max: 25000 },
  luxury: { min: 40000, max: 80000 },
};

const ITALY_COSTS: Record<Tier, CostRange> = {
  budget: { min: 60, max: 100 },
  mid: { min: 120, max: 200 },
  luxury: { min: 300, max: 500 },
};

const COUNTRY_META: Record<
  string,
  { currency: string; symbol: string; usdRate: number; costs: Record<Tier, CostRange> }
> = {
  India: { currency: "INR", symbol: "₹", usdRate: 0.012, costs: INDIA_COSTS },
  Thailand: { currency: "THB", symbol: "\u0E3F", usdRate: 0.028, costs: THAILAND_COSTS },
  Japan: { currency: "JPY", symbol: "\u00A5", usdRate: 0.0067, costs: JAPAN_COSTS },
  Italy: { currency: "EUR", symbol: "€", usdRate: 1.08, costs: ITALY_COSTS },
};

/* Fine-tuned per-destination multipliers — keeps data realistic */
const DEST_MULTIPLIER: Record<string, number> = {
  "Kashmir": 1.15, "Golden Triangle": 1.1, "Rajasthan": 1.05, "Kerala": 1.0,
  "Goa": 0.95, "Varanasi": 0.8, "Andaman Islands": 1.2, "Leh Ladakh": 1.3,
  "Manali": 0.9, "Coorg": 0.85, "Rishikesh & Haridwar": 0.8,
  "Jibhi & Tirthan Valley": 0.85, "Hampi": 0.75, "Spiti Valley": 1.25,
  "Meghalaya": 0.95, "Sikkim": 1.0, "Pondicherry": 0.85, "Gujarat": 0.8,
  "Amritsar": 0.75, "Dharamshala": 0.85, "Udaipur": 0.95, "Jaipur": 0.9,
  "Ooty": 0.85, "Darjeeling": 0.9, "Mysore": 0.8, "Gokarna": 0.8,
  "Shimla": 0.85, "Kasol": 0.8, "Nainital": 0.85, "Agra": 0.85,
  "Jodhpur": 0.85, "Jaisalmer": 0.9, "Khajuraho": 0.75, "Orchha": 0.7,
  "Mussoorie": 0.85, "Auli": 1.0, "Kodaikanal": 0.85, "Jim Corbett": 1.1,
  "Ranthambore": 1.1, "Alleppey": 0.95, "Munnar": 0.85, "Wayanad": 0.85,
  "Pushkar": 0.75, "Madurai": 0.75, "Hyderabad": 0.8, "Vizag": 0.8,
  "Kanyakumari": 0.75, "Rameswaram": 0.7, "Mount Abu": 0.8, "Diu": 0.75,
  "Dwarka": 0.75, "Lonavala": 0.8, "Kaziranga": 1.0, "Shillong": 0.9,
  "Mahabaleshwar": 0.8, "Tawang": 1.1, "Sundarbans": 0.95,
  "Valley of Flowers": 1.1, "Majuli": 0.8,
  "Bangkok": 1.0, "Phuket": 1.15, "Chiang Mai": 0.85,
  "Tokyo": 1.15, "Kyoto": 1.05, "Osaka": 1.0,
  "Rome": 1.1, "Florence": 1.05, "Amalfi Coast": 1.25,
};

/* ─── Full destination list ─── */
const DESTINATIONS: DestinationData[] = [
  // India (59)
  ...([
    ["Kashmir", "kashmir-6-days"], ["Golden Triangle", "golden-triangle-7-days"],
    ["Rajasthan", "rajasthan-7-days"], ["Kerala", "kerala-5-days"],
    ["Goa", "goa-3-days"], ["Varanasi", "varanasi-3-days"],
    ["Andaman Islands", "andaman-5-days"], ["Leh Ladakh", "leh-ladakh-7-days"],
    ["Manali", "manali-5-days"], ["Coorg", "coorg-3-days"],
    ["Rishikesh & Haridwar", "rishikesh-haridwar-3-days"],
    ["Jibhi & Tirthan Valley", "jibhi-tirthan-valley-3-days"],
    ["Hampi", "hampi-3-days"], ["Spiti Valley", "spiti-valley-7-days"],
    ["Meghalaya", "meghalaya-5-days"], ["Sikkim", "sikkim-6-days"],
    ["Pondicherry", "pondicherry-3-days"], ["Gujarat", "gujarat-7-days"],
    ["Amritsar", "amritsar-2-days"], ["Dharamshala", "dharamshala-3-days"],
    ["Udaipur", "udaipur-3-days"], ["Jaipur", "jaipur-3-days"],
    ["Ooty", "ooty-3-days"], ["Darjeeling", "darjeeling-4-days"],
    ["Mysore", "mysore-3-days"], ["Gokarna", "gokarna-3-days"],
    ["Shimla", "shimla-3-days"], ["Kasol", "kasol-3-days"],
    ["Nainital", "nainital-3-days"], ["Agra", "agra-2-days"],
    ["Jodhpur", "jodhpur-3-days"], ["Jaisalmer", "jaisalmer-3-days"],
    ["Khajuraho", "khajuraho-2-days"], ["Orchha", "orchha-2-days"],
    ["Mussoorie", "mussoorie-3-days"], ["Auli", "auli-3-days"],
    ["Kodaikanal", "kodaikanal-3-days"], ["Jim Corbett", "jim-corbett-3-days"],
    ["Ranthambore", "ranthambore-3-days"], ["Alleppey", "alleppey-3-days"],
    ["Munnar", "munnar-3-days"], ["Wayanad", "wayanad-3-days"],
    ["Pushkar", "pushkar-2-days"], ["Madurai", "madurai-2-days"],
    ["Hyderabad", "hyderabad-3-days"], ["Vizag", "vizag-3-days"],
    ["Kanyakumari", "kanyakumari-2-days"], ["Rameswaram", "rameswaram-2-days"],
    ["Mount Abu", "mount-abu-2-days"], ["Diu", "diu-2-days"],
    ["Dwarka", "dwarka-2-days"], ["Lonavala", "lonavala-2-days"],
    ["Kaziranga", "kaziranga-3-days"], ["Shillong", "shillong-3-days"],
    ["Mahabaleshwar", "mahabaleshwar-2-days"], ["Tawang", "tawang-4-days"],
    ["Sundarbans", "sundarbans-3-days"], ["Valley of Flowers", "valley-of-flowers-4-days"],
    ["Majuli", "majuli-3-days"],
  ] as [string, string][]).map(([name, slug]) => {
    const m = COUNTRY_META.India;
    return {
      name, slug, country: "India" as const,
      currency: m.currency, currencySymbol: m.symbol, usdRate: m.usdRate,
      costs: scaleCosts(m.costs, DEST_MULTIPLIER[name] ?? 1),
    };
  }),
  // Thailand (3)
  ...([
    ["Bangkok", "bangkok-4-days"], ["Phuket", "phuket-5-days"],
    ["Chiang Mai", "chiang-mai-4-days"],
  ] as [string, string][]).map(([name, slug]) => {
    const m = COUNTRY_META.Thailand;
    return {
      name, slug, country: "Thailand" as const,
      currency: m.currency, currencySymbol: m.symbol, usdRate: m.usdRate,
      costs: scaleCosts(m.costs, DEST_MULTIPLIER[name] ?? 1),
    };
  }),
  // Japan (3)
  ...([
    ["Tokyo", "tokyo-5-days"], ["Kyoto", "kyoto-4-days"],
    ["Osaka", "osaka-3-days"],
  ] as [string, string][]).map(([name, slug]) => {
    const m = COUNTRY_META.Japan;
    return {
      name, slug, country: "Japan" as const,
      currency: m.currency, currencySymbol: m.symbol, usdRate: m.usdRate,
      costs: scaleCosts(m.costs, DEST_MULTIPLIER[name] ?? 1),
    };
  }),
  // Italy (3)
  ...([
    ["Rome", "rome-4-days"], ["Florence", "florence-3-days"],
    ["Amalfi Coast", "amalfi-coast-4-days"],
  ] as [string, string][]).map(([name, slug]) => {
    const m = COUNTRY_META.Italy;
    return {
      name, slug, country: "Italy" as const,
      currency: m.currency, currencySymbol: m.symbol, usdRate: m.usdRate,
      costs: scaleCosts(m.costs, DEST_MULTIPLIER[name] ?? 1),
    };
  }),
];

function scaleCosts(
  base: Record<Tier, CostRange>,
  multiplier: number,
): Record<Tier, CostRange> {
  const r = (v: number) => Math.round(v * multiplier);
  return {
    budget: { min: r(base.budget.min), max: r(base.budget.max) },
    mid: { min: r(base.mid.min), max: r(base.mid.max) },
    luxury: { min: r(base.luxury.min), max: r(base.luxury.max) },
  };
}

const COUNTRIES = ["India", "Thailand", "Japan", "Italy"] as const;

/* Breakdown percentages */
const BREAKDOWN: Record<string, number> = {
  Accommodation: 0.35,
  Food: 0.25,
  Transport: 0.15,
  Activities: 0.18,
  Miscellaneous: 0.07,
};

const TIER_LABELS: Record<Tier, string> = {
  budget: "Budget",
  mid: "Mid-Range",
  luxury: "Luxury",
};

const TIER_ICONS: Record<Tier, string> = {
  budget: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z",
  mid: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  luxury: "M12 1L9 9H1l6.5 4.7L5 22l7-5.3L19 22l-2.5-8.3L23 9h-8L12 1z",
};

/* ─────────────── Animated Counter ─────────────── */
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 800,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const start = display;
    const diff = value - start;
    if (diff === 0) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ─────────────── Main Component ─────────────── */
export default function TripCalculatorClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  /* Step 1 */
  const [selectedCountry, setSelectedCountry] = useState<string>("India");
  const [selectedDest, setSelectedDest] = useState<DestinationData | null>(null);
  const [destSearch, setDestSearch] = useState("");

  /* Step 2 */
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<Tier>("mid");

  /* Results ref for scroll */
  const resultsRef = useRef<HTMLDivElement>(null);

  const countryDests = useMemo(
    () => DESTINATIONS.filter((d) => d.country === selectedCountry),
    [selectedCountry],
  );

  const filteredDests = useMemo(() => {
    if (!destSearch.trim()) return countryDests;
    const q = destSearch.toLowerCase();
    return countryDests.filter((d) => d.name.toLowerCase().includes(q));
  }, [countryDests, destSearch]);

  /* grouped for the grid */
  const grouped = useMemo(() => {
    const map: Record<string, DestinationData[]> = {};
    for (const c of COUNTRIES) map[c] = DESTINATIONS.filter((d) => d.country === c);
    return map;
  }, []);

  /* Compute results */
  const results = useMemo(() => {
    if (!selectedDest) return null;
    const c = selectedDest.costs[tier];
    const avgDaily = Math.round((c.min + c.max) / 2);
    const perPerson = avgDaily * days;
    const groupTotal = perPerson * travelers;

    const breakdown = Object.entries(BREAKDOWN).map(([label, pct]) => ({
      label,
      perDay: Math.round(avgDaily * pct),
      total: Math.round(perPerson * pct),
    }));

    /* comparison across tiers */
    const comparison = (["budget", "mid", "luxury"] as Tier[]).map((t) => {
      const tc = selectedDest.costs[t];
      const avg = Math.round((tc.min + tc.max) / 2);
      return { tier: t, daily: avg, total: avg * days * travelers };
    });

    const budgetTotal = comparison[0].total;
    const luxuryTotal = comparison[2].total;
    const savings = luxuryTotal - budgetTotal;

    const usd = selectedDest.usdRate;
    const perPersonUsd = Math.round(perPerson * usd);
    const groupTotalUsd = Math.round(groupTotal * usd);

    return {
      avgDaily,
      perPerson,
      groupTotal,
      breakdown,
      comparison,
      savings,
      perPersonUsd,
      groupTotalUsd,
      symbol: selectedDest.currencySymbol,
      currency: selectedDest.currency,
      usd,
    };
  }, [selectedDest, tier, days, travelers]);

  const handleSelectDest = useCallback((d: DestinationData) => {
    setSelectedDest(d);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCalculate = useCallback(() => {
    setStep(3);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleReset = useCallback(() => {
    setStep(1);
    setSelectedDest(null);
    setDestSearch("");
    setDays(5);
    setTravelers(2);
    setTier("mid");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* Max bar width for comparison chart */
  const maxComparison = results
    ? Math.max(...results.comparison.map((c) => c.total))
    : 1;

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="min-h-screen bg-cream pt-[72px]">
        {/* ── Hero ── */}
        <section className="bg-parchment py-16 md:py-20 px-6 md:px-12 text-center">
          <div className="max-w-[780px] mx-auto">
            <span className="section-label">Free Travel Tool</span>
            <h1 className="serif-title text-[clamp(2rem,4vw,3.2rem)] text-ink mb-3">
              Trip Cost Calculator
            </h1>
            <p className="text-sm text-muted font-light max-w-[520px] mx-auto leading-relaxed">
              Estimate your travel budget for {DESTINATIONS.length} destinations across 4 countries.
              Real cost data, three budget tiers, instant breakdown.
            </p>

            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    if (s === 1) handleReset();
                    else if (s === 2 && selectedDest) setStep(2);
                    else if (s === 3 && selectedDest) handleCalculate();
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                    step === s
                      ? "bg-gold text-ink shadow-[0_4px_12px_rgba(201,169,110,0.3)]"
                      : step > s
                        ? "bg-gold/20 text-gold-dark"
                        : "bg-parchment-2 text-muted"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step === s
                        ? "bg-ink text-gold"
                        : step > s
                          ? "bg-gold-dark text-white"
                          : "bg-muted/30 text-muted"
                    }`}
                  >
                    {step > s ? "✓" : s}
                  </span>
                  {s === 1 ? "Destination" : s === 2 ? "Details" : "Results"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────── STEP 1 — Select Destination ─────────── */}
        {step === 1 && (
          <section className="py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-[1100px] mx-auto">
              {/* Country tabs */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {COUNTRIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setSelectedCountry(c); setDestSearch(""); }}
                    className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 border ${
                      selectedCountry === c
                        ? "bg-gold border-gold text-ink shadow-[0_4px_16px_rgba(201,169,110,0.25)]"
                        : "border-parchment-2 text-muted hover:border-gold-light hover:text-gold-dark"
                    }`}
                  >
                    {c}{" "}
                    <span className="opacity-60">({grouped[c]?.length})</span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <input
                    type="text"
                    value={destSearch}
                    onChange={(e) => setDestSearch(e.target.value)}
                    placeholder={`Search ${selectedCountry} destinations...`}
                    className="form-field pl-10"
                  />
                </div>
              </div>

              {/* Destination grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filteredDests.map((d) => (
                  <button
                    key={d.slug}
                    onClick={() => handleSelectDest(d)}
                    className="group relative bg-white border border-parchment-2 rounded-lg px-4 py-4 text-left transition-all duration-300 hover:border-gold hover:shadow-[0_8px_24px_rgba(201,169,110,0.15)] hover:-translate-y-0.5"
                  >
                    <span className="block font-serif text-base text-ink group-hover:text-gold-dark transition-colors duration-200">
                      {d.name}
                    </span>
                    <span className="block text-[11px] text-muted mt-1 tracking-wide">
                      from {d.currencySymbol}
                      {d.costs.budget.min.toLocaleString("en-IN")}
                      /day
                    </span>
                    <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-parchment flex items-center justify-center text-muted text-[10px] group-hover:bg-gold group-hover:text-ink transition-all duration-200">
                      &rarr;
                    </span>
                  </button>
                ))}
              </div>

              {filteredDests.length === 0 && (
                <p className="text-center text-muted text-sm mt-8">
                  No destinations found. Try a different search term.
                </p>
              )}
            </div>
          </section>
        )}

        {/* ─────────── STEP 2 — Trip Details ─────────── */}
        {step === 2 && selectedDest && (
          <section className="py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-[780px] mx-auto">
              {/* Selected destination badge */}
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedDest.name}, {selectedDest.country}
                </span>
              </div>

              {/* Days */}
              <div className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 mb-6">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-4 font-medium">
                  Number of Days
                </label>
                <div className="flex items-center gap-6">
                  <input
                    type="range"
                    min={1}
                    max={21}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="flex-1 h-2 bg-parchment-2 rounded-full appearance-none cursor-pointer accent-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(201,169,110,0.4)] [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDays(Math.max(1, days - 1))}
                      className="w-8 h-8 rounded-full border border-parchment-2 flex items-center justify-center text-muted hover:border-gold hover:text-gold-dark transition-colors"
                    >
                      &minus;
                    </button>
                    <span className="font-serif text-2xl text-ink w-12 text-center">
                      {days}
                    </span>
                    <button
                      onClick={() => setDays(Math.min(21, days + 1))}
                      className="w-8 h-8 rounded-full border border-parchment-2 flex items-center justify-center text-muted hover:border-gold hover:text-gold-dark transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-xs text-muted mt-2">
                  {days === 1 ? "1 day" : `${days} days`}{" "}
                  {days <= 3 ? "(weekend trip)" : days <= 7 ? "(short trip)" : days <= 14 ? "(extended trip)" : "(grand tour)"}
                </p>
              </div>

              {/* Travelers */}
              <div className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 mb-6">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-4 font-medium">
                  Number of Travelers
                </label>
                <div className="flex items-center gap-4 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <button
                      key={n}
                      onClick={() => setTravelers(n)}
                      className={`w-11 h-11 rounded-full text-sm font-medium transition-all duration-200 ${
                        travelers === n
                          ? "bg-gold text-ink shadow-[0_4px_12px_rgba(201,169,110,0.3)]"
                          : "border border-parchment-2 text-muted hover:border-gold hover:text-gold-dark"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Tier */}
              <div className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 mb-8">
                <label className="block text-xs tracking-[0.15em] uppercase text-muted mb-4 font-medium">
                  Budget Tier
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {(["budget", "mid", "luxury"] as Tier[]).map((t) => {
                    const cost = selectedDest.costs[t];
                    return (
                      <button
                        key={t}
                        onClick={() => setTier(t)}
                        className={`relative rounded-xl p-5 border-2 text-center transition-all duration-300 group ${
                          tier === t
                            ? "border-gold bg-gold/5 shadow-[0_8px_24px_rgba(201,169,110,0.15)]"
                            : "border-parchment-2 hover:border-gold/50"
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 mx-auto mb-2 transition-colors duration-200 ${
                            tier === t ? "text-gold-dark" : "text-muted/50 group-hover:text-gold"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={TIER_ICONS[t]} />
                        </svg>
                        <span
                          className={`block text-sm font-medium mb-1 transition-colors ${
                            tier === t ? "text-ink" : "text-muted"
                          }`}
                        >
                          {TIER_LABELS[t]}
                        </span>
                        <span className="block text-[11px] text-muted">
                          {selectedDest.currencySymbol}
                          {cost.min.toLocaleString("en-IN")}
                          {" – "}
                          {selectedDest.currencySymbol}
                          {cost.max.toLocaleString("en-IN")}
                          /day
                        </span>
                        {tier === t && (
                          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-ink text-[10px] flex items-center justify-center font-bold">
                            &#10003;
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculate button */}
              <div className="text-center">
                <button onClick={handleCalculate} className="btn-gold text-sm">
                  Calculate My Trip Cost
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ─────────── STEP 3 — Results ─────────── */}
        {step === 3 && selectedDest && results && (
          <section ref={resultsRef} className="py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-[960px] mx-auto">
              {/* Header summary */}
              <div className="text-center mb-10">
                <span className="section-label">Your Estimated Budget</span>
                <h2 className="serif-title text-[clamp(1.8rem,3.5vw,2.8rem)] text-ink mb-1">
                  {selectedDest.name}
                  <span className="text-gold mx-2">&middot;</span>
                  {days} {days === 1 ? "Day" : "Days"}
                  <span className="text-gold mx-2">&middot;</span>
                  {travelers} {travelers === 1 ? "Traveler" : "Travelers"}
                </h2>
                <p className="text-sm text-muted">
                  {TIER_LABELS[tier]} tier &middot; {selectedDest.country}
                </p>
              </div>

              {/* Big total cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Per person */}
                <div className="bg-white border border-parchment-2 rounded-xl p-8 text-center group hover:shadow-[0_12px_36px_rgba(201,169,110,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <span className="block text-xs tracking-[0.15em] uppercase text-muted mb-3">
                    Per Person
                  </span>
                  <span className="block font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-none">
                    <AnimatedNumber
                      value={results.perPerson}
                      prefix={results.symbol}
                    />
                  </span>
                  <span className="block text-sm text-muted mt-2">
                    &asymp; $
                    <AnimatedNumber value={results.perPersonUsd} /> USD
                  </span>
                </div>
                {/* Group total */}
                <div className="bg-ink rounded-xl p-8 text-center group hover:shadow-[0_12px_36px_rgba(22,16,8,0.25)] hover:-translate-y-1 transition-all duration-300">
                  <span className="block text-xs tracking-[0.15em] uppercase text-gold-light mb-3">
                    Group Total ({travelers} travelers)
                  </span>
                  <span className="block font-serif text-[clamp(2rem,4vw,3rem)] text-gold leading-none">
                    <AnimatedNumber
                      value={results.groupTotal}
                      prefix={results.symbol}
                    />
                  </span>
                  <span className="block text-sm text-gold-light/70 mt-2">
                    &asymp; $
                    <AnimatedNumber value={results.groupTotalUsd} /> USD
                  </span>
                </div>
              </div>

              {/* Daily breakdown */}
              <div className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 mb-8">
                <h3 className="font-serif text-xl text-ink mb-6">
                  Daily Breakdown{" "}
                  <span className="text-sm text-muted font-sans font-light">
                    (per person)
                  </span>
                </h3>
                <div className="space-y-4">
                  {results.breakdown.map((item) => {
                    const pct = (item.perDay / results.avgDaily) * 100;
                    return (
                      <div key={item.label} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-ink font-medium">
                            {item.label}
                          </span>
                          <span className="text-sm text-muted">
                            {results.symbol}
                            {item.perDay.toLocaleString("en-IN")}/day &middot;{" "}
                            {results.symbol}
                            {item.total.toLocaleString("en-IN")} total
                          </span>
                        </div>
                        <div className="h-2.5 bg-parchment rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tier comparison */}
              <div className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 mb-8">
                <h3 className="font-serif text-xl text-ink mb-6">
                  Budget vs Mid-Range vs Luxury
                </h3>
                <div className="space-y-5">
                  {results.comparison.map((c) => {
                    const pct = (c.total / maxComparison) * 100;
                    const isActive = c.tier === tier;
                    return (
                      <div key={c.tier}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-sm font-medium ${
                              isActive ? "text-gold-dark" : "text-muted"
                            }`}
                          >
                            {TIER_LABELS[c.tier]}
                            {isActive && (
                              <span className="ml-2 text-[10px] bg-gold/20 text-gold-dark px-2 py-0.5 rounded-full uppercase tracking-wider">
                                selected
                              </span>
                            )}
                          </span>
                          <span className="text-sm text-ink font-medium">
                            {results.symbol}
                            {c.total.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <div className="h-4 bg-parchment rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ease-out ${
                              isActive
                                ? "bg-gradient-to-r from-gold to-gold-dark"
                                : "bg-parchment-2"
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Savings callout */}
                {results.savings > 0 && (
                  <div className="mt-6 bg-teal/5 border border-teal/20 rounded-lg p-4 flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-teal mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-ink">
                      <span className="font-medium">
                        Save {results.symbol}
                        {results.savings.toLocaleString("en-IN")}
                      </span>{" "}
                      by choosing Budget over Luxury for this trip (
                      {travelers} travelers, {days} days).
                    </p>
                  </div>
                )}
              </div>

              {/* CTA section */}
              <div className="bg-parchment rounded-xl p-8 md:p-10 text-center mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-muted mb-3">
                  Want a precise quote?
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  This is an estimate based on our research
                </h3>
                <p className="text-sm text-muted font-light max-w-md mx-auto mb-6 leading-relaxed">
                  Get a free personalised travel plan with exact hotel options, transfers, and activity
                  bookings tailored to your dates and preferences.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-gold text-sm"
                >
                  Get a Free Personalised Plan
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Link to destination guide */}
              <div className="text-center mb-4">
                <a
                  href={`/blog/${selectedDest.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gold-dark hover:text-ink transition-colors font-medium"
                >
                  Read the full {selectedDest.name} travel guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Lead capture CTA */}
              <div className="bg-parchment border border-parchment-2 rounded-2xl p-8 text-center mb-8">
                <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-dark font-medium mb-2">Want more detail?</p>
                <h3 className="font-serif text-xl text-ink mb-2">
                  Get a free custom itinerary for {selectedDest.name}
                </h3>
                <p className="text-sm text-muted font-light mb-5 max-w-[440px] mx-auto">
                  Your dates, your budget, your style. We&apos;ll build a day-by-day plan with hotel picks, transport, and real costs — free within 24 hours.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-gold"
                >
                  Plan My {selectedDest.name} Trip &rarr;
                </button>
              </div>

              {/* Start over */}
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-xs text-muted hover:text-gold-dark transition-colors tracking-wide uppercase"
                >
                  &larr; Start Over
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
