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


const MUNNAR_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "getting",     emoji: "\uD83D\uDE8C", label: "Getting to Munnar" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Munnar 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Munnar in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function MunnarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B97k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC91", label: "Couple", sub: "\u20B98k\u201320k", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "\u2B50", label: "Premium", sub: "\u20B920k\u201335k", color: "border-violet-300 bg-violet-50 text-violet-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUNNAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Munnar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="munnar tea plantation kerala hills green india"
            fallback="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1600&q=85"
            alt="Munnar tea plantations stretching across rolling green hills"
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
              <span className="text-white/70">Munnar 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station & Nature
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">\u00B7</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">\u00B7</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Munnar in 3 Days: Tea Hills, Wildlife & Sunrise
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the tea-country secrets that guidebooks skip entirely.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 Kerala, India</span>
              <span>\u00B7</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>\u00B7</span>
              <span>\uD83D\uDCB0 From \u20B97,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kolukkumalai is the highest tea plantation in the world and you need a jeep to get there — the 4am drive through fog on dirt roads is genuinely terrifying and genuinely worth it.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

          {/* ── GETTING TO MUNNAR ── */}
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDE8C Getting to Munnar</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Munnar has no airport and no railway station. That&apos;s part of the charm — and the reason you need to plan this right.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "From Kochi (Cochin)", emoji: "\u2708\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Distance","130km, 4\u20135 hours"],["Bus","KSRTC every 30 min, \u20B9150\u2013\u20B9250"],["Taxi","Private cab \u20B92,500\u2013\u20B93,500"],["Tip","Left side of bus = valley views on the climb"]],
                  note: "Last 60km has 40+ hairpin bends. Take motion sickness tablets if you're prone to it." },
                { title: "From Madurai / Coimbatore", emoji: "\uD83D\uDE82", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["From Madurai","160km, 5\u20136 hours via Theni"],["From Coimbatore","175km, 5\u20136 hours via Pollachi"],["Best option","Morning bus or shared taxi"],["Tip","Coimbatore route goes through Chinnar Wildlife Sanctuary"]],
                  note: "Both routes are scenic but considerably longer than Kochi. Budget for an early morning start." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Fly into Kochi, take a morning KSRTC bus or private cab. Arrive by 2\u20133pm and you still get a half-day in Munnar. Return flight from Kochi is easiest on your last evening.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="3 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u20B97,000" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Sep \u2013 Mar" />
            <StatCard icon="\u2708\uFE0F" label="Nearest Airport" value="Kochi (130km)" />
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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Munnar Town Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse or homestay \u00B7 \u20B9500\u2013\u20B91,200/night \u00B7 Auto/bus for local travel</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Tea Museum, Mattupetty Dam"
                  items={[
                    "Morning bus from Kochi (6:30am KSRTC, \u20B9180\u2013\u20B9250) \u2014 arrive Munnar by 11:30am",
                    "Check into guesthouse near Munnar town. Drop bags, lunch at a local thattukada \u2014 meals \u20B960\u2013\u20B9100",
                    "1:30pm: TATA Tea Museum (\u20B975 entry, includes a cup of fresh tea). 45 min is enough. The commercial tea shops on the highway charge \u20B9200 for worse tea.",
                    "3pm: Auto to Mattupetty Dam (\u20B9150\u2013\u20B9200 one way, 12km). Walk along the dam wall, watch the tea hills reflect in the water.",
                    "5pm: Kundala Lake \u2014 pedal boating \u20B9100\u2013\u20B9150, or just sit and watch the evening light",
                    "Return to town. Dinner at local restaurant \u2014 Kerala meals \u20B980\u2013\u20B9120"
                  ]}
                  cost="\u20B91,200\u2013\u20B91,800 excluding accommodation" />
                <DayCard day="Day 2" title="Eravikulam National Park + Top Station"
                  items={[
                    "7am: Early start \u2014 shared jeep or bus to Eravikulam (\u20B9125 entry Indian, book online at munnarwildlife.com)",
                    "Eravikulam: Home to the endangered Nilgiri Tahr. You'll see them grazing on the hillside \u2014 they are surprisingly unafraid of humans. Budget 2\u20132.5 hours.",
                    "11am: Auto/shared jeep to Top Station (32km from Munnar, \u20B9200\u2013\u20B9300 shared). Views of the Tamil Nadu plains on clear days \u2014 genuinely breathtaking.",
                    "Lunch at one of the small tea stalls near Top Station \u2014 maggi + chai for \u20B950",
                    "3pm: Return via Lockhart Gap viewpoint \u2014 free, zero crowds, better view than most paid spots",
                    "Evening: Walk Munnar town market. Pick up tea packets directly from KDHP shop (\u20B9150\u2013\u20B9400 for quality tea)"
                  ]}
                  cost="\u20B91,000\u2013\u20B91,500 excluding accommodation" />
                <DayCard day="Day 3" title="Kolukkumalai Sunrise + Lakkam Waterfalls"
                  items={[
                    "3:30am wake-up. Jeep to Kolukkumalai leaves at 4am (\u20B9600\u2013\u20B9800/person shared). The road is unpaved and steep \u2014 genuinely an adventure.",
                    "5:30am: Sunrise from the highest tea plantation in the world. Watch the sun come up over the Western Ghats with tea being plucked below you.",
                    "Fresh tea at the estate \u2014 made in original equipment from the 1880s. \u20B920 per cup.",
                    "Return by 9am. Quick breakfast in town.",
                    "10:30am: Lakkam Waterfalls (25km from Munnar, \u20B920 entry). Less crowded than Attukal. Short 10-min walk from the road.",
                    "12:30pm: Lunch, pack up. Afternoon bus to Kochi (\u20B9180\u2013\u20B9250) or onward travel."
                  ]}
                  cost="\u20B91,200\u2013\u20B91,800 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B95,500\u2013\u20B97,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COUPLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC91</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Tea Estate Stay or Boutique Homestay</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Tea bungalow or plantation homestay \u00B7 \u20B92,500\u2013\u20B95,000/night with breakfast</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Settle Into the Hills"
                  items={[
                    "Private cab from Kochi (\u20B92,800\u2013\u20B93,500). Stop at Cheeyappara Waterfalls on the way up \u2014 15 min, free, right on the highway.",
                    "Check into a plantation homestay. Most include afternoon tea and a short plantation walk.",
                    "Mattupetty Dam at sunrise with tea-carpeted hills reflecting in the water \u2014 set one alarm, I promise it&apos;s worth it. But today, just scout the route.",
                    "3pm: TATA Tea Museum (\u20B975 entry). Small but fascinating \u2014 the processing machinery dates to the 1880s.",
                    "4:30pm: Drive to Rose Garden + Photo Point area \u2014 the viewpoints along this road are free and better than any paid park",
                    "Dinner at your homestay \u2014 most plantation stays cook Kerala meals that outclass any restaurant. \u20B9400\u2013\u20B9600 for two."
                  ]}
                  cost="\u20B93,500\u2013\u20B95,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Eravikulam + Top Station + Tea Valleys"
                  items={[
                    "6am: Mattupetty Dam for sunrise. You scouted yesterday \u2014 now go. The light on the tea hills at 6:15am is something else entirely.",
                    "8:30am: Eravikulam National Park (\u20B9125/person Indian, book online). Nilgiri Tahr sightings are almost guaranteed \u2014 these mountain goats graze within 10 feet of the walking path.",
                    "11am: Drive to Top Station (32km, 1hr). The road itself is the attraction \u2014 tea plantations on both sides, mist rolling through the valleys.",
                    "Lunch at a small restaurant near Top Station or pack sandwiches from your homestay",
                    "3pm: Stop at Lockhart Gap viewpoint on the return \u2014 free, usually empty, panoramic views",
                    "Evening: Couples&apos; cooking class at homestay if available (\u20B9800\u2013\u20B91,200 for two), or walk the tea estate at golden hour"
                  ]}
                  cost="\u20B93,000\u2013\u20B94,500 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Kolukkumalai Sunrise + Lakkam + Departure"
                  items={[
                    "3:30am: Wake-up call. Private jeep to Kolukkumalai (\u20B92,000\u2013\u20B92,500 for the jeep, fits 4\u20136). The 4am drive through fog on dirt roads is terrifying and unforgettable.",
                    "5:30am: Sunrise from the world&apos;s highest tea plantation. Fresh tea brewed in original colonial-era machinery. \u20B920/cup.",
                    "8:30am: Return, breakfast at homestay. Pack up.",
                    "10am: Lakkam Waterfalls (\u20B920 entry). Quick stop \u2014 a short walk through forest to a beautiful cascade. 45 minutes total.",
                    "11:30am: Pick up tea from KDHP factory outlet (far better value than roadside shops)",
                    "Private cab to Kochi for evening flight, or continue to Thekkady/Alleppey"
                  ]}
                  cost="\u20B93,000\u2013\u20B94,500 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B916,000\u2013\u20B920,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-violet-50 border border-violet-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2B50</span>
                  <div>
                    <p className="text-sm font-medium text-violet-800">Premium Plan — Luxury Tea Bungalow or Resort</p>
                    <p className="text-xs text-violet-600 font-light">Stay: Heritage tea bungalow or luxury resort \u00B7 \u20B96,000\u2013\u20B912,000/night with meals</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Transfer, Tea Estate Immersion"
                  items={[
                    "Private AC car from Kochi with guide-driver (\u20B94,000\u2013\u20B95,500). Stop at Cheeyappara and Valara waterfalls. Your driver knows the unmarked viewpoints.",
                    "Check into luxury tea bungalow. Many heritage properties were built by the British in the 1880s \u2014 wood-panelled rooms, fireplaces, tea brought to your room.",
                    "Afternoon: Private tea plantation tour with the estate manager. This is not the tourist walk \u2014 you&apos;ll learn the actual grading system, watch plucking, and taste 4\u20135 varieties.",
                    "4pm: Guided nature walk through the estate \u2014 spot giant squirrels, Nilgiri langurs, and dozens of bird species",
                    "6pm: Sundowner on the estate veranda with panoramic valley views",
                    "Dinner: Multi-course Kerala meal prepared by estate chef. Most heritage stays include meals."
                  ]}
                  cost="\u20B98,000\u2013\u20B912,000 for two (incl. accommodation + meals)" />
                <DayCard day="Day 2" title="Eravikulam VIP + Helicopter Viewpoint + Fine Dining"
                  items={[
                    "6am: Sunrise from your tea bungalow veranda \u2014 some estates sit above the cloud line",
                    "8am: Eravikulam National Park with a naturalist guide (\u20B92,000\u2013\u20B93,000 for private guide + entry). They know exactly where the Nilgiri Tahr herds will be.",
                    "11am: Drive to Top Station. Private car means you can stop at every viewpoint without rushing.",
                    "1pm: Lunch at a plantation restaurant \u2014 farm-to-table Kerala cuisine, \u20B91,500\u2013\u20B92,000 for two",
                    "3pm: Visit Lockhart Tea Factory for premium tea tasting and purchase (\u20B9500\u2013\u20B91,000 for tasting session with estate-exclusive blends)",
                    "Evening: Spa treatment at resort (\u20B92,000\u2013\u20B94,000) or bonfire and stargazing on the estate"
                  ]}
                  cost="\u20B910,000\u2013\u20B914,000 for two (incl. accommodation + meals)" />
                <DayCard day="Day 3" title="Kolukkumalai Private Jeep + Departure in Style"
                  items={[
                    "3:30am: Private jeep to Kolukkumalai (\u20B93,000\u2013\u20B94,000 for exclusive jeep). Your driver stops at the best photo points and waits while you explore.",
                    "5:30am: Sunrise with fresh tea. The estate caretaker opens rooms not accessible to group tours \u2014 original 1880s machinery running on hydropower.",
                    "8am: Return for full breakfast at estate",
                    "10am: Lakkam Waterfalls or second visit to favourite viewpoints for late-morning light",
                    "11:30am: Shopping at KDHP outlet + handloom shops for Kerala spices and tea sets",
                    "Private car to Kochi (\u20B94,000\u2013\u20B95,500) or continue to Kumarakom/Alleppey houseboat"
                  ]}
                  cost="\u20B910,000\u2013\u20B914,000 for two (incl. accommodation + meals)" />
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-violet-700 uppercase tracking-wide">Total 3-Day Cost (for two) \u00B7 </span>
                  <span className="font-serif text-base text-ink font-light">\u20B925,000\u2013\u20B935,000 including accommodation + most meals</span>
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
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">\uD83D\uDC91 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-violet-700 text-center">\u2B50 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,500\u2013\u20B93,600", "\u20B97,500\u2013\u20B915,000", "\u20B918,000\u2013\u20B936,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B9600\u2013\u20B91,200", "\u20B92,500\u2013\u20B94,000", "Included in stay"],
                    ["\uD83D\uDE8C Transport", "\u20B9800\u2013\u20B91,500", "\u20B96,000\u2013\u20B98,000", "\u20B98,000\u2013\u20B911,000"],
                    ["\uD83C\uDFAF Activities", "\u20B91,000\u2013\u20B91,800", "\u20B92,500\u2013\u20B94,500", "\u20B95,000\u2013\u20B98,000"],
                    ["\uD83C\uDF3F Tea & Shopping", "\u20B9300\u2013\u20B9600", "\u20B9800\u2013\u20B91,500", "\u20B92,000\u2013\u20B94,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (for two)</td>
                    {["\u20B95,500\u2013\u20B97,000*","\u20B916,000\u2013\u20B920,000","\u20B925,000\u2013\u20B935,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              * Budget total is per person. All prices INR 2026. Munnar is one of the most affordable hill stations in India.
            </p>
          </section>

          {/* ── MUNNAR AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Munnar"
            hotels={[
              { name: "Zostel Munnar", type: "Budget Hostel \u00B7 Town Center", price: "From \u20B9600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-munnar.html?aid=2820480" },
              { name: "Windermere Estate", type: "Plantation Homestay \u00B7 Pothamedu", price: "From \u20B94,500/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/windermere-estate-munnar.html?aid=2820480" },
              { name: "Spice Tree Munnar", type: "Luxury Tea Bungalow", price: "From \u20B910,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/spice-tree-munnar.html?aid=2820480" },
            ]}
            activities={[
              { name: "Kolukkumalai Sunrise Jeep Safari", duration: "Half day (4am\u20139am)", price: "From \u20B9600/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=munnar&partner_id=PSZA5UI" },
              { name: "Eravikulam National Park Visit", duration: "2\u20133 hours", price: "From \u20B9125/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=munnar&partner_id=PSZA5UI" },
              { name: "Tea Plantation Guided Walk", duration: "2 hours", price: "From \u20B9500/person", url: "https://www.getyourguide.com/s/?q=munnar&partner_id=PSZA5UI" },
              { name: "Top Station & Mattupetty Full Day", duration: "8 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/s/?q=munnar&partner_id=PSZA5UI" },
            ]}
            pdfProductId="munnar-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Munnar \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore Munnar&apos;s tea hills, waterfalls and wildlife sanctuaries."
            spots={[
              { name: "Tea Plantations",          query: "munnar tea plantation rolling green hills misty kerala",           desc: "Endless carpets of tea stretching across the Western Ghats. The best views are along the road to Top Station \u2014 free, no entry fee, just pull over anywhere." },
              { name: "Eravikulam National Park",  query: "eravikulam national park nilgiri tahr mountain goat grassland",   desc: "Home to over half the world\u2019s Nilgiri Tahr population. These endangered mountain goats graze right beside the walking path \u2014 no binoculars needed." },
              { name: "Mattupetty Dam",            query: "mattupetty dam munnar lake reflection tea hills morning",          desc: "A serene reservoir surrounded by tea estates. Visit at sunrise for mirror-still reflections of the surrounding hills." },
              { name: "Kolukkumalai",              query: "kolukkumalai tea estate sunrise mountain peak fog clouds",         desc: "The world\u2019s highest tea plantation at 7,900 feet. The 4am jeep ride is rough but the sunrise and fresh tea make it Munnar\u2019s best experience." },
              { name: "Lakkam Waterfalls",         query: "lakkam waterfalls munnar kerala forest waterfall stream nature",   desc: "A quieter alternative to the crowded Attukal Falls. Short forest walk from the road, perfect for a cool dip after a morning of sightseeing." },
            ]}
          />

          {/* ── TEA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kerala tea cup plantation green hills morning mist nature"
              fallback="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80"
              alt="Fresh tea served at a Munnar tea estate"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The TATA Tea Museum is \u20B975 and includes a cup of fresh tea at the end. The commercial tea shops on the highway charge \u20B9200 for worse tea.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDDFA\uFE0F Route Maps \u2014 Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Munnar is compact \u2014 most attractions are within 35km. Every route below is designed to minimise backtracking on winding hill roads.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83D\uDC91 Couple"},{id:"C" as const,label:"\u2B50 Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A \u00B7 Day 1" day="Tea Museum + Mattupetty Loop"
                  stops={["Munnar Town","TATA Tea Museum","Mattupetty Dam","Kundala Lake","Munnar Town"]}
                  distance="30km \u00B7 ~50min driving" note="All three stops are on the same road heading north from town. No backtracking."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Munnar+Town/TATA+Tea+Museum+Munnar/Mattupetty+Dam/Kundala+Lake/Munnar+Town" />
                <RouteCard plan="Plan A \u00B7 Day 2" day="Eravikulam + Top Station"
                  stops={["Munnar 7am","Eravikulam NP","Top Station","Lockhart Gap","Munnar"]}
                  distance="70km round trip \u00B7 ~2hrs driving" note="Eravikulam is on the way to Top Station. Visit the park first thing when the Tahr are most active, then continue to Top Station."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Munnar+Town/Eravikulam+National+Park/Top+Station+Munnar/Munnar+Town" />
                <RouteCard plan="Plan A \u00B7 Day 3" day="Kolukkumalai + Lakkam Falls"
                  stops={["Munnar 4am","Kolukkumalai","Munnar 9am","Lakkam Waterfalls","Munnar Bus Stand"]}
                  distance="55km \u00B7 ~2hrs driving" note="Kolukkumalai jeep departs from Suryanelli (22km from Munnar). Lakkam Falls is on the Marayoor road \u2014 a slight detour on your way back."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Munnar/Kolukkumalai+Tea+Estate/Lakkam+Waterfalls/Munnar+Bus+Stand" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B \u00B7 Day 1" day="Arrive + Tea Museum + Dam"
                  stops={["Kochi Airport","Cheeyappara Falls","Munnar Homestay","TATA Tea Museum","Mattupetty Dam"]}
                  distance="140km total \u00B7 ~4.5hrs from Kochi" note="Cheeyappara Falls is right on the highway at km 90 \u2014 no detour needed. Ask your driver to stop for 10 minutes."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Cochin+Airport/Cheeyappara+Waterfalls/Munnar/TATA+Tea+Museum+Munnar/Mattupetty+Dam" />
                <RouteCard plan="Plan B \u00B7 Day 2" day="Eravikulam + Top Station + Cooking Class"
                  stops={["Mattupetty Dam sunrise","Eravikulam NP 8:30am","Top Station 11am","Lockhart Gap","Homestay"]}
                  distance="75km \u00B7 ~2.5hrs driving" note="Start with Mattupetty at sunrise (10 min from most homestays), then loop through Eravikulam and Top Station. All on the same north-south axis."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Mattupetty+Dam/Eravikulam+National+Park/Top+Station+Munnar/Munnar" />
                <RouteCard plan="Plan B \u00B7 Day 3" day="Kolukkumalai + Lakkam + Departure"
                  stops={["Homestay 3:30am","Kolukkumalai sunrise","Homestay 8:30am","Lakkam Falls","KDHP Shop","Kochi"]}
                  distance="55km Munnar loop + 130km to Kochi" note="Pack bags before leaving for Kolukkumalai. Return, shower, checkout, and hit Lakkam Falls on your way to Kochi."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Munnar/Kolukkumalai+Tea+Estate/Lakkam+Waterfalls/Cochin+Airport" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C \u00B7 Day 1" day="Private Transfer + Estate Tour"
                  stops={["Kochi","Cheeyappara","Valara Falls","Tea Bungalow","Private plantation walk"]}
                  distance="140km \u00B7 ~4.5hrs" note="Your guide-driver will know the unmarked waterfall viewpoints between Adimali and Munnar that tour buses miss entirely."
                  color="border-violet-200 bg-violet-50"
                  url="https://www.google.com/maps/dir/Cochin+Airport/Cheeyappara+Waterfalls/Valara+Waterfalls/Munnar" />
                <RouteCard plan="Plan C \u00B7 Day 2" day="Eravikulam with Naturalist + Top Station"
                  stops={["Estate sunrise","Eravikulam NP 8am","Top Station 11am","Lockhart Gap","Plantation restaurant","Resort spa"]}
                  distance="75km \u00B7 ~2.5hrs" note="A private naturalist guide at Eravikulam costs \u20B92,000\u20133,000 but transforms the visit \u2014 they track the Tahr herds daily and know exactly where to find them."
                  color="border-violet-200 bg-violet-50"
                  url="https://www.google.com/maps/dir/Munnar/Eravikulam+National+Park/Top+Station+Munnar/Munnar" />
                <RouteCard plan="Plan C \u00B7 Day 3" day="Private Kolukkumalai + Departure"
                  stops={["Estate 3:30am","Kolukkumalai private jeep","Estate breakfast","Lakkam Falls","KDHP Shop","Kochi/Kumarakom"]}
                  distance="55km loop + 130km onward" note="A private jeep means you skip the shared queue and the driver waits while you explore. Ask the estate caretaker to show you the original 1880s rolling room."
                  color="border-violet-200 bg-violet-50"
                  url="https://www.google.com/maps/dir/Munnar/Kolukkumalai+Tea+Estate/Lakkam+Waterfalls/Cochin+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125998.0!2d77.05!3d10.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Munnar Travel Map" />
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Buying tea from highway shops", desc: "They charge \u20B9400\u2013\u20B9600 for average tea with fancy packaging. The KDHP factory outlet in town sells better tea for \u20B9150\u2013\u20B9300. Same tea, no middleman.", icon: "\uD83C\uDF3F" },
                { title: "Skipping Eravikulam ticket booking", desc: "Only 3,000 visitors per day. Weekends and holidays sell out days ahead. Book online at munnarwildlife.com at least a week before your trip.", icon: "\uD83C\uDFAB" },
                { title: "Trying to do Kolukkumalai in the afternoon", desc: "The entire point is the sunrise. Afternoon visits mean no mist, harsh light, and you miss the tea plucking. 4am departure, no exceptions.", icon: "\uD83C\uDF05" },
                { title: "Booking a sedan for the Kolukkumalai road", desc: "The road is unpaved, steep, and has sections where only a jeep can get through. Don't even try in a hatchback. Book a jeep \u2014 \u20B9600\u2013\u20B94,000 depending on shared or private.", icon: "\uD83D\uDE99" },
                { title: "Eating only at tourist restaurants", desc: "Kerala meals (rice, sambar, thoran, fish curry) at a local thattukada cost \u20B960\u2013\u20B9120. The same meal at a tourist restaurant is \u20B9300\u2013\u20B9450. Walk 5 minutes off the main road.", icon: "\uD83C\uDF5D" },
                { title: "Visiting during April\u2013May expecting cool weather", desc: "Munnar is warm in summer (20\u201328\u00B0C). The misty, cool conditions everyone associates with Munnar happen Sep\u2013Feb. Plan accordingly.", icon: "\uD83C\uDF21\uFE0F" },
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
                { icon: "\uD83C\uDF05", title: "Mattupetty at Sunrise", desc: "Mattupetty Dam at sunrise with tea-carpeted hills reflecting in the water \u2014 set one alarm, I promise it\u2019s worth it. Most tourists arrive after 10am and miss this entirely.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF3F", title: "Buy Tea at KDHP", desc: "KDHP (Kannan Devan Hills Plantations) factory outlet in Munnar town is where the locals buy. Better quality, half the price of tourist shops. Ask for their single-estate varieties.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEBB", title: "Motion Sickness Prep", desc: "The road from Kochi has 40+ hairpin bends in the last 60km. Take a tablet before departure, sit on the left side for valley views (not the cliff side), and carry water.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDDE5", title: "Layer Up", desc: "Munnar mornings (especially for Kolukkumalai at 4am) drop to 5\u201310\u00B0C. Bring a proper jacket, not just a hoodie. Most visitors underestimate the cold and regret it.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Offline Maps are Essential", desc: "Mobile signal is patchy outside Munnar town. Download Google Maps offline for the entire Idukki district before you arrive. Your driver may know the roads, but you should too.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Sep\u2013Nov \u2713 post-monsoon green, fewer crowds | Dec\u2013Jan \u26A0\uFE0F peak season, cold mornings | Feb\u2013Mar \u2713 clear skies, thinning crowds | Apr\u2013May \u2614 warm | Jun\u2013Aug \uD83C\uDF27\uFE0F heavy rain", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Munnar itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Munnar Trip \u2192
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip \u2192</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Munnar?", a: "3 days is ideal to cover tea plantations, Eravikulam National Park, Mattupetty Dam, and a Kolukkumalai sunrise trip. 2 days feels rushed \u2014 you\u2019d have to skip either Kolukkumalai or Eravikulam. 4 days lets you add a Thekkady side trip." },
                { q: "What is the best time to visit Munnar?", a: "September to March. September\u2013November is post-monsoon with the greenest landscapes and fewer crowds. December\u2013January has the best weather but peak tourist season. February\u2013March is the sweet spot \u2014 clear skies, thinning crowds. April\u2013May is warm. June\u2013August brings heavy monsoon rain." },
                { q: "How much does a 3-day Munnar trip cost?", a: "Budget solo: under \u20B97,000 including accommodation. Couple mid-range: \u20B98,000\u2013\u20B920,000 for two. Premium: \u20B920,000\u2013\u20B935,000 for two. All include accommodation, food, transport and activities." },
                { q: "How do I reach Munnar from Kochi?", a: "130km, 4\u20135 hours by road. KSRTC buses leave every 30 minutes from Ernakulam (\u20B9150\u2013\u20B9250). Private cab: \u20B92,500\u2013\u20B93,500. The last 60km is winding hill road with 40+ hairpin bends. Sit on the left side for valley views and take motion sickness tablets if needed." },
                { q: "Do I need to book Eravikulam tickets in advance?", a: "Yes, absolutely. Only 3,000 visitors per day. Book online at munnarwildlife.com at least a week ahead during peak season (Oct\u2013Jan). Entry is \u20B9125 for Indians, \u20B9525 for foreigners. Weekends sell out days in advance." },
                { q: "Is Kolukkumalai worth the 4am wake-up?", a: "Yes. It is the highest tea plantation in the world and the sunrise from 7,900 feet is one of the best experiences in all of Kerala. The jeep ride is rough but short (45 min). Fresh tea brewed in original 1880s machinery. You will not regret it." },
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
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Goa in 3 Days \u2014 Beach & Culture", href: "/blog/goa-3-days", soon: false },
                { label: "Rajasthan \u2014 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
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

          <RelatedGuides currentSlug="munnar-3-days" />
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
