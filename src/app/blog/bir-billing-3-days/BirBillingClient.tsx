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

const BIR_TOC = [
  { id: "decision",          emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights",        emoji: "🏔️", label: "Why Bir Billing?" },
  { id: "itinerary",         emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",            emoji: "💰", label: "Budget Breakdown" },
  { id: "paragliding-guide", emoji: "🪂", label: "Paragliding Guide" },
  { id: "food",              emoji: "🥟", label: "Food & Tibetan Colony" },
  { id: "mistakes",          emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",              emoji: "💡", label: "Pro Tips" },
  { id: "faq",               emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bir Billing 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Bir Billing in 3 Days — Paragliding, Tibetan Colony & Barot Valley&url=${pageUrl}` },
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
export default function BirBillingClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BIR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bir Billing" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bir billing paragliding himachal pradesh india valley mountains"
            alt="Paraglider soaring over the pine-forested Bir Billing valley in Himachal Pradesh"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bir Billing 3 Days</span>
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
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bir Billing in 3 Days: India&apos;s Paragliding Capital
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Launch from 2,400m at Billing, land in a Tibetan monastery town below. The World Paragliding Championship venue. Budget from ₹3,000/day including the flight.
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
              <span>🇮🇳 Himachal Pradesh</span>
              <span>{"·"}</span>
              <span>🗓 3 Days</span>
              <span>{"·"}</span>
              <span>💰 From ₹3,000/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bir is the landing site at 1,400m. Billing is the launch site at 2,400m. They are 14km apart on the same mountain road. You take a taxi up, run off a cliff, and spend the next 30–60 minutes in silence above pine valleys before landing in a Tibetan refugee colony that has barely changed since the 1960s.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🪂", label: "First-Time Flyer", sub: "₹3,000–₹5,000/day", desc: "Tandem flight + basic guesthouse + Tibetan food", color: "border-amber-200 hover:border-amber-400", id: "paragliding-guide" },
                { emoji: "🏔️", label: "Repeat Adventurer", sub: "₹4,000–₹7,000/day", desc: "Long thermal ride + cross-country + Barot Valley", color: "border-teal-200 hover:border-teal-400", id: "itinerary" },
                { emoji: "📷", label: "Photography Seeker", sub: "₹3,500–₹6,000/day", desc: "GoPro flight + monastery circuit + Billing sunrise", color: "border-emerald-200 hover:border-emerald-400", id: "highlights" },
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

          {/* ── WHY BIR BILLING ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏔️"} Why Bir Billing?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bir Billing is not a paragliding theme park. It is a World Paragliding Championship venue with thermals that rival the Alps, set above a genuine Tibetan refugee colony that most adventure tourists never properly explore. Here is what you are actually getting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "The Flying Side", emoji: "🪂", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [
                    ["Launch site", "Billing — 2,400m altitude"],
                    ["Landing site", "Bir — 1,400m (14km lower)"],
                    ["Tandem flight", "₹2,500–₹6,000 (20–90 mins)"],
                    ["Best thermals", "10am–2pm daily"],
                  ],
                  note: "The morning taxi to Billing takes 40 minutes on a winding road. The silence when you leave the mountain is unlike anything else."
                },
                {
                  title: "The Cultural Side", emoji: "🏯", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [
                    ["Colony history", "Tibetan refugees settled 1960s"],
                    ["Monasteries", "Chokling, Palpung Sherabling"],
                    ["Food", "Momos ₹60–80, thukpa ₹80"],
                    ["Character", "Genuine, not touristy"],
                  ],
                  note: "Most paragliding tourists never leave the landing field. Chokling Monastery and the walk through the colony takes two hours and is extraordinary."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
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
                { name: "Billing Launch Site (2,400m)", detail: "The World Paragliding Championship launch point. Taxi from Bir ₹300–400 one way, 40–50 minute steep winding drive. The valley drops 1,000m immediately below you when you launch.", tag: "Paragliding", color: "border-amber-200 bg-amber-50" },
                { name: "Bir Tibetan Colony", detail: "Genuine Tibetan refugee colony established in the 1960s. Monks in maroon robes, Tibetan bakeries, thangka painters. Not staged for tourists — people actually live here.", tag: "Culture", color: "border-orange-200 bg-orange-50" },
                { name: "Chokling Monastery", detail: "Active Nyingma tradition monastery in the heart of the Tibetan Colony. The courtyard debating at 3pm is worth timing your visit around.", tag: "Spiritual", color: "border-yellow-200 bg-yellow-50" },
                { name: "Palpung Sherabling Monastery", detail: "Larger monastery 3km from Bir — seat of the Kagyu lineage. Monks debate in the courtyard at 3pm daily. The main hall frescoes are extraordinary.", tag: "Spiritual", color: "border-yellow-200 bg-yellow-50" },
                { name: "Barot Valley (45km)", detail: "Narrow gorge road to a pristine valley at 1,600m on the Uhl River. Trout fishing ₹200/rod. Camping near the river. Almost no tourists.", tag: "Nature", color: "border-teal-200 bg-teal-50" },
                { name: "Rajgundha Trek (16km one way)", detail: "High alpine meadow at 3,100m — no vehicles, basic camping. The forest section between Bir and Rajgundha is untouched. Experienced trekkers only.", tag: "Trekking", color: "border-emerald-200 bg-emerald-50" },
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
            <StatCard icon={"🗓️"} label="Best Time" value="Mar–Jun, Sep–Nov" />
            <StatCard icon={"🪂"} label="Launch Altitude" value="2,400m (Billing)" />
            <StatCard icon={"🚌"} label="From Delhi" value="530km · 10 hrs" />
            <StatCard icon={"⏱️"} label="Flight Duration" value="20–90 minutes" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              All distances are from Bir Tibetan Colony unless noted. Bir is your base — not Billing.
            </p>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Bir · Tibetan Colony · Monasteries · First Evening"
                items={[
                  "Arrive by afternoon — most HRTC overnight buses from Delhi reach Bir or Baijnath (5km) by 6–7am; rest the first morning.",
                  "Check into a guesthouse in Bir's Tibetan Colony — this is the only area worth staying in. Basic clean rooms ₹400–900/night. Avoid the new hotels near the landing field which have no character.",
                  "The Tibetan Colony: genuine Tibetan refugee community that settled here in the 1960s after fleeing Tibet. The colony is not a museum — people live, work, and pray here. Walk slowly and respectfully.",
                  "Chokling Monastery (10-minute walk from the colony centre): active Nyingma monastery with a magnificent painted main hall. Morning prayers at 5:30am are extraordinary if you can wake for them.",
                  "Palpung Sherabling Monastery (3km from Bir): seat of the Kagyu lineage in India. Large, active monastery with monks who often debate in the main courtyard at 3pm. The 3pm session is worth timing your day around.",
                  "Evening: walk through Bir Bazaar — small but real. Try dinner at any of the Tibetan dhabas along the main colony road. Momos ₹60–80 per plate (steamed, not fried). Thukpa ₹80 (Tibetan noodle soup with vegetables or meat). Butter tea ₹30 — an acquired taste but have at least one cup.",
                  "Confirm your paragliding booking for Day 2 — call the Bir Billing Paragliding Association (BBPA) office or visit their registered operators in the colony. Book in advance, especially for weekends in season.",
                ]}
                cost="₹800–₹1,500 excluding accommodation" />

              <DayCard
                day="Day 2"
                title="Billing Launch Site · Tandem Paragliding · Landing · Recovery"
                items={[
                  "8:30am: Taxi to Billing launch site — ₹300–400 one way (shared taxi from the colony road), 14km, 40–50 minutes of steep winding mountain road. The views on the drive alone are worth it.",
                  "Billing (2,400m): the launch site is a large grassy slope falling away into a 1,000m drop. This is where the World Paragliding Championship has been held. International pilots know Billing.",
                  "Thermal conditions: best 10am–2pm. Thermals build as the sun heats the valley. Your pilot will know exactly when conditions are right — listen to them.",
                  "Paragliding operators: ONLY use Bir Billing Paragliding Association (BBPA) certified pilots. Their roster is available at their main office in the Tibetan Colony. Tandem flights: ₹2,500–₹3,500 for 20–30 minutes; ₹4,500–₹6,000 for a 45–60 minute thermal ride. GoPro rental ₹500.",
                  "The flight: 30-second run off the slope, then silence. You circle on thermals — the warm air columns that rise from the heated valley floor — exactly as the birds of prey do below you. The pine valleys, the Dhauladhar range, the Kangra valley far below. The landing field in Bir appears as a small patch of green 1,000m beneath you.",
                  "Cross-country option: experienced paragliders with prior XC flights can ask about XC routes — pilots from Billing have flown 60km+ in the right conditions. Declare your experience level when booking.",
                  "Non-flying option for companions: mountain bikes available in Bir ₹300/day. The 5km Bir-Billing jeep track through the forest is a good half-day route on a bicycle.",
                  "After landing: your pilot will be buzzing. You will also be buzzing. Have lunch at the colony dhabas and rest. The afternoon is yours — revisit the monastery, explore the colony bakeries.",
                ]}
                cost="₹3,500–₹7,000 including flight + taxi" />

              <DayCard
                day="Day 3"
                title="Sherab Ling Monastery · Barot Valley or Rajgundha Trek · Depart"
                items={[
                  "Morning: Sherab Ling Monastery (3km from Bir, auto ₹50–80) — this is the Palpung Sherabling complex, worth a second and slower visit. Monks debate in the courtyard at 3pm but mornings are the best for the quiet, incense-filled halls.",
                  "Barot Valley option (45km, 2 hours drive, taxi ₹600–800 return): a narrow gorge road descends into the Uhl River valley at 1,600m. Trout fishing available ₹200/rod from local operators. Camping near the river is possible. The drive alone — through oak and pine forest with the river far below — is the main event.",
                  "Rajgundha Trek option (if you want altitude): 16km one way to Rajgundha meadow at 3,100m. No vehicles beyond the trailhead. Basic camping at the meadow. This is a full-day commitment — start by 6am, reach Rajgundha by noon, return or camp overnight. Do not attempt this as a same-day return without prior trekking fitness.",
                  "Bir Billing Jeep track walk (casual option): 5km forest path from Bir towards Billing through deodar and pine — a peaceful 2-hour return walk if you want a gentle morning before departure.",
                  "Departure: most people leave Bir in the late afternoon or on the evening bus. Overnight buses to Delhi depart from Baijnath/Palampur (15–20km from Bir).",
                ]}
                cost="₹800–₹2,000 depending on Barot/Trek option" />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹9,000–₹14,000 including paragliding</span>
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
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🪂 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏔️ Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Guesthouse (3N)", "₹1,200–₹2,700", "₹4,500–₹9,000"],
                    ["🥟 Tibetan Food (3 days)", "₹540–₹900", "₹1,200–₹2,000"],
                    ["🚕 Local transport", "₹600–₹1,000", "₹1,500–₹2,500"],
                    ["🪂 Tandem paragliding", "₹2,500–₹3,500", "₹4,500–₹6,000"],
                    ["📷 GoPro rental", "₹500", "₹500"],
                    ["🏯 Monastery visits", "Free", "Free"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹9,000–₹11,000", "₹14,000–₹22,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Paragliding cost is the dominant variable — budget accordingly. Guesthouses in the Tibetan Colony are basic but clean. Mid-range options exist on the Bir-Billing road with better views but less character.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Bir Billing"
            hotels={[
              { name: "Zostel Bir", type: "Hostel · Tibetan Colony", price: "From ₹600/bed", rating: "4", badge: "Social", url: "https://www.booking.com/searchresults.en-gb.html?ss=bir+billing+hostel&aid=2820480" },
              { name: "Bir Billing Guesthouse", type: "Guesthouse · Colony Road", price: "From ₹900/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=bir+billing+guesthouse&aid=2820480" },
              { name: "Billing Camp Resort", type: "Camp · Hillside views", price: "From ₹2,500/night", rating: "4", badge: "Views", url: "https://www.booking.com/searchresults.en-gb.html?ss=bir+billing+resort&aid=2820480" },
            ]}
            activities={[
              { name: "Tandem Paragliding from Billing (30 min)", duration: "Half day", price: "From ₹2,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=bir+billing+paragliding&partner_id=PSZA5UI" },
              { name: "Extended Thermal Ride (60 min)", duration: "Half day", price: "From ₹4,500/person", badge: "Best value", url: "https://www.getyourguide.com/s/?q=bir+billing+thermal+paragliding&partner_id=PSZA5UI" },
              { name: "Monastery Walk & Tibetan Culture Tour", duration: "3 hours", price: "From ₹400/person", url: "https://www.getyourguide.com/s/?q=bir+billing+monastery+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="bir-billing-3-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Bir Billing — Must-See Places"
            subtitle="Click each thumbnail to explore the launch site, Tibetan Colony, and Barot Valley."
            spots={[
              { name: "Billing Launch Site", query: "billing paragliding launch site himachal pradesh mountains altitude", desc: "The World Paragliding Championship launch site at 2,400m. A wide grassy slope that drops 1,000m immediately. International pilots consider Billing thermals among the best in Asia." },
              { name: "Bir Tibetan Colony", query: "bir tibetan colony himachal pradesh monastery monks maroon robes", desc: "Genuine Tibetan refugee colony from the 1960s — active monasteries, Tibetan bakeries, thangka painters. The most authentic Tibetan culture outside Lhasa in India." },
              { name: "Chokling Monastery", query: "chokling monastery bir tibetan buddhist monastery himachal", desc: "Active Nyingma monastery in the heart of the colony. The painted main hall and early morning prayers are the highlight of Bir's cultural circuit." },
              { name: "Paragliding Landing Field", query: "bir billing paragliding landing field valley green meadow himachal", desc: "The broad landing field in Bir where all flights from Billing arrive. The 25–60 minute flight ends here with a gentle running landing in the meadow." },
              { name: "Barot Valley", query: "barot valley himachal pradesh gorge uhl river mountain forest", desc: "A pristine valley 45km from Bir on a narrow gorge road. Trout fishing, river camping, and almost no tourists. One of Himachal's best-kept secrets." },
            ]}
          />

          {/* ── INLINE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tibetan monastery bir himachal prayer flags monks courtyard"
              alt="Tibetan Buddhist monastery in Bir Billing with colourful prayer flags and monks"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Palpung Sherabling Monastery — the seat of the Kagyu lineage in India, 3km from Bir. The 3pm monks&apos; debate in the courtyard is one of the most compelling things to witness in Himachal Pradesh.
              </p>
            </div>
          </div>

          {/* ── PARAGLIDING SAFETY GUIDE ── */}
          <section id="paragliding-guide" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🪂"} The Complete Paragliding Guide</h2>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3 flex items-center gap-2">
                  {"🛡️"} Safety First — Certified Pilots Only
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Who to book with:</strong> Bir Billing Paragliding Association (BBPA) — the only officially certified body at Bir Billing. Their registered pilots hold BHPA (British Hang Gliding and Paragliding Association) or equivalent certification.</p>
                  <p><strong className="text-ink">Where to find them:</strong> BBPA office in the Tibetan Colony, Bir. Walk-in welcome, or call ahead in peak season.</p>
                  <p><strong className="text-ink">Never book through:</strong> WhatsApp strangers, roadside touts, random travel agents without showing BBPA certification. There are unlicensed operators with old, unserviced equipment. This is not a theoretical risk.</p>
                  <p><strong className="text-ink">Weather check:</strong> Ask your pilot directly — wind above 30km/h means no flight. Thermals in the morning before 10am are weak (cold air, no thermals). Best flying window: 10am–2pm.</p>
                  <p><strong className="text-ink">What to wear:</strong> Billing is cold even in May — the wind chill during flight at 2,400m+ can be brutal. Wear a jacket, long trousers, and closed shoes. Do not wear sandals or open footwear for the launch run.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3 flex items-center gap-2">
                  {"🎯"} Choosing Your Flight Duration
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Standard tandem (20–30 min) — ₹2,500–₹3,500:</strong> The basic package. You launch from Billing, pilot flies a direct-ish route to Bir with some gentle circling. Covers the basics. Good for first-timers.</p>
                  <p><strong className="text-ink">Thermal ride (45–60 min) — ₹4,500–₹6,000:</strong> The pilot works the thermal columns to gain altitude, circle above the ridgeline, and give you the full Billing experience. This is what the serious paragliders come for. Highly recommended over the short package.</p>
                  <p><strong className="text-ink">Cross-country flights (60km+):</strong> For experienced paragliders with prior XC flights. Declare your experience level when booking. The Billing valley connects to extensive XC routes. Pilots here are among India&apos;s best XC flyers.</p>
                  <p><strong className="text-ink">GoPro footage:</strong> ₹500 rental from most operators. The footage is good — the pilot knows where to point it. Worth it for a first flight.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── FOOD SECTION ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🥟"} Tibetan Food & Bir Colony</h2>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
              <h3 className="font-serif text-lg text-orange-800 mb-4">What to Eat in Bir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { dish: "Momos", price: "₹60–80/plate", desc: "Steamed dumplings — beef or vegetable. The colony standard. Never order fried momos here." },
                  { dish: "Thukpa", price: "₹80–100", desc: "Tibetan noodle soup with vegetables or meat. The correct post-flight recovery meal." },
                  { dish: "Tsampa", price: "₹50–70", desc: "Roasted barley flour mixed with butter tea. Acquired taste but genuinely Tibetan." },
                  { dish: "Butter Tea (Po cha)", price: "₹30–40/cup", desc: "Salt tea churned with yak butter. Have at least one cup. It is polarising but authentic." },
                  { dish: "Tibetan Bread (Tingmo)", price: "₹40–50", desc: "Steamed bread — eaten with dal or curries. The colony bakeries make fresh batches each morning." },
                  { dish: "Balep (Tibetan flatbread)", price: "₹30–40", desc: "Pan-fried flatbread eaten with vegetables or meat. Breakfast staple in the colony." },
                ].map((item) => (
                  <div key={item.dish} className="bg-white/60 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium text-sm text-ink">{item.dish}</p>
                      <span className="text-xs text-amber-700 font-medium">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-parchment/60 border border-parchment-2 rounded-xl p-5">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The Colony circuit:</strong> The Tibetan Colony in Bir is the main cultural asset of the town — and the reason Bir is worth visiting even if you do not fly. Walk the colony road from the monastery end to the market end in the late afternoon when monks are returning from the day&apos;s sessions. The bakeries near Chokling Monastery make fresh bread from 7am. The thangka painting workshops are open most mornings and painters are happy to talk (but not always happy to be photographed without permission — ask first).
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking through uncertified operators", desc: "The most serious mistake at Bir Billing. There are unlicensed operators with used, unserviced paragliding equipment offering the same prices as BBPA certified pilots. The difference is not visible from the outside. Only book through the BBPA roster — ask to see the pilot's certification card before paying anything.", icon: "⛔" },
                { title: "Going July–August monsoon", desc: "The Billing road becomes a dangerous landslide zone in monsoon. Paragliding is impossible. The Tibetan Colony flooding is possible. The season is effectively October onwards with a window in March–June. July–August is a clear 'do not go' for Bir Billing.", icon: "🌧️" },
                { title: "Missing the Tibetan Colony", desc: "Most paragliding tourists arrive, fly, eat momos, and leave. The monastery circuit — Chokling, Palpung Sherabling, the colony walk — is the other half of Bir's value. Budget 3–4 hours for it on Day 1.", icon: "🏯" },
                { title: "Arriving Friday and expecting to fly Saturday", desc: "Weekends in season (October–March) are peak. Certified pilots are booked solid. Book paragliding 3–5 days ahead during October–November and March–April. Midweek is easier to arrange on shorter notice.", icon: "📅" },
                { title: "Not dressing for altitude cold", desc: "It is cold at Billing even in May. The launch site is at 2,400m and the wind chill during a thermal flight can drop the felt temperature to near 0°C. Bring a jacket — tell your pilot you want one if you did not pack one. Cold hands during the run-up makes a bad launch.", icon: "🧥" },
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
                { icon: "⏰", title: "Aim for the 11am Flight Window", desc: "Thermals at Billing peak between 10am and 2pm. An 11am launch gives you the strongest lift for a long thermal ride. Early morning flights (before 10am) have weak thermals and shorter durations — pay for extra time but don't get it.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏯", title: "Visit Sherab Ling at 3pm", desc: "The monks' debate session at Palpung Sherabling Monastery happens at 3pm. This is not a performance for tourists — it is the daily educational session. Sit quietly at the edge of the courtyard and observe. Arrive 10 minutes early.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌅", title: "Sunrise at Billing is Extraordinary", desc: "Hire a private taxi the evening before and arrange to go up to Billing before sunrise (4:30am departure). The Dhauladhar and Kullu peaks at dawn above a cloud inversion in the valley is a serious photography moment.", color: "bg-teal-50 border-teal-200" },
                { icon: "📶", title: "Download Offline Maps Before Arriving", desc: "Phone signal is weak in Bir Colony and absent on the Billing road. Download offline Google Maps for Bir Billing, Barot Valley, and Rajgundha before you arrive in Himachal Pradesh.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚂", title: "The Narrow Gauge Train to Bir is Worth It", desc: "The Kangra Valley Railway runs from Pathankot to Joginder Nagar on a 2-foot narrow gauge track. Ahju station is 3km from Bir. The train ride through tea gardens and Dhauladhar foothills is one of the finest rail journeys in India.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🎒", title: "Bir to Dharamsala Circuit", desc: "Bir is 75km from Dharamsala/McLeod Ganj — another Tibetan cultural centre. The combination of Bir Billing + Dharamsala + Triund Trek makes a 6–7 day Himachal circuit that is almost entirely road-accessible and excellent value.", color: "bg-emerald-50 border-emerald-200" },
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
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Bir Billing itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Bir Billing Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How much does paragliding cost at Bir Billing?", a: "Tandem paragliding at Bir Billing costs ₹2,500–₹3,500 for a standard 20–30 minute flight. A longer thermal ride of 45–60 minutes costs ₹4,500–₹6,000. GoPro rental is ₹500 extra. Always book through Bir Billing Paragliding Association certified pilots only — never through WhatsApp strangers or roadside agents." },
                { q: "What is the best time to visit Bir Billing for paragliding?", a: "March to June and September to November are the best months. July–August monsoon brings dangerous landslides on the Billing road and impossible flying conditions. October is peak season with the best thermals and clearest skies. March–May is also excellent with lower crowds." },
                { q: "Is Bir Billing safe for paragliding?", a: "Bir Billing is safe when using certified pilots from the BBPA roster. The safety concern is unlicensed operators with unserviced equipment — they exist and look similar to legitimate operators. Ask to see BHPA certification. Cancel if wind is above 30km/h — a certified pilot will tell you this themselves." },
                { q: "How far is Bir from Billing launch site?", a: "Bir (landing site, 1,400m) and Billing (launch site, 2,400m) are 14km apart on the same mountain road. A shared taxi costs ₹300–₹400 one way and takes 40–50 minutes on a steep winding road. Private taxis are ₹600–₹800 return." },
                { q: "How do I reach Bir from Delhi?", a: "Bir is 530km from Delhi — about 10 hours by bus or car. HRTC deluxe buses run overnight from ISBT Kashmere Gate to Baijnath (5km from Bir), arriving by 6–7am. The narrow gauge Kangra Valley Railway from Pathankot stops at Ahju station, 3km from Bir — the scenic train option." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Himachal Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dharamsala & McLeod Ganj — 3 Day Guide", href: "/blog/dharamsala-3-days" },
                { label: "Spiti Valley — 7 Day Road Trip Guide", href: "/blog/spiti-valley-7-days" },
                { label: "Chopta & Tungnath — 3 Day Trek Guide", href: "/blog/chopta-tungnath-3-days" },
                { label: "Bir Billing to Dharamsala — 1 Day Drive", href: "/blog/bir-billing-to-dharamsala" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{"View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="bir-billing-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
