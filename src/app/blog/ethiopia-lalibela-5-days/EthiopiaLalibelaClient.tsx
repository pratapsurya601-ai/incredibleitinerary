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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const LALIBELA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Lalibela Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "churches",   emoji: "⛪",  label: "Landmark Church Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Lalibela Ethiopia 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Lalibela Ethiopia in 5 Days — 11 rock-hewn churches, Timkat Festival, and one of Africa%27s greatest wonders&url=${typeof window !== "undefined" ? window.location.href : ""}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/ethiopia-lalibela-5-days"
        imageUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
        description="Lalibela Ethiopia in 5 Days: 11 UNESCO rock-hewn churches, Bet Giyorgis cross-shaped wonder, Timkat Festival, and complete budget breakdown — Africa&apos;s greatest pilgrimage city."
      />
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
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function EthiopiaLalibelaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LALIBELA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lalibela, Ethiopia" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lalibela rock churches ethiopia africa carved stone bet giyorgis orthodox"
            fallback="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
            alt="Lalibela rock-hewn church Bet Giyorgis carved from solid rock Ethiopia"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Lalibela Ethiopia 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lalibela, Ethiopia in 5 Days:
                <em className="italic text-amber-300"> 11 Rock-Hewn Churches &amp; Africa&apos;s New Jerusalem</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Eleven medieval churches carved from solid volcanic rock 800 years ago. Monks chanting in Ge&apos;ez. Timkat pilgrims filling the trenches with incense and ancient song. The complete 5-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇪🇹 Ethiopia, Africa</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Eleven medieval churches carved entirely from solid volcanic rock 800 years ago by a king who wanted to build a New Jerusalem in Africa — this is Lalibela. You descend into a courtyard cut 15 metres into the earth and find a church in continuous use since the 12th century, monks chanting in Ge&apos;ez in the flickering light of beeswax candles.
            </p>
          </blockquote>

          {/* ── WHAT LALIBELA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Lalibela Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              King Lalibela — the 12th-century Ethiopian monarch — is said to have received a vision from God instructing him to build a New Jerusalem in the highlands of Africa so that Ethiopian Christians could make their pilgrimage without crossing Muslim territories. What he built was not a city but a theological argument carved from rock: eleven churches hewn directly from the red volcanic tufa of the Lasta Mountains, each representing a site from the Holy Land.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The result is one of the most extraordinary architectural achievements in human history — and unlike most ancient wonders, it has never stopped functioning. Every morning, priests in embroidered vestments carry tabots (replicas of the Ark of the Covenant) between the churches through trenches and tunnels cut from the same rock. The incense, the chanting in Ge&apos;ez (the world&apos;s oldest continuously used Christian liturgical language), and the ancient rituals have continued without interruption for eight centuries.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              During Timkat — Ethiopian Epiphany, celebrated on January 19th — up to 50,000 white-robed pilgrims process through those rock-cut trenches by torchlight. It is one of the most extraordinary gatherings on earth. Lalibela is not a museum. It is a living city of faith that happens to be a UNESCO World Heritage Site.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Gateway Airport" value="ADD → LLI" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
              <StatCard icon="⛪" label="Rock Churches" value="11 UNESCO" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Lalibela</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Feb",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "15–25°C, dry skies, and comfortable conditions for exploring the church complexes. January is exceptional for Timkat (Ethiopian Epiphany, January 19–20) — the single most extraordinary cultural event in Ethiopia. Genna (Ethiopian Christmas) falls on January 7th and is celebrated with great ceremony in the churches. Book hotels 6+ months ahead for Timkat.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jan 7 — Genna",
                  i: "✝️",
                  t: "Ethiopian Christmas",
                  d: "January 7th is Genna — Ethiopian Orthodox Christmas. The midnight mass at the rock-hewn churches draws thousands of pilgrims. White-robed worshippers fill the trenches and courtyards from midnight, priests chant by candlelight, and the entire atmosphere is unlike anything in the tourist world. One of Africa&apos;s most moving religious experiences.",
                  b: "Major festival",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jan 19 — Timkat",
                  i: "🕯️",
                  t: "Timkat — Ethiopian Epiphany",
                  d: "Timkat (usually January 19–20) is the single best reason to visit Lalibela. Up to 50,000 white-robed pilgrims flood the town, tabots are carried in procession through the rock-cut trenches by torchlight, priests carry elaborate ceremonial umbrellas, and the air fills with incense and Ge&apos;ez chanting. Hotel availability collapses — book a full year in advance.",
                  b: "Book early",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Rainy Season — Avoid",
                  d: "Heavy rains make the rock-cut paths and trenches between churches slippery and sometimes flooded. Roads to outlying sites like Yemrehanna Kristos become difficult. The landscape turns dramatically green, and Lalibela empties of tourists — but the practical difficulties are significant. Only experienced Ethiopia travellers should consider the rainy season.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Lalibela</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Lalibela has its own airport (LLI) — but it is only accessible from <strong className="font-medium">Addis Ababa Bole International Airport (ADD)</strong>. Ethiopian Airlines operates 2–3 daily flights. There is no practical overland route. Plan your trip as ADD → LLI.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Ethiopian Airlines: Addis Ababa (ADD) → Lalibela (LLI)",
                  d: "Ethiopian Airlines operates 2–3 daily flights from Addis Ababa Bole International Airport (ADD) to Lalibela Airport (LLI). Flight time: approximately 1 hour. Fares range from $80–$120 one-way when booked in advance via ethiopianairlines.com. Ethiopian Airlines is Africa&apos;s best carrier — punctual, well-run, and the domestic network is excellent.",
                  b: "Only option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚐",
                  t: "Lalibela Airport to Town",
                  d: "Lalibela Airport is 22km from town on a mountain road. Shared minibus to town: approximately 100 ETB ($2). Private taxi: 600–800 ETB ($10–14). The road is paved and takes 30–45 minutes — the highland scenery en route is extraordinary. Most hotels offer airport pickups for $15–20.",
                  b: "30–45 mins",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🏨",
                  t: "Addis Ababa Transit (Recommended)",
                  d: "Most international visitors arrive at ADD and spend 1–2 nights in Addis before flying to Lalibela. Addis has excellent hotels at all price points, the National Museum (home of Lucy, the 3.2 million-year-old fossil), Merkato (Africa&apos;s largest open-air market), and world-class Ethiopian cuisine. Building Addis into your itinerary adds significant context to your Ethiopia experience.",
                  b: "Recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🌍",
                  t: "International Connections via ADD",
                  d: "Ethiopian Airlines flies direct to over 125 destinations worldwide — London, Dubai, New York, Mumbai, Nairobi, and more. ADD is the hub of Africa&apos;s most expansive airline network. Flying into ADD and connecting to Lalibela is seamless and well-timed for most international itineraries.",
                  b: "Well-connected",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Lalibela Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to allow multiple visits to the churches at different times of day — dawn light in Bet Giyorgis and afternoon in Bet Maryam are completely different experiences. Lalibela is at 2,630m altitude: plan a gentle first day.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Addis Ababa — Explore the Capital"
                cost="$30–50 (guesthouse, National Museum, food, transport)"
                items={[
                  "Arrive at Addis Ababa Bole International Airport (ADD). Collect e-Visa stamp at immigration — have your approval letter printed. Exchange $100–200 to Ethiopian Birr (ETB) at the airport desk (rate: approximately 56 ETB per USD as of early 2026).",
                  "Take a Ride app (Ethiopia&apos;s local equivalent of Uber) or metered taxi to your guesthouse in the Bole or Kazanchis district ($5–10). Budget guesthouses: Wim&apos;s Holland House or Ethiopia Hotel ($15–30/night). Clean, locally run, excellent value.",
                  "Afternoon: National Museum of Ethiopia — home of &apos;Lucy&apos;, the 3.2 million-year-old Australopithecus afarensis skeleton discovered in 1974. Entry: approximately 200 ETB ($4). This is one of the most important archaeological finds in human history. Do not miss it.",
                  "Walk the Piazza area — Addis&apos;s historic Italian-era city centre with Fascist-period architecture, old bookshops, and the remarkable Holy Trinity Cathedral (burial site of Emperor Haile Selassie).",
                  "Dinner at a local bunna (coffee) house: injera with tibs (sautéed beef or lamb) and shiro (spiced chickpea stew) — 150–400 ETB ($3–7) for a full meal. Ethiopian coffee ceremony included — green beans roasted tableside over charcoal, ground by hand, brewed in a clay jebena. The most civilised ritual in travel.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Addis Merkato &amp; Fly to Lalibela"
                cost="$70–110 (Ethiopian Airlines flight, guesthouse, Merkato, meals)"
                items={[
                  "Morning: Merkato Market — the largest open-air market in Africa, covering several square kilometres. It sells everything from spices to electronics to livestock. Keep your bag in front and be alert to crowding. The spice section alone — piled high with berbere, mitmita, and korarima — is worth the visit.",
                  "Macchiato at Tomoca Coffee in the Piazza, Addis&apos;s oldest and most beloved coffee shop, open since 1953. A double macchiato costs 25 ETB (under 50 cents). The best coffee you will drink anywhere in the world at that price.",
                  "Afternoon: fly from ADD to LLI (Lalibela Airport). Ethiopian Airlines operates 2–3 daily flights — book via ethiopianairlines.com in advance. Flight time: 1 hour. Fare: $80–120 one-way economy.",
                  "Lalibela Airport is 22km from town. Shared minibus: 100 ETB ($2). Private taxi: 600–800 ETB ($10–14). The road climbs through spectacular highland scenery.",
                  "Check in to your accommodation. Lalibela town is compact and walkable — almost everything is within 15 minutes on foot. Budget guesthouses: Ben Abeba Guesthouse or Sora Lodge ($15–30/night). The altitude is 2,630m — take it easy this evening.",
                  "Evening: walk the main street, drink tej (Ethiopian honey wine — served in flask-shaped birilis glasses, slightly sweet, 8–12% ABV) at a local tej bet (honey wine house). Tej is the national drink of Ethiopia and the best introduction to Lalibela culture.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Northern Church Complex — Bet Medhane Alem &amp; Bet Maryam"
                cost="$55–75 ($50 church pass + food + tips for church wardens)"
                items={[
                  "Buy your 3-day church pass ($50/person) at the main ticket office near Bet Medhane Alem. This is the only way to visit — it covers all 11 churches for 3 days. There are no day-pass options. At $50, it is exceptional value for a UNESCO World Heritage Site of this magnitude.",
                  "Start at Bet Medhane Alem — the largest rock-hewn church in the world. At 33.5m long, 23.5m wide, and 11.5m tall, it was carved from a single block of red volcanic tufa. The forest of 34 rectangular columns inside creates a nave of extraordinary scale. Monks pray here at dawn — try to arrive by 7am.",
                  "Bet Maryam (Church of the Virgin Mary) — considered the most ornate of the Lalibela churches. The interior walls are covered in vivid Ethiopic murals depicting Biblical scenes in reds, blues, and golds. The morning chanting here is particularly atmospheric.",
                  "Bet Maskal, Bet Danaghel, and Bet Golgotha — the southern part of the northern complex. Bet Golgotha contains what tradition holds to be a replica of Christ&apos;s tomb and some of Lalibela&apos;s oldest manuscript treasures. Note: Bet Golgotha is sometimes restricted to men only — a longstanding Ethiopian Orthodox tradition.",
                  "Between the churches, walk the rock-cut trenches and tunnels that connect them — some passages are shoulder-width and completely dark. Bring a small torch or use your phone light. The tunnel between Bet Mikael and the main complex is the most atmospheric.",
                  "Lunch at a local guesthouse restaurant: injera with misir wot (red lentil stew in berbere sauce) — 120–200 ETB ($2–4). Afternoon rest at your hotel. The altitude in Lalibela affects even fit travellers — 2,630m is higher than any peak in the Alps. Rest is not optional on day 1 at altitude.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Bet Giyorgis at Dawn + Southern Churches"
                cost="$20–40 (churches covered by pass, food, optional hill hike guide)"
                items={[
                  "6:00am: Bet Giyorgis — the Church of St George. Ethiopia&apos;s most iconic structure. Carved in the shape of a perfect Greek cross from a single rock, it descends 12 metres into the earth. The cross-shaped roof, seen from above as you stand at the rim, is one of the defining images of world architecture. In the morning mist, with wardens praying below, it stops time.",
                  "UNESCO has described Bet Giyorgis as &apos;the eighth wonder of the world.&apos; It was carved in the late 12th or early 13th century — tradition says by King Lalibela himself as an act of penance to St George after the saint appeared to him in a vision. The geometric precision of the three recessed crosses on the roof is extraordinary.",
                  "Bet Gabriel-Rufael — the most dramatically situated church, built on the edge of a cliff and reached via a narrow, vertiginous walkway cut from rock. The cliff-face approach is one of the most thrilling approaches to any sacred building in the world.",
                  "Bet Merkorios and Bet Abba Libanos complete the south-eastern cluster. Bet Abba Libanos is said to have been built by Queen Maskal Kibra in a single night — it is attached on three sides to the cliff face, with only the facade free-standing.",
                  "Afternoon: hike to the hilltop above town for panoramic views over the Lasta Mountains and down into the church complexes. Local guides charge 300–500 ETB ($5–9) — worth it for the storytelling en route.",
                  "Evening: injera with kitfo (Ethiopian steak tartare — finely minced raw beef dressed with spiced clarified butter and mitmita chilli powder) and a flask of tej. Kitfo is Lalibela&apos;s pride dish and at 150–300 ETB ($3–5), it is genuinely outstanding. The best meal in Ethiopia.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Yemrehanna Kristos Day Trip &amp; Return to Addis"
                cost="$50–90 (optional 4x4 to Yemrehanna, flight back, farewell dinner)"
                items={[
                  "Optional morning extension: Yemrehanna Kristos Church — 30km from Lalibela (45 mins by 4x4, 1,500–2,500 ETB return with driver). This pre-Lalibela church, built around 1,000 years ago from alternating layers of cedar wood and stone inside a volcanic cave, is older and in some ways more extraordinary than the rock-hewn churches. The cave walls contain ancient mummies of pilgrims who came to die at the holy site. Very few tourists make the effort. Worth every birr.",
                  "Return to Lalibela town for a final morning visit to Bet Giyorgis at dawn if you haven&apos;t done it — no tourists, monks praying below in the pit, incense rising in the morning mist. The most atmospheric version of Lalibela exists in those first 30 minutes after sunrise.",
                  "Saturday is Lalibela&apos;s main market day — fresh injera flatbreads baked on clay mitads, berbere spice mixes (buy a kilo for $2), teff grain, handwoven cotton shammas (white prayer shawls), and Lalibela cross jewellery (replicas of the famous 12th-century Lalibela cross — an elaborate ceremonial cross 50cm tall, now kept in Bet Golgotha).",
                  "Fly back to Addis (LLI → ADD, 1 hour, Ethiopian Airlines). If time allows: Entoto Hill above Addis for panoramic city views, or the Addis Ababa Merkato for last-minute Ethiopian crafts and spices.",
                  "Farewell Ethiopian coffee ceremony at a local bunna house near the airport before departure — the full three-round ceremony (abol, tona, baraka), roasted and ground in front of you over 45 minutes. The third round (baraka) is a blessing. A final ritual of extraordinary beauty before leaving Ethiopia.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Lalibela" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK CHURCH GUIDE ── */}
          <section id="churches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛪ Landmark Church Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All 11 churches are covered by the $50 combined 3-day pass. They divide into three groups: the northern cluster (7 churches around shared courtyards), the south-eastern cluster (4 churches connected by tunnels), and Bet Giyorgis (standalone, most famous). Each has a distinct character — do not rush.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bet Giyorgis (Church of St George)",
                  e: "Included in $50 pass",
                  d: "The most iconic building in Ethiopia and one of the most extraordinary structures on earth. Carved in the shape of a perfect Greek cross from a single rock, it descends 12m into the earth. The three recessed Greek crosses on the roof represent the Holy Trinity. UNESCO&apos;s &apos;eighth wonder of the world.&apos; Visit at dawn — the mist and light are incomparable.",
                  t: "Must see · Standalone",
                },
                {
                  n: "Bet Medhane Alem (House of the Saviour of the World)",
                  e: "Included in $50 pass",
                  d: "The largest rock-hewn church in the world — 33.5m long, 23.5m wide, 11.5m tall. Forty-four columns surround the exterior (28 free-standing, 16 engaged). The interior nave has a forest of 34 rectangular columns. Morning services begin before 7am. The scale does not register in photographs — you must stand inside it.",
                  t: "Must see · Northern cluster",
                },
                {
                  n: "Bet Maryam (House of the Virgin Mary)",
                  e: "Included in $50 pass",
                  d: "The most ornately decorated church in the complex — interior walls covered in vivid Ethiopic murals depicting the Nativity, the Crucifixion, and the life of Mary in brilliant reds, blues, and earth tones. Morning chanting (6–8am) is the most atmospheric time to visit. Look for the carved swastika and cross symbols — pre-Christian symbols absorbed into Orthodox decoration.",
                  t: "Must see · Northern cluster",
                },
                {
                  n: "Bet Golgotha (House of Calvary)",
                  e: "Included in $50 pass — men only",
                  d: "Contains the most sacred treasures in Lalibela, including what tradition holds to be a replica of Christ&apos;s tomb and some of the finest bas-relief carvings of any of the churches. The inner sanctuary is restricted to men — a longstanding Ethiopian Orthodox tradition. The carved saints inside are extraordinary. Request guided access for the inner rooms.",
                  t: "Northern cluster · Men only",
                },
                {
                  n: "Bet Gabriel-Rufael (House of Gabriel and Raphael)",
                  e: "Included in $50 pass",
                  d: "The most dramatically situated church — built on the edge of a cliff and reached via a narrow, vertiginous walkway cut into the cliff face. The approach is one of the most thrilling in world sacred architecture. The church interior is more austere than the northern cluster, but the cliff-edge location and the bridge approach make it unmissable.",
                  t: "Must see · South-eastern cluster",
                },
                {
                  n: "Bet Abba Libanos",
                  e: "Included in $50 pass",
                  d: "Tradition holds this church was built by Queen Maskal Kibra — King Lalibela&apos;s wife — in a single night with the help of angels. Three sides are built into the cliff face; only the facade is free-standing. The carved window frames and the monks&apos; living quarters carved directly into the cliff alongside the church are particularly striking.",
                  t: "South-eastern cluster",
                },
                {
                  n: "Bet Amanuel (House of Emmanuel)",
                  e: "Included in $50 pass",
                  d: "Considered the most technically sophisticated of the Lalibela churches in terms of carving complexity — the exterior replicates the Aksumite architectural style with elaborate horizontal beam patterns carved in relief. Sometimes called the &apos;Imperial Church&apos; — it may have served as the royal family&apos;s private chapel. Particularly beautiful in the afternoon light.",
                  t: "Must see · South-eastern cluster",
                },
                {
                  n: "Bet Merkorios (House of Mercury)",
                  e: "Included in $50 pass",
                  d: "One of the semi-monolithic churches, partially carved from the rock and partially a cave church. Notable for the carved chains and shackles near the entrance — tradition says this was once used as a prison before being converted to a church. The oldest paintings in the Lalibela complex survive here in fragments.",
                  t: "South-eastern cluster",
                },
                {
                  n: "Yemrehanna Kristos (day trip, 30km)",
                  e: "1,500–2,500 ETB return by 4x4",
                  d: "Not one of the 11 UNESCO rock-hewn churches, but older and in some ways more extraordinary. A pre-Lalibela church built around 1,000 years ago from alternating layers of cedar wood and stone inside a volcanic cave. The ancient mummies of pilgrims who came to die at the holy site fill the cave walls. Very few tourists visit. One of Ethiopia&apos;s most profound travel experiences.",
                  t: "Day trip · Not on main pass",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Lalibela — Rock-Hewn Churches of Ethiopia"
            subtitle="Eleven medieval churches carved from solid volcanic rock, still in use after 800 years."
            spots={[
              {
                name: "Bet Giyorgis — Church of St George",
                query: "bet giyorgis church lalibela ethiopia cross carved rock pit",
                desc: "The most iconic structure in Ethiopia — a Greek cross carved from a single rock, descending 12 metres into the earth.",
              },
              {
                name: "Bet Medhane Alem — World&apos;s Largest Rock Church",
                query: "bet medhane alem lalibela ethiopia largest rock church columns",
                desc: "The largest rock-hewn church in the world: 33.5m long with a forest of 34 interior columns, carved from solid red tufa.",
              },
              {
                name: "Bet Maryam Interior Murals",
                query: "bet maryam lalibela ethiopia interior murals orthodox christian",
                desc: "The most ornately decorated Lalibela church — walls covered in vivid 12th-century Ethiopic murals depicting Biblical scenes.",
              },
              {
                name: "Timkat Festival Pilgrims",
                query: "timkat festival lalibela ethiopia pilgrims white robes epiphany",
                desc: "Timkat (Ethiopian Epiphany, January 19) — 50,000 white-robed pilgrims fill the rock-cut trenches with incense and ancient song.",
              },
              {
                name: "Bet Gabriel-Rufael Cliff Approach",
                query: "bet gabriel rufael church lalibela cliff bridge approach",
                desc: "Bet Gabriel-Rufael — reached via a narrow walkway cut into the cliff face, one of the most dramatic approaches to any sacred building.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ethiopia is one of Africa&apos;s most affordable destinations for travellers. The biggest costs are the internal flight (ADD→LLI, $80–120) and the church pass ($50). Food and accommodation in Lalibela are remarkably cheap by any global standard.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ ADD→LLI Flight (return)", "$80–120", "$80–150", "$600–900 (charter)"],
                    ["🏨 Accommodation (4 nights)", "$60–120 (guesthouse)", "$240–400 (boutique)", "$600–1,000 (best lodges)"],
                    ["⛪ Church Pass (3 days)", "$50", "$50", "$50"],
                    ["🍽 Food (5 days)", "$25–75 (local restaurants)", "$75–175 (restaurant meals)", "$250–500 (fine dining)"],
                    ["🚐 Transport (in-country)", "$20–40 (shared taxi/minibus)", "$60–120 (private transfers)", "$200–400 (private 4x4)"],
                    ["🗺 Guided Tours", "$30–50 (day guide)", "$150–250 (licensed guide 3 days)", "$400–600 (private expert)"],
                    ["TOTAL (5 days, per person)", "~$265–455", "~$655–1,145", "~$2,100–3,450"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses at 800–1,500 ETB/night, local tej houses and injera restaurants (150–400 ETB/meal), shared minibuses, and a single licensed guide for one day. Ethiopia is extraordinarily affordable at this tier.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (~$160/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Ben Abeba Hotel or Roha Hotel (3,000–5,000 ETB/night), licensed guide for all church days ($30–50/day), private airport transfers, and the Yemrehanna Kristos day trip by 4x4.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~$350/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Lalibela Lodge or Seven Olives Hotel ($150–250/night), private charter flight ADD→LLI ($600–900 one-way), private expert guide, pre-arranged access to restricted areas, and the full cultural programme.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Lalibela</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lalibela is a small highland town and accommodation options are relatively limited compared to major tourist cities. Book well in advance — especially for Timkat (January 19–20) when every bed within 50km disappears. The main area around the churches has the best location.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Ben Abeba Hotel",
                  type: "Boutique · Cliff-edge architecture",
                  price: "From 3,500 ETB ($60)/night",
                  badge: "Most unique",
                  desc: "Designed by a Scottish-Ethiopian partnership, Ben Abeba is one of Africa&apos;s most architecturally unusual hotels — a series of curved stone and wood pavilions perched on a cliff edge overlooking the entire Lasta mountain range. The sunset terrace restaurant is Lalibela&apos;s best dining experience. Request a mountain view room. Book months ahead.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Maribela Hotel",
                  type: "Mid-range boutique · Town centre",
                  price: "From 2,500 ETB ($45)/night",
                  badge: "Best location",
                  desc: "A clean, well-run mid-range hotel in the town centre, within walking distance of the northern church complex. Comfortable rooms, reliable hot water, good breakfast included, and staff who can arrange guides, 4x4s to Yemrehanna, and airport pickups. The best balance of price, location, and quality in Lalibela.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Lal Hotel",
                  type: "Mid-range · Church views",
                  price: "From 3,000 ETB ($54)/night",
                  badge: "Church views",
                  desc: "One of Lalibela&apos;s established mid-range options with rooms looking directly toward the church complex. The rooftop breakfast with church views is a genuine highlight. Popular with tour groups — book ahead. The helpful front desk team can arrange licensed guides and day trips.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Budget Guesthouses (Sora Lodge / local houses)",
                  type: "Budget · Town centre",
                  price: "From 800 ETB ($14)/night",
                  badge: "Best value",
                  desc: "Several small guesthouses around the main street offer basic but clean rooms with shared bathrooms and local breakfasts. Sora Lodge and similar options are consistently recommended by budget travellers. Staff at these guesthouses often know local guides, market days, and church access times better than any guide book.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Lalibela</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ethiopian cuisine is one of the world&apos;s great food traditions — and in Lalibela you eat it at its most authentic. Injera (fermented teff flatbread) is both plate and utensil. Wots (stews), tibs, shiro, and kitfo are eaten communally, scooped with torn pieces of injera. Tej (honey wine) is the drink of choice. Prices are extraordinary — full meals cost 150–400 ETB ($3–7).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ben Abeba Restaurant",
                  t: "Cliff-edge dining · Ethiopian and continental",
                  d: "The finest dining experience in Lalibela — perched on the cliff edge of the Ben Abeba Hotel complex with panoramic views of the Lasta Mountains. The menu blends Ethiopian dishes (tej, injera, tibs) with continental cooking. The sunset terrace is Lalibela&apos;s social centrepiece. Book in advance for dinner. 400–900 ETB ($7–16) per person.",
                  b: "Best views",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Local Tej Houses (Tej Bets)",
                  t: "Traditional · Main street area",
                  d: "Several small tej bets (honey wine houses) on and around the main street serve tej by the birili (flask) alongside injera and wots. This is the most authentic Lalibela dining experience and the cheapest: 50–150 ETB ($1–3) for a full flask of tej and 100–200 ETB for a plate of injera with shiro or tibs. The owners speak minimal English — point at the food and smile.",
                  b: "Most authentic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Hotel Rooftop Restaurants",
                  t: "Mid-range · Church views",
                  d: "Several of Lalibela&apos;s mid-range hotels (Lal Hotel, Maribela) have rooftop restaurants serving Ethiopian and basic international menus with views toward the church complex. These are the safest choice for travellers with dietary restrictions who need a menu. 200–500 ETB ($4–9) per person. Good injera spreads at breakfast.",
                  b: "Safe choice",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Local Bunna (Coffee) Houses",
                  t: "Coffee ceremony · All over town",
                  d: "Lalibela has dozens of small bunna houses where the full Ethiopian coffee ceremony is performed: green beans roasted over charcoal, cooled by waving, ground by hand with a mortar, brewed in a clay jebena, and served in three rounds (abol, tona, baraka). The ceremony takes 30–45 minutes. A complete ceremony with snacks (popcorn or kolo grain) costs 30–80 ETB ($0.50–1.50). Never rush it.",
                  b: "Coffee ritual",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Lalibela Ethiopia"
            hotels={[
              {
                name: "Ben Abeba Hotel",
                type: "Boutique cliff-edge · Mountain views",
                price: "From $60/night",
                rating: "4",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/et/ben-abeba.html?aid=2820480",
              },
              {
                name: "Maribela Hotel",
                type: "Mid-range boutique · Town centre",
                price: "From $45/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/et/maribela.html?aid=2820480",
              },
              {
                name: "Lal Hotel Lalibela",
                type: "Mid-range · Church views",
                price: "From $54/night",
                rating: "4",
                badge: "Church views",
                url: "https://www.booking.com/hotel/et/lal-lalibela.html?aid=2820480",
              },
              {
                name: "Seven Olives Hotel",
                type: "Boutique · Valley views",
                price: "From $100/night",
                rating: "4",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/et/seven-olives.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Lalibela Rock Churches Guided Tour",
                duration: "Full day",
                price: "From $30/person",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=lalibela+rock+churches+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Timkat Festival Experience Lalibela",
                duration: "2 days",
                price: "From $50/person",
                badge: "Once in a lifetime",
                url: "https://www.getyourguide.com/s/?q=timkat+festival+lalibela&partner_id=PSZA5UI",
              },
              {
                name: "Yemrehanna Kristos Day Trip",
                duration: "Full day",
                price: "From $40/person",
                badge: "Hidden gem",
                url: "https://www.getyourguide.com/s/?q=yemrehanna+kristos+lalibela&partner_id=PSZA5UI",
              },
              {
                name: "Ethiopian Coffee Ceremony Experience",
                duration: "1.5 hrs",
                price: "From $15/person",
                url: "https://www.getyourguide.com/s/?q=ethiopian+coffee+ceremony&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Lalibela</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⛪",
                  title: "Rushing All 11 Churches Into One Day",
                  desc: "Some travellers try to see all 11 churches in a single day. This is a waste — you will be exhausted and see nothing properly. The $50 pass covers 3 days. Spread the churches across 2 full days, go at dawn and at dusk, and return to your favourites. The atmosphere changes completely between 6am, midday, and sunset. Bet Giyorgis at dawn and Bet Maryam during afternoon chanting are different experiences entirely.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "👗",
                  title: "Inappropriate Clothing Inside the Churches",
                  desc: "The Lalibela churches are active places of Ethiopian Orthodox Christian worship, not tourist attractions. Women must cover their heads and shoulders (bring a light scarf — sold everywhere in town for 50–100 ETB). Men must remove shoes before entering; socks are fine but the floors are cold stone. Shorts are not acceptable for any gender. The wardens will refuse entry to inappropriately dressed visitors — dress respectfully and you will be welcomed with warmth.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📸",
                  title: "Photographing Tabots or Priests Without Permission",
                  desc: "The tabots (the sacred Ark of the Covenant replicas kept in every Ethiopian Orthodox church) must never be photographed — this is absolutely forbidden and deeply offensive. Always ask before photographing priests or monks during services. The dawn service at Bet Maryam is the most photographically tempting and the most sensitive — read the room before raising your camera. When in doubt, put it down.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌡️",
                  title: "Underestimating Altitude Acclimatisation",
                  desc: "Lalibela sits at 2,630 metres — higher than the highest peak in the Alps. If you arrive from sea level you will feel breathless, tired, and potentially headachy for the first 12–24 hours. Plan a gentle first afternoon in Lalibela, drink twice the water you think you need, avoid alcohol until Day 2, and do not plan strenuous hikes on your first day. The altitude affects budget and luxury travellers equally — it is physiology, not fitness.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗓️",
                  title: "Visiting During Timkat Without Advance Hotel Booking",
                  desc: "Timkat (Ethiopian Epiphany, typically January 19–20) transforms Lalibela from a quiet mountain town into a sea of 50,000 white-robed pilgrims. It is the most extraordinary cultural event in Ethiopia and one of the most extraordinary gatherings in Africa — but hotels book out 6–12 months in advance. If you want to attend Timkat, book accommodation the moment you decide to travel to Ethiopia. Arriving at Timkat without a booking means sleeping very far from the churches.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Lalibela</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Bet Giyorgis at Sunrise — Non-Negotiable",
                  desc: "At 6am, when the morning mist fills the pit and the golden light falls perfectly into the cross-shaped roof, Bet Giyorgis is one of the transcendent travel experiences in the world. By 9am the tour groups arrive and the magic evaporates. Set the alarm — this is a 6am moment, every single day you are in Lalibela.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧭",
                  title: "Hire a Licensed Guide — The Difference Is Enormous",
                  desc: "Without a guide, the rock-hewn churches are impressive stonework. With a licensed guide ($30–50/day), they become a 12th-century theological programme carved in rock — every architectural detail, window orientation, and symbol is intentional. Licensed guides charge $30–50/day and the difference they make to understanding Lalibela is genuinely immeasurable. Ask your hotel to recommend one.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "☕",
                  title: "Participate in a Full Ethiopian Coffee Ceremony",
                  desc: "Ethiopia invented coffee — the word comes from the Kaffa region. The traditional ceremony (roasting green beans over charcoal, cooling by waving, grinding by hand, brewing in a jebena clay pot, serving three rounds) is an act of hospitality that takes 45 minutes. Never rush it or decline a round. The third cup (baraka) is a blessing. A complete ceremony costs 30–80 ETB — less than $1.50.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎵",
                  title: "Attend Dawn Liturgy at Bet Maryam",
                  desc: "Every morning between 6am and 8am, priests chant the dawn liturgy in Ge&apos;ez — the world&apos;s oldest continuously used Christian liturgical language — in the candlelit interior of Bet Maryam. The sound, the incense, and the ancient murals combine into an experience that has no parallel in the tourist world. Dress completely appropriately (shoulders covered, shoes off). Sit quietly at the back.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💡",
                  title: "Carry a Torch in the Church Tunnels",
                  desc: "The rock-cut trenches and tunnels connecting the churches include passages that are completely dark — shoulder-width and pitch black for 20–30 metres. A small torch (or your phone light) transforms these transitions from disorienting stumbles into genuinely atmospheric experiences. The tunnel between Bet Mikael and the main courtyard is the most memorable.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏔️",
                  title: "Make the Day Trip to Yemrehanna Kristos",
                  desc: "Only about 10–15% of Lalibela visitors make the 30km trip to Yemrehanna Kristos — the pre-Lalibela cave church built from alternating cedar and stone 1,000 years ago. The mummies of ancient pilgrims who came to die at the holy site fill the cave walls. It is older, stranger, and in some ways more moving than the rock-hewn churches. Hire a 4x4 through your hotel — 1,500–2,500 ETB return.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Lalibela, Ethiopia" />

          {/* Combine With */}
          <CombineWith currentSlug="ethiopia-lalibela-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get to Lalibela from Addis Ababa?",
                  a: "Ethiopian Airlines operates 2–3 daily flights from Addis Ababa Bole International Airport (ADD) to Lalibela Airport (LLI). Flight time is approximately 1 hour. Book via ethiopianairlines.com — economy fares range from $80 to $120 one-way when booked in advance. There is no practical overland route (it involves many hours on difficult mountain roads). From Lalibela Airport, a shared minibus to town costs approximately 100 ETB ($2); a private taxi costs 600–800 ETB ($10–14).",
                },
                {
                  q: "How much does the Lalibela church pass cost and how does it work?",
                  a: "The combined church pass costs $50 per person and is valid for 3 consecutive days. It covers all 11 rock-hewn churches in Lalibela — the northern cluster (Bet Medhane Alem, Bet Maryam, Bet Maskal, Bet Danaghel, Bet Golgotha, Bet Mikael, and Bet Debre Sina), the south-eastern cluster (Bet Gabriel-Rufael, Bet Merkorios, Bet Abba Libanos, and Bet Amanuel), and the standalone Bet Giyorgis. Buy it at the main ticket office near Bet Medhane Alem at the start of your first church day.",
                },
                {
                  q: "When is the best time to visit Lalibela?",
                  a: "October to February is the dry season and the best general time to visit. January is the absolute peak — Genna (Ethiopian Christmas, January 7) and Timkat (Ethiopian Epiphany, usually January 19–20) are two of Africa&apos;s most extraordinary religious festivals, both centred on the Lalibela churches. For Timkat, book accommodation 6–12 months in advance. The rainy season (June–September) is not recommended — the church trenches flood and roads to outlying sites become impassable.",
                },
                {
                  q: "Can I combine Lalibela with other Ethiopian destinations?",
                  a: "Absolutely. Ethiopia has one of Africa&apos;s richest historical travel circuits. Common additions: Gondar (medieval castles known as the &apos;Camelot of Africa&apos;, 1-hour flight from Lalibela), Axum (ancient obelisks and the purported home of the Ark of the Covenant, 1 hour from Lalibela), and the Simien Mountains (trekking with gelada baboons and Ethiopian wolves). Ethiopian Airlines connects all these cities efficiently. Addis Ababa (2 days minimum) works as both arrival and departure hub.",
                },
                {
                  q: "Is Lalibela safe for solo travellers?",
                  a: "Lalibela is generally safe for solo travellers, including solo women. The town is small, well-oriented toward tourism, and the church complex has wardens present at all times. Standard precautions apply: do not photograph locals without permission, dress conservatively, be respectful of ongoing religious services, and be aware that persistent touts operate around the church entrances (politely but firmly say &apos;no thank you&apos; and keep walking). Having a licensed guide eliminates most of these friction points entirely.",
                },
                {
                  q: "What is Ethiopian injera and what should I eat in Lalibela?",
                  a: "Injera is a large, spongy fermented flatbread made from teff grain — both the plate and the utensil of Ethiopian cuisine. Dishes are placed on top of the injera and you eat by tearing off pieces and scooping with your right hand. Must-try dishes: tibs (sautéed beef or lamb with peppers and onions), shiro (spiced chickpea stew), misir wot (red lentil stew in berbere sauce), and kitfo (Ethiopian steak tartare — seasoned raw minced beef, the local pride dish). Tej (honey wine) is the traditional beverage. A full meal costs 150–400 ETB ($3–7).",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Lalibela trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/ethiopia-lalibela-5-days", label: "5-Day Itinerary", icon: "📅" },
                { href: "/blog/africa-travel-guide", label: "Africa travel guide", icon: "🌍" },
                { href: "/blog/kenya-masai-mara-7-days", label: "Kenya Safari", icon: "🦁" },
                { href: "/blog/rwanda-gorillas-5-days", label: "Rwanda Gorillas", icon: "🦍" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="ethiopia-lalibela-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; East Africa Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rwanda Gorillas in 5 Days", href: "/blog/rwanda-gorillas-5-days" },
                { label: "Namibia 7 Days — Desert &amp; Wildlife", href: "/blog/namibia-7-days" },
                { label: "Kenya Masai Mara 7-Day Safari", href: "/blog/kenya-masai-mara-7-days" },
                { label: "Tanzania &amp; Zanzibar 7 Days", href: "/blog/tanzania-zanzibar-7-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
