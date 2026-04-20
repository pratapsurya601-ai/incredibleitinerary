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
const MEXICO_CITY_TOC = [
  { id: "honest",        emoji: "⚡",  label: "What Mexico City Actually Is" },
  { id: "season",        emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",    emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",     emoji: "📅",  label: "4-Day Itinerary" },
  { id: "sights",        emoji: "🏛️", label: "Top Sights Guide" },
  { id: "budget",        emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",          emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",           emoji: "🌮",  label: "Where to Eat" },
  { id: "tips",          emoji: "💡",  label: "Pro Tips" },
  { id: "faq",           emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Mexico City 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mexico City in 4 Days — tacos, pyramids and Frida Kahlo&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mexico-city-4-days"
        imageUrl="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1200&q=80"
        description="Mexico City in 4 Days: Zocalo, Teotihuacan, Frida Kahlo Museum, Xochimilco and the best tacos al pastor on earth — complete travel guide with budget breakdown."
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
export default function MexicoCityClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MEXICO_CITY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mexico City" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mexico city zocalo cathedral palace fine arts aztec"
            fallback="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1600&q=80"
            alt="Mexico City Zocalo with Metropolitan Cathedral and National Palace"
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
              <span className="text-white/70">Mexico City 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mexico City in 4 Days:
                <em className="italic text-amber-300"> Tacos, Pyramids &amp; Frida Kahlo</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                22 million people, Diego Rivera murals inside the National Palace, the world&apos;s best tacos al pastor, and a neighbourhood that out-Brooklyns Brooklyn. Your complete 4-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇽 Mexico</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A metropolis of 22 million built on a drained Aztec lake that still sinks 10 cm per year, the world&apos;s greatest collection of murals by Diego Rivera inside the National Palace, tacos al pastor that make every other taco seem like a pale imitation, and a neighbourhood &mdash; Condesa/Roma &mdash; so full of independent bookshops and coffee roasters it feels like Brooklyn but with better weather and a fraction of the rent. Mexico City is, without argument, one of the world&apos;s truly great cities.
            </p>
          </blockquote>

          {/* ── WHAT MEXICO CITY ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mexico City Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Aztec capital of Tenochtitlan was founded in 1325 on an island in Lake Texcoco. When the Spanish arrived in 1519, it was one of the largest cities on earth &mdash; larger than any city in Spain. Cortes drained the lake, levelled the temples, and built a colonial capital on the ruins. Five hundred years later, those Aztec foundations are still sinking, the cathedral is visibly tilted, and Mexico City is the largest Spanish-speaking city in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes CDMX extraordinary is the layering. The Templo Mayor &mdash; the Aztec empire&apos;s most sacred pyramid &mdash; sits in the shadow of the Metropolitan Cathedral, which was built from its stones. Diego Rivera&apos;s murals in the National Palace retell the entire Aztec and colonial history on a single staircase wall. Frida Kahlo&apos;s blue house in Coyoacan is exactly as she left it. The Museo Nacional de Antropologia holds the finest pre-Columbian collection anywhere. And the street food &mdash; tacos al pastor at MXN 15&ndash;25 each, with pineapple, cilantro, and salsa verde &mdash; is genuinely the best in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Honestly, four days barely scratches the surface of Mexico City. But four days will show you the Zocalo, Teotihuacan, Frida Kahlo, Xochimilco, the best museums on the continent, and enough tacos to permanently recalibrate your understanding of what street food can be. That&apos;s a good start.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MEX" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Apr" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="Historic Centre" />
              <StatCard icon="💰" label="Budget From" value="$50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mexico City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Feb",
                  i: "☀️",
                  t: "Dry Season — Best Months",
                  d: "15–22°C, cool and dry with blue skies most days. November brings Dia de los Muertos celebrations &mdash; spectacular if you can find accommodation. December and January are peak tourist season in Condesa and Roma but the city never feels overcrowded. The ideal window.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Spring — Warm &amp; Sunny",
                  d: "22–28°C, warm and pleasant. Jacaranda trees bloom across the city in purple cascades during March &mdash; one of the most photogenic months. Easter week is a national holiday and many locals leave the city, making it quieter for tourists.",
                  b: "Great option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Sep",
                  i: "🌧️",
                  t: "Rainy Season — Afternoon Showers",
                  d: "20–26°C with daily afternoon downpours, usually 3&ndash;6pm. Mornings are clear and bright. The rain is predictable &mdash; plan outdoor activities before noon and museums for the afternoon. Flights and hotels are cheaper. Perfectly viable if you plan around the rain.",
                  b: "Budget-friendly",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Nov 1–2",
                  i: "💀",
                  t: "Dia de los Muertos — Special Event",
                  d: "The most spectacular cultural event in Mexico. Elaborate altars (ofrendas) fill the Zocalo, Coyoacan, and Mixquic. Skull face painting, marigold arches, night parades down Reforma. Book accommodation months in advance &mdash; prices double but the experience is unforgettable.",
                  b: "Once in a lifetime",
                  c: "bg-orange-50 border-orange-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: `${s.s} — ${s.t}` }} />
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Mexico City</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Mexico City&apos;s Benito Juarez International Airport (MEX) is one of the busiest in Latin America and well-connected to North America, Europe, and Asia. The new Felipe Angeles Airport (NLU) handles some low-cost carriers &mdash; check which airport your flight uses before booking transport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "International flights to MEX",
                  d: "Direct flights from most major US cities (3&ndash;5 hrs), London (11 hrs), Madrid (11 hrs), Tokyo (14 hrs), and many Latin American capitals. From India: connect via London, Paris, or a US hub. MEX is well-served by Aeromexico, Volaris, VivaAerobus (budget), United, Delta, American, and British Airways.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚇",
                  t: "Airport to city centre by Metro",
                  d: "Metro Line 5 connects MEX Terminal 1 to the city centre. A single ride costs MXN 5 (~$0.30) &mdash; the best value airport transfer in the world. Journey takes 35&ndash;45 minutes to Zocalo or Balderas. Avoid rush hours with luggage. Terminal 2 requires a free inter-terminal shuttle first.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚕",
                  t: "Official airport taxi or Uber",
                  d: "Official airport taxis from the booth inside arrivals: MXN 250&ndash;400 to Roma/Condesa (fixed price by zone, pay at the counter). Uber/DiDi: MXN 150&ndash;300 depending on traffic and time of day. Never take unofficial taxis that approach you at arrivals &mdash; this is the number one safety rule at MEX.",
                  b: "Most convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from other Mexican cities",
                  d: "First-class buses (ADO, ETN, Primera Plus) connect CDMX to Oaxaca (6 hrs, MXN 600&ndash;900), Puebla (2 hrs, MXN 200&ndash;350), San Cristobal (12 hrs), and Guadalajara (6 hrs). Buses depart from TAPO (east), Central del Norte, or Central del Sur depending on destination. ETN has lie-flat seats on premium routes.",
                  b: "For domestic travel",
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
                      <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.d }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Mexico City Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances the big sights with neighbourhood exploration and plenty of time for tacos. Prices in MXN unless noted otherwise; at time of writing $1 USD ≈ MXN 17.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Centro Historico &middot; Zocalo &middot; Templo Mayor &middot; National Palace"
                cost="MXN 400–600 (~$25–35)"
                items={[
                  "Arrive at MEX airport. Take Metro Line 5 to the city centre (MXN 5, 40 min) or Uber to your hotel in Roma/Condesa (MXN 150–300). Check into your accommodation and drop your bags.",
                  "Walk the Zocalo — the second-largest public plaza on earth. The Metropolitan Cathedral (free entry) took 240 years to build and is visibly sinking into the old lake bed. The tilt is noticeable from inside.",
                  "National Palace (free entry, bring ID). Diego Rivera\u0027s epic mural cycle on the main staircase depicts the entire history of Mexico from the Aztec empire to the revolution — arguably the greatest artwork on the continent. Go early to avoid tour groups. Allow 45 minutes with the murals.",
                  "Templo Mayor archaeological site and museum (MXN 90). The Aztec empire\u0027s most sacred pyramid, rediscovered in 1978 when electrical workers hit a carved stone 2 metres below the Zocalo. The museum\u0027s Coyolxauhqui stone and tzompantli (skull rack) are extraordinary.",
                  "Lunch at a comedor near Mercado San Juan — comida corrida (set lunch with soup, main, drink, and dessert) for MXN 80–120. This is how locals eat at midday.",
                  "Afternoon walk along pedestrianised Avenida Madero to the Palacio de Bellas Artes exterior — the finest Art Nouveau building in the Americas. The lobby murals by Rivera, Orozco, and Siqueiros are free to view.",
                  "Evening: tacos al pastor from a street taqueria in Centro. MXN 15–25 per taco — order 4–6 with cilantro, onion, and salsa verde. El Huequito on Bolivar has been serving al pastor since 1959.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Teotihuacan Pyramids &middot; Coyoacan Neighbourhood"
                cost="MXN 500–700 (~$30–40)"
                items={[
                  "Early start: bus from Terminal Central del Norte to Teotihuacan (MXN 50–60 each way, 1 hour). Buses marked \u0027Los Piramides\u0027 depart every 15 minutes from Gate 8. Leave by 7:30am to beat the tour groups.",
                  "Teotihuacan archaeological site (MXN 85 entry). Walk the 2.5km Avenue of the Dead from the Pyramid of the Moon to the Ciudadela. The Pyramid of the Sun is the third-largest pyramid on earth — 65 metres tall, 248 steps. The Temple of the Feathered Serpent has the finest carved facades at the site.",
                  "Pack water and snacks — vendors inside are overpriced. Wear a hat and sunscreen; there is zero shade on the Avenue of the Dead. Allow 3–4 hours for the full site.",
                  "Return by early afternoon. Take the Metro to Coyoacan (Line 3 to Coyoacan station, then a 10-minute walk to the plaza).",
                  "Coyoacan neighbourhood: Plaza Hidalgo, the Jardin Centenario fountain, and the colonial streets around the market. Walk past the blue exterior of Casa Azul (Frida Kahlo Museum) — we will visit properly on Day 3.",
                  "Dinner at Mercado de Coyoacan food stalls — tostadas, quesadillas, tlayudas, and aguas frescas. MXN 100–180 for a full meal.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Frida Kahlo Museum &middot; Chapultepec &middot; Anthropology Museum &middot; Condesa"
                cost="MXN 800–1,100 (~$50–65)"
                items={[
                  "9am: Frida Kahlo Museum / Casa Azul in Coyoacan (MXN 250, book tickets 2–3 weeks ahead on museofridakahlo.org — they sell out). Her actual home, studio, garden, kitchen, and bedroom exactly as she left them. The collection of pre-Columbian art in the garden is remarkable. Allow 1.5–2 hours.",
                  "Metro or Uber to Chapultepec Park — the largest urban park in the Western Hemisphere, larger than Central Park. Chapultepec Castle (MXN 85) sits on the hilltop with panoramic city views and a fine collection of murals and period rooms from the Second Mexican Empire.",
                  "Museo Nacional de Antropologia (MXN 90, closed Mondays). The world\u0027s finest pre-Columbian collection: the Aztec Sun Stone, the Mayan jade death mask of Pakal, the Olmec colossal heads, and 23 exhibition halls covering every Mesoamerican civilisation. This is a 3-hour museum minimum — don\u0027t rush it. The Aztec and Maya halls alone justify the trip to Mexico City.",
                  "Late lunch in Condesa: taquerias and torterias on Amsterdam Avenue. Try tacos de canasta (basket tacos, MXN 10–15 each) from a street vendor or sit down at Taqueria Orinoco for outstanding northern-style tacos (MXN 40–60 each).",
                  "Afternoon wander through Roma Norte: street art on Alvaro Obregon, independent coffee shops, the Cafebreria El Pendulo bookshop-cafe — order a coffee and browse.",
                  "Evening: mezcal tasting at a mezcaleria in Roma. Bósforo or In Situ offer curated single-village pours from MXN 80–150 per glass. Most places offer a free introductory pour.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Xochimilco Floating Gardens &middot; Markets &middot; Farewell Tacos"
                cost="MXN 600–900 (~$35–55)"
                items={[
                  "Metro + light rail to Xochimilco (1.5 hrs, MXN 10 total) — the last remnant of the Aztec canal and chinampa (floating garden) system that once covered the entire Valley of Mexico.",
                  "Hire a trajinera (flower-painted gondola) at Embarcadero Nuevo Nativitas. MXN 500 per boat per hour — split between your group. On weekdays the canals are peaceful; weekends bring floating mariachi bands, food vendors, and a party atmosphere. Either way is excellent.",
                  "Buy food and drinks from the floating vendors who pull alongside: elote (grilled corn), chicharron, esquites, micheladas, and fresh fruit. MXN 30–80 per item.",
                  "Afternoon: return to the city. Visit Mercado de Jamaica (free) — the flower market where Mexico City sources its marigolds, gladiolus, and roses. Mountains of cempasuchil in season. The most photogenic market in the city.",
                  "Palacio de Bellas Artes interior (MXN 85 for exhibitions, lobby murals free). The Rivera, Orozco, and Siqueiros murals inside are among the most important works of 20th-century Mexican art.",
                  "Final dinner: El Califa de Leon in Colonia Juarez — the world\u0027s only Michelin-starred taco stand (2024). Two-item menu: bistec and gaonera. MXN 45–55 per taco. Cash only. Queue forms at 1pm and 8pm. It will permanently change your understanding of what a taco can be.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mexico City" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP SIGHTS GUIDE ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Top Sights Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 &mdash; most museums are free on Sundays for Mexican residents but full price for international visitors.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Museo Nacional de Antropologia",
                  e: "MXN 90",
                  d: "The world\u0027s finest pre-Columbian museum. The Aztec Sun Stone, Mayan jade mask of Pakal, Olmec colossal heads, and 23 halls covering every Mesoamerican civilisation. Allow 3+ hours. Closed Mondays. The central courtyard alone &mdash; designed by Pedro Ramirez Vazquez &mdash; is an architectural landmark.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Teotihuacan Pyramids",
                  e: "MXN 85",
                  d: "The Pyramid of the Sun (third-largest pyramid on earth), Pyramid of the Moon, Avenue of the Dead, and Temple of the Feathered Serpent. 50km northeast of CDMX. Bus from Terminal Norte (MXN 50–60 each way). Arrive before 9am for the best light and fewest crowds. Allow 3–4 hours on site.",
                  t: "Must see · Half day",
                },
                {
                  n: "Frida Kahlo Museum (Casa Azul)",
                  e: "MXN 250",
                  d: "Frida\u0027s actual home in Coyoacan — her studio, bedroom, kitchen, and garden exactly as she left them. The pre-Columbian art collection in the garden is remarkable. Book tickets 2–3 weeks ahead on museofridakahlo.org — they sell out every day.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Zocalo &amp; National Palace",
                  e: "Free",
                  d: "The second-largest public plaza on earth. The National Palace houses Diego Rivera\u0027s epic mural cycle — the entire history of Mexico on a single staircase wall. The Metropolitan Cathedral (free) is visibly sinking into the old lake bed. Morning visits recommended.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Templo Mayor",
                  e: "MXN 90",
                  d: "The Aztec empire\u0027s most sacred pyramid, excavated from under the colonial city centre. The museum displays the Coyolxauhqui stone, sacrificial offerings, and the tzompantli (skull rack). A powerful experience of the layers beneath modern Mexico City.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Chapultepec Castle",
                  e: "MXN 85",
                  d: "The only royal castle in the Americas, perched on a hilltop in Chapultepec Park. Panoramic city views, murals, and period rooms from the Second Mexican Empire. The walk up through the park is pleasant and shaded.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Xochimilco Floating Gardens",
                  e: "MXN 500/boat/hr",
                  d: "The last remnant of the Aztec chinampa canal system. Hire a colourful trajinera and float through the canals with floating food vendors and mariachi bands pulling alongside. Best on Sunday mornings for atmosphere or weekday mornings for peace.",
                  t: "Must see · 2–3 hrs",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: place.n }} />
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: place.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Mexico City &mdash; Pyramids, Murals &amp; Tacos al Pastor"
            subtitle="From Aztec ruins to floating gardens and the world&apos;s best street food."
            spots={[
              {
                name: "Zocalo &amp; Metropolitan Cathedral",
                query: "mexico city zocalo metropolitan cathedral national palace sunset",
                desc: "The Zocalo at golden hour with the Metropolitan Cathedral — the second-largest public plaza on earth.",
              },
              {
                name: "Teotihuacan Pyramid of the Sun",
                query: "teotihuacan pyramid sun avenue dead mexico sunrise ancient",
                desc: "The Pyramid of the Sun at Teotihuacan — the third-largest pyramid on earth, 65 metres tall.",
              },
              {
                name: "Frida Kahlo Casa Azul",
                query: "frida kahlo museum casa azul coyoacan blue house mexico city",
                desc: "The iconic blue walls of Casa Azul in Coyoacan — Frida Kahlo&apos;s home and studio.",
              },
              {
                name: "Xochimilco Trajineras",
                query: "xochimilco floating gardens trajinera colourful boats mexico city canals",
                desc: "Flower-painted trajineras on the Xochimilco canals — the last remnant of the Aztec waterways.",
              },
              {
                name: "Palacio de Bellas Artes",
                query: "palacio bellas artes mexico city art nouveau marble dome night",
                desc: "The Palacio de Bellas Artes — the finest Art Nouveau building in the Americas.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mexico City is one of the world&apos;s great-value capital cities. The Metro costs MXN 5 (~$0.30), tacos al pastor are MXN 15&ndash;25, and world-class museums charge MXN 85&ndash;250. You can eat, explore, and sleep well on $50/day &mdash; or live extremely well on $150.
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
                    ["🏨 Accommodation", "$12–18/night", "$60–80/night", "$220–400/night"],
                    ["🌮 Food", "$15–20/day", "$35–50/day", "$100–150/day"],
                    ["🚇 Transport", "$3–5/day", "$12–18/day", "$40–60/day"],
                    ["🏛️ Activities", "$10–15/day", "$20–30/day", "$60–120/day"],
                    ["TOTAL (per person)", "$50/day", "$110/day", "$280/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms (MXN 200&ndash;300/night), market meals and street tacos, Metro everywhere. Teotihuacan by public bus. This is completely comfortable &mdash; Mexico City&apos;s budget infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($110/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Roma Norte (MXN 1,000&ndash;1,400/night), mix of street food and sit-down restaurants like Contramar, Uber for convenience. Guided Teotihuacan tour. The sweet spot for most travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($280/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons CDMX or Las Alcobas in Polanco (MXN 3,700&ndash;6,800/night). Pujol and Quintonil tasting menus. Private guides and hot air balloon over Teotihuacan. Mexico City does luxury exceptionally well.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mexico City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The four main neighbourhoods for tourists are Roma Norte (art, coffee, nightlife), Condesa (tree-lined streets, Art Deco), Polanco (luxury, museums), and Centro Historico (history, budget). Roma and Condesa are the best all-rounders for first-time visitors.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Four Seasons Mexico City",
                  type: "Luxury 5-star &middot; Paseo de la Reforma",
                  price: "From $350/night",
                  badge: "Best luxury",
                  desc: "Mexico City&apos;s finest hotel, set around a central courtyard on Reforma. Impeccable service, world-class restaurant, and an ideal Polanco location for the Anthropology Museum and Chapultepec Park. The rooftop bar has panoramic city views.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Downtown Mexico Hotel",
                  type: "Boutique &middot; Centro Historico",
                  price: "From $90/night",
                  badge: "Best rooftop",
                  desc: "A beautifully converted 17th-century palace in Centro Historico with a rooftop pool and bar overlooking the Zocalo. The architecture alone is worth the stay &mdash; colonial courtyards, exposed stone, contemporary Mexican design. Walking distance to everything in Centro.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostal Regina Centro",
                  type: "Budget hostel &middot; Centro Historico",
                  price: "From $12/night (dorm)",
                  badge: "Best budget",
                  desc: "Clean, sociable hostel on pedestrianised Regina street in the heart of Centro. Private rooms from $35/night. Rooftop terrace, free walking tours, and an unbeatable location 5 minutes from the Zocalo. The best budget base in the city.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Roma Norte Boutique Hotels",
                  type: "Mid-range &middot; Roma Norte",
                  price: "From $60–80/night",
                  badge: "Best neighbourhood",
                  desc: "Roma Norte has dozens of converted 1920s Art Deco buildings now operating as boutique hotels. The neighbourhood is walkable, full of cafes and restaurants, and well-connected by Metro. Hotels like Nima Local House, Casa Goliana, and Hotel Milan offer excellent value in the $60&ndash;100 range.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: stay.type }} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: stay.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌮 Where to Eat in Mexico City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mexico City has the best food scene in the Americas &mdash; from MXN 15 street tacos to Pujol&apos;s 2,500-day aged mole madre. The rule is simple: the best food is often the cheapest. Follow the locals at lunchtime.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pujol",
                  t: "World-class fine dining &middot; Polanco",
                  d: "Ranked in the World&apos;s 50 Best Restaurants for over a decade. Chef Enrique Olvera&apos;s mole madre &mdash; two moles, one aged 2,500+ days &mdash; is the most famous dish in Mexico. Tasting menu MXN 2,500&ndash;3,500. Book 3&ndash;4 weeks ahead. The 8-seat mole counter is the most coveted reservation in the city.",
                  b: "Once in a lifetime",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Contramar",
                  t: "Seafood &middot; Roma Norte",
                  d: "Mexico City&apos;s most beloved seafood restaurant. The tuna tostadas and the signature red-and-green grilled whole fish are legendary. No reservations &mdash; queue opens at noon, arrive by 12:30pm or expect a 45-minute wait. MXN 400&ndash;700 per person. Worth every peso and every minute in line.",
                  b: "Must visit",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "El Califa de Leon",
                  t: "Michelin-starred tacos &middot; Colonia Juarez",
                  d: "The world&apos;s only Michelin-starred taco stand (awarded 2024). Four seats. Two items: bistec and gaonera. MXN 45&ndash;55 per taco. Cash only. Queue at 1pm or 8pm. The quality of the beef, the sear on the griddle, and the handmade tortilla are on another level entirely.",
                  b: "World famous",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Street Tacos al Pastor",
                  t: "Street food &middot; Citywide",
                  d: "The trompo (vertical spit of marinated pork) is to Mexico City what the Eiffel Tower is to Paris &mdash; the defining image. MXN 15&ndash;25 per taco with pineapple, cilantro, onion, and salsa verde. El Huequito (since 1959), Taqueria Los Cocuyos (late night), and any trompo with a queue are reliable.",
                  b: "Essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Quintonil",
                  t: "Modern Mexican &middot; Polanco",
                  d: "Chef Jorge Vallejo&apos;s tasting menu uses hyper-seasonal ingredients from the family orchard. Ranked in the World&apos;s 50 Best. MXN 2,000&ndash;2,500 for the tasting menu. Less theatrical than Pujol, more focused on pure flavour. Book 2&ndash;3 weeks ahead.",
                  b: "Fine dining",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Mercado de Coyoacan",
                  t: "Market food &middot; Coyoacan",
                  d: "The food stalls inside Coyoacan market serve some of the best tostadas in the city &mdash; MXN 30&ndash;50 each, piled high with ceviche, tinga, or guacamole. Pair with an agua fresca (MXN 20&ndash;30). The quintessential market lunch.",
                  b: "Best market food",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: r.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Mexico City CDMX"
            hotels={[
              {
                name: "Four Seasons Mexico City",
                type: "Luxury 5-star on Paseo de la Reforma",
                price: "From $350/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/mx/four-seasons-mexico-city.html?aid=2820480",
              },
              {
                name: "Downtown Mexico Hotel",
                type: "Boutique in a 17th-century palace",
                price: "From $90/night",
                rating: "4",
                badge: "Best rooftop",
                url: "https://www.booking.com/hotel/mx/downtown-mexico.html?aid=2820480",
              },
              {
                name: "Hostal Regina Centro",
                type: "Budget hostel in Centro Historico",
                price: "From $12/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/mx/hostal-regina-centro.html?aid=2820480",
              },
              {
                name: "Las Alcobas Mexico City",
                type: "Luxury boutique in Polanco",
                price: "From $280/night",
                rating: "5",
                badge: "Most stylish",
                url: "https://www.booking.com/hotel/mx/las-alcobas-mexico-city.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Teotihuacan Guided Tour with Transport",
                duration: "7 hrs",
                price: "From $45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=teotihuacan+tour+mexico+city&partner_id=PSZA5UI",
              },
              {
                name: "Xochimilco Trajinera Boat Tour",
                duration: "4 hrs",
                price: "From $25/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=xochimilco+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mexico City Street Food Tour",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=mexico+city+street+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Teotihuacan Hot Air Balloon Flight",
                duration: "1 hr",
                price: "From $130/person",
                url: "https://www.getyourguide.com/s/?q=teotihuacan+hot+air+balloon&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mexico City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌮",
                  title: "El Califa de Leon: the Michelin-starred taco stand",
                  desc: "This tiny 4-seat counter in Colonia Juarez won a Michelin star in 2024. Two items: bistec and gaonera. MXN 45\u201355 per taco. Cash only. Queue at 1pm or 8pm. It will permanently change your understanding of what a taco can be.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎨",
                  title: "Diego Rivera murals are free and unmissable",
                  desc: "The National Palace is free to enter and houses Rivera\u0027s epic mural cycle depicting the entire history of Mexico. Go at 9am before tour groups arrive and spend 45 minutes with it. Also free: the Palacio de Bellas Artes lobby murals by Rivera, Orozco, and Siqueiros.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚇",
                  title: "The Metro costs MXN 5 and covers the whole city",
                  desc: "The CDMX Metro is one of the cheapest and most comprehensive in the world. MXN 5 per ride (~$0.30). Avoid rush hours (7\u20139am, 6\u20138pm) when trains are extremely crowded. Lines 1\u20133 cover the main tourist areas. Download the Metro map offline before you arrive.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📅",
                  title: "Book Frida Kahlo Museum 3 weeks ahead",
                  desc: "Casa Azul tickets sell out every single day, often 2\u20133 weeks in advance. Book on museofridakahlo.org the moment you know your travel dates. Weekday mornings are less crowded. Without a ticket you can only photograph the blue exterior wall.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💊",
                  title: "Altitude sickness is real at 2,240m",
                  desc: "Mexico City sits at 2,240m above sea level. Headaches, breathlessness, and fatigue are common in the first 24 hours. Drink twice as much water as usual, avoid alcohol on day one, and move slowly. Most symptoms pass by day two.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚕",
                  title: "Never take unofficial taxis at MEX airport",
                  desc: "Use the official taxi booth inside arrivals (fixed price by zone) or book Uber/DiDi from the app. Never get into a cab that approaches you in the terminal. This is the single most important safety rule for tourists arriving in Mexico City.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mexico City" />

          {/* Combine With */}
          <CombineWith currentSlug="mexico-city-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Mexico City safe for tourists in 2026?",
                  a: "Yes \u2014 for the areas tourists visit. Roma, Condesa, Polanco, Coyoacan, and Centro Historico are all very safe during the day and evenings. Use Uber or DiDi rather than street taxis at night, keep your phone in your pocket in crowded markets, and avoid the eastern and northern colonias that tourism guides don\u0027t cover. Mexico City has transformed significantly in the last decade and is now considered safer than many major Latin American cities.",
                },
                {
                  q: "Do I need a visa to visit Mexico?",
                  a: "Most Western passport holders (US, UK, EU, Canada, Australia) do not need a visa and can stay up to 180 days. Indian passport holders also have visa-free access (updated 2024) for up to 180 days. You fill in a tourist card (FMM) on arrival or online before your flight \u2014 no embassy visit needed. Simply show a valid passport and return ticket.",
                },
                {
                  q: "What is the best time of year to visit Mexico City?",
                  a: "October to April is the dry season and the best time to visit. November to February is coolest (15\u201322\u00b0C) and most comfortable for walking. March\u2013April is warm with jacaranda trees in bloom. Avoid May\u2013September if possible \u2014 the rainy season brings daily afternoon downpours, though mornings are usually clear. Dia de los Muertos (November 1\u20132) is spectacular if you can secure accommodation early.",
                },
                {
                  q: "How do I get to Teotihuacan from Mexico City?",
                  a: "Take the Metro to Autobuses del Norte station (Line 5) then buy a ticket to San Juan Teotihuacan \u2014 buses depart every 15 minutes from Gate 8 (MXN 50\u201360 each way, 1 hour). This is far cheaper than tours and gives you flexibility. Return the same way. Alternatively, guided tours from Roma/Condesa run $35\u201360 and include transport plus commentary.",
                },
                {
                  q: "How much should I budget for Mexico City per day?",
                  a: "Budget travellers can live well on $50/day \u2014 hostel dorms ($12\u201318), market meals and street tacos ($15\u201320), and Metro everywhere ($3\u20135). Mid-range is $110/day with boutique hotels ($60\u201380) and a mix of street food and restaurants. Luxury runs $280+/day with Four Seasons-level hotels and Pujol tasting menus. The city is extraordinarily good value at every price point.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mexico City trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-mexico-city", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mexico-city-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-mexico-city", label: "How to get there", icon: "✈️" },
                { href: "/blog/mexico-city-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="mexico-city-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Mexico &amp; Latin America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Oaxaca in 4 Days &mdash; Mezcal &amp; Monte Alban", href: "/blog/oaxaca-4-days" },
                { label: "Tulum 4 Days &mdash; Cenotes &amp; Ruins", href: "/blog/tulum-4-days" },
                { label: "Cancun 4 Days &mdash; Caribbean Coast", href: "/blog/cancun-4-days" },
                { label: "Guadalajara 4 Days &mdash; Tequila Trail", href: "/blog/guadalajara-4-days" },
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
