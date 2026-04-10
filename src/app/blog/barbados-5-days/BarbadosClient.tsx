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
const BARBADOS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Barbados Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach & Landmark Guide" },
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
          href: `mailto:?subject=Barbados 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Barbados in 5 Days — flying fish, sea turtles and the world's oldest rum&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/barbados-5-days"
        imageUrl="https://images.unsplash.com/photo-1548574505-5e239809f769?w=1200&q=80"
        description="Barbados in 5 Days: flying fish at Oistins, sea turtles at Payne&apos;s Bay, Harrison&apos;s Cave, Mount Gay Rum, and Crane Beach — complete travel guide for every budget."
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
export default function BarbadosClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BARBADOS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Barbados" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="barbados beach caribbean turquoise water pink sand west coast"
            fallback="https://images.unsplash.com/photo-1548574505-5e239809f769?w=1600&q=80"
            alt="Barbados west coast beach with turquoise Caribbean water and palm trees"
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
              <span className="text-white/70">Barbados 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Caribbean
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Barbados in 5 Days:
                <em className="italic text-amber-300"> Flying Fish, Sea Turtles &amp; the World&apos;s Oldest Rum</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The most civilized island in the Caribbean — cricket, rum, flying fish at Oistins, and west coast beaches that defy description. The complete 5-day guide.
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
              <span>🇧🇧 Barbados, Caribbean</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $100/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The most British island in the Caribbean — where cricket is a religion and rum is a sacrament — Barbados has been civilizing travellers since 1703. Eat flying fish cutters from a food truck at Oistins Fish Fry while a steel band plays beside you.
            </p>
          </blockquote>

          {/* ── WHAT BARBADOS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Barbados Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Barbados is the most easterly island in the Caribbean — 166 square kilometres of coral limestone sitting alone in the Atlantic, 160km east of the main island chain. It was never French or Spanish. The British settled it in 1627 and never left: three centuries of uninterrupted British governance shaped everything from the parliamentary system to the road names to the affection for cricket and afternoon tea.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The result is an island that feels entirely different from its Caribbean neighbours. Bridgetown is a UNESCO World Heritage Site with a 17th-century parliament, a cannon-lined garrison, and a synagogue founded in 1654. The west coast — the Platinum Coast — has some of the calmest, clearest turquoise water in the entire Caribbean, with hawksbill sea turtles feeding in the shallows at Payne&apos;s Bay every morning. Mount Gay Rum, established 1703, is the oldest commercially produced rum brand in the world. And on Friday nights, the entire island converges on Oistins Fish Fry for grilled flying fish, steel pan, and ice-cold Banks beer.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What makes five days ideal: you have enough time to experience both coasts (the calm west and the dramatic Atlantic east), to slow down at a rum distillery tour, to watch a sunset cruise, and to attend Oistins on a Friday — the single best free event in the Caribbean.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BGI (Grantley Adams)" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–May" />
              <StatCard icon="🥃" label="Rum Since" value="1703" />
              <StatCard icon="💰" label="Budget From" value="$100/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Barbados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "26–30°C, low humidity, very little rain. This is peak season — the west coast is at its calmest and most swimmable, visibility for snorkelling is excellent, and the island is at full energy. December–January is the most expensive period. February–April is warm, dry, and slightly quieter. The ideal window for most visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May",
                  i: "🌅",
                  t: "Shoulder Season — Excellent Value",
                  d: "Still warm and mostly dry with hotel prices dropping sharply from peak season rates. The beaches are less crowded than December–March. May is one of the best-value months to visit Barbados — comfortable weather, lower prices, and a more relaxed atmosphere. Occasional brief showers but nothing disruptive.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Nov",
                  i: "🌧️",
                  t: "Hurricane Season — Travel with Insurance",
                  d: "Barbados sits further east than most Caribbean islands and is less frequently hit by direct hurricanes than its neighbours. But tropical storms can disrupt flights, close beaches, and bring sustained rain. The Crop Over Festival in July–August is the island&apos;s biggest event — a Bajan carnival worth building a trip around despite the season. Always book comprehensive travel insurance for Jun–Nov travel.",
                  b: "Insurance essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🎉",
                  t: "Crop Over Festival — Cultural Peak",
                  d: "Barbados&apos;s answer to Carnival — weeks of calypso competitions, costumed parades, street parties, and the Grand Kadooment Day grand finale. The island comes alive in a way that doesn&apos;t happen at any other time of year. Hotels book up fast; reserve 3–4 months in advance. The weather can be wet but the atmosphere is electric.",
                  b: "Must-experience",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Barbados</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Barbados&apos;s only international airport is <strong className="font-medium">Grantley Adams International (BGI)</strong> in Christ Church, 16km southeast of Bridgetown. All flights arrive and depart here. Public buses (Route 11) run from the airport to Bridgetown for $1.75 USD — one of the best airport bus connections in the Caribbean.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From the UK (recommended gateway)",
                  d: "London Heathrow and Gatwick to BGI: 9–9.5 hours direct. British Airways, Virgin Atlantic, and TUI all fly direct year-round. From Birmingham, Manchester, and Glasgow: seasonal direct flights during winter (Dec–Apr). UK citizens do not need a visa — entry is visa-free for up to 6 months.",
                  b: "Best connection",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From the USA",
                  d: "Direct flights from New York (JFK/Newark), Miami, Philadelphia, Charlotte, and Atlanta. Flight time: 4–5 hours. American Airlines, JetBlue, and Delta operate this route. Miami is the most frequent hub with multiple daily departures. US citizens are visa-free for up to 6 months.",
                  b: "Multiple hubs",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From Canada",
                  d: "Air Canada and WestJet fly direct from Toronto (YYZ) and Montreal (YUL) to BGI — seasonal (mainly Oct–Apr peak season). Approximately 5 hours. Canadian citizens are visa-free for up to 6 months. Toronto is the most reliable Canadian gateway year-round.",
                  b: "Seasonal direct",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights from India to Barbados. Route via London (British Airways: Mumbai/Delhi → London → BGI, total 18–22 hrs) or via Miami (Air India/Emirates: India → Dubai or London → Miami → BGI). Indian passport holders require a Barbados visa — apply at least 3 weeks in advance through the Barbados High Commission in New Delhi.",
                  b: "Via London/Miami",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Barbados Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Costs shown in both BBD (Barbados Dollar) and USD. The official currency is the Barbados Dollar (BBD) — fixed at 2 BBD to 1 USD, making mental conversion easy.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive · Bridgetown Historic District · Oistins Fish Fry"
                cost="BBD $180–220 / USD $90–110"
                items={[
                  "Arrive at BGI. Take the Route 11 public bus from the airport into Bridgetown (BBD $3.50 / $1.75 USD) — buses are air-conditioned, reliable, and the most local introduction to Barbados you can have.",
                  "Check into your accommodation in Hastings, Worthing, or St Lawrence Gap — the main budget and mid-range hub on the south coast. Budget guesthouses (Sunbay Hotel, Yellow Bird) run BBD $100–140 / USD $50–70 per night.",
                  "Walk to Accra Beach (Rockley Beach) — the main public south coast beach, free entry, calm water, beach vendors selling coconut water for BBD $4 / $2 USD. Get in the water immediately.",
                  "Late afternoon: stroll along the Accra-to-Hastings boardwalk as the light turns golden. The south coast boardwalk is 1.5km of smooth walking path right above the sea.",
                  "Evening: Oistins Fish Fry. Open every night but Friday is the main event — the whole island gathers here. Grilled mahi-mahi, flying fish, or barracuda with macaroni pie and coleslaw, BBD $24–36 / $12–18 USD. Live steel band, domino games, and cold Banks beer beside you.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Bridgetown UNESCO Heritage · Carlisle Bay Snorkelling · Sunset Cruise"
                cost="BBD $160–240 / USD $80–120"
                items={[
                  "Morning: walk UNESCO World Heritage-listed Bridgetown. Parliament Buildings (1870), National Heroes Square, St Michael&apos;s Cathedral, the Nidhe Israel Synagogue (est. 1654, one of the oldest in the Americas — BBD $20 / $10 USD entry). The entire historic area is walkable in 2–3 hours.",
                  "The Barbados Museum and Historical Society at the Garrison Savannah — one of the best small museums in the Caribbean, BBD $15 / $7.50 USD. The Garrison itself is a UNESCO site: 17th-century British military buildings surrounding a racecourse.",
                  "Afternoon: Carlisle Bay snorkelling — just south of Bridgetown, several shipwrecks lie in shallow (6–10m) clear water, accessible by snorkel. You can hire gear for BBD $20 / $10 USD or join a guided snorkel tour (BBD $60–80 / $30–40 USD).",
                  "Late afternoon: public bus to Holetown on the Platinum Coast (Route 1, BBD $3.50 / $1.75 USD). Browse the Chattel House Village craft market — local pottery, hot sauce, rum cake. No pressure to buy.",
                  "Sunset: book a sunset cruise from Holetown Pier (BBD $80–140 / $40–70 USD, 2 hours) — most include unlimited rum punch, snorkel stop with sea turtles, and the legendary Caribbean green flash at the horizon.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Harrison&apos;s Cave · East Coast Atlantic Beaches · Bathsheba"
                cost="BBD $150–200 / USD $75–100"
                items={[
                  "Morning: Harrison&apos;s Cave tram tour in the Scotland District (BBD $64 / $32 USD) — an underground cavern system of stalactites, stalagmites, streams, and a spectacular cave pool. One of the genuinely unmissable natural attractions of Barbados. Book in advance.",
                  "Adjacent: Welchman Hall Gully (BBD $20 / $10 USD) — a ravine of dense tropical vegetation with howler monkeys, giant bamboo, and tree ferns. It was originally planted by Sir Robert Schomburgk in the 1860s.",
                  "Packed lunch from a local shop: rum cake, bake and saltfish, coconut bread — eat at a scenic viewpoint in the Scotland District.",
                  "Afternoon: share taxi or bus to Bathsheba on the rugged Atlantic coast (BBD $16 share taxi / $8 USD). The contrast with the west coast is total — huge Atlantic swells, sculptural sea-stack boulders, wild surf, and almost no tourists.",
                  "Walk Bathsheba&apos;s beach, watch local surfers tackle the Soup Bowl (Barbados&apos;s famous reef break, used for international competitions). The light here in late afternoon is extraordinary.",
                  "Tea at Round House Restaurant above Bathsheba — sit on the terrace overlooking the Atlantic, BBD $30–40 / $15–20 USD. Return south by share taxi.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Mount Gay Rum Distillery · St Nicholas Abbey · Cricket at Kensington Oval"
                cost="BBD $180–260 / USD $90–130"
                items={[
                  "Morning: Mount Gay Rum Distillery tour in Bridgetown — the Spirit of Barbados tour (BBD $60 / $30 USD) includes a guided distillery walk and tasting of 4 rum expressions. Mount Gay has been producing rum here since 1703, making it the world&apos;s oldest commercially operating rum brand.",
                  "Debrief your tasting: the Eclipse (entry) vs. Black Barrel (double-aged) vs. XO (pot still blend) — the tasting notes staff provide are genuinely educational if you engage with them.",
                  "Midday: private taxi to St Nicholas Abbey in St Peter Parish (BBD $60–80 / $30–40 USD one way). This 1658 Jacobean plantation great house is one of only three genuine Jacobean mansions still standing in the Western Hemisphere. The St Nicholas Abbey rum distillery operates here — their 12-year expression (BBD $80 / $40 USD per bottle) is one of the finest aged rums in the Caribbean. Entry BBD $60 / $30 USD.",
                  "Check the cricket schedule at Kensington Oval — if a Test match, ODI, or regional match is playing, go. Kensington Oval is cricket&apos;s most atmospheric ground in the Caribbean. Tickets from BBD $60 / $30 USD. Cold Carib beer, spectacular Bajan crowd, and the game played with enormous passion.",
                  "Alternatively: if no cricket, take the Route 1 bus to Mullins Beach (BBD $3.50 / $1.75 USD) — the Platinum Coast at its finest, free beach, rum punch from Mullins Beach Bar for BBD $14 / $7 USD, and the best sunset on the island.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Animal Flower Cave · Final Beach Morning · Departure"
                cost="BBD $120–160 / USD $60–80"
                items={[
                  "Early morning: share taxi to North Point for Animal Flower Cave (BBD $16 each way / $8 USD, share taxi) — a sea cave at the northernmost tip of Barbados, carved by centuries of Atlantic wave action. Inside: sea anemones (locally called animal flowers), natural windows in the cliff looking directly out to the open ocean. Entry BBD $20 / $10 USD. If conditions allow, you can swim in the cave pool.",
                  "Quick stop at Cove Bay lookout above Animal Flower Cave — the most dramatic cliff view in all of Barbados, the full north Atlantic stretching to the horizon.",
                  "Return south for final shopping: Bridgetown or Holetown. Rum (St Nicholas Abbey 12-year, Mount Gay XO, Foursquare expressions), local hot sauce, Bajan pepper jelly, island pottery.",
                  "Final flying fish cutter from a local cook shop or the airport — non-negotiable. Flying fish season runs year-round but they are sweetest January–June when the schools run close to shore.",
                  "BGI departure — allow 2.5 hours for international check-in. US CBP pre-clearance is available at BGI for US-bound passengers, which means you clear US immigration in Barbados and land as a domestic arrival — a significant time saving.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Barbados" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & LANDMARK GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Barbados has two very different coastlines. The west coast (Platinum Coast) is sheltered, calm, and turquoise. The east coast faces the open Atlantic — wild, dramatic, and completely different. Allocate at least one full day to the east.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Payne&apos;s Bay",
                  e: "Free",
                  d: "The best beach on the west coast for swimming with hawksbill sea turtles — they feed here every morning from around 8am. Swim out 50 metres, they&apos;ll be there. No tour needed — just a mask and fins (rent BBD $20 / $10 USD). Calm, clear water, beautiful white sand.",
                  t: "Must see · Turtles · West Coast",
                },
                {
                  n: "Crane Beach",
                  e: "Free beach access",
                  d: "On the south Atlantic coast — a crescent of pink coral sand with powerful Atlantic swells. The natural rock pool on the south end provides calmer swimming. Frequently listed in top-10 Caribbean beaches. Arrive early — the Crane Resort charges a usage fee if using their facilities.",
                  t: "Most dramatic · Atlantic · East",
                },
                {
                  n: "Mullins Beach",
                  e: "Free",
                  d: "The Platinum Coast at its most relaxed — no hawkers, calm water, the Mullins Beach Bar serving good rum punch (BBD $14 / $7 USD), and a snorkelling reef just offshore. Best in late afternoon when the light goes golden. Route 1 bus from Bridgetown.",
                  t: "Sunset · Platinum Coast · West",
                },
                {
                  n: "Bathsheba Beach",
                  e: "Free",
                  d: "The wild east coast — massive Atlantic rollers, ancient basalt sea stacks emerging from the surf, and the Soup Bowl reef break where Barbados hosts international surf competitions. Non-swimmers come here for the scenery and atmosphere. Completely unlike any other beach in Barbados.",
                  t: "Scenic · Surf · East Coast",
                },
                {
                  n: "Harrison&apos;s Cave",
                  e: "BBD $64 / $32 USD",
                  d: "Underground cavern system in the Scotland District. The tram tour takes you through 1.5km of caverns with stalactite formations, streams, and a large underground lake. The geology here is unique to Barbados — the entire island is porous coral limestone, and rainwater has carved this system over millions of years.",
                  t: "Must see · 1.5 hrs · Book ahead",
                },
                {
                  n: "St Nicholas Abbey",
                  e: "BBD $60 / $30 USD",
                  d: "One of only three Jacobean plantation great houses left standing in the Western Hemisphere (built 1658). Also an operational rum distillery producing St Nicholas Abbey aged rum on site. The 12-year expression is extraordinary. Tour includes distillery, heritage film, and tasting.",
                  t: "Heritage · Rum · North",
                },
                {
                  n: "Kensington Oval",
                  e: "From BBD $60 / $30 USD",
                  d: "Barbados&apos;s cricket ground and the beating heart of the nation&apos;s sporting identity. Test match atmosphere here is among the most passionate in world cricket. The ground holds 28,000 and on a big day is nearly full. Check the Cricket West Indies schedule before booking your trip.",
                  t: "Cultural · Cricket · Bridgetown",
                },
                {
                  n: "Animal Flower Cave",
                  e: "BBD $20 / $10 USD",
                  d: "Sea cave at the north tip of Barbados — Atlantic-carved chambers with sea anemones and dramatic ocean windows. Swim in the cave pool if conditions allow (check on the day). The cliffs above the cave offer the most dramatic ocean views on the island.",
                  t: "Unique · North Point · 45 mins",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p
                      className="font-medium text-sm text-stone-900"
                      dangerouslySetInnerHTML={{ __html: place.n }}
                    />
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p
                    className="text-xs text-gray-700 font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: place.d }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Barbados — Beaches, Rum &amp; Caribbean Light"
            subtitle="The most civilized island in the Caribbean — from turquoise west coast to wild Atlantic east."
            spots={[
              {
                name: "Payne&apos;s Bay Sea Turtles",
                query: "hawksbill sea turtle barbados caribbean snorkelling clear water",
                desc: "Hawksbill sea turtles feeding in the shallows at Payne&apos;s Bay — one of the most reliable wild turtle encounters in the Caribbean.",
              },
              {
                name: "Crane Beach Pink Sand",
                query: "crane beach barbados pink coral sand atlantic caribbean",
                desc: "Crane Beach on the south Atlantic coast — pink coral sand, powerful Atlantic swells, and a natural rock pool for calmer swimming.",
              },
              {
                name: "Bridgetown Historic District",
                query: "bridgetown barbados parliament buildings caribbean colonial",
                desc: "UNESCO-listed Bridgetown — 17th-century parliament buildings, the Garrison Savannah, and one of the oldest synagogues in the Americas.",
              },
              {
                name: "Oistins Fish Fry",
                query: "oistins fish fry barbados grilled flying fish street food",
                desc: "Oistins Fish Fry on a Friday night — the cultural heart of Barbados, where the whole island gathers for grilled seafood, steel band, and Banks beer.",
              },
              {
                name: "Mullins Beach Sunset",
                query: "mullins beach barbados platinum coast sunset west coast",
                desc: "Mullins Beach at golden hour — the Platinum Coast at its most serene, with rum punch in hand and the Caribbean turning amber.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Barbados is mid-to-high range for the Caribbean. The Barbados Dollar (BBD) is fixed at exactly 2 BBD = 1 USD — making all conversions straightforward. Budget travellers using public buses, guesthouses, and eating at rum shops and Oistins can manage on $100 USD/day.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (BBD/USD)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (BBD/USD)</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury (BBD/USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation/night", "BBD $100–140 / $50–70", "BBD $360–500 / $180–250", "BBD $1,000–4,000 / $500–2,000"],
                    ["🍽️ Food & drink/day", "BBD $40–60 / $20–30", "BBD $100–160 / $50–80", "BBD $240–400 / $120–200"],
                    ["🚌 Transport/day", "BBD $10–30 / $5–15", "BBD $50–100 / $25–50", "BBD $160–800 / $80–400"],
                    ["🎯 Activities/day", "BBD $50–80 / $25–40", "BBD $160–240 / $80–120", "BBD $300–1,000 / $150–500"],
                    ["TOTAL/day", "BBD $200–310 / $100–155", "BBD $670–1,000 / $335–500", "BBD $1,700–6,200 / $850–3,100"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($100–155/day USD)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouse in St Lawrence Gap, public buses everywhere, flying fish cutters and rum shop meals, Oistins Fish Fry for dinner. Perfectly comfortable — Barbados&apos;s public bus system is genuinely excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($335–500/day USD)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">4-star west coast hotel (Crystal Cove, Mango Bay), mix of restaurant dining and local spots, one catamaran cruise. The sweet spot for most travellers — good beaches, comfort, and genuine Barbados experiences.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($850+/day USD)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Sandy Lane, Coral Reef Club, or The Crane. Private yacht charters, The Cliff restaurant, spa treatments. Among the finest Caribbean luxury at prices to match. Sandy Lane is benchmarked against the best hotels in the world.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Barbados</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Your base determines your experience. West coast (Holetown, Mullins, Speightstown) gives you the calmest water and the Platinum Coast beach life. South coast (St Lawrence Gap, Worthing) has the most nightlife, restaurants, and budget options. East coast accommodation is limited but extraordinary for nature lovers.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Bridgetown / Garrison Area",
                  type: "Budget–Mid · City location · South",
                  price: "From BBD $100 / $50 USD/night",
                  badge: "Best for history",
                  desc: "Small hotels and guesthouses close to the UNESCO heritage area, the Garrison Savannah, and public bus connections to everywhere. Ideal if you want to explore Bridgetown properly. Good bus access to both coasts. Not a beach location — you&apos;ll take the bus to swim.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Holetown, Platinum Coast",
                  type: "Mid–Luxury · West coast beach · St James",
                  price: "From BBD $360 / $180 USD/night",
                  badge: "Best beaches",
                  desc: "The centre of the west coast hotel strip — Crystal Cove, Coral Reef Club, Colony Club, Turtle Beach. Direct beach access to the calmest, clearest water in Barbados. Limegrove Lifestyle Centre for upscale shopping and dining. The most convenient base for turtle snorkelling at Payne&apos;s Bay.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "St Lawrence Gap",
                  type: "Budget–Mid · South coast · Christ Church',",
                  price: "From BBD $100 / $50 USD/night",
                  badge: "Best nightlife",
                  desc: "The backpacker and mid-range hub of Barbados — Accra Beach nearby, excellent bus connections, the Gap itself lined with restaurants and bars. Yellow Bird Hotel, Sunbay Hotel, and several good guesthouses. Close to Oistins Fish Fry. The most social base on the island.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Mullins Beach Area, Speightstown",
                  type: "Mid–Luxury · North Platinum Coast · St Peter',",
                  price: "From BBD $280 / $140 USD/night",
                  badge: "Most peaceful",
                  desc: "The quietest and least touristy part of the west coast — Mullins Beach, Speightstown&apos;s authentic fishing town character, and easy access to St Nicholas Abbey and the Scotland District. Fewer large resorts than Holetown. Best for travellers who want Platinum Coast beaches without the main resort strip.",
                  color: "border-teal-200 bg-teal-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Barbados</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bajan food is one of the Caribbean&apos;s great undiscovered cuisines. The national dish is flying fish and cou-cou (cornmeal and okra). Order a flying fish cutter (sandwich) from any cook shop. The rum punch at any beach bar is almost certainly excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Oistins Fish Fry",
                  t: "Open air food market · Oistins, Christ Church",
                  d: "The cultural anchor of Barbados. Every night of the week (Friday is the main event) this seafood market beside the fishing harbour serves fresh-grilled flying fish, mahi-mahi, barracuda, and shrimp with macaroni pie, rice, and coleslaw. Typical plate BBD $24–36 / $12–18 USD. The Friday crowd is the entire island — steel band, domino tables, families, tourists, and everyone in between.",
                  b: "Non-negotiable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Flying Fish Cutter",
                  t: "National dish · Any cook shop",
                  d: "The flying fish cutter is Barbados&apos;s national snack — a salt bread roll filled with lightly seasoned fried or steamed flying fish, hot sauce, and cucumber. Available from cook shops, food trucks, and many restaurants. BBD $10–16 / $5–8 USD. Flying fish is a delicate, sweet white fish found in the warm Atlantic waters around Barbados. Order one within hours of arriving.",
                  b: "National dish",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Cou-Cou and Flying Fish",
                  t: "Traditional Bajan · Local restaurants",
                  d: "The full national dish — flying fish (steamed with a light Creole sauce of tomato, peppers, and herbs) served with cou-cou (a firm polenta made from cornmeal and okra, stirred continuously and served in a mound). The okra gives cou-cou a distinctive viscosity and slight brininess. Look for it as the Friday special in local restaurants. BBD $24–40 / $12–20 USD for the full plate.",
                  b: "Try once",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Rum Punch — the Bajan Recipe",
                  t: "Everywhere · Mandatory",
                  d: "The Barbadian rum punch follows a strict recipe passed down through generations: one part sour (lime), two parts sweet (sugar syrup), three parts strong (rum), four parts weak (water or juice), and a shake of Angostura bitters on top. Every beach bar, rum shop, and restaurant serves one. BBD $10–20 / $5–10 USD. ESA Field white rum is the local mixing spirit — buy a bottle from any rum shop for BBD $16 / $8 USD.",
                  b: "Essential",
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
            destination="Barbados Caribbean"
            hotels={[
              {
                name: "Sandy Lane Hotel",
                type: "Ultra-luxury · Platinum Coast · St James",
                price: "From BBD $1,600 / $800 USD/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/bb/sandy-lane.html?aid=2820480",
              },
              {
                name: "Coral Reef Club",
                type: "Luxury boutique · Platinum Coast · St James",
                price: "From BBD $1,000 / $500 USD/night",
                rating: "5",
                badge: "Best service",
                url: "https://www.booking.com/hotel/bb/coral-reef-club.html?aid=2820480",
              },
              {
                name: "Crystal Cove Hotel",
                type: "4-star · West coast beach · St James",
                price: "From BBD $360 / $180 USD/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/bb/crystal-cove.html?aid=2820480",
              },
              {
                name: "Yellow Bird Hotel",
                type: "Budget guesthouse · St Lawrence Gap",
                price: "From BBD $100 / $50 USD/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/bb/yellow-bird.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Tiami Catamaran Cruise with Turtle Snorkel",
                duration: "Full day",
                price: "From BBD $240 / $120 USD per person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=barbados+catamaran+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Mount Gay Rum Distillery Tour",
                duration: "2 hrs",
                price: "From BBD $60 / $30 USD per person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=mount+gay+rum+barbados&partner_id=PSZA5UI",
              },
              {
                name: "Harrison&apos;s Cave Tram Tour",
                duration: "1.5 hrs",
                price: "From BBD $64 / $32 USD per person",
                badge: "Unmissable",
                url: "https://www.getyourguide.com/s/?q=harrisons+cave+barbados&partner_id=PSZA5UI",
              },
              {
                name: "Barbados Island Tour with Guide",
                duration: "6 hrs",
                price: "From BBD $120 / $60 USD per person",
                url: "https://www.getyourguide.com/s/?q=barbados+island+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Barbados</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚗",
                  title: "Ignoring the public bus system",
                  desc: "Barbados has an excellent public bus network — Route 11 runs the south coast, Route 1 runs the west coast, and buses cost BBD $3.50 / $1.75 USD flat fare. Tourists default to taxis and spend 5–8x more for the same journey. Buses run 6am–midnight and are generally on time. Learn the route numbers before you arrive.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "📅",
                  title: "Missing Oistins Fish Fry on a Friday",
                  desc: "Oistins happens every night but Friday is the night — the entire island shows up. If your trip doesn&apos;t include a Friday in Barbados, you&apos;ve missed its most authentic cultural event. Book your trip dates around a Friday if you possibly can. Friday nights, Oistins runs from 6pm to midnight or beyond.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🏖️",
                  title: "Spending all your time on the west coast",
                  desc: "The Platinum Coast is beautiful but the east coast — Bathsheba, Crane Beach, Cattlewash — is dramatically different. Wild Atlantic surf, pink coral sand, rugged cliffs, almost no tourists. Missing it means missing half of what makes Barbados remarkable. Allocate at least one full day on the Atlantic side.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🌧️",
                  title: "Visiting hurricane season without travel insurance",
                  desc: "Barbados is the most easterly Caribbean island and rarely takes a direct hurricane hit — but tropical storms can disrupt flights and close beaches June–November. If visiting in this window, comprehensive travel insurance with flight disruption cover is essential. Don&apos;t book without it.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "🥃",
                  title: "Only drinking Mount Gay — missing the rest",
                  desc: "Mount Gay is the world&apos;s oldest rum brand and excellent, but don&apos;t miss St Nicholas Abbey (12-year is extraordinary — one of the finest aged Caribbean rums), Foursquare Distillery&apos;s single blends (Criterion, Empery — internationally acclaimed), and ESA Field white rum (BBD $16 / $8 USD a bottle — the local mixing spirit). Visit at least two distilleries.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Barbados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐢",
                  title: "Swim with turtles free at Payne&apos;s Bay",
                  desc: "Hawksbill sea turtles congregate at Payne&apos;s Bay every morning — no tour needed. Swim out 50 metres from the beach between 8–10am and they will be there. Tours charge BBD $100 / $50 USD. All you need is a mask and fins (rent BBD $20 / $10 USD). Go before tour boats arrive.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏏",
                  title: "Check the cricket schedule before you go",
                  desc: "If a Test match or ODI is scheduled at Kensington Oval during your visit, restructure your itinerary to attend. The Bajan cricket crowd is one of the great sporting atmospheres in the world — passionate, musical, and utterly committed to the game. Tickets from BBD $60 / $30 USD.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍽️",
                  title: "Order flying fish everywhere, always",
                  desc: "Barbados&apos;s national dish is flying fish — delicate, sweet, and unlike any fish you&apos;ve eaten elsewhere. Order it fried in a cutter, steamed with Creole sauce, or whole at Oistins. It&apos;s sweetest January–June when schools run close to shore. This is the taste of Barbados.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☀️",
                  title: "East and west coasts are different climates",
                  desc: "The Platinum Coast is sheltered and consistently calm. The Atlantic east coast is windier, wilder, and gets more afternoon cloud. Pack a light layer for east coast days. The contrast — calm turquoise west vs wild Atlantic east — is what makes Barbados special. They are genuinely two different environments.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚌",
                  title: "The 2 BBD = 1 USD fixed rate is convenient",
                  desc: "Barbados has maintained a fixed exchange rate of 2 BBD to 1 USD since 1975. All mental arithmetic is instant: divide any BBD price by 2 for the USD equivalent. Most tourist businesses also accept USD directly. ATMs dispense BBD — draw from your bank in BBD and you&apos;ll rarely need to carry USD.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🥃",
                  title: "Buy rum at the distillery, not the airport",
                  desc: "Airport duty-free rum prices in Barbados are only marginally better than distillery shop prices — and the distillery gives you a story to go with the bottle. Buy St Nicholas Abbey 12-year ($40 USD) or Foursquare Criterion ($35 USD) at source. Airline rules: max 2 litres in checked luggage, checked in securely.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Barbados" />

          {/* Combine With */}
          <CombineWith currentSlug="barbados-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Barbados?",
                  a: "Yes. Indian passport holders require a visa to enter Barbados. Apply through the Barbados High Commission in New Delhi or the online visa portal. The fee is approximately $50 USD and processing takes 5–10 business days. Required documents: passport, bank statements, hotel booking, return flight confirmation, and a cover letter explaining your trip. Apply at least 3 weeks before travel to allow processing time.",
                },
                {
                  q: "Is Barbados expensive compared to other Caribbean islands?",
                  a: "Barbados is mid-to-high range for the Caribbean. Budget travellers using public buses, guesthouses in St Lawrence Gap, and eating at rum shops and Oistins Fish Fry can manage on $100 USD/day. Mid-range with a west coast hotel runs $220–350/day. The luxury tier — Sandy Lane, Coral Reef Club — is among the most expensive in the entire Caribbean at $500–3,000/day. The key to budget travel in Barbados is the public bus system (flat fare $1.75 USD) and cooking nothing yourself: Oistins is cheap and extraordinary.",
                },
                {
                  q: "When is the best time to visit Barbados?",
                  a: "December to May is the dry season — sunny, warm (26–30°C), low humidity. This is peak season with higher prices December–February. The Crop Over Festival in July–August is Barbados's biggest cultural event — a genuine Caribbean carnival worth building a trip around if you can handle occasional rain. Avoid August–October (heart of hurricane season) unless you have comprehensive travel insurance.",
                },
                {
                  q: "Is Barbados safe for solo travellers?",
                  a: "Barbados is one of the safest islands in the Caribbean with a low violent crime rate and well-established tourism infrastructure. Solo travellers — including solo women — generally feel very safe. Exercise normal urban precautions in Bridgetown at night, stick to tourist-frequented beach areas, and use registered taxis (yellow licence plates). The Bajan people are exceptionally welcoming and helpful to visitors.",
                },
                {
                  q: "Can you swim with sea turtles in Barbados for free?",
                  a: "Yes. Hawksbill sea turtles feed in the shallows at Payne's Bay on the west coast every morning between roughly 8am and 10am. You don't need to book a tour — just swim out 50 metres from the beach with a mask and fins (rentable for approximately $10 USD) and the turtles will be there. Paid tours charge $40–60 per person for the same experience. Go before 9am to beat the tour boats.",
                },
                {
                  q: "What is the currency in Barbados and can I use US dollars?",
                  a: "The official currency is the Barbados Dollar (BBD), fixed at 2 BBD = 1 USD. Most tourist businesses, hotels, restaurants, and shops accept US dollars at this rate. ATMs dispense BBD. Credit cards are widely accepted in hotels, restaurants, and larger shops. For rum shops, food trucks, and public buses, carry BBD cash. Draw from an ATM on arrival rather than exchanging at the airport for the best rate.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Barbados trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-barbados", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/barbados-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/barbados-beaches-guide", label: "Best beaches guide", icon: "🏖️" },
                { href: "/blog/barbados-rum-guide", label: "Rum distillery guide", icon: "🥃" },
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
          <RelatedGuides currentSlug="barbados-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Caribbean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "St Lucia in 4 Days — Pitons &amp; Rainforest", href: "/blog/st-lucia-4-days" },
                { label: "Jamaica in 5 Days — Culture &amp; Beaches", href: "/blog/jamaica-5-days" },
                { label: "Turks &amp; Caicos — The World&apos;s Best Beach", href: "/blog/turks-and-caicos-4-days" },
                { label: "Dominican Republic in 5 Days", href: "/blog/dominican-republic-5-days" },
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
