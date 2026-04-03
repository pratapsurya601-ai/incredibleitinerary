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


const NAINITAL_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "📍", label: "Nainital at a Glance" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Nainital 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Nainital in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">&rarr;</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">💡 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        📍 Open in Google Maps &rarr;
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function NainitalClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹6k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "👨‍👩‍👧‍👦", label: "Family", sub: "₹8k–18k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹18k–30k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NAINITAL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nainital" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nainital lake uttarakhand india mountains"
            alt="Nainital lake surrounded by Kumaon hills"
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
              <span className="text-white/70">Nainital 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nainital in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the tourist traps that drain your wallet.
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
              <span>&middot;</span>
              <span>🗓 3 Days</span>
              <span>&middot;</span>
              <span>💰 From ₹5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nainital Lake at 6am when the fog lifts and the mountains reflect in the water — this is why the British built a hill station here. Most tourists show up at noon, fight for overpriced boats, and leave thinking &ldquo;it was fine.&rdquo; This guide makes sure you see the Nainital that locals actually love.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── NAINITAL AT A GLANCE ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 Nainital at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              A lake city at 2,084m in the Kumaon Hills. Everything revolves around Naini Lake — but the real magic is in the surrounding lakes and peaks most tourists never visit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Nainital Town", emoji: "🏔️", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Best for","First-timers, families, quick getaways"],["Key spots","Naini Lake, Mall Road, Snow View Point, Naina Devi Temple"],["Budget","₹800–₹3,000/night"],["Vibe","Bustling, touristy, walkable"]],
                  note: "Mall Road gets impossibly crowded on weekends and holidays. Visit midweek if you can." },
                { title: "Beyond Nainital", emoji: "🌿", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Best for","Nature lovers, peace seekers, photographers"],["Key spots","Bhimtal, Naukuchiatal, Sattal, Mukteshwar"],["Budget","₹600–₹2,500/night"],["Vibe","Quiet, untouched, lake district feel"]],
                  note: "Sattal (7 lakes) is 25km from Nainital and feels like a completely different world — crystal-clear water, zero tourists." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
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
                <strong className="font-medium text-ink">Smart move:</strong> Spend Day 1 in Nainital town, then escape to Bhimtal–Sattal–Naukuchiatal on Day 2. You get the iconic lake <em>and</em> the hidden gems most visitors miss entirely.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹5,500" />
            <StatCard icon="🌡" label="Best Months" value="Mar–Jun, Oct–Nov" />
            <StatCard icon="🚂" label="Nearest Station" value="Kathgodam" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Tallital/Mallital Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget guesthouse · ₹400–₹800/night · Shared taxi: ₹50–₹100/ride</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Naini Lake, Naina Devi Temple"
                  items={[
                    "Kathgodam → Nainital shared taxi (₹100/person, 1.5hrs). Don't book a private cab — shared is fine.",
                    "Check in at Tallital side — cheaper than Mall Road hotels by 30–40%",
                    "2pm: Walk the full length of Naini Lake promenade (free, 45 min). Skip the boats for now.",
                    "3:30pm: Naina Devi Temple — free entry, 10 min walk uphill from Mallital. Panoramic lake view from the top.",
                    "5pm: Tiffin Top (Dorothy's Seat) — hire a pony (₹300 return) or walk (40 min uphill). Sunset view of the entire valley.",
                    "Evening: Street food on Mall Road — momos ₹40, chai ₹15, maggi ₹30. Skip the overpriced restaurants."
                  ]}
                  cost="₹600–₹900 excluding accommodation" />
                <DayCard day="Day 2" title="Snow View Point + Cave Gardens + Bhimtal"
                  items={[
                    "7am: Ropeway to Snow View Point (₹300 return). Go early — clouds roll in by 10am most days. Himalayan panorama on a clear morning is unforgettable.",
                    "The ropeway to Snow View Point is worth it only on a clear day — if it's cloudy, save your ₹300",
                    "9:30am: Eco Cave Gardens (₹75 entry). Narrow rock caves, 45 min visit. Kids love it, adults find it interesting once.",
                    "11am: Shared taxi to Bhimtal (₹80/person, 30 min). Skip the overpriced boat rides on Naini Lake (₹300 for 20 min). Walk to Bhimtal — same experience, 10% of the crowd, ₹100 boats.",
                    "1pm: Lunch at a Bhimtal dhaba — fish from the lake, ₹120–₹180 thali",
                    "3pm: Walk around Bhimtal lake and visit the island aquarium (₹50 boat + ₹25 entry)",
                    "5pm: Back to Nainital. Evening free for Mall Road shopping — woollens are genuinely cheap here."
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 3" title="Sattal + Naukuchiatal + Departure"
                  items={[
                    "7am: Shared taxi to Sattal (₹100/person, 45 min). Seven interconnected lakes surrounded by oak forests.",
                    "Sattal is genuinely magical — crystal-clear water, birdsong, zero tourist infrastructure. Bring snacks.",
                    "10am: Drive to Naukuchiatal (20 min). Nine-cornered lake, quietest of all. Paragliding available (₹800–₹1,200).",
                    "12pm: Lunch at Naukuchiatal — small dhabas by the lake, ₹100–₹150",
                    "2pm: Back to Nainital, pick up bags. Last walk along Naini Lake.",
                    "4pm: Shared taxi to Kathgodam station. Book evening train back."
                  ]}
                  cost="₹700–₹1,000 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹4,500–₹6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — FAMILY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Family Plan — Mall Road or Mallital Base</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Mid-range hotel with breakfast · ₹1,500–₹3,500/night · Private taxi: ₹2,000–₹2,500/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Nainital Town — Lake, Temple, Sunset"
                  items={[
                    "Arrive by late morning. Check in to a Mall Road hotel — walkable to everything, worth the premium for families.",
                    "12:30pm: Boat ride on Naini Lake — pedal boat ₹210/hr or row boat ₹210/hr. Kids will love it. Go to the far end away from the crowds.",
                    "2:30pm: Naina Devi Temple — easy 10 min walk from Mallital. Explain the mythology to the kids — Sati's eyes fell here.",
                    "4pm: Ropeway to Snow View Point (₹300/person). Best done late afternoon for softer light.",
                    "6pm: Mall Road stroll — ice cream at Sonam Chowk (₹40–₹80), pick up woollen caps and shawls.",
                    "Dinner at Sakley's or Machan — ₹800–₹1,200 for a family of 4. Both have valley views."
                  ]}
                  cost="₹2,500–₹4,000 for family of 4 (excl. accommodation)" />
                <DayCard day="Day 2" title="Caves, Tiffin Top + Bhimtal Day Trip"
                  items={[
                    "8am: Eco Cave Gardens (₹75/adult, ₹40/child). Six interconnected caves named after animals. Allow 1 hour.",
                    "10am: Horse ride to Tiffin Top (₹500 return per horse). Stunning 360° view of Nainital and the Himalayan range.",
                    "12pm: Drive to Bhimtal (30 min by private taxi). Quieter lake, island aquarium the kids will love.",
                    "1pm: Lunch by Bhimtal lake — fresh fish thali ₹150–₹250/person",
                    "3pm: Continue to Naukuchiatal (20 min). Walk around the nine-cornered lake. Kayaking available ₹200–₹400.",
                    "5:30pm: Return to Nainital. Evening at leisure."
                  ]}
                  cost="₹3,000–₹5,000 for family of 4 (excl. accommodation)" />
                <DayCard day="Day 3" title="Sattal + Cave Garden + Departure"
                  items={[
                    "7:30am: Drive to Sattal (45 min). Pack breakfast from the hotel.",
                    "Sattal is the highlight — let the kids explore the forest trails and skip stones on the crystal-clear lakes.",
                    "10am: Cave Garden near Sattal (₹50/person) — natural limestone caves, different from Eco Caves.",
                    "12pm: Drive back via Bhowali. Stop for famous Bhowali fruit (peaches, plums, apricots in season — Mar–Jun).",
                    "1:30pm: Last lunch in Nainital. Pack bags.",
                    "3pm: Depart for Kathgodam. Stop at the viewpoint on Nainital–Kathgodam road — one last photo of the valley."
                  ]}
                  cost="₹2,000–₹3,500 for family of 4 (excl. accommodation)" />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (family of 4) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–₹18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Lakefront or Heritage Property</p>
                    <p className="text-xs text-purple-600 font-light">Stay: The Naini Retreat / Manu Maharani / Heritage boutique · ₹4,000–₹8,000/night · Private car with driver</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive in Style — Lake, Temple, Golden Hour"
                  items={[
                    "Private transfer from Kathgodam or Pantnagar airport. Driver for full 3 days (₹6,000–₹8,000 total).",
                    "Check into a heritage property with lake view. Lunch at the hotel — no need to rush.",
                    "3pm: Private shikara boat on Naini Lake (₹500–₹800/hr). Completely different from the tourist boats — cushioned, quiet, guide explains the lake's history.",
                    "4:30pm: Naina Devi Temple — the spiritual heart of Nainital. 800+ years old.",
                    "6pm: Tiffin Top for sunset. Your driver drops you at the base, 20-min easy walk up.",
                    "Dinner at Zest at The Naini Retreat — multi-cuisine, lake-view terrace. ₹1,500–₹2,500 for two."
                  ]}
                  cost="₹5,000–₹7,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Snow View + Lakes Circuit — The Full Experience"
                  items={[
                    "6:30am: Early ropeway to Snow View Point. First batch, fewest people, best light for Himalayan panorama.",
                    "9am: Drive to Bhimtal. Private boat ride, visit the island. No rush — you have a car.",
                    "11am: Naukuchiatal — kayak on the nine-cornered lake (₹500/hr). Paragliding if weather permits (₹2,000–₹3,000).",
                    "1pm: Lunch at a curated lakeside cafe in Bhimtal — grilled trout, ₹400–₹600/person",
                    "3pm: Sattal — the crown jewel. Seven interconnected lakes surrounded by oak and pine forest. Walk the KMVN trail.",
                    "5:30pm: Return to Nainital. Evening spa at your hotel or stroll Mall Road."
                  ]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Caves, Culture + Departure with Detour"
                  items={[
                    "8am: Eco Cave Gardens — worth seeing even at the premium level. Geological formations are genuinely interesting.",
                    "9:30am: Cave Garden (different from Eco Caves) — natural limestone formations, quieter setting.",
                    "11am: Shopping on Mall Road — handcrafted Kumaoni shawls, candles from the famous candle house.",
                    "12:30pm: Farewell lunch at Café Chica or Embassy Restaurant — ₹800–₹1,200 for two",
                    "2pm: Depart via Bhowali. Optional detour to Mukteshwar (50km, 1.5hrs) — cliff-edge temple with the best Himalayan view in Kumaon.",
                    "Evening: Reach Kathgodam/Pantnagar for onward travel."
                  ]}
                  cost="₹3,500–₹5,500 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹18,000–₹30,000 including accommodation</span>
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
                    ["🏨 Accommodation (3N)", "₹1,200–₹2,400", "₹4,500–₹10,500", "₹12,000–₹24,000"],
                    ["🍽 Food & Drinks", "₹900–₹1,500", "₹2,400–₹4,000", "₹4,000–₹7,000"],
                    ["🚕 Transport", "₹600–₹1,000", "₹2,500–₹3,500", "₹6,000–₹8,000"],
                    ["🎯 Activities", "₹800–₹1,200", "₹1,500–₹3,000", "₹3,000–₹5,000"],
                    ["🛍 Shopping", "₹0–₹500", "₹500–₹1,500", "₹1,000–₹3,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹3,500–₹6,000 (solo)","₹8,000–₹18,000 (4 pax)","₹18,000–₹30,000 (couple)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Peak season (May–Jun, Diwali week) can be 40–60% higher — book 2 weeks ahead.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Nainital"
            hotels={[
              { name: "Hotel Alka", type: "Budget · Mall Road", price: "From ₹800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/alka-nainital.html?aid=YOUR_AFFILIATE_ID" },
              { name: "The Naini Retreat", type: "Heritage · Lakefront", price: "From ₹5,500/night", rating: "5", badge: "Best views", url: "https://www.booking.com/hotel/in/naini-retreat.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Manu Maharani", type: "Luxury Resort · Mallital", price: "From ₹7,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/manu-maharani-nainital.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Snow View Point Ropeway", duration: "1 hour", price: "From ₹300/person", badge: "Must do", url: "https://www.getyourguide.com/nainital-l4321/ropeway/?partner_id=PSZA5UI" },
              { name: "Bhimtal & Sattal Lake Tour", duration: "Full day", price: "From ₹1,200/person", badge: "Hidden gem", url: "https://www.getyourguide.com/nainital-l4321/lakes/?partner_id=PSZA5UI" },
              { name: "Naukuchiatal Paragliding", duration: "30 min", price: "From ₹1,200/person", url: "https://www.getyourguide.com/nainital-l4321/paragliding/?partner_id=PSZA5UI" },
              { name: "Nainital Heritage Walking Tour", duration: "3 hours", price: "From ₹600/person", url: "https://www.getyourguide.com/nainital-l4321/heritage/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="nainital-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Nainital — Must-See Places"
            subtitle="Click each thumbnail to explore Nainital's most iconic lakes, viewpoints and hidden gems."
            spots={[
              { name: "Naini Lake",           query: "naini lake nainital panoramic mountain reflection water landscape",       desc: "The heart of Nainital — a crescent-shaped natural lake at 2,084m. Walk the full promenade at dawn before the crowds arrive." },
              { name: "Snow View Point",      query: "snow view point nainital himalayan peaks panorama mountain range",         desc: "Panoramic view of Nanda Devi, Trishul, and the entire Himalayan range. Take the ropeway on a clear morning — clouds roll in by 10am." },
              { name: "Bhimtal Lake",         query: "bhimtal lake uttarakhand island temple calm water nature",                 desc: "Quieter than Naini Lake with an island aquarium in the centre. ₹100 boats vs ₹300 in Nainital for the same experience." },
              { name: "Sattal",               query: "sattal lake uttarakhand forest oak pine crystal clear water nature",       desc: "Seven interconnected lakes surrounded by oak forests. Zero tourists, crystal-clear water, genuine wilderness." },
              { name: "Eco Cave Gardens",     query: "eco cave gardens nainital rock formations natural cave uttarakhand",       desc: "Six interconnected caves themed after animals. Narrow passages, cool interiors — a unique geological experience." },
            ]}
          />

          {/* ── NAINI LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="nainital mall road evening lights mountain town bustling market"
              alt="Mall Road Nainital in the evening"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mall Road at dusk — woollen shops, steaming momos, and the lake glittering below. The ₹40 momos here are better than the ₹150 ones at the &ldquo;fancy&rdquo; cafes.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is planned to minimise backtracking on hill roads. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"💰 Budget"},{id:"B" as const,label:"👨‍👩‍👧‍👦 Family"},{id:"C" as const,label:"✨ Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 2" day="Snow View + Bhimtal Loop"
                  stops={["Snow View 7am","Eco Caves 9:30am","Bhimtal 11am","Bhimtal Lake 1pm","Nainital 5pm"]}
                  distance="35km · ~1hr 15min driving" note="Snow View ropeway opens at 7am — be in the first batch. Eco Caves are on your way down, then straight road to Bhimtal."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Snow+View+Point,+Nainital/Eco+Cave+Gardens,+Nainital/Bhimtal+Lake,+Uttarakhand/Nainital" />
                <RouteCard plan="Plan A · Day 3" day="Sattal + Naukuchiatal"
                  stops={["Nainital 7am","Sattal 7:45am","Naukuchiatal 10:30am","Bhowali 12pm","Kathgodam 4pm"]}
                  distance="70km · ~2hrs total" note="Sattal is south of Bhimtal — Naukuchiatal is on your return route. Bhowali is the last stop for seasonal fruit before hitting the plains."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Nainital/Sattal,+Uttarakhand/Naukuchiatal,+Uttarakhand/Bhowali,+Uttarakhand/Kathgodam+Railway+Station" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 2" day="Caves + Lakes Circuit"
                  stops={["Eco Caves 8am","Tiffin Top 10am","Bhimtal 12pm","Naukuchiatal 3pm","Nainital 5:30pm"]}
                  distance="45km · ~1hr 30min driving" note="Eco Caves and Tiffin Top are both within Nainital town. After that, the Bhimtal–Naukuchiatal loop is a single road — no backtracking."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Eco+Cave+Gardens,+Nainital/Tiffin+Top,+Nainital/Bhimtal+Lake,+Uttarakhand/Naukuchiatal,+Uttarakhand/Nainital" />
                <RouteCard plan="Plan B · Day 3" day="Sattal + Cave Garden + Departure"
                  stops={["Nainital 7:30am","Sattal 8:15am","Cave Garden 10am","Bhowali Fruit 12pm","Kathgodam 3pm"]}
                  distance="65km · ~2hrs total" note="Sattal and Cave Garden are adjacent — one stop covers both. Bhowali fruit market is directly on the Nainital–Kathgodam highway."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Nainital/Sattal,+Uttarakhand/Bhowali,+Uttarakhand/Kathgodam+Railway+Station" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 2" day="Full Lake District Loop"
                  stops={["Nainital 6:30am","Snow View 7am","Bhimtal 9am","Naukuchiatal 11am","Sattal 3pm","Nainital 5:30pm"]}
                  distance="75km · ~2hrs 30min driving" note="With a private driver, you can cover all three lakes in a day without feeling rushed. Sattal is the highlight — save the most energy for it."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Nainital/Snow+View+Point,+Nainital/Bhimtal+Lake,+Uttarakhand/Naukuchiatal,+Uttarakhand/Sattal,+Uttarakhand/Nainital" />
                <RouteCard plan="Plan C · Day 3" day="Caves + Mukteshwar Detour"
                  stops={["Eco Caves 8am","Cave Garden 9:30am","Mall Road 11am","Bhowali 1pm","Mukteshwar 2:30pm","Kathgodam 5:30pm"]}
                  distance="120km · ~3.5hrs driving" note="Mukteshwar detour adds 50km but the cliff-edge Shiva temple and 180° Himalayan view make it the single best viewpoint in Kumaon. Only doable with a private car."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Eco+Cave+Gardens,+Nainital/Nainital+Mall+Road/Bhowali,+Uttarakhand/Mukteshwar,+Uttarakhand/Kathgodam+Railway+Station" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55935.0!2d79.46!3d29.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Nainital Travel Map" />
            </div>
          </section>

          {/* ── LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="bhimtal lake uttarakhand island scenic nature landscape"
              alt="Bhimtal lake with island in the centre"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Bhimtal — 30 minutes from Nainital, 10% of the crowd, the same mountain reflections. The ₹100 boat ride here beats the ₹300 one on Naini Lake.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting only Naini Lake", desc: "The lake district around Nainital (Bhimtal, Sattal, Naukuchiatal) is genuinely more beautiful and has 5% of the crowds. Budget one full day for it.", icon: "🏞️" },
                { title: "Weekend trips (Fri–Sun)", desc: "Nainital's population triples on weekends. Mall Road becomes a human traffic jam. Go Mon–Thu and you'll see a different town.", icon: "📅" },
                { title: "Overpriced Naini Lake boats", desc: "₹300 for 20 minutes on a crowded lake. Drive 30 min to Bhimtal — same experience, ₹100 boats, fraction of the tourists.", icon: "🚣" },
                { title: "Ropeway on a cloudy day", desc: "Snow View Point ropeway costs ₹300 and is completely pointless if it's cloudy. Check the morning sky — if you can't see the hills, skip it.", icon: "🚡" },
                { title: "Eating on Mall Road every meal", desc: "Tourist restaurants charge 2–3x. Walk 100m off Mall Road to local dhabas — momos ₹40 vs ₹120, thali ₹100 vs ₹300.", icon: "🍽" },
                { title: "Not carrying warm clothes", desc: "Even in May, Nainital evenings drop to 10–12°C. Carry a fleece. Don't rely on buying one on Mall Road — tourist markup is 60%.", icon: "🧥" },
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
                { icon: "🌅", title: "The 6am Naini Lake Rule", desc: "The lake at 6am is a mirror — zero boats, fog lifting off the water, mountains reflected perfectly. By 9am it's a different place entirely. Set one alarm.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏔️", title: "Clear-Day Ropeway Only", desc: "The ropeway to Snow View Point is worth it only on a clear day — if it's cloudy, save your ₹300. Check the sky at 7am: if you can see the ridge, go.", color: "bg-amber-50 border-amber-200" },
                { icon: "🛶", title: "Bhimtal Over Naini Lake", desc: "Skip the overpriced boat rides on Naini Lake (₹300 for 20 min). Walk to Bhimtal (30 min drive) — same experience, 10% of the crowd, ₹100 boats.", color: "bg-sky-50 border-sky-200" },
                { icon: "🌿", title: "Sattal Is the Real Star", desc: "Sattal (7 lakes) is 25km from Nainital and feels like a completely different world — crystal-clear water, zero tourists. Bring binoculars for birdwatching.", color: "bg-sky-50 border-sky-200" },
                { icon: "🧶", title: "Woollens Are Cheap Here", desc: "Nainital is genuinely good for woollen shopping — shawls ₹200–₹800, caps ₹50–₹150. Buy on Mall Road's upper stretch, not the touristy lower end.", color: "bg-purple-50 border-purple-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Mar–Apr ✅ pleasant, few crowds | May–Jun ⚠️ peak season, book ahead | Jul–Sep 🌧️ heavy rain | Oct–Nov ✅ clearest skies | Dec–Feb ❄️ cold, possible snow", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Nainital itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Nainital Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Nainital?", a: "3 days is the sweet spot — enough for Naini Lake, Snow View Point, Bhimtal, Sattal, and the caves. 2 days feels rushed. 4–5 days lets you add Mukteshwar, Ranikhet, or a jungle trek in the Kumaon Hills." },
                { q: "What is the best time to visit Nainital?", a: "March to June for pleasant weather (15–27°C) and clear mountain views. October to November for post-monsoon clarity and fewer crowds. Avoid July–September (heavy rain, landslides) and December–February unless you specifically want snowfall." },
                { q: "How much does a 3-day Nainital trip cost?", a: "Budget solo: ₹4,500–₹6,000 including everything. Family of 4 mid-range: ₹8,000–₹18,000 total. Premium couple: ₹18,000–₹30,000 for two. All include accommodation, food, transport and activities." },
                { q: "How do I reach Nainital?", a: "Nearest railway station: Kathgodam (34km, 1.5hrs by shared taxi ₹100/person). Nearest airport: Pantnagar (65km, 2hrs). Most travellers take a train from Delhi to Kathgodam (6–7 hours, Shatabdi or Ranikhet Express). Delhi to Nainital by road is 300km, about 7–8 hours." },
                { q: "Is Nainital safe for solo travellers?", a: "Very safe. Mall Road is well-lit and busy until 10pm. Stick to registered hotels, avoid isolated trails after dark, and use pre-booked or shared taxis. The town has a strong tourist police presence during peak season." },
                { q: "Which is better — Nainital or Mussoorie?", a: "Nainital wins for natural beauty (the lake, the surrounding lake district of Bhimtal–Sattal–Naukuchiatal). Mussoorie wins for Mall Road shopping and proximity to Dehradun. For a first hill station trip with nature as priority, Nainital is the better choice." },
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
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Rishikesh — Adventure & Yoga", href: "/blog/rishikesh-3-days", soon: true },
                { label: "Jim Corbett — Wildlife Safari", href: "/blog/jim-corbett-3-days", soon: true },
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

          <RelatedGuides currentSlug="nainital-3-days" />
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
