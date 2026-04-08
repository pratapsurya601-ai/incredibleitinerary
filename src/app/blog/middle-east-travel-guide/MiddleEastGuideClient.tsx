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

const ME_TOC = [
  { id: "why-middle-east", emoji: "\u2728", label: "Why Middle East" },
  { id: "countries",       emoji: "\uD83D\uDD4C", label: "Country Guide" },
  { id: "routes",          emoji: "\uD83D\uDEE4\uFE0F", label: "Best Routes" },
  { id: "budget",          emoji: "\uD83D\uDCB0", label: "Budget Guide" },
  { id: "visa",            emoji: "\uD83D\uDEC2", label: "Visa Guide" },
  { id: "mistakes",        emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "faq",             emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Middle East Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Middle East Travel Guide 2026&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
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

// ── Country Card ──────────────────────────────────────────────────────────────
function CountryCard({ flag, name, guides, budget, desc }: { flag: string; name: string; guides: { label: string; href: string }[]; budget: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5 hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{flag}</span>
        <div>
          <h3 className="font-serif text-lg font-light text-ink">{name}</h3>
          <p className="text-[0.65rem] text-muted uppercase tracking-wide">{budget}</p>
        </div>
      </div>
      <p className="text-xs text-muted font-light leading-relaxed mb-3">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {guides.map((g) => (
          <Link key={g.href} href={g.href}
            className="text-[0.65rem] font-medium text-gold-dark hover:text-teal transition-colors bg-parchment px-2.5 py-1 rounded-full border border-parchment-2 hover:border-gold">
            {g.label} &rarr;
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Route Card ────────────────────────────────────────────────────────────────
function RouteCard({ title, days, stops, color }: { title: string; days: string; stops: string[]; color: string }) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-serif text-lg font-light text-ink">{title}</h3>
        <span className="text-xs text-muted bg-white px-2 py-1 rounded-full">{days}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {stops.map((stop, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-ink bg-white px-2.5 py-1 rounded-full border border-parchment-2">{stop}</span>
            {i < stops.length - 1 && <span className="text-muted text-xs">&rarr;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Tip Card ─────────────────────────────────────────────────────────────────
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function MiddleEastGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ME_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Middle East" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dubai skyline burj khalifa sunset desert modern city"
            alt="Dubai skyline with Burj Khalifa at sunset"
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
              <span className="text-white/70">Middle East Travel Guide</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Middle East
                </span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">20 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Middle East Travel Guide:
                <em className="italic text-amber-300"> Dubai, Turkey, Jordan, Egypt &amp; Beyond</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                6 countries, 20+ city guides, real budgets, visa info for Indians &mdash; and the routes that actually work.
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
              <span>{"\uD83D\uDD4C"} 6 Countries</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDDD3"} 20+ Guides</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCB0"} From $30/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Middle East confounds expectations. Dubai&apos;s skyline looks like it was designed by someone who thought science fiction wasn&apos;t ambitious enough. Turkey serves breakfasts that take up entire tables. Jordan hides a rose-red city inside a canyon. Egypt has pyramids that have been standing for 4,500 years and still manage to feel unreal in person. This guide covers all of it &mdash; every country, every visa, every dollar.
            </p>
          </blockquote>

          {/* ── WHY MIDDLE EAST ── */}
          <section id="why-middle-east" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2728"} Why the Middle East?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Most Indian travellers default to Southeast Asia or Europe. Here&apos;s why the Middle East deserves to be higher on your list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Close and Well-Connected", emoji: "\u2708\uFE0F", desc: "Dubai is 3 hours from Mumbai. Istanbul is 6 hours from Delhi. Direct flights from every major Indian city, often cheaper than domestic routes. Weekend trips to Dubai are genuinely viable." },
                { title: "Ancient Meets Ultramodern", emoji: "\uD83C\uDFDB\uFE0F", desc: "Stand inside the Great Pyramids of Giza in the morning, fly to Dubai and dine on the 148th floor of Burj Khalifa in the evening. No other region on earth offers this range within a single trip." },
                { title: "Food That Goes Deep", emoji: "\uD83E\uDD59", desc: "Turkish breakfast spreads that cover entire tables. Egyptian koshari on a Cairo street corner. Jordanian mansaf. Emirati machboos. The Middle East invented hospitality and the cuisine proves it." },
                { title: "Budget Range is Huge", emoji: "\uD83D\uDCB0", desc: "Turkey and Egypt are among the most affordable international destinations for Indians at $25\u201360/day. Dubai and Qatar are expensive but can be done mid-range. Something for every budget." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="font-medium text-sm text-ink">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── COUNTRY GUIDE ── */}
          <section id="countries" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDD4C"} Country-by-Country Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each country card links to full day-by-day itineraries. Click through for complete guides with real timings and costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CountryCard
                flag={"\uD83C\uDDE6\uD83C\uDDEA"}
                name="UAE"
                guides={[
                  { label: "Dubai 4 Days", href: "/blog/dubai-4-days" },
                  { label: "Abu Dhabi 3 Days", href: "/blog/abu-dhabi-3-days" },
                ]}
                budget="$100\u2013$300/day"
                desc="Dubai&apos;s Burj Khalifa, desert safaris, Dubai Mall, Gold Souk. Abu Dhabi&apos;s Sheikh Zayed Mosque, Louvre, Yas Island. Luxury is the default mode but mid-range is possible."
              />
              <CountryCard
                flag={"\uD83C\uDDF9\uD83C\uDDF7"}
                name="Turkey"
                guides={[
                  { label: "Istanbul 5 Days", href: "/blog/istanbul-5-days" },
                  { label: "Cappadocia 3 Days", href: "/blog/cappadocia-3-days" },
                  { label: "Antalya 3 Days", href: "/blog/antalya-3-days" },
                  { label: "Turkey 7 Days", href: "/blog/turkey-7-days" },
                ]}
                budget="$30\u2013$80/day"
                desc="Hagia Sophia, Cappadocia hot air balloons, Antalya coast, Grand Bazaar. Where Europe meets Asia with some of the world&apos;s best food and hospitality."
              />
              <CountryCard
                flag={"\uD83C\uDDEF\uD83C\uDDF4"}
                name="Jordan"
                guides={[
                  { label: "Jordan 5 Days", href: "/blog/jordan-5-days" },
                  { label: "Amman 4 Days", href: "/blog/amman-4-days" },
                ]}
                budget="$40\u2013$100/day"
                desc="Petra, Wadi Rum desert, Dead Sea, Roman ruins at Jerash. A small country that punches far above its weight with world-class archaeological sites."
              />
              <CountryCard
                flag={"\uD83C\uDDEA\uD83C\uDDEC"}
                name="Egypt"
                guides={[
                  { label: "Egypt 7 Days", href: "/blog/egypt-7-days" },
                ]}
                budget="$25\u2013$60/day"
                desc="Great Pyramids of Giza, Valley of the Kings, Nile cruises, Abu Simbel, Cairo&apos;s Khan el-Khalili bazaar. 5,000 years of history at budget-friendly prices."
              />
              <CountryCard
                flag={"\uD83C\uDDF4\uD83C\uDDF2"}
                name="Oman"
                guides={[
                  { label: "Muscat 3 Days", href: "/blog/muscat-3-days" },
                ]}
                budget="$50\u2013$120/day"
                desc="Sultan Qaboos Grand Mosque, Mutrah Souq, Wadi Shab, Jebel Akhdar. The Gulf&apos;s most underrated destination with dramatic mountain and coastal scenery."
              />
              <CountryCard
                flag={"\uD83C\uDDF6\uD83C\uDDE6"}
                name="Qatar"
                guides={[
                  { label: "Doha 3 Days", href: "/blog/doha-3-days" },
                ]}
                budget="$80\u2013$200/day"
                desc="Museum of Islamic Art, Souq Waqif, The Pearl island, Katara Cultural Village. Compact, wealthy and surprisingly cultural."
              />
              <CountryCard
                flag={"\uD83C\uDDF8\uD83C\uDDE6"}
                name="Saudi Arabia"
                guides={[
                  { label: "AlUla 3 Days", href: "/blog/alula-3-days" },
                ]}
                budget="$60\u2013$150/day"
                desc="AlUla&apos;s Hegra (Saudi Arabia&apos;s Petra), Edge of the World, Jeddah&apos;s Al-Balad old town. The newest tourism destination in the Middle East and rapidly opening up."
              />
            </div>
          </section>

          {/* ── BEST ROUTES ── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEE4\uFE0F"} Best Routes</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three proven routes depending on your time and interests. Mix and match countries or go deep in one.
            </p>
            <div className="space-y-4">
              <RouteCard
                title="7-Day Gulf Classic"
                days="7 Days"
                stops={["Dubai (3)", "Abu Dhabi (2)", "Muscat (2)"]}
                color="bg-amber-50 border-amber-200"
              />
              <RouteCard
                title="10-Day Turkey Circuit"
                days="10 Days"
                stops={["Istanbul (3)", "Cappadocia (3)", "Antalya (4)"]}
                color="bg-blue-50 border-blue-200"
              />
              <RouteCard
                title="14-Day Grand Middle East"
                days="14 Days"
                stops={["Dubai (3)", "Amman (2)", "Petra (2)", "Wadi Rum (1)", "Cairo (3)", "Luxor (2)", "Abu Simbel (1)"]}
                color="bg-purple-50 border-purple-200"
              />
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              Numbers in brackets = suggested nights. Internal flights connect Dubai to Amman and Cairo. Budget airlines like FlyDubai and Air Arabia keep costs low.
            </p>
          </section>

          {/* ── BUDGET GUIDE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Country</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDDE6\uD83C\uDDEA UAE", "$80\u2013120/day", "$150\u2013250/day", "$400+/day"],
                    ["\uD83C\uDDF9\uD83C\uDDF7 Turkey", "$30\u201350/day", "$60\u2013100/day", "$200+/day"],
                    ["\uD83C\uDDEF\uD83C\uDDF4 Jordan", "$40\u201360/day", "$70\u2013120/day", "$200+/day"],
                    ["\uD83C\uDDEA\uD83C\uDDEC Egypt", "$25\u201340/day", "$50\u201380/day", "$150+/day"],
                    ["\uD83C\uDDF4\uD83C\uDDF2 Oman", "$50\u201380/day", "$90\u2013150/day", "$250+/day"],
                    ["\uD83C\uDDF6\uD83C\uDDE6 Qatar", "$80\u2013120/day", "$150\u2013250/day", "$400+/day"],
                    ["\uD83C\uDDF8\uD83C\uDDE6 Saudi Arabia", "$60\u201390/day", "$100\u2013180/day", "$300+/day"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in USD, 2026. Includes accommodation, food, local transport and activities. Excludes international flights.
            </p>

            {/* Food recommendations */}
            <div className="mt-8">
              <h3 className="font-serif text-lg font-light text-ink mb-4">{"\uD83E\uDD59"} 5 Foods You Must Try</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Shawarma", where: "Everywhere \u2014 best in Istanbul, Amman, Dubai", price: "$1\u20135", note: "The ultimate Middle Eastern street food. Shaved meat, pickles, garlic sauce in warm bread. Every country has its own version and they&apos;re all excellent." },
                  { name: "Hummus", where: "Jordan, Lebanon-style restaurants across the region", price: "$2\u20135", note: "Creamy, lemony, with a pool of olive oil and warm bread. Amman and Beirut-style restaurants serve the definitive versions. Eat it for breakfast like locals do." },
                  { name: "Baklava", where: "Turkey (Gaziantep style), Syria-inspired shops across Dubai", price: "$3\u201310/box", note: "Layers of phyllo dough, pistachios and honey syrup. Turkish baklava is the gold standard. Buy a box from Hafiz Mustafa in Istanbul." },
                  { name: "Kebab", where: "Turkey, throughout the region", price: "$3\u201315", note: "Adana kebab, iskender kebab, shish kebab \u2014 Turkey alone has dozens of varieties. Each region is fiercely proud of its version. All are correct." },
                  { name: "Turkish Breakfast", where: "Istanbul, across Turkey", price: "$5\u201320", note: "An entire table covered in small plates: cheese, olives, honey, clotted cream, eggs, tomatoes, cucumber, bread, tea. The greatest breakfast tradition on earth." },
                ].map((food) => (
                  <div key={food.name} className="bg-white rounded-xl border border-parchment-2 p-4">
                    <p className="font-medium text-sm text-ink mb-1">{food.name}</p>
                    <p className="text-[0.65rem] text-muted mb-2">{food.where} &middot; {food.price}</p>
                    <p className="text-xs text-muted font-light leading-relaxed">{food.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── VISA GUIDE ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEC2"} Visa Guide for Indians</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Visa requirements vary significantly across the Middle East. Here&apos;s the breakdown for Indian passport holders.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Country</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Visa Type</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Processing</th>
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDDE6\uD83C\uDDEA UAE", "Pre-arranged / VOA with valid US visa", "3\u20135 days", "Visa on arrival for 14 days if you hold valid US visa, UK or EU residence. Otherwise apply through airline or sponsor."],
                    ["\uD83C\uDDF9\uD83C\uDDF7 Turkey", "e-Visa (online)", "Instant \u2013 24 hrs", "Apply at evisa.gov.tr. $50 single-entry, valid 30 days. Straightforward process, approved almost instantly."],
                    ["\uD83C\uDDEF\uD83C\uDDF4 Jordan", "Visa on arrival", "At airport", "Free with Jordan Pass ($70\u201380, includes Petra entry). Otherwise $56 single-entry visa on arrival. Valid 30 days."],
                    ["\uD83C\uDDEA\uD83C\uDDEC Egypt", "e-Visa (online)", "5\u20137 days", "Apply at visa2egypt.gov.eg. $25 single-entry. Also available on arrival at Cairo airport but e-visa is faster."],
                    ["\uD83C\uDDF4\uD83C\uDDF2 Oman", "e-Visa (online)", "1\u20133 days", "Apply at evisa.rop.gov.om. 10-day or 30-day options. $20\u201350 depending on duration."],
                    ["\uD83C\uDDF6\uD83C\uDDE6 Qatar", "Visa on arrival / e-Visa", "At airport", "Free visa on arrival for 30 days for most nationalities including Indian passport holders. No pre-arrangement needed."],
                    ["\uD83C\uDDF8\uD83C\uDDE6 Saudi Arabia", "e-Visa (online)", "Instant \u2013 24 hrs", "Apply at visa.visitsaudi.com. Tourist e-visa opened in 2019. $120 for 1-year multiple-entry."],
                  ].map(([country, type, time, notes]) => (
                    <tr key={country} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{country}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{type}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{time}</td>
                      <td className="p-3.5 text-xs text-muted font-light">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              {"\u26A0\uFE0F"} Visa requirements change frequently. Always verify on the official government website before booking. US/UK/EU passport holders generally get visa-free or visa-on-arrival access to all countries listed.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Middle East"
            hotels={[
              { name: "Rove Downtown Dubai", type: "Budget \u00b7 Dubai", price: "From $60/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/ae/rove-downtown.html?aid=2820480" },
              { name: "Address Downtown Dubai", type: "Luxury \u00b7 Dubai", price: "From $250/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/ae/the-address-downtown-dubai.html?aid=2820480" },
              { name: "Movenpick Istanbul", type: "Mid-Range \u00b7 Istanbul", price: "From $80/night", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/tr/movenpick-istanbul.html?aid=2820480" },
              { name: "Kempinski Amman", type: "Luxury \u00b7 Jordan", price: "From $150/night", rating: "5", badge: "Jordan pick", url: "https://www.booking.com/hotel/jo/kempinski-amman.html?aid=2820480" },
            ]}
            activities={[
              { name: "Dubai Desert Safari with BBQ Dinner", duration: "6 hours", price: "From $40", badge: "Must do", url: "https://www.getyourguide.com/s/?q=dubai+desert+safari&partner_id=PSZA5UI" },
              { name: "Cappadocia Hot Air Balloon Ride", duration: "3 hours", price: "From $180", badge: "Bucket list", url: "https://www.getyourguide.com/s/?q=cappadocia+balloon&partner_id=PSZA5UI" },
              { name: "Petra Day Tour from Amman", duration: "Full day", price: "From $85", badge: "Popular", url: "https://www.getyourguide.com/s/?q=petra+jordan&partner_id=PSZA5UI" },
              { name: "Giza Pyramids & Sphinx Guided Tour", duration: "4 hours", price: "From $30", url: "https://www.getyourguide.com/s/?q=giza+pyramids&partner_id=PSZA5UI" },
            ]}
            pdfProductId="middle-east-guide-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Middle East \u2014 Iconic Destinations"
            subtitle="Click each thumbnail to explore the Middle East&apos;s most unforgettable spots."
            spots={[
              { name: "Burj Khalifa, Dubai", query: "burj khalifa dubai sunset aerial view desert skyline", desc: "The world&apos;s tallest building at 828m. The At The Top observation deck on the 148th floor offers views across the desert and Arabian Gulf." },
              { name: "Petra, Jordan", query: "petra treasury jordan rose red carved sandstone ancient", desc: "The rose-red city carved into sandstone cliffs 2,000 years ago by the Nabataeans. Walk through the narrow Siq canyon to the Treasury at sunrise." },
              { name: "Cappadocia, Turkey", query: "cappadocia hot air balloons fairy chimneys sunrise turkey", desc: "Hundreds of hot air balloons rising over fairy chimney rock formations at dawn. One of the most photographed scenes on earth, and it lives up to it." },
              { name: "Great Pyramids, Egypt", query: "great pyramids giza egypt camel desert sunset ancient", desc: "The last surviving wonder of the ancient world. 4,500 years old and still the most jaw-dropping thing most travellers will ever see." },
              { name: "Sheikh Zayed Mosque", query: "sheikh zayed grand mosque abu dhabi white marble domes", desc: "82 marble domes, gold-plated chandeliers, the world&apos;s largest hand-knotted carpet. Abu Dhabi&apos;s most magnificent building and it&apos;s free to visit." },
              { name: "Hagia Sophia, Istanbul", query: "hagia sophia istanbul interior dome golden mosaics", desc: "1,500 years old, once a cathedral, then a mosque, then a museum, now a mosque again. The dome alone is worth the flight to Istanbul." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="petra treasury jordan narrow siq canyon rose red stone"
              alt="The Treasury at Petra seen through the narrow Siq canyon in Jordan"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Petra, Jordan &mdash; The Treasury (Al-Khazneh) appears at the end of the narrow Siq canyon. Arrive at 6am when the site opens for the most dramatic reveal.
              </p>
            </div>
          </div>

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting the Gulf in summer", desc: "June to September temperatures exceed 45\u00B0C in Dubai, Abu Dhabi, Doha and Muscat. Outdoor activities become genuinely dangerous. Visit October to April when temperatures are a comfortable 20\u201330\u00B0C.", icon: "\uD83C\uDF21\uFE0F" },
                { title: "Not buying a Jordan Pass", desc: "The Jordan Pass ($70\u201380) includes your visa fee AND entry to Petra (normally $70 alone) plus 40+ other sites. If you\u0027re visiting Petra, this pass literally pays for itself. Buy it online before arrival.", icon: "\uD83C\uDFAB" },
                { title: "Underestimating distances in Turkey", desc: "Istanbul to Cappadocia is 730km \u2014 a 1.5hr flight or 10hr bus ride. Turkey is a large country. Don\u0027t try to drive between regions. Internal flights with Turkish Airlines or Pegasus are cheap ($30\u201360) and save entire days.", icon: "\u2708\uFE0F" },
                { title: "Skipping travel insurance", desc: "Medical care in the Gulf is excellent but extremely expensive without insurance. A simple ER visit in Dubai can cost $500+. Egypt and Turkey are cheaper but evacuation costs can be catastrophic. Always buy insurance.", icon: "\uD83C\uDFE5" },
                { title: "Only seeing the tourist highlights", desc: "Dubai is more than the Burj Khalifa and malls. Istanbul is more than Hagia Sophia. Explore Al Fahidi Historic District in Dubai, walk through Balat neighbourhood in Istanbul, visit Siwa Oasis in Egypt. The real Middle East is in the side streets.", icon: "\uD83D\uDEF6" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want Your Middle East Trip Planned?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size and budget &mdash; we&apos;ll send a personalised Middle East itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is the Middle East safe for tourists in 2026?", a: "The major tourist destinations \u2014 UAE, Turkey, Jordan, Egypt, Oman, Qatar and Saudi Arabia \u2014 are all safe for tourists with normal precautions. These countries have invested heavily in tourism infrastructure and security. Solo female travellers report feeling safe in all these destinations, particularly the Gulf states. Always check your government\u0027s travel advisory before booking." },
                { q: "Do Indian passport holders need a visa for Dubai?", a: "Indian passport holders can get a visa on arrival in the UAE for 14 days if they hold a valid US visa, UK residence permit, or EU residence permit. Otherwise, a pre-arranged tourist visa is required through an airline, hotel or travel agent, which takes 3\u20135 working days. Turkey offers an easy e-visa. Jordan offers visa on arrival (free with Jordan Pass)." },
                { q: "What is the best time to visit the Middle East?", a: "October to April for the Gulf countries (UAE, Oman, Qatar, Saudi Arabia) when temperatures are a comfortable 20\u201330\u00B0C. Turkey is best April to June and September to November. Egypt is pleasant October to April. Avoid the Gulf in summer \u2014 45\u00B0C+ makes outdoor activities genuinely dangerous." },
                { q: "How much does a Middle East trip cost per day?", a: "Turkey and Egypt are budget-friendly at $25\u201380/day. Jordan costs $40\u2013100/day. Dubai and Qatar are expensive at $80\u2013300/day. Oman is mid-range at $50\u2013120/day. Budget travellers can find affordable options in every country except peak-season Dubai." },
                { q: "What should women wear in the Middle East?", a: "Dress codes vary by country and area. In Dubai, Istanbul and Amman, modest casual clothing (covering shoulders and knees) is fine in public. In religious sites everywhere, cover arms and legs. In Saudi Arabia, an abaya is no longer required for tourists but modest clothing is expected. Turkey and the UAE are quite liberal in tourist areas. Pack a lightweight scarf for mosque visits." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Destinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai \u2014 4-Day Luxury & Adventure Guide", href: "/blog/dubai-4-days", soon: false },
                { label: "Istanbul \u2014 5-Day History & Food Guide", href: "/blog/istanbul-5-days", soon: false },
                { label: "Jordan \u2014 5-Day Petra & Desert Guide", href: "/blog/jordan-5-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="middle-east-travel-guide" />
          <RelatedGuides currentSlug="middle-east-travel-guide" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
