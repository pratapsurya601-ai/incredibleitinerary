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
import Stay22Widget from "@/components/ui/Stay22Widget";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";


const GOA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "northsouth",  emoji: "📍", label: "North vs South Goa" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "maps",        emoji: "🗺️", label: "Route Maps" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Goa 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Goa in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

// ── Route Map Card ────────────────────────────────────────────────────────────
function RouteCard({ plan, day, stops, distance, url, note, color }: {
  plan: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{plan}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">
          {distance}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps →
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function GoaBlogClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C" | "D">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "💑", label: "Couple", sub: "₹8–15k/day", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "🎉", label: "Party", sub: "₹10–20k/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
    { id: "D" as const, emoji: "🧘", label: "Relaxed", sub: "₹6–10k/day", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GOA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Goa" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            imageKey="goaHero"
            fallback="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=85"
            alt="Goa beach at golden hour"
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
              <span className="text-white/70">Goa 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Coast
                </span>
                <span className="text-white/60 text-xs">March 19, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Goa in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                4 complete plans with real timings, actual costs, Google Maps routes — and the mistakes that ruin most Goa trips.
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
              <span>💰 From ₹7,200</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most people waste their first day recovering from travel, overpay for beach shacks, and leave without seeing the side of Goa that actually changes how you think about India. This guide fixes all three.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── NORTH VS SOUTH ── */}
          <section id="northsouth" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 North vs South Goa</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This is the single most important decision. Most people make it wrong.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "North Goa", emoji: "🎉", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","First-timers, groups, nightlife, budget"],["Beaches","Baga, Calangute, Anjuna, Vagator"],["Budget","₹800–₹2,500/night"],["Vibe","Loud, social, energetic"]],
                  note: "Calangute & Baga are overcrowded Oct–Jan. Wake up before 7am for empty beaches." },
                { title: "South Goa", emoji: "🧘", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Couples, relaxed travellers, luxury"],["Beaches","Palolem, Agonda, Butterfly Beach"],["Budget","₹1,500–₹6,000/night"],["Vibe","Quiet, boutique, Portuguese-feel"]],
                  note: "Nightlife is nearly nonexistent. Cab to North Goa = 45–60 min, ₹800–₹1,200." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Stay in North Goa, day-trip to South. You get both worlds. Only exception: couples going specifically for Palolem — stay south.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹7,200" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="✈️" label="Airports" value="Mopa / Dabolim" />
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

            {/* ── PLAN A ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — North Goa Base (Anjuna/Vagator)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Zostel / goStops · ₹600–₹1,200/night · Scooter: ₹300–₹400/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Orient, Don't Overspend"
                  items={["Airport → rent scooter immediately (₹300–₹400/day) — non-negotiable","First meal at a local dhaba, not a beach shack. Fish thali ₹150–₹200.","3pm: Vagator Beach — dramatic red cliffs, zero water sport touts","5:30pm: Walk up to Chapora Fort (free) — the Dil Chahta Hai fort. Stay for sunset.","Evening: Dinner on Anjuna–Vagator road strip. ₹350–₹500 with a beer."]}
                  cost="₹1,800–₹2,500 excluding accommodation" />
                <DayCard day="Day 2" title="Beaches + Old Goa (Everyone Skips This)"
                  items={["8am: Anjuna Beach north end — empty at this hour, walk the cliffs","10am: Drive to Old Goa (25 min). Basilica of Bom Jesus (free, 9am) — 400-year-old preserved saint. 45 min.","12:30pm: Lunch at Viva Panjim, Panaji — authentic home food ₹300–₹450/person. Book ahead or arrive at 12 sharp.","Walk Fontainhas Latin Quarter — Portuguese heritage, free, 45 min","4:30pm: Baga Beach — afternoon crowd leaving, good light for photos","6:30pm: Thalassa, Vagator — sunset drinks ₹600–₹900"]}
                  cost="₹1,500–₹2,200 excluding accommodation" />
                <DayCard day="Day 3" title="Dudhsagar Falls + Departure (6am Start)"
                  items={["6:30am departure — 65km to Mollem, 1.5hrs. Leave early to beat the queue.","Book jeep safari night before — ₹800–₹1,000/person (search 'Dudhsagar jeep booking')","Swim at base of India's 5th tallest waterfall. Back by 1:30pm.","Lunch at Mollem or Ponda on the drive back","Stop at Ponda market for cashews (₹150–₹250/kg) and feni (₹250–₹400) before airport"]}
                  cost="₹1,200–₹1,800 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹10,000–₹15,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple Plan — Morjim or Ashvem Base</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Boutique beach huts with breakfast · ₹2,500–₹5,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Slow Start, Strong Finish"
                  items={["Arrive, check in — do nothing until noon. Goa punishes couples who rush Day 1.","Late breakfast at Cafe Nu, Morjim — best breakfast spread in North Goa","Morjim Beach: hire sunbeds (₹200–₹300, negotiable), swim, read","4pm: Drive to Ashvem Beach (10 min) — better sunset angle","La Plage restaurant: sunset drinks ₹1,200–₹1,800 for drinks + snacks","Dinner at Sublime, Morjim — book ahead. Chef's tasting menu ₹2,200/person. Worth every rupee."]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="South Goa Day Trip — Changes Everything"
                  items={["6:30am departure — 75km to Palolem, 1hr 45min. Yes, worth the drive.","10am: Kayak to Butterfly Beach (₹500–₹600/kayak, 45min paddle). Only accessible by water.","1pm: Lunch at Café del Mar, Palolem — fish curry + sol kadhi ₹1,200–₹1,600 for two","3pm: Agonda Beach (20 min from Palolem) — quieter, southern end is best, stay for sunset","Optional stop at Margao for bebinca — Goa's traditional layered dessert from a local bakery","Back to Morjim by 9pm"]}
                  cost="₹4,000–₹6,500 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Culture + Spice Farm + Last Beach Evening"
                  items={["9am: Café Bodega breakfast in Panaji courtyard — ₹600–₹800 for two","Fontainhas Heritage Walk — 45 min, free. Best light in the morning.","Old Goa churches — Basilica + Se Cathedral. 1.5 hours, free.","1pm: Sahakari Spice Farm, Ponda — ₹600–₹800/person, traditional Goan lunch included","Back by 4pm — last evening at Morjim. Sunset cocktails at your favourite spot."]}
                  cost="₹4,000–₹6,000 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹35,000–₹55,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Party Plan — Baga or Calangute Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Central hotel or split Airbnb villa · ₹3,000–₹6,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Beach Setup + Night 1"
                  items={["Arrive, check in, beach by 3pm — Baga Beach, Britto's shack","Pre-drinks at the villa — saves ₹500–₹800/person vs club prices","10pm: Tito's Lane — entry ₹500–₹1,500. Tito's + Mambo's are adjacent (one ticket covers both on weekdays)","Alternative: Curlies at Anjuna — better music, more underground, starts 11pm"]}
                  cost="₹3,000–₹5,000/person (excl. accommodation)" />
                <DayCard day="Day 2" title="Recovery + Water Sports + Night 2"
                  items={["Lazy morning — non-negotiable","12pm–3pm: Water sports at Baga. Banana boat ₹300, jet ski ₹700, parasailing ₹800–₹1,200. Bargain — first price is 40% inflated.","5:30pm: Chapora Fort or Thalassa, Vagator for sunset","10pm: Hill Top, Vagator or Nyex, Anjuna — check Instagram for which night has the big party. Entry ₹500–₹1,000."]}
                  cost="₹3,500–₹6,000/person (excl. accommodation)" />
                <DayCard day="Day 3" title="Market + Final Night"
                  items={["If Wednesday: Anjuna Flea Market 10am–6pm","If Saturday: Arpora Saturday Night Market 6pm–midnight (better than Anjuna — more local designers, live music, free entry)","Otherwise: sleep until noon, beach afternoon","Final night: Sinq (Calangute) for mainstream, Chronicle (Arpora) for local crowd"]}
                  cost="₹2,500–₹5,000/person (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹20,000–₹35,000 including accommodation + nightlife</span>
                </div>
              </div>
            )}

            {/* ── PLAN D ── */}
            {activeTab === "D" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Relaxed Plan — Agonda or Palolem Base (South Goa)</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Beach huts with breakfast · ₹2,000–₹4,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive and Do Absolutely Nothing"
                  items={["Walk full length of Agonda Beach — 40 minutes end to end","Find a beach cafe you like. Eat there twice today.","Afternoon: Read. No agenda. That's the plan.","5:30pm: Walk to southern end — fishing boats come in around this time","Dinner at Dunhill Beach Bar — ask what fresh catch came in today"]}
                  cost="₹1,500–₹2,500 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Yoga + Kayak + Cabo de Rama"
                  items={["7:30am: Yoga at your beach hut — ₹400–₹600/session","10am: Drive to Palolem (20 min), kayak to Butterfly Beach (45 min paddle each way)","Butterfly Beach: only accessible by water, genuinely secluded, 1.5hrs there","1:30pm: Lunch at Palolem — buy fish at market, shack cooks it for ₹100–₹150 extra charge","3pm: Cabo de Rama Fort (40 min drive) — free, completely empty, cliff views better than anything in North Goa","Sunset at the fort (6:15pm) → 15 min drive back to Agonda"]}
                  cost="₹2,500–₹4,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Culture Day + Coastal Drive + Departure"
                  items={["8am: Drive to Panaji (60km, 1hr 20min)","9:30am: Goa State Museum — ₹30 entry, genuinely interesting, always empty","Fontainhas Heritage Walk — 45 min, free","12pm sharp: Viva Panjim for lunch — arrive on time, queue forms at 12:15","Coastal drive Panaji → Candolim — 18km, 45 min with stops. Better than any guided tour.","5pm: Fort Aguada for final sunset → airport"]}
                  cost="₹3,000–₹5,000 for two (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹18,000–₹28,000 including accommodation</span>
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
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">💑 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">🎉 Party</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🧘 Relaxed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹2,400–₹3,600", "₹9,000–₹15,000", "₹9,000–₹18,000", "₹7,500–₹12,000"],
                    ["🍽 Food & Drinks", "₹1,800–₹2,800", "₹6,000–₹9,000", "₹4,000–₹7,000", "₹4,500–₹7,000"],
                    ["🛵 Transport", "₹1,500–₹2,000", "₹3,000–₹4,500", "₹2,500–₹4,000", "₹2,500–₹4,000"],
                    ["🎯 Activities", "₹1,500–₹2,500", "₹3,500–₹6,000", "₹4,000–₹8,000", "₹2,000–₹4,000"],
                    ["🌙 Nightlife", "₹0–₹800", "₹1,500–₹3,000", "₹6,000–₹12,000", "₹0–₹1,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹7,200–₹11,700","₹11,000–₹18,750","₹12,750–₹24,500","₹8,250–₹14,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. International visitors: a &quot;luxury&quot; Goa day costs what a budget day costs in Thailand.
            </p>
          </section>

          {/* ── GOA AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Goa"
            hotels={[
              { name: "Zostel Goa", type: "Budget Hostel · Anjuna", price: "From ₹700/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-goa.html?aid=2820480" },
              { name: "Elsewhere Goa", type: "Boutique Beach · Morjim", price: "From ₹5,500/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/elsewhere-goa.html?aid=2820480" },
              { name: "W Goa", type: "Luxury Resort · Vagator", price: "From ₹12,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/w-goa.html?aid=2820480" },
            ]}
            activities={[
              { name: "Dudhsagar Waterfall Jeep Safari", duration: "Full day", price: "From ₹1,200/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=goa&partner_id=PSZA5UI" },
              { name: "Old Goa Heritage Walking Tour", duration: "3 hours", price: "From ₹800/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=goa&partner_id=PSZA5UI" },
              { name: "Mandovi River Sunset Cruise", duration: "2 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=goa&partner_id=PSZA5UI" },
              { name: "North Goa Beaches Full Day Tour", duration: "8 hours", price: "From ₹900/person", url: "https://www.getyourguide.com/s/?q=goa&partner_id=PSZA5UI" },
            ]}
            pdfProductId="goa-3-days-pdf"
          />

          <Stay22Widget destination="Goa, India" label="Goa" />

          {/* ── GOA DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Goa — Must-See Places"
            subtitle="Click each thumbnail to explore Goa's most iconic beaches, forts and heritage sites."
            spots={[
              { name: "Palolem Beach",          query: "palolem beach goa crescent cove empty no people dawn",    desc: "South Goa's most beautiful beach — a perfect crescent bay with calm water and palm trees. Best visited at sunrise before anyone arrives." },
              { name: "Chapora Fort",            query: "chapora fort goa clifftop stone architecture sunset",     desc: "The Dil Chahta Hai fort. Walk up at 5:30pm for the best view over the Chapora river. Free entry, 15-min walk from Vagator." },
              { name: "Basilica of Bom Jesus",   query: "basilica bom jesus old goa white church colonial facade", desc: "400-year-old baroque church — free entry, opens 9am. The most undervisited sight in Goa." },
              { name: "Butterfly Beach",         query: "butterfly beach goa hidden cove turquoise water rocks",   desc: "Accessible only by kayak from Palolem — genuinely secluded, no beach shacks, no crowds." },
              { name: "Dudhsagar Falls",         query: "dudhsagar waterfall goa jungle green mist nature",        desc: "India's 5th tallest waterfall deep inside Bhagwan Mahaveer Wildlife Sanctuary. Go early — queue forms by 9am." },
            ]}
          />

          {/* ── OLD GOA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              imageKey="goaChurch"
              fallback="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=900&q=80"
              alt="Old Goa colonial church"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Old Goa — home to some of Asia&apos;s oldest churches, free entry, and almost always empty. Most tourists skip it entirely.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — no doubling back, no wasted fuel. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"💰 Budget"},{id:"B" as const,label:"💑 Couple"},{id:"D" as const,label:"🧘 Relaxed"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 2" day="Beaches + Old Goa Loop"
                  stops={["Anjuna Beach 8am","Old Goa 10am","Panaji Lunch","Baga 4:30pm","Thalassa 6:30pm"]}
                  distance="55km · ~1hr 20min riding" note="Old Goa and Panaji are on the same road heading south-east. Calangute/Baga are on your return route — you pass them anyway."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Anjuna,+Goa/Basilica+of+Bom+Jesus,+Old+Goa/Viva+Panjim,+Panaji/Baga+Beach,+Goa/Thalassa+Greek+Restaurant,+Vagator" />
                <RouteCard plan="Plan A · Day 3" day="Dudhsagar Falls"
                  stops={["Anjuna 6:30am","Mollem 8am","Dudhsagar 9am–12pm","Ponda 2pm","Airport 4–5pm"]}
                  distance="160km round trip · 3.5hrs driving" note="Leave by 6:30am — non-negotiable. Dudhsagar is 65km from Anjuna near the Karnataka border. Book your jeep the night before."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Anjuna,+Goa/Mollem,+Goa/Dudhsagar+Falls,+Goa/Goa+Airport" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 2" day="South Goa Day Trip"
                  stops={["Morjim 6:30am","Palolem 8:30am","Butterfly Beach kayak","Agonda 3pm","Margao optional","Morjim 9pm"]}
                  distance="165km round trip · 4hrs driving" note="Palolem and Agonda are the two most beautiful beaches in Goa. The 75km drive is worth it. Take a cab if you don't want to scooter — ₹2,500–₹3,500 return."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Morjim,+Goa/Palolem+Beach,+Goa/Agonda+Beach,+Goa/Margao,+Goa/Morjim,+Goa" />
                <RouteCard plan="Plan B · Day 3" day="Culture Loop"
                  stops={["Morjim 8am","Fontainhas Panaji 9am","Old Goa 11am","Spice Farm Ponda 1pm","Morjim beach 4pm"]}
                  distance="62km · ~1hr 40min" note="Panaji → Old Goa → Ponda follows the highway in a clean straight line east. No backtracking. Return from Ponda to Morjim is a direct 30-min drive north."
                  color="border-rose-200 bg-rose-50"
                  url="https://www.google.com/maps/dir/Morjim,+Goa/Fontainhas,+Panaji,+Goa/Basilica+of+Bom+Jesus,+Old+Goa/Sahakari+Spice+Farm,+Ponda,+Goa/Morjim,+Goa" />
              </div>
            )}

            {activeRoute === "D" && (
              <div className="space-y-4">
                <RouteCard plan="Plan D · Day 2" day="Best Day: Kayak + Fort"
                  stops={["Agonda 9:30am","Palolem 10am","Butterfly Beach kayak","Lunch Palolem 1:30pm","Cabo de Rama Fort 3pm","Agonda 6:30pm"]}
                  distance="39km · ~1hr 15min" note="Cabo de Rama is exactly halfway between Palolem and Agonda on the coastal road — perfect stop on the return. Free entry, cliff views at sunset."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Agonda+Beach,+Goa/Palolem+Beach,+Goa/Cabo+de+Rama+Fort,+Goa/Agonda,+Goa" />
                <RouteCard plan="Plan D · Day 3" day="Culture + Coastal Drive"
                  stops={["Agonda 8am","Goa Museum Panaji 9:30am","Fontainhas 10:45am","Viva Panjim Lunch","Coastal drive","Fort Aguada 5pm","Airport"]}
                  distance="~115km · 2.5hrs total" note="Coastal road from Panaji to Candolim (18km) is one of the best drives in Goa. Stop at every viewpoint. Better than any guided tour."
                  color="border-teal-200 bg-teal-50"
                  url="https://www.google.com/maps/dir/Agonda,+Goa/Goa+State+Museum,+Panaji/Viva+Panjim,+Panaji,+Goa/Fort+Aguada,+Goa/Goa+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d491078.32!2d74.0!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Goa Travel Map" />
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              imageKey="goaFood"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Goan fish curry thali food"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Fish thali at a dhaba off the beach: ₹160. Same dish at a beach shack: ₹450. Walk 200m inland — it matters.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking on Calangute main road", desc: "800m from beach, noisy, ₹400/day on autos. Pay ₹300 more and stay near the beach.", icon: "🏨" },
                { title: "Water sports at 10am", desc: "Tour buses arrive at 10am. Go at 3pm — operators drop prices 30–40% to fill last slots.", icon: "🏄" },
                { title: "Renting a car instead of a scooter", desc: "Goa roads are narrow, parking is awful. Scooter = faster, cheaper, how locals navigate.", icon: "🚗" },
                { title: "Every meal at beach shacks", desc: "Beach shacks are 60–80% more expensive than dhabas 200m off the beach. Fish thali: ₹450 vs ₹160.", icon: "🍽" },
                { title: "Skipping Old Goa", desc: "400-year-old church with a preserved saint's body. Budget 1.5 hours. You won't regret it.", icon: "⛪" },
                { title: "Going peak season without booking", desc: "Dec 20–Jan 5: prices triple, beaches packed. Go Oct–Nov: 40% cheaper, same weather.", icon: "📅" },
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
                { icon: "🌅", title: "The 7am Rule", desc: "Every Goa beach is completely different before 8am. Empty, golden, fishermen coming in. Set one early alarm — worth it.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥃", title: "Drink Feni Properly", desc: "Buy cashew feni from a local shop (₹250–₹400). Serve with lime + soda. Don't do shots at a club.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐟", title: "Worst-Looking = Best Fish", desc: "Handwritten chalkboard menu that changes daily = fish caught this morning. Professionally designed menu = probably frozen.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛒", title: "Arpora Saturday Market", desc: "Every Saturday Nov–April, 6pm–midnight. Better than Anjuna — local designers, live music, proper food stalls. Free.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Use Rapido Not Autos", desc: "Rapido bike taxis are faster and cheaper than auto-rickshaws. Zomato for restaurant reviews — not TripAdvisor.", color: "bg-rose-50 border-rose-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Oct–Nov ✅ best value | Dec–Jan ⚠️ best weather, worst crowds | Feb–Mar ✅ sweet spot | Apr–May ☀️ cheap | Jun–Sep 🌧️ avoid", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Goa itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Goa Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Goa?", a: "3 days is the minimum to see the best without rushing. 5 days is ideal for both North and South Goa. 7 days allows day trips to Dudhsagar Falls and a fully relaxed pace." },
                { q: "What is the best time to visit Goa?", a: "October–March is best overall. October–November offers best value with fewer crowds. December–January has best weather but highest prices. February–March is the sweet spot — good weather, falling prices." },
                { q: "How much does a 3-day Goa trip cost?", a: "Budget solo: ₹7,200–₹11,700 including accommodation. Couple mid-range: ₹35,000–₹55,000 for two. Party group: ₹12,750–₹24,500 per person. All include accommodation, food, transport and activities." },
                { q: "Is North Goa or South Goa better?", a: "North Goa for first-timers, groups, nightlife, water sports and budget travel. South Goa for couples, relaxed stays and quiet beaches like Palolem and Agonda. Smartest move: stay North, day-trip South." },
                { q: "Do I need a rental scooter or car?", a: "Scooter is strongly recommended — ₹300–₹400/day, ₹150 fills the tank for 2 days. Goa's beach roads are narrow and parking is a nightmare with a car. Only rent a car for monsoon season or groups of 4+." },
                { q: "What is the best beach in Goa?", a: "Couples: Palolem and Agonda (South Goa). Swimming: Palolem has the calmest waters. Water sports: Baga. Hidden gem: Butterfly Beach (kayak only). Sunrise: Morjim. Nightlife: Vagator and Baga area." },
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
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
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

          <CombineWith currentSlug="goa-3-days" />
          <RelatedGuides currentSlug="goa-3-days" />
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
