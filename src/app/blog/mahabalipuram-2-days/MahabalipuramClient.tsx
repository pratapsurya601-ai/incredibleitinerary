"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

const MAHABALIPURAM_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Day Trip vs Overnight?" },
  { id: "highlights", emoji: "🏛️",  label: "Key Monuments" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "beach",      emoji: "🏖️",  label: "Beach & Food Guide" },
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
          href: `mailto:?subject=Mahabalipuram 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Mahabalipuram in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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

// ── Monument Card ─────────────────────────────────────────────────────────────
function MonumentCard({
  name,
  period,
  entry,
  highlight,
  tip,
  free,
}: {
  name: string;
  period: string;
  entry: string;
  highlight: string;
  tip: string;
  free: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5">
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-serif text-base text-ink font-normal">{name}</h3>
        <span
          className={`text-[0.6rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full flex-shrink-0 ${
            free
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {free ? "Free" : entry}
        </span>
      </div>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mb-2">{period}</p>
      <p className="text-xs text-muted font-light leading-relaxed mb-3">{highlight}</p>
      <div className="bg-parchment/70 rounded-lg px-3 py-2">
        <p className="text-[0.7rem] text-ink-mid font-light italic">{"💡"} {tip}</p>
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
          className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function MahabalipuramClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MAHABALIPURAM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mahabalipuram" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="shore temple mahabalipuram bay of bengal sunrise tamil nadu india"
            alt="Shore Temple at Mahabalipuram at sunrise, facing the Bay of Bengal"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Mahabalipuram 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Heritage
                </span>
                <span className="text-white/60 text-xs">March 25, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mahabalipuram in 2 Days: Shore Temple, Arjuna&apos;s Penance
                <em className="italic text-gold-light"> &amp; Beach Guide</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                UNESCO World Heritage monuments carved from living rock, the world&apos;s largest bas-relief, 2,500 crocodiles, and a quiet beach — all within 1 hour of Chennai.
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
              <span>{"🇮🇳"} India</span>
              <span>{"·"}</span>
              <span>{"🗓"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Intro blockquote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Shore Temple has stood in the Bay of Bengal surf for 1,300 years. Most people come as a day trip from Chennai, rush through the main sites in 4 hours, and miss Crocodile Bank, Tiger Cave, the sunrise, and the best food. This guide makes sure you don&apos;t.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Day Trip vs Overnight?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mahabalipuram works as a day trip from Chennai but an overnight stay transforms the experience. Here&apos;s why.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Day Trip from Chennai",
                  emoji: "🚌",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Best for", "Tight schedule, first visit"],
                    ["Covers", "Shore Temple, Arjuna's Penance, Five Rathas"],
                    ["Misses", "Sunrise, Crocodile Bank, Tiger Cave"],
                    ["Time", "7am departure, back by 7pm"],
                  ],
                  note: "Shore Temple at 11am in summer heat is genuinely unpleasant. Sunrise (6am) is spectacular and 25 degrees cooler.",
                },
                {
                  title: "2-Night Stay (Recommended)",
                  emoji: "🌅",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  rows: [
                    ["Best for", "First-time visitors, history enthusiasts"],
                    ["Covers", "All monuments + Crocodile Bank + Tiger Cave"],
                    ["Highlight", "Shore Temple sunrise — life-defining"],
                    ["Cost", "₹2,500–₹5,000/day total"],
                  ],
                  note: "Check in late afternoon Day 1. Shore Temple sunrise Day 2. Crocodile Bank morning Day 3. Leave refreshed.",
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚠️"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Bottom line:</strong> If you have time, stay overnight. The Shore Temple at sunrise with the Bay of Bengal light turning gold behind the towers is one of Tamil Nadu&apos;s great travel moments. No day tripper ever sees it.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓"} label="Duration" value="2 Days" />
            <StatCard icon={"💰"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"🌡️"} label="Best Months" value="Nov – Feb" />
            <StatCard icon={"🚌"} label="From Chennai" value="1.5hr Bus" />
          </div>

          {/* ── HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏛️"} Key Monuments</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mahabalipuram&apos;s monuments were carved by the Pallava dynasty in the 7th and 8th centuries. The entire group is a UNESCO World Heritage Site (1984). Here is what you&apos;re actually seeing — and what each one is worth.
            </p>

            {/* Hero monument image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/blog/mahabalipuram-shore-temple.jpg"
                  alt="Shore Temple at Mahabalipuram facing the Bay of Bengal at sunrise"
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 860px"
                />
              </div>
              <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
                <p className="text-xs text-muted font-light italic text-center">
                  The Shore Temple — built in the 7th century, still standing in the Bay of Bengal surf 1,300 years later. UNESCO World Heritage since 1984.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <MonumentCard
                name="Shore Temple"
                period="7th–8th century · UNESCO World Heritage"
                entry="₹40 Indians / ₹600 foreigners"
                highlight="Two granite towers facing the Bay of Bengal — one of the oldest structural stone temples in South India. The sea setting is extraordinary, especially at sunrise when the first light catches the stone towers. Watch for waves crashing near the base walls at high tide."
                tip="Go at sunrise (around 6am). The temple opens early and the morning light on the stone plus the Bay of Bengal behind is genuinely spectacular. At noon in summer it is 38°C with no shade."
                free={false}
              />
              <MonumentCard
                name="Arjuna's Penance"
                period="7th century · World's Largest Bas-Relief"
                entry="Free to view from road"
                highlight="A 27-metre by 9-metre carving on two massive natural boulders — the largest open-air bas-relief on earth. Over 100 figures including gods, humans, animals, and serpents, all carved in extraordinary detail. The central fissure represents the Ganges descending from heaven."
                tip="No entry fee — it stands openly on the main road. The best viewing is from directly in front. A guide is genuinely useful here to understand the narrative, but a quick Google search also works."
                free={true}
              />
              <MonumentCard
                name="Five Rathas (Pancha Rathas)"
                period="7th century · UNESCO World Heritage"
                entry="₹40 Indians / ₹600 foreigners"
                highlight="Five monolithic rock-cut temples shaped like chariots (rathas), each carved from a single granite outcrop. Named after the Pandavas and Draupadi from the Mahabharata. The Dharmaraja Ratha is the tallest — a three-storey tower with intricate carvings. Never completed or used for worship."
                tip="Buy the ASI combo ticket here if you haven't already — it covers Shore Temple too and saves ₹250–₹300. The information boards are detailed and accurate; you don't need a paid guide."
                free={false}
              />
              <MonumentCard
                name="Krishna's Butter Ball"
                period="Natural phenomenon · Iconic photo spot"
                entry="Free"
                highlight="A 7-metre diameter granite boulder balanced on a 1.2-metre base on a sloping rock face. It has sat here for over 1,200 years. Attempts to move it with elephants in the 20th century failed completely. The physics of how it stays put remain genuinely unexplained."
                tip="The classic photo is to 'hold' the boulder from below with both hands — find the right angle and it looks genuinely convincing. Free and walkable from Arjuna's Penance."
                free={true}
              />
              <MonumentCard
                name="Mahishasura Mardini Cave"
                period="7th century · Pallava rock-cut cave"
                entry="Free (ASI combo)"
                highlight="A rock-cut cave temple with two spectacular carved panels — Durga slaying the buffalo demon Mahishasura, and Vishnu reclining on the cosmic serpent Ananta. The Durga panel in particular is considered one of the finest examples of Pallava sculpture anywhere."
                tip="Often overlooked by day trippers rushing between the main paid sites. This is free with the ASI combo and the carved panels are extraordinary. Spend 20 minutes here."
                free={true}
              />
              <MonumentCard
                name="Crocodile Bank"
                period="Conservation centre · 15km north on ECR"
                entry="₹150 · Opens 8:30am–5:30pm"
                highlight="The Madras Crocodile Bank Trust houses over 2,500 crocodiles across 14 species — the largest collection in the world. Started in 1976 by herpetologist Romulus Whitaker to save India's three crocodile species from extinction. All three have since recovered."
                tip="Go in the morning when crocodiles are active and basking. The feeding demonstrations (check the schedule at the gate) are remarkable. Most Mahabalipuram visitors skip this entirely — one of Tamil Nadu's most underrated attractions."
                free={false}
              />
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-teal-800">ASI Combo Ticket:</strong> Buy the ₹600 combo ticket at your first ASI site — it covers Shore Temple, Five Rathas, and cave temples. Versus buying separate tickets: Shore Temple ₹40 + Five Rathas ₹40 = ₹80 for just two sites. The combo is better value if visiting three or more sites (which you should). Foreign visitors: ₹2,500 combo vs ₹600 each separate — definitely buy the combo.
              </p>
            </div>
          </section>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Click each day to expand or collapse the schedule.</p>

            <div className="space-y-4">
              {/* Day 1 */}
              <DayCard
                day="Day 1"
                title="Monuments, Sculptures & Shore Temple Sunset"
                items={[
                  "Arrive from Chennai. Bus from CMBT takes 1.5–2 hours (₹60). Taxi takes 1.5 hours (₹1,200–₹1,500). Check in to your guesthouse or hotel.",
                  "Early afternoon (2pm): Start with Krishna's Butter Ball and Arjuna's Penance — both free, walkable, and best in the afternoon when the crowds from morning buses have thinned.",
                  "3pm: Mahishasura Mardini Cave — 10-minute walk from Arjuna's Penance. The Durga and Vishnu panels are extraordinary. Free with ASI combo.",
                  "4pm: Five Rathas (Pancha Rathas) — the monolithic chariot-shaped temples. Buy the ASI combo ticket here (₹600 Indians). The late afternoon light on the stone is excellent for photography.",
                  "5:30pm: Move to the Shore Temple for sunset. The light on the Bay of Bengal from the west-facing angle at golden hour, with the towers silhouetted against the sea, is the defining Mahabalipuram image. Plan to stay until well after sunset.",
                  "7pm: Dinner near the main beach area. Moonrakers or La Vie en Rose for seafood (mid-range). Seashore Garden for a budget South Indian thali (₹120–₹180).",
                  "Evening: Walk the beach road. The main beach is lively at night with vendors and small restaurants. Silver Beach (2km south) is quieter if you want to sit by the sea.",
                ]}
                cost="₹800–₹1,500 excluding accommodation"
              />

              {/* Day 2 */}
              <DayCard
                day="Day 2"
                title="Shore Temple Sunrise, Crocodile Bank & Tiger Cave"
                items={[
                  "5:45am: Shore Temple at sunrise. This is the reason to stay overnight. The temple opens early and the morning light turning the granite gold with the Bay of Bengal behind it is exceptional. Bring a light layer — it is cool before 7am.",
                  "7:30am: Breakfast at a local café near the temple. Idli-sambar for ₹60–₹80. The town is quiet and beautiful at this hour.",
                  "8:30am: Auto or rental scooter 15km north on the East Coast Road (ECR) to Madras Crocodile Bank Trust. Entry ₹150. Opens exactly at 8:30am.",
                  "Spend 1.5–2 hours at Crocodile Bank. Check the feeding schedule at the gate. The gharial enclosure and the king cobra section are highlights beyond the main crocodile pools.",
                  "11am: 9km south back towards Mahabalipuram — stop at Tiger Cave (Yali Mandapam), carved in the 7th century with lion heads (yalis) surrounding a central shrine. Free, completely crowd-free, excellent for photography.",
                  "1pm: Lunch back in Mahabalipuram. La Vie en Rose rooftop (seafood, mid-range) or any of the local Tamil lunch spots near the bus stand for ₹100–₹150 rice meals.",
                  "2:30pm: Beach time — Silver Beach is quieter and cleaner than the main beach. Rent a sun lounger for ₹100–₹150 or walk the shore.",
                  "4pm onwards: Depart for Chennai (last direct bus around 8:30pm from Mahabalipuram bus stand, ₹60), or head to your next destination.",
                ]}
                cost="₹600–₹1,000 excluding accommodation"
              />

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) {"·"} </span>
                <span className="font-serif text-base text-ink font-light">₹5,000–₹7,000 including accommodation</span>
              </div>
            </div>

            {/* Getting there box */}
            <div className="mt-6 bg-white border border-parchment-2 rounded-xl p-5">
              <h3 className="font-serif text-base text-ink mb-4">{"🚌"} Getting to Mahabalipuram</h3>
              <div className="space-y-3">
                {[
                  {
                    label: "From Chennai by Bus",
                    detail: "CMBT (Chennai Mofussil Bus Terminus) to Mahabalipuram — every 30 min, 1.5–2 hours, ₹60. East Coast Road (ECR) route passes through Thiruvanmiyur and Kelambakkam. No booking needed.",
                    badge: "Best value",
                    badgeColor: "bg-green-100 text-green-700",
                  },
                  {
                    label: "From Chennai by Taxi",
                    detail: "58km via ECR. Takes 1–1.5 hours (depending on traffic). Ola/Uber or hired taxi ₹1,200–₹1,500. Comfortable option for groups.",
                    badge: "Most convenient",
                    badgeColor: "bg-teal-100 text-teal-700",
                  },
                  {
                    label: "From Chennai by Train (Indirect)",
                    detail: "No direct train. Nearest station is Chengalpattu (27km from Mahabalipuram). Train from Chennai to Chengalpattu (~45 min, ₹30), then auto-rickshaw or bus (₹80–₹200). Not recommended unless you have a rail pass.",
                    badge: "Not recommended",
                    badgeColor: "bg-gray-100 text-gray-600",
                  },
                ].map((opt) => (
                  <div key={opt.label} className="flex gap-3 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-xs font-medium text-ink">{opt.label}</p>
                        <span className={`text-[0.6rem] px-2 py-0.5 rounded-full font-medium ${opt.badgeColor}`}>{opt.badge}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{opt.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Mahabalipuram — Must-See Places"
            subtitle="Click each thumbnail to explore Mahabalipuram&apos;s UNESCO monuments, rock sculptures, and coastline."
            spots={[
              {
                name: "Shore Temple",
                query: "shore temple mahabalipuram bay bengal sunrise granite pallava",
                desc: "Two granite towers facing the Bay of Bengal — built in the 7th century and still standing in the surf. Sunrise here is the single most magical moment in Mahabalipuram. Go before 6:30am.",
              },
              {
                name: "Arjuna's Penance",
                query: "arjuna penance mahabalipuram bas relief boulder carving pallava",
                desc: "The world's largest open-air bas-relief — 27m x 9m carved on two natural boulders. Over 100 figures tell the story of the Ganges descending from heaven. Free to view, no ticket required.",
              },
              {
                name: "Five Rathas",
                query: "five rathas pancha rathas mahabalipuram monolithic stone chariot",
                desc: "Five monolithic temples carved from single granite outcrops, shaped like chariots and named after the Pandavas. Never completed, never used for worship — yet perfect in every detail.",
              },
              {
                name: "Crocodile Bank",
                query: "crocodile bank madras conservation saltwater mugger gharial",
                desc: "2,500+ crocodiles across 14 species in the Madras Crocodile Bank Trust. A world-class conservation success story that saved India's three native crocodilian species from extinction.",
              },
              {
                name: "Tiger Cave",
                query: "tiger cave yali mahabalipuram rock cut temple shore mandapam",
                desc: "A Pallava rock-cut shrine surrounded by 11 carved lion heads (yalis), set in a forested grove 9km north of Mahabalipuram. Completely uncrowded. Free. One of the most photogenic sites on the coast.",
              },
            ]}
          />

          {/* ── BUDGET SECTION ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"💰"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"🏨"} Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏠 Accommodation (2N)", "₹1,200–₹2,000", "₹4,000–₹7,000"],
                    ["🍽️ Food & Drinks (2D)", "₹600–₹1,000", "₹2,000–₹4,000"],
                    ["🚌 Transport (bus + autos)", "₹400–₹800", "₹1,500–₹2,500"],
                    ["🎯 Entry Fees (ASI combo)", "₹600 (combo ticket)", "₹600 (same)"],
                    ["🐊 Crocodile Bank", "₹150", "₹150"],
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
                    {["₹3,000–₹5,000", "₹8,500–₹14,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. The ASI combo ticket (₹600 Indians, ₹2,500 foreigners) is the same price whether budget or mid-range — buy it at your first ASI site.
            </p>

            {/* Entry fee reference */}
            <div className="mt-5 bg-parchment rounded-xl border border-parchment-2 p-5">
              <h3 className="font-serif text-base text-ink mb-3">Entry Fees — Quick Reference</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  ["Shore Temple", "₹40 Indians · ₹600 foreigners"],
                  ["Five Rathas", "₹40 Indians · ₹600 foreigners"],
                  ["ASI Combo (all sites)", "₹600 Indians · ₹2,500 foreigners"],
                  ["Crocodile Bank", "₹150 all visitors"],
                  ["Arjuna's Penance", "Free — visible from road"],
                  ["Krishna's Butter Ball", "Free"],
                  ["Tiger Cave", "Free"],
                  ["Mahishasura Mardini Cave", "Free / included in ASI combo"],
                ].map(([site, fee]) => (
                  <div key={site} className="flex justify-between text-xs gap-2 py-1.5 border-b border-parchment-2 last:border-0">
                    <span className="text-ink font-medium">{site}</span>
                    <span className="text-muted font-light text-right">{fee}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mahabalipuram"
            hotels={[
              {
                name: "Sea Breeze Hotel",
                type: "Budget Guesthouse · Beachfront Road",
                price: "From ₹800/night",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/searchresults.html?ss=mahabalipuram&aid=2820480",
              },
              {
                name: "Radisson Blu Resort Temple Bay",
                type: "Luxury Resort · Beach",
                price: "From ₹7,000/night",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/searchresults.html?ss=mahabalipuram&aid=2820480",
              },
              {
                name: "Hotel Mamalla Heritage",
                type: "Mid-range · Central",
                price: "From ₹2,500/night",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/searchresults.html?ss=mahabalipuram&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Mahabalipuram Heritage Walking Tour",
                duration: "Half day",
                price: "From ₹800/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=mahabalipuram&partner_id=PSZA5UI",
              },
              {
                name: "Shore Temple Sunrise Private Tour",
                duration: "2 hours",
                price: "From ₹1,200/person",
                badge: "Sunrise special",
                url: "https://www.getyourguide.com/s/?q=mahabalipuram&partner_id=PSZA5UI",
              },
              {
                name: "Crocodile Bank & Tiger Cave Tour",
                duration: "4 hours",
                price: "From ₹600/person",
                url: "https://www.getyourguide.com/s/?q=mahabalipuram&partner_id=PSZA5UI",
              },
              {
                name: "Chennai to Mahabalipuram Day Tour",
                duration: "Full day",
                price: "From ₹1,500/person",
                url: "https://www.getyourguide.com/s/?q=mahabalipuram&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="mahabalipuram-2-days-pdf"
          />

          {/* ── BEACH & FOOD ── */}
          <section id="beach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏖️"} Beach & Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mahabalipuram is a coastal town and the seafood is genuine. The main beach is touristy but atmospheric. Silver Beach (2km south) is the better choice for actually swimming.
            </p>

            {/* Beaches */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-ink font-normal mb-4">The Beaches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Main Beach (Shore Temple Beach)",
                    color: "bg-amber-50 border-amber-200",
                    th: "text-amber-800",
                    points: [
                      "In front of Shore Temple — best views",
                      "Touristy with vendors and touts",
                      "Good for sunset photography",
                      "Not ideal for swimming (rocky in parts)",
                      "Free to access",
                    ],
                    verdict: "Go for the views and sunset atmosphere. Photographers' favourite.",
                  },
                  {
                    name: "Silver Beach",
                    color: "bg-teal-50 border-teal-200",
                    th: "text-teal-800",
                    points: [
                      "2km south of town centre",
                      "Less crowded, cleaner sand",
                      "Better for swimming",
                      "Quieter — fewer vendors",
                      "Auto-rickshaw from main area: ₹60–₹80",
                    ],
                    verdict: "Better for actually relaxing on the beach. Less Instagram, more actual beach.",
                  },
                ].map((beach) => (
                  <div key={beach.name} className={`rounded-xl border p-5 ${beach.color}`}>
                    <h4 className={`font-medium text-sm mb-3 ${beach.th}`}>{beach.name}</h4>
                    <ul className="space-y-1.5 mb-3">
                      {beach.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-muted font-light">
                          <span className="text-current mt-0.5 flex-shrink-0">{"•"}</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted font-light italic border-t border-current/10 pt-2">{beach.verdict}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="font-serif text-lg text-ink font-normal mb-4">Where to Eat</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "La Vie en Rose",
                    type: "Rooftop · Seafood · Mid-range",
                    detail: "The most popular restaurant in Mahabalipuram among travellers. Rooftop seating with sea views, good seafood, wood-fired pizza, cold beer. Expect ₹400–₹700 per person. Gets crowded in the evening — arrive by 7pm.",
                    badge: "Best rooftop",
                    badgeColor: "bg-amber-100 text-amber-700",
                  },
                  {
                    name: "Moonrakers",
                    type: "Beach-facing · Backpacker favourite",
                    detail: "A Mahabalipuram institution for 30+ years. Simple decor, beach-facing, excellent grilled fish and tandoori. Budget-to-mid-range at ₹200–₹450 per person. Popular with solo travellers and backpackers. Cold Kingfisher on the beach at sunset.",
                    badge: "Local favourite",
                    badgeColor: "bg-teal-100 text-teal-700",
                  },
                  {
                    name: "Seashore Garden Restaurant",
                    type: "Budget · South Indian",
                    detail: "The best budget option in town. South Indian thali (rice, sambar, rasam, 4 vegetables, papad, pickle) for ₹120–₹180. Fresh, filling, and exactly what you want after a morning walking the monuments in the heat. Cash only.",
                    badge: "Budget pick",
                    badgeColor: "bg-green-100 text-green-700",
                  },
                ].map((r) => (
                  <div key={r.name} className="bg-white border border-parchment-2 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <div>
                        <p className="font-medium text-sm text-ink">{r.name}</p>
                        <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{r.type}</p>
                      </div>
                      <span className={`text-[0.6rem] px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${r.badgeColor}`}>{r.badge}</span>
                    </div>
                    <p className="text-xs text-muted font-light leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FIVE RATHAS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/blog/mahabalipuram-five-rathas.jpg"
                alt="Five Rathas (Pancha Rathas) monolithic rock-cut temples at Mahabalipuram"
                fill
                className="object-cover"
                sizes="(max-width: 860px) 100vw, 860px"
              />
            </div>
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Five Rathas — each carved from a single granite outcrop by Pallava craftsmen in the 7th century. Never completed and never used for worship, yet the most complete expression of early Dravidian temple architecture anywhere.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Going to Shore Temple at noon",
                  desc: "The temple is fully exposed with zero shade. At noon in summer it is 38–40°C on reflective granite. Sunrise (6am) is not just cooler — the quality of light and the lack of crowds make it an entirely different experience.",
                  icon: "⏰",
                },
                {
                  title: "Skipping the ASI combo ticket",
                  desc: "Buying separate tickets for Shore Temple (₹40) and Five Rathas (₹40) costs ₹80 total. The combo ticket is ₹600 but covers all ASI sites including caves. If you're visiting three or more sites — which you should — the combo is the only sensible choice. For foreigners it's especially clear: ₹600 each vs ₹2,500 combo.",
                  icon: "🎟️",
                },
                {
                  title: "Forgetting Crocodile Bank",
                  desc: "The majority of visitors to Mahabalipuram never go to Crocodile Bank. It is 15km north, takes a half-morning, costs ₹150, and houses 2,500+ crocodiles in one of the world's great conservation success stories. If you skip it you will regret it.",
                  icon: "🐊",
                },
                {
                  title: "Hiring a guide for Five Rathas",
                  desc: "The information boards at the Five Rathas are detailed, accurate, and written by the ASI. Freelance guides at the gate charge ₹500–₹1,000 and often add mythology that has no historical basis. Save your money or spend 10 minutes reading about the site beforehand.",
                  icon: "🗺️",
                },
                {
                  title: "Assuming the main beach is clean",
                  desc: "The main beach in front of Shore Temple is photogenic but not particularly clean for swimming. Silver Beach (2km south) is the better option if you want actual beach time in the water. Both are free.",
                  icon: "🏖️",
                },
                {
                  title: "Missing Tiger Cave",
                  desc: "9km north of Mahabalipuram, Tiger Cave (Yali Mandapam) is completely crowd-free, free to enter, and offers some of the best rock-cut architecture photography on the coast. Most visitors never hear of it. Pass it on the way to or from Crocodile Bank.",
                  icon: "🐯",
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
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>

            {/* Arjuna's Penance image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/blog/mahabalipuram-arjunas-penance.jpg"
                  alt="Arjuna's Penance bas-relief carved on two massive boulders at Mahabalipuram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 860px"
                />
              </div>
              <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
                <p className="text-xs text-muted font-light italic text-center">
                  Arjuna&apos;s Penance — 27 metres wide, 9 metres tall, carved on two natural boulders in the 7th century. The world&apos;s largest open-air bas-relief and still fully visible from the road for free.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Shore Temple at Sunrise",
                  desc: "Set your alarm for 5:30am. The temple opens around 6am. The first light on the Bay of Bengal with the granite towers catching the gold is genuinely life-changing. You will have the site almost entirely to yourself for the first hour.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🛵",
                  title: "Rent a Scooter for Day 2",
                  desc: "Crocodile Bank (15km north) and Tiger Cave (9km north) are easily combined on a rental scooter. Scooter hire in Mahabalipuram costs ₹300–₹400 for a full day. Auto-rickshaw round trip to Crocodile Bank is ₹400–₹600.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌊",
                  title: "Watch for High Tide at Shore Temple",
                  desc: "At high tide, the sea occasionally washes up close to the temple walls. The boundary wall keeps visitors safe, but the experience of watching waves crash near a 1,300-year-old temple is spectacular. Check tide times before you go.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "December Dance Festival",
                  desc: "The Mahabalipuram Dance Festival runs every year in December at the Shore Temple — classical Bharatanatyam and Carnatic performances against the lit temple backdrop. If your trip coincides, do not miss it. Book accommodation well in advance for December.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💳",
                  title: "Cash is Essential",
                  desc: "Many restaurants, auto-rickshaws, and smaller guesthouses in Mahabalipuram are cash-only. There are ATMs on the main street but they can run dry on busy weekends. Bring at least ₹2,000–₹3,000 in cash.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌡️",
                  title: "Visit in the Cool Season",
                  desc: "November to February is the ideal window — 22–28°C, sea breezes, and relatively low humidity. March onwards heats up fast. May and June are genuinely brutal (40°C+ with high humidity). October can see cyclone activity — check weather forecasts before booking.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Mahabalipuram itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mahabalipuram Trip {"→"}
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
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need for Mahabalipuram?",
                  a: "2 days is ideal. Day 1 covers the core monuments — Shore Temple, Arjuna's Penance, Five Rathas, Krishna's Butter Ball, and Mahishasura Mardini Cave. Day 2 adds the Shore Temple sunrise, Crocodile Bank (15km north), Tiger Cave, and beach time. One full day works as a day trip from Chennai but you miss the sunrise and Crocodile Bank.",
                },
                {
                  q: "What is the best time to visit Mahabalipuram?",
                  a: "November to February is the best time — temperatures 22–28°C, sea breezes, and low humidity. December hosts the annual Mahabalipuram Dance Festival at the Shore Temple. October can see cyclone activity on the Tamil Nadu coast. May and June are extremely hot (40°C+) and humid. The site is open year-round.",
                },
                {
                  q: "How do I get to Mahabalipuram from Chennai?",
                  a: "Mahabalipuram is 58km from Chennai. CMBT (Chennai Mofussil Bus Terminal) buses run every 30 minutes, take 1.5–2 hours, and cost ₹60. A taxi costs ₹1,200–₹1,500 and takes around 1.5 hours via the East Coast Road. There is no direct train — nearest station is Chengalpattu (27km), then connecting bus or auto.",
                },
                {
                  q: "What is the entry fee for Mahabalipuram?",
                  a: "Individual tickets: Shore Temple ₹40 (Indians) / ₹600 (foreigners), Five Rathas ₹40 / ₹600. The ASI combo ticket covers all sites — ₹600 for Indians, ₹2,500 for foreigners. Arjuna's Penance, Krishna's Butter Ball, and Tiger Cave are free. Crocodile Bank (15km north) is ₹150 separate.",
                },
                {
                  q: "Is Crocodile Bank worth visiting from Mahabalipuram?",
                  a: "Absolutely — it is one of the most underrated wildlife attractions in South India. The Madras Crocodile Bank Trust (15km north on ECR) houses 2,500+ crocodiles across 14 species. Entry ₹150. Opens at 8:30am. Most visitors to Mahabalipuram skip it entirely, which is a genuine mistake. Combine it with Tiger Cave (9km north) in a morning.",
                },
                {
                  q: "What is the budget for a 2-day Mahabalipuram trip?",
                  a: "Budget solo: ₹3,000–₹5,000 total for 2 days (guesthouse ₹600–₹1,000/night, meals ₹150–₹250/meal, auto ₹200–₹400/day, ASI combo ₹600 one-time). Mid-range: ₹8,500–₹14,000 for 2 days with a proper hotel and restaurant meals. The ASI combo ticket is the same for everyone — buy it at your first ASI site.",
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
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More South India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madurai — 2 Days at Meenakshi Temple", href: "/blog/madurai-2-days", soon: false },
                { label: "Pondicherry — 3 Days French Quarter Guide", href: "/blog/pondicherry-3-days", soon: false },
                { label: "Mysore — 3 Day Heritage Guide", href: "/blog/mysore-3-days", soon: false },
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

          <RelatedGuides currentSlug="mahabalipuram-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
