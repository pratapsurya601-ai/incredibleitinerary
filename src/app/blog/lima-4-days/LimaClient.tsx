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
const LIMA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Lima Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Lima 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Lima in 4 Days — ceviche, cliffs and the world's best restaurants&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/lima-4-days"
        imageUrl="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=1200&q=80"
        description="Lima in 4 Days: Miraflores cliffs, Larco Museum, Barranco, ceviche at Central and La Mar, pisco sours — complete travel guide with budget breakdown."
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
export default function LimaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LIMA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lima" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lima peru miraflores ocean cliffs cityscape pacific"
            fallback="https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?w=1600&q=80"
            alt="Lima Miraflores cliffs overlooking the Pacific Ocean at sunset"
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
              <span className="text-white/70">Lima 4 Days</span>
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
                Lima in 4 Days:
                <em className="italic text-amber-300"> Ceviche, Cliffs &amp; the World&apos;s Best Restaurants</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Miraflores clifftop parks, Larco Museum gold, Barranco bohemian murals, ceviche at La Mar, pisco sours, and the gateway to Machu Picchu. The complete guide.
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
              <span>🇵🇪 Lima, Peru</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Lima is the food capital of the Americas — home to Central, Maido, and Astrid y Gastón, three restaurants that routinely rank in the World&apos;s 50 Best. But the city is far more than its kitchens. Miraflores perches on 80-metre cliffs above the Pacific, Barranco spills with bohemian murals and pisco bars, and the Larco Museum holds the most dazzling pre-Columbian gold collection on earth.
            </p>
          </blockquote>

          {/* ── WHAT LIMA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Lima Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Lima is a city of 11 million people sprawled along the Pacific coast of Peru. It is simultaneously the wealthiest city in South America&apos;s west and a study in dramatic contrasts — gleaming Miraflores restaurants where a tasting menu costs $150, and market cevicherias two districts away where the same quality fish costs $4. Understanding this duality is essential to getting the most from Lima.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city sits on 80-metre ochre cliffs above the Pacific. Miraflores, the upscale residential and tourist district, runs along the clifftop with paragliders launching above the surf below. Barranco, the bohemian southern quarter, has the best street art, the best pisco bars, and the prettiest Victorian architecture. The Historic Centre is UNESCO-listed, a kilometre of colonial churches and grand Republican palaces. And everywhere — everywhere — there is extraordinary food.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The cuisine here is a product of geography and immigration: Andean ingredients meeting Chinese (Chifa), Japanese (Nikkei), and African culinary traditions. Ceviche, the national dish, was invented in some form here. The Pisco Sour was either invented here or in Chile, depending on who you ask, and Peruvians will tell you firmly it was Lima. Four days barely scratches the surface of this city.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport Code" value="LIM" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Mar" />
              <StatCard icon="🍽️" label="World&apos;s Best" value="Central #1" />
              <StatCard icon="💰" label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Lima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Mar",
                  i: "☀️",
                  t: "Summer — Warmest Season",
                  d: "22–28°C. Lima&apos;s summer brings the warmest temperatures and the best chance of sun. January and February have the most sunshine. Peak season for Miraflores and Barranco nightlife. The best time to combine Lima with Machu Picchu is actually the opposite — the Andean dry season (May–Oct) is best for Machu Picchu.",
                  b: "Recommended for Lima",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr–May",
                  i: "🌤️",
                  t: "Autumn — Shoulder Season",
                  d: "18–24°C. The garúa sea mist begins to build. Still pleasant and significantly less crowded than summer. Restaurant reservations easier to secure. Good transition season for combining Lima with Cusco and Machu Picchu (dry season starts May).",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Oct",
                  i: "🌫️",
                  t: "Winter — Garúa Season",
                  d: "16–20°C. The infamous garúa — Lima&apos;s cold Pacific sea mist — blankets the city in grey. The sky rarely clears. However, this is the best time to visit Machu Picchu and the rest of Peru (dry season). Many travellers combine a grey Lima with spectacular Andean sunshine.",
                  b: "Best for Machu Picchu combo",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Nov",
                  i: "🌧️",
                  t: "Late Spring — Transition",
                  d: "18–22°C. November is Lima&apos;s shoulder month — the garúa begins to lift but summer hasn&apos;t fully arrived. Restaurants and hotels are less booked than December. A reasonable time to visit if flexibility is needed.",
                  b: "Flexible shoulder",
                  c: "bg-parchment border-parchment-2",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Lima</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Lima&apos;s <strong className="font-medium">Jorge Chávez International Airport (LIM)</strong> is in Callao, about 16km from Miraflores. Allow 45–90 minutes for the transfer to your hotel depending on traffic — Lima&apos;s roads are notoriously congested. An Uber from the airport to Miraflores costs PEN 60–80 (approximately $16–22).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major hubs",
                  d: "Lima is well connected internationally. Direct flights from Miami (5.5 hrs), New York (8 hrs), Madrid (12 hrs), and London (14 hrs with a connection). Within South America, LAN Peru and LATAM operate extensive routes from Buenos Aires (3.5 hrs), Santiago (3 hrs), and Bogotá (2.5 hrs). Book well ahead December–January.",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚖",
                  t: "Airport to Miraflores by Uber",
                  d: "Uber is the recommended option from LIM. PEN 60–80 ($16–22) to Miraflores depending on traffic. Download the Uber app before arrival — airport taxi touts quote $40–60 for the same journey. The Uber pick-up point is well signposted at the international arrivals exit.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport Express bus",
                  d: "The Airport Express Lima bus runs between the airport and Miraflores (Parque Kennedy stop) for $5. Journey time 45–60 minutes, dropping at 8 stops in Miraflores and San Isidro. Comfortable, air-conditioned coaches. A good option with light luggage during daylight hours.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Domestic flights within Peru",
                  d: "Cusco (for Machu Picchu) is a 90-minute flight from Lima (PEN 150–300 return with LATAM or Sky Airline). Book as early as possible — Cusco flights sell out weeks ahead in the high season. Arequipa (1 hr) and Iquitos for the Amazon (2 hrs) are also well-served.",
                  b: "Essential for Machu Picchu",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Lima Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to cover Lima&apos;s three main neighbourhoods — Miraflores, Barranco, and the Historic Centre — while leaving time for Lima&apos;s signature long, convivial lunches.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Miraflores Cliffs · Parque del Amor · Paragliding · First Pisco Sour"
                cost="$35–80 depending on whether you paraglide"
                items={[
                  "Check in to your hotel or hostel in Miraflores — the neighbourhood is safe, walkable, and the best base for a first Lima visit. Flying Dog Hostel (Av. Lima 457) has excellent dorm beds from $18 with a social rooftop. Casa Andina Premium Miraflores has well-priced doubles from $90.",
                  "Walk to Parque del Amor on the Malecón de la Reserva — the clifftop park with Víctor Delfín&apos;s famous tile mosaic sculpture overlooking the Pacific 80 metres below. The paragliders launch from Parque Raimondi, 500m along the Malecón. A tandem flight costs $65 and runs 12–15 minutes above the Lima coastline — among the most accessible urban paragliding in the world.",
                  "Afternoon stroll through Larcomar — the clifftop shopping mall cantilevered over the cliffs. It&apos;s primarily a mall but the ocean terrace is spectacular and the views from the food court are free. Continue north along the Malecón de Cisneros for the best unobstructed views of the Lima coast.",
                  "Early evening: Mercado de Surquillo No. 1 on Av. Paseo de la República — Lima&apos;s most photogenic food market, a 10-minute walk from Miraflores. Stalls sell fresh ceviche, leche de tigre shots ($1), causa rellena, and anticuchos. Arrive by 5pm before the seafood section closes.",
                  "First Pisco Sour of the trip at a Miraflores bar. Peruvian pisco (made from grapes, distilled in coastal valleys) is different from Chilean pisco — drier, more complex, with the Pisco Sour recipe here including egg white and Angostura bitters. BarBarian and Carnaval serve excellent versions ($8–12 each). The Peruvian national cocktail deserves at least two.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Larco Museum · Huaca Pucllana · Barranco Art Walk · Isolina Dinner"
                cost="$45–70 (museum, ruins, dinner)"
                items={[
                  "9:30am: Museo Larco in Pueblo Libre — entry PEN 35 ($9), take an Uber ($5) from Miraflores. The museum holds 45,000 pre-Columbian artefacts including extraordinary Moche gold and silver metalwork, textiles that predate the Inca Empire by 3,000 years, and the famous erotic pottery vault (included in the ticket). Budget 2–2.5 hours. The colonial hacienda setting and garden are beautiful.",
                  "12:00 — Lunch at Museo Larco&apos;s garden restaurant ($20–25/pp) or nearby local picanterías on Av. Bolívar where menu del día set lunches cost PEN 12–18 ($3–5) including soup, main, and chicha morada. This is how Lima actually eats at lunchtime.",
                  "2:30pm: Huaca Pucllana in Miraflores — an ancient Lima civilisation ceremonial pyramid dating to 500 CE, in the middle of the modern city. Entry PEN 15 ($4). The 30-minute guided tour (included) explains how a 1,500-year-old pyramid came to be surrounded by restaurants and apartment blocks. The contrast is extraordinary.",
                  "4:30pm: Barranco district by Uber ($4 from Miraflores). Barranco is Lima&apos;s bohemian quarter — Victorian mansions painted in pastels, international street art, independent galleries, and the best pisco bar scene in the city. Walk from Plaza de Barranco down to the Puente de los Suspiros (Bridge of Sighs), then along Bajada de Baños to the Pacific.",
                  "Evening gallery walk around Calle Centenario — murals by internationally exhibited artists cover entire building facades. MATE (Mario Testino Museum) is at Av. Pedro de Osma 409 (entry $12, closed Mondays) with the photographer&apos;s archive of Lima high society and global fashion photography. Free street art until after dark.",
                  "8:00pm: Dinner at Isolina in Barranco (Av. San Martín 101, ~$35/pp) — the beloved neighbourhood restaurant of chef José del Castillo, serving traditional Lima criolla food. The seco de cordero (lamb stew with cilantro), cau cau (tripe and potato), and the tacu tacu are outstanding. Queue or book ahead — it fills up.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ceviche at La Mar · Historic Centre · Convento Catacombs · Machu Picchu Planning"
                cost="$40–65 (La Mar lunch, catacombs, historic centre)"
                items={[
                  "Arrive at La Mar cevicheria (Av. La Mar 770, Miraflores) at noon when it opens — this is Lima&apos;s most celebrated ceviche restaurant, consistently in Latin America&apos;s best lists. The mixed ceviche clásico ($18), the chupe de camarones (prawn chowder, $22), and the leche de tigre shots are the benchmarks. Expect a 20-minute queue if you arrive after 12:30pm.",
                  "Alternatively or additionally: El Mercado (Rafael Osterling&apos;s cevicheria at Hipólito Unanue 203) is slightly less touristy with equally brilliant seafood. The mixed ceviche and tiradito de lenguado (sole tiradito) are exceptional. Open for lunch only.",
                  "2:30pm: Uber to the Historic Centre of Lima (Centro Histórico) — free to walk and UNESCO World Heritage listed. Start at Plaza Mayor: the Presidential Palace (Palacio de Gobierno), the Cathedral of Lima with its carved wooden choir stalls, and the Archbishop&apos;s Palace with its Moorish-style wooden balconies. The colonial architecture is the finest ensemble in South America.",
                  "4:00pm: Convento de San Francisco and the Catacombs (Jirón Ancash 451, entry $5) — 70,000 human remains are laid out in geometric patterns in the underground catacombs beneath the 17th-century convent. Genuinely remarkable — the bones are arranged in spirals and concentric circles. Guided tours run every 20 minutes, 30 minutes duration.",
                  "Evening: Return to your hotel and spend 90 minutes booking Machu Picchu arrangements. Official tickets at machupicchu.gob.pe — they sell out 1–3 months ahead, especially June–August. Cusco flights on LATAM or Sky Airline (PEN 150–300 return). Train to Aguas Calientes via Peru Rail or Inca Rail ($50–90 each way). Book the bus up to the ruins ($25 return) at the same time.",
                  "Dinner: Astrid y Gastón at Casa Moreyra (Av. Paz Soldán 290, San Isidro) if you booked ahead ($120–150/pp tasting menu, reservations 6–8 weeks minimum) — Gastón Acurio&apos;s flagship, the restaurant that launched Lima&apos;s global reputation. Or Central (Av. Pedro de Osma 301, Barranco — $150–200/pp) if you secured a reservation months ahead. Both require advance planning.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Clifftop Walk · El Mercado Lunch · Shopping · Departure"
                cost="$30–50 (lunch, transfers)"
                items={[
                  "8:00am: Breakfast at Tostaduria Bisetti in Barranco (Av. Pedro de Osma 116, $10–12) — Lima&apos;s most respected third-wave coffee shop using high-altitude Peruvian arabica beans from Cajamarca and Cusco. The affogato, the avocado toast with quinoa, and the almond croissant are all excellent.",
                  "10:00am: Walk the Malecón from Miraflores to Barranco — 4km of clifftop path with uninterrupted Pacific views. The path passes sculpture gardens, viewpoints over the paragliders, and the Larcomar terrace. Entirely free, takes 75–90 minutes at a relaxed pace.",
                  "12:00pm: Final ceviche lunch. If you haven&apos;t eaten at La Mar yet, this is your last chance — arrive at noon and join the queue. If you have, try Pescados Capitales (Av. La Mar 1337) for creative ceviches and tiraditos with Amazonian ingredient twists, or return to Mercado de Surquillo for the market stall version ($5) one last time.",
                  "2:30pm: Browse the alpaca wool and silver jewellery boutiques on Av. Larco and around Parque Kennedy. Peru&apos;s finest alpaca products — scarves, sweaters, ponchos — are significantly cheaper here than at Machu Picchu. Kuna and Sol Alpaca have the best quality-to-price ratio.",
                  "4:30pm: Uber to Jorge Chávez International Airport — allow 90 minutes minimum from Miraflores (2 hours during evening rush). Cost PEN 60–80 ($16–22). The airport has a decent departure hall with last-minute pisco purchases available at duty free.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Lima" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Lima Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites and experiences in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Museo Larco",
                  e: "PEN 35 ($9)",
                  d: "Lima&apos;s finest museum — 45,000 pre-Columbian artefacts in a 18th-century hacienda. The gold and silver Moche metalwork rivals anything in the British Museum. The erotic pottery vault is included in the ticket. Beautiful colonial garden. Allow 2–2.5 hours. In Pueblo Libre, 15 minutes by Uber from Miraflores.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "Parque del Amor & Miraflores Malecón",
                  e: "Free",
                  d: "The clifftop park with Delfín&apos;s tile mosaic sculpture overlooking the Pacific 80 metres below. Paragliders launch from Parque Raimondi nearby. The Malecón runs 4km along the clifftop through Miraflores to Barranco. The best free experience in Lima.",
                  t: "Free · All day",
                },
                {
                  n: "Central Restaurant",
                  e: "$150–200/pp",
                  d: "Consistently rated the best restaurant in Latin America and in the global top 5. Chef Virgilio Martínez&apos;s 17-altitude tasting menu explores Peru&apos;s entire ecosystem from Pacific sea floor to 4,000m Andean highlands. Reservations essential 6–8 weeks ahead. At Av. Pedro de Osma 301, Barranco.",
                  t: "Book months ahead",
                },
                {
                  n: "Huaca Pucllana",
                  e: "PEN 15 ($4)",
                  d: "A ceremonial pyramid of the Lima civilisation (500 CE) in the middle of Miraflores — surrounded by apartment blocks and upscale restaurants. The 30-minute guided tour contextualises 1,500 years of urban history. Excellent value. Open Tuesday–Sunday.",
                  t: "Underrated · 45 mins",
                },
                {
                  n: "Barranco & Puente de los Suspiros",
                  e: "Free",
                  d: "Lima&apos;s bohemian quarter, 10 minutes south of Miraflores by Uber. The Bridge of Sighs above a barranco (ravine) leads to the Pacific via Bajada de Baños. International street art, independent galleries, the MATE museum, and the best pisco bar scene in the city.",
                  t: "Essential · Half day",
                },
                {
                  n: "Convento de San Francisco Catacombs",
                  e: "$5",
                  d: "Beneath the 17th-century Franciscan convent in the Historic Centre: 70,000 human remains arranged in geometric patterns. One of the most genuinely surprising experiences in Lima. The convent itself has an extraordinary library of 25,000 colonial-era books.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Maido Restaurant",
                  e: "$90/pp tasting menu",
                  d: "Chef Mitsuharu Tsumura&apos;s Nikkei (Peruvian-Japanese) restaurant, consistently in the World&apos;s 50 Best. The 15-course menu balances sashimi precision with Andean ingredients — the tuna with tiger&apos;s milk is extraordinary. Reservations 3–4 weeks ahead. In Miraflores.",
                  t: "Book ahead",
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
            title="Lima — Cliffs, Ceviche &amp; the Pacific"
            subtitle="Miraflores clifftop parks, Barranco street art, Larco Museum gold, and world-class ceviche."
            spots={[
              {
                name: "Miraflores Clifftop Park",
                query: "miraflores lima peru cliffs pacific ocean parque del amor",
                desc: "The Malecón de la Reserva and Parque del Amor — 80-metre cliffs above the Pacific with paragliders launching overhead.",
              },
              {
                name: "Lima Ceviche & Seafood",
                query: "lima peru ceviche seafood leche de tigre restaurant",
                desc: "Lima ceviche — raw fish cured in leche de tigre (lime, ají amarillo, onion) — the signature dish of Peru&apos;s food capital.",
              },
              {
                name: "Larco Museum Pre-Columbian Gold",
                query: "larco museum lima peru pre-columbian gold artefacts moche",
                desc: "The Larco Museum&apos;s extraordinary Moche gold and silver metalwork — the finest pre-Columbian collection in the Americas.",
              },
              {
                name: "Barranco Bohemian District",
                query: "barranco lima peru street art bohemian district murals",
                desc: "Barranco — Lima&apos;s bohemian quarter with Victorian pastel mansions, international street art, and the city&apos;s best pisco bars.",
              },
              {
                name: "Huaca Pucllana Pyramid",
                query: "huaca pucllana lima peru ancient pyramid miraflores city",
                desc: "The 1,500-year-old Huaca Pucllana ceremonial pyramid, surrounded by modern Miraflores apartment blocks.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lima spans an extraordinary price range — from $4 market ceviche to $200 tasting menus at the world&apos;s best restaurants. Your total daily spend depends almost entirely on whether you&apos;re eating at market stalls or fine dining establishments.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-gold text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "$12–18 (hostel dorm)", "$80–120 (boutique hotel)", "$350–500 (Belmond)"],
                    ["🍽️ Food", "$15–22 (markets + picanterías)", "$40–65 (cevicherias)", "$150–250 (fine dining)"],
                    ["🚖 Transport", "$4–8 (Uber + bus)", "$10–20 (Uber)", "$30–80 (private car)"],
                    ["🏛️ Activities", "$5–15 (select museums)", "$25–50 (museums + paragliding)", "$150–300 (private tours)"],
                    ["TOTAL/day", "$35–55", "$120–180", "$350–600"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($35–55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Flying Dog or similar Miraflores hostel ($12–18/night), eat at Mercado de Surquillo and market cevicherias, Uber everywhere. Larco Museum ($9) is the one splurge worth making on this budget.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($120–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Casa Andina Premium or Miraflores Park by Belmond ($80–120), eat at La Mar and Isolina, paraglide ($65), visit Larco and Huaca Pucllana. This is the sweet spot for experiencing Lima properly.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury ($350–600/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Belmond Miraflores Park, tasting menus at Central or Maido, private Larco Museum tour, pisco masterclass. The best food city in the Americas deserves at least one world-class restaurant meal.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Lima</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in Miraflores or Barranco — these two neighbourhoods are safe, walkable, and close to Lima&apos;s best restaurants and the cliffs. Staying in the Historic Centre saves money but adds 30–60 minutes (in traffic) to every restaurant visit.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Belmond Miraflores Park",
                  type: "Luxury · Malecón de la Reserva, Miraflores",
                  price: "From $350/night",
                  badge: "Most prestigious",
                  desc: "An ocean-facing luxury hotel directly on the Malecón with a rooftop pool overlooking the Pacific. The butler service, Peruvian art collection, and Pacific sunset views from the pool terrace are exceptional. The best address in Lima.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Casa Andina Premium Miraflores",
                  type: "Mid-range · Schell 452, Miraflores",
                  price: "From $90/night",
                  badge: "Best mid-range",
                  desc: "Reliable Peruvian chain hotel with well-appointed rooms, excellent breakfast, and a central Miraflores location a 5-minute walk from Parque Kennedy and the cliff parks. Free cancellation available. Good corporate and leisure rates.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Miraflores Park, A Belmond Hotel",
                  type: "Luxury boutique · Malecón de la Reserva",
                  price: "From $280/night",
                  badge: "Best views",
                  desc: "Slightly more intimate than the main Belmond property — a boutique hotel with the same Malecón address and Pacific views but a smaller, more personal atmosphere. The rooftop bar at sunset is among the best in Lima.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Flying Dog Hostel Miraflores",
                  type: "Budget · Av. Lima 457, Miraflores",
                  price: "From $18/night (dorm)",
                  badge: "Best budget",
                  desc: "Lima&apos;s best-reviewed hostel — a social rooftop terrace, clean dorms and private rooms, a great location in central Miraflores, and genuinely friendly staff. The community of solo travellers here makes Lima feel immediately approachable. Free breakfast included.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Lima</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lima&apos;s restaurant scene is the most extraordinary in the Americas. From $4 market ceviche to the world&apos;s #1 restaurant, the city rewards every budget. Ceviche is traditionally a lunch dish — the best cevicherias are open noon to 4pm only.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Central",
                  t: "World&apos;s #1 restaurant · Barranco",
                  d: "Chef Virgilio Martínez&apos;s flagship at Av. Pedro de Osma 301 — consistently ranked in the World&apos;s Top 5, often #1. The 17-altitude tasting menu ($150–200/pp) explores Peru&apos;s entire ecosystem altitude by altitude. Reservations essential 6–8 weeks ahead. The single most impressive dining experience in South America.",
                  b: "World&apos;s best",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Mar Cevicheria",
                  t: "Ceviche · Av. La Mar 770, Miraflores",
                  d: "Gastón Acurio&apos;s beloved cevicheria — consistently Latin America&apos;s best seafood restaurant. Arrive at noon opening to avoid queues. The mixed ceviche clásico, chupe de camarones, and tiradito are the benchmarks for Lima seafood. $18–25 per plate. Open for lunch only.",
                  b: "Best ceviche",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Maido",
                  t: "Nikkei cuisine · Miraflores",
                  d: "Chef Mitsuharu Tsumura&apos;s Peruvian-Japanese restaurant at San Martín 399 — routinely in the World&apos;s 50 Best. The 15-course Nikkei tasting menu ($90/pp) is more accessible than Central and equally revelatory. The tuna sashimi with leche de tigre is extraordinary. Reserve 3–4 weeks ahead.",
                  b: "World&apos;s 50 Best",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Astrid y Gastón",
                  t: "Peruvian contemporary · San Isidro",
                  d: "Gastón Acurio&apos;s flagship restaurant at Av. Paz Soldán 290, Casa Moreyra — a beautiful colonial mansion in San Isidro. The Casa Moreyra tasting menu ($120–150/pp) captures 500 years of Peruvian culinary history. The dish exploring Andean freezing techniques is one of the most intellectually engaging plates of food in the world.",
                  b: "Most historic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Isolina",
                  t: "Lima criolla · Barranco",
                  d: "Chef José del Castillo&apos;s neighbourhood restaurant at Av. San Martín 101 — traditional Lima home cooking elevated to art. The seco de cordero, lomo a la chorrillana, and the tacu tacu are outstanding. $30–40/pp. No reservations accepted — arrive by 7:30pm or queue. A beloved local institution.",
                  b: "Best local food",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Mercado de Surquillo No. 1",
                  t: "Market ceviche · Miraflores edge",
                  d: "The best budget ceviche in Lima — a working food market on Av. Paseo de la República with a seafood section where full ceviche plates cost PEN 15–20 ($4–5). The quality rivals tourist restaurants at a fraction of the price. Open from 8am, seafood section closes by 5pm. A 10-minute walk from Parque Kennedy.",
                  b: "Best budget",
                  c: "bg-blue-50 border-blue-200",
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
            destination="Lima Peru"
            hotels={[
              {
                name: "Belmond Miraflores Park",
                type: "Luxury · Malecón de la Reserva, Miraflores",
                price: "From $350/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/pe/belmond-miraflores-park.html?aid=2820480",
              },
              {
                name: "Casa Andina Premium Miraflores",
                type: "Mid-range · Schell, Miraflores",
                price: "From $90/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/pe/casa-andina-premium-miraflores.html?aid=2820480",
              },
              {
                name: "JW Marriott Lima",
                type: "Luxury · Malecón de la Reserva",
                price: "From $200/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/pe/jw-marriott-lima.html?aid=2820480",
              },
              {
                name: "Flying Dog Hostel Miraflores",
                type: "Budget · Av. Lima, Miraflores",
                price: "From $18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/pe/flying-dog-hostel-miraflores.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Lima Food Tour — Ceviche & Pisco",
                duration: "4 hrs",
                price: "From $55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Lima+food+tour+ceviche&partner_id=PSZA5UI",
              },
              {
                name: "Tandem Paragliding Miraflores Cliffs",
                duration: "15 mins",
                price: "From $65/person",
                badge: "Iconic experience",
                url: "https://www.getyourguide.com/s/?q=Lima+paragliding+Miraflores&partner_id=PSZA5UI",
              },
              {
                name: "Lima Historic Centre Walking Tour",
                duration: "3 hrs",
                price: "From $25/person",
                url: "https://www.getyourguide.com/s/?q=Lima+historic+centre+tour&partner_id=PSZA5UI",
              },
              {
                name: "Pisco Sour Cocktail Class Lima",
                duration: "90 mins",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=Lima+pisco+sour+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Lima</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏨",
                  title: "Staying outside Miraflores or Barranco",
                  desc: "Lima is a sprawling city of 11 million and traffic can be brutal. Staying in Miraflores or Barranco keeps you near the best restaurants, the safest streets, and the cliff parks. Staying downtown saves $10 but costs 90 minutes per trip in traffic.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎟️",
                  title: "Not booking Central or Maido months in advance",
                  desc: "Lima&apos;s top restaurants rank in the global top 10 and book out 2–3 months ahead. Central requires reservations 6–8 weeks minimum; Maido 3–4 weeks. Showing up without a reservation is not an option at these establishments.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏔️",
                  title: "Leaving Machu Picchu tickets until the last minute",
                  desc: "The Peruvian government caps Machu Picchu daily entries and tickets sell out weeks to months ahead, especially June to August. Book online at machupicchu.gob.pe as soon as your dates are confirmed.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌊",
                  title: "Expecting warm Pacific beaches",
                  desc: "The Humboldt Current keeps Lima&apos;s Pacific Ocean at 16–19 degrees Celsius year-round. The beaches are beautiful for walking and surfing but cold for swimming. Lima&apos;s summer (Dec–Mar) is cloudy and humid; the sun often only appears January to March.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💱",
                  title: "Changing money at the airport",
                  desc: "Lima airport cambios offer rates 15–20% below street rates. Use ATMs in Miraflores (Scotiabank and BCP have low fees) or visit a casa de cambio on Av. Larco for excellent sol exchange rates. Never change money with street touts.",
                  color: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Lima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐟",
                  title: "Eat ceviche only at lunch",
                  desc: "Lima cevicheros traditionally serve ceviche for lunch only — the fish is freshest in the morning. The best local spots open at noon and close by 4pm. Mercado de Surquillo has excellent ceviche from PEN 15 ($4). Book culinary experiences via GetYourGuide for guided food tours.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚖",
                  title: "Use Uber exclusively in Lima",
                  desc: "Lima taxis have no meters and haggling is the norm — tourists regularly overpay 300%. Uber is cheap (PEN 15–50 for most Miraflores trips), safe, and tracked. Download it before arriving. InDriver is a cheaper alternative for longer trips.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏨",
                  title: "Book accommodation with free cancellation",
                  desc: "Lima hotels frequently have better rates online with free cancellation. Miraflores fills up during Peruvian public holidays (July 28, December) and Lima Food Festival weeks. Always book with free cancellation on Booking.com to stay flexible.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌄",
                  title: "Plan Machu Picchu from Lima, not Cusco",
                  desc: "Lima is the best hub to arrange the full Peru trip: flights to Cusco ($60–100 return), Machu Picchu tickets, train, and guide can all be organised 1–2 days before departure. Fly into Cusco the day before Machu Picchu to acclimatise to 3,400m altitude.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍹",
                  title: "Order the Pisco Sour, not the caipirinha",
                  desc: "Peru takes its national cocktail very seriously. The authentic Pisco Sour uses Peruvian pisco (not Chilean), fresh lime juice, simple syrup, egg white, and Angostura bitters. Any bar in Miraflores or Barranco will make an excellent one for PEN 20–35 ($5–9).",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Carry cash in soles for markets",
                  desc: "The Mercado de Surquillo and street food stalls operate in cash only. Withdraw soles (PEN) from a Scotiabank or BCP ATM in Miraflores — both have competitive rates and low foreign transaction fees. Larger restaurants all accept cards.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Lima" />

          {/* Combine With */}
          <CombineWith currentSlug="lima-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Lima safe for tourists?",
                  a: "Miraflores and Barranco are among the safest districts in South America for tourists, with strong street lighting, regular tourist police patrols, and low violent crime rates. The Historic Centre is safe during daylight but avoid it at night. Use Uber rather than hailing street taxis, keep phones out of sight on the street, and do not wear expensive jewellery in public. Lima is significantly safer than most people expect.",
                },
                {
                  q: "How many days should I spend in Lima before Machu Picchu?",
                  a: "Two days in Lima minimum if you want to eat at a top restaurant and visit the Larco Museum. Four days is ideal for a full Lima experience plus Machu Picchu planning. When heading to Cusco and Machu Picchu, spend at least one night in Cusco (3,400m) to acclimatise before the ruins — altitude sickness is genuinely debilitating if you rush.",
                },
                {
                  q: "What is the best time to visit Lima?",
                  a: "Lima has two seasons: summer (Dec–Mar) with warm temperatures (22–28°C) and some sun, and winter (May–Oct) when the garúa sea mist keeps the city grey and 16–20°C. Ironically, the rest of Peru has its best weather in winter (dry season May–Oct), which is also the best time to visit Machu Picchu. Many travellers visit Lima in its grey season but enjoy perfect Andean conditions inland.",
                },
                {
                  q: "Can I visit Machu Picchu as a day trip from Lima?",
                  a: "Technically possible but strongly discouraged. Lima to Cusco is a 90-minute flight; Cusco to Aguas Calientes (Machu Picchu town) is a 3.5-hour train journey; then a 30-minute bus to the ruins. A day trip means 20 hours of travel for 2–3 hours at the ruins. Always spend at least one night in Aguas Calientes or Ollantaytambo and allow acclimatisation time in Cusco.",
                },
                {
                  q: "How do I book a table at Central or Maido?",
                  a: "Central (the #1 restaurant in Latin America) takes reservations online via their website (centralrestaurante.com.pe) and they typically open a new booking window 6–8 weeks ahead. Maido takes reservations via their website (maido.pe) 3–4 weeks ahead. Both fill within hours of new dates opening. If you miss the window, check for cancellations 48 hours before your desired date.",
                },
                {
                  q: "What is leche de tigre and where can I try it?",
                  a: "Leche de tigre (tiger&apos;s milk) is the curing liquid from ceviche — fresh lime juice, ají amarillo chilli, fish stock, and raw fish trimmings blended together. It is intensely flavourful, slightly spicy, and believed by Peruvians to cure hangovers. Most cevicherias serve it as a small shot ($1–3). The best versions are at La Mar, El Mercado, and the stalls inside Mercado de Surquillo.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Lima trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/lima-food-guide", label: "Lima food guide", icon: "🍽️" },
                { href: "/blog/machu-picchu-from-lima", label: "Machu Picchu planning", icon: "🏔️" },
                { href: "/blog/lima-miraflores-guide", label: "Miraflores district", icon: "🌊" },
                { href: "/blog/peru-packing-list", label: "Peru packing list", icon: "🎒" },
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
          <RelatedGuides currentSlug="lima-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Santiago Chile in 4 Days — Wine &amp; Mountains", href: "/blog/santiago-chile-4-days" },
                { label: "Bogotá 4 Days — Culture &amp; Coffee", href: "/blog/bogota-4-days" },
                { label: "Cartagena 4 Days — Caribbean &amp; Walled City", href: "/blog/cartagena-4-days" },
                { label: "Mendoza Argentina — Malbec &amp; Andes", href: "/blog/mendoza-argentina-4-days" },
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
