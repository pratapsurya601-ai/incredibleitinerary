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
const KL_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What KL Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🏙️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Kuala Lumpur 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Kuala Lumpur in 3 Days — Petronas Towers, Batu Caves and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days"
        imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
        description="Kuala Lumpur in 3 Days: Petronas Twin Towers, Batu Caves, Jalan Alor street food, Chinatown — complete travel guide with budget breakdown in MYR and USD."
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
export default function KualaLumpurClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kuala Lumpur" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kuala lumpur petronas twin towers malaysia night skyline"
            fallback="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80"
            alt="Kuala Lumpur Petronas Twin Towers illuminated against night skyline Malaysia"
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
              <span className="text-white/70">Kuala Lumpur 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Towers &amp; Street Food
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kuala Lumpur in 3 Days:
                <em className="italic text-amber-300"> Towers, Caves &amp; the Real City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Petronas Twin Towers at night, the 272 rainbow steps of Batu Caves, Jalan Alor&apos;s legendary food strip, and nasi lemak for RM 6. The complete guide with real costs in MYR &amp; USD, Grab vs taxi tips, and the hawker stalls worth queuing for.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇾 Malaysia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From RM 80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kuala Lumpur is one of Southeast Asia&apos;s most underrated cities — the Petronas Towers are genuinely jaw-dropping at night, the food scene is among the best in Asia (Malaysian, Chinese, Indian, and Malay all competing side by side), Batu Caves is one of the most dramatic Hindu temples in the world, and almost everything costs a fraction of what you&apos;d pay in Singapore. Three days barely scratches the surface.
            </p>
          </blockquote>

          {/* ── WHAT KL ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What KL Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kuala Lumpur is a genuinely multicultural capital where Malay, Chinese, Indian, and colonial British influences collide in a way that is visible on every street corner. The Petronas Twin Towers dominate the skyline as the world&apos;s tallest twin towers, while ten minutes away you&apos;re haggling in a covered Chinatown market or eating banana leaf rice in Little India. The city was founded at the muddy confluence of two rivers in 1857 and has grown into a sprawling metropolis of 8 million people.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The food is the real draw. KL has some of the best and cheapest street food in Asia — nasi lemak, char kway teow, roti canai, laksa, and cendol are available at hawker stalls and mamak restaurants for a fraction of Singapore prices. The city runs on mamak culture: 24-hour Malaysian-Indian Muslim restaurants where you can eat roti canai at 3am on plastic chairs under fluorescent lights, surrounded by every stratum of KL society.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you the essentials: the Petronas Towers, Batu Caves, Chinatown, the food streets, the mosques, and enough hawker meals to understand why people fly to KL specifically to eat. If you have more time, Penang and Langkawi are short flights away.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="KUL (KLIA)" />
              <StatCard icon="🌡️" label="Best Months" value="Apr-May, Jul-Aug" />
              <StatCard icon="🏙️" label="Twin Towers" value="452m Tall" />
              <StatCard icon="💰" label="Budget From" value="RM 80/day (~$18)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit KL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr-May",
                  i: "☀️",
                  t: "Early Dry — Best Overall",
                  d: "28-33°C with less rainfall than the monsoon months. The city is manageable, prices are moderate, and outdoor attractions like Batu Caves and KLCC Park are pleasant without the heaviest downpours. May is arguably the best month to visit KL.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul-Aug",
                  i: "🌅",
                  t: "Peak Dry — Busiest",
                  d: "28-34°C with the least rainfall of the year. This is peak tourist season with higher accommodation prices and busier attractions. Petronas Tower tickets sell out 2-3 days ahead. The weather is excellent but expect queues at Batu Caves by 10am.",
                  b: "Best weather, busiest",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep-Oct",
                  i: "🌧️",
                  t: "Shoulder — Good Value",
                  d: "28-33°C with occasional afternoon thunderstorms. KL is a year-round destination and rain comes in short 1-2 hour bursts. Hotels drop prices 20-30%. Fewer tourists at all major sites. Carry an umbrella and plan outdoor activities for mornings.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov-Feb",
                  i: "🌧️",
                  t: "Monsoon — Wettest",
                  d: "27-32°C with heavy afternoon rain almost daily. The northeast monsoon brings the most rainfall. Prices are at their lowest and the city is less crowded. KL is perfectly visitable in monsoon season — most attractions are indoor or covered, and rain rarely lasts more than 2 hours.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kuala Lumpur</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kuala Lumpur International Airport (KLIA) is 50km south of the city centre. The KLIA Ekspres train to KL Sentral takes 28 minutes (RM 55, ~$12). <strong className="font-medium">Indian passport holders get 30 days visa-free entry since the 2024 agreement.</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "KLIA Ekspres — Airport to City",
                  d: "The KLIA Ekspres train from KLIA to KL Sentral takes 28 minutes and costs RM 55 (~$12). Runs every 15-20 minutes from 5am to midnight. No traffic, no negotiation. Buy tickets at automated kiosks in the arrivals hall. This beats any taxi or bus for time and convenience.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Direct flights from India",
                  d: "IndiGo, AirAsia and Malaysia Airlines fly direct from Delhi, Mumbai, Bangalore and Chennai to KL. Flight time: 4.5-6 hours. Return fares from INR 10,000-22,000 if booked 2-3 months ahead. AirAsia has the most frequency and often the cheapest fares.",
                  b: "Best from India",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Grab — KL's ride-hailing app",
                  d: "Download Grab before you land. It is the dominant ride-hailing app in Malaysia, always shows the price upfront, and is 40-60% cheaper than metered taxis. KLIA to city centre costs RM 65-90 (~$14-20) by Grab. Airport pickup: follow signs to the ride-hailing pickup zone in the car park.",
                  b: "Always use Grab",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Monorail, LRT & MRT in the city",
                  d: "KL has multiple transit systems (LRT, MRT, KTM Komuter, Monorail) all connecting at KL Sentral. Buy a Touch 'n Go card (RM 10 deposit + load value) — works on all systems. Batu Caves is on the KTM Komuter line from KL Sentral (RM 2, 30 minutes). The monorail connects Bukit Bintang to KL Sentral.",
                  b: "RM 1-5 per ride",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Kuala Lumpur Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers budget-to-midrange spending. Each day card is expandable. All costs in Malaysian Ringgit (MYR) with USD equivalents at ~RM 4.60 = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Petronas Twin Towers, KLCC & Jalan Alor"
                cost="RM 150-200 (~$33-43)"
                items={[
                  "Morning — KLCC Park (free) — the city park at the base of the Petronas Twin Towers. The iconic angle for photos is from the park fountain looking up at both towers.",
                  "9:00am — KLCC Aquaria (RM 55, ~$12) — 5,000 aquatic animals including a 90-metre underwater walkway with sand tiger sharks overhead. Optional but good if travelling with kids.",
                  "11:00am — Petronas Twin Towers Skybridge observation deck (RM 99.80, ~$22 — book online in advance, tickets sell out). The bridge connects the two towers at Level 41-42. Add Level 86 observation deck for RM 170 (~$37) total.",
                  "2:00pm — Lunch at a Jalan Imbi hawker centre — nasi lemak (coconut rice, sambal, egg, anchovies, peanuts) for RM 6-8 (~$1.30-1.75). Malaysia's national dish, best eaten at a humble stall.",
                  "4:00pm — Bukit Bintang shopping area — malls and street food along Jalan Bukit Bintang. Pavilion KL is the flagship mall.",
                  "7:30pm — Jalan Alor street food strip — KL's most famous food street. Char kway teow, satay, rojak, cendol — eat until you can't move. Budget RM 25-40 (~$5-9) for a full spread.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Batu Caves, Chinatown & Masjid Jamek"
                cost="RM 80-120 (~$17-26)"
                items={[
                  "8:00am — KTM Komuter train from KL Sentral to Batu Caves (RM 2 each way, ~$0.45, 30 minutes). The most accessible major Hindu temple in Malaysia.",
                  "8:45am — Batu Caves — the rainbow-painted 272 steps lead to the main temple cave. Free entry. The golden Lord Murugan statue at the base (42.7 metres) is the world's tallest Murugan statue. The cave temples inside are spectacular — high vaulted ceilings with shrines carved into limestone.",
                  "10:30am — Return to KL Sentral by train.",
                  "12:00pm — Chinatown Petaling Street (Jalan Petaling) — covered market street selling everything from goods to fresh durian. Haggle. Lunch at a Chinatown kopitiam — pork noodles or Hainanese chicken rice for RM 8-12 (~$1.75-2.60).",
                  "3:00pm — Central Market (Pasar Seni) — arts and crafts, batik fabric, pewter, traditional Malaysian products. Good for souvenirs.",
                  "5:30pm — Masjid Jamek — colonial-era mosque at the confluence of the two rivers. The original heart of Kuala Lumpur (free entry, modest dress required).",
                  "8:00pm — Dinner at Imbi Market or a Malay warung — nasi campur (rice with multiple side dishes) for RM 10-15 (~$2.20-3.25).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Merdeka Square, National Mosque & KL Tower"
                cost="RM 100-140 (~$22-30)"
                items={[
                  "9:00am — Merdeka Square (Dataran Merdeka) — where independence was proclaimed in 1957. The colonial Royal Selangor Club and Sultan Abdul Samad building surround it.",
                  "10:00am — National Mosque (Masjid Negara) — free entry, guided tours available. One of the largest mosques in Southeast Asia.",
                  "11:30am — Islamic Arts Museum Malaysia (RM 20, ~$4.35) — world-class collection of Islamic art and architecture. The building itself is spectacular.",
                  "1:30pm — Lunch at Brickfields (Little India) — 15 min by LRT from the city centre. Banana leaf rice, roti canai, masala tea at a South Indian restaurant for RM 10-15 (~$2.20-3.25).",
                  "3:30pm — KL Tower (Menara KL) observation deck (RM 52, ~$11.30) — technically a better view than Petronas because you can see the Petronas Towers from here.",
                  "6:00pm — Sunset from KL Tower open deck — the golden hour view over the KL skyline is extraordinary.",
                  "8:00pm — Farewell dinner at a rooftop restaurant in Bukit Bintang or Jalan Alor for one final hawker spread.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kuala Lumpur" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential KL landmarks in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Petronas Twin Towers",
                  e: "RM 99.80-170 (~$22-37)",
                  d: "The world's tallest twin towers at 452 metres. The Skybridge at Level 41-42 connects the two towers. Level 86 observation deck offers panoramic views. Book online at petronastwintowers.com.my 2-3 days ahead — the 8:30am slot has the best light and smallest crowds. The towers illuminated at night are genuinely spectacular from KLCC Park.",
                  t: "Must see · Book ahead · 1.5 hrs",
                },
                {
                  n: "Batu Caves",
                  e: "Free",
                  d: "272 rainbow-painted steps lead to a cathedral-like limestone cave housing a Hindu temple. The 42.7-metre golden Lord Murugan statue at the base is the world's tallest. Go early (7-8am) for cooler temperatures, golden morning light, and smaller crowds. KTM Komuter from KL Sentral, 30 minutes, RM 2 each way.",
                  t: "Must see · Go early · 2 hrs",
                },
                {
                  n: "KL Tower (Menara KL)",
                  e: "RM 52 (~$11.30)",
                  d: "421-metre telecommunications tower with an observation deck that offers arguably a better view than Petronas — because you can see the Petronas Towers from here. The open deck is particularly good for sunset photography. 15 minutes walk from Bukit Bintang.",
                  t: "Recommended · Sunset · 1 hr",
                },
                {
                  n: "Islamic Arts Museum Malaysia",
                  e: "RM 20 (~$4.35)",
                  d: "World-class collection of Islamic art including architectural models, Quran manuscripts, textiles, and ceramics from across the Islamic world. The building itself with its turquoise dome and geometric tile work is spectacular. Allow 1.5-2 hours.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Merdeka Square",
                  e: "Free",
                  d: "The site where Malaysian independence was declared on August 31, 1957. Surrounded by the Sultan Abdul Samad building (Moorish architecture) and the Royal Selangor Club. The flagpole is one of the tallest in the world at 95 metres. Best photographed in morning light.",
                  t: "Free · 30 min",
                },
                {
                  n: "National Mosque (Masjid Negara)",
                  e: "Free",
                  d: "One of the largest mosques in Southeast Asia with a distinctive star-shaped roof and 73-metre minaret. Non-Muslim visitors are welcome outside prayer times. Free robes provided for those not modestly dressed. Guided tours available. A genuinely peaceful and impressive space.",
                  t: "Free · 45 min",
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
            title="Kuala Lumpur — Towers, Caves &amp; Street Food"
            subtitle="A city where Malay, Chinese, Indian, and colonial British cultures collide on every street corner."
            spots={[
              {
                name: "Petronas Twin Towers at Night",
                query: "petronas twin towers kuala lumpur night illuminated fountain",
                desc: "The world's tallest twin towers illuminated against the KL skyline — best photographed from KLCC Park fountain at night.",
              },
              {
                name: "Batu Caves Rainbow Steps",
                query: "batu caves rainbow steps kuala lumpur murugan statue",
                desc: "272 rainbow-painted steps leading to a cathedral-like limestone cave temple, with the golden Murugan statue at the base.",
              },
              {
                name: "Jalan Alor Food Street",
                query: "jalan alor food street kuala lumpur night hawker stalls",
                desc: "KL's most famous street food strip — char kway teow, satay, and cendol under a canopy of neon signs.",
              },
              {
                name: "Chinatown Petaling Street",
                query: "petaling street chinatown kuala lumpur covered market",
                desc: "Covered market street in the heart of KL's Chinatown — haggling, hawker food, and the best kopitiam coffee.",
              },
              {
                name: "Sultan Abdul Samad Building",
                query: "sultan abdul samad building merdeka square kuala lumpur",
                desc: "Moorish colonial architecture framing Merdeka Square — where Malaysian independence was declared in 1957.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              KL is one of the best-value capitals in Southeast Asia. Budget travellers can live well on RM 85-195/day (~$18-42), mid-range on RM 340-710/day (~$74-154), and luxury on RM 1,000+/day (~$217+). All prices in Malaysian Ringgit (MYR) and USD at ~RM 4.60 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (per day)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "RM 30-80 (~$7-17)", "RM 150-350 (~$33-76)", "RM 500-2,000 (~$109-435)"],
                    ["🍽 Food & Drinks", "RM 25-45 (~$5-10)", "RM 80-150 (~$17-33)", "RM 200-500 (~$43-109)"],
                    ["🚗 Transport", "RM 10-20 (~$2-4)", "RM 30-60 (~$7-13)", "RM 100-200 (~$22-43)"],
                    ["🎯 Activities", "RM 20-50 (~$4-11)", "RM 80-150 (~$17-33)", "RM 200-500 (~$43-109)"],
                    ["TOTAL (per day)", "RM 85-195 (~$18-42)", "RM 340-710 (~$74-154)", "RM 1,000-3,200 (~$217-696)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (RM 85-195/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget guesthouses, eat at mamak stalls and hawker centres (RM 6-15/meal), use public transport and Grab. Batu Caves is free, KLCC Park is free, and the best food in KL is at the cheapest stalls.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (RM 340-710/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-4 star hotels in Bukit Bintang or KLCC, a mix of hawker meals and restaurant dining, Grab for transport, and Petronas Towers tickets. The sweet spot for comfort and value in KL.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (RM 1,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Mandarin Oriental or Four Seasons with Petronas views, rooftop dining at Marini&apos;s on 57, private food tours, and spa days. KL luxury is exceptional value compared to Singapore, Hong Kong, or Tokyo.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in KL</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Bukit Bintang for shopping, food streets and nightlife. KLCC for the Petronas Towers and upscale hotels. Chinatown for budget stays and cultural immersion. KL Sentral for transit connections and day trips.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Bukit Bintang Area",
                  type: "Shopping, food & nightlife hub",
                  price: "From RM 50/night (~$11)",
                  badge: "Best for most",
                  desc: "KL's main commercial district with Jalan Alor food street, Pavilion KL mall, and dozens of hotels at every price point within walking distance. The monorail connects you to KL Sentral and KLCC. This is where most first-time visitors should stay — everything is walkable and the food options are endless.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "KLCC Area",
                  type: "Petronas Towers district · Upscale",
                  price: "From RM 200/night (~$43)",
                  badge: "Best views",
                  desc: "The Petronas Towers district with KLCC Park, high-end malls, and luxury hotels. Mandarin Oriental, Grand Hyatt, and Traders Hotel all offer tower views. More polished than Bukit Bintang but less character. Best for those who want to wake up to the Petronas Towers outside their window.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Chinatown (Petaling Street)",
                  type: "Budget & cultural · Historic",
                  price: "From RM 30/night (~$7)",
                  badge: "Best budget",
                  desc: "KL's historic Chinese quarter with the cheapest accommodation, the best kopitiam coffee, and markets selling everything from dried goods to traditional medicine. Walking distance to Central Market and Masjid Jamek. Atmospheric, noisy, and authentic. Hostels and budget guesthouses start from RM 30.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "KL Sentral Area",
                  type: "Transit hub · Convenient",
                  price: "From RM 80/night (~$17)",
                  badge: "Best transport links",
                  desc: "KL's main transit hub connecting LRT, MRT, KTM Komuter, Monorail, and KLIA Ekspres. Ideal if you plan day trips to Batu Caves or have early flights. Brickfields (Little India) is a 5-minute walk for banana leaf rice and roti canai. Less touristy than Bukit Bintang, more residential.",
                  color: "border-teal-200 bg-teal-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in KL</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              KL&apos;s food scene is among the best in Asia. The single most important rule: eat where locals eat. Plastic chairs, fluorescent lights, and a queue of Malaysians outside means excellent food. Here are the spots and dishes worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Jalan Alor Food Street",
                  t: "Hawker stalls · Bukit Bintang",
                  d: "KL's most famous food street comes alive after 5pm. Char kway teow (wok-fried flat noodles, RM 8-12), satay (RM 1 per stick), grilled chicken wings (RM 2-3 each), rojak (fruit salad with shrimp paste), and cendol (shaved ice with palm sugar and pandan jelly, RM 5). Walk the full length before committing — every stall has a specialty.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Nasi Lemak at Village Park",
                  t: "Nasi lemak specialist · Damansara",
                  d: "Widely regarded as serving the best nasi lemak in KL. Coconut rice with sambal, fried chicken, egg, anchovies and peanuts — RM 10-15 (~$2.20-3.25). The sambal is the secret. Worth the Grab ride to Damansara Uptown. Arrives at opening (7am) or expect a queue.",
                  b: "Best nasi lemak",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Roti Canai at any Mamak stall",
                  t: "Mamak restaurants · Citywide",
                  d: "Roti canai (flaky flatbread served with dhal curry) for RM 1.50-3 (~$0.35-0.65) is one of the great cheap meals on earth. Mamak restaurants are open 24 hours and serve roti canai, mee goreng, teh tarik (pulled tea), and nasi kandar. The best are packed with locals at any hour. Try Restoran Kayu Nasi Kandar or any stall with a queue.",
                  b: "Daily essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Imbi Market Hawker Centre",
                  t: "Hawker centre · Near Bukit Bintang",
                  d: "A proper local hawker centre within walking distance of the tourist zone. Hokkien mee, curry laksa, clay pot chicken rice, and wonton noodles — each stall specializes in one dish done exceptionally well. RM 6-12 per dish (~$1.30-2.60). Air-conditioned. This is where KL locals eat lunch.",
                  b: "Best local hawker",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Brickfields (Little India)",
                  t: "South Indian · Near KL Sentral",
                  d: "Banana leaf rice — a mountain of rice served on a banana leaf with vegetables, curry, papadum, and your choice of chicken, fish or mutton — for RM 8-15 (~$1.75-3.25). The roti canai and masala dosa here rival anything in Chennai. Walk along Jalan Tun Sambanthan for the full Little India experience.",
                  b: "Best Indian food",
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
            destination="Kuala Lumpur Malaysia"
            hotels={[
              {
                name: "BackHome Hostel KL",
                type: "Hostel · Chinatown",
                price: "From RM 35/night (~$8)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/my/backhome-kuala-lumpur.html?aid=2820480",
              },
              {
                name: "Travelodge Bukit Bintang",
                type: "Mid-Range Hotel · Bukit Bintang",
                price: "From RM 150/night (~$33)",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/my/travelodge-bukit-bintang.html?aid=2820480",
              },
              {
                name: "Mandarin Oriental KL",
                type: "Luxury · KLCC (Petronas views)",
                price: "From RM 800/night (~$174)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/my/mandarin-oriental-kuala-lumpur.html?aid=2820480",
              },
              {
                name: "Four Seasons KL",
                type: "Luxury · KLCC",
                price: "From RM 1,200/night (~$261)",
                rating: "5",
                badge: "Top luxury",
                url: "https://www.booking.com/hotel/my/four-seasons-kuala-lumpur.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Petronas Twin Towers Tickets",
                duration: "1.5 hours",
                price: "From RM 99.80 (~$22)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=petronas+twin+towers+tickets&partner_id=PSZA5UI",
              },
              {
                name: "Batu Caves & KL City Tour",
                duration: "Half day",
                price: "From RM 80 (~$17)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=batu+caves+kuala+lumpur+tour&partner_id=PSZA5UI",
              },
              {
                name: "KL Street Food Tour",
                duration: "3 hours",
                price: "From RM 150 (~$33)",
                badge: "Food",
                url: "https://www.getyourguide.com/s/?q=kuala+lumpur+street+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Genting Highlands Day Trip",
                duration: "Full day",
                price: "From RM 120 (~$26)",
                url: "https://www.getyourguide.com/s/?q=genting+highlands+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚕",
                  title: "Taking Metered Taxis Instead of Grab",
                  desc: "KL's metered taxis have a long history of overcharging tourists — refusing to use the meter, quoting flat rates, taking long routes. Download Grab before you land. It always shows the price before you book and is typically 40-60% cheaper than a metered taxi for the same journey.",
                },
                {
                  icon: "🚇",
                  title: "Confusing KL Sentral with Other Stations",
                  desc: "KL has multiple transit systems (LRT, MRT, KTM, Monorail, BRT) with different operators. KL Sentral is the main hub connecting them all. Batu Caves is on the KTM Komuter line (not the LRT). Buy a Touch 'n Go card (RM 10 deposit + load value) — it works on all systems and saves queuing for tickets.",
                },
                {
                  icon: "🙏",
                  title: "Skipping Batu Caves Because It Seems Far",
                  desc: "Batu Caves is only 30 minutes by train from KL Sentral and costs RM 2. Most first-time visitors skip it thinking it's a distant day trip. It's one of the most dramatic Hindu cave temples in the world — 272 stairs, a 42-metre gold Murugan statue, and a cathedral-like limestone interior. Do not skip this.",
                },
                {
                  icon: "🎨",
                  title: "Buying Machine-Printed Batik at Chinatown",
                  desc: "The 'batik' sold at Chinatown Petaling Street is almost universally machine-printed on synthetic fabric. For real hand-drawn or hand-stamped batik, go to the Craft Cultural Complex (Kompleks Kraftangan) near the National Museum, or reputable shops in Bangsar. Real batik costs more but is a completely different product.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kuala Lumpur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍚",
                  title: "Nasi Lemak at a Mamak for Breakfast",
                  desc: "Nasi lemak at a mamak stall costs RM 5-8 (~$1-1.75) and is one of the great breakfasts of the world. Mamak restaurants are open 24 hours and serve everything from roti canai to mee goreng. Eat where locals eat — plastic chairs, fluorescent lights, and extraordinary food.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚂",
                  title: "KLIA Ekspres — 28 Min, No Stress",
                  desc: "The KLIA Ekspres from the airport to KL Sentral takes 28 minutes, costs RM 55 (~$12), and runs every 15-20 minutes. No traffic, no negotiation. Buy at the automated kiosks in the arrivals hall. It beats any taxi or bus for time and convenience.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗼",
                  title: "Book Petronas Tickets 2 Days Ahead",
                  desc: "Petronas Twin Towers Skybridge tickets (RM 99.80) sell out 2-3 days ahead in peak season (Jun-Aug, Dec). Book at petronastwintowers.com.my immediately after confirming your travel dates. The 8:30am slot has the best light and smallest crowds.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💰",
                  title: "KL Is Extremely Cheap by Global Standards",
                  desc: "A hawker meal costs RM 8-15 (~$1.75-3.25). A Grab across the city is RM 12-20 (~$2.60-4.35). A proper restaurant meal with drinks is RM 40-80 (~$9-17). For visitors from Europe, Australia, or North America, KL is exceptional value — world-class food on a tiny budget.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "☂️",
                  title: "Carry an Umbrella, Not a Raincoat",
                  desc: "KL rains almost daily in short 1-2 hour bursts, usually in the afternoon. A compact umbrella is essential. Plan outdoor sightseeing (Batu Caves, Merdeka Square) for mornings and indoor activities (museums, malls) for afternoons. The rain is warm and clears quickly.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🕌",
                  title: "Dress Modestly for Mosques",
                  desc: "Malaysia is a Muslim-majority country. Free robes are provided at major mosques like Masjid Negara and Masjid Jamek, but covering shoulders and knees shows respect everywhere. Shoes off at all religious sites. Remove hats at mosques. Photography is usually permitted outside prayer times.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kuala Lumpur" />

          {/* Combine With */}
          <CombineWith currentSlug="kuala-lumpur-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Kuala Lumpur visa-free for Indians?",
                  a: "Yes — since 2024 under the India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free entry to Malaysia. No prior application required. Confirm current policy at the Malaysian Immigration Department website before travel, as terms can be updated.",
                },
                {
                  q: "What is the best food to try in Kuala Lumpur?",
                  a: "Start with nasi lemak (Malaysia's national dish — coconut rice with sambal). Then char kway teow (wok-fried flat rice noodles with egg, bean sprouts, and Chinese sausage), roti canai (flaky flatbread with dhal curry), laksa (spiced coconut noodle soup), cendol (shaved ice with pandan jelly and palm sugar), and satay. The best versions are at hawker stalls and kopitiams, not in hotel restaurants.",
                },
                {
                  q: "What time do Batu Caves open and is it worth going early?",
                  a: "Batu Caves is open from 6am and free to enter. By 10am it becomes crowded with tour groups. The 272 steps are steep in full midday sun — going early (7-8am) means cooler temperatures, golden morning light on the gold Murugan statue, and smaller crowds. The KTM Komuter train from KL Sentral starts early and takes 30 minutes.",
                },
                {
                  q: "KL vs Singapore — which should I visit?",
                  a: "Both, ideally — they're 4 hours apart by train or 1 hour by plane. KL is cheaper, more chaotic, more culturally layered (Malay, Chinese, Indian, and colonial British all visible simultaneously), with the Petronas Towers as a centrepiece. Singapore is cleaner, more efficient, more expensive, and more international. KL wins on food, price, and raw atmosphere. Singapore wins on infrastructure and ease.",
                },
                {
                  q: "What is the budget for 3 days in Kuala Lumpur?",
                  a: "Budget traveller: RM 85-195/day (roughly $18-42 USD). This covers a budget hotel or guesthouse, hawker stall meals, public transport, and 2-3 paid attractions. Mid-range: RM 340-710/day. Luxury: RM 1,000+/day. Compared to Singapore, Bangkok, or even Bali, KL is excellent value at every tier.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your KL trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-malaysia", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kuala-lumpur-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-kuala-lumpur", label: "How to get there", icon: "✈️" },
                { href: "/blog/malaysia-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="kuala-lumpur-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Singapore &mdash; 3 Day Guide", href: "/blog/singapore-3-days" },
                { label: "Penang &mdash; 3 Day Guide", href: "/blog/penang-3-days" },
                { label: "Bangkok &mdash; 4 Day Guide", href: "/blog/bangkok-4-days" },
                { label: "Langkawi &mdash; 3 Day Guide", href: "/blog/langkawi-3-days" },
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
