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
const SANTORINI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Santorini Actually Is" },
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
          href: `mailto:?subject=Santorini 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Santorini in 4 Days — caldera sunsets, volcanic beaches and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/santorini-4-days"
        imageUrl="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80"
        description="Santorini in 4 Days: Oia sunset timing, caldera boat tour, volcanic beaches, Akrotiri ruins, wine tasting — complete travel guide with real euro costs."
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
export default function SantoriniClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SANTORINI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Santorini" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="santorini oia white buildings blue domes caldera sunset greece"
            fallback="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80"
            alt="Santorini Oia village white buildings blue domed churches caldera sunset Greece"
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
              <span className="text-white/70">Santorini 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Caldera &amp; Blue Domes
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Santorini in 4 Days:
                <em className="italic text-amber-300"> Sunsets, Volcanoes &amp; the Caldera</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Oia sunset timing secrets, the Fira-to-Oia caldera hike, volcanic black sand beaches, Akrotiri&apos;s Bronze Age ruins and cave hotels carved into the cliff. The complete guide with real costs in EUR &amp; USD.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇬🇷 Greece</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From ~$88/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The most photographed sunset on earth is worth every tourist — if you position yourself at Oia Castle by 5:30pm, not 7pm when the crowds are 10-deep. Add black sand beaches that stay warm after dark, wine grown in volcanic soil with a mineral taste you won&apos;t find anywhere else, and cave hotels carved into the caldera cliff. This guide tells you exactly when to be where.
            </p>
          </blockquote>

          {/* ── WHAT SANTORINI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Santorini Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Santorini is the remnant of a catastrophic volcanic eruption around 1600 BC that destroyed the Minoan settlement of Akrotiri and created the flooded caldera you see today. The island is a crescent-shaped cliff edge — the western side drops 300 metres straight into the caldera, and that sheer drop is where Oia, Fira and Imerovigli sit with their white-washed buildings and blue-domed churches. The eastern side is flat, with black sand beaches formed from volcanic rock at Perissa and Kamari.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Santorini receives over 2 million visitors per year on an island of just 15,000 residents. In July and August, cruise ships unload 10,000+ day-trippers into Fira before noon. The caldera-side villages become shoulder-to-shoulder walking queues. The same island in April, May, or October is a completely different place — half the price, a quarter of the crowds, and warm enough to swim.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the right amount of time. You get the Oia sunset, the caldera hike, a boat tour to the volcano and hot springs, the Red Beach and Akrotiri ruins, wine tasting, and enough time to actually sit on a terrace and absorb the views rather than rushing between Instagram spots.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="JTR (Thira)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr-Jun, Sep-Oct" />
              <StatCard icon="🌋" label="Caldera Depth" value="400m" />
              <StatCard icon="💰" label="Budget From" value="~$88/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Santorini</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr-Jun",
                  i: "☀️",
                  t: "Shoulder Season — Best Overall",
                  d: "20-28°C with clear skies and minimal rain. Wildflowers bloom across the caldera rim, the sea is warm enough to swim by late May, and accommodation prices are 30-50% lower than peak. Restaurants and boat tours are fully operational but not overwhelmed. This is the sweet spot.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul-Aug",
                  i: "🔥",
                  t: "Peak Summer — Hottest & Busiest",
                  d: "30-35°C with relentless sun and zero rain. Cruise ships unload 10,000+ daily into Fira. Oia sunset viewpoint is standing-room only by 6pm. Accommodation prices triple and many caldera-view hotels require 3-night minimums. The meltemi wind provides some relief but can cancel boat tours. Book 4-6 months ahead or pay premium prices.",
                  b: "Great weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep-Oct",
                  i: "🌅",
                  t: "Late Shoulder — Great Value",
                  d: "24-28°C with warm sea temperatures (best swimming of the year). Crowds thin rapidly after mid-September. Prices drop 20-40%. The light is golden and the sunsets are arguably the best of the year. October is quieter still — some restaurants begin closing at month-end but the main villages remain fully open.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov-Mar",
                  i: "🌧️",
                  t: "Winter — Quiet & Cheap",
                  d: "12-16°C with rain, wind and grey skies. Most hotels, restaurants and boat operators close from November through March. Fira and Oia feel like ghost towns. Flights are limited. Only visit in winter if you specifically want solitude and dramatic stormy seas — it is hauntingly beautiful but not a beach holiday.",
                  b: "Not recommended for first visit",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Santorini</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Santorini&apos;s Thira Airport (JTR) is tiny — only 2 flights can land at once. Luggage collection is slow and taxi queues build fast. <strong className="font-medium">Indian passport holders need a Schengen visa (apply 15-45 days ahead, ~$90/~$88 fee).</strong> Most Western passports get 90 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "JTR Airport — Direct flights",
                  d: "Direct seasonal flights from London, Amsterdam, Frankfurt and Paris in summer. Year-round connections via Athens (45 min, ~$44-130/~$40-120 one way on Aegean or Sky Express). The airport is 6km from Fira — taxi ~$22/~$20, bus ~$2.20/~$2. Pre-book transfers in peak season as taxi queues reach 45+ minutes in July-August.",
                  b: "Fastest option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "Athens ferry from Piraeus",
                  d: "The classic route. High-speed ferry takes 5 hours (~$66-88/~$60-80). Overnight ferry takes 7.5 hours — book a cabin (~$44-66/~$40-60 extra) for a bed and private bathroom. Blue Star Ferries and SeaJets are the main operators. Book on ferryhopper.com 2-4 weeks ahead in summer. The ferry arrives at Athinios port, 10km from Fira.",
                  b: "Classic experience",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India via Athens",
                  d: "No direct flights from India to Santorini. Fly Delhi or Mumbai to Athens (6-8 hours, from ~$440/~$400 return on Air India, Etihad or Turkish via stopover). Then Athens to Santorini by air (45 min) or ferry. Apply for Schengen visa at the Greek embassy — you need bank statements showing ~$110/~$100/day of stay, travel insurance with min ~$33,000/~$30,000 coverage, hotel bookings and return tickets.",
                  b: "Via Athens",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚐",
                  t: "Getting around the island",
                  d: "Local KTEL buses connect Fira to Oia (~$2/~$1.80, 25 min), Perissa (~$2.50/~$2.30, 30 min), Kamari and Akrotiri. Buses run every 30-90 min depending on route and season. ATV rental is popular (~$33-55/~$30-50/day) but insurance rarely covers them. Taxis are scarce — pre-book for airport transfers. Walking the caldera path from Fira to Oia is free and better than any bus ride.",
                  b: "Bus + walking",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Santorini Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (~$220-385/~$200-350 per day). Each day card is expandable. The route assumes you are based in Fira or Imerovigli with day trips to Oia, the beaches and the volcano. Budget and luxury alternatives are noted in cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Fira, Caldera Walk & Sunset at Skaros Rock"
                cost="~$77-99 / ~$70-90 excluding accommodation"
                items={[
                  "Arrive at JTR airport or Athinios ferry port. Transfer to Fira or Imerovigli — taxi ~$22/~€20, bus ~$2.20/~€2. Budget: hostel or studio in Fira (~$39-66/~€35-60/night). Mid-range: caldera-view hotel in Imerovigli (~$110-198/~€100-180/night). Luxury: cave suite with infinity pool (~$330-660/~€300-600/night).",
                  "Afternoon: Walk the caldera path from Fira through Firostefani to Imerovigli (3km, free, paved). This is the best free activity on the island — the caldera views are non-stop and each village has a slightly different character. Stop for coffee at a terrace along the way (~$4.40-5.50/~€4-5).",
                  "5:30pm — Hike up to Skaros Rock above Imerovigli (15 min climb). This is the sunset alternative to Oia — equally stunning views with a fraction of the crowds. Bring a bottle of Assyrtiko wine (~$5.50-8.80/~€5-8 from a minimarket) and watch the sun drop into the caldera.",
                  "7:30pm — Dinner in Fira. Budget: gyros or souvlaki for ~$8.80/~€8. Mid-range: taverna with caldera view for ~$22-33/~€20-30 per person. Try the Santorini tomato fritters (tomatokeftedes) — a local specialty made from the island's cherry tomatoes.",
                  "9:00pm — Walk Fira's main street at night. The caldera-side restaurants lit up against the dark sea is one of the most beautiful evening walks in the Mediterranean.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Oia Sunset, Blue Domes & Fira-to-Oia Hike"
                cost="~$66-99 / ~$60-90 excluding accommodation"
                items={[
                  "8:00am — Start the Fira to Oia caldera hike (10km, 3-4 hours, free). The trail follows the cliff edge through Firostefani, Imerovigli and along the caldera rim to Oia. Carry 1.5L water, sunscreen and a hat — there is almost no shade. The views are extraordinary the entire way and this is the single best thing you can do on Santorini.",
                  "12:00pm — Arrive in Oia. Lunch at a cafe with caldera views (~$15-22/~€14-20). Explore the village — the famous blue domes (find them at the path below the main church), art galleries, and the Venetian castle ruins.",
                  "2:00pm — Walk down to Ammoudi Bay (300 steps from Oia). Tiny fishing harbour with tavernas serving fresh seafood right on the water. Swim off the rocks if you want a caldera swim. The grilled octopus here is some of the best in Greece.",
                  "5:15pm — Position at Oia Castle (Byzantine castle ruins) for sunset. Arrive 45 minutes early to get a good spot — by 6:30pm in summer it is standing room only. The sunset over the caldera with the white buildings turning gold is genuinely one of the most spectacular views in Europe.",
                  "8:00pm — Dinner in Oia. More expensive than Fira — budget ~$28-39/~€25-35 for a sit-down meal. Or take the bus back to Fira (~$2/~€1.80, last bus usually 11pm) for cheaper options.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Akrotiri Ruins, Red Beach & Wine Tasting"
                cost="~$66-99 / ~$60-90 excluding accommodation"
                items={[
                  "9:00am — Bus to Akrotiri Archaeological Site (~$18/~€16 entry). This Bronze Age city was buried by the same volcanic eruption that created the caldera — often called the 'Pompeii of the Aegean'. Multi-storey buildings, frescoes, drainage systems and ceramics preserved under volcanic ash for 3,600 years. Allow 1-1.5 hours.",
                  "11:30am — Walk to Red Beach from Akrotiri (10 min). Dramatic red volcanic cliffs plunging into turquoise water. Sunbed ~$5.50/~€5. Swimming is excellent. The cliff can be unstable — stay close to the water rather than under the cliff face.",
                  "1:30pm — Bus or taxi to Santo Wines (or Domaine Sigalas). Wine tasting with caldera views — ~$22/~€20 for a flight of 3-4 wines. Santorini's volcanic soil produces Assyrtiko, a unique white wine with mineral, citrus and saline notes unlike anything else in the world. A bottle costs ~$17-28/~€15-25 locally.",
                  "4:00pm — Optional stop at Pyrgos village on the way back. Medieval hilltop village with panoramic views, far fewer tourists than Oia, and excellent small tavernas. The 360-degree view from the Kasteli ruins at the top is arguably the best on the island.",
                  "7:00pm — Dinner at a local taverna away from the caldera strip. Metaxy Mas in Exo Gonia is considered the best traditional taverna on the island — expect to pay ~$22-33/~€20-30 per person for exceptional Greek food without the caldera markup.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Volcano Boat Tour, Hot Springs & Black Sand Beach"
                cost="~$55-77 / ~$50-70 excluding accommodation"
                items={[
                  "8:30am — Boat tour to Nea Kameni volcano from Fira's old port (~$22-28/~€20-25 per person). The old port is reached by 580 steps down from Fira (or a cable car for ~$6.60/~€6 one way, or a donkey ride — though the donkey welfare is questionable). The boat crosses the caldera to the volcanic island.",
                  "Hike to the active crater of Nea Kameni — 45 minutes up on a gravel path. The crater still steams and the views of the entire caldera from the summit are worth the climb. Wear closed shoes, not flip-flops.",
                  "11:00am — Hot springs at Palea Kameni. The water is warm and sulfuric — it permanently stains light-coloured swimwear orange-yellow. Wear dark colours or an old swimsuit you do not care about. The swimming area is shallow and the warm water is a surreal experience surrounded by the caldera cliffs.",
                  "1:00pm — Return to Fira. Bus to Perissa or Kamari black sand beach (~$2.50/~€2.30, 30 min). These volcanic black sand beaches stay warm even after sunset. Sunbed ~$11/~€10 for the day. Perissa is longer and more lively; Kamari is quieter with a seafront promenade.",
                  "3:00pm — Relax on the beach. Swim in the clear Aegean water. The black sand against the turquoise sea is striking and unlike any beach you have seen before.",
                  "7:00pm — Farewell sunset from any caldera-facing bar in Fira. A cocktail costs ~$13-17/~€12-15 — expensive but the view is the price. Alternatively, buy a ~$5.50/~€5 bottle of Assyrtiko from the minimarket and find a quiet spot on the caldera path.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Santorini" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks and sites in order of priority. Santorini is small enough that everything is reachable within 30 minutes by bus or car from Fira.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Oia Sunset at the Byzantine Castle",
                  e: "Free",
                  d: "The most famous sunset viewpoint in Europe. The ruined Byzantine castle at the tip of Oia provides the classic view of white buildings, blue domes and the caldera as the sun sets. Arrive 45-60 minutes before sunset in summer to secure a spot. In shoulder season you can arrive 15 minutes before.",
                  t: "Must see · Sunset · 2 hrs",
                },
                {
                  n: "Akrotiri Archaeological Site",
                  e: "~$18/~€16",
                  d: "Bronze Age Minoan city buried by the volcanic eruption of 1600 BC. Multi-storey buildings, frescoes, drainage systems and ceramics preserved under ash for 3,600 years. Smaller than Pompeii but arguably better preserved. A covered walkway protects the site. Allow 1-1.5 hours with the audio guide.",
                  t: "Must see · History · 1.5 hrs",
                },
                {
                  n: "Fira to Oia Caldera Hike",
                  e: "Free",
                  d: "10km trail along the caldera rim connecting Fira, Firostefani, Imerovigli and Oia. Takes 3-4 hours at a comfortable pace. No shade — carry water and start early. The views are spectacular the entire way and this is the single best free activity on the island.",
                  t: "Must do · Hike · 3-4 hrs",
                },
                {
                  n: "Nea Kameni Volcano",
                  e: "~$22-28/~€20-25 (boat tour)",
                  d: "Active volcanic island in the centre of the caldera. A 45-minute hike to the crater reveals steaming vents and panoramic caldera views. Most boat tours combine this with the Palea Kameni hot springs. Book morning tours to avoid afternoon heat and crowds.",
                  t: "Must do · Volcano · Half day",
                },
                {
                  n: "Red Beach (Akrotiri)",
                  e: "Free",
                  d: "Dramatic red volcanic cliffs dropping into turquoise water. A 10-minute walk from Akrotiri ruins. The cliff is unstable — stay near the waterline rather than sitting under the cliff face. Best combined with Akrotiri site visit in a single morning trip.",
                  t: "Beach · 1-2 hrs",
                },
                {
                  n: "Pyrgos Medieval Village",
                  e: "Free",
                  d: "Hilltop village with Venetian castle ruins and 360-degree panoramic views of the entire island. Far fewer tourists than Oia with excellent small tavernas and galleries. The view from Kasteli at the summit is arguably the best single viewpoint on Santorini.",
                  t: "Hidden gem · 1-2 hrs",
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
            title="Santorini — Caldera, Domes &amp; Volcanic Shores"
            subtitle="The crescent-shaped island where white buildings cling to 300-metre cliffs above a flooded volcanic caldera."
            spots={[
              {
                name: "Oia Blue Domes at Sunset",
                query: "oia santorini blue domes white buildings caldera sunset golden light",
                desc: "The most iconic view in Greece — blue-domed churches against white-washed buildings as the sun sets into the caldera.",
              },
              {
                name: "Fira to Oia Caldera Path",
                query: "santorini caldera path fira imerovigli white buildings cliff edge sea",
                desc: "The 10km cliffside trail connecting Fira to Oia — the best free activity on the island with non-stop caldera views.",
              },
              {
                name: "Red Beach, Akrotiri",
                query: "santorini red beach akrotiri volcanic red cliffs turquoise water",
                desc: "Dramatic red volcanic cliffs plunging into turquoise Aegean water near the ancient Akrotiri ruins.",
              },
              {
                name: "Nea Kameni Volcanic Crater",
                query: "nea kameni volcano santorini caldera crater boat tour greece",
                desc: "The active volcanic island at the centre of the caldera — steaming vents and panoramic views from the crater rim.",
              },
              {
                name: "Perissa Black Sand Beach",
                query: "perissa black sand beach santorini greece volcanic dark sand turquoise sea",
                desc: "Volcanic black sand beaches on the east coast — warm sand, clear water and the dramatic Mesa Vouno rock formation.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Santorini is expensive by Greek island standards but manageable with planning. Budget travellers can do ~$77-154/~€70-140 per day, mid-range ~$264-484/~€240-440 per day, and luxury ~$715+/~€650+ per day. All prices in EUR with USD equivalents at ~€1 = ~$1.10.
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
                    ["🏨 Accommodation (4N)", "~$154-264 / €140-240", "~$440-792 / €400-720", "~$1,320-3,520 / €1,200-3,200"],
                    ["🍽 Food & Drinks", "~$88-154 / €80-140", "~$220-440 / €200-400", "~$440-1,320 / €400-1,200"],
                    ["🚗 Transport", "~$22-55 / €20-50", "~$66-176 / €60-160", "~$220-440 / €200-400"],
                    ["🎯 Activities", "~$55-110 / €50-100", "~$176-396 / €160-360", "~$440-1,320 / €400-1,200"],
                    ["TOTAL (per person)", "~$308-550 / €280-500", "~$880-1,760 / €800-1,600", "~$2,640-6,600 / €2,400-6,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$77-154/~€70-140/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or studios in Fira or Perissa (~$33-66/~€30-60/night). Eat gyros and bakery pastries (~$8.80-13/~€8-12/meal). Take buses everywhere. Skip caldera-view dining and buy supermarket wine for sunset. Santorini on a budget is possible but tight.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (~$264-484/~€240-440/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Caldera-view hotel in Fira or Imerovigli (~$110-198/~€100-180/night). Mix of taverna meals and caldera dining. Boat tour, wine tasting and one fine-dining dinner. The sweet spot for first-timers — caldera views without cave-suite prices.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~$715+/~€650+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Cave suite with infinity pool in Oia (~$330-880/~€300-800/night). Private catamaran tour, helicopter ride, spa days and fine dining with caldera views. Santorini is one of Europe&apos;s premier luxury destinations — the cave hotels here are genuinely unique.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Santorini</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is caldera side (Oia, Fira, Imerovigli) vs east coast (Perissa, Kamari). First-timers should prioritise the caldera side — the views are the entire reason people come to Santorini. Budget travellers can find affordable options in Fira; the cheapest stays are on the east coast near the black sand beaches.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Oia — Romance & Sunsets",
                  type: "Cave suites, boutique hotels · Caldera side",
                  price: "From ~$176/~€160/night (mid), ~$440+/~€400+ (luxury)",
                  badge: "Best for couples",
                  desc: "The most famous village on the island with the iconic sunset, blue domes and luxury cave suites. Accommodation here is the most expensive on Santorini. Stay in Oia if you want the quintessential romantic experience and don't mind paying premium prices. Book 3-6 months ahead for summer. Canaves Oia and Katikies are the standout luxury options.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Fira — Convenience & Value",
                  type: "Hotels, hostels, studios · Caldera side",
                  price: "From ~$39/~€35/night (budget), ~$110+/~€100+ (caldera view)",
                  badge: "Best first-timer base",
                  desc: "The island's capital with the most restaurants, bars and bus connections. The widest range of accommodation from budget hostels to caldera-view boutique hotels. The main bus station connects to every village and beach. Fira is the best base for 4 days — central, affordable and still has stunning caldera views from the western edge.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Imerovigli — Quiet Caldera Views",
                  type: "Boutique hotels, cave suites · Caldera side",
                  price: "From ~$99/~€90/night (mid), ~$275+/~€250+ (luxury)",
                  badge: "Best caldera views",
                  desc: "The highest point on the caldera rim — nicknamed the 'balcony of the Aegean'. Quieter than Fira, less expensive than Oia, with arguably the best caldera views of all three. Walking distance to Fira (20 min) and home to Skaros Rock for crowd-free sunsets. The best compromise between views, quiet and price.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Perissa — Budget Beach Area",
                  type: "Hostels, budget studios, apartments · East coast",
                  price: "From ~$22/~€20/night (budget), ~$55+/~€50+ (mid)",
                  badge: "Best budget",
                  desc: "Long black sand beach on the east coast with the cheapest accommodation on the island. Backpacker hostels, budget studios and beach tavernas. No caldera views but excellent beach access. Bus to Fira takes 30 minutes. Stay here if your priority is budget over views — and take the bus to the caldera side for sunsets.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Santorini</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Caldera-view dining is expensive (~$44-88/~€40-80 per person) but worth doing once. For everyday eating, head to the village tavernas away from the cliff edge where locals eat — prices drop 40-60% for the same or better food. Gyros (~$3.30-4.40/~€3-4) are the best budget meal on the island.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gyros & Souvlaki Spots (Fira, Oia)",
                  t: "Street food · Island-wide",
                  d: "The best budget meal in Santorini. Pork or chicken gyros wrapped in pita with tzatziki, tomato and onion for ~$3.30-4.40/~€3-4. Lucky's Souvlakis in Fira and Pitogyros in Oia are local favourites. Eat one for lunch every day and save your dinner budget for a proper taverna.",
                  b: "Best budget meal",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Ammoudi Bay Tavernas (below Oia)",
                  t: "Seafood · Waterfront harbour",
                  d: "Tiny fishing harbour at the bottom of 300 steps from Oia. Three tavernas serve fresh-caught fish and grilled octopus directly on the waterside. The sunset light on the red cliffs of Oia above you is extraordinary. ~$28-44/~€25-40 per person. Go for a late lunch around 2pm to avoid the sunset rush.",
                  b: "Best seafood setting",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Metaxy Mas (Exo Gonia)",
                  t: "Traditional Greek taverna · Inland village",
                  d: "Widely considered the best traditional taverna on Santorini. Away from the caldera tourist strip in the inland village of Exo Gonia. Exceptional Greek home cooking — lamb, fresh fish, local cheese, fava. ~$22-33/~€20-30 per person. Book ahead in summer. This is where islanders eat on their night off.",
                  b: "Best local food",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Caldera-View Fine Dining (Fira/Oia)",
                  t: "Fine dining · Caldera edge",
                  d: "Restaurants like Lycabettus (Oia) and Koukoumavlos (Fira) offer innovative Greek cuisine with caldera panoramas. ~$55-110/~€50-100 per person. Worth doing once for the experience — the combination of the food, the view and the sunset is genuinely memorable. Book the earliest sunset-facing table 2-3 weeks ahead.",
                  b: "Splurge once",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Bakeries & Breakfast Spots",
                  t: "Budget breakfast · Fira & villages",
                  d: "Greek bakeries (fourno) sell spanakopita, tiropita and bougatsa pastries for ~$2.20-3.30/~€2-3. Pair with a Greek coffee (~$2.20/~€2) for a ~$4.40/~€4 breakfast. Fira has several excellent bakeries on the main pedestrian street. Skip hotel breakfasts unless included free — they are overpriced for what you get.",
                  b: "Budget breakfast",
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
            destination="Santorini Greece"
            hotels={[
              {
                name: "Budget Studio in Fira",
                type: "Studio · Fira Centre",
                price: "From ~$44/~€40/night",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/searchresults.html?ss=Fira+Santorini&aid=2820480",
              },
              {
                name: "Caldera-View Hotel Imerovigli",
                type: "Boutique Hotel · Imerovigli",
                price: "From ~$132/~€120/night",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/searchresults.html?ss=Imerovigli+Santorini&aid=2820480",
              },
              {
                name: "Cave Suite in Oia",
                type: "Luxury Cave Suite · Oia",
                price: "From ~$330/~€300/night",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/searchresults.html?ss=Oia+Santorini&aid=2820480",
              },
              {
                name: "Perissa Beach Hostel",
                type: "Hostel · Perissa",
                price: "From ~$22/~€20/night",
                rating: "4",
                badge: "Backpacker pick",
                url: "https://www.booking.com/searchresults.html?ss=Perissa+Santorini&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Caldera Catamaran Cruise with Meal",
                duration: "5 hours",
                price: "From ~$99/~€90/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=santorini+catamaran+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Volcano & Hot Springs Boat Tour",
                duration: "Half day",
                price: "From ~$22/~€20/person",
                badge: "Classic tour",
                url: "https://www.getyourguide.com/s/?q=santorini+volcano+hot+springs&partner_id=PSZA5UI",
              },
              {
                name: "Wine Tasting Tour (3 Wineries)",
                duration: "4 hours",
                price: "From ~$77/~€70/person",
                badge: "Wine lovers",
                url: "https://www.getyourguide.com/s/?q=santorini+wine+tasting+tour&partner_id=PSZA5UI",
              },
              {
                name: "Akrotiri Guided Archaeological Tour",
                duration: "2 hours",
                price: "From ~$44/~€40/person",
                url: "https://www.getyourguide.com/s/?q=santorini+akrotiri+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⏰",
                  title: "Arriving at Oia sunset at 7pm",
                  desc: "The famous Oia sunset in summer is around 8:30pm. By 7pm the castle viewpoint is 10-people deep. Arrive at 5:30pm, claim your spot, and enjoy two hours of light changing over the caldera. Or skip the Oia crowds entirely and watch from Skaros Rock in Imerovigli — same sunset, a fraction of the people.",
                },
                {
                  icon: "📅",
                  title: "Visiting in July-August without booking ahead",
                  desc: "Santorini in peak summer has 15,000+ tourists per day on a tiny island. Accommodation prices triple. Caldera-view hotels sell out 4-6 months ahead. The same island in April, May or October is half the price with a quarter of the people and warm enough to swim.",
                },
                {
                  icon: "🏨",
                  title: "Booking a non-caldera hotel to save money",
                  desc: "The east coast (Kamari, Perissa) is cheaper but you miss the famous views. First-timers should prioritise at least 2 nights on the caldera side (Fira, Imerovigli or Oia). If budget is tight, stay in Fira — it has the widest price range and the caldera views are still spectacular.",
                },
                {
                  icon: "🚌",
                  title: "Relying on buses without checking times",
                  desc: "Buses run every 30-90 minutes depending on the route. The Fira-Oia bus fills up before it reaches some stops in summer. Check the KTEL Santorini timetable online or at the Fira bus station. For time-sensitive trips like airport transfers, book a taxi or private transfer.",
                },
                {
                  icon: "🏊",
                  title: "Wearing light swimwear to the hot springs",
                  desc: "The sulfuric hot springs at Palea Kameni permanently stain light-coloured swimwear orange-yellow. Wear dark colours or an old swimsuit you do not mind discolouring. This is not a mild discolouration — it is permanent and visible.",
                },
                {
                  icon: "💰",
                  title: "Eating every meal on the caldera edge",
                  desc: "Caldera-view restaurants charge 40-60% more than inland tavernas for comparable food. Eat on the caldera edge once for the experience, then switch to village tavernas like Metaxy Mas in Exo Gonia or the Pyrgos village spots for better food at lower prices.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Santorini</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍷",
                  title: "Drink Assyrtiko from the volcano",
                  desc: "Santorini's volcanic soil produces Assyrtiko — a white wine with mineral, citrus and saline notes unlike anything else in the world. Santo Wines, Domaine Sigalas and Hatzidakis are the top producers. A bottle costs ~$17-28/~€15-25 locally. Buy one, find a caldera-edge spot and skip the ~$15/~€14 cocktail.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌋",
                  title: "Akrotiri is underrated",
                  desc: "Most tourists skip the Bronze Age archaeological site to spend more time in Oia. It is one of the most important archaeological sites in the Mediterranean — a city frozen in time by the same eruption that created the caldera. The frescoes and multi-storey buildings are extraordinary.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Skaros Rock for crowd-free sunsets",
                  desc: "Skaros Rock in Imerovigli has caldera views equal to Oia but with a fraction of the tourists. A 15-minute hike from Imerovigli village. Bring wine and snacks, sit on the rock and watch the same sunset in peace. This is the local secret that most tourists never discover.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚶",
                  title: "The Fira-Oia hike is the best activity",
                  desc: "The 10km caldera path from Fira to Oia is free, takes 3-4 hours and offers better views than any paid tour. Start early (7-8am) to avoid midday heat. Carry 1.5L water and wear sun protection. End in Oia for lunch and the afternoon/evening. This single walk justifies the trip.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📸",
                  title: "Find the real blue domes",
                  desc: "The famous blue dome photograph is taken from a specific path below the main church in Oia — not from the church itself. Look for the narrow path leading down to the left of the church. Early morning (7-8am) is the best light and zero crowds. By 10am there is a queue to take the same photo.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💱",
                  title: "Cards accepted almost everywhere",
                  desc: "Greece has widely adopted card payments since 2020. Most restaurants, shops and even some beach vendors accept cards. Carry ~$22-44/~€20-40 cash for bus tickets, small vendors and tips. ATMs in Fira and Oia are plentiful but charge ~$2.20-3.30/~€2-3 per withdrawal.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Santorini" />

          {/* Combine With */}
          <CombineWith currentSlug="santorini-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Santorini?",
                  a: "4 days is ideal — one day to settle in and explore Fira/caldera walk, one day for Oia and the hike, one day for Akrotiri and wine tasting, one day for the volcano boat tour and beaches. 2-3 days feels rushed. 5+ days starts to feel repetitive unless you are truly relaxing.",
                },
                {
                  q: "Is Santorini worth the price?",
                  a: "Yes — for a honeymoon, anniversary or special trip. The caldera views are genuinely unlike anywhere else on earth. For a budget backpacking holiday with lots of sightseeing variety, it is not the right destination. The island's magic is in slowing down, which takes time and costs money in a high-end location.",
                },
                {
                  q: "What is the best area to stay in Santorini?",
                  a: "Oia for romance and sunsets (most expensive). Imerovigli for caldera views without the Oia crowds. Fira for restaurants, nightlife and convenience. Perissa/Kamari for budget travellers who want beach access. First-timers should prioritise the caldera side.",
                },
                {
                  q: "When is the best time to visit Santorini?",
                  a: "April-June and September-October. Weather is warm (22-28°C), crowds are manageable, prices are lower than peak season, and everything is open. July-August is extremely crowded and hot. November-March many businesses close and the island feels deserted.",
                },
                {
                  q: "How do I get from Athens to Santorini?",
                  a: "Flying is fastest — 45 minutes from Athens, flights from ~$44-132/~€40-120. The overnight ferry from Piraeus (Athens port) takes 7.5 hours and is a classic Greek island experience — book a cabin for ~$44-66/~€40-60 extra for a bed and private bathroom.",
                },
                {
                  q: "Can I do Santorini on a budget?",
                  a: "Yes, but it requires discipline. Stay in Perissa or a Fira budget studio (~$33-55/~€30-50/night). Eat gyros and bakery pastries for most meals (~$8.80-13/~€8-12/day). Take buses. Buy supermarket wine for sunset. You can do Santorini for ~$77-110/~€70-100/day if you skip caldera-view dining and luxury experiences.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Santorini trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-santorini", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/santorini-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-santorini", label: "How to get there", icon: "✈️" },
                { href: "/blog/santorini-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="santorini-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Greece &amp; Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Athens &mdash; 3 Day Guide", href: "/blog/athens-3-days" },
                { label: "Crete &mdash; 5 Day Guide", href: "/blog/crete-5-days" },
                { label: "Amalfi Coast &mdash; 4 Day Guide", href: "/blog/amalfi-coast-4-days" },
                { label: "Rome &mdash; 4 Day Guide", href: "/blog/rome-4-days" },
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
