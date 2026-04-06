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


const JAISALMER_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "whyjaisalmer", emoji: "🏜️", label: "Why Jaisalmer Hits Different" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Jaisalmer 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Jaisalmer in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function JaisalmerClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹7k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏜️", label: "Desert Experience", sub: "₹8k–20k", color: "border-orange-300 bg-orange-50 text-orange-800" },
    { id: "C" as const, emoji: "✨", label: "Luxury Camp", sub: "₹20k–50k", color: "border-yellow-300 bg-yellow-50 text-yellow-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JAISALMER_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jaisalmer" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="jaisalmer fort golden city rajasthan desert"
            fallback="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=85"
            alt="Jaisalmer Fort golden sandstone rising from the Thar Desert"
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
              <span className="text-white/70">Jaisalmer 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Desert & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jaisalmer in 3 Days: The Golden City Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real costs, desert camp recommendations, and the honest tips that save you from the tourist traps.
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
              <span>🇮🇳 Rajasthan</span>
              <span>&middot;</span>
              <span>🗓 3 Days</span>
              <span>&middot;</span>
              <span>💰 From ₹7,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Jaisalmer Fort is the only living fort in India — people actually live, cook, and argue inside 850-year-old walls. It&apos;s more neighbourhood than museum. Most people blow their budget on overpriced Sam Dunes camps and miss the stuff that makes this city unforgettable. This guide fixes that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

          {/* ── WHY JAISALMER ── */}
          <section id="whyjaisalmer" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏜️ Why Jaisalmer Hits Different</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This isn&apos;t Jodhpur or Udaipur. Jaisalmer is India&apos;s remotest major tourist city — 5 hours from the nearest big city, on the edge of the Thar Desert, with a living fort that has no real equivalent anywhere in the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Fort & City", emoji: "🏰", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","History lovers, photographers, architecture"],["Key spots","Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake"],["Budget","₹200–₹500/day for entries"],["Vibe","Ancient, golden, winding lanes, rooftop cafes"]],
                  note: "The fort gets hot by 11am. Go early morning or late afternoon for the best light and fewest crowds." },
                { title: "The Desert", emoji: "🐪", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Best for","Adventure, sunsets, stargazing, couples"],["Key spots","Sam Dunes, Khuri Dunes, Desert National Park"],["Budget","₹1,500–₹15,000 for overnight camp"],["Vibe","Vast, silent, starry, surreal at sunrise"]],
                  note: "The Sam Dunes tourist camps are overpriced and overcrowded — book a camp at Khuri dunes instead, 40km away, for the real desert experience at half the price." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Spend Day 1 in the fort and city, Day 2 doing the desert overnight, Day 3 for Kuldhara ghost village and Bada Bagh at sunrise before departure.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹7,000" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="🚂" label="Nearest Rail" value="Jaisalmer Stn" />
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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Fort Area Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel inside fort or near Gadisar Lake · ₹400–₹800/night · Auto: ₹10–₹20/km</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="The Living Fort + Havelis"
                  items={[
                    "Morning: Enter Jaisalmer Fort through Ganesh Pol — free entry to the fort itself. Wander the lanes without a map.",
                    "10am: Raj Mahal Palace inside the fort — ₹100 entry. The mirror work and carved sandstone are genuinely jaw-dropping.",
                    "11:30am: Jain Temples inside the fort — free, remove shoes. 12th-century carved pillars that rival anything in Rajasthan.",
                    "Lunch: Dal baati churma at a rooftop restaurant inside the fort — ₹150–₹250. The view of the Thar Desert from 800-year-old walls with Rajasthani thali is peak India.",
                    "3pm: Patwon Ki Haveli — ₹100 entry. Five interconnected mansions with the most intricate stonework you'll see anywhere.",
                    "5pm: Walk to Gadisar Lake for sunset — free. The carved gateway and lake temples look magical at golden hour.",
                    "Evening: Wander the market lanes below the fort. Street food: kachori ₹20, mirchi vada ₹15, lassi ₹30."
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Desert Safari — The Real One"
                  items={[
                    "Book a camel safari to Khuri dunes (not Sam) — ₹1,200–₹1,800/person including overnight camp, dinner, breakfast.",
                    "2pm departure from Jaisalmer — 40km drive to Khuri village. The drive itself through Thar scrubland is beautiful.",
                    "4pm: Mount camels. 1.5-hour ride into the dunes — no jeeps, no crowds, no loudspeakers.",
                    "Sunset on the dunes — this is the photo everyone comes to Rajasthan for.",
                    "Dinner: Rajasthani thali under the stars at your camp. Basic but authentic.",
                    "Sleep under the stars or in a basic tent. The Milky Way is visible on clear nights — zero light pollution."
                  ]}
                  cost="₹1,200–₹1,800 (camp package)" />
                <DayCard day="Day 3" title="Kuldhara Ghost Village + Bada Bagh + Departure"
                  items={[
                    "5:30am: Wake at camp for desert sunrise — non-negotiable. Coffee with the sun coming up over dunes.",
                    "8am: Drive back to Jaisalmer, shower, check out.",
                    "10am: Kuldhara Ghost Village — ₹50 entry. An entire village abandoned overnight in the 1800s and nobody knows exactly why. Genuinely eerie.",
                    "12pm: Bada Bagh cenotaphs — ₹100 entry. Royal sandstone cenotaphs with carved horses against a desert backdrop.",
                    "1pm: Late lunch in the city — ker sangri (desert bean curry), ₹120–₹180.",
                    "Afternoon: Last walk through fort lanes, pick up Rajasthani textiles or leather mojari shoes from shops below the fort."
                  ]}
                  cost="₹600–₹1,000 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹5,000–₹7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: DESERT EXPERIENCE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">🏜️</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Desert Experience Plan — Fort Hotel + Swiss Tent Camp</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Heritage hotel near fort + Swiss tent in dunes · ₹2,000–₹4,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fort Deep Dive + Golden Hour"
                  items={[
                    "Morning: Hire a local guide at the fort gate — ₹500–₹800 for 2–3 hours. They know stories the signboards don't.",
                    "Raj Mahal Palace, Jain Temples, and the cannon viewpoint — all inside the fort walls.",
                    "Lunch: Rooftop at 1st Gate or Free Tibet — views over the entire golden city. Budget ₹400–₹600.",
                    "2:30pm: Patwon Ki Haveli + Nathmal Ki Haveli (carved by two brothers — left and right sides are slightly different).",
                    "4:30pm: Gadisar Lake — hire a paddleboat ₹100, or walk the stone ghats as the sandstone turns gold.",
                    "6pm: Sunset from the fort ramparts — the fort glows like it's on fire. Best photography of the trip.",
                    "Dinner: 8 July restaurant inside the fort — Rajasthani thali ₹350–₹500. Named after the owner's wedding date."
                  ]}
                  cost="₹2,000–₹3,500 excluding accommodation" />
                <DayCard day="Day 2" title="Desert National Park + Overnight Dunes"
                  items={[
                    "6:30am: Drive to Desert National Park (45km) — ₹200 entry + ₹500 jeep. Great Indian Bustard territory (extremely rare bird).",
                    "Spot chinkaras, desert foxes, eagles. The landscape alone is worth it — fossilized wood, 180-million-year-old formations.",
                    "11am: Return to Jaisalmer for lunch and rest. Desert heat is no joke by midday.",
                    "3pm: Depart for Sam or Khuri dunes — Swiss tent camp. Jeep safari through the scrublands.",
                    "5pm: Camel ride to sunset point. 1-hour ride, properly paced, not the 15-min tourist trot.",
                    "Evening: Rajasthani folk music and dance at the camp, dinner under the stars.",
                    "Night: Sleep in a Swiss tent with proper bedding. Stargazing from the dunes — the sky out here is otherworldly."
                  ]}
                  cost="₹4,000–₹7,000 (camp package + park)" />
                <DayCard day="Day 3" title="Sunrise, Kuldhara + Bada Bagh"
                  items={[
                    "5:30am: Desert sunrise — walk to the top of the highest dune. No rush, the camp serves breakfast until 9am.",
                    "9am: Drive to Kuldhara Ghost Village (18km from Sam) — ₹50 entry. Wander the stone houses. Kuldhara ghost village at sunset is genuinely eerie — an entire village abandoned overnight in the 1800s and nobody knows exactly why.",
                    "11am: Bada Bagh cenotaphs — the carved sandstone against the flat desert is deeply photogenic.",
                    "12:30pm: Return to Jaisalmer. Lunch at Suryagarh or a heritage restaurant — ₹600–₹900.",
                    "2pm: Shopping in Sadar Bazaar — textiles, mirror work, leather mojari shoes, silver jewellery.",
                    "4pm: One last chai on a fort rooftop before departure."
                  ]}
                  cost="₹1,500–₹2,500 excluding accommodation" />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹12,000–₹20,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY CAMP ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Luxury Camp Plan — Suryagarh + Premium Desert Camp</p>
                    <p className="text-xs text-yellow-600 font-light">Stay: Suryagarh / Brys Fort + luxury tented camp · ₹8,000–₹20,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Heritage Tour + Sundowner"
                  items={[
                    "Check in at Suryagarh or Brys Fort — both have pools, spa, and that old-money Rajasthani feel.",
                    "10am: Private guided tour of Jaisalmer Fort with a historian — ₹2,000–₹3,000. Not the same as a regular guide.",
                    "Lunch: Suryagarh's restaurant — Rajasthani tasting menu ₹1,500–₹2,500 per person. Dal baati churma elevated.",
                    "3pm: Patwon Ki Haveli + Salim Singh Ki Haveli — the triple haveli circuit with your guide.",
                    "5pm: Private sundowner setup at Gadisar Lake or the fort ramparts — arranged by hotel, ₹3,000–₹5,000.",
                    "Dinner: Nachna Haveli or hotel dining — ₹2,000–₹3,500 for two."
                  ]}
                  cost="₹8,000–₹15,000 for two excluding accommodation" />
                <DayCard day="Day 2" title="Luxury Desert Camp — The Main Event"
                  items={[
                    "Morning at leisure — spa treatment at the hotel. Pool time in a desert city feels surreal.",
                    "1pm: Early lunch at hotel before desert transfer.",
                    "3pm: Private jeep to luxury desert camp — Serai, Damodra Desert Camp, or similar. Private tented suite with en-suite bathroom.",
                    "5pm: Private camel ride — 1.5 hours, your own dune, no crowds.",
                    "Sunset: Champagne sundowner on the dunes — arranged by camp.",
                    "Dinner: Multi-course Rajasthani dinner with live folk musicians. Under a canopy of stars.",
                    "Night: Your private tent has a real bed, hot shower, and complete silence. The luxury is the nothingness."
                  ]}
                  cost="₹15,000–₹30,000 for two (camp package)" />
                <DayCard day="Day 3" title="Desert Sunrise + Kuldhara + Departure"
                  items={[
                    "5:30am: Hot chai on your tent terrace as the sun rises over the Thar. Breakfast at camp — fresh parathas, omelettes, fruit.",
                    "9am: Private transfer to Kuldhara Ghost Village — your guide tells the full story of the Paliwal Brahmins' overnight exodus.",
                    "10:30am: Bada Bagh cenotaphs — morning light on the carved sandstone is the best light of the day.",
                    "12pm: Return to Jaisalmer. Final lunch at a fort rooftop — ₹800–₹1,200 for two.",
                    "1:30pm: Last-minute shopping — commission-free shops your guide recommends.",
                    "Depart with golden sand in your shoes and every photo looking like a movie still."
                  ]}
                  cost="₹3,000–₹5,000 for two excluding accommodation" />
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-yellow-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹40,000–₹100,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-orange-700 text-center">🏜️ Desert Exp.</th>
                    <th className="p-3.5 text-xs font-medium text-yellow-700 text-center">✨ Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,200–₹2,400", "₹6,000–₹12,000", "₹24,000–₹60,000"],
                    ["🍽 Food & Drinks", "₹1,000–₹1,800", "₹2,500–₹4,500", "₹6,000–₹10,000"],
                    ["🚗 Transport", "₹600–₹1,000", "₹1,500–₹3,000", "₹3,000–₹5,000"],
                    ["🐪 Desert Camp", "₹1,200–₹1,800", "₹3,000–₹7,000", "₹15,000–₹30,000"],
                    ["🎯 Activities & Entry", "₹400–₹700", "₹1,000–₹2,500", "₹3,000–₹6,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹5,000–₹7,000","₹12,000–₹20,000","₹20,000–₹50,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Budget assumes solo; Desert Experience and Luxury per person when sharing. Train from Jodhpur not included (₹250–₹800 depending on class).
            </p>
          </section>

          {/* ── JAISALMER AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Jaisalmer"
            hotels={[
              { name: "Zostel Jaisalmer", type: "Budget Hostel · Near Fort", price: "From ₹500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-jaisalmer.html?aid=2820480" },
              { name: "Hotel Tokyo Palace", type: "Heritage · Fort View", price: "From ₹2,500/night", rating: "4", badge: "Mid-range", url: "https://www.booking.com/hotel/in/tokyo-palace-jaisalmer.html?aid=2820480" },
              { name: "Suryagarh Jaisalmer", type: "Luxury Heritage · Desert Edge", price: "From ₹12,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/suryagarh-jaisalmer.html?aid=2820480" },
            ]}
            activities={[
              { name: "Camel Safari & Overnight Desert Camp", duration: "Overnight", price: "From ₹1,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=jaisalmer&partner_id=PSZA5UI" },
              { name: "Jaisalmer Fort Heritage Walking Tour", duration: "3 hours", price: "From ₹600/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=jaisalmer&partner_id=PSZA5UI" },
              { name: "Kuldhara Ghost Village Excursion", duration: "Half day", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=jaisalmer&partner_id=PSZA5UI" },
              { name: "Desert National Park Jeep Safari", duration: "Half day", price: "From ₹1,200/person", url: "https://www.getyourguide.com/s/?q=jaisalmer&partner_id=PSZA5UI" },
            ]}
            pdfProductId="jaisalmer-3-days-pdf"
          />

          {/* ── JAISALMER DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Jaisalmer — Must-See Places"
            subtitle="Click each thumbnail to explore the Golden City's most iconic forts, havelis and desert landscapes."
            spots={[
              { name: "Jaisalmer Fort",       query: "jaisalmer fort golden sandstone walls architecture rajasthan",  desc: "The only living fort in India — 850 years old with thousands of residents still inside its golden walls. Go early morning for empty lanes." },
              { name: "Patwon Ki Haveli",      query: "patwon ki haveli jaisalmer carved sandstone facade ornate",    desc: "Five interconnected merchant mansions with the most intricate stone carving in Rajasthan. ₹100 entry, worth every rupee." },
              { name: "Sam Sand Dunes",        query: "sam sand dunes thar desert rajasthan camel sunset golden",     desc: "The iconic Thar Desert dunes — dramatic at sunset, surreal at sunrise. Book a camp at Khuri instead of Sam for fewer crowds." },
              { name: "Gadisar Lake",          query: "gadisar lake jaisalmer temple gateway sandstone water",         desc: "A medieval reservoir with carved gateways and lakeside temples. Free entry, magical at golden hour." },
              { name: "Kuldhara Ghost Village", query: "kuldhara abandoned village jaisalmer ruins desert stone",      desc: "An entire Paliwal Brahmin village abandoned overnight in the 1800s. Nobody knows exactly why. Genuinely haunting at sunset." },
            ]}
          />

          {/* ── DESERT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="thar desert sand dunes rajasthan sunset golden landscape"
              fallback="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=900&q=80"
              alt="Thar Desert sand dunes at golden hour"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Skip Sam Dunes. Drive 40km further to Khuri — same golden sand, a fraction of the crowds, and camps that cost half as much.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Jaisalmer is compact — the city sights are walkable, and the desert is a 40–70km drive. These routes keep things logical.
            </p>

            <div className="space-y-4">
              <RouteCard plan="Day 1" day="Fort & City Circuit (Walking)"
                stops={["Jaisalmer Fort 9am","Raj Mahal Palace","Jain Temples","Fort Rooftop Lunch","Patwon Ki Haveli 3pm","Gadisar Lake 5pm"]}
                distance="3km walking · Half day" note="Everything on Day 1 is within walking distance. Don't hire an auto for the city sights — you'll miss the lanes and atmosphere."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Jaisalmer+Fort/Patwon+Ki+Haveli/Gadisar+Lake,+Jaisalmer" />
              <RouteCard plan="Day 2" day="Desert Route"
                stops={["Jaisalmer 2pm","Khuri Village 3:30pm","Dunes 4:30pm","Desert Camp overnight"]}
                distance="40km · 1hr drive" note="If going to Sam instead of Khuri, it's 42km west. Both routes are straightforward desert highway — no navigation needed."
                color="border-orange-200 bg-orange-50"
                url="https://www.google.com/maps/dir/Jaisalmer/Khuri,+Rajasthan/Sam+Sand+Dunes,+Jaisalmer" />
              <RouteCard plan="Day 3" day="Kuldhara + Bada Bagh Loop"
                stops={["Camp 8am","Kuldhara 9:30am","Bada Bagh 11am","Jaisalmer 12pm","Departure"]}
                distance="55km · 1hr 15min total" note="Kuldhara and Bada Bagh are on the same road between Sam/Khuri and Jaisalmer — you pass them on the way back anyway. Zero detour."
                color="border-yellow-200 bg-yellow-50"
                url="https://www.google.com/maps/dir/Sam+Sand+Dunes/Kuldhara+Abandoned+Village/Bada+Bagh,+Jaisalmer/Jaisalmer" />
            </div>

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228844.!2d70.85!3d26.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Jaisalmer Travel Map" />
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rajasthani thali dal baati churma traditional food plate"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Rajasthani dal baati churma thali"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dal baati churma at the rooftop restaurants inside the fort — the view of the Thar Desert from 800-year-old walls with Rajasthani thali is peak India.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking Sam Dunes camp through a city agent", desc: "City tour operators take 40–50% commission. Book directly with the camp or through their website. Price drops from ₹3,500 to ₹1,800 for the same tent.", icon: "🏕️" },
                { title: "Visiting the fort at midday", desc: "The sandstone absorbs heat. By noon it's an oven. Go before 10am or after 4pm — the golden light is better for photos anyway.", icon: "🏰" },
                { title: "Skipping Kuldhara for more shopping", desc: "Kuldhara ghost village at sunset is genuinely eerie — an entire village abandoned overnight in the 1800s and nobody knows exactly why. Don't skip it for souvenirs.", icon: "👻" },
                { title: "Taking a 15-minute 'camel ride' at Sam", desc: "The tourist camel rides at the parking lot are a scam — 15 minutes on a camel for ₹500. Book a proper 1.5-hour safari with an overnight camp instead.", icon: "🐪" },
                { title: "Not carrying water in the desert", desc: "Dehydration is real. Carry 2L minimum per person for any desert excursion. The camps provide water but the camel ride doesn't.", icon: "💧" },
                { title: "Expecting Jaisalmer to be like Jaipur or Udaipur", desc: "Jaisalmer is remote, small, and slow. That's the point. Come with patience and you'll leave with something those bigger cities can't give you.", icon: "🌵" },
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
                { icon: "🌅", title: "Bada Bagh at Sunrise", desc: "Most people visit midday. The cenotaphs at sunrise with the desert mist are completely different — almost spiritual. Worth the early alarm.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍽", title: "Eat Inside the Fort", desc: "The rooftop restaurants inside the fort walls serve better food at lower prices than the tourist places below. 1st Gate, Jaisal Italy, and Free Tibet are all solid.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐪", title: "Khuri Over Sam — Always", desc: "Khuri dunes are 40km from the city with a fraction of the crowds. Same golden sand, authentic Rajasthani camp hosts, and half the price of the Sam tourist machine.", color: "bg-orange-50 border-orange-200" },
                { icon: "📸", title: "Golden Hour = Golden Fort", desc: "Jaisalmer Fort is made of golden sandstone. At 5:30–6:30pm, the entire fort literally glows. Best photo from Gadisar Lake or the Vyas Chhatri viewpoint.", color: "bg-orange-50 border-orange-200" },
                { icon: "🧣", title: "Shop Smart", desc: "Textiles and leather mojari shoes are genuine specialties. Avoid 'fixed price' shops near the fort gate — walk into the market lanes for real prices. Bargain 30–40% off the first quote.", color: "bg-yellow-50 border-yellow-200" },
                { icon: "🚂", title: "Take the Train", desc: "The overnight train from Jodhpur (5–6 hours) is part of the experience — you wake up to flat desert. Book SL or 3AC class on the Jaisalmer Express. ₹250–₹800 depending on class.", color: "bg-yellow-50 border-yellow-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Jaisalmer itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Jaisalmer Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Jaisalmer?", a: "3 days is the sweet spot. Day 1 for the fort and havelis, Day 2 for the desert overnight, Day 3 for Kuldhara and Bada Bagh. Add a 4th day if you want Desert National Park at a relaxed pace." },
                { q: "What is the best time to visit Jaisalmer?", a: "October to March. November to February is ideal at 10–25°C. Avoid April to September — temperatures cross 45°C and the desert is unbearable. The Desert Festival in February is a bonus if you time it right." },
                { q: "How much does a 3-day Jaisalmer trip cost?", a: "Budget: under ₹7,000 solo including hostel and basic desert camp. Desert Experience: ₹8,000–₹20,000 per person with Swiss tent camp. Luxury: ₹20,000–₹50,000 per person with premium desert camp and heritage hotel." },
                { q: "Should I visit Sam Sand Dunes or Khuri Dunes?", a: "Khuri is the better choice for most travellers. Sam is closer and more famous but overcrowded with tourist buses, loud music, and inflated prices. Khuri is 40km from Jaisalmer with authentic camps, fewer tourists, and half the cost." },
                { q: "Is Jaisalmer Fort safe to visit?", a: "Completely safe. It's a living fort with thousands of residents, shops, restaurants, and temples inside. The lanes can be maze-like but the fort is compact — you can't really get lost. Visit early morning or late afternoon to avoid heat and tour groups." },
                { q: "How do I reach Jaisalmer?", a: "Most travellers take an overnight train from Jodhpur (5–6 hours) or Jaipur (11–12 hours). Jaisalmer Airport has limited flights from Delhi and Jaipur. By road from Jodhpur it's 285km, roughly 5 hours." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jodhpur — 3 Day Blue City Guide", href: "/blog/jodhpur-3-days", soon: false },
                { label: "Jaipur — 3 Day Pink City Guide", href: "/blog/jaipur-3-days", soon: false },
                { label: "Udaipur — 3 Day Lake City Guide", href: "/blog/udaipur-3-days", soon: false },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="jaisalmer-3-days" />
          <RelatedGuides currentSlug="jaisalmer-3-days" />
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
