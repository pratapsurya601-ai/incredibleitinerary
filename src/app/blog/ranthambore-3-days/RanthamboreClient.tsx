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


const RANTHAMBORE_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "zones",       emoji: "🐯", label: "Safari Zones Explained" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ranthambore 3-Day Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Ranthambore in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">&rarr;</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps &rarr;
      </a>
    </div>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function RanthamboreClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🐯", label: "Safari", sub: "₹10k–25k", color: "border-orange-300 bg-orange-50 text-orange-800" },
    { id: "C" as const, emoji: "🏰", label: "Luxury Lodge", sub: "₹25k–60k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={RANTHAMBORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ranthambore" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ranthambore national park fort ruins rajasthan"
            fallback="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=1600&q=85"
            alt="Ranthambore Fort ruins overlooking the national park in Rajasthan"
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
              <span className="text-white/70">Ranthambore 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Safari
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ranthambore in 3 Days: Tiger Safari Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with zone strategy, safari booking tips, real costs — and the UNESCO fort that most visitors never see.
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
              <span>🇮🇳 India</span>
              <span>&middot;</span>
              <span>🗓 3 Days</span>
              <span>&middot;</span>
              <span>💰 From ₹7,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ranthambore is the easiest place in India to see a wild tiger — the cats here are famously relaxed around vehicles. Zone 3 near Padam Talao is where the magic happens.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── SAFARI ZONES ── */}
          <section id="zones" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐯 Safari Zones Explained</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Book safari permits exactly 120 days before on the Rajasthan tourism portal. Zones 1-5 are premium — zones 6-10 are buffer zones with lower sighting odds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Premium Zones (1-5)", emoji: "🐯", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Best zones","Zone 3 (Padam Talao), Zone 4"],["Tiger odds","60-70% in peak season"],["Vehicle","Jeep (6-seater) or Canter (20-seater)"],["Cost","Jeep ₹2,500 / Canter ₹750 per person"]],
                  note: "Zones are assigned randomly at booking. You cannot choose a specific zone — but you can book multiple safaris to increase your odds." },
                { title: "Buffer Zones (6-10)", emoji: "🦌", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Budget travellers, bird watchers"],["Tiger odds","20-30% even in peak season"],["Vehicle","Jeep or Gypsy only"],["Cost","₹1,200–₹1,800 per person"]],
                  note: "Buffer zones are cheaper but much larger with fewer tigers. Good for leopard and bird sightings. Worth it if premium zones are sold out." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Morning canter safari (₹750) vs morning jeep (₹2,500) — the jeep is worth every extra rupee. You see more, move faster, and get better angles.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹7,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Jun" />
            <StatCard icon="🚂" label="Nearest Station" value="Sawai Madhopur" />
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Sawai Madhopur Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near station · ₹600–₹1,200/night · Canter safaris</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive + Ranthambore Fort (Half-Day)"
                  items={[
                    "Train from Jaipur (Jan Shatabdi, 2.5hrs, ₹250–₹450) — arrive by noon",
                    "Check into guesthouse near Sawai Madhopur station (₹600–₹1,200/night)",
                    "Lunch at a local dhaba — dal bati churma ₹120–₹180",
                    "2pm: Auto to Ranthambore Fort gate (₹150). The fort inside the park is a UNESCO site that 90% of safari-goers skip because they're focused on tigers. Go on a separate half-day — it's older than most European castles.",
                    "Explore Ganesh Temple inside the park — one of the oldest Ganesh temples in Rajasthan, still active with daily worship",
                    "Sunset views from the fort ramparts over Padam Talao — free and spectacular",
                    "Evening: Dinner at Sawai Madhopur town, explore the local market"
                  ]}
                  cost="₹1,200–₹1,800 (excl. accommodation)" />
                <DayCard day="Day 2" title="Morning Canter Safari + Padam Talao"
                  items={[
                    "5:30am pickup — morning canter safari (₹750/person, pre-booked 120 days prior)",
                    "Canter enters park at 6:30am. 3-hour safari through zones assigned at random.",
                    "Watch for tigers, leopards, sambar deer, marsh crocodiles, and over 300 bird species",
                    "Padam Talao (if your zone includes it) — the iconic lake where tigers are often spotted drinking",
                    "Jogi Mahal at the edge of Padam Talao — one of the oldest forest rest houses in India, picturesque location",
                    "Back by 10am. Rest through the afternoon heat.",
                    "4pm: Walk through Sawai Madhopur old town — Chamatkar Temple, local sweet shops",
                    "Optional: Afternoon canter safari (₹750) if permits available — book both for maximum tiger odds"
                  ]}
                  cost="₹1,500–₹2,500 (excl. accommodation)" />
                <DayCard day="Day 3" title="Second Safari + Departure"
                  items={[
                    "5:30am: Second morning canter safari — different zone increases your odds significantly",
                    "Back by 10am. Pack and check out.",
                    "11am: Visit Surwal Lake (12km from town) — wintering ground for migratory birds, free, usually empty",
                    "Lunch at a local restaurant before departure",
                    "Afternoon train back to Jaipur or onward to Delhi/Agra"
                  ]}
                  cost="₹1,200–₹1,800 (excl. accommodation)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹6,500–₹8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Safari ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">🐯</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Safari Plan — Ranthambore Road Hotels</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Mid-range hotel on Ranthambore Road · ₹2,500–₹5,000/night · Jeep safaris</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive + Fort + Evening Nature Walk"
                  items={[
                    "Train from Jaipur or drive (160km, 3hrs). Check into hotel on Ranthambore Road.",
                    "Late lunch at hotel — most mid-range hotels include meals",
                    "2pm: Ranthambore Fort visit — auto-rickshaw ₹200–₹300 return. Allow 2-3 hours.",
                    "Explore the 10th-century fort ruins, Hammir Palace, three Hindu temples, and step wells inside the fort complex",
                    "Ganesh Temple inside the fort — uniquely situated inside a national park, receives wedding invitations from across India",
                    "5:30pm: Watch the sunset from the fort walls over the jungle canopy",
                    "Evening: Briefing at hotel about next day's safari — many hotels arrange naturalist talks"
                  ]}
                  cost="₹2,000–₹3,500 (excl. accommodation)" />
                <DayCard day="Day 2" title="Double Safari Day — Morning + Afternoon"
                  items={[
                    "5:30am pickup — morning jeep safari (₹2,500/person). Jeep enters at 6:30am.",
                    "Morning safaris have the highest tiger activity — cats are on the move after a cool night",
                    "Look for pugmarks, alarm calls from langurs and deer — your guide reads the jungle like a book",
                    "Back by 10am. Heavy breakfast, rest through peak heat.",
                    "2:30pm: Afternoon jeep safari (₹2,500/person) — different light, different zone",
                    "Afternoon is best for Padam Talao — tigers often come to drink as temperatures drop",
                    "Evening: Dinner at hotel. Share sighting stories. Check tomorrow's zone assignment."
                  ]}
                  cost="₹6,000–₹7,500 (excl. accommodation)" />
                <DayCard day="Day 3" title="Final Safari + Jogi Mahal + Departure"
                  items={[
                    "5:30am: Third morning jeep safari — three safaris give you roughly 85-90% chance of at least one tiger sighting",
                    "If your zone passes Jogi Mahal at Padam Talao — the most photographed spot in Ranthambore",
                    "Back by 10am. Check out and pack.",
                    "11am: Quick visit to Sawai Madhopur town — shop for miniature paintings and Rajasthani handicrafts",
                    "Optional: Surwal Lake detour (20 min) for birding before catching your train",
                    "Afternoon departure — train to Jaipur, Agra (3hrs), or Delhi (5-6hrs)"
                  ]}
                  cost="₹3,500–₹5,000 (excl. accommodation)" />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹18,000–₹25,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Luxury Lodge ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">🏰</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Luxury Lodge Plan — Premium Wildlife Resort</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Oberoi Vanyavilas / Aman-i-Khas / Sujan Sher Bagh · ₹15,000–₹45,000/night · Private jeep + naturalist</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive in Style + Private Fort Tour"
                  items={[
                    "Private car transfer from Jaipur (3hrs) or helicopter charter for groups",
                    "Check into luxury tented camp — Oberoi Vanyavilas, Aman-i-Khas, or Sujan Sher Bagh",
                    "Lunch at the lodge — most luxury properties include all meals and drinks",
                    "3pm: Private guided fort tour with lodge naturalist — skip the crowds, deeper history",
                    "Ranthambore Fort walkthrough including Hammir Palace, ancient step wells, and Ganesh Temple",
                    "Sundowner cocktails arranged at a scenic viewpoint overlooking the park",
                    "7pm: Private dinner under the stars at the lodge. Wildlife documentary screening."
                  ]}
                  cost="Included in lodge package (₹15,000–₹45,000/night)" />
                <DayCard day="Day 2" title="Double Private Jeep Safari"
                  items={[
                    "5:30am: Morning private jeep safari with lodge naturalist — your guide knows individual tigers by name",
                    "Private jeeps often get premium zone allocation through lodge partnerships",
                    "Detailed wildlife tracking — your naturalist explains pugmarks, territory markings, prey behavior",
                    "Return for full breakfast at lodge. Spa treatment or pool time through the afternoon.",
                    "Optional: Visit the lodge's conservation center — learn about Project Tiger and local efforts",
                    "2:30pm: Afternoon private jeep safari — focus on photography with optimal light",
                    "Post-safari: Champagne sundowner at the lodge, gourmet dinner"
                  ]}
                  cost="Included in lodge package" />
                <DayCard day="Day 3" title="Dawn Safari + Village Walk + Departure"
                  items={[
                    "5:30am: Final private morning safari — your naturalist will target zones based on previous days' sightings",
                    "Return for breakfast. Check out by noon.",
                    "10:30am: Village walk arranged by lodge — visit a local Meena tribe settlement, interact with artisans",
                    "Last visit: Padam Talao viewpoint from outside the park for final photos",
                    "Packed lunch from lodge. Private transfer to Jaipur, or continue to Agra/Delhi."
                  ]}
                  cost="Included in lodge package" />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹25,000–₹60,000 including all-inclusive lodge</span>
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
                    <th className="p-3.5 text-xs font-medium text-orange-700 text-center">🐯 Safari</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">🏰 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,800–₹3,600", "₹7,500–₹15,000", "₹45,000–₹1,35,000"],
                    ["🍽 Food & Drinks", "₹1,200–₹1,800", "₹3,000–₹5,000", "Included"],
                    ["🚂 Transport", "₹500–₹900", "₹1,500–₹3,000", "₹3,000–₹8,000"],
                    ["🐯 Safari Permits", "₹1,500–₹2,250", "₹7,500–₹12,500", "Included"],
                    ["🏰 Fort & Sightseeing", "₹300–₹500", "₹500–₹1,000", "Included"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹6,500–₹8,000", "₹18,000–₹25,000", "₹25,000–₹60,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Safari permit prices are per person per safari. Book at least 2 safaris for reasonable tiger sighting odds.
            </p>
          </section>

          {/* ── RANTHAMBORE FORT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="ancient fort ruins stone walls rajasthan hilltop landscape"
              fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80"
              alt="Ranthambore Fort ancient stone ruins on hilltop"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Ranthambore Fort — a 10th-century UNESCO site inside the national park. Most visitors never make it here. Budget a separate half-day.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ranthambore is compact — everything is within 15km of Sawai Madhopur station. Safari pickups are arranged by your hotel.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"💰 Budget"},{id:"B" as const,label:"🐯 Safari"},{id:"C" as const,label:"🏰 Luxury"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 1" day="Fort & Town Exploration"
                  stops={["Station 12pm", "Guesthouse", "Ranthambore Fort 2pm", "Ganesh Temple", "Sawai Madhopur town 6pm"]}
                  distance="18km · ~40min total" note="Fort is 12km from station. Share an auto with other travellers — ₹150 vs ₹300 solo."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Sawai+Madhopur+Junction/Ranthambore+Fort/Sawai+Madhopur" />
                <RouteCard plan="Plan A · Day 2" day="Safari + Town Walk"
                  stops={["Hotel 5:30am", "Park Gate 6:30am", "Safari 3hrs", "Hotel 10am", "Chamatkar Temple 4pm", "Market"]}
                  distance="22km · safari route varies" note="Canter pickup is from your hotel. After safari, rest until 4pm — the heat is brutal from 11am to 3pm."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Sawai+Madhopur/Ranthambore+National+Park/Sawai+Madhopur" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 1" day="Fort Circuit"
                  stops={["Hotel 2pm", "Ranthambore Fort 2:30pm", "Hammir Palace", "Ganesh Temple", "Sunset viewpoint", "Hotel 6pm"]}
                  distance="14km · ~30min driving" note="Ask your hotel to arrange a dedicated auto for the fort — ₹300 return with waiting. Worth not rushing."
                  color="border-orange-200 bg-orange-50"
                  url="https://www.google.com/maps/dir/Ranthambore+Road/Ranthambore+Fort/Ranthambore+Road+Hotels" />
                <RouteCard plan="Plan B · Day 2" day="Double Safari Day"
                  stops={["Hotel 5:30am", "Morning safari 6:30–9:30am", "Hotel rest", "Afternoon safari 2:30–6pm", "Hotel dinner"]}
                  distance="Safari routes vary by zone" note="Jeep pickup from hotel both times. Carry a light jacket for the morning — open-top jeeps are cold before sunrise in winter."
                  color="border-orange-200 bg-orange-50"
                  url="https://www.google.com/maps/dir/Ranthambore+Road/Ranthambore+National+Park+Gate" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 1" day="Fort + Sundowner"
                  stops={["Lodge 3pm", "Ranthambore Fort private tour", "Ganesh Temple", "Sundowner spot", "Lodge 7pm"]}
                  distance="16km · private vehicle" note="Luxury lodges arrange everything — your naturalist doubles as a history guide for the fort. Just show up."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/Oberoi+Vanyavilas+Ranthambore/Ranthambore+Fort" />
                <RouteCard plan="Plan C · Day 3" day="Village Walk + Departure"
                  stops={["Lodge 5:30am", "Final safari", "Lodge breakfast 10am", "Village walk 11am", "Padam Talao viewpoint", "Departure 1pm"]}
                  distance="25km · private vehicle" note="Village walks are arranged by lodges with local community leaders. A genuine cultural immersion, not a staged performance."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/Oberoi+Vanyavilas+Ranthambore/Sawai+Madhopur+Village/Sawai+Madhopur+Junction" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113976.5!2d76.4!3d26.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Ranthambore Travel Map" />
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="indian wildlife safari jeep open grassland rajasthan dry forest"
              fallback="https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=900&q=80"
              alt="Safari jeep driving through dry deciduous forest in Ranthambore"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Morning jeep safari entering the park at dawn. The first hour after gate opens has the best tiger activity.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking 120 days ahead", desc: "Premium zone permits sell out within hours of opening. Set a calendar reminder for exactly 120 days before your visit and book at midnight.", icon: "📅" },
                { title: "Booking only one safari", desc: "Tiger sighting is never guaranteed. One safari gives you 40-50% odds. Three safaris push it to 85-90%. Always book at least two.", icon: "🐯" },
                { title: "Choosing canter over jeep to save money", desc: "Canters carry 20 people, are noisy, and can't go off the main tracks. The jeep costs 3x more but the experience is 10x better.", icon: "🚙" },
                { title: "Skipping the fort entirely", desc: "The fort is a UNESCO World Heritage Site from the 10th century with incredible views. Most visitors never visit because they only care about tigers. Budget a separate half-day.", icon: "🏰" },
                { title: "Visiting July to September", desc: "The park is completely closed for monsoon. No safaris, no fort access (flooding risk). October 1 is reopening day — book for the first week for lush green landscapes.", icon: "🌧️" },
                { title: "Wearing bright colours on safari", desc: "White, red, and bright yellow startle wildlife. Wear earth tones — olive, khaki, brown. Dark greens work too. It genuinely affects sighting odds.", icon: "👕" },
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
                { icon: "📱", title: "The 120-Day Rule", desc: "Safari permits open exactly 120 days before on rajasthanwildlife.in. Set a reminder. Book at midnight when the window opens. Premium zones sell out by morning.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌅", title: "Morning vs Afternoon", desc: "Morning safaris (6:30am entry) have 20-30% better tiger sighting rates. Animals are active after the cool night. Afternoons are better for Padam Talao — tigers come to drink.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏰", title: "Fort on Day 1", desc: "Visit the fort on arrival day — don't waste a safari morning on it. The fort needs 2-3 hours. Afternoon light is best for photography from the ramparts.", color: "bg-teal-50 border-teal-200" },
                { icon: "🔊", title: "Listen for Alarm Calls", desc: "Langur monkeys and sambar deer give distinct alarm calls when a tiger is near. Your guide knows every call. Silence in the jeep when you hear one — a sighting is often minutes away.", color: "bg-teal-50 border-teal-200" },
                { icon: "📷", title: "Camera Settings", desc: "Bring a 200-400mm lens if you have one. Keep ISO on auto, aperture wide (f/5.6), and shutter speed above 1/500. Tigers move fast when they move. A monopod beats a tripod in a bouncing jeep.", color: "bg-orange-50 border-orange-200" },
                { icon: "🌡", title: "Season Strategy", desc: "Oct-Nov ✅ lush green, good weather | Dec-Feb ❄️ cold mornings, clear skies | Mar-Apr ☀️ warming up | May-Jun 🔥 hot but best tiger odds (waterholes) | Jul-Sep ❌ closed", color: "bg-orange-50 border-orange-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Ranthambore itinerary with safari bookings within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Safari Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Ranthambore?", a: "October to June is when the park is open. October-November and February-March offer the best weather. April-June is extremely hot but tiger sighting odds are highest because animals gather near waterholes. The park is closed July to September for monsoon." },
                { q: "How do I book a Ranthambore safari?", a: "Book on rajasthanwildlife.in exactly 120 days before your visit date. Zones 1-5 are premium with the best tiger odds. Morning safaris have better sighting rates. Jeep safaris cost around ₹2,500 and canters ₹750 per person. Permits sell out fast for premium zones — book at midnight when the window opens." },
                { q: "How much does a 3-day Ranthambore trip cost?", a: "Budget with canter safaris: ₹6,500-₹8,000. Safari-focused with jeep safaris: ₹18,000-₹25,000. Luxury lodge with private jeeps: ₹25,000-₹60,000. All per person including accommodation, food, transport, and safari permits." },
                { q: "Which zone is best for tiger sighting?", a: "Zones 1-5 are premium with 60-70% sighting odds in peak season. Zone 3 near Padam Talao and Zone 4 are widely considered the best. You cannot choose your zone — it is assigned randomly at booking. Book multiple safaris across different days for the best odds." },
                { q: "Is Ranthambore Fort worth visiting?", a: "Absolutely. It is a UNESCO World Heritage Site from the 10th century, older than most European castles. It sits inside the national park with views over the lakes and jungle. The Ganesh Temple inside is one of the oldest in Rajasthan. Budget a separate half-day — do not try to combine it with a safari." },
                { q: "How do I reach Ranthambore from Jaipur or Delhi?", a: "Sawai Madhopur is the nearest station, connected to Jaipur (2.5hrs by Jan Shatabdi, ₹250-₹450) and Delhi (5-6hrs). From Delhi, the Kota Jan Shatabdi is fastest. By road from Jaipur: 160km, 3 hours via NH48. The nearest airport is Jaipur (160km)." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Ranthambore"
            hotels={[
              { name: "Hotel Ranthambore Regency", type: "Mid-Range · Ranthambore Road", price: "From ₹2,500/night", rating: "4", badge: "Value pick", url: "https://www.booking.com/hotel/in/ranthambore-regency.html?aid=2820480" },
              { name: "Nahargarh Ranthambore", type: "Heritage Resort · Near Park", price: "From ₹6,000/night", rating: "4", badge: "Safari pick", url: "https://www.booking.com/hotel/in/nahargarh-ranthambore.html?aid=2820480" },
              { name: "Oberoi Vanyavilas", type: "Luxury Tented Camp", price: "From ₹35,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/oberoi-vanyavilas.html?aid=2820480" },
            ]}
            activities={[
              { name: "Ranthambore Jeep Safari (Premium Zone)", duration: "3 hours", price: "From ₹2,500/person", badge: "Must do", url: "https://www.getyourguide.com/ranthambore-l4432/?partner_id=PSZA5UI" },
              { name: "Ranthambore Fort Guided Tour", duration: "Half day", price: "From ₹800/person", badge: "Cultural", url: "https://www.getyourguide.com/ranthambore-l4432/?partner_id=PSZA5UI" },
              { name: "Village Walk & Cultural Experience", duration: "2 hours", price: "From ₹600/person", url: "https://www.getyourguide.com/ranthambore-l4432/?partner_id=PSZA5UI" },
              { name: "Ranthambore Canter Safari (Budget)", duration: "3 hours", price: "From ₹750/person", url: "https://www.getyourguide.com/ranthambore-l4432/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="ranthambore-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Ranthambore — Must-See Places"
            subtitle="Click each thumbnail to explore Ranthambore's iconic wildlife, fort, and lake landscapes."
            spots={[
              { name: "Padam Talao",          query: "serene lake surrounded dry forest hills rajasthan wildlife",          desc: "The iconic lake inside Ranthambore where tigers are frequently spotted drinking at the water's edge. Zone 3 covers this area — the most coveted safari zone." },
              { name: "Ranthambore Fort",     query: "ancient indian fort stone ruins hilltop rajasthan architecture",       desc: "A 10th-century UNESCO World Heritage Site perched above the jungle canopy. Three Hindu temples, a mosque, and step wells inside — older than most European castles." },
              { name: "Jogi Mahal",           query: "old stone building beside lake forest rajasthan heritage",             desc: "One of India's oldest forest rest houses, sitting at the edge of Padam Talao. A favourite photography spot with the fort rising behind it." },
              { name: "Ganesh Temple",        query: "small ancient hindu temple stone carved rajasthan",                     desc: "Uniquely located inside the national park, this temple receives wedding invitations from across India. One of the oldest Ganesh temples in Rajasthan." },
              { name: "Sawai Madhopur Town",  query: "small indian town rajasthan colourful market street architecture",     desc: "The gateway town to Ranthambore — dusty, real, and full of character. Good local food, Rajasthani handicrafts, and a glimpse of non-touristy India." },
            ]}
          />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jaipur — 3 Day City Guide", href: "/blog/jaipur-3-days", soon: true },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
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

          <RelatedGuides currentSlug="ranthambore-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
