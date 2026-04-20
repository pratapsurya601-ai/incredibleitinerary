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
const MSM_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Mont Saint-Michel Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "2-Day Itinerary" },
  { id: "sights",      emoji: "🏛️", label: "Sights & Experiences" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Mont Saint-Michel 2-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mont Saint-Michel in 2 Days — tides, abbey and the bay crossing&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days"
        imageUrl="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80"
        description="Mont Saint-Michel in 2 Days: Abbey tour, bay crossing on foot, tide timing secrets, medieval Grand Rue, D-Day road trip — complete guide with real costs."
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
export default function MontSaintMichelClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MSM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mont Saint-Michel" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mont saint michel island abbey tidal normandy france mist"
            fallback="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1600&q=80"
            alt="Mont Saint-Michel island abbey rising from tidal flats in morning mist Normandy France"
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
              <span className="text-white/70">Mont Saint-Michel 2 Days</span>
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
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mont Saint-Michel in 2 Days:
                <em className="italic text-amber-300"> Tides, Abbey &amp; the Bay Crossing</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A Gothic abbey on a tidal island, quicksand bay crossings with a guide, the legendary M&egrave;re Poulard omelette, and one of France&apos;s great road trips combined with the D-Day beaches.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="10 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇫🇷 Normandy, France</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From &euro;40/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mont Saint-Michel is one of those rare places that genuinely looks like the photographs &mdash; a Gothic abbey perched on a rocky island, rising from tidal flats that flood twice daily, connected to the mainland by a causeway that the sea swallows at high tide. Combine it with D-Day beaches for one of France&apos;s great road trips.
            </p>
          </blockquote>

          {/* ── WHAT MONT SAINT-MICHEL ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mont Saint-Michel Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mont Saint-Michel is a granite island roughly 1 kilometre off the Normandy coast, crowned by a Benedictine abbey that has been built, rebuilt, and expanded over more than 1,000 years &mdash; from the original 8th-century oratory to the Flamboyant Gothic spire visible today. The abbey sits at the summit, with a medieval village cascading down the rock below it: narrow streets, half-timbered houses, small chapels, and defensive ramparts encircling the whole island.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The bay surrounding it is one of the most dramatic tidal environments in Europe. The tidal range reaches up to 14 metres &mdash; one of the largest in the world. At low tide, the island is surrounded by vast sand flats stretching to the horizon. At high tide, particularly during spring tides with coefficients above 100, the sea rushes in at extraordinary speed and the island becomes completely surrounded by water. Medieval pilgrims died making the crossing; quicksand zones still claim the unwary.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three million visitors arrive annually, most between 10am and 4pm in summer. The medieval Grande Rue becomes a shoulder-to-shoulder queue. The trick is simple: arrive early, stay late, or better yet spend the night on the island and experience it after the day-trippers leave at 7pm. That&apos;s when Mont Saint-Michel becomes genuinely magical.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Paris" value="3.5–4.5 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🌊" label="Tidal Range" value="Up to 14m" />
              <StatCard icon="💰" label="Budget From" value="€40/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mont Saint-Michel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Spring — Best Season",
                  d: "15–22°C, long days, manageable crowds outside weekends. The bay is at its most photogenic with clear light and green salt marshes. Spring tides in March and April can be spectacular &mdash; coefficients regularly exceed 100. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Autumn — Equally Excellent",
                  d: "14–20°C, golden light, thinning crowds after Labour Day. September equinox tides are among the highest of the year. Hotel prices drop after mid-September. The bay often has atmospheric morning mist that burns off by 10am.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Crowded Peak",
                  d: "18–28°C. Up to 15,000 visitors per day on the island. The Grande Rue is a slow-moving queue. Still spectacular but arrive at 8am or after 6pm. Staying overnight on the island is essential in summer &mdash; the island empties dramatically after 7pm.",
                  b: "Arrive early or late",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Dramatic & Quiet",
                  d: "4–10°C, frequent rain, very few tourists. The island in winter mist is hauntingly atmospheric. Winter storms produce extraordinary tides and dramatic sea conditions. Some restaurants close but the abbey remains open year-round. A completely different experience.",
                  b: "For atmosphere",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Mont Saint-Michel</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Mont Saint-Michel has no railway station. The nearest TGV station is <strong className="font-medium">Rennes</strong> (1h15 by bus) or <strong className="font-medium">Dol-de-Bretagne</strong> (30 min by shuttle). Most travellers arrive by TGV from Paris to Rennes then connect by bus. A free shuttle runs from the mainland car park to the island.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "TGV from Paris via Rennes (recommended)",
                  d: "Paris Montparnasse to Rennes: 1h30 by TGV (€25–€70 depending on booking time). From Rennes, Flixbus or Keolis bus to Mont Saint-Michel: 1h15, approximately €15. Total journey time: 3–4 hours. Book TGV tickets early on SNCF Connect for the best fares.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Paris",
                  d: "360km via the A13 and A84 motorways, approximately 4 hours. The approach through the Normandy countryside is scenic. Parking at the mainland car park costs €14.90 per day (2026 rate). The free shuttle bus or the 2.5km causeway walk connects to the island.",
                  b: "Most flexible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Rennes or Saint-Malo",
                  d: "Direct buses from Rennes (1h15, €15) and Saint-Malo (1h15, €8–€12) run several times daily in season. Saint-Malo is a beautiful walled port city worth a night in its own right. Reduced service in winter &mdash; check schedules.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚐",
                  t: "Organised day trip from Paris",
                  d: "Full-day guided tours from Paris run year-round (€120–€180 per person, 14-hour day). Convenient but exhausting &mdash; 8 hours of driving for 3–4 hours on the island. Better to stay overnight if possible. Available through GetYourGuide and Viator.",
                  b: "If time is short",
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

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 2-Day Mont Saint-Michel Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Check tide tables at ot-montsaintmichel.com before booking &mdash; the highest coefficient tides (80+) transform the experience entirely. Time your visit around the tide, not the other way around.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival, Causeway Walk, Grande Rue &amp; Ramparts at Sunset"
                cost="€40–€80"
                items={[
                  "Arrive by early afternoon &mdash; TGV from Paris Montparnasse to Rennes (1h30, €25–€70) then bus to Mont Saint-Michel (1h15, ~€15). Alternatively drive from Paris (4 hours via A13/A84) or from Saint-Malo (1 hour).",
                  "Check tide tables before arrival at ot-montsaintmichel.com. The highest coefficient tides (80+) are the most spectacular. Time your first walk to coincide with an incoming or outgoing tide &mdash; watching the water flood the bay is unforgettable.",
                  "Walk the 2.5km causeway from the car park rather than taking the free shuttle bus. The approach on foot is far more atmospheric &mdash; the island grows in scale as you near it, and the tidal flats on either side give the crossing its proper sense of drama.",
                  "Rampart walk (free) &mdash; the medieval defensive walls encircle the entire lower island. The views from the ramparts over the bay and tidal flats are exceptional at any tide state. Walk the full circuit &mdash; different sections face east, west, and north, each with distinct views.",
                  "Grande Rue exploration &mdash; the main medieval street climbing steeply from the Porte du Roy to the abbey. Half-timbered houses dating to the 15th and 16th centuries, small chapels, artisan shops selling Normandy butter and fleur de sel. Touristy by day but genuinely atmospheric after 6pm when the crowds thin.",
                  "Sunset from the ramparts &mdash; the light on the tidal flats at dusk is extraordinary. In summer, sunset comes after 9pm and the abbey is lit golden against the darkening sky. This is the moment that makes staying overnight worthwhile.",
                  "Dinner at La Sir&egrave;ne cr&ecirc;perie &mdash; galettes (savoury buckwheat cr&ecirc;pes) with local Camembert, andouille sausage, or scallops from the bay. €12–€18 per person. Normandy is cr&ecirc;pe country and the galettes here are excellent.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Abbey Tour, Bay Crossing on Foot &amp; Departure"
                cost="€30–€60"
                items={[
                  "8:00am &mdash; Arrive at the abbey entrance before tour groups. The free shuttle runs from 7:30am. The island is radically different in early morning with almost no visitors &mdash; the Grande Rue is empty and the ramparts are yours alone.",
                  "9:00am &mdash; Abbey of Mont Saint-Michel opens (€11 adults, audioguide included). Allow 1.5–2 hours for a thorough visit. The abbey was built over 1,000 years across Carolingian, Romanesque, and Gothic periods.",
                  "Abbey highlights: the Cloister garden (13th-century double colonnade suspended between sea and sky), the Refectory (monks&apos; dining hall with remarkable natural light from invisible windows), the Crypts below the main church (massive columns supporting the weight of the nave above), the Knights&apos; Hall, and the views from the abbey terrace over the entire bay.",
                  "11:00am &mdash; Exit before the main tour group crush arrives (typically 10am–3pm on summer days). The abbey interior becomes genuinely unpleasant when overcrowded.",
                  "12:00pm &mdash; Light lunch on the island or return to the mainland for better prices. A cr&ecirc;pe and cider on the ramparts is a perfect quick meal (€8–€12).",
                  "2:00pm &mdash; Guided bay crossing on foot (€10–€15 per person, approximately 2.5 hours). Book at decouvertebaie.com or guide-baie.com. A certified guide is mandatory &mdash; the bay has genuine quicksand zones where the sand surface looks solid but can trap you instantly. The tidal bore can move faster than a galloping horse. With a guide it is completely safe and one of the best experiences in all of Normandy.",
                  "5:00pm &mdash; Depart towards Bayeux (1 hour south) for the 11th-century tapestry and the D-Day beaches, or return to Rennes or Saint-Malo for your onward journey.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mont Saint-Michel" onPlanTrip={() => setModalOpen(true)} />

          {/* ── SIGHTS & EXPERIENCES ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Sights &amp; Experiences</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights and experiences in order of priority. Prices as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Abbey of Mont Saint-Michel",
                  e: "€11 (adults)",
                  d: "The masterpiece of medieval architecture crowning the island. Built over 1,000 years from the 8th-century Carolingian oratory to the Flamboyant Gothic spire. The Cloister garden, suspended between sea and sky, is one of the most serene spaces in France. The audioguide is included and excellent. Arrive at 9am opening to avoid crowds.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Guided Bay Crossing on Foot",
                  e: "€10–€15 per person",
                  d: "Walking across the tidal flats with a certified guide reveals the true character of the bay &mdash; the quicksand zones, the speed of the incoming tide, and the extraordinary feeling of approaching the island on foot as medieval pilgrims did. Mandatory guide for safety. Book at decouvertebaie.com or guide-baie.com.",
                  t: "Must do · 2.5 hrs",
                },
                {
                  n: "Grande Rue &amp; Medieval Village",
                  e: "Free",
                  d: "The steep main street climbing from the Porte du Roy to the abbey. Half-timbered houses from the 15th and 16th centuries, small chapels, artisan shops. Extremely crowded 10am–4pm in summer but atmospheric and nearly empty at dawn or after 6pm. The side alleys and staircases off the Grande Rue are far less visited.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Rampart Walk",
                  e: "Free",
                  d: "The complete circuit of the medieval defensive walls takes roughly 30 minutes. Different sections face east, west, and north with distinct views of the bay, the causeway, and the salt marshes. The best free activity on the island and spectacular at sunset or sunrise.",
                  t: "Must see · 30–45 mins",
                },
                {
                  n: "Spring Tides (Les Grandes Mar&eacute;es)",
                  e: "Free",
                  d: "During spring tides with coefficients above 100, the sea rushes into the bay at extraordinary speed, completely surrounding the island. These occur roughly every fortnight, with the most dramatic tides near the equinoxes in March and September. Published a year in advance at ot-montsaintmichel.com. Worth planning your entire trip around if you have schedule flexibility.",
                  t: "Spectacular · Schedule dependent",
                },
                {
                  n: "Causeway Walk",
                  e: "Free (shuttle also free)",
                  d: "The 2.5km causeway from the car park to the island is an experience in itself. The approach on foot lets you appreciate the scale of the island gradually. Walk one way and take the free shuttle back if tired. The causeway is elevated above the tidal plain &mdash; at high tide, water floods underneath.",
                  t: "Recommended · 30 mins each way",
                },
                {
                  n: "D-Day Beaches (day trip extension)",
                  e: "€9–€10 per museum",
                  d: "One hour south of Mont Saint-Michel. Omaha Beach, the American Cemetery at Colleville-sur-Mer (free, 9,387 white marble crosses), Utah Beach Museum (€9), Pointe du Hoc. The combination of medieval pilgrimage site and 20th-century battlefield creates one of France&apos;s great historical road trips. Add Bayeux for the 11th-century tapestry (€10).",
                  t: "Extension · Full day",
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
            title="Mont Saint-Michel &mdash; Tides, Stone &amp; Light"
            subtitle="A Gothic abbey rising from the bay, surrounded by the largest tidal flats in Europe."
            spots={[
              {
                name: "Abbey at High Tide",
                query: "mont saint michel abbey high tide water surrounding island normandy",
                desc: "The abbey during a spring high tide &mdash; the entire island surrounded by water, as it has appeared to pilgrims for a thousand years.",
              },
              {
                name: "Tidal Flats at Low Tide",
                query: "mont saint michel low tide sand flats bay normandy france",
                desc: "The vast expanse of sand flats at low tide, stretching to the horizon around the island &mdash; a landscape that transforms twice daily.",
              },
              {
                name: "Grande Rue Medieval Street",
                query: "mont saint michel grande rue medieval street half timbered houses",
                desc: "The main medieval street climbing steeply from the gate to the abbey, lined with 15th-century half-timbered houses.",
              },
              {
                name: "Abbey Cloister Garden",
                query: "mont saint michel abbey cloister garden columns normandy france",
                desc: "The 13th-century Cloister garden with its double colonnade &mdash; one of the most serene spaces in medieval architecture.",
              },
              {
                name: "Causeway Approach",
                query: "mont saint michel causeway approach walking normandy france",
                desc: "The 2.5km causeway approaching the island &mdash; the view that has defined Mont Saint-Michel for travellers since the bridge was built.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mont Saint-Michel can be done on a tight budget by staying on the mainland, or splurged on by staying on the island itself. The biggest cost variable is accommodation &mdash; island hotels are 3&ndash;5x mainland prices but the experience of the island after dark is transformative.
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
                    ["🏨 Accommodation (per night)", "€40–€70", "€100–€200", "€250–€400"],
                    ["🍽️ Food (per day)", "€12–€20", "€35–€60", "€80–€150"],
                    ["🚌 Transport (from Paris return)", "€50–€80", "€50–€80", "€50–€100"],
                    ["🏛️ Abbey + Bay crossing", "€21–€26", "€21–€80", "€50–€150"],
                    ["🅿️ Parking (if driving)", "€15/day", "€15/day", "€15/day"],
                    ["TOTAL (per person per day)", "€52–€93", "€180–€350", "€480–€850"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€40–€65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Pontorson (10km away, €40–€70/night) or Avranches (23km, €45–€75/night). Eat galettes and cr&ecirc;pes on the island (€12–€18) and dinner at mainland restaurants at local prices. Take the bus from Rennes rather than driving.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–€180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay on the island at Auberge Saint-Pierre or nearby Les Pr&eacute;s Sal&eacute;s (€100–€200/night). The experience of the island after the day-trippers leave at 7pm justifies the premium. Dinner at La M&egrave;re Poulard for the famous omelette.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">H&ocirc;tel La M&egrave;re Poulard (€200–€350/night) with sea-facing rooms and abbey views. Private bay crossing with a geologist guide. The full M&egrave;re Poulard tasting menu. Helicopter flight over the bay (seasonal).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              There are two distinct options: on the island (expensive but unforgettable after 7pm when day-trippers leave) or on the mainland in Pontorson, Avranches, or the surrounding countryside (dramatically cheaper, 15–20 minutes by car or bus). One night on the island is worth the premium if your budget allows.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "H&ocirc;tel Le Mouton Blanc",
                  type: "Historic hotel · On the island",
                  price: "From €120/night",
                  badge: "Best value on island",
                  desc: "One of the oldest hotels on Mont Saint-Michel, located on the Grande Rue. Charming rooms in a medieval building with exposed stone walls. The advantage is the same as all island hotels: the island to yourself after 7pm. Breakfast included. Book well in advance for summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Auberge Saint-Pierre",
                  type: "Boutique hotel · On the island",
                  price: "From €150/night",
                  badge: "Most atmospheric",
                  desc: "The best-regarded hotel on the island itself &mdash; a 15th-century half-timbered building on the Grande Rue with bay-view rooms. The restaurant is one of the better options on the island. Staying here means waking at 6am to walk empty ramparts with the tide coming in. Exceptional.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Les Pr&eacute;s Sal&eacute;s",
                  type: "Country hotel · Mainland (2km from causeway)",
                  price: "From €90/night",
                  badge: "Best mainland option",
                  desc: "A well-run hotel just 2km from the causeway with views of Mont Saint-Michel from many rooms. Named after the pr&eacute;s sal&eacute;s (salt-meadow lamb) that graze on the tidal marshes &mdash; available at the restaurant. Free parking and easy access to the shuttle. The best compromise of price and proximity.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotels in Pontorson",
                  type: "Budget · Mainland (10km from MSM)",
                  price: "€40–€70/night",
                  badge: "Best budget",
                  desc: "Pontorson is the nearest town with affordable accommodation. Multiple small hotels and B&amp;Bs at a fraction of island prices. Bus service to Mont Saint-Michel runs regularly. Good restaurants at local prices for dinner. The practical choice for budget travellers.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: stay.name }} />
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: stay.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Island restaurants operate on tourist pricing &mdash; expect to pay 2&ndash;3x mainland prices. The famous M&egrave;re Poulard omelette is worth trying once (€30+), but daily meals are better value in Pontorson or Avranches. Normandy cuisine centres on butter, cream, Camembert, cider, Calvados, and exceptional seafood.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La M&egrave;re Poulard",
                  t: "Legendary omelette house · On the island",
                  d: "The most famous restaurant on Mont Saint-Michel, operating since 1888. The signature omelette is beaten and cooked over an open wood fire in the traditional manner &mdash; theatrical and genuinely delicious. €30+ for the omelette alone, €40–€60 for the full menu. A once-in-a-trip experience rather than a daily meal.",
                  b: "Iconic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Sir&egrave;ne Cr&ecirc;perie",
                  t: "Galettes &amp; cr&ecirc;pes · On the island",
                  d: "The best-value food option on the island. Savoury galettes (buckwheat cr&ecirc;pes) with Normandy Camembert, andouille sausage, or bay scallops (€12–€18). Sweet cr&ecirc;pes with salted caramel butter for dessert. Pair with a bowl of dry Normandy cider. The closest to local prices you&apos;ll find on the island.",
                  b: "Best value on island",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Restaurants in Pontorson",
                  t: "Local Normandy cuisine · Mainland (10km)",
                  d: "Pontorson has several excellent restaurants at mainland prices. Expect traditional Normandy fare: moules marini&egrave;res, sole normande, pr&eacute; sal&eacute; lamb (raised on the salt marshes around the bay), and local cheeses. €15–€25 for a full meal with wine. A dramatically better deal than eating every meal on the island.",
                  b: "Best prices",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Les Pr&eacute;s Sal&eacute;s Restaurant",
                  t: "Salt-meadow lamb · Near causeway",
                  d: "Named after and specialising in the famous pr&eacute;s sal&eacute;s lamb that grazes on the tidal salt marshes surrounding Mont Saint-Michel. The lamb develops a distinctive flavour from the salt grasses &mdash; considered a Normandy delicacy. €25–€40 for a lamb-focused meal. Worth trying at least once.",
                  b: "Local specialty",
                  c: "bg-orange-50 border-orange-200",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: r.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Mont Saint-Michel Normandy"
            hotels={[
              {
                name: "Auberge Saint-Pierre",
                type: "Boutique · On the island, Grande Rue",
                price: "From €150/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/fr/auberge-saint-pierre-le-mont-saint-michel.html?aid=2820480",
              },
              {
                name: "H\u00f4tel Le Mouton Blanc",
                type: "Historic · On the island",
                price: "From €120/night",
                rating: "4",
                badge: "Best value on island",
                url: "https://www.booking.com/hotel/fr/le-mouton-blanc-le-mont-saint-michel.html?aid=2820480",
              },
              {
                name: "H\u00f4tel La M\u00e8re Poulard",
                type: "Luxury · On the island",
                price: "From €200/night",
                rating: "5",
                badge: "Most famous",
                url: "https://www.booking.com/hotel/fr/la-mere-poulard.html?aid=2820480",
              },
              {
                name: "Les Pr\u00e9s Sal\u00e9s",
                type: "Country hotel · Near causeway",
                price: "From €90/night",
                rating: "4",
                badge: "Best mainland",
                url: "https://www.booking.com/hotel/fr/les-pres-sales-le-mont-saint-michel.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Guided Bay Crossing on Foot",
                duration: "2.5 hrs",
                price: "From €10/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=mont+saint+michel+bay+crossing&partner_id=PSZA5UI",
              },
              {
                name: "Mont Saint-Michel Day Trip from Paris",
                duration: "14 hrs",
                price: "From €120/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=mont+saint+michel+day+trip+paris&partner_id=PSZA5UI",
              },
              {
                name: "Abbey Guided Tour",
                duration: "2 hrs",
                price: "From €50/person",
                url: "https://www.getyourguide.com/s/?q=mont+saint+michel+abbey+tour&partner_id=PSZA5UI",
              },
              {
                name: "D-Day Beaches from Mont Saint-Michel",
                duration: "8 hrs",
                price: "From €85/person",
                url: "https://www.getyourguide.com/s/?q=d+day+beaches+normandy+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mont Saint-Michel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌊",
                  title: "Check tide tables before booking your trip",
                  desc: "Tide coefficients are published a year in advance at ot-montsaintmichel.com. Coefficients above 80 produce dramatic flooding of the bay. Coefficients above 100 are extraordinary &mdash; the entire bay surrounding the island fills completely. These happen a few times a year, most dramatically near the March and September equinoxes. If you have schedule flexibility, plan around a coefficient of 90+.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Stay overnight on the island",
                  desc: "The single best decision you can make for your Mont Saint-Michel experience. Day-trippers leave by 7pm and the island transforms completely &mdash; empty ramparts, quiet streets, the abbey lit golden against the sky. Waking at 6am to walk the ramparts with the tide coming in is one of France&apos;s great travel moments. The price premium over mainland hotels is significant but the experience is incomparable.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚶",
                  title: "Walk the causeway, don&apos;t take the shuttle",
                  desc: "The free shuttle bus from the car park is convenient but the 2.5km causeway walk is far more atmospheric. The island grows in scale as you approach, the tidal flats stretch in every direction, and you arrive with the proper sense of pilgrimage that has defined Mont Saint-Michel for a thousand years. Walk one way and shuttle back if tired.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "⏰",
                  title: "Arrive at 8am or after 6pm",
                  desc: "Between 10am and 4pm on summer days, the island receives up to 15,000 visitors. The Grande Rue becomes a slow-moving queue and the abbey terrace is a crowd scrum. Arrive at 8am when the abbey opens at 9am, or come in the late afternoon and stay through sunset. The midday window is the worst possible time to experience Mont Saint-Michel.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🥾",
                  title: "Never cross the bay without a certified guide",
                  desc: "The bay looks like a safe, flat beach at low tide. It is not. Quicksand zones are invisible until you step into them, and the tidal bore can move faster than a person can run. Certified guides from D&eacute;couverte de la Baie (decouvertebaie.com) or Guide de la Baie (guide-baie.com) cost €10–€15 per person. With a guide it is completely safe.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗺️",
                  title: "Combine with D-Day beaches for the complete Normandy trip",
                  desc: "Mont Saint-Michel and the D-Day beaches form one of France&apos;s great 3&ndash;4 day road trips. Add Bayeux (the 11th-century tapestry), the American Cemetery at Colleville-sur-Mer, Pointe du Hoc, and Saint-Malo. The drive from Mont Saint-Michel to Omaha Beach is approximately 1 hour. Medieval pilgrimage and 20th-century history in one journey.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mont Saint-Michel" />

          {/* Combine With */}
          <CombineWith currentSlug="mont-saint-michel-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Mont Saint-Michel worth visiting?",
                  a: "Unambiguously yes \u2014 it is one of the world\u2019s genuinely great sights and it delivers on its photographs. The key variables are tide timing (check coefficient tables), time of day (early morning or evening, not midday in summer), and whether you go beyond the causeway to do the bay crossing. Get those three things right and it is exceptional.",
                },
                {
                  q: "Can I walk across the bay to Mont Saint-Michel?",
                  a: "Yes, but only with a certified guide. The bay crossing takes approximately 2.5 hours and crosses genuine quicksand zones \u2014 the sand surface looks solid but can trap you instantly in certain areas. The tidal bore can move faster than a galloping horse. Certified guides from D\u00e9couverte de la Baie (decouvertebaie.com) or Guide de la Baie (guide-baie.com) cost \u20ac10\u201315 per person. With a guide it is completely safe and one of the best things you can do in Normandy.",
                },
                {
                  q: "How long does the Abbey tour take?",
                  a: "1.5\u20132 hours at a relaxed pace. The audioguide (included in the \u20ac11 ticket) is excellent. Focus on the Cloister garden, the Refectory with its remarkable natural lighting, the Crypts below the main abbey, the Knights\u2019 Hall, and the views from the abbey terrace over the bay.",
                },
                {
                  q: "Where should I stay \u2014 on the island or mainland?",
                  a: "On the island for atmosphere: the main options are Auberge Saint-Pierre, H\u00f4tel Le Mouton Blanc, and H\u00f4tel La M\u00e8re Poulard (\u20ac120\u2013350/night). The major advantage is having the island to yourself after 7pm when day-trippers leave. Mainland (Pontorson or Avranches) for budget: \u20ac40\u201375/night, 15\u201320 minutes by bus or car. If your budget allows, one night on the island is worth it.",
                },
                {
                  q: "What is the best time of year to visit Mont Saint-Michel?",
                  a: "April\u2013June and September\u2013October offer the best combination of good weather, manageable crowds, and clear visibility across the bay. July\u2013August is peak season \u2014 still spectacular but very crowded, arrive early or stay overnight. December\u2013January is quiet, cold, and dramatically atmospheric with extraordinary winter tides and mist that most visitors never see.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mont Saint-Michel trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/mont-saint-michel-2-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mont-saint-michel-2-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/mont-saint-michel-2-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/paris-5-days", label: "Paris in 5 Days", icon: "🗼" },
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
          <RelatedGuides currentSlug="mont-saint-michel-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris in 5 Days &mdash; Complete Guide", href: "/blog/paris-5-days" },
                { label: "Nice 3 Days &mdash; French Riviera", href: "/blog/nice-3-days" },
                { label: "London in 4 Days &mdash; City Guide", href: "/blog/london-4-days" },
                { label: "Barcelona 4 Days &mdash; Gaud&iacute; &amp; Beyond", href: "/blog/barcelona-4-days" },
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