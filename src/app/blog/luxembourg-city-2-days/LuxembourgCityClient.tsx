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
const LUX_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Luxembourg Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
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
          href: `mailto:?subject=Luxembourg City 2-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Luxembourg City in 2 Days — Bock Casemates, Grund valley and Vianden Castle&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/luxembourg-city-2-days"
        imageUrl="https://images.unsplash.com/photo-1590736969596-1da1cf4b2c30?w=1200&q=80"
        description="Luxembourg City in 2 Days: Bock Casemates tunnels, Grund valley, Grand Ducal Palace, Vianden Castle day trip — complete travel guide with budget breakdown from €55/day."
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
export default function LuxembourgCityClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LUX_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Luxembourg City" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="luxembourg city casemates grund valley panorama alzette river fortress walls sunset"
            fallback="https://images.unsplash.com/photo-1590736969596-1da1cf4b2c30?w=1600&q=80"
            alt="Luxembourg City panorama showing the Alzette River valley, Grund quarter, and fortress walls at sunset"
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
              <span className="text-white/70">Luxembourg City 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Luxembourg City in 2 Days:
                <em className="italic text-amber-300"> Casemates, Grund &amp; Vianden Castle</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                17 kilometres of underground tunnels carved into sandstone cliffs, a medieval valley quarter 70 metres below the plateau, and a fairytale castle day trip — all with free public transport. The complete 2-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="10 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇱🇺 Luxembourg City</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Luxembourg City is what happens when a medieval fortress city perches on sandstone cliffs above two river valleys — then carves 17 kilometres of underground tunnels into the rock itself, drops a UNESCO-listed valley quarter 70 metres below the plateau, and surrounds itself with one of Europe&apos;s most underrated day-trip landscapes.
            </p>
          </blockquote>

          {/* ── WHAT LUXEMBOURG ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Luxembourg Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Luxembourg City is one of Europe&apos;s most dramatically situated capitals. The old city sits on a sandstone plateau — the Bock promontory — with sheer cliff faces dropping 70 metres into the Alzette and Pétrusse river valleys below. The fortress walls that once made Luxembourg the &quot;Gibraltar of the North&quot; are still largely intact. Beneath them run the Bock Casemates: a network of underground galleries, gun emplacements, and troop quarters carved into the rock between 1644 and 1746, now a UNESCO World Heritage Site.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Grund — Luxembourg&apos;s most atmospheric neighbourhood — sits in the Alzette valley below the cliffs, connected to the upper city by narrow staircases, lifts cut into the rock face, and the famous Chemin de la Corniche. The Corniche, a promenade running along the cliff edge above the Grund, is regularly cited as &quot;Europe&apos;s most beautiful balcony.&quot; It is completely free and genuinely earns the description.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The practical miracle that most visitors don&apos;t know: since February 2020, all public transport in Luxembourg — trains, trams, and buses — has been permanently free for everyone. This means the 90-minute journey to Vianden Castle and the bus into the Mullerthal fairy-tale forest cost you exactly nothing. Luxembourg is expensive by European standards, but the free transport eliminates one entire cost category. Budget two full days and you will leave wishing you had three.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="Train from Brussels" value="3 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun / Sep–Oct" />
              <StatCard icon="🏰" label="Casemate Tunnels" value="17 km" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Luxembourg City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best Season",
                  d: "15–22°C, long daylight hours, Moselle valley vines in fresh green, and the Mullerthal forest at its most lush. Fewer crowds than summer. The Chemin de la Corniche and the Grund are at their most photogenic. Ideal for the Vianden day trip.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Also Excellent",
                  d: "14–20°C, harvest season in the Moselle valley (excellent local wine events), golden foliage in the Mullerthal gorges. September is still warm enough for the Grund valley walk. October can be wet but the sandstone rock formations in Mullerthal look extraordinary in autumn colour.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec",
                  i: "🎄",
                  t: "Christmas — Beautiful but Busy",
                  d: "Luxembourg City&apos;s Christmas market (Place d&apos;Armes and Place de la Constitution) is one of Europe&apos;s finest — genuinely atmospheric with the illuminated Grand Ducal Palace and fortress walls as backdrop. Cold (2–8°C) but memorable. Book accommodation well ahead.",
                  b: "For Christmas markets",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy but Fine",
                  d: "18–26°C, pleasant weather, but the Bock Casemates and Vianden Castle are at their most crowded with Belgian and German summer tourists. Arrive at opening time for both sites. The Grund terraces and rooftop bars are at their best. Longer opening hours everywhere.",
                  b: "Busy but fine",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Luxembourg City</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Luxembourg City has a central railway station (<strong className="font-medium">Luxembourg Gare Centrale</strong>) well served by international trains. All domestic connections — including the free train to Vianden and the bus to Mullerthal — depart from here.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Brussels (recommended)",
                  d: "Brussels-Midi → Luxembourg Gare Centrale: 3 hours, from €25 on Intercity Direct. Hourly departures. The most convenient approach from Western Europe. No changes required. Book on SNCB or Trainline for the best prices.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "TGV from Paris",
                  d: "Paris Gare de l&apos;Est → Luxembourg: 2 hours 5 minutes by TGV, from €40. Fast, direct, no changes. Probably the quickest international option. Book on SNCF Connect or Trainline; prices vary significantly by booking date.",
                  b: "Fastest option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Train from Cologne / Frankfurt",
                  d: "Cologne → Luxembourg: approx 3 hours 30 minutes via Trier, from €30. Frankfurt → Luxembourg: approx 3 hours 15 minutes direct, from €35. Good options for travellers coming from Germany. ICE and IC services are comfortable.",
                  b: "From Germany",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Fly into LUX Airport",
                  d: "Luxembourg Airport (LUX) is 6km from the city centre. Free bus (line 16) connects the airport to the city centre and main railway station in 30 minutes. Several European carriers serve LUX including Luxair, Ryanair (seasonal), and Lufthansa. Less convenient than arriving by train from nearby capitals.",
                  b: "Flying option",
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

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 2-Day Luxembourg City Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 covers the city itself — the Bock Casemates, Chemin de la Corniche, Grund quarter, and Grand Ducal Palace. Day 2 is the essential Vianden Castle day trip with optional Mullerthal forest.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Bock Casemates · Chemin de la Corniche · Grund · Grand Ducal Palace · Mudam"
                cost="€25–45 (excluding accommodation)"
                items={[
                  "09:00 — Bock Casemates opening time. Arrive at 9am sharp to beat the tour groups that descend by 10:30am. Entry is €8. The Bock promontory was fortified in 963 CE; the casemate tunnel network was cut between 1644 and 1746 to shelter troops and artillery. The underground galleries include 40-metre-deep shafts, gun batteries overlooking the Alzette valley, and passages connecting to the old fortress walls. The views from the Bock cliff edge, directly above the Grund quarter far below, are extraordinary.",
                  "11:00 — Walk the Chemin de la Corniche. This free promenade runs along the cliff edge of the upper city above the Grund quarter — often called &apos;Europe&apos;s most beautiful balcony.&apos; The walk is 1.5km and takes about 30 minutes at a gentle pace with stops. The views across the Alzette valley and the red rooftops of the Grund below genuinely justify the description.",
                  "12:30 — Descend to the Grund quarter. Take the free lift cut into the cliff face (or the staircase next to it) to reach the Alzette valley floor 70 metres below. The Grund is Luxembourg&apos;s most atmospheric neighbourhood — narrow cobbled streets, the old Neumünster Abbey, riverside terraces, and a completely different character from the upper city. Lunch at Le Bouquet Garni on rue de l&apos;Eau (€14–22 for a two-course lunch) is an excellent introduction to traditional Luxembourgish cooking.",
                  "14:30 — Return to the upper city via the lift or staircase. Walk to the Grand Ducal Palace on rue du Marché-aux-Herbes. The official residence of the Grand Duke of Luxembourg has a striking Spanish Renaissance facade. Summer guided tours cost €10 (July–August only). The changing of the guard outside takes place at 10:15 on weekdays — plan Day 1 accordingly if you want to see it.",
                  "15:30 — Place d&apos;Armes. The main square of the upper city is lined with cafes and is the social heart of Luxembourg City. People-watch from a terrace cafe (coffee €3–4). The square has a bandstand hosting free outdoor concerts in summer.",
                  "17:00 — Mudam — Luxembourg Museum of Modern Art. Designed by I.M. Pei and opened in 2006, Mudam houses one of Europe&apos;s finest collections of contemporary art in a striking glass pavilion built into the remains of the old Fort Thüngen on the Kirchberg plateau. Entry is €5 (free on the first Sunday of each month). The building itself — with Pei&apos;s geometric glass roof rising above the 18th-century stone foundations — is as impressive as the art inside.",
                  "19:30 — Dinner. For a classic Luxembourg brasserie experience: Brasserie Chiggeri on rue du Nord (€25–40/pp, judd mat gaardebounen — Luxembourg&apos;s national dish of smoked collar of pork with broad beans in cream sauce, local Moselle Riesling). For something more ambitious: Clairefontaine on Place de Clairefontaine (€60–90/pp, seasonal Luxembourg-French cuisine, Michelin recommended). For a memorable splurge: Mosconi on rue Münster in the Grund (2 Michelin stars, €100–140/pp — book 4 weeks ahead).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Free Train to Vianden Castle · Mullerthal Fairy-Tale Forest · Return Sunset Walk"
                cost="€10–25 (Vianden Castle entry + meals — all transport free)"
                items={[
                  "07:30 — Free train from Luxembourg Gare Centrale to Ettelbruck. Trains run hourly and take 55 minutes. Standard class is completely free — simply board. No ticket, pass, or registration needed. This is Luxembourg&apos;s permanent free public transport policy, in effect since February 2020.",
                  "08:25 — Transfer at Ettelbruck to Bus 570 to Vianden (also free). The bus takes approximately 30 minutes through the Our River valley and the wooded Ardennes landscape. Vianden village appears below you as the road descends — the castle above it is visible from kilometres away.",
                  "09:30 — Vianden Castle. Entry is €9. Vianden is one of the best-preserved medieval fortresses in Western Europe — the Counts of Vianden built it between the 11th and 14th centuries; Victor Hugo stayed here in 1871 exile and wrote about it extensively. The fully restored interior includes the Romanesque palace hall, banquet rooms, the count&apos;s private chapel, and a weapons collection. Allow 90 minutes minimum. The view from the castle walls over the Our River valley is remarkable on a clear day.",
                  "11:00 — Vianden village. The village below the castle is genuinely charming — stone-built streets, the Our River running through it, the Victor Hugo Museum (€4) in the house where he stayed. The chair lift (€6 return) across the valley from the village offers aerial views of the castle and the wooded hillsides. Grilled trout from the Our River served at village restaurants (€14–18) is one of Luxembourg&apos;s best casual meals.",
                  "13:30 — Free bus from Vianden towards Echternach (change at Diekirch). Echternach is the gateway to the Mullerthal region — Luxembourg&apos;s Little Switzerland. Take the free bus into the Mullerthal trail area.",
                  "14:30 — Mullerthal Trail Section 1, Gorge du Loup. The Mullerthal is Luxembourg&apos;s greatest natural secret: narrow sandstone gorges, moss-covered boulders the size of houses, ancient beech forest canopies. The scenery is unlike anywhere else in Benelux. The Gorge du Loup section takes 45 minutes for the gorge highlight or 2 hours for the full loop. Completely free. Download the Mullerthal Trail app for offline navigation.",
                  "17:30 — Free bus back towards Echternach and then free train back to Luxembourg City. Arrive back by 19:30. Evening walk back along the Chemin de la Corniche at sunset — the Alzette valley below fills with golden evening light and the church towers of the Grund cast long shadows. This is the best time of day for photographs of the city.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Luxembourg City" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Luxembourg City Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. All domestic transport to reach off-city sites is free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bock Casemates",
                  e: "€8",
                  d: "UNESCO-listed underground tunnel network carved into the sandstone Bock promontory between 1644 and 1746. 17km of galleries at full extent; the publicly accessible section includes gun batteries, troop quarters, and shafts overlooking the Alzette valley. Arrive at 9am opening for the best experience. One of the most extraordinary things you can do in Western Europe for €8.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Chemin de la Corniche",
                  e: "Free",
                  d: "The promenade running along the cliff edge above the Grund quarter, connecting the Bock promontory to the Cathedral quarter. Consistently described as &apos;Europe&apos;s most beautiful balcony.&apos; The views across the Alzette valley and the red rooftops of the Grund below are extraordinary at sunset. 1.5km long, 30–45 minutes at a leisurely pace.",
                  t: "Must see · Sunset",
                },
                {
                  n: "Grund Quarter",
                  e: "Free",
                  d: "The Alzette valley neighbourhood 70 metres below the old city, reached by cliff-face lifts or staircases. The most atmospheric quarter in Luxembourg City — Neumünster Abbey, riverside terraces, old mill buildings, and a character completely unlike the upper plateau. Morning light on the Grund from the Corniche above is exceptional.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Grand Ducal Palace",
                  e: "€10 (summer tours only)",
                  d: "The official residence of the Grand Duke of Luxembourg. Spanish Renaissance facade, changing of the guard at 10:15 on weekdays. Guided interior tours run in July and August only (€10, book ahead). The exterior and the surrounding Place Guillaume II are free to visit year-round. The palace is in daily use — the Grand Duke of Luxembourg is a genuine working head of state.",
                  t: "Exterior free · 30 mins",
                },
                {
                  n: "Mudam — Museum of Modern Art",
                  e: "€5 (free 1st Sunday)",
                  d: "I.M. Pei&apos;s glass pavilion built into the 18th-century Fort Thüngen ramparts on the Kirchberg plateau. One of Europe&apos;s finest contemporary art collections. The building itself — Pei&apos;s geometric glass roof rising from sandstone foundations — is remarkable. Free on the first Sunday of each month.",
                  t: "Art lovers · 1.5 hrs",
                },
                {
                  n: "Vianden Castle",
                  e: "€9 (+ free bus/train to reach)",
                  d: "One of Western Europe&apos;s best-preserved medieval fortresses, perched above the Our River valley 90 minutes from Luxembourg City by free train and bus. Fully restored interior with count&apos;s palace, chapel, banquet halls, and weapons collection. Victor Hugo lived here in exile. The valley views from the castle walls are among the finest in Luxembourg.",
                  t: "Day trip · 3 hrs",
                },
                {
                  n: "Mullerthal Trail (Little Switzerland)",
                  e: "Free",
                  d: "Sandstone gorges, moss-covered boulders, and ancient beech forest in eastern Luxembourg. The Gorge du Loup section of Section 1 near Echternach takes 45 minutes for the highlights or 2 hours for the full loop. Completely free; reachable by free bus from Echternach. The most dramatic natural landscape in Benelux.",
                  t: "Half-day · Free",
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
            title="Luxembourg City — Cliffs, Valleys &amp; Castles"
            subtitle="A UNESCO fortress city with 17km of underground tunnels and a fairytale day-trip landscape."
            spots={[
              {
                name: "Bock Casemates",
                query: "bock casemates luxembourg city underground tunnels fortress sandstone",
                desc: "The UNESCO-listed underground tunnel network carved into the sandstone cliffs of the Bock promontory — one of Europe&apos;s most extraordinary €8 experiences.",
              },
              {
                name: "Grund Quarter",
                query: "luxembourg city grund quarter alzette river valley medieval",
                desc: "The Alzette valley neighbourhood 70 metres below the old city — Luxembourg&apos;s most atmospheric quarter with riverside terraces and Neumünster Abbey.",
              },
              {
                name: "Vianden Castle",
                query: "vianden castle luxembourg our river valley medieval fortress",
                desc: "One of Western Europe&apos;s best-preserved medieval fortresses, perched dramatically above the Our River valley — reachable by free train and bus.",
              },
              {
                name: "Chemin de la Corniche",
                query: "chemin de la corniche luxembourg city cliff promenade panorama",
                desc: "&apos;Europe&apos;s most beautiful balcony&apos; — the free cliff-edge promenade overlooking the Grund quarter and the Alzette valley below.",
              },
              {
                name: "Mullerthal Gorge",
                query: "mullerthal luxembourg little switzerland sandstone gorge beech forest",
                desc: "Luxembourg&apos;s Little Switzerland — narrow sandstone gorges and moss-covered boulders in the Mullerthal fairy-tale forest, completely free to explore.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Luxembourg is expensive by European standards — but the permanent free public transport policy eliminates an entire cost category. Budget travellers staying in hostels and eating at brasseries can cover 2 full days (including the Vianden day trip) for €110–€150 total, excluding accommodation.
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
                    ["🏨 Accommodation (2 nights)", "€60–90 (hostel)", "€160–240 (3-star)", "€500–900 (5-star)"],
                    ["🚂 Transport (all domestic)", "€0 (free)", "€0 (free)", "€160 (private car)"],
                    ["🏛️ Bock Casemates", "€8", "€8", "€8"],
                    ["🏰 Vianden Castle", "€9", "€9 + €5 tour", "€9 + €80 private"],
                    ["🎨 Mudam (Modern Art)", "€0 (free Sunday)", "€5", "€5"],
                    ["🍽️ Food (2 days)", "€36–56 (brasseries)", "€90–130 (restaurants)", "€200–300 (Michelin)"],
                    ["🍷 Wine tasting / extras", "€0–10", "€18–25", "€40–60"],
                    ["TOTAL (per person)", "€113–173", "€290–422", "€1,002–1,362"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Youth Hostel Luxembourg City (€30–45/night), eat at brasseries and supermarkets, use all free transport. Completely viable — Luxembourg&apos;s hostel is well-located and modern.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel Simoncini or similar 3-star in the old quarter (€80–120/night), dine at Brasserie Chiggeri, do a wine tasting, take the Vianden guided tour. The sweet spot for comfort.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€350–550/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Le Place d&apos;Armes (€250–400/night overlooking the Grand Ducal Palace square), dinner at Mosconi (2 Michelin stars), private guide and car for Vianden.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Luxembourg City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The old city (Ville Haute) and the Grund quarter are the best areas for a first visit — you are walking distance from the Bock Casemates, the Corniche, and the Grand Ducal Palace. The Kirchberg plateau (where Mudam is located) is convenient but less atmospheric.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Le Place d&apos;Armes",
                  type: "5-star boutique · Place d&apos;Armes, Ville Haute",
                  price: "From €250/night",
                  badge: "Most prestigious",
                  desc: "The most celebrated address in Luxembourg City — a boutique hotel occupying a row of restored townhouses directly on Place d&apos;Armes, the main square. Rooms have fortress wall views. The hotel restaurant is Michelin-recommended. An extraordinary location for the price compared to equivalent addresses in Paris or Amsterdam.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Simoncini",
                  type: "3-star art hotel · Rue Notre-Dame, Ville Haute",
                  price: "From €90/night",
                  badge: "Best mid-range",
                  desc: "A privately owned 3-star hotel with an art gallery on the ground floor, 5 minutes&apos; walk from the Grand Ducal Palace. The rooms are well-designed, the location is excellent, and the staff are notably helpful with local restaurant recommendations. The best mid-range option in the old city.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Youth Hostel Luxembourg City",
                  type: "Hostel · Rue du Fort Olisy, near Grund",
                  price: "From €30/night (dorm)",
                  badge: "Best budget",
                  desc: "Luxembourg&apos;s official youth hostel is well-located on the cliff edge near the Grund quarter, with views over the valley. Modern facilities, good kitchen, and a short walk from both the Bock Casemates and the Chemin de la Corniche. The best budget option in the city — book ahead in summer.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Le Royal Luxembourg",
                  type: "5-star · Boulevard Royal, Ville Haute",
                  price: "From €300/night",
                  badge: "Business luxury",
                  desc: "The Grand Duchy&apos;s flagship luxury hotel — indoor pool, full spa, and a central location on Boulevard Royal in the financial district. More corporate in character than Hotel Le Place d&apos;Armes, but the facilities are exceptional and the location is very convenient for the old city and the Kirchberg.",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Luxembourg City</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Luxembourg City has a genuinely excellent restaurant scene — better than its size suggests. The national dish is judd mat gaardebounen (smoked collar of pork with broad beans in cream sauce). Moselle Riesling, grown 30 minutes from the city, is the wine to drink. Avoid generic tourist restaurants around Place d&apos;Armes and walk 5 minutes to the Grund for the real thing.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Le Bouquet Garni",
                  t: "Traditional Luxembourgish · Rue de l&apos;Eau, Grund",
                  d: "One of Luxembourg&apos;s most respected traditional restaurants, in the Grund quarter near the Alzette river. The kitchen does classical Luxembourgish cuisine with genuine skill — judd mat gaardebounen, fried gudgeon from the Moselle, and riesling spaetzle are all outstanding. Two-course lunch €18–24. Dinner €35–50. Book ahead for dinner; weekday lunch is usually walk-in.",
                  b: "Best traditional",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Mosconi",
                  t: "2 Michelin stars · Rue Münster, Grund",
                  d: "Luxembourg City&apos;s most prestigious restaurant, run by Italian chef Ilario Mosconi for over two decades. Two Michelin stars for Italian-Luxembourg fusion cuisine with the finest seasonal produce from the Ardennes and Moselle valley. Tasting menu €110–140/pp. The wine list is extraordinary. Book 4–6 weeks ahead. Closed Sunday and Monday.",
                  b: "Most prestigious",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Clairefontaine",
                  t: "Michelin recommended · Place de Clairefontaine",
                  d: "A Michelin Guide stalwart near the cathedral, serving seasonal Luxembourg-French cuisine in a beautiful dining room facing Place de Clairefontaine. Chef Arnaud Magnier&apos;s cooking is precise and elegant — duck from the Ardennes, pike-perch from the Moselle, Luxembourg strawberries in season. Two-course lunch €38. Dinner €65–90/pp.",
                  b: "Elegant dining",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Brasserie Chiggeri",
                  t: "Traditional brasserie · Rue du Nord, Ville Haute",
                  d: "The city&apos;s most respected traditional brasserie — not tourist-facing, consistently good, and priced reasonably by Luxembourg standards. Judd mat gaardebounen (€16), Moselle wine by the glass (€5–7), and a proper brasserie atmosphere without the tourist pricing of Place d&apos;Armes. One of the best straightforward meals in the city for €25–35/pp.",
                  b: "Best brasserie",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Ma Langue Sourit",
                  t: "Michelin Bib Gourmand · Luxembourg City",
                  d: "Michelin&apos;s Bib Gourmand award for exceptional value — chef Cyril Molard&apos;s seasonal Luxembourg menu using local producers from the Ardennes and Moselle valley. Two courses at lunch cost €28–35, making it the best value Michelin-level meal in the city. Reservations recommended.",
                  b: "Best value Michelin",
                  c: "bg-teal-50 border-teal-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
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
            destination="Luxembourg City"
            hotels={[
              {
                name: "Hotel Le Place d&apos;Armes",
                type: "5-star boutique · Place d&apos;Armes, Ville Haute",
                price: "From €250/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/lu/le-place-d-armes.html?aid=2820480",
              },
              {
                name: "Hotel Simoncini",
                type: "3-star art hotel · Rue Notre-Dame",
                price: "From €90/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/lu/simoncini.html?aid=2820480",
              },
              {
                name: "Hotel Le Royal Luxembourg",
                type: "5-star · Boulevard Royal",
                price: "From €300/night",
                rating: "5",
                badge: "Spa & pool",
                url: "https://www.booking.com/hotel/lu/le-royal-luxembourg.html?aid=2820480",
              },
              {
                name: "Youth Hostel Luxembourg City",
                type: "Hostel · Near Grund quarter",
                price: "From €30/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/lu/youth-hostel-luxembourg.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Luxembourg City Walking Tour",
                duration: "3 hrs",
                price: "From €18/person",
                badge: "Best orientation",
                url: "https://www.getyourguide.com/s/?q=Luxembourg+City+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Vianden Castle Guided Tour",
                duration: "Half day",
                price: "From €35/person",
                badge: "Top day trip",
                url: "https://www.getyourguide.com/s/?q=Vianden+Castle+Luxembourg&partner_id=PSZA5UI",
              },
              {
                name: "Mullerthal Hiking Guide",
                duration: "Half day",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=Mullerthal+Luxembourg+hiking&partner_id=PSZA5UI",
              },
              {
                name: "Luxembourg Moselle Wine Tour",
                duration: "4 hrs",
                price: "From €45/person",
                url: "https://www.getyourguide.com/s/?q=Luxembourg+Moselle+wine+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Luxembourg City</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚌",
                  title: "Paying for public transport",
                  desc: "Luxembourg made all standard-class public transport permanently free in February 2020 — trains, trams, and buses. Many visitors still buy tickets out of habit or simply do not know. This mistake costs real money: a return train to Vianden would be €8–12 if it were not free. Just board any train or bus; no ticket or app is required for standard class.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏰",
                  title: "Treating Luxembourg City as a 3-hour transit stop",
                  desc: "Train travellers between Brussels and Strasbourg regularly stop 2–4 hours in Luxembourg and leave thinking it was pleasant but unremarkable. The Bock Casemates alone take 90 minutes. The Grund quarter requires 2 hours. Vianden is a full day. The Mullerthal is a half day. Luxembourg City deserves 2 full days minimum — anything less is skimming the surface.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌿",
                  title: "Skipping the Mullerthal fairy-tale forest",
                  desc: "The Mullerthal region is Luxembourg&apos;s greatest secret from most non-Belgian tourists. Narrow sandstone gorges, moss-covered boulders as large as houses, and ancient beech forest — landscape unlike anywhere else in Benelux, completely free, reachable by free bus from Echternach. If your Day 2 ends early at Vianden, extend it to the Mullerthal.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating only on Place d&apos;Armes",
                  desc: "The tourist restaurants around Place d&apos;Armes serve adequate but unremarkable food at inflated prices. Walk 5 minutes to the Grund quarter — Le Bouquet Garni, the Neumünster brasseries, and the riverside terraces serve better food at better prices. Brasserie Chiggeri on rue du Nord is the best traditional brasserie in the city and is never mentioned in tourist brochures.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🕘",
                  title: "Missing the Bock Casemates at opening time",
                  desc: "The Bock Casemates fill rapidly with tour groups from Belgium and Germany by 10:30am. At 9am opening you can spend 45 minutes in the underground galleries with almost nobody else there — the gun chambers, the cliff-edge views, the shafts dropping 40 metres — before the crowds arrive. This transforms the experience.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Luxembourg City</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚆",
                  title: "Use free transport aggressively — download the CFL app",
                  desc: "The Luxembourg CFL (national rail) app gives real-time departures and route planning for the entire free transport network. Trains run hourly to Ettelbruck (for Vianden) and buses connect regularly to Echternach (for Mullerthal). Plan your Vianden day trip around the 07:30 or 08:30 departure to beat the crowds.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the Corniche at sunset, not at 10am",
                  desc: "Most visitors walk the Chemin de la Corniche as a morning orientation exercise and miss its best version. At 6:30–7:30pm in summer, the Alzette valley below fills with golden light, church towers cast long shadows across the Grund rooftops, and the sandstone cliffs glow amber. Walk it at sunset for photographs that look genuinely extraordinary.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍷",
                  title: "Drink Luxembourg Moselle Riesling — it is exceptional",
                  desc: "The Luxembourg Moselle valley (30 minutes from the city) produces first-rate Riesling, Pinot Gris, and Crémant sparkling wine that almost nobody outside the Grand Duchy knows about. Ask specifically for Moselle Luxembourg wines at any restaurant — they are often not prominently listed. A supermarket bottle of Caves Bernard-Massard Riesling (€7–10) is outstanding.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏰",
                  title: "Arrive at Vianden Castle before 9:45am",
                  desc: "Vianden Castle opens at 10am in season. If you take the 07:30 free train from Luxembourg City, you arrive at Vianden village around 09:30 — giving you 30 minutes to walk up to the castle entrance and have it largely to yourself for the first hour. By 11am the tour groups arrive and the experience changes completely.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗓️",
                  title: "Visit Mudam on the first Sunday of the month",
                  desc: "Mudam — I.M. Pei&apos;s remarkable glass pavilion housing Luxembourg&apos;s contemporary art collection — is free on the first Sunday of every month. If your visit falls on a first Sunday, build in 90 minutes for Mudam at no cost. Otherwise €5 is still excellent value for the building and collection.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🗺️",
                  title: "The Grund is not just a viewpoint — spend 2 hours there",
                  desc: "Many visitors descend to the Grund, photograph the Neumünster Abbey from the riverside, and immediately return to the upper city by lift. The Grund rewards 2 hours: the abbey cloister (free), the old mill building, the riverside terraces, the cliff-face perspective looking up at the Corniche, and the quiet streets of the lower old town. Have lunch here before returning.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Luxembourg City" />

          {/* Combine With */}
          <CombineWith currentSlug="luxembourg-city-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is public transport really free in Luxembourg?",
                  a: "Yes — since 29 February 2020, all standard-class public transport in Luxembourg (trains, trams, and buses) has been permanently free for everyone, residents and tourists alike. This includes the train from Luxembourg City to Ettelbruck (for the Vianden connection), the Bus 570 from Ettelbruck to Vianden, and the buses to Echternach for the Mullerthal. First class on trains costs €2 per journey. Simply board any standard-class service; no ticket, app, or registration is required.",
                },
                {
                  q: "How do I get from Luxembourg City to Vianden Castle?",
                  a: "Take the free train from Luxembourg Gare Centrale to Ettelbruck (55 minutes, hourly departures). At Ettelbruck, transfer to Bus 570 (free, approximately 30 minutes) to Vianden village. Total journey is 85–95 minutes each way. The bus stops in the village 10 minutes&apos; walk below the castle entrance. Allow a full day for the round trip if you also want to visit the Mullerthal on the way back.",
                },
                {
                  q: "What is the Mullerthal and is it worth visiting?",
                  a: "The Mullerthal (also called Luxembourg&apos;s Little Switzerland) is a region of sandstone rock formations, narrow gorges, and ancient beech forest in eastern Luxembourg around the town of Echternach. The Mullerthal Trail Section 1 through the Gorge du Loup takes 45 minutes for the most scenic gorge section or 2 hours for the full loop. It is completely free to walk, reachable by free bus from Echternach, and the landscape is genuinely spectacular — unlike anything else in Benelux.",
                },
                {
                  q: "What is the best time to visit Luxembourg City?",
                  a: "May–June and September–October are ideal — mild temperatures (14–22°C), long daylight hours for walking the Corniche and Mullerthal, and fewer crowds than July–August. December is excellent for Christmas markets with the illuminated old city and Grand Ducal Palace. July–August are the busiest months with Belgian and German summer tourists. January–February are cold and quiet.",
                },
                {
                  q: "What is Luxembourg&apos;s national dish and where should I eat it?",
                  a: "Luxembourg&apos;s national dish is judd mat gaardebounen — smoked collar of pork (similar to smoked ham) served with broad beans in a cream sauce. It is found only in Luxembourg and is outstanding when properly prepared. Avoid tourist restaurants on Place d&apos;Armes for this dish. Go instead to Brasserie Chiggeri on rue du Nord (€16), Le Bouquet Garni in the Grund, or any traditional brasserie in the Clausen quarter.",
                },
                {
                  q: "Is 2 days enough for Luxembourg City?",
                  a: "Two full days is the ideal minimum. Day 1 covers the Bock Casemates (€8, 1.5 hrs), the Chemin de la Corniche (free, 45 mins), the Grund quarter (free, 2 hrs), the Grand Ducal Palace exterior (free), and Mudam (€5). Day 2 is the Vianden Castle day trip (€9 entry, all transport free) with optional Mullerthal hiking. Three days would allow you to add the Moselle valley wine region — but 2 days covers the essential Luxembourg experience.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Luxembourg City trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/brussels-3-days", label: "Brussels 3 Days", icon: "🇧🇪" },
                { href: "/blog/bruges-3-days", label: "Bruges 3 Days", icon: "🏰" },
                { href: "/blog/strasbourg-3-days", label: "Strasbourg 3 Days", icon: "🇫🇷" },
                { href: "/blog/cologne-3-days", label: "Cologne 3 Days", icon: "⛪" },
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
          <RelatedGuides currentSlug="luxembourg-city-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Western Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Brussels in 3 Days — Grand Place &amp; Art Nouveau", href: "/blog/brussels-3-days" },
                { label: "Bruges in 3 Days — Canals &amp; Chocolate", href: "/blog/bruges-3-days" },
                { label: "Strasbourg 3 Days — Alsace Wine Route", href: "/blog/strasbourg-3-days" },
                { label: "Cologne 3 Days — Cathedral &amp; Carnival", href: "/blog/cologne-3-days" },
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
