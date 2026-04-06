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


const WAYANAD_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "highlights",  emoji: "\uD83C\uDF3F", label: "Why Wayanad" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Wayanad 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Wayanad in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"→"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"→"}
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function WayanadClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹6k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF3F", label: "Nature", sub: "₹8k–18k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83C\uDF33", label: "Premium Treehouse", sub: "₹18k–35k", color: "border-amber-400 bg-amber-50 text-amber-900" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={WAYANAD_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Wayanad" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="wayanad kerala green hills tea plantation misty"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="Wayanad green hills and tea plantations in misty morning light"
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
              <span className="text-white/70">Wayanad 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hills & Nature
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Wayanad in 3 Days: Treehouses, Treks & Hidden Caves
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with trek timings, real costs, Google Maps routes — and the 3,000-year-old caves that most visitors walk past.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Kerala, India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The heart-shaped lake on Chembra Peak is real — but the trek to see it is steep and slippery in monsoon. Go Oct-Dec when the trail is dry and the views are clearest.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY WAYANAD ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDF3F"} Why Wayanad</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Wayanad is Kerala without the beach-town crowds. Ancient caves, misty treehouses, wildlife you actually see, and trails that feel earned.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Treks & Nature", emoji: "\u26F0\uFE0F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Must do","Chembra Peak (heart-shaped lake)"],["Waterfalls","Soochipara, Meenmutty"],["Wildlife","Wayanad Wildlife Sanctuary"],["Best time","Oct–May"]],
                  note: "Chembra Peak trek closes during monsoon (Jun–Sep). Soochipara Falls is best Oct–Dec when water flow is strong but trails are dry." },
                { title: "History & Culture", emoji: "\uD83C\uDFDB\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Must see","Edakkal Caves (3,000-yr petroglyphs)"],["Experience","Spice plantation tours"],["Lake","Pookode Lake — boating + aquarium"],["Unique stay","Treehouse resorts"]],
                  note: "Edakkal Caves have 3,000-year-old petroglyphs that most visitors walk past without understanding. Take a local guide (₹200) — the history is mind-blowing." },
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
                <strong className="font-medium text-ink">Smart move:</strong> Base yourself in Kalpetta (central Wayanad). Every major attraction is within 25km. Don&apos;t book multiple hotel switches — one base covers everything.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹5,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct – May" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Calicut (CCJ)" />
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

            {/* ── PLAN A — Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Kalpetta Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Homestay / Budget Lodge {"·"} {"₹"}600{"–"}{"₹"}1,200/night {"·"} Auto/Bus transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Edakkal Caves + Banasura Sagar Dam"
                  items={["Arrive Kalpetta by 10am — KSRTC bus from Kozhikode (₹100–150, 3hrs) or shared jeep from Sultan Bathery","Check into homestay, quick lunch at a local thattukada (meals ₹100–150)","1pm: Auto to Edakkal Caves (12km, ₹300 return with wait). Entry ₹30. Steep 20-min climb — carry water.","Hire a local guide at the cave entrance (₹200) — the 3,000-year-old petroglyphs make zero sense without one","4pm: Banasura Sagar Dam (18km from caves). India’s largest earth dam. Free entry, 1 hour to explore.","Evening: Walk Kalpetta town. Dinner at a local restaurant — Kerala meals ₹120–180."]}
                  cost={"₹800–1,200 excluding accommodation"} />
                <DayCard day="Day 2" title="Chembra Peak Trek + Soochipara Falls"
                  items={["6:30am: Auto to Chembra Peak gate (Meppadi, 16km from Kalpetta). Entry ₹150 + guide ₹200 (mandatory).","Trek to heart-shaped lake: 3km uphill, 1.5–2hrs one way. Carry 1.5L water, snacks.","Back at gate by 11:30am. Quick tea and banana fritters at Meppadi shops.","12:30pm: Soochipara Falls (8km from Meppadi). Entry ₹30. 15-min walk down to the falls — you can swim at the base.","3pm: Return to Kalpetta. Rest and recover from the trek.","Evening: Try Malabar biryani at a local joint — ₹150–200 per plate."]}
                  cost={"₹1,000–1,500 excluding accommodation"} />
                <DayCard day="Day 3" title="Pookode Lake + Spice Plantation + Departure"
                  items={["8am: Pookode Lake (15km from Kalpetta). Entry ₹30, pedal boat ₹70/person. Freshwater aquarium inside the complex.","10am: Any local spice plantation near Meppadi or Kalpetta — ₹200–300/person. See pepper, cardamom, coffee growing.","Buy spices directly from the plantation — 40–60% cheaper than tourist shops. Pepper ₹300/250g, cardamom ₹600/100g.","12:30pm: Final Kerala meals lunch, pack up, head to Kozhikode for train/flight","Optional stop: Lakkidi Viewpoint on the Thamarassery Ghat road — free, dramatic valley views"]}
                  cost={"₹700–1,000 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}5,000{"–"}{"₹"}6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — Nature Explorer ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF3F"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Nature Explorer — Kalpetta / Vythiri Base</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Mid-range resort or plantation stay {"·"} {"₹"}2,000{"–"}{"₹"}4,500/night {"·"} Rented car or bike</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Edakkal Caves + Banasura Dam + Sunset Drive"
                  items={["Drive from Kozhikode — 2.5hrs via Thamarassery Ghat. Stop at the 9 hairpin bends for photos.","Check in at Vythiri or Kalpetta resort. Lunch at resort or local restaurant (₹300–500 per person).","1:30pm: Edakkal Caves — hire the ₹200 guide at the entrance. The petroglyphs include tools, animals, and human figures from the Neolithic era.","4pm: Banasura Sagar Dam — speed boat ride ₹300/person (15 min), or just walk the dam crest for free","6pm: Drive to Banasura Hills viewpoint for sunset — misty valley views, almost no tourists","Dinner at a spice-themed restaurant in Kalpetta — ₹600–900 for two"]}
                  cost={"₹2,500–4,000 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Chembra Peak + Soochipara Falls + Meenmutty"
                  items={["6am start — non-negotiable. Drive to Chembra Peak gate (Meppadi). Entry ₹300 for two + mandatory guide ₹400.","Trek to heart-shaped lake: allow 3.5hrs round trip with photos. The lake is at the halfway point — full summit is optional and adds 3hrs.","11am: Drive to Soochipara Falls (8km). Three-tiered waterfall — the plunge pool at the base is swimmable Oct–Feb.","Lunch: Meppadi has small restaurants serving incredible Kerala fish curry — ₹400–600 for two","2:30pm: Meenmutty Falls — Kerala’s second-highest waterfall (300m). The 2km trek through forest is moderate. Worth the effort.","Evening: Back at resort. Most Wayanad resorts have campfire/bonfire evenings — ask at check-in."]}
                  cost={"₹3,000–4,500 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Wildlife Safari + Pookode Lake + Spice Plantation"
                  items={["6:30am: Wayanad Wildlife Sanctuary (Tholpetty or Muthanga range). Jeep safari ₹500–750/person. Best chance to spot elephants, bison, and deer.","Book Tholpetty range if staying in Kalpetta (35km), Muthanga if near Sultan Bathery (15km). Pre-book online.","10:30am: Pookode Lake — pedal boat on the freshwater lake, walk the nature trail (30 min loop). Entry ₹60.","12pm: Spice plantation visit near Meppadi. Full tour + traditional lunch included — ₹400–600/person.","Buy vanilla, pepper, cardamom at plantation prices. Vanilla: ₹200/5 pods — same costs ₹500 in Kochi tourist shops.","3pm: Depart via Thamarassery Ghat. Stop at Lakkidi Viewpoint — the chain tree landmark and valley panorama."]}
                  cost={"₹3,500–5,000 for two (excl. accommodation)"} />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}16,000{"–"}{"₹"}28,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — Premium Treehouse ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF33"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-900">Premium Treehouse — Vythiri / Private Estate</p>
                    <p className="text-xs text-amber-700 font-light">Stay: Treehouse resort 40{"–"}80ft above ground {"·"} {"₹"}5,000{"–"}{"₹"}12,000/night {"·"} Private car</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive in the Canopy + Edakkal Caves"
                  items={["Drive from Kozhikode or Bangalore. Private cab from Calicut airport: ₹2,500–3,500.","Check into treehouse by noon. Vythiri Resort, Rainforest Treehouse, or Green Gates — book 2–3 weeks ahead for Oct–Mar weekends.","Wayanad’s treehouse stays are the most unique accommodation in Kerala — waking up in a literal tree with misty valley views is worth the premium.","3pm: Edakkal Caves with pre-arranged guide (₹500 for private English-speaking guide through resort).","Evening: Resort dinner — most premium properties serve Kerala-style multi-course meals (₹1,500–2,500 for two).","Night: Stargazing from the treehouse deck — Wayanad has minimal light pollution above 800m elevation."]}
                  cost={"₹6,000–9,000 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Private Chembra Trek + Plantation Lunch"
                  items={["6am: Private car to Chembra Peak. Entry + guide: ₹700 for two. Your resort can arrange a packed breakfast.","Trek to heart-shaped lake and beyond to Chembra summit if you are fit. The view from the top spans Nilgiri Hills to Kozhikode coast on clear days.","11:30am: Private spice plantation visit with traditional Sadya lunch (banana-leaf feast). ₹1,200–1,800 per person.","The plantation owner will walk you through pepper vines, vanilla orchids, coffee bushes, and cardamom groves personally.","4pm: Return to treehouse. Ayurvedic massage at the resort spa — ₹2,000–3,500 for a 90-min session.","Evening: Campfire dinner arranged by the resort — some properties offer jungle BBQ evenings."]}
                  cost={"₹8,000–13,000 for two (excl. accommodation)"} />
                <DayCard day="Day 3" title="Wildlife Safari + Pookode + Departure"
                  items={["5:30am: Tholpetty Wildlife Sanctuary — first safari slot (6–8am) has best animal sightings. ₹750/person for jeep safari.","Elephants, gaur (Indian bison), sambar deer, Malabar giant squirrel are commonly spotted. Occasional leopard and tiger tracks.","9:30am: Return for resort breakfast. Check out by 11am.","11:30am: Pookode Lake — shikara boat ride (₹150/person), nature trail, freshwater fish aquarium.","1pm: Final lunch at a Wayanad coffee estate — filter coffee + Kerala meals. ₹800–1,200 for two.","Depart via Lakkidi Viewpoint. Stop at chain tree, photograph the 9 hairpin bends from above."]}
                  cost={"₹5,000–8,000 for two (excl. accommodation)"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-800 uppercase tracking-wide">Total 3-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}35,000{"–"}{"₹"}65,000 including treehouse accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">{"\uD83C\uDF3F"} Nature</th>
                    <th className="p-3.5 text-xs font-medium text-amber-800 text-center">{"\uD83C\uDF33"} Treehouse</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,800–3,600", "₹6,000–13,500", "₹15,000–36,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹1,200–1,800", "₹3,000–5,000", "₹5,000–8,000"],
                    ["\uD83D\uDE97 Transport", "₹600–1,000", "₹2,000–3,500", "₹4,000–6,000"],
                    ["\uD83C\uDFAF Activities & Entry", "₹800–1,200", "₹2,500–4,000", "₹4,000–7,000"],
                    ["\uD83C\uDF3F Spices & Shopping", "₹300–600", "₹500–1,500", "₹1,000–2,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹4,700–8,200","₹7,000–13,750","₹14,500–29,750"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Wayanad is one of the most affordable hill stations in India — even premium treehouses cost less than a standard Munnar resort.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Wayanad"
            hotels={[
              { name: "Zostel Wayanad", type: "Budget Hostel · Kalpetta", price: "From ₹600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-wayanad.html?aid=2820480" },
              { name: "Vythiri Resort", type: "Treehouse Resort · Vythiri", price: "From ₹5,500/night", rating: "5", badge: "Treehouse pick", url: "https://www.booking.com/hotel/in/vythiri-resort.html?aid=2820480" },
              { name: "Rainforest Boutique", type: "Luxury Treehouse · Lakkidi", price: "From ₹8,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/rainforest-wayanad.html?aid=2820480" },
            ]}
            activities={[
              { name: "Chembra Peak Guided Trek", duration: "Half day", price: "From ₹350/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=wayanad&partner_id=PSZA5UI" },
              { name: "Tholpetty Wildlife Safari", duration: "2 hours", price: "From ₹500/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=wayanad&partner_id=PSZA5UI" },
              { name: "Spice Plantation Tour + Lunch", duration: "3 hours", price: "From ₹400/person", url: "https://www.getyourguide.com/s/?q=wayanad&partner_id=PSZA5UI" },
              { name: "Edakkal Caves Heritage Walk", duration: "2 hours", price: "From ₹230/person", url: "https://www.getyourguide.com/s/?q=wayanad&partner_id=PSZA5UI" },
            ]}
            pdfProductId="wayanad-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Wayanad — Must-See Places"
            subtitle="Click each thumbnail to explore Wayanad&apos;s most stunning natural and historic spots."
            spots={[
              { name: "Chembra Peak",             query: "chembra peak wayanad heart shaped lake trek mountain green no people",          desc: "The heart-shaped lake halfway up is Wayanad’s most iconic sight. 3km moderate trek — go Oct–Dec for dry trails and clear views." },
              { name: "Edakkal Caves",             query: "edakkal caves wayanad ancient petroglyphs rock stone kerala",                  desc: "3,000-year-old cave with Neolithic petroglyphs. Hire the ₹200 local guide — without one, you’ll miss the most important carvings." },
              { name: "Banasura Sagar Dam",        query: "banasura sagar dam wayanad kerala green water reservoir landscape no people",  desc: "India’s largest earth dam surrounded by submerged hills that look like floating islands. Speed boat rides available." },
              { name: "Soochipara Falls",          query: "soochipara falls wayanad waterfall three tiered rock pool kerala nature",      desc: "Three-tiered waterfall with a swimmable plunge pool at the base. Best Oct–Feb when water flow is strong." },
              { name: "Wayanad Wildlife Sanctuary", query: "wayanad wildlife sanctuary elephant herd forest grassland kerala",            desc: "Part of the Nilgiri Biosphere Reserve. Morning jeep safaris regularly spot elephants, gaur, and sambar deer." },
            ]}
          />

          {/* ── TREEHOUSE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="treehouse resort jungle canopy mist kerala wooden deck elevated nature no people"
              fallback="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80"
              alt="Treehouse resort elevated in jungle canopy with misty valley views"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Wayanad&apos;s treehouse stays put you 40{"–"}80 feet above the forest floor. Morning mist rolls through the canopy below your deck.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Wayanad is compact — every route loops back to Kalpetta. No backtracking, no wasted fuel. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83C\uDF3F Nature"},{id:"C" as const,label:"\uD83C\uDF33 Treehouse"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 1" day="Caves + Dam Loop"
                  stops={["Kalpetta","Edakkal Caves","Banasura Dam","Kalpetta"]}
                  distance="48km · ~1hr 20min" note="Edakkal and Banasura are on the same road heading west from Kalpetta. No backtracking needed."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Kalpetta,+Wayanad/Edakkal+Caves/Banasura+Sagar+Dam/Kalpetta,+Wayanad" />
                <RouteCard plan="Plan A · Day 2" day="Chembra + Soochipara"
                  stops={["Kalpetta","Meppadi","Chembra Peak","Soochipara Falls","Kalpetta"]}
                  distance="42km · ~1hr driving" note="Chembra and Soochipara are both near Meppadi — do them in sequence. Start at 6:30am for the coolest trek conditions."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Kalpetta,+Wayanad/Chembra+Peak/Soochipara+Falls/Kalpetta,+Wayanad" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 2" day="Trek + Waterfalls Day"
                  stops={["Vythiri 6am","Chembra Peak","Soochipara Falls","Meenmutty Falls","Vythiri 5pm"]}
                  distance="60km · ~1hr 40min driving" note="Chembra → Soochipara → Meenmutty follows a clean south-west arc from Meppadi. No doubling back."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/Vythiri,+Wayanad/Chembra+Peak/Soochipara+Falls/Meenmutty+Falls/Vythiri,+Wayanad" />
                <RouteCard plan="Plan B · Day 3" day="Safari + Lake + Plantation"
                  stops={["Vythiri 6am","Tholpetty Sanctuary","Pookode Lake","Spice Plantation Meppadi","Lakkidi Viewpoint"]}
                  distance="90km · ~2hrs driving" note="Tholpetty is 35km north. Return via Kalpetta → Pookode (15km) → plantation → Lakkidi on your way out toward Kozhikode."
                  color="border-emerald-200 bg-emerald-50"
                  url="https://www.google.com/maps/dir/Vythiri,+Wayanad/Tholpetty+Wildlife+Sanctuary/Pookode+Lake/Lakkidi+View+Point" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 1" day="Arrival + Edakkal"
                  stops={["Calicut Airport","Lakkidi Viewpoint","Treehouse Check-in","Edakkal Caves","Resort"]}
                  distance="100km · ~2.5hrs" note="The Thamarassery Ghat drive itself is an experience. 9 hairpin bends through dense forest. Stop at Lakkidi before checking in."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Calicut+International+Airport/Lakkidi+View+Point/Edakkal+Caves/Vythiri,+Wayanad" />
                <RouteCard plan="Plan C · Day 3" day="Safari + Departure"
                  stops={["Resort 5:30am","Tholpetty Safari 6am","Pookode Lake 10am","Coffee Estate Lunch","Lakkidi","Calicut Airport"]}
                  distance="120km · ~3hrs total" note="First safari slot (6–8am) is best. Return south via Pookode, then continue down the Ghat to Calicut."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Tholpetty+Wildlife+Sanctuary/Pookode+Lake/Lakkidi+View+Point/Calicut+International+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245676.25!2d76.0!3d11.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Wayanad Travel Map" />
            </div>
          </section>

          {/* ── SPICE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kerala spice plantation pepper vines cardamom green close up no people"
              fallback="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80"
              alt="Kerala spice plantation with pepper vines and cardamom plants"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Pepper at a plantation: {"₹"}300/250g. Same pepper at a Kochi tourist shop: {"₹"}700. Buy directly from the source.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting during monsoon (Jun–Sep)", desc: "Chembra Peak trek closes officially. Roads flood. Leeches are everywhere. Soochipara access gets restricted. Come Oct–Dec instead — everything is lush green but dry underfoot.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Skipping the guide at Edakkal Caves", desc: "The ₹200 local guide explains petroglyphs that are 3,000 years old. Without one, you’ll see scratches on rocks and leave confused. With one, it becomes one of the most memorable hours of your trip.", icon: "\uD83D\uDDFF" },
                { title: "Starting Chembra trek after 8am", desc: "The sun gets brutal by 10am on exposed sections. Start at 6:30am — you’ll finish before the crowds even arrive and get the best light for photos at the heart-shaped lake.", icon: "\u2600\uFE0F" },
                { title: "Booking multiple hotels across Wayanad", desc: "Wayanad is compact. Everything is within 25km of Kalpetta. One base = no packing/unpacking, no wasted time driving between hotels.", icon: "\uD83C\uDFE8" },
                { title: "Buying spices from roadside tourist shops", desc: "Plantation prices are 40–60% cheaper and the spices are fresher. Visit a plantation on Day 3 and buy directly. Pepper, cardamom, vanilla, coffee — all available.", icon: "\uD83C\uDF36\uFE0F" },
                { title: "Not pre-booking wildlife safari slots", desc: "Tholpetty and Muthanga safaris have limited jeeps per slot. Weekend mornings sell out. Book online 2–3 days ahead or ask your hotel to arrange it.", icon: "\uD83D\uDC18" },
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
                { icon: "\u2764\uFE0F", title: "Heart Lake Timing", desc: "The heart-shaped lake on Chembra Peak photographs best before 9am when mist hovers over the water. By 10am, direct sunlight washes out the shape.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF33", title: "Treehouse Booking Hack", desc: "Weekday stays at premium treehouses are 30–40% cheaper than weekends. Tuesday–Thursday gets the same experience with fewer guests and easier availability.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDC18", title: "Safari First Slot", desc: "The 6–8am safari at Tholpetty has a 70%+ elephant sighting rate. The 3–5pm slot is hotter and animals stay hidden. Always pick morning.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u2615", title: "Coffee Direct", desc: "Wayanad grows Robusta coffee. Buy fresh roasted beans at any plantation for ₹200–400/500g. Same quality in a Bangalore cafe costs 3x more.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE97", title: "Rent a Bike, Not a Car", desc: "A rented Royal Enfield (₹800–1,200/day) handles Wayanad’s winding ghat roads better than a car. Plus, the Thamarassery Ghat 9-hairpin drive is legendary on two wheels.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Dec ✔ best trails, post-monsoon green | Jan–Mar ✔ peak season, clear skies | Apr–May \u2600\uFE0F warm but okay | Jun–Sep \uD83C\uDF27\uFE0F avoid", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Wayanad itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Wayanad Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Wayanad?", a: "3 days is ideal to cover the major attractions — Chembra Peak, Edakkal Caves, Banasura Sagar Dam, and a wildlife safari. 2 days works if you skip one trek. 4–5 days lets you add Meenmutty Falls, extended plantation visits, and a slower pace." },
                { q: "What is the best time to visit Wayanad?", a: "October to May. October–December has the clearest skies and driest trails after monsoon. January–March is peak season with comfortable weather. April–May is warm but still good. June–September brings heavy monsoon rain — many treks close and leeches are everywhere." },
                { q: "How much does a 3-day Wayanad trip cost?", a: "Budget solo: under ₹6,000 including homestay. Nature explorer: ₹8,000–18,000 with mid-range resorts. Premium treehouse: ₹18,000–35,000 per person. All include accommodation, food, transport and activities." },
                { q: "Is the Chembra Peak trek difficult?", a: "The trek to the heart-shaped lake is moderate — about 3km one way with steep sections. 2–3 hours round trip. The full summit (5km) is harder and takes a full day. Go October–December when the trail is dry. Monsoon makes it dangerously slippery and it is officially closed June–September." },
                { q: "Are treehouse stays in Wayanad worth it?", a: "Absolutely. Wayanad has some of the best treehouse accommodations in India. Properties like Vythiri Resort offer stays 40–80 feet above ground with misty valley views. Budget ₹5,000–12,000/night. Book 2–3 weeks ahead for Oct–Mar weekends." },
                { q: "How do I reach Wayanad?", a: "Nearest airport: Calicut (CCJ), 85km away — about 2.5 hours by road through the Thamarassery Ghat pass. From Bangalore: 6-hour drive via Mysore. From Kochi: about 5 hours. KSRTC buses run regularly from Kozhikode and Bangalore." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Kerala Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Munnar — 3 Day Hill Station Guide", href: "/blog/munnar-3-days", soon: true },
                { label: "Goa — 3 Day Beach & Coast Guide", href: "/blog/goa-3-days", soon: false },
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

          <RelatedGuides currentSlug="wayanad-3-days" />
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
