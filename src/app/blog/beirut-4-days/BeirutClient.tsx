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
const BEIRUT_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Beirut Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
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
          href: `mailto:?subject=Beirut 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Beirut in 4 Days — mezze, Jeita Grotto, Gemmayzeh and the Phoenix city&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/beirut-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Beirut in 4 Days: Gemmayzeh nightlife, Pigeon Rocks, National Museum, Jeita Grotto, Byblos day trip, and Lebanese mezze — complete travel guide from $60/day."
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
export default function BeirutClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BEIRUT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Beirut" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="beirut corniche lebanon mediterranean sea city skyline"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Beirut Corniche waterfront promenade at sunset with the Mediterranean Sea and city skyline"
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
              <span className="text-white/70">Beirut 4 Days</span>
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
                Beirut in 4 Days:
                <em className="italic text-amber-300"> Mezze, Ruins &amp; the Phoenix City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Gemmayzeh street art, Pigeon Rocks at sunset, Jeita Grotto&apos;s underground lake, ancient Byblos, and the world&apos;s greatest mezze feast — Beirut in 4 days from $60/day.
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
              <span>🇱🇧 Lebanon</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Beirut is the most contradictory city in the Middle East — a place where French pastry shops sit next to Ottoman mosques, where bullet-riddled buildings stand next to glass towers, and where the Mediterranean party culture is as fierce and resilient as the city itself.
            </p>
          </blockquote>

          {/* ── WHAT BEIRUT ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Beirut Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Beirut has been rebuilt seven times in its history, earning it the nickname &quot;The Phoenix.&quot; It is simultaneously the most European city in the Arab world and the most Arab city in Europe — a paradox that plays out on every street corner where a 1920s French Mandate villa shares a wall with a Mamluk-era mosque. The city was the &quot;Paris of the Middle East&quot; before the 1975–1990 Civil War, and it has been clawing its way back to that identity ever since — dramatically interrupted by the 2006 war, the 2020 port explosion, and an ongoing economic crisis, yet somehow always rebuilding.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The mezze culture alone — 30 small dishes arriving in waves over two hours, each more complex than the last — justifies the trip. The Jeita Grotto is one of the most spectacular cave systems on earth: 9km of stalactites and an underground river with a boat ride through silence and blue-green light. Byblos, an hour north, is one of the world&apos;s oldest continuously inhabited cities — 7,000 years of human settlement visible in a single archaeological site where Phoenician temples, a Crusader castle, and Roman colonnades share the same hillside.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days gives you the city&apos;s duality, its Phoenician and Roman and Ottoman history, the extraordinary geography of a country where you can ski in the morning and swim in the Mediterranean in the afternoon, and the Lebanese hospitality that visitors consistently describe as among the warmest they have ever encountered anywhere in the world.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport Code" value="BEY" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun · Sep–Oct" />
              <StatCard icon="🏙️" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="$60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Beirut</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–26°C, low humidity, clear skies. The mountains still hold snow while the city is warm — you can ski and swim on the same day in April. Wildflowers on the hillsides, terrace cafés open everywhere. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "22–30°C. Summer crowds are gone but the weather is perfect. The Bekaa Valley grape harvest runs September–October — an extraordinary time to visit wineries. The sea is still warm enough for swimming. Many experienced Lebanon travellers consider October the single best month.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Hot & Crowded",
                  d: "28–35°C with high coastal humidity. Beirut fills with Lebanese diaspora from the Gulf and Europe — the city is at its most social and expensive. Nightlife is extraordinary. Jeita Grotto gets crowded and can sell out. Book everything ahead at least two weeks in advance.",
                  b: "Book far ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌨️",
                  t: "Winter — Cool & Quiet",
                  d: "8–15°C. The city is quiet and prices drop significantly. The Lebanon Mountains above Beirut receive heavy snow — Mzaar ski resort opens December through March, making a ski-and-sea day possible. Some restaurants close early but the city never fully stops.",
                  b: "Low season value",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Beirut</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Beirut Rafic Hariri International Airport (BEY) is 9km south of the city centre. The taxi to most neighbourhoods costs <strong className="font-medium">$15–20</strong> and takes 20–30 minutes. There is no metro — taxis and Uber are how most visitors get around.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "By Air — Beirut Rafic Hariri International (BEY)",
                  d: "Direct flights from London (5 hrs), Paris (4.5 hrs), Dubai (3 hrs), Istanbul (2 hrs), Cairo (1.5 hrs), and Frankfurt (4.5 hrs). Middle East Airlines (MEA) is the flag carrier. Turkish Airlines, Air France, Emirates, and Lufthansa all serve BEY. From BEY to city: official taxi $15–20 (confirm flat rate before getting in). Uber also works from the airport at similar prices.",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "BEY Airport to City Neighbourhoods",
                  d: "Gemmayzeh and Mar Mikhael: $15 taxi, 20 min. Hamra district: $15 taxi, 20 min. Downtown Beirut (Solidere): $18 taxi, 25 min. Achrafieh: $18 taxi, 25 min. Uber is reliable from BEY and often cheaper than negotiated taxis at $12–16. Agree the price before departure — meters are not standard.",
                  b: "Use Uber or fixed rate",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛳️",
                  t: "By Sea — Jounieh / Beirut Port",
                  d: "Seasonal ferry services run from Larnaca (Cyprus, 8 hrs) and some Greek islands in summer. The Beirut Port is 2km from Downtown. Not the primary option for most travellers but a scenic alternative if combining with Cyprus or a Mediterranean cruise.",
                  b: "Seasonal",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Overland from Jordan",
                  d: "The Beirut–Damascus–Amman highway connects Lebanon to Jordan (approximately 4–5 hours from Amman under normal conditions). Check current border status before planning — conditions at land borders in the region can change. Not recommended without verifying live travel advisories.",
                  b: "Check conditions",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Beirut Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary follows the budget track — the same locations can be experienced at mid-range or luxury price points by adjusting where you eat and stay. Day 3 and Day 4 are interchangeable depending on your travel style.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Gemmayzeh, Mar Mikhael Street Art & Pigeon Rocks"
                cost="$35–50 (meals, transport, elevator, coffee)"
                items={[
                  "10:00 — Start in Gemmayzeh: the most photogenic neighbourhood in Beirut — Ottoman-era buildings with triple-arched windows, French balconies, and street art that documents Lebanon's cyclical history. Free to walk, best with a Lebanese coffee from one of the local cafés at $1.50–2.",
                  "11:30 — Walk through Mar Mikhael: the artists' and musicians' district adjacent to Gemmayzeh has gallery spaces (most free) and the famous Armenia Street street art corridor. This is where Beirut's creative class rebuilt after 2006 and again after the 2020 port explosion — the murals reference both events directly and are among the most powerful public art in the Arab world.",
                  "13:00 — Lunch at a mezze restaurant in Gemmayzeh ($12–18 per person): order the classic fattoush, hummus, labneh (strained yoghurt with olive oil), mutabbel, and kibbeh nayeh (raw spiced lamb — a Lebanese signature dish). Lebanese bread arrives free and continuously.",
                  "15:00 — Walk the Hamra neighbourhood: Beirut's intellectual and student quarter has independent bookshops, cheap shawarma ($2–3), and the legendary Bliss Street café culture dating to the American University of Beirut era in the 1960s.",
                  "17:30 — Raouché Pigeon Rocks: the dramatic sea stacks rising from the Mediterranean are free to view from the Corniche cliff. Take the elevator down to sea level for $1 for a closer perspective — the true scale of the rocks is only apparent from below. Arrive at sunset for the best light over the Mediterranean.",
                  "19:30 — Dinner in Gemmayzeh: a full mezze spread with drinks at a local restaurant costs $15–22 per person. The Almaza beer (Lebanon's national lager since 1933) is $2.50 a bottle and is one of those drinks that simply tastes better in its home city.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="National Museum, Downtown Beirut & Corniche Walk"
                cost="$30–45 (museum, meals, transport, drinks)"
                items={[
                  "09:30 — National Museum of Beirut ($5 entry): one of the finest archaeological museums in the Middle East — Phoenician artifacts, Bronze Age sarcophagi, and Roman mosaics. The museum was positioned exactly on the 1975–1990 Green Line dividing East and West Beirut. The staff bricked up the entire collection in concrete when war broke out in 1975 and spent years uncovering and restoring it after 1997.",
                  "12:00 — Downtown Beirut reconstruction walk: the post-war rebuilding of central Beirut by Solidere is controversial but spectacular — Roman baths, a Phoenician harbour, Ottoman mosques, and 21st-century glass towers coexist in the same 2km radius. All free to walk. The archaeological glass floors in the Beirut Souks reveal 7,000 years of occupation beneath the modern surface.",
                  "13:30 — Lunch at a downtown cafeteria-style Lebanese grill ($8–12): choose by weight — grilled chicken shish taouk, kafta, and tabbouleh by the 100g. The Arabic bread and garlic sauce (toum) are complimentary.",
                  "15:30 — Mohammad Al-Amin Mosque and Saint George Maronite Cathedral stand literally 50 metres apart at Martyrs' Square — the coexistence is architectural Lebanon in miniature. Both are free to enter with appropriate dress (cover shoulders and knees).",
                  "17:00 — Corniche evening walk: Beirut's seafront promenade is 4.8km and completely free. The tradition of fishermen casting lines from the railing while families take evening strolls is unchanged for generations — Corniche at dusk is one of those perfect free things a city can offer.",
                  "20:00 — Drinks in Hamra: a full night out in Beirut's affordable bars starts at $15–20 including 2–3 cocktails. The bar scene rebuilt dramatically post-2020 and the energy in the Gemmayzeh and Mar Mikhael bar strips after 9pm is unlike anywhere else in the region.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Jeita Grotto Day Trip & Jounieh Coastal Lunch"
                cost="$50–65 (Jeita, transport, lunch, cable car, dinner)"
                items={[
                  "09:00 — Hire a service taxi (shared taxi, $4–6 to Jeita from the Dora roundabout) or join a guided day tour ($25 including transport and entry) to Jeita Grotto, 18km north of Beirut.",
                  "10:00 — Jeita Grotto ($18 entry): the 9km cave system was a 2011 New Seven Wonders of Nature finalist. The upper gallery is explored on foot through dramatic stalactite and stalagmite chambers; the lower gallery is accessed by small boat on an underground lake — the only underground boat ride in the Middle East. The caves maintain a constant 16°C regardless of outside temperature — bring a light jacket.",
                  "12:30 — Return to Jounieh for lunch: the coastal town 20 minutes from Jeita has fresh mezze restaurants on the water for $12–16/pp. The grilled fish with garlic lemon sauce and tabbouleh is the essential seaside lunch. Order a Lebanese Cinsault rosé with it.",
                  "15:00 — Optional: Jounieh cable car up the mountain to Our Lady of Lebanon ($7 each way): the 1950s aerial tramway climbs 650 vertical metres to the famous white Virgin Mary statue with panoramic views of the entire Mediterranean coast from Beirut to Byblos.",
                  "19:00 — Return to Beirut. Dinner in Hamra at a traditional home-cooking restaurant ($10–14/pp). The daily specials boards change each morning based on what arrived at the souq — the slow-cooked lamb with seven spices (yakhnet) and the lentil soup with lemon are constants.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Byblos Day Trip & Farewell Mezze"
                cost="$40–60 (transport, Byblos entry, meals, souvenirs)"
                items={[
                  "08:30 — Service taxi to Byblos (Jbeil), 37km north of Beirut ($4–6, 45 minutes). Byblos is one of the oldest continuously inhabited cities on earth — occupied for 7,000 years. The Phoenicians created the first truly alphabetic writing system here around 1050 BCE; the English word 'Bible' derives from Byblos, the city from which the Greeks imported papyrus.",
                  "09:30 — Byblos archaeological site ($8 entry): Phoenician temples, a Persian fortress, a Crusader castle, and Roman colonnades all occupy the same hillside overlooking the Mediterranean — the most concentrated archaeological time capsule in Lebanon. Climb the Crusader castle walls for the coastal panorama north toward the mountains.",
                  "12:00 — Lunch in Byblos old port: the restored Ottoman-era fishing harbour has seafood restaurants with tables literally on the water ($15–22/pp). The whole grilled sea bass with garlic and lemon and the mezze sampler are the local specialities. Order the Lebanese white wine — Ksara Blanc de Blancs pairs perfectly with fish.",
                  "15:00 — Byblos old souk: the covered market sells cedar wood products (Lebanon's national symbol since antiquity), local pottery, and hand-pressed olive oils from the surrounding groves. Cedar honey and thyme-infused olive oil make excellent gifts at $5–12 per jar.",
                  "18:00 — Return to Beirut for the farewell mezze dinner: a full Lebanese mezze is 20–35 small dishes arriving over 2 hours. Best value at local neighbourhood restaurants in Mar Mikhael or Bourj Hammoud for $15–22 per person with unlimited bread, olives, and pickled turnips.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Beirut" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark &amp; Attraction Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Beirut sites in order of priority. All prices in USD — Lebanon&apos;s practical currency since the 2019 banking crisis. Book Jeita Grotto ahead in summer.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Jeita Grotto",
                  e: "$18 entry",
                  d: "Lebanon's single greatest natural attraction, 18km north of Beirut. A 2011 New Seven Wonders of Nature finalist. The upper gallery is explored on foot through massive stalactite chambers; the lower gallery by boat on a subterranean lake. 9km of cave formations total. Book ahead in summer — the grotto receives up to 3,000 visitors a day and can sell out. Caves are a constant 16°C year-round.",
                  t: "Must visit · 2–3 hrs",
                },
                {
                  n: "National Museum of Beirut",
                  e: "$5 entry",
                  d: "One of the finest archaeological museums in the Middle East. The collection covers 7,000 years of Lebanese history from the Stone Age to the Byzantine era — Phoenician sarcophagi, Roman mosaics, Bronze Age gold. The museum sat precisely on the Green Line during the Civil War. Its staff bricked up the collection in 1975 and spent decades restoring it after 1997. The institution's own story is as compelling as any exhibit.",
                  t: "Must visit · 1.5–2 hrs",
                },
                {
                  n: "Pigeon Rocks (Raouché)",
                  e: "Free (elevator $1)",
                  d: "The twin sea stacks rising dramatically from the Mediterranean are Beirut's most recognisable natural landmark, visible from the Corniche cliff walk. Take the elevator at the Raouché promontory down to sea level ($1) to appreciate the true scale of the rocks from below. Best at sunset when the light turns the stone amber over the darkening sea.",
                  t: "Sunset · 45 mins",
                },
                {
                  n: "Gemmayzeh & Mar Mikhael",
                  e: "Free",
                  d: "The most photogenic and culturally dense neighbourhoods in Beirut. Gemmayzeh has the best-preserved Ottoman architecture with triple-arched windows and French balconies. Mar Mikhael has the Armenia Street street art corridor and the city's best bar scene. The murals document the 2020 port explosion, the 2006 war, and the enduring Lebanese spirit of reconstruction.",
                  t: "Half day · Free",
                },
                {
                  n: "Byblos Archaeological Site",
                  e: "$8 entry",
                  d: "37km north of Beirut, Byblos (Jbeil) is one of the world's oldest continuously inhabited cities — 7,000 years of human settlement compressed into one hillside. Phoenician temples, a Persian fortress, a Crusader castle, and Roman colonnades. The English word 'Bible' derives from Byblos. The Crusader castle walls offer the best coastal panorama north toward the snow-capped Lebanon Mountains.",
                  t: "Day trip · 2–3 hrs on site",
                },
                {
                  n: "Beirut Souks & Downtown",
                  e: "Free to walk",
                  d: "The rebuilt covered market at the heart of Solidere's post-war reconstruction. The modern Souks were built over Phoenician and Roman excavations — archaeological glass floors reveal the layers beneath. Best for Lebanese designer goods, jewellery, and food souvenirs. The surrounding Downtown streets have Roman baths visible through glass pavements.",
                  t: "Shopping · 1–2 hrs",
                },
                {
                  n: "Mohammad Al-Amin Mosque & Saint George Cathedral",
                  e: "Free",
                  d: "The blue-domed Mohammad Al-Amin Mosque (completed 2008) and the 19th-century Saint George Maronite Cathedral stand 50 metres apart in Martyrs' Square. Both are free to enter with appropriate dress. The juxtaposition — Islam and Christianity sharing the same plaza in an architecturally harmonious way — is the most visually Lebanese sight in the city.",
                  t: "30 mins",
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
            title="Beirut — The Phoenix City"
            subtitle="Gemmayzeh street art, Pigeon Rocks, ancient Byblos, and the Lebanese Corniche."
            spots={[
              {
                name: "Pigeon Rocks Raouché",
                query: "pigeon rocks raouche beirut lebanon sea stacks mediterranean sunset",
                desc: "The twin sea stacks of Raouché rising from the Mediterranean — Beirut&apos;s most recognisable natural landmark, best at sunset.",
              },
              {
                name: "Gemmayzeh Street Art",
                query: "gemmayzeh beirut street art murals ottoman buildings lebanon",
                desc: "The colourful murals of Gemmayzeh and Mar Mikhael document Lebanon&apos;s history through street art on Ottoman-era facades.",
              },
              {
                name: "Jeita Grotto Caves",
                query: "jeita grotto cave stalactites lebanon underground lake boat",
                desc: "The stalactite chambers of Jeita Grotto — 9km of cave formations and an underground boat ride through the lower gallery.",
              },
              {
                name: "Byblos Ancient Harbour",
                query: "byblos jbeil ancient harbour phoenician lebanon old port ruins",
                desc: "The restored Ottoman fishing harbour of Byblos — seafood restaurants on the water beside 7,000 years of continuous human settlement.",
              },
              {
                name: "Beirut Corniche at Sunset",
                query: "beirut corniche waterfront promenade sunset lebanon city skyline",
                desc: "The 4.8km Corniche promenade at sunset — fishermen, families, the Mediterranean, and the Lebanon Mountains all visible at once.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All prices in USD — Lebanon&apos;s practical tourism currency since the 2019 banking crisis. Carry cash in small bills. Credit cards are unreliable outside upscale hotels and a handful of restaurants.
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
                    ["🏨 Accommodation (per night)", "$25–45", "$120–180", "$350–700"],
                    ["🍽️ Food (per day)", "$15–25", "$50–80", "$150–250"],
                    ["🚕 Transport (per day)", "$5–10", "$20–40", "$100–300"],
                    ["🎫 Activities (per day)", "$10–20", "$40–70", "$200–400"],
                    ["🕳️ Jeita Grotto entry", "$18", "$18", "$18 + VIP access"],
                    ["🏺 Byblos site entry", "$8", "$8", "$8 + private guide"],
                    ["🏛️ National Museum", "$5", "$5 + $15 guide", "$200 curator tour"],
                    ["TOTAL (per day)", "$60–100", "$150–250", "$400–750+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–100/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouse in Hamra or Gemmayzeh ($25–45/night), mezze spots and falafel, service taxis, walking. Lebanon is not as cheap as Southeast Asia but the food quality at budget prices is genuinely excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($150–250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Achrafieh or Gemmayzeh ($120–180/night), restaurants like Tawlet and Mayrig, Uber for day trips. The sweet spot — excellent food and character without luxury price tags.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($400–750+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons Beirut or Le Gray ($350–700/night), Em Sherif chef&apos;s table and Babel Bar-Restaurant, private car for day trips, helicopter coastal tour. Beirut luxury is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Beirut</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Gemmayzeh and Achrafieh give the best access to the city&apos;s cultural life. Hamra is the best-value district. Downtown is convenient but less atmospheric at night. Book through <a href="https://www.booking.com/?aid=2820480" target="_blank" rel="noopener noreferrer" className="text-teal underline underline-offset-2">Booking.com</a> for price comparison and free cancellation.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Four Seasons Beirut",
                  type: "Luxury · Downtown Beirut",
                  price: "From $400/night",
                  badge: "Most prestigious",
                  desc: "Seafront location overlooking the Mediterranean with direct views toward the Pigeon Rocks. Rooftop pool, multiple restaurants, and the highest service standards in Lebanon. The Iris rooftop bar has the most spectacular cocktail view in the city.",
                  color: "border-amber-200 bg-amber-50",
                  url: "https://www.booking.com/hotel/lb/four-seasons-beirut.html?aid=2820480",
                },
                {
                  name: "Le Gray Beirut",
                  type: "Luxury boutique · Downtown",
                  price: "From $280/night",
                  badge: "Best rooftop",
                  desc: "12-floor boutique hotel in the heart of Solidere's reconstructed downtown with extraordinary rooftop restaurant views over the Mohammad Al-Amin Mosque and city skyline. Architecturally one of the finest hotels in the Middle East. The restaurant is worth visiting even if not staying.",
                  color: "border-teal-200 bg-teal-50",
                  url: "https://www.booking.com/hotel/lb/le-gray-beirut.html?aid=2820480",
                },
                {
                  name: "Hayete Guesthouse",
                  type: "Boutique guesthouse · Gemmayzeh",
                  price: "From $85/night",
                  badge: "Best neighbourhood",
                  desc: "A beautifully restored 1920s Ottoman house in the heart of Gemmayzeh, within walking distance of Mar Mikhael and the best restaurants. Intimate, character-filled rooms and exceptional hosts who know the city. The genuine alternative to corporate hotels.",
                  color: "border-parchment-2 bg-white",
                  url: "https://www.booking.com/hotel/lb/hayete-guesthouse-beirut.html?aid=2820480",
                },
                {
                  name: "Hamra Budget Guesthouses",
                  type: "Budget · Hamra district",
                  price: "$25–55/night",
                  badge: "Best value",
                  desc: "Several small guesthouses and budget hotels in Hamra offer clean, comfortable rooms near the AUB campus, Bliss Street cafés, and the Corniche. The Marble Tower Hotel and Regis Hotel are reliable options at $30–50/night within walking distance of the promenade.",
                  color: "border-green-200 bg-green-50",
                  url: "https://www.booking.com/city/lb/beirut.html?aid=2820480",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-2">{stay.desc}</p>
                  <a
                    href={stay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.65rem] font-medium text-teal underline underline-offset-2"
                  >
                    Check availability →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Beirut</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lebanese food is among the world&apos;s great cuisines. Budget baklava and shawarma stand next to award-winning restaurants on the same street. Eat mezze at least twice — it is the defining food ritual of the country.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Em Sherif",
                  t: "Fine dining Lebanese · Achrafieh",
                  d: "Widely considered the finest traditional Lebanese restaurant in Beirut. The kitchen produces 50-dish spreads that represent the full breadth of Lebanese cuisine from mountain to coast. The chef's table experience includes kibbeh nayeh, raw ouzi lamb, and successive rounds of Lebanese wine and arak. $60–80/pp. Reserve at least a week ahead.",
                  b: "Best mezze",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Tawlet",
                  t: "Village cuisine collective · Downtown",
                  d: "Souk el Tayeb's restaurant where Lebanese village women cook their regional specialities in a collective kitchen — the menu changes daily based on who is cooking and which village they represent. The concept celebrates Lebanon's extraordinary culinary diversity: dishes from the Bekaa Valley, the south coast, and the mountain villages appear on the same menu. $35–45/pp.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Mayrig",
                  t: "Armenian-Lebanese · Bourj Hammoud",
                  d: "In Beirut's Armenian quarter, Mayrig serves traditional Armenian-Lebanese cuisine that reflects the city's multicultural identity. The manti (tiny hand-folded meat dumplings with yoghurt sauce) and mujaddara hamra (red lentil bulgur with caramelised onions) are unlike anything else in Lebanon. $30–40/pp.",
                  b: "Unique cuisine",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Street Mezze & Falafel",
                  t: "Budget street food · Hamra & Gemmayzeh",
                  d: "A shawarma from a proper Hamra street counter costs $2–3. A falafel wrap with pickles and garlic sauce is $1.50. A full sit-down mezze lunch for two at a local Gemmayzeh restaurant is $25–35 total. The budget eating in Beirut is genuinely excellent — the food culture runs deep at every price point in this city.",
                  b: "Best budget",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Baklava & Lebanese Sweets",
                  t: "Lebanese pastries · Citywide",
                  d: "Lebanese baklava is among the finest in the world — the Beirut tradition uses fresh pistachio paste, rose water, and clarified butter in a ratio that outclasses most regional versions. Hallab (originally from Tripoli) and Salibi have branches in Beirut. A box of 12 pieces is $4–8. The knafeh (cheese pastry soaked in orange blossom syrup) is equally unmissable.",
                  b: "Do not skip",
                  c: "bg-rose-50 border-rose-200",
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
            destination="Beirut Lebanon"
            hotels={[
              {
                name: "Four Seasons Beirut",
                type: "Luxury seafront · Downtown",
                price: "From $400/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/lb/four-seasons-beirut.html?aid=2820480",
              },
              {
                name: "Le Gray Beirut",
                type: "Luxury boutique · Downtown",
                price: "From $280/night",
                rating: "5",
                badge: "Best rooftop",
                url: "https://www.booking.com/hotel/lb/le-gray-beirut.html?aid=2820480",
              },
              {
                name: "Hayete Guesthouse",
                type: "Boutique · Gemmayzeh",
                price: "From $85/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/lb/hayete-guesthouse-beirut.html?aid=2820480",
              },
              {
                name: "Albergo Hotel Beirut",
                type: "Boutique · Achrafieh",
                price: "From $150/night",
                rating: "4",
                badge: "Most charming",
                url: "https://www.booking.com/hotel/lb/albergo-beirut.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Beirut City Walking Tour — Gemmayzeh & History",
                duration: "3 hrs",
                price: "From $25/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=Beirut+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Jeita Grotto Day Trip from Beirut",
                duration: "5 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Jeita+Grotto+tour&partner_id=PSZA5UI",
              },
              {
                name: "Byblos & Jeita Full Day Tour",
                duration: "9 hrs",
                price: "From $55/person",
                badge: "Best day trip",
                url: "https://www.getyourguide.com/s/?q=Byblos+Beirut+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lebanese Cooking Class & Mezze",
                duration: "4 hrs",
                price: "From $65/person",
                badge: "Foodie favourite",
                url: "https://www.getyourguide.com/s/?q=Beirut+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Beirut</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "✈️",
                  title: "Travelling with Israeli passport stamps",
                  desc: "Lebanon and Israel are technically still at war. Any Israeli entry or exit stamp in your passport will result in denial of entry to Lebanon — this applies to all nationalities without exception. If your passport has been to Israel, obtain a new blank passport before applying for a Lebanese visa. Lebanese border control is thorough about this check.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💵",
                  title: "Not carrying enough US dollars in cash",
                  desc: "Lebanon's banking crisis since 2019 means ATMs are unreliable and credit cards are not universally accepted outside upscale hotels. The Lebanese lira exists but prices are quoted and preferred in USD. Always carry $100–200 in small denomination USD bills ($10s and $20s). Exchange additional cash at street money changers (sarrafeen) who offer better rates than banks.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🕌",
                  title: "Missing the mezze ritual by eating fast food",
                  desc: "A Lebanese mezze is not a starter — it is the entire meal, a 90-minute social ritual of 20–40 small dishes arriving continuously. Ordering a single main course is missing the entire point of Lebanese cuisine and hospitality. Order mezze for lunch or dinner at least twice, ask for the full spread, and insist on the slow meal pace that defines Lebanese dining.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📅",
                  title: "Spending all 4 days only in Beirut",
                  desc: "Jeita Grotto, Byblos, the Chouf Cedars, the Bekaa Valley wineries, and the Qadisha Valley are all within 2 hours of Beirut and represent very different aspects of Lebanon. A trip that never leaves the capital misses the extraordinary Lebanese landscape and the cultural diversity of the mountain villages and ancient sites.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌃",
                  title: "Underestimating Beirut's nightlife schedule",
                  desc: "Beirut is one of the world's great night cities — restaurants don't fill until 10pm, bars peak at midnight, and clubs run until dawn. If you go out at 8pm expecting activity, most places will be quiet. The Lebanese night schedule runs 2–3 hours later than Europe. Adjust your morning start times on party nights accordingly.",
                  color: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Beirut</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Book Jeita Grotto ahead in peak season",
                  desc: "Jeita Grotto receives up to 3,000 visitors a day in summer and can sell out entirely. Book tickets online at jeitagrotto.com at least 3 days ahead during July and August. The caves maintain a constant 16°C year-round — bring a light jacket regardless of outside temperature. Book guided tours at getyourguide.com/s/?q=Jeita+Grotto&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍷",
                  title: "Drink Lebanese wine — it is exceptional",
                  desc: "The Bekaa Valley has been producing wine since the Phoenicians. Château Musar, Château Ksara, and Massaya produce internationally celebrated bottles that cost $10–20 at restaurants — far less than the same wine costs abroad. Order a Lebanese red with your mezze. The Cinsault-Cabernet blends from high-altitude Bekaa vineyards are outstanding.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏙️",
                  title: "The bullet holes tell a story — engage with it",
                  desc: "Beirut's bullet-scarred buildings and half-demolished towers are not blight — they are living architecture that tells the Civil War story more powerfully than any museum. Ask your guesthouse host about their neighbourhood's history. The people who rebuilt after the 2020 port explosion with spontaneous volunteer work embody the same spirit that rebuilt the city after every previous crisis.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Sunrise from the Corniche beats every viewpoint",
                  desc: "Beirut's Corniche promenade faces west over the Mediterranean and north toward the Lebanon Mountains. At dawn, the light hits both the sea and the snow-capped mountains simultaneously — a combination virtually unique among Mediterranean cities. Bring a coffee from a 24-hour café and walk the 4.8km promenade as the fishermen set up for the morning.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚕",
                  title: "Use service taxis for cheap city travel",
                  desc: "Service taxis (shared taxis that follow fixed routes) cost $1–3 per trip and are how most Beirutis travel locally. Wave your hand at any passing car and state your destination — if the driver is going that way, they will take you. Uber also works reliably in Beirut at $3–8 for most city trips and is easier for visitors unfamiliar with routes.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💱",
                  title: "Exchange money at sarrafeen, not banks",
                  desc: "Street money changers (sarrafeen) operating from small booths throughout Beirut offer significantly better USD-to-lira exchange rates than banks or airport bureaux. They are a normal, trusted part of the Lebanese financial landscape. Always count your money before leaving. Bring fresh, unfolded USD bills — crumpled or torn notes are sometimes refused.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Beirut" />

          {/* Combine With */}
          <CombineWith currentSlug="beirut-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Beirut safe to visit in 2026?",
                  a: "Beirut's tourist areas — Gemmayzeh, Mar Mikhael, Hamra, Achrafieh, and Downtown — are generally safe for tourists. The 2020 port explosion damaged parts of the city centre but reconstruction is ongoing. Check your government's travel advisory before booking as the security situation in Lebanon can shift. The Lebanese hospitality culture means visitors are typically treated exceptionally well.",
                },
                {
                  q: "What currency does Lebanon use and how do I get cash?",
                  a: "Lebanon uses both the Lebanese Lira (LBP) and the US Dollar (USD). Since the 2019 banking crisis, USD is the practical currency for tourism. ATMs are unreliable — some work, many dispense LBP at poor exchange rates. Bring $200–400 USD cash in small bills ($10s and $20s) and exchange additional at street money changers (sarrafeen) who offer better rates than banks. Credit cards work in upscale hotels and some restaurants but always carry cash.",
                },
                {
                  q: "What is Lebanese mezze and how do I order it?",
                  a: "A Lebanese mezze is a feast of 20–40 small dishes served simultaneously and continuously over 1.5–2 hours. It begins with cold dishes (hummus, labneh, tabbouleh, fattoush, moutabal), then hot dishes (falafel, kibbeh, sambousek pastries), then grilled meats (kafta, shish taouk, mixed grill). Tell the waiter you want the full mezze experience. One mezze shared between two people costs $25–35 at a mid-range restaurant. Never rush a mezze.",
                },
                {
                  q: "How do I get around Beirut without a car?",
                  a: "Service taxis (shared taxis that follow fixed routes) cost $1–3 per trip. Wave at any passing car and state your destination; if the driver is going that way, they will take you. Uber operates in Beirut and is reliable at $3–8 for most city trips. Rental cars are available at BEY airport from $40/day and are recommended for day trips to Jeita, Byblos, and the Bekaa Valley.",
                },
                {
                  q: "Do I need a visa for Lebanon?",
                  a: "Most Western passport holders (US, UK, EU, Australia) receive a Visa on Arrival at Beirut Rafic Hariri Airport for $17–34 depending on nationality, valid for 1 month. Indian passport holders can apply for an e-Visa (evisa.gov.lb, $17, 3–5 business days) or obtain a Visa on Arrival at the airport. Critical note: entry is denied to anyone with Israeli passport stamps — regardless of nationality. If your passport has been to Israel, apply for a new passport before travelling to Lebanon.",
                },
                {
                  q: "What is the best day trip from Beirut?",
                  a: "Jeita Grotto (18km north, $18 entry) is Lebanon's single most spectacular natural attraction and should be a priority on any visit. Byblos (37km north, $8 entry) is the best historical day trip — 7,000 years of inhabited history in one site. For combining both in one day, hire a private car ($80–100 for the day). The Bekaa Valley wineries (90 minutes east) are exceptional for wine enthusiasts — Château Ksara and Château Musar both offer cellar tours.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Beirut trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/beirut-travel-tips", label: "Beirut travel tips", icon: "💡" },
                { href: "/blog/lebanon-visa-guide", label: "Lebanon visa guide", icon: "🛂" },
                { href: "/blog/jeita-grotto-guide", label: "Jeita Grotto guide", icon: "🕳️" },
                { href: "/blog/lebanese-food-guide", label: "Lebanese food guide", icon: "🍽️" },
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
          <RelatedGuides currentSlug="beirut-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Istanbul 5 Days — Europe &amp; Asia", href: "/blog/istanbul-5-days" },
                { label: "Jordan 5 Days — Petra &amp; Wadi Rum", href: "/blog/jordan-5-days" },
                { label: "Jerusalem 4 Days — Sacred City", href: "/blog/jerusalem-4-days" },
                { label: "Doha 3 Days — Qatar Guide", href: "/blog/doha-3-days" },
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
