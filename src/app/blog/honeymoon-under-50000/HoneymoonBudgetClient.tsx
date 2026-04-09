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
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const HONEYMOON_TOC = [
  { id: "why-50k",       emoji: "💰", label: "Why ₹50,000 Works" },
  { id: "destinations",  emoji: "📍", label: "Top 8 Destinations" },
  { id: "costs",         emoji: "📊", label: "Cost Breakdown Table" },
  { id: "booking-tips",  emoji: "🏨", label: "How to Book Cheap" },
  { id: "save-more",     emoji: "✂️",  label: "Ways to Save More" },
  { id: "expectations",  emoji: "⚖️",  label: "What ₹50k Gets You" },
  { id: "faq",           emoji: "❓", label: "FAQ" },
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
          href: `mailto:?subject=Budget Honeymoon India&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Best honeymoon destinations under ₹50,000 in India&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        <div className="px-5 pb-5 pt-1 text-sm text-muted font-light leading-relaxed border-t border-parchment-2">
          {a}
        </div>
      )}
    </div>
  );
}

// ── Destination Card ──────────────────────────────────────────────────────────
function DestCard({
  num,
  name,
  tagline,
  cost,
  nights,
  vibe,
  transport,
  stay,
  food,
  activities,
  bestMonth,
  color,
}: {
  num: number;
  name: string;
  tagline: string;
  cost: string;
  nights: string;
  vibe: string;
  transport: string;
  stay: string;
  food: string;
  activities: string;
  bestMonth: string;
  color: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border overflow-hidden ${color}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between px-5 py-4 text-left hover:brightness-95 transition-all"
      >
        <div className="flex items-start gap-3">
          <span className="font-serif text-3xl font-light text-amber-800/40 leading-none mt-0.5">
            {String(num).padStart(2, "0")}
          </span>
          <div>
            <p className="font-serif text-[1.1rem] font-normal text-ink">{name}</p>
            <p className="text-xs text-muted font-light mt-0.5">{tagline}</p>
            <span className="inline-block mt-2 bg-gold/20 text-amber-900 text-[0.65rem] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full">
              {cost} · {nights}
            </span>
          </div>
        </div>
        <span className={`text-amber-800 text-lg flex-shrink-0 mt-1 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-white/50">
          <p className="text-xs text-amber-800 font-medium uppercase tracking-widest mb-3 mt-4">
            {vibe}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { label: "Transport", val: transport, icon: "🚆" },
              { label: "Stay", val: stay, icon: "🏨" },
              { label: "Food", val: food, icon: "🍽" },
              { label: "Activities", val: activities, icon: "🎯" },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-2">
                <span className="text-base flex-shrink-0">{row.icon}</span>
                <div>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide">{row.label}</p>
                  <p className="text-xs text-ink font-light leading-snug">{row.val}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2">
            <span className="text-sm">📅</span>
            <span className="text-xs text-muted font-light">
              <strong className="text-ink font-medium">Best time: </strong>
              {bestMonth}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function HoneymoonBudgetClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const destinations = [
    {
      num: 1,
      name: "Pondicherry",
      tagline: "French Quarter charm, beachside cafes & quiet romance",
      cost: "₹15,000–₹25,000",
      nights: "3 nights",
      vibe: "Colonial streets · Promenade · Auroville spirituality",
      transport:
        "Train from Chennai (3 hrs, ₹200–₹600) or bus (₹350). Rent a scooter locally for ₹300/day.",
      stay:
        "Heritage homestays in White Town from ₹1,800/night. Le Duplex and similar colonial guesthouses at ₹2,500–₹3,500/night.",
      food:
        "Crepes & coffee at Cafe des Arts (₹600 for two). Seafood thali at local restaurants ₹200–₹350/person. Full day budget: ₹800–₹1,200.",
      activities:
        "Promenade sunrise walk (free), Auroville Matrimandir (free entry, advance booking), Paradise Beach ferry (₹250/person), French Quarter cycling.",
      bestMonth: "October to February — pleasant weather, sea breeze, no rains",
      color: "bg-rose-50 border-rose-200",
    },
    {
      num: 2,
      name: "Coorg",
      tagline: "Coffee estates, misty hills & waterfall trails",
      cost: "₹20,000–₹35,000",
      nights: "3 nights",
      vibe: "Hill station · Coffee plantation stay · Forest walks",
      transport:
        "Bus from Bangalore to Madikeri (5–6 hrs, ₹400–₹600). Private cab ₹3,500–₹4,500 one way.",
      stay:
        "Homestays inside coffee estates from ₹2,500/night (breakfast included). Many offer room + all meals at ₹4,000–₹5,500/night for two.",
      food:
        "Most estates include breakfast. Local meals at Madikeri town cost ₹150–₹250/person. Pandi curry (pork) at a local place — ₹180.",
      activities:
        "Abbey Falls (₹100 entry), Namdroling Monastery (free), Raja's Seat sunset (₹30), coffee estate walk (free with stay), Dubare Elephant Camp (₹1,500/couple).",
      bestMonth:
        "October–March for clear skies. Avoid June–August (heavy monsoon).",
      color: "bg-green-50 border-green-200",
    },
    {
      num: 3,
      name: "Mussoorie",
      tagline: "Queen of Hills — Kempty Falls, Mall Road & mountain views",
      cost: "₹18,000–₹30,000",
      nights: "3 nights",
      vibe: "Colonial hill station · Mall Road · Misty mornings",
      transport:
        "Train to Dehradun (from Delhi: 5–6 hrs, ₹400–₹900 AC), then shared taxi to Mussoorie (1 hr, ₹200/person).",
      stay:
        "Mid-range hotels on Camel&apos;s Back Road ₹2,000–₹3,500/night. Mountain-view rooms on the Library side from ₹1,800/night.",
      food:
        "Maggi point snacks ₹60–₹80. Sit-down meals ₹300–₹500 for two. Budget well at ₹700–₹1,000/day for food.",
      activities:
        "Kempty Falls (₹60 entry), Gun Hill ropeway (₹150/person), Camel&apos;s Back Road evening walk (free), Lal Tibba viewpoint (₹50), Company Garden (₹50).",
      bestMonth:
        "April–June (pleasant, pre-monsoon). December–January for snow — but prices spike 50%.",
      color: "bg-sky-50 border-sky-200",
    },
    {
      num: 4,
      name: "Pushkar",
      tagline: "Desert romance, camel rides & lakeside sunsets",
      cost: "₹12,000–₹22,000",
      nights: "3 nights",
      vibe: "Desert town · Sacred lake · Rooftop cafes",
      transport:
        "Train to Ajmer from Jaipur (1.5 hrs, ₹80–₹200), then 11km by auto to Pushkar (₹150). From Delhi, overnight train to Ajmer (7–8 hrs, ₹400–₹800).",
      stay:
        "Heritage guesthouses near Pushkar Lake from ₹900–₹1,800/night. Rooftop-view rooms at ₹1,200–₹2,200/night.",
      food:
        "Pushkar is vegetarian only (no eggs, meat or alcohol within town limits). Rooftop thali ₹180–₹280. Lassi and snacks ₹50–₹100. Daily food: ₹500–₹800 per couple.",
      activities:
        "Camel ride at sunset (₹600–₹900/couple), Pushkar Lake ghats at dawn (free), Brahma Temple (free), local market walk, rooftop sunrise.",
      bestMonth:
        "October–March. Avoid November if Pushkar Camel Fair — prices triple and town is packed.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      num: 5,
      name: "Hampi",
      tagline: "Ancient ruins, boulders & riverside romance",
      cost: "₹15,000–₹25,000",
      nights: "3 nights",
      vibe: "UNESCO ruins · Backpacker cafes · Tungabhadra riverside",
      transport:
        "Overnight bus from Bangalore to Hospet (7–8 hrs, ₹600–₹800). Local auto/bus from Hospet to Hampi (13km, ₹30–₹150).",
      stay:
        "Stay on the Virupapuragadda (hippie island) side for charm — riverside guesthouses from ₹800–₹1,800/night. Hampi Bazaar side guesthouses from ₹700/night.",
      food:
        "Rooftop cafes with Tungabhadra views — meals for two ₹400–₹600. Sunrise Cafe and Mango Tree are local favourites.",
      activities:
        "Virupaksha Temple (₹50), Vittala Temple with stone chariot (₹600 ASI entry), boulder hopping, coracle ride (₹100/person), sunset at Matanga Hill (free).",
      bestMonth:
        "October–February. Avoid March–May (extreme heat, 40°C+).",
      color: "bg-orange-50 border-orange-200",
    },
    {
      num: 6,
      name: "Kasol",
      tagline: "Parvati Valley cafe culture, treks & Himalayan peace",
      cost: "₹14,000–₹24,000",
      nights: "4 nights",
      vibe: "Mountain village · Cafe culture · Kheerganga trek",
      transport:
        "HRTC Volvo bus from Delhi to Kasol (12–13 hrs, ₹800–₹1,200). Book 2–3 days ahead on weekends.",
      stay:
        "Riverside guesthouses in Kasol from ₹700–₹1,500/night. Kheerganga trek camps (overnight): ₹500–₹800/person with dinner + breakfast.",
      food:
        "Israeli and cafe food is popular — falafel wraps ₹180, pasta ₹220. Dal-chawal at local dhabas ₹120. Expect ₹600–₹900/day for two on food.",
      activities:
        "Kasol–Chalal village walk (free, 2 hrs), Manikaran Gurudwara hot spring (free), Kheerganga overnight trek (₹1,200 guide optional), Tosh Village day trip.",
      bestMonth:
        "May–June and September–October. July–August has landslide risk. December–January has snow but roads can close.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      num: 7,
      name: "Shillong + Cherrapunji",
      tagline: "Scotland of the East — living root bridges & cloud waterfalls",
      cost: "₹22,000–₹38,000",
      nights: "4 nights",
      vibe: "Meghalaya hills · Living root bridges · Cloud waterfalls",
      transport:
        "Fly to Guwahati (cheapest from Delhi/Kolkata, ₹4,000–₹8,000 round trip). Shared cab Guwahati–Shillong (2.5 hrs, ₹250/person).",
      stay:
        "Shillong guesthouses from ₹1,500–₹2,800/night. Cherrapunji eco-camps with valley views at ₹2,000–₹3,500/night.",
      food:
        "Jadoh (rice + pork) at a local restaurant ₹150–₹200. Cafe Shillong and local bakeries ₹300–₹500/meal for two. Total: ₹1,000–₹1,500/day for two.",
      activities:
        "Double Decker Living Root Bridge (trek: ₹50 entry + 3 hrs), Nohkalikai Falls (₹30), Elephant Falls Shillong (₹20), Ward&apos;s Lake (₹20), Don Bosco Museum (₹100).",
      bestMonth:
        "September–November (post-monsoon, waterfalls at peak). Avoid June–August (heavy rains make treks risky).",
      color: "bg-purple-50 border-purple-200",
    },
    {
      num: 8,
      name: "Alleppey + Cochin",
      tagline: "Kerala houseboat day trip, backwaters & Fort Kochi charm",
      cost: "₹28,000–₹42,000",
      nights: "4 nights",
      vibe: "Kerala backwaters · Fort Kochi heritage · Houseboat experience",
      transport:
        "Fly to Kochi (from major cities, ₹4,000–₹9,000 round trip on budget airlines). Train Ernakulam–Alleppey (1.5 hrs, ₹60–₹120).",
      stay:
        "Fort Kochi heritage guesthouses from ₹1,800–₹3,000/night. Alleppey budget guesthouses from ₹1,200/night. Shared houseboat (full day + 1 night) from ₹5,000/couple.",
      food:
        "Kerala sadya (banana leaf meal) ₹200–₹300/person. Seafood at Fort Kochi ₹600–₹900 for two. Budget ₹1,000–₹1,500/day for two.",
      activities:
        "Alleppey houseboat day trip (₹6,000–₹10,000/couple for full day), Chinese Fishing Nets Fort Kochi (free), Mattancherry Palace (₹15), Jew Town spice market, backwater canoe ride (₹300/person).",
      bestMonth:
        "September–February. Avoid June–August (monsoon — backwaters flood, houseboat operations limited).",
      color: "bg-cyan-50 border-cyan-200",
    },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HONEYMOON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Honeymoon Under ₹50,000" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="couple romantic india honeymoon budget travel"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80"
            alt="Budget honeymoon couple India romantic destination"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Honeymoon Under ₹50,000</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Honeymoon &amp; Couples
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Best Honeymoon Destinations Under ₹50,000 in India
                <em className="italic text-gold-light"> (2026 Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px] leading-relaxed">
                8 destinations, real per-couple costs, romantic stays and day-by-day plans — so you can start married life beautifully without breaking the bank.
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
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 3–5 Days</span>
              <span>·</span>
              <span>💑 Per Couple</span>
            </div>
          </div>

          {/* Intro blockquote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most travel agents will tell you that a &quot;good honeymoon&quot; costs ₹1–2 lakh. That&apos;s not a honeymoon requirement — that&apos;s a commission target. India has destinations that are genuinely romantic, beautiful and memorable at a fraction of that price. This guide tells you exactly where to go and what it actually costs.
            </p>
          </blockquote>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="💑" label="For Couples" value="Per Couple" />
            <StatCard icon="💰" label="Budget From" value="₹12,000" />
            <StatCard icon="📍" label="Destinations" value="8 Picks" />
            <StatCard icon="🗓" label="Trip Length" value="3–5 Days" />
          </div>

          {/* ── WHY ₹50K WORKS ── */}
          <section id="why-50k" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">
              💰 Why ₹50,000 is Achievable for a Honeymoon in India
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              India&apos;s geography works in your favour. Within 3–6 hours by train or bus from any major city, there is a hill station, a coastal town, a heritage village or a backwater destination that genuinely feels romantic — and costs a fraction of what agents charge.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The ₹50,000 budget covers two people for 3–5 nights including:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Return transport from your home city (train or bus — sometimes budget flight)",
                "3–5 nights in a homestay, heritage guesthouse or boutique hotel",
                "All meals (including a couple of special dinners)",
                "Local transport at the destination (autos, scooters, shared cabs)",
                "2–3 activities or entry tickets per day",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                  <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The key insight:</strong> The most romantic moments on a honeymoon — a sunrise walk, a quiet dinner with a view, a boat ride at dusk — cost almost nothing. You are paying for memories, not for square footage or a hotel brand name.
              </p>
            </div>
          </section>

          {/* ── DESTINATIONS ── */}
          <section id="destinations" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">
              📍 Top 8 Honeymoon Destinations Under ₹50,000
            </h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each card shows the full per-couple cost for stay, transport and activities. Click to expand details.
            </p>
            <div className="space-y-3">
              {destinations.map((d) => (
                <DestCard key={d.num} {...d} />
              ))}
            </div>
          </section>

          {/* ── COST BREAKDOWN TABLE ── */}
          <section id="costs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">
              📊 Cost Breakdown: All 8 Destinations at a Glance
            </h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All figures are per couple, covering transport (from nearest metro), accommodation, food and activities for the stated duration.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm text-left">
                <thead className="bg-parchment border-b border-parchment-2">
                  <tr>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Destination</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Duration</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Transport</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Stay</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Food + Activities</th>
                    <th className="px-4 py-3 font-medium text-amber-800 text-xs uppercase tracking-wide">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    { dest: "Pushkar", dur: "3 nights", transport: "₹2,000–₹3,000", stay: "₹4,500–₹6,000", misc: "₹2,500–₹4,000", total: "₹12,000–₹22,000" },
                    { dest: "Kasol", dur: "4 nights", transport: "₹2,500–₹3,500", stay: "₹4,000–₹7,000", misc: "₹3,000–₹5,500", total: "₹14,000–₹24,000" },
                    { dest: "Pondicherry", dur: "3 nights", transport: "₹1,200–₹2,500", stay: "₹5,400–₹9,000", misc: "₹3,000–₹5,000", total: "₹15,000–₹25,000" },
                    { dest: "Hampi", dur: "3 nights", transport: "₹2,000–₹3,500", stay: "₹3,600–₹7,200", misc: "₹3,500–₹6,000", total: "₹15,000–₹25,000" },
                    { dest: "Mussoorie", dur: "3 nights", transport: "₹2,500–₹4,500", stay: "₹6,000–₹10,000", misc: "₹3,500–₹6,000", total: "₹18,000–₹30,000" },
                    { dest: "Coorg", dur: "3 nights", transport: "₹2,500–₹4,500", stay: "₹8,000–₹16,000", misc: "₹4,000–₹7,000", total: "₹20,000–₹35,000" },
                    { dest: "Shillong + Cherrapunji", dur: "4 nights", transport: "₹8,000–₹16,000", stay: "₹8,000–₹13,000", misc: "₹4,500–₹8,000", total: "₹22,000–₹38,000" },
                    { dest: "Alleppey + Cochin", dur: "4 nights", transport: "₹8,000–₹18,000", stay: "₹8,000–₹16,000", misc: "₹6,000–₹10,000", total: "₹28,000–₹42,000" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-parchment/40"}>
                      <td className="px-4 py-3 font-medium text-ink text-sm">{row.dest}</td>
                      <td className="px-4 py-3 text-muted text-xs font-light">{row.dur}</td>
                      <td className="px-4 py-3 text-muted text-xs font-light">{row.transport}</td>
                      <td className="px-4 py-3 text-muted text-xs font-light">{row.stay}</td>
                      <td className="px-4 py-3 text-muted text-xs font-light">{row.misc}</td>
                      <td className="px-4 py-3 font-semibold text-amber-800 text-xs">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              * Transport includes return fare from nearest major city/airport. Prices are 2026 estimates — off-season rates are 20–40% lower.
            </p>
          </section>

          {/* ── BOOKING TIPS ── */}
          <section id="booking-tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">
              🏨 How to Book Budget Romantic Stays
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📱",
                  title: "MakeMyTrip Wednesday Deals",
                  desc: "MakeMyTrip and Goibibo push their deepest hotel discounts on Wednesday–Thursday. Set price alerts and book then. Coupons like MMTFIRST or COUPLETRIP often knock 15–25% off.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏡",
                  title: "Book Homestays Directly",
                  desc: "Call or WhatsApp the homestay directly instead of booking via OTA. They save 15–20% commission and often pass part of that to you — better room, free breakfast or early check-in.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🛏",
                  title: "Private Room vs Hostel Dorm",
                  desc: "Good private rooms in budget guesthouses cost ₹800–₹1,800/night. Couple-friendly dorms are rare and impractical for a honeymoon. Spend the extra ₹400 for privacy — always worth it.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌿",
                  title: "Airbnb for Character Stays",
                  desc: "Airbnb has excellent homestays with character in Pondicherry, Hampi and Fort Kochi — heritage rooms, private courtyards, included breakfast — often cheaper than hotels of equivalent quality.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📅",
                  title: "Avoid Long Weekends",
                  desc: "Prices at hill stations and popular destinations spike 30–60% on long weekends (Dussehra, Diwali, Christmas, New Year). Travel mid-week or on non-holiday weekends for baseline prices.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🚂",
                  title: "Book Trains 60–90 Days Out",
                  desc: "Tatkal adds ₹400–₹1,200 to a train ticket. Book IRCTC at the 60-day window. If your train is full, check current reservation quota — it often opens up 3–5 days before departure.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── SAVE MORE ── */}
          <section id="save-more" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">
              ✂️ Things That Make Your Honeymoon Cheaper (Without Feeling Cheap)
            </h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🗓",
                  title: "Travel in off-season (March–June, September–October)",
                  desc: "Peak season (December–February) doubles or triples hotel prices at most popular destinations. March–May sees prices drop 30–50% while weather remains pleasant at hill stations. Pondicherry and Hampi are best in September–October.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "📅",
                  title: "Travel mid-week (Tuesday–Thursday)",
                  desc: "Guesthouses in Kasol, Coorg and Mussoorie fill up on weekends. Booking Tuesday arrival and Thursday departure can save ₹300–₹800/night at the same property.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🍳",
                  title: "Choose homestays that include breakfast (or allow cooking)",
                  desc: "Breakfast for two at a hotel restaurant costs ₹400–₹700. A homestay that includes breakfast saves ₹1,200–₹2,100 over 3 nights. Some estate homestays in Coorg include all meals.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🚌",
                  title: "Take overnight trains or buses",
                  desc: "An overnight Volvo bus from Delhi to Manali or Kasol costs ₹900–₹1,200 per person and saves a night&apos;s accommodation. You arrive in the morning and gain a full extra day.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "📸",
                  title: "Free activities are often the most romantic",
                  desc: "Sunrise walks, sunset viewpoints, beach strolls, temple ghats at dawn — these cost nothing and create stronger memories than paid activities. Build your itinerary around them.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🛵",
                  title: "Rent a scooter instead of booking cabs",
                  desc: "A scooter at ₹300–₹400/day gives you freedom to stop wherever you want, skip queues and explore off-beat spots. Cabs add up fast — ₹800–₹1,500/day for similar mobility.",
                  color: "bg-white border-parchment-2",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── EXPECTATIONS ── */}
          <section id="expectations" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">
              ⚖️ What ₹50,000 Gets You vs What It Won&apos;t
            </h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Being honest about this upfront saves disappointment. A ₹50,000 honeymoon in India is genuinely beautiful — but it is not a Maldives overwater villa. Here is what to expect:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-serif text-base font-normal text-green-800 mb-4 flex items-center gap-2">
                  <span>✅</span> What ₹50,000 Gets You
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "A private room with good views and character",
                    "3–5 nights at a destination that genuinely feels romantic",
                    "All meals including 2–3 special dinners",
                    "Return transport from your home city",
                    "Daily local transport (scooter or auto)",
                    "2–3 activities per day — treks, boat rides, entry tickets",
                    "Freedom to explore at your own pace",
                    "Memories that don&apos;t come with an EMI",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-800 font-light">
                      <span className="flex-shrink-0 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <h3 className="font-serif text-base font-normal text-rose-800 mb-4 flex items-center gap-2">
                  <span>⚠️</span> What It Won&apos;t Give You
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "5-star hotel amenities (spa, pool, butler service)",
                    "International destinations (even budget Sri Lanka costs more)",
                    "A private houseboat for the full night (day trip is doable)",
                    "Peak December–January Manali or Shimla stays (costs 3× more)",
                    "Guaranteed zero compromise — budget travel requires flexibility",
                    "Highly Instagrammable interiors in every room",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-rose-800 font-light">
                      <span className="flex-shrink-0 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The honest truth:</strong> The couples who have the best honeymoons on a budget are the ones who spend their energy on experiences, not on room upgrades. A ₹1,200/night room in Hampi with a Tungabhadra river view beats a sterile ₹4,000 room facing the parking lot every single time.
              </p>
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want Your Honeymoon Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[400px] mx-auto leading-relaxed">
              Tell us your budget, dates and home city — we&apos;ll send a customised honeymoon itinerary within 24 hours. Free, no obligation.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Honeymoon →
              </button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors"
              >
                Contact Us →
              </a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can you have a good honeymoon in India under ₹50,000?",
                  a: "Yes — genuinely. India has dozens of destinations where ₹50,000 covers 3–5 nights in a romantic homestay, all meals, local transport and activities. The key is choosing the right destination, travelling in off-season and booking direct instead of through expensive tour operators.",
                },
                {
                  q: "Which is the cheapest honeymoon destination in India?",
                  a: "Pushkar is the cheapest at ₹12,000–₹22,000 for 3 nights per couple all-inclusive. Kasol and Hampi are close seconds at ₹14,000–₹25,000. All three offer genuine romance — Pushkar has lakeside sunsets and desert atmosphere, Kasol has Himalayan cafe culture, and Hampi has ancient ruins with a riverside camp feel.",
                },
                {
                  q: "What is the best time for a budget honeymoon in India?",
                  a: "March–June and September–October offer the best value. You avoid the December–February peak when hotel prices double. Hill stations like Mussoorie and Kasol are ideal in May–June. Southern destinations like Pondicherry and Alleppey are best in October–November.",
                },
                {
                  q: "How do I book budget romantic stays in India?",
                  a: "Book directly with homestays to save 20–30% vs OTA prices. Use MakeMyTrip or Goibibo on Wednesday–Thursday for flash deals. Search Airbnb for heritage guesthouses in Pondicherry, Hampi and Fort Kochi. Always check if breakfast is included — it saves ₹1,500–₹2,500 over a 3-night trip.",
                },
                {
                  q: "Is an Alleppey houseboat affordable for a budget honeymoon?",
                  a: "A full-day Alleppey houseboat costs ₹6,000–₹10,000 per couple (shared, economy). An overnight private houseboat costs ₹8,000–₹14,000. Combined with 2 nights in Fort Kochi, the total 4-night Cochin–Alleppey trip comes to ₹28,000–₹42,000 per couple including flights from major cities.",
                },
              ].map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Honeymoon Under 50000 — Highlights"
            subtitle="The best of Honeymoon Under 50000 in photos."
            spots={[
              { name: "Honeymoon Under 50000 Landscape", query: "honeymoon under 50000 india landscape scenic beautiful travel", desc: "The stunning landscapes of Honeymoon Under 50000." },
              { name: "Honeymoon Under 50000 Temple", query: "honeymoon under 50000 temple architecture heritage india", desc: "Historic temples and architecture in Honeymoon Under 50000." },
              { name: "Honeymoon Under 50000 Street Scene", query: "honeymoon under 50000 street market local culture india", desc: "Local life and culture in Honeymoon Under 50000." },
              { name: "Honeymoon Under 50000 Nature", query: "honeymoon under 50000 nature hills forest river india", desc: "Natural beauty around Honeymoon Under 50000." },
              { name: "Honeymoon Under 50000 Sunset", query: "honeymoon under 50000 sunset golden hour india travel", desc: "Honeymoon Under 50000 at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section className="mt-10">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Travel Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa 3-Day Itinerary — All Plans", href: "/blog/goa-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="honeymoon-under-50000" />
          <RelatedGuides currentSlug="honeymoon-under-50000" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
