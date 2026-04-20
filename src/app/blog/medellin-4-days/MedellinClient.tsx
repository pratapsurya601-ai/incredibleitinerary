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
const MEDELLIN_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Medell\u00edn Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "sights",      emoji: "🏛️", label: "Top Sights &amp; Experiences" },
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
          href: `mailto:?subject=Medell%C3%ADn 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Medell%C3%ADn in 4 Days — cable cars, Comuna 13 and the world%27s most remarkable urban transformation&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/medellin-4-days"
        imageUrl="https://images.unsplash.com/photo-1599057081417-7ccb5adb1b5b?w=1200&q=80"
        description="Medell&iacute;n in 4 Days: Cable cars over the comunas, Guatap&eacute; rock climb, Comuna 13 graffiti tours, Botero Plaza and the complete travel guide with budget breakdown."
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
export default function MedellinClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MEDELLIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Medell&iacute;n" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="medellin colombia cable car metro hillside comunas urban transformation"
            fallback="https://images.unsplash.com/photo-1599057081417-7ccb5adb1b5b?w=1600&q=80"
            alt="Medell&iacute;n Colombia cable car over hillside comunas with city skyline below"
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
              <span className="text-white/70">Medell&iacute;n 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South America
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Medell&iacute;n in 4 Days:
                <em className="italic text-amber-300"> Cable Cars, Graffiti &amp; the City of Eternal Spring</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                From the hillside comunas stitched back together by cable cars to 740 steps up El Pe&ntilde;ol rock &mdash; the most remarkable urban transformation story of the 21st century. The complete guide.
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
              <span>🇨🇴 Colombia</span>
              <span>&middot;</span>
              <span>🗓 4 Days</span>
              <span>&middot;</span>
              <span>💰 From $50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Once branded the most dangerous city on Earth, Medell&iacute;n pulled off something no urban planner had dared imagine: it won the Wall Street Journal&apos;s award for Most Innovative City. The cable cars that thread up to the hillside comunas didn&apos;t just solve a transport problem &mdash; they stitched a city back together. The City of Eternal Spring sits at 1,495 metres, keeping temperatures a perfect 22&deg;C year-round.
            </p>
          </blockquote>

          {/* ── WHAT MEDELLIN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Medell&iacute;n Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Colombia&apos;s second city sits in the Aburr&aacute; Valley at 1,495 metres &mdash; a narrow corridor of mountains that keeps the temperature at a near-perfect 22&deg;C year-round, earning it the nickname &quot;City of Eternal Spring.&quot; In the 1990s this was the murder capital of the world, home to the Medell&iacute;n Cartel. Today it&apos;s a case study in urban transformation: cable cars connect hillside comunas to the metro system, outdoor escalators thread through former conflict zones, and Fernando Botero&apos;s 23 bronze sculptures fill the downtown plaza named after him.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Colombia produces around 10% of the world&apos;s cut flowers, and Medell&iacute;n is their capital &mdash; every August, silleteros carry cascading flower arrangements on their backs through streets packed with a million spectators for the Feria de las Flores. The metro is the only one in Colombia (opened 1995), and Paisas &mdash; the people of Antioquia &mdash; keep it spotlessly clean. They&apos;re fiercely proud of their city&apos;s reinvention.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days gives you the essential Medell&iacute;n experience: the cable cars, Comuna 13&apos;s graffiti-covered escalators, Botero Plaza, a day trip to Guatap&eacute; and El Pe&ntilde;ol rock, and enough time in El Poblado or Laureles to feel the rhythm of a city that refused to be defined by its past.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MDE" />
              <StatCard icon="🌡️" label="Best Months" value="Dec&ndash;Mar" />
              <StatCard icon="🗓" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="$50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Medell&iacute;n</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec\u2013Mar",
                  i: "☀️",
                  t: "Dry Season \u2014 Best Overall",
                  d: "Medell\u00edn\u2019s first dry season. Clear skies, 22\u201328\u00b0C, ideal for cable-car views and the Guatap\u00e9 day trip. Peak tourist season \u2014 book El Poblado hotels 3\u20134 weeks ahead. Christmas and New Year bring fireworks and local festivals.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "🌺",
                  t: "Second Dry Season + Feria de las Flores",
                  d: "The second dry window. August\u2019s Feria de las Flores (Flower Festival) is one of South America\u2019s greatest festivals \u2014 the silletero parade, concerts, classic car shows. Prices spike 20\u201330% during Feria week. Book 3\u20134 months ahead for August.",
                  b: "Festival season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr\u2013May",
                  i: "🌧️",
                  t: "First Rainy Season",
                  d: "Daily afternoon showers (usually 2\u20134pm) but mornings are often clear. Fewer tourists, lower prices. The rain greens the valley beautifully. Carry a light rain jacket and plan outdoor activities for mornings. Still very pleasant at 20\u201325\u00b0C.",
                  b: "Budget-friendly",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Sep\u2013Nov",
                  i: "🌧️",
                  t: "Second Rainy Season",
                  d: "The heavier rain season. October is Medell\u00edn\u2019s wettest month. Still warm (20\u201326\u00b0C) and the city functions normally \u2014 rain rarely lasts all day. Good for budget travellers who don\u2019t mind afternoon showers. Museum and food days work well.",
                  b: "Lowest prices",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Medell&iacute;n</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Medell&iacute;n&apos;s international airport is <strong className="font-medium">Jos&eacute; Mar&iacute;a C&oacute;rdova (MDE)</strong>, located in Rionegro &mdash; about 45 minutes from El Poblado by car. There&apos;s also a smaller city airport, Enrique Olaya Herrera (EOH), closer to the centre, for domestic flights.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "International flights to MDE",
                  d: "Direct flights from Miami (3.5 hrs), New York JFK (5.5 hrs), Houston, Fort Lauderdale, Madrid, and Panama City. Airlines include Avianca, LATAM, JetBlue, Spirit, and Copa. From MDE, a shared shuttle to El Poblado costs ~COP 18,000 ($4.50) or a private transfer ~$25.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Bogot\u00e1",
                  d: "8\u201310 hours from Bogot\u00e1 Terminal del Norte. Companies like Bolivariano and Flota Magdalena charge COP 60,000\u201390,000 ($15\u2013$22). Overnight buses are popular. Comfortable reclining seats on premium services. Scenic mountain route through the Andes.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Domestic flights to MDE or EOH",
                  d: "Avianca and LATAM fly Bogot\u00e1\u2013Medell\u00edn in 1 hour (from COP 100,000 / $25 one-way booked early). Flights also from Cartagena (1.5 hrs), Cali (1 hr), and Santa Marta. EOH is closer to the city centre but has fewer flights.",
                  b: "Fastest option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Bogot\u00e1 or the Coffee Region",
                  d: "Bogot\u00e1 to Medell\u00edn is ~420km, 8\u20139 hours via Autopista Medell\u00edn\u2013Bogot\u00e1. The drive from the Coffee Region (Salento/Pereira) takes 5\u20136 hours through stunning mountain scenery. Roads are well-maintained on the main highways.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Medell&iacute;n Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances the must-see sights with enough free time to enjoy Medell&iacute;n&apos;s cafe culture and neighbourhood atmosphere. Adjust based on your budget tier.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="El Poblado Arrival &middot; Botero Plaza &middot; Downtown Walking Tour"
                cost="$30&ndash;$80 (depending on accommodation tier)"
                items={[
                  "Fly into MDE; take the airport shuttle to El Poblado (~COP 18,000 / $4.50) or a private transfer (~$25). The Envigado Metro bus is the cheapest option at ~COP 12,000 ($3).",
                  "Check in at your accommodation: Los Patios Hostel (dorms from $12), a boutique hotel in El Poblado (from $60), or The Charlee Hotel for luxury (from $150/night with rooftop pool).",
                  "Afternoon: Metro to downtown Centro. Walk Plaza Botero \u2014 23 oversized bronze sculptures by Fernando Botero fill the square. Free, open 24/7, and genuinely impressive at any hour. The adjacent Museo de Antioquia houses 119 Botero paintings and sculptures (COP 18,000 / $4.50 entry).",
                  "Walk the streets of El Centro \u2014 the Plazuela de las Esculturas, Parque Berr\u00edo, and the Palacio de la Cultura Rafael Uribe Uribe. Free walking tours with Real City Tours depart from Parque Berr\u00edo metro station (tip-based, 3.5 hrs).",
                  "Evening: return to El Poblado for dinner. Try a bandeja paisa (the Antioque\u00f1o national dish \u2014 beans, rice, chicharr\u00f3n, plantain, arepa, avocado, egg and ground beef) at Hacienda Jun\u00edn (~COP 35,000 / $8.50) or street food version for ~COP 15,000 ($3.50).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="MetroCable &middot; Parque Arv&iacute; &middot; Comuna 13 Graffiti Tour"
                cost="$20&ndash;$50"
                items={[
                  "Morning: Metro L\u00ednea A to Acevedo station, then MetroCable L\u00ednea K to Santo Domingo. The cable car is included in your metro fare (COP 3,000 / $0.75) and delivers a 20-minute ride over the hillside comunas with views of the full Medell\u00edn valley. This is the single best free view in the city.",
                  "Continue on MetroCable L\u00ednea L to Parque Arv\u00ed nature reserve (extra COP 7,600 / $1.90 each way, total cable car ride COP 12,600 round trip). Explore Arv\u00ed\u2019s cloud forest trails and the weekend artisan market. Pack a lunch or buy empanadas and fresh juices at the market stalls (~COP 8,000 / $2).",
                  "Afternoon: head to Comuna 13 (San Javier metro station). The outdoor electric escalators \u2014 built in 2011 to connect this hillside community to the city \u2014 are free and open daily. The graffiti-covered walls tell the story of a neighbourhood that went from conflict zone to creative hub.",
                  "Guided Comuna 13 graffiti tour: 2\u20133 hours with a local guide who lived through the transformation. Free tours run on tips; professional guided tours cost COP 40,000\u201380,000 ($10\u2013$20). The context transforms the experience \u2014 you\u2019ll learn which murals document Operation Orion (2002) and which celebrate the youth who reclaimed the streets.",
                  "Evening: return to El Poblado. Cocktails at Pergamon rooftop bar or explore the Parque Lleras nightlife area. El Poblado comes alive after 9pm \u2014 bars, salsa clubs, and live music on nearly every block.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Guatap&eacute; Day Trip &middot; El Pe&ntilde;ol Rock &middot; Painted Village"
                cost="$25&ndash;$90"
                items={[
                  "Early departure: 6:30\u20137am bus from Terminal del Sur to Guatap\u00e9 \u2014 2 hours, COP 16,000 ($4) each way. Buses run every 30\u201345 minutes. Alternatively, book a private car ($70 round trip) or a GetYourGuide day tour.",
                  "El Pe\u00f1ol rock (La Piedra del Pe\u00f1ol): 740 steps carved into a 220-metre granite monolith. Entry COP 18,000 ($4.50). The panoramic view from the summit \u2014 an endless patchwork of green islands and blue reservoir water \u2014 is Colombia\u2019s single best viewpoint. Arrive before 9am to beat the tour-bus crowds.",
                  "Wander Guatap\u00e9 village: every building is decorated with z\u00f3calos \u2014 brightly painted bas-relief panels on the lower walls depicting local life, animals, and patterns. Each building is unique. The village plaza has great empanadas and fresh fruit juices.",
                  "Optional: boat tour of Guatap\u00e9 reservoir (1\u20131.5 hrs, ~COP 40,000\u201380,000 / $10\u2013$20 per person). You\u2019ll pass the ruins of Pablo Escobar\u2019s former lakeside estate and swim stops in the reservoir. Budget travellers can skip this.",
                  "Afternoon bus back to Medell\u00edn. Evening: dinner at Carmen \u2014 El Poblado\u2019s best contemporary Colombian restaurant (~COP 120,000\u2013180,000 / $30\u2013$45 per person) \u2014 or for budget travellers, Mondongo\u2019s for hearty Antioque\u00f1o tripe soup (~COP 30,000 / $7.50).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Coffee Culture &middot; Laureles &middot; Museo de Antioquia &middot; Departure"
                cost="$20&ndash;$60"
                items={[
                  "Morning: visit a specialty coffee shop in El Poblado or Laureles. Medell\u00edn is the gateway to Colombia\u2019s coffee region. Pergamino Caf\u00e9 or Urbania Coffee serve world-class single-origin Colombian pour-over for COP 8,000\u201312,000 ($2\u2013$3). Ask for \u2018tinto\u2019 or \u2018caf\u00e9 de filtro\u2019 \u2014 not just \u2018coffee\u2019 (which gets you instant).",
                  "Explore the Laureles neighbourhood: cross the river to a more local, less touristy Medell\u00edn. La 70 (Carrera 70) is the main strip \u2014 bakeries, juice bars, local restaurants, and a genuine Paisa neighbourhood atmosphere. Prices are 30\u201340% cheaper than El Poblado.",
                  "If you didn\u2019t visit on Day 1: Museo de Antioquia (COP 18,000 / $4.50 entry) houses Botero\u2019s personal donation of 119 paintings and sculptures plus an excellent collection of contemporary Colombian art. Allow 1.5\u20132 hours.",
                  "Afternoon: last-minute shopping for Colombian coffee beans, artisanal chocolate, and ceramics at Centro Comercial Oviedo or the Minorista market downtown. Colombian coffee bought at source is significantly cheaper than abroad.",
                  "Metro to Envigado or private transfer to MDE airport ($25). Allow 1.5 hours for the drive \u2014 the road from El Poblado to the airport winds through mountains and can be slow in traffic.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Medell&iacute;n" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP SIGHTS & EXPERIENCES ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Top Sights &amp; Experiences</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Medell&iacute;n experiences in order of priority. Prices as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Comuna 13 Graffiti Tour",
                  e: "Free (escalators) / COP 40,000\u201380,000 guided",
                  d: "The outdoor escalators and graffiti-covered walls of Comuna 13 are Medell\u00edn\u2019s most powerful sight. A guided tour with a local who lived through the transformation turns colourful street art into a story of resilience, conflict, and community reclamation. Free self-guided visits work too \u2014 the escalators are open daily.",
                  t: "Must see \u00b7 2\u20133 hrs",
                },
                {
                  n: "MetroCable L\u00ednea K (Santo Domingo)",
                  e: "COP 3,000 ($0.75) \u2014 included in metro fare",
                  d: "The cable car from Acevedo to Santo Domingo is the best free view in South America. A 20-minute ride over the hillside comunas with the full Medell\u00edn valley spread below. Ride it at sunset for the most dramatic light. No entry fee beyond the standard metro ticket.",
                  t: "Must see \u00b7 40 min round trip",
                },
                {
                  n: "Botero Plaza &amp; Museo de Antioquia",
                  e: "Plaza free / Museum COP 18,000 ($4.50)",
                  d: "23 oversized bronze sculptures by Fernando Botero fill Plaza Botero \u2014 rotund figures of people, animals, and soldiers. Free, open air, and genuinely impressive. The adjacent Museo de Antioquia holds Botero\u2019s personal donation of 119 paintings and sculptures plus excellent contemporary Colombian art.",
                  t: "Must see \u00b7 1.5\u20132.5 hrs",
                },
                {
                  n: "El Pe\u00f1ol Rock (Guatap\u00e9)",
                  e: "COP 18,000 ($4.50) entry + bus COP 32,000 ($8) return",
                  d: "740 steps up a 220-metre granite monolith. The view from the summit \u2014 blue reservoir water and green islands stretching to the horizon \u2014 is Colombia\u2019s single best panoramic view. Go on a weekday and arrive before 9am. The adjacent Guatap\u00e9 village with its painted z\u00f3calos is worth 1\u20132 hours.",
                  t: "Must see \u00b7 Full day trip",
                },
                {
                  n: "Parque Arv\u00ed Nature Reserve",
                  e: "COP 12,600 ($3.15) cable car round trip",
                  d: "Cloud forest reserve accessible by MetroCable L\u00ednea L from Santo Domingo. Hiking trails, butterfly gardens, and a weekend artisan market. The cable-car ride itself \u2014 gliding over forested mountains \u2014 is half the experience. Pack a lunch or buy from market stalls.",
                  t: "Half day \u00b7 3\u20134 hrs",
                },
                {
                  n: "Real City Tours Walking Tour",
                  e: "Free (tip-based)",
                  d: "The best introduction to Medell\u00edn\u2019s history and transformation. 3.5-hour walking tour departing from Parque Berr\u00edo metro station, covering downtown Centro, Plaza Botero, the Palacio de la Cultura, and the story of how Medell\u00edn went from cartel city to innovation capital. Tip COP 30,000\u201350,000 ($7\u2013$12).",
                  t: "Recommended \u00b7 3.5 hrs",
                },
                {
                  n: "El Poblado Nightlife &amp; Parque Lleras",
                  e: "Free entry to most bars",
                  d: "Parque Lleras is the epicentre of Medell\u00edn nightlife \u2014 bars, salsa clubs, rooftop cocktail bars, and live music venues packed into a few blocks. The scene runs from 9pm to 4am on weekends. Craft cocktails COP 25,000\u201340,000 ($6\u2013$10); local beer COP 5,000\u20138,000 ($1.25\u2013$2).",
                  t: "Evening \u00b7 2+ hrs",
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
            title="Medell&iacute;n &mdash; Cable Cars, Colour &amp; Mountains"
            subtitle="The City of Eternal Spring&apos;s most remarkable scenes."
            spots={[
              {
                name: "MetroCable Over the Comunas",
                query: "medellin metrocable cable car hillside comunas valley colombia",
                desc: "The MetroCable L\u00ednea K gliding over Medell\u00edn\u2019s hillside comunas \u2014 the engineering solution that stitched a divided city back together.",
              },
              {
                name: "Comuna 13 Graffiti",
                query: "comuna 13 medellin graffiti street art escalators colombia",
                desc: "The electric escalators and vibrant murals of Comuna 13 \u2014 from conflict zone to the most colourful neighbourhood in Colombia.",
              },
              {
                name: "Botero Plaza",
                query: "plaza botero medellin sculptures bronze downtown colombia",
                desc: "Fernando Botero\u2019s 23 oversized bronze sculptures filling the plaza in downtown Medell\u00edn.",
              },
              {
                name: "El Pe\u00f1ol Rock Guatap\u00e9",
                query: "el penol rock guatape colombia reservoir panoramic view steps",
                desc: "The 740-step climb up El Pe\u00f1ol rock and the infinite reservoir-and-island panorama from the summit.",
              },
              {
                name: "Guatap\u00e9 Painted Village",
                query: "guatape village painted buildings zocalos colombia colorful",
                desc: "Guatap\u00e9\u2019s z\u00f3calos \u2014 every building decorated with brightly painted bas-relief panels unique to this lakeside village.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Medell&iacute;n is excellent value for money. The metro costs COP 3,000 ($0.75) per ride, street food is COP 8,000&ndash;15,000 ($2&ndash;$3.75), and hostel dorms start at $10&ndash;12. Even mid-range travellers will find Medell&iacute;n significantly cheaper than most Latin American capitals.
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
                    ["🏨 Accommodation", "$10\u2013$18/night", "$55\u2013$85/night", "$150\u2013$250/night"],
                    ["🍽 Food", "$8\u2013$12/day", "$25\u2013$35/day", "$60\u2013$100/day"],
                    ["🚇 Transport", "$3\u2013$5/day", "$15\u2013$25/day", "$40\u2013$80/day"],
                    ["🎟️ Activities", "$10\u2013$18/day", "$25\u2013$45/day", "$80\u2013$200/day"],
                    ["TOTAL (per day)", "~$50", "~$110", "~$260"],
                    ["TOTAL (4 days)", "~$200", "~$440", "~$1,040"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in El Poblado hostels (Los Patios, Selina, The Black Sheep from $10&ndash;$18/night), eat street food and set lunches (almuerzo del d&iacute;a ~$3), ride the metro everywhere (COP 3,000 per trip). Self-guided Comuna 13 and free Botero Plaza keep activity costs near zero.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (~$110/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in El Poblado ($55&ndash;$85/night), Uber/InDriver for transport, guided tours of Comuna 13 and Guatap&eacute;, dinner at restaurants like Carmen or Hacienda Jun&iacute;n. The sweet spot for comfort and authentic experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~$260/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Charlee Hotel (from $150/night, rooftop pool), private transfers, helicopter tour over the valley (~$200), VIP private tours, tasting menus at El Cielo. Medell&iacute;n luxury is genuinely world-class at a fraction of European or US prices.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Medell&iacute;n</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Three main neighbourhoods: <strong className="font-medium">El Poblado</strong> (tourist standard, safest, most restaurants, 30&ndash;40% more expensive), <strong className="font-medium">Laureles</strong> (local favourite, great food, more authentic, slightly cheaper), and <strong className="font-medium">Envigado</strong> (best value, technically a separate municipality). Avoid staying in Centro as a first-time visitor.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Charlee Hotel",
                  type: "Luxury &middot; El Poblado",
                  price: "From $150/night",
                  badge: "Best luxury",
                  desc: "Medell\u00edn\u2019s design-forward luxury hotel. Rooftop infinity pool with valley views, contemporary art collection throughout, and an excellent cocktail bar. The rooftop at sunset \u2014 overlooking the entire Aburr\u00e1 Valley \u2014 is one of Medell\u00edn\u2019s most memorable experiences. Walking distance to Parque Lleras.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel &amp; Spa los Campesinos",
                  type: "Mid-range boutique &middot; El Poblado",
                  price: "From $65/night",
                  badge: "Best mid-range",
                  desc: "Charming boutique hotel with a distinctly Colombian character. Courtyard garden, excellent breakfast included, and a small spa. Quieter than the Parque Lleras strip but still walking distance to everything. Great for couples and families.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Los Patios Hostel",
                  type: "Budget &middot; El Poblado",
                  price: "From $12/night (dorm) / $40 (private)",
                  badge: "Best budget",
                  desc: "The benchmark hostel in Medell\u00edn. Multiple courtyards, rooftop terrace, excellent social atmosphere, and a location on Calle 10 that\u2019s close to everything without being on the noisiest strip. Clean dorms, strong WiFi, good breakfast. The go-to for solo travellers and backpackers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Patio del Mundo (Laureles)",
                  type: "Mid-range &middot; Laureles",
                  price: "From $45/night",
                  badge: "Best local vibe",
                  desc: "If you want to experience Medell\u00edn like a local, stay in Laureles. Patio del Mundo offers comfortable rooms in a quieter, more authentic neighbourhood. La 70 strip is two blocks away with local restaurants, bakeries, and bars at 30\u201340% less than El Poblado prices.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Medell&iacute;n</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Medell&iacute;n&apos;s food scene ranges from COP 12,000 ($3) set lunches in Centro to world-class tasting menus in El Poblado. Antioque&ntilde;o cuisine is hearty and protein-heavy: bandeja paisa, mondongo (tripe soup), arepas, and empanadas are the staples.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Carmen",
                  t: "Contemporary Colombian \u00b7 El Poblado",
                  d: "El Poblado\u2019s finest restaurant. Chef Carmen Angel\u2019s contemporary take on Colombian cuisine uses local ingredients in unexpected ways. Tasting menu ~COP 180,000 ($45), \u00e0 la carte mains COP 50,000\u201380,000 ($12\u2013$20). Reservations essential on weekends. The cocktail bar is excellent independently.",
                  b: "Best fine dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Hacienda Jun\u00edn",
                  t: "Traditional Antioque\u00f1o \u00b7 El Poblado",
                  d: "The best bandeja paisa in Medell\u00edn. A sprawling hacienda-style restaurant with traditional Antioque\u00f1o dishes done properly: bandeja paisa, frijoles, chicharr\u00f3n, chorizo, and sancocho. COP 30,000\u201350,000 ($7.50\u2013$12.50). Big portions, genuine flavours, and a local crowd that outnumbers the tourists.",
                  b: "Must visit",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Mondongo\u2019s",
                  t: "Traditional Colombian \u00b7 Multiple locations",
                  d: "Famous for its mondongo (tripe soup) \u2014 a rich, hearty Antioque\u00f1o staple that divides opinions but rewards the adventurous. Also serves excellent bandeja paisa and other regional classics. COP 25,000\u201340,000 ($6\u2013$10). Multiple locations across the city; the El Poblado branch is most convenient.",
                  b: "Local favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pergamino Caf\u00e9",
                  t: "Specialty coffee \u00b7 El Poblado",
                  d: "Medell\u00edn\u2019s best specialty coffee shop. Single-origin Colombian beans roasted on site, expert baristas, and a bright, airy space in the heart of El Poblado. Pour-over COP 8,000\u201312,000 ($2\u2013$3). If you care about coffee, this is your first stop. They also sell beans to take home.",
                  b: "Best coffee",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Almuerzo del D\u00eda (Set Lunch)",
                  t: "Budget \u00b7 Everywhere in Centro and Laureles",
                  d: "The cheapest way to eat well in Medell\u00edn. Nearly every local restaurant serves a set lunch (soup + main + juice + dessert) for COP 10,000\u201315,000 ($2.50\u2013$3.75). Look for \u2018almuerzo\u2019 signs on chalkboards outside. Quality is surprisingly high \u2014 this is how Paisas actually eat.",
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
            destination="Medell&iacute;n Colombia"
            hotels={[
              {
                name: "The Charlee Hotel",
                type: "Luxury design hotel \u00b7 El Poblado rooftop pool",
                price: "From $150/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/co/the-charlee.html?aid=2820480",
              },
              {
                name: "Hotel &amp; Spa los Campesinos",
                type: "Boutique mid-range \u00b7 El Poblado garden courtyard",
                price: "From $65/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/co/spa-los-campesinos.html?aid=2820480",
              },
              {
                name: "Los Patios Hostel",
                type: "Social hostel \u00b7 El Poblado rooftop + courtyards",
                price: "From $12/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/co/los-patios-hostel-medellin.html?aid=2820480",
              },
              {
                name: "Casa Dann Carlton Medell\u00edn",
                type: "Business hotel \u00b7 El Poblado central location",
                price: "From $90/night",
                rating: "4",
                badge: "Great location",
                url: "https://www.booking.com/hotel/co/dann-carlton-medellin.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Comuna 13 Graffiti Tour with Local Guide",
                duration: "3 hrs",
                price: "From $15/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Medellin+Comuna+13&partner_id=PSZA5UI",
              },
              {
                name: "Guatap\u00e9 &amp; El Pe\u00f1ol Day Trip",
                duration: "10 hrs",
                price: "From $25/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Medellin+Guatape&partner_id=PSZA5UI",
              },
              {
                name: "Medell\u00edn City Tour + MetroCable",
                duration: "5 hrs",
                price: "From $20/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=Medellin+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Coffee Farm Experience",
                duration: "6 hrs",
                price: "From $40/person",
                url: "https://www.getyourguide.com/s/?q=Medellin+coffee+farm&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Medell&iacute;n</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚠",
                  title: "The MetroCable is the best free view in South America",
                  desc: "The MetroCable L\u00ednea K from Acevedo to Santo Domingo costs less than $1 (included in metro fare) and delivers a 20-minute ride over the hillside comunas with views of the full Medell\u00edn valley. No entry fee, no queue, no tourist markup. Ride it at sunset for the most dramatic experience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\u2615",
                  title: "Order tinto, not \u2018coffee\u2019",
                  desc: "In Colombian Spanish, asking for \u2018coffee\u2019 in a local place gets you instant coffee. Ask for \u2018tinto\u2019 (black, from a fresh pot) or \u2018caf\u00e9 de filtro\u2019 (filter/pour-over). Specialty third-wave coffee shops in El Poblado and Laureles serve world-class Colombian single-origin for $2\u2013$3.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "📱",
                  title: "Buy a Claro or Movistar SIM immediately",
                  desc: "Uber and InDriver are far safer than street taxis in Medell\u00edn, but they need mobile data. Buy a Claro or Movistar SIM at MDE airport (~COP 20,000 / $5 for 5GB). It\u2019s the most important $5 you\u2019ll spend. Also essential for Google Maps and restaurant reservations.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌺",
                  title: "Time your trip for Feria de las Flores (first week of August)",
                  desc: "The Feria is one of South America\u2019s greatest festivals \u2014 a week of parades, concerts, classic car shows, and the silletero parade where flower farmers carry arrangements weighing up to 80kg on their backs. Book accommodation 3\u20134 months ahead. Prices rise 20\u201330% but the experience is unforgettable.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🎨",
                  title: "Book a guided tour for Comuna 13",
                  desc: "Walking through Comuna 13 without context is just photos. A guided tour ($10\u2013$25) tells you which murals document Operation Orion (2002), which celebrate the youth who reclaimed the neighbourhood, and introduces you to local artists who lived through the transformation. Book at GetYourGuide.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏘️",
                  title: "Spend a day in Laureles or Envigado",
                  desc: "El Poblado is safe and convenient but feels like a tourist bubble with prices 30\u201340% higher than the rest of the city. Cross the river to Laureles for La 70\u2019s local restaurants and bars, or head south to Envigado for the most authentic Paisa neighbourhood experience. This is how you see the real Medell\u00edn.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Medell&iacute;n" />

          {/* Combine With */}
          <CombineWith currentSlug="medellin-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Medell\u00edn safe for tourists in 2026?",
                  a: "Yes, for informed tourists. El Poblado, Laureles, and Envigado are as safe as any major Latin American city. The historic violence was concentrated in peripheral comunas and has fallen dramatically. Use Uber or InDriver rather than street taxis, don\u2019t walk with expensive gear on display at night, and avoid the downtown La Candelaria area after dark. Hundreds of thousands of tourists visit safely each year.",
                },
                {
                  q: "How many days do I need in Medell\u00edn?",
                  a: "Four days covers the essential Medell\u00edn experience: El Poblado, Botero Plaza, one full cable-car day with Comuna 13, the Guatap\u00e9 day trip, and time in a local neighbourhood. Add two more days if you want to reach the coffee region (Salento or Santa Elena) or attend Feria de las Flores. Medell\u00edn also works well as a longer base for exploring Colombia.",
                },
                {
                  q: "What\u2019s the best neighbourhood to stay in?",
                  a: "El Poblado is the tourist standard \u2014 safe, easy, restaurants and nightlife everywhere, but 30\u201340% more expensive. Laureles is the local favourite \u2014 great restaurants, a more authentic Paisa atmosphere, and slightly cheaper. Envigado (technically a separate municipality) offers the best value. Avoid staying in Centro as a first-time visitor.",
                },
                {
                  q: "Can I do the Guatap\u00e9 day trip without a tour?",
                  a: "Absolutely. Take the 6:30am or 7am bus from Terminal del Sur \u2014 about COP 16,000 ($4) each way, 2 hours. Buses run every 30\u201345 minutes. Climb El Pe\u00f1ol independently (COP 18,000 / $4.50 entry), wander Guatap\u00e9 village, and catch an afternoon bus back. The whole day costs under $20 independently versus $40\u2013$60 with a tour.",
                },
                {
                  q: "Do I need to speak Spanish in Medell\u00edn?",
                  a: "Basic Spanish helps significantly. Medell\u00edn is less English-friendly than Bogot\u00e1 or Cartagena. In El Poblado and tourist-facing businesses, staff often speak some English. Outside the tourist zones, Spanish is essential. Download Google Translate offline before you arrive. Even a few phrases \u2014 por favor, gracias, cuanto cuesta, la cuenta \u2014 will transform your interactions.",
                },
                {
                  q: "How much does the metro cost?",
                  a: "A single metro or MetroCable ride costs COP 3,000 (~$0.75). The MetroCable L\u00ednea K to Santo Domingo is included in the standard metro fare. The MetroCable L\u00ednea L to Parque Arv\u00ed costs an additional COP 7,600 ($1.90) each way. Buy a C\u00edvica rechargeable card (COP 5,000 deposit) to avoid queuing for tickets each time. The metro runs from 5am to 11pm.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Medell&iacute;n trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-medellin", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/medellin-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-medellin", label: "How to get there", icon: "✈️" },
                { href: "/blog/medellin-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="medellin-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Latin America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cartagena in 3 Days &mdash; Walled City &amp; Islands", href: "/blog/cartagena-3-days" },
                { label: "Panama City in 3 Days &mdash; Canal &amp; Casco Viejo", href: "/blog/panama-city-3-days" },
                { label: "Bogot&aacute; in 3 Days &mdash; La Candelaria &amp; Monserrate", href: "/blog/bogota-3-days" },
                { label: "Lima in 4 Days &mdash; Ceviche &amp; History", href: "/blog/lima-4-days" },
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
                  <span className="text-xs text-muted">Read &rarr;</span>
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
