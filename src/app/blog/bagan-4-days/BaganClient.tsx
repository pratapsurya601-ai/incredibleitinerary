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
import { PinterestSaveButton } from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const BAGAN_TOC = [
  { id: "honest",     emoji: "🏛️", label: "What Bagan Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏯",  label: "Temple & Landmark Guide" },
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
          href: `mailto:?subject=Bagan 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bagan in 4 Days — 2,000 temples, e-bikes and hot air balloons over Myanmar&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        url="https://www.incredibleitinerary.com/blog/bagan-4-days"
        imageUrl="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80"
        description="Bagan in 4 Days: 2,000 Buddhist temples, hot air balloons at sunrise, e-bike rentals, and Myanmar&apos;s ancient plain — complete travel guide with real budget breakdown."
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
export default function BaganClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BAGAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bagan" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bagan myanmar temples pagodas sunrise plain ancient buddhist"
            fallback="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80"
            alt="Bagan Myanmar plain of temples and pagodas at sunrise with hot air balloons"
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
              <span className="text-white/70">Bagan 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Ancient Myanmar
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bagan in 4 Days:
                <em className="italic text-amber-300"> 2,000 Temples, Hot Air Balloons &amp; Myanmar&apos;s Ancient Plain</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                E-bike sunrise routes, hot air balloon booking tips, Ananda and Dhammayangyi temples, Shwesandaw Pagoda at dusk, and a full budget breakdown from $40/day. The complete 2026 guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏛️ Mandalay Region, Myanmar</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $40/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bagan is one of the great archaeological wonders of Asia — a flat alluvial plain studded with more than 2,000 Buddhist temples, pagodas, and monasteries built between the 9th and 13th centuries, when Bagan was the capital of the Pagan Kingdom and one of the most important cities in the Buddhist world.
            </p>
          </blockquote>

          {/* ── WHAT BAGAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏛️ What Bagan Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              At its height between the 11th and 13th centuries, the Pagan Kingdom&apos;s rulers constructed over 10,000 religious monuments across a 104-square-kilometre plain along the Irrawaddy River. Today roughly 2,000 survive in varying states of preservation, ranging from fully intact gilded pagodas to crumbling brick towers barely visible above the scrub. The scale only fully registers when you get on an e-bike and start riding — temples appear around every corner, behind every thicket of toddy palms, for kilometres in every direction.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The site was admitted to the UNESCO World Heritage List in 2019, a designation long delayed by political complications. Entry requires a $25 Bagan Archaeological Zone fee (paid at the airport or town gates), which funds conservation work across the site. The three main temple clusters — Old Bagan, New Bagan, and Nyaung-U — are spread across a surprisingly large area: getting between them by foot is not realistic. An e-bike rental ($8/day) is the standard and genuinely ideal way to explore, allowing you to stop at obscure temples off the main tourist path that guided tours skip entirely.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              A note on the current situation in Myanmar (2026): travellers should check their government&apos;s current travel advisory before booking. The Bagan archaeological zone has remained relatively stable and accessible throughout recent years, but conditions elsewhere in the country have been volatile. Most visitors arrive via Mandalay or Yangon on domestic flights, which operate normally. This guide focuses on Bagan itself and is written based on conditions as of early 2026.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🏛️" label="Temples & Pagodas" value="2,000+" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Feb" />
              <StatCard icon="🎈" label="Hot Air Balloon" value="From $350" />
              <StatCard icon="💰" label="Budget From" value="$40/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bagan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Cool Season — Best Time",
                  d: "20–30°C, low humidity, clear skies perfect for sunrise photography and balloon flights. November is slightly cooler and less crowded than December–February peak. The hot air balloon season runs exactly this window — if balloons are your priority, November through February is your only viable option.",
                  b: "Strongly recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–May",
                  i: "🌅",
                  t: "Hot Season — Bearable Early",
                  d: "30–40°C and climbing. March mornings are still manageable for e-biking before 9am. April and May are genuinely gruelling — the plain has no shade, the brick temples absorb and radiate heat, and the dust becomes pervasive. Balloon season closes in mid-March. Feasible only with early starts and afternoon rest.",
                  b: "Early mornings only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Monsoon — Dramatic but Challenging",
                  d: "Heavy rains June–August, tapering in September. Bagan receives less rain than the rest of Myanmar but the plain becomes muddy and some unpaved temple tracks are impassable. Visibility for photography can be poor. Almost no tourists — a real advantage if you can tolerate the conditions. Lush greenery between temples is striking.",
                  b: "For adventurous travellers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Oct",
                  i: "🌤️",
                  t: "Shoulder — Good Value",
                  d: "The rains taper off in October, temperatures drop, and the plain is still green from the monsoon. Hotels are significantly cheaper than peak season and the most photogenic temples are uncrowded. Balloon season has not yet started. A genuinely good compromise — good conditions, good prices, no balloon options.",
                  b: "Good value",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Bagan</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bagan has its own airport (Nyaung-U Airport, code NYU) — it receives domestic flights from Mandalay and Yangon. Almost all international travellers fly into Yangon first, then take a domestic connection. The $25 Bagan Archaeological Zone fee is collected at the airport arrival hall.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly from Mandalay (recommended)",
                  d: "Mandalay (MDL) → Nyaung-U Bagan (NYU): 30 minutes, $50–$80 one-way depending on airline and season. Airlines: Air KBZ, Myanmar National Airlines, Flymya. Fastest and most reliable option — avoids the long Irrawaddy road. From Nyaung-U Airport to Bagan hotels: taxi 15 mins, ~$5.",
                  b: "Fastest option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly from Yangon",
                  d: "Yangon (RGN) → Nyaung-U Bagan (NYU): 1 hour 20 minutes, $60–$100 one-way. Multiple daily flights operated by Myanmar National Airlines and Air KBZ. Most international travellers enter via Yangon International Airport — a domestic connection to Bagan is the standard routing.",
                  b: "Most common route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Overnight bus from Yangon",
                  d: "Yangon → Bagan (Nyaung-U bus station): 9 hours overnight, $12–$20 depending on bus class. JJ Express and Mandalar Minn operate comfortable VIP buses with reclining seats, AC, and a meal stop. Departs Yangon around 8pm, arrives Bagan around 5–6am — timing works perfectly for a sunrise arrival. Budget travellers&apos; preferred option.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚢",
                  t: "Irrawaddy River cruise from Mandalay",
                  d: "Mandalay → Bagan by slow boat: 10–12 hours downstream on the Irrawaddy River. MGRG Express and Malikha River Cruise operate this route. The slow boat ($25–$40) is a bucket-list experience in itself — sandbars, riverside villages, fisher boats. Upper deck seating offers wide river panoramas. Departs early morning, arrives Bagan in the late afternoon.",
                  b: "Scenic experience",
                  c: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Bagan Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the light — Bagan&apos;s golden hour is extraordinary at both ends of the day, and midday heat (especially October–April) makes it sensible to rest between noon and 3pm. E-bike is assumed throughout.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Nyaung-U Market · Shwezigon Pagoda · Shwesandaw Sunset"
                cost="$45–$65 (includes $25 zone fee + e-bike rental)"
                items={[
                  "Arrive Bagan, pay the $25 Bagan Archaeological Zone fee at the airport or town gate if not already collected. Check in to your hotel and rent an e-bike immediately — $8/day is the going rate and every guesthouse in Nyaung-U and Old Bagan can arrange one. The e-bike is the single most important decision you make in Bagan: it lets you reach remote temples in minutes and stop anywhere.",
                  "10am: Nyaung-U Market — the real working market of Bagan town, not set up for tourists. Lacquerware, palm sugar, dried fish, fresh produce, monks shopping for the day. A good orientation stop before the temples. Walk the whole covered section. 20–30 minutes.",
                  "11am: Shwezigon Pagoda, one of Bagan&apos;s most important active religious sites and the prototype for the classic Burmese bell-shaped stupa. Built by King Anawrahta in the 11th century, it established the architectural template that hundreds of subsequent pagodas across Myanmar would follow. The gold gilding is blinding in direct sun — visit in the morning light. Entry included in zone fee.",
                  "1pm–3pm: Rest at your hotel through the midday heat. This is non-negotiable in Bagan between November and April — the plain has very little shade and the brick temples radiate stored heat.",
                  "3:30pm: Ride east toward the cluster of temples between Nyaung-U and Old Bagan. Stop at Htilominlo Temple (built 1218 CE, one of the last great temples of the Pagan Kingdom) and Upali Thein ordination hall, which contains rare 17th-century murals.",
                  "5pm: Shwesandaw Pagoda for sunset — this is the most-visited sunset viewpoint in Bagan, a cylindrical pagoda rising five terraces to a stupa that commands panoramic views across the entire plain. Hundreds of temples visible in every direction as they turn gold in the dying light. Arrive 45 minutes before sunset. A genuine Bagan highlight despite the crowds.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Pre-dawn E-bike Sunrise · Ananda Temple · Thatbyinnyu · Dhammayangyi · Old Bagan"
                cost="$30–$50"
                items={[
                  "5am: This is the morning you set your alarm for. Ride your e-bike into the dark plain, find a small pagoda away from the main tourist viewpoints (ask your guesthouse for a specific tip — they all have one), and watch the sun rise through the mist over 2,000 temples. The mist in November–January is especially thick, and the plain turns deep orange and gold as the light comes up. Hot air balloons launch around 6am in peak season, drifting silently overhead as the temples emerge from the haze.",
                  "7:30am: Ananda Temple — the most celebrated and best-preserved temple in Bagan. Built by King Kyanzittha around 1105 CE, Ananda is a masterpiece of Mon architecture: a Greek cross plan, white-washed exterior, and four enormous gilded standing Buddhas (each 9.5 metres tall) occupying the four cardinal points of the interior. The interior is cool and dim even in the heat of the day. The craftsmanship of the stone carvings in the external corridors is extraordinary — 80 Jataka scenes carved in remarkable detail. Allow 1.5–2 hours.",
                  "10am: Thatbyinnyu Temple — at 61 metres, the tallest temple in Bagan. Built by King Alaungsithu in the mid-12th century. The exterior is severe and imposing; the interior, in contrast, has delicate plasterwork in the upper halls accessible via internal stairs (check current access conditions, as climbing rules change periodically). The view from the terraces when open is exceptional.",
                  "11am: Dhammayangyi Temple — the largest temple in Bagan by footprint, built by King Narathu in the 1160s. The outer corridors are famously dark and filled with bats; the brickwork in the outer walls is so precisely fitted that a pin cannot be inserted between the courses — King Narathu reportedly executed masons whose work didn&apos;t meet this standard. The inner sanctum was filled with rubble during the original construction and never completed, which gives it a uniquely brooding atmosphere.",
                  "1pm–3pm: Rest. Old Bagan village has a handful of cafes and restaurants — try Green Elephant or Sarabha II for lunch (see Eat section below).",
                  "4pm: Explore Old Bagan&apos;s quieter temple clusters by e-bike — Gubyaukgyi Temple (early 13th-century murals, considered among the finest in Bagan), Manuha Temple in Myinkaba (a claustrophobic but fascinating temple with oversized reclining Buddhas squeezed into small shrines, built by the captive Mon king Manuha to express his imprisonment). Return to Shwesandaw or find a quieter pagoda for sunset.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hot Air Balloon (optional) · South Plain Temples · Lacquerware Workshop · Irrawaddy Sunset"
                cost="$60–$400 (balloon $350–$430 additional)"
                items={[
                  "If you booked a hot air balloon ($350–$430 per person), today is likely your flight day — balloon operators typically assign dates based on weather windows and booking order. Flights depart at dawn (5:30–6am) and last approximately 45–60 minutes. The experience of floating over 2,000 temples as the sun rises is genuinely extraordinary and unlike anything else in Southeast Asia. Book well in advance (months ahead in peak season) through Balloons over Bagan or Oriental Ballooning. Both include hotel transfers.",
                  "If no balloon: 5:30am pre-dawn e-bike ride to a different viewpoint than Day 2. The southern plain around New Bagan has excellent, less-crowded sunrise temples — Lawkananda Pagoda on the Irrawaddy bank, the Payathonzu Temple complex (three connected shrines with rare Tantric murals), and the remote Tayok Pyi Pagoda are all worth the extra distance.",
                  "9am: Myinkaba village, 3km south of Old Bagan — the centre of Bagan&apos;s lacquerware industry. Stop at one of the family workshops (Moe Moe Lacquerware or Golden Cuckoo are both well-regarded) to watch the 8–12 layer lacquerware process from bamboo or horsehair base through to finished bowls and boxes. Prices are genuinely reasonable here compared to Yangon souvenir shops: $5–$50 for handmade pieces.",
                  "11am: Sulamani Temple — built by King Narapatisithu in 1183 CE and considered the finest example of late Pagan architectural refinement. The proportions are lighter and more elegant than the massive earlier temples, with elaborate decorative niches and some of Bagan&apos;s best surviving 12th-century murals in the lower corridors. Less visited than Ananda despite being arguably as impressive.",
                  "4pm: Irrawaddy River at sunset — ride to Lawkananda Pagoda, which sits directly above the west bank of the Irrawaddy. Watch the sun set over the river from the pagoda terrace. Long-tail boats and fishing craft pass below in the golden light. One of the quietest and most atmospheric sunset spots in Bagan, entirely free of the Shwesandaw crowds.",
                  "Evening: Dinner at Be Kind to Animals the Moon restaurant in Nyaung-U — the most celebrated restaurant in the Bagan area and a genuine standout (see Eat section). Book ahead in peak season.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Mount Popa Day Trip (optional) · Final Temple Wander · Departure"
                cost="$20–$60"
                items={[
                  "Optional day trip: Mount Popa, 50km southeast of Bagan — a volcanic plug rising 737 metres above the surrounding plain, topped with a monastery that houses 37 nat (spirit) shrines of enormous importance in Burmese animist tradition. The 777-step climb to the top (lined with monkeys who will steal your food and glasses — secure your belongings) rewards with panoramic views over the Bagan plain and the distant Irrawaddy Valley. Taxi from Bagan: $25–$35 round trip, 1.5 hours each way. Budget a full day.",
                  "If staying in Bagan for a fourth full day rather than day-tripping: use the morning for the smaller, undervisited temples you missed earlier. Pebinkyaung, Kondawgyi, and the brick ruins around Pwasaw village in the south plain are all genuine highlights that almost no casual visitors reach. Your guesthouse can mark them on a map.",
                  "Afternoon: Final walk through the Nyaung-U market area. Buy lacquerware, palm sugar candy (a Bagan specialty), and pickled tea leaves (lahpet) to take home. The Nyaung-U market stalls have the best selection and prices.",
                  "Late afternoon: Return your e-bike, settle your hotel bill. If flying out: Nyaung-U Airport is 3km from Nyaung-U town, taxi $3–$5. Domestic flights back to Yangon or Mandalay depart late afternoon and evening — confirm your flight time 24 hours before.",
                  "If doing the overnight bus back to Yangon: buses depart from Nyaung-U bus station at approximately 5–6pm, arriving Yangon early morning. Stock up on water and snacks from the market before boarding.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bagan" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏯 Temple &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry is covered by the $25 Bagan Archaeological Zone fee — no additional charges at individual temples. Climbing rules on temple terraces change periodically; check current conditions with your guesthouse on arrival.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ananda Temple",
                  e: "Included in $25 zone fee",
                  d: "The crown jewel of Bagan — a perfectly preserved 11th-century temple (built c. 1105 CE) with four 9.5-metre gilded standing Buddhas, extraordinary stone carvings of 80 Jataka tales, and a Mon architectural masterpiece. The white-washed exterior glows golden at sunrise. The finest single temple in Myanmar by most measures. Allow 1.5–2 hours.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Dhammayangyi Temple",
                  e: "Included in $25 zone fee",
                  d: "The largest temple in Bagan by footprint (1160s CE), built by the feared King Narathu. Dark, bat-filled outer corridors, impossibly precise brickwork (reportedly no pin can fit between the courses), and an incomplete inner sanctum filled with rubble — giving it the most atmospheric interior in all of Bagan. Not beautiful, but deeply compelling.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Shwesandaw Pagoda",
                  e: "Included in $25 zone fee",
                  d: "The premier sunset viewpoint in Bagan — five cylindrical terraces rising to a stupa with 360-degree views across the temple plain. Built by King Anawrahta in 1057 CE to enshrine a Buddha hair relic. The most crowded spot in Bagan at sunset but the view justifies it. Arrive 45+ minutes before sunset.",
                  t: "Sunset essential · 1 hr",
                },
                {
                  n: "Shwezigon Pagoda",
                  e: "Included in $25 zone fee",
                  d: "The prototype Burmese bell-shaped stupa, begun by King Anawrahta around 1060 CE and completed by Kyanzittha. Heavily gilded and still an active place of worship — one of the most sacred pagodas in Myanmar. The surrounding complex has smaller shrines, nat figures, and a genuine atmosphere of active Buddhist practice.",
                  t: "Active shrine · 45 min",
                },
                {
                  n: "Thatbyinnyu Temple",
                  e: "Included in $25 zone fee",
                  d: "At 61 metres, the tallest temple in Bagan, built by Alaungsithu in the mid-12th century. The sheer scale of the exterior is impressive; the internal plasterwork in the upper halls is refined. One of the best examples of the two-storey hollow temple form that succeeded the earlier solid stupa design.",
                  t: "Impressive scale · 1 hr",
                },
                {
                  n: "Sulamani Temple",
                  e: "Included in $25 zone fee",
                  d: "Built 1183 CE by Narapatisithu — considered by many scholars the finest temple of the late Pagan period. Lighter proportions than the massive earlier temples, with some of Bagan&apos;s best surviving 12th-century murals in the lower corridor niches. Significantly less visited than Ananda or Dhammayangyi.",
                  t: "Underrated · 1 hr",
                },
                {
                  n: "Lacquerware Workshops (Myinkaba)",
                  e: "Free to visit",
                  d: "The village of Myinkaba, 3km south of Old Bagan, is the centre of Bagan&apos;s traditional lacquerware industry. Family workshops produce hand-layered bowls, boxes, and trays using bamboo or horsehair frames with 8–12 coats of lacquer. Visiting is free and genuinely interesting; buying direct supports the craftspeople at better prices than any souvenir shop.",
                  t: "Cultural visit · 45 min",
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
            title="Bagan — Temples, Balloons &amp; the Irrawaddy Plain"
            subtitle="Myanmar&apos;s ancient capital in morning mist and golden-hour light."
            spots={[
              {
                name: "Bagan Temples at Sunrise",
                query: "bagan myanmar temples pagodas sunrise mist plain ancient buddhist",
                desc: "The Bagan plain at dawn — 2,000 temples emerging from morning mist as hot air balloons drift silently overhead.",
              },
              {
                name: "Ananda Temple",
                query: "ananda temple bagan myanmar white pagoda 11th century buddhist",
                desc: "Ananda Temple — built c. 1105 CE, the best-preserved and most celebrated temple in Bagan, with four gilded 9.5-metre Buddhas.",
              },
              {
                name: "Hot Air Balloons over Bagan",
                query: "hot air balloon bagan myanmar sunrise temples aerial",
                desc: "Hot air balloons over the Bagan plain at sunrise — one of the most iconic travel experiences in Southeast Asia.",
              },
              {
                name: "Dhammayangyi Temple",
                query: "dhammayangyi temple bagan myanmar largest ancient brick",
                desc: "Dhammayangyi — the largest temple in Bagan by footprint, built in the 1160s with famously precise brickwork.",
              },
              {
                name: "Irrawaddy River Bagan",
                query: "irrawaddy river bagan myanmar sunset boat pagoda",
                desc: "The Irrawaddy River at Bagan — fishing boats and the Lawkananda Pagoda silhouetted in the late afternoon light.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bagan is affordable by international standards once you account for the $25 zone fee and flights. The hot air balloon is a significant optional splurge. All prices in USD and approximate MMK equivalents (1 USD ≈ 2,100 MMK at informal rates as of early 2026 — note: Myanmar currency exchange is complex and rates fluctuate).
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
                    ["✈️ Flights to/from Bagan", "$50–$80", "$60–$100", "$100–$200"],
                    ["🏛️ Zone fee (one-time)", "$25", "$25", "$25"],
                    ["🏨 Accommodation (3 nights)", "$30–$60", "$120–$270", "$450–$900"],
                    ["🛵 E-bike rental (3 days)", "$24", "$24", "$24"],
                    ["🍽 Food (4 days)", "$20–$40", "$60–$120", "$160–$320"],
                    ["🎈 Hot air balloon (optional)", "—", "$350–$430", "$350–$430"],
                    ["🚕 Local transport + tips", "$10–$20", "$20–$40", "$40–$80"],
                    ["TOTAL per person (no balloon)", "$159–$249", "$309–$579", "$799–$1,549"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($40–$65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouse in Nyaung-U ($10–$20/night), eat at local teahouses and Sarabha II, e-bike everywhere. Perfectly comfortable — Bagan&apos;s backpacker infrastructure is well-developed.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($100–$150/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel like Thazin Garden or Bagan Thande ($40–$90/night), dinner at Be Kind to Animals the Moon, guided half-day. The sweet spot for comfort without overpaying.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury ($250+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Aureum Palace Bagan ($150–$300/night), hot air balloon, private guide and driver, Irrawaddy dinner cruise. Bagan&apos;s luxury tier is excellent value by international standards.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bagan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hotels are spread across three areas: Nyaung-U (the main town — closest to the market, bus station, and airport), Old Bagan (the archaeological zone itself — quieter, surrounded by temples), and New Bagan (3km south, mostly budget guesthouses). Old Bagan hotels fill fastest in peak season — book three to four months ahead if visiting November–January.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Aureum Palace Bagan",
                  type: "Luxury resort · Old Bagan archaeological zone",
                  price: "From $150/night",
                  badge: "Most prestigious",
                  desc: "A colonial-style luxury resort set within the archaeological zone itself, surrounded by ancient temples. Private pool villas, a stunning outdoor pool, and some of the most dramatic temple views available from any hotel in Bagan. Book well in advance for November–February.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Thazin Garden Hotel",
                  type: "Boutique mid-range · Old Bagan",
                  price: "From $60/night",
                  badge: "Best mid-range",
                  desc: "Spacious bungalows set in lush tropical gardens adjacent to Old Bagan village. Pool, good restaurant, attentive service, and a genuinely relaxed atmosphere. Walking distance to several major temples. The best value mid-range option in Bagan&apos;s premium location.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Bagan Thande Hotel",
                  type: "Heritage colonial · Old Bagan riverfront",
                  price: "From $80/night",
                  badge: "Most historic",
                  desc: "The oldest hotel in Bagan, originally built in 1922 to accommodate visitors arriving by Irrawaddy steamboat. Riverfront location with direct views over the water and a breezy veranda. Heritage rooms retain period character; the setting is irreplaceable. Some rooms show age — inspect before confirming.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Budget Guesthouses (Nyaung-U)",
                  type: "Budget · Nyaung-U town",
                  price: "$10–$25/night",
                  badge: "Best budget",
                  desc: "Nyaung-U has the best concentration of budget guesthouses — clean rooms, helpful staff, and proximity to the market and bus station. Ostello Bello, Bagan Yazagyo, and Golden Myanmar Guesthouse are consistently well-reviewed. Most can arrange e-bike rentals and temple maps.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bagan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bagan&apos;s restaurant scene ranges from excellent fine dining (Be Kind to Animals the Moon is genuinely world-class) to simple teahouses serving mohinga (rice noodle fish soup) and samosas for $1. The best local food is in Nyaung-U market and the tea shops around the bus station area.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Be Kind to Animals the Moon",
                  t: "Fine dining · Nyaung-U",
                  d: "The best restaurant in the Bagan area and one of the most celebrated in Myanmar. The French-Burmese owner-chef serves a menu of refined Burmese and international dishes in a beautiful garden setting — prawn curry with palm sugar, lacquered duck, coconut milk desserts. $15–$30 per person with drinks. Book ahead in peak season. Worth every kyat.",
                  b: "Best in Bagan",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sarabha II",
                  t: "Burmese-Asian · Old Bagan village",
                  d: "A solid, popular restaurant in Old Bagan village serving Burmese curries, stir-fries, and set meals. Good range of vegetable dishes, fresh fish when available, and cold beer. An unpretentious spot that delivers consistent quality at reasonable prices — $5–$10 per person. The terrace has views over the temple plain.",
                  b: "Reliable choice",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Green Elephant",
                  t: "Burmese cuisine · Multiple Bagan locations",
                  d: "A Myanmar restaurant brand with a long-standing reputation for accessible Burmese cuisine. The Bagan location serves traditional mohinga, shan noodles, tofu curry, and set lunch menus that introduce unfamiliar visitors to the range of Burmese cooking styles. $6–$12 per person. Reliable and comfortable.",
                  b: "Great for Burmese cuisine",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Nyaung-U Market Teahouses",
                  t: "Local breakfast · Nyaung-U",
                  d: "The market teahouses around Nyaung-U open from 5am — mohinga (fish noodle soup, the national breakfast dish), samosas, fried bread with bean paste, and sweet tea for $0.50–$1.50. This is where the local population eats. The best way to start any Bagan day, and the most accurate taste of real Burmese food available in the tourist zone.",
                  b: "Authentic local",
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
            destination="Bagan Myanmar"
            hotels={[
              {
                name: "Aureum Palace Bagan",
                type: "Luxury resort · Within the archaeological zone",
                price: "From $150/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/mm/aureum-palace-bagan.html?aid=2820480",
              },
              {
                name: "Thazin Garden Hotel",
                type: "Boutique · Old Bagan village",
                price: "From $60/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/mm/thazin-garden-bagan.html?aid=2820480",
              },
              {
                name: "Bagan Thande Hotel",
                type: "Heritage colonial · Old Bagan riverfront",
                price: "From $80/night",
                rating: "4",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/mm/bagan-thande.html?aid=2820480",
              },
              {
                name: "Ostello Bello Bagan",
                type: "Boutique guesthouse · Nyaung-U",
                price: "From $15/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/mm/ostello-bello-bagan.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hot Air Balloon over Bagan",
                duration: "45–60 min flight",
                price: "From $350/person",
                badge: "Bucket list",
                url: "https://www.getyourguide.com/s/?q=bagan+hot+air+balloon&partner_id=PSZA5UI",
              },
              {
                name: "Bagan Full Day Temple Tour by E-bike",
                duration: "8 hrs",
                price: "From $25/person",
                badge: "Best value",
                url: "https://www.getyourguide.com/s/?q=bagan+temple+tour+ebike&partner_id=PSZA5UI",
              },
              {
                name: "Irrawaddy River Sunset Cruise",
                duration: "2 hrs",
                price: "From $20/person",
                badge: "Scenic",
                url: "https://www.getyourguide.com/s/?q=bagan+irrawaddy+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Bagan Lacquerware Workshop Tour",
                duration: "2 hrs",
                price: "From $15/person",
                url: "https://www.getyourguide.com/s/?q=bagan+lacquerware+workshop&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── COMMON MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⚠️ Mistakes to Avoid in Bagan</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚌",
                  title: "Only doing the guided bus tour circuit",
                  desc: "The standard day-tour covers Shwesandaw, Ananda, Dhammayangyi, and maybe Sulamani — the same five temples every tourist sees. An e-bike gives you access to the other 1,990+ temples, most of which you&apos;ll have entirely to yourself. The obscure temples are often the most atmospheric.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌅",
                  title: "Skipping the pre-dawn e-bike ride",
                  desc: "The single most praised experience in Bagan is riding an e-bike into the dark plain before dawn and watching the sun rise over the temples in the mist. This requires actually getting up at 4:30–5am. Many travellers oversleep and spend the rest of their trip regretting it.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎈",
                  title: "Leaving the balloon booking too late",
                  desc: "Hot air balloon flights over Bagan ($350–$430) sell out months in advance during November–February peak season. Balloons over Bagan and Oriental Ballooning both open bookings from around August for the following November season. If the balloon is on your list, book before you book your flights.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💵",
                  title: "Arriving without USD cash",
                  desc: "Myanmar&apos;s banking system remains constrained. ATMs in Nyaung-U work intermittently, and international cards are not accepted at most guesthouses, restaurants, or e-bike rentals. Bring crisp, undamaged USD bills (post-2010 preferred) — the $25 zone fee, e-bikes, most guesthouses, and many restaurants deal primarily in USD or MMK exchanged from USD.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "👟",
                  title: "Wearing shoes inside every temple",
                  desc: "All Buddhist temples and pagodas in Myanmar require removal of shoes and socks — this is mandatory and enforced. Wear slip-on shoes or sandals. The stone and brick floors of the main temples can be extremely hot in the midday sun (October–April) — plan accordingly by visiting in early morning when the stone is cool.",
                  color: "bg-green-50 border-green-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bagan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🛵",
                  title: "E-bike is the only way to explore properly",
                  desc: "An e-bike ($8/day) changes what Bagan is. The site is 104 square kilometres — far too large to cover meaningfully on foot or by a tour van that follows a fixed circuit. An e-bike lets you navigate to GPS coordinates of obscure temples, stop spontaneously, and arrive at the most famous viewpoints 20 minutes before everyone else on a taxi tour.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Find your own sunrise spot",
                  desc: "Shwesandaw is spectacular but you&apos;ll share it with 300 other people. Ask your guesthouse for a less-visited pagoda with a high terrace — they all know several. Arriving alone at a crumbling 12th-century pagoda as the sun comes up over 2,000 temples is a different experience entirely from the crowd at the main viewpoints.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💰",
                  title: "Bring all your USD from home",
                  desc: "Crisp, undamaged USD bills — $100s and $50s preferred, printed after 2010. Myanmar&apos;s currency exchange works through informal money changers who offer the best rates. Damaged or pre-2010 notes are refused or get significantly worse rates. Do not rely on ATMs in Bagan — they are unreliable.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏛️",
                  title: "Go inside the temples, not just past them",
                  desc: "The interiors of Bagan&apos;s temples are often better than the exteriors — cool corridors, ancient murals, giant gilded Buddhas in near-darkness. Many visitors ride past temples without stopping to go in. Ananda, Sulamani, Htilominlo, and Gubyaukgyi all have interiors worth 20–30 minutes each.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎨",
                  title: "Buy lacquerware direct from Myinkaba workshops",
                  desc: "The lacquerware sold in Old Bagan souvenir shops is typically lower quality and 30–50% more expensive than buying direct at the Myinkaba workshops. A handmade lacquerware bowl with 8+ layers takes weeks to produce and costs $10–$30 at source. The workshop visits are free and genuinely interesting.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚢",
                  title: "Consider the Irrawaddy boat from Mandalay",
                  desc: "The 10–12 hour slow boat from Mandalay to Bagan ($25–$40) is one of those travel experiences that justifies the extra time. Upper-deck seating, riverside village stops, sandbars and fishing scenes. If your schedule allows an extra day, do the boat one-way and fly back.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bagan" />

          {/* Combine With */}
          <CombineWith currentSlug="bagan-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get to Bagan from Yangon?",
                  a: "The most common route is a domestic flight from Yangon International Airport (RGN) to Nyaung-U Airport (NYU) — approximately 1 hour 20 minutes, $60–$100 one-way, operated by Myanmar National Airlines and Air KBZ. The budget alternative is an overnight bus from Yangon (9 hours, $12–$20) operated by JJ Express or Mandalar Minn — departures around 8pm arrive in time for a sunrise e-bike ride. From Mandalay, a 30-minute flight costs $50–$80; the scenic alternative is the 10–12 hour slow boat down the Irrawaddy ($25–$40).",
                },
                {
                  q: "How much does the hot air balloon over Bagan cost and how do I book?",
                  a: "Hot air balloon flights over Bagan cost $350–$430 per person for a 45–60 minute flight including hotel transfers and a post-flight breakfast. The two main operators are Balloons over Bagan and Oriental Ballooning — both reputable with excellent safety records. Balloon season runs November through mid-March only (cool season, stable winds). Flights sell out months in advance for November–January; book as soon as your dates are confirmed. If your assigned flight date is cancelled for weather, operators typically reschedule within your stay or offer a refund.",
                },
                {
                  q: "Is Bagan safe to visit in 2026?",
                  a: "The Bagan archaeological zone itself has remained stable and accessible. Most travel advisories distinguish between Bagan (low direct risk) and parts of Myanmar affected by the ongoing civil conflict (higher risk). Check your government&apos;s current travel advisory before booking — the UK FCDO, US State Department, and Australian DFAT all publish regularly updated Myanmar guidance. The practical advice most travellers follow: fly directly into Bagan (Nyaung-U), stay within the archaeological zone, and avoid road travel to or from Mandalay or Yangon if the security situation along those routes is uncertain.",
                },
                {
                  q: "What is the $25 Bagan Archaeological Zone fee?",
                  a: "The Bagan Archaeological Zone fee is $25 per person (payable in USD or MMK equivalent), charged to all foreign visitors on entry. It is collected at Nyaung-U Airport arrivals hall or at the main road checkpoints entering Bagan by bus. The fee covers entry to all temples within the zone for the duration of your stay — there are no additional per-temple charges. The revenue funds conservation and restoration work across the site. Keep your receipt as it is occasionally checked at temple entrances.",
                },
                {
                  q: "How many days do you need in Bagan?",
                  a: "Four days is the ideal minimum for a thorough visit. Two days is enough to see the major temples (Ananda, Dhammayangyi, Shwesandaw, Shwezigon) but you will feel rushed and miss the more atmospheric off-path temples entirely. Three days covers the essentials comfortably. Four days allows for a Mount Popa day trip, time at the Myinkaba lacquerware workshops, a proper Irrawaddy sunset, and the luxury of wandering without an agenda — which is often when Bagan is best.",
                },
                {
                  q: "What currency do I need in Bagan and can I use ATMs?",
                  a: "Myanmar&apos;s financial system remains constrained following political changes in 2021. ATMs in Nyaung-U exist but are unreliable — they frequently run out of cash or reject international cards. The practical reality for most travellers: bring all the USD cash you need for your Bagan stay from home. Crisp, undamaged bills printed after 2010 are preferred; $100 and $50 denominations get the best exchange rates at local money changers. The $25 zone fee, e-bike rentals, most guesthouses, and many restaurants in the tourist zone price in USD. Change USD to MMK at the rates available locally for market food and small purchases.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bagan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/bagan-hot-air-balloon-guide", label: "Balloon booking guide", icon: "🎈" },
                { href: "/blog/bagan-budget-breakdown", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/myanmar-travel-tips-2026", label: "Myanmar tips 2026", icon: "📋" },
                { href: "/blog/mandalay-to-bagan-guide", label: "Mandalay to Bagan", icon: "✈️" },
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
          <RelatedGuides currentSlug="bagan-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Angkor Wat 3 Days — Temples of Cambodia", href: "/blog/angkor-wat-3-days" },
                { label: "Luang Prabang 4 Days — Laos Heritage", href: "/blog/luang-prabang-4-days" },
                { label: "Chiang Mai 4 Days — Northern Thailand", href: "/blog/chiang-mai-4-days" },
                { label: "Mandalay 3 Days — Myanmar&apos;s Royal City", href: "/blog/mandalay-3-days" },
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
