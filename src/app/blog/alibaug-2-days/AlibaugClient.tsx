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

const ALIBAUG_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "beaches",   emoji: "🏖️", label: "Beach Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Alibaug 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Alibaug in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AlibaugClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALIBAUG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Alibaug" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="alibaug beach Maharashtra coastline"
            fallback="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85"
            alt="Alibaug beach along the Maharashtra Konkan coastline"
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
              <span className="text-white/70">Alibaug 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Alibaug in 2 Days:
                <em className="italic text-gold-light"> Mumbai&apos;s Best Beach Escape</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                One hour by ferry from Gateway of India. Kolaba Fort walkable at low tide. Kihim Beach without the weekend crowds. Konkan fish curry eaten on a plastic chair by the sea. This is the weekend trip Mumbai people are sleeping on.
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
              <span>🇮🇳 Maharashtra</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I walked to Kolaba Fort at 7 AM, barefoot in the wet sand, with the fort growing bigger as the tide receded around me. No one else was there. Inside was a freshwater well, centuries-old cannons, and a small Narsinha temple. I had completely forgotten I was 95 km from Mumbai.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Mumbaikars complain about Goa being too far and Lonavala being too crowded. Alibaug solves both problems. One hour by ferry from Gateway of India, a Kolaba Fort you can walk to when the tide cooperates, Kihim Beach with a casuarina grove, and Konkan cuisine that hasn&apos;t been diluted for tourist palates. The secret is the ferry: skip the 3-hour road route entirely.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="⛴️" label="Distance from Mumbai" value="95 km (ferry: 1 hr)" />
            <StatCard icon="🏰" label="Kolaba Fort" value="300+ years old" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Alibaug is a year-round destination but the experience varies dramatically by season.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–March is ideal — sea is calm, temperatures are 22–30°C, and beach conditions are perfect. November to February is peak: clear water, good swimming, manageable crowds on weekdays.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot & Crowded", desc: "April is still manageable. May–June: 35–38°C, extremely crowded with Mumbai day-trippers, beach gets littered by Sunday noon. If you must go, arrive Friday evening and leave Saturday before 2 PM.", color: "bg-red-50 border-red-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "June–September is monsoon — the coast is dramatic and green, but swimming is dangerous (strong currents, jellyfish). The ferry may be suspended on rough days. Many beach resorts close. Best for the view, not for the beach.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Alibaug is excellent on a budget — the main costs are the ferry and accommodation.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse or beach cottage (₹800–1500)</td><td className="py-2.5 px-4">Beach resort with breakfast (₹4000–10000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Ferry</td><td className="py-2.5 px-4">Catamaran (₹190–200 one way)</td><td className="py-2.5 px-4">Same ferry or speedboat option</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local dhabas and Konkan thali</td><td className="py-2.5 px-4">Resort dining + local seafood spots</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Ferry from Gateway of India → Alibaug Beach → Kolaba Fort at low tide. Day 2: Kihim Beach → Nagaon → Korlai Fort → return ferry.
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
                title="Ferry from Mumbai, Alibaug Beach & Kolaba Fort"
                items={[
                  "Mandwa Ferry from Gateway of India, Mumbai (1 hr, ₹200 one way). This is far better than the 3-hour road journey. Ferries run from 6 AM–6 PM roughly every hour. Book at the Maldar Catamaran counter at Gateway — arrive 30 min early on weekends.",
                  "Arrive Mandwa. Local bus or auto to Alibaug town (15 km, ₹50–80). The drive through Konkan coastline is part of the experience.",
                  activeTab === "A"
                    ? "Check in to a guesthouse or beach cottage near Alibaug beach (₹800–1500). The area around the bus stand has plenty of options — negotiate for a 2-night stay."
                    : "Check in to a beach resort (₹4000–10000 including breakfast). Alibaug Beach Club and Sunderban Resort are reliable mid-range options. Book weekends 4–6 weeks ahead in season.",
                  "Afternoon: Alibaug Beach. It's a working beach — fishing boats, locals, vendors selling chivda and fresh coconut. Walk north toward Kolaba Fort and check the state of the tide.",
                  "Kolaba Fort (2 km offshore, walk at low tide — tidal timings at tide-forecast.com or ask your guesthouse). The 20-25 minute walk across the wet sand to the fort is one of those rare Indian travel moments. The fort has a Narsinha temple, a freshwater well (remarkable engineering — a fresh spring inside a saltwater fort), and original cannons facing the sea.",
                  "Confirm tide timings before walking. The window is 2–3 hours around low tide. If you miss the low tide window, a local fisherman's boat costs ₹200–300 return.",
                  "Evening: Alibaug town for chivda (rice flake snack, distinctly different from Pune chivda) and sol kadhi (kokum + coconut milk, pink, digestive, and addictive).",
                  activeTab === "A"
                    ? "Dinner at Hotel Pathare near the bus stand for Konkan fish thali (₹200–350 including surmai curry, rice, sol kadhi, bhakri)."
                    : "Dinner at your resort or Hotel Pathare — the Konkan thali experience is the same regardless of budget.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹6,000–8,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Kihim Beach, Nagaon & Korlai Fort"
                items={[
                  "Morning: Kihim Beach (10 km north of Alibaug — cleaner, less crowded, backed by a casuarina grove). The water is cleaner than Alibaug main beach. Dolphins are occasionally visible from the shore in the early morning. This is the best swimming beach in the area.",
                  "Nagaon Beach (20 km north of Alibaug) — water sports are available here: jet skiing, banana boat, parasailing (₹400–1500/activity). Calmer and more family-friendly than Kihim.",
                  activeTab === "A"
                    ? "Auto hire for Kihim + Nagaon loop: ₹400–600 negotiated. Shared autos are available but less convenient for beach-hopping."
                    : "Rent a bike or book a cab for the day (₹800–1200). Full flexibility to stop at quiet stretches of coast between beaches.",
                  "Afternoon: Korlai Fort (30 km south of Alibaug). Portuguese fort built in 1521, with a working lighthouse. The fort has a unique mix of Portuguese and Maratha architecture. The village below Korlai speaks a Portuguese creole dialect — one of only two such communities left in India. Extraordinary historical footnote.",
                  "Return to Alibaug. Fresh bombil (Bombay duck) fry at any beachside stall — this is the Konkan coast, this is non-negotiable.",
                  "Mandwa ferry back to Gateway of India. Last ferry around 5–6 PM — confirm timings at the jetty. Mumbai skyline from the sea during the return journey is a fitting end.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–6,000"}
              />
            </div>
          </section>

          {/* ── BEACH GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏖️ Beach Guide: Which Beach?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Alibaug district has 6+ beaches. Here&apos;s an honest ranking for a first visit.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", beach: "Kihim Beach", distance: "10 km north", note: "Cleanest water near Alibaug. Backed by a casuarina forest. Occasional dolphin sightings in the morning. Best for swimming and a relaxed morning. Not for water sports.", emoji: "🌊", color: "bg-teal-50 border-teal-200" },
                { rank: "#2", beach: "Alibaug Main Beach", distance: "Town centre", note: "The most accessible. Working fishing beach with boats, vendors, and a sunset crowd. Best for Kolaba Fort access (low tide walk). Not the cleanest for swimming but the most atmospheric.", emoji: "🏖️", color: "bg-teal-50 border-teal-200" },
                { rank: "#3", beach: "Nagaon Beach", distance: "20 km north", note: "Water sports hub — jet skiing, banana boat, parasailing. Wider beach, more facilities. Good for families. Gets crowded on weekends.", emoji: "🏄", color: "bg-amber-50 border-amber-200" },
                { rank: "#4", beach: "Kashid Beach", distance: "40 km south", note: "Blue-flag beach. Most scenic in the region — white sand, clearer water than other Alibaug beaches. The farthest but worth the drive if you have an extra half day. Best combined with Korlai Fort.", emoji: "✨", color: "bg-amber-50 border-amber-200" },
                { rank: "#5", beach: "Mandwa Beach", distance: "At ferry terminal", note: "Where you arrive from Mumbai. Small, pretty, quiet. Good for a 30-minute walk before heading to Alibaug. Speedboat joyrides available.", emoji: "⛴️", color: "bg-rose-50 border-rose-200" },
              ].map((b) => (
                <div key={b.beach} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{b.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{b.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{b.beach}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{b.distance}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{b.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEACH IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Kolaba Fort Alibaug low tide walk beach"
              fallback="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
              alt="Walking to Kolaba Fort at low tide Alibaug"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kolaba Fort at low tide: a 2 km walk across the sand to a 300-year-old Maratha fort with a freshwater well and original cannons. Check tide-forecast.com before you go.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Ferry (Gateway ↔ Mandwa, return)", "₹400"], ["Guesthouse (1–2 nights)", "₹800–1,500/night"], ["Food (2 days)", "₹600–900"], ["Local transport (auto)", "₹300–500"], ["Kolaba Fort boat (if needed)", "₹200–300"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Ferry / speedboat return", "₹400–800"], ["Beach resort (1–2 nights)", "₹4,000–10,000/night"], ["Resort meals + seafood dinners", "₹1,500–3,000"], ["Cab hire for beaches", "₹800–1,200"], ["Water sports at Nagaon", "₹800–2,000"]] },
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
              * All prices per person. Does not include travel within Mumbai to Gateway of India. The main cost variable is accommodation — budget options exist but book ahead on weekends in October–March.
            </p>
          </section>

          <AffiliateBlock destination="Alibaug" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Driving to Alibaug instead of taking the ferry", desc: "The road route (Mumbai–Alibaug via Pen) is 100 km and takes 3–4 hours in weekend traffic. The ferry is 1 hour and far more enjoyable. There is no scenario where the road is better unless you need your own car for extensive travel.", icon: "⛴️" },
                { title: "Missing the low tide window for Kolaba Fort", desc: "The walkable window is only 2–3 hours around low tide. Check tide-forecast.com the day before and plan your Day 1 afternoon accordingly. Missing it means a boat trip (₹200–300, fine but different).", icon: "🌊" },
                { title: "Coming on a Mumbai long weekend without booking ahead", desc: "On public holiday weekends, Alibaug gets overwhelmed with day-trippers from Mumbai. The beaches get crowded and dirty by midday. Come on a regular weekend, arrive Friday evening, leave Sunday morning.", icon: "📅" },
                { title: "Staying only on Alibaug main beach", desc: "Most tourists don't go beyond Alibaug Main Beach. Kihim (10 km north) is cleaner, quieter, and more scenic. If you only see Alibaug main beach, you've seen the least impressive part of the coastline.", icon: "🏖️" },
                { title: "Skipping the Konkan food", desc: "The Mumbai-facing tourist restaurants in Alibaug serve generic food. Walk 200m back from the beachfront to find the Konkan thalis: sol kadhi, surmai curry, crab masala, bombil fry. The food alone justifies the trip.", icon: "🍤" },
                { title: "Ignoring the last ferry timing", desc: "The last Mandwa–Gateway ferry is around 5–6 PM (confirm at the jetty). Miss it and you're on the 3-hour road route home. Build buffer time. If doing Korlai Fort on Day 2, plan your return from there by 3 PM.", icon: "⏰" },
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
                { icon: "⛴️", title: "Ferry Over Road — Always", desc: "Mumbai Gateway of India to Mandwa ferry (1 hr, ₹190–200) is vastly superior to the road route (3–4 hrs in traffic). Ferries run 6 AM–6 PM roughly every hour. Book at Maldar Catamaran counter at Gateway — arrive 30 min early on weekends.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏰", title: "Kolaba Fort: Check Tide Timings", desc: "The fort is walkable from Alibaug beach only during low tide (2–3 hour window). Check tide-forecast.com or ask your guesthouse. The fort has a Narsinha temple, a freshwater pond inside a saltwater fort, cannons, and old inscriptions.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏖️", title: "Which Beach?", desc: "Alibaug Beach (main, accessible, good for Kolaba Fort), Kihim (10 km north, cleanest, casuarina forest, occasional dolphins), Nagaon (20 km north, water sports), Kashid (40 km south, blue-flag, most scenic). For first visit: Kihim + Alibaug together.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍤", title: "Konkan Food Guide", desc: "Sol kadhi (kokum + coconut milk, pink digestive), surmai curry with rice, Alibaug chivda (rice flake snack), freshly caught bombil fry. Best spots: Hotel Pathare near the bus stand, or any homestay offering Konkan thali.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚫", title: "Avoid Summer Weekends", desc: "May–June: 35–38°C, extremely crowded with Mumbai day-trippers. The beach becomes littered by Sunday noon. October–March is ideal. January–February is perfect beach weather.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏨", title: "Where to Stay", desc: "Budget: Sunderban Resort, Drishti Beach Retreat (₹1500–3000). Mid-range: Alibaug Beach Club (₹4000–7000). Luxury: The Beach House (₹10000–20000, boutique). Book weekends 4–6 weeks ahead in October–March.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Alibaug itinerary including tide timings and ferry logistics within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Alibaug Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I get to Alibaug from Mumbai?", a: "Best route: Ferry from Gateway of India to Mandwa (1 hr, ₹190–200, Maldar or PNP Catamaran). Then bus or auto to Alibaug town (15 km, 30 min). By road: Mumbai to Alibaug via Pen (100 km, 3–4 hrs depending on traffic). The ferry is faster and far more enjoyable." },
                { q: "Is Alibaug better than Goa for a Mumbai weekend?", a: "For Mumbai residents, Alibaug has one key advantage: 1-hour ferry vs 8-10 hours to Goa. Alibaug is quieter, more Konkan-authentic, and less commercial than North Goa. South Goa beaches are more scenic. For a 2-day escape: Alibaug wins. For a week: Goa wins." },
                { q: "Can I walk to Kolaba Fort?", a: "Yes — at low tide, you can walk approximately 2 km across the sand to the fort. The walk takes 20–25 minutes. The window is 2–3 hours around low tide. Confirm tide timings with your guesthouse. The fort is NOT accessible during high tide — you'd need a boat (₹200–300)." },
                { q: "Is Alibaug safe for swimming?", a: "Alibaug Beach and Nagaon have lifeguards and are generally safe for swimming. Kihim and Kashid are excellent for swimming. Avoid swimming during monsoon (June–September) when currents are strong and jellyfish are common. The sea is calmest November–February." },
                { q: "What water sports are available near Alibaug?", a: "Nagaon Beach offers jet skiing, banana boat, and parasailing (₹400–1500/activity). Kihim is better for kayaking. Mandwa (ferry terminal area) has speedboat joyrides. Dive Alibaug runs basic snorkeling sessions in the clearer waters near Kolaba Fort." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Alibaug — Highlights"
            subtitle="The best of Alibaug in photos."
            spots={[
              { name: "Alibaug Landscape", query: "alibaug india landscape scenic beautiful travel", desc: "The stunning landscapes of Alibaug." },
              { name: "Alibaug Temple", query: "alibaug temple architecture heritage india", desc: "Historic temples and architecture in Alibaug." },
              { name: "Alibaug Street Scene", query: "alibaug street market local culture india", desc: "Local life and culture in Alibaug." },
              { name: "Alibaug Nature", query: "alibaug nature hills forest river india", desc: "Natural beauty around Alibaug." },
              { name: "Alibaug Sunset", query: "alibaug sunset golden hour india travel", desc: "Alibaug at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Maharashtra & Mumbai Escapes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mumbai — 4 Days in the City", href: "/blog/mumbai-4-days" },
                { label: "Tarkarli — Scuba Diving & Sindhudurg Fort", href: "/blog/tarkarli-2-days" },
                { label: "Goa — 5 Days", href: "/blog/goa-5-days" },
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

          <CombineWith currentSlug="alibaug-2-days" />
          <RelatedGuides currentSlug="alibaug-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
