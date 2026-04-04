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


const SHILLONG_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Shillong at a Glance" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Shillong 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Shillong in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-gold mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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
export default function ShillongClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B97k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFE8", label: "Comfortable", sub: "\u20B98k\u201318k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\u2728", label: "Premium", sub: "\u20B918k\u201330k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SHILLONG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Shillong" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="shillong meghalaya green hills pine forest northeast india"
            fallback="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1600&q=85"
            alt="Shillong green hills and pine forests in Meghalaya"
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
              <span className="text-white/70">Shillong 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hills & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Shillong in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, and the insider tips that turn a generic hill station trip into something you remember for years.
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
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20B9"}5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Shillong is the rock music capital of India — seriously. The evening live music scene at Cloud 9 and Caf&eacute; Shillong is better than most Indian cities 10x its size. But most visitors rush through to Cherrapunji and miss the city that actually makes Meghalaya worth the trip. This guide fixes that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Shillong at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The capital of Meghalaya sits at 1,496m above sea level — cool year-round, surrounded by pine forests, and home to the Khasi people whose matrilineal culture is unlike anything else in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "City & Nearby", emoji: "\uD83C\uDFD9\uFE0F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Must-see","Ward's Lake, Police Bazaar, Don Bosco Museum"],["Vibe","Compact, walkable, live music every night"],["Food","Jadoh (pork rice), Tungrymbai, momos everywhere"],["Stay","Near Police Bazaar for walkability"]],
                  note: "Don Bosco Museum is 7 floors of Northeast Indian tribal culture and it changed everything I thought I knew about this region. Allow 3 hours minimum." },
                { title: "Day Trips", emoji: "\u26F0\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Nature","Laitlum Canyons, Mawphlang Sacred Forest, Shillong Peak"],["Waterfalls","Elephant Falls, Sweet Falls, Spread Eagle Falls"],["Lakes","Umiam Lake (Barapani) — 15km north"],["Hiking","David Scott Trail — 16km colonial-era path"]],
                  note: "Laitlum Canyons at 6am before anyone else arrives — the word 'Laitlum' means 'end of the earth' in Khasi and standing at the edge you understand why." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Base yourself in Shillong city near Police Bazaar. Everything worth seeing is within 25km. Hire a local Khasi taxi driver for day trips — they know roads tourists don&apos;t and charge {"\u20B9"}1,500{"\u2013"}{"\u20B9"}2,500/day.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B95,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct \u2013 May" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Guwahati" />
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Police Bazaar Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse/hostel {"\u00B7"} {"\u20B9"}500{"\u2013"}{"\u20B9"}1,200/night {"\u00B7"} Shared Sumos + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive from Guwahati, Explore the City Core"
                  items={[
                    "Guwahati airport \u2192 shared Sumo to Shillong (\u20B9250\u2013\u20B9350/person, 3hrs). Sumos leave from Paltan Bazaar \u2014 haggle.",
                    "Check into guesthouse near Police Bazaar. Drop bags, walk immediately.",
                    "2pm: Ward's Lake \u2014 \u20B930 entry, 45 min. Colonial-era botanical garden, pedal boats \u20B950. Genuinely peaceful.",
                    "3:30pm: Walk to Don Bosco Museum \u2014 \u20B9100 entry. 7 floors of Northeast tribal culture. You need 2\u20133 hours here, no shortcuts.",
                    "Evening: Police Bazaar for street momos (\u20B930\u201350) and Jadoh (pork rice, \u20B980\u2013120). Walk the evening market.",
                    "9pm: Check if Cloud 9 or Caf\u00E9 Shillong has live music tonight. Entry usually free, beer \u20B9150\u2013250."
                  ]}
                  cost={"\u20B9800\u2013\u20B91,400 excluding accommodation"} />
                <DayCard day="Day 2" title="Laitlum Canyons + Elephant Falls + Shillong Peak"
                  items={[
                    "5:30am wake-up. Hire shared taxi to Laitlum Canyons (\u20B9150\u2013200/person, 25km). Or split a cab 4 ways.",
                    "6:30am at Laitlum \u2014 the word means 'end of the earth' in Khasi and standing at the edge you understand why. 1.5hrs here.",
                    "9am: Elephant Falls on the return (\u20B930 entry). Three-tier waterfall, 30 min visit. Go before tour buses at 10am.",
                    "11am: Shillong Peak \u2014 highest point in the city, 1,965m. IAF maintained, \u20B930 entry. Clear days show Bangladesh border.",
                    "1pm: Lunch at Jadoh stall in Laitumkhrah \u2014 pork Jadoh + black sesame chutney, \u20B9100\u2013150.",
                    "Afternoon: Rest or explore Cathedral of Mary Help of Christians (free, beautiful stained glass).",
                    "Evening: Caf\u00E9 Shillong for live rock music. This city takes its music seriously."
                  ]}
                  cost={"\u20B91,200\u2013\u20B91,800 excluding accommodation"} />
                <DayCard day="Day 3" title="Mawphlang Sacred Forest + Umiam Lake + Departure"
                  items={[
                    "7am: Hire shared taxi to Mawphlang Sacred Forest (25km south, \u20B9200/person).",
                    "Mawphlang Sacred Forest is genuinely eerie \u2014 nothing has been removed from the forest for hundreds of years. Your Khasi guide's stories will give you goosebumps. Mandatory guide \u20B9300 for the group, 1.5hrs.",
                    "10:30am: Return via Umiam Lake (Barapani) \u2014 massive reservoir 15km north of Shillong. Kayaking \u20B9200, or just sit and stare.",
                    "1pm: Final lunch in Police Bazaar. Stock up on Meghalaya black sesame, local honey, Khasi pickles as souvenirs.",
                    "3pm: Shared Sumo back to Guwahati airport (\u20B9250\u2013350, 3hrs). Book evening flight."
                  ]}
                  cost={"\u20B91,000\u2013\u20B91,500 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}5,500{"\u2013"}{"\u20B9"}7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Comfortable ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFE8"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Comfortable Plan — Laitumkhrah or Police Bazaar Base</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Mid-range hotel with breakfast {"\u00B7"} {"\u20B9"}2,000{"\u2013"}{"\u20B9"}4,000/night {"\u00B7"} Private taxi for day trips</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, City Highlights, Evening Music"
                  items={[
                    "Private cab Guwahati \u2192 Shillong (\u20B92,500\u20133,500, 3hrs). More comfortable than Sumos, door-to-door.",
                    "Check in, lunch at Trattoria (\u20B9400\u2013600 for two) \u2014 surprisingly good European food in a hill station.",
                    "2pm: Don Bosco Museum (\u20B9100 entry). Start from floor 7 (rooftop panorama) and work down. 7 floors of Northeast India tribal artifacts, textiles, and instruments. Allow 3 hours minimum.",
                    "5pm: Ward's Lake gardens + short walk to Lady Hydari Park. The park has a small deer enclosure and Japanese garden.",
                    "7pm: Dinner at Lamee Restaurant \u2014 Khasi cuisine done properly. Try smoked pork with black sesame. \u20B9500\u2013800 for two.",
                    "9pm: Live music at Cloud 9 or Caf\u00E9 Shillong. Shillong bands play everything from blues to metal."
                  ]}
                  cost={"\u20B92,500\u2013\u20B94,000 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Laitlum Canyons + Elephant Falls + Sacred Forest"
                  items={[
                    "5:30am: Private taxi to Laitlum Canyons (25km, 45min). Beat the crowds \u2014 by 9am tourist vans arrive.",
                    "Laitlum at dawn: mist rolling off the canyon edges, Khasi villages below, absolute silence. Spend 2 hours here. Walk the stone steps down partway for the best views.",
                    "8:30am: Elephant Falls on return (\u20B930 entry). Three-tier waterfall, peaceful before 10am.",
                    "10am: Shillong Peak for panoramic views. On clear days you can see the plains of Bangladesh.",
                    "12pm: Lunch at ML 05 Caf\u00E9 \u2014 modern Meghalayan food, \u20B9600\u2013900 for two.",
                    "2pm: Drive to Mawphlang Sacred Forest (25km south). Khasi guide mandatory (\u20B9300/group). The forest has been untouched for centuries \u2014 not a single leaf, branch, or stone has been removed. Your guide's stories about the forest spirits are unforgettable.",
                    "5pm: Return to Shillong. Evening free for Police Bazaar shopping or more live music."
                  ]}
                  cost={"\u20B93,000\u2013\u20B95,000 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Umiam Lake + David Scott Trail + Departure"
                  items={[
                    "7am: Drive to Umiam Lake/Barapani (15km north, 25min). Kayaking \u20B9400, speed boat \u20B9500, or just walk the viewpoint trail. 1.5hrs.",
                    "9:30am: David Scott Trail starting point (near Mawphlang). Even 3\u20134km of this 16km colonial-era horse trail is worth it \u2014 rolling meadows, pine forests, river crossings. No fitness required for the first section.",
                    "12:30pm: Return to city. Final lunch at Madeira Caf\u00E9 \u2014 good coffee and Khasi fusion, \u20B9500\u2013700 for two.",
                    "2pm: Last-minute shopping \u2014 Bara Bazaar for Khasi textiles, local honey (\u20B9250\u2013400), and Lakadong turmeric (the strongest variety in India).",
                    "4pm: Private cab to Guwahati airport. Evening flight."
                  ]}
                  cost={"\u20B92,800\u2013\u20B94,500 for two (excl. accommodation)"} />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}16,000{"\u2013"}{"\u20B9"}32,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Premium ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Ri Kynjai or Heritage Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Boutique resort at Umiam Lake {"\u00B7"} {"\u20B9"}6,000{"\u2013"}{"\u20B9"}12,000/night {"\u00B7"} Private SUV + local guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Scenic Arrival + Umiam Lake Luxury"
                  items={[
                    "Private SUV from Guwahati (\u20B94,000\u20135,000). Stop at Umiam Lake viewpoint en route \u2014 your first taste of Meghalaya.",
                    "Check into Ri Kynjai on Umiam Lake or similar lakeside resort. Lunch at the resort overlooking the water.",
                    "3pm: Private boat ride on Umiam Lake (\u20B91,500\u20132,000). The lake is 220 sq km \u2014 bigger than it looks.",
                    "5pm: Evening nature walk on the resort grounds. Pine forests, bird watching, complete silence.",
                    "7:30pm: Dinner at resort restaurant \u2014 Khasi tasting menu with smoked meats, black sesame, fermented soybean. \u20B92,000\u20133,000 for two."
                  ]}
                  cost={"\u20B95,000\u2013\u20B98,000 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Private Guide: Sacred Forest + Laitlum + City Culture"
                  items={[
                    "7am: Private Khasi cultural guide for the day (\u20B93,000\u20135,000). This transforms the trip \u2014 they explain Khasi mythology, matrilineal traditions, and forest rituals no signboard will tell you.",
                    "8am: Mawphlang Sacred Forest with your guide. The stories about Labasa (the forest deity) and why every stone stays where it falls \u2014 genuinely spine-tingling.",
                    "11am: Drive to Laitlum Canyons. With a guide, you access the deeper trails and Khasi village hamlets below the rim that most tourists never see.",
                    "1:30pm: Lunch at a Khasi village home (guide arranges, \u20B9500\u20131,000 for two). Jadoh, smoked pork, rice beer. Unforgettable.",
                    "3:30pm: Don Bosco Museum (\u20B9100 entry). Even with a guide, budget 2.5 hours. The textile and music floors are extraordinary.",
                    "7pm: Dinner at Dylan's Caf\u00E9 \u2014 live music, craft cocktails. The best evening spot in Shillong."
                  ]}
                  cost={"\u20B97,000\u2013\u20B911,000 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="David Scott Trail + Elephant Falls + Departure"
                  items={[
                    "6:30am: Drive to David Scott Trail. With a guide and packed breakfast from the resort, hike 6\u20138km of the trail through rolling grasslands, pine forests, and river crossings. The colonial history of this horse route adds another layer.",
                    "10:30am: Elephant Falls (\u20B930 entry). Quick visit on the return \u2014 three cascading tiers through fern-covered rocks.",
                    "11:30am: Shillong Peak panoramic viewpoint. Last hilltop photos of the valley.",
                    "1pm: Farewell lunch at Caf\u00E9 Shillong \u2014 the rooftop terrace with a view. \u20B91,200\u20131,800 for two.",
                    "3pm: Shopping for premium Meghalaya souvenirs \u2014 handwoven Khasi shawls (\u20B91,500\u20134,000), wild forest honey, Lakadong turmeric.",
                    "4:30pm: Private SUV to Guwahati airport."
                  ]}
                  cost={"\u20B94,500\u2013\u20B97,000 for two (excl. accommodation)"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}36,000{"\u2013"}{"\u20B9"}60,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">{"\uD83C\uDFE8"} Comfortable</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\u2728"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,500\u2013\u20B93,600", "\u20B96,000\u2013\u20B912,000", "\u20B918,000\u2013\u20B936,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B91,000\u2013\u20B91,800", "\u20B93,000\u2013\u20B95,000", "\u20B96,000\u2013\u20B910,000"],
                    ["\uD83D\uDE95 Transport", "\u20B91,200\u2013\u20B91,800", "\u20B94,000\u2013\u20B96,000", "\u20B98,000\u2013\u20B912,000"],
                    ["\uD83C\uDFAF Activities", "\u20B9500\u2013\u20B91,000", "\u20B91,500\u2013\u20B93,000", "\u20B95,000\u2013\u20B98,000"],
                    ["\uD83D\uDECD\uFE0F Shopping", "\u20B9300\u2013\u20B9800", "\u20B91,000\u2013\u20B92,500", "\u20B93,000\u2013\u20B96,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B95,500\u2013\u20B97,000","\u20B98,000\u2013\u20B918,000","\u20B918,000\u2013\u20B930,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Excludes flights to Guwahati. Northeast India remains one of the best-value travel destinations in the country.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Shillong"
            hotels={[
              { name: "Ri Kynjai", type: "Lakeside Resort \u00B7 Umiam Lake", price: "From \u20B97,000/night", rating: "5", badge: "Premium pick", url: "https://www.booking.com/hotel/in/ri-kynjai.html?aid=2820480" },
              { name: "Hotel Polo Towers", type: "Mid-Range \u00B7 Police Bazaar", price: "From \u20B92,500/night", rating: "4", badge: "Comfortable pick", url: "https://www.booking.com/hotel/in/polo-towers-shillong.html?aid=2820480" },
              { name: "Earle Holiday Home", type: "Heritage \u00B7 Laitumkhrah", price: "From \u20B91,200/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/earle-holiday-home.html?aid=2820480" },
            ]}
            activities={[
              { name: "Mawphlang Sacred Forest Guided Trek", duration: "Half day", price: "From \u20B9800/person", badge: "Must do", url: "https://www.getyourguide.com/shillong-l23456/sacred-forest/?partner_id=PSZA5UI" },
              { name: "David Scott Trail Hiking", duration: "Full day", price: "From \u20B91,200/person", badge: "Adventure", url: "https://www.getyourguide.com/shillong-l23456/david-scott/?partner_id=PSZA5UI" },
              { name: "Umiam Lake Water Sports", duration: "2 hours", price: "From \u20B9400/person", url: "https://www.getyourguide.com/shillong-l23456/umiam/?partner_id=PSZA5UI" },
              { name: "Shillong City Heritage Walk", duration: "3 hours", price: "From \u20B9600/person", url: "https://www.getyourguide.com/shillong-l23456/city-walk/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="shillong-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Shillong \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore Shillong's most iconic viewpoints, sacred forests and cultural landmarks."
            spots={[
              { name: "Laitlum Canyons",       query: "laitlum canyons meghalaya green valley clouds mountain edge landscape",            desc: "The 'end of the earth' in Khasi \u2014 dramatic canyon views with rolling clouds below. Arrive at 6am for solitude and the best light." },
              { name: "Don Bosco Museum",       query: "don bosco museum shillong exterior building architecture meghalaya",               desc: "7 floors covering every Northeast Indian tribe. Textiles, instruments, weapons, ritual objects. Budget 3 hours minimum." },
              { name: "Mawphlang Sacred Forest", query: "mawphlang sacred forest meghalaya ancient trees moss green dense",                desc: "Centuries-old sacred grove where nothing has ever been removed. Khasi guides tell stories of forest deities and ancient oaths." },
              { name: "Umiam Lake",             query: "umiam lake barapani meghalaya reservoir blue water pine trees hills",               desc: "Massive reservoir surrounded by pine-covered hills, 15km north of Shillong. Kayaking, speed boats, or just the viewpoint." },
              { name: "Elephant Falls",         query: "elephant falls shillong meghalaya waterfall rocks fern green nature",               desc: "Three-tier waterfall just outside Shillong. Go before 10am to beat tour groups. \u20B930 entry." },
            ]}
          />

          {/* ── SACRED FOREST IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="mawphlang sacred forest meghalaya ancient trees moss stones mystical green"
              fallback="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
              alt="Mawphlang Sacred Forest ancient trees and moss"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mawphlang Sacred Forest — nothing has been removed for centuries. Your Khasi guide&apos;s stories about forest spirits will stay with you long after you leave.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Treating Shillong as a transit stop", desc: "Most people spend one night and rush to Cherrapunji. Shillong itself needs 2\u20133 full days \u2014 the music scene, sacred forests, and Khasi culture are the real story.", icon: "\uD83D\uDE8C" },
                { title: "Visiting Laitlum Canyons after 9am", desc: "Tour vans arrive by 9:30am. Go at 6am for empty canyons, rolling mist, and the experience the place deserves. The drive is only 45 minutes.", icon: "\u23F0" },
                { title: "Skipping Don Bosco Museum", desc: "It looks like a school museum from outside. It is not. 7 floors of tribal culture from every Northeast state. Changed how I think about this region. Allow 3 hours.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Not hiring a Khasi guide for Mawphlang", desc: "Walking the sacred forest without a guide is like reading a book with half the pages missing. The \u20B9300 for a guided tour is the best money you'll spend in Meghalaya.", icon: "\uD83E\uDDED" },
                { title: "Travelling during monsoon (Jun\u2013Sep)", desc: "Meghalaya means 'abode of clouds' \u2014 it receives some of the highest rainfall on Earth. Roads wash out, landslides are common, and outdoor activities become impossible.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Expecting Goa-style nightlife", desc: "Shillong's music scene is about intimate live performances in small cafes, not clubs. It's better than nightlife \u2014 but only if you calibrate your expectations.", icon: "\uD83C\uDFB5" },
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
                { icon: "\uD83C\uDFB8", title: "Live Music Every Night", desc: "Shillong is the rock music capital of India \u2014 Cloud 9, Caf\u00E9 Shillong, Dylan's Caf\u00E9 all have live bands most nights. Entry is usually free. This is the real Shillong experience.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF5C", title: "Eat Khasi, Not Tourist", desc: "Jadoh (pork rice), Tungrymbai (fermented soybean), Doh Khlieh (pork salad with onions). Skip the hotel buffet. Laitumkhrah has the best local food stalls.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDED", title: "Hire a Local Driver-Guide", desc: "A Khasi taxi driver for the day (\u20B91,500\u20132,500) doubles as a cultural guide. They know roads, viewpoints, and food spots that Google Maps doesn't. Worth every rupee.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF27\uFE0F", title: "Always Carry Rain Gear", desc: "Even in 'dry' season, Shillong gets surprise showers. A lightweight rain jacket and waterproof phone pouch are non-negotiable. Umbrellas break in the wind.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDED2", title: "Lakadong Turmeric", desc: "Meghalaya grows the highest-curcumin turmeric in the world. Buy at Bara Bazaar \u2014 \u20B9200\u2013400/kg. It's 7\u20138% curcumin vs 2\u20133% from regular turmeric. Best souvenir from the region.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDCC5", title: "Best Month by Month", desc: "Oct\u2013Nov \u2705 post-monsoon green, clear skies | Dec\u2013Feb \u2744\uFE0F cold but dramatic | Mar\u2013May \uD83C\uDF38 cherry blossoms, perfect temps | Jun\u2013Sep \uD83C\uDF27\uFE0F avoid", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Shillong + Meghalaya itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Shillong Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Shillong?", a: "October to May is best. October\u2013November has clear post-monsoon skies and lush greenery. March\u2013May brings cherry blossoms and pleasant 15\u201325\u00B0C weather. December\u2013February is cold (5\u201315\u00B0C) but dramatic. Avoid June\u2013September \u2014 heavy monsoon rains make roads dangerous and outdoor activities impossible." },
                { q: "How do I reach Shillong from other Indian cities?", a: "Fly to Guwahati (major airlines from Delhi, Mumbai, Kolkata, Bangalore). Then shared Sumo (\u20B9250\u2013350, 3hrs) or private cab (\u20B92,500\u20133,500) to Shillong via NH6. Shillong has a small airport at Umroi (30km) with limited flights. Most people fly to Guwahati." },
                { q: "How much does a 3-day Shillong trip cost?", a: "Budget solo: \u20B95,500\u2013\u20B97,000 including accommodation. Comfortable mid-range for two: \u20B916,000\u2013\u20B932,000. Premium for two: \u20B936,000\u2013\u20B960,000. All exclude flights to Guwahati. Northeast India is significantly cheaper than most Indian tourist destinations." },
                { q: "Is Shillong safe for solo travellers?", a: "One of the safest cities in India. The Khasi people are matrilineal \u2014 women own property and pass family names. Crime rates are very low, locals are genuinely welcoming, and the compact city is easy to navigate. Standard travel precautions apply, especially after dark." },
                { q: "Do I need a permit to visit Shillong?", a: "Indian citizens need no permit for Shillong or most of Meghalaya. Foreign nationals need an Inner Line Permit (ILP) \u2014 available online or at Meghalaya House in Guwahati. Processing takes 1\u20132 hours, valid for 15 days. Carry passport and two photos." },
                { q: "Can I combine Shillong with Cherrapunji or Dawki?", a: "Yes \u2014 add 1\u20132 extra days. Cherrapunji (55km south) covers living root bridges, Nohkalikai Falls, and Seven Sisters Falls as a day trip. Dawki's crystal-clear Umngot River is 80km from Shillong and works as a full day. Both are must-sees if you have time." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Northeast India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cherrapunji & Living Root Bridges", href: "/blog/cherrapunji-2-days", soon: true },
                { label: "Kaziranga National Park Guide", href: "/blog/kaziranga-3-days", soon: true },
                { label: "Tawang \u2014 Arunachal Pradesh", href: "/blog/tawang-5-days", soon: true },
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

          <RelatedGuides currentSlug="shillong-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
