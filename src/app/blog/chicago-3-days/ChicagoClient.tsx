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
const CHICAGO_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Chicago Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Chicago 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Chicago in 3 Days — architecture, deep dish and the Bean&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/chicago-3-days"
        imageUrl="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
        description="Chicago in 3 Days: Cloud Gate at sunrise, Architecture River Cruise, deep dish pizza, Kingston Mines blues — complete 3-day travel guide with real USD costs."
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
export default function ChicagoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHICAGO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chicago" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="chicago skyline lake michigan millennium park cloud gate illinois"
            fallback="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80"
            alt="Chicago skyline reflecting on Lake Michigan with Millennium Park Cloud Gate"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chicago 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Great Lakes City
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chicago in 3 Days:
                <em className="italic text-amber-300"> Architecture, Deep Dish &amp; the Blues</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Cloud Gate at sunrise, the Architecture River Cruise, Art Institute masterpieces, a deep-dish pizza debate, and Kingston Mines blues after dark. The complete 3-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏙️ Illinois, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Chicago is what happens when architects get a blank slate — an entire city centre rebuilt after the Great Fire of 1871, with the best minds in American design competing for every lot. The result is the most architecturally coherent skyline in the world, sitting on the edge of a freshwater sea, eating the best deep-dish pizza on earth, and listening to the blues six nights a week.
            </p>
          </blockquote>

          {/* ── WHAT CHICAGO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Chicago Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Chicago is the city that invented the skyscraper, gave the world blues and house music, and somehow never gets the international recognition it deserves. The Great Chicago Fire of 1871 destroyed four square miles of the city and 17,000 buildings — and created an opportunity that architects across America descended upon. What was rebuilt is still standing: the Chicago School of Architecture, the birthplace of the steel-frame skyscraper, and a downtown grid of landmark buildings that no other American city can match.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Lake Michigan is not a backdrop — it is a presence. Twenty-six miles of free public lakefront (the city legally cannot build on it), beaches that run from the Loop to the North Shore, and a horizon that looks like an ocean. Millennium Park sits at the junction of downtown and the lakefront, anchored by Anish Kapoor&apos;s Cloud Gate sculpture — universally called &quot;the Bean&quot; — which reflects the entire skyline in its polished surface and has become one of the most visited public artworks in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The food debate is real and ongoing: deep-dish pizza at Lou Malnati&apos;s versus Giordano&apos;s is not a casual question in this city. The Chicago-style hot dog (no ketchup — ever) at Portillo&apos;s is a genuine institution. And the blues clubs on the North Side — Kingston Mines, B.L.U.E.S., Andy&apos;s Jazz Club — represent an unbroken lineage from the Mississippi Delta to the present day that you can sit in for the cost of a cover charge.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From O&apos;Hare" value="45 min · $5" />
              <StatCard icon="🌡️" label="Best Season" value="May–Oct" />
              <StatCard icon="🏛️" label="Architecture" value="World No.1" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Chicago</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Sweet Spot",
                  d: "15–24°C, minimal crowds before summer peaks, the lakefront is coming alive, and hotel prices are still reasonable. The Architecture River Cruise is running at full capacity. Ideal for first-time visitors who want comfortable weather without peak-season prices.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "24–32°C with high humidity. Lollapalooza (August) and the Chicago Jazz Festival fill hotels. Grant Park and Navy Pier are packed. Book hotels 3–4 months ahead and expect to pay premium prices. The lakefront beaches are genuinely excellent. Worth it if you plan ahead.",
                  b: "Book early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Fall — Best Overall",
                  d: "14–22°C, hotel prices drop after Labor Day, crowds thin out, and the city turns golden. The Architecture River Cruise is running, outdoor dining is comfortable, and the Chicago Marathon (October) adds energy without destroying availability if you book a week or two out.",
                  b: "Best overall",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Cold but Viable",
                  d: "Chicago winter is genuinely cold (-10 to 4°C, with lake-effect wind chill making it feel much colder). But hotel prices drop significantly, museums are quiet, the deep-dish pizza tastes better, and the holiday lights on the Magnificent Mile in December are spectacular. Not for everyone, but the city doesn&apos;t stop.",
                  b: "Budget season",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Chicago</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Chicago has two major airports — O&apos;Hare International (ORD) and Midway (MDW). O&apos;Hare is larger and better connected. The CTA Blue Line train from O&apos;Hare to downtown costs <strong className="font-medium">$5 and takes 45 minutes</strong> — one of the best airport transit connections in any American city.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "O&apos;Hare to Downtown — Blue Line CTA (recommended)",
                  d: "Board the Blue Line train at O&apos;Hare Airport station (follow signs from baggage claim). $5 fare, 45 minutes to Clark/Lake station in the Loop. Runs 24 hours. No need for a taxi or rideshare — this is genuinely one of the most convenient airport connections in any US city. Buy a Ventra card at the airport for tap-on access.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚇",
                  t: "Midway to Downtown — Orange Line CTA",
                  d: "If flying into Midway (MDW), the Orange Line runs directly to the Loop. $2.50 standard fare, approximately 30 minutes. Midway is closer to the South Side and serves many budget airlines (Southwest especially). Equally easy transit connection.",
                  b: "Budget flights",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Amtrak — Union Station",
                  d: "Chicago&apos;s Union Station is a major Amtrak hub connecting to cities across the Midwest and beyond. The Capitol Limited runs from Washington D.C. (18 hrs), the Empire Builder from Seattle (46 hrs), the Texas Eagle from Dallas (26 hrs). For travellers from Milwaukee (90 min, ~$25) or St. Louis (5.5 hrs, ~$35), the train is excellent.",
                  b: "Midwest travel",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive — I-90/94 into the Loop",
                  d: "Chicago is well connected by interstate. From Milwaukee: 90 min. From Indianapolis: 3 hrs. From Detroit: 4.5 hrs. Parking in the Loop is expensive ($30–$60/day). If driving, park once and use the CTA and walking for the duration of your stay — trying to drive around downtown Chicago is not worth it.",
                  b: "Regional visitors",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Chicago Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to cluster sites by neighbourhood — downtown and the lakefront on Day 1, the river and North Side on Day 2, and the South Side on Day 3.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Millennium Park · Art Institute · Magnificent Mile · Deep Dish Dinner"
                cost="$60–$100"
                items={[
                  "7:00am: Millennium Park and Cloud Gate at sunrise. The Bean (officially Cloud Gate, by Anish Kapoor) is free to visit at any hour, but the early morning is transformative — the skyline reflection in the polished steel surface, the soft lake light, and almost no other people. The sculpture is 66 feet long and weighs 110 tons of seamlessly welded steel. Give yourself 30 minutes here before the crowds arrive.",
                  "8:30am: Walk the BP Bridge (also Millennium Park, designed by Frank Gehry) and the Lurie Garden — 2.5 acres of perennial planting at the south end of the park, free, and one of Chicago&apos;s most undervisited green spaces. The Crown Fountain (two 50-foot glass towers projecting Chicagoans&apos; faces) is also worth seeing.",
                  "10:00am: Art Institute of Chicago ($25 adults, free for Chicago residents). One of the world&apos;s great art museums. Don&apos;t try to see everything — pick three or four rooms. The Impressionist and Post-Impressionist collection (Seurat&apos;s A Sunday on La Grande Jatte, Grant Wood&apos;s American Gothic, Picasso, Hopper) is exceptional. The modern wing by Renzo Piano is architectural quality in its own right. Budget 2.5 hours.",
                  "12:30pm: Lunch on Michigan Avenue or in the Loop. Harold&apos;s Chicken Shack (South Michigan Ave) for a Chicago institution. Or Eataly Chicago in River North for something more varied.",
                  "2:00pm: Walk the Magnificent Mile — the stretch of North Michigan Avenue from the Chicago River to Oak Street. Walk it for the architecture: the Tribune Tower (neo-Gothic, with stones from 120 famous buildings embedded in its base), the Wrigley Building, and 875 North Michigan Avenue (formerly the John Hancock Center, now 360 Chicago observation deck at $32).",
                  "5:30pm: Navy Pier — walk the lakefront promenade, ride the Centennial Wheel ($18), or simply stand at the end of the pier for the best unobstructed skyline view in the city. Free to enter, individual attractions cost extra. The sunset from the end of Navy Pier over the skyline is one of Chicago&apos;s signature moments.",
                  "7:30pm: Deep dish dinner at Lou Malnati&apos;s (most convenient on North Wells St in River North) or Giordano&apos;s (near the Loop, 130 E. Randolph St). Budget $20–$30 per person. Order a medium between two people — deep dish is extremely filling. The pizza takes 45 minutes to bake; order drinks and salad first.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Architecture River Cruise · The Loop · Wicker Park · Blues Night"
                cost="$80–$130"
                items={[
                  "9:00am: Chicago Architecture Center River Cruise ($47 per person, book online in advance). This is the single best thing you can do in Chicago. 90 minutes on the Chicago River with CAF-certified docents naming every building and explaining why Chicago&apos;s skyline looks the way it does. You pass under 36 bridges and learn about Louis Sullivan, Mies van der Rohe, and the Chicago School architects who invented modern building. The morning cruise has the best light.",
                  "11:30am: Walk back through the Loop admiring what you just learned. Stop at the Rookery Building (1888, Louis Sullivan/Frank Lloyd Wright lobby renovation), the Chicago Board of Trade (1930, Art Deco pinnacle), and the Monadnock Building (1891, the last large masonry skyscraper before steel frames took over). The Loop architecture walk is free and takes as long as you want.",
                  "1:00pm: Chicago-style hot dog at Portillo&apos;s (100 W. Ontario St, River North). A Chicago-style hot dog is a Vienna Beef dog on a poppy-seed bun with yellow mustard, chopped white onions, bright green sweet pickle relish, a dill pickle spear, sport peppers, and a tomato slice. No ketchup. This is not optional. $5–$8.",
                  "2:30pm: 360 Chicago observation deck ($32 adults, 875 N. Michigan Ave, 94th floor). The TILT experience — a glass-fronted section of the observation deck tilts outward over Michigan Avenue at a 30-degree angle, giving you the feeling of hanging over the city. The views north along the lakefront and south to the Loop are exceptional.",
                  "4:30pm: Take the Red Line north to Wicker Park (Damen station). Chicago&apos;s best neighbourhood for independent bookshops, vintage clothing, coffee, and street art. Walk Milwaukee Avenue from North to Division Street. Stop at Myopic Books (used bookshop, 1564 N. Milwaukee), Reckless Records, and the Flat Iron Arts Building. Dinner in Wicker Park: Big Star (tacos and honky-tonk on Damen, $15–$25) or Dove&apos;s Luncheonette (Southern comfort food, same strip).",
                  "9:30pm: Kingston Mines (2548 N. Halsted St, Lincoln Park). Chicago&apos;s most famous blues club — two stages, live music from 9pm to 4am on weekends, cover $15–$20. This is the real thing: bands rotating between two rooms, regulars at the bar who have been coming for decades, and a musical lineage that runs directly from the Delta. Go late and stay until at least midnight.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Hyde Park · Museum of Science &amp; Industry · Lakefront Path · Final Dinner"
                cost="$40–$80"
                items={[
                  "9:00am: Take the Metra Electric or Red Line south to Hyde Park. This South Side neighbourhood is home to the University of Chicago campus and Barack Obama&apos;s former home (5046 S. Greenwood Ave — exterior only). The neighbourhood has a completely different character from the Loop — quieter, more residential, and deeply intellectual.",
                  "10:00am: Museum of Science and Industry ($21.95 adults). One of the largest science museums in the Western Hemisphere, housed in the only remaining building from the 1893 World&apos;s Columbian Exposition. The German U-505 submarine captured in WWII (extra $18 for the submarine tour) is the centrepiece. The Coal Mine replica, the model train layout, and the space exploration exhibits are all excellent.",
                  "12:30pm: Lunch at Medici on 57th (1327 E. 57th St, Hyde Park) — a university institution since 1962. Burger, soup, and coffee in a carved-wood booth. $12–$20.",
                  "2:00pm: Walk the lakefront path south from Hyde Park. The 18-mile continuous path along Lake Michigan&apos;s shore is one of Chicago&apos;s defining features. The Promontory Point peninsula (55th Street) gives views north toward the downtown skyline that are among the best in the city.",
                  "4:00pm: Head back north via the Red Line. Stop at Andersonville (Berwyn station) or Lincoln Square for late afternoon coffee and independent shops — two of Chicago&apos;s most liveable North Side neighbourhoods, away from tourist crowds.",
                  "6:30pm: Final dinner: Girl &amp; the Goat (800 W. Randolph St, West Loop) — Stephanie Izard&apos;s flagship restaurant. Inventive small plates, wood-fired preparations. $45–$65 per person. Book at least two weeks ahead. Alternatively: Au Cheval (800 W. Randolph St) for what many consider the best burger in America ($17) — arrive when they open to avoid the wait.",
                  "9:00pm: Andy&apos;s Jazz Club (11 E. Hubbard St, River North) for a final night of live music. More polished than Kingston Mines, but the music is consistently excellent. No cover for early sets.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Chicago" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Chicago Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Chicago landmarks in order of priority. Entry fees as of 2026 — many of the city&apos;s best sights are free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cloud Gate (The Bean)",
                  e: "Free",
                  d: "Anish Kapoor&apos;s 110-ton polished steel sculpture in Millennium Park reflects the Chicago skyline in a continuous curved mirror. Visit at sunrise (7am) for the best light and fewest people. The sculpture is 66 feet long, 33 feet high, and was fabricated from 168 seamlessly welded steel plates with no visible seams anywhere.",
                  t: "Must see · Free",
                },
                {
                  n: "Art Institute of Chicago",
                  e: "$25 adults",
                  d: "One of the world&apos;s great art museums, founded in 1879. The Impressionist collection — Seurat&apos;s A Sunday on La Grande Jatte, Nighthawks by Edward Hopper, American Gothic by Grant Wood — is exceptional. The Modern Wing by Renzo Piano opened in 2009. Budget 2.5–3 hours minimum.",
                  t: "Must see · 2.5–3 hrs",
                },
                {
                  n: "Chicago Architecture River Cruise",
                  e: "$47 per person",
                  d: "90-minute docent-led boat tour on the Chicago River, departing from the Riverwalk. Passes 50+ landmark buildings with commentary on the Chicago School, Art Deco period, and contemporary architecture. The best 90 minutes in Chicago, consistently. Book at the Chicago Architecture Center (111 E. Wacker Dr) or online.",
                  t: "Must do · 90 min",
                },
                {
                  n: "360 Chicago (875 N. Michigan)",
                  e: "$32 adults",
                  d: "Observation deck on the 94th floor of what was the John Hancock Center. The TILT experience — glass-fronted panel tilts outward over Michigan Avenue — is genuinely thrilling. Views north along the lakefront, west to the suburbs, south to the Loop. Slightly less visited than the Skydeck but better views northward.",
                  t: "Recommended · 1 hr",
                },
                {
                  n: "Millennium Park",
                  e: "Free",
                  d: "Chicago&apos;s 24.5-acre crown jewel on the lakefront. Cloud Gate, the Crown Fountain, the BP Bridge by Frank Gehry, the Jay Pritzker Pavilion (outdoor concert venue), and the Lurie Garden. Free year-round. The park hosts free concerts in summer; ice skating in winter. One of the best urban public spaces in America.",
                  t: "Must visit · Free",
                },
                {
                  n: "Navy Pier",
                  e: "Free (rides extra)",
                  d: "3,300-foot pier on Lake Michigan with restaurants, shops, the Centennial Wheel ($18), the Chicago Children&apos;s Museum ($19), and the IMAX theatre. The lakefront views from the end of the pier are outstanding — the best unobstructed view of the Loop skyline. Free to walk; budget $0–$50 depending on what you do.",
                  t: "Lakefront views · Free to enter",
                },
                {
                  n: "Willis Tower Skydeck",
                  e: "$26 adults",
                  d: "The 103rd-floor observation deck of what was the world&apos;s tallest building from 1973 to 1998. The Ledge — glass-floored boxes extending 4 feet outside the building — are the iconic photo opportunity. Views of four states on a clear day. Book timed entry online to avoid the queue.",
                  t: "Iconic · 1 hr",
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
            title="Chicago — Architecture, Lakefront &amp; Culture"
            subtitle="The city that rebuilt itself and invented the skyscraper."
            spots={[
              {
                name: "Cloud Gate Millennium Park",
                query: "cloud gate bean millennium park chicago skyline reflection illinois",
                desc: "Cloud Gate (the Bean) reflecting Chicago&apos;s skyline in Millennium Park — one of the most photographed public sculptures in the world.",
              },
              {
                name: "Chicago River Architecture",
                query: "chicago river architecture skyline skyscrapers illinois downtown",
                desc: "The Chicago River running through the architectural canyon of the Loop — the setting for the world-famous Architecture River Cruise.",
              },
              {
                name: "Chicago Skyline Lake Michigan",
                query: "chicago skyline lake michigan lakefront sunset illinois",
                desc: "Chicago&apos;s skyline rising above Lake Michigan — 26 miles of public lakefront, legally protected from development.",
              },
              {
                name: "Art Institute of Chicago",
                query: "art institute chicago museum lions entrance michigan avenue",
                desc: "The Art Institute of Chicago, guarded by its bronze lions on Michigan Avenue — one of the world&apos;s great art museums.",
              },
              {
                name: "Navy Pier Chicago",
                query: "navy pier chicago lake michigan ferris wheel evening lights",
                desc: "Navy Pier at dusk — 3,300 feet of lakefront entertainment with the best unobstructed view of the Loop skyline.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Chicago is an expensive American city but not unreasonable compared to New York or San Francisco. The biggest costs are accommodation and restaurant dining. Museum entry and transit are very manageable.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Splurge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights (domestic US)", "$80–$200 RT", "$200–$400 RT", "$400–$800 RT"],
                    ["🏨 Accommodation (2 nights)", "$120–$200", "$280–$450", "$600–$900+"],
                    ["🚇 CTA transit (3 days)", "$15–$20", "$15–$20", "$15–$20"],
                    ["🏛️ Activities (3 days)", "$80–$100", "$120–$180", "$200–$300"],
                    ["🍽️ Food (3 days)", "$60–$90", "$120–$200", "$250–$400+"],
                    ["🎵 Blues / live music", "$20–$40", "$40–$60", "$60–$100"],
                    ["TOTAL (per person)", "$375–$650", "$795–$1,310", "$1,525–$2,520"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–$120/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at HI Chicago hostel ($40–$60/dorm) or budget hotels in the South Loop. Eat at Portillo&apos;s, Harold&apos;s Chicken, and food courts. Use the CTA everywhere. Free sights (Millennium Park, lakefront) plus Art Institute ($25). Very doable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($200–$350/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel EMC2 or similar boutique hotels ($180–$260/night), Architecture Cruise ($47), 360 Chicago ($32), Art Institute ($25), and dinner at Girl &amp; the Goat or Au Cheval. The sweet spot for most visitors.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Splurge ($500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Langham Chicago ($400–$700/night) on the river, dinner at Alinea ($385+ tasting menu, book 2–3 months ahead), private architecture tour, and rooftop cocktails at The Signature Room.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Chicago</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Loop and River North are the most central neighbourhoods for first-time visitors — within walking distance of Millennium Park, the river, and the lakefront. The Magnificent Mile (Streeterville) is quieter and closer to 360 Chicago. Wicker Park and Lincoln Park offer more local atmosphere if you&apos;re willing to use transit.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Langham Chicago",
                  type: "Luxury · 330 N. Wabash Ave, River North",
                  price: "From $400/night",
                  badge: "Most impressive",
                  desc: "Occupying a Mies van der Rohe-designed building directly on the Chicago River, The Langham has some of the most dramatic views in any American hotel — river on one side, Wrigley Building and Tribune Tower on the other. The pool deck overlooks the river at the 13th floor. Book the Riverview rooms for the full effect.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel EMC2",
                  type: "Boutique · 228 E. Ontario St, Streeterville",
                  price: "From $180/night",
                  badge: "Best boutique",
                  desc: "Science-themed boutique hotel a block from the Magnificent Mile, with artwork referencing Einstein, Curie, and Tesla throughout. Genuinely thoughtful design, a great rooftop bar (The Albert), and an excellent location for first-time visitors. The mid-range sweet spot in Chicago.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "HI Chicago",
                  type: "Hostel · 24 E. Congress Pkwy, South Loop",
                  price: "$40–$65/dorm night",
                  badge: "Best budget",
                  desc: "Chicago&apos;s best hostel, in a converted historic building in the South Loop. Private rooms available from $110. Walking distance to the Art Institute and Grant Park, two stops from Millennium Park. A rare hostel that feels genuinely comfortable rather than just functional.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Virgin Hotels Chicago",
                  type: "Mid-range · 203 N. Wabash Ave, Loop",
                  price: "From $160/night",
                  badge: "Best value central",
                  desc: "Stylish mid-range hotel in the Loop with larger-than-average rooms, a rooftop pool, and the Commons Club restaurant/bar on site. Central location for the Art Institute and Millennium Park. Good balance of quality and price for the neighbourhood.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Chicago</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Chicago&apos;s food scene runs from the deep-dish pizza debate (real, deeply held) to three-Michelin-star tasting menus. The West Loop (Randolph Street corridor) is the current restaurant epicentre. For Chicago originals, the hot dog at Portillo&apos;s and Italian beef at Al&apos;s Beef are non-negotiable.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Lou Malnati&apos;s Pizzeria",
                  t: "Deep dish pizza · Multiple locations",
                  d: "The deep-dish argument in Chicago runs on one axis: Lou&apos;s versus Giordano&apos;s. Lou Malnati&apos;s is the original family-recipe deep dish, with a butter-crust base, chunky tomato sauce on top of the cheese (not under it), and Italian sausage. The River North location (439 N. Wells St) is the most convenient. Medium pizza $22–$28. Order 45 minutes ahead — it takes that long to bake.",
                  b: "Deep dish essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Portillo&apos;s",
                  t: "Chicago institution · 100 W. Ontario St, River North",
                  d: "The home of the Chicago-style hot dog and the Italian beef sandwich. The hot dog ($5.50) comes with everything except ketchup — mustard, relish, onion, tomato, sport peppers, pickle, celery salt on a poppy seed bun. The Italian beef ($8.50) is thinly sliced beef on Italian bread, dipped in gravy, loaded with giardiniera. Get both. The line moves fast.",
                  b: "Must eat",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "Girl &amp; the Goat",
                  t: "Modern American small plates · 800 W. Randolph St, West Loop",
                  d: "Stephanie Izard&apos;s flagship and one of Chicago&apos;s most acclaimed restaurants. Wood-fired small plates built around whole animal cooking — the goat liver mousse, roasted pig face, and wood-oven broccoli are permanent fixtures on a constantly changing menu. $45–$65 per person. Book two to three weeks ahead via OpenTable.",
                  b: "Best splurge",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Au Cheval",
                  t: "Diner / cheeseburger · 800 W. Randolph St, West Loop",
                  d: "The cheeseburger at Au Cheval ($17 double) appears on virtually every &quot;best burger in America&quot; list. Smash-style double patty, American cheese, Dijonnaise, pickles. No reservations for dinner — arrive when they open at 10am (brunch) or 4:30pm (dinner) to avoid a 60–90 minute wait. Worth it.",
                  b: "Best burger",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Alinea",
                  t: "Tasting menu · 1723 N. Halsted St, Lincoln Park",
                  d: "Grant Achatz&apos;s three-Michelin-star restaurant is one of the most technically ambitious dining experiences in the world. The Gallery menu ($385 per person) is a 16–18 course progression through edible art. The Salon menu ($205) is slightly more accessible. Book 2–3 months ahead via the Tock reservation system — tickets are sold, not reservations taken.",
                  b: "World-class",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Big Star",
                  t: "Tacos and honky-tonk · 1531 N. Damen Ave, Wicker Park",
                  d: "James Beard Award-winning taco counter with a honky-tonk bar on Damen Avenue. The al pastor tacos ($4.50 each) and the whiskey selection are both excellent. Outdoor seating fills up fast in good weather. $15–$25 per person. The most fun restaurant in Chicago for a casual evening in Wicker Park.",
                  b: "Best casual",
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
            destination="Chicago Illinois"
            hotels={[
              {
                name: "The Langham Chicago",
                type: "Luxury riverside · Mies van der Rohe building",
                price: "From $400/night",
                rating: "5",
                badge: "Most impressive",
                url: "https://www.booking.com/hotel/us/the-langham-chicago.html?aid=2820480",
              },
              {
                name: "Hotel EMC2",
                type: "Boutique · Streeterville",
                price: "From $180/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/us/autograph-collection-emc2.html?aid=2820480",
              },
              {
                name: "Virgin Hotels Chicago",
                type: "Mid-range · The Loop",
                price: "From $160/night",
                rating: "4",
                badge: "Best value central",
                url: "https://www.booking.com/hotel/us/virgin-hotels-chicago.html?aid=2820480",
              },
              {
                name: "HI Chicago Hostel",
                type: "Hostel · South Loop",
                price: "From $40/dorm",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hostelling-international-chicago.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Chicago Architecture River Cruise",
                duration: "90 min",
                price: "From $47/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=chicago+architecture+river+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Millennium Park &amp; Bean Walking Tour",
                duration: "2 hrs",
                price: "From $25/person",
                badge: "Great intro",
                url: "https://www.getyourguide.com/s/?q=chicago+millennium+park+tour&partner_id=PSZA5UI",
              },
              {
                name: "Chicago Food Tour — Deep Dish &amp; Hot Dogs",
                duration: "3 hrs",
                price: "From $65/person",
                url: "https://www.getyourguide.com/s/?q=chicago+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Chicago Blues Bar Crawl",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=chicago+blues+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── COMMON MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⚠️ Common Mistakes in Chicago</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚕",
                  title: "Taking a taxi from O&apos;Hare",
                  desc: "An Uber or taxi from O&apos;Hare to downtown costs $35–$55 depending on traffic. The Blue Line CTA train costs $5 and takes 45 minutes — often faster during rush hour. The station is directly connected to the terminal. There is no reason to take a taxi unless you have a lot of luggage and a tight schedule.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍕",
                  title: "Eating deep dish pizza every meal",
                  desc: "Deep dish is extraordinary once or twice, but it is very filling and quite rich. Chicago&apos;s real food scene — the hot dog, Italian beef, the West Loop restaurant corridor, the tavern-style thin-crust pizza that locals actually eat daily — deserves equal attention. Don&apos;t let the tourist reputation crowd out the actual local food culture.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏙️",
                  title: "Skipping the South Side entirely",
                  desc: "Most first-time visitors stay in the Loop and the North Side and never cross south of the Museum Campus. Hyde Park alone — with the Museum of Science and Industry, the University of Chicago campus, and the lakefront views north toward the skyline — is worth a half day. The South Side is where Chicago&apos;s blues and soul music history is most concentrated.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌬️",
                  title: "Underestimating the wind",
                  desc: "Chicago is called the Windy City — the name originates from political hot air, not the lake breeze, but the actual wind off Lake Michigan is real and can be physically difficult in winter and spring. A wind of 20 mph combined with -5°C feels like -15°C on the lakefront. Layer seriously from October through April.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎵",
                  title: "Going to a blues bar before 11pm",
                  desc: "Kingston Mines and B.L.U.E.S. don&apos;t get going until 10–11pm. The first set is often the warm-up; the best music happens after midnight when the bands are warmed up and the room has filled. Plan your evening accordingly — dinner at 7pm, drinks at 9pm, blues club at 10:30pm.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Chicago</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Cloud Gate at 7am",
                  desc: "The Bean at sunrise with the morning light hitting the steel surface and the skyline empty of tourists is a completely different experience from midday. The reflection is cleaner, the colours are better, and you can walk under the sculpture without dodging selfie sticks. Set the alarm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚤",
                  title: "Book the Architecture Cruise in advance",
                  desc: "The Chicago Architecture Center River Cruise sells out, particularly on summer weekends and September evenings. Book at least 3–5 days ahead online. The morning cruise (9am or 10am) has the best light on the east-facing buildings. The evening cruise is romantic but the light is less useful for photography.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚇",
                  title: "Get a Ventra card, not individual tickets",
                  desc: "A Ventra card (available at all CTA stations, $5 card fee) allows tap-on across all CTA trains and buses. The 3-day unlimited pass ($20) is worth it if you&apos;re using transit more than four times per day. The CTA covers almost everywhere you&apos;ll want to go in Chicago.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍕",
                  title: "Order deep dish 45 minutes before you&apos;re hungry",
                  desc: "Deep dish pizza takes 35–50 minutes to bake. This is not a fast-food experience. Sit down, order drinks and a salad, then order the pizza. Do not arrive starving and expect food in 20 minutes. Both Lou Malnati&apos;s and Giordano&apos;s have excellent thin-crust options if the wait is genuinely prohibitive.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚲",
                  title: "Use the lakefront path",
                  desc: "The 18-mile public lakefront path runs the entire length of Chicago&apos;s shoreline — one of the great urban outdoor spaces in America. Rent a Divvy bike ($3.30/30 min or $20/day) and ride north from Millennium Park to Wrigleyville, or south to Hyde Park. The city looks completely different from the lakefront than from the streets.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "Check the Second City schedule",
                  desc: "The Second City comedy club (1616 N. Wells St, Old Town) has launched more famous comedians than any club in history — Bill Murray, Tina Fey, Stephen Colbert, John Belushi. Mainstage shows ($30–$45) are consistently excellent. The free improv sets after the late show on Friday and Saturday are an extraordinary deal — just buy a drink.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Chicago" />

          {/* Combine With */}
          <CombineWith currentSlug="chicago-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from O&apos;Hare Airport to downtown Chicago?",
                  a: "Take the CTA Blue Line train directly from O&apos;Hare Airport station (connected to the terminal) to Clark/Lake or any Loop station. The fare is $5, takes 45 minutes, and runs 24 hours. Buy a Ventra card at the airport for tap-on access. An Uber or taxi costs $35–$55 and is often slower during rush hour — the train is genuinely the better option for most travellers.",
                },
                {
                  q: "How many days do you need in Chicago?",
                  a: "Three days is the recommended minimum for a first visit — Day 1 for Millennium Park, Art Institute, and Magnificent Mile; Day 2 for the Architecture River Cruise, the Loop, and the blues clubs; Day 3 for Hyde Park, the Museum of Science and Industry, and the lakefront path. You could spend a week and not exhaust Chicago, but three days covers the essentials without rushing.",
                },
                {
                  q: "What is the best deep dish pizza in Chicago — Lou Malnati&apos;s or Giordano&apos;s?",
                  a: "This is genuinely contested and has no correct answer. Lou Malnati&apos;s is known for its butter crust, Italian sausage, and chunky whole tomato sauce. Giordano&apos;s is a stuffed pizza (slightly different from true deep dish — two layers of dough with cheese in between). Lou&apos;s has the most consistent quality across locations. If you can only go once, Lou Malnati&apos;s on Wells Street in River North is the more reliable choice.",
                },
                {
                  q: "Is Chicago safe for tourists?",
                  a: "The tourist areas of Chicago — the Loop, Millennium Park, River North, the Magnificent Mile, Lincoln Park, Wicker Park, Hyde Park — are safe by any standard. Chicago has high rates of violent crime in specific South and West Side neighbourhoods that are not tourist areas and where visitors do not typically go. The standard tourist itinerary operates entirely in safe zones. Use common sense on the CTA late at night, keep valuables out of sight, and you will have no problems.",
                },
                {
                  q: "What is the best time of year to visit Chicago?",
                  a: "May–June and September–October are the sweet spots — comfortable temperatures (15–24°C), lower hotel prices than peak summer, and all attractions operating. July–August is peak season and genuinely excellent (warm, the lakefront beaches are active, outdoor concerts every weekend) but expensive and crowded. Winter (November–March) is for adventurous visitors who want very low prices, quiet museums, and the experience of Chicago&apos;s legendary cold.",
                },
                {
                  q: "Do I need a car in Chicago?",
                  a: "No — Chicago has one of America&apos;s best public transit systems for a tourist. The CTA L train covers the entire tourist circuit — Blue Line from O&apos;Hare, Red Line along the lakefront from Howard to 95th, Brown Line through Lincoln Park and Wicker Park. Buses fill in the gaps. Parking downtown costs $30–$60/day and traffic in the Loop is genuinely unpleasant. Rent a Divvy bike for the lakefront path instead.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Chicago trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-chicago", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/chicago-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/chicago-architecture-guide", label: "Architecture guide", icon: "🏛️" },
                { href: "/blog/chicago-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="chicago-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA City Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New York City in 3 Days — Manhattan &amp; Beyond", href: "/blog/new-york-3-days" },
                { label: "New Orleans 3 Days — Jazz, Food &amp; History", href: "/blog/new-orleans-3-days" },
                { label: "San Francisco 3 Days — Golden Gate &amp; Fog", href: "/blog/san-francisco-3-days" },
                { label: "Nashville 3 Days — Music City Guide", href: "/blog/nashville-3-days" },
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
