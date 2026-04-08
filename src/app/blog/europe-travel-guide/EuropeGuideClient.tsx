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

/* ───────────────────────────── helpers ───────────────────────────── */

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Europe Travel Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Europe%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "\u2713 Copied" : "Copy Link"}</button>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

/* ───────────────────────────── data ───────────────────────────── */

const TOC = [
  { id: "honest", emoji: "\u26A1", label: "Why Europe" },
  { id: "regions", emoji: "\uD83D\uDDFA\uFE0F", label: "Region-by-Region Guide" },
  { id: "routes", emoji: "\uD83D\uDCC5", label: "Best Multi-City Routes" },
  { id: "budget", emoji: "\uD83D\uDCB0", label: "Budget Comparison" },
  { id: "visa", emoji: "\uD83D\uDCCB", label: "Schengen Visa Guide" },
  { id: "mistakes", emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "faq", emoji: "\u2753", label: "FAQ" },
];

interface CountryData {
  flag: string;
  name: string;
  budget: string;
  bestTime: string;
  links: { label: string; href: string }[];
}

const WESTERN_EUROPE: CountryData[] = [
  {
    flag: "\uD83C\uDDEB\uD83C\uDDF7", name: "France", budget: "\u20AC80\u2013\u20AC200/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [
      { label: "Paris 5 Days", href: "/blog/paris-5-days" },
      { label: "Nice 3 Days", href: "/blog/nice-3-days" },
      { label: "Lyon 3 Days", href: "/blog/lyon-3-days" },
      { label: "Bordeaux 3 Days", href: "/blog/bordeaux-3-days" },
      { label: "Provence 4 Days", href: "/blog/provence-4-days" },
      { label: "Mont Saint-Michel 2 Days", href: "/blog/mont-saint-michel-2-days" },
      { label: "Marseille 3 Days", href: "/blog/marseille-3-days" },
      { label: "Strasbourg 3 Days", href: "/blog/strasbourg-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDEE\uD83C\uDDF9", name: "Italy", budget: "\u20AC70\u2013\u20AC180/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [
      { label: "Rome 4 Days", href: "/blog/rome-4-days" },
      { label: "Florence 3 Days", href: "/blog/florence-3-days" },
      { label: "Amalfi Coast 4 Days", href: "/blog/amalfi-coast-4-days" },
      { label: "Venice 4 Days", href: "/blog/venice-4-days" },
      { label: "Sicily 7 Days", href: "/blog/sicily-7-days" },
      { label: "Cinque Terre 3 Days", href: "/blog/cinque-terre-3-days" },
      { label: "Milan 3 Days", href: "/blog/milan-3-days" },
      { label: "Naples & Pompeii 4 Days", href: "/blog/naples-pompeii-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDEA\uD83C\uDDF8", name: "Spain", budget: "\u20AC60\u2013\u20AC150/day", bestTime: "Mar\u2013Jun, Sep\u2013Nov",
    links: [
      { label: "Barcelona 4 Days", href: "/blog/barcelona-4-days" },
      { label: "Madrid 3 Days", href: "/blog/madrid-3-days" },
      { label: "Seville 3 Days", href: "/blog/seville-3-days" },
      { label: "Mallorca 4 Days", href: "/blog/mallorca-4-days" },
      { label: "San Sebastian 3 Days", href: "/blog/san-sebastian-3-days" },
      { label: "Granada 4 Days", href: "/blog/granada-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDEC\uD83C\uDDE7", name: "United Kingdom", budget: "\u00A380\u2013\u00A3200/day", bestTime: "May\u2013Sep",
    links: [
      { label: "London 5 Days", href: "/blog/london-5-days" },
      { label: "Edinburgh 4 Days", href: "/blog/edinburgh-4-days" },
      { label: "Bath 2 Days", href: "/blog/bath-2-days" },
      { label: "Cotswolds 3 Days", href: "/blog/cotswolds-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDF5\uD83C\uDDF9", name: "Portugal", budget: "\u20AC50\u2013\u20AC120/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [
      { label: "Lisbon 4 Days", href: "/blog/lisbon-4-days" },
      { label: "Porto 3 Days", href: "/blog/porto-3-days" },
      { label: "Algarve 4 Days", href: "/blog/algarve-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDF3\uD83C\uDDF1", name: "Netherlands", budget: "\u20AC80\u2013\u20AC180/day", bestTime: "Apr\u2013May, Sep",
    links: [
      { label: "Amsterdam 4 Days", href: "/blog/amsterdam-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDE9\uD83C\uDDEA", name: "Germany", budget: "\u20AC70\u2013\u20AC160/day", bestTime: "May\u2013Sep, Dec (markets)",
    links: [
      { label: "Germany 7 Days", href: "/blog/germany-7-days" },
      { label: "Munich 3 Days", href: "/blog/munich-3-days" },
      { label: "Berlin 4 Days", href: "/blog/berlin-4-days" },
      { label: "Hamburg 3 Days", href: "/blog/hamburg-3-days" },
      { label: "Cologne 3 Days", href: "/blog/cologne-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDE8\uD83C\uDDED", name: "Switzerland", budget: "\u20AC120\u2013\u20AC300/day", bestTime: "Jun\u2013Sep, Dec\u2013Mar (ski)",
    links: [
      { label: "Switzerland 5 Days", href: "/blog/switzerland-5-days" },
    ],
  },
];

const EASTERN_EUROPE: CountryData[] = [
  {
    flag: "\uD83C\uDDE8\uD83C\uDDFF", name: "Czech Republic", budget: "\u20AC40\u2013\u20AC100/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [{ label: "Prague 4 Days", href: "/blog/prague-4-days" }],
  },
  {
    flag: "\uD83C\uDDED\uD83C\uDDFA", name: "Hungary", budget: "\u20AC35\u2013\u20AC90/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [{ label: "Budapest 4 Days", href: "/blog/budapest-4-days" }],
  },
  {
    flag: "\uD83C\uDDF5\uD83C\uDDF1", name: "Poland", budget: "\u20AC30\u2013\u20AC80/day", bestTime: "May\u2013Sep",
    links: [
      { label: "Krakow 4 Days", href: "/blog/krakow-4-days" },
      { label: "Warsaw 4 Days", href: "/blog/warsaw-4-days" },
      { label: "Wroclaw 3 Days", href: "/blog/wroclaw-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDED\uD83C\uDDF7", name: "Croatia", budget: "\u20AC50\u2013\u20AC120/day", bestTime: "May\u2013Jun, Sep",
    links: [
      { label: "Dubrovnik 4 Days", href: "/blog/dubrovnik-4-days" },
      { label: "Split 4 Days", href: "/blog/split-croatia-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDE6\uD83C\uDDF9", name: "Austria", budget: "\u20AC70\u2013\u20AC160/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct, Dec",
    links: [{ label: "Vienna 4 Days", href: "/blog/vienna-4-days" }],
  },
];

const SCANDINAVIA: CountryData[] = [
  {
    flag: "\uD83C\uDDEE\uD83C\uDDF8", name: "Iceland", budget: "\u20AC100\u2013\u20AC250/day", bestTime: "Jun\u2013Aug, Sep\u2013Mar (aurora)",
    links: [{ label: "Iceland 7 Days", href: "/blog/iceland-7-days" }],
  },
  {
    flag: "\uD83C\uDDF3\uD83C\uDDF4", name: "Norway", budget: "\u20AC100\u2013\u20AC250/day", bestTime: "Jun\u2013Aug",
    links: [
      { label: "Norway Fjords 6 Days", href: "/blog/norway-fjords-6-days" },
      { label: "Oslo 3 Days", href: "/blog/oslo-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDE9\uD83C\uDDF0", name: "Denmark", budget: "\u20AC80\u2013\u20AC180/day", bestTime: "May\u2013Sep",
    links: [{ label: "Copenhagen 3 Days", href: "/blog/copenhagen-3-days" }],
  },
  {
    flag: "\uD83C\uDDF8\uD83C\uDDEA", name: "Sweden", budget: "\u20AC80\u2013\u20AC180/day", bestTime: "Jun\u2013Aug",
    links: [{ label: "Stockholm 4 Days", href: "/blog/stockholm-4-days" }],
  },
  {
    flag: "\uD83C\uDDEB\uD83C\uDDEE", name: "Finland", budget: "\u20AC70\u2013\u20AC160/day", bestTime: "Jun\u2013Aug, Dec\u2013Mar (Lapland)",
    links: [{ label: "Helsinki 3 Days", href: "/blog/helsinki-3-days" }],
  },
];

const BALKANS_MED: CountryData[] = [
  {
    flag: "\uD83C\uDDEC\uD83C\uDDF7", name: "Greece", budget: "\u20AC50\u2013\u20AC130/day", bestTime: "Apr\u2013Jun, Sep\u2013Oct",
    links: [
      { label: "Athens 3 Days", href: "/blog/athens-3-days" },
      { label: "Santorini 4 Days", href: "/blog/santorini-4-days" },
      { label: "Crete 5 Days", href: "/blog/crete-5-days" },
      { label: "Mykonos 4 Days", href: "/blog/mykonos-4-days" },
      { label: "Rhodes 4 Days", href: "/blog/rhodes-4-days" },
    ],
  },
  {
    flag: "\uD83C\uDDF9\uD83C\uDDF7", name: "Turkey", budget: "\u20AC30\u2013\u20AC80/day", bestTime: "Apr\u2013Jun, Sep\u2013Nov",
    links: [
      { label: "Istanbul 5 Days", href: "/blog/istanbul-5-days" },
      { label: "Cappadocia 3 Days", href: "/blog/cappadocia-3-days" },
      { label: "Antalya 3 Days", href: "/blog/antalya-3-days" },
      { label: "Turkey 7 Days", href: "/blog/turkey-7-days" },
    ],
  },
  {
    flag: "\uD83C\uDDEA\uD83C\uDDEA\uD83C\uDDF1\uD83C\uDDFB\uD83C\uDDF1\uD83C\uDDF9", name: "Baltics", budget: "\u20AC30\u2013\u20AC70/day", bestTime: "Jun\u2013Aug",
    links: [
      { label: "Tallinn 3 Days", href: "/blog/tallinn-3-days" },
      { label: "Riga 3 Days", href: "/blog/riga-3-days" },
      { label: "Vilnius 3 Days", href: "/blog/vilnius-3-days" },
    ],
  },
  {
    flag: "\uD83C\uDDE7\uD83C\uDDE6", name: "Balkans", budget: "\u20AC25\u2013\u20AC70/day", bestTime: "May\u2013Sep",
    links: [
      { label: "Dubrovnik 4 Days", href: "/blog/dubrovnik-4-days" },
      { label: "Kotor 3 Days", href: "/blog/kotor-3-days" },
      { label: "Sarajevo 3 Days", href: "/blog/sarajevo-3-days" },
      { label: "Belgrade 3 Days", href: "/blog/belgrade-3-days" },
      { label: "Ljubljana 3 Days", href: "/blog/ljubljana-3-days" },
      { label: "Ohrid 3 Days", href: "/blog/ohrid-3-days" },
      { label: "Plovdiv 3 Days", href: "/blog/plovdiv-3-days" },
      { label: "Tirana 3 Days", href: "/blog/tirana-albania-3-days" },
      { label: "Albanian Riviera 5 Days", href: "/blog/albania-riviera-5-days" },
    ],
  },
];

/* ───────────────────────────── component ───────────────────────────── */

function CountryCard({ c }: { c: CountryData }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{c.flag}</span>
        <h4 className="font-serif text-lg font-light text-ink">{c.name}</h4>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted mb-3">
        <span>{"\uD83D\uDCB0"} {c.budget}</span>
        <span>{"\uD83D\uDCC5"} {c.bestTime}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {c.links.map((l) => (
          <Link key={l.href} href={l.href} className="text-[0.68rem] font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full hover:bg-amber-100 transition-colors">
            {l.label} {"\u2192"}
          </Link>
        ))}
      </div>
    </div>
  );
}

function RouteCard({ title, cities, days, budget, desc }: { title: string; cities: string[]; days: string; budget: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5 hover:shadow-md transition-shadow">
      <h4 className="font-serif text-lg font-light text-ink mb-2">{title}</h4>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {cities.map((city, i) => (
          <span key={i} className="flex items-center gap-1 text-xs text-muted">
            {i > 0 && <span className="text-gold">{"\u2192"}</span>}
            <span className="bg-parchment px-2 py-0.5 rounded-full font-medium text-ink">{city}</span>
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-xs text-muted mb-3">
        <span>{"\uD83D\uDDD3"} {days}</span>
        <span>{"\uD83D\uDCB0"} {budget}</span>
      </div>
      <p className="text-sm text-muted font-light leading-relaxed">{desc}</p>
    </div>
  );
}

export default function EuropeGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Europe Travel Guide" />

      <main className="bg-cream min-h-screen">
        {/* ─── HERO ─── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="paris eiffel tower sunset europe travel iconic"
            fallback="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=85"
            alt="Eiffel Tower Paris at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Europe Travel Guide</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Europe</span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">25 min read</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Europe Travel Guide:<em className="italic text-amber-300"> Best Itineraries for First-Timers</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                {"\uD83C\uDF0D"} 25+ Countries {"·"} {"\uD83D\uDDD3"} 80+ Guides {"·"} {"\uD83D\uDCB0"} From \u20AC25/day
              </p>
            </div>
          </div>
        </div>

        {/* ─── BODY ─── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDF0D"} Europe</span><span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} Hub Guide</span><span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From \u20AC25/day</span>
            </div>
          </div>

          {/* ─── WHY EUROPE ─── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Why Europe for Your First International Trip</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Europe remains the most rewarding continent for first-time international travelers, and it isn&apos;t close. Here&apos;s why it works so well.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { icon: "\uD83C\uDFAB", title: "One Visa, 27 Countries", desc: "A single Schengen visa lets you travel freely across 27 European countries. Apply once, explore everywhere from Portugal to Finland." },
                { icon: "\uD83D\uDE82", title: "World-Class Rail Network", desc: "Europe\u2019s train system connects major cities seamlessly. Paris to Amsterdam in 3.5 hours, Rome to Florence in 1.5 hours. Eurail and point-to-point tickets make multi-city trips effortless." },
                { icon: "\uD83D\uDCB0", title: "Budget-Friendly Eastern Europe", desc: "Poland, Hungary, and the Balkans offer incredible value at \u20AC25\u2013\u20AC70/day. You don\u2019t need to spend Western Europe prices to have a world-class trip." },
                { icon: "\uD83C\uDFDB\uFE0F", title: "Unmatched History & Culture", desc: "From the Colosseum to the Acropolis, the Louvre to the Alhambra, Europe packs more UNESCO sites per square kilometer than any other continent." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{item.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Planning note:</strong> Don&apos;t try to see all of Europe in one trip. Pick a region or a route of 4&ndash;6 cities. Two weeks is the sweet spot for a first visit &mdash; enough to explore without burnout.
              </p>
            </div>
          </section>

          {/* ─── REGION-BY-REGION ─── */}
          <section id="regions" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Region-by-Region Guide</h2>
            <p className="text-sm text-muted font-light mb-8 leading-relaxed">
              Every country we cover, grouped by region. Click any guide to get full itineraries with real costs and timings.
            </p>

            {/* Western Europe */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-light text-ink mb-1 flex items-center gap-2">
                <span className="text-gold">{"\u2726"}</span> Western Europe <span className="text-xs text-muted font-sans font-normal ml-2">(Iconic Cities)</span>
              </h3>
              <p className="text-xs text-muted font-light mb-4">The classics &mdash; Paris, Rome, Barcelona, London. Higher budgets but unmatched sights.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WESTERN_EUROPE.map((c) => <CountryCard key={c.name} c={c} />)}
              </div>
            </div>

            {/* Eastern Europe */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-light text-ink mb-1 flex items-center gap-2">
                <span className="text-gold">{"\u2726"}</span> Eastern Europe <span className="text-xs text-muted font-sans font-normal ml-2">(Best Value)</span>
              </h3>
              <p className="text-xs text-muted font-light mb-4">Half the price of Western Europe with equally stunning architecture, history, and nightlife.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EASTERN_EUROPE.map((c) => <CountryCard key={c.name} c={c} />)}
              </div>
            </div>

            {/* Scandinavia */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-light text-ink mb-1 flex items-center gap-2">
                <span className="text-gold">{"\u2726"}</span> Scandinavia & Nordics
              </h3>
              <p className="text-xs text-muted font-light mb-4">Expensive but extraordinary &mdash; fjords, northern lights, midnight sun, and design-forward cities.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCANDINAVIA.map((c) => <CountryCard key={c.name} c={c} />)}
              </div>
            </div>

            {/* Balkans & Med */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-light text-ink mb-1 flex items-center gap-2">
                <span className="text-gold">{"\u2726"}</span> Balkans & Mediterranean
              </h3>
              <p className="text-xs text-muted font-light mb-4">The best of both worlds &mdash; stunning coastlines and ancient ruins at Eastern Europe prices.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BALKANS_MED.map((c) => <CountryCard key={c.name} c={c} />)}
              </div>
            </div>
          </section>

          {/* ─── MULTI-CITY ROUTES ─── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} Best Multi-City Routes</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Proven routes that minimize backtracking and maximize variety. All connected by train or budget flights.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <RouteCard
                title="2-Week Classic (First-Timer Favourite)"
                cities={["Paris", "Amsterdam", "Berlin", "Prague", "Vienna", "Rome"]}
                days="14 Days"
                budget="\u20AC1,800\u2013\u20AC3,500"
                desc="The definitive first Europe trip. Start with the Eiffel Tower and Louvre, take the Thalys to Amsterdam for canals and museums, train to Berlin for history and nightlife, overnight to Prague for Gothic charm, south to Vienna for coffee houses and opera, then fly to Rome for the grand finale. Every leg is 3\u20136 hours by train except Vienna\u2013Rome (fly for \u20AC40\u201380)."
              />
              <RouteCard
                title="10-Day Budget Eastern Europe"
                cities={["Budapest", "Prague", "Krakow", "Vienna"]}
                days="10 Days"
                budget="\u20AC800\u2013\u20AC1,500"
                desc="Maximum value with zero compromise on experience. Budapest\u2019s thermal baths and ruin bars, Prague\u2019s fairy-tale old town, Krakow\u2019s medieval square and Wieliczka Salt Mine, and Vienna\u2019s imperial grandeur. All connected by comfortable 4\u20137 hour trains. Expect \u20AC35\u201370/day including hostels, meals, and activities."
              />
              <RouteCard
                title="Mediterranean Sun & Culture"
                cities={["Barcelona", "Nice", "Rome", "Santorini", "Istanbul"]}
                days="16\u201318 Days"
                budget="\u20AC2,000\u2013\u20AC4,000"
                desc="Coastal beauty from the Catalan coast through the French Riviera to Italy, Greek islands, and the crossroads of Europe and Asia. Barcelona to Nice is a scenic 6-hour train along the coast. Rome to Santorini and Santorini to Istanbul require budget flights (\u20AC50\u2013100 each). Best from May to October."
              />
            </div>
          </section>

          {/* ─── BUDGET COMPARISON ─── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCB0"} Budget Comparison by Region</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Daily costs for a mid-range traveler (private room, sit-down meals, public transport, 1&ndash;2 paid attractions).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment text-left">
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Category</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Western Europe</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Eastern Europe</th>
                    <th className="px-5 py-3 font-medium text-ink text-xs uppercase tracking-wide">Scandinavia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Hostel Dorm", "\u20AC25\u2013\u20AC45", "\u20AC10\u2013\u20AC20", "\u20AC35\u2013\u20AC55"],
                    ["Budget Hotel", "\u20AC60\u2013\u20AC120", "\u20AC25\u2013\u20AC50", "\u20AC80\u2013\u20AC150"],
                    ["Meal (sit-down)", "\u20AC12\u2013\u20AC25", "\u20AC5\u2013\u20AC12", "\u20AC18\u2013\u20AC35"],
                    ["Coffee", "\u20AC3\u2013\u20AC5", "\u20AC1.50\u2013\u20AC3", "\u20AC4\u2013\u20AC6"],
                    ["Local Transport (day)", "\u20AC5\u2013\u20AC10", "\u20AC2\u2013\u20AC5", "\u20AC8\u2013\u20AC15"],
                    ["Museum Entry", "\u20AC10\u2013\u20AC20", "\u20AC3\u2013\u20AC10", "\u20AC15\u2013\u20AC25"],
                    ["Daily Total (mid)", "\u20AC100\u2013\u20AC180", "\u20AC40\u2013\u20AC80", "\u20AC120\u2013\u20AC220"],
                  ].map(([cat, w, e, s]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="px-5 py-3 font-medium text-ink text-xs">{cat}</td>
                      <td className="px-5 py-3 text-muted font-light text-xs">{w}</td>
                      <td className="px-5 py-3 text-muted font-light text-xs">{e}</td>
                      <td className="px-5 py-3 text-muted font-light text-xs">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices are approximate daily averages for 2026. Eastern Europe offers 50&ndash;60% savings over Western Europe with comparable quality of experience.
            </p>
          </section>

          {/* ─── SCHENGEN VISA ─── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Schengen Visa Guide for Indians</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Indian passport holders need a Schengen visa to visit most of Europe. Here&apos;s everything you need to know.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h4 className="font-serif text-lg font-normal text-blue-800 mb-3">{"\uD83D\uDCC4"} Documents Required</h4>
                <ul className="space-y-2">
                  {[
                    "Valid passport (6+ months validity, 2 blank pages)",
                    "Completed Schengen visa application form",
                    "Passport-size photos (35mm x 45mm, white background)",
                    "Travel insurance (\u20AC30,000 minimum medical coverage)",
                    "Flight itinerary (confirmed return ticket)",
                    "Hotel bookings for entire stay",
                    "Bank statements (last 3 months, min \u20AC50/day balance)",
                    "Cover letter with travel plan",
                    "Employment proof (salary slips, leave letter, ITR)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-xs text-muted font-light leading-relaxed">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">{"\u2713"}</span>{doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h4 className="font-serif text-lg font-normal text-amber-800 mb-3">{"\u26A1"} Key Details</h4>
                <div className="space-y-3">
                  {[
                    { label: "Visa Fee", value: "\u20AC80 (~\u20B97,200)" },
                    { label: "Processing Time", value: "15\u201330 working days" },
                    { label: "Apply Through", value: "VFS Global or BLS International" },
                    { label: "Apply How Early", value: "6 months before, minimum 15 days" },
                    { label: "Validity", value: "Up to 90 days within 180-day period" },
                    { label: "Countries Covered", value: "27 Schengen Area countries" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-32 flex-shrink-0">{item.label}</span>
                      <span className="text-muted font-light">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-amber-300/50">
                  <p className="text-xs text-muted font-light italic">
                    {"\u26A0\uFE0F"} Apply to the country where you&apos;ll spend the most nights. If equal, apply to the country of first entry. VFS/BLS appointments fill fast in peak season &mdash; book 2&ndash;3 months ahead.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Pro tip:</strong> France and Italy have the highest Schengen visa approval rates for Indian applicants. If your itinerary is evenly split, apply through the French or Italian consulate.
              </p>
            </div>
          </section>

          {/* ─── MISTAKES ─── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u274C"} Mistakes to Avoid</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              After covering 80+ European destinations, these are the errors we see first-timers make repeatedly.
            </p>
            <div className="space-y-3">
              {[
                { title: "Booking last-minute trains in Western Europe", desc: "Eurostar, Thalys, and TGV tickets double or triple in price within 2 weeks of departure. Book 2\u20133 months ahead for the best fares. A Paris\u2013Amsterdam train can be \u20AC35 early or \u20AC120 last-minute." },
                { title: "Skipping Eastern Europe entirely", desc: "Prague, Budapest, Krakow, and the Balkans offer experiences on par with Paris and Rome at a fraction of the cost. Some travelers call Eastern Europe the highlight of their trip." },
                { title: "Overspending in tourist traps", desc: "Restaurants within 50 meters of major landmarks charge 2\u20133x normal prices. Walk two blocks in any direction and prices drop dramatically. In Rome, skip Piazza Navona restaurants. In Paris, avoid anything on the Champs-\u00C9lys\u00E9es." },
                { title: "Trying to visit too many cities", desc: "The number one regret is rushing through 8 cities in 10 days. You&apos;ll spend more time on trains than exploring. Aim for 2\u20133 full days per city, and no more than 5\u20136 cities in two weeks." },
                { title: "Not validating train tickets", desc: "In France and Italy, you must validate (stamp) your ticket before boarding regional trains. Unvalidated tickets result in on-the-spot fines of \u20AC50\u2013\u20AC200. Look for the small yellow/green machines on the platform." },
                { title: "Ignoring pickpocket hotspots", desc: "Barcelona\u2019s La Rambla, Rome\u2019s Termini station, Paris Metro, and Prague\u2019s Charles Bridge are notorious. Use a cross-body bag with a zip, keep your phone in a front pocket, and be extra cautious when someone bumps into you or asks you to sign a petition." },
              ].map((item) => (
                <div key={item.title} className="bg-red-50/50 border border-red-200/50 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-lg flex-shrink-0">{"\u274C"}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{item.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── AFFILIATE ─── */}
          <section className="mb-14">
            <AffiliateBlock
              destination="Europe"
              hotels={[
                { name: "Hotel Le Marais, Paris", type: "Boutique · Central", price: "From €120/night", rating: "4", url: "https://www.booking.com/searchresults.html?ss=Paris&aid=2820480", badge: "Paris pick" },
                { name: "Hotel Colosseum, Rome", type: "Heritage · Near ruins", price: "From €95/night", rating: "4", url: "https://www.booking.com/searchresults.html?ss=Rome&aid=2820480", badge: "Rome pick" },
                { name: "Generator Budapest", type: "Hostel · Party district", price: "From €35/night", rating: "4", url: "https://www.booking.com/searchresults.html?ss=Budapest&aid=2820480", badge: "Budget gem" },
                { name: "Hotel Barcelona Catedral", type: "Boutique · Gothic Quarter", price: "From €110/night", rating: "4", url: "https://www.booking.com/searchresults.html?ss=Barcelona&aid=2820480" },
                { name: "Art Hotel Prague", type: "Design · Old Town", price: "From €75/night", rating: "4", url: "https://www.booking.com/searchresults.html?ss=Prague&aid=2820480" },
              ]}
              activities={[
                { name: "Skip-the-Line Colosseum Tour, Rome", duration: "3 hours", price: "From €45", badge: "Must do", url: "https://www.getyourguide.com/s/?q=colosseum+rome&partner_id=PSZA5UI" },
                { name: "Eiffel Tower Summit Access, Paris", duration: "2 hours", price: "From €35", url: "https://www.getyourguide.com/s/?q=eiffel+tower+paris&partner_id=PSZA5UI" },
                { name: "Sagrada Familia Fast Track, Barcelona", duration: "1.5 hours", price: "From €26", url: "https://www.getyourguide.com/s/?q=sagrada+familia+barcelona&partner_id=PSZA5UI" },
                { name: "Budapest Thermal Bath & Cruise", duration: "Half day", price: "From €40", url: "https://www.getyourguide.com/s/?q=budapest+thermal+bath&partner_id=PSZA5UI" },
              ]}
            />
          </section>

          {/* ─── GALLERY ─── */}
          <section className="mb-14">
            <DestinationGallery
              title="Europe — A Continent of Contrasts"
              subtitle="From Mediterranean beaches to Arctic fjords, Roman ruins to modern design."
              spots={[
                { name: "Santorini, Greece", query: "santorini blue dome sunset greece", desc: "Blue-domed churches overlooking the Aegean — the most photographed sunset in Europe." },
                { name: "Colosseum, Rome", query: "colosseum rome italy golden hour", desc: "2,000 years of gladiatorial history in the heart of the Eternal City." },
                { name: "Amsterdam Canals", query: "amsterdam canal houses bikes netherlands", desc: "17th-century canal houses, bicycles, and the most liveable city in Europe." },
                { name: "Prague Old Town", query: "prague old town square astronomical clock", desc: "Medieval astronomical clock, Gothic spires, and Central Europe's best-value city." },
                { name: "Norwegian Fjords", query: "norwegian fjords scenic landscape water mountains", desc: "Dramatic glacier-carved waterways — nature at its most spectacular." },
                { name: "Istanbul, Turkey", query: "istanbul hagia sophia blue mosque bosphorus", desc: "Where Europe meets Asia — 2,500 years of history on the Bosphorus." },
              ]}
            />
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2753"} Frequently Asked Questions</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Common questions about planning a Europe trip.</p>
            <div className="space-y-3">
              <FaqItem q="Do Indians need a visa for Europe?" a="Yes. Indian passport holders need a Schengen visa to visit 27 European countries. Apply at VFS or BLS International, pay the EUR 80 fee, and allow 15-30 working days for processing. US, UK, Canadian, and Australian citizens can visit visa-free for 90 days within 180 days." />
              <FaqItem q="How much does a Europe trip cost per day?" a="It depends on the region. Eastern Europe (Poland, Hungary, Balkans): EUR 25-80/day. Western Europe (France, Italy, Spain): EUR 60-200/day. Scandinavia (Norway, Iceland): EUR 100-250/day. Budget travelers can do Western Europe on EUR 60-80/day with hostels and cooking." />
              <FaqItem q="What is the best time to visit Europe?" a="April to June and September to October are ideal. You get pleasant weather, manageable crowds, and shoulder-season prices. July and August are peak season — expect higher prices and tourist crowds everywhere. Winter (November to March) is cheapest but cold, though perfect for Christmas markets and skiing." />
              <FaqItem q="What is the best route for a first trip to Europe?" a="The 2-week classic: Paris, Amsterdam, Berlin, Prague, Vienna, Rome. It covers iconic cities, mixes Western and Eastern Europe, and is well-connected by train. For a budget trip, try Budapest, Prague, Krakow, and Vienna over 10 days." />
              <FaqItem q="How many days do you need for a Europe trip?" a="Minimum 10 days for 3-4 cities. Two weeks is the sweet spot for 5-6 cities without rushing. Three weeks lets you explore a full region deeply. The biggest mistake is cramming 8+ cities into 10 days — you end up spending more time on trains than actually seeing anything." />
            </div>
          </section>

          {/* ─── COMMENTS ─── */}
          <section className="mb-14">
            <Comments />
          </section>

          {/* ─── COMBINE WITH & RELATED ─── */}
          <section className="mb-14">
            <CombineWith currentSlug="europe-travel-guide" />
          </section>

          <section className="mb-14">
            <RelatedGuides currentSlug="europe-travel-guide" />
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
