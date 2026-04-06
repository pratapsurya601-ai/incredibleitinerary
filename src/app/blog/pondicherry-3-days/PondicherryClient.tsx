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


const PONDY_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "areas",       emoji: "📍", label: "Where to Stay" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "besttime",    emoji: "🌡️", label: "Best Time to Visit" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Pondicherry 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Pondicherry in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function PondicherryClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "💑", label: "Couple", sub: "₹8k–20k total", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "🧘", label: "Relaxed", sub: "₹15k–25k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PONDY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Pondicherry" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="pondicherry french quarter colorful streets"
            fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85"
            alt="Pondicherry French Quarter colorful colonial street"
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
              <span className="text-white/70">Pondicherry 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Coast
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Pondicherry in 3 Days: The Honest Guide
                <em className="italic text-gold-light"> (Budget to Relaxed, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs — and the things about Pondy that nobody warns you about.
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
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹6,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Pondicherry is the closest thing India has to a European weekend getaway — French architecture, boulangeries, and beach cafes. But go with realistic expectations — it&apos;s still India, beautifully chaotic.
            </p>
          </blockquote>

          <div className="prose-sm text-muted font-light leading-relaxed mb-10 space-y-4">
            <p>
              Every other travel blog will tell you Pondy is a &quot;little France in India.&quot; That sets you up for disappointment. What it actually is: a compact, walkable town where Tamil culture and French colonial history collide in the most charming way possible. The streets are narrow and colourful, the coffee is strong, the seafood is fresh, and the pace is slow enough that you actually stop checking your phone.
            </p>
            <p>
              Three days here is perfect. Enough to see the French Quarter properly, spend half a day at Auroville without rushing, hit the best beaches, and eat your way through Franco-Tamil cuisine that exists nowhere else on earth. This guide covers all of it — with real costs, real timings, and the honest opinions that generic travel sites are too afraid to publish.
            </p>
          </div>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
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

          {/* ── WHERE TO STAY ── */}
          <section id="areas" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 Where to Stay</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pondy is tiny — you can walk across the main area in 20 minutes. But location still matters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "White Town (French Quarter)", emoji: "🏛️", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","Couples, first-timers, walkers"],["Vibe","Quiet colonial streets, cafes, galleries"],["Budget","₹1,200–₹6,000/night"],["Walk to","Promenade Beach, Rock Beach, all cafes"]],
                  note: "The French Quarter is best at 6am before the Instagram influencers arrive. Rent a cycle, ride the empty streets, stop at Baker Street for a croissant." },
                { title: "Tamil Quarter / MG Road Area", emoji: "🛕", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Budget travellers, food lovers"],["Vibe","Busy, colourful, authentic Tamil Nadu"],["Budget","₹500–₹2,000/night"],["Walk to","Local markets, temples, bus stand"]],
                  note: "Cheaper, noisier, more authentic. The best local food is here, not in White Town. 10-minute walk to the Promenade." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in White Town if it&apos;s your first visit — everything is walkable and the morning light on those streets is genuinely special. Budget travellers: book a guesthouse on the Tamil Quarter side of the canal — same 10-minute walk, half the price.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹6,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🚗" label="From Chennai" value="2.5 hrs" />
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

            {/* ── PLAN A — BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under ₹8,000 total</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse in Tamil Quarter · ₹500–₹1,000/night · Cycle rental: ₹100–₹150/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="French Quarter + Promenade (Walk Everything)"
                  items={[
                    "Arrive morning. Drop bags, rent a bicycle (₹100–₹150/day) — Pondy is flat and tiny, perfect for cycling",
                    "10am: Walk the French Quarter grid — Rue Suffren, Rue Dumas, Rue Romain Rolland. Free. 1.5 hours of colourful colonial buildings and quiet courtyards",
                    "12pm: Lunch at Surguru — legendary South Indian meals for ₹120–₹180. Queue forms at 12:15, arrive early",
                    "2pm: Sri Aurobindo Ashram — free entry, maintain silence. The meditation hall is genuinely peaceful. 45 minutes",
                    "4pm: Promenade Beach walk — 1.5km along the waterfront. The Gandhi statue end is quieter",
                    "6pm: Sunset at Rock Beach pier. Free. Everyone goes here — but it earns it",
                    "Dinner: Skip the tourist restaurants on the Promenade. Walk 2 streets inland to Rue Suffren for authentic Franco-Tamil food at half the price. Budget ₹200–₹350"
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Auroville + Paradise Beach"
                  items={[
                    "7:30am: Cycle or bus to Auroville (12km, ₹15 by local bus from Pondy bus stand). Auto ₹200 one-way",
                    "8:30am: Auroville Visitors Centre — free. Watch the introductory film, walk the exhibition. 45 min",
                    "9:30am: Walk to Matrimandir viewing point — free, no booking needed for the outer view. The golden sphere is striking in morning light",
                    "Auroville is polarizing — some people find it life-changing, others find it pretentious. Give it 3 hours minimum before judging",
                    "12:30pm: Lunch at Tanto Pizzeria, Auroville — surprisingly excellent wood-fired pizza, ₹250–₹400",
                    "2:30pm: Chunnambar Boat House — boat to Paradise Beach (₹200 return, 20-min ride each way). Paradise Beach by boat is genuinely stunning. By road is a dusty disappointment. Take the boat from Chunnambar",
                    "5:30pm: Return. Evening walk along the Promenade. Street food: sundal and bajji for ₹30–₹50"
                  ]}
                  cost="₹1,000–₹1,500 excluding accommodation" />
                <DayCard day="Day 3" title="Serenity Beach + Markets + Departure"
                  items={[
                    "6:30am: Cycle to Serenity Beach (6km north). Best beach in Pondy for swimming — calmer water, surfers in the morning, almost no touts",
                    "Try a surf lesson if you want — ₹500–₹800 for beginners, 1 hour. Kallialay Surf School is reliable",
                    "10am: Back to town. Goubert Market — the real Pondy. Spices, fresh fish, flowers. 45 min browsing",
                    "11:30am: Coffee at Cafe des Arts — ₹80–₹150. The courtyard is the most photographed spot in Pondy for a reason",
                    "12:30pm: Final meal at any of the Rue Suffren restaurants. Try the fish curry — Pondy fish curry is tangier and coconut-ier than anywhere else in Tamil Nadu",
                    "Grab cashew packets from the Pondy Co-op Store on MG Road — ₹200–₹350/packet, best value souvenirs"
                  ]}
                  cost="₹800–₹1,300 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹6,500–₹8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — COUPLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — White Town Heritage Stay</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Boutique guesthouse in French Quarter · ₹2,000–₹5,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="French Quarter Deep Dive + Sunset"
                  items={[
                    "Arrive, check into your heritage guesthouse. Most have courtyards — sit with filter coffee before doing anything",
                    "10:30am: Rent a cycle together (₹200–₹300 for two). Ride the French Quarter — every lane is different. The yellow, blue, and pink houses on Rue Romain Rolland are the best",
                    "The French Quarter is best at 6am before the Instagram influencers arrive. Rent a cycle, ride the empty streets, stop at Baker Street for a croissant",
                    "12:30pm: Lunch at Villa Shanti — Franco-Tamil fusion in a restored colonial villa. ₹800–₹1,200 for two. The courtyard seating is beautiful",
                    "2:30pm: Sri Aurobindo Ashram — even if you are not spiritual, the silence after the noisy streets is reset-level calming. Free, 45 min",
                    "4pm: Browse Kalki, Casablanca, and the boutiques on Nehru Street — Pondy has surprisingly good handloom and pottery shops",
                    "6pm: Promenade sunset walk. End at Le Cafe on Rock Beach — overpriced coffee (₹150) but the only beachfront cafe in Pondy",
                    "Dinner: Le Dupleix — the most atmospheric restaurant in Pondy. French-Tamil menu, candlelit courtyard. ₹1,500–₹2,500 for two. Book ahead on weekends"
                  ]}
                  cost="₹3,000–₹5,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Auroville Morning + Paradise Beach Afternoon"
                  items={[
                    "7am: Baker Street for croissants and coffee — ₹300–₹450 for two. Best bakery in Pondy, no contest",
                    "8:30am: Hire a scooty (₹300–₹400/day) or auto to Auroville (12km, auto ₹350 return with wait)",
                    "Auroville is polarizing — some people find it life-changing, others find it pretentious. Give it 3 hours minimum before judging",
                    "Visit the Visitors Centre, Matrimandir viewing point, and walk through the Auroville forest. The banyan tree near Matrimandir is ancient and massive",
                    "12pm: Lunch at Marc's Cafe or Bread & Chocolate in Auroville — ₹500–₹800 for two. European-quality pastries in the middle of Tamil Nadu",
                    "2:30pm: Chunnambar Boat House — ferry to Paradise Beach. ₹400 return for two. Paradise Beach by boat is genuinely stunning. By road is a dusty disappointment. Take the boat from Chunnambar",
                    "Spend 2 hours on Paradise Beach — the sand is cleaner and water calmer than Promenade or Rock Beach",
                    "Evening: Dinner at La Maison Rose — pink colonial mansion, rooftop dining. ₹1,200–₹2,000 for two"
                  ]}
                  cost="₹3,500–₹5,500 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Serenity Beach + Markets + Final French Quarter Walk"
                  items={[
                    "6:30am: Early morning at Serenity Beach (auto ₹150 one-way or scooty). Watch the surfers, walk the beach, have tea at one of the shacks — ₹20–₹40",
                    "9am: Back to town. Goubert Market — buy spices (curry leaves, star anise, black pepper — Pondy spices are noticeably fresher than tourist shops)",
                    "10:30am: Pondicherry Museum — free entry, small but excellent collection of French-era artefacts and Chola bronzes. 45 min",
                    "12pm: Final lunch — Carte Blanche for the best French meal in town, or Surguru for the best South Indian. Your call. ₹400–₹1,000 for two",
                    "1:30pm: Last walk through the French Quarter. Buy handmade paper from Aurobindho Handmade Paper Factory (₹100–₹500 for journals). Unique Pondy souvenir",
                    "Pick up Pondy's famous salted cashews and homemade chocolates from the shops on Mission Street"
                  ]}
                  cost="₹2,000–₹3,500 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹15,000–₹20,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — RELAXED ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Relaxed Plan — Heritage Boutique Hotel in White Town</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Palais de Mahe / La Villa / Gratitude · ₹4,000–₹8,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Slow Immersion — No Agenda, Just Pondy"
                  items={[
                    "Arrive, check into your heritage hotel. Most have pools — use them. Pondy rewards slow mornings",
                    "10am: Unhurried walk through the French Quarter with a filter coffee in hand. No map needed — it is a 12-block grid, you cannot get lost",
                    "The French Quarter is best at 6am before the Instagram influencers arrive. Rent a cycle, ride the empty streets, stop at Baker Street for a croissant",
                    "12pm: Lunch at Maison Perumal — colonial dining room, set Tamil lunch. ₹800–₹1,200 per person. The thali here is an experience, not just a meal",
                    "2pm: Sri Aurobindo Ashram — take your time. The bookshop has fascinating publications on consciousness and philosophy",
                    "3:30pm: Aurobindho Handmade Paper Factory — watch artisans make paper from cotton rags. Buy journals, lampshades. ₹200–₹800",
                    "5:30pm: Promenade walk. The War Memorial end is quieter than the Gandhi statue end",
                    "Dinner: The Promenade by Palais de Mahe — French fine dining with sea views. ₹2,500–₹4,000 for two"
                  ]}
                  cost="₹4,500–₹7,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Auroville + Paradise Beach (Full Day)"
                  items={[
                    "7am: Yoga session at your hotel or at Iyengar Yoga Centre near the Ashram — ₹300–₹500/session",
                    "8:30am: Hire a car with driver to Auroville (₹1,200–₹1,500 for half day). More comfortable than scooty on the Auroville road",
                    "Auroville is polarizing — some people find it life-changing, others find it pretentious. Give it 3 hours minimum before judging",
                    "Visit Matrimandir, walk the meditation gardens, explore the Auroville boutiques — Kalki sells stunning handloom saris and fabrics",
                    "12:30pm: Lunch at Tanto or Bread & Chocolate — the food quality at Auroville cafes is genuinely excellent. ₹600–₹1,000 for two",
                    "2:30pm: Chunnambar Boat House — boat to Paradise Beach. Paradise Beach by boat is genuinely stunning. By road is a dusty disappointment. Take the boat from Chunnambar",
                    "Pack a book. Spend 2–3 hours doing nothing on the sand. This is what Pondy is for",
                    "Evening: Skip restaurants. Ask your hotel if they can arrange a private terrace dinner — most heritage properties do this for ₹3,000–₹5,000 for two"
                  ]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Beaches, Cooking, and Farewell"
                  items={[
                    "6:30am: Serenity Beach sunrise — worth the early alarm. The fishing boats go out at dawn, and the light is extraordinary",
                    "8:30am: Back to hotel for breakfast. No rush",
                    "10am: Franco-Tamil cooking class — Sita Cultural Centre or The Storytrails Pondy run excellent half-day classes. ₹1,500–₹2,500 per person. You learn to make Pondy-style fish curry, rasam, and French-influenced chutneys",
                    "1pm: Eat what you cooked. Best meal of the trip because you made it",
                    "3pm: Final walk. Buy last souvenirs — incense from the Ashram shop, pottery from the boutiques on Vysial Street",
                    "Skip the tourist restaurants on the Promenade. Walk 2 streets inland to Rue Suffren for authentic Franco-Tamil food at half the price. One last dinner at ₹400–₹800 for two"
                  ]}
                  cost="₹4,000–₹6,500 for two (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹22,000–₹35,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">🧘 Relaxed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,500–₹3,000", "₹6,000–₹15,000", "₹12,000–₹24,000"],
                    ["🍽 Food & Drinks", "₹1,500–₹2,500", "₹4,000–₹7,000", "₹6,000–₹10,000"],
                    ["🚗 Transport", "₹500–₹800", "₹1,500–₹3,000", "₹2,500–₹4,000"],
                    ["🎯 Activities", "₹500–₹1,000", "₹1,500–₹3,000", "₹3,000–₹5,000"],
                    ["🛍 Shopping", "₹200–₹500", "₹500–₹1,500", "₹1,000–₹3,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹4,200–₹7,800","₹6,750–₹14,750","₹12,250–₹23,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Couple column is per person (divide by 2 for shared accommodation savings). Pondy is significantly cheaper than Goa.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Pondicherry"
            hotels={[
              { name: "Palais de Mahe", type: "Heritage Boutique · White Town", price: "From ₹5,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/hotel/in/palais-de-mahe.html?aid=2820480" },
              { name: "La Closerie", type: "French Quarter Guesthouse", price: "From ₹2,200/night", rating: "4", badge: "Couple pick", url: "https://www.booking.com/hotel/in/la-closerie-pondicherry.html?aid=2820480" },
              { name: "Gratitude Heritage", type: "Heritage Hotel · White Town", price: "From ₹3,500/night", rating: "5", badge: "Value", url: "https://www.booking.com/hotel/in/gratitude-pondicherry.html?aid=2820480" },
            ]}
            activities={[
              { name: "Auroville & Matrimandir Half-Day Tour", duration: "4 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=pondicherry&partner_id=PSZA5UI" },
              { name: "French Quarter Heritage Walking Tour", duration: "2.5 hours", price: "From ₹600/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=pondicherry&partner_id=PSZA5UI" },
              { name: "Paradise Beach Boat Trip + Lunch", duration: "4 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=pondicherry&partner_id=PSZA5UI" },
              { name: "Franco-Tamil Cooking Class", duration: "4 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=pondicherry&partner_id=PSZA5UI" },
            ]}
            pdfProductId="pondicherry-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Pondicherry — Must-See Places"
            subtitle="Click each thumbnail to explore Pondicherry's most iconic spots."
            spots={[
              { name: "White Town / French Quarter", query: "pondicherry french quarter yellow blue colonial buildings street", desc: "A 12-block grid of pastel colonial mansions, bougainvillea-draped walls, and quiet courtyards. Best explored by cycle at 6am." },
              { name: "Promenade Beach",             query: "pondicherry promenade beach seaside walkway evening crowd",       desc: "1.5km seaside promenade with the Gandhi statue, War Memorial, and Rock Beach pier. Best at sunset — the whole town comes out." },
              { name: "Auroville Matrimandir",       query: "auroville matrimandir golden sphere meditation centre",            desc: "The golden meditation sphere at the heart of Auroville. Outer viewing is free, inner chamber needs advance booking." },
              { name: "Paradise Beach",              query: "paradise beach pondicherry pristine sand boat lagoon",             desc: "Accessible by boat from Chunnambar — cleaner sand, calmer water, and far fewer people than the town beaches." },
              { name: "Serenity Beach",              query: "serenity beach pondicherry surfing waves morning golden",          desc: "Pondy's best swimming beach, 6km north of town. Surf lessons available. The fishing village backdrop is photogenic." },
            ]}
          />

          {/* ── FRENCH QUARTER IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="pondicherry white town colorful colonial street bougainvillea"
              fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80"
              alt="Pondicherry French Quarter colourful street with bougainvillea"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The French Quarter at 6:30am — no crowds, golden light, and the smell of fresh croissants from Baker Street. This is peak Pondy.
              </p>
            </div>
          </div>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="besttime" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <TipCard icon="✅" title="October – March (Best)" desc="Pleasant 22–30°C weather, low humidity, perfect for walking and cycling. December–January is peak season with slightly higher prices. February–March is the sweet spot." color="bg-teal-50 border-teal-200" />
              <TipCard icon="☀️" title="April – June (Avoid)" desc="Brutal 38–42°C heat with high humidity. Walking the French Quarter becomes genuinely unpleasant after 10am. Only go if you got a hotel deal you cannot refuse." color="bg-amber-50 border-amber-200" />
              <TipCard icon="🌧️" title="July – September (Monsoon)" desc="Heavy rain, some flooding. Beaches are rough and unsafe for swimming. Hotels are cheapest but the experience is diminished. Not recommended for a first visit." color="bg-blue-50 border-blue-200" />
              <TipCard icon="🌀" title="October – December (Cyclone Watch)" desc="East coast of India gets cyclones Oct–Dec. Usually just a day or two of heavy rain. Check weather forecast a week before travel. Do not cancel — just have a backup indoor day plan." color="bg-rose-50 border-rose-200" />
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Eating every meal on the Promenade", desc: "Skip the tourist restaurants on the Promenade. Walk 2 streets inland to Rue Suffren for authentic Franco-Tamil food at half the price.", icon: "🍽" },
                { title: "Driving to Paradise Beach", desc: "Paradise Beach by boat is genuinely stunning. By road is a dusty disappointment. Take the boat from Chunnambar. ₹200 return.", icon: "🚗" },
                { title: "Rushing Auroville in 1 hour", desc: "Auroville needs 3 hours minimum. The Matrimandir alone requires a 1km walk each way. People who spend 45 minutes call it a letdown. People who spend half a day call it transformative.", icon: "⏰" },
                { title: "Skipping the Tamil Quarter", desc: "Most tourists stay in White Town and never cross the canal. The Tamil Quarter has the best street food, the most interesting temples, and the real daily life of Pondy.", icon: "🛕" },
                { title: "Visiting on a public holiday weekend", desc: "Pondy is a 2.5hr drive from Chennai. Every long weekend, 50,000 Chennaiites descend. Hotels triple in price, streets are gridlocked. Check the holiday calendar before booking.", icon: "📅" },
                { title: "Expecting Goa-level beaches", desc: "Pondy beaches are not Goa. Promenade Beach has rocks, not sand. Go for the heritage, food, and quiet charm — the beaches are a bonus, not the main event.", icon: "🏖" },
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
                { icon: "🚲", title: "Cycle, Don't Drive", desc: "Pondy is flat and tiny. A cycle costs ₹100–₹150/day and gets you everywhere faster than a car in the narrow French Quarter streets. Plus — no parking headaches.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥐", title: "Baker Street at 7am", desc: "The croissants sell out by 9am on weekends. Get there early. The chocolate croissant is the best pastry in South India and costs ₹80.", color: "bg-amber-50 border-amber-200" },
                { icon: "☕", title: "Filter Coffee Protocol", desc: "Order 'filter kaapi' not 'coffee.' The local places on MG Road serve it in a steel tumbler-davara set for ₹15–₹30. The cafe versions at ₹150 are good but different.", color: "bg-teal-50 border-teal-200" },
                { icon: "📸", title: "Golden Hour Streets", desc: "The French Quarter faces east. Morning light (6–8am) is golden on the yellow and blue buildings. Afternoon light is harsh and flat. Plan your photo walk accordingly.", color: "bg-teal-50 border-teal-200" },
                { icon: "🐟", title: "Fish Curry Ranking", desc: "Surguru for budget Tamil meals. Villa Shanti for Franco-Tamil fusion. Le Dupleix for French fine dining. Carte Blanche for the most authentic French meal. All four are within walking distance.", color: "bg-rose-50 border-rose-200" },
                { icon: "🚌", title: "Chennai to Pondy Transport", desc: "ECR bus (₹150, 3.5hrs) is scenic but slow. SETC Volvo (₹350, 2.5hrs) is comfortable. Private car via ECR with Mahabalipuram stop (₹3,000–₹4,000) is best for couples.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Pondicherry itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Pondy Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Pondicherry?", a: "3 days is perfect. You get the French Quarter, Auroville, beaches, and food scene without rushing. 2 days feels cramped because Auroville alone needs half a day. 4–5 days is ideal if you want to add Pichavaram mangrove forest or do a yoga retreat." },
                { q: "What is the best time to visit Pondicherry?", a: "October to March. November–February has the most pleasant weather at 22–30°C. April–June is brutally hot (38–42°C) and should be avoided. October–December carries some cyclone risk but usually just means a day or two of rain." },
                { q: "How much does a 3-day Pondicherry trip cost?", a: "Budget solo: under ₹8,000 total. Couple mid-range: ₹15,000–₹20,000 for two. Relaxed/luxury: ₹22,000–₹35,000 for two. All include accommodation, food, transport and activities. Pondy is 30–40% cheaper than Goa." },
                { q: "Is Pondicherry worth visiting from Chennai?", a: "Absolutely. It is 150km, roughly 2.5–3 hours by road via the ECR coastal highway. The ECR drive itself is scenic with stops at Mahabalipuram possible. Weekend trips from Chennai are very common." },
                { q: "Do I need to book Auroville in advance?", a: "No advance booking for Auroville itself or the Matrimandir outer viewing (free, walk-in). The Matrimandir inner chamber meditation requires booking 2–3 days in advance at the Auroville Visitors Centre. Give Auroville at least 3 hours." },
                { q: "What is the best beach in Pondicherry?", a: "Paradise Beach for beauty (take the boat from Chunnambar). Serenity Beach for swimming and surfing. Promenade Beach for evening walks. Rock Beach for the pier and French Quarter backdrop. Do not expect Goa-level beaches — Pondy is a heritage town with beaches, not a beach destination." },
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
                { label: "Goa — 3 Day Beach & Coast Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Tamil Nadu Temple Circuit", href: "/blog/tamil-nadu-temples", soon: true },
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

          <RelatedGuides currentSlug="pondicherry-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
