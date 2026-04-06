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


const SUNDARBANS_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "getting-in",  emoji: "\uD83D\uDEE5\uFE0F", label: "Getting In" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "wildlife",    emoji: "\uD83D\uDC2F", label: "Wildlife Guide" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Sundarbans 3-Day Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Sundarbans in 3 Days safari guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function SundarbansClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹6k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC2F", label: "Safari", sub: "₹8k–18k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83D\uDEA2", label: "Premium Houseboat", sub: "₹18k–30k", color: "border-indigo-300 bg-indigo-50 text-indigo-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SUNDARBANS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Sundarbans" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="sundarbans mangrove forest river west bengal india"
            fallback="https://images.unsplash.com/photo-1596587984190-acc4b7257cfc?w=1600&q=85"
            alt="Sundarbans mangrove forest river channels at dawn"
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
              <span className="text-white/70">Sundarbans 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife &amp; Safari
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Sundarbans in 3 Days: The Complete Safari Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real boat routes, permit costs, watchtower timings — and what nobody tells you about tiger sightings.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Seeing a Royal Bengal Tiger swimming through mangrove channels is the rarest wildlife sighting in India — odds are about 1 in 20 trips. But the mangrove ecosystem itself is worth every hour on the boat.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">{"Plan " + p.id + " →"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── GETTING IN ── */}
          <section id="getting-in" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEE5\uFE0F"} Getting to the Sundarbans</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every Sundarbans trip starts from Kolkata. The journey to the boat launch point is half the adventure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Via Godkhali (Most Common)", emoji: "\uD83D\uDE97", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Route","Kolkata → Canning → Godkhali"],["Distance","100km, 3–4 hours by road"],["Cost","Bus/shared auto ₹150–250 | Private car ₹2,500–3,500"],["Then","Motorboat from Godkhali jetty to your lodge"]],
                  note: "Most tour operators include Kolkata pickup. If going independently, take the Sealdah–Canning local train (₹15–30), then shared auto to Godkhali (₹50–80)." },
                { title: "Via Sonakhali (Less Crowded)", emoji: "\u26F5", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Route","Kolkata → Basanti → Sonakhali"],["Distance","95km, 3–3.5 hours by road"],["Cost","Bus ₹120–180 | Private car ₹2,200–3,000"],["Then","Boat from Sonakhali to Gosaba Island"]],
                  note: "Better option if your operator is based near Gosaba or Pakhiralay. Smaller jetty, shorter queues, same forest access." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Go with a licensed operator from Canning or Godkhali — the unlicensed boats are cheaper but don&apos;t enter the core tiger reserve zones where the real wildlife is.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹5,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov – Mar" />
            <StatCard icon={"\uD83D\uDC2F"} label="Key Wildlife" value="Royal Bengal Tiger" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Shared Boat from Godkhali</p>
                    <p className="text-xs text-amber-600 font-light">{`Stay: Basic lodge at Gosaba/Pakhiralay · ₹400–800/night · Shared motorboat`}</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kolkata to Gosaba — Into the Delta"
                  items={[
                    "6am: Depart Kolkata by bus or shared vehicle to Godkhali (3–4 hrs). Carry packed breakfast.",
                    "10:30am: Board shared motorboat at Godkhali jetty. Forest entry permit (₹60/person for Indians, ₹400 for foreigners).",
                    "12pm: Arrive Gosaba Island — the last inhabited island before the reserve. Check into basic lodge.",
                    "2pm: Walk through Pakhiralay village — honey collectors, crab fishermen, daily life on the delta edge.",
                    "4:30pm: Boat ride through narrow mangrove creeks near Sajnekhali — first taste of the forest.",
                    "Evening: Simple Bengali dinner at the lodge — fresh river fish, rice, dal. ₹150–250 per meal.",
                  ]}
                  cost={`₹1,200–1,800 (transport + food + permit)`} />
                <DayCard day="Day 2" title="Sajnekhali + Sudhanyakhali — Core Safari Day"
                  items={[
                    "5:30am: Early boat departure — dawn is when wildlife is most active on the mudflats.",
                    "7am: Sajnekhali Wildlife Sanctuary — watchtower, crocodile enclosure, mangrove interpretation centre. 1.5 hrs.",
                    "9:30am: Boat through narrow tidal channels toward Sudhanyakhali watchtower — best tiger-sighting point.",
                    "11am: Sudhanyakhali watchtower — sit quietly for 30–45 min. Spotted deer, wild boar, kingfishers guaranteed.",
                    "1pm: Lunch on the boat — packed by your lodge. River prawn curry if you’re lucky.",
                    "3pm: Cruise the Matla River channels — monitor lizards, mudskippers, fishing eagles.",
                    "5:30pm: Return to Gosaba. Evening free — village walk or rest.",
                  ]}
                  cost={`₹1,500–2,200 (boat share + food)`} />
                <DayCard day="Day 3" title="Dobanki Canopy Walk + Return to Kolkata"
                  items={[
                    "6am: Final boat ride to Dobanki — the canopy walk suspended over crocodile habitat.",
                    "7:30am: Dobanki canopy walk — 500m elevated walkway through mangrove canopy. Genuinely thrilling.",
                    "9am: Slow return through different creek routes — look for otters, water monitors, brahminy kites.",
                    "11am: Back at Godkhali jetty. Shared auto/bus to Canning, then train or road to Kolkata.",
                    "3–4pm: Back in Kolkata. Stop at Canning for fresh river fish if you want to cook at home.",
                  ]}
                  cost={`₹1,000–1,500 (boat + transport back)`} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">{`Total 3-Day Cost (per person) · `}</span>
                  <span className="font-serif text-base text-ink font-light">{`₹4,500–6,000 including accommodation`}</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Safari ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC2F"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Safari Plan — Private Boat with Naturalist Guide</p>
                    <p className="text-xs text-emerald-600 font-light">{`Stay: Eco-lodge at Bali Island/Pakhiralay · ₹1,500–3,000/night · Private motorboat`}</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kolkata to Sajnekhali — Deep Into the Reserve"
                  items={[
                    "7am: Pickup from Kolkata hotel. AC vehicle to Godkhali (3 hrs). Breakfast and chai included en route.",
                    "10:30am: Board private motorboat — just your group + naturalist guide + boatman.",
                    "12pm: Sajnekhali Wildlife Sanctuary — register permits, explore the watchtower and museum.",
                    "1:30pm: Lunch at eco-lodge — fresh catch Bengali thali with hilsa or bhetki fish.",
                    "3pm: Afternoon boat safari through Pirkhali and Banbibi Varani channels — quieter routes, better wildlife.",
                    "5:30pm: Return to lodge. Evening briefing from naturalist on next day’s route and tiger behaviour.",
                    "Dinner at lodge — mud crab curry, prawn malai, seasonal vegetables.",
                  ]}
                  cost={`₹3,000–5,000 (transport + meals + permit)`} />
                <DayCard day="Day 2" title="Sudhanyakhali + Dobanki — The Full Safari Circuit"
                  items={[
                    "5am: Pre-dawn departure. Hot tea on the boat. The silence at dawn — just water, mangroves, and bird calls.",
                    "6:30am: Sudhanyakhali watchtower — arrive before other boats. 45–60 min sit. Tiger pug marks often visible on mudflats.",
                    "8:30am: Navigate narrow tidal creeks toward Dobanki — look for fishing cats, estuarine crocodiles.",
                    "10am: Dobanki canopy walk — elevated 500m walkway over crocodile-infested creek. Stunning perspective.",
                    "12pm: Packed lunch on the boat in a quiet creek — your guide picks the spot based on tide.",
                    "2pm: Netidhopani ruins and watchtower — 400-year-old temple ruins inside the forest. Rarely visited.",
                    "4pm: Cruise the wider Matla River channels. Irrawaddy dolphins occasionally surface here.",
                    "6pm: Back to lodge. Campfire storytelling about honey collectors and tiger legends.",
                  ]}
                  cost={`₹2,500–4,000 (boat + meals)`} />
                <DayCard day="Day 3" title="Gosaba + Pakhiralay Village + Return"
                  items={[
                    "6am: Final morning boat ride — different route through western channels for new birdlife.",
                    "8am: Gosaba Island exploration — Hamilton’s Bungalow ruins, the old market, riverside life.",
                    "9:30am: Pakhiralay village walk with guide — meet honey collectors (moule), learn about human-tiger coexistence.",
                    "11am: Board boat back to Godkhali. Final mangrove tunnel passage.",
                    "12:30pm: Arrive Godkhali, drive back to Kolkata.",
                    "4pm: Drop-off in Kolkata. Your guide shares a digital wildlife checklist of everything spotted.",
                  ]}
                  cost={`₹2,500–4,000 (boat + transport back)`} />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">{`Total 3-Day Cost (per person) · `}</span>
                  <span className="font-serif text-base text-ink font-light">{`₹8,000–18,000 including accommodation`}</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Premium Houseboat ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDEA2"}</span>
                  <div>
                    <p className="text-sm font-medium text-indigo-800">Premium Houseboat — Live on the Water</p>
                    <p className="text-xs text-indigo-600 font-light">{`Stay: AC houseboat with private deck · ₹5,000–8,000/night · Chef + naturalist onboard`}</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kolkata to Houseboat — Floating Into Wilderness"
                  items={[
                    "8am: AC car pickup from Kolkata hotel. Snacks and water provided.",
                    "11am: Board your houseboat at Godkhali — AC cabin, attached bath, upper deck with seating.",
                    "12pm: Onboard chef serves welcome lunch — river prawn curry, steamed bhetki, seasonal greens.",
                    "2pm: Houseboat cruises into the reserve. Sajnekhali permit check, then into quieter side channels.",
                    "4pm: First watchtower stop — Sajnekhali. Sunset from the upper deck with tea and snacks.",
                    "7pm: Houseboat anchors in a quiet creek for the night. Dinner under the stars on the deck.",
                    "Night: Fall asleep to the sound of water lapping against the hull. Occasional deer calls from the bank.",
                  ]}
                  cost={`₹6,000–10,000 (all-inclusive)`} />
                <DayCard day="Day 2" title="Deep Reserve — Every Major Watchtower"
                  items={[
                    "5am: Wake up on the water. Coffee on the deck as the forest wakes up around you.",
                    "6am: Smaller boat transfer for narrow creek safari — houseboat stays anchored, you explore in a dingy.",
                    "7am: Sudhanyakhali watchtower — highest probability tiger zone. Extended 1-hour sit.",
                    "9am: Dobanki canopy walk — 500m elevated walkway. Your naturalist points out crocodile nests below.",
                    "11am: Back to houseboat. Brunch with fresh-caught fish prepared by the onboard chef.",
                    "1pm: Netidhopani temple ruins — the most remote and atmospheric stop in the reserve.",
                    "3pm: Bhagabatpur crocodile project (optional) — breeding programme for estuarine crocodiles.",
                    "5pm: Sunset cruise on the Matla River. Irrawaddy dolphin spotting.",
                    "8pm: Special dinner on the deck — mud crab, chingri malai curry, mishti doi. Campfire on the bank.",
                  ]}
                  cost={`₹6,000–10,000 (all-inclusive)`} />
                <DayCard day="Day 3" title="Final Morning + Village + Return"
                  items={[
                    "5:30am: Optional dawn birdwatching from deck — brahminy kites, white-bellied sea eagles, kingfishers.",
                    "7am: Breakfast on deck. Last cruise through untouched mangrove tunnels.",
                    "9am: Pakhiralay village cultural visit — traditional honey collection demo, local craft market.",
                    "10:30am: Gosaba Island walk — colonial ruins, riverside fish market, delta life.",
                    "12pm: Disembark at Godkhali. Final lunch at a local riverside stall — best fish fry in the delta.",
                    "1pm: Drive back to Kolkata. Arrive by 4–5pm.",
                  ]}
                  cost={`₹4,000–6,000 (boat + transport)`} />
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-indigo-700 uppercase tracking-wide">{`Total 3-Day Cost (per person) · `}</span>
                  <span className="font-serif text-base text-ink font-light">{`₹18,000–30,000 all-inclusive`}</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">{"\uD83D\uDC2F"} Safari</th>
                    <th className="p-3.5 text-xs font-medium text-indigo-300 text-center">{"\uD83D\uDEA2"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (2N)", "₹800–1,600", "₹3,000–6,000", "₹10,000–16,000"],
                    ["\uD83C\uDF5D Food & Drinks", "₹600–1,000", "₹1,500–3,000", "₹4,000–6,000"],
                    ["\uD83D\uDEA4 Boat & Transport", "₹1,800–2,500", "₹3,000–5,000", "Included"],
                    ["\uD83C\uDF3F Forest Permits", "₹200–400", "₹200–400", "Included"],
                    ["\uD83D\uDC68\u200D\uD83C\uDF93 Guide", "Shared/basic", "₹1,000–2,000", "Included"],
                    ["\uD83D\uDE97 Kolkata Transfer", "₹300–500", "₹1,500–2,500", "Included"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹4,500–6,000","₹8,000–18,000","₹18,000–30,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              {`All prices INR 2026. Foreign nationals pay higher forest entry fees (₹400 vs ₹60 for Indians). Premium plan includes everything except personal shopping.`}
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Sundarbans"
            hotels={[
              { name: "Sundarbans Tiger Camp", type: "Eco Lodge · Dayapur", price: "From ₹2,500/night", rating: "4", badge: "Safari pick", url: "https://www.booking.com/hotel/in/sundarbans-tiger-camp.html?aid=2820480" },
              { name: "Sunderban Houseboat", type: "Premium Houseboat", price: "From ₹6,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/sunderban-houseboat.html?aid=2820480" },
              { name: "Gosaba Island Lodge", type: "Budget Stay · Gosaba", price: "From ₹600/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/gosaba-island-lodge.html?aid=2820480" },
            ]}
            activities={[
              { name: "Sundarbans 2N/3D Boat Safari", duration: "3 days", price: "From ₹8,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kolkata&partner_id=PSZA5UI" },
              { name: "Sundarbans Day Trip from Kolkata", duration: "Full day", price: "From ₹3,500/person", badge: "Quick trip", url: "https://www.getyourguide.com/s/?q=kolkata&partner_id=PSZA5UI" },
              { name: "Premium Houseboat Experience", duration: "3 days", price: "From ₹18,000/person", url: "https://www.getyourguide.com/s/?q=kolkata&partner_id=PSZA5UI" },
              { name: "Birdwatching & Photography Tour", duration: "2 days", price: "From ₹6,000/person", url: "https://www.getyourguide.com/s/?q=kolkata&partner_id=PSZA5UI" },
            ]}
            pdfProductId="sundarbans-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Sundarbans — Must-See Places"
            subtitle="Click each thumbnail to explore the Sundarbans' most iconic wildlife spots and waterways."
            spots={[
              { name: "Sajnekhali Sanctuary",     query: "sajnekhali wildlife sanctuary sundarbans watchtower mangrove",       desc: "The main gateway to the tiger reserve with a watchtower, crocodile enclosure and interpretation centre. Every trip starts here." },
              { name: "Dobanki Canopy Walk",       query: "dobanki canopy walk sundarbans elevated wooden walkway mangrove",    desc: "A 500m elevated walkway suspended over a crocodile-inhabited creek. The most thrilling viewpoint in the entire Sundarbans." },
              { name: "Sudhanyakhali Watchtower",  query: "sudhanyakhali watchtower sundarbans tiger reserve mudflat wildlife", desc: "The highest-probability tiger sighting zone. Pug marks are frequently visible on the mudflats below the watchtower." },
              { name: "Mangrove Creek Channels",   query: "sundarbans narrow creek mangrove tunnel boat waterway bengal",       desc: "Narrow tidal channels flanked by aerial roots and dense canopy. The heart of the Sundarbans experience — best at dawn." },
              { name: "Gosaba Island",             query: "gosaba island sundarbans delta village riverbank bengal",             desc: "The last inhabited island before the core reserve. Colonial ruins, vibrant fish markets, and the gateway to Pakhiralay village." },
            ]}
          />

          {/* ── MANGROVE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="sundarbans mangrove roots aerial roots water channel dense forest"
              fallback="https://images.unsplash.com/photo-1596587984190-acc4b7257cfc?w=900&q=80"
              alt="Sundarbans mangrove aerial roots in tidal water"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Dobanki canopy walk suspended over crocodile-infested water is not for the faint-hearted — it&apos;s genuinely the most adrenaline I&apos;ve had without a harness.
              </p>
            </div>
          </div>

          {/* ── WILDLIFE GUIDE ── */}
          <section id="wildlife" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDC2F"} Wildlife You Can Actually See</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Forget the tiger for a moment. The Sundarbans has one of the densest concentrations of wildlife in eastern India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDC2F", title: "Royal Bengal Tiger", desc: "~100 tigers in the Indian Sundarbans. Sighting odds: ~5%. Look for pug marks, scratch marks, and fresh kills on the mudflats near watchtowers.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDC0A", title: "Estuarine Crocodile", desc: "Commonly seen basking on mudbanks. Can grow up to 6m. Best spotted near Dobanki and along wider creek mouths during low tide.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83E\uDD88", title: "Irrawaddy Dolphin", desc: "Rare freshwater dolphins in the Matla River. Best spotted on calm mornings from the houseboat deck or wider river channels.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83E\uDD9C", title: "Bird Life (300+ species)", desc: "White-bellied sea eagles, brahminy kites, kingfishers (9 species), lesser adjutant storks. Dec–Feb is peak birding season.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDD8C", title: "Spotted Deer & Wild Boar", desc: "Almost guaranteed at Sudhanyakhali and Sajnekhali. They graze on the mudflats at dawn — exactly where tigers hunt.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83E\uDD8E", title: "Monitor Lizards & Otters", desc: "Water monitors patrol the creek banks. Smooth-coated otters fish in packs. Both are commonly seen on every full-day boat trip.", color: "bg-purple-50 border-purple-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going with an unlicensed operator", desc: "Cheaper by ₹2–3k but they can’t enter the core tiger reserve. You’ll only see the buffer zone — minimal wildlife, no watchtowers.", icon: "\uD83D\uDEA4" },
                { title: "Visiting in monsoon (Jun–Sep)", desc: "Most lodges close. Rivers flood, visibility drops to zero, and boat navigation becomes dangerous. Stick to November–March.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Expecting to see a tiger", desc: "Odds are ~5%. If you go solely for a tiger sighting, you’ll be disappointed. Go for the entire ecosystem — the mangroves, birds, dolphins, and silence.", icon: "\uD83D\uDC2F" },
                { title: "Forgetting insect repellent", desc: "Sundarbans mosquitoes are relentless, especially at dawn and dusk. Strong DEET-based repellent is non-negotiable. Full sleeves mandatory.", icon: "\uD83E\uDD9F" },
                { title: "Only doing a day trip", desc: "Day trips from Kolkata barely scratch the surface — you spend 7 hours on the road for 3 hours on the water. Minimum 2 nights to reach the real forest.", icon: "\u23F0" },
                { title: "Making noise on the boat", desc: "Loud music and talking spooks wildlife. The best operators enforce silence at watchtower zones. Choose your group wisely.", icon: "\uD83D\uDD07" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "The Dawn Rule", desc: "The silence at dawn in the Sundarbans — just water, mangroves, and bird calls — is a kind of peace that doesn’t exist anywhere else in West Bengal. Be on the water by 5:30am.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDD0B", title: "Carry a Power Bank", desc: "No charging points on most boats. A 20,000mAh bank will last all 3 days for phone + camera. Solar chargers work well on the deck.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCF7", title: "Bring Binoculars, Not Just Cameras", desc: "A good pair of 8x42 binoculars will show you 10x more wildlife than your phone camera. Borrow from your lodge if you don’t have your own.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF4C", title: "Local Food is the Best Food", desc: "River prawn curry, chingri malai, fresh bhetki — the lodge food is the freshest fish you’ll eat anywhere in Bengal. Don’t carry city snacks.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCC5", title: "Best Month by Month", desc: "Nov ✓ season opens, fewer crowds | Dec–Jan ✓ peak wildlife | Feb ✓ best birding | Mar \u26A0\uFE0F getting warm | Apr–May \u2600\uFE0F too hot | Jun–Oct \uD83C\uDF27\uFE0F closed", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCDD", title: "Book Permits in Advance", desc: "Forest entry permits can be arranged by your operator. But during Dec–Jan peak season, boat slots at popular watchtowers fill up — book at least 2 weeks ahead.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group size and budget — we&apos;ll connect you with a vetted Sundarbans operator and send a personalised plan within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                {"Plan My Sundarbans Trip →"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">{"Plan My Trip →"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Sundarbans?", a: "November to March is the best window. December–February offers peak wildlife activity as animals come to riverbanks for warmth. The forest is lush, the light is golden, and mosquitoes are at their most manageable. Avoid June–September — most lodges close during monsoon." },
                { q: "How much does a 3-day Sundarbans trip cost?", a: "Budget shared boat: under ₹6,000 per person including everything. Safari with private boat and naturalist: ₹8,000–18,000 per person. Premium houseboat with AC and chef: ₹18,000–30,000 per person. All include meals, boat, permits and accommodation." },
                { q: "Can you actually see Royal Bengal Tigers?", a: "Tiger sightings are rare — roughly 1 in 20 trips. Pug marks and territorial signs are commonly seen. Sudhanyakhali watchtower has the highest probability. The mangrove ecosystem, 300+ bird species and other wildlife make the trip worthwhile regardless." },
                { q: "How do I reach Sundarbans from Kolkata?", a: "Drive or bus from Kolkata to Godkhali via Canning (100km, 3–4 hours). Then motorboat to your lodge. Cheapest: Sealdah–Canning local train (₹15–30) + shared auto to Godkhali (₹50–80). Most tour operators arrange Kolkata pickup." },
                { q: "Is the Sundarbans safe for tourists?", a: "Yes, with a licensed operator. Tourist boats follow designated routes, watchtowers have proper fencing, and you never leave the boat in core tiger zones. The Dobanki canopy walk has safety railings. Choose operators registered with Sundarban Tiger Reserve authority." },
                { q: "What should I pack for a Sundarbans trip?", a: "Non-negotiable: strong DEET insect repellent, sunscreen SPF 50+, full-sleeve lightweight clothing, binoculars, waterproof bag for electronics, torch/headlamp. Carry a power bank — no charging on most boats. Mosquitoes are aggressive at dawn and dusk." },
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
                { label: "Kaziranga National Park — 3 Day Guide", href: "/blog/kaziranga-3-days", soon: false },
                { label: "Meghalaya — 5 Day Adventure", href: "/blog/meghalaya-5-days", soon: false },
                { label: "Darjeeling — 4 Day Hill Escape", href: "/blog/darjeeling-4-days", soon: false },
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

          <RelatedGuides currentSlug="sundarbans-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
