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
const OAXACA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Oaxaca Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Oaxaca 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Oaxaca in 4 Days — mole, mezcal, Monte Albán and Día de los Muertos&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/oaxaca-4-days"
        imageUrl="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80"
        description="Oaxaca in 4 Days: Monte Albán ruins, mole negro, mezcal tastings, Hierve el Agua and Día de los Muertos — complete travel guide with budget breakdown."
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
export default function OaxacaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={OAXACA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Oaxaca" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="oaxaca mexico monte alban ruins colonial streets mole food"
            fallback="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600&q=80"
            alt="Oaxaca Mexico colonial streets with colorful buildings and Monte Albán ruins"
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
              <span className="text-white/70">Oaxaca 4 Days</span>
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
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Oaxaca in 4 Days:
                <em className="italic text-amber-300"> Mole, Mezcal &amp; Monte Alb&aacute;n</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                30-ingredient mole negro, Zapotec pyramids on a mountaintop, mezcal that shames tequila, and D&iacute;a de los Muertos that will change you. The complete 4-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="17 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇽 Oaxaca, Mexico</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The most complex cuisine in Mexico, in a city where every meal takes four hours and the mole negro has 30 ingredients; D&iacute;a de los Muertos celebrations that make Halloween look timid; Monte Alb&aacute;n&apos;s Zapotec pyramids on a mountaintop with the entire valley spread 400 metres below you; and a mezcal culture so sophisticated it makes tequila feel like a tourist drink.
            </p>
          </blockquote>

          {/* ── WHAT OAXACA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Oaxaca Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Oaxaca is the cultural capital of Mexico. Not the political capital, not the financial capital — the cultural one. It sits at 1,550 metres in a high valley surrounded by the Sierra Norte and Sierra Sur mountains, a geography that isolated it for centuries and allowed its indigenous Zapotec and Mixtec cultures to survive Spanish colonisation more intact than almost anywhere else in the Americas.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The result is a city where 30-ingredient mole negro is an everyday dish, where mezcal isn&apos;t a trendy spirit but a 400-year-old village tradition, where the Guelaguetza festival brings 16 indigenous communities together in dance every July, and where D&iacute;a de los Muertos (November 1&ndash;2) is celebrated with marigold-carpeted altars, candlelit cemetery processions, and mezcal poured for the dead in a way that feels ancient and completely alive.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Above the city, Monte Alb&aacute;n — the Zapotec capital dating from 500 BC — sits on a flattened mountaintop with the entire Valley of Oaxaca visible 400 metres below. An hour east, Hierve el Agua&apos;s petrified waterfalls cascade off a cliff edge into natural infinity pools. Between them: weaving villages, mezcal distilleries, and some of the best food markets in the Western Hemisphere. Four days is barely enough, but it&apos;s a start.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="OAX" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Apr" />
              <StatCard icon="🏛️" label="UNESCO Site" value="Monte Albán" />
              <StatCard icon="💰" label="Budget From" value="$45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Oaxaca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Overall",
                  d: "18–28°C, clear skies, comfortable for walking the colonial centre and visiting ruins. November is the standout month — Día de los Muertos (November 1–2) transforms the city with marigold altars, candlelit cemetery processions, and mezcal poured for the dead. Book accommodation 6 months ahead for late October and early November.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul",
                  i: "🌺",
                  t: "Guelaguetza Festival",
                  d: "Late July brings Oaxaca\u0027s biggest annual event — indigenous communities from all 8 regions dance in traditional dress. The main stadium show costs $30–80 but free viewings happen at Cerro del Fortín. Rainy season but mornings are usually clear. Hotels are expensive and busy.",
                  b: "Festival season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Sep",
                  i: "🌧️",
                  t: "Rainy Season — Budget Friendly",
                  d: "Daily afternoon rain (usually 2–4 hours) but mornings are clear and warm. Prices drop 30–40% across the board. Monte Albán and Hierve el Agua are lush and green. The city empties of tourists — restaurants are easier to book, markets less hectic. Viable and often beautiful.",
                  b: "Budget option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Jan",
                  i: "🎄",
                  t: "Holiday Season — Busy but Festive",
                  d: "Pleasant weather (16–25°C) and Mexican holiday crowds — Oaxaca is a top domestic destination for Christmas and New Year. Radish Night (Noche de Rábanos, December 23) is a unique Oaxacan tradition: intricate sculptures carved from oversized radishes. Book ahead for this period.",
                  b: "Festive",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Oaxaca</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Oaxaca&apos;s airport is <strong className="font-medium">Xoxocotl&aacute;n International (OAX)</strong>, 7km south of the city centre. Most international travellers connect via Mexico City (MEX). Direct flights from the US are limited but growing — Houston and LA have seasonal routes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flight from Mexico City (recommended)",
                  d: "MEX → OAX: 1 hour, from ~$40–80 one-way on Aeromexico or Volaris. Multiple daily flights. By far the fastest and most convenient option. From OAX airport to the city centre: taxi ~$10 or colectivo shuttle ~$3.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Overnight bus from Mexico City",
                  d: "ADO first-class bus from TAPO terminal in Mexico City: 7–8 hours, $25–40. Surprisingly comfortable with reclining seats, blankets, and on-board entertainment. Departs evening, arrives early morning — saves a night of accommodation. Book via the ADO app.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Direct from US cities",
                  d: "United flies Houston IAH → OAX seasonally. American Airlines runs Dallas DFW → OAX on select days. Volaris Connect offers LA → OAX. Availability varies by season — check for winter schedule (Nov–Mar) when most routes operate.",
                  b: "Growing options",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Mexico City or Puebla",
                  d: "Mexico City → Oaxaca via Highway 135D: 460km, 5–6 hours through dramatic mountain scenery. Toll costs approximately MXN 600 ($35). The final descent into the Oaxaca valley is spectacular. Rent a car only if you plan day trips to surrounding villages.",
                  b: "Scenic route",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Oaxaca Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances the major archaeological sites, food markets, mezcal culture, and the surrounding villages. Prices in MXN and USD where helpful.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Centro Histórico · Santo Domingo · First Mole"
                cost="$25–35 (budget) / $60–80 (mid-range)"
                items={[
                  "Arrive at OAX airport or by overnight ADO bus from Mexico City. Taxi to city centre ~$10, or colectivo shuttle ~$3. Check in to your accommodation in the historic centre — the colonial neighbourhood is extremely walkable.",
                  "Walk the Zócalo (main plaza) and its portico arches. Sit and observe the morning life over a tejate — the pre-Hispanic cold chocolate-corn drink sold by women in traditional dress, MXN 25 ($1.50).",
                  "Visit the Templo de Santo Domingo de Guzmán (free entry). The gold-encrusted baroque interior is one of the finest in all of Mexico — 60,000 sheets of 23.5-carat gold leaf cover the ceiling and walls. The attached Museo de las Culturas de Oaxaca (MXN 90 / $5, free Sundays) houses spectacular gold Mixtec jewellery from Monte Albán Tomb 7.",
                  "Lunch at Mercado 20 de Noviembre — the city\u0027s best food market. Head to the pasillo de humo (smoke corridor) where vendors grill tasajo, cecina, and chorizo over charcoal. A full plate with tortillas, black beans, and salsa costs MXN 80–120 ($5–7).",
                  "Afternoon: wander the Andador Macedonio Alcalá, the pedestrian art street linking the Zócalo to Santo Domingo. Browse galleries, street art, and artisan shops — no cars, purely walking.",
                  "Dinner: mole negro at a traditional comedor near Mercado Benito Juárez. The real 30-ingredient version — chocolate, chilhuacle negro chili, plantain, avocado leaf, and 26 other ingredients ground together. MXN 100–140 ($6–8).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Monte Albán Ruins · Mezcal Tasting · Tlayuda Night"
                cost="$20–30 (budget) / $55–75 (mid-range)"
                items={[
                  "Colectivo to Monte Albán leaves from Mina 518 near Hotel Rivera del Ángel (~MXN 70 return / $4 + MXN 90 entry / $5). Buses depart at 8:30am, 9:30am, 10:30am — take the earliest.",
                  "Monte Albán UNESCO World Heritage Site: the Zapotec capital dating from 500 BC, built on a flattened mountaintop. The Main Plaza, the observatory (Building J), the ball court, and the carved stone Danzantes (dancers depicting sacrificial victims or medical conditions — scholars still debate). The site is vast and uncrowded in the early morning.",
                  "Climb the North Platform for the best panorama — the entire Valley of Oaxaca visible 400 metres below, with the Sierra Norte mountains in the distance. This is one of the most dramatic archaeological views in the Americas.",
                  "Return by midday. Lunch at a market comedor before afternoon activities — enfrijoladas (tortillas in black bean sauce) or memelas with salsa, MXN 50–80.",
                  "Afternoon mezcal tasting: walk south of the Zócalo along García Vigil and Murguía — multiple mezcalerías offer free introductory pours as standard. For a curated experience, visit In Situ Mezcalería (MXN 200–400 / $12–25 for a guided tasting of single-village, small-batch producers).",
                  "Evening: tlayuda from a street stall or Tlayudas Libres on Libres Street — the giant Oaxacan pizza-style flatbread with black beans, quesillo cheese, asiento (pork lard), and choice of meat, grilled over charcoal. MXN 60–100 ($4–6).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hierve el Agua · Teotitlán del Valle · El Tule Tree"
                cost="$25–35 (budget) / $70–90 (mid-range)"
                items={[
                  "Join a shared colectivo day tour to Hierve el Agua (~$15–20 including transport and entry) or arrange colectivos individually from the second-class bus station ($5 each way + MXN 50 entry / $3).",
                  "Hierve el Agua: petrified waterfall mineral formations — calcium carbonate deposits that have solidified into frozen cascades over thousands of years. Natural infinity pools on the cliff edge with views across the valley. Swim in warm mineral water at the top; hike down to see the formations from below (30 minutes each way).",
                  "En route: stop at Teotitlán del Valle, the Zapotec weaving village. Family-run workshops where Zapotec women weave traditional tapetes (rugs) using natural dyes — cochineal red from dried cactus beetles, indigo blue, and marigold yellow. Buying a hand-woven rug directly from the weaving family costs MXN 400–800 ($25–50) and supports livelihoods directly.",
                  "Also stop at Santa María del Tule to see El Tule Tree — a 2,000-year-old Montezuma cypress with the widest tree trunk in the world (14 metres diameter). Free entry to the churchyard, MXN 10 to enter the inner enclosure.",
                  "Return to Oaxaca by 5pm. Evening: mezcal cocktail at a rooftop bar near Santo Domingo — Los Amantes or Sabina Sabe, MXN 120–180 ($7–11) per cocktail.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Benito Juárez Market · Chocolate · Mitla Ruins · Farewell Mole"
                cost="$20–30 (budget) / $50–70 (mid-range)"
                items={[
                  "Morning: browse Mercado Benito Juárez for edible souvenirs. Vacuum-packed mole paste (negro, rojo, coloradito, amarillo) at MXN 80–140 ($5–8) each — the same products cost $18–25 at the airport. Chapulines (roasted grasshoppers with chili and lime), mezcal minis, Oaxacan chocolate tablets.",
                  "Visit Chocolate Mayordomo on Calle Mina — watch cacao beans ground with sugar and cinnamon on a traditional stone metate. Buy a tablet for MXN 50 ($3) or drinking chocolate for gifts.",
                  "Optional morning trip: colectivo to Mitla ruins (MXN 70 return / $4 + MXN 90 entry / $5). Mitla\u0027s Zapotec palace has the most intricate stone mosaic decoration in Mesoamerica — geometric fretwork patterns fitted together without mortar. Completely different from Monte Albán and far less visited.",
                  "Farewell lunch: mole combinado (tasting platter of all 7 Oaxacan moles) at Mercado 20 de Noviembre, MXN 130–180 ($8–11). Negro, rojo, coloradito, amarillo, verde, chichilo, and manchamanteles — each distinct, each requiring a different meat pairing.",
                  "Afternoon departure from OAX airport or colectivo to the ADO bus station for an overnight return to Mexico City.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Oaxaca" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark &amp; Ruins Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in and around Oaxaca, in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Monte Albán",
                  e: "MXN 90 ($5)",
                  d: "The Zapotec capital, occupied from 500 BC to 750 AD, built on a flattened mountaintop. The Main Plaza, Building J (astronomical observatory), the ball court, and the Danzantes gallery. The North Platform offers a 360-degree panorama of the entire Valley of Oaxaca. Allow 2–3 hours minimum. Arrive early to avoid midday heat and tour groups.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Hierve el Agua",
                  e: "MXN 50 ($3)",
                  d: "Petrified waterfall mineral formations on a cliff edge with natural infinity pools. The calcium carbonate deposits have built up over millennia into frozen cascades. Swim in the pools at the top, then hike down (30 min) to photograph the formations from below. Best visited early morning before tour groups arrive.",
                  t: "Must see · 3–4 hrs with travel",
                },
                {
                  n: "Templo de Santo Domingo",
                  e: "Free",
                  d: "The most ornate church interior in Mexico — 60,000 gold leaf sheets covering the baroque ceiling and walls. The attached Museo de las Culturas (MXN 90, free Sundays) holds the gold Mixtec jewellery from Monte Albán Tomb 7, including a gold pectoral mask that is one of the masterpieces of pre-Columbian art.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Mitla",
                  e: "MXN 90 ($5)",
                  d: "Zapotec palace with the most intricate stone mosaic decoration in Mesoamerica — thousands of precisely cut stone pieces fitted together without mortar into geometric fretwork patterns. Completely different from Monte Albán in style and atmosphere. Far fewer visitors. 45 minutes from Oaxaca by colectivo.",
                  t: "Highly recommended · 1.5 hrs",
                },
                {
                  n: "Teotitlán del Valle",
                  e: "Free",
                  d: "The premier Zapotec weaving village. Family workshops demonstrate the entire process — carding, spinning, natural dyeing with cochineal and indigo, and weaving on backstrap and pedal looms. Buying direct supports families and costs the same as city shops. Most workshops welcome visitors without appointment.",
                  t: "Cultural highlight · 2 hrs",
                },
                {
                  n: "Mercado 20 de Noviembre",
                  e: "Free",
                  d: "Oaxaca\u0027s greatest food market. The pasillo de humo (smoke corridor) where meats are grilled to order over charcoal is the essential Oaxacan eating experience. Also the best place to try all 7 moles as a combinado plate. Busiest at lunchtime — arrive by 11:30am for the best experience.",
                  t: "Must eat · 1–2 hrs",
                },
                {
                  n: "El Tule Tree",
                  e: "MXN 10",
                  d: "A 2,000-year-old Montezuma cypress with the widest tree trunk in the world at 14 metres diameter. The circumference is 42 metres. Located in the churchyard at Santa María del Tule, 14km east of Oaxaca. Usually combined with the Hierve el Agua or Mitla day trip.",
                  t: "Quick stop · 30 mins",
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
            title="Oaxaca — Ruins, Mole &amp; Mezcal"
            subtitle="Zapotec heritage, world-class cuisine, and Mexico&apos;s most colourful colonial city."
            spots={[
              {
                name: "Monte Albán Main Plaza",
                query: "monte alban ruins oaxaca mexico zapotec pyramid archaeological site",
                desc: "The Zapotec capital on a flattened mountaintop — one of the earliest cities in Mesoamerica, with the entire Valley of Oaxaca spread below.",
              },
              {
                name: "Hierve el Agua Petrified Waterfalls",
                query: "hierve el agua oaxaca petrified waterfall mineral springs cliff",
                desc: "Calcium carbonate deposits frozen into waterfall formations on a cliff edge, with natural infinity pools overlooking the valley.",
              },
              {
                name: "Santo Domingo Church Interior",
                query: "santo domingo church oaxaca gold baroque interior mexico colonial",
                desc: "60,000 gold leaf sheets covering the baroque ceiling — the most ornate church interior in Mexico.",
              },
              {
                name: "Oaxaca Mole Negro",
                query: "oaxaca mole negro traditional food market mexico cuisine",
                desc: "The queen of Oaxacan moles — 30 ingredients including chilhuacle negro, chocolate, plantain, and avocado leaf, ground together over hours.",
              },
              {
                name: "Teotitlán del Valle Weaving",
                query: "teotitlan del valle zapotec weaving oaxaca textile natural dye",
                desc: "Zapotec weavers in Teotitlán del Valle using natural dyes — cochineal red, indigo blue, marigold yellow — on traditional looms.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Oaxaca is one of Mexico&apos;s best-value destinations. Market meals cost $3–7, mezcal tastings are often free, and colectivos connect every ruin and village for $2–5. The main budget variables are accommodation level and restaurant choices.
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
                    ["🏨 Accommodation", "$12–18/night", "$55–75/night", "$150–250/night"],
                    ["🍽 Food (per day)", "$15–20", "$30–45", "$80–120"],
                    ["🚌 Transport (per day)", "$5–8", "$10–18", "$30–50"],
                    ["🏛️ Activities (per day)", "$8–15", "$25–40", "$80–120"],
                    ["🥃 Mezcal budget", "$5–10", "$15–30", "$40–60"],
                    ["TOTAL (per day)", "$45/day", "$95/day", "$230/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($45/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms on Calle García Vigil ($12–18/night), market meals at Mercado 20 de Noviembre and comedores, colectivos everywhere. Oaxaca&apos;s budget infrastructure is excellent — this is comfortable, not spartan.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($95/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique guesthouse in a converted colonial mansion ($55–75/night), mix of market meals and quality restaurants, guided tours and a cooking class. The sweet spot for most travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($230/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Casa Oaxaca or Quinta Real ($150–250/night), fine dining at Criollo and Pitiona, private guides, mezcal sommelier sessions, and cooking classes with renowned chefs.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Oaxaca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in the Centro Histórico. Everything — markets, churches, restaurants, galleries — is within walking distance. The colonial centre is compact and safe, and being able to walk home after a mezcal tasting is worth the slightly higher room rate.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Quinta Real Oaxaca",
                  type: "Luxury · Converted 16th-century convent",
                  price: "From $180/night",
                  badge: "Most luxurious",
                  desc: "A former convent of Santa Catalina de Siena, converted into a five-star hotel with colonial courtyards, a swimming pool, and one of the finest restaurants in the city. The architecture alone is worth the stay — stone arches, frescoed walls, and 500 years of history.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Casa de las Bugambilias",
                  type: "Mid-range boutique · Centro Histórico",
                  price: "From $65/night",
                  badge: "Best value boutique",
                  desc: "A lovingly restored colonial house with bougainvillea-draped courtyard, individually decorated rooms, and a rooftop terrace with views of Santo Domingo. Family-run with genuine warmth. Walking distance to everything. The best-value boutique stay in the historic centre.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Casa Oaxaca",
                  type: "Luxury boutique · Near Santo Domingo",
                  price: "From $150/night",
                  badge: "Chef\u0027s hotel",
                  desc: "The original Oaxaca boutique hotel, owned by chef Alejandro Ruiz. Minimalist colonial design, rooftop pool, and the attached restaurant serves some of the best modern Oaxacan cuisine in the city. Small and intimate — book well ahead.",
                  color: "border-rose-200 bg-rose-50",
                },
                {
                  name: "Hostal Casa del Sol",
                  type: "Budget · Near Zócalo",
                  price: "From $12/night (dorm)",
                  badge: "Best budget",
                  desc: "Clean, social hostel with a rooftop terrace, shared kitchen, and excellent location near the Zócalo. Dorms from $12 and private rooms from $35. The staff organise free walking tours and mezcal nights. The best backpacker base in Oaxaca.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Oaxaca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Oaxaca is widely considered to have the most complex regional cuisine in Mexico — seven distinct moles, tlayudas, chapulines, mezcal pairings, and a food market culture that rivals anywhere in Latin America. You will not have a bad meal here if you stay within the markets and the established restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Los Danzantes",
                  t: "Fine dining · Santo Domingo courtyard",
                  d: "Traditional Oaxacan cuisine elevated to fine-dining standards in a beautiful colonial courtyard beside Santo Domingo. The mole negro is exceptional, the mezcal list is one of the best in the city, and the atmosphere at dinner is romantic without being stuffy. Mains MXN 250–450 ($15–27). Reservations recommended.",
                  b: "Best dinner",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Casa Oaxaca Restaurant",
                  t: "Modern Oaxacan · Chef Alejandro Ruiz",
                  d: "Chef Alejandro Ruiz\u0027s flagship — one of the most celebrated restaurants in southern Mexico. Modern interpretations of traditional dishes using hyper-local ingredients. The tasting menu ($45–60) is the best way to experience the range. Book days ahead in high season.",
                  b: "Most celebrated",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Mercado 20 de Noviembre",
                  t: "Market food · Pasillo de humo",
                  d: "The smoke corridor (pasillo de humo) where tasajo, cecina, and chorizo are grilled to order over charcoal is the quintessential Oaxacan eating experience. Point at what you want, it arrives on a plate with tortillas, beans, and all 7 salsas. MXN 80–150 ($5–9). Best at lunchtime.",
                  b: "Must eat",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Tlayudas Libres",
                  t: "Street food · Calle Libres",
                  d: "The best tlayudas in the city — giant thin tortillas grilled over charcoal with black beans, quesillo cheese, asiento (pork lard), and your choice of meat. A complete meal for MXN 60–100 ($4–6). Open evenings only. The queue is normal and worth it.",
                  b: "Best street food",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Oaxaca Mexico"
            hotels={[
              {
                name: "Quinta Real Oaxaca",
                type: "Luxury · Converted 16th-century convent",
                price: "From $180/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/mx/quinta-real-oaxaca.html?aid=2820480",
              },
              {
                name: "Casa Oaxaca",
                type: "Boutique luxury · Near Santo Domingo",
                price: "From $150/night",
                rating: "5",
                badge: "Chef\u0027s hotel",
                url: "https://www.booking.com/hotel/mx/casa-oaxaca.html?aid=2820480",
              },
              {
                name: "Casa de las Bugambilias",
                type: "Boutique · Centro Histórico",
                price: "From $65/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/mx/casa-de-las-bugambilias-oaxaca.html?aid=2820480",
              },
              {
                name: "Hostal Casa del Sol",
                type: "Budget hostel · Near Zócalo",
                price: "From $12/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/mx/hostal-casa-del-sol-oaxaca.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Monte Albán Guided Tour",
                duration: "4 hrs",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=monte+alban+oaxaca+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hierve el Agua & Mezcal Day Trip",
                duration: "10 hrs",
                price: "From $35/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=hierve+el+agua+oaxaca&partner_id=PSZA5UI",
              },
              {
                name: "Oaxaca Cooking Class",
                duration: "4 hrs",
                price: "From $55/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=oaxaca+cooking+class+mole&partner_id=PSZA5UI",
              },
              {
                name: "Mezcal Distillery Tour",
                duration: "6 hrs",
                price: "From $40/person",
                url: "https://www.getyourguide.com/s/?q=oaxaca+mezcal+distillery+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Oaxaca</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🗓️",
                  title: "Not booking Día de los Muertos accommodation 6 months ahead",
                  desc: "Oaxaca\u0027s Día de los Muertos (November 1–2) is the most atmospheric in Mexico. Every hotel in the city is sold out by June for those dates. If this is your main reason for visiting, book accommodation and flights the moment you decide — there is no such thing as booking too early.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥃",
                  title: "Only drinking mezcal in tourist bars",
                  desc: "The mezcal sold in airport-facing bars is often industrial or overpriced. The real experience is at a palenque (distillery) in Santiago Matatlán or with a knowledgeable guide. A $25 bottle bought direct from a producer in Matatlán beats an $80 bar pour. Visit In Situ or El Destilado in the city for curated, single-village expressions.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍫",
                  title: "Buying mole paste or chocolate at the airport",
                  desc: "Mercado Benito Juárez sells vacuum-packed mole paste (negro, rojo, coloradito, amarillo) at MXN 80–140 ($5–8) each. The same products cost $18–25 at airport gift shops. Buy your edible souvenirs at the market — they survive international travel in checked luggage perfectly.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚌",
                  title: "Skipping the colectivo system",
                  desc: "Shared colectivos (minivans) connect Oaxaca city to every village and ruin site for MXN 35–90 ($2–5) each way. Tourists default to expensive tours or private taxis. Taking a colectivo to Monte Albán costs MXN 70 return ($4); a private taxi costs $25–30. The colectivo is often faster and puts you alongside locals.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🦗",
                  title: "Refusing to try chapulines (grasshoppers)",
                  desc: "Chapulines — roasted grasshoppers seasoned with chili, lime, and garlic — are a Oaxacan staple eaten at markets, on tlayudas, and with mezcal. They taste nutty and crispy. Refusing them is refusing the culture. Order a small bag at Mercado Benito Juárez for MXN 20–40 ($1–2) and try them with lime.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Oaxaca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🫕",
                  title: "Eat all 7 moles before you leave",
                  desc: "Oaxaca is called the land of seven moles — negro, rojo, coloradito, amarillo, verde, chichilo, and manchamanteles. Each one is distinct and requires a different meat pairing. The best way to try them all is a mole combinado platter at Mercado 20 de Noviembre for MXN 130–180 ($8–11).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌺",
                  title: "Visit during Guelaguetza (late July) for free shows",
                  desc: "The Guelaguetza festival in late July is Oaxaca\u0027s biggest annual event — indigenous communities from all 8 regions dance and perform in traditional dress. The main stadium show costs $30–80, but free viewings happen at the Cerro del Fortín amphitheatre on the same days.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📱",
                  title: "Download WhatsApp numbers for colectivos",
                  desc: "Many shared colectivo operators in Oaxaca now coordinate via WhatsApp groups. Ask at your hostel or hotel for the current numbers for Monte Albán and Hierve el Agua colectivos. This gives you real-time departure times and avoids waiting at the stand.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏺",
                  title: "Buy crafts direct from artisans in the villages",
                  desc: "Oaxaca state has the highest concentration of indigenous artisan villages in Mexico. Buying a hand-woven rug in Teotitlán del Valle costs the same as in the Oaxaca city shops but the money goes directly to the weaving family. Most workshops welcome visitors without appointment.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💳",
                  title: "Bring cash from Mexico City — ATMs are unreliable",
                  desc: "Many ATMs in Oaxaca city reject international cards or charge heavy fees. Withdraw pesos at a bank ATM in Mexico City (Santander and HSBC are most reliable for foreign cards) before your flight. Market vendors, colectivos, and smaller restaurants are cash-only.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥃",
                  title: "Learn the mezcal vocabulary before your first tasting",
                  desc: "Espadín is the common agave (the equivalent of blanco tequila). Tobalá, tepeztate, and madrecuixe are wild agaves with complex, expensive expressions. Joven is unaged; reposado is rested. A palenque is a distillery. Knowing this turns a tasting from overwhelming to revelatory.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Oaxaca" />

          {/* Combine With */}
          <CombineWith currentSlug="oaxaca-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit Oaxaca?",
                  a: "October to April is the dry season and best for general travel. November (especially November 1–2 for Día de los Muertos) is the most magical time to visit but requires advance booking. July brings the Guelaguetza festival. The rainy season (May–September) has daily afternoon rain but mornings are clear and prices drop 30–40%.",
                },
                {
                  q: "How do I get from Mexico City to Oaxaca?",
                  a: "The easiest way is a 1-hour flight from MEX to OAX — Aeromexico and Volaris both fly this route from approximately $40–80 one-way. Alternatively, an overnight ADO bus from TAPO terminal in Mexico City takes 7–8 hours and costs $25–40 — surprisingly comfortable with reclining seats.",
                },
                {
                  q: "Is Oaxaca safe for tourists?",
                  a: "Oaxaca city is considered very safe for tourists and is one of Mexico\u0027s most visited colonial cities. The historic centre is well-lit, well-policed, and walkable at night. Standard precautions apply: avoid flashing expensive electronics, use ATMs inside banks, and take registered taxis or Uber after midnight. The surrounding villages and archaeological sites are equally safe during daylight hours.",
                },
                {
                  q: "Can I visit Monte Albán without a guide?",
                  a: "Yes — you can enter independently for MXN 90 ($5) and walk the site with the included map. However, the Zapotec astronomical alignments, the significance of the Danzante carvings, and the political history of the Zapotec empire make much more sense with a guide ($20–40 for a licensed archaeologist). INAH-certified guides are available at the entrance; book in advance or arrive early as they fill up.",
                },
                {
                  q: "Is it safe to drink mezcal from a palenque?",
                  a: "Yes — artisan mezcal from legitimate producers is completely safe. The methanol scare is associated with fake or illegal alcohol, not with licensed mezcal producers. Stick to distilleries recommended by guides or your hotel, buy bottles with official hologram seals, and never buy from unlabelled street sellers. The mezcal sold in Santiago Matatlán is some of the safest and best in the world.",
                },
                {
                  q: "Do I need to speak Spanish in Oaxaca?",
                  a: "Basic Spanish is very helpful and appreciated. The markets, colectivo drivers, and many smaller restaurants operate primarily in Spanish. In tourist-facing restaurants, hotels, and tour agencies, English is widely understood. Learning menu terms (mole, tlayuda, mezcal, chapulines, quesillo) and transport phrases (cuánto cuesta, a qué hora sale) will significantly improve your experience.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Oaxaca trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-oaxaca", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/oaxaca-food-guide", label: "Oaxaca food guide", icon: "🫕" },
                { href: "/blog/oaxaca-mezcal-guide", label: "Mezcal guide", icon: "🥃" },
                { href: "/blog/oaxaca-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="oaxaca-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Mexico &amp; Central America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mexico City in 4 Days — Museums &amp; Street Food", href: "/blog/mexico-city-4-days" },
                { label: "Tulum 4 Days — Cenotes &amp; Ruins", href: "/blog/tulum-4-days" },
                { label: "Mérida 4 Days — Yucatán Colonial", href: "/blog/merida-4-days" },
                { label: "San Cristóbal 4 Days — Highland Villages", href: "/blog/san-cristobal-4-days" },
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
