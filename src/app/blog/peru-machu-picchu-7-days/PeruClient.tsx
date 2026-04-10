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
const PERU_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Peru Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Peru 7-Day Machu Picchu Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Peru in 7 Days — Machu Picchu, Cusco, Sacred Valley and Lima's world-class food&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/peru-machu-picchu-7-days"
        imageUrl="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80"
        description="Peru in 7 Days: Machu Picchu, Cusco's Inca ruins, Sacred Valley markets, Rainbow Mountain, and Lima's world-class ceviche — complete travel guide with budget breakdown in PEN and USD."
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
export default function PeruClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PERU_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Peru" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="machu picchu peru inca ruins mountains llama dawn mist"
            fallback="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&q=80"
            alt="Machu Picchu ancient Inca citadel with llama and Andes mountains at dawn in Peru"
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
              <span className="text-white/70">Peru Machu Picchu 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Inca Trail &amp; Andes
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Peru in 7 Days:
                <em className="italic text-amber-300"> Machu Picchu, Cusco &amp; the Sacred Valley</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Machu Picchu at dawn, Cusco&apos;s Inca stonework, Sacred Valley markets, Rainbow Mountain&apos;s painted ridges, and Lima&apos;s world-class ceviche scene. The complete guide with real costs in PEN &amp; USD, altitude sickness protocol, and the booking mistakes that ruin most Peru trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇵🇪 Peru</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Machu Picchu at 6am before the tour buses arrive is one of the great travel moments on earth &mdash; mist lifting from the stone terraces, a llama grazing on a five-hundred-year-old plaza, and the Andes rising behind it all in dead silence. By 11am it&apos;s 2,500 people sharing the same space. This guide tells you exactly how to get the 6am version.
            </p>
          </blockquote>

          {/* ── WHAT PERU ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Peru Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Peru is a country of extreme altitude, extraordinary archaeology, and one of the most celebrated food cultures on the planet. The headline is Machu Picchu, but the reality is far broader: Lima is consistently ranked among the world&apos;s top five food cities, Cusco sits on foundations of Inca stonework so precise that you cannot fit a razor blade between the blocks, and the Sacred Valley contains living Quechua-speaking communities farming terraces built five centuries ago.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The altitude is the defining practical challenge. Cusco at 3,400 metres above sea level will give you a headache within hours of landing. This is not optional or avoidable &mdash; it is physics. The protocol matters: rest on arrival, drink coca tea constantly, avoid alcohol for the first 48 hours, and take Diamox if your doctor prescribes it. Respect the altitude and the trip is extraordinary. Ignore it and you spend Day 2 in a hospital bed.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Seven days gives you Lima&apos;s food scene, Cusco&apos;s colonial grandeur and Inca ruins, the Sacred Valley&apos;s markets and fortresses, Machu Picchu itself, and a choice between Rainbow Mountain and Lake Titicaca. It is tight but it works &mdash; and every day delivers something genuinely extraordinary.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="LIM (Jorge Chavez)" />
              <StatCard icon="🌡️" label="Best Season" value="May-Sep" />
              <StatCard icon="🏔️" label="Altitude" value="3,400m (Cusco)" />
              <StatCard icon="💰" label="Budget From" value="$45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Peru</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May-Jun",
                  i: "☀️",
                  t: "Early Dry Season — Best Overall",
                  d: "Clear skies, moderate temperatures (15-20C in Cusco), green landscapes from recent rains. Machu Picchu views are unobscured most days. Tourist numbers are lower than July-August and prices are 20-30% cheaper. The optimal window for the Inca Trail and all highland treks.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul-Aug",
                  i: "🌅",
                  t: "Peak Dry Season — Busiest",
                  d: "The driest months with virtually no rain in the highlands. Machu Picchu, Cusco, and Sacred Valley are at peak capacity. Accommodation prices increase 40-60%, Inca Trail permits sell out 6+ months ahead. Coldest nighttime temperatures in the Andes (can drop below 0C at altitude). Book everything far in advance.",
                  b: "Best weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep-Oct",
                  i: "🌤️",
                  t: "Shoulder Season — Excellent Value",
                  d: "Still largely dry with occasional afternoon showers beginning in October. Tourist numbers drop significantly after August. Prices return to shoulder-season levels. The landscapes begin greening from early rains. September is arguably the single best month to visit Peru — dry weather, reasonable prices, manageable crowds.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov-Mar",
                  i: "🌧️",
                  t: "Wet Season — Cheapest",
                  d: "Heavy daily rain in Cusco and the highlands, usually in intense afternoon bursts. Machu Picchu is frequently shrouded in cloud. The Inca Trail closes entirely in February for maintenance. Prices drop 30-50% and crowds thin dramatically. Mornings are often clear. The Amazon basin is at its most lush and accessible.",
                  b: "Budget travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Peru</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Lima Jorge Chavez International Airport (LIM) is Peru&apos;s only major international gateway. All Machu Picchu trips begin here. <strong className="font-medium">Indian passport holders enter Peru visa-free for 90 days.</strong> Most Western passports also get 90 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights from India to Lima. Best routing: Delhi/Mumbai to Lima via a single connection in Europe (Madrid on LATAM/Iberia, Amsterdam on KLM, Frankfurt on Lufthansa) or the Middle East (Dubai on Emirates, Doha on Qatar Airways). Total travel time: 22-28 hours. Fares: INR 55,000-95,000 return if booked 2-3 months ahead. The Madrid route on LATAM is typically the fastest single-connection option at roughly 22 hours total.",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Lima to Cusco (Internal Flight)",
                  d: "LATAM, Sky Airlines, and JetSmart operate multiple daily flights Lima to Cusco in 1.5 hours. Fares: S/180-650 ($50-180) depending on advance booking. Book morning flights when possible — afternoon Cusco flights face frequent weather delays. Cusco's Alejandro Velasco Astete Airport is 15 minutes from the city centre by taxi (S/15-25, ~$4-7).",
                  b: "1.5h flight",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🏔️",
                  t: "Altitude Acclimatisation Protocol",
                  d: "Cusco sits at 3,400m. Altitude sickness (soroche) affects most visitors within hours of arrival: headache, breathlessness, fatigue, nausea. Protocol: rest Day 1, drink coca tea constantly (provided free at every hotel), avoid alcohol for 48 hours, drink 2-3 litres of water daily, take Diamox (acetazolamide) if prescribed by your doctor starting 2 days before arrival. If symptoms worsen after 12 hours, descend to Sacred Valley (2,800m) for immediate relief.",
                  b: "Critical",
                  c: "bg-red-50 border-red-200",
                },
                {
                  i: "🚂",
                  t: "Getting to Machu Picchu",
                  d: "There is no road to Machu Picchu. Access is by train from Ollantaytambo or Poroy station to Aguas Calientes (PeruRail or Inca Rail, 1.5-3.5 hours, S/160-1,800 / $45-500 depending on class). From Aguas Calientes, a 25-minute bus ride (S/85 / $24 return) takes you up to the citadel gates. Alternative: the 4-day Inca Trail trek or 5-day Salkantay Trek arrive on foot.",
                  b: "Train or trek only",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Peru Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers a mid-range budget ($120-220/day). Each day card is expandable. The route runs Lima (1 night) &rarr; Cusco (2 nights) &rarr; Sacred Valley &amp; Ollantaytambo (1 night) &rarr; Machu Picchu (1 night) &rarr; Rainbow Mountain day trip &rarr; Lima departure. All costs in Peruvian Soles (PEN / S/) and USD at approximately S/3.60 = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Lima — Miraflores, Barranco & Ceviche"
                cost="S/150-350 (~$42-97)"
                items={[
                  "Arrive Lima Jorge Chavez Airport. Take a pre-paid taxi from the official desk inside the terminal to Miraflores (S/55-70 / $15-20). Never accept offers from touts outside the terminal doors — overcharging and safety risks are well documented.",
                  "Check into Miraflores accommodation. Budget: hostels at S/40-70/night ($11-20). Mid-range: boutique hotels at S/250-500/night ($70-140). Walk the Malecon cliff-top boardwalk — 8km of Pacific Ocean views, paragliders launching from the cliffs, entirely free.",
                  "Afternoon: Huaca Pucllana, a pre-Inca adobe pyramid sitting in the middle of Miraflores suburb. Entry S/16 (~$4.50). Guided tours only. A 1,500-year-old ruin surrounded by apartment blocks — genuinely surreal.",
                  "Walk to Barranco, Lima's bohemian art district (30 minutes south or S/10 Uber). The Bridge of Sighs, colonial mansions turned into galleries, street art on every wall, and dozens of ceviche restaurants.",
                  "Dinner: La Canta Rana in Barranco — the best budget ceviche in Lima. A plate of classic ceviche with leche de tigre, choclo, and sweet potato: S/30-45 ($8-12). Lima is the world's gastronomic capital — do not skip this meal.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Fly to Cusco — Acclimatise, Don't Rush"
                cost="S/220-450 (~$60-125) incl. flight"
                items={[
                  "Morning flight Lima to Cusco (1.5 hours, S/180-330 / $50-90 on LATAM, Sky, or JetSmart). Cusco sits at 3,400m above sea level. The altitude hits immediately: mild headache, breathlessness, fatigue. This is normal soroche.",
                  "Critical Day 2 Rule: do NOT try to do everything today. Your single job is to acclimatise. Drink coca tea (free at every hotel), avoid alcohol, eat lightly, drink 2-3 litres of water, and move slowly.",
                  "Check into San Blas neighbourhood accommodation. Budget: Loki Hostel Cusco (S/45-80/night, $12-22). Mid-range: Palacio del Inka (S/650-1,250/night, $180-350). Both within 5 minutes of Plaza de Armas.",
                  "Afternoon slow walk only: Plaza de Armas — Cusco's main square flanked by Spanish colonial arcades built directly on Inca foundations. The stonework at the base of the cathedral walls is original Inca masonry.",
                  "San Blas neighbourhood: narrow cobblestone lanes, whitewashed walls, artisan workshops, and the famous woodcarvers. Free to wander.",
                  "Early dinner at Pachapapa in San Blas — colonial courtyard, traditional Peruvian food, alpaca steak with quinoa risotto: S/45-65 ($12-18). Back to the hotel by 9pm. Sleep is the best altitude medicine.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Cusco — Inca Sites & San Pedro Market"
                cost="S/130-250 (~$36-70)"
                items={[
                  "Morning: Cusco Cathedral on Plaza de Armas — S/55 ($15) entry. Houses one of South America's finest collections of colonial religious art, including the famous painting of the Last Supper with guinea pig on the table.",
                  "Qorikancha (Coricancha) sun temple — the holiest Inca site in Cusco, once entirely plated in gold sheets. The Spanish built the Santo Domingo convent directly on top of the Inca walls. Entry S/18 (~$5).",
                  "San Pedro Market (Mercado Central) — one block from Plaza de Armas. Free entry. Fresh fruit juices (chicha morada, S/2 / $0.50), alpaca wool goods (hats S/18-36 / $5-10), quinoa, coca leaves, local snacks.",
                  "Afternoon: Sacsayhuaman fortress — 15-minute walk uphill from Plaza de Armas. Massive Inca military fortress built from stones weighing up to 300 tonnes. Entry requires Boleto Turistico (S/110 / $30, covers 10+ sites).",
                  "Sunset from Sacsayhuaman with the entire city of Cusco spread below — one of the great travel views in South America. Llamas wander the ruins as the light fades.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sacred Valley — Pisac, Ollantaytambo & Chinchero"
                cost="S/110-200 (~$30-55)"
                items={[
                  "Take a colectivo (shared minibus) from Cusco to Pisac (S/5 / $1.50, 1.5h). The Sacred Valley route is spectacular: descent from 3,400m to 2,800m, green valley floor, snow-capped peaks on both sides.",
                  "Pisac ruins — Inca terraces cascading up the mountain. Most visitors skip the ruins for the market — the ruins are better. Entry with Boleto Turistico. The agricultural terraces were engineered to create microclimates for different crops at different altitudes.",
                  "Pisac market (best on Tuesday, Thursday, Sunday) — 200 stalls of weavings, ceramics, silver jewellery. Prices start 50% higher than they should — bargain patiently. Budget S/36-72 ($10-20) for gifts.",
                  "Colectivo to Ollantaytambo (S/7 / $2, 1.5h). The most dramatic Inca fortress in the Sacred Valley: enormous pink granite terraces rising vertically. Entry with Boleto Turistico. The modern village is built on an original Inca street grid.",
                  "Overnight in Ollantaytambo (S/55-90 / $15-25 budget hostel). You are now 1.5h from Aguas Calientes by PeruRail — tomorrow's departure point for Machu Picchu.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Machu Picchu — The Citadel"
                cost="S/330-500 (~$90-140) incl. train + entry + bus"
                items={[
                  "Train from Ollantaytambo to Aguas Calientes (PeruRail Expedition, S/160-230 / $45-65 one-way, book months in advance at perurail.com). The 1.5-hour journey through cloud forest is beautiful — waterfalls, orchids, the Urubamba River below.",
                  "Bus from Aguas Calientes up to Machu Picchu (S/85 / $24 return — buy the combo ticket at the bus station the night before). First bus departs 5:30am. Take the first bus to catch the citadel before the crowd arrives at 10am.",
                  "Machu Picchu entry ticket (S/180-215 / $50-60 per person — MUST be booked in advance at machupicchu.gob.pe, ideally 3-4 months ahead for peak season). Tickets are time-slotted with entry circuits. Circuit 1 or 2 gives the best overview.",
                  "Key viewpoints: the Guardian's Hut (15-minute climb, the classic postcard photograph), the Intihuatana stone (Inca solar calendar aligned to the equinoxes), the Temple of the Sun, and the agricultural terraces.",
                  "Sun Gate hike (Inti Punku): 3-hour return, free with your entry ticket. The same view that Inca Trail trekkers see after 4 days of hiking. Worth the effort for the completely different perspective from above.",
                  "Afternoon: descend to Aguas Calientes for lunch and a soak in the thermal baths (S/18 / $5). Evening train back to Cusco or overnight in Aguas Calientes.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Rainbow Mountain (Vinicunca) Day Trip"
                cost="S/180-360 (~$50-100)"
                items={[
                  "Pre-dawn departure from Cusco (3am pickup by tour operator). Rainbow Mountain (Vinicunca) is 100km southeast of Cusco, a 3-hour drive to the trailhead at 4,300m. Organised tours cost S/90-215 ($25-60) including transport, guide, and breakfast/lunch.",
                  "The hike: 5km each way from the trailhead (4,300m) to the viewpoint (5,036m). Moderate difficulty but extreme altitude — this is one of the highest points most travellers will ever reach. Take it slowly. The entire hike takes 3-4 hours return.",
                  "The striped mineral deposits creating red, yellow, green, and turquoise bands across the mountain face are genuinely extraordinary. The colours are most vivid on clear mornings between 8-10am. If cloud covers the summit, the colours are muted.",
                  "Alternative if weather or fitness prevents Rainbow Mountain: the Red Valley (Valle Rojo) viewpoint is 30 minutes past Rainbow Mountain with fewer crowds and similarly vivid colours.",
                  "Return to Cusco by 3-4pm. Final afternoon in San Blas for shopping: alpaca knitwear from artisan workshops (the real deal vs. market stalls), pisco from La Vina del Pisco on Plaza de Armas, highland coffee from Cusco Coffee Company.",
                  "Farewell Cusco dinner: MAP Cafe inside the Museo de Arte Precolombino — modern Andean cuisine in a glass-roofed colonial courtyard. S/90-180 ($25-50) per person.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Return Lima — Final Ceviche & Departure"
                cost="S/180-400 (~$50-110) incl. flight"
                items={[
                  "Morning flight Cusco to Lima (1.5h, S/180-430 / $50-120). If your international flight departs in the evening, you have Lima afternoon time.",
                  "Final lunch: La Mar in Miraflores (reservations essential) — what many food critics call the best ceviche in the world. Classic Peruvian ceviche with leche de tigre: S/90-145 ($25-40) per person. Or La Canta Rana in Barranco for the budget version.",
                  "Walk the Miraflores Malecon one final time — the Pacific, the paragliders, the city grid spreading inland. Lima is dramatically underrated as a city.",
                  "Airport: pre-paid taxi from Miraflores (S/55-70 / $15-20). Jorge Chavez airport has a solid food court — try one last anticucho (grilled beef heart skewer, S/10 / $3) at a market stand inside.",
                  "Departure. You have eaten the world's best ceviche, walked on five-century-old Inca stones, climbed to 5,036 metres, and stood on a citadel that the Spanish searched for but never found. Buen viaje.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Peru" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important archaeological and cultural sites in priority order. The Boleto Turistico (S/110 / $30) covers 10+ Cusco and Sacred Valley sites — buy it at any covered site or the official office on Calle Garcilazo in Cusco.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Machu Picchu",
                  e: "S/180-215 (~$50-60)",
                  d: "The 15th-century Inca citadel set at 2,430m in the Andes — UNESCO World Heritage Site and one of the New Seven Wonders. Must be booked months in advance at machupicchu.gob.pe. Time-slotted entry with defined circuits. The Guardian's Hut offers the iconic postcard view. First bus at 5:30am from Aguas Calientes is essential for the uncrowded experience.",
                  t: "Must see · Full day",
                },
                {
                  n: "Sacsayhuaman (Cusco)",
                  e: "Boleto Turistico (S/110)",
                  d: "Massive Inca fortress above Cusco built from stones weighing up to 300 tonnes, fitted without mortar so precisely that a razor blade cannot pass between them. The site of the 1536 Siege of Cusco when Manco Inca retook the fortress from the Spanish. Sunset here with the city spread below is unforgettable.",
                  t: "Must see · Sunset · 2 hrs",
                },
                {
                  n: "Qorikancha — Temple of the Sun (Cusco)",
                  e: "S/18 (~$5)",
                  d: "The holiest site in the Inca Empire, once covered in gold plates that caught the equinox sunrise. The Spanish melted the gold and built the Santo Domingo convent directly on top — the contrast between perfectly fitted Inca stonework and cruder Spanish construction is striking. A guide transforms this visit.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Ollantaytambo (Sacred Valley)",
                  e: "Boleto Turistico",
                  d: "The most dramatic Inca fortress in the Sacred Valley: enormous pink granite terraces rising vertically up a cliff face with the unfinished Temple of the Sun at the summit. The modern village below is built on an original Inca street grid — one of the oldest continuously inhabited Inca settlements in Peru.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Rainbow Mountain (Vinicunca)",
                  e: "S/90-215 (~$25-60) tour",
                  d: "Striped mineral deposits at 5,036m creating vivid red, yellow, green, and turquoise bands across the mountain face. A 5km hike from the trailhead at extreme altitude. Best on clear mornings. The Red Valley viewpoint 30 minutes beyond is equally vivid with fewer people.",
                  t: "Day trip · Strenuous",
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
            title="Peru — Inca Citadels, Andes &amp; Sacred Valleys"
            subtitle="From Machu Picchu's stone terraces to Rainbow Mountain's painted ridges and Lima's Pacific coastline."
            spots={[
              {
                name: "Machu Picchu at Dawn",
                query: "machu picchu dawn mist inca citadel andes peru llama",
                desc: "The 15th-century Inca citadel emerging from mountain mist at 6am — the defining image of South American travel.",
              },
              {
                name: "Rainbow Mountain (Vinicunca)",
                query: "rainbow mountain vinicunca peru striped colorful andes",
                desc: "Mineral deposits at 5,036m creating vivid stripes of red, yellow, green, and turquoise across the mountain face.",
              },
              {
                name: "Cusco Plaza de Armas",
                query: "cusco plaza de armas cathedral colonial architecture peru night",
                desc: "Spanish colonial grandeur built on Inca foundations — the heart of the ancient Inca capital at golden hour.",
              },
              {
                name: "Sacred Valley Terraces",
                query: "sacred valley ollantaytambo inca terraces peru mountains green",
                desc: "Inca agricultural terraces engineered to create microclimates at different altitudes, still farmed today.",
              },
              {
                name: "Lima Miraflores Coastline",
                query: "lima miraflores malecon pacific ocean cliffs sunset peru",
                desc: "The Malecon cliff-top boardwalk overlooking the Pacific — 8km of ocean views and paragliders launching at sunset.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Peru offers excellent value at every budget level. All prices in Peruvian Soles (PEN / S/) and USD at approximately S/3.60 = $1 USD. The biggest single costs are Machu Picchu entry, train tickets, and internal flights.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (7 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (7N)", "S/315-630 ($88-175)", "S/1,750-4,200 ($490-1,170)", "S/7,000-25,000 ($1,950-6,950)"],
                    ["🍽 Food & Drinks", "S/200-380 ($56-105)", "S/630-1,260 ($175-350)", "S/1,800-5,400 ($500-1,500)"],
                    ["✈️ Flights (Lima-Cusco RT)", "S/360-650 ($100-180)", "S/360-650 ($100-180)", "S/650-5,400 ($180-1,500)"],
                    ["🚂 Machu Picchu (train+bus+entry)", "S/500-720 ($140-200)", "S/650-1,080 ($180-300)", "S/2,700-7,200 ($750-2,000)"],
                    ["🎯 Activities & Sites", "S/200-360 ($56-100)", "S/540-1,080 ($150-300)", "S/1,440-3,600 ($400-1,000)"],
                    ["TOTAL (per person)", "S/1,575-2,740 ($440-760)", "S/3,930-8,270 ($1,095-2,300)", "S/13,590-46,600 ($3,780-12,950)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($45-75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and guesthouses (S/40-90/night), eat at markets and local restaurants (S/10-25/meal), colectivos between cities, and the Expedition class PeruRail train. Machu Picchu entry is the largest single cost at any budget level.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range ($120-220/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique 3-4 star hotels (S/250-600/night), a mix of market meals and restaurant dining, private guides at key sites, and the Vistadome train with panoramic windows. The sweet spot for comfort and cultural depth.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($400-1,500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star heritage hotels, private archaeologist guides, the Belmond Hiram Bingham train, Sanctuary Lodge at the Machu Picchu gates, and Central restaurant in Lima. Peru's luxury tier rivals anywhere on earth at a fraction of the European price.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Peru</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              You will sleep in four different locations on this itinerary: Lima (Miraflores), Cusco (San Blas), Sacred Valley (Ollantaytambo), and Aguas Calientes. Each has a distinct character and price range.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "JW Marriott Lima (Miraflores)",
                  type: "Luxury hotel · Lima",
                  price: "From S/720/night (~$200)",
                  badge: "Lima pick",
                  desc: "Pacific Ocean views, rooftop pool, and walking distance to the Malecon and Larcomar. The ideal Lima base for a single night before flying to Cusco. The breakfast buffet alone justifies the stay — Peruvian tropical fruits, fresh ceviche station, and tamales.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Loki Hostel Cusco (San Blas)",
                  type: "Budget hostel · Cusco",
                  price: "From S/45/night (~$12)",
                  badge: "Best budget",
                  desc: "The best-located budget hostel in Cusco, 5 minutes from Plaza de Armas in the San Blas artisan quarter. Clean dorms, good lockers, social atmosphere, and free coca tea on arrival. The rooftop terrace has views over Cusco's terracotta rooftops.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Tambo del Inka (Sacred Valley)",
                  type: "Luxury lodge · Urubamba",
                  price: "From S/900/night (~$250)",
                  badge: "Sacred Valley pick",
                  desc: "Luxury lodge directly on the PeruRail line in Urubamba with an infinity pool overlooking the valley. The most convenient luxury base for Machu Picchu — board the train from the hotel's private platform. Altitude-acclimatisation amenities in every room.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Supertramp Hostel (Aguas Calientes)",
                  type: "Budget hostel · Aguas Calientes",
                  price: "From S/55/night (~$15)",
                  badge: "Budget MP base",
                  desc: "Clean, well-run hostel in Aguas Calientes with mountain views and a 5-minute walk to the Machu Picchu bus station. The early wake-up call service ensures you make the 5:30am first bus. Hot showers and good wi-fi — essentials after a day at the citadel.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Peru</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lima is consistently ranked alongside Tokyo and Copenhagen as one of the world&apos;s great food cities. The ceviche alone justifies the trip. In Cusco, avoid the Plaza de Armas tourist restaurants — walk two streets to San Blas or San Pedro Market for genuinely excellent food at honest prices.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ceviche at La Canta Rana",
                  t: "Traditional cevicheria · Barranco, Lima",
                  d: "The best budget ceviche in Lima. Fresh fish marinated in leche de tigre (tiger's milk — lime, aji amarillo, ginger, and the juices from the marinating fish), served with choclo (giant corn) and sweet potato. S/30-45 ($8-12) for a plate. Pair with a Cristal beer (S/7 / $2). The Peruvian leche de tigre is genuinely one of the world's great flavour combinations.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lomo Saltado (everywhere)",
                  t: "Peruvian-Chinese stir-fry · National dish",
                  d: "Peru's most popular everyday dish: strips of beef stir-fried with onions, tomatoes, aji amarillo peppers, soy sauce, and vinegar, served over rice and french fries simultaneously. The Chinese-Peruvian fusion (chifa) is a core part of Peruvian identity. Available at every market and restaurant for S/15-30 ($4-8). The San Pedro Market in Cusco does an excellent version for S/12.",
                  b: "Everyday essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Anticuchos at street stalls",
                  t: "Grilled beef heart skewers · Street food",
                  d: "Marinated beef heart grilled over charcoal on street corners across Lima and Cusco. Sounds intimidating, tastes extraordinary — tender, smoky, and deeply flavourful. S/5-10 ($1.50-3) for 2-3 skewers with boiled potato and aji sauce. The best anticucheras operate from 6pm on street corners — look for the longest queue.",
                  b: "Street food classic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Cicciolina (Cusco)",
                  t: "Peruvian-Mediterranean tapas · San Blas, Cusco",
                  d: "A long-running favourite on Calle Triunfo in Cusco's historic centre. Sharing plates and tapas format with Peruvian-Mediterranean fusion. Alpaca carpaccio, quinoa risotto, aji de gallina croquettes. S/55-90 ($15-25) per person. The wine list features excellent Peruvian wines from the Ica Valley. Book ahead in peak season.",
                  b: "Best mid-range Cusco",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "San Pedro Market food stalls",
                  t: "Market dining · Cusco",
                  d: "The food stalls inside San Pedro Market serve the best budget meals in Cusco. A menu del dia (soup + main + drink) costs S/8-15 ($2-4). Try quinoa soup followed by trucha (Sacred Valley river trout) or lomo saltado. Fresh juices (chicha morada, passion fruit, lucuma) for S/3-5. This is where Cusco locals eat.",
                  b: "Best budget Cusco",
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
            destination="Peru"
            hotels={[
              {
                name: "Loki Hostel Cusco",
                type: "Budget Hostel · San Blas, Cusco",
                price: "From S/45/night (~$12)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/pe/loki-cusco.html?aid=2820480",
              },
              {
                name: "Palacio del Inka, Luxury Collection",
                type: "Heritage Hotel · Cusco",
                price: "From S/650/night (~$180)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/pe/palacio-del-inka.html?aid=2820480",
              },
              {
                name: "Tambo del Inka, Luxury Collection",
                type: "Luxury Lodge · Sacred Valley",
                price: "From S/900/night (~$250)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/pe/tambo-del-inka.html?aid=2820480",
              },
              {
                name: "JW Marriott Lima",
                type: "Luxury Hotel · Miraflores, Lima",
                price: "From S/720/night (~$200)",
                rating: "5",
                badge: "Lima pick",
                url: "https://www.booking.com/hotel/pe/jw-marriott-lima.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Machu Picchu Full-Day Tour from Cusco",
                duration: "Full day",
                price: "From S/540/person (~$150)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=machu+picchu+full+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Rainbow Mountain (Vinicunca) Day Trek",
                duration: "Full day",
                price: "From S/90/person (~$25)",
                badge: "Adventure",
                url: "https://www.getyourguide.com/s/?q=rainbow+mountain+vinicunca+peru&partner_id=PSZA5UI",
              },
              {
                name: "Sacred Valley Full-Day Tour",
                duration: "Full day",
                price: "From S/110/person (~$30)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=sacred+valley+cusco+full+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lima Food & Ceviche Walking Tour",
                duration: "4 hours",
                price: "From S/180/person (~$50)",
                url: "https://www.getyourguide.com/s/?q=lima+food+tour+ceviche&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎟️",
                  title: "Not booking Machu Picchu tickets months in advance",
                  desc: "The single most common catastrophic mistake. Tickets sell out 3-6 months ahead for peak season (June-August). They must be purchased at machupicchu.gob.pe and are date-and-time specific. You cannot buy them at the gate or in Cusco. People fly to Peru and cannot enter because they assumed they could sort it on arrival. Book the day you start planning.",
                },
                {
                  icon: "🏔️",
                  title: "Ignoring altitude sickness in Cusco",
                  desc: "Cusco at 3,400m is not optional altitude. Every year tourists are hospitalised because they pushed through symptoms (severe headache, vomiting, confusion). Protocol: arrive Lima first, fly to Cusco, rest 24-48h, no alcohol, no exercise, drink coca tea constantly, take Diamox if prescribed. If symptoms worsen over 12h, descend to Sacred Valley (2,800m) immediately.",
                },
                {
                  icon: "🍽️",
                  title: "Eating at Plaza de Armas tourist restaurants in Cusco",
                  desc: "The restaurants directly on Cusco's Plaza de Armas charge 3-5x what you pay two streets away for measurably worse food. Waiters grab your arm, menus have photographs, the ceviche is not fresh. Walk to San Blas, Calle Triunfo, or San Pedro Market area. The best Cusco restaurants — Cicciolina, MAP Cafe, Pachapapa — are none of them on the Plaza.",
                },
                {
                  icon: "🏞️",
                  title: "Skipping the Sacred Valley to save time",
                  desc: "The Sacred Valley is not a lesser Machu Picchu — it is a completely different experience: living markets, working Inca terraces, villages where Quechua is still the primary language. It also has the practical benefit of sleeping at 2,800m rather than 3,400m, which makes altitude acclimatisation significantly easier.",
                },
                {
                  icon: "🧳",
                  title: "Visiting June-August without booking 3+ months ahead",
                  desc: "Peru's dry season is peak travel season globally. Aguas Calientes has limited accommodation and sells out completely in July. Cusco 3-star hotels are booked by March for August stays. Treat accommodation booking with the same urgency as Machu Picchu tickets — book the moment you have your dates.",
                },
                {
                  icon: "💊",
                  title: "Not carrying Diamox or altitude medication",
                  desc: "Diamox (acetazolamide) requires a prescription from your doctor at home. Get it before you travel — it is not reliably available in Peru. Start taking it 2 days before arriving in Cusco. The difference between a medicated and unmedicated first day at 3,400m is the difference between mild discomfort and genuine misery.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Peru</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Buy the Boleto Turistico immediately",
                  desc: "The Boleto Turistico (S/110 / $30 for 10+ sites) covers Sacsayhuaman, Qenqo, Pisac ruins, Ollantaytambo, Moray, and more. Individual tickets are S/55-110 each. Visit 3+ sites and the pass pays for itself at the first one. Buy it at any covered site or on Calle Garcilazo in Cusco.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Take the 5:30am first bus to Machu Picchu",
                  desc: "The first bus from Aguas Calientes departs at 5:30am (buy return tickets the evening before at the bus station, S/85 / $24). Being at the citadel gate at 6am means roughly 2 hours before the mass tour groups arrive. The mist, the silence, the llamas — this is the experience. By 11am, 2,500 visitors share the same space.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍃",
                  title: "Start coca tea the moment you land in Cusco",
                  desc: "Every hotel provides free coca tea. Drink it constantly. Coca leaves contain alkaloids that assist with altitude acclimatisation — entirely legal in Peru, used by Andean communities for millennia. Chew dried coca leaves (S/3-4 at any Cusco market) for a stronger effect. Genuinely reduces headache and breathlessness.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎨",
                  title: "San Blas artisan workshops are the real deal",
                  desc: "San Blas is Cusco's historic artisan quarter — woodcarvers, silversmiths, weavers, and ceramicists whose families have worked these lanes for generations. Workshops open to the street during working hours. Quality is significantly higher and prices lower than Plaza de Armas market stalls. Commission bespoke pieces to ship home.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍽️",
                  title: "Lima ceviche is world-class — don't skip it",
                  desc: "Even on a 7-day trip focused on Machu Picchu, the Lima food experience justifies the overnight. La Canta Rana for budget (S/30-45), La Mar for mid-range (S/90-145), Central for the full Virgilio Martinez experience (S/540-720 tasting menu). The ceviche is genuinely different from every other country's version.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💱",
                  title: "Withdraw Soles from GlobalNet ATMs",
                  desc: "GlobalNet ATMs at Lima airport and throughout Cusco offer the best exchange rates and lowest fees for international cards. Withdraw Soles, not dollars. Cards are accepted at hotels and upscale restaurants but markets, colectivos, and small restaurants are cash-only. Carry S/200-300 in small notes.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Peru" />

          {/* Combine With */}
          <CombineWith currentSlug="peru-machu-picchu-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Peru?",
                  a: "No. As of 2024, Indian passport holders can enter Peru visa-free for up to 90 days for tourism. Present your passport at Lima airport, show a return or onward ticket, and receive your entry stamp. No pre-approval, no embassy visit, no fee. Verify current rules on the Peruvian Embassy website before travel, as visa policies can change.",
                },
                {
                  q: "How do I prevent altitude sickness in Cusco?",
                  a: "Fly Lima to Cusco (do not overland — it is no safer and takes 25+ hours). Take Diamox (acetazolamide, 125-250mg twice daily) starting 2 days before arrival — requires a doctor's prescription. Rest Day 1-2, no exercise, no alcohol. Drink 2-3 litres of water daily. Drink coca tea constantly. If symptoms worsen over 12 hours, descend to Sacred Valley (2,800m) for immediate relief.",
                },
                {
                  q: "How do I book Machu Picchu tickets?",
                  a: "Book at machupicchu.gob.pe (the official government portal). Tickets are allocated by date and entry circuit — Circuit 1 or 2 gives the classic overview. Daily capacity is capped at approximately 2,500 visitors. For June-August, book 3-4 months ahead. Huayna Picchu (400 tickets/day) and Machu Picchu Mountain (800 tickets/day) are separate add-ons on the same portal.",
                },
                {
                  q: "What is the best time to visit Machu Picchu?",
                  a: "Dry season: May to September. June-August are peak season (most expensive, most crowded). May and September offer dry weather with 20-30% fewer tourists and lower prices. The Inca Trail closes entirely in February for maintenance. April is transitional with mostly dry weather and excellent value.",
                },
                {
                  q: "How do I get from Lima to Cusco?",
                  a: "Fly. LATAM, Sky Airlines, and JetSmart operate multiple daily flights in 1.5 hours. Prices range from S/180 ($50) on advance booking to S/720 ($200) day-of. The overland bus route takes 25+ hours and is recommended only for very budget-conscious travellers with abundant time. Book morning flights — afternoon Cusco flights face frequent weather delays.",
                },
                {
                  q: "Is Peru safe for tourists?",
                  a: "Generally safe with normal precautions. Main risks are petty theft (bag snatching, pickpocketing) in Lima's historic centre and around Cusco's Plaza de Armas. Miraflores and Barranco in Lima are very safe. Use registered taxis or ride apps (InDriver works well). The tourist police (Policia de Turismo) are present in Cusco and Aguas Calientes. The Machu Picchu trail and Sacred Valley are very safe.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Peru trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-peru", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/peru-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-peru", label: "How to get there", icon: "✈️" },
                { href: "/blog/peru-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="peru-machu-picchu-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America &amp; Adventure Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kenya Safari &mdash; 7 Day Guide", href: "/blog/kenya-safari-7-days" },
                { label: "Morocco &mdash; 7 Day Itinerary", href: "/blog/morocco-7-days" },
                { label: "Istanbul &mdash; 5 Day Guide", href: "/blog/istanbul-5-days" },
                { label: "Bali &mdash; 5 Day Guide", href: "/blog/bali-5-days" },
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
