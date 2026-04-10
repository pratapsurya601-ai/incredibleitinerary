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
const AMSTERDAM_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Amsterdam Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "\uD83C\uDFDB\uFE0F",  label: "Landmark Guide" },
  { id: "budget",      emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",         emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "mistakes",    emoji: "\u274C",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753",  label: "FAQ" },
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
          href: `mailto:?subject=Amsterdam 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Amsterdam in 4 Days — canals, museums and the complete itinerary&url=${pageUrl}`,
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
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/amsterdam-4-days"
        imageUrl="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80"
        description="Amsterdam in 4 Days: Anne Frank House, Rijksmuseum, Van Gogh Museum, Keukenhof tulips, canal cruises and cycling — complete travel guide with budget breakdown."
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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
export default function AmsterdamClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AMSTERDAM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Amsterdam" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="amsterdam canal houses netherlands tulips bikes golden hour"
            fallback="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1600&q=80"
            alt="Amsterdam canal with historic gabled houses and bicycles at golden hour Netherlands"
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
              <span className="text-white/70">Amsterdam 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Canals &amp; Golden Age Art
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Amsterdam in 4 Days:
                <em className="italic text-amber-300"> Anne Frank, Rijksmuseum &amp; Canal Life</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Anne Frank House at dawn, Rembrandt&apos;s Night Watch before the crowds, Van Gogh&apos;s Sunflowers in person, canal boats at golden hour, and cycling the Jordaan like a local. The complete guide with real timings, costs in EUR &amp; USD, and the booking secrets that make Amsterdam work.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDF3\uD83C\uDDF1"} Netherlands</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20AC"}60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Amsterdam at dawn &mdash; a lone cyclist gliding over a humpback bridge, the canal water still and mirror-flat, seventeenth-century gabled houses leaning forward over their own reflections &mdash; is one of the most quietly beautiful city scenes in Europe. Four days gives you the Anne Frank House (if you booked months ahead), Rembrandt&apos;s Night Watch, the Van Gogh Museum, the Jordaan&apos;s cobbled lanes, a windmill brewery, and enough time left over to simply rent a bicycle and become, for a few hours, an Amsterdammer.
            </p>
          </blockquote>

          {/* ── WHAT AMSTERDAM ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Amsterdam Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Amsterdam is a city of 165 canals, 1,500 bridges, and 800,000 bicycles &mdash; more bikes than people. The UNESCO-listed canal ring was dug during the Dutch Golden Age in the 17th century, when Amsterdam was the wealthiest city on earth and the centre of a global trading empire. The gabled canal houses you see leaning forward were built that way deliberately: hoisting hooks at the top pulled goods up to upper floors without hitting the facade.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Amsterdam is compact (you can cycle across the entire centre in 20 minutes), deeply walkable, and packed with world-class museums. But it is also one of Europe&apos;s most overtouristed cities &mdash; Anne Frank House tickets sell out months ahead, the Rijksmuseum gets 50 people deep around the Night Watch by 10:30am, and the Red Light District on a Friday night is a rugby scrum. The trick is timing: early mornings at museums, weekdays for major sights, and the Jordaan and De Pijp neighbourhoods for the Amsterdam that locals actually live in.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the sweet spot. You cover the three world-class museums (Rijksmuseum, Van Gogh, Stedelijk), the Anne Frank House, a canal cruise, the Jordaan neighbourhood, Amsterdam Noord&apos;s creative district, and &mdash; if you visit in April or May &mdash; Keukenhof&apos;s 7 million tulips. A day trip to Haarlem or Delft is also very achievable.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="AMS (Schiphol)" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr\u2013May, Jun\u2013Aug" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="Canals" value="165" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20AC60/day (~$65)"} />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Amsterdam</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013May",
                  i: "\uD83C\uDF37",
                  t: "Tulip Season \u2014 Best Overall",
                  d: "12\u201318\u00B0C. Keukenhof gardens in full bloom (7 million tulips, open late March to mid-May only). The city comes alive after winter. King\u2019s Day (27 April) turns every canal into a floating party. Book museums and Anne Frank House well ahead \u2014 this is peak demand.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "\u2600\uFE0F",
                  t: "Summer \u2014 Warmest & Busiest",
                  d: "17\u201325\u00B0C with long daylight hours (sunset after 10pm in June). Outdoor caf\u00E9 terraces, canal-side dining, and Vondelpark open-air concerts. This is peak season \u2014 accommodation is 30\u201350% more expensive and Anne Frank House is booked solid months ahead. The weather is the best of the year.",
                  b: "Best weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\uD83C\uDF42",
                  t: "Autumn \u2014 Shoulder Season",
                  d: "10\u201318\u00B0C. Crowds thin, prices drop 20\u201330%, and the canal trees turn gold and amber. September still has mild weather. October gets cooler and rainier but the autumn light on the canals is spectacular for photography. Museum queues are noticeably shorter.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov\u2013Mar",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Coldest but Atmospheric",
                  d: "2\u20138\u00B0C. Cold, damp, and dark by 4:30pm. But Amsterdam\u2019s cosy brown caf\u00E9s (bruine kroegen) come into their own with candlelight and jenever. December brings Christmas markets and the Amsterdam Light Festival (illuminated canal installations). Lowest prices of the year.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} &mdash; {s.t}</p>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Amsterdam</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Amsterdam Schiphol Airport (AMS) is one of Europe&apos;s busiest hubs, connected to the city centre by a direct train in 15 minutes. <strong className="font-medium">Indian passport holders need a Schengen visa ({"\u20AC"}80, apply 4\u20136 weeks ahead via VFS Global).</strong> US/UK/Canada/Australia passport holders enter visa-free (90 days).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Schiphol Airport to City Centre",
                  d: "Direct NS train from Schiphol Plaza (below the terminal) to Amsterdam Centraal takes 15 minutes. Tickets: \u20AC5.90 one-way (~$6.40), buy at yellow NS machines or tap your contactless bank card at the gate. Trains run every 10\u201315 minutes, 24 hours. A taxi to central Amsterdam costs \u20AC40\u201350 (~$43\u201354) and takes 20\u201330 minutes depending on traffic.",
                  b: "15 min by train",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "Flights from India",
                  d: "KLM operates direct flights from Delhi and Mumbai to Amsterdam (8\u20139 hours). Fares: \u20B945,000\u2013\u20B975,000 return (~$540\u2013$900) if booked 2\u20133 months ahead. Air India and Vistara also fly direct from Delhi. Emirates via Dubai and Etihad via Abu Dhabi offer competitive one-stop options at \u20B935,000\u201360,000 return with layovers of 2\u20134 hours.",
                  b: "Best from India",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE8B",
                  t: "Tram, Metro & GVB Transport",
                  d: "Amsterdam\u2019s GVB tram and metro network covers the entire city. A single ride is \u20AC3.40 (~$3.70). Buy a 1\u2013 to 7-day GVB pass for unlimited travel: 24h \u20AC9 (~$9.80), 48h \u20AC15.50 (~$16.80), 72h \u20AC21 (~$22.80). Trams 2, 5, and 12 connect Centraal Station to the Museum Quarter. You can also tap a contactless bank card directly on the tram reader.",
                  b: "Best for getting around",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDEB2",
                  t: "Rent a Bicycle",
                  d: "Amsterdam has 400km of dedicated cycle lanes. Rent from MacBike or Starfish Bike Rental near Centraal (\u20AC12\u201318/day, ~$13\u201320). The entire city centre is navigable in 20 minutes by bike. Cross tram tracks at a perpendicular angle \u2014 your wheel can slot into the groove and throw you. Stay in red cycle lanes and signal before turning.",
                  b: "The local way",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 4-Day Amsterdam Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending ({"\u20AC"}150\u2013250/day, ~$163\u2013272). Each day card is expandable. The route runs Jordaan &amp; Anne Frank House {"\u2192"} Museum Quarter {"\u2192"} Day Trip {"\u2192"} Noord &amp; Windmill Brewery. Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Jordaan, Anne Frank House & Canal Cruise"
                cost={"\u20AC65\u2013120 (~$71\u2013130)"}
                items={[
                  "9:00am \u2014 Anne Frank House (\u20AC16, ~$17 \u2014 book months ahead at annefrank.org, tickets sell out completely April\u2013October). The hidden annexe where eight people hid for 761 days is profoundly moving. No same-day availability. Plan 1.5 hours.",
                  "11:30am \u2014 Westerkerk church next door \u2014 free to admire the exterior. Tower climb (\u20AC10, ~$11) gives a panoramic canal-level view. Rembrandt is buried inside; a plaque marks the spot.",
                  "12:30pm \u2014 Jordaan neighbourhood lunch: brown caf\u00E9s (bruine kroegen) around Lindengracht serve bitterballen (\u20AC5\u20138, ~$5\u20139) and broodjes (\u20AC4\u20136, ~$4\u20137). Try Caf\u00E9 \u2019t Smalle on Egelantiersgracht for canal-side atmosphere.",
                  "2:00pm \u2014 Nine Streets (Negen Straatjes): the grid of nine small streets connecting the main canals. Vintage shops, independent cheese sellers, and specialist bookshops. Budget \u20AC0 to browse or \u20AC5\u201320 for stroopwafels and Gouda.",
                  "4:30pm \u2014 Canal boat cruise (\u20AC15\u201322, ~$16\u201324 \u2014 multiple operators on Prinsengracht and Damrak). The best way to understand Amsterdam\u2019s architecture. 165 canals, 1,500 bridges \u2014 the gabled houses lean forward deliberately, built with exterior hoisting hooks.",
                  "7:00pm \u2014 Leidseplein for evening: outdoor caf\u00E9s and street performers. Dinner at a brown caf\u00E9 with jenever (Dutch gin) and poffertjes (mini pancakes, \u20AC6\u20138, ~$7\u20139).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Rijksmuseum, Van Gogh & Albert Cuyp Market"
                cost={"\u20AC80\u2013140 (~$87\u2013152)"}
                items={[
                  "9:00am \u2014 Rijksmuseum (\u20AC22.50, ~$24 \u2014 book the 9am slot online). Rembrandt\u2019s Night Watch (363 \u00D7 437 cm) is in Room 2.12 \u2014 at 9am you can stand directly in front of it. By 10:30am there will be 50 people between you and the painting. Also: Vermeer\u2019s The Milkmaid and 400 years of Dutch Golden Age art.",
                  "11:30am \u2014 Van Gogh Museum (\u20AC22, ~$24 \u2014 timed slot essential). 200+ original Van Gogh paintings in chronological order \u2014 from dark Dutch-period earth tones to the blazing yellows and blues of Arles. The Sunflowers, Bedroom in Arles, and Starry Night studies are all here. Five-minute walk from the Rijksmuseum.",
                  "1:00pm \u2014 Vondelpark lunch: Amsterdam\u2019s main park (free, 47 hectares). Buy lunch from Albert Heijn on PC Hooftstraat and eat on the grass. Free open-air concerts in the park theatre during summer.",
                  "3:00pm \u2014 Albert Cuyp Market (free entry, Mon\u2013Sat, busiest Saturday): Amsterdam\u2019s largest street market, 260 stalls in De Pijp. Fresh herring with raw onion (\u20AC3\u20134, ~$3\u20134), fresh stroopwafel off the iron (\u20AC2\u20133, ~$2\u20133), raw-milk Gouda (\u20AC3\u20135, ~$3\u20135).",
                  "5:00pm \u2014 De Pijp neighbourhood walk \u2014 Amsterdam\u2019s most multicultural area. Indonesian rijsttafel restaurants, Surinamese food stalls, independent caf\u00E9s on Gerard Doustraat.",
                  "7:30pm \u2014 Indonesian rijsttafel dinner (12\u201320 small Dutch-Indonesian dishes, \u20AC18\u201325/person, ~$20\u201327) \u2014 one of the great Dutch culinary traditions from colonial history.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Keukenhof Day Trip (Apr\u2013May) or Haarlem"
                cost={"\u20AC55\u2013100 (~$60\u2013109) incl. day trip"}
                items={[
                  "OPTION A (April\u2013May only): Keukenhof Tulip Gardens (\u20AC22 entry, ~$24 \u2014 open late March to mid-May). Direct coach from Amsterdam Centraal (\u20AC19 return including entry). 32 hectares, 7 million flower bulbs, 800 varieties of tulip. Go on a weekday morning to avoid peak crowds. Spend 3\u20134 hours.",
                  "OPTION B (year-round): Haarlem (20 minutes by train, \u20AC5 each way, ~$5.40 \u2014 trains every 15 minutes). Holland\u2019s most charming city \u2014 a smaller, calmer Amsterdam. Grote Markt square is one of the most beautiful in the Netherlands. Frans Hals Museum (\u20AC17.50, ~$19) houses the greatest Haarlem School collection.",
                  "OPTION C: Delft (1.5 hours, \u20AC16 return, ~$17 via Den Haag). The city of Delft blue pottery and Vermeer\u2019s birthplace. Royal Delft factory tour (\u20AC16, ~$17) shows hand-painted production.",
                  "Afternoon back in Amsterdam: Red Light District walking tour \u2014 stick to daylight or early evening for the historical and architectural interest (the oldest part of Amsterdam, 14th-century church, medieval alleyways). The area is safe but chaotic on weekend nights.",
                  "Evening: Eat at a traditional Dutch restaurant \u2014 try stamppot (mashed potato with kale and smoked sausage, \u20AC15\u201320, ~$16\u201322) at Haesje Claes on Spuistraat.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Noord, Windmill Brewery & Farewell Canal Ride"
                cost={"\u20AC60\u2013100 (~$65\u2013109)"}
                items={[
                  "10:00am \u2014 Stedelijk Museum of modern and contemporary art (\u20AC22.50, ~$24). Excellent Bauhaus, De Stijl, and post-war collection. The bathtub building extension is a Dutch architectural landmark.",
                  "12:30pm \u2014 Free NDSM ferry from behind Amsterdam Centraal station to Amsterdam Noord across the IJ river. Five minutes, completely free, runs every 15\u201330 minutes.",
                  "1:00pm \u2014 NDSM Wharf: Amsterdam\u2019s creative district in a former shipyard. Street art murals covering entire warehouses, pop-up restaurants, IJver beach bar in summer. Lunch at Pllek (shipping container restaurant with waterfront terrace, \u20AC12\u201320, ~$13\u201322).",
                  "2:30pm \u2014 EYE Film Museum (free permanent collection, temporary exhibitions \u20AC12, ~$13). The angular white building on the Noord waterfront is one of Amsterdam\u2019s most striking contemporary buildings. River views back toward Centraal are exceptional.",
                  "4:00pm \u2014 Brouwerij \u2019t IJ windmill brewery (free entry, guided tours \u20AC12, ~$13 \u2014 tastings \u20AC2.80 each, ~$3). A functioning microbrewery inside Amsterdam\u2019s last remaining windmill. Try the Zatte (triple) or Columbus (IPA). The tasting room inside the mill is one of the city\u2019s best atmospheric bars.",
                  "6:30pm \u2014 Golden hour canal bike ride: rent a bike (\u20AC15/day, ~$16) and cycle Magere Brug (Skinny Bridge, best at golden hour) and Prinsengracht. Final dinner at a canal-side brown caf\u00E9 for bitterballen and a Heineken (\u20AC4\u20136, ~$4\u20137 for a large draft).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Amsterdam" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important museums and landmarks in order of priority. All prices as of early 2026. Book the Rijksmuseum, Van Gogh Museum, and Anne Frank House online in advance &mdash; same-day availability is rare for all three.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Anne Frank House",
                  e: "\u20AC16 (~$17)",
                  d: "The hidden annexe where Anne Frank and seven others hid from the Nazis for 761 days. The most visited house museum in the Netherlands. Tickets must be booked months ahead at annefrank.org \u2014 there is no queue at the door and no same-day availability. A small daily allocation is released at 9am on the day but disappears in seconds. Allow 1.5 hours.",
                  t: "Must see \u00B7 Book months ahead \u00B7 1.5 hrs",
                },
                {
                  n: "Rijksmuseum",
                  e: "\u20AC22.50 (~$24)",
                  d: "The Netherlands\u2019 national museum with 8,000 objects spanning 800 years of Dutch art and history. Rembrandt\u2019s Night Watch (Room 2.12) is the centrepiece \u2014 arrive at 9am opening to stand in front of it uncrowded. Vermeer\u2019s The Milkmaid, Jan Steen\u2019s domestic scenes, and the Delftware collection are all exceptional. Allow 2.5\u20133 hours.",
                  t: "Must see \u00B7 9am entry \u00B7 2.5\u20133 hrs",
                },
                {
                  n: "Van Gogh Museum",
                  e: "\u20AC22 (~$24)",
                  d: "The world\u2019s largest collection of Van Gogh paintings \u2014 200+ works in chronological order from the dark Dutch period to the blazing Arles canvases. The Sunflowers, Bedroom in Arles, and Almond Blossom are here. Timed entry is essential. Five-minute walk from the Rijksmuseum. Allow 2 hours.",
                  t: "Must see \u00B7 Timed entry \u00B7 2 hrs",
                },
                {
                  n: "Jordaan Neighbourhood",
                  e: "Free",
                  d: "Amsterdam\u2019s most charming residential area \u2014 17th-century canal houses, independent boutiques, caf\u00E9s, and galleries along narrow cobbled streets. The Nine Streets (Negen Straatjes) connect the major canals with vintage shops and cheese sellers. Best explored on foot or by bicycle. Saturday mornings have a farmers\u2019 market on Lindengracht.",
                  t: "Must see \u00B7 Free \u00B7 Half day",
                },
                {
                  n: "Vondelpark",
                  e: "Free",
                  d: "Amsterdam\u2019s green lung \u2014 47 hectares of paths, ponds, and open meadows. Free open-air concerts at the park theatre in summer. Excellent for a picnic lunch between museum visits. The Rijksmuseum and Van Gogh Museum are both on its northern edge.",
                  t: "Free \u00B7 1\u20132 hrs",
                },
                {
                  n: "Brouwerij \u2019t IJ (Windmill Brewery)",
                  e: "\u20AC12 tour (~$13)",
                  d: "A functioning craft brewery inside Amsterdam\u2019s last remaining windmill. The tasting room is one of the most atmospheric bars in the city. Guided tours (\u20AC12 with three tastings) explain the brewing history. Individual tastings \u20AC2.80 each. The terrace at golden hour is exceptional.",
                  t: "Recommended \u00B7 1\u20132 hrs",
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
            title="Amsterdam &mdash; Canals, Museums &amp; Golden Age"
            subtitle="A city of 165 canals, world-class art, and 800,000 bicycles."
            spots={[
              {
                name: "Canal Ring at Golden Hour",
                query: "amsterdam canal ring golden hour gabled houses reflection water",
                desc: "UNESCO-listed 17th-century canal ring \u2014 Amsterdam\u2019s defining landscape, best seen at dawn or golden hour when the water is mirror-flat.",
              },
              {
                name: "Rijksmuseum",
                query: "rijksmuseum amsterdam exterior garden pool reflection building",
                desc: "The Netherlands\u2019 national museum \u2014 home to Rembrandt\u2019s Night Watch and 800 years of Dutch art and history.",
              },
              {
                name: "Keukenhof Tulip Gardens",
                query: "keukenhof tulip gardens netherlands colourful rows spring bloom",
                desc: "7 million tulips across 32 hectares \u2014 open only 8 weeks per year in spring. The most spectacular flower garden on earth.",
              },
              {
                name: "Jordaan Neighbourhood",
                query: "amsterdam jordaan neighbourhood canal bikes flowers bridge",
                desc: "Amsterdam\u2019s most charming area \u2014 cobbled streets, brown caf\u00E9s, and the Nine Streets connecting the main canals.",
              },
              {
                name: "Brouwerij \u2019t IJ Windmill",
                query: "brouwerij het ij windmill brewery amsterdam terrace evening",
                desc: "Amsterdam\u2019s last remaining windmill houses a craft brewery with one of the city\u2019s most atmospheric tasting rooms.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Amsterdam is moderately expensive by European standards &mdash; more than Prague or Lisbon, less than Oslo or Zurich. All prices in Euros ({"\u20AC"}) and approximate USD at {"\u20AC"}1 = ~$1.09.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (4 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u20AC80\u2013160 ($87\u2013174)", "\u20AC440\u2013800 ($479\u2013872)", "\u20AC1,600\u20134,800 ($1,744\u20135,232)"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20AC60\u2013100 ($65\u2013109)", "\u20AC180\u2013320 ($196\u2013349)", "\u20AC400\u20131,400 ($436\u20131,526)"],
                    ["\uD83D\uDE8B Transport", "\u20AC20\u201340 ($22\u201344)", "\u20AC60\u2013100 ($65\u2013109)", "\u20AC200\u2013480 ($218\u2013523)"],
                    ["\uD83C\uDFAF Activities & Museums", "\u20AC80\u2013160 ($87\u2013174)", "\u20AC120\u2013240 ($131\u2013262)", "\u20AC400\u20131,600 ($436\u20131,744)"],
                    ["\uD83C\uDF37 Day Trip (Keukenhof/Haarlem)", "\u20AC25\u201345 ($27\u201349)", "\u20AC40\u201375 ($44\u201382)", "\u20AC150\u2013500 ($164\u2013545)"],
                    ["TOTAL (per person)", "\u20AC265\u2013505 ($289\u2013550)", "\u20AC840\u20131,535 ($916\u20131,673)", "\u20AC2,750\u20138,780 ($2,998\u20139,570)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ({"\u20AC"}60\u2013115/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels ({"\u20AC"}20\u201340/night), Albert Heijn supermarket meals, GVB day pass, and free activities like Vondelpark and the Jordaan. The I Amsterdam City Card ({"\u20AC"}75/24h) pays for itself at 3+ museums.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range ({"\u20AC"}200\u2013365/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-star hotels ({"\u20AC"}110\u2013200/night), restaurant dinners, all major museum entries, canal cruise, and a Keukenhof day trip. The sweet spot for comfort and experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ({"\u20AC"}650\u20132,070+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Canal-house hotels like the Pulitzer ({"\u20AC"}400\u2013900/night), private canal cruises, Michelin-star dining, VIP museum tours, and helicopter flights over tulip fields in season.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Amsterdam</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Amsterdam is compact &mdash; you can walk or cycle across the centre in 20 minutes. The key decision is neighbourhood character. Jordaan for charm and canals. De Pijp for food and local atmosphere. Centrum for proximity to everything. Oud-West for the Museum Quarter.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Jordaan & the Nine Streets",
                  type: "Canal houses, boutiques & brown caf\u00E9s",
                  price: "\u20AC120\u2013300/night (~$131\u2013327)",
                  badge: "Best atmosphere",
                  desc: "Amsterdam\u2019s most charming neighbourhood. Gabled canal houses, cobbled streets, vintage shops, and the famous brown caf\u00E9s. Walking distance to Anne Frank House and the canal ring. Accommodation is mostly boutique hotels in converted canal houses \u2014 book early as the best ones fill months ahead in spring and summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "De Pijp",
                  type: "Food market, multicultural & local",
                  price: "\u20AC90\u2013200/night (~$98\u2013218)",
                  badge: "Best food scene",
                  desc: "Amsterdam\u2019s most multicultural neighbourhood. Home to Albert Cuyp Market (260 stalls), excellent Indonesian and Surinamese restaurants, and a genuinely local atmosphere. A 15-minute tram ride to the Museum Quarter. Better value than Jordaan or Centrum with more authentic dining options.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Centrum (near Dam Square)",
                  type: "Central location, major attractions",
                  price: "\u20AC100\u2013250/night (~$109\u2013272)",
                  badge: "Most convenient",
                  desc: "Walking distance to Amsterdam Centraal station, the Royal Palace, and the Red Light District. The most convenient base for first-time visitors but also the noisiest and most touristy area. Prices vary widely \u2014 budget options exist alongside luxury canal-house hotels. Avoid the very cheapest places near the Red Light District.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Oud-West (Museum Quarter)",
                  type: "Quiet, residential & museum-adjacent",
                  price: "\u20AC110\u2013250/night (~$120\u2013272)",
                  badge: "Best for museums",
                  desc: "Right next to the Rijksmuseum, Van Gogh Museum, Stedelijk, and Vondelpark. A calm, residential area with excellent caf\u00E9s on Overtoom and Kinkerstraat. Ideal if museums are your priority \u2014 you can walk to the 9am openings in 5 minutes. Less canal atmosphere than Jordaan but quieter and more spacious.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Amsterdam</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dutch food is better than its reputation suggests. The key is knowing what to look for: fresh stroopwafels off the iron, raw herring with onion, Indonesian rijsttafel, brown caf\u00E9 bitterballen, and the multicultural food scene in De Pijp. Here are the experiences worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Fresh Stroopwafels",
                  t: "Street food \u00B7 Albert Cuyp Market & citywide",
                  d: "A stroopwafel fresh off the iron is a completely different experience from the packaged version. Two thin waffle layers with a caramel syrup filling, served warm and slightly sticky. Buy at Albert Cuyp Market (\u20AC2\u20133, ~$2\u20133) or from the Lanskroon bakery near Dam Square. The best are made to order in front of you. Do not leave Amsterdam without eating one warm.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Indonesian Rijsttafel",
                  t: "Colonial Dutch-Indonesian \u00B7 De Pijp & citywide",
                  d: "A selection of 12\u201320 small Dutch-Indonesian dishes served with rice \u2014 satay, rendang, gado-gado, sambal goreng, and more. A culinary tradition from Dutch colonial history in Indonesia, now one of Amsterdam\u2019s defining food experiences. Restaurants like Sama Sebo and Blauw serve authentic versions at \u20AC18\u201335/person (~$20\u201338). Always order for the table and share.",
                  b: "Iconic dinner",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Herring (Haring) Stalls",
                  t: "Street food \u00B7 Citywide",
                  d: "Raw herring with chopped onion and pickles, served from street stalls across the city. The authentic Dutch way is to hold it by the tail and lower it into your mouth, though most stalls will serve it chopped in a small tray. \u20AC3\u20134 (~$3\u20134) at any herring stand. The stalls near Albert Cuyp Market and on Singel canal are reliable. A genuine Amsterdam food experience.",
                  b: "Authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Brown Caf\u00E9s (Bruine Kroegen)",
                  t: "Traditional Dutch pubs \u00B7 Jordaan & citywide",
                  d: "Amsterdam\u2019s traditional pubs with dark wood interiors, candlelight, and centuries of tobacco-stained walls. Order bitterballen (deep-fried meat ragout balls, \u20AC5\u20138, ~$5\u20139), jenever (Dutch gin), and a Heineken or local craft beer. Caf\u00E9 \u2019t Smalle, Caf\u00E9 Papeneiland, and Caf\u00E9 Chris (opened 1624) are among the best. The atmosphere on a cold evening is unmatched.",
                  b: "Essential experience",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Albert Cuyp Market Food Tour",
                  t: "Street market \u00B7 De Pijp",
                  d: "Amsterdam\u2019s largest street market (260 stalls, Mon\u2013Sat) is a food tour in itself. Fresh stroopwafels, raw herring, Gouda cheese from specialist stalls, poffertjes (mini pancakes), kibbeling (fried cod), and Surinamese roti. A full lunch costs \u20AC8\u201315 (~$9\u201316) grazing between stalls. Saturday is busiest and most atmospheric.",
                  b: "Best market",
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
            destination="Amsterdam Netherlands"
            hotels={[
              {
                name: "The Hoxton Amsterdam",
                type: "Boutique Hotel \u00B7 Jordaan Canal",
                price: "From \u20AC150/night (~$163)",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/nl/the-hoxton-amsterdam.html?aid=2820480",
              },
              {
                name: "Pulitzer Amsterdam",
                type: "Luxury Canal Houses \u00B7 Prinsengracht",
                price: "From \u20AC400/night (~$436)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/nl/pulitzer.html?aid=2820480",
              },
              {
                name: "Hotel V Frederiksplein",
                type: "Design Hotel \u00B7 Near Museums",
                price: "From \u20AC130/night (~$142)",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/nl/v-frederiksplein.html?aid=2820480",
              },
              {
                name: "Sir Adam Hotel",
                type: "Creative Hotel \u00B7 Amsterdam Noord",
                price: "From \u20AC160/night (~$174)",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/nl/sir-adam.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Anne Frank House & Jordaan Tour",
                duration: "2.5 hours",
                price: "From \u20AC25/person (~$27)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=anne+frank+jordaan+amsterdam&partner_id=PSZA5UI",
              },
              {
                name: "Amsterdam Canal Cruise",
                duration: "1 hour",
                price: "From \u20AC15/person (~$16)",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=amsterdam+canal+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Keukenhof Tulip Gardens Day Trip",
                duration: "Full day",
                price: "From \u20AC19/person (~$21)",
                badge: "Seasonal",
                url: "https://www.getyourguide.com/s/?q=keukenhof+tulip+gardens+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Rijksmuseum & Van Gogh Guided Tour",
                duration: "4 hours",
                price: "From \u20AC55/person (~$60)",
                url: "https://www.getyourguide.com/s/?q=rijksmuseum+van+gogh+amsterdam+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83C\uDFAB",
                  title: "Not Booking Anne Frank House Months in Advance",
                  desc: "Tickets are released approximately 2 months ahead and sell out completely \u2014 especially April through September. There is no queue at the door and no same-day availability. Visit annefrank.org the day your booking window opens. This is the single most common Amsterdam disappointment for travellers.",
                },
                {
                  icon: "\uD83D\uDEB2",
                  title: "Cycling on Tram Tracks",
                  desc: "Amsterdam\u2019s tram network rails are a serious hazard for cyclists \u2014 your front wheel can slot into the groove and throw you instantly. Always cross tram tracks at a perpendicular angle. Use the red-painted cycle lanes and you will be fine. Cycling accidents on tram tracks send several tourists to hospital every week.",
                },
                {
                  icon: "\uD83C\uDF37",
                  title: "Visiting April\u2013May Without Planning for Keukenhof",
                  desc: "If you arrive in Amsterdam in late March through early May and don\u2019t visit Keukenhof, you are missing 7 million tulips across 32 hectares \u2014 open only 8 weeks per year. Tickets must be bought in advance (not available at the gate) and the direct buses book up. Plan this before you book your flights.",
                },
                {
                  icon: "\uD83D\uDCB3",
                  title: "Not Carrying a Contactless Card",
                  desc: "Amsterdam is one of the most cashless cities in Europe. Many shops, restaurants, and even market stalls only accept card payments (primarily Maestro and contactless Visa/Mastercard). Carry a contactless bank card or credit card at all times. Some smaller brown caf\u00E9s and market vendors still prefer cash, but you can go days without needing it.",
                },
                {
                  icon: "\uD83C\uDF43",
                  title: "Going to Coffee Shops as Your First Stop",
                  desc: "Amsterdam\u2019s coffee shops serve cannabis legally but edibles (space cakes) have an unpredictable 45\u201390 minute delayed onset. The standard beginner mistake is eating a second one because nothing happened yet. Consumption in public spaces is illegal. If you go, eat a full meal first, and be very conservative with quantities.",
                },
                {
                  icon: "\uD83D\uDE8B",
                  title: "Ignoring the Museum Pass Maths",
                  desc: "The I Amsterdam City Card (\u20AC75/24h, \u20AC95/48h, \u20AC115/72h) includes 70+ museums and unlimited GVB transport. If you plan to visit the Rijksmuseum (\u20AC22.50), Van Gogh (\u20AC22), and Stedelijk (\u20AC22.50), that is \u20AC67 in museum entries alone \u2014 the 24h card at \u20AC75 covers all three plus transport. Do the maths before buying individual tickets.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Amsterdam</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF05",
                  title: "Visit Rijksmuseum and Van Gogh at 9am",
                  desc: "Both open at 9am and the first 45 minutes are dramatically quieter. Book the 9am timed slot for both. At the Rijksmuseum, the Night Watch is accessible and unobstructed at 9am \u2014 by 10:30am there can be 50 people in front of it. This single tip transforms the museum experience.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDFAB",
                  title: "The I Amsterdam Card pays for itself at 3+ museums",
                  desc: "The 48h card (\u20AC95, ~$103) includes Rijksmuseum, Van Gogh, Stedelijk, EYE Film Museum, Amsterdam Museum, and 65+ more \u2014 plus unlimited GVB trams and buses. If you visit three major museums it pays for itself and transport is a bonus. Available at Schiphol airport or Amsterdam Centraal.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDFD9\uFE0F",
                  title: "Golden hour from Magere Brug (Skinny Bridge)",
                  desc: "Amsterdam\u2019s most photogenic bridge on the Amstel river, especially at golden hour. 10-minute walk from Rembrandtplein and completely free. The Keizersgracht-Reguliersgracht intersection (seven bridges visible in one line) is another golden-hour spot known mainly to photographers.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDEB4",
                  title: "Rent a bike \u2014 it\u2019s the only way to truly see Amsterdam",
                  desc: "400km of dedicated cycle lanes, more bikes than people. Rent from MacBike or Starfish near Centraal (\u20AC12\u201318/day, ~$13\u201320). The entire city centre is 20 minutes by bike. Vondelpark, the Amstelpark, and Noord are all significantly better by bicycle. Cross tram tracks at right angles, signal before turning, and use the red lanes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDCB1",
                  title: "Contactless cards work everywhere",
                  desc: "Amsterdam is almost fully cashless. Tap your Visa or Mastercard on GVB trams, at museum entrances, in restaurants, and at market stalls. Most shops prefer card over cash. Keep some euros for the occasional cash-only market vendor and small brown caf\u00E9s, but you can largely go cashless for the entire trip.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "\u2602\uFE0F",
                  title: "Always carry a rain jacket",
                  desc: "Amsterdam gets rain year-round \u2014 even in summer, a sudden 30-minute shower is common. Pack a lightweight rain jacket and keep it in your bag. Umbrellas are less practical because the wind off the North Sea often makes them useless. The city is beautiful in rain \u2014 the canal reflections double and the cobblestones gleam.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Amsterdam" />

          {/* Combine With */}
          <CombineWith currentSlug="amsterdam-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Amsterdam expensive to visit?",
                  a: "Amsterdam is moderately expensive by European standards \u2014 more than Prague or Lisbon, less than Oslo or Zurich. Budget travellers can manage \u20AC60\u201380/day (~$65\u201387) staying in hostels and cooking some meals. Mid-range travellers should budget \u20AC180\u2013280/day (~$196\u2013305) for a comfortable hotel, museum entries, and restaurant dinners. The biggest costs are accommodation (\u20AC20\u201340/night hostels, \u20AC110\u2013180 for 3-star hotels) and museum tickets (Rijksmuseum \u20AC22.50, Van Gogh \u20AC22).",
                },
                {
                  q: "How do I book Anne Frank House tickets?",
                  a: "Go directly to annefrank.org. Tickets are released approximately 2 months in advance on a rolling basis. Set a calendar reminder and book the day your window opens \u2014 peak season tickets disappear within hours. There is no queue at the door and no last-minute availability. A small daily allocation is released at exactly 9am Amsterdam time on the day \u2014 sold online only, gone in seconds.",
                },
                {
                  q: "When exactly is tulip season in the Netherlands?",
                  a: "Late March to mid-May, with peak bloom typically mid-April. Keukenhof is open from late March to mid-May only (check keukenhof.nl for exact dates). The tulip fields in the Bollenstreek region between Haarlem and Leiden are free to walk alongside. April 10\u201325 is the historically most reliable peak window.",
                },
                {
                  q: "Is cycling in Amsterdam safe for tourists?",
                  a: "Yes, if you follow two rules: stay in the red cycle lanes and never ride parallel to tram tracks (cross at a right angle). Drivers are accustomed to cyclists, there are cycling traffic lights, and right-of-way rules are well established. The genuine danger is tram tracks and other cyclists moving faster than you expect. Wear a helmet \u2014 few locals do but it is sensible for visitors.",
                },
                {
                  q: "Do Indian passport holders need a visa for Amsterdam?",
                  a: "Yes. Indian passport holders require a Schengen short-stay visa (Type C). Apply through VFS Global India at least 6\u20138 weeks before travel. Required documents: bank statements (\u20AC100+/day), confirmed hotel bookings, return flights, employment letter, and travel insurance with minimum \u20AC30,000 medical coverage. Fee: \u20AC80 plus VFS service charge (~\u20AC22). The visa allows up to 90 days across all 27 Schengen countries.",
                },
                {
                  q: "What are the coffee shop rules for tourists?",
                  a: "Cannabis coffee shops are legal for adults (18+) and you must show ID. Purchase limit is 5 grams per visit. Alcohol is not sold in coffee shops. Smoking in public spaces is technically illegal. Space cakes (edibles) have a delayed 45\u201390 minute onset and catch out tourists regularly. Do not combine with alcohol. If this is your first experience, start with a very small amount.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Amsterdam trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-amsterdam", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/amsterdam-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-amsterdam", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/amsterdam-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="amsterdam-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris &mdash; 5 Day Guide", href: "/blog/paris-5-days" },
                { label: "Barcelona &mdash; 4 Day Guide", href: "/blog/barcelona-4-days" },
                { label: "Rome &mdash; 4 Day Itinerary", href: "/blog/rome-4-days" },
                { label: "Lisbon &mdash; 4 Day Guide", href: "/blog/lisbon-4-days" },
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
                  <span className="text-xs text-muted">Read {"\u2192"}</span>
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
