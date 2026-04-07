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

const CHOPTA_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🏔️", label: "Why Chopta?" },
  { id: "itinerary",  emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "trek-guide", emoji: "🥾", label: "Tungnath Trek Guide" },
  { id: "best-time",  emoji: "🗓️", label: "Snow, Seasons & Access" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Chopta Tungnath 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Chopta & Tungnath in 3 Days — World's Highest Shiva Temple Trek&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
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
            <span className="text-lg">{"💰"}</span>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ChoptaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHOPTA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chopta & Tungnath" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tungnath temple chopta uttarakhand himalaya snow rhododendron"
            alt="Tungnath temple in winter snow with Himalayan peaks visible from Chandrashila Chopta Uttarakhand"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chopta & Tungnath 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chopta & Tungnath in 3 Days: The World&apos;s Highest Shiva Temple
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Trek to a 1,000-year-old stone temple at 3,680m above rhododendron forests. Summit Chandrashila at 4,130m for a 360° view of Nanda Devi, Trishul, and Kedarnath. Budget from ₹1,500/day.
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
              <span>🇮🇳 Uttarakhand</span>
              <span>{"·"}</span>
              <span>🗓 3 Days</span>
              <span>{"·"}</span>
              <span>💰 From ₹1,500/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Chopta is a tiny cluster of dhabas at 2,700m in Uttarakhand — five or six buildings on a meadow, cold at night even in June, no ATM for 20km. From this meadow, a 3.5km path climbs through rhododendron forest to the highest Shiva temple in the world. Above the temple, 1km further, is Chandrashila — 4,130m, and one of the most complete Himalayan panoramas I have seen from a trail this accessible.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🥾", label: "Solo Trekker", sub: "₹1,500–₹2,500/day", desc: "Dhaba stay + self-guided trek + Deoria Tal camp", color: "border-amber-200 hover:border-amber-400", id: "itinerary" },
                { emoji: "🙏", label: "Spiritual Pilgrim", sub: "₹2,000–₹4,000/day", desc: "Tungnath darshan + Kedarnath detour + Ukhimath", color: "border-teal-200 hover:border-teal-400", id: "trek-guide" },
                { emoji: "📷", label: "Landscape Photographer", sub: "₹3,000–₹5,000/day", desc: "Deoria Tal sunrise + snow Chandrashila + Himalayan views", color: "border-emerald-200 hover:border-emerald-400", id: "highlights" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY CHOPTA ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏔️"} Why Chopta & Tungnath?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Chopta is called &apos;the Mini Switzerland of Uttarakhand&apos; by tourist boards — which tells you nothing useful. What it actually is: a high meadow base for the most rewarding 3.5km trek in Uttarakhand, a pristine reflection lake 3km away, and a window into the Kedarnath-range wildlife corridor that most visitors never reach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "The Trek Side", emoji: "🥾", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [
                    ["Trek distance", "3.5km each way from Chopta"],
                    ["Elevation gain", "1,000m (Chopta to Chandrashila)"],
                    ["Tungnath altitude", "3,680m — world's highest Shiva temple"],
                    ["Chandrashila", "4,130m — 360° Himalayan panorama"],
                  ],
                  note: "Start by 6:30am. Afternoon clouds typically close in by 1–2pm and the Chandrashila view disappears completely. This is the single most important timing rule."
                },
                {
                  title: "The Nature Side", emoji: "🌿", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [
                    ["Deoria Tal", "2,438m mirror lake, 3km from Sari village"],
                    ["Rhododendrons", "Blood red and pink bloom in April"],
                    ["Wildlife", "Himalayan monal, musk deer (dawn sightings)"],
                    ["Season", "Apr–Jun green; Oct clearest sky"],
                  ],
                  note: "Deoria Tal at dusk reflects the full Chaukhamba massif on still evenings. It is slightly off the Chopta road but do not skip it."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-28 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚠️"} {area.note}</p>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Tungnath Temple (3,680m)", detail: "The highest Shiva temple in the world — ancient stone structure believed to be 1,000+ years old. Open April to November. Pujari lives here for 6 months a year. Darshan ₹50 donation. The silence at 3,680m is extraordinary.", tag: "Spiritual", color: "border-yellow-200 bg-yellow-50" },
                { name: "Chandrashila Summit (4,130m)", detail: "1km above Tungnath, 4,130m summit with 360° view — Nanda Devi (7,816m), Trishul (7,120m), Kedarnath range, Gangotri range. One of the finest viewpoints in Uttarakhand accessible on a day hike.", tag: "Trekking", color: "border-amber-200 bg-amber-50" },
                { name: "Deoria Tal (2,438m)", detail: "Reflection lake in Sari village — the Chaukhamba massif (7,138m) mirrors perfectly on still evenings. 3km trek from Sari village. Forest camping ₹200–₹300/tent per night. Sunset and dawn are the prime times.", tag: "Nature", color: "border-teal-200 bg-teal-50" },
                { name: "Ukhimath", detail: "20km before Chopta — winter seat of Kedarnath deity. Beautiful old temple complex where the Kedarnath idol is kept October–April when the main shrine is snowbound. Worth a 30-minute stop.", tag: "Heritage", color: "border-orange-200 bg-orange-50" },
                { name: "Kanchula Korak Musk Deer Sanctuary", detail: "3km from Chopta — musk deer breeding centre. Dawn walks in the surrounding forest give near-guaranteed Himalayan monal pheasant sightings. Musk deer are elusive but present.", tag: "Wildlife", color: "border-emerald-200 bg-emerald-50" },
                { name: "Dugalbitta Meadow (3,291m)", detail: "5km from Chopta — panoramic meadow quieter than Tungnath. Good alternative viewpoint. No crowds. Excellent for photography without the Chopta tourist traffic.", tag: "Scenic", color: "border-green-200 bg-green-50" },
              ].map((attr) => (
                <div key={attr.name} className={`rounded-xl border p-4 ${attr.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{attr.name}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-white/60 px-2 py-0.5 rounded-full text-muted uppercase tracking-wide">{attr.tag}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{attr.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓️"} label="Best Time" value="Apr–Jun, Sep–Nov" />
            <StatCard icon={"⛩️"} label="Tungnath Alt." value="3,680m" />
            <StatCard icon={"🥾"} label="Trek Distance" value="3.5km each way" />
            <StatCard icon={"🚌"} label="From Rishikesh" value="200km · 6hrs" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Chopta village (2,700m) is your base. All distances are from Chopta unless noted.
            </p>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Drive from Haridwar/Rishikesh · Ukhimath · Deoria Tal Sunset"
                items={[
                  "Drive from Haridwar or Rishikesh — 200km, 6–7 hours including stops. The route goes via Devprayag, Srinagar (Garhwal), Rudraprayag, and Ukhimath. Book a private taxi (₹2,500–₹3,500) or take a shared jeep to Ukhimath and change.",
                  "Key stop: Ukhimath (20km before Chopta) — the winter residence of the Kedarnath deity. When the main Kedarnath temple closes in November, the idol is brought here for the winter. The temple complex is old, active, and genuinely spiritual. 30-minute stop.",
                  "Detour to Deoria Tal: 2km before Chopta, turn off for Sari village. 3km trek uphill to Deoria Tal lake at 2,438m. The lake reflects the Chaukhamba massif (four peaks, highest at 7,138m) on calm evenings. Evening light on the peaks turns the water pink and orange. This detour takes 2.5–3 hours total.",
                  "Forest camping at Deoria Tal: tents available from local operators at ₹200–₹300/tent per night. Camp here tonight instead of Chopta if you want the sunrise reflection — worth it for photographers.",
                  "Or: continue to Chopta (5–6 basic dhabas with attached guesthouses, ₹400–₹900/night for a room). The altitude hits at night — 2,700m is noticeably colder than Rishikesh.",
                  "Dinner at a Chopta dhaba: dal, rice, roti, seasonal vegetables. Meals ₹80–₹150. No menu surprises. Sleep early — 6:30am start tomorrow.",
                ]}
                cost="₹800–₹1,500 excluding accommodation" />

              <DayCard
                day="Day 2"
                title="Tungnath Trek (3,680m) · Chandrashila Summit (4,130m)"
                items={[
                  "6:30am: Start trek from Chopta. The trailhead is marked from the main road. First 1km passes through rhododendron forest — blood red and pink flowers from March–May. Snow patches appear above the tree line from late October.",
                  "The Tungnath path: 3.5km, 1,000m elevation gain, well-maintained stone path with chai stalls at two points on the way up. Guide optional but useful — ₹400–₹600 from Chopta, ask at the guesthouses.",
                  "Tungnath Temple (3,680m): approximately 2.5–3 hours from Chopta at a comfortable pace. Ancient stone structure — the temple building is compact, dark inside, and extraordinary at this altitude. The pujari lives here 6 months of the year. Darshan ₹50 donation. Spend 20–30 minutes here.",
                  "Chandrashila summit (4,130m): 1km further above Tungnath, steeper rocky trail, 30–45 minutes from the temple. The summit cross-structure is visible from below. The view from the top: Nanda Devi (7,816m) to the east, Trishul (7,120m), the full Kedarnath range to the north, Gangotri range to the northeast. One of the most complete Himalayan panoramas from a trail this accessible.",
                  "Return: aim to leave Chandrashila by 11:30am at the latest. Afternoon clouds roll in from the south and the valley fills — the summit views are gone by 2pm most days.",
                  "Back at Chopta by 1–2pm: rest, hot food, recovery. The total climb-and-descent takes 5–7 hours at a comfortable pace.",
                  "If energy allows: sunset walk to Dugalbitta meadow (5km from Chopta, 3,291m) — panoramic meadow with far fewer people than the Tungnath trail. Good evening photography spot.",
                ]}
                cost="₹500–₹900 including guide + donations" />

              <DayCard
                day="Day 3"
                title="Kanchula Korak · Dugalbitta · Drive Return via Rudraprayag"
                items={[
                  "5:30am (optional): dawn walk around Chopta meadow and towards Kanchula Korak Sanctuary (3km). The Himalayan monal pheasant — Uttarakhand's state bird, brilliantly iridescent — is almost guaranteed in the forest near Chopta at dawn. Musk deer possible. Bring binoculars.",
                  "Kanchula Korak Musk Deer Sanctuary (3km from Chopta): small sanctuary with a musk deer breeding programme. Free entry. The surrounding forest walk at dawn is the best wildlife experience in the Chopta area.",
                  "9am: Dugalbitta viewpoint (5km from Chopta): a broad open meadow at 3,291m with clear Himalayan views. Quieter than the Tungnath trail. Good for a slow morning walk before the drive.",
                  "Drive return: 200km to Rishikesh/Haridwar. Optional stop at Rudraprayag confluence — where the Alaknanda and Mandakini rivers meet. A significant confluence in Garhwal pilgrimage geography. 10-minute stop.",
                  "Optional detour to Kartik Swami Temple (25km before Rudraprayag from Chopta): hilltop Kartik (Murugan) temple with excellent views of Kedarnath range from the approach trail — 1km steep climb, worth it.",
                  "Reach Rishikesh by early evening.",
                ]}
                cost="₹400–₹800 excluding transport" />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹4,000–₹7,000 budget · ₹9,000–₹14,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🥾 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏔️ Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,200–₹2,700", "₹6,000–₹12,000"],
                    ["🍽️ Dhaba Food (3 days)", "₹720–₹1,350", "₹1,800–₹3,500"],
                    ["🚕 Transport (Rishikesh return)", "₹800–₹1,500", "₹2,500–₹4,000"],
                    ["🥾 Trek guide (optional)", "₹400–₹600", "₹600–₹1,000"],
                    ["⛺ Deoria Tal camping", "₹200–₹400", "₹1,500–₹3,000"],
                    ["🏛️ Tungnath donation + permits", "₹100–₹200", "₹200–₹500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹4,000–₹7,000", "₹12,600–₹24,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. No permit required for Tungnath trek. Transport is the largest variable — shared jeep from Rishikesh to Ukhimath costs ₹400–600 per person but requires onward local arrangement. Private taxi ₹2,500–₹3,500 is the easier option.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Chopta & Tungnath"
            hotels={[
              { name: "Tungnath Camps Chopta", type: "Camping Resort · 2,700m", price: "From ₹2,500/night", rating: "4", badge: "Best views", url: "https://www.booking.com/searchresults.en-gb.html?ss=chopta+uttarakhand+camp&aid=2820480" },
              { name: "Chopta Dhaba Guesthouse", type: "Basic Guesthouse · Chopta", price: "From ₹500/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=chopta+guesthouse&aid=2820480" },
              { name: "Deoria Tal Forest Camp", type: "Forest Tent · 2,438m", price: "From ₹800/night", rating: "4", badge: "Unique", url: "https://www.booking.com/searchresults.en-gb.html?ss=deoria+tal+camping&aid=2820480" },
            ]}
            activities={[
              { name: "Tungnath–Chandrashila Guided Trek", duration: "Full day", price: "From ₹600/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=tungnath+chandrashila+trek&partner_id=PSZA5UI" },
              { name: "Deoria Tal Overnight Camp", duration: "1 night", price: "From ₹1,500/person", badge: "Photography", url: "https://www.getyourguide.com/s/?q=deoria+tal+camping+uttarakhand&partner_id=PSZA5UI" },
              { name: "Chopta to Rishikesh Transfer", duration: "6–7 hours", price: "From ₹2,500/vehicle", url: "https://www.getyourguide.com/s/?q=chopta+rishikesh+taxi&partner_id=PSZA5UI" },
            ]}
            pdfProductId="chopta-tungnath-3-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Chopta & Tungnath — Must-See Places"
            subtitle="Click each thumbnail to explore the trek, temple, summit, and reflection lake."
            spots={[
              { name: "Chandrashila Summit", query: "chandrashila summit 4130m uttarakhand himalaya panorama nanda devi", desc: "The 4,130m summit above Tungnath — a 360° panorama including Nanda Devi (7,816m), Trishul (7,120m), Kedarnath, and Gangotri ranges. One of the most complete Himalayan views from a day trek." },
              { name: "Tungnath Temple", query: "tungnath temple 3680m snow ancient stone shiva uttarakhand", desc: "The world's highest Shiva temple at 3,680m — an ancient stone structure open April–November. The silence at this altitude and the antiquity of the building are equally extraordinary." },
              { name: "Deoria Tal", query: "deoria tal reflection lake chaukhamba uttarakhand sari village sunset", desc: "The reflection lake at 2,438m. On still evenings the Chaukhamba massif (7,138m) mirrors perfectly in the water. Forest camping is available for sunrise shots." },
              { name: "Rhododendron Forest Trail", query: "rhododendron forest trek chopta uttarakhand april pink red flowers", desc: "The trail from Chopta to Tungnath passes through dense rhododendron forest — blood red and pink blooms from March to May make this one of the most colourful high-altitude treks in Uttarakhand." },
              { name: "Himalayan Monal", query: "himalayan monal pheasant bird uttarakhand forest iridescent colours", desc: "Uttarakhand's state bird and one of the world's most beautiful pheasants. Near-guaranteed sighting in the forests around Chopta and Kanchula Korak at dawn." },
            ]}
          />

          {/* ── TREK IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="chopta meadow uttarakhand himalaya snow mountains morning mist"
              alt="Chopta meadow at dawn with snow-covered Himalayan peaks visible above the treeline Uttarakhand"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Chopta meadow at dawn — the base village sits at 2,700m and the Himalayan ridgeline is visible on clear mornings before the clouds build. The Tungnath trailhead is 5 minutes walk from the main road.
              </p>
            </div>
          </div>

          {/* ── TREK GUIDE ── */}
          <section id="trek-guide" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🥾"} The Tungnath Trek — Complete Guide</h2>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Trail Facts</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Distance:</strong> 3.5km each way from Chopta trailhead (7km round trip). Add 2km for Chandrashila summit.</p>
                  <p><strong className="text-ink">Elevation gain:</strong> 1,000m (Chopta 2,700m to Chandrashila 4,130m). The Tungnath section (3,680m) accounts for 980m.</p>
                  <p><strong className="text-ink">Trail condition:</strong> Well-maintained stone-paved path for the first 2km. Rocky trail above the tree line. No route-finding required.</p>
                  <p><strong className="text-ink">Duration:</strong> 3 hours up to Tungnath at a comfortable pace. 45 minutes more to Chandrashila. 2–2.5 hours down. Total: 5–7 hours.</p>
                  <p><strong className="text-ink">Permit:</strong> No trekking permit required. Entry to the Tungnath Temple is open — small donation ₹50 is customary.</p>
                  <p><strong className="text-ink">Guide:</strong> Optional — path is clear and well-marked. A local guide (₹400–₹600/day from Chopta guesthouses) adds context to the forest, wildlife, and temple history.</p>
                  <p><strong className="text-ink">What to carry:</strong> 2L water (refillable at chai stalls on the way up), packed food, warm jacket (3,680m is cold even in June), trekking shoes essential (not sandals).</p>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Snow Trek Tips (April–May)</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Snow presence:</strong> Snow patches from 3,200m upwards until late May. The Chandrashila summit can be fully snow-covered in April.</p>
                  <p><strong className="text-ink">Microspikes:</strong> Strongly recommended for April snow treks. Available to rent in Ukhimath (₹150–200/day) or bring your own. Trekking poles also useful.</p>
                  <p><strong className="text-ink">April rhododendrons in snow:</strong> The combination of red rhododendron bloom and snow patches above 3,000m is extraordinary — April is arguably the most beautiful month on this trail.</p>
                  <p><strong className="text-ink">Temple in snow:</strong> Tungnath temple is unmistakably beautiful when surrounded by snow. The stone structure, prayer flags, and white mountains behind it are the defining Chopta image.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── BEST TIME ── */}
          <section id="best-time" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🗓️"} Snow, Seasons & Road Access</h2>
            <div className="space-y-3">
              {[
                { month: "April–May", condition: "Road opens ~3rd week April", desc: "Rhododendrons in full bloom. Snow on trail above 3,200m. Microspikes recommended. Temperature at Chopta: 5–15°C day, 0–5°C night. Best combination of colour and snow landscape.", color: "bg-pink-50 border-pink-200" },
                { month: "June", condition: "Road open, green meadows", desc: "The rhododendron bloom is over but the meadows turn intensely green. Temperature at Chopta: 12–20°C. Afternoon clouds are frequent. Start trek by 6:30am without exception.", color: "bg-green-50 border-green-200" },
                { month: "July–August", condition: "Monsoon — road usually open", desc: "Heavy rainfall. Trails can be slippery. Leeches present in the lower forest section. Deoria Tal is full and beautiful but the trek is wet. Not recommended unless you're comfortable with rain.", color: "bg-blue-50 border-blue-200" },
                { month: "September–October", condition: "Best sky clarity of the year", desc: "Post-monsoon, October has the clearest skies in Uttarakhand. Himalayan views from Chandrashila are exceptional. Temperature: 8–18°C day, 2–8°C night. This is peak season.", color: "bg-amber-50 border-amber-200" },
                { month: "November–March", condition: "Road CLOSED — no access", desc: "Heavy snowfall blocks the Chopta road from November onwards. The road does not reopen until mid-to-late April. Check current status before planning — the opening date varies by up to 4 weeks year to year.", color: "bg-red-50 border-red-200" },
              ].map((item) => (
                <div key={item.month} className={`rounded-xl border p-4 ${item.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <p className="font-medium text-sm text-ink">{item.month}</p>
                        <span className="text-[0.65rem] text-muted font-light">{item.condition}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not checking road status before visiting in winter", desc: "The Chopta road closes in November and can remain blocked until mid-April. There is no warning system — you simply arrive and find the road blocked by snow. Call a Chopta guesthouse (numbers available online) 24 hours before departing Rishikesh.", icon: "❄️" },
                { title: "Starting the Tungnath trek after 9am", desc: "Afternoon clouds roll in from the south every day from around noon–1pm. A 9am start gets you to Chandrashila at 1pm — in cloud. A 6:30am start gets you to the summit by 10:30am in clear conditions. This is the single most important timing rule at Chopta.", icon: "⏰" },
                { title: "Not spending a night at Chopta before trekking", desc: "Coming from Delhi or Rishikesh (200m) directly to Chandrashila (4,130m) in one day is possible but invites altitude sickness. Spend one night at Chopta (2,700m) first. Even one night of acclimatization makes the summit noticeably easier.", icon: "🏔️" },
                { title: "Expecting Chopta to have facilities", desc: "There is one ATM in Ukhimath 20km away. Phone signal in Chopta is weak. Carry enough cash for your full stay before reaching Chopta. Inform family of your itinerary. Do not rely on Google Maps for real-time navigation past Ukhimath.", icon: "📱" },
                { title: "Skipping Deoria Tal", desc: "Deoria Tal is slightly off the direct Chopta route (3km trek from Sari village, 2km before Chopta) and most visitors skip it. This is a mistake. The evening reflection of Chaukhamba in the lake is one of the finest landscape photographs available in Uttarakhand.", icon: "🏞️" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌄", title: "Stay at Deoria Tal for Sunrise", desc: "Camp at Deoria Tal forest camp (₹200–₹400/tent) on Day 1 evening. Wake at 5am for the sunrise reflection of Chaukhamba. This is the single best photography moment of the Chopta circuit — more so than even the Chandrashila summit at dawn.", color: "bg-amber-50 border-amber-200" },
                { icon: "🦚", title: "Dawn Walk for Himalayan Monal", desc: "Set your alarm for 5:30am on any morning at Chopta and walk quietly towards the Kanchula Korak forest section. The Himalayan monal pheasant — brilliantly iridescent blue-green-red — is almost always present in the trees at dawn. Bring binoculars.", color: "bg-amber-50 border-amber-200" },
                { icon: "🧊", title: "Rent Microspikes in Ukhimath", desc: "If visiting April–May, microspikes transform the snow sections of the Chandrashila trail from dangerous to enjoyable. Rent in Ukhimath from local trekking shops for ₹150–₹200/day. Trekking poles are available at the same shops.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛕", title: "Catch the 3pm Kedarnath Puja in Ukhimath", desc: "In winter (November–April), the Kedarnath deity resides at Ukhimath temple. The evening aarti here is atmospheric and largely attended by local pilgrims — very different from the tourist-heavy main Kedarnath shrine experience.", color: "bg-teal-50 border-teal-200" },
                { icon: "🗺️", title: "Combine with Kedarnath (5–6 Day Circuit)", desc: "Chopta and Kedarnath are 80km apart and the circuit Rishikesh → Chopta → Ukhimath → Kedarnath → Rudraprayag → Rishikesh is one of the finest 5–6 day Uttarakhand trips. Chopta's accessibility contrasts beautifully with Kedarnath's scale.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🍵", title: "The Chai Stalls on the Trail", desc: "Two fixed chai stalls operate on the Tungnath trail in season. They serve hot chai, Maggi noodles, and biscuits. The stall at roughly 3,200m is a critical warmth and energy stop on the descent. Carry biscuits and chocolate as backup in case they're closed.", color: "bg-emerald-50 border-emerald-200" },
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
              Tell us your dates, group size, and fitness level — we&apos;ll send a personalised Chopta itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Chopta Trek {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How difficult is the Tungnath trek?", a: "The Tungnath trek from Chopta is easy to moderate — 3.5km each way with 1,000m elevation gain on a well-maintained path. Most people complete the round trip in 4–5 hours. The additional 1km to Chandrashila (4,130m) is steeper and more exposed. Start by 6:30am to reach the summit before afternoon clouds." },
                { q: "When does the Chopta road open after winter?", a: "The Chopta road typically opens in the 3rd week of April. The exact date varies by up to 4 weeks depending on snowfall. Call a local guesthouse in Chopta (search for Chopta guesthouses online) before departing Rishikesh — they will know the road status in real time." },
                { q: "Is altitude sickness a concern at Chandrashila?", a: "Chopta at 2,700m and Chandrashila at 4,130m represent a significant altitude gain from Delhi (200m). Spend one night at Chopta before trekking. Walk slowly, stay well-hydrated (3L water for the trek day), and descend immediately if you develop persistent headache, vomiting, or confusion — these are AMS warning signs." },
                { q: "What is the best time to visit Chopta?", a: "April–May offers rhododendron bloom and possible snow trek. June has intense green meadows. October is the clearest sky of the year with spectacular Himalayan views. November–March the road is closed. April and October are the two peak seasons." },
                { q: "How do I reach Chopta from Rishikesh?", a: "Chopta is 200km from Rishikesh — approximately 6–7 hours by car via Devprayag, Rudraprayag, and Ukhimath. No direct bus exists. Options: hire a private taxi (₹2,500–₹3,500 return), or take a shared jeep to Ukhimath (₹300–₹400/person) and arrange local transport for the final 20km." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning an Uttarakhand Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kedarnath — Complete Pilgrimage Guide", href: "/blog/kedarnath-trek-guide" },
                { label: "Valley of Flowers — 4 Day Trek Guide", href: "/blog/valley-of-flowers-4-days" },
                { label: "Bir Billing — 3 Day Paragliding Guide", href: "/blog/bir-billing-3-days" },
                { label: "Rishikesh — 3 Day Adventure Guide", href: "/blog/rishikesh-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{"View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="chopta-tungnath-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
