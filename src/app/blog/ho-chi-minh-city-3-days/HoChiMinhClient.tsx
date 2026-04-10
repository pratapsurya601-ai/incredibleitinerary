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
const HCMC_TOC = [
  { id: "honest",     emoji: "\u26A1", label: "What Saigon Actually Is" },
  { id: "season",     emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "\u2708\uFE0F", label: "Getting There" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "\uD83C\uDFDB\uFE0F", label: "Landmark Guide" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "stay",       emoji: "\uD83C\uDFE8", label: "Where to Stay" },
  { id: "eat",        emoji: "\uD83C\uDF5C", label: "Where to Eat" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
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
          href: `mailto:?subject=Ho Chi Minh City 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Ho Chi Minh City in 3 Days — Cu Chi Tunnels, street food and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/ho-chi-minh-city-3-days"
        imageUrl="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80"
        description="Ho Chi Minh City in 3 Days: Cu Chi Tunnels, War Remnants Museum, Ben Thanh Market, street food trail and complete budget breakdown in VND and USD."
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
export default function HoChiMinhClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HCMC_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ho Chi Minh City" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ho chi minh city saigon skyline vietnam street"
            fallback="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80"
            alt="Ho Chi Minh City Saigon skyline with busy street traffic at dusk in Vietnam"
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
              <span className="text-white/70">Ho Chi Minh City 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Southeast Asia
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ho Chi Minh City in 3 Days:
                <em className="italic text-amber-300"> Cu Chi Tunnels, Street Food &amp; Saigon After Dark</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Saigon never sleeps &mdash; Cu Chi Tunnels underground, War Remnants Museum that leaves you speechless, Ben Thanh Market chaos, and a banh mi from the same corner cart for 30 years. The complete guide with real timings and costs in VND &amp; USD.
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
              <span>{"\uD83C\uDDFB\uD83C\uDDF3"} Vietnam</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20AB"}400,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The motorbike tide never stops in Saigon. At 7am you are eating the best banh mi on earth from a cart that has been on the same corner for three decades, by noon the War Remnants Museum has you sitting on a bench in silence, and by nightfall you are two beers deep on Bui Vien watching the city do what it does best &mdash; refuse to slow down. This guide tells you exactly when to show up and what it actually costs.
            </p>
          </blockquote>

          {/* ── WHAT SAIGON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Saigon Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Ho Chi Minh City &mdash; still called Saigon by virtually everyone who lives there &mdash; is Vietnam&apos;s largest city with over 9 million people crammed into a river-delta sprawl that runs on motorbikes, street food and sheer unstoppable energy. It is not a pretty city in the traditional sense. There are no limestone karsts or emerald bays here. What there is: one of the most significant war history collections on earth, a French colonial core that crumbles photogenically in the tropical heat, and a street food culture that makes most capital cities look amateur.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              District 1 is the centre of gravity &mdash; the Reunification Palace, Notre-Dame Cathedral, Ben Thanh Market, the War Remnants Museum and most of the best restaurants are all within walking distance of each other. District 3 is quieter and more residential with excellent local food. Cholon (District 5) is the sprawling Chinatown, home to Thien Hau Temple and Binh Tay Market. Beyond the city, Cu Chi Tunnels are 70km northwest and the Mekong Delta starts 90 minutes south.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you the war history, the major landmarks, a Cu Chi Tunnels day trip, the essential street food, and one evening on Bui Vien Walking Street. Four to five days lets you add the Mekong Delta and Cholon properly. Two days is too rushed &mdash; the War Remnants Museum alone deserves a full morning.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="SGN (Tan Son Nhat)" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Dec\u2013Apr" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="Key Site" value="Cu Chi Tunnels" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20AB400k/day (~$16)"} />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Ho Chi Minh City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec\u2013Feb",
                  i: "\u2600\uFE0F",
                  t: "Dry Season \u2014 Best Overall",
                  d: "25\u201332\u00B0C with low humidity and almost no rain. The most comfortable months to explore on foot and visit Cu Chi Tunnels without overheating. Tet (Lunar New Year, late Jan/early Feb) is spectacular but many businesses close for a week \u2014 plan around it or embrace the festivities.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar\u2013Apr",
                  i: "\uD83C\uDF24\uFE0F",
                  t: "Late Dry \u2014 Hottest",
                  d: "30\u201338\u00B0C and rising humidity. Still mostly dry but the heat builds through April. Morning outdoor activities are fine, but afternoon walking tours become uncomfortable. Cu Chi Tunnels underground stay cool year-round, making this a good activity for hot days.",
                  b: "Hot but dry",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May\u2013Sep",
                  i: "\uD83C\uDF27\uFE0F",
                  t: "Wet Season \u2014 Afternoon Storms",
                  d: "28\u201335\u00B0C with daily afternoon downpours, usually 1\u20132 hours. Mornings are often clear and bright. Prices drop 20\u201340% on accommodation. The city floods briefly in some low-lying areas after heavy rain. Pack a light rain jacket and schedule outdoor time before noon.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Oct\u2013Nov",
                  i: "\uD83C\uDF26\uFE0F",
                  t: "Shoulder Season \u2014 Good Value",
                  d: "27\u201333\u00B0C with decreasing rain. October still gets some heavy showers, but November is noticeably drier. Tourist numbers are lower and accommodation prices haven\u2019t risen to dry-season rates. A solid window for value without sacrificing too much weather quality.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Ho Chi Minh City</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Tan Son Nhat International Airport (SGN) is just 7km from District 1. <strong className="font-medium">Indian passport holders need an e-visa ($25 USD, 90-day validity) via evisa.xuatnhapcanh.gov.vn.</strong> UK, France, Germany, Spain and Italy get 45 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Flights from India",
                  d: "IndiGo and VietJet fly from Delhi and Mumbai to Ho Chi Minh City (SGN). Flight time: 4.5\u20135.5 hours. Fares: \u20B912,000\u2013\u20B922,000 return if booked 2\u20133 months ahead. Singapore and Bangkok are common layover cities with cheap connecting flights on VietJet, Scoot or AirAsia. Apply for the e-visa at least 5 working days before departure.",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "From Southeast Asia",
                  d: "Budget airlines connect HCMC to Bangkok (1.5 hrs, $40\u2013$90), Singapore (2 hrs, $50\u2013$120), Kuala Lumpur (2 hrs, $35\u2013$80), and Bali (4 hrs, $60\u2013$140). VietJet and AirAsia have the cheapest fares. Domestic flights from Hanoi take 2 hours ($30\u2013$60 one way on VietJet).",
                  b: "Cheapest routes",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE97",
                  t: "Airport to District 1 (Grab)",
                  d: "Download Grab before landing. A GrabCar from SGN airport to District 1 costs \u20AB80,000\u2013120,000 (~$3\u20135). The ride takes 20\u201340 minutes depending on traffic. Do not use the taxi touts in the arrivals hall \u2014 walk through to the designated pickup area on the ground floor. Only Vinasun (green) or Mai Linh (green) if using a metered taxi \u2014 confirm the meter is running.",
                  b: "Use Grab",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE8C",
                  t: "Bus 109 (Budget option)",
                  d: "Airport bus 109 runs to the backpacker area (De Tham/Pham Ngu Lao) for \u20AB20,000 (~$0.80). Runs every 20\u201330 minutes from 6am to midnight. Air-conditioned, luggage space, and stops near Ben Thanh Market. The cheapest airport transfer in any major Southeast Asian city.",
                  b: "\u20AB20,000",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 3-Day Ho Chi Minh City Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending ({"\u20AB"}1,200,000\u20132,000,000/day, ~$48\u201380). Each day card is expandable. Budget and luxury alternatives are noted in the cost estimates. All prices in Vietnamese Dong (VND) and USD at ~{"\u20AB"}25,000 = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="War History, Ben Thanh Market & Bui Vien"
                cost={"\u20AB500,000\u20131,500,000 (~$20\u201360) excluding accommodation"}
                items={[
                  "8:00am \u2014 Banh mi from Banh Mi Huynh Hoa on Le Thi Rieng Street \u2014 locals queue 20 minutes for these overstuffed French baguettes. Go early to skip the line. \u20AB40,000 (~$1.60). Widely considered the best banh mi in the world.",
                  "9:30am \u2014 War Remnants Museum (\u20AB40,000 entry, ~$1.60). This is essential and emotionally heavy \u2014 go first thing when you have full mental bandwidth. Allow 2\u20133 hours minimum. The Agent Orange and My Lai sections are devastating. Take breaks in the courtyard between floors.",
                  "12:30pm \u2014 Com tam (broken rice) lunch at a local eatery near the museum. \u20AB60,000\u201380,000 (~$2.40\u20133.20). Look for the busiest street-side stall \u2014 that is the one with the best rice.",
                  "2:00pm \u2014 Reunification Palace (\u20AB40,000, ~$1.60) \u2014 the building where the Vietnam War officially ended on April 30, 1975. The rooftop, war room in the basement and the helicopter on the roof are the highlights. Allow 1\u20131.5 hours.",
                  "4:00pm \u2014 Notre-Dame Cathedral Basilica (exterior, free \u2014 currently under restoration) and Central Post Office (free entry, stunning French colonial interior with painted ceiling maps). These are 200 metres from each other in the heart of District 1.",
                  "5:30pm \u2014 Ben Thanh Market \u2014 the iconic covered market. Browse but buy carefully; this is the tourist market with marked-up prices. Binh Tay Market in Cholon is better for actual purchases. Good for photos and atmosphere.",
                  "8:00pm \u2014 Bui Vien Walking Street for cheap bia hoi (fresh draught beer, \u20AB15,000\u201325,000 per glass, ~$0.60\u20131). The street is loud, chaotic and full of energy. For a calmer evening, try the rooftop bars along Nguyen Hue Walking Street instead.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Cu Chi Tunnels Day Trip & Jade Emperor Pagoda"
                cost={"\u20AB700,000\u20132,500,000 (~$28\u2013100) excluding accommodation"}
                items={[
                  "7:00am \u2014 Early start. Shared bus to Cu Chi Tunnels departs from De Tham Street (backpacker district), \u20AB120,000 round trip (~$4.80). The drive takes 2\u20132.5 hours. Private car with guide: \u20AB1,500,000 (~$60) for the car, guide extra.",
                  "10:00am \u2014 Cu Chi Tunnels (\u20AB110,000 entry, ~$4.40). Crawl through 1km of actual tunnels used by the Viet Cong during the war. See booby traps, underground kitchens, living quarters and a shooting range (extra cost). The Ben Dinh section is more touristed; Ben Duoc is quieter and more authentic if you have a private car.",
                  "1:00pm \u2014 Lunch near the tunnels \u2014 the on-site restaurant is overpriced (\u20AB150,000+). Budget option: wait and eat after returning to the city. Mid-range: pack snacks and have a proper lunch back in District 1.",
                  "3:30pm \u2014 Return to city. Stop at Jade Emperor Pagoda (free) in District 3 on the way back \u2014 one of the most atmospheric temples in Vietnam, filled with incense smoke and ornate woodcarvings. Barack Obama visited in 2016.",
                  "5:30pm \u2014 Pho dinner at Pho Hoa Pasteur on Pasteur Street \u2014 the most famous pho restaurant in Saigon. A bowl of beef pho is \u20AB80,000\u2013100,000 (~$3.20\u20134). Rich bone broth, fresh herbs, and the best noodle texture in the city.",
                  "8:00pm \u2014 Rooftop cocktails at Chill Skybar (Level 26, AB Tower) for a panoramic view of the city skyline. Cocktails from \u20AB250,000 (~$10). Or for budget views, the rooftop of any Bui Vien-area hostel costs a beer.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Cholon Chinatown, District 1 & Departure"
                cost={"\u20AB450,000\u20132,000,000 (~$18\u201380) excluding accommodation"}
                items={[
                  "7:30am \u2014 Option A: Mekong Delta day trip (\u20AB350,000 shared tour from De Tham, ~$14). Boat through the delta, coconut candy factory, rowing sampan through narrow canals. Returns by 5pm. Worth it if you have the energy.",
                  "7:30am \u2014 Option B: Cholon (Chinatown) self-guided morning. Grab to District 5 (\u20AB30,000\u201350,000). Start with dim sum breakfast at a local tea house (\u20AB80,000, ~$3.20). Visit Thien Hau Temple (free) \u2014 dedicated to the sea goddess, with stunning ceramic figurines on the roof. Then Binh Tay Market \u2014 the real wholesale market where locals shop, with better prices and more authenticity than Ben Thanh.",
                  "12:00pm \u2014 Return to District 1. Last lunch at Quan Bui for Vietnamese comfort food in a garden setting. Budget: \u20AB120,000\u2013200,000 per person (~$5\u20138). The lemongrass chicken and morning glory are standouts.",
                  "2:00pm \u2014 Nguyen Hue Walking Street \u2014 the pedestrianised boulevard in the heart of District 1. Cafe Apartment (42 Nguyen Hue) is a former residential building converted into a vertical mall of independent cafes. Take the old elevator to the top floor for coffee with a street view.",
                  "4:00pm \u2014 Vinhomes Central Park riverfront walk (free) for a different side of modern Saigon \u2014 manicured parks, the Saigon River, and the Landmark 81 skyscraper (tallest in Vietnam). Saigon Skydeck observation deck is \u20AB200,000 (~$8) if you want the aerial view.",
                  "6:30pm \u2014 Farewell dinner at The Deck Saigon (Thao Dien, District 2) \u2014 riverside fine dining with views across the Saigon River. Or for a budget farewell: one last banh mi from Huynh Hoa before heading to the airport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ho Chi Minh City" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and cultural sites in order of priority. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "War Remnants Museum",
                  e: "\u20AB40,000 (~$1.60)",
                  d: "Vietnam\u2019s most visited museum and one of the most significant war museums in the world. Three floors covering the American War (as it is called in Vietnam), with powerful photojournalism, Agent Orange effects, and the My Lai massacre. Emotionally heavy \u2014 go in the morning with a clear head. Allow 2\u20133 hours minimum.",
                  t: "Must see \u00B7 Morning \u00B7 2\u20133 hrs",
                },
                {
                  n: "Cu Chi Tunnels",
                  e: "\u20AB110,000 (~$4.40)",
                  d: "250km network of underground tunnels used by the Viet Cong during the war. You crawl through narrow passages, see booby traps, underground hospitals and kitchens. The Ben Dinh section is tourist-friendly (widened for visitors). Ben Duoc is less touristed and more authentic. A private guide adds immense historical context.",
                  t: "Must see \u00B7 Half day \u00B7 70km from city",
                },
                {
                  n: "Reunification Palace",
                  e: "\u20AB40,000 (~$1.60)",
                  d: "The building where the Vietnam War officially ended on April 30, 1975 when a North Vietnamese tank crashed through the gates. The underground war room, communication centre and rooftop helicopter are the highlights. The 1960s architecture is preserved intact.",
                  t: "Must see \u00B7 1\u20131.5 hrs",
                },
                {
                  n: "Notre-Dame Cathedral Basilica",
                  e: "Free (exterior only, under restoration)",
                  d: "French colonial cathedral built with bricks imported from Marseille in the 1880s. Currently under extensive renovation \u2014 the exterior with its twin bell towers is still impressive. Adjacent to the Central Post Office, designed by Gustave Eiffel\u2019s firm.",
                  t: "Quick stop \u00B7 Free \u00B7 15 min",
                },
                {
                  n: "Ben Thanh Market",
                  e: "Free entry",
                  d: "Saigon\u2019s most iconic covered market, recognisable by its clock tower. Good for atmosphere and photos. Prices are marked up 50\u2013200% versus local markets \u2014 bargain hard or skip buying altogether. The night market outside (after 6pm) has better street food at more reasonable prices.",
                  t: "Tourist market \u00B7 1 hr",
                },
                {
                  n: "Jade Emperor Pagoda",
                  e: "Free",
                  d: "One of the most atmospheric temples in Vietnam \u2014 thick with incense smoke, ornate woodcarvings and ceramic figurines. Dedicated to the Taoist Jade Emperor. In District 3, slightly off the main tourist trail, which keeps the crowds manageable.",
                  t: "Worth visiting \u00B7 Free \u00B7 30\u201345 min",
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
            title="Ho Chi Minh City &mdash; War History, Street Food &amp; Colonial Architecture"
            subtitle="Vietnam&apos;s largest city where French colonial heritage meets one of the world&apos;s great street food cultures."
            spots={[
              {
                name: "War Remnants Museum",
                query: "war remnants museum ho chi minh city saigon exterior aircraft",
                desc: "Vietnam\u2019s most visited museum \u2014 a powerful and essential visit that covers the American War through photography and artefacts.",
              },
              {
                name: "Cu Chi Tunnels",
                query: "cu chi tunnels vietnam underground entrance soldier",
                desc: "250km of underground tunnels where the Viet Cong lived and fought during the war \u2014 you can crawl through sections yourself.",
              },
              {
                name: "Notre-Dame Cathedral & Central Post Office",
                query: "notre dame cathedral ho chi minh city saigon french colonial",
                desc: "French colonial landmarks in the heart of District 1 \u2014 red-brick cathedral and Eiffel-designed post office.",
              },
              {
                name: "Ben Thanh Market",
                query: "ben thanh market ho chi minh city saigon entrance clock tower",
                desc: "Saigon\u2019s iconic covered market with its distinctive clock tower \u2014 the city\u2019s most recognisable landmark.",
              },
              {
                name: "Bui Vien Walking Street",
                query: "bui vien walking street ho chi minh city saigon neon night",
                desc: "The chaotic, neon-lit backpacker street where bia hoi costs under a dollar and the energy never stops.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ho Chi Minh City is extremely affordable at every price level. Budget travellers can eat and explore on $16\u201330/day, mid-range on $48\u201380/day, and luxury on $200+/day. All prices in Vietnamese Dong (VND) and USD at ~{"\u20AB"}25,000 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (per day)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation", "\u20AB250,000\u2013400,000 ($10\u201316)", "\u20AB700,000\u20131,200,000 ($28\u201348)", "\u20AB3,000,000\u20138,000,000 ($120\u2013320)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u20AB100,000\u2013200,000 ($4\u20138)", "\u20AB300,000\u2013600,000 ($12\u201324)", "\u20AB1,000,000\u20133,000,000 ($40\u2013120)"],
                    ["\uD83D\uDE97 Transport", "\u20AB80,000\u2013150,000 ($3\u20136)", "\u20AB200,000\u2013400,000 ($8\u201316)", "\u20AB500,000\u20132,000,000 ($20\u201380)"],
                    ["\uD83C\uDFAF Activities", "\u20AB50,000\u2013150,000 ($2\u20136)", "\u20AB200,000\u2013400,000 ($8\u201316)", "\u20AB1,000,000\u20133,000,000 ($40\u2013120)"],
                    ["TOTAL (per day)", "\u20AB480,000\u2013900,000 ($19\u201336)", "\u20AB1,400,000\u20132,600,000 ($56\u2013104)", "\u20AB5,500,000\u201316,000,000 ($220\u2013640)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ({"\u20AB"}400k\u2013900k/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and guesthouses in Pham Ngu Lao area, street food meals ({"\u20AB"}30k\u201360k), bus 109 from the airport, Grab motorbike taxis and walking. HCMC is one of the cheapest major cities in Southeast Asia for backpackers.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range ({"\u20AB"}1.4M\u20132.6M/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels in District 1 or 3, a mix of street food and restaurant meals, GrabCar for all transport, and private Cu Chi Tunnels tours. The sweet spot for comfort and authentic experiences.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ({"\u20AB"}5.5M+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels (Park Hyatt, Hotel des Arts), private car and guide, rooftop fine dining, and premium experiences. Saigon luxury is exceptional value \u2014 $200/night gets you what would cost $500+ in Bangkok or Singapore.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Ho Chi Minh City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              District 1 is the best base for first-time visitors &mdash; all major landmarks, the best restaurants, and Bui Vien nightlife are within walking distance. District 3 is quieter with excellent local food. Thao Dien (District 2) is the expat area with riverside restaurants and a more relaxed pace.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Park Hyatt Saigon",
                  type: "Luxury hotel \u00B7 District 1",
                  price: "From \u20AB5,000,000/night (~$200)",
                  badge: "Luxury pick",
                  desc: "The best hotel in Saigon, period. Central District 1 location, walking distance to the Opera House, Notre-Dame Cathedral and Nguyen Hue Walking Street. The rooftop bar has the best cocktails and city views in HCMC. Colonial-meets-modern design. If you are going to splurge one night, make it this one.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Fusion Suites Saigon",
                  type: "Boutique hotel \u00B7 District 1",
                  price: "From \u20AB1,200,000/night (~$48)",
                  badge: "Mid-range pick",
                  desc: "Modern boutique hotel on Suong Nguyet Anh Street with included daily spa treatments (yes, included in the room rate). Clean design, excellent breakfast, rooftop pool with city views. 10-minute walk to Ben Thanh Market. Outstanding value for District 1.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "The Common Room Project",
                  type: "Hostel \u00B7 District 1 (Bui Vien area)",
                  price: "From \u20AB250,000/night (~$10)",
                  badge: "Best budget",
                  desc: "Clean, social hostel in the heart of the Bui Vien backpacker area. Dorm beds and private rooms available. Rooftop bar, free breakfast, and a great common area for meeting other travellers. 5-minute walk to everything in the backpacker district. The best budget base in Saigon.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Thao Dien area guesthouses",
                  type: "Boutique / serviced apartments \u00B7 District 2",
                  price: "From \u20AB800,000/night (~$32)",
                  badge: "Best for expat vibe",
                  desc: "Thao Dien is the expat neighbourhood across the river from District 1 (15 minutes by Grab). Tree-lined streets, excellent Western and Vietnamese restaurants, riverside walks, and a calmer pace than the city centre. Ideal if you prefer a residential feel. The Deck Saigon restaurant is here for riverside dining.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotels near District 3",
                  type: "Mid-range \u00B7 District 3",
                  price: "From \u20AB600,000/night (~$24)",
                  badge: "Best local food",
                  desc: "District 3 is where Saigon locals eat. Quieter than District 1, packed with excellent pho stalls, com tam shops and local cafes. A 10-minute Grab ride to all the major sights but with a more authentic neighbourhood atmosphere. Great value accommodation with less tourist markup.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF5C"} Where to Eat in Ho Chi Minh City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Saigon has one of the greatest street food cultures on earth. The rule is simple: if there is a queue of locals, join it. The best meals in the city cost under $3 and are served on tiny plastic chairs on the pavement. Here are the spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Banh Mi Huynh Hoa",
                  t: "Banh mi \u00B7 Le Thi Rieng Street",
                  d: "Widely considered the best banh mi in the world. Overstuffed French baguettes with layers of pate, cold cuts, pickled daikon, fresh cilantro and chilli. The queue can be 20\u201330 minutes at peak times. Go at 7am or after 3pm. \u20AB40,000 (~$1.60). Worth every dong and every minute in line.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Pho Hoa Pasteur",
                  t: "Pho \u00B7 Pasteur Street, District 1",
                  d: "The most famous pho restaurant in Saigon since the 1960s. Southern-style pho with a rich, clear beef bone broth, fresh bean sprouts, Thai basil and lime. The beef pho with rare slices and brisket is the order. \u20AB80,000\u2013100,000 (~$3.20\u20134). Open from 6am \u2014 excellent breakfast option.",
                  b: "Iconic pho",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Com Tam Ba Ghien",
                  t: "Com tam (broken rice) \u00B7 District 3",
                  d: "The quintessential Saigon lunch. Broken rice with grilled pork chop, a fried egg, shredded pork skin, and fish sauce dressing. This District 3 institution has been serving the same dish for decades. \u20AB50,000\u201370,000 (~$2\u20132.80). Queue at noon with office workers \u2014 that is the quality signal.",
                  b: "Best com tam",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Chill Skybar (AB Tower)",
                  t: "Rooftop bar \u00B7 Level 26, District 1",
                  d: "Panoramic 360-degree city views from the 26th floor. Craft cocktails from \u20AB250,000 (~$10). Best visited at sunset when the city lights up. Not the cheapest drinks in Saigon, but the view is unmatched. Dress code: smart casual. Arrive by 5:30pm for a good seat.",
                  b: "Best rooftop",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Street food on Vinh Khanh (District 4)",
                  t: "Seafood street \u00B7 District 4",
                  d: "An entire street of open-air seafood restaurants where locals eat grilled shellfish, snails, and seafood hotpot on plastic chairs. Order by pointing at what looks good. \u20AB150,000\u2013300,000 (~$6\u201312) for a full seafood spread with beer. This is where Saigon locals go \u2014 almost no tourists.",
                  b: "Local favourite",
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
            destination="Ho Chi Minh City Vietnam"
            hotels={[
              {
                name: "The Common Room Project",
                type: "Hostel \u00B7 Bui Vien area",
                price: "From \u20AB250,000/night (~$10)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/vn/the-common-room-project.html?aid=2820480",
              },
              {
                name: "Fusion Suites Saigon",
                type: "Boutique Hotel \u00B7 District 1",
                price: "From \u20AB1,200,000/night (~$48)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/vn/fusion-suites-saigon.html?aid=2820480",
              },
              {
                name: "Park Hyatt Saigon",
                type: "Luxury Hotel \u00B7 District 1",
                price: "From \u20AB5,000,000/night (~$200)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/vn/park-hyatt-saigon.html?aid=2820480",
              },
              {
                name: "Hotel des Arts Saigon",
                type: "Boutique Luxury \u00B7 District 1",
                price: "From \u20AB3,000,000/night (~$120)",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/vn/hotel-des-arts-saigon.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cu Chi Tunnels Half-Day Tour",
                duration: "Half day",
                price: "From \u20AB350,000/person (~$14)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=cu+chi+tunnels+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mekong Delta Day Trip",
                duration: "Full day",
                price: "From \u20AB350,000/person (~$14)",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=mekong+delta+day+trip+ho+chi+minh&partner_id=PSZA5UI",
              },
              {
                name: "Saigon Street Food Tour by Motorbike",
                duration: "4 hours",
                price: "From \u20AB700,000/person (~$28)",
                badge: "Best food tour",
                url: "https://www.getyourguide.com/s/?q=saigon+street+food+motorbike+tour&partner_id=PSZA5UI",
              },
              {
                name: "Ho Chi Minh City Walking Tour",
                duration: "3 hours",
                price: "From \u20AB250,000/person (~$10)",
                url: "https://www.getyourguide.com/s/?q=ho+chi+minh+city+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83D\uDE96",
                  title: "Taking unmarked taxis from the airport",
                  desc: "SGN airport is full of scam taxis that rig meters or quote flat rates 3\u20135x the real price. Only use Vinasun (green/white) or Mai Linh (green) metered taxis, or book a Grab before you exit the terminal. Confirm the meter is running before the car moves. A ride to District 1 should be \u20AB80,000\u2013120,000 \u2014 anything over \u20AB200,000 is a scam.",
                },
                {
                  icon: "\uD83C\uDF21\uFE0F",
                  title: "Visiting in April\u2013May peak heat",
                  desc: "April and May are brutally hot (35\u201340\u00B0C) with rising humidity. Walking outdoor sights like Ben Thanh Market and the Cathedral become uncomfortable by 11am. The best weather is December\u2013March (dry, 25\u201332\u00B0C). If visiting in summer, schedule outdoor time before 9am and after 4pm.",
                },
                {
                  icon: "\uD83C\uDF92",
                  title: "Doing Cu Chi Tunnels with a rushed group tour",
                  desc: "Budget group tours rush through in 2 hours with minimal context. A private guide lets you spend 4+ hours, crawl through all tunnel sections, understand the full historical narrative, and visit the quieter Ben Duoc section. The extra cost (\u20AB1,500,000 for a car vs \u20AB120,000 for a group bus) is worth it for the depth of experience.",
                },
                {
                  icon: "\uD83D\uDCB1",
                  title: "Exchanging currency at your hotel",
                  desc: "Hotel exchange rates are 5\u201310% worse than banks or ATMs. Use Techcombank or BIDV ATMs for the best rates (low withdrawal fees). Vietcombank at the airport is acceptable in emergencies. Avoid the gold shops offering exchange in the tourist areas \u2014 some use rigged calculators.",
                },
                {
                  icon: "\uD83D\uDED2",
                  title: "Buying souvenirs at Ben Thanh Market",
                  desc: "Ben Thanh is the tourist market \u2014 everything is marked up 50\u2013200% versus local markets. For better prices and a more authentic experience, go to Binh Tay Market in Cholon (District 5). For modern Vietnamese design and crafts, try Saigon Outcast or the boutiques on Dong Khoi Street.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Ho Chi Minh City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83E\uDD56",
                  title: "The best banh mi in the world is here",
                  desc: "Banh Mi Huynh Hoa on Le Thi Rieng Street \u2014 locals queue 20 minutes for these overstuffed French baguettes. Go at 7am to avoid the queue. \u20AB40,000 and worth every dong. The pate-to-bread ratio is what makes this cart legendary.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDEFA",
                  title: "Motorbike food tours after dark",
                  desc: "Vespa-style motorbike food tours after dark are the best way to experience the real HCMC. You visit street stalls, local spots and places no walking tour reaches. Book through XO Tours or Vespa Adventures. \u20AB700,000\u20131,200,000 per person (~$28\u201348) including all food.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "War Remnants Museum: go first thing",
                  desc: "The museum is emotionally heavy. Go on your first morning when you have full mental energy, not after a day of walking. Allow 2\u20133 hours and take breaks in the courtyard between floors. The third floor (Agent Orange) is the most affecting.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83C\uDF19",
                  title: "Bui Vien is overrated \u2014 try these instead",
                  desc: "Bui Vien Walking Street is tourist-heavy and loud. For authentic Saigon nightlife, try the craft beer bars on Pasteur Street, the rooftop bars along Nguyen Hue, or the seafood street on Vinh Khanh in District 4 where locals actually drink.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\u2615",
                  title: "Vietnamese coffee culture is sacred",
                  desc: "Ca phe sua da (iced milk coffee) is the daily ritual. Order it at any street-side cafe for \u20AB25,000\u201335,000 (~$1\u20131.40). For the full experience, sit on the tiny plastic chairs on the pavement and watch the motorbike river flow past. The Trung Nguyen chain is decent; independent cafes are better.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Download Grab before you land",
                  desc: "Grab is the Uber of Southeast Asia and essential in HCMC. GrabCar is cheap, air-conditioned and avoids any taxi scams. GrabBike (motorbike taxi) is even cheaper and faster in traffic. Buy a local SIM at the airport (\u20AB100,000\u2013150,000 for 30GB data) so Grab works immediately.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ho Chi Minh City" />

          {/* Combine With */}
          <CombineWith currentSlug="ho-chi-minh-city-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do I need in Ho Chi Minh City?",
                  a: "3 days covers the city highlights (War Museum, Reunification Palace, Ben Thanh, Notre Dame) plus a day trip to Cu Chi Tunnels. 4\u20135 days lets you add the Mekong Delta and explore Cholon properly. 2 days is too rushed \u2014 the War Remnants Museum alone deserves a full morning.",
                },
                {
                  q: "Is it safe to eat street food in Ho Chi Minh City?",
                  a: "Yes \u2014 street food is generally safe if the stall is busy and the food is freshly cooked. Avoid pre-cooked items sitting at room temperature. Banh mi, pho, and com tam stalls are safest for sensitive stomachs. Drink bottled water and use the ice at established restaurants (it is factory-made and safe).",
                },
                {
                  q: "What is the difference between Ben Thanh and Binh Tay Market?",
                  a: "Ben Thanh (District 1) is the touristy market with fixed tourist prices, marked up 50\u2013200%. Binh Tay in Cholon (Chinatown, District 5) is the real wholesale market where locals shop \u2014 better prices and a far more authentic atmosphere. Go to Ben Thanh for photos, Binh Tay for purchases.",
                },
                {
                  q: "How far is Cu Chi Tunnels from HCMC?",
                  a: "About 70km northwest, taking 1.5\u20132 hours by car. Shared bus tours leave from the backpacker district (De Tham Street) and take 2\u20132.5 hours. A private car is faster and more flexible \u2014 costs \u20AB1,000,000\u20131,500,000 round trip (~$40\u201360).",
                },
                {
                  q: "What currency should I use in HCMC?",
                  a: "Vietnamese Dong (VND) is always better than USD at local stalls and markets. USD is widely accepted at hotels and upscale restaurants, but you will always get more value paying in VND. Use ATMs (Techcombank, BIDV) for the best exchange rates.",
                },
                {
                  q: "Do I need a visa for Vietnam?",
                  a: "Indian passport holders need an e-visa ($25 USD, 90-day validity) from evisa.xuatnhapcanh.gov.vn \u2014 processed in 3 working days. UK, France, Germany, Spain and Italy get 45 days visa-free. USA, Canada and Australia need an e-visa. Check evisa.xuatnhapcanh.gov.vn for your country\u2019s requirements.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ho Chi Minh City trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/vietnam-visa-guide", label: "Vietnam visa guide", icon: "\uD83D\uDCCB" },
                { href: "/blog/vietnam-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-vietnam", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/vietnam-travel-tips", label: "Travel tips", icon: "\uD83D\uDCD6" },
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
          <RelatedGuides currentSlug="ho-chi-minh-city-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Hanoi &mdash; 3 Day Guide", href: "/blog/hanoi-3-days" },
                { label: "Ha Long Bay &mdash; 3 Day Guide", href: "/blog/ha-long-bay-3-days" },
                { label: "Bangkok &mdash; 4 Day Guide", href: "/blog/bangkok-4-days" },
                { label: "Singapore &mdash; 3 Day Guide", href: "/blog/singapore-3-days" },
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
