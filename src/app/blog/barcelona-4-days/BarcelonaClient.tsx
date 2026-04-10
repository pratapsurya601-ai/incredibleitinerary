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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const BARCELONA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Barcelona Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "⛪",  label: "Landmark Guide" },
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
  const pageUrl = usePageUrl();
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
          href: `mailto:?subject=Barcelona 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Barcelona in 4 Days — Gaudi, Gothic Quarter and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/barcelona-4-days"
        imageUrl="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"
        description="Barcelona in 4 Days: Sagrada Familia, Park Guell, Gothic Quarter, Barceloneta Beach, Montjuic and tapas — complete travel guide with budget breakdown in EUR and USD."
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
export default function BarcelonaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BARCELONA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Barcelona" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="barcelona sagrada familia gaudi architecture stained glass interior"
            fallback="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600&q=85"
            alt="Sagrada Familia interior with morning light streaming through stained glass in Barcelona"
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
              <span className="text-white/70">Barcelona 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Architecture &amp; Tapas
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Barcelona in 4 Days:
                <em className="italic text-amber-300"> Gaudi, Gothic Quarter &amp; the Real City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Sagrada Familia at first light, Park Guell&apos;s mosaic terraces, La Boqueria&apos;s hidden counters, and Barceloneta at sunset. The complete guide with real timings, costs in EUR &amp; USD, and the mistakes that ruin most Barcelona trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇪🇸 Spain</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From ~€55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sagrada Familia without advance booking = 2&ndash;3 hour queue. With a &euro;26 timed ticket = walk straight in. Book at sagradafamilia.org, not third-party resellers who mark up 40%. The morning light through the east-facing stained glass turns the interior into a colour cathedral. This guide tells you exactly when to arrive for every single stop.
            </p>
          </blockquote>

          {/* ── WHAT BARCELONA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Barcelona Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Barcelona is a Mediterranean port city of 1.6 million people wedged between the sea and the Collserola hills, with 2,000 years of layered history visible in every neighbourhood. Roman walls sit beneath medieval churches, which sit next to Art Nouveau masterpieces by Gaudi, Domenech i Montaner and Puig i Cadafalch. The architecture alone would justify a visit, but Barcelona also has arguably the best food scene in southern Europe, a beach culture that runs from April to October, and a Catalan identity distinct from the rest of Spain.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: La Rambla is overcrowded and overpriced. The restaurants lining it serve bad food at double the price. The real Barcelona is one block either side of La Rambla, in the Gothic Quarter&apos;s medieval alleys, the Eixample&apos;s modernist grid, the tapas bars of Poble Sec, and the vermouth culture of Gracia. The trick to a good Barcelona trip is knowing which famous things are genuinely unmissable (Sagrada Familia, Park Guell, Gothic Quarter) and which are tourist traps (La Rambla restaurants, overpriced sangria, airport taxis).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the sweet spot. You can cover the Gaudi masterpieces, the Gothic Quarter, La Boqueria, Barceloneta Beach, Montjuic, and a day trip to Montserrat. If you have six days, add the Penedes wine region and the northern beaches of Costa Brava.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BCN (El Prat)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun" />
              <StatCard icon="⛪" label="Gaudi Sites" value="12 in Barcelona" />
              <StatCard icon="💰" label="Budget From" value="~€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Barcelona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Spring — Best Overall",
                  d: "18–26°C with long sunny days and manageable crowds. The city is alive but not overwhelmed. Beach season starts in May. Outdoor terraces are open, the light is excellent for photography, and accommodation prices are 20–30% below peak summer. May and June are arguably the best months in Barcelona.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🌅",
                  t: "Peak Summer — Hottest & Busiest",
                  d: "28–35°C with intense midday heat. Barcelona is at maximum capacity — Sagrada Familia sells out weeks ahead, La Rambla is shoulder-to-shoulder, and restaurant terraces are packed. The beaches are excellent but crowded. Prices are at their highest. If visiting in summer, book everything 2+ months ahead and plan indoor activities for 1–4pm.",
                  b: "Great for beaches, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent Value",
                  d: "20–27°C with warm sea temperatures (the Med retains summer heat). September is still beach weather without the August crowds. October brings cooler evenings, lower prices, and local festivals including La Merce (late September) — Barcelona's biggest street party with fireworks, castellers and live music citywide.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Cheapest & Quietest",
                  d: "8–16°C with occasional rain but many clear days. Barcelona's winter is mild by European standards — you can sit on a sunny terrace in January. Accommodation drops 30–50%. Sagrada Familia and Park Guell have no queues. Christmas markets in December, carnival in February. Pack layers and a light jacket.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Barcelona</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Barcelona&apos;s El Prat Airport (BCN) is 18km southwest of the city centre. Two terminals — most international flights land at T1. <strong className="font-medium">Indian passport holders need a Schengen visa (apply 2&ndash;3 months ahead at BLS/VFS, &euro;80 fee).</strong> US, UK, AU, CA citizens visit visa-free for 90 days.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights as of 2026. Best connections via Istanbul (Turkish Airlines, 14–16 hrs), Dubai (Emirates, 13–15 hrs), or Frankfurt (Lufthansa, 14–16 hrs). Return fares from Delhi or Mumbai: INR 35,000–65,000 if booked 2–3 months ahead. Turkish Airlines via Istanbul is usually the cheapest and most convenient with a single 1.5-hour layover. Air India sometimes runs seasonal direct routes — check availability.",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe & Budget Airlines",
                  d: "Ryanair, easyJet, Vueling and Transavia connect Barcelona to most European cities for EUR 20–80 return if booked early. London (2.5 hrs), Paris (2 hrs), Rome (2 hrs), Amsterdam (2.5 hrs). Vueling is Barcelona's home carrier and often cheapest for intra-Spain flights from Madrid (1 hr, EUR 25–60).",
                  b: "Cheapest flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚇",
                  t: "Airport to City Centre",
                  d: "Aerobus: EUR 7.75 one-way to Placa Catalunya, every 5 minutes, 35 minutes. The fastest and most reliable option. Metro L9 Sud: EUR 5.15, takes 45–50 minutes to Zona Universitaria then transfer. RENFE train: EUR 4.60 to Passeig de Gracia, every 30 minutes, 25 minutes (T2 only — free shuttle from T1). Skip taxis (EUR 40–50) unless travelling in a group.",
                  b: "Use Aerobus",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Getting Around Barcelona",
                  d: "The T-Casual card is essential: 10 rides for EUR 11.35 on metro, bus and tram within Zone 1. Each ride works out to EUR 1.14 vs EUR 2.40 for a single ticket. Covers all tourist areas including Sagrada Familia, Park Guell, Barceloneta, and Montjuic. Buy at any metro station. Central Barcelona is also very walkable — Gothic Quarter to Sagrada Familia is a 30-minute walk through the Eixample.",
                  b: "T-Casual 10 rides",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Barcelona Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (EUR 80&ndash;140/day, ~$86&ndash;151 USD). Each day card is expandable. The route covers Gaudi&apos;s masterpieces, the medieval quarter, beaches, Montjuic, and a choice of day trip or deeper exploration. Budget and luxury alternatives noted in cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Sagrada Familia, Park Guell & Gracia"
                cost="EUR 55–95 (~$59–103 USD) excluding accommodation"
                items={[
                  "9am: Sagrada Familia — EUR 26 timed entry (BOOK 2 MONTHS AHEAD at sagradafamilia.org). The morning light through the east-facing stained glass turns the interior into a forest of colour. Budget 1.5–2 hours inside. The Nativity facade tower add-on (EUR 36 total) is worth it for the spiral staircase and aerial views of the city.",
                  "11:30am: Walk or metro to Park Guell (25 min uphill walk, or metro L3 to Lesseps + 15 min walk). Monumental Zone: EUR 10 timed entry, book online. The mosaic bench terrace with panoramic city and sea views is the iconic photo spot. Budget 1–1.5 hours.",
                  "1:30pm: Walk down into Gracia neighbourhood for lunch. La Pepita for creative pintxos — EUR 8–15 for a selection with a beer. Gracia has the best independent shops and cafes in Barcelona, with a genuinely local village atmosphere despite being in the city.",
                  "3:30pm: Casa Vicens in Gracia — Gaudi's first house (EUR 18). Often overlooked, rarely crowded, with stunning Moorish-inspired tile work throughout. A perfect introduction to Gaudi's early style before the more famous houses.",
                  "5pm: Walk La Rambla from top (Placa Catalunya) to bottom (Columbus statue). 20 minutes, free. Observe it but do not eat or buy anything here — it is all tourist traps at double the price.",
                  "8:30pm: Dinner at Cerveceria Catalana in Eixample — EUR 20–35/person. One of Barcelona's best tapas bars. No reservations, queue from 8pm. Patatas bravas, jamón iberico, pan con tomate, and local vermouth.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Gothic Quarter, La Boqueria & Barceloneta Beach"
                cost="EUR 30–60 (~$32–65 USD) excluding accommodation"
                items={[
                  "9am: Gothic Quarter self-guided walk. Barcelona Cathedral (free entry before 12:30pm, EUR 9 after), the cloisters with 13 white geese, Roman temple of Augustus remains (free, hidden in a courtyard on Carrer del Paradis), Placa del Rei (medieval royal palace), and the narrow streets off Placa Reial.",
                  "11am: La Boqueria market on La Rambla — free to enter. Walk past the fruit juice stands at the entrance to the seafood counters in the back. That is where locals eat. El Quim de la Boqueria counter is legendary for fried eggs with baby squid (EUR 12–18). Arrive before 12:30pm or queue.",
                  "1pm: El Born neighbourhood — Picasso Museum (EUR 12, book online to skip the queue), Santa Maria del Mar basilica (free, stunning Gothic interior), and the boutiques and bars along Passeig del Born.",
                  "3:30pm: Walk to Barceloneta Beach (15 min from El Born). Free, clean, and the people-watching is half the fun. The beach improves after 4pm when day-trippers leave. Bogatell beach (10 min further) is cleaner and calmer.",
                  "6pm: Tapas crawl starting at La Cova Fumada in Barceloneta (the original bomba potato, cash only, closes at 3pm — adjust timing if visiting) then Bar Electricitat for vermouth and anchovy tapas in a bar that hasn't changed since 1929.",
                  "9:30pm: Dinner at Can Paixano (La Xampanyeria) — cava and cured meats, EUR 15–25/person. Standing room only, loud, authentic. The house cava is EUR 1.20 a glass.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Montjuic, Fundacio Miro & Poble Sec"
                cost="EUR 40–75 (~$43–81 USD) excluding accommodation"
                items={[
                  "9am: Teleferic de Montjuic cable car (EUR 13 return) for aerial views over the port, city and mountains. Alternatively walk up through the gardens from Parallel metro (free, 30 minutes, beautiful morning walk).",
                  "10am: Fundacio Joan Miro — EUR 15 entry. Bright, joyful art in a stunning building designed by Josep Lluis Sert. The rooftop sculpture garden with city views is as good as the collection inside. Budget 1–1.5 hours.",
                  "11:30am: Walk to Montjuic Castle — EUR 5 entry. Panoramic 360-degree views of the city, port, Tibidabo mountain and on clear days the Pyrenees in the distance. The walk through the gardens between the Miro foundation and the castle is one of the best strolls in Barcelona.",
                  "1pm: Walk down through the gardens to Poble Sec. Lunch on Carrer Blai — the pintxos strip. EUR 1 pintxos on toothpicks, pick and eat, they count the sticks at the end. Budget EUR 10–18 for a full lunch with vermouth.",
                  "3pm: MNAC (Museu Nacional d'Art de Catalunya) — EUR 12. The Romanesque mural collection is world-class, rescued from crumbling Pyrenean churches in the early 1900s. Free on Saturdays after 3pm. The building steps also offer one of the best photo spots looking down Avinguda de la Reina Maria Cristina toward Placa Espanya.",
                  "6pm: If summer (Thu–Sun), check the Magic Fountain light show schedule — free, spectacular, and runs in the evening at the base of Montjuic.",
                  "9pm: Cocktails at Dry Martini (Eixample institution since 1978) then dinner at a neighbourhood restaurant in Poble Sec or Eixample — EUR 20–35.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Montserrat Day Trip OR More Gaudi"
                cost="EUR 50–95 (~$54–103 USD) excluding accommodation"
                items={[
                  "Option A — Montserrat: Train from Placa Espanya (R5 line, EUR 23 round trip including cable car or rack railway). 1-hour ride to a Benedictine monastery carved into jagged mountains at 1,200m above sea level.",
                  "The Black Madonna statue, the boys' choir (Escolania, 1pm daily except July and school holidays), and the Sant Joan funicular + hike with views stretching to the Pyrenees. Budget 5–6 hours for the full experience.",
                  "Option B — More Gaudi: Casa Batllo first slot (EUR 35, book online, the rooftop and light well are extraordinary), then Casa Mila / La Pedrera (EUR 25, the rooftop warriors at golden hour). Hospital de Sant Pau (EUR 15) — a modernist masterpiece by Domenech i Montaner that most tourists miss entirely.",
                  "2pm: Lunch in Eixample — menu del dia at a neighbourhood restaurant EUR 12–20 (3-course set lunch with drink, the best value meal in Barcelona).",
                  "4pm: Last shopping on Passeig de Gracia (high-end in modernist buildings) or independent boutiques in El Born quarter (local designers, ceramics, leather goods).",
                  "7pm: Farewell sunset from Bunkers del Carmel (free) — the best panoramic view in Barcelona and it is not in most guidebooks. Locals bring wine. 15-minute uphill walk from metro Alfons X. The entire city laid out below you from the mountains to the sea.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Barcelona" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛪ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks in order of priority. Book timed entries online for Sagrada Familia and Park Guell — walk-up queues are brutal. All prices as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sagrada Familia",
                  e: "EUR 26–36 (~$28–39)",
                  d: "Gaudi's unfinished masterpiece, under construction since 1882 and scheduled for completion around 2026. The interior is a forest of branching columns designed to filter light like a canopy of trees. The east-facing stained glass (warm tones) is best in morning light; the west-facing (cool blues and greens) in afternoon. The Nativity facade tower (EUR 36 total) adds a vertiginous spiral staircase with aerial views. Book at sagradafamilia.org 2 months ahead — not third-party sites.",
                  t: "Must see · Morning · 1.5–2 hrs",
                },
                {
                  n: "Park Guell",
                  e: "EUR 10 (~$11)",
                  d: "Gaudi's mosaic-covered park overlooking the city and sea. The monumental zone (the famous part with the mosaic bench, dragon staircase, and hypostyle hall) requires a timed ticket. The surrounding park is free and excellent for morning walks. Book online — walk-up slots sell out by mid-morning in peak season. Best visited early morning for light and fewer crowds.",
                  t: "Must see · Morning · 1–1.5 hrs",
                },
                {
                  n: "Gothic Quarter (Barri Gotic)",
                  e: "Free to explore",
                  d: "Medieval maze of narrow streets built on Roman foundations. The Barcelona Cathedral (free before 12:30pm), the cloister with 13 white geese, Roman temple of Augustus remains hidden in a courtyard, and the atmospheric Placa del Rei. Best explored early morning (before 10am) when the streets are empty and the light cuts through the narrow alleys. La Rambla borders the western edge — step one street inside and the tourist trap vanishes.",
                  t: "Must see · Morning · 2–3 hrs",
                },
                {
                  n: "Casa Batllo",
                  e: "EUR 35 (~$38)",
                  d: "Gaudi's most fantastical building on Passeig de Gracia. The facade undulates like the sea, the interior light well is covered in graduated blue tiles, and the rooftop with its dragon-spine chimney is extraordinary. The immersive audio guide and augmented reality experience are included. Book the first morning slot for the best light in the central light well.",
                  t: "Highly recommended · 1–1.5 hrs",
                },
                {
                  n: "La Boqueria Market",
                  e: "Free entry",
                  d: "Barcelona's legendary food market on La Rambla, operating since 1217. The entrance is a tourist trap (overpriced fruit cups, generic juice stands). Walk past to the seafood counters, the mushroom stalls, and El Quim de la Boqueria (counter seating, arrive before 12:30pm). This is where chefs and locals actually shop. Closed Sundays.",
                  t: "Must see · Morning · 1 hr",
                },
                {
                  n: "Montserrat Monastery",
                  e: "Free (transport EUR 23 return)",
                  d: "Benedictine monastery at 1,200m in jagged mountain formations that look like giant stone fingers. The Black Madonna statue, the boys' choir (1pm daily), and the Sant Joan hike with views to the Pyrenees and the Mediterranean make this the best day trip from Barcelona. Take the R5 from Placa Espanya. Budget a full day.",
                  t: "Day trip · Full day",
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
            title="Barcelona — Architecture, Coast &amp; Culture"
            subtitle="Gaudi's masterpieces, medieval streets, and a Mediterranean coastline that stretches the length of the city."
            spots={[
              {
                name: "Sagrada Familia Interior",
                query: "sagrada familia barcelona interior stained glass light columns",
                desc: "Gaudi's unfinished masterpiece — the morning light through the east stained glass turns the forest of columns into a cathedral of colour.",
              },
              {
                name: "Park Guell Mosaic Terrace",
                query: "park guell barcelona mosaic bench gaudi terrace city panoramic",
                desc: "The undulating mosaic bench with panoramic views over the city to the sea — Gaudi's most joyful public space.",
              },
              {
                name: "Gothic Quarter at Dawn",
                query: "barcelona gothic quarter narrow medieval street morning light",
                desc: "Medieval streets built on Roman foundations. Best before 9am when the alleys are empty and the morning light cuts through.",
              },
              {
                name: "Barceloneta Beach",
                query: "barceloneta beach barcelona sunset mediterranean sea people",
                desc: "Barcelona's main beach — best in late afternoon when day-trippers leave and the sunset light hits the waterfront.",
              },
              {
                name: "Montserrat Monastery",
                query: "montserrat monastery mountain barcelona catalonia jagged rock",
                desc: "Jagged mountain monastery 1 hour from Barcelona. The boys' choir, the Black Madonna, and hikes with Pyrenean views.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Barcelona is mid-range by western European standards. Budget travellers can manage on EUR 50&ndash;90/day ($54&ndash;97), mid-range on EUR 100&ndash;180/day ($108&ndash;194), and luxury from EUR 250+/day ($270+). All prices in EUR and USD at ~1 EUR = $1.08.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (4 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4N)", "EUR 100–200 ($108–216)", "EUR 320–560 ($346–605)", "EUR 800–2,000+ ($864–2,160+)"],
                    ["🍽 Food & Drinks", "EUR 50–90 ($54–97)", "EUR 120–200 ($130–216)", "EUR 400–800 ($432–864)"],
                    ["🚇 Transport", "EUR 15–30 ($16–32)", "EUR 30–60 ($32–65)", "EUR 100–300 ($108–324)"],
                    ["🎯 Activities & Entry", "EUR 40–80 ($43–86)", "EUR 100–200 ($108–216)", "EUR 500–1,000 ($540–1,080)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  {[
                    ["TOTAL (per person)", "EUR 200–360 ($216–389)", "EUR 640–1,200 ($691–1,296)", "EUR 2,200–4,500+ ($2,376–4,860+)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-ink">
                      <td className="p-3.5 text-xs text-white font-semibold">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (EUR 50–90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget hotels (EUR 25–50/night), eat menu del dia lunches (EUR 10–18 for 3 courses with drink), use the T-Casual card for transport, and visit free sites on Saturdays and first Sundays of the month.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (EUR 100–180/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels in Eixample or El Born (EUR 80–140/night), a mix of menu del dia and evening tapas crawls, all the major Gaudi sites, and a Montserrat day trip. The sweet spot for comfort and authentic Barcelona experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (EUR 250+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels on Passeig de Gracia (EUR 200–500+/night), private guided tours of Gaudi sites, Michelin-star dining at Disfrutar or Lasarte, private sailing at sunset, and a Penedes wine region private tour.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Barcelona</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which neighbourhood to base yourself. Gothic Quarter for history and atmosphere. Eixample for modernist architecture and the best food scene. Barceloneta for beach access. Gracia for a local village feel away from tourist crowds. Most 4-day trips work best from Eixample or the Gothic Quarter.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Gothic Quarter (Barri Gotic)",
                  type: "Historic centre · Walking distance to everything",
                  price: "EUR 60–200/night ($65–216)",
                  badge: "Best location",
                  desc: "The medieval heart of Barcelona. Narrow streets, atmospheric plazas, and within walking distance of La Boqueria, La Rambla, Barceloneta, and the cathedral. Accommodation ranges from hostels to boutique hotels. The trade-off: streets can be noisy at night (especially near Placa Reial) and the area is heavily touristed during the day. Choose a street one block off La Rambla for the best balance.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Eixample",
                  type: "Modernist grid · Best food scene",
                  price: "EUR 80–250/night ($86–270)",
                  badge: "Mid-range pick",
                  desc: "The wide-grid neighbourhood designed by Cerda in the 1860s, home to Sagrada Familia, Casa Batllo, La Pedrera, and the best concentration of restaurants and tapas bars in the city. Walking distance to most attractions, excellent metro connections, and the architecture on every block is worth photographing. The best overall neighbourhood for a first visit.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Barceloneta",
                  type: "Beach neighbourhood · Seafood",
                  price: "EUR 50–150/night ($54–162)",
                  badge: "Beach lovers",
                  desc: "Former fishing village turned beach neighbourhood. The best location for beach access, seafood restaurants, and morning runs along the waterfront promenade. 15-minute walk to the Gothic Quarter. Accommodation is generally smaller apartments and budget hotels. The neighbourhood has a grittier, more local feel than the polished centre — which is part of the appeal.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Gracia",
                  type: "Local village feel · Independent shops",
                  price: "EUR 50–120/night ($54–130)",
                  badge: "Best budget area",
                  desc: "A formerly independent village swallowed by the city, Gracia retains a distinct local character with independent shops, quiet plazas, and the best cafe culture in Barcelona. Close to Park Guell and Casa Vicens. Further from the waterfront but the metro connects you in 10–15 minutes. The Festa Major de Gracia in August transforms the neighbourhood into a decorated street festival.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Barcelona</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important food rule in Barcelona: never eat on La Rambla. Walk one block either side and the quality doubles while prices halve. Barcelona runs on Spanish time — lunch is 2&ndash;3:30pm, dinner is 9&ndash;11pm. The menu del dia (weekday set lunch, EUR 10&ndash;18 for 3 courses with drink) is how the city eats affordably.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "El Quim de la Boqueria",
                  t: "Market counter · La Boqueria",
                  d: "The legendary counter inside La Boqueria market — fried eggs with baby squid, seared cuttlefish with white beans, and some of the best simple cooking in Barcelona. Counter seating only, cash preferred. Arrive before 12:30pm or face a long queue. EUR 12–25 for a full meal. This is the quintessential Barcelona eating experience.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Cerveceria Catalana",
                  t: "Tapas bar · Eixample",
                  d: "One of Barcelona's best-known tapas bars for good reason. The montaditos (small topped bread slices), patatas bravas, and rotating daily specials are consistently excellent. No reservations — queue from 8pm for dinner or 1pm for lunch. EUR 20–35/person. The Eixample location means you can combine it with Casa Batllo or La Pedrera visits.",
                  b: "Best tapas",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Carrer Blai Pintxos Strip",
                  t: "Pintxos street · Poble Sec",
                  d: "An entire street of pintxos bars in Poble Sec where EUR 1 tapas are served on toothpicks — pick what you want, eat it, and they count the sticks at the end. Walk the length of the street, eat at 3–4 different bars, and your total will be EUR 10–18 for a full dinner with vermouth. The best budget dinner experience in Barcelona.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Can Paixano (La Xampanyeria)",
                  t: "Cava bar · Barceloneta",
                  d: "Standing-room-only cava bar where house cava is EUR 1.20 a glass and plates of cured meats and cheese are EUR 4–8. Loud, packed, and completely authentic. This is where local workers come for a quick glass and a plate after work. The total damage for a full session: EUR 10–18/person. Cash preferred.",
                  b: "Iconic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Paella at Can Sole or Barceloneta restaurants",
                  t: "Seafood rice · Barceloneta",
                  d: "Barcelona does seafood rice (paella, arroz negro, fideua) exceptionally well but only in the right places. Can Sole has served it since 1903. Order the arroz negro (black squid ink rice) or fideua (noodle paella). EUR 18–30/person for a rice dish to share. Avoid any restaurant that advertises paella on a sandwich board outside — it is pre-made tourist food.",
                  b: "Best paella",
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
            destination="Barcelona"
            hotels={[
              {
                name: "Generator Barcelona",
                type: "Design Hostel · Gracia",
                price: "From EUR 28/night",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/es/generator-barcelona.html?aid=2820480",
              },
              {
                name: "Hotel Neri",
                type: "Boutique · Gothic Quarter",
                price: "From EUR 180/night",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/es/neri.html?aid=2820480",
              },
              {
                name: "Mandarin Oriental Barcelona",
                type: "Ultra-Luxury · Passeig de Gracia",
                price: "From EUR 450/night",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/es/mandarin-oriental-barcelona.html?aid=2820480",
              },
              {
                name: "Casa Camper",
                type: "Design Hotel · El Raval",
                price: "From EUR 130/night",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/es/casacamper.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Sagrada Familia Skip-the-Line",
                duration: "1.5 hours",
                price: "From EUR 26",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=sagrada+familia&partner_id=PSZA5UI",
              },
              {
                name: "Montserrat Half-Day Tour",
                duration: "5 hours",
                price: "From EUR 50",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=montserrat+barcelona&partner_id=PSZA5UI",
              },
              {
                name: "Gothic Quarter Food Tour",
                duration: "3 hours",
                price: "From EUR 65",
                badge: "Foodie",
                url: "https://www.getyourguide.com/s/?q=barcelona+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Sunset Sailing Experience",
                duration: "2 hours",
                price: "From EUR 45",
                url: "https://www.getyourguide.com/s/?q=barcelona+sunset+sailing&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⛪",
                  title: "Not booking Sagrada Familia ahead",
                  desc: "2–3 hour walk-up queue vs walk-straight-in with a EUR 26 timed ticket. Book at sagradafamilia.org 2 months ahead in peak season. This is non-negotiable. Do not use third-party reseller sites that charge EUR 36–45 for the same ticket.",
                },
                {
                  icon: "🍽",
                  title: "Eating on La Rambla",
                  desc: "Tourist-trap restaurants with bad food at double the price. Walk one block to either side — into the Gothic Quarter or El Raval — and the quality doubles while prices halve. This rule also applies to the restaurants directly around Sagrada Familia.",
                },
                {
                  icon: "💰",
                  title: "Skipping the menu del dia",
                  desc: "Nearly every neighbourhood restaurant offers a 3-course weekday lunch with drink for EUR 10–18. This is how Barcelona eats affordably. Available Monday–Friday roughly 1–4pm. Ask for 'menu del dia' — it won't always be on the English menu.",
                },
                {
                  icon: "🎫",
                  title: "Visiting Park Guell without a ticket",
                  desc: "The monumental zone (the famous part with the mosaic bench, dragon staircase, and Gaudi features) requires a EUR 10 timed ticket. Without it you see the park but miss everything you came for. Book online — morning slots sell out fast.",
                },
                {
                  icon: "⚠️",
                  title: "Ignoring pickpockets",
                  desc: "La Rambla, Metro L3, La Boqueria entrance, Sagrada Familia queue, and crowded beach areas are hotspots. Cross-body bag with zip, phone in front pocket, passport at hotel. Barcelona pickpocketing is non-violent but very skilled — you won't feel a thing.",
                },
                {
                  icon: "⏰",
                  title: "Eating dinner at 7pm",
                  desc: "You'll be eating alone in an empty restaurant. Locals eat dinner at 9:30–10:30pm. Tapas bars start filling at 8:30pm. Adjust your clock — lunch at 2pm, dinner at 9pm. The city runs on Spanish time and fighting it means missing the atmosphere entirely.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Barcelona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "T-Casual is essential",
                  desc: "10 rides for EUR 11.35 on metro, bus, and tram (Zone 1). Each ride is EUR 1.14 vs EUR 2.40 for a single ticket. Covers all tourist areas. Buy at any metro station vending machine. One card per person — it is not sharable since 2020.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌟",
                  title: "Bunkers del Carmel at sunset",
                  desc: "Free. The best panoramic view in Barcelona and it is not in most guidebooks. Spanish Civil War anti-aircraft bunkers on a hilltop overlooking the entire city, mountains to sea. Locals bring wine and snacks. Metro Alfons X, 15-minute uphill walk. Go for sunset.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥂",
                  title: "Vermouth hour",
                  desc: "Saturday and Sunday 12–2pm is 'la hora del vermut' in Barcelona. Vermouth + olives + chips at any traditional bar for EUR 3–5. This is a deeply local ritual — join the crowds at a neighbourhood bar in Poble Sec, Gracia, or Barceloneta. It is the most Barcelona thing you can do.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍽",
                  title: "Carrer Blai for EUR 1 pintxos",
                  desc: "Poble Sec's pintxos street. EUR 1 per toothpick tapas. Walk the strip, eat at 3–4 places, and your dinner is EUR 10–18. The best budget evening out in Barcelona. Combine with vermouth at a nearby bar for the full Poble Sec experience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏖️",
                  title: "Better beaches exist",
                  desc: "Barceloneta is the most famous but most crowded. Bogatell (5 min further north) is cleaner and calmer. Mar Bella (10 min further) is the locals' beach. Ocata (30 min by train) is a proper Mediterranean beach town with a fraction of the crowds.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "📅",
                  title: "Free museum days",
                  desc: "Many museums are free on the first Sunday of the month and on Saturdays after 3pm. MNAC, Picasso Museum, City History Museum, and the Maritime Museum all participate. Plan your museum days around these windows and save EUR 30–50.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Barcelona" />

          {/* Combine With */}
          <CombineWith currentSlug="barcelona-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Barcelona?",
                  a: "4 days is ideal. Covers Sagrada Familia, Park Guell, Gothic Quarter, Barceloneta, Montjuic, and either a Montserrat day trip or more Gaudi houses. 3 days is possible but tight — you would need to skip either Montjuic or the day trip. 6 days lets you add the Penedes wine region and a day at a Costa Brava beach.",
                },
                {
                  q: "How much does a 4-day trip to Barcelona cost?",
                  a: "Budget solo: EUR 200–360 ($216–389) including accommodation, food, transport and activities. Mid-range: EUR 640–1,200 ($691–1,296). Luxury: EUR 2,200–4,500+ ($2,376–4,860+). The menu del dia (weekday 3-course lunch for EUR 10–18) is the single best way to eat well on a budget.",
                },
                {
                  q: "Do I need a visa for Spain?",
                  a: "Indian passport holders need a Schengen visa (EUR 80 fee, apply 2–3 months ahead at BLS/VFS). US, UK, AU, CA citizens visit visa-free for 90 days within any 180-day period. Spain VFS appointments fill fast in peak season — apply as early as possible.",
                },
                {
                  q: "What is the best time to visit Barcelona?",
                  a: "April–June and September–October are ideal — warm weather, manageable crowds, and good prices. July–August is hot (35°C+) and at maximum tourist capacity. November–March is mild and cheapest with the smallest crowds, though beach weather is limited.",
                },
                {
                  q: "Is Barcelona safe?",
                  a: "Generally very safe. The main concern is pickpocketing, not violent crime. La Rambla, Metro L3, tourist queues, and crowded beach areas are hotspots. Use a cross-body bag with zip, keep phone in front pocket, and leave passport at the hotel. Beyond pickpocketing, Barcelona is a safe city to walk at all hours.",
                },
                {
                  q: "Should I book Sagrada Familia in advance?",
                  a: "Non-negotiable. Book at sagradafamilia.org 2 months ahead for peak season (June–September), 2–3 weeks for shoulder season. EUR 26 for timed entry vs a 2–3 hour walk-up queue. The Nativity facade tower add-on (EUR 36 total) is worth it. Do not use third-party sites — they charge 30–40% more for the same ticket.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Barcelona trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-barcelona", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/barcelona-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-barcelona", label: "How to get there", icon: "✈️" },
                { href: "/blog/barcelona-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="barcelona-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madrid &mdash; 3 Day Guide", href: "/blog/madrid-3-days" },
                { label: "Seville &mdash; 3 Day Guide", href: "/blog/seville-3-days" },
                { label: "Paris &mdash; 5 Day Guide", href: "/blog/paris-5-days" },
                { label: "Browse All Itineraries", href: "/blog" },
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
