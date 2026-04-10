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
const OSAKA_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Osaka Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "\uD83C\uDFEF",  label: "Landmark Guide" },
  { id: "budget",      emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",         emoji: "\uD83C\uDF5C",  label: "Where to Eat" },
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
          href: `mailto:?subject=Osaka 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Osaka in 3 Days — street food, castles and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/osaka-3-days"
        imageUrl="https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80"
        description="Osaka in 3 Days: Dotonbori, Osaka Castle, Kuromon Market, Universal Studios, Shinsekai street food — complete travel guide with budget breakdown."
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
export default function OsakaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={OSAKA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Osaka" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="osaka dotonbori canal neon signs japan night"
            fallback="https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1600&q=80"
            alt="Dotonbori canal neon signs and reflections at night in Osaka Japan"
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
              <span className="text-white/70">Osaka 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Food &amp; City
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Osaka in 3 Days:
                <em className="italic text-amber-300"> Street Food, Castles &amp; the Real City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Dotonbori at dusk, takoyaki from the stalls locals actually queue at, Osaka Castle grounds, Kuromon Market mornings, and the neon glow of Shinsekai. The complete guide with real timings, costs in JPY &amp; USD, and the mistakes that ruin most Osaka trips.
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
              <span>{"\uD83C\uDDEF\uD83C\uDDF5"} Japan</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0 From \u00A57,000/day ($47)"}</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Osaka is Japan&apos;s stomach and it&apos;s proud of it. Budget more for food here than Tokyo &mdash; you&apos;ll spend it and you won&apos;t regret a single yen. Osakans are the loudest, funniest, most welcoming people in Japan and the vibe here is completely different from Tokyo&apos;s polished coolness. This guide tells you exactly where to eat, when to go, and what to skip.
            </p>
          </blockquote>

          {/* ── WHAT OSAKA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Osaka Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Osaka is Japan&apos;s second city and its undisputed food capital. The local motto is &ldquo;kuidaore&rdquo; &mdash; eat until you drop. Where Tokyo is polished and precise, Osaka is loud, funny, and deeply unpretentious. The Kansai dialect is brasher, the comedy culture is Japan&apos;s best, and the street food here is better and cheaper than anywhere else in the country.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Dotonbori is heavily touristed and 20&ndash;30% more expensive than the rest of the city. The real Osaka &mdash; the one with the &yen;500 takoyaki, the standing-bar izakayas, and the neighbourhood energy &mdash; lives in Shinsekai, Tenma, Ura-Namba, and the backstreets of Tsuruhashi. The trick to a good Osaka trip is getting the ratio right: enough Dotonbori neon to get the photos, enough backstreet eating to understand why Osakans are so fiercely proud of their city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is the sweet spot. You can cover Osaka Castle, Dotonbori, Kuromon Market, Shinsekai, and either Universal Studios Japan or deeper neighbourhood exploration. Add a day trip to Kyoto (29 minutes by train) or Nara (45 minutes) if you have a fourth day.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="KIX (Kansai)" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Mar\u2013May, Oct\u2013Nov" />
              <StatCard icon={"\uD83C\uDF5C"} label="Famous For" value="Street Food" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u00A57,000/day"} />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Osaka</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar\u2013May",
                  i: "\uD83C\uDF38",
                  t: "Cherry Blossom & Spring \u2014 Best Overall",
                  d: "15\u201325\u00B0C with mild, pleasant weather. Cherry blossom season (late March\u2013mid April) transforms Osaka Castle park into one of Japan\u2019s best hanami spots. Golden Week (late April\u2013early May) brings domestic crowds and higher prices \u2014 avoid those specific dates if possible. Otherwise, spring is the ideal time.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "\uD83C\uDF1E",
                  t: "Summer \u2014 Hot & Humid",
                  d: "28\u201335\u00B0C with high humidity. June is rainy season (tsuyu). July\u2013August is genuinely hot and muggy. Universal Studios and outdoor sightseeing become exhausting. Street food stalls and air-conditioned indoor markets are your best friends. Summer festivals (Tenjin Matsuri in July) are spectacular if you can handle the heat.",
                  b: "Festivals, but hot",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct\u2013Nov",
                  i: "\uD83C\uDF41",
                  t: "Autumn Colours \u2014 Excellent",
                  d: "15\u201322\u00B0C with clear skies and autumn foliage. November colours at Osaka Castle and Minoo Park are stunning. Comfortable walking weather, reasonable prices, and fewer crowds than spring. This is arguably the best time for food \u2014 seasonal ingredients peak in autumn.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec\u2013Feb",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Cold but Cheapest",
                  d: "3\u201310\u00B0C, dry and cold but rarely snows. Hotel prices drop 20\u201340%. Illumination events across the city (Midosuji, Osaka Castle) are beautiful. Hot ramen, oden, and nabe (hot pot) season \u2014 Osaka\u2019s winter comfort food is outstanding. Pack warm layers.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} \u2014 {s.t}</p>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Osaka</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kansai International Airport (KIX) serves Osaka, Kyoto and Kobe. It sits on a man-made island in Osaka Bay, roughly 50 minutes from central Osaka by express train. <strong className="font-medium">Most passports get 90 days visa-free.</strong> Indian passport holders need a visa arranged in advance.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "KIX Airport to Central Osaka",
                  d: "Nankai Rapit express to Namba: 38 minutes, \u00A51,290 ($9). JR Haruka express to Tennoji: 35 minutes, \u00A51,740 ($12). Airport limousine bus to Namba or Umeda: 50\u201360 minutes, \u00A51,100 ($7). The Nankai Rapit is the fastest and most convenient option for Namba-area hotels. Buy an ICOCA card at the airport for all local transport.",
                  b: "Nankai Rapit recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE85",
                  t: "Shinkansen from Tokyo",
                  d: "Tokaido Shinkansen (Nozomi): 2 hours 30 minutes from Tokyo Station to Shin-Osaka, \u00A513,870 ($92). Hikari: 2 hours 50 minutes, same price but covered by Japan Rail Pass. If you have a JR Pass, take the Hikari \u2014 otherwise the Nozomi is faster and more frequent. Trains run every 10\u201315 minutes.",
                  b: "2.5 hours from Tokyo",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE89",
                  t: "From Kyoto",
                  d: "JR Special Rapid: 29 minutes from Kyoto Station to Osaka Station, \u00A5580 ($4). Hankyu Railway: 43 minutes to Umeda, \u00A5410 ($3). Both are covered by IC cards. No bullet train needed \u2014 the regular express is fast, frequent, and cheap. Kyoto is so close that many travellers day-trip between the two cities.",
                  b: "29 min, \u00A5580",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE89",
                  t: "Getting Around Osaka",
                  d: "Osaka Metro day pass: \u00A5820 ($5) for unlimited rides on all Metro and city bus lines, plus discount coupons for attractions. Buy at any station. The Metro covers all major areas \u2014 Namba, Umeda, Shinsaibashi, Tennoji, Shinsekai. Walking between Dotonbori, Namba, and Shinsaibashi takes 10\u201315 minutes.",
                  b: "Metro day pass \u00A5820",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 3-Day Osaka Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending ({"\u00A512,000\u201318,000/day, ~$80\u2013120"}). Each day card is expandable. The route covers Osaka Castle and Dotonbori, then Kuromon Market and Shinsekai, then Universal Studios or deeper city exploration. Budget and luxury alternatives are noted.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Osaka Castle, Dotonbori & Shinsaibashi"
                cost={"\u00A513,000\u201318,000 (~$87\u2013120) excluding accommodation"}
                items={[
                  "9am: Osaka Castle \u2014 \u00A5600 ($4) entry to the museum inside. The castle grounds and park are free and stunning, especially during cherry blossom season. The museum covers 8 floors of Osaka\u2019s samurai and merchant history. Allow 2 hours for the castle and grounds.",
                  "11am: Walk through the castle park to Nakanoshima. Stop at the Rose Garden (free, beautiful May\u2013Jun) along the river. Cross to Tenmabashi area for a more local atmosphere.",
                  "12:30pm: Lunch at Hokkyokusei in Shinsaibashi \u2014 the restaurant that invented omurice (rice omelette) in 1925. \u00A51,200\u20131,800 ($8\u201312). Budget alternative: okonomiyaki at a Tenma hole-in-the-wall for \u00A5800\u20131,000 ($5\u20137).",
                  "2pm: Shinsaibashi-suji shopping arcade \u2014 free to browse, 600m covered shopping street. Uniqlo, Don Quijote (tax-free shopping), Daimaru department store depachika (basement food hall) with free tastings.",
                  "5pm: Dotonbori \u2014 the neon-lit canal. Glico Running Man sign photo. Walk both sides of the canal as lights come on. Tombori River Cruise \u00A51,000 ($7), 20 min, for a different perspective.",
                  "Dinner: Takoyaki at Wanaka or Kukuru (\u00A5500\u2013700/$3\u20135) + okonomiyaki at Mizuno or Chibo (\u00A51,200\u20132,500/$8\u201317). Street-eat your way through Dotonbori.",
                  "Late night: Hozenji Yokocho \u2014 atmospheric stone-paved alley with a moss-covered Buddha statue. Free, beautiful after dark. Then cocktails at a Namba rooftop bar if you have energy left."
                ]}
              />
              <DayCard
                day="Day 2"
                title="Kuromon Market, Shinsekai, Tsutenkaku & Namba"
                cost={"\u00A514,000\u201319,000 (~$93\u2013127) excluding accommodation"}
                items={[
                  "8am: Kuromon Market (Osaka\u2019s Kitchen) \u2014 600m covered market selling fresh sashimi, grilled seafood, wagyu skewers, and everything in between since 1902. A5 wagyu skewer \u00A52,000 ($13), grilled scallops \u00A5500, uni (sea urchin) \u00A51,500. Budget \u00A52,000\u20136,000 ($13\u201340) depending on appetite. Go hungry, eat standing, graze every aisle.",
                  "10:30am: Walk south to Shinsekai \u2014 retro neon district built in 1912. Feels like stepping back in time. This is Osaka\u2019s most characterful neighbourhood: zero tourist polish, all personality. Free to walk and photograph.",
                  "11am: Tsutenkaku Tower \u2014 \u00A5900 ($6). Osaka\u2019s Eiffel Tower. The neighbourhood around it is more interesting than the tower itself. Alternatively: skip the tower and explore the streets below.",
                  "12pm: Kushikatsu lunch in Shinsekai \u2014 Daruma is the most famous chain, Yaekatsu is slightly upscale. \u00A5100\u2013300 per skewer. Order 8\u201310 skewers for \u00A51,500\u20134,000 ($10\u201327). Rule: no double-dipping in the communal sauce. Use cabbage to scoop sauce instead.",
                  "2pm: Tennoji Park \u2014 Keitakuen Garden \u00A5150 ($1), a hidden gem. Then walk to Abeno Harukas \u2014 Japan\u2019s tallest building, observation deck \u00A51,500 ($10) for panoramic city views.",
                  "4pm: Amerikamura (American Village) \u2014 Osaka\u2019s youth culture hub. Vintage shops, street art, Big Step mall, Orange Street for indie boutiques. Triangle Park for people-watching. Melon pan ice cream sandwich \u00A5400.",
                  "6pm: Ura-Namba (behind Namba Station) \u2014 the local dining district where Osakans actually eat. Izakaya hopping with \u00A52,000\u20133,000 ($13\u201320) per spot. No English menus, no tourist prices. 2\u20133 spots is ideal."
                ]}
              />
              <DayCard
                day="Day 3"
                title="Universal Studios OR Sumiyoshi Taisha & Food Crawl"
                cost={"\u00A512,000\u201328,000 (~$80\u2013187) depending on Universal"}
                items={[
                  "Option A \u2014 Universal Studios Japan: Full day. \u00A58,600 ($57) standard ticket. Express Pass \u00A57,800+ ($52+) for skipping queues. Arrive at opening 8:30am. Super Nintendo World first (Power-Up Band \u00A54,200/$28 for interactive games). Harry Potter area second. Budget \u00A520,000\u201328,000 ($133\u2013187) total with food.",
                  "Option B \u2014 Culture + Food: 9am at Sumiyoshi Taisha \u2014 Osaka\u2019s oldest shrine (free, founded 211 AD). The iconic arched Taikobashi bridge over the sacred pond is stunning.",
                  "Walk from Sumiyoshi through local neighbourhoods to Namba \u2014 45 min walk or 15 min train. Stop at any neighbourhood shops that catch your eye.",
                  "Namba food crawl: Start at Kuromon for any stalls you missed, then Dotonbori for round two of takoyaki, then finish at Shinsekai for kushikatsu. Budget \u00A53,000\u20136,000 ($20\u201340) for grazing.",
                  "Afternoon: Den Den Town (Osaka\u2019s Akihabara) \u2014 retro games, anime, manga, electronics. Mandarake for vintage manga. Free to browse. 15 min walk from Shinsekai.",
                  "5pm: Rikuro\u2019s Cheesecake in Namba \u2014 \u00A5965 ($6). The famous jiggly souffl\u00E9 cheesecake. Queue moves fast. Buy one as a farewell souvenir.",
                  "Final dinner: Yakiniku (Japanese BBQ) in Tsuruhashi \u2014 Osaka\u2019s Korean district. Budget spots from \u00A52,000 ($13), premium wagyu at Yakiniku-M from \u00A55,000 ($33). Worth the splurge on the last night."
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Osaka" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFEF"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and cultural sites in order of priority. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Osaka Castle (Osaka-jo)",
                  e: "\u00A5600 (~$4)",
                  d: "16th-century castle originally built by Toyotomi Hideyoshi, reconstructed in 1931 with a modern museum inside covering 8 floors of Osaka\u2019s samurai and merchant history. The surrounding park is massive and free \u2014 one of Japan\u2019s best hanami (cherry blossom) spots in late March\u2013April. The castle is illuminated at night and visible from across the city. Allow 2 hours.",
                  t: "Must see \u00B7 History \u00B7 2 hrs",
                },
                {
                  n: "Dotonbori Canal & Glico Sign",
                  e: "Free",
                  d: "Osaka\u2019s neon-lit heart. The Glico Running Man sign, giant mechanical crab, and canal reflections make this Japan\u2019s most photographed street. Best experienced after 5pm when the neon comes alive. Walk both sides of the canal, cross the bridges for different angles. The Tombori River Cruise (\u00A51,000/$7, 20 min) gives you the view from the water.",
                  t: "Must see \u00B7 Evening \u00B7 1\u20132 hrs",
                },
                {
                  n: "Kuromon Market",
                  e: "Free entry",
                  d: "Osaka\u2019s Kitchen \u2014 a 600m covered market operating since 1902. Fresh sashimi on rice, grilled scallops, A5 wagyu skewers, uni, king crab legs, and tamagoyaki. Best 8\u201310am when everything is fresh. By afternoon, popular stalls sell out. Budget \u00A52,000\u20136,000 ($13\u201340) for a grazing breakfast. Go hungry.",
                  t: "Must see \u00B7 Morning \u00B7 1.5 hrs",
                },
                {
                  n: "Shinsekai & Tsutenkaku Tower",
                  e: "Tower \u00A5900 (~$6)",
                  d: "Retro entertainment district built in 1912, modelled after Paris and New York. Tsutenkaku Tower is Osaka\u2019s mini Eiffel Tower. The real draw is the neighbourhood itself: neon signs, kushikatsu restaurants, gaming arcades, and a time-warp atmosphere that Dotonbori has lost. This is where locals eat kushikatsu for \u00A5100\u2013300 per skewer.",
                  t: "Must see \u00B7 Afternoon \u00B7 2 hrs",
                },
                {
                  n: "Sumiyoshi Taisha",
                  e: "Free",
                  d: "Osaka\u2019s oldest and most important shrine, founded in 211 AD. The iconic arched Taikobashi bridge over the sacred pond is one of the most photographed structures in Osaka. The shrine architecture predates Chinese influence on Japanese design \u2014 the straight-line style (sumiyoshi-zukuri) is unique in Japan. Quiet, serene, and uncrowded.",
                  t: "Recommended \u00B7 1 hr",
                },
                {
                  n: "Universal Studios Japan",
                  e: "\u00A58,600 (~$57)",
                  d: "Japan\u2019s biggest theme park. Super Nintendo World is the headline attraction \u2014 a fully immersive Mario world with interactive rides and games. The Wizarding World of Harry Potter is the other major draw. Express Pass (\u00A57,800+/$52+) is essential on busy days. Sells out on weekends and holidays \u2014 buy tickets online at least 1 week ahead.",
                  t: "Full day \u00B7 Book ahead",
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
            title="Osaka \u2014 Street Food, Neon &amp; Culture"
            subtitle="Japan\u2019s kitchen and its most energetic city."
            spots={[
              {
                name: "Dotonbori Canal",
                query: "dotonbori osaka canal neon signs night reflection japan",
                desc: "Osaka\u2019s neon-lit heart. The Glico Running Man sign, giant crab, and canal reflections make this Japan\u2019s most photographed street.",
              },
              {
                name: "Osaka Castle",
                query: "osaka castle japan spring cherry blossom park architecture",
                desc: "16th-century castle surrounded by moats and parks. The museum inside covers Osaka\u2019s samurai history. Entry \u00A5600.",
              },
              {
                name: "Kuromon Market",
                query: "kuromon market osaka japan seafood stalls food covered street",
                desc: "Osaka\u2019s Kitchen \u2014 a 600m covered market selling fresh sashimi, grilled seafood, wagyu, and everything in between since 1902.",
              },
              {
                name: "Shinsekai",
                query: "shinsekai osaka japan neon retro tower tsutenkaku night",
                desc: "Retro entertainment district built in 1912. Tsutenkaku Tower, kushikatsu restaurants, and a time-warp atmosphere.",
              },
              {
                name: "Sumiyoshi Taisha",
                query: "sumiyoshi taisha osaka shrine bridge traditional architecture",
                desc: "Osaka\u2019s oldest shrine, founded in 211 AD. The iconic arched Taikobashi bridge over the sacred pond. Free entry.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Osaka is excellent value at every price level. Budget travellers can eat and explore well on $47&ndash;67/day, mid-range on $80&ndash;120/day, and luxury on $200+/day. All prices in Japanese Yen (JPY) and USD at ~&yen;150/$1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (3 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u00A59,000\u201313,500 ($60\u201390)", "\u00A521,000\u201336,000 ($140\u2013240)", "\u00A5120,000\u2013240,000 ($800\u20131,600)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A58,000\u201312,000 ($53\u201380)", "\u00A518,000\u201328,000 ($120\u2013187)", "\u00A580,000\u2013150,000 ($533\u20131,000)"],
                    ["\uD83D\uDE89 Transport", "\u00A52,000\u20133,500 ($13\u201323)", "\u00A53,500\u20135,500 ($23\u201337)", "\u00A510,000\u201320,000 ($67\u2013133)"],
                    ["\uD83C\uDFAF Activities", "\u00A52,000\u20139,000 ($13\u201360)", "\u00A55,000\u201315,000 ($33\u2013100)", "\u00A560,000\u2013100,000 ($400\u2013667)"],
                    ["\uD83C\uDF7A Extras", "\u00A51,000\u20132,000 ($7\u201313)", "\u00A53,000\u20135,000 ($20\u201333)", "\u00A510,000\u201320,000 ($67\u2013133)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u00A521,000\u201330,000 ($140\u2013200)", "\u00A536,000\u201354,000 ($240\u2013360)", "\u00A5330,000\u2013560,000 ($2,200\u20133,733)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic mb-6">
              All prices in &yen; (Japanese Yen), 2026. USD equivalent at ~&yen;150/$1. Excludes travel to Osaka from other cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDCB0"} Budget (&yen;7,000&ndash;10,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or capsule hotels (&yen;3,000&ndash;4,500/night), eat at street stalls and standing counters (&yen;500&ndash;1,200/meal), use the Metro day pass (&yen;820), and graze through Kuromon and Shinsekai. Osaka is one of the cheapest major cities in Japan for food.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range (&yen;12,000&ndash;18,000/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Business hotels in Namba (&yen;7,000&ndash;12,000/night), a mix of market grazing, sit-down restaurants, and izakaya evenings. Add the river cruise, observation decks, and optional Universal Studios. The sweet spot for comfort and food variety.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury (&yen;30,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">St. Regis or Conrad Osaka (&yen;40,000&ndash;80,000/night), Michelin dining, private food tours, cooking classes, and VIP Universal access. Osaka has more Michelin-starred restaurants than Paris at a fraction of the price.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Osaka</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Namba for Dotonbori, food stalls, and nightlife. Shinsaibashi for shopping and central access. Umeda for business hotels and transport connections. Shinsekai for local atmosphere and kushikatsu. All areas are connected by the Metro \u2014 staying near a station is more important than the specific neighbourhood.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Cross Hotel Osaka",
                  type: "Boutique \u00B7 Namba / Shinsaibashi",
                  price: "From \u00A510,000/night (~$67)",
                  badge: "Mid-range pick",
                  desc: "Excellent location between Namba and Shinsaibashi, 5 minutes walk to Dotonbori. Modern rooms, good breakfast, and a rooftop bath. The best mid-range option in central Osaka \u2014 close to everything without the noise of the main strips. Book direct for the best rates.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "The St. Regis Osaka",
                  type: "Luxury \u00B7 Midosuji / Shinsaibashi",
                  price: "From \u00A550,000/night (~$333)",
                  badge: "Luxury pick",
                  desc: "Osaka\u2019s most refined luxury hotel on Midosuji boulevard. Immaculate service, spacious rooms, butler service, and a location that puts you within walking distance of Shinsaibashi and Dotonbori. The bar on the upper floors has panoramic city views. Worth the splurge for at least one night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "The Dorm Hostel Osaka",
                  type: "Design Hostel \u00B7 Shinsaibashi",
                  price: "From \u00A53,000/night (~$20)",
                  badge: "Best budget",
                  desc: "Clean, well-designed hostel with private curtained pods, lockers, and a social common area. 5-minute walk to Shinsaibashi shopping arcade and 10 minutes to Dotonbori. The kind of hostel that makes budget travel in Japan feel stylish rather than cramped. Excellent value for solo travellers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Umeda area business hotels",
                  type: "Business hotels \u00B7 Umeda / Osaka Station",
                  price: "\u00A56,000\u201310,000/night (~$40\u201367)",
                  badge: "Best transport",
                  desc: "Umeda is Osaka\u2019s main transport hub \u2014 JR Osaka Station, Hankyu, and Hanshin terminals all converge here. Ideal if you\u2019re day-tripping to Kyoto, Kobe, or Himeji. Hotels like Granvia Osaka and Hotel Hankyu Respire offer reliable quality. The area is more business-oriented than Namba but well-connected to everything.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Shinsekai guesthouses",
                  type: "Budget \u00B7 Shinsekai / Tennoji",
                  price: "\u00A52,500\u20135,000/night (~$17\u201333)",
                  badge: "Local atmosphere",
                  desc: "Staying in Shinsekai puts you in Osaka\u2019s most characterful neighbourhood \u2014 retro neon, kushikatsu on your doorstep, and a vibe that Dotonbori lost years ago. Tennoji Station is nearby for transport. Look on Booking.com for options rated 8+ \u2014 several excellent guesthouses at prices well below Namba equivalents.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF5C"} Where to Eat in Osaka</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Osaka\u2019s food rule: Dotonbori has the famous stalls but locals eat in Shinsekai, Tenma, Tsuruhashi, and Ura-Namba. Walk 200 metres off the tourist strip and prices drop 20\u201330% for the same (or better) food. Here are the dishes and spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Takoyaki \u2014 Wanaka, Kukuru, Aizuya",
                  t: "Street food \u00B7 Dotonbori / Namba",
                  d: "Crispy octopus balls \u2014 the city\u2019s soul food. \u00A5500\u2013800 ($3\u20135) for 8 pieces. The best stalls always have a small queue of locals, not tourists. Wanaka (Sennichimae) and Aizuya (Shinsekai) are consistently excellent. Eat them hot \u2014 the inside is molten and the outside should be crispy.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Okonomiyaki \u2014 Mizuno, Chibo, Fukutaro",
                  t: "Sit-down \u00B7 Dotonbori / Namba",
                  d: "Osaka-style savoury pancake \u2014 the original. \u00A5800\u20132,500 ($5\u201317) depending on toppings. Watch the chef cook it on the griddle in front of you. Osaka-style mixes everything into the batter (vs Hiroshima-style layers). Mizuno in Dotonbori is the classic; Fukutaro in Namba is where locals go.",
                  b: "Essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Kushikatsu \u2014 Daruma, Yaekatsu",
                  t: "Sit-down \u00B7 Shinsekai",
                  d: "Deep-fried everything on sticks \u2014 Shinsekai\u2019s signature dish. \u00A5100\u2013300 per skewer ($1\u20132). Order 8\u201310 for a full meal: pork, shrimp, lotus root, quail egg, asparagus. Daruma is the most famous, Yaekatsu is slightly upscale. No double-dipping in the communal sauce \u2014 this is a serious rule.",
                  b: "Must eat",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Kuromon Market Breakfast",
                  t: "Market grazing \u00B7 Nipponbashi",
                  d: "Fresh sashimi on rice (\u00A51,500/$10), A5 wagyu skewers (\u00A52,000/$13), grilled scallops (\u00A5500/$3), tamagoyaki (\u00A5200/$1), and king crab legs (\u00A52,000/$13). The market has operated since 1902. Best 8\u201310am when everything is fresh. Budget \u00A52,000\u20136,000 for a full grazing breakfast.",
                  b: "Morning essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Kani Doraku (Dotonbori)",
                  t: "Crab specialist \u00B7 Dotonbori",
                  d: "Crab specialist since 1960 \u2014 the giant mechanical crab above the entrance is a Dotonbori landmark. Set meals from \u00A54,000 ($27). Lunch sets are better value than dinner. Book ahead for weekend dinner; walk-in lunch is usually fine. The crab is genuinely excellent.",
                  b: "Iconic dinner",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Ura-Namba Izakayas",
                  t: "Local bars \u00B7 Behind Namba Station",
                  d: "The streets behind Namba Station are where Osakans actually eat and drink. Tiny standing bars, 8-seat counters, no English menus. Point at what looks good and say \u2018kore kudasai\u2019 (this please). \u00A52,000\u20133,000 ($13\u201320) per spot including drinks. The most authentic eating experience in Osaka.",
                  b: "Local pick",
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
            destination="Osaka"
            hotels={[
              {
                name: "The Dorm Hostel Osaka",
                type: "Design Hostel \u00B7 Shinsaibashi",
                price: "From \u00A53,000/night (~$20)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/jp/the-dorm-hostel-osaka.html?aid=2820480",
              },
              {
                name: "Cross Hotel Osaka",
                type: "Boutique \u00B7 Namba",
                price: "From \u00A510,000/night (~$67)",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/jp/cross-hotel-osaka.html?aid=2820480",
              },
              {
                name: "The St. Regis Osaka",
                type: "Luxury \u00B7 Midosuji",
                price: "From \u00A550,000/night (~$333)",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/hotel/jp/the-st-regis-osaka.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Dotonbori Street Food Tour",
                duration: "3 hours",
                price: "From \u00A57,000 ($47)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=osaka+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Osaka Castle Guided Tour",
                duration: "2 hours",
                price: "From \u00A54,000 ($27)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=osaka+castle+tour&partner_id=PSZA5UI",
              },
              {
                name: "Universal Studios Japan Ticket",
                duration: "Full day",
                price: "From \u00A58,600 ($57)",
                url: "https://www.getyourguide.com/s/?q=universal+studios+japan&partner_id=PSZA5UI",
              },
              {
                name: "Osaka Cooking Class (Takoyaki)",
                duration: "2.5 hours",
                price: "From \u00A56,000 ($40)",
                url: "https://www.getyourguide.com/s/?q=osaka+cooking+class&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="osaka-3-days-pdf"
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83C\uDF5C",
                  title: "Under-budgeting for food",
                  desc: "Osaka is Japan\u2019s food capital. Budget more for food here than any other Japanese city. You\u2019ll want to eat 4\u20135 times a day and you should. That\u2019s not a mistake \u2014 under-eating in Osaka is.",
                },
                {
                  icon: "\uD83D\uDCCD",
                  title: "Only eating in Dotonbori",
                  desc: "Dotonbori is touristy and 20\u201330% more expensive. The best food is in Shinsekai (kushikatsu), Tenma (local izakayas), Tsuruhashi (Korean BBQ), and Ura-Namba (hidden restaurants behind Namba).",
                },
                {
                  icon: "\u23F0",
                  title: "Skipping Kuromon Market morning",
                  desc: "The market is best 8\u201310am when everything is fresh. By afternoon, popular stalls sell out. Go hungry, eat standing, graze through every aisle.",
                },
                {
                  icon: "\uD83C\uDFA2",
                  title: "Buying Universal tickets at the gate",
                  desc: "Universal Studios sells out on weekends and holidays. Buy tickets online at least 1 week ahead. Express Pass is essential on busy days \u2014 it halves your wait times.",
                },
                {
                  icon: "\uD83C\uDFEE",
                  title: "Ignoring Shinsekai",
                  desc: "Many tourists stick to Dotonbori and miss Shinsekai entirely. It\u2019s Osaka\u2019s most characterful neighbourhood: retro neon, \u00A5100 kushikatsu skewers, and zero tourist polish. Don\u2019t skip it.",
                },
                {
                  icon: "\uD83D\uDCB4",
                  title: "Not carrying cash",
                  desc: "Many of Osaka\u2019s best food stalls, market vendors, and small restaurants are cash-only. Withdraw \u00A520,000\u201330,000 ($133\u2013200) at a 7-Eleven ATM on arrival. IC cards (ICOCA/Suica) work on all trains.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Osaka</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF62",
                  title: "The Takoyaki Rule",
                  desc: "Never eat takoyaki from the first stall you see. The best stalls always have a small queue of locals, not tourists. Wanaka, Kukuru, and Aizuya are consistently excellent.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83D\uDE89",
                  title: "Osaka Metro Day Pass",
                  desc: "\u00A5820 ($5) for unlimited rides on all Osaka Metro and city bus lines. Includes discount coupons for attractions. Buy at any station. Pays for itself by trip two.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83C\uDF7A",
                  title: "Ura-Namba for Locals",
                  desc: "The streets behind Namba Station are where Osakans actually eat and drink. No English menus, no tourist prices. Point at what looks good and say \u2018kore kudasai\u2019 (this please).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDFEE",
                  title: "Shinsekai Kushikatsu Rules",
                  desc: "No double-dipping in the communal sauce. Take cabbage from the shared bowl to scoop sauce instead. Breaking this rule will get you scolded by the chef.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDED2",
                  title: "Tax-Free Shopping",
                  desc: "Spend over \u00A55,000 ($33) at one store and get 10% tax refund. Bring your passport. Don Quijote, Bic Camera, and department stores all offer this.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDE82",
                  title: "Day Trip to Kobe or Himeji",
                  desc: "Kobe: 22 min by train, famous for Kobe beef and harbour views. Himeji: 50 min, home to Japan\u2019s most spectacular castle (\u00A51,000/$7). Both make excellent half-day trips.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Osaka" />

          {/* Combine With */}
          <CombineWith currentSlug="osaka-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Osaka?",
                  a: "3 days is perfect for the highlights: Osaka Castle, Dotonbori, Kuromon Market, and a choice of Universal Studios or deeper neighbourhood exploration. 2 days works if you skip Universal. 4\u20135 days lets you add day trips to Kyoto (29 min) and Nara (45 min).",
                },
                {
                  q: "How much does a 3-day Osaka trip cost?",
                  a: "Budget: \u00A521,000\u201330,000 ($140\u2013200). Mid-range: \u00A536,000\u201354,000 ($240\u2013360). Luxury: \u00A5330,000+ ($2,200+). All figures exclude travel to Osaka and include accommodation, food, transport and activities.",
                },
                {
                  q: "What is the best time to visit Osaka?",
                  a: "Late March to May for cherry blossoms and pleasant weather, or October to November for autumn colours. Summer (June\u2013August) is hot and humid. Avoid Golden Week (late April to early May) \u2014 domestic tourism peaks and prices surge.",
                },
                {
                  q: "Is Osaka worth visiting if I\u2019m already going to Tokyo?",
                  a: "Absolutely. Osaka has a completely different energy \u2014 louder, funnier, more food-obsessed. The street food alone justifies the 2.5-hour bullet train ride. It pairs perfectly with Kyoto (only 29 minutes away).",
                },
                {
                  q: "What food must I try in Osaka?",
                  a: "Takoyaki (octopus balls) and okonomiyaki (savoury pancakes) are the two essentials. Also try kushikatsu (deep-fried skewers in Shinsekai), a Kuromon Market breakfast, Rikuro\u2019s cheesecake, and yakiniku in Tsuruhashi.",
                },
                {
                  q: "How do I get from Kyoto to Osaka?",
                  a: "JR Special Rapid: 29 minutes, \u00A5580 ($4). Hankyu Railway: 43 minutes, \u00A5410 ($3). Both are covered by IC cards. No bullet train needed for this short distance.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Osaka trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-osaka", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/osaka-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-osaka", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/osaka-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="osaka-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Japan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo \u2014 5 Day City Guide", href: "/blog/tokyo-5-days" },
                { label: "Kyoto \u2014 4 Day Temple Guide", href: "/blog/kyoto-4-days" },
                { label: "Goa \u2014 3 Day Beach Guide", href: "/blog/goa-3-days" },
                { label: "Browse All Packages", href: "/#packages" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
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
