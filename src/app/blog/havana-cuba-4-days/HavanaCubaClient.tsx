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
const HAVANA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Havana Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Havana Cuba 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Havana in 4 Days — 1950s cars, Old Havana cobblestones and Hemingway&apos;s bars&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/havana-cuba-4-days"
        imageUrl="https://images.unsplash.com/photo-1500759285222-a95626964772?w=1200&q=80"
        description="Havana Cuba in 4 Days: Old Havana UNESCO cobblestones, 1950s classic cars, Hemingway&apos;s bars, Viñales tobacco valley, and salsa until midnight — complete travel guide."
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
export default function HavanaCubaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAVANA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Havana, Cuba" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="havana cuba malecon 1950s classic cars old havana colonial architecture"
            fallback="https://images.unsplash.com/photo-1500759285222-a95626964772?w=1600&q=80"
            alt="Havana Malecon at sunset with colourful 1950s American cars and colonial buildings along the waterfront"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb in hero */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Havana Cuba 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-red-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Havana in 4 Days:
                <em className="italic text-amber-300"> 1950s Cars, Old Havana Cobblestones &amp; Hemingway&apos;s Cuba</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Malecon at sunset, daiquiris at Floridita, mojitos at Bodeguita del Medio, tobacco farms in Viñales, and salsa that starts at midnight. The complete Havana guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇺 Havana, Cuba</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Havana is the world&apos;s greatest time capsule — a city where 1950s Chevrolets and Buicks cruise past crumbling baroque palaces, where Hemingway&apos;s barstool at Floridita is preserved under glass, and where salsa music bleeds out of every doorway at midnight.
            </p>
          </blockquote>

          {/* ── WHAT HAVANA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Havana Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Old Havana — Habana Vieja — is one of the most complete and best-preserved Spanish colonial city centres in the Americas. Its cobblestone plazas, baroque churches, and 16th-century fortresses earned it UNESCO World Heritage status in 1982. The crumbling grandeur is part of the appeal: baroque palaces wearing their age, pastel facades faded to something more beautiful than fresh paint, and a population that lives inside a living museum.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The vintage 1950s American cars — Chevrolets, Buicks, Pontiacs, Oldsmobiles — are not a tourist gimmick. When the US embargo cut off new car imports in 1960, Cubans kept the cars they had running through extraordinary mechanical ingenuity. The colectivo taxis that run fixed routes across Havana are genuine working vehicles that have been maintained for 65-plus years by people who had no alternative. Riding in one costs 20-40 CUP (under $2) and is one of the most authentic experiences the city offers.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Malecon — the 8km ocean promenade that curves along Havana&apos;s northern coast — is the true heart of the city. Not a restaurant or a bar or a monument, but a public wall where Havana comes every evening to sit, fish, play guitar, and watch the sun sink into the Caribbean. It costs nothing and it tells you everything about how this city works.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="HAV" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🏛️" label="UNESCO Since" value="1982" />
              <StatCard icon="💰" label="Budget From" value="$60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Havana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "22–28°C, low humidity, minimal rain. The classic Havana weather: walking Old Havana in 25°C sunshine, Malecon evenings without humidity, and the Havana Jazz Festival in January. December to February is peak tourist season. November and March are the sweet spots for fewer crowds.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🎷",
                  t: "Peak Season — Festivals",
                  d: "The Havana Jazz Festival (January) and Havana International Ballet Festival draw visitors from across Latin America. Hotels fill up and prices rise 20–40%. Book accommodation 4–6 weeks ahead in January. The weather is the best of the year: low 20s Celsius, genuinely cool evenings.",
                  b: "Book ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jun",
                  i: "🌦️",
                  t: "Early Wet Season — Manageable",
                  d: "Rain begins but is usually afternoon showers rather than all-day downpours. Humidity rises significantly. Fewer tourists means better paladar availability and lower casa prices. The Malecon in a tropical shower at sunset is genuinely beautiful. Manageable if you don&apos;t mind the heat.",
                  b: "Budget window",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jul–Oct",
                  i: "🌀",
                  t: "Hurricane Season — Caution",
                  d: "Cuba sits in the Atlantic hurricane belt. Tropical storms are possible July through October, with September and October carrying the highest risk. Heavy rainfall, extreme humidity (30°C feels like 38°C), and the real possibility of a hurricane disrupting your trip. Not recommended unless you travel flexibly and monitor forecasts closely.",
                  b: "Travel carefully",
                  c: "bg-red-50 border-red-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Havana</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Havana is served by <strong className="font-medium">José Martí International Airport (HAV)</strong>, 25km southwest of the city centre. Official taxis to Old Havana cost <strong className="font-medium">$25–30 USD</strong> and take approximately 30 minutes. Agree on the fare before entering the vehicle — metered cabs are rare from the international terminal.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major hubs",
                  d: "Direct flights to HAV operate from Miami (45 min), New York JFK (3.5 hrs), Toronto (3.5 hrs), London Heathrow (9.5 hrs), Madrid (9 hrs), Mexico City (3 hrs), and Cancun (1.5 hrs). American travellers often route via Cancun or Mexico City to avoid US restrictions on direct Cuba flights. Air Canada, Cubana, Iberia, and Air Europa are the main carriers.",
                  b: "Main route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "HAV Airport to Old Havana — Official taxi",
                  d: "Official yellow taxis from the international terminal to Old Havana: $25–30 USD, 30 minutes. Negotiate before entering and confirm the price covers the full trip. Avoid unlicensed touts inside the arrivals hall. The official taxi stand is immediately outside arrivals.",
                  b: "From $25",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "HAV Airport to city — Bus P12",
                  d: "Public bus P12 runs from the airport to Vedado and Habana Vieja for 20 CUP (approximately $0.80). Departures are infrequent and the journey takes 45–60 minutes with stops. Viable for budget travellers comfortable with Cuban public transport and arriving in daylight.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Viñales Valley day trip — Shared or private transfer",
                  d: "Shared minibus from Havana to Viñales: $15–20 one way, approximately 2 hours. Book the night before through your casa particular host. Private car and driver costs $60–80 return for the day — significantly more comfortable and flexible. The valley is a UNESCO site 180km west of Havana.",
                  b: "Day trip",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Havana Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is built around the rhythm of Havana: mornings in the historic plazas, afternoons for slower exploration, and evenings that stretch late into the night. Day 3 is the Viñales day trip — the earliest start and the biggest journey.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Havana UNESCO Cobblestones, Floridita & the Malecon"
                cost="$40–60 (taxi, entry fees, daiquiri, dinner)"
                items={[
                  "13:00 — Arrive at José Martí International Airport (HAV). Official taxi to Old Havana costs $25–30 USD; agree the fare before entering. Journey takes 30 minutes. Check in to your casa particular — a private room in a Cuban home — the best accommodation choice at every budget. Casas range from $25–45/night (budget) to $80–150/night (boutique), and your host is your best source of local knowledge.",
                  "15:00 — Begin Old Havana on foot at Plaza de Armas, Havana&apos;s oldest square and the original heart of the colonial city. The Castillo de la Real Fuerza (1577) anchors one side — Cuba&apos;s oldest stone fortress — and the second-hand book market fills the square with stalls selling revolution-era paperbacks and vintage maps. The Museum of the City inside the Palacio de los Capitanes Generales costs $2–3 and explains the colonial history well.",
                  "16:30 — Walk to Plaza de la Catedral and the baroque Havana Cathedral (1748). The asymmetrical bell towers and ornate limestone facade are among the finest examples of Spanish colonial baroque in the Americas. Free to enter the square; $1 for the cathedral interior. The plaza is flanked by colonial mansions now housing restaurants and art galleries.",
                  "18:00 — El Floridita, two blocks from Plaza de la Catedral. Hemingway drank here from the 1920s until he left Cuba in 1960 — his bronze statue stands at the end of the bar exactly where he sat. A house daiquiri costs $6–8: frozen lime, rum, and a hint of maraschino. The bar is tourist-heavy but the cocktail is genuinely excellent and the historical atmosphere is irreplaceable.",
                  "20:00 — Dinner at a paladar (private restaurant) near Old Havana. Ropa vieja — slow-cooked shredded beef in a rich tomato and pepper sauce — is the definitive Cuban dish. A full dinner at a mid-range paladar runs $10–18 per person. Paladars consistently and significantly outperform state restaurants in every metric.",
                  "21:30 — Evening walk along the Malecon. The 8km ocean promenade along Havana&apos;s northern waterfront is where the entire city comes to exhale. Families, musicians, teenagers, fishermen — all sitting on the same low wall as the Atlantic crashes against the other side. Bring a beer from a street vendor (5–10 CUP) and walk west toward Vedado. Entirely free. Entirely essential.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Bodeguita del Medio, Classic Car Colectivos, Fábrica de Arte Cubano & Salsa"
                cost="$55–80 (mojito, car tour, Fábrica entry, dinner, salsa)"
                items={[
                  "09:00 — La Bodeguita del Medio, two blocks from Plaza de la Catedral on Calle Empedrado. This narrow bar is where Hemingway drank mojitos — and where the walls, ceiling, and every surface are covered in signatures and messages from decades of visitors. A mojito costs $6–8. Arrive before 10am to beat the tour groups: the bar fits perhaps 20 people comfortably and becomes a crush by mid-morning.",
                  "10:30 — Continue through the remaining Old Havana plazas. Plaza Vieja (the restored colonial square) has a Camera Obscura on the rooftop of the corner building ($2 entry, good city overview). Plaza de San Francisco de Asís has a 17th-century basilica and the famous bronze statue of El Caballero de Paris. Allow yourself to get lost in the streets between them — Calle Obispo is the main pedestrian artery, lined with restored facades and street musicians.",
                  "12:30 — Classic car colectivo taxi experience. The 1950s American convertibles — Chevrolets, Pontiacs, Buicks, Oldsmobiles — line up outside El Capitolio on Paseo del Prado. A shared one-hour tour of Havana runs $30–40 for the whole car (split between however many passengers). The route typically covers the Malecon, Vedado, and Revolution Square. Negotiate the route and price firmly before getting in. These are real working vehicles maintained for 65 years by necessity and skill — not props.",
                  "15:00 — Fábrica de Arte Cubano (FAC) in Vedado, entry CUP 200 (approximately $8). Cuba&apos;s premier contemporary arts and music venue, housed in a converted cooking oil factory. Multiple galleries, performance spaces, rooftop bars, and live music run simultaneously under one roof every Thursday through Sunday from 8pm. Arrive in the afternoon for the galleries without the crowds; return in the evening for the music.",
                  "19:00 — Dinner at a Vedado or Centro Havana paladar. The neighbourhood around Calle 23 in Vedado has the best concentration of rooftop restaurants with city views. Budget $15–25 per person at a good mid-range paladar.",
                  "21:30 — Salsa lesson at a casa de la trova or local dance school. Basic salsa in Cuba takes 60 focused minutes to learn well enough to dance socially. $10–15 for one hour with a professional Cuban instructor is a genuine bargain. Your casa host can point you to authentic, non-tourist venues. Casa de la Música in Centro Havana runs live salsa concerts until 2am.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Viñales Valley Day Trip — Tobacco Farms, Mogote Hills & the Mural de la Prehistoria"
                cost="$50–70 (transport, bicycle hire, lunch, dinner)"
                items={[
                  "06:30 — Depart Havana for Viñales Valley by shared minibus ($15–20 one way, book the night before through your casa). The journey takes approximately 2 hours southwest through the Cuban countryside. The valley is a UNESCO World Heritage Site distinguished by its dramatic mogote hills — steep-sided limestone monoliths rising abruptly from flat tobacco fields, draped in vegetation — and by a tobacco farming culture unchanged for centuries.",
                  "09:00 — Stop at the Mirador de los Jazmines on the approach road for the definitive Viñales panorama: the valley below, mogotes in every direction, and red tobacco soil contrasting with the green fields. The view is genuinely extraordinary and worth 20 minutes before descending.",
                  "10:00 — Explore the valley by hired bicycle (10 CUP per hour, approximately $0.40) or on foot. Visit a working tobacco farm to see the curing barn with drying leaves hanging from the rafters and watch a farmer hand-roll a cigar from that morning&apos;s harvest. These visits are informal and genuinely educational — Cuban tobacco cultivation has its own language, ceremony, and pride.",
                  "12:00 — Lunch at a Viñales paladar. Fresh lobster appears on menus here at $12–18 for a whole grilled lobster — inexplicably cheap given its scarcity elsewhere. The traditional Cuban meal of roast pork, black beans, rice, and fried plantain costs $8–12 and is everything it should be. El Olivo restaurant on the main street is consistently the best-reviewed in the valley.",
                  "14:00 — Mural de la Prehistoria: a 120-metre mural painted directly onto a cliff face between 1961 and 1975 by artist Leovigildo González under Che Guevara&apos;s direction. It depicts the evolution of life in Cuba from single-cell organisms to humans. The mural is controversial on aesthetic grounds, but the scale and the setting — limestone cliff face, tobacco fields below — make it a compelling stop. Entry $3.",
                  "16:00 — Return minibus to Havana. 20:00 — Final Malecon walk at sunset and rooftop rum cocktails in Vedado. A glass of Havana Club Añejo rum with soda costs $3–5 at a local bar; the same poured at a tourist hotel terrace runs $8–12. The neighbourhood bars around Calle G in Vedado are the authentic choice.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Revolution Square, Che Guevara Mural, Cigars & Departure"
                cost="$40–60 (entry fees, lunch, cigars, airport taxi)"
                items={[
                  "09:00 — Plaza de la Revolución (Revolution Square). The vast ceremonial plaza — one of the largest in the world — is framed by two iconic steel outline murals: Che Guevara&apos;s face on the Ministry of the Interior building and Camilo Cienfuegos on the Ministry of Communications. The José Martí Memorial tower (109 metres) at the centre costs $5 to ascend for the best panoramic views of Havana available anywhere — Old Havana, the harbour, the Malecon, and Vedado all visible simultaneously.",
                  "11:00 — Final Old Havana wander and cigar shopping. Authentic Cuban cigars must be purchased from official La Casa del Habano stores — the flagship on Calle 16 in Miramar has the widest selection of Cohiba, Montecristo, Partagas, Bolivar, and Romeo y Julieta. Avoid street vendors offering cheaper boxes: they are without exception counterfeit or filled with inferior tobacco in authentic-looking packaging. A box of 25 genuine Montecristo No. 4 costs $120–180 at official prices.",
                  "13:00 — Lunch at a rooftop paladar in Old Havana with city views. A proper farewell meal: mojito, black bean soup (frijoles negros), ropa vieja or fresh fish, and flan for dessert. Budget $15–25 per person at a good paladar. O&apos;Reilly 304 on Calle O&apos;Reilly is consistently excellent for both food and its rooftop terrace view.",
                  "15:00 — Transfer to HAV Airport. Allow 60 minutes from Old Havana in normal traffic; 90 minutes to be safe for international departures. Official taxis from the city to the airport cost $25–30. Keep small USD bills for tips and any last-minute CUP spending — leftover Cuban pesos cannot be exchanged outside Cuba.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Havana, Cuba" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Havana Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Havana sites in order of priority. Entry fees as of early 2026, quoted in USD. Most Old Havana plazas and streets are free to walk; the main costs are specific museums and viewpoints.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Old Havana — Habana Vieja (UNESCO)",
                  e: "Free to walk",
                  d: "The cobblestone heart of colonial Havana. Five interconnected plazas — Plaza de Armas, Plaza de la Catedral, Plaza Vieja, Plaza de San Francisco, and Plaza del Cristo — each with its own character and history. The entire area is a living UNESCO World Heritage Site, with restoration work ongoing since the 1990s under the city historian&apos;s office. Allow a full day to do it justice.",
                  t: "Full day · Essential",
                },
                {
                  n: "The Malecon Promenade",
                  e: "Free",
                  d: "The 8km ocean promenade that defines Havana more than any single monument. Best at sunset and in the evening when the entire city gathers here. The section from the foot of the Prado to the Hotel Nacional takes about 25 minutes to walk; the full stretch to Miramar takes an hour and a half. Waves crash over the wall in rough weather — a spectacular sight.",
                  t: "Evening · Essential",
                },
                {
                  n: "El Capitolio",
                  e: "$8 entry",
                  d: "The Cuban National Capitol building (1929), modelled on the US Capitol but slightly taller. Extensively restored since 2013 and reopened to the public. The great dome, the interior Hall of Lost Steps, and the 24-carat diamond in the floor (the zero-kilometre point for all Cuban highways) are the highlights. The exterior steps are a classic Havana photography spot at any time of day.",
                  t: "1.5 hrs · Worth visiting",
                },
                {
                  n: "Revolution Square — Plaza de la Revolución",
                  e: "Free (square) / $5 (José Martí tower)",
                  d: "The ceremonial centre of the Cuban state. The Che Guevara steel outline on the Ministry of the Interior and the Camilo Cienfuegos outline on Communications are the defining images of revolutionary Havana. The José Martí Memorial tower (109m) offers the best panoramic views in the city. The square itself is vast and intentionally austere — best visited in the morning before the midday heat.",
                  t: "2 hrs · Must see",
                },
                {
                  n: "El Floridita — Hemingway&apos;s Daiquiri Bar",
                  e: "Free entry (drinks $6–8)",
                  d: "The most famous bar in Havana, operating since 1817. Hemingway drank here so often that his bronze statue has been installed at his preferred end of the bar. The house daiquiri — frozen lime, white rum, and maraschino — is the definitive version. The bar is perpetually busy with tourists; arrive at opening (11am) or at the quieter 5–6pm window before the evening surge.",
                  t: "30–45 mins · Essential",
                },
                {
                  n: "La Bodeguita del Medio — Hemingway&apos;s Mojito Bar",
                  e: "Free entry (mojito $6–8)",
                  d: "Hemingway&apos;s preferred mojito bar, open since 1942. The walls, ceiling, and every surface are covered in decades of visitor signatures. Two blocks from Plaza de la Catedral. Arrive before 10am to avoid tour groups — the bar holds roughly 20 people and becomes unbearable later in the day. The mojito is authentic: fresh lime, brown sugar, spearmint, white rum, and soda.",
                  t: "30 mins · Essential",
                },
                {
                  n: "Fábrica de Arte Cubano (FAC)",
                  e: "CUP 200 (approx. $8)",
                  d: "Cuba&apos;s most ambitious contemporary cultural space, opened in 2014 in a former cooking oil factory in Vedado. Multiple galleries, live music stages, bars, and performance areas under one roof. Open Thursday through Sunday from 8pm. The mix of visual art, live jazz, electronic music, and Cuban social life is genuinely unique. One of the most interesting nights out in any city in the Caribbean.",
                  t: "Thu–Sun evenings · Unmissable",
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
            title="Havana — Old Havana, the Malecon &amp; Classic Cars"
            subtitle="UNESCO cobblestones, 1950s Chevrolets, and the ocean wall that defines a city."
            spots={[
              {
                name: "Old Havana Cobblestone Streets",
                query: "old havana cobblestone streets colonial architecture cuba habana vieja",
                desc: "The UNESCO-listed cobblestone streets of Habana Vieja — baroque facades, colonial plazas, and 500 years of Spanish architecture.",
              },
              {
                name: "1950s Classic Cars on the Malecon",
                query: "havana cuba 1950s classic american cars malecon seafront colorful",
                desc: "Vintage 1950s Chevrolets and Buicks cruising the Malecon — Cuba&apos;s iconic colectivo taxis kept running for 65 years by mechanical necessity and ingenuity.",
              },
              {
                name: "Havana Malecon at Sunset",
                query: "havana malecon sunset cuba ocean promenade evening light",
                desc: "The 8km Malecon promenade at golden hour — where Havana comes every evening to sit, fish, play music, and watch the Caribbean sun go down.",
              },
              {
                name: "Che Guevara Mural — Revolution Square",
                query: "che guevara mural revolution square havana cuba plaza revolucion",
                desc: "The steel outline of Che Guevara on the Ministry of the Interior — the defining image of revolutionary Havana at Plaza de la Revolución.",
              },
              {
                name: "Viñales Valley Tobacco Farms",
                query: "vinales valley cuba tobacco farms mogote hills limestone landscape",
                desc: "The UNESCO Viñales Valley — limestone mogote hills rising over red tobacco fields, 2 hours west of Havana.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cuba operates on a cash economy — most international credit cards do not function here due to the US embargo affecting payment networks. US-issued cards are entirely unusable. Bring all cash you need in USD or EUR; exchange at CADECA official bureaux rather than hotel desks for better rates.
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
                    ["🏨 Accommodation (per night)", "$25–45 (casa particular)", "$70–120 (boutique casa)", "$250–500 (Hotel Nacional / Kempinski)"],
                    ["🍽 Food (per day)", "$15–25 (paladars + street food)", "$40–60 (paladars + La Guarida)", "$100–160 (fine dining + private)"],
                    ["🚕 Transport (per day)", "$8–15 (shared taxis + colectivos)", "$25–40 (private taxis)", "$80–200 (private car + helicopter)"],
                    ["🎭 Activities (per day)", "$10–20 (entry fees + salsa class)", "$30–50 (guided tours + Fábrica)", "$150–300 (private guides + experiences)"],
                    ["🚌 Viñales day trip", "$30–40 (shared minibus + bicycle)", "$75–100 (private car + farm visit)", "$500–700 (helicopter + estate tour)"],
                    ["TOTAL (per day, 4 days)", "$60–90/day", "$130–200/day", "$350–700/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Casa particular rooms ($25–45/night), paladars for every meal ($8–15 per meal), colectivo taxis and walking, and the free Malecon every evening. This is a very comfortable way to experience Havana — the best of the city is genuinely free or cheap.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($130–200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique casa or small private hotel ($70–120/night), La Guarida for one dinner, a half-day guided tour, private taxi for the Viñales trip, and a classic convertible car tour. The sweet spot for Havana travel.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury ($350–700/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Nacional de Cuba or Gran Hotel Manzana Kempinski ($250–500/night), fine dining at El Del Frente, private historian guides, helicopter to Viñales, and a curated cigar selection from La Casa del Habano.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Havana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Casas particulares — private rooms in Cuban family homes — are the definitive Havana accommodation experience at every budget level. They consistently offer better rooms, better breakfasts, better locations, and genuine human connection compared to state-run hotels at 30–50% of the price. Your casa host is also your best source of restaurant recommendations, transport bookings, and neighbourhood knowledge.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Nacional de Cuba",
                  type: "Historic luxury hotel · Vedado waterfront",
                  price: "From $150/night",
                  badge: "Most iconic",
                  desc: "The grande dame of Havana hotels, opened in 1930. The Hotel Nacional hosted Winston Churchill, Frank Sinatra, Marlon Brando, and the notorious 1946 Havana Conference of American Mafia bosses. The clifftop position over the Malecon, the colonial grounds, the legendary bar, and the historical weight make this the most atmospheric hotel in Cuba regardless of current service standards.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Gran Hotel Manzana Kempinski La Habana",
                  type: "5-star international luxury · Old Havana",
                  price: "From $300/night",
                  badge: "Most luxurious",
                  desc: "The only Kempinski property in Cuba, housed inside a restored 19th-century shopping arcade in the heart of Old Havana. Rooftop pool overlooking El Capitolio, a full-service spa, and the best concierge operation in the city. The location — one block from Plaza Central — cannot be improved upon.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Iberostar Parque Central",
                  type: "4-star hotel · Old Havana, Plaza Central",
                  price: "From $120/night",
                  badge: "Best location",
                  desc: "Directly on Parque Central, one block from El Capitolio and three blocks from Floridita. The Iberostar is the most practical mid-range hotel choice in Old Havana: reliable international standards, rooftop pool with panoramic views, and immediate walking access to every major Old Havana site.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Casa Concordia",
                  type: "Boutique casa particular · Old Havana",
                  price: "From $45/night",
                  badge: "Best casa",
                  desc: "A highly regarded boutique casa particular in the heart of Old Havana, with several rooms, a rooftop terrace, and hosts with exceptional local knowledge. Breakfast included. The building is colonial and the rooms are comfortable. Book well ahead — the best casas in Old Havana fill months in advance during peak season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Havana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Cuban food revival is real and it lives entirely in the paladar (private restaurant) sector. State restaurants are uniformly poor value: overpriced, slow, and limited. Every meal recommendation below is a paladar. The Cuban dishes worth ordering everywhere: ropa vieja, frijoles negros (black bean soup), arroz congri, and tostones (fried plantain).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Guarida",
                  t: "Iconic baroque paladar · Centro Havana, Calle Concordia 418",
                  d: "The most famous paladar in Cuba and one of the most famous restaurants in the Caribbean. Set across three floors of a crumbling baroque mansion — the setting in which the 1993 film Fresa y Chocolate was shot. The food is genuinely excellent: the guava-glazed lamb, the fresh seafood, and the rooftop bar above are all outstanding. Reserve 3–4 days ahead. $30–45 per person.",
                  b: "Most famous",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "El Del Frente",
                  t: "Contemporary Cuban · Old Havana, Calle O&apos;Reilly 303",
                  d: "Directly across the street from O&apos;Reilly 304 and part of the same operation. El Del Frente occupies a rooftop terrace above an Old Havana street with open views over the colonial roofscape. The menu is creative Cuban: good cocktails, fresh fish, and inventive tapas. One of the best rooftop dining experiences in the city. $20–35 per person.",
                  b: "Best rooftop",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "O&apos;Reilly 304",
                  t: "Wine bar and paladar · Old Havana, Calle O&apos;Reilly 304",
                  d: "A narrow, well-curated wine bar and restaurant on one of Old Havana&apos;s most interesting streets, one block from Plaza de la Catedral. The wine list is the best in Havana by some margin (unusual for Cuba), and the small plates menu — octopus, grilled vegetables, Cuban cheese boards — is excellent. $20–30 per person. One of the most civilised evenings in Old Havana.",
                  b: "Best wine list",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Paladars near the Malecon (local choice)",
                  t: "Various · Vedado neighbourhood",
                  d: "The Vedado neighbourhood between the Malecon and Calle 23 has the best concentration of quality paladars operating without the tourist premium of Old Havana. Expect full meals of ropa vieja or fresh fish with rice, beans, and plantain for $10–15. Ask your casa host for their current personal recommendation — it changes as new places open and quality fluctuates.",
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
            destination="Havana Cuba"
            hotels={[
              {
                name: "Hotel Nacional de Cuba",
                type: "Historic landmark hotel · Vedado waterfront",
                price: "From $150/night",
                rating: "4",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/cu/nacional-de-cuba.html?aid=2820480",
              },
              {
                name: "Gran Hotel Manzana Kempinski La Habana",
                type: "5-star luxury · Old Havana",
                price: "From $300/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/cu/gran-hotel-manzana-kempinski-la-habana.html?aid=2820480",
              },
              {
                name: "Iberostar Parque Central",
                type: "4-star · Old Havana, Plaza Central",
                price: "From $120/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/cu/iberostar-parque-central.html?aid=2820480",
              },
              {
                name: "Casa Concordia Havana",
                type: "Boutique casa · Old Havana",
                price: "From $45/night",
                rating: "5",
                badge: "Best casa",
                url: "https://www.booking.com/hotel/cu/casa-concordia-habana.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Old Havana Walking Tour with Local Guide",
                duration: "3 hrs",
                price: "From $25/person",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=Old+Havana+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Classic 1950s Car Tour of Havana",
                duration: "1–2 hrs",
                price: "From $35/car",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Havana+classic+car+tour&partner_id=PSZA5UI",
              },
              {
                name: "Viñales Valley Full Day Tour from Havana",
                duration: "10 hrs",
                price: "From $45/person",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=Vinales+day+trip+Havana&partner_id=PSZA5UI",
              },
              {
                name: "Salsa Dance Class with Professional Cuban Dancer",
                duration: "1.5 hrs",
                price: "From $15/person",
                badge: "Best experience",
                url: "https://www.getyourguide.com/s/?q=Havana+salsa+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Havana</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💱",
                  title: "Not understanding Cuba&apos;s cash-only economy",
                  desc: "Most international credit and debit cards do not work in Cuba due to the US embargo affecting card processing networks. US-issued cards are entirely unusable. Bring all the cash you need for your trip in USD or EUR before arriving. Exchange at CADECA official bureaux (at the airport, in hotels, and on main streets) rather than bank queues for the best rates. ATMs are unreliable and often empty — do not depend on them.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚬",
                  title: "Buying cigars from street vendors",
                  desc: "Every street in Old Havana has vendors offering Cohiba and Montecristo boxes at 50–70% below official prices. Without exception, these are counterfeit: inferior tobacco packed in authentic-looking packaging. Genuine Cuban cigars can only be verified at official La Casa del Habano stores and certified factory shops. The saving is illusory — fake cigars taste poor and cannot be exported as genuine Habanos.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏨",
                  title: "Booking state-run hotels instead of casas particulares",
                  desc: "State hotels in Cuba are expensive and consistently mediocre — the service culture, maintenance standards, and food quality lag significantly behind equivalent international hotels. Casas particulares offer better rooms, better locations, home-cooked breakfasts, and genuine hospitality at 30–50% of the state hotel price. Your casa host is invaluable: they book transport, recommend paladars, and explain how Havana actually works.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📶",
                  title: "Expecting functional internet or mobile data",
                  desc: "Cuba has very limited internet infrastructure. Wi-Fi is available at ETECSA hotspots in parks and hotel lobbies using scratch-card login codes ($1–2 per hour). Mobile data requires a Cubacel SIM with a NAUTA data plan. Download offline maps (Maps.me works well for Havana), your accommodation confirmation, and any guides before arriving. The digital disconnect is real — and for most visitors, a welcome part of the experience.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎭",
                  title: "Skipping the Viñales Valley day trip",
                  desc: "Many first-time visitors spend all four days in Havana and skip Viñales entirely. This is a significant omission. The Viñales Valley is one of the Caribbean&apos;s most extraordinary landscapes — UNESCO-listed mogote hills, hand-rolled cigars fresh from the barn, and a tobacco farming culture unlike anywhere else on earth. The shared minibus from Havana costs $15–20 one way and takes 2 hours. It is entirely manageable as a Day 3 trip.",
                  color: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Havana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚗",
                  title: "Ride colectivo taxis, not tourist taxis",
                  desc: "The 1950s American cars running fixed routes as colectivo taxis cost 20–40 CUP (under $2) per trip. Tourist taxis (official yellow metered cabs) are legitimate but cost $5–15 for the same journey. Ask your casa host which colectivo routes run past your key destinations — riding a 1956 Buick across Havana for $1.50 is one of the most genuinely Cuban experiences available.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎶",
                  title: "Follow the music to where locals actually go",
                  desc: "The best music in Havana is not in hotel lobbies or tourist show venues. A trova singer in a doorway, a Sunday rumba circle in a Vedado park, a trumpet player on a rooftop — this is the real thing. Ask your casa host where people your age go on Friday nights. Casa de la Música in Centro Havana and La Zorra y el Cuervo jazz club in Vedado are genuine local venues. Book Havana music tours at getyourguide.com/s/?q=Havana+Cuba&partner_id=PSZA5UI",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍹",
                  title: "Drink at neighbourhood bars, not hotel bars",
                  desc: "A Havana Club rum with soda at a neighbourhood bar in Vedado costs 30–50 CUP (approximately $1.50–2). The same drink at a tourist hotel terrace costs $8–12. The rum is identical — it comes from the same Havana Club distillery. The neighbourhood bars around Calle G in Vedado, on the side streets of Habana Vieja, and along the Malecon are where Havana actually socialises.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💵",
                  title: "Bring enough cash for the entire trip plus 30% contingency",
                  desc: "Cuba operates as a cash economy for foreign visitors. Budget $100–150 per day for mid-range travel, then add 30% as a contingency. Carry mixed denominations — small bills (USD $5, $10, $20) for day-to-day spending, larger bills for accommodation and restaurants. Keep cash split between your bag and your person. There is no safety net if you run out.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the Malecon at dusk — the whole city is there",
                  desc: "The Malecon at sunset is not a tourist attraction. It is where Havana exhales at the end of the day — grandmothers, teenagers, couples, musicians, fishermen, all sharing the same low wall while the Atlantic crashes on the other side. Start at the Prado near Old Havana and walk west toward the Hotel Nacional as the light changes. Carry a beer from a street vendor (5–10 CUP) and allow 90 minutes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏠",
                  title: "Let your casa host run your logistics",
                  desc: "Your casa particular host is the single most valuable resource in Havana. They book the Viñales minibus, recommend their favourite paladar that week, know which mechanic keeps their neighbourhood colectivo running, and understand the informal systems that make Havana function. Treat the relationship as a partnership, not a transaction. Tip generously and ask questions.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Havana, Cuba" />

          {/* Combine With */}
          <CombineWith currentSlug="havana-cuba-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a visa to visit Cuba?",
                  a: "Most nationalities require a Cuban Tourist Card (Tarjeta del Turista) rather than a traditional visa. The tourist card costs $25–75 USD depending on where you buy it — available from Cuban embassies, airlines, or online through cubavisas.com. Buy it before arrival to avoid airport queues. Crucially, Cuba requires all foreign visitors to carry proof of valid travel health insurance — this is a legal requirement enforced at the border. US citizens must travel under one of 12 OFAC-authorised categories; tourism is not one of them, but 'support for the Cuban people' (staying at casas particulares, eating at paladars) is widely used. Check current OFAC regulations before booking.",
                },
                {
                  q: "Can Americans travel to Cuba legally in 2026?",
                  a: "Yes, Americans can legally travel to Cuba under one of 12 authorised travel categories defined by the US Treasury OFAC. Tourism is not on the list, but categories including 'support for the Cuban people' are broadly applicable and widely used — staying at casas particulares, eating at paladars, and spending with private businesses all qualify. Many Americans route via Cancun or Mexico City to avoid restrictions on direct flights. Regulations change with US administrations — verify the current OFAC position before booking.",
                },
                {
                  q: "What is the best way to get around Havana?",
                  a: "Walking covers Old Havana completely — the five main plazas are all within a 20-minute walk of each other. Colectivo taxis (1950s American cars running fixed routes) cover the rest of the city for 20–40 CUP per trip — under $2. Official yellow taxis are metered but significantly more expensive. Bicitaxis (cycle rickshaws) work for short trips within Old Havana at 10–20 CUP. Download Maps.me with the offline Havana map before arriving — Google Maps works but requires internet.",
                },
                {
                  q: "How much does a trip to Havana cost in 2026?",
                  a: "Budget travellers comfortable with casas particulares and paladars can manage $60–90 per day comfortably. Mid-range travel — boutique casas, dinners at La Guarida and similar, a classic car tour, the Viñales day trip — runs $130–200 per day. Luxury travel with the Hotel Nacional or Kempinski, private guides, and fine dining costs $350–700 per day. The key variable is accommodation: a good casa costs $30–60 while the Hotel Nacional starts at $150.",
                },
                {
                  q: "Is Havana safe for tourists in 2026?",
                  a: "Havana is generally safe for tourists by Latin American standards. Petty theft is the primary risk — pickpocketing in crowded Old Havana plazas and around tourist sites, particularly at the colectivo taxi stands. Keep valuables in a money belt, leave passports secured at your casa, and carry only what you need for the day. Scams targeting tourists are common (the 'my cousin has a cigar factory' approach is the classic). Trust your casa host&apos;s safety guidance for the specific neighbourhoods you plan to visit.",
                },
                {
                  q: "Is the Viñales day trip worth it from Havana?",
                  a: "Yes — strongly. The Viñales Valley is UNESCO-listed for its extraordinary landscape of limestone mogote hills rising from flat tobacco fields. A working tobacco farm visit, a hand-rolled cigar from that morning&apos;s harvest, fresh lobster at a valley paladar for $15, and the Mural de la Prehistoria on a cliff face — all within a 2-hour drive of Havana. The shared minibus costs $15–20 one way. Missing Viñales in favour of another Havana day is the mistake most people regret.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Havana trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/cuba-visa-guide", label: "Cuba visa guide", icon: "🛂" },
                { href: "/blog/cuba-budget-travel", label: "Cuba on a budget", icon: "💰" },
                { href: "/blog/vinales-valley-guide", label: "Viñales Valley guide", icon: "🌿" },
                { href: "/blog/havana-travel-tips", label: "Havana travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="havana-cuba-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Caribbean &amp; Latin America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cartagena 4 Days — Walled City &amp; Caribbean Coast", href: "/blog/cartagena-4-days" },
                { label: "Mexico City 4 Days — Aztec Ruins &amp; Street Food", href: "/blog/mexico-city-4-days" },
                { label: "Cancun 4 Days — Beaches, Cenotes &amp; Tulum", href: "/blog/cancun-4-days" },
                { label: "San José Costa Rica 4 Days — Cloud Forest &amp; Coffee", href: "/blog/san-jose-costa-rica-4-days" },
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
