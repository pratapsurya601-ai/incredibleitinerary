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

const RANAKPUR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "temple",    emoji: "🛕", label: "Temple Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ranakpur 1-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Ranakpur Jain Temple guide — 1444 marble pillars&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
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
export default function RanakpurClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹2k total — day trip from Udaipur", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹2k–6k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={RANAKPUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ranakpur" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Jain temple marble pillars Rajasthan India architecture"
            fallback="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85"
            alt="Marble pillars of Ranakpur Jain temple in Rajasthan, India"
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
              <span className="text-white/70">Ranakpur 1 Day</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Architecture
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ranakpur in 1 Day: 1,444 Marble Pillars
                <em className="italic text-gold-light"> &amp; Jainism&apos;s Finest Temple</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The 15th-century Chaturmukha Dharana Vihara — 1,444 pillars, all carved differently, none repeated. A perfect day trip between Udaipur and Jodhpur.
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
              <span>🗓 1 Day</span>
              <span>·</span>
              <span>💰 From ₹1,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Standing inside the Chaturmukha Dharana Vihara, trying to count the pillars and losing my place for the fourth time, I realised the architects had deliberately made it impossible. The confusion is part of the design.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most travellers rushing between Udaipur and Jodhpur treat Ranakpur as a roadside stop — they give it 45 minutes and wonder what the fuss is about. That is the wrong approach. The Chaturmukha Dharana Vihara, built between 1437 and 1458 CE, is the largest and most architecturally complex Jain temple in India. Its 1,444 marble pillars — not one of which repeats a design — are carved with a level of detail that took craftsmen decades to achieve. Give it 3 hours minimum.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🏛️" label="Built" value="1437–1458 CE" />
            <StatCard icon="🏗️" label="Pillars" value="1,444 (all unique)" />
            <StatCard icon="🚗" label="Distance from Udaipur" value="96 km" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ranakpur is a year-round destination but the experience changes dramatically by time of day and season.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "Pleasant temperatures (15–28°C). The marble does not overheat in winter. Morning light through the marble lattice is extraordinary. Best overall experience.", color: "bg-emerald-50 border-emerald-200" },
                { season: "9–11 AM", emoji: "🌅", title: "Best Time of Day", desc: "The marble jharokha (lattice) windows filter morning sunlight into dramatic shafts. The pillars cast moving geometric shadows. This 2-hour window is the most photogenic and atmospheric time inside the temple.", color: "bg-amber-50 border-amber-200" },
                { season: "Apr–Jun", emoji: "🌡️", title: "Summer — Manageable", desc: "Hot (30–40°C) but the interior of the marble temple stays cooler than outside. Still worth visiting — just arrive early and leave by noon. Avoid the heat of the afternoon.", color: "bg-rose-50 border-rose-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Ranakpur is best as a day trip. The overnight option is for those who want early morning access and a more relaxed pace.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Base</td><td className="py-2.5 px-4">Day trip from Udaipur</td><td className="py-2.5 px-4">Overnight at Ranakpur resort</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared taxi or bus</td><td className="py-2.5 px-4">Private car hire</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Day trip — no stay</td><td className="py-2.5 px-4">Ranakpur Hill Resort ₹3,500–6,000</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹2,000</td><td className="py-2.5 px-4 font-medium text-teal">₹2,000–6,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              One focused day — the Chaturmukha Dharana Vihara, the Surya Narayan Temple, the Amba Mata Temple, and the forest setting.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <DayCard
                day="Day Visit"
                title="Ranakpur — Chaturmukha, Surya Narayan & Forest Setting"
                items={[
                  activeTab === "A"
                    ? "Day trip from Udaipur (96 km, 2 hrs by road) or Jodhpur (162 km, 3 hrs). Shared taxi from Udaipur: ₹300–400 per person. Private taxi hire: ₹1,200–1,800 return."
                    : "Drive from Udaipur or Jodhpur in a private car. Stay overnight at Ranakpur Hill Resort (₹3,500–6,000) for sunrise access at 6 AM — extraordinary light through the marble lattice in the early morning.",
                  "Arrive at the Chaturmukha Dharana Vihara — the main Jain temple. Entry for Indians: free. Camera fee: ₹100. Remove all leather items before entering (shoes, belts, leather wallets — leave in the car or at the entrance locker).",
                  "The temple: 29 halls, 80 domes, 1,444 columns. Each column is carved differently — not one repeats. Yet the entire complex feels cohesive. Spend at least 2 hours exploring the full interior.",
                  "The 4 faces of the main idol face all 4 cardinal directions — hence 'Chaturmukha' (four-faced). Stand at the centre of the main hall and see all 4 faces simultaneously.",
                  "The ceiling domes — the most remarkable architectural feature. The carved marble domes project outward without any supporting pillar beneath their edge. The geometry appears structurally impossible. Architects still debate how they were executed.",
                  "Walk 500m to the Surya Narayan Temple (15th century sun temple in the same complex). Then the Amba Mata Temple nearby — a tribal goddess shrine existing alongside the Jain complex. An unusual and fascinating religious coexistence.",
                  "Lunch at the complex dhaba (simple thali, ₹150–200). Non-vegetarian food is not permitted inside the complex.",
                  activeTab === "A"
                    ? "Return to Udaipur by 6 PM. Estimated visit: 3–4 hours at Ranakpur."
                    : "Overnight guests can access the temple at 6 AM before crowds arrive. Morning light creates extraordinary shadows through the marble lattice windows. This is the best time to photograph the pillars.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹4,000–6,500"}
              />
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temple" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Inside the Temple</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What to look for inside the Chaturmukha Dharana Vihara — the features most visitors miss.
            </p>
            <div className="space-y-4">
              {[
                { feature: "The 1,444 Pillars", note: "Legend says no one has ever counted them twice and got the same number. The complex is designed with deliberate visual confusion — corridors loop back, identical-looking areas from different angles. Spend 20 minutes trying to count. You won't succeed.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { feature: "The Ceiling Domes", note: "80 domes of intricately carved marble. The most technically complex ones project outward without visible support beneath their edges — a structural feat that architects still debate. Look up at the centre of each hall.", emoji: "🔵", color: "bg-amber-50 border-amber-200" },
                { feature: "The Jharokha Windows", note: "Marble lattice screens filter sunlight into geometric shafts. Between 9–11 AM, the interior fills with moving patterns of light and shadow. The effect changes as the sun moves — no two photographs taken 30 minutes apart look the same.", emoji: "🌅", color: "bg-teal-50 border-teal-200" },
                { feature: "The Four-Faced Idol", note: "The main Adinatha idol has 4 faces, each facing a cardinal direction. Stand exactly at the geometric centre of the main hall — all 4 faces are visible simultaneously. This is the meaning of 'Chaturmukha.'", emoji: "🧭", color: "bg-teal-50 border-teal-200" },
                { feature: "The Navaranga Mandapa", note: "The central nine-panel hall has the most complex pillar carvings in the entire complex. Each panel features different celestial beings, nature scenes, and Jain cosmological imagery. Allow extra time here.", emoji: "✨", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.feature} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-2">{f.feature}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Jain temple white marble columns intricate carving India"
              fallback="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
              alt="Intricate white marble pillar carvings inside a Jain temple in Rajasthan"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Each of the 1,444 pillars carries unique carvings. The craftsmen who built the Chaturmukha Dharana Vihara worked from 1437 to 1458 CE — 21 years to complete this single complex.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹2,000", color: "bg-amber-50 border-amber-200",
                  items: [["Transport from Udaipur (return)", "₹600–800"], ["Temple entry + camera fee", "₹100–200"], ["Lunch at complex dhaba", "₹200–300"], ["Miscellaneous", "₹100–200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹2,000–6,000", color: "bg-teal-50 border-teal-200",
                  items: [["Private car Udaipur–Ranakpur (return)", "₹1,200–1,800"], ["Stay at Ranakpur Hill Resort", "₹3,500–6,000"], ["Temple entry + camera fee", "₹100–200"], ["Meals", "₹500–800"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Temple entry is free for Indians; camera fee ₹100–200 applies. Non-Jains may enter 12 PM–5 PM. Overnight option requires advance booking.
            </p>
          </section>

          <AffiliateBlock destination="Ranakpur" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving After Noon as a Non-Jain", desc: "Non-Jain visitors are only allowed from 12 PM–5 PM. But the best light inside the temple (9–11 AM) is during Jain-only hours. To access early morning light, either be Jain or get special written permission from the temple trust in advance.", icon: "⏰" },
                { title: "Wearing Leather Inside the Complex", desc: "No leather is permitted inside the temple complex. Shoes must be left outside (there are lockers). Leather belts, wallets, and bags must also be left outside or in your vehicle. This is a strict rule — not a suggestion.", icon: "👟" },
                { title: "Giving It Only 45 Minutes", desc: "The #1 tourist mistake at Ranakpur. You need at minimum 2 hours for the main temple alone. Most of the architectural details — the ceiling domes, the lattice windows, the navaranga mandapa — are easy to miss if you walk through quickly.", icon: "⌛" },
                { title: "Missing the Surya Narayan Temple", desc: "500m from the main Jain temple, this 15th-century sun temple is overlooked by most visitors. A perfectly preserved small temple with excellent stone carvings. Add 30 minutes for it.", icon: "🌞" },
                { title: "Not Planning for the Return Journey", desc: "Ranakpur has very limited public transport. Shared taxis back to Udaipur can be hard to find after 4 PM. Book a return taxi or arrange transport in advance — don't rely on finding something at the roadside.", icon: "🚗" },
                { title: "Bringing Non-Vegetarian Food", desc: "Strictly non-vegetarian-free zone. Don't pack non-veg food in your bag to eat inside the complex. The surrounding area is also predominantly vegetarian. Plan your meals accordingly.", icon: "🥗" },
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
                { icon: "🌅", title: "Best Light in the Temple: 9–11 AM", desc: "The marble lattice windows (jharokhas) filter sunlight into dramatic shafts inside the temple. The effect is extraordinary between 9–11 AM. The pillars cast geometric shadows that move as the sun moves. Don't arrive after noon.", color: "bg-amber-50 border-amber-200" },
                { icon: "👗", title: "Dress Code is Strict", desc: "No leather (shoes, belts, wallets must be left outside), no non-vegetarian food, no smoking. Women must cover legs, arms, and hair. Menstruating women traditionally do not enter (follow your own judgment). Photography is allowed in the outer areas.", color: "bg-amber-50 border-amber-200" },
                { icon: "🔍", title: "Counting the Pillars", desc: "Legend says no one has ever counted exactly 1,444 pillars and gotten the same number twice. The complex is designed with deliberate visual confusion — corridors that loop back, identical-looking areas from different angles. Spend 20 minutes just trying to count.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "The Forest Setting", desc: "Ranakpur is set in a forested valley in the Aravalli hills. Leopards have been spotted in the surrounding Ranakpur Wildlife Sanctuary (nearby). The serene setting adds to the temple's otherworldly atmosphere.", color: "bg-teal-50 border-teal-200" },
                { icon: "⏰", title: "Temple Timings", desc: "Open daily 12 PM–5 PM for non-Jains (morning hours 7 AM–12 PM for Jains only). If you can get written permission from the temple trust, early morning (7–9 AM) entry is the most beautiful time. Contact the trust in advance.", color: "bg-rose-50 border-rose-200" },
                { icon: "🚗", title: "En-Route Between Udaipur and Jodhpur", desc: "Ranakpur is perfectly located on NH62 between Udaipur (96 km) and Jodhpur (162 km). Most travelers stop here during the Udaipur–Jodhpur road journey. Don't rush through — allow 3–4 hours at minimum.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll plan your Udaipur–Ranakpur–Jodhpur route with timing and transport within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ranakpur Visit →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How is Ranakpur different from Dilwara Temple (Mount Abu)?", a: "Both are masterpieces of Jain marble architecture. Dilwara (5th–13th century) is older and has more intricate ceiling work. Ranakpur (15th century) is larger and has the extraordinary pillar system. Both are must-visits for architecture lovers — Ranakpur wins on scale; Dilwara on ceiling detail." },
                { q: "Can non-Jains visit Ranakpur Temple?", a: "Yes — non-Jains are welcome from 12 PM–5 PM daily. Morning hours (7 AM–12 PM) are reserved for Jain worshippers. Remove all leather items before entry and dress modestly. The temple complex is managed by the Shri Vardhman Sthanik Jain Shravak Sangh Trust." },
                { q: "How long does it take to properly see Ranakpur?", a: "Minimum 2 hours for the main temple, another 30 minutes for the Surya Narayan Temple. Add 30 minutes for photography. 3 hours total is ideal. If you're an architecture enthusiast, you could spend 5+ hours here." },
                { q: "Is there accommodation near Ranakpur?", a: "Ranakpur Hill Resort (₹3500–6000) is the main option near the temple. The Maharani Bagh Orchard Retreat (heritage property, ₹4000–7000) is 5 km away. Most travelers make it a day trip from Udaipur. If staying overnight, book well ahead — options are limited." },
                { q: "What are the rules about photography inside Ranakpur temple?", a: "Photography is allowed in the outer courtyards and from outside the main sanctum. Inside the inner sanctum and near the main idol, photography is restricted. Camera/video fees apply (₹100–200). Drone photography is not permitted in or around the temple complex." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Ranakpur — Highlights"
            subtitle="The best of Ranakpur in photos."
            spots={[
              { name: "Ranakpur Landscape", query: "ranakpur india landscape scenic beautiful travel", desc: "The stunning landscapes of Ranakpur." },
              { name: "Ranakpur Temple", query: "ranakpur temple architecture heritage india", desc: "Historic temples and architecture in Ranakpur." },
              { name: "Ranakpur Street Scene", query: "ranakpur street market local culture india", desc: "Local life and culture in Ranakpur." },
              { name: "Ranakpur Nature", query: "ranakpur nature hills forest river india", desc: "Natural beauty around Ranakpur." },
              { name: "Ranakpur Sunset", query: "ranakpur sunset golden hour india travel", desc: "Ranakpur at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Rajasthan Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Udaipur — 4 Day City of Lakes", href: "/blog/udaipur-4-days" },
                { label: "Jodhpur — 3 Day Blue City Guide", href: "/blog/jodhpur-3-days" },
                { label: "Mount Abu — 2 Days in Rajasthan's Hills", href: "/blog/mount-abu-2-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="ranakpur-1-day" />
          <RelatedGuides currentSlug="ranakpur-1-day" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
