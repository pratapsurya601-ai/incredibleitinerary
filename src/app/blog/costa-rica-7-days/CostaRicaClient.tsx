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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const COSTARICA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Costa Rica Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "7-Day Itinerary" },
  { id: "wildlife",   emoji: "🦥",  label: "Nature & Wildlife Guide" },
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
        className="h-full bg-emerald-600 transition-all duration-100"
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
          href: `mailto:?subject=Costa Rica 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Costa Rica in 7 Days — Arenal, Monteverde, Manuel Antonio and Pura Vida&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/costa-rica-7-days"
        imageUrl="https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=1200&q=80"
        description="Costa Rica in 7 Days: Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio beach and wildlife — complete travel guide with budget breakdown from $75/day."
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
          <span className="font-serif text-xl text-emerald-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-emerald-500 mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-emerald-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function CostaRicaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COSTARICA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="costa rica arenal volcano jungle sloth toucan wildlife"
            fallback="https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=1600&q=80"
            alt="Costa Rica Arenal Volcano with rainforest and cloud forest wildlife"
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
              <span className="text-white/70">Costa Rica 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-emerald-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Central America
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Costa Rica in 7 Days:
                <em className="italic text-emerald-300"> Volcanoes, Cloud Forests &amp; Pura Vida</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Arenal Volcano soaking in hot springs, sloths in the cloud forest canopy, scarlet macaws over Manuel Antonio beach, sea turtles on Tortuguero&apos;s black sand. The complete 7-day guide from $75/day.
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
              <span>🇨🇷 Costa Rica</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $75/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-emerald-500 pl-6 mb-10 bg-emerald-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A country so committed to the environment it produces 99% of its electricity from renewables. Sloths move so slowly they grow algae on their fur in the cloud forest. Arenal Volcano erupts gently while you soak in a hot spring at its base. You surf the same wave as a sea turtle on the Nicoya Peninsula. Pura Vida — the simple life — is not a slogan here. It is the operating system.
            </p>
          </blockquote>

          {/* ── WHAT COSTA RICA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Costa Rica Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Costa Rica covers 0.03% of the Earth&apos;s surface and contains 5% of all known biodiversity. That ratio is not a typo. The country sits at the meeting point of North and South America, where two oceans and two continents collide — the biological result is extraordinary. You can watch sea turtles nesting on the Caribbean coast, spot resplendent quetzals in the cloud forest, and see crocodiles from a bridge over the Río Tárcoles all in the same week.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The <em>Pura Vida</em> philosophy — literally &quot;pure life&quot; — permeates every interaction. A cashier at a supermarket says it. A taxi driver says it after navigating a pothole. A surf instructor says it after you wipe out. It means good, fine, no problem, life is great — all at once. It is an attitude, not a marketing campaign, and after a few days you start to feel it genuinely.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Costa Rica abolished its military in 1948 and redirected that budget into education and national parks. Today, 25% of the country is protected as national park or reserve — the highest percentage of any country on earth. This is not incidental. It explains why arriving at Manuel Antonio National Park feels like entering a genuinely wild place, why Corcovado has the highest density of large mammals in Central America, and why even a short walk in any green area will involve more wildlife than most people see in a lifetime elsewhere.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <StatCard icon="🌿" label="Pura Vida Philosophy" value="Since 1948" />
              <StatCard icon="🦜" label="Biodiversity (global share)" value="5% of Earth" />
              <StatCard icon="⚔️" label="Military Abolished" value="1948" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Costa Rica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Apr",
                  i: "☀️",
                  t: "Dry Season (Pacific) — Peak",
                  d: "The Pacific coast (Arenal, Guanacaste, Manuel Antonio) enjoys its driest, sunniest months. Blue skies, calm seas, and perfect conditions for wildlife spotting. This is the busiest and most expensive time. Book Manuel Antonio National Park tickets weeks ahead — the 1,500-visitor daily cap sells out fast.",
                  b: "Best for Pacific coast",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun–Oct",
                  i: "🌿",
                  t: "Green Season (Caribbean) — Underrated",
                  d: "The Caribbean coast (Tortuguero, Puerto Viejo) enters its drier phase just as the Pacific gets wet. Tortuguero is at its best June–October for green turtle nesting — the primary reason to visit. The whole country is lush, prices drop 20–30%, and crowds thin significantly. Afternoon rains on the Pacific side rarely last more than 2 hours.",
                  b: "Best for Tortuguero & turtles",
                  c: "bg-emerald-50 border-emerald-200",
                },
                {
                  s: "May",
                  i: "🌧️",
                  t: "Shoulder — Transition Month",
                  d: "May marks the start of rainy season on the Pacific side. Rains arrive in the afternoons, mornings are still sunny. Fewer tourists, lower prices, and the landscape turning brilliantly green. A good time for budget travellers willing to work around afternoon showers.",
                  b: "Budget-friendly",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov",
                  i: "🌊",
                  t: "Caribbean Rain Peak — Avoid for Caribbean",
                  d: "November is the wettest month on the Caribbean coast and parts of the south. The Pacific side begins to dry out toward December. If your itinerary is exclusively Pacific-focused (Arenal + Monteverde + Manuel Antonio), November can work. If you want the Caribbean, wait until December or go in September–October.",
                  b: "Pacific only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Costa Rica</h2>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-emerald-800 font-light">
                <strong className="font-medium">Key detail:</strong> Costa Rica&apos;s main international airport is <strong className="font-medium">Juan Santamaría International (SJO)</strong>, located in Alajuela, 20km northwest of San José. Most travellers land here and immediately transfer to La Fortuna (Arenal) or another destination — spending time in San José itself is optional for a 7-day trip.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights from India",
                  d: "No direct flights from India to Costa Rica. The most common routes are via Miami (American Airlines, ~20 hrs total), via Amsterdam (KLM/Martinair), or via Madrid (Iberia). Fares from major Indian cities: ₹70,000–₹1,20,000 return. Book 3–4 months ahead for dry season travel. Miami is often the cheapest connection and has a short layover option.",
                  b: "Via Miami/Amsterdam",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "✈️",
                  t: "Flights from the USA",
                  d: "Direct flights from Miami, New York (JFK), Houston, Dallas, and Los Angeles to SJO — 3 to 5 hours. American Airlines, United, Spirit, and Copa all serve this route. Prices: $150–$450 return from the US East Coast, $300–$600 from the West Coast. Check Spirit for budget deals on the Miami route.",
                  b: "Many direct options",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Shuttle buses between destinations",
                  d: "Once in Costa Rica, shared shuttle buses (Interbus, Grayline) are the recommended way to move between destinations. SJO → La Fortuna: ~$35–$45 (3–4 hrs). La Fortuna → Monteverde: jeep-boat-jeep transfer ($30) is faster and more scenic than the 5-hr bus. Monteverde → Manuel Antonio: ~$45–$55 (5 hrs). Book shuttles at least 24 hours ahead in dry season.",
                  b: "Recommended over public bus",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Rental car",
                  d: "A rental car gives maximum flexibility for exploring outside the main circuit — essential for Corcovado, Tamarindo, or off-the-beaten-path destinations. Roads vary from excellent paved highway to 4WD-required river crossings. A 4WD SUV is strongly recommended ($40–$80/day). Note: Costa Rican road conditions and potholes are notorious. Always buy full insurance.",
                  b: "Best for flexibility",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Costa Rica Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The classic first-timer circuit: Arenal Volcano → Monteverde Cloud Forest → Manuel Antonio Pacific Coast. The final two days offer an optional extension to Corcovado, Tortuguero, or Tamarindo. All costs shown in USD and CRC (Costa Rican colón, approx. ₡520 = $1 as of 2026).
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="San José Arrival — La Fortuna transfer"
                cost="$70–$160 USD (₡36,400–₡83,200 CRC)"
                items={[
                  "Land at Juan Santamaría International Airport (SJO). Pick up a Kolbi or Claro SIM card in the arrivals hall (~$10, 10–15GB data) — essential for navigation and Uber in San José.",
                  "Budget option: Take a shared Interbus shuttle to La Fortuna ($35, 3–4 hrs). Mid-range: private transfer ($120 for up to 4 people, door-to-door). Both options deliver you to the base of Arenal Volcano by late afternoon.",
                  "Check in to your accommodation — La Fortuna town is small and walkable. Budget dorms at Selina La Fortuna from $18/night; boutique hotels from $60–$80/night.",
                  "Walk to the free volcano viewpoint at the edge of town for your first look at Arenal. On a clear evening, the cone rises dramatically above the treeline — perfectly symmetrical and occasionally trailing a wisp of smoke.",
                  "Eat at a local soda (family-run restaurant): rice, beans, chicken casado for $4–6. Try Soda La Hormiga or any of the local spots on the main strip. You&apos;re paying San José prices at a quarter of the tourist restaurant mark-up.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Arenal Volcano — hike, hot springs, La Fortuna Waterfall"
                cost="$65–$200 USD (₡33,800–₡104,000 CRC)"
                items={[
                  "Start early: rent a bicycle ($10/day) or join a guided Arenal Volcano National Park hike ($35 with naturalist guide). The Las Coladas trail crosses the 1992 lava field — still scarred and dramatic, with secondary forest slowly reclaiming the basalt. Park entry: $18.",
                  "Late morning: La Fortuna Waterfall — 500 steps descend through rainforest to a 70-metre cascade pouring into a turquoise plunge pool. Entry $18. The swim at the base is one of the best moments in Costa Rica — cold, powerful, and completely surrounded by jungle.",
                  "Afternoon: Hot springs. Budget option — walk 1.5km from town to the free Río Cholín hot spring pool (locals call it the &apos;poor man&apos;s Tabacón&apos;, genuinely good). Mid-range/luxury: Tabacón Grand Thermal Resort day pass ($85) — a series of thermally heated river pools in manicured grounds at the volcano&apos;s base.",
                  "Evening: Dinner at Don Rufino if mid-range budget (best in La Fortuna), or Soda La Hormiga for budget (casado $5). The streets of La Fortuna are pleasant to walk after dark — fireflies, volcano silhouette, and no traffic.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hanging Bridges + Jeep-Boat-Jeep to Monteverde"
                cost="$80–$200 USD (₡41,600–₡104,000 CRC)"
                items={[
                  "Morning: Mistico Hanging Bridges — 16 suspension bridges over the primary rainforest canopy ($24, self-guided). Toucans, howler monkeys, poison dart frogs, and if you look carefully, a Jesus Christ lizard running across the water surface. Arrive by 7am before the tour groups.",
                  "Mid-morning: Take the jeep-boat-jeep transfer from La Fortuna to Monteverde ($30, 3 hours). This combination — 4WD jeep to Lake Arenal, a small boat across the lake with volcano views, then another jeep up into the cloud forest — is far superior to the 5-hour bus via San José. Do not take the bus.",
                  "Arrive in Santa Elena (Monteverde&apos;s village) by early afternoon. Check in and allow 30 minutes of altitude adjustment — Monteverde sits at 1,400 metres and the air is noticeably cooler and thinner than La Fortuna.",
                  "Late afternoon: Walk the Santa Elena Cloud Forest Reserve ($14 entry, cheaper than the main Monteverde reserve). The transition from tropical lowland to cloud forest is immediate and startling — everything is dripping, moss-covered, and dimly lit even at 3pm.",
                  "Dinner at Taco Taco or Café Caburé in Santa Elena. Café Caburé is famous for homemade chocolate and has a fig tree outside the window where resplendent quetzals are regularly spotted in season (Jan–May).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Monteverde Cloud Forest — zip-lining, canopy walks"
                cost="$85–$250 USD (₡44,200–₡130,000 CRC)"
                items={[
                  "Morning (6am): Guided birdwatching in the Monteverde Cloud Forest Reserve ($25 entry + $50 specialist guide). The resplendent quetzal — the most extraordinary bird in the Americas, with iridescent green tail feathers up to a metre long — is most active at dawn in season (Jan–May). Even without a quetzal sighting, the cloud forest at dawn is extraordinary: mist rising through the canopy, bellbirds calling, and emerald toucanets perched on cecropia trees.",
                  "Late morning: Zip-lining. Budget: 100% Aventura or Extremo ($45 for 11 cables including a Tarzan swing over the canopy). Mid-range/luxury: Sky Adventures ($85 combo of gondola, zip-lines, and hanging bridges). Monteverde&apos;s zip-lines were the first in Costa Rica and the canopy views have barely been matched anywhere else in the country.",
                  "Afternoon: Selvatura Park butterfly garden and hummingbird garden ($30 combined). Standing in the centre of the hummingbird garden with 15 species hovering around your head while they refuel at the feeders is one of those moments that makes you understand why Costa Rica exists.",
                  "Evening: Guided night walk in cloud forest ($30) — tree frogs, tarantulas, sleeping hummingbirds, and a kinkajou if you are lucky. The guide&apos;s spotlight reveals a completely different world from the daytime forest.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Manuel Antonio National Park — beach, monkeys, sloths"
                cost="$100–$200 USD (₡52,000–₡104,000 CRC)"
                items={[
                  "Take the 6am Interbus shuttle Monteverde → Manuel Antonio ($45–$55, 5 hours with connection). Book ahead — this route sells out in dry season. Arrive in Quepos by mid-morning.",
                  "Check in to your hotel. Budget: guesthouses in Quepos from $22/night (15 min from the park). Mid-range: boutique hotels on the Manuel Antonio road from $80–$110/night, many with Pacific ocean views through the rainforest.",
                  "Afternoon entry to Manuel Antonio National Park ($18, book online at sinac.go.cr — hard cap of 1,500 visitors per day, sells out weeks ahead in dry season). Afternoon entry is quieter than morning and the golden hour light through the forest is exceptional.",
                  "Wildlife is abundant and fearless: white-faced capuchin monkeys walk across your path and steal anything edible, three-toed sloths hang motionless in the cecropia trees overhead, coatis trot along the trail, and scarlet macaws call from the canopy. This is genuinely one of the most wildlife-rich parks in the world per square kilometre.",
                  "Swim at Playa Manuel Antonio inside the park — calm, sheltered, and monkeys watching from the treeline. Or take Playa Biesanz (just outside the park gate, free) for a quieter sunset swim.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Corcovado or Tortuguero — the deep jungle option"
                cost="$150–$450 USD (₡78,000–₡234,000 CRC)"
                items={[
                  "Option A — Corcovado National Park (Osa Peninsula): The most biodiverse place on Earth — David Attenborough called it the most biologically intense place on the planet. Accessible via charter flight from San José to Puerto Jiménez ($180 one-way, 45 min vs 7 hrs by road). A guided day hike in the Sirena sector reveals tapirs, peccaries, spider monkeys, scarlet macaws, and sometimes jaguar tracks. Stay at Lapa Rios Ecolodge ($350/night) for the full experience.",
                  "Option B — Tortuguero National Park (Caribbean coast): Accessible only by boat or small plane, Tortuguero is the premier sea turtle nesting site in the Western Hemisphere. Green turtles nest July–October; leatherbacks April–July. A licensed guide night walk on the black sand beach to watch a 150kg turtle lay 80–100 eggs under red-filtered torchlight is genuinely life-changing. Hotels from $80/night (mid-range lodges).",
                  "Option C — Stay Manuel Antonio (surfers/beach option): Take a sunrise surf lesson at Playa Biesanz or head north to Dominical beach (1 hr by bus, $5) for consistent beginner waves ($40 for a 2-hour lesson). Dominical has a relaxed surf town vibe without the tourist infrastructure of Manuel Antonio.",
                  "Budget travellers doing the core circuit can skip Day 6 &apos;extension&apos; destinations and instead spend a second day in Manuel Antonio — hike the full Punta Catedral circuit (360° Pacific views from the headland), kayak the mangroves with a guide ($35), or simply find a hammock.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Tamarindo surf + return to San José"
                cost="$80–$200 USD (₡41,600–₡104,000 CRC)"
                items={[
                  "Optional morning: If departing from the Guanacaste region, Tamarindo beach is one of Costa Rica&apos;s most famous surf towns — consistent waves, excellent surf schools ($40 per 2-hr lesson), and a lively beach strip. Access from Manuel Antonio requires a 5–6 hr drive or a $90 domestic flight to Liberia (LIR).",
                  "Standard final day: Return shuttle from Quepos/Manuel Antonio to San José ($25–$45 shared shuttle, 3 hours). Arriving by 2pm gives time to explore San José — the Museo del Oro Precolombino (Pre-Columbian Gold Museum, $10) near Plaza de la Cultura is genuinely impressive. Alternatively, fly from Quepos (XQP) to SJO in 30 minutes ($80–$120).",
                  "San José airport area: Several good final-night restaurants near SJO airport in Alajuela — Restaurante Nuestra Tierra for a traditional Costa Rican goodbye meal (gallo pinto, casado, and patacones, $15–$25).",
                  "Buy your Pura Vida souvenir: coffee from Tarrazú (the best-quality region) at a proper coffee shop, or locally made hammocks, chocolate, and hot sauce at the Mercado Central in San José.",
                  "Depart from SJO with a wildlife reel in your head, a strong desire for more gallo pinto, and a genuine understanding of why 99% of Costa Rica&apos;s electricity is renewable and 25% of the country is national park. Pura Vida.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Costa Rica" onPlanTrip={() => setModalOpen(true)} />

          {/* ── NATURE & WILDLIFE GUIDE ── */}
          <section id="wildlife" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🦥 Nature &amp; Wildlife Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Costa Rica&apos;s wildlife is not confined to national parks — it spills over into gardens, roadsides, and hotel grounds everywhere. Here is what to watch for, where, and when.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Three-Toed Sloth",
                  w: "Manuel Antonio, Tortuguero, Monteverde",
                  d: "The slowest mammal on earth — three-toed sloths move so slowly that algae grows on their fur, turning them green for camouflage. In Manuel Antonio, guides can spot them hanging motionless in cecropia trees 20m overhead that look like empty sky to the untrained eye. Best chance: hire a guide.",
                  t: "Year-round",
                },
                {
                  n: "Resplendent Quetzal",
                  w: "Monteverde, San Gerardo de Dota",
                  d: "The most spectacular bird in the Americas — iridescent green body, crimson chest, and tail feathers up to 1m long on males. The Quetzal god of the Maya. Monteverde is the most accessible spot; San Gerardo de Dota (on the Panamerican Highway) has higher density sightings. Peak season: January to May.",
                  t: "Jan–May (peak)",
                },
                {
                  n: "Sea Turtles (Green, Leatherback)",
                  w: "Tortuguero (Caribbean), Ostional (Pacific)",
                  d: "Tortuguero is the most important green turtle nesting site in the Western Hemisphere — tens of thousands of turtles nest July–October. Leatherbacks nest April–July. Ostional beach on the Pacific has the largest olive ridley aggregation (arribada) in the world — up to 500,000 turtles arrive over 5–7 days, typically September–October.",
                  t: "Apr–Oct (turtles)",
                },
                {
                  n: "White-Faced Capuchin Monkey",
                  w: "Manuel Antonio, Corcovado, Tortuguero",
                  d: "Costa Rica&apos;s most common primate and the most habituated to humans. In Manuel Antonio they will walk across your path, inspect your daypack, and steal your lunch if you look away for 3 seconds. They are also remarkably intelligent — documented using tools and engaging in complex social behaviour. Fascinating to observe from a safe distance.",
                  t: "Year-round",
                },
                {
                  n: "Scarlet Macaw",
                  w: "Manuel Antonio, Corcovado, Carara",
                  d: "Seeing a pair of scarlet macaws fly overhead — red, yellow, and blue against a tropical sky — is one of those images that lodges permanently in memory. Carara National Park (near the Río Tárcoles bridge, 1 hr from San José) has the highest density of scarlet macaws in Costa Rica and is an excellent half-day stop en route to Manuel Antonio.",
                  t: "Year-round",
                },
                {
                  n: "Jaguar (and Tapir, Peccary)",
                  w: "Corcovado National Park",
                  d: "Corcovado has the highest density of jaguars in Central America. You are unlikely to see one, but you will see their tracks, scrapes, and the nervous behaviour of peccaries that signals one is nearby. Tapirs are more commonly seen — large, prehistoric-looking mammals that wander the beaches and rivers of Sirena Station. Entry to Corcovado requires a licensed guide.",
                  t: "Dry season (Dec–Apr)",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.w}</span>
                      <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Costa Rica — Volcano, Cloud Forest &amp; Pacific Coast"
            subtitle="Five landscapes that define the Pura Vida experience."
            spots={[
              {
                name: "Arenal Volcano at Dusk",
                query: "arenal volcano costa rica eruption lava sunset jungle",
                desc: "Arenal Volcano — one of the world&apos;s most perfectly symmetrical active volcanoes — glowing above the La Fortuna jungle at dusk.",
              },
              {
                name: "Monteverde Cloud Forest",
                query: "monteverde cloud forest costa rica mist canopy bridge",
                desc: "Suspension bridges through the Monteverde Cloud Forest — moss, mist, and 5% of all known biodiversity on Earth.",
              },
              {
                name: "Manuel Antonio Beach",
                query: "manuel antonio national park beach costa rica monkeys pacific",
                desc: "Playa Manuel Antonio — capuchin monkeys on the beach, scarlet macaws overhead, and the Pacific Ocean ahead.",
              },
              {
                name: "Tortuguero Sea Turtles",
                query: "tortuguero costa rica sea turtle nesting beach caribbean",
                desc: "Green sea turtles nesting on Tortuguero&apos;s black sand beach — the most important nesting site in the Western Hemisphere.",
              },
              {
                name: "Corcovado Rainforest",
                query: "corcovado national park costa rica jungle wildlife osa peninsula",
                desc: "Corcovado — what David Attenborough called &quot;the most biologically intense place on Earth.&quot;",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Costa Rica is the most expensive country in Central America — significantly more expensive than Guatemala, Nicaragua, or Panama. Budget $75–$100/day minimum for a comfortable backpacker trip. All prices in USD and CRC (₡520 = $1, 2026).
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
                    ["🏨 Accommodation/night", "$15–25 (₡7,800–₡13,000)", "$60–100 (₡31,200–₡52,000)", "$250–450 (₡130,000–₡234,000)"],
                    ["🍽 Food/day", "$15–20 (₡7,800–₡10,400)", "$30–45 (₡15,600–₡23,400)", "$60–80 (₡31,200–₡41,600)"],
                    ["🚌 Transport/day", "$10–15 (₡5,200–₡7,800)", "$20–30 (₡10,400–₡15,600)", "$50–100 (₡26,000–₡52,000)"],
                    ["🎭 Activities/day", "$15–25 (₡7,800–₡13,000)", "$40–60 (₡20,800–₡31,200)", "$80–150 (₡41,600–₡78,000)"],
                    ["💰 Total/day", "$75 (₡39,000)", "$160 (₡83,200)", "$380 (₡197,600)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($75–$100/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms, sodas and market food, shared shuttles, and national park entries only. Costa Rica&apos;s hostel scene is excellent — Selina properties in La Fortuna and Manuel Antonio are solid. Budget travellers who come expecting Southeast Asia prices are routinely surprised. $75/day is achievable but requires discipline.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($150–$180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Private rooms in boutique hotels ($60–$100/night), restaurants rather than sodas, guided tours for key parks, and shared shuttles between destinations. This is the sweet spot — you get guides who double wildlife sightings and quality accommodation without paying eco-lodge prices. Budget $40–$60/day for activities alone.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Costa Rica</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation options by region — from Arenal eco-lodges to Monteverde cloud forest stays and Manuel Antonio sea-view hotels.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Arenal — Nayara Springs / Observatory Lodge",
                  type: "Luxury eco-lodge · La Fortuna",
                  price: "From $300/night (₡156,000)",
                  badge: "Most unique",
                  desc: "Nayara Springs is the benchmark: private plunge pools with direct volcano views, volcanic hot spring soaking, and a jungle corridor running to the national park. The Arenal Observatory Lodge sits inside the national park boundary — as close to the volcano as permitted, with incredible crater views on clear mornings. Book 3–4 months ahead in dry season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Monteverde — El Silencio Lodge / Belmar",
                  type: "Cloud forest eco-lodge · Monteverde",
                  price: "From $150/night (₡78,000)",
                  badge: "Most atmospheric",
                  desc: "El Silencio is a genuinely special property — situated in its own private cloud forest reserve, with spa treatments using cloud forest botanicals and guided walks on private trails. Hotel Belmar is a more affordable alternative with mountain views and excellent food. Both are significantly better than staying in Santa Elena village if budget allows.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Manuel Antonio — Tulemar / Makanda",
                  type: "Boutique resort · Manuel Antonio",
                  price: "From $120/night (₡62,400)",
                  badge: "Best Pacific views",
                  desc: "Tulemar Bungalows and Makanda by the Sea are the two most celebrated properties in Manuel Antonio — both in the forested hillside above the park, both with jaw-dropping Pacific ocean views, and both with monkeys visiting the gardens at dawn. Significantly better than the cheaper hotels on the main road into town.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Budget — Selina Hostels / Local Guesthouses",
                  type: "Hostel · Multiple locations",
                  price: "From $18–$35/night (₡9,360–₡18,200)",
                  badge: "Best for backpackers",
                  desc: "Selina has well-run properties in La Fortuna, Monteverde, and Manuel Antonio — dorms from $18, private rooms from $45. Local guesthouses in Quepos (for Manuel Antonio) run $20–$35 for a private room with fan. The hostel and budget guesthouse scene in Costa Rica is excellent — better than most comparable destinations in Latin America.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Costa Rica</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Costa Rican cuisine is generous, warming, and deeply rice-and-bean-centred. The local soda (family-run restaurant) is always the best value — $4–$8 for a complete plate lunch versus $15–$25 at tourist restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gallo Pinto (Rice and Beans)",
                  t: "National dish · Everywhere",
                  d: "Black beans and rice cooked together with onion, peppers, and Salsa Lizano (the Costa Rican HP sauce). Eaten at breakfast with eggs, fried plantains, and sour cream. It is simultaneously humble and perfect. Any soda serves it; the best versions are found at roadside sodas and local family restaurants far from tourist centres.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Casado (The Plate Lunch)",
                  t: "Local sodas · $4–$8",
                  d: "A married plate: rice, black beans, fried plantains, a salad, and a protein (grilled chicken, fish, or beef). The casado is the backbone of Costa Rican eating — filling, balanced, and impossibly cheap at a good soda. In tourist areas expect to pay $10–$15 for the same plate. The rule: the further from the main strip, the better the casado.",
                  b: "Best value",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Ceviche (Fresh Catch)",
                  t: "Coastal restaurants · $6–$15",
                  d: "Costa Rican ceviche uses tilapia, corvina, or fresh catch marinated in lime juice with cilantro, onion, and peppers — served cold, immediately, in a glass with plantain chips. On the Pacific coast (Quepos, Tamarindo, Jaco) and the Caribbean coast (Puerto Viejo, Tortuguero), fresh ceviche from a fisherman&apos;s kiosk is one of the great cheap pleasures of travelling here.",
                  b: "Coastal staple",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Sodas — Local Family Restaurants",
                  t: "Local experience · All regions",
                  d: "A soda is to Costa Rica what a dhaba is to India or a café de barrio to Colombia — the workhorse institution of local eating. Every town has several; they are identified by plastic chairs, handwritten menus, a TV showing football, and $4–$6 complete meals. Soda La Hormiga in La Fortuna and the sodas in the Quepos market are good benchmarks. Never eat lunch at a restaurant facing a national park entrance if there is a soda 50m away.",
                  b: "Authentic local",
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
            destination="Costa Rica"
            hotels={[
              {
                name: "Nayara Springs",
                type: "Luxury eco-lodge · Arenal Volcano views",
                price: "From $300/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/cr/nayara-springs.html?aid=2820480",
              },
              {
                name: "Tulemar Bungalows",
                type: "Boutique resort · Manuel Antonio",
                price: "From $180/night",
                rating: "5",
                badge: "Best Pacific views",
                url: "https://www.booking.com/hotel/cr/tulemar-bungalows-and-villas.html?aid=2820480",
              },
              {
                name: "Selina La Fortuna",
                type: "Hostel · La Fortuna",
                price: "From $18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/cr/selina-la-fortuna.html?aid=2820480",
              },
              {
                name: "Monteverde Lodge & Gardens",
                type: "Cloud forest lodge · Monteverde",
                price: "From $130/night",
                rating: "4",
                badge: "Best cloud forest",
                url: "https://www.booking.com/hotel/cr/monteverde-lodge-gardens.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Arenal Volcano Hike & Hot Springs",
                duration: "8 hrs",
                price: "From $75/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=arenal+volcano+hike+hot+springs&partner_id=PSZA5UI",
              },
              {
                name: "Monteverde Zip-Line Canopy Tour",
                duration: "3 hrs",
                price: "From $45/person",
                badge: "Classic",
                url: "https://www.getyourguide.com/s/?q=monteverde+zipline&partner_id=PSZA5UI",
              },
              {
                name: "Manuel Antonio Guided Wildlife Walk",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=manuel+antonio+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Tortuguero Sea Turtle Night Tour",
                duration: "2 hrs",
                price: "From $25/person",
                url: "https://www.getyourguide.com/s/?q=tortuguero+sea+turtle+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📏",
                  title: "Underestimating distances and travel times",
                  desc: "Costa Rica is small on a map — 51,000 km² — but the road infrastructure is challenging. La Fortuna to Manuel Antonio looks like 2 hours; it is 4–5 hours minimum, more in traffic. The roads are often narrow, winding mountain roads with potholes and river crossings. Always add 50% to any Google Maps estimate and build buffer days into your itinerary.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎟️",
                  title: "Not booking Manuel Antonio tickets in advance",
                  desc: "Manuel Antonio National Park has a hard daily cap of 1,500 visitors and sells out weeks ahead during dry season (December–April). Book at sinac.go.cr the moment you know your dates. Showing up without a ticket — even at 7am — means you are turned away. This is the most consistent complaint from travellers who visited during dry season without pre-booking.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚌",
                  title: "Taking public buses between major destinations",
                  desc: "The public bus from La Fortuna to Monteverde via San José takes 5+ hours and involves two connections. The jeep-boat-jeep takes 3 hours and is far more scenic. The bus from Monteverde to Manuel Antonio takes 6–7 hours; the shared shuttle takes 5 hours and drops you at your hotel. Use Interbus or Grayline. The $25–$55 cost difference is worth every dollar.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🦥",
                  title: "Skipping guides in national parks",
                  desc: "A three-toed sloth hanging 20m up in a cecropia tree looks exactly like a lump of leaves until a guide points it out. Same for poison dart frogs, anteaters, and Jesus Christ lizards. A 3-hour guided walk in Manuel Antonio or Monteverde at $30–$50 doubles the number of species you see and gives you context — the difference between &apos;that was nice&apos; and a genuinely transformative wildlife experience.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💵",
                  title: "Expecting Southeast Asia prices",
                  desc: "Costa Rica is the most expensive country in Central America — measurably more expensive than Guatemala, Nicaragua, Honduras, or Panama. A rafting trip is $75, a zip-line is $60–$85, a hot spring resort is $50–$85, a mid-range hotel is $80–$120. Budget travellers who come expecting $30/day are routinely shocked. Plan for $75/day minimum and be pleasantly surprised rather than consistently stressed.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Costa Rica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📱",
                  title: "Get a Kolbi SIM at the airport immediately",
                  desc: "Kolbi and Claro SIMs are available at SJO arrivals for ~$10 with 10–15GB data. Coverage is surprisingly good even in remote areas. Essential for Google Maps navigation (rental car roads are complex), Uber in San José, and booking shuttle tickets on the road.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🐢",
                  title: "Tortuguero turtle season: June–October",
                  desc: "Tortuguero is accessible only by boat or small plane — the isolation is part of the experience. Green turtles nest July–October; leatherbacks April–July. Book a licensed guide (mandatory for night beach walks — ₡15,000–₡25,000 / $30–$50). Watching a 150kg turtle excavate a nest and lay 80 eggs under red-filtered torchlight is a once-in-a-lifetime experience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏄",
                  title: "Santa Teresa beats Tamarindo on price and vibe",
                  desc: "Tamarindo is overrun and expensive. Santa Teresa on the southern Nicoya Peninsula still has 1990s lost-beach energy — consistent waves, surf schools at $40 per 2-hour lesson, cheap casados, and no high-rises. Access via ferry from Puntarenas. The extra hour of travel is worth it for a completely different beach experience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌿",
                  title: "Pack biodegradable sunscreen and reef-safe repellent",
                  desc: "Manuel Antonio bans chemical sunscreen in the water to protect coral. DEET is discouraged near sensitive ecosystems. Pack picaridin-based insect repellent and mineral sunscreen — both are available at San José pharmacies (Fischel, Farmacias La Bomba) if you forget. Bring a light rain jacket regardless of season.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌋",
                  title: "Book Tabacón on a weekday, arrive at opening",
                  desc: "Tabacón Grand Thermal Resort ($85 day pass) is genuinely excellent but gets very crowded on weekends and public holidays. Book a Monday–Thursday visit and arrive at 10am opening. By noon the pools are busy; by 3pm they are heaving. The thermally heated river pools directly facing Arenal are the ones worth queuing for.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☕",
                  title: "Buy Tarrazú coffee direct — not airport gift shops",
                  desc: "Costa Rica&apos;s best coffee comes from the Tarrazú region. Airport coffee gift sets are overpriced and often not from the top estates. Buy from a proper roastery: Café Britt (widely available), Kotowa, or — best of all — directly from a small estate in San Gerardo de Dota if you pass through. Look for 100% Arabica, single-estate, shade-grown labels.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Costa Rica" />

          {/* Combine With */}
          <CombineWith currentSlug="costa-rica-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Costa Rica safe to visit in 2026?",
                  a: "Costa Rica is consistently ranked the safest country in Central America. Violent crime against tourists is rare. The main risks are petty theft in San José (especially around the bus terminals), rip currents at Pacific beaches (respect the warning flags), and road hazards — unpaved roads, potholes, and unexpected river crossings. Use registered taxis or Uber in San José, never leave valuables in a rental car, and swim at beaches with lifeguards when possible.",
                },
                {
                  q: "Do Indian passport holders need a visa for Costa Rica?",
                  a: "No — Indian passport holders can enter Costa Rica visa-free for up to 90 days. This is unusually generous: Costa Rica is one of very few countries in the Americas that extends visa-free access to Indian nationals. Bring your return ticket and proof of sufficient funds when asked at immigration. Your passport must be valid for the duration of your stay.",
                },
                {
                  q: "What is the best 7-day Costa Rica route for first-timers?",
                  a: "The classic first-timer circuit is: La Fortuna/Arenal (2–3 nights) → Monteverde (2 nights) → Manuel Antonio (2 nights). Use the jeep-boat-jeep between La Fortuna and Monteverde ($30, 3 hours), shared Interbus shuttles for the rest. This covers the three essential Costa Rican experiences — active volcano, cloud forest, and Pacific coast wildlife beach — in an efficient loop without too much time in transit.",
                },
                {
                  q: "When is the best time to visit Costa Rica?",
                  a: "December to April (dry season) is optimal for the Pacific coast — Arenal, Manuel Antonio, and Guanacaste. The Caribbean coast (Tortuguero, Puerto Viejo) has its dry season September–October and February–March. For sea turtle watching at Tortuguero, go June–October despite the Pacific rain. The cloud forest in Monteverde is genuinely beautiful year-round — the mist is part of the atmosphere, not a weather problem.",
                },
                {
                  q: "How much does 7 days in Costa Rica cost?",
                  a: "Budget travellers doing hostel dorms, sodas, and shared shuttles: $75–$90/day ($525–$630 total for 7 days, excluding international flights). Mid-range with boutique hotels, guided tours, and restaurants: $150–$180/day ($1,050–$1,260 total). Luxury eco-lodges with private guides and Tabacón hot springs: $350–$450/day ($2,450–$3,150 total). Costa Rica is significantly more expensive than most of Central America — come with realistic expectations.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Costa Rica trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/costa-rica-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/best-time-to-visit-costa-rica", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/costa-rica-wildlife-guide", label: "Wildlife guide", icon: "🦥" },
                { href: "/blog/arenal-volcano-guide", label: "Arenal guide", icon: "🌋" },
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
          <RelatedGuides currentSlug="costa-rica-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central &amp; South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Panama City 4 Days — Canal &amp; Casco Viejo", href: "/blog/panama-city-4-days" },
                { label: "Cartagena 4 Days — Colonial Coast", href: "/blog/cartagena-4-days" },
                { label: "Mexico City 4 Days — Culture &amp; Food", href: "/blog/mexico-city-4-days" },
                { label: "Antigua Guatemala 4 Days — Volcanoes", href: "/blog/antigua-guatemala-4-days" },
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
