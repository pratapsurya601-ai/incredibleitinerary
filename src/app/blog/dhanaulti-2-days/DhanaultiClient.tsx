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
import { usePageUrl } from "@/lib/hooks";

const DHANAULTI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🌲", label: "Top Sights" },
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
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Dhanaulti 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Dhanaulti in 2 Days guide&url=${pageUrl}` },
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
export default function DhanaultiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DHANAULTI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dhanaulti" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="deodar cedar forest uttarakhand hills mist"
            fallback="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=85"
            alt="Deodar cedar forest in Dhanaulti Uttarakhand with morning mist"
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
              <span className="text-white/70">Dhanaulti 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station & Nature
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dhanaulti in 2 Days: Uttarakhand&apos;s
                <em className="italic text-gold-light"> Quietest Cedar Forest Retreat</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The hill station Mussoorie tourists never find. 2,286m, century-old deodar cedars, a Himalayan viewpoint temple, and 1/20th the crowds — 25 km from Mussoorie, a world away in feel.
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
              <span>🇮🇳 Uttarakhand</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 7am, the Eco Park was completely empty. The cedar trees were 150 years old, the fog was still sitting in the canopy, and it was 5°C cooler than Mussoorie 25 km below. I couldn&apos;t believe I nearly missed this place.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Uttarakhand visitors do Mussoorie and miss Dhanaulti entirely. That&apos;s a shame — Dhanaulti sits 500m higher at 2,286m, has a deodar cedar forest that Mussoorie can&apos;t match, and sees a fraction of the weekend crowds. In December–February it gets real snow. Add a trek to Surkanda Devi with panoramic Himalayan views and you have one of the best two-day retreats in North India.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="⛰️" label="Altitude" value="2,286 m" />
            <StatCard icon="🌸" label="Best Season" value="Mar–Jun, Oct–Nov" />
            <StatCard icon="🚗" label="From Dehradun" value="62 km" />
            <StatCard icon="⭐" label="Rating" value="4.4★" />
          </div>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Dhanaulti is exceptionally good value — even the comfortable option is affordable.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Budget cottage (₹800–1500)</td><td className="py-2.5 px-4">Eco resort with fireplace (₹2500–5000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared taxi from Dehradun (₹200)</td><td className="py-2.5 px-4">Private taxi throughout</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Activities</td><td className="py-2.5 px-4">Eco Park + Surkanda trek</td><td className="py-2.5 px-4">Same + bonfire + Mussoorie day trip</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Eco Park cedar forest → Surkanda Devi Temple trek → campfire. Day 2: Orchard walk → Drag viewpoint → optional Mussoorie → depart.
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
                title="Arrive, Eco Park & Surkanda Devi Temple"
                items={[
                  "Reach Dhanaulti: Bus or taxi from Dehradun (62 km, 2.5 hrs). Shared taxi costs ₹200 per person — ask at Dehradun's ISBT bus stand. Alternatively from Mussoorie (25 km, 1 hr by taxi). The road winds through thick oak and rhododendron forest — spectacular in spring.",
                  activeTab === "A"
                    ? "Check in to a budget cottage (₹800–1500/night). Most have basic rooms with mountain views. The Dhanaulti Eco Retreat (government-run) is excellent value at ₹1200–2000."
                    : "Check in to a premium eco resort with fireplace (₹2500–5000/night). Snow Valley Resorts or Camp Thangdhar are the best options — both have valley or forest views and organised bonfire evenings.",
                  "Eco Park: Two sections of deodar cedar forest, each ₹25 entry. Section 1 has the denser forest with walking trails and benches. Section 2 has better Himalayan viewpoints. The trees are 100–200 years old and create a microclimate noticeably cooler and quieter than anywhere else. Go early — fog at 7am is extraordinary.",
                  "No vehicles are allowed inside the Eco Park — walk all trails. Children's play areas in both sections make this ideal for families. Allow 2 hours for both sections.",
                  "Afternoon: Drive or taxi to Surkanda Devi Temple (8 km from Dhanaulti). The 3 km trek through oak forest takes 45 minutes up. The hilltop shrine sits at the summit with a 360-degree panorama including Kedarnath, Chaukhamba, and Bandarpoonch peaks.",
                  "Dhara Devi Temple: A small roadside shrine on the way back — worth a brief stop.",
                  activeTab === "A"
                    ? "Evening campfire at your cottage — most budget places have a shared fire pit. Bring warm layers; temperatures drop sharply after sunset even in summer."
                    : "Evening bonfire organised by the resort with hot beverages. If staying at Snow Valley or Camp Thangdhar, they often arrange local folk music sessions around the fire.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Orchards, Drag Viewpoint & Departure"
                items={[
                  "Morning orchard walk: In season (April–June blossoms, August–October harvest), walk through the apple and cherry orchards surrounding Dhanaulti. Many cottage owners have private orchards — ask for permission to walk through. They often offer fresh-picked fruit.",
                  "Drag viewpoint: A short walk or drive from the main market. Clear days reveal the full Himalayan panorama from Gangotri to Kedarnath. Arrive before 9am — clouds build up quickly.",
                  activeTab === "A"
                    ? "Optional Mussoorie day trip: Mussoorie is 25 km (1 hr) below. Mall Road, Kempty Falls, and the Lal Tibba viewpoint are the main draws. Take a shared taxi (₹100–150) and return by 4pm for departure."
                    : "Mussoorie day trip by private taxi: The driver waits while you explore. From Dhanaulti you're already above the worst Mussoorie traffic. Lal Tibba viewpoint (the highest point in Mussoorie) and Landour's Char Dukan cafes are worth the trip.",
                  "Return to Dehradun (2.5 hrs) or direct taxi to Delhi (9 hrs via Meerut–Delhi expressway, ₹2500–3500 for the full car).",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹3,000–4,000"}
              />
            </div>
          </section>

          {/* ── TOP SIGHTS ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌲 Top Sights in Dhanaulti</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Dhanaulti has fewer sights than bigger hill stations — and that&apos;s exactly the point. Every sight here is genuinely worth your time.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Eco Park (Two Sections)", entry: "₹25 each section", note: "The crown jewel. Two sections of managed deodar cedar forest with walking trails. The trees are 100–200 years old. No traffic noise, no vendors inside, just forest. Morning fog (7–9am) makes it otherworldly.", emoji: "🌲", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "Surkanda Devi Temple", entry: "Free (₹200–300 taxi)", note: "8 km from Dhanaulti. The 3 km trek takes 45 minutes but rewards with a 360° panorama including Kedarnath and Chaukhamba peaks. The hilltop shrine is ancient and atmospheric. Go on a weekday for peace.", emoji: "🛕", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Apple & Cherry Orchards", entry: "Free (ask permission)", note: "April–June: pink blossoms. August–October: ripe harvest. Walking through private orchards with the Himalayan backdrop — one of the most underrated experiences in Uttarakhand.", emoji: "🍎", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Drag Viewpoint", entry: "Free", note: "Short walk from town. On clear mornings (before 9am), the panorama spans from Gangotri range to Kedarnath. Bring a zoom lens — the peaks are 80–100 km away.", emoji: "🏔️", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", name: "Mussoorie Day Trip", entry: "25 km / 1 hr", note: "Mall Road, Kempty Falls, Lal Tibba, Landour's Char Dukan cafes. Use Dhanaulti as base and Mussoorie as a day trip — you'll appreciate Dhanaulti's quiet more when you return.", emoji: "🏘️", color: "bg-rose-50 border-rose-200" },
              ].map((s) => (
                <div key={s.name} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{s.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{s.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{s.entry}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOREST IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="deodar cedar forest himalayan hills uttarakhand"
              fallback="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80"
              alt="Deodar cedar forest trail in Dhanaulti Eco Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Eco Park deodar cedars are 100–200 years old. Entry: ₹25 per section. No vehicles allowed inside.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Transport (Dehradun–Dhanaulti)", "₹200 shared taxi"], ["Stay (1 night)", "₹800–1,500"], ["Eco Park (2 sections)", "₹50"], ["Meals", "₹600–800"], ["Surkanda Devi taxi", "₹200–300"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Transport (private taxi)", "₹1,200–1,500"], ["Stay (1 night, eco resort)", "₹2,500–5,000"], ["Eco Park + activities", "₹200–400"], ["Meals", "₹800–1,200"], ["Mussoorie day trip", "₹500–800"]] },
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
              * All prices per person. Does not include travel to/from Dehradun. Snow season (Dec–Feb) cottages may charge 20–30% more. Book ahead on long weekends.
            </p>
          </section>

          <AffiliateBlock destination="Dhanaulti" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to the Eco Park after 10am", desc: "The morning fog and empty trails are what make Dhanaulti special. By 10am, day-trippers from Mussoorie arrive. Go at 7–8am for the real experience — you may have the forest entirely to yourself.", icon: "⏰" },
                { title: "Skipping Surkanda Devi Temple", desc: "Most overnight visitors skip it. The 3 km trek takes 45 minutes and the panoramic Himalayan view from the summit is extraordinary. Don't let 'it's 8 km away' deter you.", icon: "🛕" },
                { title: "Coming in July–August monsoon", desc: "The scenery is green but roads can be slippery and viewpoints are cloud-covered. March–June and October–November are the sweet spots. December–February for snow seekers.", icon: "🌧️" },
                { title: "Not booking ahead on long weekends", desc: "Dhanaulti is only 280 km from Delhi. Diwali, Holi, and summer school holidays see cottages fill up a week in advance. Book 2 weeks ahead for any long weekend visit.", icon: "📅" },
                { title: "Expecting Mussoorie-level amenities", desc: "Dhanaulti's market is small — one main street with basic shops. This is the point. Bring medications, snacks, and anything specific you need. The nearest pharmacy is in Mussoorie.", icon: "🛒" },
                { title: "Not dressing for the cold", desc: "Even in May, Dhanaulti can be 8–12°C at night. Bring a fleece or jacket regardless of season. In winter (Dec–Feb), proper thermal layers are essential. The cold is part of the charm.", icon: "🧥" },
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
                { icon: "🌲", title: "Deodar Cedar Forest Walk", desc: "The Eco Park's dense cedar canopy (trees 100–200 years old) creates a microclimate 5°C cooler than Mussoorie. Early morning (7 AM) fog in the forest is extraordinary. No vehicles inside.", color: "bg-amber-50 border-amber-200" },
                { icon: "❄️", title: "Winter Snow (Dec–Feb)", desc: "Dhanaulti gets 1–2 feet of snow in winter. The eco park becomes a snow-covered wonderland. Most cottages have heating — bring warm clothing. Roads can close briefly after heavy snowfall but reopen within hours.", color: "bg-amber-50 border-amber-200" },
                { icon: "🛕", title: "Surkanda Devi Trek", desc: "The 3 km trek (600m elevation gain) takes 45 minutes up. The hilltop view includes Kedarnath, Chaukhamba, and Bandarpoonch. The Kanwar Mela (June) draws thousands. Go on a weekday for peace.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍎", title: "Apple Orchard Season", desc: "April–June: blossoms. August–October: harvest. Many cottage owners have private orchards — ask for permission to walk through, and they often offer fresh-picked fruit.", color: "bg-teal-50 border-teal-200" },
                { icon: "🆚", title: "Dhanaulti vs Mussoorie", desc: "Mussoorie is 25 km below, 500m lower, and far more crowded. Dhanaulti has 1/20th the tourists and better forest. Come here instead of Mussoorie or use Dhanaulti as base for a Mussoorie day trip.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏕️", title: "Best Cottages", desc: "Snow Valley Resorts (₹2500–4000), Camp Thangdhar (glamping, ₹1800–3000), Dhanaulti Eco Retreat (government, ₹1200–2000). All have valley or forest views.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Dhanaulti itinerary including trains to Dehradun within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Dhanaulti Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can I see snow in Dhanaulti?", a: "Yes — December to February regularly brings 1–3 feet of snow, covering the eco park and cottages. The nearest guaranteed snow-road experience to Delhi (only 9 hrs). March can have residual snow." },
                { q: "How to reach Dhanaulti from Delhi?", a: "Train from Delhi to Dehradun (overnight, 5.5 hrs) then taxi (₹1200–1500, 2.5 hrs) or shared taxi (₹200, 3 hrs) to Dhanaulti. Alternatively: Delhi → Mussoorie (taxi) → Dhanaulti (25 km, 1 hr). Total: 9–10 hours from Delhi." },
                { q: "Is Dhanaulti good for families with children?", a: "Excellent — the Eco Park has play equipment, safe paved trails, and the forest is child-friendly. Snow in winter is an added attraction. No nightlife (not a concern for families). Most resorts have campfire facilities." },
                { q: "What are the two Eco Park sections?", a: "Eco Park has two separate sections (₹25 entry each): Section 1 has the denser cedar forest with more walking trails. Section 2 has better Himalayan viewpoints. Both are worth visiting — buy a combined ticket." },
                { q: "Can I combine Dhanaulti with Mussoorie or Rishikesh?", a: "Dhanaulti is 25 km from Mussoorie (1 hr) and 60 km from Rishikesh (2.5 hrs). A 3-night circuit: Delhi → Dhanaulti (night 1) → Mussoorie (night 2) → Rishikesh (night 3) → Delhi is very doable. The scenery changes dramatically between all three." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Dhanaulti — Highlights"
            subtitle="The best of Dhanaulti in photos."
            spots={[
              { name: "Dhanaulti Landscape", query: "dhanaulti india landscape scenic beautiful travel", desc: "The stunning landscapes of Dhanaulti." },
              { name: "Dhanaulti Temple", query: "dhanaulti temple architecture heritage india", desc: "Historic temples and architecture in Dhanaulti." },
              { name: "Dhanaulti Street Scene", query: "dhanaulti street market local culture india", desc: "Local life and culture in Dhanaulti." },
              { name: "Dhanaulti Nature", query: "dhanaulti nature hills forest river india", desc: "Natural beauty around Dhanaulti." },
              { name: "Dhanaulti Sunset", query: "dhanaulti sunset golden hour india travel", desc: "Dhanaulti at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Uttarakhand Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mussoorie — 3-Day Complete Guide", href: "/blog/mussoorie-3-days" },
                { label: "Landour — 2-Day Heritage Walk", href: "/blog/landour-2-days" },
                { label: "Rishikesh — 3-Day Adventure & Yoga", href: "/blog/rishikesh-3-days" },
                { label: "Browse All Uttarakhand Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="dhanaulti-2-days" />
          <RelatedGuides currentSlug="dhanaulti-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
