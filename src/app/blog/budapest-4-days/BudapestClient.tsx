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
const BUDAPEST_TOC = [
  { id: "honest",     emoji: "\u26A1",  label: "What Budapest Actually Is" },
  { id: "season",     emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "\uD83C\uDFDB\uFE0F", label: "Landmark Guide" },
  { id: "budget",     emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",        emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "mistakes",   emoji: "\u274C",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753",  label: "FAQ" },
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
          href: `mailto:?subject=Budapest 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Budapest in 4 Days — thermal baths, ruin bars and the complete itinerary&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/budapest-4-days"
        imageUrl="https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80"
        description="Budapest in 4 Days: Szechenyi Baths, ruin bars, Parliament, Fisherman's Bastion, Great Market Hall and the Danube — complete travel guide with budget breakdown."
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
export default function BudapestClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BUDAPEST_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Budapest" />

      <main className="bg-cream min-h-screen">

        {/* -- HERO -- */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="budapest parliament hungary danube night lights"
            fallback="https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1600&q=80"
            alt="Budapest Parliament Building illuminated at night reflected in the Danube river Hungary"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Budapest 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Thermal Baths &amp; Ruin Bars
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Budapest in 4 Days:
                <em className="italic text-amber-300"> Thermal Baths, Ruin Bars &amp; the Danube</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Szechenyi Baths with chess on floating boards, ruin bars in crumbling Austro-Hungarian palaces, the most decorative Parliament in Europe, and enough goulash to last a lifetime. The complete guide with real timings, costs in HUF &amp; USD, and the mistakes that ruin most Budapest trips.
              </p>
            </div>
          </div>
        </div>

        {/* -- ARTICLE -- */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDED\uD83C\uDDFA"} Hungary</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From 15,000 HUF/day (~$38)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Budapest at night from Castle Hill &mdash; the Parliament Building blazing white gold across the Danube, the Chain Bridge strung with lights between two hills, the river running black below &mdash; is one of the great urban views on earth. Four days gives you thermal baths, ruin bars, and enough paprika-dusted goulash to last you until your next trip back.
            </p>
          </blockquote>

          {/* -- WHAT BUDAPEST ACTUALLY IS -- */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Budapest Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Budapest is two cities divided by the Danube. Buda on the west bank is hilly, residential and historic &mdash; Castle Hill, Fisherman&apos;s Bastion, the old Royal Palace, and quiet cobbled streets. Pest on the east bank is flat, grand and alive &mdash; the Parliament, ruin bars, the Jewish Quarter, Art Nouveau boulevards and most of the restaurants and nightlife. The two halves were separate cities until they merged in 1873.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city sits atop more than 120 natural thermal springs &mdash; it has been a spa city since the Romans built baths here 2,000 years ago. The Ottoman Turks expanded the bathing culture in the 16th century, and the Austro-Hungarian era built the grand neo-Baroque and Art Nouveau bathhouses you see today. Thermal bathing is not a tourist attraction in Budapest; it is a daily habit for tens of thousands of locals.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the sweet spot. You can cover both sides of the river, soak in at least two thermal baths, explore the ruin bars at their best, tour the Parliament interior, eat your way through the Great Market Hall, and still have time for a Danube sunset from Gellert Hill.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="BUD (Ferenc Liszt)" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Apr\u2013Jun, Sep\u2013Oct" />
              <StatCard icon={"\uD83C\uDFDB\uFE0F"} label="Thermal Springs" value="120+" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="15,000 HUF/day" />
            </div>
          </section>

          {/* -- BEST TIME TO VISIT -- */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Budapest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013Jun",
                  i: "\u2600\uFE0F",
                  t: "Spring \u2014 Best Overall",
                  d: "15\u201328\u00B0C with long sunny days. Cherry blossoms on Margaret Island in April, outdoor terraces open, thermal baths are warm without the summer heat. May and June are the ideal months \u2014 perfect weather, reasonable prices, and the city fully alive after winter.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul\u2013Aug",
                  i: "\uD83C\uDF05",
                  t: "Summer \u2014 Hot & Busy",
                  d: "28\u201336\u00B0C, occasionally hitting 38\u00B0C. Very warm, crowded at the baths and Castle Hill, but Budapest\u2019s outdoor pools and riverside terraces come alive. Szechenyi\u2019s outdoor pools are packed. Sziget Festival in August brings 500,000+ visitors. Book well ahead.",
                  b: "Festival season, hottest",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\uD83C\uDF42",
                  t: "Autumn \u2014 Excellent Value",
                  d: "14\u201326\u00B0C with golden light. September is still warm enough for outdoor baths, Margaret Island turns golden, and summer crowds have left. October cools rapidly but the wine harvest makes this the best time for foodies. Eger\u2019s wine cellars are at their liveliest.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov\u2013Mar",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Cold but Atmospheric",
                  d: "0\u201310\u00B0C, grey skies, short days. The thermal baths become genuinely magical \u2014 steam rising from the outdoor pools at Szechenyi in the cold is iconic. The Christmas market on Vorosmarty Square (mid-November to late December) is one of Central Europe\u2019s finest. Hotel prices drop 30\u201350%.",
                  b: "Christmas market, cheapest",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Budapest</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Budapest Ferenc Liszt International Airport (BUD) is 16km southeast of the city centre. The 100E airport bus runs every 20 minutes directly to Deak Ferenc ter in the centre for 2,200 HUF (~$6). A taxi to the centre costs 9,000&ndash;12,000 HUF (~$24&ndash;32). <strong className="font-medium">Indian passport holders need a Schengen visa (apply 6+ weeks ahead).</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "From India",
                  d: "No direct flights as of 2026. Best connections via Istanbul (Turkish Airlines, 5+3 hrs), Dubai (Emirates/FlyDubai, 5+4 hrs), Frankfurt or Munich (Lufthansa, 8+2 hrs). Wizz Air flies from Abu Dhabi to Budapest with connections from Indian cities. Round-trip from Delhi or Mumbai typically costs \u20B940,000\u2013\u20B975,000 if booked 2\u20133 months ahead.",
                  b: "Via Istanbul/Dubai",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\u2708\uFE0F",
                  t: "From Europe",
                  d: "Wizz Air and Ryanair connect Budapest to most European cities for \u20AC15\u2013\u20AC80 one-way. Direct flights from London (2.5 hrs), Paris (2.5 hrs), Rome (2 hrs), and Berlin (1.5 hrs). Vienna is only 2h40 by train (RegioJet or OBB, \u20AC15\u2013\u20AC25 booked ahead) and many travellers combine the two cities.",
                  b: "Cheapest routes",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE87",
                  t: "Metro, Tram & Transport",
                  d: "Budapest has 4 metro lines, an extensive tram network (tram 2 along the Danube is the most scenic public transport ride in Europe), and buses. A 72-hour travel card costs 5,500 HUF (~$15) and covers everything. The M1 metro line, built in 1896, is the oldest on the European continent. Validate your ticket \u2014 inspectors are common and the fine is 16,000 HUF (~$43).",
                  b: "72-hour pass: 5,500 HUF",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE95",
                  t: "Airport to City Centre",
                  d: "100E airport bus: 2,200 HUF (~$6), runs every 20 min, takes 35 min to Deak ter. Taxi: fixed zone fare 9,000\u201312,000 HUF (~$24\u201332) \u2014 use only the official Fotaxi stand outside arrivals. Bolt and Uber are available and usually cheaper at 6,000\u20139,000 HUF (~$16\u201324). Private hotel transfers cost \u20AC30\u201350.",
                  b: "100E bus is best value",
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

          {/* -- 4-DAY ITINERARY -- */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 4-Day Budapest Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (~15,000&ndash;25,000 HUF/day, ~$38&ndash;65). Each day card is expandable. The route covers Buda (Castle Hill, Gellert Hill) and Pest (Parliament, ruin bars, Great Market Hall, thermal baths). All costs in Hungarian Forint (HUF) and USD at ~390 HUF = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Buda Castle Hill, Fisherman's Bastion & the Danube"
                cost="8,000\u201312,000 HUF (~$20\u201330) excluding accommodation"
                items={[
                  "9:00am \u2014 Castle Hill: walk up via the stairways from Clark Adam ter (free) or take the funicular (~800 HUF / ~$2). The hilltop promenade overlooking Pest and the Danube is one of Europe\u2019s great free viewpoints. The Buda Castle complex houses the Hungarian National Gallery and Budapest History Museum \u2014 entry to each ~3,000 HUF (~$8).",
                  "10:30am \u2014 Matthias Church (Matyas-templom): the 13th-century Gothic church with its famous multicolored Zsolnay tile roof. Entry: ~1,800 HUF (~$5). The interior with neo-Gothic frescoes covering every surface is genuinely extraordinary.",
                  "11:30am \u2014 Fisherman\u2019s Bastion (Halaszbastya): the fairy-tale neo-Romanesque terrace built 1895\u20131902 with seven towers representing the seven Magyar chieftains. Lower terrace is free; upper walkway ~1,500 HUF (~$4). The view across the Danube to Parliament is one of the most photographed in Europe.",
                  "1:00pm \u2014 Lunch: descend to Buda\u2019s Vizivaros neighbourhood for better value than the Castle District restaurants. A bowl of gulyas (goulash) at a local etkezde costs 1,200\u20132,000 HUF (~$3\u20135).",
                  "3:00pm \u2014 Chain Bridge walk (Szechenyi Lanchid): the first permanent bridge across the Danube in Budapest, completed 1849. The 10-minute walk is free and the bridge is one of the most beautiful in Europe.",
                  "5:30pm \u2014 Parliament Building exterior: 268 metres long, third-largest parliament building in the world, completed 1902. The exterior is most spectacular at dusk and after dark when fully illuminated. Always free to view from outside.",
                  "8:00pm \u2014 Dinner in the Jewish Quarter (7th district): a full Hungarian meal \u2014 goulash, porkolt (meat stew), stuffed cabbage \u2014 at a local vendegl\u0151 costs 2,500\u20134,500 HUF (~$6\u201312).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sz\u00E9chenyi Baths, Heroes' Square & Great Market Hall"
                cost="12,000\u201318,000 HUF (~$30\u201345) excluding accommodation"
                items={[
                  "9:00am \u2014 Szechenyi Thermal Baths: Budapest\u2019s largest and most famous public bath complex, opened 1913, in a neo-Baroque building in City Park. Entry including all 18 pools: 8,200\u20139,800 HUF (~$21\u201325). Bring your own swimsuit. Arrive when it opens to avoid the worst crowds.",
                  "11:30am \u2014 The famous chess players on floating boards in Szechenyi\u2019s outdoor thermal pool at 38\u00B0C is the quintessential Budapest experience. Give yourself a full 2\u20133 hours in the baths.",
                  "1:30pm \u2014 Heroes\u2019 Square (H\u0151sok tere): just outside the baths, this UNESCO-listed millennium monument was built in 1896. The 36-metre central column topped by the Archangel Gabriel is imposing and completely free.",
                  "2:30pm \u2014 Vajdahunyad Castle (free): the extraordinary architectural folly in City Park displaying every major Hungarian architectural style from Romanesque to Baroque. Built for the 1896 millennium exhibition and made permanent due to popularity.",
                  "4:00pm \u2014 Great Market Hall (Kozponti Vasarcsarnok): Budapest\u2019s largest covered market, built 1897. Entry free. Ground floor: Hungarian salami, paprika, pickles. First floor: food counters serving langos (deep-fried dough with sour cream and cheese, 1,000\u20131,500 HUF / ~$3\u20134) \u2014 the essential Budapest street food.",
                  "6:00pm \u2014 Vaci Street walk: Budapest\u2019s main pedestrian street connecting the market to the centre. Touristy but architecturally rich.",
                  "8:00pm \u2014 Dinner at a neighbourhood etkezde in the 7th or 8th district: porkolt, toltott kaposzta (stuffed cabbage), halaszle (fisherman\u2019s soup) for 2,000\u20133,500 HUF (~$5\u20139).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Jewish Quarter, Ruin Bars & the Opera"
                cost="10,000\u201316,000 HUF (~$25\u201340) excluding accommodation"
                items={[
                  "10:00am \u2014 Great Synagogue (Dohany Street): the largest synagogue in Europe and second-largest in the world, seating 3,000, built 1854\u201359 in Moorish-Byzantine style. Entry: ~6,500 HUF (~$17). The attached Jewish Museum and Memorial Garden (weeping willow memorial by Imre Varga) make for an emotionally significant visit.",
                  "12:30pm \u2014 Jewish Quarter lunch: Kazinczy Street has excellent vendors. Budget 2,500\u20134,500 HUF (~$6\u201312) for a proper meal in the 7th district.",
                  "2:00pm \u2014 Ruin bars daytime exploration: built in abandoned buildings and courtyards left to decay after WW2 and the Communist era, these are one of Europe\u2019s most culturally distinctive experiences. Szimpla Kert on Kazinczy Street is the original and most architecturally interesting \u2014 in the afternoon you can walk through the courtyards and appreciate the installations.",
                  "3:30pm \u2014 Hungarian State Opera House (Magyar Allami Operahaz): the ornate 1884 neo-Renaissance building on Andrassy Avenue. Guided interior tours: ~4,500 HUF (~$12). Evening performance tickets range from 3,000 HUF standing (~$8) to 23,000 HUF+ (~$60) for premium seats.",
                  "5:00pm \u2014 Andrassy Avenue: Budapest\u2019s UNESCO-listed grand boulevard lined with neo-Renaissance palaces. The House of Terror at No. 60 \u2014 former headquarters of both the fascist Arrow Cross and Communist secret police \u2014 is the most sobering museum in Budapest. Entry ~4,000 HUF (~$10).",
                  "8:00pm \u2014 Evening in the ruin bars: Szimpla Kert is at its best 8\u201310pm. Fogas Haz and Instant are nearby. Craft beers from Hungarian microbreweries cost 1,200\u20131,800 HUF (~$3\u20135). The ruin bar scene is genuinely unique to Budapest.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Margaret Island, Gell\u00E9rt Hill & Farewell Goulash"
                cost="8,000\u201316,000 HUF (~$20\u201340) excluding accommodation"
                items={[
                  "9:00am \u2014 Margaret Island (Margit-sziget): a 2.5km island in the middle of the Danube. Completely free. Ruins of a 13th-century Dominican convent, a musical fountain, thermal springs, and a Japanese garden. Rent a bicycle (800 HUF/hour, ~$2) to explore the full length.",
                  "11:00am \u2014 Gellert Hill and Citadella: the steep hill rising 235 metres above the Danube on the Buda side, topped by the Liberty Statue and 19th-century fortress. The climb takes 20\u201330 minutes and is free. The panoramic view over both banks of the Danube, every bridge, Parliament and Castle Hill is the best in the city.",
                  "1:00pm \u2014 Gellert Thermal Baths (optional): the Art Nouveau bath in the Gellert Hotel on the Buda embankment. Entry ~8,500\u201310,000 HUF (~$22\u201326). The indoor main pool with its ornate mosaic, vaulted glass ceiling and lion-head fountains is the most architecturally beautiful bath in Budapest. Alternative: Rudas Baths (Turkish, 16th century, rooftop pool with Danube views, ~8,000\u20139,500 HUF / ~$20\u201324).",
                  "3:00pm \u2014 Liberty Bridge (Szabadsag hid): the beautifully ornate 1896 Art Nouveau bridge with turquoise-painted iron and gilded mythological birds. Walking across and back takes 15 minutes and is free.",
                  "5:00pm \u2014 Balna Budapest (the Whale): a modern glass building on the Pest embankment housing a cultural centre, design shops, and a cafe with Danube and Buda views. Good for a final coffee.",
                  "7:30pm \u2014 Farewell dinner: order goulash (gulyas) properly \u2014 it should be a rich, paprika-red beef and vegetable soup, not the thick stew tourist restaurants serve. Kispipa on Akacfa Street is a local favourite at ~6,000\u20138,000 HUF (~$15\u201320) per person.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Budapest" onPlanTrip={() => setModalOpen(true)} />

          {/* -- LANDMARK GUIDE -- */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and cultural sites in order of priority. Entry fees are as of early 2026 in Hungarian Forint (HUF) and USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hungarian Parliament Building (Orszaghaz)",
                  e: "~9,000 HUF (~$23) guided tour",
                  d: "The third-largest parliament building in the world, completed 1902, designed by Imre Steindl. The guided interior tour includes the monumental staircase, the Dome Hall housing the Holy Crown of Hungary (the medieval Crown of St Stephen), and ornate committee rooms. One of the most lavishly decorated interiors in Europe. Book tickets online at jfrfrflsst.hu to avoid queues.",
                  t: "Must see \u00B7 Interior tour \u00B7 1.5 hrs",
                },
                {
                  n: "Szechenyi Thermal Baths",
                  e: "8,200\u20139,800 HUF (~$21\u201325)",
                  d: "Budapest\u2019s largest public bath complex, opened 1913 in a neo-Baroque building in City Park. 18 pools including the famous outdoor thermal pool at 38\u00B0C where chess players sit on floating boards. The quintessential Budapest experience. Arrive at 9am opening to beat the crowds. Open daily until 10pm.",
                  t: "Must see \u00B7 Half day \u00B7 2\u20133 hrs",
                },
                {
                  n: "Fisherman\u2019s Bastion & Matthias Church",
                  e: "Free (lower) / 1,500 HUF (~$4 upper) + 1,800 HUF (~$5 church)",
                  d: "The fairy-tale neo-Romanesque terrace with seven towers offering the most photographed view in Budapest \u2014 across the Danube to the Parliament. Matthias Church next door has a multicoloured Zsolnay tile roof and extraordinary neo-Gothic frescoes inside. Best visited in early morning or at night when the Parliament is illuminated across the river.",
                  t: "Must see \u00B7 Viewpoint \u00B7 1.5 hrs",
                },
                {
                  n: "Buda Castle (Royal Palace)",
                  e: "Free (grounds) / ~3,000 HUF (~$8 per museum)",
                  d: "The hilltop castle complex overlooking the Danube, housing the Hungarian National Gallery and Budapest History Museum. The promenade around the palace offers spectacular free views of Pest. The castle itself has been besieged eight times and rebuilt repeatedly \u2014 the current form is largely 18th-century Baroque and post-WW2 reconstruction.",
                  t: "Must see \u00B7 Free grounds \u00B7 2 hrs",
                },
                {
                  n: "Great Market Hall (Kozponti Vasarcsarnok)",
                  e: "Free entry",
                  d: "Budapest\u2019s largest and most beautiful covered market, built 1897. Ground floor: Hungarian salami, paprika in every variety, pickled vegetables, fresh produce. First floor: food counters serving langos and other street food. The basement has the best selection of pantry souvenirs. Open Monday\u2013Saturday, closed Sunday.",
                  t: "Must see \u00B7 Free \u00B7 1\u20132 hrs",
                },
                {
                  n: "Szimpla Kert & the Ruin Bars",
                  e: "Free entry",
                  d: "The original ruin bar, open since 2002 in an abandoned Austro-Hungarian building on Kazinczy Street. Mismatched furniture, local art installations, and craft beers from Hungarian microbreweries. Opens around 12pm for coffee and food; best as a bar 8\u201310pm before it becomes a club. Instant and Fogas Haz are nearby alternatives.",
                  t: "Must see \u00B7 Free \u00B7 Evening",
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
            title="Budapest &mdash; Baths, Bridges &amp; the Danube"
            subtitle="A city of 120 thermal springs, crumbling palaces turned ruin bars, and one of Europe&apos;s most dramatic river skylines."
            spots={[
              {
                name: "Parliament Building at Night",
                query: "budapest parliament building danube night illuminated reflection",
                desc: "The Hungarian Parliament blazing white gold across the Danube at night \u2014 one of the finest urban views in Europe.",
              },
              {
                name: "Szechenyi Thermal Baths",
                query: "szechenyi thermal baths budapest outdoor pool neo baroque steam",
                desc: "The iconic outdoor thermal pool at 38\u00B0C in the neo-Baroque Szechenyi complex \u2014 chess players on floating boards and steam rising in winter.",
              },
              {
                name: "Fisherman\u2019s Bastion",
                query: "fishermans bastion budapest danube parliament view fairy tale towers",
                desc: "The fairy-tale neo-Romanesque terrace with seven towers overlooking the Danube and Parliament.",
              },
              {
                name: "Ruin Bars \u2014 Szimpla Kert",
                query: "szimpla kert ruin bar budapest interior eclectic furniture art",
                desc: "Budapest\u2019s original ruin bar \u2014 an abandoned Austro-Hungarian building filled with art, mismatched furniture and craft beer.",
              },
              {
                name: "Chain Bridge & Buda Castle",
                query: "chain bridge budapest buda castle danube evening lights",
                desc: "The first permanent bridge across the Danube in Budapest, with Buda Castle rising behind it on the hill.",
              },
            ]}
          />

          {/* -- BUDGET BREAKDOWN -- */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Budapest is one of Central Europe&apos;s most affordable capitals. Budget travellers can live excellently on 15,000&ndash;25,000 HUF/day (~$38&ndash;65), mid-range on 47,000&ndash;78,000 HUF/day (~$120&ndash;200), and luxury on 120,000+ HUF/day (~$300+). All prices in Hungarian Forint (HUF) and USD at ~390 HUF = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (4 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "20,000\u201340,000 HUF ($50\u2013100)", "100,000\u2013200,000 HUF ($260\u2013520)", "400,000\u20131,200,000 HUF ($1,025\u2013$3,080)"],
                    ["\uD83C\uDF7D Food & Drinks", "12,000\u201320,000 HUF ($30\u201350)", "35,000\u201360,000 HUF ($90\u2013155)", "100,000\u2013300,000 HUF ($260\u2013$770)"],
                    ["\uD83D\uDE8C Transport", "5,500\u201310,000 HUF ($14\u201326)", "12,000\u201320,000 HUF ($30\u201350)", "40,000\u201380,000 HUF ($100\u2013$205)"],
                    ["\uD83C\uDFAF Activities", "18,000\u201335,000 HUF ($46\u201390)", "35,000\u201360,000 HUF ($90\u2013155)", "80,000\u2013200,000 HUF ($205\u2013$515)"],
                    ["TOTAL (per person, 4 days)", "55,000\u2013105,000 HUF ($140\u2013270)", "180,000\u2013340,000 HUF ($460\u2013870)", "620,000\u20131,780,000 HUF ($1,590\u2013$4,565)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget (15,000\u201325,000 HUF/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (5,000\u201310,000 HUF/night), eat at local etkezdek and market halls (1,500\u20133,500 HUF/meal), use the 72-hour travel card (5,500 HUF), and prioritise the many free viewpoints and walks. Budapest is one of Europe&apos;s best budget destinations.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">{"\u2728"} Mid-Range (47,000\u201378,000 HUF/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels in District V or VII (25,000\u201350,000 HUF/night), restaurant dining with Hungarian wines, Parliament interior tour, two thermal baths, and a ruin bar evening. The sweet spot where Budapest feels genuinely luxurious at moderate cost.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury (120,000+ HUF/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels like the Four Seasons Gresham Palace or New York Palace, Michelin-starred dining at Onyx or Costes, private Danube boat at sunset, and premium bath cabins. Budapest luxury rivals Western European capitals at a fraction of the price.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* -- WHERE TO STAY -- */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Budapest</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which district to base yourself. District V (Belvaros) is the centre with Parliament, Chain Bridge and the best dining. District VII (Erzsebetvaros / Jewish Quarter) has the ruin bars, nightlife and the most character. The Buda side is quieter with Castle Hill access. District VI has Andrassy Avenue and the Opera.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "District V \u2014 Belvaros (Inner City)",
                  type: "Central Pest \u00B7 Best for first-timers",
                  price: "From 15,000 HUF/night (~$38 budget) to 200,000+ HUF (~$515 luxury)",
                  badge: "Best location",
                  desc: "The heart of Pest with the Parliament, Chain Bridge, Vaci Street, and the Danube promenade all walkable. District V has Budapest\u2019s finest hotels (Four Seasons Gresham Palace, Parisi Udvar) and the widest range of restaurants. The most convenient base for a first visit \u2014 almost everything is within walking distance.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "District VII \u2014 Jewish Quarter / Erzsebetvaros",
                  type: "Ruin bars & nightlife \u00B7 Most atmosphere",
                  price: "From 8,000 HUF/night (~$20 hostel) to 60,000 HUF (~$155 boutique)",
                  badge: "Best nightlife",
                  desc: "The vibrant Jewish Quarter with ruin bars (Szimpla Kert), the Great Synagogue, street art, and some of Budapest\u2019s best cheap eating. The 7th district has the most character and the best hostel and boutique hotel options. Lively at night \u2014 choose a side street if you want to sleep before midnight.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Buda Side \u2014 Castle District / Vizivaros",
                  type: "Quiet & historic \u00B7 Castle Hill access",
                  price: "From 12,000 HUF/night (~$30 budget) to 100,000 HUF (~$260 boutique)",
                  badge: "Most peaceful",
                  desc: "The hilly Buda bank is quieter, greener and more residential than Pest. Staying near Castle Hill means early morning access to Fisherman\u2019s Bastion before crowds arrive. Vizivaros (Watertown) at the foot of Castle Hill has excellent small restaurants at local prices. The trade-off: you\u2019ll cross a bridge for nightlife and most dining.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "District VI \u2014 Andrassy Avenue / Opera",
                  type: "Grand boulevard \u00B7 Culture & dining",
                  price: "From 12,000 HUF/night (~$30 budget) to 80,000 HUF (~$205 boutique)",
                  badge: "Best for culture",
                  desc: "The UNESCO-listed grand boulevard with the Opera House, House of Terror museum, and the M1 metro (Europe\u2019s oldest). District VI is between the centre and Heroes\u2019 Square / City Park, making it convenient for both the thermal baths and the ruin bars. Good mid-range hotel and Airbnb options.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Budapest</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hungarian food is hearty, paprika-driven, and deeply satisfying. The essential dishes: gulyas (goulash soup), porkolt (paprika meat stew), langos (deep-fried dough), chimney cake (kurtoskalacs), and halaszle (fisherman&apos;s soup). Walk one block off any tourist street and prices drop by half.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Langos at the Great Market Hall",
                  t: "Street food \u00B7 Great Market Hall 1st floor",
                  d: "Deep-fried dough topped with sour cream and grated cheese \u2014 Budapest\u2019s most iconic street food. The first-floor food counters at the Great Market Hall serve the city\u2019s most popular version. 1,000\u20131,500 HUF (~$3\u20134). Add garlic butter for the full experience. Best eaten hot and standing up.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Goulash at a Local Etkezde",
                  t: "Traditional Hungarian \u00B7 Various locations",
                  d: "A proper gulyas is a rich paprika-red beef and vegetable soup, not the thick stew tourist restaurants serve. Seek out local etkezdek (canteens) in the 7th, 8th or 9th districts where working Hungarians eat. A bowl costs 1,200\u20132,500 HUF (~$3\u20136). Kispiac Bisztro near the market or Frici Papa on the Pest side are reliable.",
                  b: "Must try",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Chimney Cake (Kurtoskalacs)",
                  t: "Sweet street food \u00B7 Throughout the city",
                  d: "Hollow spiral pastry rolled in cinnamon sugar, walnut, or cocoa, baked on a rotating spit over charcoal. The Transylvanian original is simple and excellent. Vendors on Vaci Street and at the Christmas market serve them for 800\u20131,500 HUF (~$2\u20134). Skip the ice-cream-filled tourist versions \u2014 the plain cinnamon sugar is best.",
                  b: "Street snack",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Great Market Hall \u2014 Full Exploration",
                  t: "Market \u00B7 District IX",
                  d: "Beyond langos: the ground floor has Hungary\u2019s finest paprika (sweet, hot, smoked from Kalocsa and Szeged), Pick winter salami, foie gras at local prices, and Tokaji wine. The basement has the best-value pantry souvenirs. This is where locals shop \u2014 go Monday\u2013Friday morning for the real experience.",
                  b: "Best souvenirs",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Ruin Bar Food \u2014 Szimpla Kert & Mazel Tov",
                  t: "Casual dining \u00B7 Jewish Quarter",
                  d: "Szimpla Kert serves decent Hungarian bar food (goulash, sausage platters, palinka) from its open kitchen. Mazel Tov, a few doors down, is a Middle-Eastern restaurant in a stunning courtyard setting \u2014 hummus, grilled meats, and cocktails for 3,500\u20136,000 HUF (~$9\u201315) per person. Both are as much about atmosphere as food.",
                  b: "Best atmosphere",
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
            destination="Budapest Hungary"
            hotels={[
              {
                name: "Maverick City Lodge",
                type: "Budget Hostel \u00B7 District V",
                price: "From 8,000 HUF/night (~$20)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/hu/maverick-city-lodge.html?aid=2820480",
              },
              {
                name: "Hotel Rum Budapest",
                type: "Boutique Hotel \u00B7 District V",
                price: "From 35,000 HUF/night (~$90)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/hu/rum-budapest.html?aid=2820480",
              },
              {
                name: "Parisi Udvar Hotel",
                type: "Luxury \u00B7 District V",
                price: "From 80,000 HUF/night (~$205)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/hu/parisi-udvar-budapest.html?aid=2820480",
              },
              {
                name: "Brody House",
                type: "Art Hotel \u00B7 District VIII",
                price: "From 30,000 HUF/night (~$77)",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/hu/brody-house.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Szechenyi Baths Skip-the-Line",
                duration: "Half day",
                price: "From 9,800 HUF (~$25)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=szechenyi+baths+budapest&partner_id=PSZA5UI",
              },
              {
                name: "Parliament Building Guided Tour",
                duration: "1.5 hours",
                price: "From 9,000 HUF (~$23)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=budapest+parliament+tour&partner_id=PSZA5UI",
              },
              {
                name: "Danube River Evening Cruise",
                duration: "1.5 hours",
                price: "From 5,000 HUF (~$13)",
                badge: "Scenic",
                url: "https://www.getyourguide.com/s/?q=budapest+danube+evening+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Budapest Ruin Bar & Jewish Quarter Tour",
                duration: "3 hours",
                price: "From 7,000 HUF (~$18)",
                url: "https://www.getyourguide.com/s/?q=budapest+ruin+bar+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* -- MISTAKES TO AVOID -- */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83C\uDFCA",
                  title: "Skipping the Thermal Baths",
                  desc: "Budapest sits atop more than 120 natural thermal springs and has been a spa city since the Romans. The thermal bath culture is the single most distinctive thing about Budapest that no other European capital can replicate. Skipping the baths to save ~9,800 HUF (~$25) is the most common and most regrettable mistake first-time visitors make.",
                },
                {
                  icon: "\uD83C\uDFDA\uFE0F",
                  title: "Not Going to the Ruin Bars",
                  desc: "Budapest\u2019s ruin bars \u2014 built in abandoned Austro-Hungarian palaces and factory buildings in the Jewish Quarter \u2014 are unlike anything else in European nightlife. They exist because post-WW2 and Communist-era neglect left entire city blocks derelict. The ruin bar scene is specifically a Budapest phenomenon; don\u2019t leave without experiencing it.",
                },
                {
                  icon: "\uD83D\uDCB1",
                  title: "Exchanging Money at the Airport",
                  desc: "Airport and tourist-area exchange booths offer terrible rates \u2014 often 10\u201320% worse than bank ATMs. Use bank-branded ATMs (OTP, K&H, Erste) to withdraw forints directly. Avoid Euronet ATMs (bright green machines) which charge inflated fees and poor conversion rates. Always decline the \u2018conversion to your currency\u2019 option.",
                },
                {
                  icon: "\u2744\uFE0F",
                  title: "Visiting December Through February Without Planning",
                  desc: "Budapest in winter is cold, grey, and many outdoor attractions lose their appeal. The thermal baths are still excellent (and even more atmospheric with steam rising in cold air), but Gellert Hill and Margaret Island are significantly less pleasant. The Christmas market (mid-November to December) is an exception \u2014 one of Central Europe\u2019s best.",
                },
                {
                  icon: "\uD83C\uDF7D\uFE0F",
                  title: "Eating Only on Vaci Street",
                  desc: "Vaci Street restaurants charge 2\u20133x local prices for mediocre tourist food. Walk one or two streets into the 5th, 7th or 8th district and the same dishes cost half as much and taste significantly better. Ask your hotel staff where they eat lunch \u2014 that is where the real Hungarian food is.",
                },
                {
                  icon: "\uD83D\uDE8C",
                  title: "Not Validating Your Transport Ticket",
                  desc: "Budapest\u2019s transport inspectors are common, efficient, and unsympathetic. The fine for an unvalidated ticket is 16,000 HUF (~$43) on the spot. Buy a 72-hour travel card (5,500 HUF / ~$14) and carry it at all times. It covers metro, tram, bus and the 100E airport bus.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Budapest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDFDB\uFE0F",
                  title: "Parliament Building at Night",
                  desc: "The Parliament is illuminated every night. Seen from Fisherman\u2019s Bastion on the Buda side across the Danube, or from the Chain Bridge at water level, the blazing white neo-Gothic building reflected in the river is one of the finest urban views anywhere. Time your Bastion visit for 9\u201310pm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDF19",
                  title: "Szechenyi Baths at Night",
                  desc: "Szechenyi is open until 10pm daily. In the evening, the outdoor thermal pool steams dramatically, the neo-Baroque building reflects in the water, and the crowd shifts from tourists to locals using it as an after-work ritual. A night visit is distinctly more atmospheric than the daytime crowds.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDE8B",
                  title: "Tram 2 Along the Danube",
                  desc: "Tram line 2 on the Pest embankment runs past the Parliament, Chain Bridge, and the Great Market Hall \u2014 it is widely considered the most scenic public transport ride in Europe. Ride it at dusk when the Buda side is lit. Covered by any Budapest travel card or a single ticket (530 HUF / ~$1.40).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDED2",
                  title: "Great Market Hall Basement",
                  desc: "Most tourists visit the ground floor and first floor. The basement has the best selection of pantry souvenirs \u2014 Kalocsa paprika (sweet, hot, smoked), Pick winter salami, palinka (Hungarian fruit brandy), and Tokaji wine at a fraction of tourist-shop prices. These make the best Budapest souvenirs.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDF77",
                  title: "Hungarian Wine is Underrated",
                  desc: "Hungary produces world-class wines that most visitors never try. Tokaji Aszu (sweet white, one of Europe\u2019s great dessert wines), Egri Bikaver (Bull\u2019s Blood red blend from Eger), and Furmint (dry white) are all excellent. A glass of quality Hungarian wine in a ruin bar costs 1,500\u20132,500 HUF (~$4\u20136) \u2014 a fraction of Western European prices.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "\uD83D\uDCB3",
                  title: "Card Payments Are Common",
                  desc: "Most restaurants, shops and transport accept cards. However, market stalls, small etkezdek, and some ruin bar food vendors are cash-only. Carry 10,000\u201320,000 HUF in cash as backup. Use OTP or K&H bank ATMs for the best exchange rates and avoid Euronet machines.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Budapest" />

          {/* Combine With */}
          <CombineWith currentSlug="budapest-4-days" />

          {/* -- FAQ -- */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Budapest vs Prague: which is better for a first visit?",
                  a: "Both are outstanding. Prague has the most intact medieval city centre in Europe and the world\u2019s largest castle complex. Budapest has a more dramatic cityscape (Parliament on the Danube), the unique thermal bath culture, the ruin bar scene, and is slightly cheaper. If you can, visit both \u2014 they are 2h30min apart by train.",
                },
                {
                  q: "Do Indian passport holders need a Schengen visa for Budapest?",
                  a: "Yes. Hungary is a full Schengen member and Indian passport holders must obtain a Schengen short-stay visa (\u20AC80 fee) before traveling. Apply at the Hungarian embassy or VFS Global at least 6 weeks before departure. Required documents include bank statements (\u20AC100+/day), confirmed hotel bookings, return flights, and travel insurance with minimum \u20AC30,000 coverage.",
                },
                {
                  q: "Which thermal bath should I choose \u2014 Szechenyi, Gellert, or Rudas?",
                  a: "Szechenyi is the best all-round choice for first-timers \u2014 largest, both indoor and outdoor pools, open until 10pm. Gellert is the most architecturally beautiful (Art Nouveau, extraordinary main pool). Rudas is the most atmospheric \u2014 a 16th-century Turkish bath with an original Ottoman dome, best at night (Friday/Saturday open until 4am with a rooftop Danube-view pool).",
                },
                {
                  q: "Is Budapest cheap to travel?",
                  a: "Budapest is one of Central Europe\u2019s most affordable capitals. Budget travelers can eat a full meal for 2,000\u20134,000 HUF (~$5\u201310), a hostel bed costs 5,000\u20138,000 HUF (~$13\u201320), and local transport is excellent and cheap. Mid-range travelers find Budapest significantly more affordable than Vienna, Prague, or any Western European capital.",
                },
                {
                  q: "What is the ruin bar scene and how do I experience it?",
                  a: "Ruin bars (romkocsmak) began in Budapest\u2019s 7th district in the early 2000s, when entrepreneurs converted abandoned buildings into eclectic bars using salvaged furniture and local art. Szimpla Kert (Kazinczy Street 14) is the original \u2014 opens around noon, best as a bar 8\u201310pm before it becomes a club. Instant, Fogas Haz, and Anker\u2019t are nearby alternatives. Free entry to all.",
                },
                {
                  q: "How many days do you need in Budapest?",
                  a: "4 days is the sweet spot to cover both Buda and Pest, visit at least two thermal baths, explore the ruin bars, tour the Parliament interior, and eat your way through the Great Market Hall. 3 days works if you prioritise, and 5\u20136 days lets you add the Eger wine day trip and deeper exploration of both river banks.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Budapest trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-budapest", label: "Best time to visit", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/budapest-trip-cost", label: "Trip cost breakdown", icon: "\uD83D\uDCB0" },
                { href: "/blog/how-to-reach-budapest", label: "How to get there", icon: "\u2708\uFE0F" },
                { href: "/blog/budapest-travel-tips", label: "Travel tips", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="budapest-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vienna &mdash; 4 Day Guide", href: "/blog/vienna-4-days" },
                { label: "Prague &mdash; 4 Day Guide", href: "/blog/prague-4-days" },
                { label: "Krakow &mdash; 3 Day Guide", href: "/blog/krakow-3-days" },
                { label: "Amsterdam &mdash; 4 Day Guide", href: "/blog/amsterdam-4-days" },
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
                  <span className="text-xs text-muted">Read {"\u2192"}</span>
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
