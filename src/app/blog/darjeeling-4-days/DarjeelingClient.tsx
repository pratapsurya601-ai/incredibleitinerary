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


const DARJEELING_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "getting",     emoji: "🚗", label: "Getting There" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Darjeeling 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Darjeeling in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function DarjeelingClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹10k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏔", label: "Comfortable", sub: "₹10k–25k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "👑", label: "Premium", sub: "₹25k–45k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DARJEELING_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Darjeeling" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="darjeeling kangchenjunga tea garden himalaya"
            fallback="https://images.unsplash.com/photo-1622227056993-6e7f88420855?w=1600&q=85"
            alt="Darjeeling tea gardens with Kangchenjunga in the background"
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
              <span className="text-white/70">Darjeeling 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Darjeeling in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with Tiger Hill sunrise, toy train, tea estates, real timings and the things most guides don&apos;t tell you.
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
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Tiger Hill at 4am in October when the clouds part and Kangchenjunga appears in golden light — I&apos;ve seen it three times and I still can&apos;t describe it properly. This guide covers everything from that sunrise to the last momo at Chowrasta.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚗 Getting to Darjeeling</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There&apos;s only one practical way in — and one romantic but slow alternative.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "By Road (Recommended)", emoji: "🚙", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["From","Bagdogra Airport (IXB) or NJP Station"],["Distance","80km, 3–3.5 hours uphill"],["Shared Jeep","₹250–₹350/person from Siliguri"],["Private Cab","₹2,500–₹3,500 one way"]],
                  note: "Book your return cab in advance. Shared jeeps stop running after 2pm from Darjeeling." },
                { title: "Toy Train (Scenic)", emoji: "🚂", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["From","NJP (New Jalpaiguri) Station"],["Duration","7 hours — yes, seven"],["Cost","₹1,500–₹2,500 depending on class"],["Best Bit","Batasia Loop and Ghum station"]],
                  note: "The toy train is charming but brutally slow — take the joyride from Darjeeling to Ghum (40 min) instead of the full 7-hour route unless you really love trains." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="4 Days" />
            <StatCard icon="💰" label="Budget From" value="₹8,000" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Dec" />
            <StatCard icon="✈️" label="Airport" value="Bagdogra (IXB)" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under ₹10,000</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses · ₹400–₹800/night · Shared jeeps for transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive + Mall Road + Observatory Hill"
                  items={[
                    "Bagdogra/NJP → shared jeep to Darjeeling (₹250–₹350, 3.5hrs). Depart before noon to arrive by daylight.",
                    "Check into hostel/guesthouse near Chowrasta — Darjeeling Backpackers or Triveni Guest House (₹400–₹800/night)",
                    "4pm: Walk Mall Road (Chowrasta) — free, flat, lined with colonial-era shops. The heart of Darjeeling.",
                    "The Chowrasta momos from the street cart near Keventers are better than any restaurant version in town. ₹40–₹60 a plate.",
                    "5pm: Observatory Hill — short 10-minute climb, prayer flags, shared Hindu-Buddhist temple, panoramic views",
                    "Sunset from Chowrasta — on a clear day Kangchenjunga turns pink. Free, no crowd.",
                    "Dinner at Kunga Restaurant — authentic Tibetan food, thukpa and momos for ₹150–₹250"
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Tiger Hill Sunrise + Batasia Loop + HMI + Ropeway"
                  items={[
                    "3:30am wake-up — shared jeep to Tiger Hill (₹350–₹500 round trip, includes 1hr wait). Reach by 4:30am.",
                    "Tiger Hill sunrise: watch Kangchenjunga (8,586m) turn gold. Entry ₹30. Oct–Dec has clearest views.",
                    "6:30am: Return via Batasia Loop — the famous spiral railway track with war memorial and mountain backdrop. ₹15 entry.",
                    "9am: Himalayan Mountaineering Institute (HMI) — Tenzing Norgay museum, mountaineering exhibits. ₹100 entry, 1.5hrs.",
                    "HMI shares compound with Padmaja Naidu Zoo — red pandas, snow leopards. ₹60 entry.",
                    "2pm: Darjeeling Ropeway to Singla Bazaar — 45 min round trip, valley views, ₹250–₹350. Closes at 4pm.",
                    "Evening: Walk to Glenary's Bakery — colonial-era patisserie, try the rum ball and hot chocolate. Budget ₹200–₹350."
                  ]}
                  cost="₹1,200–₹1,800 excluding accommodation" />
                <DayCard day="Day 3" title="Tea Estate + Peace Pagoda + Toy Train + Rock Garden"
                  items={[
                    "8am: Walk to Happy Valley Tea Estate (20 min from Mall Road) — free guided tour of the factory and fields",
                    "Darjeeling tea tastes different when you're standing in the estate where it was picked that morning — Happy Valley does this better than the commercialized estates.",
                    "Buy first flush tea directly from the estate shop — ₹200–₹500 for 100g, roughly half the Mall Road price",
                    "11am: Japanese Peace Pagoda — 30 min walk from Chowrasta through forests. Free entry, meditation hall, mountain views.",
                    "1pm: Darjeeling–Ghum joyride on the toy train (₹800 for the 40-min experience). Covers Batasia Loop from the train perspective.",
                    "3pm: Rock Garden and Ganga Maya Park — terraced garden with waterfalls, 30-min drive. ₹40 entry.",
                    "Evening: Keventer's for egg roll and Darjeeling tea overlooking the valley. ₹100–₹200."
                  ]}
                  cost="₹1,500–₹2,200 excluding accommodation" />
                <DayCard day="Day 4" title="Kalimpong Day Trip + Departure"
                  items={[
                    "7am: Shared jeep to Kalimpong (₹150–₹200, 2.5hrs) — smaller, quieter hill town with Lepcha culture",
                    "Visit Deolo Hill for 360-degree views, Durpin Monastery for Tibetan Buddhist architecture",
                    "Kalimpong is famous for nurseries — orchids and cacti at Morgan House area",
                    "Lunch at Gompu's — Kalimpong's best momos and noodle soup. ₹120–₹200.",
                    "2pm: Return to Darjeeling (or continue to Bagdogra for departure). Book an evening flight.",
                    "Alternative: Skip Kalimpong, do the Sandakphu trek starting point at Manebhanjang (2hrs from Darjeeling) for a taste of the trail."
                  ]}
                  cost="₹800–₹1,400 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–₹10,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">🏔</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Comfortable Plan — ₹10,000–₹25,000</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Heritage hotels / boutique stays · ₹1,500–₹3,500/night · Private cab for sightseeing</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive + Mall Road + Glenary's + Sunset"
                  items={[
                    "Bagdogra → private cab to Darjeeling (₹2,500–₹3,500, 3hrs). Pre-book through hotel for best rates.",
                    "Check into heritage hotel — Cedar Inn, Dekeling or Revolver (₹1,500–₹3,500/night). Ask for a Kangchenjunga-facing room.",
                    "3pm: Stroll Chowrasta (Mall Road) — browse Nathmulls Tea Room for tasting and purchases. Free tasting, buy ₹300–₹800.",
                    "4pm: Glenary's Bakery — colonial-era institution. Sit upstairs for the view. Pastries + Darjeeling tea ₹350–₹500.",
                    "5pm: Observatory Hill — prayer flags, shared temple, and if the sky is clear, Kangchenjunga right in front of you.",
                    "Dinner at Gatty's Cafe — best thin-crust pizza in the hills, surprisingly good. ₹500–₹800 for two."
                  ]}
                  cost="₹1,500–₹2,500 excluding accommodation" />
                <DayCard day="Day 2" title="Tiger Hill 4am + Batasia Loop + HMI + Ropeway"
                  items={[
                    "3:30am: Private cab to Tiger Hill (₹1,500–₹2,000 round trip with waiting). Warmer than shared jeep.",
                    "Tiger Hill: Kangchenjunga in golden light, Everest visible on very clear days to the far west. Entry ₹30.",
                    "6am: Batasia Loop on the drive back — stop for photos at the war memorial with the toy train track spiralling below.",
                    "9am: Himalayan Mountaineering Institute + Padmaja Naidu Zoo. Combined entry ₹160. Allow 2.5 hours.",
                    "12pm: Lunch at Sonam's Kitchen — Tibetan-fusion, excellent thentuk and sha phaley. ₹400–₹600 for two.",
                    "2:30pm: Ropeway ride to Singla Bazaar — tea garden valley views for 45 minutes. ₹350.",
                    "Evening: Hot chocolate at Glenary's rooftop bar, overlooking the lit-up Mall Road"
                  ]}
                  cost="₹2,500–₹4,000 excluding accommodation" />
                <DayCard day="Day 3" title="Happy Valley Tea + Peace Pagoda + Toy Train + Rock Garden"
                  items={[
                    "8am: Happy Valley Tea Estate — guided factory tour, walk through the tea bushes. Free entry.",
                    "Buy estate-fresh Darjeeling first flush directly — ₹200–₹500 per 100g, gift boxes available.",
                    "10:30am: Japanese Peace Pagoda — peaceful walk through cypress and rhododendron forest. Free.",
                    "12pm: Darjeeling–Ghum toy train joyride (₹1,200–₹1,500 first class). The 40-minute ride covers the best section.",
                    "Ghum Monastery (Yiga Choeling) — oldest Tibetan monastery in the region. 15-min walk from Ghum station. Free.",
                    "3pm: Rock Garden with waterfalls and Ganga Maya Park — ₹40 entry, 1.5 hours. Private cab ₹500 return.",
                    "6pm: Sunset tea at Windamere Hotel terrace — colonial charm, ₹400–₹600 for high tea."
                  ]}
                  cost="₹2,800–₹4,500 excluding accommodation" />
                <DayCard day="Day 4" title="Kalimpong Day Trip or Sandakphu Start + Departure"
                  items={[
                    "Option A — Kalimpong day trip: Private cab (₹3,000–₹4,000 return). Deolo Hill, Durpin Monastery, flower nurseries, Morgan House.",
                    "Lunch at Gompu's in Kalimpong — the momos here are worth the 2.5-hour drive alone. ₹200–₹350 for two.",
                    "Option B — Sandakphu: Drive to Manebhanjang (2hrs), do the first 6km trek to Tumling for Sleeping Buddha view. Return same day.",
                    "2pm: Return to Darjeeling. Quick stop at Batasia Loop gift shops.",
                    "4pm: Depart for Bagdogra (3hrs). Book a 9pm+ flight for comfortable timing.",
                    "Last stop: Buy tea from Nathmulls on Mall Road if you haven't already — the Moonlight First Flush is the signature."
                  ]}
                  cost="₹2,000–₹3,500 excluding accommodation" />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 4-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹15,000–₹25,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">👑</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — ₹25,000–₹45,000</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Windamere / Mayfair / Glenburn Tea Estate · ₹5,000–₹12,000/night · Private SUV + guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive in Style + Private Tea Tasting + Sunset"
                  items={[
                    "Bagdogra → pre-arranged SUV with driver (₹4,000–₹5,000). Scenic route via Kurseong with a tea stop.",
                    "Check into Windamere Hotel (heritage), Mayfair Darjeeling, or Glenburn Tea Estate (if staying outside town).",
                    "3pm: Private tea tasting session at Nathmulls — curated first flush, second flush and white tea. ₹800–₹1,200.",
                    "Walk Chowrasta at leisure — the British Raj promenade. Band plays on weekends.",
                    "5pm: Observatory Hill at golden hour — your guide can explain the Buddhist-Hindu syncretism.",
                    "Dinner: Windamere Hotel dining room — multi-course colonial dinner, dress smart casual. ₹1,500–₹2,500/person."
                  ]}
                  cost="₹4,000–₹7,000 excluding accommodation" />
                <DayCard day="Day 2" title="Tiger Hill Private Viewing + Heritage Tour + Ropeway"
                  items={[
                    "3:30am: Private SUV to Tiger Hill. Your driver knows the VIP observation deck — ₹100 extra, far fewer people.",
                    "Tiger Hill sunrise with hot tea in hand — your hotel packs a thermos if you ask the night before.",
                    "7am: Extended Batasia Loop stop — morning mist over the railway spiral, best light for photography.",
                    "9:30am: Himalayan Mountaineering Institute — private guided tour possible if arranged through hotel. 2 hours.",
                    "12pm: Lunch at Park Restaurant — old-school Darjeeling fine dining, window seats face the valley. ₹1,200–₹1,800 for two.",
                    "2:30pm: Ropeway ride + Lebong Cart Road walk — the old British race course circuit with valley views.",
                    "Evening: Cocktails at Joey's Pub (Darjeeling's oldest bar, inside Windamere) or Glenary's rooftop."
                  ]}
                  cost="₹4,500–₹7,000 excluding accommodation" />
                <DayCard day="Day 3" title="Tea Estate Experience + Peace Pagoda + Toy Train"
                  items={[
                    "7:30am: Glenburn or Makaibari Tea Estate — premium private tour with tea-leaf plucking experience. ₹2,000–₹3,500.",
                    "Learn the difference between first flush, second flush, and autumn flush directly from the estate manager.",
                    "Buy estate-exclusive teas not available in shops — ₹500–₹2,000 for premium lots.",
                    "11am: Japanese Peace Pagoda — your driver drops you at the top, you walk down through the forest.",
                    "1pm: First-class toy train joyride Darjeeling–Ghum (₹1,500). Reserve window seat in advance.",
                    "Visit Ghum Monastery — the 15th Dalai Lama's Maitreya Buddha statue is here.",
                    "4pm: Rock Garden and Ganga Maya Park — private cab makes this effortless. 1.5 hours.",
                    "7pm: Dinner at Kunga's or Sonam's Kitchen — even in premium, these authentic Tibetan spots are irreplaceable."
                  ]}
                  cost="₹5,000–₹8,000 excluding accommodation" />
                <DayCard day="Day 4" title="Kalimpong Heritage + Departure"
                  items={[
                    "8am: Private SUV to Kalimpong (2hrs on dedicated road through Teesta Valley — stunning river views).",
                    "Kalimpong: Morgan House (colonial heritage), Deolo Hill panorama, Durpin Monastery, Zang Dhok Palri Phodang.",
                    "Visit Dr. Graham's Homes — a Scottish missionary-era school with remarkable architecture and valley setting.",
                    "Lunch at The Terrace or Mandarin — Kalimpong's upscale options with views. ₹800–₹1,200 for two.",
                    "2pm: Continue directly from Kalimpong to Bagdogra (2.5hrs, downhill — faster than via Darjeeling).",
                    "Alternative: Return to Darjeeling, last tea at Windamere, depart with an evening flight."
                  ]}
                  cost="₹3,500–₹6,000 excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹25,000–₹45,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">🏔 Comfortable</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">👑 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4N)", "₹1,600–₹3,200", "₹6,000–₹14,000", "₹20,000–₹48,000"],
                    ["🍽 Food & Drinks", "₹1,600–₹2,400", "₹3,500–₹6,000", "₹6,000–₹10,000"],
                    ["🚗 Transport", "₹1,500–₹2,200", "₹5,000–₹8,000", "₹10,000–₹15,000"],
                    ["🎯 Activities & Entry", "₹1,200–₹2,000", "₹2,500–₹4,000", "₹5,000–₹8,000"],
                    ["🍵 Tea & Souvenirs", "₹500–₹1,000", "₹1,000–₹2,500", "₹2,000–₹5,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹8,000–₹10,000","₹15,000–₹25,000","₹25,000–₹45,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Oct–Dec peak season may be 20–30% higher for accommodation. Flights to Bagdogra not included.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Darjeeling"
            hotels={[
              { name: "Darjeeling Backpackers", type: "Budget Hostel · Chowrasta", price: "From ₹500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/darjeeling-backpackers.html?aid=2820480" },
              { name: "Cedar Inn", type: "Heritage Boutique · Mall Road", price: "From ₹2,500/night", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/in/cedar-inn-darjeeling.html?aid=2820480" },
              { name: "Windamere Hotel", type: "Heritage Luxury · Observatory Hill", price: "From ₹8,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/windamere-darjeeling.html?aid=2820480" },
            ]}
            activities={[
              { name: "Tiger Hill Sunrise Tour", duration: "4 hours", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/darjeeling-l32337/tiger-hill/?partner_id=PSZA5UI" },
              { name: "Darjeeling Toy Train Joyride", duration: "40 minutes", price: "From ₹800/person", badge: "Heritage", url: "https://www.getyourguide.com/darjeeling-l32337/toy-train/?partner_id=PSZA5UI" },
              { name: "Happy Valley Tea Estate Tour", duration: "2 hours", price: "Free", url: "https://www.getyourguide.com/darjeeling-l32337/tea/?partner_id=PSZA5UI" },
              { name: "Full Day Kalimpong Excursion", duration: "Full day", price: "From ₹2,500/person", url: "https://www.getyourguide.com/darjeeling-l32337/kalimpong/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="darjeeling-4-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Darjeeling — Must-See Places"
            subtitle="Click each thumbnail to explore the Queen of the Hills."
            spots={[
              { name: "Tiger Hill Sunrise",         query: "tiger hill darjeeling sunrise kangchenjunga golden light mountains",          desc: "Wake at 3:30am, drive 11km. When the clouds clear and Kangchenjunga appears in golden light at 8,586m, every lost hour of sleep is worth it." },
              { name: "Darjeeling Himalayan Railway", query: "darjeeling toy train himalayan railway steam engine batasia loop track",     desc: "UNESCO World Heritage railway since 1881. The Darjeeling-Ghum joyride covers the best 40 minutes including Batasia Loop." },
              { name: "Happy Valley Tea Estate",     query: "happy valley tea estate darjeeling green tea garden plantation slopes",        desc: "Walk through tea bushes at 6,800ft with Kangchenjunga behind them. Free factory tour, buy estate-fresh first flush directly." },
              { name: "Batasia Loop",                query: "batasia loop darjeeling railway spiral war memorial mountain backdrop",        desc: "Where the toy train spirals 360 degrees through a garden. War memorial, flower beds, and the entire Kangchenjunga range as background." },
              { name: "Peace Pagoda",                query: "japanese peace pagoda darjeeling white stupa buddhist temple mountains",       desc: "A 30-minute forest walk from town leads to this serene white pagoda with meditation hall and unobstructed mountain views." },
            ]}
          />

          {/* ── TEA ESTATE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="darjeeling tea garden green slopes misty morning no people"
              fallback="https://images.unsplash.com/photo-1556881286-fc6915169721?w=900&q=80"
              alt="Darjeeling tea estate with misty mountain slopes"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Happy Valley Tea Estate — Darjeeling tea tastes different when you&apos;re standing in the estate where it was picked that morning.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Taking the full 7-hour toy train", desc: "The Darjeeling–Ghum joyride (40 min) covers the best section including Batasia Loop. The full NJP route is 7 hours of slow going. Do the joyride instead.", icon: "🚂" },
                { title: "Skipping Tiger Hill because of early wake-up", desc: "Yes, 3:30am hurts. But Kangchenjunga at sunrise is a once-in-a-lifetime view. Go on your first clear morning — cloud cover increases as the trip goes on.", icon: "🌅" },
                { title: "Buying tea on Mall Road first", desc: "Mall Road shops charge 50–100% more than estate shops. Visit Happy Valley or Nathmulls first for real prices and quality.", icon: "🍵" },
                { title: "Not carrying warm layers", desc: "Darjeeling sits at 6,710ft. Even in October, mornings drop to 5–8°C. Tiger Hill at 4am can be near freezing. Layer up — you can always remove them.", icon: "🧥" },
                { title: "Planning too much on Day 1", desc: "You arrive after a 3-hour mountain drive. Walk Mall Road, eat momos, watch the sunset. That's enough. Save the big sights for Day 2.", icon: "📅" },
                { title: "Visiting only commercialized tea estates", desc: "Happy Valley gives you an honest factory tour with tea workers. The big-name tourist estates rush you through gift shops.", icon: "🏭" },
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
                { icon: "🌅", title: "The Weather Window", desc: "October–December gives the clearest mountain views. March–May has rhododendron blooms but hazier skies. Check the morning sky at 5am — if Kangchenjunga is visible from your hotel, rush to Tiger Hill.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍜", title: "Momo Strategy", desc: "The Chowrasta (Mall Road) momos from the street cart near Keventers are better than any restaurant version in town. ₹40–₹60 per plate. Eat them standing up like locals do.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍵", title: "Tea Buying Guide", desc: "First flush (March–April) is the most prized and expensive. Second flush (May–June) is fuller-bodied. Buy at Happy Valley estate shop or Nathmulls on Mall Road — both are authentic. Avoid pre-packaged tourist tea.", color: "bg-sky-50 border-sky-200" },
                { icon: "📸", title: "Photography Timing", desc: "Kangchenjunga is best at sunrise (Tiger Hill) or late afternoon (from Observatory Hill/Mall Road). Midday haze kills mountain photos. The toy train at Batasia Loop is best shot at 10am with side lighting.", color: "bg-sky-50 border-sky-200" },
                { icon: "🥾", title: "The Sandakphu Teaser", desc: "If you want a taste of Himalayan trekking without a full expedition, drive to Manebhanjang and hike 6km to Tumling. The Sleeping Buddha (Kangchenjunga range) view from here is staggering.", color: "bg-purple-50 border-purple-200" },
                { icon: "📆", title: "Best Time Month by Month", desc: "Oct ✅ clearest views | Nov ✅ cold but stunning | Dec ⚠️ very cold, crystal clear | Mar ✅ warming up | Apr ✅ rhododendrons | May ⚠️ pre-monsoon haze | Jun–Sep 🌧️ avoid", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Darjeeling itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Darjeeling Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Darjeeling?", a: "4 days is ideal to cover Tiger Hill, the toy train, tea estates, Peace Pagoda, and a day trip to Kalimpong. 3 days works if you skip the day trip. 5–6 days allows adding Mirik Lake and proper trekking at Sandakphu." },
                { q: "What is the best time to visit Darjeeling?", a: "October to December offers the clearest Kangchenjunga views and pleasant weather (10–18°C). March to May is the second-best season with blooming rhododendrons. Avoid June to September — monsoon brings landslides and zero mountain visibility." },
                { q: "How much does a 4-day Darjeeling trip cost?", a: "Budget solo: ₹8,000–₹10,000 including accommodation. Comfortable mid-range: ₹15,000–₹25,000. Premium with heritage hotels and private transport: ₹25,000–₹45,000. All per person, flights to Bagdogra not included." },
                { q: "Is the Darjeeling toy train worth it?", a: "Yes, but take the 40-minute joyride from Darjeeling to Ghum — it covers Batasia Loop, the best views, and costs ₹800–₹1,500. The full 7-hour NJP route is only for dedicated train enthusiasts." },
                { q: "Can I see Mount Everest from Tiger Hill?", a: "On very clear days (mostly October–November), you can see Everest as a distant peak to the west of Kangchenjunga. But Kangchenjunga at sunrise is the real star — the world's 3rd highest peak in golden light at 4:30am." },
                { q: "How do I reach Darjeeling from Kolkata?", a: "Fly Kolkata to Bagdogra (1.5hrs, ₹3,000–₹6,000), then drive 3 hours uphill. Alternatively, overnight train to NJP (10–12 hours, ₹500–₹2,500), then shared jeep up. The toy train from NJP takes 7 hours — scenic but impractical for most." },
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
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
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

          <CombineWith currentSlug="darjeeling-4-days" />
          <RelatedGuides currentSlug="darjeeling-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
