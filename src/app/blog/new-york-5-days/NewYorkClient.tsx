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
const NYC_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What NYC Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "🗽",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=New York City 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=New York City in 5 Days — Statue of Liberty, Central Park and the Brooklyn Bridge&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/new-york-5-days"
        imageUrl="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80"
        description="New York City in 5 Days: Statue of Liberty, Central Park, Brooklyn Bridge, Times Square and the Met — complete travel guide with budget breakdown."
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
export default function NewYorkClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NYC_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="New York City" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="new york city times square manhattan skyline usa"
            fallback="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80"
            alt="New York City Manhattan skyline with Times Square lights and yellow taxis at dusk USA"
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
              <span className="text-white/70">New York City 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                New York City in 5 Days:
                <em className="italic text-amber-300"> Skylines, Streets &amp; the City That Never Sleeps</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Statue of Liberty, Central Park, Brooklyn Bridge, the Met, Broadway, and the best pizza on earth — five days to experience the most iconic city in the world.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇺🇸 New York, USA</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              New York City at sunrise — the skyline catching orange light over the East River, a corner bodega already humming with regulars, the subway rattling beneath your feet before the city has fully woken — is one of the most electric travel experiences on the planet.
            </p>
          </blockquote>

          {/* ── WHAT NYC ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What New York City Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              New York City is five boroughs, 8.3 million residents, 800 languages spoken, and a density of ambition and culture that no other city on earth quite matches. Manhattan alone packs more world-class museums, restaurants, and architectural landmarks per square mile than most countries manage in their entirety.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Five days lets you cross the Brooklyn Bridge on foot, stand beneath the Statue of Liberty, lose yourself in Central Park&apos;s 843 acres, watch the sun set from Top of the Rock, eat a $3.50 slice at Joe&apos;s Pizza, and catch a Broadway show — without once resorting to a Times Square tourist trap. The city rewards those who walk its streets with an open schedule and comfortable shoes.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The subway runs 24 hours a day, 472 stations across all five boroughs, and a single ride costs $2.90 with OMNY tap-to-pay or a MetroCard. The city is designed to be navigated on foot and by train — you genuinely do not need a car, and driving in Manhattan is an exercise in frustration that locals themselves avoid.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="JFK / LGA / EWR" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Nov" />
              <StatCard icon="🗓" label="Duration" value="5 Days" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit New York City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "12–25°C, cherry blossoms in Central Park (late March to mid-April), comfortable walking weather, and the city at its most livable. Restaurant patios open, free outdoor events begin, and the parks are green without the summer humidity. The ideal window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Equally Ideal",
                  d: "10–22°C. October is arguably the single best month — mild temperatures, spectacular fall foliage in Central Park and the outer boroughs, the NYC Marathon in November, and manageable crowds. The light in autumn is extraordinary for photography.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Hot and Crowded",
                  d: "28–35°C with high humidity. The city is packed with tourists, hotel prices peak, and the subway platforms can feel like saunas. But the free outdoor events are excellent — SummerStage concerts in Central Park, Shakespeare in the Park, outdoor film screenings, and Governors Island opens for the season.",
                  b: "Peak season pricing",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "❄️",
                  t: "Winter — Cold but Magical",
                  d: "December has the Rockefeller Center Christmas tree, holiday markets, and Macy&apos;s window displays. January and February are brutally cold (-5 to 5°C) with fewer tourists and lower hotel prices. March is unpredictable — snow one week, spring the next. Pack layers regardless.",
                  b: "Budget-friendly Jan–Feb",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to New York City</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> NYC has three major airports — <strong className="font-medium">JFK</strong> (international hub, Queens), <strong className="font-medium">LaGuardia</strong> (domestic, Queens), and <strong className="font-medium">Newark Liberty</strong> (international, New Jersey). JFK is the most common arrival for international travellers. The cheapest route into Manhattan from JFK is the AirTrain + subway at $10.75 total.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "JFK AirTrain + Subway (cheapest)",
                  d: "AirTrain from JFK to Jamaica station ($8.25) then E/J/Z subway to Midtown ($2.90) = $10.75 total, 60–75 minutes. The AirTrain also runs to Howard Beach for the A train — slightly shorter to lower Manhattan. This is the fastest option during rush hour when roads are gridlocked.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "JFK Yellow Cab (flat rate)",
                  d: "Flat rate of $70 from JFK to anywhere in Manhattan (set by the TLC), plus $8 tolls and 15–20% tip = $85–95 final total. Uber/Lyft: $45–90+ depending on surge pricing. Convenient if you have luggage but significantly slower than the subway during peak traffic.",
                  b: "Convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "LaGuardia to Manhattan",
                  d: "No rail link — take the M60 bus ($2.90) to 125th St subway station, or a taxi ($35–45 flat, no toll). LaGuardia is closer to Midtown than JFK, so taxi is more reasonable here. NYC Ferry from Astoria is another option if your hotel is near the East River.",
                  b: "Budget-friendly",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚂",
                  t: "Newark Liberty (EWR)",
                  d: "NJ Transit train + AirTrain ($17.50 total) to Penn Station, 45–60 minutes. Or taxi $60–80 depending on traffic and tolls. Newark is often cheaper to fly into than JFK; the train connection to Midtown is straightforward.",
                  b: "Good alternative",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day New York City Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Manhattan&apos;s highlights plus a full Brooklyn day, designed to minimize backtracking across the city&apos;s grid.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Central Park, The Met & Times Square"
                cost="$40–60"
                items={[
                  "8:00am — Start at the south end of Central Park (59th St entrance). Walk north past Wollman Rink to Bethesda Fountain — the park\u2019s centerpiece and one of the most beautiful public spaces in America. The Angel of the Waters statue faces the ornate Bethesda Terrace arcade.",
                  "9:30am — Bow Bridge — the cast-iron bridge over the Lake is NYC\u2019s most photographed spot inside the park. Morning light hits from the east; arrive before 10am for clean shots.",
                  "11:00am — Metropolitan Museum of Art ($30 suggested admission — pay-what-you-wish for NY state residents). The Egyptian Temple of Dendur, European Masters, Arms and Armor, the Roof Garden. Budget 2\u20133 hours minimum.",
                  "2:00pm — Lunch on the Upper East Side: a deli sandwich ($8\u201312) or a hot dog from a street cart ($2\u20133). Skip the museum cafeteria.",
                  "4:00pm — Walk the Upper West Side along Broadway — brownstones, independent bookshops, and Zabar\u2019s deli (founded 1934) where a bagel with lox costs $10.",
                  "6:30pm — Times Square at dusk: walk the pedestrian plaza between 42nd and 47th. See it once, absorb the spectacle, but do not eat there — every restaurant charges 3x the normal NYC price.",
                  "8:00pm — Dinner in Hell\u2019s Kitchen (9th Ave between 44th and 57th): NYC\u2019s best value restaurant strip with excellent Thai, Peruvian, Mexican, and Italian at $15\u201325 mains.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Brooklyn Bridge, DUMBO & Brooklyn Heights"
                cost="$35–55"
                items={[
                  "8:30am — Subway to Brooklyn Bridge\u2013City Hall ($2.90). Walk the Brooklyn Bridge from Manhattan to Brooklyn — the 1.3km pedestrian walkway gives the most cinematic views of lower Manhattan\u2019s skyline without paying for an observation deck. Free, 30 minutes.",
                  "10:00am — DUMBO: the Manhattan Bridge/Brooklyn Bridge double-frame photo on Washington Street at Water Street. Empire Fulton Ferry State Park for a direct view of the Manhattan skyline across the East River.",
                  "11:30am — Brooklyn Heights Promenade: a 0.5-mile elevated walkway facing lower Manhattan. The view of the Financial District and the Statue of Liberty in the background is arguably the best free skyline view in the whole city.",
                  "1:00pm — Lunch at Juliana\u2019s Pizza in DUMBO ($5\u20137/slice) — coal-fired thin-crust pizza in a tiny room below the Brooklyn Bridge. Cash preferred.",
                  "3:00pm — Smorgasburg (weekends, April\u2013October): NYC\u2019s massive outdoor food market with 100+ vendors. Budget $20\u201330. On weekdays, head to Williamsburg (Bedford Ave) for vintage shops and independent cafes.",
                  "5:00pm — Manhattan Bridge walk back (pedestrian path on the north side, free) for a different skyline angle.",
                  "7:30pm — Dinner in Chinatown: Joe\u2019s Shanghai for famous soup dumplings ($12 for 8) or hand-pulled noodles on Eldridge Street ($10\u201315).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Statue of Liberty, 9/11 Memorial & Financial District"
                cost="$60–90"
                items={[
                  "7:30am — Statue of Liberty ferry from Battery Park (book at statuecruises.com 2 weeks ahead in peak season). Ferry + grounds: $24 adults. Pedestal/crown reserve access costs $24\u201330 extra — crown requires booking 3+ months in advance.",
                  "10:30am — Ellis Island (included in ferry ticket): the immigration museum where 12 million ancestors arrived. The Registry Room (Great Hall) is genuinely moving. Budget 45\u201360 minutes.",
                  "12:30pm — 9/11 Memorial (free entry): the twin reflecting pools in the footprints of the original towers, surrounded by the names of 2,977 victims. The museum ($26 entry) goes underground into the surviving foundations.",
                  "2:30pm — Wall Street: Federal Hall (free) where Washington took the first presidential oath. The Charging Bull sculpture at Bowling Green.",
                  "4:00pm — One World Observatory ($46 general admission): 100 floors up, 360-degree view of NYC. Best during daytime for visibility — you can see four states on clear days.",
                  "6:30pm — South Street Seaport (Pier 17): free riverside area with Brooklyn Bridge views. The rooftop at Pier 17 has free access — good sunset spot.",
                  "8:00pm — Dinner on Stone Street (pedestrianized cobblestone alley in the Financial District) for a casual $20\u201330 meal as the neighborhood quiets down after the office workers leave.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="High Line, Top of the Rock & Broadway"
                cost="$55–80"
                items={[
                  "8:00am — The High Line: start at the Gansevoort St entrance (14th St) and walk north along this 2.3km elevated park on a disused freight rail line through Chelsea and Hudson Yards. Go before 9am and you\u2019ll have it nearly to yourself. Free.",
                  "10:00am — Chelsea Market: an indoor food hall in a converted Nabisco factory. Los Tacos No. 1 ($4\u20136 per taco), Amy\u2019s Bread, The Lobster Place. Budget $10\u201320 for a solid morning stop.",
                  "11:30am — Whitney Museum of American Art ($25): Edward Hopper, Georgia O\u2019Keeffe, Jasper Johns. The Renzo Piano building\u2019s terraces give excellent High Line views.",
                  "1:30pm — Top of the Rock at Rockefeller Center ($40 general admission): 70th floor, open-air observation level. The key advantage: you can see the Empire State Building from here. Sunset tickets ($44) are the premium slot.",
                  "3:30pm — Grand Central Terminal (free): the main concourse ceiling, Vanderbilt Hall, and the whispering gallery. Then Bryant Park (free, behind the New York Public Library — the library\u2019s reading room is free and magnificent).",
                  "5:00pm — TKTS booth in Times Square for same-day Broadway tickets at 20\u201350% off. A Broadway show runs $80\u2013200 for good seats.",
                  "8:00pm — Dinner in Koreatown (32nd St between 5th and 6th Ave): excellent Korean BBQ and bibimbap, most restaurants open until 2am. Budget $20\u201335 per person.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="MoMA, Fifth Avenue & Farewell"
                cost="$35–65"
                items={[
                  "9:00am — MoMA (Museum of Modern Art, $25 entry, free Friday evenings 5:30\u20139pm): Van Gogh\u2019s Starry Night, Picasso\u2019s Les Demoiselles d\u2019Avignon, Warhol, Pollock, and the design collection. Budget 2\u20133 hours.",
                  "12:00pm — Fifth Avenue window shopping: Saks Fifth Avenue, Bergdorf Goodman, Tiffany & Co, the Apple Store glass cube (58th St). Free to walk, expensive to buy.",
                  "2:00pm — The Frick Collection ($22, 74th St & Fifth Ave): Vermeer, Rembrandt, Vel\u00e1zquez in a Gilded Age mansion. One of NYC\u2019s most underrated museums.",
                  "3:30pm — Staten Island Ferry (Whitehall Terminal, lower Manhattan): completely free, runs every 30 minutes. The 25-minute crossing gives close-up views of the Statue of Liberty and the lower Manhattan skyline — the same view immigrants had arriving in the early 20th century. Ride there and back.",
                  "5:00pm — Governors Island (May\u2013October): free ferry on weekdays, $4 return on weekends. No cars, a hill with panoramic harbor views, and food vendors. A peaceful 2-hour escape.",
                  "7:00pm — Farewell dinner: Veselka in the East Village (Ukrainian diner, $15\u201320, open 24 hours) or Umberto\u2019s Clam House on Mulberry Street in Little Italy ($30\u201345/person). End with a cannoli from Caff\u00e8 Palermo.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="New York City" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗽 Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Prices as of early 2026 — book observation decks and Statue of Liberty ferry online in advance to avoid sellouts and queues.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Statue of Liberty & Ellis Island",
                  e: "$24 (ferry + grounds)",
                  d: "Book at statuecruises.com at least 2 weeks ahead in peak season. Pedestal reserve access is $24 extra; crown access requires 3\u20135 months advance booking. Ellis Island immigration museum is included in the ferry ticket and is genuinely moving.",
                  t: "Must see \u00b7 3\u20134 hrs",
                },
                {
                  n: "Central Park",
                  e: "Free",
                  d: "843 acres in the heart of Manhattan. Bethesda Fountain, Bow Bridge, the Ramble, Strawberry Fields, and the Jacqueline Kennedy Onassis Reservoir. Start at the south end (59th St) and work north. Best before 10am when the joggers have the park to themselves.",
                  t: "Must see \u00b7 2\u20134 hrs",
                },
                {
                  n: "Brooklyn Bridge",
                  e: "Free",
                  d: "The 1.3km pedestrian walkway above the traffic gives cinematic views of lower Manhattan. Walk from Manhattan to Brooklyn in 30 minutes, then explore DUMBO and Brooklyn Heights below.",
                  t: "Must see \u00b7 1\u20132 hrs",
                },
                {
                  n: "Top of the Rock",
                  e: "$40 general / $44 sunset",
                  d: "70th floor of Rockefeller Center, open-air observation level. Better than the Empire State Building because you can see the Empire State Building from here. Sunset is the premium time — the sky turns orange over New Jersey as the city lights up below.",
                  t: "Must see \u00b7 1\u20131.5 hrs",
                },
                {
                  n: "9/11 Memorial & Museum",
                  e: "Free (memorial) / $26 (museum)",
                  d: "The twin reflecting pools are free and accessible without a ticket. The underground museum documents September 11, 2001 with authentic artifacts and survivor testimonies — one of the most powerful historical museums in the USA. Budget 90 minutes minimum for the museum.",
                  t: "Must see \u00b7 1.5\u20132.5 hrs",
                },
                {
                  n: "The Metropolitan Museum of Art",
                  e: "$30 suggested donation",
                  d: "One of the world\u2019s great art museums: Egyptian Temple of Dendur, European Masters, Arms and Armor, the Costume Institute. Pay-what-you-wish for NY state residents. The Roof Garden (May\u2013October) has a direct Midtown skyline view.",
                  t: "Must see \u00b7 2\u20133 hrs",
                },
                {
                  n: "The High Line",
                  e: "Free",
                  d: "A 2.3km elevated park on a disused freight rail line through Chelsea and Hudson Yards. One of NYC\u2019s best urban design achievements. Go before 9am to avoid crowds. Open 7am\u20131am daily.",
                  t: "Highly recommended \u00b7 1\u20131.5 hrs",
                },
                {
                  n: "Empire State Building",
                  e: "$44 general",
                  d: "The most famous name in NYC observation decks. Best visited at night for the illuminated skyline below. Daytime haze reduces visibility significantly. Express pass ($70+) skips the queue but the standard line moves reasonably fast.",
                  t: "Iconic \u00b7 1\u20131.5 hrs",
                },
                {
                  n: "MoMA",
                  e: "$25",
                  d: "Van Gogh\u2019s Starry Night, Picasso, Warhol, Pollock, Monet\u2019s Water Lilies, and the world\u2019s best design collection. Free every Friday evening 5:30\u20139pm. Budget 2\u20133 hours for the permanent collection alone.",
                  t: "Must see \u00b7 2\u20133 hrs",
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
            title="New York City — Skylines, Bridges &amp; Central Park"
            subtitle="The city that defines the modern urban experience."
            spots={[
              {
                name: "Manhattan Skyline from Brooklyn",
                query: "manhattan skyline brooklyn bridge east river new york city",
                desc: "The iconic lower Manhattan skyline seen from DUMBO and Brooklyn Heights — the defining image of New York City.",
              },
              {
                name: "Central Park Bethesda Fountain",
                query: "central park bethesda fountain new york city autumn",
                desc: "Bethesda Fountain and the Terrace arcade — the heart of Central Park and one of the most beautiful public spaces in America.",
              },
              {
                name: "Statue of Liberty",
                query: "statue of liberty new york harbor ferry usa",
                desc: "Lady Liberty in New York Harbor — the symbol of American immigration and freedom since 1886.",
              },
              {
                name: "Times Square at Night",
                query: "times square neon lights new york city night broadway",
                desc: "The neon spectacle of Times Square — best experienced at dusk when the LED billboards overpower the fading daylight.",
              },
              {
                name: "The High Line",
                query: "high line elevated park chelsea new york city",
                desc: "The High Line — a 2.3km elevated park on a disused freight rail line through Chelsea and Hudson Yards.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              New York is expensive by global standards but has extraordinary free and cheap options. A disciplined budget traveller can have a genuinely rich experience — the Staten Island Ferry, Central Park, the High Line, Brooklyn Bridge walk, and multiple pay-what-you-wish museums cost next to nothing.
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
                    ["🏨 Accommodation", "$45–70", "$120–220", "$350–1,500"],
                    ["🍽 Food", "$20–35", "$50–90", "$150–400"],
                    ["🚇 Transport", "$10–15", "$20–30", "$50–150"],
                    ["🎭 Activities", "$15–40", "$40–80", "$150–500"],
                    ["TOTAL (per day)", "$80–130", "$220–380", "$700–2,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–130/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (HI NYC Hostel, $45–70/night dorm), eat pizza slices and deli sandwiches, use the subway and walk everywhere. The 7-day unlimited MetroCard ($34) pays for itself after 12 rides.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($220–380/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Pod 51 or citizenM ($120–220/night), eat at good restaurants ($15–35 mains), add observation decks and a Broadway show. The sweet spot for a comfortable first visit.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($700–2,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Plaza ($800–1,500/night), private helicopter tours, Michelin-starred tasting menus (Le Bernardin, Eleven Madison Park, Masa), and personal shopping on Fifth Avenue.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in New York City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Manhattan has distinct neighborhoods that function almost as separate cities. Midtown is the most convenient base for first-timers; Chelsea and the West Village offer the best neighbourhood experience; Brooklyn is trendier and more affordable.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Plaza",
                  type: "Luxury icon \u00b7 Fifth Avenue & Central Park South",
                  price: "From $800/night",
                  badge: "Most iconic",
                  desc: "One of the most famous hotels in the world, facing Central Park. Grand lobby, Palm Court afternoon tea, and a location that puts you steps from the park, Fifth Avenue shopping, and Midtown. The quintessential New York luxury experience.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Pod 51",
                  type: "Mid-range micro hotel \u00b7 Midtown East",
                  price: "From $120/night",
                  badge: "Best value mid-range",
                  desc: "Compact, well-designed rooms in a central Midtown location. Rooftop bar, modern amenities, and a price point that makes Midtown accessible without a luxury budget. The rooms are small (this is New York) but clever design maximizes every square foot.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "citizenM Bowery",
                  type: "Design hotel \u00b7 Lower East Side",
                  price: "From $160/night",
                  badge: "Best rooftop",
                  desc: "Dutch design hotel chain with spectacular Manhattan views from the rooftop bar. Self-check-in kiosks, mood lighting controlled by tablet, and a location in the heart of the Lower East Side\u2019s nightlife and restaurant scene.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "HI NYC Hostel",
                  type: "Budget hostel \u00b7 Upper West Side",
                  price: "From $45/night (dorm)",
                  badge: "Best budget",
                  desc: "The largest hostel in North America, housed in a landmark building on Amsterdam Avenue. Clean dorms, communal kitchen, free walking tours, and a location near Central Park and the Natural History Museum. The social atmosphere is excellent for solo travellers.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in New York City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              New York&apos;s food scene ranges from $3.50 pizza slices to $750 omakase. The city&apos;s greatest culinary strength is its diversity — 800 languages means 800 cuisines, and the best food is often in the cheapest, most unassuming places.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Joe\u2019s Pizza",
                  t: "Classic NYC slice \u00b7 Greenwich Village",
                  d: "The consensus gold standard for New York pizza by the slice. Thin crust, perfect cheese pull, $3.50 per slice. The Carmine Street location is the original. No frills, no seating, just exceptional pizza. This is the canonical New York food experience.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Ess-a-Bagel",
                  t: "Iconic bagel shop \u00b7 Midtown (3rd Ave & 21st St)",
                  d: "New York bagels are genuinely different from everywhere else — the water, the kettling process, and the baking method produce a dense, chewy result no other city replicates. Bagel with cream cheese and lox: $10\u201314. This is the correct New York breakfast.",
                  b: "Essential NYC",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Joe\u2019s Shanghai",
                  t: "Soup dumplings \u00b7 Chinatown",
                  d: "Famous for xiaolongbao (soup dumplings, $12 for 8 pieces). The broth inside each dumpling bursts when you bite — let it cool slightly or you\u2019ll burn your tongue. Cash preferred. The Chinatown location is the original and the best.",
                  b: "Best dumplings",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Los Tacos No. 1",
                  t: "Mexican tacos \u00b7 Chelsea Market",
                  d: "Excellent adobada and carne asada tacos at $4\u20136 each in Chelsea Market. The corn tortillas are made fresh. A solid, fast lunch stop between the High Line and the Whitney Museum.",
                  b: "Best quick lunch",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Le Bernardin",
                  t: "Michelin 3-star French seafood \u00b7 Midtown",
                  d: "Eric Ripert\u2019s legendary restaurant — three Michelin stars since 2005, regularly ranked in the world\u2019s top 10. The lunch prix-fixe ($60\u201380) is significantly more affordable than dinner ($185+ tasting menu). Reserve 6\u20138 weeks in advance.",
                  b: "Special occasion",
                  c: "bg-purple-50 border-purple-200",
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
            destination="New York City"
            hotels={[
              {
                name: "The Plaza",
                type: "Luxury icon \u00b7 Fifth Avenue & Central Park",
                price: "From $800/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/the-plaza.html?aid=2820480",
              },
              {
                name: "Pod 51",
                type: "Mid-range micro hotel \u00b7 Midtown East",
                price: "From $120/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/us/pod-51.html?aid=2820480",
              },
              {
                name: "citizenM New York Bowery",
                type: "Design hotel \u00b7 Lower East Side",
                price: "From $160/night",
                rating: "4",
                badge: "Best rooftop",
                url: "https://www.booking.com/hotel/us/citizenm-new-york-bowery.html?aid=2820480",
              },
              {
                name: "HI NYC Hostel",
                type: "Budget hostel \u00b7 Upper West Side",
                price: "From $45/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hi-new-york-city.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Statue of Liberty & Ellis Island Tour",
                duration: "4 hrs",
                price: "From $24/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=statue+of+liberty+tour+new+york&partner_id=PSZA5UI",
              },
              {
                name: "Top of the Rock Observation Deck",
                duration: "1.5 hrs",
                price: "From $40/person",
                badge: "Best view",
                url: "https://www.getyourguide.com/s/?q=top+of+the+rock+new+york&partner_id=PSZA5UI",
              },
              {
                name: "Broadway Show Tickets",
                duration: "2.5 hrs",
                price: "From $80/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=broadway+show+new+york&partner_id=PSZA5UI",
              },
              {
                name: "NYC Food Tour — Greenwich Village",
                duration: "3 hrs",
                price: "From $65/person",
                url: "https://www.getyourguide.com/s/?q=new+york+food+tour+greenwich+village&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in New York City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍕",
                  title: "Eating in Times Square",
                  desc: "Every restaurant in and immediately around Times Square charges 2\u20133x the normal NYC price for demonstrably worse food. Walk 3 blocks west to 9th Ave (Hell\u2019s Kitchen) or east toward 6th Ave and prices drop immediately. The rule: if you can see an LED billboard from your table, you\u2019re paying the tourist premium.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗽",
                  title: "Not Booking Statue of Liberty Tickets in Advance",
                  desc: "Ferry tickets at statuecruises.com sell out 2 weeks ahead in peak season. Reserve Access (pedestal/crown) sells out months in advance \u2014 crown access can require a 4\u20135 month lead time. Same-day tickets are almost never available April through October. Book before you leave home.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚇",
                  title: "Not Getting a Transit Card at the Airport",
                  desc: "NYC subway stations have OMNY tap-to-pay readers, but the 7-day unlimited MetroCard ($34) pays for itself after 12 rides. If you\u2019re riding the subway twice daily for 5 days, it\u2019s almost always worth it. Buy at any subway station vending machine. The AirTrain from JFK requires a separate $8.25 fee.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌆",
                  title: "Skipping the Outer Boroughs",
                  desc: "Brooklyn, Queens, and the Bronx contain some of the best food, art, and neighbourhoods in the entire USA. Flushing in Queens has better Chinese and Korean food than most Asian cities. Williamsburg and DUMBO have more interesting art galleries per square block than Chelsea. Manhattan-only travellers see a fraction of New York.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🌅",
                  title: "Going to the Empire State Building at Midday",
                  desc: "The Empire State Building ($44 general) has the most famous name but the worst value among NYC\u2019s observation decks. Midday haze reduces visibility and the sun is directly overhead (flat light for photos). Go at night for the illuminated skyline, or choose Top of the Rock at sunset \u2014 it costs less, has shorter queues, and you can see the Empire State Building itself in the frame.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for New York City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🥯",
                  title: "New York Bagel Culture Is Real",
                  desc: "New York bagels are genuinely different from everywhere else \u2014 the water, the kettling process, and the baking method produce a dense, chewy result that no other city replicates. Ess-a-Bagel (3rd Ave), Murray\u2019s Bagels (Greenwich Village), or Black Seed Bagels. A bagel with cream cheese and lox costs $10\u201314 and is the correct New York breakfast.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍕",
                  title: "The Dollar Slice Is NYC\u2019s Greatest Institution",
                  desc: "Pizza by the slice at any corner pizzeria costs $2\u20134. Joe\u2019s Pizza (Carmine St) is the consensus gold standard at $3.50/slice. Prince Street Pizza in Nolita for the spicy Sicilian square ($6\u20138). One slice plus a bodega drink is $5\u20136 for a complete lunch.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌃",
                  title: "Best Views by Time of Day",
                  desc: "Top of the Rock at sunset: best overall \u2014 Empire State Building in frame, sky transitions from gold to navy. One World Observatory during daytime: clearest visibility. Empire State Building at night: classic illuminated skyline. Staten Island Ferry: always free, Lady Liberty close up. Brooklyn Heights Promenade at golden hour: the most romantic and underrated.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "✈️",
                  title: "Airport to Manhattan Without Getting Ripped Off",
                  desc: "JFK: AirTrain ($8.25) + subway ($2.90) = $10.75 total, 60\u201375 minutes. Yellow cab flat rate $70 plus tolls and tip ($85\u201395). LaGuardia: M60 bus ($2.90) or taxi ($35\u201345). Newark: NJ Transit + AirTrain ($17.50) or taxi ($60\u201380). The subway is always faster than road during rush hour.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💰",
                  title: "Free New York Is World-Class",
                  desc: "Staten Island Ferry (free, 24/7, Statue of Liberty views), Central Park (843 acres, free), the High Line (free), Brooklyn Bridge walk (free), 9/11 Memorial plaza (free). The Met and American Museum of Natural History are pay-what-you-wish. MoMA is free every Friday evening 5:30\u20139pm. A $0 day in NYC can be one of the best travel days of your life.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💵",
                  title: "Tipping Is Not Optional",
                  desc: "NYC tipping is the primary compensation system for service workers. Restaurants: 20% minimum, 25% for good service. Bars: $1\u20132 per drink. Taxis: 15\u201320%. Hotel porters: $2\u20133 per bag. Housekeeping: $3\u20135/night. Refusing to tip at a sit-down restaurant is considered extremely rude \u2014 the server was counting on that income.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="New York City" />

          {/* Combine With */}
          <CombineWith currentSlug="new-york-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is New York City safe for tourists?",
                  a: "NYC is substantially safer than its reputation suggests \u2014 crime statistics have improved dramatically since the 1990s. The main practical risks are pickpockets in crowded areas (Times Square, the subway at peak hours) and petty theft. At night, use the middle of the subway train near the conductor car. Tourist areas (Midtown, Lower Manhattan, the Village, DUMBO) have low crime rates relative to any global megacity.",
                },
                {
                  q: "What is the best area to stay in New York City?",
                  a: "Midtown (34th\u201359th St): closest to Times Square, Rockefeller Center, and Central Park. Chelsea / West Village: the best neighbourhood base for first-timers with great transport, restaurants, and the High Line nearby. Lower Manhattan: quieter evenings, excellent access to the 9/11 Memorial and Statue of Liberty ferry. Williamsburg (Brooklyn): trendy, great food, 15 minutes by L train to Manhattan.",
                },
                {
                  q: "How many days do I actually need in New York City?",
                  a: "5 days is the ideal first visit \u2014 it covers Manhattan\u2019s major landmarks plus at least one full Brooklyn day without rushing. 3 days forces very hard choices (either the Statue of Liberty or Brooklyn, not both). 7+ days opens up Queens, the Bronx, deeper Brooklyn neighbourhoods, and day trips to the Catskills or Philadelphia (90 minutes by Amtrak).",
                },
                {
                  q: "When is the best time to visit New York City?",
                  a: "April\u2013June and September\u2013November are optimal. Spring brings cherry blossoms in Central Park and comfortable temperatures (12\u201322\u00b0C). October is arguably the best single month \u2014 mild weather, spectacular fall foliage, and manageable crowds. Summer (June\u2013August) is hot and crowded but the free outdoor events are excellent. December has holiday magic but cold and expensive.",
                },
                {
                  q: "How do I get from JFK Airport to Manhattan?",
                  a: "Cheapest: AirTrain to Jamaica station ($8.25) then E/J/Z subway to Midtown ($2.90) = $10.75 total, 60\u201375 minutes. Yellow cab flat rate: $70 plus $8 tolls and 15\u201320% tip = $85\u201395 total. Uber/Lyft: $45\u201390+ depending on surge. LIRR from the Jamaica hub is $12\u201315 to Penn Station for Midtown West.",
                },
                {
                  q: "Is New York City expensive? What can I do on a budget?",
                  a: "NYC is expensive by global standards but has extraordinary free options. The Staten Island Ferry, Central Park, the High Line, Brooklyn Bridge walk, and multiple pay-what-you-wish museums cost nothing. Food budget: $2\u20134 for a pizza slice, $10 for a deli sandwich, $14 for ramen. A realistic good-time budget is $80\u2013130/day if you\u2019re disciplined about where you eat and stay.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your New York City trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-new-york", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/new-york-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-new-york", label: "How to get there", icon: "✈️" },
                { href: "/blog/new-york-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="new-york-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Las Vegas in 4 Days — Shows &amp; Desert", href: "/blog/las-vegas-4-days" },
                { label: "Boston in 3 Days — History &amp; Seafood", href: "/blog/boston-3-days" },
                { label: "Washington DC in 3 Days — Monuments", href: "/blog/washington-dc-3-days" },
                { label: "San Francisco in 4 Days — Bay &amp; Bridges", href: "/blog/san-francisco-4-days" },
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
