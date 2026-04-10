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

// -- Table of Contents --
const MOROCCO_TOC = [
  { id: "honest",     emoji: "\u26A1", label: "What Morocco Actually Is" },
  { id: "season",     emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "\u2708\uFE0F", label: "Getting There" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "7-Day Itinerary" },
  { id: "landmarks",  emoji: "\uD83D\uDD4C", label: "Landmark Guide" },
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
          href: `mailto:?subject=Morocco 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Morocco in 7 Days — Marrakech, Fes, Sahara and Chefchaouen complete guide&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/morocco-7-days"
        imageUrl="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80"
        description="Morocco in 7 Days: Marrakech medina, Fes tanneries, Sahara desert camp, Chefchaouen blue city — complete travel guide with budget breakdown."
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
export default function MoroccoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MOROCCO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Morocco" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* -- HERO -- */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="morocco marrakech medina sahara desert camel dunes"
            fallback="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Camel caravan crossing golden Sahara Desert dunes at sunset in Merzouga Morocco"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Morocco 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Medinas &amp; Sahara
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Morocco in 7 Days:
                <em className="italic text-amber-300"> Marrakech, Fes, Sahara &amp; Chefchaouen</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Djemaa el-Fna at dusk, Fes medina tanneries, a night under Sahara stars in Merzouga, and the blue alleyways of Chefchaouen at dawn. The complete guide with real costs in MAD &amp; USD, and the mistakes that ruin most Morocco trips.
              </p>
            </div>
          </div>
        </div>

        {/* -- ARTICLE -- */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="17 min" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDF2\uD83C\uDDE6"} Morocco</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 7 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Morocco does not ease you in gently. From the moment you step into the Djemaa el-Fna square at dusk &mdash; smoke from a hundred food stalls, a snake charmer&apos;s flute, storytellers in the crowd, the call to prayer rolling over the rooftops &mdash; it is unlike anywhere else on earth. Seven days lets you move from Marrakech&apos;s medieval medina through the world&apos;s oldest university city in Fes, sleep under a canopy of Sahara stars in Merzouga, and wander the blue-washed alleyways of Chefchaouen before the tour groups arrive.
            </p>
          </blockquote>

          {/* -- WHAT MOROCCO ACTUALLY IS -- */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Morocco Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Morocco is a North African kingdom straddling the Arab and Berber worlds, bordered by the Atlantic, the Mediterranean, the Atlas Mountains and the Sahara Desert. The country has been continuously inhabited for over 300,000 years and its imperial cities &mdash; Marrakech, Fes, Meknes, Rabat &mdash; are layered with Roman, Islamic, Berber and French colonial history. The medinas (old walled cities) of Fes and Marrakech are UNESCO World Heritage Sites and rank among the most architecturally significant urban spaces on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Marrakech is the gateway city and gets the most visitors, but it is neither the most beautiful nor the most interesting city in Morocco. Fes is older, less touristified, and architecturally more extraordinary. The Sahara Desert at Merzouga is a genuine wilderness experience. Chefchaouen is the most photogenic small city in Africa. And Essaouira on the Atlantic coast is the laid-back antidote to medina intensity. Seven days lets you cover the essential circuit without rushing.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Morocco is a Muslim-majority country that is socially conservative outside tourist areas but welcoming and safe for visitors. French and Arabic are the primary languages; English is widely understood in tourist centres. The currency is the Moroccan Dirham (MAD) &mdash; approximately 10 MAD = $1 USD. Cash is king in the medinas; cards are accepted at mid-range and upscale establishments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airports" value="RAK / CMN" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Mar\u2013May, Sep\u2013Nov" />
              <StatCard icon={"\uD83D\uDD4C"} label="UNESCO Sites" value="9 Cultural" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* -- BEST TIME TO VISIT -- */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Morocco</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar\u2013May",
                  i: "\u2600\uFE0F",
                  t: "Spring \u2014 Best Overall",
                  d: "18\u201328\u00B0C with wildflowers in the Atlas and comfortable medina temperatures. The Sahara is warm but not scorching. This is the ideal window for a first visit \u2014 every destination in Morocco is at its best. Book riads 2\u20133 weeks ahead for peak spring dates.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jun\u2013Aug",
                  i: "\uD83C\uDF05",
                  t: "Summer \u2014 Hot Interior",
                  d: "30\u201345\u00B0C in Marrakech and the desert. Fes can hit 40\u00B0C+ in July\u2013August. The coast (Essaouira, Tangier) stays pleasant at 22\u201328\u00B0C. If visiting in summer, spend more time on the coast and tackle medinas in the early morning and evening. The Sahara above 40\u00B0C is genuinely punishing.",
                  b: "Coast only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep\u2013Nov",
                  i: "\uD83C\uDF42",
                  t: "Autumn \u2014 Excellent Value",
                  d: "22\u201332\u00B0C with dropping temperatures and thinner crowds. September is still warm; October and November are ideal. Date harvests in the Sahara oases happen in October. Riad prices drop 20\u201330% from summer peaks. Arguably the best value season in Morocco.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec\u2013Feb",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Cold Nights",
                  d: "8\u201318\u00B0C daytime in Marrakech, dropping to 0\u20135\u00B0C at night in Fes, Chefchaouen and the desert. Many budget riads have no central heating. The Atlas Mountains get snow. Prices are lowest and tourist crowds are minimal, but pack warm layers and ask about heating before booking.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Morocco</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key airports:</strong> Marrakech Menara (RAK) for the southern circuit and Mohammed V Casablanca (CMN) for international connections. <strong className="font-medium">Indian passport holders need an e-Visa ($30, apply online before travel).</strong> Most Western passports get 90 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Marrakech Menara Airport (RAK)",
                  d: "Direct flights from major European hubs (London, Paris, Madrid, Rome) on Ryanair, EasyJet, and Royal Air Maroc. Flight time from London: 3.5 hours. From Paris: 3 hours. Budget airlines frequently run sales at \u20AC30\u2013100 return if booked ahead. RAK is 15 minutes from the medina by petit taxi (70\u2013100 MAD / $7\u201310).",
                  b: "Best for Marrakech start",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "From India",
                  d: "No direct flights. Best routing: Delhi or Mumbai to Casablanca via Dubai (Emirates, 12\u201314 hours) or via Istanbul (Turkish Airlines, 13\u201315 hours). Return fares from \u20B940,000\u201365,000 booked 2\u20133 months ahead. Royal Air Maroc connects Casablanca to Marrakech in 45 minutes ($30\u201350) or take the ONCF train (3 hours, $12\u201325).",
                  b: "Via Dubai or Istanbul",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE82",
                  t: "Trains & CTM Buses",
                  d: "ONCF trains connect Casablanca, Marrakech, Fes, Meknes and Tangier. Comfortable, punctual, and affordable ($10\u201335 for most routes). CTM and Supratours buses serve routes trains do not, including Marrakech\u2013Essaouira (3 hours, $8\u201312) and Fes\u2013Chefchaouen (4 hours, $10\u201314). Book at ctm.ma or oncf.ma.",
                  b: "Excellent network",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE95",
                  t: "Petit Taxis & Grand Taxis",
                  d: "Petit taxis operate within cities (metered, 10\u201350 MAD for most rides). Grand taxis are shared long-distance taxis (6 passengers) running fixed routes between towns \u2014 cheap but cramped. Always agree the fare before getting in. In Marrakech and Fes, insist on the meter or negotiate a fixed price upfront.",
                  b: "Negotiate first",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 7-Day Morocco Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (800\u20131,800 MAD/day, ~$80\u2013180). Each day card is expandable. The route runs Marrakech (2 nights) &rarr; Fes (2 nights) &rarr; Merzouga Sahara (1 night) &rarr; Chefchaouen (1 night) &rarr; departure. Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Marrakech \u2014 Arrive, Medina & Djemaa el-Fna"
                cost="400\u2013700 MAD (~$40\u201370) excluding accommodation"
                items={[
                  "Arrive Marrakech Menara Airport (RAK). Petit taxi to your riad in the medina \u2014 negotiate the fare before getting in (70\u2013100 MAD / $7\u201310). Budget riads in the medina start at 250\u2013400 MAD/night ($25\u201340) and the experience inside a traditional courtyard house is far superior to any modern hotel at the same price.",
                  "Afternoon: Bahia Palace (70 MAD / ~$7). The 19th-century vizier\u2019s palace features hand-painted cedarwood ceilings, zellige tile courtyards, and carved stucco. Self-guided walk takes 45 minutes.",
                  "Saadian Tombs (70 MAD / ~$7). Sealed for 200 years and rediscovered in 1917, the marble mausoleum holds 66 royal dead under intricate Moorish carving.",
                  "Koutoubia Mosque exterior \u2014 the 12th-century minaret is visible from across Marrakech. Non-Muslims cannot enter, but the surrounding rose gardens are free. The evening call to prayer from this tower is extraordinary.",
                  "Evening: Djemaa el-Fna square at dusk. Morocco\u2019s greatest free spectacle: snake charmers, Gnawa musicians, acrobats, henna artists, and 100+ food stalls. Grilled merguez (10 MAD / $1), harira soup (15 MAD / $1.50), pastilla (30 MAD / $3). Eat here for dinner.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Marrakech \u2014 Majorelle Garden, Souks & Hammam"
                cost="500\u2013900 MAD (~$50\u201390) excluding accommodation"
                items={[
                  "Morning: Majorelle Garden (150 MAD / ~$15). The cobalt-blue villa and cactus garden created by French painter Jacques Majorelle, later restored by Yves Saint Laurent. The YSL Museum is an additional 100 MAD. The garden alone is worth it for the photography.",
                  "Medina souks \u2014 the covered market streets near Djemaa el-Fna sell leather, spices, argan oil, lanterns, rugs, and ceramics. Bargain always: start at 25\u201330% of the opening price and work up. Never accept \u2018free\u2019 gifts \u2014 they come with aggressive pressure to buy.",
                  "Hammam experience: local hammam 100\u2013200 MAD ($10\u201320) for bath, scrub and massage. Tourist hammams (Les Bains de Marrakech, Hammam de la Rose) charge 300\u2013500 MAD ($30\u201350) with argan oil treatments and proper facilities.",
                  "Rooftop dinner overlooking the medina \u2014 Nomad (contemporary Moroccan, 250\u2013350 MAD / $25\u201335 per person) or Le Foundouk in a restored 18th-century caravanserai (300\u2013450 MAD / $30\u201345 per person). Book ahead for both.",
                  "Sunset from a Djemaa el-Fna rooftop caf\u00E9 (Caf\u00E9 de France, Caf\u00E9 Glacier \u2014 20\u201330 MAD for mint tea). The square transforming below you at the golden hour is unforgettable.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Atlas Mountains Day Trip or Transfer to Fes"
                cost="300\u2013600 MAD (~$30\u201360) excluding accommodation"
                items={[
                  "Option A: Atlas Mountains half-day. Shared minivan to Imlil village (2 hours from Marrakech, 200\u2013350 MAD / $20\u201335 return). Walk through Berber villages with walnut and apple orchards beneath North Africa\u2019s highest peak, Jebel Toubkal (4,167m). Lunch at a village home with a Berber family (80\u2013120 MAD / $8\u201312).",
                  "Option B: Morning CTM bus Marrakech \u2192 Fes (8\u20139 hours, 120\u2013150 MAD / $12\u201315). Book at the CTM station or online at ctm.ma. Supratours is the other reliable operator. Seat reservation is essential \u2014 buses fill up.",
                  "If taking the Atlas trip: afternoon ONCF train Marrakech \u2192 Fes via Casablanca (approximately 8 hours, 250\u2013350 MAD / $25\u201335 in 2nd class). Reserve seats online at oncf.ma.",
                  "Arrive Fes. Petit taxi to your riad in Fes el-Bali medina (20\u201340 MAD / $2\u20134). The narrow streets mean taxis drop you at a medina gate \u2014 your riad will send someone to guide you through the alleys to your door. This is normal and expected.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Fes \u2014 World\u2019s Greatest Medieval City"
                cost="350\u2013600 MAD (~$35\u201360) excluding accommodation"
                items={[
                  "Fes el-Bali is the UNESCO-listed old medina \u2014 the largest car-free urban zone in the world and the best-preserved medieval city anywhere. Over 9,000 streets, some only 50cm wide. You will get lost. Embrace it \u2014 that is the point.",
                  "Hire a certified guide for a half day (200\u2013300 MAD / $20\u201330). Ask your riad to recommend one with official ID. The guide transforms Fes from overwhelming labyrinth to navigable masterpiece.",
                  "Chouara Tannery \u2014 leather dyeing pits in use since the 11th century. Coloured vats of natural dyes (poppy for red, indigo for blue, henna for orange). Access via surrounding leather shops \u2014 free balcony views in exchange for browsing their goods. The mint sprig at the entrance is functional, not decorative.",
                  "Al-Attarine Madrasa (40 MAD / ~$4). 14th-century Quranic school with carved stucco, zellige tile, and cedar woodwork around a central fountain courtyard. Calm, rarely crowded.",
                  "Al-Qarawiyyin University \u2014 founded in 859 AD by Fatima al-Fihri, the world\u2019s oldest continuously operating university. Predates Oxford by 300 years. Non-Muslims can view from certain external points.",
                  "Bou Inania Madrasa (20 MAD / ~$2). Another 14th-century madrasa with particularly fine carved wood and a working clock tower.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Sahara Desert \u2014 Merzouga Dunes, Camels & Stars"
                cost="500\u2013750 MAD (~$50\u201375) excluding camp"
                items={[
                  "Fes to Merzouga: shared grand taxi or organised van (250\u2013400 MAD / $25\u201340 per seat). The drive is 7\u20138 hours through the Middle Atlas mountains and cedar forests where Barbary macaques roam freely by the road at Azrou.",
                  "Merzouga sits at the edge of Erg Chebbi \u2014 the largest sand dune field in Morocco, reaching 150m in height. These are classic Sahara dunes: wind-sculpted orange ridges and a horizon without a building or road.",
                  "Camel sunset ride (200\u2013400 MAD / $20\u201340). A 45-minute ride to the camp on camelback as the dunes turn deep red-orange. Wrap a scarf around your face \u2014 sand blows even in still air.",
                  "Desert camp overnight \u2014 budget camps 300\u2013500 MAD/person ($30\u201350) including dinner and breakfast. Spend 500\u2013700 MAD ($50\u201370) for a proper camp with private Berber tent, communal fire, and drumming. The Milky Way from the Sahara with zero light pollution is one of the great sights of travel.",
                  "Wake at 5am for sunrise on the dunes. The light at dawn is softer and the dunes cast longer shadows than at sunset.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Chefchaouen \u2014 The Blue City"
                cost="400\u2013600 MAD (~$40\u201360) excluding accommodation"
                items={[
                  "Merzouga to Chefchaouen is a long transfer (9\u201310 hours via Fes). Share a private car (1,200\u20131,500 MAD / $120\u2013150 total) among 3\u20134 travellers \u2014 competitive with the bus. Alternatively take a shared van to Fes then CTM bus to Chefchaouen.",
                  "Chefchaouen\u2019s entire medina is painted in shades of blue \u2014 pale cornflower, deep cobalt, dusty indigo. A tradition begun in the 1930s and sustained ever since. The morning light turns narrow alleyways into glowing blue channels.",
                  "Uta el-Hammam square \u2014 the main square at the heart of the medina. The kasbah museum (10 MAD / $1). Sit at a caf\u00E9 with mint tea (10\u201315 MAD) and watch the medina operate.",
                  "Ras El Ma waterfall \u2014 free. A 15-minute walk from the medina centre. Local women wash wool in the stream. Green hillside against the blue city below creates an arresting colour combination.",
                  "Best photography between 3\u20135pm when lower sun creates depth in the alleyways. Climb the hillside behind the medina for the full panoramic view over the blue rooftops toward the Rif mountains.",
                  "Spanish Mosque hike \u2014 20 minutes uphill behind the medina. The best panoramic view of the blue city in the valley. Go at sunset. Free, clearly marked path.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Essaouira or Departure via Tangier"
                cost="250\u2013450 MAD (~$25\u201345) excluding transport home"
                items={[
                  "Option A: Chefchaouen to Tangier (3 hours by CTM bus, 80\u2013120 MAD / $8\u201312). Fly from Tangier Ibn Battouta Airport (TNG). Or continue to Casablanca (CMN) for international connections.",
                  "Option B: If returning to Marrakech \u2014 Chefchaouen \u2192 Fes (4h) \u2192 Marrakech by overnight CTM bus (8\u20139h, 150\u2013180 MAD / $15\u201318). Saves a night\u2019s accommodation.",
                  "Option C: Add Essaouira (Atlantic coast) \u2014 a laid-back port city with blue fishing boats, rampart walls, and fresh-grilled sardines for 30 MAD ($3). A perfect decompression stop after medina intensity. Buses from Marrakech take 3 hours ($8\u201312).",
                  "Currency note: spend remaining dirhams before departure \u2014 MAD is a closed currency and difficult to exchange outside Morocco. Airport rates are poor.",
                  "Tipping summary: 10\u201320 MAD for riad staff, 20\u201330 MAD for hammam attendants, 50\u2013100 MAD/day for tour guides, 5\u201310 MAD for parking attendants. Budget approximately 30\u201350 MAD/day ($3\u20135) for tips.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Morocco" onPlanTrip={() => setModalOpen(true)} />

          {/* -- LANDMARK GUIDE -- */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDD4C"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and cultural sites across the 7-day route. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Djemaa el-Fna (Marrakech)",
                  e: "Free",
                  d: "Morocco\u2019s most iconic public space transforms at dusk: 100+ food stalls, Gnawa musicians, snake charmers, storytellers, and acrobats. The atmosphere between 6\u20138pm is unlike anything else in North Africa. Eat at the stalls \u2014 merguez, harira soup, and pastilla for under $5 total.",
                  t: "Must see \u00B7 Evening \u00B7 2+ hrs",
                },
                {
                  n: "Chouara Tannery (Fes)",
                  e: "Free (via leather shops)",
                  d: "Leather dyeing pits in continuous use since the 11th century. Natural dyes create vivid reds, blues, oranges and yellows in stone vats. Best photography 8\u201311am on a sunny day. The surrounding leather shops offer balcony access \u2014 go to the highest floor for the widest angle.",
                  t: "Must see \u00B7 Morning \u00B7 1 hr",
                },
                {
                  n: "Bahia Palace (Marrakech)",
                  e: "70 MAD (~$7)",
                  d: "19th-century vizier\u2019s palace with hand-painted cedarwood ceilings, zellige tilework, and carved stucco courtyards. The scale and detail of the decorative work is extraordinary. Self-guided visit takes 45 minutes.",
                  t: "Must see \u00B7 1 hr",
                },
                {
                  n: "Al-Qarawiyyin University (Fes)",
                  e: "Exterior viewing",
                  d: "Founded 859 AD by Fatima al-Fihri \u2014 the world\u2019s oldest continuously operating university. The library (founded 1359) has been painstakingly restored. Non-Muslim access is limited to external viewpoints but the historical significance is immense.",
                  t: "Historical \u00B7 30 min",
                },
                {
                  n: "Majorelle Garden (Marrakech)",
                  e: "150 MAD (~$15)",
                  d: "Cobalt-blue villa and cactus garden created by French painter Jacques Majorelle, saved and restored by Yves Saint Laurent. The YSL Museum (additional 100 MAD) is excellent. The garden is one of the most photographed spots in Marrakech.",
                  t: "Must see \u00B7 1.5 hrs",
                },
                {
                  n: "Erg Chebbi Dunes (Merzouga)",
                  e: "Free (camp separate)",
                  d: "Morocco\u2019s largest sand dune field reaching 150m in height. Classic Sahara landscape: wind-sculpted orange ridges stretching to the Algerian border. The overnight desert camp and star-gazing experience is consistently rated the highlight of any Morocco trip.",
                  t: "Must see \u00B7 Overnight",
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
            title="Morocco \u2014 Medinas, Dunes &amp; Blue Cities"
            subtitle="Ancient walled cities, Sahara silence, and the blue alleyways of the Rif Mountains."
            spots={[
              {
                name: "Djemaa el-Fna at Dusk",
                query: "djemaa el fna marrakech evening food stalls smoke crowd",
                desc: "Marrakech\u2019s iconic square transforms nightly into the greatest open-air spectacle in North Africa.",
              },
              {
                name: "Chouara Tannery, Fes",
                query: "chouara tannery fes morocco leather dye vats aerial colorful",
                desc: "Leather dyeing pits in continuous use since the 11th century \u2014 Morocco\u2019s most photographed industrial site.",
              },
              {
                name: "Erg Chebbi Sahara Dunes",
                query: "erg chebbi merzouga sahara desert dunes camel caravan sunset",
                desc: "150-metre sand dunes stretching to the Algerian border \u2014 the classic Sahara landscape.",
              },
              {
                name: "Chefchaouen Blue Medina",
                query: "chefchaouen blue city morocco medina alley stairs blue walls",
                desc: "Every surface painted in shades of blue \u2014 one of the most photogenic small cities in the world.",
              },
              {
                name: "Fes el-Bali Medina",
                query: "fes medina narrow streets morocco ancient alley light",
                desc: "The largest car-free urban zone in the world \u2014 9,000 streets of medieval architecture.",
              },
            ]}
          />

          {/* -- BUDGET BREAKDOWN -- */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Morocco is excellent value at every budget level. Costs in Moroccan Dirham (MAD) and USD at approximately 10 MAD = $1. The Sahara desert camp is the single biggest cost variable.
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
                    ["\uD83C\uDFE8 Accommodation (7N)", "1,750\u20133,500 MAD ($175\u2013350)", "4,200\u20138,400 MAD ($420\u2013840)", "14,000\u201356,000 MAD ($1,400\u20135,600)"],
                    ["\uD83C\uDF7D Food & Drinks", "700\u20131,050 MAD ($70\u2013105)", "2,100\u20132,800 MAD ($210\u2013280)", "4,200\u201310,500 MAD ($420\u20131,050)"],
                    ["\uD83D\uDE97 Transport", "700\u20131,400 MAD ($70\u2013140)", "1,750\u20133,500 MAD ($175\u2013350)", "3,500\u20137,000 MAD ($350\u2013700)"],
                    ["\uD83C\uDFAF Activities & Entry", "350\u2013700 MAD ($35\u201370)", "1,050\u20132,100 MAD ($105\u2013210)", "3,500\u20137,000 MAD ($350\u2013700)"],
                    ["\uD83C\uDFDC\uFE0F Desert Camp (1N)", "300\u2013500 MAD ($30\u201350)", "700\u20131,200 MAD ($70\u2013120)", "2,000\u20135,000 MAD ($200\u2013500)"],
                    ["TOTAL (per person)", "3,800\u20137,150 MAD ($380\u2013715)", "9,800\u201318,000 MAD ($980\u20131,800)", "27,200\u201385,500 MAD ($2,720\u20138,550)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget (350\u2013600 MAD/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Budget riads and hostels (250\u2013500 MAD/night), street food and medina restaurants (100\u2013150 MAD/day), CTM buses and shared grand taxis. Morocco at this level is one of the best-value destinations accessible from Europe.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range (1,400\u20132,600 MAD/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Beautiful traditional riads (600\u20131,200 MAD/night), restaurant dining with rooftop views, private guides in Fes and Marrakech, a proper desert camp, and ONCF trains. The sweet spot for comfort and authentic experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury (3,900+ MAD/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Palace hotels (La Mamounia, Royal Mansour), private guides, luxury desert camps with plunge pools, and chartered transfers. Morocco at the luxury level rivals anywhere in the world for experiential quality.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* -- WHERE TO STAY -- */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Morocco</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in riads. A riad is a traditional Moroccan townhouse with an internal courtyard open to the sky \u2014 you enter through an anonymous door on a narrow medina street and step into an oasis of tiles, fountains, and orange trees. This is the single best accommodation decision you can make in Morocco. Every city on this route has excellent riad options.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Riad Kniza",
                  type: "Boutique riad \u00B7 Marrakech Medina",
                  price: "From 800 MAD/night (~$80)",
                  badge: "Mid-range pick",
                  desc: "A beautifully restored riad with zellige courtyards, a rooftop terrace overlooking the medina, and breakfast that sets the standard. Central location near Bahia Palace. The kind of place that makes you understand why riads are Morocco\u2019s greatest accommodation tradition.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Desert Luxury Camp (Merzouga)",
                  type: "Sahara camp \u00B7 Erg Chebbi",
                  price: "From 700 MAD/person (~$70)",
                  badge: "Desert pick",
                  desc: "Private Berber-style tents with proper beds, solar power, en-suite facilities, and a communal dining tent. Dinner is a full Moroccan spread with live Gnawa drumming around the campfire. The Milky Way from the dunes is the reason you came to Morocco.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Dar Roumana",
                  type: "Boutique riad \u00B7 Fes Medina",
                  price: "From 1,000 MAD/night (~$100)",
                  badge: "Fes pick",
                  desc: "A converted 17th-century mansion in the heart of Fes el-Bali with rooftop dining, a plunge pool, and one of the best kitchens in the city. The owner-chef serves Fassi cuisine that rivals the best restaurants. Walking distance to the tanneries and madrasas.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Casa Perleta",
                  type: "Boutique riad \u00B7 Chefchaouen",
                  price: "From 600 MAD/night (~$60)",
                  badge: "Blue city pick",
                  desc: "A charming property in the blue medina with a rooftop terrace overlooking the Rif mountains. The blue walls extend inside the riad itself. Breakfast on the terrace with the blue city below is a perfect start to the Chefchaouen morning.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Budget medina hostels",
                  type: "Budget \u00B7 All cities",
                  price: "From 120\u2013250 MAD/night (~$12\u201325)",
                  badge: "Best budget",
                  desc: "Clean hostels and budget riads exist in every medina on this route. Marrakech and Fes have dozens rated 8+ on Booking.com. The medina location gives you the same atmosphere as the expensive riads \u2014 you just share a bathroom. Chefchaouen hostels from 120 MAD/night are exceptional value.",
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

          {/* -- WHERE TO EAT -- */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Morocco</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Moroccan cuisine is one of the great culinary traditions. Tagine (slow-cooked stew in a conical clay pot), couscous (traditionally served on Fridays), pastilla (savoury-sweet pigeon or chicken pie), and harira (tomato-lentil soup) are the essential dishes. Street food in the medinas is safe, cheap, and excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Djemaa el-Fna Food Stalls",
                  t: "Street food \u00B7 Marrakech",
                  d: "The nightly food market is the most atmospheric dining experience in Morocco. Grilled merguez sausage (10 MAD / $1), harira soup (15 MAD / $1.50), sheep head (for the adventurous), snail broth (5 MAD), and fresh-squeezed orange juice (5 MAD). Each stall has numbered seating. Pick the busiest stall \u2014 turnover means freshness.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Friday Couscous",
                  t: "Traditional \u00B7 Any riad or restaurant",
                  d: "Couscous is traditionally served on Fridays after midday prayer. Most riads and family restaurants prepare a special Friday couscous with seven vegetables, lamb or chicken, and caramelised onions with raisins. This is Moroccan home cooking at its finest. Ask your riad for their Friday lunch \u2014 it is usually the best meal of the week. 80\u2013150 MAD ($8\u201315) per person.",
                  b: "Cultural essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Caf\u00E9 Clock",
                  t: "Contemporary Moroccan \u00B7 Fes",
                  d: "Located on Talaa Kebira in the Fes medina. Famous for the camel burger (80 MAD / ~$8) and Moroccan food served in a converted house with live music on certain evenings. The rooftop terrace has medina views. Book ahead for the music nights. One of the few medina restaurants that consistently gets the food right at mid-range prices.",
                  b: "Best mid-range Fes",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pastilla (Bastilla)",
                  t: "Speciality dish \u00B7 Fes origin",
                  d: "Morocco\u2019s most distinctive dish: layers of warqa pastry filled with shredded pigeon or chicken, almonds, eggs, and spices, dusted with cinnamon and powdered sugar. The sweet-savoury combination is unlike anything in European or Asian cuisine. Best in Fes where it originates. 40\u201380 MAD ($4\u20138) depending on the restaurant.",
                  b: "Iconic dish",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Nomad (Marrakech)",
                  t: "Contemporary Moroccan \u00B7 Marrakech",
                  d: "Rooftop restaurant in the medina serving updated Moroccan dishes with excellent presentation. Lamb tagine with preserved lemon, aubergine zaalouk, and pomegranate salads. 250\u2013350 MAD/person ($25\u201335). The terrace views over the medina rooftops are part of the experience. Book ahead.",
                  b: "Best rooftop",
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
            destination="Morocco"
            hotels={[
              {
                name: "Riad Kniza",
                type: "Boutique Riad \u00B7 Marrakech",
                price: "From 800 MAD/night (~$80)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/ma/riad-kniza.html?aid=2820480",
              },
              {
                name: "Dar Roumana",
                type: "Boutique Riad \u00B7 Fes",
                price: "From 1,000 MAD/night (~$100)",
                rating: "5",
                badge: "Fes pick",
                url: "https://www.booking.com/hotel/ma/dar-roumana.html?aid=2820480",
              },
              {
                name: "La Mamounia",
                type: "Palace Hotel \u00B7 Marrakech",
                price: "From 6,000 MAD/night (~$600)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/ma/la-mamounia.html?aid=2820480",
              },
              {
                name: "Casa Perleta",
                type: "Boutique Riad \u00B7 Chefchaouen",
                price: "From 600 MAD/night (~$60)",
                rating: "4",
                badge: "Blue city pick",
                url: "https://www.booking.com/hotel/ma/casa-perleta.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Sahara Desert Overnight Camp & Camel Ride",
                duration: "2 days",
                price: "From 500 MAD/person (~$50)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=merzouga+sahara+desert+camp&partner_id=PSZA5UI",
              },
              {
                name: "Marrakech Medina Walking Tour",
                duration: "Half day",
                price: "From 300 MAD/person (~$30)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=marrakech+medina+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Fes Medina & Tannery Tour",
                duration: "Full day",
                price: "From 250 MAD/person (~$25)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=fes+medina+tannery+tour&partner_id=PSZA5UI",
              },
              {
                name: "Atlas Mountains Day Trip from Marrakech",
                duration: "Full day",
                price: "From 400 MAD/person (~$40)",
                badge: "Adventure",
                url: "https://www.getyourguide.com/s/?q=atlas+mountains+day+trip+marrakech&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* -- MISTAKES TO AVOID -- */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83C\uDF81",
                  title: "Accepting \u2018free\u2019 gifts in the souks",
                  desc: "A vendor hands you a sprig of herbs, a bracelet, or a trinket and says \u2018for you, free, welcome to Morocco.\u2019 Once it is in your hand, he will demand money and become aggressive if you refuse. Never take anything offered unprompted. A firm smile and \u2018la shukran\u2019 (no thank you) before it reaches your hand is the correct response.",
                },
                {
                  icon: "\uD83D\uDCAC",
                  title: "Not bargaining in the souks",
                  desc: "Fixed prices exist in government craft cooperatives and shops with price tags. Everywhere else, the first price is a negotiating opening. Start at 25\u201330% of asking price, be prepared to walk away, and settle at 40\u201360%. Not bargaining is considered impolite \u2014 it implies you do not respect the exchange.",
                },
                {
                  icon: "\uD83D\uDDFA\uFE0F",
                  title: "Skipping Fes to spend more time in Marrakech",
                  desc: "Marrakech is Morocco\u2019s most visited city but not its most extraordinary one. Fes el-Bali is larger, older, less touristified, and architecturally more significant. First-time visitors who spend 4 nights in Marrakech and skip Fes consistently say Fes was the highlight. Budget at least 2 nights there.",
                },
                {
                  icon: "\u2744\uFE0F",
                  title: "Visiting in December or January without warm layers",
                  desc: "December\u2013January nights in the desert drop to 0\u20135\u00B0C and the medinas of Fes and Chefchaouen are genuinely cold. Many budget riads have no central heating. March\u2013May and September\u2013November are the ideal windows. If visiting in winter, pack warm layers and ask about heating before booking.",
                },
                {
                  icon: "\uD83E\uDDED",
                  title: "Entering Fes medina without a guide on day one",
                  desc: "The Fes medina has no grid, no landmarks visible from within the alleys, and unreliable mobile signal in many sections. Even experienced travellers get comprehensively lost. Hire a certified guide on your first day (your riad can recommend one). On subsequent days, once you know the key anchors, navigate solo.",
                },
                {
                  icon: "\uD83C\uDFDC\uFE0F",
                  title: "Booking the cheapest Sahara camp",
                  desc: "Camps at 150\u2013200 MAD/person ($15\u201320) mean thin blankets, poor food, no private tent, and shared facilities that are not clean. Spend 500\u2013700 MAD ($50\u201370) for a proper camp with a private Berber tent, decent meals, and a campfire experience. The desert night is the highlight of a Morocco trip \u2014 do not undercut it.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Morocco</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF05",
                  title: "Djemaa el-Fna at dusk \u2014 the magical hour",
                  desc: "The square transforms between 6\u20138pm. Food stalls appear, performers set up, the call to prayer echoes from the Koutoubia minaret, and the light turns golden then violet over the Atlas mountains. This is the hour to be here. Eat dinner at the stalls (merguez and harira, 30 MAD / $3 total) rather than at a tourist restaurant.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDFFA",
                  title: "Tannery at morning light \u2014 best photography",
                  desc: "The Chouara Tannery in Fes is most photogenic between 8\u201311am when dye workers are active and early light illuminates the colour vats. Go on a sunny day, to the highest floor of the surrounding leather shops for the widest angle. The mint sprig at the entrance is functional \u2014 the ammonia smell is strong.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDF19",
                  title: "Chefchaouen before 9am",
                  desc: "Day-tripper buses from Fes and Tangier arrive around 10am. By 11am the narrow blue streets are congested. The blue city at 7\u20138am belongs to you: women sweeping blue steps, cats on blue walls, bakers pulling bread from wood-fired ovens. Stay at least one night so you own the morning.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\u2B50",
                  title: "Sahara stars \u2014 no light pollution",
                  desc: "Erg Chebbi is sufficiently remote that light pollution is negligible. The Milky Way is visible as a dense band \u2014 thousands of individual stars resolvable by the naked eye. Bring a warm layer (temperatures drop sharply after midnight) and lie on the dunes 20 minutes away from the campfire.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "\uD83E\uDED6",
                  title: "Mint tea ritual \u2014 three rounds, poured high",
                  desc: "Moroccan mint tea (atay) is served in three small glasses poured from height to create froth. Declining the second or third glass is not offensive, but finishing all three signals appreciation. You will be offered tea constantly \u2014 in shops, at riads, by strangers. Accept it. It is how conversations begin.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83D\uDCB1",
                  title: "Cash is king in the medinas",
                  desc: "Carry MAD for medina shopping, street food, petit taxis, and entry fees. ATMs are plentiful in Marrakech and Fes but scarce in Merzouga and Chefchaouen. Withdraw enough before heading to the desert. The best exchange rates are at banks, not airport counters. MAD is a closed currency \u2014 spend it before you leave.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Morocco" />

          {/* Combine With */}
          <CombineWith currentSlug="morocco-7-days" />

          {/* -- FAQ -- */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Morocco safe for tourists in 2026?",
                  a: "Morocco is generally safe for tourists with standard street awareness. Primary concerns are petty theft in crowded souks and unofficial guides who lead you to shops. Solo female travellers should expect verbal attention in medinas \u2014 rarely threatening but persistent. Dress modestly outside tourist areas. The crime rate against tourists involving violence is very low.",
                },
                {
                  q: "What is the best 7-day route for first-time visitors?",
                  a: "The classic route: Marrakech (2 nights) \u2192 Fes (2 nights) \u2192 Merzouga Sahara (1 night) \u2192 Chefchaouen (1 night) \u2192 departure from Tangier or Fes. The reverse (fly into Tangier, Chefchaouen first, then Fes, Sahara, Marrakech) also works well. Marrakech-first is more common because RAK has better international connections.",
                },
                {
                  q: "Is the Sahara desert worth the long journey?",
                  a: "The journey from Fes is 7\u20138 hours; from Marrakech 9\u201310 hours. Yes \u2014 it is worth it. The Erg Chebbi dunes at Merzouga are the real Sahara: 150m-tall dune fields stretching to the Algerian border. The overnight desert camp under the stars is consistently rated the single most memorable night of a Morocco trip.",
                },
                {
                  q: "Can women travel solo in Morocco?",
                  a: "Yes, and thousands do. Women travelling alone will receive more verbal attention in medinas \u2014 comments, persistent guides. Dressing conservatively (shoulders and knees covered, loose clothing) substantially reduces this. A firm \u2018la shukran\u2019 without eye contact is the standard response. Solo female travellers consistently report that the cultural richness outweighs the hassle.",
                },
                {
                  q: "Do I need a visa for Morocco?",
                  a: "Indian passport holders need an e-Visa ($30, apply online before travel, allow 5\u20137 business days). Citizens of the EU, USA, UK, Canada, Australia and most Western nations enter visa-free for up to 90 days. Your passport must be valid for at least 3 months beyond your departure date.",
                },
                {
                  q: "What is the tipping culture in Morocco?",
                  a: "Tipping is expected. Standard amounts: restaurant bill add 10\u201315%, riad staff 20\u201330 MAD/day ($2\u20133), hammam attendant 30\u201350 MAD, tour guide 100\u2013150 MAD for a half day, camel guide 50\u2013100 MAD, taxi driver round up the fare. Carry small notes (10 and 20 MAD) for tipping.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Morocco trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-morocco", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/morocco-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-morocco", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/morocco-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="morocco-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Istanbul &mdash; 5 Day Guide", href: "/blog/istanbul-5-days" },
                { label: "Dubai &mdash; 4 Day Guide", href: "/blog/dubai-4-days" },
                { label: "Egypt &mdash; 7 Day Itinerary", href: "/blog/egypt-7-days" },
                { label: "Cape Town &mdash; 5 Day Guide", href: "/blog/cape-town-5-days" },
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
