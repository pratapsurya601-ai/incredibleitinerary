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
const MENDOZA_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Mendoza Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️", label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "4-Day Itinerary" },
  { id: "bodegas",   emoji: "🍷",  label: "Bodega &amp; Wine Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Mendoza Argentina 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mendoza in 4 Days — Malbec, Aconcagua and the best asado on earth&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days"
        imageUrl="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80"
        description="Mendoza Argentina in 4 Days: Malbec bodegas, Aconcagua views, bike-and-wine tours through Lujan de Cuyo, asado culture, and Zuccardi Valle de Uco — complete travel guide with budget breakdown."
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
export default function MendozaArgentinaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MENDOZA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mendoza" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mendoza argentina malbec vineyard andes aconcagua"
            fallback="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1600&q=80"
            alt="Mendoza Argentina Malbec vineyards with Aconcagua and the Andes mountains in the background"
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
              <span className="text-white/70">Mendoza 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mendoza in 4 Days:
                <em className="italic text-amber-300"> Malbec, Aconcagua &amp; the World&apos;s Best Asado</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,800 bodegas in the shadow of the Andes, bike-and-wine tours through Lujan de Cuyo, Zuccardi Valle de Uco, and asado that reaches religious intensity. The complete guide.
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
              <span>🇦🇷 Mendoza, Argentina</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mendoza is the wine capital of the southern hemisphere — 1,800 bodegas producing Malbec in the shadow of Aconcagua, the highest peak outside the Himalayas. The bike-and-wine tours through Lujan de Cuyo are one of the great travel experiences on earth, the asado culture here reaches a religious intensity, and the olive oil estates produce oils that beat Tuscany in global competitions.
            </p>
          </blockquote>

          {/* ── WHAT MENDOZA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mendoza Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mendoza sits at 750 metres above sea level in the dry eastern foothills of the Andes, 1,000 kilometres west of Buenos Aires. The city was rebuilt after a devastating earthquake in 1861 and redesigned with wide, tree-lined boulevards and a system of irrigation canals that feed 400,000 plane trees — giving the otherwise arid city the feel of a Mediterranean oasis. It is the sixth-largest city in Argentina but feels remarkably walkable and compact.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The wine region fans out in two main directions: Lujan de Cuyo, the traditional heartland at 900 metres altitude where Argentina&apos;s Malbec reputation was built, and Valle de Uco, the high-altitude frontier at 1,000 to 1,400 metres where the most exciting new wines are being made. Together they account for over 70% of Argentina&apos;s wine production. Bodega Catena Zapata&apos;s Mayan-pyramid winery in Lujan de Cuyo and Zuccardi Valle de Uco — named Best Winery in the World four consecutive times — are the two headline visits.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But Mendoza is not just wine. Aconcagua, at 6,961 metres the highest peak outside Asia, is visible from the vineyards on clear days. The Villavicencio Natural Reserve offers pre-Andean gorge landscapes. The gaucho culture on the surrounding estancias is alive and performing. And the asado — beef grilled over open flame by a parrillero who has spent decades perfecting the art — is genuinely the best beef you will ever eat.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Buenos Aires" value="2 hr flight" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May" />
              <StatCard icon="🍷" label="Bodegas" value="1,800+" />
              <StatCard icon="💰" label="Budget From" value="$45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mendoza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🍇",
                  t: "Harvest Season — Best Time",
                  d: "The vendimia (grape harvest) runs from late February through April. March is peak harvest with the Fiesta Nacional de la Vendimia festival, the biggest celebration in Mendoza. Temperatures 18–28°C, golden autumn light on the vines, and bodegas at their most active. Book 3–6 months ahead for March.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🌸",
                  t: "Spring — Excellent Alternative",
                  d: "Spring brings warming temperatures (15–25°C), flowering vines, and snow-capped Andes still visible from the vineyards. Fewer tourists than harvest season, better availability at bodegas and hotels. October and November are particularly pleasant for bike-and-wine tours.",
                  b: "Great value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "❄️",
                  t: "Winter — Cold but Clear",
                  d: "Daytime temperatures 8–16°C, cold nights near freezing. The Andes are at their most dramatic with full snow cover and the air is crystal clear. Wine tastings by fireplace. Ski season at Las Lenas and Penitentes (3–4 hours from Mendoza). Fewer bodegas offer tours.",
                  b: "For ski + wine",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🔥",
                  t: "Summer — Hot and Dry",
                  d: "Temperatures reach 35–40°C in January and February. The dry desert heat is manageable but afternoon vineyard visits are uncomfortable. Thunderstorms and hail can damage grapes — winemakers are nervous, not celebratory. If you must visit in summer, schedule tastings for early morning.",
                  b: "Avoid Jan–Feb",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Mendoza</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Mendoza&apos;s El Plumerillo Airport (MDZ) is just 15 minutes from the city centre by taxi or remise ($8–15 USD). Most international visitors fly via Buenos Aires (EZE or AEP). Direct flights from Santiago, Chile also operate daily.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flight from Buenos Aires (recommended)",
                  d: "Aerolineas Argentinas and LATAM operate 8–10 daily flights from Buenos Aires Aeroparque (AEP) to Mendoza (MDZ). Flight time 1 hour 45 minutes. Fares $50–120 USD booked in advance. The most practical option — arrives in 2 hours door-to-door from Buenos Aires city centre.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Overnight bus from Buenos Aires",
                  d: "Cama (fully reclining sleeper) buses take 14–15 hours from Buenos Aires Retiro terminal to Mendoza. Fares $25–45 USD in cama suite class with meals, wine, and 180-degree flat beds. Andesmar and Chevallier are the best operators. Departs evening, arrives early morning. An authentically Argentine experience.",
                  b: "Budget + experience",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Flight from Santiago, Chile",
                  d: "LATAM and Sky Airline fly Santiago (SCL) to Mendoza (MDZ) daily, 1 hour. Fares $60–150 USD. A popular cross-Andes combination — pair Santiago wine country with Mendoza wine country. Note: the Paso Los Libertadores road crossing closes frequently in winter due to snow.",
                  b: "Cross-Andes combo",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Buenos Aires or Santiago",
                  d: "Buenos Aires to Mendoza: 1,050km, 12–13 hours via Ruta 7. Santiago to Mendoza: 350km, 6–7 hours via Paso Los Libertadores (paved, dramatic Andean crossing, closes in winter snow). Rental cars available at both origins and at MDZ airport.",
                  b: "Flexible",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Mendoza Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances wine, mountains, food, and culture. Do not drive if you plan to taste wine — use remises, organised tours, or the excellent bike-and-wine tours instead.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Mendoza City · Plaza Independencia · Parque San Martin · First Asado"
                cost="$40–70 (food, wine tasting, dinner)"
                items={[
                  "Arrive at MDZ airport and transfer to your hotel in central Mendoza or Chacras de Coria by remise ($10–15 USD, 15–20 minutes). Check in and orient yourself — Mendoza&apos;s compact city centre is walkable and the tree-lined streets with their irrigation canals are immediately charming.",
                  "Walk Plaza Independencia, the main square, and the four surrounding plazas (Plaza Espana, Plaza Italia, Plaza Chile, Plaza San Martin). Mendoza was rebuilt after the 1861 earthquake in a deliberate grid pattern with wide boulevards and five public squares. The Museo del Area Fundacional beneath Plaza Pedro del Castillo shows the original colonial city.",
                  "Mercado Central on Avenida Las Heras for empanadas and your first Malbec tasting. The market has wine stalls where you can taste 3–4 local Malbecs for $3–5 USD total. The empanadas here are Mendocino-style (baked, with distinctive seasoning) and cost $1–2 each.",
                  "Late afternoon walk through Parque General San Martin — a 420-hectare park designed by Carlos Thays at the western edge of the city. The rose garden has 500 varieties, the lake is popular at sunset, and on clear days the Andes fill the western horizon. Free entry.",
                  "Dinner at a neighbourhood parrilla — order a parrillada mixta (mixed grill platter with chorizo, morcilla, tira de asado, and flank steak) for $12–20 USD per person. Pair with a house Malbec carafe ($4–6). Argentines eat dinner at 9:30–10pm; embrace the schedule.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Bike &amp; Wine Tour · Lujan de Cuyo Bodegas · Bodega Catena Zapata"
                cost="$60–100 (bike tour, tastings, lunch, dinner)"
                items={[
                  "Full-day bike-and-wine tour of Lujan de Cuyo ($40–60 USD guided, includes bike, helmet, guide, and tastings at 3–4 bodegas). Book through GetYourGuide or directly with Ampora Wine Tours or Mr Hugo Bikes at least 2 weeks in advance during harvest season. The 25km route through low-altitude vineyards is flat, safe, and spectacular.",
                  "Bodega Catena Zapata — the Mayan-pyramid winery designed by architect Cesar Pelli is one of the most visually striking winery buildings on earth. Tastings from $15–30 USD for 4–5 wines including their flagship Malbec Argentino. The altitude education here is excellent: they explain why Mendoza&apos;s 900m vineyards produce different fruit than Valle de Uco at 1,200m.",
                  "Lunch at a vineyard restaurant in Lujan de Cuyo — fire-cooked provoleta, chorizo, and bondiola under a vine pergola with Andes views. Budget $15–25 for a full asado lunch with wine. This is the quintessential Mendoza experience.",
                  "Bodega Carmelo Patti — a legendary boutique winery run by a single winemaker producing just 15,000 bottles per year. The Gran Assemblage Cabernet is considered one of Argentina&apos;s finest wines. Tastings by appointment, typically free or $10. An intimate counterpoint to Catena&apos;s grandeur.",
                  "Evening return to Mendoza. Dinner at Siete Cocinas ($25–35 USD per person) — a restaurant celebrating the seven regional cuisines of Argentina. The Cuyo region tasting plate and the Patagonian lamb are outstanding.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Valle de Uco · Zuccardi · Clos de los Siete · Olive Oil"
                cost="$80–140 (transport, tastings, winery lunch, olive oil)"
                items={[
                  "Transfer to Valle de Uco by remise ($40 each way) or organised day tour ($50–80 including guide). Valle de Uco is 100km south of Mendoza city at 1,000–1,400m altitude — the drive through Andean scrubland with Aconcagua visible to the north is magnificent.",
                  "Zuccardi Valle de Uco — four consecutive wins as Best Winery in the World at The Drinks Business Global Masters. The modern concrete-and-stone winery designed by architect Tom Hughes is an architectural landmark. Guided tour and tasting $25–35 USD, featuring their single-vineyard Malbecs from different altitude parcels.",
                  "Lunch at Zuccardi&apos;s Pan y Oliva restaurant ($25–40 per person) — wood-fired bread baked on site, Mendoza olive oils, charcuterie, and pairing with their single-vineyard Malbecs. One of the best wine-country lunches in Argentina.",
                  "Clos de los Siete estate — Michel Rolland&apos;s extraordinary 850-hectare French wine project with seven chateaux sharing a single terroir. Tastings from $15–20 USD. The panoramic view of the low vines against the snow-capped Andes in the afternoon light is one of South America&apos;s most spectacular wine views.",
                  "Olive oil tasting at Laur Olivos ($10 USD) — Mendoza produces internationally prizewinning extra virgin olive oils from high-altitude groves. The compound oils with fresh bread are excellent. Return to Mendoza by evening.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Aconcagua Viewpoint · Villavicencio · Departure"
                cost="$40–80 (transport, park entry, lunch, airport transfer)"
                items={[
                  "Early morning departure for Aconcagua Provincial Park via Ruta 7. By local bus ($5 each way, 2 hours to Uspallata) or remise ($40–60 return). The drive through the pre-Andean gorge passes through the Villavicencio Natural Reserve with its dramatic canyon landscapes and mineral springs.",
                  "Horcones viewpoint inside Aconcagua Provincial Park (park entry $5–10 USD). On clear mornings the summit of Aconcagua at 6,961m is visible — the highest point in the Western and Southern Hemispheres. Andean condors regularly circle overhead. The air at 2,800m is noticeably thinner.",
                  "Lunch at Uspallata village — a mountain town that served as the basecamp for Argentine independence hero Jose de San Martin&apos;s crossing of the Andes. Simple restaurant fare: locro (Andean corn and meat stew) or empanadas for $6–10 USD.",
                  "Return to Mendoza via the Villavicencio road (a winding mountain pass with spectacular views if driving). Alternatively, the return bus follows Ruta 7 through the river valley.",
                  "Transfer to El Plumerillo Airport (MDZ) — 15 minutes by remise from the city centre ($10–15 USD). Allow 2 hours before domestic flights, 3 hours for international departures.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mendoza" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BODEGA & WINE GUIDE ── */}
          <section id="bodegas" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍷 Bodega &amp; Wine Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important bodegas and wine experiences in order of priority. Mendoza&apos;s 1,800 bodegas range from vast industrial operations to single-winemaker garages. These are the ones worth your time.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Zuccardi Valle de Uco",
                  e: "$25–35 (guided tour + tasting)",
                  d: "Four consecutive wins as Best Winery in the World. The modern architecture alone is worth the visit. Their single-vineyard Malbecs from different altitude parcels demonstrate why Valle de Uco has become the most exciting wine region in South America. Book at least 1 week ahead.",
                  t: "Must visit · 2–3 hrs",
                },
                {
                  n: "Bodega Catena Zapata",
                  e: "$15–30 (tasting of 4–5 wines)",
                  d: "The Mayan-pyramid winery in Lujan de Cuyo designed by Cesar Pelli. Catena is the family that proved Argentine Malbec could compete with the world&apos;s finest wines. The altitude education and tasting experience are polished and informative. A Mendoza essential.",
                  t: "Must visit · 1.5–2 hrs",
                },
                {
                  n: "Clos de los Siete",
                  e: "$15–20 (tasting)",
                  d: "Michel Rolland&apos;s seven-chateau project in Valle de Uco — 850 hectares of French-style wine estates sharing a single terroir. The landscape view of the estates against the Andes is extraordinary. The horizontal tasting comparing all seven wines from the same vintage is a world-class wine education.",
                  t: "Must visit · 1.5 hrs",
                },
                {
                  n: "Carmelo Patti",
                  e: "Free–$10 (by appointment)",
                  d: "A single winemaker, a modest garage, and 15,000 bottles per year of some of Argentina&apos;s most celebrated wines. The Gran Assemblage Cabernet is legendary. Carmelo himself often conducts the tasting. The polar opposite of corporate wine tourism — intimate, authentic, unforgettable.",
                  t: "Unique · 1 hr",
                },
                {
                  n: "Bodega Achaval Ferrer",
                  e: "$15–25 (4 wines)",
                  d: "The Finca Altamira Malbec is consistently rated among Argentina&apos;s top five wines. Even the entry-level pour demonstrates the textural difference between Mendoza Malbec and its French Cahors ancestor. Beautiful cellar and visitor experience in Lujan de Cuyo.",
                  t: "Wine lovers · 1.5 hrs",
                },
                {
                  n: "Bodega Ruca Malen",
                  e: "$8–15 (3 wines)",
                  d: "One of the most visitor-friendly bodegas in Lujan de Cuyo with spectacular Andes views from the tasting terrace. The Malbec Reserve is outstanding and the cellar is beautiful. Popular on bike-and-wine tours for good reason — accessible, friendly, and genuinely good wine.",
                  t: "Bike tour stop · 1 hr",
                },
                {
                  n: "Laur Olivos (Olive Oil)",
                  e: "$10 (tasting)",
                  d: "Not a winery but equally essential. Mendoza&apos;s high-altitude olive groves produce internationally prizewinning extra virgin oils. The specialist agronomist explains the altitude advantage and guides a tasting of single-variety oils with fresh bread. A perfect complement to wine touring.",
                  t: "Unique · 45 mins",
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
            title="Mendoza — Malbec, Andes &amp; Asado"
            subtitle="The wine capital of the southern hemisphere."
            spots={[
              {
                name: "Malbec Vineyards Lujan de Cuyo",
                query: "mendoza argentina malbec vineyard andes lujan de cuyo winery",
                desc: "Low-altitude Malbec vineyards in Lujan de Cuyo with the snow-capped Andes rising behind — the iconic Mendoza vista.",
              },
              {
                name: "Zuccardi Valle de Uco Winery",
                query: "zuccardi valle de uco winery mendoza argentina modern architecture",
                desc: "The award-winning Zuccardi winery in Valle de Uco — four-time winner of Best Winery in the World.",
              },
              {
                name: "Aconcagua from Horcones",
                query: "aconcagua mountain mendoza argentina andes highest peak south america",
                desc: "Aconcagua at 6,961m viewed from the Horcones approach — the highest peak in the Western Hemisphere.",
              },
              {
                name: "Argentine Asado",
                query: "argentine asado parrilla mendoza beef grill fire",
                desc: "Traditional asado over open flame — the parrillero&apos;s art of fire-cooked beef, chorizo, and provoleta.",
              },
              {
                name: "Catena Zapata Pyramid Winery",
                query: "catena zapata pyramid winery mendoza argentina lujan de cuyo",
                desc: "Bodega Catena Zapata&apos;s Mayan-pyramid winery designed by Cesar Pelli — one of the most striking winery buildings on earth.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mendoza offers extraordinary value for wine tourism — world-class tastings for $10–30 when equivalent experiences in Napa or Bordeaux cost $50–150. The biggest variable is accommodation: a hostel dorm is $12–20 while Cavas Wine Lodge runs $400–600 per night.
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
                    ["🏨 Accommodation", "$12–20/night", "$80–120/night", "$400–700/night"],
                    ["🍽 Food &amp; Wine", "$15–22/day", "$40–65/day", "$150–300/day"],
                    ["🚗 Transport", "$5–15/day", "$20–50/day", "$80–450/day"],
                    ["🍷 Bodega Tastings", "$15–25/day", "$30–60/day", "$200–500/day"],
                    ["💰 TOTAL", "$45–65/day", "$120–170/day", "$450–800/day"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium" dangerouslySetInnerHTML={{ __html: cat }} />
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($45–65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm in central Mendoza ($12–20), eat at parrillas and markets, cycle to Lujan de Cuyo bodegas, take local buses. Hostel Lao and Hostel Suites Mendoza are excellent budget bases.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel or wine hotel in Chacras de Coria ($80–120), guided bike tours, Zuccardi lunch, good restaurants. The sweet spot for experiencing Mendoza&apos;s wine culture without overspending.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($450–800/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Cavas Wine Lodge or The Vines Resort ($400–700/night), private bodega tours, chef&apos;s table at Zuccardi, helicopter tours, estancia gaucho experiences. Park Hyatt Mendoza is the luxury city option.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mendoza</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Three main areas: Mendoza city centre (walkable, good restaurants, easy airport access), Chacras de Coria (wine village 15 minutes south, boutique hotels walking distance to bodegas), and the wine lodge properties (immersive vineyard stays in Lujan de Cuyo or Valle de Uco).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Cavas Wine Lodge",
                  type: "Luxury wine lodge · Lujan de Cuyo vineyards",
                  price: "From $400/night",
                  badge: "Most immersive",
                  desc: "Individual adobe casitas set among 55 acres of Malbec vines in Lujan de Cuyo. Private plunge pools, vineyard views from every room, an extraordinary spa using grape-based treatments, and a restaurant sourcing from the estate garden. The benchmark for wine-country luxury in South America.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Park Hyatt Mendoza",
                  type: "Luxury hotel · Plaza Independencia",
                  price: "From $200/night",
                  badge: "Best city luxury",
                  desc: "The grand hotel on Plaza Independencia, built within a restored 19th-century Spanish colonial facade. The rooftop terrace has Andes views, the spa is excellent, and the location is unbeatable for exploring the city on foot. The concierge arranges bodega tours.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Chacras de Coria B&amp;Bs",
                  type: "Mid-range · Wine village district",
                  price: "$60–120/night",
                  badge: "Best value",
                  desc: "Chacras de Coria is a wine village 15 minutes from central Mendoza with the feel of a Provencal hamlet. Boutique B&amp;Bs here are 30% cheaper than equivalent city-centre properties and put you walking distance from several bodegas. Small properties fill fast — book early.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Hostel Lao",
                  type: "Budget hostel · Central Mendoza",
                  price: "$12–20/night (dorm)",
                  badge: "Best budget",
                  desc: "A well-run hostel in central Mendoza with clean dorms, a large communal kitchen, a rooftop terrace, and a sociable atmosphere. The staff organise bike tours and bodega visits at backpacker-friendly prices. Walking distance to Mercado Central and the main plazas.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Vines Resort &amp; Spa",
                  type: "Ultra-luxury · Uco Valley vineyards",
                  price: "From $500/night",
                  badge: "Most exclusive",
                  desc: "Each villa has its own vineyard plot — guests can blend their personal wine during their stay. Infinity pool with Andes views, private gaucho riding, and the restaurant sources exclusively from the estate. The most exclusive wine-country accommodation in Argentina.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: stay.name }} />
                      <p className="text-xs text-muted font-light">{stay.type}</p>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Mendoza</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mendoza&apos;s restaurant scene combines world-class wine-country dining with Argentina&apos;s extraordinary beef culture. Restaurants open late — dinner reservations at 9:30pm are normal. Tipping is 10% in Argentina.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "1884 Restaurante by Francis Mallmann",
                  t: "Fine dining · Bodega Escorihuela",
                  d: "Argentina&apos;s most famous chef&apos;s Mendoza outpost, set in the historic Bodega Escorihuela. Mallmann&apos;s signature open-fire cooking — whole sides of beef, lamb on crosses around the flames — is theatrical and extraordinary. Tasting menus $80–120 per person with wine pairing. Reserve at least 1 week ahead.",
                  b: "Best fine dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Azafran",
                  t: "Contemporary Argentine · Central Mendoza",
                  d: "A consistently excellent restaurant pairing modern Argentine cuisine with a curated Mendoza wine list. The tasting menu ($40–60 per person) changes seasonally and showcases Cuyo regional ingredients. The wine-by-the-glass programme features small bodegas you won&apos;t find elsewhere. Atmospheric courtyard dining.",
                  b: "Best wine list",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Siete Cocinas",
                  t: "Regional Argentine · Chacras de Coria",
                  d: "A restaurant celebrating all seven Argentine regional cuisines — from Northwest empanadas to Patagonian lamb to Cuyo asado. The concept is original and beautifully executed. $25–40 per person. The Cuyo regional tasting plate is the best introduction to Argentine food culture outside Buenos Aires.",
                  b: "Most unique",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Neighbourhood Parrillas",
                  t: "Traditional asado · Across Mendoza",
                  d: "Every Mendoza neighbourhood has its parrilla — a grill restaurant where the parrillero tends an open flame for hours. Order the parrillada mixta (mixed grill: chorizo, morcilla, tira de asado, provoleta, and flank steak) for $12–20 per person. The house Malbec carafe is always $4–8. Don Fernando and La Marchigiana are reliable choices.",
                  b: "Essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Mercado Central",
                  t: "Market food · Avenida Las Heras",
                  d: "The city market for empanadas ($1–2 each), fresh-squeezed juices, and budget wine tasting. The empanada stalls sell the Mendocino-style baked versions with distinctive cumin-and-paprika seasoning. Several stalls offer small Malbec pours for $1–2. The cheapest and most authentic eating in the city.",
                  b: "Best budget",
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
            destination="Mendoza Argentina"
            hotels={[
              {
                name: "Park Hyatt Mendoza",
                type: "Luxury hotel on Plaza Independencia",
                price: "From $200/night",
                rating: "5",
                badge: "Best city hotel",
                url: "https://www.booking.com/hotel/ar/park-hyatt-mendoza.html?aid=2820480",
              },
              {
                name: "Cavas Wine Lodge",
                type: "Luxury wine lodge · Lujan de Cuyo",
                price: "From $400/night",
                rating: "5",
                badge: "Most immersive",
                url: "https://www.booking.com/hotel/ar/cavas-wine-lodge.html?aid=2820480",
              },
              {
                name: "The Vines Resort &amp; Spa",
                type: "Ultra-luxury · Uco Valley vineyards",
                price: "From $500/night",
                rating: "5",
                badge: "Most exclusive",
                url: "https://www.booking.com/hotel/ar/the-vines-resort-and-spa.html?aid=2820480",
              },
              {
                name: "Hostel Lao",
                type: "Budget hostel · Central Mendoza",
                price: "From $12/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ar/hostel-lao-mendoza.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Bike &amp; Wine Tour Lujan de Cuyo",
                duration: "Full day",
                price: "From $40/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Mendoza+bike+wine+tour&partner_id=PSZA5UI",
              },
              {
                name: "Valle de Uco Premium Wine Tour",
                duration: "Full day",
                price: "From $60/person",
                badge: "Best wines",
                url: "https://www.getyourguide.com/s/?q=Mendoza+Valle+de+Uco+wine+tour&partner_id=PSZA5UI",
              },
              {
                name: "Aconcagua &amp; High Mountain Tour",
                duration: "Full day",
                price: "From $50/person",
                url: "https://www.getyourguide.com/s/?q=Mendoza+Aconcagua+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mendoza Food &amp; Wine Walking Tour",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=Mendoza+food+wine+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mendoza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍇",
                  title: "Visit during the March harvest (Vendimia)",
                  desc: "The Fiesta Nacional de la Vendimia in early March is Mendoza&apos;s greatest celebration — grape queens, folklore dancing, fireworks, and harvest tastings across the entire region. Hotel rates double so book 3–6 months ahead. The energy during vendimia is unlike anything else in Argentine wine country.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥩",
                  title: "Order your steak punto or jugoso",
                  desc: "Argentine beef is exceptional but loses its character when overcooked. Punto (medium) keeps the flavour; jugoso (medium-rare) is how most Argentines actually eat it. Bien cocido (well-done) is a travesty the parrillero will perform reluctantly. Mendoza beef is Angus-cross, dry-aged, and extraordinary.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚲",
                  title: "Book bike-and-wine tours 2 weeks ahead",
                  desc: "The organised bike tours to Lujan de Cuyo fill up weeks in advance during March harvest and October–November spring. Book through GetYourGuide or directly with Ampora Wine Tours. Self-guided cycling is possible but guided tours visit bodegas not open to walk-ins.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏨",
                  title: "Stay in Chacras de Coria for value",
                  desc: "Chacras de Coria is 15 minutes from central Mendoza by remise and feels like a Provencal wine village. Boutique hotels here are 30% cheaper than equivalent city-centre properties and put you walking distance from several bodegas. Small properties fill fast — book early.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌄",
                  title: "Time your Aconcagua trip for morning clarity",
                  desc: "The Andes above Mendoza are clearest in the morning before valley heat creates afternoon haze. Leave by 8am for the Horcones viewpoint. Afternoon drives often find Aconcagua hidden in cloud. Winter months (June–August) offer the clearest views with full snow cover.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💱",
                  title: "Check the exchange rate before converting",
                  desc: "Argentina&apos;s exchange rate situation has stabilised under 2025–2026 economic reforms, but always check the current official rate before converting significant sums. Use licensed cambios in Mendoza city centre for the best legal rates. Credit cards are widely accepted at hotels and restaurants.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mendoza" />

          {/* Combine With */}
          <CombineWith currentSlug="mendoza-argentina-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Mendoza to the bodegas without a car?",
                  a: "The best options are organised bike-and-wine tours ($40–60 USD, guided, all transport included), remise taxis ($20–40 for a Lujan de Cuyo round trip), or Bus 10 from central Mendoza to Lujan de Cuyo ($0.50, 40 minutes). Do not rent a car if you plan to taste wine — DUI enforcement is strict in Mendoza province. Remises are the safest and most flexible option for Valle de Uco day trips.",
                },
                {
                  q: "What is the best bodega to visit in Mendoza?",
                  a: "For architecture and prestige: Catena Zapata (Mayan-pyramid winery, Lujan de Cuyo). For pure wine quality: Zuccardi Valle de Uco (four-time Best Winery in World). For an intimate small-producer experience: Carmelo Patti (one winemaker, 15,000 bottles per year). For a great bike-tour stop: Bodega Ruca Malen (stunning views, visitor-friendly). For the full French wine-estate experience: Clos de los Siete (Valle de Uco, Michel Rolland project).",
                },
                {
                  q: "Can I combine Mendoza with Buenos Aires?",
                  a: "Mendoza to Buenos Aires is a 1 hour 45 minute Aerolineas Argentinas or LATAM flight ($50–100 USD), or an overnight bus (14–15 hours, $25–45 in fully reclining cama seats). A classic Argentina itinerary pairs 4 nights in Mendoza wine country with 3–4 nights in Buenos Aires for tango, architecture, and the extraordinary steak restaurant scene. Fly to Mendoza first and bus back overnight to save time.",
                },
                {
                  q: "Is Mendoza worth visiting without drinking wine?",
                  a: "Absolutely. Mendoza has the Aconcagua mountain region for trekking, the thermal spa town of Cacheuta (60km away), excellent olive oil and gourmet food tourism, gaucho culture on the estancias, rafting and kayaking on the Mendoza River, and the Villavicencio Natural Reserve for pre-Andean landscapes. The city itself is elegant with tree-lined boulevards and superb restaurants. Wine is the headline but not the only reason to come.",
                },
                {
                  q: "What should I pack for Mendoza?",
                  a: "Layers are essential — Mendoza has a desert climate with hot days and cool nights. Bring sunscreen (SPF 50 — altitude UV is intense), a light jacket for evenings, comfortable walking shoes for vineyard tours, and a small backpack for bike tours. In harvest season (March–May) mornings can be cool (10°C) while afternoons reach 28°C. A hat and reusable water bottle are essential for winery visits.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mendoza trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/mendoza-argentina-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mendoza-argentina-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/mendoza-argentina-4-days/packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/buenos-aires-4-days", label: "Buenos Aires guide", icon: "✈️" },
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
          <RelatedGuides currentSlug="mendoza-argentina-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Santiago Chile in 4 Days", href: "/blog/santiago-chile-4-days" },
                { label: "Lima in 4 Days — Food Capital", href: "/blog/lima-4-days" },
                { label: "Buenos Aires in 4 Days", href: "/blog/buenos-aires-4-days" },
                { label: "Patagonia in 7 Days", href: "/blog/patagonia-7-days" },
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
