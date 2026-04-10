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
const PRAGUE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Prague Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏰",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Prague 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Prague in 4 Days — castle, Charles Bridge and the best beer in Europe&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/prague-4-days"
        imageUrl="https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80"
        description="Prague in 4 Days: Prague Castle, Charles Bridge at dawn, Old Town Square, Kutna Hora Bone Church, and where to drink a 60 CZK Pilsner away from the tourist traps."
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
export default function PragueClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PRAGUE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Prague" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="prague castle charles bridge czech republic old town vltava dawn"
            fallback="https://images.unsplash.com/photo-1541849546-216549ae216d?w=1600&q=80"
            alt="Prague Castle and Charles Bridge reflected over the Vltava river at dawn Czech Republic"
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
              <span className="text-white/70">Prague 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Castle &amp; Beer Culture
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Prague in 4 Days:
                <em className="italic text-amber-300"> Castle, Charles Bridge &amp; the Best Beer in Europe</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s largest castle complex, a 14th-century bridge at dawn, a bone church made of 40,000 skeletons, and 60 CZK (~$2.50) Pilsner Urquell poured fresh from the tank. The complete guide with real timings, costs in CZK &amp; USD, and the mistakes that ruin most Prague trips.
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
              <span>🇨🇿 Czech Republic</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From 1,000 CZK/day (~$42)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Charles Bridge at 5:30am in early mist, the castle glowing gold above the Vltava, not a selfie stick in sight — is one of the most quietly stunning moments in European travel. Four days gives you the medieval Old Town, the world&apos;s largest castle complex, a bone church made of 40,000 human skeletons, and enough time to drink a 45 CZK Pilsner in Žižkov and understand why the Czechs lead the world in beer consumption per capita.
            </p>
          </blockquote>

          {/* ── WHAT PRAGUE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Prague Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Prague is the capital of the Czech Republic, a city of 1.3 million people built across seven hills along the Vltava river. The Old Town survived both World Wars virtually intact, which means you are walking through genuinely medieval streets, not reconstructions. The Astronomical Clock has been ticking since 1410. Charles Bridge was begun in 1357. Prague Castle has been continuously occupied since the 9th century and remains the largest ancient castle complex in the world by area at 70,000 square metres.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: the Old Town Square and Charles Bridge corridor is heavily touristed, with inflated restaurant prices and shoulder-to-shoulder crowds between 10am and 6pm in summer. Walk one block off the square in any direction and prices drop by 60%. Walk three blocks and you are in a functioning Central European city with excellent public transport, world-class beer culture, and a cost of living that remains significantly below Western Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the sweet spot. You can cover the Old Town and Jewish Quarter, Prague Castle and Mal&aacute; Strana, a day trip to the Kutna Hora Bone Church, and still have time for the real neighbourhoods &mdash; Vinohrady for Art Nouveau elegance, Žižkov for the cheapest beer in the city, and Letna Park for the best panorama of Prague&apos;s red-tiled rooftops.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="PRG (Vaclav Havel)" />
              <StatCard icon="🌡️" label="Best Months" value="Apr-Jun, Sep-Oct" />
              <StatCard icon="🏰" label="Castle Area" value="70,000 m²" />
              <StatCard icon="💰" label="Budget From" value="1,000 CZK/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Prague</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr-Jun",
                  i: "☀️",
                  t: "Spring — Best Overall",
                  d: "12-24°C with long days and blooming gardens. Outdoor cafe culture returns, Petrin Hill is in full bloom, and the castle gardens open. Tourist numbers are moderate in April and May, building toward peak in June. This is Prague at its most livable — warm enough for bridges at dawn, cool enough for castle walks at midday.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul-Aug",
                  i: "🌅",
                  t: "Summer — Hottest & Busiest",
                  d: "20-30°C with occasional thunderstorms. This is peak tourist season — Charles Bridge is impassable at midday, castle queues stretch for an hour, and accommodation prices double. The long evenings are beautiful and beer gardens are at their best, but the historic centre functions more like a theme park than a city.",
                  b: "Avoid if possible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep-Oct",
                  i: "🍂",
                  t: "Autumn — Quieter & Golden",
                  d: "10-20°C with golden light on the Baroque rooftops. September is arguably the finest month — crowds drop significantly, accommodation is cheaper, and the autumn light filtering through the Old Town lanes is extraordinary. October brings crisp mornings, fewer tourists, and the beer halls at their cosiest.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov-Mar",
                  i: "❄️",
                  t: "Winter — Christmas Markets & Snow",
                  d: "−3 to 5°C. Cold, short days, but Prague under snow is magical. The Christmas markets on Old Town Square (late November to early January) are among the best in Europe. Hotel prices drop 30-50% outside the Christmas period. January and February are the quietest months — the castle and bridge are often near-empty even at midday.",
                  b: "Budget travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Prague</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Prague&apos;s V&aacute;clav Havel Airport (PRG) is 17km west of the city centre. The Airport Express bus (100 CZK / ~$4.20) runs to the main train station in 35 minutes. <strong className="font-medium">Indian passport holders need a Schengen visa. US/UK/EU passport holders enter visa-free for 90 days.</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights from India to Prague. Best connections via Istanbul (Turkish Airlines, 8-9 hrs total), Dubai (Emirates/FlyDubai, 9-10 hrs), or Frankfurt (Lufthansa, 10-11 hrs). Budget option: fly to Vienna or Budapest on a cheaper fare and take a 4-hour train or FlixBus to Prague. Fares from Delhi/Mumbai start around INR 30,000-45,000 return if booked 6-8 weeks ahead.",
                  b: "Via Istanbul or Dubai",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe & UK",
                  d: "Ryanair, easyJet, and Wizz Air fly direct to Prague from London, Paris, Berlin, Rome, Barcelona, and most European capitals. Fares from London start at GBP 20-40 one way on budget carriers. Flight time from London is 2 hours. Direct flights from most major European cities take 1-3 hours.",
                  b: "Budget airlines available",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚇",
                  t: "Tram & Metro in Prague",
                  d: "Prague has one of the best public transport systems in Europe. A 30-minute ticket costs 30 CZK (~$1.25), a 24-hour pass is 120 CZK (~$5), and a 72-hour pass is 330 CZK (~$14). The same ticket works on trams, metro, and buses. Buy tickets from yellow machines at metro stations or use the PID Litacka app. Validate your ticket on first use. Tram 22 runs the scenic route from the Old Town through Mala Strana to the castle.",
                  b: "Excellent metro & trams",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport to City Centre",
                  d: "Airport Express bus (AE) to Praha hlavni nadrazi (main station) takes 35 minutes, costs 100 CZK (~$4.20), and runs every 30 minutes. Alternatively, bus 119 to Nadrazi Veleslavin metro station (metro line A) costs 40 CZK with a standard transport ticket — total journey time around 45 minutes. A taxi or Bolt to the Old Town costs 500-700 CZK (~$21-29). Never use the taxi touts in arrivals — use the Bolt or Liftago app.",
                  b: "Bus 119 + Metro cheapest",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Prague Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (3,000-5,500 CZK/day, ~$125-230). Each day card is expandable. All prices in CZK with USD equivalents at approximately 24 CZK = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town Square, Josefov & Charles Bridge"
                cost="1,200-2,500 CZK (~$50-104)"
                items={[
                  "9:00am — Old Town Square (free): Prague's medieval centrepiece. Tyn Church's twin Gothic towers dominate the skyline — free to enter the interior. The baroque St Nicholas Church on the square is equally beautiful and free to visit.",
                  "10:00am — Astronomical Clock (Orloj): the hourly procession of apostles is free to watch from below. Climb the clock tower for the best view of Old Town rooftops (250 CZK / ~$10.40). The clock dates to 1410 and is the third-oldest working astronomical clock in the world.",
                  "11:30am — Josefov Jewish Quarter: the former Jewish ghetto contains six synagogues and the Old Jewish Cemetery with tombs stacked 12 layers deep. Combo ticket covering all synagogues and cemetery costs approximately 500 CZK (~$20.80). The Old-New Synagogue (Europe's oldest active synagogue, 1270) is a separate ticket (170 CZK / ~$7).",
                  "1:00pm — Lunch near Old Town: avoid the tourist traps on the square. Walk two streets east toward Dlouha Street for svickova (beef sirloin with cream sauce) at a local pub for 180-220 CZK ($7.50-9.20). Lokal on Dlouha Street serves excellent svickova and tank-fresh Pilsner Urquell.",
                  "3:00pm — Ungelt courtyard behind Tyn Church — the merchants' trading courtyard from the 11th century, architecturally pristine and largely unknown to quick-tour groups.",
                  "5:30pm — Charles Bridge: Prague's most iconic structure (14th century, free always). Late afternoon light is magical — the 30 Baroque statues cast long shadows and the castle above glows gold. If you can get here at 5:30am the next morning, that is even better.",
                  "7:30pm — Evening beer off the square: walk one block and prices drop from 200 CZK/pint to 50-70 CZK. U Zlateho Tygra (Golden Tiger) on Husova Street pours some of the best Pilsner Urquell in Prague at 59 CZK (~$2.50) per half-litre.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Prague Castle, Mala Strana & Petrin Hill"
                cost="1,000-2,000 CZK (~$42-83)"
                items={[
                  "8:30am — Prague Castle (Prazsky hrad): the largest ancient castle complex in the world by area (70,000 m²). Castle grounds and courtyards are free to enter. For interiors — St Vitus Cathedral nave (free), Old Royal Palace, Basilica of St George, and Golden Lane — buy Circuit B: 350 CZK (~$14.60).",
                  "9:00am — St Vitus Cathedral: Gothic masterpiece begun in 1344, completed in 1929 — 585 years under construction. The Art Nouveau stained glass by Alfons Mucha in the third chapel is extraordinary. Climb the Great South Tower for views (150 CZK / ~$6.25 extra).",
                  "11:00am — Golden Lane: tiny colourful 16th-century cottages built into the castle fortifications. Franz Kafka lived at No. 22 in 1916-17. Included in Circuit B ticket.",
                  "12:30pm — Lunch in Mala Strana (Little Quarter): descend the castle steps into this beautifully preserved Baroque neighbourhood. Honest Czech food at 150-250 CZK ($6.25-10.40) per main course. The Little Quarter is far less touristy than the Old Town.",
                  "2:30pm — Kampa Island: cross the Certovka canal to this quiet island below Charles Bridge. The John Lennon Wall (free) is nearby. Kampa Park has views up to the bridge and castle.",
                  "4:00pm — Petrin Hill: a forested hill above Mala Strana with a miniature Eiffel Tower observation tower (150 CZK / ~$6.25). The funicular costs one standard transport ticket (30 CZK). The hilltop views over Prague's red-tiled rooftops are among the best in the city.",
                  "7:00pm — Dinner in Mala Strana or across the river in Smichov — authentic neighbourhood restaurants at 200-350 CZK ($8.30-14.60) for a main course with a beer.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Kutna Hora Bone Church & Zizkov Evening"
                cost="800-1,500 CZK (~$33-62)"
                items={[
                  "7:30am — Train from Praha hlavni nadrazi to Kutna Hora (200 CZK / ~$8.30 return). Trains run hourly, journey 55 minutes. Buy tickets at the station or via the CD app.",
                  "9:00am — Sedlec Ossuary (Bone Church): 40,000 human skeletons artistically arranged into chandeliers, coats of arms, and decorations. Entry 120 CZK (~$5). Arrive early to avoid school groups. Give it 45 minutes, not the 15 that rushed tours allow.",
                  "10:30am — Walk to Kutna Hora's historic centre. The Italian Court (Vlassky dvur) — the former royal mint — tours available for 150 CZK (~$6.25).",
                  "12:00pm — Lunch in Kutna Hora centre at a local restaurant: excellent Czech pub food in restored medieval buildings, 250-350 CZK (~$10.40-14.60) for a full meal.",
                  "1:30pm — St Barbara's Cathedral (Gothic, UNESCO): the interior with distinctive tent vaulting is one of the finest in Central Europe. Entry approximately 150 CZK (~$6.25).",
                  "3:30pm — Return train to Prague. Arrive by 5pm.",
                  "6:30pm — Zizkov district evening: Prague's working-class neighbourhood and home of the cheapest beer in the city. The Zizkov Television Tower with David Cerny's giant crawling baby sculptures is nearby and surreal (free exterior, 250 CZK / ~$10.40 to climb). Pub dinner including 3 half-litres of Pilsner: under 400 CZK (~$16.70).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Vinohrady, Vysehrad & Wenceslas Square"
                cost="1,000-2,000 CZK (~$42-83)"
                items={[
                  "9:00am — Vysehrad fortress: Prague's other castle, dramatically perched on a cliff above the Vltava. Far fewer tourists than Prague Castle. The Basilica of St Peter and St Paul has a stunning Art Nouveau interior. The Vysehrad Cemetery holds the graves of Dvorak, Smetana, and Mucha. Free to enter the fortress grounds; cemetery free; basilica 50 CZK (~$2).",
                  "11:00am — Vinohrady district: Prague's most elegant residential neighbourhood in Art Nouveau style. Walk from namesti Miru (Peace Square) with its neo-Gothic St Ludmila Church. Far fewer tourists — this is how actual Praguers live.",
                  "12:30pm — Wenceslas Square: technically a boulevard stretching 750 metres. Site of the 1968 Prague Spring protests and the 1989 Velvet Revolution. The equestrian statue of St Wenceslas at the upper end is Prague's traditional meeting point.",
                  "2:00pm — National Museum (Narodni muzeum): neo-Renaissance building at the top of Wenceslas Square. Entry 300 CZK (~$12.50). The interior staircase and Pantheon hall are worth seeing even if you rush the exhibits.",
                  "4:00pm — Municipal House (Obecni dum): Prague's finest Art Nouveau building. Free to enter public areas. Guided tours of the ceremonial halls available (290 CZK / ~$12). The Powder Gate tower next door dates to 1475 (150 CZK / ~$6.25 to climb).",
                  "5:30pm — Letna Park: take the tram to Letenske namesti for Prague's best city panorama. The beer garden here serves tank beer for 55 CZK (~$2.30) with an unbeatable view over the Vltava bend and Old Town rooftops.",
                  "8:00pm — Farewell dinner at Lokal Hamburk in Vinohrady or Cafe Savoy in Mala Strana for a proper Czech meal — svickova or roasted duck with bread dumplings. Budget 400-600 CZK ($16.70-25) for a full dinner with two beers.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Prague" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Prague Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks in order of priority. All prices in CZK with USD equivalents as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Prague Castle (Prazsky hrad)",
                  e: "Free grounds / 350 CZK Circuit B (~$14.60)",
                  d: "The largest ancient castle complex in the world at 70,000 m². Courtyards and gardens are free. Circuit B covers St Vitus Cathedral interior, Old Royal Palace, Golden Lane, and the Basilica of St George. Arrive at 9am opening to avoid queues. The Prague Card (1,890 CZK / ~$79 for 3 days) includes Circuit B and 50 other attractions plus unlimited transport.",
                  t: "Must see · 3 hrs",
                },
                {
                  n: "Charles Bridge (Karluv most)",
                  e: "Free",
                  d: "Prague's most iconic structure, begun in 1357 under Charles IV. 30 Baroque statues line the 516-metre span. At 5:30am in spring the bridge is empty with mist rising off the Vltava and the castle catching first light — one of the great travel moments in Europe. By 10am it is shoulder to shoulder. Late afternoon offers good light without the dawn alarm.",
                  t: "Must see · Dawn or dusk · 1 hr",
                },
                {
                  n: "Old Town Square & Astronomical Clock",
                  e: "Free / Tower 250 CZK (~$10.40)",
                  d: "Prague's medieval heart with the twin-spired Tyn Church, baroque St Nicholas Church, and the Astronomical Clock (Orloj) dating to 1410. The hourly show of apostles is free from below. The clock tower offers the best rooftop view of the Old Town. Avoid eating at the restaurants directly on the square — prices are 3x the neighbourhood average.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Sedlec Ossuary (Bone Church) — Kutna Hora",
                  e: "120 CZK (~$5) + 200 CZK train return (~$8.30)",
                  d: "A 14th-century chapel where 40,000 human skeletons have been arranged into chandeliers, a coat of arms, and decorative patterns. One hour from Prague by train. Genuinely unlike anything else in Europe. Pair with St Barbara's Cathedral and the medieval town centre for a full day trip.",
                  t: "Must see · Full day trip",
                },
                {
                  n: "Josefov Jewish Quarter",
                  e: "500 CZK combo (~$20.80)",
                  d: "One of the best-preserved Jewish quarters in Europe. Six synagogues and the Old Jewish Cemetery with 12,000 visible tombstones stacked 12 layers deep. The Old-New Synagogue (1270) is Europe's oldest active synagogue. A separate ticket (170 CZK / ~$7). Allow 2-3 hours for the full circuit.",
                  t: "Must see · 2.5 hrs",
                },
                {
                  n: "Vysehrad",
                  e: "Free grounds / Basilica 50 CZK (~$2)",
                  d: "Prague's second castle on a dramatic Vltava cliff. Far quieter than Prague Castle. The Romanesque rotunda, Art Nouveau basilica, and the cemetery (Dvorak, Smetana, Mucha) make this a rewarding morning stop. The views of the river from the fortress walls are excellent.",
                  t: "Recommended · 1.5 hrs",
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
            title="Prague — Castle, Bridges &amp; Gothic Spires"
            subtitle="One of the most intact medieval cityscapes in Europe, built along the Vltava river beneath the world's largest castle."
            spots={[
              {
                name: "Prague Castle at Dawn",
                query: "prague castle hradcany morning golden light vltava river view",
                desc: "The world's largest ancient castle complex — 70,000 square metres of courtyards, gardens, and Gothic architecture dominating the city skyline.",
              },
              {
                name: "Charles Bridge in Morning Mist",
                query: "charles bridge prague morning mist baroque statues empty",
                desc: "The 14th-century bridge at 5:30am before the crowds — 30 Baroque statues in Vltava mist with the castle glowing above.",
              },
              {
                name: "Old Town Square & Tyn Church",
                query: "prague old town square tyn church astronomical clock night",
                desc: "Prague's medieval heart — the twin Gothic spires of Tyn Church and the 1410 Astronomical Clock.",
              },
              {
                name: "Kutna Hora Bone Church",
                query: "sedlec ossuary bone church kutna hora chandelier skulls",
                desc: "40,000 human skeletons arranged into art — chandeliers, coats of arms, and decorative garlands in a 14th-century chapel.",
              },
              {
                name: "Petrin Hill & Prague Panorama",
                query: "petrin hill prague observation tower red rooftops panorama sunset",
                desc: "The forested hill above Mala Strana with a miniature Eiffel Tower and the finest panoramic view of Prague's red-tiled rooftops.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Prague remains significantly cheaper than Western European capitals. A beer costs 45-70 CZK (~$1.90-2.90) in a local pub, a full Czech lunch costs 150-250 CZK (~$6.25-10.40), and a hostel bed is 350-600 CZK (~$14.60-25). All prices in Czech koruna (CZK) and USD at approximately 24 CZK = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (4 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4N)", "1,400-2,400 CZK ($58-100)", "6,400-12,000 CZK ($267-500)", "24,000-96,000 CZK ($1,000-4,000)"],
                    ["🍽 Food & Drinks", "1,000-1,800 CZK ($42-75)", "2,400-4,300 CZK ($100-179)", "8,000-24,000 CZK ($333-1,000)"],
                    ["🚇 Transport", "280-480 CZK ($12-20)", "480-720 CZK ($20-30)", "1,400-3,800 CZK ($58-158)"],
                    ["🎯 Activities & Entry", "960-1,900 CZK ($40-79)", "1,900-3,800 CZK ($79-158)", "4,800-14,400 CZK ($200-600)"],
                    ["🚂 Day Trip (Kutna Hora)", "480-840 CZK ($20-35)", "480-840 CZK ($20-35)", "2,400-3,600 CZK ($100-150)"],
                    ["TOTAL (per person)", "4,000-7,200 CZK ($167-300)", "12,000-22,000 CZK ($500-917)", "38,000-134,000 CZK ($1,583-5,583)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (1,000-1,800 CZK/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (350-600 CZK/night), eat at local pubs and bakeries, use 24-hour transport passes (120 CZK), and focus on free attractions — the castle grounds, Charles Bridge, church interiors, and neighbourhood walks cost nothing.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (3,000-5,500 CZK/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-star or boutique hotels (1,600-3,000 CZK/night), a mix of pub meals and restaurant dining, the Prague Card for attractions, and a guided walking tour. The sweet spot for Prague — you get everything without overspending.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (9,500+ CZK/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels (6,000-24,000 CZK/night), Michelin-starred dining, private castle tours, and river cruise dinners. Prague is outstanding luxury value — $400/night gets you what would cost $800+ in Paris or London.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Prague</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which neighbourhood to base yourself. Old Town for proximity to everything but higher prices and tourist noise. Mala Strana for Baroque charm and castle access. Vinohrady for Art Nouveau elegance and local life. Zizkov for the cheapest beer and most authentic atmosphere.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Old Town (Stare Mesto)",
                  type: "Central · Walking distance to everything",
                  price: "1,600-4,800 CZK/night ($67-200)",
                  badge: "Most convenient",
                  desc: "Within walking distance of Old Town Square, Charles Bridge, and Josefov. The trade-off is tourist noise and inflated restaurant prices on the main streets. Stay on quieter lanes east of the square near Dlouha Street or south toward Narodni for better value. Avoid anything directly on the square — the noise continues until midnight.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Mala Strana (Little Quarter)",
                  type: "Baroque · Castle access",
                  price: "1,900-7,200 CZK/night ($79-300)",
                  badge: "Most atmospheric",
                  desc: "Prague's most beautiful neighbourhood — cobblestone lanes, Baroque palaces, hidden gardens, and a 10-minute walk uphill to Prague Castle. Quieter than Old Town at night. The best neighbourhood for couples and architecture lovers. Cafe Savoy and the riverside embankment are highlights.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Vinohrady",
                  type: "Art Nouveau · Local life",
                  price: "1,200-3,600 CZK/night ($50-150)",
                  badge: "Best value",
                  desc: "Prague's most elegant residential district with tree-lined boulevards, Art Nouveau apartment buildings, and excellent independent cafes and restaurants. 10-15 minutes by metro to Old Town. Namesti Miru is the neighbourhood centre. This is where young professionals live — the food and coffee scene is the best in the city.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Zizkov",
                  type: "Working-class · Beer culture",
                  price: "720-2,400 CZK/night ($30-100)",
                  badge: "Budget pick",
                  desc: "Prague's most authentic neighbourhood with more pubs per capita than anywhere in the city. The TV Tower with Cerny's baby sculptures is the landmark. Hostels and budget hotels are plentiful. 15 minutes by tram to Old Town. Come here to drink 45 CZK half-litres alongside locals who have never visited Old Town Square.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Prague</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important food rule in Prague: walk one block off Old Town Square and prices drop by 60%. A beer on the square costs 190 CZK; the same Pilsner Urquell one street away at Lokal is 59 CZK. Czech cuisine centres on hearty meat dishes, bread dumplings, cream sauces, and the finest lager tradition in the world.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Lokal (Dlouha Street)",
                  t: "Traditional Czech · Old Town",
                  d: "The best svickova (beef sirloin with cream sauce and bread dumplings) in a tourist-accessible setting. Tank-fresh Pilsner Urquell at 59 CZK (~$2.50) per half-litre — the difference between tank beer and bottled is immediately obvious. Full meal with beer: 250-400 CZK ($10.40-16.70). No reservations needed for lunch; book for dinner.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Trdelnik stands (citywide)",
                  t: "Street food · Everywhere",
                  d: "The chimney cake (trdelnik) is rolled dough grilled over charcoal, coated in sugar and cinnamon. Despite claims otherwise, it is a traditional Czech-Slovak pastry. The stands near Charles Bridge charge 120-150 CZK; identical ones in side streets charge 60-80 CZK (~$2.50-3.30). Best eaten warm. Skip the Nutella and ice cream filled versions — the plain cinnamon-sugar original is superior.",
                  b: "Street food classic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Czech beer halls (citywide)",
                  t: "Beer culture · Various neighbourhoods",
                  d: "The Czechs drink more beer per capita than any other nation — 184 litres per person per year. The pilsner style was invented in Plzen in 1842. Tank-fresh Pilsner Urquell in a Prague pub is a genuinely different product from the bottled export. Key venues: U Zlateho Tygra (Husova), Pivovarsky dum (Jecna), and any Zizkov hospoda. Half-litre: 45-70 CZK ($1.90-2.90).",
                  b: "Essential experience",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Svickova at Lokal Hamburk",
                  t: "Traditional Czech · Vinohrady",
                  d: "Svickova na smetane — beef sirloin braised in root vegetables with bread dumplings, cream sauce, cranberry jelly, and a lemon wedge — is the definitive Czech dish. Lokal Hamburk in Vinohrady serves arguably the best version in Prague. Full portion with a half-litre Pilsner: under 300 CZK (~$12.50). This is Czech cooking at its absolute finest.",
                  b: "Best Czech dish",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Zizkov hospoda pubs",
                  t: "Local pubs · Zizkov",
                  d: "Zizkov is Prague's undisputed beer neighbourhood. Utopenci (pickled sausages, 35-50 CZK), half-roasted duck with bread dumplings and red cabbage (280-350 CZK / ~$11.70-14.60), and half-litres of lager for 40-55 CZK (~$1.70-2.30). Total dinner including 3 beers: under 400 CZK (~$16.70). No English menus, no tourist pricing — this is the real Prague.",
                  b: "Cheapest beer in Prague",
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
            destination="Prague Czech Republic"
            hotels={[
              {
                name: "Mosaic House Design Hotel",
                type: "Budget Design Hotel · Old Town",
                price: "From 1,200 CZK/night (~$50)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/cz/mosaic-house.html?aid=2820480",
              },
              {
                name: "Hotel Questenberk",
                type: "Boutique · Mala Strana",
                price: "From 2,400 CZK/night (~$100)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/cz/questenberk.html?aid=2820480",
              },
              {
                name: "Four Seasons Prague",
                type: "Luxury · Vltava Embankment",
                price: "From 12,000 CZK/night (~$500)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/cz/four-seasons-prague.html?aid=2820480",
              },
              {
                name: "Augustine, Marriott",
                type: "Luxury · Mala Strana Monastery",
                price: "From 7,200 CZK/night (~$300)",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/cz/augustine.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kutna Hora & Bone Church Day Trip",
                duration: "Full day",
                price: "From 1,440 CZK/person (~$60)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=kutna+hora+bone+church+day+trip+from+prague&partner_id=PSZA5UI",
              },
              {
                name: "Prague Castle Guided Tour",
                duration: "2.5 hours",
                price: "From 960 CZK/person (~$40)",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=prague+castle+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Old Town & Jewish Quarter Walking Tour",
                duration: "3 hours",
                price: "From 720 CZK/person (~$30)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=prague+old+town+jewish+quarter+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Vltava River Evening Cruise",
                duration: "2 hours",
                price: "From 600 CZK/person (~$25)",
                url: "https://www.getyourguide.com/s/?q=prague+vltava+river+cruise&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🍺",
                  title: "Drinking beer on Old Town Square",
                  desc: "Tourist restaurants on Old Town Square charge 150-200 CZK for a half-litre Pilsner. Walk one block in any direction and the same beer costs 50-70 CZK. Prague's best pubs are all off the square: Lokal on Dlouha, U Zlateho Tygra on Husova, and any hospoda in Zizkov or Vinohrady.",
                },
                {
                  icon: "💀",
                  title: "Skipping Kutna Hora Bone Church",
                  desc: "The Sedlec Ossuary is one of the most extraordinary places in Europe and only 1 hour from Prague by train. Entry is 120 CZK (~$5). Countless Prague visitors skip it and regret it. Schedule it for Day 3 without hesitation — pair it with St Barbara's Cathedral and the medieval town.",
                },
                {
                  icon: "📅",
                  title: "Visiting in July and August",
                  desc: "July and August bring the heaviest tourist volumes. Charles Bridge becomes impassable at midday, castle queues stretch for an hour, and accommodation prices double. Prague in April, May, September or October is dramatically more pleasant — the city is equally beautiful and functions as a city rather than a theme park.",
                },
                {
                  icon: "💱",
                  title: "Exchanging money at airport kiosks",
                  desc: "Exchange booths at Vaclav Havel Airport and on Old Town Square charge 10-20% commission — some advertise zero commission but use a terrible exchange rate. Withdraw CZK from a standard bank ATM on arrival using your debit card. The rate will be close to the interbank rate. When the ATM asks whether to convert to your home currency, always decline and choose CZK.",
                },
                {
                  icon: "🍽️",
                  title: "Eating on the tourist strip",
                  desc: "Restaurants on Old Town Square and Karlova Street (the route to Charles Bridge) charge 2-3x neighbourhood prices for mediocre food. Walk two streets in any direction and you find excellent Czech pubs serving svickova for 180-220 CZK instead of 450 CZK. Ask your hotel reception where they personally eat.",
                },
                {
                  icon: "🚕",
                  title: "Taking taxis from the airport arrivals hall",
                  desc: "Taxi touts in the arrivals hall regularly overcharge tourists — 1,200-1,500 CZK for a ride that should cost 500-700 CZK. Use the Bolt or Liftago app, or take the Airport Express bus (100 CZK, 35 minutes to the main station). Bus 119 to the metro costs just 40 CZK.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Prague</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Charles Bridge at 5:30am",
                  desc: "The most photographed structure in Prague is also the most crowded by 10am. At 5:30am in spring and summer, Charles Bridge is completely empty, enveloped in Vltava mist, with the castle catching the first light above. This is one of the genuinely great travel moments in Europe and costs nothing except an early alarm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎟️",
                  title: "The Prague Card saves real money",
                  desc: "The Prague Card (1,890 CZK / ~$79 for 3 days) includes unlimited public transport plus Prague Castle Circuit B, the National Museum, Municipal House, Strahov Monastery gallery, and 50+ other attractions. If you visit the castle, 3-4 museums, and use transport, it pays for itself on Day 1. Buy online for a small discount.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚃",
                  title: "Tram 22 is a free sightseeing tour",
                  desc: "Tram 22 runs from the centre through Mala Strana and up past Prague Castle — arguably the most scenic public transport route in Europe. Ride it end to end for the price of a 30-minute ticket (30 CZK / ~$1.25). Board at Narodni trida and ride to Pohorelec (near the castle) for the full experience.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍖",
                  title: "Order svickova, not goulash",
                  desc: "Every tourist restaurant pushes goulash because it is easy to batch-cook. Svickova na smetane is the real national dish — beef sirloin braised in root vegetables with bread dumplings, cream sauce, cranberry jelly and lemon. Lokal on Dlouha and Lokal Hamburk in Vinohrady serve the best versions in tourist-accessible settings.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💰",
                  title: "Always choose CZK at ATMs",
                  desc: "When an ATM asks whether to charge in your home currency or CZK, always choose CZK. The dynamic currency conversion offered by ATMs adds a 3-8% markup. This applies to card payments in shops and restaurants too — always pay in CZK and let your bank handle the conversion at the real rate.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "📡",
                  title: "The Zizkov TV Tower babies at night",
                  desc: "The 216-metre Brutalist tower with David Cerny's 10 giant metallic babies crawling up and down it is Prague's most surreal monument. At night, lit from below, the effect is genuinely otherworldly. The neighbourhood around the tower is Prague's most authentic for beer and food — locals only, no tourist menus.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Prague" />

          {/* Combine With */}
          <CombineWith currentSlug="prague-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Prague still cheap in 2026?",
                  a: "Prague remains significantly cheaper than Western European capitals — a beer costs 45-70 CZK ($1.90-2.90) in a local pub, a full Czech lunch costs 150-250 CZK ($6.25-10.40), and a hostel bed is 350-600 CZK/night ($14.60-25). The tourist centre has narrowed the gap — restaurants on Old Town Square are now at Western European prices. The solution: walk one block off the tourist trail.",
                },
                {
                  q: "Do Indian passport holders need a visa for Prague?",
                  a: "Yes. The Czech Republic is a full Schengen member and Indian passport holders must apply for a Schengen short-stay visa (approximately 80 EUR fee) before travel. Processing takes 15-45 days at the Czech embassy or VFS Global. Prepare bank statements showing EUR 100+/day, confirmed hotel bookings, return tickets, and travel insurance with minimum EUR 30,000 coverage.",
                },
                {
                  q: "What is the best time to visit Prague?",
                  a: "April-June and September-October. Spring brings warm days, blooming gardens, and outdoor cafe culture. September is arguably the finest month — crowds drop significantly, accommodation is cheaper, and the autumn light on the Baroque rooftops is extraordinary. Avoid July and August if possible; the tourist density makes the historic centre genuinely unpleasant.",
                },
                {
                  q: "Prague vs Vienna vs Budapest — which should I choose?",
                  a: "All three are excellent. Prague has the most spectacular medieval architecture and the richest beer culture. Vienna has the grandest imperial heritage and classical music scene. Budapest has the most dramatic cityscape (Parliament on the Danube) and unique thermal bath culture. Prague's Old Town is the most intact medieval city centre in Central Europe. For a first visit, Prague edges ahead on visual drama and value.",
                },
                {
                  q: "Is Czech beer really the best in the world?",
                  a: "The Czechs consume more beer per capita than any other nation — 184 litres per person per year. The Bohemian pilsner style originated in Plzen in 1842 and is the template from which all modern lager descended. Tank-fresh Pilsner Urquell in a Prague pub is a genuinely superior product to the exported bottle. If you drink beer at all, this is worth experiencing seriously.",
                },
                {
                  q: "Is Prague safe for solo travellers and women?",
                  a: "Prague is one of the safest capitals in Europe for solo travellers. The main practical concerns are pickpockets around Old Town Square and Charles Bridge (standard big-city caution) and occasional aggressive touts near tourist strips. The city is very walkable late at night in most areas. Solo women travellers consistently rate Prague as very safe with standard urban precautions.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Prague trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-prague", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/prague-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-prague", label: "How to get there", icon: "✈️" },
                { href: "/blog/prague-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="prague-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vienna &mdash; 4 Day Guide", href: "/blog/vienna-4-days" },
                { label: "Budapest &mdash; 4 Day Guide", href: "/blog/budapest-4-days" },
                { label: "Berlin &mdash; 4 Day Guide", href: "/blog/berlin-4-days" },
                { label: "Amsterdam &mdash; 4 Day Guide", href: "/blog/amsterdam-4-days" },
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
