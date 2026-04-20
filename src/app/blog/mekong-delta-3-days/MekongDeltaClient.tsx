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
const MEKONG_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What the Mekong Delta Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚌",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "markets",     emoji: "🛶",  label: "Floating Markets Guide" },
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
          href: `mailto:?subject=Mekong Delta 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mekong Delta in 3 Days — floating markets, river canals and coconut country&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mekong-delta-3-days"
        imageUrl="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
        description="Mekong Delta in 3 Days: Cai Rang floating market at dawn, Ben Tre coconut canals, Can Tho riverside — complete travel guide with budget breakdown."
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
export default function MekongDeltaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MEKONG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mekong Delta" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mekong delta vietnam floating market boat river sunrise"
            fallback="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
            alt="Mekong Delta Vietnam floating market vendors selling from boats on the river at sunrise"
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
              <span className="text-white/70">Mekong Delta 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Southeast Asia
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mekong Delta in 3 Days:
                <em className="italic text-amber-300"> Floating Markets, River Villages &amp; Coconut Country</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Cai Rang at 5am before the tourist boats arrive, Ben Tre&apos;s coconut canals by rowing boat, and Can Tho&apos;s riverside night markets. The complete guide from $22/day.
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
              <span>🇻🇳 Vietnam</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $22/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Mekong Delta at 5am — a speedboat cutting through mist toward Cai Rang floating market, vendors calling out from wooden boats hung with the day&apos;s produce, the river smelling of rain and river fish and woodsmoke — is one of the most authentically Vietnamese experiences left in the country.
            </p>
          </blockquote>

          {/* ── WHAT THE MEKONG DELTA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Mekong Delta Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Mekong Delta is the southernmost tip of Vietnam — a vast, flat, impossibly fertile network of rivers, canals, swamps and islands where the Mekong River splits into nine tributaries (the Vietnamese call it Cuu Long, &quot;Nine Dragons&quot;) and flows into the South China Sea. It produces over half of Vietnam&apos;s rice and most of its fruit, fish and flowers. Forty million people live here, many of them on the water itself.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Can Tho is the delta&apos;s largest city and the natural base for exploring the region. From here, the Cai Rang floating market — the biggest in the delta — is a 20-minute speedboat ride down the Can Tho River. Ben Tre Province, an hour east, is the coconut capital of Vietnam: narrow palm-lined canals, cottage industries of coconut candy and rice paper, and mangrove channels passable only by rowing boat.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you the floating market at dawn (before the tourist armada arrives at 8:30am), a full day lost in Ben Tre&apos;s coconut country, and a slow final morning exploring Can Tho&apos;s wet markets, colonial architecture and riverside culture. This is not a rushed day trip from Ho Chi Minh City — this is the Mekong done properly.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚌" label="From HCMC" value="2.5–3 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🛶" label="Markets" value="Cai Rang + Phong Dien" />
              <StatCard icon="💰" label="Budget From" value="$22/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Mekong Delta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "25–30°C, low humidity, almost no rain. The floating markets are at their most active, river levels are manageable for sampan boats, and the mosquito situation is at its mildest. December–January is peak tourist season but the delta never feels crowded compared to Hanoi or Hoi An.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Late Dry Season — Hot but Good",
                  d: "30–35°C, humidity rising but still dry. Fruit season begins — durian, rambutan, mangosteen, dragon fruit are all in season and available at the floating markets. The heat is manageable on the water where river breezes help. Early morning market visits are comfortable.",
                  b: "Fruit season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Aug",
                  i: "🌧️",
                  t: "Wet Season — Challenging",
                  d: "Daily afternoon downpours, sometimes heavy flooding in lower-lying areas. River levels rise significantly, which can make some narrow canals in Ben Tre inaccessible. The floating markets still operate but the experience is less enjoyable in heavy rain. Mosquitoes are aggressive near waterways.",
                  b: "Not ideal",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌊",
                  t: "Flood Season — Avoid",
                  d: "Peak flooding season in the delta. Some roads become impassable, river currents are stronger, and the floating markets may reduce operations. However, the flood season has its own beauty — vast sheets of water covering rice paddies, fishing villages adapting to the annual cycle. Only for experienced travellers.",
                  b: "For adventurers only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting to the Mekong Delta</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The Mekong Delta&apos;s main hub is <strong className="font-medium">Can Tho</strong>, 170km southwest of Ho Chi Minh City. There is no railway to the delta. All access is by road (bus, private car) or, for luxury travellers, helicopter charter.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "FUTA/Phuong Trang Bus (recommended budget)",
                  d: "From Mien Tay bus terminal in HCMC to Can Tho: VND 150,000 ($6), every 30 minutes, 2.5–3 hours. Modern air-conditioned buses with reclining seats, WiFi and USB charging. The most popular and reliable option. Take a Grab from your HCMC hotel to Mien Tay terminal ($5–8).",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Private car transfer",
                  d: "Door-to-door from HCMC to Can Tho: $60–80 for the vehicle (2.5 hours, comfortable). Worth splitting between 2–3 people at $20–27/person. Book through your hotel or a reputable transfer service. The driver waits while you stop for photos at the My Thuan Bridge — the first bridge ever built across the Mekong main channel.",
                  b: "Most comfortable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚐",
                  t: "Tourist minibus from HCMC",
                  d: "Several operators run direct minibuses from the Pham Ngu Lao backpacker district to Can Tho ($8–12, 3–3.5 hours). Convenient pickup but slower than FUTA due to multiple hotel stops. Avoid the $30–60 pre-packaged day tours that include transport — they arrive too late for the dawn market.",
                  b: "Convenient pickup",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚁",
                  t: "Helicopter charter (luxury)",
                  d: "Private helicopter from SGN to Can Tho: $600–900 for the aircraft, 40 minutes. Spectacular aerial views of the delta&apos;s waterway network from above. Available through select charter operators. Split 4 ways: $150–225/person.",
                  b: "Scenic splurge",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Mekong Delta Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is built around the 4:30am Cai Rang departure — the single most important timing decision of the entire trip. Everything else flows from getting that right.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Can Tho + Ninh Kieu Wharf Evening"
                cost="$15–25 (bus + accommodation + dinner)"
                items={[
                  "Arrive Can Tho by FUTA bus from Ho Chi Minh City (depart HCMC by 2–3pm, arrive 5–5:30pm). VND 150,000 ($6). Book your Can Tho guesthouse in the Ninh Kieu district — budget options $10–20/night, most within walking distance of the pier.",
                  "Check in and drop bags, then walk to Ninh Kieu Wharf (free) on the Can Tho River. At sunset, the riverside promenade fills with locals — families, couples, street food stalls selling banh mi and freshly squeezed sugar cane juice (VND 10,000 / $0.50).",
                  "Dinner at the Ninh Kieu Night Market ($1–3 per dish) — the wet market stalls serve elephant fish (ca tai tuong) deep-fried whole and morning glory stir-fried with garlic. Order by pointing. Total dinner budget: VND 75,000–150,000 ($3–6).",
                  "Set your alarm for 4:15am. The single most important act of your Mekong Delta trip is leaving Can Tho pier by 4:30am to reach Cai Rang at first light. This is non-negotiable — every hour after dawn the market loses its authenticity to tour boats.",
                  "Before bed: buy water and snacks at a convenience store near the market (VND 25,000 / $1). Guesthouses can arrange a local boat for the morning (VND 200,000–300,000 / $8–12 per person for a shared boat), or negotiate at the pier yourself at 4:30am.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Cai Rang Floating Market (5am) + Ben Tre Coconut Country"
                cost="$20–35 (boat + transport + meals + guesthouse)"
                items={[
                  "4:30am — Leave Can Tho pier by speedboat. The 20-minute ride to Cai Rang in the dark with mist on the water is itself one of the great travel moments in Southeast Asia. Cost: VND 200,000–375,000 ($8–15) per person on a local shared boat.",
                  "5:00–8:00am — Cai Rang Floating Market. Hundreds of wooden boats laden with watermelons, pineapples, durian, pomelos, ginger — each boat advertises its product by hanging a sample on a tall pole at the bow. Buy coffee from the floating cafe boat (VND 10,000 / $0.50) and drift through the wholesale trade.",
                  "Leave by 8am sharp — the tourist speedboats arrive at 8:30am and transform the market into chaos. The floating market is evolving (supermarkets are replacing retail) but the wholesale trade at dawn is genuinely active and authentically commercial.",
                  "Return to Can Tho for breakfast: bun bo Hue or pho at a street stall near the market (VND 35,000 / $1.50). Check out and store bags at your guesthouse.",
                  "Take a local bus or minivan to Ben Tre Province (VND 50,000 / $2, 45 minutes). The road crosses the My Thuan Bridge — the first bridge ever built across the Mekong main channel, opened in 2000.",
                  "Ben Tre afternoon: hire a local rowing boat (sampan) for a 2-hour tour through the coconut palm-lined canals and mangroves (VND 375,000–500,000 / $15–20). This — not the floating market — is the most peaceful experience in the Delta. Ask specifically for a rowing boat (xuong cheo), not a motorboat.",
                  "Visit a coconut candy workshop on the canal banks (free — the workers are used to visitors). Watch candy being made from coconut milk and sugar, rolled by hand. Buy a bag for VND 25,000–50,000 ($1–2). Also stop at a rice paper making village — thin rice paper dried on bamboo racks in the sun.",
                  "Evening: Vinh Trang Pagoda (free entry, 5 minutes from Ben Tre town) — the most eclectic Buddhist temple in southern Vietnam, mixing French colonial architecture, Chinese ornamental detail, and Vietnamese Mahayana Buddhist iconography. The giant Buddha statues at the entrance are unmissable.",
                  "Sleep in Ben Tre ($12–18/night at a local guesthouse) or return to Can Tho for the final day.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Can Tho Markets + Return to Ho Chi Minh City"
                cost="$10–20 (market + lunch + bus + transfers)"
                items={[
                  "Morning: return to Can Tho or start there if you stayed. Walk the Ninh Kieu riverside in the daytime — completely different atmosphere to the evening, with fishing boats unloading their catch at the wholesale fish market on the embankment.",
                  "Can Tho Market (Cho Can Tho): the covered wet market a block from the riverside. Buy Mekong Delta specialties to take home — dried shrimp (VND 50,000/bag), lotus seeds (VND 35,000), coconut sweets from Ben Tre (VND 25,000–50,000), fresh durian in season (VND 35,000/kg).",
                  "Lunch near the market: com tam (broken rice with grilled pork, fried egg, pickled vegetables, VND 35,000–60,000 / $1.50–2.50) — this is southern Vietnam&apos;s most beloved lunch dish and the Can Tho version is exceptional.",
                  "Optional: Binh Thuy Ancient House (free, 4km from center, Grab VND 35,000 / $1.50) — a 19th-century Vietnamese merchant&apos;s home preserved perfectly, used as a film location for L&apos;Amant (The Lover, 1992). The French colonial-Vietnamese hybrid architecture is genuinely beautiful.",
                  "Afternoon bus back to HCMC: FUTA/Phuong Trang from Can Tho bus terminal (VND 150,000 / $6, depart 2–3pm, arrive 5:30–6pm at Mien Tay terminal or direct to District 1). If flying home from SGN: take a Grab from the drop-off to the airport (VND 150,000–250,000 / $6–10, 30–60 minutes depending on traffic).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mekong Delta" onPlanTrip={() => setModalOpen(true)} />

          {/* ── FLOATING MARKETS GUIDE ── */}
          <section id="markets" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛶 Floating Markets Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The floating markets are the Mekong Delta&apos;s signature experience. Two markets are accessible from Can Tho — Cai Rang (larger, more famous, 20 minutes by boat) and Phong Dien (smaller, quieter, 30 minutes by boat). Arriving before 7am at either is essential.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cai Rang Floating Market",
                  e: "Free (boat hire VND 200,000–375,000/person)",
                  d: "The largest floating market in the Mekong Delta and the most famous in Vietnam. Hundreds of wholesale boats trade fruit, vegetables and produce from 5am to 8am daily. Each boat advertises its product by hanging a sample on a tall pole (cay beo). The wholesale trading between boat vendors is the real spectacle — arrive by 5am to see it at its most active. By 8:30am, tourist speedboats dominate.",
                  t: "Must see · 5am–8am",
                },
                {
                  n: "Phong Dien Floating Market",
                  e: "Free (boat hire VND 250,000–375,000/person)",
                  d: "Smaller and often considered more authentic than Cai Rang — fewer tour boats, more local produce buyers. 30 minutes by boat from Can Tho, best visited on the morning of Day 3. The market sells vegetables, fruit, and noodle soup from floating kitchen boats. Combine with a canal tour through the surrounding orchards.",
                  t: "More authentic · 6am–8am",
                },
                {
                  n: "Ben Tre Coconut Canals",
                  e: "Sampan boat VND 375,000–500,000 (2 hours)",
                  d: "Not a market but the delta&apos;s most atmospheric boat experience. Narrow canals lined with coconut palms and nipa palms, so narrow in places the fronds form a canopy overhead. Only accessible by rowing boat (sampan). Stop at coconut candy workshops and rice paper villages along the way. The silence — broken only by birdsong and paddle strokes — is the opposite of the market energy.",
                  t: "Most peaceful · 2 hrs",
                },
                {
                  n: "Floating Cafe Boats",
                  e: "VND 10,000–25,000 per drink",
                  d: "Small wooden boats that motor through the floating markets selling ca phe sua da (Vietnamese iced coffee with condensed milk), banh mi, and fresh fruit. Pulling alongside one of these and buying a coffee while drifting through the market is one of the small pleasures of the Mekong. Look for the boats with the coffee thermos hung at the bow.",
                  t: "Fun detail · at the markets",
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
            title="Mekong Delta — Rivers, Markets &amp; Coconut Country"
            subtitle="The nine-dragon river delta at its most atmospheric."
            spots={[
              {
                name: "Cai Rang Floating Market at Dawn",
                query: "cai rang floating market can tho mekong delta vietnam boats sunrise",
                desc: "Hundreds of wooden boats laden with produce at the largest floating market in the Mekong Delta — best experienced before 7am.",
              },
              {
                name: "Ben Tre Coconut Palm Canals",
                query: "ben tre coconut palm canal mekong delta vietnam sampan boat",
                desc: "Narrow waterways lined with coconut palms in Ben Tre Province — the most peaceful boat ride in the delta.",
              },
              {
                name: "Ninh Kieu Wharf Can Tho",
                query: "ninh kieu wharf can tho mekong delta vietnam riverside evening",
                desc: "The riverside promenade in Can Tho — the delta&apos;s largest city and the natural base for exploring the region.",
              },
              {
                name: "Vinh Trang Pagoda",
                query: "vinh trang pagoda my tho mekong delta vietnam buddhist temple",
                desc: "Southern Vietnam&apos;s most eclectic Buddhist temple — French colonial meets Chinese ornamental meets Vietnamese Mahayana.",
              },
              {
                name: "Mekong River Life",
                query: "mekong delta river village life vietnam boats houses water",
                desc: "Daily life on the Mekong — floating houses, fishing boats, and communities built on and around the water.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Mekong Delta is one of the cheapest destinations in Southeast Asia. The main costs are boat hire for the floating markets and transport from HCMC. Food, accommodation and activities in the delta itself are remarkably affordable — street food meals cost $1–3 and guesthouses start at $10/night.
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
                    ["🏨 Accommodation", "$10–20/night", "$30–70/night", "$150–300/night"],
                    ["🍽 Food", "$5–10/day", "$15–30/day", "$40–80/day"],
                    ["🚌 Transport", "$3–8/day", "$10–20/day", "$50–150/day"],
                    ["🛶 Activities", "$8–15/day", "$15–30/day", "$60–120/day"],
                    ["TOTAL (per person)", "$22–40/day", "$70–130/day", "$250–600/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($22–40/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Ninh Kieu district guesthouses ($10–20/night), eat at street stalls and wet markets ($1–3/meal), shared boats for the floating market. Completely comfortable and authentic — the budget experience in the Mekong is often better than the expensive one.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($70–130/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Victoria Can Tho or Azerai Can Tho ($80–150/night), private boat to Cai Rang with a guide, private car transfers. The sweet spot for comfort — your hotel handles all the early-morning logistics for the floating market.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($250–600/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Azerai Can Tho&apos;s best suites, private speedboat with senior guide, full-day Ben Tre by private longtail boat, cooking demonstrations, spa treatments. The delta&apos;s luxury infrastructure is modest but what exists is excellent.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Mekong Delta</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Can Tho is the best base — the Ninh Kieu district puts you within walking distance of the pier (for the 4:30am Cai Rang departure), the night market, and the riverside promenade. Ben Tre has simpler guesthouse options for a quieter overnight.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Azerai Can Tho",
                  type: "Luxury resort · Can Tho riverfront",
                  price: "From $100–150/night",
                  badge: "Most luxurious",
                  desc: "The finest property in the Mekong Delta — a riverside resort with pool, spa, and private boat dock for seamless early-morning market departures. Modern Vietnamese design with exceptional service. The restaurant serves elevated Mekong cuisine using local ingredients.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Victoria Can Tho Resort",
                  type: "Upscale resort · Can Tho River",
                  price: "From $80–120/night",
                  badge: "Best mid-range",
                  desc: "Colonial-style resort on the Can Tho River with pool, river-view rooms, and their own boats for the floating market. The hotel arranges Cai Rang visits with reliable local boatmen — the logistics become seamless. Excellent breakfast buffet included.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Nam Bo Boutique Hotel",
                  type: "Boutique · Ninh Kieu district",
                  price: "From $50–80/night",
                  badge: "Best location",
                  desc: "A beautifully restored French colonial building right on the Ninh Kieu waterfront. Small (just 12 rooms) with character and river views from the rooftop restaurant. Walking distance to the pier, night market, and Can Tho Market. The rooftop bar at sunset is the best in Can Tho.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Ninh Kieu District Guesthouses",
                  type: "Budget · Can Tho central",
                  price: "$10–20/night",
                  badge: "Best budget",
                  desc: "Several clean, simple guesthouses clustered in the Ninh Kieu district within 5 minutes of the pier. Basic but everything you need: air conditioning, hot water, WiFi. The owners can arrange Cai Rang boats and Ben Tre transport. Book a room facing away from the street for better sleep before the 4am alarm.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Ben Tre Homestays",
                  type: "Homestay · Ben Tre Province",
                  price: "$15–30/night",
                  badge: "Most authentic",
                  desc: "Family-run homestays in the coconut groves of Ben Tre — sleep in a traditional Vietnamese house surrounded by fruit orchards, eat home-cooked delta meals, and wake up to roosters and river sounds. The most immersive Mekong experience. Several are accessible only by boat.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Mekong Delta</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Mekong Delta is one of Vietnam&apos;s great food regions. The delta&apos;s cuisine revolves around river fish, tropical fruit, coconut, and fermented fish paste (mam) — dishes you will not find this authentic anywhere else in Vietnam. The best food costs $1–3 at market stalls and plastic-stool restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ninh Kieu Night Market",
                  t: "Street food · Can Tho riverside",
                  d: "The evening market along the waterfront is the best place for your first Mekong meal. Try ca tai tuong (elephant ear fish, deep-fried whole and served with rice paper and herbs, VND 80,000–120,000), morning glory stir-fried with garlic (VND 25,000), and banh xeo (crispy Vietnamese crepes, VND 15,000–25,000). Order by pointing at what looks good.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Can Tho Market (Cho Can Tho)",
                  t: "Wet market · Central Can Tho",
                  d: "The covered market a block from the riverside has food stalls at the edges serving com tam (broken rice, VND 35,000), bun mam (fermented fish noodle soup unique to the delta, VND 35,000), and hu tieu (southern Vietnamese pork noodle soup, VND 30,000). Eat where the locals eat — the stalls with the longest queues at lunchtime.",
                  b: "Best local food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Nam Bo Boutique Hotel Rooftop",
                  t: "Upscale Vietnamese · Ninh Kieu",
                  d: "The rooftop restaurant at Nam Bo serves elevated Vietnamese cuisine with river views — Mekong river prawn, lotus root salad, clay pot catfish. VND 200,000–400,000 ($8–16) per person. The sunset cocktails on the terrace are the best in Can Tho. Worth one splurge dinner.",
                  b: "Best views",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Spice Restaurant (Victoria Can Tho)",
                  t: "Hotel dining · Victoria Resort",
                  d: "The restaurant at Victoria Can Tho serves refined Mekong Delta cuisine — river fish, tropical fruit desserts, and a strong wine list. VND 400,000–800,000 ($16–32) per person. The terrace overlooking the river at night is atmospheric. Ideal for a celebration dinner on Day 2.",
                  b: "Fine dining",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Ben Tre Riverside Restaurants",
                  t: "Local seafood · Ben Tre town",
                  d: "Small riverside restaurants in Ben Tre town serve freshly caught Mekong catfish grilled over charcoal (VND 80,000–150,000), coconut-steamed river prawns, and lau mam (fermented fish hotpot, VND 120,000 for two). Simple, plastic-stool settings with extraordinary food. Ask your boat driver or guesthouse for recommendations.",
                  b: "Freshest fish",
                  c: "bg-teal-50 border-teal-200",
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
            destination="Mekong Delta Vietnam"
            hotels={[
              {
                name: "Azerai Can Tho",
                type: "Luxury riverside resort with pool and spa",
                price: "From $100/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/vn/azerai-can-tho.html?aid=2820480",
              },
              {
                name: "Victoria Can Tho Resort",
                type: "Colonial-style resort on the Can Tho River",
                price: "From $80/night",
                rating: "5",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/vn/victoria-can-tho.html?aid=2820480",
              },
              {
                name: "Nam Bo Boutique Hotel",
                type: "Boutique hotel in restored French colonial building",
                price: "From $50/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/vn/nam-bo-boutique-can-tho.html?aid=2820480",
              },
              {
                name: "Homestay Ben Tre",
                type: "Authentic family homestay in coconut groves",
                price: "From $15/night",
                rating: "4",
                badge: "Most authentic",
                url: "https://www.booking.com/region/vn/ben-tre.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cai Rang Floating Market Sunrise Tour",
                duration: "5 hrs",
                price: "From $15/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=cai+rang+floating+market+can+tho&partner_id=PSZA5UI",
              },
              {
                name: "Ben Tre Coconut Village Day Trip",
                duration: "8 hrs",
                price: "From $25/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=ben+tre+coconut+village+mekong&partner_id=PSZA5UI",
              },
              {
                name: "Mekong Delta 2-Day Tour from HCMC",
                duration: "2 days",
                price: "From $45/person",
                url: "https://www.getyourguide.com/s/?q=mekong+delta+2+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Can Tho Cycling &amp; Cooking Class",
                duration: "6 hrs",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=can+tho+cycling+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Mekong Delta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⏰",
                  title: "Cai Rang means 4:30am departure from Can Tho",
                  desc: "The floating market is 6km from Can Tho, 20 minutes by speedboat. Peak activity is 5:00–7:30am when wholesale transactions happen boat-to-boat. By 8am the market is winding down; by 8:30am it&apos;s tourist speedboats. Leave Can Tho pier no later than 4:30am. Confirm the exact departure time with your guesthouse the night before — not &apos;early morning&apos;, an actual time.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚣",
                  title: "Ben Tre: rowing boat, not motorboat",
                  desc: "Ben Tre&apos;s narrowest canals — where coconut palms form a canopy overhead and the silence is complete except for birdsong and water — are only accessible by manual rowing boat (sampan). A motorboat is faster but destroys the atmosphere and scares the birds. Ask specifically for a rowing boat (xuong cheo). It costs the same (VND 100,000–200,000/hour) and is a completely different experience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍽️",
                  title: "Eat at wet markets, not tourist restaurants",
                  desc: "The best Mekong food costs VND 25,000–75,000 ($1–3) and is served from plastic stools in wet markets. Ca kho to (caramelised catfish in clay pot), bun mam (fermented fish noodle soup unique to the delta), and lau mam (fermented fish hot pot for two) are dishes you won&apos;t find this authentic outside the Mekong. Tourist-facing restaurants near Ninh Kieu Wharf charge 3x for the same quality.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🦟",
                  title: "DEET 30%+ mosquito repellent is essential",
                  desc: "The delta is a network of still and slow-moving waterways — ideal mosquito habitat. Dusk and dawn (exactly when you&apos;re at the market or on canal boats) are peak biting hours. Bring DEET 30%+ repellent from HCMC before you arrive — the local brands in the delta are less effective. Wear long sleeves for the 4:30am boat ride.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💵",
                  title: "Carry VND cash, not USD",
                  desc: "The delta is largely a cash economy. ATMs exist in Can Tho and Ben Tre town centers but are sparse elsewhere. Market vendors, boat operators and guesthouses outside Can Tho rarely accept cards. Withdraw enough VND in HCMC or at Can Tho ATMs before heading to the canals. Budget VND 1,500,000–2,000,000 ($60–80) in cash for a 3-day trip.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Download Grab before leaving HCMC",
                  desc: "Grab (Vietnam&apos;s ride-hailing app) works in Can Tho and is the cheapest, safest way to get around the city — VND 15,000–40,000 ($0.60–1.60) for most trips within Can Tho. It does not work in rural areas or Ben Tre&apos;s canals. Have the app installed and a Vietnamese SIM card with data before you leave HCMC. A local SIM costs VND 100,000 ($4) at the airport.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mekong Delta" />

          {/* Combine With */}
          <CombineWith currentSlug="mekong-delta-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can you do the Mekong Delta as a day trip from Ho Chi Minh City?",
                  a: "Technically yes — Can Tho is 2.5–3 hours by bus each way, making a 12-hour day trip possible. But this is the wrong way to experience the Delta. The floating market operates from 5–8am, which is only accessible if you overnight in Can Tho. Day-trippers arrive to a market that\u0027s winding down and packed with tourist boats. One night in Can Tho transforms the trip entirely — budget guesthouses cost $10–20/night.",
                },
                {
                  q: "What is the best time of year to visit the Mekong Delta?",
                  a: "November through April is the dry season and best time to visit. The delta is navigable year-round, but the rainy season (May–October) brings daily downpours, occasional flooding of lower-lying canals, and more intense mosquito activity. The floating market operates all year. February–March, just after Tet (Vietnamese Lunar New Year), the delta is particularly alive with festival activity.",
                },
                {
                  q: "Do Indian passport holders need a visa for Vietnam?",
                  a: "Yes. Indian passport holders need a Vietnam e-visa, available online at evisa.xuatnhapcanh.gov.vn. Cost: $25 USD, processing time 3 business days. Valid for 90 days, choose multiple-entry even for a single trip. The e-visa is sufficient for all of Vietnam including the Mekong Delta — no additional permits required.",
                },
                {
                  q: "Is the Mekong Delta floating market dying out?",
                  a: "The floating markets are changing, not dying. The wholesale commercial function (boat-to-boat bulk trading of produce) still happens at Cai Rang every morning — local farmers and traders still come at 5am. What has declined is the retail floating market (buying individual produce from boats) as supermarkets have replaced this for most locals. The market at dawn is still genuinely active and authentically commercial — just arrive early.",
                },
                {
                  q: "How much does a boat to Cai Rang floating market cost?",
                  a: "A shared local boat from Can Tho pier to Cai Rang costs VND 200,000–375,000 ($8–15) per person for a 3–4 hour trip including market visit and return. A private boat for your group costs VND 500,000–800,000 ($20–32) total. Mid-range and luxury hotels arrange private boats with guides for $25–60 per person. Negotiate the price and exact departure time the night before — and confirm the 4:30am start.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mekong Delta trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-mekong-delta", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mekong-delta-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-mekong-delta", label: "How to get there", icon: "✈️" },
                { href: "/blog/mekong-delta-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="mekong-delta-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Angkor Wat 4 Days — Temples &amp; Sunrise", href: "/blog/angkor-wat-4-days" },
                { label: "Luang Prabang 4 Days — Monks &amp; Mekong", href: "/blog/luang-prabang-4-days" },
                { label: "Chiang Mai 4 Days — Temples &amp; Markets", href: "/blog/chiang-mai-4-days" },
                { label: "Bagan 4 Days — Pagodas &amp; Plains", href: "/blog/bagan-4-days" },
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
