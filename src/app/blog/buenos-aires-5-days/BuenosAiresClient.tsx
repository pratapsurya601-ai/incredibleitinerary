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

// ── Table of Contents ──────────────────────────────────────────────────────────
const BA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Buenos Aires Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
];

// ── Reading Progress Bar ───────────────────────────────────────────────────────
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

// ── Share Bar ──────────────────────────────────────────────────────────────────
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
          href: `mailto:?subject=Buenos Aires 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Buenos Aires in 5 Days — tango, steak, Recoleta and La Boca&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/buenos-aires-5-days"
        imageUrl="https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1200&q=80"
        description="Buenos Aires in 5 Days: Tango, Steak, Recoleta Cemetery, La Boca Caminito, and San Telmo markets — complete guide with real costs and visa info for Indians."
      />
    </div>
  );
}

// ── Stat Card ──────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ───────────────────────────────────────────────────────────────────
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

// ── Tip Card ───────────────────────────────────────────────────────────────────
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

// ── FAQ Accordion ──────────────────────────────────────────────────────────────
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

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function BuenosAiresClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Buenos Aires" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="la boca caminito colourful houses buenos aires argentina street art"
            fallback="https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1600&q=80"
            alt="La Boca Caminito colourful neighbourhood Buenos Aires Argentina"
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
              <span className="text-white/70">Buenos Aires 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Visa-Free for Indians
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Buenos Aires in 5 Days:
                <em className="italic text-amber-300"> Tango, Steak, Recoleta &amp; La Boca</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                South America&apos;s most European city — colourful Caminito murals, the world&apos;s finest beef, Eva Per&oacute;n&apos;s tomb, midnight milongas, and a Sunday antiques market that lasts until 6pm. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇦🇷 Buenos Aires, Argentina</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Buenos Aires is what happens when you take the ambition of Paris, the sadness of Lisbon, the beef obsession of Tuscany, and drop them all into the South Atlantic with a tango soundtrack playing at midnight. Nowhere else on earth looks, sounds, or tastes quite like this.
            </p>
          </blockquote>

          {/* ── WHAT BUENOS AIRES ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Buenos Aires Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Buenos Aires is a city of 13 million people and about 48 distinct neighbourhoods, each with its own character — the painted iron balconies and cobblestones of San Telmo, the neon-lit parrillas of Palermo, the ornate cemetery vaults of Recoleta, the corrugated iron murals of La Boca. It is simultaneously the most European city in Latin America and the most Latin American city you&apos;ll find outside of Latin America.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Argentina has been in economic turbulence for years, which paradoxically makes Buenos Aires extraordinary value for international visitors. At the blue-market exchange rate (used legally via official exchange houses called <em>cuevas</em> or apps like Wise), the peso goes much further than the official rate suggests. A world-class steak dinner at Don Julio costs the equivalent of $25–$35 USD. A taxi across the city: $2. A cortado at a Palermo caf&eacute;: $1.50.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Indians do not need a visa to enter Argentina — the 90-day visa-free policy has been in place for years and is one of the most generous in South America for Indian passport holders. You arrive at Ezeiza Airport (EZE), clear immigration, and you&apos;re in. Bring cash in USD — the exchange economics are significantly better than using cards at official rates.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Mumbai" value="~22 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Nov / Mar–Apr" />
              <StatCard icon="🥩" label="Steak Dinner" value="$25–$50" />
              <StatCard icon="💰" label="Daily Budget" value="$60–$120" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Buenos Aires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Nov",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–26°C, jacaranda trees in full bloom turning Palermo&apos;s streets purple, outdoor dining at its best. The city is alive but not swamped with tourists. Ideal combination of weather, cultural activity, and value.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🍂",
                  t: "Autumn — Also Excellent",
                  d: "20–28°C, golden light on the European facades, grape harvest season in Mendoza (day trip). Slightly less lively than spring but still very good. April is when the tango festival season picks up.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "☀️",
                  t: "Summer — Hot & Festive",
                  d: "28–36°C. Buenos Aires empties as locals head to the coast. The city is quieter and cheaper but heat can be oppressive. Christmas and New Year bring street parties and events. Jacaranda season is over.",
                  b: "Off-peak, cheaper",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun–Aug",
                  i: "❄️",
                  t: "Winter — Cool But Viable",
                  d: "8–16°C, rarely freezing. No snow. The city&apos;s cultural life is at its most intense — theatre, tango shows, and indoor dining. Fewer tourists. Bring a warm jacket but this is a genuine option, especially for culture-focused visitors.",
                  b: "For culture lovers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Buenos Aires</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Buenos Aires has two airports. <strong className="font-medium">Ezeiza (EZE)</strong> handles all international flights and is 35km from the city centre. <strong className="font-medium">Aeroparque (AEP)</strong> handles domestic flights and is just 8km from the centre. All international arrivals use EZE.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flight from India",
                  d: "Mumbai (BOM) or Delhi (DEL) to Buenos Aires EZE: 22–26 hours with one stop, typically via São Paulo (GRU), Dubai (DXB), Madrid (MAD), or London (LHR). Emirates, LATAM, Iberia, and Air France are the main operators. Fares from ~$700–$1,200 return. Book 3–6 months ahead for the best prices.",
                  b: "Only option from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚖",
                  t: "Ezeiza Airport to City — Official Taxi",
                  d: "Official taxi from EZE to downtown Buenos Aires (Centro, San Telmo, Palermo): approximately $30 USD or ARS 25,000–35,000 at blue rate. Take only official Taxi Ezeiza counters inside the terminal — pre-pay at the desk. Journey: 45–60 minutes depending on traffic.",
                  b: "Easiest option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Ezeiza to City — Tienda León Bus",
                  d: "Tienda León bus from EZE to their central terminal near Retiro station, with free hotel transfer included. Cost: approximately $1 USD equivalent at blue rate — one of the best airport bus deals in South America. Journey: 60–75 minutes. Departs frequently. Extremely good value.",
                  b: "Best value — $1 USD",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "💵",
                  t: "Currency — Bring USD Cash",
                  d: "Critical advice: bring USD $100 bills in excellent condition. At blue market exchange offices (cuevas) and via apps like Wise, you get significantly more pesos than at official bank rates. Never exchange at the airport or hotel. Change in San Telmo or Palermo cuevas for the best rates. ARS 1,000 ≈ $0.80–$1.00 USD at blue rate (April 2026).",
                  b: "Important",
                  c: "bg-rose-50 border-rose-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Buenos Aires Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Buenos Aires is a city of late nights — restaurants fill at 9pm, tango shows start at 10pm. Plan to sleep late and start sightseeing around 10am. The pace here rewards lingering.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="San Telmo · Plaza de Mayo · Puerto Madero · Tango Show"
                cost="$30–$70 + tango show $60–$90"
                items={[
                  "Arrive in Buenos Aires. Check in to your hotel in San Telmo or Palermo Soho. Give yourself a couple of hours to orient, exchange currency at a cueva in San Telmo, and walk the neighbourhood.",
                  "10am: San Telmo neighbourhood walk. Start at Plaza Dorrego — the cobblestoned heart of San Telmo and Buenos Aires&apos;s oldest neighbourhood. The architecture is 19th-century colonial and European in equal parts: ornate iron balconies, crumbling ochre facades, and antiques spilling onto the footpath.",
                  "11am: Mercado de San Telmo. The 1897 iron-and-glass market building houses antique dealers, produce stalls, and excellent food counters. Get a cortado and medialunas (Argentine croissants) at one of the café counters inside — ARS 800–1,200 (~$0.80–$1). This is the real Buenos Aires morning.",
                  "1pm: Walk north along Defensa to Plaza de Mayo. Argentina&apos;s historic main square — flanked by the Casa Rosada (Pink House, Argentina&apos;s seat of government), the Metropolitan Cathedral, and the Cabildo. The balcony of the Casa Rosada is where Evita addressed the crowds and where Maradona celebrated the 1986 World Cup. Free to walk around.",
                  "3pm: Puerto Madero. Buenos Aires&apos;s former port — red-brick warehouses converted into restaurants and offices, plus the Puente de la Mujer (Women&apos;s Bridge by Santiago Calatrava). The Ecological Reserve adjacent to Puerto Madero has 350 hectares of rewilded land with 200+ bird species and is a surprisingly wild escape for a city this size.",
                  "Evening: Tango show in San Telmo. The classic Buenos Aires night out. Shows at El Viejo Almacén, La Ventana, or Café Tortoni&apos;s basement run $60–$120 per person including dinner. The choreography is professional, the setting atmospheric. Book through your hotel. Shows start 8:30–9pm. For free street tango: Plaza Dorrego on Sunday afternoons.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Recoleta Cemetery · MALBA Museum · Palermo Soho"
                cost="$15–$25 museums + dinner $20–$50"
                items={[
                  "10am: Recoleta Cemetery (Cementerio de la Recoleta). Free entry. This is one of the world&apos;s most extraordinary cemeteries — 14 city blocks of marble mausoleums, some the size of small houses, belonging to Argentina&apos;s most powerful families. Eva Perón (Evita) is buried here in the Duarte family vault — signposted from the main entrance. Flowers are always fresh on her tomb. Budget 90 minutes minimum.",
                  "After Recoleta: Café La Biela, directly across from the cemetery entrance. Outdoor seating under a 200-year-old rubber tree — a Buenos Aires institution. Perfect for a late breakfast or coffee before heading to MALBA.",
                  "12pm: MALBA — Museo de Arte Latinoamericano de Buenos Aires. Entry: ARS 2,500 (~$2 USD at blue rate). The best art museum in Buenos Aires — a stunning purpose-built building in Palermo with permanent and rotating exhibitions of 20th-century Latin American art. Works by Frida Kahlo, Diego Rivera, and Tarsila do Amaral. Budget 2 hours.",
                  "2:30pm: Lunch in Palermo Soho. Walk down Thames or Armenia streets and choose from dozens of restaurants. Try El Preferido de Palermo for empanadas and milanesas at ARS 3,000–6,000 per person (~$2.50–$5). Or sit at an outdoor café on Plaza Serrano with craft beer.",
                  "5pm: Palermo Soho afternoon walk. Browse independent boutiques on El Salvador and Honduras streets. Buenos Aires leather goods are world-class — a good leather wallet: ARS 8,000–15,000; a full jacket from a reputed atelier: $150–$300 USD.",
                  "Evening: Palermo Hollywood for dinner. Casa Cruz, El Preferido de Palermo, or Ocho Puertas are excellent local options. Dinner for two with wine: $30–$60 USD at blue rate.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="La Boca Caminito · Steak at La Cabrera · Belgrano"
                cost="$30–$60 inc. La Cabrera lunch"
                items={[
                  "10am: La Boca neighbourhood. Take a taxi (~$3 USD) or Uber to La Boca. This working-class neighbourhood at the mouth of the Riachuelo is Buenos Aires&apos;s most photographed area — corrugated iron houses painted in every colour, with tango dancers posing at street corners.",
                  "Caminito Street: a short pedestrian alley entirely dedicated to street art, La Boca&apos;s working-class heritage, and tango. The murals here are genuine — many decades old, depicting Argentine history, workers, and the city. Budget 1.5 hours in La Boca. Stick to the tourist circuit (Caminito, Del Valle Iberlucea, Almirante Brown) — do not wander into surrounding streets.",
                  "Important safety note: La Boca is safe on the main pedestrian strip but petty crime exists around the edges. Keep cameras in a bag when not shooting, and do not check your phone while walking outside the core tourist area.",
                  "1pm: Lunch at La Cabrera, Palermo. One of Buenos Aires&apos;s most celebrated parrillas on Cabrera Street. Arrive at 12:30pm before the queue forms — no reservations. Order the bife de chorizo (sirloin) or ojo de bife (ribeye), 400–500g cuts served with a dozen side dishes included. With Malbec: ARS 20,000–30,000 per person (~$16–$24 USD). Extraordinary value for the quality.",
                  "3:30pm: Rest. A proper Buenos Aires lunch demands it. The city runs on a timetable where lunch ends at 3pm and dinner starts at 9pm — honour the rhythm.",
                  "Evening: Belgrano for a quieter night. The residential Belgrano neighbourhood has good local restaurants and Chinatown — the largest in South America — with excellent Chinese and Peruvian-Chinese fusion. Far less tourist-heavy than San Telmo or Palermo.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Tigre Delta Morning · Sunday San Telmo Market · Street Tango"
                cost="$10–$20 day trip + market spending"
                items={[
                  "Sunday is the best single day in Buenos Aires. Two things happen: the San Telmo Antiques Market and Tigre Delta. Split the day — Tigre in the morning, market in the afternoon.",
                  "8am: Train to Tigre. Take the Mitre Line from Retiro station to Tigre — 1 hour, ARS 500–800 (~$0.50 USD). Tigre is a river delta town 30km north of Buenos Aires where the Paraná River fans into hundreds of channels through subtropical jungle.",
                  "Tigre Delta exploration: From the Tigre terminal, take a shared lancha colectiva (river bus) into the delta — these run like bus routes through the waterways, stopping at islands with weekend houses, fruit farms, and cafés reachable only by boat. ARS 1,000–2,000 per trip. The landscape is extraordinary — thick vegetation, kingfishers, silence. The round trip is 1.5 hours each way by train.",
                  "12:30pm: Return to Buenos Aires. Trains back to Retiro run every 30 minutes. Arrive in San Telmo by 2pm.",
                  "2pm: San Telmo Sunday Market (Feria de San Telmo). Every Sunday, Plaza Dorrego and surrounding streets fill with antique dealers, leather craftsmen, silver jewellers, and street performers. Genuine 19th-century silverware, vintage maps, and leather-bound books at negotiable prices. Budget 2–3 hours; bring cash pesos.",
                  "5pm: Street tango at Plaza Dorrego. As the market winds down, tango dancers take over the square — professionals doing full performances for tips, and ordinary porteños dancing in pairs. More authentic than any dinner show. Completely free. One of the best things Buenos Aires offers.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Botanical Garden · Fine Arts Museum · Don Julio Dinner · Milonga"
                cost="$40–$80 Don Julio + milonga $15–$25"
                items={[
                  "Final day. Buenos Aires rewards a slow morning — lie in, get medialunas from a local panadería, read at a Palermo café. This is how the city lives.",
                  "11am: Palermo Botanical Garden (Jardín Botánico). Free entry. A 7-hectare botanical garden in the middle of Palermo — century-old rose gardens, glasshouses, and hundreds of stray cats (a Buenos Aires institution). Perfect for a morning walk.",
                  "1pm: Museo Nacional de Bellas Artes. Free entry. The national fine arts collection — Rembrandt, Goya, El Greco, Rodin sculptures, and one of the world&apos;s best collections of Argentine impressionist and modernist painting. A full afternoon could easily be spent here. Chronically underrated compared to MALBA.",
                  "4pm: Last-minute Palermo Soho shopping. Walk Serrano or Santa Fe for leather goods or design. Wallet ARS 8,000–15,000, belt ARS 6,000–12,000. A custom leather jacket from a Palermo atelier: $150–$300 USD — one of the best souvenirs from Buenos Aires.",
                  "9pm: Dinner at Don Julio, Palermo Soho. The consensus best parrilla in Buenos Aires, on Gurruchaga street. Book weeks ahead online. Order the ojo de bife (ribeye) or entrañas (skirt steak) and pair with a Mendoza Malbec. With wine and dessert: ARS 25,000–40,000 per person (~$20–$32 USD). A meal that will benchmark every steak you eat afterward.",
                  "After dinner: Milonga. A milonga is a social tango dance hall — not a choreographed show, but real. Milonga Niño Bien (Confitería Ideal, Thursday–Sunday) and La Viruta (Palermo) are the most visitor-friendly. Entry ARS 2,000–3,500. Shows peak 1–3am. Even attending for 90 minutes is unforgettable.",
                ]}
              />
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA
            title="Planning a Buenos Aires Trip?"
            description="Get personalised advice on tango shows, steak restaurants, and the best neighbourhoods to stay in Buenos Aires."
            buttonText="Get Trip Advice"
            onClick={() => setModalOpen(true)}
          />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Buenos Aires Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Buenos Aires has dozens of worthy attractions. Here is the honest breakdown — what is essential, what is worth it, and what is only for completionists.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Recoleta Cemetery",
                  e: "Free",
                  d: "Non-negotiable. Fourteen city blocks of marble mausoleums belonging to Argentina&apos;s most powerful families — presidents, generals, oligarchs, and Eva Perón herself (Duarte family vault, signposted from entrance). The architecture is extraordinary: Gothic spires, neo-classical columns, Art Deco glass. Budget 90 minutes minimum.",
                  t: "Essential · 90 mins",
                },
                {
                  n: "Caminito Street, La Boca",
                  e: "Free",
                  d: "The most photographed street in Argentina. Corrugated iron painted in rainbow colours, tango murals, and street performers. Genuine historical significance — La Boca was settled by Genoese immigrants who mixed boat paint for their houses. Touristy but legitimately worth seeing. Stay on the main tourist circuit.",
                  t: "Essential · 1.5 hrs",
                },
                {
                  n: "MALBA — Museum of Latin American Art",
                  e: "ARS 2,500 (~$2 USD at blue rate)",
                  d: "The best art museum in Buenos Aires. Permanent collection of 20th-century Latin American art — Frida Kahlo, Diego Rivera, Tarsila do Amaral, Antonio Berni. Purpose-built modern building in Palermo with excellent natural light. Rotating exhibitions among the best in South America.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "San Telmo Sunday Market",
                  e: "Free entry",
                  d: "Every Sunday, the entirety of San Telmo fills with antique dealers and street performers. Genuine 19th-century silver, leather goods, vintage maps, and tango paraphernalia at Plaza Dorrego and surrounding streets. Come with cash pesos and time to negotiate. The street tango at 5pm is the best free show in the city.",
                  t: "Sunday only · 2–3 hrs",
                },
                {
                  n: "Casa Rosada & Plaza de Mayo",
                  e: "Free (exterior) · Interior tours bookable",
                  d: "The Pink House — Argentina&apos;s government palace. The balcony where Evita gave her speeches and Maradona waved the World Cup. Interior tours bookable online. The plaza in front is perpetually lively with vendors, pigeons, and occasional political demonstrations.",
                  t: "Iconic · 30–45 mins",
                },
                {
                  n: "Puente de la Mujer, Puerto Madero",
                  e: "Free",
                  d: "Santiago Calatrava&apos;s rotating pedestrian bridge — shaped like a tango dancer mid-dip. The Puerto Madero waterfront is pleasant for a walk though tourist-priced for food. The Ecological Reserve adjacent has 350 hectares of rewilded port land with 200+ bird species.",
                  t: "Worth seeing · 45 mins",
                },
                {
                  n: "Museo Nacional de Bellas Artes",
                  e: "Free",
                  d: "The national fine arts collection — Rembrandt, Goya, El Greco, Rodin sculptures, and one of the world&apos;s best collections of Argentine modernist and impressionist painting. Often overlooked by tourists in favour of MALBA but genuinely excellent and completely free.",
                  t: "Underrated · 2 hrs",
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
            title="Buenos Aires — Tango, Steak &amp; Belle-Époque"
            subtitle="South America&apos;s most European city in five photographs."
            spots={[
              {
                name: "La Boca Caminito Murals",
                query: "la boca caminito colourful murals buenos aires argentina street art",
                desc: "The rainbow corrugated iron houses of Caminito — Buenos Aires&apos;s most photographed street and the heart of the La Boca neighbourhood.",
              },
              {
                name: "Recoleta Cemetery",
                query: "recoleta cemetery buenos aires marble mausoleums argentina evita tomb",
                desc: "Fourteen blocks of marble mausoleums containing Argentina&apos;s most powerful families — including Eva Perón&apos;s tomb.",
              },
              {
                name: "San Telmo Sunday Market",
                query: "san telmo sunday market antiques plaza dorrego buenos aires argentina",
                desc: "The Sunday antiques market at Plaza Dorrego — one of South America&apos;s best flea markets.",
              },
              {
                name: "Tango in Buenos Aires",
                query: "tango dancers buenos aires argentina milonga street performance",
                desc: "Street tango at Plaza Dorrego on Sunday afternoons — free, authentic, and one of the best things Buenos Aires offers.",
              },
              {
                name: "Palermo Soho Buenos Aires",
                query: "palermo soho buenos aires argentina street cafe jacaranda trees",
                desc: "Palermo Soho — Buenos Aires&apos;s design and dining district, at its most beautiful when the jacaranda trees bloom in October–November.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All prices use the blue-market exchange rate, which is legally accessible via exchange offices (cuevas) and apps like Wise and Remitly. At official rates Buenos Aires is much more expensive — never use airport or bank exchanges.
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
                    ["✈️ Return flight from India", "$700–$900", "$900–$1,200", "$1,500+"],
                    ["🏨 Accommodation (5 nights)", "$60–$100", "$200–$400", "$600–$1,200"],
                    ["🥩 Food & drink (5 days)", "$80–$120", "$150–$250", "$300–$500"],
                    ["🚌 Local transport", "$15–$25", "$30–$50", "$60–$100"],
                    ["🏛️ Attractions & entry fees", "$10–$20", "$25–$50", "$80–$150"],
                    ["💃 Tango show (1 night)", "$60", "$80–$100", "$120+"],
                    ["🛍️ Shopping & extras", "$30–$60", "$100–$300", "$500+"],
                    ["TOTAL (per person excl. flights)", "$255–$385", "$585–$1,150", "$1,660+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–$90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Milhouse Hostel or San Telmo guesthouses, empanadas and choripán for meals, walking everywhere. Completely comfortable. Buenos Aires backpacker infrastructure is excellent.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🌟 Mid-Range ($100–$180/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Palermo Soho boutique hotel, steak at La Cabrera for lunch, wine at dinner, one tango show. The sweet spot — eat at the city&apos;s best restaurants without paying New York prices.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Luxury ($250+/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Alvear Palace Hotel in Recoleta, dinner at Don Julio, private tango lessons, custom leather jacket from a Palermo atelier. World-class luxury at prices impossible to match in Europe.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Buenos Aires</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best neighbourhoods: San Telmo (most atmospheric, cobblestones and antiques), Palermo Soho/Hollywood (dining, nightlife, best restaurants), Recoleta (elegant, quiet, near the cemetery). Centro is convenient for transport but less interesting to be based in.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Alvear Palace Hotel",
                  type: "Grand luxury · Recoleta",
                  price: "From $300/night",
                  badge: "Most iconic",
                  desc: "Buenos Aires&apos;s most storied hotel — a 1932 Recoleta grand dame with marble halls, butler service, and a location directly across from the city&apos;s finest antique galleries. The afternoon tea is a Buenos Aires institution.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Palermo Soho Boutique Hotels",
                  type: "Design boutique · Palermo",
                  price: "From $80–$150/night",
                  badge: "Best location",
                  desc: "Independently owned boutiques in Palermo Soho — most converted from 1900s townhouses with small pools, rooftop terraces, and excellent breakfasts. Home Hotel, Legado Mítico, and 1555 Malabia House are all excellent. Walking distance from the best restaurants.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Milhouse Hostel",
                  type: "Backpacker hostel · San Telmo",
                  price: "From $15/night dorm · $35 private",
                  badge: "Best budget",
                  desc: "The best-known backpacker hostel in Buenos Aires, two minutes from Plaza Dorrego in San Telmo. Rooftop bar, organized tango and milonga nights, good common areas. Excellent for its social atmosphere and location. Private rooms available.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "San Telmo Boutique Guesthouses",
                  type: "Boutique B&B · San Telmo",
                  price: "From $50–$100/night",
                  badge: "Most atmospheric",
                  desc: "Several small guesthouses in San Telmo offer converted 19th-century townhouse rooms with original tile floors, cast-iron beds, and genuine porteño atmosphere. Better value and more character than most comparable Palermo options. Look for Posada de la Luna or Circus Hostel &amp; Hotel.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Buenos Aires</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Buenos Aires may be the best-value restaurant city in the world right now. A steak dinner with wine that would cost $150 in London costs $20–$35 here at blue rate. Use this window while it lasts.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Don Julio",
                  t: "Legendary parrilla · Palermo Soho · Gurruchaga St",
                  d: "Consistently ranked among the world&apos;s top restaurants. The bife de chorizo and ojo de bife are dry-aged in-house, served on wooden boards with chimichurri. The wine list is 100% Argentine. Book 3–4 weeks ahead; if you can&apos;t get a reservation, arrive at 12pm precisely and wait at the door. Dinner for two with Malbec: ARS 40,000–70,000 (~$32–$56 USD).",
                  b: "World-class",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Cabrera",
                  t: "Classic parrilla · Palermo · Cabrera St",
                  d: "Palermo&apos;s other benchmark steak restaurant. Large cuts served with a legendary array of side dishes included. Slightly more casual than Don Julio. No reservations — arrive at 12pm or 7pm to beat the queue. With Malbec and sides: ARS 20,000–30,000 per person (~$16–$24 USD).",
                  b: "Essential",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "El Federal",
                  t: "Traditional pulpería-restaurant · San Telmo · Corner Carlos Calvo & Perú",
                  d: "A 1864 pulpería at the corner of Carlos Calvo and Perú in San Telmo. Wooden ceiling, tiled floors, walls covered in old clocks and bric-a-brac. Authentic Buenos Aires comfort cooking — milanesa, locro, and provoleta (grilled cheese). The atmosphere is the best in the city. Lunch for two with wine: ARS 10,000–18,000 (~$8–$14 USD).",
                  b: "Most atmospheric",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "El Preferido de Palermo",
                  t: "Neighbourhood almacén · Palermo",
                  d: "A neighbourhood institution run by the same family for decades. Excellent empanadas, matambre (stuffed rolled veal), and the best tortilla española in Buenos Aires. Beloved by locals and completely off the tourist circuit despite being two blocks from Plaza Serrano. No booking — come early or late.",
                  b: "Local favourite",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Café Tortoni",
                  t: "Historic café · Centro · Av. de Mayo 825",
                  d: "Buenos Aires&apos;s most famous café — open since 1858, all dark wood panels, marble tables, and tango photographs covering every wall. There is always a tourist queue but it moves fast. Go for the history, not the food. The tango show in the basement (evenings, $15–$25 USD) is one of the better-value shows in the city.",
                  b: "Iconic historic",
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
            destination="Buenos Aires Argentina"
            hotels={[
              {
                name: "Alvear Palace Hotel",
                type: "Grand luxury · Recoleta",
                price: "From $300/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/ar/alvear-palace.html?aid=2820480",
              },
              {
                name: "Home Hotel Buenos Aires",
                type: "Design boutique · Palermo",
                price: "From $120/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/ar/home-buenos-aires.html?aid=2820480",
              },
              {
                name: "Legado Mítico Buenos Aires",
                type: "Heritage boutique · Palermo",
                price: "From $90/night",
                rating: "4",
                badge: "Most charming",
                url: "https://www.booking.com/hotel/ar/legado-mitico-buenos-aires.html?aid=2820480",
              },
              {
                name: "Milhouse Hostel Avenue",
                type: "Premium hostel · San Telmo",
                price: "From $15/night (dorm)",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ar/milhouse-hostel-avenue.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Buenos Aires Tango Show & Dinner",
                duration: "3 hrs",
                price: "From $60/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=buenos+aires+tango+show&partner_id=PSZA5UI",
              },
              {
                name: "San Telmo Walking Tour",
                duration: "2.5 hrs",
                price: "From $15/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=san+telmo+walking+tour+buenos+aires&partner_id=PSZA5UI",
              },
              {
                name: "Tigre Delta Boat Tour",
                duration: "4 hrs",
                price: "From $25/person",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=tigre+delta+tour+buenos+aires&partner_id=PSZA5UI",
              },
              {
                name: "Buenos Aires Food & Wine Tour",
                duration: "3 hrs",
                price: "From $45/person",
                url: "https://www.getyourguide.com/s/?q=buenos+aires+food+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Buenos Aires</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💱",
                  title: "Exchanging money at the airport or official bank rate",
                  desc: "The official exchange rate is 3–4x worse than the blue market rate. Exchanging $200 at the airport versus at a cueva in San Telmo can mean hundreds of pesos difference per dollar. Always exchange at licensed cuevas or use Wise/Remitly. Never at the airport.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥩",
                  title: "Skipping the steak because it seems expensive",
                  desc: "At blue rate, dinner at Don Julio or La Cabrera — genuinely world-class restaurants — costs $20–$35 per person including wine. This is not a splurge, it&apos;s Tuesday night dinner. Visitors who eat empanadas every night instead of steak regret it universally. Eat the steak. With the Malbec.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🕙",
                  title: "Arriving at a restaurant at 7pm",
                  desc: "Porteños eat dinner at 9pm–10:30pm. Restaurants at 7pm are empty, have B-team staff, and don&apos;t have full menus ready. The atmosphere that makes Buenos Aires restaurants special doesn&apos;t materialise until 9:30pm. If you eat at 7pm, you&apos;re not experiencing the city.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🗺️",
                  title: "Wandering outside La Boca&apos;s tourist circuit",
                  desc: "La Boca&apos;s tourist strip (Caminito, Del Valle Iberlucea) is completely safe. The streets one or two blocks off this strip are not safe for tourists. Do not wander. Do not check your phone while walking. Keep valuables concealed.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💳",
                  title: "Relying entirely on cards",
                  desc: "While cards work more widely than they used to, cash pesos from cuevas will save you 50–70% on most transactions compared to card payments at official rates. Bring USD $200–$300 per week in good condition $100 bills. Keep in a money belt.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎭",
                  title: "Booking the wrong tango show",
                  desc: "The big Las Vegas-style dinner shows are slick and entertaining but have little connection to actual tango culture. For authenticity, attend a milonga — a real social tango dance hall. La Viruta and Niño Bien are most visitor-friendly. The difference between watching professionals perform for tourists and watching locals dance for love is enormous.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Buenos Aires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌸",
                  title: "Visit in October for jacaranda season",
                  desc: "Buenos Aires in October is spectacular — the jacaranda trees that line Palermo&apos;s streets turn every footpath purple. The combination of October weather (20–26°C), flowering, and outdoor café culture is when the city is most beautiful.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📱",
                  title: "Download Cabify — safer and simpler than street taxis",
                  desc: "Cabify (the local Uber equivalent) is more transparent on pricing and easier if your Spanish is limited. Uber also works. For airport transfers, use official Taxi Ezeiza counters inside the terminal — not street taxis outside arrivals.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🥩",
                  title: "Learn the cuts before you order",
                  desc: "Bife de chorizo (sirloin strip) is the benchmark Argentine cut — lean and flavourful. Ojo de bife (ribeye) is richer. Vacío (flank) is what locals eat at home — underrated. Entrañas (skirt steak) is intensely flavoured and cheap. Lomo (filet) is the mildest cut. At a good parrilla, order the bife de chorizo first.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💃",
                  title: "Take one tango lesson before the milonga",
                  desc: "One hour of tango class ($15–$25 USD, available at any milonga or hostel) is enough to feel less self-conscious on the floor. Buenos Aires has a codified invitation system — the cabeceo (a nod of the head). Understanding the basics makes the milonga 10x better.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🍷",
                  title: "Order the house Malbec — always the best value",
                  desc: "Argentine restaurants&apos; house wines are Mendoza Malbec selected specifically to pair with their food. At $3–$6 USD per bottle at blue rate, the house wine at a mid-range restaurant is often better value than a label wine. Trust the house Malbec.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌊",
                  title: "Do the Tigre Delta on a Sunday",
                  desc: "The delta is best on Sundays — porteños take their families to river houses, launches are full, and island cafés are all open. Sunday Tigre in the morning plus San Telmo Sunday Market in the afternoon is the best possible single day in Buenos Aires.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Buenos Aires" />

          {/* Combine With */}
          <CombineWith currentSlug="buenos-aires-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indians need a visa for Argentina?",
                  a: "No — Indian passport holders do not need a visa to enter Argentina. The visa-free policy allows stays of up to 90 days. You need a valid passport with at least 6 months validity, proof of onward travel, and proof of sufficient funds. No visa application, no visa fee. Argentina is one of the most visa-generous countries in South America for Indian nationals.",
                },
                {
                  q: "How do I exchange money in Buenos Aires?",
                  a: "Bring USD cash in $100 bills in good condition (worn or torn bills may be refused). Exchange at licensed currency exchange offices called cuevas — concentrated in San Telmo and Microcentro. You can also use apps like Wise or Remitly to transfer money and withdraw locally. Never exchange at the airport or official bank windows — the official rate is 3–4x worse than the blue market rate, which is legal to use at exchange offices.",
                },
                {
                  q: "Is Buenos Aires safe for tourists?",
                  a: "Buenos Aires is generally safe in tourist areas — San Telmo, Palermo, Recoleta, Puerto Madero. Standard urban precautions apply: don&apos;t flash expensive cameras or phones, keep valuables in a money belt, don&apos;t walk in La Boca outside the tourist circuit. Bag-snatching on motorcycles exists but is rare in main tourist zones. The city feels safe and walkable in daytime; stick to main streets late at night.",
                },
                {
                  q: "What is the best tango show in Buenos Aires?",
                  a: "For dinner-show spectacle: El Viejo Almacén (San Telmo) is widely considered the best production. For authenticity: skip the dinner shows and go to a milonga. Niño Bien (Confitería Ideal, Thursday–Sunday) and La Viruta (Palermo) are most visitor-friendly — you can watch without participating. Entry ARS 2,000–4,000. Shows peak 1–3am. Even attending for 90 minutes is an experience unlike anything else.",
                },
                {
                  q: "How far ahead should I book Don Julio?",
                  a: "Book 3–4 weeks ahead for dinner, especially Thursday–Sunday. Don Julio accepts reservations via their website and is in extremely high demand. If you can&apos;t get a reservation, arrive at noon precisely for lunch — they open at 12pm and queue fills within 15 minutes. La Cabrera is an excellent alternative that doesn&apos;t take reservations; arrive at 12pm or 7:30pm sharp.",
                },
                {
                  q: "What is the Tigre Delta and is it worth a day trip?",
                  a: "Tigre is a river delta town 30km north of Buenos Aires where the Paraná River fans into hundreds of channels through subtropical jungle. Take the Mitre Line train from Retiro (1 hour, ~$0.50 USD at blue rate) then a shared launch (lancha colectiva) into the delta. The landscape is genuinely beautiful and completely unlike anything else near the city. A Sunday visit adds the bonus of seeing porteños on their weekends. Worth a full day.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Buenos Aires trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/buenos-aires-tango-guide", label: "Tango guide", icon: "💃" },
                { href: "/blog/argentina-budget-travel", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/buenos-aires-steak-guide", label: "Steak restaurants", icon: "🥩" },
                { href: "/blog/buenos-aires-neighbourhoods", label: "Neighbourhoods", icon: "🗺️" },
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
          <RelatedGuides currentSlug="buenos-aires-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More International Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Seville in 3 Days — Flamenco &amp; Tapas", href: "/blog/seville-3-days" },
                { label: "Florence in 3 Days — Renaissance Art", href: "/blog/florence-3-days" },
                { label: "Amalfi Coast 4 Days — Scenic Drive", href: "/blog/amalfi-coast-4-days" },
                { label: "Madrid in 3 Days — Prado &amp; Pintxos", href: "/blog/madrid-3-days" },
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
