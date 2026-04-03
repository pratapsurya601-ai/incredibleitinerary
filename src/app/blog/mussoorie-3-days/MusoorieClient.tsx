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


const MUSSOORIE_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Mussoorie at a Glance" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mussoorie 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Mussoorie in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps &rarr;
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function MusoorieClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B97k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", label: "Family", sub: "\u20B98k\u201318k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "\u2728", label: "Premium", sub: "\u20B918k\u201330k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUSSOORIE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mussoorie" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mussoorie uttarakhand mountain valley himalaya"
            alt="Mussoorie hill station with Himalayan mountain panorama"
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
              <span className="text-white/70">Mussoorie 3 Days</span>
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
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mussoorie in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the tourist traps that drain your wallet in the Queen of Hills.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Uttarakhand</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCC5"} 3 Days</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCB0"} From {"\u20B9"}6,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Landour is the real gem — Ruskin Bond still lives here and you can walk the same paths he&apos;s walked for 60 years. The caf&eacute; culture here beats Mussoorie&apos;s Mall Road by miles. Most tourists never leave Mall Road, fight for parking, and leave thinking Mussoorie is just another crowded hill station. This guide shows you the side that changes your mind.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
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

          {/* ── MUSSOORIE AT A GLANCE ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Mussoorie at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              A colonial hill station at 2,005m in the Garhwal Himalayas. There are two Mussoories — the touristy Mall Road side and the quiet, literary Landour cantonment above it. The smart traveller spends more time in Landour.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Mussoorie Town", emoji: "\uD83C\uDFD4\uFE0F", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Best for","First-timers, families, quick weekend trips"],["Key spots","Mall Road, Gun Hill, Kempty Falls, Company Garden, Camel\u2019s Back Road"],["Budget","\u20B9800\u2013\u20B93,500/night"],["Vibe","Bustling, touristy, shops and crowds"]],
                  note: "Mall Road gets impossibly packed on weekends May\u2013June. Visit midweek or go early morning for the real experience." },
                { title: "Landour", emoji: "\uD83D\uDCDA", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Best for","Couples, writers, peace seekers, walkers"],["Key spots","Char Dukan, Lal Tibba, Sister\u2019s Bazaar, Landour Language School, Ruskin Bond\u2019s house"],["Budget","\u20B91,200\u2013\u20B96,000/night"],["Vibe","Quiet, literary, colonial-era charm, caf\u00E9 culture"]],
                  note: "Landour is technically a separate cantonment above Mussoorie. The 2km uphill walk from Picture Palace is the gateway — and it filters out 90% of tourists." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Stay in Landour or upper Mussoorie (near Picture Palace). You get the quiet charm plus Mall Road is a 10-min walk downhill. Staying on Mall Road means traffic noise and zero character.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDCC5"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B96,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Mar \u2013 Jun" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Dehradun" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Mall Road or Library Bazaar Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel or hostel &middot; {"\u20B9"}600&ndash;{"\u20B9"}1,500/night &middot; Local bus + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Mall Road, Gun Hill Sunset"
                  items={[
                    "Dehradun to Mussoorie by shared taxi or bus (\u20B9100\u2013\u20B9250). Drop at Library Bazaar \u2014 better location than Picture Palace for budget stays.",
                    "Lunch at a Mall Road dhaba \u2014 thali \u20B9120\u2013\u20B9180. Skip the fancy restaurants on Day 1.",
                    "Walk Mall Road end to end (2km) \u2014 free, gets the tourist itch out of your system.",
                    "4:30pm: Gun Hill ropeway (\u20B9175 return) or walk up the old bridle path (free, 20 min). Best sunset viewpoint in Mussoorie town.",
                    "Evening: Camel\u2019s Back Road sunset walk \u2014 3km flat path, no crowds after 6pm, mountain views the entire way. Free.",
                    "Dinner at Lovely Omelette Centre near Picture Palace \u2014 legendary since the 1960s, omelettes \u20B950\u2013\u20B980.",
                  ]}
                  cost={"\u20B9800\u2013\u20B91,400 excluding accommodation"} />
                <DayCard day="Day 2" title="Kempty Falls Early + Landour Walk"
                  items={[
                    "7am: Shared auto to Kempty Falls (15km, \u20B940\u2013\u20B960/person). Kempty Falls is honestly a tourist trap in peak season \u2014 500 people splashing in a waterfall. Go at 7am or skip it for Cloud\u2019s End trek instead.",
                    "Back by 10am. Walk uphill from Picture Palace to Landour \u2014 the 2km climb is steep but this is the best part of the trip.",
                    "11am: Char Dukan (Four Shops) \u2014 Landour\u2019s legendary 4-shop strip. Maggi and chai with a valley view, \u20B980\u2013\u20B9120.",
                    "Walk Sister\u2019s Bazaar to Lal Tibba (highest point, 2,275m). The walk from Library Point to Lal Tibba on a clear morning gives you a 360-degree Himalayan panorama that rivals anything in Shimla.",
                    "2pm: Walk back down through Landour cantonment \u2014 colonial bungalows, pine forests, near-zero tourists.",
                    "Evening: Company Garden (\u20B975 entry) if you want to tick it off, or skip it and rest \u2014 it\u2019s mostly a kids\u2019 park.",
                  ]}
                  cost={"\u20B9600\u2013\u20B91,100 excluding accommodation"} />
                <DayCard day="Day 3" title="Cloud\u2019s End Trek + Departure"
                  items={[
                    "7:30am: Walk or share auto to Cloud\u2019s End (8km from Library Bazaar). The last point of Mussoorie \u2014 dense oak and deodar forest, misty trails, genuinely wild.",
                    "Trek the Benog Wildlife Sanctuary loop (2\u20133 hrs, easy-moderate). Birding paradise \u2014 carry binoculars if you have them.",
                    "Back by noon. Last walk through Mall Road for shopping \u2014 Tibetan Market for shawls (\u20B9200\u2013\u20B9800), walking sticks (\u20B9100\u2013\u20B9300).",
                    "2pm: Shared taxi back to Dehradun for onward train or flight.",
                  ]}
                  cost={"\u20B9500\u2013\u20B9900 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}5,500&ndash;{"\u20B9"}7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: FAMILY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"}</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Family Plan — Upper Mall Road or Landour Base</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Mid-range hotel with breakfast &middot; {"\u20B9"}2,000&ndash;{"\u20B9"}4,500/night &middot; Hired taxi for day trips</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Settle In, Gun Hill, Camel\u2019s Back"
                  items={[
                    "Dehradun to Mussoorie by pre-booked taxi (\u20B91,200\u2013\u20B91,800). Avoid shared taxis with kids \u2014 the road has 100+ curves.",
                    "Check in, rest until lunch. Hill sickness is real for under-5s \u2014 let them acclimatize.",
                    "12:30pm: Lunch at Kalsang Friends Corner, Mall Road \u2014 great momos and thukpa, kids love it. \u20B9600\u2013\u20B9900 for family.",
                    "2pm: Gun Hill ropeway (\u20B9175/person return, kids \u20B9100). Coin-operated binoculars at the top \u2014 kids will spend 30 min here.",
                    "4:30pm: Camel\u2019s Back Road walk \u2014 flat, paved, safe for kids. The rock that looks like a camel is 1km in. Ice cream at the halfway point.",
                    "Evening: Mall Road stroll \u2014 candy floss, toy shops, horse rides (\u20B9200\u2013\u20B9400).",
                  ]}
                  cost={"\u20B92,500\u2013\u20B94,000 for family (excl. accommodation)"} />
                <DayCard day="Day 2" title="Kempty Falls + Company Garden + Landour Taster"
                  items={[
                    "8:30am: Taxi to Kempty Falls (\u20B9600\u2013\u20B9800 return with 1hr wait). Get there before 9:30am \u2014 by 11am it\u2019s a stampede.",
                    "Kempty Falls entry \u20B950/person. Kids love the splash pool at the bottom. Carry change clothes.",
                    "11am: Company Garden (\u20B975/person) \u2014 flower beds, artificial lake with paddle boats (\u20B9150), mini amusement zone. Budget 1.5 hrs for kids.",
                    "1pm: Drive up to Landour for lunch at Char Dukan \u2014 the Maggi here is a Mussoorie rite of passage. \u20B9400\u2013\u20B9600 for family.",
                    "Walk Sister\u2019s Bazaar (flat, 1km) \u2014 old bookshops, jam shops, bakeries. Buy Landour\u2019s famous peanut butter at the Landour Bakehouse.",
                    "3:30pm: Drive to Lal Tibba viewpoint \u2014 clearest Himalayan panorama from a paved viewpoint. Free entry, binoculars available.",
                    "Evening: Rest at hotel or revisit Mall Road for dinner.",
                  ]}
                  cost={"\u20B93,000\u2013\u20B95,000 for family (excl. accommodation)"} />
                <DayCard day="Day 3" title="Cloud\u2019s End + George Everest + Departure"
                  items={[
                    "8am: Taxi to Cloud\u2019s End (\u20B9500\u2013\u20B9700). Walk the forest trail (1.5km, easy, kids-friendly). The mist through the deodar trees is magical.",
                    "10am: Drive to George Everest viewpoint (5km from Cloud\u2019s End) \u2014 ruins of the house of the man who surveyed Mount Everest. Panoramic Doon Valley view. Free.",
                    "12pm: Back to Mussoorie. Last lunch at Cafe by the Way or Urban Turban \u2014 \u20B9800\u2013\u20B91,200 for family.",
                    "Last-minute shopping: Tibetan Market for woollen caps, shawls. Mall Road for Mussoorie\u2019s famous sticks and local honey.",
                    "3pm: Taxi to Dehradun for onward travel.",
                  ]}
                  cost={"\u20B92,800\u2013\u20B94,500 for family (excl. accommodation)"} />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (family of 4) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}12,000&ndash;{"\u20B9"}18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Landour Boutique Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Heritage hotel or boutique property &middot; {"\u20B9"}5,000&ndash;{"\u20B9"}8,000/night &middot; Private taxi throughout</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive into Landour\u2019s Literary World"
                  items={[
                    "Pre-booked premium taxi from Dehradun (\u20B92,000\u2013\u20B92,500). Request drop directly at Landour \u2014 skip Mall Road entirely on Day 1.",
                    "Check into a heritage property \u2014 Rokeby Manor, Paddlers Lodge, or The Residency. These are the stays that make Mussoorie special.",
                    "Late breakfast at Landour Bakehouse \u2014 sourdough, cinnamon rolls, proper coffee. \u20B9500\u2013\u20B9800 for two.",
                    "Walk the Landour Chukkar (full loop, 5.5km, 2hrs). Pass Ruskin Bond\u2019s house (ivy-covered building near Ivy Cottage \u2014 don\u2019t disturb, but wave if the window\u2019s open).",
                    "Lunch at Emily\u2019s or Doma\u2019s Inn \u2014 \u20B91,200\u2013\u20B91,800 for two. Emily\u2019s does the best continental food in the hills.",
                    "5pm: Lal Tibba at golden hour. On a clear day, you can see Bandarpunch, Swargarohini, and Kedarnath peaks. Bring binoculars.",
                    "Dinner at Rokeby Manor \u2014 candlelit colonial dining, \u20B92,500\u2013\u20B93,500 for two. Book ahead.",
                  ]}
                  cost={"\u20B95,000\u2013\u20B97,500 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Cloud\u2019s End + George Everest + Hidden Mussoorie"
                  items={[
                    "7:30am: Private taxi to Cloud\u2019s End. Trek into Benog Wildlife Sanctuary (2\u20133 hrs). Morning mist in the oak forest is why the British called this place \u2018Cloud\u2019s End.\u2019",
                    "10:30am: Drive to George Everest viewpoint \u2014 the ruins sit on a cliff edge with the entire Doon Valley below. One of the most photographed spots in Uttarakhand.",
                    "12:30pm: Lunch at Cafe Ivy on Mall Road \u2014 terrace seating with valley views, \u20B91,500\u2013\u20B92,000 for two.",
                    "2:30pm: Camel\u2019s Back Road full walk (3km). The afternoon light on the mountains is best between 3\u20134pm.",
                    "4:30pm: Gun Hill ropeway for sunset. The view from up top with the ranges turning pink is the definitive Mussoorie moment.",
                    "Evening: Dinner at The Tavern (oldest bar-restaurant in Mussoorie, since 1958) or The Clock Tower Caf\u00E9.",
                  ]}
                  cost={"\u20B94,500\u2013\u20B96,500 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Kempty Falls (or Skip) + Landour Farewell"
                  items={[
                    "Option A (weekday/off-season): Early morning Kempty Falls (7am taxi, \u20B91,000 return). Beautiful when empty. Back by 9:30am.",
                    "Option B (weekend/peak): Skip Kempty entirely. Instead, walk from Landour to Jabarkhet Nature Reserve (8km) \u2014 leopard territory, pristine trails, zero crowds.",
                    "11am: Final Landour loop \u2014 Char Dukan for goodbye Maggi, Sister\u2019s Bazaar for jam and peanut butter souvenirs, Landour Bakehouse for road pastries.",
                    "12:30pm: Brunch at The Cottage (if staying at Rokeby Manor) or AnnVilla.",
                    "2pm: Premium taxi to Dehradun. Stop at Robber\u2019s Cave (Guchhupani) en route if time permits \u2014 river flowing through a cave, 30 min visit.",
                  ]}
                  cost={"\u20B93,500\u2013\u20B95,500 for two (excl. accommodation)"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}22,000&ndash;{"\u20B9"}30,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">{"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"} Family</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\u2728"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,800\u2013\u20B94,500", "\u20B96,000\u2013\u20B913,500", "\u20B915,000\u2013\u20B924,000"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20B91,200\u2013\u20B91,800", "\u20B93,500\u2013\u20B95,500", "\u20B95,000\u2013\u20B98,000"],
                    ["\uD83D\uDE95 Transport", "\u20B9500\u2013\u20B9800", "\u20B93,000\u2013\u20B94,500", "\u20B94,500\u2013\u20B96,500"],
                    ["\uD83C\uDFAF Activities", "\u20B9400\u2013\u20B9700", "\u20B91,500\u2013\u20B92,500", "\u20B91,500\u2013\u20B92,500"],
                    ["\uD83D\uDECD Shopping", "\u20B9200\u2013\u20B9500", "\u20B9500\u2013\u20B91,500", "\u20B91,000\u2013\u20B92,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["\u20B95,500\u2013\u20B97,000 (solo)","\u20B912,000\u2013\u20B918,000 (family of 4)","\u20B922,000\u2013\u20B930,000 (couple)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Mussoorie is significantly cheaper than Shimla or Manali, especially for food and accommodation.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mussoorie"
            hotels={[
              { name: "Hotel Broadway", type: "Budget &middot; Mall Road", price: "From \u20B91,200/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/broadway-mussoorie.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Rokeby Manor", type: "Heritage Boutique &middot; Landour", price: "From \u20B95,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/hotel/in/rokeby-manor.html?aid=YOUR_AFFILIATE_ID" },
              { name: "JW Marriott Mussoorie", type: "Luxury Resort &middot; Library Road", price: "From \u20B910,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/jw-marriott-mussoorie.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Landour Heritage Walking Tour", duration: "3 hours", price: "From \u20B9800/person", badge: "Must do", url: "https://www.getyourguide.com/mussoorie-l4321/landour/?partner_id=PSZA5UI" },
              { name: "Cloud\u2019s End & Benog Trek", duration: "Half day", price: "From \u20B9600/person", badge: "Nature", url: "https://www.getyourguide.com/mussoorie-l4321/trekking/?partner_id=PSZA5UI" },
              { name: "Mussoorie Sightseeing Full Day", duration: "8 hours", price: "From \u20B91,500/person", url: "https://www.getyourguide.com/mussoorie-l4321/?partner_id=PSZA5UI" },
              { name: "Dehradun + Mussoorie Combo Tour", duration: "Full day", price: "From \u20B92,000/person", url: "https://www.getyourguide.com/dehradun-l4322/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="mussoorie-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Mussoorie — Must-See Places"
            subtitle="Click each thumbnail to explore Mussoorie and Landour&apos;s most iconic viewpoints, trails and heritage sites."
            spots={[
              { name: "Lal Tibba",             query: "lal tibba mussoorie himalayan panorama mountain viewpoint binoculars",         desc: "Mussoorie\u2019s highest point at 2,275m. On a clear day, you see Bandarpunch, Kedarnath, and a 360-degree wall of Himalayan peaks. Best at sunrise." },
              { name: "Landour",               query: "landour mussoorie colonial houses pine forest mountain village pathway",        desc: "The quiet cantonment above Mussoorie where Ruskin Bond has lived for 60 years. Char Dukan, Sister\u2019s Bazaar, and the best caf\u00E9s in Uttarakhand." },
              { name: "Cloud\u2019s End",      query: "clouds end mussoorie dense forest misty oak deodar trees trail",               desc: "The last inhabited point of Mussoorie \u2014 where the town ends and the wild Himalayan forest begins. Gateway to Benog Wildlife Sanctuary." },
              { name: "Gun Hill",              query: "gun hill mussoorie ropeway cable car mountain view sunset valley",              desc: "Second-highest point in Mussoorie, accessible by ropeway or a 20-min walk. The sunset here turns the mountain ranges pink and gold." },
              { name: "Camel\u2019s Back Road", query: "camels back road mussoorie mountain walking path pine trees valley panorama",  desc: "A 3km paved walk with mountain views the entire way. Named after a rocky outcrop shaped like a camel. Best in late afternoon light." },
            ]}
          />

          {/* ── LANDOUR IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="landour mussoorie colonial stone pathway pine forest mountain village"
              alt="Landour village pathway through pine forests above Mussoorie"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Landour &mdash; a 2km walk uphill from Mussoorie that filters out 90% of the crowds and transports you into a different era entirely.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — no doubling back, no wasted fuel. Mussoorie is small enough to walk most of it, but taxis help for Kempty Falls and Cloud&apos;s End.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 Family"},{id:"C" as const,label:"\u2728 Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A &middot; Day 2" day="Kempty Falls + Landour Loop"
                  stops={["Library Bazaar 7am","Kempty Falls 7:30am","Picture Palace 10am","Char Dukan 11am","Lal Tibba 12:30pm","Company Garden 3pm"]}
                  distance="25km &middot; ~1hr driving + walking" note="Kempty Falls is 15km downhill on the Dehradun road. Get there before 8am or it\u2019s not worth it. Landour is all walking \u2014 flat to mild incline."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Library+Bazaar+Mussoorie/Kempty+Falls/Picture+Palace+Mussoorie/Char+Dukan+Landour/Lal+Tibba+Mussoorie/Company+Garden+Mussoorie" />
                <RouteCard plan="Plan A &middot; Day 3" day="Cloud&apos;s End Trek + Departure"
                  stops={["Library Bazaar 7:30am","Cloud\u2019s End 8:30am","Benog Trek 9am\u201311:30am","Mall Road 12:30pm","Dehradun 3pm"]}
                  distance="45km total &middot; ~1.5hrs driving" note="Cloud\u2019s End is the western edge of Mussoorie. The Benog loop is easy-moderate and well marked. Return via Mall Road for last-minute shopping."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Library+Bazaar+Mussoorie/Clouds+End+Mussoorie/Mall+Road+Mussoorie/Dehradun+Railway+Station" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B &middot; Day 2" day="Kempty Falls + Landour Family Loop"
                  stops={["Hotel 8:30am","Kempty Falls 9am","Company Garden 11am","Char Dukan Lunch","Sister\u2019s Bazaar","Lal Tibba 3:30pm"]}
                  distance="28km &middot; ~1hr 15min driving + walking" note="The taxi waits at Kempty Falls (negotiate \u20B9600\u2013\u20B9800 round trip with Company Garden stop). Landour loop is flat and kids-friendly from Char Dukan onward."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Mall+Road+Mussoorie/Kempty+Falls/Company+Garden+Mussoorie/Char+Dukan+Landour/Lal+Tibba+Mussoorie" />
                <RouteCard plan="Plan B &middot; Day 3" day="Cloud&apos;s End + George Everest"
                  stops={["Hotel 8am","Cloud\u2019s End 8:45am","George Everest 10:30am","Mall Road Lunch","Dehradun 3pm"]}
                  distance="50km total &middot; ~2hrs driving" note="Cloud\u2019s End and George Everest are on opposite sides of Mussoorie but your taxi loops through town between them. Both are free entry."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Mall+Road+Mussoorie/Clouds+End+Mussoorie/George+Everest+Peak+Mussoorie/Mall+Road+Mussoorie/Dehradun" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C &middot; Day 2" day="Cloud&apos;s End + George Everest + Camel&apos;s Back"
                  stops={["Landour 7:30am","Cloud\u2019s End 8:15am","Benog Trek 8:30\u201311am","George Everest 11:30am","Cafe Ivy Lunch","Camel\u2019s Back 3pm","Gun Hill Sunset"]}
                  distance="30km &middot; ~1hr driving + 6km walking" note="This day covers the two best viewpoints (George Everest + Gun Hill) and the best walk (Camel\u2019s Back). Gun Hill ropeway closes at 7pm \u2014 be there by 5pm for sunset."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Landour+Mussoorie/Clouds+End+Mussoorie/George+Everest+Peak+Mussoorie/Camels+Back+Road+Mussoorie/Gun+Hill+Mussoorie" />
                <RouteCard plan="Plan C &middot; Day 3" day="Kempty (Optional) + Landour Farewell"
                  stops={["Landour 7am","Kempty Falls 7:30am (optional)","Landour Bakehouse 10am","Char Dukan 11am","Sister\u2019s Bazaar","Dehradun 2pm"]}
                  distance="48km &middot; ~1.5hrs driving" note="Skip Kempty if it\u2019s a weekend \u2014 do Jabarkhet Nature Reserve (8km from Landour) instead. Better wildlife, zero crowds, leopard territory."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Landour+Mussoorie/Kempty+Falls/Char+Dukan+Landour/Dehradun+Railway+Station" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55000!2d78.06!3d30.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Mussoorie Travel Map" />
            </div>
          </section>

          {/* ── KEMPTY FALLS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kempty falls mussoorie waterfall rocks green mountain uttarakhand"
              alt="Kempty Falls waterfall near Mussoorie"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kempty Falls at 7am: genuinely beautiful. At noon: 500 people and zero charm. Timing is everything.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Staying on Mall Road itself", desc: "Noisy traffic, inflated prices, zero character. Stay 500m above in Landour or near Picture Palace \u2014 10 min walk to Mall Road but a completely different experience.", icon: "\uD83C\uDFE8" },
                { title: "Visiting Kempty Falls on a weekend", desc: "Peak season weekends = 500+ visitors, muddy paths, 30-min queue for the waterfall. Weekday mornings before 8am or skip entirely.", icon: "\uD83C\uDF0A" },
                { title: "Skipping Landour entirely", desc: "90% of tourists never walk up to Landour. It\u2019s the best part of Mussoorie \u2014 Char Dukan, the colonial walks, Ruskin Bond\u2019s neighbourhood. Budget at least half a day here.", icon: "\uD83D\uDCDA" },
                { title: "Hiring a taxi for Mall Road sightseeing", desc: "Mall Road is 2km and flat. Walk it. Taxis can\u2019t even drive most of it. Save taxi money for Kempty Falls and Cloud\u2019s End.", icon: "\uD83D\uDE95" },
                { title: "Eating only at Mall Road restaurants", desc: "Mall Road restaurants charge 50\u201380% more than places in Library Bazaar or Landour. Char Dukan Maggi: \u20B960. Mall Road Maggi: \u20B9120. Same noodles.", icon: "\uD83C\uDF7D" },
                { title: "Going in July-August monsoon", desc: "Heavy rain, landslides, fog so thick you can\u2019t see 10 meters. Many roads close. September is fine once rains ease.", icon: "\uD83C\uDF27\uFE0F" },
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
                { icon: "\uD83C\uDF05", title: "The Lal Tibba Sunrise", desc: "The walk from Library Point to Lal Tibba on a clear morning gives you a 360-degree Himalayan panorama that rivals anything in Shimla. Go before 7am for the clearest views.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCDA", title: "Find Ruskin Bond", desc: "Bond often visits the Cambridge Book Depot on Mall Road on Saturdays. He\u2019s famously kind to visitors. Don\u2019t be pushy \u2014 buy a book, get it signed, and you\u2019ve made a memory.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u2615", title: "Landour Caf\u00E9 Circuit", desc: "Landour Bakehouse (breakfast) \u2192 Char Dukan (Maggi lunch) \u2192 Emily\u2019s (dinner). This is the definitive Landour food trail and it\u2019s all within 1km of walking.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDD7E", title: "Cloud\u2019s End Over Kempty", desc: "If you only have time for one, pick Cloud\u2019s End. Kempty Falls is a 15-minute stop. Cloud\u2019s End is a 3-hour forest trek that stays with you.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE8C", title: "Skip the Taxi to Dehradun", desc: "Shared Vikram autos from Library Bazaar to Dehradun cost \u20B960\u2013\u20B9100 and run every 15 min. Private taxi costs \u20B91,200+. The shared ride is half the fun.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Mar\u2013Apr \u2705 clear views, wildflowers | May\u2013Jun \u2705 peak season, book early | Jul\u2013Aug \u26A0\uFE0F monsoon, avoid | Sep\u2013Oct \u2705 post-monsoon green | Nov\u2013Feb \u2744\uFE0F cold, possible snow", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Mussoorie itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mussoorie Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Mussoorie?", a: "3 days is ideal \u2014 enough for Mall Road, Gun Hill, Kempty Falls, Landour, Lal Tibba, and Cloud\u2019s End. 2 days feels rushed and you\u2019ll miss Landour entirely. 4\u20135 days lets you add Dhanaulti, Kanatal, or the George Everest trek." },
                { q: "What is the best time to visit Mussoorie?", a: "March to June for pleasant weather (15\u201330\u00B0C) and clear Himalayan views. September to November for post-monsoon greenery and fewer crowds. Avoid July\u2013August (heavy rain, landslides). December to February can bring snowfall but many hotels shut down." },
                { q: "How much does a 3-day Mussoorie trip cost?", a: "Budget solo: under \u20B97,000 including accommodation. Family of 4: \u20B98,000\u2013\u20B918,000 total. Premium couple: \u20B918,000\u2013\u20B930,000 for two. All prices include stay, food, transport and activities." },
                { q: "How do I reach Mussoorie?", a: "Nearest airport: Jolly Grant, Dehradun (60km, 1.5hrs by taxi). Nearest railway station: Dehradun (34km, 1hr). Most people take a Shatabdi Express from Delhi to Dehradun (5.5hrs) then a shared taxi or bus to Mussoorie. Delhi to Mussoorie by road is 290km, about 6\u20137 hours." },
                { q: "Is Kempty Falls worth visiting?", a: "Depends on timing. Peak season weekends: overcrowded with 500+ people, honestly not worth it. Weekday mornings before 8am: genuinely beautiful. If it\u2019s peak season, skip Kempty and do the Cloud\u2019s End trek instead \u2014 far more rewarding and almost no crowds." },
                { q: "Is Mussoorie better than Shimla?", a: "Mussoorie wins for Landour\u2019s literary charm, easier access from Delhi via Dehradun, and a quieter feel on the Landour side. Shimla wins for grander colonial architecture and more hotel variety. For a literary, peaceful hill station experience, Mussoorie edges ahead." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Uttarakhand Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nainital \u2014 3 Day Hill Station Guide", href: "/blog/nainital-3-days", soon: false },
                { label: "Rishikesh & Haridwar \u2014 3 Day Guide", href: "/blog/rishikesh-haridwar-3-days", soon: false },
                { label: "Manali \u2014 5 Day Adventure Guide", href: "/blog/manali-5-days", soon: false },
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

          <RelatedGuides currentSlug="mussoorie-3-days" />
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
