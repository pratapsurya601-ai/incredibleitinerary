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
const HK_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Hong Kong Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏙️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Hong Kong 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Hong Kong in 4 Days — skyline, dim sum and Symphony of Lights&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hong-kong-4-days"
        imageUrl="https://images.unsplash.com/photo-1532029387626-82c5a7f7b53b?w=1200&q=80"
        description="Hong Kong in 4 Days: Victoria Peak, Symphony of Lights, Star Ferry, dim sum and Lantau Big Buddha — complete travel guide with budget breakdown."
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
export default function HongKongClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hong Kong" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hong kong skyline victoria harbour night kowloon tram skyscrapers"
            fallback="https://images.unsplash.com/photo-1532029387626-82c5a7f7b53b?w=1600&q=80"
            alt="Hong Kong skyline at night from Victoria Harbour with Kowloon and skyscrapers"
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
              <span className="text-white/70">Hong Kong 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-red-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Asia&apos;s Greatest Skyline
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hong Kong in 4 Days:
                <em className="italic text-red-300"> Skyline, Dim Sum &amp; the World&apos;s Greatest Harbour</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Victoria Peak tram (HKD 108 return), Symphony of Lights at 8pm (free), Star Ferry for HKD 2.70, Tian Tan Big Buddha by cable car, and the world&apos;s cheapest Michelin restaurant. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏙️ Hong Kong SAR</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From HKD $450/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-red-500 pl-6 mb-10 bg-red-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Picture the most vertical city on Earth: 8 million people, the world&apos;s highest concentration of skyscrapers, a tram that has ground up Victoria Peak since 1888, and every night at 8pm the entire harbour turns into the planet&apos;s largest free light show. Hong Kong, where China meets the world at its most intense and its most delicious.
            </p>
          </blockquote>

          {/* ── WHAT HONG KONG ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hong Kong Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hong Kong operates on a different register from anywhere else in Asia. The city sits on a peninsula and island with almost no flat land — so it built upward, stacking over 7,500 high-rises into a skyline that from the water looks physically impossible. The Star Ferry has crossed Victoria Harbour since 1888. The Peak Tram has climbed Hong Kong Peak since the same year. Dim sum has been served at 6am in Kowloon cha chaan tengs for over a century. This is a city with deep continuity beneath the futurism.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Hong Kong genuinely unlike any other city is the compression: in 15 minutes you can walk from a Michelin three-star restaurant to a street market selling live seafood, from a glass skyscraper lobby to a 200-year-old temple with incense coils the size of beach umbrellas. Cantonese food culture — roast goose, clay pot rice, dim sum, snake soup, egg waffles — is among the world&apos;s greatest culinary traditions and it is practiced at every price point from HKD 50 to HKD 5,000.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Practically: Hong Kong has its own currency (Hong Kong Dollar, HKD), completely unrestricted internet — no VPN needed — Cantonese as the primary language, and an extraordinarily efficient public transport network. The MTR and Octopus card make it one of the easiest cities in the world to navigate. Get the Octopus card at the airport before you leave arrivals — you will use it for everything from the MTR to 7-Eleven.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport to Central" value="24 min" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Dec" />
              <StatCard icon="🏙️" label="Skyscrapers" value="7,500+" />
              <StatCard icon="💰" label="Budget From" value="HKD $450/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hong Kong</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Dec",
                  i: "☀️",
                  t: "Autumn — Best Season",
                  d: "22–28°C, low humidity, clear skies. October and November bring the best visibility for Victoria Peak — the skyline stretches to the horizon on clear days. December has a festive atmosphere with Christmas lights across the city. The universally recommended window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jan–Mar",
                  i: "🌤️",
                  t: "Winter — Cool and Clear",
                  d: "14–20°C. Comfortable for walking and excellent visibility for Peak views. January and February coincide with Chinese New Year — spectacular if you time it right, but extremely crowded and many local restaurants close during the first few days. Evenings can be surprisingly cold; bring a layer.",
                  b: "Good option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Humid but Viable",
                  d: "20–27°C with increasing humidity. Misty mornings can obscure Victoria Peak views — check the Hong Kong Observatory app before going up. Still comfortable for sightseeing and less crowded than the autumn peak season. A reasonable window if autumn dates aren&apos;t possible.",
                  b: "Acceptable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Summer — Hot, Humid, Typhoon Season",
                  d: "30–34°C with high humidity and frequent typhoons June through September. A Typhoon Signal 8 or above shuts down the entire city including the MTR. Victoria Peak is often in cloud all day. The city functions between storms but this is the most uncomfortable season and the highest-risk window for disrupted plans.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hong Kong</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-red-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hong Kong International Airport (HKG) is on Lantau Island at Chek Lap Kok. The <strong className="font-medium">Airport Express</strong> train connects to Hong Kong Station (Central) in 24 minutes for HKD 115, with a stop at Kowloon Station (21 min, HKD 105). This is the fastest and most reliable option — skip the taxi for your first arrival.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "Airport Express (recommended)",
                  d: "HKG Airport → Hong Kong Station (Central): 24 min, HKD 115. Stop at Kowloon Station: 21 min, HKD 105. Trains run every 10 minutes from 5:54am to 1:15am. Crucially, in-town check-in is available at both Hong Kong and Kowloon stations — drop luggage the morning of departure and explore luggage-free for your last hours. Get an Octopus card at the Customer Service Centre in arrivals before boarding.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Airport Bus (A-series routes)",
                  d: "Route A21 to Kowloon (Jordan, Mong Kok, Tsim Sha Tsui): HKD 33, 60–75 min depending on traffic. Route A11 to North Hong Kong Island (Central, Wan Chai, Causeway Bay): HKD 40. Good value for budget travellers with time, but significantly slower than the Airport Express in rush hour. Pay with Octopus card.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Taxi from HKG",
                  d: "Red (urban) taxis to Kowloon: HKD 250–350 including tunnel toll. To Hong Kong Island: HKD 300–420. Faster than buses but far more expensive than the Airport Express. Reasonable only if arriving very late at night or carrying excessive luggage. No Uber in Hong Kong; use the official taxi queue at arrivals.",
                  b: "Convenience option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Macau or Shenzhen",
                  d: "TurboJet and Cotai Water Jet ferries from Macau arrive at the Macau Ferry Terminal (Sheung Wan) or Kowloon China Ferry Terminal, taking 55–75 min. From Shenzhen: high-speed ferry from Shekou Port (50 min), or land border crossing at Lo Wu or Lok Ma Chau MTR stations. Note that mainland China entry requires a separate Chinese visa even if you entered Hong Kong visa-free.",
                  b: "From mainland / Macau",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Hong Kong Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the fixed anchor points: Symphony of Lights every night at 8pm (watch from TST promenade), Peak Tram best in late afternoon or evening, Lantau on Day 3 requiring a full morning.
            </p>

            <div className="flex gap-2 mb-5 flex-wrap">
              {["💰 Budget — HKD $450/day", "✨ Mid-Range — HKD $1,000/day", "💎 Luxury — HKD $3,000+/day"].map((label) => (
                <span key={label} className="text-xs bg-parchment border border-parchment-2 text-ink px-3 py-1.5 rounded-full font-light">
                  {label}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive + Kowloon Street Life + Temple Street + Symphony of Lights"
                cost="HKD $430–480 (transport + hostel/hotel + food + Octopus card)"
                items={[
                  "Arrive HKG — take the Airport Express to Kowloon Station (21 min, HKD 105) or Hong Kong Station in Central (24 min, HKD 115). Before leaving arrivals, get an Octopus card at the Customer Service Centre (HKD 150: HKD 50 refundable deposit + HKD 100 usable balance). The Octopus card works on the MTR, buses, trams, the Star Ferry, 7-Eleven and many restaurants — it is essential for everything.",
                  "Check in: budget travellers to a hostel dorm in Mong Kok or Tsim Sha Tsui (HKD 150–220/night); mid-range to a hotel in Jordan or TST (HKD 500–700/night); luxury to The Peninsula or Mandarin Oriental (from HKD 2,500/night). Leave luggage and start walking.",
                  "Afternoon: explore Kowloon on foot. Nathan Road is the main commercial artery — 3.6km of neon-lit shopping, fast food, money changers and electronics shops. Walk south toward the harbourfront. Detour to the Kowloon Walled City Park (free) — a peaceful garden on the site of the extraordinary 50,000-person shanty city demolished in 1994, with scale models and photographs of what stood here.",
                  "4pm onwards: Temple Street Night Market opens in Jordan, Kowloon. Stalls run from Jordan Road north to Kansu Street selling watches, jade, electronics, clothing and souvenirs. The cooked food stalls at the southern end near Tin Hau Temple serve clay pot rice (HKD 45), wonton noodles (HKD 35) and typhoon shelter crab when in season.",
                  "Street food dinner in Mong Kok before the light show: roast pork rice (char siu fan) HKD 45–55 at any BBQ roast shop, curry fish balls HKD 10–15 per skewer from a street stall, egg waffles (gai daan jai) HKD 20–25 — all local institutions.",
                  "7:45pm: Walk to the Tsim Sha Tsui promenade (Avenue of Stars waterfront) and claim a spot at the railing facing Hong Kong Island. At exactly 8:00pm the Symphony of Lights begins — a 13-minute show where over 40 buildings on the Hong Kong Island skyline illuminate simultaneously with coloured lights, laser beams and search beams across the harbour. Completely free. One of the great spectacles in Asia.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Victoria Peak Tram + Star Ferry + Central + Mid-Levels Escalator"
                cost="HKD $380–430 (ferry + tram + food)"
                items={[
                  "Morning dim sum: Hong Kong&apos;s greatest breakfast tradition. Tim Ho Wan (the world&apos;s cheapest Michelin-starred restaurant) has branches across Hong Kong including Sham Shui Po and North Point — dishes HKD 50–80 each, order har gow (shrimp dumplings), siu mai (pork and prawn), char siu bao (BBQ pork buns) and cheung fun (rice noodle rolls). Arrive before 10am to minimise wait time. Budget HKD 150–200/person.",
                  "Take the Star Ferry from Tsim Sha Tsui Pier to Central Pier: HKD 2.70 (lower deck) or HKD 3.40 (upper deck). The 8-minute crossing gives the best possible view of the Hong Kong Island skyline from the water — the IFC towers, HSBC building, and Bank of China angular tower all visible. Do this on a clear morning. This is one of the genuinely great transport experiences in the world.",
                  "From Central Pier walk to the Peak Tram lower terminus on Garden Road (15 min walk or short taxi HKD 30). Buy Peak Tram tickets online in advance: HKD 108 return (tram only) or HKD 172 return including Sky Terrace 428 viewing platform. The pre-booked queue is significantly shorter on weekends and public holidays — this matters.",
                  "Victoria Peak: the tram climbs 396m in 7 minutes on a gradient so steep the inside of the carriage leans at 27 degrees. At the top, walk the Peak Circle Walk (3.5km loop, free, 45 minutes) for multiple angles on the skyline — views north toward Kowloon, south toward Repulse Bay and the South China Sea. The Sky Terrace 428 is the highest public viewing platform.",
                  "Afternoon back in Central: walk through SoHo (South of Hollywood Road) for galleries and independent cafes. The Central-Mid-Levels Escalator (free) is the world&apos;s longest outdoor covered escalator system — 800m of linked escalators climbing from Central Market to Conduit Road. Ride it uphill, walk down through the neighbourhood restaurants.",
                  "PMQ (Police Married Quarters) on Aberdeen Street: a converted colonial police housing estate now housing Hong Kong designers and creative studios — free to enter and good for quality, locally made gifts and ceramics.",
                  "Dinner: Yung Kee Restaurant on Wellington Street, Central (est. 1942, Michelin Bib Gourmand) for roast goose — the signature dish, crispy-skinned, tender, properly Cantonese. HKD 200–400/person. Book ahead for weekend evenings.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Lantau Island: Tian Tan Big Buddha + Po Lin Monastery + Macau Option"
                cost="HKD $550–650 (cable car + ferry if Macau + meals)"
                items={[
                  "Take the MTR Tung Chung Line from Kowloon to Tung Chung station (approximately 35 min). From Tung Chung MTR, walk 5 minutes to the Ngong Ping 360 Cable Car terminus. The cable car costs HKD 185 return (standard gondola) or HKD 255 return (Crystal cabin with glass floor). The 25-minute journey crosses 5.7km of forested Lantau hills — on a clear day the view extends across Lantau and out to sea.",
                  "Tian Tan Buddha (Big Buddha): the world&apos;s largest seated outdoor bronze Buddha, 34m tall, on Ngong Ping plateau at 520m elevation. Entry to the base and surrounding platform is free. Climbing the 268 steps to the Buddha level itself: free. The six smaller bodhisattva statues surrounding the base each offer a different symbolic offering upward. Allow 90 minutes at the site.",
                  "Po Lin Monastery directly below the Buddha: one of Hong Kong&apos;s most significant Buddhist monasteries, founded in 1906. The vegetarian lunch served in the monastery dining hall is genuinely good — a fixed menu of vegetable dishes and soup for HKD 100/person. Arrive before 1pm to avoid queuing.",
                  "Option A — Macau day trip (highly recommended): return to Tung Chung, then take the ferry to Macau from the Tung Chung Ferry Terminal (TurboJet: HKD 180–220 each way, 55–75 min). In Macau: Ruins of St Paul&apos;s (free), Senado Square (UNESCO, free), the Venetian Macao casino floor (free to walk through), and egg tarts from Lord Stow&apos;s Bakery in Coloane Village. Return by last evening ferry (check schedule — last boats approximately 10pm–midnight).",
                  "Option B (no Macau): after Po Lin, take Bus 2 from Ngong Ping to Tai O fishing village (30 min, HKD 10) — Hong Kong&apos;s last traditional fishing community with stilt houses over the water and dried seafood stalls. Return to Tung Chung by bus.",
                  "Evening: Sik Sik Yuen Wong Tai Sin Temple in Kowloon (free, open until 5:30pm / 6pm in high season) — one of Hong Kong&apos;s most important Taoist temples with 3 million annual visitors. The kau cim fortune-telling arcade outside the main gate (shaking numbered bamboo sticks to receive fortune numbers) is a genuine Hong Kong cultural institution practiced by both worshippers and curious travellers.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sheung Wan Antiques + Man Mo Temple + Wet Market + Depart"
                cost="HKD $300–360 (food + Star Ferry + Airport Express)"
                items={[
                  "Early morning (before 9am): visit a wet market in Central or Wan Chai. The Wan Chai Market on Wan Chai Road (open from 6am) is one of the most photogenic in Hong Kong — piles of tropical fruit, live seafood in tanks, butchers chopping roast duck. This is the real daily Hong Kong that the tourist district conceals entirely. Free to walk through.",
                  "Walk Hollywood Road in Sheung Wan: Hong Kong&apos;s antique district. From the upper end near Hollywood Road Park, the street descends through galleries and dealers selling Ming porcelain, Republican-era propaganda posters, jade, Mao memorabilia and Southeast Asian art. Most galleries are happy to let you browse without any pressure to buy.",
                  "Man Mo Temple at 124–126 Hollywood Road (free, open 8am–6pm): one of Hong Kong&apos;s oldest surviving Chinese temples, built in 1847 and dedicated to Man (god of literature) and Mo (god of war). The ceiling is hung with dozens of enormous incense coils the size of beach umbrellas, each burning for weeks and filling the air with incense smoke. One of the most atmospheric spaces in Hong Kong. Visit on a weekday morning for maximum quiet.",
                  "Lunch: last proper Hong Kong meal before departure. Roast goose or char siu (Cantonese BBQ pork) over rice at a traditional roast meat shop in Sheung Wan or Central, HKD 80–100. Ser Wong Fun on Cochrane Street is one of Hong Kong&apos;s last traditional snake soup restaurants — snake soup (se geng, HKD 60–80) is a centuries-old Cantonese cold-weather tradition, rich and herbal with shredded snake meat and chrysanthemum petals.",
                  "Final Star Ferry crossing from Central Pier (Pier 7) to Tsim Sha Tsui (HKD 2.70) — the reverse view of the harbour, Hong Kong Island behind you, Kowloon ahead. Collect luggage from hotel.",
                  "Airport Express from Kowloon Station (HKD 105) or Hong Kong Station (HKD 115). If you used the in-town check-in service this morning, proceed directly to the departure gate at HKG. Train departs every 10 minutes. Allow 90 minutes before flight departure for immigration and security at the airport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hong Kong" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ Hong Kong Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Hong Kong experiences in priority order, with accurate 2026 pricing.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Victoria Peak (The Peak)",
                  e: "HKD 108 return tram / HKD 172 with Sky Terrace 428",
                  d: "The defining Hong Kong experience. The Peak Tram has been running since 1888 and the view from the top — 7,500 skyscrapers compressed between you and the harbour — is one of the world&apos;s great urban panoramas. Book tickets online to skip the queue. Best visited on a clear day (check Hong Kong Observatory first). Evening visits for the illuminated skyline are particularly dramatic.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Symphony of Lights (8pm nightly)",
                  e: "Free",
                  d: "Over 40 buildings on the Hong Kong Island waterfront light up simultaneously each night at 8pm for 13 minutes. Watch from the Tsim Sha Tsui promenade (Avenue of Stars) on the Kowloon side — not from Hong Kong Island itself, which faces away from the show. Arrive by 7:45pm. The show runs 365 days a year regardless of weather.",
                  t: "Free · 13 min · arrive by 7:45pm",
                },
                {
                  n: "Tian Tan Big Buddha (Lantau Island)",
                  e: "Cable car HKD 185 return; Buddha entry free",
                  d: "The world&apos;s largest seated outdoor bronze Buddha (34m tall) at 520m elevation on Lantau Island. The Ngong Ping 360 cable car (25 min, 5.7km across forested hills) is spectacular in itself. The 268-step climb to the Buddha gives panoramic Lantau views. Po Lin Monastery vegetarian lunch below: HKD 100. Full morning required.",
                  t: "Full morning · Lantau Island",
                },
                {
                  n: "Star Ferry",
                  e: "HKD 2.70 lower deck / HKD 3.40 upper deck",
                  d: "Operating since 1888, the Star Ferry crosses Victoria Harbour between Tsim Sha Tsui (Kowloon) and Central (Hong Kong Island) in 8 minutes. The view of the Hong Kong Island skyline from the water — IFC, HSBC Building, Bank of China — is the best possible angle on the city. Do it in both directions. Take it at golden hour or after the Symphony of Lights.",
                  t: "8 min · do it both ways",
                },
                {
                  n: "Temple Street Night Market",
                  e: "Free entry · stalls from 4pm, best 8pm–11pm",
                  d: "Hong Kong&apos;s most atmospheric night market in Jordan, Kowloon. Stalls sell jade, watches, electronics, clothing and souvenirs. The cooked food stalls near Tin Hau Temple at the southern end serve clay pot rice, wonton noodles and street snacks. Fortune tellers set up tables along the side streets from dusk.",
                  t: "Evening · Jordan, Kowloon",
                },
                {
                  n: "Sik Sik Yuen Wong Tai Sin Temple",
                  e: "Free",
                  d: "One of Hong Kong&apos;s most important Taoist temples, receiving over 3 million visitors annually. The main hall complex is visually dramatic with red columns, golden rooftops and constant incense smoke. The kau cim fortune-telling arcade outside — worshippers shake bamboo sticks in a canister to receive numbered oracle slips — is a genuine local tradition practised by both devout visitors and curious tourists.",
                  t: "Free · Diamond Hill, Kowloon",
                },
                {
                  n: "Mong Kok Street Markets",
                  e: "Free entry",
                  d: "Hong Kong&apos;s most densely populated district has extraordinary street market culture: Ladies&apos; Market on Tung Choi Street for clothing and accessories; Fa Yuen Street (Sneaker Street) for trainers; the Flower Market on Flower Market Road; the Goldfish Market on Tung Choi Street&apos;s northern section. Best visited in late afternoon when all stalls are fully open.",
                  t: "Afternoon / evening · Mong Kok",
                },
                {
                  n: "Man Mo Temple",
                  e: "Free",
                  d: "Built in 1847 on Hollywood Road in Sheung Wan — one of Hong Kong&apos;s oldest temples, dedicated to Man (god of literature) and Mo (god of war). The ceiling is hung with enormous burning incense coils, each the size of a beach umbrella, filling the space with continuous smoke and scent. Extraordinary sensory atmosphere, especially on a quiet weekday morning.",
                  t: "Free · Sheung Wan, HK Island",
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
            title="Hong Kong — Skyline, Harbour &amp; Street Life"
            subtitle="Victoria Peak, Symphony of Lights, the Star Ferry and the energy of Kowloon."
            spots={[
              {
                name: "Victoria Harbour Skyline at Night",
                query: "hong kong skyline victoria harbour night kowloon skyscrapers",
                desc: "The Hong Kong Island skyline from the Kowloon waterfront — one of the world&apos;s great urban panoramas, best experienced from the Star Ferry or TST promenade at night.",
              },
              {
                name: "Victoria Peak View",
                query: "victoria peak hong kong skyline view tram aerial",
                desc: "The view from Victoria Peak at 396m — the densest concentration of high-rise buildings in the world compressed into a single harbour view.",
              },
              {
                name: "Tian Tan Big Buddha Lantau",
                query: "tian tan big buddha lantau island hong kong bronze statue",
                desc: "The 34-metre Tian Tan Buddha on Ngong Ping plateau, Lantau Island — reached by cable car over forested hills above the South China Sea.",
              },
              {
                name: "Star Ferry Hong Kong Harbour",
                query: "star ferry hong kong harbour crossing victoria central",
                desc: "The Star Ferry crossing Victoria Harbour since 1888 — HKD 2.70 for one of the world&apos;s most iconic commuter crossings.",
              },
              {
                name: "Temple Street Night Market",
                query: "temple street night market kowloon hong kong evening stalls",
                desc: "Temple Street Night Market in Jordan, Kowloon — the most atmospheric evening market in Hong Kong, with street food stalls, fortune tellers and neon-lit browsing.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hong Kong has extremes at both ends of the budget spectrum. Transport and street food are genuinely cheap — among the most affordable in any major Asian city. Accommodation is where the cost bites. Plan to spend more on where you sleep and less on how you get around.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-yellow-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "HKD $150–220 (hostel dorm)", "HKD $500–700 (3-star hotel)", "HKD $2,500–5,000+ (5-star)"],
                    ["🍽️ Food", "HKD $80–120 (local eateries)", "HKD $200–350 (restaurants)", "HKD $800–2,000 (Michelin)"],
                    ["🚇 Transport", "HKD $50–80 (Octopus MTR/ferry)", "HKD $100–150 (MTR + taxi)", "HKD $500–1,200 (private car)"],
                    ["🎫 Activities", "HKD $100–150", "HKD $200–350", "HKD $500–2,000"],
                    ["TOTAL per day", "HKD $380–570", "HKD $1,000–1,550", "HKD $4,300–10,200"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (HKD $380–570/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms in Mong Kok or TST (HKD 150–220/night), street food and local cha chaan tengs (HKD 50–80/meal), Octopus card for all transport. The Peak Tram (HKD 108) and Ngong Ping cable car (HKD 185) are the main activity costs. Very manageable in a city with this much free content.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (HKD $1,000–1,550/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in TST or Jordan (HKD 500–700/night), mix of local restaurants and one nicer dinner per day (HKD 200–400), MTR and occasional taxi. Comfortably includes a Macau day trip, all main activities and Tim Ho Wan dim sum breakfast.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury (HKD $4,300+/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">The Peninsula or Four Seasons (from HKD 2,500/night), Michelin dinners at T&apos;ang Court or Lung King Heen (HKD 1,200–2,500/person), private harbour junk cruise (HKD 2,000–3,500), Peninsula afternoon tea (HKD 500–700). Hong Kong&apos;s luxury ceiling is effectively unlimited.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hong Kong</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Tsim Sha Tsui (TST) on the Kowloon side is the best all-round base — excellent MTR connections, 5 minutes from the Star Ferry, walking distance to the Symphony of Lights waterfront, and hotels at every price point. Mong Kok suits budget travellers wanting local atmosphere. Central and Wan Chai are convenient but pricier.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Peninsula Hong Kong",
                  type: "5-star luxury · Tsim Sha Tsui, Kowloon",
                  price: "From HKD $3,500/night",
                  badge: "Most iconic",
                  desc: "Hong Kong's most storied hotel, open since 1928 at the southern tip of Kowloon with direct harbour views. The Peninsula is a genuine institution: the Rolls-Royce fleet, the famous lobby afternoon tea (HKD 500–700/person — book weeks in advance), and rooms that face the full Hong Kong Island skyline. Staying here is not just accommodation; it is a Hong Kong experience in itself.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "East Hong Kong",
                  type: "4-star boutique · Taikoo Shing, Island East",
                  price: "From HKD $900/night",
                  badge: "Best mid-range value",
                  desc: "Swire Hotels' design property in Taikoo Shing on Hong Kong Island's east side. Excellent value for quality — stylish rooms, rooftop pool, good on-site dining, and the MTR Taikoo station directly below for easy access to Central and Causeway Bay. Popular with design-conscious travellers who want quality without Peninsula-tier pricing.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Yesinn Hostel",
                  type: "Hostel · Mong Kok, Kowloon",
                  price: "From HKD $160/night (dorm)",
                  badge: "Best budget",
                  desc: "One of Hong Kong's best-regarded hostels with clean dorms, sociable common areas and an excellent Mong Kok location minutes from the MTR Mong Kok station. Private rooms also available (HKD 400–500). The neighbourhood puts you within walking distance of the Ladies' Market, Flower Market, Sneaker Street and some of Hong Kong's best street food.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "The Mira Hong Kong",
                  type: "4-star contemporary · Tsim Sha Tsui, Kowloon",
                  price: "From HKD $700/night",
                  badge: "Great TST location",
                  desc: "Smart, contemporary hotel directly on Nathan Road in central TST. Large rooms by Hong Kong standards, rooftop pool overlooking the Kowloon skyline, and a 5-minute walk to the Star Ferry and Symphony of Lights waterfront. Reliable mid-range choice for first-time Hong Kong visitors who want comfort and location.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hong Kong</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cantonese food culture is Hong Kong&apos;s greatest asset. The city has more Michelin stars per capita than almost any other city in Asia, but its street food and neighbourhood restaurants are just as remarkable. Eat where the queues form, not where the English menus are displayed at the entrance.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Tim Ho Wan",
                  t: "Michelin-starred dim sum · Multiple branches across Hong Kong",
                  d: "The world's cheapest Michelin-starred restaurant. Tim Ho Wan started as a tiny Mong Kok shop in 2009 and still maintains a star while charging HKD 50–80 per dish. The baked BBQ pork buns (not steamed — baked, with a slightly sweet pastry shell) are the signature. Also order: har gow, siu mai, cheung fun. HKD 150–200/person for a full breakfast. Arrive before 10am on weekdays or expect a meaningful wait.",
                  b: "Cheapest Michelin star",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Yung Kee Restaurant",
                  t: "Traditional Cantonese · Wellington Street, Central, HK Island",
                  d: "One of Hong Kong's great old-school Cantonese restaurants, in operation since 1942 and a Michelin Bib Gourmand recipient. The roast goose (siu ngo) is the legendary signature — deep amber skin, tender meat, served with plum sauce and pickled ginger. Also excellent: the century egg with pickled ginger appetiser, clay pot dishes, and congee. HKD 200–400/person. Book for Friday and Saturday evenings.",
                  b: "Best roast goose",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "Ser Wong Fun",
                  t: "Traditional snake soup · Cochrane Street, Central, HK Island",
                  d: "One of Hong Kong's last surviving traditional snake soup restaurants, with roots traced to 1895. Snake soup (se geng) is a centuries-old Cantonese cold-weather tonic — a rich herbal broth with shredded snake meat, wood ear fungus and chrysanthemum petals, finished at the table with a spoonful of chrysanthemum wine. HKD 60–80 per bowl. Also serves congee, roast meats and wonton noodles. Check opening hours before visiting.",
                  b: "Historic Hong Kong",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Cha Chaan Teng (Hong Kong café)",
                  t: "Hong Kong-style café · Neighbourhood institution · everywhere",
                  d: "The cha chaan teng is Hong Kong's most democratic eating institution — every neighbourhood has several. Order: silk stocking milk tea (HKD 20–30), egg tart (dan taat, HKD 8–15), ham and egg sandwich on toast (HKD 30–40), or instant noodles with luncheon meat and a fried egg (HKD 40–55). The staff will be impatient, the tables will be shared and the lighting fluorescent — this is entirely correct and exactly what it should be.",
                  b: "Local institution",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Temple Street Food Stalls",
                  t: "Street food · Jordan, Kowloon · evenings only",
                  d: "The cooked food stalls at the southern end of Temple Street Night Market (near Tin Hau Temple) are among the most atmospheric evening eating in Kowloon. Stalls serve clay pot rice (HKD 45–60), fried rice noodles (HKD 35–50), typhoon shelter prawns in season (HKD 80–150), and tofu fa soy milk pudding (HKD 10). At its best after 8pm when the market is at full energy.",
                  b: "Best street atmosphere",
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
            destination="Hong Kong"
            hotels={[
              {
                name: "The Peninsula Hong Kong",
                type: "5-star luxury · Tsim Sha Tsui",
                price: "From HKD $3,500/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/hk/the-peninsula-hong-kong.html?aid=2820480",
              },
              {
                name: "East Hong Kong",
                type: "4-star boutique · Island East",
                price: "From HKD $900/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/hk/east-hong-kong.html?aid=2820480",
              },
              {
                name: "The Mira Hong Kong",
                type: "4-star · Tsim Sha Tsui",
                price: "From HKD $700/night",
                rating: "4",
                badge: "Great location",
                url: "https://www.booking.com/hotel/hk/the-mira-hong-kong.html?aid=2820480",
              },
              {
                name: "Yesinn Hostel Mong Kok",
                type: "Hostel · Mong Kok, Kowloon",
                price: "From HKD $160/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/hk/yesinn-mongkok.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Victoria Peak Tram + Sky Terrace Ticket",
                duration: "Half day",
                price: "From HKD $108/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=victoria+peak+tram+hong+kong&partner_id=PSZA5UI",
              },
              {
                name: "Hong Kong Night Skyline Harbour Cruise",
                duration: "1 hr",
                price: "From HKD $200/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=hong+kong+harbour+cruise+night&partner_id=PSZA5UI",
              },
              {
                name: "Lantau Big Buddha + Ngong Ping Cable Car Tour",
                duration: "Full day",
                price: "From HKD $350/person",
                url: "https://www.getyourguide.com/s/?q=lantau+big+buddha+hong+kong+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hong Kong Dim Sum and Food Walking Tour",
                duration: "3 hrs",
                price: "From HKD $450/person",
                url: "https://www.getyourguide.com/s/?q=hong+kong+dim+sum+food+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hong Kong</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚡",
                  title: "Not Booking the Peak Tram in Advance",
                  desc: "The Peak Tram queue on weekends and public holidays can stretch to 90 minutes without a pre-booked ticket. Buy online at the official Peak Tram website (HKD 108 return for tram only; HKD 172 return including Sky Terrace 428) to join the significantly shorter pre-booked lane. Go on a clear day — if you can see Kowloon from street level, the view from the top will be exceptional.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🌧️",
                  title: "Going to Victoria Peak on a Cloudy Day",
                  desc: "Hong Kong&apos;s summer months (June–September) bring frequent low cloud that sits exactly at Peak level, obscuring the entire view. October to December typically offers the clearest conditions. Check the Hong Kong Observatory website or app before making the trip up — cloud base below 400m means you will see nothing. Reschedule rather than waste the tram fare.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "💳",
                  title: "Not Getting an Octopus Card at the Airport",
                  desc: "Without an Octopus card you will fumble for exact change at every MTR gate, bus stop, tram and Star Ferry. Get one at the Airport Express Customer Service Centre before leaving arrivals (HKD 150: HKD 50 refundable deposit + HKD 100 usable balance). Top up at any 7-Eleven or MTR machine. Get the deposit refunded at the airport on departure.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🇨🇳",
                  title: "Assuming Hong Kong Rules Are the Same as Mainland China",
                  desc: "Hong Kong has completely separate rules. Most passports enter visa-free (14 days for Indian passport holders; 90 days for US, UK, EU, Australian). Internet is fully unrestricted — no VPN needed, Google and all Western services work normally. Cantonese is the primary language, not Mandarin. The currency is the Hong Kong Dollar, not Renminbi. Crossing to Shenzhen requires a separate Chinese visa.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🍱",
                  title: "Eating Only at Tourist Restaurants Along Nathan Road",
                  desc: "The tourist strip around Nathan Road and the TST harbourfront has overpriced, mediocre food aimed at visitors who don&apos;t know better. Walk 10 minutes into Jordan, Mong Kok or Sham Shui Po for the real Hong Kong: cha chaan tengs, roast meat shops, noodle houses and dim sum parlours where a full meal costs HKD 50–80. The same food at TST tourist restaurants costs HKD 180–250.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hong Kong</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⛴️",
                  title: "The Star Ferry Is the World's Best HKD 2.70 Experience",
                  desc: "Cross Victoria Harbour from Tsim Sha Tsui to Central on the lower deck (HKD 2.70) for the best possible view of the Hong Kong Island skyline from the water. The 8-minute crossing past the IFC, HSBC building and Bank of China tower is one of the genuinely great city experiences on Earth. Do it in both directions. Take it at golden hour, after the Symphony of Lights, and on your last morning. Never skip it for a taxi.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍵",
                  title: "Do Dim Sum Like a Local",
                  desc: "Hong Kong dim sum is best done at a crowded local restaurant on a Sunday morning before 10am — tables will be shared, orders ticked on paper, and it will be very loud. This is correct. Do not go to a place with tourist photos at the entrance. Order har gow, siu mai, cheung fun and char siu bao. Budget HKD 100–150/person. Tim Ho Wan gives you Michelin quality at street-food prices.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌃",
                  title: "Watch Symphony of Lights from the Kowloon Side",
                  desc: "The Symphony of Lights (8pm nightly, free, 13 minutes) illuminates buildings on the Hong Kong Island waterfront. This means you must watch it from the Kowloon side — TST promenade, Avenue of Stars — facing Hong Kong Island. If you stand on Hong Kong Island you are behind the buildings and see nothing. Arrive by 7:45pm to claim a railing spot.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚃",
                  title: "Ride the Ding Ding Tram Along Hong Kong Island",
                  desc: "The Hong Kong Tramways (locally called 'ding dings' for the bell sound) run the length of Hong Kong Island from Kennedy Town to Shau Kei Wan for HKD 3.00 flat fare — one of the world's cheapest rides. Sit on the top deck at the front. The urban cinema experience through narrow colonial streets, wet markets and neon signs is one of the best in Asia. Pay by Octopus card as you exit.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗺️",
                  title: "Use the MTR and Octopus Card for Everything",
                  desc: "The Hong Kong MTR is one of the world's most efficient metro systems — clean, air-conditioned, punctual, and covering virtually every neighbourhood you need. Combined with the Octopus card (which also works on buses, trams, minibuses and the Star Ferry) you can navigate the entire city without ever taking a taxi except for the airport in a hurry.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📱",
                  title: "Get a Local SIM or eSIM Before You Arrive",
                  desc: "Hong Kong has excellent and very affordable mobile data. A local SIM from the airport or any 7-Eleven costs HKD 50–80 for 7 days unlimited data. Alternatively, activate a Hong Kong eSIM before departure (Airalo, Holafly). Fast mobile data is essential for Google Maps navigation. Unlike mainland China, everything works without any VPN — Google Maps, Google Search, Gmail, WhatsApp, Instagram.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hong Kong" />

          {/* Combine With */}
          <CombineWith currentSlug="hong-kong-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Hong Kong expensive to visit?",
                  a: "Hong Kong has extremes at both ends. Transport — the MTR, Star Ferry (HKD 2.70), trams (HKD 3.00), buses — is genuinely cheap, and street food and local cha chaan tengs offer full meals for HKD 50–80. What is expensive is accommodation: Hong Kong's hotel rooms are notoriously small and costly by global standards. Budget travellers should use hostels in Mong Kok (HKD 150–220 per dorm night). The city is completely manageable on HKD 450/day or can be enjoyed on HKD 3,000+/day — both are valid approaches.",
                },
                {
                  q: "Do I need a VPN in Hong Kong?",
                  a: "No. Hong Kong has completely unrestricted internet access — Google, Gmail, WhatsApp, Instagram, YouTube, X (Twitter) and all Western services work normally without any VPN. This is entirely different from mainland China. If you plan to cross into Shenzhen or elsewhere in mainland China, install a VPN before leaving home — but you will not need it at any point during your Hong Kong stay.",
                },
                {
                  q: "How do I get from Hong Kong to mainland China?",
                  a: "To Shenzhen: take the MTR East Rail Line to Lo Wu or Lok Ma Chau border crossing (about 50 min from Kowloon Tong, HKD 46) — border open 6:30am–midnight daily. To Guangzhou: MTR to Hung Hom then the Express Rail Link high-speed train to Guangzhou South (48 min, HKD 242). To other mainland cities: fly from HKG. Note that a valid Chinese visa is required for all mainland China entry, even if you entered Hong Kong visa-free.",
                },
                {
                  q: "What is the best area to stay in Hong Kong?",
                  a: "Tsim Sha Tsui (TST) in Kowloon is the best all-round base: excellent MTR connections, 5 minutes from the Star Ferry, walking distance to the Symphony of Lights waterfront, and hotels at every price point. Mong Kok suits budget travellers who want local atmosphere and street food proximity. Central on Hong Kong Island is close to the Peak Tram but pricier. For a harbour-view room on the Kowloon side facing Hong Kong Island, the premium is genuinely worth it.",
                },
                {
                  q: "Can I do Macau as a day trip from Hong Kong?",
                  a: "Yes, easily. TurboJet and Cotai Water Jet ferries run from the Macau Ferry Terminal in Sheung Wan (Central) and from the Tung Chung Ferry Terminal near the airport. Journey time is 55–75 minutes, cost HKD 180–220 each way. Most travellers visit in a single day: Ruins of St Paul's (free), Senado Square (free), the Venetian Macao casino floor (free to walk through) and egg tarts from Lord Stow's Bakery in Coloane Village. Last ferries back to Hong Kong run until approximately midnight.",
                },
                {
                  q: "How does the Octopus card work and where do I get one?",
                  a: "The Octopus card is a rechargeable contactless smartcard that works on the MTR, buses, trams, Star Ferry, minibuses, and at 7-Eleven, McDonald's, Wellcome, Park N Shop and many other shops. Get one at the Airport Express Customer Service Centre in arrivals before leaving HKG (HKD 150: HKD 50 refundable deposit + HKD 100 usable balance). Top up at any MTR customer service machine, 7-Eleven or Circle K. Refund the remaining balance and deposit at the airport before departure.",
                },
              ].map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hong Kong trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hong-kong-budget-guide", label: "Budget guide", icon: "💰" },
                { href: "/blog/hong-kong-food-guide", label: "Food guide", icon: "🍜" },
                { href: "/blog/hong-kong-day-trips", label: "Day trips", icon: "🗺️" },
                { href: "/blog/hong-kong-visa-guide", label: "Visa info", icon: "📋" },
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
          <RelatedGuides currentSlug="hong-kong-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More East Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo in 5 Days — Temples &amp; Neon", href: "/blog/tokyo-5-days" },
                { label: "Taipei in 4 Days — Night Markets &amp; Mountains", href: "/blog/taipei-4-days" },
                { label: "Seoul in 5 Days — Palaces &amp; Street Food", href: "/blog/seoul-5-days" },
                { label: "Guilin in 3 Days — Karst Peaks &amp; the Li River", href: "/blog/guilin-3-days" },
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
