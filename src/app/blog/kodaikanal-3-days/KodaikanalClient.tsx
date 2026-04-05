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


const KODAI_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "why-kodai",   emoji: "🏔️", label: "Why Kodaikanal" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "maps",        emoji: "🗺️", label: "Route Maps" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kodaikanal 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Kodaikanal in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
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

// ── Route Map Card ────────────────────────────────────────────────────────────
function RouteCard({ plan, day, stops, distance, url, note, color }: {
  plan: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{plan}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">
          {distance}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps →
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function KodaikanalClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹6k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "💑", label: "Couple", sub: "₹8k–18k total", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹18k–30k total", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KODAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kodaikanal" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kodaikanal lake tamil nadu misty hills india"
            fallback="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1600&q=85"
            alt="Kodaikanal lake surrounded by misty hills"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kodaikanal 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kodaikanal in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the things nobody tells you about the Princess of Hill Stations.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Tamil Nadu</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kodaikanal is Ooty&apos;s quieter, cooler sister — literally. At 2,133m it&apos;s higher, less crowded, and the mist rolls in at 4pm like clockwork. Most visitors rush through the same five viewpoints and leave thinking they&apos;ve seen it. They haven&apos;t. This guide fixes that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY KODAIKANAL ── */}
          <section id="why-kodai" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Why Kodaikanal Over Ooty</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everyone defaults to Ooty. Here&apos;s why Kodaikanal is the smarter pick for most travellers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Kodaikanal", emoji: "🌿", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Altitude","2,133m — higher, cooler"],["Crowd","30–40% less than Ooty"],["Vibe","Quiet, misty, nature-first"],["Best for","Couples, trekkers, solitude"]],
                  note: "Mist rolls in daily around 4pm. Plan outdoor activities before 3pm for clear views." },
                { title: "Ooty", emoji: "🚂", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Altitude","2,240m — slightly higher"],["Crowd","Heavy, especially weekends"],["Vibe","Touristy, commercial, family"],["Best for","Families, train enthusiasts"]],
                  note: "Nilgiri Mountain Railway is Ooty's trump card. Everything else, Kodaikanal does better." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Bottom line:</strong> If you want Instagram-worthy mist, solitude, and actual nature — Kodaikanal. If you want the toy train and easy family logistics — Ooty. Both are good. Kodaikanal is just more honest about being a hill station.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹5,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🚌" label="Nearest City" value="Madurai (120km)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            {/* Tab switcher */}
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
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Kodai Town Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near bus stand · ₹500–₹800/night · Local bus + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Lake Loop + Town Core"
                  items={[
                    "Arrive Kodaikanal by bus from Madurai (3.5hrs, ₹120) or Coimbatore (5hrs, ₹180)",
                    "Drop bags, walk to Kodai Lake — 10 min from bus stand. Don't pay for a boat yet.",
                    "Walk the full 5km lake loop on foot (free, 1.5hrs). Clockwise is better — less crowded second half.",
                    "2pm: Bryant Park (₹30 entry) — genuinely beautiful botanical garden, 45 min is enough",
                    "3:30pm: Coaker's Walk (₹20 entry) — 1km cliff-edge path with valley views. Go before 4pm mist.",
                    "Evening: Anna Salai for homemade chocolate — Cottage Crafts is the real deal, skip the tourist-trap shops near the bus stand",
                    "Dinner at a local mess — meals for ₹80–₹120. Royal Tibet for momos if you want variety (₹150)."
                  ]}
                  cost="₹400–₹600 excluding accommodation" />
                <DayCard day="Day 2" title="Pillar Rocks + Pine Forest + Guna Caves"
                  items={[
                    "8am: Hire a shared auto or take local bus to Pillar Rocks (₹30–₹50). Go early — clouds roll in by 11am.",
                    "Pillar Rocks (₹10 entry) — three massive granite pillars, 122m tall. 30 min viewing.",
                    "Walk to Guna Caves (Devil's Kitchen) nearby — free, 15 min walk. Fenced off but the ravine view is dramatic.",
                    "10:30am: Pine Forest (₹20 entry) — the most photographed spot in Kodaikanal. Tall, straight pine trees, misty paths. 45 min.",
                    "12pm: Walk back through Berijam Road area — local lunch at a roadside shop ₹80–₹100",
                    "3pm: Green Valley View (free) — deep valley with shola forest canopy. Quieter than Pillar Rocks.",
                    "Evening: Second round at Kodai Lake — boat ride now if you want one (₹150–₹300 for pedal boat, 30 min)"
                  ]}
                  cost="₹300–₹500 excluding accommodation" />
                <DayCard day="Day 3" title="Berijam Lake + Vattakanal + Departure"
                  items={[
                    "7am: Get forest permit from District Forest Office (free, reach by 9am — only 100 vehicles/day)",
                    "Berijam Lake (21km from town) — the most pristine lake in Tamil Nadu. Mirror-still water surrounded by shola forest. Take a shared jeep (₹150–₹200/person).",
                    "No food or shops at Berijam — carry water and snacks",
                    "Back by 12pm. Quick lunch in town.",
                    "1:30pm: Walk to Vattakanal (Little Israel) — 3km from Kodai Lake, feels like a completely different world. Quiet, misty, with the best cafe views in South India.",
                    "Tea at Altaf's Cafe or Cafe Cariappa in Vattakanal — ₹50–₹100",
                    "4pm: Back to town for departure bus. Madurai evening bus at 5pm or 6pm."
                  ]}
                  cost="₹350–₹550 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹4,500–₹6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COUPLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Kodai Lake Area</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Heritage hotel or boutique cottage · ₹1,500–₹3,500/night · Private taxi or bike rental</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Lake, Sunset & Chocolate Tasting"
                  items={[
                    "Arrive by cab from Madurai (₹2,500–₹3,000) or self-drive. Check in, settle.",
                    "Late morning: Kodai Lake boat ride together — rowing boat ₹300/hr (more romantic than pedal boat)",
                    "Walk the quieter eastern half of the lake loop — fewer vendors, better views",
                    "2pm: Lunch at Cloud Street or Pastry Corner — ₹400–₹600 for two",
                    "3pm: Coaker's Walk (₹20/person) — time it so you're there when the mist rolls in at 4pm. The valley disappears below you.",
                    "5pm: Chocolate tasting on Anna Salai — Cottage Crafts for proper handmade chocolate. Buy a box (₹200–₹400).",
                    "Dinner at Aby's for continental, or Muncheez for multi-cuisine — ₹600–₹900 for two"
                  ]}
                  cost="₹2,000–₹3,500 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Pillar Rocks + Pine Forest + Dolphins Nose"
                  items={[
                    "8am: Rent a bike (₹300–₹500/day) or hire a taxi for the day (₹1,200–₹1,800)",
                    "8:30am: Pillar Rocks — go first, before tour buses arrive at 10am. Morning light is best for photos.",
                    "9:30am: Guna Caves — 10 min from Pillar Rocks. The ravine is genuinely dramatic.",
                    "10:30am: Pine Forest — walk the misty trails together. Best light filters through at mid-morning.",
                    "12pm: Lunch at a local place near Perumal Malai junction — ₹200–₹350 for two",
                    "2pm: Dolphins Nose viewpoint — steep 3km descent (and climb back), but the cliff-edge view over the plains is the best in Kodaikanal. Not for vertigo sufferers.",
                    "5pm: Return to town. Evening walk along the lake as lights come on.",
                    "Dinner at Tava restaurant — ₹500–₹800 for two"
                  ]}
                  cost="₹2,500–₹4,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Berijam Lake + Vattakanal + Departure"
                  items={[
                    "7:30am: Forest permit for Berijam Lake (free, get it by 9am at collector's office)",
                    "Berijam Lake needs a forest permit (free, get it at the collector's office by 9am) but it's the most pristine lake in Tamil Nadu — mirror-still water surrounded by shola forest",
                    "Drive through Berijam Road — stops at Moier Point and Silent Valley viewpoints along the way",
                    "Back by 12pm. Check out.",
                    "1pm: Vattakanal (Little Israel) — 3km walk from Kodai Lake. Quiet, misty, with the best cafe views in South India. Lunch at a Vattakanal cafe (₹300–₹500 for two).",
                    "3pm: Last walk around Kodai Lake western shore — buy eucalyptus oil (₹100–₹150) as a souvenir",
                    "4:30pm: Depart for Madurai or onwards"
                  ]}
                  cost="₹2,000–₹3,500 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–₹18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Lake-View Resort</p>
                    <p className="text-xs text-purple-600 font-light">Stay: The Carlton or Sterling Kodai Lake · ₹5,000–₹8,000/night · Private car + guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Lake Tour + Sunset at Coaker's"
                  items={[
                    "Arrive by private car from Madurai airport (₹3,500–₹4,000) or Coimbatore (₹5,000–₹6,000)",
                    "Check into lake-view room. Settle in — the view from your balcony is half the experience.",
                    "11am: Private shikara boat on Kodai Lake — ₹500–₹800/hr, far better than shared boats",
                    "1pm: Lunch at The Carlton's restaurant or Cloud Street — ₹800–₹1,200 for two",
                    "3pm: Bryant Park (₹30) — the manicured gardens are genuinely world-class. Hybridised flowers you won't see elsewhere.",
                    "4:15pm: Coaker's Walk timed for the mist — watch the entire Palani valley vanish in 10 minutes",
                    "6:30pm: Pre-dinner drinks at your resort. Dinner at Le Poshe or Aby's — ₹1,200–₹1,800 for two."
                  ]}
                  cost="₹4,000–₹6,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Full-Day Guided Tour: Viewpoints + Hidden Gems"
                  items={[
                    "8am: Private guide + car for the day (₹2,500–₹3,500). Worth it — they know the timing of mist, light, and crowds.",
                    "Pillar Rocks at 8:30am — empty. Your guide will explain the geological history.",
                    "Guna Caves + Green Valley View — back-to-back, 45 min total",
                    "Pine Forest — your guide takes you off the main path to quieter sections most visitors miss",
                    "11am: Dolphins Nose — the descent is steep but your guide knows the pace. The cliff-edge panorama stretches to the plains below.",
                    "1pm: Packed lunch from hotel, eaten at a viewpoint — better than any restaurant experience",
                    "3pm: Bear Shola Falls (seasonal) or Silver Cascade Falls on the Madurai road",
                    "Evening: Spa at your resort. Dinner in-house — ₹1,500–₹2,000 for two."
                  ]}
                  cost="₹5,000–₹7,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Berijam Lake + Vattakanal + Leisurely Departure"
                  items={[
                    "Your hotel concierge arranges the Berijam forest permit (tip ₹200–₹300). No queuing.",
                    "8:30am: Drive to Berijam Lake with stops at Moier Point, Silent Valley, and the fire watchtower",
                    "Berijam Lake — your driver waits. Take an hour. The silence is the point.",
                    "11am: Return via Vattakanal — coffee at Altaf's Cafe overlooking the valley. The views here rival anything in Darjeeling.",
                    "12:30pm: Farewell lunch at Pastry Corner or Ten Degrees — ₹600–₹1,000 for two",
                    "2pm: Last stroll along Kodai Lake. Pick up homemade chocolate and eucalyptus oil.",
                    "3:30pm: Depart. Private car to Madurai airport (2.5hrs) or onwards to Munnar (4hrs)."
                  ]}
                  cost="₹3,500–₹5,500 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹18,000–₹30,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,500–₹2,400", "₹4,500–₹10,500", "₹15,000–₹24,000"],
                    ["🍽 Food & Drinks", "₹600–₹1,000", "₹2,000–₹3,500", "₹3,500–₹5,000"],
                    ["🚌 Transport", "₹400–₹700", "₹2,000–₹4,000", "₹5,000–₹8,000"],
                    ["🎯 Activities & Entry", "₹200–₹400", "₹500–₹1,000", "₹2,500–₹3,500"],
                    ["🛍 Shopping", "₹200–₹500", "₹500–₹1,000", "₹1,000–₹2,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹4,500–₹6,000","₹8,000–₹18,000","₹18,000–₹30,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              Budget is per person solo. Couple and Premium are for two people. All prices INR 2026.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kodaikanal"
            hotels={[
              { name: "Hotel Kodai International", type: "Budget · Near Bus Stand", price: "From ₹800/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/kodai-international.html?aid=2820480" },
              { name: "The Carlton", type: "Heritage Resort · Lake View", price: "From ₹5,500/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/the-carlton-kodaikanal.html?aid=2820480" },
              { name: "Sterling Kodai Lake", type: "Premium Resort · Lake View", price: "From ₹6,000/night", rating: "4", badge: "Premium", url: "https://www.booking.com/hotel/in/sterling-kodai-lake.html?aid=2820480" },
            ]}
            activities={[
              { name: "Berijam Lake Guided Tour", duration: "Half day", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
              { name: "Kodaikanal Full Day Sightseeing", duration: "Full day", price: "From ₹1,200/person", badge: "Popular", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
              { name: "Dolphins Nose Trek", duration: "3 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
              { name: "Vattakanal Nature Walk", duration: "2 hours", price: "From ₹400/person", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kodaikanal-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kodaikanal — Must-See Places"
            subtitle="Click each thumbnail to explore Kodaikanal's most iconic viewpoints, lakes and forests."
            spots={[
              { name: "Kodai Lake",       query: "kodaikanal lake star shaped misty morning scenic india",          desc: "The star-shaped heart of Kodaikanal — walk the full 5km loop for free, or take a rowing boat for ₹300/hr. Best at dawn before the mist lifts." },
              { name: "Pillar Rocks",     query: "pillar rocks kodaikanal granite cliffs mist valley landscape",    desc: "Three massive granite pillars rising 122m from the valley floor. Go before 10am — clouds swallow the view by mid-morning." },
              { name: "Pine Forest",      query: "pine forest kodaikanal tall trees misty path nature landscape",   desc: "Straight rows of towering pine trees with mist filtering through. The most photographed spot in Kodaikanal — get off the main path for solitude." },
              { name: "Berijam Lake",     query: "pristine forest lake india still water shola trees reflection",   desc: "The most pristine lake in Tamil Nadu — requires a free forest permit. Mirror-still water surrounded by untouched shola forest. Worth the early morning." },
              { name: "Coaker's Walk",    query: "coakers walk kodaikanal cliff path valley view misty hills",      desc: "A 1km cliff-edge walkway with panoramic views of the Palani valley. Time your visit for 4pm when the mist rolls in — the valley disappears below you." },
            ]}
          />

          {/* ── PINE FOREST IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="pine forest kodaikanal misty trail tall trees green landscape india"
              fallback="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&q=80"
              alt="Pine forest in Kodaikanal with mist filtering through tall trees"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Pine Forest at mid-morning — mist filters through the trees and the path disappears ahead. Walk past the tourist section for the real experience.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route follows the geography — no doubling back. Kodaikanal is compact so distances are short but roads are hilly and winding.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"💰 Budget"},{id:"B" as const,label:"💑 Couple"},{id:"C" as const,label:"✨ Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 2" day="Viewpoints Loop"
                  stops={["Town 8am","Pillar Rocks 8:30am","Guna Caves 9:15am","Pine Forest 10:30am","Green Valley 3pm","Kodai Lake 5pm"]}
                  distance="18km · ~40min driving" note="All viewpoints are on the same road heading south-west from town. Walk between Pillar Rocks and Guna Caves — it's only 1km."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Kodaikanal+Bus+Stand/Pillar+Rocks+Kodaikanal/Guna+Caves+Kodaikanal/Pine+Forest+Kodaikanal/Green+Valley+View+Kodaikanal/Kodai+Lake" />
                <RouteCard plan="Plan A · Day 3" day="Berijam + Vattakanal"
                  stops={["Forest Office 7am","Berijam Lake 8:30am","Back to Town 12pm","Vattakanal 1:30pm","Kodai Lake 4pm","Bus Stand 5pm"]}
                  distance="52km round trip · 1.5hrs driving" note="Berijam is 21km from town on a restricted forest road. Shared jeeps leave from near the bus stand. Book the night before."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Kodaikanal+Bus+Stand/Berijam+Lake/Vattakanal/Kodaikanal+Bus+Stand" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 2" day="Viewpoints + Dolphins Nose"
                  stops={["Hotel 8am","Pillar Rocks 8:30am","Guna Caves 9:15am","Pine Forest 10:30am","Lunch 12pm","Dolphins Nose 2pm","Lake 5pm"]}
                  distance="25km · ~1hr driving" note="Dolphins Nose is a 3km steep descent from the road. Allow 2 hours total (down and back up). Carry water. The view from the cliff edge is the best in Kodaikanal."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Kodai+Lake/Pillar+Rocks+Kodaikanal/Guna+Caves+Kodaikanal/Pine+Forest+Kodaikanal/Dolphins+Nose+Kodaikanal/Kodai+Lake" />
                <RouteCard plan="Plan B · Day 3" day="Berijam + Vattakanal"
                  stops={["Forest Office 7:30am","Moier Point","Silent Valley","Berijam Lake 9am","Town 12pm","Vattakanal 1pm","Departure 4:30pm"]}
                  distance="55km round trip · 2hrs driving" note="The Berijam Road itself is stunning — stop at Moier Point and Silent Valley viewpoints on the way. Your bike/taxi can park at each stop."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Kodaikanal+Bus+Stand/Berijam+Lake/Vattakanal/Kodaikanal" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 2" day="Full Viewpoint Circuit with Guide"
                  stops={["Hotel 8am","Pillar Rocks","Guna Caves","Pine Forest","Dolphins Nose 2pm","Bear Shola Falls","Hotel 5pm"]}
                  distance="30km · ~1.5hrs driving" note="Your guide will time each stop to avoid tour bus crowds. Pillar Rocks first (empty at 8:30am), Dolphins Nose after lunch (most groups leave by 1pm)."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Kodai+Lake/Pillar+Rocks+Kodaikanal/Guna+Caves+Kodaikanal/Pine+Forest+Kodaikanal/Dolphins+Nose+Kodaikanal/Bear+Shola+Falls/Kodai+Lake" />
                <RouteCard plan="Plan C · Day 3" day="Berijam + Vattakanal + Departure"
                  stops={["Hotel 8:30am","Moier Point","Silent Valley","Berijam Lake","Vattakanal Cafe 11am","Town 12:30pm","Departure 3:30pm"]}
                  distance="58km round trip · 2hrs driving" note="Your hotel concierge handles the Berijam permit. The drive through restricted forest road is part of the experience — shola forest on both sides, no other traffic."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/The+Carlton+Kodaikanal/Berijam+Lake/Vattakanal/Kodaikanal" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62621.3!2d77.48!3d10.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Kodaikanal Travel Map" />
            </div>
          </section>

          {/* ── KODAI LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kodaikanal chocolate homemade shop anna salai sweet food india"
              fallback="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=900&q=80"
              alt="Homemade chocolate from Kodaikanal"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The homemade chocolate shops on Anna Salai range from excellent to terrible — Cottage Crafts is the real deal, skip the tourist-trap shops near the bus stand.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to viewpoints after 11am", desc: "Clouds roll in by late morning and stay until evening. You'll stare at white mist instead of valleys. Start at 8am — non-negotiable.", icon: "🌫️" },
                { title: "Skipping the Berijam permit", desc: "Only 100 vehicles per day. If you reach the forest office after 10am, permits are gone. Get there by 9am or forget it.", icon: "🎫" },
                { title: "Staying near the bus stand", desc: "Noisy, crowded, no views. Pay ₹300–₹500 more and stay near Kodai Lake — walkable to everything and half the noise.", icon: "🏨" },
                { title: "Buying chocolate from bus stand shops", desc: "Tourist-trap chocolate that's been sitting for months. Cottage Crafts on Anna Salai is where locals buy. Night and day difference.", icon: "🍫" },
                { title: "Not carrying layers", desc: "20°C at noon, 5°C at 7pm. The temperature swing catches everyone. Carry a warm jacket even if the afternoon feels warm.", icon: "🧥" },
                { title: "Planning outdoor activities after 4pm", desc: "Mist rolls in at 4pm like clockwork. Every viewpoint, every walk, every photo opportunity — schedule it before 3pm.", icon: "⏰" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "The 7am Advantage", desc: "Kodai Lake at 7am with mist lifting off the water is a completely different experience from Kodai Lake at 10am with 200 tourists. Set one early alarm.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍫", title: "Chocolate Shopping Done Right", desc: "Cottage Crafts on Anna Salai — handmade, fresh, the real deal. Fruit & Nut (₹250/box) and Dark Chocolate (₹200/box) are the best picks. Skip everything near the bus stand.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚶", title: "Walk to Vattakanal", desc: "Vattakanal (Little Israel) is a 3km walk from Kodai Lake and feels like a completely different world — quiet, misty, with the best cafe views in South India. Don't take an auto — the walk is half the experience.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Eucalyptus Oil — The Real Souvenir", desc: "Forget the plastic souvenirs. Pure eucalyptus oil from Kodaikanal (₹100–₹150/bottle) is the real take-home. Buy from any pharmacy, not souvenir shops.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Offline Maps Are Essential", desc: "Network coverage drops between viewpoints and on Berijam Road. Download Google Maps offline for Kodaikanal before you arrive. Your phone GPS works without signal.", color: "bg-rose-50 border-rose-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Oct–Nov ✅ post-monsoon freshness | Dec–Jan ❄️ coldest, peak crowd | Feb–Mar ✅ clear skies, sweet spot | Apr–Jun ☀️ summer rush | Jul–Sep 🌧️ heavy rain, avoid", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Kodaikanal itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kodaikanal Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Kodaikanal?", a: "3 days is ideal to cover all major attractions including Kodai Lake, Coaker's Walk, Bryant Park, Pillar Rocks, Berijam Lake, and Vattakanal. 2 days works if you skip Berijam Lake. 4–5 days allows trekking and a fully relaxed pace." },
                { q: "What is the best time to visit Kodaikanal?", a: "October–March is best. October–November has post-monsoon freshness with fewer crowds. December–January is peak season with the coldest weather (5–15°C). February–March is the sweet spot — clear skies, pleasant temperatures, smaller crowds." },
                { q: "How much does a 3-day Kodaikanal trip cost?", a: "Budget solo: under ₹6,000 including accommodation. Couple mid-range: ₹8,000–₹18,000 for two. Premium: ₹18,000–₹30,000 for two. Kodaikanal is one of the most affordable hill stations in India." },
                { q: "How do I get a Berijam Lake permit?", a: "Free forest permit from the District Forest Office near the Kodaikanal bus stand. Reach by 9am — only 100 vehicles/day are allowed. Carry ID proof. No permit issued after 12pm. Your hotel can sometimes arrange this for premium stays." },
                { q: "Is Kodaikanal better than Ooty?", a: "For couples and nature lovers, yes. Kodaikanal is less commercialised, naturally more beautiful, and 30–40% less crowded. Ooty has the edge for families (better infrastructure, toy train). Both are great — Kodaikanal just feels more like a real hill station." },
                { q: "What should I pack for Kodaikanal?", a: "Layers are essential — it's 20°C at noon and 5°C by evening. Warm jacket, rain poncho (mist is daily), walking shoes with grip, sunscreen for high-altitude UV, and a power bank. Phone batteries drain faster in the cold." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer South India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ooty — 3 Day Hill Station Guide", href: "/blog/ooty-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: false },
                { label: "Coorg — 3 Day Coffee Country", href: "/blog/coorg-3-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="kodaikanal-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
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
