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
const KYOTO_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Kyoto Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚅",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "temples",     emoji: "⛩️",  label: "Temple & Cultural Guide" },
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
          href: `mailto:?subject=Kyoto 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Kyoto in 4 Days — temples, bamboo groves and the complete itinerary&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kyoto-4-days"
        imageUrl="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
        description="Kyoto in 4 Days: Fushimi Inari, Arashiyama Bamboo, Kinkaku-ji, Gion geisha district, Nishiki Market — complete travel guide with budget breakdown in JPY & USD."
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
export default function KyotoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KYOTO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kyoto" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kyoto fushimi inari torii gates shrine japan"
            fallback="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80"
            alt="Fushimi Inari torii gates winding up the forested hillside in Kyoto Japan"
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
              <span className="text-white/70">Kyoto 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kyoto in 4 Days:
                <em className="italic text-amber-300"> Temples, Bamboo &amp; the Ancient Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Fushimi Inari at dawn, Arashiyama&apos;s bamboo groves, the Golden Pavilion, Gion&apos;s geisha district and Nishiki Market. The complete guide with real timings, costs in JPY &amp; USD, and the mistakes that ruin most Kyoto trips.
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
              <span>{"\uD83C\uDDEF\uD83C\uDDF5"} Japan</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0 From \u00A57,000/day"}</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Fushimi Inari at 6am is a completely different temple than Fushimi Inari at 10am. At 6am it&apos;s just you, 10,000 orange torii gates, and absolute silence. At 10am it&apos;s a selfie queue. Everything about Kyoto comes down to timing &mdash; this guide gets yours right.
            </p>
          </blockquote>

          {/* ── WHAT KYOTO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Kyoto Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kyoto served as Japan&apos;s imperial capital for over a thousand years, from 794 to 1868. It survived World War II largely unbombed &mdash; one of the few major Japanese cities that did &mdash; which means its 2,000+ temples, 400+ Shinto shrines, imperial palaces, and traditional wooden machiya townhouses are originals, not reconstructions. The cultural density is staggering: there are 17 UNESCO World Heritage sites within the city boundaries alone.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Kyoto receives over 50 million visitors annually and the most famous spots &mdash; Fushimi Inari, Kinkaku-ji, Arashiyama Bamboo &mdash; are genuinely crowded between 10am and 4pm. The real Kyoto, the one with silent temple gardens, mist rising through torii gates, and geiko gliding through lantern-lit alleys, still exists. You just have to arrive at the right time. The single most important variable in any Kyoto trip is not which temples you visit but what time you arrive at each one.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the sweet spot. You can cover Fushimi Inari, Arashiyama, the Golden Route temples, Gion, Nishiki Market, and a day trip to Nara. If you have five or six days, add the Fushimi sake district, hidden temples like Daigo-ji, and slow down at the gardens you rushed past on day one.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Nearest Station" value="Kyoto Station" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Mar\u2013Apr, Oct\u2013Nov" />
              <StatCard icon={"\u26E9\uFE0F"} label="Temples" value="2,000+" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u00A57,000/day"} />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Kyoto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Late Mar\u2013Apr",
                  i: "\uD83C\uDF38",
                  t: "Cherry Blossom Season \u2014 Most Popular",
                  d: "10\u201320\u00B0C. Cherry blossoms peak late March to mid-April. Philosopher\u2019s Path, Maruyama Park, and Keage Incline turn pink. This is peak tourist season \u2014 accommodation prices double, temples are packed by 9am, and advance booking is essential. The beauty is real but so are the crowds. Check japan-guide.com/sakura for live bloom reports.",
                  b: "Iconic but crowded",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "May\u2013Aug",
                  i: "\u2600\uFE0F",
                  t: "Summer \u2014 Warm & Green",
                  d: "20\u201335\u00B0C. June\u2013July is rainy season (tsuyu) with high humidity. August is hot and humid but the bamboo groves and moss gardens are at their most vivid green. Fewer tourists than spring or autumn. Summer festivals include the Gion Matsuri (July), one of Japan\u2019s three great festivals. Budget-friendly accommodation is easier to find.",
                  b: "Fewer tourists, hot",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct\u2013Early Dec",
                  i: "\uD83C\uDF41",
                  t: "Autumn Foliage \u2014 Best Overall",
                  d: "10\u201322\u00B0C. Peak autumn colours mid-November to early December. Tofuku-ji, Eikan-do, and Kiyomizu-dera explode in red and gold. Evening illuminations at Kodai-ji and Kitano Tenmangu are spectacular. October offers pleasant weather before the foliage rush. This is arguably the most beautiful time in Kyoto.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec\u2013Feb",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Quiet & Atmospheric",
                  d: "1\u201310\u00B0C. Snow-dusted temples are some of the most striking images you will ever see of Kyoto. Kinkaku-ji covered in snow is extraordinary. Tourists drop dramatically and prices fall 20\u201340%. The cold is manageable with layers. Hot matcha in a silent garden with fresh snow is an experience the crowds never see.",
                  b: "Best value, fewest crowds",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDE85"} Getting to Kyoto</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kyoto has no airport. The nearest airports are Osaka&apos;s Kansai International (KIX, 75 min by Haruka Express) and Itami (ITM, 55 min by bus). Most visitors arrive by shinkansen bullet train from Tokyo. <strong className="font-medium">A 7-day JR Pass ({"\u00A550,000/$333"}) pays for itself if you&apos;re also visiting Tokyo and Hiroshima.</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\uD83D\uDE85",
                  t: "Shinkansen from Tokyo",
                  d: "Tokaido Shinkansen Nozomi: 2 hours 15 minutes, \u00A513,320 ($89) one way. Hikari (covered by JR Pass): 2 hours 40 minutes. Trains run every 10\u201315 minutes. The journey passes Mount Fuji on clear days (sit on the right side heading west). No reservation needed on unreserved cars, but reserved seats are recommended during peak seasons.",
                  b: "2hr 15min",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE84",
                  t: "From Osaka",
                  d: "JR Special Rapid train: 30 minutes from Osaka Station to Kyoto Station, \u00A5580 ($4). Covered by JR Pass. Hankyu Railway from Umeda to Kawaramachi (Gion area): 45 minutes, \u00A5410 ($3). Keihan Railway from Yodoyabashi to Gion-Shijo: 50 minutes, \u00A5420 ($3). Many travellers base themselves in Osaka and day-trip to Kyoto.",
                  b: "30 min, \u00A5580",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83C\uDFAB",
                  t: "JR Pass consideration",
                  d: "A 7-day JR Pass costs \u00A550,000 ($333). A Tokyo\u2013Kyoto return alone is \u00A526,640. Add a Nara day trip (\u00A51,440 return) and the pass nearly pays for itself. If visiting Hiroshima (\u00A511,000+ one way), the pass is a clear win. Buy online before arriving in Japan. The pass covers the Haruka Express from Kansai Airport to Kyoto as well.",
                  b: "Best for multi-city",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "From Kansai Airport (KIX)",
                  d: "JR Haruka Express: 75 minutes direct to Kyoto Station, \u00A53,640 ($24) reserved seat. Covered by JR Pass. Airport limousine bus: 88 minutes, \u00A52,600 ($17). Taxi is \u00A530,000+ ($200) and not recommended. If arriving late at night, book a hotel near KIX and take the first Haruka in the morning.",
                  b: "75 min by train",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 4-Day Kyoto Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending ({"\u00A512,000\u201320,000/day, ~$80\u2013133"}). Each day card is expandable. Budget alternatives are noted in the cost estimates. The route prioritises early-morning temple visits when the atmosphere is at its most magical and crowds are minimal.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Fushimi Inari (6AM!), Kiyomizu-dera, Gion Evening"
                cost={"\u00A513,000\u201318,000 (~$87\u2013120) excluding accommodation"}
                items={[
                  "6am: Fushimi Inari Taisha \u2014 free, open 24/7. The 10,000 vermillion torii gates are nearly empty at dawn. Full hike to the summit takes 2 hours through increasingly quiet forest trails. Half-loop: 45 min. Pack a convenience store breakfast.",
                  "9:30am: Tofuku-ji Temple \u2014 \u00A5500 ($3). One stop south of Fushimi Inari on the JR line. The Tsutenkyo Bridge view in autumn is Kyoto\u2019s best-kept secret. Incredible zen gardens year-round.",
                  "11am: Kiyomizu-dera \u2014 \u00A5400 ($3). The iconic wooden terrace cantilevered over the hillside without a single nail. The panoramic view of Kyoto from the stage is the city\u2019s most photographed image.",
                  "Walk down through Ninenzaka and Sannenzaka \u2014 the most photographed traditional lanes in Kyoto. Free, beautiful, lined with tea houses and ceramic shops.",
                  "1pm: Lunch at Omen Kodaiji for handmade udon \u2014 \u00A51,500\u20132,200 ($10\u201315). Budget alternative: Yoshinoya near Gion for \u00A5500\u2013800.",
                  "2pm: Kodai-ji Temple \u2014 \u00A5600 ($4). Less crowded than Kiyomizu, with a stunning bamboo grove and zen gardens.",
                  "5pm: Gion district walk. Hanami-koji street for tea houses. The best time to spot geiko and maiko heading to evening appointments is 6pm\u20138pm.",
                  "Dinner: Gion Nanba for tempura kaiseki \u2014 \u00A54,000\u20136,000 ($27\u201340). Budget alternative: udon or ramen near Gion for \u00A5800\u20131,000."
                ]}
              />
              <DayCard
                day="Day 2"
                title="Arashiyama: Bamboo, Temples & River"
                cost={"\u00A514,000\u201319,000 (~$93\u2013127) excluding accommodation"}
                items={[
                  "7am: Arashiyama Bamboo Grove \u2014 free. At 7am the towering bamboo pathway is nearly empty. By 9am it\u2019s shoulder-to-shoulder. The early morning light filtering through the canopy and the rustling sound is genuinely magical.",
                  "8:30am: Tenryu-ji Temple \u2014 \u00A5500 ($3). One of Kyoto\u2019s five great zen temples. Enter from the north gate to walk through the garden directly into the bamboo grove.",
                  "10am: Iwatayama Monkey Park \u2014 \u00A5550 ($4). Climb 20 minutes to the hilltop where wild macaques roam free. The panoramic view of Kyoto from the top is the real reason to go.",
                  "11:30am: Sagano Scenic Railway (Romantic Train) \u2014 \u00A5880 ($6) one way. 25 min through the Hozu River gorge. Pre-book seats in peak season.",
                  "1pm: Lunch at Arashiyama \u2014 yudofu (simmered tofu) is the local speciality. Shoraian riverside terrace for \u00A52,500 ($17). Budget: noodle shop from \u00A5900.",
                  "3pm: Rent a bicycle (\u00A5800\u20131,000/day) and ride to Daikaku-ji Temple (\u00A5500) \u2014 10 min north, almost no tourists, beautiful lake.",
                  "3:30pm: Togetsukyo Bridge \u2014 iconic arched bridge. Walk across, free. Rent a rowing boat for \u00A51,500 ($10).",
                  "Evening: Ride back to central Kyoto. Pontocho Alley for dinner \u2014 narrow lantern-lit alley along the Kamo River. Riverside seating (kawadoko) May\u2013Sep. \u00A53,000\u20135,000."
                ]}
              />
              <DayCard
                day="Day 3"
                title="Golden Route: Kinkaku-ji, Ryoan-ji, Philosopher's Path"
                cost={"\u00A513,000\u201318,000 (~$87\u2013120) excluding accommodation"}
                items={[
                  "9am: Kinkaku-ji (Golden Pavilion) \u2014 \u00A5500 ($3). Arrive at opening to see the gold-leafed pavilion reflecting in the mirror pond without crowds. The reflection on a still morning is even more stunning in person. 30\u201345 min.",
                  "10:30am: Walk to Ryoan-ji \u2014 \u00A5500 ($3). Japan\u2019s most famous zen rock garden. Sit on the wooden platform and stare at the 15 stones \u2014 you can only see 14 from any single angle. Intentional incompleteness. Give it 30 minutes minimum.",
                  "12pm: Ginkaku-ji (Silver Pavilion) \u2014 \u00A5500 ($3). Less flashy than Kinkaku-ji but more refined. The moss garden is extraordinary.",
                  "1pm: Walk the Philosopher\u2019s Path south to Nanzen-ji \u2014 free, 2km canal-side walk lined with cherry trees and small temples. Best in late afternoon light or during cherry blossom season.",
                  "2:30pm: Nanzen-ji Temple \u2014 free grounds, \u00A5600 for Sanmon gate (climb for panoramic views). The brick aqueduct running through the temple grounds is strikingly photogenic.",
                  "4pm: Nishiki Market deep dive \u2014 2 hours of food stalls stretching five blocks. Try yuba (tofu skin), Kyoto pickles, A5 wagyu skewer (\u00A52,000/$13), dashi stock, and matcha everything.",
                  "Dinner: Nishiki Warai for Kyoto-style okonomiyaki \u2014 \u00A51,800\u20132,500 ($12\u201317). Budget: conveyor belt sushi at Musashi Sushi near Sanjo \u2014 \u00A51,200\u20131,800."
                ]}
              />
              <DayCard
                day="Day 4"
                title="Nara Day Trip \u2014 Deer, Giant Buddha & Ancient Shrines"
                cost={"\u00A512,000\u201317,000 (~$80\u2013113) excluding accommodation"}
                items={[
                  "8am: Train from Kyoto to Nara \u2014 45 minutes on the JR Nara Line, \u00A5720 ($5) each way. Covered by JR Pass.",
                  "9am: Todai-ji Temple \u2014 \u00A5600 ($4). Houses the largest bronze Buddha in the world at 15 metres tall. The wooden hall containing it is the world\u2019s largest wooden structure. The scale of both is genuinely awe-inspiring.",
                  "10:30am: Nara Park \u2014 free. 1,200+ wild sika deer roam freely through the park. Buy deer crackers (\u00A5200) and bow to them \u2014 they bow back. The deer have lived here for over a thousand years and are considered sacred messengers of the gods.",
                  "12pm: Lunch \u2014 kakinoha-zushi (persimmon leaf sushi) is Nara\u2019s signature dish, \u00A51,500\u20132,200 ($10\u201315).",
                  "1:30pm: Kasuga Taisha Shrine \u2014 \u00A5500 ($3). 3,000 stone and bronze lanterns line the pathways through an ancient forest. The atmosphere is extraordinary, especially in the afternoon light.",
                  "3pm: Walk through Naramachi old town \u2014 free. Traditional merchant houses, small museums, and craft shops in narrow lanes.",
                  "5pm: Return to Kyoto. Final evening walk through Gion. Return to any temple you rushed through earlier in the trip.",
                  "Farewell dinner: kaiseki restaurant \u2014 \u00A58,000\u201312,000 ($53\u201380) for a multi-course traditional Kyoto meal. Budget: Fushimi sake district \u2014 Gekkeikan Okura Museum \u00A5400 includes tastings."
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kyoto" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE & CULTURAL GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u26E9\uFE0F"} Temple &amp; Cultural Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important temples and cultural sites in order of priority. Many temples require shoe removal at entry &mdash; wear easy slip-on shoes and bring socks. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Fushimi Inari Taisha",
                  e: "Free",
                  d: "10,000 vermillion torii gates winding up Mount Inari, open 24/7. The most visited shrine in Japan and utterly magical at dawn when it is nearly empty. The full hike to the summit takes 2 hours through increasingly forested and quiet trails with sub-shrines and fox statues. The half-loop (Yotsutsuji intersection) takes 45 minutes and gives you the iconic tunnel photos plus a panoramic view of Kyoto.",
                  t: "Must see \u00B7 Dawn \u00B7 45min\u20132hrs",
                },
                {
                  n: "Kinkaku-ji (Golden Pavilion)",
                  e: "\u00A5500 (~$3)",
                  d: "A three-storey pavilion covered in gold leaf, reflecting in a mirror pond. Originally built in 1397 as a retirement villa for Shogun Ashikaga Yoshimitsu. The current structure is a 1955 reconstruction after the original was destroyed by arson. Each floor represents a different architectural style. Arrive at 9am opening to see the reflection without crowds.",
                  t: "Must see \u00B7 Morning \u00B7 45min",
                },
                {
                  n: "Arashiyama Bamboo Grove",
                  e: "Free",
                  d: "A towering bamboo forest on Kyoto\u2019s western edge. The sound of wind through the bamboo canopy is designated by the Japanese government as one of the 100 Soundscapes of Japan. Visit before 8am \u2014 by mid-morning the pathway becomes a slow-moving crowd. Combine with Tenryu-ji temple garden which connects directly to the grove.",
                  t: "Must see \u00B7 Dawn \u00B7 30min",
                },
                {
                  n: "Kiyomizu-dera",
                  e: "\u00A5400 (~$3)",
                  d: "A wooden terrace cantilevered 13 metres over the hillside, built without a single nail. Founded in 778 and one of the oldest temples in Kyoto. The view from the stage across the city is breathtaking, especially during cherry blossom and autumn foliage seasons. The surrounding Higashiyama district has the most atmospheric traditional lanes in Kyoto.",
                  t: "Must see \u00B7 Morning \u00B7 1.5hrs",
                },
                {
                  n: "Ryoan-ji",
                  e: "\u00A5500 (~$3)",
                  d: "Japan\u2019s most famous zen rock garden. Fifteen stones arranged on raked white gravel so that only 14 are visible from any single vantage point \u2014 a meditation on the incompleteness of perception. Sit on the wooden platform and let it work on you. The longer you stare, the more you see. The surrounding garden with its mirror pond is equally beautiful.",
                  t: "Must see \u00B7 Contemplative \u00B7 45min",
                },
                {
                  n: "Todai-ji (Nara)",
                  e: "\u00A5600 (~$4)",
                  d: "Houses the world\u2019s largest bronze Buddha (15m tall, 500 tonnes) inside the world\u2019s largest wooden building. Both statistics undersell the experience \u2014 the scale when you step inside is genuinely overwhelming. A 45-minute train ride from Kyoto. Combine with Nara Park\u2019s sacred deer and Kasuga Taisha\u2019s 3,000 lanterns for a full day trip.",
                  t: "Must see \u00B7 Day trip \u00B7 Half day",
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
            title="Kyoto &mdash; Temples, Bamboo &amp; Tradition"
            subtitle="The ancient capital of Japan with 2,000 temples and 17 UNESCO World Heritage sites."
            spots={[
              {
                name: "Fushimi Inari Torii Gates",
                query: "fushimi inari shrine torii gates tunnel orange kyoto japan dawn",
                desc: "10,000 vermillion torii gates winding up Mount Inari. Free, open 24/7. Go at 6am for near-empty photos that will define your trip.",
              },
              {
                name: "Arashiyama Bamboo Grove",
                query: "arashiyama bamboo grove path kyoto japan green tall morning light",
                desc: "Towering bamboo forest on Kyoto\u2019s western edge. The rustling sound alone is worth the early wake-up. Best before 8am.",
              },
              {
                name: "Kinkaku-ji Golden Pavilion",
                query: "kinkaku-ji golden pavilion kyoto japan pond reflection",
                desc: "The Gold Pavilion reflecting in its mirror pond. One of Japan\u2019s most photographed buildings. Entry \u00A5500.",
              },
              {
                name: "Gion District",
                query: "gion kyoto traditional street wooden buildings lanterns evening",
                desc: "Kyoto\u2019s geisha district. Walk Hanami-koji in the early evening for a chance to spot geiko and maiko in traditional dress.",
              },
              {
                name: "Nishiki Market",
                query: "nishiki market kyoto japan food stalls narrow covered street",
                desc: "Kyoto\u2019s kitchen \u2014 five blocks of food stalls selling pickles, mochi, wagyu skewers, and matcha everything.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kyoto is mid-range by Japanese standards. Budget travellers can visit comfortably for {"\u00A57,000\u201310,000/day ($47\u201367)"}, mid-range for {"\u00A512,000\u201320,000/day ($80\u2013133)"}, and luxury for {"\u00A535,000+/day ($233+)"}. All prices in Japanese Yen and USD at ~{"\u00A5150/$1"}.
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
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u00A512,000\u201318,000 ($80\u2013120)", "\u00A532,000\u201360,000 ($213\u2013400)", "\u00A5160,000\u2013480,000 ($1,067\u20133,200)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A58,000\u201312,000 ($53\u201380)", "\u00A520,000\u201332,000 ($133\u2013213)", "\u00A580,000\u2013160,000 ($533\u20131,067)"],
                    ["\uD83D\uDE8C Transport", "\u00A53,000\u20135,000 ($20\u201333)", "\u00A55,000\u20138,000 ($33\u201353)", "\u00A515,000\u201330,000 ($100\u2013200)"],
                    ["\u26E9\uFE0F Temples & Activities", "\u00A54,000\u20136,000 ($27\u201340)", "\u00A510,000\u201318,000 ($67\u2013120)", "\u00A580,000\u2013150,000 ($533\u20131,000)"],
                    ["\uD83C\uDF75 Extras", "\u00A51,000\u20132,000 ($7\u201313)", "\u00A53,000\u20135,000 ($20\u201333)", "\u00A510,000\u201330,000 ($67\u2013200)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (4 days)</td>
                    {["\u00A528,000\u201340,000 ($187\u2013267)", "\u00A548,000\u201380,000 ($320\u2013533)", "\u00A5500,000\u2013900,000 ($3,333\u20136,000)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDCB0 Budget (\u00A57,000\u201310,000/day)"}</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">{"Stay in guesthouses or hostels near Kyoto Station (\u00A53,000\u20134,500/night), eat at udon shops and convenience stores (\u00A5500\u20131,000/meal), rent a bicycle, and use the \u00A5700 bus day pass. Kyoto is surprisingly affordable at this level."}</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728 Mid-Range (\u00A512,000\u201320,000/day)"}</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">{"Boutique hotels or machiya guesthouses (\u00A58,000\u201315,000/night), mix of casual and sit-down dining, guided temple tours, and tea ceremony experiences. The sweet spot for experiencing Kyoto properly without the luxury price tag."}</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E Luxury (\u00A535,000+/day)"}</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">{"Traditional ryokan with private onsen and kaiseki dinner (\u00A540,000\u2013120,000/night), private temple guides, exclusive tea ceremonies, Michelin-starred dining, and chauffeur-driven temple tours. Japanese luxury is refined, subtle, and extraordinary."}</p>
              </div>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              {"All prices in \u00A5 (Japanese Yen), 2026. USD equivalent at ~\u00A5150/$1. Excludes travel to Kyoto from other cities."}
            </p>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Kyoto</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Near Kyoto Station for transport convenience. Gion for atmosphere and evening walks. Higashiyama for temple proximity. A traditional machiya (wooden townhouse) stay is one of the most memorable accommodation experiences in Japan.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Near Kyoto Station",
                  type: "Transport hub \u00B7 Best for convenience",
                  price: "From \u00A53,500/night ($23)",
                  badge: "Best budget area",
                  desc: "Walking distance to shinkansen, JR lines to Nara, buses to all temples, and the Haruka Express to the airport. The area around the station is modern and practical rather than atmospheric. Piece Hostel Sanjo, Noku Kyoto, and the many business hotels here offer the best value-for-money in the city. Ideal if you want to maximise temple time and minimise commuting.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Gion District",
                  type: "Geisha district \u00B7 Best for atmosphere",
                  price: "From \u00A58,000/night ($53)",
                  badge: "Most atmospheric",
                  desc: "Traditional wooden machiya houses, lantern-lit streets, and the chance to spot geiko heading to appointments in the evening. Staying in Gion puts you within walking distance of Kiyomizu-dera, Kodai-ji, and the Higashiyama lanes. The area is quieter than you would expect at night. A machiya guesthouse in Gion is one of the most authentic accommodation experiences in Japan.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Higashiyama",
                  type: "Temple district \u00B7 Best for walking",
                  price: "From \u00A56,000/night ($40)",
                  badge: "Temple proximity",
                  desc: "The eastern mountain district between Gion and Kiyomizu-dera. Staying here means morning walks through Ninenzaka and Sannenzaka before the crowds arrive. The traditional lanes, small ryokans, and proximity to the Philosopher\u2019s Path make this the most walkable base for temple visits. Less nightlife than Gion but more peaceful.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Traditional Machiya Stay",
                  type: "Townhouse rental \u00B7 Unique experience",
                  price: "From \u00A512,000/night ($80)",
                  badge: "Must-try experience",
                  desc: "Kyoto\u2019s traditional wooden townhouses have been converted into private accommodation. Tatami rooms, sliding paper doors, small private gardens, and futon bedding on straw mats. Companies like Machiya Residence Inn and Nazuna offer beautifully restored houses. For couples or small groups, this is an unforgettable way to stay \u2014 your own piece of old Kyoto.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Luxury Ryokan",
                  type: "Traditional inn \u00B7 Full experience",
                  price: "From \u00A540,000/night ($267)",
                  badge: "Luxury pick",
                  desc: "A traditional ryokan with tatami rooms, private onsen bath, and multi-course kaiseki dinner included in the rate. Aman Kyoto (mountain retreat), Hoshinoya Kyoto (river access by boat only), and Tawaraya (operating since 1709) represent the pinnacle of Japanese hospitality. Dinner and breakfast are included and are culinary events in themselves.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF5C"} Where to Eat in Kyoto</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kyoto is the birthplace of kaiseki (multi-course traditional dining), home to Japan&apos;s finest tofu cuisine, and the undisputed capital of matcha. The city has more Michelin stars per capita than almost anywhere in the world. But some of the best meals cost under {"\u00A51,000"}.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kaiseki Dining",
                  t: "Multi-course traditional \u00B7 Kyoto\u2019s signature",
                  d: "Kaiseki is Kyoto\u2019s greatest culinary art \u2014 a multi-course meal that follows the seasons, using local ingredients presented like edible art. A lunch kaiseki at Kikunoi Roan starts at \u00A58,000 ($53) and is a Michelin-starred experience. Budget kaiseki sets at smaller restaurants run \u00A54,000\u20136,000 ($27\u201340). Hyotei, operating for over 400 years, is one of Japan\u2019s most celebrated restaurants. Reserve well ahead for dinner.",
                  b: "Must experience",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kyoto-Style Ramen",
                  t: "Lighter chicken-based broth \u00B7 Budget friendly",
                  d: "Kyoto ramen differs from Tokyo\u2019s rich pork tonkotsu \u2014 the broth here is often chicken-based, lighter, and clearer. Honke Daiichiasahi near Kyoto Station has had queues since 1947. Expect \u00A5800\u20131,200 ($5\u20138) for a full bowl. Ramen Ogawa in Gion serves a refined version. For budget meals, ramen shops near train stations are consistently excellent and fast.",
                  b: "Best budget meal",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Nishiki Market Grazing",
                  t: "Five blocks of food stalls \u00B7 Central",
                  d: "Kyoto\u2019s kitchen stretches five blocks with stalls selling grilled mochi (\u00A5200), takoyaki (\u00A5400), matcha soft serve (\u00A5350), A5 wagyu skewer (\u00A52,000), pickles, yuba, and dashi stock. A full graze-through lunch costs \u00A51,000\u20132,500 ($7\u201317). Vendors begin discounting after 4pm. Best visited on a weekday to avoid the worst crowds.",
                  b: "Must visit",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Tofu Cuisine (Yudofu)",
                  t: "Kyoto speciality \u00B7 Temple food origin",
                  d: "Kyoto\u2019s soft water produces Japan\u2019s best tofu, and yudofu (gently simmered tofu) originated in the temples here. Shoraian in Arashiyama serves it on a riverside terrace (\u00A52,500/$17). Okutan near Nanzen-ji has been serving yudofu since 1635 in a garden setting. Even if you think you don\u2019t like tofu, Kyoto tofu is a different experience entirely.",
                  b: "Unique to Kyoto",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Matcha & Tea Culture",
                  t: "Kyoto is Japan\u2019s tea capital",
                  d: "Ippodo Tea has operated in central Kyoto since 1717. A proper ceremony-grade matcha bowl costs \u00A5600\u20131,000 ($4\u20137). Nakamura Tokichi in Uji (30 min south) is the most famous tea house in the region. Matcha parfaits, matcha soba noodles, and matcha soft serve are everywhere. A formal tea ceremony in Gion costs \u00A54,000\u20136,000 ($27\u201340) and teaches you to whisk matcha properly.",
                  b: "Cultural must-do",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Kyoto"
            hotels={[
              {
                name: "Piece Hostel Sanjo",
                type: "Design Hostel \u00B7 Central",
                price: "From \u00A53,500/night ($23)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/jp/piece-hostel-sanjo.html?aid=2820480",
              },
              {
                name: "Noku Kyoto",
                type: "Boutique \u00B7 Gion area",
                price: "From \u00A512,000/night ($80)",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/jp/noku-kyoto.html?aid=2820480",
              },
              {
                name: "Aman Kyoto",
                type: "Luxury Resort \u00B7 Mountains",
                price: "From \u00A5100,000/night ($667)",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/hotel/jp/aman-kyoto.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Fushimi Inari Early Morning Tour",
                duration: "3 hours",
                price: "From \u00A56,000 ($40)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI",
              },
              {
                name: "Traditional Tea Ceremony in Gion",
                duration: "1.5 hours",
                price: "From \u00A54,000 ($27)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI",
              },
              {
                name: "Arashiyama Bamboo & Monkey Park",
                duration: "4 hours",
                price: "From \u00A55,000 ($33)",
                url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI",
              },
              {
                name: "Nara Day Trip with Guide",
                duration: "Full day",
                price: "From \u00A58,000 ($53)",
                url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="kyoto-4-days-pdf"
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\u26E9\uFE0F",
                  title: "Visiting Fushimi Inari after 9am",
                  desc: "At 6am: silence, empty torii tunnels, magical photos. At 10am: wall-to-wall crowds and a 20-minute wait for a clear shot. The shrine is open 24/7 and free. Go early.",
                },
                {
                  icon: "\uD83D\uDE35",
                  title: "Trying to see too many temples",
                  desc: "Kyoto has 2,000+ temples. Seeing 3\u20134 per day with proper time at each beats rushing through 8. Quality over quantity. Sit in the gardens. Let the zen work.",
                },
                {
                  icon: "\uD83D\uDE8C",
                  title: "Taking buses for everything",
                  desc: "Kyoto buses are slow and packed with tourists. Rent a bicycle (\u00A5800\u20131,000/day/$5\u20137) \u2014 the city is flat and compact. You\u2019ll see 3x more temples and enjoy the ride between them.",
                },
                {
                  icon: "\uD83E\uDD8C",
                  title: "Skipping Nara",
                  desc: "Only 45 minutes from Kyoto. Wild deer that bow, the world\u2019s largest wooden building, and far fewer tourists than Kyoto. Don\u2019t skip it.",
                },
                {
                  icon: "\uD83D\uDC5E",
                  title: "Wearing complicated shoes",
                  desc: "Many temples require shoe removal. Wear easy slip-on shoes. Bring socks. Nothing ruins a zen moment like fumbling with laces at every entrance.",
                },
                {
                  icon: "\uD83D\uDCB4",
                  title: "Not carrying cash",
                  desc: "Temple entry fees, small restaurants, market stalls, and bicycle rentals are cash-only. Withdraw \u00A520,000\u201330,000 ($133\u2013200) from a 7-Eleven ATM \u2014 they accept all international cards with no conversion markup.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Kyoto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83D\uDEB2",
                  title: "Rent a Bicycle",
                  desc: "Kyoto is flat. This single decision will triple the number of temples you see and transform your experience. Most guesthouses offer rental or can point you to nearby shops. \u00A5800\u20131,000/day ($5\u20137).",
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  icon: "\uD83C\uDF38",
                  title: "Cherry Blossom Strategy",
                  desc: "Late March to mid-April. Best spots: Philosopher\u2019s Path, Maruyama Park, Keage Incline. Peak bloom lasts only 7\u201310 days. Check japan-guide.com/sakura for real-time bloom reports before booking flights.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "\uD83C\uDF41",
                  title: "Autumn Colours Strategy",
                  desc: "Mid-November to early December. Tofuku-ji, Eikan-do, and Kiyomizu-dera are the top three spots. Evening illuminations at Kodai-ji and Kitano Tenmangu are spectacular and less crowded than daytime visits.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDF75",
                  title: "Matcha Everything",
                  desc: "Kyoto is the capital of Japanese tea culture. Try matcha at Ippodo Tea (since 1717) in central Kyoto. \u00A5600\u20131,000 ($4\u20137) for a proper ceremony-grade bowl. Matcha parfaits at Nakamura Tokichi in Uji are legendary.",
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Kyoto Bus Day Pass",
                  desc: "Only \u00A5700 ($5) for unlimited city bus rides. Worth it if you\u2019re not cycling. Buy at Kyoto Station bus terminal. Covers 90% of tourist routes. The IC card (Suica/Pasmo) works on all buses and trains too.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "\uD83C\uDF19",
                  title: "Gion After Dark",
                  desc: "The best time to walk Gion is 6pm\u20138pm when the lanterns are lit and geiko head to appointments. Hanami-koji and Shirakawa areas. Be respectful \u2014 no chasing for photos. The quiet beauty of these streets at dusk is extraordinary.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "\uD83C\uDFAB",
                  title: "JR Pass Timing",
                  desc: "If visiting Tokyo + Kyoto + Nara (or Hiroshima), a 7-day JR Pass (\u00A550,000/$333) saves significant money. Activate it on the day you take your first long-distance train, not the day you arrive. Buy online before entering Japan.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDE87",
                  title: "Convenience Store Breakfasts",
                  desc: "Japanese konbini (7-Eleven, Lawson, FamilyMart) have exceptional food. Onigiri (\u00A5120\u2013180), egg sandwiches, and fresh coffee for under \u00A5500 total. Saves time and money versus hotel breakfast. Quality is genuinely impressive.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kyoto" />

          {/* Combine With */}
          <CombineWith currentSlug="kyoto-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Kyoto?",
                  a: "4 days is ideal to cover the major temples, Arashiyama, and a day trip to Nara without rushing. 2\u20133 days works if you\u2019re selective. 5\u20136 days lets you explore hidden temples, the Fushimi sake district, and take things slow.",
                },
                {
                  q: "What is the best time to visit Kyoto?",
                  a: "Late March to mid-April for cherry blossoms, or mid-November for peak autumn colours. May and October offer pleasant weather with fewer tourists. Avoid Golden Week (late April to early May) when domestic tourism spikes and prices soar.",
                },
                {
                  q: "How much does a 4-day Kyoto trip cost?",
                  a: "Budget: \u00A528,000\u201340,000 ($187\u2013267). Mid-range: \u00A548,000\u201380,000 ($320\u2013533). Luxury: \u00A5500,000+ ($3,333+). All figures exclude travel to Kyoto and include accommodation, food, transport and activities.",
                },
                {
                  q: "Should I rent a bicycle in Kyoto?",
                  a: "Absolutely. Kyoto is flat and compact. A bicycle (\u00A5800\u20131,000/day) will let you see 3x more temples than buses. Most guesthouses have rental or can direct you to nearby shops.",
                },
                {
                  q: "How do I get from Tokyo to Kyoto?",
                  a: "Shinkansen bullet train: 2 hours 15 minutes, \u00A513,320 ($89) one way. If buying a JR Pass for wider Japan travel, this route alone nearly justifies the cost. Budget option: highway bus for \u00A53,000\u20135,000 ($20\u201333), takes 7\u20138 hours.",
                },
                {
                  q: "What time should I arrive at Fushimi Inari?",
                  a: "6am. The shrine is open 24/7 and free. At 6am the iconic torii gate tunnel is nearly empty. By 10am it\u2019s a crowded queue. The full hike takes about 2 hours, the half-loop about 45 minutes.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kyoto trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-kyoto", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/kyoto-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-kyoto", label: "How to get there", icon: "\uD83D\uDE85" },
                { href: "/blog/kyoto-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="kyoto-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Japan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo &mdash; 5 Day City Guide", href: "/blog/tokyo-5-days" },
                { label: "Osaka &mdash; 3 Day Food & Fun Guide", href: "/blog/osaka-3-days" },
                { label: "Goa &mdash; 3 Day Beach Guide", href: "/blog/goa-3-days" },
                { label: "Browse All Packages", href: "/#packages" },
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
