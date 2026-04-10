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
const BORDEAUX_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Bordeaux Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Bordeaux 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bordeaux in 3 Days — Miroir d%27Eau%2C Saint-Émilion and La Cité du Vin&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bordeaux-3-days"
        imageUrl="https://images.unsplash.com/photo-1589483232748-515c025575bc?w=1200&q=80"
        description="Bordeaux in 3 Days: Miroir d&apos;Eau, Saint-Émilion day trip, La Cité du Vin wine museum — complete itinerary with real euro prices."
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
export default function BordeauxClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BORDEAUX_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bordeaux" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bordeaux france wine city place de la bourse miroir eau waterfront"
            fallback="https://images.unsplash.com/photo-1589483232748-515c025575bc?w=1600&q=80"
            alt="Bordeaux Place de la Bourse reflected in the Miroir d&apos;Eau water mirror at sunset"
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
              <span className="text-white/70">Bordeaux 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage City
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bordeaux in 3 Days:
                <em className="italic text-amber-300"> Wine Country, Miroir d&apos;Eau &amp; Saint-Émilion</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                La Cité du Vin, the Miroir d&apos;Eau at golden hour, a UNESCO medieval village 35 minutes away by train, and oysters with white wine at 10am. The complete honest guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇫🇷 Bordeaux, France</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bordeaux reinvented itself — from a sleepy port city into one of France&apos;s most beautiful urban transformations. The 18th-century golden limestone architecture, the world&apos;s largest fine wine region on its doorstep, La Cité du Vin museum, and a tram system that means you never need a car. The Miroir d&apos;Eau at golden hour is the most photographed reflection in France.
            </p>
          </blockquote>

          {/* ── WHAT BORDEAUX ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bordeaux Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              For most of the 20th century, Bordeaux was famous for its wine and little else — a grimy, traffic-choked port city that visitors flew over on the way to Paris. The transformation began in 2000 when the city tore out its car infrastructure, built one of France&apos;s best tram networks, and spent two decades restoring the 18th-century limestone city centre. In 2007 the historic centre was inscribed as a UNESCO World Heritage Site — one of the largest urban World Heritage areas in the world at 1,810 hectares.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What you find today is a city that rewards walking. The Grand Théâtre (1780) is one of Europe&apos;s finest neoclassical opera houses. The Place de la Bourse — and the Miroir d&apos;Eau water mirror in front of it — is arguably the most beautiful public square in France. The Chartrons quarter (once the centre of the wine trade, now full of antiques dealers and wine bars) has a neighbourhood character that few French cities match. And La Cité du Vin — the world&apos;s most ambitious wine museum — opened in 2016 and changed the city&apos;s identity again.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Most importantly: Saint-Émilion is 35 minutes away by regional train. A UNESCO-listed medieval wine village built from limestone, surrounded by some of the most famous grand cru estates on earth, with a 12th-century monolithic church carved entirely from solid rock. Almost nobody who visits Bordeaux regrets doing this day trip. Almost nobody who skips it forgives themselves.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BOD" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🍷" label="Wine Estates" value="7,000+" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bordeaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–22°C, long evenings, café terraces fully open. The vineyards are green and flowering in May. Fewer crowds than summer, excellent prices on accommodation. The ideal window for city exploration and château visits.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍇",
                  t: "Harvest Season — Outstanding",
                  d: "The vendange (harvest) runs mid-September to mid-October. Châteaux are at their most active, the air smells of fermenting grapes, vineyards turn amber and gold. Slightly less crowded than summer with exceptional autumn light for photography.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy &amp; Hot",
                  d: "25–35°C, very busy especially around Place de la Bourse and Saint-Émilion. Prices peak in August. The Miroir d&apos;Eau is at its most atmospheric on calm summer evenings. Wine bars and restaurants are at their liveliest. Book accommodation ahead.",
                  b: "Book ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet &amp; Affordable",
                  d: "8–14°C, occasional rain. The city is quiet, prices drop significantly, and you get the museums and restaurants without queues. La Cité du Vin is best visited in winter when you have space to absorb the exhibitions. Christmas markets in December are excellent.",
                  b: "For budget travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: `${s.s} — ${s.t}` }} />
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Bordeaux</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bordeaux Saint-Jean is the main station, in the city centre. The TGV from Paris Montparnasse takes just <strong className="font-medium">2 hours 4 minutes</strong> — significantly better than flying when you factor in airport time. Advance tickets from <strong className="font-medium">€30</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "TGV from Paris Montparnasse (recommended)",
                  d: "Paris Montparnasse → Bordeaux Saint-Jean: 2 hours 4 minutes. Advance tickets from €30–80 on SNCF Connect or Trainline — book 6–8 weeks ahead for the best prices. Full-fare tickets can reach €150 but advance booking almost always yields good prices. Services run approximately every 30–45 minutes throughout the day.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Bordeaux-Mérignac (BOD)",
                  d: "Direct flights from London (EasyJet, British Airways, 1h40m), Amsterdam, Madrid, Rome, and other European cities. The airport is 12km west of the city centre. Tram line A connects the airport to the centre in 45 minutes (€1.80). A taxi costs €35–45.",
                  b: "Good for international",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Paris or other French cities",
                  d: "FlixBus and BlaBlaBus serve Bordeaux from Paris (4–5 hours, from €9–25) and other French cities. Slower than the TGV but significantly cheaper. Departs from Bercy Seine in Paris. Good option for budget travellers with flexible schedules.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Paris",
                  d: "580km via A10 motorway, approximately 5–6 hours. Toll charges Paris to Bordeaux around €40–50 one way. Car is most useful if you plan to visit Médoc châteaux, which are not accessible by train. Parking in Bordeaux city centre is expensive — use the park-and-ride (tramway relais) at €3.50/day.",
                  b: "Flexible for wine country",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Bordeaux Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers the city highlights on Day 1, Saint-Émilion on Day 2, and La Cité du Vin with the Chartrons quarter on Day 3.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Place de la Bourse · Old Town · Darwin Ecosystème"
                cost="€35–50 total"
                items={[
                  "7:30am — Place de la Bourse at sunrise. The 18th-century neoclassical façade and the Miroir d'Eau water mirror create the most photographed reflection in France. The water layer is thinnest and most still at dawn on calm mornings — the reflection is at its best. Free to visit at all hours.",
                  "9:00am — Marché des Capucins (the 'belly of Bordeaux'). Oysters and a glass of Entre-Deux-Mers white wine at 10am is a genuine Bordeaux Saturday morning tradition, practiced entirely by locals. Oysters from €8 a dozen, wine €3–4 a glass. Budget €10–15 for a proper market breakfast.",
                  "11:00am — Rue Sainte-Catherine — the longest pedestrian shopping street in France (1.2km). Browse independent shops and look up at the golden limestone architecture. The scale of the streetscape is remarkable.",
                  "12:30pm — Lunch in the Saint-Pierre quarter. The medieval old town is full of small wine bars (caves à manger) serving charcuterie boards and glasses of Bordeaux from €12–18. Try the streets around Rue du Parlement-Saint-Pierre and Rue des Faussets.",
                  "2:30pm — Grosse Cloche bell tower — one of the oldest belfries in France, 15th century. Free to view from outside; €3 to climb for views over the old town.",
                  "4:00pm — Cathédrale Saint-André and the adjacent Tour Pey-Berland. The Gothic cathedral (11th–16th century) is the most important church in Bordeaux — climb the detached bell tower (€6) for the best aerial view of the city's rooflines and the surrounding Gironde countryside.",
                  "5:30pm — Miroir d'Eau at golden hour. Return to Place de la Bourse for the evening light — entirely different in character from the morning. The warm amber tones on the Bourse façade at sunset are the classic Bordeaux photograph.",
                  "8:00pm — Darwin Ecosystème — a converted 19th-century military barracks on the right bank of the Garonne, now housing street art, organic food stalls, craft beer, and evening food trucks. A genuinely local alternative to the tourist restaurants near the Bourse. Dinner budget €10–15.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Saint-Émilion Day Trip (UNESCO, 45 min by train)"
                cost="€40–55 total including transport"
                items={[
                  "8:30am — Regional train from Bordeaux Saint-Jean station to Saint-Émilion (€11 return, approximately 45 minutes). Trains run roughly every hour; no advance booking needed.",
                  "9:15am — Arrive Saint-Émilion. A medieval UNESCO World Heritage village built into limestone cliffs above the vineyards. The entire village — cobbled streets, Romanesque church towers, vine-covered walls — is classified grand cru. There are no ugly buildings in Saint-Émilion.",
                  "9:30am — Wander the cobbled streets: Rue Guadet, Place du Marché, the Collegiate Church cloister. The village is quietest before 11am — after midday, tour groups arrive from Bordeaux and the streets become crowded.",
                  "10:30am — Monolithic Church carved directly from the rock (€8 — the largest monolithic church in Europe, 12th century, carved entirely by hand into the solid limestone cliff face). The underground catacombs are part of the same complex. The scale of the excavation is extraordinary.",
                  "12:00pm — Wine tasting at a château. Most estates offer walk-in tastings for €8–15 for 3 wines plus a brief tour. The Saint-Émilion tourist office maintains a full list of châteaux accepting visitors. Château Fonroque and Château Pavie Macquin are both accessible and produce excellent wines.",
                  "1:30pm — Lunch in Saint-Émilion with a glass of grand cru. Budget restaurants serve two-course menus for €18–22. The main Place du Marché has several options; the side streets are slightly better value.",
                  "4:00pm — Final browse of the village wine shops. Direct-from-producer pricing in Saint-Émilion consistently beats Bordeaux city retail by 20–30%. If you want to take a bottle home, this is the moment.",
                  "5:00pm — Train back to Bordeaux Saint-Jean. Evening dinner at a cave à manger in the city: sardines, duck rillettes, a cheese course, and a half-bottle of Médoc.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="La Cité du Vin (€22) · Chartrons Quarter · Grand Théâtre"
                cost="€40–55 total"
                items={[
                  "9:30am — La Cité du Vin (€22, open from 9:30am). The world's most ambitious wine museum and an architectural landmark designed by XTU Architects to resemble wine swirling in a glass. The permanent exhibition takes 2–3 hours and covers wine history, geography, mythology, and culture spanning 3,000 years across 20 rooms. One glass of wine from the global selection is included in the ticket at the Belvédère panoramic tasting bar on the 8th floor.",
                  "1:00pm — Lunch in the Chartrons quarter. Bordeaux's historic antiques district is now full of independent wine-focused restaurants and neighbourhood bistros. Budget lunch from €13. The streets around Rue Notre-Dame and Cours Xavier-Arnozan are the best area.",
                  "2:30pm — Browse the antiques and vintage shops along Rue Notre-Dame in the Chartrons. The quarter was the heart of the Bordeaux wine trade for centuries — English, Dutch, and Irish wine merchants established their warehouses (chais) here in the 17th and 18th centuries. Many are now antiques dealers, wine bars, or restaurants.",
                  "4:00pm — Grand Théâtre de Bordeaux. Victor Louis's 1780 neoclassical opera house is widely considered the finest in France — the original inspiration for the Paris Opéra Garnier. The exterior colonnade of 12 Corinthian columns is best photographed in the late afternoon light. Free to view from outside; guided interior tours available.",
                  "5:30pm — L'Intendant wine tower on Allées de Tourny — 6 spiral floors stocking 15,000 bottles, with genuinely expert staff. Remarkable shop for taking wine home without overpaying.",
                  "7:30pm — Farewell dinner at a cave à manger on Rue du Parlement-Saint-Pierre — shared table, rotating seasonal dishes, short wine list focused on smaller Bordeaux producers. Budget €25–35 per person including wine.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bordeaux" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Bordeaux Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Most are free or low cost — the main paid attraction is La Cité du Vin at €22, which is worth every euro.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Cité du Vin",
                  e: "€22 (includes panoramic tasting)",
                  d: "The world's most ambitious wine museum — 20 rooms covering 3,000 years of wine history, geography, and culture. The building (XTU Architects) is a Bordeaux landmark designed to resemble wine swirling in a glass. The ticket includes a glass of wine from the global collection at the 8th-floor Belvédère bar with panoramic views over the Garonne. Allow 2–3 hours. Open from 9:30am.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Place de la Bourse & Miroir d'Eau",
                  e: "Free",
                  d: "The 18th-century neoclassical Bourse façade and the world's largest reflecting pool in front of it. The Miroir d'Eau works best at dawn and on still evenings — any wind breaks the reflection completely. Visit twice: once at sunrise and once at golden hour. The 5-minute walk from the old town makes it easy.",
                  t: "Must see · Sunrise + sunset",
                },
                {
                  n: "Saint-Émilion Village",
                  e: "Free entry to village · €8 Monolithic Church",
                  d: "UNESCO World Heritage medieval wine village, 45 minutes by regional train from Bordeaux Saint-Jean (€11 return). The 12th-century monolithic church carved from solid limestone is the largest in Europe. Walk-in château tastings from €8–15. The entire village is classified as a wine appellation — probably the most beautiful wine village in the world.",
                  t: "Day trip · Full day",
                },
                {
                  n: "Cathédrale Saint-André & Tour Pey-Berland",
                  e: "Cathedral free · Bell tower €6",
                  d: "Bordeaux's Gothic cathedral (11th–16th century). Climb the detached Tour Pey-Berland (50m, 231 steps) for the best aerial view of the city — the rooflines, the Garonne, and the surrounding Gironde plain.",
                  t: "Worth visiting · 1 hr",
                },
                {
                  n: "Chartrons Antique District",
                  e: "Free to explore",
                  d: "Bordeaux's historic wine trading quarter, now the city's most charming neighbourhood. The Sunday market on Quai des Chartrons (8am–1pm) is one of the best antiques markets in southwest France. The streets around Rue Notre-Dame have independent wine bars, vintage shops, and restaurants that are largely tourist-free.",
                  t: "Neighbourhood · Half day",
                },
                {
                  n: "Darwin Ecosystème",
                  e: "Free to enter",
                  d: "A converted 19th-century military barracks on the right bank of the Garonne. Now home to street art, an organic food market, craft beer, a skate park, and food trucks. Entirely local in character — one of the few Bordeaux attractions where you'll be surrounded almost entirely by residents rather than visitors. Best at weekends from 6pm.",
                  t: "Local experience · Evening",
                },
                {
                  n: "Grand Théâtre de Bordeaux",
                  e: "Exterior free · Interior tours available",
                  d: "Victor Louis's 1780 masterpiece — widely considered the finest neoclassical opera house in France. The 12-column Corinthian colonnade influenced the design of the Paris Opéra Garnier. The interior (gold leaf, marble, exceptional acoustics) can be visited by guided tour. Check the programme — attending a performance is one of Bordeaux's great experiences.",
                  t: "Architectural landmark · 30 mins",
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
            title="Bordeaux — Wine City, Miroir d&apos;Eau &amp; Saint-Émilion"
            subtitle="The golden limestone city and its extraordinary wine country surroundings."
            spots={[
              {
                name: "Miroir d'Eau at Sunset",
                query: "bordeaux miroir eau place bourse sunset reflection france",
                desc: "The Miroir d'Eau water mirror reflecting the 18th-century Place de la Bourse at golden hour — the most photographed reflection in France.",
              },
              {
                name: "La Cité du Vin",
                query: "la cite du vin bordeaux wine museum architecture france",
                desc: "La Cité du Vin — the world's most ambitious wine museum, designed to resemble wine swirling in a glass, overlooking the Garonne.",
              },
              {
                name: "Saint-Émilion Village",
                query: "saint emilion medieval village vineyards bordeaux unesco france",
                desc: "The UNESCO World Heritage medieval village of Saint-Émilion, surrounded by grand cru vineyards 45 minutes from Bordeaux by train.",
              },
              {
                name: "Bordeaux Old Town Limestone",
                query: "bordeaux old town limestone architecture france historic centre",
                desc: "The golden limestone façades of Bordeaux's 18th-century UNESCO World Heritage city centre — one of the largest urban World Heritage areas in the world.",
              },
              {
                name: "Chartrons Wine Quarter",
                query: "bordeaux chartrons quarter wine antiques neighbourhood france",
                desc: "The Chartrons — Bordeaux's historic wine trading district, now the city's most charming neighbourhood with wine bars and antique dealers.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bordeaux is one of the more affordable major French cities — significantly cheaper than Paris for accommodation and food. The tram network eliminates most transport costs within the city.
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
                    ["🏨 Accommodation (per night)", "€20–40", "€80–150", "€300–800"],
                    ["🍽️ Food (per day)", "€15–20", "€35–60", "€100–300"],
                    ["🚋 Local transport (per day)", "€5–8", "€10–20", "€30–80"],
                    ["🏛️ Activities & entry fees", "€10–20", "€30–60", "€100–300"],
                    ["🚄 TGV from Paris (one way)", "€30–50", "€50–80", "€80–150"],
                    ["TOTAL (per day in Bordeaux)", "€50–88", "€155–290", "€530–1,480"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (€50–88/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Auberge de Jeunesse hostel (€20–30/night dorm), market meals at Marché des Capucins, cave à manger lunch (€13–15), tram everywhere. La Cité du Vin (€22) is worth the splurge even on a tight budget. Saint-Émilion day trip costs €11 return by train.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€155–290/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel Burdigala or similar 4-star (€100–150/night), lunch at Le Chapon Fin or Brasserie Bordelaise (€30–45), evening wine tasting with a sommelier (€25–40). Private château visit in Saint-Émilion (€30–60 per person). The sweet spot for Bordeaux.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€530+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">InterContinental Bordeaux Le Grand Hôtel on Place de la Comédie (from €350/night), dinner at Le Pressoir d&apos;Argent by Gordon Ramsay (2 Michelin stars, €200+ per person), private helicopter over the Médoc châteaux (€600–900/flight).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bordeaux</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best area to stay is the Saint-Pierre medieval quarter — cobbled streets, wine bars, and restaurants everywhere, 5 minutes walk to Place de la Bourse. Chartrons (the antiques quarter) is equally good with a more local feel. Avoid the Saint-Jean station area unless on a very tight budget.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "InterContinental Bordeaux Le Grand Hôtel",
                  type: "5-star · Place de la Comédie, opposite Grand Théâtre",
                  price: "From €350/night",
                  badge: "Most prestigious",
                  desc: "Bordeaux's grandest hotel — a 19th-century palace on Place de la Comédie directly facing the Grand Théâtre. Home to Le Pressoir d'Argent by Gordon Ramsay (2 Michelin stars). The rooftop pool and terrace overlook the entire old city. The benchmark for luxury in Bordeaux.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Burdigala",
                  type: "4-star · Triangle d'Or, central Bordeaux",
                  price: "From €120/night",
                  badge: "Best mid-range",
                  desc: "A consistently well-reviewed 4-star in the Triangle d'Or, Bordeaux's upmarket shopping district. Contemporary rooms, excellent service, and a location that puts you 10 minutes walk from Place de la Bourse and 5 minutes from Rue Sainte-Catherine. Good wine bar on site.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Boutique Hotels in Saint-Pierre",
                  type: "3-star boutique · Medieval old town",
                  price: "From €80/night",
                  badge: "Best location",
                  desc: "Several well-reviewed boutique hotels occupy converted medieval buildings in the Saint-Pierre quarter — the most atmospheric neighbourhood in Bordeaux. Steps from Place du Parlement, Place Saint-Pierre, and the best cave à manger restaurants. Book on Booking.com for best rates.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Auberge de Jeunesse Bordeaux",
                  type: "Hostel · Chartrons quarter",
                  price: "From €20/night (dorm)",
                  badge: "Best budget",
                  desc: "Bordeaux's main hostel, located in the Chartrons quarter near La Cité du Vin and the tram lines. Clean, well-run, and popular with solo travellers and cyclists. Dorm beds from €20, private rooms from €55. Good common areas and helpful staff for wine region advice.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bordeaux</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bordeaux&apos;s restaurant scene is centred on the cave à manger (wine bar with food) format — small shared tables, charcuterie and cheese, rotating seasonal dishes, and a short wine list focused on small Bordeaux producers. This is the most authentically Bordelaise way to eat. Prices are very reasonable by French standards.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Le Chapon Fin",
                  t: "Historic brasserie · Saint-Pierre quarter",
                  d: "Bordeaux's most historic restaurant, open since 1825 and classified as a historic monument. The grotto-like Belle Époque dining room — all rocks, moss, and balconies — is extraordinary. Classic Bordelaise cuisine (entrecôte bordelaise, lamprey à la bordelaise, foie gras) with an exceptional wine list. €50–80 per person for lunch. Book ahead.",
                  b: "Most historic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Brasserie Bordelaise",
                  t: "Traditional brasserie · City centre",
                  d: "A proper Bordelaise brasserie in the classic French tradition — marble tables, banquettes, white aprons, and a menu of well-executed traditional dishes. Entrecôte with shallot butter, côte de bœuf, duck confit. Good wine list focused on Bordeaux producers. €30–45 per person. Excellent value for the quality and atmosphere.",
                  b: "Best value",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Chez Dupont",
                  t: "Neighbourhood bistro · Chartrons quarter",
                  d: "A beloved neighbourhood institution in the Chartrons quarter — the kind of bistro that Bordeaux residents have been eating in for 30 years. Market-driven menu changes daily based on what the chef found at Marché des Capucins that morning. Two-course lunch €18–22. Dinner €30–40. Almost entirely local clientele. No reservations for lunch — arrive by noon.",
                  b: "Most local",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Cave à Manger (Marché Saint-Pierre area)",
                  t: "Wine bar with food · Rue du Parlement-Saint-Pierre",
                  d: "The cave à manger format is the most Bordelaise way to eat — a chalkboard menu of small plates (duck rillettes, oysters, charcuterie, cheese), shared wooden tables, and a short wine list with generous pours. Budget €20–30 per person with wine. The streets around Rue du Parlement-Saint-Pierre and Rue des Faussets have the best concentration.",
                  b: "Most authentic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Marché des Capucins",
                  t: "Food market · Quartier Saint-Michel",
                  d: "The 'belly of Bordeaux' — the city's working food market since the 1800s. Oysters and white wine at 10am is the classic move, practiced entirely by locals. Saturday morning is the most atmospheric time. Oysters €8–10 a dozen, wine €3–4 a glass. Open Tuesday–Sunday mornings.",
                  b: "Must visit",
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
            destination="Bordeaux France"
            hotels={[
              {
                name: "InterContinental Bordeaux Le Grand Hôtel",
                type: "5-star · Place de la Comédie",
                price: "From €350/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/fr/intercontinental-bordeaux-le-grand.html?aid=2820480",
              },
              {
                name: "Hotel Burdigala",
                type: "4-star · Triangle d'Or",
                price: "From €120/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/fr/burdigala.html?aid=2820480",
              },
              {
                name: "Auberge de Jeunesse Bordeaux",
                type: "Hostel · Chartrons quarter",
                price: "From €20/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fr/auberge-de-jeunesse-bordeaux.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Saint-Émilion Half-Day Wine Tour from Bordeaux",
                duration: "4 hrs",
                price: "From €45/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=saint+emilion+wine+tour+bordeaux&partner_id=PSZA5UI",
              },
              {
                name: "La Cité du Vin Skip-the-Line Entry",
                duration: "2–3 hrs",
                price: "From €22/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=la+cite+du+vin+bordeaux&partner_id=PSZA5UI",
              },
              {
                name: "Bordeaux Guided City Walking Tour",
                duration: "2 hrs",
                price: "From €18/person",
                url: "https://www.getyourguide.com/s/?q=bordeaux+city+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Médoc Châteaux Private Wine Tour",
                duration: "Full day",
                price: "From €95/person",
                url: "https://www.getyourguide.com/s/?q=medoc+wine+tour+bordeaux&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Bordeaux</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🍷",
                  title: "Buying Wine at Tourist Shops Near Place de la Bourse",
                  desc: "The wine shops clustered around Place de la Bourse and Quai des Chartrons targeting tourists with grand cru labels sell bottles at inflated margins. Buy directly from a château in Saint-Émilion (20–30% cheaper than city retail), or visit L'Intendant on Allées de Tourny — a remarkable 6-floor spiral wine tower with 15,000 bottles and genuinely expert staff. For everyday drinking wine, the Maison du Vin de Bordeaux offers fair-priced introductions.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💧",
                  title: "Mistiming the Miroir d'Eau",
                  desc: "The Miroir d'Eau only creates the famous mirror-perfect reflection when the water layer is thin, undisturbed, and there is no wind. The best conditions are early morning (7–9am) and still summer evenings. Any breeze breaks the reflection completely. Check wind conditions before going — and visit twice: once at sunrise for the golden Bourse façade, once at sunset for the warm amber tones. It's free and 5 minutes from the city centre.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚂",
                  title: "Not Doing the Saint-Émilion Day Trip",
                  desc: "Saint-Émilion is 45 minutes and €11 by regional train from Bordeaux Saint-Jean station. It's a UNESCO World Heritage medieval village built from limestone, surrounded by some of the world's most famous vineyards, with a 12th-century monolithic church carved entirely from solid rock. Almost nobody skips it intentionally — they simply forget to plan. Buy your train ticket at the station on the day; trains run roughly hourly.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗺️",
                  title: "Trying to See Both Saint-Émilion AND the Médoc in One Trip",
                  desc: "The Bordeaux wine region is the largest fine wine region in the world — bigger than all of Germany's wine regions combined. Saint-Émilion (Right Bank, Merlot-dominant, medieval village, train-accessible) and the Médoc (Left Bank, Cabernet-dominant, Pauillac and Margaux — require a car or tour) are completely different in character and 80km apart. Pick one based on your wine preference. Trying to do both in 3 days means doing neither properly.",
                  color: "bg-pink-50 border-pink-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bordeaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚋",
                  title: "The Bordeaux Tram Means You Never Need a Taxi",
                  desc: "Bordeaux has one of the best urban tram systems in France — 4 lines (A, B, C, D) connecting the airport, the train station, Place de la Bourse, La Cité du Vin, Chartrons, and the Miroir d'Eau. A 10-trip carnet costs €14.50 (€1.45 per journey). The Bordeaux Métropole pass (€25/2 days) covers unlimited travel on all trams and buses. Download the TBM app for real-time schedules.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦪",
                  title: "Oysters and White Wine at 10am at Marché des Capucins",
                  desc: "This is not a tourist experience — it's what Bordelais people actually do on Saturday mornings. Oysters (€8–10 a dozen) with a glass of Entre-Deux-Mers or Muscadet (€3–4) at the market stalls. The tradition of eating shellfish with dry white wine in the morning is entirely genuine. One of the great unremarked food experiences in France.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏛️",
                  title: "La Cité du Vin Is Worth €22 Even If You Don't Drink Wine",
                  desc: "The museum is a genuinely world-class cultural institution — 20 interactive rooms covering wine history, geography, mythology, and culture across 3,000 years. The architecture alone (designed to resemble wine swirling in a glass) justifies the visit. The ticket includes a glass of wine at the panoramic Belvédère bar on the 8th floor with a spectacular view over the Garonne.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍇",
                  title: "Visit in September–October During the Harvest",
                  desc: "The Bordeaux vendange (harvest) runs from mid-September to mid-October. During this period the châteaux are at their most active, the air smells of fermenting grapes, and the landscape turns amber and gold. Smaller estates often welcome visitors to help pick. Less crowded than summer, prices drop, and the light is exceptional for photography.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏘️",
                  title: "Stay in Saint-Pierre or Chartrons, Not Near the Station",
                  desc: "The Saint-Jean station area is functional but characterless. The Saint-Pierre medieval quarter and the Chartrons antique district are where Bordeaux's restaurants, wine bars, and atmosphere actually are. Both are within 10 minutes walk of Place de la Bourse and directly connected by tram. The price difference between the station area and the old town is minimal.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📅",
                  title: "Book the TGV from Paris at Least 3 Weeks Ahead",
                  desc: "Advance TGV tickets from Paris Montparnasse to Bordeaux start from €30–50 and are genuinely excellent value for a 2-hour journey. Full-fare tickets jump to €80–150. The SNCF Connect website and Trainline both allow booking up to 3 months ahead. Book on a Tuesday or Wednesday for the best prices on weekend travel.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bordeaux" />

          {/* Combine With */}
          <CombineWith currentSlug="bordeaux-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need to know about wine to enjoy Bordeaux?",
                  a: "Absolutely not. The city of Bordeaux itself is stunning — a UNESCO World Heritage Site with extraordinary 18th-century limestone architecture, the Miroir d'Eau, excellent food markets, and a great restaurant scene. La Cité du Vin makes wine completely accessible to beginners with no prior knowledge required. That said, even a basic curiosity about wine will be richly rewarded here — you can taste wines at the source that would cost 5 times as much in a restaurant anywhere else in the world.",
                },
                {
                  q: "Can I visit Bordeaux châteaux without a pre-booked tour?",
                  a: "Yes — many châteaux welcome walk-in visitors for tastings, particularly smaller estates in Saint-Émilion and the Côtes de Bordeaux appellations. The famous classified growths (Pétrus, Mouton Rothschild, Margaux, Latour) require appointments weeks or months ahead, and some require a letter of introduction from a wine merchant. For Saint-Émilion day trips, the tourist office maintains a list of châteaux accepting walk-ins; most charge €8–15 for a tasting of 3 wines.",
                },
                {
                  q: "How do I get from Bordeaux to Paris?",
                  a: "The TGV high-speed train from Bordeaux Saint-Jean to Paris Montparnasse takes 2 hours 4 minutes. Advance tickets from €30 (book on SNCF Connect or Trainline). Full-fare tickets can reach €80–150 but advance booking almost always yields excellent prices. This is far better than flying when you factor in airport time — the train station is in the city centre. Services run approximately every 30–45 minutes throughout the day.",
                },
                {
                  q: "What is Bordeaux wine?",
                  a: "Bordeaux produces mostly red wine from blends of Cabernet Sauvignon and Merlot. The Left Bank (Médoc appellations: Margaux, Saint-Julien, Pauillac, Saint-Estèphe) is Cabernet Sauvignon-dominant — tannic, structured, age-worthy. The Right Bank (Saint-Émilion, Pomerol) is Merlot-dominant — softer, rounder, more approachable when young. Bordeaux also produces excellent dry white wine (Pessac-Léognan, Entre-Deux-Mers) and the world's finest sweet wine: Sauternes, led by Château d'Yquem.",
                },
                {
                  q: "What is the best neighbourhood to stay in Bordeaux?",
                  a: "Saint-Pierre (the medieval old town) is the most atmospheric — cobbled streets, wine bars, and restaurants on every corner, 5 minutes walk to Place de la Bourse. Chartrons (the antiques quarter north of the centre) has a more local feel with excellent independent restaurants and is slightly more affordable. Triangle d'Or (the golden triangle around Cours de l'Intendance) is central and upmarket. Avoid staying near the Saint-Jean train station unless on a very tight budget.",
                },
                {
                  q: "Is 3 days enough for Bordeaux?",
                  a: "Three days is the ideal minimum for Bordeaux. Day 1 covers the city highlights — Place de la Bourse, Miroir d'Eau, the old town, and Darwin Ecosystème. Day 2 is the Saint-Émilion day trip — essential and only 45 minutes by train. Day 3 is La Cité du Vin, the Chartrons quarter, and the Grand Théâtre. If you also want to visit Médoc châteaux (Pauillac, Margaux), add a 4th day and hire a car or join a wine tour.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bordeaux trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bordeaux", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bordeaux-wine-guide", label: "Wine region guide", icon: "🍷" },
                { href: "/blog/saint-emilion-day-trip", label: "Saint-Émilion guide", icon: "🏰" },
                { href: "/blog/bordeaux-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="bordeaux-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More France &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris in 5 Days — The Complete Guide", href: "/blog/paris-5-days" },
                { label: "Nice in 3 Days — Côte d&apos;Azur", href: "/blog/nice-3-days" },
                { label: "Lyon in 3 Days — France&apos;s Food Capital", href: "/blog/lyon-3-days" },
                { label: "Seville in 3 Days — Flamenco &amp; Tapas", href: "/blog/seville-3-days" },
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
