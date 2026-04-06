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


const MYSORE_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "whymysore",   emoji: "\uD83C\uDFF0", label: "Why Mysore?" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mysore 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Mysore in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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
export default function MysoreClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B96k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFF0", label: "Heritage", sub: "\u20B98k\u201318k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "\uD83D\uDC51", label: "Royal", sub: "\u20B918k\u201335k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MYSORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mysore" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mysore palace illuminated karnataka india"
            alt="Mysore Palace illuminated at night with thousands of golden bulbs"
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
              <span className="text-white/70">Mysore 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mysore in 3 Days: Palace, Hills & Heritage
                <em className="italic text-gold-light"> (Budget to Royal, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and why Mysore is India&apos;s most underrated city break.
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
              <span>{"\uD83D\uDCB0"} From \u20B96,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mysore Palace on Sunday night when it&apos;s lit with 100,000 bulbs is genuinely one of India&apos;s great visual spectacles. Most visitors come for a day trip from Bangalore, rush through the palace, and miss everything that makes this city extraordinary. This guide makes sure you don&apos;t.
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

          {/* ── WHY MYSORE ── */}
          <section id="whymysore" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFF0"} Why Mysore?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mysore is not a beach town or a hill station. It is India&apos;s cleanest city, a living museum of Wodeyar royal heritage, and home to some of South India&apos;s best food. Here is what you are actually getting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Heritage Side", emoji: "\uD83C\uDFF0", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Must-see","Mysore Palace, Chamundi Hills, Srirangapatna"],["Best for","History lovers, photographers, families"],["Budget","\u20B9100\u2013\u20B9500 entry fees"],["Vibe","Grand, walkable, old-world charm"]],
                  note: "Mysore Palace is India's second-most-visited monument after the Taj Mahal. Sunday evening illumination is unmissable." },
                { title: "The Living City", emoji: "\uD83D\uDED2", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Must-do","Devaraja Market, silk shopping, Mysore Pak tasting"],["Best for","Foodies, shoppers, culture seekers"],["Budget","\u20B9500\u2013\u20B93,000 for shopping"],["Vibe","Buzzing markets, artisan traditions, authentic Karnataka"]],
                  note: "Devaraja Market has operated continuously for over 400 years. Go early morning for flowers, spices, and zero tourists." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Base yourself centrally near Sayyaji Rao Road. Everything important is within 5km. Auto-rickshaws are cheap and honest with meters.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u20B96,000" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct \u2013 Feb" />
            <StatCard icon={"\uD83D\uDE82"} label="From Bangalore" value="2hr Train" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Central Mysore Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hotel Dasaprakash / budget lodge near palace {"\u00B7"} \u20B9600\u2013\u20B91,200/night {"\u00B7"} Auto: \u20B930\u2013\u20B9150/ride</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Palace, Market & Chamundi Hills"
                  items={[
                    "8:30am: Mysore Palace \u2014 arrive at opening to beat tour groups. \u20B9100 entry (Indian), \u20B9200 (international). No cameras inside, lockers available. Budget 2 hours.",
                    "11am: Walk to Devaraja Market (10 min from palace). Flower section is stunning. Buy kumkum, spices, and sandalwood soap. \u20B9100\u2013\u20B9300 total.",
                    "12:30pm: Lunch at Mylari Hotel \u2014 legendary dosa for \u20B960\u201380. Queue is part of the experience. Cash only.",
                    "2:30pm: Auto to Chamundi Hills base (\u20B9100\u2013\u20B9150). Walk the 1,000 steps up or ride to the top. Chamundeshwari Temple at summit, free entry.",
                    "Chamundi Hills at 6am beats the afternoon tourist rush and the view of Mysore below is stunning. But if you only have today, afternoon works too.",
                    "5:30pm: If Sunday \u2014 head back to palace for 7pm illumination. 100,000 bulbs, free to watch from outside.",
                    "Dinner: RRR Restaurant \u2014 best thali in Mysore, \u20B9150\u2013\u20B9200. Near KR Circle."
                  ]}
                  cost="\u20B9800\u2013\u20B91,200 excluding accommodation" />
                <DayCard day="Day 2" title="Srirangapatna Day Trip + Brindavan Gardens"
                  items={[
                    "7:30am: KSRTC bus to Srirangapatna (\u20B930, 30 min). Or auto for \u20B9300\u2013\u20B9400 round trip.",
                    "Tipu Sultan's Summer Palace (Daria Daulat Bagh) \u2014 \u20B935 entry. Ornate teak palace with original murals. 45 min.",
                    "Ranganathaswamy Temple \u2014 one of the largest Vishnu temples in India. Free entry, remove shoes. 30 min.",
                    "Tipu Sultan's Gumbaz (mausoleum) \u2014 \u20B925 entry. Beautiful Mughal-style tomb set in gardens.",
                    "12pm: Lunch at a local joint in Srirangapatna town \u2014 meals for \u20B980\u2013\u20B9120.",
                    "2pm: Auto/bus to Brindavan Gardens (\u20B920 entry). Musical fountain show at 6:30pm is worth waiting for.",
                    "Return to Mysore by 8pm. Evening walk on Sayyaji Rao Road for street food."
                  ]}
                  cost="\u20B9600\u2013\u20B91,000 excluding accommodation" />
                <DayCard day="Day 3" title="Zoo, Silk & Sweet Mysore"
                  items={[
                    "8:30am: Mysore Zoo \u2014 \u20B9100 entry. One of India's oldest and best-maintained zoos. 2 hours minimum.",
                    "11am: Jaganmohan Palace Art Gallery \u2014 \u20B920 entry. Incredible collection including Raja Ravi Varma paintings.",
                    "12:30pm: Mysore Pak from Guru Sweet Mart near Devaraja Market \u2014 the original, not the tourist shops. You'll taste the difference. \u20B960\u2013\u20B9100/box.",
                    "1pm: Lunch at Vinayaka Mylari or Hotel RRR \u2014 \u20B9100\u2013\u20B9180.",
                    "2:30pm: KSIC Silk showroom on Sayyaji Rao Road \u2014 government-run, fixed prices, guaranteed pure silk. Window shop or buy.",
                    "4pm: St. Philomena's Church \u2014 one of India's tallest churches, Gothic architecture, free entry. 30 min.",
                    "Evening: Final walk through the palace grounds at sunset."
                  ]}
                  cost="\u20B9600\u2013\u20B9900 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u20B94,500\u2013\u20B96,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: HERITAGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFF0"}</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Heritage Plan — Comfortable Mysore Base</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Windflower Spa & Resort / Hotel Pai Vista {"\u00B7"} \u20B92,500\u2013\u20B95,000/night {"\u00B7"} Hired car: \u20B91,500\u2013\u20B92,000/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Palace Quarter Deep Dive"
                  items={[
                    "8am: Chamundi Hills sunrise drive (20 min). Temple opens at 7:30am. Nandi Bull statue halfway down \u2014 stop for photos.",
                    "10am: Mysore Palace with audio guide (\u20B9150 extra). The Durbar Hall with stained glass ceiling is the highlight. 2.5 hours.",
                    "12:30pm: Walk the palace gardens, then lunch at Hotel Hanumanthu \u2014 traditional Mysore cuisine, \u20B9300\u2013\u20B9500 for two.",
                    "2:30pm: Devaraja Market \u2014 spice section and flower market. Buy Mysore sandalwood oil from Cauvery Arts & Crafts (\u20B9200\u2013\u20B91,500).",
                    "4pm: Jaganmohan Palace Art Gallery \u2014 \u20B920. Raja Ravi Varma collection is exceptional.",
                    "5:30pm: High tea at Royal Orchid Metropole \u2014 heritage hotel from 1920s, beautiful garden setting. \u20B9500\u2013\u20B9800 for two.",
                    "If Sunday: Palace illumination at 7pm is non-negotiable. 100,000 golden bulbs transforming the entire facade."
                  ]}
                  cost="\u20B92,500\u2013\u20B94,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Srirangapatna + Brindavan Gardens"
                  items={[
                    "8am: Drive to Srirangapatna (16km, 30 min). Hire a local guide at the gate \u2014 \u20B9500\u2013\u20B9800 for the full circuit, worth every rupee for Tipu Sultan history.",
                    "Daria Daulat Bagh (Summer Palace) \u2014 the murals depicting the Battle of Pollilur are extraordinary. 1 hour.",
                    "Ranganathaswamy Temple \u2014 ancient island temple. The river views alone justify the visit.",
                    "Colonel Bailey's Dungeon + Tipu's Gumbaz \u2014 1 hour combined.",
                    "12:30pm: Lunch at a heritage restaurant in Srirangapatna or drive to Brindavan Gardens restaurant.",
                    "2pm: Brindavan Gardens \u2014 terraced Mughal-style gardens. Best in late afternoon light. Musical fountain at 6:30pm.",
                    "Return to Mysore by 8pm. Dinner at The Old House \u2014 heritage bungalow turned restaurant, \u20B9800\u2013\u20B91,200 for two."
                  ]}
                  cost="\u20B93,000\u2013\u20B95,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Silk, Sweets & Southern Charm"
                  items={[
                    "8:30am: Mysore Zoo \u2014 genuinely one of India's best. White tigers, gorillas, walk-through aviary. 2 hours.",
                    "11am: KSIC Government Silk Factory showroom \u2014 watch weavers at work, buy sarees with purity certification. Prices: \u20B93,000\u2013\u20B925,000+.",
                    "Mysore Pak from Guru Sweet Mart near Devaraja Market \u2014 the original, not the tourist shops. You'll taste the difference.",
                    "1pm: Lunch at Depth N Green or Oyster Bay \u2014 \u20B9500\u2013\u20B9800 for two.",
                    "2:30pm: St. Philomena's Church \u2014 stunning Neo-Gothic architecture modelled on Cologne Cathedral.",
                    "3:30pm: Karanji Lake Nature Park \u2014 butterfly park and walk-through aviary. \u20B950 entry. Peaceful afternoon spot.",
                    "5pm: Final shopping on Sayyaji Rao Road \u2014 sandalwood, incense, Mysore paintings."
                  ]}
                  cost="\u20B92,500\u2013\u20B94,500 for two (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u20B98,000\u2013\u20B918,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: ROYAL ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC51"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Royal Plan — Luxury Heritage Experience</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Radisson Blu / Lalitha Mahal Palace Hotel {"\u00B7"} \u20B96,000\u2013\u20B912,000/night {"\u00B7"} Private car + guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Royal Mysore — The Palace Experience"
                  items={[
                    "7am: Private sunrise visit to Chamundi Hills. Your guide explains the 1,000-step pilgrimage tradition. Temple darshan at 7:30am.",
                    "9:30am: Mysore Palace with private heritage guide (\u20B92,000\u20133,000). They unlock stories the audio guide cannot \u2014 throne room, private quarters, the Dasara traditions.",
                    "12pm: Lunch at Lalitha Mahal Palace Hotel \u2014 former Viceroy's guesthouse, now a heritage hotel. Grand dining hall, \u20B91,500\u2013\u20B92,500 for two.",
                    "2:30pm: Jayalakshmi Vilas Mansion (Folklore Museum) \u2014 inside the university campus. Wodeyar royal artefacts most tourists never see.",
                    "4pm: Private Mysore painting demonstration at a master artist's studio \u2014 \u20B91,000\u2013\u20B92,000. Arrange through your hotel.",
                    "6:30pm: Sunset at Lalitha Mahal Palace grounds with views of Chamundi Hills.",
                    "Dinner: The Quorum at Radisson Blu or Oyster Bay \u2014 \u20B92,000\u2013\u20B93,500 for two."
                  ]}
                  cost="\u20B98,000\u2013\u20B912,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Srirangapatna + Ranganathittu + Brindavan"
                  items={[
                    "7:30am: Drive to Ranganathittu Bird Sanctuary (16km). Boat ride through nesting islands \u2014 \u20B9200 + \u20B950 entry. Painted storks, pelicans, crocodiles.",
                    "9:30am: Srirangapatna with private historian guide. The Tipu Sultan circuit takes on new meaning with proper context.",
                    "Daria Daulat Bagh, Gumbaz, Bailey's Dungeon, Ranganathaswamy Temple \u2014 full 3-hour immersion.",
                    "1pm: Lunch at a riverside restaurant near Srirangapatna. Fresh river fish is the speciality.",
                    "3pm: Brindavan Gardens \u2014 private garden walk. The musical fountain at 6:30pm is best from the upper terrace.",
                    "8pm: Return to Mysore. Dinner at Tiger Trail (Jungle Lodges) or The Old House \u2014 \u20B92,500\u2013\u20B94,000 for two."
                  ]}
                  cost="\u20B96,000\u2013\u20B910,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Silk, Art & Leisurely Farewell"
                  items={[
                    "8:30am: Breakfast at your heritage hotel. No rush.",
                    "10am: KSIC Government Silk Factory \u2014 private tour of the weaving floor. Watch master weavers create 9-yard sarees. Purchase with purity certificates.",
                    "11:30am: Cauvery Arts & Crafts Emporium \u2014 authentic sandalwood, rosewood inlay, Mysore paintings. Government-certified, no fakes.",
                    "1pm: Farewell lunch at Vinayaka Mylari for the legendary dosas, or Le Olive at Windflower for fine dining (\u20B92,000\u2013\u20B93,000).",
                    "2:30pm: Mysore Zoo if time permits. Or Karanji Lake walk-through aviary for a peaceful finish.",
                    "4pm: St. Philomena's Church \u2014 soaring Gothic spires, stained glass, rarely crowded.",
                    "Evening: Palace grounds at golden hour. Last photo of the most photogenic building in South India."
                  ]}
                  cost="\u20B95,000\u2013\u20B98,000 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u20B918,000\u2013\u20B935,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">{"\uD83C\uDFF0"} Heritage</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC51"} Royal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,800\u2013\u20B93,600", "\u20B97,500\u2013\u20B915,000", "\u20B918,000\u2013\u20B936,000"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20B9900\u2013\u20B91,500", "\u20B93,000\u2013\u20B95,000", "\u20B96,000\u2013\u20B910,000"],
                    ["\uD83D\uDE95 Transport", "\u20B9400\u2013\u20B9700", "\u20B94,500\u2013\u20B96,000", "\u20B96,000\u2013\u20B99,000"],
                    ["\uD83C\uDFAF Activities & Entry", "\u20B9400\u2013\u20B9700", "\u20B91,500\u2013\u20B93,000", "\u20B95,000\u2013\u20B98,000"],
                    ["\uD83D\uDECD Shopping", "\u20B9200\u2013\u20B9500", "\u20B92,000\u2013\u20B95,000", "\u20B95,000\u2013\u20B915,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B94,500\u2013\u20B96,000", "\u20B98,000\u2013\u20B918,000", "\u20B918,000\u2013\u20B935,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Heritage and Royal costs shown per couple. Mysore is remarkably affordable compared to Rajasthan or Kerala for equivalent heritage experiences.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mysore"
            hotels={[
              { name: "Hotel Dasaprakash", type: "Budget Heritage \u00B7 Central", price: "From \u20B9800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/dasaprakash-mysore.html?aid=2820480" },
              { name: "Windflower Spa & Resort", type: "Heritage Resort \u00B7 Mysore", price: "From \u20B94,500/night", rating: "5", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/windflower-mysore.html?aid=2820480" },
              { name: "Radisson Blu Plaza Mysore", type: "Luxury \u00B7 Central", price: "From \u20B97,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/radisson-blu-plaza-mysore.html?aid=2820480" },
            ]}
            activities={[
              { name: "Mysore Palace & Chamundi Hills Tour", duration: "Full day", price: "From \u20B91,200/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mysore&partner_id=PSZA5UI" },
              { name: "Srirangapatna Heritage Tour", duration: "Half day", price: "From \u20B9800/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=mysore&partner_id=PSZA5UI" },
              { name: "Mysore Silk & Spice Walking Tour", duration: "3 hours", price: "From \u20B9600/person", url: "https://www.getyourguide.com/s/?q=mysore&partner_id=PSZA5UI" },
              { name: "Brindavan Gardens & Musical Fountain", duration: "4 hours", price: "From \u20B9500/person", url: "https://www.getyourguide.com/s/?q=mysore&partner_id=PSZA5UI" },
            ]}
            pdfProductId="mysore-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Mysore — Must-See Places"
            subtitle="Click each thumbnail to explore Mysore&apos;s most iconic palaces, temples and gardens."
            spots={[
              { name: "Mysore Palace",         query: "mysore palace architecture golden dome karnataka wide angle",         desc: "India's most visited palace after the Taj Mahal. The Indo-Saracenic architecture is a blend of Hindu, Muslim and Gothic styles. Sunday illumination with 100,000 bulbs is unmissable." },
              { name: "Chamundi Hills",         query: "chamundi hills temple mysore hilltop karnataka landscape",            desc: "The 1,000-step climb rewards you with panoramic views of the entire city. Nandi Bull statue halfway up is a 350-year-old monolith carved from a single boulder." },
              { name: "Brindavan Gardens",      query: "brindavan gardens mysore terraced fountains illuminated evening",      desc: "Mughal-style terraced gardens at the KRS Dam. The musical fountain show at 6:30pm draws hundreds every evening." },
              { name: "Devaraja Market",        query: "devaraja market mysore flower stalls colorful spices traditional",     desc: "400-year-old market bursting with flower garlands, kumkum powder, sandalwood, and fresh spices. Go before 9am for the best experience." },
              { name: "Srirangapatna",          query: "srirangapatna tipu sultan palace karnataka heritage architecture",    desc: "The island fortress 16km from Mysore where Tipu Sultan made his last stand. Daria Daulat Bagh summer palace has murals you will not see anywhere else in India." },
            ]}
          />

          {/* ── PALACE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="mysore palace interior ornate golden durbar hall karnataka"
              alt="Ornate interior of Mysore Palace Durbar Hall"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Durbar Hall inside Mysore Palace — stained glass ceilings, ornate columns, and a gold throne that weighs 280kg. No photography inside, so soak it in.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — Mysore is compact and everything is close. Save these links on your phone before each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83C\uDFF0 Heritage"},{id:"C" as const,label:"\uD83D\uDC51 Royal"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A \u00B7 Day 1" day="Palace + Market + Chamundi Hills"
                  stops={["Mysore Palace 8:30am","Devaraja Market 11am","Mylari Hotel Lunch","Chamundi Hills 2:30pm","Palace Illumination 7pm"]}
                  distance="18km \u00B7 ~40min riding" note="Everything on Day 1 is within a 5km radius of the palace. Walk the palace-to-market stretch, auto the rest."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Mysore+Palace/Devaraja+Market+Mysore/Mylari+Hotel+Mysore/Chamundi+Hills+Mysore" />
                <RouteCard plan="Plan A \u00B7 Day 2" day="Srirangapatna + Brindavan Gardens"
                  stops={["Mysore 7:30am","Srirangapatna 8am","Tipu Palace 8:30am","Gumbaz 10am","Brindavan Gardens 2pm","Mysore 8pm"]}
                  distance="52km round trip \u00B7 1.5hrs driving" note="Srirangapatna and Brindavan Gardens are on the same road heading north from Mysore. No backtracking needed."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Mysore/Daria+Daulat+Bagh+Srirangapatna/Tipu+Sultan+Gumbaz/Brindavan+Gardens/Mysore" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B \u00B7 Day 1" day="Chamundi Hills + Palace Quarter"
                  stops={["Chamundi Hills 8am","Mysore Palace 10am","Devaraja Market 12:30pm","Jaganmohan Palace 4pm","Royal Orchid 5:30pm"]}
                  distance="22km \u00B7 ~45min riding" note="Start with Chamundi Hills while it is cool. The rest of the day is a walkable loop around the palace area."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Chamundi+Hills+Mysore/Mysore+Palace/Devaraja+Market+Mysore/Jaganmohan+Palace+Mysore" />
                <RouteCard plan="Plan B \u00B7 Day 2" day="Srirangapatna + Brindavan Gardens"
                  stops={["Mysore 8am","Srirangapatna 8:30am","Daria Daulat Bagh","Gumbaz","Ranganathaswamy Temple","Brindavan Gardens 3pm","Mysore 8pm"]}
                  distance="52km round trip \u00B7 1.5hrs driving" note="Hire a local guide at Srirangapatna gate for the full Tipu Sultan story. \u20B9500\u2013\u20B9800 for 3 hours \u2014 transforms the experience."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Mysore/Daria+Daulat+Bagh+Srirangapatna/Tipu+Sultan+Gumbaz/Ranganathaswamy+Temple+Srirangapatna/Brindavan+Gardens/Mysore" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C \u00B7 Day 2" day="Ranganathittu + Srirangapatna + Brindavan"
                  stops={["Mysore 7:30am","Ranganathittu 8am","Srirangapatna 9:30am","Daria Daulat","Gumbaz","Brindavan Gardens 3pm","Mysore 8pm"]}
                  distance="58km round trip \u00B7 1.5hrs driving" note="Ranganathittu Bird Sanctuary is 3km before Srirangapatna. Morning boat ride when birds are most active \u2014 pelicans, storks, kingfishers."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Mysore/Ranganathittu+Bird+Sanctuary/Daria+Daulat+Bagh+Srirangapatna/Tipu+Sultan+Gumbaz/Brindavan+Gardens/Mysore" />
                <RouteCard plan="Plan C \u00B7 Day 3" day="Silk Factory + Zoo + Church"
                  stops={["KSIC Silk Factory 10am","Mysore Zoo 11:30am","Guru Sweet Mart 1:30pm","St Philomena's 2:30pm","Karanji Lake 3:30pm","Palace Grounds 5pm"]}
                  distance="12km \u00B7 ~30min riding" note="Day 3 is entirely within the city. Everything is a 5\u201310 minute auto ride from each other."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/KSIC+Silk+Mysore/Mysore+Zoo/St+Philomenas+Church+Mysore/Karanji+Lake+Mysore/Mysore+Palace" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62425.5!2d76.64!3d12.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Mysore Travel Map" />
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="mysore pak sweet golden indian dessert traditional platter"
              alt="Traditional Mysore Pak sweet on a brass plate"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mysore Pak from Guru Sweet Mart — ghee-rich, crumbly, and nothing like the packaged versions. Budget \u20B960\u2013\u20B9100 for a box that will not survive the car ride home.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Treating Mysore as a day trip from Bangalore", desc: "A day trip means you see the palace and leave. Mysore needs 3 days minimum to experience properly \u2014 the market, the hills, Srirangapatna, the food culture.", icon: "\u23F0" },
                { title: "Visiting the palace after 11am", desc: "Tour buses arrive between 10:30am and 2pm. Go at 8:30am opening \u2014 you get nearly empty halls and better light through the stained glass.", icon: "\uD83C\uDFF0" },
                { title: "Buying silk from random shops", desc: "Mysore has hundreds of silk shops. Most sell mixed blends at pure silk prices. Only buy from KSIC Government Showroom or Cauvery Arts & Crafts for certified purity.", icon: "\uD83E\uDDF5" },
                { title: "Skipping Srirangapatna", desc: "Just 16km away with Tipu Sultan's summer palace, ancient temples, and genuine history. Most visitors skip it because they don't know about it.", icon: "\uD83D\uDEA8" },
                { title: "Missing Sunday palace illumination", desc: "If your trip includes a Sunday, plan your schedule around the 7\u20138pm illumination. 100,000 bulbs. Free to watch. Genuinely spectacular.", icon: "\uD83D\uDCA1" },
                { title: "Eating only at tourist restaurants", desc: "Mylari Hotel dosa: \u20B960. RRR thali: \u20B9150. Hotel restaurant dosa: \u20B9250. The local spots are not just cheaper \u2014 they are genuinely better.", icon: "\uD83C\uDF7D" },
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
                { icon: "\uD83C\uDF05", title: "Chamundi Hills at Dawn", desc: "Chamundi Hills at 6am beats the afternoon tourist rush and the view of Mysore below is stunning. The morning light on the palace from up there is extraordinary.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF6C", title: "The Real Mysore Pak", desc: "Guru Sweet Mart near Devaraja Market makes the original ghee-rich version. Soft, crumbly, dissolves on your tongue. The packaged tourist versions are a different food entirely.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE82", title: "Take the Shatabdi Express", desc: "Bangalore to Mysore in 2 hours flat. Departs 6am or 11am. Book 2 weeks ahead \u2014 it fills up. \u20B9300\u2013\u20B9700 depending on class. Far better than driving.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFA8", title: "Mysore Paintings Are Worth It", desc: "Traditional Mysore paintings use real gold leaf and take months to complete. Prices start at \u20B91,500 for small pieces. Buy from Cauvery Arts or direct from artists near Jaganmohan Palace.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Ola and Rapido Work Well", desc: "Auto-rickshaws in Mysore are honest and metered. But Ola and Rapido are even cheaper and more convenient. Minimum fare is about \u20B930.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDCC6", title: "Dasara is Magical but Intense", desc: "If visiting during Dasara (Oct), book accommodation 2 months ahead. Prices double but the 10-day festival with the palace procession is genuinely once-in-a-lifetime.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Mysore itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mysore Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Mysore?", a: "3 days is ideal to cover Mysore Palace, Chamundi Hills, Brindavan Gardens, Devaraja Market, and a day trip to Srirangapatna. 2 days works if you skip Srirangapatna. 4\u20135 days lets you add Coorg or Kabini as an extension." },
                { q: "What is the best time to visit Mysore?", a: "October to February offers the best weather (18\u201328\u00B0C). October is peak season due to Dasara festival \u2014 spectacular but crowded and expensive. November\u2013February is the sweet spot with pleasant weather and manageable crowds. March\u2013May is hot (35\u00B0C+). June\u2013September brings monsoon rains." },
                { q: "How much does a 3-day Mysore trip cost?", a: "Budget solo: under \u20B96,000 including accommodation. Heritage couple: \u20B98,000\u2013\u20B918,000 for two. Royal luxury: \u20B918,000\u2013\u20B935,000 for two. All include accommodation, food, transport, activities and some shopping." },
                { q: "Is Mysore Palace worth visiting?", a: "It is India's second-most-visited monument after the Taj Mahal for good reason. The Durbar Hall, stained glass ceilings, and 280kg gold throne are extraordinary. Visit on a Sunday evening for the illumination \u2014 100,000 bulbs transform the entire facade." },
                { q: "What should I buy in Mysore?", a: "Mysore silk sarees from KSIC (government-certified purity), Mysore Pak from Guru Sweet Mart, sandalwood products from Cauvery Arts & Crafts, traditional Mysore paintings with real gold leaf, and fresh spices from Devaraja Market." },
                { q: "How do I get to Mysore from Bangalore?", a: "Shatabdi Express train: 2 hours, \u20B9300\u2013\u20B9700, the best option. KSRTC Airavat bus: every 15 min, 3\u20133.5 hours, \u20B9300\u2013\u20B9500. Driving via Mysore Expressway: 3 hours. Book the train 2 weeks ahead \u2014 it fills up fast." },
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
                { label: "Goa \u2014 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Golden Triangle \u2014 Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
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

          <RelatedGuides currentSlug="mysore-3-days" />
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
