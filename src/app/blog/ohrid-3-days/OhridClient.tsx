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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const OHRID_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Ohrid Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "⛪",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Ohrid 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Ohrid in 3 Days — Lake Ohrid, Byzantine churches and the Balkans' best-kept secret&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/ohrid-3-days"
        imageUrl="https://images.unsplash.com/photo-1580309237429-661ea18c5004?w=1200&q=80"
        description="Ohrid in 3 Days: Lake Ohrid UNESCO, St John at Kaneo, Samuel's Fortress, Ohrid trout and boat tours to Sv Naum — complete travel guide with budget breakdown."
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
export default function OhridClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={OHRID_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ohrid" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Ohrid Lake North Macedonia church St John Kaneo cliff"
            fallback="https://images.unsplash.com/photo-1580309237429-661ea18c5004?w=1600&q=80"
            alt="St John at Kaneo church perched on a cliff above the blue waters of Lake Ohrid at golden hour"
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
              <span className="text-white/70">Ohrid 3 Days</span>
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
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ohrid in 3 Days:
                <em className="italic text-amber-300"> Byzantine Churches, Ancient Lake &amp; the Balkans&apos; Best Secret</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                One of Europe&apos;s oldest lakes, cliff-top medieval churches, a Macedonian fortress, Ohrid trout you can&apos;t eat anywhere else on earth, and boat rides to a monastery at the Albanian border. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇰 North Macedonia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €22/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ohrid is the Balkans&apos; most beautiful lakeside city — a UNESCO World Heritage site where medieval churches cling to cliffs above crystalline water, a Macedonian fortress watches over a warren of Ottoman-era bazaar streets, and restaurants serve ohridska pastrmka (Ohrid trout) that you can&apos;t eat anywhere else on earth. Three days is enough to explore the old town, cruise the lake, hike the fortress, and still sit on a sunset terrace with a glass of Tikve&scaron; wine.
            </p>
          </blockquote>

          {/* ── WHAT OHRID ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Ohrid Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Lake Ohrid is one of Europe&apos;s oldest and deepest tectonic lakes — over three million years old, with waters so clear that visibility reaches 20 to 30 metres. The lake and the old city on its northeastern shore share a joint UNESCO World Heritage listing, one of only 38 mixed natural and cultural sites on the entire planet. The concentration of medieval churches is so dense that the city was once said to have 365 — one for every day of the year.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city layers tell a remarkable story: a Hellenistic amphitheatre from 200 BC, Byzantine basilicas with some of the finest medieval frescoes in southeastern Europe, the 10th-century fortress of Tsar Samuel who made Ohrid the capital of the First Bulgarian Empire, Ottoman-era bazaar streets where craftsmen still make Ohrid pearls from endemic lake mussels, and a relaxed modern lakeside promenade where Macedonians come for summer holidays. Saint Clement founded what many scholars consider Europe&apos;s oldest university here in 886 AD.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Ohrid is the kind of destination that has everything a traveller could want — world-class historical sites, extraordinary natural beauty, excellent local food, and prices that are among the lowest in Europe — yet remains almost unknown outside the Balkans. Three days is the sweet spot: enough time to see the major landmarks, take a boat across the lake, and eat your body weight in grilled trout and shopska salad.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="OHD / SKP" />
              <StatCard icon="🌡️" label="Best Season" value="May–Oct" />
              <StatCard icon="⛪" label="Historic Churches" value="365+" />
              <StatCard icon="💰" label="Budget From" value="€22/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Ohrid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Sep",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "25–32°C, the lake is warm enough for swimming (24–26°C by late July), and the Ohrid Summer Festival brings classical concerts to the ancient theatre in July and August. Accommodation prices rise significantly in July–August — book 2–3 months ahead. The best overall period for a first visit.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May & Oct",
                  i: "🌅",
                  t: "Shoulder — Best Value",
                  d: "18–25°C. Clear skies, warm enough for lakeside dining and comfortable sightseeing, but no summer crowds. Guesthouse prices drop to €15–20/night, restaurants are never full, and the light on the lake is extraordinary. October can be cool in the evenings — bring a jacket.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Quiet but Atmospheric",
                  d: "0–10°C. Many lakeside restaurants and some guesthouses close for winter. The old town is almost deserted and has a hauntingly beautiful quality — fog on the lake, snow on the fortress walls, and the churches entirely to yourself. Not ideal for a first visit, but unforgettable if you enjoy off-season travel.",
                  b: "For adventurous travellers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr",
                  i: "🌸",
                  t: "Spring — Awakening",
                  d: "12–18°C. The lake is still cold for swimming but the old town is coming alive after winter — cafes reopen, boat tours resume, and the hillsides around the fortress are covered in wildflowers. Easter (Orthodox) celebrations in the Byzantine churches are exceptional.",
                  b: "Emerging season",
                  c: "bg-purple-50 border-purple-200",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Ohrid</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Ohrid has a small airport (OHD) with seasonal charter flights from the UK, Germany, and Switzerland during summer (June–September). Outside charter season, fly into <strong className="font-medium">Skopje Airport (SKP)</strong> and take a 3-hour bus to Ohrid. Buses run 6–8 times daily and cost MKD 500 (approx. €8).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Bus from Skopje (most common)",
                  d: "Skopje bus station to Ohrid: 3 hours, MKD 500 (€8). Buses run 6–8 times daily, departing from early morning to late evening. The route passes through Kichevo and offers increasingly dramatic mountain scenery. Comfortable coaches with luggage storage. Buy tickets at the station or on the bus.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Ohrid (seasonal)",
                  d: "Ohrid St Paul the Apostle Airport (OHD) has seasonal flights from June to September — primarily charter flights from London, Berlin, Zurich, and Vienna on WizzAir and seasonal carriers. If your dates align, this is the most convenient option. The airport is 10 km from the old town; taxi MKD 500 (€8).",
                  b: "Seasonal only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Skopje",
                  d: "170 km via the E65 highway, 2.5–3 hours. Mostly dual carriageway until the final mountain section. Car rental in Skopje starts from €20/day. Useful if you plan to combine Ohrid with other Macedonian destinations or cross into Albania.",
                  b: "Flexible",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚐",
                  t: "From Albania (Tirana / Pogradec)",
                  d: "Shared furgons and minibuses run from Pogradec (Albania) to Ohrid in about 1 hour, crossing at the Tushemisht border. From Tirana, take a bus to Pogradec (3 hours, €5) then cross to Ohrid. The Albania–North Macedonia border is straightforward for most passport holders. A popular backpacker route combining the Albanian Riviera with Ohrid.",
                  b: "Popular overland route",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Ohrid Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential sights at a comfortable pace — mornings for landmarks, afternoons for the lake, and evenings on a waterfront terrace with Macedonian wine and grilled trout.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town · St John at Kaneo · Church of St Sophia · Sunset Walk"
                cost="€20–€35"
                items={[
                  "Arrive in Ohrid by bus from Skopje (3 hours, MKD 500 / €8) or from Albania. Check into a guesthouse or hostel in the Old Town — budget options like Sunny Lake Hostel start from €10/night, mid-range guesthouses with lake views from €30/night.",
                  "Walk the compact Old Town lanes below Samuel&apos;s Fortress: Byzantine churches appear at almost every corner. Many are free to enter and contain remarkable medieval frescoes. The concentration of sacred art per square metre rivals anything in Greece or Italy.",
                  "Church of St Sophia (MKD 150 / €2.50): an 11th-century basilica housing the finest medieval fresco programme in the western Balkans. The naos paintings — scenes from the Life of Christ in extraordinary preservation — influenced Byzantine art across the entire Orthodox world. A guide or audio tour is strongly recommended.",
                  "St John at Kaneo (MKD 100 / €1.50): Ohrid&apos;s most iconic view — a 13th-century church perched on a cliff directly above the lake. Reachable by a 10-minute footpath from the old town. Free to photograph from outside. Sit on the rocky platform below and watch the lake change colour in the afternoon light.",
                  "Evening sunset walk along the lakeside promenade from the old town to the main harbour. Stop at a waterfront restaurant for your first ohridska pastrmka — grilled Ohrid trout (€8–10), shopska salad (€2.50), and a glass of Tikve&scaron; Temjanika white wine (€2). Total dinner: €14–16.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Samuel&apos;s Fortress · Ancient Theatre · Plao&scaron;nik · Old Bazaar"
                cost="€18–€30"
                items={[
                  "Morning: Samuel&apos;s Fortress (MKD 60 / €1): the 10th-century walls that encircle the entire hilltop above the old town. Tsar Samuel made Ohrid the capital of the First Bulgarian Empire. The fortress walls and towers offer the best 360-degree panorama of lake, city, and the Albanian mountains beyond. Allow 1–1.5 hours for a thorough walk of the ramparts.",
                  "Ancient Theatre of Ohrid (free entry): a Hellenistic theatre from 200 BC hidden within the fortress hillside, later used for gladiatorial combat under Roman rule, and now the venue for the Ohrid Summer Festival&apos;s concerts and theatre performances. The acoustics are remarkable — sit in the top row and have someone whisper from the stage.",
                  "Plao&scaron;nik — Church of Saints Clement and Panteleimon (MKD 100 / €1.50): the site where Saint Clement founded what is considered Europe&apos;s oldest university in 886 AD. The reconstructed basilica sits in a lakeside garden with archaeological remains from the 5th century onwards. A deeply significant site for Macedonian cultural identity.",
                  "Old Bazaar (Stara Char&scaron;ija): browse handmade Ohrid pearl jewellery — the lake&apos;s endemic mussels are used to produce pearls unique to this location using a 2,000-year-old technique. Genuine pieces come with a certificate of authenticity. A pair of pearl earrings costs €8–15, necklaces €25–50. Also look for wood-carved icons and embroidered textiles.",
                  "Evening at a mehana (traditional tavern) in the old town: try tavche gravche — North Macedonia&apos;s national dish of slow-baked beans — with ajvar (roasted pepper spread), grilled meat, and a bottle of Tikve&scaron; Vranec red wine. Dinner total: €10–14.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Lake Boat Tour · Bay of Bones · Sv Naum Monastery · Departure"
                cost="€22–€38"
                items={[
                  "Morning group boat tour of Lake Ohrid (MKD 500–1,500 / €8–25 depending on route, 2–3 hours): tours depart from the main harbour and circle the lake, stopping at St John at Kaneo from the water, the Bay of Bones prehistoric stilt settlement, and the springs at Sv Naum monastery near the Albanian border. The view from the water — clifftop churches, fortress walls, Albanian mountains — is the defining Ohrid experience.",
                  "Bay of Bones Museum on Water (MKD 200 / €3): a full-scale reconstruction of a 3,200-year-old Bronze Age stilt settlement built over the lake. Remarkable archaeology presented in a beautiful lakeside setting. Most boat tours stop here for 30–45 minutes.",
                  "Sv Naum Monastery (included in most boat tours, or reachable by bus for MKD 120 / €2 each way): an 11th-century monastery on a wooded promontory where cold springs bubble up from underground. Peacocks wander the courtyard freely. After tour groups leave at noon, the monastery and its riverside garden become genuinely peaceful. Try the trout at the monastery restaurant — pulled directly from the spring-fed fishing pools (€10–15).",
                  "Swim at a bay near Sv Naum or at the Ohrid town beach (free): the lake water is up to 30 metres clear in places — one of the cleanest lakes in Europe. Water reaches 24–26°C by late July.",
                  "Final lunch: filled burek (savoury filo pastry, MKD 80 / €1.30) and fresh yoghurt at a bakery near the bus station. Afternoon bus back to Skopje (MKD 500 / €8) or onward to Albania.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ohrid" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛪ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 — prices are in Macedonian Denar (MKD) with approximate euro equivalents.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "St John at Kaneo",
                  e: "MKD 100 (€1.50)",
                  d: "The 13th-century cliff-top church that defines Ohrid&apos;s skyline. Perched directly above the lake, reachable by a scenic 10-minute footpath from the old town. Free to photograph from the viewing platform below; small entry fee to go inside. The golden hour light here — sunrise or sunset — is extraordinary.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "Samuel&apos;s Fortress",
                  e: "MKD 60 (€1)",
                  d: "The massive 10th-century fortress walls encircle the hilltop above the old town. Built by Tsar Samuel when Ohrid was the capital of the First Bulgarian Empire. Walk the ramparts for the best 360-degree view of the lake, the city, and the Albanian mountains. Allow time to explore the towers and inner walls.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Church of St Sophia",
                  e: "MKD 150 (€2.50)",
                  d: "An 11th-century basilica with the finest medieval fresco programme in the western Balkans. The paintings in the naos — depicting scenes from the Life of Christ — are in extraordinary condition and influenced Orthodox art across the region. A guide or downloaded audio tour transforms the experience.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Ancient Theatre",
                  e: "Free",
                  d: "A Hellenistic theatre dating to approximately 200 BC, carved into the hillside below the fortress. Used for gladiatorial combat under Roman occupation. Now the venue for the Ohrid Summer Festival (July–August). The acoustics are remarkable even without a performance.",
                  t: "30–45 mins",
                },
                {
                  n: "Bay of Bones Museum",
                  e: "MKD 200 (€3)",
                  d: "A reconstructed Bronze Age stilt settlement built over the lake on wooden platforms — based on a 3,200-year-old archaeological site discovered in the 1990s. The museum brings the prehistoric lakeshore to life in a way that&apos;s accessible and visually striking. Best reached by boat tour.",
                  t: "Unique · 45 mins",
                },
                {
                  n: "Plao&scaron;nik (St Clement&apos;s)",
                  e: "MKD 100 (€1.50)",
                  d: "The site where Saint Clement of Ohrid founded Europe&apos;s oldest university in 886 AD. The reconstructed basilica sits in a lakeside garden with ongoing archaeological excavations revealing layers from the 5th century onwards. A foundational site for Macedonian cultural identity and for the development of the Cyrillic alphabet.",
                  t: "Culturally significant · 45 mins",
                },
                {
                  n: "Sv Naum Monastery",
                  e: "Free (boat tour extra)",
                  d: "An 11th-century monastery on the southern shore of the lake, 29 km from Ohrid, near the Albanian border. Cold springs bubble up into crystal-clear pools. Peacocks roam the grounds freely. The setting — lake, mountains, ancient stone — is one of the most beautiful in the Balkans. Best reached by the boat tour or by bus.",
                  t: "Highlight · Half day",
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
            title="Ohrid — Lake, Churches &amp; the Macedonian Mountains"
            subtitle="One of Europe&apos;s oldest lakes and the Balkans&apos; most beautiful lakeside city."
            spots={[
              {
                name: "St John at Kaneo",
                query: "st john kaneo church ohrid lake cliff north macedonia sunset",
                desc: "The 13th-century church on a cliff above Lake Ohrid — Ohrid&apos;s most iconic and photographed view.",
              },
              {
                name: "Samuel&apos;s Fortress",
                query: "samuel fortress ohrid north macedonia walls panorama lake",
                desc: "The 10th-century fortress walls above the old town offering panoramic views of the lake and Albanian mountains.",
              },
              {
                name: "Lake Ohrid",
                query: "lake ohrid crystal clear water boat north macedonia unesco",
                desc: "Over three million years old, Lake Ohrid is one of the oldest and cleanest lakes in Europe.",
              },
              {
                name: "Ohrid Old Bazaar",
                query: "ohrid old bazaar stara carsija pearl jewellery north macedonia",
                desc: "The Ottoman-era bazaar where Ohrid pearls, wood-carved icons, and traditional textiles are still crafted by hand.",
              },
              {
                name: "Sv Naum Monastery",
                query: "sveti naum monastery lake ohrid springs peacocks north macedonia",
                desc: "The 11th-century monastery on the southern shore — cold springs, peacock gardens, and Albanian mountain views.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ohrid is one of Europe&apos;s most affordable travel destinations. Accommodation, food, and entry fees are all remarkably cheap by European standards. The main costs are getting there (bus from Skopje or flights) and optional boat tours.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "€10–18 (hostel / guesthouse)", "€45–70 (boutique hotel)"],
                    ["🍽 Food (per day)", "€8–12 (bakeries, mehana, trout)", "€25–40 (restaurants + wine)"],
                    ["🚌 Transport (per day)", "€3–5 (buses + occasional taxi)", "€10–20 (taxis + boat share)"],
                    ["⛪ Activities (per day)", "€5–10 (fortress, churches, boat)", "€25–45 (guided tours, kayak)"],
                    ["TOTAL (per day)", "€22–38", "€65–105"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€22–38/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget guesthouses in the Old Town (€10–18/night), eat at bakeries and traditional mehana restaurants, use public buses, and self-guide through the churches and fortress. Ohrid is extremely comfortable on a tight budget — the infrastructure for independent travellers is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€65–105/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel with a lake-view terrace (€45–70/night), guided walking tours, private boat charter to Sv Naum, wine tastings, and lakeside restaurant dinners. This is the sweet spot for comfort — Ohrid&apos;s mid-range delivers luxury-level experiences at a fraction of Western European prices.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Ohrid</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ohrid&apos;s Old Town is the best area to stay — walkable to all the major sites, the lakeside promenade, and the harbour for boat tours. Guesthouses with lake-view terraces are the signature Ohrid accommodation experience. Book ahead for July–August (Summer Festival period).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Villa Jovan",
                  type: "Mid-range guesthouse · Old Town",
                  price: "From €35/night",
                  badge: "Best views",
                  desc: "A family-run guesthouse in the heart of the Old Town with a terrace overlooking Lake Ohrid. Clean, spacious rooms with traditional Macedonian decor. The breakfast — homemade burek, fresh cheese, coffee on the terrace — sets the standard for Ohrid mornings. Friendly owners who know the city inside out.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Desaret",
                  type: "Heritage hotel · Lakeside",
                  price: "From €55/night",
                  badge: "Most character",
                  desc: "A renovated heritage building on the lakeside promenade with Ottoman-era architectural details and modern comfort. The restaurant terrace is one of the best dining spots in Ohrid. Rooms are well-appointed with lake views. Walking distance to all major landmarks and the boat harbour.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Sunny Lake Hostel",
                  type: "Budget · Old Town",
                  price: "From €10/night",
                  badge: "Best budget",
                  desc: "A clean, well-run hostel in the Old Town with a communal terrace, shared kitchen, and a strong backpacker community. Dorm beds from €10, private rooms from €25. Good Wi-Fi, helpful staff, and an excellent location for budget travellers. The common area is sociable without being loud.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Old Town Boutique Apartments",
                  type: "Self-catering · Old Town lanes",
                  price: "From €40/night",
                  badge: "Best for couples",
                  desc: "Several apartment-style accommodations are available in the Old Town lanes — self-catering with kitchens, lake views, and traditional stone-wall interiors. Search on Booking.com for Ohrid Old Town apartments. Ideal for couples or small groups staying 3+ nights who want to cook with ingredients from the local market.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Ohrid</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ohrid&apos;s food scene revolves around fresh lake trout, traditional Macedonian dishes, and lakeside dining. The local specialty — ohridska pastrmka (Ohrid trout) — is an endemic species unique to this lake. Meals are extraordinary value: a full dinner with wine rarely exceeds €15.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Restaurant Letna Bavcha",
                  t: "Traditional Macedonian · Old Town terrace",
                  d: "One of Ohrid&apos;s most popular terrace restaurants, set in a garden with views over the Old Town rooftops. Known for exceptional grilled Ohrid trout, tavche gravche (slow-baked beans — the national dish), and a full range of Macedonian grilled meats. The wine list features Tikve&scaron; Vranec and Temjanika by the glass. Dinner for two with wine: €25–35.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Gladiator",
                  t: "Lakeside seafood · Harbour area",
                  d: "A waterfront restaurant near the old harbour specialising in freshly prepared lake fish. The grilled trout platter is generous and perfectly seasoned. The terrace sits directly on the lake, making it the best spot for a sunset dinner. Try the trout prepared in walnut sauce — a local preparation you won&apos;t find elsewhere. Mains €6–12.",
                  b: "Best lakeside",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Old Town Bakeries",
                  t: "Budget street food · Multiple locations",
                  d: "The bakeries scattered through the Old Town and near the bus station serve freshly baked burek (flaky filo pastry filled with cheese, meat, or spinach) for MKD 50–80 (€0.80–1.30). Paired with a pot of thick Macedonian yoghurt (MKD 30), this is the best budget meal in the city. Perfect for a quick breakfast or pre-bus lunch.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Kaneo Beach Bar",
                  t: "Casual drinks · Below St John at Kaneo",
                  d: "A small bar on the rocky beach directly below the Church of St John at Kaneo. The setting is unbeatable — drink a cold Skopsko beer (MKD 80 / €1.30) or a glass of wine while looking up at the iconic cliff church. Simple drinks menu, no full meals, but the location alone makes it worth the walk down the coastal path.",
                  b: "Best setting",
                  c: "bg-parchment border-parchment-2",
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
            destination="Ohrid North Macedonia"
            hotels={[
              {
                name: "Villa Jovan",
                type: "Mid-range guesthouse · Old Town lake views",
                price: "From €35/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/mk/villa-jovan-ohrid.html?aid=2820480",
              },
              {
                name: "Hotel Desaret",
                type: "Heritage hotel · Lakeside promenade",
                price: "From €55/night",
                rating: "4",
                badge: "Most character",
                url: "https://www.booking.com/hotel/mk/desaret-ohrid.html?aid=2820480",
              },
              {
                name: "Sunny Lake Hostel",
                type: "Budget hostel · Old Town",
                price: "From €10/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/mk/sunny-lake-hostel-ohrid.html?aid=2820480",
              },
              {
                name: "Hotel Tino Sv Stefan",
                type: "Boutique · Old Town centre",
                price: "From €65/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/mk/tino-sv-stefan-ohrid.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ohrid Old Town Walking Tour",
                duration: "2.5 hrs",
                price: "From €15/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Ohrid+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lake Ohrid Boat Tour + Sv Naum",
                duration: "4 hrs",
                price: "From €20/person",
                badge: "Highlight",
                url: "https://www.getyourguide.com/s/?q=Ohrid+boat+tour+Sv+Naum&partner_id=PSZA5UI",
              },
              {
                name: "Ohrid Kayak Adventure",
                duration: "2 hrs",
                price: "From €15/person",
                url: "https://www.getyourguide.com/s/?q=Ohrid+kayak&partner_id=PSZA5UI",
              },
              {
                name: "Ohrid Wine &amp; Food Tasting",
                duration: "3 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=Ohrid+North+Macedonia+wine+tasting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Ohrid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Visiting the churches without a guide or any context",
                  desc: "Ohrid&apos;s Byzantine churches look similar to untrained eyes — small stone buildings with faded paintings. A guide or even a downloaded audio tour transforms them into one of the most concentrated collections of medieval fresco art in Europe. The Church of St Sophia alone contains a programme that influenced Byzantine art across the entire Orthodox world.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🐟",
                  title: "Ordering salmon or imported fish instead of Ohrid trout",
                  desc: "Ohridska pastrmka — the Ohrid trout — is an endemic species found only in this lake. Restaurants serve a related farmed variety that is still unique to the region. Order the local trout by name and ask the waiter about its origin. This is the single dish you cannot eat anywhere else in the world. Skipping it for familiar fish is a genuine mistake.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⛵",
                  title: "Only looking at the lake from the shore",
                  desc: "Lake Ohrid looks beautiful from the promenade but looks extraordinary from the water — the clifftop churches, fortress walls, and the dramatic Albanian mountains behind make sense as one integrated landscape only from a boat. A group tour costs MKD 500–1,500 (€8–25). It is the best €8 you will spend in North Macedonia.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌞",
                  title: "Visiting in July–August and paying peak prices",
                  desc: "The Ohrid Summer Festival (July–August) brings classical concerts to the ancient theatre, which is wonderful, but accommodation prices triple and the Old Town gets crowded. May–June and September–October offer the same water temperature, zero crowds, and guesthouse prices at €15–20/night instead of €50–70. The shoulder season is dramatically better value.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏔️",
                  title: "Not making the trip to Sv Naum on the southern shore",
                  desc: "Most visitors spend all 3 days in Ohrid town and miss the southern lake entirely. Sv Naum monastery — 29 km south, near the Albanian border — is one of the most beautiful Orthodox sites in the Balkans. Spring-fed pools, peacock gardens, and a 9th-century church. The boat tour there and back is the highlight of many trips to North Macedonia.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m, i) => (
                <TipCard key={i} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Ohrid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📸",
                  title: "Photograph St John at Kaneo at sunrise and sunset",
                  desc: "The cliff church looks good at any time but extraordinary at golden hour. Sunrise (walk the coastal path at 6am — zero other tourists) and sunset (western light turns the stone gold and reflects on the lake) are the two unmissable photography moments. The path takes 10 minutes from the old town waterfront.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💎",
                  title: "Buy authentic Ohrid pearls — check for the certificate",
                  desc: "Ohrid pearl jewellery uses scales from the endemic Ohridska biserka fish — a 2,000-year-old technique. Genuine pieces come with a certificate of authenticity. Cheap imitations made from plastic or glass are widely sold. Buy from established shops in the bazaar and expect to pay €15–50 for quality pieces. They make exceptional gifts.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚣",
                  title: "Hire a rowing boat for a private lake experience",
                  desc: "Small wooden rowing boats can be rented on the Ohrid waterfront for MKD 300–500 (€5–8) per hour. Row around the cliff below St John at Kaneo for a perspective that professional photographers queue for on guided kayak tours. The lake is calm in the morning and the water clarity shows the bottom at 5 metres depth near the cliffs.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍷",
                  title: "Drink Macedonian wine — Tikve&scaron; is extraordinary value",
                  desc: "North Macedonia&apos;s Tikve&scaron; wine region produces Vranec — a full-bodied red from the endemic Vranec grape — and Temjanika, an aromatic white similar to Muscat. A quality bottle costs €5–8 in shops and €10–15 in restaurants. This is some of the best-value premium wine in Europe and almost entirely unknown outside the Balkans.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗓",
                  title: "Time your visit for the Ohrid Summer Festival",
                  desc: "The festival runs July–August and features classical music, opera, and theatre performed in the ancient theatre, the Church of St Sophia, and on the open-air lakeside stage. Tickets cost €15–50. If you can handle higher accommodation prices, the festival atmosphere — concerts in a 2,200-year-old theatre overlooking the lake — is genuinely unforgettable.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🛂",
                  title: "Use Ohrid to manage your Schengen 90/180 days",
                  desc: "North Macedonia is not in the Schengen Area — time spent here does not count against the 90/180 Schengen day limit. Many long-term European travellers use Ohrid as a comfortable, inexpensive base while their Schengen days reset. With fast internet, cheap accommodation, and an excellent quality of life, it is one of the best Schengen-buffer destinations in Europe.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ohrid" />

          {/* Combine With */}
          <CombineWith currentSlug="ohrid-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Skopje to Ohrid?",
                  a: "Buses run from Skopje to Ohrid 6–8 times daily, take 3 hours, and cost MKD 500 (approximately €8). There is no direct train. Ohrid Airport (OHD) has seasonal charter flights from Western Europe in summer (June–September). Outside charter season, Skopje Airport (SKP) is the gateway — rent a car (2.5 hours) or take the bus.",
                },
                {
                  q: "Is Lake Ohrid safe for swimming?",
                  a: "Lake Ohrid is one of the cleanest lakes in Europe — a UNESCO-protected tectonic lake over 3 million years old with no industrial pollution. The water is safe to swim in and visibility reaches 20–30 metres in the clear sections near the cliffs. The town beach and the beaches near Sv Naum are the best spots. Water temperature reaches 24–26°C by late July.",
                },
                {
                  q: "What is the Ohrid Summer Festival and when is it?",
                  a: "The Ohrid Summer Festival runs July–August and is one of the oldest cultural festivals in the Balkans, featuring classical music, opera, and theatre in the ancient theatre, St Sophia church, and on the lakeside stage. Tickets cost €15–50. It triples accommodation prices, so book 3+ months ahead if visiting during this period.",
                },
                {
                  q: "Can I combine Ohrid with Albania in one trip?",
                  a: "Ohrid and Albania combine perfectly. Sv Naum monastery is just 5 km from the Albanian border. From Ohrid, shared taxis run to Pogradec in Albania (1 hour, €5), from where you can continue to the Albanian Riviera. The route Ohrid to Pogradec to Gjirokastra to Sarande is one of the best value road trips in the Balkans.",
                },
                {
                  q: "Do I need a visa for North Macedonia?",
                  a: "US, UK, EU, and Australian passport holders can enter North Macedonia visa-free for up to 90 days. Indian passport holders need a Type C short-stay visa (€35–60, 5–15 business days processing). North Macedonia is not in the Schengen Area, so a separate visa is needed. If you hold a valid multi-entry Schengen visa, you may be able to enter visa-free — check the latest rules before travel.",
                },
                {
                  q: "How many days do you need in Ohrid?",
                  a: "3 days is ideal. Day 1 covers the Old Town, St John at Kaneo, and St Sophia. Day 2 is for Samuel\u2019s Fortress, the Ancient Theatre, Plaoshnik, and the Old Bazaar. Day 3 is the lake boat tour to the Bay of Bones and Sv Naum monastery. You could do 2 days in a rush, but you would miss the boat trip, which is the highlight for many visitors.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ohrid trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-ohrid", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/ohrid-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-ohrid", label: "How to get there", icon: "✈️" },
                { href: "/blog/ohrid-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="ohrid-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Balkans &amp; Eastern Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Albania Riviera 5 Days — Beaches &amp; Mountains", href: "/blog/albania-riviera-5-days" },
                { label: "Plovdiv 3 Days — Bulgaria&apos;s Cultural Capital", href: "/blog/plovdiv-3-days" },
                { label: "Athens 4 Days — Acropolis to the Islands", href: "/blog/athens-4-days" },
                { label: "Istanbul 5 Days — East Meets West", href: "/blog/istanbul-5-days" },
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
