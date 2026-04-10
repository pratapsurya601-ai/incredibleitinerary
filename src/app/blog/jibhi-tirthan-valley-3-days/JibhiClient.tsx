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
import Breadcrumb from "@/components/blog/Breadcrumb";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const JIBHI_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Jibhi vs Manali vs Kasol?" },
  { id: "highlights", emoji: "🏔️", label: "What Makes It Special" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "treks",      emoji: "🥾",  label: "Trek Guide" },
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
        className="h-full bg-emerald-500 transition-all duration-100"
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
          href: `mailto:?subject=Jibhi Tirthan Valley 3-Day Guide&body=Check this out: ${
            pageUrl
          }`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Jibhi+%26+Tirthan+Valley+in+3+Days&url=${
            pageUrl
          }`,
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
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-base font-light text-ink">{value}</p>
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
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-emerald-700 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"
              >
                <span className="text-emerald-500 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-emerald-700">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span
          className={`text-emerald-600 text-lg flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
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

// ── Trek Card ─────────────────────────────────────────────────────────────────
function TrekCard({
  name,
  difficulty,
  distance,
  duration,
  altitude,
  desc,
  badge,
  badgeColor,
}: {
  name: string;
  difficulty: string;
  distance: string;
  duration: string;
  altitude: string;
  desc: string;
  badge: string;
  badgeColor: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5 hover:border-emerald-300 transition-colors">
      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
        <div>
          <p className="font-semibold text-sm text-ink mb-0.5">{name}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[0.65rem] text-muted">{distance}</span>
            <span className="text-muted/40 text-xs">·</span>
            <span className="text-[0.65rem] text-muted">{duration}</span>
            <span className="text-muted/40 text-xs">·</span>
            <span className="text-[0.65rem] text-muted">{altitude}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-[0.65rem] font-medium px-2.5 py-1 rounded-full border ${badgeColor}`}
          >
            {badge}
          </span>
          <span className="text-[0.65rem] text-muted">{difficulty}</span>
        </div>
      </div>
      <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Mistake Card ─────────────────────────────────────────────────────────────
function MistakeCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl p-4 border border-red-200 bg-red-50">
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-semibold text-sm text-red-900 mb-1">{title}</p>
          <p className="text-xs text-red-800 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── Tip Card ─────────────────────────────────────────────────────────────────
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function JibhiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JIBHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jibhi & Tirthan Valley" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            imageKey="jibhiHero"
            fallback="/images/blog/jibhi-valley.jpg"
            alt="Jibhi Tirthan Valley Himachal Pradesh wooden cottages and mountains"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/20" />

          {/* Inline breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Jibhi &amp; Tirthan Valley</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-emerald-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Himachal&apos;s Best Kept Secret
                </span>
                <span className="text-white/60 text-xs">March 10, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jibhi &amp; Tirthan Valley in 3 Days:
                <em className="italic text-emerald-300"> The Himachal Trip Nobody Talks About</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px] leading-relaxed">
                Jalori Pass, Serolsar Lake, Raghupur Fort, GHNP trout walks — the peaceful Himachal
                alternative to Manali&apos;s tourist circus. Budget ₹3,000/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏔️ Himachal Pradesh</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-emerald-500 pl-6 mb-10 bg-emerald-50 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Jibhi is what Kasol was 10 years ago and Manali was 20 years ago. A tiny village in the
              Banjar Valley with apple orchards, wooden houses, the Tirthan River running cold and
              clear past your guesthouse window — and Jalori Pass (3,120m) just 10km up the road.
              Most people have never heard of it. That&apos;s exactly the point.
            </p>
          </blockquote>

          {/* ── SECTION 1: DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              ⚡ Jibhi vs Manali vs Kasol — Which Should You Pick?
            </h2>
            <p className="text-xs text-muted font-light mb-6 leading-relaxed">
              Three very different trips. Pick the one that fits you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {[
                {
                  dest: "Jibhi & Tirthan",
                  emoji: "🏡",
                  for: "Nature, peace, no crowds",
                  cost: "₹3,000–₹7,000/day",
                  crowd: "Very low",
                  vibe: "Himalayan village retreat",
                  best: "Authentic Himachal",
                  color: "border-emerald-300 bg-emerald-50",
                  badge: "This guide",
                  badgeColor: "bg-emerald-700 text-white",
                },
                {
                  dest: "Kasol",
                  emoji: "🎒",
                  for: "Backpacker cafes, trekking",
                  cost: "₹2,500–₹6,000/day",
                  crowd: "High in season",
                  vibe: "Backpacker social scene",
                  best: "Kheerganga trek",
                  color: "border-amber-300 bg-amber-50",
                  badge: "Popular",
                  badgeColor: "bg-amber-700 text-white",
                },
                {
                  dest: "Manali",
                  emoji: "🎿",
                  for: "Adventure sports, nightlife",
                  cost: "₹4,000–₹12,000/day",
                  crowd: "Very high in peak",
                  vibe: "Tourist town, Rohtang",
                  best: "Solang Valley, Rohtang",
                  color: "border-blue-300 bg-blue-50",
                  badge: "Most visited",
                  badgeColor: "bg-blue-700 text-white",
                },
              ].map((item) => (
                <div
                  key={item.dest}
                  className={`rounded-xl border p-5 ${item.color} relative`}
                >
                  <span
                    className={`absolute top-3 right-3 text-[0.6rem] font-medium px-2 py-0.5 rounded-full ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="font-semibold text-sm text-ink mb-3">{item.dest}</p>
                  <div className="space-y-1.5">
                    {[
                      ["Best for", item.for],
                      ["Budget", item.cost],
                      ["Crowds", item.crowd],
                      ["Vibe", item.vibe],
                      ["Highlight", item.best],
                    ].map(([label, val]) => (
                      <div key={label} className="flex gap-1.5">
                        <span className="text-[0.65rem] text-muted w-14 flex-shrink-0 pt-0.5">{label}</span>
                        <span className="text-[0.65rem] text-ink font-medium leading-relaxed">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-ink rounded-xl p-5 text-white/80 text-sm font-light leading-relaxed">
              <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider block mb-2">
                Our verdict
              </span>
              If you want a genuine mountain retreat — wooden cottages, trout streams, Himalayan
              passes accessible without tour operators, and a fraction of the crowds — Jibhi wins
              easily. It costs 30–40% less than Manali, the treks are more accessible, and the
              homestay food is better than anything you&apos;ll eat on Manali&apos;s Mall Road.
            </div>
          </section>

          {/* ── SECTION 2: HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              🏔️ What Makes Jibhi &amp; Tirthan Valley Special
            </h2>
            <p className="text-xs text-muted font-light mb-6 leading-relaxed">
              Banjar Valley, Kullu district, Himachal Pradesh. Altitude 2,200m at Jibhi village.
              ~500km from Delhi, ~12 hrs by bus.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <StatCard icon="🚗" label="From Delhi" value="500km" />
              <StatCard icon="🏔️" label="Jalori Pass" value="3,120m" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Nov" />
              <StatCard icon="💰" label="Budget from" value="₹3,000/day" />
            </div>

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden mb-8 h-56 relative">
              <SmartImage
                imageKey="jibhiJalori"
                fallback="/images/blog/jalori-pass-trek.jpg"
                alt="Jalori Pass Himachal Pradesh snow-capped peaks and Himalayan views"
                fill
                className="object-cover"
                sizes="860px"
              />
            </div>

            {/* Key attractions grid */}
            <div className="space-y-3">
              {[
                {
                  name: "Jibhi Waterfall",
                  emoji: "💧",
                  tag: "15-min walk · Free",
                  desc:
                    "Cold, clear cascade tucked in a narrow canyon 15 minutes from the village. Peaceful even in peak season — most tourists miss it because they arrive late.",
                },
                {
                  name: "Chehni Kothi",
                  emoji: "🏛️",
                  tag: "4km from Jibhi · Heritage",
                  desc:
                    "A 1,500-year-old stone tower in Chehni village — one of the best examples of Himachali kath-kuni wooden-and-stone architecture. Hardly any tourists. Free to walk up.",
                },
                {
                  name: "Jalori Pass (3,120m)",
                  emoji: "⛰️",
                  tag: "10km by road · Snow in May",
                  desc:
                    "One of the most accessible Himalayan passes — driveable to 100m from the top. Snow-covered until late May, 360° views of the Dhauladhar and Kullu ranges. Small Shringa Rishi temple at the top.",
                },
                {
                  name: "Serolsar Lake",
                  emoji: "🏔️",
                  tag: "5km trek from Jalori Pass · Sacred",
                  desc:
                    "An alpine lake at 3,100m surrounded by ancient deodar and oak forest. The Budhi Nagin temple on its banks is sacred — remove your shoes before entering. The forest reflection in the still water is breathtaking.",
                },
                {
                  name: "Raghupur Fort",
                  emoji: "🏯",
                  tag: "4km trek from Jalori Pass · Less crowded",
                  desc:
                    "Ancient fort ruins on a high meadow with extraordinary panoramic views. Takes a different direction from Jalori than Serolsar. Everyone does Serolsar — almost nobody does Raghupur Fort. It is equally beautiful and far more peaceful.",
                },
                {
                  name: "Tirthan River & GHNP",
                  emoji: "🎣",
                  tag: "UNESCO buffer zone · No vehicles inside",
                  desc:
                    "The Tirthan is one of India&apos;s clearest rivers — you can see river rocks at 3m depth. The Great Himalayan National Park buffer zone begins at Gushaini (5km from Jibhi). No motor vehicles, no crowds — just forest trails, birdsong and trout fishing.",
                },
                {
                  name: "Shringa Rishi Temple",
                  emoji: "🛕",
                  tag: "Banjar town · 15km from Jibhi",
                  desc:
                    "An ancient wooden temple in Banjar town with intricate silver work and local festival scenes. Worth combining with a Banjar town visit for the weekly market.",
                },
              ].map((place) => (
                <div
                  key={place.name}
                  className="bg-white rounded-xl border border-parchment-2 p-4 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{place.emoji}</span>
                      <p className="font-semibold text-sm text-ink">{place.name}</p>
                    </div>
                    <span className="text-[0.65rem] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                      {place.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 3: ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              📅 3-Day Jibhi &amp; Tirthan Valley Itinerary
            </h2>
            <p className="text-xs text-muted font-light mb-6 leading-relaxed">
              Works for arrivals from Delhi by overnight bus, or from Chandigarh by morning bus.
              Click each day to expand.
            </p>

            {/* How to arrive */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-900 font-medium mb-1">Getting to Jibhi</p>
              <p className="text-xs text-amber-800 font-light leading-relaxed">
                <strong>From Delhi:</strong> Overnight HRTC bus to Aut (12 hrs, ₹700–₹1,000) → cab
                to Jibhi (45 min, ₹500–₹600). Total: ₹1,200–₹1,500. Arrive Aut ~6–7am.
                <br />
                <strong>From Chandigarh:</strong> Morning bus to Aut (6–7 hrs) → cab to Jibhi.
                <br />
                <strong>By air:</strong> Bhuntar airport (Kullu) has flights from Delhi → taxi to
                Jibhi 1 hr (₹1,200–₹1,500).
                <br />
                <strong>Important:</strong> No direct bus to Jibhi. Aut is the nearest major stop
                (12km). Carry cash before entering the valley — no ATM in Jibhi.
              </p>
            </div>

            <DayCard
              day="Day 1"
              title="Arrive + Jibhi Village Exploration"
              cost="₹1,500–₹2,500 (transport + accommodation + dinner)"
              items={[
                "Arrive Aut by morning bus from Delhi. Cab to Jibhi (45 min, ₹500–₹600 shared or ₹800 private). Check in to a wooden homestay or cottage — book in advance for weekends, they fill up fast.",
                "Settle in and explore the village on foot. The traditional kath-kuni wooden houses with carved balconies and slate roofs are everywhere. Walk the apple orchards — in May the blossoms are out; in October the fruit hangs heavy.",
                "Afternoon: Jibhi Waterfall (15-min walk from the village centre, free). Cold, clear cascade in a narrow canyon. Peaceful even in season.",
                "If time permits: walk to Chehni Kothi (4km from Jibhi, flat-ish path). The 1,500-year-old stone tower is one of the most striking pieces of traditional Himachali architecture you will see anywhere.",
                "Evening: Bonfire at the homestay. Ask your host for local rajma-chawal or himachali dham if they make it. The aunty at most homestays will bring chai with fresh honey and homemade apple cake without you asking.",
                "Night sky at Jibhi — zero light pollution at 2,200m. Milky Way visible from the balcony on clear nights. Sleep with the window cracked — the Tirthan River sound is a better alarm than your phone.",
              ]}
            />
            <DayCard
              day="Day 2"
              title="Jalori Pass + Serolsar Lake or Raghupur Fort Trek"
              cost="₹800–₹1,500 (cab + packed lunch)"
              items={[
                "Leave by 8am. Hire a local cab to Jalori Pass — ₹800–₹1,200 return (or ₹200–₹300/person shared with other guests). The pass is 10km from Jibhi. Road has sharp hairpin turns — do not try in a low-clearance car after rain.",
                "At Jalori Pass (3,120m): small Shringa Rishi temple, 360° Himalayan views. Snow patches visible until late May. Temperature can drop to 5–8°C even in May — carry a warm layer.",
                "Choose your trek: SEROLSAR LAKE (5km one-way, mostly flat through dense deodar forest, 2.5–3 hrs one way, easy to moderate) or RAGHUPUR FORT (4km, 2 hrs, less crowded, ancient fort ruins with extraordinary meadow panoramas). Both start from Jalori Pass.",
                "Serolsar Lake at 3,100m: sacred Budhi Nagin temple at the lakeside — remove shoes before entering. The forest reflection in still water is extraordinary. No food at the lake, carry a packed lunch from your homestay (arrange the night before).",
                "Raghupur Fort: fewer visitors, higher meadow, wider views. The fort ruins themselves are minimal but the location — a flat grassy ridge with 180° views of snow ranges — is spectacular. Ideal for those who want solitude over Instagram.",
                "Return to Jalori Pass by 3:30–4pm. Cab back to Jibhi. Reach homestay by 5:30pm. Sunset from the terrace with a cup of ginger tea.",
              ]}
            />
            <DayCard
              day="Day 3"
              title="Tirthan River + GHNP Walk + Depart"
              cost="₹600–₹1,200 (GHNP entry + transport)"
              items={[
                "Morning: Tirthan River walk inside the GHNP buffer zone. Drive or walk to Gushaini (5km from Jibhi). Register at the forest checkpoint (₹100–₹200/person entry). No motor vehicles permitted inside.",
                "The trail follows the Tirthan River through untouched mixed forest. 3–4 hours at a comfortable pace. Best birding in Himachal — Western Tragopan, Himalayan Monal, Malabar Whistling Thrush seen regularly near Gushaini at dawn. Bring binoculars.",
                "Trout fishing on the Tirthan: license from the fishery department in Gushaini (₹200–₹300/day). The Tirthan is one of India&apos;s best wild trout rivers. Your homestay host can arrange the license. Catch-and-release in some stretches.",
                "Afternoon: visit Banjar town (15km from Jibhi, 30-min cab). Shringa Rishi temple with silver-work ornamentation. Weekly market for local honey (₹300–₹500/kg), walnut jam and dried apricots — significantly cheaper than anywhere else.",
                "Depart evening for Delhi (overnight bus from Aut) or continue to Manali (80km, 2.5 hrs via Aut — a perfect addition to this trip).",
              ]}
            />

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden mt-6 h-52 relative">
              <SmartImage
                query="tirthan river clear water great himalayan national park forest trail"
                fallback="/images/blog/tirthan-river-ghnp.jpg"
                alt="Tirthan River GHNP Great Himalayan National Park clear water forest trail"
                fill
                className="object-cover"
                sizes="860px"
              />
            </div>
          </section>

          {/* ── SECTION 4: BUDGET ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">
              💰 Budget Breakdown
            </h2>

            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-400 text-center">
                      Budget ₹
                    </th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">
                      Mid-Range ₹
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    [
                      "🚌 Delhi → Jibhi (bus + cab)",
                      "₹1,200–₹1,500",
                      "₹3,000–₹5,000 (flight/taxi)",
                    ],
                    [
                      "🏡 Homestay (2 nights, meals incl.)",
                      "₹1,600–₹3,000",
                      "₹4,000–₹8,000 (cottage)",
                    ],
                    [
                      "🚗 Jalori Pass cab (return)",
                      "₹200–₹300/person shared",
                      "₹800–₹1,200 private",
                    ],
                    ["🥾 GHNP entry + trout license", "₹300–₹500", "₹300–₹500"],
                    ["🍽 Extra meals + snacks", "₹600–₹900", "₹1,200–₹2,000"],
                    [
                      "TOTAL per person (excl. Delhi travel)",
                      "₹2,500–₹3,500/day",
                      "₹5,000–₹7,000/day",
                    ],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="font-medium text-sm text-emerald-900 mb-2">
                  💡 Why Jibhi costs less than Manali
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Homestay meals are included (vs. restaurant costs in Manali)",
                    "Jalori Pass is accessible by a short cab — no Rohtang permit fees",
                    "GHNP entry is ₹100–₹200 (vs. ₹500–₹2,000 for national park entries elsewhere)",
                    "No tourist taxi cartels — local cabs are negotiable and honest",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-emerald-800 font-light"
                    >
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-900 mb-2">
                  ⚠️ Hidden costs to budget for
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Cab to Jalori Pass — negotiate before getting in (₹800–₹1,200 private)",
                    "Trout fishing license if you want to fish (₹200–₹300/day)",
                    "Local honey and produce — you will buy more than planned",
                    "Banjar market shopping — walnut jam, dried fruit, local spices",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-amber-800 font-light"
                    >
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── SECTION 5: TREKS ── */}
          <section id="treks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              🥾 Trek Guide — Jalori Pass Options
            </h2>
            <p className="text-xs text-muted font-light mb-6 leading-relaxed">
              Both main treks start from Jalori Pass (3,120m), 10km from Jibhi by road. Carry water,
              snacks, warm layers. No food available at either destination.
            </p>

            <div className="space-y-4 mb-6">
              <TrekCard
                name="Serolsar Lake Trek"
                difficulty="Easy to Moderate"
                distance="5km one-way (10km return)"
                duration="5–6 hrs total including lake time"
                altitude="3,100m"
                badge="Most Popular"
                badgeColor="bg-emerald-50 text-emerald-700 border-emerald-200"
                desc="The most-trekked trail from Jalori Pass — through dense deodar and oak forest on a mostly flat path. The trail is well-marked and follows the ridge line. Serolsar Lake is a sacred Budhi Nagin temple lake — serene, cold and surrounded by ancient trees. The forest smells extraordinary in May (pine resin and rhododendron). Remove shoes at the lakeside temple. No vendors, no chai stalls — bring everything. The return is the same trail so you cannot get lost."
              />
              <TrekCard
                name="Raghupur Fort Trek"
                difficulty="Easy to Moderate"
                distance="4km one-way (8km return)"
                duration="4–5 hrs total"
                altitude="~3,300m"
                badge="Hidden Gem"
                badgeColor="bg-amber-50 text-amber-700 border-amber-200"
                desc="The overlooked alternative to Serolsar — and in many ways more rewarding. The trail goes in the opposite direction from Jalori Pass (check the signboard at the pass). It opens onto high alpine meadows with 180° panoramas of the snow ranges. The fort ruins themselves are minimal (ancient stone walls) but the location on a grassy ridge is extraordinary. Far fewer people than Serolsar. If you have done Serolsar before, do Raghupur Fort this time. If you can only do one: Serolsar Lake is more visually dramatic; Raghupur Fort is more peaceful."
              />
              <TrekCard
                name="Chehni Kothi Walk"
                difficulty="Easy"
                distance="4km from Jibhi (one-way)"
                duration="2–3 hrs return"
                altitude="~2,400m"
                badge="Cultural"
                badgeColor="bg-purple-50 text-purple-700 border-purple-200"
                desc="Not a high-altitude trek — a heritage walk from Jibhi village to Chehni village. The 1,500-year-old stone and timber tower (kothi) in Chehni village is one of the most remarkable examples of kath-kuni architecture in Himachal. The walk is through village paths and apple orchards. Excellent for a morning or late afternoon. No entry fee. Not crowded. Great photography."
              />
            </div>

            <div className="bg-ink rounded-xl p-5 text-white/80 text-sm font-light leading-relaxed">
              <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider block mb-2">
                Trek logistics
              </span>
              No guide required for Serolsar or Raghupur — both trails are clear from Jalori Pass.
              Carry warm layers (Jalori Pass can be 5–8°C even in May). Start no later than 9am to
              be back at the pass by 4pm. The cab driver will wait at the pass for ₹100–₹200 extra.
              Hire from Jibhi, not from touts at the pass.
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Jibhi Tirthan Valley Himachal Pradesh"
            hotels={[
              {
                name: "Tirthan Cottage",
                type: "Riverside homestay · Jibhi",
                price: "From ₹1,500/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/in/tirthan-cottage-jibhi.html?aid=2820480",
              },
              {
                name: "Jibhi Cottages",
                type: "Traditional wooden · Jibhi",
                price: "From ₹2,000/night",
                rating: "4",
                badge: "Most authentic",
                url: "https://www.booking.com/hotel/in/jibhi-cottages.html?aid=2820480",
              },
              {
                name: "White River Retreat",
                type: "Riverside resort · Tirthan",
                price: "From ₹4,000/night",
                rating: "4",
                badge: "Best views",
                url: "https://www.booking.com/hotel/in/white-river-retreat-tirthan.html?aid=2820480",
              },
              {
                name: "Tirthan Valley Homestay",
                type: "Family run · Gushaini",
                price: "From ₹1,200/night",
                rating: "4",
                badge: "GHNP access",
                url: "https://www.booking.com/hotel/in/tirthan-valley-homestay.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Jalori Pass + Serolsar Lake Trek",
                duration: "Full day",
                price: "From ₹500/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=kullu&partner_id=PSZA5UI",
              },
              {
                name: "Tirthan River Trout Fishing",
                duration: "Half day",
                price: "From ₹300/person",
                badge: "Unique",
                url: "https://www.getyourguide.com/s/?q=kullu&partner_id=PSZA5UI",
              },
              {
                name: "GHNP Buffer Zone Forest Walk",
                duration: "3–4 hrs",
                price: "₹100–₹200 entry",
                url: "https://www.getyourguide.com/s/?q=kullu&partner_id=PSZA5UI",
              },
              {
                name: "Raghupur Fort + Jalori Pass",
                duration: "Full day",
                price: "From ₹500/person",
                badge: "Hidden gem",
                url: "https://www.getyourguide.com/s/?q=kullu&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Jibhi & Tirthan Valley"
            subtitle="Himachal&apos;s most peaceful hidden gem — before everyone discovers it."
            spots={[
              {
                name: "Jalori Pass",
                query: "jalori pass himachal pradesh snow mountains 3120m",
                desc: "3,120m mountain pass accessible by road — 360° Himalayan views.",
              },
              {
                name: "Serolsar Lake",
                query: "serolsar lake deodar forest himachal jalori pass",
                desc: "Sacred alpine lake at 3,100m — 5km trek through ancient deodar forest.",
              },
              {
                name: "Tirthan River",
                query: "tirthan river clear water himachal pradesh GHNP forest",
                desc: "The clearest river in Himachal — UNESCO GHNP buffer zone.",
              },
              {
                name: "Jibhi Village",
                query: "jibhi village wooden houses apple orchards himachal pradesh",
                desc: "Traditional kath-kuni wooden houses with carved balconies and apple orchards.",
              },
              {
                name: "Raghupur Fort",
                query: "raghupur fort meadow jalori pass himachal panoramic views",
                desc: "Ancient fort on high meadows — less crowded than Serolsar, equally stunning.",
              },
            ]}
          />

          {/* ── SECTION 6: MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              ❌ Mistakes to Avoid
            </h2>
            <p className="text-xs text-muted font-light mb-6 leading-relaxed">
              Things first-time visitors to Jibhi get wrong — learned the hard way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <MistakeCard
                icon="🌧️"
                title="Going in July–August"
                desc="Monsoon brings landslide risk on the valley roads, leeches on every forest trail and a flooded Tirthan River. The Jalori Pass road is frequently blocked. Not worth the risk when Apr–Jun and Sep–Nov are so much better."
              />
              <MistakeCard
                icon="📵"
                title="Not booking homestays in advance"
                desc="Jibhi has very few good-quality homestays and they fill up fast on weekends. Book at least a week ahead for Fri–Sun stays. The best riverside cottages sell out 2–3 weeks ahead in peak May and October."
              />
              <MistakeCard
                icon="🏃"
                title="Skipping Raghupur Fort"
                desc="Everyone does Serolsar Lake because it is more photographed. Raghupur Fort is equally beautiful — meadow views, ancient ruins, almost nobody else there. If you only have time for one trek from Jalori, Raghupur Fort is the underdog pick."
              />
              <MistakeCard
                icon="🧥"
                title="Underestimating Jalori Pass temperature"
                desc="Jalori Pass sits at 3,120m. Even in May, temperature at the pass can drop to 5–8°C — much colder with wind. Packing only shorts and a T-shirt because it is summer is a common mistake. Always carry a fleece or light down jacket."
              />
              <MistakeCard
                icon="⚡"
                title="Cramming Jibhi + Kasol + Manali into one trip"
                desc="The mountains slow you down — in the best way. Trying to visit three distinct destinations in 5 days means spending most of your time in cars on mountain roads. Pick Jibhi, go deep. You will leave wanting to come back."
              />
              <MistakeCard
                icon="💳"
                title="Not carrying cash before entering the valley"
                desc="No ATM in Jibhi village. Nearest ATM is in Banjar town (15km away) or Aut (12km in the other direction). Carry enough cash for accommodation, cabs and food for your full stay. Some homestays accept UPI but do not rely on it."
              />
              <MistakeCard
                icon="🎣"
                title="Missing the Tirthan River walk"
                desc="Most first-time visitors focus entirely on the Jalori Pass treks and miss the GHNP river experience — which is arguably more beautiful and more unique. A morning walk along the Tirthan through the UNESCO buffer zone is something you cannot do anywhere else."
              />
              <MistakeCard
                icon="🚗"
                title="Not negotiating the Jalori Pass cab fare upfront"
                desc="Always agree on a return price before getting into the cab and confirm the driver will wait at the pass. Standard rate is ₹800–₹1,200 return for a private car. Shared cabs from Jibhi to Jalori go for ₹200–₹300/person if you ask your homestay host to help find one."
              />
            </div>
          </section>

          {/* ── SECTION 7: TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">
              💡 Pro Tips for Jibhi &amp; Tirthan Valley
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TipCard
                icon="📵"
                title="Download offline maps before Aut"
                desc="Mobile data is nearly non-existent in the Tirthan Valley — only BSNL works occasionally. Download Google Maps or Maps.me offline for the entire Kullu district before you leave Aut. The offline map will cover Jibhi, Jalori Pass, Gushaini and Banjar."
                color="bg-amber-50 border-amber-200"
              />
              <TipCard
                icon="🎣"
                title="Arrange fishing the night before"
                desc="The fishery department office in Gushaini issues trout fishing licenses from 8am–4pm weekdays. Your homestay host can usually call ahead to arrange. License is ₹200–₹300/day. Catch-and-release is mandatory in the GHNP stretch."
                color="bg-blue-50 border-blue-200"
              />
              <TipCard
                icon="🦅"
                title="Best birding window: dawn at Gushaini"
                desc="The Tirthan Valley has the highest bird diversity in Himachal Pradesh. Western Tragopan (Himachal&apos;s state bird), Khalij Pheasant and Himalayan Monal are seen regularly near Gushaini at dawn. Bring binoculars. Your homestay host will know the best spots."
                color="bg-green-50 border-green-200"
              />
              <TipCard
                icon="🍎"
                title="Buy apples directly from farms in October"
                desc="September–October: apple orchards are in full harvest. Buy directly from farmers in Jibhi village — ₹20–₹40/kg for varieties you have never tasted. Apple variants like Tydeman&apos;s Early and Royal Delicious from the Tirthan Valley are extraordinary."
                color="bg-rose-50 border-rose-200"
              />
              <TipCard
                icon="🏡"
                title="Book homestays direct — skip OTAs"
                desc="Most Jibhi homestays are family-run and list on booking platforms with a 20–30% markup. Find numbers on Google Maps and call or WhatsApp directly. You pay less, they earn more, and you often get better rooms as a walk-in relationship guest."
                color="bg-purple-50 border-purple-200"
              />
              <TipCard
                icon="⚡"
                title="Carry a power bank — daily power cuts"
                desc="Power cuts of 2–4 hours are normal in the Tirthan Valley. The homestay will have candles and lanterns but your phone and camera batteries will not recharge during cuts. A 20,000mAh power bank covers your whole trip."
                color="bg-teal-50 border-teal-200"
              />
              <TipCard
                icon="🎒"
                title="Pack a day pack for Jalori treks"
                desc="Leave your main bag at the homestay. The Jalori Pass treks need only: water (2L minimum), packed lunch, warm layer, rain poncho, sunscreen and a camera. Trekking poles help on the descent from Raghupur Fort. Do not bring more than 6–7kg on the trek."
                color="bg-sky-50 border-sky-200"
              />
              <TipCard
                icon="🌿"
                title="May is the single best month"
                desc="Snow still caps Jalori Pass and the surrounding ranges. The valley floor is green and warm (18–22°C). Apple blossoms are out. The Tirthan is running fast and clear. Crowds are not yet at summer peak. If you can only go once, go in May."
                color="bg-emerald-50 border-emerald-200"
              />
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">
              Free Service
            </span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want Your Jibhi Trip Planned?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group size — personalised Tirthan Valley itinerary in 24 hours.
              Free.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-gold">
              Plan My Trip →
            </button>
          </div>

          {/* ── SECTION 8: FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I reach Jibhi from Delhi?",
                  a: "Take an overnight HRTC bus to Aut (12 hrs, ₹700–₹1,000 from Kashmere Gate ISBT), then a local cab to Jibhi (45 min, ₹500–₹600). Total cost: ₹1,200–₹1,500 per person. Alternatively fly to Bhuntar (Kullu) and take a taxi to Jibhi in 1 hour. There is no direct bus to Jibhi — Aut on the Manali highway is the nearest major stop.",
                },
                {
                  q: "What is the best time to visit Jibhi?",
                  a: "April to June (18–22°C, snow at Jalori Pass, apple blossoms, clear skies) and September to November (golden foliage, very few tourists, sharp mountain views) are both excellent. May is the single best month. Avoid July–August — heavy monsoon brings landslide risk on valley roads and leeches on every forest trail.",
                },
                {
                  q: "Is Jibhi better than Manali?",
                  a: "For a peaceful, authentic Himalayan retreat — yes. Jibhi costs 30–40% less than Manali, has a fraction of the crowds, and the homestay experience is far more genuine. Manali wins for adventure sports (paragliding, skiing), better transport links and nightlife. If you want quiet mountains and real Himachali hospitality, Jibhi is the better choice.",
                },
                {
                  q: "Can I do both Serolsar Lake and Raghupur Fort in one day?",
                  a: "Not comfortably. Each trek is 5–6 hours return from Jalori Pass including walking time and stops at the destination. You can technically start at 7am and do both with minimal time at each, but it is a long day. Better to pick one and enjoy it properly. Raghupur Fort if you want solitude; Serolsar Lake if you want the alpine lake experience.",
                },
                {
                  q: "Is there an ATM in Jibhi?",
                  a: "No ATM in Jibhi village. Nearest ATMs are in Banjar town (15km, 30-min drive) or Aut (12km in the other direction). Carry enough cash for your full stay before entering the valley. UPI works at some homestays but network is unreliable.",
                },
                {
                  q: "Do I need a permit for GHNP?",
                  a: "For the buffer zone day walks from Gushaini (the main accessible area), you register at the forest checkpoint and pay ₹100–₹200/person. No advance permit needed. Multi-day treks inside the core GHNP zone (starting from Sai Ropa visitor centre near Gushaini) require advance permits from the GHNP office — book online or at the office in advance.",
                },
                {
                  q: "Can I combine Jibhi with Manali in one trip?",
                  a: "Yes — Jibhi to Manali is 80km (2.5 hrs via Aut on the Manali highway). An ideal circuit from Delhi: 2–3 days in Jibhi, then 2–3 days in Manali, total 5–6 day Himachal trip. Return from Manali to Delhi by Volvo overnight bus.",
                },
              ].map((item, i) => (
                <FAQItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── RELATED GUIDES ── */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Himachal Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Manali 5 Days — Rohtang + Old Manali", href: "/blog/manali-5-days" },
                { label: "Spiti Valley 7 Days", href: "/blog/spiti-valley-7-days" },
                { label: "Leh Ladakh 7 Days", href: "/blog/leh-ladakh-7-days" },
                { label: "Kashmir 6 Days — Dal Lake + Gulmarg", href: "/blog/kashmir-6-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Jibhi &amp; Tirthan Valley trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-jibhi-tirthan-valley", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/jibhi-tirthan-valley-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-jibhi-tirthan-valley", label: "How to get there", icon: "✈️" },
                { href: "/blog/jibhi-tirthan-valley-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="jibhi-tirthan-valley-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
