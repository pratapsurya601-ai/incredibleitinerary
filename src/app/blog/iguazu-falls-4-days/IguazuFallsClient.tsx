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
const IGUAZU_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Iguazu Falls Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🗺️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Iguazu Falls 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Iguazu Falls in 4 Days — both sides, Devil%27s Throat and the Triple Frontier&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/iguazu-falls-4-days"
        imageUrl="https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80"
        description="Iguazu Falls in 4 Days: both the Argentine and Brazilian sides, Devil&apos;s Throat, Macuco Safari boat ride, Triple Frontier — complete travel guide with budget breakdown."
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
export default function IguazuFallsClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={IGUAZU_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Iguazu Falls" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="iguazu falls argentina brazil waterfalls jungle rainbow mist"
            fallback="https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1600&q=80"
            alt="Iguazu Falls Argentina Brazil panoramic waterfalls jungle rainbow mist"
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
              <span className="text-white/70">Iguazu Falls 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Iguazu Falls in 4 Days:
                <em className="italic text-teal-300"> Devil&apos;s Throat, Both Sides &amp; the Triple Frontier</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                275 waterfalls, 2.7km wide, 82 metres straight down — and Eleanor Roosevelt said &apos;Poor Niagara&apos;. The complete guide to both the Argentine and Brazilian sides, from $80/day.
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
              <span>🌊 Argentina / Brazil</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Eleanor Roosevelt reportedly said upon seeing Iguazu Falls: &apos;Poor Niagara&apos; — and she was right. 275 individual falls stretching 2.7km wide with the Devil&apos;s Throat thundering 82 metres straight down so loudly you feel it in your chest, toucans and coatis wandering the forest walkways between viewing platforms, and a point where Argentina, Brazil, and Paraguay all share a border in the middle of three mighty rivers.
            </p>
          </blockquote>

          {/* ── WHAT IGUAZU ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Iguazu Falls Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Iguazu is not one waterfall. It is a system of 275 individual cataracts arranged in a horseshoe nearly three kilometres wide on the border of Argentina and Brazil, formed where the Iguazu River plunges off the Paraná Plateau into a canyon below. The falls are divided between two national parks — Iguazú National Park on the Argentine side and Parque Nacional do Iguaçu on the Brazilian side — both of which are UNESCO World Heritage Sites (listed separately in 1984 and 1986).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Garganta del Diablo (Devil&apos;s Throat) is the centrepiece: an 82-metre horseshoe-shaped plunge where 60% of the Iguazu River&apos;s total flow concentrates into a single point. The roar is audible from two kilometres away. The mist column rises 30 metres above the falls and is visible from the Brazilian side&apos;s panoramic walkway as a permanent cloud. Standing on the Argentine catwalk directly above the throat — with the abyss two metres from your feet — is one of the most physically overwhelming experiences in natural travel.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Argentine side gives you immersion: you walk among and above the falls on elevated catwalks, taking boat rides under the curtain of water, and standing on the Devil&apos;s Throat platform with mist soaking you from below. The Brazilian side gives you perspective: a single elevated walkway running along the canyon rim with the entire arc of falls in front of you — the photograph that appears on every magazine cover. Both sides are essential. Plan one full day for each.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🌊" label="Individual Falls" value="275" />
              <StatCard icon="📏" label="Width of Falls" value="2.7km" />
              <StatCard icon="⬇️" label="Devil&apos;s Throat Drop" value="82 metres" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Iguazu Falls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Aug–Nov",
                  i: "☀️",
                  t: "Dry Season — Best Period",
                  d: "18–28°C, low humidity, comfortable for walking all day. September and October are the sweet spot: comfortable temperatures, lower crowds, and the falls running at a pleasant volume. November starts to warm but remains excellent. The rainbow effect in the mist is strongest in this period.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–May",
                  i: "🌧️",
                  t: "Post-Wet Season — High Water",
                  d: "After the February–March rainy season, the falls run at their most powerful — water volume can be 4x the dry season average. Photographs are spectacular but the Devil&apos;s Throat walkway may be partially flooded and some platforms close. Temperatures 22–30°C with moderate humidity.",
                  b: "Maximum power",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🔥",
                  t: "Peak Summer — Avoid if Possible",
                  d: "40°C+ with 90% humidity in December–February. Crowds double (this is Argentine school holiday season), prices spike, and the heat makes walking the circuits genuinely unpleasant. The falls are beautiful but the experience suffers. If you must visit, arrive at park opening and leave by noon.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun–Jul",
                  i: "❄️",
                  t: "Winter — Cool and Quiet",
                  d: "June and July are the coolest months (12–20°C) and the least crowded outside of the July school holiday week. Water volume is lower so the falls look less dramatic, but the experience is cooler and more peaceful. July school holiday week (mid-July) is busy — avoid that specific week.",
                  b: "Quiet season",
                  c: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Iguazu Falls</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> There are two airports serving Iguazu — <strong className="font-medium">IGR (Cataratas del Iguazú Airport)</strong> on the Argentine side near Puerto Iguazú, and <strong className="font-medium">IGU (Foz do Iguaçu International Airport)</strong> on the Brazilian side. Both are 15–20 minutes from their respective park entrances. Flights into IGU (Brazil) are often significantly cheaper.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into IGU (Foz do Iguaçu, Brazil) — recommended",
                  d: "More flight options from São Paulo (1h45m), Rio de Janeiro (2hrs), Buenos Aires (2hrs). Budget airlines LATAM, Gol, and Azul serve IGU extensively. Bus from IGU airport to Foz do Iguaçu city centre: R$5 (~$1), 25 minutes. Foz do Iguaçu is significantly cheaper for accommodation and food than Puerto Iguazú.",
                  b: "Cheapest flights",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly into IGR (Puerto Iguazú, Argentina)",
                  d: "Direct flights from Buenos Aires Aeroparque (1h45m) on Aerolíneas Argentinas and JetSMART. Taxi from IGR to Puerto Iguazú town: ~$8 (15 mins). The Argentine side park entrance is only 20 minutes from the airport. Convenient if you&apos;re routing through Buenos Aires.",
                  b: "Argentine gateway",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Buenos Aires (long-haul)",
                  d: "Buenos Aires Retiro station → Puerto Iguazú: 18 hours, ~$30–60 on premium Cama-suite buses (fully reclining seats, meals included). Surprisingly comfortable for the budget-conscious. Departs evening, arrives morning.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚌",
                  t: "Cross-border bus: Puerto Iguazú ↔ Foz do Iguaçu",
                  d: "Direct bus between the Argentine and Brazilian towns runs every 30 minutes, 06:00–22:00. The journey takes 30 minutes and costs R$15 (~$3) or ARS 800. The bus stops briefly at both Argentine and Brazilian customs — have your passport ready. Keep your Argentine entry stamp when crossing to Brazil.",
                  b: "Essential for both sides",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Iguazu Falls Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured around both sides of the falls, with extra days for the Triple Frontier, Itaipu Dam, Parque das Aves (Bird Park), and the Macuco jungle trail. Allocate a full day to each main park side — rushing either is a mistake.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive · Triple Frontier · Settle Into Foz do Iguaçu"
                cost="$55–75 (transport, accommodation, food, Triple Frontier free)"
                items={[
                  "Fly into IGU (Foz do Iguaçu, Brazil) — usually the cheapest option. Take bus #120 from the airport to the city centre (R$5 / ~$1), 30 minutes. Accommodation in Foz runs $15–35/night for a clean guesthouse or budget hotel — considerably cheaper than Puerto Iguazú.",
                  "Afternoon: visit the Marco das Três Fronteiras (Triple Frontier) on the Brazilian side. This is where the Iguazu and Paraná rivers meet, marking the simultaneous border of Argentina, Brazil, and Paraguay. The viewpoint is free. From here you can see the coloured obelisks of all three countries and, on clear days, the town of Ciudad del Este in Paraguay across the water.",
                  "Optional: short passenger boat tour around the Triple Frontier confluence ($10–15) operated from the Brazilian dock — gives a low-angle view of all three obelisks from the water.",
                  "Evening: dinner at one of Foz do Iguaçu&apos;s all-you-can-eat Brazilian churrascarias (R$40–60 / $8–12). The quality and value is extraordinary — multiple cuts of grilled meat carved tableside, plus unlimited salad bar. This is one of the best-value meals in South America.",
                  "Plan tomorrow: buy your Brazilian side park ticket online at cataratasdoiguacu.com.br to avoid the morning queue. Set alarm for 8:30am — aim to be at the park entrance by 9am.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Brazilian Side — Panoramic Walkway · Macuco Safari Boat"
                cost="$80–100 (transport, park entry R$90/$18, boat ride $30, food)"
                items={[
                  "Take the public bus from Foz city to the Brazilian park entrance (R$5 each way, 30 minutes). The obligatory shuttle bus inside the park is included in the entry fee (R$90 / ~$18 per person).",
                  "The Brazilian side has one main path: a 1.2km elevated walkway running along the canyon rim with the full arc of the falls in front of you. This is where the iconic wide-angle photograph is taken. Walk it slowly — the perspective changes dramatically every 50 metres as you approach the Devil&apos;s Throat. The final platform puts you level with the top of the falls with the full panorama behind you.",
                  "The mist at the central platform can be intense — have your waterproof bag and a dry cloth for your camera lens. The rainbow appears in the mist between 10am–1pm when the sun is at the right angle for the classic rainbow-over-falls photograph.",
                  "Macuco Safari (Brazilian side): zodiac boat from the river launch ramp goes directly under the main curtain of falling water. You will be completely soaked. Wear swimwear or clothes you don&apos;t mind getting drenched. Cost: R$150 (~$30). Absolutely worth it. Book at the park entrance or online — it sells out by midday.",
                  "Afternoon: Parque das Aves (Bird Park) is immediately adjacent to the Brazilian park entrance — 150 species, walk-through aviaries with free-flying toucans and macaws, and a Blue Morpho butterfly house where hundreds of iridescent butterflies land on your clothes. Entry: R$80 (~$16). Takes 1.5 hours. Most visitors skip it — don&apos;t.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Argentine Side — Devil&apos;s Throat · Upper &amp; Lower Circuit"
                cost="$75–95 (bus $3, park entry ARS 4500/$9–12, boat $50, food)"
                items={[
                  "Take the direct bus from Foz do Iguaçu to Puerto Iguazú, Argentina (R$15 / ~$3, 30 minutes). The bus crosses the Tancredo Neves Bridge with a brief passport check at both Argentine and Brazilian customs — keep your passport in your daypack, not your checked bag.",
                  "Enter Parque Nacional Iguazú on the Argentine side (entry: ARS 4,500 / ~$9–12 depending on current exchange rates). Take the free Tren de la Selva (Jungle Train) to the Garganta del Diablo station — a 3.5km ride through the subtropical jungle, 15 minutes.",
                  "Garganta del Diablo walkway: a 1.1km elevated catwalk over the river leading directly to the horseshoe rim of the Devil&apos;s Throat. You walk out over the falls until the viewing platform is literally on top of the 82-metre drop, with the maelstrom below and mist rising around you. Arrive before 9am — by 10:30am the walkway is packed with tour groups. The early morning light is also dramatically better for photography.",
                  "Upper Circuit (Circuito Superior): 1.75km walkway with elevated views of the top of 8 major falls. Good for photographs looking down into the gorge. Lower Circuit (Circuito Inferior): 1.7km winding path that descends to river level, passing beneath several falls and ending at a free boat crossing to San Martín Island (a 270-degree view platform). Allow 2–3 hours for both circuits combined.",
                  "Optional: Macuco Safari on the Argentine side ($50) is similar to the Brazilian boat ride but from a different angle, passing under a different section of the falls. If budget allows, do both — the experiences are genuinely different. If budget is tight, choose one (the Argentine version is generally rated slightly better for adrenaline).",
                  "Evening in Puerto Iguazú: the town has better-value restaurants than Foz for Argentine food. Try La Rueda or El Quincho del Tío Querido for grilled Argentine river fish (surubí) and local Malbec. Budget dinner: $15–20 for a full parilla with wine.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Macuco Jungle Trail · Itaipu Dam · Departure"
                cost="$60–85 (Macuco trail included in park entry, Itaipu $20–35, airport transfer)"
                items={[
                  "Morning: re-enter the Argentine side park for the Macuco Trail — a 3.5km jungle walk to Arrechea waterfall, a hidden cascade reached only on foot. The trail passes through dense Atlantic Forest and is one of the best wildlife corridors in the park. Bring binoculars: toucans (both Toco and Saffron), coatis with pups in season (Aug–Nov), blue and red butterflies, howler monkeys audible in the canopy. The trail takes 1.5–2 hours return. Arrechea waterfall at the end is a peaceful 25-metre fall into a jungle pool — entirely different character from the main circuit falls.",
                  "Alternatively, if you skipped Itaipu Dam on Day 3: the afternoon is perfect for the Itaipu Special Circuit Tour ($35, includes turbine room access and an engineer briefing). Itaipu is the world&apos;s second-largest hydroelectric dam and generates 15% of all Brazilian electricity. The scale — 8km wide, 196 metres tall — is as impressive in its own way as the falls. The Special Circuit takes you to parts of the dam structure not open on the basic tour.",
                  "Lunchtime: buy mate gourds, guarana products, and artisan honey from the Puerto Iguazú central market before departure. Argentine artisan chocolate and dulce de leche are excellent gifts.",
                  "Afternoon: transfer to IGR (Argentine, 20 minutes from Puerto Iguazú) or IGU (Brazilian, 25 minutes from Foz) depending on your onward routing. Both airports handle flights to Buenos Aires (1h45m) and São Paulo (1h45m) as onward connections for longer South America itineraries.",
                  "Currency tip: change any remaining Argentine pesos at the IGR airport before departure — the currency is not easily exchangeable outside Argentina. Use your remaining Brazilian reais for airport food and water.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Iguazu Falls" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key viewpoints, circuits, and activities in priority order. Argentine side entry: ARS 4,500 (~$9–12). Brazilian side entry: R$90 (~$18). Both are UNESCO World Heritage Sites.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Garganta del Diablo (Devil\u2019s Throat)",
                  e: "Included in Argentine side entry (ARS 4,500)",
                  d: "The centrepiece of Iguazu: an 82-metre horseshoe plunge carrying 60% of the river\u2019s total flow. The Argentine catwalk puts you directly above the drop — the mist, roar, and physical sensation are overwhelming. Arrive before 9am. From the Brazilian side, the Devil\u2019s Throat appears as a permanent white cloud on the horizon.",
                  t: "Must see · 45 mins on platform",
                },
                {
                  n: "Brazilian Side Panoramic Walkway",
                  e: "Included in Brazilian side entry (R$90 / ~$18)",
                  d: "A 1.2km elevated path along the canyon rim showing the full 2.7km arc of falls simultaneously. This is the wide-angle view used in every magazine photograph of Iguazu. The rainbow in the mist appears mid-morning. The final platform gives you eye-level with the top of the falls.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Argentine Upper Circuit (Circuito Superior)",
                  e: "Included in Argentine side entry",
                  d: "A 1.75km elevated walkway with top-down views into the gorge past 8 named falls. Best for photography showing the falls\u2019 structure from above. Less physically intense than the Lower Circuit. Good for the first circuit of the morning before the heat builds.",
                  t: "1.5–2 hrs",
                },
                {
                  n: "Argentine Lower Circuit (Circuito Inferior)",
                  e: "Included in Argentine side entry",
                  d: "A 1.7km path descending to river level, passing under several falls with spray and mist at close range. Ends at the San Mart\u00edn Island free boat crossing — the island viewpoint has 270-degree falls views. The most immersive circuit on the Argentine side.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Macuco Safari (Boat Ride)",
                  e: "Argentine side ~$50 · Brazilian side R$150 (~$30)",
                  d: "Zodiac inflatable boat ride to the base of the falls, culminating in a drive directly under a curtain of falling water. You will be completely soaked. Wear swimwear or quick-dry clothing. Waterproof your electronics. Both sides offer this experience; the Argentine version gets you slightly deeper under the main falls.",
                  t: "Must do · 1 hr",
                },
                {
                  n: "Parque das Aves (Bird Park)",
                  e: "R$80 (~$16) · Adjacent to Brazilian park entrance",
                  d: "150 species in walk-through aviaries, including Toco toucans, Hyacinth macaws, and flamingos. The Blue Morpho butterfly house is extraordinary \u2014 hundreds of iridescent butterflies landing on visitors. Takes 1.5 hours. Almost all Iguazu visitors skip this; experienced travellers consider it one of the best bird parks in South America.",
                  t: "Underrated · 1.5 hrs",
                },
                {
                  n: "Itaipu Dam",
                  e: "Basic tour $20 · Special Circuit $35",
                  d: "The world\u2019s second-largest hydroelectric dam, generating 15% of Brazil\u2019s electricity. 8km wide, 196 metres tall. The Special Circuit includes turbine room access and an engineer briefing. A genuine engineering marvel that most Iguazu visitors never see.",
                  t: "Half day · 2–3 hrs",
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
            title="Iguazu Falls — Devil&apos;s Throat, Rainbows &amp; Jungle"
            subtitle="The world&apos;s most theatrical natural wonder, captured from both sides of the border."
            spots={[
              {
                name: "Garganta del Diablo",
                query: "iguazu falls devil throat garganta diablo argentina mist spray",
                desc: "The Devil&apos;s Throat — 82 metres straight down, 60% of the entire river concentrated into one thundering horseshoe.",
              },
              {
                name: "Brazilian Side Panoramic View",
                query: "iguazu falls brazil panoramic walkway rainbow mist waterfall",
                desc: "The iconic wide-angle view from the Brazilian side&apos;s elevated walkway — the full 2.7km arc of falls with rainbow in the mist.",
              },
              {
                name: "Macuco Safari Boat Ride",
                query: "iguazu falls boat ride zodiac under waterfall macuco safari",
                desc: "The Macuco Safari zodiac boat taking visitors directly under the main curtain of falling water — you will be completely soaked.",
              },
              {
                name: "Parque das Aves Toucan",
                query: "toco toucan brazil iguazu parque das aves bird park closeup",
                desc: "Toco toucans in the walk-through aviaries of Parque das Aves — the most underrated attraction at Iguazu.",
              },
              {
                name: "Triple Frontier",
                query: "triple frontier iguazu three borders argentina brazil paraguay",
                desc: "The Triple Frontier where Argentina, Brazil, and Paraguay meet at the confluence of the Iguazu and Paraná rivers.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Iguazu is manageable on a genuine budget — the main costs are park entries (which you can&apos;t avoid) and the boat ride (which you shouldn&apos;t skip). Staying in Foz do Iguaçu (Brazil) saves 30–40% compared to Puerto Iguazú (Argentina).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4 nights)", "$15–25/night (Foz hostel)", "$60–90/night (boutique hotel)", "$400–700/night (Belmond)"],
                    ["🍽️ Food (4 days)", "$8–18/day (churrascaria + street)", "$25–40/day (restaurants)", "Included or $60–100"],
                    ["🚌 Transport (buses)", "$10–20 total (local buses)", "$25–50 (taxis + transfers)", "$80–200 (private + helicopter)"],
                    ["🌊 Argentine side entry (ARS 4,500)", "$9–12", "$9–12", "$9–12"],
                    ["🇧🇷 Brazilian side entry (R$90)", "$18", "$18", "$18"],
                    ["⛵ Macuco Safari (boat ride)", "$30–50", "$50 (Argentine side)", "Included in packages"],
                    ["🐦 Bird Park + Itaipu", "$0–36", "$36–55", "$55–80"],
                    ["TOTAL (4 days, per person)", "$280–400", "$560–850", "$2,200–4,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–85/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Foz do Iguaçu hostels ($15–20/night), take public buses, do the Brazilian side boat ride ($30), eat at churrascarias. Entirely comfortable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($150–200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Puerto Iguazú boutique hotel ($70–90), both boat rides, private guide for the Argentine side ($60 half-day), Itaipu Special Circuit, Bird Park.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury ($550–900/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Belmond Hotel das Cataratas (inside the Brazilian park, $400–700) gives exclusive early morning and evening falls access. Helicopter tour ($120–150) over all 275 falls simultaneously.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay at Iguazu Falls</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key choice: stay in Foz do Iguaçu (Brazil) for value, or Puerto Iguazú (Argentina) for atmosphere. Foz is 30–40% cheaper and has more budget options. Puerto Iguazú has better restaurants and a more relaxed town feel. The direct bus between them runs 30 minutes, so either base works.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Belmond Hotel das Cataratas",
                  type: "Ultra-luxury · Inside Brazilian national park",
                  price: "From $400/night",
                  badge: "Most unique stay",
                  desc: "The only hotel physically inside either national park — guests have exclusive access to the falls walkway after 6pm and before 9am when the park is closed to day visitors. Colonial-style architecture, Itaipú restaurant, private pool terrace. One of South America&apos;s most extraordinary hotel positions.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Gran Meliá Iguazú",
                  type: "Luxury · Argentine side, inside the park",
                  price: "From $280/night",
                  badge: "Argentine park access",
                  desc: "The Argentine equivalent of the Belmond — a luxury hotel inside Parque Nacional Iguazú with direct access to the circuits before the park opens. Panoramic views of the jungle canopy from the rooms. Pool, spa, and the Garganta restaurant.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotel Saint George",
                  type: "Mid-range · Puerto Iguazú town",
                  price: "From $80/night",
                  badge: "Best mid-range",
                  desc: "The most consistently recommended mid-range hotel in Puerto Iguazú. Central location, outdoor pool, reliable breakfast, friendly staff. 20 minutes to the Argentine park entrance. Free transfer to the park on request. Good base for 3–4 nights.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Iguazu Jungle Lodge",
                  type: "Boutique eco-lodge · Argentine side",
                  price: "From $120/night",
                  badge: "Best for nature",
                  desc: "A small eco-lodge in the Atlantic Forest buffer zone near the Argentine park. Bungalows surrounded by jungle, exceptional bird life on the property, wildlife guides available. Quieter and more intimate than the town hotels. Good mid-range option for nature-focused travellers.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Budget Hostels, Foz do Iguaçu",
                  type: "Budget · Foz city centre (Brazil)",
                  price: "From $12–25/night",
                  badge: "Best budget base",
                  desc: "Foz do Iguaçu has a well-developed hostel scene — Hostel Pousada Evelina Navarrete, Hotel Foz Presidente, and several others near the bus terminal offer clean dorms and private rooms. Book through Booking.com in advance for weekends.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat at Iguazu Falls</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Puerto Iguazú (Argentina) has the best restaurant scene — grilled river fish, Argentine parilla (grill), and local Malbec and Torrontés wines at much better prices than Buenos Aires. Foz do Iguaçu (Brazil) is strong on churrascarias (all-you-can-eat barbecue) and per-kilo lunch restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Rueda",
                  t: "Argentine parilla · Puerto Iguazú",
                  d: "The most consistently recommended restaurant in Puerto Iguazú — Argentine grilled meats, fresh surubí (river catfish), and local empanadas. Outdoor terrace, excellent Malbec wine list. Budget $20–30 per person with wine. Reservations recommended in July–October peak.",
                  b: "Best parilla",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "El Quincho del Tío Querido",
                  t: "River fish specialist · Puerto Iguazú",
                  d: "Specialises in Paraná and Iguazu river fish — surubí, pacú, and dorado. A genuinely local experience that most tourists miss by going to international restaurants. The grilled surubí (catfish) with chimichurri is the dish to order. $15–25 per person.",
                  b: "Most local",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Itaipú Restaurant (Belmond Hotel)",
                  t: "Fine dining · Inside Brazilian park",
                  d: "Brazilian fine dining with views of the jungle canopy. Even if not staying at the Belmond, non-guests can book for lunch ($30–50 per person). The weekend Brazilian moqueca (seafood coconut stew) is exceptional. Walking distance from the falls via the hotel&apos;s private path.",
                  b: "Best fine dining",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Churrascaria in Foz (any rodízio)",
                  t: "All-you-can-eat Brazilian barbecue · Foz do Iguaçu",
                  d: "Foz has dozens of rodízio churrascarias where servers bring continuous skewers of grilled meat to your table until you signal stop. A full meal with 10–15 cuts of meat and the salad bar: R$40–65 (~$8–13). Buffalo Branco and Bufalo Dourado are well-reviewed local options.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Park restaurants (both sides)",
                  t: "Inside both national parks",
                  d: "Both parks have cafeterias and restaurants inside. The Argentine side&apos;s main restaurant near the Upper Circuit has reasonable prices (ARS 800–1,500 for a main). The Brazilian side has a food court near the bus stop. Prices are higher than outside but convenient if you don&apos;t want to leave and re-enter.",
                  b: "Convenient",
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
            destination="Iguazu Falls"
            hotels={[
              {
                name: "Belmond Hotel das Cataratas",
                type: "Ultra-luxury · Inside Brazilian park",
                price: "From $400/night",
                rating: "5",
                badge: "Only hotel in the park",
                url: "https://www.booking.com/hotel/br/hotel-das-cataratas.html?aid=2820480",
              },
              {
                name: "Gran Meliá Iguazú",
                type: "Luxury · Argentine side park",
                price: "From $280/night",
                rating: "5",
                badge: "Argentine park access",
                url: "https://www.booking.com/hotel/ar/gran-melia-iguazu.html?aid=2820480",
              },
              {
                name: "Hotel Saint George",
                type: "Mid-range · Puerto Iguazú",
                price: "From $80/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/ar/saint-george-iguazu.html?aid=2820480",
              },
              {
                name: "Iguazu Jungle Lodge",
                type: "Eco-boutique · Argentine buffer zone",
                price: "From $120/night",
                rating: "4",
                badge: "Best for wildlife",
                url: "https://www.booking.com/hotel/ar/iguazu-jungle-lodge.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Iguazu Falls Both Sides Guided Tour",
                duration: "2 days",
                price: "From $85/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=iguazu+falls+both+sides&partner_id=PSZA5UI",
              },
              {
                name: "Macuco Safari Boat Ride — Argentine Side",
                duration: "1.5 hrs",
                price: "From $50/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=macuco+safari+iguazu&partner_id=PSZA5UI",
              },
              {
                name: "Helicopter Tour over Iguazu Falls",
                duration: "10 mins",
                price: "From $120/person",
                badge: "Most spectacular",
                url: "https://www.getyourguide.com/s/?q=iguazu+helicopter+tour&partner_id=PSZA5UI",
              },
              {
                name: "Itaipu Dam Special Circuit Tour",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=itaipu+dam+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🇧🇷",
                  title: "Only Visiting One Side",
                  desc: "Visiting only the Argentine or only the Brazilian side is like reading half a book. The Argentine side delivers the close-up, thundering, immersive experience — you walk above and among the falls. The Brazilian side delivers the panoramic wide-angle perspective showing the full scale of all 275 falls. Both are essential and complementary. Allocate one full day to each.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "☀️",
                  title: "Visiting in Peak Summer (Dec–Feb)",
                  desc: "December to February is Iguazu&apos;s peak season and the hottest, most humid months — 40°C with 90% humidity. Crowds double, prices increase, and walking the circuits in midday heat is genuinely uncomfortable. August to November is dramatically more pleasant. March to May has the most powerful falls but higher humidity.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🎒",
                  title: "Bringing Electronics Without Waterproofing",
                  desc: "The Devil&apos;s Throat walkway produces extraordinary mist — you will be soaked even without the boat ride. The Macuco Safari boat makes this near-total immersion. A waterproof phone case or dry bag is essential, not optional. The park sells plastic bags for $2 at the entrance but a proper dry bag is far better.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🦝",
                  title: "Not Protecting Food from Coatis",
                  desc: "Coatis (raccoon relatives, native to the Atlantic Forest) roam the Argentine side circuits in large family groups and are experienced thieves. They have unzipped backpacks, stolen sandwiches from hands, and raided picnic bags with expert precision. Keep all food sealed in a closed bag. Do not feed them — it is also illegal and carries a fine.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "💱",
                  title: "Not Understanding Argentine Currency",
                  desc: "Argentina&apos;s peso has a complex exchange rate situation. The unofficial &apos;blue dollar&apos; rate can be significantly better than the official bank rate. Bring USD cash to exchange through hotels or casa de cambio in Puerto Iguazú for Argentine expenses. Use Brazilian reais for the Brazilian side. ATMs on both sides work but check your bank&apos;s foreign transaction fees in advance.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🎟️",
                  title: "Not Pre-Booking the Macuco Safari",
                  desc: "The Macuco Safari boat ride (Argentine side) and the Brazilian side zodiac tours sell out by midday in high season (July–October). Book online the day before or arrive at the park entrance when it opens (8am) and book immediately. Do not assume walk-up tickets will be available at 11am — they often aren&apos;t.",
                  color: "border-yellow-200 bg-yellow-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Iguazu Falls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Argentine Side: Arrive at 8am Sharp",
                  desc: "The Argentine park opens at 8am. The first Tren de la Selva to Devil&apos;s Throat departs at 8:10am — you&apos;re on the catwalk by 8:30am, a full 90 minutes before the tour groups arrive. From 10am the walkway is wall-to-wall people. The early morning mist and light are also dramatically better for photography. This single tip transforms the experience.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌈",
                  title: "Rainbow Timing: 10am–1pm Brazilian Side",
                  desc: "The iconic rainbow in the Iguazu mist appears when the sun is at the correct angle — typically between 10am and 1pm on the Brazilian side&apos;s panoramic walkway. Plan your Brazilian side visit to coincide with mid-morning for the rainbow-and-falls photograph. Arrive at 9am to beat the midday crowds and be in position when the rainbow appears.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏨",
                  title: "Base Yourself in Foz do Iguaçu — Save 35%",
                  desc: "Accommodation, food, and transport in Foz do Iguaçu (Brazil) is 30–40% cheaper than Puerto Iguazú (Argentina). The direct bus between the two towns runs 30 minutes every 30 minutes. Budget travellers can save $25–40 per day by basing in Foz without losing any experience. The Brazilian side park is also closer from Foz.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🐦",
                  title: "Parque das Aves Is Genuinely Unmissable",
                  desc: "Adjacent to the Brazilian park entrance, Parque das Aves (Bird Park) has 150 species in walk-through aviaries — including free-flying Toco toucans and the Blue Morpho butterfly house where iridescent butterflies land on you. 1.5 hours and R$80 (~$16). Almost every experienced Iguazu traveller says this is one of the best moments of the trip. Almost everyone skips it. Don&apos;t.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚁",
                  title: "The Helicopter Tour Is Worth Doing Once",
                  desc: "A 10-minute helicopter flight over Iguazu Falls ($120–150, book at IGR airport or online) gives you the one view you cannot get from any walkway: all 275 falls simultaneously from above, the horseshoe shape of the Devil&apos;s Throat clearly visible, and the full scale of the 2.7km falls system. The panoramic ground views are excellent but the aerial view is simply different. Budget travellers can skip it; anyone with flexibility shouldn&apos;t.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌿",
                  title: "Macuco Trail for Wildlife — Arrive Early",
                  desc: "The 3.5km Macuco Trail on the Argentine side is the park&apos;s best jungle walk — toucans, coatis, howler monkeys, and 200+ bird species in the forest. The trail is included in the park entry fee. Start before 9am for the highest wildlife activity (animals avoid the heat from 11am). The Arrechea waterfall at the end of the trail is an unexpected and peaceful highlight.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Iguazu Falls" />

          {/* Combine With */}
          <CombineWith currentSlug="iguazu-falls-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Which side of Iguazu Falls is better — Argentine or Brazilian?",
                  a: "Both sides are essential and fundamentally different experiences. The Argentine side delivers the most dramatic, immersive experience: you walk on elevated catwalks directly above and beside the falls, including the Devil&apos;s Throat platform where you stand above an 82-metre drop with mist rising from below. The Brazilian side delivers the iconic panoramic view showing the full 2.7km arc of all 275 falls simultaneously — the photograph on every magazine cover. Most visitors rate the Argentine side as more emotionally powerful, but the Brazilian side shows you the full scale. Visit both. Allocate one full day each.",
                },
                {
                  q: "Do I need to pre-book tickets for Iguazu Falls?",
                  a: "Yes, especially in high season (July, September–October, and December–January). Argentine side tickets: book online at iguazuargentina.com. Brazilian side tickets: cataratasdoiguacu.com.br — online booking guarantees entry and skips the queue. The Macuco Safari boat ride (Argentine side) should be booked online or immediately at park opening — it sells out by midday in peak season. Belmond Hotel das Cataratas rooms require booking months in advance for August–October.",
                },
                {
                  q: "How long does it take to see Iguazu Falls properly?",
                  a: "Allow 1 full day for the Argentine side (Upper Circuit + Lower Circuit + Devil&apos;s Throat + Macuco Safari is 6–7 hours walking) and 1 full day for the Brazilian side (walkway + Bird Park + boat ride is 4–5 hours). That&apos;s 2 full days minimum. Add a third day for the Macuco jungle trail, Itaipu Dam, and the Triple Frontier. Four days is the comfortable optimum — the itinerary in this guide assumes 4 days.",
                },
                {
                  q: "Is the Macuco Safari boat ride worth it?",
                  a: "Yes — almost universally described as one of the best experiences at Iguazu. The zodiac inflatable boat takes you from the river bank directly under a curtain of falling water. You will be completely soaked. Wear swimwear or quick-dry clothing and waterproof your phone and camera. The Argentine side costs ~$50 and the Brazilian side ~$30 (R$150). The experiences are similar; the Argentine version gets you slightly deeper under the main falls. Do at least one; if budget allows, do both.",
                },
                {
                  q: "How do I cross between the Argentine and Brazilian sides?",
                  a: "Take the direct international bus from Puerto Iguazú (Argentina) to Foz do Iguaçu (Brazil) — runs every 30 minutes from 06:00 to 22:00, costs R$15 (~$3) or ARS 800. The journey takes 30 minutes and the bus stops briefly at both Argentine and Brazilian customs for a passport stamp. Keep your Argentine entry stamp when you cross to Brazil — you will need it when you re-enter Argentina. Carry your actual passport, not a photocopy.",
                },
                {
                  q: "Is Iguazu Falls safe for solo travellers?",
                  a: "Iguazu Falls is one of the safer tourist destinations in South America. Both national parks have well-maintained infrastructure, visible rangers, and large numbers of other visitors. Puerto Iguazú and Foz do Iguaçu are small, tourist-oriented towns with low serious crime rates compared to larger Argentine and Brazilian cities. Standard precautions apply: use reputable taxis or the public bus between towns, keep valuables in your hotel safe, and don&apos;t carry large amounts of cash. Solo female travellers report comfortable experiences here.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Iguazu Falls trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/buenos-aires-5-days", label: "Buenos Aires guide", icon: "🏙️" },
                { href: "/blog/rio-de-janeiro-5-days", label: "Rio de Janeiro guide", icon: "🌊" },
                { href: "/blog/patagonia-7-days", label: "Patagonia 7 days", icon: "🏔️" },
                { href: "/blog/peru-machu-picchu-7-days", label: "Peru & Machu Picchu", icon: "🦙" },
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
          <RelatedGuides currentSlug="iguazu-falls-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Buenos Aires in 5 Days — Tango &amp; Steak", href: "/blog/buenos-aires-5-days" },
                { label: "Rio de Janeiro 5 Days — Christ &amp; Copacabana", href: "/blog/rio-de-janeiro-5-days" },
                { label: "Patagonia 7 Days — Torres del Paine", href: "/blog/patagonia-7-days" },
                { label: "Peru &amp; Machu Picchu 7 Days", href: "/blog/peru-machu-picchu-7-days" },
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
