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
const NORWAY_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What the Fjords Actually Are" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "6-Day Itinerary" },
  { id: "landmarks",   emoji: "🏔️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Norway Fjords 6-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Norway Fjords in 6 Days — Bergen, Geirangerfjord, Flåm Railway and the midnight sun&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/norway-fjords-6-days"
        imageUrl="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80"
        description="Norway Fjords in 6 Days: Bergen, Geirangerfjord, Flåm Railway, Nærøyfjord and Preikestolen — complete travel guide with real costs and budget breakdown."
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
export default function NorwayFjordsClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NORWAY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Norway" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="norway fjords bergen geirangerfjord midnight sun scandinavia"
            fallback="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1600&q=80"
            alt="Norway Geirangerfjord with Seven Sisters waterfall and cruise ship at sunrise"
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
              <span className="text-white/70">Norway Fjords 6 Days</span>
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
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Norway in 6 Days:
                <em className="italic text-amber-300"> Bergen, Geirangerfjord &amp; the Fl&#229;m Railway</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Two UNESCO fjords, the world&apos;s most scenic railway, Trolltunga, Preikestolen, and the midnight sun above the Arctic Circle. The complete guide to Norway&apos;s west coast.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="17 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇳🇴 Norway, Scandinavia</span>
              <span>·</span>
              <span>🗓 6 Days</span>
              <span>·</span>
              <span>💰 From NOK 1,000/day (~$95 USD)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Norway&apos;s west coast is where the word &quot;fjord&quot; comes from — and seeing the original is still one of the great experiences in European travel. Six days takes you from Bergen&apos;s wooden wharf through two UNESCO fjords, up the Fl&#229;m Railway through vertiginous mountain scenery, along the Geirangerfjord where the Seven Sisters waterfall drops 250 metres into salt water, and out to &#197;lesund&apos;s Art Nouveau streets above the open Atlantic.
            </p>
          </blockquote>

          {/* ── WHAT THE FJORDS ACTUALLY ARE ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Norwegian Fjords Actually Are</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              A fjord is a long, narrow inlet carved by glaciers during the ice ages, with steep cliff walls on both sides rising directly from the water. Norway has over 1,100 of them, concentrated along the western coastline between Bergen and Troms&#248;. The two most famous — Geirangerfjord and N&#230;r&#248;yfjord — are UNESCO World Heritage Sites, recognised as among the most outstanding natural landscapes on Earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The scale is what photographs cannot convey. N&#230;r&#248;yfjord narrows to 250 metres wide with walls rising 1,700 metres on either side. The Seven Sisters waterfall in Geirangerfjord drops 250 metres in seven separate cascades from abandoned cliff farms that are only accessible by boat. The Fl&#229;m Railway descends 864 metres in 20 kilometres through tunnels, viaducts, and hairpin bends — possibly the most scenic railway journey in Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Norway is expensive — consistently the most costly country in Western Europe for travellers. This guide tells you exactly how to manage the costs without missing anything. The key insight: accommodation and groceries are manageable, but restaurant meals and domestic transport are where the budget breaks. Cook your own meals, book transport early, and the fjords become genuinely accessible.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="BGO / OSL" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Aug" />
              <StatCard icon="🏔️" label="UNESCO Fjords" value="2" />
              <StatCard icon="💰" label="Budget From" value="NOK 1,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Norway&apos;s Fjords</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "15–20°C in the fjord regions, 20+ hours of daylight, midnight sun above the Arctic Circle. All mountain roads open, all fjord ferries running, all hiking trails accessible. July is peak season and the busiest month — book the Fl\u00e5m Railway 3+ months ahead. June and August are slightly quieter with nearly identical conditions.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Dramatic Colours",
                  d: "8–14°C. Birch forests turn gold and amber across the mountainsides. Fewer tourists, lower prices, and dramatic weather. Some mountain roads close by late September. The Fl\u00e5m Railway and major ferries still run. Northern lights begin appearing from late September in northern Norway.",
                  b: "Good shoulder season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Northern Lights",
                  d: "−5 to 5°C in the fjords. Short daylight hours (5–7 hours in Bergen). Many mountain roads closed. Geirangerfjord road closed. However: northern lights from Troms\u00f8 and Lofoten, skiing, and a completely different atmosphere. Bergen and Stavanger remain accessible year-round.",
                  b: "Aurora hunters only",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Waterfalls Peak",
                  d: "5–12°C. Snowmelt feeds the waterfalls to their most dramatic flow. Hardangerfjord fruit orchards blossom in May — cherry and apple trees against the fjord backdrop. Some mountain roads still closed until June. Fewer tourists than summer, good prices.",
                  b: "Waterfall season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Norway&apos;s Fjords</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bergen (BGO) is the gateway to the western fjords — not Oslo. If your goal is the fjords, fly into Bergen. It puts you 2 hours from Hardangerfjord, 3 hours from N&#230;r&#248;yfjord, and within a full day&apos;s reach of Geirangerfjord. Oslo is 400km away and wastes an entire travel day each way.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Bergen (BGO)",
                  d: "Direct flights from London (2.5 hrs), Amsterdam (2 hrs), Copenhagen (1.5 hrs), and Oslo (1 hr). Airlines: Norwegian, SAS, Wideroe. The Flybussen airport bus runs every 15 minutes to the city centre (NOK 139 / $13 USD). The light rail Bybanen takes 45 minutes for NOK 39 ($3.70 USD).",
                  b: "Best for fjords",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Oslo (OSL)",
                  d: "Norway\u0027s main international hub with direct flights from most major cities worldwide. The Flytoget express train reaches Oslo Sentral in 19 minutes (NOK 220 / $21 USD). From Oslo, the Bergen Railway to Bergen takes 7 hours through spectacular mountain scenery — one of Europe\u0027s great train journeys.",
                  b: "Main international hub",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Norway in a Nutshell tour",
                  d: "The classic route combining the Bergen Railway, Fl\u00e5m Railway, N\u00e6r\u00f8yfjord boat, and bus back to Bergen in a self-guided circuit. Available as a one-day or multi-day package from NOK 1,890 ($180 USD). Book at visitflam.com or fjordtours.com. The single best way to experience the western fjords if time is short.",
                  b: "Classic route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Rent a car from Bergen",
                  d: "NOK 900\u20131,400/day ($85\u2013$133 USD) for a standard car. Essential for Geirangerfjord, Trollstigen, and the Atlantic Ocean Road, which are difficult by public transport. Fuel is expensive (NOK 20/litre / $1.90 USD). Most mountain roads open June\u2013October only.",
                  b: "Flexible for remote fjords",
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

          {/* ── 6-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 6-Day Norway Fjords Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary runs Bergen to Oslo via the western fjords — the most logical route for first-time visitors. All prices in NOK with USD equivalents.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Bergen — Bryggen Wharf, Fl&#248;ibanen &amp; Fish Market"
                cost="NOK 500–900 ($48–$86 USD)"
                items={[
                  "Arrive at Bergen Lufthavn (BGO). Take the Flybussen airport bus (NOK 139 / $13 USD, every 15 minutes) or the Bybanen light rail (NOK 39 / $3.70 USD, 45 minutes) to the city centre. Check into your accommodation in the Bryggen or Nordnes area.",
                  "Bryggen UNESCO Wharf — free to walk. The row of 14th-century wooden trading houses along the harbour is one of the most recognisable streetscapes in Scandinavia. The Hanseatic League controlled this wharf for 400 years. Walk behind the main facades into the narrow alleyways where the original workshop structure remains intact.",
                  "Fl\u00f8ibanen funicular (NOK 185 / $18 USD return) — a 6-minute ride to the top of Mount Fl\u00f8yen at 320 metres. The panoramic view over Bergen\u0027s seven mountains and the fjord system is the essential Bergen photograph. Walking trails at the top lead to broader viewpoints through pine forest. Free to walk down.",
                  "Bergen Fish Market (Fisketorget) — free to browse. Eating here is expensive (NOK 160\u2013260 / $15\u2013$25 USD for a smoked salmon sandwich). Better strategy: buy a bag of fresh boiled shrimps (NOK 120 / $11 USD) and eat them on the quayside.",
                  "Budget dinner: buy ingredients at Rema 1000 supermarket (the cheapest chain in Norway) for self-catering. Spaghetti, sauce, and bread will cost NOK 50\u201380 ($5\u2013$8 USD). Norway\u0027s expensive reputation is almost entirely driven by restaurant prices — cook your own meals and the country becomes manageable.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Bergen to Fl&#229;m — Fl&#229;m Railway &amp; N&#230;r&#248;yfjord"
                cost="NOK 1,200–1,800 ($114–$171 USD)"
                items={[
                  "Take the early train from Bergen to Myrdal (NOK 450 / $43 USD, 2 hours). The journey crosses the Hardangervidda plateau at 1,237 metres through snowfields that remain in June.",
                  "Fl\u00e5m Railway (NOK 520 / $49 USD each way, or NOK 910 / $87 USD return) — descends 864 metres in 20km through tunnels, viaducts, and hairpin bends. The Kjosfossen waterfall stop midway is a 5-minute walk in the mist. Sit on the left side descending for the best views. Book at vy.no at least 3 months ahead in summer.",
                  "Fl\u00e5m village — small and heavily touristed, but beautifully placed at the end of the Aurlandsfjord. Lunch at Fl\u00e5msbrygga (soup and bread, NOK 130 / $12 USD) or self-cater from the village shop.",
                  "N\u00e6r\u00f8yfjord boat trip (NOK 290\u2013520 / $28\u2013$49 USD for the Gudvangen service) — UNESCO World Heritage fjord. The narrowest point is 250 metres wide with walls rising 1,700 metres. The silence inside the fjord is total. This is one of the most extraordinary boat journeys in Europe.",
                  "Overnight in Fl\u00e5m: Fretheim Hotel (NOK 1,500\u20132,200 / $143\u2013$209 USD for a double) or the youth hostel (NOK 350\u2013450 / $33\u2013$43 USD for a dorm bed). Book ahead in July — Fl\u00e5m fills up fast.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Stegastein Viewpoint &amp; Drive to Geirangerfjord"
                cost="NOK 800–1,400 ($76–$133 USD)"
                items={[
                  "Stegastein viewpoint — a dramatic cantilevered platform 650 metres above the Aurlandsfjord, free to visit. The 30-metre steel and wood walkway extends over the cliff edge with a glass wall at the end. A 10-minute drive from Fl\u00e5m on the Aurlandsfjellet mountain road. Best at sunrise.",
                  "Drive or take the Nor-Way Bussekspress from Aurland toward Lom and Geiranger (allow 5\u20136 hours by bus with connections). The road over Sognefjellet at 1,434 metres is Norway\u0027s highest mountain pass — open June to October only.",
                  "Alternatively, take the Norway in a Nutshell bus from Gudvangen to Voss, then bus connections northward. The routing depends on the day and season — check entur.no (Norway\u0027s public transport planner) for real-time connections.",
                  "Evening arrival in Geiranger village. Budget accommodation runs NOK 420\u2013730 ($40\u2013$70 USD) per night. This is one of Norway\u0027s most visited sites — book ahead in July and August.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Geirangerfjord — Seven Sisters &amp; Eagle Road"
                cost="NOK 700–1,300 ($67–$124 USD)"
                items={[
                  "Geirangerfjord by tourist boat (NOK 420 / $40 USD return, Fjord Sightseeing) — the most spectacular fjord in Norway, a UNESCO World Heritage Site since 2005. The Seven Sisters waterfall drops 250 metres in seven separate cascades from the abandoned farm of Skagefl\u00e5 (accessible only by boat or a 2-hour climb). The Suitor waterfall across the fjord is the \u0027reply\u0027 — classic Norse humour.",
                  "\u00d8rnesvingen Eagle Road viewpoint — free. The hairpin road out of Geiranger has a purpose-built viewing platform at the top bend. The view back down into the fjord is Norway\u0027s most reproduced landscape photograph.",
                  "Hotel Union Geiranger — the grand hotel above the village since 1891, with a heated outdoor pool overlooking the fjord. Even if you don\u0027t stay here (NOK 2,000\u20133,000 / $190\u2013$286 USD per night), the terrace cafe is worth a visit for the view.",
                  "Pro tip: the Hellesylt\u2013Geiranger car ferry runs from early morning. The first departure (usually 6\u20137am) carries almost no passengers. The fjord at that hour is mist-filled with absolute silence. By 10am the same ferry is packed with tour buses.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="&#197;lesund — Art Nouveau City &amp; Aksla Viewpoint"
                cost="NOK 600–1,100 ($57–$105 USD)"
                items={[
                  "Drive from Geiranger to \u00c5lesund (approximately 1.5 hours). The road crosses mountain tunnels and bridges over the \u00d8rsta fjord.",
                  "\u00c5lesund Art Nouveau architecture — free to walk. The city burned completely in 1904 and was rebuilt entirely in the Art Nouveau (Jugendstil) style by German and Norwegian architects. The result is Europe\u0027s most intact Art Nouveau city. The tourist office has a free walking map of the 23 most significant buildings.",
                  "Aksla viewpoint (418 steps up from the town park — free) — the view from the top over \u00c5lesund\u0027s three islands and the surrounding fjord complex is panoramic. At sunrise in summer (3:45\u20134:30am depending on the month), you will be completely alone with a 360-degree view.",
                  "Jugendstilsenteret (Art Nouveau Centre, NOK 140 / $13 USD) — the museum explains how the entire city was rebuilt in 10 months after the 1904 fire. The architecture is extraordinary and almost entirely unknown outside Scandinavia.",
                  "Overnight in \u00c5lesund: hostels and budget guesthouses NOK 450\u2013650 ($43\u2013$62 USD) for a private room, or mid-range hotels NOK 1,200\u20131,900 ($114\u2013$181 USD).",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Oslo — Vigeland Park, Opera House &amp; Departure"
                cost="NOK 700–1,200 ($67–$114 USD)"
                items={[
                  "Morning flight from \u00c5lesund to Oslo (NOK 500\u2013900 / $48\u2013$86 USD with Norwegian Air, 1 hour) or bus (8 hours, NOK 299 / $28 USD). The flight is worth the cost for a 6-day itinerary.",
                  "Vigeland Sculpture Park (Frognerparken) — free, always open. 200 bronze and granite sculptures by Gustav Vigeland. The Monolith — a 14-metre column of 121 entwined human figures — is one of the stranger works of 20th-century art. Crowds are minimal before 10am.",
                  "Oslo Opera House — walk on the sloped white marble roof for free. Designed by Sn\u00f8hetta architects, opened 2008. The roof walk gives views over the Oslofjord. The interior lobby is free to enter.",
                  "Norwegian Folk Museum (Norsk Folkemuseum, NOK 230 / $22 USD) on the Bygd\u00f8y peninsula — 160 historical buildings including a 12th-century stave church. The open-air section is walkable in 2 hours.",
                  "Farewell meal: grab a r\u00f8d p\u00f8lse (Norwegian hot dog, NOK 35\u201350 / $3\u2013$5 USD) from a street kiosk — the classic Oslo street food — then head to Oslo Gardermoen (OSL) for departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Norway" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Landmark &amp; Fjord Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential fjords, hikes, and viewpoints in order of priority. Prices as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Geirangerfjord (UNESCO)",
                  e: "Boat: NOK 420 ($40 USD) return",
                  d: "UNESCO World Heritage Site since 2005. The Seven Sisters waterfall drops 250 metres in seven cascades from the abandoned cliff farm of Skagefl\u00e5. The fjord is 15km long, flanked by 1,500-metre mountains, and remains one of the most visited natural sites in Norway. Best seen by boat or from the \u00d8rnesvingen Eagle Road viewpoint.",
                  t: "Must see \u00b7 Half day",
                },
                {
                  n: "N\u00e6r\u00f8yfjord (UNESCO)",
                  e: "Boat: NOK 290\u2013520 ($28\u2013$49 USD)",
                  d: "The narrowest fjord in Norway — 250 metres wide at its tightest point with walls rising 1,700 metres. UNESCO World Heritage listed alongside Geirangerfjord. The boat from Fl\u00e5m to Gudvangen is 2 hours of silence and vertical cliffs. One of the most extraordinary boat journeys in the world.",
                  t: "Must see \u00b7 2\u20133 hrs",
                },
                {
                  n: "Trolltunga",
                  e: "Free (hike)",
                  d: "A horizontal rock formation jutting 700 metres above Lake Ringedalsvatnet. The hike is 27km return and takes 10\u201312 hours — a serious full-day commitment requiring good fitness and proper gear. The trailhead is near Odda in the Hardangerfjord region. Open June\u2013September. No entry fee, but a guided tour is recommended for safety (NOK 800\u20131,200 / $76\u2013$114 USD).",
                  t: "Iconic hike \u00b7 10\u201312 hrs",
                },
                {
                  n: "Fl\u00e5m Railway (Fl\u00e5msbana)",
                  e: "NOK 520 ($49 USD) one way",
                  d: "Descends 864 metres in 20km from Myrdal to Fl\u00e5m through 20 tunnels and past the Kjosfossen waterfall. Built between 1924 and 1940, it is one of the steepest standard-gauge railways in the world. Possibly the most scenic railway journey in Europe. Book 3+ months ahead in summer at vy.no.",
                  t: "Must do \u00b7 1 hr each way",
                },
                {
                  n: "Preikestolen (Pulpit Rock)",
                  e: "Free (hike)",
                  d: "A flat-topped cliff 604 metres above Lysefjord near Stavanger. The hike is 8km return and takes approximately 4 hours. One of Norway\u0027s most famous landmarks. The trailhead is at Preikestolen Fjellstue, reachable by bus from Stavanger (NOK 260 / $25 USD return). Best from April to October.",
                  t: "Iconic hike \u00b7 4 hrs",
                },
                {
                  n: "Bryggen Wharf, Bergen",
                  e: "Free",
                  d: "The 14th-century Hanseatic wooden trading houses along Bergen harbour — UNESCO World Heritage Site. The most recognisable streetscape in Scandinavia. Walk behind the facades into the narrow alleyways for the original workshop structure. The Hanseatic Museum (NOK 160 / $15 USD) shows a restored merchant\u0027s house interior.",
                  t: "Must see \u00b7 1\u20132 hrs",
                },
                {
                  n: "Stegastein Viewpoint",
                  e: "Free",
                  d: "A cantilevered steel and wood platform extending 30 metres over the Aurlandsfjord, 650 metres above the water. A 10-minute drive from Fl\u00e5m on the Aurlandsfjellet National Scenic Route. The glass end wall is the only thing between you and a 650-metre drop. Unforgettable at sunrise.",
                  t: "Free viewpoint \u00b7 30 min",
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
            title="Norway — Fjords, Mountains &amp; the Midnight Sun"
            subtitle="The western fjords from Bergen to Geirangerfjord and beyond."
            spots={[
              {
                name: "Geirangerfjord &amp; Seven Sisters",
                query: "geirangerfjord seven sisters waterfall norway unesco fjord cruise",
                desc: "The Seven Sisters waterfall cascading 250 metres into the UNESCO-listed Geirangerfjord — Norway\u0027s most iconic landscape.",
              },
              {
                name: "N\u00e6r\u00f8yfjord",
                query: "nærøyfjord norway unesco narrow fjord boat mountains",
                desc: "The narrowest fjord in Norway — 250 metres wide with 1,700-metre walls rising on either side.",
              },
              {
                name: "Fl\u00e5m Railway",
                query: "flam railway flamsbana norway mountain train scenic kjosfossen",
                desc: "The Fl\u00e5m Railway descending 864 metres through tunnels, viaducts, and the Kjosfossen waterfall.",
              },
              {
                name: "Bergen Bryggen Wharf",
                query: "bryggen wharf bergen norway hanseatic wooden houses harbour",
                desc: "The colourful Hanseatic wooden trading houses of Bryggen — Bergen\u0027s UNESCO World Heritage wharf.",
              },
              {
                name: "Trolltunga",
                query: "trolltunga norway cliff rock formation hiking lake ringedalsvatnet",
                desc: "Trolltunga — the iconic rock ledge jutting 700 metres above Lake Ringedalsvatnet.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Norway is consistently the most expensive country in Western Europe for travellers. But with discipline — self-catering, hostels, early-booked transport — the fjords are genuinely accessible. All prices in NOK with USD equivalents.
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
                    ["🏨 Accommodation", "NOK 350–500 ($33–$48)", "NOK 1,200–2,000 ($114–$190)", "NOK 3,000–6,000 ($286–$571)"],
                    ["🍽 Food (per day)", "NOK 200–350 ($19–$33)", "NOK 500–900 ($48–$86)", "NOK 1,200–3,000 ($114–$286)"],
                    ["🚂 Transport (per day)", "NOK 250–500 ($24–$48)", "NOK 500–1,000 ($48–$95)", "NOK 1,000–4,000 ($95–$381)"],
                    ["🏔️ Activities (per day)", "NOK 200–450 ($19–$43)", "NOK 400–800 ($38–$76)", "NOK 1,500–5,000 ($143–$476)"],
                    ["TOTAL (per day)", "NOK 1,000–1,700 ($95–$162)", "NOK 2,600–4,700 ($248–$448)", "NOK 7,000–20,000+ ($667–$1,905+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (NOK 1,000–1,700/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (Bergen YMCA Hostel from NOK 350/night), self-cater at Rema 1000 or Kiwi supermarkets, take public buses and book early. One restaurant meal per day maximum. Free hikes and viewpoints as your main activities.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (NOK 2,600–4,700/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotels like Fretheim Hotel Fl&#229;m or Thon Hotel &#197;lesund, mix of self-catering and restaurants, the Fl&#229;m Railway, fjord cruises, and a rental car for 2\u20133 days. The sweet spot for comfort without breaking the budget.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (NOK 7,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Union Geiranger, private fjord boat tours, helicopter transfers, Michelin dining in Oslo. Norway at the top end is extraordinarily expensive — but the experiences (private Geirangerfjord cruise, Maaemo 3-star dinner) are world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Norway&apos;s Fjords</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation is the second-biggest cost in Norway after transport. Book ahead in July and August — popular fjord-side hotels sell out months in advance. Hostels and guesthouses are the budget traveller&apos;s lifeline.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Union Geiranger",
                  type: "Grand fjord hotel \u00b7 Geiranger",
                  price: "From NOK 2,000/night ($190 USD)",
                  badge: "Most iconic",
                  desc: "Operating since 1891 above Geirangerfjord. Heated outdoor pool overlooking the UNESCO fjord, spa, and the classic Norwegian grand hotel atmosphere. The terrace view at sunset is one of the most photographed hotel views in Scandinavia. Book 3\u20134 months ahead for July.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Fretheim Hotel",
                  type: "Historic timber hotel \u00b7 Fl\u00e5m",
                  price: "From NOK 1,500/night ($143 USD)",
                  badge: "Best in Fl\u00e5m",
                  desc: "A 19th-century timber hotel at the end of the Aurlandsfjord in Fl\u00e5m village. Fjord-view rooms, on-site restaurant, and walking distance to the Fl\u00e5m Railway station. The benchmark for mid-range fjord accommodation. Historic wing has more character than the modern extension.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Bergen YMCA Hostel",
                  type: "Budget hostel \u00b7 Bergen city centre",
                  price: "From NOK 350/night ($33 USD)",
                  badge: "Best budget",
                  desc: "Clean, central, and well-run hostel a 5-minute walk from Bryggen. Dorm beds from NOK 350, private rooms from NOK 800. Kitchen facilities for self-catering — essential for budget travel in Bergen. The single best value accommodation in Norway\u0027s most expensive city.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Brosundet Hotel",
                  type: "Boutique \u00b7 \u00c5lesund",
                  price: "From NOK 2,500/night ($238 USD)",
                  badge: "Most distinctive",
                  desc: "A converted warehouse on the Brosundet canal in the centre of \u00c5lesund\u0027s Art Nouveau district. Probably Norway\u0027s most architecturally distinctive boutique hotel. The canal-side rooms look directly over the water to the Jugendstil facades.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Norway</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Restaurant meals in Norway are among the most expensive in Europe — expect NOK 250\u2013400 ($24\u2013$38 USD) for a main course at a mid-range restaurant. The budget strategy: self-cater breakfast and lunch at Rema 1000 or Kiwi, then allow one restaurant dinner per day.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bryggeloftet &amp; Stuene",
                  t: "Traditional Norwegian \u00b7 Bergen Bryggen",
                  d: "Bergen\u0027s most atmospheric restaurant, inside a 17th-century Bryggen building. The fish soup (fiskesuppe) is legendary — NOK 195 ($19 USD) for a bowl that is a meal in itself. Traditional Bergen seafood including klippfisk (salt cod) and fresh catches. Mains NOK 280\u2013450 ($27\u2013$43 USD). Reserve for dinner in summer.",
                  b: "Best fish soup",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Pingvinen Gastropub",
                  t: "Norwegian home cooking \u00b7 Bergen N\u00f8stet",
                  d: "Traditional Norwegian home-cooked meals in Bergen\u0027s most local neighbourhood. Meatballs (kj\u00f8ttkaker), fish soup, lamb stew, and the daily husmannskost specials. NOK 200\u2013320 ($19\u2013$30 USD). The most authentically Norwegian dining experience in Bergen — where locals actually eat.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "\u00c6gir Bryggeri",
                  t: "Viking brewpub \u00b7 Fl\u00e5m",
                  d: "A craft brewery in Fl\u00e5m village designed as a Nordic longhouse — remarkable architecture for a microbrewery. Locally brewed Viking-themed beers and a three-course dinner menu (NOK 650 / $62 USD). The interiors alone are worth a visit even if you only have a beer (NOK 95 / $9 USD).",
                  b: "Most unique",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Rema 1000 / Kiwi (self-catering)",
                  t: "Supermarket chain \u00b7 Nationwide",
                  d: "The budget traveller\u0027s best friend in Norway. Rema 1000 and Kiwi are the two cheapest supermarket chains. A full day of self-catered meals (bread, cheese, salami, fruit, pasta) costs NOK 100\u2013180 ($10\u2013$17 USD) — compared to NOK 600+ for three restaurant meals. Every town has at least one.",
                  b: "Essential for budget",
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
            destination="Norway Fjords"
            hotels={[
              {
                name: "Hotel Union Geiranger",
                type: "Grand fjord hotel \u00b7 Since 1891",
                price: "From NOK 2,000/night ($190 USD)",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/no/union-geiranger.html?aid=2820480",
              },
              {
                name: "Fretheim Hotel Fl\u00e5m",
                type: "Historic timber hotel \u00b7 Fjord views",
                price: "From NOK 1,500/night ($143 USD)",
                rating: "4",
                badge: "Best in Fl\u00e5m",
                url: "https://www.booking.com/hotel/no/fretheim.html?aid=2820480",
              },
              {
                name: "Bergen YMCA Hostel",
                type: "Budget hostel \u00b7 Central Bergen",
                price: "From NOK 350/night ($33 USD)",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/no/bergen-ymca-hostel.html?aid=2820480",
              },
              {
                name: "Brosundet Hotel \u00c5lesund",
                type: "Boutique \u00b7 Art Nouveau canal",
                price: "From NOK 2,500/night ($238 USD)",
                rating: "5",
                badge: "Most distinctive",
                url: "https://www.booking.com/hotel/no/brosundet.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Norway in a Nutshell Tour",
                duration: "Full day",
                price: "From NOK 1,890 ($180 USD)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=norway+in+a+nutshell&partner_id=PSZA5UI",
              },
              {
                name: "Geirangerfjord Sightseeing Cruise",
                duration: "1.5 hrs",
                price: "From NOK 420 ($40 USD)",
                badge: "UNESCO fjord",
                url: "https://www.getyourguide.com/s/?q=geirangerfjord+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Fl\u00e5m Railway Ticket",
                duration: "1 hr each way",
                price: "From NOK 520 ($49 USD)",
                url: "https://www.getyourguide.com/s/?q=flam+railway&partner_id=PSZA5UI",
              },
              {
                name: "Bergen Fjord &amp; City Walking Tour",
                duration: "3 hrs",
                price: "From NOK 350 ($33 USD)",
                url: "https://www.getyourguide.com/s/?q=bergen+fjord+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "☔",
                  title: "Expecting warm summer weather in the fjords",
                  desc: "Bergen has 232 days of rain per year — more than any other city in Western Europe. Summer means 16\u201320\u00b0C and a 40% chance of rain on any given day. Always bring a waterproof jacket and trousers, even in July. The fjord areas create their own weather: mist, sudden showers, and cold descend from the mountains within minutes. A cheap poncho is not enough.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏙️",
                  title: "Using Oslo as your fjords base",
                  desc: "Oslo is 400km from Bergen and 500km from Geirangerfjord. If your goal is the fjords, fly into Bergen (BGO) and base there — it puts you 2 hours from Hardangerfjord, 3 hours from N\u00e6r\u00f8yfjord, and within range of Geiranger in a full day. Using Oslo as a base wastes a full day each way. Visit Oslo on the final day before flying home.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at restaurants every meal",
                  desc: "Norway is consistently the most expensive country in Europe for food. A sit-down lunch in Bergen costs NOK 210\u2013320 ($20\u2013$30 USD). Dinner at a mid-range restaurant is NOK 420\u2013630 ($40\u2013$60 USD) per person. The budget hack: buy groceries at Rema 1000, Kiwi, or Lidl for breakfast and lunch, eat one restaurant dinner per day. This single change can cut your food costs from NOK 840/day to NOK 320/day.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚂",
                  title: "Not booking the Fl\u00e5m Railway in advance",
                  desc: "The Fl\u00e5m Railway sells out weeks ahead in July and August. If you arrive hoping to buy a same-day ticket in peak summer, you will likely be turned away. Book at vy.no the moment you know your dates. The afternoon departure (2\u20133pm from Myrdal) catches the best mountain light. Sit on the left side descending for the Kjosfossen waterfall view.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Norway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚤",
                  title: "Geirangerfjord ferry at 6am — empty boat, misty fjord",
                  desc: "The Hellesylt\u2013Geiranger car ferry\u0027s first departure (usually 6\u20137am) carries almost no passengers — mostly locals, no tour groups. The fjord at this hour is mist-filled with waterfalls visible through cloud and absolute silence. By 10am the same ferry is packed. Arrive at Hellesylt the evening before.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "\u00c5lesund sunrise from Aksla — 25 minutes before anyone wakes",
                  desc: "The 418 steps from Byparken to the Aksla summit take 20\u201325 minutes. At sunrise in summer (3:45\u20134:30am), you will be completely alone at the top with a 360-degree view over \u00c5lesund\u0027s seven islands, the fjord complex, and on clear days the Sunnm\u00f8rsalpene mountains. Norway at its quietest and most beautiful.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🛒",
                  title: "Self-cater at Rema 1000 — cut food costs by 60%",
                  desc: "Rema 1000 and Kiwi are Norway\u0027s cheapest supermarket chains, found in every town. A full day of self-catered meals (bread, brown cheese, salami, fruit, pasta) costs NOK 100\u2013180 ($10\u2013$17 USD). Three restaurant meals cost NOK 600+. Self-cater two meals a day and allow one restaurant dinner — this is the single biggest budget hack in Norway.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎫",
                  title: "Bergen Card saves money on 3+ sites per day",
                  desc: "The Bergen Card (NOK 399/24h or NOK 549/48h) covers all local buses, the Fl\u00f8ibanen funicular, most museums, and the airport bus. If you\u0027re visiting 3+ sites in a day, it pays for itself. Available at the tourist office on Bryggen or online at visitbergen.com.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "☔",
                  title: "Pack proper waterproofs, not a poncho",
                  desc: "Bergen averages 232 rain days per year. The fjord regions create their own microclimate — mist and rain appear from nowhere. A proper waterproof jacket and trousers (Gore-Tex or similar) are essential even in July. Ponchos blow off in the wind and leave your legs soaked. Layer with merino wool underneath.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "😴",
                  title: "Bring a sleep mask — the midnight sun is real",
                  desc: "In Bergen the sun sets at 11:30pm in late June and rises again at 3:30am — 20 hours of daylight. Your body clock will lose its reference points within 2 days. A proper sleep mask (not the flimsy airline type) is essential. Blackout curtains in Norwegian hotels are hit-or-miss. This is the number one thing travellers forget to pack.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Norway" />

          {/* Combine With */}
          <CombineWith currentSlug="norway-fjords-6-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is a NOK 1,000/day ($95 USD) budget realistic for Norway?",
                  a: "Yes, but it requires discipline. Stay in hostels or budget guesthouses (NOK 350\u2013500/night), self-cater at least 2 meals per day using Rema 1000 or Kiwi supermarkets, take public buses and avoid taxis, and choose free activities (fjord walks, city strolling, viewpoints) over every paid attraction. The Bergen Card at NOK 399\u2013549 covers most museums and transport. With these habits, NOK 1,000/day is achievable \u2014 tight, but real.",
                },
                {
                  q: "Do I need a Schengen visa for Norway?",
                  a: "Indian passport holders need a Schengen short-stay C visa \u2014 apply through VFS Global Norway. Fee: \u20ac80. Processing: 15\u201345 days. Book appointments 5\u20136 weeks ahead in summer. US, UK, Canadian, and Australian passport holders enter visa-free for up to 90 days within any 180-day Schengen period. From 2025, all visa-exempt travellers need ETIAS pre-travel authorisation (\u20ac7, valid 3 years).",
                },
                {
                  q: "What is the midnight sun like in Norway?",
                  a: "In Bergen, the sun sets at 11:30pm in late June and rises at 3:30am \u2014 20 hours of daylight. Above the Arctic Circle (Troms\u00f8), there is no sunset at all from May 20 to July 22. The evening light quality is extraordinary \u2014 a perpetual golden hour from 9pm to midnight. Your body clock loses its reference points within 2 days; a proper sleep mask is essential.",
                },
                {
                  q: "Can you see the northern lights from Bergen?",
                  a: "Bergen is at latitude 60\u00b0N \u2014 on the lower edge of northern lights territory. The aurora is visible approximately 20\u201330 nights per year during winter (September\u2013March), requiring a KP index of 4+ at this latitude. Troms\u00f8 (69\u00b0N) is the better base for guaranteed sightings. From Bergen, drive an hour east toward Voss for darker skies. Check yr.no for forecasts.",
                },
                {
                  q: "Should I rent a car or use public transport?",
                  a: "It depends on your route. Bergen, Fl\u00e5m, and the N\u00e6r\u00f8yfjord are well-served by trains, buses, and ferries \u2014 a car is unnecessary. For Geirangerfjord, Trollstigen, and the Atlantic Ocean Road, a car is almost essential as public transport connections are limited and infrequent. A good compromise: use public transport for Bergen\u2013Fl\u00e5m\u2013N\u00e6r\u00f8yfjord, then rent a car for 2\u20133 days for the Geiranger\u2013\u00c5lesund stretch.",
                },
                {
                  q: "Norway vs Iceland \u2014 which is better for a first trip?",
                  a: "Different experiences. Norway is about fjords \u2014 vertical green walls, boat trips, mountain roads, charming fishing villages, and Europe\u0027s best hiking. Iceland is geological drama \u2014 volcanoes, glaciers, geysers, and black sand beaches. Norway is greener and more culturally rich; Iceland is rawer and more otherworldly. Both are expensive. If you can only choose one for a first trip: Norway is more accessible and has more cultural variety. Iceland wins for unique landscapes.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Norway trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-norway", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/norway-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-norway", label: "How to get there", icon: "✈️" },
                { href: "/blog/norway-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="norway-fjords-6-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Scandinavia &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Iceland in 7 Days — Ring Road &amp; Beyond", href: "/blog/iceland-7-days" },
                { label: "Copenhagen 3 Days — Design &amp; Hygge", href: "/blog/copenhagen-3-days" },
                { label: "Amsterdam 4 Days — Canals &amp; Culture", href: "/blog/amsterdam-4-days" },
                { label: "Paris 5 Days — Art, Food &amp; History", href: "/blog/paris-5-days" },
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
