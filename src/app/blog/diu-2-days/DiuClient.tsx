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


const DIU_TOC = [
  { id: "why-diu",     emoji: "⚡", label: "Why Diu?" },
  { id: "getting-there", emoji: "🚌", label: "Getting There" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Diu 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Diu in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
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
export default function DiuClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏖", label: "Comfortable", sub: "₹5k–12k", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DIU_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Diu" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="diu fort beach gujarat coast india"
            fallback="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1600&q=85"
            alt="Diu Fort overlooking the Arabian Sea coastline"
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
              <span className="text-white/70">Diu 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Diu in 2 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget & Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs — and why this tiny island is India&apos;s most underrated beach escape.
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
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Diu is Goa&apos;s quieter, cheaper, friendlier little brother — same Portuguese architecture, same beaches, 20% of the crowd and none of the trance music. If you want a genuine beach weekend without the circus, this is it.
            </p>
          </blockquote>

          {/* ── WHY DIU ── */}
          <section id="why-diu" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Why Diu?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pick your situation — jump straight to your itinerary, or read why this island deserves your weekend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "For Budget Travellers", emoji: "💰", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Accommodation","₹400–₹800/night"],["Beer","₹60–₹100 (legal, unlike Gujarat)"],["Fish thali","₹100–₹180"],["Transport","₹200–₹400/day (scooter)"]],
                  note: "Everything in Diu costs 40–60% less than the same thing in Goa. That includes alcohol." },
                { title: "For Comfort Seekers", emoji: "🏖", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Resort stays","₹2,000–₹5,000/night"],["Fine dining","₹400–₹800/person"],["Private tours","₹1,500–₹2,500/day"],["Spa & wellness","₹800–₹1,500/session"]],
                  note: "Diu's top-end is genuinely good — Portuguese-era heritage hotels, seafood restaurants, empty beaches." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">💡 {area.note}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="getting-there" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚌 Getting There</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Diu is a tiny island connected to Gujarat by a bridge. Getting there is half the adventure.
            </p>
            <div className="space-y-3">
              {[
                { icon: "✈️", title: "By Air", desc: "Diu Airport has limited flights from Mumbai (1hr 15min). Alternatively, fly to Ahmedabad (340km, 6hrs drive) or Rajkot (210km, 4hrs drive). Ahmedabad has the most flight options." },
                { icon: "🚂", title: "By Train", desc: "Nearest major station is Veraval (90km, 2hrs by road). Una station is just 12km from Diu — but has fewer trains. From Ahmedabad, take the Somnath Express to Veraval." },
                { icon: "🚌", title: "By Bus", desc: "GSRTC Volvo buses run from Ahmedabad to Una (8–9hrs, ₹500–₹800). Private buses from Rajkot take 5hrs. From Una, shared autos to Diu cost ₹20–₹30." },
                { icon: "🚗", title: "By Road", desc: "Self-drive from Ahmedabad via NH-8A is scenic. The last 30km along the coast is beautiful. Total: 340km, 6hrs. From Rajkot: 210km, 4hrs via Junagadh." },
              ].map((t) => (
                <TipCard key={t.title} icon={t.icon} title={t.title} desc={t.desc}
                  color="bg-white border-parchment-2" />
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="2 Days" />
            <StatCard icon="💰" label="Budget From" value="₹3,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🍺" label="Alcohol" value="Legal" />
          </div>

          {/* ── NAIDA CAVES IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="naida caves diu underground stone tunnel light shaft ancient"
              fallback="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=900&q=80"
              alt="Naida Caves underground tunnels with light shafts in Diu"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Naida Caves — underground Portuguese-era quarry tunnels with light shafts streaming through. One of India&apos;s most surreal sights that almost nobody visits.
              </p>
            </div>
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
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
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Diu Town Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near fort · ₹400–₹800/night · Scooter: ₹200–₹350/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fort, Caves & Town Heritage"
                  items={[
                    "Arrive by morning bus/train. Rent a scooter immediately — ₹200–₹350/day from shops near the bus stand.",
                    "10am: Diu Fort (free entry) — massive Portuguese fortress right on the sea. Walk the ramparts, count the cannons. Budget 1.5 hours.",
                    "12pm: Naida Caves (free) — 10 min walk from the fort. Underground quarry tunnels with dramatic light shafts. Instagram hasn't discovered this yet. 45 min.",
                    "1:30pm: Lunch at a local dhaba in Diu town — fish thali ₹100–₹180. The simpler the place looks, the better the fish.",
                    "3pm: St Paul's Church — stunning baroque Portuguese church, one of the finest in India. Free, 30 min.",
                    "4:30pm: INS Khukri Memorial — cliff-top memorial to a warship sunk in 1971. Dramatic sea views. Free, 30 min.",
                    "6pm: Walk along Jallandhar Beach for sunset. Beer at a beach shack — ₹60–₹100.",
                  ]}
                  cost="₹800–₹1,400 excluding accommodation" />
                <DayCard day="Day 2" title="Beaches, Temple & Departure"
                  items={[
                    "8am: Gangeshwar Temple — Shiva lingams naturally formed in coastal rocks, waves crashing over them at high tide. Genuinely unique. Free, 30 min.",
                    "9:30am: Nagoa Beach — the main beach. Clean, palm-lined, good for swimming. Rent a sunbed (₹100), try water sports if you want (jet ski ₹300–₹500).",
                    "12pm: Sea Shell Museum — private collection, one of India's largest. ₹25 entry. Surprisingly good. 30–45 min.",
                    "1pm: Lunch at Nagoa Beach shack — fresh seafood, ₹150–₹250/person.",
                    "3pm: Ghoghla Beach — just across the bridge on the mainland. Longest beach in the area, usually empty. Walk it.",
                    "5pm: Head back to town. Last chai, pick up cashews or Diu's local alcohol from a shop.",
                    "Evening departure — or stay for one more sunset beer at the fort ramparts.",
                  ]}
                  cost="₹700–₹1,200 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹3,500–₹5,500 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🏖</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Comfortable Plan — Nagoa Beach or Heritage Hotel</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Resort/heritage property · ₹2,000–₹5,000/night · Private car or scooter</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Heritage & Coast — Slow Discovery"
                  items={[
                    "Arrive and check into a heritage hotel in Diu town or a resort near Nagoa Beach. Take your time settling in.",
                    "11am: Diu Fort — explore at leisure, bring a camera. The sea-facing bastions are spectacular. 1.5–2 hours.",
                    "1pm: Lunch at O Coqueiro or Ram Vijay — proper sit-down with Diu's Portuguese-influenced cuisine. ₹400–₹700 for two.",
                    "3pm: Naida Caves — the light is best in the afternoon when shafts cut through the tunnels. Take your time. 1 hour.",
                    "4:30pm: St Paul's Church — baroque Portuguese architecture, peaceful interior. 30 min.",
                    "5:30pm: INS Khukri Memorial for golden hour views over the cliffs.",
                    "7pm: Dinner at a seafood restaurant in town. Fresh catch, cold beer, Portuguese-style preparation. ₹600–₹1,000 for two.",
                  ]}
                  cost="₹2,000–₹3,500 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Beaches, Sacred Stones & Seashells"
                  items={[
                    "7:30am: Gangeshwar Temple at sunrise — the rocks, the crashing waves, the lingams. Best experienced early when the temple is quiet.",
                    "9am: Breakfast at your hotel. No rush.",
                    "10:30am: Nagoa Beach — sunbeds, swimming, water sports if you want them. Parasailing ₹500–₹800, jet ski ₹500–₹700.",
                    "1pm: Seafood lunch at a Nagoa Beach restaurant — prawn curry, sol kadhi, cold kingfisher. ₹500–₹800 for two.",
                    "3pm: Sea Shell Museum — quirky, private, and genuinely impressive. ₹25 entry.",
                    "4pm: Ghoghla Beach — bring a book, find a quiet spot. The longest, emptiest beach in the area.",
                    "6pm: Sunset drinks at your hotel or a cliffside spot. Pack up and depart, or enjoy one final evening.",
                  ]}
                  cost="₹2,500–₹4,500 for two (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 2-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹10,000–₹22,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">🏖 Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹800–₹1,600", "₹4,000–₹10,000"],
                    ["🍽 Food & Drinks", "₹600–₹1,000", "₹2,000–₹3,500"],
                    ["🛵 Transport", "₹400–₹700", "₹700–₹2,500"],
                    ["🎯 Activities", "₹100–₹500", "₹500–₹2,000"],
                    ["🍺 Drinks & Nightlife", "₹200–₹500", "₹500–₹1,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹2,100–₹4,300", "₹3,850–₹9,750"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Diu is roughly 40–60% cheaper than Goa for equivalent experiences.
            </p>
          </section>

          {/* ── DIU AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Diu"
            hotels={[
              { name: "Radhika Beach Resort", type: "Beach Resort · Nagoa", price: "From ₹2,500/night", rating: "4", badge: "Popular", url: "https://www.booking.com/hotel/in/radhika-beach-resort-diu.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Cidade de Diu", type: "Heritage Hotel · Town", price: "From ₹1,800/night", rating: "4", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/cidade-de-diu.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Hotel Kohinoor", type: "Budget · Town Centre", price: "From ₹600/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/kohinoor-diu.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Diu Fort & Heritage Walking Tour", duration: "3 hours", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/diu/?partner_id=PSZA5UI" },
              { name: "Nagoa Beach Water Sports Package", duration: "2 hours", price: "From ₹800/person", badge: "Adventure", url: "https://www.getyourguide.com/diu/?partner_id=PSZA5UI" },
              { name: "Somnath Temple Day Trip", duration: "Full day", price: "From ₹1,500/person", url: "https://www.getyourguide.com/diu/?partner_id=PSZA5UI" },
              { name: "Diu Island Sunset Boat Ride", duration: "1.5 hours", price: "From ₹400/person", url: "https://www.getyourguide.com/diu/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="diu-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Diu — Must-See Places"
            subtitle="Click each thumbnail to explore Diu's most iconic forts, beaches and hidden gems."
            spots={[
              { name: "Diu Fort",            query: "diu fort massive stone walls sea coast cannon artillery",    desc: "Massive Portuguese sea-fort built in 1535, right on the coast. Walk the ramparts, explore the lighthouse, count the cannons. Free entry." },
              { name: "Nagoa Beach",          query: "nagoa beach diu palm trees clean sand tropical coast",      desc: "Diu's most popular beach — a clean crescent of sand lined with palms. Calm water, good for swimming, basic water sports available." },
              { name: "Naida Caves",          query: "naida caves diu stone tunnel underground light rays ancient quarry", desc: "Underground Portuguese-era quarry tunnels with dramatic light shafts. Genuinely surreal and almost entirely unvisited." },
              { name: "Gangeshwar Temple",    query: "gangeshwar temple diu shiva lingam rocks sea waves coast",  desc: "Five Shiva lingams naturally formed in coastal rocks, with waves crashing over them at high tide. Spiritual and dramatic." },
              { name: "St Paul's Church",     query: "st pauls church diu baroque portuguese colonial architecture white", desc: "One of the finest Portuguese baroque churches in India. Built in 1601, beautifully preserved, peaceful interior." },
              { name: "INS Khukri Memorial",  query: "ins khukri memorial diu cliff coast warship monument sea",  desc: "Cliff-top memorial to INS Khukri, sunk during the 1971 war. Commanding views of the Arabian Sea and a moving tribute." },
              { name: "Ghoghla Beach",        query: "ghoghla beach diu long empty sand coast gujarat",          desc: "The longest beach near Diu, technically on the Gujarat mainland. Almost always empty — perfect for long walks." },
              { name: "Sea Shell Museum",     query: "sea shell museum collection marine shells display india",   desc: "One of India's largest private shell collections — 2,500+ species from around the world. Quirky, surprising, worth the ₹25 entry." },
            ]}
          />

          {/* ── HUMAN VOICE CALLOUT ── */}
          <div className="mb-14 bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-sm text-ink-mid font-light leading-relaxed mb-4">
              <strong className="font-medium text-ink">Real talk:</strong> Naida Caves are genuinely surreal — underground Portuguese-era quarry tunnels with light shafts streaming through. Instagram hasn&apos;t discovered this yet. Go now, before it becomes another overcrowded photo spot.
            </p>
            <p className="text-sm text-ink-mid font-light leading-relaxed">
              <strong className="font-medium text-ink">Friday night warning:</strong> Alcohol is legal in Diu but not in surrounding Gujarat — which means Friday night sees a very specific kind of tourist migration. Plan accordingly. If you want a quiet weekend, arrive on a Tuesday.
            </p>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Coming on a Friday/Saturday", desc: "Weekend crowds from dry Gujarat pour in for cheap alcohol. The island feels different. Visit midweek for the real Diu experience.", icon: "📅" },
                { title: "Skipping Naida Caves", desc: "Most tourists go straight to the beach and miss the caves entirely. They're free, 10 minutes from the fort, and unlike anything else in India.", icon: "🕳️" },
                { title: "Expecting Goa-level nightlife", desc: "Diu has bars, not clubs. The charm is sunset beers and quiet seafood dinners, not dance floors. Adjust expectations.", icon: "🎵" },
                { title: "Not renting a scooter", desc: "Diu island is only 21 sq km. A scooter covers everything in two days for ₹200–₹350/day. Autos are expensive relative to distances.", icon: "🛵" },
                { title: "Eating only at Nagoa Beach shacks", desc: "Town has better, cheaper food. The dhaba fish thali at ₹120 is better than the ₹350 beach shack version.", icon: "🍽" },
                { title: "Rushing through the fort", desc: "Diu Fort isn't a 15-minute photo stop. Walk the full ramparts, explore the lighthouse area, sit on the sea-facing bastions. Give it 1.5 hours minimum.", icon: "🏰" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Gangeshwar at High Tide", desc: "Check tide timings before visiting Gangeshwar Temple. At high tide, waves crash directly over the Shiva lingams — dramatically more impressive than low tide.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍺", title: "Stock Up If Going Back to Gujarat", desc: "Alcohol is prohibited in Gujarat. Many visitors stock up before crossing back. Liquor shops near the bus stand have the best prices.", color: "bg-amber-50 border-amber-200" },
                { icon: "📸", title: "Naida Caves Light Timing", desc: "Visit between 2pm–4pm for the best light shafts through the cave openings. Morning visits are darker and less photogenic.", color: "bg-teal-50 border-teal-200" },
                { icon: "🐟", title: "Fish Market Morning", desc: "Visit the Diu fish market before 8am. Buy fresh catch, take it to any restaurant — they'll cook it for ₹80–₹150. Freshest possible seafood at local prices.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏖", title: "Ghoghla > Nagoa for Solitude", desc: "If Nagoa Beach feels crowded (weekends), cross the bridge to Ghoghla. Same quality sand, 10% of the people, and it stretches forever.", color: "bg-rose-50 border-rose-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Oct–Nov ✅ best value, pleasant | Dec–Feb ✅ perfect weather | Mar ⚠️ warming up | Apr–Jun ☀️ too hot | Jul–Sep 🌧️ monsoon, rough seas", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Diu itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Diu Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Diu?", a: "2 days is the sweet spot. You can comfortably cover Diu Fort, Naida Caves, Nagoa Beach, Gangeshwar Temple, INS Khukri Memorial, St Paul's Church, and the Sea Shell Museum. Add a third day only if you want to linger on beaches or day-trip to Somnath Temple (90km)." },
                { q: "What is the best time to visit Diu?", a: "October to March is ideal. November to February has the most pleasant weather (20-30°C). Avoid April to June when temperatures cross 40°C. Monsoon season (July-September) brings rough seas but fewer crowds and dramatic scenery." },
                { q: "How much does a 2-day Diu trip cost?", a: "Budget solo: ₹3,500–₹5,500 including accommodation. Comfortable for two: ₹10,000–₹22,000. Diu is one of the cheapest beach destinations in India — food, alcohol and stays are 40-60% less than equivalent experiences in Goa." },
                { q: "Is alcohol legal in Diu?", a: "Yes. Diu is a union territory, not part of Gujarat, so alcohol is completely legal. Bars and liquor shops operate freely. A beer costs ₹60–₹100 at a shop, ₹100–₹180 at a restaurant. This is the main reason for weekend tourist traffic from Gujarat." },
                { q: "How do I get to Diu?", a: "Diu has a small airport with flights from Mumbai. Most travellers fly to Ahmedabad (340km, 6hrs drive) or take a train to Veraval (90km, 2hrs drive). GSRTC buses from Ahmedabad to Una (12km from Diu) cost ₹500–₹800 and take 8-9 hours." },
                { q: "What is the best beach in Diu?", a: "Nagoa Beach is the most popular — clean, palm-lined, calm water, water sports available. Ghoghla Beach (mainland side) is the longest and emptiest. Jallandhar Beach near town is good for sunset views. For swimming, stick to Nagoa." },
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
                { label: "Goa — 3 Day Complete Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Gujarat — Rann of Kutch Guide", href: "/blog/kutch-3-days", soon: true },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
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

          <RelatedGuides currentSlug="diu-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
