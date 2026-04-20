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
const MILAN_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Milan Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "\uD83C\uDFDB\uFE0F", label: "Landmark Guide" },
  { id: "budget",      emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",         emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "tips",        emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753",  label: "FAQ" },
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
          href: `mailto:?subject=Milan 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Milan in 3 Days — Duomo, Last Supper and Navigli canals&url=${pageUrl}`,
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
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/milan-3-days"
        imageUrl="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80"
        description="Milan in 3 Days: Duomo Cathedral rooftop, Leonardo&apos;s Last Supper, Galleria Vittorio Emanuele II, Navigli canals aperitivo — complete travel guide with budget breakdown."
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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
export default function MilanClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MILAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Milan" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="milan duomo cathedral italy fashion galleria vittorio emanuele"
            fallback="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1600&q=80"
            alt="Milan Duomo Cathedral with Galleria Vittorio Emanuele II arcade Italy"
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
              <span className="text-white/70">Milan 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Italy
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Milan in 3 Days:
                <em className="italic text-amber-300"> Duomo, Last Supper &amp; Navigli Canals</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Gothic cathedral with 3,500 statues, Leonardo&apos;s masterpiece on a refectory wall, the world&apos;s most ornate shopping arcade, and aperitivo hour by the canals. The complete guide.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF9"} Lombardy, Italy</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20AC"}65/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Milan is what happens when Roman ambition, Renaissance genius, and modern Italian style collide in one city &mdash; a Gothic cathedral so encrusted with 3,500 statues you could spend a week studying the facade, Leonardo da Vinci&apos;s Last Supper surviving a WWII bomb that destroyed the building around it, and a shopping arcade so ornate it has its own good-luck ritual involving a mosaic bull.
            </p>
          </blockquote>

          {/* ── WHAT MILAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Milan Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Milan is not a pretty city in the way Florence or Venice are pretty. It doesn&apos;t seduce you on arrival the way Rome does. The outskirts are industrial, the traffic is aggressive, and many first-time visitors wonder what all the fuss is about. Then you walk into the Piazza del Duomo and the largest Gothic cathedral in Italy rises before you like a forest of marble spires, and the entire calculus changes. Milan hides its treasures behind ordinary facades &mdash; and the treasures are extraordinary.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              This is Italy&apos;s economic capital, its fashion capital, and its design capital. The Quadrilatero della Moda (Golden Rectangle) around Via Montenapoleone contains more luxury brands per square metre than anywhere on Earth. The Brera district is one of Europe&apos;s finest art neighbourhoods. The Navigli canal district &mdash; the last surviving canals from a network Leonardo da Vinci helped engineer &mdash; hosts one of the best aperitivo scenes in Italy. And then there&apos;s the food: risotto alla Milanese, cotoletta, panzerotti from Luini, and panettone that was invented here.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is enough to see Milan&apos;s essential highlights and take a day trip to Lake Como. But book the Last Supper tickets months in advance &mdash; this is the single most important piece of practical advice in this entire guide.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Main Airports" value="MXP / LIN" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Apr\u2013Jun" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="Key Sights" value="Duomo + 20" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u20AC65/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Milan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013Jun",
                  i: "\u2600\uFE0F",
                  t: "Spring \u2014 Best Season",
                  d: "15\u201328\u00B0C, long days, outdoor terraces open across the city. April can be rainy but comfortable. May and June are ideal \u2014 warm enough for aperitivo on the Navigli but not yet the stifling July heat. Milan Design Week in April and fashion events make the city vibrant.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\uD83C\uDF42",
                  t: "Autumn \u2014 Excellent",
                  d: "16\u201325\u00B0C, the summer crowds thin out, the fashion season kicks off, and the light over the Duomo rooftop is golden. October is harvest season in Lombardy \u2014 truffles, porcini mushrooms, and new-vintage wines appear on every menu. The best food month in Milan.",
                  b: "Excellent choice",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul\u2013Aug",
                  i: "\uD83D\uDD25",
                  t: "Summer \u2014 Hot and Quiet",
                  d: "28\u201336\u00B0C, humid and oppressive. Many Milanese leave the city for the coast or mountains in August \u2014 some restaurants and shops close entirely (ferragosto shutdown). If you visit, stick to air-conditioned museums during midday. The Duomo rooftop in July heat is brutal.",
                  b: "Avoid August",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov\u2013Mar",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Cold but Atmospheric",
                  d: "0\u201310\u00B0C, grey skies and fog are common in the Po Valley. But Milan in December has stunning Christmas markets, the Duomo lit up at night, and La Scala opera season opens on December 7th. January sales in the fashion district offer genuine discounts. February is Milan Fashion Week.",
                  b: "For opera lovers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} &mdash; {s.t}</p>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Milan</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Milan has two main airports. <strong className="font-medium">Malpensa (MXP)</strong> is the international hub, 50km northwest. <strong className="font-medium">Linate (LIN)</strong> is closer (7km east) but mainly European flights. The Malpensa Express train ({"\u20AC"}13, 40 min to Cadorna/Centrale) is the smart way in &mdash; taxis cost {"\u20AC"}90+.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Malpensa Express (recommended from MXP)",
                  d: "Train from Malpensa Terminal 1 to Milano Cadorna or Milano Centrale. \u20AC13 one way, every 30 minutes, takes 40\u201350 minutes. Buy tickets at the station machines or the Trenord app. This is faster and a tenth of the taxi price (\u20AC90\u2013100). Terminal 2 has a free shuttle bus to Terminal 1 for the train.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE8C",
                  t: "Airport bus from Malpensa",
                  d: "Malpensa Shuttle and Terravision run buses to Milano Centrale. \u20AC8\u201310, takes 50\u201370 minutes depending on traffic. Cheaper than the train but slower and less reliable. Fine for budget travellers arriving at off-peak hours.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE87",
                  t: "From Linate Airport (LIN)",
                  d: "The M4 metro line connects Linate directly to the city centre (Duomo station in 25 minutes, \u20AC2.20). This is by far the easiest airport transfer in Milan. If your airline flies into Linate, take advantage of it.",
                  b: "Easiest transfer",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE82",
                  t: "Train from other Italian cities",
                  d: "Milano Centrale is one of Europe&apos;s best-connected stations. High-speed Frecciarossa trains: Rome (2hr 55min, \u20AC30\u201360), Florence (1hr 40min, \u20AC25\u201345), Venice (2hr 25min, \u20AC20\u201340), Turin (45min, \u20AC15\u201325). Book on Trenitalia or Italo at least 2 weeks ahead for the best fares.",
                  b: "From other cities",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 3-Day Milan Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Milan highlights with an optional Lake Como day trip on Day 3. Book the Last Supper at least 2 months ahead &mdash; this is non-negotiable.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title={"Duomo Rooftop \u00B7 Galleria Vittorio Emanuele II \u00B7 Castello Sforzesco"}
                cost={"\u20AC30\u201360"}
                items={[
                  "9am: Piazza del Duomo \u2014 the Gothic cathedral took nearly 600 years to complete (1386\u20131965). The facade alone has 3,500 statues, 135 spires, and the golden Madonnina statue at 108 metres. Entry to the cathedral interior: \u20AC5. The Duomo rooftop (\u20AC14 by lift, \u20AC10 by stairs) is the highlight \u2014 walk among the marble spires with views across Milan to the Alps on a clear day.",
                  "11am: Galleria Vittorio Emanuele II \u2014 the glass-vaulted arcade connecting Piazza del Duomo to La Scala. Free to walk through. Find the mosaic of the bull on the floor and spin your heel on its testicles for good luck (the locals do it too). Morning coffee at the historic Camparino bar is a splurge (\u20AC6\u20138 for a standing espresso) but the interior is worth seeing.",
                  "12:30pm: Lunch at Luini \u2014 a Milan institution since 1888. Their panzerotti (fried dough pockets filled with mozzarella and tomato) cost \u20AC3 and the queue moves fast. The best quick lunch in central Milan, no question.",
                  "2pm: Castello Sforzesco \u2014 the massive 15th-century Sforza fortress. The courtyard is free and impressive. Inside, the civic museums (\u20AC5) house Michelangelo\u2019s unfinished Piet\u00E0 Rondanini \u2014 his final work, left incomplete at his death in 1564. The Egyptian and musical instrument collections are also excellent.",
                  "4pm: Parco Sempione \u2014 Milan\u2019s central park behind the Castello. Free, peaceful, and a good place to rest. Walk through to the Arco della Pace (Arch of Peace) at the far end for a classic Milan photo.",
                  "7pm: Evening aperitivo \u2014 Terrazza Aperol near the Duomo has rooftop views and a spritz for \u20AC12\u201315. For something less touristy, walk to Porta Venezia neighbourhood where the bars are local and the buffets more generous.",
                ]}
              />
              <DayCard
                day="Day 2"
                title={"Last Supper \u00B7 Brera District \u00B7 Navigli Canals Aperitivo"}
                cost={"\u20AC40\u201375"}
                items={[
                  "8:15am: Leonardo\u2019s Last Supper at Santa Maria delle Grazie \u2014 \u20AC15 + \u20AC2 booking fee. You MUST book 2\u20133 months ahead at vivaticket.com or through a tour operator. The visit is exactly 15 minutes per group of 25 people. The morning light from the refectory windows is the best \u2014 book the earliest slot you can get. This painting survived a WWII bomb that destroyed three walls of the room and left the Last Supper wall standing. It is worth every euro.",
                  "10am: Pinacoteca di Brera (\u20AC15) \u2014 Milan\u2019s finest art museum, housed in a 17th-century palazzo. Raphael\u2019s Marriage of the Virgin, Caravaggio\u2019s Supper at Emmaus, Mantegna\u2019s Dead Christ \u2014 world-class collection. Free on the first Sunday of each month. Allow 2 hours minimum.",
                  "12:30pm: Lunch in the Brera district \u2014 cobblestone streets, independent bookshops, and small trattorias. Try a risotto alla Milanese (saffron risotto with bone marrow) \u2014 Milan\u2019s signature dish. Expect \u20AC12\u201318 at a neighbourhood trattoria.",
                  "2:30pm: Walk through Brera \u2014 this is Milan\u2019s most charming neighbourhood. Browse the galleries on Via Fiori Chiari, visit the Brera Botanical Garden (free), and absorb the atmosphere of the only part of Milan that feels like a small Italian town.",
                  "4pm: Armani/Silos (\u20AC14) \u2014 Giorgio Armani\u2019s personal fashion archive in a converted grain silo. Four floors of haute couture organised by theme. Even if you\u2019re not a fashion person, the curation and architecture are remarkable.",
                  "6:30pm: Navigli canals aperitivo hour \u2014 walk along Naviglio Grande and Naviglio Pavese, the last remaining canals from a network Leonardo da Vinci helped design. Most bars charge \u20AC8\u201312 for a Campari Spritz or Negroni and include a generous free buffet. This is not a tourist gimmick \u2014 it is how Milanese people actually eat on weeknights. The canal reflections at golden hour are spectacular.",
                ]}
              />
              <DayCard
                day="Day 3"
                title={"Fashion District \u00B7 Lake Como Day Trip \u00B7 Farewell Dinner"}
                cost={"\u20AC35\u201380"}
                items={[
                  "Option A \u2014 Lake Como day trip: Take the train from Milano Centrale to Varenna (1 hr, \u20AC8 each way) or Como Nord Lago (30 min, \u20AC5). At Varenna, walk the Passeggiata degli Innamorati (Lovers\u2019 Walk) and take the ferry to Bellagio (\u20AC5, 15 min) \u2014 the jewel of Lake Como. Walk up to Villa Serbelloni gardens (\u20AC10). Lunch by the lake (\u20AC20\u201330). Return to Milan by 6pm.",
                  "Option B \u2014 stay in Milan: Morning walk through the Quadrilatero della Moda (Golden Rectangle) \u2014 Via Montenapoleone, Via della Spiga. Window-shopping is free and the displays are performance art. Then visit Fondazione Prada (\u20AC15) \u2014 a Rem Koolhaas-designed contemporary art campus in a converted distillery, with a bar designed by director Wes Anderson.",
                  "San Siro stadium tour (\u20AC18) \u2014 if you\u2019re a football fan, the shared home of AC Milan and Inter is one of Europe\u2019s most atmospheric grounds. The museum covers both clubs\u2019 histories. Tours run daily except on match days.",
                  "3pm: If you stayed in Milan, explore Porta Nuova \u2014 Milan\u2019s modern district with the Bosco Verticale (Vertical Forest) towers. The Biblioteca degli Alberi park at their base is a pleasant green space.",
                  "5pm: Last aperitivo in Porta Venezia \u2014 more local and less touristy than Navigli. The LGBTQ+ neighbourhood has some of Milan\u2019s best cocktail bars.",
                  "8pm: Farewell dinner \u2014 cotoletta alla Milanese (the original breaded veal cutlet, bigger than the plate) at Trattoria Milanese, a family-run institution since 1933. Mains \u20AC18\u201328. Or go upscale at Carlo e Camilla in Segheria \u2014 a converted sawmill with communal tables and modern Italian cuisine (\u20AC40\u201360 per person).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Milan" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Milan Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in order of priority. Prices as of early 2026 &mdash; book the Last Supper and Duomo rooftop online in advance to avoid disappointment.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Duomo di Milano",
                  e: "\u20AC5 cathedral / \u20AC14 rooftop (lift)",
                  d: "The largest Gothic cathedral in Italy and the third-largest church in the world. The facade has 3,500 statues and 135 marble spires. The rooftop terrace is the highlight \u2014 walking among the spires at eye level with the golden Madonnina, with views to the Alps on clear days. Book the first or last rooftop slot for the best light and fewest crowds.",
                  t: "Must see \u00B7 2\u20133 hrs",
                },
                {
                  n: "Leonardo\u2019s Last Supper",
                  e: "\u20AC15 + \u20AC2 booking",
                  d: "Leonardo da Vinci\u2019s masterpiece on the refectory wall of Santa Maria delle Grazie. Each visit is exactly 15 minutes for a group of 25. Book 2\u20133 months ahead at vivaticket.com \u2014 this sells out months in advance and there is no walk-up option. The morning slots have the best natural light through the refectory windows.",
                  t: "Must see \u00B7 Book ahead",
                },
                {
                  n: "Galleria Vittorio Emanuele II",
                  e: "Free",
                  d: "The world\u2019s oldest active shopping mall (1877), with a stunning glass-vaulted cruciform arcade. Home to Prada\u2019s original flagship store, the historic Camparino bar, and the famous bull mosaic on the floor. Free to walk through at any time. The evening light through the glass ceiling is magical.",
                  t: "Free \u00B7 30\u201345 min",
                },
                {
                  n: "Pinacoteca di Brera",
                  e: "\u20AC15",
                  d: "Milan\u2019s premier art collection in a 17th-century palazzo. Raphael\u2019s Marriage of the Virgin, Caravaggio\u2019s Supper at Emmaus, Mantegna\u2019s Dead Christ, Bellini\u2019s Piet\u00E0. Free on the first Sunday of each month. The courtyard with Canova\u2019s bronze Napoleon is worth seeing even if you skip the gallery.",
                  t: "Must see \u00B7 2 hrs",
                },
                {
                  n: "Castello Sforzesco",
                  e: "\u20AC5 museums / courtyard free",
                  d: "The 15th-century Sforza fortress houses multiple civic museums including Michelangelo\u2019s unfinished Piet\u00E0 Rondanini, Egyptian artefacts, and musical instruments. The courtyard alone is worth a visit \u2014 free and open daily.",
                  t: "1.5\u20132 hrs",
                },
                {
                  n: "Armani/Silos",
                  e: "\u20AC14",
                  d: "Giorgio Armani\u2019s four-floor personal archive in a converted 1950s grain silo. Haute couture pieces organised by theme: colours, light, stars, ethnicity. The architecture of the building itself is as impressive as the collection.",
                  t: "Fashion lovers \u00B7 1.5 hrs",
                },
                {
                  n: "San Siro Stadium",
                  e: "\u20AC18 tour",
                  d: "The shared home of AC Milan and Inter Milan, capacity 75,923. The stadium tour includes the pitch-side walkway, changing rooms, and a museum covering both clubs. Tours run daily except on match days \u2014 check the Serie A calendar before visiting.",
                  t: "Football fans \u00B7 1.5 hrs",
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
            title="Milan &mdash; Cathedral, Canals &amp; Culture"
            subtitle="From Gothic spires to golden-hour aperitivo on the Navigli."
            spots={[
              {
                name: "Duomo di Milano Rooftop",
                query: "milan duomo cathedral rooftop terraces marble spires italy",
                desc: "Walking among 135 marble spires on the Duomo rooftop \u2014 the most iconic view in Milan with the Alps on the horizon.",
              },
              {
                name: "Galleria Vittorio Emanuele II",
                query: "galleria vittorio emanuele ii glass arcade milan italy shopping",
                desc: "The world\u2019s oldest active shopping arcade \u2014 a glass-vaulted cruciform masterpiece from 1877.",
              },
              {
                name: "Navigli Canal District",
                query: "navigli canal district milan aperitivo evening lights italy",
                desc: "The Navigli canals at golden hour \u2014 aperitivo bars, reflections, and the best evening atmosphere in Milan.",
              },
              {
                name: "Brera District",
                query: "brera district milan cobblestone streets art galleries italy",
                desc: "Cobblestone streets, independent galleries, and the Pinacoteca di Brera \u2014 Milan\u2019s most charming neighbourhood.",
              },
              {
                name: "Lake Como from Milan",
                query: "lake como bellagio varenna ferry mountains italy",
                desc: "Bellagio and Varenna on Lake Como \u2014 an easy day trip from Milano Centrale by train and ferry.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Milan is Italy&apos;s most expensive city, on par with Paris and London for hotels and dining. But budget travel is very possible &mdash; aperitivo buffet dinners, mercato lunches, and free museum days keep costs manageable. Prices per person per day.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation", "\u20AC20\u201330 (hostel dorm)", "\u20AC80\u2013120 (3-star hotel)", "\u20AC250\u2013450 (5-star)"],
                    ["\uD83C\uDF7D\uFE0F Food", "\u20AC15\u201320 (markets, bakeries)", "\u20AC40\u201355 (trattoria + aperitivo)", "\u20AC100\u2013180 (Michelin)"],
                    ["\uD83D\uDE87 Transport", "\u20AC5\u20138 (metro day pass)", "\u20AC10\u201315 (metro + trains)", "\u20AC40\u201380 (private transfers)"],
                    ["\uD83C\uDFDB\uFE0F Activities", "\u20AC10\u201320 (selective museums)", "\u20AC25\u201340 (Last Supper, Brera)", "\u20AC80\u2013150 (private guides)"],
                    ["TOTAL (per person/day)", "\u20AC65/day", "\u20AC140/day", "\u20AC350/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ({"\u20AC"}65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Ostello Bello (from {"\u20AC"}28/night, excellent hostel with free pasta evenings), eat panzerotti at Luini ({"\u20AC"}3), take aperitivo buffets for dinner ({"\u20AC"}8{"\u2013"}12), and use the metro day pass ({"\u20AC"}7.60). Duomo exterior and Galleria are free.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">{"\uD83C\uDF1F"} Mid-Range ({"\u20AC"}140/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Room Mate Giulia (from {"\u20AC"}110/night, Patricia Urquiola-designed boutique hotel near the Duomo), sit-down lunches in Brera, Navigli canal dinners, and all the major sights including the Last Supper and Duomo rooftop. The sweet spot for most visitors.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ({"\u20AC"}350/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Park Hyatt Milan (from {"\u20AC"}350/night, former bank converted into a design hotel on Via Manzoni), private Last Supper tours, Michelin-starred dining at Enrico Bartolini or Seta, La Scala box seats, and private boat hire on Lake Como.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Milan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Brera and Porta Nuova are best for mid-range and luxury &mdash; elegant, central, walkable. Navigli is best for younger travellers and nightlife. Near Stazione Centrale is convenient for trains but less charming. Avoid anything east of the ring road unless you&apos;re on a very tight budget.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Park Hyatt Milan",
                  type: "Luxury 5-star \u00B7 Via Manzoni (Duomo area)",
                  price: "From \u20AC350/night",
                  badge: "Best luxury",
                  desc: "A former bank converted into one of Milan\u2019s most elegant hotels, steps from the Galleria and the Duomo. The lobby bar occupies the original banking hall with soaring ceilings. The restaurant VUN Andrea Aprea holds a Michelin star. Impeccable service in a prime location.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Room Mate Giulia",
                  type: "Boutique 4-star \u00B7 Via Silvio Pellico (Duomo area)",
                  price: "From \u20AC110/night",
                  badge: "Best mid-range",
                  desc: "Designed by Patricia Urquiola with bold colours and playful interiors, 200 metres from the Duomo. The rooftop breakfast terrace has cathedral views. Excellent value for the location \u2014 one of the best-reviewed hotels in central Milan for mid-range travellers.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Ostello Bello Grande",
                  type: "Hostel \u00B7 Near Stazione Centrale",
                  price: "From \u20AC28/night (dorm)",
                  badge: "Best budget",
                  desc: "Regularly rated one of Europe\u2019s best hostels. Free pasta dinner every evening, free coffee all day, rooftop terrace, and a social atmosphere. Private rooms also available from \u20AC75. Five minutes from Milano Centrale with direct metro access to the Duomo.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Navigli Area Apartments",
                  type: "Self-catering \u00B7 Navigli district",
                  price: "\u20AC70\u2013140/night",
                  badge: "Best for nightlife",
                  desc: "Renting an apartment in the Navigli canal district puts you at the centre of Milan\u2019s best aperitivo and nightlife scene. The neighbourhood has a bohemian character with antique shops, street art, and canal-side restaurants. Metro M2 (green line) connects to the centre in 10 minutes.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Milan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Milan&apos;s food scene ranges from {"\u20AC"}3 panzerotti to three-Michelin-star tasting menus. The city invented the aperitivo buffet, the risotto alla Milanese, and the cotoletta (breaded veal cutlet). Don&apos;t sit down for espresso &mdash; stand at the bar and pay {"\u20AC"}1.20 instead of {"\u20AC"}3.50.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Luini Panzerotti",
                  t: "Street food institution \u00B7 Near Duomo",
                  d: "Open since 1888, Luini serves panzerotti (fried dough pockets stuffed with mozzarella and tomato) for \u20AC3 each. The queue outside is a Milan landmark in itself. Open for lunch only (10am\u20133pm). The best value meal in the city centre, bar none.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Trattoria Milanese",
                  t: "Traditional Milanese \u00B7 Via Santa Marta",
                  d: "Family-run since 1933, this is the definitive place for cotoletta alla Milanese (breaded veal cutlet, bigger than the plate, \u20AC22) and risotto alla Milanese (saffron risotto, \u20AC16). No-frills interior, generous portions, and genuinely Milanese clientele. Book for dinner.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Carlo e Camilla in Segheria",
                  t: "Modern Italian \u00B7 Navigli district",
                  d: "A converted sawmill with dramatic communal tables under industrial chandeliers. The menu is modern Italian with Milanese roots \u2014 expect \u20AC40\u201360 per person with wine. The atmosphere is unlike any other restaurant in Milan. Book 2\u20133 days ahead for weekend dinners.",
                  b: "Best atmosphere",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Navigli Canal Aperitivo Bars",
                  t: "Aperitivo buffets \u00B7 Navigli Grande",
                  d: "The Navigli canal bars are where Milan\u2019s aperitivo tradition is at its best. Pay \u20AC8\u201312 for a Campari Spritz or Negroni between 6\u20139pm and the included buffet (pasta, risotto, bruschetta, salads) is often substantial enough to be dinner. Not a tourist trap \u2014 this is genuinely how Milanese people eat on weeknights.",
                  b: "Aperitivo = dinner",
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
            destination="Milan Italy"
            hotels={[
              {
                name: "Park Hyatt Milan",
                type: "Luxury 5-star \u00B7 Former bank on Via Manzoni",
                price: "From \u20AC350/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/it/park-hyatt-milano.html?aid=2820480",
              },
              {
                name: "Room Mate Giulia",
                type: "Boutique 4-star \u00B7 200m from Duomo",
                price: "From \u20AC110/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/it/room-mate-giulia.html?aid=2820480",
              },
              {
                name: "Ostello Bello Grande",
                type: "Hostel \u00B7 Near Stazione Centrale",
                price: "From \u20AC28/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/it/ostello-bello-grande.html?aid=2820480",
              },
              {
                name: "Mandarin Oriental Milan",
                type: "Luxury 5-star \u00B7 Via Andegari",
                price: "From \u20AC450/night",
                rating: "5",
                badge: "Most elegant",
                url: "https://www.booking.com/hotel/it/mandarin-oriental-milan.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Last Supper Skip-the-Line Tour",
                duration: "1.5 hrs",
                price: "From \u20AC55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=milan+last+supper+tour&partner_id=PSZA5UI",
              },
              {
                name: "Duomo Rooftop + Cathedral Tour",
                duration: "2 hrs",
                price: "From \u20AC30/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=milan+duomo+rooftop+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lake Como Day Trip from Milan",
                duration: "Full day",
                price: "From \u20AC85/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=lake+como+day+trip+milan&partner_id=PSZA5UI",
              },
              {
                name: "Milan Food Tour with Tastings",
                duration: "3 hrs",
                price: "From \u20AC65/person",
                url: "https://www.getyourguide.com/s/?q=milan+food+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid in Milan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83D\uDD50",
                  title: "Not booking the Last Supper months in advance",
                  desc: "Leonardo\u2019s Last Supper books out 2\u20133 months ahead. If you haven\u2019t booked before you land in Milan, you will not see it. Check vivaticket.com or getyourguide.com \u2014 set a reminder and book the day tickets open.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "\uD83D\uDE8C",
                  title: "Taking a taxi from Malpensa instead of the Malpensa Express",
                  desc: "Taxis from MXP airport cost \u20AC90\u2013100. The Malpensa Express train takes 40 minutes and costs \u20AC13. Runs every 30 minutes from the terminal directly to Milano Cadorna and Centrale. It\u2019s faster and a tenth of the price.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "\uD83D\uDC57",
                  title: "Wearing shorts to the Duomo or Last Supper",
                  desc: "Both the Duomo and Santa Maria delle Grazie enforce a dress code \u2014 shoulders and knees covered. Guards will turn you away at the door. Bring a light scarf or buy a \u20AC2 sarong from a street vendor near the piazza.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "\u2615",
                  title: "Sitting down at the bar for espresso",
                  desc: "In Milan, espresso at the bar counter is \u20AC1.20\u20131.50. The moment you sit at a table, the price doubles or triples. Stand at the bar, say \u2018un caff\u00E8 per favore\u2019, drink it in 30 seconds \u2014 that\u2019s the Milan way.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "\uD83D\uDCF8",
                  title: "Skipping Bergamo for a \u2018better-known\u2019 day trip",
                  desc: "Lake Como and Verona get all the attention, but Bergamo\u2019s Citt\u00E0 Alta (upper town) \u2014 45 minutes from Milan \u2014 is more authentically medieval and far less crowded. Take the funicular up, walk the Venetian walls, eat polenta and casoncelli pasta.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Milan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDFAD",
                  title: "Aperitivo = a free dinner",
                  desc: "Milan invented the aperitivo hour. Pay \u20AC8\u201312 for a Campari Spritz or Negroni between 6\u20139pm at a Navigli or Porta Venezia bar and the buffet included is often substantial enough to be dinner. This is not a tourist trick \u2014 it\u2019s how Milanese people actually eat on weeknights.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83D\uDE87",
                  title: "The metro is excellent and cheap",
                  desc: "Milan\u2019s metro has 5 lines covering every major sight. A single ticket costs \u20AC2.20, a daily pass \u20AC7.60, a 48-hour pass \u20AC13.80. Buy a contactless travel card on the ATM Milano app. Central Milan is also very walkable \u2014 the Duomo to Castello Sforzesco is a 15-minute walk.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Book the Duomo rooftop at sunrise or sunset",
                  desc: "The first and last Duomo rooftop slots have the best light and fewest crowds. In peak summer, the midday heat on the marble roof is intense. The morning slots on clear days let you see the entire Lombard plain and the Alps along the northern horizon.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "\uD83D\uDE82",
                  title: "Day trips are easy from Milano Centrale",
                  desc: "Milan is the best-connected city in northern Italy. Lake Como (30\u201360 min), Verona (55 min, \u20AC14), Bergamo (45 min, \u20AC6), Lake Maggiore (1 hr) and even Venice (2.5 hrs, \u20AC30) are all achievable. Buy Trenitalia or Italo tickets online at least 2 days ahead for the best prices.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDED2",
                  title: "Free museum Sundays",
                  desc: "Many Milan museums are free on the first Sunday of each month, including the Pinacoteca di Brera (\u20AC15 saved), Museo del Novecento, and Castello Sforzesco museums. Plan your trip dates around this if you\u2019re on a budget \u2014 it\u2019s a significant saving.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Get the ATM Milano app",
                  desc: "The official ATM Milano app shows real-time metro, tram, and bus schedules. You can buy and activate tickets directly in the app using a contactless payment \u2014 no need for paper tickets. Also useful for the Malpensa Express train schedule from the airport.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Milan" />

          {/* Combine With */}
          <CombineWith currentSlug="milan-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Milan?",
                  a: "3 days is ideal for first-timers \u2014 enough for the Duomo, Last Supper, Navigli, Brera, and one day trip to Lake Como. If you want to add Lake Como properly (staying overnight) or explore the fashion district in depth, 4\u20135 days works better. Milan rewards longer stays but doesn\u2019t demand them.",
                },
                {
                  q: "Is Milan expensive?",
                  a: "Milan is Italy\u2019s most expensive city, on par with Paris and London for hotels. However, budget travel is very possible \u2014 aperitivo buffet dinners (\u20AC8\u201312 for drink + food), mercato lunches, hostel dorms (\u20AC28), and free museum Sundays keep costs down. Budget travellers can manage on \u20AC60\u201370/day; mid-range travellers spend \u20AC130\u2013150/day.",
                },
                {
                  q: "What is the best area to stay in Milan?",
                  a: "Brera and Porta Nuova are best for mid-range and luxury \u2014 elegant, central, very walkable. Navigli is best for younger travellers and nightlife. Near Stazione Centrale is convenient for trains but less charming. Avoid anything east of the ring road unless you\u2019re on a tight budget.",
                },
                {
                  q: "How do I book the Last Supper?",
                  a: "Book at vivaticket.com at least 2\u20133 months ahead. Tickets are released in batches and sell out within hours. Set a calendar reminder for when new dates open. Alternatively, book a guided tour through getyourguide.com which includes guaranteed entry \u2014 more expensive (\u20AC50\u201370) but reliable when official tickets are sold out.",
                },
                {
                  q: "Do I need to tip in Milan restaurants?",
                  a: "Tipping is not mandatory in Italy and Milanese people rarely tip. Most bills include \u2018coperto\u2019 (cover charge, \u20AC1.50\u20133) and sometimes \u2018servizio\u2019. If service was excellent, rounding up or leaving \u20AC2\u20135 on the table is appreciated but never expected.",
                },
                {
                  q: "Is the Malpensa Express worth it?",
                  a: "Absolutely. The Malpensa Express train from MXP airport to Milano Cadorna or Centrale costs \u20AC13 and takes 40\u201350 minutes. A taxi costs \u20AC90\u2013100 and takes just as long in traffic. The train runs every 30 minutes and drops you in the city centre. It is the only sensible way to get from Malpensa to Milan unless you have very heavy luggage.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Milan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-milan", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/milan-trip-cost-couple", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-milan", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/milan-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="milan-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Italy &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rome in 4 Days &mdash; Colosseum &amp; Vatican", href: "/blog/rome-4-days" },
                { label: "Florence 3 Days &mdash; Renaissance Art", href: "/blog/florence-3-days" },
                { label: "Venice 3 Days &mdash; Canals &amp; Islands", href: "/blog/venice-3-days" },
                { label: "Amalfi Coast 5 Days &mdash; Cliffs &amp; Limoncello", href: "/blog/amalfi-coast-5-days" },
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
                  <span className="text-xs text-muted">Read {"\u2192"}</span>
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
