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

const CHENNAI_TOC = [
  { id: "decision",   emoji: "⚡",  label: "1 Day vs 2 Days vs Day Trip?" },
  { id: "highlights", emoji: "🏛️",  label: "Key Attractions" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "food",       emoji: "🍛",  label: "Food Guide" },
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
        className="h-full bg-gold transition-all duration-100"
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
          href: `mailto:?subject=Chennai 2-Day Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Chennai in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"
              >
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span
          className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
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

// ── Food Card ─────────────────────────────────────────────────────────────────
function FoodCard({
  name,
  type,
  dishes,
  price,
  badge,
  note,
  color,
}: {
  name: string;
  type: string;
  dishes: string;
  price: string;
  badge?: string;
  note: string;
  color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="font-serif text-base text-ink font-normal">{name}</p>
          <p className="text-[0.68rem] text-muted uppercase tracking-wide">{type}</p>
        </div>
        {badge && (
          <span className="text-[0.6rem] font-semibold tracking-widest uppercase bg-gold/20 text-amber-800 px-2.5 py-1 rounded-full flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-ink font-medium mb-1">{dishes}</p>
      <p className="text-xs text-muted font-light leading-relaxed mb-2">{note}</p>
      <p className="text-xs font-medium text-teal">{price}</p>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ChennaiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<"1" | "2" | "mahabalipuram">("1");

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHENNAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chennai" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="marina beach chennai sunrise golden light fishing boats tamil nadu"
            alt="Marina Beach Chennai at sunrise — world's second longest urban beach"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chennai 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 1, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chennai in 2 Days: The Real City Guide
                <em className="italic text-gold-light"> (Temples, Marina Beach &amp; Food)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Most travellers rush through Chennai on the way to somewhere else. Here&apos;s why that&apos;s a mistake — and what 2 proper days looks like.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Chennai is South India&apos;s most underrated city. Tourists who spend 6 hours here see Marina Beach, eat a dosa, and leave. The ones who stay 2 days discover 7th-century temples, the finest Chola bronze sculptures on Earth, a neighbourhood (Mylapore) unchanged for centuries, and filter coffee that ruins you for everything else.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Nov – Feb" />
            <StatCard icon={"\u2708\uFE0F"} label="International Hub" value="MAA Airport" />
          </div>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} 1 Day vs 2 Days vs Day Trip Base?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chennai works differently depending on how much time you have. Choose your situation below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  emoji: "⏱️",
                  title: "1 Day (Transit)",
                  sub: "Layover or passing through",
                  points: [
                    "Marina Beach sunrise (6–8am)",
                    "Kapaleeshwarar Temple morning",
                    "Murugan Idli Shop lunch",
                    "Government Museum afternoon",
                  ],
                  verdict: "Hits the essentials. You will want to come back.",
                  color: "border-amber-200 bg-amber-50",
                  th: "text-amber-800",
                },
                {
                  emoji: "🏛️",
                  title: "2 Days (Recommended)",
                  sub: "This guide — the right way",
                  points: [
                    "All of Day 1 above",
                    "Mylapore neighbourhood deep dive",
                    "San Thome Cathedral",
                    "Elliot&apos;s Beach evening",
                    "Fort St George or Mahabalipuram",
                  ],
                  verdict: "Enough to actually understand the city.",
                  color: "border-teal-200 bg-teal-50",
                  th: "text-teal-800",
                },
                {
                  emoji: "🗺️",
                  title: "Day Trip Base (3+ days)",
                  sub: "Using Chennai as a hub",
                  points: [
                    "Day 1–2: Chennai city",
                    "Day 3: Mahabalipuram (58km)",
                    "Day 4: Kanchipuram temples (75km)",
                    "Day 5: Pondicherry (160km)",
                  ],
                  verdict: "Chennai unlocks the entire Tamil Nadu circuit.",
                  color: "border-purple-200 bg-purple-50",
                  th: "text-purple-800",
                },
              ].map((plan) => (
                <div key={plan.title} className={`rounded-xl border p-5 ${plan.color}`}>
                  <div className="text-2xl mb-2">{plan.emoji}</div>
                  <h3 className={`font-serif text-base font-normal mb-0.5 ${plan.th}`}>{plan.title}</h3>
                  <p className="text-[0.68rem] text-muted mb-3">{plan.sub}</p>
                  <ul className="space-y-1.5 mb-3">
                    {plan.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted font-light">
                        <span className="text-amber-800 mt-0.5 flex-shrink-0">{"●"}</span>
                        <span dangerouslySetInnerHTML={{ __html: pt }} />
                      </li>
                    ))}
                  </ul>
                  <p className={`text-xs font-medium italic ${plan.th}`}>{plan.verdict}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Key fact:</strong> Chennai has the best international air connections in South India. Most visitors fly in here even when their real destination is Kerala or Tamil Nadu temples. Use that to your advantage — build 2 days in before you continue.
              </p>
            </div>
          </section>

          {/* ── KEY ATTRACTIONS ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFDB\uFE0F"} Key Attractions</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chennai is not just a beach city. It is a layered ancient city that most visitors never scratch the surface of.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "Marina Beach",
                  emoji: "🌊",
                  bg: "bg-sky-50 border-sky-200",
                  th: "text-sky-800",
                  rows: [
                    ["Length", "13km — world's 2nd longest urban beach"],
                    ["Best time", "Sunrise (5:30–7am) or evening (5–7pm)"],
                    ["Entry", "Free"],
                    ["Avoid", "11am–5pm — scorching and crowded"],
                  ],
                  note: "Fishing boats returning at dawn, local snacks on the promenade in the evening. Go early.",
                },
                {
                  title: "Kapaleeshwarar Temple",
                  emoji: "🛕",
                  bg: "bg-orange-50 border-orange-200",
                  th: "text-orange-800",
                  rows: [
                    ["Age", "7th century Dravidian temple, Mylapore"],
                    ["Best time", "7–10am before tour groups"],
                    ["Dress code", "Modest; remove footwear at entrance"],
                    ["Entry", "Free; small fee for camera"],
                  ],
                  note: "The gopuram (tower) is magnificent. Built in Dravidian style with extraordinary sculptural detail.",
                },
                {
                  title: "Government Museum (Egmore)",
                  emoji: "🏛️",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Founded", "1851 — one of India's oldest museums"],
                    ["Highlight", "Bronze Gallery — finest Chola bronzes in the world"],
                    ["Entry", "₹15 Indians, ₹500 foreigners"],
                    ["Duration", "1.5–2 hours for Bronze Gallery focus"],
                  ],
                  note: "The Nataraja bronze here is considered the finest example of Chola metalwork anywhere. Almost no one visits.",
                },
                {
                  title: "Mylapore Neighbourhood",
                  emoji: "🏘️",
                  bg: "bg-rose-50 border-rose-200",
                  th: "text-rose-800",
                  rows: [
                    ["Character", "Most authentic old Chennai — unchanged for centuries"],
                    ["See", "Temple tank, silk shops, street food vendors"],
                    ["Best time", "Morning — when temple life is most active"],
                    ["Cost", "Free to walk; food from ₹30–80"],
                  ],
                  note: "Mylapore is what most tourists miss entirely. This is the real Chennai — ancient, alive, completely unhurried.",
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">
                    {"\u26A0\uFE0F"} {area.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional attractions */}
            <div className="space-y-3">
              {[
                {
                  title: "San Thome Cathedral",
                  desc: "Portuguese colonial church built over the tomb of St Thomas the Apostle (one of Jesus's 12 disciples). The crypt below the altar is authentic. Free entry, architecturally stunning, right on the coast.",
                  icon: "⛪",
                  color: "bg-white border-parchment-2",
                },
                {
                  title: "Fort St George",
                  desc: "The first British fortification in India, built in 1644. The fort museum inside has extraordinary colonial artefacts. The St Mary's Church inside (1680) is the oldest Anglican church in Asia. ₹35 entry.",
                  icon: "🏰",
                  color: "bg-white border-parchment-2",
                },
                {
                  title: "Elliot's Beach (Besant Nagar)",
                  desc: "Quieter, cleaner alternative to Marina Beach. Popular with locals in the evening, cafes and restaurants nearby. Better swimming conditions than Marina. Free entry.",
                  icon: "🏖️",
                  color: "bg-white border-parchment-2",
                },
              ].map((item) => (
                <TipCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} color={item.color} />
              ))}
            </div>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Chennai — Must-See Places"
            subtitle="Click each thumbnail to explore Chennai&apos;s temples, beach, and historic neighbourhoods."
            spots={[
              {
                name: "Marina Beach",
                query: "marina beach chennai sunrise fishing boats golden light",
                desc: "13km of open beach — the world's second longest urban beach. Fishing boats return at dawn while the city is still asleep. Evening brings snack vendors and promenade walkers.",
              },
              {
                name: "Kapaleeshwarar Temple",
                query: "kapaleeshwarar temple mylapore gopuram dravidian architecture",
                desc: "7th-century Dravidian temple in the heart of Mylapore. The multi-tiered gopuram is covered in painted sculptures. Visit before 10am — it gets crowded fast.",
              },
              {
                name: "Mylapore Streets",
                query: "mylapore chennai streets temple tank silk sarees traditional",
                desc: "The oldest neighbourhood in Chennai — unchanged for centuries. Temple tank reflections, flower garland vendors, silk saree shops, filter coffee at pavement stalls.",
              },
              {
                name: "Government Museum",
                query: "chola bronze sculpture nataraja museum india ancient art",
                desc: "The Bronze Gallery holds the finest Chola bronze sculptures in existence — including the iconic Nataraja dancing Shiva. One of the most significant art collections in India.",
              },
              {
                name: "San Thome Cathedral",
                query: "san thome cathedral chennai portuguese colonial church coastal",
                desc: "Built over the tomb of St Thomas the Apostle. The neo-Gothic Portuguese cathedral sits right on the seafront. The crypt beneath the altar is 2,000 years of history in one room.",
              },
            ]}
          />

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 2-Day Chennai Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Two logical days plus an optional Mahabalipuram day trip. Days are expandable — click to show or hide.
            </p>

            {/* Day switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {[
                { id: "1" as const, emoji: "🌊", label: "Day 1", sub: "Marina, Mylapore & Beach" },
                { id: "2" as const, emoji: "🏛️", label: "Day 2", sub: "Museum & Fort" },
                { id: "mahabalipuram" as const, emoji: "🗿", label: "Day Trip", sub: "Mahabalipuram (58km)" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDay(d.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeDay === d.id
                      ? "bg-white shadow text-ink border border-parchment-2"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {d.emoji} {d.label}
                  <span className="block text-[0.6rem] text-muted font-light mt-0.5">{d.sub}</span>
                </button>
              ))}
            </div>

            {/* ── DAY 1 ── */}
            {activeDay === "1" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">🌊</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Day 1 — Marina Beach, Mylapore &amp; the Coast</p>
                    <p className="text-xs text-sky-600 font-light">Base: Egmore or T Nagar hotel {"·"} Start early — Chennai heat arrives by 10am</p>
                  </div>
                </div>
                <DayCard
                  day="Morning"
                  title="Marina Beach Sunrise + Breakfast"
                  items={[
                    "5:30–6am: Arrive Marina Beach for sunrise. The light on the ocean at dawn is extraordinary — fishing boats returning, almost no tourists, vendors setting up.",
                    "Walk north along the promenade. The beach stretches 13km — India's longest urban beach and the world's second longest. You won't cover it all, and you don't need to.",
                    "7am: Filter coffee and idli-sambar at Ratna Cafe (Triplicane, 5 min from Marina). In operation since 1948. The filter coffee here is Chennai at its most authentic. ₹40–60.",
                    "9am: Kapaleeshwarar Temple, Mylapore (15 min auto from Marina). Arrive before 10am before tour groups. The gopuram — the towering ceremonial entrance gate — is covered in painted Dravidian sculptures. Free entry; camera fee ₹30.",
                    "Inside the temple: The central shrine to Lord Shiva and the peacock legend are the main draw. The temple tank next door mirrors the gopuram in the water — photograph it.",
                  ]}
                  cost="₹200–400 (auto + breakfast + temple)"
                />
                <DayCard
                  day="Midday"
                  title="Mylapore Neighbourhood + Lunch"
                  items={[
                    "10–11:30am: Walk the Mylapore streets around Kapaleeshwarar Temple. This is the oldest continuously inhabited neighbourhood in Chennai — unchanged for centuries.",
                    "Silk saree shops line the main street. Even if you're not buying, the showrooms are worth walking through. No pressure from the better shops.",
                    "San Thome Cathedral is 10 min walk from Kapaleeshwarar Temple. Walk along the coast road. The Portuguese Gothic cathedral was built over the tomb of St Thomas the Apostle. The crypt is free to visit — genuine 2,000-year-old history beneath a colonial church.",
                    "12:30pm: Lunch at Murugan Idli Shop (multiple Mylapore branches). Widely considered the best idli in Chennai. Idli with four chutneys and sambar: ₹80–120 per plate. Queue is normal and moves fast.",
                    "Post-lunch: Walk the temple tank area. The Kapaleeshwarar Tank (Sivaganga Tank) reflects the gopuram when the light is right.",
                  ]}
                  cost="₹150–250 (lunch + local snacks)"
                />
                <DayCard
                  day="Afternoon"
                  title="San Thome to Elliot's Beach"
                  items={[
                    "2pm: Rest at your hotel or explore the AC Government Museum if you have energy (Egmore — covered fully on Day 2 otherwise). Heat peaks 2–4pm — best to avoid being outdoors.",
                    "4:30pm: Head to Elliot's Beach (Besant Nagar) by auto (25–30 min from Mylapore). This is the beach Chennai residents actually use — cleaner, smaller, less chaotic than Marina.",
                    "The Rock Church (Velankanni Shrine) is right on Elliot's Beach — worth a quick visit.",
                    "Promenade cafes open for evening: Amethyst Cafe nearby is famous for its heritage bungalow setting. Good for filter coffee or a light snack.",
                    "The sunset over the Bay of Bengal from Elliot's Beach is genuinely beautiful. Locals gather around 6pm.",
                  ]}
                  cost="₹100–300 (auto + evening snack)"
                />
                <DayCard
                  day="Evening"
                  title="Dinner — Chennai at its Best"
                  items={[
                    "7:30pm: Dinner at Saravana Bhavan (multiple branches — T Nagar branch is reliable). The thali is ₹150–200. Clean, air-conditioned, consistent. This is the Chennai institution most visitors eat at.",
                    "Alternative: Find a local mess (small restaurant) near your hotel for authentic Tamil meals. Look for restaurants with handwritten boards and plastic chairs — the food will be better and cheaper (₹80–150 for a full meal).",
                    "Night walk optional: T Nagar shopping area (if you're staying there) stays open late. Silk saree shopping at night with air conditioning — Chennai's efficient version of retail.",
                  ]}
                  cost="₹150–350 (dinner)"
                />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Day 1 Total (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">₹700–₹1,300 excluding accommodation</span>
                </div>
              </div>
            )}

            {/* ── DAY 2 ── */}
            {activeDay === "2" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Day 2 — Chola Bronzes, Fort St George &amp; the City</p>
                    <p className="text-xs text-amber-600 font-light">Or substitute afternoon for Mahabalipuram day trip (leave by 2pm)</p>
                  </div>
                </div>
                <DayCard
                  day="Morning"
                  title="Government Museum (Egmore) — Chola Bronze Gallery"
                  items={[
                    "9am: Government Museum, Egmore (Tamil Nadu Government Museum). This is one of the most important museums in India and almost nobody visits it.",
                    "Go directly to the Bronze Gallery — Hall 27. The Chola bronze sculptures from the 9th–13th centuries are world-class. The Nataraja (dancing Shiva) here is considered the finest example of Chola metalwork in existence.",
                    "Other bronzes of Parvati, Vishnu, Ardhanariswara — each one is extraordinary. You are looking at some of the greatest art ever produced in India, in a quiet hall with almost no crowds.",
                    "Budget 1.5–2 hours for the Bronze Gallery focus. The natural history section and coins gallery are interesting if you have extra time.",
                    "Entry: ₹15 for Indian nationals, ₹500 for foreigners. Camera: ₹200 additional. Closed Fridays.",
                  ]}
                  cost="₹15–500 (entry + camera)"
                />
                <DayCard
                  day="Midday"
                  title="Egmore Area Lunch + Fort St George"
                  items={[
                    "11:30am: Lunch near Egmore at Ponnusamy Hotel — famous for Chettinad chicken, the bold-spiced cuisine from Tamil Nadu's Chettinad region. Mid-range, ₹200–400.",
                    "Alternative budget: Walk to a Tamil meals restaurant near Egmore station — banana leaf meals (Monday–Friday) for ₹120–150. Proper South Indian thali.",
                    "1:30pm: Fort St George (10 min from Egmore by auto). The first British fortification in India (1644). Free to enter the grounds. ₹25 for the fort museum.",
                    "Fort Museum highlights: The original British colonial artefacts, Clive's Corner, swords and silverware. St Mary's Church inside the fort (1680) — the oldest Anglican church in Asia, still in use.",
                    "The fort is on the waterfront — good views of the Chennai port and the Cooum River.",
                  ]}
                  cost="₹200–500 (lunch + fort entry)"
                />
                <DayCard
                  day="Afternoon Option"
                  title="Mahabalipuram Alternative (Start at 2pm)"
                  items={[
                    "If you want to see Mahabalipuram but only have 2 days total: Leave Chennai at 2pm by cab (₹1,200–1,500 one way, 1.5 hrs).",
                    "Arrive Mahabalipuram by 3:30pm. See Arjuna's Penance (open-air bas relief — the largest in the world) and the Five Rathas in the afternoon light.",
                    "Shore Temple at sunset (5:30–6:30pm) — UNESCO World Heritage Site, 7th-century Pallava temple right on the sea. The sunset light on the temple is exceptional.",
                    "Krishna's Butter Ball on the way back — a 250-tonne boulder balanced on a tiny point on a hillside. Free to see, 5 minutes.",
                    "Return to Chennai by 8pm. Cab back: ₹1,200–1,500 or share cab.",
                    "For a full Mahabalipuram day: see the Day Trip tab above with more detail.",
                  ]}
                  cost="₹2,500–4,000 (cab both ways + entry fees)"
                />
                <DayCard
                  day="Evening"
                  title="Last Dinner — Go Chettinad"
                  items={[
                    "7pm: Try Chettinad cuisine for dinner — the bold, aromatic style of cooking from Tamil Nadu's Chettinad region is Chennai's culinary signature.",
                    "Kaaraikudi Restaurant (Nungambakkam) — excellent Chettinad food, mid-range, ₹400–600 per person. Order the Chettinad chicken curry and appam.",
                    "Apollo Banana Leaf (T Nagar) — the banana leaf meal experience. Food served directly on a banana leaf, unlimited refills of rice and curries. ₹150–200. A ritual worth doing once.",
                    "Budget option: Any local mess or hotel near your accommodation. Ask for &ldquo;meals&rdquo; — the South Indian thali system with unlimited rice and multiple curries.",
                  ]}
                  cost="₹150–600 (dinner)"
                />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Day 2 Total (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">₹800–₹1,800 excluding accommodation</span>
                </div>
              </div>
            )}

            {/* ── MAHABALIPURAM DAY TRIP ── */}
            {activeDay === "mahabalipuram" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🗿</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Mahabalipuram Day Trip — 58km south of Chennai</p>
                    <p className="text-xs text-teal-600 font-light">Leave by 7am to beat the noon heat at open-air monuments {"·"} Full day</p>
                  </div>
                </div>
                <DayCard
                  day="Getting There"
                  title="Chennai to Mahabalipuram"
                  items={[
                    "Distance: 58km south of Chennai on ECR (East Coast Road). 1.5–2 hours depending on traffic.",
                    "CMBT Bus from Chennai Mofussil Bus Terminus: ₹60 each way. Bus No. 118 / 119C. Takes 2–2.5 hours but cheap and runs frequently.",
                    "Cab (Ola/Uber/Rapido): ₹900–1,200 one way. Book the previous evening. Request a cab that can wait for the day — ₹2,500–3,500 full day including return.",
                    "Leave Chennai by 7am. The monuments at Mahabalipuram are open-air and the Tamil Nadu sun by noon is brutal.",
                    "Accommodation in Mahabalipuram: If you want to stay the night, budget beach guesthouses from ₹600–1,500/night. Then return to Chennai the next morning.",
                  ]}
                  cost="₹120 (bus both ways) or ₹2,500–3,500 (cab full day)"
                />
                <DayCard
                  day="Morning"
                  title="Arjuna's Penance + Five Rathas"
                  items={[
                    "9am: Arjuna's Penance (also called Descent of the Ganga). This is an enormous open-air bas-relief carving — the largest in the world — cut directly into a natural rock face. Over 100 figures of gods, celestial beings, and animals. Free to view, 20 minutes to properly absorb.",
                    "10am: Five Rathas (Pancha Rathas). UNESCO World Heritage Site. Five 7th-century monolithic temples carved from single boulders, each in a different South Indian architectural style. ₹40 entry (Indian), ₹600 (foreigner).",
                    "Each Ratha is named after a Pandava from the Mahabharata. The craftsmanship is extraordinary — these are not built structures, they are carved from a single piece of granite.",
                    "Krishna's Butter Ball: A 250-tonne granite boulder balanced on a hillside at an impossible angle. 5 minutes to walk there from Five Rathas. Free. Inexplicably entertaining.",
                    "Mahishasuramardini Cave: Rock-cut cave temple with exceptional bas-reliefs of Durga slaying the buffalo demon. Small, rarely crowded, exceptional quality. Free.",
                  ]}
                  cost="₹40–600 (Five Rathas entry)"
                />
                <DayCard
                  day="Afternoon"
                  title="Lunch + Shore Temple at Sunset"
                  items={[
                    "1pm: Lunch in Mahabalipuram town. The restaurants along the beach road serve good fresh seafood and South Indian meals. ₹150–300.",
                    "Recommended: Gecko Cafe or Moonrakers for relaxed fish & rice lunch. Or any local restaurant for basic meals.",
                    "2:30–4pm: Rest and avoid peak heat. The Shore Temple is best seen in the 2 hours before sunset.",
                    "5pm: Shore Temple (UNESCO World Heritage Site). Built in the 7th century by the Pallava dynasty — one of the oldest temples in South India, situated directly on the seafront. The combination of sea spray and ancient stone is unlike any other monument in India.",
                    "Watch the sunset from the Shore Temple area. The temple turns golden-orange as the sun drops. Stay until the light fades.",
                    "Entry: ₹40 Indians, ₹600 foreigners. No photography fee separate from ticket.",
                    "Return to Chennai by 7:30–8pm.",
                  ]}
                  cost="₹200–400 (lunch + Shore Temple entry)"
                />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <p className="text-sm font-medium text-teal-800 mb-2">Want the full Mahabalipuram guide?</p>
                  <p className="text-xs text-teal-600 font-light mb-3">
                    The town has much more — a lighthouse, Tiger Cave, Trimurthi Cave, and excellent beach guesthouses if you want to stay overnight.
                  </p>
                  <Link
                    href="/blog/mahabalipuram-2-days"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline"
                  >
                    Full Mahabalipuram 2-Day Guide {"→"}
                  </Link>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET SECTION ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏨 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">✨ Comfort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹1,400–₹2,400", "₹5,000–₹8,000", "₹10,000–₹18,000"],
                    ["🍛 Food & Drinks", "₹600–₹1,000", "₹1,500–₹2,500", "₹3,500–₹6,000"],
                    ["🚇 Transport (metro/auto)", "₹200–₹400", "₹600–₹1,000", "₹1,500–₹2,500"],
                    ["🏛️ Entry Fees", "₹100–₹200", "₹200–₹400", "₹400–₹800"],
                    ["🗺️ Mahabalipuram Trip", "₹200–₹500", "₹1,500–₹2,000", "₹3,000–₹4,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹5,000–₹7,000", "₹10,000–₹16,000", "₹20,000–₹35,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light italic mb-4">
              All prices INR 2026. Budget column includes Mahabalipuram day trip by bus. Chennai is significantly cheaper than Mumbai and Delhi for equivalent quality accommodation.
            </p>

            {/* How to get here */}
            <div className="rounded-xl border border-parchment-2 bg-white p-5">
              <h3 className="font-serif text-lg font-light text-ink mb-4">How to Reach Chennai</h3>
              <div className="space-y-3">
                {[
                  { icon: "✈️", title: "Chennai International Airport (MAA)", desc: "Well connected globally and domestically — one of India's busiest airports. Domestic flights to all major cities. Metro connects airport to city centre. Pre-paid taxi from airport to Egmore/T Nagar: ₹400–600." },
                  { icon: "🚂", title: "Chennai Central Railway Station", desc: "The main intercity hub for South India. Direct trains to Bengaluru (Shatabdi: 5hrs), Mumbai, Delhi, Hyderabad, and all Tamil Nadu towns. Book at IRCTC at least a week ahead for popular routes." },
                  { icon: "🚇", title: "Chennai Metro", desc: "Functional, air-conditioned, covers key areas including the airport, Egmore, T Nagar, and parts of the city. Fares ₹10–70. Download the Chennai One app. Best way to avoid traffic during peak hours." },
                  { icon: "🛺", title: "Autos & App Cabs", desc: "Auto-rickshaws can overcharge tourists significantly. Use Rapido or Namma Yatri apps for auto-rickshaws with fixed, upfront pricing. Ola and Uber operate well in Chennai. Minimum Ola fare: around ₹80." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.title}</p>
                      <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDF5B"} Food Guide — Chennai&apos;s Star Attraction</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chennai is arguably India&apos;s most serious food city. This is where South Indian cuisine is executed at its highest level — filter coffee, idli, dosa, Chettinad curries, and banana leaf thalis that leave every other version of the dishes tasting like a pale imitation.
            </p>

            {/* Hero food image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
              <SmartImage
                query="south indian filter coffee idli sambar traditional brass tumbler chennai"
                alt="Traditional South Indian filter coffee in brass tumbler with idli sambar"
                width={860} height={380}
                className="w-full object-cover h-64"
              />
              <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
                <p className="text-xs text-muted font-light italic text-center">
                  Filter coffee — decoction brewed in a traditional brass filter, mixed with hot milk and poured between tumblers for froth. Nothing else comes close.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4">Budget Restaurants (Under ₹200/meal)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FoodCard
                name="Ratna Cafe"
                type="Traditional · Triplicane · Since 1948"
                dishes="Filter coffee, idli-sambar, vada"
                price="₹40–80/person"
                badge="Legend"
                note="The institution. Filter coffee here — poured from a height between two brass tumblers — is the definitive Chennai experience. The idli-sambar is exceptional. Go for breakfast."
                color="bg-amber-50 border-amber-200"
              />
              <FoodCard
                name="Murugan Idli Shop"
                type="Idli specialist · Multiple branches"
                dishes="Idli with 4 chutneys and sambar"
                price="₹80–120/plate"
                badge="Best Idli"
                note="Widely considered the best idli in Chennai. The soft idli with the four-chutney combination is why people come back to Chennai specifically for food. Multiple branches — Mylapore and T Nagar both good."
                color="bg-amber-50 border-amber-200"
              />
              <FoodCard
                name="Saravana Bhavan"
                type="South Indian chain · Multiple locations"
                dishes="Thali, dosa, pongal, rasam"
                price="₹150–200/person"
                note="Reliable, clean, good quality. The thali is well-balanced. Not the most exciting option but never disappoints. The chain started in Chennai — the original T Nagar branch is the best."
                color="bg-white border-parchment-2"
              />
              <FoodCard
                name="Apollo Banana Leaf"
                type="Banana leaf meals · T Nagar"
                dishes="Full banana leaf thali with rice"
                price="₹150–200/person"
                badge="Must Try"
                note="The banana leaf meal is a ritual — food served directly on a banana leaf, eaten with your hands. Unlimited rice, multiple curries, rasam, papad. The way it has been served for centuries."
                color="bg-white border-parchment-2"
              />
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4">Mid-Range (₹300–600/person)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FoodCard
                name="Ponnusamy Hotel"
                type="Chettinad · Egmore"
                dishes="Chettinad chicken, mutton curry, appam"
                price="₹300–500/person"
                badge="Chettinad"
                note="Famous for Chettinad cuisine — the bold, heavily spiced cooking style from Tamil Nadu's Chettinad region. The Chettinad chicken here is the reason people come from across the city. No-frills setting."
                color="bg-rose-50 border-rose-200"
              />
              <FoodCard
                name="Kaaraikudi"
                type="Chettinad · Nungambakkam"
                dishes="Chettinad thali, prawn fry, idiyappam"
                price="₹400–600/person"
                note="More polished than Ponnusamy but equally authentic Chettinad food. The Chettinad thali here is a comprehensive introduction to the cuisine. Prawn fry is exceptional if you eat seafood."
                color="bg-rose-50 border-rose-200"
              />
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4">Upscale (Special Occasion)</h3>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <FoodCard
                name="Dakshin — ITC Grand Chola"
                type="Fine dining South Indian · T Nagar"
                dishes="Curated South Indian regional cuisine from across 4 states"
                price="₹1,800–2,500/person"
                badge="Best in Class"
                note="Widely considered the best South Indian fine dining restaurant in Chennai and possibly India. Each dish is sourced from a specific South Indian regional tradition. The tasting menu covers Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh in one meal. Book ahead."
                color="bg-purple-50 border-purple-200"
              />
            </div>

            {/* Filter coffee note */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">☕</span>
                <div>
                  <p className="font-medium text-sm text-ink mb-2">A note on filter coffee</p>
                  <p className="text-xs text-muted font-light leading-relaxed">
                    Chennai filter coffee is not espresso, not pour-over, not instant. It is decoction brewed in a two-part brass filter — ground coffee drips through slowly over 20 minutes. Mixed with hot milk and sugar, then poured between two brass tumblers from a height to create froth. The result is something between espresso and flat white in intensity, deeply aromatic, and completely unique. The best version is at Ratna Cafe. Once you&apos;ve had it, everything else is a compromise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Chennai"
            hotels={[
              { name: "Hotel Pandian", type: "Budget · Egmore · Central", price: "From ₹800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/pandian-chennai.html?aid=2820480" },
              { name: "Residency Towers", type: "Mid-range · T Nagar", price: "From ₹3,000/night", rating: "4", badge: "Good value", url: "https://www.booking.com/hotel/in/residency-towers-chennai.html?aid=2820480" },
              { name: "ITC Grand Chola", type: "Luxury · Guindy", price: "From ₹12,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/itc-grand-chola-chennai.html?aid=2820480" },
            ]}
            activities={[
              { name: "Chennai Heritage Walking Tour", duration: "3 hours", price: "From ₹800/person", badge: "Recommended", url: "https://www.getyourguide.com/s/?q=chennai&partner_id=PSZA5UI" },
              { name: "Mahabalipuram Day Trip from Chennai", duration: "Full day", price: "From ₹1,200/person", badge: "Top pick", url: "https://www.getyourguide.com/s/?q=mahabalipuram&partner_id=PSZA5UI" },
              { name: "South Indian Cooking Class Chennai", duration: "3 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=chennai+cooking&partner_id=PSZA5UI" },
              { name: "Mylapore Temple & Food Walk", duration: "2.5 hours", price: "From ₹700/person", url: "https://www.getyourguide.com/s/?q=mylapore&partner_id=PSZA5UI" },
            ]}
            pdfProductId="chennai-2-days-pdf"
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Going to Marina Beach in the afternoon",
                  desc: "Avoid Marina Beach between 11am and 5pm. It becomes scorching hot (Tamil Nadu summer sun is serious) and overcrowded. Marina at sunrise is magic. Marina at 2pm is exhausting. The 6 hours make all the difference.",
                  icon: "☀️",
                },
                {
                  title: "Skipping Mylapore and only seeing Marina Beach",
                  desc: "Most tourists arrive, see Marina Beach, eat a dosa, and leave. Mylapore — 20 minutes from Marina — is the real Chennai. Ancient temple, temple tank, silk saree streets, street food, unchanged urban fabric going back centuries. Don't miss it.",
                  icon: "🏘️",
                },
                {
                  title: "Taking autos without using an app",
                  desc: "Autorickshaw overcharging is common for tourists in Chennai. Use Rapido or Namma Yatri for fixed, metered auto fares shown upfront. The difference can be 2–3x the real price if you negotiate manually without knowing the route.",
                  icon: "🛺",
                },
                {
                  title: "Visiting Kapaleeshwarar Temple during major puja times without checking",
                  desc: "The temple gets extremely crowded during major puja times (around 12pm and 6–7pm). Go before 10am for space to appreciate the architecture. Friday and full moon days are particularly busy.",
                  icon: "🛕",
                },
                {
                  title: "Skipping the Government Museum's Bronze Gallery",
                  desc: "The Chola bronze gallery at Egmore Museum is world-class — arguably the finest collection of Chola metalwork anywhere. Most tourists skip it entirely. The Nataraja here is the reference standard for one of India's greatest artistic traditions. Go.",
                  icon: "🏛️",
                },
                {
                  title: "Not planning the Mahabalipuram day trip",
                  desc: "Mahabalipuram is only 58km from Chennai. One day covers Shore Temple (UNESCO, on the sea), Five Rathas, Arjuna's Penance (largest bas-relief in the world), and Krishna's Butter Ball. It is far more impressive than spending an extra day in central Chennai.",
                  icon: "🗿",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Start Every Day at 6am",
                  desc: "Chennai's heat is intense — even in November. Starting at 6am and finishing outdoor sightseeing by noon is the key to a comfortable trip. The light is also extraordinary at dawn.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☕",
                  title: "Filter Coffee is the Ritual",
                  desc: "Start every morning with filter coffee from a local cafe — not a hotel restaurant. Ratna Cafe is the benchmark. The decoction-milk-tumbler process produces something completely unlike any other coffee in India.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚇",
                  title: "Metro Beats Traffic for Key Routes",
                  desc: "Chennai traffic can be bad 8–10am and 5–8pm. The Chennai Metro runs air-conditioned and reliable for key routes — airport, Egmore, and T Nagar. ₹10–70. Download Chennai One app for tokens.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛕",
                  title: "Dress Modestly for Temples",
                  desc: "Kapaleeshwarar Temple and most Hindu temples in Chennai require removing footwear. Shoulders and knees covered is expected. Sarongs available at many temple entrances for ₹20–50 if needed.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌧️",
                  title: "Chennai Monsoon is Different",
                  desc: "Chennai gets the northeast monsoon (October–December), not the southwest monsoon like the rest of India. This means it can be rainy when the rest of India is dry. Carry a foldable umbrella October–December.",
                  color: "bg-sky-50 border-sky-200",
                },
                {
                  icon: "🗓️",
                  title: "Best Month is January",
                  desc: "January is the sweet spot — Pongal festival (harvest festival, mid-January) adds colour to the streets, weather is at its best (28–30°C), and tourist crowds are moderate. Book accommodation 2 weeks ahead in January.",
                  color: "bg-sky-50 border-sky-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>

            {/* Best time expanded */}
            <div className="mt-6 rounded-xl border border-parchment-2 bg-white p-5">
              <h3 className="font-serif text-lg font-light text-ink mb-3">Best Time to Visit Chennai</h3>
              <div className="space-y-2">
                {[
                  { month: "Nov – Feb", weather: "28–32°C, pleasant", verdict: "Best", color: "text-teal-700 bg-teal-50" },
                  { month: "March – May", weather: "35–40°C, hot", verdict: "Manageable with early starts", color: "text-amber-700 bg-amber-50" },
                  { month: "June – Sep", weather: "30–35°C, drier", verdict: "Actually good — southwest monsoon misses Chennai", color: "text-sky-700 bg-sky-50" },
                  { month: "Oct – Dec", weather: "28–34°C, northeast monsoon", verdict: "Rain possible; Pongal in Jan is worth planning around", color: "text-purple-700 bg-purple-50" },
                ].map((row) => (
                  <div key={row.month} className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[0.68rem] font-semibold px-2.5 py-1 rounded-full ${row.color}`}>{row.month}</span>
                    <span className="text-xs text-muted font-light">{row.weather}</span>
                    <span className="text-xs text-ink/60">—</span>
                    <span className="text-xs text-ink font-medium">{row.verdict}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Chennai itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Chennai Trip {"→"}
              </button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors"
              >
                Plan My Trip {"→"}
              </a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Chennai?",
                  a: "2 days is enough to cover Marina Beach, Kapaleeshwarar Temple, Mylapore, San Thome Cathedral, and the Government Museum. Add a third day for a Mahabalipuram day trip (58km, UNESCO Shore Temple). 1 day is possible for transit visitors but you'll only get the surface.",
                },
                {
                  q: "What is the best time to visit Chennai?",
                  a: "November to February is best — 28–32°C, pleasant and manageable. Note that Chennai gets the northeast monsoon (October–December), not the southwest monsoon, so it can rain when the rest of India is dry. April is hot (35–40°C) but workable with 6am starts. January has Pongal festival which adds colour to the streets.",
                },
                {
                  q: "How much does a 2-day Chennai trip cost?",
                  a: "Budget travellers: ₹5,000–7,000 per person for 2 days including accommodation (guesthouse in Egmore ₹700–1,200/night), local restaurant meals (₹150–300/meal), and metro/auto transport. Chennai is notably cheaper than Mumbai and Delhi for equivalent quality. Mid-range: ₹10,000–16,000 per person.",
                },
                {
                  q: "Is Marina Beach safe for tourists?",
                  a: "Marina Beach is safe during daylight hours. Go early morning (5:30–8am) for the best experience and fewest crowds. Don't swim — the undertow is strong and there are no lifeguards on most sections. Evening (5–7pm) is also fine. Avoid very late at night. Keep bags secure in crowds.",
                },
                {
                  q: "Can I do a Mahabalipuram day trip from Chennai?",
                  a: "Yes — 58km south on ECR (East Coast Road), 1.5–2 hours. CMBT bus costs ₹60 each way (2–2.5 hrs); cab ₹2,500–3,500 for a full day return. Leave by 7am to cover Arjuna's Penance, Five Rathas, and Shore Temple before heat peaks. The Shore Temple at sunset is the highlight — stay until the light fades.",
                },
                {
                  q: "What is the best food to eat in Chennai?",
                  a: "Start with filter coffee and idli at Ratna Cafe (Triplicane, since 1948). Best idli: Murugan Idli Shop in Mylapore. Best thali: Saravana Bhavan or Apollo Banana Leaf. For Chettinad (bold, spiced Tamil Nadu regional cuisine): Ponnusamy Hotel in Egmore. Upscale: Dakshin at ITC Grand Chola for the finest South Indian fine dining.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Extending Your South India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mahabalipuram — 2 Day Full Guide", href: "/blog/mahabalipuram-2-days", soon: false },
                { label: "Pondicherry — French Quarter & Auroville", href: "/blog/pondicherry-3-days", soon: false },
                { label: "Ooty — Nilgiri Toy Train & Tea Gardens", href: "/blog/ooty-3-days", soon: false },
                { label: "Browse All South India Guides", href: "/#packages", soon: false },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="chennai-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
