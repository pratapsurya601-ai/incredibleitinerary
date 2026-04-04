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


const LONAVALA_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "when",        emoji: "\uD83C\uDF26\uFE0F", label: "When to Visit" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Lonavala 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Lonavala in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function LonavalaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B94k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF1F", label: "Weekend Getaway", sub: "\u20B95k\u201315k", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LONAVALA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lonavala" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lonavala western ghats green hills maharashtra monsoon"
            fallback="https://images.unsplash.com/photo-1600011247426-3bca6e68e678?w=1600&q=85"
            alt="Lonavala green hills in the Western Ghats during monsoon"
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
              <span className="text-white/70">Lonavala 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lonavala in 2 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget &amp; Weekend, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs, monsoon tips — and why most people waste their weekend on selfie points.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 Maharashtra</span>
              <span>&middot;</span>
              <span>\uD83D\uDDD3 2 Days</span>
              <span>&middot;</span>
              <span>\uD83D\uDCB0 From \u20B93,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Lonavala in monsoon (Jul&ndash;Sep) is a completely different destination than Lonavala in summer &mdash; waterfalls appear from nowhere, the ghats turn electric green, and visibility drops to 20 meters. It&apos;s magical.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
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

          {/* ── WHEN TO VISIT ── */}
          <section id="when" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83C\uDF26\uFE0F When to Visit Lonavala</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Season changes everything about this destination. Plan accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                { title: "Monsoon (Jul\u2013Sep)", emoji: "\uD83C\uDF27\uFE0F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Vibe","Waterfalls everywhere, misty ghats, electric green"],["Crowds","Extreme on weekends, empty on weekdays"],["Budget","Hotels 30\u201350% pricier on Sat\u2013Sun"]],
                  note: "Visit on a weekday or suffer. Bhushi Dam on a Sunday is pure chaos." },
                { title: "Winter (Oct\u2013Feb)", emoji: "\u2744\uFE0F", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Vibe","Clear skies, cool mornings, best for trekking"],["Crowds","Moderate, manageable even on weekends"],["Budget","Best hotel value outside long weekends"]],
                  note: "Best season for Rajmachi Fort trek and cave exploration. No waterfalls though." },
                { title: "Summer (Mar\u2013Jun)", emoji: "\u2600\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Vibe","Hot, dry, brown landscape. April\u2013May = 38\u00B0C"],["Crowds","Low except April school holidays"],["Budget","Cheapest hotels, but limited appeal"]],
                  note: "Skip unless you only want Della Adventure Park and caves. Not worth the drive for viewpoints." },
              ].map((season) => (
                <div key={season.title} className={`rounded-xl border p-5 ${season.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${season.th}`}>
                    <span>{season.emoji}</span>{season.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {season.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {season.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Best window:</strong> A Tuesday or Wednesday in late July or August. Full monsoon glory, zero crowds, hotels at weekday rates. October&ndash;November is the sweet spot for trekking.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="2 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u20B93,500" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Jul \u2013 Feb" />
            <StatCard icon="\uD83D\uDE82" label="From Mumbai" value="2 hrs" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

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
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Train + Local Transport</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel near market &middot; \u20B9800\u2013\u20B91,500/night &middot; Auto + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Viewpoints, Dam & Caves"
                  items={[
                    "7am train from Pune or Mumbai \u2014 \u20B950\u2013\u20B9150. Arrive Lonavala station by 9am.",
                    "Auto to Tiger\u2019s Leap viewpoint (\u20B9150 one way). 20 min there \u2014 cliff-edge valley views, misty in monsoon.",
                    "Walk to Lion\u2019s Point (1.5km from Tiger\u2019s Leap). Same ridge, different angle, fewer people.",
                    "Auto to Bhushi Dam (\u20B9100). In monsoon, water overflows the steps \u2014 wade carefully. Go on a weekday or skip entirely on weekends.",
                    "Late lunch at a local dhaba near the market \u2014 vada pav + misal pav, \u20B980\u2013\u20B9120.",
                    "Evening: Walk through Lonavala Market, buy chikki from Cooper\u2019s or Maganlal \u2014 \u20B9150\u2013\u20B9300/box. The only souvenir worth buying.",
                    "Check in, rest. Street food dinner near the station \u2014 \u20B9150\u2013\u20B9200."
                  ]}
                  cost="\u20B91,200\u2013\u20B91,800 excluding accommodation" />
                <DayCard day="Day 2" title="Ancient Caves & Lonavala Lake"
                  items={[
                    "8am auto to Karla Caves (\u20B9200, 11km). 2,000-year-old Buddhist rock-cut caves with massive chaitya hall. Entry \u20B925. 1 hour.",
                    "Walk or auto to Bhaja Caves (3km from Karla). Equally impressive, always empty. Entry \u20B925. 45 min.",
                    "The Rajmachi Fort trek is the best activity near Lonavala and most weekend tourists skip it for selfie points. 14km round trip, Shivaji-era ruins, and valley views that justify the leg pain. Start only if you have 6 hours and good shoes.",
                    "Alternative to Rajmachi: Lonavala Lake (monsoon only) \u2014 peaceful, good for a 30-min sit-down.",
                    "Lunch at a highway dhaba on Pune road \u2014 \u20B9150\u2013\u20B9250 for thali.",
                    "3pm train back to Mumbai or Pune. Buy more chikki at the station \u2014 prices are same as market."
                  ]}
                  cost="\u20B9800\u2013\u20B91,400 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B93,500\u2013\u20B94,000 including accommodation &amp; transport</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: WEEKEND GETAWAY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83C\uDF1F</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Weekend Getaway &mdash; Car + Good Hotel</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Resort or boutique hotel &middot; \u20B93,000\u2013\u20B98,000/night &middot; Own car or rental</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Della Adventure + Viewpoints + Evening Walk"
                  items={[
                    "Drive from Mumbai/Pune \u2014 leave by 7am to beat expressway traffic. 2hrs.",
                    "10am: Della Adventure Park \u2014 zip-lining, ATV rides, paintball. Half-day pass \u20B91,500\u2013\u20B92,500/person. Book online for 15% off.",
                    "1pm: Lunch at Della\u2019s restaurant or drive to a Parsi dhaba on old highway \u2014 \u20B9400\u2013\u20B9600 for two.",
                    "3pm: Tiger\u2019s Leap + Lion\u2019s Point loop. In monsoon, clouds roll through the valley below you.",
                    "5pm: Check in to hotel, freshen up.",
                    "7pm: Dinner at a Lonavala restaurant \u2014 The Kinara or Golden Vadapav for local flavour. \u20B9500\u2013\u20B9800 for two.",
                    "Night: Walk Lonavala Market, chikki shopping at Maganlal or Narayani."
                  ]}
                  cost="\u20B93,500\u2013\u20B95,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Caves, Trek or Lake + Departure"
                  items={[
                    "7:30am: Drive to Karla Caves (20 min). Karla and Bhaja Caves are 2,000-year-old Buddhist rock-cut caves that rival Ajanta. They\u2019re 20 minutes from Lonavala and always empty. Budget 2 hours for both.",
                    "10am: Bhaja Caves (3km further). Older than Karla, with unique rock-cut stupas.",
                    "11:30am: Option A \u2014 Rajmachi Fort trek (start from Udhewadi village, 6km one way, easier route). Carry water and snacks. Back by 4pm.",
                    "11:30am: Option B \u2014 Bhushi Dam (weekday only) + Lonavala Lake + Ryewood Park for a relaxed morning.",
                    "Lunch: Highway dhaba or The Cream Centre \u2014 \u20B9500\u2013\u20B9800 for two.",
                    "3\u20134pm: Drive back. Stop at chikki shops on the highway \u2014 prices are 10\u201320% cheaper than Lonavala market."
                  ]}
                  cost="\u20B92,000\u2013\u20B93,500 for two (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 2-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B910,000\u2013\u20B915,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">\uD83C\uDF1F Weekend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (1N)", "\u20B9800\u2013\u20B91,500", "\u20B93,000\u2013\u20B98,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B9500\u2013\u20B9800", "\u20B91,500\u2013\u20B92,500"],
                    ["\uD83D\uDE8C Transport", "\u20B9400\u2013\u20B9600", "\u20B91,000\u2013\u20B92,000"],
                    ["\uD83C\uDFAF Activities", "\u20B950\u2013\u20B9200", "\u20B91,500\u2013\u20B93,000"],
                    ["\uD83C\uDF6C Chikki & Shopping", "\u20B9200\u2013\u20B9400", "\u20B9300\u2013\u20B9600"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B92,000\u2013\u20B93,500", "\u20B93,500\u2013\u20B98,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Weekend rates (Fri\u2013Sun) are 30\u201350% higher for hotels in monsoon season.
            </p>
          </section>

          {/* ── LONAVALA AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Lonavala"
            hotels={[
              { name: "Zostel Lonavala", type: "Budget Hostel", price: "From \u20B9600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-lonavala.html?aid=2820480" },
              { name: "Della Resorts", type: "Adventure Resort", price: "From \u20B95,500/night", rating: "5", badge: "Weekend pick", url: "https://www.booking.com/hotel/in/della-resorts-lonavala.html?aid=2820480" },
              { name: "Hilton Shillim Estate", type: "Luxury Wellness Retreat", price: "From \u20B918,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/hilton-shillim-estate.html?aid=2820480" },
            ]}
            activities={[
              { name: "Della Adventure Park Day Pass", duration: "Half day", price: "From \u20B91,500/person", badge: "Must do", url: "https://www.getyourguide.com/lonavala/?partner_id=PSZA5UI" },
              { name: "Karla & Bhaja Caves Guided Tour", duration: "3 hours", price: "From \u20B9500/person", badge: "Cultural", url: "https://www.getyourguide.com/lonavala/?partner_id=PSZA5UI" },
              { name: "Rajmachi Fort Trek (Guided)", duration: "Full day", price: "From \u20B9800/person", url: "https://www.getyourguide.com/lonavala/?partner_id=PSZA5UI" },
              { name: "Lonavala Food Walk", duration: "2 hours", price: "From \u20B9400/person", url: "https://www.getyourguide.com/lonavala/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="lonavala-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Lonavala &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Lonavala&apos;s most iconic viewpoints, caves and trails."
            spots={[
              { name: "Bhushi Dam",           query: "bhushi dam lonavala waterfall steps monsoon flowing water landscape",          desc: "Water cascading over stone steps in monsoon \u2014 an iconic Lonavala experience. Absolutely packed on weekends. Visit on a Tuesday morning or skip it." },
              { name: "Tiger\u2019s Leap",    query: "tigers leap lonavala cliff valley view western ghats misty landscape",         desc: "A cliff-edge viewpoint overlooking a 650m valley drop. In monsoon, clouds drift through the gorge below you. 20 minutes is enough." },
              { name: "Rajmachi Fort",         query: "rajmachi fort trek lonavala ruins hilltop valley ancient architecture",        desc: "A 14km round-trip trek to Shivaji-era twin forts with panoramic valley views. The best activity in Lonavala that most weekend tourists skip." },
              { name: "Karla Caves",           query: "karla caves lonavala buddhist rock cut ancient architecture pillars interior", desc: "A 2,000-year-old Buddhist chaitya hall carved into solid rock. The largest and best-preserved rock-cut prayer hall in India." },
              { name: "Lion\u2019s Point",     query: "lions point lonavala panoramic valley view misty green hills landscape",      desc: "Panoramic valley views from a ridgeline viewpoint. Less crowded than Tiger\u2019s Leap and just 1.5km away on the same road." },
            ]}
          />

          {/* ── CAVES IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="karla caves interior ancient buddhist rock cut architecture pillars"
              fallback="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=900&q=80"
              alt="Ancient rock-cut interior of Karla Caves near Lonavala"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Karla and Bhaja Caves are 2,000-year-old Buddhist rock-cut caves that rival Ajanta. They&apos;re 20 minutes from Lonavala and always empty.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Bhushi Dam on a weekend", desc: "Bhushi Dam in monsoon is a viral Instagram spot and an absolute zoo on weekends. Go on a Tuesday morning or don\u2019t go at all.", icon: "\uD83D\uDCF8" },
                { title: "Driving on Saturday morning", desc: "Mumbai\u2013Pune Expressway is gridlocked 7\u201311am on Saturdays. Leave Friday night or Sunday early. Or take the train.", icon: "\uD83D\uDE97" },
                { title: "Skipping the caves for selfie points", desc: "Karla and Bhaja Caves are genuine heritage. Tiger\u2019s Leap is a 10-minute stop. Don\u2019t spend 3 hours at viewpoints and skip 2,000-year-old caves.", icon: "\u26EA" },
                { title: "Wearing sandals on Rajmachi trek", desc: "14km on rocky terrain with 600m elevation gain. Proper trekking shoes are non-negotiable. Slippers = twisted ankle.", icon: "\uD83E\uDD7E" },
                { title: "Buying chikki from random highway stalls", desc: "Stick to Cooper\u2019s, Maganlal, or Narayani. Random stalls often sell stale stock at inflated prices to tourists in cars.", icon: "\uD83C\uDF6C" },
                { title: "Visiting in April\u2013May expecting green hills", desc: "Lonavala turns brown and hits 38\u00B0C in peak summer. The waterfalls are dry. Come in monsoon or winter.", icon: "\uD83C\uDF21\uFE0F" },
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
                { icon: "\uD83D\uDE82", title: "Train Beats Car Every Time", desc: "Lonavala station is in the centre of town. Mumbai CSMT to Lonavala is \u20B950\u2013\u20B9150 and avoids expressway tolls (\u20B9300+), fuel, parking stress, and Saturday traffic jams.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF27\uFE0F", title: "Weekday Monsoon = Different Planet", desc: "Everything that makes Lonavala unbearable (crowds, traffic, selfie mobs) vanishes on a Tuesday. Same waterfalls, 5% of the people.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDED", title: "Rajmachi via Udhewadi", desc: "The trek from Lonavala side is 14km and steep. The easier route starts from Udhewadi village (accessible by car from Karjat side) \u2014 only 3km uphill walk to the fort.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF6C", title: "Chikki Quality Check", desc: "Good chikki snaps cleanly when you break it. If it bends like toffee, it\u2019s stale. Cooper\u2019s chocolate chikki and Maganlal\u2019s peanut chikki are the two gold standards.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Offline Maps Are Essential", desc: "Mobile signal drops out on the Rajmachi trek and around Bhaja Caves. Download Google Maps offline for the Lonavala region before you leave.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Jul\u2013Sep \u2705 peak monsoon beauty | Oct\u2013Nov \u2705 sweet spot for treks | Dec\u2013Feb \u2705 cool weather | Mar\u2013Jun \u2615 skip unless you want Della only", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Lonavala itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Lonavala Trip \u2192
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip \u2192</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Lonavala?", a: "2 days is ideal to cover viewpoints, caves, and a trek or adventure park. 1 day works as a rushed day trip from Mumbai or Pune. 3 days allows the full Rajmachi Fort trek plus a relaxed pace with Della Adventure Park." },
                { q: "What is the best time to visit Lonavala?", a: "July to September for monsoon magic \u2014 waterfalls, green valleys, misty ghats. October to February for pleasant weather and trekking. March to June is hot, dry, and not recommended for most visitors." },
                { q: "How much does a 2-day Lonavala trip cost?", a: "Budget solo: \u20B93,500\u2013\u20B94,000 including train, food, basic hotel, and entry fees. Weekend getaway for two: \u20B910,000\u2013\u20B915,000 including resort stay, Della Adventure Park, food, and fuel." },
                { q: "Is Lonavala worth visiting outside monsoon?", a: "Yes, but the experience changes completely. October\u2013February has clear skies and cool weather \u2014 ideal for Rajmachi Fort trek and cave visits. Waterfalls dry up, and the landscape turns brown by March. Summer is best skipped." },
                { q: "How do I reach Lonavala from Mumbai or Pune?", a: "From Mumbai: 83km via Mumbai\u2013Pune Expressway (2 hours by car) or 2.5 hours by train from CSMT (\u20B950\u2013\u20B9150). From Pune: 65km (1.5 hours by car) or 1 hour by train. Trains are frequent and Lonavala station is central." },
                { q: "Is the Rajmachi Fort trek difficult?", a: "Moderately difficult \u2014 14km round trip from the Lonavala side with 600m elevation gain, 5\u20137 hours total. The easier route from Udhewadi village (Karjat side) is only 3km uphill. Carry 2 litres of water and wear proper trekking shoes." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning More Maharashtra Trips?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa \u2014 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Gokarna \u2014 3 Day Beach Trek", href: "/blog/gokarna-3-days", soon: false },
                { label: "Hampi \u2014 3 Day Temple Circuit", href: "/blog/hampi-3-days", soon: false },
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

          <CombineWith currentSlug="lonavala-2-days" />
          <RelatedGuides currentSlug="lonavala-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
