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


const JODHPUR_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Blue City Overview" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Jodhpur 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Jodhpur in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\uD83D\uDCB0</span>
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
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">→</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">\uD83D\uDCA1 {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        \uD83D\uDCCD Open in Google Maps →
      </a>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function JodhpurClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");
  const [activeRoute, setActiveRoute] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹6k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFF0", label: "Heritage", sub: "₹8k–20k", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC51", label: "Royal", sub: "₹20k–50k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JODHPUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jodhpur" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="jodhpur blue city mehrangarh fort rajasthan"
            fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85"
            alt="Jodhpur Blue City with Mehrangarh Fort rising above"
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
              <span className="text-white/70">Jodhpur 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Fort
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jodhpur in 3 Days: The Blue City Guide
                <em className="italic text-gold-light"> (Budget to Royal, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — from backpacker hostels to sleeping inside a palace.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 Rajasthan</span>
              <span>·</span>
              <span>\uD83D\uDCC5 3 Days</span>
              <span>·</span>
              <span>\uD83D\uDCB0 From ₹6,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mehrangarh Fort is the most impressive fort in India and I will fight anyone who says Amber Fort is better — the sheer scale of it rising from the cliff is insane. But the fort is only half the story. The Blue City below it, the food at Clock Tower after dark, the stepwells hiding in plain sight — that&apos;s what makes Jodhpur the most underrated stop in Rajasthan.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── BLUE CITY OVERVIEW ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCCD Understanding the Blue City</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Jodhpur is compact. Everything worth seeing sits within a 5km radius of Mehrangarh Fort. That&apos;s both the blessing and the mistake most people make — they think one day is enough.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Old City (Blue City)", emoji: "\uD83D\uDD35", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Best for","Walking, photography, street food, culture"],["Key sights","Mehrangarh Fort, Clock Tower, Toorji Ka Jhalra, blue lanes"],["Budget","₹200–₹800/day activities"],["Vibe","Chaotic, photogenic, deeply authentic"]],
                  note: "The Blue City is best seen from the fort ramparts at golden hour — but for the streets themselves, wake up at 6am and walk the lanes near Navchokiya." },
                { title: "New City & Outskirts", emoji: "\uD83C\uDFD9\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","Palace hotels, Umaid Bhawan, Mandore Gardens"],["Key sights","Umaid Bhawan Palace, Mandore, Bishnoi villages"],["Budget","₹500–₹5,000/day activities"],["Vibe","Spacious, regal, less touristy"]],
                  note: "Umaid Bhawan is split between a museum and a working Taj hotel. Museum side is ₹100 entry. The hotel side requires a lunch reservation (₹3,000+) to enter." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in the Old City for atmosphere and walkability. The blue lanes, Clock Tower food, and Mehrangarh are all within walking distance. Take an auto to Umaid Bhawan and Mandore (₹150–₹250 each way).
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDCC5" label="Duration" value="3 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="₹6,000" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Oct – Mar" />
            <StatCard icon="\u2708\uFE0F" label="Airport" value="JDH" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Old City Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Zostel / Moustache / Hostelwala · ₹400–₹900/night · Auto + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Mehrangarh Fort + Blue City Lanes"
                  items={[
                    "Check in, drop bags, walk straight to Mehrangarh Fort. Entry ₹200 (Indian), audio guide ₹200 extra — genuinely worth it.",
                    "Budget 2.5–3 hours inside. The fort museum is world-class. Don’t rush it.",
                    "Walk the ramparts at golden hour — the entire Blue City spreads below you. Best view in Rajasthan, no question.",
                    "Walk down through Fateh Pol gate into the blue lanes. Get deliberately lost for 30–45 minutes.",
                    "Evening: Clock Tower market for dinner. Mirchi vada, makhania lassi, pyaaz ki kachori. Budget ₹200 and eat like royalty.",
                    "Shahi Samosa near Clock Tower for the best gulab jamun you’ll ever have — ₹20 for 2 pieces."
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Stepwell + Umaid Bhawan + Mandore Gardens"
                  items={[
                    "8am: Toorji Ka Jhalra stepwell — free, 5 minutes from Clock Tower. One of the most photogenic stepwells in Rajasthan and nobody talks about it.",
                    "9:30am: Auto to Umaid Bhawan Palace Museum (₹100 entry). The last great palace built in India — finished in 1943. The Art Deco interiors are stunning.",
                    "11:30am: Auto to Mandore Gardens (₹15, 20 min ride). Free entry. Ancient cenotaphs of Jodhpur’s rulers set in terraced gardens. Almost no tourists.",
                    "1pm: Lunch at a dhaba near Mandore — dal baati churma for ₹120–₹180.",
                    "3pm: Back to Old City. Walk Navchokiya — the bluest neighbourhood, locals hanging laundry between indigo walls.",
                    "Sunset from Pachetia Hill or the rooftop of your hostel."
                  ]}
                  cost="₹600–₹900 excluding accommodation" />
                <DayCard day="Day 3" title="Zip-line + Markets + Departure"
                  items={[
                    "7am: Sunrise walk through the blue lanes — completely empty, stray dogs and chai vendors only.",
                    "9am: Flying Fox zip-line at Mehrangarh (₹1,800–₹2,500). 6 zip lines over the fort walls and Ranisar lake. Book ahead Oct–Mar.",
                    "Alternative if zip-line isn’t your thing: Rao Jodha Desert Rock Park (₹100) below the fort — restored scrubland with desert plants and fort views.",
                    "12pm: Final round at Sardar Market near Clock Tower. Spices, textiles, mojari shoes (₹300–₹600), lac bangles.",
                    "Lunch at Janta Sweet Home — local institution, thali for ₹150.",
                    "Afternoon: Depart or onward to Jaisalmer (5hrs) / Udaipur (4.5hrs)."
                  ]}
                  cost="₹2,200–₹3,000 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹4,500–₹6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Heritage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83C\uDFF0</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Heritage Plan — Haveli or Boutique Hotel in Old City</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Pal Haveli / Raas Jodhpur / Singhvi Haveli · ₹2,500–₹6,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fort, Blue City + Sunset Dinner"
                  items={[
                    "9am: Mehrangarh Fort with audio guide. Budget 3 hours — the palanquin gallery and armoury alone take 45 minutes each.",
                    "Walk the ramparts slowly. Photograph the blue city from Chamunda Mataji Temple terrace inside the fort.",
                    "12:30pm: Walk down through Fateh Pol into the blue lanes. Hire a local guide (₹500–₹800 for 2 hours) at the fort gate — they know which doors to knock on.",
                    "2pm: Lunch at Stepwell Cafe overlooking Toorji Ka Jhalra — best setting in Jodhpur for a meal. ₹600–₹900 for two.",
                    "4pm: Toorji Ka Jhalra stepwell up close. Then walk through Nai Sarak market — tie-dye fabrics, bandhani textiles.",
                    "7pm: Rooftop dinner at Pal Haveli or Indique — fort lit up at night is a different experience entirely. ₹1,200–₹2,000 for two."
                  ]}
                  cost="₹3,000–₹4,500 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Umaid Bhawan, Mandore + Zip-line"
                  items={[
                    "8am: Umaid Bhawan Palace Museum (₹100). Then walk the gardens — the building is staggering from outside.",
                    "Optional: Lunch at Risala restaurant inside Umaid Bhawan Taj wing. ₹3,000–₹5,000 for two. You’re eating inside the palace. Book 2 days ahead.",
                    "12pm (if skipping Risala): Mandore Gardens (free, 30 min from Umaid Bhawan). Ancient temples and cenotaphs in lush terraced gardens.",
                    "3pm: Flying Fox zip-line at Mehrangarh — 6 lines across the fort walls. ₹1,800–₹2,500/person. The views mid-flight are spectacular.",
                    "Alternative: Rao Jodha Desert Rock Park (₹100) for a gentler afternoon — desert ecology walk with fort backdrop.",
                    "Evening: Sunset from Pachetia Hill, then dinner at On The Rocks — garden restaurant, live music some nights. ₹1,500–₹2,200 for two."
                  ]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Bishnoi Village Safari + Markets + Departure"
                  items={[
                    "6:30am: Bishnoi village safari (half-day, ₹1,500–₹2,500 for two). Visit Bishnoi communities who have protected wildlife for 500 years. See blackbuck, chinkaras, potters, weavers.",
                    "No human interaction photography without asking. The Bishnoi are hospitable but respect their space.",
                    "12pm: Back to Old City. Final market run at Sardar Market — spices (₹100–₹300/packet), mojari shoes, miniature paintings.",
                    "Lunch at Kalinga Restaurant — non-veg Rajasthani. Laal maas (red mutton curry) is the signature Jodhpur dish. ₹800–₹1,200 for two.",
                    "3pm: Final chai at a Blue City rooftop, fort views.",
                    "Depart or onward journey."
                  ]}
                  cost="₹4,000–₹6,000 for two (excl. accommodation)" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹20,000–₹35,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Royal ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC51</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Royal Plan — Palace Hotel Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Umaid Bhawan Palace (Taj) / RAAS Jodhpur / Ajit Bhawan · ₹8,000–₹30,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Fort Tour + Palace Check-in"
                  items={[
                    "Arrive and check into palace hotel. Umaid Bhawan (Taj) if budget allows — you’re sleeping in an actual palace with a private butler.",
                    "10am: Private guided tour of Mehrangarh Fort (₹3,000–₹5,000 for the group). The private guide unlocks rooms the regular tour skips.",
                    "1pm: Lunch at Chokelao Mahal restaurant inside the fort — Rajasthani thali with fort courtyard views. ₹1,500–₹2,500 for two.",
                    "3pm: Slow walk through the blue lanes with your guide. Have them take you to the hidden Brahmin houses — the deepest indigo blue.",
                    "5:30pm: Sunset drinks at your palace hotel terrace.",
                    "8pm: Dinner at Darikhana (RAAS) — fine-dining Rajasthani with fort views. ₹4,000–₹6,000 for two."
                  ]}
                  cost="₹12,000–₹18,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Umaid Bhawan + Desert Excursion"
                  items={[
                    "Morning at leisure in your palace. Spa treatment if at Umaid Bhawan (₹5,000–₹8,000 per session).",
                    "11am: Umaid Bhawan Museum (if staying elsewhere) — ₹100 entry for the public wing.",
                    "12:30pm: Lunch at Pillars (Umaid Bhawan Taj) — poolside Mediterranean, ₹4,000–₹6,000 for two. The pool alone is worth the visit.",
                    "3pm: Private Bishnoi village safari in a vintage jeep (₹5,000–₹8,000 for two). See blackbuck herds, traditional potters, opium ceremony demonstration.",
                    "6:30pm: Sunset at a private desert camp setup with cocktails (₹6,000–₹10,000 — arranged through your hotel).",
                    "Return for dinner at hotel or Hanwant Mahal — stunning cliff-edge location."
                  ]}
                  cost="₹20,000–₹35,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Zip-line + Shopping + Royal Departure"
                  items={[
                    "8am: Flying Fox zip-line at Mehrangarh. Book the first slot — cooler, emptier, best light.",
                    "10:30am: Rao Jodha Desert Rock Park — gentle walk through restored desert ecology with fort towering above.",
                    "12pm: Shopping at curated stores — Anokhi for block-print textiles, Maharani Art Exporters for miniature paintings, Lakhara Bazaar for lac bangles.",
                    "1:30pm: Farewell lunch at Indique rooftop — fort views, solid Rajasthani menu. ₹2,000–₹3,000 for two.",
                    "Toorji Ka Jhalra for final photos.",
                    "Private car to airport or onward to Udaipur (4.5hrs) / Jaisalmer (5hrs)."
                  ]}
                  cost="₹8,000–₹12,000 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹60,000–₹1,20,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">\uD83C\uDFF0 Heritage</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">\uD83D\uDC51 Royal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,200–₹2,700", "₹7,500–₹18,000", "₹24,000–₹90,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹800–₹1,200", "₹4,000–₹7,000", "₹10,000–₹20,000"],
                    ["\uD83D\uDE97 Transport", "₹400–₹600", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["\uD83C\uDFAF Activities", "₹500–₹2,800", "₹4,000–₹7,000", "₹10,000–₹20,000"],
                    ["\uD83D\uDECD Shopping", "₹300–₹800", "₹2,000–₹4,000", "₹5,000–₹15,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹4,500–₹6,000","₹9,000–₹19,000","₹26,000–₹50,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Jodhpur is significantly cheaper than Jaipur or Udaipur for the same quality of experience.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Jodhpur"
            hotels={[
              { name: "Zostel Jodhpur", type: "Budget Hostel · Old City", price: "From ₹500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-jodhpur.html?aid=2820480" },
              { name: "RAAS Jodhpur", type: "Boutique Heritage · Fort View", price: "From ₹6,000/night", rating: "5", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/raas-jodhpur.html?aid=2820480" },
              { name: "Umaid Bhawan Palace", type: "Palace Hotel (Taj) · Royal", price: "From ₹25,000/night", rating: "5", badge: "Royal", url: "https://www.booking.com/hotel/in/umaid-bhawan-palace.html?aid=2820480" },
            ]}
            activities={[
              { name: "Flying Fox Zip-line at Mehrangarh", duration: "1.5 hours", price: "From ₹1,800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
              { name: "Bishnoi Village Safari", duration: "Half day", price: "From ₹1,500/two", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
              { name: "Mehrangarh Fort Guided Tour", duration: "3 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
              { name: "Blue City Walking Tour", duration: "2.5 hours", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=jodhpur&partner_id=PSZA5UI" },
            ]}
            pdfProductId="jodhpur-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Jodhpur — Must-See Places"
            subtitle="Click each thumbnail to explore Jodhpur’s most iconic forts, palaces and hidden corners."
            spots={[
              { name: "Mehrangarh Fort",       query: "mehrangarh fort jodhpur massive walls cliff edge rajasthan architecture",  desc: "One of the largest forts in India, rising 125 metres above the city on a sheer cliff. The museum inside is world-class. Budget 2–3 hours minimum." },
              { name: "Blue City Lanes",       query: "jodhpur blue city narrow lanes indigo houses rajasthan morning",           desc: "The iconic blue-painted houses of the Brahmin quarter. Best explored at 6am when the light hits the walls and the lanes are empty." },
              { name: "Toorji Ka Jhalra",      query: "toorji ka jhalra stepwell jodhpur carved stone water rajasthan",           desc: "A beautifully restored 18th-century stepwell hidden steps from Clock Tower. Free entry, stunning carved stone walls descending to water." },
              { name: "Umaid Bhawan Palace",   query: "umaid bhawan palace jodhpur art deco sandstone dome rajasthan",            desc: "The last great palace built in India (completed 1943). Part museum, part Taj hotel. The Art Deco interiors rival anything in Mumbai." },
              { name: "Clock Tower Market",    query: "jodhpur clock tower sardar market spices colourful bazaar rajasthan",       desc: "The beating heart of Jodhpur. Spice stalls, textile shops, and after dark the best street food in Rajasthan — mirchi vada, lassi, kachori." },
            ]}
          />

          {/* ── FORT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="mehrangarh fort jodhpur sunrise golden light massive walls rajasthan"
              fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80"
              alt="Mehrangarh Fort at sunrise towering over Jodhpur"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mehrangarh Fort from the east side at sunrise. The walls rise 125 metres from the city below — every other Rajasthan fort feels small after this.
              </p>
            </div>
          </div>

          {/* ── ROUTE MAPS ── */}
          <section id="maps" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDDFA\uFE0F Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Jodhpur is compact — most routes are under 15km. Open the link on your phone before you leave each morning.
            </p>

            {/* Route tab switcher */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[{id:"A" as const,label:"\uD83D\uDCB0 Budget"},{id:"B" as const,label:"\uD83C\uDFF0 Heritage"},{id:"C" as const,label:"\uD83D\uDC51 Royal"}].map((t) => (
                <button key={t.id} onClick={() => setActiveRoute(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeRoute === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            {activeRoute === "A" && (
              <div className="space-y-4">
                <RouteCard plan="Plan A · Day 1" day="Fort + Blue City + Clock Tower"
                  stops={["Hotel","Mehrangarh Fort 9am","Blue Lanes Walk","Clock Tower Market 6pm"]}
                  distance="3km · Mostly walking" note="Everything on Day 1 is walkable from Old City accommodation. Save auto money for Day 2."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Clock+Tower,+Jodhpur/Mehrangarh+Fort,+Jodhpur/Toorji+Ka+Jhalra,+Jodhpur/Clock+Tower,+Jodhpur" />
                <RouteCard plan="Plan A · Day 2" day="Stepwell + Umaid Bhawan + Mandore"
                  stops={["Toorji Ka Jhalra 8am","Umaid Bhawan 9:30am","Mandore Gardens 11:30am","Old City 2pm","Navchokiya 3pm"]}
                  distance="18km · ~40min by auto" note="Umaid Bhawan and Mandore are both north of the old city on the same road. Do them in sequence to avoid backtracking."
                  color="border-amber-200 bg-amber-50"
                  url="https://www.google.com/maps/dir/Toorji+Ka+Jhalra,+Jodhpur/Umaid+Bhawan+Palace,+Jodhpur/Mandore+Gardens,+Jodhpur/Clock+Tower,+Jodhpur" />
              </div>
            )}

            {activeRoute === "B" && (
              <div className="space-y-4">
                <RouteCard plan="Plan B · Day 1" day="Fort + Blue Lanes + Stepwell Cafe"
                  stops={["Hotel","Mehrangarh Fort 9am","Blue Lanes 12:30pm","Stepwell Cafe 2pm","Nai Sarak Market 4pm","Rooftop Dinner 7pm"]}
                  distance="4km · All walking" note="The walk from Mehrangarh down through Fateh Pol into the blue lanes is the single best walk in Jodhpur. Do not take an auto."
                  color="border-blue-200 bg-blue-50"
                  url="https://www.google.com/maps/dir/Mehrangarh+Fort,+Jodhpur/Toorji+Ka+Jhalra,+Jodhpur/Nai+Sarak,+Jodhpur/Clock+Tower,+Jodhpur" />
                <RouteCard plan="Plan B · Day 2" day="Umaid Bhawan + Mandore + Zip-line"
                  stops={["Umaid Bhawan 8am","Mandore 11:30am","Flying Fox 3pm","Pachetia Hill Sunset","On The Rocks Dinner"]}
                  distance="22km · ~50min by auto" note="Book Flying Fox for 3pm slot — afternoon light makes the zip-line photos spectacular against the fort."
                  color="border-blue-200 bg-blue-50"
                  url="https://www.google.com/maps/dir/Umaid+Bhawan+Palace,+Jodhpur/Mandore+Gardens,+Jodhpur/Mehrangarh+Fort,+Jodhpur" />
              </div>
            )}

            {activeRoute === "C" && (
              <div className="space-y-4">
                <RouteCard plan="Plan C · Day 2" day="Palace + Desert Safari"
                  stops={["Umaid Bhawan 11am","Pillars Lunch 12:30pm","Bishnoi Village 3pm","Desert Sunset 6:30pm","Hotel 8pm"]}
                  distance="65km · ~2hrs total" note="The Bishnoi villages are 25–30km south of Jodhpur. A private car or hotel-arranged jeep is the only practical option."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Umaid+Bhawan+Palace,+Jodhpur/Bishnoi+Village,+Jodhpur/Jodhpur" />
                <RouteCard plan="Plan C · Day 3" day="Zip-line + Shopping + Departure"
                  stops={["Flying Fox 8am","Rao Jodha Park 10:30am","Sardar Market 12pm","Indique Lunch 1:30pm","Toorji Ka Jhalra","Airport"]}
                  distance="12km · ~30min by car" note="First zip-line slot (8am) has the best light and no queues. The park and market are both at the base of the fort."
                  color="border-purple-200 bg-purple-50"
                  url="https://www.google.com/maps/dir/Mehrangarh+Fort,+Jodhpur/Rao+Jodha+Desert+Rock+Park,+Jodhpur/Clock+Tower,+Jodhpur/Jodhpur+Airport" />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28867.2!2d73.02!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Jodhpur Travel Map" />
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rajasthani street food mirchi vada pyaaz kachori colourful spices jodhpur"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Jodhpur street food at Clock Tower market"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Clock Tower market after dark is where the real Jodhpur food happens — mirchi vada, makhania lassi, pyaaz ki kachori. Budget ₹200 and eat like royalty.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Mehrangarh after 11am", desc: "Tour buses arrive at 10:30am. By noon the ramparts are packed. Go at 9am opening or after 3pm for golden hour.", icon: "\uD83C\uDFF0" },
                { title: "Skipping the audio guide", desc: "The Mehrangarh audio guide (₹200) is genuinely one of the best in India. Without it you’re just looking at walls. With it, every room tells a story.", icon: "\uD83C\uDFA7" },
                { title: "Only seeing the fort from below", desc: "The view FROM the fort looking down at the Blue City is the iconic shot. Most Instagram photos are from the ramparts, not from street level looking up.", icon: "\uD83D\uDCF7" },
                { title: "Eating only at tourist restaurants", desc: "Clock Tower market after dark has the best food in the city at a fraction of the price. Mirchi vada for ₹20, not ₹180 at a rooftop cafe.", icon: "\uD83C\uDF7D" },
                { title: "Visiting in summer (April–June)", desc: "Jodhpur regularly hits 45°C+ in May. The fort becomes an oven. October–March only, unless you enjoy heatstroke.", icon: "\u2600\uFE0F" },
                { title: "Thinking one day is enough", desc: "Most Rajasthan circuits give Jodhpur a rushed day trip. You need 3 days minimum to properly see the fort, blue city, Umaid Bhawan, and surrounding areas.", icon: "\u23F0" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCA1 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "The 6am Blue City Rule", desc: "The blue lanes are completely different at 6am — empty, soft light hitting indigo walls, chai vendors setting up. This is when the real photographs happen.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83C\uDF36\uFE0F", title: "Clock Tower Food Order", desc: "Start at Shahi Samosa for kachori and gulab jamun, then mirchi vada from the stall opposite, finish with makhania lassi. ₹200 total, better than any restaurant.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDC5F", title: "Mojari Shopping Tips", desc: "Jodhpur mojari shoes (₹300–₹600 at Sardar Market) are half the price of Jaipur. Buy them slightly tight — the leather stretches after 2–3 wears.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFAD", title: "Hire a Blue City Guide", desc: "Freelance guides at Mehrangarh gate (₹500–₹800 for 2hrs) know which blue houses welcome visitors and which rooftops have the best views. Worth every rupee.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83D\uDE8C", title: "Jodhpur → Jaisalmer Overnight", desc: "The overnight RSRTC bus (₹400–₹700) departs at 11pm, arrives 5am. Saves a hotel night and you wake up in the desert. Book on RSRTC website.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov \u2705 best value | Dec–Jan \u2705 best weather (cold nights) | Feb–Mar \u2705 sweet spot | Apr–Jun \u2614 extreme heat | Jul–Sep \uD83C\uDF27\uFE0F monsoon, dramatic skies", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Jodhpur itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Jodhpur Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Jodhpur?", a: "3 days is ideal to cover Mehrangarh Fort, the Blue City lanes, Umaid Bhawan Palace, Clock Tower market, Mandore Gardens and surrounding areas without rushing. 2 days works if you skip Mandore and the village safari. 4–5 days lets you add Osian desert camps and Bishnoi village visits." },
                { q: "What is the best time to visit Jodhpur?", a: "October–March is best. October–November and February–March offer pleasant 25–30°C days with fewer crowds. December–January is perfect during the day but nights can drop to 8–10°C. April–June regularly exceeds 45°C — avoid at all costs." },
                { q: "How much does a 3-day Jodhpur trip cost?", a: "Budget solo: under ₹6,000 including accommodation. Heritage mid-range for two: ₹20,000–₹35,000. Royal palace experience for two: ₹60,000–₹1,20,000. Jodhpur is notably cheaper than Jaipur or Udaipur for equivalent quality." },
                { q: "Is Mehrangarh Fort worth visiting?", a: "Mehrangarh is widely considered the most impressive fort in Rajasthan. The museum is world-class, the views over the Blue City from the ramparts are unmatched, and the sheer scale of it rising from the cliff is extraordinary. Budget 2–3 hours minimum. The audio guide (₹200) is genuinely excellent." },
                { q: "What food should I try in Jodhpur?", a: "Must-try: mirchi vada (deep-fried chilli fritters), makhania lassi (saffron buttermilk), pyaaz ki kachori (onion-stuffed fried pastry), dal baati churma, gulab jamun from Shahi Samosa near Clock Tower, and laal maas (red mutton curry) at any proper Rajasthani restaurant." },
                { q: "Can I do zip-lining at Mehrangarh Fort?", a: "Yes. Flying Fox operates 6 zip lines across the Mehrangarh Fort walls and lake. Sessions last about 1.5 hours and cost ₹1,800–₹2,500 per person. Book in advance during October–March peak season. First slot (8am) has the best light and no queues." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jaipur — 3 Day Pink City Guide", href: "/blog/jaipur-3-days", soon: false },
                { label: "Udaipur — 3 Day Lake City Guide", href: "/blog/udaipur-3-days", soon: false },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: false },
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

          <CombineWith currentSlug="jodhpur-3-days" />
          <RelatedGuides currentSlug="jodhpur-3-days" />
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
