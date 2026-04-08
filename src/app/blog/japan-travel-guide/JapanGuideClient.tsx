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

const JAPAN_TOC = [
  { id: "why-japan",  emoji: "\u2728", label: "Why Japan" },
  { id: "cities",     emoji: "\uD83D\uDDFC", label: "City-by-City Guide" },
  { id: "routes",     emoji: "\uD83D\uDEE4\uFE0F", label: "Best Routes" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Guide" },
  { id: "visa-jr",    emoji: "\uD83D\uDEC2", label: "Visa & JR Pass" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Japan Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Japan Travel Guide 2026&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

// ── City Card ─────────────────────────────────────────────────────────────────
function CityCard({ emoji, name, href, days, budget, desc }: { emoji: string; name: string; href: string; days: string; budget: string; desc: string }) {
  return (
    <Link href={href} className="block bg-white rounded-xl border border-parchment-2 p-5 hover:border-gold hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h3 className="font-serif text-lg font-light text-ink group-hover:text-teal transition-colors">{name}</h3>
          <p className="text-[0.65rem] text-muted uppercase tracking-wide">{days} &middot; {budget}</p>
        </div>
      </div>
      <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
      <p className="text-[0.65rem] text-gold-dark mt-3 font-medium group-hover:text-teal transition-colors">Read full guide &rarr;</p>
    </Link>
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
export default function JapanGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JAPAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Japan" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tokyo shibuya crossing cherry blossom japan neon city"
            alt="Tokyo Shibuya Crossing with cherry blossoms and neon lights"
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
              <span className="text-white/70">Japan Travel Guide</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Japan
                </span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">22 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Japan Travel Guide:
                <em className="italic text-amber-300"> Tokyo, Kyoto, Osaka &amp; the Complete Circuit</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                8 city guides, 3 suggested routes, real costs in yen, JR Pass breakdown &mdash; and the mistakes that ruin most Japan trips.
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
              <span>{"\uD83C\uDDEF\uD83C\uDDF5"} 8 Guides</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDDD3"} 2&ndash;14 Days</span>
              <span>&middot;</span>
              <span>{"\uD83D\uDCB0"} From &yen;8,000/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Japan doesn&apos;t ease you in. You land at Narita, tap a Suica card, step onto a train that arrives to the second, and within an hour you&apos;re standing at Shibuya Crossing wondering how a city this enormous runs this smoothly. From Kyoto&apos;s silent bamboo groves to Osaka&apos;s neon-drenched food alleys, this guide covers every city, every route, and every yen.
            </p>
          </blockquote>

          {/* ── WHY JAPAN ── */}
          <section id="why-japan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2728"} Why Japan?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There are good travel destinations and then there&apos;s Japan. Here&apos;s what makes it different from everywhere else.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Food That Ruins You", emoji: "\uD83C\uDF5C", desc: "A \u00A5800 ($5) bowl of ramen in Tokyo is better than most $40 meals elsewhere. Convenience store onigiri at 2am is a genuine culinary experience. Tsukiji sashimi breakfast, Osaka street okonomiyaki, Kyoto kaiseki dinners &mdash; Japan has the highest density of Michelin stars in the world for a reason." },
                { title: "Everything Works", emoji: "\uD83D\uDE85", desc: "Trains arrive to the second. Vending machines dispense hot coffee in winter. Coin lockers are everywhere. Google Maps gives you exact platform numbers. Even the toilets are engineered. Japan doesn&apos;t have friction &mdash; it has systems." },
                { title: "Ancient + Futuristic", emoji: "\u26E9\uFE0F", desc: "Walk from a 1,200-year-old Shinto shrine into a teamLab digital art installation in the same afternoon. Kyoto&apos;s zen gardens and Tokyo&apos;s Akihabara exist in the same country and somehow both make perfect sense." },
                { title: "Surprisingly Affordable", emoji: "\uD83D\uDCB4", desc: "Japan&apos;s reputation as expensive is outdated. Budget travellers can manage on \u00A58,000&ndash;12,000/day ($53&ndash;80) including accommodation. The yen&apos;s weakness against most currencies in 2026 makes it even more accessible." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="font-medium text-sm text-ink">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── CITY-BY-CITY GUIDE ── */}
          <section id="cities" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFC"} City-by-City Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each card links to a full day-by-day itinerary with real timings and costs. Click through for the complete guide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CityCard
                emoji={"\uD83D\uDDFC"}
                name="Tokyo"
                href="/blog/tokyo-5-days"
                days="5 Days"
                budget={"\u00A510,000\u2013\u00A525,000/day"}
                desc="Shibuya Crossing, Senso-ji, teamLab, Tsukiji Market, Shinjuku Golden Gai. The world&apos;s largest metro area with the world&apos;s best food scene."
              />
              <CityCard
                emoji={"\u26E9\uFE0F"}
                name="Kyoto"
                href="/blog/kyoto-4-days"
                days="4 Days"
                budget={"\u00A58,000\u2013\u00A520,000/day"}
                desc="Fushimi Inari, Arashiyama bamboo grove, Kinkaku-ji, geisha district. Japan&apos;s cultural soul with 2,000+ temples and shrines."
              />
              <CityCard
                emoji={"\uD83C\uDF5C"}
                name="Osaka"
                href="/blog/osaka-3-days"
                days="3 Days"
                budget={"\u00A58,000\u2013\u00A518,000/day"}
                desc="Dotonbori, Osaka Castle, Shinsekai, Kuromon Market. Japan&apos;s kitchen &mdash; street food capital where you eat until you physically cannot continue."
              />
              <CityCard
                emoji={"\uD83D\uDD4A\uFE0F"}
                name="Hiroshima"
                href="/blog/hiroshima-2-days"
                days="2 Days"
                budget={"\u00A57,000\u2013\u00A515,000/day"}
                desc="Peace Memorial Park, Atomic Bomb Dome, Miyajima Island&apos;s floating torii gate. A deeply moving and essential Japan experience."
              />
              <CityCard
                emoji={"\uD83C\uDFD4\uFE0F"}
                name="Hokkaido"
                href="/blog/hokkaido-5-days"
                days="5 Days"
                budget={"\u00A510,000\u2013\u00A522,000/day"}
                desc="Sapporo, Furano lavender fields, Niseko skiing, Otaru canal town. Japan&apos;s northern wilderness with the country&apos;s best seafood."
              />
              <CityCard
                emoji={"\uD83E\uDD8C"}
                name="Nara"
                href="/blog/nara-2-days"
                days="2 Days"
                budget="Day trip from Kyoto/Osaka"
                desc="1,200+ wild deer roaming freely, Todai-ji&apos;s giant bronze Buddha, Kasuga Taisha shrine with 3,000 lanterns. Just 45 min from Kyoto."
              />
              <CityCard
                emoji={"\u2668\uFE0F"}
                name="Hakone"
                href="/blog/hakone-2-days"
                days="2 Days"
                budget="Day trip from Tokyo"
                desc="Hot springs with Mt. Fuji views, Open Air Museum, ropeway over volcanic valley, Lake Ashi cruise. Tokyo&apos;s favourite escape."
              />
              <CityCard
                emoji={"\uD83C\uDF03"}
                name="Yokohama"
                href="/blog/yokohama-2-days"
                days="2 Days"
                budget="Day trip from Tokyo"
                desc="Cup Noodles Museum, Chinatown, waterfront Minato Mirai skyline. Just 30 min from Tokyo and completely underrated."
              />
            </div>
          </section>

          {/* ── BEST ROUTES ── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEE4\uFE0F"} Best Routes</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three proven routes depending on how much time you have. All assume a JR Pass for inter-city bullet trains.
            </p>
            <div className="space-y-4">
              <RouteCard
                title="7-Day Classic"
                days="7 Days"
                stops={["Tokyo (3)", "Hakone (1)", "Kyoto (2)", "Osaka (1)"]}
                color="bg-amber-50 border-amber-200"
              />
              <RouteCard
                title="10-Day Complete"
                days="10 Days"
                stops={["Tokyo (3)", "Hakone (1)", "Kyoto (2)", "Nara (1)", "Osaka (2)", "Hiroshima (1)"]}
                color="bg-blue-50 border-blue-200"
              />
              <RouteCard
                title="14-Day Ultimate"
                days="14 Days"
                stops={["Tokyo (3)", "Hakone (1)", "Kyoto (2)", "Nara (1)", "Osaka (2)", "Hiroshima (1)", "Hokkaido (4)"]}
                color="bg-purple-50 border-purple-200"
              />
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              Numbers in brackets = suggested nights. All routes work east to west (or add a flight to Sapporo for the 14-day version).
            </p>
          </section>

          {/* ── BUDGET GUIDE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Guide</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation/night", "\u00A53,000\u2013\u00A55,000 ($20\u201333)", "\u00A58,000\u2013\u00A515,000 ($53\u2013100)", "\u00A540,000+ ($267+)"],
                    ["\uD83C\uDF5C Food/day", "\u00A52,000\u2013\u00A54,000 ($13\u201327)", "\u00A55,000\u2013\u00A58,000 ($33\u201353)", "\u00A515,000+ ($100+)"],
                    ["\uD83D\uDE89 Transport/day", "\u00A51,000\u2013\u00A52,000 ($7\u201313)", "\u00A52,000\u2013\u00A53,000 ($13\u201320)", "\u00A55,000+ ($33+)"],
                    ["\uD83C\uDFAF Activities/day", "\u00A51,000\u2013\u00A53,000 ($7\u201320)", "\u00A53,000\u2013\u00A55,000 ($20\u201333)", "\u00A510,000+ ($67+)"],
                    ["\uD83C\uDF76 Extras/day", "\u00A51,000\u2013\u00A52,000 ($7\u201313)", "\u00A52,000\u2013\u00A54,000 ($13\u201327)", "\u00A510,000+ ($67+)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Daily Total</td>
                    {["\u00A58,000\u2013\u00A512,000 ($53\u201380)", "\u00A515,000\u2013\u00A525,000 ($100\u2013167)", "\u00A540,000+ ($267+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in &yen; (Japanese Yen), 2026. USD equivalent at ~&yen;150/$1. Excludes international flights and JR Pass.
            </p>

            {/* Food recommendations */}
            <div className="mt-8">
              <h3 className="font-serif text-lg font-light text-ink mb-4">{"\uD83C\uDF5C"} 5 Foods You Must Try</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Ramen", where: "Fuunji (Tokyo), Ichiran (everywhere)", price: "\u00A5800\u20131,200 ($5\u20138)", note: "Each city has its own style. Tonkotsu in Kyushu, miso in Hokkaido, shoyu in Tokyo." },
                  { name: "Sushi", where: "Tsukiji Market, standing bars in Ginza", price: "\u00A51,500\u201330,000+", note: "Standing sushi bars offer omakase-quality fish at a fraction of the price. Skip tourist traps near stations." },
                  { name: "Okonomiyaki", where: "Dotonbori (Osaka), Hiroshima", price: "\u00A5800\u20131,500 ($5\u201310)", note: "Osaka style = mixed batter. Hiroshima style = layered with noodles. Both are incredible. Pick a side." },
                  { name: "Tempura", where: "Tendon Tenya (budget), Tsunahachi (Shinjuku)", price: "\u00A5500\u20135,000", note: "A \u00A5500 tendon bowl at a chain is honestly good. A \u00A55,000 tempura omakase at a counter restaurant is transcendent." },
                  { name: "Matcha Everything", where: "Kyoto, especially Uji", price: "\u00A5300\u2013800", note: "Matcha soft-serve, matcha tiramisu, matcha latte from a 400-year-old tea house in Uji. Kyoto is the matcha capital." },
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

          {/* ── VISA & JR PASS ── */}
          <section id="visa-jr" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDEC2"} Visa &amp; JR Pass</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The two things every India-based traveller needs to sort before booking flights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg font-normal mb-4 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83D\uDEC2"}</span>Visa Guide for Indians
                </h3>
                <div className="space-y-2 mb-4">
                  {[
                    ["Type", "Single-entry tourist visa (up to 90 days)"],
                    ["Apply at", "Japanese Embassy / VFS Global centre"],
                    ["Processing", "5\u20137 working days"],
                    ["Documents", "Passport (6+ months validity), return ticket, hotel bookings, 3-month bank statement, employer letter"],
                    ["Fee", "Approx. \u20B9500\u2013600 (+ VFS service charge)"],
                    ["US/UK/EU", "Visa-free for up to 90 days"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted font-light italic border-t border-amber-300/30 pt-3">{"\u26A0\uFE0F"} Apply at least 3 weeks before departure. Japan does not offer visa on arrival for any nationality.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-serif text-lg font-normal mb-4 flex items-center gap-2 text-blue-800">
                  <span>{"\uD83D\uDE85"}</span>JR Pass Guide
                </h3>
                <div className="space-y-2 mb-4">
                  {[
                    ["7-Day Pass", "\u00A550,000 ($333) \u2014 covers all JR trains including Shinkansen"],
                    ["14-Day Pass", "\u00A580,000 ($533)"],
                    ["21-Day Pass", "\u00A5100,000 ($667)"],
                    ["Worth it?", "Yes, if travelling Tokyo\u2013Kyoto\u2013Osaka\u2013Hiroshima (round trip = \u00A555,000+ without pass)"],
                    ["Not worth it", "If staying only in Tokyo or only in one city"],
                    ["Buy where", "Online before arrival or at major JR stations in Japan"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted font-light italic border-t border-blue-300/30 pt-3">{"\u26A0\uFE0F"} The JR Pass does NOT cover private railways, subways or buses. Get a Suica/Pasmo IC card separately for local transport.</p>
              </div>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Japan"
            hotels={[
              { name: "Khaosan Tokyo Kabuki", type: "Budget Hostel \u00b7 Asakusa", price: "From \u00A53,500/night ($23)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/jp/khaosan-tokyo-kabuki.html?aid=2820480" },
              { name: "Hotel Gracery Shinjuku", type: "Mid-Range \u00b7 Shinjuku", price: "From \u00A512,000/night ($80)", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/jp/gracery-shinjuku.html?aid=2820480" },
              { name: "Machiya Kyoto Townhouse", type: "Traditional \u00b7 Kyoto", price: "From \u00A515,000/night ($100)", rating: "4", badge: "Cultural pick", url: "https://www.booking.com/hotel/jp/kyoto-machiya.html?aid=2820480" },
              { name: "Park Hyatt Tokyo", type: "Luxury \u00b7 Shinjuku", price: "From \u00A565,000/night ($433)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html?aid=2820480" },
            ]}
            activities={[
              { name: "teamLab Borderless Skip-the-Line", duration: "2\u20133 hours", price: "From \u00A53,800 ($25)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=tokyo+teamlab&partner_id=PSZA5UI" },
              { name: "Fushimi Inari & Nara Day Tour from Kyoto", duration: "Full day", price: "From \u00A58,000 ($53)", badge: "Popular", url: "https://www.getyourguide.com/s/?q=kyoto+nara&partner_id=PSZA5UI" },
              { name: "Osaka Street Food Walking Tour", duration: "3 hours", price: "From \u00A56,000 ($40)", badge: "Food", url: "https://www.getyourguide.com/s/?q=osaka+food+tour&partner_id=PSZA5UI" },
              { name: "Mt. Fuji & Hakone Day Tour from Tokyo", duration: "Full day", price: "From \u00A512,000 ($80)", url: "https://www.getyourguide.com/s/?q=tokyo+fuji+hakone&partner_id=PSZA5UI" },
            ]}
            pdfProductId="japan-guide-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Japan \u2014 Iconic Destinations"
            subtitle="Click each thumbnail to explore Japan&apos;s most unforgettable spots."
            spots={[
              { name: "Shibuya Crossing", query: "shibuya crossing tokyo aerial view neon city night", desc: "The world&apos;s busiest pedestrian crossing. Best viewed from above at Shibuya Sky, or cross it yourself during rush hour." },
              { name: "Fushimi Inari", query: "fushimi inari shrine kyoto thousands red torii gates path", desc: "10,000 vermillion torii gates winding up a mountainside in Kyoto. The full hike takes 2\u20133 hours. Go at dawn to avoid crowds." },
              { name: "Arashiyama Bamboo Grove", query: "arashiyama bamboo grove kyoto green towering bamboo path", desc: "Towering bamboo stalks create an otherworldly corridor in western Kyoto. Arrive before 8am for the emptiest experience." },
              { name: "Dotonbori Osaka", query: "dotonbori osaka neon signs canal night street food", desc: "Osaka&apos;s electric food street. Glico running man, giant crab signs, and the best street food in Japan lining the canal." },
              { name: "Miyajima Floating Torii", query: "miyajima floating torii gate hiroshima sunset sea", desc: "Itsukushima Shrine&apos;s floating torii gate appears to hover on the water at high tide. Best photographed at sunset from the beach." },
              { name: "Mt. Fuji from Hakone", query: "mount fuji hakone lake ashi clear sky snow capped mountain", desc: "Japan&apos;s iconic volcano reflected in Lake Ashi. Clear views are most common in winter mornings and after typhoons clear the skies." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="fushimi inari shrine kyoto red torii gates tunnel path"
              alt="Fushimi Inari Shrine red torii gates tunnel in Kyoto"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Fushimi Inari Shrine, Kyoto &mdash; 10,000 torii gates winding up Mt. Inari. The first section is crowded, but push past the halfway mark and you&apos;ll have the path to yourself.
              </p>
            </div>
          </div>

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Buying a JR Pass when you don\u0027t need one", desc: "If you\u0027re only visiting Tokyo or one city, the JR Pass is a waste of \u00A550,000. It only makes sense if you\u0027re taking bullet trains between multiple cities. Do the maths for your specific route before buying.", icon: "\uD83D\uDE85" },
                { title: "Not carrying cash", desc: "Japan is still heavily cash-based. Many small restaurants, shrines, street food stalls and even some mid-range restaurants don\u0027t accept cards. Withdraw \u00A530,000\u201350,000 at a 7-Eleven ATM on arrival.", icon: "\uD83D\uDCB4" },
                { title: "Trying to see everything in 7 days", desc: "Tokyo alone deserves 4\u20135 days. Don\u0027t cram Tokyo, Kyoto, Osaka, Hiroshima and Hakone into one week. You\u0027ll spend more time on trains than experiencing anything. Pick the 7-day classic route and do it properly.", icon: "\uD83D\uDDD3" },
                { title: "Not booking teamLab in advance", desc: "teamLab Borderless sells out weeks ahead. There are no walk-up tickets, no exceptions, no scalpers. Book online the moment your dates are confirmed or accept that you\u0027re not going.", icon: "\uD83C\uDFA8" },
                { title: "Tipping at restaurants", desc: "Tipping is considered rude in Japan. Don\u0027t leave money on the table \u2014 staff will chase you down to return it. The bill is the bill. Service is already excellent because that\u0027s the standard, not because tips incentivise it.", icon: "\uD83C\uDFB4" },
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
              Want Your Japan Trip Planned?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size and budget &mdash; we&apos;ll send a personalised Japan itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Japan Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is the Japan Rail Pass worth it in 2026?", a: "Yes, if you\u0027re travelling between multiple cities. A 7-day JR Pass costs around \u00A550,000 and covers all JR trains including Shinkansen bullet trains. A single Tokyo\u2013Kyoto round trip by Shinkansen costs about \u00A528,000, so adding even one more city makes the pass worthwhile. For Tokyo-only trips, skip it and use a Suica card." },
                { q: "How much does a Japan trip cost per day?", a: "Budget: \u00A58,000\u201312,000/day ($53\u201380) using hostels, convenience store meals and local trains. Mid-range: \u00A515,000\u201325,000/day ($100\u2013167) with business hotels and restaurant meals. Luxury: \u00A540,000+/day ($267+). All figures exclude international flights." },
                { q: "What is the best time to visit Japan?", a: "Late March to mid-April for cherry blossoms, or mid-October to late November for autumn foliage. May and September\u2013October offer pleasant weather with fewer crowds. Avoid Golden Week (late April to early May), Obon (mid-August) and New Year when domestic travel peaks." },
                { q: "Do Indian passport holders need a visa for Japan?", a: "Yes. Apply at the Japanese Embassy or VFS Global centre at least 3 weeks before departure. Processing takes 5\u20137 working days. You need a confirmed return ticket, hotel bookings and a 3-month bank statement. Most Western passport holders (US, UK, EU, Australia) get visa-free entry for up to 90 days." },
                { q: "Is 7 days enough for Japan or should I plan 14 days?", a: "7 days covers the classic Tokyo\u2013Kyoto\u2013Osaka route well. 10 days adds Hiroshima and Nara. 14 days lets you include Hokkaido or explore at a slower pace. First-timers should aim for at least 10 days to avoid rushing." },
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
                { label: "Tokyo \u2014 5-Day Complete Guide", href: "/blog/tokyo-5-days", soon: false },
                { label: "Kyoto \u2014 4-Day Temple & Culture Guide", href: "/blog/kyoto-4-days", soon: false },
                { label: "Osaka \u2014 3-Day Food & Fun Guide", href: "/blog/osaka-3-days", soon: false },
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

          <CombineWith currentSlug="japan-travel-guide" />
          <RelatedGuides currentSlug="japan-travel-guide" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
