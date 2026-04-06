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


const ALLEPPEY_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "backwaters",  emoji: "\uD83D\uDEF6", label: "Houseboat vs Canoe" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "maps",        emoji: "\uD83D\uDDFA\uFE0F", label: "Route Maps" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Alleppey 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Alleppey in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"→"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"→"}
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function AlleppeyBlogClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹8k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC91", label: "Couple", sub: "₹10k–25k total", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "\uD83D\uDEF3\uFE0F", label: "Luxury Houseboat", sub: "₹25k–50k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALLEPPEY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Alleppey" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="alleppey houseboat backwaters kerala india"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="Alleppey houseboat on Kerala backwaters at golden hour"
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
              <span className="text-white/70">Alleppey 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Backwaters & Coast
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Alleppey in 3 Days: Houseboats, Backwaters & Beaches
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the houseboat booking mistakes that cost you thousands.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Kerala, India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}6,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Book your houseboat directly at the Alleppey jetty — you&apos;ll save {"₹"}2,000-{"₹"}3,000 vs any online booking platform. Walk the docks, inspect the boat, then negotiate.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

          {/* ── HOUSEBOAT VS CANOE ── */}
          <section id="backwaters" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEF6"} Houseboat vs Canoe</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This is the single most important decision. Most people skip the canoe entirely and miss the best part.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Houseboat (Kettuvallam)", emoji: "\uD83D\uDEF3\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","Overnight stay, couples, families"],["Route","Alleppey to Kumarakom wide canals"],["Budget","₹5,000–₹45,000/night"],["Vibe","Floating hotel, meals included"]],
                  note: "Wide canals only. You see 30% of the backwaters. But the overnight experience under stars is unmatched." },
                { title: "Canoe (Shikara)", emoji: "\uD83D\uDEF6", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Dawn exploration, photographers, solo"],["Route","Narrow village canals, paddy fields"],["Budget","₹500–₹1,500 for 2–3hrs"],["Vibe","Intimate, silent, birdlife"]],
                  note: "Goes through narrow canals houseboats cannot enter. Dawn rides (6-8am) have the best light and bird activity." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Do the canoe ride at dawn (6am), then check into the houseboat at noon for the overnight stay. You get narrow canals AND the floating hotel experience.
              </p>
            </div>
          </section>

          {/* ── HUMAN VOICE QUOTE ── */}
          <blockquote className="border-l-4 border-teal pl-6 mb-14 bg-teal-50/40 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
              The canoe ride through narrow canals at dawn is better than any houseboat experience — {"₹"}500 for 2 hours vs {"₹"}8,000 for a houseboat. Both are magical but the canoe is more intimate.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹6,000"} />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Sep – Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Kochi (85km)" />
          </div>

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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Alleppey Town Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near jetty {"·"} {"₹"}500{"–"}{"₹"}1,200/night {"·"} Buses + auto: {"₹"}200{"–"}{"₹"}400/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Alappuzha Beach + Town Exploration"
                  items={[
                    "Arrive Alleppey by train or bus from Kochi (1.5hrs, ₹60–₹150). Check into guesthouse near KSWTD jetty.",
                    "Walk to Alappuzha Beach (10 min from town center) — the old pier and lighthouse are free to visit.",
                    "Lunch at an Alleppey local meals hotel — fish curry with red rice ₹80–₹120. Ask for karimeen if available.",
                    "3pm: Walk the Alleppey canals along Mullakkal and Commercial Canal — free, surprisingly beautiful.",
                    "5pm: Alappuzha Beach sunset — the pier extends far into the sea, dramatic light.",
                    "Dinner at Indian Coffee House, Alleppey — dosa set ₹60–₹100. Heritage building, old-world Kerala charm."
                  ]}
                  cost={"₹800–₹1,500 excluding accommodation"} />
                <DayCard day="Day 2" title="Canoe Ride + Coir Village + Pathiramanal"
                  items={[
                    "6am: Book a shikara (country canoe) at the KSWTD jetty — ₹400–₹600 for 2 hours. No need to pre-book, just show up.",
                    "Canoe through narrow canals: paddy fields, toddy tappers climbing palms, kingfishers everywhere.",
                    "9am: Breakfast — appam and egg curry at a canal-side tea shop. ₹50–₹80.",
                    "10:30am: Visit a coir-making village (Muhamma area) — free to watch, locals demo coconut husk spinning into rope.",
                    "1pm: KSWTD boat to Pathiramanal Island (₹75 return ticket). Migratory bird sanctuary on a backwater island. 1.5 hrs there.",
                    "Evening: Walk Alleppey pier again or explore Revi Karunakaran Museum (₹25 entry) if open."
                  ]}
                  cost={"₹1,200–₹1,800 excluding accommodation"} />
                <DayCard day="Day 3" title="Marari Beach + Kuttanad Rice Bowl"
                  items={[
                    "8am: Bus to Mararikulam (30 min, ₹25). Walk from bus stop to Marari Beach (1km).",
                    "Marari Beach: clean sand, fishing boats, zero hawkers. Swim, read, do nothing for 3 hours.",
                    "Lunch at a Marari fish shack — fresh catch fried or curry, ₹100–₹180.",
                    "2pm: Auto to Kuttanad (₹200–₹300). See below-sea-level farming — the only place in India where farming happens below sea level.",
                    "Walk the Kuttanad bunds between paddy fields. Photograph the landscape — it looks like a painting.",
                    "Return to Alleppey by 5pm. Train/bus back to Kochi or onward travel."
                  ]}
                  cost={"₹800–₹1,400 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}6,000{"–"}{"₹"}8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COUPLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC91"}</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Houseboat + Beach Stay</p>
                    <p className="text-xs text-rose-600 font-light">Stay: 1N houseboat + 2N Marari homestay {"·"} {"₹"}3,000{"–"}{"₹"}6,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Canoe Dawn + Houseboat Check-in"
                  items={[
                    "6am: Shikara canoe ride through narrow canals — ₹800–₹1,000 for 2.5hrs for a private boat. Best light, best birds.",
                    "Glide through Kuttanad paddy fields, watch toddy tappers, stop at a coir village to see rope-making.",
                    "9:30am: Breakfast at Dreamers cafe near the jetty — Kerala breakfast spread ₹400–₹600 for two.",
                    "12pm: Check into houseboat at Alleppey DTPC jetty. Inspect before paying. Negotiate — walk-in saves ₹2,000–₹3,000.",
                    "Afternoon: Cruise through Vembanad Lake and Punnamada backwaters. Lunch and tea served on board.",
                    "Evening: Houseboat anchors at a quiet spot. Dinner on deck under stars. Karimeen pollichathu — insist on this dish."
                  ]}
                  cost={"₹8,000–₹15,000 for two (houseboat + canoe)"} />
                <DayCard day="Day 2" title="Pathiramanal Island + Marari Beach"
                  items={[
                    "7am: Breakfast on the houseboat as it cruises back to Alleppey jetty.",
                    "9am: Disembark. Auto to Muhamma jetty (20 min, ₹200). Boat to Pathiramanal Island — migratory birds, quiet trails, 1.5hrs.",
                    "12pm: Drive/auto to Marari Beach (30 min). Check into a Marari homestay or boutique stay.",
                    "Marari Beach afternoon: clean sand, fishing boats coming in at 4pm, zero commercial activity.",
                    "5:30pm: Walk to the southern end for sunset — coconut palms silhouetted against the sky.",
                    "Dinner at homestay or Marari Beach Restaurant — fresh fish thali ₹400–₹700 for two."
                  ]}
                  cost={"₹3,000–₹5,000 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Kuttanad Rice Bowl + Alleppey Heritage"
                  items={[
                    "8am: Lazy breakfast at the homestay. Pack up and head to Kuttanad (30 min).",
                    "Kuttanad: walk the bunds, see below-sea-level farming, photograph the paddy landscape.",
                    "10:30am: Drive back towards Alleppey. Stop at a toddy shop for fresh toddy (₹30–50) and tapioca with fish curry.",
                    "12pm: Revi Karunakaran Museum — antique collection in a heritage mansion. ₹25 entry. 1 hour.",
                    "1:30pm: Lunch at Cassia, Alleppey or Halais Restaurant — ₹600–₹900 for two.",
                    "3pm: Final walk along Alleppey beach and canals before departure."
                  ]}
                  cost={"₹1,500–₹2,500 for two (excl. accommodation)"} />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}10,000{"–"}{"₹"}25,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY HOUSEBOAT ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDEF3\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Luxury Houseboat Plan — Premium Kettuvallam + Marari Resort</p>
                    <p className="text-xs text-teal-600 font-light">Stay: 1N premium houseboat + 2N Marari beach resort {"·"} {"₹"}8,000{"–"}{"₹"}20,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Canoe + Premium Houseboat"
                  items={[
                    "Airport pickup from Kochi — private car to Alleppey (₹2,000–₹2,500, 2hrs). Stop at Cherthala for banana chips factory.",
                    "10am: Private shikara canoe with naturalist guide — ₹1,500–₹2,000 for 3 hours. Bird identification, village stories.",
                    "1pm: Check into premium houseboat (upper deck, AC bedrooms, private chef). Book a 2-bedroom boat for privacy even as a couple.",
                    "Cruise through Vembanad Lake to Kumarakom side. Private chef prepares karimeen, prawn moilee, avial.",
                    "5pm: Houseboat anchors at sunset point. Sundowners on the upper deck. Kerala toddy cocktails if you ask.",
                    "Dinner: 5-course Kerala meal on deck. Sleep to the sound of water lapping against the hull."
                  ]}
                  cost={"₹20,000–₹45,000 for two (houseboat + canoe + transport)"} />
                <DayCard day="Day 2" title="Pathiramanal + Marari Luxury Check-in"
                  items={[
                    "Sunrise from the upper deck — mist on the backwaters, birds skimming the water. Best photography moment.",
                    "8am: Breakfast cruise back towards Alleppey. Fresh dosa, fruit, Kerala filter coffee on board.",
                    "10am: Private boat to Pathiramanal Island (arrange through houseboat operator). 1.5 hours on the island — migratory birds, hidden trails.",
                    "12:30pm: Check into Marari Beach resort. CGH Marari Beach or Abad Turtle are top picks.",
                    "Afternoon: Ayurvedic massage at the resort spa — ₹3,000–₹5,000 for couples. Genuinely good, not tourist-trap quality.",
                    "Sunset at Marari — the beach is almost always empty. Dinner at resort restaurant or beachside."
                  ]}
                  cost={"₹8,000–₹15,000 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Kuttanad Sunrise + Coir Village + Departure"
                  items={[
                    "6am: Drive to Kuttanad for sunrise over the paddy fields. Below-sea-level farming at golden hour — unreal.",
                    "8am: Breakfast at a Kuttanad toddy shop — tapioca with duck curry, fresh toddy. Authentic, not touristy.",
                    "10am: Visit Muhamma coir village. Watch the full process: coconut husk soaking, spinning, weaving. Buy coir products directly.",
                    "12pm: Back to Marari for final beach time. Pack up.",
                    "2pm: Lunch at resort or Alleppey town. Pick up banana chips, spices, and coir souvenirs.",
                    "4pm: Private car to Kochi airport (₹2,000–₹2,500). Or continue south to Kovalam/Varkala."
                  ]}
                  cost={"₹4,000–₹7,000 for two (excl. accommodation)"} />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}25,000{"–"}{"₹"}50,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">{"\uD83D\uDC91"} Couple</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">{"\uD83D\uDEF3\uFE0F"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,500–₹3,600", "₹9,000–₹18,000", "₹25,000–₹55,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹700–₹1,200", "₹2,500–₹4,500", "₹5,000–₹8,000"],
                    ["\uD83D\uDE8C Transport", "₹400–₹800", "₹1,500–₹3,000", "₹4,000–₹6,000"],
                    ["\uD83C\uDFAF Activities", "₹800–₹1,500", "₹2,000–₹3,500", "₹4,000–₹7,000"],
                    ["\uD83D\uDEF6 Houseboat/Canoe", "₹400–₹600", "₹8,000–₹15,000", "₹20,000–₹45,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹6,000–₹8,000 (solo)","₹10,000–₹25,000 (two)","₹25,000–₹50,000 (two)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Houseboat prices vary wildly by season — December{"–"}January rates are 40{"–"}60% higher than October{"–"}November.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Alleppey"
            hotels={[
              { name: "Houseboat (Budget 1BR)", type: "Backwater Houseboat", price: "From ₹5,000/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/alleppey-houseboat.html?aid=2820480" },
              { name: "CGH Marari Beach", type: "Heritage Beach Resort · Marari", price: "From ₹7,500/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/marari-beach-resort.html?aid=2820480" },
              { name: "Premium Houseboat (2BR Upper Deck)", type: "Luxury Kettuvallam", price: "From ₹20,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/alleppey-premium-houseboat.html?aid=2820480" },
            ]}
            activities={[
              { name: "Backwater Canoe Ride (2hrs)", duration: "2 hours", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=alleppey&partner_id=PSZA5UI" },
              { name: "Full-Day Houseboat Cruise", duration: "Full day", price: "From ₹5,000/boat", badge: "Popular", url: "https://www.getyourguide.com/s/?q=alleppey&partner_id=PSZA5UI" },
              { name: "Pathiramanal Island Boat Trip", duration: "3 hours", price: "From ₹200/person", url: "https://www.getyourguide.com/s/?q=alleppey&partner_id=PSZA5UI" },
              { name: "Kuttanad Village & Coir Tour", duration: "4 hours", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=alleppey&partner_id=PSZA5UI" },
            ]}
            pdfProductId="alleppey-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Alleppey — Must-See Places"
            subtitle="Click each thumbnail to explore Alleppey's most iconic backwaters, beaches and villages."
            spots={[
              { name: "Vembanad Lake",         query: "vembanad lake kerala houseboat backwater wide canal palm trees",         desc: "The largest lake in Kerala and the highway for all Alleppey houseboats. Best seen at sunrise or sunset from a boat deck." },
              { name: "Alappuzha Beach",        query: "alappuzha beach pier lighthouse kerala coast waves",                    desc: "The town beach with a 150-year-old pier extending into the Arabian Sea. Free entry, dramatic sunset light." },
              { name: "Marari Beach",            query: "marari beach kerala fishing boats palm trees clean sand empty",          desc: "10km south of Alleppey — clean sand, fishing boats, zero hawkers. What Kerala beach tourism should be." },
              { name: "Pathiramanal Island",     query: "pathiramanal island kerala backwaters birds trees tropical",             desc: "A tiny island in Vembanad Lake accessible only by boat. Migratory bird sanctuary with over 90 species." },
              { name: "Kuttanad Paddy Fields",   query: "kuttanad rice fields kerala below sea level farming green landscape",   desc: "The only place in India where farming happens below sea level. Surreal green landscape between backwater canals." },
            ]}
          />

          {/* ── BACKWATER IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kerala backwater canoe narrow canal palm trees village morning mist"
              fallback="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&q=80"
              alt="Narrow backwater canal in Alleppey with palm trees"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                A narrow canal near Muhamma that only canoes can enter. This is the Alleppey most tourists never see.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps {"—"} Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical {"—"} no doubling back. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83D\uDC91 Couple"},{id:"C" as const,label:"\uD83D\uDEF3\uFE0F Luxury"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 2" day="Canoe + Coir Village + Pathiramanal"
                  stops={["KSWTD Jetty 6am","Canoe 2hrs","Muhamma Coir Village 10:30am","Pathiramanal Island 1pm","Alleppey 4pm"]}
                  distance="25km · ~45min by road + boats" note="The canoe departs from the main jetty. Muhamma is on the road towards Pathiramanal — one clean route south."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Alleppey+Boat+Jetty/Muhamma,+Kerala/Pathiramanal+Island/Alappuzha,+Kerala" />
                <RouteCard plan="Plan A · Day 3" day="Marari Beach + Kuttanad"
                  stops={["Alleppey 8am","Marari Beach 8:30am","Kuttanad 2pm","Alleppey 5pm"]}
                  distance="35km loop · ~1hr total driving" note="Marari is directly west, Kuttanad is south-east. You loop back through Alleppey naturally."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Alappuzha,+Kerala/Marari+Beach,+Kerala/Kuttanad,+Kerala/Alappuzha,+Kerala" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 2" day="Pathiramanal + Marari"
                  stops={["Alleppey Jetty 9am","Muhamma Jetty 9:30am","Pathiramanal Island 10am","Marari Beach 12:30pm","Marari homestay check-in"]}
                  distance="30km · ~1hr by road + boat" note="Muhamma is the closest jetty to Pathiramanal. Marari is 20 min drive from Muhamma — straight line west to the coast."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Alappuzha+Boat+Jetty/Muhamma,+Kerala/Pathiramanal+Island/Marari+Beach,+Kerala" />
                <RouteCard plan="Plan B · Day 3" day="Kuttanad + Alleppey Heritage"
                  stops={["Marari 8am","Kuttanad 8:40am","Toddy Shop 10:30am","Alleppey Museum 12pm","Alleppey Beach 2pm"]}
                  distance="28km · ~50min total" note="Kuttanad is between Marari and Alleppey town. You pass through it on the return — zero detour."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Marari+Beach,+Kerala/Kuttanad,+Kerala/Alappuzha,+Kerala" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 2" day="Pathiramanal + Marari Resort"
                  stops={["Houseboat disembark 9am","Private boat Pathiramanal 10am","Marari Resort 12:30pm","Spa 3pm","Beach sunset 5:30pm"]}
                  distance="25km · ~40min by road + boat" note="Arrange the Pathiramanal boat through your houseboat operator — they know the fastest routes and can negotiate better rates."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Alappuzha+Boat+Jetty/Pathiramanal+Island/Marari+Beach+Resort,+Kerala" />
                <RouteCard plan="Plan C · Day 3" day="Kuttanad Sunrise + Coir Village + Departure"
                  stops={["Marari 6am","Kuttanad sunrise 6:30am","Muhamma Coir Village 10am","Alleppey lunch 12pm","Kochi Airport 4pm"]}
                  distance="120km total · ~3hrs driving" note="Kuttanad at sunrise is the single best photo opportunity in Kerala. The light on the paddy fields is unreal."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Marari+Beach,+Kerala/Kuttanad,+Kerala/Muhamma,+Kerala/Alappuzha,+Kerala/Cochin+International+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125755.2!2d76.33!3d9.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Alleppey Travel Map" />
            </div>
          </section>

          {/* ── MARARI BEACH IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="marari beach kerala fishing boats palm trees clean sand empty coast"
              fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80"
              alt="Marari Beach with fishing boats and palm trees"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Marari Beach 10km south of Alleppey is what Kerala beach tourism should be {"—"} clean sand, fishing boats, zero hawkers.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking houseboat online at full price", desc: "Walk-in at Alleppey jetty saves ₹2,000–₹3,000. Inspect the boat, check the kitchen, test the AC, then negotiate.", icon: "\uD83D\uDEF3\uFE0F" },
                { title: "Skipping the canoe ride", desc: "Houseboats only cruise wide canals. The narrow village canals — where the real backwater life happens — are only accessible by canoe. Budget ₹500 for 2 hours.", icon: "\uD83D\uDEF6" },
                { title: "Booking a day cruise instead of overnight", desc: "Day cruises rush through in 4–5 hours. The overnight stay lets you see sunset, starry night, and misty sunrise on the water. Worth the extra cost.", icon: "\u23F0" },
                { title: "Staying only in Alleppey town", desc: "Alleppey town itself is unremarkable. The magic is on the water and at Marari Beach. Plan at least one night outside town.", icon: "\uD83C\uDFE8" },
                { title: "Visiting in April–May", desc: "Extreme heat (35°C+), mosquitoes at peak, backwaters look brown. September–March is the window. October–November is best value with green backwaters.", icon: "\uD83C\uDF21\uFE0F" },
                { title: "Not trying karimeen pollichathu", desc: "Pearl spot fish wrapped in banana leaf is THE signature dish. If your houseboat chef doesn't offer it, request it specifically when booking.", icon: "\uD83D\uDC1F" },
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
                { icon: "\uD83C\uDF05", title: "The 6am Canoe Rule", desc: "Every canoe ride is completely different before 7am. Mist on the water, birds active, toddy tappers climbing palms. Set one early alarm — this is the real Alleppey.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF7A", title: "Try Fresh Toddy", desc: "Fresh toddy (palm wine) from a toddy shop costs ₹30–50 per pot. Mildly alcoholic, slightly sweet, pairs perfectly with tapioca and fish curry. Don't buy bottled — it's never the same.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDF6", title: "Coir Village Souvenirs", desc: "Buy coir products (doormats, bags, rope) directly from the Muhamma coir village at 30–40% of tourist shop prices. You're supporting the actual artisans.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "KSWTD for Cheap Boats", desc: "Kerala State Water Transport runs public boats to Pathiramanal and other islands. ₹75 return vs ₹500+ for private boats. Check timings at the jetty — they run mornings only.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF7", title: "Golden Hour at Kuttanad", desc: "Sunrise at Kuttanad paddy fields is the single best photo opportunity in all of Kerala. The light on the below-sea-level fields with palms is surreal.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Sep–Nov \u2705 best value, green backwaters | Dec–Jan \u26A0\uFE0F best weather, peak prices | Feb–Mar \u2705 sweet spot | Apr–May \u2600\uFE0F too hot | Jun–Aug \uD83C\uDF27\uFE0F monsoon", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget {"—"} we&apos;ll send a personalised Alleppey itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Alleppey Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Alleppey?", a: "3 days is ideal — one for houseboat overnight, one for canoe rides and villages, one for beaches. 2 days is doable if you skip beaches. 4–5 days lets you add Kumarakom and Mararikulam at a relaxed pace." },
                { q: "What is the best time to visit Alleppey?", a: "September–March is best. October–November has lush green backwaters with fewer tourists. December–January has best weather but highest houseboat prices (40–60% more). February–March is the sweet spot. Avoid April–May (extreme heat) and June–August (heavy monsoon)." },
                { q: "How much does a houseboat cost in Alleppey?", a: "Budget 1BR: ₹5,000–₹7,000/night. Mid-range AC: ₹8,000–₹15,000. Premium with upper deck: ₹20,000–₹45,000. All include 3 meals. Walk-in at the jetty saves ₹2,000–₹3,000 vs online booking." },
                { q: "Is a houseboat or canoe ride better?", a: "Both are magical but different. Houseboats are floating hotels on wide canals with meals included. Canoes go through narrow village canals with intimate views. Canoe: ₹500 for 2hrs. Houseboat: ₹8,000+ overnight. Ideally do both — canoe at dawn, houseboat from noon." },
                { q: "How do I reach Alleppey from Kochi?", a: "Train: 1.5hrs, ₹60–₹150. Bus: every 30 min, 2hrs, ₹70–₹120. Private taxi from Kochi airport: ₹2,000–₹2,500, 2–2.5hrs. Train is the most scenic and reliable option." },
                { q: "What food should I try in Alleppey?", a: "Must-try: Karimeen pollichathu (pearl spot fish in banana leaf), Kerala fish curry with red rice, appam with stew, fresh toddy from a toddy shop (₹30–50/pot), tapioca with fish curry. Insist on karimeen when booking your houseboat meals." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Kerala Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Munnar Hill Station — 3 Day Guide", href: "/blog/munnar-3-days", soon: true },
                { label: "Goa in 3 Days — Budget to Luxury", href: "/blog/goa-3-days", soon: false },
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

          <RelatedGuides currentSlug="alleppey-3-days" />
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
