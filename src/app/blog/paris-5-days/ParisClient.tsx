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
const PARIS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Paris Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Paris 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Paris in 5 Days — Eiffel Tower, Louvre, Versailles and more&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/paris-5-days"
        imageUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
        description="Paris in 5 Days: Eiffel Tower, Louvre, Versailles, Montmartre, Le Marais — complete travel guide with real euro costs and budget breakdown."
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
export default function ParisClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PARIS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Paris" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="paris eiffel tower seine river france cityscape"
            fallback="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80"
            alt="Paris Eiffel Tower reflected in the Seine river at golden hour France"
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
              <span className="text-white/70">Paris 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Paris in 5 Days:
                <em className="italic text-amber-300"> Eiffel Tower, Louvre &amp; Versailles</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Five days of croissants, monuments, hidden courtyards and the Seine at golden hour. Real euro costs, Louvre strategy, and the Paris only locals know.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEB\uD83C\uDDF7"} France</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 5 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20AC"}60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Paris at 7am &mdash; the Eiffel Tower catching the first light over an empty Champ de Mars, a still-warm croissant from the boulangerie on the corner, the Seine glittering silver before the tour boats begin &mdash; is one of the genuinely great travel experiences on earth. Five days gives you the Louvre without the panic, Montmartre before the crowds, Versailles in an afternoon, and enough time left over to simply sit at a caf&eacute; and watch the city move.
            </p>
          </blockquote>

          {/* ── WHAT PARIS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Paris Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Paris is a city that genuinely lives up to its reputation &mdash; but only if you know how to approach it. The Eiffel Tower is as striking in person as every photograph suggests. The Louvre is overwhelming in the best possible way. Montmartre at dawn is achingly beautiful. But the city also has edges: the tourist traps near every landmark charge triple for mediocre food, the M&eacute;tro smells exactly how you&apos;ve heard, and pickpockets operate professionally at every major site.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes five days ideal is breathing room. You can spend a full morning at the Louvre instead of sprinting through it in two hours. You can dedicate an entire day to Versailles without feeling like Paris is slipping away. You can wander Le Marais, discover your own caf&eacute;, and eat your way through Rue Cler &mdash; the things that actually make Paris feel like Paris, not a checklist.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city is organized into 20 arrondissements spiralling clockwise from the centre. Most of what you want to see falls within the 1st through 7th, with Montmartre in the 18th and the best restaurants in the 11th. The M&eacute;tro connects everything in under 30 minutes. The real Paris revelation: it is a remarkably walkable city, and almost everything looks better on foot.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Main Airport" value="CDG" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr\u2013Jun" />
              <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="5 Days" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u20AC60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Paris</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013Jun",
                  i: "\uD83C\uDF38",
                  t: "Spring \u2014 Best Season",
                  d: "15\u201322\u00B0C. Chestnut blossoms along the Seine, outdoor caf\u00E9 culture in full swing, long evenings. Tourist numbers are manageable until mid-June. The Tuileries and Luxembourg Gardens are at their most beautiful. This is when Paris is at its absolute best.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\uD83C\uDF42",
                  t: "Autumn \u2014 Excellent",
                  d: "14\u201320\u00B0C. Arguably the best-kept secret: summer heat gone, tourist volumes down 30%, the city returns to Parisians. September light is exceptional for photography. The rentr\u00E9e brings energy back to restaurants, galleries, and cultural life.",
                  b: "Excellent",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul\u2013Aug",
                  i: "\u2600\uFE0F",
                  t: "Summer \u2014 Hot & Crowded",
                  d: "20\u201335\u00B0C, sometimes 38\u00B0C+. Peak tourist season. Every major site has long queues. Many Parisian restaurants close for August as locals leave the city. The upside: Paris Plages (pop-up beaches on the Seine) and 16+ hours of daylight.",
                  b: "Busy season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov\u2013Mar",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Atmospheric",
                  d: "2\u201310\u00B0C. Cold and grey, but magical in December when Christmas markets light up the Champs-\u00C9lys\u00E9es and Tuileries. Museums are blissfully uncrowded. Hotel prices drop 30\u201340%. The trade-off: short days (sunset at 4:30pm in December) and occasional rain.",
                  b: "Budget-friendly",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Paris</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Paris has two main airports &mdash; <strong className="font-medium">Charles de Gaulle (CDG)</strong> for most international flights, and <strong className="font-medium">Orly (ORY)</strong> for European budget carriers. CDG is 25km northeast of the city centre; Orly is 13km south.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\uD83D\uDE86",
                  t: "RER B from CDG (recommended)",
                  d: "The fastest and cheapest option from CDG to central Paris. \u20AC12.10, runs every 10\u201315 minutes, takes 35 minutes to Ch\u00E2telet-Les Halles, Luxembourg, or Saint-Michel stations. Catch it directly from Terminal 2 or from Terminal 1 via the CDGVAL shuttle. Runs 5am to midnight.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE95",
                  t: "Taxi from CDG",
                  d: "Fixed-fare taxi to Paris: \u20AC50 to Right Bank, \u20AC55 to Left Bank (legally mandated flat rate). Journey takes 40\u201375 minutes depending on traffic. Only use taxis from the official rank outside arrivals \u2014 unlicensed drivers will charge \u20AC100+. Good option for late arrivals when the RER stops.",
                  b: "\u20AC50\u201355 flat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE8C",
                  t: "Orlybus / Orlyval from Orly",
                  d: "Orlybus runs to Denfert-Rochereau M\u00E9tro station (\u20AC11.50, 30 min). Orlyval automated train connects to RER B at Antony (\u20AC14.10, 35 min to city centre). If you flew a European budget carrier (easyJet, Vueling, Transavia), you likely land at Orly.",
                  b: "\u20AC11\u201314",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83C\uDDEE\uD83C\uDDF3",
                  t: "From India",
                  d: "Direct flights from Delhi and Mumbai to CDG on Air France and Air India (8\u20139 hours, \u20AC400\u2013800 return). One-stop options via Dubai, Doha, or Istanbul are often cheaper (\u20AC350\u2013600). Book 2\u20133 months ahead for the best prices. Apply for a Schengen visa at VFS Global at least 4\u20136 weeks before travel.",
                  b: "8\u20139 hrs direct",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "\uD83D\uDE87",
                  t: "M\u00E9tro Passes in Paris",
                  d: "Single M\u00E9tro journey: \u20AC2.15. The Navigo D\u00E9couverte weekly pass costs \u20AC30 and covers unlimited travel on M\u00E9tro, RER, bus, and tram \u2014 including the RER C to Versailles and RER B to CDG airport. Buy at any M\u00E9tro station with a passport photo. The Paris Visite tourist pass exists but is worse value \u2014 skip it.",
                  b: "\u20AC30/week",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 5-Day Paris Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary is built for the budget tier (\u20AC60\u201390/day). Each day card is expandable with real prices in euros. The mid-range and luxury options are detailed in the full planning section below.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Eiffel Tower & the Seine"
                cost={"\u20AC35\u201350 (~$38\u201355)"}
                items={[
                  "7:00am \u2014 Walk to Champ de Mars for sunrise views of the tower before the crowds arrive. The tower faces northeast \u2014 morning light hits the ironwork beautifully.",
                  "9:00am \u2014 Buy your Eiffel Tower ticket online in advance (essential). Stairs to the 2nd floor: \u20AC11.80 ($13). Lift to the summit: \u20AC29.40 ($32). The stairs take 20 minutes and the views from each landing are just as dramatic.",
                  "10:30am \u2014 Cross to Trocad\u00E9ro esplanade for the best full-tower photograph in Paris. The fountain pools make a natural foreground \u2014 arrive before 11am for clean shots.",
                  "12:30pm \u2014 Picnic on Champ de Mars: baguette (\u20AC1.10/$1.20), a wedge of Comt\u00E9 or Brie (\u20AC2\u20133/$2.20\u20133.30), and a small bottle of ros\u00E9 (\u20AC4/$4.40) from the Franprix on Rue du Commerce.",
                  "3:00pm \u2014 Walk the Left Bank along Quai Branly to Pont d\u2019I\u00E9na. Cross the river and explore the 16th arrondissement residential streets \u2014 calm, elegant, un-touristy.",
                  "6:00pm \u2014 Return to Champ de Mars for the tower sparkling at dusk (every hour on the hour after dark for 5 minutes, until 1am).",
                  "8:00pm \u2014 Dinner on Rue Cler market street (7th arr.) \u2014 one of Paris\u2019s best food streets. Rotisserie chickens for \u20AC12 ($13), or sit at Caf\u00E9 du March\u00E9 for steak frites and a glass of house red for \u20AC20 ($22).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Louvre & St-Germain-des-Pr\u00E9s"
                cost={"\u20AC40\u201360 (~$44\u201365)"}
                items={[
                  "8:30am \u2014 Buy Louvre tickets online (\u20AC22/$24) \u2014 never buy at the gate. Arrive at 9am on a Wednesday or Friday when the museum stays open until 9:45pm.",
                  "9:00am \u2014 Strategic Louvre: go directly to the Denon Wing. Mona Lisa \u2192 Winged Victory of Samothrace \u2192 Venus de Milo \u2192 Dutch/Flemish Masters \u2192 Egyptian Antiquities. That\u2019s 5 rooms, 3 hours, everything essential. The museum has 35,000 works \u2014 don\u2019t try to see everything.",
                  "12:30pm \u2014 Lunch at Caf\u00E9 Marly inside the Louvre courtyard (\u20AC18\u201325/$20\u201327 for a plat du jour) or walk to Rue de Rivoli for a croque-monsieur from a brasserie (\u20AC9/$10).",
                  "2:00pm \u2014 Tuileries Garden \u2014 free, beautiful, the best public garden in Paris for a walk or to sit in a green metal chair.",
                  "3:30pm \u2014 Palais Royal arcades and garden \u2014 completely free, architecturally stunning, almost no tourists. Daniel Buren\u2019s black-and-white column installation in the courtyard is worth 15 minutes.",
                  "5:30pm \u2014 Walk across Pont Neuf to the Left Bank. St-Germain-des-Pr\u00E9s neighbourhood \u2014 Caf\u00E9 de Flore and Les Deux Magots are tourist traps; have a coffee for the history but eat elsewhere.",
                  "8:00pm \u2014 Dinner in St-Germain: Le Relais de l\u2019Entrec\u00F4te (no reservations, queue from 7pm, one dish: steak frites with secret sauce, \u20AC28/$31 \u2014 worth every euro).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Montmartre & Canal Saint-Martin"
                cost={"\u20AC30\u201345 (~$33\u201349)"}
                items={[
                  "8:00am \u2014 Montmartre before the tourist buses: take the M\u00E9tro to Abbesses (line 12), not Anvers. The small square with the Art Nouveau M\u00E9tro entrance is the real Montmartre.",
                  "8:30am \u2014 Sacr\u00E9-C\u0153ur basilica (free entry) at opening \u2014 the mosaic Christ in Majesty is one of the largest in the world. The panoramic view over Paris from the parvis is exceptional.",
                  "10:00am \u2014 Place du Tertre artist square \u2014 touristy by 11am, but at 10am you can see artists working. Walk the vineyard path behind the basilica.",
                  "11:00am \u2014 Moulin Rouge exterior (Rue Lepic side street for the windmill view). Walk down Rue Lepic \u2014 the market street where Am\u00E9lie was filmed.",
                  "1:00pm \u2014 Lunch at a bistro in the 9th arrondissement \u2014 one step from Montmartre and prices drop 40%. Try Le Bon Bock (Rue de Douai) for classic French fare at \u20AC12\u201315 ($13\u201316).",
                  "3:00pm \u2014 Canal Saint-Martin (10th arr.) \u2014 Paris\u2019s coolest neighbourhood. Iron footbridges, boutiques, caf\u00E9s, independent bookshops. The canal walk from R\u00E9publique to Jaur\u00E8s takes 45 minutes.",
                  "7:00pm \u2014 R\u00E9publique neighbourhood for dinner \u2014 local, diverse, affordable. Le Galopin for modern French bistro cooking at \u20AC15\u201320 ($16\u201322) mains.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Le Marais, \u00CEle de la Cit\u00E9 & the Latin Quarter"
                cost={"\u20AC35\u201355 (~$38\u201360)"}
                items={[
                  "9:00am \u2014 Le Marais: start at Place des Vosges (free) \u2014 Paris\u2019s oldest planned square, arcaded walkways, Victor Hugo\u2019s house (free museum). Coffee at Ma Bourgogne under the arches.",
                  "10:30am \u2014 Centre Pompidou exterior \u2014 the inside-out building is as photogenic as any classic monument. Museum entry \u20AC15 ($16); the rooftop view (included) is Paris at its most industrial-beautiful.",
                  "12:00pm \u2014 Marais lunch: L\u2019As du Fallafel (Rue des Rosiers, \u20AC7/$8) \u2014 Paris\u2019s most famous falafel. Expect a queue but it moves fast. The Jewish Quarter has some of the city\u2019s best street eating.",
                  "2:00pm \u2014 Walk to \u00CEle de la Cit\u00E9 across Pont Marie. Notre-Dame de Paris \u2014 the cathedral reopened in December 2024 after reconstruction from the 2019 fire. Check current visiting hours.",
                  "3:30pm \u2014 Sainte-Chapelle (\u20AC13.50/$15, book online) \u2014 the upper chapel\u2019s 15 stained glass windows covering 600m\u00B2 of Gothic tracery are among the most extraordinary interiors in Europe.",
                  "5:00pm \u2014 Shakespeare and Company bookshop (free, Rue de la B\u00FBcherie) \u2014 the most famous English-language bookshop in Paris, facing Notre-Dame across the Seine. Buy a book, get it stamped.",
                  "7:30pm \u2014 Latin Quarter evening: Rue Mouffetard market street for dinner \u2014 cr\u00EApe stands, traditional brasseries. Budget \u20AC12\u201318 ($13\u201320) for a full meal.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Versailles Day Trip"
                cost={"\u20AC40\u201355 (~$44\u201360) incl. transport + entry"}
                items={[
                  "7:30am \u2014 Leave Paris early. Take RER C from Gare d\u2019Austerlitz or Pont de l\u2019Alma to Versailles-Ch\u00E2teau-Rive Gauche (\u20AC7.30/$8 return, 35 minutes). Trains every 15 minutes.",
                  "9:00am \u2014 Palace of Versailles opens at 9am (\u20AC20/$22, book online). Arrive at opening to beat the 11am tour groups. Hall of Mirrors is the centrepiece \u2014 357 mirrors, 20,000 candles when lit.",
                  "10:30am \u2014 Royal Apartments, King\u2019s Chamber, Queen\u2019s Chamber. Budget 2 hours for the interior. The Baroque excess is deliberately overwhelming \u2014 that\u2019s the point.",
                  "12:30pm \u2014 Gardens of Versailles (free entry except fountain show days). The Grand Canal extends for 1.5km. Rent a rowboat (\u20AC9/$10 per hour) on the canal.",
                  "2:00pm \u2014 Grand Trianon and Petit Trianon palaces \u2014 included in the Passport ticket (\u20AC32/$35) or \u20AC12 ($13) separate. Marie Antoinette\u2019s Hamlet (the fake farm village) is 20 minutes\u2019 walk through the gardens.",
                  "4:30pm \u2014 Return RER C to Paris. Back in the city by 5:30pm.",
                  "7:00pm \u2014 Final Paris dinner: the 11th arrondissement for the best value dining. Le Servan (Rue Saint-Maur) for exceptional modern bistro cooking at \u20AC18\u201325 ($20\u201327) mains.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Paris" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Paris Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks in order of priority. Entry fees and hours as of early 2026 &mdash; book every single one online to skip ticket queues. The Paris Museum Pass (\u20AC52/2 days) covers most of these.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Eiffel Tower",
                  e: "\u20AC11.80 stairs / \u20AC29.40 summit lift ($13/$32)",
                  d: "Book at tour-eiffel.fr at least 2 days ahead \u2014 slots sell out weeks in advance in summer. Stairs to the 2nd floor take 20 minutes and are genuinely enjoyable. The summit lift adds the top platform at 276m. Best times: 9am for morning light or 7pm for golden hour. The tower sparkles every hour after dark for 5 minutes.",
                  t: "Must see \u00B7 2\u20133 hrs",
                },
                {
                  n: "Mus\u00E9e du Louvre",
                  e: "\u20AC22 ($24) \u2014 book online",
                  d: "60,000 square metres of art. Don\u2019t try to see everything. Strategic route: Denon Wing ground floor then first floor \u2014 Mona Lisa (Room 711), Winged Victory, Venus de Milo, Dutch Masters, Egyptian Antiquities. Set a 3-hour limit. Open Wednesday and Friday until 9:45pm \u2014 evening visits are less crowded.",
                  t: "Must see \u00B7 3\u20134 hrs",
                },
                {
                  n: "Notre-Dame de Paris",
                  e: "Free entry (reopened Dec 2024)",
                  d: "The cathedral reopened after the 2019 fire with a restored interior. The Gothic fa\u00E7ade, rose windows, and flying buttresses remain among the most recognised architecture in the world. Check the official website for current opening hours and any access restrictions.",
                  t: "Must see \u00B7 1\u20131.5 hrs",
                },
                {
                  n: "Palace of Versailles",
                  e: "\u20AC20 palace / \u20AC32 Passport ($22/$35)",
                  d: "RER C to Versailles-Ch\u00E2teau-Rive Gauche (35 min, \u20AC7.30 return). Arrive at 9am opening. Hall of Mirrors, Royal Apartments, then the gardens. The Passport ticket includes Grand and Petit Trianon. Budget a full day \u2014 the grounds alone are 800 hectares.",
                  t: "Full day trip \u00B7 6\u20137 hrs",
                },
                {
                  n: "Sainte-Chapelle",
                  e: "\u20AC13.50 ($15) \u2014 book online",
                  d: "The upper chapel\u2019s 15 stained glass windows cover 600 square metres of Gothic tracery and are among the most extraordinary interiors in Europe. Visit when the sun is shining for maximum light through the glass. On \u00CEle de la Cit\u00E9, 5 minutes from Notre-Dame.",
                  t: "Must see \u00B7 45 min",
                },
                {
                  n: "Mus\u00E9e d\u2019Orsay",
                  e: "\u20AC16 ($17) \u2014 book online",
                  d: "The Impressionist collection in a converted railway station. Monet\u2019s water lilies, Renoir\u2019s Moulin de la Galette, Van Gogh\u2019s self-portraits. Give it 2\u20132.5 hours. The clock window on the top floor frames a postcard view of Sacr\u00E9-C\u0153ur across the river.",
                  t: "Highly recommended \u00B7 2\u20133 hrs",
                },
                {
                  n: "Sacr\u00E9-C\u0153ur Basilica",
                  e: "Free entry \u2014 dome climb \u20AC7 ($8)",
                  d: "The white basilica crowning Montmartre hill. Free entry to the main nave with its enormous mosaic of Christ in Majesty. The dome climb (300 steps, \u20AC7) provides one of Paris\u2019s finest panoramic views. Best visited early morning before the tourist buses arrive at 10am.",
                  t: "Must see \u00B7 1\u20131.5 hrs",
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
            title="Paris &mdash; Monuments, Caf\u00E9s &amp; the Seine"
            subtitle="The city of light at its most photogenic."
            spots={[
              {
                name: "Eiffel Tower at Golden Hour",
                query: "eiffel tower paris golden hour sunset seine france",
                desc: "The Eiffel Tower catching the last light over the Champ de Mars \u2014 the defining image of Paris.",
              },
              {
                name: "Louvre Pyramid",
                query: "louvre museum pyramid paris france courtyard glass",
                desc: "I. M. Pei\u2019s glass pyramid framed by the classical wings of the world\u2019s largest art museum.",
              },
              {
                name: "Sacr\u00E9-C\u0153ur from Montmartre",
                query: "sacre coeur basilica montmartre paris france white dome",
                desc: "The white basilica crowning Montmartre hill with panoramic views across every arrondissement.",
              },
              {
                name: "Seine River at Dusk",
                query: "seine river paris bridges dusk lights reflection france",
                desc: "The illuminated bridges of the Seine reflecting in the water as Paris turns on its evening lights.",
              },
              {
                name: "Montmartre Streets",
                query: "montmartre streets paris cobblestones cafes france morning",
                desc: "Cobblestone lanes, artist studios, and corner caf\u00E9s in Paris\u2019s most romantic hillside neighbourhood.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Paris is not cheap, but it is far more affordable than its reputation suggests &mdash; particularly if you master the supermarket picnic, the Navigo weekly pass, and the Museum Pass. These three things alone save \u20AC200+ over five days compared to the tourist-trap approach.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation", "\u20AC30\u201360/night", "\u20AC100\u2013180/night", "\u20AC400\u20131,500/night"],
                    ["\uD83C\uDF5D Food", "\u20AC15\u201325/day", "\u20AC40\u201370/day", "\u20AC100\u2013300/day"],
                    ["\uD83D\uDE87 Transport", "\u20AC5\u201310/day", "\u20AC15\u201325/day", "\u20AC30\u201380/day"],
                    ["\uD83C\uDFAB Activities", "\u20AC15\u201330/day", "\u20AC30\u201360/day", "\u20AC100\u2013300/day"],
                    ["TOTAL (per person)", "\u20AC65\u2013125/day ($71\u2013136)", "\u20AC185\u2013335/day ($201\u2013365)", "\u20AC630\u20132,180/day ($686\u20132,376)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDCB0"} Budget (\u20AC60\u201390/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels or budget hotels, supermarket picnics, Navigo weekly pass, free museums. Paris on a budget is entirely achievable and still deeply enjoyable. The baguette + cheese + wine picnic on the Seine is genuinely one of the best meals you will have.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">{"\u2728"} Mid-Range (\u20AC150\u2013250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotels in the 7th or 11th arr., bistro lunches, guided museum tours, Seine cruise. This is the sweet spot for most travellers \u2014 comfortable without losing the city\u2019s authenticity.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury (\u20AC400+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Palace hotels (Le Bristol, Crillon, Shangri-La), Michelin-starred dinners, private museum tours, luxury car transfers. Paris is one of the great luxury destinations and delivers accordingly at the top tier.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Paris</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters enormously in Paris. The right neighbourhood saves you hours of commuting and puts you in walking distance of the best restaurants and sights. Here are the five best areas for visitors, each with a different character.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Le Marais (3rd & 4th arr.)",
                  type: "Central \u00B7 Historic \u00B7 Walkable to everything",
                  price: "\u20AC100\u2013250/night ($109\u2013272)",
                  badge: "Best overall",
                  desc: "Paris\u2019s most charming central neighbourhood. Walking distance to Notre-Dame, the Louvre, Place des Vosges, and Centre Pompidou. Excellent restaurants, vintage shops, and the city\u2019s best falafel on Rue des Rosiers. The gold standard for first-time visitors.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Latin Quarter (5th arr.)",
                  type: "Student area \u00B7 Budget-friendly \u00B7 Near Notre-Dame",
                  price: "\u20AC70\u2013160/night ($76\u2013174)",
                  badge: "Best for budget",
                  desc: "The historic university district on the Left Bank. Affordable hotels, excellent Rue Mouffetard market street, Shakespeare and Company bookshop, and a 10-minute walk to Notre-Dame and the \u00CEle de la Cit\u00E9. Lively in the evening without being overwhelming.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Montmartre (18th arr.)",
                  type: "Artistic \u00B7 Hilly \u00B7 Romantic views",
                  price: "\u20AC60\u2013150/night ($65\u2013163)",
                  badge: "Most atmospheric",
                  desc: "The hillside village-within-a-city. Cobblestone streets, Sacr\u00E9-C\u0153ur at your doorstep, the vineyard walks, artist studios. Cheaper than central Paris with a completely different character. The trade-off: it\u2019s uphill and 15\u201320 minutes by M\u00E9tro from the main attractions.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Near Gare du Nord (10th arr.)",
                  type: "Transit hub \u00B7 Budget \u00B7 Canal Saint-Martin",
                  price: "\u20AC50\u2013120/night ($54\u2013131)",
                  badge: "Best transit access",
                  desc: "Practical for Eurostar arrivals and CDG airport (RER B direct). Walking distance to Canal Saint-Martin \u2014 one of Paris\u2019s coolest neighbourhoods. Hotels are 30\u201340% cheaper than the central arrondissements. The area has improved dramatically in recent years.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "7th Arrondissement / Rue Cler",
                  type: "Elegant \u00B7 Near Eiffel Tower \u00B7 Market street",
                  price: "\u20AC120\u2013300/night ($131\u2013327)",
                  badge: "Near the tower",
                  desc: "The residential Left Bank at its most Parisian. Rue Cler is one of the city\u2019s finest market streets, and the Eiffel Tower is a 10-minute walk. Quieter and more refined than central tourist areas. Good mid-range and boutique hotel options.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Paris</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important Paris dining rule: walk 5\u201310 minutes away from any major landmark before eating. Restaurants within 200 metres of the Eiffel Tower, Louvre, or Notre-Dame charge triple for food that is significantly worse. These recommendations are all real neighbourhood spots.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Le Relais de l\u2019Entrec\u00F4te",
                  t: "Classic bistro \u00B7 St-Germain (6th arr.)",
                  d: "No menu, no reservations, one dish: steak frites with a legendary walnut-herb secret sauce, green salad starter, and unlimited frites refills. \u20AC28/$31 per person. Queue from 7pm \u2014 the line is part of the experience. This is the quintessential Paris bistro meal and the steak frites by which all others are measured.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "L\u2019As du Fallafel",
                  t: "Street food \u00B7 Le Marais (4th arr.)",
                  d: "Paris\u2019s most famous falafel, at Rue des Rosiers in the Jewish Quarter. \u20AC7/$8 for a stuffed pita that is genuinely enormous. Expect a queue at lunch but it moves fast. Closed Saturdays (Shabbat). The surrounding Marais streets have excellent street eating of every kind.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Rue Cler Market Street",
                  t: "Market street \u00B7 7th arr.",
                  d: "Not a single restaurant but an entire food street near the Eiffel Tower. Fromageries, boulangeries, rotisserie chicken shops (\u20AC12/$13), charcuteries, and wine merchants. Assemble a picnic for \u20AC10/$11 per person or eat at Caf\u00E9 du March\u00E9 for steak frites and wine at \u20AC20/$22. This is how Parisians actually eat near the tower.",
                  b: "Local favourite",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Bistrot Paul Bert",
                  t: "Modern bistro \u00B7 11th arr.",
                  d: "The definitive Paris neighbourhood bistro. Bone marrow, entrec\u00F4te, Paris-Brest dessert. \u20AC45\u201355/$49\u201360 per person for a three-course dinner with wine. Book 3\u20135 days ahead. The 11th arrondissement has Paris\u2019s best concentration of serious restaurants at reasonable prices.",
                  b: "Best dinner",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pierre Herm\u00E9",
                  t: "Patisserie \u00B7 Multiple locations",
                  d: "Better macarons than Ladur\u00E9e (locals will tell you this without prompting). The Ispahan (rose, lychee, raspberry) is the signature. \u20AC2.50/$2.70 per macaron, box of 12 for \u20AC28/$30. The Rue Bonaparte shop has the full range. Go mid-afternoon when batches are freshest.",
                  b: "Best pastry",
                  c: "bg-pink-50 border-pink-200",
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
            destination="Paris France"
            hotels={[
              {
                name: "H\u00F4tel des Arts Montmartre",
                type: "Boutique 3-star \u00B7 Montmartre views",
                price: "From \u20AC120/night",
                rating: "4",
                badge: "Great value",
                url: "https://www.booking.com/hotel/fr/des-arts-montmartre.html?aid=2820480",
              },
              {
                name: "H\u00F4tel Jeanne d\u2019Arc Le Marais",
                type: "Charming 3-star \u00B7 Le Marais",
                price: "From \u20AC160/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/fr/jeanne-darc-le-marais.html?aid=2820480",
              },
              {
                name: "Le Bristol Paris",
                type: "Palace 5-star \u00B7 8th arrondissement",
                price: "From \u20AC900/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/fr/le-bristol.html?aid=2820480",
              },
              {
                name: "Generator Paris",
                type: "Design hostel \u00B7 Canal Saint-Martin",
                price: "From \u20AC35/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fr/generator-paris.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Skip-the-Line Eiffel Tower Summit",
                duration: "2 hrs",
                price: "From \u20AC45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=eiffel+tower+skip+the+line&partner_id=PSZA5UI",
              },
              {
                name: "Louvre Guided Tour (Small Group)",
                duration: "3 hrs",
                price: "From \u20AC65/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=louvre+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Versailles Full Day from Paris",
                duration: "8 hrs",
                price: "From \u20AC55/person",
                url: "https://www.getyourguide.com/s/?q=versailles+day+trip+paris&partner_id=PSZA5UI",
              },
              {
                name: "Seine River Evening Cruise",
                duration: "1 hr",
                price: "From \u20AC17/person",
                url: "https://www.getyourguide.com/s/?q=seine+river+cruise+paris&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid in Paris</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF9F\uFE0F",
                  title: "Buying Eiffel Tower Tickets at the Gate",
                  desc: "The queues to buy tickets at the Eiffel Tower are routinely 2\u20133 hours long in peak season. Book online at tour-eiffel.fr at least 2 days ahead (often 1\u20132 weeks in summer). Slots sell out. This is not optional advice \u2014 it determines whether you actually go up.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "\uD83D\uDDFA\uFE0F",
                  title: "Visiting the Louvre Without a Plan",
                  desc: "The Louvre is 60,000 square metres \u2014 larger than the Vatican. Without a plan, visitors wander for 3 hours and see nothing memorable. Pick five anchors: Mona Lisa, Venus de Milo, Winged Victory, Egyptian Antiquities, Dutch Masters. Set a 3-hour limit and leave satisfied.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83C\uDF7D\uFE0F",
                  title: "Eating Near Tourist Landmarks",
                  desc: "Restaurants within 200 metres of the Eiffel Tower, Louvre, or Notre-Dame charge 3x the price for food that\u2019s 3x worse. Walk 5\u201310 minutes in any direction. The Rue Cler market street (7th arr., near the tower) has excellent neighbourhood restaurants at normal Paris prices.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "\uD83D\uDEB6",
                  title: "Not Building in Enough Walking Time",
                  desc: "Paris\u2019s greatest moments happen between destinations \u2014 the perfect cheese shop, the courtyard you stumbled through, the conversation in a square. Google Maps says 12 minutes between sites; budget 20\u201325. The city rewards slow travel far more than efficient itinerary-ticking.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Paris</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDFAB",
                  title: "The Paris Museum Pass Is Genuinely Worth It",
                  desc: "The Museum Pass (\u20AC52/2 days, \u20AC67/4 days, \u20AC78/6 days) covers the Louvre (\u20AC22), Versailles (\u20AC20), Sainte-Chapelle (\u20AC13.50), Mus\u00E9e d\u2019Orsay (\u20AC16), and 50+ other museums \u2014 and critically, lets you skip the ticket queue at every one. If you visit 3+ sites, it pays for itself and saves 30\u201345 minutes per site.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDE87",
                  title: "The Navigo D\u00E9couverte Weekly Pass Beats Individual Tickets",
                  desc: "A single M\u00E9tro journey costs \u20AC2.15. The Navigo D\u00E9couverte weekly pass costs \u20AC30 and covers unlimited travel on M\u00E9tro, RER, bus, and tram \u2014 including the RER C to Versailles and RER B to CDG airport. Buy it at any M\u00E9tro station with a passport photo (or use the photo machine, \u20AC5).",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Paris Has Excellent Free Museums Most Visitors Miss",
                  desc: "Three free permanent collections worth an afternoon each: Mus\u00E9e Carnavalet (Paris city history, Le Marais), Petit Palais (fine arts from antiquity to 1914, gorgeous building), and Mus\u00E9e d\u2019Art Moderne de Paris (20th century, Matisse and Picasso). Free every day, no booking required.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83E\uDD56",
                  title: "The Supermarket Picnic Strategy",
                  desc: "Franprix and Monoprix are everywhere. A baguette costs \u20AC1.10 by law (regulated price). Excellent cave-aged cheese: \u20AC2\u20135. Decent wine: from \u20AC4 a bottle. Jambon de Paris: \u20AC2. A picnic at the Trocad\u00E9ro, Champ de Mars, or along the Seine costs \u20AC10 per person and beats every tourist restaurant near the landmarks.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Paris" />

          {/* Combine With */}
          <CombineWith currentSlug="paris-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do I need in Paris?",
                  a: "5 days is the ideal first visit \u2014 it covers the Eiffel Tower, Louvre, Versailles day trip, Montmartre, and Le Marais without rushing. 3 days is the minimum but forces hard choices. Extend to 7+ days if you want Giverny, the Champagne region, or deeper neighbourhood exploration.",
                },
                {
                  q: "When is the best time to visit Paris?",
                  a: "April\u2013June and September\u2013October. Spring brings chestnut blossoms, outdoor caf\u00E9 culture, and moderate crowds. September is arguably the best month \u2014 summer heat gone, tourist volumes down 30%, the city returns to locals. July\u2013August is genuinely hot (sometimes 38\u00B0C+) and exhaustingly crowded at major sites. December\u2013January is cold but the Christmas markets and festive lights on the Champs-\u00C9lys\u00E9es are magical.",
                },
                {
                  q: "Is Paris safe for tourists?",
                  a: "Paris is generally safe. The main practical risks are pickpockets at the Eiffel Tower, Louvre, Sacr\u00E9-C\u0153ur, and on M\u00E9tro line 1 (the tourist line). Use an anti-theft bag or keep wallets in front pockets. Avoid Ch\u00E2telet-Les Halles station late at night. Women travelling solo report Paris as safe with standard precautions.",
                },
                {
                  q: "How do I get from CDG Airport to central Paris?",
                  a: "The RER B train is the best option: \u20AC12.10, runs every 10\u201315 minutes, takes 35 minutes to central Paris (Ch\u00E2telet-Les Halles, Luxembourg, Saint-Michel). Catch it directly from CDG Terminal 2 or Terminal 1 via the CDGVAL shuttle. A taxi costs \u20AC50\u201370 fixed fare (legally mandated). Avoid unlicensed drivers outside the terminal who will charge \u20AC100+.",
                },
                {
                  q: "What should I eat in Paris?",
                  a: "In order of importance: a croissant from a proper boulangerie (not a caf\u00E9 \u2014 freshly baked, not reheated), steak frites at a classic bistro (Le Relais de l\u2019Entrec\u00F4te has mastered this), French onion soup at a brasserie, cr\u00EApes from a street stand in Montmartre, macarons from Pierre Herm\u00E9 (better than Ladur\u00E9e), and at least one supermarket picnic on the Seine.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Paris trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-paris", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/paris-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-paris", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/paris-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="paris-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nice in 3 Days &mdash; Riviera &amp; Old Town", href: "/blog/nice-3-days" },
                { label: "Lyon 3 Days &mdash; Food Capital of France", href: "/blog/lyon-3-days" },
                { label: "Barcelona 4 Days &mdash; Gaud\u00ED &amp; Tapas", href: "/blog/barcelona-4-days" },
                { label: "Rome 4 Days &mdash; Colosseum to Vatican", href: "/blog/rome-4-days" },
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
