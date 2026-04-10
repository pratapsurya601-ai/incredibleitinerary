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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const ANGKOR_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Angkor Wat Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "temples",    emoji: "🏛️", label: "Temple Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
        className="h-full bg-amber-600 transition-all duration-100"
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
          href: `mailto:?subject=Angkor Wat 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Angkor Wat in 4 Days — sunrise, Bayon, Ta Prohm, and the temples most people miss&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/angkor-wat-4-days"
        imageUrl="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80"
        description="Angkor Wat in 4 Days: Sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing, and real USD costs for every budget."
      />
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function AngkorWatClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ANGKOR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Angkor Wat" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="angkor wat cambodia temple ruins sunrise khmer"
            fallback="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1600&q=80"
            alt="Angkor Wat Cambodia temple towers reflected in the moat at sunrise golden light"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Angkor Wat 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Angkor Wat in 4 Days:
                <em className="italic text-amber-300"> Sunrise, Bayon &amp; the Temples Most Visitors Miss</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                216 stone faces, jungle-swallowed towers, a reflection that doesn&apos;t look real at 5:30am, and the largest religious monument ever built. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇰🇭 Siem Reap, Cambodia</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Angkor Wat at 5:30am — the five towers emerging from pre-dawn mist above a moat still as glass, a reflection that makes it impossible to tell where the stone ends and the sky begins, the air thick with incense from monks beginning their morning rounds — is one of the great sights on earth.
            </p>
          </blockquote>

          {/* ── WHAT ANGKOR WAT ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Angkor Wat Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Angkor Wat is the largest religious monument ever constructed by humanity — 162 hectares, built over 37 years between 1113 and 1150 CE by the Khmer king Suryavarman II as a Hindu temple dedicated to Vishnu. At its peak, the Angkor complex as a whole was the largest pre-industrial city ever discovered, with an estimated population of 750,000 people. The Portuguese missionary António da Madalena, who visited in 1586, wrote that it &quot;is of such extraordinary construction that it is not possible to describe it with a pen.&quot;
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Angkor Archaeological Park covers 400 square kilometres and contains more than 70 temple complexes. Most visitors see only Angkor Wat, Bayon, and Ta Prohm — a reasonable first three — but the outlying temples (Banteay Srei, Preah Khan, Beng Mealea) contain some of the finest Khmer stonework ever carved. Four days lets you reach them.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The 3-day Angkor pass ($62, valid for any 3 days within a 7-day window) is the one non-negotiable purchase. It covers the entire archaeological zone. Buy it only at the official Angkor ticket office on the road to the park — nowhere else is legitimate. Your photo is taken on the spot; the pass is personalised and checked at every temple entrance.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="REP (Siem Reap)" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Mar" />
              <StatCard icon="🏛️" label="Temples" value="70+" />
              <StatCard icon="💰" label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Angkor Wat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Dry Season — Best Window",
                  d: "25–32°C in the mornings, lower humidity, clear skies. December and January are peak season — the light is softest and the air clearest. November and February are the sweet-spot shoulder months: excellent conditions with noticeably fewer tourists than the December–January peak.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Late Dry — Hot But Viable",
                  d: "32–38°C. The temples are less crowded than peak season. Dawn visits (5:30–9am) are still manageable. By 10am the causeway stone radiates heat. Rest strictly between noon and 3pm. March is excellent for photography — longer golden hours as the sun rises further north.",
                  b: "Morning visits only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jun",
                  i: "🔥",
                  t: "Early Wet — Avoid",
                  d: "38–42°C with rising humidity before the rains arrive. The hottest and most uncomfortable window for temple exploration. The stone surfaces of the causeway and upper galleries become genuinely dangerous in direct sun. If you must travel, limit visits to 6–9am only.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jul–Oct",
                  i: "🌧️",
                  t: "Wet Season — Lush & Uncrowded",
                  d: "28–33°C with afternoon thunderstorms that clear quickly. The Angkor complex transforms — moats full, jungle vivid green, almost no tourist crowds. Tonlé Sap Lake reaches its maximum size (16,000 km²). Temples remain open; some outer roads flood. Best for photography without crowds in the frame.",
                  b: "For adventurous travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Siem Reap</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Siem Reap International Airport (REP) is 8km from town — a 15-minute drive. Tuk-tuks cost $7–8; official taxis cost $9 fixed. Your hotel will often arrange free pickup. The Angkor Wat moat is visible from the road 5 minutes before central Siem Reap.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Siem Reap (REP) — recommended",
                  d: "Direct international connections from Bangkok (1 hr), Kuala Lumpur (2 hrs), Singapore (2.5 hrs), Ho Chi Minh City (1 hr), and Hanoi (1.5 hrs). Domestic flights from Phnom Penh (45 mins, $40–80 on Cambodia Angkor Air or Lanmei Airlines). International budget carriers including AirAsia and Bangkok Airways serve REP. Book 4–6 weeks ahead for peak season (Dec–Jan).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Phnom Penh (Giant Ibis / Mekong Express)",
                  d: "5–6 hours, $6–10 on Giant Ibis or Mekong Express — the two most reliable operators with modern air-conditioned buses and USB charging. Book online at giantibis.com. Departs from Phnom Penh Central Bus Terminal. Arrives at the respective operator&apos;s office near Siem Reap town centre. Excellent option if you&apos;re already in Phnom Penh.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Bangkok, Thailand",
                  d: "Bus + border crossing at Poipet (9–12 hrs total, $15–25). The Poipet border crossing is busy and the process takes 1–2 hours including Cambodian e-visa processing. Book a through-ticket with a reputable operator. Not recommended for first-time Cambodia visitors arriving on a tight schedule — the flight from Bangkok is 1 hour and costs little more.",
                  b: "Budget overland",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🛺",
                  t: "Tuk-Tuk from Siem Reap Airport to hotels",
                  d: "Official metered tuk-tuks are stationed outside arrivals. $7–8 to central Siem Reap. The driver will ask if you need a tuk-tuk for the full stay — negotiating a day rate ($15–20 for a full temple circuit day) with your airport driver is one of the smartest things you can do on arrival. A reliable driver is worth more than almost any other resource in Siem Reap.",
                  b: "Airport transfer",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Angkor Wat Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the heat — early starts (5–9am), rest from noon to 3pm, and afternoon temple visits timed for optimal light. Prices in USD and KHR (4,000 riel = $1).
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Angkor Wat Sunrise · Main Temple Galleries · Pub Street Evening"
                cost="$30–45 total (tuk-tuk + 3-day pass + meals)"
                items={[
                  "4:45am — Tuk-tuk to Angkor Wat for sunrise. Negotiate $15–20 for a full-day tuk-tuk with the same driver — the best deal in Siem Reap. The driver will bring you at the same time each morning if you ask and keep the same arrangement for all four days.",
                  "5:00am — Enter through the main western causeway gate. Walk the full 475-meter causeway in the dark. Position yourself at the left (south) reflecting pond — the classic Angkor Wat reflection shot. The five towers emerge as the sky lightens from black to purple to gold. This is 2 hours you will not forget.",
                  "7:00am — Once the main courtyard fills (8am), move to the outer galleries. The Churning of the Sea of Milk bas-relief (south gallery, eastern section) stretches 49 meters — 88 gods pulling on a giant serpent to churn the cosmic ocean. The finest narrative stonework in the world.",
                  "9:00am — Climb to the upper sanctuary if open (restricted timed entry, strictly enforced modest dress: knees and shoulders covered). The 70-degree stone staircases were built steep to symbolize the difficulty of reaching the gods.",
                  "11:00am — Return to Siem Reap. Budget breakfast at a local noodle shop near the Old Market ($1.50 — try bai sach chrouk, pork and rice, the classic Cambodian breakfast). Buy your 3-day Angkor pass ($62) at the official ticket office if you haven&apos;t already.",
                  "Afternoon rest — the complex is brutal in midday heat (35–38°C in dry season). Hotel pool or air-conditioned café. This is non-negotiable.",
                  "6:00pm — Pub Street, Siem Reap ($2 Angkor beer, $3–5 fish amok curry, $2 lok lak stir-fry with egg). Pure tourist infrastructure but cheerful, cheap, and the alley atmosphere at night is worth experiencing once.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ta Prohm at Dawn · Angkor Thom · Bayon · Elephant Terrace"
                cost="$25–40 total (tuk-tuk + lunch + evening)"
                items={[
                  "6:30am — Tuk-tuk to Ta Prohm (15 minutes from Siem Reap). Arrive before 8am — before the tour buses. The temple that inspired Lara Croft&apos;s Tomb Raider is exactly what it looks like in the films: massive silk-cotton and strangler fig tree roots embracing stone towers, roots the size of walls splitting galleries, silence except for birdsong. The most photogenic site in Angkor. At 8am it transforms into a crowded photo queue.",
                  "9:00am — Drive through the south gate of Angkor Thom — the 8-meter faces on the gate towers are your introduction to Bayon&apos;s visual language. The 12th-century walled city of Angkor Thom is 9 square kilometres — larger than medieval London.",
                  "9:30am — Bayon Temple: 54 towers, each carved with four enormous faces (216 faces total) gazing in all four compass directions. The face of the bodhisattva Avalokiteshvara — or possibly of King Jayavarman VII himself — repeated endlessly in stone. Come in late morning when the sun angles create dramatic shadow across the faces.",
                  "11:00am — Baphuon Temple (pyramid form, restored over 50 years by French archaeologists, completed 2011) + Phimeanakas (the intimate royal palace temple) + the Elephant Terrace (300 meters of carved elephants in parade formation along the Royal Plaza).",
                  "12:30pm — Lunch at a local restaurant outside the Angkor complex (the restaurants inside are overpriced — $5–7 for chicken lok lak with rice and a cold Angkor beer at any place along Route 6).",
                  "2:00pm — Banteay Kdei (12th century, quiet, almost no tourists, excellent carved pediments, free with Angkor pass). This is a good hour to simply sit in a Khmer temple courtyard and absorb the scale of what was built here.",
                  "Evening: Pub Street or a 2-hour cooking class ($10–15 covering three Cambodian dishes — book at any tour agent on the main street).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Banteay Srei · Preah Khan · Neak Pean · Afternoon Rest"
                cost="$40–65 total (Banteay Srei entry + transport + dinner)"
                items={[
                  "7:00am — Early departure for Banteay Srei (32km north of Siem Reap, 45 minutes by tuk-tuk — add $5–8 to your daily tuk-tuk rate for the extra distance). The 10th-century &apos;Jewel of Khmer Art&apos; is built from pink sandstone that carves more finely than standard laterite. Every surface is covered in mythological bas-reliefs at a level of detail that seems physically impossible — devatas (divine female figures), kala (demon faces), intricate scrolling vegetation. UNESCO considers it among the finest Khmer stonework. Entry $37 (separate from the Angkor pass).",
                  "10:00am — Return toward Angkor via Preah Khan (12th century, built by Jayavarman VII as a city temple — its roofless galleries and mature-tree-entwined towers give a more jungle-embedded atmosphere than the main complex). A two-story structure with unique round columns — most Khmer columns are square — marks where a statue of the king&apos;s father once stood.",
                  "12:00pm — Neak Pean (a small jewel-like temple set on an artificial island representing the legendary Himalayan lake Anavatapta). The central pond system and statues emerging from the water are extraordinary. Best photographed in morning light, which you&apos;ve just missed — but still worth 30 minutes.",
                  "1:30pm — Preah Ko (one of the oldest temples in the Angkor area, 9th century, six brick towers standing in open rice paddy landscape — a completely different, quieter atmosphere from the main complex). 40,000 riel / $10 entry.",
                  "3:00pm — Return to Siem Reap. Rest, shower, and a traditional Khmer massage ($8–12 at any reputable spa on the main street).",
                  "7:00pm — Final Siem Reap dinner: Cuisine Wat Damnak or Malis for upmarket Cambodian food ($15–25 per person) — the best introduction to authentic Cambodian cuisine beyond the Pub Street basics.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Tonlé Sap Floating Villages · Phnom Bakheng Sunset · Departure Dinner"
                cost="$25–45 total (lake tour + sunset temple + final dinner)"
                items={[
                  "8:00am — Tonlé Sap Lake tour ($15–20 per person; book the night before through any tour agent or your hotel). The largest freshwater lake in Southeast Asia — 16,000 km² at peak flood, home to floating villages where entire communities live on water year-round: schools, churches, restaurants, and basketball courts, all floating.",
                  "The 30-minute boat ride across the lake passes fish trap arrays and water hyacinth mats before reaching Kompong Phluk or Chong Khneas floating village. The communities depend on the lake&apos;s extraordinary productivity — the Mekong&apos;s annual flood pulse pushes fish into the lake each rainy season, making it one of the most productive freshwater fisheries on earth.",
                  "11:00am — Return to Siem Reap for lunch and rest during the hottest part of the day. Pack and check out if departing the following morning.",
                  "4:30pm — Phnom Bakheng sunset: the hilltop 10th-century temple with the best panoramic view over the Angkor Archaeological Park. Limited to 300 visitors at sunset — arrive by 4pm to secure a spot (the climb takes 15 minutes on a steep stone path). The view of Angkor Wat&apos;s towers on the horizon at last light is genuinely breathtaking.",
                  "7:00pm — Final dinner in Siem Reap. Cambodian fish amok — fish curry steamed in banana leaf with coconut cream and kaffir lime, the national dish — is best at smaller family restaurants away from Pub Street. Budget $4–8 per person.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Angkor Wat" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Temple Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important temples in order of priority. Entry fees as of early 2026 — the 3-day Angkor pass ($62) covers most sites; Banteay Srei and a few outlying temples require separate admission.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Angkor Wat",
                  e: "Included in Angkor pass",
                  d: "The largest religious monument ever constructed — 162 hectares, five central towers representing Mount Meru. The western causeway at sunrise is a once-in-a-lifetime experience. The outer galleries contain 800 meters of continuous bas-relief narrative, including the 49-meter Churning of the Sea of Milk. Allow a full morning (5:30–11am) for a proper visit.",
                  t: "Must see · Full morning",
                },
                {
                  n: "Bayon",
                  e: "Included in Angkor pass",
                  d: "54 towers, 216 stone faces gazing in all four directions — the most architecturally unusual temple in the zone. Built by Jayavarman VII in the late 12th century as the state temple of Angkor Thom. Visit in the afternoon (3–4pm) when the western faces catch golden light and the shadow play under the stone eyelids is at its most dramatic.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Ta Prohm",
                  e: "Included in Angkor pass",
                  d: "The &apos;Tomb Raider temple&apos; — massive silk-cotton and strangler fig tree roots embracing and splitting the stone galleries. The jungle has been deliberately left partially in place by conservation decision. The most photogenic site in Angkor. Arrive before 8am. The Tomb Raider courtyard and East Gopura tree are the shots everyone wants — and at 6:30am you can have them alone.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Banteay Srei",
                  e: "$37 (separate from Angkor pass)",
                  d: "The &apos;Jewel of Khmer Art&apos; — 10th century, pink sandstone, carvings of almost impossible delicacy. 32km north of Siem Reap. The devatas, kala faces, and decorative vegetation across every pediment and lintel are considered the finest examples of Khmer decorative stonework. If you can only visit one outlying temple, this is the one.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Preah Khan",
                  e: "Included in Angkor pass",
                  d: "A 12th-century city temple with roofless galleries, tree-entwined towers, and a unique two-story pavilion with round columns. Less visited than the main circuit. The atmosphere — part ruin, part jungle — is more atmospheric than the heavily restored central temples. Allow 1 hour.",
                  t: "Highly recommended · 1 hr",
                },
                {
                  n: "Phnom Bakheng",
                  e: "Included in Angkor pass",
                  d: "A 10th-century hilltop temple with the best panoramic view over the archaeological park. Limited to 300 visitors at sunset. Arrive by 4pm. The view of Angkor Wat&apos;s five towers on the horizon at last light is the perfect final image of the trip.",
                  t: "Sunset only · 1.5 hrs",
                },
                {
                  n: "Angkor Thom Gates & Elephant Terrace",
                  e: "Included in Angkor pass",
                  d: "The walled city of Angkor Thom (9 km²) is entered through five gates, each flanked by 8-meter faces. The Elephant Terrace (300 meters of carved parade elephants along the Royal Plaza) and Baphuon (restored pyramid temple) are the highlights inside the walls beyond Bayon.",
                  t: "Half day · With Bayon",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Angkor Wat — Temples, Faces &amp; the Jungle"
            subtitle="The Khmer Empire&apos;s extraordinary stone legacy in northwest Cambodia."
            spots={[
              {
                name: "Angkor Wat Sunrise Reflection",
                query: "angkor wat cambodia sunrise reflection moat golden light",
                desc: "The five towers of Angkor Wat reflected in the south reflecting pond at sunrise — the most iconic image in Southeast Asia.",
              },
              {
                name: "Bayon Temple Face Towers",
                query: "bayon temple angkor thom stone faces cambodia khmer",
                desc: "216 stone faces on 54 towers gazing in all four cardinal directions — the most architecturally unusual temple in the Angkor complex.",
              },
              {
                name: "Ta Prohm Tree Roots",
                query: "ta prohm temple tree roots jungle cambodia angkor",
                desc: "Strangler fig and silk-cotton tree roots embracing the stone galleries of Ta Prohm — the &apos;Tomb Raider temple.&apos;",
              },
              {
                name: "Banteay Srei Pink Sandstone",
                query: "banteay srei pink sandstone carvings cambodia khmer temple",
                desc: "The extraordinary pink sandstone carvings of Banteay Srei — UNESCO considers them among the finest examples of Khmer decorative art.",
              },
              {
                name: "Tonlé Sap Floating Village",
                query: "tonle sap floating village cambodia siem reap lake",
                desc: "Kompong Phluk floating village on Tonlé Sap — Southeast Asia&apos;s largest freshwater lake, where communities live entirely on water.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cambodia operates almost entirely in US dollars. The Angkor pass ($62 for 3 days) is your main fixed cost — everything else is extremely affordable by Southeast Asia standards.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights to Siem Reap", "variable", "variable", "variable"],
                    ["🏨 Accommodation (4 nights)", "$40–100", "$160–360", "$800–4,800"],
                    ["🎟️ 3-day Angkor pass", "$62", "$62", "$62"],
                    ["🛺 Tuk-tuk (4 days)", "$60–80", "$80–120", "$120–200"],
                    ["🍽️ Food (4 days)", "$32–60", "$80–160", "$240–600"],
                    ["🏛️ Extra entries (Banteay Srei)", "$37", "$37", "$37"],
                    ["🚢 Tonlé Sap tour", "$15–20", "$30–45", "$80–120"],
                    ["TOTAL (per person, 4 days)", "$246–359", "$449–784", "$1,339–5,819"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($35–60/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses near Pub Street ($10–25/night), local noodle shops and Pub Street meals ($8–15/day), shared tuk-tuk. Perfectly comfortable — Siem Reap&apos;s budget infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($100–200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels ($40–90/night), restaurant meals at Haven or Malis ($20–40/day), private tuk-tuk driver for the full trip, licensed guide for days 1–2 ($25–35/day). The sweet spot for Angkor.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($350–1,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Amansara or Belmond La Résidence d&apos;Angkor ($300–1,200/night), specialist archaeologist guides, helicopter flight over Angkor ($350–500), Cuisine Wat Damnak chef&apos;s table ($65–80/person).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Siem Reap</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best location is within 2km of Pub Street and the Old Market — a 10-minute tuk-tuk ride to the Angkor ticket office. Boutique hotels in this area give you walkability without the noise of the Pub Street block itself.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Amansara",
                  type: "Ultra-luxury · Inside the Angkor Archaeological Zone",
                  price: "From $600/night",
                  badge: "Most exclusive",
                  desc: "24 suites in a 1960s villa that once hosted Jacqueline Kennedy, now Cambodia&apos;s most celebrated hotel. Private pool suites, Angkor expert guides on staff, and access to after-hours temple arrangements not available elsewhere. The benchmark for luxury in Southeast Asia.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Belmond La Résidence d&apos;Angkor",
                  type: "Luxury · Central Siem Reap",
                  price: "From $300/night",
                  badge: "Best location",
                  desc: "Teak pavilions over a river, infinity pool, excellent Khmer cuisine at the in-house restaurant. 5 minutes from Pub Street, 15 minutes from the ticket office. The best value luxury option in Siem Reap — significantly cheaper than Amansara with comparable atmosphere.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Viroth&apos;s Hotel",
                  type: "Boutique mid-range · Near Old Market",
                  price: "From $60/night",
                  badge: "Best boutique",
                  desc: "Cambodian-owned boutique with a plunge pool, clean modern rooms, and warm service. 7 minutes&apos; walk to the Old Market and 5 minutes to the tuk-tuk rank. Breakfast included. The most recommended mid-range option among independent travellers who know Siem Reap well.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Mad Monkey Hostel",
                  type: "Budget · Near Pub Street",
                  price: "From $10/night",
                  badge: "Best budget",
                  desc: "The best-known backpacker hostel in Siem Reap. Dorms and private rooms, rooftop pool, social atmosphere. Great for solo travellers looking for tuk-tuk sharing and temple-visiting company. 3-minute walk from Pub Street. Noisy on weekend evenings — bring earplugs.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Shinta Mani Wild",
                  type: "Eco-luxury · Remote jungle location",
                  price: "From $250/night",
                  badge: "Most unique",
                  desc: "Luxury tented camp in the Cardamom Mountains, reachable from Siem Reap by helicopter. Not for the standard Angkor trip — but if you&apos;re combining temples with a jungle experience, this is the most extraordinary accommodation in Cambodia.",
                  color: "border-green-200 bg-green-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Siem Reap</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Siem Reap&apos;s food scene runs from $1.50 noodle stalls to some of the best Cambodian fine dining in the world. The three dishes to try: fish amok (steamed coconut fish curry), lok lak (stir-fried beef with lime-pepper sauce), and Khmer BBQ.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cuisine Wat Damnak",
                  t: "Fine dining · Cambodian tasting menu",
                  d: "One of the best restaurants in Southeast Asia. Chef Joannès Rivière&apos;s 6-course tasting menus ($45–65 per person) use only Cambodian ingredients — foraged herbs, lake fish, jungle mushrooms — in dishes of stunning finesse. Book 2–3 days ahead in peak season. Worth every dollar.",
                  b: "Best restaurant",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Khmer BBQ Street (Night Market area)",
                  t: "Street food · Old Market",
                  d: "The open-air Khmer BBQ strip near the Old Market: banana-leaf-wrapped fish, grilled pork skewers, corn, and frogs&apos; legs over charcoal, eaten on low plastic stools with $1 Angkor beers. $4–8 per person all-in. The most local eating experience in Siem Reap. Go at 7pm when the grills are freshest.",
                  b: "Most local",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Haven Restaurant",
                  t: "Khmer-French fusion · Training restaurant",
                  d: "A social enterprise training disadvantaged youth in hospitality. The food — Khmer-French fusion, $15–25 per person — is genuinely excellent, the service is warm and attentive, and your meal directly funds the programme. Fish amok, beef lok lak, and the lotus flower salad are all outstanding.",
                  b: "Best mid-range",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pub Street Restaurants",
                  t: "Tourist strip · Central Siem Reap",
                  d: "Angkor beer for $2, fish amok for $4–6, fried rice for $3. The food is decent rather than great — it&apos;s designed for speed and volume. Good for a cheerful first night. By night 3 you&apos;ll want something more authentic. The best thing about Pub Street is sitting outside with a cold beer after a full day of temples.",
                  b: "Good for Day 1",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Phsar Chas (Old Market) Food Stalls",
                  t: "Local market · Old Market area",
                  d: "The covered Old Market has a fresh food section on the west side open from 6am. Bai sach chrouk (pork and rice, the Cambodian breakfast, $1.50), nom banh chok (Khmer noodles with green herb sauce, $1.50), and fresh sugar cane juice ($0.50). Eat here on at least one morning — the best $2 breakfast in Siem Reap.",
                  b: "Best breakfast",
                  c: "bg-teal-50 border-teal-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Siem Reap Cambodia"
            hotels={[
              {
                name: "Amansara Siem Reap",
                type: "Ultra-luxury boutique · Inside Angkor Zone",
                price: "From $600/night",
                rating: "5",
                badge: "Most exclusive",
                url: "https://www.booking.com/hotel/kh/amansara.html?aid=2820480",
              },
              {
                name: "Belmond La Résidence d&apos;Angkor",
                type: "Luxury · Central Siem Reap",
                price: "From $300/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/kh/la-residence-d-angkor.html?aid=2820480",
              },
              {
                name: "Viroth&apos;s Hotel",
                type: "Boutique mid-range · Old Market area",
                price: "From $60/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/kh/viroth-s.html?aid=2820480",
              },
              {
                name: "Mad Monkey Siem Reap",
                type: "Backpacker hostel · Near Pub Street",
                price: "From $10/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/kh/mad-monkey-hostel-siem-reap.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Angkor Wat Private Guided Tour",
                duration: "8 hrs",
                price: "From $25/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=angkor+wat+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Angkor Wat Sunrise Small Group",
                duration: "4 hrs",
                price: "From $18/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=angkor+wat+sunrise+tour&partner_id=PSZA5UI",
              },
              {
                name: "Tonlé Sap Lake Floating Village",
                duration: "3 hrs",
                price: "From $15/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=tonle+sap+lake+tour+siem+reap&partner_id=PSZA5UI",
              },
              {
                name: "Angkor Helicopter Flight",
                duration: "30 min",
                price: "From $350/person",
                badge: "Luxury",
                url: "https://www.getyourguide.com/s/?q=angkor+wat+helicopter&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎟️",
                  title: "Buying Only the 1-Day Angkor Pass",
                  desc: "The Angkor Archaeological Zone contains 70+ temples spread over 400 square kilometres. A 1-day pass ($37) gives you one full day — enough for Angkor Wat and possibly Bayon. But you&apos;ll miss Ta Prohm, Banteay Srei (the finest carvings in the complex), Preah Khan, and the entire outer circuit. The 3-day pass is $62 — $25 more for three times the temple access. For anyone visiting Cambodia for the first time, the 3-day pass is the only rational choice.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☀️",
                  title: "Visiting Angkor Wat at Midday in the Heat",
                  desc: "The Angkor complex sits at 13° north latitude. In November–March, midday temperatures reach 35–38°C with direct equatorial sun and no shade on the main causeway or upper galleries. Heat exhaustion is a documented risk. Visit temples from 5:30–11am, rest from noon to 3pm (hotel pool or air-conditioned café), then return for 3:30–5:30pm. This schedule also gives you the best light — midday sun bleaches the stone grey.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "Skipping Bayon for Angkor Wat Alone",
                  desc: "Most visitors spend their entire time at Angkor Wat proper and miss Bayon entirely — arguably the most architecturally remarkable temple in the zone. The 216 carved faces on 54 towers create a visual experience unlike anything in Angkor Wat. Angkor Wat is magnificent symmetry; Bayon is magnificent strangeness. Both are essential. Budget at least 2 hours for Bayon, and visit it in the afternoon when the western faces catch gold light.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📸",
                  title: "Missing Ta Prohm Before the Crowds Arrive",
                  desc: "Ta Prohm&apos;s famous Tomb Raider trees — the massive silk-cotton roots embracing the stone gallery — are in specific locations in the east gallery and the Tomb Raider courtyard. Crowds funnel through these spots from 8:30am onward. Arrive at 6:30–7:00am. The light is beautiful, you may be the only person there, and your photographs will look nothing like the ones taken at 10am with 50 other tourists in frame.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Angkor Wat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "South Pond Reflection: 30 Degrees Off-Centre",
                  desc: "The reflecting pond on the left (south) side of the main causeway gives the classic Angkor Wat reflection. Position yourself 30 degrees left of the central axis for the composition where all five towers are visible above and below. Arrive before 5am to secure this spot. In November–February the sun rises directly behind the central tower, creating a silhouette effect.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌳",
                  title: "Ta Prohm at 6:30am: Shafts of Light Through the Roots",
                  desc: "Ta Prohm faces east — morning light enters through the eastern gallery. At 6:30am (before tour groups arrive at 8:30am), the low sun creates shaft-of-light effects through the tree-root-covered ruins that are extraordinary for photography. Go to the East Gopura first — the most famous single tree growing through a stone doorway. You&apos;ll have it to yourself for 15 minutes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "😊",
                  title: "Bayon at 3pm: Faces in Gold Light",
                  desc: "Bayon faces west. In the afternoon the sun illuminates the western faces with warm golden light while eastern faces fall into shadow — creating the dramatic contrast that makes the 216 faces most photogenic. Visit Bayon as your last stop of the afternoon circuit (3–4pm) rather than morning. At 3pm in dry season the stone is warm orange-gold and shadows carve deep under the stone eyelids.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🛺",
                  title: "Negotiate a 4-Day Tuk-Tuk Rate on Arrival",
                  desc: "Find a driver you trust on day 1 and negotiate a full 4-day rate ($60–80 total, all temple circuits included). A good tuk-tuk driver knows which paths avoid crowds, knows the best photography timing, and will tell you when to arrive at each temple. This is worth more than any guidebook. Ask your hotel for a recommended driver.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💧",
                  title: "Carry USD$1 Bills and Small Riel",
                  desc: "Cambodia runs on USD. Bring plenty of $1 and $5 bills — tuk-tuk drivers and temple vendors cannot make change for $50 notes. Small riel notes (500 and 1,000 riel, equivalent to $0.12–$0.25) are used for small purchases and tips. ATMs in Siem Reap dispense $50 and $100 bills by default — ask for small bills or break them immediately at a 7-Eleven.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "👗",
                  title: "Dress Code Is Strictly Enforced at Angkor Wat",
                  desc: "Knees and shoulders must be covered to enter the inner galleries and upper sanctuary of Angkor Wat. A sarong ($2–3 at the entrance) works but is hot. Wear light cotton trousers and a short-sleeve shirt. The dress code is enforced at the gate — you will be turned away if you arrive in shorts and a vest, regardless of how early you got up.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Angkor Wat" />

          {/* Combine With */}
          <CombineWith currentSlug="angkor-wat-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Cambodia?",
                  a: "Yes. Indian passport holders need a Cambodia e-visa ($30 USD, 30 days single entry). Apply at evisa.gov.kh — the official portal. Processing takes 3 business days; apply at least a week before your trip. Alternatively, visa on arrival is available at Siem Reap Airport ($30 + passport photo), but the queue can be 45–60 minutes during peak season. The e-visa is the recommended option. Note: the Angkor Archaeological Park requires a separate pass — the visa and the Angkor pass are two entirely different things.",
                },
                {
                  q: "Is the 1-day or 3-day Angkor pass better value?",
                  a: "The 3-day pass ($62) is far better value than three separate 1-day passes ($111 total) and allows you to see the full scope of the Angkor complex. The 3-day pass allows entry on any 3 days within a 7-day window — days do not need to be consecutive. For any first visit to Angkor, the 3-day pass is the only rational choice. The 1-day pass ($37) is only logical if you have a genuine flight constraint and only one morning.",
                },
                {
                  q: "What is the best time of year to visit Angkor Wat?",
                  a: "November to March is the best window: dry season, lower humidity, temperatures of 25–32°C in the early morning. Peak season is December–January when the light is softest and the air clearest. Avoid April–May (38–42°C) and June–September (rainy season — beautiful and uncrowded, but access roads can flood). November and March are the best shoulder-season choices: great conditions with noticeably fewer tourists than December–January.",
                },
                {
                  q: "How do you get from Phnom Penh to Siem Reap?",
                  a: "By plane: 45 minutes, $40–80 on Cambodia Angkor Air or Lanmei Airlines (recommended if time is short). By bus: 5–6 hours, $6–10 on Giant Ibis or Mekong Express — the two most reliable operators with modern air-conditioned buses. Book online. By tourist speedboat: a 6-hour Tonlé Sap lake route used to run regularly but services have become unreliable — check current availability before planning around it.",
                },
                {
                  q: "How does Angkor Wat compare to other Asian temple complexes?",
                  a: "Angkor Wat is the largest religious monument ever constructed by humanity — 162 hectares, built between 1113–1150 CE. By comparison, Borobudur in Indonesia covers 2.5 hectares and Bagan in Myanmar has 2,000+ temples across a wider area. The Angkor complex as a whole (including Angkor Thom and outlying temples) represents the largest pre-industrial city ever discovered. Nothing else on earth compares at this scale.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Angkor Wat trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/siem-reap-3-days", label: "Siem Reap 3 days", icon: "🗓️" },
                { href: "/blog/cambodia-visa-guide", label: "Cambodia visa guide", icon: "📋" },
                { href: "/blog/angkor-pass-guide", label: "Angkor pass guide", icon: "🎟️" },
                { href: "/blog/phnom-penh-2-days", label: "Phnom Penh 2 days", icon: "🏙️" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="angkor-wat-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bagan in 4 Days — Myanmar&apos;s Temples", href: "/blog/bagan-4-days" },
                { label: "Luang Prabang 4 Days — Laos", href: "/blog/luang-prabang-4-days" },
                { label: "Chiang Mai 4 Days — Thailand", href: "/blog/chiang-mai-4-days" },
                { label: "Mekong Delta 3 Days — Vietnam", href: "/blog/mekong-delta-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
