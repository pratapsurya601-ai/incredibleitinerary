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


const MUSSOORIE_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Mussoorie at a Glance" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "maps",        emoji: "\uD83D\uDDFA\uFE0F", label: "Route Maps" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
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

// ── Share Button ──────────────────────────────────────────────────────────────
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mussoorie 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Mussoorie in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
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
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
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
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── Route Map Card ────────────────────────────────────────────────────────────
function RouteCard({ plan, day, stops, distance, url, note, color }: {
  plan: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{plan}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">
          {distance}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">&rarr;</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps &rarr;
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function MusoorieClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹7k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", label: "Family", sub: "₹8k–18k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹18k–30k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUSSOORIE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mussoorie" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mussoorie uttarakhand mountain valley himalaya"
            alt="Mussoorie hill station with Himalayan mountain panorama"
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
              <span className="text-white/70">Mussoorie 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mussoorie in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the tourist traps that drain your wallet in the Queen of Hills.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Uttarakhand</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCC5"} 3 Days</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}6,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Landour is the real gem — Ruskin Bond still lives here and you can walk the same paths he&apos;s walked for 60 years. The caf&eacute; culture here beats Mussoorie&apos;s Mall Road by miles. Most tourists never leave Mall Road, fight for parking, and leave thinking Mussoorie is just another crowded hill station. This guide shows you the side that changes your mind.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── MUSSOORIE AT A GLANCE ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Mussoorie at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              A colonial hill station at 2,005m in the Garhwal Himalayas. There are two Mussoories — the touristy Mall Road side and the quiet, literary Landour cantonment above it. The smart traveller spends more time in Landour.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Mussoorie Town", emoji: "\uD83C\uDFD4\uFE0F", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Best for","First-timers, families, quick weekend trips"],["Key spots","Mall Road, Gun Hill, Kempty Falls, Company Garden, Camel’s Back Road"],["Budget","₹800–₹3,500/night"],["Vibe","Bustling, touristy, shops and crowds"]],
                  note: "Mall Road gets impossibly packed on weekends May–June. Visit midweek or go early morning for the real experience." },
                { title: "Landour", emoji: "\uD83D\uDCDA", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Best for","Couples, writers, peace seekers, walkers"],["Key spots","Char Dukan, Lal Tibba, Sister’s Bazaar, Landour Language School, Ruskin Bond’s house"],["Budget","₹1,200–₹6,000/night"],["Vibe","Quiet, literary, colonial-era charm, café culture"]],
                  note: "Landour is technically a separate cantonment above Mussoorie. The 2km uphill walk from Picture Palace is the gateway — and it filters out 90% of tourists." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in Landour or upper Mussoorie (near Picture Palace). You get the quiet charm plus Mall Road is a 10-min walk downhill. Staying on Mall Road means traffic noise and zero character.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDCC5"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹6,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Mar – Jun" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Dehradun" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            {/* Tab switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Mall Road or Library Bazaar Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel or hostel &middot; {"₹"}600&ndash;{"₹"}1,500/night &middot; Local bus + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Mall Road, Gun Hill Sunset"
                  items={[
                    "Dehradun to Mussoorie by shared taxi or bus (₹100–₹250). Drop at Library Bazaar — better location than Picture Palace for budget stays.",
                    "Lunch at a Mall Road dhaba — thali ₹120–₹180. Skip the fancy restaurants on Day 1.",
                    "Walk Mall Road end to end (2km) — free, gets the tourist itch out of your system.",
                    "4:30pm: Gun Hill ropeway (₹175 return) or walk up the old bridle path (free, 20 min). Best sunset viewpoint in Mussoorie town.",
                    "Evening: Camel’s Back Road sunset walk — 3km flat path, no crowds after 6pm, mountain views the entire way. Free.",
                    "Dinner at Lovely Omelette Centre near Picture Palace — legendary since the 1960s, omelettes ₹50–₹80.",
                  ]}
                  cost={"₹800–₹1,400 excluding accommodation"} />
                <DayCard day="Day 2" title="Kempty Falls Early + Landour Walk"
                  items={[
                    "7am: Shared auto to Kempty Falls (15km, ₹40–₹60/person). Kempty Falls is honestly a tourist trap in peak season — 500 people splashing in a waterfall. Go at 7am or skip it for Cloud’s End trek instead.",
                    "Back by 10am. Walk uphill from Picture Palace to Landour — the 2km climb is steep but this is the best part of the trip.",
                    "11am: Char Dukan (Four Shops) — Landour’s legendary 4-shop strip. Maggi and chai with a valley view, ₹80–₹120.",
                    "Walk Sister’s Bazaar to Lal Tibba (highest point, 2,275m). The walk from Library Point to Lal Tibba on a clear morning gives you a 360-degree Himalayan panorama that rivals anything in Shimla.",
                    "2pm: Walk back down through Landour cantonment — colonial bungalows, pine forests, near-zero tourists.",
                    "Evening: Company Garden (₹75 entry) if you want to tick it off, or skip it and rest — it’s mostly a kids’ park.",
                  ]}
                  cost={"₹600–₹1,100 excluding accommodation"} />
                <DayCard day="Day 3" title="Cloud’s End Trek + Departure"
                  items={[
                    "7:30am: Walk or share auto to Cloud’s End (8km from Library Bazaar). The last point of Mussoorie — dense oak and deodar forest, misty trails, genuinely wild.",
                    "Trek the Benog Wildlife Sanctuary loop (2–3 hrs, easy-moderate). Birding paradise — carry binoculars if you have them.",
                    "Back by noon. Last walk through Mall Road for shopping — Tibetan Market for shawls (₹200–₹800), walking sticks (₹100–₹300).",
                    "2pm: Shared taxi back to Dehradun for onward train or flight.",
                  ]}
                  cost={"₹500–₹900 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}5,500&ndash;{"₹"}7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: FAMILY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"}</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Family Plan — Upper Mall Road or Landour Base</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Mid-range hotel with breakfast &middot; {"₹"}2,000&ndash;{"₹"}4,500/night &middot; Hired taxi for day trips</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Settle In, Gun Hill, Camel’s Back"
                  items={[
                    "Dehradun to Mussoorie by pre-booked taxi (₹1,200–₹1,800). Avoid shared taxis with kids — the road has 100+ curves.",
                    "Check in, rest until lunch. Hill sickness is real for under-5s — let them acclimatize.",
                    "12:30pm: Lunch at Kalsang Friends Corner, Mall Road — great momos and thukpa, kids love it. ₹600–₹900 for family.",
                    "2pm: Gun Hill ropeway (₹175/person return, kids ₹100). Coin-operated binoculars at the top — kids will spend 30 min here.",
                    "4:30pm: Camel’s Back Road walk — flat, paved, safe for kids. The rock that looks like a camel is 1km in. Ice cream at the halfway point.",
                    "Evening: Mall Road stroll — candy floss, toy shops, horse rides (₹200–₹400).",
                  ]}
                  cost={"₹2,500–₹4,000 for family (excl. accommodation)"} />
                <DayCard day="Day 2" title="Kempty Falls + Company Garden + Landour Taster"
                  items={[
                    "8:30am: Taxi to Kempty Falls (₹600–₹800 return with 1hr wait). Get there before 9:30am — by 11am it’s a stampede.",
                    "Kempty Falls entry ₹50/person. Kids love the splash pool at the bottom. Carry change clothes.",
                    "11am: Company Garden (₹75/person) — flower beds, artificial lake with paddle boats (₹150), mini amusement zone. Budget 1.5 hrs for kids.",
                    "1pm: Drive up to Landour for lunch at Char Dukan — the Maggi here is a Mussoorie rite of passage. ₹400–₹600 for family.",
                    "Walk Sister’s Bazaar (flat, 1km) — old bookshops, jam shops, bakeries. Buy Landour’s famous peanut butter at the Landour Bakehouse.",
                    "3:30pm: Drive to Lal Tibba viewpoint — clearest Himalayan panorama from a paved viewpoint. Free entry, binoculars available.",
                    "Evening: Rest at hotel or revisit Mall Road for dinner.",
                  ]}
                  cost={"₹3,000–₹5,000 for family (excl. accommodation)"} />
                <DayCard day="Day 3" title="Cloud’s End + George Everest + Departure"
                  items={[
                    "8am: Taxi to Cloud’s End (₹500–₹700). Walk the forest trail (1.5km, easy, kids-friendly). The mist through the deodar trees is magical.",
                    "10am: Drive to George Everest viewpoint (5km from Cloud’s End) — ruins of the house of the man who surveyed Mount Everest. Panoramic Doon Valley view. Free.",
                    "12pm: Back to Mussoorie. Last lunch at Cafe by the Way or Urban Turban — ₹800–₹1,200 for family.",
                    "Last-minute shopping: Tibetan Market for woollen caps, shawls. Mall Road for Mussoorie’s famous sticks and local honey.",
                    "3pm: Taxi to Dehradun for onward travel.",
                  ]}
                  cost={"₹2,800–₹4,500 for family (excl. accommodation)"} />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (family of 4) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}12,000&ndash;{"₹"}18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — Landour Boutique Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Heritage hotel or boutique property &middot; {"₹"}5,000&ndash;{"₹"}8,000/night &middot; Private taxi throughout</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive into Landour’s Literary World"
                  items={[
                    "Pre-booked premium taxi from Dehradun (₹2,000–₹2,500). Request drop directly at Landour — skip Mall Road entirely on Day 1.",
                    "Check into a heritage property — Rokeby Manor, Paddlers Lodge, or The Residency. These are the stays that make Mussoorie special.",
                    "Late breakfast at Landour Bakehouse — sourdough, cinnamon rolls, proper coffee. ₹500–₹800 for two.",
                    "Walk the Landour Chukkar (full loop, 5.5km, 2hrs). Pass Ruskin Bond’s house (ivy-covered building near Ivy Cottage — don’t disturb, but wave if the window’s open).",
                    "Lunch at Emily’s or Doma’s Inn — ₹1,200–₹1,800 for two. Emily’s does the best continental food in the hills.",
                    "5pm: Lal Tibba at golden hour. On a clear day, you can see Bandarpunch, Swargarohini, and Kedarnath peaks. Bring binoculars.",
                    "Dinner at Rokeby Manor — candlelit colonial dining, ₹2,500–₹3,500 for two. Book ahead.",
                  ]}
                  cost={"₹5,000–₹7,500 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Cloud’s End + George Everest + Hidden Mussoorie"
                  items={[
                    "7:30am: Private taxi to Cloud’s End. Trek into Benog Wildlife Sanctuary (2–3 hrs). Morning mist in the oak forest is why the British called this place ‘Cloud’s End.’",
                    "10:30am: Drive to George Everest viewpoint — the ruins sit on a cliff edge with the entire Doon Valley below. One of the most photographed spots in Uttarakhand.",
                    "12:30pm: Lunch at Cafe Ivy on Mall Road — terrace seating with valley views, ₹1,500–₹2,000 for two.",
                    "2:30pm: Camel’s Back Road full walk (3km). The afternoon light on the mountains is best between 3–4pm.",
                    "4:30pm: Gun Hill ropeway for sunset. The view from up top with the ranges turning pink is the definitive Mussoorie moment.",
                    "Evening: Dinner at The Tavern (oldest bar-restaurant in Mussoorie, since 1958) or The Clock Tower Café.",
                  ]}
                  cost={"₹4,500–₹6,500 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Kempty Falls (or Skip) + Landour Farewell"
                  items={[
                    "Option A (weekday/off-season): Early morning Kempty Falls (7am taxi, ₹1,000 return). Beautiful when empty. Back by 9:30am.",
                    "Option B (weekend/peak): Skip Kempty entirely. Instead, walk from Landour to Jabarkhet Nature Reserve (8km) — leopard territory, pristine trails, zero crowds.",
                    "11am: Final Landour loop — Char Dukan for goodbye Maggi, Sister’s Bazaar for jam and peanut butter souvenirs, Landour Bakehouse for road pastries.",
                    "12:30pm: Brunch at The Cottage (if staying at Rokeby Manor) or AnnVilla.",
                    "2pm: Premium taxi to Dehradun. Stop at Robber’s Cave (Guchhupani) en route if time permits — river flowing through a cave, 30 min visit.",
                  ]}
                  cost={"₹3,500–₹5,500 for two (excl. accommodation)"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}22,000&ndash;{"₹"}30,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">{"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"} Family</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"✨"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,800–₹4,500", "₹6,000–₹13,500", "₹15,000–₹24,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹1,200–₹1,800", "₹3,500–₹5,500", "₹5,000–₹8,000"],
                    ["\uD83D\uDE95 Transport", "₹500–₹800", "₹3,000–₹4,500", "₹4,500–₹6,500"],
                    ["\uD83C\uDFAF Activities", "₹400–₹700", "₹1,500–₹2,500", "₹1,500–₹2,500"],
                    ["\uD83D\uDECD Shopping", "₹200–₹500", "₹500–₹1,500", "₹1,000–₹2,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹5,500–₹7,000 (solo)","₹12,000–₹18,000 (family of 4)","₹22,000–₹30,000 (couple)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Mussoorie is significantly cheaper than Shimla or Manali, especially for food and accommodation.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mussoorie"
            hotels={[
              { name: "Hotel Broadway", type: "Budget &middot; Mall Road", price: "From ₹1,200/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/broadway-mussoorie.html?aid=2820480" },
              { name: "Rokeby Manor", type: "Heritage Boutique &middot; Landour", price: "From ₹5,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/hotel/in/rokeby-manor.html?aid=2820480" },
              { name: "JW Marriott Mussoorie", type: "Luxury Resort &middot; Library Road", price: "From ₹10,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/jw-marriott-mussoorie.html?aid=2820480" },
            ]}
            activities={[
              { name: "Landour Heritage Walking Tour", duration: "3 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mussoorie&partner_id=PSZA5UI" },
              { name: "Cloud’s End & Benog Trek", duration: "Half day", price: "From ₹600/person", badge: "Nature", url: "https://www.getyourguide.com/s/?q=mussoorie&partner_id=PSZA5UI" },
              { name: "Mussoorie Sightseeing Full Day", duration: "8 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=mussoorie&partner_id=PSZA5UI" },
              { name: "Dehradun + Mussoorie Combo Tour", duration: "Full day", price: "From ₹2,000/person", url: "https://www.getyourguide.com/s/?q=dehradun&partner_id=PSZA5UI" },
            ]}
            pdfProductId="mussoorie-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Mussoorie — Must-See Places"
            subtitle="Click each thumbnail to explore Mussoorie and Landour&apos;s most iconic viewpoints, trails and heritage sites."
            spots={[
              { name: "Lal Tibba",             query: "lal tibba mussoorie himalayan panorama mountain viewpoint binoculars",         desc: "Mussoorie’s highest point at 2,275m. On a clear day, you see Bandarpunch, Kedarnath, and a 360-degree wall of Himalayan peaks. Best at sunrise." },
              { name: "Landour",               query: "landour mussoorie colonial houses pine forest mountain village pathway",        desc: "The quiet cantonment above Mussoorie where Ruskin Bond has lived for 60 years. Char Dukan, Sister’s Bazaar, and the best cafés in Uttarakhand." },
              { name: "Cloud’s End",      query: "clouds end mussoorie dense forest misty oak deodar trees trail",               desc: "The last inhabited point of Mussoorie — where the town ends and the wild Himalayan forest begins. Gateway to Benog Wildlife Sanctuary." },
              { name: "Gun Hill",              query: "gun hill mussoorie ropeway cable car mountain view sunset valley",              desc: "Second-highest point in Mussoorie, accessible by ropeway or a 20-min walk. The sunset here turns the mountain ranges pink and gold." },
              { name: "Camel’s Back Road", query: "camels back road mussoorie mountain walking path pine trees valley panorama",  desc: "A 3km paved walk with mountain views the entire way. Named after a rocky outcrop shaped like a camel. Best in late afternoon light." },
            ]}
          />

          {/* ── LANDOUR IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="landour mussoorie colonial stone pathway pine forest mountain village"
              alt="Landour village pathway through pine forests above Mussoorie"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Landour &mdash; a 2km walk uphill from Mussoorie that filters out 90% of the crowds and transports you into a different era entirely.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every route is geographically logical — no doubling back, no wasted fuel. Mussoorie is small enough to walk most of it, but taxis help for Kempty Falls and Cloud&apos;s End.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 Family"},{id:"C" as const,label:"✨ Premium"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A &middot; Day 2" day="Kempty Falls + Landour Loop"
                  stops={["Library Bazaar 7am","Kempty Falls 7:30am","Picture Palace 10am","Char Dukan 11am","Lal Tibba 12:30pm","Company Garden 3pm"]}
                  distance="25km &middot; ~1hr driving + walking" note="Kempty Falls is 15km downhill on the Dehradun road. Get there before 8am or it’s not worth it. Landour is all walking — flat to mild incline."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Library+Bazaar+Mussoorie/Kempty+Falls/Picture+Palace+Mussoorie/Char+Dukan+Landour/Lal+Tibba+Mussoorie/Company+Garden+Mussoorie" />
                <RouteCard plan="Plan A &middot; Day 3" day="Cloud&apos;s End Trek + Departure"
                  stops={["Library Bazaar 7:30am","Cloud’s End 8:30am","Benog Trek 9am–11:30am","Mall Road 12:30pm","Dehradun 3pm"]}
                  distance="45km total &middot; ~1.5hrs driving" note="Cloud’s End is the western edge of Mussoorie. The Benog loop is easy-moderate and well marked. Return via Mall Road for last-minute shopping."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Library+Bazaar+Mussoorie/Clouds+End+Mussoorie/Mall+Road+Mussoorie/Dehradun+Railway+Station" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B &middot; Day 2" day="Kempty Falls + Landour Family Loop"
                  stops={["Hotel 8:30am","Kempty Falls 9am","Company Garden 11am","Char Dukan Lunch","Sister’s Bazaar","Lal Tibba 3:30pm"]}
                  distance="28km &middot; ~1hr 15min driving + walking" note="The taxi waits at Kempty Falls (negotiate ₹600–₹800 round trip with Company Garden stop). Landour loop is flat and kids-friendly from Char Dukan onward."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Mall+Road+Mussoorie/Kempty+Falls/Company+Garden+Mussoorie/Char+Dukan+Landour/Lal+Tibba+Mussoorie" />
                <RouteCard plan="Plan B &middot; Day 3" day="Cloud&apos;s End + George Everest"
                  stops={["Hotel 8am","Cloud’s End 8:45am","George Everest 10:30am","Mall Road Lunch","Dehradun 3pm"]}
                  distance="50km total &middot; ~2hrs driving" note="Cloud’s End and George Everest are on opposite sides of Mussoorie but your taxi loops through town between them. Both are free entry."
                  color="border-sky-200 bg-sky-50"
                  url="https://www.google.com/maps/dir/Mall+Road+Mussoorie/Clouds+End+Mussoorie/George+Everest+Peak+Mussoorie/Mall+Road+Mussoorie/Dehradun" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C &middot; Day 2" day="Cloud&apos;s End + George Everest + Camel&apos;s Back"
                  stops={["Landour 7:30am","Cloud’s End 8:15am","Benog Trek 8:30–11am","George Everest 11:30am","Cafe Ivy Lunch","Camel’s Back 3pm","Gun Hill Sunset"]}
                  distance="30km &middot; ~1hr driving + 6km walking" note="This day covers the two best viewpoints (George Everest + Gun Hill) and the best walk (Camel’s Back). Gun Hill ropeway closes at 7pm — be there by 5pm for sunset."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Landour+Mussoorie/Clouds+End+Mussoorie/George+Everest+Peak+Mussoorie/Camels+Back+Road+Mussoorie/Gun+Hill+Mussoorie" />
                <RouteCard plan="Plan C &middot; Day 3" day="Kempty (Optional) + Landour Farewell"
                  stops={["Landour 7am","Kempty Falls 7:30am (optional)","Landour Bakehouse 10am","Char Dukan 11am","Sister’s Bazaar","Dehradun 2pm"]}
                  distance="48km &middot; ~1.5hrs driving" note="Skip Kempty if it’s a weekend — do Jabarkhet Nature Reserve (8km from Landour) instead. Better wildlife, zero crowds, leopard territory."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Landour+Mussoorie/Kempty+Falls/Char+Dukan+Landour/Dehradun+Railway+Station" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55000!2d78.06!3d30.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Mussoorie Travel Map" />
            </div>
          </section>

          {/* ── KEMPTY FALLS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kempty falls mussoorie waterfall rocks green mountain uttarakhand"
              alt="Kempty Falls waterfall near Mussoorie"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kempty Falls at 7am: genuinely beautiful. At noon: 500 people and zero charm. Timing is everything.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Staying on Mall Road itself", desc: "Noisy traffic, inflated prices, zero character. Stay 500m above in Landour or near Picture Palace — 10 min walk to Mall Road but a completely different experience.", icon: "\uD83C\uDFE8" },
                { title: "Visiting Kempty Falls on a weekend", desc: "Peak season weekends = 500+ visitors, muddy paths, 30-min queue for the waterfall. Weekday mornings before 8am or skip entirely.", icon: "\uD83C\uDF0A" },
                { title: "Skipping Landour entirely", desc: "90% of tourists never walk up to Landour. It’s the best part of Mussoorie — Char Dukan, the colonial walks, Ruskin Bond’s neighbourhood. Budget at least half a day here.", icon: "\uD83D\uDCDA" },
                { title: "Hiring a taxi for Mall Road sightseeing", desc: "Mall Road is 2km and flat. Walk it. Taxis can’t even drive most of it. Save taxi money for Kempty Falls and Cloud’s End.", icon: "\uD83D\uDE95" },
                { title: "Eating only at Mall Road restaurants", desc: "Mall Road restaurants charge 50–80% more than places in Library Bazaar or Landour. Char Dukan Maggi: ₹60. Mall Road Maggi: ₹120. Same noodles.", icon: "\uD83C\uDF7D" },
                { title: "Going in July-August monsoon", desc: "Heavy rain, landslides, fog so thick you can’t see 10 meters. Many roads close. September is fine once rains ease.", icon: "\uD83C\uDF27\uFE0F" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "The Lal Tibba Sunrise", desc: "The walk from Library Point to Lal Tibba on a clear morning gives you a 360-degree Himalayan panorama that rivals anything in Shimla. Go before 7am for the clearest views.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCDA", title: "Find Ruskin Bond", desc: "Bond often visits the Cambridge Book Depot on Mall Road on Saturdays. He’s famously kind to visitors. Don’t be pushy — buy a book, get it signed, and you’ve made a memory.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u2615", title: "Landour Café Circuit", desc: "Landour Bakehouse (breakfast) → Char Dukan (Maggi lunch) → Emily’s (dinner). This is the definitive Landour food trail and it’s all within 1km of walking.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDD7E", title: "Cloud’s End Over Kempty", desc: "If you only have time for one, pick Cloud’s End. Kempty Falls is a 15-minute stop. Cloud’s End is a 3-hour forest trek that stays with you.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE8C", title: "Skip the Taxi to Dehradun", desc: "Shared Vikram autos from Library Bazaar to Dehradun cost ₹60–₹100 and run every 15 min. Private taxi costs ₹1,200+. The shared ride is half the fun.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Mar–Apr \u2705 clear views, wildflowers | May–Jun \u2705 peak season, book early | Jul–Aug \u26A0\uFE0F monsoon, avoid | Sep–Oct \u2705 post-monsoon green | Nov–Feb \u2744\uFE0F cold, possible snow", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Mussoorie itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mussoorie Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Mussoorie?", a: "3 days is ideal — enough for Mall Road, Gun Hill, Kempty Falls, Landour, Lal Tibba, and Cloud’s End. 2 days feels rushed and you’ll miss Landour entirely. 4–5 days lets you add Dhanaulti, Kanatal, or the George Everest trek." },
                { q: "What is the best time to visit Mussoorie?", a: "March to June for pleasant weather (15–30°C) and clear Himalayan views. September to November for post-monsoon greenery and fewer crowds. Avoid July–August (heavy rain, landslides). December to February can bring snowfall but many hotels shut down." },
                { q: "How much does a 3-day Mussoorie trip cost?", a: "Budget solo: under ₹7,000 including accommodation. Family of 4: ₹8,000–₹18,000 total. Premium couple: ₹18,000–₹30,000 for two. All prices include stay, food, transport and activities." },
                { q: "How do I reach Mussoorie?", a: "Nearest airport: Jolly Grant, Dehradun (60km, 1.5hrs by taxi). Nearest railway station: Dehradun (34km, 1hr). Most people take a Shatabdi Express from Delhi to Dehradun (5.5hrs) then a shared taxi or bus to Mussoorie. Delhi to Mussoorie by road is 290km, about 6–7 hours." },
                { q: "Is Kempty Falls worth visiting?", a: "Depends on timing. Peak season weekends: overcrowded with 500+ people, honestly not worth it. Weekday mornings before 8am: genuinely beautiful. If it’s peak season, skip Kempty and do the Cloud’s End trek instead — far more rewarding and almost no crowds." },
                { q: "Is Mussoorie better than Shimla?", a: "Mussoorie wins for Landour’s literary charm, easier access from Delhi via Dehradun, and a quieter feel on the Landour side. Shimla wins for grander colonial architecture and more hotel variety. For a literary, peaceful hill station experience, Mussoorie edges ahead." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Uttarakhand Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nainital — 3 Day Hill Station Guide", href: "/blog/nainital-3-days", soon: false },
                { label: "Rishikesh & Haridwar — 3 Day Guide", href: "/blog/rishikesh-haridwar-3-days", soon: false },
                { label: "Manali — 5 Day Adventure Guide", href: "/blog/manali-5-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="mussoorie-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
