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
const FIJI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Fiji Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach & Activity Guide" },
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
          href: `mailto:?subject=Fiji 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Fiji in 5 Days — coral reefs, kava ceremonies and island hopping&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/fiji-5-days"
        imageUrl="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80"
        description="Fiji in 5 Days: Yasawa island hopping, Mamanuca resorts, kava ceremonies, Rainbow Reef diving and budgets from FJD$250 ($100 USD) per day to overwater bungalow luxury."
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
export default function FijiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={FIJI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Fiji" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="fiji overwater bungalow coral reef tropical islands pacific"
            fallback="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1600&q=80"
            alt="Fiji overwater bungalows with crystal clear turquoise lagoon and coral reefs"
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
              <span className="text-white/70">Fiji 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South Pacific
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Fiji in 5 Days:
                <em className="italic text-amber-300"> Coral Reefs, Kava Ceremonies &amp; Island Hopping</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                From Yasawa backpacker bures to Mamanuca overwater bungalows — 300 islands, the world&apos;s fourth-largest reef system, and the warmest hospitality on earth. The complete 5-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇫🇯 South Pacific</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From FJD$250/day (~$100 USD)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Imagine snorkelling over soft coral gardens that harbour more fish species than the entire Great Barrier Reef, being welcomed to a highland village by a traditional kava ceremony, and experiencing a warmth of local hospitality captured entirely in a single word — Bula — that Fijians say twenty times a day and mean every single time.
            </p>
          </blockquote>

          {/* ── WHAT FIJI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Fiji Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Fiji is not one island — it is an archipelago of 333 islands in the South Pacific, scattered across 1.3 million square kilometres of ocean, of which only 110 are inhabited. The two main islands, Viti Levu and Vanua Levu, account for most of the population, but the magic of Fiji lies in the outer islands: the Yasawa chain stretching 80km north of Nadi, the Mamanuca group clustered 30 minutes offshore, and Taveuni to the east — the &quot;Garden Island&quot; where the Rainbow Reef offers some of the world&apos;s finest soft coral diving.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The reefs surrounding these islands form part of the world&apos;s fourth-largest coral reef system. The Somosomo Strait between Vanua Levu and Taveuni alone contains more hard coral species than the entire Caribbean. The Great Astrolabe Reef off Kadavu is one of the top four barrier reefs on the planet. Fijian waters have been called &quot;the soft coral capital of the world&quot; by marine biologists, and the visibility — up to 30 metres in the dry season — makes every snorkel session feel like flying above an alien city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But the reefs are only half the story. The Fijian people — Melanesian, Indo-Fijian, and everything in between — are the other half. The kava ceremony, the meke dance, the lovo earth oven feast, the sevusevu village welcome: Fiji has a living culture that hasn&apos;t been diluted by tourism the way so many Pacific island destinations have. A village visit in the Yasawas or the Ba Highlands of Viti Levu feels genuinely reciprocal, not performative.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="NAN (Nadi)" />
              <StatCard icon="🌡️" label="Best Season" value="May–Oct" />
              <StatCard icon="🪸" label="Reef Islands" value="333 Islands" />
              <StatCard icon="💰" label="Budget From" value="FJD$250/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Fiji</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Oct",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "Fiji&apos;s dry season runs May to October. Temperatures sit at a comfortable 23–28°C, humidity is low, and southeast trade winds keep the islands breezy and pleasant. Diving visibility peaks at 25–30m. July and August are peak season — prices are highest and ferries fill up fast, but the weather is the most reliable. Book Yasawa Flyer passes weeks ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Apr",
                  i: "🌧️",
                  t: "Wet Season — Cheaper but Riskier",
                  d: "The wet season brings higher temperatures (30–33°C), heavy tropical downpours, and cyclone risk peaking January to March. Cyclone Winston (2016) was the most powerful Southern Hemisphere cyclone ever recorded and caused severe damage. If you travel November–April, comprehensive travel insurance covering weather disruption is non-negotiable. Rates drop 20–30% and the islands are far less crowded.",
                  b: "Travel insurance essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun–Jul",
                  i: "🌊",
                  t: "Peak Diving Season",
                  d: "June and July offer the year&apos;s best underwater visibility — 30m+ on most outer reef sites. Manta ray season peaks June–October around the Yasawas. The Great White Wall at Taveuni is diveable year-round but June–September gives the clearest water. Water temperature: 24–26°C. Wetsuit optional for long dives.",
                  b: "Best for diving",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌺",
                  t: "Festive Season — Busy &amp; Warm",
                  d: "December through January is the most popular period for Australian and New Zealand visitors, who dominate Fiji&apos;s tourism. Resorts charge Christmas and New Year&apos;s premiums. The weather is warm and lush but wet — ideal if you want green landscapes and emptier reefs (the rain keeps some tourists indoors). Book accommodation months ahead.",
                  b: "Book early",
                  c: "bg-rose-50 border-rose-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Fiji</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Fiji&apos;s main international gateway is <strong className="font-medium">Nadi International Airport (NAN)</strong> on the western coast of Viti Levu. Almost all international flights land here. Suva&apos;s Nausori Airport handles some inter-island domestic routes. From Nadi, outer island access is by ferry, speedboat, or seaplane — choose based on budget and destination.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights from India to Nadi (NAN)",
                  d: "No direct flights from India. Best routing: Mumbai or Delhi → Singapore (Changi) → Nadi with Singapore Airlines or Fiji Airways (total 16–20 hrs, from ₹55,000–₹95,000 return). Alternative: via Sydney or Auckland with Qantas or Air New Zealand. Book at least 3–4 months ahead for dry season travel. Fiji Airways flies direct Auckland–Nadi in 3 hours.",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚢",
                  t: "Yasawa Flyer Ferry — Nadi to Yasawa Islands",
                  d: "The Yasawa Flyer is the iconic blue catamaran ferry that services the Yasawa Island chain — it is the lifeline of the outer islands, running once daily in each direction. Departs Port Denarau (30 mins from Nadi airport) at 8:30am. Journey time: 1.5 hrs to Waya, 5 hrs to Nacula. Buy the Bula Pass (multi-stop, FJD$399 for 8 days) at ssc.com.fj. Book ahead in July–August.",
                  b: "Best for Yasawas",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚤",
                  t: "Speedboat / Resort Transfer — Mamanuca Islands",
                  d: "The Mamanuca Islands are 30–90 minutes from Port Denarau by speedboat. Most resorts include transfers in their package price. South Sea Cruises also runs scheduled services to the main Mamanuca islands (from FJD$75–$130 return). Budget day-trip boats to South Sea Island and Bounty Island depart hourly from Port Denarau (from FJD$99 day trip).",
                  b: "Best for Mamanucas",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🛩️",
                  t: "Seaplane or Charter — Outer Islands & Taveuni",
                  d: "Turtle Airways and Pacific Island Air operate seaplanes from Nadi to outer resorts and Taveuni (from FJD$350–FJD$800 per sector). The 15-minute seaplane from Nadi to a Mamanuca resort is itself one of Fiji&apos;s iconic experiences — the aerial view of the island archipelago is extraordinary. Charter options available for groups. Book directly with the resort for best rates.",
                  b: "Luxury & remote islands",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Fiji Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances Nadi&apos;s cultural day-trips, the Mamanuca resort experience, Yasawa island hopping, and a traditional village visit — covering all of Fiji&apos;s essential experiences in five days. Costs shown in FJD (Fijian Dollar) and approximate USD equivalent.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Nadi Arrival — Sabeto Zipline, Mud Pools &amp; Garden of the Sleeping Giant"
                cost="FJD$120–$180 (~USD$50–$75)"
                items={[
                  "Land at Nadi International Airport (NAN) and clear immigration — most nationalities receive a 4-month visa on arrival, free. Fijian immigration officers are famously warm. Greet them with Bula and mean it.",
                  "Transfer to your Nadi hotel (taxi from airport FJD$15–$25, or use the Port Denarau shuttle FJD$10). Stay near Port Denarau if departing for the islands next day, or in Nadi town for the budget market experience.",
                  "Morning: Sabeto Zipline and Mud Pools — located in the Sabeto Valley, 20 minutes from Nadi airport. The zipline crosses the Sabeto River through forest canopy (FJD$85 per person); the thermal mud pools and hot springs are nearby (FJD$35 entry). Coat yourself in volcanic mud for a natural mineral facial, then rinse in the cool stream. One of Fiji&apos;s most enjoyable half-day activities.",
                  "Lunch: Local warung (canteen) in Nadi town — roti and curry for FJD$5–$8. Nadi&apos;s market area has excellent local eateries. The Indo-Fijian food here — the result of Indian indentured labourers brought to Fiji by the British in the 1880s — is a genuine and fascinating culinary tradition.",
                  "Afternoon: Garden of the Sleeping Giant, established by Hollywood actor Raymond Burr and now home to over 2,000 tropical orchid varieties — the finest orchid collection in the Pacific (FJD$18 entry, 45 mins).",
                  "Evening: Explore Nadi town market — buy kava root (FJD$10–$20 a bundle for village visits), tapa cloth, hand-carved tanoa kava bowls, and woven mats to take home. Dinner at Mama&apos;s Pizza in Nadi — a local institution, wood-fired pizza for FJD$15–$25.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Mamanuca Islands — Resort Day, House Reef Snorkel &amp; Lovo Feast"
                cost="FJD$200–$350 (~USD$85–$145) day trip; resort package if staying"
                items={[
                  "Morning: Day trip from Port Denarau to South Sea Island or Bounty Island in the Mamanucas (from FJD$99–$140 return, snorkel gear included). The 45-minute ferry crosses to tiny reef-rimmed islands that are the quintessential Fiji postcard — turquoise water, palm trees, white sand.",
                  "The Mamanuca fringing reefs begin right at the beach — strap on your mask within 10 minutes of arriving and you&apos;re swimming over brain coral, staghorn coral, parrotfish, angelfish and reef sharks in the shallows. The colour density per square metre exceeds almost anywhere else in the Pacific.",
                  "Beach volleyball, stand-up paddleboard, and hammock time — the Mamanuca day experience is gloriously uncomplicated and correct. Lunch is included in most day-trip packages: grilled fish, tropical fruit, rice.",
                  "For mid-range travellers staying on a Mamanuca resort (Malolo Island Resort, Mana Island, Beachcomber Island from FJD$400–$600 per night): the house reef snorkel tour with a Fijian guide (FJD$30pp) narrates every species and leads you to the coral garden sections most day-trippers miss.",
                  "Late afternoon: Watch the Mamanuca sunset from the beach — the sun drops behind the outer islands and turns the ocean shades of pink and copper. No filter required, no exaggeration possible.",
                  "Evening: Lovo feast — food cooked in a traditional earth oven: whole chicken and fish wrapped in banana leaves, root vegetables, cassava, dalo (taro). Combined with meke dance performance by the local village cultural group (FJD$60pp, bookable through most Mamanuca resorts). One of the essential Fiji experiences.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Yasawa Islands — Snorkelling the Pristine Reef &amp; Village Kava Ceremony"
                cost="FJD$80–$130 ferry + FJD$120–$200 accommodation (~USD$85–$135 total)"
                items={[
                  "Board the Yasawa Flyer at Port Denarau at 8:30am — the iconic blue catamaran is the lifeline of the Yasawa Islands and one of the great slow-travel experiences in the Pacific. Buy a Bula Pass (FJD$399, 8-day multi-stop) if island hopping; single sector FJD$80–$130 depending on destination.",
                  "The Yasawas are the most authentically Fijian islands — far less commercialised than the Mamanucas, with a traditional Fijian village atmosphere and budget bure (thatched bungalow) resorts that include meals in their packages. Recommended islands: Wayasewa (3 hrs), Nacula (5 hrs), Tavewa (4.5 hrs).",
                  "Arrive at your chosen Yasawa island and check in at Coral View Resort, Octopus Resort, or similar budget bure resort (FJD$120–$200/night semi-inclusive). The reefs begin right at the beach — the Yasawa reefs are UNESCO-praised and arguably better preserved than the Mamanucas due to lower visitor numbers.",
                  "Afternoon snorkel: look for Napoleon wrasse (the largest bony fish on a reef, up to 2 metres), hawksbill sea turtles, lionfish, and schools of batfish in the shallows. The water is so clear you can see the seabed at 8–10m depth from the surface.",
                  "Sunset from the hill above the resort — the Fijian sunset panorama across 300 islands turning gold and pink is one of the Pacific&apos;s finest views. Walk up 20 minutes before the sun drops.",
                  "Evening kava ceremony: complimentary at most Yasawa budget resorts. The whole village gathers around the tanoa (carved wooden kava bowl). You are welcomed with a cup of kava (mildly numbing, earthy taste, entirely benign), clap once to receive it (two palms cupped), drink it in one go, and clap three times after. It is genuinely moving and nothing like the tourist performances in Nadi.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Navala Traditional Village &amp; Taveuni Rainbow Reef Diving"
                cost="FJD$180–$280 (~USD$75–$115) for village tour; FJD$350+ for Taveuni seaplane"
                items={[
                  "Option A (Cultural Day) — Navala Village in the Ba Highlands: Book through your Nadi hotel or a tour operator (FJD$180–$220pp including 4WD transfer and guide). Navala has over 200 traditional bure with thatched roofs and not a single concrete building — one of the last genuinely traditional Fijian settlements. No modern structures are permitted within the village boundary.",
                  "Formal sevusevu welcome: bring a bundle of dried kava root (FJD$10–$20 from Nadi market) — presenting it to the turaga ni koro (village chief) is the essential first act of any village visit. Without it, you are an uninvited guest. With it, you are an honoured one.",
                  "Village lunch cross-legged on woven mats: dalo (taro), fish in coconut cream, breadfruit — ingredients grown within the village. The Fijian highlands are green, cool and genuinely remote. The 90-minute 4WD drive through sugar cane fields and river valleys is beautiful.",
                  "Option B (Diving Day) — Taveuni Rainbow Reef: Seaplane from Nadi to Taveuni (FJD$700–$900 return by charter) for the world&apos;s most celebrated soft coral diving. The Great White Wall — a vertical wall completely covered in white soft coral at 18–30m depth — is unlike any dive site on earth. The Rainbow Passage shimmers with purple, pink, orange and yellow fans. Visibility 25–30m. Book with Aquaventure Fiji or Paradise Taveuni.",
                  "Return by late afternoon. Final sunset at the Nadi beach or from Port Denarau waterfront.",
                  "Evening: traditional kava ceremony if not yet experienced, or cocktails watching the Mamanuca silhouettes fade into the Pacific night from Port Denarau marina.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Mamanuca Morning Snorkel, Nadi Farewell &amp; Departure"
                cost="FJD$100–$150 (~USD$40–$60) + airport transfer"
                items={[
                  "Final morning: if departing in the afternoon or evening, fit in one more Mamanuca day trip (South Sea Island, FJD$99) or a morning at Nadi&apos;s market for last-minute shopping. Fijian vanilla pods, kava bundles, woven ibe mats, and hand-carved tanoa bowls make excellent gifts and are available at excellent prices in Nadi town market.",
                  "If staying at a resort until checkout: the pre-departure swim is tradition. Dawn on a Fijian lagoon — white sand still cool from the night, water lit turquoise by the morning sun, reef fish visible in the shallows — is one of those travel moments that recalibrates what you consider beautiful.",
                  "Pre-departure meal at Nadi&apos;s Saffron Restaurant (excellent Indian-Fijian fusion, FJD$25–$50pp) or Port Denarau&apos;s Hard Rock Cafe for a reliable farewell meal. Alternatively: buy roti and curry from the Nadi market for FJD$6.",
                  "Transfer to NAN airport (taxi FJD$15–$25). At the airport: Fiji Bitter beer packs (FJD$18 six-pack, allowed in checked luggage), Fijian rum, vanilla pods, and local woven handicrafts from the duty-free.",
                  "Final act at check-in: say Moce (pronounced Mo-they — goodbye in Fijian) to anyone who helped you this week. They will likely respond with a genuine, warm Moce mada (goodbye for now) and probably mean it. That is Fiji. That is what makes it different from every other beautiful island in the Pacific.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Fiji" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & ACTIVITY GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Activity Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Fiji&apos;s best beaches and activities by island group. Each island group has a distinct character — choose based on budget, travel style, and whether reefs or resort amenities matter more to you.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Yasawa Islands — Blue Lagoon & Sawa-i-Lau Cave",
                  e: "FJD$10 guide fee (cave)",
                  d: "The Blue Lagoon (Nacula and Tavewa area) is where the 1980 film was made — gin-clear water, visible coral at 10m depth, and a beach you may have almost to yourself. The Sawa-i-Lau limestone cave involves swimming through an underwater passage into an illuminated chamber — one of Fiji&apos;s most otherworldly experiences. Guide essential. Budget: free beach access, FJD$10 cave.",
                  t: "Best for backpackers · 2–5 days",
                },
                {
                  n: "Mamanuca Islands — Cloudbreak Surf & House Reefs",
                  e: "FJD$99–$140 day trip",
                  d: "The Mamanucas hold Cloudbreak — rated one of the top five surf waves in the world, a powerful left-hand reef break off Namotu Island that hosts the Fiji Pro WSL Championship each year. Non-surfers: the house reefs of Malolo Island and Mana Island offer the most accessible excellent snorkelling in Fiji. South Sea Island day trip: FJD$99 return from Port Denarau.",
                  t: "Best for resorts & day trips · 1–3 days",
                },
                {
                  n: "Taveuni — Rainbow Reef & Great White Wall",
                  e: "FJD$700–$900 seaplane return",
                  d: "Taveuni is known as &quot;Fiji&apos;s Garden Island&quot; for its extraordinary lush vegetation (annual rainfall exceeds 10 metres in parts), and home to the Rainbow Reef — the Somosomo Strait containing arguably the world&apos;s finest soft coral concentration. The Great White Wall and Rainbow Passage are the headline dives. Best reached by seaplane from Nadi (45 mins) or connecting flight to Matei Airport.",
                  t: "Best for divers · 2–3 days",
                },
                {
                  n: "Coral Coast (Viti Levu South) — Cultural Villages & Sigatoka Sand Dunes",
                  e: "FJD$10–$20 entry",
                  d: "The Coral Coast along Viti Levu&apos;s southern shore offers mid-range resort accommodation at lower prices than the outer islands, plus easy access to the Sigatoka Sand Dunes National Park (Fiji&apos;s only national park, FJD$10 entry), the Natadola beach (rated Fiji&apos;s most beautiful mainland beach), and the Sigatoka River Valley for cultural village visits without a long ferry journey.",
                  t: "Best for families & mid-range · 2–3 days",
                },
                {
                  n: "Beqa Lagoon — Shark Dive (Pacific Harbour)",
                  e: "FJD$480 (~USD$200) all-inclusive",
                  d: "Pacific Harbour, 45 minutes east of Nadi, is the gateway to Beqa Lagoon — home to the world&apos;s most spectacular controlled shark dive. Up to 8 species including bull sharks and tiger sharks, up to 8 sharks simultaneously visible at close range. Advanced Open Water certification required for the lower platform (18m). The proceeds fund shark conservation and local community development. Book with Beqa Adventure Divers.",
                  t: "Advanced divers · Full day",
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
            title="Fiji — Reefs, Islands &amp; the South Pacific"
            subtitle="300 islands, the world&apos;s fourth-largest reef system, and infinite Bula."
            spots={[
              {
                name: "Fiji Overwater Bungalows",
                query: "fiji overwater bungalow turquoise lagoon mamanuca islands resort",
                desc: "The iconic Fijian overwater bungalow — built above crystal-clear water, with coral visible through the glass floor panels below.",
              },
              {
                name: "Yasawa Islands Blue Lagoon",
                query: "yasawa islands blue lagoon fiji beach snorkelling clear water",
                desc: "The Blue Lagoon in the Yasawa chain — gin-clear water, pristine coral reef and white sand beaches almost entirely to yourself.",
              },
              {
                name: "Kava Ceremony Fiji Village",
                query: "kava ceremony fiji traditional village melanesian culture",
                desc: "The sevusevu kava ceremony — the ceremonial heart of Fijian culture, conducted in traditional bure meeting houses with the whole village gathered.",
              },
              {
                name: "Navala Traditional Village Fiji",
                query: "navala village fiji ba highlands traditional bure thatched houses",
                desc: "Navala Village in the Ba Highlands — over 200 traditional thatched bure with not a single concrete structure, one of the Pacific&apos;s last intact traditional settlements.",
              },
              {
                name: "Rainbow Reef Taveuni Soft Coral Diving",
                query: "taveuni fiji rainbow reef soft coral diving great white wall",
                desc: "The Rainbow Reef between Vanua Levu and Taveuni — the world&apos;s finest soft coral diving, with the Great White Wall at 18m depth.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Fiji can be done on FJD$250 (~USD$100) per day in the Yasawas, or FJD$2,500+ (~USD$1,000+) per day at an overwater bungalow resort. The currency is the Fijian Dollar (FJD); the approximate conversion rate is 1 USD = FJD$2.30 (check current rates). All prices below include both FJD and approximate USD.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (Yasawa)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (Mamanuca)</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury (Overwater)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "FJD$120–$200 (~$50–$85 USD)", "FJD$350–$600 (~$150–$260 USD)", "FJD$1,000–$2,500 (~$430–$1,080 USD)"],
                    ["🍽 Food (per day)", "FJD$30–$60 (~$13–$26 USD, semi-inclusive resort)", "FJD$80–$150 (~$35–$65 USD)", "FJD$200–$400 (~$87–$173 USD, fine dining)"],
                    ["🚢 Ferry / Transport", "FJD$80–$130 Yasawa Flyer sector", "FJD$100–$200 resort transfers", "FJD$400–$900 seaplane"],
                    ["🤿 Activities (per day)", "FJD$20–$60 (~$9–$26 USD, snorkel/village)", "FJD$80–$200 (~$35–$87 USD, dives/tours)", "FJD$250–$500 (~$108–$217 USD, private guides)"],
                    ["DAILY TOTAL (per person)", "FJD$250–$450 (~USD$100–$195)", "FJD$600–$1,000 (~USD$260–$435)", "FJD$1,800–$3,800 (~USD$780–$1,650)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget — FJD$250/day (~USD$100)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Yasawa budget bures (semi-inclusive meals), ride the Yasawa Flyer, snorkel from the beach, attend the complimentary kava ceremony. The Yasawa backpacker trail is one of the world&apos;s great budget island experiences.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🌟 Mid-Range — FJD$600/day (~USD$260)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Mamanuca resort (3–4 star), guided reef snorkel, cultural village excursion, Lovo feast. The sweet spot for Fiji — comfortable resort amenities with genuine Fijian experiences included.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury — FJD$1,800+/day (~USD$780+)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Overwater bungalow (Likuliku Lagoon, Six Senses Fiji), seaplane transfers, private marine biologist dive, Taveuni charter. The Fiji honeymoon and luxury resort experience is globally elite.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Fiji</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The right base in Fiji depends entirely on your budget and preferred experience. Nadi town is for convenience and transit only — the real Fiji is on the islands. Here are the four tiers every traveller should know.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Nadi Town — Budget Guesthouses",
                  type: "Budget · Nadi town centre & Port Denarau",
                  price: "FJD$60–$150/night (~USD$26–$65)",
                  badge: "Best for transit",
                  desc: "Nadi is a service town — useful for the first and last nights of your trip when you need airport proximity. The Tanoa International Hotel and Mercure Nadi offer reliable mid-range options near Port Denarau. Budget travellers: Nomads Skyview Hotel has hostel dorms (FJD$40/bed) with a rooftop pool and social atmosphere.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Mamanuca Resorts — Malolo, Mana, Beachcomber Islands",
                  type: "Mid-range to luxury · Mamanuca Islands",
                  price: "FJD$400–$1,200/night (~USD$175–$520)",
                  badge: "Best reef access",
                  desc: "Malolo Island Resort (FJD$450–$700/night) is the most complete mid-range Mamanuca resort — two beaches, excellent house reef, PADI dive centre, cultural activities. Mana Island Resort is larger and family-friendly. Beachcomber Island is the budget/party resort in the Mamanucas (FJD$200–$350, backpacker-friendly, tiny sand-cay island).",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Yasawa Backpacker Bures — Coral View, Octopus, Barefoot",
                  type: "Budget · Yasawa Islands",
                  price: "FJD$120–$200/night (~USD$52–$87) semi-inclusive",
                  badge: "Most authentic",
                  desc: "The Yasawa budget bure resorts are the reason backpackers come to Fiji — traditional thatched bungalows on pristine beaches, semi-inclusive meal packages, complimentary kava ceremonies, and a strong community of fellow travellers. Coral View Resort (Wayasewa), Barefoot Kuata Island Resort (Kuata), and Octopus Resort (Waya Island) are the most respected.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Likuliku Lagoon Resort & Six Senses Fiji — Overwater Luxury",
                  type: "Luxury · Mamanuca Islands",
                  price: "FJD$2,800–$5,800/night (~USD$1,200–$2,500)",
                  badge: "Best luxury",
                  desc: "Likuliku Lagoon Resort (Malolo Island) is Fiji&apos;s only authentic overwater bungalow resort — the bures are built above a pristine lagoon with glass floor panels, private overwater decks and direct ladder access to the coral garden below. Six Senses Fiji (also Malolo Island) is the eco-luxury option with all-villa accommodation, wellness programming and the island&apos;s finest restaurant.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Fiji</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Fijian cuisine is a genuine and fascinating mix: indigenous Melanesian cooking traditions (earth ovens, coconut cream, root vegetables, fresh reef fish), Indian-Fijian roti and curry (brought by indentured labourers in the 1880s), and fresh Pacific seafood. Nadi town has the best budget food; the outer islands have the freshest fish.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Lovo Feast — Underground Earth Oven",
                  t: "Traditional Fijian · Resort cultural nights across Fiji",
                  d: "The lovo is Fiji&apos;s most important communal cooking tradition — whole fish, chicken, pork and root vegetables wrapped in banana leaves and cooked for 3–4 hours in a pit of heated volcanic stones in the ground. The result is an extraordinarily tender, smoky, subtly coconut-flavoured feast. Most resorts host Lovo nights once or twice a week (FJD$60–$90pp with meke dance performance). Do not miss it.",
                  b: "Must experience",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kokoda — Fijian Ceviche",
                  t: "Traditional Fijian · Available across islands",
                  d: "Kokoda is Fiji&apos;s version of ceviche — fresh raw fish (typically walu, mahi-mahi or snapper) marinated in coconut cream and lime juice with chilli and spring onion, served in a coconut shell. It is the definitive Fijian appetiser and one of the best dishes in the Pacific. Available at most resort restaurants and beachside cafes (FJD$15–$25 per serve).",
                  b: "National dish",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Roti & Curry — Nadi Town Indo-Fijian",
                  t: "Indo-Fijian · Nadi town market area",
                  d: "The Indo-Fijian culinary tradition is a living archive of the Indian food of the 1880s — the original spice combinations brought by Gujarati and Tamil labourers and evolved over 140 years in a Pacific island context. The roti curry shops in Nadi town serve extraordinary value: a full roti with lentil curry, chickpeas and mango pickle for FJD$4–$8. Tata&apos;s Restaurant and Dewan&apos;s near Nadi market are perennial favourites.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Fresh Fish & Chips — Port Denarau Marina",
                  t: "Casual · Port Denarau",
                  d: "After arriving off the Yasawa Flyer bleary and sunburned, the restaurants at Port Denarau Marina are reliably good for fish and chips, burgers, and cold Fiji Bitter beer. Indulge Restaurant is the most consistently excellent; Hard Rock Cafe is reliable for families. Budget FJD$25–$45pp for a sit-down meal with a drink.",
                  b: "Post-ferry classic",
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
            destination="Fiji Islands"
            hotels={[
              {
                name: "Likuliku Lagoon Resort",
                type: "Overwater bungalows · Malolo Island",
                price: "From FJD$2,800/night (~USD$1,200)",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/fj/likuliku-lagoon-resort.html?aid=2820480",
              },
              {
                name: "Six Senses Fiji",
                type: "Eco-luxury villas · Malolo Island",
                price: "From FJD$3,200/night (~USD$1,390)",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/fj/six-senses-fiji.html?aid=2820480",
              },
              {
                name: "Malolo Island Resort",
                type: "Mid-range resort · Mamanuca Islands",
                price: "From FJD$450/night (~USD$195)",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/fj/malolo-island-resort.html?aid=2820480",
              },
              {
                name: "Coral View Island Resort",
                type: "Budget bure · Wayasewa, Yasawa Islands",
                price: "From FJD$120/night (~USD$52)",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fj/coral-view-island-resort.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Beqa Lagoon Shark Dive",
                duration: "Full day",
                price: "From FJD$480/person (~USD$200)",
                badge: "Must do for divers",
                url: "https://www.getyourguide.com/s/?q=fiji+shark+dive+beqa&partner_id=PSZA5UI",
              },
              {
                name: "Yasawa Island Snorkelling Tour",
                duration: "Half day",
                price: "From FJD$80/person (~USD$35)",
                badge: "Best snorkelling",
                url: "https://www.getyourguide.com/s/?q=yasawa+fiji+snorkelling&partner_id=PSZA5UI",
              },
              {
                name: "Navala Village Cultural Tour",
                duration: "Full day",
                price: "From FJD$180/person (~USD$78)",
                badge: "Most authentic",
                url: "https://www.getyourguide.com/s/?q=navala+village+fiji+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mamanuca Islands Day Trip",
                duration: "Full day",
                price: "From FJD$99/person (~USD$43)",
                url: "https://www.getyourguide.com/s/?q=mamanuca+islands+day+trip+fiji&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Fiji</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚢",
                  title: "Not Pre-Booking the Yasawa Flyer in Peak Season",
                  desc: "The Yasawa Flyer runs once daily in each direction and is the only public ferry linking the Yasawa Islands. During July–August and December–January, it is fully booked days or weeks ahead. If you miss your sailing, there is no alternative — you are stranded on the wrong island. Book your Bula Pass or sector tickets at ssc.com.fj before leaving home, particularly for July, August, Christmas and New Year.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🌊",
                  title: "Underestimating the Yasawa Flyer Crossing",
                  desc: "The Yasawa Flyer is a large catamaran but the passage between the mainland and the outer Yasawas can be rough — particularly in the wet season and when the southeast trade winds are strong (June–August). Many passengers experience seasickness on the 3–5 hour crossing. Take seasickness medication an hour before boarding, sit on deck in the fresh air, and focus on the horizon. Budget Yasawa resorts are worth every cent — the crossing is part of the adventure.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "🏝️",
                  title: "Staying in Nadi for the Whole Trip",
                  desc: "Nadi is a useful transit hub — the airport, the Port Denarau marina, good supermarkets. But Nadi itself has none of the Fiji that people come for. The coral reefs, the traditional villages, the island pace, and the genuinely extraordinary scenery are 30 minutes to 5 hours away by boat. Even if you only have one extra day, get on a day-trip boat to the Mamanucas. The gap between Nadi and the outer islands is the gap between the car park and the destination.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🌿",
                  title: "Choosing All-Inclusive Over Genuine Fiji",
                  desc: "Many large all-inclusive resorts on the Coral Coast and some Mamanuca islands create a bubble that insulates guests from actual Fiji — Fijian staff, Fijian food, Fijian culture — all visible but not participated in. A week in an all-inclusive where everything is done for you is comfortable, but it&apos;s not why Fiji is exceptional. The kava ceremony, the village visit, the Lovo feast eaten cross-legged on a mat — these are what people mean when they say Fiji changed them.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🌧️",
                  title: "Travelling the Wet Season Without Travel Insurance",
                  desc: "Cyclone season (November–April, peaking January–March) brings real risk to Fiji travel plans. Cyclone Winston (2016) forced mass evacuations and destroyed several outer island resorts. Travel insurance covering weather disruption, flight cancellation, and accommodation loss is non-negotiable for wet season travel. The Yasawa Flyer also stops operating in severe weather — island-hoppers can get stranded for 3–5 days. Budget for this possibility.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{m.icon}</span>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Fiji</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🪸",
                  title: "Snorkel at High Tide — Dawn for Best Marine Life",
                  desc: "Reef snorkelling is significantly better at high tide when the water is deeper and clearer over the coral heads. Ask resort staff for the tidal schedule (they know it by heart). Dawn snorkels in the first 90 minutes of light offer the most marine activity — nocturnal fish are still feeding and the water is at its calmest before boat traffic begins. Bring your own mask and fins if you care about the fit.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌿",
                  title: "Bring Kava Root for Every Village Visit",
                  desc: "Never visit a traditional Fijian village without first purchasing dried kava root (yaqona) — available in Nadi market and most towns for FJD$10–$20 per bundle. Presenting it to the turaga ni koro (village headman) at the start of a sevusevu ceremony is non-negotiable cultural protocol. Without it, you are an uninvited guest. With it, you are welcomed as an honoured visitor — there is a real difference in how the ceremony and the day unfolds.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Vodafone Fiji SIM — FJD$15 for 5GB",
                  desc: "A Vodafone Fiji prepaid SIM with 5GB data costs FJD$15 from the airport arrivals hall. Coverage extends to most populated Yasawa and Mamanuca islands — though remote outer Yasawas may have no signal. Download maps.me offline maps for Fiji before you leave. WhatsApp is the primary communication tool between resorts, ferry operators and local guides — a working Fijian number is genuinely useful.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🧴",
                  title: "Reef-Safe Sunscreen Only",
                  desc: "Chemical sunscreens (oxybenzone, octinoxate) bleach coral — many Fijian resorts prohibit them and several have switched to supplying mineral alternatives. Fiji&apos;s reefs are healthy precisely because visitor numbers are still manageable and reef-protective policies work. Use mineral (zinc oxide or titanium dioxide) SPF 30–50 for all water activities. Bring sufficient supply from home — island pharmacies have limited stock and mineral sunscreen is expensive in Fiji.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎽",
                  title: "Dress Conservatively for Village Visits",
                  desc: "Fijian village dress code: both men and women should cover shoulders and knees when visiting any traditional village. A sulu (the Fijian sarong, sold everywhere for FJD$8–$15) is the simplest solution — wrap it over shorts or a dress. Remove your hat when entering any village or meeting space. Ask before photographing — a warm Bula and a smile almost always results in permission, but assuming it is rude.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🦈",
                  title: "Get Advanced Open Water Before the Shark Dive",
                  desc: "The Beqa Lagoon shark dive — the finest shark diving experience in the Pacific — requires Advanced Open Water certification for the lower feeding platform at 18m (where the bull sharks and tiger sharks are most visible). The upper platform at 8m is accessible to Open Water divers, but the full experience is significantly better at depth. If you&apos;re planning to do Beqa, do your Advanced course before arriving. Fiji also offers excellent PADI courses if you want to qualify on location (allow 3–4 days).",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Fiji" />

          {/* Combine With */}
          <CombineWith currentSlug="fiji-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a visa to visit Fiji?",
                  a: "Most passport holders — including Indian, US, UK, Australian, Canadian and EU citizens — receive a visa on arrival at Nadi Airport for stays of up to 4 months. Entry is completely free. Requirements: a valid passport (6 months validity beyond your departure date), a return or onward flight ticket, and evidence of sufficient funds (approximately FJD$100 per day). No pre-registration required — just Bula at immigration.",
                },
                {
                  q: "What is the best time to visit Fiji?",
                  a: "The dry season (May to October) is universally recommended. Lower humidity, minimal rain, 24–26°C water temperatures and diving visibility of 25–30m make it ideal for both beach stays and underwater activities. July and August are peak season with the best weather but highest prices and most crowded ferries — book the Yasawa Flyer weeks ahead. The wet season (November to April) is cheaper and warmer but comes with genuine cyclone risk.",
                },
                {
                  q: "What is the difference between the Yasawa and Mamanuca Islands?",
                  a: "The Mamanuca Islands are 30–90 minutes by boat from Nadi, more developed, and home to the majority of mid-range and luxury resorts. They offer excellent beaches and reefs with a resort-driven experience. The Yasawa Islands extend 80km further north (2–5 hours on the Yasawa Flyer), are far less developed, and cater predominantly to budget travellers in traditional bure bungalows — they are more authentically Fijian. Both offer world-class snorkelling. The choice is about atmosphere and budget.",
                },
                {
                  q: "Is Fiji safe for solo travellers and families?",
                  a: "Fiji is one of the safest countries in the Pacific for all travel types. Fijians are genuinely, warmly hospitable — solo travellers regularly describe it as the friendliest destination they have visited. The Yasawa backpacker trail has a well-established community of fellow travellers. Families thrive at Mamanuca and Coral Coast resorts with dedicated children&apos;s facilities. Standard precautions: don&apos;t leave valuables on beaches, respect village dress codes when visiting traditional communities, and be aware that isolated outer islands are remote from emergency services.",
                },
                {
                  q: "How much does a 5-day Fiji trip cost?",
                  a: "Budget: FJD$1,250–$2,250 (~USD$540–$980) per person for 5 days on the Yasawa Islands — budget bure accommodation, semi-inclusive meals, Yasawa Flyer ferry and beach activities. Mid-range: FJD$3,000–$5,000 (~USD$1,300–$2,170) per person including Mamanuca resort, guided activities and cultural tours. Luxury: FJD$9,000–$19,000+ (~USD$3,900–$8,260+) per person for overwater bungalow, seaplane transfers and private excursions. International flights from India add ₹55,000–₹95,000 return.",
                },
                {
                  q: "What is a kava ceremony and do I have to drink it?",
                  a: "Kava (yaqona) is Fiji&apos;s traditional ceremonial drink — a mildly numbing, earthy-tasting beverage made from the powdered root of the kava plant, mixed with water and strained through cloth. The ceremony involves presenting kava to the village chief, being served a coconut-shell cup (bilo), clapping once, drinking the cup in a single draught, then clapping three times. It is a genuinely important cultural gesture of welcome and respect in Fiji. The drink itself is very mild — it numbs the lips and tongue slightly and has a calming effect. You do not have to drink it if you genuinely cannot, but politely accepting the first cup is considered deeply respectful.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Fiji trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/fiji-best-time-to-visit", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/fiji-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/yasawa-islands-guide", label: "Yasawa Islands guide", icon: "🏝️" },
                { href: "/blog/fiji-diving-guide", label: "Diving & snorkelling", icon: "🤿" },
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
          <RelatedGuides currentSlug="fiji-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Pacific &amp; Island Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New Zealand 7 Days — North &amp; South Islands", href: "/blog/new-zealand-7-days" },
                { label: "Bali 7 Days — Temples, Rice Fields &amp; Beaches", href: "/blog/bali-7-days" },
                { label: "Maldives 5 Days — Overwater Bungalows", href: "/blog/maldives-5-days" },
                { label: "Australia 7 Days — Sydney to the Reef", href: "/blog/australia-7-days" },
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
