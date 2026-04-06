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

const MAHA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "viewpoints",  emoji: "\uD83C\uDFD4\uFE0F", label: "Viewpoints Guide" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mahabaleshwar 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Mahabaleshwar in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
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
export default function MahabaleshwarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹5k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF1F", label: "Weekend", sub: "₹6k–15k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MAHA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mahabaleshwar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mahabaleshwar western ghats valley viewpoint maharashtra"
            fallback="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1600&q=85"
            alt="Mahabaleshwar Western Ghats valley viewpoint"
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
              <span className="text-white/70">Mahabaleshwar 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mahabaleshwar in 2 Days: Viewpoints, Forts & Strawberry Farms
                <em className="italic text-gold-light"> (Budget to Weekend, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs, viewpoint tips — and the mistakes that ruin most Mahabaleshwar weekends.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹4,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Arthur&apos;s Seat with its 600m vertical drop is genuinely terrifying — one of the most dramatic cliff edges in India. Go at 7am, not 11am when it&apos;s socked in with fog.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── VIEWPOINTS GUIDE ── */}
          <section id="viewpoints" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFD4\uFE0F"} Viewpoints Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mahabaleshwar has a dozen viewpoints but only a handful that genuinely take your breath away. The rest are tourist traps with parking lots and corn stalls.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Arthur’s Seat", emoji: "\uD83E\uDEA8", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Drop", "600m vertical cliff"], ["Best time", "7am — before fog"], ["Entry", "Free"], ["Vibe", "Dramatic, terrifying, unforgettable"]],
                  note: "The most dramatic cliff edge in India. The 600m vertical drop is not a joke. Railing is minimal. Go at 7am — by 11am it’s socked in with fog and you’ll see nothing." },
                { title: "Elephant’s Head Point", emoji: "\uD83D\uDC18", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Known for", "Rock shaped like elephant head"], ["Best time", "Morning, clear day"], ["Entry", "Free"], ["Vibe", "Quieter than Arthur’s Seat"]],
                  note: "Best combined with Arthur’s Seat in one morning loop. The rock formation is genuinely impressive when the valley below is clear." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Hit Arthur&apos;s Seat and Elephant&apos;s Head Point together at 7am, then loop back through Wilson Point for the panoramic view. Three viewpoints in 2 hours, all before the tourist buses arrive at 10am.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹4,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct – May" />
            <StatCard icon={"\uD83D\uDE97"} label="From Pune" value="120 km" />
          </div>

          {/* ── Strawberry quote ── */}
          <blockquote className="border-l-4 border-gold pl-6 mb-14 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The strawberry picking farms are fun for kids but overpriced for adults — {"₹"}400 to pick {"₹"}100 worth of berries. Buy them at the roadside stalls instead.
            </p>
          </blockquote>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
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
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Mahabaleshwar Town Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel on Main Rd {"·"} {"₹"}800{"–"}{"₹"}1,500/night {"·"} Local transport or shared auto</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Viewpoints Blitz + Pratapgad Fort"
                  items={[
                    "6:30am: Arthur’s Seat — the 600m vertical drop is no exaggeration. Railing is minimal, so stay alert. The valley below is crystal clear at this hour.",
                    "7:30am: Elephant’s Head Point — 5 min drive from Arthur’s Seat, same road. The rock formation is best seen from the left viewing platform.",
                    "8:30am: Wilson Point for the panoramic Western Ghats view. Breakfast at a dhaba on the way back — misal pav ₹60–80.",
                    "10:30am: Drive to Pratapgad Fort (24km, 45 min). Most tourists skip it. The drive through the Western Ghats alone is worth the detour.",
                    "Pratapgad Fort — Shivaji’s masterpiece. Free entry. Budget 1.5–2 hours for the climb and exploration. Carry water.",
                    "2pm: Late lunch at a local dhaba near Mahabaleshwar market — veg thali ₹120–150.",
                    "4pm: Venna Lake — boating ₹100–200 per person. Skip the horse rides, they’re overpriced.",
                    "Evening: Walk through the main market. Fresh strawberries ₹100–150 per box from roadside stalls."
                  ]}
                  cost={"₹1,200–₹1,800 excluding accommodation"} />
                <DayCard day="Day 2" title="Old Mahabaleshwar + Mapro + Departure"
                  items={[
                    "7:30am: Old Mahabaleshwar temples (5km from town). The Mahabaleshwar Temple and Panchganga Temple are genuinely ancient — not the tourist kind.",
                    "9am: Three Monkey Point and Bombay Point on the drive back — quick photo stops, 10 min each.",
                    "10:30am: Mapro Garden — free entry, strawberry tastings, chocolate factory. Budget 45 min. Buy Mapro products here, cheaper than market.",
                    "12pm: Lingmala Waterfall — a 15 min walk from the road. Best after monsoon (Oct–Nov) but decent year-round. Free entry.",
                    "1pm: Lunch at the market area. Try the local corn and strawberry cream at street stalls.",
                    "2:30pm: Head back to Pune/Mumbai. The Wai Ghat descent is scenic — don’t rush it."
                  ]}
                  cost={"₹800–₹1,200 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}4,500{"–"}{"₹"}5,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Weekend ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF1F"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Weekend Plan — Resort or Heritage Hotel</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Brightland Resort or Evershine {"·"} {"₹"}3,000{"–"}{"₹"}6,000/night {"·"} Own car recommended</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Viewpoints + Fort + Strawberry Farm"
                  items={[
                    "6:30am: Arthur’s Seat at dawn — the 600m cliff is genuinely terrifying but the valley views are India’s best. Clear skies guaranteed at this hour.",
                    "7:30am: Elephant’s Head Point — combine with Arthur’s Seat, same road loop.",
                    "8:30am: Breakfast at your resort. No rush — this is the weekend plan.",
                    "10am: Drive to Pratapgad Fort (24km). The Western Ghats drive is spectacular. Budget 2 hours for the fort including the climb.",
                    "1pm: Lunch at Grinning Garden or a quality restaurant in town — ₹500–800 for two.",
                    "3pm: Strawberry farm visit — fun for families, skip the pick-your-own (₹400 for a tiny basket) and just buy at the stall. Alternatively, visit the Strawberry Heritage Museum.",
                    "4:30pm: Venna Lake — pedal boating ₹200–300. The late afternoon light on the lake is beautiful.",
                    "6pm: Wilson Point for sunset. Carry chai from a stall — best sunset spot in Mahabaleshwar.",
                    "8pm: Dinner at The Grapevine or Farmhouse — ₹800–1,200 for two."
                  ]}
                  cost={"₹3,000–₹4,500 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Old Mahabaleshwar + Mapro + Lingmala"
                  items={[
                    "7:30am: Old Mahabaleshwar — visit the ancient Mahabaleshwar Temple (Shiva), Panchganga Temple where five rivers meet, and Krishna Temple. These are 1,200+ year old temples, not replicas.",
                    "9:30am: Bombay Point — panoramic view of the Sahyadri range. 10 min stop.",
                    "10:30am: Mapro Garden — free tastings, pizza garden, chocolate factory tour. Great for families. Budget 1 hour.",
                    "12pm: Lingmala Waterfall — the 500ft cascade is accessible via a short trail. Best Oct–Feb when water flow is strong.",
                    "1:30pm: Lunch at a market restaurant. Try the Mahabaleshwar chikki and fudge as takeaway.",
                    "3pm: Depart for Pune/Mumbai. Stop at the roadside stalls at Wai for fresh strawberry cream and local jaggery.",
                  ]}
                  cost={"₹2,000–₹3,000 for two (excl. accommodation)"} />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 2-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}12,000{"–"}{"₹"}18,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">{"\uD83C\uDF1F"} Weekend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (1N)", "₹800–₹1,500", "₹3,000–₹6,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹600–₹1,000", "₹2,000–₹3,500"],
                    ["\uD83D\uDE97 Transport", "₹800–₹1,200", "₹1,500–₹2,500"],
                    ["\uD83C\uDFAF Activities", "₹300–₹500", "₹800–₹1,500"],
                    ["\uD83C\uDF53 Shopping/Souvenirs", "₹200–₹400", "₹500–₹1,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹4,500–₹5,000", "₹6,000–₹15,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Weekend prices are higher Oct{"–"}Feb due to peak season demand from Mumbai and Pune.
            </p>
          </section>

          {/* ── Pratapgad quote ── */}
          <blockquote className="border-l-4 border-gold pl-6 mb-14 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Pratapgad Fort is a Shivaji masterpiece 24km from Mahabaleshwar and most tourists skip it. The drive through the Western Ghats alone is worth the detour.
            </p>
          </blockquote>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Mahabaleshwar — Must-See Places"
            subtitle="Click each thumbnail to explore Mahabaleshwar's most iconic viewpoints, forts and natural wonders."
            spots={[
              { name: "Arthur’s Seat",         query: "arthurs seat mahabaleshwar cliff valley western ghats viewpoint",  desc: "A 600m vertical drop with minimal railing — one of India’s most dramatic cliff edges. Visit at 7am for clear valley views before the fog rolls in." },
              { name: "Pratapgad Fort",            query: "pratapgad fort mahabaleshwar maharashtra hilltop stone fortress",    desc: "Shivaji’s iconic hilltop fortress 24km from town. Free entry, stunning Western Ghats views from the ramparts. Allow 2 hours." },
              { name: "Lingmala Waterfall",        query: "lingmala waterfall mahabaleshwar cascade green forest nature",       desc: "A 500ft waterfall accessible via a short trail. Best visited Oct–Feb when the water flow is strongest. Free entry." },
              { name: "Mapro Garden",              query: "mapro garden mahabaleshwar strawberry farm maharashtra colorful",    desc: "Free entry strawberry tastings, chocolate factory, and a pizza garden. Buy Mapro products here — cheaper than the market." },
              { name: "Venna Lake",                query: "venna lake mahabaleshwar boating peaceful hills maharashtra",        desc: "Peaceful lake in the heart of town. Pedal boating ₹100–300. Best in late afternoon light. Skip the horse rides." },
            ]}
          />

          {/* ── VIEWPOINT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="western ghats valley morning mist green hills maharashtra sahyadri"
              fallback="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80"
              alt="Western Ghats valley morning view from Mahabaleshwar"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Western Ghats valley at dawn from Arthur&apos;s Seat — arrive before 7am when the air is crystal clear and the tourist buses haven&apos;t arrived.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to viewpoints after 10am", desc: "Fog rolls in by mid-morning most days. Arthur’s Seat at 11am = staring at white nothing. Go at 7am or don’t bother.", icon: "\uD83C\uDF2B\uFE0F" },
                { title: "Paying ₹400 for strawberry picking", desc: "The pick-your-own farms charge ₹400 for a small basket worth ₹100. Buy fresh strawberries from roadside stalls at the Wai Ghat road for a fraction of the price.", icon: "\uD83C\uDF53" },
                { title: "Skipping Pratapgad Fort", desc: "24km from town, most tourists don’t bother. It’s Shivaji’s most famous fortress and the Western Ghats drive alone makes it worthwhile.", icon: "\uD83C\uDFF0" },
                { title: "Spending all day at Venna Lake", desc: "It’s a pleasant lake, but 30 minutes of boating is enough. Don’t waste 3 hours here when Arthur’s Seat and Pratapgad exist.", icon: "\u26F5" },
                { title: "Visiting during monsoon (Jun–Sep)", desc: "The hill station essentially shuts down. Roads are dangerous, viewpoints are invisible, many hotels close. October post-monsoon greenery is the sweet spot.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Eating only at hotel restaurants", desc: "The main market has excellent street food — corn, bhel, strawberry cream — at a fraction of hotel prices. Local dhabas serve better misal pav than any resort.", icon: "\uD83C\uDF7D" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "The 7am Rule", desc: "Every viewpoint in Mahabaleshwar is a completely different experience before 8am. Clear skies, no crowds, no corn sellers. Set one early alarm — it changes the entire trip.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF53", title: "Strawberry Season", desc: "Peak strawberry season is December–March. Mapro Garden is free and has tastings. For the best fresh berries, buy from the Wai Ghat road stalls, not the town market.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEE3\uFE0F", title: "The Pune Route via Wai", desc: "The Wai Ghat road is the most scenic approach. 4 hairpin turns with valley views that rival the viewpoints themselves. Don’t rush the drive — stop at the lookout points.", color: "bg-teal-50 border-teal-200" },
                { icon: "\u26EA", title: "Old Mahabaleshwar Temples", desc: "The ancient temples at Old Mahabaleshwar are 1,200+ years old and most tourists skip them for viewpoints. Visit early morning — the Panchganga Temple where five rivers originate is remarkable.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Skip Horse Rides", desc: "Horse rides at every viewpoint are overpriced (₹500–1,000) and the animals are often poorly treated. Walk instead — distances between viewpoints are short.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov \u2705 post-monsoon green, few crowds | Dec–Feb \u26A0\uFE0F peak season, weekend jams | Mar–May \u2705 strawberry season, warm | Jun–Sep \u26D4 closed/dangerous", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mahabaleshwar"
            hotels={[
              { name: "Hotel Panorama", type: "Budget Hotel · Main Road", price: "From ₹1,200/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/panorama-mahabaleshwar.html?aid=2820480" },
              { name: "Brightland Resort", type: "Resort · Hilltop", price: "From ₹4,500/night", rating: "4", badge: "Weekend pick", url: "https://www.booking.com/hotel/in/brightland-resort-mahabaleshwar.html?aid=2820480" },
              { name: "Le Meridien Mahabaleshwar", type: "Luxury Resort", price: "From ₹8,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/le-meridien-mahabaleshwar.html?aid=2820480" },
            ]}
            activities={[
              { name: "Pratapgad Fort Guided Trek", duration: "Half day", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mahabaleshwar&partner_id=PSZA5UI" },
              { name: "Mapro Garden & Strawberry Farm Tour", duration: "2 hours", price: "Free entry", badge: "Family", url: "https://www.getyourguide.com/s/?q=mahabaleshwar&partner_id=PSZA5UI" },
              { name: "Mahabaleshwar Viewpoints Circuit", duration: "Full day", price: "From ₹1,200/car", url: "https://www.getyourguide.com/s/?q=mahabaleshwar&partner_id=PSZA5UI" },
              { name: "Old Mahabaleshwar Temple Walk", duration: "2 hours", price: "Free", url: "https://www.getyourguide.com/s/?q=mahabaleshwar&partner_id=PSZA5UI" },
            ]}
            pdfProductId="mahabaleshwar-2-days-pdf"
          />

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Mahabaleshwar itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mahabaleshwar Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Mahabaleshwar?", a: "2 days is enough to cover all major viewpoints, Pratapgad Fort, Mapro Garden, Venna Lake and strawberry farms. 3 days lets you add Old Mahabaleshwar temples and the Koyna Valley drive at a relaxed pace." },
                { q: "What is the best time to visit Mahabaleshwar?", a: "October to May is the best window. October–November has stunning post-monsoon greenery with fewer crowds. December–February is peak season with pleasant weather but heavy weekend traffic from Mumbai and Pune. March–May is strawberry season. June–September the hill station is effectively closed due to extreme monsoon rainfall." },
                { q: "How much does a 2-day Mahabaleshwar trip cost?", a: "Budget: ₹4,500–₹5,000 per person including accommodation. Weekend comfort: ₹6,000–₹15,000 per person with a resort stay, restaurant meals and all activities. Prices rise 30–50% on weekends during peak season (Dec–Feb)." },
                { q: "Is Mahabaleshwar good for a weekend trip from Mumbai or Pune?", a: "It’s one of the best weekend getaways from both cities. Pune is just 120km (2.5–3 hours via Wai) and Mumbai is 260km (5–6 hours via Expressway + Wai Ghat). Leave Friday evening or early Saturday morning. The Pune route via Wai is the most scenic approach." },
                { q: "Are strawberry farms worth visiting?", a: "The pick-your-own farms are fun for families with kids but overpriced for adults — about ₹400 for a tiny basket. Buy fresh strawberries at roadside stalls for ₹100–150 per box instead. Mapro Garden is free and worth visiting for tastings and the chocolate factory." },
                { q: "What should I not miss in Mahabaleshwar?", a: "Arthur’s Seat at 7am before fog, Pratapgad Fort (24km from town, most tourists skip it), and the ancient temples at Old Mahabaleshwar. The drive to Pratapgad through the Western Ghats is spectacular on its own." },
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
                { label: "Lonavala & Khandala — Weekend Guide", href: "/blog/lonavala-2-days", soon: true },
                { label: "Goa — 3 Day Beach Itinerary", href: "/blog/goa-3-days", soon: false },
                { label: "Hampi — 3 Day Heritage Guide", href: "/blog/hampi-3-days", soon: false },
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

          <RelatedGuides currentSlug="mahabaleshwar-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
