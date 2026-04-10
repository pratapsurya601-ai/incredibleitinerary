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
const KRAKOW_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Kraków Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏰",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Kraków 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Kraków in 4 Days — Auschwitz, Wieliczka Salt Mine &amp; the medieval Old Town&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/krakow-4-days"
        imageUrl="https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1200&q=80"
        description="Kraków in 4 Days: Wawel Castle, Auschwitz-Birkenau, Wieliczka Salt Mine, Kazimierz Jewish Quarter — complete travel guide with real PLN costs."
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
export default function KrakowClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KRAKOW_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kraków" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="krakow poland old town wawel castle medieval square"
            fallback="https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1600&q=80"
            alt="Krakow Old Town Market Square with St Mary&apos;s Basilica at dusk, Poland"
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
              <span className="text-white/70">Kraków 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Central Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kraków in 4 Days:
                <em className="italic text-amber-300"> Auschwitz, Wieliczka &amp; the Medieval Old Town</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The best-preserved medieval city in Poland — spared by history, weighted by it. Wawel Castle, the Rynek Główny, Auschwitz-Birkenau, the Wieliczka Salt Mine, and pierogi in a milk bar. The complete 4-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏰 Małopolska, Poland</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kraków is the best-preserved medieval city in Poland — spared the bombing that levelled Warsaw because Nazi Germany chose it as their administrative capital. It sits within reach of two UNESCO World Heritage Sites that carry the full weight of human history: Auschwitz-Birkenau, and the Wieliczka Salt Mine.
            </p>
          </blockquote>

          {/* ── WHAT KRAKÓW ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Kraków Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kraków was the royal capital of Poland from 1038 to 1596 — home to the Jagiellonian kings, the Wawel Cathedral with its royal crypts, and one of Europe&apos;s oldest universities (Jagiellonian University, founded 1364, where Copernicus studied in the 1490s). When the capital moved to Warsaw, Kraków retained its architecture intact. When the Nazis arrived in 1939, they made it their headquarters — and so it survived the war that destroyed almost every other major Polish city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The result is a city that layers 10 centuries of European history — Gothic, Renaissance, Baroque, Jewish, communist — into 4 square kilometres of intact Old Town and the adjacent Kazimierz neighbourhood, where Kraków&apos;s Jewish community lived for 500 years. It is beautiful in a way that feels slightly guilty given what surrounds it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is enough to hold all of it: the Old Town, the castle, Auschwitz, the salt mine, and Kazimierz. You will still leave with the feeling that you have missed things. That is a reliable sign of a good city.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport to Centre" value="40 min / PLN 4" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏰" label="UNESCO Sites Nearby" value="2" />
              <StatCard icon="💰" label="Budget From" value="€30/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kraków</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best All-Round",
                  d: "15–22°C, long evenings, the Old Town in full bloom. Fewer crowds than July–August. Auschwitz-Birkenau is still bookable without 6-week lead times in early May. The terraces around Rynek Główny fill up in the evening light. The best month for a first visit.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy but Brilliant",
                  d: "20–28°C, peak season. The city is full — Auschwitz-Birkenau tours sell out 6–8 weeks in advance, so you must book before you book flights. The outdoor terraces are packed; evenings are warm and social. The most energetic time to visit, if you plan ahead.",
                  b: "Book Auschwitz early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Underrated",
                  d: "10–18°C, crisp air, autumn colour in the Planty gardens, and crowds that thin noticeably after mid-September. October light on the Old Town is extraordinary. Auschwitz is easier to book. The best month for photographers.",
                  b: "Photographers&apos; favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Atmospheric & Affordable",
                  d: "−5 to 5°C, occasional snow, a fraction of the summer prices, and the Christmas market on Rynek Główny (December) which is among the best in central Europe. The Wieliczka Salt Mine is a pleasant escape from the cold. Auschwitz in winter is particularly sombre and affecting.",
                  b: "Budget season",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kraków</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kraków John Paul II International Airport (KRK) is 11km west of the city. The <strong className="font-medium">airport bus (line 208 or 292)</strong> takes 40 minutes to the main train station (Kraków Główny) and costs <strong className="font-medium">PLN 4</strong> — one of the cheapest airport transfers in Europe. A taxi costs PLN 50–80 (€12–19).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to Kraków (KRK)",
                  d: "Direct flights from London (2.5 hrs), Amsterdam (2 hrs), Dublin (2.5 hrs), Paris (2 hrs), and most European hubs. Ryanair, Wizz Air, and LOT Polish Airlines serve KRK from dozens of European cities. From airport to city: bus line 208 or 292 (PLN 4, 40 min) or taxi (PLN 50–80, 20 min).",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Warsaw",
                  d: "Warsaw Centralna → Kraków Główny: 2.5 hours on the EIP express (PKP Intercity, from PLN 89 in advance). One of Poland&apos;s best rail connections — fast, comfortable, and city-centre to city-centre. Book at pkpintercity.pl up to 30 days in advance for the cheapest fares.",
                  b: "Recommended from Warsaw",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Prague or Vienna",
                  d: "FlixBus and RegioJet run Prague → Kraków (7.5 hours, from €15) and Vienna → Kraków (7 hours, from €20). Comfortable coaches with Wi-Fi and power sockets. The Prague–Kraków route is a classic backpacker connection through central Europe.",
                  b: "Budget overland",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚂",
                  t: "Overnight Train from Budapest",
                  d: "The Budapest–Kraków overnight train (10 hours) is a romantic central European classic — departs evening, arrives morning, saves a night&apos;s accommodation. Book through Eurorail or the Hungarian MÁV website 4–6 weeks ahead for couchette berths.",
                  b: "Scenic classic",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Kraków Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is built around the non-negotiables — Auschwitz must be pre-booked; Wieliczka needs a full day. The Old Town and Kazimierz fill the remaining days naturally.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Rynek Główny · Cloth Hall · St Mary&apos;s Basilica · Wawel Castle"
                cost="€20–35 total"
                items={[
                  "9:00am — Rynek Główny, the Main Market Square (free). At 200 by 200 metres, this is one of the largest medieval town squares in Europe — comparable in scale to Venice&apos;s Piazza San Marco. The entire square is pedestrianised and surrounded by Gothic, Renaissance, and Baroque townhouses that have been standing since the 14th century. Sit on the steps of the Adam Mickiewicz monument and simply look.",
                  "9:30am — Cloth Hall / Sukiennice (free to ground floor). The Renaissance arcade at the centre of the square dates to the 14th century — rebuilt after a fire in the 15th, remodelled in the 16th. The ground floor sells amber jewellery, linen, and Polish craft. The Gallery of 19th-century Polish Painting upstairs (PLN 15) has works from the Romantic nationalist period that give essential context for why Poland&apos;s history feels the way it does.",
                  "10:30am — St Mary&apos;s Basilica (PLN 10, timed entry; PLN 15 extra for tower). The Gothic brick church on the corner of the square opens hourly with a short trumpet call from the tallest tower — the Hejnał mariacki — played by a bugler at the open window, a tradition since the 14th century. The interior is extraordinary: the carved wooden altarpiece by Veit Stoss (1489) is the largest Gothic altarpiece in the world.",
                  "1:00pm — Lunch at a bar mleczny (milk bar). These communist-era subsidised cafeterias survived as neighbourhood institutions. Bar Mleczny Centralny or Pod Temidą: pierogi (PLN 15–25), borscht (PLN 8), żurek sour rye soup with egg and sausage (PLN 10). Lunch for PLN 25–35 (€6–8).",
                  "2:30pm — Wawel Castle and Royal Cathedral (grounds free; Royal Apartments PLN 35; Cathedral PLN 10 separate). The Wawel hill above the Vistula has been Poland&apos;s royal seat since the 11th century. The Sigismund Bell (1520) is one of the largest medieval bells in Europe; the cathedral interior holds the tombs of Polish kings. The fire-breathing dragon statue at the foot of the hill (Smok Wawelski) shoots real flames every few minutes.",
                  "6:00pm — Walk the Planty gardens (free) — the ring of green parkland that follows the line of the demolished medieval city walls. The full circuit is 4km and links all the major Old Town entry points.",
                  "7:30pm — Dinner: Restauracja Wierzynek (operating since 1364 — one of the oldest restaurants in Europe) for traditional Polish cuisine, or Chimera Bar for their popular salad and soup bar (PLN 25–40, €6–9).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Auschwitz-Birkenau Memorial"
                cost="€20–40 total (transport + entry)"
                items={[
                  "7:00am — Depart Kraków early. The Auschwitz-Birkenau Memorial is 70km west of Kraków. Take a dedicated shuttle bus from the main Kraków bus station (PLN 20–35 each way, 1.5 hours) or join an organised guided day tour from Kraków (PLN 80 with guide and transport). Pre-booking is mandatory April–October at auschwitz.org.",
                  "9:00am — Auschwitz I (the main camp). Guided tours are strongly recommended — the context provided by trained guides transforms the experience from sightseeing into something more important. Between April and October, all visitors during peak hours must join a guided tour; guided tour tickets include entry. Book at auschwitz.org at least 6–8 weeks ahead in summer — the site receives 2.3 million visitors a year.",
                  "The exhibits in the Auschwitz I blocks document the systematic murder of 1.1 million people, primarily Jewish, between 1940 and 1945. The hair of victims, the shoes, the suitcases, the personal belongings — these exhibits are unlike anything else in European travel. No photographs are appropriate in certain rooms.",
                  "12:00pm — Walk between Auschwitz I and Auschwitz II-Birkenau (3km, or a shuttle bus is provided). Birkenau is the larger extermination site — 175 hectares, over 300 wooden and brick barracks, the ruins of four crematoria blown up by the SS in January 1945. The scale is impossible to comprehend without standing in it.",
                  "2:30pm — Return bus to Kraków.",
                  "5:00pm — Evening free. Most visitors need quiet time after Auschwitz. Walk the Planty, sit by the Vistula, or visit the National Museum (PLN 30) for 19th-century Polish art — a contrast that is strangely appropriate.",
                  "8:00pm — Simple dinner: pierogi at any restaurant near the Old Town. PLN 25–35 (€6–8). Something modest feels right after this day.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Wieliczka Salt Mine · Kazimierz Jewish Quarter"
                cost="€30–55 total"
                items={[
                  "9:00am — Wieliczka Salt Mine (13km east of Kraków, PLN 109 with guided tour — the Tourist Route requires a guide). Take the minibus from outside Kraków Główny station (PLN 5) or the Wieliczka train (PLN 6). The mine has been continuously operated since the 13th century — it produced table salt until 2007 and is now a UNESCO World Heritage Site.",
                  "10:00am — The Tourist Route (3.5km, 327 metres deep, 3 hours with guide). The mine descends through 9 levels. Everything in the mine is salt — walls, floor, ceilings. The miners over seven centuries decorated their chambers with carved reliefs: biblical scenes, Polish kings, miners at work.",
                  "The Chapel of St Kinga (the largest underground chapel in the world) is 54 metres long, 18 metres wide, and 12 metres high — entirely carved from salt. The chandeliers are salt crystals. The bas-relief altarpiece, carved by three miners over 67 years, depicts the Last Supper in salt. Underground concerts and weddings are held here.",
                  "The underground lake in Chamber 19 — Weimar Lake — reflects the salt crystal formations on the ceiling, creating the illusion of a chamber below your feet. No photograph does it justice.",
                  "1:30pm — Return to Kraków. Lunch in Wieliczka or back in the city.",
                  "3:00pm — Kazimierz, the Jewish Quarter (15-minute tram ride from the Old Town). The Old Synagogue Museum (PLN 25), Remuh Cemetery (PLN 15, 500-year-old tombstones), and Plac Nowy with its circular market building. Schindler&apos;s Factory Museum (PLN 30) is in the adjacent Podgórze district — the actual factory where Oskar Schindler employed 1,200 Jewish workers to protect them from deportation.",
                  "8:00pm — Dinner in Kazimierz: Klezmer-Hois for traditional Jewish cuisine (PLN 50–70 mains) or Plac Nowy cafés for cheap zapiekanka open-face toasted baguette (PLN 8–12 — Kraków&apos;s street food of choice).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Kazimierz Deep Dive · Schindler&apos;s Factory · Old Town Farewell"
                cost="€25–45 total"
                items={[
                  "9:00am — Kazimierz Jewish Quarter walking tour (self-guided, free; or guided tour PLN 60–80 per person). The neighbourhood where Kraków&apos;s Jewish community lived for 500 years before 1939 — and where Steven Spielberg filmed Schindler&apos;s List in 1993. The fragment of the ghetto wall still standing on Lwowska Street, and the sites connected to the Schindler story, give Kazimierz a weight that compounds the Auschwitz experience.",
                  "11:30am — Schindler&apos;s Factory Museum (Lipowa 4, PLN 30, book online). The Kraków Under Nazi Occupation exhibition uses the factory&apos;s original rooms to tell the story of the occupation from 1939 to 1945. One of the finest history museums in Europe in terms of exhibition design. Budget 2 hours minimum.",
                  "1:30pm — Final pierogi lunch: Miód Malina (Grodzka) or Bar Mleczny u Stasi (Mikołajska). PLN 20–35 for a full meal — ruskie (potato and cheese pierogi), borscht, a kompot drink. These milk bars have not changed since 1975.",
                  "3:00pm — Last walk through the Old Town: the Barbican (free exterior, PLN 25 inside), the Florian Gate (free), and a final circuit of Rynek Główny. Buy amber jewellery at the Cloth Hall or a bottle of Żubrówka bison grass vodka (PLN 35–45 for 500ml) to take home.",
                  "5:00pm — Żywiec beer on a terrace overlooking the Market Square. A half-litre costs PLN 10–16 (€2.30–3.70). Say goodbye to what is, per square kilometre of Old Town, one of the most historically significant cities in Europe.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kraków" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Kraków Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Prices as of early 2026 in Polish Złoty (PLN). €1 = approximately PLN 4.30.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Rynek Główny — Main Market Square",
                  e: "Free",
                  d: "One of the largest and best-preserved medieval market squares in Europe — 200 by 200 metres, surrounded by Gothic, Renaissance, and Baroque townhouses. The square is the heart of Kraków life: the morning market, the hourly trumpet call from St Mary&apos;s tower, the evening terrace culture. Everything radiates from here.",
                  t: "Essential · All day",
                },
                {
                  n: "Wawel Castle & Royal Cathedral",
                  e: "Grounds free; Apartments PLN 35; Cathedral PLN 10",
                  d: "Poland&apos;s royal seat for 500 years. The Wawel hill contains the castle, the cathedral with royal crypts, the crown treasury, and the dragon&apos;s cave. The Sigismund Bell (1520) and the view over the Vistula justify the climb alone. Budget 2.5–3 hours.",
                  t: "Must see · 2.5–3 hrs",
                },
                {
                  n: "St Mary&apos;s Basilica",
                  e: "PLN 10 (+ PLN 15 tower)",
                  d: "The Gothic brick church anchoring the northeast corner of the Market Square. The altarpiece by Veit Stoss (1489) — 12 metres tall, carved from lime wood — is the largest Gothic altarpiece in the world. The hourly trumpet call (Hejnał mariacki) from the tower is a UNESCO Intangible Cultural Heritage.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Auschwitz-Birkenau Memorial",
                  e: "Free (guided tours PLN 55–85); transport PLN 20–35",
                  d: "70km from Kraków. Pre-booking mandatory April–October at auschwitz.org. The most important site accessible from Kraków — 6 hours minimum. See Day 2 of the itinerary for full logistics. Book at least 6–8 weeks ahead in summer.",
                  t: "Non-negotiable · Full day",
                },
                {
                  n: "Wieliczka Salt Mine",
                  e: "PLN 109 (Tourist Route with guide)",
                  d: "13km east of Kraków, UNESCO World Heritage Site. 3.5km underground tour through 9 levels, including the extraordinary Chapel of St Kinga — 54 metres long, entirely carved from salt, with salt-crystal chandeliers. Operating continuously since the 13th century. Book ahead in high season.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Schindler&apos;s Factory Museum",
                  e: "PLN 30",
                  d: "Lipowa 4, Podgórze district. The actual factory of Oskar Schindler. The permanent exhibition — Kraków Under Nazi Occupation — is one of the finest history museums in Europe, using the factory&apos;s original spaces to tell the story of the Nazi occupation of Kraków. 2 hours minimum. Book online to avoid queuing.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Kazimierz Jewish Quarter",
                  e: "Free to walk; individual sites PLN 15–25",
                  d: "The neighbourhood of 500 years of Jewish life in Kraków, adjacent to the Old Town. The Old Synagogue Museum, Remuh Cemetery (16th century), Plac Nowy market square, and street art. Best explored slowly over 3–4 hours. Combined with Schindler&apos;s Factory, a full day in Podgórze-Kazimierz is one of the most concentrated historical experiences available in central Europe.",
                  t: "Recommended · 3–4 hrs",
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
            title="Kraków — Old Town, Wawel &amp; Beyond"
            subtitle="Medieval squares, royal castles, underground cathedrals of salt."
            spots={[
              {
                name: "Rynek Główny at Dusk",
                query: "krakow rynek glowny market square evening dusk poland",
                desc: "The Main Market Square at dusk — one of the largest medieval squares in Europe, with St Mary&apos;s Basilica towers lit against the evening sky.",
              },
              {
                name: "Wawel Castle",
                query: "wawel castle krakow poland royal vistula river",
                desc: "Wawel Castle on its limestone hill above the Vistula — Poland&apos;s royal seat for five centuries.",
              },
              {
                name: "Wieliczka Salt Mine Chapel",
                query: "wieliczka salt mine chapel st kinga underground poland",
                desc: "The Chapel of St Kinga inside the Wieliczka Salt Mine — 54 metres long, carved entirely from salt, with chandeliers of salt crystals.",
              },
              {
                name: "Kazimierz Jewish Quarter",
                query: "kazimierz krakow jewish quarter synagogue poland",
                desc: "Kazimierz — the Jewish Quarter of Kraków, a neighbourhood of 500 years of history and contemporary café culture.",
              },
              {
                name: "St Mary&apos;s Basilica",
                query: "st mary basilica krakow gothic church poland rynek",
                desc: "St Mary&apos;s Basilica on Rynek Główny — Gothic brick towers and the largest Gothic altarpiece in the world inside.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kraków is one of the most affordable major cities in Europe. Poland uses the Polish Złoty (PLN), not the Euro — €1 = approximately PLN 4.30 (April 2026). The costs below are per person per day.
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
                    ["🏨 Accommodation", "€12–25", "€60–130", "€200–400"],
                    ["🍽 Food", "€8–18", "€30–55", "€80–200"],
                    ["🚌 Transport (local + day trips)", "€3–8", "€10–20", "€30–100"],
                    ["🏰 Activities & entry fees", "€10–20", "€25–50", "€80–200"],
                    ["TOTAL per person/day", "€33–71", "€125–255", "€390–900"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€30–70/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Greg &amp; Tom Hostel or a budget guesthouse (€12–25/night), eat at milk bars (bar mleczny) for PLN 20–35 per meal, use public trams and the airport bus. Kraków is one of Europe&apos;s best budget destinations — the infrastructure is excellent and the main sights are free or cheap.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€125–255/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel Copernicus or Hotel Wentzl (€80–160/night), dine at Pod Baranem or Miód Malina (PLN 50–80 mains), take organised day trips to Auschwitz and Wieliczka. The sweet spot for comfort and atmosphere.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€390–900/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Stary (from €200/night, rooftop pool with Wawel views), private historian-guided tours (€200–300), dinner at Szara Gęś or Bottiglieria 1881 (€50–100/person). Private car from airport, spa treatments, exclusive mine access.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Kraków</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Old Town (Stare Miasto) is the most convenient base — you can walk to Rynek Główny, Wawel Castle, and St Mary&apos;s Basilica. Kazimierz is a 15-minute walk or short tram ride away. Staying in the Old Town puts you inside the Planty ring and within a few minutes of almost everything.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Stary",
                  type: "5-star luxury · Szczepańska, Old Town",
                  price: "From €200/night",
                  badge: "Most prestigious",
                  desc: "The finest hotel in Kraków — a 15th-century palace one block from Rynek Główny. The rooftop pool overlooks the Wawel Castle walls; the interiors blend medieval architecture with contemporary design. Service is among the best in central Europe. Rooms sell out, especially in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Copernicus",
                  type: "5-star heritage · Kanonicza Street",
                  price: "From €150/night",
                  badge: "Most atmospheric",
                  desc: "A 16th-century Renaissance townhouse on Kanonicza Street — the most beautiful street in Kraków, directly below Wawel Castle. Vaulted ceilings, frescoes, and a rooftop terrace with castle views. The location is as good as it gets in Kraków.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotel Wentzl",
                  type: "Boutique · Rynek Główny (Market Square)",
                  price: "From €100/night",
                  badge: "Best location",
                  desc: "Directly on the Market Square — you can hear the Hejnał trumpet call from your room. Elegant, historic interiors; the restaurant is one of Kraków&apos;s best. Booking well in advance is essential: this address sells out months ahead in summer.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Greg & Tom Hostel",
                  type: "Hostel · Pawia Street, Old Town",
                  price: "From €15/night",
                  badge: "Best budget",
                  desc: "Consistently one of Europe&apos;s best-rated hostels — clean, social, central, with free breakfast and a reputation for good organisation. A 5-minute walk from Rynek Główny. The benchmark for budget accommodation in Kraków.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Kraków</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kraków&apos;s restaurant scene ranges from communist-era milk bars (bar mleczny) charging PLN 20–35 for a full meal to Michelin Bib Gourmand restaurants on the Market Square. Polish cuisine — pierogi, bigos, żurek, duck, carp — is better in Kraków than almost anywhere in Poland.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Starka",
                  t: "Modern Polish · Ul. Józefa, Kazimierz",
                  d: "The most acclaimed restaurant in Kraków&apos;s Kazimierz district — modern Polish cooking using traditional ingredients. Wild boar, buckwheat risotto, smoked trout, black garlic. Candlelit cellar room. PLN 55–90 for mains. Book ahead, especially on weekends.",
                  b: "Best in Kazimierz",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Pod Baranem",
                  t: "Traditional Polish · Ul. Sw. Gertrudy",
                  d: "One of Kraków&apos;s most celebrated traditional Polish restaurants — bigos hunter&apos;s stew, roast duck with plum sauce, żurek served in a bread bowl. Warm, vaulted interior. PLN 45–75 for mains. Just outside the Old Town near the Planty, 5 minutes from the Market Square.",
                  b: "Best traditional",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Miód Malina",
                  t: "Polish-European · Ul. Grodzka",
                  d: "On Grodzka Street — the main axis between the Market Square and Wawel Castle. Warm, rustic interior; excellent Tatra mountain trout, potato dumplings, wild mushroom cream sauce. PLN 45–80 for mains. Consistently good quality and service. A reliable choice on the main tourist drag.",
                  b: "Most consistent",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Bar Mleczny u Stasi (Milk Bar)",
                  t: "Budget Polish · Mikołajska, Old Town",
                  d: "The best milk bar in the Old Town — a communist-era subsidised cafeteria that survived because it serves a real need. Pierogi ruskie (potato and cheese) for PLN 12–18, borscht for PLN 8, żurek for PLN 10. A full meal for PLN 20–35 (€5–8). Nothing has changed here since the 1970s and that is precisely the point.",
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
            destination="Kraków Poland"
            hotels={[
              {
                name: "Hotel Stary",
                type: "5-star luxury · 15th-century palace, Old Town",
                price: "From €200/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/pl/stary-krakow.html?aid=2820480",
              },
              {
                name: "Hotel Copernicus",
                type: "5-star heritage · Kanonicza Street",
                price: "From €150/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/pl/copernicus-krakow.html?aid=2820480",
              },
              {
                name: "Hotel Wentzl",
                type: "Boutique · On Rynek Główny",
                price: "From €100/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/pl/wentzl-krakow.html?aid=2820480",
              },
              {
                name: "Greg & Tom Hostel",
                type: "Hostel · Pawia Street, Old Town",
                price: "From €15/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/pl/greg-tom-hostel-krakow.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Auschwitz-Birkenau Guided Day Tour from Kraków",
                duration: "8 hrs",
                price: "From PLN 80/person",
                badge: "Book weeks ahead",
                url: "https://www.getyourguide.com/s/?q=auschwitz+tour+krakow&partner_id=PSZA5UI",
              },
              {
                name: "Wieliczka Salt Mine Guided Tour",
                duration: "4 hrs",
                price: "From PLN 109/person",
                badge: "UNESCO Must-Do",
                url: "https://www.getyourguide.com/s/?q=wieliczka+salt+mine+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kraków Old Town & Kazimierz Walking Tour",
                duration: "3 hrs",
                price: "From PLN 60/person",
                badge: "Best introduction",
                url: "https://www.getyourguide.com/s/?q=krakow+old+town+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Schindler&apos;s Factory Private Guided Visit",
                duration: "2 hrs",
                price: "From PLN 80/person",
                url: "https://www.getyourguide.com/s/?q=schindler+factory+krakow&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Kraków</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎟️",
                  title: "Visiting Auschwitz Without Pre-Booking",
                  desc: "Between April and October, Auschwitz-Birkenau sells out weeks — and in July sometimes 6–8 weeks — in advance. There is no walk-up admission for guided tours during these months. Book at auschwitz.org the moment you fix your Kraków dates. This mistake strands hundreds of visitors every week who discovered the requirement at the gate.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛏️",
                  title: "Skipping the Wieliczka Salt Mine",
                  desc: "Many travellers, already committed to Auschwitz as the &apos;heavy&apos; day, treat Wieliczka as optional. The Chapel of St Kinga alone — carved entirely from salt by three miners over 67 years — is worth the trip to Kraków by itself. Set aside a full day for the mine. It is not comparable to anything else in European travel.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🕍",
                  title: "Rushing Through Kazimierz",
                  desc: "Kazimierz is frequently treated as a 90-minute add-on. It needs 3–4 hours minimum, ideally a full day combined with Schindler&apos;s Factory. The neighbourhood holds 500 years of Jewish life, the story of the Holocaust in Kraków, the Schindler rescue, and a living culture of cafés, bookshops, and street art. It rewards time.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💰",
                  title: "Paying Restaurant Prices for Pierogi",
                  desc: "The Old Town is lined with restaurants charging PLN 28–38 for a plate of pierogi. The same dish — often better — costs PLN 10–18 at a bar mleczny (milk bar) two streets away. Bar Mleczny u Stasi (Mikołajska) and Pod Temidą (Grodzka) are the best. Order ruskie (potato and cheese) or kapusta i grzyby (sauerkraut and mushroom).",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kraków</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⏰",
                  title: "Auschwitz: Go on a Morning Tour",
                  desc: "Afternoon light at Auschwitz-Birkenau is harsh and the site is more crowded by midday. A 9am start means cooler temperatures, better light, and the emotional weight of the site in morning stillness rather than midday crowd noise. Morning tours also tend to attract the most experienced guides.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛪",
                  title: "Wieliczka: Attend a Chapel Service",
                  desc: "The Chapel of St Kinga in Wieliczka holds regular Catholic services. The space is 54m long and carved entirely from salt — walls, floor, altar, chandeliers. If you can find out the service schedule (ask the mine booking office), attending a short service in this underground cathedral is an extraordinary experience that no tourist tour replicates.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🥟",
                  title: "Eat Pierogi at a Milk Bar",
                  desc: "The bar mleczny (milk bar) is a communist-era institution that survived because it fills a real need: fast, filling, cheap, traditional food. Kraków has over a dozen. Bar Mleczny u Stasi (Mikołajska) and Pod Temidą (Grodzka) are the most praised. PLN 10–18 for a plate of pierogi versus PLN 30–40 in a tourist restaurant. The quality is the same or better.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍺",
                  title: "Żywiec Beer on the Square Terrace",
                  desc: "The local Żywiec lager (PLN 10–16 for a half-litre) is everywhere in Kraków. The best place to drink it is on one of the outdoor terraces surrounding Rynek Główny in the evening — the square lit up, the trumpet call echoing from St Mary&apos;s tower, and the medieval townhouses framing everything. This simple experience is one of the best in central European travel.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚃",
                  title: "Use Trams, Not Taxis",
                  desc: "Kraków&apos;s tram network is excellent and covers all the key destinations — Old Town, Kazimierz, and Podgórze (for Schindler&apos;s Factory) are all tram-accessible. A single tram ticket costs PLN 4–6 (€1–1.40). Taxis from the Old Town to Kazimierz charge PLN 15–25 for a journey that costs PLN 4 on the tram.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Download the Auschwitz App Before You Go",
                  desc: "The Auschwitz Memorial has an official app with audioguide content, site maps, and pre-visit educational material. Downloading and reading the pre-visit material before your trip significantly increases the depth of the experience. Available free on iOS and Android.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kraków" />

          {/* Combine With */}
          <CombineWith currentSlug="krakow-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indians need a Schengen visa for Poland?",
                  a: "Yes. Poland is a full Schengen member. Indian passport holders need a short-stay Schengen C visa (€80, valid up to 90 days in 180). Apply through VFS Global or the Polish embassy at least 6 weeks before your travel date. The visa covers all 27 Schengen countries — if you are also visiting Czech Republic, Austria, or Germany, one application covers the entire trip. Apply to the embassy of the country where you will spend the most days.",
                },
                {
                  q: "How do I book Auschwitz tickets?",
                  a: "Book at auschwitz.org — the official memorial website. Between April and October, all visitors during peak hours (10am–3pm) must join a guided tour; guided tour tickets include entry. Individual guided tours cost PLN 55–85 per person in groups of up to 30. Book as soon as your dates are fixed — July and August slots sell out 6–8 weeks in advance. Free self-guided entry is available before 9am and after 3pm with a pre-registered timed entry ticket.",
                },
                {
                  q: "Is Poland cheap compared to Western Europe?",
                  a: "Dramatically cheaper. The Polish Złoty (PLN) trades at approximately €1 = PLN 4.30 (April 2026). A full restaurant meal in the Kraków Old Town: PLN 40–70 (€9–16). A pint of local Żywiec beer: PLN 10–16 (€2.30–3.70). A hostel dorm bed: PLN 50–80 (€12–19). A double room in a good 3-star hotel: PLN 250–450 (€58–105). Kraków is consistently one of the most affordable major European city-break destinations.",
                },
                {
                  q: "Warsaw or Kraków — which should I visit?",
                  a: "Kraków for medieval history, Auschwitz, Wieliczka, and the best-preserved Old Town in Poland. Warsaw for the communist-era architecture, the Warsaw Rising Museum, the rebuilt Royal Castle, and a more contemporary urban energy. Kraków is the more rewarding short trip — 4 days covers everything. Warsaw rewards a longer visit and is better understood as a city deliberately rebuilt from rubble after 85% destruction in WWII, which gives it a completely different architectural and emotional character.",
                },
                {
                  q: "Is Kraków safe for tourists?",
                  a: "Kraków is consistently rated one of the safest cities in central Europe. Petty theft exists in the Old Town in peak summer but is much lower than in Prague, Barcelona, or Rome. The main practical issue for some visitors is the stag-party tourism (Kraków is a major European bachelor party destination) — this concentrates in certain bars and streets on Friday and Saturday nights. Kazimierz and residential neighbourhoods are calm at all hours.",
                },
                {
                  q: "Can I visit Auschwitz and Wieliczka on the same day?",
                  a: "Not recommended. Auschwitz requires a full day emotionally and physically — the return journey from Kraków, the 5–6 hours at the memorial, and the decompression time afterward make it a full day on its own. Wieliczka requires 3–4 hours underground plus travel time. Cramming both into one day diminishes both experiences. The 4-day itinerary on this page gives each a dedicated day, which is the right approach.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kraków trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/auschwitz-booking-guide", label: "Auschwitz booking guide", icon: "🎟️" },
                { href: "/blog/wieliczka-salt-mine-guide", label: "Wieliczka full guide", icon: "⛏️" },
                { href: "/blog/krakow-best-restaurants", label: "Best restaurants", icon: "🍽️" },
                { href: "/blog/poland-travel-guide", label: "Poland travel guide", icon: "🇵🇱" },
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
          <RelatedGuides currentSlug="krakow-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Prague in 3 Days — Bridges &amp; Beer", href: "/blog/prague-3-days" },
                { label: "Budapest in 3 Days — Thermal Baths", href: "/blog/budapest-3-days" },
                { label: "Vienna in 3 Days — Palaces &amp; Music", href: "/blog/vienna-3-days" },
                { label: "Bruges in 3 Days — Medieval Canals", href: "/blog/bruges-3-days" },
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
