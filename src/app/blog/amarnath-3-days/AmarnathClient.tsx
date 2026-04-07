"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const AMARNATH_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "routes",    emoji: "🗺️", label: "Routes & Access" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Amarnath Yatra 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Amarnath Yatra in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AmarnathClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹8k–25k total with helicopter", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AMARNATH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Amarnath" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="himalayan mountain snow pilgrimage high altitude"
            fallback="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85"
            alt="High-altitude Himalayan snow landscape on the Amarnath Yatra route"
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
              <span className="text-white/70">Amarnath 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage & Trek
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Amarnath Yatra in 3 Days: Ice Shiva Lingam
                <em className="italic text-gold-light"> &amp; High-Altitude Pilgrimage</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Complete 2026 guide — helicopter vs trek, Pahalgam vs Baltal, mandatory RFID registration, medical certificate, and a full budget breakdown.
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
              <span>💰 From ₹6,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Standing inside the cave at 3,888m, watching pilgrims offer prayers to an ice formation shaped by nothing but dripping water and freezing air — I understood something about faith that no temple in a city had ever shown me.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            The Amarnath Yatra is not a tourist attraction. It is one of the most demanding, most spiritually charged, and most logistically complex pilgrimage experiences in the world. Every year, hundreds of thousands of pilgrims — young and old, fit and fragile — complete a 36–46 km round trek through Himalayan terrain to reach a cave at 12,756 feet. The mandatory RFID registration, medical certificate requirement, and strict age limits are not bureaucratic hurdles: they are safeguards that have saved lives. Read this guide before you book anything.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="⛰️" label="Altitude" value="3,888 m (12,756 ft)" />
            <StatCard icon="🥾" label="Trek Distance" value="36–46 km round trip" />
            <StatCard icon="📅" label="Yatra Season" value="July–August" />
            <StatCard icon="⭐" label="Rating" value="4.9★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 When to Do the Amarnath Yatra</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The yatra season is fixed by the Hindu calendar and is non-negotiable. Plan accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Jul–Aug", emoji: "✅", title: "Yatra Season", desc: "The official Amarnath Yatra runs approximately 45 days — from Shravani Purnima to Raksha Bandhan. Exact dates vary by year. July sees the largest crowds (safer weather). August can bring heavy snowfall.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Early Jul", emoji: "🌤️", title: "Best Window", desc: "First two weeks of July offer the most stable weather, best trail visibility, and most organized logistics. The ice lingam is also at or near its peak size (grows with waxing moon).", color: "bg-amber-50 border-amber-200" },
                { season: "Outside Season", emoji: "❌", title: "Cave is Closed", desc: "The Amarnath Cave is inaccessible outside the official yatra period — trails are closed and buried under snow. Registration is not accepted outside the season. There are no exceptions.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same pilgrimage, two very different physical commitments. The helicopter changes everything for those with fitness concerns.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Access</td><td className="py-2.5 px-4">Full 3-day Pahalgam trek</td><td className="py-2.5 px-4">Helicopter to Panjtarni + short trek</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Government tents ₹500–800/night</td><td className="py-2.5 px-4">Private guesthouses + luxury tented camps</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Trek distance</td><td className="py-2.5 px-4">36 km one way (3 days)</td><td className="py-2.5 px-4">6 km one way from Panjtarni</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹8,000</td><td className="py-2.5 px-4 font-medium text-teal">₹8,000–₹25,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, register, acclimatize at Pahalgam. Day 2: Pahalgam to Sheshnag Lake (14 km trek). Day 3: Sheshnag to Holy Cave and darshan, return.
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
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive, Register & Acclimatize at Pahalgam"
                items={[
                  "Fly or take a train to Jammu or Srinagar. From Srinagar, Pahalgam is 90 km (3 hrs by road).",
                  "Register your yatra online at shriamarnathjishrine.com before travelling — the RFID slip is mandatory at every checkpoint. Registration fee: ₹100 for Indians. Without the RFID slip, you cannot proceed past the first checkpoint.",
                  "Medical certificate from a government-recognized hospital is mandatory. The certificate must confirm fitness for high altitude — specifically BP, heart health, and general fitness. Pilgrims with heart conditions, severe hypertension, or pregnancy are not permitted. Apply 30–45 days before yatra.",
                  "Arrive at Pahalgam base camp (2,130m). Government tents ₹500–800/night. Private guesthouses ₹800–1,500/night.",
                  activeTab === "A"
                    ? "Budget option: government tent accommodation at the base camp. Basic but functional — you'll be spending all your energy on the trek, not the room."
                    : "Comfortable option: private guesthouse in Pahalgam town with proper beds and meals. Save your energy for the trek rather than the ground.",
                  "Rest and acclimatize. Do not attempt any strenuous activity on Day 1. Walk slowly, drink 3–4 litres of water. Altitude sickness can affect even fit people — the acclimatization day at Pahalgam is built into the Pahalgam route for exactly this reason.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹5,000–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Pahalgam to Sheshnag Lake (Pahalgam Route)"
                items={[
                  activeTab === "A"
                    ? "Pahalgam Route (Budget): Auto to Chandanwari starting point — 16 km from Pahalgam (₹200 per person by shared auto)."
                    : "Comfortable: Private vehicle to Chandanwari. Then helicopter from Pahalgam to Panjtarni (₹3,200–4,500 one way, lottery-based booking at shriamarnathjishrine.com). Saves 14 km of trekking.",
                  "Chandanwari to Pissu Top (11,120 ft): The first pass. This climb is steep and at altitude — take it slow. Many pilgrims struggle here on Day 2 before acclimatization has fully set in.",
                  "Pissu Top to Sheshnag Lake (11,730 ft): A beautiful descent to one of the most scenic campsites on the route. The lake reflects the surrounding peaks. Overnight camp here.",
                  "Trek Day 2 total: 14 km, 6–8 hours of walking. Pace yourself — the Mahagunus Pass tomorrow is harder.",
                  "Langars (free community kitchens) at multiple points along the route — hot food, chai, and glucose drinks. You will not go hungry.",
                  "Medical posts are stationed at every major camp. Report any symptoms of altitude sickness (headache, nausea, dizziness) immediately to medical staff.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹6,000–8,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Sheshnag to Holy Cave — Darshan & Return"
                items={[
                  "Sheshnag to Mahagunus Pass (14,500 ft): The highest and most demanding point of the entire trek. Altitude sickness risk is highest here. Rest frequently, breathe slowly, do not rush.",
                  "Mahagunus Pass to Panjtarni Camp (12,000 ft): A long descent through dramatic Himalayan landscape.",
                  "Panjtarni to Holy Cave (13,500 ft): Final 6 km ascent to the Amarnath Cave. This section has the most pilgrims and the strongest spiritual atmosphere.",
                  "Darshan of the ice Shiva lingam — a naturally forming ice cylinder created by dripping water inside the cave. The lingam grows and shrinks with the lunar cycle, reaching up to 6 feet at full moon. It is considered one of the holiest sights in Hinduism.",
                  activeTab === "A"
                    ? "Return trek from the cave to Panjtarni to Pahalgam the same day: approximately 20 km from cave, 10–12 hours total. Extremely demanding — start by 6 AM."
                    : "Return via helicopter from Panjtarni (₹3,200–4,500). Much easier. The helicopter cuts the return to 10 minutes vs 6–8 hours of descending trek.",
                  "Day 3 total (Pahalgam route): 20 km round trip from camp, 10–12 hours. The yatra is demanding, but thousands of first-timers complete it every year.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹8,000–12,000"}
              />
            </div>
          </section>

          {/* ── ROUTES ── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Routes & Access</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Two official routes. One is manageable for first-timers. One is for experienced trekkers only.
            </p>
            <div className="space-y-4">
              {[
                { route: "Pahalgam Route", distance: "36 km one way", days: "3 days", difficulty: "Moderate to Strenuous", note: "The recommended route for first-timers and those without high-altitude trekking experience. More gradual ascent, better acclimatization profile, more scenic (Sheshnag Lake, Mahagunus Pass). 80% of pilgrims use this route.", emoji: "✅", color: "bg-emerald-50 border-emerald-200" },
                { route: "Baltal Route", distance: "14 km one way", days: "1 day (rush)", difficulty: "Very Strenuous", note: "Shorter but extremely steep — the ascent from 2,743m to 3,888m in a single day is punishing. Done as a single-day push by fit, experienced trekkers. Not recommended for first-timers, those with health conditions, or anyone over 50. High altitude sickness risk.", emoji: "⚠️", color: "bg-amber-50 border-amber-200" },
                { route: "Helicopter (Neelgrath/Pahalgam to Panjtarni)", distance: "10 min flight", days: "Same day", difficulty: "Easy (6 km trek from Panjtarni)", note: "Helicopter from either Neelgrath (Baltal side) or Pahalgam to Panjtarni camp. 200–300 seats per day per side, allocated by daily lottery at shriamarnathjishrine.com. Saves 14+ km of trekking. Worth every rupee for those with fitness concerns, elderly pilgrims, or those short on time.", emoji: "🚁", color: "bg-teal-50 border-teal-200" },
              ].map((r) => (
                <div key={r.route} className={`rounded-xl border p-5 ${r.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{r.route}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                        <span className="text-[0.65rem] text-gold-dark font-medium">{r.distance}</span>
                        <span className="text-[0.65rem] text-muted">{r.days}</span>
                        <span className="text-[0.65rem] text-muted">{r.difficulty}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{r.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HERO IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="himalayan pilgrimage trek mountain camp snow"
              fallback="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80"
              alt="Himalayan trek camp and mountain landscape on the Amarnath Yatra route"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Pahalgam route takes pilgrims through one of the most spectacular high-altitude landscapes in India. The trek is demanding — the reward is unlike anything else.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹8,000", color: "bg-amber-50 border-amber-200",
                  items: [["Registration + medical cert", "₹500–1,500"], ["Travel to Pahalgam", "₹1,500–2,500"], ["Tent accommodation (2 nights)", "₹1,000–1,600"], ["Food + langars", "₹500–1,000"], ["Transport on route", "₹400–600"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹8,000–25,000", color: "bg-teal-50 border-teal-200",
                  items: [["Registration + medical cert", "₹500–1,500"], ["Flights + travel", "₹3,000–8,000"], ["Private guesthouse + tented camp", "₹3,000–6,000"], ["Helicopter (2 ways)", "₹6,400–9,000"], ["Food + extras", "₹1,000–2,000"]] },
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
              * All prices per person. Helicopter costs shown per side (one way). Langars on the route are free. Registration at shriamarnathjishrine.com is free for Indians (₹100 processing fee applies).
            </p>
          </section>

          <AffiliateBlock destination="Amarnath" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not Getting the Medical Certificate in Advance", desc: "The medical certificate is mandatory and must come from a government-recognized hospital. You cannot get it at the last minute. Apply 30–45 days before your yatra date. Without it, you cannot register, and without registration, you cannot join the yatra.", icon: "🏥" },
                { title: "Choosing Baltal Route Without Experience", desc: "The Baltal route (14 km one way in 1 day) is extremely steep and is not suitable for first-timers or those without high-altitude trekking experience. The Pahalgam route (3 days) exists specifically to allow gradual acclimatization. Don't underestimate altitude.", icon: "⛰️" },
                { title: "Skipping the Acclimatization Day", desc: "Resting in Pahalgam on Day 1 is not optional — it's built into the 3-day Pahalgam route because altitude sickness is real and dangerous. Pilgrims who rush straight to trekking on arrival are the ones who need medical evacuation.", icon: "🏕️" },
                { title: "Not Booking Helicopter in Advance", desc: "Helicopter slots operate on a daily lottery at shriamarnathjishrine.com. Slots for peak season (first two weeks of July) fill up weeks in advance. Book as soon as registration opens — 200–300 seats per day per side is not enough for the demand.", icon: "🚁" },
                { title: "Inadequate Gear for the Weather", desc: "Even in July, temperatures at the Amarnath Cave can drop to 0°C or below at night. Bring thermal layers, a waterproof jacket, trekking poles, and ankle-support boots regardless of what the weather forecast says. Weather at 3,888m is unpredictable.", icon: "🌨️" },
                { title: "Ignoring Altitude Sickness Symptoms", desc: "Symptoms: persistent headache, nausea, vomiting, confusion, breathlessness at rest. If you experience these — especially confusion or breathlessness at rest — descend immediately and report to a medical post. Do not push through. Altitude sickness can become life-threatening.", icon: "🚨" },
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
                { icon: "🏥", title: "Medical Certificate is Non-Negotiable", desc: "A certificate from a government-recognized hospital confirming fitness for high altitude is MANDATORY to register. Get tested for BP, heart condition, and general health. Pilgrims with heart conditions, severe hypertension, or pregnancy are not permitted. Apply 30–45 days before yatra.", color: "bg-amber-50 border-amber-200" },
                { icon: "📋", title: "RFID Registration Opens 2 Months Before Yatra", desc: "Register at shriamarnathjishrine.com. The registration slip has a barcode scanned at every checkpoint. Without it, you cannot proceed. Registration is free for Indians.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚁", title: "Helicopter: Book Day-of via Lottery", desc: "Helicopter slots from Neelgrath (Baltal side) or Pahalgam to Panjtarni operate on a daily lottery basis (book at shriamarnathjishrine.com). Seats: 200–300/day each side. The helicopter saves 14 km of trekking — worth every rupee for those with fitness concerns.", color: "bg-teal-50 border-teal-200" },
                { icon: "🥶", title: "Altitude Sickness Prevention", desc: "Spend 1 full day acclimatizing in Pahalgam (2,130m) before trekking. Drink 3–4 litres of water daily. Carry Diamox (altitude sickness medication, consult doctor). Ascend slowly — the Pahalgam route takes 3 days specifically for acclimatization.", color: "bg-teal-50 border-teal-200" },
                { icon: "⛺", title: "Pahalgam vs Baltal Route", desc: "Pahalgam (36 km one way, 3 days): more gradual, safer for beginners, more scenic. Baltal (14 km one way, 1 day if fit): shorter but very steep, typically done as a single-day rush. First-timers should always choose Pahalgam.", color: "bg-rose-50 border-rose-200" },
                { icon: "🌨️", title: "Yatra Season and Weather", desc: "Amarnath Yatra runs approximately 45 days from July to August (dates vary by Hindu calendar — Shravani Purnima to Raksha Bandhan). Weather at the cave is 5–15°C in July, potentially 0°C or below in August with snow. Pack thermal layers regardless.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your yatra dates and group — we&apos;ll help you with registration, helicopter booking, and accommodation within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Amarnath Yatra →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the ice lingam at Amarnath Cave?", a: "The Amarnath Shiva lingam is a naturally occurring ice formation inside the cave at 3,888m. Dripping water freezes into a roughly cylindrical shape resembling Shiva's lingam. It grows and shrinks with the lunar cycle — largest at full moon. The lingam sometimes reaches 6 feet tall. It's considered one of the holiest sites in Hinduism." },
                { q: "How difficult is the Amarnath Yatra trek?", a: "The Pahalgam route (36 km one way over 3 days) is a moderate-to-strenuous mountain trek with significant altitude gain. The most challenging section is Mahagunus Pass (14,500 ft). Age limit enforced: 13–70 years. Those above 70 or with health conditions must take the helicopter. Good physical fitness required." },
                { q: "Can I do Amarnath Yatra without prior trekking experience?", a: "Yes, but physical preparation is essential. Training: 3 months of cardio, hill walking, and breathing exercises before the yatra. The route is well-maintained with rest camps, medical posts, langars (free food stalls), and rescue teams. Thousands of first-timers complete it every year." },
                { q: "What should I carry for the Amarnath Yatra?", a: "Essentials: RFID registration slip + medical certificate (both mandatory), thermal underwear, waterproof jacket, trekking shoes (ankle support), trekking poles, high-altitude sunscreen (SPF 50+), glucose + dry fruits, personal medication, and a torch. Emergency: Diamox, basic first aid kit." },
                { q: "Are there free facilities (langars) on the Amarnath route?", a: "Yes — langars (community kitchens) run by various organizations serve free food and hot drinks at every major rest point along both routes. You will not go hungry on the Amarnath route. The langar system is one of the most organized community service efforts in Indian pilgrimage." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Kashmir Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vaishno Devi — 3 Day Pilgrimage", href: "/blog/vaishno-devi-3-days" },
                { label: "Srinagar — 5 Day Kashmir Valley", href: "/blog/srinagar-5-days" },
                { label: "Pahalgam — 3 Day Valley Guide", href: "/blog/pahalgam-3-days" },
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

          <CombineWith currentSlug="amarnath-3-days" />
          <RelatedGuides currentSlug="amarnath-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
