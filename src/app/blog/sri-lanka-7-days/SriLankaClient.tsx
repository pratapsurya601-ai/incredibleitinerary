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
const SRI_LANKA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Sri Lanka Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Sri Lanka 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Sri Lanka in 7 Days — Sigiriya, tea train and Galle Fort&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/sri-lanka-7-days"
        imageUrl="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80"
        description="Sri Lanka in 7 Days: Sigiriya Rock, Kandy Tooth Temple, the scenic tea train, Galle Fort and south coast beaches — complete travel guide with budget breakdown."
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
export default function SriLankaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SRI_LANKA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Sri Lanka" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="sri lanka sigiriya lion rock temple elephant train"
            fallback="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1600&q=80"
            alt="Sri Lanka Sigiriya Lion Rock fortress rising above jungle at sunrise"
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
              <span className="text-white/70">Sri Lanka 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  7-Day Itinerary
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Sri Lanka in 7 Days:
                <em className="italic text-amber-300"> Sigiriya, Tea Train &amp; Galle Fort</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A 1,200-step rock fortress, the most photogenic train ride in Asia, five centuries of Buddhist cave temples, stilt fishermen at dawn, and whale sharks off the south coast. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇱🇰 Sri Lanka</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sri Lanka is the rare destination that delivers every type of travel experience within a country the size of Ireland — a 1,200-step rock fortress that predates most European cathedrals, five centuries of Buddhist cave temples, the most photogenic train ride in Asia through tea-scented mountains, stilt fishermen at dawn on the Indian Ocean, and whale sharks in the warm waters off the south coast. Seven days is enough to get to the heart of it.
            </p>
          </blockquote>

          {/* ── WHAT SRI LANKA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Sri Lanka Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Sri Lanka packs an extraordinary density of experiences into a small island. Sigiriya Rock Fortress — a 5th-century palace built on a 200-metre granite column rising from flat jungle — is one of the great archaeological wonders of Asia. The Dambulla Cave Temple preserves 2,000 years of Buddhist art across five painted caves with 153 statues. Kandy holds the most sacred Buddhist relic outside India: the left canine tooth of the historical Buddha, housed in the Temple of the Tooth with drumming pujas three times daily.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The train from Kandy to Ella through the tea-growing highlands is consistently rated the most scenic rail journey in Asia — seven hours through emerald tea estates, across the Nine Arches Bridge, past waterfalls and 2,000-metre mountain passes. The south coast has Galle Fort, a perfectly preserved 17th-century Dutch colonial fortification enclosing a living town of cafes, art galleries, and boutique hotels on the Indian Ocean.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The cost of travel is remarkably low. A full rice and curry meal at a local canteen costs LKR 500–900 ($1.50–$3). A guesthouse room in any part of the country is LKR 2,500–5,000 ($8–$18). The scenic train from Kandy to Ella costs LKR 600–2,400 ($2–$8) for second class reserved. You can travel Sri Lanka comfortably for $30–55 per day on a budget, or $80–160 for mid-range comfort.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CMB" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Apr" />
              <StatCard icon="🗓" label="Duration" value="7 Days" />
              <StatCard icon="💰" label="Budget From" value="$30/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Sri Lanka</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Sri Lanka has two monsoon seasons affecting different coasts. The west/south coast and the hill country have different optimal windows from the east coast. The Cultural Triangle (Sigiriya, Dambulla) is accessible year-round.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Apr",
                  i: "☀️",
                  t: "West & South Coast — Best Season",
                  d: "Dry, sunny, 28–32°C. Ideal for Colombo, Galle, Mirissa, Unawatuna, and whale watching (December–March peak). This is the prime window for the 7-day route in this guide. Book the scenic train and Galle Fort hotels well ahead — this is peak season.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Sep",
                  i: "🌊",
                  t: "East Coast — Best Season",
                  d: "While the southwest monsoon drenches Colombo and Galle, the east coast (Trincomalee, Arugam Bay, Passikudah) is dry and sunny. The best surf at Arugam Bay is June–August. If you want east coast beaches and surfing, flip the calendar.",
                  b: "East coast only",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌧️",
                  t: "Inter-Monsoon — Wettest Period",
                  d: "Both coasts can see rain during the inter-monsoon transition. Short, intense afternoon showers are common islandwide. The Cultural Triangle and hill country still work — mornings are usually clear. Not ideal for beaches but the countryside is lush green.",
                  b: "Variable weather",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Year-round",
                  i: "🏛️",
                  t: "Cultural Triangle & Hill Country",
                  d: "Sigiriya, Dambulla, Kandy, and Ella sit in the central highlands and the Cultural Triangle dry zone. They are accessible in any month, though mornings are clearer and cooler in the December–April window. The scenic train runs year-round regardless of monsoon.",
                  b: "Always accessible",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Sri Lanka</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> All visitors require an Electronic Travel Authorization (ETA) before arrival. Apply at <strong className="font-medium">VisaOnline.gov.lk</strong> — $35 USD, processed within 24–48 hours. Do not rely on getting this at the airport.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Colombo Bandaranaike International (CMB)",
                  d: "The only international airport for most travellers. 35km north of Colombo city center. Airport taxi to Colombo: LKR 4,500–6,000 ($15–$20). Airport express bus to Colombo Fort station: LKR 1,500–2,400 ($5–$8). Express tuk-tuk to nearby Negombo: LKR 900–1,500 ($3–$5).",
                  b: "Main airport",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India — Flights",
                  d: "Direct flights from Chennai (1.5 hrs), Delhi (3.5 hrs), Mumbai (2.5 hrs), Bangalore (2 hrs), and Kochi (1 hr) to Colombo. Budget airlines (IndiGo, SpiceJet, AirAsia India) offer fares from INR 5,000–12,000 one way. SriLankan Airlines and Air India also operate these routes.",
                  b: "Most popular route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Getting Around — Trains",
                  d: "Sri Lanka Railways operates a scenic network connecting Colombo, Kandy, Ella, Nuwara Eliya, and Galle. The Kandy–Ella route is the most scenic train ride in Asia. Book at raildna.com 2–4 weeks ahead. Second class reserved: LKR 600–1,800 ($2–$6). First class: LKR 2,400–4,500 ($8–$15).",
                  b: "Essential experience",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Getting Around — Buses & Private Drivers",
                  d: "Public buses connect all major towns cheaply (LKR 300–2,400 / $1–$8 for most routes). Shared minivans are faster and slightly more expensive. Private driver-guides cost LKR 18,000–24,000 ($60–$80) per day with vehicle — excellent value for groups and the most flexible option.",
                  b: "Flexible options",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Sri Lanka Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This route covers the west/south coast circuit: Colombo, the Cultural Triangle (Sigiriya, Dambulla), Kandy, the scenic hill country train to Ella, and the south coast (Galle, beaches). Best for December–April. All prices in LKR with USD equivalents.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Colombo — Arrival, Temples & Galle Face Sunset"
                cost="LKR 7,500–12,000 ($25–$40)"
                items={[
                  "Arrive at Colombo Bandaranaike (CMB). Airport taxi to Colombo city: LKR 4,500–6,000 ($15–$20), or airport express bus: LKR 1,500–2,400 ($5–$8).",
                  "Gangaramaya Temple (LKR 900 / $3) — Colombo's most celebrated Buddhist temple, a fascinating mix of Thai, Indian, Chinese, and Sri Lankan architecture styles. The adjacent museum houses extraordinary donated religious objects. Best visited at dawn before the tour buses.",
                  "Dutch Hospital Precinct (free entry) — a beautifully restored 17th-century Dutch colonial building, now housing cafes, restaurants, and boutiques. Good coffee and lunch options at LKR 1,500–3,000 ($5–$10) per person.",
                  "Pettah Bazaar (free) — the most frenetic market district in Colombo, arranged by street: electronics, spices, fabrics, fruit. Entirely local, zero tourist infrastructure. Watch for tuk-tuks; keep your bag in front.",
                  "Galle Face Green at sunset (free) — Colombo's seafront promenade on the Indian Ocean. Food stalls sell spicy fish rolls, isso wade (shrimp fritters), and corn on the cob for LKR 150–450 ($0.50–$1.50). The sunset over the ocean is the best free view in Colombo.",
                  "Dinner at a local rice and curry canteen near Galle Face — LKR 450–900 ($1.50–$3) for a full meal of rice, three curries, dhal, and pickle. This is how 22 million Sri Lankans eat every day. It is outstanding.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sigiriya Rock Fortress — The Cultural Triangle"
                cost="LKR 10,500–18,000 ($35–$60)"
                items={[
                  "Morning — shared minibus or public bus Colombo to Sigiriya via Dambulla (5–6 hours, LKR 1,200–2,100 / $4–$7). Or arrange a private driver for the Cultural Triangle leg at LKR 6,000–9,000 ($20–$30) for the day.",
                  "Sigiriya Rock Fortress (UNESCO, LKR 9,000 / $30) — climb before 7am. The 1,200-step ascent via the Lion's Paw entrance takes 45 minutes at a moderate pace. The 5th-century palace on the summit plateau offers 360-degree views over the jungle and twin water gardens below.",
                  "The frescoes of the 'Cloud Maidens' on the western face (halfway up) are extraordinary — painted in the 5th century AD, still vivid. Go at 6:30am: the rock is empty, cool, and the light is perfect.",
                  "Sigiriya village exploration after the climb — the town has cheap guesthouses (LKR 2,400–4,500 / $8–$15 per night) and excellent rice and curry lunch spots. The village tank (reservoir) has monitor lizards on the banks.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Dambulla Cave Temple & Minneriya Elephant Safari"
                cost="LKR 10,500–18,000 ($35–$60)"
                items={[
                  "Dambulla Cave Temple (UNESCO, LKR 3,000 / $10) — five caves carved into a granite outcrop, containing 153 Buddha statues and painted ceilings covering 2,100 square meters. The finest Buddhist cave complex in Sri Lanka. Enter the caves barefoot (bring socks for the hot stone). Allow 2 hours.",
                  "The iconographic program of the cave paintings tells a complete narrative of Buddhist cosmology — 2,000 years of continuous religious use. Combined with Sigiriya, the two UNESCO sites make the Cultural Triangle visit complete.",
                  "Minneriya National Park jeep safari (LKR 7,500–10,500 / $25–$35 for shared jeep, 3 hours) — home to the 'Elephant Gathering,' one of the largest gatherings of wild Asian elephants in the world (200–400 elephants, July–September). Outside those months, smaller groups of 20–50 elephants are reliably seen at the reservoir.",
                  "Evening — travel to Kandy by public bus or shared van from Dambulla (2 hours, LKR 600–900 / $2–$3). Kandy sits in a bowl of forested hills at 500m — markedly cooler than the Cultural Triangle.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Kandy — Temple of the Tooth & Botanical Gardens"
                cost="LKR 9,000–16,500 ($30–$55)"
                items={[
                  "Temple of the Tooth Relic (Dalada Maligawa, LKR 3,000 / $10) — the most sacred Buddhist site in Sri Lanka, housing the left canine tooth of the historical Buddha. Puja ceremonies at 6:30am, 9:30am, and 6:30pm with Kandyan drumming. The evening puja is the most atmospheric — drums echo through the colonial city center.",
                  "Kandy Lake walk (free) — the artificial lake built by the last Kandyan king in 1807. The lakeside walk takes 45 minutes; elegant colonial architecture, Buddhist shrines at intervals, and mountains behind.",
                  "Peradeniya Royal Botanic Gardens (LKR 1,500 / $5, 6km from Kandy center) — 147 acres of colonial-era botanical gardens with an extraordinary orchid house, giant bamboo grove, and the Great Circle of palm trees. One of the finest botanical gardens in Asia.",
                  "Kandyan cultural dance show (LKR 1,500–3,000 / $5–$10 evening performance) — fire walking, Kandyan dancers, and traditional drumming. Touristy but genuinely impressive — the acrobatics and fire acts are worth seeing.",
                  "Book tomorrow's train ticket at raildna.com if you haven't already. Right-side window seat from Kandy toward Ella for the best views.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Kandy to Ella — The Most Scenic Train in Asia"
                cost="LKR 9,000–16,500 ($30–$55)"
                items={[
                  "Kandy to Ella scenic train (LKR 600–2,400 / $2–$8 second class reserved, 7 hours) — reserve at raildna.com 2+ weeks ahead as this sells out. Right-side window seat from Kandy.",
                  "The route passes the Nine Arches Bridge (the most photographed structure in Sri Lanka), Nuwara Eliya tea country, waterfalls, tunnels, and 2,000m mountain passes. Pack breakfast from Kandy market. Open the window — the air is tea-scented at altitude.",
                  "Ella itself is a small hill town at 1,000m surrounded by tea estates and waterfalls. Check into a guesthouse (LKR 2,400–4,500 / $8–$15 budget, LKR 10,500–16,500 / $35–$55 boutique).",
                  "Little Adam's Peak hike (1.5 hours, free) for excellent valley views in the late afternoon. The trail is well-marked and easy — the sunset view of the Ella Gap from the summit is exceptional.",
                  "Walk to Nine Arches Bridge in the evening (20-minute walk from town). Trains cross the viaduct roughly every 2 hours — check the schedule locally for the best photo timing.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Galle Fort — Dutch Colonial Heritage on the Indian Ocean"
                cost="LKR 12,000–19,500 ($40–$65)"
                items={[
                  "From Ella: train or bus to Galle via Matara (4–6 hours, LKR 1,500–2,400 / $5–$8). Alternatively, from Ella to the south coast by private driver (3–4 hours, LKR 9,000–12,000 / $30–$40).",
                  "Galle Fort (UNESCO, free to walk) — a perfectly preserved Dutch colonial fortification from 1663, enclosing a small town of churches, mosques, boutique hotels, cafes, and art galleries. The rampart walk at sunset takes 45 minutes along the Indian Ocean seawall — the best walk in the south of Sri Lanka.",
                  "Stilt fishermen at Koggala (free, 6km east of Galle, sunrise only) — men perched on poles above the surf, fishing by rod. Arrive before 6:30am — the authentic fishermen are gone by 7:30am when tourist photo-ops replace them. The real thing, at dawn, is genuinely beautiful.",
                  "Unawatuna beach (free, 5km from Galle) — the most popular beach on the south coast, with calm water, good snorkeling on the reef, and a string of beachfront restaurants (LKR 1,500–3,600 / $5–$12 for seafood). Excellent for swimming November–April.",
                  "Evening rampart walk at Galle Fort — the day-trip crowds leave by 5pm. The Fort at evening, with the Indian Ocean turning orange and the mosque calling evening prayer, is the most atmospheric place in southern Sri Lanka.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="South Coast — Whales, Turtles & Departure"
                cost="LKR 12,000–19,500 ($40–$65)"
                items={[
                  "Whale watching from Mirissa (Nov–Apr, LKR 10,500–15,000 / $35–$50 for shared boat, 5am departure, 4–5 hours) — blue whales and sperm whales are seen year-round but are most reliable December–March. The world's largest animals in warm tropical water within sight of the Sri Lankan coast.",
                  "Turtle hatcheries near Kosgoda (LKR 600–1,500 / $2–$5 entry) — release baby sea turtles at sunset. Several legitimate conservation hatcheries along the coast operate nightly releases. Go to the ones affiliated with the Turtle Conservation Project.",
                  "Final beach time at Mirissa, Weligama, or Tangalle — the south coast has a string of beautiful beaches within 30 minutes of each other. Mirissa is the most developed; Tangalle is the most peaceful.",
                  "Return to Colombo by express train from Galle (2.5 hours, LKR 600–1,200 / $2–$4) or private car (2–3 hours along the coastal expressway). Allow 3 hours before your flight for the airport transfer from Colombo.",
                  "If departing from CMB: the Colombo–Airport expressway takes 45 minutes by taxi (LKR 4,500–6,000 / $15–$20). Budget extra time during rush hour.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Sri Lanka" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Entry fees as of early 2026. The most significant UNESCO sites are Sigiriya, Dambulla, the Temple of the Tooth (Kandy), and Galle Fort.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sigiriya Rock Fortress",
                  e: "LKR 9,000 ($30)",
                  d: "A 5th-century palace built on a 200-metre granite column rising from flat jungle. The 1,200-step climb via the Lion's Paw entrance leads to a summit plateau with palace ruins, water gardens, and 360-degree views. The Cloud Maiden frescoes on the western face are painted in the 5th century and remain vivid. Arrive at 6:30am opening for cool temperatures and near-empty conditions.",
                  t: "UNESCO · Must see · 2–3 hrs",
                },
                {
                  n: "Temple of the Tooth (Kandy)",
                  e: "LKR 3,000 ($10)",
                  d: "The most sacred Buddhist site in Sri Lanka — the left canine tooth of the historical Buddha is housed in a gold casket within the inner sanctum. Drumming puja ceremonies at 6:30am, 9:30am, and 6:30pm. The evening ceremony is the most atmospheric, with Kandyan drummers echoing through the colonial city center.",
                  t: "UNESCO · Must see · 1.5 hrs",
                },
                {
                  n: "Dambulla Cave Temple",
                  e: "LKR 3,000 ($10)",
                  d: "Five caves carved into a granite outcrop, containing 153 Buddha statues and 2,100 square meters of painted ceilings — the largest and best-preserved cave temple complex in Sri Lanka. Two thousand years of continuous religious use. Enter barefoot (bring socks for hot stone). Often skipped by rushed travelers, which is a mistake.",
                  t: "UNESCO · Must see · 2 hrs",
                },
                {
                  n: "Nine Arches Bridge (Ella)",
                  e: "Free",
                  d: "The most photographed structure in Sri Lanka — a colonial-era railway viaduct of nine elegant arches set in tea estate jungle near Ella. Trains cross roughly every 2 hours. The bridge is a 20-minute walk from Ella town. Arrive early morning or late afternoon for the best light and fewer crowds.",
                  t: "Iconic · 1 hr",
                },
                {
                  n: "Galle Fort",
                  e: "Free to walk",
                  d: "A perfectly preserved Dutch colonial fortification from 1663, enclosing a living town of churches, mosques, boutique hotels, cafes, and art galleries on the Indian Ocean. The rampart walk at sunset (45 minutes) is the best walk in southern Sri Lanka. Stay inside the fort for at least one night to experience it after the day-trippers leave.",
                  t: "UNESCO · Must see · Half day",
                },
                {
                  n: "Peradeniya Royal Botanic Gardens",
                  e: "LKR 1,500 ($5)",
                  d: "147 acres of colonial-era botanical gardens 6km from Kandy center — extraordinary orchid house, giant bamboo grove, spice gardens, and the Great Circle of palm trees. One of the finest botanical gardens in Asia. Budget 2 hours minimum.",
                  t: "Recommended · 2 hrs",
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
            title="Sri Lanka — Fortresses, Tea Hills &amp; the Indian Ocean"
            subtitle="From ancient rock palaces to colonial ramparts on the southern coast."
            spots={[
              {
                name: "Sigiriya Rock Fortress",
                query: "sigiriya lion rock fortress sri lanka jungle aerial sunrise ancient",
                desc: "The 5th-century palace fortress rising 200 metres above flat jungle — one of the great archaeological wonders of Asia.",
              },
              {
                name: "Nine Arches Bridge Ella",
                query: "nine arches bridge ella sri lanka train tea plantation green",
                desc: "The iconic colonial railway viaduct near Ella, surrounded by emerald tea estates in the Sri Lankan highlands.",
              },
              {
                name: "Galle Fort Ramparts",
                query: "galle fort ramparts sunset sri lanka dutch colonial indian ocean",
                desc: "The 17th-century Dutch colonial fortification on the Indian Ocean — the finest preserved fort in Southeast Asia.",
              },
              {
                name: "Kandy Temple of the Tooth",
                query: "kandy temple tooth relic sri lanka buddhist sacred ceremony",
                desc: "The most sacred Buddhist site in Sri Lanka, housing the tooth relic of the historical Buddha.",
              },
              {
                name: "Dambulla Cave Temple",
                query: "dambulla cave temple sri lanka buddha statues painted ceiling",
                desc: "Five painted caves with 153 Buddha statues — 2,000 years of continuous Buddhist worship.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Sri Lanka offers exceptional value at every price point. The main variable is accommodation — budget guesthouses at LKR 2,400–5,400 ($8–$18) are clean and comfortable islandwide, while boutique hotels inside Galle Fort or near Sigiriya run LKR 18,000–42,000 ($60–$140). Entry fees to UNESCO sites add up (Sigiriya alone is LKR 9,000 / $30 for foreigners).
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
                    ["🏨 Accommodation", "$8–$18/night", "$60–$120/night", "$200–$700/night"],
                    ["🍽 Food", "$5–$12/day", "$25–$45/day", "$60–$150/day"],
                    ["🚂 Transport", "$3–$8/day", "$20–$40/day", "$50–$100/day"],
                    ["🏛️ Activities", "$10–$20/day", "$25–$50/day", "$80–$200/day"],
                    ["TOTAL (per person)", "$30–$55/day", "$80–$160/day", "$300–$900+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($30–$55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses at LKR 2,400–5,400/night, local rice and curry canteens, public buses and second-class trains, shared jeep safaris. Sri Lanka has excellent budget infrastructure — this tier is comfortable, not spartan.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($80–$160/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels, private driver-guide, first-class train, guided temple tours, responsible whale watching operators. The sweet spot for most travelers — excellent comfort with meaningful cultural access.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($300–$900+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Amangalla in Galle Fort, Heritance Kandalama by Geoffrey Bawa, private whale watching charters, VIP Sigiriya access, heritage rail carriages. Sri Lanka has world-class luxury at lower prices than comparable destinations.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Sri Lanka</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation options across the 7-day route. Sri Lanka has excellent guesthouses at every price point — the family-run guesthouse culture is one of the best in Asia. Book Galle Fort and Ella properties ahead in December–April peak season.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Galle Face Hotel (Colombo)",
                  type: "Colonial heritage · Seafront · Colombo 3",
                  price: "From LKR 18,000/night ($60)",
                  badge: "Most iconic",
                  desc: "Colombo's most storied colonial hotel, opened in 1864, directly on the Indian Ocean seafront at Galle Face Green. The history suite rooms have direct sea views. The verandah bar at sunset is a Colombo institution. Mid-range rooms available from LKR 18,000.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Heritance Kandalama (Dambulla)",
                  type: "Geoffrey Bawa masterpiece · Overlooking reservoir",
                  price: "From LKR 30,000/night ($100)",
                  badge: "Best architecture",
                  desc: "Built into a cliff above Kandalama reservoir by Sri Lanka's most famous architect Geoffrey Bawa. The building disappears into the rock face, with monkeys on the balconies and extraordinary views across the water to Sigiriya in the distance. One of the great hotels of Asia.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Ella Flower Garden Resort",
                  type: "Boutique guesthouse · Hill country views",
                  price: "From LKR 10,500/night ($35)",
                  badge: "Best value Ella",
                  desc: "A family-run guesthouse with panoramic views across the Ella Gap and surrounding tea estates. Clean, comfortable rooms, excellent home-cooked Sri Lankan breakfast included. The terrace view alone is worth the stay. Book 2–3 weeks ahead in peak season.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Amangalla (Galle Fort)",
                  type: "Ultra-luxury · Inside the Dutch fort",
                  price: "From LKR 210,000/night ($700)",
                  badge: "Finest in south",
                  desc: "The finest hotel in Galle Fort — a restored Dutch colonial building with spa, courtyard pool, and the most elegant rooms in southern Sri Lanka. Experience the fort after the day-trippers leave. Restaurant serves the best food on the south coast.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Fort Bazaar (Galle Fort)",
                  type: "Boutique · Inside the Dutch fort",
                  price: "From LKR 24,000/night ($80)",
                  badge: "Best mid-range Galle",
                  desc: "A beautifully restored merchant's house inside Galle Fort with individually designed rooms, a courtyard restaurant, and rooftop views of the fort ramparts. The sweet spot between Amangalla luxury and budget guesthouses.",
                  color: "border-parchment-2 bg-white",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Sri Lanka</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Sri Lankan cuisine is one of the great underrated food traditions of Asia. Rice and curry is the foundation — a plate of rice surrounded by multiple small curries, dhal, coconut sambol, and pickle. Hoppers (bowl-shaped fermented rice pancakes) and kottu roti (chopped flatbread stir-fried with vegetables and spices) are uniquely Sri Lankan and essential eating.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ministry of Crab (Colombo)",
                  t: "Fine dining · Dutch Hospital Precinct",
                  d: "Sri Lanka's most celebrated restaurant, housed in the Dutch Hospital Precinct in Colombo. Massive Sri Lankan mud crabs cooked in traditional preparations — chilli crab, pepper crab, garlic crab. Book 2–3 weeks ahead. LKR 12,000–18,000 ($40–$60) per person. Worth every rupee.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Local Rice & Curry Canteens (everywhere)",
                  t: "Street food · Islandwide",
                  d: "The best food in Sri Lanka is not in restaurants — it is in the small rice and curry canteens that serve lunch to locals every day. A full plate of rice with three curries, dhal, coconut sambol, and pickle costs LKR 450–900 ($1.50–$3). Ask locals to point you to the nearest one. Fresh every morning, seasonal vegetables, and consistently excellent.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Kottu Roti Street Stalls (Colombo, Kandy)",
                  t: "Street food · Evening stalls",
                  d: "Kottu roti is uniquely Sri Lankan — chopped flatbread stir-fried on a hot griddle with egg, vegetables, cheese, or chicken, seasoned with curry spices. The rhythmic sound of the metal blades chopping kottu on the griddle is the soundtrack of Sri Lankan streets at dusk. LKR 300–750 ($1–$2.50). Colombo's Galle Face stalls and Kandy's lakeside street food are the best spots.",
                  b: "Essential eating",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pedlar's Inn (Galle Fort)",
                  t: "Seafood · Inside the fort",
                  d: "Wood-fired seafood restaurant inside Galle Fort with the Indian Ocean behind you. Grilled prawns, fresh fish, and Sri Lankan crab curry at LKR 3,000–6,000 ($10–$20) per person. The evening atmosphere inside the fort, with the rampart walls lit up and the ocean breeze, makes this one of the most atmospheric dining spots on the island.",
                  b: "Best setting",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Hopper Stalls (breakfast, everywhere)",
                  t: "Traditional breakfast · Islandwide",
                  d: "Hoppers (appa) — bowl-shaped fermented rice flour pancakes with an egg cracked in the center — are the essential Sri Lankan breakfast. String hoppers (steamed rice noodle nests) served with coconut milk curry are equally good. Find them at any small breakfast shop for LKR 150–450 ($0.50–$1.50). The Cinnamon Grand hotel in Colombo serves a legendary hopper breakfast buffet.",
                  b: "Don't miss",
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
            destination="Sri Lanka"
            hotels={[
              {
                name: "Galle Face Hotel",
                type: "Colonial heritage · Colombo seafront",
                price: "From $60/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/lk/galle-face.html?aid=2820480",
              },
              {
                name: "Heritance Kandalama",
                type: "Geoffrey Bawa · Dambulla reservoir",
                price: "From $100/night",
                rating: "5",
                badge: "Best architecture",
                url: "https://www.booking.com/hotel/lk/heritance-kandalama.html?aid=2820480",
              },
              {
                name: "Amangalla",
                type: "Ultra-luxury · Inside Galle Fort",
                price: "From $700/night",
                rating: "5",
                badge: "Finest hotel",
                url: "https://www.booking.com/hotel/lk/amangalla.html?aid=2820480",
              },
              {
                name: "Fort Bazaar",
                type: "Boutique · Inside Galle Fort",
                price: "From $80/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/lk/fort-bazaar.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Sigiriya Rock & Dambulla Day Trip",
                duration: "Full day",
                price: "From $45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=sigiriya+dambulla+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Whale Watching from Mirissa",
                duration: "5 hrs",
                price: "From $35/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=mirissa+whale+watching&partner_id=PSZA5UI",
              },
              {
                name: "Kandy Temple & Tea Plantation Tour",
                duration: "Full day",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=kandy+temple+tea+tour&partner_id=PSZA5UI",
              },
              {
                name: "Galle Fort Walking Tour",
                duration: "2 hrs",
                price: "From $20/person",
                url: "https://www.getyourguide.com/s/?q=galle+fort+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚂",
                  title: "Not Booking the Scenic Train in Advance",
                  desc: "The Kandy–Ella scenic train route is the most popular train journey in Asia among travelers. Tickets sell out 2–4 weeks ahead, especially for second-class reserved seats and first class. Book at raildna.com the moment you confirm your travel dates. Showing up at the station to buy on the day will leave you standing in a crowded aisle or unable to travel at all. This ruins itineraries.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☀️",
                  title: "Visiting Sigiriya in the Middle of the Day",
                  desc: "Sigiriya Rock is a 200-metre exposed granite formation in the Sri Lankan lowlands. At midday in the dry season it reaches 38–45°C on the open rock face with no shade on the upper section. Tourists who arrive at 10am regularly turn back from heat exhaustion. The correct time: 6:30–7:30am. The rock is cool, the light is extraordinary, and the fortress is nearly empty.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "Skipping Dambulla to Save Time",
                  desc: "Dambulla Cave Temple is 20km from Sigiriya and often dropped from rushed itineraries. This is a mistake. The five painted cave temples — 2,000 years in continuous use, 153 Buddha statues, the largest cave temple complex in Sri Lanka — are a genuinely different experience from Sigiriya and equally impressive. Budget one day for Sigiriya, one half-day for Dambulla.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍱",
                  title: "Eating at Tourist Restaurants Instead of Local Canteens",
                  desc: "Sri Lankan rice and curry at a local canteen costs LKR 450–900 ($1.50–$3) and is exceptional — multiple curries, dhal, coconut sambol, pickle, and as much rice as you want. The same meal in a tourist restaurant near a major sight costs LKR 2,400–4,500 ($8–$15). The quality in the canteen is equal or better. Ask locals to point you to the nearest rice and curry joint.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Sri Lanka</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Sigiriya at 6:30am — the Rock to Yourself",
                  desc: "The gates open at 7am but VIP guides with early access can get you in at 6:30am. Even standard arrival at opening puts you on the summit by 8am. The Cloud Maiden frescoes are best in morning light, the summit is at 25°C instead of 40°C, and you will have the palace ruins largely to yourself. Arriving at 10am puts you behind 400 other tourists in direct equatorial sun.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚂",
                  title: "Right-Side Window Seat on the Kandy–Ella Train",
                  desc: "When traveling from Kandy toward Ella, the right side of the train has better views of the tea estates, waterfalls, and mountain valleys. Secure a window seat on the right by booking second-class reserved (LKR 1,200–1,800 / $4–$6) at raildna.com. Open the window — the air is tea-scented at altitude. The Nine Arches Bridge at Ella is visible from the left side as you approach the station.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎣",
                  title: "Stilt Fishermen at Sunrise — Koggala Before 7am",
                  desc: "The famous image of Sri Lankan stilt fishermen — balanced on poles in the surf — is authentic only at dawn. By 8am the working fishermen have left and are replaced by men hired for tourist photos who charge you LKR 1,500–3,000 ($5–$10). Go to Koggala beach (8km east of Galle) before 6:30am with a tuk-tuk. The real fishermen fish at dawn for practical reasons: calmer surf, better catches.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌃",
                  title: "Galle Fort Evening Walk — Most Atmospheric in Sri Lanka",
                  desc: "The day-trip crowds leave Galle Fort by 5pm. Walk the ramparts at 6pm with the Indian Ocean turning orange, the mosque calling evening prayer, the Dutch Reformed Church lit from within, and the old streets quiet. The Fort at evening is the most beautiful place in southern Sri Lanka and requires only your feet and thirty minutes.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📋",
                  title: "Apply for Your ETA Before Booking Flights",
                  desc: "All visitors (including Indians, Americans, Europeans, Australians) need an Electronic Travel Authorization from VisaOnline.gov.lk. Fee: $35. Processing usually within 24 hours. Apply before booking flights. The on-arrival option at Colombo airport has a 45–90 minute queue and is not worth the stress. Five minutes online saves hours at immigration.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🐘",
                  title: "Skip Pinnawala, Go to Minneriya for Ethical Elephants",
                  desc: "Pinnawala Elephant Orphanage near Kandy has been criticized for chaining elephants and separating calves. For ethical elephant encounters, choose wild elephant safaris at Minneriya or Udawalawe National Parks, where elephants are genuinely wild and free-ranging. The Minneriya 'Elephant Gathering' (July–September, 200–400 elephants) is one of the great wildlife spectacles in Asia.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Sri Lanka" />

          {/* Combine With */}
          <CombineWith currentSlug="sri-lanka-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indians need an ETA visa for Sri Lanka?",
                  a: "Yes. Indian passport holders require an Electronic Travel Authorization (ETA) to enter Sri Lanka — there is no visa-free arrangement. Apply at VisaOnline.gov.lk before your flight. Cost: $35 USD. Processing is usually within 24–48 hours. The ETA allows 30 days stay. Do not rely on getting this at Colombo airport — the process is smoother and faster when done in advance.",
                },
                {
                  q: "When is the best time to visit Sri Lanka?",
                  a: "Sri Lanka has two monsoon seasons affecting different coasts. The west and south coasts (Colombo, Galle, Mirissa, Unawatuna) are best December–April. The east coast (Trincomalee, Arugam Bay) is best May–September. The Cultural Triangle (Sigiriya, Dambulla) and the Hill Country (Kandy, Ella) are accessible year-round. The 7-day route in this guide covers the west/south coast — plan it for December–April.",
                },
                {
                  q: "Sri Lanka vs Maldives — which should I choose?",
                  a: "They are completely different trips. Sri Lanka offers culture, wildlife, trekking, temples, train journeys, and diverse beaches — 7–14 days, high activity, $30–150/day range. The Maldives offers overwater villa seclusion with world-class reef diving — typically 5–7 days, very expensive ($300–2,000+/day), limited cultural content. Combine them: fly into Colombo, explore Sri Lanka for 7 days, then fly to Male for 5 days of beach recovery.",
                },
                {
                  q: "How do I book the Sri Lanka scenic train?",
                  a: "Go to raildna.com — the official third-party booking platform for Sri Lanka Railways. Create an account, search Kandy–Ella or Kandy–Nuwara Eliya, and book second-class reserved (LKR 1,200–1,800 / $4–$6) or first-class (LKR 2,400–4,500 / $8–$15) seats. Book 2–4 weeks ahead, especially for December–April peak season. Arrive at the station 20 minutes before departure.",
                },
                {
                  q: "Is Pinnawala Elephant Orphanage ethical to visit?",
                  a: "Pinnawala Elephant Orphanage near Kandy has been criticized by wildlife organizations for practices including chaining elephants, separating calves for tourist interaction, and overcrowding. For ethical elephant encounters, prefer wild elephant safaris at Minneriya or Udawalawe National Parks, where elephants are genuinely wild and free-ranging. If you visit Pinnawala, do not participate in bathing or riding interactions.",
                },
                {
                  q: "Is Sri Lanka safe to visit after the 2022 economic crisis?",
                  a: "Yes. Sri Lanka experienced a severe economic crisis in 2022 — fuel shortages, power cuts, political upheaval. The situation has substantially recovered by 2024–2026. Tourism infrastructure is fully operational, fuel is available, the political situation has stabilized, and the IMF restructuring program has reduced the acute crisis. Travelers report normal conditions at all tourist destinations. Crime rates affecting tourists remain low.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Sri Lanka trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-sri-lanka", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/sri-lanka-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-sri-lanka", label: "How to get there", icon: "✈️" },
                { href: "/blog/sri-lanka-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="sri-lanka-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Maldives in 5 Days — Overwater Villas &amp; Reefs", href: "/blog/maldives-5-days" },
                { label: "Nepal 7 Days — Himalaya &amp; Temples", href: "/blog/nepal-7-days" },
                { label: "Thailand 7 Days — Temples &amp; Islands", href: "/blog/thailand-7-days" },
                { label: "Palawan 4 Days — Underground River &amp; Lagoons", href: "/blog/palawan-4-days" },
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
