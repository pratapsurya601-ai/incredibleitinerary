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
const COLOMBIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Colombia Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "7-Day Itinerary" },
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
          href: `mailto:?subject=Colombia 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Colombia in 7 Days — Bogotá, Medellín, Cartagena&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/colombia-7-days"
        imageUrl="https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80"
        description="Colombia in 7 Days: Bogotá Gold Museum, Medellín cable car comunas, Cartagena walled city — complete travel guide with real COP costs, safety tips, and visa info."
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
export default function ColombiaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COLOMBIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Colombia" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cartagena colombia colonial old city walls caribbean sea"
            fallback="https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1600&q=80"
            alt="Colonial old city walls of Cartagena de Indias at sunset with the Caribbean Sea, Colombia"
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
              <span className="text-white/70">Colombia 7 Days</span>
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
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Colombia in 7 Days:
                <em className="italic text-amber-300"> Bogotá, Medellín &amp; Cartagena (2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                From the world&apos;s greatest pre-Columbian gold collection to Medellín&apos;s cable car comunas to Cartagena&apos;s UNESCO walls on the Caribbean — the complete 7-day circuit with real COP costs and honest safety advice.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="17 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇴 Colombia, South America</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Colombia&apos;s transformation over the past two decades is one of the most remarkable stories in travel. The country once synonymous with danger is now South America&apos;s most exciting destination — a place where Bogotá&apos;s Gold Museum rivals the Louvre in importance, Medellín has reinvented itself from the world&apos;s most dangerous city into a model of urban innovation, and Cartagena&apos;s 16th-century Spanish walls glow orange at sunset over the Caribbean.
            </p>
          </blockquote>

          {/* ── WHAT COLOMBIA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Colombia Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Colombia spent two decades being the country everyone was afraid to visit. That era is over. Since the mid-2000s — after the demobilisation of the AUC paramilitaries, the weakening of the FARC, and sustained urban investment — Bogotá, Medellín, and Cartagena have become genuinely safe and deeply rewarding destinations. The transformation of Medellín in particular — from the world&apos;s most violent city in the early 1990s to a World Urban Innovation Festival host city in 2019 — is one of the great urban stories of the 21st century.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What the three-city circuit gives you is extraordinary diversity in seven days. Bogotá, at 2,600 metres in the Andes, is a cold, intellectual city of eight million with the most important pre-Columbian gold collection on earth. Medellín, 1,100 metres lower and warmer, nicknamed &apos;the city of eternal spring,&apos; has reinvented its hillside comunas into a living laboratory of architecture and social design. Cartagena, on the Caribbean coast at sea level, is the most beautiful colonial city in South America — all ochre walls, bougainvillea, and sea light.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The honest context: Colombia is not a country without risk. Petty crime, scams targeting tourists, and specific neighbourhoods in all three cities require awareness. The risks are manageable and the rewards — cultural, culinary, architectural — are exceptional. This guide gives you the real picture on both sides of that equation.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="BOG El Dorado" />
              <StatCard icon="🌡️" label="Best Months" value="Dec–Mar, Jun–Aug" />
              <StatCard icon="🗓️" label="Duration" value="7 Days" />
              <StatCard icon="💰" label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Colombia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Mar",
                  i: "☀️",
                  t: "Peak Dry Season — Best Overall",
                  d: "Colombia&apos;s main dry season. Bogotá and Medellín are clear and comfortable; Cartagena is at its most beautiful with low humidity. December is festive — Cartagena&apos;s Fiestas de Independencia fills the walled city. January–February is the sweet spot: crowds lower than December, optimal weather across all three cities.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌤️",
                  t: "Second Dry Season — Excellent",
                  d: "Colombia&apos;s second dry window. June–August is peak domestic tourism season but less crowded with international visitors. Medellín&apos;s Feria de las Flores (Flower Festival, early August) is the most important cultural festival in the city — an extraordinary event if your timing aligns.",
                  b: "Highly recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Apr–May",
                  i: "🌧️",
                  t: "First Rainy Season — Still Viable",
                  d: "Rains in the Andean cities are usually afternoon showers rather than all-day downpours — mornings are typically clear. Prices are lower, crowds smaller. Cartagena is less affected by Andean rainfall patterns. A strong choice if budget is the priority.",
                  b: "Budget season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🌦️",
                  t: "Second Rainy Season — Avoid if Possible",
                  d: "October is Colombia&apos;s wettest month in the Andean interior. Bogotá and Medellín receive the most rainfall of the year. Cartagena on the Caribbean coast has its own wet season through October–November. The three-city circuit is at its most weather-affected during this window.",
                  b: "Not recommended",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Colombia</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Fly into <strong className="font-medium">Bogotá El Dorado International (BOG)</strong> — Colombia&apos;s main hub with the most international connections. Once in-country, use budget domestic carriers (Avianca, LATAM, Wingo, JetSmart) for inter-city hops. The BOG–MDE–CTG triangle is well served and fares can be as low as COP 60,000 (~$15) booked in advance.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "International: Fly into Bogotá El Dorado (BOG)",
                  d: "BOG is the primary gateway. Direct connections from New York (JFK/EWR), Miami, Madrid, London (Avianca/Iberia/British Airways), and most South American capitals. From India: connect via Madrid, London, or Miami. Flight time from London: ~11 hours direct with Avianca. The airport is modern — official airport taxis COP 40,000–60,000 ($10–15) to the city centre. Do not take unofficial taxis from outside the terminal.",
                  b: "Primary gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛫",
                  t: "Bogotá → Medellín: Domestic Flight (45 min)",
                  d: "BOG to Medellín José María Córdova (MDE): 45 minutes, COP 60,000–150,000 ($15–38) booked in advance on Avianca, LATAM, or Wingo. Alternatively: overland bus 8–9 hours through spectacular Andean mountain scenery, COP 40,000–80,000 ($10–20) with Flota Magdalena or Expreso Bolivariano. Recommended if you have time — the scenery through the Cordillera Central is outstanding.",
                  b: "45 min / $15–38",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛫",
                  t: "Medellín → Cartagena: Domestic Flight (1 hr)",
                  d: "MDE to Cartagena Rafael Núñez (CTG): 1 hour, COP 70,000–180,000 ($18–45) booked in advance on Wingo or LATAM. Rafael Núñez airport is 15 minutes from the walled city by taxi (COP 15,000–25,000, $4–6). Use InDriver or Cabify to avoid overcharging. Cartagena is also served by direct flights from Miami and New York if you are flying in from the USA.",
                  b: "1 hr / $18–45",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Overland: Bus Bogotá → Medellín",
                  d: "8–9 hours through the Andes on a comfortable Pullman bus (COP 40,000–80,000, $10–20). The route passes through coffee country, cloud forest, and river valleys of the Cordillera Central. Overnight buses available — sleep through and arrive early morning. Recommended for travellers who want the landscape experience.",
                  b: "Scenic option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Colombia Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The classic circuit: 2 nights Bogotá → 2 nights Medellín → 3 nights Cartagena. Each day card is collapsible. All prices given in COP with USD equivalents.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1–2"
                title="Bogotá — Gold Museum, Monserrate & La Candelaria"
                cost="$25–45 total (both days)"
                items={[
                  "Arrive Bogotá El Dorado International (BOG). Take an official airport taxi (COP 40,000–60,000, ~$10–15) or Uber from the designated pickup zone — do not take unofficial taxis from outside the terminal. Check in: stay in Chapinero or Zona Rosa rather than La Candelaria (better restaurant access, safer after dark). Bogotá sits at 2,600m — take the first afternoon gently, drink water, avoid alcohol. Altitude headaches in the first 24 hours are very common for travellers arriving from sea level.",
                  "Day 1 morning — Monserrate: the 3,152m hill dominating the Bogotá skyline. Take the cable car (COP 21,200 return, ~$5 — book online at cerromonserrate.com to avoid queues) or hike the 1,500-step stone path (free, 45–60 minutes, done by thousands of Bogotanos daily for exercise and worship). The panoramic view over 10 million people in the Andean basin — stretching to snowcapped peaks on a clear day — is one of the great city views in South America.",
                  "Day 1 afternoon — Museo del Oro (Gold Museum), Calle 16 #5-41. Entry: COP 4,000 (~$1). One of the world&apos;s great museums for $1. The collection holds 55,000 gold and tumbaga pieces from pre-Columbian civilisations across Colombia. The Muisca raft — a miniature gold figurine of a chief covered in gold dust performing a ritual on a lake, the artifact believed to be the origin of the El Dorado legend — is one of the most important objects in South America. The Sala Dorada (darkened room where 8,000 gold pieces are illuminated in a dramatic light show) is genuinely extraordinary. Allocate 2–3 hours minimum.",
                  "La Candelaria — Bogotá&apos;s colonial historic district. Free to walk entirely: Plaza Bolívar (flanked by the Capitolio Nacional, Palacio de Justicia, and Catedral Primada de Colombia), the legal street art murals (Colombia has an unusual legal street art culture — the La Candelaria murals are internationally recognised), and the colonial streets around Calle 12 and Carrera 8.",
                  "Day 1 evening — street food in La Candelaria: arepas de chócolo (sweet corn arepas stuffed with cheese, COP 2,000–3,000 from a street cart) and agua de panela (hot sugarcane water with lime, COP 1,500). Dinner at Masa (Calle 70 #9-34, Chapinero Norte) — Bogotá&apos;s best bakery-restaurant, known for exceptional fermented bread, creative Colombian sandwiches, and pastries made with local grains. COP 30,000–55,000 ($8–14) per person.",
                  "Day 2 — Zona Rosa and Quinta Camacho. Bogotá&apos;s upmarket residential district with excellent specialty coffee: Juan Valdez Café (Colombia&apos;s national chain, tinto COP 3,500) or Café Cultor and Azahar Coffee for single-origin specialty roasts. Walk the Parque de la 93 area. If visiting on a Sunday: Ciclovía — 120km of city roads closed to cars, open to cyclists and pedestrians — the largest car-free city event in the world.",
                  "Day 2 afternoon — Usaquén, northern Bogotá: a colonial-village neighbourhood absorbed into the city, with cobblestone streets, art galleries, Sunday antiques market, and excellent restaurants on the plaza. Evening: fly or bus to Medellín — arrive and check in to El Poblado.",
                ]}
              />
              <DayCard
                day="Day 3–4"
                title="Medellín — MetroCable, Comunas 13 & Plaza Botero"
                cost="$25–45 total (both days, excl. flight)"
                items={[
                  "Welcome to Medellín — 1,495m above sea level, 10°C warmer than Bogotá year-round, nicknamed &apos;la ciudad de la eterna primavera&apos; (city of eternal spring). Check in to El Poblado, the main tourist and expat neighbourhood — safe, walkable, and well-supplied with restaurants. The Metro costs COP 3,200 per journey and reaches every site on this itinerary.",
                  "Day 3 morning — Plaza Botero and Museo de Antioquia. The plaza (free entry): 23 oversized bronze sculptures by Fernando Botero, Colombia&apos;s most famous artist — the Mona Lisa Gorda (fat Mona Lisa), the Fat Venus, the Fat Torso. The sculptures are unexpectedly funny and formally accomplished. Botero donated 208 works to the Colombian state — the adjacent Museo de Antioquia (COP 20,000, ~$5) holds 100+ Botero pieces plus comprehensive Colombian art history.",
                  "Day 3 afternoon — MetroCable (Metrocable): COP 3,000 (~$0.75) integrated into the metro fare. The cable car connects the formerly impoverished hillside comunas to the metro below — genuine urban infrastructure and the most dramatic urban view in Colombia. Line K from Acevedo station rises through Santo Domingo Savio, one of the densest hillside neighbourhoods in the Americas. Line L extends further to Parque Arví — a cloud forest eco-park with hiking trails and birds (COP 7,000 additional). The journey over 200,000 people living on near-vertical hillsides is unlike anything else.",
                  "Day 3 evening — El Poblado, Parque Lleras area. Dinner at El Cielo (Calle 10 #41-10, El Poblado) — one of Colombia&apos;s most acclaimed restaurants, a progressive tasting menu of 10–14 courses using Colombian biodiversity: Amazon fish, jungle ingredients, Pacific coast seafood. COP 160,000–250,000 ($40–63) per person. Book at least a week in advance. For a more casual evening: craft beer bars around Parque Lleras, COP 6,000–12,000 per beer.",
                  "Day 4 morning — free walking tour of Medellín: Real City Tours (0800–1200, free + COP 20,000–40,000 suggested tip). Local English-speaking guides cover Medellín&apos;s history from industrial city to cartel epicentre to innovation laboratory, with personal family context. 3–4 hours, consistently excellent feedback.",
                  "Pablo Escobar tour ($20–30 per person): book through your hostel or reputable El Poblado tour companies. This is a genuinely controversial subject — Medellín residents, particularly from the comunas most affected by cartel violence, have mixed feelings about Escobar tourism. The best operators frame tours around victims&apos; testimonies and the city&apos;s transformation rather than glorifying the cartel. Research your operator carefully before booking.",
                  "Day 4 afternoon — Comunas 13 street art tour ($15–25, 2 hours, book in El Poblado): Comunas 13 was Medellín&apos;s most violent neighbourhood in the early 2000s. Today it is famous for an extraordinary outdoor mural scene and the outdoor public escalators (the first in Latin America) that transformed connectivity. Community guides tell the transformation story from the inside. One of the best two hours available anywhere in Colombia.",
                ]}
              />
              <DayCard
                day="Day 5–7"
                title="Cartagena — Walled City, Rosario Islands & Getsemaní"
                cost="$30–55 total (three days, excl. flight)"
                items={[
                  "Fly Medellín to Cartagena (1 hour, COP 70,000–180,000, $18–45 booked in advance). Arrive Rafael Núñez International (CTG) — 15 minutes from the walled city. Check in to Getsemaní (the authentic barrio, cheapest and most atmospheric) or inside the Ciudad Amurallada (walled city — more expensive but extraordinarily beautiful). First evening: walk the sea walls at sunset.",
                  "Day 5 — Ciudad Amurallada (UNESCO World Heritage Site). Free to walk the entirety of the 11km of 16th-century Spanish colonial walls and the old city inside them. The Puerta del Reloj (clock tower gate, the main entrance), Plaza de los Coches, Plaza de la Aduana, and the bougainvillea-draped ochre-and-yellow streets are best experienced by wandering without a fixed route. The colourful houses of Cartagena — painted in deep ochre, terracotta, turquoise, and white — are the most-photographed streetscapes in Colombia.",
                  "Castillo San Felipe de Barajas (COP 37,000, ~$9): the most complete Spanish colonial fortress in the Americas, built on a 40m hill overlooking Cartagena Bay between 1536 and 1800. The tunnel network inside the walls — designed for defenders to move unseen — is extraordinary to walk through. Arrive before 10am for cooler temperatures and the best photographic light.",
                  "Day 5 evening — sunset walk on the city walls (free). Cartagena&apos;s most iconic experience. Walk the restored Baluarte de San Francisco Javier sea walls as the Caribbean turns orange. Crowds gather from 5:30pm — arrive by 5:15pm for the best position. The white colonial towers catching the last light, with the sea below turning gold, is genuinely one of the most beautiful urban sights in South America.",
                  "Day 6 — Islas del Rosario day trip: COP 80,000–200,000 ($20–50) per person including speedboat. Boats depart from the Muelle Turístico from 8am. The Rosario Islands are a national marine park 45 minutes offshore — clear turquoise Caribbean water, coral reefs, parrotfish, and sea turtles. Snorkelling equipment included. The Cartagena city beaches (Bocagrande) are polluted and not for swimming — the Rosarios are the actual Caribbean beach experience near Cartagena.",
                  "Day 6 evening — Getsemaní neighbourhood: Cartagena&apos;s most beloved barrio, once considered unsafe, now the heart of backpacker Cartagena. Street art on every wall, outdoor tables on Plaza Trinidad, live vallenato and champeta music until late. Best budget food in the city: arepas de huevo (fried egg-stuffed arepa, COP 3,000), ceviche de camarón (COP 8,000), cold Club Colombia beer (COP 5,000). Dinner at La Pepita (Calle de la Amargura) — excellent modern Colombian in a colourful Getsemaní space, COP 35,000–65,000 ($9–16) per person.",
                  "Day 7 — Final Cartagena morning. Palacio de la Inquisición (COP 20,000, ~$5, Plaza de Bolívar) — the history of the Spanish Inquisition in the Americas: disturbing, important, and essential context for understanding the colonial power structure. Las Bóvedas (the old dungeons converted into an artisan market, free to browse) for Colombian crafts, emerald jewellery, Wayuu bags, and hammered copper. Café del Mar on the walls — colonial-era café with tables on the ramparts overlooking the Caribbean — for a final coffee before heading to CTG airport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Colombia" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Colombia Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites across all three cities, ranked by importance. Entry fees as of 2026 in COP with USD equivalents at COP 4,000 per dollar.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Museo del Oro — Bogotá",
                  e: "COP 4,000 (~$1)",
                  d: "The most important pre-Columbian gold collection on earth: 55,000 gold and tumbaga pieces, including the Muisca raft that inspired the El Dorado legend. The Sala Dorada — 8,000 gold pieces illuminated in a darkened light show — is one of the most extraordinary museum experiences in South America. For $1, it is the single greatest value museum on the continent.",
                  t: "Must see · 2–3 hrs · Bogotá",
                },
                {
                  n: "Monserrate — Bogotá",
                  e: "COP 21,200 cable car return (~$5) or hike free",
                  d: "The 3,152m hill overlooking Bogotá — cable car or hike the 1,500-step stone path. Panoramic view over 10 million people in the Andean basin. The colonial church at the summit has been a pilgrimage site since the 17th century. Best visited at dawn (clearest air) or at sunset. The hike is popular with Bogotanos for daily exercise.",
                  t: "Must see · 2 hrs · Bogotá",
                },
                {
                  n: "Ciudad Amurallada — Cartagena",
                  e: "Free (walk the walls and old city)",
                  d: "UNESCO World Heritage walled city — 11km of 16th-century Spanish colonial fortifications enclosing one of the best-preserved colonial cities in the Americas. Free to walk entirely. The colourful houses, bougainvillea, and Caribbean sea light make it the most photographed city in Colombia. Sunrise and evening are the best times to explore.",
                  t: "Must see · Half day · Cartagena",
                },
                {
                  n: "Castillo San Felipe de Barajas — Cartagena",
                  e: "COP 37,000 (~$9)",
                  d: "The most complete Spanish colonial fortress in the Americas, built 1536–1800 on a 40m hill. The tunnel network inside the walls — designed for military movement without exposure — is extraordinary to explore. Views from the ramparts over Cartagena Bay and the old city are the best available from any elevated point. Visit before 10am for cooler temperatures.",
                  t: "Must see · 1.5 hrs · Cartagena",
                },
                {
                  n: "MetroCable & Comunas — Medellín",
                  e: "COP 3,000 (~$0.75) integrated metro fare",
                  d: "The cable car lines connecting the hillside comunas to the metro below are both daily infrastructure and one of the most dramatic city panoramas anywhere. Line K from Acevedo station rises through Santo Domingo Savio. Line L extends to Parque Arví cloud forest (COP 7,000 additional). The journey over densely packed hillside neighbourhoods is a genuinely unique urban experience.",
                  t: "Must do · 2 hrs · Medellín",
                },
                {
                  n: "Islas del Rosario — Cartagena",
                  e: "COP 80,000–200,000 ($20–50) incl. speedboat",
                  d: "Colombia&apos;s most accessible Caribbean marine park. 45-minute speedboat from the Muelle Turístico. Clear turquoise water, coral reefs, parrotfish, sea turtles, and actual swimming conditions — none of which Cartagena city beaches offer. Snorkelling equipment included in most tours. Non-optional if you want a proper Caribbean beach experience near Cartagena.",
                  t: "Must do · Full day · Cartagena",
                },
                {
                  n: "Plaza Botero & Museo de Antioquia — Medellín",
                  e: "Plaza free · Museum COP 20,000 (~$5)",
                  d: "23 oversized Botero bronze sculptures in an open plaza — free and accessible at all hours. The adjacent Museo de Antioquia holds 100+ Botero works plus comprehensive Colombian art history. Fernando Botero donated his entire collection to the Colombian state — one of the great acts of artistic philanthropy in South American history.",
                  t: "Must see · 2 hrs · Medellín",
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
            title="Colombia — Bogotá, Medellín &amp; Cartagena"
            subtitle="The three-city Andean and Caribbean circuit."
            spots={[
              {
                name: "Cartagena Walled City at Sunset",
                query: "cartagena colombia walled city colonial buildings sunset caribbean",
                desc: "The ochre walls and bougainvillea-draped facades of Cartagena&apos;s UNESCO Ciudad Amurallada at golden hour — the most-photographed scene in Colombia.",
              },
              {
                name: "Museo del Oro — Gold Collection Bogotá",
                query: "museo del oro bogota gold museum colombia pre-columbian exhibition",
                desc: "The Muisca gold collection at Bogotá&apos;s Museo del Oro — 55,000 pre-Columbian gold pieces, the most important collection of its kind anywhere on earth.",
              },
              {
                name: "Medellín MetroCable & Comunas",
                query: "medellin metrocable comunas hillside colombia urban cable car panorama",
                desc: "The MetroCable rising over Medellín&apos;s densely packed hillside comunas — both daily infrastructure and one of the most dramatic urban panoramas in South America.",
              },
              {
                name: "Rosario Islands Caribbean",
                query: "islas del rosario cartagena colombia caribbean coral reef turquoise water",
                desc: "The Islas del Rosario national marine park — 45 minutes from Cartagena by speedboat, with coral reefs and clear turquoise Caribbean water.",
              },
              {
                name: "Getsemaní Street Art Cartagena",
                query: "getsemani cartagena colombia street art colourful neighbourhood barrio",
                desc: "The colourful murals and colonial streets of Getsemaní — Cartagena&apos;s most authentic neighbourhood and the beating heart of backpacker Colombia.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Colombia is one of South America&apos;s best-value destinations. Budget travel is very comfortable here — $35–65/day covers everything including domestic flights when booked in advance. All costs in USD.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "$10–22", "$60–100", "$200–600"],
                    ["🍽️ Food (per day)", "$8–18", "$20–40", "$60–150"],
                    ["🚌 Local transport (per day)", "$5–12", "$15–25", "$40–100"],
                    ["🎟️ Activities (per day)", "$8–18", "$20–40", "$80–200"],
                    ["✈️ Domestic flights (BOG–MDE–CTG total)", "$45–90", "$90–150", "$200–400"],
                    ["TOTAL per day (excl. flights)", "$35–65/day", "$100–180/day", "$300–800+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($35–65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels in Getsemaní and El Poblado ($10–22/night), street food and local restaurants ($8–18/day), metro and app taxis. Colombia&apos;s budget infrastructure is excellent — comfortable, friendly, and well-organised for travellers at this level.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($100–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels in El Poblado and Chapinero ($60–100/night), mid-range restaurants ($20–40/person), Uber and private taxis. Excellent quality at reasonable prices by North American or European standards — the sweet spot for most international travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($300–800+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Converted colonial mansion hotels inside the Cartagena walled city ($300–700/night), fine dining at Leo Bogotá and El Cielo Medellín, private guides and charter boats to the Rosarios. World-class luxury at well below equivalent prices in Europe.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Colombia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The right neighbourhood makes a significant difference to your safety, restaurant access, and logistics in each city. Here are the best bases.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Chapinero / Zona Rosa — Bogotá",
                  type: "Mid-range to luxury · Best overall base in Bogotá",
                  price: "From $40/night",
                  badge: "Recommended base",
                  desc: "Bogotá&apos;s upmarket residential and commercial district. Better restaurant access than La Candelaria, significantly safer after dark, and good transport links to the Gold Museum and Monserrate. La Candelaria is interesting to visit during the day but not recommended for staying — too many reports of petty theft after dark.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "El Poblado — Medellín",
                  type: "Budget to luxury · Main tourist and expat hub",
                  price: "From $15/night",
                  badge: "Best for first visits",
                  desc: "Medellín&apos;s safest and most tourist-friendly neighbourhood. Excellent restaurants, craft beer bars, and walkable streets. The trade-off: it is heavily expat and tourist, and gives you little sense of the real Medellín. Supplement with time in Laureles (authentic local neighbourhood), El Centro (the real commercial city), and the Comunas via cable car.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Getsemaní — Cartagena",
                  type: "Budget · Most authentic Cartagena neighbourhood",
                  price: "From $12/night",
                  badge: "Best budget Cartagena",
                  desc: "Once considered rough, now Colombia&apos;s most beloved backpacker neighbourhood. Street art on every wall, outdoor bars on Plaza Trinidad, live vallenato music, and the best budget food in the city. 10 minutes walk from the walled city. Safe in the evening with standard precautions — stick to the main streets after midnight.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Ciudad Amurallada (Walled City) — Cartagena",
                  type: "Mid-range to luxury · Most atmospheric option",
                  price: "From $100/night",
                  badge: "Most atmospheric",
                  desc: "Staying inside the walled city means waking up inside a UNESCO World Heritage Site. The converted colonial mansion hotels (Casa San Agustín, Bastión Luxury Hotel, Hotel Agua) are architecturally exceptional. More expensive than Getsemaní but the experience of evening light and early morning empty streets is genuinely worth the premium.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Colombia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Colombian cuisine is seriously underrated internationally. The range from street arepas to progressive tasting menus built on Amazonian ingredients is extraordinary — and the prices are far below comparable food experiences in Europe or North America.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Masa — Bogotá",
                  t: "Bakery-restaurant · Chapinero Norte",
                  d: "Bogotá&apos;s best bakery-restaurant. Known for exceptional fermented bread, creative Colombian sandwiches, and pastries made with local grains and seasonal produce. Excellent coffee from Colombian specialty roasters. Calle 70 #9-34, Chapinero Norte. COP 30,000–55,000 ($8–14) per person. Queues at weekend brunch — arrive early.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "El Cielo — Medellín",
                  t: "Progressive Colombian tasting menu · El Poblado",
                  d: "One of Colombia&apos;s most acclaimed restaurants — 10–14 course progressive tasting menu showcasing Colombian biodiversity with ingredients from the Amazon, Pacific coast, and Andes. Chef Juan Manuel Barrientos has made El Cielo a reference point for modern Colombian fine dining. Calle 10 #41-10, El Poblado. COP 160,000–250,000 ($40–63) per person. Book at least a week in advance.",
                  b: "Best fine dining",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "La Pepita — Cartagena",
                  t: "Modern Colombian · Getsemaní",
                  d: "Getsemaní&apos;s standout restaurant — a lively, colourful space serving modern Colombian cuisine with Caribbean coastal influences. Excellent ceviche, cocktails made with local tropical fruits, and the atmosphere you want after a day in the walled city. Calle de la Amargura, Getsemaní. COP 35,000–65,000 ($9–16) per person.",
                  b: "Best in Cartagena",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Leo — Bogotá",
                  t: "Fine dining · Zona Rosa — Amazonian tasting menu",
                  d: "Chef Leonor Espinosa — Colombia&apos;s only chef on Latin America&apos;s 50 Best Restaurants — serves a tasting menu built around Amazonian and Afro-Colombian ingredients: river fish, jungle ants, native peppers, fermented jungle fruits. A genuinely unique culinary experience with no equivalent in Europe or North America. Calle 27B #6-75. COP 250,000–400,000 ($63–100). Book well in advance.",
                  b: "Colombia&apos;s best",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Street Food — All Three Cities",
                  t: "Arepas, buñuelos, empanadas · Everywhere",
                  d: "Colombia&apos;s street food is excellent and cheap. Arepas de chócolo (sweet corn arepas with cheese, COP 2,000–3,000), arepas de huevo (Cartagena, COP 3,000), buñuelos (fried cheese fritters, COP 1,500), empanadas (COP 2,000), obleas with arequipe caramel (COP 3,000). In Cartagena: look for the palenqueras — women in traditional dress selling tropical fruit, a living cultural tradition from Palenque de San Basilio, the first free Black town in the Americas.",
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
            destination="Colombia"
            hotels={[
              {
                name: "Casa San Agustín",
                type: "Luxury colonial mansion · Cartagena Walled City",
                price: "From $350/night",
                rating: "5",
                badge: "Most beautiful",
                url: "https://www.booking.com/hotel/co/casa-san-agustin-cartagena.html?aid=2820480",
              },
              {
                name: "Charlee Lifestyle Hotel",
                type: "Boutique · El Poblado, Medellín",
                price: "From $180/night",
                rating: "5",
                badge: "Best Medellín",
                url: "https://www.booking.com/hotel/co/the-charlee-lifestyle-hotel.html?aid=2820480",
              },
              {
                name: "Casa Medina",
                type: "Historic boutique · Zona Rosa, Bogotá",
                price: "From $190/night",
                rating: "5",
                badge: "Best Bogotá",
                url: "https://www.booking.com/hotel/co/casa-medina-bogota.html?aid=2820480",
              },
              {
                name: "Selina Getsemaní",
                type: "Boutique hostel · Getsemaní, Cartagena",
                price: "From $18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/co/selina-getsemani-cartagena.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cartagena Walled City Walking Tour",
                duration: "3 hrs",
                price: "From $15/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=cartagena+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Rosario Islands Snorkelling Day Trip",
                duration: "Full day",
                price: "From $30/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=rosario+islands+cartagena&partner_id=PSZA5UI",
              },
              {
                name: "Medellín Comunas 13 Street Art Tour",
                duration: "2 hrs",
                price: "From $15/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=medellin+comunas+13+tour&partner_id=PSZA5UI",
              },
              {
                name: "Bogotá Gold Museum + La Candelaria Tour",
                duration: "4 hrs",
                price: "From $20/person",
                url: "https://www.getyourguide.com/s/?q=bogota+gold+museum+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Colombia</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚕",
                  title: "Taking Unregistered Street Taxis",
                  desc: "Street taxis hailed in Bogotá and Medellín have been associated with &apos;paseo millonario&apos; (millionaire&apos;s ride) — where drivers and accomplices force passengers to ATMs. Always use Uber, Cabify, InDriver, or have your hotel or restaurant call a registered taxi. This is the single most important safety rule in Colombian cities. In Cartagena, taxis are safer but still agree on a price before entering the vehicle.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛰️",
                  title: "Underestimating Bogotá&apos;s Altitude",
                  desc: "Bogotá sits at 2,600m — higher than most European ski resorts. Arriving from sea level, expect headaches, shortness of breath, and fatigue for the first 24–48 hours. Do not drink alcohol on Day 1. Hydrate aggressively. Coca tea (legal in Colombia, available in every hotel and café in Bogotá) genuinely helps. Plan your easiest activities for the first afternoon.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏙️",
                  title: "Only Staying in El Poblado, Medellín",
                  desc: "El Poblado is safe, comfortable, and well-stocked with good restaurants — and almost entirely expat and tourist. You will get very little sense of the real Medellín from there alone. Spend time in Laureles (authentic local neighbourhood), El Centro (the genuine commercial city), and the Comunas via the MetroCable. These areas are safe with standard precautions and give you the actual Medellín transformation story.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏖️",
                  title: "Swimming at Cartagena City Beaches",
                  desc: "Bocagrande and the Cartagena city beaches are developed, polluted from port traffic and city runoff, and crowded with aggressive vendors. They are not swimming beaches. The Rosario Islands (COP 80,000–200,000, 45 minutes by speedboat) have clear Caribbean water, coral reefs, and actual swimming conditions. The day trip to the Rosarios is not optional if you want a Caribbean beach experience while visiting Cartagena.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Colombia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚡",
                  title: "MetroCable for COP 3,000 — Cheapest Great View in South America",
                  desc: "The Medellín MetroCable costs COP 3,000 (~$0.75) and provides 20-minute rides over some of the most densely populated hillsides in the Americas. It is both genuine daily urban infrastructure and the most panoramic activity in the city. Take Line K from Acevedo station, then Line L to Parque Arví cloud forest (COP 7,000 additional). Do this on Day 3 afternoon — the valley light is best heading west.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Cartagena Walled City at Sunrise — Before the Cruise Ships Arrive",
                  desc: "Cartagena receives cruise ships daily — 2,000–5,000 passengers hit the walled city between 9am and 2pm. At 6–7am, the streets are empty, the light is horizontal and gold, vendors are just setting up, and you have the most beautiful city in Colombia to yourself. The most striking photographs of Cartagena are all taken before 8am.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏆",
                  title: "The Gold Museum Is One of the World&apos;s Great Museums — For $1",
                  desc: "The Museo del Oro costs COP 4,000 ($1) and holds the Muisca raft — the pre-Columbian gold figurine that created the El Dorado legend — plus 55,000 gold pieces and a Sala Dorada light show that is one of the most extraordinary museum experiences in South America. More culturally important and more moving than the majority of European museums charging $25–40 entry. Three hours minimum.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🦶",
                  title: "Free Walking Tours in All Three Cities — Do These First",
                  desc: "Real City Tours runs excellent free walking tours in Bogotá, Medellín, and Cartagena (3–4 hours each, tip-based: COP 20,000–40,000 suggested). Local English-speaking guides provide historical and cultural context you won&apos;t find in a guidebook. Do these on your first morning in each city — they orient you geographically and give neighbourhood and restaurant recommendations from someone who actually lives there.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "☕",
                  title: "Colombian Coffee Is Among the World&apos;s Best — Drink It Properly",
                  desc: "Colombia grows more varieties of specialty coffee than almost anywhere on earth. In Bogotá: Café Cultor and Azahar Coffee (Quinta Camacho) for single-origin specialty. In Medellín: Café Velvet (El Poblado). In Cartagena: Café de la Oficina (walled city). Juan Valdez Café (the national chain) is genuinely good for a tinto (COP 3,500). The coffee is grown within 500km of where you are drinking it.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📱",
                  title: "Buy a SIM Card at Bogotá Airport on Arrival",
                  desc: "Claro and Movistar have kiosks in El Dorado arrivals. A local SIM with 10GB data costs COP 20,000–40,000 ($5–10). Data is essential for Uber and InDriver (taxi apps), Google Maps navigation, and booking restaurants. WhatsApp is the universal communication tool in Colombia — restaurants, hostels, and tour operators all use it for reservations. Do not rely on roaming.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Colombia" />

          {/* Combine With */}
          <CombineWith currentSlug="colombia-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Colombia safe for tourists in 2026?",
                  a: "Colombia has transformed dramatically over the past two decades. Bogotá, Medellín, and Cartagena are all considered safe for tourists with standard urban precautions — the same precautions you would apply in any major Latin American city. Use Uber or app-based taxis exclusively, avoid displaying expensive jewellery and phones, stay in recommended neighbourhoods, and take guided tours to the comunas rather than wandering independently. The coca-growing regions, the Pacific coast outside specific tourist areas, and the Venezuelan border regions have separate safety advisories — for a first visit, stick to the main three-city circuit.",
                },
                {
                  q: "Do Indian citizens need a visa for Colombia?",
                  a: "Yes. Indian passport holders require a pre-travel e-Visa for Colombia. Apply online at migrationcolombia.gov.co at least 10–15 days before travel. Cost: approximately COP 75,000–100,000 (~$20 USD). The V-Tourism visa allows a 90-day stay for tourism. The application is fully online, requiring: passport scan, passport-size photo, return flight ticket, hotel bookings, and a bank statement. Processing takes 3–7 business days. Western passport holders (USA, UK, Canada, EU, Australia) enter Colombia completely visa-free for 90 days — no prior approval, no fee.",
                },
                {
                  q: "Is the Pablo Escobar tourism in Medellín ethical?",
                  a: "This is a genuine and active debate in Medellín. The city&apos;s residents — especially those from the comunas most affected by cartel violence in the 1990s — have complex feelings about Escobar being a tourist attraction. The best operators frame tours around victims&apos; testimonies, the city&apos;s transformation from violence to innovation, and the broader political context rather than glamorising the cartel. Avoid any tour that presents Escobar as entertainment. The contrast between the violence of the 1990s and the city&apos;s current urban renaissance is a genuinely important story — told properly, it is among the most educational things you can do in Colombia.",
                },
                {
                  q: "Where is the best Colombian coffee experience?",
                  a: "Colombia grows more varieties of specialty coffee than almost anywhere else. In cities: Café Cultor and Azahar Coffee in Bogotá&apos;s Quinta Camacho, Café Velvet in Medellín&apos;s El Poblado, and Café de la Oficina in Cartagena&apos;s walled city. For a coffee farm visit: half-day trips from Medellín to Antioqueño foothills fincas (COP 150,000–250,000 including transport and cupping session). For the full experience: add 2–3 days in the Eje Cafetero (Coffee Region) — Salento, Filandia, and the Cocora Valley wax palms. The Eje Cafetero is frequently rated the most beautiful part of Colombia.",
                },
                {
                  q: "How bad is altitude sickness in Bogotá?",
                  a: "Bogotá at 2,600m is high enough to cause mild altitude symptoms in most travellers arriving from sea level: headaches (most common), fatigue, shortness of breath, and disturbed sleep. Symptoms typically peak in the first 24–36 hours and resolve by Day 2–3. Do not drink alcohol on arrival day, hydrate aggressively, and plan your easiest activities for the first afternoon. Coca tea — available in every café and hotel in Bogotá, completely legal in Colombia — genuinely helps. If symptoms are severe or persist beyond 48 hours, consult a doctor. Note: Medellín (1,495m) causes mild or no symptoms; Cartagena is at sea level.",
                },
                {
                  q: "Cartagena vs. Santa Marta — which is the better Caribbean base?",
                  a: "Both are excellent but different. Cartagena is the most beautiful colonial city in South America — architecture, history, UNESCO walls, Getsemaní, and the Rosario Islands make it the obvious first choice. Santa Marta is more relaxed and gives access to Tayrona National Park (one of South America&apos;s most spectacular national parks — jungle-backed Caribbean coves) and is the starting point for the Ciudad Perdida (Lost City) trek. With 7 or more days in Colombia: do Cartagena first (3 nights), then add Santa Marta and Tayrona (2–3 nights). They are 5 hours apart by bus or 1 hour by domestic flight.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Colombia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/colombia-safety-tips", label: "Safety guide", icon: "🛡️" },
                { href: "/blog/colombia-budget-travel", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/cartagena-walled-city", label: "Cartagena guide", icon: "🏰" },
                { href: "/blog/medellin-travel-guide", label: "Medellín guide", icon: "🚡" },
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
          <RelatedGuides currentSlug="colombia-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Buenos Aires in 5 Days — Steak, Tango &amp; Culture", href: "/blog/buenos-aires-5-days" },
                { label: "Peru &amp; Machu Picchu in 7 Days — The Complete Guide", href: "/blog/peru-machu-picchu-7-days" },
                { label: "Rio de Janeiro in 5 Days — Beaches &amp; Christ the Redeemer", href: "/blog/rio-de-janeiro-5-days" },
                { label: "Miami in 4 Days — Art Deco, Beaches &amp; Brickell", href: "/blog/miami-4-days" },
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
