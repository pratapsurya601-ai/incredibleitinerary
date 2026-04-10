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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const BOSTON_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Boston Actually Is" },
  { id: "season",     emoji: "🍂",  label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Boston 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Boston in 3 Days — Freedom Trail, Fenway Park and clam chowder&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/boston-3-days"
        imageUrl="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80"
        description="Boston in 3 Days: Freedom Trail, Fenway Park, Harvard, and the best clam chowder in New England — complete travel guide with budget breakdown."
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
export default function BostonClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BOSTON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="boston freedom trail massachusetts usa historic"
            fallback="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1600&q=80"
            alt="Boston Freedom Trail historic buildings Massachusetts USA"
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
              <span className="text-white/70">Boston 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Boston in 3 Days:
                <em className="italic text-amber-300"> Freedom Trail, Fenway &amp; the Best Clam Chowder in New England</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Walk 400 years of American history on a red-brick line, eat clam chowder from a sourdough bread bowl, and catch the Red Sox at the oldest ballpark in America. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇺🇸 Massachusetts, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Walking a 2.5-mile red-brick line through 400 years of American history, eating clam chowder from a sourdough bread bowl at Faneuil Hall, watching the Boston Red Sox at Fenway Park — the oldest ballpark in America — and punting around Harvard in Cambridge. Boston is America&apos;s most walkable and most historic city, and three days is exactly enough to feel like you&apos;ve understood it.
            </p>
          </blockquote>

          {/* ── WHAT BOSTON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Boston Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Boston is the oldest major city in the United States and the place where American independence was effectively born — the Boston Massacre, the Boston Tea Party, Paul Revere&apos;s midnight ride, the Battle of Bunker Hill. The Freedom Trail, a 2.5-mile red-brick line through downtown, connects 16 of these sites in a single walkable route. No other city in America can do anything like it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              But Boston is also a genuinely contemporary city. Harvard and MIT in Cambridge make it one of the world&apos;s great university cities. The North End — Boston&apos;s Little Italy — has been continuously Italian-American since the early 1900s and has some of the finest cannoli and pasta in the country. Fenway Park, opened in 1912, is the oldest ballpark in Major League Baseball and generates a religious devotion in Red Sox fans that has to be experienced to be understood.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city is genuinely walkable — most of what a visitor wants is within 2 miles of Boston Common. The MBTA subway (the T) is America&apos;s oldest and covers everything else. Unlike New York or Los Angeles, Boston rewards slow exploration on foot. Give it three days.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BOS (Logan)" />
              <StatCard icon="🍂" label="Best Season" value="Sep–Nov or Apr–Jun" />
              <StatCard icon="🏛️" label="Trail Sites" value="16 Historic" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍂 Best Time to Visit Boston</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Fall — Best Season",
                  d: "September brings warm days and cool evenings, Red Sox playoff runs, and the start of the spectacular New England fall foliage. October is peak foliage month — the Arnold Arboretum and Public Garden turn gold and red. The annual Chowderfest at Boston Common is in October. November is quieter and cheaper with late foliage still visible.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Beautiful and Mild",
                  d: "April and May bring Boston Marathon energy (third Monday in April), blooming Public Garden cherry trees, and comfortable temperatures (12–22°C). June is excellent — warm, long days, and the Red Sox season is in full swing. Spring is arguably the most photogenic season for the Public Garden and Boston Common.",
                  b: "Excellent",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Busy and Humid",
                  d: "July and August are hot (25–32°C) and humid. Hotels are at full price and the Freedom Trail gets very crowded by midday. The upside: outdoor concerts on the Charles River Esplanade, full Red Sox schedule, and evening harbour breezes. Cape Cod day trips are easiest in summer. Book accommodation 6–8 weeks ahead.",
                  b: "Peak season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "❄️",
                  t: "Winter — Cold but Cheap",
                  d: "Boston winters are genuinely cold with regular snow and wind off the harbour (temperatures −5 to 5°C). But hotel prices drop 35–40%, museum lines disappear, and the city looks magical under snow. Boston Common has an outdoor ice rink from late November. The Freedom Trail sites are quiet. Pack very warm clothes and waterproof boots.",
                  b: "Budget season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Boston</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Logan International Airport (BOS) is just 3 miles from downtown. The <strong className="font-medium">Silver Line bus</strong> runs free from all terminals to South Station — no other major US airport offers free transit into the city centre.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Silver Line (free from airport) — Recommended",
                  d: "Take the Silver Line SL1 bus from any Logan terminal directly to South Station — free from the airport (pay $2.40 going back). From South Station, connect to the Red Line or walk to Downtown Crossing in 10 minutes. Total airport-to-hotel time: 25–35 minutes for most Back Bay and Downtown locations.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚇",
                  t: "Blue Line from Airport Station",
                  d: "A free shuttle bus connects Logan terminals to Airport Station on the MBTA Blue Line. Take the Blue Line to Government Center (6 stops, ~15 minutes), then change to the Green or Red Line. Cost: $2.40 on a Charlie Card. Useful if staying near Beacon Hill or the North End.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Taxi or Rideshare",
                  d: "Taxis and Uber/Lyft to most downtown hotels cost $25–35 and take 15–30 minutes in normal traffic. On game days or during rush hour (7–9am, 4–7pm) this can double. Not recommended over the Silver Line unless you have heavy luggage or are travelling in a group.",
                  b: "Convenient",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🇮🇳",
                  t: "Flying from India",
                  d: "Non-stop flights: Air India operates Delhi (DEL) → Boston (BOS) seasonally. Otherwise, most India–Boston routes connect through London Heathrow (BA/VS), Frankfurt (LH), Abu Dhabi (EY), or Dubai (EK). Total journey: 18–24 hours depending on connection. BOS is often cheaper to reach than JFK or EWR for East India travellers.",
                  b: "India routes",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Boston Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around Boston&apos;s walkability — Day 1 covers the Freedom Trail and North End, Day 2 heads to Cambridge and Back Bay, Day 3 takes in Fenway and the South End. All prices in USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Freedom Trail · Paul Revere House · Boston Common · Faneuil Hall · North End"
                cost="$25–45 (food + transit + optional admissions)"
                items={[
                  "Arrive at Logan Airport and take the free Silver Line to South Station. Get a Charlie Card at the South Station information desk ($2.40/ride, saves $0.60 vs paper ticket). Check into your hotel — HI Boston hostel from $45/night or a Back Bay hotel from $150.",
                  "Start the Freedom Trail at Boston Common — pick up the red-brick line at the Visitor Center on Tremont Street. The 2.5-mile trail connects 16 historic sites; walk it at your own pace in 3–4 hours or take a free ranger-led tour departing from the State Street Visitor Center.",
                  "Massachusetts State House: the gold-domed capitol building on Beacon Hill, free to enter on weekdays. The House and Senate chambers are open for viewing when not in session.",
                  "Park Street Church and Granary Burying Ground: the final resting place of Samuel Adams, Paul Revere, John Hancock, and the victims of the Boston Massacre. Free, and genuinely moving.",
                  "King&apos;s Chapel and Burying Ground: Boston&apos;s oldest cemetery and first Anglican church. Free outside, $2 suggested donation inside.",
                  "Old State House ($12 admission or admire the exterior free): where the Declaration of Independence was first read aloud to Bostonians in 1776. The colonial-era building is now marooned in a forest of glass towers — one of Boston&apos;s best visual contrasts.",
                  "Cross into the North End for lunch: Mike&apos;s Pastry for a $3.50 cannoli (the North End cannoli rivalry is real — Mike&apos;s vs Modern Pastry, try both). Grab a slice at Regina Pizzeria on Thacher Street (est. 1926, the original location, $4–6/slice).",
                  "Paul Revere House ($6 admission): the oldest surviving structure in downtown Boston, built around 1680. Small but worth it for context on the midnight ride.",
                  "Old North Church: &apos;One if by land, two if by sea.&apos; Basic visit free, tower tour $8.",
                  "Evening: Faneuil Hall Marketplace for dinner — clam chowder in a sourdough bread bowl from Boston Chowda ($14) is the tourist-but-correct choice. The hall itself is free and always has street performers.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Harvard &amp; MIT Cambridge · Quincy Market · Boston Public Garden · Beacon Hill"
                cost="$30–55 (transit + optional museums + food)"
                items={[
                  "Take the Red Line from Downtown Crossing or Park Street to Harvard Square (~$2.40, 20 minutes). Harvard Square is one of the great urban spaces in the US — bookshops, coffee, street musicians, and the gates to Harvard Yard.",
                  "Harvard Yard: walk the free grounds. Massachusetts Hall (1720, the oldest university building in the US), Johnston Gate, the statue of John Harvard (everyone rubs the shoe for luck), Widener Library. No ticket needed.",
                  "Harvard Art Museums ($20 admission): particularly the Fogg Museum with its stunning Renzo Piano-designed courtyard. If on a tight budget, skip the museums — the free grounds are the real draw.",
                  "Harvard Museum of Natural History ($15): the glass flowers exhibit alone justifies the admission — 3,000 botanically accurate hand-blown glass models created 1887–1936. Genuinely extraordinary.",
                  "Walk or take the Red Line two stops to MIT campus (free to explore). See the Great Dome, the Kresge Auditorium, and Frank Gehry&apos;s Stata Center — one of the most provocative buildings in America.",
                  "Lunch near MIT: Clover Food Lab, innovative vegetarian fast food, ~$12. Or head back to Harvard Square for Flour Bakery ($14).",
                  "Return to Boston: Boston Public Garden is free and one of the most beautiful urban parks in America. The Swan Boats run April–September ($4.50). The bronze Make Way for Ducklings sculptures are a Boston institution.",
                  "Quincy Market inside Faneuil Hall: good for a quick mid-afternoon snack — lobster rolls, clam chowder, cannoli, and a dozen other options. More variety and slightly better value than the North End for a quick bite.",
                  "Evening: stroll Beacon Hill — the gas-lit 19th-century brownstone streets around Acorn Street and Mount Vernon Street are the most photographed in Boston. Dinner at 75 Chestnut (~$25pp) or takeout from Paramount (~$14).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Fenway Park · Museum of Fine Arts · Newbury Street · Cape Cod Option"
                cost="$40–70 (Fenway + MFA + food)"
                items={[
                  "Fenway Park tour ($26, self-guided or guided, 1 hour): the oldest Major League ballpark in America, opened April 20, 1912. The Green Monster (the left field wall, 37 feet high) is the most iconic structure in American sports. Standing on the warning track looking out at it is a genuine bucket-list moment.",
                  "If there&apos;s a day game: buy standing-room tickets at the box office on game day from $30. Red Sox vs Yankees games sell out weeks in advance — book on redsox.com as early as possible.",
                  "Walk through the Fenway neighbourhood to the Museum of Fine Arts ($27 admission): one of America&apos;s great encyclopedic art museums. Egyptian mummies, Monet&apos;s water garden series, the John Singer Sargent murals, and one of the best American art wings in the country.",
                  "Walk from the MFA down Huntington Avenue to the Back Bay. Lunch on Newbury Street — Parish Cafe (sandwiches designed by Boston&apos;s celebrity chefs, ~$18) or Trident Booksellers &amp; Café (books + food, ~$15).",
                  "Newbury Street shopping: 8 blocks from high-end (Hermès, Chanel near Arlington Street) to vintage and independent boutiques near Massachusetts Avenue. Window-shopping is free.",
                  "Optional Day 3 alternative — Cape Cod day trip: if you have a car or book a day tour, Cape Cod is 70–90 miles from Boston. Provincetown at the tip is the most dramatic destination. The Cape Cod Rail Trail (a converted railway line) is excellent for cycling. This replaces the city-based Day 3 but is highly worthwhile in summer.",
                  "Final dinner in the North End: Neptune Oyster (cash only, raw bar plates $25+, absolutely worth the wait) or Mamma Maria for upscale Italian (~$55pp). Or Legal Sea Foods at various locations — the most reliable clam chowder in the city, consistently winning the annual Chowderfest.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Boston" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Boston Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. All admission prices as of 2026 in USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Freedom Trail",
                  e: "Free to walk · Guided tour $0–28",
                  d: "The 2.5-mile red-brick line connecting 16 historic sites is the single best self-guided heritage walk in the USA. Free NPS ranger tours depart from the State Street Visitor Center. Private costumed guides available through GetYourGuide (~$28pp). The whole trail takes 3–4 hours at a comfortable pace.",
                  t: "Must do · Half day",
                },
                {
                  n: "Faneuil Hall &amp; Quincy Market",
                  e: "Free entry",
                  d: "Faneuil Hall itself has been a public meeting space since 1742 — Sam Adams spoke here, the abolitionists met here. The adjacent Quincy Market is the best food hall in Boston. Clam chowder in a bread bowl from Boston Chowda is the correct order. Busy at lunch but worth it.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Fenway Park",
                  e: "$26 (tour) · $30–400 (game)",
                  d: "America&apos;s oldest ballpark (1912) and one of the great sporting cathedrals in the world. The self-guided or guided 1-hour tour covers the dugout, press box, Monster Seats, and warning track. A Red Sox game here is a completely different (and much better) experience than the tour — buy tickets at redsox.com.",
                  t: "Must do · 1–3 hrs",
                },
                {
                  n: "Harvard University Campus",
                  e: "Free to walk",
                  d: "Harvard Yard is freely accessible and one of the most atmospheric university campuses in the world. Massachusetts Hall (1720) is the oldest university building in the US. The Harvard Art Museums ($20) and Harvard Museum of Natural History ($15) are both exceptional. Walk to MIT (2 miles or two Red Line stops) to complete the Cambridge picture.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Isabella Stewart Gardner Museum",
                  e: "$20–30 (timed entry)",
                  d: "One of the most extraordinary private art collections in the world, housed in a Venetian-palazzo recreation in Boston&apos;s Fenway neighbourhood. Site of the famous 1990 art heist — the empty frames still hang where the stolen Rembrandt and Vermeer once were. Book timed-entry tickets at gardnermuseum.org. The courtyard garden is spectacular year-round.",
                  t: "Unmissable · 1.5–2 hrs",
                },
                {
                  n: "Paul Revere House",
                  e: "$6",
                  d: "The oldest surviving structure in downtown Boston, built c.1680 and home to Paul Revere at the time of his 1775 midnight ride. Small but absorbing — the rooms are furnished as they would have been in the 18th century. The North End location makes it easy to combine with lunch.",
                  t: "30–45 mins",
                },
                {
                  n: "Boston Common &amp; Public Garden",
                  e: "Free",
                  d: "America&apos;s oldest public park (Boston Common, 1634) and one of its most beautiful (Public Garden, 1837). The Swan Boats operate April–September ($4.50). The Make Way for Ducklings sculptures are a delight. The Boston Common Frog Pond has a free spray pool in summer and ice skating in winter.",
                  t: "Morning walk · 1 hr",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: place.n }} />
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
            title="Boston — Freedom Trail, Fenway &amp; the North End"
            subtitle="America&apos;s most historic and walkable city."
            spots={[
              {
                name: "Freedom Trail Red Brick Path",
                query: "boston freedom trail red brick path historic downtown massachusetts",
                desc: "The 2.5-mile red-brick Freedom Trail winding through downtown Boston past 16 historic sites.",
              },
              {
                name: "Faneuil Hall Marketplace",
                query: "faneuil hall marketplace boston quincy market historic",
                desc: "Faneuil Hall — a public meeting place since 1742 and Boston&apos;s most visited landmark.",
              },
              {
                name: "Fenway Park Green Monster",
                query: "fenway park green monster boston red sox baseball stadium",
                desc: "The Green Monster — Fenway Park&apos;s iconic 37-foot left field wall, the most recognised structure in American sports.",
              },
              {
                name: "Harvard Yard Cambridge",
                query: "harvard yard cambridge massachusetts university historic buildings",
                desc: "Harvard Yard, home to the oldest university building in the United States (Massachusetts Hall, 1720).",
              },
              {
                name: "Boston Public Garden Swan Boats",
                query: "boston public garden swan boats spring cherry blossoms",
                desc: "The Boston Public Garden in spring — swan boats, blooming cherry trees, and the Make Way for Ducklings sculptures.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Boston is one of the more expensive US cities, but the Freedom Trail is free, Harvard is free to walk, and Boston Common costs nothing. The main costs are accommodation, restaurants, and museum admissions. All prices in USD.
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
                    ["🏨 Accommodation (per night)", "$45–65 (hostel)", "$150–220 (3-star)", "$380–700 (luxury)"],
                    ["🍽️ Food (per day)", "$25–35 (markets, bakeries)", "$55–80 (sit-down restaurants)", "$130–200 (fine dining)"],
                    ["🚇 Transport (per day)", "$10–15 (Charlie Card)", "$20–35 (subway + taxi)", "$55–80 (town car)"],
                    ["🏛️ Activities (per day)", "$0–25 (Freedom Trail free)", "$25–55 (Fenway, MFA, Gardner)", "$80–200 (private guides, premium seats)"],
                    ["TOTAL (per day)", "$80–140", "$250–390", "$645–1,180"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–140/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm near South Station or Downtown Crossing. Walk the Freedom Trail (free), eat at Quincy Market and Flour Bakery, use the Charlie Card. Boston&apos;s walkability works strongly in a budget traveller&apos;s favour — you can see most of the best things for very little.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($250–390/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in Back Bay or Beacon Hill, eat at North End restaurants and Legal Sea Foods, do the Fenway tour, MFA, and Gardner Museum. A Red Sox game at Fenway is the single best splurge in Boston — even cheap tickets ($30 standing room) deliver an unforgettable experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Boston</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Boston&apos;s four best neighbourhoods for tourists are Downtown/Beacon Hill (most central), Back Bay (most convenient), Cambridge/Harvard Square (best for university area), and the South End (best restaurant scene). All are well connected by the T.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Downtown / Beacon Hill",
                  type: "Most central · Walking distance to Freedom Trail",
                  price: "From $120/night",
                  badge: "Best location",
                  desc: "The closest neighbourhood to the Freedom Trail, North End, and Faneuil Hall. Beacon Hill&apos;s gas-lit brownstone streets are the most atmospheric in the city. Mid-range options include the Boxer Boston and Godfrey Hotel. Budget: HI Boston hostel on Stuart Street is well-run and central.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Back Bay",
                  type: "Most convenient · Near Newbury St &amp; Fenway",
                  price: "From $150/night",
                  badge: "Best all-rounder",
                  desc: "Boston&apos;s most hotel-dense neighbourhood, centred on Copley Square and Newbury Street. Walking distance to the Public Garden, Fenway Park, and the MFA. The Copley Plaza (historic, Fairmont-managed) and the Lenox are the Back Bay classics. Excellent Green Line and Orange Line access.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Cambridge / Harvard Square",
                  type: "University area · Best for intellectual travellers",
                  price: "From $140/night",
                  badge: "Most unique vibe",
                  desc: "Staying in Cambridge puts you in the heart of Harvard and MIT country. The Charles Hotel (Harvard Square) is the best hotel in Cambridge — excellent restaurant and jazz club attached. Harvard Square itself has terrific independent bookshops, coffee, and restaurants. A quick Red Line ride to downtown Boston.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "South End",
                  type: "Best restaurants · Artsy neighbourhood",
                  price: "From $130/night",
                  badge: "Best food scene",
                  desc: "Boston&apos;s most vibrant dining neighbourhood, with a dense concentration of excellent restaurants along Tremont Street and Columbus Avenue. Slightly less convenient for the main tourist sights but well connected by the Orange Line. Great for a second or third visit when you want to experience Boston beyond the tourist trail.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: stay.type }} />
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Boston</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Boston&apos;s food identity is built around New England seafood — clam chowder, lobster rolls, oysters, and fish. The North End is the Italian-American heart of the city. The South End has the most innovative restaurant scene. All prices in USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Union Oyster House",
                  t: "New England clam chowder · Since 1826",
                  d: "America&apos;s oldest continuously operating restaurant (since 1826), right on the Freedom Trail. The clam chowder here is rich, creamy, and historically correct — Daniel Webster allegedly drank six tumblers of chowder per sitting. A Boston institution that earns its reputation. Chowder $12, full dinner ~$45pp.",
                  b: "Historic must",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Neptune Oyster",
                  t: "Lobster roll &amp; raw bar · North End",
                  d: "The best lobster roll in Boston — hot with butter or cold with mayo, both exceptional. Cash only, no reservations, expect a wait (30–45 minutes on weekends). The raw bar is outstanding and the room is tiny and perfect. Lobster roll $28–34, oysters $3–4 each. One of the few tourist-adjacent restaurants that genuinely lives up to the hype.",
                  b: "Best lobster roll",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Mike&apos;s Pastry",
                  t: "Cannoli &amp; Italian pastries · North End",
                  d: "The North End cannoli rivalry (Mike&apos;s vs Modern Pastry) is a genuine Boston institution. Mike&apos;s has the longer line and the more varied fillings — chocolate chip, pistachio, lobster tail. Get the cannoli ($3.50) and the sfogliatelle if they&apos;re available. The line moves quickly. Take it to the street to eat.",
                  b: "North End classic",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Legal Sea Foods",
                  t: "Classic New England seafood · Multiple locations",
                  d: "The most reliable New England seafood restaurant in Boston — Legal has been winning the Chowderfest regularly since it started. Not the cheapest or most glamorous option, but the chowder ($10), the broiled scrod, and the lobster bisque are consistently excellent. Locations at Copley Place, Long Wharf, and Cambridge. Dinner ~$40–55pp.",
                  b: "Most consistent",
                  c: "bg-green-50 border-green-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: r.n }} />
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
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
            destination="Boston Massachusetts"
            hotels={[
              {
                name: "The Liberty Hotel",
                type: "Luxury · Former Charles Street Jail · Beacon Hill",
                price: "From $380/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/us/the-liberty-boston.html?aid=2820480",
              },
              {
                name: "Copley Plaza (Fairmont)",
                type: "Historic luxury · Back Bay",
                price: "From $320/night",
                rating: "5",
                badge: "Most classic",
                url: "https://www.booking.com/hotel/us/fairmont-copley-plaza-boston.html?aid=2820480",
              },
              {
                name: "The Lenox Hotel",
                type: "Boutique historic · Back Bay",
                price: "From $250/night",
                rating: "4",
                badge: "Best value luxury",
                url: "https://www.booking.com/hotel/us/lenox.html?aid=2820480",
              },
              {
                name: "HI Boston Hostel",
                type: "Hostel · Downtown · Stuart Street",
                price: "From $45/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hi-boston.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Freedom Trail Guided Walking Tour",
                duration: "2 hrs",
                price: "From $28/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=boston+freedom+trail+tour&partner_id=PSZA5UI",
              },
              {
                name: "Fenway Park Tour",
                duration: "1 hr",
                price: "From $26/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=fenway+park+tour+boston&partner_id=PSZA5UI",
              },
              {
                name: "Boston Duck Tours",
                duration: "80 mins",
                price: "From $44/person",
                url: "https://www.getyourguide.com/s/?q=boston+duck+tour&partner_id=PSZA5UI",
              },
              {
                name: "Harvard & MIT Campus Walking Tour",
                duration: "2.5 hrs",
                price: "From $22/person",
                url: "https://www.getyourguide.com/s/?q=harvard+mit+cambridge+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Boston</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚗",
                  title: "Trying to Drive in Boston",
                  desc: "Boston&apos;s road system famously defies logic — it was originally built on colonial cow paths and expanded without planning for three centuries. Parking costs $30–50/day in downtown garages. Driving is stressful and unnecessary. The MBTA subway, buses, and walking cover everything a visitor needs. If renting a car, pick it up on the day you leave the city for a New England road trip.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎫",
                  title: "Not Getting a Charlie Card",
                  desc: "Boston&apos;s MBTA charges $2.40 with a reusable Charlie Card vs $3.00 with a single-use paper Charlie Ticket — a $0.60 saving per ride. Pick up a Charlie Card at the visitor centre or any staffed station for free. A 7-day unlimited pass ($22.50) pays off after 10 rides and eliminates the need to think about fares for your whole trip.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⚾",
                  title: "Not Booking Fenway Tickets Early",
                  desc: "Red Sox home games sell out weeks in advance, especially against the Yankees or during playoff season. Book directly at redsox.com as soon as you know your travel dates. The Fenway Park tour ($26) is always available walk-up, but if you want to watch a game — the only way to truly understand the ballpark — plan 4–6 weeks ahead in peak season.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🦞",
                  title: "Buying Lobster Rolls in Tourist Traps",
                  desc: "Faneuil Hall Marketplace is convenient but lobster rolls here run $35+ for mediocre quality. Go instead to Neptune Oyster in the North End ($28–34, genuinely exceptional), James Hook &amp; Co. on Atlantic Avenue ($28–32, waterfront fish shack), or Row 34 in the Seaport. The extra 10-minute walk is absolutely worth it.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌨️",
                  title: "Underestimating Boston Winters",
                  desc: "December through March can be brutally cold — temperatures regularly drop below freezing with heavy snow and piercing harbour winds. Boston is still very visitable in winter (museums are quiet and hotels are 40% cheaper), but pack a heavy coat, hat, gloves, and waterproof boots. November onwards requires serious cold-weather preparation.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Boston</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🧭",
                  title: "Walk the Freedom Trail at Your Own Pace",
                  desc: "The Freedom Trail is marked by a red-brick or painted red line in the pavement. Download the free NPS Freedom Trail app for audio narration at each of the 16 sites — it&apos;s genuinely excellent. You can walk the whole trail in 3–4 hours or spread it over a morning. Rangers give free guided tours from the State Street Visitor Center at scheduled times.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🥣",
                  title: "The Best Clam Chowder in Boston",
                  desc: "The annual Chowderfest at Boston Common (October) crowns a winner, but year-round consensus: Legal Sea Foods (most consistent), Neptune Oyster (richest, best North End version), Boston Chowda at Quincy Market (excellent in a sourdough bread bowl, tourist-friendly). Avoid anything pre-packaged at chain restaurants — chowder quality varies enormously.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛴️",
                  title: "Take the Harbour Ferry to Charlestown",
                  desc: "The MBTA Inner Harbour Ferry from Long Wharf to Charlestown Navy Yard costs $3.70 and takes 10 minutes. In Charlestown: the USS Constitution (Old Ironsides — the world&apos;s oldest commissioned naval vessel, free to tour) and Bunker Hill Monument (free, 294 steps to the top, panoramic views). Far more scenic than the bus and often missed by visitors.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏛️",
                  title: "Book Gardner Museum Tickets in Advance",
                  desc: "The Isabella Stewart Gardner Museum limits daily attendance to preserve its intimate atmosphere. Book timed-entry tickets at gardnermuseum.org before you travel. Visit on a weekday morning for the quietest experience in the Venetian-palazzo courtyard. The story of the 1990 art heist — the largest property crime in US history — makes every gallery more compelling.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍂",
                  title: "Fall Foliage in Boston (September–November)",
                  desc: "New England fall foliage peaks in mid-October. In the city itself: the Arnold Arboretum in Jamaica Plain (free, spectacular), the Public Garden, and the Commonwealth Avenue Mall all turn brilliant gold and red. For the full foliage experience, rent a car for a day trip to New Hampshire or Vermont — both are within 2 hours and absolutely worth it in peak foliage season.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎓",
                  title: "Harvard&apos;s Free Friday Afternoons",
                  desc: "The Harvard Art Museums (normally $20) offer free admission to Massachusetts residents and free admission to all visitors on Friday afternoons from 3–5pm (check current schedule at harvardartmuseums.org). The Harvard Museum of Natural History also has periodically free admission windows. Plan your Cambridge afternoon accordingly.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Boston" />

          {/* Combine With */}
          <CombineWith currentSlug="boston-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do I need in Boston?",
                  a: "Three days is the sweet spot for most visitors — enough to walk the Freedom Trail, visit Cambridge (Harvard and MIT), see Fenway Park, explore the North End, and visit one or two major museums. Extend to 4–5 days if you want to do a day trip to Salem (especially in Halloween season) or Cape Cod, or if you want to slow down and soak in each neighbourhood without rushing.",
                },
                {
                  q: "Is Boston worth visiting outside of Red Sox season?",
                  a: "Absolutely. The Freedom Trail, Harvard, the Gardner Museum, and the restaurant scene are year-round draws. Fall (September–November) has spectacular foliage and the October Chowderfest at Boston Common. Spring (April–June) brings milder weather, blooming Public Garden, and Boston Marathon energy. Winter (December–March) means 40% cheaper hotels, empty museums, and the Common ice rink.",
                },
                {
                  q: "How do I get from Logan Airport to downtown Boston?",
                  a: "Take the Silver Line SL1 bus (free from all Logan terminals) to South Station — under 15 minutes. From South Station, the Red Line connects to downtown, Back Bay, Cambridge, and Beacon Hill. Total cost from airport to most hotels: $2.40 on a Charlie Card. Taxis cost $25–35 but can be slower in traffic. The Silver Line plus subway is almost always the better option.",
                },
                {
                  q: "What&apos;s the best neighbourhood to stay in Boston?",
                  a: "Back Bay near Copley Square is the most convenient for mid-range travellers — central, walkable, close to Newbury Street and Fenway Park. Beacon Hill is the most atmospheric. Downtown Crossing is most affordable and best connected by transit. The South End has the best restaurant scene. For budget travellers, hostels near South Station have the easiest airport connections.",
                },
                {
                  q: "Do I need a car in Boston?",
                  a: "No. Boston is the most walkable major city in the USA and the MBTA covers everything a visitor needs. The Freedom Trail, North End, Fenway Park, Harvard Square, and the South End are all reachable by subway or on foot. A car is only useful if you&apos;re doing a day trip to Cape Cod, Salem, or New Hampshire for fall foliage — in which case rent one for that day only and return it before re-entering the city.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Boston trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/boston-freedom-trail-guide", label: "Freedom Trail guide", icon: "🧭" },
                { href: "/blog/boston-fenway-park-guide", label: "Fenway Park tips", icon: "⚾" },
                { href: "/blog/boston-north-end-food", label: "North End food", icon: "🍝" },
                { href: "/blog/new-england-fall-foliage", label: "Fall foliage guide", icon: "🍂" },
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
          <RelatedGuides currentSlug="boston-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New York City in 5 Days", href: "/blog/new-york-5-days" },
                { label: "Washington DC in 4 Days", href: "/blog/washington-dc-4-days" },
                { label: "Philadelphia Weekend Guide", href: "/blog/philadelphia-2-days" },
                { label: "USA East Coast Road Trip", href: "/blog/usa-east-coast-road-trip" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
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
