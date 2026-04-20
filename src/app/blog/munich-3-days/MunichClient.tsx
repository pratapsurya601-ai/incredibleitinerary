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
const MUNICH_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Munich Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "beer",        emoji: "🍺",  label: "Beer Hall &amp; Garden Guide" },
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
          href: `mailto:?subject=Munich 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Munich in 3 Days — beer halls, castles and the Bavarian Alps&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/munich-3-days"
        imageUrl="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200&q=80"
        description="Munich in 3 Days: Marienplatz, Hofbr&auml;uhaus, Neuschwanstein day trip, Englischer Garten and beer gardens — complete travel guide with budget breakdown from &euro;65/day."
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
export default function MunichClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUNICH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Munich" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="munich marienplatz glockenspiel new town hall bavaria germany"
            fallback="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1600&q=80"
            alt="Munich Marienplatz with Glockenspiel tower and New Town Hall Bavaria Germany"
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
              <span className="text-white/70">Munich 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Bavaria, Germany
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Munich in 3 Days:
                <em className="italic text-amber-300"> Beer Halls, Castles &amp; the Bavarian Alps</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Marienplatz&apos;s Glockenspiel, a Ma&szlig; at the Hofbr&auml;uhaus, Eisbach surfers in the English Garden, and Neuschwanstein Castle rising from the Alps. The complete guide from &euro;65/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇩🇪 Bavaria, Germany</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From &euro;65/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Munich hosts the world&apos;s greatest beer festival in a city that has been brewing since 1589 &mdash; pretzels the size of your head alongside weisswurst sausages and sweet mustard at 9am, Neuschwanstein Castle rising from the Bavarian Alps like a Disney fairytale just two hours away, and an English Garden larger than Central Park where surfers ride a permanent standing wave in the middle of the city.
            </p>
          </blockquote>

          {/* ── WHAT MUNICH ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Munich Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bavaria&apos;s capital is Germany&apos;s most expensive city, but it earns it. Munich seamlessly blends 850 years of royal Wittelsbach heritage with a thriving modern economy &mdash; BMW, Siemens, and Allianz are all headquartered here. The Altstadt (Old Town) is compact and walkable, centred on Marienplatz where the Neues Rathaus Glockenspiel chimes daily at 11am and 12pm (free, and worth the crowd). The entire city centre was rebuilt after near-total destruction in World War II, yet you&apos;d never know it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Beyond the beer halls, Munich is a serious art city. The Alte Pinakothek houses one of Europe&apos;s finest Old Masters collections (&euro;4 on Sundays), and the Pinakothek der Moderne rivals the Tate. The Englischer Garten at 3.7 square kilometres is one of the world&apos;s largest urban parks &mdash; locals sunbathe in the nude sections, surfers ride the Eisbach wave year-round, and the Chinese Tower beer garden seats 7,000 people under chestnut trees.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The real draw is what&apos;s within day-trip distance. Neuschwanstein Castle (&euro;18 entry, two hours by train) is Germany&apos;s most visited attraction. Salzburg is 90 minutes away. The Bavarian Alps start 45 minutes south. Munich is the hub for all of it.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MUC" />
              <StatCard icon="🌡️" label="Best Season" value="Sep–Oct / Apr–Aug" />
              <StatCard icon="🗓" label="Duration" value="3 Days" />
              <StatCard icon="💰" label="Budget From" value="€65/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Munich</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Sep–Oct",
                  i: "🍺",
                  t: "Oktoberfest Season",
                  d: "15–20°C. The world&apos;s largest folk festival runs from the third Saturday in September to the first Sunday in October. Six million visitors, 14 main beer tents, and prices that triple for accommodation. Book a year ahead for tent reservations and 6 months for hotels. Electric atmosphere but expect crowds everywhere.",
                  b: "Peak season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr–Aug",
                  i: "☀️",
                  t: "Summer — Ideal Weather",
                  d: "18–28°C with long days and outdoor beer gardens in full swing. June through August is warm enough for the Eisbach surfers, cycling through the English Garden, and long evenings on restaurant terraces. July and August can be hot (30°C+) and busy with European tourists.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Feb",
                  i: "❄️",
                  t: "Winter — Christmas Markets",
                  d: "−2 to 5°C. Munich&apos;s Christkindlmarkt on Marienplatz is one of Germany&apos;s finest &mdash; Gl&uuml;hwein (mulled wine), gingerbread, and a towering Christmas tree. January and February are cold and grey but accommodation is cheap and museums are empty. Great for a budget culture trip.",
                  b: "Christmas markets",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Shoulder Season",
                  d: "8–16°C. Starkbierzeit (Strong Beer Festival) runs through March &mdash; Munich&apos;s locals-only alternative to Oktoberfest. Beer gardens reopen by mid-April. Nymphenburg Palace gardens bloom with spring flowers. Fewer tourists and reasonable hotel prices.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Munich</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Munich Airport (MUC / Franz Josef Strauss) is 35km northeast of the city centre. The S-Bahn S1 or S8 takes you to Marienplatz in <strong className="font-medium">40 minutes for &euro;12</strong>. The Lufthansa Express Bus to Hauptbahnhof costs &euro;11.50 and takes 45 minutes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Munich Airport (MUC)",
                  d: "Germany&apos;s second-busiest airport with direct flights from most European cities, the Middle East, Asia, and North America. S-Bahn S1 or S8 to Marienplatz: &euro;12, 40 minutes, every 10 minutes. Taxis cost &euro;70–80 to the centre. The airport has a beer garden between the two terminals &mdash; Airbr&auml;u, the world&apos;s only airport brewery.",
                  b: "Main option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "Train to Munich Hauptbahnhof",
                  d: "ICE high-speed trains connect Munich to Frankfurt (3.5 hrs), Berlin (4.5 hrs), Vienna (4 hrs), Zurich (4 hrs), and Salzburg (1.5 hrs). The Hauptbahnhof (central station) is a 10-minute walk from Marienplatz. Deutsche Bahn Super Sparpreis fares from &euro;17.90 if booked 4+ weeks ahead.",
                  b: "Best for Europe trips",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "FlixBus / Long-Distance Bus",
                  d: "FlixBus connects Munich to most European cities at budget prices &mdash; Prague from &euro;15, Vienna from &euro;12, Zurich from &euro;18. Buses arrive at Munich ZOB (central bus station) next to Hackerbrücke S-Bahn station, a short walk from the centre. Slower but significantly cheaper than trains.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Driving / Car Rental",
                  d: "Munich is the hub of Bavaria&apos;s autobahn network. The A9 (Berlin), A8 (Salzburg/Stuttgart), and A95 (Alps) all converge here. Parking in the centre is expensive (&euro;2–4/hr). An Umweltzone (environmental zone) requires a green sticker. A car is unnecessary for the city but useful for Neuschwanstein and Alpine day trips.",
                  b: "For day trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Munich Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Munich experience &mdash; Old Town, beer culture, museums, and a day trip to Neuschwanstein or Salzburg. Adjust based on your pace and interests.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Marienplatz · Viktualienmarkt · Residenz · Hofbräuhaus"
                cost="€40–70"
                items={[
                  "Start at Marienplatz, the beating heart of Munich&apos;s Altstadt. The Neues Rathaus (New Town Hall) dominates the square with its neo-Gothic facade. The Glockenspiel chimes at 11am and 12pm (also 5pm in summer) — arrive 15 minutes early for a good viewing spot. Free to watch.",
                  "Climb the Peterskirche (St Peter&apos;s Church) tower directly behind Marienplatz for the best panoramic view of the old town and the Alps on clear days. 306 steps, €5 entry. Worth it for the photos alone.",
                  "Walk to Viktualienmarkt, Munich&apos;s outdoor food market since 1807. Sample Obatzda (Bavarian cheese spread), smoked sausages, fresh pretzels, and local cheeses. The beer garden in the centre serves rotating Munich breweries — a half-litre for around €5.",
                  "Afternoon: the Residenz Museum (€9), the enormous former royal palace of the Wittelsbach dynasty with 130 rooms of baroque and rococo decoration. The Antiquarium hall alone is worth the visit — the largest Renaissance hall north of the Alps. Add the Schatzkammer (Treasury, €9 combined) for the Bavarian Crown Jewels.",
                  "Evening: Hofbräuhaus am Platzl, Munich&apos;s most famous beer hall, founded in 1589 by Duke Wilhelm V. Order a Maß (one-litre stein) of Hofbräu Original for €12.80, Schweinshaxe (roast pork knuckle) for €16.90, and listen to the live brass band in the main hall. Touristy but a genuine Munich institution.",
                  "After dinner: walk the illuminated Odeonsplatz and Theatinerkirche, or stroll along the Isar River banks — Munich&apos;s favourite evening promenade.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Englischer Garten · Nymphenburg Palace · BMW Welt · Beer Garden"
                cost="€30–55"
                items={[
                  "Morning: Englischer Garten (English Garden), one of the world&apos;s largest urban parks at 3.7 square kilometres — larger than Central Park. Free entry. Start at the Eisbach wave near Prinzregentenstraße to watch Munich&apos;s famous river surfers ride a permanent standing wave year-round. One of Europe&apos;s most surprising urban sights.",
                  "Walk or cycle through the park to the Chinese Tower (Chinesischer Turm) beer garden — 7,000 seats under chestnut trees, Maß from €12, pretzels €4. Locals bring their own food (this is allowed and encouraged in Bavarian beer gardens) and just buy the beer.",
                  "Afternoon: U-Bahn to Nymphenburg Palace (€8 entry), the baroque summer residence of the Bavarian kings. The palace interior includes the famous Gallery of Beauties commissioned by King Ludwig I. The gardens are free and spectacular — canals, follies, and the extraordinary rococo Amalienburg hunting lodge.",
                  "Late afternoon: BMW Welt (free entry), the futuristic showroom and delivery centre next to the Olympic Park. Walk through the latest BMW, MINI, and Rolls-Royce models. The BMW Museum next door (€10) traces the company&apos;s history from 1916. Architecture fans will appreciate the four-cylinder BMW headquarters tower.",
                  "Evening: Augustiner Bräustuben on Landsberger Straße, where locals drink. The beer is Augustiner — Munich&apos;s oldest brewery (founded 1328) and the one Münchner actually prefer. A Maß of Augustiner Edelstoff from the wooden barrel (Holzfass) is one of Munich&apos;s great drinking experiences. Expect to pay around €11 for a litre.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Neuschwanstein Day Trip · or Alte Pinakothek & Dachau"
                cost="€50–80"
                items={[
                  "Option A — Neuschwanstein Castle: Take the early train from München Hauptbahnhof to Füssen (2 hours, €27 return with Bayern Ticket). Bus 73/78 from Füssen station to Hohenschwangau village (€4 return). Book timed-entry tickets in advance at hohenschwangau.de — €18 per adult for the guided interior tour. The Throne Room and Singer&apos;s Hall are extraordinary. Walk to Marienbrücke bridge for the famous view of the castle over the gorge.",
                  "Option A continued: Lunch in Hohenschwangau village. Consider also visiting Hohenschwangau Castle (€18) — the yellow castle across the lake, childhood home of Ludwig II and arguably more interesting for its intimate rooms and personal history. Return train to Munich arrives by 7pm.",
                  "Option B — Museums &amp; Memorial: Alte Pinakothek (€4 on Sundays, €7 otherwise) for one of Europe&apos;s finest Old Masters collections — Dürer, Rubens, Rembrandt, and Raphael. Then S-Bahn S2 to Dachau Memorial (entry free, transport €7) — allow 3 hours for this profoundly important historical site. Audio guide recommended (€4.50).",
                  "Option B continued: Return to Munich and explore the Schwabing neighbourhood — bohemian cafes, independent bookshops, and the Pinakothek der Moderne (€10) if you have time.",
                  "Evening (both options): Farewell dinner at Zum Franziskaner on Residenzstraße (since 1363) — weisswurst, Schweinshaxe, and Augustiner beer in a traditional wood-panelled dining room. Or try Wirtshaus in der Au in the Haidhausen neighbourhood for refined Bavarian cooking with Knödel (dumplings) that are considered Munich&apos;s best.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Munich" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEER HALL & GARDEN GUIDE ── */}
          <section id="beer" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍺 Beer Hall &amp; Garden Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Munich&apos;s beer culture is older than the city itself. Six breweries hold the monopoly on Oktoberfest beer: Augustiner, Hacker-Pschorr, Hofbräu, Löwenbräu, Paulaner, and Spaten. In Bavarian beer gardens, you&apos;re allowed to bring your own food — just buy the beer. Here are the essential stops.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hofbräuhaus am Platzl",
                  e: "Maß €12.80",
                  d: "The world&apos;s most famous beer hall, founded in 1589. Three floors: the ground-floor Schwemme (main hall) with 1,300 seats and live brass band, the first-floor festival hall, and the rooftop beer garden. Touristy but an essential Munich experience. Schweinshaxe €16.90. Expect crowds — arrive before 6pm for a seat.",
                  t: "Iconic · Tourist essential",
                },
                {
                  n: "Augustiner Bräustuben",
                  e: "Maß ~€11",
                  d: "Where Münchner actually drink. Augustiner is Munich&apos;s oldest brewery (1328) and the only major brewery still in local ownership. The Bräustuben on Landsberger Straße serves Edelstoff from wooden barrels (Holzfass) — widely considered Munich&apos;s finest beer. Less touristy, more authentic.",
                  t: "Local favourite · Best beer",
                },
                {
                  n: "Chinesischer Turm (English Garden)",
                  e: "Maß ~€12",
                  d: "Munich&apos;s second-largest beer garden with 7,000 seats around a wooden pagoda in the English Garden. Rotating brewery taps. Bring your own food or buy pretzels, Obatzda, and half-chickens from the stalls. Perfect for a summer afternoon after watching the Eisbach surfers.",
                  t: "Beer garden · 7,000 seats",
                },
                {
                  n: "Hirschgarten",
                  e: "Maß ~€11",
                  d: "Munich&apos;s largest beer garden at 8,000 seats, set in a former royal deer park in the Nymphenburg area. Augustiner beer on tap. Less touristy than the English Garden options. There are actual deer in the adjacent enclosure. A genuine locals&apos; gathering place on warm evenings.",
                  t: "Largest · 8,000 seats",
                },
                {
                  n: "Paulaner am Nockherberg",
                  e: "Maß ~€12",
                  d: "The original Paulaner brewery restaurant on Nockherberg hill in the Au neighbourhood. Famous for Starkbierzeit (Strong Beer Festival) in March — Munich&apos;s locals-only Oktoberfest. Year-round, the beer garden has excellent views over the city. Paulaner Salvator doppelbock is the signature pour.",
                  t: "Brewery original · Starkbier",
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
            title="Munich &mdash; Beer Halls, Palaces &amp; the Alps"
            subtitle="Bavaria&apos;s remarkable capital and its surroundings."
            spots={[
              {
                name: "Marienplatz Glockenspiel",
                query: "munich marienplatz glockenspiel new town hall neues rathaus bavaria",
                desc: "The Neues Rathaus and its famous Glockenspiel carillon — the centrepiece of Munich&apos;s Altstadt, chiming daily at 11am and 12pm.",
              },
              {
                name: "Englischer Garten",
                query: "munich english garden englischer garten eisbach wave surfing bavaria",
                desc: "The Eisbach wave and the vast Englischer Garten — 3.7 square kilometres of urban parkland in the heart of the city.",
              },
              {
                name: "Neuschwanstein Castle",
                query: "neuschwanstein castle bavaria germany alps fairy tale ludwig",
                desc: "Neuschwanstein Castle rising from the Bavarian Alps — Germany&apos;s most visited attraction, two hours from Munich by train.",
              },
              {
                name: "Nymphenburg Palace",
                query: "nymphenburg palace munich baroque garden bavaria germany",
                desc: "The baroque Nymphenburg Palace and its sweeping formal gardens — the summer residence of the Bavarian kings.",
              },
              {
                name: "Hofbräuhaus Beer Hall",
                query: "hofbrauhaus munich beer hall bavarian brass band stein germany",
                desc: "The Hofbräuhaus am Platzl — Munich&apos;s most famous beer hall, serving Maß steins since 1589.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Munich is Germany&apos;s most expensive city, but smart choices keep costs manageable. Beer garden meals, the MVV day pass, and free attractions (English Garden, Marienplatz, BMW Welt) mean budget travellers can comfortably explore on &euro;65/day.
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
                    ["🏨 Accommodation", "€20–30 (hostel)", "€70–100 (3-star)", "€250–400 (5-star)"],
                    ["🍽 Food &amp; Drink", "€15–20/day", "€35–45/day", "€100–180/day"],
                    ["🚇 Transport (MVV)", "€9.60 day pass", "€15–20/day", "€80–150 (private)"],
                    ["🏛️ Activities", "€10–15/day", "€25–35/day", "€80–120/day"],
                    ["🍺 Beer Budget", "€5–10/day", "€15–25/day", "€30–50/day"],
                    ["TOTAL (per day)", "€65/day", "€140/day", "€320+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Wombats City Hostel or Jaeger&apos;s Hostel (dorms from €22/night). Eat at Viktualienmarkt, self-cater from Aldi/Rewe, and bring your own food to beer gardens. The MVV day pass (€9.60) covers all public transport.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€140/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hotel Torbräu or similar 3-star hotel near Marienplatz (€70–100/night). Eat at restaurants for lunch and dinner, book one guided walking tour, and enjoy a proper Hofbräuhaus evening. The sweet spot for comfort.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">👑 Luxury (€320+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Bayerischer Hof or Hotel Vier Jahreszeiten Kempinski. Dine at Atelier (2 Michelin stars) or Tantris. Private guides for the Residenz, helicopter flights over Neuschwanstein, and champagne at Dallmayr.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Munich</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Altstadt (Old Town) around Marienplatz is the most convenient base &mdash; walkable to all major sights. Schwabing is the bohemian, university quarter with good restaurants. Haidhausen across the Isar is trendy and slightly cheaper. All are well connected by U-Bahn and S-Bahn.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Bayerischer Hof",
                  type: "5-star luxury · Altstadt, Promenadeplatz",
                  price: "From €350/night",
                  badge: "Most prestigious",
                  desc: "Munich&apos;s grandest hotel since 1841, home to the 2-Michelin-star Atelier restaurant and a rooftop bar with Frauenkirche views. The blue spa with indoor pool is exceptional. Walking distance to Marienplatz and the Residenz. Where visiting heads of state stay.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Torbräu",
                  type: "4-star historic · Altstadt, near Isartor",
                  price: "From €130/night",
                  badge: "Best mid-range",
                  desc: "Munich&apos;s oldest hotel (since 1490), beautifully renovated with a mix of traditional Bavarian and modern rooms. Five-minute walk to Marienplatz and Viktualienmarkt. The in-house Italian restaurant is excellent. Outstanding value for the location.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Wombats City Hostel",
                  type: "Hostel · Hauptbahnhof area",
                  price: "From €22/night (dorm)",
                  badge: "Best budget",
                  desc: "Clean, modern hostel 5 minutes from the central station and a 15-minute walk to Marienplatz. Well-designed dorms and private rooms, a good bar, and a communal kitchen for self-catering. Popular with solo travellers and backpackers. Book ahead in Oktoberfest season.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Mandarin Oriental",
                  type: "5-star luxury · Altstadt, Neuturmstraße",
                  price: "From €450/night",
                  badge: "Most exclusive",
                  desc: "Intimate luxury hotel in a converted 19th-century building just off Maximilianstraße. The rooftop terrace and pool have views across the old town rooftops to the Alps. Matsuhisa Munich serves Nobu&apos;s Japanese-Peruvian cuisine. Discreet and refined.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Munich</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bavarian cuisine is hearty and meat-heavy: Schweinshaxe (roast pork knuckle), weisswurst (white veal sausages eaten before noon with sweet mustard), Knödel (bread or potato dumplings), and Obatzda (cheese spread). Vegetarians will find options at most restaurants but Bavaria is not the easiest region for plant-based eating.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Augustiner Bräustuben",
                  t: "Traditional Bavarian · Landsberger Str.",
                  d: "The locals&apos; choice for authentic Bavarian food and Munich&apos;s best beer. Augustiner Edelstoff from the Holzfass (wooden barrel), Schweinshaxe, and Obatzda in a no-nonsense beer hall atmosphere. Mains €12–18. Less touristy than Hofbräuhaus and genuinely better food.",
                  b: "Best authentic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Wirtshaus in der Au",
                  t: "Refined Bavarian · Haidhausen",
                  d: "Famous across Munich for having the best Knödel (dumplings) in the city — sweet, savoury, and seasonal varieties. The Schmalznudeln (deep-fried doughnuts) are legendary. A cosy, wood-panelled Wirtshaus with serious food. Mains €14–22. Reservations recommended.",
                  b: "Best Knödel",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Zum Franziskaner",
                  t: "Traditional · Residenzstraße",
                  d: "Operating since 1363, this is Munich&apos;s oldest restaurant. The weisswurst breakfast (served until noon) is definitive — white veal sausages in hot water, sweet mustard, a pretzel, and a Weissbier. Locals have been starting their day here for centuries. Mains €13–20.",
                  b: "Best weisswurst",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Café Luitpold",
                  t: "Grand café · Brienner Straße",
                  d: "Munich&apos;s historic grand café, perfect for a refined breakfast or afternoon Kaffee und Kuchen. Apfelstrudel, Sachertorte, and excellent espresso in a beautiful art nouveau interior. €8–15 for coffee and cake. A different side of Munich from the beer halls.",
                  b: "Best café",
                  c: "bg-teal-50 border-teal-200",
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
            destination="Munich Bavaria"
            hotels={[
              {
                name: "Bayerischer Hof",
                type: "5-star luxury · Altstadt since 1841",
                price: "From €350/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/de/bayerischer-hof.html?aid=2820480",
              },
              {
                name: "Hotel Torbräu",
                type: "4-star historic · Near Isartor since 1490",
                price: "From €130/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/de/torbraeu.html?aid=2820480",
              },
              {
                name: "Hotel Vier Jahreszeiten Kempinski",
                type: "5-star luxury · Maximilianstraße",
                price: "From €350/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/de/vier-jahreszeiten-kempinski-munchen.html?aid=2820480",
              },
              {
                name: "Wombats City Hostel Munich",
                type: "Hostel · Near Hauptbahnhof",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/de/wombats-city-hostel-munich.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Neuschwanstein Castle Day Trip from Munich",
                duration: "10–12 hrs",
                price: "From €55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=neuschwanstein+castle+day+trip+munich&partner_id=PSZA5UI",
              },
              {
                name: "Munich Old Town Walking Tour",
                duration: "2–3 hrs",
                price: "From €18/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=munich+old+town+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Munich Beer Tour &amp; Tasting",
                duration: "3–4 hrs",
                price: "From €35/person",
                badge: "Fun",
                url: "https://www.getyourguide.com/s/?q=munich+beer+tour&partner_id=PSZA5UI",
              },
              {
                name: "Dachau Memorial Guided Tour",
                duration: "5 hrs",
                price: "From €28/person",
                url: "https://www.getyourguide.com/s/?q=dachau+memorial+tour+munich&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Munich</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎟️",
                  title: "The Bayern Ticket is a secret weapon",
                  desc: "At €29 for one person (€6 per additional person up to 5), the Bayern Ticket covers all regional train travel across Bavaria for one day — Neuschwanstein, Salzburg, Nuremberg, and Regensburg. Buy at MVV machines. Groups get extraordinary value.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍺",
                  title: "Bring your own food to beer gardens",
                  desc: "In traditional Bavarian beer gardens (with bench seating under trees), you&apos;re legally allowed to bring your own food — you only have to buy the beer. This is not a loophole, it&apos;s Bavarian tradition. Pack bread, cheese, and sausage from the supermarket and save €15–20 per meal.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏛️",
                  title: "€4 Sundays at the Alte Pinakothek",
                  desc: "The Alte Pinakothek — one of Europe&apos;s great art museums (Dürer, Rubens, Rembrandt) — charges just €4 on Sundays instead of €7. Several other Munich museums also offer reduced Sunday admission. Plan your museum day accordingly.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Book Neuschwanstein weeks ahead",
                  desc: "Neuschwanstein Castle sells out weeks in advance during summer. Walk-ups often sell out by 10am. Book timed-entry tickets at hohenschwangau.de the moment your dates are confirmed. The Bayern Ticket covers the train to Füssen.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚇",
                  title: "Buy the MVV day pass, not single tickets",
                  desc: "Munich&apos;s MVV sells single tickets from €3.90 that add up fast. The Tageskarte (day pass) costs €9.60 for the inner zone and covers unlimited S-Bahn, U-Bahn, tram, and bus. Buy at any station machine or the MVG More app.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "The Eisbach surfers perform year-round",
                  desc: "The famous Eisbach wave in the English Garden runs 365 days a year — including in snow. The surfers are there from dawn to dusk. It&apos;s one of Munich&apos;s most unique free attractions and a perfect introduction to the city on Day 1.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Munich" />

          {/* Combine With */}
          <CombineWith currentSlug="munich-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Munich expensive compared to other German cities?",
                  a: "Munich is Germany\u0027s most expensive city, with accommodation and restaurant prices higher than Berlin, Hamburg, or Cologne. That said, genuine budget options exist \u2014 hostel dorms from \u20AC22, Viktualienmarkt lunches under \u20AC8, and many free attractions (English Garden, Marienplatz, BMW Welt, Dachau Memorial). Budget travellers can comfortably enjoy Munich on \u20AC65/day with smart choices.",
                },
                {
                  q: "How far is Neuschwanstein Castle from Munich?",
                  a: "Neuschwanstein is approximately 130km southwest of Munich \u2014 around 2 hours by regional train (change at Kaufbeuren or Buchloe to F\u00FCssen), then a short bus ride to Hohenschwangau village. The Bayern Ticket (\u20AC29 per person) covers the entire train journey. Organised day tours are also widely available and convenient for first-time visitors.",
                },
                {
                  q: "When is Oktoberfest and do I need tickets?",
                  a: "Oktoberfest runs from the third Saturday in September to the first Sunday in October (approximately September 20 \u2013 October 5, 2026). Entry to the festival grounds is free. However, sitting inside the main beer tents requires a reserved table \u2014 these are allocated by the brewery tent operators, often a full year in advance. Unreserved standing room at tent entrances is possible but crowded. Book accommodation 6\u201312 months ahead.",
                },
                {
                  q: "Is Munich safe for solo travellers?",
                  a: "Munich is one of Europe\u0027s safest major cities with very low violent crime rates. Standard precautions apply: watch for pickpockets near Marienplatz, on the U-Bahn, and especially at Oktoberfest where large crowds and heavy drinking create ideal conditions for theft. Use a money belt at the festival.",
                },
                {
                  q: "How do I get from Munich Airport to the city centre?",
                  a: "The S-Bahn (S1 or S8) runs from the airport to Marienplatz every 10 minutes and takes 40 minutes. A single ticket costs \u20AC12. The Lufthansa Express Bus to Hauptbahnhof costs \u20AC11.50 and takes 45 minutes. Taxis cost \u20AC70\u201380. Avoid the private transfer touts in the arrivals hall.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Munich trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/munich-3-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/munich-3-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/munich-3-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/germany-travel-tips", label: "Germany tips", icon: "📋" },
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
          <RelatedGuides currentSlug="munich-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vienna 4 Days &mdash; Imperial Capital", href: "/blog/vienna-4-days" },
                { label: "Prague 4 Days &mdash; Bohemian Beauty", href: "/blog/prague-4-days" },
                { label: "Berlin 4 Days &mdash; History &amp; Culture", href: "/blog/berlin-4-days" },
                { label: "Amsterdam 3 Days &mdash; Canals &amp; Art", href: "/blog/amsterdam-3-days" },
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
