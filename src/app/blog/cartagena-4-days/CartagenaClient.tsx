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
const CARTAGENA_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Cartagena Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",emoji: "✈️",  label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks", emoji: "🏰",  label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Cartagena 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Cartagena Colombia in 4 Days — walled city, Rosario Islands, Getsemaní&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/cartagena-4-days"
        imageUrl="https://images.unsplash.com/photo-1598000820895-b781e94c74e2?w=1200&q=80"
        description="Cartagena Colombia in 4 Days: walled city, Castle San Felipe, Getsemaní, Rosario Islands — complete travel guide with COP and USD budget breakdown."
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
export default function CartagenaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CARTAGENA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cartagena" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cartagena colombia old town walled city colorful buildings caribbean"
            fallback="https://images.unsplash.com/photo-1598000820895-b781e94c74e2?w=1600&q=80"
            alt="Cartagena Colombia colorful colonial buildings walled city Old Town Caribbean"
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
              <span className="text-white/70">Cartagena 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Walled City
                </span>
                <span className="text-white/60 text-xs">February 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cartagena Colombia in 4 Days:
                <em className="italic text-amber-300"> Walled City, Rosario Islands &amp; the Caribbean Coast</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Bougainvillea-draped balconies, Castillo San Felipe, Getsemaní street art, and crystal-clear Caribbean water 45 minutes away by speedboat. The complete guide — $55/day to $300/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="February 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇴 Cartagena, Colombia</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The most beautiful colonial city in the Americas, where Spanish conquistadors built the best-preserved fortifications in the New World around a city of bougainvillea-draped balconies and ceviche eaten at street carts — and where the Rosario Islands lie 45 minutes away with the clearest Caribbean water outside the Maldives.
            </p>
          </blockquote>

          {/* ── WHAT CARTAGENA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cartagena Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Cartagena de Indias was founded by the Spanish in 1533 and became the most important port in the New World — the gateway through which South American gold and silver passed to Spain. To protect that treasure, they built 13km of walls up to 17 metres thick, which took over 200 years to complete and remain the best-preserved Spanish colonial fortifications in existence. The city was declared a UNESCO World Heritage Site in 1984.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Ciudad Amurallada (walled city) is a compact grid of pastel-painted colonial mansions, bougainvillea spilling from iron balconies, cathedral plazas, and streets narrow enough to touch both walls with outstretched arms. Just outside the walls, Getsemaní — once Colombia&apos;s most dangerous neighbourhood — has transformed into the city&apos;s most vibrant barrio, its walls covered in street murals and its Plaza de la Trinidad alive every evening with locals and travellers.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Cartagena has transformed from a byword for danger into one of South America&apos;s great travel destinations in a single generation — driven by the warmth of its costeño people, the restored colonial architecture, and a food scene built on fresh Caribbean seafood, leche de tigre ceviche, and arepas de huevo fried in cast-iron pans at street carts. This is a city that has genuinely earned its reputation.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CTG (Rafael Núñez)" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Apr" />
              <StatCard icon="🏰" label="Walls Built" value="13km · 200 yrs" />
              <StatCard icon="💰" label="Budget From" value="$55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cartagena</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "Lower humidity, less rain, and calmer seas ideal for the Rosario Islands. December and January are peak season — the city buzzes with Colombian holidaymakers and prices rise. February to April offers the sweet spot: dry weather, fewer crowds, and manageable humidity. This is the recommended window for most visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Jul",
                  i: "🌦️",
                  t: "Early Wet Season — Viable",
                  d: "Rain arrives but is typically short afternoon downpours rather than all-day events. Humidity climbs significantly. The city is quieter and cheaper. The Rosario Islands are still accessible most days. A solid choice for budget travellers who can tolerate the sweatier conditions.",
                  b: "Budget-friendly",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Aug–Sep",
                  i: "🌧️",
                  t: "Peak Wet Season — Less Ideal",
                  d: "Heaviest rainfall of the year with frequent downpours. High humidity throughout the day. The Rosario Islands can be rough and some boat operators suspend services. Not recommended unless you have flexible plans and strong budget motivations.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Oct–Nov",
                  i: "⛈️",
                  t: "Heaviest Rain — Difficult",
                  d: "October and early November are the wettest months — prolonged heavy rain, rough Caribbean seas, and high humidity. Late November begins to dry out. The Old Town can flood briefly after heavy rains. If you must visit in this window, late November is far preferable to October.",
                  b: "Not recommended",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cartagena</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cartagena&apos;s airport is <strong className="font-medium">CTG — Rafael Núñez International Airport</strong>, one of the most dramatically situated runways in the world: it literally ends at the Caribbean Sea. The airport is 3km from the Old Town walls — about a COP 25,000 ($6) taxi ride.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly direct to CTG (Cartagena)",
                  d: "Direct flights from Bogotá (45 min, from $40 one-way on Avianca, LATAM, or Wingo), Medellín (1 hr, from $50), and Miami / New York (3–5 hrs on American, Copa, Avianca). From CTG airport, take a metered taxi to the Old Town — COP 25,000–30,000 (~$6–$8). Uber also operates from the airport.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛫",
                  t: "Fly from Bogotá (most common)",
                  d: "Bogotá El Dorado (BOG) to CTG: 45 minutes by air, multiple flights daily on Avianca and LATAM from $35 one-way. If connecting internationally through Bogotá, book the Bogotá–Cartagena leg as a separate domestic ticket — it is almost always cheaper than a single through-itinerary. Check in online to avoid the long Cartagena airport queues.",
                  b: "Recommended connection",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🌏",
                  t: "From India (connecting through Bogotá or Miami)",
                  d: "No direct India–Cartagena flights exist. Best routing: Delhi or Mumbai → Madrid / London / Miami (9–12 hrs) → Bogotá BOG (9–10 hrs) → CTG (45 min). Total journey 22–28 hours. Avianca and Copa offer good Bogotá connections. Alternatively: fly to Miami and connect direct to CTG (3 hrs). Book with at least 72 hours connection in Bogotá for Colombian immigration.",
                  b: "Via Bogotá or Miami",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Overland from Bogotá or Medellín",
                  d: "Bus from Medellín: 12–14 hrs via Sincelejo (Expreso Brasilia, from COP 80,000/$20). Bus from Bogotá: 18–20 hrs (not recommended given cheap flights). The overland route is popular with backpackers combining the coffee region. Arrive at Cartagena Terminal de Transportes, then taxi to the Old Town (~COP 20,000).",
                  b: "Backpacker route",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Cartagena Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Plan outdoor sightseeing for early mornings (7–10am) and late afternoons (4–7pm) — midday heat in Cartagena is genuinely brutal year-round. Costs shown in COP and USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Walled City Old Town · City Walls · Getsemaní evening · Café del Mar sunset"
                cost="COP 180,000–250,000 (~$45–$62)"
                items={[
                  "Arrive at CTG Rafael Núñez airport — the runway literally ends at the Caribbean Sea. Take the metered taxi to the Old Town (COP 25,000 / ~$6). Check in to a hostel in Getsemaní (dorm COP 50,000–70,000 / $12–$18) or a boutique casa hotel inside the walls (from COP 280,000 / $70).",
                  "Walk the Ciudad Amurallada: 13km of Spanish colonial walls, some up to 17 metres thick, built over 200 years beginning in 1586. The walls are free to walk at any hour and form a complete circuit of the Old Town — allow 1.5 hours at a leisurely pace.",
                  "Plaza de Bolívar: the main square of the Old Town, shaded by enormous trees, flanked by the Palacio de la Inquisición and the Cathedral of Cartagena. Sit on one of the wooden benches, buy a fresh coconut agua from a street vendor (COP 3,000 / $0.75), and watch the city move.",
                  "Getsemaní neighbourhood in the afternoon: Colombia&apos;s most celebrated urban transformation — from the country&apos;s most notorious barrio to its most colourful in under 15 years. The Plaza de la Trinidad fills every evening with locals playing dominos, drinking cold Águila beer from the corner tienda, and dancing to vallenato from a Bluetooth speaker.",
                  "Sunset at Café del Mar on the Baluarte de Santo Domingo section of the city walls — overpriced but essential at least once (COP 35,000–50,000 / $9–$13 per drink). The view of the Caribbean at golden hour from the top of the colonial walls is genuinely spectacular. Alternatively, bring your own beer to the free stretch of walls near Baluarte de San Francisco Javier, as locals do.",
                  "Dinner in Getsemaní: arepa de huevo (fried corn cake stuffed with a whole egg, COP 4,000 / $1 each from street carts) and grilled fish at a plaza comedor — COP 20,000–25,000 / $5–$6 for a full plate.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Castillo San Felipe de Barajas · Getsemaní murals · street art tour · sunset on the walls"
                cost="COP 200,000–280,000 (~$50–$70)"
                items={[
                  "Morning: Castillo San Felipe de Barajas — entry COP 25,000 foreigners (~$6.25), COP 14,000 Colombians. The most impressive Spanish fortification in the Americas, built from 1657 on a 40-metre hill overlooking the bay, with an ingenious tunnel system engineered to amplify enemy footsteps. Hire a guide at the castle entrance (COP 40,000 / $10) — without context the tunnels and false walls are just corridors; with a guide they become a masterclass in 17th-century military engineering.",
                  "The fort&apos;s genius: the tunnel network was designed so that any footstep within it echoed to a central listening chamber — guards could hear attackers approaching from any direction and at any depth. The fort was never successfully stormed by sea. Francis Drake tried and failed. The pirates tried and failed. It held every time.",
                  "Mid-morning: Walk back to the walled city along the Avenida del Lago causeway — 20 minutes, passing the old city gates and the lagoon that once served as a defensive moat around the entire fortification system.",
                  "Afternoon: Getsemaní street art walking tour — either self-guided (the neighbourhood is compact and every wall has something worth stopping for) or with a local guide (COP 60,000 / $15 for 90 min tours). The murals document everything from Afro-Colombian heritage to the neighbourhood&apos;s gentrification story to pure Caribbean colour explosions.",
                  "Plaza de la Trinidad from 5pm onwards: the heartbeat of Getsemaní. Order a cold Águila beer from the corner shop (COP 4,000 / $1), find a spot on the church steps, and stay for at least an hour. Dominos boards appear, vendors sell arepas, and the plaza transforms into the most authentic social scene in the city as the heat breaks.",
                  "Optional late dinner: El Boliche Cevichería in Getsemaní — the best ceviche in Cartagena at local prices (COP 20,000–30,000 / $5–$8 a plate). Order the leche de tigre shot — the citrus marinade drained from the ceviche, served as an aperitif.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Rosario Islands boat · Playa Blanca · snorkelling · Caribbean afternoon"
                cost="COP 280,000–400,000 (~$70–$100)"
                items={[
                  "Take the shared speedboat from Muelle Turístico La Bodeguita at 8am to Playa Blanca, Isla Barú — COP 80,000–100,000 return (~$20–$25), 45 minutes each way. Book the day before at the pier or through any hostel. Shared boats are just as fast and comfortable as private tours at a fraction of the price.",
                  "Playa Blanca: white sand beach, crystal-clear Caribbean water — arrive early before the day-tripper crowds from the cruise ships (which dock at 9–10am). The first two hours are extraordinary — the beach is virtually empty, the water is translucent turquoise, and the palm trees bend over the sand.",
                  "Snorkelling in the Rosario Islands coral reef system — equipment rental COP 20,000–40,000 ($5–$10), guide included in some tours. The reef system around Isla Barú is one of Colombia&apos;s best for coral diversity. Look for parrotfish, moray eels, and sea turtles in the outer sections.",
                  "Lunch on the beach: fresh grilled lobster directly from the fishing families who work the beach — COP 50,000–60,000 (~$12–$15) for a full lobster. Order by pointing at what you want from the iced coolers. Alternatively, whole grilled mojarra (local fish) with patacones and salad for COP 25,000 (~$6).",
                  "Afternoon: the beach fills up after noon with day-trippers. Use the afternoon for swimming, hammock time, or exploring further along the beach. Many visitors prefer to spend COP 15,000–20,000 on a sun lounger rental to escape the crowded central stretch.",
                  "Return boats leave by 4–4:30pm; watch for dolphins in the channel on the crossing. Back in Cartagena by 5:15pm — perfect timing to walk the walls at sunset (free) and have dinner in the Old Town.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Bocagrande beach · Convento de la Popa · Old Town farewell walk · Las Bóvedas"
                cost="COP 160,000–220,000 (~$40–$55)"
                items={[
                  "Morning: Bocagrande beach — the modern city&apos;s beachfront neighbourhood, complete with high-rises, beach vendors, and the most accessible swimming in Cartagena proper. Not as pristine as Playa Blanca but excellent for an early morning swim with city views. Take a taxi from the Old Town (COP 12,000 / $3).",
                  "Convento de la Popa (optional, highly recommended): the white convent perched 150 metres above the city on the highest hill in Cartagena — entry COP 14,000 (~$3.50). Panoramic view over the bay, Old Town, Bocagrande, and the Caribbean horizon. Take a taxi up (COP 12,000 one-way — the road is too steep and unsafe to walk). The Virgen de la Candelaria chapel inside the convent is the spiritual heart of Cartagena.",
                  "Wander back through the Old Town for a final time: stop at the Cathedral of Cartagena (free entry, one of the oldest churches in the Americas, first stone laid 1575), Plaza de los Coches (the old slave market square, now food vendors and horse-drawn carriages), and the Portal de los Dulces at its edge — where elderly women sell handmade Colombian sweets and coconut candy in paper cones.",
                  "Las Bóvedas: the colonial arched dungeons built into the city walls in the 18th century for military storage, now converted into a row of craft shops selling Colombian emeralds, Wayuu mochilas (handwoven bags from the Guajira Peninsula), hammocks, and hand-painted ceramics. Prices are higher than Getsemaní market stalls but quality is reliably good.",
                  "Final meal: sancocho de pescado (Caribbean fish stew with yuca, plantain, and corn — COP 18,000–25,000 / $4.50–$6) at any plaza comedor, or ceviche at La Cevichería on Calle Stuart (COP 35,000–50,000 / $9–$12 — pricier but the most famous in the city).",
                  "Taxi to CTG airport (COP 25,000–30,000 / $6–$7, or Uber for COP 18,000–22,000 / $4.50–$5.50). Check-in queues at CTG can be very long — arrive 2 hours before domestic flights, 2.5 hours for international.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cartagena" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Cartagena Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees as of early 2026 in COP and USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Castillo San Felipe de Barajas",
                  e: "COP 25,000 (~$6.25) foreigners / COP 14,000 (~$3.50) Colombians",
                  d: "The most impressive Spanish fortification in the Americas. Built from 1657, expanded through the 18th century, perched 40 metres above the bay on the Cerro de San Lázaro. The tunnel network — engineered to amplify enemy footsteps — is the engineering marvel. Never successfully taken by force. Allow 1.5–2 hours; hire a guide at the entrance.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Ciudad Amurallada (Walled City)",
                  e: "Free to walk",
                  d: "13km of Spanish colonial walls up to 17 metres thick, begun in 1586 and completed over 200 years. Walk the complete circuit at sunrise or sunset for the best light. The walls form the boundary of the Old Town UNESCO heritage zone — the pastel mansions, cathedral plazas, and bougainvillea balconies are inside.",
                  t: "Must see · 1.5 hrs circuit",
                },
                {
                  n: "Getsemaní neighbourhood",
                  e: "Free",
                  d: "Cartagena&apos;s most remarkable urban transformation. Once Colombia&apos;s most dangerous barrio, now its most celebrated — murals cover every wall, the Plaza de la Trinidad fills every evening with locals, and the streets have more atmosphere than the tourist-heavy walled city. Best visited from 5pm onwards.",
                  t: "Must see · Evening",
                },
                {
                  n: "Café del Mar (City Walls)",
                  e: "Free to sit — expensive drinks (COP 35,000–50,000 / $9–$13)",
                  d: "The most famous sunset spot in Cartagena. Bar built into the Baluarte de Santo Domingo section of the city walls, with Caribbean views. At least one sunset drink here is non-negotiable. Alternatively, the free stretch of walls to the west offers the same view with your own drinks.",
                  t: "Sunset · 1 hr",
                },
                {
                  n: "Convento de la Popa",
                  e: "COP 14,000 (~$3.50)",
                  d: "White convent on the highest hill in Cartagena — 150 metres above the city with panoramic views over the bay, walled city, Bocagrande, and the Caribbean. The Virgen de la Candelaria chapel inside is the spiritual heart of the city. Take a taxi up — the road is not safe to walk. Allow 45 minutes.",
                  t: "Recommended · 45 mins",
                },
                {
                  n: "Plaza de Bolívar",
                  e: "Free",
                  d: "The main square of the Old Town — flanked by the Palacio de la Inquisición museum (COP 25,000 / $6.25, worth an hour), the Cathedral of Cartagena, and the City Hall. The shaded square with its enormous trees is the most pleasant spot for people-watching in the city. Morning is best before the heat builds.",
                  t: "30 mins",
                },
                {
                  n: "Playa Blanca (Isla Barú)",
                  e: "COP 80,000–100,000 return boat ($20–$25)",
                  d: "The best beach accessible from Cartagena — white sand, clear turquoise water, lobster on the beach. 45 minutes by shared speedboat from Muelle La Bodeguita. Arrive before 10am to beat the cruise ship crowds. Stay until 4pm when the return boats depart.",
                  t: "Full day · Day 3",
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
            title="Cartagena — Old Town, Islands &amp; the Caribbean Coast"
            subtitle="The colours, the fortifications, and the crystal Caribbean beyond."
            spots={[
              {
                name: "Ciudad Amurallada Old Town",
                query: "cartagena colombia walled city colorful colonial buildings old town",
                desc: "Pastel-painted colonial mansions with bougainvillea-draped iron balconies in the UNESCO-listed walled city.",
              },
              {
                name: "Castillo San Felipe de Barajas",
                query: "castillo san felipe cartagena colombia fortress spanish colonial",
                desc: "The most impressive Spanish fortification in the Americas — never successfully taken by force in its 350-year history.",
              },
              {
                name: "Getsemaní Street Art",
                query: "getsemani cartagena colombia street art murals colourful neighbourhood",
                desc: "Getsemaní&apos;s celebrated murals document Afro-Colombian heritage and the neighbourhood&apos;s transformation.",
              },
              {
                name: "Playa Blanca Rosario Islands",
                query: "playa blanca cartagena colombia caribbean beach turquoise water",
                desc: "Playa Blanca on Isla Barú — white sand and turquoise Caribbean water 45 minutes from Cartagena by speedboat.",
              },
              {
                name: "Sunset from the City Walls",
                query: "cartagena colombia city walls sunset caribbean golden hour cafe del mar",
                desc: "Sunset from the Baluarte de Santo Domingo — the Caribbean turning gold below the colonial fortifications.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (COP + USD)</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cartagena can be done on a tight budget or in serious luxury — the gap between the two is larger than almost anywhere in South America. All prices in Colombian Pesos (COP) and approximate USD equivalent at ~COP 4,000 = $1.
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
                    ["🏨 Accommodation/night", "COP 50,000–80,000\n($12–$20 dorm)", "COP 280,000–440,000\n($70–$110 boutique)", "COP 1,000,000–1,800,000\n($250–$450 luxury)"],
                    ["🍽️ Food/day", "COP 40,000–60,000\n($10–$15 street/comedores)", "COP 100,000–160,000\n($25–$40 restaurants)", "COP 240,000–400,000\n($60–$100 fine dining)"],
                    ["🚕 Transport/day", "COP 20,000–40,000\n($5–$10 taxi/walking)", "COP 40,000–80,000\n($10–$20 Uber/taxi)", "COP 80,000–160,000\n($20–$40 private car)"],
                    ["🏰 Activities/day", "COP 40,000–80,000\n($10–$20 castle+boat)", "COP 120,000–240,000\n($30–$60 guided+islands)", "COP 320,000–600,000\n($80–$150 private)"],
                    ["TOTAL/day", "COP 220,000\n(~$55)", "COP 480,000\n(~$120)", "COP 1,200,000\n(~$300)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium whitespace-pre-line">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center whitespace-pre-line">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (COP 220,000 / ~$55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm in Getsemaní, street food and comedores, walking and taxis, castle entry and shared Rosario boat. Completely comfortable — Cartagena&apos;s backpacker infrastructure is excellent and the best experiences (sunsets on the walls, Getsemaní plaza) are entirely free.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (COP 480,000 / ~$120/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique casa hotel inside the walls, sit-down restaurants, guided tours, private Rosario Islands boat split among 4–6 people. The sweet spot — you get the colonial atmosphere, good food, and the islands without paying luxury rates.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cartagena</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Three main areas: the Walled City (most atmospheric, best location, most expensive), Getsemaní (just outside the walls, excellent budget and mid-range options, great neighbourhood feel), and Bocagrande (modern beach strip, cheaper chain hotels, misses the point of Cartagena entirely). Stay inside or adjacent to the walls.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Walled City Boutique Casa Hotels",
                  type: "Boutique · Inside the UNESCO walls",
                  price: "From COP 280,000 (~$70/night)",
                  badge: "Best location",
                  desc: "Restored colonial mansions converted to boutique hotels — internal courtyards with hammocks, rooftop terraces, and the sound of the streets below. Casa Pestagua, Hotel Boutique Las Tres Banderas, and Casa de la Palma are among the most celebrated. Book well in advance for December–February peak season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Getsemaní Hostels & Guesthouses",
                  type: "Budget-mid · Just outside the walls",
                  price: "From COP 50,000 (~$12/night) dorm",
                  badge: "Best value",
                  desc: "Media Luna Hostel, Mamallena, and Hostel Cartagena are consistently rated the best budget options. Private rooms from COP 120,000–200,000 (~$30–$50). The neighbourhood location is ideal — 5 minutes to the walled city, and the Plaza de la Trinidad is your evening living room.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Sofitel Legend Santa Clara",
                  type: "Luxury · Walled City, 17th-century convent",
                  price: "From COP 1,200,000 (~$300/night)",
                  badge: "Most historic",
                  desc: "A restored 17th-century Franciscan convent inside the walled city — the most atmospheric luxury hotel in Cartagena. Pool in the original cloisters, colonial-era architectural details throughout, and the best address in town. The benchmark for Cartagena luxury.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Bastión Luxury Hotel",
                  type: "Luxury · Built into the city walls",
                  price: "From COP 1,000,000 (~$250/night)",
                  badge: "Most dramatic",
                  desc: "A restored 17th-century Spanish bastion with a rooftop pool overlooking the entire walled city and Caribbean. The only hotel in the world built directly into the colonial fortifications. Remarkable setting, excellent service, and arguably the best rooftop view in Cartagena.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cartagena</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cartagena&apos;s food scene is built on fresh Caribbean seafood — ceviche, grilled lobster, mojarra frita, and the coastal staples of arepas de huevo, patacones, and sancocho de pescado. The best cheap eating is in Getsemaní; the best restaurants are in the walled city. All prices in COP and USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Arepas de Huevo (street carts)",
                  t: "Street food · Getsemaní and Old Town",
                  d: "The definitive Cartagena street food — a corn arepa deep-fried until crisp, split open and filled with a whole egg, then refried until the egg sets inside the dough. COP 4,000–5,000 (~$1–$1.25) each. Found at street carts throughout Getsemaní and at the Portal de los Dulces. Eat two or three for a complete breakfast.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Cevichería",
                  t: "Seafood restaurant · Calle Stuart, Walled City",
                  d: "The most famous ceviche restaurant in Cartagena — the place that made the city&apos;s ceviche internationally known. Classic ceviche, leche de tigre, pulpo (octopus), and the best shrimp cocktail on the coast. COP 35,000–60,000 (~$9–$15) per dish. Book ahead or arrive at noon opening for no wait.",
                  b: "Most famous",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "El Boliche Cevichería",
                  t: "Ceviche · Getsemaní",
                  d: "Equally good ceviche at half the price of La Cevichería and with a much more local atmosphere. COP 20,000–30,000 (~$5–$8) a plate. The leche de tigre here is legendary among Getsemaní regulars. The small dining room fills fast from 1pm — arrive by 12:30 or expect to wait.",
                  b: "Best value ceviche",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Quebracho",
                  t: "Argentinian grill · Bocagrande / Walled City",
                  d: "The best steak restaurant in Cartagena — Argentinian-style parrilla with Colombian beef. COP 70,000–140,000 (~$18–$35) for main plates. An excellent option for the one evening you want something that isn&apos;t seafood. The chimichurri is made fresh daily.",
                  b: "Best steak",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Sancocho de Pescado (plaza comedores)",
                  t: "Local home cooking · Throughout Old Town",
                  d: "The most comforting dish on the Caribbean coast — a rich fish stew with yuca, green plantain, corn on the cob, and a squeeze of lime. COP 18,000–25,000 (~$4.50–$6) at any plaza comedor. Ask locals which window in your barrio does the best one — every neighbourhood has a favourite.",
                  b: "Most local",
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
            destination="Cartagena Colombia"
            hotels={[
              {
                name: "Sofitel Legend Santa Clara",
                type: "Luxury · 17th-century convent · Walled City",
                price: "From COP 1,200,000 (~$300/night)",
                rating: "5",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/co/sofitel-legend-santa-clara-cartagena.html?aid=2820480",
              },
              {
                name: "Bastión Luxury Hotel",
                type: "Luxury · Built into the city walls",
                price: "From COP 1,000,000 (~$250/night)",
                rating: "5",
                badge: "Most dramatic",
                url: "https://www.booking.com/hotel/co/bastion-luxury.html?aid=2820480",
              },
              {
                name: "Casa Pestagua",
                type: "Boutique · Restored colonial mansion · Walled City",
                price: "From COP 400,000 (~$100/night)",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/co/casa-pestagua.html?aid=2820480",
              },
              {
                name: "Media Luna Hostel",
                type: "Hostel · Getsemaní neighbourhood",
                price: "From COP 50,000 (~$12/night) dorm",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/co/media-luna-hostel-cartagena.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cartagena Walled City Walking Tour",
                duration: "2.5 hrs",
                price: "From COP 60,000 (~$15/person)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=cartagena+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Rosario Islands Day Trip + Snorkelling",
                duration: "Full day",
                price: "From COP 160,000 (~$40/person)",
                badge: "Best experience",
                url: "https://www.getyourguide.com/s/?q=cartagena+rosario+islands&partner_id=PSZA5UI",
              },
              {
                name: "Castillo San Felipe Private Tour",
                duration: "2 hrs",
                price: "From COP 80,000 (~$20/person)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=castillo+san+felipe+cartagena&partner_id=PSZA5UI",
              },
              {
                name: "Getsemaní Street Art Walking Tour",
                duration: "90 mins",
                price: "From COP 60,000 (~$15/person)",
                url: "https://www.getyourguide.com/s/?q=getsemani+street+art+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Cartagena</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌡️",
                  title: "Underestimating the heat and humidity — it is genuinely brutal",
                  desc: "Cartagena sits at sea level on the Caribbean coast and is hot and humid every month of the year. Daily highs of 32–35°C with high humidity that makes it feel 5–8°C hotter. Explore the Old Town and walls in the early morning (7–10am) and late afternoon (4–7pm). Midday is for the beach, pool, or air-conditioned restaurants. Linen clothing, a hand fan, and a hostel or hotel with AC are non-negotiable in any budget tier.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚤",
                  title: "Booking Rosario Islands tours through your hotel",
                  desc: "Hotels add 30–50% markup on Rosario Islands packages. Book directly at Muelle Turístico La Bodeguita wharf the evening before your trip — shared speedboats to Playa Blanca cost COP 80,000–100,000 return (~$20–$25). The hotel &apos;package&apos; for the same journey routinely costs COP 240,000–320,000 ($60–$80 pp) with no meaningful difference in experience.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏘️",
                  title: "Staying in Bocagrande instead of the Old Town",
                  desc: "Bocagrande is Cartagena&apos;s modern beach strip — high-rise hotels, chain restaurants, and a perfectly functional city beach. It is also entirely disconnected from the reason most people visit Cartagena. Even a mid-range casa hotel inside or adjacent to the walls ($70–$100/night) puts you in the colonial atmosphere, five minutes from the best street food, and able to walk the walls at sunset without taking a taxi.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💵",
                  title: "Exchanging currency at the airport or using USD cash",
                  desc: "Airport exchange desks give 10–15% worse rates than city ATMs. Use Bancolombia or Davivienda ATMs in the Old Town for Colombian pesos — withdraw COP 400,000–800,000 at a time to minimise transaction fees (typically COP 12,000–15,000 per withdrawal). Most restaurants and shops inside the walls accept cards; street food, taxis, and market stalls are cash only. Keep small bills (COP 5,000 and 10,000) for street food and tips.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌙",
                  title: "Walking alone in Getsemaní late at night or displaying valuables",
                  desc: "Getsemaní has transformed enormously but remains a neighbourhood in transition. The Plaza de la Trinidad and the main streets are safe and vibrant until midnight. Side streets after 11pm are less so. Walk in pairs after dark, keep phones and cameras out of sight, and use Uber rather than walking through unfamiliar streets back to your hotel. Pickpocketing in the crowded Old Town is the more common risk — a money belt or zipped bag solves 90% of this.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cartagena</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎵",
                  title: "The real Cartagena is in Getsemaní, not the walled city",
                  desc: "The walled city is beautiful but increasingly Disneyfied — COP 140,000 ($35) mojitos and restaurants aimed at cruise ship passengers. Getsemaní is where the city breathes. The Plaza de la Trinidad fills every evening with locals playing dominos, cold Águila beer from corner shops (COP 4,000 / $1), and free salsa. Eat here, drink here, and come back for the Sunday evening street food market.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🦞",
                  title: "Eat the ceviche — especially order the leche de tigre",
                  desc: "Cartagena&apos;s ceviche is some of the best in South America. The leche de tigre (tiger&apos;s milk — the citrus marinade drained from the ceviche) is served as a shot and is said to cure hangovers and heat exhaustion. La Cevichería on Calle Stuart is the most famous; El Boliche in Getsemaní is equally good at half the price (COP 20,000 / $5 vs COP 45,000 / $11).",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the city walls every evening — it is free",
                  desc: "The walls are free to walk at any hour. The sunset view from the Café del Mar stretch or Baluarte de San Francisco Javier is spectacular every evening regardless of season. Locals bring their own Águila beer and snacks to the free sections. The pastel-coloured buildings turn gold, the bougainvillea glows, and the Caribbean shimmers below. Make this your daily ritual.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📲",
                  title: "Download Uber and InDriver before you arrive",
                  desc: "Uber operates legally in Cartagena and is consistently 30–40% cheaper than metered taxis. The Old Town to CTG airport should cost COP 18,000–22,000 (~$4.50–$5.50) by Uber vs taxi drivers asking COP 50,000+. InDriver (a bidding app) is often even cheaper for longer distances. Both apps show the fare upfront in pesos.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌊",
                  title: "Go to Playa Blanca before 10am",
                  desc: "Cruise ships dock at Cartagena and send thousands of passengers to Playa Blanca on Isla Barú by 10am. The beach transforms from near-empty paradise to crowded chaos between 9:30am and 11am. Take the first boat from La Bodeguita at 8am, stake your spot on the beach, and you&apos;ll have two hours of tranquillity before the crowds arrive.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎨",
                  title: "Hire a guide specifically for Getsemaní murals",
                  desc: "A guided street art walk in Getsemaní (COP 60,000 / $15, 90 mins) unlocks the entire story behind the murals — which pieces document Afro-Colombian heritage, which were painted by internationally known artists, and which document the neighbourhood&apos;s own transformation. Without context, you walk past remarkable work without understanding it.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cartagena" />

          {/* Combine With */}
          <CombineWith currentSlug="cartagena-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Colombia?",
                  a: "No. Colombia updated its entry policy to allow Indian passport holders to enter visa-free for up to 90 days on arrival. This is a relatively recent change — always verify current requirements at the official Colombian Migración website (migracioncolombia.gov.co) before travel, as policies can change without notice. Bring a return ticket and proof of accommodation when asked at immigration. Passport must be valid for at least 6 months beyond your intended stay.",
                },
                {
                  q: "Is Cartagena safe to visit in 2026?",
                  a: "Cartagena is one of Colombia&apos;s most visited and tourist-friendly cities. The Old Town (Ciudad Amurallada) and Bocagrande are very safe. Getsemaní is safe during the day and early evening at the plaza. Exercise normal urban caution: do not display expensive cameras or phones, avoid unfamiliar streets late at night, use Uber rather than hailing random taxis, and do not accept drinks from strangers in bars. Colombia has transformed dramatically from its 1990s reputation and Cartagena in particular has a well-established tourist infrastructure.",
                },
                {
                  q: "When is the best time to visit Cartagena?",
                  a: "December to April is the dry season — lower humidity, less rain, and calmer seas for the Rosario Islands. December and January are peak season with higher prices and more crowds. February to April is the sweet spot. May to November is wetter but cheaper; the islands are still accessible most days. Avoid late October and early November when wind and rainfall are heaviest and seas are roughest.",
                },
                {
                  q: "How do I get from Cartagena to the Rosario Islands?",
                  a: "Shared speedboats depart from Muelle Turístico La Bodeguita (next to the Old Town walls) daily from 8am–10am, returning by 4pm–5pm. Cost is COP 80,000–100,000 return (~$20–$25) to Playa Blanca on Isla Barú. Book the evening before at the pier or through any hostel. For the full Rosario archipelago (multiple islands and coral reefs), book a day tour (COP 160,000–240,000 / $40–$60 pp) which includes boat, guide, and snorkelling equipment.",
                },
                {
                  q: "How much does a 4-day Cartagena trip cost in total?",
                  a: "Budget backpacker: COP 880,000–1,200,000 (~$220–$300) for 4 days including accommodation, food, transport, and main activities. Mid-range: COP 1,920,000–2,400,000 (~$480–$600). Luxury: COP 4,800,000–8,000,000+ (~$1,200–$2,000+). International flights are separate. The biggest budget variable is accommodation — a hostel dorm at COP 50,000/night vs a walled-city boutique hotel at COP 400,000/night drives most of the difference.",
                },
                {
                  q: "Is 4 days enough for Cartagena?",
                  a: "Four days is ideal for Cartagena. Day 1: Old Town and Getsemaní orientation. Day 2: Castillo San Felipe and street art. Day 3: Rosario Islands full day. Day 4: Convento de la Popa, Bocagrande beach, and farewell wander. You could extend to 5–6 days to add a cooking class, Mercado de Bazurto, and a day trip to the Totumo Volcano mud bath (90 min from Cartagena). Three days works if you prioritise ruthlessly, but you&apos;ll leave wishing you had more time.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cartagena trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cartagena", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cartagena-budget-breakdown", label: "Cost breakdown", icon: "💰" },
                { href: "/blog/rosario-islands-guide", label: "Rosario Islands", icon: "🏝️" },
                { href: "/blog/cartagena-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="cartagena-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bogotá Colombia — City Guide", href: "/blog/bogota-colombia" },
                { label: "Medellín 4 Days — City of Eternal Spring", href: "/blog/medellin-4-days" },
                { label: "Peru &amp; Machu Picchu — Complete Guide", href: "/blog/peru-machu-picchu" },
                { label: "Costa Rica 7 Days — Nature &amp; Adventure", href: "/blog/costa-rica-7-days" },
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
