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


const GOKARNA_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "beaches",     emoji: "\uD83C\uDFD6\uFE0F", label: "Beach Guide" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "trek",        emoji: "\uD83E\uDD7E", label: "Beach Trek Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Gokarna 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Gokarna in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function GokarnaBlogClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B95k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF92", label: "Backpacker", sub: "\u20B95k\u201312k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "\uD83D\uDECB\uFE0F", label: "Comfortable", sub: "\u20B912k\u201322k", color: "border-rose-300 bg-rose-50 text-rose-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GOKARNA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Gokarna" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="gokarna om beach karnataka india sunset"
            alt="Gokarna Om Beach at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Gokarna 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Trek
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Gokarna in 3 Days: Beach Treks, Temples &amp; Silence
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, trek routes — and why Gokarna beats Goa for anyone who wants beaches without the noise.
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
              <span>{"\uD83D\uDCB0"} From {"\u20B9"}3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Gokarna is what Goa was 20 years ago — half-moon beaches, no DJ nights, just waves and hammocks. This guide gives you three ways to do it right, whether you are sleeping in a beach hut for {"\u20B9"}300 or a clifftop resort for {"\u20B9"}6,000.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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

          {/* ── BEACH GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFD6\uFE0F"} The Beaches — Know Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Gokarna has five beaches strung along the coast south of town. Each one has a completely different personality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Om Beach", emoji: "\uD83C\uDF0A", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Vibe","Most popular, Om-shaped bay, cafes"],["Stay","Beach huts & guesthouses available"],["Best for","Sunsets, swimming, kayaking"],["Access","Auto from town, 6km, \u20B9100\u2013150"]],
                  note: "Skip the shacks on Om Beach main strip, walk to the south end where the locals eat — \u20B9150 thali vs \u20B9400 tourist menu." },
                { title: "Kudle Beach", emoji: "\uD83C\uDFD6\uFE0F", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Vibe","Backpacker favourite, hammock cafes"],["Stay","Cheapest shacks in Gokarna, \u20B9300\u2013800"],["Best for","Budget stays, social scene, sunsets"],["Access","15-min walk from Gokarna town, steps down the cliff"]],
                  note: "The south end of Kudle is quieter. The north end near the cliff has the best cafes." },
                { title: "Half Moon Beach", emoji: "\uD83C\uDF19", bg: "bg-purple-50 border-purple-200", th: "text-purple-800",
                  rows: [["Vibe","Secluded crescent, very few shacks"],["Stay","Basic tents & huts only, \u20B9200\u2013500"],["Best for","Solitude, stargazing, disconnect"],["Access","30-min trek from Om Beach, no road"]],
                  note: "Bring your own water and snacks. The one shack here may or may not be open." },
                { title: "Paradise Beach", emoji: "\u2728", bg: "bg-rose-50 border-rose-200", th: "text-rose-800",
                  rows: [["Vibe","Most remote, true isolation"],["Stay","Tents only, very basic"],["Best for","Complete solitude, wild camping feel"],["Access","45-min trek from Om Beach or boat, \u20B9150\u2013200"]],
                  note: "If you want zero people, come on a weekday. Weekends bring day-trippers from Goa." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Base yourself at Kudle or Om Beach. Both have food, accommodation and are the start point for the beach trek south to Half Moon and Paradise.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B93,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon={"\uD83D\uDE82"} label="Nearest Rail" value="Gokarna Road" />
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

            {/* ── PLAN A — BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Kudle Beach Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Beach huts & shared rooms {"\u00B7"} {"\u20B9"}300{"\u2013"}800/night {"\u00B7"} Walk everywhere</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Temple, First Sunset"
                  items={[
                    "Arrive Gokarna Road station or bus stand. Auto to Kudle Beach \u20B9100\u2013150.",
                    "Drop bags at beach hut (\u20B9300\u2013500/night for basic, \u20B9600\u2013800 for attached bath).",
                    "Walk to Gokarna town (15 min uphill). Visit Mahabaleshwar Temple — one of India\u2019s seven mukti-sthalas. Free entry, remove shoes.",
                    "Explore the temple street: grab chai (\u20B920) and banana chips from the stalls.",
                    "Walk Gokarna Main Beach — pilgrims, fishing boats, zero tourists. 20 minutes.",
                    "Back to Kudle for sunset. Dinner at a beach shack — fish thali \u20B9120\u2013180.",
                  ]}
                  cost={"\u20B9600\u20131,000 excluding accommodation"} />
                <DayCard day="Day 2" title="The Beach Trek — Kudle to Paradise"
                  items={[
                    "7am start. Breakfast at Kudle \u2014 eggs, toast, chai \u20B980\u2013120.",
                    "Trek: Kudle \u2192 Om Beach (30 min, well-marked cliff trail). Stop for photos at the Om-shape viewpoint.",
                    "Om Beach \u2192 Half Moon Beach (30 min, rockier trail). Bring 2L water minimum.",
                    "Half Moon \u2192 Paradise Beach (20 min). This stretch is the wildest \u2014 scramble over rocks, through trees.",
                    "Spend 2\u20133 hours at Paradise Beach. Swim, nap, eat at the one shack if open (\u20B9100\u2013150 for rice and dal).",
                    "Return by boat to Om Beach (\u20B9150\u2013200/person) or trek back the same way.",
                    "Evening: Om Beach sunset from the south end. Dinner at a local place \u2014 \u20B9150 thali.",
                  ]}
                  cost={"\u20B9500\u2013800 excluding accommodation"} />
                <DayCard day="Day 3" title="Mirjan Fort + Departure"
                  items={[
                    "Early breakfast at Kudle. Pack bags.",
                    "Auto or shared jeep to Mirjan Fort (20km, \u20B9200\u2013300 by auto, 30 min). Go before 10am \u2014 no crowds, best light.",
                    "Mirjan Fort: 16th-century laterite ruins covered in vines. Free entry. Allow 1\u20131.5 hours.",
                    "Back to Gokarna town for lunch. Pai Hotel on car street \u2014 best dosa in town, \u20B950\u201380.",
                    "Last-minute temple street walk. Pick up cashews or kokum at local shops.",
                    "Depart from Gokarna Road station or bus stand.",
                  ]}
                  cost={"\u20B9500\u2013800 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}3,500{"\u2013"}5,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — BACKPACKER ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF92"}</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Backpacker Plan — Om Beach Base</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Guesthouse or decent beach hut {"\u00B7"} {"\u20B9"}800{"\u2013"}2,000/night {"\u00B7"} Mix of autos and walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Settle In, Temple Town, Om Beach Sunset"
                  items={[
                    "Arrive and check in at Om Beach guesthouse. Hot shower, fan, clean sheets \u2014 \u20B91,000\u20131,500/night.",
                    "Late morning: auto to Gokarna town (\u20B9100). Mahabaleshwar Temple \u2014 ancient, powerful, no entry fee.",
                    "Walk the temple street. Lunch at Prema Restaurant \u2014 South Indian thali \u20B9120\u2013200.",
                    "Walk Gokarna Main Beach. Watch the fishing boats come in around 4pm.",
                    "Auto back to Om Beach. Sunset from Namaste Cafe or the rocks at the south end.",
                    "Dinner: Namaste Cafe \u2014 wood-fired pizza and fresh fish, \u20B9300\u2013500 per person.",
                  ]}
                  cost={"\u20B91,000\u20131,500 excluding accommodation"} />
                <DayCard day="Day 2" title="Full Beach Trek + Kayaking"
                  items={[
                    "7:30am breakfast at your guesthouse.",
                    "The beach trek from Kudle to Paradise Beach is the best 2-hour walk in Karnataka \u2014 bring water and good shoes.",
                    "Option: rent a kayak at Om Beach (\u20B9300\u2013500/hr) and paddle to Half Moon Beach instead of trekking.",
                    "Spend midday at Half Moon Beach \u2014 the most photogenic of all five beaches.",
                    "Continue to Paradise Beach if energy allows (20 min further).",
                    "Boat back to Om Beach (\u20B9150\u2013200). Shower, rest.",
                    "Sunset at Om Beach. Dinner at a cafe \u2014 budget \u20B9350\u2013500.",
                  ]}
                  cost={"\u20B91,000\u20131,800 excluding accommodation"} />
                <DayCard day="Day 3" title="Mirjan Fort + Yana Rocks or Departure"
                  items={[
                    "Hire an auto for half-day: Mirjan Fort + Yana Rocks. Negotiate \u20B9800\u20131,200 round trip.",
                    "Mirjan Fort first (30 min from Gokarna). Vine-covered ruins, stunning in morning light. 1 hour.",
                    "Optional: Yana Rocks (45 min further). Dramatic limestone pinnacles in dense forest. Free entry. 1.5 hours including short trek.",
                    "Back to Gokarna by 1pm. Lunch at Pai Hotel \u2014 dosa, idli, filter coffee. \u20B9100\u2013150.",
                    "Final swim at Kudle Beach. The south end is emptiest in the afternoon.",
                    "Evening departure from Gokarna Road station.",
                  ]}
                  cost={"\u20B91,200\u20132,000 excluding accommodation"} />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}5,000{"\u2013"}12,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — COMFORTABLE ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDECB\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Comfortable Plan — Clifftop or Om Beach Resort</p>
                    <p className="text-xs text-rose-600 font-light">Stay: SwaSwara or Kahani Paradise {"\u00B7"} {"\u20B9"}3,000{"\u2013"}6,000/night {"\u00B7"} Private transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Restore, Temple Visit"
                  items={[
                    "Private taxi from Goa airport or Hubli airport (\u20B93,000\u20134,500). Or train to Gokarna Road, taxi to resort (\u20B9300).",
                    "Check in, unwind. Most resorts include breakfast. Lunch at the resort \u2014 \u20B9500\u2013800.",
                    "4pm: Private taxi to Mahabaleshwar Temple. Your driver waits. Temple + town walk, 1.5 hours.",
                    "Walk Gokarna Main Beach on the way back \u2014 completely different energy from the tourist beaches.",
                    "Sunset at your resort or Om Beach viewpoint.",
                    "Dinner: Your resort restaurant or Namaste Cafe for fresh seafood. \u20B9800\u20131,200 for two.",
                  ]}
                  cost={"\u20B92,500\u20134,000 excluding accommodation"} />
                <DayCard day="Day 2" title="Guided Trek or Boat Tour + Spa"
                  items={[
                    "Morning yoga if your resort offers it (SwaSwara includes it free).",
                    "Option A: Guided beach trek Kudle \u2192 Paradise (\u20B9500\u2013800/person, guide knows the shortcuts).",
                    "Option B: Private boat tour covering all 5 beaches (\u20B92,000\u20133,000 for the boat, fits 4\u20136 people). Stops at each beach for 20\u201330 min.",
                    "Lunch at Half Moon Beach shack or packed lunch from resort.",
                    "Afternoon: spa treatment at SwaSwara or similar. Ayurvedic massage \u20B91,500\u20132,500.",
                    "Sunset drinks at your resort. Dinner \u2014 \u20B91,000\u20131,500 for two.",
                  ]}
                  cost={"\u20B94,000\u20137,000 excluding accommodation"} />
                <DayCard day="Day 3" title="Mirjan Fort, Local Markets, Departure"
                  items={[
                    "Leisurely breakfast. Check out by 11am or keep room for late checkout (\u20B9500\u20131,000 extra).",
                    "Private taxi to Mirjan Fort (30 min). No crowds before 10am, incredible photography light.",
                    "Explore the fort for 1\u20131.5 hours. The rear ramparts have the best views.",
                    "Drive to Gokarna town. Browse the temple street for local handicrafts, spices, and kokum syrup.",
                    "Farewell lunch: Pai Hotel for authentic Karnataka thali or Namaste Cafe for something Western.",
                    "Private taxi to Goa airport (3\u20133.5 hrs) or Hubli airport (3 hrs) or train from Gokarna Road.",
                  ]}
                  cost={"\u20B93,000\u20135,000 excluding accommodation"} />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}12,000{"\u2013"}22,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">{"\uD83C\uDF92"} Backpacker</th>
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">{"\uD83D\uDECB\uFE0F"} Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B9900\u20132,400", "\u20B92,400\u20136,000", "\u20B99,000\u201318,000"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20B9900\u20131,500", "\u20B91,800\u20133,500", "\u20B94,000\u20137,000"],
                    ["\uD83D\uDE8C Transport", "\u20B9400\u2013600", "\u20B9800\u20131,500", "\u20B93,000\u20135,000"],
                    ["\uD83C\uDFAF Activities", "\u20B9200\u2013500", "\u20B9500\u20131,500", "\u20B92,000\u20134,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B93,500\u20135,000","\u20B95,000\u201312,000","\u20B912,000\u201322,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Gokarna is one of the cheapest beach destinations in India — a comfortable day here costs what a budget day costs in Goa.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Gokarna"
            hotels={[
              { name: "Zostel Gokarna", type: "Budget Hostel \u00B7 Om Beach", price: "From \u20B9500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-gokarna.html?aid=2820480" },
              { name: "Namaste Cafe", type: "Beach Huts \u00B7 Om Beach", price: "From \u20B91,200/night", rating: "4", badge: "Backpacker pick", url: "https://www.booking.com/hotel/in/namaste-cafe-gokarna.html?aid=2820480" },
              { name: "SwaSwara", type: "Wellness Resort \u00B7 Om Beach", price: "From \u20B98,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/swaswara-gokarna.html?aid=2820480" },
            ]}
            activities={[
              { name: "Beach Trek Guide (Kudle to Paradise)", duration: "Half day", price: "From \u20B9500/person", badge: "Must do", url: "https://www.getyourguide.com/gokarna-l12345/beach-trek/?partner_id=PSZA5UI" },
              { name: "Boat Tour — All 5 Beaches", duration: "3 hours", price: "From \u20B9500/person", badge: "Popular", url: "https://www.getyourguide.com/gokarna-l12345/boat-tour/?partner_id=PSZA5UI" },
              { name: "Mirjan Fort & Yana Rocks Day Trip", duration: "Full day", price: "From \u20B91,200/person", url: "https://www.getyourguide.com/gokarna-l12345/mirjan-yana/?partner_id=PSZA5UI" },
              { name: "Kayaking at Om Beach", duration: "2 hours", price: "From \u20B9300/person", url: "https://www.getyourguide.com/gokarna-l12345/kayak/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="gokarna-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Gokarna — Must-See Places"
            subtitle="Click each thumbnail to explore Gokarna's most iconic beaches, forts and trails."
            spots={[
              { name: "Om Beach",            query: "om beach gokarna karnataka coastline aerial tropical",         desc: "The signature Om-shaped bay with golden sand and cafes on the cliff. Best at sunset when the entire cove glows orange." },
              { name: "Kudle Beach",          query: "kudle beach gokarna karnataka palm trees sand empty",         desc: "Wide sandy beach backed by palm trees and hammock cafes. The most social beach in Gokarna, but never crowded." },
              { name: "Half Moon Beach",      query: "half moon beach gokarna secluded cove turquoise water rocks", desc: "A perfect crescent hidden between two headlands. Only accessible by trek or boat — genuine solitude." },
              { name: "Mirjan Fort",          query: "mirjan fort karnataka ruins overgrown laterite walls green",  desc: "16th-century laterite fort slowly being reclaimed by vines. Free entry, almost always empty, incredible morning light." },
              { name: "Mahabaleshwar Temple", query: "mahabaleshwar temple gokarna karnataka ancient stone tower",  desc: "One of the seven mukti-sthalas of Hinduism. Ancient Dravidian architecture in the heart of Gokarna town." },
            ]}
          />

          {/* ── TREK IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="gokarna beach trek trail rocky coastline karnataka ocean"
              alt="Gokarna beach trek trail along the coastline"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The cliff trail between Kudle and Om Beach — 30 minutes of coastline views that make you forget every other beach trek you have done.
              </p>
            </div>
          </div>

          {/* ── BEACH TREK GUIDE ── */}
          <section id="trek" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83E\uDD7E"} The Beach Trek — Complete Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The beach trek from Kudle to Paradise Beach is the best 2-hour walk in Karnataka — bring water and good shoes. Here is everything you need to know.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { title: "Kudle \u2192 Om Beach", desc: "30 minutes. Well-marked trail along the cliff. Moderate difficulty. The viewpoint halfway has the best photo angle of Om Beach\u2019s shape.", icon: "\uD83D\uDEB6", color: "bg-amber-50 border-amber-200" },
                { title: "Om Beach \u2192 Half Moon Beach", desc: "30 minutes. Rockier, steeper sections. Carry at least 1 litre of water. Small scrambles over boulders near the end.", icon: "\u26F0\uFE0F", color: "bg-teal-50 border-teal-200" },
                { title: "Half Moon \u2192 Paradise Beach", desc: "20 minutes. The wildest section — through trees, over rocks. Not well-marked. Follow the coastline and you cannot get lost.", icon: "\uD83C\uDF34", color: "bg-purple-50 border-purple-200" },
                { title: "Return Options", desc: "Trek back the same way (1.5\u20132 hrs) or take a boat from Paradise/Half Moon to Om Beach (\u20B9150\u2013200/person). Boats run until 5pm in season.", icon: "\u26F5", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Essential gear:</strong> Good sandals or trail shoes (not flip-flops), 2L water, sunscreen, a hat, and cash for the boat back. Start before 8am October{"\u2013"}March. Before 7am if visiting April{"\u2013"}May.
              </p>
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="south indian thali banana leaf karnataka traditional food"
              alt="Traditional Karnataka thali on banana leaf"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Skip the shacks on Om Beach main strip, walk to the south end where the locals eat — {"\u20B9"}150 thali vs {"\u20B9"}400 tourist menu. The food is better too.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Trekking in flip-flops", desc: "The Kudle\u2013Paradise trail has sharp rocks and steep scrambles. Proper sandals with grip or trail shoes. Flip-flops = blisters and slipping.", icon: "\uD83E\uDE74" },
                { title: "No water on the trek", desc: "There are zero shops between Om Beach and Paradise Beach. Carry at least 2 litres. Dehydration is the number one reason people cut the trek short.", icon: "\uD83D\uDCA7" },
                { title: "Staying in Gokarna town", desc: "The town is inland. Beaches are 2\u20136km away. Stay at Kudle or Om Beach — you wake up on the sand, not in a noisy main road guesthouse.", icon: "\uD83C\uDFE8" },
                { title: "Visiting on weekends in Dec\u2013Jan", desc: "Gokarna fills up with Bangalore weekend crowds. Weekdays are a different planet. If you must go on a weekend, book accommodation 2 weeks ahead.", icon: "\uD83D\uDCC5" },
                { title: "Skipping Mirjan Fort", desc: "Most people never leave the beaches. Mirjan Fort is 30 minutes away, free, and one of the most atmospheric ruins in Karnataka. Go before 10am.", icon: "\uD83C\uDFF0" },
                { title: "Eating only at tourist cafes", desc: "Pai Hotel in town does dosas for \u20B950. Beach cafes charge \u20B9200 for the same thing. Walk 15 minutes to town for at least one meal a day.", icon: "\uD83C\uDF7D" },
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
                { icon: "\uD83C\uDF05", title: "The 6am Rule", desc: "Every Gokarna beach is empty before 7am. The light on Om Beach at sunrise is worth one early alarm. Kudle faces west — better for sunsets.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEB6", title: "South End Secret", desc: "Skip the shacks on Om Beach main strip, walk to the south end where the locals eat — \u20B9150 thali vs \u20B9400 tourist menu. Fresher fish too.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE82", title: "Konkan Railway", desc: "The train from Goa (Madgaon) to Gokarna Road is 3 hours and costs \u20B9200\u2013400. One of the most scenic coastal routes in India. Book sleeper class.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Cash is King", desc: "Most beach shacks and huts are cash only. The nearest ATM is in Gokarna town. Withdraw enough for 3 days — \u20B95,000 minimum for budget, \u20B910,000 for comfort.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF19", title: "Full Moon at Half Moon", desc: "If your dates line up with a full moon, spend the night at Half Moon Beach. No light pollution, zero people, waves glowing silver. Bring a tent or rent one.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2705 best value | Dec\u2013Jan \u26A0\uFE0F best weather, weekend crowds | Feb\u2013Mar \u2705 warm & quiet | Apr\u2013May \u2600\uFE0F hot but cheap | Jun\u2013Sep \uD83C\uDF27\uFE0F avoid", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Gokarna itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Gokarna Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Gokarna?", a: "3 days is ideal. Day 1 for temple town and settling in, Day 2 for the famous beach trek, Day 3 for Mirjan Fort and a final beach session. 2 days feels rushed. 4\u20135 days is perfect if you want full rest days between activities." },
                { q: "What is the best time to visit Gokarna?", a: "October to March. October\u2013November has fewest crowds and best value. December\u2013January has perfect weather but Bangalore weekend crowds. February\u2013March is warm and quiet. Avoid June\u2013September \u2014 monsoon makes beach treks dangerous and most shacks close." },
                { q: "How much does a 3-day Gokarna trip cost?", a: "Budget: \u20B93,500\u20135,000 staying in beach huts and eating local. Backpacker: \u20B95,000\u201312,000 with decent guesthouses and some activities. Comfortable: \u20B912,000\u201322,000 with resort stays, private transport, and guided tours." },
                { q: "Is the beach trek safe?", a: "Yes, October to March with proper footwear and water. The trail is rocky but well-trodden. Avoid during monsoon when paths are slippery and waves are dangerous. Start early to avoid midday heat. The full Kudle-to-Paradise trek takes 2\u20133 hours one way." },
                { q: "How do I reach Gokarna?", a: "Gokarna Road railway station is on the Konkan line \u2014 direct trains from Mumbai (11 hrs), Goa (3 hrs), and Mangalore (5 hrs). From Bangalore, overnight buses take 8\u20139 hours. Nearest airports: Goa Dabolim (140km, 3.5 hrs) or Hubli (160km, 3 hrs)." },
                { q: "Which is the best beach in Gokarna?", a: "Om Beach for sunsets and cafes. Kudle for budget stays and social vibes. Half Moon for solitude and photography. Paradise for true isolation. Gokarna Main Beach for a local, non-touristy experience. Most people love Half Moon the most." },
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
                { label: "Goa \u2014 3 Day Complete Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Hampi \u2014 3 Day Heritage Circuit", href: "/blog/hampi-3-days", soon: true },
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

          <RelatedGuides currentSlug="gokarna-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
