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
const DANANG_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Da Nang Actually Is" },
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
          href: `mailto:?subject=Da Nang 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Da Nang in 4 Days — Golden Bridge, Marble Mountains, Hoi An day trip&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/da-nang-4-days"
        imageUrl="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80"
        description="Da Nang in 4 Days: Golden Bridge at Ba Na Hills, Marble Mountains, My Khe Beach, Dragon Bridge fire show, and a Hoi An day trip — complete 2026 travel guide."
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
export default function DaNangClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DANANG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Da Nang" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="da nang golden bridge ba na hills vietnam stone hands"
            fallback="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80"
            alt="Golden Bridge held by giant stone hands at Ba Na Hills, Da Nang, Vietnam"
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
              <span className="text-white/70">Da Nang 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Vietnam Travel Guide
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Da Nang in 4 Days:
                <em className="italic text-amber-300"> Golden Bridge, Marble Mountains &amp; Hoi An</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Dragon Bridge fire shows, Ba Na Hills Golden Bridge above the clouds, 30km of white sand at My Khe, and a 45-minute drive to Hoi An&apos;s lantern-lit ancient town. The complete 4-day guide from $35/day.
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
              <span>🇻🇳 Da Nang, Vietnam</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Da Nang is Vietnam&apos;s most underrated city — a Dragon Bridge that breathes fire on Saturday nights, marble mountains rising straight from the coast, a Golden Bridge held aloft by giant stone hands above 1,487 metres of cloud, and a 45-minute coastal road to Hoi An&apos;s lantern-lit ancient town. Four days barely scratches the surface.
            </p>
          </blockquote>

          {/* ── WHAT DA NANG ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Da Nang Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Da Nang sits in the middle of Vietnam&apos;s central coast — perfectly positioned between Hanoi (800km north) and Ho Chi Minh City (960km south). It has its own international airport (DAD), direct flights from India, and none of the chaos that makes Hanoi and HCMC exhausting for first-time visitors. The city itself is clean, walkable, and genuinely easy.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The geography is the reason to come. The Marble Mountains — five limestone and marble hills named after the five elements — rise directly from the coast 9km south of the city, riddled with Buddhist caves and cliff pagodas. Forty-five minutes up a winding mountain road, Ba Na Hills reaches 1,487m — cool in any season, wrapped in mist most mornings, and home to the Golden Bridge: a 150m pedestrian walkway held by two enormous mossy stone hands that has become one of Asia&apos;s most photographed structures.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Then there is the coastline. My Khe Beach stretches 30km of uninterrupted white sand from the city centre south to the Marble Mountains. Forbes once ranked it among the world&apos;s most beautiful beaches. Forty-five minutes further south on the coastal road is Hoi An — the best-preserved ancient trading port in Southeast Asia, with its famous yellow walls and silk lanterns glowing at night. Da Nang gives you all of it from one base.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DAD" />
              <StatCard icon="🌡️" label="Best Season" value="Feb–May" />
              <StatCard icon="🌉" label="Dragon Bridge" value="Sat &amp; Sun" />
              <StatCard icon="💰" label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Da Nang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Feb–May",
                  i: "☀️",
                  t: "Dry Season — Best Window",
                  d: "25–32°C, low humidity, minimal rain. February and March are the sweet spot: warm enough for the beach, cool enough at Ba Na Hills (15–20°C at the summit). April and May are hotter but still mostly dry. Ba Na Hills weather is clearest in early morning.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌅",
                  t: "Hot &amp; Dry — Good but Hot",
                  d: "32–38°C on the coast. The beach is at its best: calm sea, maximum sunshine. Ba Na Hills is a refreshing escape from the coastal heat. Hoi An floods occasionally in late August. Manageable with early starts and beach afternoons.",
                  b: "Beach season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sept–Dec",
                  i: "🌧️",
                  t: "Rainy &amp; Typhoon Season",
                  d: "Da Nang&apos;s heaviest rainfall hits October and November — monthly totals can reach 500–900mm. Typhoons occasionally make landfall on the central coast in September–November. Hoi An Ancient Town floods severely in November. Check weather carefully if travelling in this window.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "Jan",
                  i: "🌤️",
                  t: "Cool &amp; Transitional",
                  d: "January sits at the tail end of the rainy season. Rain is tapering off but can still be grey and drizzly. Ba Na Hills is cold (10–15°C) and often misty all day. By late January conditions improve significantly. Fewer tourists, lower prices.",
                  b: "Off-season value",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Da Nang</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Da Nang International Airport (DAD) is just <strong className="font-medium">2km from the city centre</strong> — the most convenient airport-to-city distance in Vietnam. A Grab (Vietnamese ride-share) to My Khe Beach costs $3–5. No need for airport buses or expensive transfers.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from India (recommended)",
                  d: "IndiGo and VietJet operate direct or one-stop flights from Delhi, Mumbai, and Bangalore to Da Nang (DAD). Flying time is 5–6 hours with one stop in Hanoi or Ho Chi Minh City. Fares from ₹12,000–₹25,000 return. Always check Vietnamese e-visa requirements — processing takes 3 business days.",
                  b: "Best entry point",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Domestic flight from Hanoi or HCMC",
                  d: "VietJet, Bamboo Airways, and Vietnam Airlines connect Hanoi (HAN) and Ho Chi Minh City (SGN) to Da Nang (DAD) in 1 hour 15 minutes. Fares from $15–40 one way. The quickest way to add Da Nang to a longer Vietnam itinerary.",
                  b: "Quick connection",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Sleeper bus from Hoi An or Hue",
                  d: "Hue to Da Nang: 3 hours by Phuong Trang or Sinh Tourist bus ($4–8). The bus crosses the Hai Van Pass with extraordinary views over the South China Sea — consider riding this section by motorbike if you rent one in Hue. Hoi An to Da Nang: 45 minutes ($2–4 shared van).",
                  b: "Scenic overland",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "📱",
                  t: "Getting around Da Nang — Grab",
                  d: "Grab is the default transport app in Da Nang and works reliably from the airport and across the city. GrabBike (motorbike taxi) costs $0.50–1.50 within the city. GrabCar costs $2–5. Metered taxis also run reliably — always confirm the meter is on before departure.",
                  b: "For city transport",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Da Nang Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to match Dragon Bridge fire show timing (Saturday/Sunday night), fit Ba Na Hills on a clear-weather weekday, and leave two days for the coast and day trips to Hoi An and My Son. Costs shown in both VND and USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="My Khe Beach Sunrise · Marble Mountains · Han Market · Dragon Bridge"
                cost="450,000–700,000 VND ($18–28)"
                items={[
                  "06:00 — My Khe Beach sunrise: the beach faces east and the sunrise over the South China Sea is extraordinary in the dry season. Walk north along the waterline for 20 minutes — you will almost certainly have the beach to yourself at this hour. The light on the water is the best photography of the trip.",
                  "08:00 — Rent a motorbike in Da Nang city centre (125,000–175,000 VND / $5–7 per day): the most efficient and liberating way to explore Da Nang and the surrounding coast. Traffic is manageable compared to Hanoi or HCMC and roads are well signposted.",
                  "09:00 — Marble Mountains (Ngu Hanh Son), 9km south of the city (entry 40,000 VND / $1.60): five limestone and marble hills named after the five elements — Metal, Wood, Water, Fire, and Earth. Climb Thuy Son (Water Mountain) via stone stairs for panoramic views over My Khe Beach, Non Nuoc Beach, and the South China Sea. The Buddhist cave pagodas and Huyen Khong grotto are extraordinary — bring a torch for the inner chambers.",
                  "11:30 — Sunbed and swim at My Khe Beach (sunbed rental 20,000 VND / $0.80): the calm south-facing sections north of the Furama Resort have the best conditions. Buy grilled corn from a beach vendor (10,000 VND) and fresh coconut (20,000 VND).",
                  "13:00 — Seafood lunch at a shack along the My Khe strip: grilled snapper, morning-glory stir-fry, and Vietnamese iced coffee for 125,000–175,000 VND ($5–7 per person). The restaurant strip north of the Furama has the best value in the city.",
                  "15:30 — Da Nang city: Han Market for fresh fruit and Vietnamese street snacks (banh mi 20,000 VND / $0.80), then walk the Han River bank and inspect the Dragon Bridge in daylight before the evening show.",
                  "21:00 — Dragon Bridge fire and water show (Saturday and Sunday nights only, free): the 666m bridge breathes fire and sprays water at 9pm from the dragon&apos;s mouth. Arrive 30–45 minutes early to claim a front-row spot along the pedestrian walkway above the river. This show is the defining Da Nang experience.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ba Na Hills Golden Bridge · French Village · Dragon Bridge (if Day 1 was weekday)"
                cost="900,000–1,300,000 VND ($36–52)"
                items={[
                  "07:00 — Check Ba Na Hills weather forecast before leaving (use the official Ba Na Hills website or local weather apps): the summit at 1,487m is frequently enveloped in cloud. Clear mornings are the goal — do not book Ba Na Hills on a day when the summit forecast shows heavy cloud all day.",
                  "07:30 — Depart Da Nang for Ba Na Hills base station by motorbike or shared van ($3 / 75,000 VND from city centre, 25km west of the city). Private Grab car costs $20–25 round trip.",
                  "09:00 — Ba Na Hills cable car (included in the 850,000 VND / $34 all-inclusive combo ticket): the world&apos;s longest non-stop cable car (5.8km) rises 1,487m through cloud forest. Temperature at the summit drops 10°C below the coast — pack a light layer.",
                  "10:00 — Golden Bridge: arrive at the bridge before tour groups from Hoi An and the city reach the summit at 10:30–11:00am. The 150m walkway held by two enormous mossy stone hands gives extraordinary views across the forested valley when the mist rolls in below the bridge level. Allow 60–90 minutes for photography.",
                  "11:30 — Ba Na Hills French Village: the mock-alpine resort town at the summit is unexpectedly charming. The Debay Wine Cellar (underground tunnel), the Flower Garden with 1,000+ alpine species, and the Fantasy Park amusement complex (all included in the combo ticket) can easily absorb 3–4 hours.",
                  "13:00 — Lunch at the Ba Na Hills summit food court: a bowl of Vietnamese pho for 120,000 VND ($4.80) or the buffet restaurant included in higher-tier combo passes.",
                  "16:00 — Cable car descent and return to Da Nang. Dinner at a local pho shop near the city centre (pho bo with garnishes: 50,000–65,000 VND / $2–2.60). Linh Ung Pagoda on Son Tra Peninsula makes a worthwhile detour on the return drive — the 67m white Lady Buddha statue overlooking Da Nang Bay is free and open until late afternoon.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hoi An Ancient Town Day Trip · Lantern Float on the Thu Bon River"
                cost="500,000–800,000 VND ($20–32)"
                items={[
                  "07:00 — Depart Da Nang for Hoi An by motorbike (30km, 45 minutes via the coastal road through Marble Mountains and Non Nuoc Beach) or shared minivan (75,000 VND / $3 per person). The coastal road is one of Vietnam&apos;s most scenic drives — stop at the Marble Mountains viewpoint for a photograph of My Khe Beach stretching north.",
                  "08:00 — Hoi An Ancient Town: buy a 5-ticket combo (120,000 VND / $4.80) for access to five of the 22 heritage buildings including the Japanese Covered Bridge (dating to 1593), one Chinese Assembly Hall, and three historic merchant houses.",
                  "09:00 — Phuc Kien Assembly Hall (Fujian Chinese Assembly Hall): the most elaborate of the assembly halls — incense smoke, red lanterns, and the shrine to Thien Hau the sea goddess who protected Hoi An&apos;s maritime merchants. Then Tan Ky Ancient House (dating to 1741): eight generations of the same Vietnamese-Chinese family have lived here. The owner&apos;s family often offer tea and explanation.",
                  "11:00 — Japanese Covered Bridge: the 16th-century bridge built by the Japanese merchant community connects the Japanese and Chinese trading quarters. The interior shrine is small and darkly atmospheric. This is the most-photographed structure in Hoi An.",
                  "12:30 — Lunch: cao lau noodles at a restaurant on Tran Phu street (60,000–80,000 VND / $2.40–3.20). Cao lau can only be made authentically in Hoi An — the alkaline water from the Cham Island wells is essential to the recipe texture.",
                  "14:30 — Cycling through rice fields to Tra Que Vegetable Village (bike rental $2 / 50,000 VND from near the old town): the organic herb gardens are photogenic and the 2-hour detour bypasses the most tourist-congested streets of Hoi An.",
                  "17:30 — Return to old town: streets go traffic-free from 7pm. Buy a floating lotus lantern (15,000 VND / $0.60) and release it on the Thu Bon River as the entire riverside glows with handmade silk lanterns.",
                  "20:00 — Return to Da Nang by motorbike or minivan.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="My Son Cham Ruins · Hai Van Pass Motorbike · Final My Khe"
                cost="400,000–650,000 VND ($16–26)"
                items={[
                  "07:00 — Morning choice: My Son Sanctuary day trip (70km southwest of Da Nang, 90 minutes by motorbike or join a group tour at 300,000–375,000 VND / $12–15 including transport and guide). My Son is a UNESCO World Heritage Site — 4th to 14th century Hindu Cham temple complex, the largest in Southeast Asia after Angkor. Entry: 150,000 VND ($6).",
                  "09:30 — My Son site exploration: Groups B and C have the finest surviving bas-relief carvings. The Ba Co group has the best-preserved sculpture work. Hire a local guide at the gate (125,000 VND / $5) for context on the Cham Kingdom — the maritime Hindu civilisation that dominated central Vietnam before Vietnamese expansion south.",
                  "12:30 — Lunch near My Son village: bun bo Hue (spicy beef noodle soup) for 50,000–60,000 VND ($2–2.40), then head back toward Da Nang.",
                  "Alternative Day 4 — Hai Van Pass by motorbike (highly recommended if you have a motorbike licence): the 21km mountain pass north of Da Nang rises 500m above the South China Sea with panoramic views in every direction. The road surface is excellent. Stop at the old French-American bunker at the summit for the view — this is the road that the Top Gear team famously called one of the best in the world.",
                  "15:00 — Final afternoon at My Khe Beach or shopping at Con Market in Da Nang city centre (lacquerware, silk, and Hoi An lanterns at local prices: 50,000–200,000 VND / $2–8).",
                  "Departure: Da Nang Airport (DAD) is 2km from the city centre — 10 minutes by Grab ($2–4). Grab is reliable at all hours.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Da Nang" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Da Nang Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. Entry fees and visit times as of 2026. The Golden Bridge at Ba Na Hills is the unmissable anchor of any Da Nang trip — build your 4 days around a clear-weather window for it.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Golden Bridge, Ba Na Hills",
                  e: "VND 700,000 (~$28) all-inclusive ticket",
                  d: "The 150m pedestrian bridge held by two giant moss-covered stone hands at 1,487m elevation. The most photographed structure in Vietnam after Hoi An. Morning visits (before 10am) on clear-sky weekdays are transformative — mist below the bridge, empty walkway, cool mountain air. By 11am on weekends it resembles a theme park queue.",
                  t: "Must see · 90 mins at bridge · Half-day for full Ba Na Hills",
                },
                {
                  n: "Marble Mountains (Ngu Hanh Son)",
                  e: "40,000 VND ($1.60) — Thuy Son",
                  d: "Five limestone and marble hills 9km south of the city. Thuy Son (Water Mountain) has the best Buddhist cave pagodas including Huyen Khong grotto where shafts of light fall through ceiling openings to illuminate altars below. The hilltop has panoramic views over My Khe Beach and the coast. Arrive before 9am before tour buses from Hoi An arrive.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Dragon Bridge",
                  e: "Free",
                  d: "The 666m Dragon Bridge over the Han River is the symbol of modern Da Nang. The fire and water show runs Saturday and Sunday nights at 9pm sharp. Arrive 30 minutes early for a front-row spot on the pedestrian walkway. The show lasts 15 minutes. On weeknights the bridge is still illuminated and worth seeing — just no fire.",
                  t: "Fire show Sat/Sun 9pm · Free",
                },
                {
                  n: "My Khe Beach",
                  e: "Free",
                  d: "30km of uninterrupted white sand consistently ranked among Asia&apos;s finest. The stretch in front of the city (2km from the centre) has the best facilities — sunbed rental 20,000 VND, beach restaurants, and calm surf for swimming. The section near the Marble Mountains (Non Nuoc Beach) is quieter and flanked by luxury resorts.",
                  t: "Beach · Sunrise recommended",
                },
                {
                  n: "Linh Ung Pagoda, Son Tra Peninsula",
                  e: "Free",
                  d: "The 67m white Lady Buddha statue on Son Tra Peninsula (10km north of Da Nang) is one of the largest in Vietnam. The pagoda overlooks Da Nang Bay and the South China Sea. The drive up the Son Tra mountain road passes through forest with red-shanked douc langur monkeys visible at dawn and dusk. Best visited on the way back from Ba Na Hills.",
                  t: "Half hour · Free · Combine with Ba Na Hills day",
                },
                {
                  n: "My Son Sanctuary",
                  e: "150,000 VND ($6)",
                  d: "The UNESCO World Heritage Cham Hindu temple complex 70km southwest of Da Nang. 4th to 14th century towers in a jungle valley. The best-preserved bas-relief carvings in Southeast Asia outside Angkor. Groups B and C are the finest. Allow 2.5 hours on site. A licensed guide adds enormous context.",
                  t: "Day 4 option · UNESCO · Half day",
                },
                {
                  n: "Hoi An Ancient Town",
                  e: "120,000 VND ($4.80) — 5 heritage buildings",
                  d: "The best-preserved ancient trading port in Southeast Asia — yellow-walled merchant houses, Chinese assembly halls, the Japanese Covered Bridge (1593), and silk lanterns lining every street at night. Only 30km south of Da Nang: 45 minutes by motorbike or shared van. Streets go traffic-free from 7pm. Do not skip the evening.",
                  t: "Full day trip from Da Nang · UNESCO",
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
            title="Da Nang — Golden Bridge, Marble Mountains &amp; My Khe"
            subtitle="Vietnam&apos;s most underrated city across five iconic landscapes."
            spots={[
              {
                name: "Golden Bridge Ba Na Hills",
                query: "golden bridge ba na hills giant stone hands vietnam da nang",
                desc: "The 150m pedestrian bridge held by two giant mossy stone hands at 1,487m — one of Asia&apos;s most photographed structures.",
              },
              {
                name: "Marble Mountains Da Nang",
                query: "marble mountains ngu hanh son limestone caves da nang vietnam coast",
                desc: "Five limestone and marble hills rising from the coast 9km south of Da Nang, riddled with Buddhist cave pagodas.",
              },
              {
                name: "Dragon Bridge Da Nang",
                query: "dragon bridge da nang vietnam fire show han river night",
                desc: "The 666m Dragon Bridge over the Han River breathes fire on Saturday and Sunday nights at 9pm.",
              },
              {
                name: "My Khe Beach",
                query: "my khe beach da nang vietnam white sand sunrise south china sea",
                desc: "30km of uninterrupted white sand stretching from Da Nang city to the Marble Mountains — one of Asia&apos;s finest beaches.",
              },
              {
                name: "Hoi An Ancient Town",
                query: "hoi an ancient town yellow walls silk lanterns night vietnam",
                desc: "The UNESCO-listed ancient trading port 30km south of Da Nang, with its famous yellow walls and glowing silk lanterns.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Da Nang is significantly more affordable than Bangkok or Bali at the same quality level. The main splurge is Ba Na Hills (850,000–1,200,000 VND per person) — everything else is inexpensive by Southeast Asian standards. Exchange rate: approximately 25,000 VND per USD.
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
                    ["🏨 Accommodation (per night)", "200,000–375,000 VND ($8–15)", "1,000,000–2,000,000 VND ($40–80)", "8,750,000–17,500,000 VND ($350–700)"],
                    ["🍽️ Food (per day)", "200,000–300,000 VND ($8–12)", "500,000–875,000 VND ($20–35)", "1,500,000–3,000,000 VND ($60–120)"],
                    ["🛵 Transport (per day)", "125,000–250,000 VND ($5–10)", "375,000–625,000 VND ($15–25)", "1,250,000–2,500,000 VND ($50–100)"],
                    ["🎫 Ba Na Hills (per person)", "850,000 VND ($34) combo", "1,200,000 VND ($48) premium", "VIP private cabin + guide"],
                    ["🏛️ Other activities", "250,000–500,000 VND ($10–20)", "625,000–1,125,000 VND ($25–45)", "2,500,000–5,000,000 VND ($100–200)"],
                    ["TOTAL per day (per person)", "875,000–1,250,000 VND ($35–50)", "2,000,000–3,250,000 VND ($80–130)", "5,000,000–10,000,000 VND ($200–400)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($35–50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a guesthouse near My Khe Beach (200,000–375,000 VND / $8–15 per night), eat at street food stalls and local pho shops, rent a motorbike ($5–7/day), and use the standard Ba Na Hills combo ticket. This is very comfortable in Da Nang — budget infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($80–130/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at a 3-star beachfront hotel (1,000,000–2,000,000 VND / $40–80), dine at sit-down Vietnamese restaurants, take the premium Ba Na Hills ticket, and hire a private car for one or two of the day trips. The sweet spot for comfort in Da Nang.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Da Nang</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best area to stay is My Khe Beach — you&apos;re on the sand, a 15-minute Grab from the Han River and Dragon Bridge, and well-placed for Marble Mountains and the road south to Hoi An. Airport to beach is VND 100,000 (~$4) by Grab, 10 minutes.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hyatt Regency Da Nang Resort & Spa",
                  type: "Luxury beachfront · My Khe Beach",
                  price: "From $150/night",
                  badge: "Best overall",
                  desc: "The benchmark luxury property on My Khe Beach — private beach access, four pools, multiple restaurants, and rooms from 55sqm opening onto the sand. The breakfast buffet is exceptional. Book through Booking.com for the best rate.",
                  color: "border-amber-200 bg-amber-50",
                  url: "https://www.booking.com/hotel/vn/hyatt-regency-da-nang-resort-and-spa.html?aid=2820480",
                },
                {
                  name: "Fusion Maia Resort Da Nang",
                  type: "Ultra-luxury all-spa-inclusive · My Khe Beach",
                  price: "From $200/night",
                  badge: "Most unique",
                  desc: "The only resort in Vietnam where spa treatments are fully included in the room rate — unlimited spa sessions per day in private spa pavilions. Pool villas with direct beach access. Treatments that cost $80–$120 elsewhere are unlimited here.",
                  color: "border-purple-200 bg-purple-50",
                  url: "https://www.booking.com/hotel/vn/fusion-maia-resort-da-nang.html?aid=2820480",
                },
                {
                  name: "Golden Sea Hotel",
                  type: "Mid-range · My Khe Beach area",
                  price: "From $45/night",
                  badge: "Best value",
                  desc: "The best mid-range option near My Khe Beach. Rooftop pool, sea-view rooms, good breakfast included, helpful staff for booking tours. Five-minute walk to the beach. Excellent value at the price point.",
                  color: "border-teal-200 bg-teal-50",
                  url: "https://www.booking.com/hotel/vn/golden-sea-da-nang.html?aid=2820480",
                },
                {
                  name: "Budget Guesthouses (Pham Van Dong area)",
                  type: "Budget · 200m from My Khe Beach",
                  price: "VND 250,000–500,000/night (~$10–$20)",
                  badge: "Most affordable",
                  desc: "Pham Van Dong Street runs parallel to My Khe Beach one block inland. Small guesthouses and mini-hotels offer clean rooms with AC and hot water for well under $20/night. Walk to the beach in under 3 minutes.",
                  color: "border-parchment-2 bg-white",
                  url: "https://www.booking.com/searchresults.html?dest_id=-3715820&dest_type=city&aid=2820480",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-2">{stay.desc}</p>
                  <a
                    href={stay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal font-medium hover:underline"
                  >
                    Check availability →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Da Nang</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Da Nang has its own distinct culinary identity — Mi Quang noodles (turmeric broth, pork, shrimp, peanuts, rice crackers), banh xeo sizzling pancakes, and the freshest seafood in Vietnam. The local spots listed below are far superior to anything in a tourist-facing restaurant.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mi Quang Bà Mua",
                  t: "Local noodle institution · Hoang Dieu Street",
                  d: "The most famous Mi Quang spot in Da Nang. Mi Quang is the city&apos;s signature dish — wide flat rice noodles in a small amount of turmeric-yellow broth, topped with pork, shrimp, quail eggs, fresh herbs, roasted peanuts, and a large rice cracker that you break and mix in. VND 35,000–55,000 a bowl. Go before 9am or after the lunch rush.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Madame Lan",
                  t: "Central Vietnamese cuisine · 43 Tran Phu Street",
                  d: "The best sit-down restaurant in Da Nang for exploring central Vietnamese cuisine. The menu covers bun bo Hue (Hue-style beef and lemongrass noodle soup), banh beo (Hue steamed rice cakes with dried shrimp), white rose dumplings, and fresh spring rolls. Traditional Vietnamese colonial setting. VND 80,000–180,000 per dish. Reservation recommended for dinner.",
                  b: "Best sit-down",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Bà Mua Restaurant",
                  t: "Local institution · Hoang Dieu Street",
                  d: "The full-service Bà Mua restaurant (related to Mi Quang Bà Mua) serves a wider menu including banh xeo (sizzling crepes), grilled seafood, and rice dishes alongside their famous Mi Quang. Open-sided local eatery — plastic stools, fast service. VND 40,000–90,000 per dish.",
                  b: "Local favourite",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "My Khe Beach Seafood Restaurants",
                  t: "Grilled seafood · My Khe Beach promenade",
                  d: "The row of seafood restaurants along My Khe Beach promenade serve fresh-caught fish, crab, tiger prawns, clams, and squid grilled to order. Point to what you want from the live display — it&apos;s weighed and grilled with salt, chilli, and lemon. VND 100,000–300,000 for a full seafood dinner per person with beer. Eat at tables right on the beach.",
                  b: "Evening seafood",
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
            destination="Da Nang Vietnam"
            hotels={[
              {
                name: "Hyatt Regency Da Nang Resort & Spa",
                type: "Luxury beachfront · My Khe Beach",
                price: "From $150/night",
                rating: "5",
                badge: "Best overall",
                url: "https://www.booking.com/hotel/vn/hyatt-regency-da-nang-resort-and-spa.html?aid=2820480",
              },
              {
                name: "Fusion Maia Resort Da Nang",
                type: "Ultra-luxury all-spa-inclusive · My Khe Beach",
                price: "From $200/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/vn/fusion-maia-resort-da-nang.html?aid=2820480",
              },
              {
                name: "Golden Sea Hotel Da Nang",
                type: "Mid-range · My Khe Beach area",
                price: "From $45/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/vn/golden-sea-da-nang.html?aid=2820480",
              },
              {
                name: "Da Nang Budget Guesthouses",
                type: "Budget · Pham Van Dong, 200m from beach",
                price: "From $10/night (VND 250,000)",
                rating: "3",
                badge: "Most affordable",
                url: "https://www.booking.com/searchresults.html?dest_id=-3715820&dest_type=city&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ba Na Hills Full Day Tour from Da Nang",
                duration: "10 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Da+Nang+Ba+Na+Hills&partner_id=PSZA5UI",
              },
              {
                name: "Hoi An Ancient Town Day Trip",
                duration: "8 hrs",
                price: "From $20/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=Hoi+An+day+trip+Da+Nang&partner_id=PSZA5UI",
              },
              {
                name: "My Son Sanctuary Guided Tour",
                duration: "6 hrs",
                price: "From $15/person",
                badge: "UNESCO highlight",
                url: "https://www.getyourguide.com/s/?q=My+Son+Sanctuary+Da+Nang&partner_id=PSZA5UI",
              },
              {
                name: "Da Nang City & Marble Mountains Tour",
                duration: "4 hrs",
                price: "From $12/person",
                url: "https://www.getyourguide.com/s/?q=Da+Nang+Marble+Mountains&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Da Nang</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌉",
                  title: "Going to Dragon Bridge on a weeknight expecting the fire show",
                  desc: "The Dragon Bridge fire and water show runs Saturday and Sunday nights only, at 9pm. Arrive 30 minutes early for a viewing spot. Weeknight visits see the bridge beautifully illuminated but no fire — many travellers miss the show entirely by not checking the schedule.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☁️",
                  title: "Booking Ba Na Hills without checking the summit weather forecast",
                  desc: "The Golden Bridge at 1,487m is frequently enveloped in cloud with visibility as low as 10 metres. The bridge loses all its drama in dense cloud. Check the Ba Na Hills official weather forecast the night before — if cloud cover is heavy all day, reschedule. A clear Tuesday is worth more than a cloudy Saturday.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌧️",
                  title: "Visiting between October and December without checking typhoon risk",
                  desc: "Da Nang&apos;s typhoon and heavy rain season runs September to December with peak rainfall in October and November. Hoi An Ancient Town floods badly in November. The central coast can receive 500–900mm of rain in a single month. If visiting in this window, buy comprehensive travel insurance and watch the weather forecast closely.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating only at tourist-facing restaurants in Hoi An",
                  desc: "Restaurants on the main streets facing the Thu Bon River in Hoi An Ancient Town charge 3–4 times the local price. Walk one block back into the residential streets parallel to Tran Phu and Bach Dang for authentic cao lau, white rose dumplings, and banh mi at a fraction of the price. The best mi quang in the region is always at local lunch stalls, never at a tourist menu restaurant.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏍️",
                  title: "Not renting a motorbike for the Hai Van Pass or coastal road",
                  desc: "The Hai Van Pass (21km mountain road north of Da Nang) and the coastal road south to Hoi An via the Marble Mountains are two of the most scenic drives in Southeast Asia. They can only be fully appreciated by motorbike — a taxi or van misses the experience entirely. Motorbike rental in Da Nang is $5–7/day and traffic is manageable for confident riders.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Da Nang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Book Ba Na Hills on a weekday — Tuesday or Wednesday",
                  desc: "Ba Na Hills receives 20,000+ visitors on weekends. A Tuesday or Wednesday visit means the Golden Bridge is nearly empty at 9–10am. Book cable car tickets online in advance to skip the queue. Tour guides at https://www.getyourguide.com/s/?q=Da+Nang+Ba+Na+Hills&partner_id=PSZA5UI can arrange private morning slots.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🛵",
                  title: "Take the coastal road to Hoi An by motorbike",
                  desc: "The 30km coastal road from Da Nang to Hoi An passes the Marble Mountains and Non Nuoc Beach — one of Vietnam&apos;s most scenic drives. Leave at 7am, stop at the Marble Mountains for the early light, and arrive in Hoi An before the tour groups. Return in the evening when the old town streets are lantern-lit and traffic-free.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "My Khe Beach at 6am before the heat",
                  desc: "My Khe Beach at sunrise is one of Vietnam&apos;s great free experiences — the entire 30km faces east and catches the first light of the day. Arrive at 6am and you will likely have a long stretch of the beach to yourself. Sea conditions are calmest in the morning before the afternoon sea breeze builds.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Carry dong for street food — withdraw at Da Nang city ATMs",
                  desc: "Cards are accepted at hotels and larger restaurants but all street vendors, market stalls, motorbike rental shops, and local pho shops are cash only. Withdraw Vietnamese dong at ATMs in Da Nang city centre. Exchange rate is approximately 25,000 VND per $1 USD. Keep 20,000 VND notes for beach vendors and market snacks.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📅",
                  title: "Plan Dragon Bridge on your first Saturday or Sunday night",
                  desc: "The Dragon Bridge fire show runs Saturday and Sunday nights at 9pm. If your trip includes a weekend, plan to arrive in Da Nang the day before so your first evening can be the fire show. If your trip is all weekdays, you will miss it — factor this into your planning before booking flights.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌁",
                  title: "Buy the Ba Na Hills combo ticket — not just the cable car",
                  desc: "The standalone cable car ticket covers the ride only. The all-inclusive combo (850,000 VND / $34) adds the Golden Bridge, Fantasy Park rides, gardens, wine cellar, and entertainment. The premium combo (1,200,000 VND / $48) adds the buffet restaurant. The combo is essential — the Golden Bridge alone is worth the price difference over the basic cable car.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Da Nang" />

          {/* Combine With */}
          <CombineWith currentSlug="da-nang-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Da Nang Airport to the city and My Khe Beach?",
                  a: "Da Nang Airport (DAD) is just 2km from the city centre — the most convenient airport position in Vietnam. A Grab (Vietnamese ride-share) costs $2–4 to the city centre and $3–6 to My Khe Beach hotels. Metered taxis are also reliable — confirm the meter is running before departure. Most beachfront hotels offer airport pickup for $10–15 as a paid add-on. There is no useful public bus from the airport.",
                },
                {
                  q: "Can I visit Da Nang and Hoi An in 4 days?",
                  a: "Yes — 4 days is the ideal length for combining Da Nang and Hoi An. Use Da Nang as your base and dedicate Day 3 as a full Hoi An day trip (45 minutes by motorbike or shared van along the coastal road via the Marble Mountains). Alternatively, move to a Hoi An hotel for nights 3 and 4 to experience the lantern-lit evening atmosphere on both nights. The two cities are so close that there is no logistical difficulty.",
                },
                {
                  q: "Is the Golden Bridge at Ba Na Hills worth the cost?",
                  a: "Yes — on a clear morning. The Ba Na Hills all-inclusive combo (850,000 VND / $34) is expensive by Vietnamese standards but the Golden Bridge is genuinely unlike anything else in Asia, the cable car ride through cloud forest is spectacular, and the summit offers a full half-day of activities. The caveat is weather: the bridge in dense cloud is a significant disappointment. Check the summit forecast the night before and only go on a clear-sky day.",
                },
                {
                  q: "When does the Dragon Bridge fire show run?",
                  a: "The Dragon Bridge fire and water show runs on Saturday and Sunday nights only, at exactly 9pm. The show lasts approximately 15 minutes. Arrive 30–45 minutes early to claim a viewing spot on the pedestrian walkway above the Han River. The best viewing is from the walkway directly in front of the dragon&apos;s head. On weeknights the bridge is illuminated and beautiful — but there is no fire show.",
                },
                {
                  q: "Do I need a Vietnam e-visa to visit Da Nang?",
                  a: "Yes — most nationalities including Indian, US, UK, EU, and Australian passport holders require a Vietnam e-visa. Apply at the official Vietnamese government portal (evisa.xuatnhapcanh.gov.vn). Processing takes 3 business days. Cost: $25 single entry, $50 multiple entry. Validity: up to 90 days. Apply at least one week before your travel date. Avoid third-party visa services — the official portal is straightforward and reliable.",
                },
                {
                  q: "What is the best way to get from Da Nang to My Son Sanctuary?",
                  a: "My Son Sanctuary is 70km southwest of Da Nang — about 90 minutes by motorbike or private car. Options: rent a motorbike and ride yourself ($5–7/day rental + 150,000 VND / $6 entrance fee); join a group tour from Da Nang ($12–15 including transport, guide, and entrance fee); or hire a private car ($25–35 round trip). Group tours offer the best value for solo travellers. The site itself requires 2.5 hours to explore properly — a licensed guide adds significant context on Cham history.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Da Nang trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hoi-an-3-days", label: "Hoi An 3 Days", icon: "🏮" },
                { href: "/blog/hue-2-days", label: "Hue 2 Days", icon: "🏯" },
                { href: "/blog/hanoi-4-days", label: "Hanoi 4 Days", icon: "🛺" },
                { href: "/blog/ho-chi-minh-city-4-days", label: "Ho Chi Minh City 4 Days", icon: "🏙️" },
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
          <RelatedGuides currentSlug="da-nang-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Vietnam Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Hoi An in 3 Days — Lanterns &amp; Ancient Town", href: "/blog/hoi-an-3-days" },
                { label: "Hanoi 4 Days — Old Quarter &amp; Halong Bay", href: "/blog/hanoi-4-days" },
                { label: "Hue 2 Days — Imperial City", href: "/blog/hue-2-days" },
                { label: "Ho Chi Minh City 4 Days — Cu Chi &amp; Mekong", href: "/blog/ho-chi-minh-city-4-days" },
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
