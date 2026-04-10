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
const AMMAN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Amman Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
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
          href: `mailto:?subject=Amman 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Amman in 4 Days — Petra, Wadi Rum, Dead Sea & Rainbow Street&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/amman-4-days"
        imageUrl="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
        description="Amman in 4 Days: Citadel, Petra day trip, Wadi Rum desert camp, Dead Sea float, mansaf lamb and Rainbow Street — complete Jordan travel guide with budget breakdown."
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
export default function AmmanClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AMMAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Amman" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="amman jordan citadel city skyline roman temple hercules"
            fallback="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
            alt="Amman city panorama from the Citadel hill with the Roman Temple of Hercules in the foreground"
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
              <span className="text-white/70">Amman 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Middle East
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Amman in 4 Days:
                <em className="italic text-amber-300"> Petra, Wadi Rum, Dead Sea &amp; Rainbow Street</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Middle East&apos;s most underestimated capital — Roman temples above living souks, the best mansaf you&apos;ll ever eat on a plastic table, and day trips to two UNESCO sites in opposite directions.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇯🇴 Amman, Jordan</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From JOD 30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Amman is the Middle East&apos;s most underestimated capital — a city of hills where a Roman temple sits above a living souk, where the best mansaf lamb you will ever eat is served on newspaper on a plastic table, and where day trips reach two UNESCO World Heritage sites in opposite directions.
            </p>
          </blockquote>

          {/* ── WHAT AMMAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Amman Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Jordan is one of the most welcoming and safest countries in the Middle East for tourism. Amman itself is a modern, walkable capital built across seven — now closer to nineteen — hills, each neighbourhood with a distinct character. The old city (Downtown, or Al-Balad) sits in the valley between the hills. The Roman Citadel (Jabal al-Qala&apos;a) rises above it all, and from its terrace you can see the Temple of Hercules, the Umayyad Palace, and the white limestone sprawl of the city extending in every direction.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Roman Theatre below the Citadel seats 6,000 and is one of the best-preserved Roman structures in the Middle East. Rainbow Street, a fifteen-minute walk uphill, is Amman&apos;s cafe and restaurant district — a narrow road lined with art galleries, independent coffee shops, and the best views over the old city at dusk. The souk labyrinth between the first and third circles is full of spice merchants, gold vendors, and dried-fruit stalls that have been there for decades.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And then there are the day trips. Petra — the Nabataean rose-red city carved into sandstone cliffs — is a three-hour drive south. Wadi Rum&apos;s Martian red desert is four hours away. The Dead Sea, the lowest point on Earth, is less than an hour. Four days in Amman unlocks all of this.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="AMM" />
              <StatCard icon="🌡️" label="Best Months" value="Mar–May / Sep–Nov" />
              <StatCard icon="🏛️" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="JOD 30/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Amman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–26°C, warm and dry. Wildflowers across the Jordan highlands, Petra crowds 30–40% lower than peak winter. The Treasury and the Monastery are comfortable to explore all day. Ideal for combining Amman with Petra and Wadi Rum.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent Alternative",
                  d: "20–28°C, dropping to cool evenings. The summer heat has broken, Wadi Rum nights are comfortable, and the Dead Sea is warm enough for a long float. September is still busy; October and November are the sweet spot.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Hot, Avoid If Possible",
                  d: "Wadi Rum reaches 45°C and Petra&apos;s sandstone cliffs reflect intense heat. July and August are the hardest months for outdoor sightseeing. Amman itself is slightly cooler at elevation (30–35°C) but Petra and Wadi Rum are genuinely punishing.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cool & Quiet",
                  d: "Amman can see frost and occasional snow in January. Petra and Wadi Rum are cold at night (0°C). But crowds are minimal and the Treasury in winter morning light is extraordinary. Bring layers — Wadi Rum winter nights require a sleeping bag even in Bedouin camps.",
                  b: "For low-season travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Amman</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Queen Alia International Airport (AMM) is 35km south of the city centre. Most nationalities — including Indian, US, UK, EU, and Australian passport holders — receive a <strong className="font-medium">Visa on Arrival</strong> (JOD 40). If you plan to visit Petra, buy the <strong className="font-medium">Jordan Pass at jordanpass.jo before you fly</strong> — it covers the visa fee and Petra entry, saving JOD 15+.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India (recommended)",
                  d: "Direct and one-stop flights from Delhi, Mumbai, and Bangalore to Amman AMM via Air Arabia, IndiGo, flydubai, and Royal Jordanian. Flight time 4–7 hours depending on routing. Book 6–8 weeks ahead for the best fares (USD 250–450 return from India).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe / USA",
                  d: "Royal Jordanian operates direct routes from London, Paris, Frankfurt, and New York JFK. One-stop connections via Istanbul, Dubai, or Doha available from most European cities. Flight time from London: 5 hours direct.",
                  b: "Good connections",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "JETT Bus to Petra (Wadi Musa)",
                  d: "JETT operates a daily air-conditioned coach from Abdali Bus Station in Amman to Petra (Wadi Musa). Departs 06:30, arrives ~09:30. JOD 12 one-way, JOD 22 return. Book tickets the day before at the JETT office or online at jett.com.jo.",
                  b: "Budget-friendly",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Airport to City Centre",
                  d: "Express Bus No. 703 from AMM to Downtown Amman: JOD 3.5, 45 minutes. Fixed-price taxi from the airport: JOD 20–25 to central Amman. Uber is available from the airport and far more predictable than hailed taxis for first-time arrivals.",
                  b: "Easy transfer",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Amman Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured so that Day 1 and Day 4 are Amman-based, with Days 2 and 3 as day trips to Jordan&apos;s headline attractions. Prices shown in both JOD (Jordanian Dinar) and approximate USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Citadel · Roman Theatre · Downtown Souks · Rainbow Street"
                cost="JOD 12–18 (~USD 17–25)"
                items={[
                  "09:00 — Amman Citadel (Jabal al-Qala'a) — entry JOD 3 (~USD 4). The hilltop holds the Roman Temple of Hercules (2nd century CE), the Umayyad Palace, and the Jordan Archaeological Museum. Views over Amman's white-stone hills are free from the citadel terrace — one of the best panoramas in the Middle East.",
                  "11:00 — Walk or take a short taxi down to the Roman Theatre in Downtown — entry JOD 3 (~USD 4). The 2nd-century theatre seats 6,000 and is one of the best-preserved Roman structures in the Arab world. Two small museums flank the stage — the Museum of Popular Traditions and the Folklore Museum.",
                  "12:30 — Lunch at Hashem Restaurant in Downtown (open since 1952, no reservations, always crowded with Jordanians). Foul (fava beans), hummus, and falafel with warm flatbread for under JOD 3/person (~USD 4). This is the most authentic budget meal in Amman.",
                  "14:30 — Walk the Gold Souk and nearby spice markets between the 1st and 3rd circles. Browse silver jewellery, dried fruit, and za'atar stalls. The souk labyrinth is atmospheric and unhurried — Amman's souks feel less touristy than most Middle Eastern cities.",
                  "19:00 — Rainbow Street in the evening: Amman's hill-top strip of cafes, galleries, and boutiques. A slice of knafeh (hot cheese pastry soaked in orange-blossom syrup) from a street vendor costs JOD 1 (~USD 1.4). Find a cafe terrace seat with views over the old city at dusk.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Petra Day Trip — Treasury · Colonnaded Street · Monastery"
                cost="JOD 65–75 (~USD 92–106) without Jordan Pass; free entry with Jordan Pass"
                items={[
                  "05:30 — Depart Amman by JETT bus to Petra (JOD 12 return, departs 06:30 from Abdali station). The 3-hour journey through the King's Highway landscape is worth doing in daylight — Jordanian highlands, Roman ruins at Madaba, and the gradual descent into Nabataean country.",
                  "09:30 — Enter Petra through the Siq gorge — the 1.2km sandstone canyon narrows to 3 metres wide before revealing the Treasury (Al-Khazneh). Arriving before 10:00 means seeing it before the main tour groups arrive. Entry included with Jordan Pass or JOD 50 (~USD 70) day ticket.",
                  "11:00 — Walk the Colonnaded Street to the Great Temple, the Qasr al-Bint Nabataean temple, and the Royal Tombs carved into the pink sandstone cliffs. The scale of the Nabataean city only becomes clear as you walk further in — this was a metropolis of 30,000 people.",
                  "13:00 — Lunch at a cave restaurant inside Petra near the Basin area (JOD 6–8, ~USD 8–11 for a vegetable dish and flatbread). Several basic restaurants operate inside the site.",
                  "15:00 — Hike to the Monastery (Ad Deir) — 800 steps up, 45-minute climb. The Monastery is even larger than the Treasury and has far fewer visitors. The views from the terrace are panoramic across the Wadi Araba valley.",
                  "17:00 — Return to the Petra Visitor Centre and board the JETT bus back to Amman (arrives approximately 20:00).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Wadi Rum Desert Camp · Jeep Tour · Bedouin Stargazing"
                cost="JOD 70–90 (~USD 99–127) budget; JOD 200–250 (~USD 282–352) mid-range"
                items={[
                  "07:00 — Shared minivan from Amman to Wadi Rum village (JOD 15–18, ~USD 21–25, departs Wehdat Bus Station). The 4-hour journey through the south of Jordan passes through Petra country and the desert highway — pay attention to the landscape transition.",
                  "11:30 — Arrive at Wadi Rum: entry fee JOD 5 (~USD 7). Arrange a 4x4 jeep tour with a local Bedouin driver at the Visitor Centre (JOD 25–35, ~USD 35–49 for 3 hours). Stops include Lawrence Spring, Mushroom Rock, Khazali Canyon Nabataean inscriptions, and the vast red sand dunes.",
                  "17:00 — Check into a budget Bedouin camp (JOD 25–35/night, ~USD 35–49, all-inclusive). Dinner is mansaf lamb or zarb (underground Bedouin barbecue slow-cooked in a pit), Bedouin tea around the fire, and a sky full of stars that's visible with the naked eye.",
                  "20:00 — Wadi Rum after dark: the absence of light pollution makes the Milky Way clearly visible without a telescope. Temperature drops significantly — bring a warm layer even in spring. The silence of the desert at night is one of Jordan's great experiences.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Dead Sea Float · Jerash Roman Ruins · King Abdullah Mosque"
                cost="JOD 40–60 (~USD 56–85)"
                items={[
                  "07:00 — Return bus or shared taxi from Wadi Rum to the Dead Sea highway (JOD 8–15, ~USD 11–21). The Dead Sea public beach at Amman Beach (JOD 20 day entry, ~USD 28, includes sunbeds and shower facilities) is the most accessible entry point.",
                  "11:00 — Float on the Dead Sea — the 33% salinity means you cannot sink. Smear the therapeutic black mud, rinse in the fresh-water showers, and note the extraordinary stillness of the water at the lowest point on Earth (430m below sea level). The Israeli hills are visible across the water on a clear day.",
                  "14:00 — Shared taxi or Uber north to Jerash (JOD 8–12, ~USD 11–17, 1.5 hours from Dead Sea). Jerash is the best-preserved Roman provincial city in the world — colonnaded streets, triumphal arches, two theatres, and a hippodrome, all remarkably intact. Entry JOD 10 (~USD 14).",
                  "16:00 — Return to Amman. Stop at King Abdullah Mosque — one of the largest mosques in Jordan, open to non-Muslim visitors (entry JOD 2, ~USD 3, modest dress required). The interior can hold 7,000 worshippers and the blue dome is a landmark on Amman's skyline.",
                  "19:00 — Final dinner in Amman: mansaf at Sufra Restaurant on Rainbow Street (JOD 8–12, ~USD 11–17) before airport transfer. Uber to Queen Alia International Airport: JOD 20 (~USD 28).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Amman" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. Entry fees as of early 2026. The Jordan Pass (from JOD 70, purchased at jordanpass.jo before arrival) covers Petra and 40+ other sites — by far the best value for any multi-day Jordan itinerary.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Petra — The Treasury (Al-Khazneh)",
                  e: "JOD 50 (~USD 70) 1 day / Jordan Pass covers entry",
                  d: "The rose-red Nabataean treasury carved directly into a sandstone cliff, revealed at the end of the Siq gorge. One of the New Seven Wonders of the World and the defining image of Jordan. Arrive before 09:00 for near-solitude in the Siq. The site extends 26 square kilometres beyond the Treasury — most visitors see only 20% of Petra.",
                  t: "Must see · Full day",
                },
                {
                  n: "Wadi Rum Protected Area",
                  e: "JOD 5 (~USD 7) entry",
                  d: "A vast protected desert of red sandstone and granite mountains in southern Jordan. The filming location for Lawrence of Arabia, The Martian, and Dune. Jeep tours visit Lawrence Spring, Khazali Canyon, Mushroom Rock, and the sand dunes. Staying overnight in a Bedouin camp (JOD 25–120/night) is the defining Wadi Rum experience.",
                  t: "Must do · Overnight recommended",
                },
                {
                  n: "Amman Citadel (Jabal al-Qala'a)",
                  e: "JOD 3 (~USD 4)",
                  d: "The hilltop acropolis above Downtown Amman — occupied continuously since the Bronze Age (3,200+ years). Contains the Roman Temple of Hercules, the Umayyad Palace, and the Jordan Archaeological Museum. The terrace views over Amman are some of the best in the city and are free.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Roman Theatre",
                  e: "JOD 3 (~USD 4)",
                  d: "A 6,000-seat Roman theatre built in the 2nd century CE into the hillside of Downtown Amman. One of the most intact Roman theatres in the Arab world. Two museums flank the stage. The acoustics are extraordinary — clap from the top row and the stage echoes it back clearly.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Dead Sea",
                  e: "JOD 20 (~USD 28) public beach day entry",
                  d: "The lowest point on Earth at 430m below sea level. The 33% salinity makes swimming impossible but floating effortless. Therapeutic black mud is free from the shoreline. The shore recedes approximately 1 metre per year — the Dead Sea is shrinking. Public beach (Amman Beach) is the most affordable access.",
                  t: "Unmissable · Half day",
                },
                {
                  n: "Jerash Roman City",
                  e: "JOD 10 (~USD 14)",
                  d: "The best-preserved Roman provincial city in the world — better maintained and less visited than Petra. Colonnaded Cardo Maximus, two theatres, a triumphal arch, and the Forum ellipse are all intact. 1 hour north of Amman. Budget 2–3 hours for a full visit.",
                  t: "Highly recommended · Half day",
                },
                {
                  n: "Rainbow Street",
                  e: "Free",
                  d: "Amman&apos;s most atmospheric street — a narrow hill road in Jabal Amman lined with independent cafes, art galleries, Bedouin jewellery boutiques, and the best knafeh vendors in the city. Best visited at dusk for the views over the old city. The Wild Jordan Cafe has the best juices in Amman.",
                  t: "Evening essential · 1–2 hrs",
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
            title="Amman &amp; Jordan — Citadel, Petra &amp; the Desert"
            subtitle="Roman temples above living souks, rose-red Nabataean tombs, and Martian red sands."
            spots={[
              {
                name: "Petra Treasury (Al-Khazneh)",
                query: "petra treasury al-khazneh nabataean jordan rose-red sandstone",
                desc: "The Treasury carved into rose-red sandstone at the end of the Siq gorge — one of the most extraordinary archaeological sites on Earth.",
              },
              {
                name: "Amman Citadel",
                query: "amman citadel jabal qalaa roman temple hercules jordan skyline",
                desc: "The Roman Temple of Hercules on the Amman Citadel — 2nd-century CE columns rising above the white limestone city.",
              },
              {
                name: "Wadi Rum Desert",
                query: "wadi rum desert jordan red sand dunes bedouin camp martian landscape",
                desc: "The extraordinary red sand and sandstone landscape of Wadi Rum — the filming location for Lawrence of Arabia and The Martian.",
              },
              {
                name: "Dead Sea Float",
                query: "dead sea jordan float salt water mineral mud lowest point earth",
                desc: "Floating effortlessly on the Dead Sea — 33% salinity at 430m below sea level, the lowest point on Earth.",
              },
              {
                name: "Rainbow Street Amman",
                query: "rainbow street amman jordan cafe evening lights old city view",
                desc: "Rainbow Street at dusk — Amman&apos;s hill-top strip of cafes, galleries, and knafeh vendors with views over the old city.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Jordan is not the cheapest Middle Eastern destination, but it delivers extraordinary value when planned well. The Jordan Pass (from JOD 70, ~USD 99) is the single most important purchase — it covers the JOD 40 visa fee and Petra entry, saving JOD 15–20 over paying separately for any stay of 2+ days.
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
                    ["🏨 Accommodation (4 nights)", "JOD 32–60 (~USD 45–85)", "JOD 200–320 (~USD 282–451)", "JOD 800–1,600 (~USD 1,128–2,256)"],
                    ["🍽 Food (4 days)", "JOD 12–24 (~USD 17–34)", "JOD 80–140 (~USD 113–197)", "JOD 320–600 (~USD 451–846)"],
                    ["🚌 Transport", "JOD 30–50 (~USD 42–70)", "JOD 60–100 (~USD 85–141)", "JOD 200–400 (~USD 282–564)"],
                    ["🏛 Entry fees (Jordan Pass)", "JOD 70 (~USD 99, covers visa+Petra)", "JOD 70 (~USD 99)", "JOD 70–120 (~USD 99–169)"],
                    ["🏕 Wadi Rum camp", "JOD 25–35 (~USD 35–49)", "JOD 80–120 (~USD 113–169)", "JOD 200–350 (~USD 282–493)"],
                    ["🏖 Dead Sea entry", "JOD 20 (~USD 28)", "JOD 35–50 (~USD 49–70)", "JOD 80–120 (~USD 113–169)"],
                    ["TOTAL (per person)", "JOD 189–259 (~USD 267–365)", "JOD 525–830 (~USD 740–1,170)", "JOD 1,670–3,190 (~USD 2,353–4,497)"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (JOD 30–45/day, ~USD 42–63)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel private room or budget guesthouse (JOD 15–25/night), eat falafel and hummus at Hashem Restaurant (JOD 3/meal), use JETT buses and shared taxis. The Jordan Pass is essential even at this tier — it pays for itself immediately.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (JOD 90–140/day, ~USD 127–197)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in Jabal Amman (JOD 50–80/night), meals at Sufra or Fakhreldin (JOD 15–25/pp), private car for the southern Jordan loop (Petra + Wadi Rum + Dead Sea). This is the sweet spot for Jordan — comfortable without overpaying.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Amman</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Amman&apos;s neighbourhoods have very different characters. Jabal Amman (1st and 2nd circle) is the most convenient for Rainbow Street and walking distance to the Downtown sights. Abdoun and Sweifieh are more modern and residential, better for mid-range and upscale hotels. Downtown is cheap but noisier.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Jabal Amman (1st–2nd Circle)",
                  type: "Best all-round location · Mid-range to luxury",
                  price: "From JOD 50/night (~USD 70)",
                  badge: "Best location",
                  desc: "Walking distance to Rainbow Street, the Citadel, and Downtown. The most pleasant neighbourhood to be based in for a short visit — independent cafes, boutique shops, and manageable walking. 3-star hotels here cost JOD 50–80/night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Downtown (Al-Balad)",
                  type: "Budget · Near the souks and Roman Theatre",
                  price: "From JOD 15/night (~USD 21)",
                  badge: "Best budget",
                  desc: "The cheapest accommodation in Amman is clustered in Downtown near the souk and Roman Theatre. Noisy, busy, and full of character. Several well-reviewed backpacker hostels operate here (JOD 8–15 for a dorm). Convenient for the Citadel and souks, less so for Rainbow Street.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Abdoun",
                  type: "Upscale residential · 4-star hotels",
                  price: "From JOD 80/night (~USD 113)",
                  badge: "Best mid-range",
                  desc: "A quieter upscale neighbourhood in West Amman with good international restaurants, shopping malls, and reliable 4-star hotels. Less atmospheric than Jabal Amman but more comfortable and better for families. About 15 minutes by Uber from the Citadel.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Sweifieh",
                  type: "Modern · Upscale dining and nightlife",
                  price: "From JOD 70/night (~USD 99)",
                  badge: "Best for dining out",
                  desc: "Amman&apos;s main upscale dining and nightlife district. More international restaurant options than anywhere else in the city. The Amman Rotana and similar 5-star properties are in this area. Best for travellers whose priority is contemporary Amman rather than the historic sites.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Amman</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Amman has one of the best food scenes in the Arab world. The essential dishes: mansaf (lamb in fermented yoghurt sauce over rice — Jordan&apos;s national dish), knafeh (hot cheese pastry soaked in syrup), mezze spreads, and the falafel at Hashem Restaurant that has been feeding Amman since 1952.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hashem Restaurant",
                  t: "Falafel & hummus · Downtown · Open 24 hrs",
                  d: "The most famous restaurant in Amman — open since 1952, open 24 hours, no menu, no reservations. You get foul (fava beans), hummus, falafel, and warm flatbread. Total cost: under JOD 3/person (~USD 4). Jordanian kings have eaten here. Always crowded with locals. The standard by which every other falafel in Jordan is judged.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sufra Restaurant",
                  t: "Traditional Jordanian · Rainbow Street",
                  d: "The finest traditional Jordanian food in Amman at mid-range prices (JOD 12–20/pp, ~USD 17–28). The menu covers mansaf, makloubeh, musakhan, and a legendary mixed mezze spread. In a restored 1940s house on Rainbow Street with courtyard seating. Book ahead for dinner — it fills up.",
                  b: "Best traditional",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Fakhreldin",
                  t: "Lebanese-Jordanian · Jabal Amman · Fine dining",
                  d: "Amman&apos;s most acclaimed restaurant — a 1950s villa garden setting with a refined Lebanese-Jordanian menu. The lamb ouzi, mixed hot mezze, and freshly baked bread are exceptional. Budget JOD 25–35/pp (~USD 35–49). Reserve a table in the garden for the full experience.",
                  b: "Best fine dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Wild Jordan Cafe",
                  t: "Cafe & juices · Rainbow Street",
                  d: "Run by the Royal Society for the Conservation of Nature, this Rainbow Street cafe serves the best fresh juices in Amman — pomegranate, tamarind, and carob — plus excellent Jordanian home cooking. The terrace has panoramic views over the old city. JOD 5–12/pp (~USD 7–17). Profits support conservation work.",
                  b: "Best views + juices",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Kunafeh & Sweets — Downtown",
                  t: "Street food · Multiple vendors · Downtown",
                  d: "Amman&apos;s knafeh is among the best in the Arab world. The hot cheese pastry soaked in orange-blossom syrup, cut at street stalls and served on a paper plate, costs JOD 1–1.5 (~USD 1.4–2.1) per slice. Na'eem Sweets and several unnamed vendors around the 3rd circle are the best spots. Eat it fresh and hot — nothing else like it.",
                  b: "Essential street food",
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
            destination="Amman Jordan"
            hotels={[
              {
                name: "Amman Rotana",
                type: "5-star · Sweifieh · Rooftop pool",
                price: "From JOD 200/night (~USD 282)",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/jo/amman-rotana.html?aid=2820480",
              },
              {
                name: "The House Boutique Suites",
                type: "Boutique · Jabal Amman · Heritage building",
                price: "From JOD 80/night (~USD 113)",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/jo/the-house-boutique-suites.html?aid=2820480",
              },
              {
                name: "Hisham Hotel",
                type: "3-star · Jabal Amman · Good location",
                price: "From JOD 50/night (~USD 70)",
                rating: "3",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/jo/hisham-amman.html?aid=2820480",
              },
              {
                name: "Jordan Tower Hotel",
                type: "Budget · Downtown · Near souks",
                price: "From JOD 20/night (~USD 28)",
                rating: "2",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/jo/jordan-tower.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Petra Full Day Guided Tour from Amman",
                duration: "12 hrs",
                price: "From JOD 45/person (~USD 63)",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=Petra+Jordan&partner_id=PSZA5UI",
              },
              {
                name: "Wadi Rum Overnight Bedouin Camp",
                duration: "24 hrs",
                price: "From JOD 35/person (~USD 49)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Wadi+Rum+camp&partner_id=PSZA5UI",
              },
              {
                name: "Dead Sea Day Trip from Amman",
                duration: "8 hrs",
                price: "From JOD 25/person (~USD 35)",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=Dead+Sea+Jordan&partner_id=PSZA5UI",
              },
              {
                name: "Amman City Walking Tour",
                duration: "3 hrs",
                price: "From JOD 15/person (~USD 21)",
                url: "https://www.getyourguide.com/s/?q=Amman+city+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Jordan</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Not buying the Jordan Pass before arrival",
                  desc: "The Jordan Pass (from JOD 70, ~USD 99) covers the JOD 40 visa fee plus entry to 40+ sites including Petra. If you plan to visit Petra, the Jordan Pass saves JOD 15+ and must be purchased online at jordanpass.jo BEFORE you land. Never buy it on arrival — the visa exemption only works if you have it pre-departure.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⏰",
                  title: "Spending only one day in Petra",
                  desc: "Petra&apos;s main trail — the Siq, Treasury, and Colonnaded Street — takes 4 hours. Add the Monastery hike (2 hours), High Place of Sacrifice (1.5 hours), and Royal Tombs (1 hour) and you need two full days. A 2-day Petra entry ticket costs JOD 75 (~USD 106) versus JOD 50 (~USD 70) for one day — extraordinary value.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌡️",
                  title: "Visiting in July or August",
                  desc: "Wadi Rum reaches 45°C and Petra&apos;s sandstone cliffs reflect intense heat in July and August. March to May and September to November are ideal: warm days, cool evenings, and Petra crowds 30–40% lower. Wadi Rum winter nights (Dec–Feb) drop to 0°C — bring a sleeping bag even for Bedouin camps.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚌",
                  title: "Relying on public transport for Wadi Rum",
                  desc: "JETT buses run Amman–Aqaba but do not stop directly at Wadi Rum village. From the highway turn-off it is 15km to the Visitor Centre — you need a local driver or to book through your camp. For maximum flexibility, hire a private car for the full southern circuit (Petra + Wadi Rum + Dead Sea in one efficient loop, JOD 120–160).",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥘",
                  title: "Missing mansaf at a proper Jordanian restaurant",
                  desc: "Mansaf — Jordan&apos;s national dish of lamb slow-cooked in fermented dried yoghurt sauce (jameed) over rice — is only properly made in specialist restaurants. Tourist hotel versions are pale imitations. Ask for Sufra, Tawaheen al-Hawa, or any restaurant in a non-tourist neighbourhood where Jordanians actually eat.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Amman &amp; Jordan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌄",
                  title: "Arrive at the Petra Treasury before 8am",
                  desc: "The Treasury is most photographed between 08:00 and 10:00 when sunlight catches the carved facade. The Siq corridor at 07:00 is often empty. Tour buses from Aqaba arrive from 09:30; groups from Amman from 10:00. Book guided Petra tours at getyourguide.com with partner_id=PSZA5UI for verified guides.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏕️",
                  title: "Stay overnight in Wadi Rum — don't day-trip it",
                  desc: "A day trip to Wadi Rum misses the desert&apos;s essential quality: silence, darkness, and the billion-star sky. Budget camps (JOD 25–35, ~USD 35–49, all-inclusive) deliver the same stars as luxury camps. Book accommodation at booking.com with aid=2820480 for the best verified camp options.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💰",
                  title: "Haggle at the souk, not at restaurants",
                  desc: "Bargaining is expected at souvenir stalls, souk jewellery vendors, and informal Bedouin craft sellers — offer 50–60% of the first price and settle around 70%. Restaurants, official sites, and transport (Uber or metered taxis) have fixed prices. Attempting to haggle at a restaurant is considered rude.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Download Google Maps offline for Amman",
                  desc: "Amman&apos;s addressing system uses circle numbers (1st Circle, 2nd Circle) and neighbourhood names rather than street names. Download offline maps before leaving your hotel. Uber is widely available and far more reliable than hailing taxis for foreigners — use it for all longer journeys.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🕌",
                  title: "Dress modestly at religious sites",
                  desc: "At the King Abdullah Mosque and smaller neighbourhood mosques, women need to cover their hair and both men and women need covered shoulders and knees. The mosque provides abayas at the entrance. In Downtown and souks, modest dress is also appreciated — standard tourist clothes are fine on Rainbow Street and in cafes.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💵",
                  title: "Carry Jordanian Dinar for souks and small vendors",
                  desc: "Most restaurants and hotels accept credit cards in Amman, but the Downtown souks, street food vendors, and rural sites (Wadi Rum entry, shared taxis) are cash-only. Exchange money at a bank or use an ATM on arrival — rates are better than airport exchange desks. The JOD is pegged to the USD at approximately 1 JOD = USD 1.41.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Amman" />

          {/* Combine With */}
          <CombineWith currentSlug="amman-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Jordan safe for tourists in 2026?",
                  a: "Jordan is consistently rated one of the safest countries in the Middle East for tourism. The main tourist areas — Amman, Petra, Wadi Rum, and the Dead Sea — have an excellent safety record. Jordan has a large, professional tourism police force and locals are genuinely welcoming to foreign visitors. Standard urban precautions apply in Amman at night, but solo travel including solo female travel is widely reported as comfortable.",
                },
                {
                  q: "How much does Petra cost to enter?",
                  a: "Petra entry costs JOD 50 (~USD 70) for one day, JOD 55 (~USD 78) for two days, and JOD 60 (~USD 85) for three days. With the Jordan Pass (from JOD 70, ~USD 99, purchased online at jordanpass.jo before arrival), entry to Petra and 40+ other sites is included, plus the JOD 40 visa fee is waived. For any stay visiting Petra, the Jordan Pass saves at least JOD 20 over paying separately.",
                },
                {
                  q: "What is the best way to combine Petra and Wadi Rum?",
                  a: "The classic southern Jordan loop takes 2 nights: night 1 in Petra village (Wadi Musa), full day in Petra, morning in Petra on day 2, afternoon transfer to Wadi Rum (1.5 hours), night 2 in a Bedouin desert camp, morning in Wadi Rum on day 3, then either back to Amman via the Dead Sea or south to Aqaba. A private car for the full circuit costs JOD 120–160 (~USD 169–225) and gives maximum flexibility.",
                },
                {
                  q: "What should I eat in Amman beyond hummus?",
                  a: "Amman has one of the Arab world&apos;s best food scenes. Must-eat dishes: mansaf (lamb in jameed yoghurt sauce, the national dish), makloubeh (upside-down rice and vegetable pot), zarb (underground Bedouin barbecue in Wadi Rum), knafeh (hot cheese pastry soaked in orange-blossom syrup), and musakhan (roasted chicken on flatbread with sumac and onions). Rainbow Street&apos;s cafes serve excellent Turkish coffee and the fresh juice stands downtown make pomegranate and carrot blends for JOD 1 (~USD 1.4).",
                },
                {
                  q: "Do I need a visa for Jordan as an Indian passport holder?",
                  a: "Indian passport holders receive a Visa on Arrival at Queen Alia International Airport (AMM). The fee is JOD 40 (~USD 56) for a single-entry 30-day visa. However, if you buy the Jordan Pass online at jordanpass.jo BEFORE you fly, the visa fee is waived — the pass starts from JOD 70 and also includes Petra entry and 40+ other sites. Always purchase the Jordan Pass before departure, not on arrival.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Amman &amp; Jordan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/jordan-5-days", label: "Jordan 5-day loop", icon: "🇯🇴" },
                { href: "/blog/petra-day-trip", label: "Petra day trip guide", icon: "🏛️" },
                { href: "/blog/wadi-rum-camp", label: "Wadi Rum camps", icon: "🏕️" },
                { href: "/blog/dead-sea-jordan", label: "Dead Sea guide", icon: "🌊" },
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
          <RelatedGuides currentSlug="amman-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jerusalem 4 Days — Old City &amp; Holy Sites", href: "/blog/jerusalem-4-days" },
                { label: "Egypt 7 Days — Pyramids to Aswan", href: "/blog/egypt-7-days" },
                { label: "Doha 3 Days — Souq Waqif &amp; the Desert", href: "/blog/doha-3-days" },
                { label: "Jordan 5 Days — Complete Loop", href: "/blog/jordan-5-days" },
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
