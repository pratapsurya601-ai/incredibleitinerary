"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const AMALFI_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "towns",      emoji: "🏘️", label: "Where to Stay" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "✨", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
];

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Amalfi Coast 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Amalfi Coast in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">\u25CF</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function AmalfiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\💰", label: "Budget", sub: "\u20AC80\u2013130/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Mid-Range", sub: "\u20AC150\u2013280/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "✨", label: "Luxury", sub: "\u20AC400+/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AMALFI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Amalfi Coast" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="amalfi coast positano colorful houses cliff italy"
            fallback="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=85"
            alt="Positano colorful houses cascading down cliffs on the Amalfi Coast"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Amalfi Coast 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Coastal & Scenic
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Amalfi Coast in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs in EUR &amp; USD, Path of the Gods tips &mdash; and the mistakes that ruin most Amalfi Coast trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>\\ Italy</span>
              <span>&middot;</span>
              <span>\ 4 Days</span>
              <span>&middot;</span>
              <span>\💰 From \u20AC80/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Positano looks like a screensaver and costs like a five-star hotel. Stay in Amalfi town or Minori for half the price, same views, better food. This is the single best piece of advice in this entire guide.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHERE TO STAY ── */}
          <section id="towns" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\ Where to Stay</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This choice determines your entire trip budget. Choose wisely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Positano", emoji: "✨", bg: "bg-purple-50 border-purple-200", th: "text-purple-800",
                  rows: [["Best for", "Instagram, luxury, honeymoons"], ["Budget", "\u20AC150\u2013600+/night ($162\u2013648+ USD)"], ["Pros", "Most photogenic town, best beach bars, glamorous atmosphere"], ["Cons", "Most expensive on the coast, stairs everywhere, very touristy"]],
                  note: "Every restaurant charges a premium. Even a basic lunch is \u20AC20\u201330/person. Budget travellers: visit for the day, don\u2019t sleep here." },
                { title: "Amalfi Town / Minori", emoji: "\u2728", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for", "Best value, central location, real Italian feel"], ["Budget", "\u20AC60\u2013200/night ($65\u2013216 USD)"], ["Pros", "Ferry hub for all towns + Capri, great restaurants, Duomo"], ["Cons", "Less photogenic than Positano, smaller beaches"]],
                  note: "Minori is 10 minutes from Amalfi by bus and 30\u201350% cheaper. Excellent local restaurants, better beach, and a genuinely Italian atmosphere." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in Amalfi town or Minori, day-trip to Positano by ferry (\u20AC8 / $8.60 USD, 25 minutes). You get the Positano photo without the Positano hotel bill.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="📍" label="Duration" value="4 Days" />
            <StatCard icon="\💰" label="Budget From" value="\u20AC80/day" />
            <StatCard icon="\\uFE0F" label="Best Months" value="May\u2013Jun, Sep\u2013Oct" />
            <StatCard icon="\u2708\uFE0F" label="Nearest Airport" value="Naples (NAP)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\ The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u20AC80\u2013130/day ($86\u2013140 USD)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: B&amp;B or hostel in Amalfi town or Minori &middot; \u20AC40\u201380/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive Positano + Beach + Sunset"
                  items={[
                    "From Naples: SITA bus from Sorrento (\u20AC2.50 / $2.70 USD, 1.5 hours). The SITA bus along the Amalfi Coast is cheap, frequent, and genuinely terrifying \u2014 cliffside hairpin turns with a driver who\u2019s done this 10,000 times. Take the ferry if you value your nerves.",
                    "Alternative: Ferry from Sorrento to Positano (\u20AC18 / $19.50 USD, 35 min). More expensive but scenic and stress-free.",
                    "Drop bags at your Amalfi/Minori accommodation, then bus or ferry to Positano for the afternoon.",
                    "Walk down through Positano\u2019s stepped streets to Spiaggia Grande beach. Free to walk, sunbed rental \u20AC15\u201325 / $16\u201327 USD.",
                    "Explore the colourful streets \u2014 ceramic shops, lemon everything, bougainvillea-draped alleys.",
                    "5:30pm: Find a terrace bar for sunset aperitivo. Spritz \u20AC8\u201312 / $8.60\u201313 USD with a million-euro view.",
                    "Ferry back to Amalfi (\u20AC8 / $8.60 USD). Dinner at a trattoria away from the waterfront \u2014 \u20AC12\u201318/person."
                  ]}
                  cost="\u20AC45\u201375 / $49\u201381 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Ferry to Amalfi Town + Duomo + Ravello"
                  items={[
                    "9am: Explore Amalfi town \u2014 the medieval Maritime Republic that once rivalled Venice.",
                    "Amalfi Cathedral / Duomo (\u20AC3 / $3.25 USD) \u2014 Arab-Norman architecture, stunning cloister. 30 minutes.",
                    "Walk the narrow streets off the main drag. Paper Museum (\u20AC4.50 / $4.85 USD) \u2014 Amalfi invented European paper-making.",
                    "11:30am: Bus to Ravello (\u20AC1.30 / $1.40 USD, 25 min, every 30 min). Mountain town 350m above the sea.",
                    "Villa Rufolo (\u20AC10 / $10.80 USD) \u2014 the garden terrace has the most famous view on the entire coast. Wagner composed here.",
                    "Villa Cimbrone (\u20AC10 / $10.80 USD) \u2014 the Terrace of Infinity is equally spectacular. Worth doing both.",
                    "Lunch in Ravello \u2014 cheaper than coastal towns. Pizza \u20AC8\u201312 / $8.60\u201313 USD.",
                    "Bus back to Amalfi. Evening: seafood pasta at a harbour-side restaurant \u2014 \u20AC12\u201318/person."
                  ]}
                  cost="\u20AC40\u201365 / $43\u201370 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Path of the Gods Hike (The Best Day)"
                  items={[
                    "7:30am: Bus from Amalfi to Bomerano (via Agerola, \u20AC2.50 / $2.70 USD, 45 min). The trailhead is in Bomerano.",
                    "Path of the Gods (Sentiero degli Dei): 7km, 4\u20135 hours, moderate difficulty. The trail hugs 500m cliffs with views over the entire coastline.",
                    "Bring 2 litres of water, sun protection, snacks, and proper hiking shoes. No flip-flops \u2014 the path has loose rocks and steep descents.",
                    "Trail ends in Nocelle (small village above Positano). Take the local bus or walk 1,500 steps down to Positano.",
                    "Reward: cold lemon granita (\u20AC3 / $3.25 USD) at the bottom. You\u2019ve earned it.",
                    "Swim at Positano beach to cool off after the hike.",
                    "Ferry back to Amalfi (\u20AC8 / $8.60 USD). Dinner: splurge on fresh-caught seafood \u2014 \u20AC18\u201325/person."
                  ]}
                  cost="\u20AC30\u201350 / $32\u201354 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Capri Day Trip by Ferry"
                  items={[
                    "8:30am: Ferry from Amalfi to Capri (\u20AC22\u201325 / $24\u201327 USD one way, 1 hour). Buy return ticket at the port.",
                    "Arrive at Marina Grande. Skip the funicular queue if short on time \u2014 bus to Anacapri (\u20AC2.20 / $2.40 USD).",
                    "Anacapri: Monte Solaro chairlift (\u20AC12 / $13 USD return) for a 360\u00B0 panorama. The highest point on the island.",
                    "Walk down through Anacapri \u2014 quieter, more local, better lunch prices than Capri town.",
                    "Lunch: panino or salad \u20AC8\u201315 / $8.60\u201316 USD. Avoid the waterfront restaurants.",
                    "Optional: Blue Grotto (\u20AC18 entry + \u20AC15 rowboat / $20 + $16 USD). Magical blue light, 5 minutes inside. Skip if seas are rough \u2014 check conditions at the port.",
                    "3pm: Explore Capri town \u2014 Piazzetta, Gardens of Augustus (\u20AC1 / $1.10 USD), Via Krupp viewpoint.",
                    "5pm ferry back to Amalfi. Final dinner: limoncello and fresh pasta at your favourite local spot."
                  ]}
                  cost="\u20AC60\u2013100 / $65\u2013108 USD (excl. accommodation)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC320\u2013520 / $346\u2013562 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2728</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; \u20AC150\u2013280/day ($162\u2013302 USD)</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 3-4 star hotel in Amalfi or boutique in Positano &middot; \u20AC100\u2013200/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive Positano + Beach Day + Sunset Terrace"
                  items={[
                    "Private transfer from Naples airport (\u20AC120\u2013150 / $130\u2013162 USD for the car, split between group). Scenic coastal drive, no bus stress.",
                    "Check into your hotel. Afternoon at Positano\u2019s Spiaggia Grande \u2014 sunbed + umbrella at a beach club (\u20AC25\u201340 / $27\u201343 USD).",
                    "Swim in the remarkably clear Tyrrhenian Sea. The water colour is genuinely unreal.",
                    "4pm: Wander Positano\u2019s stepped alleys. Buy hand-painted ceramics and lemon soap from local artisans.",
                    "6pm: Sunset aperitivo at Franco\u2019s Bar (terrace overlooking the coast) \u2014 Spritz \u20AC12\u201315 / $13\u201316 USD.",
                    "Dinner: Da Vincenzo \u2014 family-run, excellent seafood pasta. \u20AC30\u201345/person. Book ahead in summer.",
                    "After dinner: stroll the illuminated streets. Positano at night is magical."
                  ]}
                  cost="\u20AC100\u2013160 / $108\u2013173 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Amalfi Duomo + Ravello Gardens + Cooking Class"
                  items={[
                    "Ferry to Amalfi town (\u20AC8 / $8.60 USD). Morning exploration of the Duomo + cloister (\u20AC3 / $3.25 USD).",
                    "Walk the Valley of the Mills (free, 30 min) \u2014 an abandoned paper mill overgrown with ferns. Atmospheric and uncrowded.",
                    "11am: Bus to Ravello (\u20AC1.30 / $1.40 USD).",
                    "Villa Rufolo (\u20AC10 / $10.80 USD) + Villa Cimbrone (\u20AC10 / $10.80 USD) \u2014 both gardens are exceptional. Don\u2019t skip either.",
                    "Lunch at Ravello: Ristorante Vittoria for local Neapolitan cuisine. \u20AC20\u201330/person.",
                    "3pm: Cooking class in Ravello or Amalfi (\u20AC60\u201390 / $65\u201397 USD). Learn handmade pasta + lemon desserts. Lunch included.",
                    "Evening: leisurely dinner in Amalfi town. Seafood risotto + local Falanghina wine \u2014 \u20AC25\u201340/person."
                  ]}
                  cost="\u20AC110\u2013170 / $119\u2013184 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Path of the Gods + Positano Beach Afternoon"
                  items={[
                    "7:30am: Bus to Bomerano trailhead (\u20AC2.50 / $2.70 USD from Amalfi).",
                    "Path of the Gods hike: 7km, 4\u20135 hours. Bring at least 2L water and sun protection. The views are the best thing on the Amalfi Coast.",
                    "The trail is well-marked but has exposed sections with sheer cliff drops. Not for those with vertigo.",
                    "Arrive in Nocelle by early afternoon. Bus or walk down to Positano.",
                    "2pm: Beach time at Spiaggia di Fornillo (quieter than Spiaggia Grande). Sunbed \u20AC20\u201330 / $22\u201332 USD at Da Ferdinando.",
                    "Late lunch: lemon pasta at Lo Guarracino (cliff terrace above the beach) \u2014 \u20AC18\u201325/person.",
                    "Evening: sunset boat tour along the coast (\u20AC35\u201350 / $38\u201354 USD per person) \u2014 see the coastline from the water at golden hour."
                  ]}
                  cost="\u20AC80\u2013130 / $86\u2013140 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Capri Island Day Trip"
                  items={[
                    "8:30am: Ferry from Amalfi to Capri (\u20AC22 / $24 USD one way).",
                    "Private boat tour around the island (\u20AC50\u201380 / $54\u201386 USD per person shared, 2 hours). Faraglioni rocks, sea caves, swimming stops.",
                    "Blue Grotto (\u20AC18 + \u20AC15 rowboat / $20 + $16 USD) if conditions are good. The glowing blue water is otherworldly.",
                    "Anacapri: Monte Solaro chairlift (\u20AC12 / $13 USD) for the best panorama in the Gulf of Naples.",
                    "Lunch: La Fontelina beach club at the base of the Faraglioni \u2014 iconic, \u20AC40\u201360/person. Worth the splurge once.",
                    "3pm: Capri town \u2014 the Piazzetta, Augustus Gardens, window shopping the designer boutiques.",
                    "5pm ferry return. Limoncello for \u20AC15 near the ferry terminal is a tourist trap. Buy from shops that actually make it from local lemons \u2014 \u20AC5 and better.",
                    "Farewell dinner: your best local trattoria. Fresh catch of the day + limoncello toast."
                  ]}
                  cost="\u20AC120\u2013200 / $130\u2013216 USD (excl. accommodation)" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC600\u20131,120 / $648\u20131,210 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u20AC400+/day ($432+ USD)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star hotel in Positano or Ravello &middot; \u20AC350\u2013800/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Transfer + Positano + Sunset Champagne"
                  items={[
                    "Private luxury transfer from Naples (\u20AC200 / $216 USD) in a Mercedes sedan along the coast road.",
                    "Check into Le Sirenuse, Il San Pietro, or Hotel Palazzo Murat in Positano.",
                    "Private beach cabana at Spiaggia Grande or exclusive beach at Il San Pietro (hotel guests only).",
                    "4pm: Private guided Positano walking tour (\u20AC60\u201380 / $65\u201386 per person). Local history, hidden alleys, artisan workshops.",
                    "6pm: Champagne sunset on your hotel terrace or at Franco\u2019s Bar (\u20AC30\u201350 for premium champagne).",
                    "Dinner: La Sponda at Le Sirenuse \u2014 1 Michelin star, 400 candles, extraordinary. \u20AC120\u2013180/person. Book months ahead."
                  ]}
                  cost="\u20AC350\u2013550 / $378\u2013594 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Private Boat to Amalfi + Ravello Concert + Villa Dinner"
                  items={[
                    "9am: Private boat from Positano to Amalfi (\u20AC200\u2013350 / $216\u2013378 for the boat, seats 4\u20136). Swimming stops at hidden coves along the way.",
                    "Amalfi town: private Duomo tour + Paper Museum with guide (\u20AC40 / $43 per person).",
                    "Private car to Ravello. Villa Rufolo + Villa Cimbrone with art history guide (\u20AC60 / $65 per person).",
                    "Lunch: Rossellinis (2 Michelin stars, Palazzo Avino hotel) \u2014 tasting menu \u20AC150\u2013200/person.",
                    "If visiting June\u2013September: Ravello Music Festival at Villa Rufolo \u2014 open-air classical concert with sea views. Tickets \u20AC30\u201380 / $32\u201386.",
                    "Dinner: Belvedere Restaurant in Ravello with full panoramic terrace. \u20AC80\u2013120/person."
                  ]}
                  cost="\u20AC400\u2013650 / $432\u2013702 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Guided Path of the Gods + Spa Afternoon"
                  items={[
                    "7:30am: Private guide for Path of the Gods (\u20AC80\u2013120 / $86\u2013130 for 2 people). Botanist or historian guide adds depth to the scenery.",
                    "Packed gourmet breakfast from your hotel for a cliffside picnic.",
                    "Trail ends in Nocelle. Private car transfer back to Positano (arranged by guide).",
                    "1pm: Light lunch at your hotel or La Tagliata (mountain restaurant with farm-to-table Amalfi cuisine, \u20AC40\u201350/person).",
                    "3pm: Spa afternoon. Le Sirenuse Spa or Monastero Santa Rosa (\u20AC100\u2013200 / $108\u2013216 for treatments). Infinity pool overlooking the coast.",
                    "Evening: Private sunset yacht cruise (\u20AC250\u2013400 / $270\u2013432 for 2\u20134 people) with prosecco and aperitivo served on board.",
                    "Dinner: Da Adolfo \u2014 boat-access-only beach restaurant. \u20AC50\u201370/person. Uniquely Amalfi."
                  ]}
                  cost="\u20AC400\u2013600 / $432\u2013648 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Private Capri Yacht + Blue Grotto VIP"
                  items={[
                    "9am: Private yacht from Positano to Capri (\u20AC500\u2013800 / $540\u2013864 for the boat, seats 4\u20138). Swim stops at Faraglioni rocks and Li Galli islands.",
                    "Blue Grotto VIP timing \u2014 arrive before 10am for shortest queues. Entry \u20AC18 + \u20AC15 rowboat / $20 + $16 USD.",
                    "Dock at Marina Piccola. Private car to Anacapri for Monte Solaro.",
                    "Lunch: Il Riccio (1 Michelin star, beach club) \u2014 sea urchin pasta and Capri white wine. \u20AC80\u2013120/person.",
                    "Afternoon: Capri town shopping \u2014 Carthusia perfumes (made on the island since 1380), custom sandals made while you wait.",
                    "Return to Positano by private boat. Captain stops at the best sunset viewing spot on the water.",
                    "Final dinner: Il San Pietro\u2019s cliffside restaurant or Zass at Il San Pietro \u2014 \u20AC100\u2013150/person. A fitting farewell."
                  ]}
                  cost="\u20AC500\u2013800 / $540\u2013864 USD (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC1,600\u20133,200+ / $1,728\u20133,456+ USD including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">\💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">\u2728 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">\ Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\🏨 Accommodation (4N)", "\u20AC160\u2013320 / $173\u2013346", "\u20AC400\u2013800 / $432\u2013864", "\u20AC1,400\u20133,200 / $1,512\u20133,456"],
                    ["\ Food & Drinks", "\u20AC60\u2013100 / $65\u2013108", "\u20AC140\u2013240 / $151\u2013259", "\u20AC350\u2013600 / $378\u2013648"],
                    ["\u26F4\uFE0F Ferries & Transport", "\u20AC40\u201360 / $43\u201365", "\u20AC60\u2013100 / $65\u2013108", "\u20AC300\u2013600 / $324\u2013648"],
                    ["\ Activities & Tickets", "\u20AC30\u201360 / $32\u201365", "\u20AC80\u2013150 / $86\u2013162", "\u20AC200\u2013400 / $216\u2013432"],
                    ["\ Tours & Experiences", "\u20AC0\u201330 / $0\u201332", "\u20AC60\u2013130 / $65\u2013140", "\u20AC250\u2013500 / $270\u2013540"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 4 days)</td>
                    {["\u20AC320\u2013520 / $346\u2013562", "\u20AC600\u20131,120 / $648\u20131,210", "\u20AC1,600\u20133,200+ / $1,728\u20133,456+"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in EUR (\u20AC) with USD ($) equivalents at 1 EUR = 1.08 USD. Prices are per person for 2026.
            </p>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Amalfi Coast &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore the Amalfi Coast&apos;s most stunning spots."
            spots={[
              { name: "Positano",             query: "positano colorful buildings cascading cliff mediterranean sea",    desc: "The most photographed town on the coast. Visit for the day but consider sleeping elsewhere to save money." },
              { name: "Path of the Gods",     query: "path of the gods amalfi coast hiking trail cliff ocean panoramic", desc: "7km cliffside hike with 500m drops to the sea below. The single best activity on the Amalfi Coast." },
              { name: "Ravello Gardens",      query: "ravello villa rufolo garden terrace sea view amalfi coast",        desc: "Mountain town 350m above the sea. Villa Rufolo and Villa Cimbrone have the coast's most famous viewpoints." },
              { name: "Blue Grotto Capri",    query: "blue grotto capri cave blue water light rowboat italy",            desc: "A sea cave where sunlight refracts through an underwater opening, creating impossibly blue glowing water." },
              { name: "Amalfi Cathedral",     query: "amalfi cathedral duomo facade steps arab norman architecture",     desc: "Arab-Norman cathedral in the heart of Amalfi town. The cloister and striped facade are architectural highlights." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="path of the gods hiking trail amalfi coast cliff sea view"
              fallback="https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&q=80"
              alt="Path of the Gods hiking trail along the Amalfi cliffs"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Path of the Gods &mdash; 7km of cliffside trail with 500-metre drops to the Mediterranean below. Start from Bomerano, end in Positano.
              </p>
            </div>
          </div>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="amalfi coast lemon pasta seafood mediterranean italian cuisine"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Amalfi Coast lemon pasta and seafood"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Lemon pasta at a cliffside trattoria in Amalfi: \u20AC14. Same dish on the Positano waterfront: \u20AC24. The lemons are the same. The markup is not.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Renting a car on the Amalfi Coast", desc: "The road is single-lane, the hairpin turns are blind, parking doesn\u2019t exist, and you\u2019ll spend 3 hours looking for a spot in Positano. Use ferries and buses. This is non-negotiable.", icon: "⚠️" },
                { title: "Only staying in Positano", desc: "Positano is the most expensive base. Amalfi town has better ferry connections and 30\u201340% lower prices. Minori has better food and is 50% cheaper. Visit Positano for the day.", icon: "⚠️" },
                { title: "Skipping the Path of the Gods", desc: "Many visitors only do beaches and towns. The hike is the best single experience on the Amalfi Coast. If you\u2019re remotely fit, do it. Start early, bring water.", icon: "⚠️" },
                { title: "Buying limoncello near ferry terminals", desc: "Limoncello for \u20AC15 near the ferry terminal is a tourist trap. Buy from shops that actually make it from local lemons \u2014 \u20AC5 and better. Ask locals for recommendations.", icon: "⚠️" },
                { title: "Visiting in August", desc: "Peak season, maximum crowds, highest prices, and 35\u00B0C+ heat. May\u2013June or September\u2013October is ideal: warm enough for swimming, 30\u201350% cheaper, half the crowds.", icon: "⚠️" },
                { title: "Not bringing cash", desc: "Many small restaurants, buses, and ferry ticket offices are cash-only. ATMs are scarce outside main towns. Withdraw \u20AC100\u2013200 at Naples airport or Sorrento before arriving on the coast.", icon: "⚠️" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\ Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\u26F4\uFE0F", title: "Ferry Over Bus, Always", desc: "Ferries between towns are faster, more scenic, and don\u2019t involve cliffside terror. Timetables at travelmar.it. Buy tickets at the port \u2014 no advance booking needed.", color: "bg-amber-50 border-amber-200" },
                { icon: "✦", title: "Lemon Everything", desc: "The Amalfi Coast grows Sfusato lemons the size of grapefruits. Lemon pasta, lemon granita, lemon delizia cake, limoncello. Eat it all. The supermarket lemons at home will never taste the same.", color: "bg-amber-50 border-amber-200" },
                { icon: "✦", title: "Hidden Beaches", desc: "Skip the main beaches. Spiaggia di Fornillo in Positano is 5 minutes from Spiaggia Grande but half the crowds. Marina di Praia (Praiano) is a tiny fjord beach between Amalfi and Positano.", color: "bg-teal-50 border-teal-200" },
                { icon: "✦", title: "Ravello Festival", desc: "June\u2013September: open-air classical concerts at Villa Rufolo with the sea 350m below. Tickets \u20AC30\u201380 / $32\u201386. One of the most atmospheric concert venues in the world.", color: "bg-teal-50 border-teal-200" },
                { icon: "✦", title: "Steps. So Many Steps.", desc: "Every town is vertical. Positano alone has 1,500+ steps from top to bottom. Forget heels, forget roller bags. Wear comfortable shoes, pack light, use a backpack.", color: "bg-rose-50 border-rose-200" },
                { icon: "✦", title: "Sunrise at Ravello", desc: "Most tourists visit Ravello midday. Go at dawn \u2014 Villa Cimbrone\u2019s Terrace of Infinity with sunrise light and zero crowds is a spiritual experience. Opens 9am officially, but the approach road has views.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Amalfi Coast itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Amalfi Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need for the Amalfi Coast?", a: "4 days is ideal. This gives you time for Positano, Amalfi town, Ravello, the Path of the Gods hike, and a Capri day trip. 3 days works if you skip either the hike or Capri." },
                { q: "How much does a 4-day Amalfi Coast trip cost?", a: "Budget: \u20AC80\u2013130/day ($86\u2013140 USD). Mid-range: \u20AC150\u2013280/day ($162\u2013302 USD). Luxury: \u20AC400+/day ($432+ USD). Positano is the most expensive base \u2014 staying in Amalfi or Minori saves 30\u201350%." },
                { q: "Where should I stay on the Amalfi Coast?", a: "Amalfi town for the best location and ferry connections. Minori for best value (30\u201350% cheaper). Positano for luxury and Instagram. Ravello for quiet hilltop elegance." },
                { q: "How do I get around the Amalfi Coast?", a: "Ferries are the best option \u2014 fast, scenic, \u20AC8\u201315 per trip. SITA buses are cheap (\u20AC2\u20133) but the cliffside road is narrow and stressful. Never rent a car \u2014 the road is single-lane with no parking." },
                { q: "Is the Path of the Gods hike difficult?", a: "Moderate difficulty. 7km, 4\u20135 hours, with steep descents and exposed cliff sections. Bring 2L water, sun protection, and proper shoes. Not suitable for those with severe vertigo." },
                { q: "Is the Blue Grotto worth visiting?", a: "Yes, if conditions are right. Entry costs \u20AC18 plus \u20AC15 for the rowboat. You get about 5 minutes inside. The blue water is genuinely magical. Skip on rough sea days. Go early morning for shorter queues." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Amalfi Coast"
            hotels={[
              { name: "Hostel of the Sun", type: "Budget Hostel \u00B7 Naples (base)", price: "From \u20AC30/night ($32)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/it/hostel-of-the-sun.html?aid=2820480" },
              { name: "Hotel Marina Riviera", type: "4-star \u00B7 Amalfi Town", price: "From \u20AC140/night ($151)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/it/marina-riviera.html?aid=2820480" },
              { name: "Le Sirenuse", type: "Luxury 5-star \u00B7 Positano", price: "From \u20AC600/night ($648)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/it/le-sirenuse.html?aid=2820480" },
            ]}
            activities={[
              { name: "Path of the Gods Guided Hike", duration: "5 hours", price: "From \u20AC35/person ($38)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=amalfi-coast&partner_id=PSZA5UI" },
              { name: "Capri Day Trip by Ferry", duration: "Full day", price: "From \u20AC22/person ($24)", badge: "Essential", url: "https://www.getyourguide.com/s/?q=amalfi-coast&partner_id=PSZA5UI" },
              { name: "Amalfi Coast Boat Tour", duration: "4 hours", price: "From \u20AC50/person ($54)", url: "https://www.getyourguide.com/s/?q=amalfi-coast&partner_id=PSZA5UI" },
              { name: "Amalfi Cooking Class with Limoncello", duration: "3 hours", price: "From \u20AC65/person ($70)", url: "https://www.getyourguide.com/s/?q=amalfi-coast&partner_id=PSZA5UI" },
            ]}
          />

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Italy Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rome \u2014 4 Day History & Culture Guide", href: "/blog/rome-4-days", soon: false },
                { label: "Florence \u2014 3 Day Renaissance Guide", href: "/blog/florence-3-days", soon: false },
                { label: "Browse All Travel Guides", href: "/blog", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View &rarr;</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="amalfi-coast-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
