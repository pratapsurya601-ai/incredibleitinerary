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

const DUBAI_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "practical",  emoji: "\u2727", label: "Practical Info" },
  { id: "itineraries", emoji: "\u2727", label: "The Itineraries" },
  { id: "budget",     emoji: "\u2727", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\u2727", label: "Pro Tips" },
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Dubai 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Dubai in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
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
export default function DubaiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "AED 300\u2013500/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Mid-Range", sub: "AED 600\u20131,200/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E", label: "Luxury", sub: "AED 2,000+/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DUBAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dubai" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dubai skyline burj khalifa sunset desert"
            fallback="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85"
            alt="Dubai skyline with Burj Khalifa at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Dubai 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  City & Desert
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dubai in 4 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs in AED and USD, desert safari secrets — and the mistakes that drain most Dubai budgets.
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
              <span>{"\uD83C\uDDE6\uD83C\uDDEA"} UAE</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From AED 1,200</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Dubai Frame is the most underrated attraction &mdash; AED 50 entry, and the view from the glass bridge looking down on old Dubai vs new Dubai perfectly captures what this city is. Most guides won&apos;t even mention it.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level — jump straight to your itinerary.</p>
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

          {/* ── PRACTICAL INFO ── */}
          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2727"} Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The practical stuff that saves you money and headaches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport", "UAE visa required \u2014 apply online or through airlines, AED 350\u2013500, 3\u20135 working days"],["US / UK / EU / AU","Visa-on-arrival for 30 days \u2014 free, just show your passport"],["Documents","Return flight, hotel booking, travel insurance recommended, passport valid 6+ months"]],
                  note: "Indian passport holders can also get 14-day visa-on-arrival if holding a US/UK/EU visa or green card." },
                { title: "Getting Around", emoji: "\uD83D\uDE87", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Metro","Red + Green lines, AED 3\u20137.50/ride. Get a Nol card (AED 25 with AED 19 balance)"],["Taxi","Metered, AED 12 minimum. RTA app for booking. Uber/Careem widely available"],["Water taxi","Abra across Dubai Creek: AED 1. Best transport experience in Dubai."],["Airport","DXB Metro to downtown: AED 7.50, 25 min. Skip taxis (AED 80\u2013120)"]],
                  note: "The metro doesn\u2019t run to JBR/Palm Jumeirah. Budget AED 30\u201350 for a taxi from the nearest station." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
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
                <strong className="font-medium text-ink">Money tip:</strong> ATMs everywhere give AED. Credit cards accepted almost everywhere. Tipping is not mandatory but 10% is appreciated at restaurants. Friday is the holy day &mdash; some attractions open late.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="4 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="AED 1,200" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov \u2013 Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="DXB" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2727"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Deira / Bur Dubai Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel in Deira &middot; AED 150&ndash;250/night &middot; Metro + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Burj Khalifa Sunrise + Dubai Mall"
                  items={[
                    "6am: Burj Khalifa 'At the Top' sunrise slot \u2014 book 2 weeks ahead, AED 169 for 124th floor. The city waking up below you is worth every dirham.",
                    "8am: Breakfast at Dubai Mall food court \u2014 AED 25\u201340 for a full meal. Mall opens to shoppers at 10am but food court is earlier.",
                    "10am\u201312pm: Dubai Mall free attractions \u2014 Dubai Aquarium viewing panel (free from outside), waterfall, dinosaur skeleton",
                    "12:30pm: Souk Al Bahar for lunch with Burj Khalifa view \u2014 AED 45\u201370 for shawarma and drinks at the terrace restaurants",
                    "3pm: Rest at hotel \u2014 the afternoon heat is brutal, don\u2019t fight it",
                    "6pm: Dubai Fountain show (free, every 30 min from 6pm). Best viewed from the bridge or Souk Al Bahar terrace.",
                  ]}
                  cost="AED 250\u2013350 excluding accommodation" />
                <DayCard day="Day 2" title="Old Dubai \u2014 Gold Souk, Spice Souk, Dubai Frame"
                  items={[
                    "8am: Abra water taxi across Dubai Creek \u2014 AED 1, the best one-dirham experience in the Middle East",
                    "8:30am: Spice Souk \u2014 free to explore, buy saffron (AED 15\u201325/gram vs AED 60+ in malls), dried dates, frankincense",
                    "9:30am: Gold Souk \u2014 window shop or buy. Gold prices are government-regulated, so you\u2019re only negotiating the making charge.",
                    "11am: Walk to Al Fahidi Historical Neighbourhood \u2014 free, wind-tower architecture, art galleries, coffee houses",
                    "1pm: Lunch at Arabian Tea House \u2014 traditional Emirati food in a courtyard setting, AED 50\u201380",
                    "3pm: Dubai Frame \u2014 AED 50 entry. The glass-floor sky bridge looking down is genuinely thrilling. Old Dubai on one side, new Dubai on the other.",
                    "Evening: Street food in Deira \u2014 Al Mallah for shawarma (AED 12), Iranian restaurants along Al Rigga Road",
                  ]}
                  cost="AED 150\u2013250 excluding accommodation" />
                <DayCard day="Day 3" title="Desert Safari at Sunset"
                  items={[
                    "Morning: Sleep in, or explore Jumeirah Mosque (guided tours at 10am, AED 35 \u2014 one of the few mosques open to non-Muslims)",
                    "12pm: Lunch at a Pakistani/Indian restaurant in Karama \u2014 AED 20\u201335 for a proper meal",
                    "3pm: Desert safari pickup from hotel \u2014 book a reputable operator (AED 150\u2013250 per person for budget package)",
                    "Dune bashing in a 4x4 \u2014 30 minutes of adrenaline over golden sand dunes",
                    "Sunset stop for photos \u2014 the 20 minutes of silence before the BBQ music starts is the most beautiful moment in Dubai",
                    "BBQ dinner under the stars, henna painting, camel rides included in most packages",
                    "Return to hotel by 9:30pm",
                  ]}
                  cost="AED 200\u2013300 excluding accommodation" />
                <DayCard day="Day 4" title="JBR Beach, Palm Jumeirah + Departure"
                  items={[
                    "8am: JBR Beach \u2014 free public beach, arrive early for quiet. The Walk at JBR has good breakfast spots (AED 30\u201350)",
                    "10:30am: Monorail to Palm Jumeirah \u2014 AED 15 one-way, or taxi AED 25\u201335",
                    "11am: Walk around Atlantis area \u2014 the lobby is free to enter and worth seeing. Aquaventure waterpark if you want to splurge (AED 299)",
                    "1pm: Lunch at The Pointe \u2014 fountain-view restaurants with Atlantis backdrop, AED 60\u2013100",
                    "3pm: Head to airport. DXB metro from Nakheel station or taxi AED 50\u201370.",
                  ]}
                  cost="AED 100\u2013200 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">AED 1,200\u20132,000 ($327\u2013$545 USD) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Downtown / Business Bay Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 4-star hotel with Burj view &middot; AED 400&ndash;700/night &middot; Metro + taxi mix</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Burj Khalifa Sunrise + Downtown Deep Dive"
                  items={[
                    "6am: Burj Khalifa sunrise slot 124th+125th floor \u2014 AED 169. Book the earliest available slot for the golden light.",
                    "8:30am: Breakfast at Tom&Jim Cafe, Downtown \u2014 AED 50\u201370 for eggs benedict and Arabic coffee",
                    "10am\u20131pm: Dubai Mall \u2014 Dubai Aquarium tunnel (AED 135), VR Park, or just window-shop the 1,200+ stores",
                    "1:30pm: Lunch at Zuma or La Petite Maison \u2014 AED 200\u2013350 for a proper business lunch (book ahead)",
                    "4pm: Dubai Opera district walk \u2014 architecture, public art, quiet compared to the mall",
                    "6pm: Dubai Fountain from the boardwalk (free). Stay for 2\u20133 shows \u2014 each one is different.",
                    "8pm: Dinner at Souk Al Bahar with fountain view \u2014 AED 150\u2013250 for two courses",
                  ]}
                  cost="AED 500\u2013800 excluding accommodation" />
                <DayCard day="Day 2" title="Old Dubai Heritage + Dubai Frame"
                  items={[
                    "8am: Abra ride across Dubai Creek (AED 1) \u2014 arrive before 9am when the souks are being set up. Quieter, better light.",
                    "8:30am: Spice Souk then Gold Souk \u2014 buy saffron, oud perfume (AED 30\u201380 for a good one), and browse gold",
                    "10:30am: Al Fahidi Historical Neighbourhood \u2014 XVA Gallery, Coffee Museum, traditional wind-tower houses",
                    "12pm: Lunch at SMCCU (Sheikh Mohammed Centre for Cultural Understanding) \u2014 AED 100 for traditional Emirati meal + cultural talk. Book ahead.",
                    "2pm: Dubai Frame \u2014 AED 50 entry, the glass-floor bridge is the highlight",
                    "4pm: Textile Souk in Bur Dubai \u2014 custom tailoring starts at AED 100 for a shirt (48-hour turnaround)",
                    "7pm: Dinner cruise on Dubai Creek \u2014 AED 200\u2013350 per person, traditional dhow boat with BBQ",
                  ]}
                  cost="AED 450\u2013700 excluding accommodation" />
                <DayCard day="Day 3" title="Desert Safari \u2014 Sunset to Stars"
                  items={[
                    "Morning: Museum of the Future (AED 149) \u2014 book 1 week ahead. The architecture alone is worth visiting, but the immersive exhibits are extraordinary.",
                    "12:30pm: Lunch at Al Mallah, Satwa \u2014 best shawarma in Dubai, AED 15\u201325",
                    "3pm: Premium desert safari pickup \u2014 AED 300\u2013500 for premium package with vintage Land Rover and private BBQ",
                    "Dune bashing, sandboarding, camel ride through the dunes at golden hour",
                    "Desert safari at sunset when the dunes turn gold \u2014 the 20 minutes of silence before the BBQ music starts is the most beautiful moment in Dubai",
                    "BBQ dinner with live entertainment, stargazing in the desert away from city lights",
                  ]}
                  cost="AED 500\u2013800 excluding accommodation" />
                <DayCard day="Day 4" title="JBR Beach, Palm Jumeirah + Departure"
                  items={[
                    "7:30am: JBR Beach sunrise walk, then breakfast at JBR The Walk \u2014 AED 50\u201380",
                    "10am: Palm Jumeirah by monorail (AED 15) \u2014 walk through Atlantis lobby, explore The Pointe dining strip",
                    "11:30am: Ain Dubai observation wheel if operating (AED 130) or Aquaventure waterpark (AED 299)",
                    "1:30pm: Farewell lunch at Pierchic or Tresind Studio \u2014 AED 250\u2013400 for a proper final meal",
                    "4pm: Last stop at Mall of the Emirates for duty-free shopping and Ski Dubai viewing gallery (free)",
                    "Airport by 6pm. Dubai Duty Free is genuinely good \u2014 budget 30 min.",
                  ]}
                  cost="AED 300\u2013550 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">AED 3,200\u20136,000 ($870\u2013$1,635 USD) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Palm Jumeirah / DIFC Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star resort &middot; AED 1,500&ndash;4,000/night &middot; Private car + experiences</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Burj Khalifa 148th Floor + Private Downtown"
                  items={[
                    "6am: Burj Khalifa 148th floor 'At the Top SKY' lounge \u2014 AED 399. Private viewing deck, complimentary refreshments, personal guide.",
                    "9am: Breakfast at At.mosphere on 122nd floor \u2014 AED 300\u2013500. Highest restaurant in the world.",
                    "11am: Private Dubai Mall shopping experience with personal shopper (free service at most luxury stores)",
                    "1:30pm: Lunch at Nobu, Atlantis \u2014 AED 400\u2013700 for the omakase",
                    "4pm: Helicopter tour of Dubai \u2014 AED 700\u20131,200 for 15\u201325 min. Best light in late afternoon.",
                    "7pm: Private fountain-view dining at Thiptara, Palace Downtown \u2014 AED 500\u2013800 for two",
                  ]}
                  cost="AED 2,000\u20133,500 excluding accommodation" />
                <DayCard day="Day 2" title="Heritage by Morning, Frame + Creek Luxury"
                  items={[
                    "9am: Private guided heritage tour of Old Dubai with SMCCU cultural breakfast \u2014 AED 300\u2013500",
                    "11am: Gold Souk with a personal gold consultant \u2014 commission-free advice on investment pieces",
                    "1pm: Lunch at Tresind Studio, DIFC \u2014 2-Michelin-star, AED 600\u2013900 for the tasting menu",
                    "3pm: Dubai Frame VIP entry (AED 100) \u2014 skip all queues",
                    "5pm: Private abra experience on Dubai Creek with Arabic coffee and dates",
                    "8pm: Dinner at BOCA, DIFC \u2014 contemporary European, AED 400\u2013650",
                  ]}
                  cost="AED 1,800\u20133,000 excluding accommodation" />
                <DayCard day="Day 3" title="Private Desert Experience"
                  items={[
                    "Morning: Spa at your resort \u2014 most 5-stars include spa access, treatments from AED 400",
                    "11am: Museum of the Future VIP tour \u2014 AED 149 entry, private guide AED 300 extra",
                    "2pm: Private luxury desert safari \u2014 AED 1,500\u20132,500 per couple. Vintage Land Rover, private camp, gourmet dinner.",
                    "Falconry experience in the desert \u2014 included in premium packages",
                    "Private BBQ with a personal chef under the stars, premium beverages included",
                    "Overnight desert glamping option \u2014 AED 2,000\u20134,000 for the Starlight Camp experience",
                  ]}
                  cost="AED 2,500\u20135,000 excluding accommodation" />
                <DayCard day="Day 4" title="Palm Jumeirah + Yacht Departure"
                  items={[
                    "8am: Private beach cabana at Atlantis or One&Only \u2014 included with resort stay",
                    "10:30am: Aquaventure private experience or jet ski tour around the Palm \u2014 AED 500\u2013800",
                    "1pm: Farewell brunch at Ossiano (underwater restaurant) \u2014 AED 600\u2013900",
                    "3pm: Private yacht charter around Dubai Marina and Palm \u2014 AED 800\u20131,500 for 2 hours",
                    "6pm: Airport via private transfer \u2014 AED 200\u2013300",
                  ]}
                  cost="AED 2,200\u20133,500 excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">AED 14,000\u201325,000+ ($3,800\u2013$6,800+ USD) including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "AED 600\u20131,000", "AED 1,600\u20132,800", "AED 6,000\u201316,000"],
                    ["\uD83C\uDF7D Food & Drinks", "AED 250\u2013400", "AED 700\u20131,200", "AED 2,000\u20134,000"],
                    ["\uD83D\uDE87 Transport", "AED 80\u2013150", "AED 200\u2013400", "AED 800\u20131,500"],
                    ["\uD83C\uDFAF Activities", "AED 300\u2013500", "AED 600\u20131,200", "AED 3,000\u20136,000"],
                    ["\uD83D\uDECD Shopping", "AED 0\u2013200", "AED 200\u2013500", "AED 1,000\u20135,000+"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["AED 1,200\u20132,000\n($327\u2013$545)","AED 3,200\u20136,000\n($870\u2013$1,635)","AED 14,000\u201325,000+\n($3,800\u2013$6,800+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in AED (2026). 1 AED = ~$0.27 USD / ~22.5 INR. Dubai is tax-free &mdash; prices you see are what you pay.
            </p>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Dubai \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore Dubai's most iconic landmarks and hidden gems."
            spots={[
              { name: "Burj Khalifa",        query: "burj khalifa tower dubai night lights architecture",           desc: "The world's tallest building at 828m. Book the 6am sunrise slot for the 124th floor \u2014 the most magical time to visit." },
              { name: "Dubai Frame",          query: "dubai frame landmark gold architecture sky",                    desc: "AED 50 entry for the most underrated view in Dubai. Glass-floor bridge shows old and new Dubai side by side." },
              { name: "Gold Souk",            query: "dubai gold souk market jewelry traditional architecture",      desc: "Hundreds of gold shops in Deira. Prices are government-regulated \u2014 negotiate only the making charge." },
              { name: "Desert Dunes",         query: "dubai desert sand dunes sunset golden landscape",              desc: "The desert 45 minutes from downtown transforms at sunset into rolling golden waves. Best experienced via safari." },
              { name: "Palm Jumeirah",        query: "palm jumeirah dubai aerial view island architecture",          desc: "The iconic palm-shaped island. Best seen from the monorail or a helicopter tour for the full effect." },
            ]}
          />

          {/* ── DESERT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dubai desert safari sunset golden dunes landscape"
              fallback="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=900&q=80"
              alt="Dubai desert dunes at golden hour"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Desert safari at sunset when the dunes turn gold. The silence before the camp music starts is pure magic.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking Burj Khalifa at sunset", desc: "Everyone books sunset. Sunrise is half the price, no crowds, and the light is better. The 6am slot is the Dubai hack.", icon: "\uD83C\uDF05" },
                { title: "Spending all your time in malls", desc: "Dubai Mall is impressive for 2 hours, not a full day. Old Dubai has more character than any shopping centre.", icon: "\uD83D\uDED2" },
                { title: "Taking taxis everywhere", desc: "The metro covers most tourist areas for AED 3\u20137.50. A single taxi ride costs AED 30\u201360. That adds up fast over 4 days.", icon: "\uD83D\uDE95" },
                { title: "Cheap desert safari operators", desc: "AED 50 safari = 15 tourists crammed in a van, aggressive souvenir selling. Pay AED 200+ for a reputable operator with proper safety and small groups.", icon: "\uD83C\uDFDC\uFE0F" },
                { title: "Visiting in July/August", desc: "45\u00B0C+ and 90% humidity. Everything is air-conditioned but walking between places is miserable. Nov\u2013Mar is when Dubai actually works outdoors.", icon: "\u2600\uFE0F" },
                { title: "Ignoring Friday schedules", desc: "Friday is the holy day. Some attractions open late (1\u20132pm), many restaurants change hours. Plan indoor activities for Friday morning.", icon: "\uD83D\uDCC5" },
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
                { icon: "\uD83D\uDCF1", title: "Get a Nol Card Immediately", desc: "AED 25 (with AED 19 balance). Works on metro, bus, tram, and water bus. Buy at any metro station. Saves AED 1\u20132 per ride vs single tickets.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF1F", title: "Free Fountain Show Hack", desc: "The Dubai Fountain runs every 30 min from 6pm. Watch from the Souk Al Bahar bridge for a different song each show. The abra boat ride (AED 20) puts you right in front.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF75", title: "SMCCU Cultural Meals", desc: "AED 100 for a traditional Emirati meal + Q&A with an Emirati host. One of the few places tourists actually interact with locals. Book 2 days ahead.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCB3", title: "Tax-Free Shopping", desc: "No VAT on gold and diamonds. Electronics are often 10\u201320% cheaper than Europe/US. Claim VAT refund on other purchases at the airport (Planet Tax Free desks).", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE87", title: "Metro Gold Class", desc: "AED 2 extra per ride for the front cabin with guaranteed seats, less crowding, and a panoramic view. Worth it during rush hour.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83C\uDF19", title: "Ramadan Travel", desc: "During Ramadan, eating/drinking in public during daylight hours is restricted. Restaurants open after sunset for iftar \u2014 a beautiful cultural experience. Hotel rooms are 30\u201340% cheaper.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Dubai itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Dubai Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Dubai?", a: "4 days is ideal to cover Burj Khalifa, Old Dubai, a desert safari, and the beaches. 3 days works if you skip the desert. 5+ days lets you add Abu Dhabi as a day trip." },
                { q: "How much does a 4-day Dubai trip cost?", a: "Budget: AED 1,200\u20132,000 ($327\u2013$545 USD) including accommodation. Mid-range: AED 3,200\u20136,000 ($870\u2013$1,635 USD). Luxury: AED 14,000\u201325,000+ ($3,800\u2013$6,800+ USD)." },
                { q: "Do I need a visa for Dubai?", a: "Indian passport holders need a UAE visa (apply online, AED 350\u2013500, 3\u20135 working days). US, UK, EU, Australian, Canadian citizens get free visa-on-arrival for 30 days." },
                { q: "Is Dubai safe for solo travellers?", a: "Extremely safe. Dubai has one of the lowest crime rates in the world. Women can walk alone at night. The metro has women-only carriages. Common sense precautions apply everywhere." },
                { q: "What is the best time to visit Dubai?", a: "November to March for outdoor comfort (20\u201330\u00B0C). December\u2013January is peak with highest prices. October and April are shoulder months with deals. May\u2013September is 45\u00B0C+ but heavily air-conditioned." },
                { q: "Is the desert safari worth it?", a: "Absolutely. Budget AED 200\u2013300 for a reputable operator. The sunset dune experience, BBQ dinner, and stargazing are a highlight for most visitors. Avoid the AED 50 operators." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Dubai"
            hotels={[
              { name: "Rove Downtown", type: "Budget Design Hotel \u00B7 Downtown", price: "From AED 200/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/ae/rove-downtown.html?aid=2820480" },
              { name: "Vida Downtown", type: "Mid-Range Boutique \u00B7 Downtown", price: "From AED 500/night", rating: "5", badge: "Best value", url: "https://www.booking.com/hotel/ae/vida-downtown-dubai.html?aid=2820480" },
              { name: "Atlantis The Royal", type: "Ultra-Luxury \u00B7 Palm Jumeirah", price: "From AED 2,500/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/ae/atlantis-the-royal.html?aid=2820480" },
            ]}
            activities={[
              { name: "Burj Khalifa At the Top", duration: "1.5 hours", price: "From AED 169", badge: "Must do", url: "https://www.getyourguide.com/dubai-l173/?partner_id=PSZA5UI" },
              { name: "Desert Safari with BBQ Dinner", duration: "6 hours", price: "From AED 200", badge: "Essential", url: "https://www.getyourguide.com/dubai-l173/?partner_id=PSZA5UI" },
              { name: "Old Dubai Heritage Walking Tour", duration: "3 hours", price: "From AED 120", badge: "Cultural", url: "https://www.getyourguide.com/dubai-l173/?partner_id=PSZA5UI" },
              { name: "Dubai Marina Yacht Cruise", duration: "2 hours", price: "From AED 150", url: "https://www.getyourguide.com/dubai-l173/?partner_id=PSZA5UI" },
            ]}
          />

          {/* ── INTERNAL LINKS ── */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Middle East Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Abu Dhabi \u2014 3 Day Guide", href: "/blog/abu-dhabi-3-days" },
                { label: "Muscat, Oman \u2014 3 Day Guide", href: "/blog/muscat-3-days" },
                { label: "Browse All Itineraries", href: "/blog" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="dubai-4-days" />
          <RelatedGuides currentSlug="dubai-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
