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
const CHIANGMAI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Chiang Mai Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "temples",     emoji: "🛕",  label: "Temple & Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Chiang Mai 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Chiang Mai in 4 Days — temples, elephants and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/chiang-mai-4-days"
        imageUrl="https://images.unsplash.com/photo-1512553219517-ff47b6a5e6ff?w=1200&q=80"
        description="Chiang Mai in 4 Days: Doi Suthep, Old City temples, ethical elephant sanctuary, cooking class, night markets — complete travel guide with budget breakdown in THB & USD."
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
export default function ChiangMaiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHIANGMAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chiang Mai" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="chiang mai doi suthep temple golden thailand mountain"
            fallback="https://images.unsplash.com/photo-1512553219517-ff47b6a5e6ff?w=1600&q=80"
            alt="Wat Phra That Doi Suthep golden temple on the mountainside above Chiang Mai"
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
              <span className="text-white/70">Chiang Mai 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Culture
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chiang Mai in 4 Days:
                <em className="italic text-amber-300"> Temples, Mountains &amp; the Real Northern Thailand</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Doi Suthep at dawn, the Sunday Night Market food crawl, ethical elephant sanctuaries, Lanna temples inside the moat, and khao soi that costs ฿40. The complete guide with real timings, costs in THB &amp; USD, and the mistakes that ruin most Chiang Mai trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇹🇭 Thailand</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From ฿600/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Sunday Night Market food crawl is a mile long and you&apos;ll want to eat at every stall. Budget ฿500 and pace yourself. Chiang Mai is the kind of place that makes you extend your trip and come back every year. This guide tells you exactly when to show up at every stop.
            </p>
          </blockquote>

          {/* ── WHAT CHIANG MAI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Chiang Mai Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Chiang Mai is the cultural capital of northern Thailand, a 700-year-old walled city surrounded by a moat, sitting in a river valley ringed by mountains. It was the seat of the Lanna Kingdom, which had its own language, script, architecture, and cuisine distinct from Bangkok and the south. Over 300 temples sit inside and around the Old City, most of them still active Buddhist monasteries where monks chant at dawn.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: the Old City (inside the moat) and Nimmanhaemin Road are the main tourist areas but remain walkable, affordable, and genuinely charming. Unlike Phuket or Pattaya, Chiang Mai has not been overdeveloped. Street food is ฿30-60 per dish, a temple entry is ฿20-40, and a Grab across town is ฿60-100. The cafe culture rivals Melbourne, the night markets are the best in Thailand, and ethical elephant sanctuaries in the surrounding hills offer some of the most meaningful wildlife experiences in Southeast Asia.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is ideal for the essentials: Old City temples, Doi Suthep, an elephant sanctuary, a cooking class, and the night markets. If you have a week, add Doi Inthanon (Thailand&apos;s highest peak), a Chiang Rai day trip for the White Temple, or a trek into the hill-tribe villages.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CNX" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Feb" />
              <StatCard icon="🛕" label="Temples" value="300+" />
              <StatCard icon="💰" label="Budget From" value="฿600/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Chiang Mai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Cool Season — Best Overall",
                  d: "15–28°C with low humidity, clear skies, and comfortable temperatures even at midday. December and January nights can drop to 12–15°C, especially at Doi Suthep and Doi Inthanon. This is peak tourist season but Chiang Mai handles it well. The best weather of the year for temple visits, trekking, and the night markets.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "💨",
                  t: "Burning Season — Avoid",
                  d: "30–40°C with hazardous air quality. Farmers burn crop residue across northern Thailand and the smoke settles in the Chiang Mai valley. AQI regularly exceeds 200, sometimes 400+. Visibility drops to a few hundred metres, temples disappear in haze, and outdoor activities become genuinely unhealthy. Avoid these months completely if possible.",
                  b: "Avoid — air quality hazard",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "May–Oct",
                  i: "🌧️",
                  t: "Rainy Season — Good Value",
                  d: "25–33°C with afternoon showers, usually 1–2 hours. Mornings are often clear and perfect for temple visits. The landscape is at its most lush and green. Prices drop 20–40% across the board. Waterfalls are at full power. Fewer tourists at every site. Pack a light rain jacket and adjust your timing to mornings.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Songkran (Apr 13–15)",
                  i: "💦",
                  t: "Thai New Year — Water Festival",
                  d: "The entire city becomes a water fight for three days. Despite the burning season air quality, Songkran in Chiang Mai is the biggest and most famous celebration in all of Thailand. If you can handle the heat and haze, it is an extraordinary cultural experience. Book accommodation months ahead and waterproof your electronics.",
                  b: "Cultural event",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Chiang Mai</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Chiang Mai International Airport (CNX) is just 10 minutes from the Old City by Grab. <strong className="font-medium">Indian passport holders need an eVisa, VOA (฿2,000, 15 days), or tourist visa from the Thai embassy.</strong> Most Western passports get 30–60 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights to Chiang Mai",
                  d: "No direct international flights from India — connect through Bangkok (1 hr domestic, ฿1,200–3,000 one way on AirAsia, Thai Lion, Nok Air). From Bangkok airports (BKK/DMK), 15+ daily flights to CNX. From Southeast Asia: direct flights from Singapore (3.5 hrs), KL (3 hrs), and Hong Kong (3 hrs) on AirAsia and Thai Smile.",
                  b: "Most common route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Bangkok",
                  d: "The overnight sleeper from Bangkok Hua Lamphong to Chiang Mai is a classic backpacker experience. 12–14 hours, departing 6–8pm. Second-class sleeper: ฿800–1,000 (~$23–28). First-class: ฿1,400–1,800 (~$40–51). Book at least 3 days ahead on 12go.asia or at the station. The scenery through the mountains at dawn is spectacular.",
                  b: "Classic experience",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚐",
                  t: "Songthaew system in Chiang Mai",
                  d: "Red trucks (songthaews) are Chiang Mai's shared public transport. Wave one down, tell the driver your destination, and pay ฿20–60/person when you exit. They run fixed-ish routes around the Old City, Nimman, and the university area. For Doi Suthep, shared songthaews leave from near Chiang Mai Zoo (฿40–60/person up, ฿40 down). Grab works perfectly for everything else.",
                  b: "Local transport",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Airport to Old City",
                  d: "Grab from CNX airport to Old City: ฿100–150 (~$3–4), 10 minutes. The airport taxi counter charges ฿150–200. Do not negotiate with touts inside arrivals — walk to the pickup area and use the Grab app. Some guesthouses offer free airport pickup if you book directly.",
                  b: "10 min ride",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Chiang Mai Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (฿1,500–3,000/day, ~$42–85). Each day card is expandable. Base yourself in the Old City or Nimman area. Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old City Temples, Tha Phae Gate & Night Market"
                cost="฿800–1,500 (~$23–42) excluding accommodation"
                items={[
                  "Arrive CNX — Grab to Old City ฿100–150 (~$3–4). Check into your hotel or guesthouse. The Old City is perfectly sized for walking — everything within the moat is reachable on foot.",
                  "2pm: Temple walk — Wat Chedi Luang (massive 14th-century partially ruined chedi, free), Wat Phra Singh (Chiang Mai's most revered temple with gold-topped chedi and Lanna murals, ฿40/~$1), Wat Chiang Man (oldest temple in the city from 1296, free). Budget 2.5–3 hours for all three.",
                  "5pm: Tha Phae Gate — the iconic old city entrance and best golden-hour photo spot. Street performers and pigeon-feeding happen here every evening.",
                  "If Sunday: Sunday Night Market (Walking Street) starts at 4pm on Ratchadamnoen Road. The best market experience in Thailand — a full kilometre of food, handmade crafts, and live music. Budget ฿500–800 (~$14–23) for food and souvenirs.",
                  "If not Sunday: Night Bazaar (daily) on Chang Khlan Road for shopping and food stalls. Saturday Night Market on Wualai Road (slightly less crowded, equally good food). Khao soi at Cowboy Hat Lady stall ฿40 (~$1).",
                  "Evening dinner (if not market): Chang Phuak Gate night food stalls — legendary among locals. Cowboy Hat Lady's pork leg rice ฿40.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Doi Suthep Temple, Nimman Cafe Crawl & Sunset"
                cost="฿1,000–1,800 (~$28–51) excluding accommodation"
                items={[
                  "7:30am: Grab or songthaew to Doi Suthep — ฿300–400 by Grab, or ฿40–60/person by shared songthaew from near Chiang Mai Zoo. Beat the tour groups by arriving before 9am.",
                  "Wat Phra That Doi Suthep — climb the 306-step Naga staircase (or cable car ฿50/~$1.40) to the golden chedi. Entry ฿30 (~$1). Panoramic views of the entire city. Morning light through the golden chedi is extraordinary. Monks chanting if you arrive early enough.",
                  "9:30am: Side trip to Doi Suthep–Pui National Park — Hmong hill tribe village 15 min further up the mountain. Small market with handmade textiles and silver jewellery.",
                  "11am: Back to city. Lunch at Khao Soi Khun Yai — famous for Chiang Mai's signature dish. ฿50 (~$1.40) for a bowl that will change your khao soi standards forever.",
                  "1pm: Nimmanhaemin Road (Nimman) — Chiang Mai's hip neighbourhood. Cafe crawl: Ristr8to (award-winning latte art, ฿80–120), CAMP at Maya Mall (co-working with coffee purchase), Graph Cafe (specialty coffee + brunch ฿200–350). Walk the sois (side streets) for boutique shops and art galleries.",
                  "6pm: Sunset dinner at a Nimman rooftop or Ping River restaurant. Pad kra pao ฿45 (~$1.30), mango sticky rice ฿40 (~$1.10). Nimman Soi 9 has the best cluster of evening restaurants.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ethical Elephant Sanctuary & Thai Cooking Class"
                cost="฿3,500–5,000 (~$99–141) all-inclusive"
                items={[
                  "Full day: Ethical elephant sanctuary — ฿2,500–3,500/person for full-day programmes at Elephant Nature Park (the gold standard) or Elephant Jungle Sanctuary. Includes hotel pickup, lunch, and full programme.",
                  "Elephant riding is cruel and causes spinal damage. Ethical sanctuaries let you feed, bathe, and walk WITH elephants freely. No riding, no chains, no bullhooks. The experience is genuinely better AND ethical.",
                  "Activities: prepare food baskets, feed elephants sugar cane and bananas, walk alongside them through jungle trails, mud bath and river bathing with the elephants. Learn each elephant's rescue story from the guides. Emotional and unforgettable.",
                  "Back by 2–3pm. Rest and freshen up at your hotel.",
                  "4–5pm: Half-day Thai cooking class — ฿800–1,500/person (~$23–42). Mama Noi, Thai Farm Cooking School, or Pantawan Cooking School. Flower market visit + 5 dishes including khao soi and pad thai. You eat everything you cook.",
                  "Evening: you are full from cooking class. Night cap at a rooftop bar on Nimman or a riverside spot along the Ping River.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sticky Waterfall OR White Temple Day Trip & Farewell"
                cost="฿1,000–2,500 (~$28–70) excluding accommodation"
                items={[
                  "OPTION A — Sticky Waterfall (Bua Tong): 60km north. Half-day tour ฿800–1,200/person with hotel transfer, or Grab ฿600–800 each way (split with fellow travellers). The limestone surface is naturally adhesive so you can walk UP the waterfall barefoot. Free entry. Truly unique. Combine with Mae Sa Waterfall.",
                  "OPTION B — White Temple (Wat Rong Khun) day trip to Chiang Rai: 200km, 3 hours. Full-day tour ฿1,500–2,500/person all-inclusive, or budget bus ฿130–200 one way. Surreal white temple covered in mirrors. Entry ฿100 (~$3). Combine with Blue Temple (free) and Black House Museum (฿80/~$2).",
                  "If staying in town: Royal Park Rajapruek botanical garden (฿200 entry), then a 2-hour Thai massage at Fah Lanna Spa (฿600–900/~$17–25).",
                  "4pm: Last cafe stop at Akha Ama Coffee (Old City) — ethically sourced Akha hill tribe coffee. ฿80–120. The brand's story of bringing specialty coffee revenue back to hill tribe communities is worth asking about.",
                  "Final dinner: Huen Phen restaurant (Old City) for authentic Northern Thai — khantoke set meal ฿200 (~$6). The traditional Lanna feast served on a round tray. Or SP Chicken (Nimman Soi 1) — famous rotisserie half chicken + sticky rice ฿150.",
                  "Last market run: pick up Thai handicrafts, hill tribe textiles, and handmade soap as souvenirs. Much cheaper than Bangkok prices.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Chiang Mai" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE & LANDMARK GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛕 Temple &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important temples and landmarks in order of priority. Modest dress is required at all temples — cover shoulders and knees. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Wat Phra That Doi Suthep",
                  e: "฿30 (~$1)",
                  d: "The golden temple on the mountain, visible from anywhere in the city. 306 steps up the Naga staircase (or cable car ฿50) to a shimmering golden chedi, panoramic city views, and monks chanting at dawn. Chiang Mai's most important religious site and the one thing everyone must see. Visit before 9am to beat tour groups.",
                  t: "Must see · Morning · 2 hrs",
                },
                {
                  n: "Wat Chedi Luang",
                  e: "Free",
                  d: "Massive 14th-century brick chedi in the heart of Old City. Originally 82 metres tall (now about 60m after a 16th-century earthquake), it once housed the Emerald Buddha now in Bangkok. The scale of the ruined chedi is extraordinary — it remains one of the most imposing structures in northern Thailand. Monk chats available daily.",
                  t: "Must see · Old City · 1 hr",
                },
                {
                  n: "Wat Phra Singh",
                  e: "฿40 (~$1)",
                  d: "Chiang Mai's most revered temple, housing the city's most important Buddha image. Gold-topped chedi, beautiful Lanna murals in the Lai Kham chapel, and an active monastery. The architecture is a masterclass in Lanna design. Best visited in the late afternoon when the light hits the gold.",
                  t: "Must see · Old City · 1 hr",
                },
                {
                  n: "Wat Umong",
                  e: "Free",
                  d: "Underground tunnel temple in a forested setting outside the Old City. Built in the 14th century, the tunnels were designed for monk meditation. Atmospheric, quiet, and completely unlike any other Chiang Mai temple. A deer park and lake add to the peaceful atmosphere. Best visited weekday mornings.",
                  t: "Hidden gem · 1.5 hrs",
                },
                {
                  n: "Wat Chiang Man",
                  e: "Free",
                  d: "The oldest temple in Chiang Mai, founded by King Mengrai in 1296 when he established the city. Houses two important Buddha images including a tiny crystal Buddha. The elephant-buttressed chedi is the most photographed element. Less crowded than Wat Phra Singh but equally significant.",
                  t: "Historic · Old City · 45 min",
                },
                {
                  n: "Sticky Waterfall (Bua Tong)",
                  e: "Free",
                  d: "A limestone waterfall 60km north of the city where the mineral surface is naturally adhesive — you can walk up the cascading water barefoot without slipping. Unlike anything else in Thailand. Best combined with a half-day trip to the area. Wear clothes you do not mind getting wet.",
                  t: "Unique · Half day · 60km",
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
            title="Chiang Mai — Temples, Mountains &amp; Markets"
            subtitle="The 700-year-old Lanna capital and one of the most culturally rich cities in Southeast Asia."
            spots={[
              {
                name: "Doi Suthep Golden Chedi",
                query: "doi suthep chiang mai golden chedi temple mountain stairs naga",
                desc: "The golden temple on the mountain — 306 steps up the Naga staircase for panoramic city views and shimmering Buddhist architecture.",
              },
              {
                name: "Old City Temples",
                query: "chiang mai old city wat chedi luang ancient brick temple ruins",
                desc: "Over 300 temples within and around the moat walls. Wat Chedi Luang, Wat Phra Singh, and Wat Chiang Man are the essential three.",
              },
              {
                name: "Sunday Night Market",
                query: "chiang mai sunday walking street night market lanterns crafts food",
                desc: "A full kilometre of food stalls, handmade crafts, and live music every Sunday on Ratchadamnoen Road — the best market in Thailand.",
              },
              {
                name: "Elephant Sanctuary",
                query: "thailand elephant sanctuary jungle river bathing ethical nature",
                desc: "Ethical sanctuaries where rescued elephants roam freely. Feed, bathe, and walk with them — no riding, no chains.",
              },
              {
                name: "Sticky Waterfall (Bua Tong)",
                query: "bua tong sticky waterfall chiang mai limestone cascade jungle green",
                desc: "A limestone waterfall you can walk up barefoot. The mineral surface is naturally adhesive — truly a one-of-a-kind experience.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Chiang Mai is one of the cheapest destinations in Southeast Asia at every price level. Budget travellers can live well on $17–38/day, mid-range on $42–85/day, and luxury on $140+/day. All prices in Thai Baht (THB) and USD at ~฿35.5 = $1.
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
                    ["🏨 Accommodation (4N)", "฿800–2,400 ($23–68)", "฿3,200–8,000 ($90–225)", "฿20,000–80,000 ($563–2,254)"],
                    ["🍜 Food & Drinks", "฿600–1,200 ($17–34)", "฿2,000–4,000 ($56–113)", "฿8,000–20,000 ($225–563)"],
                    ["🚌 Transport", "฿300–600 ($8–17)", "฿800–1,600 ($23–45)", "฿3,000–8,000 ($85–225)"],
                    ["🎯 Tours & Activities", "฿2,500–4,500 ($70–127)", "฿5,000–10,000 ($141–282)", "฿20,000–40,000 ($563–1,127)"],
                    ["🛒 Shopping & Extras", "฿0–500 ($0–14)", "฿1,000–3,000 ($28–85)", "฿3,000–10,000 ($85–282)"],
                    ["TOTAL (per person)", "฿2,400–4,800 ($68–135)", "฿6,000–12,000 ($170–340)", "฿20,000+ ($565+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (฿600–1,200/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels and guesthouses (฿200–600/night), eat at market stalls and local restaurants (฿30–60/meal), take songthaews and rent bicycles in the Old City. Chiang Mai is one of the cheapest cities in Asia at this level.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (฿1,500–3,000/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels with pool (฿800–2,000/night), a mix of street food and restaurant dining, Grab for transport, and premium tours like Elephant Nature Park. The sweet spot for comfort and value.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (฿5,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star resorts like Four Seasons or Dhara Dhevi (฿5,000–20,000/night), private tours with expert guides, spa days, and fine dining. Chiang Mai luxury costs a fraction of what you would pay in Europe or Japan for equivalent quality.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Chiang Mai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Old City (inside the moat) is best for first-timers — walkable, temple access, night markets. Nimman is the hip neighbourhood with cafes and boutiques. Riverside along the Ping River has quiet boutique options. For 4 days, Old City is our recommendation.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Stamps Hostel",
                  type: "Budget Hostel · Old City",
                  price: "From ฿250/night (~$7)",
                  badge: "Budget pick",
                  desc: "Clean, social hostel inside the Old City moat with excellent common areas, a small pool, and walking distance to every major temple. Dorm beds from ฿250, private rooms from ฿600. The staff help with tour bookings and transport. The rooftop is a great spot for meeting fellow travellers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Ping Nakara Boutique Hotel",
                  type: "Boutique Heritage · Old City",
                  price: "From ฿2,500/night (~$70)",
                  badge: "Mid-range pick",
                  desc: "Beautifully restored colonial-era mansion with Lanna design touches, a garden pool, and an excellent breakfast spread. Walking distance to Wat Chedi Luang and the Sunday Night Market route. The architecture alone is worth the stay — intricate woodwork, period furniture, and a sense of old-world Chiang Mai that most modern hotels lack.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Four Seasons Chiang Mai",
                  type: "Luxury Resort · Mae Rim",
                  price: "From ฿12,000/night (~$340)",
                  badge: "Luxury pick",
                  desc: "Pavilion-style resort set among working rice paddies in the Mae Rim valley, 20 minutes from the city. Private balconies overlooking the paddies, a world-class spa, and a cooking school on-site. The buffalo in the paddies at sunrise and the mountain backdrop make this one of the most beautiful resort settings in Southeast Asia.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "BED Nimman Hotel",
                  type: "Modern Boutique · Nimman",
                  price: "From ฿1,200/night (~$34)",
                  badge: "Best for cafes",
                  desc: "Stylish, modern hotel in the heart of the Nimman cafe district. Clean rooms with good design, rooftop pool, and you can walk to Ristr8to, CAMP, and dozens of other cafes within minutes. Not as historic as Old City options but ideal if the cafe and nightlife scene is your priority.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Riverside guesthouses",
                  type: "Budget–Mid · Ping River",
                  price: "From ฿400–1,500/night (~$11–42)",
                  badge: "Quiet base",
                  desc: "The streets along the Ping River east of the Old City have dozens of family-run guesthouses and small boutique hotels. Quieter than Old City, with river views and a 10-minute walk or short Grab to the main temples. Look on Booking.com for options rated 8+ — many excellent places that do not appear on the first page of results.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Chiang Mai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Chiang Mai has the best food scene in northern Thailand and arguably the best street food value in the country. The signature dish is khao soi (coconut curry noodles with crispy noodle topping) and you should eat it at least three times from three different places. Here are the spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Khao Soi Khun Yai",
                  t: "Khao Soi Specialist · Old City area",
                  d: "The most famous khao soi in Chiang Mai and arguably in all of Thailand. A simple shop with plastic chairs and one dish done to perfection: rich coconut curry broth, fresh egg noodles, crispy noodle topping, pickled mustard greens, and shallots. ฿50 per bowl (~$1.40). Opens at 9am, closes when the pot runs out (usually by 1pm). No visit to Chiang Mai is complete without eating here.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Huen Phen",
                  t: "Traditional Northern Thai · Old City",
                  d: "The best place to try authentic Northern Thai cuisine in a traditional teak house setting. Daytime is a simple shopfront serving excellent khao soi and kaeng hang lay (Burmese-style pork curry). Evening transforms into a lantern-lit antique-filled dining room with a full Northern Thai menu. Khantoke set meal ฿200 (~$6). Mains ฿60–180.",
                  b: "Best Northern Thai",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Chang Phuak Gate Night Stalls",
                  t: "Street Food · North Old City",
                  d: "The legendary night food stalls outside Chang Phuak Gate, operating every evening from 5pm. The Cowboy Hat Lady (Khao Kha Moo — braised pork leg on rice, ฿40/~$1) has been a Chiang Mai institution for decades. Sai ua (northern Thai sausage) ฿30, pad thai ฿40. Budget ฿100–200 for a full dinner crawl.",
                  b: "Best street food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "SP Chicken",
                  t: "Rotisserie Chicken · Nimman Soi 1",
                  d: "Famous rotisserie chicken place with a perpetual queue. Half chicken plus sticky rice ฿150 (~$4). The chicken is marinated in herbs and slow-roasted to crispy-skinned perfection. Worth the 15–20 minute wait. Open 10am–6pm or until sold out. A Chiang Mai institution.",
                  b: "Local favourite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Sunday Night Market Food",
                  t: "Market Stalls · Ratchadamnoen Road",
                  d: "The Sunday Walking Street market has the highest concentration of excellent street food in Chiang Mai. Sai ua ฿30, khao soi ฿40–60, mango sticky rice ฿40, rotee (Thai crepe) ฿30, grilled skewers ฿20–30. The crawl stretches a full kilometre. Pace yourself and bring cash — no card payments at stalls.",
                  b: "Sunday only",
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
            destination="Chiang Mai"
            hotels={[
              {
                name: "Stamps Hostel",
                type: "Budget Hostel · Old City",
                price: "From ฿250/night (~$7)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/th/stamps-hostel.html?aid=2820480",
              },
              {
                name: "Ping Nakara Boutique Hotel",
                type: "Boutique Heritage · Old City",
                price: "From ฿2,500/night (~$70)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/th/ping-nakara.html?aid=2820480",
              },
              {
                name: "Four Seasons Chiang Mai",
                type: "Luxury Resort · Mae Rim",
                price: "From ฿12,000/night (~$340)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/th/four-seasons-resort-chiang-mai.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ethical Elephant Sanctuary Half Day",
                duration: "Half day",
                price: "From ฿1,500/person (~$42)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=chiang-mai+elephant+sanctuary&partner_id=PSZA5UI",
              },
              {
                name: "Thai Cooking Class with Market Tour",
                duration: "Half day",
                price: "From ฿800/person (~$23)",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=chiang-mai+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Doi Suthep & Doi Pui Temple Tour",
                duration: "Half day",
                price: "From ฿500/person (~$14)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=chiang-mai+doi+suthep+tour&partner_id=PSZA5UI",
              },
              {
                name: "White Temple Chiang Rai Day Trip",
                duration: "Full day",
                price: "From ฿800/person (~$23)",
                url: "https://www.getyourguide.com/s/?q=chiang-rai+white+temple+day+trip&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="chiang-mai-4-days-pdf"
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💨",
                  title: "Visiting in March–April (burning season)",
                  desc: "Farmers burn crop residue and the air quality becomes hazardous. AQI regularly exceeds 200, sometimes 400+. Visibility drops, temples disappear in haze, and outdoor activities become genuinely unhealthy. Avoid these months completely if possible — check real-time AQI at iqair.com before booking.",
                },
                {
                  icon: "🐘",
                  title: "Riding elephants",
                  desc: "Elephant riding causes spinal damage to the animals. Ethical sanctuaries offer feeding, bathing, and walking WITH elephants — the experience is genuinely better and does not cause harm. Ask any sanctuary if they use chains or bullhooks. If yes, walk away.",
                },
                {
                  icon: "🍜",
                  title: "Only eating on Nimman Road",
                  desc: "Nimman has great cafes but tourist-priced food. Walk 10 minutes to the local markets near Chiang Mai University or Chang Phuak Gate for khao soi at ฿40 instead of ฿150. Ask your guesthouse staff where they eat — that is where the real food is.",
                },
                {
                  icon: "🚕",
                  title: "Taking tuk-tuks without negotiating",
                  desc: "Chiang Mai tuk-tuks and red trucks are not metered. Agree on the price BEFORE getting in. Short rides within Old City should be ฿40–60/person. Use Grab for fixed prices and AC — it works perfectly in Chiang Mai unlike some other Thai cities.",
                },
                {
                  icon: "⛪",
                  title: "Visiting Doi Suthep after 10am",
                  desc: "Tour buses arrive at 10am and the temple gets crowded and hot. Go at 7:30–8am for peaceful photos, monk chanting, and the best morning light through the golden chedi. The difference between 8am and 11am is the difference between a spiritual experience and a tourist queue.",
                },
                {
                  icon: "🌟",
                  title: "Missing the Sunday Walking Street",
                  desc: "Plan your trip to include a Sunday if at all possible. The Sunday Night Market on Ratchadamnoen Road is the best market experience in Thailand — better than any Bangkok market. The food alone is worth rearranging your dates.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Chiang Mai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍜",
                  title: "Khao Soi Is Life",
                  desc: "Chiang Mai's signature dish: coconut curry noodles with crispy noodle topping. Best bowls: Khao Soi Khun Yai (฿50), Khao Soi Mae Sai (฿45), Khao Soi Lam Duan (฿55). Try all three — you will have a favourite by the end of the trip.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☕",
                  title: "Cafe Capital of Thailand",
                  desc: "Chiang Mai has more specialty coffee shops per square km than Bangkok. Akha Ama (hill tribe coffee), Ristr8to (latte art world champion), Graph Cafe, and Rustic & Blue are essential stops. Budget ฿80–150 per coffee.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚲",
                  title: "Rent a Bicycle in Old City",
                  desc: "The Old City (inside the moat) is perfectly flat and everything is within 1km. Bicycle rental ฿50–80/day (~$1.40–2.25). Better than Grab for short hops and you can stop anywhere. Most guesthouses rent them.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📱",
                  title: "Grab Works Perfectly Here",
                  desc: "Unlike Phuket, Grab works really well in Chiang Mai. Fixed prices, no negotiating, AC. Use for anything outside the Old City. Songthaews (red trucks) for ultra-budget local transport at ฿20–60/person.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎶",
                  title: "Zoe in Yellow for Nightlife",
                  desc: "The intersection around Zoe in Yellow bar on the east side of Old City is Chiang Mai's nightlife hub. Open-air bars, live music, backpacker crowd. Not wild like Bangkok — more chill and friendly. Thursday and Saturday are the busiest nights.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🧥",
                  title: "Bring Layers for Cool Season",
                  desc: "November–February nights can drop to 12–18°C, especially at Doi Suthep and Doi Inthanon. Most tourists pack only for tropical heat and freeze at mountain temples. A light jacket or hoodie is essential.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💱",
                  title: "Cash is king at markets",
                  desc: "Night markets, songthaews, and most street food stalls are cash only. ATMs charge ฿220 per withdrawal. Get a travel card with no foreign transaction fees, or exchange cash at SuperRich (orange) in the city for the best rates.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🙏",
                  title: "Monk Chat programme",
                  desc: "Several temples (Wat Chedi Luang, Wat Suan Dok) run Monk Chat sessions where you can sit and talk with English-speaking monks. Free. It is one of the most unique cultural experiences in Thailand — they want to practise English and share Buddhist perspectives. Check schedules at the temple.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Chiang Mai" />

          {/* Combine With */}
          <CombineWith currentSlug="chiang-mai-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days are enough for Chiang Mai?",
                  a: "4 days is ideal for Old City temples, Doi Suthep, an elephant sanctuary, a cooking class, and the night markets. 3 days works if you skip a day trip. 5–7 days lets you add Doi Inthanon, Pai, a Chiang Rai day trip, or a multi-day hill tribe trek.",
                },
                {
                  q: "How much does a 4-day Chiang Mai trip cost?",
                  a: "Budget solo: ฿2,400–4,800 ($68–135) total including accommodation, food, transport and activities. Mid-range: ฿6,000–12,000 ($170–340). Luxury: ฿20,000+ ($565+). Chiang Mai is one of the cheapest quality destinations in Southeast Asia — mid-range comfort here rivals luxury in many countries.",
                },
                {
                  q: "What is the best time to visit Chiang Mai?",
                  a: "November–February: cool season (15–28°C), clear skies, perfect weather — the best time. March–April: AVOID — burning season with hazardous air quality. May–October: rainy season with lush greenery, lower prices, and afternoon showers that rarely last more than 1–2 hours.",
                },
                {
                  q: "Do I need a visa for Thailand?",
                  a: "Indian passport holders: eVisa online (60 days), VOA at CNX airport (฿2,000, 15 days), or Tourist Visa from the Thai embassy (60 days + 30-day extension). Most Western passports (USA, UK, EU, Australia, Canada): 30–60 days visa-free. If flying from Bangkok to Chiang Mai, no additional visa is needed.",
                },
                {
                  q: "Are elephant sanctuaries in Chiang Mai ethical?",
                  a: "Not all of them. Avoid any offering rides, using chains, or bullhooks. Ethical sanctuaries let you feed, bathe, and walk with elephants freely — no riding. Elephant Nature Park is the gold standard for rescue and rehabilitation. The experience is better when the elephants are treated well.",
                },
                {
                  q: "What is the best area to stay in Chiang Mai?",
                  a: "Old City (inside the moat): walkable to temples, night markets, and restaurants — best for first-timers and our top recommendation for 4 days. Nimman Road: cafes, boutiques, modern vibe, better nightlife. Riverside (Ping River): quiet, romantic, boutique hotels. Mae Rim (20 min out): luxury resorts in rice-paddy settings.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Chiang Mai trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-chiang-mai", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/chiang-mai-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-chiang-mai", label: "How to get there", icon: "✈️" },
                { href: "/blog/chiang-mai-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="chiang-mai-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Thailand &amp; Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bangkok &mdash; 4 Day Temple & Food Guide", href: "/blog/bangkok-4-days" },
                { label: "Phuket &mdash; 5 Day Island Guide", href: "/blog/phuket-5-days" },
                { label: "Bali &mdash; 5 Day Guide", href: "/blog/bali-5-days" },
                { label: "Vietnam &mdash; 10 Day Itinerary", href: "/blog/vietnam-10-days" },
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
