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
const BEIJING_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Beijing Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Beijing 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Beijing in 5 Days — Great Wall, Forbidden City, hutongs and Peking duck&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/beijing-5-days"
        imageUrl="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80"
        description="Beijing in 5 Days: Great Wall at Mutianyu, Forbidden City booking secrets, hutong rickshaw tours, Peking duck at Quanjude — complete travel guide with budget breakdown."
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
export default function BeijingClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BEIJING_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Beijing" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="beijing great wall of china forbidden city tiananmen"
            fallback="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&q=80"
            alt="Beijing Great Wall of China stretching across misty mountains at sunrise"
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
              <span className="text-white/70">Beijing 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-red-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Beijing in 5 Days:
                <em className="italic text-amber-300"> Great Wall, Forbidden City &amp; the Hutongs</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Forbidden City at 8:30am before the crowds, the Great Wall at Mutianyu with the toboggan down, Peking duck at the 1864 original, and the hutong alleyways still misty at dawn. The complete guide.
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
              <span>🇨🇳 Beijing, China</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ¥200/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-red-500 pl-6 mb-10 bg-red-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Beijing at 7am — the Forbidden City glowing amber in the first light before the crowds, a bowl of jianbing from the street cart for ¥8, the hutong alleyways still misty and quiet — is one of the genuinely great travel experiences in Asia.
            </p>
          </blockquote>

          {/* ── WHAT BEIJING ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Beijing Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Beijing has been China&apos;s capital — almost without interruption — since the 13th century. It is a city of extraordinary contradictions: a place where you can stand in a 600-year-old imperial courtyard, then walk ten minutes to a glass-and-steel skyscraper district, then turn into a hutong alley where the same families have lived for generations and the layout of the lanes hasn&apos;t changed since the Ming dynasty.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Forbidden City — 180 acres, 980 buildings, 9,999 rooms — was the world&apos;s largest palace complex for five centuries. The Great Wall at Mutianyu is the most photogenic and most physically satisfying section accessible in a day trip. The hutongs, the ancient grey-tiled alley neighbourhoods that once covered most of the old city, are now rapidly disappearing — what&apos;s left is extraordinary.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the right amount of time. Less and you&apos;re rushing the Forbidden City and cutting the Wall day short. More and you start padding. Five days gives you the Wall, the palace complex, the temples, the hutongs, and enough time to eat Peking duck twice — once at lunch (30% cheaper) and once at a proper dinner.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="PEK / PKX" />
              <StatCard icon="🌡️" label="Best Season" value="Sep–Oct, Apr–May" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="3 in Beijing" />
              <StatCard icon="💰" label="Budget From" value="¥200/day (~$28)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Beijing</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-orange-800 font-light">
                <strong className="font-medium">Air quality note:</strong> Beijing&apos;s notorious smog (PM2.5 pollution) is worst November–February and during thermal inversions in summer. September–October and April–May have the best air quality and most photogenic skies. Check the AQI on a local weather app before planning outdoor activities — above 150 AQI, the Wall photographs grey and the distances disappear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Best Season",
                  d: "15–25°C, clear skies, low pollution. The Great Wall surrounded by turning golden foliage in October is one of China&apos;s most spectacular sights. The Forbidden City&apos;s red walls against a blue Beijing sky. This is peak tourist season — book the Forbidden City well in advance.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Excellent",
                  d: "10–22°C, blossoms on the hutong trees, manageable crowds before the summer rush. April in Beijing has a fleeting beauty — the willows around Houhai Lake, the cherry blossoms near the Summer Palace. Air quality is generally good. Avoid the week around Chinese Labour Day (May 1–5) when domestic tourism surges.",
                  b: "Excellent choice",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Hot & Crowded",
                  d: "28–38°C with high humidity. The Great Wall in July heat is genuinely punishing. The Forbidden City has no shade and the stone courtyards reflect and amplify the heat. Crowds peak in July–August with both international and domestic tourists. If you must visit in summer, start every day at 8am and be inside by noon.",
                  b: "Morning visits only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Photogenic",
                  d: "−10–5°C. Beijing in light snow is dramatically beautiful — the Forbidden City in white is extraordinary — but the pollution is worst in winter and the wind on the Great Wall is fierce. Crowds are minimal outside of Chinese New Year. Pack very warm layers if visiting December–February. The Wall at Mutianyu can be icy and treacherous.",
                  b: "For cold-weather travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Beijing</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">VPN warning:</strong> Google, WhatsApp, Instagram, and most Western apps are blocked in China. Download a VPN (ExpressVPN, Astrill, or NordVPN — check current reviews) <strong className="font-medium">before boarding your flight</strong>. VPN apps cannot be downloaded once you land. This is the single most important pre-travel task for Beijing.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Beijing Capital Airport (PEK) — main international hub",
                  d: "PEK is 35km northeast of central Beijing. Airport Express train: Line 10 + Airport Express, ¥35, 45 minutes to Dongzhimen. Taxi: ¥100–150, 45–75 minutes (traffic-dependent). PEK handles most international routes including direct flights from major Indian cities (Delhi, Mumbai — Air India, Air China, IndiGo).",
                  b: "Most international flights",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Beijing Daxing Airport (PKX) — newer, South Beijing",
                  d: "PKX opened in 2019 and handles growing domestic and some international traffic. Line 20 connects to Caoqiao on Line 10 — total journey to central Beijing: ¥35, 40 minutes. Growing number of budget carriers and some international routes. Check which airport your flight uses before booking.",
                  b: "Growing hub",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India",
                  d: "Direct routes: Air India and Air China operate Delhi–Beijing PEK (5.5 hrs, from ₹18,000–35,000 return). Mumbai–Beijing with connections via Delhi or via other hubs. Budget tip: fly Delhi–Beijing on Air China or via Hong Kong/Singapore on connecting carriers — return fares can dip to ₹15,000–22,000 in low season.",
                  b: "Indian travellers",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Airport Express — the right transfer choice",
                  d: "The Airport Express from PEK to Dongzhimen takes 20 minutes on the express section (non-stop from T3 to Sanyuanqiao then Dongzhimen). From Dongzhimen you connect to Line 2 and Line 13. Total cost ¥35 including one metro connection. Runs 6:20am–10:50pm from the terminals. Vastly preferable to taxis during peak hours.",
                  b: "Best value",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Beijing Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Prices are shown in CNY (¥) with approximate USD equivalents. The itinerary is structured to avoid the worst crowds at major sites — early starts are non-negotiable at the Forbidden City and the Wall.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Tiananmen Square · Forbidden City · Jingshan · Wangfujing"
                cost="¥150–250 (~$21–35) — Forbidden City ¥60 + Jingshan ¥2 + food + metro"
                items={[
                  "8:00am — Tiananmen Square (free) at opening. The world&apos;s largest public square at 440,000m². Arrive early for the flag-raising ceremony at sunrise — exact time varies by season, check the night before. The scale only registers when you&apos;re standing in it.",
                  "9:00am — Forbidden City / Palace Museum (¥60, ~$8.50). Book online at dpm.org.cn — the daily visitor cap is 80,000 and tickets sell out weeks in advance during peak season (May, October). Enter through the Meridian Gate (Wumen). Minimum 4 hours — most visitors underestimate the scale and rush out having seen less than 20%.",
                  "9:30am–1:00pm — Hall of Supreme Harmony, Hall of Central Harmony, Hall of Preserving Harmony (the ceremonial core), then the Inner Court: Palace of Heavenly Purity, Hall of Union, Palace of Earthly Tranquillity. The eastern palaces are less visited and architecturally extraordinary.",
                  "1:30pm — Exit through the Gate of Divine Might (north gate) and immediately climb Jingshan Park (¥2, ~$0.30). The panoramic view of the Forbidden City from the hilltop pavilion — the entire palace complex laid out below you — is the best single photograph in Beijing. Aim for 2pm when the midday crowds thin.",
                  "3:30pm — Wangfujing pedestrian street (10-minute walk east). Scorpions on sticks (¥20–40), silkworm larvae (¥15), stinky tofu (¥5). The Wangfujing Snack Street (the hutong off the main drag) has genuine Beijing street food at ¥5–20 per item.",
                  "7:00pm — Dinner: Beijing-style zhajiangmian (noodles with fermented soybean paste, ¥20–35, ~$3–5) at a local restaurant near Wangfujing or in the hutong streets east of the palace.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Great Wall — Mutianyu Section"
                cost="¥300–420 (~$42–59) — entry ¥65 + cable car ¥130 + toboggan ¥75 + transport + food"
                items={[
                  "6:30am — Leave early. Bus 916 from Dongzhimen station to Huairou (¥16, 1.5h), then shuttle bus to Mutianyu (¥25). Or book a shared minibus from your hostel (¥120–150 all-in including transport and entry — often better value solo). The Wall is non-negotiable.",
                  "9:00am — Mutianyu entry: ¥65 (~$9) + cable car up ¥130 (~$18) return, or ¥80 one-way. Buy the toboggan ticket (¥75, ~$10) before going up — a metal sled on a mountain track for 1,580 metres. It sells out by midday. It&apos;s not gimmicky; it&apos;s genuinely spectacular.",
                  "9:30am–12:30pm — The wall at Mutianyu stretches 2.2km with 22 watchtowers. Walk west from the cable car station — this section is restored but not over-restored. Views toward the unrestored crumbling wall to the east are dramatic. Crowds thin 15 minutes from the cable car in either direction.",
                  "12:30pm — Lunch at Mutianyu village restaurants at the base (¥40–80, ~$6–11 for a full meal). Walk 200m down the road from the ticket gate for local pricing — the restaurants directly at the gate charge tourist premiums.",
                  "3:00pm — Return to Beijing (back by 5:30–6pm). Sanlitun Bar Street for dinner (¥60–150, ~$8–21) or rest early — the wall is physically demanding.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Temple of Heaven · Summer Palace · 798 Art District"
                cost="¥200–320 (~$28–45) — temples + Summer Palace + food + metro"
                items={[
                  "8:00am — Temple of Heaven Park (¥15–35, ~$2–5). Arrive at 8am to see the park locals — hundreds of Beijingers doing tai chi, ballroom dancing, badminton, water calligraphy, and group singing. This daily ritual is more extraordinary than the architecture itself.",
                  "9:30am — Hall of Prayer for Good Harvests — the iconic triple-roofed circular hall where emperors prayed for the harvest. The Echo Wall acoustic phenomenon: whisper against the circular wall and someone at the far end hears you clearly. The Circular Mound Altar is where the emperor stood to commune with heaven at the winter solstice.",
                  "12:00pm — Summer Palace (¥30–60, ~$4–8). Metro Line 4 (35 minutes). The imperial garden covers 2.9km² with Kunming Lake as its centrepiece. Rent a rowboat (¥80/hour) or take the ferry from East Gate to the Marble Boat. The Long Corridor (728m painted gallery) is architecturally unlike anything else in Beijing.",
                  "3:30pm — 798 Art District (free entry, Dashanzi). Former munitions factory complex converted into Beijing&apos;s contemporary art centre — galleries, sculpture parks, cafes, design boutiques. Ullens Center for Contemporary Art (UCCA, ¥50–80, ~$7–11 for major exhibitions) is the anchor.",
                  "7:00pm — Dinner in Chaoyang or near 798: excellent Sichuan restaurants at ¥50–100/person (~$7–14).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Lama Temple · Confucius Temple · Hutongs · Drum Tower · Nanluoguxiang"
                cost="¥200–300 (~$28–42) — temples + Drum Tower + food + metro"
                items={[
                  "9:00am — Yonghe Temple / Lama Temple (¥25, ~$3.50) — the most impressive Tibetan Buddhist temple in China outside Tibet. Five halls of increasing grandeur, ending with a 26-metre sandalwood Buddha carved from a single tree in the Wanfu Pavilion. The incense smoke and chanting create an atmosphere entirely different from the Confucian sites.",
                  "10:30am — Confucius Temple (¥30, ~$4, literally next door) — 198 stone steles recording the names of imperial examination scholars over 700 years. The ancient cypress trees are gnarled and extraordinary.",
                  "12:00pm — Walk 10 minutes south into the hutongs. Nanluoguxiang (free to walk) is the most famous hutong alley — 786 metres of converted courtyard houses with cafes, craft beer bars, and independent shops. The lanes branching off it (Mao&apos;er Hutong, Ju&apos;er Hutong) are quieter and more residential.",
                  "2:00pm — Traditional siheyuan (courtyard house) visit — understanding the courtyard layout explains the entire social structure of old Beijing. Rooms arranged around a central garden by family hierarchy, a design unchanged for 600 years.",
                  "4:00pm — Drum Tower (¥30, ~$4, combined with Bell Tower) — the time-keeping centre of Yuan and Ming dynasty Beijing. Drum performance every 30 minutes. The view over grey-tiled hutong rooftops is the best overview of old Beijing.",
                  "7:00pm — Dinner in the hutongs: Yaoji Chaogan (¥40–60, ~$6–8) for stewed offal noodles — a Beijing institution — or Xinjiang Muslim restaurants on Ghost Street (Gui Jie) for roast lamb skewers (¥60–100, ~$8–14 for a full spread).",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Olympic Park · Old Summer Palace (Yuan Ming Yuan) · Farewell Peking Duck"
                cost="¥280–450 (~$39–63) — sights + Peking duck lunch + airport transfer"
                items={[
                  "9:00am — Olympic Park (Bird&apos;s Nest ¥50 + Water Cube ¥30, ~$7 + $4, or exterior free). The 2008 Olympic Stadium and National Aquatics Centre are extraordinary pieces of architecture. Exterior viewing is free and genuinely impressive.",
                  "11:00am — Yuan Ming Yuan / Old Summer Palace (¥25, ~$3.50). A 350-hectare imperial garden complex burned and looted by British and French troops in 1860 during the Second Opium War. The ruins of the European-style palaces remain exactly as soldiers left them — twisted marble columns, shattered fountains, toppled archways. The contrast with the intact Forbidden City is deliberate and haunting.",
                  "1:30pm — Farewell Peking duck at lunch (same restaurant, approximately 30% cheaper than dinner). Quanjude Qianmen (the 1864 original, ¥198–268/half duck, ~$28–37) or Dadong (more theatrical, better duck, ¥168–288, ~$23–40) — book in advance. The ceremony: thin pancake, hoisin sauce, cucumber batons, spring onion, one precise slice of duck with crackling skin.",
                  "4:00pm — Last metro back to hotel. Collect luggage. Save your WeChat Pay QR codes.",
                  "Departure: PEK is 35km from central Beijing — allow 75–90 minutes by metro (Line 10 + Airport Express, ¥35, ~$5). PKX Daxing is connected by Line 20 (¥35, ~$5, 40 minutes). Do not cut it close — allow extra time.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Beijing" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Beijing Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. The Forbidden City entry (¥60) is Beijing&apos;s most essential booking — do it weeks ahead at dpm.org.cn. All other major sites can be booked same-day.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Forbidden City (Palace Museum)",
                  e: "¥60 (~$8.50) — book at dpm.org.cn",
                  d: "180 acres, 980 buildings, the world&apos;s largest palace complex. 24 emperors lived here across the Ming and Qing dynasties. The visitor cap of 80,000/day means tickets sell out weeks ahead in peak season. Arrive at 8:30am opening. Minimum 4 hours — most visitors underestimate the scale.",
                  t: "Must see · 4–5 hrs",
                },
                {
                  n: "Great Wall at Mutianyu",
                  e: "¥65 (~$9) + cable car ¥130 + toboggan ¥75",
                  d: "The best section for most visitors: restored, dramatically photogenic, manageable crowds if you arrive by 9am. 2.2km walkable wall, 22 watchtowers, and the toboggan descent. An hour from Beijing by bus. Non-negotiable.",
                  t: "Must see · Full day",
                },
                {
                  n: "Temple of Heaven",
                  e: "¥15–35 (~$2–5)",
                  d: "The Hall of Prayer for Good Harvests is the most photographed building in Beijing. Come at 8am for the morning exercise communities. The Echo Wall acoustic effect and the Circular Mound Altar are the hidden highlights. The park grounds are as important as the architecture.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Summer Palace",
                  e: "¥30–60 (~$4–8)",
                  d: "The imperial garden complex of 2.9km² with Kunming Lake. The Long Corridor (728m painted gallery connecting pavilions along the lakeside) is one of the most beautiful structures in Beijing. Rowboats, ferry, and the Marble Boat. Quieter than the Forbidden City.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Tiananmen Square",
                  e: "Free",
                  d: "440,000m² — the world&apos;s largest public square. Arrive at sunrise for the flag-raising ceremony. The gate itself (the image of Mao above the tunnel leading to the Forbidden City) is the defining image of modern Beijing. Arrive early — security lines can be long.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Lama Temple (Yonghe)",
                  e: "¥25 (~$3.50)",
                  d: "The most impressive Tibetan Buddhist temple outside Tibet. Five halls of escalating scale, the 26-metre sandalwood Buddha, and active worship from Beijing&apos;s Tibetan Buddhist community. The spiritual atmosphere is unlike the imperial sites. Allow 1.5 hours.",
                  t: "Underrated · 1.5 hrs",
                },
                {
                  n: "798 Art District",
                  e: "Free (galleries vary)",
                  d: "Cold War munitions factory converted to China&apos;s most important contemporary art space. UCCA (Ullens Center for Contemporary Art) anchors a district of 100+ galleries, sculpture parks, and cafes. The architecture — Bauhaus factory buildings, rusting pipes, soaring ceilings — is as interesting as the art.",
                  t: "Afternoon · 2–3 hrs",
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
            title="Beijing — Palaces, Walls &amp; Hutongs"
            subtitle="Five thousand years of Chinese civilisation in a single city."
            spots={[
              {
                name: "Forbidden City at Sunrise",
                query: "forbidden city beijing palace museum golden roof sunrise china",
                desc: "The Hall of Supreme Harmony at first light — the palace complex covers 180 acres and once housed 24 Chinese emperors.",
              },
              {
                name: "Great Wall Mutianyu",
                query: "great wall china mutianyu watchtowers misty mountains autumn",
                desc: "The Mutianyu section of the Great Wall — 22 watchtowers, 2.2km of walkable restored wall, and the toboggan descent.",
              },
              {
                name: "Temple of Heaven Beijing",
                query: "temple of heaven beijing hall prayer good harvests circular china",
                desc: "The Hall of Prayer for Good Harvests — the most photographed building in Beijing and one of the finest examples of Chinese ceremonial architecture.",
              },
              {
                name: "Beijing Hutongs",
                query: "beijing hutong alley courtyard rickshaw traditional china",
                desc: "The hutong alleyways of central Beijing — ancient grey-tiled lanes where the street layout has barely changed since the Ming dynasty.",
              },
              {
                name: "Summer Palace Kunming Lake",
                query: "summer palace beijing kunming lake long corridor china imperial garden",
                desc: "Kunming Lake at the Summer Palace — the imperial garden complex with its 728-metre painted Long Corridor running along the lakeside.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Beijing is a mid-range city by Asian standards. Budget travel is very possible — the metro is excellent and cheap, street food is extraordinary at ¥5–25 per item, and the major attractions are modestly priced. The main costs are the Wall day (¥300+ with cable car and toboggan) and accommodation.
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
                    ["🏨 Accommodation / night", "¥80–180 (~$11–25)", "¥400–800 (~$56–112)", "¥2,000–8,000 (~$280–1,120)"],
                    ["🍽️ Food / day", "¥60–100 (~$8–14)", "¥150–300 (~$21–42)", "¥500–2,000 (~$70–280)"],
                    ["🚇 Transport / day", "¥20–40 (~$3–6)", "¥80–150 (~$11–21)", "¥300–1,500 (~$42–210)"],
                    ["🏛️ Activities / day", "¥60–100 (~$8–14)", "¥100–200 (~$14–28)", "¥500–2,000 (~$70–280)"],
                    ["TOTAL / day", "¥220–420 (~$31–59)", "¥730–1,450 (~$102–203)", "¥3,300–13,500 (~$462–1,890)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (¥200–420/day, ~$28–59)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm or budget guesthouse (¥80–180/night), eat street food and noodle shops (¥60–100/day), use the metro for everything. Beijing&apos;s metro is one of the best in Asia — cheap, frequent, and covers all the major sights. The Forbidden City, Wall, and temples are cheap to enter; the main cost is the Wall day with cable car.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (¥730–1,450/day, ~$102–203)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in a boutique hotel near the hutongs or Sanlitun (¥400–800/night), eat at proper restaurants including one Peking duck meal, hire a car for the Great Wall day, and add a guided tour of the Forbidden City. This is the sweet spot for a first-time Beijing visit — enough comfort to enjoy it, not so much that you lose connection with the city.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Beijing</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters more in Beijing than in most cities — it&apos;s large, traffic can be brutal, and being near a metro line is essential. The best areas cluster around the historic core: Dongcheng (near the palace), Sanlitun (nightlife and international), Qianmen (south of Tiananmen, hutong feel), and Zhongguancun (northwest, near the Summer Palace).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Near Forbidden City — Dongcheng District",
                  type: "Boutique hotels & hutong guesthouses",
                  price: "¥300–2,000+/night (~$42–280+)",
                  badge: "Best location",
                  desc: "Walking distance to Tiananmen Square, the Forbidden City, and Jingshan Park. The hutong guesthouses here — converted courtyard houses (siheyuan) — are the most atmospheric accommodation in Beijing. Booking.com has several excellent options at ¥400–800/night. The Orchid Hotel is the boutique benchmark.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Sanlitun — Chaoyang District",
                  type: "International hotels & design hotels",
                  price: "¥500–3,000/night (~$70–420)",
                  badge: "Best for nightlife",
                  desc: "Beijing&apos;s international district — embassies, international restaurants, rooftop bars, and the city&apos;s best hotel design. The Opposite House is the standout (contemporary art, excellent restaurant). Close to 798 Art District and 15 minutes from the palace by metro.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Qianmen — South of Tiananmen",
                  type: "Heritage hotels & boutique guesthouses",
                  price: "¥200–800/night (~$28–112)",
                  badge: "Most atmospheric",
                  desc: "The Qianmen area south of Tiananmen Square is one of Beijing&apos;s best-preserved historic commercial districts. Converted merchant houses, the Peking duck institutions (Quanjude original branch nearby), and quiet hutong streets. Capital M restaurant&apos;s rooftop terrace overlooks Tiananmen Gate.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Zhongguancun — Haidian (Northwest)",
                  type: "Business hotels near universities",
                  price: "¥150–400/night (~$21–56)",
                  badge: "Near Summer Palace",
                  desc: "Beijing&apos;s tech and university district — convenient for the Summer Palace and Aman Summer Palace hotel (the luxury pinnacle: a hotel built inside the Summer Palace grounds). Budget-friendly business hotels here offer good value if your priority is the northwest sights.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Beijing</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Beijing&apos;s food culture is extraordinary at every price point — from ¥8 jianbing street crepes to full Peking duck banquet meals at ¥300/person. The three non-negotiables: Peking duck (at least once), jianbing from a street cart for breakfast, and at least one evening on Ghost Street (Gui Jie) for Sichuan hot pot.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Quanjude — Qianmen Branch (Original 1864)",
                  t: "Peking duck institution · Qianmen",
                  d: "The restaurant that invented the Beijing-style roast duck as a formal dining ritual. The original 1864 branch on Qianmen Street — the full ceremony: thin wheat pancake, hoisin sauce, cucumber, spring onion, precise slices of duck with crackling skin. Half duck ¥198–268 (~$28–37). Book in advance. Order the duck liver and duck soup as sides. The theatre and the history justify a visit even if the duck itself isn&apos;t the best in the city.",
                  b: "Historical institution",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "Wangfujing Street Food & Snack Street",
                  t: "Street food · Dongcheng",
                  d: "The most famous street food street in Beijing — scorpions on sticks (¥20–40, ~$3–6), silkworm larvae (¥15), stinky tofu (¥5), starfish. Theatrical and touristy, but the small hutong off the main drag (Wangfujing Snack Street) has genuine Beijing street food at ¥5–20 per item. Particularly good for jianbing (¥8–12, ~$1–2) and zhajiangmian.",
                  b: "Street food landmark",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Ghost Street (Gui Jie) for Hot Pot",
                  t: "Hot pot & Sichuan · Dongzhimen",
                  d: "Ghost Street is Beijing&apos;s late-night restaurant corridor — a 1.4km stretch of Dongzhimen Nei Dajie lit with red lanterns and packed with hot pot restaurants, Sichuan joints, and crayfish specialists from midnight onwards. Haidilao Hot Pot (¥80–150/person, ~$11–21) is the famous chain. The Xinjiang Muslim restaurants for roast lamb skewers are the local choice at ¥60–100 for a full meal.",
                  b: "Late-night destination",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Jianbing from a Street Cart",
                  t: "Breakfast street food · Citywide",
                  d: "The definitive Beijing breakfast: a thin mung bean crepe cooked on a griddle, cracked egg, hoisin sauce, chilli paste, crispy wonton cracker (or a youtiao fried dough stick), folded into a neat package. ¥8–12 (~$1–2). Find a cart near any metro entrance or hutong at 7–9am. This is one of the best street breakfasts in Asia and it costs less than a coffee.",
                  b: "Essential breakfast",
                  c: "bg-green-50 border-green-200",
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
            destination="Beijing China"
            hotels={[
              {
                name: "The Orchid Beijing",
                type: "Boutique hutong hotel · Dongcheng",
                price: "From ¥600/night (~$84)",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/cn/the-orchid-beijing.html?aid=2820480",
              },
              {
                name: "Aman at Summer Palace",
                type: "Ultra-luxury · Inside the Summer Palace grounds",
                price: "From ¥3,000/night (~$420)",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/cn/aman-at-summer-palace.html?aid=2820480",
              },
              {
                name: "The Opposite House Beijing",
                type: "Design hotel · Sanlitun",
                price: "From ¥1,200/night (~$168)",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/cn/the-opposite-house.html?aid=2820480",
              },
              {
                name: "Leo Hostel Beijing",
                type: "Budget hostel · Qianmen hutongs",
                price: "From ¥80/night (~$11)",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/cn/leo-hostel-beijing.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Forbidden City Private Guided Tour",
                duration: "4 hrs",
                price: "From ¥350/person (~$49)",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=forbidden+city+beijing+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Great Wall Mutianyu Day Trip",
                duration: "Full day",
                price: "From ¥280/person (~$39)",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=great+wall+mutianyu+beijing&partner_id=PSZA5UI",
              },
              {
                name: "Beijing Hutong Rickshaw Tour",
                duration: "2 hrs",
                price: "From ¥180/person (~$25)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=beijing+hutong+rickshaw+tour&partner_id=PSZA5UI",
              },
              {
                name: "Beijing Evening Food Tour",
                duration: "3 hrs",
                price: "From ¥250/person (~$35)",
                url: "https://www.getyourguide.com/s/?q=beijing+food+tour+evening&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Beijing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📵",
                  title: "Not Downloading a VPN Before Landing",
                  desc: "Google Maps, WhatsApp, Instagram, Gmail, and most Western apps are blocked by the Great Firewall. VPN apps are themselves blocked in China — they cannot be downloaded once you land. Install ExpressVPN, Astrill, or NordVPN before boarding your flight. Test it works before departure. This is non-negotiable for a functional trip.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎟️",
                  title: "Visiting the Forbidden City Without Booking Online",
                  desc: "The Forbidden City has a strict daily cap of 80,000 visitors. In peak season (May, October, Golden Week) tickets sell out days or weeks in advance. Walk-up tickets are often unavailable. Book at dpm.org.cn as soon as your dates are fixed — you need your passport number. No booking, no entry.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚫",
                  title: "Visiting Badaling Instead of Mutianyu",
                  desc: "Badaling is the closest Great Wall section (75km, 1.5h) and consequently the most overcrowded — 10 million visitors per year. On a weekend in October the wall is shoulder-to-shoulder tourists. Go to Mutianyu: photogenic, restored, toboggan descent, manageable crowds if you arrive before 9am. Add 30–45 minutes transit time and gain everything.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌫️",
                  title: "Not Checking the Air Quality Index",
                  desc: "Beijing&apos;s smog can reduce visibility to a few hundred metres on bad days. Check the AQI (Air Quality Index) using a local weather app or aqicn.org. Above 150 AQI, the Great Wall photographs grey and featureless and outdoor sightseeing is physically unpleasant. Build flexibility into your schedule to swap outdoor days when the AQI is high.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Beijing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Forbidden City: Arrive at 8:30am Exactly",
                  desc: "The Forbidden City opens at 8:30am. Most tourists arrive between 10–11am. At 8:30am the first courtyard is empty and the Hall of Supreme Harmony is accessible without crowds. Spend 4 hours minimum. Exit via the north gate (Gate of Divine Might) and climb Jingshan Park immediately — before the tour buses arrive there at noon.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧗",
                  title: "Mutianyu: First Cable Car at 7:30am",
                  desc: "The first cable car at Mutianyu runs at 7:30am. On weekdays April–October, taking this first car means you have the wall to yourself for 90 minutes — mist in the valleys, no voices, just the wind. By 9am the first tour buses arrive. The sunrise from the hilltop at 7am before the cable car opens is extraordinary. Buy toboggan tickets before going up — they sell out by midday.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛺",
                  title: "Hutong Rickshaw Tour at 6am",
                  desc: "Rickshaw tours of the hutongs run from 6am in the Shichahai and Nanluoguxiang areas. At 6am the hutongs are the real Beijing: elderly residents doing morning exercises, breakfast cooking through open windows, women carrying vegetables from the street market. By 9am the tourist rickshaws have turned the same streets into a theme park. Book the first departure.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍖",
                  title: "Peking Duck at Lunch — 30% Cheaper",
                  desc: "The major Peking duck restaurants (Quanjude, Dadong) charge peak dinner prices in the evening. The lunch menu at the same restaurants, from the same ovens, costs approximately 30% less. Book a lunch reservation, arrive by noon, order the half duck (¥128–198, ~$18–28). Same experience, significantly lower bill. This is the most elegant meal in Beijing.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Set Up WeChat Pay Before Exploring",
                  desc: "Beijing is increasingly cashless — many restaurants, street stalls, and bike-share systems only accept WeChat Pay or Alipay. Since 2023, foreigners can link an international Visa or Mastercard to both apps without a Chinese bank account. Download the apps and complete registration before landing. Having mobile payment unlocks the entire city, including street food at ¥5–8 per item.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚇",
                  title: "Buy a Transport Card, Not Single Tickets",
                  desc: "The Beijing transit card (Yikatong) works on all metro lines, buses, and many taxis. Load it at any metro station with ¥50–100 for the week. Single journey metro fares are ¥3–7 (~$0.40–1) — extremely cheap. The metro covers all major sights and runs from 5am to midnight. It is the fastest and most reliable way to move around Beijing.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Beijing" />

          {/* Combine With */}
          <CombineWith currentSlug="beijing-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a Chinese visa as an Indian passport holder?",
                  a: "Yes. Indian passport holders require a Chinese tourist (L) visa applied for at the Chinese Embassy or an authorised agent before travel. Fee is approximately ¥400–600 (~$56–84) depending on processing speed. Required documents include confirmed hotel bookings, return flight itinerary, bank statements, and travel insurance. Processing typically takes 2–4 business days; apply 2–4 weeks before travel. Check the Chinese Embassy website for any policy changes — China has been expanding visa-free access to certain countries and policies change.",
                },
                {
                  q: "Which VPN works best in China and when should I download it?",
                  a: "Download and test your VPN before boarding your flight — VPN apps are blocked in China&apos;s App Store and Google Play Store and cannot be downloaded after landing. As of 2026, Astrill VPN and ExpressVPN are consistently rated most reliable in China (NordVPN also works but is less stable). Check current reviews before purchasing as performance changes seasonally. Test that your VPN connects successfully on your specific devices before you leave home.",
                },
                {
                  q: "Can foreigners use WeChat Pay and Alipay in China?",
                  a: "Yes — since a 2023 update, foreigners can link an international Visa or Mastercard to both WeChat Pay and Alipay without requiring a Chinese bank account. Cash is increasingly difficult to use in Beijing — many restaurants, shops, and transport systems are entirely cashless. Setting up at least one mobile payment app before arrival is essential. Download the apps and complete the foreign card registration process before landing. ATMs are available at airports and major hotels for cash backup.",
                },
                {
                  q: "Which Great Wall section is best for a first visit?",
                  a: "Mutianyu is the best choice for most first-time visitors: restored walls in excellent condition, dramatic watchtowers, cable car up and toboggan descent, and manageable crowds (still busy but not impossible if you arrive before 9am). Jinshanling is better for serious hikers and photographers — 10km of unrestored wall between crumbling towers — but requires 2.5 hours transit each way. Simatai offers night tours. Avoid Badaling entirely — 10 million visitors per year makes it a genuinely unpleasant experience regardless of photographic potential.",
                },
                {
                  q: "Can I drink tap water in Beijing?",
                  a: "No. Beijing tap water is not safe to drink directly. Bottled water is available everywhere for ¥2–5 per 500ml (~$0.30–0.70). Most hotels provide large water dispensers — carry a reusable bottle and refill there. The tap water is safe for brushing teeth. This applies across all of mainland China.",
                },
                {
                  q: "What are Golden Week dates and should I avoid them?",
                  a: "Two periods make Beijing extremely crowded: Golden Week (October 1–7, Chinese National Day) when domestic tourist volumes increase 30–40% and the Forbidden City caps fill instantly — book months ahead or avoid entirely. Chinese New Year (late January/February, date varies by lunar calendar) when much of Beijing closes as workers return home, but the city is beautifully decorated. In 2026, Chinese New Year falls on February 17. Check exact Golden Week dates for your travel year and book all major attractions well in advance if visiting at these times.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Beijing trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/beijing-visa-guide", label: "Visa for Beijing", icon: "📋" },
                { href: "/blog/great-wall-beijing-guide", label: "Great Wall guide", icon: "🧱" },
                { href: "/blog/beijing-budget-travel", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/beijing-food-guide", label: "Beijing food guide", icon: "🍜" },
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
          <RelatedGuides currentSlug="beijing-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo in 5 Days — Temples &amp; Ramen", href: "/blog/tokyo-5-days" },
                { label: "Seoul 4 Days — Palaces &amp; Street Food", href: "/blog/seoul-4-days" },
                { label: "Hong Kong 3 Days — Skyline &amp; Dim Sum", href: "/blog/hong-kong-3-days" },
                { label: "Shanghai 4 Days — Bund &amp; Old Town", href: "/blog/shanghai-4-days" },
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
