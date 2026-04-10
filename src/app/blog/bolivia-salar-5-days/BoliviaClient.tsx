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
const BOLIVIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Bolivia&apos;s Salt Flats Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Salar de Uyuni 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Salar de Uyuni in 5 Days — salt flats, mirror effect and flamingo lagoons&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bolivia-salar-5-days"
        imageUrl="https://images.unsplash.com/photo-1548813395-77d7c6c4df7e?w=1200&q=80"
        description="Salar de Uyuni in 5 Days: Bolivia&apos;s salt flats, mirror effect, flamingo lagoons and cactus island — complete travel guide with budget breakdown."
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
export default function BoliviaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BOLIVIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Salar de Uyuni" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="salar de uyuni bolivia salt flat reflection sky mirror"
            fallback="https://images.unsplash.com/photo-1548813395-77d7c6c4df7e?w=1600&q=80"
            alt="Salar de Uyuni Bolivia world's largest salt flat with perfect sky reflection"
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
              <span className="text-white/70">Bolivia Salar 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Salar de Uyuni in 5 Days:
                <em className="italic text-amber-300"> Bolivia&apos;s Greatest, Strangest Wonder</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                10,582 km² of blinding white salt at 3,656m where the sky becomes the floor, flamingos wade in blood-red lagoons, and a hotel is built entirely of salt blocks. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇧🇴 Bolivia, South America</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Imagine driving across the world&apos;s largest mirror — 10,582 square kilometres of blinding white salt at 3,656 metres where the sky reflects perfectly in a thin film of water and the horizon simply disappears. You wake at 4am, watch the sunrise turn the salt crust pink and orange while flamingos wade through Laguna Colorada, and sleep in a hotel built entirely of salt blocks. This is Salar de Uyuni.
            </p>
          </blockquote>

          {/* ── WHAT IT ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bolivia&apos;s Salt Flats Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Salar de Uyuni is the remnant of a prehistoric lake — Lago Minchín — that evaporated roughly 30,000 years ago, leaving behind a vast, impossibly flat crust of salt and minerals across the Bolivian Altiplano. At 10,582 square kilometres it is the largest salt flat on Earth, nearly 100 times the size of the Bonneville Salt Flats in Utah, and so flat that GPS satellites use it to calibrate their altitude sensors.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              During the rainy season (December–April), a thin film of water floods the surface, turning the entire expanse into a perfect mirror that reflects the sky with such precision that the horizon vanishes. Photographs taken here look digitally manipulated — they are not. In the dry season the salt forms geometric hexagonal patterns across the entire surface, brilliant white under cobalt Andean skies.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Surrounding the Salar: a landscape that becomes increasingly surreal as you head south into the Eduardo Avaroa Andean Fauna National Reserve — blood-red lagoons full of flamingos, boiling geysers at 4,850m, the green and white Lagunas Verde and Blanca, and the wind-eroded rock formations of the &quot;Dalí Desert.&quot; Bolivia is also extraordinarily affordable — a complete 5-day trip costs a fraction of comparable experiences in Patagonia or Peru.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <StatCard icon="🏔️" label="Altitude" value="3,656m" />
              <StatCard icon="🌊" label="World&apos;s Largest" value="Salt Flat" />
              <StatCard icon="🪞" label="Unique Phenomenon" value="Mirror Effect" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Salar de Uyuni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jan–Mar",
                  i: "🌧️",
                  t: "Rainy Season — Mirror Effect",
                  d: "Peak mirror effect. A thin film of rainwater floods the Salar and creates a perfect sky reflection — the iconic images you see online. The effect is most reliable in January and February. Some areas can be too deep to drive through. The sky is often partly cloudy, adding drama to reflections.",
                  b: "Best for mirror photography",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "May–Oct",
                  i: "☀️",
                  t: "Dry Season — Best Clarity",
                  d: "No mirror effect, but brilliant white salt hexagons under cobalt skies and the clearest air of the year. Perfect for star photography — the Milky Way reflects in the white salt crust on dark nights. The Southwest Circuit lagoons are also more accessible without rain. Temperatures are coldest — nights drop below -15°C.",
                  b: "Best for stars & hexagons",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr",
                  i: "🌅",
                  t: "Shoulder Season — Transition",
                  d: "April sits between the rainy and dry seasons. Early April may still have some mirror effect; by late April the Salar is mostly dry. Crowds are lower than peak rainy season. The lagoons in the Southwest Circuit are at their most colourful immediately after the rains.",
                  b: "Quieter, transitional",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Dec",
                  i: "🌤️",
                  t: "Pre-Rainy Season — Shoulder",
                  d: "November is dry and clear; December is when the rains begin and the mirror effect starts to develop. A good compromise if you want some chance of mirror effect but also clear nights for stargazing. The first rains of December can create partial reflections.",
                  b: "Good compromise",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Salar de Uyuni</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The gateway city is <strong className="font-medium">La Paz</strong>, served by El Alto International Airport (LPB) at 4,061m — the world&apos;s highest international airport. From La Paz you fly or take a bus/train to <strong className="font-medium">Uyuni (UYU)</strong>, the small town that serves as the base for all salt flat tours.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to La Paz (LPB) — Main Gateway",
                  d: "La Paz El Alto Airport (LPB) receives international flights from Lima, Bogotá, São Paulo, Buenos Aires, and Miami. From India: typically connect through São Paulo (LATAM Airlines) or Lima (LATAM/Avianca). No direct India–Bolivia flights. Total journey from India: 18–26 hours with one or two connections. Altitude note: El Alto airport is at 4,061m — acclimatise before heading onward.",
                  b: "Primary gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛫",
                  t: "La Paz to Uyuni — Internal Flight",
                  d: "Amaszonas or Boliviana de Aviación fly La Paz (LPB) → Uyuni (UYU) in 1 hour (~$80–150 one way). Recommended for mid-range and luxury travellers — it maximises time on the Salar and avoids the gruelling overnight road. Book 2–3 weeks ahead as flights fill quickly. The approach to Uyuni over the Altiplano is spectacular.",
                  b: "Fastest option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Overnight Bus La Paz → Uyuni",
                  d: "Several operators (Todo Turismo, Trans Omar) run overnight semi-cama buses La Paz to Uyuni: 10–12 hours, $15–25. The road is bumpy and cold — bring a jacket. You arrive in Uyuni at dawn ready to start your tour. Budget option that saves a night&apos;s accommodation.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚂",
                  t: "Train from Oruro → Uyuni",
                  d: "The Expreso del Sur train runs Oruro–Uyuni several times per week (5–6 hours, scenic Altiplano journey). Oruro is 3.5 hours from La Paz by bus. A romantic, slower option — the Altiplano landscape from the train window is extraordinary. Book tickets at the Oruro train station in advance.",
                  b: "Scenic option",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India — Route Overview",
                  d: "Indian passport holders do not need a visa for Bolivia (90 days on arrival, free). Best routing from India: Mumbai/Delhi → São Paulo (LATAM) → La Paz; or Delhi → Lima (LATAM/Air France) → La Paz. Total cost from India: typically $800–1,400 return for flights. Bolivia is one of the most visa-friendly South American countries for Indian passports.",
                  b: "Indian travellers",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Bolivia Salar de Uyuni Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Costs shown in both BOB (Bolivianos) and USD. 1 USD ≈ 6.9 BOB. The itinerary begins in La Paz to allow for altitude acclimatisation — skipping this risks ruining your trip with altitude sickness.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="La Paz Arrival — Acclimatisation, Cable Cars &amp; Witches&apos; Market"
                cost="~Bs. 280 / ~$40 total"
                items={[
                  "Fly into La Paz El Alto Airport (LPB) at 4,061m — this is the single most important day of your trip to get right. Take it extremely easy. Do not try to sightsee or carry heavy bags further than necessary.",
                  "Check into a hostel or hotel in the Sopocachi or Miraflores neighbourhood (~Bs. 70–105 / $10–15/night for a hostel). Drink coca tea the moment you arrive — the hotels all have it and it genuinely reduces altitude headaches.",
                  "Afternoon (gentle walk only): Witches&apos; Market (Mercado de las Brujas) — one of the most visually extraordinary markets in South America. Llama foetuses, dried frogs, potions, and traditional Andean medicine stalls line the narrow streets. Free to browse. The market has operated for centuries and is actively used by local people, not just tourists.",
                  "Mi Teleférico — La Paz&apos;s extraordinary urban cable car system, the world&apos;s highest at up to 4,000m. Rides cost just Bs. 3 ($0.50) per segment. The views over La Paz&apos;s bowl of terracotta rooftops with the snow-capped Illimani volcano behind are breathtaking. Take the red and yellow lines for the best panoramas.",
                  "Dinner: Salteñas (Bolivian empanadas filled with meat, olive, and boiled egg in a sweet-spiced sauce) from a local market stall or small restaurant — Bs. 15–25 ($3–4 each). This is Bolivia&apos;s national snack and one of the best street foods in South America.",
                  "Early night — 9pm maximum. Altitude acclimatisation at 3,640m is serious. Alcohol is strictly forbidden for the first 48 hours if you want to avoid severe altitude sickness.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Valle de la Luna, La Paz Exploration &amp; Night Bus to Uyuni"
                cost="~Bs. 385 / ~$55 total"
                items={[
                  "Morning: Plaza Murillo — the historic heart of La Paz. The Presidential Palace, National Congress, and Cathedral Basilica frame a square of enormous symbolic weight. The armed guards and Bolivian flags give it a formality that feels genuinely governmental rather than tourist-facing.",
                  "San Francisco Church and monastery (free entry) — built in 1743, one of the finest Baroque-mestizo churches in South America. The carved stone facade blends indigenous and European motifs in a way that is unmistakably Bolivian.",
                  "Lunch: Mercado Lanza or Mercado Rodriguez for a set almuerzo — soup, main, juice for Bs. 15–20 ($2–3). This is how locals eat and it is excellent. Choose the stall with the most local customers.",
                  "Afternoon: Valle de la Luna (Valley of the Moon) — 10km from central La Paz, this erosion landscape of clay spires and labyrinthine gullies looks genuinely alien. Entry Bs. 15 ($2). Taxi from the centre costs Bs. 55–70 ($8–10) return — agree the price before you get in.",
                  "Optional: Museum of the Coca (Bs. 25 / $4) — an intelligent and historically rigorous exhibit on the coca leaf in Andean culture, from Inca times through the colonial period to today&apos;s political controversies.",
                  "Evening: Board overnight bus to Uyuni (Bs. 100–170 / $15–25 semi-cama reclining). Bring a warm jacket, eye mask, and neck pillow — the road is bumpy and the Altiplano gets extremely cold at night. Arrive Uyuni approximately 5–7am.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Uyuni Town, Train Cemetery, Salt Flat Entry &amp; Isla Incahuasi"
                cost="~Bs. 420 / ~$60 total"
                items={[
                  "Arrive Uyuni in the early morning — the light at dawn is extraordinary over the Altiplano. Check into a hostel (Bs. 70–105 / $10–15) or salt hotel if you have booked one. Most good tour operators can arrange to take your bags while you do the morning.",
                  "Train Cemetery (Cementerio de Trenes) — free entry, 3km from Uyuni town centre. The rusted hulks of 19th-century British-built steam locomotives lie scattered across the salt plain, abandoned when the mining industry collapsed in the 1940s. At sunrise the long shadows and peeling paint create a hauntingly beautiful scene. Walk or taxi (Bs. 20–30).",
                  "Breakfast in Uyuni town: the market near the main plaza serves api con pastel — a warm purple corn drink with a deep-fried pastry — for Bs. 5–8 ($1). This is the classic Bolivian breakfast and one of the best food experiences of the trip.",
                  "Afternoon: Group salt flat half-day tour (Bs. 175–240 / $25–35 pp). Your 4WD vehicle drives out onto the Salar — the first sight of the infinite white expanse is genuinely breathtaking, even if you have seen hundreds of photos.",
                  "Perspective photos with props at the Dakar Rally monument and the salt hexagon formations — the flat surface and absence of visual references makes impossible-looking photos easy to achieve. Every tour guide will set up the shots.",
                  "Isla Incahuasi (Cactus Island) — entry Bs. 35 ($5). A rocky outcrop rising from the middle of the salt flat, covered in ancient giant cacti (some 800–1,200 years old, up to 10m tall). The views from the walking trail around the island over the white expanse in every direction are among the most striking in South America.",
                  "Sunset on the salt flat — stay on the Salar for the golden hour if your tour allows. The pink and orange light on white salt with perhaps some cloud reflection is not something you will easily forget.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Eduardo Avaroa Reserve — Laguna Colorada, Flamingos, Dalí Desert &amp; Geysers"
                cost="~Bs. 525 / ~$75 total"
                items={[
                  "Wake at 4:30am for sunrise on the Salar — this is non-negotiable. The pink and orange light on white salt in the early morning is the defining image of a Salar de Uyuni trip. Your guide will drive you to the best reflection spot.",
                  "Full-day 4WD tour to the Southwest Circuit (Eduardo Avaroa Andean Fauna National Reserve) — group tour Bs. 280–420 / $40–60 pp including park entry (Bs. 150 / ~$22 for foreigners).",
                  "Laguna Colorada (4,278m) — a blood-red lake whose colour comes from red algae and mineral deposits. Thousands of James&apos;s flamingos and Andean flamingos feed in the shallows. The combination of red water, white borax islands, pink flamingos, and snow-capped volcanoes in the background is genuinely surreal — a landscape that looks painted rather than real.",
                  "Geysers Sol de Mañana (4,850m) — boiling mud pools and steam vents that hiss and bubble from geothermal activity at high altitude. The contrast of frozen desert and boiling earth is arresting. The altitude here is serious — move slowly.",
                  "Desierto de Dalí (Dalí Desert) — wind-eroded volcanic rock formations in ochre, rust, and burnt sienna. The Spanish name is accurate: the landscape looks like a scene from a Salvador Dalí painting transposed to the Andes. The Árbol de Piedra (Stone Tree) — a lone volcanic rock sculpted by wind abrasion into a remarkable balanced formation — is one of Bolivia&apos;s most photographed natural sculptures.",
                  "Various coloured lagoons: Laguna Hedionda, Laguna Blanca, Laguna Verde. Return to Uyuni or overnight at a basic lodge inside the reserve (included in some tour packages).",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Mirror Effect (Rainy Season) or Hexagon Photography (Dry Season) + Potosí Silver Mines + Departure"
                cost="~Bs. 385 / ~$55 total"
                items={[
                  "Rainy season (December–April): Final morning mirror effect tour. A thin film of rainwater creates the infinite sky reflection. Go at golden hour — 6–8am — for the best light and the most complete reflection. Bring a wide-angle lens or use your phone&apos;s ultra-wide. The image of the mirror Salar at sunrise is one of the great travel photographs available to any visitor with basic camera skills.",
                  "Dry season (May–November): Sunrise salt hexagon photography — the geometric patterns across the entire surface, lit by golden morning light, are their own extraordinary spectacle. Some guides will lead you to sections where salt harvesting cooperatives are working — you can photograph traditional salt harvesting with workers dressed in the local style.",
                  "Optional half-day: Potosí silver mines — if you have a flexible schedule, Potosí is 3 hours from Uyuni. The Cerro Rico silver mines that funded the entire Spanish colonial empire for 200 years are still active. Guided mine tours (Bs. 70–140 / $10–20) take you inside the working mine — a raw and genuinely sobering experience of the conditions that shaped South American history.",
                  "Return to Uyuni town by 10am. Browse the Uyuni market for souvenirs: alpaca wool scarves (Bs. 35–70 / $5–10), salt lamps (Bs. 50–100 / $7–15), handwoven textiles.",
                  "Afternoon: bus or internal flight back to La Paz (or onward to San Pedro de Atacama, Chile — many tours offer a Uyuni-to-Atacama crossing via the Bolivia-Chile border near Laguna Verde). From La Paz, connect to your international flight.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Salar de Uyuni" onPlanTrip={() => setModalOpen(true)} />

          {/* Natural Wonders Guide */}
          <section className="mb-14 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="font-serif text-xl font-light text-ink mb-3">🌍 Natural Wonders of South America</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Salar de Uyuni is one of a handful of natural wonders in South America that genuinely has no equivalent anywhere else on Earth. If you are planning a South America itinerary, consider combining it with the Atacama Desert (Chile), Patagonia (Argentina/Chile), or Machu Picchu (Peru) for a circuit of the continent&apos;s greatest landscapes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Atacama Desert", href: "/blog/atacama-4-days", icon: "🏜️" },
                { label: "Patagonia Guide", href: "/blog/patagonia-7-days", icon: "🏔️" },
                { label: "Machu Picchu", href: "/blog/peru-machu-picchu-5-days", icon: "🗿" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-2 p-3 bg-white border border-blue-200 rounded-lg hover:border-gold hover:shadow-sm transition-all text-xs font-medium text-ink">
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Salar de Uyuni — Salt, Sky &amp; Colour"
            subtitle="Bolivia&apos;s most extraordinary landscape, from mirror reflections to flamingo lagoons."
            spots={[
              {
                name: "Mirror Effect at Sunrise",
                query: "salar de uyuni mirror effect sunrise sky reflection bolivia salt flat",
                desc: "The perfect sky reflection on the flooded Salar at dawn — one of the most extraordinary natural photographs achievable by any visitor.",
              },
              {
                name: "Laguna Colorada Flamingos",
                query: "laguna colorada flamingos red lake bolivia andes altiplano",
                desc: "Thousands of James&apos;s flamingos feeding in the blood-red waters of Laguna Colorada at 4,278m altitude.",
              },
              {
                name: "Isla Incahuasi Cacti",
                query: "isla incahuasi cactus island salar de uyuni bolivia",
                desc: "Giant cacti up to 10 metres tall on Isla Incahuasi, rising from the middle of the world&apos;s largest salt flat.",
              },
              {
                name: "Dalí Desert Rock Formations",
                query: "dali desert stone tree arbol de piedra bolivia volcanic rock formation altiplano",
                desc: "The wind-eroded volcanic rock formations of the Desierto de Dalí — a landscape that appears painted rather than geological.",
              },
              {
                name: "Salt Flat Hexagons",
                query: "salar de uyuni salt hexagons dry season white bolivia clear sky",
                desc: "The geometric hexagonal patterns of the dry Salar surface under a cobalt Andean sky — the dry season&apos;s answer to the mirror effect.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bolivia is one of the most affordable travel destinations in South America. A complete 5-day Salar de Uyuni trip — flights from La Paz, all tours, accommodation, and food — costs from approximately $300–350 total in-country on a genuine budget. All figures shown in both Bolivianos (BOB) and USD (1 USD ≈ 6.9 BOB).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (BOB / USD)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (BOB / USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights (La Paz↔Uyuni)", "Bs. 105–175 / $15–25 (bus)", "Bs. 550–1,050 / $80–150 (flight)"],
                    ["🏨 Accommodation (5 nights)", "Bs. 350–700 / $50–100", "Bs. 1,400–3,500 / $200–500"],
                    ["🚗 Tours (salt flat + circuit)", "Bs. 350–490 / $50–70", "Bs. 840–1,400 / $120–200"],
                    ["🍽 Food (5 days)", "Bs. 280–490 / $40–70", "Bs. 700–1,400 / $100–200"],
                    ["🎟 Park entry (Eduardo Avaroa)", "Bs. 150 / $22", "Bs. 150 / $22"],
                    ["🗺 Misc (transfers, tips, souvenirs)", "Bs. 140–280 / $20–40", "Bs. 280–560 / $40–80"],
                    ["TOTAL (per person, in-country)", "Bs. 1,375–2,285 / ~$200–330", "Bs. 3,920–8,060 / ~$570–1,150"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (Bs. 420–490 / ~$60–70/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Uyuni hostels (Bs. 70–105/night), take group 4WD tours (Bs. 175–240/day), eat at the market (api con pastel for Bs. 5, salteñas for Bs. 15). Bolivia is genuinely very affordable — this budget is very comfortable, not spartan.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (Bs. 840–1,050 / ~$120–150/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Salt hotel (Palacio de Sal or Luna Salada, Bs. 420–700/night), private 4WD for the Southwest Circuit (Bs. 1,050–1,400 for 2–4 people), good restaurants. This is the sweet spot — you get the iconic salt hotel experience without luxury prices.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bolivia (La Paz &amp; Uyuni)</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              La Paz has the widest range of accommodation in Bolivia, from backpacker hostels in the Sopocachi neighbourhood to boutique hotels in the historic centre. In Uyuni, the main choice is between staying in town (more affordable, wider choice) and staying in a salt hotel directly on the Salar (more expensive but a unique experience).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Palacio de Sal / Luna Salada Hotel (Uyuni)",
                  type: "Luxury salt hotel · On the Salar de Uyuni",
                  price: "From Bs. 560–840 / $80–120/night",
                  badge: "Most unique stay",
                  desc: "Hotels built entirely from salt blocks — floors, walls, furniture, and sculptures are all made of salt extracted from the Salar. Sleeping in a salt hotel on the edge of the world&apos;s largest salt flat is one of the most extraordinary accommodation experiences on Earth. Book 4–6 weeks in advance.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "La Paz Hostel Zone (Sopocachi / Miraflores)",
                  type: "Budget-mid hostels · La Paz",
                  price: "From Bs. 70–175 / $10–25/night",
                  badge: "Best budget La Paz",
                  desc: "La Paz has an excellent hostel scene in the Sopocachi neighbourhood — clean dorms and private rooms, communal kitchens, and strong traveller communities. Wild Rover and Loki Hostel are two of the most social. Essential for meeting other travellers for sharing salt flat group tours.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Uyuni Town Hostels",
                  type: "Budget · Uyuni town centre",
                  price: "From Bs. 70–140 / $10–20/night",
                  badge: "Practical base",
                  desc: "Several small hostels cluster around the main plaza and Avenida Ferroviaria in Uyuni town. Basic but functional — you will spend most of your time on the Salar, not in your room. The proximity to tour operators makes morning departures easier. Look for Toñito Hotel or Piedra Blanca Backpackers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Basic Reserve Lodges (Southwest Circuit)",
                  type: "Basic lodges · Eduardo Avaroa Reserve",
                  price: "From Bs. 105–175 / $15–25/night",
                  badge: "For the circuit",
                  desc: "Some Southwest Circuit tours include overnight accommodation in basic lodges inside the reserve near Laguna Colorada. Unheated dorms in extreme cold (nights below -15°C), shared bathrooms, no electricity, but waking up inside the reserve at dawn with the flamingos is unforgettable. Bring your warmest sleeping bag.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bolivia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bolivian food is hearty, filling, and very affordable. La Paz has the widest range — from market stalls serving the national staples to internationally recognised fine dining restaurants. Uyuni town is limited but functional — eat your best meals before you arrive.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Salteñas — Bolivia&apos;s National Snack",
                  t: "Street food / Market stalls · La Paz &amp; Uyuni",
                  d: "The Bolivian empanada: a pastry casing filled with a soupy mixture of meat (or chicken or vegetarian), olive, boiled egg, and potato in a sweet-spiced sauce. Eaten in the morning — Bolivians eat salteñas as a mid-morning snack before lunch. Bs. 8–15 each from street stalls. The best ones are made fresh and served piping hot at around 10am.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Silpancho — La Paz Lunch Classic",
                  t: "Local restaurants · La Paz",
                  d: "Silpancho is La Paz&apos;s most iconic lunch dish: a thin, wide, breaded beef cutlet served over white rice and boiled potatoes, topped with a fried egg and a fresh tomato-onion-parsley relish. It is enormous, extraordinarily filling, and costs Bs. 18–25 ($3–4) at a local restaurant. Order it at Mercado Lanza or any decent local comedor.",
                  b: "La Paz staple",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Api con Pastel — Bolivian Breakfast",
                  t: "Market stalls · Uyuni &amp; La Paz",
                  d: "Api is a warm, thick drink made from purple corn, spiced with cinnamon and cloves. Served alongside a deep-fried pastry (pastel) dusted with powdered sugar. Bs. 5–8 for the pair from market stalls. The classic Bolivian breakfast and one of the most comforting things you will eat at altitude. Find it at Uyuni&apos;s morning market near the main plaza.",
                  b: "Classic breakfast",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Llama Steak — Andean Protein",
                  t: "Mid-range restaurants · La Paz &amp; Uyuni",
                  d: "Llama is the traditional Andean protein — lean, slightly gamey, flavourful. Served as a steak with quinoa, potato, and salad at better restaurants in La Paz (Bs. 60–105 / $9–15) and Uyuni (Bs. 45–70 / $7–10). Gustu restaurant in La Paz (Bolivia&apos;s most celebrated fine dining) serves extraordinary llama preparations with native Bolivian ingredients.",
                  b: "Andean speciality",
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
            destination="Salar de Uyuni Bolivia"
            hotels={[
              {
                name: "Palacio de Sal Hotel",
                type: "Luxury salt hotel · On the Salar de Uyuni",
                price: "From $80/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/bo/palacio-de-sal.html?aid=2820480",
              },
              {
                name: "Luna Salada Hotel",
                type: "Salt hotel · Uyuni",
                price: "From $70/night",
                rating: "4",
                badge: "Great value",
                url: "https://www.booking.com/hotel/bo/luna-salada.html?aid=2820480",
              },
              {
                name: "Casa de Sal Cristal Samaña",
                type: "Boutique salt hotel · Colchani",
                price: "From $55/night",
                rating: "4",
                badge: "Budget salt hotel",
                url: "https://www.booking.com/hotel/bo/cristal-samana.html?aid=2820480",
              },
              {
                name: "Atix Hotel La Paz",
                type: "Boutique luxury · La Paz Sopocachi",
                price: "From $150/night",
                rating: "5",
                badge: "Best La Paz",
                url: "https://www.booking.com/hotel/bo/atix.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Salar de Uyuni Sunrise Tour",
                duration: "Full day",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=salar+de+uyuni+sunrise+tour&partner_id=PSZA5UI",
              },
              {
                name: "Southwest Circuit — Laguna Colorada & Geysers",
                duration: "Full day",
                price: "From $50/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=laguna+colorada+uyuni+tour&partner_id=PSZA5UI",
              },
              {
                name: "Uyuni to Atacama Desert Crossing",
                duration: "3 days",
                price: "From $120/person",
                badge: "Epic route",
                url: "https://www.getyourguide.com/s/?q=uyuni+atacama+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mirror Effect Photography Tour",
                duration: "4 hrs",
                price: "From $25/person",
                badge: "Rainy season",
                url: "https://www.getyourguide.com/s/?q=salar+de+uyuni+mirror+effect&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏔️",
                  title: "Underestimating altitude sickness — coca tea is your best friend",
                  desc: "La Paz is at 3,640m and the Salar is at 3,656m. Laguna Colorada is at 4,278m and some Southwest Circuit points reach 5,000m. Altitude sickness (soroche) affects even fit travellers and ruins trips. Drink coca tea from the moment you land — it is genuinely effective for mild altitude symptoms, not just a tourist gimmick. Avoid alcohol for 48 hours, move slowly, and carry acetazolamide (Diamox) if your doctor prescribes it. If symptoms are severe, descend immediately.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌧️",
                  title: "Visiting in the wrong season for the wrong expectations",
                  desc: "The rainy season (December–April) gives you the mirror effect but also some days with heavy cloud cover that reduces the reflection and makes the circuit roads muddy. The dry season (May–November) gives you no mirror but perfect clear skies for star photography and consistently better access to the Southwest Circuit. Research which experience you want most and plan accordingly — both seasons are extraordinary but very different.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💊",
                  title: "Not bringing serious sun protection — UV at altitude is extreme",
                  desc: "At 3,656m on a white salt surface, UV radiation is approximately 40–50% more intense than at sea level, amplified by the reflective salt below you. Without SPF 50+ sunscreen, polarised UV-blocking sunglasses, a wide-brimmed hat, and lip balm, you will be severely burned within two hours. This is not optional advice. The salt flat is a trap for the unprepared.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌡️",
                  title: "Packing for heat and ignoring the cold — nights are below -15°C",
                  desc: "Days on the Salar can feel warm in the sun (15–20°C). Nights, particularly in the dry season, drop to -10°C to -20°C on the salt flat. Inside the reserve lodges there is no heating. Bring a genuine down jacket, thermal base layers, wool socks, gloves, and a warm hat regardless of when you visit. The salt hotel rooms retain some heat from the salt blocks but are still very cold at night.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚗",
                  title: "Booking the cheapest tour operator without reading reviews carefully",
                  desc: "Cheap tour operators in Uyuni sometimes use very old 4WD vehicles that break down in remote areas two hours from any help. Some have poorly trained guides who rush the best spots. Read TripAdvisor and Google reviews carefully before booking. Reputable operators include Red Planet Expedition and Oasis Bolivia. A slightly more expensive operator with a good reputation makes an enormous difference to this trip.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Salar de Uyuni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📷",
                  title: "Bring props for perspective photography",
                  desc: "The flat, featureless expanse of the Salar makes perspective tricks possible nowhere else on Earth — tiny humans holding giant objects, people appearing to stand on each other, miniature scenes. Bring small toys, figurines, or props from home. Every guide will happily set up the shots. These are the photos that go viral.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⭐",
                  title: "Stay overnight for the stars — the Milky Way reflects in the salt",
                  desc: "The Salar sits at high altitude far from any city light. The Milky Way is visible with the naked eye and partially reflects in the white salt surface. If you book a salt hotel, wake at 2am and step outside. Bring a wide-angle camera. The night sky over a white salt flat is one of the most extraordinary natural experiences on Earth.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🦩",
                  title: "See flamingos at Laguna Colorada at dawn, not midday",
                  desc: "Pink flamingos feeding in a blood-red lake against a snow-capped volcano at sunrise — this is the image. Flamingos are most active in early morning and disperse by midday. Most group tours arrive at Laguna Colorada around 11am when the light is flat and the flamingos have moved. Book a private 4WD or an early-starting group tour to be there at 7–8am.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💵",
                  title: "Bring enough cash BOB from La Paz — Uyuni ATMs are unreliable",
                  desc: "ATMs exist in Uyuni but are frequently empty or out of service. Tour operators, salt hotels, and most restaurants in Uyuni are cash-only or strongly prefer cash. Withdraw enough Bolivianos in La Paz for your entire Uyuni stay plus the Eduardo Avaroa reserve entry fee (Bs. 150). Carry USD as emergency backup — some operators accept them.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🔗",
                  title: "Connect to Chile&apos;s Atacama Desert for an epic circuit",
                  desc: "Many tours run from Uyuni to the Atacama Desert crossing at the Bolivia-Chile border near Laguna Verde. You can complete the Southwest Circuit and end in San Pedro de Atacama — one of the world&apos;s great multi-day adventure journeys. Book GetYourGuide&apos;s combined Uyuni-to-Atacama tours for the best-value guided crossing.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌊",
                  title: "Check mirror depth before your tour — too deep is also a problem",
                  desc: "In peak rainy season the water on the Salar can be 20–50cm deep, making 4WD access difficult or impossible. The ideal mirror depth is 5–15cm. Ask your tour operator to check conditions the evening before. February and early March tend to have the most reliable mirror conditions with manageable water depth.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Salar de Uyuni" />

          {/* Combine With */}
          <CombineWith currentSlug="bolivia-salar-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit Salar de Uyuni for the mirror effect?",
                  a: "The mirror effect occurs during Bolivia's rainy season from December to April, when a thin layer of water (usually 5–30cm) floods the Salar and creates a perfect sky reflection. Peak mirror effect is January–March. The dry season (May–November) offers a completely different but equally stunning experience: blinding white salt hexagons, turquoise skies, and exceptional stargazing. Both are worth visiting for different reasons — decide which experience you want most before booking.",
                },
                {
                  q: "How do I get to Uyuni from La Paz?",
                  a: "Option 1: Overnight bus (10–12 hours, Bs. 105–175 / $15–25 for semi-cama reclining seat) — bumpy but an adventure, saves a night's accommodation. Option 2: Amaszonas or Boliviana de Aviación flight (1 hour, Bs. 550–1,050 / $80–150 one way) from El Alto Airport, La Paz — recommended for mid-range travellers who want to maximise time on the Salar. Option 3: Train from Oruro (5–6 hours, scenic) — the most romantic option. Book train tickets in advance at Oruro station.",
                },
                {
                  q: "Is Salar de Uyuni safe to visit?",
                  a: "Generally yes. The main risks are altitude sickness (serious above 4,000m), UV radiation (extreme at high altitude on reflective white salt), and cold temperatures (below -15°C at night in the dry season). With proper preparation — acclimatisation in La Paz, strong sunscreen, warm layers, and coca tea — it is safe and accessible. The Southwest Circuit is very remote; always travel with an experienced guide and a reputable operator with a reliable 4WD vehicle.",
                },
                {
                  q: "What currency does Bolivia use and can I use cards in Uyuni?",
                  a: "Bolivia uses the Boliviano (BOB). 1 USD ≈ 6.9 BOB. Uyuni is largely cash-only — ATMs exist but are frequently empty or out of service. Bring enough BOB cash from La Paz for your entire Uyuni stay, including the Eduardo Avaroa reserve entry fee (Bs. 150). Tour operators and salt hotels mostly require cash or may charge a fee for card payment. La Paz has reliable ATMs. Bolivia is one of South America's cheapest countries — budget travellers can live very comfortably for Bs. 280–350 ($40–50) per day.",
                },
                {
                  q: "Do Indian passport holders need a visa for Bolivia?",
                  a: "No — Indian passport holders receive a free 90-day visa on arrival at Bolivian airports and land borders. Bolivia is one of the few South American countries that has never required a prior visa from Indian nationals. You need a valid passport (6+ months validity), return ticket, and proof of sufficient funds. Register your itinerary with the Indian Embassy if visiting remote areas like the Southwest Circuit.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bolivia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/bolivia-salar-5-days", label: "5-Day Itinerary", icon: "📅" },
                { href: "/blog/bolivia-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/salar-de-uyuni-mirror-effect", label: "Mirror effect guide", icon: "🪞" },
                { href: "/blog/la-paz-travel-guide", label: "La Paz guide", icon: "🏙️" },
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
          <RelatedGuides currentSlug="bolivia-salar-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Patagonia in 7 Days — Torres del Paine &amp; Glaciers", href: "/blog/patagonia-7-days" },
                { label: "Machu Picchu in 5 Days — Complete Peru Guide", href: "/blog/peru-machu-picchu-5-days" },
                { label: "Atacama Desert 4 Days — Chile&apos;s Moonscape", href: "/blog/atacama-4-days" },
                { label: "Buenos Aires City Guide — Argentina", href: "/blog/argentina-buenos-aires" },
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
