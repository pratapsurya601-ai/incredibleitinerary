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
const BANGKOK_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Bangkok Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "4-Day Itinerary" },
  { id: "temples",     emoji: "\uD83C\uDFDB\uFE0F", label: "Temple & Landmark Guide" },
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
          href: `mailto:?subject=Bangkok 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bangkok in 4 Days — temples, street food and the real city&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bangkok-4-days"
        imageUrl="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80"
        description="Bangkok in 4 Days: Grand Palace, Wat Pho, street food, Chatuchak Market, Chinatown and Ayutthaya day trip — complete travel guide with budget breakdown."
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
export default function BangkokClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BANGKOK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bangkok" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bangkok grand palace golden spires chao phraya river thailand temple"
            fallback="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600&q=80"
            alt="Bangkok Grand Palace golden spires against a hazy sky with the Chao Phraya River"
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
              <span className="text-white/70">Bangkok 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Street Food
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bangkok in 4 Days:
                <em className="italic text-amber-300"> Temples, Street Food &amp; the Real City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Grand Palace at dawn, pad thai from a cart with a 40-person queue, Chatuchak&apos;s 15,000 stalls, and the Chao Phraya at sunset. The honest guide with real prices in Baht.
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
              <span>{"\uD83C\uDDF9\uD83C\uDDED"} Thailand</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From \u0E3F800/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bangkok street food at 11pm from a cart with a 40-person queue is better than any Michelin restaurant I&apos;ve been to. This city rewards the curious and punishes the lazy planner. The temples are overwhelming, the heat is relentless, and the food is the best in Southeast Asia. Here&apos;s how to actually do it right.
            </p>
          </blockquote>

          {/* ── WHAT BANGKOK ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Bangkok Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bangkok is a city of 11 million people that somehow functions in permanent, beautiful chaos. The official name is Krung Thep Maha Nakhon, and it has been Thailand&apos;s capital since 1782 when King Rama I moved it from Thonburi across the Chao Phraya River. What visitors experience today is a city built in layers &mdash; 400 gilded temples next to glass skyscrapers, street food carts beneath elevated railways, and a river system that was the city&apos;s highway long before roads existed.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Grand Palace complex alone took over 150 years to build. Wat Pho has been a centre of traditional Thai medicine and massage since the 1780s. Chinatown (Yaowarat) has been a trading district for over 200 years. These are not tourist attractions bolted onto a modern city &mdash; they are the city. Bangkok grew around them.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The practical reality: Bangkok is hot, loud, and the traffic is genuinely terrible. But the BTS Skytrain and MRT metro are fast and air-conditioned, the street food is the cheapest world-class cuisine on earth, and the Thai people are extraordinarily generous hosts. Four days is enough to see the essential temples, eat your way through Chinatown and Chatuchak, take a day trip to Ayutthaya, and understand why 23 million tourists visit every year.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="From India" value="3.5\u20134 hrs" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Nov\u2013Feb" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="Temples" value="400+" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u0E3F800/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Bangkok</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov\u2013Feb",
                  i: "\u2600\uFE0F",
                  t: "Cool Season \u2014 Best Time",
                  d: "25\u201332\u00B0C, lower humidity, clear skies. This is as comfortable as Bangkok gets. December and January are peak tourist season \u2014 book hotels 2\u20133 weeks ahead. The best window for temple-heavy itineraries and walking Chinatown at night without melting.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar\u2013May",
                  i: "\uD83D\uDD25",
                  t: "Hot Season \u2014 Brutally Hot",
                  d: "35\u201340\u00B0C with high humidity. April is the hottest month in Bangkok and also Songkran (Thai New Year water festival, 13\u201315 April) \u2014 citywide water fights in the streets. If you can handle the heat, Songkran is an extraordinary experience. Otherwise, plan temples before 9am and spend afternoons in air-conditioned malls.",
                  b: "Songkran only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "\uD83C\uDF27\uFE0F",
                  t: "Early Monsoon \u2014 Afternoon Showers",
                  d: "30\u201334\u00B0C. Afternoon downpours lasting 1\u20132 hours, then clearing. Hotels are 30\u201350% cheaper than peak season. Mornings are often clear enough for sightseeing. If you plan around the rain (temples in the morning, indoor activities in the afternoon), this is a surprisingly good time to visit.",
                  b: "Budget-friendly",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\u26C8\uFE0F",
                  t: "Heavy Monsoon \u2014 Flooding Risk",
                  d: "29\u201333\u00B0C. The wettest months \u2014 October in particular can bring significant flooding in low-lying areas of Bangkok. Some streets become impassable. Hotels are cheapest but the experience is significantly compromised. Not ideal for a first visit.",
                  b: "Not recommended",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Bangkok</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bangkok has two airports. <strong className="font-medium">Suvarnabhumi (BKK)</strong> handles most international and full-service flights. <strong className="font-medium">Don Mueang (DMK)</strong> handles budget carriers like AirAsia, Nok Air, and Lion Air. Check which airport your flight uses before booking transport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Flights from India (3.5\u20134 hrs direct)",
                  d: "Direct flights from Delhi, Mumbai, Kolkata, Chennai, and Bangalore to BKK. IndiGo, Air India, Thai Airways, and Thai AirAsia operate daily. Budget airlines (AirAsia, Thai Lion) fly into DMK. Round-trip fares: \u20B912,000\u201322,000 depending on season and how far ahead you book. Book 6\u20138 weeks early for the best fares.",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE86",
                  t: "Suvarnabhumi (BKK) to city centre",
                  d: "Airport Rail Link to Phaya Thai BTS station: \u0E3F45 (~$1.30), 30 minutes, runs 6am\u2013midnight. Connect to BTS Skytrain for Sukhumvit, Silom, or Siam. This is the fastest and cheapest option. Metered taxi to Sukhumvit: \u0E3F300\u2013400 (~$8\u201311) plus \u0E3F50 airport surcharge, 30\u201360 minutes depending on traffic. Grab: \u0E3F350\u2013500 (~$10\u201314), fixed price, no surprises.",
                  b: "Rail Link recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE8C",
                  t: "Don Mueang (DMK) to city centre",
                  d: "No direct rail link. Options: A1 bus to BTS Mo Chit (\u0E3F30, 30 min), then BTS anywhere. Metered taxi: \u0E3F250\u2013350 (~$7\u201310) to Sukhumvit. DMK is closer to the city but traffic on Vibhavadi Road can be terrible during rush hour (add 30\u201345 minutes).",
                  b: "A1 bus + BTS",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE87",
                  t: "Getting around: BTS, MRT & boats",
                  d: "The BTS Skytrain and MRT metro cover most tourist areas. Buy a Rabbit Card at any BTS station (\u0E3F200 including \u0E3F100 deposit + \u0E3F100 credit). Single rides \u0E3F16\u201359. Chao Phraya Express Boats (\u0E3F15\u201340) connect riverside temples. For everything else, use Grab (Southeast Asia&apos;s Uber). Do not rely on taxis without meters or tuk-tuks for transport \u2014 BTS and Grab are always faster and cheaper.",
                  b: "Essential",
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

            {/* Visa info callout */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl border p-4 bg-amber-50 border-amber-200">
                <p className="font-medium text-sm text-amber-800 mb-2">{"\uD83C\uDDEE\uD83C\uDDF3"} Indian Passport Holders</p>
                <p className="text-xs text-gray-700 font-light leading-relaxed">
                  eVisa online at thaievisa.go.th (5\u20137 days processing, 60-day stay). Visa on Arrival: 15-day stay, \u0E3F2,000 fee, carry \u0E3F10,000 cash as proof of funds. Tourist Visa from Thai embassy for 60 days, extendable 30 more at immigration for \u0E3F1,900.
                </p>
              </div>
              <div className="rounded-xl border p-4 bg-teal-50 border-teal-200">
                <p className="font-medium text-sm text-teal-800 mb-2">{"\uD83C\uDF0D"} Most Western Passports</p>
                <p className="text-xs text-gray-700 font-light leading-relaxed">
                  Visa-free 60 days for USA, UK, EU, Australia, Canada. Extendable 30 days at any immigration office for \u0E3F1,900. Always carry a printed return ticket and hotel booking \u2014 airlines sometimes check before boarding.
                </p>
              </div>
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 4-Day Bangkok Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This is the mid-range itinerary that balances temples, food, and experiences. Budget and luxury alternatives are noted in the cost estimates. Plan mornings for temples and markets, afternoons for air-conditioned rest, evenings for street food and night markets.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Grand Palace \u00B7 Wat Pho \u00B7 Wat Arun \u00B7 Riverside Dinner"
                cost="\u0E3F1,500\u20132,500 (~$42\u201370)"
                items={[
                  "7:30am: Grab or Chao Phraya Express Boat to the Grand Palace. Arrive before the 8:30am opening \u2014 by 10am the tour-bus crowds make it unbearable. Entry \u0E3F500 (~$14). Dress code strictly enforced: cover shoulders and knees, no flip-flops. Hire an audio guide inside (\u0E3F200) \u2014 it makes the Emerald Buddha Temple and the murals 3x more interesting.",
                  "10:30am: Walk to Wat Pho (5 minutes south). Entry \u0E3F200 (~$5.50). Home of the 46-metre Reclining Buddha \u2014 the gold-leaf detail on the soles of the feet is extraordinary. Get the traditional Thai massage inside (\u0E3F300/30min) \u2014 this is the original Thai massage school, operating since the 1780s.",
                  "12:30pm: Cross-river ferry to Wat Arun (\u0E3F4). Entry \u0E3F100 (~$2.80). Climb the steep central prang (Khmer-style tower) for panoramic river views. The ceramic tile mosaics covering the entire structure are best seen in afternoon light. Best photos FROM Wat Arun looking back at the Grand Palace across the river.",
                  "2pm: Lunch at Supanniga Eating Room near Tha Tien pier \u2014 modern Thai cuisine, \u0E3F250\u2013400/person. Or street-cart pad thai between Wat Pho and the ferry pier for \u0E3F50\u201380 (~$1.50\u20132.25).",
                  "4pm: Walk through Khao San Road \u2014 don\u2019t eat here (overpriced), just absorb the chaos. It\u2019s a Bangkok rite of passage.",
                  "7pm: Dinner at Sala Rattanakosin rooftop \u2014 Wat Arun view at sunset. Mains \u0E3F350\u2013600 (~$10\u201317). Reservation essential on weekends.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Chatuchak Market \u00B7 Jim Thompson House \u00B7 Chinatown Night Food"
                cost="\u0E3F1,200\u20132,200 (~$34\u201362)"
                items={[
                  "8am: BTS to Mo Chit \u2014 Chatuchak Weekend Market opens at 9am (weekends only). Go early before the heat becomes unbearable. Chatuchak has 15,000 stalls across 35 acres. Download the Chatuchak Guide app \u2014 Sections 2\u20134 for clothes, 7\u20139 for home decor, 17\u201319 for art and antiques.",
                  "Lunch inside the market: coconut ice cream \u0E3F30, pad kra pao (basil stir-fry) \u0E3F50, mango sticky rice \u0E3F40\u201360. Bring cash \u2014 most stalls do not accept cards. Budget 3\u20134 hours maximum before the heat and crowds peak.",
                  "Weekday alternative: If not a weekend, go to Or Tor Kor Market next to Chatuchak (open daily) \u2014 the best fresh food market in Bangkok. Or Taling Chan Floating Market (Sat\u2013Sun only) for a more local experience.",
                  "2pm: BTS to National Stadium \u2014 Jim Thompson House. Entry \u0E3F200 (~$5.50). Six traditional Thai teak houses containing Jim Thompson\u2019s art collection and the history of Thai silk. Guided tour only, runs every 20 minutes. Genuinely interesting even if you have no interest in silk.",
                  "4pm: Walk to Siam area \u2014 Siam Paragon, CentralWorld for air-conditioned wandering and good coffee at Roots Coffee Roasters.",
                  "6pm: MRT to Wat Mangkon for Chinatown (Yaowarat). The grilled seafood stalls fire up at 6pm. Hoy tod (crispy mussel omelette) \u0E3F80, guay jab (rolled noodle soup) \u0E3F60, mango sticky rice \u0E3F60. Budget \u0E3F200\u2013350 for a feast. This is peak Bangkok.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Wat Traimit \u00B7 Chinatown Morning \u00B7 Rooftop Sunset \u00B7 Night Market"
                cost="\u0E3F1,400\u20132,800 (~$39\u201379)"
                items={[
                  "9am: MRT to Wat Mangkon \u2014 walk through Chinatown\u2019s morning markets. Sampeng Lane for cheap everything, narrow alleys full of wholesale goods and dried goods stalls. Real Bangkok lives here.",
                  "10:30am: Wat Traimit (Golden Buddha Temple). Entry \u0E3F100 (~$2.80). Houses a 5.5-tonne solid gold Buddha statue accidentally discovered under a plaster exterior in 1955. The museum on the lower floors tells the extraordinary discovery story. Worth 45 minutes.",
                  "12pm: Lunch at Nai Ek Roll Noodles in Chinatown \u2014 ba mee (egg noodles with crab) from \u0E3F80. Or Thipsamai on Maha Chai Road for pad thai wrapped in egg (\u0E3F80\u2013130) \u2014 queue from 5pm but a midday visit is shorter.",
                  "2pm: Return to hotel for the afternoon heat break. This is not laziness \u2014 it\u2019s survival. Bangkok at 2pm is 35\u201340\u00B0C with humidity. Veterans know: 1\u20134pm is for air conditioning.",
                  "5:30pm: Rooftop bar sunset. Octave Rooftop Lounge at Bangkok Marriott Sukhumvit \u2014 cocktails \u0E3F350\u2013500 (~$10\u201314) with 360-degree city views. Smart casual dress. Budget option: Above Eleven with cocktails \u0E3F300\u2013400.",
                  "8pm: Asiatique the Riverfront \u2014 free shuttle boat from BTS Saphan Taksin. Night market, dinner, riverside atmosphere. Budget \u0E3F200\u2013400 for food. Or Talad Rot Fai (Train Night Market) near Ratchada MRT for vintage cars, craft beer, and better street food.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Ayutthaya Day Trip (or Shopping + Thai Massage)"
                cost="\u0E3F800\u20132,500 (~$23\u201370)"
                items={[
                  "OPTION A \u2014 Ayutthaya Day Trip (strongly recommended): Train from Hua Lamphong at 6:40am. Third class \u0E3F20, second class AC \u0E3F345 (~$10). Journey 1.5\u20132 hours. This is a UNESCO World Heritage Site \u2014 the former capital of the Siamese kingdom, destroyed by the Burmese in 1767.",
                  "Rent a bicycle at Ayutthaya station (\u0E3F50/day) or hire a tuk-tuk (\u0E3F200/hr). Must-see: Wat Mahathat (Buddha head entwined in tree roots \u2014 the iconic image), Wat Phra Si Sanphet (three stupas of Ayutthaya\u2019s royal palace), Wat Chaiwatthanaram (the most photogenic, best at golden hour). Entry \u0E3F50 each or \u0E3F220 day pass.",
                  "Lunch at Roti Sai Mai market \u2014 famous Ayutthaya cotton-candy-style dessert, \u0E3F20/bag. Pad thai at the market \u0E3F40. Return train at 3\u20134pm.",
                  "OPTION B \u2014 Shopping + Massage: MBK Center (bargain everything, haggle hard), Terminal 21 (themed floors, incredible food court at \u0E3F40\u201360/dish), then Siam Discovery for design. Afternoon: Health Land traditional Thai massage \u2014 \u0E3F600 for 2 hours. Book ahead. Best value quality massage in Bangkok.",
                  "6pm: Last dinner at Err Urban Rustic Thai near the Grand Palace \u2014 creative Thai street food done fine-dining style, mains \u0E3F200\u2013400 (~$5.50\u201311). Or final street food crawl on Sukhumvit \u2014 moo ping (grilled pork skewers) \u0E3F10 each.",
                  "Final stop: 7-Eleven run for Thai snacks to bring home \u2014 dried mango (\u0E3F35), instant tom yum packets (\u0E3F12), Lay\u2019s Nori Seaweed chips. The real souvenirs.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bangkok" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE & LANDMARK GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Temple &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees and hours as of early 2026. Dress code at all temples: cover shoulders and knees. The Grand Palace is the strictest \u2014 no shorts, sleeveless tops, or flip-flops.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Grand Palace",
                  e: "\u0E3F500 (~$14)",
                  d: "Thailand\u2019s most sacred complex, home to the Emerald Buddha (Wat Phra Kaew). Over 150 years of construction across 218,000 sq metres. The murals in the temple cloister depicting the Ramakien (Thai Ramayana) stretch for nearly 2km. Arrive at 8:30am opening \u2014 by 10am the tour buses make it overwhelming.",
                  t: "Must see \u00B7 2\u20133 hrs \u00B7 8:30am\u20133:30pm",
                },
                {
                  n: "Wat Pho (Reclining Buddha)",
                  e: "\u0E3F200 (~$5.50)",
                  d: "Home of the 46-metre gold-leaf Reclining Buddha and the original school of traditional Thai massage. The temple complex has over 1,000 Buddha images and 91 stupas. The massage pavilion (\u0E3F300/30min) is the birthplace of Thai massage \u2014 legitimately one of the best experiences in Bangkok.",
                  t: "Must see \u00B7 1.5\u20132 hrs \u00B7 8am\u20136:30pm",
                },
                {
                  n: "Wat Arun (Temple of Dawn)",
                  e: "\u0E3F100 (~$2.80)",
                  d: "Khmer-style prang (tower) on the west bank of the Chao Phraya, covered in thousands of ceramic tiles and porcelain fragments that shimmer in sunlight. Climb the steep central prang for river views. Best photographed from the east bank at sunset, but best visited in morning light.",
                  t: "Must see \u00B7 1\u20131.5 hrs \u00B7 8am\u20135:30pm",
                },
                {
                  n: "Wat Traimit (Golden Buddha)",
                  e: "\u0E3F100 (~$2.80)",
                  d: "Houses a 5.5-tonne solid gold Buddha statue worth an estimated $250 million. The statue was hidden under plaster for centuries and only discovered in 1955 when a crane dropped it during relocation. The museum explaining the discovery is worth visiting on its own.",
                  t: "1 hr \u00B7 8am\u20135pm",
                },
                {
                  n: "Chatuchak Weekend Market",
                  e: "Free",
                  d: "15,000 stalls on 35 acres \u2014 one of the largest markets in the world. Open Saturday\u2013Sunday 9am\u20136pm. Everything from vintage clothing and handmade crafts to antiques and street food. Weekday alternative: Or Tor Kor Market (fresh food, open daily) right next door.",
                  t: "Weekends only \u00B7 3\u20134 hrs",
                },
                {
                  n: "Chinatown (Yaowarat Road)",
                  e: "Free",
                  d: "Bangkok\u2019s oldest trading district, active for over 200 years. During the day: Sampeng Lane wholesale shopping, gold shops, traditional Chinese pharmacies. At night: transforms into the city\u2019s greatest street food corridor. Go at 6pm when the grilled-seafood smoke fills the air.",
                  t: "Evening best \u00B7 2\u20133 hrs",
                },
                {
                  n: "Ayutthaya Historical Park",
                  e: "\u0E3F50/site or \u0E3F220 day pass",
                  d: "Former Siamese capital 80km north of Bangkok, a UNESCO World Heritage Site. Destroyed by the Burmese in 1767 after 417 years as capital. The Buddha head entwined in tree roots at Wat Mahathat is the iconic image. Reachable by \u0E3F20\u2013345 train from Bangkok, 1.5\u20132 hours.",
                  t: "Full day trip \u00B7 UNESCO",
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
            title="Bangkok &mdash; Temples, Markets &amp; the River"
            subtitle="The city of gilded spires, 40-person food queues and the mighty Chao Phraya."
            spots={[
              {
                name: "Grand Palace",
                query: "bangkok grand palace ornate architecture golden roof thailand",
                desc: "Thailand\u2019s most sacred site \u2014 over 150 years of gilded architecture. Arrive at 8:30am to beat the tour buses.",
              },
              {
                name: "Wat Arun at Sunset",
                query: "wat arun bangkok temple sunset chao phraya river ceramic spires",
                desc: "The Temple of Dawn on the Chao Phraya \u2014 ceramic-tiled prang shimmering in the golden hour light.",
              },
              {
                name: "Chinatown Yaowarat",
                query: "bangkok chinatown yaowarat neon street food night stalls grilled seafood",
                desc: "Bangkok\u2019s oldest neighbourhood transforms at night into the city\u2019s best street food corridor.",
              },
              {
                name: "Chatuchak Market",
                query: "chatuchak weekend market bangkok stalls colorful overhead crowd",
                desc: "15,000 stalls on 35 acres \u2014 open weekends only. Go early, bring cash, download the map app.",
              },
              {
                name: "Ayutthaya Ruins",
                query: "ayutthaya ruins ancient temple buddha head tree roots thailand",
                desc: "Former Siamese capital 80km north. The Buddha head in tree roots at Wat Mahathat is unforgettable.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bangkok is one of the cheapest world cities for tourists. Street food costs less than cooking at home, the BTS is under $2 for any ride, and temple entry fees are minimal. The main variable is accommodation and how often you eat at restaurants versus street stalls.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u0E3F1,200\u20133,200", "\u0E3F4,800\u201310,000", "\u0E3F24,000\u201360,000"],
                    ["\uD83C\uDF5C Food & Drinks", "\u0E3F800\u20131,600", "\u0E3F3,200\u20136,000", "\u0E3F12,000\u201328,000"],
                    ["\uD83D\uDE89 Transport", "\u0E3F400\u2013800", "\u0E3F1,200\u20132,400", "\u0E3F4,000\u201310,000"],
                    ["\uD83C\uDFAF Activities & Entry", "\u0E3F800\u20131,400", "\u0E3F2,000\u20134,000", "\u0E3F15,000\u201335,000"],
                    ["\uD83D\uDED2 Shopping & Misc", "\u0E3F0\u20131,000", "\u0E3F2,000\u20135,000", "\u0E3F5,000\u201320,000"],
                    ["TOTAL (per person, 4 days)", "\u0E3F3,200\u20136,000 (~$90\u2013170)", "\u0E3F13,200\u201327,400 (~$370\u2013770)", "\u0E3F60,000+ (~$1,690+)"],
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
            <p className="text-xs text-muted font-light mb-5 italic">
              All prices Thai Baht (\u0E3F) 2026. USD conversions approximate at \u0E3F35.5 = $1. International flights not included.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDCB0"} Budget (\u0E3F800\u20131,500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Khao San Road hostels (\u0E3F300\u2013800/night), street food only (\u0E3F50\u2013150/meal), BTS + walking, free temples and markets. Completely doable and genuinely comfortable \u2014 Bangkok&apos;s street food is world-class at $2 a meal.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range (\u0E3F2,000\u20134,000/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-star hotel near BTS (\u0E3F1,200\u20132,500/night), mix of restaurants and street food, BTS + occasional Grab, rooftop bar, Thai massage. The sweet spot for most travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury (\u0E3F6,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star riverside hotel (\u0E3F6,000\u201315,000/night), Michelin dining (Gaggan, Le Du, Sorn), private tours, spa treatments. Bangkok luxury is still 50\u201370% cheaper than equivalent in London or Tokyo.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Bangkok</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important rule for Bangkok accommodation: stay near a BTS or MRT station. Bangkok traffic is so bad that a hotel 500 metres from a station can save you an hour a day in Grab rides. Every area below is within walking distance of a transit line.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Sukhumvit (BTS Nana to Ekkamai)",
                  type: "Best for first-timers \u00B7 All budgets",
                  price: "\u0E3F800\u201310,000/night",
                  badge: "Most convenient",
                  desc: "Bangkok\u2019s main tourist and expat strip. Every BTS station from Nana to Ekkamai has hotels, restaurants, rooftop bars, and easy connections to temples and markets. Soi 11 and Soi 24 are the most popular hotel streets. The BTS line running down Sukhumvit connects to virtually everything a tourist needs.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Khao San Road / Banglamphu",
                  type: "Budget \u00B7 Backpacker hub",
                  price: "\u0E3F300\u2013800/night",
                  badge: "Best budget",
                  desc: "Walking distance to Grand Palace, Wat Pho, and the river. Cheapest hostels and guesthouses in Bangkok. The parallel Soi Rambuttri is quieter with better food. No BTS access \u2014 you\u2019ll rely on boats and Grab for destinations outside Old Town. Perfect if temples are your priority and budget matters.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Silom / Sathorn (BTS Sala Daeng / Chong Nonsi)",
                  type: "Business district \u00B7 Mid to Luxury",
                  price: "\u0E3F1,500\u20138,000/night",
                  badge: "Best nightlife",
                  desc: "Bangkok\u2019s business and nightlife district. Excellent BTS connectivity, walking distance to Lumpini Park, good restaurants on every soi. Slightly fewer tourists than Sukhumvit. BTS Sala Daeng connects to MRT Silom for Chinatown access. Popular with couples and business travellers.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Riverside (near ICONSIAM / Asiatique)",
                  type: "Luxury \u00B7 Scenic",
                  price: "\u0E3F4,000\u201315,000/night",
                  badge: "Most scenic",
                  desc: "Home to Bangkok\u2019s grandest hotels: Mandarin Oriental, The Peninsula, Capella. Chao Phraya views, hotel boats to temples, ICONSIAM mall. Less convenient for BTS but the river boats compensate. If you want to feel like you\u2019re in a movie version of Bangkok, stay here.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Ari / Pradipat (BTS Ari)",
                  type: "Local hipster \u00B7 Mid-range",
                  price: "\u0E3F1,000\u20133,000/night",
                  badge: "Most local",
                  desc: "Bangkok\u2019s trendiest local neighbourhood \u2014 independent coffee shops, small Thai restaurants, vintage stores, and almost zero tourists. BTS Ari gives you Sukhumvit and Siam in 15 minutes. If you want to see how young Bangkokians actually live, stay here.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF5C"} Where to Eat in Bangkok</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bangkok street food is not a budget compromise \u2014 it is the point. The best food in the city is cooked in open-air kitchens on narrow sidewalks. Follow the queues. If 30 Thai people are waiting for a single cart, join them. Restaurants listed here range from \u0E3F50 street stalls to Michelin-starred kitchens.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Thipsamai (Pad Thai)",
                  t: "Legendary street restaurant \u00B7 Maha Chai Road",
                  d: "Bangkok\u2019s most famous pad thai since 1966. The signature dish: pad thai wrapped in a thin egg omelette (\u0E3F80\u2013130 / ~$2.25\u20133.65). The queue starts at 5pm and moves fast. Worth the wait \u2014 the wok hei (smoky char) on their pad thai is unlike anything else in the city. Closed Mondays.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Jay Fai (Michelin Street Food)",
                  t: "1 Michelin star \u00B7 Maha Chai Road",
                  d: "A 70-year-old woman cooking over charcoal in goggles. Jay Fai is the most expensive street food in Bangkok and worth every Baht. The crab omelette (\u0E3F1,000 / ~$28) is the dish \u2014 thick with fresh crab meat, perfectly fried. Drunken noodles with seafood (\u0E3F600). Queue from 2pm for a 5pm opening. Cash only.",
                  b: "Bucket list",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Chinatown (Yaowarat) Night Food",
                  t: "Street food corridor \u00B7 Open from 6pm",
                  d: "Not a single restaurant but an entire district. Walk Yaowarat Road from 6pm onwards and eat from cart to cart. Grilled river prawns (\u0E3F200\u2013300 for a plate), hoy tod (crispy mussel omelette, \u0E3F80), roasted duck rice (\u0E3F60), mango sticky rice (\u0E3F60). Budget \u0E3F250\u2013400 for a complete feast from multiple stalls.",
                  b: "Best street food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Err Urban Rustic Thai",
                  t: "Modern Thai \u00B7 Near Grand Palace",
                  d: "Creative Thai street food elevated to restaurant quality without losing soul. Dishes you\u2019d find in a night market but executed perfectly: pork satay, crab fried rice, crispy pork belly. Mains \u0E3F200\u2013400 (~$5.50\u201311). Casual atmosphere, wooden house setting. Excellent for a final Bangkok dinner.",
                  b: "Best restaurant",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Terminal 21 Food Court",
                  t: "Mall food court \u00B7 BTS Asok",
                  d: "Not glamorous but honestly excellent and absurdly cheap. Thai dishes \u0E3F40\u201360 (~$1.10\u20131.70) \u2014 pad kra pao, som tam, khao man gai, tom yum. Buy a food court card at the entrance, load credit, eat from any stall. Air-conditioned, clean, and the food rivals many sit-down restaurants.",
                  b: "Best value",
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
            destination="Bangkok"
            hotels={[
              {
                name: "NapPark Hostel",
                type: "Budget Hostel \u00B7 Khao San area",
                price: "From \u0E3F350/night (~$10)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/th/nappark-hostel.html?aid=2820480",
              },
              {
                name: "Riva Surya Bangkok",
                type: "Boutique Riverside \u00B7 Old Town",
                price: "From \u0E3F2,800/night (~$79)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/th/riva-surya-bangkok.html?aid=2820480",
              },
              {
                name: "Mandarin Oriental Bangkok",
                type: "Iconic Luxury \u00B7 Riverside",
                price: "From \u0E3F12,000/night (~$340)",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/hotel/th/mandarin-oriental-bangkok.html?aid=2820480",
              },
              {
                name: "The Peninsula Bangkok",
                type: "5-Star Luxury \u00B7 Riverside",
                price: "From \u0E3F8,000/night (~$225)",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/th/the-peninsula-bangkok.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Grand Palace & Temple Tour",
                duration: "Half day",
                price: "From \u0E3F800/person (~$23)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=bangkok+grand+palace+tour&partner_id=PSZA5UI",
              },
              {
                name: "Floating Market & Railway Market",
                duration: "Full day",
                price: "From \u0E3F1,500/person (~$42)",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=bangkok+floating+market&partner_id=PSZA5UI",
              },
              {
                name: "Ayutthaya Ancient Ruins Day Trip",
                duration: "Full day",
                price: "From \u0E3F1,200/person (~$34)",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=bangkok+ayutthaya&partner_id=PSZA5UI",
              },
              {
                name: "Bangkok Street Food Tour by Night",
                duration: "4 hours",
                price: "From \u0E3F1,800/person (~$50)",
                url: "https://www.getyourguide.com/s/?q=bangkok+street+food+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83D\uDEBA",
                  title: "Taking a tuk-tuk to a \u2018special price\u2019 gem shop",
                  desc: "The #1 Bangkok scam for decades. Tuk-tuk driver offers a \u0E3F20 ride but stops at a gem shop \u2018on the way.\u2019 The gems are worthless glass. Tuk-tuk drivers who approach you near temples are almost always running this scam. Use BTS, MRT, or Grab instead.",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Visiting Grand Palace after 10am",
                  desc: "Tour buses arrive at 10am and the complex becomes a shoulder-to-shoulder shuffle. Gate opens at 8:30am \u2014 be there at 8:15. You\u2019ll have the place nearly to yourself for 90 minutes. By noon it\u2019s genuinely unpleasant.",
                },
                {
                  icon: "\uD83C\uDF5C",
                  title: "Only eating on Khao San Road",
                  desc: "Khao San food is overpriced and mediocre \u2014 it caters to tourists who do not know better. Walk 2 blocks in any direction for real Thai food at half the price. Soi Rambuttri (the parallel street) is already significantly better. Chinatown and Thipsamai are where Bangkok actually eats.",
                },
                {
                  icon: "\uD83D\uDC54",
                  title: "Ignoring the temple dress code",
                  desc: "Grand Palace and Wat Pho enforce dress codes strictly \u2014 no shorts, sleeveless tops, or flip-flops. They rent cover-ups at the entrance but the queue wastes 20\u201330 minutes. Carry a light sarong in your bag and save yourself the hassle.",
                },
                {
                  icon: "\uD83D\uDE95",
                  title: "Taking taxis without the meter",
                  desc: "Always say \u2018meter, krap/ka\u2019 when getting in. If the driver refuses, get out and take the next one. A metered ride from Suvarnabhumi to Sukhumvit is \u0E3F300\u2013400. Without meter they\u2019ll quote \u0E3F800+. Better yet, just use Grab for fixed pricing.",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Skipping Ayutthaya",
                  desc: "80km from Bangkok, reachable by \u0E3F20 train. A UNESCO World Heritage Site of ancient Siamese ruins with the most photographed Buddha head in Asia. Budget one full day \u2014 it is the single best day trip from Bangkok and costs almost nothing to reach.",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Bangkok</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83D\uDE87",
                  title: "BTS/MRT is everything",
                  desc: "Buy a Rabbit Card at any BTS station (\u0E3F200 including deposit). Covers BTS Skytrain, some river boats, and 7-Eleven payments. Bangkok traffic is brutal \u2014 BTS beats Grab 9 times out of 10. Single rides \u0E3F16\u201359.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Get Grab immediately",
                  desc: "Southeast Asia\u2019s Uber. Fixed prices, no scams, AC, GPS-tracked. Use for anything the BTS doesn\u2019t cover. Also delivers food via GrabFood \u2014 useful when the heat defeats you at 2pm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDF5C",
                  title: "Follow the queue",
                  desc: "If there\u2019s a 30-person queue at a street stall, join it. Thais know food. The best pad thai, khao man gai, and som tam are always at stalls with long lines and tiny plastic seats. An empty stall is empty for a reason.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDFE6",
                  title: "ATM fee hack",
                  desc: "Thai ATMs charge \u0E3F220 per withdrawal regardless of amount. Withdraw \u0E3F10,000+ each time to minimize fees. Better: bring a Wise or Revolut card for zero-fee transactions at any Thai ATM.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\u2614",
                  title: "Embrace the afternoon break",
                  desc: "1\u20134pm is dangerously hot (35\u201340\u00B0C). Plan temples and markets for mornings, air-conditioned malls or spa for afternoons, street food for evenings. This is how Thais structure their own day.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\uD83D\uDE4F",
                  title: "Temple etiquette matters",
                  desc: "Remove shoes before entering any temple building. Never point feet at Buddha images. Never touch monks (especially women). Small acts of respect go a very long way in Thailand \u2014 the wai (hands pressed together, slight bow) is always appreciated.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bangkok" />

          {/* Combine With */}
          <CombineWith currentSlug="bangkok-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days are enough for Bangkok?",
                  a: "4 days is ideal to cover the main temples (Grand Palace, Wat Pho, Wat Arun), Chatuchak Market, Chinatown street food, a rooftop bar sunset, and an Ayutthaya day trip. 2\u20133 days works if you skip Ayutthaya. 5\u20136 days lets you add Kanchanaburi (River Kwai), floating markets, or simply slow down and eat more street food.",
                },
                {
                  q: "What is the best time to visit Bangkok?",
                  a: "November\u2013February is the cool dry season (25\u201332\u00B0C) and the most comfortable for sightseeing. March\u2013May is extremely hot (35\u201340\u00B0C) but includes Songkran (Thai New Year water festival) in April. June\u2013October is monsoon season with afternoon downpours but lower prices and fewer crowds \u2014 mornings are often clear enough for temples.",
                },
                {
                  q: "Do Indian passport holders need a visa for Thailand?",
                  a: "Yes. Options: eVisa (apply online at thaievisa.go.th, 5\u20137 days processing, 60-day stay), Visa on Arrival (15-day stay, \u0E3F2,000 fee, carry \u0E3F10,000 cash as proof of funds \u2014 queues can be 45\u201390 minutes at BKK), or Tourist Visa from the Thai embassy (60 days, extendable 30 more at immigration for \u0E3F1,900).",
                },
                {
                  q: "How much does a 4-day Bangkok trip cost?",
                  a: "Budget: \u0E3F3,200\u20136,000 ($90\u2013170) total including accommodation, street food, BTS transport, and entry fees. Mid-range: \u0E3F13,200\u201327,400 ($370\u2013770) including 3-star hotel, restaurants, and activities. Luxury: \u0E3F60,000+ ($1,690+) including 5-star riverside hotel, Michelin dining, and private tours. International flights not included.",
                },
                {
                  q: "Is Bangkok safe for solo travellers?",
                  a: "Very safe. Violent crime against tourists is rare. Main risks are scams: tuk-tuk gem shops, inflated taxi meters, jet ski damage claims (more relevant in Phuket). Use BTS/MRT and Grab for safe, scam-proof transport. Khao San area can be chaotic late at night but not dangerous. Standard precautions apply.",
                },
                {
                  q: "What is the best area to stay in Bangkok?",
                  a: "First-timers: Sukhumvit (BTS Nana to Ekkamai) for the best BTS connectivity, restaurants, and hotels at all price points. Temple-focused trips: Khao San Road/Banglamphu for walking distance to Grand Palace and Wat Pho. Luxury: Riverside near ICONSIAM for Chao Phraya views and grand hotels. Budget: Khao San Road. Always stay near a BTS or MRT station \u2014 Bangkok traffic is genuinely terrible.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bangkok trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bangkok", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/bangkok-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-bangkok", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/bangkok-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="bangkok-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Phuket in 5 Days &mdash; Beaches &amp; Islands", href: "/blog/phuket-5-days" },
                { label: "Chiang Mai 4 Days &mdash; Temples &amp; Mountains", href: "/blog/chiang-mai-4-days" },
                { label: "Bali in 5 Days &mdash; Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
                { label: "Vietnam 7 Days &mdash; North to South", href: "/blog/vietnam-7-days" },
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
