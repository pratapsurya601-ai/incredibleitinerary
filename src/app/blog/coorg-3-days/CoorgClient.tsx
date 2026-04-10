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

const COORG_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Is Coorg Right for You?" },
  { id: "highlights", emoji: "🌿",  label: "Key Highlights" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "coffee",     emoji: "☕",  label: "Coorg Coffee Guide" },
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
        className="h-full bg-green-600 transition-all duration-100"
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Coorg 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Coorg+3-Day+Travel+Guide&url=${pageUrl}` },
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
          <span className="font-serif text-xl text-green-800 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-green-600 mt-1 flex-shrink-0 text-xs">{"●"}</span>
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
        <span className={`text-green-700 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function CoorgClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COORG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Coorg" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="coorg coffee plantation karnataka misty green hills western ghats"
            alt="Rolling green coffee plantations in Coorg Karnataka with mist-covered Western Ghats"
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
              <span className="text-white/70">Coorg 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-green-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Coorg in 3 Days: Coffee Estates, Abbey Falls & Trekking
                <em className="italic text-green-300"> (Complete Guide 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Karnataka&apos;s Scotland — rolling green hills, mist, elephant bathing on the Kaveri, a golden Tibetan monastery, and India&apos;s best accessible trek. The complete guide.
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
              <span>{"🇮🇳"} Karnataka</span>
              <span>{"·"}</span>
              <span>{"🗓"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹3,000/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-green-600 pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Coorg is called the Scotland of India for good reason — the same rolling hills, morning mist, and a landscape that seems permanently green. But Coorg has something Scotland does not: elephant bathing at dawn on the Kaveri river, a golden Tibetan Buddhist monastery in the middle of Karnataka, and coffee you pick yourself from the branch.
            </p>
          </blockquote>

          {/* ── IS COORG RIGHT FOR YOU ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Is Coorg Right for You?</h2>
            <p className="text-sm text-muted font-light mb-6">Understand what Coorg actually is before you book — it rewards the right expectations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Coorg IS great for",
                  emoji: "✅",
                  bg: "bg-green-50 border-green-200",
                  th: "text-green-800",
                  items: [
                    "Misty hill scenery and long drives through coffee estates",
                    "Dubare Elephant Camp — bathing elephants in the Kaveri river",
                    "Namdroling Monastery — one of India's most extraordinary Buddhist temples",
                    "Tadiandamol trek — Karnataka's highest peak, accessible day trek",
                    "Coffee culture — picking, curing, tasting fresh estate coffee",
                    "Peaceful homestays and plantation bungalows",
                  ],
                },
                {
                  title: "Coorg is NOT great for",
                  emoji: "❌",
                  bg: "bg-red-50 border-red-200",
                  th: "text-red-800",
                  items: [
                    "Beach or desert landscapes — this is dense forest and hills",
                    "Big-city nightlife — Madikeri is a small town",
                    "Monsoon sightseeing — trails are leech-heavy June–September",
                    "Day trips from Bangalore — 5–6 hours each way, pointless as a day trip",
                    "Budget street food culture — homestay meals are the standard",
                    "Wildlife spotting — go to Nagarhole/Kabini for that",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className={`rounded-xl border p-5 ${col.bg}`}>
                  <h3 className={`font-serif text-base font-normal mb-4 flex items-center gap-2 ${col.th}`}>
                    <span>{col.emoji}</span>{col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="text-xs text-muted font-light leading-relaxed flex items-start gap-2">
                        <span className={`mt-1 flex-shrink-0 ${col.th}`}>{"•"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-green-50/60 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The fundamentals:</strong> Kodagu district, Karnataka — altitude 1,000–1,750m, Western Ghats. 265km from Bangalore (5–6 hrs), 120km from Mysore (2.5 hrs). Base yourself in or near Madikeri for central access to everything.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓"} label="Duration" value="3 Days" />
            <StatCard icon={"💰"} label="Budget From" value="₹3,000/day" />
            <StatCard icon={"🌡️"} label="Best Months" value="Oct – May" />
            <StatCard icon={"🚌"} label="From Bangalore" value="5–6 hrs" />
          </div>

          {/* ── KEY HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🌿"} Key Highlights</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Eight things that make Coorg genuinely unlike anywhere else in South India.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Abbey Falls",
                  tag: "Must-see · 10 min from road",
                  bg: "bg-blue-50 border-blue-200",
                  th: "text-blue-800",
                  desc: "A 70ft waterfall tucked inside a private coffee estate — the approach through the plantation is half the experience. Entry ₹30. 10-minute walk from the gate. Best visited after rain when the flow is at full force. Weekday mornings are significantly less crowded than weekends.",
                },
                {
                  name: "Dubare Elephant Camp",
                  tag: "Book in advance · ₹500–₹750",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  desc: "On the banks of the Kaveri river — forest department camp where you can bathe and feed elephants 9:30–11am. Cross by coracle (round bamboo boat) to reach the camp. ₹500–₹750 per person. This is genuine conservation work, not a tourist circus. Book online or at the Kushalnagar forest office — it fills up on weekends.",
                },
                {
                  name: "Raja's Seat",
                  tag: "Sunset viewpoint · Entry ₹10",
                  bg: "bg-green-50 border-green-200",
                  th: "text-green-800",
                  desc: "A garden-and-viewpoint in Madikeri town — named because the Coorg kings used to watch the sunset here. Entry ₹10. Best visited at dawn for the morning mist rolling over the valleys below, or sunset for the golden light. Gets crowded after 4pm.",
                },
                {
                  name: "Namdroling Monastery (Golden Temple)",
                  tag: "55km from Madikeri · Free entry",
                  bg: "bg-yellow-50 border-yellow-200",
                  th: "text-yellow-800",
                  desc: "The most extraordinary thing most Coorg visitors never see. A Tibetan Buddhist monastery in Bylakuppe — the largest Tibetan settlement outside Tibet. Three giant gold-plated Buddha statues inside the main temple, soaring Tibetan architecture covered in dragons and lotus motifs, monks in saffron robes. Free entry, opens 9am–7pm. The 55km detour from Madikeri is absolutely worth it.",
                },
                {
                  name: "Tadiandamol Trek",
                  tag: "Coorg's highest peak · 1,748m",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  desc: "Karnataka's highest peak accessible by day trek — 7km return from the trailhead at Kakkabe. Moderate difficulty through shola grassland and forest. Start at 6am to summit by 9am before clouds move in — the views over the Western Ghats on clear days are spectacular. No permit required but forest check-post registration. Best October–March.",
                },
                {
                  name: "Mandalpatti",
                  tag: "Jeep only · ₹2,000 for 4 people",
                  bg: "bg-purple-50 border-purple-200",
                  th: "text-purple-800",
                  desc: "A high meadow viewpoint reachable only by 4WD jeep on a rough forest track. At around 1,400m, the mist rolls into the valleys below creating a sea-of-clouds effect that is genuinely breathtaking. Jeeps from the base cost around ₹2,000 for 4 people shared. Go early morning for the best mist conditions.",
                },
                {
                  name: "Iruppu Falls",
                  tag: "85km from Madikeri · 1km walk",
                  bg: "bg-cyan-50 border-cyan-200",
                  th: "text-cyan-800",
                  desc: "A 2-tiered waterfall inside Brahmagiri Wildlife Sanctuary — 1km easy walk through forest from the parking area. The falls are fed by the Lakshmana Tirtha river. Entry ₹20. Often combined with a Nagarhole extension or as Day 3 before departing Coorg.",
                },
                {
                  name: "Coffee Estate Stays",
                  tag: "Oct–Feb harvest season · ₹3,000–₹8,000",
                  bg: "bg-orange-50 border-orange-200",
                  th: "text-orange-800",
                  desc: "Staying on a working coffee estate is the signature Coorg experience — waking to the smell of coffee blossoms, walking rows of arabica and robusta, picking red coffee berries during October–February harvest. Tata Coffee offers plantation tours at Pollibetta (₹200). Several estates accept guests from ₹3,000–₹8,000 per night including meals.",
                },
              ].map((h) => (
                <div key={h.name} className={`rounded-xl border p-5 ${h.bg}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className={`font-serif text-base font-normal ${h.th}`}>{h.name}</h3>
                    <span className="text-[0.65rem] bg-white/70 border border-white/50 px-2.5 py-1 rounded-full text-muted">{h.tag}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Coorg — Must-See Places"
            subtitle="Click each thumbnail to explore Coorg&apos;s waterfalls, elephant camp, monastery and misty peaks."
            spots={[
              { name: "Abbey Falls",           query: "abbey falls coorg waterfall karnataka lush green coffee estate",     desc: "70ft waterfall hidden inside a coffee estate. The walk through the plantation makes the destination — entry ₹30, 10 min stroll to the viewpoint." },
              { name: "Dubare Elephant Camp",  query: "dubare elephant camp kaveri river karnataka forest bathing",         desc: "Bathing working elephants in the Kaveri river at 9:30am. Cross by coracle to reach the forest camp. One of India's most genuine wildlife interactions." },
              { name: "Namdroling Monastery",  query: "namdroling monastery bylakuppe golden temple tibetan buddhist karnataka", desc: "Three 18-metre gold Buddha statues inside a Tibetan temple in the Karnataka countryside. Free entry — one of the most unexpected sights in all of South India." },
              { name: "Raja's Seat",           query: "rajas seat madikeri viewpoint coorg misty valley sunrise karnataka",  desc: "The Coorg kings' sunset watching point — mist rolling over the valley at dawn is the real attraction. Entry ₹10." },
              { name: "Tadiandamol",           query: "tadiandamol peak trek coorg western ghats grassland karnataka mountain", desc: "Karnataka's highest peak at 1,748m — moderate 7km return trek from Kakkabe. Leave at 6am for summit views before clouds arrive." },
            ]}
          />

          {/* ── COFFEE ESTATE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="coorg coffee plantation rows arabica beans harvest karnataka"
              alt="Rows of coffee plants with red berries in a Coorg plantation"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Red coffee berries ready for harvest on a Coorg arabica estate. October to February is harvest season — when estate stays include picking your own coffee.
              </p>
            </div>
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} 3-Day Coorg Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">The route that covers the maximum in 3 days — geographically logical, no backtracking.</p>

            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
              <span className="text-2xl">{"🌿"}</span>
              <div>
                <p className="text-sm font-medium text-green-800">Base: Madikeri (Mercara)</p>
                <p className="text-xs text-green-600 font-light">Central location — everything within 30–90km {"·"} Homestays from ₹1,000 {"·"} Plantation stays from ₹3,000</p>
              </div>
            </div>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive · Raja's Seat · Madikeri Fort · Coffee Estate Walk"
                items={[
                  "Morning: Depart Bangalore by 6am or Mysore by 8am. Arrive Madikeri by 11am–1pm. Check in to homestay or plantation stay.",
                  "Afternoon: Walk the coffee estate if staying on a plantation — most properties offer a self-guided walk through the rows. Fresh coffee smell is strongest post-rain.",
                  "3pm: Madikeri Fort — small fort with two fiberglass elephant statues, a church inside the fort walls, and a museum. Entry free. 30–45 min.",
                  "5:30pm: Raja's Seat — the highlight of Day 1. Walk through the garden and find a spot at the viewpoint edge. Mist rolls in from the valleys as the sun drops. Entry ₹10. Arrive 30 min before sunset.",
                  "Evening: Dinner at a Madikeri restaurant. Try Coorg pandi curry (pork with kachampuli vinegar) or noolputtu (string hoppers). Budget ₹200–₹400/person.",
                  "Stay near Madikeri town or on a plantation within 15km for Day 2 access.",
                ]}
                cost="₹1,500–₹3,000 per person (travel + accommodation + meals)"
              />
              <DayCard
                day="Day 2"
                title="Dubare Elephant Camp · Abbey Falls · Namdroling Monastery"
                items={[
                  "8am: Drive to Dubare Elephant Camp (30km from Madikeri via Kushalnagar, ~45 min). Elephant interaction begins 9:30am sharp — be in the queue at the coracle crossing by 9am.",
                  "9:30–11am: Elephant bathing session (₹500–₹750/person). You will get wet. Bring a spare change of clothes. Book online ahead for weekends.",
                  "11:30am: Drive to Abbey Falls (15km from Kushalnagar back toward Madikeri, or via Siddapura). Entry ₹30. 10-minute walk through the estate. At least 30 min here.",
                  "1pm: Lunch at a Madikeri restaurant or a dhaba on the Bylakuppe road — prepare for the afternoon detour.",
                  "2:30pm: Drive to Namdroling Monastery, Bylakuppe (55km from Madikeri, 1.5 hrs). This detour is the most underrated thing in all of Coorg — a Tibetan city in Karnataka with three giant gold Buddha statues inside a temple unlike anything in South India.",
                  "4pm–6pm: Explore the monastery complex. The main Zangdog Palri temple is the centrepiece — three 18-metre gold statues, painted ceiling panels, Tibetan monks in robes. Photography allowed outside. Free entry.",
                  "7:30pm: Return to Madikeri. Day total driving: ~160km but the roads are beautiful.",
                ]}
                cost="₹1,200–₹2,500 per person (Dubare + fuel/cab + meals)"
              />
              <DayCard
                day="Day 3"
                title="Tadiandamol Trek at Dawn OR Mandalpatti · Iruppu Falls · Depart"
                items={[
                  "Option A (Trek lovers): Leave hotel by 5:30am. Drive to Kakkabe (35km from Madikeri, 1 hr). Begin Tadiandamol trek at 6:30am — 7km return, moderate, 3–4 hours total. Summit by 9–9:30am for clearest views. Descend by 11am.",
                  "Option B (Non-trekkers): Mandalpatti jeep from Madikeri. Leave 7am, hire jeep at the base (₹2,000 for 4 people, ~1hr ride up). Morning mist sea-of-clouds effect is extraordinary. Back by 11am.",
                  "12pm: Lunch in Madikeri or Virajpet area.",
                  "1:30pm: Drive to Iruppu Falls (85km from Madikeri via Gonikoppal, ~2 hrs — route goes through coffee and spice estates). 1km walk from parking to the 2-tiered falls. Entry ₹20.",
                  "4pm: Begin drive back toward Mysore or Bangalore. Stock up on coffee, cardamom, and pepper from an estate shop or Madikeri market before leaving.",
                  "Note: If Day 3 feels rushed, skip Iruppu Falls and add a coffee estate tour instead (Tata Coffee Plantation, Pollibetta — ₹200, pre-book).",
                ]}
                cost="₹800–₹1,800 per person (trek/jeep + Iruppu + meals)"
              />
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
                <span className="font-serif text-base text-ink font-light">₹9,000–₹15,000 including accommodation</span>
              </div>
            </div>

            {/* How to reach */}
            <div className="mt-8 rounded-xl border border-parchment-2 overflow-hidden">
              <div className="bg-ink px-5 py-3">
                <h3 className="text-sm font-medium text-white">Getting to Coorg</h3>
              </div>
              <div className="bg-white divide-y divide-parchment-2">
                {[
                  { from: "From Bangalore", how: "KSRTC bus to Madikeri — ₹350–₹500, 5–6 hrs, multiple daily departures from Satellite Bus Stand. Private cab ₹3,500–₹4,500 one way. No direct train — nearest railhead is Mysore or Hassan." },
                  { from: "From Mysore", how: "KSRTC bus to Madikeri — ₹150, 2.5 hrs. Or private cab ₹1,500–₹2,000. The Mysore–Madikeri road through Hunsur is particularly scenic." },
                  { from: "Within Coorg", how: "Local auto-rickshaws in Madikeri are metered. Hire a car with driver for day trips — ₹2,500–₹3,500/day covers most sights. Scooter rental from Madikeri: ₹400–₹600/day for the more adventurous." },
                ].map((r) => (
                  <div key={r.from} className="px-5 py-4 flex gap-4">
                    <span className="text-xs font-semibold text-ink w-32 flex-shrink-0">{r.from}</span>
                    <span className="text-xs text-muted font-light leading-relaxed">{r.how}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"💰"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">{"🌿"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"✨"} Plantation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏠 Accommodation (3N)", "₹3,000–₹5,400", "₹9,000–₹15,000", "₹18,000–₹30,000"],
                    ["🍽️ Food & Drinks", "₹900–₹1,500", "₹2,400–₹4,500", "₹4,500–₹9,000"],
                    ["🚗 Transport (cab/bus)", "₹1,500–₹2,500", "₹4,500–₹7,500", "₹7,500–₹12,000"],
                    ["🐘 Activities & Entry", "₹700–₹1,200", "₹1,500–₹2,500", "₹2,500–₹4,500"],
                    ["☕ Coffee & Shopping", "₹300–₹600", "₹1,000–₹2,500", "₹2,500–₹6,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹6,400–₹11,200", "₹18,400–₹32,000", "₹35,000–₹61,500"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Budget = basic homestays, shared transport, local food. Peak season (Dec–Jan) prices are 40–50% higher. Dubare Elephant Camp costs ₹500–₹750/person extra.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Coorg"
            hotels={[
              { name: "Coorg Misty Woods Homestay", type: "Budget Homestay · Madikeri", price: "From ₹1,200/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/searchresults.html?ss=Coorg&aid=2820480" },
              { name: "The Bison Coffee Estate", type: "Plantation Stay · Virajpet", price: "From ₹4,500/night", rating: "5", badge: "Estate pick", url: "https://www.booking.com/searchresults.html?ss=Coorg+plantation&aid=2820480" },
              { name: "Orange County Coorg", type: "Luxury Resort · Siddapura", price: "From ₹12,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/searchresults.html?ss=Orange+County+Coorg&aid=2820480" },
            ]}
            activities={[
              { name: "Dubare Elephant Camp Experience", duration: "Half day", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=coorg+elephant&partner_id=PSZA5UI" },
              { name: "Coorg Coffee Estate Tour", duration: "3 hours", price: "From ₹200/person", badge: "Unique", url: "https://www.getyourguide.com/s/?q=coorg+coffee+tour&partner_id=PSZA5UI" },
              { name: "Tadiandamol Trek with Guide", duration: "Full day", price: "From ₹800/person", badge: "Adventure", url: "https://www.getyourguide.com/s/?q=coorg+trek&partner_id=PSZA5UI" },
              { name: "Mandalpatti Jeep Safari", duration: "4 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=coorg+mandalpatti&partner_id=PSZA5UI" },
            ]}
            pdfProductId="coorg-3-days-pdf"
          />

          {/* ── COFFEE GUIDE ── */}
          <section id="coffee" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"☕"} Coorg Coffee Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Coorg produces 30% of India&apos;s entire coffee output — more than any other district in the country. Understanding what you are tasting makes the experience significantly better.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Arabica",
                  emoji: "☕",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Altitude", "Above 1,000m — higher estates"],
                    ["Taste", "Milder, complex, fruity notes"],
                    ["Harvest", "November to February"],
                    ["Price", "₹200–₹350/250g at estate"],
                  ],
                  note: "Coorg arabica is prized nationally — the mild climate produces a bean with less bitterness than South Indian robusta. Look for single-estate labels.",
                },
                {
                  title: "Robusta",
                  emoji: "🫘",
                  bg: "bg-stone-50 border-stone-200",
                  th: "text-stone-700",
                  rows: [
                    ["Altitude", "Below 1,000m — lower slopes"],
                    ["Taste", "Stronger, more caffeine, earthy"],
                    ["Harvest", "January to March"],
                    ["Price", "₹150–₹250/250g at estate"],
                  ],
                  note: "Used in most Indian filter coffee blends for body and crema. If you want the classic South Indian coffee taste — strong, slightly bitter — buy robusta powder.",
                },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"💡"} {area.note}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                { icon: "🫘", title: "Buy Direct from Estate Shops", desc: "Freshest coffee, lowest price. Estate shops in Madikeri and along the Virajpet road sell 250g at ₹150–₹300. The same coffee in Bangalore supermarkets costs ₹400–₹600. Buy whole beans for peak freshness." },
                { icon: "🌿", title: "Coffee Harvest Season (Oct–Feb)", desc: "During harvest, most estate stays let guests pick red coffee berries in the morning. The process — picking, pulping, fermenting, drying — takes 3–5 days. Even a morning picking session gives you a real sense of the labour behind each cup." },
                { icon: "🏭", title: "Tata Coffee Plantation Tour, Pollibetta", desc: "One of the few estates offering structured tours. ₹200/person includes a walk through the arabica rows, curing works demonstration, and tasting. Book ahead — limited daily slots. 45km from Madikeri via Virajpet." },
                { icon: "☕", title: "Fresh Estate Filter Coffee", desc: "Ask your homestay to make filter coffee from their own estate beans — the experience of drinking coffee grown around your accommodation is uniquely Coorgi. Most good homestays serve this automatically." },
              ].map((t) => (
                <TipCard key={t.title} icon={t.icon} title={t.title} desc={t.desc} color="bg-amber-50 border-amber-200" />
              ))}
            </div>
          </section>

          {/* ── MONASTERY IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="namdroling monastery bylakuppe tibetan golden temple karnataka buddhist"
              alt="Golden Temple Namdroling Monastery Bylakuppe Karnataka Tibetan Buddhist"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Namdroling Monastery at Bylakuppe — the Golden Temple. Three giant gold-plated Buddha statues inside, Tibetan monks resident year-round. Free entry, 55km from Madikeri.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Trying to do Coorg as a day trip from Bangalore", desc: "5–6 hours each way. You arrive at 11am and leave at 3pm to make it back. You see nothing. Coorg needs a minimum 2 nights to experience properly — 3 nights for the full version including a trek.", icon: "🕐" },
                { title: "Visiting Abbey Falls on a weekend afternoon", desc: "Weekend afternoons have serious crowds and parking chaos near Abbey Falls. Go on a weekday, or on a weekend morning before 9am. The 10-minute walk through the estate is genuinely pleasant when it is quiet.", icon: "👥" },
                { title: "Skipping Namdroling Monastery", desc: "Most Coorg itineraries ignore Bylakuppe because it is 55km away. This is a mistake — three 18-metre gold Buddha statues in an extraordinary Tibetan temple complex in the middle of Karnataka. It is unlike anything else in South India. Factor in the detour.", icon: "🏛️" },
                { title: "Going on monsoon trails without research", desc: "Coorg is one of the wettest places in India — Agumbe level rainfall. July–September trails have dense leeches that attach through shoe eyelets. If you visit monsoon, bring salt, leech socks, and accept that waterfall views will be dramatic but hikes will be an adventure.", icon: "🌧️" },
                { title: "Not booking Dubare Elephant Camp in advance", desc: "Dubare fills up on weekends and long weekends — sometimes 2–3 weeks in advance. Book online through Karnataka Forest Department or Jungle Lodges. Walk-ins sometimes work on weekdays but never on weekends.", icon: "🐘" },
                { title: "Staying only in Madikeri town", desc: "Madikeri is convenient but the plantation stay experience is uniquely Coorgi — waking to bird calls inside a coffee estate is different from a town hotel. Even a ₹1,500/night homestay 5km outside town changes the experience significantly.", icon: "🏡" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-red-200 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Raja's Seat at Dawn", desc: "Most visitors come at sunset — but dawn is better. By 6:30am the mist is still thick in the valleys and you often have the viewpoint entirely to yourself. Entry opens early.", color: "bg-green-50 border-green-200" },
                { icon: "🐘", title: "Coracle Crossing at Dubare", desc: "The round bamboo coracle boat crossing the Kaveri to reach the elephant camp is itself a memorable experience. Even if you are not doing the elephant session, the crossing is worth the short wait.", color: "bg-green-50 border-green-200" },
                { icon: "🗺️", title: "Drive via the Nisargadhama Road", desc: "The road from Kushalnagar to Madikeri via Nisargadhama passes through some of the densest coffee and bamboo forest in Coorg. Slower than the highway but worth taking at least one-way for the scenery.", color: "bg-amber-50 border-amber-200" },
                { icon: "☕", title: "Ask for Estate-Ground Coffee", desc: "Tell your homestay host you want coffee from their own estate beans. Most Coorg homestays grow coffee but serve instant Nescafe unless you specifically ask. The difference is immediate and dramatic.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥾", title: "Tadiandamol: Leave by 6am", desc: "The summit views on Tadiandamol are only clear before 10am when cloud cover arrives. Starting at 6am means you reach the top (3.5km up) by 9am and are back before the clouds roll in. Afternoon starts result in zero visibility.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛒", title: "Buy in Madikeri Market Not Airport", desc: "Madikeri market sells coffee at ₹150–₹250/250g. The same branded Coorg coffee at Bangalore airport costs ₹500–₹700. Cardamom and pepper are similarly priced — buy before you leave Coorg.", color: "bg-teal-50 border-teal-200" },
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
              Tell us your dates, group size and budget — we&apos;ll send a personalised Coorg itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Coorg Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Coorg?", a: "3 days is ideal — covering Abbey Falls, Dubare Elephant Camp, Raja's Seat, Namdroling Monastery, and either the Tadiandamol trek or Mandalpatti jeep track. 2 days works for a quick Bangalore weekend trip covering the main sights. 4 days lets you add Iruppu Falls, a full coffee estate tour, and Brahmagiri Wildlife Sanctuary." },
                { q: "What is the best time to visit Coorg?", a: "October to May. Peak season is November to February — cool (12–22°C), dry, coffee harvest underway and estates fragrant. March to May is warmer but clear for trekking. Monsoon (June to September) brings spectacular waterfalls but also India's heaviest rainfall, leech-infested trails, and occasional road closures." },
                { q: "How do I get to Coorg from Bangalore?", a: "265km from Bangalore — approximately 5–6 hours by road via NH275 through Mysuru. KSRTC buses run daily from Bangalore to Madikeri (₹350–₹500, 5–6 hrs). A private cab costs ₹3,500–₹4,500 one way. From Mysore it is only 120km and 2.5 hours — a good option if combining both destinations." },
                { q: "Is Coorg good for trekking?", a: "Yes — Coorg has Karnataka's best accessible trekking. Tadiandamol (1,748m) is the highest peak with a 7km return trail, moderate difficulty, and spectacular Western Ghats views. Start at 6am to summit before clouds arrive. Brahmagiri near Iruppu Falls and Pushpagiri are other options. October to March is best — trails are dry and views are clearest." },
                { q: "How much does a 3-day Coorg trip cost?", a: "Budget travellers can do 3 days for ₹3,000–₹4,000 per person per day (basic homestay ₹1,000–₹1,800/night, meals ₹300–₹500, local transport). Mid-range plantation stay costs ₹6,000–₹10,000/day per person. Peak season (December–January) prices are 40–50% higher. Dubare Elephant Camp (₹500–₹750/person) and Mandalpatti jeep (₹2,000 for 4 people) are main activity costs." },
                { q: "What should I buy in Coorg?", a: "Coorg coffee is the top buy — fresh arabica or robusta beans from estate shops at ₹150–₹300 per 250g (significantly cheaper than Bangalore). Also: green cardamom (₹400–₹600/100g), black pepper, Coorg honey, and locally distilled fruit wine. Buy from Madikeri market or estate shops — not the tourist stalls near Abbey Falls which are overpriced." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Extend Your Karnataka Trip</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mysore — 3-Day Heritage Guide", href: "/blog/mysore-3-days", soon: false },
                { label: "Nagarhole & Kabini — Wildlife Guide", href: "/blog/nagarhole-3-days", soon: false },
                { label: "Wayanad — Kerala Hill District", href: "/blog/wayanad-3-days", soon: false },
                { label: "Browse All India Guides", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Coorg trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-coorg", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/coorg-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-coorg", label: "How to get there", icon: "✈️" },
                { href: "/blog/coorg-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="coorg-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
