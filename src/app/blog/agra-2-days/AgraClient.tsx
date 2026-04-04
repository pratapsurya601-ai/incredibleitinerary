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
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";


const AGRA_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "tajsunrise",  emoji: "\uD83C\uDF05", label: "Taj Mahal Sunrise" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "maps",        emoji: "\uD83D\uDDFA\uFE0F", label: "Route Maps" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Agra 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Agra in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">\u2192</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">\uD83D\uDCA1 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        \uD83D\uDCCD Open in Google Maps \u2192
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function AgraClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B95k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFDB\uFE0F", label: "Heritage", sub: "\u20B95k\u201315k", color: "border-orange-300 bg-orange-50 text-orange-800" },
    { id: "C" as const, emoji: "\u2728", label: "Luxury", sub: "\u20B915k\u201340k", color: "border-rose-300 bg-rose-50 text-rose-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AGRA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Agra" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="taj mahal agra sunrise marble india"
            fallback="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=85"
            alt="Taj Mahal at sunrise with morning mist over white marble"
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
              <span className="text-white/70">Agra 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & History
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">\u00B7</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">\u00B7</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Agra in 2 Days: Taj Mahal Sunrise to Fatehpur Sikri
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with sunrise gate timings, actual costs, Google Maps routes — and the commission traps that drain most Agra budgets.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 India</span>
              <span>\u00B7</span>
              <span>\uD83D\uDDD3 2 Days</span>
              <span>\u00B7</span>
              <span>\uD83D\uDCB0 From \u20B94,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Taj at 5:50am before the gates open — you get 20 minutes when it&apos;s just you, the marble, and the morning mist. This alone is worth the trip to India.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} \u2192</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── TAJ SUNRISE SECTION ── */}
          <section id="tajsunrise" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83C\uDF05 The Taj Mahal Sunrise — How to Actually Do It</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This is the single most important thing you will do in Agra. Get it right and the rest of the trip is a bonus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Sunrise Entry", emoji: "\uD83C\uDF05", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Gates open","6:00am (5:30am Apr\u2013Sep)"],["Best arrival","5:50am \u2014 be in the first 50"],["Entry fee","\u20B950 Indian / \u20B91,100 foreigner"],["Time needed","2\u20132.5 hours minimum"]],
                  note: "The south gate (main gate) has the longest queue. Use the east gate or west gate instead \u2014 same entry, 70% shorter line." },
                { title: "Sunset Alternative", emoji: "\uD83C\uDF07", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Best view","Mehtab Bagh \u2014 across the river"],["Entry","\u20B950 Indian / \u20B9300 foreigner"],["Best time","5:00\u20136:15pm (winter)"],["Crowd level","Minimal \u2014 most tourists miss this"]],
                  note: "Mehtab Bagh across the river at sunset gives you the Taj view without the Taj crowd \u2014 \u20B950 entry, zero tour groups." },
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
                <strong className="font-medium text-ink">The play:</strong> Taj at sunrise, Agra Fort mid-morning, Mehtab Bagh at sunset. You see the Taj twice in one day from completely different angles, and the second time is free of crowds.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="2 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u20B94,500" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon="\uD83D\uDE82" label="From Delhi" value="1hr 40min" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
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

            {/* ── PLAN A — BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Near Taj East Gate Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Zostel / Hostel \u00B7 \u20B9500\u2013\u20B91,200/night \u00B7 Auto-rickshaw + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Taj Sunrise + Agra Fort + Mehtab Bagh Sunset"
                  items={[
                    "5:50am: Arrive at east gate of Taj Mahal \u2014 be in the first 50 people. Entry \u20B950 (Indian) / \u20B91,100 (foreigner).",
                    "6:00\u20138:30am: Full Taj Mahal visit. Spend first 20 min on the main platform before groups arrive. Walk the gardens after.",
                    "9:00am: Bedai-Jalebi breakfast at Deviram Sweets, Kinari Bazaar \u2014 \u20B960\u201380. The real Agra breakfast.",
                    "10:30am: Agra Fort \u2014 \u20B950 Indian / \u20B9650 foreigner. 2 hours minimum. Musamman Burj has a direct Taj view.",
                    "1:00pm: Lunch at Dasaprakash, Gwalior Road \u2014 South Indian thali \u20B9200\u2013300. Clean, reliable, no tourist markup.",
                    "5:00pm: Mehtab Bagh \u2014 \u20B950 entry. Taj view across the Yamuna at sunset. Stay until 6:15pm.",
                    "7:30pm: Dinner at Mama Chicken, Fatehabad Road \u2014 \u20B9150\u2013250. Local favourite, no-frills."
                  ]}
                  cost="\u20B91,500\u2013\u20B92,500 excluding accommodation" />
                <DayCard day="Day 2" title="Fatehpur Sikri + Kinari Bazaar + Petha Run"
                  items={[
                    "7:00am: Auto to Fatehpur Sikri (37km, 45 min). Hire shared auto from Idgah Bus Stand \u2014 \u20B940\u201360/person.",
                    "8:00\u201310:30am: Fatehpur Sikri \u2014 \u20B950 Indian / \u20B9610 foreigner. Buland Darwaza, Panch Mahal, Jodha Bai Palace. 2.5hrs.",
                    "11:30am: Back to Agra. Quick stop at Itimad-ud-Daulah (Baby Taj) \u2014 \u20B950/\u20B9210. Smaller, no crowds, stunning inlay work.",
                    "1:00pm: Lunch at Pinch of Spice, Fatehabad Road \u2014 Mughlai food, \u20B9250\u2013400.",
                    "3:00pm: Kinari Bazaar walk \u2014 marble handicrafts, leather shoes, Petha shops. 1.5 hours of wandering.",
                    "4:30pm: Panchhi Petha on MG Road for authentic Petha sweets \u2014 \u20B9200\u2013400 for a gift box. Skip any Petha shop near the Taj.",
                    "6:00pm: Depart or catch Gatimaan Express back to Delhi (5:50pm departure)."
                  ]}
                  cost="\u20B91,200\u2013\u20B92,000 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B94,500\u2013\u20B97,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — HERITAGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83C\uDFDB\uFE0F</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Heritage Plan — Taj Ganj or Fatehabad Road Base</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Heritage hotel / boutique \u00B7 \u20B92,500\u2013\u20B95,000/night \u00B7 Private cab for the day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Taj Sunrise + Agra Fort + Mehtab Bagh Sunset"
                  items={[
                    "5:30am: Hotel arranges early wake-up chai. Walk to east gate (10 min from Taj Ganj hotels).",
                    "5:50am: Enter Taj Mahal with the first group. Hire official ASI guide at the gate \u2014 \u20B9500\u2013700 for 1.5hrs.",
                    "8:30am: Breakfast at Cafe Sheroes Hangout, near east gate \u2014 \u20B9200\u2013350. Social enterprise cafe, good food.",
                    "10:00am: Agra Fort with guide \u2014 budget 2.5 hours. Ask for the hidden hammam (bath) chambers most tourists miss.",
                    "1:00pm: Lunch at Peshawri, ITC Mughal \u2014 \u20B91,200\u2013\u20B92,000 per person. The best Mughlai meal in Agra.",
                    "3:30pm: Itimad-ud-Daulah (Baby Taj) \u2014 more intricate inlay work than the Taj itself. 1 hour.",
                    "5:00pm: Mehtab Bagh for sunset. Bring a tripod if you have one \u2014 best photography spot in Agra.",
                    "8:00pm: Dinner at Pinch of Spice or Bon Barbecue \u2014 \u20B9800\u2013\u20B91,200 for two."
                  ]}
                  cost="\u20B94,000\u2013\u20B96,500 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Fatehpur Sikri + Marble Workshop + Heritage Walk"
                  items={[
                    "7:30am: Private cab to Fatehpur Sikri \u2014 \u20B91,200\u2013\u20B91,500 return (wait + return).",
                    "8:30\u201311:30am: Full Fatehpur Sikri exploration with guide (\u20B9500). Don't rush \u2014 this was an entire Mughal capital city.",
                    "12:30pm: Lunch at local dhaba near Fatehpur Sikri \u2014 \u20B9200\u2013350 for two. Better than tourist restaurants.",
                    "2:00pm: Visit Subhash Emporium on Fatehabad Road for genuine marble inlay work. Watch artisans use the same Mughal technique.",
                    "3:30pm: Walk through Kinari Bazaar and Jama Masjid area \u2014 old Agra at its most authentic.",
                    "4:30pm: Panchhi Petha for Agra\u2019s signature sweets. Try the Angoori Petha (grape-shaped) and Paan Petha.",
                    "6:00pm: Sunset chai at a rooftop cafe near Taj Ganj with final Taj view. Depart or stay for the night."
                  ]}
                  cost="\u20B93,500\u2013\u20B95,500 for two (excl. accommodation)" />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 2-Day Cost (for two) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B912,000\u2013\u20B920,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2728</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Luxury Plan — ITC Mughal or Oberoi Amarvilas</p>
                    <p className="text-xs text-rose-600 font-light">Stay: 5-star with Taj view \u00B7 \u20B912,000\u2013\u20B935,000/night \u00B7 Private car + guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Taj Sunrise + Fort + Sunset Masterclass"
                  items={[
                    "5:30am: Private car drops you at east gate. Your dedicated ASI-certified guide handles tickets and queue.",
                    "6:00\u20139:00am: Extended Taj visit. Guide shows you the acoustic effects inside the main chamber and the hidden calligraphy details.",
                    "9:30am: Breakfast at Oberoi Amarvilas with Taj view from every table \u2014 included if staying, otherwise \u20B92,500 for two.",
                    "11:00am: Private Agra Fort tour \u2014 3 hours. Guide opens up the narrative of Shah Jahan imprisoned here, staring at the Taj.",
                    "2:00pm: Lunch at Peshawri, ITC Mughal \u2014 tandoor-smoked dal and raan. The best meal in Agra, period.",
                    "4:00pm: Private marble inlay demonstration at a master artisan\u2019s workshop \u2014 arranged through hotel concierge.",
                    "5:15pm: Mehtab Bagh \u2014 hotel arranges sundowner drinks setup by the riverside. Taj across the water at golden hour.",
                    "8:30pm: Mughlai dinner at hotel restaurant or Esphahan at Oberoi Amarvilas."
                  ]}
                  cost="\u20B910,000\u2013\u20B918,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Fatehpur Sikri + Curated Heritage + Departure"
                  items={[
                    "7:00am: Leisurely breakfast at hotel. Late checkout arranged.",
                    "8:30am: Private car to Fatehpur Sikri (45 min). Your guide adds the historical context that makes this site extraordinary.",
                    "8:45\u201311:30am: Full Fatehpur Sikri with the Diwan-i-Khas, Panch Mahal, and the story of Akbar\u2019s religious experiments.",
                    "12:00pm: Lunch at a heritage haveli restaurant on the return drive \u2014 pre-arranged by hotel.",
                    "2:00pm: Itimad-ud-Daulah \u2014 the marble inlay prototype that inspired the Taj. Often empty at this hour.",
                    "3:30pm: Shopping at curated government emporium or Subhash Emporium \u2014 certified marble pieces with authenticity guarantee.",
                    "5:00pm: Final chai with Taj view from hotel terrace. Depart via Gatimaan Express or private car to Delhi (3hrs)."
                  ]}
                  cost="\u20B97,000\u2013\u20B912,000 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 2-Day Cost (for two) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B935,000\u2013\u20B975,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-orange-700 text-center">\uD83C\uDFDB\uFE0F Heritage</th>
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">\u2728 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (1N)", "\u20B9500\u2013\u20B91,200", "\u20B92,500\u2013\u20B95,000", "\u20B912,000\u2013\u20B935,000"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20B9600\u2013\u20B91,000", "\u20B92,000\u2013\u20B94,000", "\u20B95,000\u2013\u20B910,000"],
                    ["\uD83D\uDE95 Transport", "\u20B9400\u2013\u20B9700", "\u20B91,500\u2013\u20B92,500", "\u20B93,000\u2013\u20B95,000"],
                    ["\uD83C\uDFAB Entry Fees", "\u20B9200\u2013\u20B92,500", "\u20B9200\u2013\u20B92,500", "\u20B9200\u2013\u20B92,500"],
                    ["\uD83D\uDED2 Shopping & Petha", "\u20B9200\u2013\u20B9500", "\u20B9500\u2013\u20B92,000", "\u20B92,000\u2013\u20B910,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B94,500\u2013\u20B97,000","\u20B96,000\u2013\u20B910,000","\u20B915,000\u2013\u20B940,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Entry fees vary for Indian nationals vs foreign tourists. Foreigner combo tickets save 10-15%.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Agra"
            hotels={[
              { name: "Zostel Agra", type: "Budget Hostel \u00B7 Taj Ganj", price: "From \u20B9600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-agra.html?aid=2820480" },
              { name: "Hotel Atulyaa Taj", type: "Heritage Boutique \u00B7 Fatehabad Rd", price: "From \u20B93,500/night", rating: "4", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/atulyaa-taj.html?aid=2820480" },
              { name: "Oberoi Amarvilas", type: "Luxury \u00B7 Taj View", price: "From \u20B925,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/oberoi-amarvilas.html?aid=2820480" },
            ]}
            activities={[
              { name: "Taj Mahal Sunrise Tour with Guide", duration: "3 hours", price: "From \u20B91,500/person", badge: "Must do", url: "https://www.getyourguide.com/agra-l270/taj-mahal/?partner_id=PSZA5UI" },
              { name: "Fatehpur Sikri Half-Day Excursion", duration: "5 hours", price: "From \u20B91,200/person", badge: "Heritage", url: "https://www.getyourguide.com/agra-l270/fatehpur-sikri/?partner_id=PSZA5UI" },
              { name: "Agra Heritage Walking Tour", duration: "3 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/agra-l270/heritage-walk/?partner_id=PSZA5UI" },
              { name: "Marble Inlay Workshop Experience", duration: "2 hours", price: "From \u20B91,000/person", url: "https://www.getyourguide.com/agra-l270/marble-workshop/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="agra-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Agra — Must-See Places"
            subtitle="Click each thumbnail to explore Agra's most iconic Mughal monuments and hidden corners."
            spots={[
              { name: "Taj Mahal",              query: "taj mahal agra white marble dome reflection pool morning",    desc: "The defining monument of India. Arrive at 5:50am for the east gate to see it in morning mist before the crowds descend." },
              { name: "Agra Fort",               query: "agra fort red sandstone mughal architecture walls india",      desc: "Massive red sandstone fort with marble palaces inside. Musamman Burj offers a direct Taj view \u2014 where Shah Jahan was imprisoned." },
              { name: "Mehtab Bagh",             query: "mehtab bagh garden taj mahal view sunset river yamuna agra",  desc: "The sunset viewpoint across the Yamuna river. \u20B950 entry, almost no tourists, and the best Taj photograph you will take." },
              { name: "Fatehpur Sikri",          query: "fatehpur sikri buland darwaza red sandstone mughal palace",    desc: "Akbar\u2019s abandoned capital city, 37km from Agra. Buland Darwaza is the tallest gateway in the world. Budget 2.5 hours." },
              { name: "Itimad-ud-Daulah",        query: "itimad ud daulah baby taj agra marble inlay tomb garden",     desc: "Known as the Baby Taj \u2014 the first Mughal structure to use marble inlay. More intricate detail than the Taj, with almost no crowds." },
            ]}
          />

          {/* ── AGRA FORT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="agra fort interior marble palace mughal architecture india"
              fallback="https://images.unsplash.com/photo-1585135497273-1a86d9d4f7d2?w=900&q=80"
              alt="Agra Fort interior marble palace chambers"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Agra Fort \u2014 the marble chambers inside the red sandstone walls. Shah Jahan spent his final years here, gazing at the Taj Mahal across the river.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDDFA\uFE0F Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — no doubling back, no wasted auto fare. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83C\uDFDB\uFE0F Heritage"},{id:"C" as const,label:"\u2728 Luxury"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Budget \u00B7 Day 1" day="Taj Sunrise \u2192 Fort \u2192 Mehtab Bagh Sunset"
                  stops={["East Gate 5:50am","Taj Mahal 6\u20138:30am","Kinari Bazaar Breakfast","Agra Fort 10:30am","Mehtab Bagh 5pm"]}
                  distance="12km \u00B7 Auto \u20B9200\u2013300 total" note="East gate to Agra Fort is 2.5km \u2014 walkable. Agra Fort to Mehtab Bagh is 6km, take an auto."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Taj+Mahal+East+Gate,+Agra/Agra+Fort/Mehtab+Bagh,+Agra" />
                <RouteCard plan="Budget \u00B7 Day 2" day="Fatehpur Sikri \u2192 Baby Taj \u2192 Kinari Bazaar"
                  stops={["Idgah Bus Stand 7am","Fatehpur Sikri 8am","Itimad-ud-Daulah 11:30am","Kinari Bazaar 3pm","Panchhi Petha MG Road"]}
                  distance="80km round trip \u00B7 Shared auto \u20B940\u201360" note="Shared autos to Fatehpur Sikri leave from Idgah Bus Stand every 15 min. Much cheaper than hiring a private auto (\u20B9800\u20131,200)."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Idgah+Bus+Stand,+Agra/Fatehpur+Sikri/Itimad-ud-Daulah,+Agra/Kinari+Bazaar,+Agra" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Heritage \u00B7 Day 1" day="Taj Sunrise \u2192 Fort \u2192 Baby Taj \u2192 Mehtab Bagh"
                  stops={["East Gate 5:50am","Taj Mahal","Cafe Sheroes","Agra Fort 10am","Itimad-ud-Daulah 3:30pm","Mehtab Bagh 5pm"]}
                  distance="15km \u00B7 Private cab \u20B91,200\u20131,500" note="Private cab for the full day is the smart move at this budget. Negotiate \u20B91,200\u20131,500 for a full-day AC car."
                  color="border-orange-200 bg-orange-50"
                  url="https://www.google.com/maps/dir/Taj+Mahal+East+Gate,+Agra/Agra+Fort/Itimad-ud-Daulah,+Agra/Mehtab+Bagh,+Agra" />
                <RouteCard plan="Heritage \u00B7 Day 2" day="Fatehpur Sikri \u2192 Marble Workshop \u2192 Old Agra"
                  stops={["Hotel 7:30am","Fatehpur Sikri 8:30am","Subhash Emporium 2pm","Kinari Bazaar 3:30pm","Panchhi Petha","Rooftop Chai"]}
                  distance="85km round trip \u00B7 Private cab" note="Ask your cab driver to wait at Fatehpur Sikri (2.5\u20133hrs). The return route passes through Sikandra \u2014 Akbar\u2019s Tomb is worth a 30-min stop if time allows."
                  color="border-orange-200 bg-orange-50"
                  url="https://www.google.com/maps/dir/Agra/Fatehpur+Sikri/Subhash+Emporium+Fatehabad+Road+Agra/Kinari+Bazaar,+Agra" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Luxury \u00B7 Day 1" day="Private Taj \u2192 Fort \u2192 Artisan Workshop \u2192 Mehtab Bagh"
                  stops={["East Gate 5:50am","Taj Mahal 6\u20139am","Oberoi Breakfast","Agra Fort 11am","Marble Workshop 4pm","Mehtab Bagh 5:15pm"]}
                  distance="18km \u00B7 Private car + guide" note="Your hotel concierge can arrange the master artisan visit. The marble inlay technique is identical to what built the Taj 400 years ago."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Taj+Mahal+East+Gate,+Agra/Agra+Fort/Mehtab+Bagh,+Agra" />
                <RouteCard plan="Luxury \u00B7 Day 2" day="Fatehpur Sikri \u2192 Baby Taj \u2192 Curated Shopping"
                  stops={["Hotel 8:30am","Fatehpur Sikri 9:15am","Heritage Haveli Lunch","Itimad-ud-Daulah 2pm","Government Emporium 3:30pm","Hotel Terrace 5pm"]}
                  distance="90km round trip \u00B7 Private car" note="The hotel can arrange a heritage haveli lunch stop on the return from Fatehpur Sikri. Worth the extra \u20B91,500\u20132,000 for the setting."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Agra/Fatehpur+Sikri/Itimad-ud-Daulah,+Agra" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113579.6!2d78.0!3d27.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Agra Travel Map" />
            </div>
          </section>

          {/* ── PETHA & FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="indian sweets petha agra traditional mithai shop colorful"
              fallback="https://images.unsplash.com/photo-1606491956689-2ea866880049?w=900&q=80"
              alt="Agra Petha sweets at a traditional shop"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Panchhi Petha on MG Road: \u20B9200\u2013400 for a box. The shops near the Taj gates charge double for half the quality.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting the Taj at midday", desc: "Harsh light, peak crowds, 40\u00B0C heat in summer. Sunrise or nothing. The marble literally glows pink at 6:15am \u2014 it looks white and flat by 10am.", icon: "\u2600\uFE0F" },
                { title: "Using the south (main) gate", desc: "70% of tourists queue here. East gate and west gate have the same entry but dramatically shorter lines. East gate is closest to Taj Ganj hotels.", icon: "\uD83D\uDEAA" },
                { title: "Marble shops near the east gate", desc: "Skip the marble inlay shops near the east gate \u2014 they\u2019re all commission traps. If you want real marble work, go to Subhash Emporium on Fatehabad Road.", icon: "\uD83D\uDED2" },
                { title: "Day-tripping from Delhi", desc: "You miss the sunrise \u2014 the single best experience in Agra. One night is all you need but it makes all the difference.", icon: "\uD83D\uDE82" },
                { title: "Hiring touts as guides", desc: "Men at the gate offering \u2018special access\u2019 are not ASI-certified. Pay \u20B9500\u2013700 for an official guide inside the ticket office \u2014 they know every hidden detail.", icon: "\uD83D\uDDE3\uFE0F" },
                { title: "Skipping Fatehpur Sikri", desc: "An entire abandoned Mughal capital city 37km away. Most rushed tourists skip it. Budget 2.5 hours \u2014 it rivals the Taj for architectural impact.", icon: "\uD83C\uDFDB\uFE0F" },
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
                { icon: "\uD83C\uDF05", title: "The 5:50am Rule", desc: "Arrive at the east gate at 5:50am. Gates open at 6:00am. The first 20 minutes inside are almost empty \u2014 tour buses don\u2019t arrive until 6:30am. This is the entire point of staying overnight in Agra.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF1C", title: "Full Moon Nights", desc: "The Taj is open on full moon nights (and 2 nights before/after) from 8:30\u201312:30pm. Limited to 400 visitors. Book at ASI website 24hrs in advance. The marble under moonlight is surreal.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF75", title: "Bedai-Jalebi Breakfast", desc: "Agra\u2019s signature breakfast is Bedai (spiced puri) with aloo sabzi and jalebi. Deviram Sweets in Kinari Bazaar does the best version for \u20B960\u201380. Skip hotel breakfast for this.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF8", title: "The Diana Bench Photo", desc: "The iconic bench where Princess Diana was photographed is on the main platform. Best light at 6:15\u20136:45am. By 7:30am there\u2019s a 20-minute queue for the same spot.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE95", title: "Use Ola/Uber Not Autos", desc: "Auto-rickshaw drivers in Agra are aggressive negotiators and will add \u2018detour\u2019 stops to commission shops. Use Ola or Uber \u2014 fixed price, no arguments, AC in summer.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2714 best value, clear skies | Dec\u2013Jan \u2714 best weather, foggy mornings add magic | Feb\u2013Mar \u2714 warm, good light | Apr\u2013Jun \u2600\uFE0F too hot | Jul\u2013Sep \uD83C\uDF27\uFE0F monsoon, Taj closed Fridays year-round", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Agra itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Agra Trip \u2192
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip \u2192</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Agra?", a: "2 days is the sweet spot. Day 1 covers Taj Mahal sunrise, Agra Fort, and Mehtab Bagh sunset. Day 2 covers Fatehpur Sikri, Kinari Bazaar, and Itimad-ud-Daulah. 1 day is too rushed to enjoy the Taj properly. 3 days only if you want to include Mathura-Vrindavan." },
                { q: "What is the best time to visit the Taj Mahal?", a: "Sunrise is the only correct answer. Gates open at 6am (5:30am in summer). Arrive by 5:50am to be in the first group. You get 20 minutes of near-empty Taj before tour groups arrive. October to March offers the best weather with morning mist that makes the marble glow." },
                { q: "How much does a 2-day Agra trip cost?", a: "Budget solo: \u20B94,500\u2013\u20B97,000 including accommodation. Heritage mid-range: \u20B912,000\u2013\u20B920,000 for two. Luxury: \u20B935,000\u2013\u20B975,000 for two. The biggest variable is accommodation and whether you hire a private guide." },
                { q: "Is Agra safe for solo travellers?", a: "Agra is safe if you use common sense. The main annoyance is touts near the Taj. Say no firmly and keep walking. Use Ola/Uber instead of negotiating with auto drivers. Avoid the lanes behind the east gate after dark." },
                { q: "Should I visit Agra as a day trip from Delhi?", a: "A day trip means missing the sunrise \u2014 the single best experience in Agra. The Gatimaan Express takes 1hr 40min from Delhi. If you must day-trip, take the 8:10am train, but you see the Taj in peak heat with maximum crowds. One night changes everything." },
                { q: "What food is Agra famous for?", a: "Petha (translucent pumpkin sweet \u2014 buy from Panchhi Petha on MG Road, not near the Taj), Bedai-Jalebi breakfast, Mughlai cuisine at Pinch of Spice or Peshawri, and chaat at Kinari Bazaar. Budget \u20B9200\u2013400 per meal at local spots." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Golden Triangle \u2014 Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: false },
                { label: "Jaipur \u2014 3 Day Royal City Guide", href: "/blog/jaipur-3-days", soon: false },
                { label: "Varanasi \u2014 3 Day Spiritual Guide", href: "/blog/varanasi-3-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="agra-2-days" />
          <RelatedGuides currentSlug="agra-2-days" />
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
