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
import RelatedGuides from "@/components/blog/RelatedGuides";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Breadcrumb from "@/components/blog/Breadcrumb";


const KAZIRANGA_TOC = [
  { id: "decision",   emoji: "⚡", label: "Which Plan Are You?" },
  { id: "ranges",     emoji: "\uD83D\uDCCD", label: "Range-by-Range Guide" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "safaris",    emoji: "\uD83D\uDC18", label: "Safari Types" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kaziranga 3-Day Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Kaziranga in 3 Days safari guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\uD83D\uDCB0</span>
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
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
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
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function KazirangaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83E\uDD8F", label: "Safari", sub: "₹10k–25k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83C\uDFE8", label: "Premium Lodge", sub: "₹25k–40k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KAZIRANGA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kaziranga" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kaziranga national park assam rhino grassland india"
            fallback="https://images.unsplash.com/photo-1585063560582-52e578c02953?w=1600&q=85"
            alt="Kaziranga National Park grassland with one-horned rhinoceros"
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
              <span className="text-white/70">Kaziranga 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Safari
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kaziranga in 3 Days: Safari Guide
                <em className="italic text-gold-light"> for Every Budget (2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with range-by-range breakdown, safari booking strategy, real costs — and the mistakes that waste your limited safari slots.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 Assam, India</span>
              <span>·</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>·</span>
              <span>\uD83D\uDCB0 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kaziranga has two-thirds of the world&apos;s one-horned rhinoceros population. Your first sighting of a 2-ton rhino casually grazing 15 meters from your jeep is genuinely heart-stopping.
            </p>
          </blockquote>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83E\uDD8F" label="One-horned rhinos" value="2,600+" />
            <StatCard icon="\uD83D\uDC05" label="Royal Bengal tigers" value="120+" />
            <StatCard icon="\uD83D\uDC26" label="Bird species" value="480+" />
            <StatCard icon="\uD83C\uDFDE\uFE0F" label="UNESCO Heritage" value="Since 1985" />
          </div>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── RANGE-BY-RANGE ── */}
          <section id="ranges" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCCD Range-by-Range Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kaziranga has four safari ranges. Which one you choose determines what you see. This is the single most important decision for your trip.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Central Range (Kohora)", emoji: "\uD83D\uDC18", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for", "First-time visitors, elephant safari at dawn"], ["Wildlife", "Rhinos, elephants, wild buffalo, swamp deer"], ["Safari type", "Both jeep and elephant safari available"], ["Gate", "Kohora — main tourist hub, most accommodation"]],
                  note: "The elephant safari at dawn in the Central Range is the single best wildlife experience I’ve had in India — you’re at eye level with the grassland, silent, and the animals don’t run from elephants."
                },
                {
                  title: "Western Range (Bagori)", emoji: "\uD83E\uDD8F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Best for", "Rhino sightings — highest density in the park"], ["Wildlife", "Rhinos (almost guaranteed), elephants, hog deer"], ["Safari type", "Jeep safari only"], ["Gate", "Bagori — 20km west of Kohora"]],
                  note: "Western Range (Bagori) has the highest density of rhinos — if you only do one safari, do this one at 6am."
                },
                {
                  title: "Eastern Range (Agoratoli)", emoji: "\uD83D\uDC26", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Best for", "Birdwatching, scenic landscapes, fewer crowds"], ["Wildlife", "480+ bird species, hoolock gibbons, wild buffalo"], ["Safari type", "Jeep safari only"], ["Gate", "Agoratoli — 30km east of Kohora"]],
                  note: "If you’re into birding, Agoratoli is where the serious photographers go. Pelicans, adjutant storks, and sometimes hoolock gibbons in the bordering forests."
                },
                {
                  title: "Burapahar Range", emoji: "\uD83C\uDF3F", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for", "Semi-evergreen forest, hollock gibbons"], ["Wildlife", "Capped langur, hoolock gibbons, wild boar"], ["Safari type", "Limited availability, fewer tourists"], ["Gate", "Burapahar — westernmost, forested terrain"]],
                  note: "Burapahar is the least-visited range with dense forest canopy. Skip it on a 3-day trip unless you’re specifically after hoolock gibbons in forest habitat."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic bg-white/50 rounded-lg p-3 leading-relaxed">
                    \uD83D\uDCA1 {area.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI TYPES ── */}
          <section id="safaris" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDC18 Elephant Safari vs Jeep Safari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 text-amber-800 flex items-center gap-2">
                  <span>\uD83D\uDC18</span> Elephant Safari
                </h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "Available only in Central Range (Kohora)",
                    "Duration: ~1 hour at dawn (5:30–6:30am)",
                    "Cost: ~₹1,200 per person (Indian), ~₹3,000 (foreign)",
                    "Book at park gate the previous evening",
                    "Eye-level with tall grassland — silent approach",
                    "Animals don’t flee from elephants — closest encounters",
                    "Limited seats: 4 per elephant, ~40 slots total per day",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-light leading-relaxed">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">●</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-medium text-amber-800 bg-white/60 rounded-lg p-3">
                  Verdict: Unmissable. The single closest rhino encounter you can get anywhere in India.
                </p>
              </div>

              <div className="rounded-xl border p-5 bg-emerald-50 border-emerald-200">
                <h3 className="font-serif text-lg font-normal mb-3 text-emerald-800 flex items-center gap-2">
                  <span>\uD83D\uDE99</span> Jeep Safari
                </h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "Available in all four ranges",
                    "Duration: ~2.5–3 hours (morning 5:30am or afternoon 1:30pm)",
                    "Cost: ~₹1,100 per jeep seat (Indian), ~₹2,500 (foreign) + vehicle",
                    "Book online at kaziranga.assam.gov.in 1–2 weeks ahead",
                    "Covers 20–30km of park terrain per safari",
                    "Better for overall wildlife diversity and bird sightings",
                    "Morning safaris have 3× better sighting rates than afternoon",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-light leading-relaxed">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">●</span>{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-medium text-emerald-800 bg-white/60 rounded-lg p-3">
                  Verdict: Do at least 2 jeep safaris in different ranges for the full Kaziranga experience.
                </p>
              </div>
            </div>
          </section>

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kaziranga national park elephant grassland tall grass assam wildlife"
              fallback="https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=900&q=80"
              alt="Elephant in tall grassland at Kaziranga National Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The elephant safari at dawn in the Central Range is the single best wildlife experience I&apos;ve had in India &mdash; you&apos;re at eye level with the grassland, silent, and the animals don&apos;t run from elephants.
              </p>
            </div>
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCC5 The Itineraries</h2>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-parchment text-muted border border-parchment-2 hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                  <p className="text-xs text-amber-800 font-medium mb-1">Plan A — Budget (Under ₹8,000 for 3 days)</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">
                    2 jeep safaris, basic guesthouse near Kohora, state bus from Guwahati. You see rhinos, elephants, and birds without breaking the bank.
                  </p>
                </div>
                <DayCard day="Day 1" title="Arrival + Afternoon Safari (Bagori)"
                  items={[
                    "Guwahati to Kohora by state bus (5:30am departure, arrive ~10:30am, ₹350)",
                    "Check into guesthouse near Kohora Gate (₹800–1,200/night)",
                    "Lunch at local dhaba in Kohora market (₹150–200)",
                    "1:30pm afternoon jeep safari at Western Range (Bagori) — highest rhino density",
                    "Return by 4:30pm, evening walk around Kohora village",
                    "Dinner at guesthouse or local restaurant (₹200)",
                  ]}
                  cost="₹2,000–2,500 (transport + stay + food + safari)"
                />
                <DayCard day="Day 2" title="Morning Safari Central + Orchid Garden"
                  items={[
                    "5:30am morning jeep safari at Central Range (Kohora) — best all-round sighting",
                    "Return by 8:30am, hot breakfast at guesthouse",
                    "Visit Kaziranga National Orchid and Biodiversity Park (₹50 entry, 2hrs)",
                    "Afternoon: walk through tea gardens near Kohora (free, ask locals for directions)",
                    "Evening: rest or explore Kohora market for Assamese handicrafts",
                    "Dinner at local restaurant — try Assamese thali with duck curry (₹200–250)",
                  ]}
                  cost="₹1,800–2,200 (safari + food + entry)"
                />
                <DayCard day="Day 3" title="Tea Garden Visit + Departure"
                  items={[
                    "Early morning walk or birdwatching around accommodation",
                    "Visit a tea estate near Bokakhat (15km, auto ₹100) — ask for factory tour",
                    "Buy Assam tea directly from the estate (₹150–300 for 250g premium CTC)",
                    "Lunch at Bokakhat or Kohora (₹150)",
                    "Afternoon bus/shared sumo to Jorhat airport or Guwahati",
                  ]}
                  cost="₹1,200–1,800 (transport + food + tea)"
                />
              </div>
            )}

            {/* ── PLAN B: SAFARI-FOCUSED ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-4">
                  <p className="text-xs text-emerald-800 font-medium mb-1">Plan B — Safari-Focused (₹10,000–25,000 for 3 days)</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">
                    4–5 safaris across all major ranges, elephant safari at dawn, mid-range hotel. The plan for serious wildlife enthusiasts.
                  </p>
                </div>
                <DayCard day="Day 1" title="Arrival + Bagori Afternoon + Elephant Safari Booking"
                  items={[
                    "Fly to Jorhat, pre-booked cab to Kohora (2hrs, ₹2,500–3,000)",
                    "Check into mid-range resort (₹2,500–4,000/night)",
                    "Quick lunch, then 1:30pm jeep safari at Western Range (Bagori) — rhino central",
                    "Return by 4:30pm. Head to Central Range gate to book elephant safari for tomorrow dawn",
                    "Dinner at resort. Early sleep — 4:30am wake-up tomorrow",
                  ]}
                  cost="₹6,000–8,000 (flight transfer + stay + safari + food)"
                />
                <DayCard day="Day 2" title="Elephant Safari Dawn + Agoratoli Jeep + Orchid Park"
                  items={[
                    "5:00am elephant safari at Central Range — the signature Kaziranga experience",
                    "Return by 6:30am, heavy breakfast at resort",
                    "9:00am drive to Eastern Range (Agoratoli), 30km east of Kohora",
                    "Morning jeep safari at Agoratoli — best for birds and hoolock gibbon habitat",
                    "Lunch at resort, then Kaziranga Orchid and Biodiversity Park (₹50, 2hrs)",
                    "Evening: optional afternoon safari at Central Range (2nd slot) or rest",
                  ]}
                  cost="₹5,500–7,000 (2–3 safaris + food + orchid park)"
                />
                <DayCard day="Day 3" title="Bagori Dawn + Tea Garden + Departure"
                  items={[
                    "5:30am final morning jeep safari at Bagori — different light, different sightings",
                    "Return by 8:30am, pack and check out",
                    "Visit a working tea garden and factory near Bokakhat (1.5hrs)",
                    "Buy premium Assam tea directly (₹150–400/pack)",
                    "Lunch en route, transfer to Jorhat airport for evening flight",
                  ]}
                  cost="₹4,000–5,500 (safari + tea visit + transfer + food)"
                />
              </div>
            )}

            {/* ── PLAN C: PREMIUM LODGE ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-4">
                  <p className="text-xs text-purple-800 font-medium mb-1">Plan C — Premium Lodge (₹25,000–40,000 for 3 days)</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">
                    Boutique jungle lodge, all safaris included, naturalist guide, cultural experiences. The complete immersion plan.
                  </p>
                </div>
                <DayCard day="Day 1" title="Airport Pickup + Bagori Safari + Lodge Welcome"
                  items={[
                    "Airport pickup by lodge vehicle (Jorhat or Guwahati included in package)",
                    "Check into premium jungle lodge like Diphlu River Lodge or Infinity Kaziranga (₹8,000–15,000/night)",
                    "Welcome drink, naturalist briefing on park zones and wildlife behaviour",
                    "1:30pm jeep safari at Western Range (Bagori) with lodge naturalist",
                    "Sundowner tea on the lodge terrace overlooking the park boundary",
                    "Multi-course Assamese dinner at lodge — bamboo shoot pork, silk moth curry, rice beer",
                  ]}
                  cost="₹12,000–18,000 (lodge + safari + meals + transfer)"
                />
                <DayCard day="Day 2" title="Elephant Safari + Agoratoli + Cultural Evening"
                  items={[
                    "4:45am wake-up call, chai, then elephant safari at Central Range",
                    "Return for full breakfast, rest period at lodge",
                    "10:00am jeep safari at Eastern Range (Agoratoli) — birding focus with naturalist",
                    "Afternoon: guided visit to Kaziranga Orchid Park + nearby Mishing tribal village",
                    "Evening: Bihu dance performance or local cultural show arranged by lodge",
                    "Dinner with Assamese wine tasting",
                  ]}
                  cost="₹10,000–15,000 (safaris + experiences + meals)"
                />
                <DayCard day="Day 3" title="Central Range Dawn + Tea Estate + Departure"
                  items={[
                    "5:30am final morning safari at Central Range — golden hour light for photography",
                    "Breakfast, check out, load luggage into lodge vehicle",
                    "Private tea estate visit with plucking and tasting session (arranged by lodge)",
                    "Scenic drive to airport through Assamese countryside and paddy fields",
                    "Evening flight home",
                  ]}
                  cost="₹8,000–12,000 (safari + tea estate + transfer + meals)"
                />
              </div>
            )}
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Category</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Budget (A)</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Safari (B)</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Premium (C)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Accommodation (3N)", "₹2,400–3,600", "₹7,500–12,000", "₹24,000–45,000"],
                    ["Jeep safaris (2–5)", "₹2,200", "₹4,400–5,500", "₹4,400–5,500"],
                    ["Elephant safari", "—", "₹1,200", "₹1,200"],
                    ["Food (3 days)", "₹1,200–1,800", "₹2,500–4,000", "Included"],
                    ["Transport", "₹700–1,200", "₹3,000–5,000", "Included"],
                    ["Orchid park + extras", "₹100–300", "₹500–1,000", "Included"],
                  ].map(([cat, a, b, c]) => (
                    <tr key={cat} className="bg-white">
                      <td className="px-5 py-3 text-xs text-ink font-medium">{cat}</td>
                      <td className="px-5 py-3 text-xs text-muted font-light">{a}</td>
                      <td className="px-5 py-3 text-xs text-muted font-light">{b}</td>
                      <td className="px-5 py-3 text-xs text-muted font-light">{c}</td>
                    </tr>
                  ))}
                  <tr className="bg-parchment font-medium">
                    <td className="px-5 py-3 text-xs text-ink">Total (per person)</td>
                    <td className="px-5 py-3 text-xs text-amber-800">₹6,600–8,000</td>
                    <td className="px-5 py-3 text-xs text-emerald-800">₹19,000–25,000</td>
                    <td className="px-5 py-3 text-xs text-purple-800">₹30,000–40,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              * Prices are per person for Indian nationals. Foreign nationals pay higher park entry and safari fees (roughly 2–3×).
              Flights to Jorhat/Guwahati not included. Book 2–3 months ahead for best fares (₹4,000–7,000 return from Delhi/Mumbai).
            </p>
          </section>

          {/* ── SEASON IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="assam tea garden green rolling hills plantation landscape"
              fallback="https://images.unsplash.com/photo-1566138884817-9d56a0fdd23d?w=900&q=80"
              alt="Assam tea garden with rolling green hills"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Assam&apos;s tea gardens surround Kaziranga on every side. A tea estate visit with factory tour and tasting is one of the best free additions to any safari trip.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting May–October", desc: "Kaziranga is closed Apr–Oct for monsoon flooding. The park literally goes underwater. Nov–Mar is the window.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Booking only afternoon safaris", desc: "Morning safaris (5:30–6am) have 3× better sighting rates. Animals are active at dawn. Afternoon is hot, animals hide in tall grass.", icon: "\u2600\uFE0F" },
                { title: "Skipping Bagori for Central Range", desc: "Most tourists only do Central because it’s at Kohora gate. Bagori has more rhinos per square km. The 20km drive is worth it.", icon: "\uD83E\uDD8F" },
                { title: "Not booking jeep safari online early", desc: "Safari slots fill up 1–2 weeks ahead on kaziranga.assam.gov.in. Don’t show up hoping to get a slot — especially weekends and holidays.", icon: "\uD83D\uDCF1" },
                { title: "Wearing bright colours on safari", desc: "Red, white, bright yellow scare animals. Wear olive, brown, khaki. Also: no perfume, no loud talking.", icon: "\uD83D\uDC55" },
                { title: "Ignoring the orchid park and tea gardens", desc: "Kaziranga isn’t just safaris. The orchid park has 600+ species and the surrounding tea estates offer free tours. Budget 3–4 hours for these.", icon: "\uD83C\uDF3A" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCA1 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDCF7", title: "Photography: Grass Burn Season", desc: "Feb–Mar is best for photography. Park authorities do controlled grass burns, making animals much more visible against short stubble instead of 4m tall elephant grass.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDD8F", title: "Rhino Guarantee Strategy", desc: "Do Bagori morning safari on Day 1. If somehow you don’t see rhinos (almost impossible), you have two more mornings. But Bagori has near-100% sighting rate for mornings.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF75", title: "Buy Tea at Source", desc: "Assam CTC tea at a local estate costs ₹150–300 for 250g of premium grade. The same tea branded and packaged sells for ₹600–800 in cities. Buy 1–2kg — it makes great gifts.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDC26", title: "Birding at Agoratoli", desc: "Carry binoculars even if you’re not a birder. Agoratoli has spot-billed pelicans, greater adjutant storks, and sometimes Pallas’s fish-eagles. Your naturalist will spot them for you.", color: "bg-sky-50 border-sky-200" },
                { icon: "\uD83C\uDF1F", title: "Best Month by Month", desc: "Nov ✓ park opens, lush green | Dec–Jan ✓ peak season, cool weather | Feb–Mar ✓✓ best visibility (grass burnt) | Apr \u26A0\uFE0F closing soon | May–Oct ❌ closed (monsoon)", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDECC", title: "Where to Stay", desc: "Budget: guesthouses on NH-37 near Kohora (₹800–1,500). Mid-range: IORA resort, Jupuri Ghar (₹2,500–4,000). Premium: Diphlu River Lodge, Infinity Kaziranga (₹8,000–15,000). All within 5km of Central Range gate.", color: "bg-sky-50 border-sky-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size and budget &mdash; we&apos;ll send a personalised Kaziranga safari itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kaziranga Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "When is Kaziranga National Park open?", a: "November to April. The park closes May through October because the Brahmaputra floods the entire park during monsoon. Best months: February–March (grass is short after controlled burns, maximum visibility)." },
                { q: "How do I book a safari in Kaziranga?", a: "Jeep safaris: book online at kaziranga.assam.gov.in, slots open 1–2 weeks in advance. Elephant safaris: book at the Central Range gate the previous evening. Morning slots (5:30–6am) fill fastest — book as soon as they open." },
                { q: "Which range is best for rhino sighting?", a: "Western Range (Bagori) has the highest density of one-horned rhinos. Near-100% sighting rate on morning safaris. Central Range (Kohora) is also excellent. Eastern Range (Agoratoli) is best for birds." },
                { q: "Is elephant safari or jeep safari better?", a: "Both are worth doing. Elephant safari gives silent, eye-level encounters — animals don’t flee from elephants. Jeep safari covers more ground and sees more species. Ideally do elephant at dawn and jeep safaris in different ranges." },
                { q: "How do I reach Kaziranga?", a: "Fly to Jorhat (97km, 2hr drive) or Guwahati (230km, 4.5hr drive). Guwahati has more flights and cheaper fares. State buses run from Guwahati ISBT to Kohora. Most visitors base in Kohora at the Central Range gate." },
                { q: "How much does a Kaziranga trip cost?", a: "Budget: under ₹8,000 for 3 days (2 safaris, basic stay). Safari-focused: ₹10,000–25,000 (4–5 safaris, mid-range hotel). Premium lodge: ₹25,000–40,000 (all safaris, boutique lodge, naturalist guide, meals included). Flights extra." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Kaziranga — Land of the One-Horned Rhino"
            subtitle="2,600 rhinos, elephant safaris at dawn, and India's highest tiger density."
            spots={[
              { name: "One-Horned Rhino", query: "kaziranga national park one horned rhino grassland assam india safari", desc: "Kaziranga has 2,600 of the world's 4,000 remaining one-horned rhinos." },
              { name: "Elephant Safari at Dawn", query: "kaziranga elephant safari sunrise mist assam india grassland", desc: "Elephant safari through tall grass — the original way to see rhinos." },
              { name: "Wild Buffalo Herd", query: "kaziranga wild water buffalo herd assam national park india", desc: "Wild Asiatic water buffalo in their natural habitat." },
              { name: "Tea Gardens", query: "assam tea garden plantation green rows kaziranga india", desc: "Assam's emerald tea estates surround the park." },
              { name: "Brahmaputra River", query: "brahmaputra river assam sunset wide river india landscape", desc: "The mighty Brahmaputra — so wide it looks like an inland sea." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning More of Northeast India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Darjeeling — 4 Day Hill Station Guide", href: "/blog/darjeeling-4-days", soon: false },
                { label: "Meghalaya — Living Root Bridges & Caves", href: "/blog/meghalaya-5-days", soon: true },
                { label: "Sikkim — Gangtok & Nathula Pass", href: "/blog/sikkim-5-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <AffiliateBlock destination="Kaziranga" />
          <RelatedGuides currentSlug="kaziranga-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
