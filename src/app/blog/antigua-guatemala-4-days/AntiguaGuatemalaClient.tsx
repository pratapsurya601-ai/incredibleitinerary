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
import { PinterestSaveButton } from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const ANTIGUA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Antigua Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚌",  label: "Getting There" },
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
          href: `mailto:?subject=Antigua Guatemala 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Antigua Guatemala in 4 Days — cobblestones, ruins and a volcano that erupts every 15 minutes&url=${pageUrl}`,
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
        url="https://www.incredibleitinerary.com/blog/antigua-guatemala-4-days"
        imageUrl="https://images.unsplash.com/photo-1531263609-56c7c9db2b19?w=1200&q=80"
        description="Antigua Guatemala in 4 Days: Arco de Santa Catalina, Volcán Acatenango overnight hike, colonial ruins, coffee fincas — complete travel guide with budget breakdown."
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
export default function AntiguaGuatemalaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ANTIGUA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Antigua Guatemala" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="antigua guatemala colonial yellow arch arco santa catalina agua volcano cobblestone street"
            fallback="https://images.unsplash.com/photo-1531263609-56c7c9db2b19?w=1600&q=80"
            alt="Antigua Guatemala colonial yellow arch Arco de Santa Catalina with Agua Volcano in background"
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
              <span className="text-white/70">Antigua Guatemala 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Antigua Guatemala in 4 Days:
                <em className="italic text-amber-300"> Colonial Ruins, Volcanoes &amp; Coffee Country</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Cobblestone streets, earthquake-ruined churches that were never rebuilt, the world&apos;s best Spanish schools, and a volcano that erupts every 15 minutes just outside town. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇬🇹 Guatemala, Central America</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $40/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A perfectly preserved Spanish colonial city at 1,500 metres altitude, where every cobblestone street ends with a volcano backdrop. Ruins of churches destroyed by earthquakes in 1773 that were never rebuilt — they look like film sets. The best Spanish language schools in the world. And Semana Santa processions so extraordinary that the Vatican has declared them among the most important Catholic ceremonies on Earth.
            </p>
          </blockquote>

          {/* ── WHAT ANTIGUA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Antigua Guatemala Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Antigua was the capital of the Captaincy General of Guatemala — Spain&apos;s colonial authority over most of Central America — from 1543 until the catastrophic Santa Marta earthquakes of 1773 destroyed most of the city. The colonial government relocated to modern Guatemala City, but thousands of residents refused to leave. What remains is one of the best-preserved Spanish colonial cities in the Americas, with over 30 ruined churches, convents, and civic buildings left exactly as they fell — crumbling baroque facades, roofless naves, bougainvillea growing through collapsed walls.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city sits at 1,500m on a plateau surrounded by three volcanoes: Volcán Agua (extinct, 3,760m) directly to the south — the iconic backdrop behind the Arco de Santa Catalina — Volcán Fuego (3,763m) to the southwest, which erupts visibly every 15 to 20 minutes, and Volcán Acatenango (3,976m), the highest and the one you can climb overnight to watch Fuego erupt from the summit ridge. The altitude keeps temperatures mild year-round: 18–24°C most months, cool evenings regardless of season.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Antigua is also Guatemala&apos;s coffee heartland. The volcanic soil and altitude produce beans that consistently rank among the top specialty coffees in the world. You can visit working coffee fincas — Finca Filadelfia, Finca El Injerto — see the full bean-to-cup process and drink coffee grown within sight of the city. The jade shops along 5a Avenida Norte sell pre-Columbian Mayan jade — genuine carved pieces, not tourist trinkets — because Guatemala sits on one of the only jade deposits in the Americas.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Guatemala City" value="45 min" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🌋" label="Volcanoes" value="3 (1 active)" />
              <StatCard icon="💰" label="Budget From" value="$40/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Antigua</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "18–24°C, clear skies, no afternoon rain. The volcanoes are visible every day. November through February is peak season for Acatenango overnight hikes — cold nights at the summit (-5°C) but consistently clear views of Fuego erupting. Semana Santa in March–April is extraordinary but accommodation sells out 12 months ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Semana Santa — Unmissable but Busy",
                  d: "If the week before Easter coincides with your travel dates, come. The processions — thousands of robed penitents carrying ornate 3-tonne floats through streets carpeted in coloured sawdust and flowers — are unlike anything else in the Americas. Book hotels 12 months in advance; prices triple.",
                  b: "Book very early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Oct",
                  i: "🌧️",
                  t: "Wet Season — Still Viable",
                  d: "Rain falls mainly in the afternoons (2–5pm) rather than all day. Mornings are clear. The city is lush and green, tourist crowds thin considerably, and prices drop. Acatenango hikes are more unpredictable — clouds obscure Fuego more often. Still a good time to visit if you plan around the afternoon rain.",
                  b: "Good value",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec",
                  i: "🎄",
                  t: "Christmas — Festive and Crowded",
                  d: "Antigua&apos;s Christmas celebrations are spectacular — posadas (street processions), fireworks every night from December 7, and the city decorated with lanterns and lights. Busy with Guatemalan families and international travellers alike. Accommodation fills quickly — book October at the latest.",
                  b: "Festive season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting to Antigua</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Antigua has no airport. All international flights land at <strong className="font-medium">La Aurora International Airport (GUA)</strong> in Guatemala City, 45 km away. The shared shuttle takes 45–60 minutes and costs Q80–Q160 ($10–$20) per person.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Shared shuttle from GUA airport (recommended)",
                  d: "Shuttle desks operate in the arrivals hall at La Aurora Airport. Shared shuttles to Antigua run throughout the day for Q80–Q120 ($10–$15) per person — 45–60 minutes on the Pan-American Highway. Book at the official shuttle desk in arrivals, not with touts outside. Private car transfers cost Q300–Q465 ($40–$60) for the whole vehicle.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚐",
                  t: "Chicken bus from Guatemala City Zona 4 terminal",
                  d: "Local chicken buses (repurposed American school buses, colourfully painted) run from Guatemala City&apos;s Zona 4 terminal to Chimaltenango, where you change for Antigua. Total journey: 2–3 hours, Q15–Q20 ($2–$3). Authentically local, confusing for first-timers. Fine for budget travellers with time and patience.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "From Lake Atitlán",
                  d: "Shared shuttles run daily between Panajachel (main town on Lake Atitlán) and Antigua — Q80–Q120 ($10–$15), 2.5–3 hours. The most popular tourist route in Guatemala. Book the day before through your hostel or with operators like Atitrans or Turansa.",
                  b: "Popular route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Private transfer or rental car",
                  d: "The GUA–Antigua road (CA-9 then CA-1) is straightforward, mostly motorway. 45 km, 45–60 minutes without traffic. Renting a car makes sense if you plan onward travel to Chichicastenango, Cobán, or the Pacific Coast. Antigua&apos;s cobblestone one-way streets are navigable but narrow.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Antigua Guatemala Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured for the mid-range traveller — budget and luxury notes are included where relevant. Day 3 assumes an Acatenango overnight hike; if you skip it, use the day for a Chichicastenango market trip (Thu/Sun only) or a cooking class.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Parque Central · Arco de Santa Catalina · First Evening"
                cost="Q600–Q1,000 / $75–$130 (transport Q80/$10, hotel Q400/$50, food Q200/$25)"
                items={[
                  "Arrive Guatemala City by air and take the shared shuttle to Antigua — Q80/$10 per person, 45 minutes. The shuttle drops you at your hotel or a central point in the historic centre. If arriving after dark, take a registered yellow tuk-tuk anywhere within the city for Q5–Q10 ($0.65–$1.30).",
                  "Check in and walk immediately to Parque Central — the heart of Antigua, ringed by the Catedral de Santiago ruins, the yellow Palacio de los Capitanes Generales, and the Ayuntamiento. The central La Sirena fountain (1739) is where Antiguans of all ages congregate in the evenings. Sit for 20 minutes and watch the city come alive.",
                  "Walk north on 5a Avenida Norte — the main pedestrian thoroughfare — to the Arco de Santa Catalina. This 17th-century arch connected two sections of the Santa Catalina convent across the street, allowing nuns to cross without being seen in public. Today it frames Volcán Agua perfectly. Go at 5–6pm for warm golden light with almost no tourists — by 9am the next morning there will be tour groups.",
                  "Dinner at Posada de Don Rodrigo on 5a Avenida Norte — traditional Guatemalan cuisine served in a colonial courtyard with marimba music on some evenings. Pepián de pollo (chicken in a pumpkin-seed and dried-chilli mole), hilachas (shredded beef in tomato sauce), and tamales. Mains Q60–Q120 ($8–$15). The most atmospheric first-night dinner choice in Antigua.",
                  "After dinner: one drink on a rooftop. Sky Café on 1a Calle Poniente has 360° views of the three volcanoes with string lights and reasonable prices (Q30/$4 beer). On clear nights you can see Volcán Fuego glowing orange from the terrace.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Colonial Ruins Circuit · La Merced · Cerro de la Cruz · Jade Shops"
                cost="Q400–Q700 / $50–$90 (entries Q200/$25, food Q150/$20, shopping Q150–Q500/$20–$65)"
                items={[
                  "7:00am: Arco de Santa Catalina at sunrise before the crowds arrive. The east-facing arch catches the first warm light. If you did not go at golden hour on Day 1, this is the shot — arrive before 7:30am for the arch almost to yourself.",
                  "8:30am: La Merced Church and ruins — one of the finest surviving baroque facades in Central America, painted yellow and white with extraordinary plateresque stucco work of vines, pomegranates, and corn (the first Guatemalan church to incorporate native Mayan motifs into colonial architecture). Entry to the ruins at the back: Q15/$2. The fountain courtyard inside is the largest colonial fountain in Central America.",
                  "10:00am: Convento Santa Clara ruins (Q25/$3) — a vast ruined convent that feels genuinely abandoned. Trees grow through the vaulted stone passages. Quiet, atmospheric, and usually less crowded than La Merced. One of the most photogenic ruin complexes in Antigua.",
                  "11:00am: Cerro de la Cruz viewpoint — a 30-minute walk uphill north of the centre (or Q15 tuk-tuk). The large stone cross at the summit gives a panoramic view over the entire city with all three volcanoes simultaneously visible on clear days. Free entry.",
                  "12:30pm: Mercado de Artesanías on 4a Calle Oriente — the main artisan market for handwoven Mayan textiles (huipiles, tablecloths, backpacks), carved wood, ceramics, and jade. Prices are negotiable. Budget Q100–Q400 ($13–$52) for a good textile piece.",
                  "Afternoon: Jade shops along 5a Avenida Norte. Guatemala sits on one of the only jade deposits in the Western Hemisphere, and Antigua is the centre of the Guatemalan jade trade. The Jade Maya workshop on 4a Calle Oriente has a free museum explaining pre-Columbian jade carving, with authenticated pieces for sale. Small carved pendants start at Q300/$40, earrings from Q150/$20.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Volcán Acatenango Overnight Hike — Watch Fuego Erupt in Darkness"
                cost="Q420–Q550 / $55–$70 (overnight tour, all-inclusive with gear rental)"
                items={[
                  "This is the defining experience of Antigua — and one of the defining experiences in all of Central America. Volcán Acatenango (3,976m) is the third-highest peak in Guatemala, sitting directly adjacent to active Volcán Fuego, which erupts every 15–20 minutes around the clock. From the Acatenango summit camp you watch Fuego erupt in total darkness — orange lava fountains rising 200 metres above the crater, the sound reaching you seconds later, the sky glowing red. Nothing else comes close.",
                  "Depart Antigua 8am with a certified operator (OX Expeditions, Tropicana Hostel Tours, or Wicho and Charlie&apos;s are the most reputable). Shuttle to La Soledad trailhead (1 hour). The hike up takes 4–5 hours: steep volcanic ash and loose rock on the upper section. A guide leads the group and sets the pace. Gear rental (sleeping bag rated to -10°C, thermal mat, hiking poles) is included with reputable operators.",
                  "Reach the summit camp (3,500m) by 3–4pm. The camp sits on the ridge between Acatenango and Fuego with direct views of the active crater. Watch Fuego erupt as the sky darkens — lava bombs visible, pyroclastic glow illuminating the ash cloud. Camp overnight at this altitude with temperatures of -5°C to 0°C. Hot dinner and tea provided by guides.",
                  "Pre-dawn: wake at 4:30am for the summit push (45 minutes, very steep). Reach the true summit (3,976m) for sunrise above the clouds. On clear mornings both the Pacific Ocean and Guatemala City are visible, with Volcán Agua and Volcán Santa María completing the 360° volcanic panorama. One of the great sunrise viewpoints in the Americas.",
                  "Descend 3 hours to the trailhead, return shuttle to Antigua by midday. Afternoon: shower, eat, recover. Budget: Q420/$55 with basic gear included. Mid-range: Q550/$70 with higher-quality sleeping bags and smaller group sizes.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Coffee Finca · Volcán de Agua Views · Final Wander · Departure"
                cost="Q380–Q600 / $50–$80 (finca Q90/$12, food Q150/$20, transport Q80–Q160/$10–$20)"
                items={[
                  "Morning: Finca Filadelfia coffee farm tour (Q90/$12, 1.5 hours). The closest working coffee estate to Antigua — a 15-minute tuk-tuk ride north of the centre (Q20/$2.50). The tour covers the full bean-to-cup process: shade-grown arabica plants in rows under macadamia canopy, cherry-picking demonstration, wet and dry processing, roasting, and cupping. Antigua sits in a narrow altitude band (1,400–1,700m) producing beans with the specific balance of acidity and body that specialty roasters prize. Drink the freshly roasted coffee at the end.",
                  "Back in town: walk south down 3a Avenida Sur toward the ruins of the Church of San Francisco El Grande — the largest church in colonial Antigua, now partially restored and containing the tomb of Hermano Pedro de Betancurt (beatified by Pope John Paul II in 1980, Guatemala&apos;s patron saint). The garden behind the ruins overlooks the city toward Volcán de Agua to the south.",
                  "Midday: last wander along 5a Avenida Norte for souvenirs. Handwoven worry dolls (muñecas quitapenas, a Guatemalan invention) cost Q5–Q15 each. Single-origin Antigua coffee beans in sealed bags Q50–Q100. A good handwoven huipil from a cooperative Q200–Q600 depending on quality and age.",
                  "Lunch at Café Condesa in the portal of Parque Central — in a colonnaded archway overlooking the plaza, with excellent mango smoothies, tamales, and a classic Guatemalan desayuno (eggs, black beans, plantain, queso fresco). Q60–Q90 / $8–$12.",
                  "Afternoon transfer back to GUA airport (shuttle Q80–Q120 / $10–$15) or continue onward to Lake Atitlán — shuttles depart Antigua 7am and 2pm daily, 2.5–3 hours, Q80/$10. Lake Atitlán is the logical next destination after Antigua and rewards at least two nights.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Antigua Guatemala" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Antigua Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Most ruins charge Q15–Q25 ($2–$3) entry. The combined ruins circuit takes a full day. All are within walking distance of Parque Central.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Arco de Santa Catalina",
                  e: "Free",
                  d: "The most photographed image in Guatemala — a 17th-century convent arch on 5a Avenida Norte framing Volcán Agua behind it. Best at sunrise (warm light, no crowds) or 5–6pm golden hour. This arch is to Antigua what the Eiffel Tower is to Paris: you have to see it, but the magic is entirely in the timing.",
                  t: "Must see · Any time of day",
                },
                {
                  n: "La Merced Church and Ruins",
                  e: "Q15 ($2) for ruins",
                  d: "The finest baroque facade in Antigua — yellow and white plateresque stucco with native Mayan motifs incorporated into the colonial design. The ruined convent at the back contains the largest colonial fountain in Central America (1,500-litre capacity). The church itself is still active — mass on Sunday mornings.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Convento Santa Clara",
                  e: "Q25 ($3)",
                  d: "One of the most atmospheric ruin complexes in Antigua — a huge Dominican convent destroyed in 1773 and never rebuilt. Trees grow through vaulted stone passages. Almost entirely un-restored. Very few tourists compared to La Merced. The feeling of genuine abandonment is stronger here than anywhere else in the city.",
                  t: "Underrated · 45 min",
                },
                {
                  n: "Catedral de Santiago Ruins",
                  e: "Q20 ($2.50)",
                  d: "The ruins of the original cathedral at Parque Central. The facade was rebuilt in the 20th century, but behind it lie the vast original 1545 nave and chapels — destroyed in 1773 and left exactly as they fell. Archaeological excavations are ongoing. The crypt contains the remains of Pedro de Alvarado, the conquistador who founded Antigua.",
                  t: "Historic · 45 min",
                },
                {
                  n: "Cerro de la Cruz",
                  e: "Free",
                  d: "A 30-minute walk north of the city centre (or Q15 tuk-tuk) to a hilltop cross with panoramic views over all of Antigua and all three surrounding volcanoes simultaneously. The view on a clear morning is among the best in Guatemala. Walk in a group or take the tuk-tuk to the base.",
                  t: "Views · 1 hr",
                },
                {
                  n: "Volcán Acatenango (overnight hike)",
                  e: "Q420–Q550 / $55–$70 (overnight tour)",
                  d: "The overnight hike up Acatenango (3,976m) to watch Volcán Fuego erupt in darkness from the summit camp. The single most memorable experience available from Antigua. Book 1–2 days in advance with a reputable operator. See Day 3 of the itinerary for full details.",
                  t: "Life-changing · 24 hrs",
                },
                {
                  n: "Mercado de Artesanías",
                  e: "Free to enter",
                  d: "Antigua&apos;s main artisan market on 4a Calle Oriente, selling handwoven Mayan textiles, huipiles, jade, ceramics, and wood carvings. Less touristy and cheaper than the Parque Central stalls. Best visited mid-morning when the market is fully set up. Prices are negotiable — start at 60% of the asking price.",
                  t: "Shopping · 45 min",
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
            title="Antigua Guatemala — Ruins, Volcanoes &amp; Colonial Streets"
            subtitle="The most beautiful colonial city in the Americas, framed by three volcanoes."
            spots={[
              {
                name: "Arco de Santa Catalina",
                query: "arco santa catalina antigua guatemala yellow arch agua volcano street",
                desc: "The 17th-century yellow arch framing Volcán Agua — the defining image of Antigua and one of the most photographed spots in all of Central America.",
              },
              {
                name: "Volcán Fuego Eruption",
                query: "volcan fuego eruption lava guatemala night acatenango",
                desc: "Volcán Fuego erupting at night as seen from the Acatenango summit camp — orange lava fountains rising above the crater every 15 minutes.",
              },
              {
                name: "La Merced Church",
                query: "la merced church antigua guatemala yellow baroque colonial facade",
                desc: "The finest baroque facade in Antigua — yellow and white plateresque stucco on La Merced Church, incorporating native Mayan motifs into the colonial design.",
              },
              {
                name: "Antigua Cobblestone Streets",
                query: "antigua guatemala cobblestone street colonial buildings colourful pastel houses",
                desc: "Antigua&apos;s cobblestone streets lined with pastel-coloured colonial buildings, bougainvillea-draped walls, and views of the surrounding volcanoes.",
              },
              {
                name: "Coffee Finca Antigua",
                query: "coffee finca plantation antigua guatemala volcano arabica beans harvest",
                desc: "A working coffee estate near Antigua — shade-grown arabica at 1,500m altitude in volcanic soil, producing some of the world&apos;s most celebrated single-origin beans.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Antigua is one of the best-value destinations in Central America. The main cost spike is the Acatenango overnight hike — worth every quetzal. All prices in GTQ (Guatemalan Quetzales) and USD. Exchange rate: approximately Q7.75 = $1 USD.
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
                    ["🚌 Airport shuttle (one way)", "Q80 / $10", "Q80–Q120 / $10–$15", "Q300–Q465 / $40–$60"],
                    ["🏨 Accommodation (per night)", "Q60–Q110 / $8–$14 (dorm)", "Q390–Q620 / $50–$80", "Q1,400+ / $180+"],
                    ["🍽 Food (per day)", "Q60–Q90 / $8–$12", "Q155–Q270 / $20–$35", "Q310–Q465 / $40–$60"],
                    ["🌋 Acatenango overnight hike", "Q420 / $55 (basic)", "Q550 / $70 (quality gear)", "Q620+ / $80+ (private)"],
                    ["🏛️ Ruins entry (3 sites)", "Q60 / $8", "Q115 / $15", "Q115 / $15"],
                    ["☕ Coffee finca tour", "Q90 / $12", "Q90 / $12", "Q155+ / $20+"],
                    ["🗺️ TOTAL (4 days, per person)", "~Q1,240 / ~$160", "~Q2,635 / ~$340", "~Q6,200+ / ~$800+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($40/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm at Jungle Party Hostel (Q60–Q80/night), comedores for meals (pepián Q25–Q35), free ruins walking. Acatenango is the one big spend — skip nothing else.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($85/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique colonial hotel with courtyard (Q390–Q620), dinner at Hector&apos;s Bistro or Fridas, Acatenango with OX Expeditions, coffee finca, guided ruins tour. The sweet spot for Antigua.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($200/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Casa Santo Domingo or Porta Hotel Antigua (Q1,400+), private historian tours, private Pacaya sunset tour, spa treatments, fine dining at Mesón Panza Verde.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Antigua</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Antigua&apos;s hotels are some of the most characterful in Central America — colonial courtyards, tiled floors, bougainvillea walls, and fountain gardens. Even budget options have colonial character. Stay within the centro histórico for walking access to everything.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Casa Santo Domingo",
                  type: "Luxury colonial · Built within a 17th-century Dominican convent",
                  price: "From Q1,400 / $180/night",
                  badge: "Most iconic",
                  desc: "Built within and around the ruins of the 1657 Santo Domingo convent, Casa Santo Domingo is the most extraordinary hotel in Antigua — possibly in Guatemala. Archaeological finds from the original convent are displayed throughout. Colonial courtyards with fountain gardens, an on-site museum, excellent restaurant, and views from the terrace across the illuminated ruins. Book 2–3 months ahead.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Porta Hotel Antigua",
                  type: "Luxury boutique · Multiple colonial courtyards, pool and spa",
                  price: "From Q1,170 / $150/night",
                  badge: "Most polished",
                  desc: "The most professionally run luxury hotel in Antigua — large colonial property with multiple courtyards, swimming pool, spa, and a rooftop bar with volcano views. Excellent service, well-maintained rooms, central location. The reliable five-star choice for travellers who want consistent quality alongside colonial atmosphere.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Posada de Don Rodrigo",
                  type: "Mid-range colonial · 5a Avenida Norte",
                  price: "From Q500 / $65/night",
                  badge: "Best atmosphere",
                  desc: "A genuinely colonial hotel on the main pedestrian street — tiled floors, carved wood furniture, courtyard with marimba music on weekend evenings, and an excellent on-site restaurant serving traditional Guatemalan cuisine. Great location directly on the route to the Arco de Santa Catalina. The most atmospheric mid-range choice in Antigua.",
                  color: "border-rose-200 bg-rose-50",
                },
                {
                  name: "Jungle Party Hostel",
                  type: "Budget hostel · Centro histórico",
                  price: "From Q60 / $8/night (dorm)",
                  badge: "Best budget",
                  desc: "The most popular budget hostel in Antigua — social atmosphere, good rooftop bar, regular movie nights and volcano tour meetups, centrally located. Dorm beds Q60–Q85 ($8–$11), private rooms from Q250 ($32). The natural base for solo travellers organising Acatenango tours. Book ahead in high season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Antigua</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Antigua has an exceptionally good restaurant scene for its size — a mix of traditional Guatemalan cuisine, international food, and the kind of quality that emerges when a large expat and language-student population creates sustained demand. The best comedores serve full meals for Q25–Q40 ($3–$5).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hector's Bistro",
                  t: "Modern Guatemalan fusion · 1a Calle Poniente",
                  d: "Widely regarded as the best restaurant in Antigua — a small, intimate bistro serving contemporary interpretations of Guatemalan and Central American ingredients. The rabbit in jocón sauce and beef tenderloin with chaya chimichurri are exceptional. Reservations essential. Mains Q150–Q250 ($20–$32). Closed Tuesdays. One of those restaurants that justifies flying to a country.",
                  b: "Best in Antigua",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Fridas",
                  t: "Mexican-Guatemalan · 5a Avenida Norte",
                  d: "A lively, colourful restaurant on the main pedestrian street — good margaritas, fresh guacamole, excellent tacos and enchiladas. Very popular with travellers and expats. The rooftop terrace is one of the best spots for lunch in the city with volcano views. Mains Q80–Q150 ($10–$19). Loud and social in the evenings — good for solo travellers who want company.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Posada de Don Rodrigo Restaurant",
                  t: "Traditional Guatemalan · 5a Avenida Norte",
                  d: "The most authentic traditional Guatemalan dining experience in Antigua. Pepián de pollo, hilachas, kak&apos;ik (a Mayan turkey broth), and tamales — all properly made, served in a colonial courtyard with marimba music on weekends. Q80–Q120 ($10–$15) for a full meal. This is the food Guatemalans actually eat.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Comedor local (almuerzo del día)",
                  t: "Budget canteen · Throughout the city",
                  d: "The blue-plate lunch at any comedor in the market or residential streets: soup, main course (pollo guisado or carne asada), rice and black beans, tortillas, and a drink for Q25–Q40 ($3–$5). Ask for the almuerzo — it&apos;s often not on a written menu. The comedores in and around the Mercado Central on Alameda de Santa Lucía are particularly good.",
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
            destination="Antigua Guatemala"
            hotels={[
              {
                name: "Casa Santo Domingo",
                type: "Luxury · Built within 17th-century Dominican convent ruins",
                price: "From $180/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/gt/casa-santo-domingo-antigua.html?aid=2820480",
              },
              {
                name: "Porta Hotel Antigua",
                type: "Luxury boutique · Colonial courtyards, pool and spa",
                price: "From $150/night",
                rating: "5",
                badge: "Most polished",
                url: "https://www.booking.com/hotel/gt/porta-hotel-antigua.html?aid=2820480",
              },
              {
                name: "Posada de Don Rodrigo",
                type: "Mid-range colonial · 5a Avenida Norte, marimba evenings",
                price: "From $65/night",
                rating: "4",
                badge: "Best atmosphere",
                url: "https://www.booking.com/hotel/gt/posada-de-don-rodrigo-antigua.html?aid=2820480",
              },
              {
                name: "Jungle Party Hostel",
                type: "Budget hostel · Social, volcano tour meetups, rooftop bar",
                price: "From $8/night (dorm)",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gt/jungle-party-hostel-antigua.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Volcán Acatenango Overnight Hike",
                duration: "24 hrs",
                price: "From $55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=acatenango+overnight+hike+antigua&partner_id=PSZA5UI",
              },
              {
                name: "Antigua Colonial Walking Tour",
                duration: "3 hrs",
                price: "From $20/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=antigua+guatemala+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Coffee Finca Tour and Tasting",
                duration: "2 hrs",
                price: "From $15/person",
                badge: "Unique",
                url: "https://www.getyourguide.com/s/?q=antigua+guatemala+coffee+farm+tour&partner_id=PSZA5UI",
              },
              {
                name: "Volcán Pacaya Sunset Hike",
                duration: "5 hrs",
                price: "From $20/person",
                url: "https://www.getyourguide.com/s/?q=volcan+pacaya+antigua+hike&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Antigua</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📅",
                  title: "Not booking Semana Santa accommodation 12 months ahead",
                  desc: "Semana Santa (Holy Week, the week before Easter) is the most important event in Antigua. Hotels in the historic centre sell out 12 months in advance and prices triple. If you want to attend, book in October or November the year before — there are no exceptions to this rule.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌋",
                  title: "Booking Acatenango without proper gear preparation",
                  desc: "Volcán Acatenango (3,976m) drops to -5°C at night. Tourists who book last-minute without renting proper gear — sleeping bag rated to -10°C, thermal layers, waterproof jacket — are genuinely cold and miserable. Use a reputable operator like OX Expeditions who includes quality gear rental in the Q550/$70 price.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💧",
                  title: "Drinking tap water",
                  desc: "Never drink tap water in Guatemala, including in Antigua. Buy 5-litre garrafones from any tienda for Q5 (~$0.65), or bring a filtered water bottle (LifeStraw, Sawyer). This single precaution eliminates the most common cause of traveller illness in Guatemala.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚕",
                  title: "Taking unofficial taxis from the bus terminal",
                  desc: "The shuttle and bus drop-off in Antigua attracts unofficial taxis at 3–4x the going rate. Official tuk-tuk fare anywhere within the city: Q5–Q10 ($0.65–$1.30). Always agree the price before getting in. Use registered yellow tuk-tuks with clearly marked tariff sheets.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗓️",
                  title: "Missing the Chichicastenango market days",
                  desc: "Chichicastenango market operates only on Thursdays and Sundays — the largest indigenous market in Central America. Plan your Antigua itinerary around one of those days if you want to visit. A 2-hour shuttle ride for a closed market is an avoidable and very frustrating mistake.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏨",
                  title: "Staying outside the centro histórico",
                  desc: "Antigua is designed to be walked. Staying outside the UNESCO-protected historic centre to save Q50–Q100/night means missing the most atmospheric part of the city and needing tuk-tuks for everything. The streets inside the centro histórico are where everything happens — pay a little more and stay inside them.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Antigua</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🇪🇸",
                  title: "Take Spanish classes — even for 2 days",
                  desc: "Antigua is the world capital of Spanish language learning. Private one-on-one instruction with a fully qualified teacher costs Q45–Q75/hour ($6–$10) — the cheapest and highest-quality Spanish tuition anywhere on earth. Even 2 days of 4-hour daily lessons will transform your Guatemala experience. Schools: Proyecto Lingüístico Francisco Marroquín, Centro Lingüístico Maya.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📸",
                  title: "Arco de Santa Catalina: sunrise beats golden hour",
                  desc: "Both sunrise and 5–6pm golden hour give excellent light on the Arco. But sunrise (6:30–7:30am) gives you the arch almost entirely to yourself — by 9am there are tour groups. The east-facing arch catches warm morning light on its face. Stand at the south end of 5a Avenida Norte, portrait orientation, arch in foreground, Volcán Agua centred in the gap.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍫",
                  title: "Guatemala produces world-class chocolate and coffee",
                  desc: "Volcanic soil produces exceptional cacao and arabica. Visit ChocoMuseo (free entry to showroom) for the pre-Columbian chocolate history, or take a chocolate-making class (Q195/$25). For coffee, Finca Filadelfia is the easiest finca tour from town. Antigua-grown single-origin beans (Q50–Q100/$6–$13 for 250g) are the best souvenir you can take home.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🧵",
                  title: "Buy textiles from cooperatives, not market stalls",
                  desc: "The finest handwoven Mayan huipiles come from cooperatives in San Juan La Laguna (accessible on a day trip via Lake Atitlán). Buying direct from the weaver pays full value to the maker and means you get an authentic hand-woven piece, not a machine-made copy. Ask: ¿Es hecho a mano? ¿Por quién fue tejido? (Is it handmade? Who wove it?)",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌙",
                  title: "Fuego is brightest at night",
                  desc: "Volcán Fuego&apos;s eruptions are visible from multiple spots in Antigua — the rooftop of any tall building will do. But the lava glow is only truly visible in darkness. The best views from Antigua itself: the rooftop of Sky Café on 1a Calle Poniente, or the hill behind Cerro de la Cruz after sunset. From the Acatenango camp: incomparable.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💱",
                  title: "Use quetzales, not dollars, for local purchases",
                  desc: "Although many tourist businesses in Antigua accept USD, you will get a worse exchange rate than paying in quetzales. Withdraw GTQ from ATMs at Banco Industrial or BAC on Parque Central — they have the best rates and lowest fees for foreign cards. The official rate is approximately Q7.75 = $1 USD. Market vendors and comedores only accept quetzales.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Antigua Guatemala" />

          {/* Combine With */}
          <CombineWith currentSlug="antigua-guatemala-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Guatemala?",
                  a: "Yes, Indian passport holders need a visa for Guatemala. Apply at the nearest Guatemalan embassy or consulate — there are offices in New Delhi and Mumbai. The fee is approximately $30 USD and processing takes 5–10 business days. Guatemala is part of the CA-4 agreement, meaning one approved visa covers Guatemala, Honduras, El Salvador, and Nicaragua for a combined 90 days in the region.",
                },
                {
                  q: "How do I get from Guatemala City airport to Antigua?",
                  a: "The easiest option is a shared shuttle from the arrivals hall at La Aurora Airport (GUA) — Q80–Q120 ($10–$15) per person, 45–60 minutes to Antigua. Shuttle desks are in arrivals; book at the official counter, not with touts outside. Private transfers cost Q300–Q465 ($40–$60) for the whole car. Avoid the chicken bus from Guatemala City&apos;s main terminal — the connection is confusing and the Q15 saving is not worth the 2–3 hours added.",
                },
                {
                  q: "Is Antigua safe for solo travellers?",
                  a: "Antigua is one of the safer cities in Central America and is very popular with solo travellers. The centro histórico is well-patrolled and tourist-friendly. Main precautions: don&apos;t walk outside the city centre after dark (take a yellow tuk-tuk instead), don&apos;t display expensive cameras or jewellery on the street, and use established tour operators for volcano hikes rather than freelance guides who approach you on the street.",
                },
                {
                  q: "How hard is the Acatenango overnight hike?",
                  a: "Moderate to difficult. The total elevation gain is approximately 1,400m from the trailhead (2,400m) to the summit camp (3,500m) and summit (3,976m). The lower section through cloud forest is steep but manageable. The upper section is very steep on loose volcanic ash. Fitness level: you should be able to walk uphill for 4–5 hours continuously. The key challenge is not the gradient but the altitude — take it slowly above 3,000m. Most reasonably fit travellers complete it without difficulty.",
                },
                {
                  q: "What is the best time of year to visit Antigua?",
                  a: "November through April (dry season) is the best time for most travellers — clear skies, mild temperatures, and consistent volcano views. The absolute best window for the Acatenango overnight hike is December to February when nights are clear and the Fuego lava glow is most dramatic. Semana Santa (Holy Week, March or April) is extraordinary but requires booking accommodation 12 months in advance.",
                },
                {
                  q: "Can you do a day trip to Lake Atitlán from Antigua?",
                  a: "Yes, though a full day feels rushed. Shuttles depart Antigua at 7am and 2pm (Q80/$10, 2.5–3 hours to Panajachel). A day trip gives you 3–4 hours on the lake — enough for a boat ride to one village. Most travellers who do Antigua and Atitlán together spend 4 days in Antigua and 2–3 nights at the lake, rather than day-tripping. The lake rewards at least one overnight stay.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Antigua Guatemala trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-antigua-guatemala", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/antigua-guatemala-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/acatenango-overnight-hike-guide", label: "Acatenango guide", icon: "🌋" },
                { href: "/blog/semana-santa-antigua-guide", label: "Semana Santa guide", icon: "📋" },
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
          <RelatedGuides currentSlug="antigua-guatemala-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Costa Rica 7 Days — Rainforest &amp; Wildlife", href: "/blog/costa-rica-7-days" },
                { label: "Cartagena 4 Days — Caribbean Colonial", href: "/blog/cartagena-4-days" },
                { label: "Havana Cuba 4 Days — Revolution &amp; Rum", href: "/blog/havana-cuba-4-days" },
                { label: "Mexico City 4 Days — History &amp; Street Food", href: "/blog/mexico-city-4-days" },
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
