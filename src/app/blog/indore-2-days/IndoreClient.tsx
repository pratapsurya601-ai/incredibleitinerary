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

const INDORE_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍽️", label: "Street Food Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Indore 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Indore in 2 Days — Sarafa Bazaar & street food guide&url=${pageUrl}` },
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
export default function IndoreClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹3k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹3k–8k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={INDORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Indore" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Indian street food night market colorful stalls crowd"
            fallback="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1600&q=85"
            alt="Indore Sarafa Bazaar night street food market with colourful stalls"
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
              <span className="text-white/70">Indore 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Food & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Indore in 2 Days: India&apos;s Cleanest City,
                <em className="italic text-gold-light"> Street Food &amp; Sarafa Bazaar</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                7-time winner of India&apos;s cleanest city award, home to Sarafa Bazaar (midnight food market), 56 Dukan, garadu chaat, and the poha-jalebi breakfast that defines the city.
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
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 10 PM on a Tuesday, Sarafa Bazaar had 50 stalls, 300 people, and more food options than most cities have restaurants. This is what an Indian street food culture looks like at its absolute peak.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Indore is India&apos;s most underrated food city. It has won the Swachh Bharat cleanest city award 7 consecutive years (since 2017) — the streets are genuinely cleaner than most Indian metros. The Holkar dynasty left behind beautiful palaces. But the real reason to come is the food: Sarafa Bazaar turns from a jewellery market into an extraordinary night food street every evening, and the poha-jalebi breakfast at 56 Dukan is one of those combinations that sounds wrong and tastes perfect.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🍽️" label="Street Food Markets" value="2 (Sarafa + 56 Dukan)" />
            <StatCard icon="🚗" label="Distance from Bhopal" value="200 km" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Indore is a year-round destination but timing affects which street foods are available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "Pleasant temperatures (15–28°C). This is also garadu chaat season (purple yam, November–February) — the signature Indore street food that's unavailable in summer. Rose Festival in Bhopal is nearby.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–Jun", emoji: "🌡️", title: "Warm to Hot", desc: "March is pleasant. April onwards gets hot (35–42°C). Sarafa and 56 Dukan still operate — the evening and night food culture is actually better in summer because people are out later avoiding the day heat.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "Patalpani Waterfall (35 km) is spectacular in monsoon. The city is green and lively. Street food operates through the rain. A perfectly legitimate time to visit if you don't mind the humidity.", color: "bg-teal-50 border-teal-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. The food experience is identical regardless of budget — Sarafa Bazaar is a great equaliser.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse near Rajwada ₹600–1,000</td><td className="py-2.5 px-4">Hotel near Treasure Island ₹1,800–3,000</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Auto-rickshaws + walk</td><td className="py-2.5 px-4">Private auto hire for day ₹500–600</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Street food at Sarafa + 56 Dukan</td><td className="py-2.5 px-4">Street food + sit-down meals</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹3,000</td><td className="py-2.5 px-4 font-medium text-teal">₹3,000–8,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Rajwada, heritage walk, Sarafa Bazaar night market. Day 2: Poha-jalebi breakfast at 56 Dukan, Lal Bagh Palace, Kanch Mandir, departure.
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
                title="Arrive, Rajwada Palace & Sarafa Bazaar Night Market"
                items={[
                  "Arrive by train from Mumbai (13 hrs) or Bhopal (3.5 hrs), or fly to Devi Ahilya Bai Holkar Airport (IDR). Direct flights from Delhi (1.5 hrs) and Mumbai (1 hr).",
                  activeTab === "A"
                    ? "Check in to a guesthouse near Rajwada (₹600–1,000/night). The old city area is ideal — walking distance to all major heritage sites."
                    : "Check in to a hotel near Treasure Island Mall or Sector B (₹1,800–3,000/night). More comfortable and well-connected to all areas by auto.",
                  "Rajwada Palace (18th century, 7-storey structure, Holkar dynasty). The palace has been rebuilt multiple times after fires but retains its original grandeur. Free entry to the exterior; small fee for interior.",
                  "Krishnapura Chhatris — elegant cenotaphs built for the Holkar queens on the banks of the Saraswati River. Distinctive Rajput architecture. Free entry, 30 minutes.",
                  "Central Museum (₹10 entry) — Holkar dynasty artifacts, weapons, sculptures, and Madhya Pradesh tribal art. 45 minutes.",
                  "Return to hotel for rest. Dinner is late tonight.",
                  "Sarafa Bazaar starts at 8 PM. By 9 PM it is fully operational — the jewellery wholesale market that operates by day transforms completely. Under the same awnings where silver merchants sell by day, 50+ food stalls set up. Must-try: garadu chaat (purple yam, unique to Indore, winter only), bhutte ki kees (spiced corn), malpua (sweet pancake), shahi shikanji (spiced lemonade).",
                  "Sarafa closes around 1–2 AM. Go hungry and eat slowly. This is the best street food concentration in India.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–4,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Poha-Jalebi Breakfast, Lal Bagh Palace & 56 Dukan"
                items={[
                  "7 AM: Vijay Chaat House on 56 Dukan. Order the poha + jalebi combination — this is Indore's mandatory breakfast. Poha (flattened rice with mustard seeds, curry leaves, pomegranate) alongside a hot jalebi (sugar pretzel) from the adjacent stall. The sweetness of jalebi with savoury poha is counterintuitive but correct. Go before 8 AM before the queue builds.",
                  "Lal Bagh Palace (1886, Holkar palace): Italian marble floors, English gardens, Versailles-inspired exterior. ₹50 entry. Allow 1 hour. The contrast with Rajwada is striking — European architecture commissioned by Holkar rulers in the colonial era.",
                  "Kanch Mandir (Glass Temple, 30-minute walk from Lal Bagh): a Jain temple where the entire interior — ceiling, walls, pillars — is covered in mirror glass. Unusual and spectacular. Free entry.",
                  activeTab === "A"
                    ? "Optional: Patalpani Waterfall (35 km, 1 hr by auto). Only visit during or just after monsoon (July–September) — it runs dry otherwise. Skip in other seasons."
                    : "Optional: Patalpani Waterfall (35 km by private auto, ₹300–400 return). Worth the detour in monsoon season. Beautiful gorge setting.",
                  "Evening: 56 Dukan complex. The same area where you had breakfast is now a completely different scene — café culture, chaat stalls, and Indore's evening social scene. 56 shops + food complex.",
                  "Depart: Indore Junction or airport.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–4,000"}
              />
            </div>
          </section>

          {/* ── STREET FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍽️ The Indore Street Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Indore has the best street food culture in India by density and variety. Here&apos;s what to eat, in order of priority.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Garadu Chaat", where: "Sarafa Bazaar (winter only, Nov–Feb)", price: "₹50–100", note: "Purple yam fried and spiced with rock salt, lime, and special masalas. Unique to Indore. Only available November–February. If you're visiting in winter, this is non-negotiable — you won't find it anywhere else.", emoji: "🍠", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Poha + Jalebi", where: "Vijay Chaat House, 56 Dukan", price: "₹40–80", note: "Indore's signature breakfast. Savoury flattened rice alongside a hot sugar jalebi. Counterintuitive combination that's perfectly correct. Every Indori has strong opinions about which stall does it best. Vijay Chaat is the most celebrated.", emoji: "🍳", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Bhutte Ki Kees", where: "Sarafa Bazaar, various stalls", price: "₹40–80", note: "Spiced corn grated and cooked with milk, ghee, and spices. A uniquely Indori preparation — not the same as corn on the cob. Available year-round. Best when freshly made at the stall.", emoji: "🌽", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Malpua", where: "Sarafa Bazaar", price: "₹30–60/piece", note: "Sweet fried pancakes soaked in sugar syrup. An Indian classic done exceptionally well at Sarafa. Eat them hot. Pairs with rabdi (thick condensed milk) for the full experience.", emoji: "🥞", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Shahi Shikanji", where: "Multiple Sarafa stalls", price: "₹30–60", note: "Spiced lemonade with kesar (saffron), rose water, and dry fruits. Indore's version is different from Delhi shikanji — richer, more complex, often served with tukda (bread). Perfect palate cleanser between dishes.", emoji: "🥛", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", dish: "Sabudana Khichdi", where: "56 Dukan morning stalls", price: "₹50–100", note: "Sago pearls cooked with peanuts, green chillies, and curry leaves. A popular breakfast and fasting food. Indore's version is drier and crispier than the Mumbai style — preferred by locals.", emoji: "🍚", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Indian street food poha jalebi breakfast market stall"
              fallback="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=900&q=80"
              alt="Poha and jalebi breakfast at an Indore street food stall"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The poha-jalebi combination at 56 Dukan: ₹60 for both. It looks wrong. It tastes perfect. This is Indore&apos;s greatest contribution to Indian breakfast culture.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹3,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (2 nights)", "₹1,200–2,000"], ["Transport", "₹400–600"], ["Food (Sarafa + 56 Dukan)", "₹500–800"], ["Entry fees", "₹100–200"], ["Miscellaneous", "₹200–400"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹3,000–8,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (2 nights)", "₹3,600–6,000"], ["Transport (private auto)", "₹700–1,000"], ["Food + restaurants", "₹1,000–2,000"], ["Entry fees", "₹200–400"], ["Shopping", "₹500–1,500"]] },
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
              * All prices per person. Does not include travel to/from Indore. The best food in Indore (Sarafa + 56 Dukan) is extremely cheap — budget and comfortable travellers eat the same food at the same stalls.
            </p>
          </section>

          <AffiliateBlock destination="Indore" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Sarafa Before 9 PM", desc: "Sarafa officially starts at 8 PM but is thin until 9 PM. Arrive at 9 PM for the full experience — all 50+ stalls open, maximum crowd, maximum atmosphere. If you go at 8 PM you'll find half the stalls still setting up.", icon: "🌙" },
                { title: "Missing the Poha-Jalebi Breakfast", desc: "If you go to Indore and don't have poha-jalebi at 56 Dukan before 8 AM, you haven't done Indore. This is non-negotiable. The queue builds fast — go early.", icon: "🍳" },
                { title: "Visiting Patalpani in Non-Monsoon Season", desc: "Patalpani Waterfall (35 km from Indore) is spectacular in monsoon (July–September). In other months it's a dry gorge. Check before making the trip.", icon: "💧" },
                { title: "Not Combining with Ujjain", desc: "Ujjain is only 55 km away (1 hr). The Mahakaleshwar Bhasma Aarti is one of India's most intense spiritual experiences. Skipping Ujjain when you're in Indore is a genuine missed opportunity.", icon: "🕉️" },
                { title: "Looking for Garadu in Summer", desc: "Garadu chaat (purple yam) is only available November–February at Sarafa and select stalls. In summer, it doesn't exist in Indore. If this is on your list, plan your visit for winter.", icon: "🍠" },
                { title: "Taking Taxis from the Airport", desc: "Airport taxis charge 3–4x auto-rickshaw rates. Use Ola/Uber from the airport or negotiate an auto. The city centre is 8 km from the airport — about ₹150–200 by auto.", icon: "🚕" },
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
                { icon: "🌙", title: "Sarafa Bazaar: Arrive at 9 PM", desc: "Sarafa is a jewelry wholesale market by day. After 8 PM, food stalls set up under the same awnings. By 9 PM, it's India's greatest concentrated street food experience — 50+ stalls, all serving unique Indori specialties. Closes around 1–2 AM.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍳", title: "Poha-Jalebi: Mandatory Breakfast", desc: "Vijay Chaat House (56 Dukan) serves the defining Indore breakfast: flattened rice with mustard seeds, curry leaves, and pomegranate + a hot jalebi (sugar pretzel) from the adjacent stall. The combination sounds wrong; it's perfect. Go by 8 AM before the queue builds.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏆", title: "7 Consecutive Years as India's Cleanest City", desc: "Indore has won the Swachh Bharat cleanest city award every year since 2017 (and counting). The streets are genuinely clean — you'll notice the difference arriving from other major cities. The civic infrastructure is a model for Indian urban governance.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚇", title: "Getting Around Indore", desc: "Indore has a BRTS (Bus Rapid Transit) network and auto-rickshaws. Rajwada, 56 Dukan, Lal Bagh, and the main markets are all within 3 km of each other. Hire an auto for the day (₹500–600) to cover Sarafa + historical sites efficiently.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Combine with Ujjain", desc: "Ujjain is 55 km from Indore (1 hr by road or direct train). The natural Indore–Ujjain combination: Indore's food scene + Ujjain's Mahakaleshwar Bhasma Aarti. Many travelers stay in Indore (better hotels) and day-trip to Ujjain.", color: "bg-rose-50 border-rose-200" },
                { icon: "🎉", title: "56 Dukan vs Sarafa", desc: "Both are major Indore food destinations with different personalities. 56 Dukan is active all day (café culture + street food, great for daytime). Sarafa is a night market only (8 PM–1 AM, under jewelry shop awnings, more chaotic and atmospheric). Don't miss both.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Indore + Ujjain itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Indore Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Why is Indore called India's food capital?", a: "Indore has the highest density of quality street food per square km of any Indian city. Its 56 Dukan market operates all day; Sarafa operates all night. The city has over 4,000 registered eateries. Unique dishes — garadu, bhutte ki kees, sabudana khichdi, malpua — are not available this well anywhere else in India." },
                { q: "How to reach Indore?", a: "Devi Ahilya Bai Holkar Airport (IDR) has direct flights from Delhi (1.5 hrs), Mumbai (1 hr), Bangalore (1.5 hrs), and 20+ other cities. By train: Indore Junction has connections to Mumbai (13 hrs), Delhi (16 hrs), Bhopal (3.5 hrs). By road: Bhopal is 200 km (3.5 hrs), Ujjain 55 km (1 hr)." },
                { q: "What is garadu chaat and where do I find it?", a: "Garadu is purple yam, a root vegetable fried and spiced with rock salt, lime, and special masalas. It's unique to Indore and found only in winter (November–February) on Sarafa and select street stalls. Outside Indore, it's nearly impossible to find authentic garadu chaat." },
                { q: "Is Indore worth visiting for history?", a: "Yes — Indore has a rich Holkar dynasty heritage: Rajwada Palace (7-storey, 200 years old), Lal Bagh Palace (Versailles-inspired, Italian marble), Krishnapura Chhatris (cenotaphs), and the Holkar-era temples. The Central Museum has the best Holkar artifact collection." },
                { q: "Can I do Indore as a day trip from Bhopal?", a: "Easily — 200 km (3.5 hrs by car or 2.5 hrs by express train). A day trip covering Rajwada, Lal Bagh, and an evening at Sarafa is very doable. However, if you want both Sarafa (night) AND Ujjain (day trip), staying overnight in Indore makes more sense." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Indore — Highlights"
            subtitle="The best of Indore in photos."
            spots={[
              { name: "Indore Landscape", query: "indore india landscape scenic beautiful travel", desc: "The stunning landscapes of Indore." },
              { name: "Indore Temple", query: "indore temple architecture heritage india", desc: "Historic temples and architecture in Indore." },
              { name: "Indore Street Scene", query: "indore street market local culture india", desc: "Local life and culture in Indore." },
              { name: "Indore Nature", query: "indore nature hills forest river india", desc: "Natural beauty around Indore." },
              { name: "Indore Sunset", query: "indore sunset golden hour india travel", desc: "Indore at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Central India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ujjain — 2 Day Mahakaleshwar Guide", href: "/blog/ujjain-2-days" },
                { label: "Bhopal — 2 Day City Guide", href: "/blog/bhopal-2-days" },
                { label: "Mandu — 1 Day Ruins & History", href: "/blog/mandu-1-day" },
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

          <CombineWith currentSlug="indore-2-days" />
          <RelatedGuides currentSlug="indore-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
