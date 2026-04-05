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


const VIZAG_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "citycoast",   emoji: "\uD83D\uDCCD", label: "City vs Hills" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Vizag 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Vizag in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"\u2192"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"\u2192"}
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function VizagClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B96k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF3F", label: "Nature", sub: "\u20B98k\u201318k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\u2728", label: "Premium", sub: "\u20B918k\u201330k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={VIZAG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Vizag" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="visakhapatnam beach coast andhra pradesh india"
            fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=85"
            alt="Visakhapatnam coastline at golden hour"
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
              <span className="text-white/70">Vizag 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Mountains
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Vizag in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — from RK Beach sunrises to the Araku Valley train ride.
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
              The Araku Valley train from Vizag is India&apos;s most underrated scenic train ride — 4 hours through 58 tunnels and the Eastern Ghats. Book the Vistadome coach for {"\u20B9"}500 extra.
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
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── CITY VS HILLS ── */}
          <section id="citycoast" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} City Coast vs Eastern Ghats</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Vizag gives you two completely different trips in one destination. Most people only see one side.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "City & Coast", emoji: "\uD83C\uDFD6\uFE0F", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Best for","First-timers, history buffs, short trips"],["Highlights","RK Beach, Kailasagiri, Submarine Museum, Yarada Beach"],["Budget","\u20B9600\u2013\u20B92,500/night"],["Vibe","Relaxed coastal city, sunrise walks, naval heritage"]],
                  note: "RK Beach is packed after 5pm on weekends. Go at sunrise for a completely different experience." },
                { title: "Hills & Valleys", emoji: "\u26F0\uFE0F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Best for","Nature lovers, train enthusiasts, photographers"],["Highlights","Araku Valley, Borra Caves, coffee plantations, tribal museums"],["Budget","\u20B9400\u2013\u20B92,000/night in Araku"],["Vibe","Misty mornings, tribal culture, Eastern Ghat forests"]],
                  note: "Araku is 128km by train. The Vistadome coach has glass ceilings and panoramic windows \u2014 book 2 weeks ahead." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Do the city coast on Day 1, Araku Valley on Day 2 (full day), and Yarada Beach + Simhachalam on Day 3. You get the complete Vizag experience without backtracking.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B95,500"} />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="VTZ" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — City Base (RK Beach area)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: OYO / budget hotel near RK Beach {"\u00B7"} {"\u20B9"}600{"\u2013"}{"\u20B9"}1,200/night {"\u00B7"} Auto + bus transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Coast, Kailasagiri & Submarine Museum"
                  items={[
                    "6am: Sunrise walk at RK Beach \u2014 the promenade is empty at this hour and the light is golden",
                    "8am: Breakfast at a beach-side tiffin centre. Idli + puri \u20B940\u201360.",
                    "9:30am: Kailasagiri Hill Park \u2014 take the ropeway up (\u20B9100 return). Shiva-Parvati statue, panoramic city views. 1.5 hours.",
                    "12pm: INS Kurusura Submarine Museum on Beach Road (\u20B940 entry). Walk through an actual decommissioned submarine. 45 min.",
                    "1pm: Lunch at a Ramakrishna Beach dhaba \u2014 fish meals \u20B9120\u2013\u20B9180",
                    "3pm: Dolphin Hill viewpoint \u2014 free, 360-degree views of the harbour and coastline",
                    "5:30pm: Back to RK Beach for sunset. Evening street food \u2014 corn, mirchi bajji, punugulu \u20B950\u2013\u20B980",
                  ]}
                  cost={"\u20B9800\u2013\u20B91,200 excluding accommodation"} />
                <DayCard day="Day 2" title="Araku Valley Train + Borra Caves"
                  items={[
                    "5:30am: Reach Vizag railway station. Train 18551 departs 6:45am sharp. Book unreserved \u20B960 or sleeper \u20B9170.",
                    "6:45am\u201311am: 4-hour ride through 58 tunnels and the Eastern Ghats. Sit on the left side for the best valley views.",
                    "11am\u20131pm: Araku Valley \u2014 walk through the coffee plantations, visit Tribal Museum (\u20B930). Lunch at a local tribal dhaba \u20B9100\u2013\u20B9150.",
                    "1:30pm: Shared auto/jeep to Borra Caves (\u20B950\u2013\u20B980/person, 90km). These caves are a million years old and genuinely spectacular.",
                    "3:30pm: Borra Caves entry \u20B960. Stalactites, stalagmites, underground river. 45 min inside.",
                    "4:30pm: Shared cab back to Vizag (\u20B9150\u2013\u20B9200/person, 3hrs) or catch the return train if available.",
                  ]}
                  cost={"\u20B9600\u2013\u20B91,000 excluding accommodation"} />
                <DayCard day="Day 3" title="Yarada Beach, Simhachalam & Departure"
                  items={[
                    "7am: Auto to Yarada Beach (15km south, \u20B9200\u2013\u20B9250). What RK Beach tourists don\u2019t know about \u2014 surrounded by hills, usually empty on weekdays.",
                    "9:30am: Back to city. Breakfast near Simhachalam.",
                    "10:30am: Simhachalam Temple \u2014 11th-century Vaishnavite temple on a hill. Free entry, stunning architecture. 1 hour.",
                    "12:30pm: Lunch at a Waltair Uplands restaurant \u2014 Andhra meals \u20B9120\u2013\u20B9180",
                    "2pm: Last walk along Beach Road. Pick up Vizag-special Araku coffee (\u20B9150\u2013\u20B9250/pack) from any general store.",
                    "Head to airport/station",
                  ]}
                  cost={"\u20B9700\u2013\u20B91,000 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}5,500{"\u2013"}{"\u20B9"}6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: NATURE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF3F"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Nature Plan — City + Araku Stay</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Mid-range hotel + 1 night Araku homestay {"\u00B7"} {"\u20B9"}1,500{"\u2013"}{"\u20B9"}3,000/night {"\u00B7"} Mix of train + cab</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Vizag Coast — The Full Circuit"
                  items={[
                    "6am: Sunrise at RK Beach promenade \u2014 morning walkers, fishing boats, golden light on the water",
                    "8am: Breakfast at a Sea Face restaurant \u2014 pesarattu + upma combo \u20B980\u2013\u20B9120",
                    "9:30am: INS Kurusura Submarine Museum (\u20B940) \u2014 walk through an actual submarine. The torpedo room is worth the queue.",
                    "11am: Kailasagiri Hill \u2014 ropeway (\u20B9100) up for city panorama. Coffee at the hilltop cafe.",
                    "1pm: Lunch at Dharani restaurant, MVP Colony \u2014 proper Andhra thali \u20B9250\u2013\u20B9350",
                    "3pm: Drive to Yarada Beach (15km) \u2014 surrounded by hills, turquoise water, almost always empty",
                    "5pm: Dolphin Hill viewpoint for sunset \u2014 harbour views, Dolphin\u2019s Nose lighthouse in the distance",
                    "Dinner at a Waltair Uplands restaurant \u2014 budget \u20B9400\u2013\u20B9600",
                  ]}
                  cost={"\u20B91,800\u2013\u20B92,500 excluding accommodation"} />
                <DayCard day="Day 2" title="Araku Valley — Vistadome + Overnight"
                  items={[
                    "5:30am: Reach station. Book Vistadome coach for \u20B9500 extra \u2014 glass ceiling, panoramic windows, worth every rupee.",
                    "6:45am\u201311am: The train ride \u2014 58 tunnels, lush valleys, waterfalls in monsoon tail. Sit on the left.",
                    "11:30am: Araku Tribal Museum (\u20B930) \u2014 genuinely well-curated, explains the tribal cultures of the Eastern Ghats",
                    "1pm: Lunch at Araku \u2014 bamboo chicken if available (\u20B9200\u2013\u20B9300). A tribal specialty cooked inside bamboo.",
                    "2:30pm: Walk through Araku coffee plantations. Buy coffee directly from growers \u2014 \u20B9100\u2013\u20B9200/pack, half the Vizag price.",
                    "4pm: Padmapuram Gardens (\u20B930) \u2014 topiary garden in a forest setting, peaceful afternoon walk",
                    "Stay overnight at an Araku homestay or APTDC resort \u2014 misty mornings are the reward for staying",
                  ]}
                  cost={"\u20B92,000\u2013\u20B93,500 excluding accommodation"} />
                <DayCard day="Day 3" title="Borra Caves + Simhachalam + Departure"
                  items={[
                    "7am: Early start \u2014 drive to Borra Caves from Araku (90km, 2hrs). Most day-trippers skip them. Don\u2019t \u2014 they\u2019re a million years old.",
                    "9:30am: Borra Caves (\u20B960) \u2014 stalactites and stalagmites formed over millennia, underground river, genuinely spectacular",
                    "11am: Drive back towards Vizag (3hrs). Stop at Ananthagiri waterfalls if time allows.",
                    "2:30pm: Quick lunch en route \u2014 highway dhaba \u20B9150\u2013\u20B9250",
                    "3:30pm: Simhachalam Temple \u2014 11th-century hilltop temple, remarkable Kalinga-style architecture. 45 min.",
                    "5pm: Head to airport/station. Pick up Araku coffee and Kakinada kaja (sweet) as gifts.",
                  ]}
                  cost={"\u20B91,500\u2013\u20B92,500 excluding accommodation"} />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}8,000{"\u2013"}{"\u20B9"}18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Sea-view Hotel + Vistadome + Private Cab</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Novotel / Taj Gateway / The Park {"\u00B7"} {"\u20B9"}4,000{"\u2013"}{"\u20B9"}8,000/night {"\u00B7"} Private cab throughout</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Vizag Premium — Coast & Heritage"
                  items={[
                    "7am: Sunrise yoga or walk at Rushikonda Beach \u2014 cleaner and calmer than RK Beach, golden sand",
                    "9am: Breakfast at hotel \u2014 sea-view buffet",
                    "10:30am: Private cab to Kailasagiri \u2014 ropeway up, hilltop coffee with panoramic views",
                    "12:30pm: INS Kurusura Submarine Museum (\u20B940) + Aircraft Museum next door (\u20B920)",
                    "1:30pm: Lunch at Taj Gateway or Novotel \u2014 Andhra seafood thali \u20B9800\u2013\u20B91,200",
                    "3:30pm: Private cab to Yarada Beach \u2014 15km south, surrounded by hills, empty cove. The beach that RK Beach tourists miss.",
                    "5:30pm: Dolphin Hill sunset \u2014 the best viewpoint in Vizag, harbour panorama",
                    "8pm: Dinner at Upperdeck or Sky Lounge \u2014 rooftop dining with sea views \u20B91,500\u2013\u20B92,500 for two",
                  ]}
                  cost={"\u20B94,000\u2013\u20B96,000 excluding accommodation"} />
                <DayCard day="Day 2" title="Vistadome to Araku + Borra Caves"
                  items={[
                    "5:30am: Reach station. Vistadome coach \u2014 glass ceiling, reclining seats, complimentary breakfast served on board.",
                    "6:45am\u201311am: The signature experience \u2014 58 tunnels, Eastern Ghat valleys, waterfall glimpses. India\u2019s most underrated scenic rail.",
                    "11am: Private cab waiting at Araku station \u2014 pre-arranged, \u20B92,000\u2013\u20B93,000 for full day",
                    "11:30am: Araku Tribal Museum + coffee plantation walk. Buy premium single-origin Araku coffee \u20B9200\u2013\u20B9400/pack.",
                    "1pm: Bamboo chicken lunch at a tribal restaurant \u2014 the real Araku experience, \u20B9300\u2013\u20B9500",
                    "2:30pm: Drive to Borra Caves (90km, 2hrs). A million years old and genuinely spectacular.",
                    "4:30pm: Borra Caves exploration \u2014 1 hour inside. Underground river, ancient formations.",
                    "5:30pm: Private cab back to Vizag (3hrs). Dinner at hotel.",
                  ]}
                  cost={"\u20B95,000\u2013\u20B98,000 excluding accommodation"} />
                <DayCard day="Day 3" title="Simhachalam, Rushikonda & Departure"
                  items={[
                    "7am: Simhachalam Temple \u2014 early morning darshan beats the queue. 11th-century masterpiece, hilltop setting. 1 hour.",
                    "9am: Breakfast at Waltair Club or hotel",
                    "10:30am: Rushikonda Beach \u2014 water sports if interested (jet ski \u20B9600, banana ride \u20B9300). Or just relax on the cleanest beach in Vizag.",
                    "12:30pm: Farewell lunch at Bamboo Bay or Sea Inn \u2014 Vizag seafood platter \u20B91,000\u2013\u20B91,500",
                    "2pm: Last shopping \u2014 Araku coffee, Kakinada kaja, Etikoppaka lacquerware (traditional wooden toys)",
                    "Head to airport/station",
                  ]}
                  cost={"\u20B93,000\u2013\u20B95,000 excluding accommodation"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}18,000{"\u2013"}{"\u20B9"}30,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">{"\uD83C\uDF3F"} Nature</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\u2728"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,800\u2013\u20B93,600", "\u20B94,500\u2013\u20B99,000", "\u20B912,000\u2013\u20B924,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B9600\u2013\u20B9900", "\u20B91,500\u2013\u20B93,000", "\u20B94,000\u2013\u20B97,000"],
                    ["\uD83D\uDE8C Transport", "\u20B9400\u2013\u20B9600", "\u20B91,500\u2013\u20B93,000", "\u20B94,000\u2013\u20B96,000"],
                    ["\uD83C\uDFAF Activities", "\u20B9300\u2013\u20B9500", "\u20B9800\u2013\u20B91,500", "\u20B91,500\u2013\u20B93,000"],
                    ["\uD83D\uDE82 Train Tickets", "\u20B960\u2013\u20B9170", "\u20B9500\u2013\u20B9700", "\u20B9700\u2013\u20B91,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B93,200\u2013\u20B95,800","\u20B98,800\u2013\u20B917,200","\u20B922,200\u2013\u20B941,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Vizag is significantly cheaper than Goa or Kerala — your rupee goes further here.
            </p>
          </section>

          {/* ── VIZAG AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Vizag"
            hotels={[
              { name: "Hotel Daspalla", type: "Mid-Range Business Hotel", price: "From \u20B92,500/night", rating: "4", badge: "Value pick", url: "https://www.booking.com/hotel/in/daspalla-visakhapatnam.html?aid=2820480" },
              { name: "Novotel Vizag", type: "Premium Sea-View Hotel", price: "From \u20B95,500/night", rating: "5", badge: "Sea view", url: "https://www.booking.com/hotel/in/novotel-visakhapatnam-varun-beach.html?aid=2820480" },
              { name: "Taj Gateway Vizag", type: "Luxury Beach Resort", price: "From \u20B98,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/gateway-hotel-beach-road.html?aid=2820480" },
            ]}
            activities={[
              { name: "Araku Valley Vistadome Train Experience", duration: "Full day", price: "From \u20B9700/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=visakhapatnam&partner_id=PSZA5UI" },
              { name: "Borra Caves & Eastern Ghats Day Trip", duration: "Full day", price: "From \u20B91,200/person", badge: "Nature", url: "https://www.getyourguide.com/s/?q=visakhapatnam&partner_id=PSZA5UI" },
              { name: "Vizag City Heritage Walking Tour", duration: "3 hours", price: "From \u20B9500/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=visakhapatnam&partner_id=PSZA5UI" },
              { name: "Rushikonda Beach Water Sports Package", duration: "2 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/s/?q=visakhapatnam&partner_id=PSZA5UI" },
            ]}
            pdfProductId="vizag-3-days-pdf"
          />

          {/* ── VIZAG DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Vizag — Must-See Places"
            subtitle="Click each thumbnail to explore Vizag's most iconic beaches, hills and heritage sites."
            spots={[
              { name: "RK Beach",                query: "ramakrishna beach visakhapatnam promenade sunrise golden light empty",     desc: "Vizag's most iconic stretch — 3km promenade along the Bay of Bengal. Best at sunrise before the crowds arrive." },
              { name: "Araku Valley",             query: "araku valley andhra pradesh green hills coffee plantation misty morning",  desc: "128km from Vizag through 58 tunnels. Coffee plantations, tribal culture, misty Eastern Ghat valleys." },
              { name: "Borra Caves",              query: "borra caves stalactites underground cave andhra pradesh ancient",          desc: "A million years old. Stalactites, stalagmites, and an underground river deep in the Eastern Ghats." },
              { name: "Kailasagiri Hill",         query: "kailasagiri hill park visakhapatnam shiva statue hilltop panoramic view",  desc: "Hilltop park with the giant Shiva-Parvati statue. Ropeway ride up, 360-degree views of the coast." },
              { name: "Yarada Beach",             query: "yarada beach vizag secluded cove hills turquoise water andhra pradesh",    desc: "15km south of the city, surrounded by hills, almost always empty. What the tourist beaches wish they were." },
            ]}
          />

          {/* ── ARAKU VALLEY IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="araku valley train eastern ghats tunnel scenic railway india"
              fallback="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80"
              alt="Araku Valley scenic train through the Eastern Ghats"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Araku Valley train — 58 tunnels, 4 hours, and the Eastern Ghats unfolding outside your window. Book the Vistadome coach.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — no doubling back. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83C\uDF3F Nature"},{id:"C" as const,label:"\u2728 Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A \u00B7 Day 1" day="City Coast Loop"
                  stops={["RK Beach 6am","Kailasagiri 9:30am","Submarine Museum 12pm","Dolphin Hill 3pm","RK Beach sunset"]}
                  distance="18km \u00B7 ~45min riding" note="Everything is along Beach Road or within 5km of it. Auto-rickshaw or city bus covers this easily."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/RK+Beach+Visakhapatnam/Kailasagiri/INS+Kurusura+Submarine+Museum/Dolphin+Hill+Visakhapatnam/RK+Beach+Visakhapatnam" />
                <RouteCard plan="Plan A \u00B7 Day 3" day="Yarada + Simhachalam + Departure"
                  stops={["Hotel 7am","Yarada Beach 7:30am","Simhachalam Temple 10:30am","Waltair Uplands lunch","Airport/Station"]}
                  distance="45km \u00B7 ~1hr 30min" note="Yarada Beach is 15km south of RK Beach. Simhachalam is north-west \u2014 on the way back to the city centre and airport."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/RK+Beach+Visakhapatnam/Yarada+Beach/Simhachalam+Temple/Visakhapatnam+Airport" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B \u00B7 Day 1" day="Full Coast Circuit"
                  stops={["RK Beach 6am","Submarine Museum 9:30am","Kailasagiri 11am","Yarada Beach 3pm","Dolphin Hill 5pm"]}
                  distance="35km \u00B7 ~1hr total" note="Start from north Beach Road and work south to Yarada. Dolphin Hill is on the return route."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/RK+Beach+Visakhapatnam/INS+Kurusura+Submarine+Museum/Kailasagiri/Yarada+Beach/Dolphin+Hill+Visakhapatnam" />
                <RouteCard plan="Plan B \u00B7 Day 3" day="Borra Caves + Simhachalam Return"
                  stops={["Araku 7am","Borra Caves 9:30am","Ananthagiri stop","Simhachalam 3:30pm","Vizag 5pm"]}
                  distance="250km \u00B7 ~5hrs total driving" note="Borra Caves are between Araku and Vizag on the ghat road. Simhachalam is on the north-west approach to the city."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/Araku+Valley/Borra+Caves/Simhachalam+Temple/Visakhapatnam+Airport" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C \u00B7 Day 1" day="Premium Coast Experience"
                  stops={["Rushikonda 7am","Kailasagiri 10:30am","Submarine Museum 12:30pm","Yarada Beach 3:30pm","Dolphin Hill 5:30pm"]}
                  distance="40km \u00B7 ~1hr 15min" note="Rushikonda is north of RK Beach with cleaner sand. Work south through the day ending at Dolphin Hill for sunset."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Rushikonda+Beach/Kailasagiri/INS+Kurusura+Submarine+Museum/Yarada+Beach/Dolphin+Hill+Visakhapatnam" />
                <RouteCard plan="Plan C \u00B7 Day 3" day="Simhachalam + Rushikonda + Departure"
                  stops={["Hotel 7am","Simhachalam Temple 7:30am","Rushikonda Beach 10:30am","Lunch 12:30pm","Airport/Station 2pm"]}
                  distance="30km \u00B7 ~50min" note="Simhachalam is on the Vizag-Airport road. Rushikonda is 10 min from the city centre. Clean, logical loop."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Simhachalam+Temple/Rushikonda+Beach/Visakhapatnam+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243647.5!2d83.2!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Vizag Travel Map" />
            </div>
          </section>

          {/* ── YARADA BEACH IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="yarada beach visakhapatnam secluded cove hills tropical coast"
              fallback="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
              alt="Yarada Beach surrounded by hills near Vizag"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Yarada Beach is what RK Beach tourists don&apos;t know about — 15km south, surrounded by hills, and usually empty on weekdays.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping the Araku train for a cab", desc: "The train IS the experience \u2014 58 tunnels through the Eastern Ghats. A cab saves 1 hour but misses the entire point.", icon: "\uD83D\uDE82" },
                { title: "Going to RK Beach at 5pm on a weekend", desc: "It\u2019s packed shoulder-to-shoulder. Go at sunrise \u2014 completely different place. Golden light, empty sand, fishing boats.", icon: "\uD83C\uDFD6\uFE0F" },
                { title: "Day-tripping Araku without seeing Borra Caves", desc: "Borra Caves are 90km from Araku and most day-trippers skip them. They\u2019re a million years old \u2014 genuinely spectacular.", icon: "\uD83E\uDEA8" },
                { title: "Booking the wrong train class", desc: "The Vistadome coach has glass ceilings and panoramic windows for \u20B9500 extra. Regular sleeper works but you\u2019ll wish you upgraded.", icon: "\uD83C\uDFAB" },
                { title: "Eating only at Beach Road restaurants", desc: "Tourist-facing Beach Road restaurants charge 2x. Walk 500m inland to MVP Colony or Dwaraka Nagar for authentic Andhra meals at half price.", icon: "\uD83C\uDF5D" },
                { title: "Not carrying cash to Araku/Borra", desc: "ATMs are unreliable beyond Vizag city. Carry \u20B92,000\u2013\u20B93,000 cash for the Araku-Borra day.", icon: "\uD83D\uDCB3" },
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
                { icon: "\u2615", title: "Araku Coffee Is the Souvenir", desc: "Buy directly from Araku growers at \u20B9100\u2013\u20B9200/pack. In Vizag shops it\u2019s \u20B9250\u2013\u20B9400. In Hyderabad or Bangalore, same coffee costs \u20B9500+.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Sunrise at RK Beach, Sunset at Dolphin Hill", desc: "RK Beach faces east (perfect sunrise). Dolphin Hill faces the harbour (perfect sunset). Don\u2019t mix them up \u2014 most tourists do.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE82", title: "Book Vistadome 2 Weeks Ahead", desc: "The Vistadome coach on the Araku train has only 40 seats. Book on IRCTC the day booking opens. Weekends sell out in hours.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF2E", title: "Bamboo Chicken in Araku", desc: "A tribal specialty \u2014 chicken marinated and cooked inside bamboo over an open fire. Available only in Araku. Ask your driver where the best vendor is that day.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDCF1", title: "Use Rapido for City Transport", desc: "Rapido bike taxis are cheaper than autos in Vizag. Ola/Uber work but surge pricing near beaches can be 2x. For Araku day, book a private cab the night before.", color: "bg-sky-50 border-sky-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2713 best value | Dec\u2013Jan \u2713 best weather | Feb\u2013Mar \u2713 pleasant before heat | Apr\u2013May \u2600\uFE0F hot, avoid | Jun\u2013Sep \uD83C\uDF27\uFE0F monsoon, skip Araku", color: "bg-sky-50 border-sky-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Vizag itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Vizag Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Vizag?", a: "3 days is the sweet spot \u2014 Day 1 for city beaches and landmarks, Day 2 for the Araku Valley train ride and Borra Caves, Day 3 for Yarada Beach, Simhachalam Temple and departure. 4\u20135 days lets you add Rushikonda water sports and a second Araku day." },
                { q: "What is the best time to visit Vizag?", a: "October to March is best. October\u2013November has pleasant weather and fewer crowds. December\u2013January is peak with the best weather. February\u2013March stays comfortable before the summer heat hits in April." },
                { q: "How much does a 3-day Vizag trip cost?", a: "Budget solo: under \u20B96,000 including accommodation. Nature mid-range: \u20B98,000\u2013\u20B918,000. Premium with Vistadome and resorts: \u20B918,000\u2013\u20B930,000. All include accommodation, food, transport and activities." },
                { q: "Is the Araku Valley train ride worth it?", a: "Absolutely \u2014 it is India\u2019s most underrated scenic train ride. 128km through 58 tunnels and the Eastern Ghats. Book the Vistadome coach for \u20B9500 extra \u2014 glass ceiling, panoramic windows. Departs 6:45am, arrives 11am." },
                { q: "How do I get to Vizag?", a: "Visakhapatnam Airport (VTZ) has direct flights from Delhi, Mumbai, Hyderabad, Bangalore and Chennai. From the airport, city centre is 12km \u2014 auto \u20B9200\u2013\u20B9300, Ola/Uber \u20B9150\u2013\u20B9250. Vizag also has a major railway station." },
                { q: "Can I visit Borra Caves and Araku Valley in one day?", a: "Yes, but start very early. Take the 6:45am train to Araku, explore until 1pm, cab to Borra Caves (90km, 2hrs), spend an hour there, then cab back to Vizag (3hrs). Most day-trippers skip Borra \u2014 don\u2019t." },
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
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: false },
                { label: "Goa \u2014 3 Day Complete Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Andaman Islands \u2014 5 Day Guide", href: "/blog/andaman-5-days", soon: false },
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

          <RelatedGuides currentSlug="vizag-3-days" />
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
