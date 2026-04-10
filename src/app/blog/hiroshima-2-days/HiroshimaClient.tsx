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
const HIROSHIMA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Hiroshima Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚄",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
  { id: "landmarks",  emoji: "🕊️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Hiroshima 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hiroshima in 2 Days — Peace Memorial, Miyajima &amp; the Floating Torii&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hiroshima-2-days"
        imageUrl="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
        description="Hiroshima in 2 Days: Peace Memorial Park, A-Bomb Dome, Miyajima Island floating torii gate, Hiroshima oysters and okonomiyaki — complete travel guide with real yen costs."
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
export default function HiroshimaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HIROSHIMA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hiroshima" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hiroshima peace memorial a-bomb dome motoyasu river japan"
            fallback="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
            alt="Hiroshima Peace Memorial A-Bomb Dome reflected in the Motoyasu River Japan"
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
              <span className="text-white/70">Hiroshima 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hiroshima in 2 Days:
                <em className="italic text-teal-300"> Peace Memorial, Miyajima &amp; the Floating Torii</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s most moving peace memorial, a UNESCO-listed atomic bomb dome, a floating torii gate on the Seto Inland Sea, Hiroshima-style okonomiyaki, and the best oysters in Japan. The complete guide.
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
              <span>🇯🇵 Hiroshima, Japan</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ¥6,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hiroshima is two cities in one: the world&apos;s most moving memorial to the consequences of nuclear war, and a vibrant, forward-looking Japanese city famous for its oysters, a unique layered style of okonomiyaki, and a short ferry ride to Miyajima Island — one of Japan&apos;s three officially designated views of great beauty.
            </p>
          </blockquote>

          {/* ── WHAT HIROSHIMA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hiroshima Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              On the morning of 6 August 1945, an atomic bomb detonated 600 metres above the centre of Hiroshima. The explosion killed between 70,000 and 80,000 people instantly — a figure that would rise to an estimated 90,000–140,000 by the end of 1945 as radiation sickness, burns, and injuries took their toll. The city was almost entirely destroyed.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What stands today is something quietly extraordinary. Hiroshima has rebuilt itself into a thriving city of 1.2 million people — and it has done so while maintaining the most honest, unflinching, and deeply human memorial to a nuclear attack that exists anywhere in the world. The Peace Memorial Museum is not a monument to victimhood; it is a careful, rigorous documentation of what happened here, and an argument — made entirely through evidence — for why it must never happen again.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Two days is the right amount of time. Day 1 is Hiroshima — the Peace Memorial Park, the A-Bomb Dome, the museum, the city. Day 2 is Miyajima Island — 30 minutes by tram and ferry, utterly different in character, and one of Japan&apos;s most beautiful places. The combination makes for one of the most complete two-day experiences in all of Japan.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚄" label="From Osaka" value="45 min" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Sep–Nov" />
              <StatCard icon="🕊️" label="Duration" value="2 Days" />
              <StatCard icon="💰" label="Budget From" value="¥6,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hiroshima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Cherry Blossom Season",
                  d: "The best time to visit. Peace Memorial Park is lined with cherry trees that bloom in late March and early April — the blossoms against the A-Bomb Dome backdrop make for one of Japan&apos;s most affecting photographs. Mild temperatures (12–20°C). Book accommodation 2–3 months ahead for late March and early April.",
                  b: "Recommended",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍁",
                  t: "Autumn — Maple Season on Miyajima",
                  d: "Momijidani Park on Miyajima erupts in red and orange maple foliage from late October through mid-November — the most beautiful time to visit the island. Comfortable temperatures (15–22°C), clear skies, and excellent light for photography. The park&apos;s name literally means &apos;maple valley.&apos;",
                  b: "Recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☔",
                  t: "Summer — Hot and Humid",
                  d: "30–35°C with high humidity. June brings the rainy season (tsuyu). The August 6th Peace Memorial Ceremony draws large crowds. Hiroshima is perfectly functional in summer but physically demanding — plan for early starts and indoor time during the hottest midday hours.",
                  b: "Manageable",
                  c: "bg-yellow-50 border-yellow-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cool and Quiet",
                  d: "8–12°C. Low crowds at all sites and no queues at the Peace Memorial Museum. Hiroshima oysters (kaki) are at their best in winter — cold water produces the plumpest, most flavourful oysters of the year, peaking in January and February. A surprisingly good time to visit.",
                  b: "Quietest season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚄 Getting to Hiroshima</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hiroshima is on the San&apos;yo Shinkansen line and is extremely well connected. From Osaka or Kyoto it is a fast, straightforward Shinkansen journey. From Tokyo, the Nozomi Shinkansen takes approximately 4 hours. The city is also served by Hiroshima Airport (HIJ) with domestic and some international connections.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "Shinkansen from Osaka (recommended)",
                  d: "Shin-Osaka → Hiroshima: 45 minutes on the Nozomi Shinkansen, ¥5,720. The Hikari (covered by JR Pass) takes around 1 hour 10 minutes. This is the fastest and most convenient way to reach Hiroshima from Osaka. From Hiroshima Station to Peace Memorial Park is a 15-minute tram or taxi ride.",
                  b: "Fastest from Osaka",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "Shinkansen from Kyoto",
                  d: "Kyoto → Hiroshima: approximately 1 hour on the Nozomi, ¥7,140. The Hikari (JR Pass eligible) takes around 1 hour 30 minutes. Hiroshima is a natural day trip or overnight stop on the Kyoto–Osaka–Hiroshima corridor.",
                  b: "1 hr from Kyoto",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚄",
                  t: "Shinkansen from Tokyo",
                  d: "Tokyo → Hiroshima: approximately 4 hours on the Nozomi (¥18,000 one way). The 7-day JR Pass (¥50,000) more than pays for itself on this journey if combined with other Shinkansen travel. Use the Hikari to stay within JR Pass coverage.",
                  b: "4 hrs from Tokyo",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Hiroshima Airport (HIJ)",
                  d: "Hiroshima Airport is 45km east of the city centre. Airport buses run to Hiroshima Station (¥1,340, 55 minutes) and to the city centre. Domestic flights from Tokyo Haneda take around 1 hour 20 minutes. International connections are limited — most visitors fly into Osaka Kansai (KIX) and Shinkansen to Hiroshima.",
                  b: "Direct flight option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 2-Day Hiroshima Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 is entirely in Hiroshima city — the Peace Memorial Park, museum, and city highlights. Day 2 is Miyajima Island. Check tide tables the evening before Day 2 to plan your morning around the torii gate.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Peace Memorial Park · A-Bomb Dome · Museum · Hiroshima City"
                cost="¥4,000–6,000 total"
                items={[
                  "9:00am — Arrive at Peace Memorial Park before the tour groups. The park opens 24 hours a day; the museum opens at 8:30am (March–November) or 9:00am (December–February). Coming early — before the tour groups arrive around 10:30am — makes an enormous difference to the quality of the experience.",
                  "9:15am — A-Bomb Dome (Genbaku Dome): the only structure left standing near the hypocenter, now a UNESCO World Heritage Site. Entry is free. The skeletal dome is most affecting viewed from across the Motoyasu River in morning light — the reflection in the water, the gutted dome against the sky. Allow 20–30 minutes here.",
                  "10:00am — Peace Memorial Museum (¥200): allow a full 2–3 hours. The exhibits are profoundly moving — personal belongings of those killed, photographs, survivor testimonies, and detailed historical documentation of the events of 6 August 1945. This is one of the most important museums in the world. Do not rush it.",
                  "12:30pm — Flame of Peace and Children&apos;s Peace Monument: the Flame of Peace burns in the park&apos;s central axis, lit in 1964 and intended to burn until all nuclear weapons on earth are abolished. The Children&apos;s Peace Monument nearby is dedicated to Sadako Sasaki — a 12-year-old girl who died of leukaemia from radiation exposure in 1955 while folding paper cranes.",
                  "1:30pm — Lunch at Okonomi-mura: a 3-floor building (actually 6 floors of restaurants spread across two buildings) in central Hiroshima with over 20 okonomiyaki restaurants. Hiroshima-style okonomiyaki is a layered pancake — a thin crepe base topped with cabbage, bean sprouts, pork, yakisoba noodles, and a fried egg — completely different from the mixed Osaka style. Expect ¥800–1,200.",
                  "3:00pm — Hondori shopping arcade: 600 metres of covered shopping through Hiroshima&apos;s main downtown street. Good for Japanese stationery, Hiroshima souvenirs (maple leaf momiji manju cakes, lacquerware), and Pocky at reasonable prices.",
                  "5:00pm — Evening walk along the Motoyasu River: the A-Bomb Dome is lit at dusk and reflected in the river. This is the best photograph of the day — the warm light on the dome against the darkening sky.",
                  "7:00pm — Dinner: Hiroshima oysters (kaki). Hiroshima produces over 60% of Japan&apos;s oyster output. Try a local izakaya near the Peace Park or Nagarekawa entertainment district. Grilled or fried oysters ¥1,500–2,000 for a full serving. A cold Sapporo beer: ¥500.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Miyajima Island · Floating Torii · Itsukushima Shrine · Mt Misen"
                cost="¥3,000–5,000 total (incl. ferry + shrine entry)"
                items={[
                  "8:00am — Check tide tables the evening before (Japan Meteorological Agency publishes free tide predictions at jma.go.jp). High tide gives you the &apos;floating&apos; torii gate rising from the sea — the classic postcard image. Low tide lets you walk out across the sand to touch the base of the gate. Both are worth experiencing; knowing which to expect avoids disappointment.",
                  "8:30am — Take the JR San&apos;yo line from Hiroshima Station to Miyajima-guchi station (included in JR Pass, approximately 25 minutes). From there, the JR Ferry runs every 10–15 minutes to Miyajima island (¥360 return — free with JR Pass). The crossing takes 10 minutes across the Seto Inland Sea.",
                  "9:00am — Itsukushima Shrine (¥300): the vermilion O-torii gate standing in the tidal flats is one of Japan&apos;s three views of great beauty (nihon sankei). At high tide the gate appears to float above the sea — one of the most iconic images in all of Japan. The shrine itself is built over the water on stilts; walk the covered corridors above the sea. The Noh stage facing the water is one of Japan&apos;s oldest performance spaces.",
                  "10:30am — Miyajima&apos;s free-roaming sika deer: like Nara, Miyajima is home to deer that wander freely among the shrine grounds and waterfront. They will attempt to eat your map, your bag straps, and anything paper-based. They will also pose patiently for photographs.",
                  "11:00am — Momijidani Park: named for its maple trees (momiji) that turn spectacular red and orange in autumn. The park runs along a stream between the ferry pier and the Mt Misen ropeway. In any season it is a pleasant 20-minute walk.",
                  "11:30am — Mt Misen: either hike the forest trail (1.5–2 hours up, various routes, free) or take the ropeway (¥1,000 each way, two stages). Summit at 535m gives panoramic views over the Seto Inland Sea. The Eternal Flame on the mountain has burned continuously since 806 AD when Kobo Daishi (the founder of Shingon Buddhism) lit it.",
                  "1:30pm — Lunch on Miyajima: fresh-grilled oysters are sold on the main shopping street (Omotesando) for ¥400–600 each — some of the freshest you will eat anywhere. Momiji manju cakes (maple-leaf-shaped pastries filled with red bean paste or custard, ¥100–150 each) are the island&apos;s signature souvenir food.",
                  "3:00pm — Daisho-in Temple (free): on the less-visited western end of the island, a fascinating complex of sub-temples, spinning prayer wheels, and stone Buddhas in monks&apos; robes wearing hand-knitted woollen hats. Most visitors to Miyajima miss this entirely.",
                  "5:00pm — Return ferry to Miyajima-guchi, then JR back to Hiroshima. The last ferry runs around 10pm but returning by 5–6pm avoids the peak crowds.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hiroshima" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🕊️ Hiroshima &amp; Miyajima Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 — all prices in yen.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Peace Memorial Museum",
                  e: "¥200",
                  d: "One of the most important museums in the world. Personal belongings of those killed, survivor testimonies, photographs, and an unflinching historical record of 6 August 1945. The west building (opened 2019) includes 3D reconstructions of pre-bombing Hiroshima. Allow 2–3 hours minimum. Do not rush this.",
                  t: "Must visit · 2–3 hrs",
                },
                {
                  n: "A-Bomb Dome (Genbaku Dome)",
                  e: "Free · UNESCO World Heritage Site",
                  d: "The skeletal ruins of the former Hiroshima Prefectural Industrial Promotion Hall — the only structure that remained standing near the hypocenter. Preserved in its damaged state as a permanent reminder. Best viewed from across the Motoyasu River in early morning light when the reflection in the water is clearest.",
                  t: "Must visit · Outside only · 20–30 mins",
                },
                {
                  n: "Peace Memorial Park",
                  e: "Free",
                  d: "A 122,100 m² park built on what was the busiest district of pre-war Hiroshima. The Flame of Peace, the Children&apos;s Peace Monument (dedicated to Sadako Sasaki), the Memorial Cenotaph, and the Paper Crane Memorial are arranged on a central axis pointing toward the A-Bomb Dome.",
                  t: "Must visit · 1 hr",
                },
                {
                  n: "Children&apos;s Peace Monument",
                  e: "Free",
                  d: "A bronze statue of a girl holding a golden paper crane, inspired by Sadako Sasaki. School groups from across Japan bring handmade paper cranes to leave here — thousands of chains of 1,000 cranes (senbazuru) hang in glass cases around the monument throughout the year.",
                  t: "Deeply moving · 15 mins",
                },
                {
                  n: "Itsukushima Shrine, Miyajima",
                  e: "¥300 · Ferry ¥360 return",
                  d: "The O-torii gate standing in the tidal flats is one of Japan&apos;s three views of great beauty. At high tide it appears to float; at low tide you walk across the sand to touch the barnacle-covered base. The shrine itself is built over the water on stilts. A National Treasure and UNESCO World Heritage Site.",
                  t: "Must visit · Allow half a day",
                },
                {
                  n: "Momijidani Park, Miyajima",
                  e: "Free",
                  d: "A park named for its maple trees (momiji) running along a stream between the ferry pier and the ropeway station. Best visited in October–November when the maples turn red and orange. Free-roaming deer wander through the park year-round.",
                  t: "Scenic walk · 20–30 mins",
                },
                {
                  n: "Mt Misen, Miyajima",
                  e: "Ropeway ¥1,000 each way · Hiking free",
                  d: "The highest point on Miyajima (535m). The summit gives panoramic views over the Seto Inland Sea, the shrine below, and on clear days across to the Hiroshima shoreline. The Eternal Flame has burned since 806 AD. Hike up (1.5–2 hours) or take the two-stage ropeway.",
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
            title="Hiroshima &amp; Miyajima — Peace, History &amp; Beauty"
            subtitle="From the A-Bomb Dome to the floating torii gate of Itsukushima Shrine."
            spots={[
              {
                name: "A-Bomb Dome (Genbaku Dome)",
                query: "hiroshima a-bomb dome genbaku motoyasu river reflection peace memorial",
                desc: "The skeletal ruins of the Prefectural Industrial Promotion Hall, preserved as a UNESCO World Heritage Site and the most powerful symbol of Hiroshima&apos;s history.",
              },
              {
                name: "Itsukushima Shrine Floating Torii",
                query: "miyajima itsukushima shrine floating torii gate high tide japan",
                desc: "The O-torii gate at high tide — one of Japan&apos;s three officially designated views of great beauty and the most photographed image in western Japan.",
              },
              {
                name: "Peace Memorial Park",
                query: "hiroshima peace memorial park cherry blossom japan",
                desc: "Peace Memorial Park in cherry blossom season — the Flame of Peace burning beneath the blossoms with the A-Bomb Dome in the background.",
              },
              {
                name: "Miyajima Island Deer",
                query: "miyajima island deer shrine japan sika",
                desc: "Free-roaming sika deer at Miyajima Shrine — a fixture of the island for centuries, considered sacred messengers of the gods.",
              },
              {
                name: "Hiroshima Okonomiyaki",
                query: "hiroshima okonomiyaki layered pancake noodles japan food",
                desc: "Hiroshima-style okonomiyaki — the layered version with yakisoba noodles, cabbage, egg, and pork, cooked on a teppan griddle at Okonomi-mura.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Hiroshima Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hiroshima is one of Japan&apos;s more accessible cities for budget travel — the Peace Memorial Museum costs only ¥200, the park is free, and even Itsukushima Shrine is only ¥300. The main variable is accommodation and how many meals you eat at mid-range restaurants.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70 w-[40%]">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "¥3,000–5,000", "¥8,000–15,000", "¥25,000–55,000"],
                    ["🍽️ Food (per day)", "¥1,500–3,000", "¥4,000–8,000", "¥15,000–35,000"],
                    ["🚄 Local transport", "¥500–1,000", "¥1,500–3,000", "¥3,000–10,000"],
                    ["🎟️ Activities & entry", "¥500–1,500", "¥2,000–5,000", "¥5,000–30,000"],
                    ["TOTAL per day", "¥6,000–10,000", "¥15,000–28,000", "¥45,000–120,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (¥6,000–10,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm or budget business hotel, okonomiyaki at Okonomi-mura (¥1,000), convenience store lunches and izakaya dinners. The Peace Memorial Museum costs only ¥200. Miyajima ferry and shrine add ¥660. Completely comfortable on this budget.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (¥15,000–28,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Cross Hotel or similar 3-star business hotel, dinner at a mid-range oyster restaurant (¥3,000–5,000), guided tour of Peace Park (¥5,000–10,000 private), ropeway on Miyajima (¥2,000). The sweet spot for comfort and experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (¥45,000–120,000/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Sheraton Grand Hiroshima, oyster kaiseki at Kakifune Kanawa (¥8,000–15,000), private charter to Miyajima at dawn (¥30,000–50,000), specialist historian guide. Hiroshima at this level is a profoundly different experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hiroshima</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best location in Hiroshima for most visitors is the area between Hiroshima Station and Peace Memorial Park — served by tram, walkable in 15–20 minutes, and close to the main sights. Booking 6–8 weeks ahead is recommended for spring and autumn.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Sheraton Grand Hiroshima",
                  type: "5-star luxury · Connected to Hiroshima Station",
                  price: "From ¥25,000/night",
                  badge: "Best luxury",
                  desc: "Directly connected to the Shinkansen side of Hiroshima Station. Rooms from the upper floors have views over the city and mountains. Large rooms by Japanese standards, excellent restaurant, fitness centre, and the most efficient access to the Peace Memorial Park by tram. Consistently rated Hiroshima&apos;s top hotel.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Cross Hotel Hiroshima",
                  type: "Boutique mid-range · Hondori / City Centre",
                  price: "From ¥8,000/night",
                  badge: "Best mid-range",
                  desc: "Well-designed business hotel with a boutique aesthetic in the heart of the Hondori shopping area, 10 minutes&apos; walk from Peace Memorial Park. Stylish rooms, good location, and genuinely helpful front desk. The benchmark for mid-range stays in Hiroshima.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Knightsbridge Hostel Hiroshima",
                  type: "Design hostel · Near Peace Park",
                  price: "From ¥3,000/night (dorm)",
                  badge: "Best budget",
                  desc: "One of Hiroshima&apos;s best-rated hostels — clean, well-designed private and dorm rooms within 10 minutes&apos; walk of Peace Memorial Park. Good common areas, helpful staff, and a genuine sense of community among travellers. Private rooms from ¥6,500/night.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Stay on Miyajima Island",
                  type: "Ryokan · Miyajima island",
                  price: "From ¥15,000/night (dinner + breakfast incl.)",
                  badge: "Most unique",
                  desc: "Staying on Miyajima island means experiencing the shrine at dawn and dusk, after the day-trippers have left. The island&apos;s ryokan typically include kaiseki dinner and breakfast. The Miyajima Grand Hotel Arimoto and Jukeiso are the two most established properties. Book 2–3 months ahead.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hiroshima</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hiroshima has two unmissable local foods: Hiroshima-style okonomiyaki (layered pancake with noodles, not the mixed Osaka version) and kaki oysters (Hiroshima produces over 60% of Japan&apos;s oyster output). Both are available at all price levels.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Okonomi-mura",
                  t: "Hiroshima okonomiyaki · Naka-ku, central Hiroshima",
                  d: "A building with multiple floors entirely dedicated to okonomiyaki restaurants — over 20 stalls across the complex. Each chef has been making the Hiroshima layered style for years or decades. Sit at the teppan counter and watch your okonomiyaki built layer by layer: thin crepe, cabbage mountain, bean sprouts, pork slices, yakisoba noodles, then a fried egg on top. ¥800–1,200. Open for lunch and dinner.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kakifune Kanawa",
                  t: "Floating oyster restaurant · Motoyasu River",
                  d: "Hiroshima&apos;s most famous oyster restaurant, moored as a floating houseboat on the Motoyasu River within sight of the A-Bomb Dome. Oyster kaiseki course ¥5,000–8,000 — oysters grilled, steamed, fried, raw, and in various preparations. Book ahead for dinner. Lunch is easier to get without a reservation. An extraordinary setting for an extraordinary meal.",
                  b: "Most unique",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Izakaya near Nagarekawa",
                  t: "Oysters & local drinks · Nagarekawa district",
                  d: "Hiroshima&apos;s Nagarekawa district (a short walk east of Peace Park) is the city&apos;s most concentrated restaurant and bar area. Dozens of izakaya serve grilled Hiroshima oysters, okonomiyaki, local Saijo sake (Hiroshima is a major sake-producing region), and Sapporo on tap. Budget ¥2,000–4,000 with drinks for a full evening meal.",
                  b: "Best evening",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Miyajima street food",
                  t: "Omotesando shopping street · Miyajima Island",
                  d: "The main shopping street on Miyajima sells fresh-grilled oysters on the shell (¥400–600 each), momiji manju cakes (maple-leaf-shaped pastries, ¥100–150), and anago (conger eel from the Seto Inland Sea) on rice. The grilled oysters eaten at a street stall in the open air, looking toward the torii gate, are one of the great casual food experiences in Japan.",
                  b: "Unmissable",
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
            destination="Hiroshima Japan"
            hotels={[
              {
                name: "Sheraton Grand Hiroshima",
                type: "5-star · Connected to Hiroshima Station",
                price: "From ¥25,000/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/jp/sheraton-grand-hiroshima.html?aid=2820480",
              },
              {
                name: "Cross Hotel Hiroshima",
                type: "Boutique mid-range · City Centre",
                price: "From ¥8,000/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/jp/cross-hiroshima.html?aid=2820480",
              },
              {
                name: "Knightsbridge Hostel Hiroshima",
                type: "Design hostel · Near Peace Park",
                price: "From ¥3,000/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/jp/knightsbridge-hostel-hiroshima.html?aid=2820480",
              },
              {
                name: "Miyajima Grand Hotel Arimoto",
                type: "Ryokan · Miyajima Island",
                price: "From ¥15,000/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/jp/miyajima-grand-hotel-arimoto.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hiroshima Peace Park Guided Tour",
                duration: "3 hrs",
                price: "From ¥2,500/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=hiroshima+peace+park+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Miyajima Island Day Trip from Hiroshima",
                duration: "Full day",
                price: "From ¥4,000/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=miyajima+island+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Hiroshima Okonomiyaki Cooking Class",
                duration: "2 hrs",
                price: "From ¥3,500/person",
                badge: "Highly rated",
                url: "https://www.getyourguide.com/s/?q=hiroshima+okonomiyaki+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Miyajima Torii Gate Kayak Tour",
                duration: "2.5 hrs",
                price: "From ¥6,000/person",
                badge: "Unique",
                url: "https://www.getyourguide.com/s/?q=miyajima+kayak+torii&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hiroshima</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏝️",
                  title: "Skipping Miyajima Island",
                  desc: "Some visitors treat Hiroshima purely as a solemn day trip from Osaka or Kyoto and miss Miyajima entirely. This is a significant mistake. Miyajima is one of Japan&apos;s most beautiful spots and is only 30–40 minutes from central Hiroshima by tram and ferry (¥360 return). The floating torii gate alone justifies the journey. Two days with Day 1 in Hiroshima city and Day 2 on Miyajima is the correct way to structure this stop.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌊",
                  title: "Not Checking the Tide Tables",
                  desc: "The Itsukushima torii gate looks completely different at high tide (floating above the sea — the classic image) versus low tide (accessible on foot across the tidal flats). Both are worth experiencing, but neither is a surprise if you check the tide table in advance. Japan Meteorological Agency publishes free tide predictions at jma.go.jp. Low tide: walk to the gate and touch it. High tide: photograph from the shrine corridors. Check before you leave your hotel.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⏱️",
                  title: "Rushing the Peace Memorial Museum",
                  desc: "The Peace Memorial Museum is not a 30-minute experience. The exhibits — survivor testimonies, personal belongings of those killed, photographs, the documented historical record of 6 August 1945 — deserve at least two hours of genuine attention. Visitors who rush through consistently report regretting it. Visit in the morning when you have emotional energy and time. The ¥200 entry fee is one of the most valuable ¥200 you will spend in Japan.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🥞",
                  title: "Eating Osaka-Style Okonomiyaki in Hiroshima",
                  desc: "Japan has two major okonomiyaki styles. The Osaka version mixes all ingredients together into a pancake batter before cooking. The Hiroshima version layers each ingredient separately and is considerably more complex. If you eat a mixed-style okonomiyaki in Hiroshima, you have missed the point. Go to Okonomi-mura — a building dedicated to the Hiroshima style — and eat it from a specialist who has been making it for years.",
                  color: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hiroshima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive at Peace Park Before 9am",
                  desc: "The Peace Memorial Park is open 24 hours and the museum opens at 8:30am. Tour groups from Osaka and Kyoto typically arrive between 10:30am and 11:30am. Being in the park before 9am — at the A-Bomb Dome and Children&apos;s Peace Monument — makes an enormous qualitative difference. The park in early morning quiet is a completely different experience from the mid-morning bustle.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚶",
                  title: "Low Tide: Walk to the Torii Gate",
                  desc: "If the tide is out when you visit Miyajima, walk across the sand to the base of the O-torii gate. You can touch the barnacle-covered wooden pillars, look straight up through the gate to the sky, and appreciate its true scale — 16 metres tall, constructed without nails. This is an experience that a photograph from the shrine corridor cannot replicate, and it costs nothing.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🥞",
                  title: "Hiroshima Okonomiyaki: Layered, Not Mixed",
                  desc: "The Hiroshima version layers each ingredient: thin crepe base, raw cabbage mountain, bean sprouts, pork, yakisoba noodles, then a fried egg folded over the top. The result is more complex and more satisfying than the mixed Osaka style. Try Okonomi-mura in central Hiroshima — multiple floors of specialists who have been making it the same way for decades.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🦪",
                  title: "Hiroshima Oysters in Season",
                  desc: "Hiroshima oysters are at their best from October through April, peaking in January and February. In summer they are smaller and less flavourful — the off-season. If visiting in winter, prioritise Kakifune Kanawa for the full experience. In summer, shift focus to anago (conger eel from the Seto Inland Sea), which is excellent year-round and particularly good on Miyajima.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎫",
                  title: "Japan Rail Pass — Worth It from Tokyo",
                  desc: "A 7-day JR Pass (¥50,000) covers the Hikari Shinkansen Tokyo–Hiroshima (¥18,000 one way without a pass), the JR line to Miyajima-guchi, and the JR Ferry to Miyajima island. If travelling from Tokyo to Kyoto, Osaka, and Hiroshima in a single trip, the pass pays for itself comfortably. Note: the fastest Nozomi trains are not covered — use the Hikari, which is only 20 minutes slower.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💴",
                  title: "Cash is Essential in Hiroshima",
                  desc: "Japan remains significantly cash-based. Several restaurants in Okonomi-mura, smaller izakaya, shrine admission desks, and the Miyajima ferry are cash-only. Withdraw yen at 7-Eleven ATMs (the most reliable for foreign cards) or Japan Post ATMs before you need it. ¥15,000 in cash per person per day is a comfortable buffer.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hiroshima" />

          {/* Combine With */}
          <CombineWith currentSlug="hiroshima-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is 2 days enough for Hiroshima?",
                  a: "Yes — 2 days is the ideal duration for Hiroshima. Day 1 covers the Peace Memorial Park, A-Bomb Dome, Peace Memorial Museum, and Hiroshima city highlights with time for oysters in the evening. Day 2 is dedicated to Miyajima Island and the floating torii gate. You will not feel rushed. If you only have one day (arriving as a day trip from Osaka or Kyoto), it is possible but forces difficult choices — you can do Peace Park plus a quick Miyajima visit, but one or the other will suffer.",
                },
                {
                  q: "Is the Japan Rail Pass worth it for visiting Hiroshima?",
                  a: "Yes, decisively if you are travelling from Tokyo. The Nozomi Shinkansen from Tokyo to Hiroshima costs ¥18,000 one way (¥36,000 return). A 7-day JR Pass costs ¥50,000 and covers the full Shinkansen network (note: the fastest Nozomi trains are not covered — use the Hikari, which is only 20 minutes slower). The JR Pass also covers the JR Ferry to Miyajima island. If you are spending a week in Japan visiting Tokyo, Kyoto, Osaka, and Hiroshima, the pass pays for itself comfortably.",
                },
                {
                  q: "Is Hiroshima safe to visit?",
                  a: "Completely. Hiroshima is a normal, modern, thriving Japanese city with a population of 1.2 million. Concerns about radiation are entirely unfounded — background radiation levels in Hiroshima are identical to any other Japanese city. The bomb exploded at altitude and the site has been a functioning city since reconstruction began in 1949. Hiroshima is one of the most welcoming cities in Japan for international visitors.",
                },
                {
                  q: "When is oyster season in Hiroshima?",
                  a: "Hiroshima oysters (kaki) are at their best from October through April, peaking in January and February when cold water produces plump, creamy, flavourful oysters. The summer months (June–September) are the off-season — oysters are still available but smaller and less flavourful. If visiting specifically for the oysters, aim for autumn or winter. Kakifune Kanawa and the izakaya around Nagarekawa are the best places to eat them.",
                },
                {
                  q: "What is the difference between Hiroshima and Osaka okonomiyaki?",
                  a: "Japan has two distinct okonomiyaki styles that are fundamentally different dishes. The Osaka (Kansai) version mixes all ingredients — flour, egg, cabbage, meat, seafood — into a thick batter before cooking, like a savoury pancake. The Hiroshima version builds each ingredient in separate layers on a teppan griddle: first a thin crepe, then a mountain of raw cabbage, then bean sprouts, pork, and finally yakisoba noodles with a fried egg on top. The Hiroshima version is larger, more structured, and most Hiroshima residents will tell you it is the superior style. Try Okonomi-mura to see it made properly.",
                },
                {
                  q: "How does Hiroshima compare to Nagasaki?",
                  a: "Both cities experienced atomic bombings in August 1945 and both have preserved that history while rebuilding as thriving modern cities. Nagasaki is approximately 6 hours from Hiroshima by Shinkansen (or 2.5 hours from Fukuoka by Shinkansen). Nagasaki&apos;s Peace Park and Atomic Bomb Museum are powerful and worth visiting — the city also has a distinct character shaped by centuries as Japan&apos;s only international trading port under the Edo-period isolation policy. If you have time for both, they complement rather than duplicate each other. Most visitors to western Japan prioritise Hiroshima, which is more accessible.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hiroshima trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/miyajima-island-guide", label: "Miyajima island guide", icon: "⛩️" },
                { href: "/blog/hiroshima-peace-museum", label: "Peace Museum tips", icon: "🕊️" },
                { href: "/blog/hiroshima-food-guide", label: "Hiroshima food guide", icon: "🦪" },
                { href: "/blog/japan-rail-pass-guide", label: "Japan Rail Pass guide", icon: "🚄" },
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
          <RelatedGuides currentSlug="hiroshima-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Japan &amp; Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kyoto in 5 Days — Temples &amp; Zen Gardens", href: "/blog/kyoto-5-days" },
                { label: "Osaka in 4 Days — Food, Castles &amp; Nightlife", href: "/blog/osaka-4-days" },
                { label: "Tokyo in 7 Days — The Complete Guide", href: "/blog/tokyo-7-days" },
                { label: "Hokkaido in 5 Days — Nature &amp; Snow", href: "/blog/hokkaido-5-days" },
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
