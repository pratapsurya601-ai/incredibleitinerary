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

// -- Table of Contents --
const EGYPT_TOC = [
  { id: "honest",     emoji: "\u26A1", label: "What Egypt Actually Is" },
  { id: "season",     emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "\u2708\uFE0F", label: "Getting There" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "7-Day Itinerary" },
  { id: "landmarks",  emoji: "\uD83C\uDFDB\uFE0F", label: "Landmark Guide" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "stay",       emoji: "\uD83C\uDFE8", label: "Where to Stay" },
  { id: "eat",        emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
];

// -- Reading Progress Bar --
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

// -- Share Bar --
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
          href: `mailto:?subject=Egypt 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Egypt in 7 Days — Pyramids, Luxor, Nile Cruise and Abu Simbel&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/egypt-7-days"
        imageUrl="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80"
        description="Egypt in 7 Days: Pyramids of Giza, Luxor temples, Valley of the Kings, Nile cruise, Abu Simbel — complete travel guide with budget breakdown in EGP and USD."
      />
    </div>
  );
}

// -- Stat Card --
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// -- Day Card --
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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

// -- Tip Card --
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

// -- FAQ Accordion --
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

// -- MAIN COMPONENT --
export default function EgyptClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={EGYPT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Egypt" />

      <main className="bg-cream min-h-screen">

        {/* -- HERO -- */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="egypt pyramids giza sphinx cairo nile sunset"
            fallback="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&q=80"
            alt="Great Pyramids of Giza and Sphinx at golden hour with the Nile in the background, Egypt"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Egypt 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa &amp; Middle East
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Egypt in 7 Days:
                <em className="italic text-amber-300"> Pyramids, Luxor, Nile &amp; Abu Simbel</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Giza plateau at 8am, Karnak&apos;s hypostyle hall, a felucca on the Nile at sunset, and Ramesses II&apos;s cliff-carved colossi at Abu Simbel. Seven days covering three civilisations with real costs in EGP &amp; USD, visa info, and the mistakes that ruin most Egypt trips.
              </p>
            </div>
          </div>
        </div>

        {/* -- ARTICLE -- */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEA\uD83C\uDDEC"} Egypt</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 7 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Seven days in Egypt is enough to see three civilisations at once &mdash; the Pharaonic world of the pyramids and Karnak, the Islamic splendour of Cairo&apos;s old city, and the Nubian warmth of Aswan&apos;s riverbanks. The Nile still flows through it all, unhurried, and Abu Simbel still faces the sunrise at the same angle Ramesses II commanded 3,200 years ago.
            </p>
          </blockquote>

          {/* -- WHAT EGYPT ACTUALLY IS -- */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Egypt Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Egypt is a country of 105 million people living almost entirely along a single river. The Nile Valley and Delta account for roughly 5% of Egypt&apos;s land area but hold 95% of the population. Everything else is Saharan desert. The tourist circuit &mdash; Cairo, Luxor, Aswan, Abu Simbel &mdash; follows this narrow green strip from north to south, and the density of monumental architecture along it is unmatched anywhere on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Egypt is chaotic, overwhelming, and occasionally exhausting in ways that Southeast Asia is not. Cairo is one of the world&apos;s most intense cities &mdash; 22 million people, relentless traffic, and a vendor culture at tourist sites that is aggressive by any standard. But the monuments are staggering in a way that photographs never convey. The Great Pyramid is not a postcard &mdash; it is 2.3 million limestone blocks assembled with sub-millimetre precision 4,500 years ago. Karnak&apos;s hypostyle hall has 134 columns, some 23 metres tall, covered in hieroglyphic reliefs that still hold their paint.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Seven days covers Cairo (Giza, Egyptian Museum, Islamic Cairo), Luxor (Karnak, Valley of the Kings), Aswan (Philae, Nubian culture) and Abu Simbel. A Nile cruise between Luxor and Aswan is the best way to connect the two cities if your budget allows. The exchange rate in 2026 is approximately $1 = 50 EGP.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="CAI (Cairo)" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Oct\u2013Apr" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="UNESCO Sites" value="7" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* -- BEST TIME TO VISIT -- */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Egypt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct\u2013Nov",
                  i: "\u2600\uFE0F",
                  t: "Early Season \u2014 Best Overall",
                  d: "Temperatures of 22\u201330\u00B0C in Cairo, slightly cooler in Upper Egypt. The Abu Simbel sun alignment falls on October 22. Crowds are moderate, prices are reasonable, and the light across the Nile Valley is extraordinary. October and November are arguably the two best months to visit Egypt.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Dec\u2013Feb",
                  i: "\uD83C\uDF05",
                  t: "Peak Winter \u2014 Best Weather",
                  d: "20\u201326\u00B0C across the main circuit. The most comfortable temperatures, especially for the Giza plateau and Valley of the Kings where shade is nonexistent. February 22 brings the second Abu Simbel sun alignment. This is peak tourist season \u2014 prices for Nile cruises and hotels increase 30\u201350%.",
                  b: "Peak season, best temperatures",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Mar\u2013Apr",
                  i: "\uD83C\uDF3C",
                  t: "Shoulder Season \u2014 Good Value",
                  d: "25\u201332\u00B0C with increasing warmth. March can bring khamsin sandstorms (hot desert winds) that reduce visibility. April is warmer but manageable. Good value as peak-season prices drop. Ramadan dates shift yearly \u2014 check the calendar, as some restaurants and services operate reduced hours.",
                  b: "Good value, warming",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "May\u2013Sep",
                  i: "\uD83D\uDD25",
                  t: "Summer \u2014 Extreme Heat",
                  d: "Cairo regularly hits 40\u201345\u00B0C. Luxor and Aswan exceed 45\u00B0C. The Valley of the Kings adds geothermal heat from the tombs. Heat exhaustion is a genuine medical risk. Hotel prices are at their lowest, but the experience is compromised. Visit only if there is no alternative \u2014 and carry electrolytes, a serious hat, and litres of water.",
                  b: "Avoid if possible",
                  c: "bg-red-50 border-red-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} &mdash; {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* -- GETTING THERE -- */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Egypt</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cairo International Airport (CAI) is the main gateway. Terminal 2 handles most international arrivals. <strong className="font-medium">Indian passport holders need an e-Visa ($25, apply at evisa.eg.gov.eg).</strong> Most Western passports can get a visa on arrival ($25) or apply online.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "From India",
                  d: "Direct flights from Delhi and Mumbai to Cairo on EgyptAir and Air India (5\u20136 hours). Fares: \u20B918,000\u2013\u20B935,000 return if booked 2\u20133 months ahead. Connecting flights through Dubai, Doha, or Abu Dhabi on Emirates, Qatar Airways, or Etihad are often cheaper (\u20B914,000\u2013\u20B925,000) with a 2\u20134 hour layover. E-Visa required ($25, apply 5\u20137 days before travel).",
                  b: "5\u20136 hrs direct",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "From Europe, USA & UK",
                  d: "Direct flights from London (5 hrs), Paris (4.5 hrs), Frankfurt (4 hrs), New York (11 hrs). EgyptAir, British Airways, Lufthansa, and budget carriers like Wizz Air serve Cairo. Visa on arrival at Cairo airport ($25) or e-Visa in advance. Return fares from Europe start around $250\u2013$450.",
                  b: "Visa on arrival available",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "Internal flights & trains",
                  d: "Cairo to Luxor: flight 1 hour ($30\u201380 on EgyptAir/Air Cairo) or overnight sleeper train (EGP 450\u2013700, ~$9\u201314). Luxor to Aswan: train 3 hours (EGP 100\u2013200, ~$2\u20134). Aswan to Abu Simbel: shared minibus convoy ($30\u201350) or flight ($150\u2013200 return). For comfort, the Nile cruise Luxor\u2013Aswan covers the river segment beautifully.",
                  b: "Budget flights from $30",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE95",
                  t: "Cairo airport to city centre",
                  d: "Uber or Careem from the airport to central Cairo costs EGP 150\u2013250 (~$3\u20135, 30\u201345 minutes). Do not use the airport taxi touts in the arrivals hall \u2014 they charge EGP 500\u2013800 for the same ride. Walk past them, exit to the car park area, and book via the app. The new Cairo Metro Line 3 now connects Terminal 2 to downtown (EGP 10, ~$0.20).",
                  b: "Use Uber/Careem",
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

          {/* -- 7-DAY ITINERARY -- */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 7-Day Egypt Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary follows the classic Cairo &rarr; Luxor &rarr; Aswan &rarr; Abu Simbel route. Costs are per person at mid-range spending. All entry fees in EGP with USD equivalent at ~$1 = 50 EGP (2026 rate).
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Cairo \u2014 Pyramids of Giza, Sphinx & the Great Pyramid"
                cost="EGP 1,200\u20131,800 (~$24\u201336)"
                items={[
                  "Arrive at the Giza Pyramids complex at 8am sharp when it opens. Entry: EGP 450 (~$9). The light is golden, the vendors are still setting up, and you have 30 minutes before the tour buses arrive. Walk the full plateau at your own pace \u2014 the Great Pyramid of Khufu, Khafre\u2019s pyramid with its surviving limestone cap, and the smallest Menkaure pyramid.",
                  "Entering the Great Pyramid: EGP 100 extra (~$2). The ascending passage is cramped, hot, and claustrophobic \u2014 but the King\u2019s Chamber with its granite sarcophagus is historically staggering. Solar Boat Museum: EGP 100 (~$2). Budget tip: choose one interior entry, Khufu is the most impressive.",
                  "The Sphinx \u2014 entry included in the main Giza ticket. Walk the full perimeter of the enclosure. The best photograph angle is from the eastern viewing platform at 9\u201310am with the pyramid rising behind it.",
                  "Afternoon \u2014 Camel ride on the plateau perimeter: EGP 150\u2013300 (~$3\u20136) for a short circuit. Agree on price and duration before mounting, and confirm there is no \u2018extra fee to get off.\u2019 This is optional but atmospheric if you negotiate well.",
                  "Evening \u2014 Giza Sound and Light Show at the pyramids (EGP 250, ~$5). Theatrical but genuinely atmospheric with the pyramids illuminated against the night sky. Dinner at a local restaurant near Giza or in central Cairo.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Cairo \u2014 Egyptian Museum, Islamic Cairo & Khan el-Khalili"
                cost="EGP 1,000\u20131,500 (~$20\u201330)"
                items={[
                  "Morning \u2014 Egyptian Museum in Tahrir Square. Entry: EGP 200 (~$4). The Royal Mummies Room is EGP 300 extra (~$6) and worth every piastre \u2014 11 royal mummies including Ramesses II. The Tutankhamun treasures fill two upper rooms: the golden death mask, the innermost gold coffin, the alabaster canopic jars. Give it 3 hours minimum.",
                  "Alternatively: the Grand Egyptian Museum (GEM) near Giza, if fully open during your visit, houses the complete Tutankhamun collection in a purpose-built modern facility. Entry: EGP 400\u2013600 (~$8\u201312). Check current opening status before planning your day.",
                  "Afternoon \u2014 Khan el-Khalili bazaar after 2pm. Free to walk, endlessly atmospheric. Perfume shops, spice stalls, copperware, papyrus, silver jewellery. Haggle everything \u2014 the first quoted price is always 3\u20135x the actual selling price. Start at 20% of the ask and meet in the middle.",
                  "Islamic Cairo \u2014 Mohammed Ali Mosque at the Citadel of Saladin (EGP 180, ~$3.60 for the Citadel complex). The alabaster mosque interior with brass lamps and sweeping views over Cairo. Al-Muizz Street \u2014 the medieval Islamic spine of old Cairo, one of the finest open-air museum streets in the world.",
                  "Coptic Cairo \u2014 Hanging Church (free), Coptic Museum (EGP 100), Ben Ezra Synagogue (free). The oldest part of Cairo, built within the walls of a Roman fortress. A quiet contrast to the intensity of the rest of the city.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Luxor \u2014 Karnak Temple & Luxor Temple at Night"
                cost="EGP 800\u20131,200 (~$16\u201324) excluding transport to Luxor"
                items={[
                  "Travel Cairo to Luxor: budget flight on EgyptAir or Air Cairo ($30\u201350, 1 hour) or overnight sleeper train departing Cairo Ramses Station (EGP 450\u2013700, ~$9\u201314). The train is an experience in itself; the flight is faster.",
                  "Morning \u2014 Karnak Temple complex. Entry: EGP 220 (~$4.40). The largest religious building ever constructed. 134 columns in the Hypostyle Hall, some 23 metres tall, covered in hieroglyphic reliefs. The Sacred Lake, the obelisks of Hatshepsut, and 2,000 years of construction from the Middle Kingdom through the Ptolemaic period. Allow 2\u20133 hours.",
                  "The recently excavated Avenue of Sphinxes connecting Karnak to Luxor Temple is now fully walkable \u2014 a 2.7km processional road lined with sphinx statues, one of the great archaeological restorations of the decade.",
                  "Evening \u2014 Luxor Temple. Entry: EGP 160 (~$3.20). Visit in the late afternoon (4\u20136pm) and stay for the illumination after dark \u2014 the ochre sandstone turns gold under spotlights and the atmosphere is extraordinary. Open until 10pm. This is one of the finest evening experiences in all of Egypt.",
                  "Dinner on the Luxor corniche overlooking the Nile. A full Egyptian meal: EGP 80\u2013150 (~$1.60\u20133). Koshary, grilled meats, fresh bread, and hibiscus juice (karkade).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Luxor West Bank \u2014 Valley of the Kings & Hatshepsut Temple"
                cost="EGP 1,000\u20131,500 (~$20\u201330)"
                items={[
                  "Early morning \u2014 Cross to the West Bank. Colossi of Memnon: free. Two enormous seated statues of Amenhotep III, 18 metres tall, guarding the entrance to the ancient necropolis. The best photo angle is from the road at sunrise.",
                  "Valley of the Kings \u2014 EGP 240 (~$4.80) covers entry to three tombs. Tutankhamun\u2019s tomb is EGP 100 extra (~$2) \u2014 small but contains the original sarcophagus. Ramesses VI\u2019s tomb (KV9) is included in the standard ticket and has the most spectacular astronomical ceiling in the valley. No photography inside the tombs.",
                  "Hatshepsut Temple (Deir el-Bahari) \u2014 EGP 140 (~$2.80). The three-tiered mortuary temple of Egypt\u2019s greatest female pharaoh, set against sheer limestone cliffs. The colonnaded terraces and painted reliefs of the Punt expedition are extraordinary. Visit in the morning before the heat becomes intense.",
                  "Optional: hot air balloon over the West Bank at dawn ($80\u2013120/person, 45-minute flight). Sunrise from 300 metres over the Valley of the Kings, Hatshepsut Temple, and the Nile is one of Egypt\u2019s defining experiences. Book the evening before through your hotel.",
                  "Afternoon \u2014 Felucca on the Nile at sunset. EGP 50\u2013100 (~$1\u20132) per hour for the whole boat. Arrange at the corniche. Watch the West Bank cliffs turn pink and the river go silver as the sun drops. The best EGP 80 you will spend in Egypt.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Aswan \u2014 Philae Temple, High Dam & Nubian Village"
                cost="EGP 800\u20131,200 (~$16\u201324) excluding transport to Aswan"
                items={[
                  "Travel Luxor to Aswan by train (EGP 100\u2013200, ~$2\u20134, 3 hours) or minibus (EGP 80, scenic Nile road). Aswan is smaller, quieter, and many travelers find it the most beautiful part of Egypt \u2014 the Nile here is dotted with green islands and Nubian villages.",
                  "Philae Temple \u2014 EGP 180 (~$3.60) + EGP 60 (~$1.20) for the motorboat from Shellal dock. The temple of Isis on its island, rebuilt after the Aswan High Dam flooded the original site. One of the great stories of archaeological rescue. Visit in the morning light when the reflections on the lake are clearest.",
                  "Aswan High Dam \u2014 EGP 60 (~$1.20). The Soviet-era dam that created Lake Nasser and changed Egypt forever. The scale is genuinely impressive. Combined visit with the Unfinished Obelisk (EGP 80, ~$1.60) \u2014 the largest ancient obelisk ever attempted, abandoned in the quarry when it cracked.",
                  "Afternoon \u2014 Nubian Village. Hire a small motorboat from the corniche (EGP 50\u201380 return, ~$1\u20131.60) to visit a Nubian village on Elephantine Island or across the river. Colourful painted houses, strong tea, friendly locals, and souvenir shopping at fair prices. Nubians are significantly less pushy than Cairo vendors.",
                  "Evening \u2014 Walk the Aswan corniche at sunset. The Nile between Aswan\u2019s islands \u2014 Elephantine, Sehel, the Botanical Garden \u2014 is lined with palms and granite boulders. The most peaceful evening in the itinerary.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Abu Simbel \u2014 Ramesses II\u2019s Greatest Monument"
                cost="EGP 2,500\u20134,000 (~$50\u201380) including transport"
                items={[
                  "Abu Simbel day trip from Aswan. This is non-negotiable \u2014 it is the single most important detour in Egyptian travel. The temple is 300km south of Aswan in the Nubian desert.",
                  "Transport options: shared minibus convoy departs 3\u20134am from Aswan ($30\u201350/person, 3\u20134 hours each way, convoy for security). The convoy system is reliable and well-organised. Budget flight on EgyptAir ($150\u2013200 return, 45 minutes) for comfort.",
                  "Abu Simbel \u2014 EGP 450 (~$9). Four colossal 20-metre statues of Ramesses II carved into the cliff face, plus the interior hall with painted reliefs of the Battle of Kadesh. The smaller Temple of Nefertari next to it is equally remarkable. Spend 2 hours minimum.",
                  "The sun alignment: on February 22 (Ramesses\u2019 birthday) and October 22 (his coronation), the rising sun penetrates the entire 60-metre length of the inner sanctuary and illuminates three of the four statues at the back \u2014 the god of darkness remains in shadow. Plan your dates around this if at all possible.",
                  "Return to Aswan by afternoon. Evening \u2014 Aswan souq for Nubian textiles, hibiscus tea (karkade), saffron, and handmade crafts. The best market in Egypt, less aggressive than Khan el-Khalili with comparable quality.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Nile Cruise Day or Cairo Farewell & Departure"
                cost="EGP 750\u20132,000 (~$15\u201340)"
                items={[
                  "Option A \u2014 Nile cruise segment: if you booked a 2\u20133 night Luxor\u2013Aswan cruise earlier in the trip, Day 7 is your final morning on the river. The cruise covers Kom Ombo (dual temple), Edfu (best-preserved Ptolemaic temple), and the lock system at Esna. All-inclusive cruises start from $200/person for budget, $400+ for mid-range.",
                  "Option B \u2014 Cairo return and farewell: fly Aswan to Cairo ($50\u2013100, 1.5 hours). Cairo Tower (EGP 200, ~$4) for panoramic views of the city and the Nile. Al-Azhar Park (EGP 30, ~$0.60) \u2014 a beautiful Islamic garden with views over Islamic Cairo.",
                  "Afternoon \u2014 Final visit to any missed Cairo sites. The Muizz Street walk, a traditional ahwa (coffee house) for backgammon and mint tea, or the Cairo Opera House precinct for bookshops and galleries.",
                  "Departure from Cairo airport \u2014 budget at least 3 hours before international flights. The airport is sprawling and security queues can be long. Uber from central Cairo: EGP 200\u2013300 (~$4\u20136, 40\u201360 minutes). Do not use airport taxis \u2014 they charge EGP 500\u2013800 for the same ride.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Egypt" onPlanTrip={() => setModalOpen(true)} />

          {/* -- LANDMARK GUIDE -- */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential monuments and archaeological sites in priority order. All entry fees are as of early 2026. A licensed Egyptologist guide (EGP 500\u2013800/half day, ~$10\u201316) transforms the experience at every major site.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Great Pyramid of Khufu (Giza)",
                  e: "EGP 450 (~$9)",
                  d: "The oldest and largest of the Seven Wonders \u2014 2.3 million limestone blocks, 146 metres tall when built, assembled with sub-millimetre precision 4,500 years ago. Interior entry is EGP 100 extra. The King\u2019s Chamber is a plain granite room with an empty sarcophagus \u2014 hot, claustrophobic, and conceptually staggering. Visit at 8am for golden light and thin crowds.",
                  t: "Must see \u00B7 2\u20133 hrs for full plateau",
                },
                {
                  n: "Karnak Temple Complex (Luxor)",
                  e: "EGP 220 (~$4.40)",
                  d: "The largest religious building ever constructed. The Hypostyle Hall alone \u2014 134 columns, 23 metres tall, covering 5,000 square metres \u2014 took multiple pharaohs over a century to complete. The Sacred Lake, Hatshepsut\u2019s obelisks, and the Avenue of Sphinxes to Luxor Temple make this the single most impressive temple complex in Egypt.",
                  t: "Must see \u00B7 2\u20133 hrs",
                },
                {
                  n: "Valley of the Kings (Luxor West Bank)",
                  e: "EGP 240 (~$4.80, 3 tombs)",
                  d: "62 royal tombs cut into the limestone cliffs of the Theban Hills. Ramesses VI\u2019s tomb (KV9) has the finest astronomical ceiling. Tutankhamun\u2019s tomb (EGP 100 extra) is small but contains the original sarcophagus. Seti I\u2019s tomb (EGP 1,000 extra) is the most elaborate but rarely visited due to cost. No photography inside.",
                  t: "Must see \u00B7 2\u20133 hrs",
                },
                {
                  n: "Abu Simbel (Aswan / Nubia)",
                  e: "EGP 450 (~$9)",
                  d: "Ramesses II\u2019s greatest monument \u2014 four 20-metre statues carved into the cliff face overlooking Lake Nasser. The interior hall has painted reliefs of the Battle of Kadesh. The entire temple was relocated 65 metres higher in the 1960s to save it from the rising waters of Lake Nasser. The engineering feat of the rescue is nearly as impressive as the original construction.",
                  t: "Non-negotiable \u00B7 2 hrs",
                },
                {
                  n: "Philae Temple (Aswan)",
                  e: "EGP 180 (~$3.60) + boat",
                  d: "The temple of Isis on a lake island, reached by motorboat. Another rescued monument \u2014 the original island was submerged by the Aswan Dam and the temple was dismantled and rebuilt on higher ground. The reliefs depicting Isis, Osiris, and Horus are among the finest in Egypt. Morning light on the water creates extraordinary reflections.",
                  t: "Must see \u00B7 1.5 hrs",
                },
                {
                  n: "Egyptian Museum / Grand Egyptian Museum",
                  e: "EGP 200\u2013600 (~$4\u201312)",
                  d: "The Tahrir Square museum houses 120,000 artefacts including the Royal Mummies and Tutankhamun\u2019s treasures. The new Grand Egyptian Museum (GEM) near Giza is a modern, purpose-built facility for the complete Tutankhamun collection. Check which is open and plan accordingly \u2014 either is essential.",
                  t: "Must see \u00B7 3+ hrs",
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
            title="Egypt &mdash; Pyramids, Temples &amp; the Nile"
            subtitle="Five thousand years of monumental architecture along the world&apos;s longest river."
            spots={[
              {
                name: "Great Pyramids of Giza",
                query: "pyramids giza egypt golden hour sphinx desert",
                desc: "The last surviving Wonder of the Ancient World \u2014 4,500 years old and still the most recognisable monument on earth.",
              },
              {
                name: "Karnak Temple Hypostyle Hall",
                query: "karnak temple luxor hypostyle hall columns egypt sunlight",
                desc: "134 columns reaching 23 metres, covered in hieroglyphic reliefs \u2014 the largest religious building ever constructed.",
              },
              {
                name: "Abu Simbel at Sunrise",
                query: "abu simbel temple egypt ramesses statues sunrise lake nasser",
                desc: "Four colossal statues of Ramesses II carved into the Nubian cliff face, facing the sunrise he commanded 3,200 years ago.",
              },
              {
                name: "Nile Felucca at Sunset",
                query: "nile river felucca sailboat sunset aswan egypt palm trees",
                desc: "Traditional sailboats on the Nile between Aswan\u2019s islands \u2014 the most peaceful hour in Egyptian travel.",
              },
              {
                name: "Valley of the Kings",
                query: "valley of the kings luxor egypt tomb entrance desert cliffs",
                desc: "62 royal tombs cut into the Theban Hills \u2014 the final resting place of pharaohs including Tutankhamun and Ramesses the Great.",
              },
            ]}
          />

          {/* -- BUDGET BREAKDOWN -- */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Egypt is one of the most affordable major travel destinations in the world. Budget travellers can see every major site for $35\u201360/day, mid-range for $100\u2013200/day, and luxury for $350\u20131,200+/day. All prices in EGP and USD at approximately $1 = 50 EGP (2026).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (7 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (7N)", "EGP 2,800\u20137,000 ($56\u2013140)", "EGP 17,500\u201335,000 ($350\u2013700)", "EGP 70,000\u2013210,000 ($1,400\u20134,200)"],
                    ["\uD83C\uDF7D Food & Drinks", "EGP 2,800\u20135,250 ($56\u2013105)", "EGP 7,000\u201314,000 ($140\u2013280)", "EGP 17,500\u201352,500 ($350\u20131,050)"],
                    ["\uD83D\uDE97 Transport", "EGP 3,500\u20137,000 ($70\u2013140)", "EGP 7,000\u201314,000 ($140\u2013280)", "EGP 17,500\u201352,500 ($350\u20131,050)"],
                    ["\uD83C\uDFAF Activities & Sites", "EGP 3,500\u20137,000 ($70\u2013140)", "EGP 8,750\u201317,500 ($175\u2013350)", "EGP 35,000\u2013140,000 ($700\u20132,800)"],
                    ["TOTAL (per person)", "$245\u2013420", "$700\u20131,400", "$2,450\u20138,400+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ($35\u201360/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and budget hotels (EGP 400\u20131,000/night), local restaurants and street food (EGP 40\u201380/meal), shared transport and trains, and all major sites. Egypt at this level is one of the cheapest major travel destinations on earth.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range ($100\u2013200/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3\u20134 star hotels (EGP 2,500\u20135,000/night), licensed Egyptologist guides, domestic flights, Nile cruise ($200\u2013400/person), and restaurant dining. The sweet spot for comfort and historical depth.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ($350\u20131,200+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star properties like the Old Cataract Aswan or Four Seasons Cairo, private guides, luxury Nile cruises (Sanctuary, Oberoi), Abu Simbel by charter flight, and VIP tomb access. Egypt luxury travel rivals any destination globally.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* -- WHERE TO STAY -- */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Egypt</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in central Cairo (Downtown or Garden City) for the museum and Islamic Cairo. In Luxor, the East Bank corniche has the best hotel selection. Aswan&apos;s corniche hotels overlook the Nile islands. If doing a Nile cruise, it replaces 2\u20133 nights of hotel accommodation between Luxor and Aswan.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Kempinski Nile Hotel",
                  type: "Luxury \u00B7 Cairo Garden City",
                  price: "From EGP 5,000/night (~$100)",
                  badge: "Best Cairo",
                  desc: "Nile-facing 5-star in Garden City with rooftop pool overlooking the river. Walking distance to the Egyptian Museum and Tahrir Square. The Osmanly restaurant serves excellent Egyptian cuisine. The best balance of luxury and location in Cairo for first-time visitors.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Cairo Downtown Hostels",
                  type: "Budget \u00B7 Cairo Downtown",
                  price: "From EGP 400/night (~$8)",
                  badge: "Best budget",
                  desc: "Downtown Cairo has dozens of well-rated hostels and budget hotels within walking distance of the Egyptian Museum. Look for properties rated 8+ on Booking.com near Talaat Harb Square. Breakfast is often included. The area is noisy but perfectly located for exploring the city on foot.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Steigenberger Nile Palace",
                  type: "Mid-range \u00B7 Luxor",
                  price: "From EGP 2,500/night (~$50)",
                  badge: "Best Luxor",
                  desc: "Nile-facing hotel on the East Bank corniche with pool, gardens, and direct views across to the West Bank. Walking distance to Luxor Temple. The rooftop bar at sunset with the West Bank cliffs turning pink is one of the great hotel views in Egypt.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Sofitel Legend Old Cataract",
                  type: "Luxury \u00B7 Aswan",
                  price: "From EGP 7,500/night (~$150)",
                  badge: "Iconic",
                  desc: "The most storied hotel in Nile Valley travel. Agatha Christie wrote here, and the terrace overlooking the Nile cataracts and Elephantine Island is one of the finest hotel views in the world. Victorian architecture, butler service, and a swimming pool perched above the river. Worth a splurge for at least one night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Nile Cruise (Luxor\u2013Aswan)",
                  type: "All-inclusive \u00B7 Nile Valley",
                  price: "From $200/person (3\u20134 nights)",
                  badge: "Best experience",
                  desc: "A Nile cruise replaces individual hotel nights in Luxor and Aswan while covering all the temples between the two cities with an onboard Egyptologist. Budget cruises from $200/person, mid-range (Movenpick, Sonesta) $300\u2013500, luxury (Sanctuary, Oberoi) $500\u20131,000+. The river itself is the highlight \u2014 temples from the deck at sunset.",
                  color: "border-teal-200 bg-teal-50",
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

          {/* -- WHERE TO EAT -- */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Egypt</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Egyptian food is hearty, flavourful, and extraordinarily cheap. The national dish is koshari \u2014 a layered bowl of pasta, rice, lentils, chickpeas, tomato sauce, and crispy fried onions. Ful medames (slow-cooked fava beans) is the breakfast of 100 million Egyptians. Street food is safe, fresh, and everywhere.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Abou Tarek",
                  t: "Koshari institution \u00B7 Cairo Downtown",
                  d: "Cairo\u2019s most famous koshari restaurant, serving nothing else since 1950. Four floors, always packed, and the koshari is genuinely the best in the city. A large bowl costs EGP 40\u201360 (~$0.80\u20131.20). The crispy onions are made fresh every hour. This is the single most essential eating experience in Egypt \u2014 cheap, filling, and completely authentic.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Ful & Tameya Street Carts",
                  t: "Street food \u00B7 Everywhere",
                  d: "Ful medames (slow-cooked fava beans with tahini, lemon, and cumin) and tameya (Egyptian falafel made from fava beans, not chickpeas) are served from carts across every city from dawn. A ful sandwich: EGP 10\u201320 (~$0.20\u20130.40). Three tameya in bread: EGP 15\u201325 (~$0.30\u20130.50). This is what Egyptians actually eat for breakfast, and it is delicious.",
                  b: "Cheapest meals",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Grilled Meats & Kebab Houses",
                  t: "Egyptian grill \u00B7 Cairo, Luxor, Aswan",
                  d: "Kofta (spiced minced meat), shish tawook (marinated chicken), and mixed grill platters are served at local restaurants across Egypt. A full grilled meat plate with bread, salads, tahini, and rice: EGP 100\u2013200 (~$2\u20134). Look for places with high local turnover and a charcoal grill visible from the street. Avoid the tourist-menu restaurants near the sites.",
                  b: "Best dinner value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Sequoia (Zamalek, Cairo)",
                  t: "Fine dining \u00B7 Nile-front",
                  d: "Cairo\u2019s most atmospheric restaurant, set on the northern tip of Zamalek Island with the Nile flowing on both sides. Egyptian and Mediterranean cuisine, cocktails, and a view that justifies the price. EGP 500\u20131,500/person (~$10\u201330). This is the finest dinner setting in the capital \u2014 reserve for your last night.",
                  b: "Best splurge",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Karkade & Sahlab",
                  t: "Egyptian drinks \u00B7 Everywhere",
                  d: "Karkade (hibiscus tea, served hot or iced) is Egypt\u2019s national drink \u2014 tart, refreshing, and available at every cafe for EGP 10\u201320 (~$0.20\u20130.40). Sahlab (warm milk drink thickened with orchid flour, topped with cinnamon and nuts) is the winter speciality. Fresh sugarcane juice from street vendors: EGP 5\u201310 (~$0.10\u20130.20). Egypt\u2019s drink culture is as rich as its food.",
                  b: "Must try",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Egypt"
            hotels={[
              {
                name: "Kempinski Nile Hotel Cairo",
                type: "5-Star Luxury \u00B7 Cairo",
                price: "From EGP 5,000/night (~$100)",
                rating: "5",
                badge: "Best Cairo",
                url: "https://www.booking.com/hotel/eg/kempinski-nile.html?aid=2820480",
              },
              {
                name: "Steigenberger Nile Palace Luxor",
                type: "4-Star \u00B7 Luxor Corniche",
                price: "From EGP 2,500/night (~$50)",
                rating: "4",
                badge: "Best Luxor",
                url: "https://www.booking.com/hotel/eg/steigenberger-nile-palace.html?aid=2820480",
              },
              {
                name: "Sofitel Legend Old Cataract Aswan",
                type: "5-Star Heritage \u00B7 Aswan",
                price: "From EGP 7,500/night (~$150)",
                rating: "5",
                badge: "Iconic",
                url: "https://www.booking.com/hotel/eg/sofitel-legend-old-cataract.html?aid=2820480",
              },
              {
                name: "Movenpick Resort Aswan",
                type: "4-Star Island Resort \u00B7 Aswan",
                price: "From EGP 3,000/night (~$60)",
                rating: "4",
                badge: "Best value Aswan",
                url: "https://www.booking.com/hotel/eg/movenpick-resort-aswan.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Giza Pyramids & Sphinx Guided Tour",
                duration: "Half day",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=giza+pyramids+sphinx+tour&partner_id=PSZA5UI",
              },
              {
                name: "Luxor: Valley of the Kings & Hatshepsut Temple",
                duration: "Full day",
                price: "From $35/person",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=luxor+valley+of+the+kings+tour&partner_id=PSZA5UI",
              },
              {
                name: "Abu Simbel Day Trip from Aswan",
                duration: "Full day",
                price: "From $30/person",
                badge: "Non-negotiable",
                url: "https://www.getyourguide.com/s/?q=abu+simbel+day+trip+aswan&partner_id=PSZA5UI",
              },
              {
                name: "Nile Cruise Luxor to Aswan (3\u20134 Nights)",
                duration: "3\u20134 days",
                price: "From $200/person",
                url: "https://www.getyourguide.com/s/?q=nile+cruise+luxor+aswan&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* -- MISTAKES TO AVOID -- */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83D\uDC2A",
                  title: "Visiting the Pyramids without a licensed guide",
                  desc: "The Giza plateau without a guide means 30\u201340 vendors following you from the gate. A licensed Egyptologist guide (EGP 500\u2013800 for a half day, ~$10\u201316) keeps vendors at distance, provides context, and transforms the visit. The cost is negligible against the improvement.",
                },
                {
                  icon: "\u2600\uFE0F",
                  title: "Visiting in summer (May\u2013September)",
                  desc: "Cairo in July hits 45\u00B0C. The Giza plateau has zero shade. The Valley of the Kings adds geothermal heat. Heat exhaustion is a real risk. October through April is when Egypt is meant to be visited \u2014 20\u201328\u00B0C, blue skies, and manageable crowds.",
                },
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Skipping Abu Simbel because it\u2019s \u2018too far\u2019",
                  desc: "The most common regret of Egypt travelers. The 3\u20134 hour convoy costs $30\u201350 and the experience \u2014 four 20-metre cliff-carved colossi \u2014 is arguably more staggering than the pyramids. It exists nowhere else on earth. It is the single non-negotiable detour.",
                },
                {
                  icon: "\uD83D\uDCDC",
                  title: "Buying \u2018papyrus\u2019 from tourist shops",
                  desc: "99% of papyrus sold in bazaars and outside temples is made from banana leaves or dried reeds. It looks and feels like papyrus but is worthless in 10 years. Authentic papyrus is only reliably sold at the Dr. Ragab Papyrus Institute near Cairo. The price difference is minimal; the quality difference is permanent.",
                },
                {
                  icon: "\uD83D\uDEA2",
                  title: "Skipping Aswan to fly straight back from Luxor",
                  desc: "Many itineraries fly Cairo\u2013Luxor and back, missing Aswan entirely. This is the wrong choice. Aswan is the most peaceful and beautiful part of the Nile Valley \u2014 the Nubian culture, Philae Temple, and Abu Simbel are all here. Adding two nights costs almost nothing but transforms the trip.",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Not downloading Uber/Careem before arrival",
                  desc: "Airport taxi touts in Cairo charge EGP 500\u2013800 for rides that cost EGP 150\u2013250 on Uber or Careem. The same applies everywhere in Cairo. Download both apps, buy a local SIM at the airport (EGP 100\u2013200 for 10\u201320GB data on Vodafone or Orange), and never negotiate with a street taxi again.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* -- PRO TIPS -- */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Egypt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF05",
                  title: "Arrive at Giza at 8am \u2014 opening time",
                  desc: "The Great Pyramid complex opens at 8am. The light is warm gold, the plateau is not yet packed, and vendors are still setting up. By 11am, 30 tour buses have arrived. The first hour is a completely different experience from the rest of the day.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\u2728",
                  title: "Abu Simbel sun alignment: Feb 22 & Oct 22",
                  desc: "Ramesses II engineered the temple so that twice a year the rising sun penetrates the entire 60-metre sanctuary and illuminates three of four statues \u2014 the god of darkness stays in shadow. Plan your trip around these dates if at all possible.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDF19",
                  title: "Luxor Temple at night is non-negotiable",
                  desc: "Luxor Temple is open until 10pm and illuminated after dark. The golden sandstone columns and ancient sphinxes take on a theatrical, deeply atmospheric quality at night. Far less crowded than daytime. Combine with dinner on the corniche.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\uD83D\uDEF6",
                  title: "Felucca at sunset in Aswan",
                  desc: "A private felucca for an hour at sunset costs EGP 50\u2013100 (~$1\u20132). The Nile between Aswan\u2019s islands is lined with palms, Nubian villages, and ancient granite boulders. The light at 5pm turns everything amber. No motor noise, just the river and the wind.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83D\uDCB1",
                  title: "Haggling is the system, not an option",
                  desc: "Prices are not fixed unless on a government board. Opening bazaar price: 3\u20135x the final price. Camel ride ask: always 3x fair price. Rule: smile, offer 20% of the ask, shake hands, meet in the middle. Never get angry \u2014 it is commerce, not confrontation.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "\uD83D\uDCA7",
                  title: "Carry water everywhere \u2014 seriously",
                  desc: "Even in the cooler months, the sun at Giza, Karnak, and the Valley of the Kings is relentless. Carry at least 2 litres per person for any outdoor site visit. Bottled water costs EGP 5\u201310 (~$0.10\u20130.20) from shops \u2014 buy it before reaching the sites where it costs 3x more.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Egypt" />

          {/* Combine With */}
          <CombineWith currentSlug="egypt-7-days" />

          {/* -- FAQ -- */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Egypt safe for tourists in 2026?",
                  a: "The main tourist circuit \u2014 Cairo, Luxor, Aswan, and Abu Simbel \u2014 is considered safe for international tourists. Egypt has a significant tourism police presence at all major sites. Petty scams are common but violent crime against tourists is rare. The biggest risk is vendor harassment at the pyramids, which a licensed guide eliminates.",
                },
                {
                  q: "Do Indian passport holders need a visa for Egypt?",
                  a: "Yes. Indian citizens require a tourist visa. The easiest option is an e-Visa from evisa.eg.gov.eg (cost: $25, apply 5\u20137 days before travel). A visa on arrival is also available at Cairo airport for the same cost. Duration: 30 days single entry. Multiple-entry visas for $60 are available for Sinai trips.",
                },
                {
                  q: "What is the best time to visit Egypt?",
                  a: "October through April is optimal \u2014 temperatures of 20\u201328\u00B0C in Cairo, slightly cooler in Luxor and Aswan. February is arguably the best month: low crowds, beautiful light, and the Abu Simbel sun alignment on February 22. Avoid May through September when temperatures exceed 40\u201345\u00B0C.",
                },
                {
                  q: "Nile cruise vs. individual sites \u2014 which is better?",
                  a: "A 3\u20134 night Nile cruise from Luxor to Aswan covers all major temple sites with an onboard Egyptologist, comfortable cabins, and the river as the backdrop. Budget cruises from $200/person all-inclusive. Independent travel is cheaper and more flexible. For a first visit, the cruise is strongly recommended for the context it provides.",
                },
                {
                  q: "Is it worth going inside the Great Pyramid?",
                  a: "The interior consists of cramped ascending passages leading to the King\u2019s Chamber \u2014 a plain granite room with an empty sarcophagus. No paintings, no treasures. It is hot, claustrophobic, and physically demanding. It is also one of the most conceptually staggering spaces on earth. If you are not severely claustrophobic, go in once.",
                },
                {
                  q: "How do I handle the haggling and scams?",
                  a: "Establish prices before any transaction \u2014 before getting on a camel, entering a taxi, or accepting a \u2018free\u2019 gift. Common scams: the \u2018papyrus museum\u2019 (free entry, high-pressure fake papyrus sales); the \u2018police\u2019 photographer who demands payment; the helpful stranger who expects payment. A firm \u2018la shukran\u2019 (no thank you) ends 95% of unwanted approaches.",
                },
                {
                  q: "Can solo female travelers visit Egypt safely?",
                  a: "Solo female travel in Egypt requires higher situational awareness than Western Europe or Southeast Asia. Dress conservatively (covering shoulders and knees), use licensed guides and Uber/Careem rather than street taxis, stay in reputable accommodation, and join day tours rather than solo site visits. Many women travel Egypt solo annually without incident \u2014 preparation and awareness are essential.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* -- MORE RESOURCES -- */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Egypt trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-egypt", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/egypt-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-egypt", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/egypt-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="egypt-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Morocco &mdash; 7 Day Guide", href: "/blog/morocco-7-days" },
                { label: "Kenya Safari &mdash; 7 Day Guide", href: "/blog/kenya-safari-7-days" },
                { label: "Istanbul &mdash; 5 Day Guide", href: "/blog/istanbul-5-days" },
                { label: "Dubai &mdash; 4 Day Guide", href: "/blog/dubai-4-days" },
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
                  <span className="text-xs text-muted">Read &rarr;</span>
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
