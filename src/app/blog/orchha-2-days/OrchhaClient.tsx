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

const ORCHHA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "why",         emoji: "\uD83C\uDFF0", label: "Why Orchha" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "maps",        emoji: "\uD83D\uDDFA\uFE0F", label: "Route Maps" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Orchha 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Orchha in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"→"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"→"}
      </a>
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
export default function OrchhaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹4k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFF0", label: "Heritage", sub: "₹5k–12k", color: "border-orange-300 bg-orange-50 text-orange-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ORCHHA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Orchha" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="orchha fort jehangir mahal madhya pradesh india"
            fallback="https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=1600&q=85"
            alt="Orchha Fort Complex and Jehangir Mahal at sunset over the Betwa River"
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
              <span className="text-white/70">Orchha 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Temples
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Orchha in 2 Days: Medieval Palaces, River Sunsets & Vultures
                <em className="italic text-gold-light"> (Budget to Heritage, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs, Google Maps routes — for a town most travellers skip and shouldn&apos;t.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Madhya Pradesh</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Orchha is what Khajuraho would be without the tour buses — the same era, the same grandeur, but you&apos;ll have entire palaces to yourself. This guide covers every monument, the best light for the cenotaphs, and where the vultures circle at dusk.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY ORCHHA ── */}
          <section id="why" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFF0"} Why Orchha</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Orchha is a 3-hour detour between Jhansi and Khajuraho. Most people skip it. Don&apos;t be most people.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Monuments", emoji: "\uD83C\uDFDB\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Era","16th–17th century Bundela Rajput"],["Highlights","Jehangir Mahal, Raja Mahal, Chaturbhuj Temple"],["Entry","Composite ticket ₹10 (Indian) / ₹250 (Foreign)"],["Crowd","Near-zero on weekdays"]],
                  note: "The fort complex opens at 6am but ticket counter opens at 8am. Walk in early, buy ticket later from any counter inside." },
                { title: "The River & Nature", emoji: "\uD83C\uDF05", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["River","Betwa — granite boulders, shallow rapids"],["Wildlife","Indian vultures, painted storks, kingfishers"],["Best time","Golden hour at the cenotaphs (5–6pm)"],["Season","Oct–Mar for comfortable walking"]],
                  note: "Walk across the old stone bridge to the cenotaphs at golden hour — you’ll pass through fields and hear nothing but birds. It’s the most peaceful 20 minutes in Madhya Pradesh." },
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
                <strong className="font-medium text-ink">The Jehangir Mahal at sunset with the Betwa River below and vultures circling overhead is genuinely cinematic</strong> — this is medieval India frozen in time.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹3,500"} />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct – Mar" />
            <StatCard icon={"\uD83D\uDE82"} label="Nearest Station" value="Jhansi (16km)" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under {"₹"}4,000 total</p>
                    <p className="text-xs text-amber-600 font-light">Stay: MP Tourism Sheesh Mahal or guesthouse {"·"} {"₹"}500–{"₹"}1,200/night {"·"} Walk + auto-rickshaw</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fort Complex + Cenotaphs at Sunset"
                  items={[
                    "Arrive Jhansi by morning train — auto to Orchha ₹30–50 (shared tempo) or ₹150 (private auto). 30 min ride.",
                    "Check in, drop bags. Lunch at a local dhaba near Ram Raja Temple — thali ₹80–₹120.",
                    "1pm: Buy composite ticket (₹10 Indian / ₹250 Foreign) at the fort entrance. Covers all monuments.",
                    "1:30pm: Raja Mahal first — Bundela murals on every wall, empty rooms with original 400-year-old paintings. 45 min.",
                    "2:30pm: Jehangir Mahal — the crown jewel. Climb to the top terrace for the Betwa River panorama. 1 hour.",
                    "4:30pm: Chaturbhuj Temple — the tallest structure in Orchha. Climb the narrow staircase to the top for aerial views of the entire town.",
                    "5:15pm: Walk to the cenotaphs along the Betwa. Cross the old stone bridge — 20 min through fields and birdsong. Golden hour light on the chhatris is the single best sight in Orchha.",
                    "Evening: Dinner at a dhaba. ₹100–₹150. Orchha shuts down by 9pm — plan accordingly."
                  ]}
                  cost={"₹600–₹900 excluding accommodation"} />
                <DayCard day="Day 2" title="Ram Raja Temple + Vultures + Betwa River"
                  items={[
                    "7am: Ram Raja Temple — the only temple in India where Ram is worshipped as a king. Morning aarti is worth waking for. Free entry.",
                    "8:30am: Breakfast at a chai stall near the temple. Poha + chai ₹30–50.",
                    "9am: Laxminarayan Temple on the hill — mix of temple and fort architecture. Bundela-era murals inside. Often completely empty. 45 min.",
                    "10:30am: Walk along the Betwa River downstream from the cenotaphs. Look up — Indian vultures nest on the cliff faces and circle overhead between 10am–12pm. This is one of central India’s most reliable vulture-spotting sites.",
                    "12pm: Lunch, pack up, check out.",
                    "1pm: Optional — rent a bicycle (₹50–₹100/day) and ride to Orchha Wildlife Sanctuary entrance (3km). Langurs, peacocks, nilgai on the road itself.",
                    "3pm: Auto back to Jhansi for onward train, or bus to Khajuraho (3–4 hours, ₹250–₹350)."
                  ]}
                  cost={"₹400–₹700 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}3,500–{"₹"}4,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Heritage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFF0"}</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Heritage Plan — {"₹"}5,000–{"₹"}12,000 total</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Amar Mahal or Bundelkhand Riverside {"·"} {"₹"}2,000–{"₹"}5,000/night {"·"} Guided tours + private transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Guided Fort Complex + Sound & Light Show"
                  items={[
                    "Arrive Jhansi by train or flight to Gwalior + cab. Private taxi Jhansi–Orchha ₹400–₹600.",
                    "Check into heritage stay. Lunch at the hotel or Rajasthani restaurant near the fort — ₹200–₹400.",
                    "1pm: Hire a local guide at the fort entrance (₹300–₹500 for 3 hours). The Bundela history is extraordinary and the murals need context.",
                    "1:30pm: Raja Mahal with guide — the murals tell specific stories from the Ramayana and Bundela court life. Without a guide you’ll walk past 80% of them.",
                    "3pm: Jehangir Mahal — built in a single year to welcome Emperor Jehangir. The symmetry is deliberate and the guide explains the Mughal-Rajput architectural fusion.",
                    "4:30pm: Chaturbhuj Temple — climb to the top for sunset views. The guide will point out the vulture nesting sites on the cliff across the river.",
                    "5:30pm: Walk to cenotaphs for golden hour. Bring a tripod if you have one.",
                    "7pm: Sound & Light Show at the fort (if running, ₹100–₹250). Check timings locally — seasonal.",
                    "Dinner at Amar Mahal or a recommended restaurant. ₹300–₹600."
                  ]}
                  cost={"₹1,500–₹2,500 excluding accommodation"} />
                <DayCard day="Day 2" title="Temples, Vulture Safari + Betwa Rafting"
                  items={[
                    "6:30am: Sunrise at the cenotaphs — mist rises off the Betwa and the chhatris glow amber. Best photography of the trip.",
                    "7:30am: Ram Raja Temple morning aarti. This temple was originally meant to be a palace — the only temple in India where guards present arms to the deity.",
                    "9am: Breakfast at your hotel. Pack water for the morning.",
                    "10am: Laxminarayan Temple + Sundar Mahal (ruined palace in the forest, 2km walk). The jungle around Sundar Mahal has langurs and peacocks.",
                    "11:30am: Betwa River rafting or kayaking (₹500–₹1,000/person, seasonal Oct–Feb). Passes directly under the cenotaphs — the best angle.",
                    "1pm: Lunch at a riverside cafe or your hotel. ₹250–₹500.",
                    "2:30pm: Orchha Wildlife Sanctuary jeep or walking safari (₹200–₹500). Vultures, nilgai, langur, occasional leopard tracks.",
                    "4:30pm: Final walk through the town. Pick up miniature paintings from local artists (₹200–₹1,500) — genuine Bundela-style work.",
                    "5pm: Depart for Jhansi or continue to Khajuraho by cab (₹2,500–₹3,500, 3.5 hours)."
                  ]}
                  cost={"₹2,000–₹4,000 excluding accommodation"} />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 2-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}5,000–{"₹"}12,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-orange-300 text-center">{"\uD83C\uDFF0"} Heritage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (2N)", "₹1,000–₹2,400", "₹4,000–₹10,000"],
                    ["\uD83C\uDF5D Food & Drinks", "₹400–₹600", "₹800–₹1,500"],
                    ["\uD83D\uDE8C Transport (from Jhansi)", "₹100–₹300", "₹600–₹1,200"],
                    ["\uD83C\uDFAF Entry Tickets", "₹10–₹250", "₹10–₹250"],
                    ["\uD83D\uDCF7 Guide + Activities", "₹0–₹200", "₹800–₹2,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹1,500–₹3,750", "₹6,200–₹14,950"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Orchha is genuinely one of the cheapest heritage destinations in India. A full day costs less than a single meal in Goa.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Orchha"
            hotels={[
              { name: "MP Tourism Sheesh Mahal", type: "Heritage Hotel · Inside Fort", price: "From ₹1,500/night", rating: "4", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/sheesh-mahal-orchha.html?aid=2820480" },
              { name: "Amar Mahal", type: "Heritage Resort · Riverside", price: "From ₹3,500/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/amar-mahal-orchha.html?aid=2820480" },
              { name: "Bundelkhand Riverside", type: "Boutique · River View", price: "From ₹4,500/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/bundelkhand-riverside-orchha.html?aid=2820480" },
            ]}
            activities={[
              { name: "Orchha Fort Guided Heritage Walk", duration: "3 hours", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=orchha&partner_id=PSZA5UI" },
              { name: "Betwa River Rafting", duration: "1.5 hours", price: "From ₹700/person", badge: "Adventure", url: "https://www.getyourguide.com/s/?q=orchha&partner_id=PSZA5UI" },
              { name: "Orchha Wildlife Sanctuary Safari", duration: "2 hours", price: "From ₹300/person", url: "https://www.getyourguide.com/s/?q=orchha&partner_id=PSZA5UI" },
              { name: "Jhansi Fort + Orchha Day Trip", duration: "Full day", price: "From ₹1,200/person", url: "https://www.getyourguide.com/s/?q=jhansi&partner_id=PSZA5UI" },
            ]}
            pdfProductId="orchha-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Orchha — Must-See Places"
            subtitle="Click each thumbnail to explore Orchha's most iconic monuments, temples and river views."
            spots={[
              { name: "Jehangir Mahal",       query: "jehangir mahal orchha palace architecture stone carved madhya pradesh",     desc: "The grandest palace in Orchha — built to welcome Emperor Jehangir for a single visit. Climb to the top terrace for a 360-degree panorama of the Betwa River and surrounding countryside." },
              { name: "Raja Mahal",            query: "raja mahal orchha bundela palace interior murals paintings",                desc: "The royal residence with original 400-year-old murals covering every wall. Scenes from the Ramayana, court life, and hunting expeditions in vivid colour." },
              { name: "Chaturbhuj Temple",     query: "chaturbhuj temple orchha tall spire stone temple madhya pradesh",           desc: "The tallest structure in Orchha with a narrow internal staircase leading to rooftop views. Originally built to house the Ram idol that ended up in Ram Raja Temple instead." },
              { name: "Betwa River Cenotaphs", query: "orchha cenotaphs betwa river sunset golden hour chhatri stone",             desc: "Royal cenotaphs (chhatris) along the Betwa River — best visited at golden hour when the stone glows amber. Walk across the old bridge through fields to reach them." },
              { name: "Ram Raja Temple",       query: "ram raja temple orchha madhya pradesh architecture temple town",             desc: "The only temple in India where Lord Ram is worshipped as a king, complete with guards presenting arms. Originally a palace that became a temple by accident." },
            ]}
          />

          {/* ── CENOTAPHS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="orchha cenotaphs betwa river sunset golden light stone monuments"
              fallback="https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=900&q=80"
              alt="Orchha cenotaphs along the Betwa River at golden hour"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Walk across the old stone bridge to the cenotaphs at golden hour — you&apos;ll pass through fields and hear nothing but birds.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Orchha is walkable — every major monument is within 2km. These routes are geographically logical so you never double back.
            </p>

            <div className="space-y-4">
              <RouteCard plan="Day 1" day="Fort Complex + Cenotaphs Loop"
                stops={["Fort Entrance", "Raja Mahal", "Jehangir Mahal", "Chaturbhuj Temple", "Stone Bridge", "Cenotaphs"]}
                distance="3.5km · all walking"
                note="Start at the fort, work your way south. The cenotaphs are at the end so you arrive for golden hour naturally."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Orchha+Fort+Complex/Raja+Mahal+Orchha/Jehangir+Mahal+Orchha/Chaturbhuj+Temple+Orchha/Orchha+Cenotaphs" />
              <RouteCard plan="Day 2" day="Temples + River + Wildlife"
                stops={["Ram Raja Temple", "Laxminarayan Temple", "Betwa Riverside", "Wildlife Sanctuary Gate", "Jhansi Station"]}
                distance="8km + 16km to Jhansi"
                note="Ram Raja Temple first thing in the morning for aarti. Laxminarayan is uphill but worth the climb. End at Jhansi for onward travel."
                color="border-teal-200 bg-teal-50"
                url="https://www.google.com/maps/dir/Ram+Raja+Temple+Orchha/Laxminarayan+Temple+Orchha/Betwa+River+Orchha/Orchha+Wildlife+Sanctuary/Jhansi+Railway+Station" />
            </div>

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14417.5!2d78.64!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Orchha Travel Map" />
            </div>
          </section>

          {/* ── VULTURE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="indian vulture flying cliff face central india wildlife"
              fallback="https://images.unsplash.com/photo-1557401620-67270b4bb6b7?w=900&q=80"
              alt="Indian vultures circling above the cliffs near Orchha"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Indian vultures nest on the cliff faces along the Betwa. Best spotting: 10am{"–"}12pm from the riverside path downstream of the cenotaphs.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting at midday in summer", desc: "Orchha bakes above 45°C from April–June. The fort has no shade. Visit Oct–Mar or start by 6am in shoulder months.", icon: "\u2600\uFE0F" },
                { title: "Skipping the cenotaphs at sunset", desc: "Most day-trippers from Jhansi leave by 4pm and miss the single best sight in Orchha. Time your visit so you're at the cenotaphs by 5pm.", icon: "\uD83C\uDF05" },
                { title: "Not hiring a guide at the fort", desc: "The murals in Raja Mahal tell specific stories. Without context you'll walk past 80% of what makes the palace special. ₹300–500 for 3 hours.", icon: "\uD83D\uDCD6" },
                { title: "Expecting Orchha nightlife", desc: "The town shuts down by 9pm. Bring a book, charge your devices, enjoy the silence. That's the point.", icon: "\uD83C\uDF19" },
                { title: "Only doing a Jhansi day trip", desc: "You need at least one night. Sunrise at the cenotaphs and morning aarti at Ram Raja Temple are worth staying for.", icon: "\uD83D\uDE8C" },
                { title: "Ignoring the wildlife sanctuary", desc: "3km from town, free to walk the periphery. Langurs, peacocks, nilgai on the road. Budget 1.5 hours minimum.", icon: "\uD83E\uDD85" },
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
                { icon: "\uD83C\uDF05", title: "Two Golden Hours", desc: "Sunrise at the cenotaphs (6–7am) and sunset (5–6pm) are both extraordinary. Don't pick one — do both. The mist at sunrise and the warm light at sunset are completely different experiences.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDD85", title: "Vulture Spotting Window", desc: "Indian vultures are most active 10am–12pm when thermals develop. Walk downstream from the cenotaphs along the Betwa — look up at the cliff faces on the opposite bank.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEB2", title: "Rent a Bicycle", desc: "Orchha is flat and small. Rent a cycle for ₹50–₹100/day from shops near Ram Raja Temple. Covers every monument plus the wildlife sanctuary in half a day.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFA8", title: "Buy Miniature Paintings", desc: "Local artists sell genuine Bundela-style miniature paintings near the fort entrance. ₹200–₹1,500. These are hand-painted, not prints. Best souvenirs in Madhya Pradesh.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE82", title: "Jhansi Connection", desc: "Jhansi is on the Delhi-Mumbai main line. Shatabdi from Delhi takes 4.5 hours. Book Jhansi–Orchha auto in advance if arriving late. Shared tempos stop running after dark.", color: "bg-orange-50 border-orange-200" },
                { icon: "\uD83D\uDCF1", title: "Connectivity Warning", desc: "Orchha has patchy mobile data. Download offline maps before arriving. ATMs exist but occasionally run dry — carry cash from Jhansi.", color: "bg-orange-50 border-orange-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Orchha + Madhya Pradesh itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Orchha Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Orchha?", a: "2 days is ideal to cover all major monuments, the Betwa River cenotaphs at both sunrise and sunset, and vulture spotting without rushing. A single day works if you arrive early from Jhansi and skip the nature walks, but you will miss the best light." },
                { q: "What is the best time to visit Orchha?", a: "October to March. October–November has pleasant weather and almost no tourists. December–January is peak with cool mornings ideal for fort walks. February–March is warm but comfortable. Avoid April–June when temperatures cross 45°C." },
                { q: "How do I reach Orchha from Delhi or Mumbai?", a: "Take a train to Jhansi — 4–5 hours from Delhi (Shatabdi), 10 hours from Mumbai. From Jhansi, shared tempo to Orchha costs ₹30–50 and takes 30 minutes. Private auto is ₹150–200." },
                { q: "How much does a 2-day Orchha trip cost?", a: "Budget solo: ₹3,500–₹4,000 including accommodation. Heritage-focused: ₹5,000–₹12,000 with guided tours and better stays. Orchha is one of the cheapest heritage destinations in India." },
                { q: "Can I combine Orchha with Khajuraho?", a: "Yes, and you should. Orchha to Khajuraho is 180km, 3–4 hours by road. The route is Delhi/Agra → Jhansi (train) → Orchha (2 days) → Khajuraho (bus or cab). Two of MP’s greatest heritage sites in one trip." },
                { q: "Is Orchha safe for solo and women travellers?", a: "Orchha is a small, quiet temple town and generally very safe. Monuments are well-maintained by ASI and MP Tourism. The town shuts down early — plan indoor time after dark. MP Tourism hotels offer reliable security." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Madhya Pradesh Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Khajuraho — Temple Art & Architecture", href: "/blog/khajuraho-2-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
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

          <RelatedGuides currentSlug="orchha-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
