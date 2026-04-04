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


const SHIMLA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "getting-there", emoji: "🚂", label: "Getting to Shimla" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Shimla 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Shimla in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ShimlaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹7k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "👨‍👩‍👧‍👦", label: "Family", sub: "₹8k–20k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹20k–35k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SHIMLA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Shimla" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="shimla christ church mall road himachal snow"
            alt="Shimla Christ Church and Mall Road with Himalayan mountain backdrop"
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
              <span className="text-white/70">Shimla 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Shimla in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, toy train logistics — and the mistakes that ruin most Shimla trips.
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
              <span>🇮🇳 Himachal Pradesh</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Kalka-Shimla toy train is a UNESCO ride but 5 hours long — take it one way for the experience, bus the other to save time. Shimla&apos;s Mall Road at 7am before the tourist swarm is genuinely charming — grab breakfast at Wake &amp; Bake cafe. That early morning walk alone is worth the trip.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="getting-there" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚂 Getting to Shimla</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three ways from Delhi. Each has a clear winner depending on your budget and time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                { title: "Volvo Bus", emoji: "🚌", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Duration","9–10 hours"],["Cost","₹800–₹1,200"],["Departs","Delhi ISBT, 8pm–10pm"],["Best for","Budget travellers"]],
                  note: "Overnight Volvo is the smart budget move — arrive by 7am, save a night's stay." },
                { title: "Toy Train", emoji: "🚂", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Duration","~5 hrs (Kalka–Shimla)"],["Cost","₹300–₹800"],["Via","Shatabdi to Kalka, then train"],["Best for","The experience itself"]],
                  note: "UNESCO World Heritage. 102 tunnels, 800+ bridges. Take it one way — bus back." },
                { title: "Taxi / Self-Drive", emoji: "🚗", bg: "bg-purple-50 border-purple-200", th: "text-purple-800",
                  rows: [["Duration","7–8 hours"],["Cost","₹4,000–₹7,000 (taxi)"],["Distance","350km via Chandigarh"],["Best for","Families, groups"]],
                  note: "Stop at Pinjore Gardens on the way. Mountain roads start after Solan — avoid driving at night." },
              ].map((mode) => (
                <div key={mode.title} className={`rounded-xl border p-5 ${mode.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${mode.th}`}>
                    <span>{mode.emoji}</span>{mode.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {mode.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">💡 {mode.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹5,500" />
            <StatCard icon="🌡" label="Best Months" value="Nov–Feb / Mar–Jun" />
            <StatCard icon="🏔" label="Altitude" value="2,205m" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Mall Road Area Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels or budget hotels near Mall Road · ₹500–₹1,200/night · Walk everywhere in town</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Mall Road, Ridge & Christ Church"
                  items={[
                    "Arrive Shimla by morning (overnight Volvo from Delhi is the budget move — saves a night's accommodation)",
                    "Drop bags at hostel. Walk to Mall Road immediately — it's the spine of Shimla and everything is on foot from here",
                    "Breakfast at Wake & Bake cafe on Mall Road — good coffee, mountain views, ₹150–₹250",
                    "Walk The Ridge: open plaza with views of the Himalayan ranges. Christ Church is right here — free entry, stunning neo-Gothic architecture",
                    "Scandal Point — where the Ridge meets Mall Road. The most photographed spot in Shimla, free",
                    "Afternoon: Walk down to Lakkar Bazaar — wooden toys and handicrafts. Good for small souvenirs, ₹50–₹300",
                    "Evening: Stroll Mall Road at sunset. Dinner at Sita Ram & Sons or Baljees — local thali ₹120–₹200"
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Jakhu Temple + Indian Institute of Advanced Study"
                  items={[
                    "7am: Hike to Jakhu Temple (2km uphill, 30–40 min walk). Massive Hanuman statue visible from everywhere in Shimla — best views of the snow line from the top",
                    "Keep food in your bag sealed — monkeys are aggressive on the Jakhu trail. Carry a stick, locals do",
                    "10am: Walk to Indian Institute of Advanced Study (former Viceregal Lodge). Guided tours ₹20, stunning British-era architecture surrounded by cedar forests",
                    "Lunch at Ashiana or Wake & Bake — budget ₹200–₹350",
                    "Afternoon: State Museum (₹20 entry) — Himachali art and miniature paintings, usually empty, 45 min",
                    "Evening: Enjoy Mall Road — the evening crowd is part of the experience. Street food momos ₹40–₹60"
                  ]}
                  cost="₹600–₹1,000 excluding accommodation" />
                <DayCard day="Day 3" title="Kufri or Mashobra + Departure"
                  items={[
                    "Kufri is honestly overrated in summer — go only if there's snow. Otherwise Mashobra is quieter and prettier",
                    "If snow season (Dec–Feb): Kufri for snow activities — horse riding ₹300–₹500, snow point views. Bus from Shimla ₹30, 45 min",
                    "If no snow: Mashobra instead — 20 min from Shimla, cedar forests, Craignano nature park. Peaceful, no crowds",
                    "Back to Shimla by 1pm. Last walk through Lower Bazaar — more local, less touristy than Mall Road",
                    "Pick up Himachali topi (cap) and shawl from Lower Bazaar — fixed price shops near the end, ₹200–₹600",
                    "Depart by afternoon bus or evening Volvo back to Delhi"
                  ]}
                  cost="₹500–₹900 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹5,500–₹7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — FAMILY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Family Plan — Heritage Hotel near Mall Road</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Mid-range hotel with heating · ₹2,500–₹5,000/night · Mix of walks and taxis</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Toy Train Arrival + Mall Road Evening"
                  items={[
                    "Take the Kalka-Shimla toy train — book the rail car class for families (₹500–₹800/person). Kids absolutely love the tunnels and bridges",
                    "The toy train takes about 5 hours but the views through pine valleys make it genuinely special. Pack snacks and games for kids",
                    "Arrive Shimla by afternoon. Check in, rest — altitude adjustment matters for children",
                    "4pm: Easy walk along Mall Road and The Ridge. Christ Church is lit up beautifully in the evening",
                    "Scandal Point photo stop — the whole town stretches below you. Free and perfect at golden hour",
                    "Dinner at Cafe Simla Times or Baljees — family-friendly, ₹800–₹1,500 for four"
                  ]}
                  cost="₹3,000–₹5,000 for a family of four (excl. accommodation)" />
                <DayCard day="Day 2" title="Jakhu Temple + Viceregal Lodge + Lakkar Bazaar"
                  items={[
                    "8am: Take the Jakhu ropeway if available (₹250/person return), or hire ponies for kids (₹300–₹500). Walk is steep for small children",
                    "Jakhu Temple — 108ft Hanuman statue. Panoramic views of snow peaks on clear mornings. 45 min at the top",
                    "Warning: keep all food bags zipped and carry a stick. Monkeys here are not shy",
                    "11am: Indian Institute of Advanced Study — the grand Viceregal Lodge. Guided tour ₹20, gorgeous lawns for kids to run around. The building itself is stunning Jacobethan architecture",
                    "Lunch at Cafe Sol or Honey Hut — good for families, ₹1,000–₹1,800 for four",
                    "Afternoon: Lakkar Bazaar for wooden toys — kids love picking out hand-carved animals (₹80–₹400). Then Gaiety Theatre facade photo stop",
                    "Evening: Lower Bazaar walk — let kids try roasted corn (₹20) and kulfi (₹30). More authentic than Mall Road"
                  ]}
                  cost="₹2,500–₹4,500 for a family of four (excl. accommodation)" />
                <DayCard day="Day 3" title="Kufri / Mashobra Day Trip + Departure"
                  items={[
                    "Hire a taxi for the day — ₹1,500–₹2,500 for Kufri round trip, worth it with kids",
                    "If snow (Dec–Feb): Kufri is magical — snow activities, horse rides through snowy trails, kids will remember it forever",
                    "If no snow: drive to Mashobra (20 min) — Craignano nature park has easy walking trails through deodars, picnic spots, and zero crowds. Much better than tourist-trap Kufri in summer",
                    "Stop at Green Valley viewpoint on the way — dense pine forests, good for 15-min photo break",
                    "Back to Shimla by 1pm. Quick shopping on Mall Road — Himachali shawls, woolens, and apple products",
                    "Depart by taxi to Chandigarh or Kalka (3–4 hours) for evening train/flight. Or book a Volvo bus."
                  ]}
                  cost="₹3,500–₹5,500 for a family of four (excl. accommodation)" />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (family of 4) · </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–₹20,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Heritage Property or Boutique Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Wildflower Hall, Oberoi Cecil, or Clarke&apos;s Hotel · ₹8,000–₹20,000/night · Private car throughout</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Scenic Drive + Heritage Walk + Fine Dining"
                  items={[
                    "Private car from Chandigarh — stop at Barog for breakfast (the tunnel town has colonial charm, 20 min break)",
                    "Arrive Shimla by noon. Check in to heritage property — Oberoi Cecil on Mall Road or Wildflower Hall in Mashobra for mountain seclusion",
                    "3pm: Private heritage walk of Shimla — Christ Church interior, Gaiety Theatre (if open), the colonial library, and Scandal Point. A local guide makes the history come alive (₹1,500–₹2,500 for 2 hours)",
                    "The Ridge at golden hour — the snow-capped Himalayan skyline from here is Shimla at its absolute best",
                    "Dinner at Oberoi Cecil's restaurant or Eighteen71 Cookhouse & Bar — ₹3,000–₹5,000 for two"
                  ]}
                  cost="₹6,000–₹10,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Toy Train Experience + Viceregal Lodge + Sunset"
                  items={[
                    "Morning: Kalka-Shimla toy train — book just the scenic 2-hour section from Shimla to Barog and back (private car meets you). You get the best tunnels and bridges without the full 5-hour journey",
                    "The stretch through tunnel 33 (the longest at 1.1km) and the Kanoh curve is the most photogenic part of the entire route",
                    "11am: Indian Institute of Advanced Study (Viceregal Lodge) — private guided tour of the building where India's partition was discussed. Immaculate gardens, cedar-lined walks",
                    "Lunch at Cafe Simla Times — heritage setting, ₹1,500–₹2,500 for two",
                    "Afternoon: Drive to Mashobra (20 min) — Craignano nature park for a quiet cedar forest walk. Or visit the Wildflower Hall grounds if staying there",
                    "Sunset: Return to The Ridge. Evening: Chef's table or room dining at your hotel"
                  ]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Naldehra + Green Valley + Departure"
                  items={[
                    "Private car to Naldehra (22km, 45 min) — India's oldest golf course, set on a hilltop surrounded by deodars. Even non-golfers can walk the course and enjoy the views. ₹100 entry",
                    "Tea at Naldehra Golf Club — colonial-era clubhouse with mountain views, genuinely peaceful",
                    "Drive through Green Valley — the dense pine canopy road is one of the most scenic drives in Himachal",
                    "If time permits: Tattapani (50 km) for natural hot water springs on the Sutlej river bank — ₹100 entry, deeply relaxing 1-hour stop",
                    "Back to Shimla by 1pm. Last walk through Mall Road — pick up premium Himachali shawls from Handloom emporium (₹2,000–₹8,000 for authentic pashmina)",
                    "Depart by private car to Chandigarh airport/station"
                  ]}
                  cost="₹4,000–₹7,000 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹20,000–₹35,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">👨‍👩‍👧‍👦 Family</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,500–₹3,600", "₹7,500–₹15,000", "₹24,000–₹60,000"],
                    ["🍽 Food & Drinks", "₹1,200–₹2,000", "₹4,000–₹7,000", "₹8,000–₹15,000"],
                    ["🚌 Transport", "₹900–₹1,500", "₹3,500–₹6,000", "₹6,000–₹10,000"],
                    ["🎯 Activities", "₹200–₹500", "₹1,500–₹3,000", "₹3,000–₹6,000"],
                    ["🛍 Shopping", "₹200–₹600", "₹1,000–₹3,000", "₹3,000–₹8,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹5,500–₹7,000","₹8,000–₹20,000","₹20,000–₹35,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              Budget = per person. Family = family of 4. Premium = for two. All prices INR 2026. Winter season (Dec–Jan) rates are 30–50% higher.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Shimla"
            hotels={[
              { name: "Hotel Combermere", type: "Heritage Budget · Mall Road", price: "From ₹1,800/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/combermere-shimla.html?aid=2820480" },
              { name: "Clarke's Hotel", type: "Heritage Classic · Mall Road", price: "From ₹5,500/night", rating: "4", badge: "Family pick", url: "https://www.booking.com/hotel/in/clarkes-shimla.html?aid=2820480" },
              { name: "Wildflower Hall", type: "Luxury Oberoi · Mashobra", price: "From ₹18,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/wildflower-hall-shimla.html?aid=2820480" },
            ]}
            activities={[
              { name: "Kalka-Shimla Toy Train Experience", duration: "5 hours", price: "From ₹300/person", badge: "Must do", url: "https://www.getyourguide.com/shimla-l2034/?partner_id=PSZA5UI" },
              { name: "Shimla Heritage Walking Tour", duration: "2.5 hours", price: "From ₹800/person", badge: "Cultural", url: "https://www.getyourguide.com/shimla-l2034/heritage/?partner_id=PSZA5UI" },
              { name: "Kufri Snow Adventure Day Trip", duration: "Half day", price: "From ₹1,200/person", url: "https://www.getyourguide.com/shimla-l2034/kufri/?partner_id=PSZA5UI" },
              { name: "Mashobra & Naldehra Nature Drive", duration: "Full day", price: "From ₹2,000/person", url: "https://www.getyourguide.com/shimla-l2034/naldehra/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="shimla-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Shimla — Must-See Places"
            subtitle="Click each thumbnail to explore Shimla's most iconic colonial, spiritual and natural landmarks."
            spots={[
              { name: "Christ Church",              query: "christ church shimla colonial architecture yellow building hill station",   desc: "The second oldest church in North India, built in 1857. Neo-Gothic stained glass windows and a stunning Ridge backdrop. Free entry, best photographed at golden hour." },
              { name: "Mall Road",                  query: "shimla mall road evening colonial buildings mountain town",                 desc: "The pedestrian heart of Shimla — colonial-era buildings, cafes, shops, and mountain views. Come at 7am for the real experience, before the tourist crowd arrives." },
              { name: "Jakhu Temple",               query: "jakhu temple shimla hanuman statue hilltop mountain view",                  desc: "Perched at 2,455m with a 108ft Hanuman statue. The highest point in Shimla with panoramic snow-peak views. Steep 2km hike — watch out for monkeys." },
              { name: "Kalka-Shimla Railway",        query: "kalka shimla toy train railway mountain bridge tunnel heritage",            desc: "UNESCO World Heritage railway with 102 tunnels and 800+ bridges through the Himalayan foothills. One of the great train journeys of the world." },
              { name: "Indian Institute of Advanced Study", query: "viceregal lodge shimla british colonial building garden",           desc: "The former summer residence of the British Viceroy. Jacobethan architecture surrounded by manicured gardens and cedar groves. Guided tours for ₹20." },
            ]}
          />

          {/* ── SHIMLA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="shimla ridge panoramic view himalayan mountains snow colonial town"
              alt="The Ridge in Shimla with panoramic Himalayan mountain views"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Ridge at 7am — no crowds, clear mountain views, and the colonial architecture of Christ Church catching the first light. This is the Shimla most tourists never see.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Kufri in summer expecting snow", desc: "Without snow, Kufri is pony rides and souvenir shops. Go only Dec–Feb for snow. Otherwise, Mashobra or Naldehra are far more rewarding.", icon: "🏔" },
                { title: "Staying on Cart Road instead of Mall Road", desc: "Cart Road is noisy, far from everything, and you'll waste money on taxis. Pay ₹500 more to stay walking distance from Mall Road.", icon: "🏨" },
                { title: "Skipping the toy train entirely", desc: "Yes, it's 5 hours. But it's a UNESCO Heritage experience with 102 tunnels. Take it one way — bus or taxi the other direction.", icon: "🚂" },
                { title: "Driving into Mall Road zone", desc: "Vehicles are banned on Mall Road. Park at Cart Road or Lakkar Bazaar and walk. Most of central Shimla is pedestrian-only — that's the charm.", icon: "🚗" },
                { title: "Going during peak season without booking", desc: "Dec 25–Jan 2 and May–June weekends: prices double, Mall Road is elbow-to-elbow. Book 2 months ahead or go mid-week.", icon: "📅" },
                { title: "Feeding the Jakhu monkeys", desc: "They'll snatch bags, glasses, phones. Carry a stick on the Jakhu trail, keep all food sealed. Locals know — tourists learn the hard way.", icon: "🐒" },
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
                { icon: "🌅", title: "The 7am Mall Road Rule", desc: "Shimla's Mall Road at 7am before the tourist swarm is genuinely charming — grab breakfast at Wake & Bake cafe. By 10am it's a different place entirely.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚂", title: "Toy Train Hack", desc: "The Kalka-Shimla toy train is a UNESCO ride but 5 hours long — take it one way for the experience, bus the other to save time. Book rail car class, not ordinary.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏔", title: "Skip Kufri, Try Mashobra", desc: "Kufri is honestly overrated in summer — go only if there's snow. Otherwise Mashobra is quieter and prettier. Craignano nature park has zero crowds and cedar forests.", color: "bg-sky-50 border-sky-200" },
                { icon: "🧥", title: "Layer Up — Always", desc: "Even in May–June, Shimla evenings drop to 10–15°C. Carry a light jacket always. In winter, thermals and a proper down jacket are non-negotiable.", color: "bg-sky-50 border-sky-200" },
                { icon: "📱", title: "Cash Over UPI Above Kufri", desc: "Network coverage drops sharply beyond Kufri and in Mashobra. Carry cash — ₹2,000–₹3,000 minimum. ATMs are only reliable on Mall Road.", color: "bg-purple-50 border-purple-200" },
                { icon: "📆", title: "Best Time — Month by Month", desc: "Nov–Feb ❄️ snow, magical | Mar–Apr 🌸 clear skies, quiet | May–Jun ☀️ pleasant but crowded weekends | Jul–Sep 🌧 avoid, landslides | Oct 🍂 clear, underrated", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Shimla itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Shimla Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Shimla?", a: "3 days is ideal to cover Mall Road, Ridge, Jakhu Temple, Christ Church, the Viceregal Lodge, and a day trip to Kufri or Mashobra. 5 days lets you add Naldehra, Chail, and the full toy train experience at a relaxed pace." },
                { q: "What is the best time to visit Shimla?", a: "November to February for snow and winter charm — December-January sees the most snowfall. March to June for pleasant weather ideal for families. Avoid monsoon season (July-September) due to landslides and road closures." },
                { q: "How much does a 3-day Shimla trip cost?", a: "Budget per person: ₹5,500–₹7,000 including accommodation. Family of four mid-range: ₹8,000–₹20,000. Premium for two: ₹20,000–₹35,000. All include stay, food, transport and activities." },
                { q: "Is the Kalka-Shimla toy train worth it?", a: "Absolutely — it's a UNESCO World Heritage ride through 102 tunnels and 800+ bridges. It takes about 5 hours though. The smart move is taking it one way for the experience and a bus or taxi the other way." },
                { q: "Is Kufri worth visiting?", a: "Only if there's snow — typically December to February. In summer, Kufri is tourist-trap pony rides and overpriced stalls. Mashobra (20 min from Shimla) is quieter, prettier, and has actual nature walks through cedar forests." },
                { q: "How do I reach Shimla from Delhi?", a: "Overnight Volvo bus (9-10 hours, ₹800-₹1,200) is the budget winner. Kalka-Shimla toy train via Shatabdi to Kalka (total 10-11 hours) for the experience. Private taxi via Chandigarh (7-8 hours, ₹4,000-₹7,000) for comfort and families." },
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
                { label: "Manali — 4 Day Adventure Guide", href: "/blog/manali-4-days", soon: true },
                { label: "Goa in 3 Days — Beach & Coast", href: "/blog/goa-3-days", soon: false },
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

          <CombineWith currentSlug="shimla-3-days" />
          <RelatedGuides currentSlug="shimla-3-days" />
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
