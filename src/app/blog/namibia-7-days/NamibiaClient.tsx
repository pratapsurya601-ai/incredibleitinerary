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
const NAMIBIA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Namibia Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "selfdrive",   emoji: "🚗",  label: "Self-Drive Essentials" },
  { id: "itinerary",   emoji: "📅",  label: "7-Day Itinerary" },
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
          href: `mailto:?subject=Namibia 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Namibia in 7 Days — dunes, desert elephants and Etosha waterholes&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/namibia-7-days"
        imageUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
        description="Namibia in 7 Days: Sossusvlei dunes, Deadvlei, Etosha National Park safari, Swakopmund adventures and Fish River Canyon — complete self-drive guide with budget breakdown."
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
export default function NamibiaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NAMIBIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Namibia" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="namibia sossusvlei red sand dunes deadvlei africa desert"
            fallback="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
            alt="Namibia Sossusvlei red sand dunes with dead trees in Deadvlei ancient lake"
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
              <span className="text-white/70">Namibia 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa Self-Drive
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Namibia in 7 Days:
                <em className="italic text-amber-300"> Dunes, Desert Elephants &amp; Etosha Waterholes</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Climb the world&apos;s tallest sand dunes at dawn, stand among 900-year-old dead trees in Deadvlei, and watch lions drink at Etosha waterholes under the stars. The complete self-drive guide from $120/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇳🇦 Namibia, Africa</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $120/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Climbing the 325-metre sand dunes of Sossusvlei at dawn as orange and purple shadows race across the world&apos;s oldest desert — this is Namibia. Below you, in a white clay pan that has not held water for 900 years, the bleached skeletons of ancient camel thorn trees stand in perfect, eerie stillness. At night, more stars than anywhere else on Earth blaze from a sky with zero light pollution.
            </p>
          </blockquote>

          {/* ── WHAT NAMIBIA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Namibia Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Namibia is the world&apos;s least-densely populated country after Mongolia — 2.5 million people spread across 825,000 square kilometres of desert, savannah, and Atlantic coastline. The Namib Desert, which gives the country its name, is 55 to 80 million years old — the oldest desert on Earth. The sand dunes at Sossusvlei reach 325 metres, the tallest in the world, and the iron oxide in the sand turns them a deep burnt orange that photographs like another planet.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              But Namibia is not just dunes. Etosha National Park holds one of Africa&apos;s highest concentrations of wildlife — lions, elephants, rhinos (both black and white), cheetahs, and leopards — all visible from self-drive game roads around the vast white Etosha Pan. The Skeleton Coast is a graveyard of shipwrecks along a fog-bound Atlantic shoreline. Fish River Canyon is the second-largest canyon on Earth after the Grand Canyon. And the Himba people in the remote north maintain a traditional pastoralist culture that has survived for centuries.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What makes Namibia unique in Africa is that you can do all of this yourself. The roads are well-maintained gravel, the infrastructure is excellent, crime is low, and a 4x4 rental from Windhoek opens the entire country. This is Africa&apos;s greatest self-drive destination — no guide required, no convoy needed, just you and the desert.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="WDH Windhoek" />
              <StatCard icon="🌡️" label="Best Season" value="May–Oct" />
              <StatCard icon="🚗" label="Self-Drive" value="4x4 Essential" />
              <StatCard icon="💰" label="Budget From" value="$120/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Namibia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Oct",
                  i: "☀️",
                  t: "Dry Season — Best Overall",
                  d: "15–28°C days, cold nights (can drop to 0°C in the desert). Wildlife concentrates at waterholes making game viewing excellent. No rain, clear skies, and the best photography conditions. July–August is peak season with cooler temperatures. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Late Wet Season — Green & Quiet",
                  d: "Still warm (25–32°C) but the rains are tapering off. The landscape is green, baby animals are everywhere, and migrant birds arrive in huge numbers. Fewer tourists and lower lodge prices. Etosha can be muddy but the pan sometimes holds water — flamingos gather in thousands.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Feb",
                  i: "🔥",
                  t: "Summer — Hot & Green",
                  d: "35–45°C in the Namib, 30–38°C in Etosha. Thunderstorms transform the desert — green grass, wildflowers, dramatic cloud formations. But the heat is punishing, wildlife disperses from waterholes, and outdoor activity between 10am and 4pm is miserable. Only for heat-tolerant travellers.",
                  b: "Experienced only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Jan",
                  i: "🌧️",
                  t: "Peak Wet Season — Dramatic But Difficult",
                  d: "Heavy rains in the north and central areas. Some gravel roads become impassable. Etosha&apos;s secondary roads may close. Sossusvlei can flood (the Tsauchab River occasionally reaches the vlei — a rare and spectacular event). Beautiful but logistically challenging for self-drive.",
                  b: "Not recommended for first-timers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Namibia</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Namibia&apos;s main international airport is <strong className="font-medium">Hosea Kutako International Airport (WDH)</strong>, located 45km east of Windhoek. Most international visitors arrive here and collect their rental 4x4 at the airport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights to Windhoek",
                  d: "Direct flights from Johannesburg (2 hrs, South African Airways / Airlink), Addis Ababa (6 hrs, Ethiopian Airlines), Frankfurt (10 hrs, Condor / Eurowings Discover). From the US/UK, connect via Johannesburg or Addis Ababa. Budget $400–$900 return from Europe, $800–$1,400 from North America.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Overland from South Africa",
                  d: "Drive across from Cape Town (19 hrs via the N7/B1) or from Upington across the Orange River border at Noordoewer. The Trans-Kalahari Highway from Johannesburg to Windhoek is a popular 14-hour route. Border crossings are straightforward for most nationalities.",
                  b: "For road-trippers",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🌍",
                  t: "From Botswana / Zambia / Zimbabwe",
                  d: "Enter from Botswana via the Caprivi Strip (now Zambezi Region) at Mohembo, Ngoma, or Kasane border posts. From Zambia/Zimbabwe, transit through Botswana or fly via Johannesburg. The Caprivi Strip is a popular route for Southern Africa circuit travellers.",
                  b: "Circuit route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🛩️",
                  t: "Internal charter flights",
                  d: "Luxury travellers can charter flights between Windhoek, Sossusvlei, Swakopmund, and Etosha — cutting 5-hour drives to 45-minute flights. Wilderness Air and FlyNamibia operate scheduled bush flights. Budget $200–$500 per sector.",
                  b: "Luxury option",
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

          {/* ── SELF-DRIVE ESSENTIALS ── */}
          <section id="selfdrive" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚗 Self-Drive Essentials</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Namibia is Africa&apos;s premier self-drive destination. The roads are well-signposted, crime is low, and a 4x4 opens the entire country. But the distances are vast and the terrain is unforgiving — preparation is everything.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚙",
                  title: "Book a 4x4 — not a sedan",
                  desc: "The last 4km to Sossusvlei is sand-only (4x4 required). Etosha secondary roads, the Skeleton Coast, and most routes west of Windhoek need high clearance at minimum. Budget $60–$90/day from Asco Car Hire or Odyssey Rent a Car in Windhoek. A 2x2 sedan will get stuck within hours.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛽",
                  title: "Never leave town without a full tank",
                  desc: "Namibia has stretches of 200km+ without a fuel stop. The C14 between Sesriem and Swakopmund is notorious. Carry a 20-litre jerry can and fill up at every opportunity. Running out of fuel in the Namib is a rescue emergency, not a minor inconvenience.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📡",
                  title: "Download offline maps",
                  desc: "Cell signal disappears the moment you leave Windhoek. Download Maps.me or Google Maps offline data for all of Namibia before departing. Many roads are unmarked gravel. A dedicated Garmin GPS with Namibia maps is also worth renting from your car hire company.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🛞",
                  title: "Two spare tyres minimum",
                  desc: "Namibia&apos;s gravel roads eat tyres. Sharp rocks, thorns, and corrugated surfaces cause punctures regularly. Always carry two full-size spares, a jack, and a basic tyre repair kit. Check tyre pressure every morning — lower pressure on gravel (1.8 bar) improves grip and reduces puncture risk.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Namibia Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary follows the classic Windhoek &rarr; Sossusvlei &rarr; Swakopmund &rarr; Etosha &rarr; Windhoek loop — the most popular self-drive circuit in Namibia, covering 2,000km of gravel and tar.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Windhoek — Collect 4x4 & Explore the Capital"
                cost="$50–$90 (guesthouse + food + supplies)"
                items={[
                  "Arrive at Hosea Kutako International Airport (WDH). Collect your pre-booked 4x4 rental — essential for Namibia. Budget option: Toyota HiLux or Land Cruiser from Asco Car Hire or Odyssey Rent a Car ($60–$90/day).",
                  "Stop at a Spar or Checkers supermarket in Windhoek — stock up on food, water, and camping supplies. Namibia self-drive means self-catering on most nights. Buy at least 10 litres of water per person.",
                  "Explore Windhoek city centre: Christuskirche (German Lutheran church built in 1910), the Alte Feste museum, and the Independence Memorial Museum ($4 entry) — a striking modernist building documenting Namibia\u0027s struggle for independence.",
                  "Stay the night in Windhoek: Chameleon Backpackers ($15–$25/night) for budget travellers, or a guesthouse like Olive Grove ($50–$80/night) for mid-range comfort. The city is safe, compact, and well-organised.",
                  "Pre-load your Maps.me offline maps for the entire country. Cell signal disappears the moment you leave Windhoek. Check your spare tyres, tyre jack, and fuel cans before departure tomorrow.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Windhoek to Sesriem — Drive Through the Namib"
                cost="$40–$60 (camping + park entry NAD 80 + petrol)"
                items={[
                  "Early start (7am). Drive south from Windhoek to Sesriem (~5 hours, 380km on the C19 gravel road). This drive itself is spectacular — red rock plains, oryx, springbok, and the landscape gradually turning from scrubland to pure desert.",
                  "Stop at Solitaire — an impossibly remote petrol station and bakery in the middle of nothing. The apple pie here is famous across Namibia. The rusted hulks of abandoned cars outside are an iconic photo stop.",
                  "Arrive Sesriem, the gateway to Sossusvlei. Camp at Sesriem Campsite (NAD 80/person park fee + camping fee) — basic ablutions but you wake up 15 minutes from Dune 45.",
                  "Key: stay INSIDE the park gate (Sesriem campsite). If you camp outside, you lose 30–40 minutes of golden hour to gate queues at sunrise. The gates open at first light — every minute counts.",
                  "Evening: walk to Sesriem Canyon (small gorge carved by the Tsauchab River, 30m deep) — free with park entry. Sunset from the canyon rim is dramatic and usually deserted.",
                  "Prepare your kit for tomorrow\u0027s 4:30am alarm: headlamp, camera, 2 litres of water, snacks, sunscreen. You want to summit Dune 45 before the sun destroys the shadow lines.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Sossusvlei & Deadvlei — The Iconic Dunes"
                cost="$30–$50 (park shuttle + food)"
                items={[
                  "4:30am alarm. Drive through the park gate at sunrise (5:30–6am depending on season). Race to Dune 45 — the most climbed dune in the world, 170m high — and summit before the crowds and the heat arrive. The ridge walk at dawn is extraordinary.",
                  "The view from the top: 300-degree panorama of orange dunes and flat plains stretching to the horizon. The shadow lines on the dunes only exist in the first hour of light — this is the photograph.",
                  "Drive to the 2x4 car park (the last 4km to Sossusvlei requires either a 4x4 or the free park shuttle). Take the shuttle if your vehicle struggles in deep sand.",
                  "DEADVLEI: a 1km walk from the Sossusvlei car park. Ancient camel thorn trees, dead for 900 years, standing in a bright white clay pan ringed by towering red dunes. One of the great landscapes on Earth. The trees haven\u0027t decomposed because the air is too dry.",
                  "Spend 2–3 hours in Deadvlei. The light is extraordinary in the morning. By 11am the midday sun turns it into a furnace — evacuate before then. Temperatures in the clay pan can exceed 50°C.",
                  "Return to camp, rest through the heat, and drive to sunset viewpoints in the afternoon. Star-gazing at Sesriem is among the best in the world — zero light pollution for hundreds of kilometres.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Drive to Swakopmund — Skeleton Coast"
                cost="$60–$90 (guesthouse + food + petrol)"
                items={[
                  "Early start: drive from Sesriem to Swakopmund (~5 hours, 350km). Take the C14 through the Gaub and Kuiseb river canyons — stark, beautiful, and rarely driven. Watch for wild horses near Aus if you take the southern route.",
                  "Stop at Welwitschia Drive to see welwitschia plants — Namibia\u0027s iconic living fossil, some over 1,500 years old. These extraordinary plants survive on fog moisture alone in the hyper-arid Namib.",
                  "Arrive Swakopmund, a surreal German colonial beach town on the Skeleton Coast. Art Deco and Jugendstil architecture, German bakeries, and an Atlantic Ocean cold enough to make swimming impossible.",
                  "Check in: Chameleon Backpackers ($20–$30/night) or a budget guesthouse ($40–$60). Mid-range: The Stiltz ($120–$180/night) — bungalows on stilts over the desert. Swakopmund is compact and walkable.",
                  "Walk the Swakopmund waterfront and lighthouse area. Dinner at The Tug — a restaurant built on a restored tugboat, famous for fresh Namibian seafood ($15–$25/person).",
                  "Browse the craft market for semi-precious stones, Namibian malachite jewellery, and ostrich-egg art. Namibia produces excellent gemstones at fair prices.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Swakopmund Adventures — Dunes, Seals & Desert"
                cost="$50–$90 (activities + food + seal colony entry)"
                items={[
                  "Morning: drive 90 minutes north to Cape Cross Seal Colony. One of the largest Cape Fur Seal colonies in the world — 250,000 seals packed along the Skeleton Coast shoreline. The noise and smell are overwhelming. $10 entry.",
                  "Back in Swakopmund: choose your adventure. Sandboarding on the coastal dunes ($30 — standing or lying down, no experience needed), quad biking through the dune fields ($50), or a desert ecology walk with a local guide ($30).",
                  "Lunch at Cafe Anton or a local German bakery — try the Schwarzbrot bread and Namibian biltong (dried game meat). Swakopmund\u0027s German heritage is genuine and the baked goods are excellent.",
                  "Afternoon: Kolmanskop ghost town day trip (NAD 100 entry, 1.5 hours south near Luderitz). A diamond-mining town abandoned in 1954, now slowly being reclaimed by the Namib desert — sand drifts through the rooms of Art Deco houses. One of the most photographed ghost towns on Earth.",
                  "Evening: Swakopmund beach faces west. The sunsets are extraordinary — cold Atlantic mist rolling in as the sun drops behind the dune sea. Sundowner drinks on the waterfront.",
                  "Dinner: Joe\u0027s Beerhouse is Windhoek\u0027s most famous restaurant, but Swakopmund has its own excellent options — try the Raft Restaurant on the lagoon or a braai (BBQ) at your campsite.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Drive to Etosha National Park — First Game Drive"
                cost="$50–$80 (park entry $8/day + NAD 170 vehicle + camping + petrol)"
                items={[
                  "Long drive day: Swakopmund to Etosha (5–6 hours, 420km via Omaruru and Outjo). A genuine Namibian road trip through changing landscapes — from coastal desert to savannah bushveld.",
                  "Enter Etosha through Anderson Gate (south). Pick up your park permit at the gate: $8 per person per day plus NAD 170 per vehicle. The combined entry is excellent value for Africa\u0027s best self-drive safari.",
                  "Etosha is unique: the 4,760km\u00B2 Etosha Pan — a vast white salt pan visible from space — dominates the landscape. Animals concentrate at waterholes around the pan edge, making game viewing remarkably productive from your own vehicle.",
                  "Camp at Okaukuejo Camp ($15–$20/person at NWR camps). Okaukuejo has a floodlit waterhole 50 metres from the camp fence that operates 24 hours — elephants, rhinos, and lions come to drink throughout the night.",
                  "Afternoon game drive through the western sections. Look for lions at Okondeka, elephants at Ombika, and black rhino at Okaukuejo waterhole. Etosha is malaria-free in the dry season.",
                  "Night: sit at the Okaukuejo waterhole until midnight. Watching a black rhino arrive to drink under the stars, illuminated by the floodlights, is one of Africa\u0027s great wildlife experiences.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Full Etosha Safari — Drive Back to Windhoek"
                cost="$50–$80 (park entry + petrol + crafts + food)"
                items={[
                  "Full dawn game drive (6am–12pm). Etosha at dawn: the pan glows pink, lions are still active from the night, and cheetahs hunt across the open grassland fringing the pan.",
                  "Must-see waterholes: Halali (famous for rhinos), Rietfontein (elephants in large herds), Gemsbokvlakte (oryx and springbok), and Klein Namutoni (giraffe, kudu, eland).",
                  "Big Five in Etosha: lions, leopards (rare and mostly nocturnal), elephants, rhinos (both black and white — Etosha has the highest density of black rhino in the world), and buffalo (rare in the western sections).",
                  "Midday: check out of camp. Drive south toward Windhoek (4 hours from Anderson Gate via the B1 highway).",
                  "Stop at Okahandja for the Namibian curio and wood carving market — the best in the country, with items from across Southern Africa ($5–$50). Excellent for last-minute souvenirs.",
                  "Return rental car at Windhoek airport or city depot. Evening flight home, or extend your trip south to Fish River Canyon (Africa\u0027s largest canyon, 160km long) or east to Botswana for the Okavango Delta.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Namibia" onPlanTrip={() => setModalOpen(true)} />

          {/* ── KEY SITES GUIDE ── */}
          <section id="sites" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏜️ Key Sites &amp; Attractions</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The must-visit destinations across the 7-day circuit. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sossusvlei & Deadvlei",
                  e: "NAD 80 park fee",
                  d: "The world\u0027s tallest sand dunes (up to 325m) and the iconic white clay pan of Deadvlei with its 900-year-old dead camel thorn trees. The defining landscape of Namibia. Arrive at sunrise — the shadow lines on the dunes only last until 9am. The last 4km requires a 4x4 or the free park shuttle.",
                  t: "Must see \u00B7 Half day",
                },
                {
                  n: "Etosha National Park",
                  e: "$8/day + NAD 170 vehicle",
                  d: "One of Africa\u0027s great safari parks. The vast white Etosha Pan creates a unique ecosystem where animals concentrate at waterholes around the pan edge. Self-drive game viewing is productive and accessible. The floodlit waterholes at NWR camps operate 24 hours. Malaria-free in dry season.",
                  t: "Must see \u00B7 1–2 days",
                },
                {
                  n: "Skeleton Coast",
                  e: "Free (public sections)",
                  d: "A fog-bound Atlantic coastline littered with shipwrecks, whale bones, and seal colonies. The name refers to the countless ships wrecked here by the treacherous currents and fog. Cape Cross Seal Colony ($10 entry) is the accessible highlight — 250,000 Cape Fur Seals.",
                  t: "Half day",
                },
                {
                  n: "Fish River Canyon",
                  e: "NAD 80",
                  d: "The second-largest canyon on Earth after the Grand Canyon — 160km long, up to 550m deep. The viewpoints at Hobas are spectacular at sunrise and sunset. The 5-day hiking trail along the canyon floor (May–September only) is one of Africa\u0027s great treks.",
                  t: "Day trip or multi-day trek",
                },
                {
                  n: "Swakopmund",
                  e: "Free (town access)",
                  d: "A surreal German colonial town on the Atlantic coast. Art Deco architecture, German bakeries, adventure activities (sandboarding $30, quad biking $50, kayaking $60), and the base for Skeleton Coast exploration. The best food town in Namibia.",
                  t: "1–2 days",
                },
                {
                  n: "Kolmanskop Ghost Town",
                  e: "NAD 100",
                  d: "An abandoned diamond-mining town near Luderitz, slowly being reclaimed by the Namib desert. Sand pours through the doors and windows of once-grand Art Deco houses. One of the most photographed ghost towns on Earth. Guided tours run twice daily.",
                  t: "Half day",
                },
                {
                  n: "Himba Villages (Kaokoveld)",
                  e: "Donation-based ($10–$20)",
                  d: "The Himba people in Namibia\u0027s remote northwest maintain a traditional semi-nomadic pastoralist culture. Visiting an authentic Himba village through a responsible guide is one of Namibia\u0027s most unique cultural experiences. Always visit with a local guide who has an existing relationship with the community.",
                  t: "Day trip from Opuwo",
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
            title="Namibia — Dunes, Desert &amp; Wildlife"
            subtitle="From the world&apos;s oldest desert to Africa&apos;s best self-drive safari."
            spots={[
              {
                name: "Sossusvlei Sand Dunes",
                query: "sossusvlei namibia red sand dunes sunrise shadow desert africa",
                desc: "The towering orange dunes of Sossusvlei at dawn — iron-oxide sand turning crimson in the first light.",
              },
              {
                name: "Deadvlei Dead Trees",
                query: "deadvlei namibia dead trees white clay pan red dunes desert",
                desc: "The 900-year-old dead camel thorn trees of Deadvlei standing in the white clay pan, framed by towering red dunes.",
              },
              {
                name: "Etosha Waterhole Wildlife",
                query: "etosha national park namibia elephants waterhole safari africa",
                desc: "Elephants gathering at an Etosha waterhole with the vast white salt pan stretching to the horizon.",
              },
              {
                name: "Skeleton Coast Shipwreck",
                query: "skeleton coast namibia shipwreck fog atlantic desert coastline",
                desc: "The fog-bound Skeleton Coast — shipwrecks, seal colonies, and the Namib Desert meeting the Atlantic Ocean.",
              },
              {
                name: "Swakopmund German Architecture",
                query: "swakopmund namibia german colonial architecture atlantic coast town",
                desc: "Swakopmund\u0027s surreal German colonial architecture on the Atlantic coast of the Namib Desert.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Namibia is more affordable than most people expect for Africa. The main costs are the 4x4 rental ($60–$90/day) and fuel. Accommodation ranges from $15 camping to $1,200/night at luxury fly-in lodges. Self-catering keeps food costs very low.
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
                    ["🏨 Accommodation", "$15–$35/night", "$80–$180/night", "$400–$1,200/night"],
                    ["🍽 Food & Drink", "$15–$25/day", "$30–$60/day", "$80–$150/day"],
                    ["🚗 4x4 Rental + Fuel", "$60–$90/day", "$80–$120/day", "$200–$500/day"],
                    ["🦁 Park Entries & Activities", "$20–$50/day", "$50–$120/day", "$100–$300/day"],
                    ["TOTAL (per person/day)", "~$120/day", "~$250/day", "~$500+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$120/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Camp at NWR sites and Sesriem ($15–$35/night), self-cater from supermarkets, rent a basic 4x4. This is completely doable and how most backpackers experience Namibia. The camping infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (~$250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in lodges and guesthouses ($80–$180/night), eat at restaurants, add guided activities. Mushara Bush Camp near Etosha and The Stiltz in Swakopmund are excellent mid-range options.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~$500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Fly-in lodges like Little Kulala at Sossusvlei ($800–$1,200/night all-inclusive), private game drives, hot air balloon flights, and charter transfers between destinations. World-class safari luxury.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Namibia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Namibia&apos;s accommodation ranges from world-class luxury safari lodges to excellent government-run NWR campsites. The key decision is camping vs. lodges — both work beautifully for the self-drive circuit.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Little Kulala (Sossusvlei)",
                  type: "Ultra-luxury fly-in lodge \u00B7 Wilderness Safaris",
                  price: "From $800/night all-inclusive",
                  badge: "Most exclusive",
                  desc: "Eleven climate-controlled desert suites with private plunge pools, rooftop star beds, and exclusive access to Sossusvlei and Deadvlei before the park gates open. The benchmark for luxury in the Namib. Hot air balloon flights and private dune walks included.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Mushara Bush Camp (Etosha)",
                  type: "Mid-range bush camp \u00B7 Von Lindequist Gate",
                  price: "From $150/night with meals",
                  badge: "Best Etosha value",
                  desc: "Tented bush camp on the eastern boundary of Etosha National Park. Canvas-and-thatch tents, excellent food, guided game drives available, and a genuine bush atmosphere without the luxury price tag. The sweet spot for Etosha accommodation.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Chameleon Backpackers (Windhoek)",
                  type: "Budget hostel \u00B7 Windhoek city centre",
                  price: "From $15/night (dorm) \u00B7 $35/night (private)",
                  badge: "Best budget",
                  desc: "Windhoek\u0027s best-known backpacker hostel. Clean dorms and private rooms, a pool, a bar, and a travel desk that books 4x4 rentals and Namibia circuits. The natural starting point for budget self-drive trips. Walking distance to Joe\u0027s Beerhouse.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "NWR Rest Camps (Etosha)",
                  type: "Government camps \u00B7 Inside Etosha NP",
                  price: "From $15/person (camping) \u00B7 $60–$100 (bungalow)",
                  badge: "Inside the park",
                  desc: "Namibia Wildlife Resorts operates Okaukuejo, Halali, and Namutoni camps inside Etosha. Each has a floodlit waterhole, a restaurant, a pool, and camping or bungalow accommodation. Staying inside the park means you\u0027re at the waterhole at midnight when the rhinos arrive.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Namibia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Namibia&apos;s food scene reflects its German colonial heritage and African traditions. Game meat (kudu, oryx, springbok) is exceptional, the seafood in Swakopmund is world-class thanks to the Benguela Current, and the German bakeries are genuinely excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Joe\u0027s Beerhouse (Windhoek)",
                  t: "Iconic game meat restaurant \u00B7 Windhoek",
                  d: "Windhoek\u0027s most famous restaurant — a sprawling German beer hall atmosphere serving kudu steak, oryx fillet, crocodile, springbok carpaccio, and Namibian craft beer. The game meat platter ($25–$40/person) is the definitive Namibian dining experience. Book ahead in high season.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "The Tug (Swakopmund)",
                  t: "Seafood restaurant \u00B7 On a restored tugboat",
                  d: "Built on an actual tugboat moored at the Swakopmund waterfront. Fresh Namibian rock lobster, Walvis Bay oysters, kingklip, and the catch of the day. The setting is unique — Atlantic waves crashing against the hull while you eat. $15–$25/person for a full seafood meal.",
                  b: "Best seafood",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Cafe Anton (Swakopmund)",
                  t: "German bakery-cafe \u00B7 Swakopmund centre",
                  d: "Authentic German bakery serving Schwarzbrot, apple strudel, pretzels, and proper European coffee. Swakopmund\u0027s German heritage is most tangible in its bakeries — the recipes were brought by settlers over a century ago and haven\u0027t changed. Breakfast here is $8–$12.",
                  b: "Best breakfast",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "NWR Camp Restaurants (Etosha)",
                  t: "Park camp dining \u00B7 Inside Etosha",
                  d: "The restaurants at Okaukuejo, Halali, and Namutoni serve solid Namibian food — braai (BBQ) with kudu boerewors sausage, pap (maize porridge), and Windhoek Lager. Not gourmet, but satisfying after a full day\u0027s game driving. Self-catering braai facilities at all camps are excellent for cooking your own game meat.",
                  b: "Convenient",
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
            destination="Namibia"
            hotels={[
              {
                name: "Little Kulala (Sossusvlei)",
                type: "Ultra-luxury \u00B7 Wilderness Safaris fly-in lodge",
                price: "From $800/night",
                rating: "5",
                badge: "Most exclusive",
                url: "https://www.booking.com/hotel/na/little-kulala.html?aid=2820480",
              },
              {
                name: "Mushara Bush Camp (Etosha)",
                type: "Mid-range tented camp \u00B7 Eastern Etosha",
                price: "From $150/night",
                rating: "4",
                badge: "Best Etosha value",
                url: "https://www.booking.com/hotel/na/mushara-bush-camp.html?aid=2820480",
              },
              {
                name: "The Stiltz (Swakopmund)",
                type: "Boutique bungalows on stilts \u00B7 Coastal",
                price: "From $120/night",
                rating: "4",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/na/the-stiltz-swakopmund.html?aid=2820480",
              },
              {
                name: "Chameleon Backpackers (Windhoek)",
                type: "Budget hostel \u00B7 City centre",
                price: "From $15/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/na/chameleon-backpackers-windhoek.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Sossusvlei Sunrise Guided Tour",
                duration: "6 hrs",
                price: "From $60/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=sossusvlei+sunrise+tour&partner_id=PSZA5UI",
              },
              {
                name: "Swakopmund Sandboarding Adventure",
                duration: "3 hrs",
                price: "From $30/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=swakopmund+sandboarding&partner_id=PSZA5UI",
              },
              {
                name: "Etosha Full-Day Safari Drive",
                duration: "10 hrs",
                price: "From $80/person",
                url: "https://www.getyourguide.com/s/?q=etosha+safari+game+drive&partner_id=PSZA5UI",
              },
              {
                name: "Walvis Bay Kayaking with Dolphins",
                duration: "3 hrs",
                price: "From $60/person",
                url: "https://www.getyourguide.com/s/?q=walvis+bay+kayaking+dolphins&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Namibia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "The Dune 45 sunrise is non-negotiable",
                  desc: "Sossusvlei is visited by thousands of tourists a year but the vast majority arrive after 9am and see a washed-out, shadowless landscape. If you arrive for sunrise and summit Dune 45 before 7am, you may have the entire ridge to yourself. The orange and purple shadow lines that make Namibia famous only exist in the first hour of light.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦁",
                  title: "Stay inside Etosha at night — waterhole magic",
                  desc: "Etosha\u0027s NWR rest camps all have floodlit waterholes within the camp perimeter. Sitting at the waterhole from 9pm to midnight costs nothing and often produces more dramatic wildlife sightings than a full day\u0027s game driving. Black rhino at Okaukuejo is the main event — they arrive after dark.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📡",
                  title: "Download offline maps before leaving Windhoek",
                  desc: "Cell signal in most of Namibia is non-existent. Download Maps.me or Google Maps offline data for the entire country before leaving Windhoek. The gravel roads require reliable navigation — a wrong turn can add 100km to your journey. A Garmin GPS with Namibia maps is also worth renting.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐟",
                  title: "Swakopmund is the best food town in Namibia",
                  desc: "The Benguela Current makes the Namib coast one of the world\u0027s most productive fishing grounds. Fresh Namibian rock lobster, Walvis Bay oysters, and kingklip are all superb. The German bakeries produce excellent Schwarzbrot and pastries from century-old imported recipes.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💧",
                  title: "Carry 10 litres of water per person",
                  desc: "The Namib Desert can reach 50°C in summer and even in the dry season daytime temperatures hit 35°C. Dehydration happens faster than you expect — especially at altitude on the dunes. Carry 10 litres per person in the vehicle and at least 2 litres when hiking. Water is scarce between towns.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "⛽",
                  title: "Fill up at every fuel station",
                  desc: "Namibia\u0027s distances are enormous. The C14 between Sesriem and Swakopmund has 200km stretches with no fuel. Always leave any town or camp with a full tank plus a 20-litre jerry can. Running out of fuel in the Namib is a genuine rescue emergency — it can take 24+ hours for help to arrive.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Namibia" />

          {/* Combine With */}
          <CombineWith currentSlug="namibia-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a 4x4 to self-drive Namibia?",
                  a: "For the standard 7-day circuit (Windhoek, Sossusvlei, Swakopmund, Etosha), a high-clearance 4x4 is strongly recommended. The last 4km to Sossusvlei is sand-only and requires 4x4 or the free park shuttle. Etosha\u0027s main roads are gravel but manageable in a high-clearance 2x4. Budget $60\u2013$90/day for a basic 4x4 from local operators like Asco Car Hire.",
                },
                {
                  q: "Is Namibia safe to self-drive?",
                  a: "Namibia is one of Africa\u0027s safest countries for self-drive travel. Crime rates are low, roads are well-maintained and signposted (though mostly gravel), and NWR rest camps are secure. The main risks are wildlife encounters (stay in your vehicle in game parks), heat exhaustion, and mechanical breakdowns in remote areas. Always carry two spare tyres and a basic tool kit.",
                },
                {
                  q: "What is the best time to visit Namibia?",
                  a: "May to October is the dry season and the best time to visit. Wildlife concentrates around waterholes for the easiest game viewing, temperatures are comfortable (15\u201328°C days, cold nights), and there are no malaria risks in most areas. July\u2013August is peak season. November\u2013February is very hot but offers green landscapes, baby animals, and migrant birds.",
                },
                {
                  q: "Can I combine Namibia with Botswana or South Africa?",
                  a: "Yes \u2014 this is one of Africa\u0027s best road trip combinations. Drive through the Caprivi Strip (now Zambezi Region) to Botswana\u0027s Chobe National Park and the Okavango Delta. Or drive south through Fish River Canyon and across the Orange River into South Africa. Many travellers do a 14\u201321 day Southern Africa circuit covering Namibia, Botswana, and Victoria Falls.",
                },
                {
                  q: "How much does a Namibia self-drive trip cost?",
                  a: "Budget travellers can self-drive Namibia for approximately $120/day per person, including 4x4 rental ($60\u2013$90/day), camping ($15\u2013$35/night), self-catered food ($15\u2013$25/day), and park entries. Mid-range with lodges: ~$250/day. Luxury fly-in lodge circuits: $500+/day. The 4x4 rental and fuel are the biggest single expenses.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Namibia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/namibia-7-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/namibia-7-days/packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/namibia-7-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/namibia-self-drive-tips", label: "Self-drive tips", icon: "🚗" },
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
          <RelatedGuides currentSlug="namibia-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rwanda Gorillas in 5 Days", href: "/blog/rwanda-gorillas-5-days" },
                { label: "Ethiopia Lalibela in 5 Days", href: "/blog/ethiopia-lalibela-5-days" },
                { label: "Kenya Masai Mara in 7 Days", href: "/blog/kenya-masai-mara-7-days" },
                { label: "South Africa Cape Town Guide", href: "/blog/south-africa-cape-town" },
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