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
const NASHVILLE_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Nashville Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🎵",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Nashville 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nashville in 3 Days — honky tonks, hot chicken and the Grand Ole Opry&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/nashville-3-days"
        imageUrl="https://images.unsplash.com/photo-1545419913-775e2e198e73?w=1200&q=80"
        description="Nashville in 3 Days: Broadway honky tonks, Grand Ole Opry, hot chicken, Country Music Hall of Fame, Bluebird Cafe — complete travel guide with budget breakdown."
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
export default function NashvilleClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NASHVILLE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nashville" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nashville broadway honky tonk neon signs live music tennessee night"
            fallback="https://images.unsplash.com/photo-1545419913-775e2e198e73?w=1600&q=80"
            alt="Nashville Broadway honky tonk bars with neon signs and live country music Tennessee"
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
              <span className="text-white/70">Nashville 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Music City USA
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nashville in 3 Days:
                <em className="italic text-amber-300"> Honky Tonks, Hot Chicken &amp; the Grand Ole Opry</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Live country music pouring from honky tonk bars at noon, hot chicken so spicy it comes with a warning, and the stage where every country legend has played since 1925. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇺🇸 Tennessee, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $85/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Live country music pouring from honky tonk bars at noon on Broadway, hot chicken so spicy it comes with a warning, the Grand Ole Opry where every country star has played since 1925, and a city that has somehow turned line dancing into a major international export &mdash; Nashville, Music City USA.
            </p>
          </blockquote>

          {/* ── WHAT NASHVILLE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Nashville Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nashville is one of those rare cities that actually lives up to its nickname. Music City USA isn&apos;t a marketing slogan &mdash; it&apos;s a literal description. There are more working songwriters per capita here than anywhere else on earth. On any given Tuesday afternoon, you can walk into a free honky tonk on Broadway and hear a band that would headline a festival in any other city playing for tips on a tiny stage.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Grand Ole Opry has broadcast live country music every week since 1925, making it the longest-running radio show in American history. The Ryman Auditorium &mdash; the &quot;Mother Church of Country Music&quot; &mdash; has acoustics that professional musicians describe as the best in the world for an unmiked voice. RCA Studio B on Music Row is where Elvis Presley, Dolly Parton, and Roy Orbison recorded. The Bluebird Cafe is where Garth Brooks was discovered in a room that seats fewer than 100.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Beyond the music, Nashville has developed a genuinely impressive food scene anchored by the legendary hot chicken tradition &mdash; a dish invented in the 1930s that has spread across America but is still best eaten at the places that originated it. Three days gives you enough time to hear the music, eat the chicken, and understand why this city keeps growing faster than almost anywhere else in the United States.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BNA (15 min)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–May / Sep–Oct" />
              <StatCard icon="🎵" label="Live Music Venues" value="180+" />
              <StatCard icon="💰" label="Budget From" value="$85/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Nashville</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "65–80°F, mild weather perfect for walking Broadway and visiting outdoor sites like the Parthenon. The CMA Fest lineup is announced (the festival itself is in June). Centennial Park is in full bloom. Nashville is busy but not yet overwhelmed by summer tourism.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Fall — Equally Excellent",
                  d: "65–78°F, the humidity breaks, and the city enters its Americana Music Festival season in September. The fall colours along the Cumberland River are beautiful and the summer bachelorette party crowds thin out. Hotels are more reasonably priced on weeknights.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Crowded",
                  d: "85–95°F with high humidity. CMA Fest in June brings 80,000+ people. Broadway is packed with bachelorette and bachelor parties every weekend. Hotel prices spike 40–60% on Friday and Saturday nights. The music is still great but the heat and crowds are significant.",
                  b: "Peak season pricing",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Budget Season",
                  d: "35–55°F. Nashville slows down considerably. Hotels are 30–50% cheaper. The honky tonks and the Opry still run full schedules, but outdoor walking is less comfortable. January and February are the quietest months — great for budget travellers who don&apos;t mind the cold.",
                  b: "Best prices",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Nashville</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Nashville International Airport (BNA) is just 15 minutes from downtown. It&apos;s a major hub with direct flights from most US cities and several international connections. Getting from the airport to Broadway is fast and cheap.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into BNA (Nashville International)",
                  d: "Direct flights from most major US cities. Southwest, American, Delta, and United all operate heavy schedules. BNA is compact and easy to navigate. Baggage claim to rideshare pick-up takes about 10 minutes. International travellers connect through Atlanta, Chicago, Dallas, or New York.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "WeGo Bus Route 18 from BNA",
                  d: "The WeGo public bus runs from BNA to downtown Nashville for $2 each way. It runs frequently during the day and takes 25–35 minutes depending on traffic. The stop is outside the terminal at Ground Transportation. This is the budget option and it works well.",
                  b: "Budget option — $2",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Rideshare (Uber / Lyft) from BNA",
                  d: "Rideshare from BNA to downtown Broadway takes 15–25 minutes and costs $15–25 depending on surge pricing. The pick-up area is clearly marked at the terminal. This is the fastest and most convenient option for most travellers, especially with luggage.",
                  b: "Fastest — $15–25",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Drive or rent a car",
                  d: "BNA has all major rental car agencies on-site. Useful for the Jack Daniel&apos;s Distillery day trip (80 minutes south) and getting to the Grand Ole Opry (8 miles east of downtown). Downtown parking in garages runs $15–30/day. Not essential for a Broadway-focused trip but helpful if you plan to explore beyond the city centre.",
                  b: "Best for day trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Nashville Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Nashville experience &mdash; Broadway, the music landmarks, hot chicken, and the Grand Ole Opry &mdash; at a mid-range pace. Adjust up or down based on your budget.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Broadway Honky Tonks · Ryman Auditorium · Hot Chicken"
                cost="$40–80 (food + drinks + optional Ryman tour)"
                items={[
                  "Arrive at BNA. Take the WeGo Bus Route 18 ($2) or a rideshare ($15–25) to downtown. Check into your hotel near Broadway or SoBro (South of Broadway).",
                  "Broadway strip in the afternoon — no cover charge at any of the honky tonks. Walk the entire strip from 1st to 5th Avenue. Every bar has a live band playing from late morning until 3am, and you don\u0027t pay a cent to listen.",
                  "Tootsie\u0027s Orchid Lounge — the most legendary honky tonk in Nashville history. Three floors of live music. Patsy Cline, Willie Nelson, Kris Kristofferson, and Waylon Jennings all played here early in their careers. Free entry, tip the bands $1–5 per set.",
                  "Robert\u0027s Western World — the locals\u0027 favourite. Genuine honky tonk music, no cover, and their famous fried bologna sandwich for $5. The house band is exceptional.",
                  "Ryman Auditorium — the \u0027Mother Church of Country Music.\u0027 Self-guided tour $28, guided backstage tour $35. If there\u0027s a show that evening, book tickets in advance ($35–150) — the acoustics are legendary. Even from the original wooden pews, every note is crystal clear.",
                  "Walk the Second Avenue Historic District — Victorian-era brick buildings along the Cumberland River that have survived since the Civil War era.",
                  "Hot chicken dinner at Prince\u0027s Hot Chicken (the original since the 1930s, cash only, ~$12). Start at Medium — it\u0027s already very hot. Or try Hattie B\u0027s ($10–15) for a more tourist-friendly sit-down experience.",
                  "Back to Broadway for the evening — the strip comes alive after dark. Layla\u0027s Bluegrass Inn and Legend\u0027s Corner are both excellent, still free entry.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Country Music Hall of Fame · RCA Studio B · Bluebird Cafe"
                cost="$60–100 (museums + food + Bluebird reservation)"
                items={[
                  "Country Music Hall of Fame &amp; Museum ($28 general admission) — the most comprehensive music museum in the United States. Hank Williams\u0027 stage suit, Elvis\u0027s gold Cadillac, Taylor Swift\u0027s handwritten lyrics, original recordings, and floor-to-ceiling country music history. Plan 2–3 hours.",
                  "Add the RCA Studio B tour ($42 combo with Hall of Fame) — this is the actual recording studio on Music Row where Elvis Presley recorded over 200 songs, where Dolly Parton recorded \u0027Jolene,\u0027 and where Roy Orbison recorded \u0027Only the Lonely.\u0027 You stand in the room where it happened. Arguably the most historically significant recording space in American music.",
                  "Lunch on Music Row: Rotier\u0027s Restaurant (Nashville institution since 1945, burgers and meat-and-three plates, ~$12) or grab a slice at Five Points Pizza (~$10).",
                  "Walk through Music Row — see the historic recording studios (RCA, Sony, BMG) and the Demonbreun Street murals. This is where the modern Nashville music industry was built.",
                  "Afternoon: The Parthenon in Centennial Park ($10 inside, free exterior). A full-scale replica of the Athenian Parthenon built in 1897, housing a 42-foot gilded statue of Athena — the largest indoor statue in the Western Hemisphere. More impressive than it sounds.",
                  "Rideshare to East Nashville ($8–10) — the hip, artsy neighbourhood where working musicians actually live. Browse Grimey\u0027s New &amp; Preloved Music, the best independent record store in the South.",
                  "Dinner in East Nashville: Margot Cafe &amp; Bar (~$35pp) or the Pharmacy Burger Parlor (~$15).",
                  "Bluebird Cafe (book at bluebirdcafe.com weeks in advance, $7–15 reservation fee) — the legendary songwriter showcase where Garth Brooks was discovered. Fewer than 100 seats. The most intimate live music experience in Nashville. This is non-negotiable if you can get a reservation.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Grand Ole Opry · Nashville Parthenon · Final Broadway Crawl"
                cost="$50–120 (Opry tickets + food + farewell drinks)"
                items={[
                  "Morning: Shelby Bottoms Greenway — free, 5 miles of paved trails along the Cumberland River. Peaceful morning walk or bike ride before the city wakes up.",
                  "Brunch at Puckett\u0027s Grocery &amp; Restaurant (live music at brunch, meat-and-three plates, ~$18) or Biscuit Love in The Gulch (~$16).",
                  "Afternoon: Grand Ole Opry backstage tour ($35) — see the legendary dressing rooms and the circle of wood from the original Ryman stage that\u0027s embedded in the Opry floor. Every artist stands on that circle when they perform.",
                  "Grand Ole Opry show (Tuesday, Friday, or Saturday evenings — book at opry.com, $40–80). A rotating lineup of country legends and emerging artists performing in 30-minute sets. The longest-running radio show in American history, broadcasting live since 1925.",
                  "Alternative: Jack Daniel\u0027s Distillery day trip to Lynchburg, 80 minutes south. Free grounds tour; tasting experiences $20–25. Note: Lynchburg is in a dry county — you can only taste whiskey at the distillery itself.",
                  "Printer\u0027s Alley historic district — Nashville\u0027s original entertainment hub from the 1940s–70s, now revived with bars and live music venues.",
                  "Final Broadway crawl — one last round at Tootsie\u0027s, Robert\u0027s Western World, and Layla\u0027s Bluegrass Inn. Tip the bands generously on your way out.",
                  "Head to BNA: WeGo Bus ($2) or rideshare ($15–25). BNA is 15 minutes from downtown.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nashville" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🎵 Nashville Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Nashville landmarks in order of priority. These are the places that make Nashville unlike any other city in America.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Broadway Honky Tonks",
                  e: "Free (no cover)",
                  d: "The beating heart of Nashville. A dozen or more honky tonk bars lining Lower Broadway, each with a live band playing from late morning until 3am. No cover charge at any of them — the bands play for tips. Tootsie\u0027s Orchid Lounge, Robert\u0027s Western World, Layla\u0027s Bluegrass Inn, and Legend\u0027s Corner are the essential stops.",
                  t: "Must see \u00b7 Half day+",
                },
                {
                  n: "Ryman Auditorium",
                  e: "$28 self-guided / $35 backstage",
                  d: "The \u0027Mother Church of Country Music\u0027 and the original home of the Grand Ole Opry from 1943 to 1974. The acoustics are considered among the best in the world. Even the self-guided tour is worthwhile — you can stand on the stage and sit in the original wooden pews. Evening shows ($35–150) are exceptional.",
                  t: "Must see \u00b7 1–2 hrs",
                },
                {
                  n: "Grand Ole Opry",
                  e: "$40–80 (show) / $35 (backstage tour)",
                  d: "The longest-running radio show in American history, broadcasting live since 1925. Tuesday, Friday, and Saturday evening shows feature a rotating lineup of country legends and new artists in 30-minute sets. The backstage tour shows you the legendary dressing rooms. Book at opry.com — Saturday shows sell out fastest.",
                  t: "Must see \u00b7 3 hrs",
                },
                {
                  n: "Country Music Hall of Fame",
                  e: "$28",
                  d: "The most comprehensive music museum in the United States. Three floors of exhibits spanning the entire history of country music — from its Appalachian roots to Taylor Swift. Hank Williams\u0027 stage suit, Elvis\u0027s gold Cadillac, and thousands of original recordings and instruments. Plan 2–3 hours minimum.",
                  t: "Must see \u00b7 2–3 hrs",
                },
                {
                  n: "The Parthenon",
                  e: "$10",
                  d: "A full-scale replica of the Athenian Parthenon in Centennial Park, built in 1897 for Tennessee\u0027s Centennial Exposition. Inside is a 42-foot gilded statue of Athena, the largest indoor statue in the Western Hemisphere. The exterior at sunset is extraordinary. More impressive than you expect.",
                  t: "Worth it \u00b7 1 hr",
                },
                {
                  n: "Bluebird Cafe",
                  e: "$7–15 reservation",
                  d: "The legendary songwriter-in-the-round showcase where Garth Brooks was discovered. Fewer than 100 seats in an intimate room where the songwriters face each other, not the audience. Book weeks in advance at bluebirdcafe.com — this is Nashville\u0027s hardest reservation and worth every effort.",
                  t: "Iconic \u00b7 2 hrs",
                },
                {
                  n: "RCA Studio B",
                  e: "$42 combo with Hall of Fame",
                  d: "The recording studio on Music Row where Elvis Presley recorded over 200 songs. Also where Dolly Parton, Roy Orbison, the Everly Brothers, and dozens of other legends recorded. You stand in the actual room. Tours depart from the Country Music Hall of Fame.",
                  t: "Don\u0027t miss \u00b7 1 hr",
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
            title="Nashville &mdash; Music, Neon &amp; the Cumberland River"
            subtitle="Music City USA in all its honky tonk, hot chicken glory."
            spots={[
              {
                name: "Broadway Honky Tonks at Night",
                query: "nashville broadway honky tonk neon signs night tennessee",
                desc: "The neon-lit strip of Lower Broadway where live country music pours from every doorway, day and night.",
              },
              {
                name: "Ryman Auditorium",
                query: "ryman auditorium interior nashville mother church country music",
                desc: "The Mother Church of Country Music — original wooden pews and legendary acoustics since 1892.",
              },
              {
                name: "Grand Ole Opry Stage",
                query: "grand ole opry stage nashville performance country music",
                desc: "The stage where every country legend has performed since 1925, with the Ryman circle embedded in the floor.",
              },
              {
                name: "Nashville Hot Chicken",
                query: "nashville hot chicken plate spicy tennessee food",
                desc: "The dish that Nashville exported to the world — fiery, crispy, and best eaten at the places that invented it.",
              },
              {
                name: "The Parthenon Nashville",
                query: "parthenon nashville centennial park tennessee replica",
                desc: "A full-scale Greek temple replica in a Tennessee park, with the largest indoor statue in the Western Hemisphere inside.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nashville can be surprisingly affordable if you take advantage of free live music on Broadway. The main costs are accommodation (which spikes on weekends), the Opry, and museum entry fees. Food ranges from $5 fried bologna sandwiches to $80 fine dining.
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
                    ["🏨 Accommodation", "$45–80/night", "$130–200/night", "$350–650/night"],
                    ["🍽 Food &amp; Drinks", "$25–40/day", "$55–85/day", "$130–200/day"],
                    ["🚌 Transport", "$10–20/day", "$25–40/day", "$50–80/day"],
                    ["🎵 Activities", "$10–30/day", "$40–75/day", "$100–400/day"],
                    ["TOTAL (per person)", "$90–170/day", "$250–400/day", "$630–1,330/day"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium" dangerouslySetInnerHTML={{ __html: cat }} />
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($85–170/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Nashville Downtown Hostel ($45/night), free honky tonk music all day, hot chicken from Prince&apos;s or Hattie B&apos;s ($10–15), WeGo bus ($2 rides). The live music is free — that&apos;s what makes Nashville so budget-friendly.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($250–400/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Graduate Nashville or similar ($150–200/night), Grand Ole Opry show ($40–80), Country Music Hall of Fame + RCA Studio B ($42), Bluebird Cafe ($15 reservation), restaurant meals and bar tabs.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($630+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Hermitage Hotel ($400+/night), private Music City tours ($150–200), Grand Ole Opry premium seats ($95–150), fine dining at The 404 Kitchen or Catbird Seat ($80–155pp), private car service.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Nashville</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay near Broadway or SoBro (South of Broadway) for walking access to the honky tonks. The Gulch is Nashville&apos;s trendiest neighbourhood with excellent restaurants. Book weeknight stays for 30–40% savings — Nashville hotel prices spike dramatically on weekends.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Hermitage Hotel",
                  type: "Luxury historic \u00b7 Downtown",
                  price: "From $400/night",
                  badge: "Most iconic",
                  desc: "Nashville\u0027s only AAA Five Diamond hotel. A Beaux-Arts landmark built in 1910, with a stunning lobby and impeccable service. Walking distance to Broadway and the Ryman. The Art Deco men\u0027s restroom is a registered historic site. This is where Nashville\u0027s history meets modern luxury.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Graduate Nashville",
                  type: "Boutique mid-range \u00b7 Midtown",
                  price: "From $160/night",
                  badge: "Best value boutique",
                  desc: "A music-themed boutique hotel near Vanderbilt University with a rooftop bar overlooking the city. The design pays tribute to Nashville\u0027s music heritage. Walkable to Music Row and a short rideshare from Broadway. The sweet spot between price and character.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Nashville Downtown Hostel",
                  type: "Hostel \u00b7 Downtown",
                  price: "From $45/night",
                  badge: "Best budget",
                  desc: "Clean, social, and walking distance to Broadway. Dorm beds and private rooms available. The common areas are good for meeting other travellers. Free coffee in the morning. For solo budget travellers, this is the obvious choice — Nashville\u0027s hotel prices make hostels a genuine money-saver.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Gulch Hotels (multiple)",
                  type: "Mid-range to luxury \u00b7 The Gulch",
                  price: "From $180/night",
                  badge: "Best neighbourhood",
                  desc: "The Gulch is Nashville\u0027s trendiest district with excellent restaurants and the famous \u0027I Believe in Nashville\u0027 mural. Thompson Nashville, 1 Hotel, and several other boutique properties are all within walking distance. 10-minute walk to Broadway.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Nashville</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nashville&apos;s food scene is anchored by hot chicken — a fiery, cayenne-crusted fried chicken dish invented in the 1930s. Beyond the chicken, the city has a booming restaurant scene that ranges from $5 honky tonk bar food to Michelin-recognized fine dining.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Prince\u0027s Hot Chicken",
                  t: "The original \u00b7 Cash only \u00b7 Multiple locations",
                  d: "The place that started it all in the 1930s. Prince\u0027s is the original Nashville hot chicken restaurant, and purists will tell you it\u0027s still the best. Cash only. The heat levels are serious — Medium is already genuinely hot. The original Ewing Drive location has the most character. ~$12 for a plate.",
                  b: "The original",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Hattie B\u0027s Hot Chicken",
                  t: "Hot chicken \u00b7 Multiple locations",
                  d: "The most accessible Nashville hot chicken experience for visitors. Sit-down dining with clearly marked heat levels from Southern (no heat) to Shut the Cluck Up (extremely hot). The Broadway location always has a queue — go to the Midtown location to skip the wait. $10–15 per plate.",
                  b: "Most popular",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Robert\u0027s Western World",
                  t: "Honky tonk bar food \u00b7 Broadway",
                  d: "The famous fried bologna sandwich ($5) is a Nashville institution. Robert\u0027s is primarily a honky tonk bar with exceptional live music, but the food is surprisingly good and extremely cheap. The perfect Broadway lunch — eat a $5 sandwich while listening to a world-class band play for free.",
                  b: "Best value on Broadway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Puckett\u0027s Grocery &amp; Restaurant",
                  t: "Southern comfort \u00b7 Multiple locations",
                  d: "Live music while you eat, meat-and-three plates (a Southern tradition where you choose one protein and three sides), and genuine Nashville hospitality. The Downtown location is most convenient. ~$18 per plate. Great for brunch.",
                  b: "Best Southern food",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "The 404 Kitchen",
                  t: "Fine dining \u00b7 The Gulch",
                  d: "Michelin-recognized New American cuisine in a converted shipping container. Seasonal menu with Southern influences. ~$80pp. One of Nashville\u0027s best restaurants for a special dinner. Reservations recommended.",
                  b: "Best fine dining",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Nashville Tennessee"
            hotels={[
              {
                name: "The Hermitage Hotel",
                type: "Luxury historic \u00b7 Downtown Nashville",
                price: "From $400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/the-hermitage-hotel.html?aid=2820480",
              },
              {
                name: "Graduate Nashville",
                type: "Boutique mid-range \u00b7 Midtown",
                price: "From $160/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/us/graduate-nashville.html?aid=2820480",
              },
              {
                name: "Thompson Nashville",
                type: "Boutique luxury \u00b7 The Gulch",
                price: "From $280/night",
                rating: "5",
                badge: "Best rooftop",
                url: "https://www.booking.com/hotel/us/thompson-nashville.html?aid=2820480",
              },
              {
                name: "1 Hotel Nashville",
                type: "Luxury \u00b7 The Gulch",
                price: "From $350/night",
                rating: "5",
                badge: "Newest luxury",
                url: "https://www.booking.com/hotel/us/1-hotel-nashville.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Grand Ole Opry Show Tickets",
                duration: "3 hrs",
                price: "From $40/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=grand+ole+opry+nashville&partner_id=PSZA5UI",
              },
              {
                name: "Nashville City Sightseeing Tour",
                duration: "3 hrs",
                price: "From $35/person",
                badge: "Best overview",
                url: "https://www.getyourguide.com/s/?q=nashville+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Country Music Hall of Fame Tickets",
                duration: "2–3 hrs",
                price: "From $28/person",
                url: "https://www.getyourguide.com/s/?q=country+music+hall+of+fame+nashville&partner_id=PSZA5UI",
              },
              {
                name: "Jack Daniel\u0027s Distillery Day Trip",
                duration: "Full day",
                price: "From $95/person",
                url: "https://www.getyourguide.com/s/?q=jack+daniels+distillery+tour+nashville&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Nashville</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎤",
                  title: "Not Booking the Bluebird Cafe in Advance",
                  desc: "The Bluebird Cafe seats fewer than 100 people and hosts some of the most intimate songwriter showcases in the world. Weekend shows sell out weeks ahead. Book at bluebirdcafe.com the moment you know your Nashville dates \u2014 the $7\u201315 reservation fee is the best value in Music City.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌶️",
                  title: "Ordering Too-Spicy Hot Chicken on Your First Try",
                  desc: "Nashville hot chicken has five or more heat levels. Start at Medium \u2014 it\u0027s already genuinely hot. \u0027Hot\u0027 will make you sweat. \u0027Damn Hot\u0027 and above will cause most people real pain. The chicken is so good that going too spicy and having to stop eating is a genuine tragedy. Work your way up.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏨",
                  title: "Booking a Weekend Hotel Without Lead Time",
                  desc: "Nashville is one of the USA\u0027s most popular bachelorette destinations. Downtown hotels on Friday and Saturday nights in spring and fall sell out months ahead and prices spike 40\u201360%. Book 8\u201312 weeks ahead for weekend stays. Weeknights are 30\u201340% cheaper and the city is more relaxed.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚌",
                  title: "Assuming Nashville is Fully Walkable",
                  desc: "Downtown Broadway is extremely walkable, but Nashville is a car-centric Southern city. The Grand Ole Opry is 8 miles from downtown ($20 rideshare). East Nashville is a $10 rideshare. Jack Daniel\u0027s is 80 minutes by car. Budget for rideshares or rent a car for day trips. The WeGo bus exists but runs infrequently outside main routes.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎸",
                  title: "Only Spending Time on Broadway",
                  desc: "Broadway is a must, but if you only stay there you\u0027ll miss the real Nashville. East Nashville\u0027s Five Points is where working musicians actually live and play. Grimey\u0027s record store, the Pharmacy Burger, Attaboy cocktail bar, and small venues like 3rd &amp; Lindsley are where you hear tomorrow\u0027s country stars tonight.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💵",
                  title: "Forgetting to Tip the Bands",
                  desc: "Every honky tonk band on Broadway plays all day for tips \u2014 there\u0027s no cover charge, but they depend on your generosity. $1\u20135 per set is the expected norm. You\u0027re getting a live music experience that costs $50+ in any other city, completely free. Be generous.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Nashville</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎵",
                  title: "Tuesday and Friday Opry shows are the sweet spot",
                  desc: "Saturday night Grand Ole Opry shows are the most prestigious and sell out first. But Friday shows often feature equally big names with a more relaxed crowd, and Tuesday shows are the best-kept secret \u2014 dedicated fans and industry insiders fill the seats. Check opry.com for the lineup before booking.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍗",
                  title: "Go to the Midtown Hattie B\u0027s, not Broadway",
                  desc: "The Hattie B\u0027s on Broadway always has a 45\u201390 minute wait. The Midtown location on 19th Avenue serves the exact same food with a fraction of the queue. Same chicken, same heat levels, half the wait. This is the single most useful practical tip in Nashville.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "The Parthenon at sunset is extraordinary",
                  desc: "A full-scale replica of the Athenian Parthenon in a Tennessee park sounds like a novelty \u2014 but the Nashville Parthenon is genuinely stunning. The 42-foot gilded Athena statue inside is the largest indoor statue in the Western Hemisphere. Pay the $10 to go inside, and visit the exterior at golden hour for the best photos.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🥃",
                  title: "Jack Daniel\u0027s is in a dry county",
                  desc: "Moore County, Tennessee \u2014 home to the Jack Daniel\u0027s Distillery \u2014 is a dry county. You can only taste whiskey at the distillery itself as part of a paid tour. There are no bars or liquor stores in Lynchburg. This quirk of Tennessee law has existed since Prohibition. Worth knowing before you drive 80 minutes expecting a pub crawl.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📅",
                  title: "Visit on weeknights to save 30\u201340%",
                  desc: "Nashville\u0027s hotel prices, restaurant wait times, and Broadway crowds all spike dramatically on Friday and Saturday nights. A Tuesday\u2013Thursday visit gives you the same live music, the same honky tonks, the same food \u2014 at 30\u201340% lower hotel prices and with significantly shorter queues everywhere.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎤",
                  title: "Check Grimey\u0027s community board for live shows",
                  desc: "Grimey\u0027s New &amp; Preloved Music in East Nashville has a community board listing every live show happening in Nashville that week. Many of the best performances happen at small venues you\u0027d never find otherwise \u2014 $5\u201315 cover charges for artists who will be headlining festivals next year.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nashville" />

          {/* Combine With */}
          <CombineWith currentSlug="nashville-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the best time to visit Nashville?",
                  a: "April\u2013May and September\u2013October are ideal. Spring brings 65\u201380\u00b0F weather, blooming parks, and the lead-up to CMA Fest. Fall has cooler temperatures, the Americana Music Festival, and fewer bachelorette party crowds. Summer (June\u2013August) is hot, humid, and extremely crowded. Winter is the cheapest time to visit but outdoor walking is less comfortable.",
                },
                {
                  q: "How do I get from Nashville Airport (BNA) to downtown?",
                  a: "The WeGo Bus Route 18 runs from BNA to downtown Nashville for $2 each way \u2014 it takes 25\u201335 minutes. A rideshare (Uber/Lyft) costs $15\u201325 and takes 15\u201325 minutes. There\u0027s no direct rail connection. BNA is compact \u2014 you\u0027ll be in a car or bus within 10 minutes of landing.",
                },
                {
                  q: "Is Nashville safe for tourists?",
                  a: "Downtown Nashville and the Broadway area are very tourist-friendly and busy with visitors year-round. East Nashville is safe and increasingly gentrified. The Gulch and Midtown are fine. Like any city, exercise standard awareness late at night. Broadway specifically is extremely well-patrolled given the tourist economy.",
                },
                {
                  q: "Can you do the Grand Ole Opry and Jack Daniel\u0027s in the same trip?",
                  a: "Yes, but not on the same day. Jack Daniel\u0027s is 80 minutes south and the Grand Ole Opry is 8 miles east of downtown. Plan Jack Daniel\u0027s as a full day trip (leave by 9am, back by 4pm). Go to the Opry on a separate evening. A logical 3-day split: Day 1 Broadway honky tonks, Day 2 museums + Bluebird Cafe, Day 3 Opry or Jack Daniel\u0027s day trip.",
                },
                {
                  q: "Do I need a car in Nashville?",
                  a: "Not for a Broadway-focused trip. Downtown, SoBro, and The Gulch are all walkable. The WeGo bus ($2) covers the airport route. Rideshares handle East Nashville ($10) and the Grand Ole Opry ($20). You only need a car if you\u0027re doing the Jack Daniel\u0027s day trip to Lynchburg (80 minutes each way) or want flexibility for multiple day trips.",
                },
                {
                  q: "How far in advance should I book the Bluebird Cafe?",
                  a: "Book as soon as you know your Nashville dates. Weekend shows sell out 2\u20134 weeks in advance. Weeknight shows are easier but still fill up. Go to bluebirdcafe.com and check the calendar \u2014 reservations open on a rolling basis. The $7\u201315 reservation fee is the best money you\u0027ll spend in Nashville. There are no walk-in seats for most shows.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nashville trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-nashville", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/nashville-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-nashville", label: "How to get there", icon: "✈️" },
                { href: "/blog/nashville-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="nashville-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New Orleans 4 Days &mdash; Jazz &amp; Cajun Food", href: "/blog/new-orleans-4-days" },
                { label: "Memphis 2 Days &mdash; Beale Street &amp; Graceland", href: "/blog/memphis-2-days" },
                { label: "Asheville 3 Days &mdash; Mountains &amp; Breweries", href: "/blog/asheville-3-days" },
                { label: "USA South Road Trip &mdash; Complete Guide", href: "/blog/usa-south-road-trip" },
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
