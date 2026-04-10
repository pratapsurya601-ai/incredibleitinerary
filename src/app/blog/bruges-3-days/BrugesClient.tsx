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
const BRUGES_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Bruges Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "gethere",   emoji: "🚂",  label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks", emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Bruges 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Bruges in 3 Days — canals, Belfry and the underground beer pipeline&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bruges-3-days"
        imageUrl="https://images.unsplash.com/photo-1559181567-c3190ca9be31?w=1200&q=80"
        description="Bruges in 3 Days: Belfry, canal boat, Groeningemuseum Flemish masters, Halve Maan underground beer pipeline, Begijnhof and Ghent day trip — complete travel guide with euro costs."
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
export default function BrugesClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BRUGES_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bruges" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bruges belgium medieval canal houses belfry chocolate"
            fallback="https://images.unsplash.com/photo-1559181567-c3190ca9be31?w=1600&q=80"
            alt="Bruges medieval canal with step-gabled guild houses reflected in still water, Belgium"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bruges 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bruges in 3 Days:
                <em className="italic text-amber-300"> Canals, Belfry &amp; the Underground Beer Pipeline</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The best-preserved medieval city in northern Europe — 900-year-old guild houses, canals from the 14th century, Flemish Primitive masterpieces, and a brewery that drilled 3.2km underground to move its beer. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏛️ West Flanders, Belgium</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💶 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bruges is what northern Europe looked like before the Industrial Revolution rewrote every city. The harbour silted up in 1490 and the city froze — which means you are walking through a medieval trading capital that was never demolished, never rebuilt, and never modernised into irrelevance.
            </p>
          </blockquote>

          {/* ── WHAT BRUGES ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bruges Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In the 14th century, Bruges was the richest city in northern Europe — the centre of the Hanseatic wool trade, home to the first stock exchange in the world, and a city where Flemish painters were producing some of the most technically advanced art ever made. Jan van Eyck lived and worked here. Hans Memling had a workshop here. The guild houses on the Markt were funded by merchants whose wealth exceeded most European kings.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Then the Zwin estuary silted up in 1490. Ships could no longer reach the city. Trade moved to Antwerp, then Amsterdam. Bruges became a backwater almost overnight, and because there was no money to rebuild, the medieval city survived intact. When tourism began in the 19th century, travellers arrived to find a city that had been effectively preserved for 400 years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Today the historic centre is a UNESCO World Heritage Site and one of the most visited cities in Europe. The crowds are real — in July and August the Markt Square is genuinely impassable by midday. But visit in spring, September, or the Christmas market season, and Bruges remains extraordinary: a medieval city where the canals, the guild houses, the Belfry, and the chocolate culture are all exactly as advertised.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From Brussels Airport" value="1h 40m" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="UNESCO Listed" value="Since 2000" />
              <StatCard icon="💶" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bruges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌷",
                  t: "Spring — Best Season",
                  d: "Tulip season in April brings flowers lining the canal banks and window boxes on every guild house. May and June give long days, mild temperatures (14–20°C), and the lowest crowds before the summer peak. The Markt is manageable at this time of year and the canal boat queues rarely exceed 15 minutes.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🌞",
                  t: "Summer — Crowded but Lively",
                  d: "Bruges receives 8 million visitors a year into a city of 20,000. In July and August the Markt is impassable by 11am, canal boat queues stretch 45 minutes, and accommodation prices double. If you must visit in summer, stay until 8pm when most day-trippers leave — the city becomes a different place after dark.",
                  b: "Arrive early or late",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Dec",
                  i: "🎄",
                  t: "Christmas Market — Magical but Busy",
                  d: "The Markt and Burg squares host one of Europe&apos;s most atmospheric Christmas markets from late November through December. Ice skating rink on the Markt, mulled wine, roasted chestnuts, and the Belfry lit at night. Very crowded on weekends — visit on a Tuesday or Wednesday morning for the best experience.",
                  b: "Atmospheric",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  s: "Jan–Mar",
                  i: "❄️",
                  t: "Winter — Quiet and Atmospheric",
                  d: "January and February are the quietest months. Temperatures 3–8°C — cold but rarely icy. Canal mist in the mornings, almost no tourist crowds, and the full medieval atmosphere of the city without the summer tour groups. Many restaurants and chocolate shops are open year-round. Worth it for the atmosphere alone.",
                  b: "For atmosphere seekers",
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
          <section id="gethere" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Bruges</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bruges has its own railway station (Brugge) just outside the historic ring canal, a 20-minute walk from the Markt. Trains connect directly from Brussels Airport and Brussels Midi (Eurostar terminal). Do not book hotels near the station — stay inside the ring canal.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "From Brussels Airport (recommended)",
                  d: "Brussels Airport (Zaventem) → Bruges: 1 hour 40 minutes with one change at Brussels Midi or Brussels Central. Cost €15–20. Trains run every 30–60 minutes throughout the day. The change at Brussels Midi takes 5–10 minutes on the same platform. No high-speed train needed — standard intercity service is fast and comfortable.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "From London via Eurostar",
                  d: "London St Pancras → Brussels Midi: 2 hours by Eurostar (from £59 one way). From Brussels Midi, direct intercity train to Bruges takes 55 minutes (€15). Total journey: under 3 hours from central London to central Bruges. The most comfortable way to arrive from the UK — no airport security, no checked bags for short trips.",
                  b: "From London",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From India via Brussels",
                  d: "Flights from major Indian cities (Delhi, Mumbai, Bangalore) to Brussels typically route via Dubai, Doha, or Frankfurt. Flying time 9–13 hours depending on layover. From Brussels Airport, take the train to Bruges (1h 40m). Budget airlines sometimes fly into Brussels Charleroi (CRL) — allow 90 minutes for the bus transfer to Brussels Midi before the Bruges train.",
                  b: "Via Brussels",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "From Amsterdam or Paris",
                  d: "Amsterdam → Bruges: 3 hours by train via Brussels (€25–50). Paris Nord → Bruges: 2.5 hours by train via Brussels (€30–60, book ahead for best prices on SNCB/Thalys). Both are excellent options for combining Bruges with neighbouring cities.",
                  b: "From neighbouring cities",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Bruges Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to hit the most popular sites before the crowds arrive and to leave room for spontaneous chocolate shop detours.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Markt Square · Belfry · Canal Boat · Burg Square"
                cost="€50–75 total"
                items={[
                  "09:00 — Markt Square (free). The central square is the heart of medieval Bruges — three sides lined with Flemish Gothic guild houses, the 13th-century Belfry rising 83 metres on the fourth. Morning is the best time: tourist coaches start arriving at 10am and the square becomes impassable by noon. Horse-drawn carriages circle continuously and the Provincial Court at the west end is a genuine showstopper.",
                  "09:30 — Belfry of Bruges (€14, book ahead at museabrugge.be). Climb 366 steps to the top of the carillon tower for views over the rooflines of Bruges stretching in every direction. On clear days you can see the sea at Zeebrugge. The 47-bell carillon plays automatically on the quarter-hour; live carilloneur concerts run on Wednesday evenings in summer. Entry slots are limited — book at least 2 days ahead in season.",
                  "11:30 — Burg Square (free, 5 minutes from Markt). The adjacent square holds the Basilica of the Holy Blood (free entry, one of the most important reliquaries in Christendom), the Gothic City Hall (€5 for the historic interior with its magnificent wooden vault), and the Renaissance Palace of the Liberty of Bruges.",
                  "13:00 — Lunch at a local tearoom away from the Markt: soup, bread, and local cheese for €8–12. Restaurants directly on the Markt Square charge €22–28 for meals that cost €14 two streets away.",
                  "14:30 — Canal boat tour (€10.50, 30 minutes). The five jetty points are near Rozenhoedkaai — the most photographed canal bend in Belgium. Water-level views of the step-gabled buildings and low medieval bridges are genuinely beautiful and impossible to replicate on foot. Queues can reach 45 minutes in peak summer — arrive before 10am or after 5pm.",
                  "16:30 — Chocolate shop crawl (free to browse, tastings €2–6). Seek out Dumon Chocolatier on Sint-Katelijnestraat and The Old Chocolate House on Mariastraat. Real Belgian pralines from artisan chocolatiers bear no resemblance to the bulk-packaged Godiva sold near the square.",
                  "19:00 — Dinner at Den Dyver on Dijver for Flemish beef stew (carbonnade flamande) cooked in Brugse Zot beer, €18–22. The canal-facing terrace is one of the best tables in Bruges at golden hour.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Flemish Masters · Begijnhof · Minnewater · Halve Maan Brewery"
                cost="€55–80 total"
                items={[
                  "09:30 — Groeningemuseum (€14). The finest collection of Flemish Primitive paintings in the world — Jan van Eyck&apos;s Madonna with Canon van der Paele (1436), Hans Memling&apos;s meticulous portraits, Gerard David&apos;s Judgement of Cambyses. These 14th–16th century paintings are the reason Belgium carries cultural weight far beyond beer and chocolate. Small enough to cover properly in 2 hours.",
                  "12:00 — Begijnhof (free, 10-minute walk through Minnewater park). A 13th-century enclosed community of Beguines — religious laywomen who lived communally without taking convent vows. Now occupied by Benedictine sisters, the whitewashed buildings around the central green are extraordinarily peaceful. Quiet is expected and enforced.",
                  "13:00 — Minnewater Lake (free). The small lake and park south of the city centre is Bruges at its most storybook. Swans glide on the water, willows trail their branches, and the 14th-century Powder Tower anchors the backdrop. Bring a picnic from a nearby bakery.",
                  "14:30 — Windmills walk (free). The eastern perimeter of the city along Kruisvest has four restored windmills from the 18th–19th centuries. Two are open to climb in summer (€5 each). The moat path takes 45 minutes and gives a full sense of Bruges&apos;s medieval defensive ring.",
                  "16:00 — Halve Maan Brewery tour (€16, includes one beer). Operating since 1564 in the same building on Walplein. The highlight: in 2016, unable to drive beer trucks through the narrow medieval streets, the brewery crowdfunded €300,000 and drilled a 3.2km stainless steel pipeline under homes, gardens, and canals to their bottling plant on the ring road. It carries 6,000 litres per hour. Ask to see the pipeline entry point in the courtyard.",
                  "19:00 — Belgian beer tasting at De Garre (off Breidelstraat). This hidden bar serves only its house tripel — 9% strength, €6 per glass, with a strict limit of 3 glasses per person per visit. One of the best single beers in Belgium, served only here. Follow with dinner at In&apos;t Nieuwe Museum (Hooistraat) for carbonnade flamande at €16–20.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ghent Half-Day · Graslei Waterfront · Ghent Altarpiece"
                cost="€45–70 total including transport"
                items={[
                  "08:30 — Train to Ghent (30 minutes, €10 each way from Bruges station, trains every 30 minutes). Ghent has the same medieval canals and guild houses as Bruges with 90% fewer visitors on a summer afternoon. A morning train gets you there before the day-trippers from Brussels arrive.",
                  "09:30 — Gravensteen Castle (€12). A 12th-century Flemish castle of the Counts of Ghent, still fully intact, rising straight out of the city centre. The rooftop gives views across the entire medieval skyline — the castle feels genuinely imposing in a way that most &apos;castle museums&apos; do not.",
                  "11:00 — Ghent Altarpiece at St Bavo&apos;s Cathedral (€12). Jan van Eyck&apos;s Adoration of the Mystic Lamb (1432) is considered the most important painting in the history of northern European art. Stolen by Napoleon, confiscated by Prussia, two panels stolen in 1934 and not fully recovered until 2010. Standing in front of it is genuinely affecting.",
                  "13:00 — Graslei waterfront (free). The most beautiful stretch of medieval waterfront in Belgium — guild houses lining the Leie river with the Korenlei opposite. Find a bench and eat a picnic or sit at a canal-side restaurant for €12–16.",
                  "15:00 — Walk through Ghent&apos;s Patershol neighbourhood: cobblestoned streets where locals actually eat, small bars serving Gentse Stoverij (Ghent beef stew) and witloof (Belgian endive) dishes. Completely different energy from tourist Bruges.",
                  "17:00 — Train back to Bruges. Evening walk along the Rozenhoedkaai at sunset — this canal bend is at its most photographic in late afternoon golden light. It crowds with photographers but is still worth the 10-minute walk from the station.",
                  "19:30 — Final dinner in Bruges: moules frites at a brasserie near the canal for €18–24. Waffles from a proper waffle shop like Chez Albert on Sint-Katelijnestraat for dessert — fresh Belgian waffles with speculoos cream bear no resemblance to the packaged street-food versions sold on the tourist trail.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bruges" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Bruges Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Most major attractions cluster within a 15-minute walk of the Markt Square — the entire historic centre is 2km across and fully walkable.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Belfry of Bruges",
                  e: "€14 — book online",
                  d: "The 83-metre carillon tower at the south end of the Markt, 366 steps to the top, views across the entire city and coast. Entry slots are limited and sell out by midday in peak season (May–September). Book at museabrugge.be at least 2 days ahead. The 47-bell carillon rings on the quarter-hour.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Rozenhoedkaai Canal Bend",
                  e: "Free",
                  d: "The most photographed canal corner in Belgium — Rozenhoedkaai (Quay of the Rosary) where the Dijver and Groenerei canals meet. Medieval guild houses reflected in still water, the Belfry visible above the roofline. At its best in early morning or late afternoon golden light. Two minutes from the Markt.",
                  t: "Must photograph · 20 mins",
                },
                {
                  n: "Groeningemuseum",
                  e: "€14",
                  d: "The world&apos;s finest collection of Flemish Primitive paintings. Van Eyck&apos;s Madonna with Canon van der Paele (1436), Hans Memling portraits, Gerard David paintings. These are the works that defined northern European art for two centuries. Small museum — 2 hours is enough to cover it properly.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Basilica of the Holy Blood",
                  e: "Free (treasury €2.50)",
                  d: "A two-chapel basilica in the Burg Square, the lower chapel (12th century) one of the best-preserved Romanesque church interiors in Belgium. The upper chapel houses a crystal vial claimed to contain a few drops of Christ&apos;s blood — brought from Jerusalem in 1150. Venerated every Friday in a short ceremony.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Begijnhof",
                  e: "Free",
                  d: "A 13th-century enclosed community of Beguines south of the city centre, now occupied by Benedictine sisters. Whitewashed buildings around a central green, entirely peaceful. Silence is expected inside the walls. One of the most genuinely serene places in Belgium.",
                  t: "Must visit · 45 mins",
                },
                {
                  n: "Halve Maan Brewery",
                  e: "€16 (tour + one beer)",
                  d: "The last family brewery operating within Bruges&apos;s historic walls, producing Brugse Zot and Straffe Hendrik since 1564. The 2016 underground beer pipeline is the most extraordinary piece of infrastructure in Belgian brewing — drilled 3.2km under the city to avoid truck deliveries through medieval streets.",
                  t: "Must do · 1 hr",
                },
                {
                  n: "Minnewater Lake",
                  e: "Free",
                  d: "The &apos;Lake of Love&apos; — a small lake and park south of the city centre with swans, willow trees, and the 14th-century Powder Tower. Bruges at its most fairy-tale. 10 minutes walk from the Begijnhof.",
                  t: "Scenic · 30 mins",
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
            title="Bruges — Canals, Guild Houses &amp; Medieval Flanders"
            subtitle="The best-preserved medieval trading city in northern Europe."
            spots={[
              {
                name: "Rozenhoedkaai Canal Bend",
                query: "bruges belgium canal rozenhoedkaai medieval guild houses reflection",
                desc: "The most photographed canal bend in Belgium — Rozenhoedkaai where two waterways meet beneath the Belfry.",
              },
              {
                name: "Belfry of Bruges",
                query: "bruges belfry medieval tower markt square belgium",
                desc: "The 83-metre carillon tower that has rung its bells over the Markt Square for six centuries.",
              },
              {
                name: "Begijnhof Bruges",
                query: "bruges begijnhof whitewashed buildings courtyard belgium peaceful",
                desc: "The 13th-century Begijnhof — whitewashed buildings around a central green, occupied by Benedictine sisters.",
              },
              {
                name: "Bruges Chocolate",
                query: "bruges belgium artisan chocolate pralines chocolatier shop",
                desc: "Artisan pralines at one of Bruges&apos;s independent chocolatiers — the real Belgian chocolate scene is nothing like Godiva.",
              },
              {
                name: "Minnewater Lake",
                query: "bruges minnewater lake swans powder tower belgium medieval",
                desc: "The &apos;Lake of Love&apos; — swans, willows, and the 14th-century Powder Tower at the south edge of the historic centre.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bruges is a mid-range European destination. Staying and eating outside the main tourist trail drops costs significantly — the price difference between a restaurant on the Markt and one two streets away is often 40%.
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
                    ["🏨 Accommodation", "€20–40 (hostel)", "€90–170 (3-star hotel)", "€250–550 (De Tuilerieen)"],
                    ["🍽️ Food (3 days)", "€15–25 (brasseries + bakeries)", "€45–80 (brasseries + 1 Michelin)", "€120–350 (Hertog Jan)"],
                    ["🚂 Transport", "€5–12 (train day trips)", "€10–25 (train + boat)", "€40–150 (private car)"],
                    ["🏛️ Activities", "€15–25 (Belfry + museum)", "€30–60 (guided + brewery)", "€100–300 (private tours)"],
                    ["🍫 Chocolate + extras", "€5–15", "€15–30", "€30–80"],
                    ["TOTAL per day", "€55–102", "€175–335", "€510–1,350"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–102/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm or budget guesthouse (€20–40/night), eat at local tearooms and brasseries away from the Markt (€8–15 per meal), walk everywhere — Bruges is only 2km across. The Belfry and one museum per day is the right activity level for this budget.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€175–335/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in a canal-area hotel inside the ring canal (€90–170/night), dine at proper brasseries and try one Michelin lunch, take a guided walking tour, and do the Halve Maan brewery with the tasting experience. This is the sweet spot for Bruges without the tourist-trap pricing.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bruges</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Always stay inside the ring canal — the historic centre is the entire point of Bruges and walking everywhere is part of the experience. Hotels near the station are cheaper but cost you in lost time and atmosphere.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Canal-Area Hotels (Markt Neighbourhood)",
                  type: "Mid-range to luxury · Historic centre",
                  price: "From €130/night",
                  badge: "Best location",
                  desc: "Hotels on or near the Dijver canal and within 5 minutes of the Markt offer the full Bruges medieval atmosphere. Hotel Relais Bourgondisch Cruyce (a 15th-century building directly on the canal) and Hotel Navarra are the benchmark. Canal-facing rooms are worth the premium — waking up to the canal is the quintessential Bruges experience.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Bruges B&Bs (Sint-Anna Quarter)",
                  type: "Character stays · Quieter side streets",
                  price: "From €70/night",
                  badge: "Best atmosphere",
                  desc: "The Sint-Anna quarter northeast of the Markt has quieter streets, fewer tourists after 6pm, and a number of well-run B&Bs in converted townhouses. Still inside the ring canal and a 10-minute walk to all major sights. Better value than the canal-front hotels with more character than the generic 3-star options.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Budget Hostel Near Station",
                  type: "Hostel · Near Bruges station",
                  price: "From €20/night (dorm)",
                  badge: "Best budget",
                  desc: "A handful of hostels cluster near Bruges station, including Charlie Rockets and the official youth hostel (Europa Jeugdherberg). The station is a 20-minute walk from the Markt — manageable but you will do it multiple times per day. Good backpacker community and the cheapest beds in Bruges.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Guesthouses Outside the Canal Ring",
                  type: "Budget-mid · Residential Bruges",
                  price: "From €50/night",
                  badge: "Best value",
                  desc: "Guesthouses in the residential streets just outside the ring canal (Sint-Pieterskaai area) offer better prices with a 15–25 minute walk to the Markt. More local atmosphere — you eat breakfast in a neighbourhood bakery rather than a tourist hotel. Good option for longer stays or if you want to see Bruges as a city rather than a theme park.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bruges</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bruges has a serious food culture built around Flemish stew, North Sea mussels, Belgian beer cuisine, and artisan chocolate. The key rule: eat one street back from the Markt and immediately halve your bill.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Den Dyver (Dijver 5)",
                  t: "Belgian beer cuisine · Canal-side",
                  d: "One of the best tables in Bruges for traditional Flemish cooking — every dish prepared with Belgian beer. Carbonnade flamande (beef stew in Brugse Zot) is the signature at €18–22. The canal-facing terrace at golden hour is exceptional. Book ahead for dinner in season.",
                  b: "Best Flemish cooking",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Chez Albert (Sint-Katelijnestraat)",
                  t: "Waffle shop · Traditional Belgian",
                  d: "The best Brussels-style waffles in Bruges — made fresh to order, served with real Belgian toppings (speculoos cream, strawberries, dark chocolate). A proper Liège waffle here bears no resemblance to the pre-made tourist versions. Queue is normal and worth it. €4–7.",
                  b: "Best waffles",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "De Garre (off Breidelstraat)",
                  t: "Hidden beer cafe · Belgian beer",
                  d: "The most important beer experience in Bruges. A narrow alley leads to a 14th-century building serving only its house tripel — 9% strength, brewed exclusively for this bar, served with a slice of cheese. Limit of 3 glasses per person enforced. €6 per glass. One of the finest single beers in Belgium.",
                  b: "Best beer",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Frites at a Frietkot",
                  t: "Street food · Cone of frites",
                  d: "Belgian frites are thick-cut, double-fried, and served in a paper cone with andalouse sauce (the correct choice — a thick mayo-tomato-pepper sauce). The frietkot near the Minnewater park or on Smedenstraat serves the real article for €3–5. The tourist-area versions at €7 are the same fries with a tourist markup.",
                  b: "Authentic Belgian",
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
            destination="Bruges Belgium"
            hotels={[
              {
                name: "Hotel Relais Bourgondisch Cruyce",
                type: "15th-century canal-front · Historic centre",
                price: "From €180/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/be/relais-bourgondisch-cruyce.html?aid=2820480",
              },
              {
                name: "Hotel De Tuilerieen",
                type: "15th-century mansion · Dijver canal",
                price: "From €250/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/be/de-tuilerieen.html?aid=2820480",
              },
              {
                name: "Hotel Navarra",
                type: "Historic townhouse · Sint-Jakobsstraat",
                price: "From €110/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/be/navarra-bruges.html?aid=2820480",
              },
              {
                name: "Charlie Rockets Hostel",
                type: "Hostel · Near Bruges station",
                price: "From €22/night (dorm)",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/be/charlie-rockets-bruges.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Bruges City Walking Tour",
                duration: "2.5 hrs",
                price: "From €15/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=Bruges+Belgium&partner_id=PSZA5UI",
              },
              {
                name: "Bruges Canal Boat Tour",
                duration: "30 mins",
                price: "From €10.50/person",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=Bruges+canal+boat&partner_id=PSZA5UI",
              },
              {
                name: "Belgian Chocolate Masterclass",
                duration: "2 hrs",
                price: "From €70/person",
                url: "https://www.getyourguide.com/s/?q=Bruges+chocolate+workshop&partner_id=PSZA5UI",
              },
              {
                name: "Bruges to Ghent Day Trip",
                duration: "Full day",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=Bruges+Ghent+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Bruges</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📅",
                  title: "Coming as a Day-Tripper in Summer",
                  desc: "Bruges receives 8 million visitors a year into a city of 20,000. Day-trippers from Brussels and Amsterdam flood in by 10am and leave by 5pm — which means the two most beautiful times in Bruges (early morning and evening) belong entirely to overnight guests. Staying one or two nights rather than day-tripping transforms the experience. The Markt at 6:30am and the Rozenhoedkaai at dusk are completely different places from the noon tourist peak.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at Restaurants on the Markt Square",
                  desc: "Restaurants with outdoor seating directly on the Markt Square charge €22–28 for moules frites that cost €14 two streets away. The location premium is real and unjustified. Have a coffee on the square once for the view, then eat every actual meal at Den Dyver, In&apos;t Nieuwe Museum, or any restaurant on the Dijver canal instead. The food is better and the prices are honest.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍫",
                  title: "Buying Godiva or Mass-Market Chocolate",
                  desc: "Godiva is owned by a Turkish conglomerate and its chocolate is mass-produced in factories. The real Belgian chocolate scene is the independent praline makers: Dumon Chocolatier, The Chocolate Line, Depla, Sweetness. A box of 10 pralines from a real Bruges chocolatier costs €8–12 and is incomparably better than anything sold near the tourist entrances. Look for shops where the display changes daily — that&apos;s freshness, not marketing.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗺️",
                  title: "Skipping Ghent",
                  desc: "Most visitors to Belgium see only Bruges. Ghent has the same medieval canals and guild houses, the most important painting in northern European art history (the Ghent Altarpiece), Gravensteen castle, and a living university city energy that Bruges entirely lacks. It is 30 minutes by train from Bruges station and one of the best half-day trips in Europe. If you have 3 days, use one of them to go to Ghent.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏨",
                  title: "Booking Hotels Near the Train Station",
                  desc: "Bruges station is a 20-minute walk from the historic centre. Hotels near the station save €30–50 per night but cost you that in taxi fares and lost time. The entire point of Bruges is the medieval atmosphere inside the ring canal — staying outside it is like booking a room in the suburbs of Venice. Stay inside the ring canal for the full experience.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bruges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "The Markt at 6:30am Is Completely Empty",
                  desc: "Bruges empties overnight. Tourist coaches start arriving at 10am. Between 6:30am and 8:30am, the Markt Square belongs to you — morning mist lifts off the cobblestones, the Belfry carillon rings the quarter-hour, and a bakery on the north side opens at 7am. This is the most beautiful 2 hours in Bruges and entirely free.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍺",
                  title: "The Beer Pipeline Is Extraordinary",
                  desc: "Unable to transport beer by truck through Bruges&apos;s medieval streets, the Halve Maan brewery crowdfunded €300,000 in 2016 and drilled a 3.2km stainless steel beer pipeline under homes, gardens, and canals to their bottling plant on the ring road. It carries 6,000 litres per hour. Tour the brewery and ask to see the pipeline entry point in the courtyard.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏙️",
                  title: "Ghent Has Everything Bruges Has — Plus Real City Life",
                  desc: "Ghent has the same medieval canals, the same guild houses, the same Flemish architecture — and 90% fewer visitors than Bruges on a July afternoon. It also has the most important painting in northern European art history and a castle that looks like an actual castle. The 30-minute train ride is one of the best investments you can make on a Bruges trip.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎫",
                  title: "Book the Belfry Well in Advance",
                  desc: "The Belfry has limited entry slots per hour and sells out by midday in peak season (May–September). Book online at museabrugge.be at least 2 days ahead — ideally a week ahead for summer weekends. Canal boat queues at the Rozenhoedkaai jetty peak at 30–45 minutes in summer — arrive before 10am or after 5pm for a short wait.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚶",
                  title: "Walk the Ring Canal Path",
                  desc: "The full ring canal path around the historic centre takes about 90 minutes to walk. It passes the four restored windmills on Kruisvest, the Dampoort, the green city gates, and quiet residential streets that no tour group visits. The best way to see Bruges at its non-tourist scale.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎄",
                  title: "Visit the Christmas Market on a Weekday",
                  desc: "The Bruges Christmas market (late November to December) is one of Europe&apos;s most atmospheric — ice rink on the Markt, mulled wine, an illuminated Belfry. On weekends it is completely overwhelmed. Visit on a Tuesday or Wednesday morning and you&apos;ll find stalls open, atmosphere intact, and room to actually see the guild houses above the market tents.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bruges" />

          {/* Combine With */}
          <CombineWith currentSlug="bruges-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Bruges or Ghent — which Belgian city should I visit?",
                  a: "Bruges is more immediately beautiful and compact — the canal views are genuinely extraordinary. But it is overwhelmingly touristy from June through August. Ghent is larger, has more cultural weight (the Ghent Altarpiece, university city energy), and feels like a real Belgian city where people actually live. For a 3-day trip, Bruges is the more rewarding choice as a base. For a week, split 2 nights in Bruges and 2 in Ghent.",
                },
                {
                  q: "Do Indians need a Schengen visa for Belgium?",
                  a: "Yes. Belgium is a Schengen member state and Indian passport holders need a short-stay Schengen C visa (€80, valid for up to 90 days in 180). Apply through VFS Global or the Belgian Embassy at least 6 weeks before your travel date. The visa covers all 27 Schengen countries, so if you are also visiting France, the Netherlands, or Germany, one application covers the entire trip.",
                },
                {
                  q: "What is the best way to get from Brussels Airport to Bruges?",
                  a: "Direct train from Brussels Airport (Zaventem) to Bruges takes approximately 1 hour 40 minutes with one change at Brussels Midi or Brussels Central. Cost is €15–20. Trains run every 30–60 minutes. Thalys high-speed trains do not serve Bruges — take the standard intercity service. Private transfer by car takes 90–120 minutes depending on traffic and costs €100–150.",
                },
                {
                  q: "How many days is enough for Bruges?",
                  a: "Two full days covers Bruges&apos;s historic centre thoroughly — the Belfry, canals, Groeningemuseum, Begijnhof, Halve Maan Brewery, and the main squares. Three days allows a day trip to Ghent or Brussels without rushing the city itself. One day from Brussels is possible as a day trip but you won&apos;t have time for the museums, the brewery, or any meaningful sense of the city at its quieter hours.",
                },
                {
                  q: "Is the Halve Maan Brewery tour worth it?",
                  a: "Yes, and specifically because of the underground beer pipeline story. The brewery has operated in the same building since 1564. The tour covers the brewing history, the Brugse Zot and Straffe Hendrik beer ranges, and the 2016 pipeline project — €300,000 crowdfunded from the public to drill 3.2km under homes and canals rather than deal with truck deliveries through medieval streets. The tour includes one beer (well-poured, at correct temperature). €16 and worth it.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bruges trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bruges", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bruges-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-bruges", label: "How to get there", icon: "✈️" },
                { href: "/blog/bruges-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="bruges-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Western Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris in 5 Days — Art, Food &amp; the Eiffel Tower", href: "/blog/paris-5-days" },
                { label: "Amsterdam in 4 Days — Canals &amp; Culture", href: "/blog/amsterdam-4-days" },
                { label: "Ghent in 3 Days — Altarpiece &amp; Castle", href: "/blog/ghent-3-days" },
                { label: "Dublin in 4 Days — Pubs &amp; History", href: "/blog/dublin-4-days" },
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
