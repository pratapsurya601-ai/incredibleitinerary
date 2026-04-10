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
const MALDIVES_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Maldives Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "getting",    emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "activities", emoji: "🐠",  label: "Island & Activity Guide" },
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
          href: `mailto:?subject=Maldives 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Maldives in 5 Days — local islands, overwater villas and turquoise lagoons&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/maldives-5-days"
        imageUrl="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80"
        description="Maldives in 5 Days: Local islands for $80/day vs overwater villa resorts, Maafushi snorkelling, whale sharks, and the complete budget-to-luxury guide."
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
export default function MaldivesClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MALDIVES_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Maldives" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="maldives overwater bungalow turquoise lagoon coral reef"
            fallback="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80"
            alt="Maldives overwater bungalow villa above turquoise lagoon with coral reef below"
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
              <span className="text-white/70">Maldives 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Indian Ocean Paradise
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Maldives in 5 Days:
                <em className="italic text-amber-300"> Local Islands vs Resorts, Budget to Luxury</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,200 islands, 99% water, overwater villas and a $80/day local island secret. The complete guide to doing the Maldives on any budget.
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
              <span>🇲🇻 Maldives</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Maldives is 1,200 islands and atolls scattered across the Indian Ocean — 99% water, 1% land. The overwater bungalow dream is real, but so is the secret most travel agents don&apos;t want you to know: local islands like Maafushi give you the same crystal lagoons, the same house reef snorkelling, and the same white sand beaches for 90% less than a resort. Both versions are extraordinary.
            </p>
          </blockquote>

          {/* ── WHAT THE MALDIVES ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Maldives Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Maldives is the world&apos;s lowest-lying country — an archipelago of 26 atolls forming a double chain across the equator in the Indian Ocean. Of the 1,200 islands, roughly 200 are inhabited and around 160 are resort islands. The country sits on ancient coral reefs, which means the water clarity is extraordinary: 20 to 40 metres of visibility on a good day. The house reefs surrounding most islands are alive with green sea turtles, reef sharks, manta rays, and hundreds of species of coral fish.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Here is the real cost picture. Before 2010, the Maldives was exclusively a luxury destination — only resorts on private islands were available. Then the government opened local islands to tourism. Guesthouses appeared on inhabited islands like Maafushi, Thulusdhoo, and Dhigurah, and suddenly the Maldives became accessible to budget travellers. Today you have two parallel experiences: local island stays at $40 to $80 per night with the same ocean and the same reefs, or private resort islands at $500 to $5,000 per night with overwater villas, private butlers, and cocktails at sunset. The water is the same water. The fish are the same fish.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The main practical difference between local islands and resorts: the Maldives is a Muslim country. Alcohol is prohibited on all inhabited local islands — no exceptions. Resorts on private uninhabited islands are exempt and serve alcohol freely. Bikinis are restricted to designated bikini beaches on local islands but are unrestricted at resorts. If cocktails and unrestricted swimwear matter to you, resorts are the way to go. If the ocean, the reefs, and the white sand are what you came for, local islands deliver the same experience at a fraction of the price.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MLE (Velana)" />
              <StatCard icon="🌡️" label="Best Season" value="Nov – Apr" />
              <StatCard icon="🏝️" label="Islands" value="1,200+" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Maldives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "Northeast monsoon. Calm seas, excellent underwater visibility (20–40m), reliable sunshine, and the best conditions for snorkelling, diving, and island hopping. December to February is peak season — highest prices and most crowds. November and April are excellent value months with fewer tourists and the same weather.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Oct",
                  i: "🌧️",
                  t: "Wet Season — Cheaper but Rougher",
                  d: "Southwest monsoon brings heavy rain, rougher seas, and reduced visibility. Excursions and speedboat transfers may be cancelled on bad days. However, resort prices drop 30 to 50 percent, and May to November is whale shark season at South Ari Atoll (Dhigurah) — the best time to swim with the giants.",
                  b: "Budget-friendly",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Nov & Apr",
                  i: "🌅",
                  t: "Shoulder Months — Sweet Spot",
                  d: "November and April sit between the monsoons. Weather is generally dry with occasional rain. Prices are 20 to 30 percent lower than December to February peak. Visibility is excellent, seas are calm, and tourist numbers are manageable. These two months represent the best value in the Maldives.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🏖️",
                  t: "Peak Season — Premium Prices",
                  d: "The driest, calmest months with the best visibility and most reliable weather. This is when the Maldives looks like the postcards. Expect resort prices at their highest, popular guesthouses on Maafushi fully booked, and excursions running at maximum capacity. Book everything 2 to 3 months in advance.",
                  b: "Book early",
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
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to the Maldives</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> All international flights land at <strong className="font-medium">Velana International Airport (MLE)</strong> on Hulhule island, next to Male. From there you transfer to your island by speedboat, seaplane, or domestic flight depending on distance. Visa on arrival is free for all nationalities — 30 days, no pre-approval needed.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🇮🇳",
                  t: "From India (direct flights)",
                  d: "Direct flights from Mumbai, Delhi, Bengaluru, and Kochi on IndiGo, Air India, and Maldivian Airlines. Flight time: 2 to 3.5 hours depending on the origin city. Prices start around $150 to $300 return in off-season. This is one of the shortest and cheapest international flights from India — closer than most domestic routes to the northeast.",
                  b: "2–3.5 hrs",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🌍",
                  t: "From Europe, Middle East & Asia",
                  d: "Major airlines including Emirates (via Dubai), Qatar Airways (via Doha), Singapore Airlines (via Singapore), and Turkish Airlines (via Istanbul) all serve Male. Sri Lankan Airlines from Colombo is the shortest international connection at 1.5 hours. Dubai to Male is 4 hours and often the cheapest route from Europe with a Gulf stopover.",
                  b: "Many connections",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "⛵",
                  t: "Speedboat to local islands",
                  d: "Speedboats from Male ferry terminal run to nearby local islands: Maafushi ($15 to $20, 45 min), Thulusdhoo ($15, 30 min), Gulhi ($12, 35 min). Public ferries are cheaper ($3 to $5) but run only twice daily. Book through your guesthouse in advance — they arrange everything. Speedboats sell out on Friday to Saturday (the Maldivian weekend).",
                  b: "$10–20 per person",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛩️",
                  t: "Seaplane to resort islands",
                  d: "Resorts on distant atolls require seaplane transfers operated by Trans Maldivian Airways or Maldivian Air Taxi. Cost: $300 to $500 return per person. The seaplane flight itself is a highlight — flying low over the atolls, you see the reef structures, lagoon colours, and island chains from above. Seaplanes only operate during daylight hours, so late arrivals go by speedboat.",
                  b: "$300–500 return",
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

            {/* Visa info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-2">🇮🇳 Indian Passport Holders</p>
                <ul className="space-y-1.5 text-xs text-amber-700 font-light leading-relaxed">
                  <li>Free 30-day visa on arrival — no pre-approval needed, just show up</li>
                  <li>Documents: valid passport, return ticket, proof of accommodation</li>
                  <li>Direct flights from Mumbai, Delhi, Bengaluru, Kochi (2 to 3.5 hrs)</li>
                  <li>Speedboat to Maafushi: $10 to $20 one way, 45 minutes</li>
                </ul>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                <p className="font-medium text-sm text-teal-800 mb-2">🌍 All Other Passports</p>
                <ul className="space-y-1.5 text-xs text-teal-700 font-light leading-relaxed">
                  <li>Free 30-day visa on arrival for ALL nationalities — one of the most open visa policies in the world</li>
                  <li>Extension to 90 days at immigration for $30</li>
                  <li>USD widely accepted alongside Maldivian Rufiyaa (MVR)</li>
                  <li>Book speedboat transfers in advance — they sell out on peak weekends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Maldives Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary follows the budget/local island route — the one that delivers 90% of the Maldives experience at 10% of the resort price. Each day card shows costs in USD. For the mid-range and luxury alternatives, see the budget breakdown below.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Male & Transfer to Maafushi"
                cost="$70–120 (MVR 1,080–1,850) — transport + accommodation + food"
                items={[
                  "Land at Velana International Airport (MLE), clear immigration quickly — visa on arrival is instant for all nationalities.",
                  "Take the public ferry from Male ferry terminal to Maafushi ($3 / MVR 46, 1 hour — runs twice daily at 9am and 3pm) OR a speedboat ($15–20 / MVR 230–310, 45 min — runs frequently throughout the day).",
                  "Check in to a guesthouse on Maafushi ($40–80 / MVR 620–1,240 per night for a double room with AC and breakfast included).",
                  "Afternoon: Walk Maafushi island end to end in 15 minutes — it is tiny. Find the bikini beach (designated for swimwear) on the western tip of the island.",
                  "Sunset snorkel at the house reef with your guesthouse's free snorkelling equipment — the reef is 50 metres from the beach.",
                  "Dinner at a local restaurant — tuna curry, roshi bread, and fresh juice for $8–12 / MVR 125–185.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="House Reef Snorkelling & Sandbank Excursion"
                cost="$60–90 (MVR 925–1,390)"
                items={[
                  "6:30am — Dawn snorkel at the house reef before breakfast. Turtles, reef sharks, and rays come out at first light and the reef is completely uncrowded. This is the best snorkelling window of the day.",
                  "Breakfast at your guesthouse (included in the room rate).",
                  "10:00am — Book a sandbank excursion through your guesthouse ($30–40 / MVR 465–620 per person). You are taken by speedboat to an uninhabited sandbank in the middle of the lagoon — 360 degrees of turquoise water with nothing but white sand and ocean.",
                  "Swim, snorkel, and picnic on the sandbank for 2 to 3 hours. Some guesthouses provide a packed lunch.",
                  "Afternoon: Rent a snorkel set ($5 / MVR 77 per day) and explore the house reef independently. The drop-off at the reef edge is where the larger marine life cruises.",
                  "5:00pm — Sunset from the bikini beach with a fresh coconut ($1.50 / MVR 23).",
                  "8:00pm — Dinner at Maafushi's main restaurant strip. Most meals run $10–15 / MVR 155–230.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Diving & Dolphin Cruise"
                cost="$100–150 (MVR 1,545–2,315) depending on dive/snorkel choice"
                items={[
                  "Morning: Try a discover scuba dive if you have never dived — $80–100 / MVR 1,235–1,545 for a 2-tank dive with a PADI instructor at one of Maafushi's dive schools.",
                  "Alternatively: Join a snorkelling trip to nearby dive sites with manta rays and whale sharks (seasonal, $40–60 / MVR 620–925 per person). The boat takes you to sites inaccessible from the beach.",
                  "Afternoon: Rest on the beach or kayak in the lagoon (kayak rental $5 / MVR 77 per hour).",
                  "5:30pm — Sunset dolphin cruise ($25–35 / MVR 386–540 per person). Spinner dolphins come out at sunset in the channel between atolls — pods of 50 to 100 are common. The boats idle and the dolphins ride the bow wave.",
                  "7:30pm — Return as the stars come out. The Maldives has zero light pollution — the Milky Way is visible to the naked eye from the beach.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Male City Tour & Day Resort Visit"
                cost="$80–200 (MVR 1,235–3,090) depending on day resort choice"
                items={[
                  "Morning: Take a speedboat back to Male ($15 / MVR 230, 45 min).",
                  "10:00am — Male city tour: Sultan Park, the Friday Mosque (Hukuru Miskiy, built 1658 from coral stone), the chaotic fish market, and the colourful local streets. Male is one of the world's smallest and most densely populated capitals — fascinating for a few hours.",
                  "12:00pm — Lunch at a Male local 'short eats' cafe — mas huni (tuna and coconut) and roshi bread for $3 / MVR 46. This is authentic Maldivian food that tourists rarely experience.",
                  "2:00pm — Take a speedboat to a day-use resort. Several resorts offer $100–200 / MVR 1,545–3,090 day packages with beach access, pool, lunch, and water sports. This is the most cost-effective way to experience the resort side of the Maldives.",
                  "Alternatively: Visit Hulhumale island (20 min from Male by ferry, $1) — a cleaner, quieter island with good beaches and a more relaxed atmosphere.",
                  "Return to Maafushi or stay in Male for the final night.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Final Snorkel & Departure"
                cost="$30–50 (MVR 465–770) — transport + food"
                items={[
                  "Early morning: One last dawn snorkel at the house reef. The 6:30am session with turtles and reef sharks is the memory most visitors take home.",
                  "Breakfast and checkout from your guesthouse.",
                  "Speedboat to Male airport — allow 2 hours before your flight for transport and check-in.",
                  "Browse the duty-free at Velana Airport. Local honey, dried tuna (valho mas), and lacquerware are the best souvenirs. Prices are reasonable compared to resort gift shops.",
                ]}
              />
            </div>

            {/* Mid-Range & Luxury alternatives */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-2">✨ Mid-Range Alternative ($300–600/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed mb-2">Stay at a small boutique resort on an outer atoll ($150–350/night). Speedboat transfer from Male ($30–60 per person). Full-day snorkelling safaris by dhoni boat ($80–120), spa treatments ($80–150), and sunset fishing trips ($50–80). Fresh lobster dinner at the resort: $80–100.</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Total for 5 days: $1,500–3,000 per person.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-2">💎 Luxury Alternative ($1,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed mb-2">Seaplane to an overwater villa at Soneva Jani, Six Senses Laamu, or Gili Lankanfushi ($1,500–5,000/night). Private butler, in-villa infinity pool, personal chef. Private sandbank dinner under the stars. Submarine excursion ($500–800). Whale shark trip with a marine biologist guide.</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Total for 5 days: $10,000–30,000 per person.</p>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Maldives" onPlanTrip={() => setModalOpen(true)} />

          {/* ── ISLAND & ACTIVITY GUIDE ── */}
          <section id="activities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🐠 Island &amp; Activity Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key experiences in the Maldives, with real prices. Most activities can be booked through your guesthouse or resort reception the day before.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "House Reef Snorkelling",
                  e: "Free (guesthouse equipment) or $5/day rental",
                  d: "The house reef at Maafushi and most local islands is 50 metres from the beach with a shallow entry and a reef edge dropping to 10 to 20 metres. Green sea turtles, blacktip reef sharks, eagle rays, Napoleon wrasse, and dense coral formations. Best at dawn (6:30am) before snorkel tours arrive. This alone justifies the trip.",
                  t: "Must do · Daily",
                },
                {
                  n: "Sandbank Excursion",
                  e: "$30–40 / MVR 465–620 per person",
                  d: "A speedboat takes you to an uninhabited sandbank — a strip of white sand in the middle of the ocean with 360 degrees of turquoise water. Swim, snorkel, and picnic. Most trips include 2 to 3 hours on the sandbank. Book through your guesthouse. This is the quintessential Maldives photo opportunity.",
                  t: "Must do · Half day",
                },
                {
                  n: "Scuba Diving (Discover or Certified)",
                  e: "$80–100 discover dive / $120–150 for 2-tank fun dive",
                  d: "The Maldives has some of the best diving in the world. Channel dives between atolls with grey reef sharks, mantas, and strong currents for experienced divers. Calm reef dives for beginners. PADI Open Water certification: $400–600 for 3-day course. Every local island and resort has a dive centre.",
                  t: "Recommended · 3–4 hrs",
                },
                {
                  n: "Sunset Dolphin Cruise",
                  e: "$25–35 / MVR 386–540 per person",
                  d: "Spinner dolphins gather in the channels between atolls at sunset — pods of 50 to 100 dolphins spinning and jumping alongside the boat. The boat idles and drifts with the pod for 30 to 60 minutes. Available from Maafushi and most other islands. One of the most reliable dolphin-watching experiences in the world.",
                  t: "Must do · 2 hrs",
                },
                {
                  n: "Whale Shark Snorkelling (South Ari Atoll)",
                  e: "$60–100 / MVR 925–1,545 per person",
                  d: "South Ari Atoll near Dhigurah island has a resident population of whale sharks year-round, with peak season from May to November. You snorkel on the surface while whale sharks (6 to 8 metres long) cruise below. No diving certification needed. Day trips from Maafushi are available but a trip to Dhigurah (2 to 3 hour speedboat) gives better access.",
                  t: "Bucket list · Full day",
                },
                {
                  n: "Bioluminescent Plankton Night Swim",
                  e: "Free (seasonal, May–October)",
                  d: "During the wet season, bioluminescent plankton appear in the shallows around many Maldivian islands. The water glows electric blue as you move through it. Walk into the shallow water on the beach at night and the sand lights up under your feet. Best seen on moonless nights. Vaadhoo Island is famous for this, but it occurs widely across the atolls.",
                  t: "Seasonal · Evening",
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
            title="Maldives — Lagoons, Reefs &amp; Island Life"
            subtitle="The Indian Ocean at its most extraordinary."
            spots={[
              {
                name: "Overwater Villas",
                query: "maldives overwater villa bungalow turquoise lagoon luxury resort",
                desc: "Overwater villas stretching into turquoise lagoons — the iconic image of the Maldives and one of the world's most photographed hotel concepts.",
              },
              {
                name: "Underwater Coral Reef",
                query: "maldives underwater coral reef snorkelling tropical fish turquoise",
                desc: "The house reefs of the Maldives — dense coral formations with turtles, reef sharks, and hundreds of species of tropical fish at 2 to 5 metres depth.",
              },
              {
                name: "White Sand Beach",
                query: "maldives white sand beach palm tree turquoise water island",
                desc: "White coral sand beaches fringed with coconut palms and lapped by impossibly clear turquoise water — the default Maldivian island experience.",
              },
              {
                name: "Sunset Over the Indian Ocean",
                query: "maldives sunset ocean dhoni boat golden hour island",
                desc: "Golden hour over the Indian Ocean — traditional dhoni boats silhouetted against the sunset, viewed from any island in the archipelago.",
              },
              {
                name: "Marine Life — Whale Sharks & Mantas",
                query: "maldives whale shark snorkelling manta ray underwater marine life",
                desc: "Whale sharks and manta rays in the Maldives — snorkelling on the surface while these gentle giants cruise below in the crystal-clear water.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Maldives spans an extraordinary range — from $80 per day on a local island to $6,000 per day in an overwater villa. The ocean, the reefs, and the white sand are the same at every price point. What changes is the room, the food, and the cocktails.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Budget (Local Island)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Mid-Range (Resort)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Luxury (Overwater Villa)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "$40–80", "$150–350", "$1,500–5,000"],
                    ["🍽 Food", "$15–30", "$60–120", "$200–500"],
                    ["🚤 Transport", "$10–25", "$20–50", "$100–300"],
                    ["🐠 Activities", "$30–100", "$80–200", "$200–800"],
                    ["TOTAL (per day)", "$95–235", "$310–720", "$2,000–6,600"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–235/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay on local islands like Maafushi, Thulusdhoo, or Dhigurah. Guesthouse with AC and breakfast ($40–80/night), local restaurant meals ($8–15), house reef snorkelling (free), and one excursion per day ($25–60). The same Indian Ocean at a fraction of the price.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range ($310–720/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Small boutique resort on an outer atoll or a higher-end guesthouse. Full-board or half-board packages, guided snorkelling safaris, spa treatments, and sunset fishing. The sweet spot for comfort without the overwater villa price tag.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury ($2,000–6,600/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Overwater villa with private pool, private butler, seaplane transfers, and all-inclusive dining. Private sandbank dinners, submarine excursions, and personal marine biologist guides. The Maldives at its most extravagant — Soneva Jani, Six Senses Laamu, Gili Lankanfushi.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Maldives</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Your choice of island defines your entire Maldives experience. Local islands for budget and authenticity, outer atoll resorts for mid-range comfort, and the famous overwater villas for the luxury bucket list.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Maafushi Island Guesthouses",
                  type: "Budget · Local island · 45 min from Male",
                  price: "From $40–80/night",
                  badge: "Best budget",
                  desc: "Maafushi is the most developed local island for tourism — over 50 guesthouses, multiple restaurants, dive schools, and a designated bikini beach. Double rooms with AC and breakfast for $40–80/night. The house reef has turtles and reef sharks. All excursions (sandbank, dolphin cruise, diving) can be booked from here. The most popular base for budget travellers.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Thulusdhoo Island",
                  type: "Budget · Local island · Famous surf break",
                  price: "From $50–100/night",
                  badge: "Best for surfing",
                  desc: "Thulusdhoo is known for Cokes surf break — a world-class right-hander accessible by a short boat ride from the island. The island is quieter and less touristy than Maafushi with good guesthouses and a Coca-Cola factory (hence the surf break name). Great house reef, fewer crowds, and a more local feel.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Dhigurah Island",
                  type: "Budget-mid · Local island · Whale shark capital",
                  price: "From $60–120/night",
                  badge: "Whale sharks",
                  desc: "Dhigurah in South Ari Atoll is the whale shark capital of the Maldives — resident whale sharks year-round with peak season May to November. The island is 3km long (the longest local island) with a stunning beach and excellent house reef. More remote than Maafushi (2 to 3 hour speedboat or domestic flight + speedboat) but worth the journey.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Boutique Resorts (Outer Atolls)",
                  type: "Mid-range · Private island resorts",
                  price: "From $150–350/night",
                  badge: "Best mid-range",
                  desc: "Smaller resorts on private islands in the outer atolls. These are not the famous luxury brands but offer excellent value: private beach, house reef, restaurant, dive centre, and water sports. All-inclusive or half-board packages available. Speedboat or domestic flight transfers from Male.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Soneva Jani / Six Senses / Gili Lankanfushi",
                  type: "Ultra-luxury · Overwater villas",
                  price: "From $1,500–5,000/night",
                  badge: "Bucket list",
                  desc: "The world's most iconic overwater villas. Soneva Jani in Noonu Atoll has overwater villas with retractable roofs for stargazing, water slides into the lagoon, and a private cinema. Six Senses Laamu offers barefoot luxury with a world-class house reef. Gili Lankanfushi is the original over-water eco-resort. Seaplane transfers included at most properties.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Maldives</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Eating in the Maldives varies wildly by context. Local island restaurants serve authentic Maldivian food for $5 to $15 per meal. Resort restaurants charge $30 to $150 per person. Male has surprisingly good local food at local prices.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Maafushi Local Restaurants",
                  t: "Budget · Local island · Maldivian & international",
                  d: "The restaurant strip on Maafushi's main road has a dozen options serving tuna curry and roshi bread ($5–8 / MVR 77–125), grilled reef fish ($10–15 / MVR 155–230), pasta, and traveller-friendly food. Most guesthouses also serve dinner. Tuna is the staple — it appears in almost every Maldivian dish. The garudhiya (tuna broth with lime and chilli) is the national comfort food.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Male 'Short Eats' Cafes",
                  t: "Local · Male city · Authentic Maldivian",
                  d: "The local cafes in Male serve mas huni (shredded smoked tuna with coconut, onion, and chilli, served with roshi flatbread) for breakfast at $2–3 / MVR 30–46. Hedhikaa (Maldivian short eats) — small savoury pastries filled with tuna, fish, and spices — are $0.50–1 each. The fish market area has the freshest seafood in the country. This is authentic Maldivian food that most resort tourists never experience.",
                  b: "Most authentic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Resort Restaurants",
                  t: "Mid to luxury · Private island resorts",
                  d: "Resort dining ranges from buffet breakfast (usually included) to a la carte restaurants with imported ingredients. Expect $30–80 / MVR 465–1,235 per person for dinner at a mid-range resort. Luxury resorts charge $100–200 per person. Whole grilled lobster at a resort is typically $80–100. The quality is generally high — resorts import everything by boat or seaplane — but the prices reflect the logistics.",
                  b: "Premium quality",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Shell Beans (Male)",
                  t: "Cafe · Male city · Modern Maldivian",
                  d: "A popular cafe in Male that serves both traditional Maldivian dishes and modern cafe fare. Good coffee (rare in the Maldives outside resorts), fresh juices, and a mix of local and Western food. Meals $8–15 / MVR 125–230. A good option if you are spending time in Male before or after your island stay.",
                  b: "Best in Male",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Guesthouse Dining (Local Islands)",
                  t: "Budget · Included or add-on · Home-cooked",
                  d: "Many guesthouses on local islands offer half-board or full-board packages — breakfast is almost always included, and dinner can be added for $10–20 / MVR 155–310 per night. The food is home-cooked Maldivian: tuna curry, grilled fish, coconut-based dishes, and tropical fruit. Quality varies but the best guesthouse meals are genuinely excellent and far cheaper than eating out.",
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
            destination="Maldives"
            hotels={[
              {
                name: "Arena Beach Hotel (Maafushi)",
                type: "Guesthouse · Beachfront · Local island",
                price: "From $60/night",
                rating: "4",
                badge: "Best budget beachfront",
                url: "https://www.booking.com/hotel/mv/arena-beach-hotel.html?aid=2820480",
              },
              {
                name: "Kaani Beach Hotel (Maafushi)",
                type: "Mid-range guesthouse · Pool · Bikini beach",
                price: "From $90/night",
                rating: "4",
                badge: "Best mid-range local",
                url: "https://www.booking.com/hotel/mv/kaani-beach-hotel.html?aid=2820480",
              },
              {
                name: "Adaaran Club Rannalhi",
                type: "Mid-range resort · South Male Atoll",
                price: "From $200/night",
                rating: "4",
                badge: "Best value resort",
                url: "https://www.booking.com/hotel/mv/adaaran-club-rannalhi.html?aid=2820480",
              },
              {
                name: "Soneva Jani",
                type: "Ultra-luxury · Overwater villas · Noonu Atoll",
                price: "From $2,500/night",
                rating: "5",
                badge: "Ultimate luxury",
                url: "https://www.booking.com/hotel/mv/soneva-jani.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Maldives Snorkelling Safari",
                duration: "Full day",
                price: "From $60/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=maldives+snorkelling+safari&partner_id=PSZA5UI",
              },
              {
                name: "Sunset Dolphin Cruise",
                duration: "2 hrs",
                price: "From $25/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=maldives+dolphin+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Whale Shark Snorkelling (South Ari)",
                duration: "Full day",
                price: "From $80/person",
                badge: "Bucket list",
                url: "https://www.getyourguide.com/s/?q=maldives+whale+shark+snorkelling&partner_id=PSZA5UI",
              },
              {
                name: "Sandbank & Island Hopping Trip",
                duration: "Half day",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=maldives+sandbank+excursion&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in the Maldives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏝️",
                  title: "Not Considering the Local Island Option",
                  desc: "The Maldives government created the local islands policy in 2010 — guesthouses on inhabited islands like Maafushi, Thulusdhoo, and Dhigurah offer the same lagoons and house reefs as resorts for $50–100/night instead of $500–2,000. This is the secret the travel industry does not advertise. Budget travellers can absolutely do the Maldives.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💸",
                  title: "Booking Overwater Villas for All 5 Nights",
                  desc: "Most visitors find that 2 to 3 nights in an overwater villa is more than enough to tick the bucket-list box. Spending 5 nights at $2,000–5,000/night is overkill for most travellers. Combine 2 nights at a resort with 2 to 3 nights on a local island for the best of both worlds at a fraction of the cost.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏙️",
                  title: "Skipping Male City Entirely",
                  desc: "Male is one of the world's smallest and most densely populated capitals — genuinely interesting for a few hours. The 17th century Friday Mosque, the colourful harbour, the fish market, and the local short eats cafes give context to Maldivian life. Stop for half a day before or after your island stay.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌧️",
                  title: "Going Without Checking Monsoon Dates",
                  desc: "The Maldives has two monsoons. The dry season (November to April) is peak season — clear water, calm seas, excellent visibility. The wet season (May to October) brings heavy rain, rough seas, and cancelled excursions. Diving visibility also drops. November to April is strongly preferred for a first visit.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Maldives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐠",
                  title: "Local islands are 90% cheaper with the same ocean",
                  desc: "Maafushi, Thulusdhoo (famous surf break), Dhigurah (whale shark season May to November), and Fulidhoo all have guesthouses, bikini beaches, and house reefs with turtles and reef sharks. You are in the same Indian Ocean as the $3,000/night resorts. The difference is the room — not the water.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🐢",
                  title: "Snorkel the house reef at dawn, not 10am",
                  desc: "The house reef at Maafushi (and most local island guesthouses) is 50m from the beach. At 6:30am before breakfast, the reef is uncrowded and marine life is active — green sea turtles graze the coral, reef sharks cruise the drop-off, and Napoleon wrasse hover at the edge. By 10am, snorkel tours arrive and the animals retreat.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "⛵",
                  title: "Book speedboat transfers in advance",
                  desc: "Speedboats from Male to local islands like Maafushi run frequently but sell out on Friday to Saturday (the Maldivian weekend). Book your return transfer when you book your guesthouse — most guesthouses arrange this for $15–20 per person. Do not assume you can just show up at the jetty.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🧴",
                  title: "Bring all your sunscreen from home",
                  desc: "Sunscreen in resort shops costs 3 to 5 times the home price ($40–60 for a small bottle). Reef-safe sunscreen (required in the Maldives marine protected areas) is even harder to find. Bring 2 to 3 bottles from home. Also bring insect repellent, antihistamines, and any prescription medications — the outer islands have no pharmacies.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💵",
                  title: "Carry both USD and MVR",
                  desc: "Resorts price everything in USD and accept credit cards. Local islands use Maldivian Rufiyaa (MVR) — many small restaurants and shops do not accept cards. The exchange rate is roughly 15.4 MVR to 1 USD. Withdraw MVR from ATMs in Male before heading to your local island, as most local islands have no ATMs.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍷",
                  title: "No alcohol on local islands — plan accordingly",
                  desc: "The Maldives is a Muslim country. Alcohol is strictly prohibited on all inhabited local islands — you cannot buy or consume alcohol on Maafushi, Thulusdhoo, or any local island. Resorts on private uninhabited islands serve alcohol freely. If sundowners matter to your trip, budget for at least 1 to 2 nights at a resort or a day-use resort visit.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Maldives" />

          {/* Combine With */}
          <CombineWith currentSlug="maldives-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can I visit the Maldives on a budget?",
                  a: "Yes — the local island option makes the Maldives accessible for $80–150/day total including accommodation, food, transport, and activities. Stay on local islands like Maafushi, Thulusdhoo, or Dhigurah. You will have the same Indian Ocean, the same house reef snorkelling, and the same white sand beaches as the resorts — minus the overwater villa and the $30 cocktails.",
                },
                {
                  q: "When is the best time to visit the Maldives?",
                  a: "November to April is the dry season — calm seas, excellent visibility (20–30m), and reliable sunshine. December to February are the busiest and most expensive months. April is excellent value with fewer crowds. May to October is wet season — cheaper rates but rough seas and cancelled excursions. Whale shark season at Dhigurah is May to November.",
                },
                {
                  q: "How do I get from Male airport to my island?",
                  a: "Local islands within 1 hour: speedboat ($10–25 per person, 20–90 min). Local islands over 1 hour away: domestic flight ($80–150 one way) plus speedboat. Resort islands: seaplane ($300–500 return per person) or speedboat. Book transfers in advance — seaplanes only fly during daylight, so late arrivals go by speedboat.",
                },
                {
                  q: "Is the Maldives good for snorkelling or only diving?",
                  a: "Both — but snorkelling is excellent even without diving. The house reefs at most local islands and resorts have turtles, reef sharks, rays, and dense coral at 2–5m depth — accessible to any swimmer. Whale sharks and manta rays at specific sites require a boat excursion but not diving — snorkellers swim on the surface while these giants pass below.",
                },
                {
                  q: "What is the alcohol situation in the Maldives?",
                  a: "The Maldives is a Muslim country. Alcohol is strictly prohibited on local islands — you cannot buy or consume alcohol in Maafushi, Thulusdhoo, or any inhabited island. Resorts on private uninhabited islands are exempt from this rule and serve alcohol freely. This is the main practical difference between local island and resort experiences.",
                },
                {
                  q: "Do I need a visa for the Maldives?",
                  a: "No pre-arranged visa is needed. The Maldives offers a free 30-day visa on arrival for all nationalities — no exceptions, no pre-approval. This is one of the most open visa policies in the world. You just need a valid passport, return ticket, and proof of accommodation. Extensions to 90 days are available at immigration for $30.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Maldives trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-maldives", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/maldives-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-maldives", label: "How to get there", icon: "✈️" },
                { href: "/blog/maldives-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="maldives-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Island &amp; Beach Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai in 4 Days — Desert &amp; Skyline", href: "/blog/dubai-4-days" },
                { label: "Singapore in 3 Days — City Guide", href: "/blog/singapore-3-days" },
                { label: "Bali in 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
                { label: "Phuket in 5 Days — Islands &amp; Beaches", href: "/blog/phuket-5-days" },
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
