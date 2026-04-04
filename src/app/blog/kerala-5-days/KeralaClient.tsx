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

const KERALA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "route",       emoji: "📍", label: "The Route & Cities" },
  { id: "transport",   emoji: "🚗", label: "Getting Around" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "maps",        emoji: "🗺️", label: "Route Maps" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setP(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Kerala 5-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`}
        className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Kerala%205-Day%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`}
        target="_blank" rel="noopener noreferrer"
        className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
                <span className="text-teal mt-1 flex-shrink-0 text-xs">●</span>{item}
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

function RouteCard({ label, day, stops, distance, url, note, color }: {
  label: string; day: string; stops: string[]; distance: string;
  url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{label}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">{distance}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {stops.map((s, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{s}</span>
            {i < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps →
      </a>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function KeralaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",    sub: "₹2,500–4k/day",  color: "border-amber-300 bg-amber-50" },
    { id: "B" as const, emoji: "💑", label: "Couple",    sub: "₹7–12k/day",     color: "border-teal-300 bg-teal-50" },
    { id: "C" as const, emoji: "🧘", label: "Wellness",  sub: "Ayurveda focus",  color: "border-green-300 bg-green-50" },
    { id: "D" as const, emoji: "👨‍👩‍👧", label: "Family",  sub: "₹6–10k/day",     color: "border-blue-300 bg-blue-50" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KERALA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kerala" />

      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            imageKey="kerala"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="Kerala backwaters houseboat"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kerala 5 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal text-white text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Backwaters & Hills</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kerala in 5 Days:
                <em className="italic text-teal-300"> Backwaters, Hills & Beach</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Kochi · Munnar · Alleppey · Varkala — 4 complete plans, real costs, Google Maps routes and the houseboat mistake that ruins most Kerala trips.
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLE */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🌿 Kerala</span><span>·</span><span>🗓 5 Days</span><span>·</span><span>💰 From ₹15,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-teal pl-6 mb-10 bg-teal/5 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kerala doesn't reward rushing. The travellers who try to see everything in 5 days — Kochi, Munnar, Thekkady, Alleppey, Varkala, Kovalam — end up exhausted on buses and missing the whole point. This guide picks the four places that matter most and gives you enough time in each to actually feel something.
            </p>
          </blockquote>

          {/* Quick decision */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your travel style and jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-teal hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-teal mt-2 font-medium group-hover:underline transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration"    value="5 Days" />
            <StatCard icon="💰" label="Budget From" value="₹15,000" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🌿" label="Experience"  value="God's Own Country" />
          </div>

          {/* Route */}
          <section id="route" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 The Route — 4 Stops, 5 Days</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kerala is a long thin state running north to south along the coast. The smartest route flows south: fly into Kochi, go up to Munnar, come back down through Alleppey, end at Varkala. This avoids backtracking completely.
            </p>

            <div className="bg-parchment rounded-2xl border border-parchment-2 p-6 mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[
                  { city: "KOCHI", days: "Day 1", color: "bg-teal text-white" },
                  { city: "→", days: "",       color: "text-muted" },
                  { city: "MUNNAR", days: "Day 2", color: "bg-green-600 text-white" },
                  { city: "→", days: "",       color: "text-muted" },
                  { city: "ALLEPPEY", days: "Day 3–4", color: "bg-blue-600 text-white" },
                  { city: "→", days: "",       color: "text-muted" },
                  { city: "VARKALA", days: "Day 5", color: "bg-amber-600 text-white" },
                ].map((s, i) => (
                  s.city === "→"
                    ? <span key={i} className="text-muted font-bold text-lg">→</span>
                    : <div key={i} className={`px-4 py-2.5 rounded-xl text-center ${s.color}`}>
                        <p className="font-bold text-xs">{s.city}</p>
                        <p className="text-[0.62rem] opacity-80">{s.days}</p>
                      </div>
                ))}
              </div>
              <p className="text-sm text-muted font-light">
                Total distance: ~320km · All by road or private car · No flights needed after landing in Kochi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { city: "🌊 Kochi (Fort Cochin)", days: "1 day", why: "Kerala's most cosmopolitan city — 500 years of Portuguese, Dutch and British heritage in one square kilometre. The Chinese fishing nets, spice markets, and Jew Town are unlike anything else in India." },
                { city: "🌿 Munnar",              days: "1 day", why: "India's finest tea gardens at 1,600m altitude. The temperature drops 15°C from Kochi. The drive up through mist, waterfalls, and endless green is half the experience." },
                { city: "🛶 Alleppey (Alappuzha)", days: "2 days", why: "700km of interconnected backwater canals, lakes and rivers — India's Venice. The overnight houseboat experience is the single most unique thing you can do in Kerala." },
                { city: "🏖️ Varkala",            days: "1 day", why: "The most dramatic beach in South India — red laterite cliffs dropping straight into the Arabian Sea. Far better than overcrowded Kovalam." },
              ].map((item) => (
                <div key={item.city} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm text-ink">{item.city}</p>
                    <span className="text-[0.65rem] font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full">{item.days}</span>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Transport */}
          <section id="transport" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚗 Getting Around Kerala</h2>
            <p className="text-sm text-muted font-light mb-6">Kerala has great public transport but the hilly roads and long distances make a private car + driver the best choice for most travellers.</p>
            <div className="space-y-3">
              {[
                { icon: "🚗", title: "Private car + driver (recommended)",   desc: "Rs.10,000–Rs.14,000 for the full 5-day circuit. Driver handles mountain roads, waits at sights, arranges houseboats. Ask your hotel — avoid touts.", color: "bg-green-50 border-green-200" },
                { icon: "🚌", title: "KSRTC buses + trains",                  desc: "Budget option. Kochi to Munnar: 4hrs by bus (Rs.150). Munnar to Alleppey: 5hrs (Rs.200). Alleppey to Varkala: 2hrs train (Rs.80). Perfectly doable but slower.", color: "bg-blue-50 border-blue-200" },
                { icon: "🛶", title: "Houseboat (Alleppey)",                  desc: "Book at least 3 days ahead during peak season (Dec–Jan). Never book from touts at the boat jetty — always through your hotel or a registered operator.", color: "bg-teal-50 border-teal-200" },
                { icon: "✈️", title: "Fly into Kochi, out of Trivandrum",    desc: "Closest airport to Varkala is Trivandrum (TRV), 45min away. Fly in and out of different airports — saves backtracking to Kochi.", color: "bg-parchment border-parchment-2" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* Itineraries */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan, expand any day.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* PLAN A — BUDGET */}
            {activeTab === "A" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Rs.15,000–Rs.22,000 total</p>
                    <p className="text-xs text-amber-600 font-light">Transport: KSRTC buses + trains · Stay: Rs.600–Rs.1,500/night · Shared houseboat</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kochi — Fort Cochin"
                  items={[
                    "Fly into Kochi. Check in to a guesthouse in Fort Cochin — not the main city. Fort Cochin is a 20-min ferry ride away and where all the heritage is.",
                    "Chinese Fishing Nets at sunset (free) — the most photographed sight in Kerala. Come at 5:30pm when the light is golden.",
                    "Walk Jew Town and Mattancherry — spice warehouses, antique shops, the Dutch Palace (Rs.10 entry). The whole area smells of cardamom and pepper.",
                    "Dinner at Dal Roti near Princess Street — best budget dinner in Fort Cochin, Rs.150–Rs.250. Ask for the Kerala fish curry.",
                    "If timing works: Kathakali performance at Kerala Kathakali Centre (Rs.350) — classical dance drama, 6pm and 8pm shows daily.",
                  ]}
                  cost="Rs.800–Rs.1,500 excluding accommodation" />

                <DayCard day="Day 2" title="Munnar — Tea Gardens"
                  items={[
                    "6am KSRTC bus from Ernakulam to Munnar (4hrs, Rs.150). The mountain road is beautiful — sit on the left side.",
                    "Check in near the town centre (Rs.600–Rs.1,000/night). Leave your bags and head out immediately.",
                    "Eravikulam National Park — Nilgiri tahr (mountain goat), rolling tea gardens, best views in Munnar. Entry Rs.145. Book online — tickets sell out.",
                    "Tea Museum at Tata Tea plantation (Rs.100) — how Kerala tea goes from leaf to cup. 45 minutes, genuinely interesting.",
                    "Sunset from Top Station (25km from Munnar, shared jeep Rs.150) — on clear days you can see Tamil Nadu on the other side.",
                  ]}
                  cost="Rs.600–Rs.1,000 excluding accommodation" />

                <DayCard day="Day 3" title="Alleppey — Houseboat"
                  items={[
                    "Morning bus from Munnar to Alleppey (5hrs, Rs.200). Check in, drop bags.",
                    "Book a shared houseboat for the overnight experience (Rs.3,500–Rs.5,000/person including all meals). Don't book anything less — the cheap day-only boats are tourist traps.",
                    "3pm: Board houseboat. The first hour — leaving Alleppey town through the canals — is the most beautiful. Watch village life happen at water level.",
                    "Sunset on the lake: the boat anchors in a quiet spot away from other houseboats. You, the water, and the sound of frogs.",
                    "Dinner: the cook makes a full Kerala spread — fish curry, appam, stew, payasam. All included. One of the best meals you'll have in India.",
                  ]}
                  cost="Rs.3,500–Rs.5,000 for the houseboat night (includes all meals)" />

                <DayCard day="Day 4" title="Alleppey — Backwater Village"
                  items={[
                    "6am: Sunrise on the water. Breakfast on the boat as it slowly moves back to the jetty.",
                    "Afternoon: rent a bicycle (Rs.100) or kayak (Rs.300–Rs.500) and explore the smaller canals that houseboats can't access. The village life — children swimming, women washing clothes, toddy tappers climbing palms — is the real Kerala.",
                    "Punnamada Lake: the venue for the famous Nehru Trophy Snake Boat Race (August). Walk along the lake edge.",
                    "Coir Village homestay for the night (Rs.800–Rs.1,200) — more authentic than a hotel, watch coir rope being made by hand.",
                  ]}
                  cost="Rs.500–Rs.1,000 excluding accommodation" />

                <DayCard day="Day 5" title="Varkala — The Cliff Beach"
                  items={[
                    "Train from Alleppey to Varkala (2hrs, Rs.80). Walk or auto-rickshaw to the cliff.",
                    "Papanasam Beach — the cliff beach itself. The stretch at the base of the cliffs (not the tourist section at the top) is where locals swim.",
                    "Janardana Swamy Temple (no entry for non-Hindus but the surroundings are beautiful) — 2,000 years old, one of Kerala's most important temples.",
                    "Cliff walk at sunset — the 1km path along the cliff edge with the sea below. The most dramatic sunset in Kerala.",
                    "Dinner at Cliff House or any of the cliff-top restaurants — Kerala prawn curry is Rs.350–Rs.450. Take the evening train back or stay overnight.",
                  ]}
                  cost="Rs.800–Rs.1,500 excluding accommodation" />

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.15,000–Rs.22,000 including accommodation, transport + houseboat</span>
                </div>
              </div>
            )}

            {/* PLAN B — COUPLE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Couple Plan — Rs.50,000–Rs.80,000 for two</p>
                    <p className="text-xs text-teal-600 font-light">Private car + driver full circuit · Boutique heritage stays · Private houseboat</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kochi — Heritage & Spice"
                  items={[
                    "Stay at Brunton Boatyard or Old Harbour Hotel (Rs.6,000–Rs.12,000/night) — converted heritage buildings right on the water in Fort Cochin.",
                    "Private guided walk of Fort Cochin (Rs.800–Rs.1,200) — the guide knows which Dutch colonial building was a VOC warehouse, which alley was the Jewish ghetto.",
                    "Dinner at Oceanos or Fort House Restaurant — best seafood in Fort Cochin, Rs.2,500–Rs.3,500 for two. Order the Kerala-style karimeen (pearl spot fish).",
                    "Optional evening: private Kathakali performance with makeup demonstration (Rs.800–Rs.1,200 for the show + optional backstage pass).",
                  ]}
                  cost="Rs.8,000–Rs.15,000 for two" />

                <DayCard day="Day 2" title="Munnar — Mist & Tea"
                  items={[
                    "Private car drives you up to Munnar (4hrs). The mountain road is the experience — ask your driver to stop at the first viewpoint above the clouds.",
                    "Stay at Windermere Estate or Tea Bungalow (Rs.5,000–Rs.10,000/night) — working tea estates, wake up to mist over green hills.",
                    "Private tea plantation walk with a guide (Rs.500–Rs.800) — learn to identify the best leaves, watch the processing.",
                    "Sunset at Top Station with just your driver — far quieter than the tourist jeep groups.",
                    "Dinner in-property: most estate stays cook to order. Kerala sadya on banana leaf — the best version of this meal.",
                  ]}
                  cost="Rs.5,000–Rs.10,000 for two" />

                <DayCard day="Day 3" title="Alleppey — Private Houseboat"
                  items={[
                    "Drive from Munnar to Alleppey (5hrs). Private houseboat from 1pm (Rs.12,000–Rs.20,000/night for two, AC cabin, all meals included).",
                    "Why private: you choose where the boat anchors, what the cook makes, what time you wake up. The shared boats run on a schedule.",
                    "The boat goes through Vembanad Lake into the quieter Kuttanad region — the rice bowl of Kerala, paddy fields below sea level.",
                    "Sunset: ask your captain to anchor facing west in open water. Just the two of you, the lake turning gold.",
                    "Night meal on the boat deck — the cook lights candles, Kerala prawn curry, rice, fresh coconut chutney.",
                  ]}
                  cost="Rs.12,000–Rs.20,000 for two (private houseboat with all meals)" />

                <DayCard day="Day 4" title="Alleppey — Kayak & Village"
                  items={[
                    "Morning: private kayak tour through village canals (Rs.1,500–Rs.2,500 for two with guide). The small canals are Kerala as it actually is — not the tourist version.",
                    "Lunch at a local family home (arranged through your hotel, Rs.400–Rs.600/person) — eat where the boat owners eat.",
                    "Afternoon: Marari Beach — 20km from Alleppey, one of Kerala's cleanest and most empty beaches. Stay at Marari Beach Resort for the night if budget allows (Rs.8,000–Rs.15,000).",
                    "Sundowner: coconut palm-fringed beach, no crowds, fishing boats in the distance.",
                  ]}
                  cost="Rs.4,000–Rs.8,000 for two" />

                <DayCard day="Day 5" title="Varkala — Cliff Sunset"
                  items={[
                    "Drive to Varkala (2.5hrs). Check in to a cliff-top heritage property — Clafouti or Abhinetry (Rs.4,000–Rs.8,000/night).",
                    "Morning swim at the beach below the cliffs — the waves are stronger than Alleppey but the setting is extraordinary.",
                    "Cliff walk at 5pm — sunset from the cliff edge with the Arabian Sea below.",
                    "Final dinner: The Treatment, Varkala — best food on the cliff, Rs.2,500–Rs.3,500 for two.",
                  ]}
                  cost="Rs.5,000–Rs.10,000 for two" />

                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 5-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.50,000–Rs.80,000 including accommodation, transport + private houseboat</span>
                </div>
              </div>
            )}

            {/* PLAN C — WELLNESS */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="text-sm font-medium text-green-800">Wellness Plan — Ayurveda-focused</p>
                    <p className="text-xs text-green-600 font-light">Kerala is the birthplace of Ayurveda · Minimum 3-day treatment recommended for real results</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kochi — Arrival + Consultation"
                  items={[
                    "Arrive and check in to an Ayurvedic resort — Kerala Ayurveda Ltd or Kairali Ayurvedic Village.",
                    "Initial doctor consultation (pulse diagnosis, prakriti assessment) — this determines your treatment plan.",
                    "First treatment: Abhyanga (full-body oil massage, 60 min) — not relaxation massage, therapeutic. You'll feel the difference.",
                    "Sattvic dinner (Ayurvedic diet): no meat, no spice, seasonal vegetables, specific to your constitution.",
                  ]}
                  cost="Rs.3,000–Rs.8,000/day for treatment packages" />

                <DayCard day="Day 2–3" title="Munnar — Treatment + Nature"
                  items={[
                    "Somatheeram Ayurvedic Resort in Munnar or The Elephant Court — world-renowned Ayurvedic centres in the hills.",
                    "Daily treatments: Shirodhara (warm oil poured on forehead — the most deeply relaxing experience in India), Kizhi (herbal pouch massage).",
                    "Yoga and pranayama at 6am. Meditation sessions at sunset.",
                    "Between treatments: walking in the tea gardens. The fresh air at 1,600m altitude is part of the cure.",
                    "Kerala diet strictly followed — no alcohol, limited coffee, high fibre.",
                  ]}
                  cost="Rs.4,000–Rs.12,000/day for treatment + accommodation at wellness resorts" />

                <DayCard day="Day 4" title="Alleppey — Houseboat Detox"
                  items={[
                    "Private Ayurvedic houseboat (Rs.15,000–Rs.25,000/night for two) — a certified Ayurvedic practitioner travels with the boat.",
                    "Morning treatments on the water. Afternoon floating through the backwaters.",
                    "Special Ayurvedic meals prepared by onboard cook: kanji (rice gruel), moong dal, steamed vegetables.",
                    "This is rare and genuinely extraordinary — Ayurvedic treatment while drifting through the Kerala backwaters.",
                  ]}
                  cost="Rs.15,000–Rs.25,000/night for Ayurvedic houseboat" />

                <DayCard day="Day 5" title="Varkala — Beach Recovery"
                  items={[
                    "Varkala's mineral-rich black beach sand is used in Ayurvedic treatments (sand therapy).",
                    "Morning: walk the beach at 6am. The Papanasam Beach is said to have therapeutic water.",
                    "Afternoon: final treatment session at any of Varkala's cliff-top Ayurvedic centres (Rs.1,500–Rs.3,000 for a 90-min session).",
                    "Buy authentic Ayurvedic products to take home: Kottakkal Arya Vaidya Sala is the most trusted brand. Available at any Kerala pharmacy.",
                  ]}
                  cost="Rs.2,000–Rs.4,000" />

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-green-700 uppercase tracking-wide">Total 5-Day Wellness Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.40,000–Rs.1,00,000 depending on resort and treatment intensity</span>
                </div>
              </div>
            )}

            {/* PLAN D — FAMILY */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Family Plan — Rs.60,000–Rs.90,000 for four</p>
                    <p className="text-xs text-blue-600 font-light">Private car mandatory · Skip Varkala (waves too strong for children) · Add Thekkady wildlife</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kochi — History for Kids"
                  items={[
                    "Chinese Fishing Nets at sunset — children love watching them being operated by the fishermen. Completely free.",
                    "Kerala Folklore Museum (Rs.150) — 3 floors of traditional Kerala art, costumes and instruments. Kids engage well with the visual displays.",
                    "Spice market walk in Mattancherry — children are fascinated by the smells and different spices. Buy a small spice box to take home.",
                    "Kathakali makeup demonstration (Rs.350) — seeing a performer transform into a character in 2 hours is genuinely spectacular for children.",
                  ]}
                  cost="Rs.2,000–Rs.3,500 for family of four" />

                <DayCard day="Day 2" title="Thekkady — Wildlife"
                  items={[
                    "Drive from Kochi to Thekkady (5hrs). Periyar Wildlife Sanctuary — elephants, bison, deer, occasionally tigers at the lakeside.",
                    "Boat safari on Periyar Lake (Rs.150-Rs.500/person) — the only way to see wildlife from the water. Morning departures are best.",
                    "Spice plantation walk (Rs.200-Rs.400/person) — see pepper, cardamom and vanilla growing. Children love picking and smelling spices.",
                    "Night: stay in a jungle lodge near the reserve (Rs.4,000–Rs.8,000/night for a family room).",
                  ]}
                  cost="Rs.4,000–Rs.8,000 for family of four" />

                <DayCard day="Day 3" title="Munnar — Tea + Mountains"
                  items={[
                    "Drive from Thekkady to Munnar (3hrs). Children love the winding mountain roads.",
                    "Eravikulam National Park — the Nilgiri tahr mountain goats come very close to visitors. Children are delighted.",
                    "Mattupetty Dam and Indo-Swiss Farm — boating on the reservoir (Rs.100-Rs.150/person). Dairy farm visit.",
                    "Stay at a tea estate bungalow — children get to run through tea gardens.",
                  ]}
                  cost="Rs.3,000–Rs.5,000 for family of four" />

                <DayCard day="Day 4–5" title="Alleppey — Houseboat"
                  items={[
                    "A private houseboat is essential for families — children have space to move around safely.",
                    "Rs.12,000–Rs.20,000/night for a 2-cabin private houseboat (fits family of 4–5).",
                    "Children can help the captain steer (supervised), watch the cook prepare meals, spot kingfishers and egrets.",
                    "Day 5: Explore the smaller canals by shikara (small rowing boat) — Rs.400/hour. The canals are narrow and magical.",
                    "Coir making demonstration at a village — children can try making coir rope.",
                  ]}
                  cost="Rs.12,000–Rs.20,000 for private houseboat (all meals included)" />

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mt-4">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 5-Day Cost (family of four) · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.60,000–Rs.90,000 including accommodation, transport + houseboat</span>
                </div>
              </div>
            )}
          </section>

          {/* Budget table */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-green-700 text-center">🧘 Wellness</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">👨‍👩‍👧 Family</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "₹3,000–₹7,500",  "₹30,000–₹60,000", "₹20,000–₹60,000", "₹25,000–₹40,000"],
                    ["🍽 Food & Drinks",      "₹3,000–₹5,000",  "₹8,000–₹15,000",  "Included",         "₹8,000–₹12,000"],
                    ["🚗 Transport",          "₹2,000–₹3,000",  "₹10,000–₹14,000", "₹10,000–₹14,000", "₹12,000–₹16,000"],
                    ["🛶 Houseboat",          "₹7,000–₹10,000", "₹12,000–₹20,000", "₹15,000–₹25,000", "₹12,000–₹20,000"],
                    ["🎯 Activities",         "₹2,000–₹3,500",  "₹3,000–₹6,000",   "₹15,000–₹40,000", "₹4,000–₹8,000"],
                    ["TOTAL (per person)",    "₹15,000–₹22,000","₹25,000–₹40,000", "₹40,000–₹1,00,000","₹15,000–₹22,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices INR 2026 per person unless stated. Houseboat row is total cost for the vessel.</p>
          </section>

          {/* Affiliate block */}
          <AffiliateBlock
            destination="Kerala"
            hotels={[
              { name: "Old Harbour Hotel", type: "Heritage · Fort Cochin", price: "From ₹6,000/night", rating: "5", badge: "Best in Kochi", url: "https://www.booking.com/hotel/in/old-harbour-cochin.html?aid=2820480" },
              { name: "Windermere Estate", type: "Tea Estate · Munnar",   price: "From ₹5,000/night", rating: "4", badge: "Couple pick",    url: "https://www.booking.com/hotel/in/windermere-estate-munnar.html?aid=2820480" },
              { name: "Marari Beach Resort",type: "Beach · Alleppey",     price: "From ₹8,000/night", rating: "5", badge: "Most peaceful",  url: "https://www.booking.com/hotel/in/marari-beach-resort.html?aid=2820480" },
              { name: "Abhinetry",          type: "Cliff-top · Varkala",  price: "From ₹3,500/night", rating: "4", badge: "Best views",     url: "https://www.booking.com/hotel/in/abhinetry-varkala.html?aid=2820480" },
            ]}
            activities={[
              { name: "Alleppey Houseboat Private Tour",     duration: "Overnight", price: "From ₹8,000/boat",   badge: "Must do",        url: `https://www.getyourguide.com/alleppey-l1234/?partner_id=PSZA5UI` },
              { name: "Periyar Wildlife Boat Safari",         duration: "3 hours",   price: "From ₹500/person",   badge: "Best for families", url: `https://www.getyourguide.com/thekkady-l1234/?partner_id=PSZA5UI` },
              { name: "Fort Cochin Heritage Walk",            duration: "3 hours",   price: "From ₹800/person",   url: `https://www.getyourguide.com/kochi-l1234/?partner_id=PSZA5UI` },
              { name: "Kerala Cooking Class — Fort Cochin",  duration: "3 hours",   price: "From ₹1,200/person",  url: `https://www.getyourguide.com/kochi-l1234/?partner_id=PSZA5UI` },
            ]}
            pdfProductId="goa-3-days-pdf"
          />

          {/* Destination Gallery */}
          <DestinationGallery
            title="Kerala — Must-See Places"
            subtitle="Click each thumbnail to explore Kerala's most beautiful destinations."
            spots={[
              { name: "Alleppey Backwaters",    query: "kerala backwaters houseboat canals india",          desc: "700km of interconnected canals, lakes and rivers. The overnight houseboat is the single most unique experience in Kerala." },
              { name: "Munnar Tea Gardens",     query: "munnar tea gardens kerala hills mist india",        desc: "India's finest tea estates at 1,600m altitude. The temperature drops 15°C from the coast — wake up to mist and green hills." },
              { name: "Fort Cochin",            query: "fort cochin chinese fishing nets kerala india",      desc: "500 years of Portuguese, Dutch and British heritage. The Chinese fishing nets at sunset are Kerala's most iconic image." },
              { name: "Varkala Cliff Beach",    query: "varkala cliff beach kerala india sunset",           desc: "Red laterite cliffs dropping straight into the Arabian Sea. The most dramatic beach in South India." },
              { name: "Periyar Wildlife",       query: "periyar lake thekkady kerala wildlife elephant",    desc: "Spot elephants, bison and deer on a boat safari across Periyar Lake inside the wildlife sanctuary." },
            ]}
          />

          {/* Route Maps */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps</h2>
            <p className="text-sm text-muted font-light mb-6">Open these in Google Maps the night before each day.</p>
            <div className="space-y-4">
              <RouteCard label="Day 1" day="Kochi — Fort Cochin Circuit"
                stops={["Chinese Fishing Nets", "Mattancherry Palace", "Jew Town", "St. Francis Church", "Kathakali Centre"]}
                distance="4km walking · Half day" color="border-teal-200 bg-teal-50"
                note="Everything in Fort Cochin is walkable — no transport needed once you're there. Start at the fishing nets for morning light."
                url="https://www.google.com/maps/dir/Chinese+Fishing+Nets+Kochi/Mattancherry+Palace/Jew+Town+Kochi/St+Francis+Church+Kochi" />

              <RouteCard label="Day 2" day="Kochi to Munnar"
                stops={["Kochi", "Cheeyappara Waterfalls", "Munnar"]}
                distance="~130km · 4hrs · Beautiful mountain drive"
                color="border-green-200 bg-green-50"
                note="Stop at Cheeyappara Waterfalls halfway (roadside, free). Sit on the left side of the bus for the best valley views."
                url="https://www.google.com/maps/dir/Kochi/Munnar+Kerala" />

              <RouteCard label="Day 3" day="Munnar to Alleppey"
                stops={["Munnar", "Alleppey (Alappuzha)"]}
                distance="~165km · 5hrs · Drive through rubber and spice plantations"
                color="border-blue-200 bg-blue-50"
                note="Leave Munnar by 8am to reach Alleppey in time for houseboat check-in at 1pm. The road passes through Kottayam — stop for Kerala sadya lunch."
                url="https://www.google.com/maps/dir/Munnar+Kerala/Alleppey+Kerala" />

              <RouteCard label="Day 5" day="Alleppey to Varkala"
                stops={["Alleppey", "Varkala Cliff"]}
                distance="~155km · 2hrs by train or 3hrs by road"
                color="border-amber-200 bg-amber-50"
                note="Train is better than road here — Alleppey to Varkala (Rs.80, 2hrs). The coastal railway has great views. Taxi from Varkala station to cliff is Rs.150."
                url="https://www.google.com/maps/dir/Alleppey+Kerala/Varkala+Kerala" />
            </div>
          </section>

          {/* Mistakes */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🛶", title: "Booking a day houseboat instead of overnight",
                  desc: "Day houseboats are tourist traps — you spend 4 hours on the main tourist canal with 50 other boats, turn around, and go home. The overnight experience is completely different. The backwaters clear out after 4pm and the real Kerala emerges.", color: "bg-white border-parchment-2" },
                { icon: "🏖️", title: "Going to Kovalam instead of Varkala",
                  desc: "Kovalam is overcrowded, overpriced and has seen better days. Varkala's cliff beach is 10x more dramatic and far less touristy. Unless you're already in Trivandrum, always choose Varkala.", color: "bg-white border-parchment-2" },
                { icon: "⏰", title: "Not leaving enough time in Alleppey",
                  desc: "Most itineraries give Alleppey one overnight houseboat and move on. The real experience — exploring the village canals by kayak, watching village life at water level — needs a second day.", color: "bg-white border-parchment-2" },
                { icon: "🌧️", title: "Visiting during peak monsoon without knowing what to expect",
                  desc: "June–August is monsoon. Munnar and Thekkady are beautiful. Beaches and houseboats are not. The backwaters are actually fine but check with your operator before booking.", color: "bg-white border-parchment-2" },
                { icon: "🍽️", title: "Only eating at tourist restaurants",
                  desc: "The best Kerala food costs Rs.100–Rs.150 at a local meals restaurant (a proper Kerala sadya on banana leaf with unlimited refills). Any restaurant with an English menu and photos on the wall charges 5x for half the quality.", color: "bg-white border-parchment-2" },
              ].map((m) => <TipCard key={m.title} {...m} />)}
            </div>
          </section>

          {/* Pro Tips */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🐟", title: "Order karimeen (pearl spot fish)", desc: "Kerala's signature fish, found only in the backwaters. Only available in Alleppey. Grilled in a banana leaf. Order it as soon as you get off the houseboat.", color: "bg-teal-50 border-teal-200" },
                { icon: "☂️", title: "September is the best month", desc: "Post-monsoon Kerala is extraordinarily green. Waterfalls are full, tea gardens are vivid, and prices are 30-40% lower than December. The weather is warm but not brutal.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌅", title: "Watch sunrise from a houseboat", desc: "Set your alarm for 5:30am. The backwaters at dawn — mist on the water, egrets flying, fishermen setting their nets — is the most peaceful experience in India.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎭", title: "Kathakali is worth it if you understand it", desc: "Buy the 'full show with makeup' ticket (Rs.500-Rs.800). Arrive 1 hour early to watch the 2-hour makeup transformation. Without context the dance looks strange; with context it's extraordinary.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍌", title: "Kerala banana varieties", desc: "Kerala has 50+ banana varieties. The Nendran banana (large, thick-skinned) is made into chips — buy them fresh from any market for Rs.60-Rs.80/pack.", color: "bg-green-50 border-green-200" },
                { icon: "💆", title: "Do one Ayurvedic treatment minimum", desc: "Even if you're not on the wellness plan: one 60-min Abhyanga massage (Rs.1,200-Rs.2,000 at any certified centre) will tell you why Kerala Ayurveda is different from spa massage anywhere else.", color: "bg-green-50 border-green-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we'll send a personalised Kerala itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kerala Trip →
              </button>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Kerala?", a: "5 days covers the best of Kerala — Kochi, Munnar, Alleppey and Varkala. 7 days lets you slow down and add Thekkady wildlife. 10 days for the complete experience including Kovalam and Palakkad." },
                { q: "What is the best time to visit Kerala?", a: "October to March. September-November is ideal — post-monsoon greenery, lower prices, fewer crowds. December-January is peak season with the best weather. The monsoon (June-August) is beautiful in the hills but avoid beach destinations." },
                { q: "How much does a Kerala houseboat cost?", a: "Shared houseboat: Rs.3,500–Rs.5,000/person including all meals. Private houseboat for two: Rs.8,000–Rs.15,000/night. Luxury private with AC: Rs.20,000–Rs.40,000/night. Always includes breakfast, lunch, dinner and snacks." },
                { q: "Is Kerala good for solo travellers?", a: "One of India's best states for solo travel — high literacy, safe, great public transport. The overnight train from Kochi to Varkala (Rs.80, 2hrs) is perfectly safe. Munnar has good solo guesthouses. The main challenge is the houseboat — expensive solo." },
                { q: "What is Kerala's signature food?", a: "Kerala sadya — a feast of 20+ dishes served on a banana leaf, eaten with your hands. Appam with stew. Karimeen (pearl spot fish) grilled in banana leaf. Kerala prawn curry. Puttu and kadala curry for breakfast. Payasam for dessert. All extraordinary." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa in 3 Days — Complete Guide",        href: "/blog/goa-3-days",         soon: false },
                { label: "Rajasthan 7 Days — Royal Circuit",       href: "/blog/rajasthan-7-days",    soon: false },
                { label: "Golden Triangle — Delhi, Agra, Jaipur",  href: "/blog/golden-triangle-7-days", soon: true },
                { label: "Browse All India Packages",              href: "/#packages",                soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "Read →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kerala-5-days" />
          <RelatedGuides currentSlug="kerala-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
