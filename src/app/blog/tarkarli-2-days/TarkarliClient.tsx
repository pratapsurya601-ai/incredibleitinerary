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

const TARKARLI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "diving",    emoji: "🤿", label: "Diving & Snorkeling" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Tarkarli 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Tarkarli in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function TarkarliClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TARKARLI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tarkarli" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Tarkarli beach scuba diving Konkan coast clear water"
            fallback="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=85"
            alt="Tarkarli beach clear water scuba diving Konkan coast Maharashtra"
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
              <span className="text-white/70">Tarkarli 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Diving & Coast
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tarkarli in 2 Days:
                <em className="italic text-gold-light"> Scuba, Sindhudurg & the Malvan Coast</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s best mainland scuba destination. A 17th-century island fort built by Shivaji with his actual handprints in the wall. Dolphins at Devbagh. Malvani fish curry so good it has its own regional cuisine. Three hours from Goa.
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
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              My first scuba dive was at Tarkarli. The instructor pointed at a coral shelf and a lionfish glided out, unhurried. I hadn&apos;t expected this from a beach 9 hours from Mumbai. I dove again the next morning.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Tarkarli solves a specific problem: you want to scuba dive, but you can&apos;t get to the Andamans. On the Konkan coast of Maharashtra, where the Karli River meets the Arabian Sea, there are coral reefs 5 minutes from shore, a Shivaji-era island fort with his literal handprints embedded in the wall, and a regional cuisine — Malvani — that belongs in the same conversation as any coastal food culture in India. It&apos;s 100 km from Goa and almost nobody in Goa goes there.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–May" />
            <StatCard icon="🌊" label="Water Visibility" value="10–15 ft" />
            <StatCard icon="🗺️" label="Distance from Goa" value="100 km" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Tarkarli is strongly seasonal — it essentially closes during monsoon. Plan accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Nov–Mar", emoji: "✅", title: "Peak Season", desc: "Best water clarity (10–15 feet visibility), calmest sea, ideal diving and snorkeling conditions. December–February is absolute peak. Book beach huts 2–3 weeks ahead. Coolest temperatures (20–28°C).", color: "bg-emerald-50 border-emerald-200" },
                { season: "Oct & Apr–May", emoji: "🟡", title: "Shoulder Season", desc: "October can have late monsoon swells — diving is weather-dependent. April–May: sea is calmer than monsoon but getting hot (32–36°C). Diving continues through May but beach huts start to thin out.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🚫", title: "Monsoon — Avoid", desc: "Tarkarli almost entirely shuts during monsoon. The sea is too rough for water sports, beach huts close, the road from Kudal can flood. Don't plan a Tarkarli trip June–September. Visit instead in the cooler dry season.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. The main variable is accommodation — beach huts vs proper resorts.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Beach hut or cottage (₹800–1500)</td><td className="py-2.5 px-4">Beach resort (₹3500–8000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Snorkeling</td><td className="py-2.5 px-4">MTDC aqua sports (₹400–600)</td><td className="py-2.5 px-4">Private snorkeling boat</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Scuba</td><td className="py-2.5 px-4">₹1800–2500/intro dive</td><td className="py-2.5 px-4">Same + sunrise kayaking</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Snorkeling → Sindhudurg Fort → Malvani dinner. Day 2: Scuba diving → Devbagh dolphins → Vengurla → depart.
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
                title="Arrive, Snorkeling & Sindhudurg Fort"
                items={[
                  "Train or bus from Mumbai (9 hrs) or Goa (3 hrs by road). Nearest train station: Kudal Junction (Konkan Railway, 30 km from Tarkarli). From Mumbai: Tejas Express or Jan Shatabdi to Kudal. Auto from Kudal to Tarkarli: ₹400–500.",
                  activeTab === "A"
                    ? "Check in to a beach hut or cottage (₹800–1500). The huts right on Tarkarli beach are basic but ideally positioned. MTDC Tarkarli has budget cottages with direct beach access."
                    : "Check in to a beach resort (₹3500–8000). Atithi Bamboo Cottages and Rock Garden Resort are reliable options with better amenities and breakfast included.",
                  "Afternoon: Snorkeling at Tarkarli Beach through MTDC aqua sports (₹400–600/session). The coral reefs are 5 minutes from shore by inflatable boat. The water is calm in the sheltered cove. Even non-swimmers can participate — supervised with life jackets, 1–2m depth.",
                  "Sindhudurg Fort (5 km from Tarkarli, boat from Malvan jetty: ₹200 return, 10-minute crossing). Chhatrapati Shivaji Maharaj built this island fort in 1664 using an extraordinary technique: coral stones mixed with molten lead for waterproofing. The fort has Shivaji's actual handprints and footprints embedded in the stone — the only fort in India where his physical impressions were preserved.",
                  "The Shivaji temple inside Sindhudurg is one of only two temples in all of India where Shivaji himself is the main deity (not Shiva or Vishnu). This makes it uniquely significant.",
                  "The freshwater well inside the fort is a remarkable engineering achievement — a functioning freshwater spring on an island surrounded by sea. The original Portuguese-era walls are intact.",
                  "Evening: Malvani fish dinner at a beach shack near Tarkarli. Sol kadhi to start. Then surmai (kingfish) curry with rice, prawn rava fry, and bombil fry. This is one of India's finest regional fish cuisines — direct, spiced with local coconut and kokum, not watered down.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹5,000–7,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Scuba Diving, Devbagh & Vengurla"
                items={[
                  "Morning: Scuba diving (₹1800–2500/dive, PADI-certified instructors available). No experience needed for an intro dive — the instructor is with you at all times. Recommended operators: MTDC Tarkarli, Sai Scuba School. Avoid unregistered operators.",
                  "Best dive sites: Rock Garden (coral reef, seahorses, tropical fish), Tsunami Island (sunken boat wreck, moray eels), Devbagh Point (schooling fish, occasional barracuda). Best visibility: November–April.",
                  activeTab === "B"
                    ? "Sunrise kayaking (can be arranged through the resort) on the calm Karli River estuary before the dive. The Karli River meets the Arabian Sea at Devbagh — the confluence is one of the most beautiful spots on the Konkan coast."
                    : "After the dive, take a local boat to Devbagh confluence — where the Karli River meets the sea. This is the best spot for dolphin sightings: early morning (6–8 AM), ask local fishermen (₹300–500 for 1-hour trip).",
                  "Devbagh Beach — accessible by boat from Tarkarli (₹150–200). The beach is isolated and significantly more scenic than the main Tarkarli beach. The dolphins here are spotted regularly in the morning.",
                  "Afternoon: Vengurla Beach (30 km south). Portuguese church ruins, a working lighthouse, and a quieter beach than Tarkarli. The drive along the Konkan coast road is worth the time.",
                  "Malvani lunch before departing: crab masala, any local dhaba 200m from the beach (not the tourist-facing restaurants). The difference in quality and price is significant.",
                  "Depart: Auto back to Kudal Junction. Train or bus to Mumbai or Goa.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹5,000–8,000"}
              />
            </div>
          </section>

          {/* ── DIVING GUIDE ── */}
          <section id="diving" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🤿 Diving & Snorkeling Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Tarkarli is India&apos;s best mainland scuba destination. Here&apos;s how to make the most of the underwater experience.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", site: "Rock Garden", depth: "5–12m", note: "The main reef dive. Coral formations with clownfish, damselfish, and the occasional seahorse. Best for beginner and intermediate divers. Visibility: 10–15 feet. Accessible year-round (weather permitting).", emoji: "🪸", color: "bg-teal-50 border-teal-200" },
                { rank: "#2", site: "Tsunami Island (Wreck)", depth: "8–15m", note: "A sunken boat wreck that has become an artificial reef. Moray eels, barracuda, and schooling fish. More interesting for divers with some experience. Best in December–February.", emoji: "🚢", color: "bg-teal-50 border-teal-200" },
                { rank: "#3", site: "Devbagh Point", depth: "6–12m", note: "Schooling fish, occasional barracuda, and good coral coverage. The Devbagh confluence adds a river-sea dynamic to the dive. Best in the morning when tidal currents help visibility.", emoji: "🐟", color: "bg-amber-50 border-amber-200" },
                { rank: "#4", site: "MTDC Snorkeling Cove", depth: "1–2m", note: "The sheltered snorkeling area right off Tarkarli beach. Supervised by MTDC staff. Best for non-swimmers and beginners. Tropical fish visible even from the surface. No diving certification needed.", emoji: "🤿", color: "bg-amber-50 border-amber-200" },
              ].map((s) => (
                <div key={s.site} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{s.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{s.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.site}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">Depth: {s.depth}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DIVING IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="scuba diving coral reef tropical fish India underwater"
              fallback="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=900&q=80"
              alt="Scuba diving coral reef Tarkarli Maharashtra"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Rock Garden coral reef: India&apos;s best mainland diving. Not Andaman-quality visibility, but seahorses, clownfish, and moray eels within 30 minutes of your beach hut.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Beach hut (1–2 nights)", "₹800–1,500/night"], ["Snorkeling (MTDC)", "₹400–600"], ["Scuba intro dive", "₹1,800–2,500"], ["Sindhudurg boat", "₹200"], ["Food (2 days)", "₹600–900"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Beach resort (1–2 nights)", "₹3,500–8,000/night"], ["Private snorkeling boat", "₹800–1,200"], ["Scuba (2 dives)", "₹3,500–5,000"], ["Dolphin boat at Devbagh", "₹300–500"], ["Malvani meals + Vengurla", "₹1,000–2,000"]] },
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
              * All prices per person. Does not include travel to/from Kudal. Scuba prices vary by season — book directly with MTDC Tarkarli or Sai Scuba School for verified pricing.
            </p>
          </section>

          <AffiliateBlock destination="Tarkarli" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Using unregistered scuba operators", desc: "Tarkarli has unofficial operators at the beach who undercut certified centres. PADI-certified instructors follow safety protocols; uncertified operators may not. For an activity this risk-sensitive, book through MTDC Tarkarli or Sai Scuba School only.", icon: "🤿" },
                { title: "Coming during monsoon (June–September)", desc: "Tarkarli is essentially closed June–September. The sea is rough, beach huts close, diving stops, and the road from Kudal can flood. This is not a destination for monsoon tourism.", icon: "🌊" },
                { title: "Skipping Sindhudurg Fort for 'just the beach'", desc: "The beach is lovely but generic. Sindhudurg is unique in all of India — a 17th-century island fort with Shivaji's literal handprints in the stone and a freshwater well on an island. The boat trip is 10 minutes and ₹200 return. There is no excuse to skip it.", icon: "🏰" },
                { title: "Eating only at tourist-facing beach restaurants", desc: "The beachfront restaurants charge double for mediocre Malvani food. Walk 200m inland to find the local dhabas where fishermen eat — surmai curry, prawn fry, crab masala, sol kadhi, at half the price.", icon: "🍤" },
                { title: "Missing dolphin spotting at Devbagh", desc: "Dolphins are spotted regularly at the Devbagh confluence (Karli River + sea). The window is early morning (6–8 AM). Ask your beach hut for local fisherman contacts the evening before. It costs ₹300–500 and takes 1 hour.", icon: "🐬" },
                { title: "Not confirming diving conditions before booking", desc: "Visibility and sea conditions vary. Call your dive centre the day before to confirm. November–February is most reliable. October and April–May diving happens but is weather-dependent.", icon: "📞" },
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
                { icon: "🤿", title: "Best Scuba Dive Spots Near Tarkarli", desc: "Rock Garden (coral reef, seahorses), Tsunami Island (sunken boat wreck, moray eels), and Devbagh Point (schooling fish, barracuda). Book through MTDC Tarkarli or Sai Scuba School. Best visibility: November–April.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏰", title: "Sindhudurg Fort: What Makes It Special", desc: "Shivaji built this fort in 1664 using coral stones mixed with molten lead for waterproofing. The Shivaji Temple inside is one of only two temples in India where Shivaji is the main deity. His handprints and footprints are embedded in the wall.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐬", title: "Dolphin Spotting", desc: "Dolphins are regularly spotted at the Devbagh confluence area. Best time: early morning (6–8 AM) boat trips. Local fishermen's boats are most reliable (₹300–500 for 1-hour trip).", color: "bg-teal-50 border-teal-200" },
                { icon: "🌊", title: "Avoid Monsoon (June–September)", desc: "Tarkarli shuts almost entirely in monsoon — the sea is too rough for water sports, beach huts close, and the road from Kudal can flood. Visit October–May. November–March is absolute best for both beach and diving.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍤", title: "Malvani Cuisine", desc: "Tarkarli is in Malvan district, home to one of India's finest regional cuisines: sol kadhi (kokum-coconut), surmai kingfish curry, crab masala, prawn rava fry, and bombil fry. Walk to local dhabas 200m from the beach — not the tourist restaurants.", color: "bg-rose-50 border-rose-200" },
                { icon: "🚂", title: "Getting to Tarkarli", desc: "Nearest train: Kudal Junction (Konkan Railway, 30 km). From Mumbai: Tejas Express or Jan Shatabdi (9 hrs to Kudal). From Goa: Madgaon to Kudal (1.5 hrs by train or 3 hrs by road to Malvan). Auto from Kudal to Tarkarli: ₹400–500.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Tarkarli itinerary including scuba bookings and dive site recommendations within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Tarkarli Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Tarkarli good for non-swimmers?", a: "Yes — snorkeling in Tarkarli's sheltered cove is very gentle (calm, 1–2m depth, supervised by MTDC staff). Even children can participate. Scuba intro dives for non-swimmers are done in a controlled setting — the instructor is with you at all times. Devbagh boat rides and fort visits require no swimming." },
                { q: "Is the scuba diving in Tarkarli as good as Andaman or Lakshadweep?", a: "No — Andaman and Lakshadweep have visibility of 30–40 feet vs Tarkarli's 10–15 feet. Tarkarli is India's best mainland scuba destination (the nearest competitor is Netrani Island in Karnataka). For someone who can't travel to islands, Tarkarli is the best accessible option." },
                { q: "What is Sindhudurg Fort and how do I reach it?", a: "Sindhudurg is a 17th-century island fort 0.8 km offshore from Malvan town (5 km from Tarkarli). Boat from Malvan jetty: ₹200 return, 10-minute crossing. The fort has a freshwater well, Shivaji's handprints in the stone, temples, and the original Portuguese-era walls." },
                { q: "How far is Tarkarli from Goa?", a: "110 km from Goa (Mapusa/Panaji), approximately 3 hours by road via NH66. From Madgaon Railway Station by train: 1.5 hrs to Kudal, then 30 km to Tarkarli. Many Goa visitors add Tarkarli as a 1-night extension." },
                { q: "What time of year is best for Tarkarli scuba?", a: "November to April is best — sea is calm, water clarity is 10–15 feet, marine life is active. December–February has the highest visibility. October is good but can have late monsoon swells. May: slightly rougher but diving continues." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Tarkarli — Highlights"
            subtitle="The best of Tarkarli in photos."
            spots={[
              { name: "Tarkarli Landscape", query: "tarkarli india landscape scenic beautiful travel", desc: "The stunning landscapes of Tarkarli." },
              { name: "Tarkarli Temple", query: "tarkarli temple architecture heritage india", desc: "Historic temples and architecture in Tarkarli." },
              { name: "Tarkarli Street Scene", query: "tarkarli street market local culture india", desc: "Local life and culture in Tarkarli." },
              { name: "Tarkarli Nature", query: "tarkarli nature hills forest river india", desc: "Natural beauty around Tarkarli." },
              { name: "Tarkarli Sunset", query: "tarkarli sunset golden hour india travel", desc: "Tarkarli at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Konkan Coast & Maharashtra</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Alibaug — Mumbai's Beach Escape", href: "/blog/alibaug-2-days" },
                { label: "Goa — 5 Days on the Coast", href: "/blog/goa-5-days" },
                { label: "Mumbai — 4 Days in the City", href: "/blog/mumbai-4-days" },
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

          <CombineWith currentSlug="tarkarli-2-days" />
          <RelatedGuides currentSlug="tarkarli-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
