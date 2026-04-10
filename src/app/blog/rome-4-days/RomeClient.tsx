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
const ROME_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Rome Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Rome 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Rome in 4 Days — Colosseum, Vatican, Trastevere and the real Roman food scene&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/rome-4-days"
        imageUrl="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
        description="Rome in 4 Days: Colosseum, Vatican first entry, Trastevere food tour, Borghese Gallery — complete travel guide with budget breakdown in EUR and USD."
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">&#9679;</span>
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
export default function RomeClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ROME_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Rome" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rome colosseum ancient architecture italy golden hour"
            fallback="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=85"
            alt="Rome Colosseum at golden hour with ancient Roman architecture"
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
              <span className="text-white/70">Rome 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  History &amp; Culture
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Rome in 4 Days:
                <em className="italic text-amber-300"> Colosseum, Vatican &amp; the Eternal City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                First-entry Vatican at 7:30am, the Colosseum before the crowds, Trastevere&apos;s real trattorias, and Bernini sculptures that stop you mid-step. The complete guide with real prices in EUR &amp; USD.
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
              <span>🇮🇹 Lazio, Italy</span>
              <span>&middot;</span>
              <span>🗓 4 Days</span>
              <span>&middot;</span>
              <span>💰 From &euro;60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Sistine Chapel at 7:30am first entry versus 2pm general admission is the difference between a spiritual experience and a cattle pen. Book first entry. It&apos;s worth every extra euro. That single decision will define your entire Vatican day.
            </p>
          </blockquote>

          {/* ── WHAT ROME ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Rome Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Rome was the capital of an empire that controlled the entire Mediterranean world for over 500 years. At its height under Trajan around 117 CE, the city had over a million residents &mdash; a population Europe wouldn&apos;t see again until London in the 1800s. The Colosseum held 50,000 spectators. The Pantheon&apos;s unreinforced concrete dome, built in 125 CE, remains the largest of its kind nearly two thousand years later.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Then there&apos;s the Vatican &mdash; an independent city-state of 0.44 square kilometres containing the Sistine Chapel, St. Peter&apos;s Basilica (the largest church in the world), and one of the most important art collections on earth. Michelangelo&apos;s ceiling, Raphael&apos;s School of Athens, Bernini&apos;s colonnade &mdash; all within a 15-minute walk of each other.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But modern Rome is not a museum. It is a loud, chaotic, functioning Italian city where people still argue about which trattoria makes the best carbonara, where Vespas weave through ancient streets, where laundry hangs from windows overlooking ruins that predate Christ, and where the food alone is worth the flight. The trick is knowing what to book ahead, what to skip entirely, and where to eat without getting fleeced.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="Fiumicino (FCO)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr-May, Sep-Oct" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="Historic Centre" />
              <StatCard icon="💰" label="Budget From" value="&euro;60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Rome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013May",
                  i: "🌸",
                  t: "Spring \u2014 Best Season",
                  d: "15\u201325\u00B0C, long days, flowers everywhere. Tourist numbers are growing but manageable, especially in April. May gets busier. The ideal window for sightseeing, outdoor dining, and comfortable walking. Hotel prices are moderate before the summer spike.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "☀️",
                  t: "Autumn \u2014 Excellent",
                  d: "18\u201328\u00B0C, summer crowds thin out after mid-September. October is arguably the single best month \u2014 warm enough for outdoor dining, cool enough for all-day walking, and significantly cheaper than summer. The light is beautiful for photography.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "🔥",
                  t: "Summer \u2014 Hot & Crowded",
                  d: "30\u201338\u00B0C. Rome in August is genuinely brutal \u2014 cobblestones radiate heat, queues are longest, and many Romans leave the city entirely. If you must visit in summer, do all sightseeing before 11am and after 4pm. Vatican first entry at 7:30am becomes essential, not optional.",
                  b: "Manageable with planning",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov\u2013Mar",
                  i: "🌧️",
                  t: "Winter \u2014 Cheapest",
                  d: "5\u201315\u00B0C with occasional rain. The lowest prices of the year for flights and hotels. Major sites are far less crowded. December has Christmas markets and festive atmosphere. January\u2013February can be grey and damp but you&apos;ll have the Colosseum nearly to yourself on weekday mornings.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Rome</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Rome has two airports. <strong className="font-medium">Fiumicino (FCO)</strong> is the main international airport, 30km southwest. <strong className="font-medium">Ciampino (CIA)</strong> handles budget carriers like Ryanair, 15km southeast. Most long-haul flights land at Fiumicino.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fiumicino (FCO) \u2014 Leonardo Express",
                  d: "The Leonardo Express train runs non-stop from Fiumicino to Roma Termini every 15 minutes. \u20AC14 one-way, 32 minutes. Buy tickets at the station machines or online. This is the fastest and cheapest way into the city centre. Avoid taxis unless you have heavy luggage (fixed rate \u20AC50 to city centre).",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Ciampino (CIA) \u2014 Bus to Termini",
                  d: "SIT Bus or Terravision shuttle from Ciampino to Roma Termini: \u20AC6\u2013\u20AC8, 40 minutes depending on traffic. Buses depart every 30 minutes. Cheaper than a taxi (\u20AC30 fixed rate) but slower. If arriving late at night, pre-book a private transfer (\u20AC25\u2013\u20AC35).",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Rome Metro \u2014 Getting Around",
                  d: "Two main lines: Line A (Vatican\u2013Spanish Steps\u2013Termini) and Line B (Termini\u2013Colosseum\u2013EUR). \u20AC1.50 single ticket, \u20AC7 day pass. Roma Pass (\u20AC52/72hrs) includes unlimited metro plus 2 museum entries. Central Rome is very walkable \u2014 Colosseum to Vatican is 35 minutes on foot.",
                  b: "Essential info",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India \u2014 Visa + Flights",
                  d: "Indian passport holders need a Schengen visa \u2014 apply 3 months ahead at VFS Global, \u20AC80 fee, 15 working days processing. Book your VFS appointment before anything else as slots fill 6\u20138 weeks ahead in peak season. Direct flights from Delhi and Mumbai to Rome (8\u20139 hours) via Air India and ITA Airways. One-stop options via Dubai, Istanbul, or Doha are often significantly cheaper.",
                  b: "Plan 3 months ahead",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Rome Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is designed for mid-range travellers (&euro;120&ndash;200/day) but works for any budget &mdash; adjust restaurants and skip paid upgrades to bring it down to &euro;60/day, or add private guides and fine dining to push it higher.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Colosseum &middot; Roman Forum &middot; Palatine Hill &middot; Trevi Fountain"
                cost="&euro;40&ndash;65 / $43&ndash;70 USD (excl. accommodation)"
                items={[
                  "Buy the Colosseum + Forum + Palatine combo ticket online (\u20AC18 / $19.50 USD) \u2014 covers all three sites, valid 24 hours, skip-the-line entrance. The arena floor + underground upgrade (\u20AC24 / $26 USD) is worth it if available.",
                  "8:30am: Colosseum first entry. Arrive 15 minutes early. 1.5 hours inside is enough to see both levels, the arena floor (if booked), and the hypogeum. The morning light through the arches is the best for photography.",
                  "10:30am: Walk directly into Roman Forum + Palatine Hill (same ticket). Start with Palatine Hill for the panoramic views over the Forum, then descend through the ruins. 2 hours total. The Forum is larger than most people expect \u2014 wear good shoes.",
                  "1pm: Lunch in the Monti neighbourhood, a 5-minute walk from the Forum. Suppl\u00EC (fried rice balls) at La Punta for \u20AC1.50 each. Best cheap lunch in Rome. Avoid anything within sight of the Colosseum \u2014 triple the price, half the quality.",
                  "3pm: Trevi Fountain \u2014 arrive mid-afternoon for slightly thinner crowds than evening. The fountain is always crowded; there is no quiet time. Throw a coin with your right hand over your left shoulder. Free.",
                  "4pm: Spanish Steps (free) \u2014 walk down Via dei Condotti for window shopping at Gucci, Valentino, and Prada. The steps themselves are pleasant for 10 minutes, no more.",
                  "Evening: Pizza al taglio in Trastevere \u2014 walk across the river for Rome\u2019s most photogenic neighbourhood. Pizza by weight from a hole-in-the-wall costs \u20AC3\u20135. Eat standing up like a Roman.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Vatican Museums &middot; Sistine Chapel &middot; St. Peter&apos;s Basilica"
                cost="&euro;55&ndash;85 / $59&ndash;92 USD (excl. accommodation)"
                items={[
                  "7:30am FIRST ENTRY to Vatican Museums (\u20AC38 / $41 USD) \u2014 book online 2\u20133 weeks ahead. This is the single most important booking of your Rome trip. The Sistine Chapel at 7:30am has fewer than 100 people. By 10am it\u2019s shoulder-to-shoulder with 2,000.",
                  "Spend 20 minutes in the Sistine Chapel before the crowds arrive. Look up: the ceiling took Michelangelo 4 years. The Last Judgment on the altar wall is the masterpiece. Photography is technically forbidden but everyone does it \u2014 no flash.",
                  "Exit through the side door directly into St. Peter\u2019s Basilica. Ask a guard \u2014 this shortcut skips the 45-minute outdoor queue entirely. Not all guards will let you through, but most do in the early morning.",
                  "St. Peter\u2019s Basilica: free entry. The scale is staggering \u2014 it is the largest church in the world. Climb the dome: \u20AC8 (551 stairs) or \u20AC10 (elevator to halfway, then 320 stairs). The view from the top is the single best panorama in Rome.",
                  "1pm: Lunch at Pizzarium Bonci near the Vatican \u2014 widely considered Rome\u2019s best pizza al taglio. Gabriele Bonci is a celebrity baker. \u20AC8\u201312 fills you up completely. 10-minute walk from St. Peter\u2019s.",
                  "3pm: Castel Sant\u2019Angelo (\u20AC17 / $18.50 USD, or free with Roma Pass). Former papal fortress, now a museum. The rooftop terrace has Tiber views and a surprisingly good cafe. 1\u20131.5 hours.",
                  "Evening: Walk Ponte Sant\u2019Angelo at sunset \u2014 Bernini\u2019s angel statues line the bridge, with St. Peter\u2019s dome framed behind. One of Rome\u2019s most photogenic spots. Free.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Trastevere &middot; Pantheon &middot; Piazza Navona &middot; Campo de&apos; Fiori"
                cost="&euro;30&ndash;55 / $32&ndash;59 USD (excl. accommodation)"
                items={[
                  "9am: Cross into Trastevere \u2014 Rome\u2019s most photogenic neighbourhood. Cobblestone streets, ivy-covered facades, laundry hanging between buildings. Wander without a map for an hour. The best streets are the ones without tourists.",
                  "10:30am: Food exploration. Try suppl\u00EC at Supplizio (\u20AC2.50), trapizzino at Trapizzino (\u20AC3.50), or join a guided food tour (\u20AC45\u201365 / $49\u201370 USD for 4 hours with 6\u20138 stops). If a restaurant has picture menus in 6 languages and a man standing outside waving you in, the food is terrible. Walk two streets deeper.",
                  "1pm: Pantheon (\u20AC5 entry since 2023). The best-preserved Roman building \u2014 2,000 years old. The unreinforced concrete dome is an engineering miracle that modern engineers still study. 15\u201320 minutes inside is enough. The oculus in the rain is unforgettable.",
                  "2pm: Piazza Navona \u2014 Bernini\u2019s Fountain of the Four Rivers. Sit on a bench, enjoy the buskers, but do not buy anything from the overpriced terraces (\u20AC8 for a coffee). Walk to a side street for an espresso at \u20AC1.20.",
                  "3pm: Campo de\u2019 Fiori market (mornings are best, but afternoon has cheaper deals). Browse for truffle oil, saffron, dried pasta, and limoncello as gifts.",
                  "4pm: Caff\u00E8 Sant\u2019Eustachio \u2014 Rome\u2019s most famous coffee, a 3-minute walk from the Pantheon. Their gran caff\u00E8 (\u20AC2.50) is pre-sweetened and remarkably smooth.",
                  "Evening: Dinner in Trastevere at Da Enzo al 29 \u2014 queue from 6:30pm, no reservations, worth every minute of the wait. Their cacio e pepe and fried artichokes are legendary. \u20AC25\u201330/person.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Borghese Gallery &middot; Villa Borghese &middot; Testaccio &middot; Aventine Hill"
                cost="&euro;35&ndash;60 / $38&ndash;65 USD (excl. accommodation)"
                items={[
                  "9am: Borghese Gallery (\u20AC15 / $16 USD) \u2014 MUST pre-book, entry is timed 2-hour slots that sell out weeks ahead. Book the moment you confirm your Rome dates. Bernini\u2019s Apollo and Daphne will stop you mid-step. His David, sculpted at age 25, makes Michelangelo\u2019s version look static.",
                  "11am: Walk through Villa Borghese gardens \u2014 Rome\u2019s Central Park. Rent a rowboat on the lake (\u20AC3/20min). The gardens are free, shaded, and peaceful after the intensity of the gallery. Get an espresso at Casina del Lago.",
                  "1pm: Head to Testaccio \u2014 Rome\u2019s real food neighbourhood, not a tourist zone. This is where Romans actually eat. The neighbourhood was built around Rome\u2019s old slaughterhouse, which is why the local cuisine features offal dishes like coda alla vaccinara.",
                  "Testaccio Market (Mercato di Testaccio): covered market with incredible street food. Trapizzino \u20AC3.50, suppl\u00EC \u20AC1.50, pasta boxes \u20AC5\u20137. Try the porchetta sandwich at Mordi e Vai (\u20AC5).",
                  "3pm: Protestant Cemetery (donation entry) \u2014 Keats and Shelley are buried here. Genuinely peaceful, beautiful cypresses, and one of the most atmospheric spots in Rome. 30 minutes.",
                  "4pm: Aventine Hill \u2014 peek through the Knights of Malta keyhole for a perfectly framed St. Peter\u2019s dome. Free, 5-minute queue. Then walk to the Orange Garden (Giardino degli Aranci) for panoramic views over Rome. Free, rarely crowded.",
                  "Last dinner: proper Roman trattoria in Testaccio. Felice a Testaccio for their legendary tonnarelli cacio e pepe, or Da Remo for Rome\u2019s best thin-crust pizza. \u20AC20\u201335/person with house wine.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Rome" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Prices as of early 2026. Book the Colosseum combo and Vatican first entry online well ahead &mdash; everything else can be decided on the day.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Colosseum + Roman Forum + Palatine Hill",
                  e: "\u20AC18 combo / \u20AC24 with underground ($19.50\u2013$26 USD)",
                  d: "The icon of Rome. The combo ticket is valid 24 hours and covers all three sites. Buy online for skip-the-line. The arena floor and underground upgrade lets you stand where gladiators fought and see the tunnels below. 3\u20134 hours for all three.",
                  t: "Must see \u00B7 Half day",
                },
                {
                  n: "Vatican Museums + Sistine Chapel",
                  e: "\u20AC38 first entry / \u20AC17 regular ($41 / $18.50 USD)",
                  d: "One of the world\u2019s greatest art collections. The Gallery of Maps, Raphael Rooms, and Sistine Chapel are the highlights. First entry at 7:30am is essential \u2014 the difference between 100 people and 2,000 in the Sistine Chapel. Allow 3\u20134 hours minimum.",
                  t: "Must see \u00B7 Half day",
                },
                {
                  n: "St. Peter\u2019s Basilica",
                  e: "Free entry / \u20AC8\u2013\u20AC10 dome climb ($8.60\u2013$10.80 USD)",
                  d: "The largest church in the world. Michelangelo\u2019s Piet\u00E0 is inside the entrance (behind glass since 1972). The dome climb offers the best view in Rome. Use the Vatican Museums side exit to skip the outdoor queue.",
                  t: "Must see \u00B7 1\u20132 hrs",
                },
                {
                  n: "Pantheon",
                  e: "\u20AC5 ($5.40 USD)",
                  d: "The best-preserved Roman building, built in 125 CE under Hadrian. The unreinforced concrete dome is 43.3 metres across \u2014 the largest of its kind for nearly 2,000 years. The oculus (open hole in the ceiling) lets in rain and a column of light. 15\u201320 minutes.",
                  t: "Must see \u00B7 20 mins",
                },
                {
                  n: "Trevi Fountain",
                  e: "Free",
                  d: "Rome\u2019s most famous fountain, completed in 1762. Always crowded, always worth seeing. Best visited early morning (before 8am) or mid-afternoon. Evening is the most crowded time. Throw a coin \u2014 roughly \u20AC3,000 is collected daily and donated to charity.",
                  t: "15 mins",
                },
                {
                  n: "Borghese Gallery",
                  e: "\u20AC15 ($16 USD)",
                  d: "Bernini\u2019s greatest sculptures and Caravaggio\u2019s most dramatic paintings in an intimate gallery setting. Timed 2-hour entry slots only \u2014 no walk-ups. Book weeks ahead in peak season. This is arguably Rome\u2019s best museum for the quality-to-time ratio.",
                  t: "Must book ahead \u00B7 2 hrs",
                },
                {
                  n: "Castel Sant\u2019Angelo",
                  e: "\u20AC17 ($18.50 USD) / free with Roma Pass",
                  d: "Built as Hadrian\u2019s mausoleum in 139 CE, later converted to a papal fortress with a secret escape passage from the Vatican. The rooftop terrace has panoramic Tiber views. Combine with a sunset walk across Ponte Sant\u2019Angelo. 1\u20131.5 hours.",
                  t: "Worth it \u00B7 1.5 hrs",
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
            title="Rome &mdash; The Eternal City"
            subtitle="From ancient ruins to Renaissance masterpieces and cobblestone streets."
            spots={[
              {
                name: "Colosseum",
                query: "colosseum rome ancient amphitheatre sunset architecture",
                desc: "The icon of Rome. Book the combo ticket online for skip-the-line entry to the Colosseum, Forum, and Palatine Hill.",
              },
              {
                name: "Vatican Museums",
                query: "vatican museums gallery ceiling frescoes ornate hallway rome",
                desc: "Home to the Sistine Chapel. First entry at 7:30am is the only civilised way to visit.",
              },
              {
                name: "Trevi Fountain",
                query: "trevi fountain rome baroque sculpture water evening",
                desc: "Throw a coin with your right hand over your left shoulder. Best visited early morning or mid-afternoon.",
              },
              {
                name: "Pantheon",
                query: "pantheon rome dome interior oculus ancient temple",
                desc: "2,000 years old and still standing. The unreinforced concrete dome is an engineering miracle.",
              },
              {
                name: "Trastevere Streets",
                query: "trastevere rome cobblestone street ivy orange buildings evening",
                desc: "Rome&apos;s most photogenic neighbourhood. Best explored on foot with no particular destination in mind.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Rome is surprisingly affordable if you know where to eat and how to buy tickets. The main costs are accommodation and museum entries. Food can be very cheap or very expensive depending on whether you eat near monuments or in real neighbourhoods.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4N)", "\u20AC100\u2013180 / $108\u2013194", "\u20AC320\u2013600 / $346\u2013648", "\u20AC1,000\u20132,400 / $1,080\u20132,592"],
                    ["🍽 Food & Drinks (4D)", "\u20AC60\u201390 / $65\u201397", "\u20AC120\u2013200 / $130\u2013216", "\u20AC300\u2013500 / $324\u2013540"],
                    ["🚇 Transport", "\u20AC20\u201335 / $22\u201338", "\u20AC30\u201350 / $32\u201354", "\u20AC80\u2013150 / $86\u2013162"],
                    ["🏛️ Museums & Tickets", "\u20AC55\u201380 / $59\u201386", "\u20AC80\u2013120 / $86\u2013130", "\u20AC250\u2013400 / $270\u2013432"],
                    ["🎫 Tours & Experiences", "\u20AC0\u201315 / $0\u201316", "\u20AC50\u2013100 / $54\u2013108", "\u20AC200\u2013400 / $216\u2013432"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 4 days)</td>
                    {["\u20AC240\u2013400 / $260\u2013432", "\u20AC480\u2013800 / $518\u2013864", "\u20AC1,200\u20132,400+ / $1,296\u20132,592+"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in EUR (&euro;) with USD ($) equivalents at 1 EUR = 1.08 USD. Prices per person for 2026.
            </p>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Rome</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters enormously in Rome. Stay in the wrong area and you&apos;ll spend half your trip on buses. The four best neighbourhoods for tourists are Trastevere (character), Centro Storico (convenience), Monti (local feel near the Colosseum), and near Termini (budget, transit hub).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Trastevere",
                  type: "Charming &middot; Best food &middot; Nightlife",
                  price: "From \u20AC80/night ($86)",
                  badge: "Most atmosphere",
                  desc: "Rome\u2019s most photogenic neighbourhood. Cobblestone streets, ivy-covered walls, authentic trattorias. Slightly away from the major sights but walkable to everything. The best Roman food is here \u2014 Da Enzo, Tonnarello, and countless hole-in-the-wall pizza shops. Lively at night. The trade-off: noisier in the evenings.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Centro Storico (Navona / Pantheon area)",
                  type: "Central &middot; Walking distance to everything",
                  price: "From \u20AC120/night ($130)",
                  badge: "Most convenient",
                  desc: "The historic centre puts you within 10 minutes of the Pantheon, Piazza Navona, Campo de\u2019 Fiori, and Trevi Fountain. Pricier than other areas but you save on transport and time. Excellent for first-time visitors who want to maximise sightseeing. Can feel very touristy around the main piazzas.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Monti",
                  type: "Local &middot; Near Colosseum &middot; Hip bars",
                  price: "From \u20AC70/night ($76)",
                  badge: "Best local feel",
                  desc: "Rome\u2019s oldest neighbourhood, now a trendy area with vintage shops, wine bars, and local restaurants. A 5-minute walk from the Colosseum and Roman Forum. Much more authentic than Centro Storico. Excellent value for mid-range travellers who want the real Rome experience without sacrificing location.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Near Termini Station",
                  type: "Budget &middot; Transit hub &middot; Practical",
                  price: "From \u20AC25/night ($27) hostel, \u20AC60/night ($65) hotel",
                  badge: "Best budget",
                  desc: "The cheapest area for accommodation. Termini is Rome\u2019s main station with Metro lines A and B, buses to both airports, and trains to the rest of Italy. Not pretty \u2014 the area around Termini is functional rather than charming. But for budget travellers, the savings are significant and the transit connections are unbeatable.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Vatican / Prati",
                  type: "Quieter &middot; Near Vatican &middot; Residential",
                  price: "From \u20AC90/night ($97)",
                  badge: "For Vatican focus",
                  desc: "The neighbourhood around the Vatican is more residential and less touristy than Centro Storico. Good restaurants, quieter evenings, easy morning walks to St. Peter\u2019s. The downside: it\u2019s a 25-minute walk or Metro ride to the Colosseum and the nightlife is limited.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Rome</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Rome has four classic pastas: carbonara, cacio e pepe, amatriciana, and gricia. Order them at trattorias in Trastevere, Testaccio, or Monti &mdash; never at places with picture menus and a man waving you inside from the sidewalk. The rule is simple: walk 10 minutes away from any major monument and the food improves dramatically.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Da Enzo al 29",
                  t: "Traditional Roman trattoria &middot; Trastevere",
                  d: "The most consistently recommended trattoria in Rome. No reservations \u2014 queue from 6:30pm for dinner. Their cacio e pepe is textbook perfect and the fried artichokes (carciofi alla giudia) are the best in the city. \u20AC25\u201330/person. Cash only. Worth every minute of the wait.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Roscioli Salumeria",
                  t: "Deli + restaurant + wine bar &middot; Centro Storico",
                  d: "Part salumeria, part restaurant, part wine cellar. Their carbonara is regularly cited as Rome\u2019s best (\u20AC15\u201320/plate). The wine list is exceptional. Book ahead for dinner \u2014 this place is well known and always full. \u20AC35\u201360/person for a full meal with wine.",
                  b: "Best carbonara",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pizzarium Bonci",
                  t: "Pizza al taglio &middot; Near Vatican",
                  d: "Gabriele Bonci\u2019s pizza shop is widely considered Rome\u2019s best pizza al taglio (by-the-slice by weight). The dough is airy, the toppings are seasonal and creative. 10-minute walk from the Vatican. \u20AC8\u201312 fills you up completely. Always a queue but it moves fast. Eat standing up.",
                  b: "Best pizza",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Testaccio Market (Mercato di Testaccio)",
                  t: "Covered market &middot; Testaccio",
                  d: "Rome\u2019s best food market for actual eating, not just browsing. Trapizzino (\u20AC3.50) invented the trapizzino here. Mordi e Vai does exceptional porchetta sandwiches (\u20AC5). Suppl\u00EC, pasta boxes, fresh produce. Locals eat here daily. \u20AC8\u201315 for a full lunch hopping between stalls.",
                  b: "Best market",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Felice a Testaccio",
                  t: "Historic trattoria &middot; Testaccio",
                  d: "Operating since 1936. Their tonnarelli cacio e pepe is prepared tableside and considered one of the definitive versions in Rome. The atmosphere is old-school Roman \u2014 white tablecloths, efficient waiters, no-nonsense service. Book ahead. \u20AC30\u201345/person.",
                  b: "Legendary cacio e pepe",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
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
            destination="Rome"
            hotels={[
              {
                name: "The Yellow Hostel",
                type: "Budget Hostel \u00B7 Near Termini",
                price: "From \u20AC28/night ($30)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/it/the-yellow.html?aid=2820480",
              },
              {
                name: "Hotel Raphael",
                type: "Boutique 5-star \u00B7 Piazza Navona",
                price: "From \u20AC220/night ($238)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/it/raphael.html?aid=2820480",
              },
              {
                name: "Hotel de Russie",
                type: "Luxury 5-star \u00B7 Piazza del Popolo",
                price: "From \u20AC450/night ($486)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/it/de-russie.html?aid=2820480",
              },
              {
                name: "Hotel Santa Maria",
                type: "Boutique 3-star \u00B7 Trastevere",
                price: "From \u20AC120/night ($130)",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/it/santa-maria-trastevere.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Colosseum + Forum + Palatine Combo",
                duration: "Half day",
                price: "From \u20AC18/person ($19.50)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=rome+colosseum&partner_id=PSZA5UI",
              },
              {
                name: "Vatican Museums First Entry 7:30am",
                duration: "3 hours",
                price: "From \u20AC38/person ($41)",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=rome+vatican+first+entry&partner_id=PSZA5UI",
              },
              {
                name: "Trastevere Street Food Tour",
                duration: "4 hours",
                price: "From \u20AC45/person ($49)",
                url: "https://www.getyourguide.com/s/?q=rome+trastevere+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Borghese Gallery Timed Entry",
                duration: "2 hours",
                price: "From \u20AC15/person ($16)",
                url: "https://www.getyourguide.com/s/?q=rome+borghese+gallery&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Eating near tourist monuments",
                  desc: "Restaurants within 100 metres of the Colosseum, Vatican, or Trevi charge 50\u2013100% more for worse food. Walk 10 minutes in any direction for authentic Roman trattorias at half the price. This is the single most expensive mistake tourists make in Rome.",
                  icon: "🍝",
                },
                {
                  title: "Visiting the Vatican on Monday or Saturday",
                  desc: "Monday is the busiest day (museums closed Sunday, everyone goes Monday). Saturday is second busiest. Tuesday to Thursday is best. Friday morning works too. This alone can save you hours of queuing.",
                  icon: "📅",
                },
                {
                  title: "Skipping first entry at the Vatican",
                  desc: "The regular 9am entry means arriving to a Sistine Chapel packed with 2,000 people. The 7:30am first entry (\u20AC38 vs \u20AC17) gives you the chapel with fewer than 100 people. The \u20AC21 difference is the best money you will spend in Rome.",
                  icon: "🎫",
                },
                {
                  title: "Not booking the Borghese Gallery in advance",
                  desc: "Entry is by timed 2-hour slots only. No walk-ups, ever. It sells out weeks ahead in peak season. Book the moment you confirm your Rome dates. Missing Bernini\u2019s sculptures because you forgot to book is genuinely regrettable.",
                  icon: "🖼️",
                },
                {
                  title: "Taking taxis without agreeing on price",
                  desc: "Always use the meter or agree on the fixed rate before getting in. Fiumicino to city centre is a fixed \u20AC50. Never accept a \u2018flat rate\u2019 offered by drivers outside the airport arrivals \u2014 they are unlicensed and will overcharge.",
                  icon: "🚕",
                },
                {
                  title: "Wearing shorts or bare shoulders to churches",
                  desc: "St. Peter\u2019s, the Sistine Chapel, and most Roman churches require covered knees and shoulders. Carry a scarf or light jacket in your bag. They will turn you away at the door. This catches tourists off guard daily.",
                  icon: "👕",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Rome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "The 7:30am Vatican rule",
                  desc: "First entry ticket to Vatican Museums at 7:30am gives you 90 minutes in the Sistine Chapel before the 9am general crowds arrive. This is the single best upgrade in Rome. Book 2\u20133 weeks ahead online. Non-negotiable.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍝",
                  title: "The four Roman pastas",
                  desc: "Carbonara, cacio e pepe, amatriciana, gricia \u2014 these are Rome\u2019s four classic pastas. Order them at trattorias in Trastevere, Testaccio, or Monti. Never at places with English picture menus on the sidewalk. If a waiter is calling to you from the doorway, keep walking.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💧",
                  title: "Free water everywhere",
                  desc: "Rome has 2,500+ nasoni (public drinking fountains) with free, clean, cold water from the same aqueducts that supplied ancient Rome. Bring a reusable bottle. Cover the spout hole with your finger and water arcs up for drinking. Never buy bottled water in Rome.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏛️",
                  title: "Free museum Sundays",
                  desc: "First Sunday of every month, most state museums are free \u2014 including the Colosseum, Forum, and Borghese Gallery. But queues are massive and entry is first-come-first-served. Only worth it if you arrive before opening time.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "👟",
                  title: "Cobblestone shoes",
                  desc: "Rome\u2019s streets destroy fashion shoes. Wear comfortable walking shoes with thick soles. You will walk 15\u201320km per day on uneven cobblestones, ancient flagstones, and gravel paths. Blisters ruin trips. Leave the heels at home.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🚇",
                  title: "Skip Uber, use the Metro",
                  desc: "Rome\u2019s traffic is terrible and taxis are expensive. Metro line A (Vatican\u2013Spanish Steps\u2013Termini) and line B (Termini\u2013Colosseum) cover 90% of tourist sights. \u20AC1.50 per ride or \u20AC7 day pass. The Roma Pass (\u20AC52/72hrs) includes unlimited metro plus 2 museum entries.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Rome" />

          {/* Combine With */}
          <CombineWith currentSlug="rome-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Rome?",
                  a: "4 days is ideal. Day 1 covers the Colosseum, Forum, and Palatine Hill. Day 2 is for the Vatican. Day 3 is Trastevere, the Pantheon, and Piazza Navona. Day 4 is the Borghese Gallery and Testaccio. 3 days is possible but tight. 5 or more days lets you add day trips to Pompeii, Tivoli, or the Amalfi Coast.",
                },
                {
                  q: "How much does a 4-day Rome trip cost?",
                  a: "Budget: \u20AC60\u2013100/day ($65\u2013108 USD) including hostels, pizza al taglio, and metro. Mid-range: \u20AC120\u2013200/day ($130\u2013216 USD) with 3\u20134 star hotels, sit-down trattorias, and guided tours. Luxury: \u20AC300+/day ($325+ USD) with 5-star hotels, private guides, and fine dining. Total for 4 days ranges from \u20AC240 to \u20AC2,400+ per person.",
                },
                {
                  q: "Is the Roma Pass worth it?",
                  a: "The 72-hour Roma Pass (\u20AC52) includes unlimited metro and bus, free entry to 2 museums or sites, and discounts on others. It is worth it if you plan to use public transport and visit at least 2 paid attractions like the Colosseum and Castel Sant\u2019Angelo. Skip it if you prefer walking and only plan to visit the Vatican (not covered by the pass).",
                },
                {
                  q: "Do I need a visa for Italy from India?",
                  a: "Indian passport holders need a Schengen visa. Apply 3 months ahead at VFS Global (\u20AC80 fee, 15 working days processing). You need a return flight booking, hotel confirmations, travel insurance with \u20AC30,000 minimum medical cover, and 3 months of bank statements. Book your VFS appointment early as slots fill 6\u20138 weeks ahead in peak season. US, UK, Australian, and Canadian citizens can visit visa-free for up to 90 days.",
                },
                {
                  q: "What is the best time to visit Rome?",
                  a: "April to May and September to October offer the best balance of weather, crowds, and prices. June to August is hot (30\u201338 degrees) and very crowded. November to March is cheapest but can be rainy and cold. October is arguably the single best month for the combination of warm weather, thinner crowds, and reasonable prices.",
                },
                {
                  q: "Should I book Vatican tickets in advance?",
                  a: "Absolutely. Book the 7:30am first entry slot (\u20AC38 / $41 USD) at least 2 to 3 weeks ahead. The regular queue during peak season can be 2 to 4 hours. First entry gives you the Sistine Chapel with fewer than 100 people instead of 2,000. This is the single most important advance booking for any Rome trip.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Rome trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-rome", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/rome-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-rome", label: "How to get there", icon: "✈️" },
                { href: "/blog/rome-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="rome-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Florence &mdash; 3 Day Renaissance Guide", href: "/blog/florence-3-days" },
                { label: "Amalfi Coast &mdash; 4 Day Coastal Paradise", href: "/blog/amalfi-coast-4-days" },
                { label: "Paris &mdash; 4 Day City Guide", href: "/blog/paris-4-days" },
                { label: "Browse All Travel Guides", href: "/blog" },
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
                  <span className="text-xs text-muted">Read &rarr;</span>
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
