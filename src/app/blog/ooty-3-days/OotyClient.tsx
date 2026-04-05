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


const OOTY_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "getting",     emoji: "🚂", label: "Getting to Ooty" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ooty 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Ooty in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function OotyBlogClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹7k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "👨‍👩‍👧‍👦", label: "Family", sub: "₹8k–18k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹18k–35k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={OOTY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ooty" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ooty nilgiri hills tea plantation tamil nadu"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="Ooty Nilgiri hills tea plantation landscape"
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
              <span className="text-white/70">Ooty 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Hill Station
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ooty in 3 Days: The Complete Hill Station Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with real timings, actual costs, the Nilgiri toy train, tea factories and the mistakes that ruin most Ooty trips.
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
              <span>🇮🇳 Tamil Nadu</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹7,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Nilgiri Mountain Railway is a UNESCO World Heritage site and genuinely one of the most beautiful train rides in the world — book the first class for ₹300 extra, the open windows are worth it. Most people visit Ooty in peak season, fight traffic for three days, and leave thinking it was overrated. This guide makes sure that doesn&apos;t happen.
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
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── GETTING TO OOTY ── */}
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚂 Getting to Ooty</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There is no airport in Ooty. That&apos;s part of the charm — and part of the planning challenge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                { title: "Nilgiri Toy Train", emoji: "🚂", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["From","Mettupalayam (7:10am)"],["Duration","4.5–5 hours"],["Cost","₹30 (2nd) / ₹300 (1st)"],["Book","IRCTC, 2 weeks ahead"]],
                  note: "The only way to arrive that doubles as the trip highlight. UNESCO World Heritage." },
                { title: "By Road from Coimbatore", emoji: "🚗", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Distance","86 km, 36 hairpin bends"],["Duration","2.5–3 hours"],["Cost","Bus ₹80 / Cab ₹1,800"],["Best","Faster, more flexible"]],
                  note: "Take the Coonoor ghat road — better scenery than the Gudalur route." },
                { title: "From Bangalore / Mysore", emoji: "🚌", bg: "bg-purple-50 border-purple-200", th: "text-purple-800",
                  rows: [["Distance","270 km / 125 km"],["Duration","6 hrs / 3.5 hrs"],["Cost","Bus ₹500–₹900"],["Best","Overnight bus from Blr"]],
                  note: "KSRTC Rajahamsa buses are comfortable. Book on redbus.in." },
              ].map((mode) => (
                <div key={mode.title} className={`rounded-xl border p-5 ${mode.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${mode.th}`}>
                    <span>{mode.emoji}</span>{mode.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {mode.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {mode.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Take the toy train up from Mettupalayam (morning), return by road via Coonoor (faster). You get the UNESCO experience without wasting a second day on transport.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹7,000" />
            <StatCard icon="🌡" label="Best Months" value="Sep – Mar" />
            <StatCard icon="🏔" label="Altitude" value="2,240m" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
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

            {/* ── PLAN A — BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under ₹7,000 per person</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse / hostel near Charing Cross · ₹500–₹1,200/night · Bus + walk</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Toy Train + Botanical Gardens + Ooty Lake"
                  items={[
                    "5:30am: Reach Mettupalayam station (night bus from Coimbatore/Bangalore). Toy train departs 7:10am — do NOT miss it.",
                    "Book first class (₹300) if available — open windows, no glass barrier. The stretch through Coonoor to Wellington is peak scenery.",
                    "12pm: Arrive Ooty. Drop bags at guesthouse near Charing Cross (₹500–₹800/night). Eat at Shinkow's — Chinese food since 1953, thukpa for ₹120.",
                    "2:30pm: Government Botanical Gardens (₹30 entry). 22 hectares, 1,000+ species. The fossilised tree trunk is genuinely 20 million years old.",
                    "4:30pm: Walk to Ooty Lake (15 min). Pedal boat ₹80/30 min. The lake is average — the surrounding eucalyptus walk is the actual attraction.",
                    "Evening: Walk the Charing Cross market area. Homemade chocolate shops everywhere — Moddy's is the oldest, buy dark chocolate bark ₹150/250g."
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Doddabetta Sunrise + Tea Factory + Pykara Falls"
                  items={[
                    "5:30am: Auto to Doddabetta Peak (10km, ₹250 return with wait). Highest point in the Nilgiris at 2,637m.",
                    "Doddabetta at 6am with clouds below you is the single best view in the Nilgiris. Telescope house opens at 7am (₹5) — skip it if clouds are below you, the naked eye view is better.",
                    "8:30am: Return to town. Breakfast at local bakery — Ooty has surprisingly good bakeries from the colonial era. Plum cake ₹40.",
                    "10am: Dodda Tea Factory visit (₹20 entry, 3km from town). See the full process from leaf to cup. Buy Nilgiri first flush tea directly — ₹200–₹400 for premium loose leaf.",
                    "Skip the commercial 'tea factory tours' on the highway — go to the TATA tea museum in Coonoor for the real deal.",
                    "1pm: Pykara Falls + Pykara Lake (20km from town, bus ₹25). The falls are best Sep–Dec after monsoon. Boat ride on Pykara Lake ₹150.",
                    "4pm: Pine Forest / Shooting Point (on return route). Walk through the pine plantations — free, usually empty, genuinely beautiful light."
                  ]}
                  cost="₹600–₹1,000 excluding accommodation" />
                <DayCard day="Day 3" title="Coonoor + Sim's Park + Lamb's Rock + Departure"
                  items={[
                    "8am: Bus to Coonoor (19km, ₹20, 45 min). Or share auto ₹40/person.",
                    "9am: Sim's Park (₹30 entry). Japanese-style botanical garden on a hillside — smaller than Ooty's but better maintained and far fewer crowds.",
                    "10:30am: Lamb's Rock viewpoint (7km from Coonoor, auto ₹150 return). Sheer cliff drop with views of the Coimbatore plains. Best viewpoint in the Nilgiris after Doddabetta.",
                    "12pm: Dolphin's Nose viewpoint (12km further) if time permits — the Catherine Falls view from here is spectacular.",
                    "1:30pm: Lunch at a Coonoor bakery — the local plum cakes and pastries rival anything in Ooty at half the price.",
                    "3pm: Return to Ooty, collect bags, bus to Coimbatore/Mettupalayam (₹80, 3hrs) for onward journey."
                  ]}
                  cost="₹500–₹800 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹5,000–₹7,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — FAMILY ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Family Plan — ₹8,000–₹18,000 (family of 4)</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Mid-range hotel with breakfast · ₹2,000–₹4,000/night · Hired cab for 3 days</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Nilgiri Toy Train + Botanical Gardens + Ooty Lake"
                  items={[
                    "7:10am: Nilgiri Mountain Railway from Mettupalayam. Book first class for the family — kids absolutely love the open windows and tunnel sections.",
                    "12pm: Check into hotel. Rest and lunch — kids need it after the early morning. Try the Junior Kuppanna in town for South Indian meals (₹150/plate).",
                    "2:30pm: Government Botanical Gardens — wide lawns for kids to run, the 20-million-year fossilised tree stump, and a toy train inside the garden (₹20).",
                    "4:30pm: Ooty Lake — pedal boats (₹160 for 4-seater, 30 min). Kids enjoy the horse rides along the lake (₹100–₹200).",
                    "6pm: Thread Garden (₹30) — an entire garden made of thread/wool. Quirky but kids find it fascinating. 20 minutes is enough.",
                    "Evening: Chocolate shopping at Charing Cross. Let kids pick at King Star or Moddy's — budget ₹300–₹500 for the chocolate haul."
                  ]}
                  cost="₹2,500–₹4,000 for family of 4 (excl. accommodation)" />
                <DayCard day="Day 2" title="Doddabetta Peak + Tea Factory + Pykara Falls + Pine Forest"
                  items={[
                    "7am: Drive to Doddabetta Peak (10km). Early start beats the tour bus crowd that arrives at 10am. The telescope house (₹5/person) is fun for kids.",
                    "9am: Tea plantation walk + factory visit. The Dodda Tea Factory allows you to walk through rows of tea plants — kids love picking leaves. Entry ₹20.",
                    "Ooty in April-May is a traffic nightmare — 30,000 tourists descend on a town built for 3,000. Go in September when the hills are emerald green and you can actually breathe.",
                    "11:30am: Drive to Pykara Falls (20km). The waterfall walk is easy and kid-friendly. Boat ride on Pykara Lake (₹150/person, free for kids under 5).",
                    "2pm: Pine Forest / Shooting Point. The pine plantations are flat, shaded walks — perfect for families. No entry fee.",
                    "4pm: Return via 6th Mile viewpoint. Stop at any roadside stall for fresh corn — ₹30, and the views are free."
                  ]}
                  cost="₹2,000–₹3,500 for family of 4 (excl. accommodation)" />
                <DayCard day="Day 3" title="Coonoor + Sim's Park + Lamb's Rock + Departure"
                  items={[
                    "8:30am: Drive to Coonoor (19km, 45 min). The ghat road itself has incredible views — stop at any viewpoint.",
                    "9:30am: Sim's Park. The Japanese-style layout on a hillside is easier for kids than Ooty's Botanical Gardens. Entry ₹30.",
                    "11am: Lamb's Rock viewpoint — dramatic cliff edge with safety railings. Kids love the monkeys here (keep food sealed).",
                    "12pm: TATA Tea Museum, Coonoor (₹20 entry). The real tea heritage experience — better than any highway tea factory. 45 minutes.",
                    "1:30pm: Lunch at a Coonoor bakery or The Grub, Coonoor — family-friendly, good burgers and sandwiches (₹800–₹1,200 for 4).",
                    "3pm: Drive back to Coimbatore via the ghat road (86km, 2.5hrs) or head to Mettupalayam for onward train."
                  ]}
                  cost="₹1,500–₹3,000 for family of 4 (excl. accommodation)" />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (family of 4) · </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–₹18,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C — PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan — ₹18,000–₹35,000 for two</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Heritage bungalow / Savoy / Sterling Elk Hill · ₹5,000–₹10,000/night · Private cab</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Heritage Arrival + Botanical Gardens + Sunset at Ooty Lake"
                  items={[
                    "Option A: Nilgiri Mountain Railway first class (₹300/seat) — the heritage experience. Option B: Private cab from Coimbatore (₹2,500) with stops at Coonoor viewpoints.",
                    "12pm: Check into a heritage property — The Savoy (IHCL) is the original 1829 colonial hotel. Or Sterling Elk Hill for modern luxury with valley views.",
                    "1:30pm: Lunch at Earl's Secret or Savoy restaurant — proper multi-course with Nilgiri produce. Budget ₹1,500–₹2,500 for two.",
                    "3pm: Botanical Gardens with a hired guide (₹500, arrange via hotel). The garden has 1,000+ species and the guide makes the fossilised tree stump actually interesting.",
                    "5pm: Private rowing at Ooty Lake — skip the pedal boats, hire the full rowboat (₹300/hour) for the far end of the lake away from the crowds.",
                    "7pm: Dinner at Willy's Coffee Pub or Hyderabad Biryani House — both are local institutions. ₹800–₹1,500 for two."
                  ]}
                  cost="₹4,000–₹6,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Doddabetta Sunrise + Private Tea Estate + Pykara + Pine Forest"
                  items={[
                    "5:30am: Private cab to Doddabetta Peak. At 6am you are above the clouds — this is the premium experience that no amount of money buys after 9am when the mist lifts.",
                    "8am: Private tea estate tour — arrange through your hotel for a visit to a working Nilgiri tea estate (not the tourist factories). See the full process, taste 5–6 varieties. ₹1,500–₹2,500 per couple.",
                    "11am: Drive to Pykara Lake. Book a private boat through the tourism department — ₹500, and you get the lake to yourself on weekday mornings.",
                    "1pm: Lunch at a viewpoint restaurant on the Pykara road — several small places with valley views. ₹600–₹1,000 for two.",
                    "3pm: Pine Forest walk — 45 minutes in cathedral-like eucalyptus and pine plantations. Your driver knows the quiet entrances.",
                    "5pm: Return via the 9th Mile Shooting Point. Tea at a roadside stall with possibly the best view-per-rupee in India.",
                    "7:30pm: Dinner at Gem Restaurant for classic Nilgiri cuisine or place of your choice. ₹1,000–₹1,800 for two."
                  ]}
                  cost="₹5,000–₹8,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Coonoor Heritage + Sim's Park + Lamb's Rock + Departure"
                  items={[
                    "8am: Drive to Coonoor. Stop at every viewpoint the driver suggests — the ghat road between Ooty and Coonoor is one of the most scenic drives in South India.",
                    "9am: Sim's Park — a quiet, impeccably maintained Japanese-style botanical garden. Far more peaceful than Ooty's version.",
                    "10:30am: Lamb's Rock — bring binoculars if you have them. The Coimbatore plains stretch to the horizon on clear days.",
                    "11:30am: Dolphin's Nose viewpoint for the Catherine Falls panorama. The best waterfall view in the Nilgiris — and you don't have to hike to it.",
                    "1pm: Lunch at The Grub, Coonoor — charming cafe with a garden. Or La Belle Vie for French-Nilgiri fusion. ₹1,200–₹2,000 for two.",
                    "3pm: TATA Tea Museum (₹20). The only tea museum worth your time in the Nilgiris. 45 minutes.",
                    "4pm: Depart via Mettupalayam road to Coimbatore (2.5hrs) or private transfer to Coimbatore airport."
                  ]}
                  cost="₹3,000–₹5,000 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) · </span>
                  <span className="font-serif text-base text-ink font-light">₹18,000–₹35,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">👨‍👩‍👧‍👦 Family</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,500–₹3,600", "₹6,000–₹12,000", "₹15,000–₹30,000"],
                    ["🍽 Food & Drinks", "₹900–₹1,500", "₹2,500–₹4,500", "₹4,000–₹7,000"],
                    ["🚗 Transport", "₹500–₹800", "₹3,000–₹5,000", "₹5,000–₹8,000"],
                    ["🎯 Activities & Entry", "₹300–₹500", "₹800–₹1,500", "₹2,000–₹4,000"],
                    ["🚂 Toy Train", "₹30–₹300", "₹120–₹1,200", "₹600–₹1,200"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹5,000–₹7,000/pp","₹8,000–₹18,000/4pax","₹18,000–₹35,000/2pax"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Ooty is remarkably affordable once you skip the tourist traps — a heritage hill station experience for less than a weekend in Goa.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Ooty"
            hotels={[
              { name: "Zostel Ooty", type: "Budget Hostel · Charing Cross", price: "From ₹600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-ooty.html?aid=2820480" },
              { name: "Sterling Ooty Elk Hill", type: "Resort · Elk Hill", price: "From ₹4,500/night", rating: "4", badge: "Family pick", url: "https://www.booking.com/hotel/in/sterling-ooty-elk-hill.html?aid=2820480" },
              { name: "The Savoy - IHCL", type: "Heritage Luxury · 1829", price: "From ₹9,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/hotel/in/the-savoy-ooty.html?aid=2820480" },
            ]}
            activities={[
              { name: "Nilgiri Mountain Railway Full Journey", duration: "5 hours", price: "From ₹300/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=ooty&partner_id=PSZA5UI" },
              { name: "Ooty Tea Estate Guided Tour", duration: "3 hours", price: "From ₹800/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=ooty&partner_id=PSZA5UI" },
              { name: "Doddabetta Peak Sunrise Trip", duration: "3 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=ooty&partner_id=PSZA5UI" },
              { name: "Pykara Falls & Lake Boat Ride", duration: "Half day", price: "From ₹600/person", url: "https://www.getyourguide.com/s/?q=ooty&partner_id=PSZA5UI" },
            ]}
            pdfProductId="ooty-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Ooty — Must-See Places"
            subtitle="Click each thumbnail to explore the Nilgiris' most beautiful spots."
            spots={[
              { name: "Nilgiri Mountain Railway",  query: "nilgiri mountain railway toy train bridge blue sky landscape scenery",  desc: "UNESCO World Heritage railway built in 1908. The Mettupalayam to Ooty run passes through 208 curves, 16 tunnels and 250 bridges across tea-covered hills." },
              { name: "Botanical Gardens",          query: "ooty botanical gardens green lawn tropical plants landscape wide",        desc: "22-hectare garden established in 1848 with over 1,000 plant species, a 20-million-year-old fossilised tree trunk, and the annual flower show in May." },
              { name: "Doddabetta Peak",            query: "doddabetta peak nilgiri hills misty morning clouds mountain viewpoint",  desc: "Highest point in the Nilgiris at 2,637m. Come at dawn when clouds sit below you — an experience no photograph can capture." },
              { name: "Pykara Falls",               query: "pykara waterfalls ooty nilgiri forest green nature cascade",             desc: "Twin waterfalls surrounded by dense shola forest. Best visited September to December after the monsoon when the water volume is at its peak." },
              { name: "Tea Plantations",            query: "nilgiri tea plantation rows green hills landscape wide angle scenic",     desc: "The Nilgiris produce some of India's finest teas. Walk through the emerald rows at any estate — the high-altitude first flush is world-class." },
            ]}
          />

          {/* ── TEA PLANTATION IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="nilgiri tea plantation ooty hills green scenic landscape"
              fallback="https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?w=900&q=80"
              alt="Nilgiri tea plantation rows stretching across green hills"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Nilgiri tea estates at 2,000m — buy loose leaf directly from the factory for ₹200–₹400. The same tea costs ₹800+ in city shops.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting April–June (peak season)", desc: "Ooty in April-May is a traffic nightmare — 30,000 tourists descend on a town built for 3,000. Go in September when the hills are emerald green and you can actually breathe.", icon: "📅" },
                { title: "Skipping the toy train", desc: "The Nilgiri Mountain Railway IS the Ooty experience. People who drive up and skip it miss the single best thing about the trip. Book 2 weeks ahead on IRCTC.", icon: "🚂" },
                { title: "Paying for highway tea factory tours", desc: "Skip the commercial 'tea factory tours' on the highway — go to the TATA tea museum in Coonoor for the real deal. ₹20 entry vs ₹200 for a sales pitch.", icon: "🍵" },
                { title: "Reaching Doddabetta after 9am", desc: "Tour buses arrive at 10am. By then the clouds have lifted, the magic is gone, and you're standing in a queue for the telescope house. Go at 6am or don't go.", icon: "🌄" },
                { title: "Staying only in Ooty town", desc: "Ooty town is congested and commercial. Coonoor is 19km away — quieter, better homestays, valley views. At minimum, give Coonoor a full day.", icon: "🏘" },
                { title: "Not carrying layers", desc: "Ooty is at 2,240m. It's 8–15°C in winter mornings and can drop to 2°C in December. Even in summer, evenings need a jacket. Don't pack for Tamil Nadu plains.", icon: "🧥" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🚂", title: "First Class = Open Windows", desc: "The Nilgiri Mountain Railway first class costs just ₹300 more than second class. The open windows with no glass barrier are worth every paisa — you feel the mist, smell the eucalyptus, hear the wheels.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🌅", title: "Doddabetta at Dawn", desc: "Doddabetta at 6am with clouds below you is the single best view in the Nilgiris. Bring a flask of tea from your hotel. The telescope house opens at 7am but the naked-eye view is better.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🍫", title: "Chocolate Strategy", desc: "Every shop on Commercial Road sells 'homemade' chocolate. Most is factory-made with different labels. Moddy's (since 1940s) and King Star are the genuine ones. Dark chocolate bark at ₹150/250g is the best value.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍵", title: "Buy Tea at Source", desc: "Nilgiri first flush loose leaf tea from the factory costs ₹200–₹400 per 250g. The same tea in branded packaging in city shops costs ₹800+. Buy directly from Dodda or Coonoor estates.", color: "bg-amber-50 border-amber-200" },
                { icon: "📱", title: "Connectivity Warning", desc: "BSNL and Jio work best in Ooty. Airtel has dead zones on the Pykara road and near Avalanche. Download offline Google Maps for the Nilgiris before you arrive.", color: "bg-purple-50 border-purple-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Sep–Nov: emerald hills, few tourists, best value | Dec–Feb: cold, clear, great trekking | Mar: warming up, still quiet | Apr–Jun: avoid — peak season chaos | Jul–Aug: heavy monsoon, roads may close", color: "bg-purple-50 border-purple-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size and budget — we&apos;ll send a personalised Ooty itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ooty Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Ooty?", a: "3 days is ideal to cover Ooty, Coonoor and the Nilgiri Mountain Railway without rushing. 2 days feels cramped because the toy train alone takes half a day. 4-5 days lets you add Kotagiri and the deeper Nilgiri hill villages." },
                { q: "What is the best time to visit Ooty?", a: "September to March is best. September-November has emerald green hills with almost no tourists. December-February is cool (5-15°C) and great for trekking. Avoid April-June — 30,000+ tourists descend on a town built for 3,000, causing traffic jams, inflated prices and zero parking." },
                { q: "How much does a 3-day Ooty trip cost?", a: "Budget: ₹5,000-₹7,000 per person including accommodation. Family of 4: ₹8,000-₹18,000 total. Premium couple: ₹18,000-₹35,000 for two. All include stay, food, transport and activities." },
                { q: "How do I book the Nilgiri toy train?", a: "Book on the IRCTC website at least 2 weeks ahead. The full Mettupalayam to Ooty run departs at 7:10am daily. First class is ₹300 extra and absolutely worth it for the open windows. If sold out, the Coonoor to Ooty segment is easier to get." },
                { q: "Is Ooty worth visiting with kids?", a: "Absolutely — it's one of the best family hill station trips. The toy train is a guaranteed hit, Ooty Lake has pedal boats, Botanical Gardens have open lawns, and chocolate shops keep everyone happy. Avoid steep treks with young kids." },
                { q: "Should I stay in Ooty or Coonoor?", a: "Coonoor is quieter, less crowded, and has better homestays with valley views. Ooty town has more restaurants and is the transport hub. Best approach: stay in Ooty for convenience but give Coonoor a full day. If you prefer peace over convenience, base in Coonoor." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer South India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: true },
                { label: "Goa — 3 Day Beach Itinerary", href: "/blog/goa-3-days", soon: false },
                { label: "Coorg — Coffee Country Guide", href: "/blog/coorg-3-days", soon: true },
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

          <CombineWith currentSlug="ooty-3-days" />
          <RelatedGuides currentSlug="ooty-3-days" />
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
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
