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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const AUSTIN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Austin Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🎸",  label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍖",  label: "Where to Eat" },
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
          href: `mailto:?subject=Austin 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Austin in 3 Days — Franklin BBQ, live music and the weird capital of Texas&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/austin-3-days"
        imageUrl="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&q=80"
        description="Austin in 3 Days: Franklin Barbecue, Sixth Street live music, Barton Springs Pool, 1.5 million bats at dusk — complete Texas travel guide with budget breakdown."
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
export default function AustinClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AUSTIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="austin texas sixth street live music capitol building texas"
            fallback="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1600&q=80"
            alt="Austin Texas Sixth Street live music bars and Texas State Capitol"
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
              <span className="text-white/70">Austin 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Live Music Capital
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Austin in 3 Days:
                <em className="italic text-amber-300"> BBQ, Live Music &amp; Keeping It Weird</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Franklin Barbecue queues at dawn, Sixth Street live music every night, 1.5 million bats at dusk, and Barton Springs for $5. The complete guide to America&apos;s weirdest city.
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
              <span>🎸 Texas, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $75/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The live music capital of the world has more live music venues per capita than Nashville — on any given Tuesday night you can hear world-class blues, country, jazz, and rock simultaneously from bars within a single block of each other. People queue from 6am for Franklin Barbecue&apos;s 11am opening, willing to wait four hours for brisket that redefines the word.
            </p>
          </blockquote>

          {/* ── WHAT AUSTIN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Austin Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Austin defies easy summary. It is simultaneously the Live Music Capital of the World, the home of the world&apos;s most obsessed BBQ culture, a major tech hub that has drawn Apple, Tesla, Oracle, and Google, and a city that has adopted &quot;Keep Austin Weird&quot; as an official civic philosophy. The city has more live music venues per capita than Nashville. People wait four hours in a queue for brisket. You can swim in a natural 68°F spring in the middle of the city for $5.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tech industry has transformed a music city into what locals call Silicon Hills without, somehow, destroying the weird. Sixth Street still erupts with live music every night of the week. Franklin Barbecue still sells out every day despite the four-hour queue. The Congress Avenue Bridge still has 1.5 million Mexican free-tailed bats. Barton Springs Pool still costs $5. Austin absorbs change and remains, stubbornly, Austin.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days here hits the essential experiences: Franklin&apos;s brisket, Sixth Street on a Friday, the bat emergence at dusk, Barton Springs in the afternoon, South Congress Avenue vintage shopping, the Texas State Capitol (taller than the US Capitol in Washington DC), and the extraordinary museum collection at the Blanton. It is a city that rewards wandering and punishes rushing.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="AUS" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May / Oct–Nov" />
              <StatCard icon="🎸" label="Music Venues" value="250+" />
              <StatCard icon="💰" label="Budget From" value="$75/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "22–30°C, perfect for outdoor activities. Texas bluebonnets transform the Hill Country in March–April. SXSW (South by Southwest) takes over the city in March — music, film, and tech converging in one extraordinary 10-day event. Warm evenings ideal for Sixth Street and Barton Springs. Book accommodation far in advance during SXSW.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Equally Excellent",
                  d: "20–28°C, cooling off significantly from summer. Austin City Limits Music Festival (ACL) in October draws 75,000 people per day to Zilker Park for three days. Hill Country fall colours are at their best in November. Comfortable temperatures for Franklin Barbecue queuing and outdoor exploration.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Genuinely Brutal",
                  d: "38–42°C with humidity. Outdoor activities become difficult by noon. Barton Springs (68°F year-round) becomes essential. Schedule outdoor activities before 10am and after 6pm. Air-conditioned venues — the Blanton Museum, the Bullock History Museum, indoor music venues — become your friends. Not recommended for first-time visitors.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Mild but Variable",
                  d: "8–18°C, occasionally colder with rare ice storms (Austin infrastructure handles cold poorly — 2021 freeze was catastrophic). Fewer tourists, lower prices, the bat colony is absent (they migrate). Live music scene is unaffected year-round. Good option if heat is a concern and you&apos;re not targeting SXSW or ACL.",
                  b: "Quiet season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Austin</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Austin-Bergstrom International Airport (AUS) is 8 miles southeast of downtown — approximately 20 minutes by rideshare ($20–30) or 45 minutes on the <strong className="font-medium">100 Flyer express bus</strong> ($1.25). There is no direct rail to downtown.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into AUS (Austin-Bergstrom International)",
                  d: "Direct flights from most major US cities: Dallas/DFW (50 min), Houston/IAH (50 min), Los Angeles (3 hrs), New York/JFK (3.5 hrs), Chicago/ORD (2.5 hrs). International connections via Dallas, Houston, or Los Angeles. From India: typically 20–24 hrs total via a US gateway such as New York, Chicago, or Houston.",
                  b: "Main option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Houston or Dallas",
                  d: "Greyhound and FlixBus run Austin–Houston (3 hrs, from $15–30) and Austin–Dallas (3.5 hrs, from $15–35). Budget-friendly option if flying into a larger Texas hub. Buses arrive at the Austin Convention Center area.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Dallas, Houston, or San Antonio",
                  d: "Austin is 3 hrs from Dallas (193 miles via I-35), 2.5 hrs from Houston (162 miles via US-290), and 1.5 hrs from San Antonio (80 miles via I-35). The I-35 corridor between San Antonio and Dallas runs directly through Austin. Renting a car is highly recommended for day trips to Lake Travis and the Hill Country.",
                  b: "Best for day trips",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚕",
                  t: "Getting Around Austin",
                  d: "Downtown, South Congress, and East Austin are walkable or bikeable (Bird/Lime scooters everywhere). Uber and Lyft are heavily used and reasonably priced outside peak hours — surge pricing during SXSW and ACL can be extreme ($40–80 for short trips). MetroRail connects downtown to North Austin and the Domain. A rental car is essential for Lake Travis and Hill Country day trips.",
                  b: "Rideshare city",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Austin Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around Austin&apos;s rhythms — Franklin Barbecue requires an early queue, live music peaks after 9pm, and the bat emergence happens at dusk. All prices in USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Sixth Street · South Congress · Texas State Capitol"
                cost="$65–85 (accommodation + food + transport)"
                items={[
                  "Arrive at AUS, take the 100 Flyer express bus downtown ($1.25) or rideshare ($20–30). Check into Austin Hostel or Drifter Jack's Hostel (dorm $35–45/night) or your hotel.",
                  "Morning: Texas State Capitol grounds (free) — the Texas Capitol is actually taller than the US Capitol in Washington DC. Free interior tours run hourly 8:30am–4:30pm. The rotunda and Senate chamber are genuinely impressive.",
                  "Lunch on South Congress Avenue (SoCo): Torchy&apos;s Tacos ($10–14) is a local institution — the Trailer Park taco (fried chicken, green chile, pico) is the move. Amy&apos;s Ice Creams ($5) for dessert.",
                  "Afternoon: walk South Congress from 1st Street to Oltorf — vintage boutiques, local independent shops, murals including the famous &quot;I love you so much&quot; wall at Jo&apos;s Coffee.",
                  "Late afternoon: Congress Avenue Bridge — check the bat emergence time (varies by sunset). Arrive 20 minutes before sunset to claim a spot on the bridge for the emergence of 1.5 million Mexican free-tailed bats. It is completely free and completely extraordinary.",
                  "Evening: Sixth Street begins to energise around 9pm. Start on the East Sixth Street end for more authentic bars (local crowd, no cover or $5). Hole in the Wall, Emo&apos;s, and Stubb&apos;s outdoor stage (free outdoor shows some nights) are the anchors.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Franklin Barbecue Queue · Barton Springs · Rainey Street"
                cost="$65–90 (BBQ + pool + food + drinks)"
                items={[
                  "Arrive at Franklin Barbecue (900 E 11th St) by 7am — the queue starts this early for an 11am opening. Bring a folding chair, coffee thermos, and a book. The queue is a genuine social event: people are friendly, excited, and have often planned this meal for months.",
                  "Franklin opens at 11am. Order the brisket (half-pound plate with sides ~$22), ribs, and at least one link of sausage. The brisket — post oak smoked for 12–18 hours, salt and pepper only — will ruin all other brisket for the rest of your life. Franklin sells out every day, usually by 1pm.",
                  "Alternative if you don&apos;t want to queue: La Barbecue (shorter queue, nearly as good brisket) or Terry Black&apos;s BBQ (no queue, great quality, larger portions). Both on East 6th/nearby.",
                  "Afternoon: Barton Springs Pool ($5) — a natural spring-fed pool, 68°F year-round regardless of outside temperature, one-third of a mile long, in the middle of Zilker Park. Locals swim here in December. In Austin summer heat it is a lifesaver. Bring your own towel.",
                  "Walk around Zilker Park ($0) — 351 acres along the Colorado River with the skyline as backdrop. Austin City Limits Music Festival takes place here every October.",
                  "Sunset: Rainey Street bars — Banger&apos;s Sausage House and Beer Garden (outdoor, enormous selection of Texas craft beer) or Half Step (acclaimed cocktail bar). A more local, less touristy scene than Sixth Street.",
                  "Evening: Continental Club on South Congress Avenue — one of the most historically significant music venues in American roots music. Nightly live country, blues, and rock. Cover $10–15.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="UT Austin · Blanton Museum · East Austin · Departure"
                cost="$55–75 (museums + food + transport)"
                items={[
                  "Morning: walk the University of Texas Austin campus — the Main Tower, the South Mall, and the LBJ Presidential Library ($10) are the main stops. The campus is beautiful and free to explore.",
                  "Blanton Museum of Art ($12) — one of the best university art museums in the USA. The standout: Ellsworth Kelly&apos;s &quot;Austin&quot; — a chapel of coloured light commissioned specifically for UT, completed in 2018 shortly before Kelly died. Extraordinary and unmissable.",
                  "East Austin brunch: Veracruz All Natural food truck on Airport Blvd — widely considered the best breakfast tacos in Austin. The migas taco (eggs with crispy tortilla) and the Real Women Don&apos;t Eat Quiche are legendary. $3–5 each.",
                  "Walk the East Austin street art district — murals along Cesar Chavez Street and East 6th Street. The neighbourhood has transformed from industrial to one of Austin&apos;s most creative areas.",
                  "Bullock Texas State History Museum ($13) — three floors of Texas history with an IMAX theatre. Better than it sounds: the exhibits on the Texas Revolution, oil boom, and Space Center are genuinely engaging.",
                  "Optional if departing north: Round Rock Donuts (20 min from downtown) — the giant sugar-dusted rounds are a Texas institution ($2 each). Take a dozen home.",
                  "Head to AUS — Austin-Bergstrom has decent Tex-Mex options (Tacodeli in the terminal) if you want one final taco before departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Austin" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🎸 Austin Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of 2026. Most of Austin&apos;s best experiences are free — the Capitol, Sixth Street, Barton Springs, the bat colony, and South Congress.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Franklin Barbecue",
                  e: "~$22–30 (food)",
                  d: "The most talked-about BBQ in America. Post oak smoked brisket, salt and pepper only, 12–18 hour cook. Sells out every day. Queue from 6–7am for an 11am opening. Worth every minute of the wait — brisket, ribs, and jalapeño cheddar sausage are the order.",
                  t: "Must do · Half day",
                },
                {
                  n: "Sixth Street Entertainment District",
                  e: "Free (bar tabs vary)",
                  d: "Six blocks of live music bars from Congress Avenue to I-35. Energises after 9pm nightly. East Sixth is more local and authentic; West Sixth is upscale bars and restaurants. Red River Cultural District (Stubb&apos;s, Mohawk, Emo&apos;s) is where the serious Austin music scene happens.",
                  t: "Must do · Evenings",
                },
                {
                  n: "Barton Springs Pool",
                  e: "$5 entry",
                  d: "Natural spring-fed pool, 68°F year-round, in the middle of Zilker Park. One-third of a mile long. Locals swim here in all seasons. The Barton Creek Greenbelt hiking trail starts from the pool and winds through limestone canyons — completely free. The best $5 in Texas.",
                  t: "Must do · Afternoons",
                },
                {
                  n: "Congress Avenue Bat Colony",
                  e: "Free",
                  d: "1.5 million Mexican free-tailed bats emerge from under the Congress Avenue Bridge at dusk, March through November. The largest urban bat colony in North America. Arrive 20 minutes before sunset. Watch from the bridge or the kayak launch area below. Takes 45 minutes for all bats to emerge.",
                  t: "Must see · Dusk",
                },
                {
                  n: "Texas State Capitol",
                  e: "Free",
                  d: "The Texas State Capitol is taller than the US Capitol in Washington DC — Texans made sure of it. Free interior tours run hourly 8:30am–4:30pm. The rotunda, House and Senate chambers, and the underground extension are all accessible. The grounds are beautiful.",
                  t: "Free · 1–1.5 hrs",
                },
                {
                  n: "South Congress Avenue (SoCo)",
                  e: "Free to walk",
                  d: "Austin&apos;s most characterful street — vintage clothing boutiques, local food trucks, the &quot;I love you so much&quot; mural at Jo&apos;s Coffee, Amy&apos;s Ice Creams, and Torchy&apos;s Tacos. Walk from 1st Street to Oltorf Street. The street reflects what Austin aspires to be: independent, creative, weird.",
                  t: "Afternoons · 1–2 hrs",
                },
                {
                  n: "Blanton Museum of Art (UT Austin)",
                  e: "$12",
                  d: "One of the finest university art museums in the USA. The collection is exceptional — but the reason to visit is Ellsworth Kelly&apos;s &quot;Austin,&quot; a freestanding chapel of coloured glass light commissioned specifically for UT. Kelly completed the design in 2015 and died before seeing it built; it opened in 2018. Deeply moving.",
                  t: "Art lovers · 1.5 hrs",
                },
                {
                  n: "Rainey Street Historic District",
                  e: "Free to explore",
                  d: "A street of craftsman bungalows converted into bars, restaurants, and coffee shops. More local and less touristy than Sixth Street. Banger&apos;s Sausage House, Half Step cocktail bar, and Bangers&apos; outdoor biergarten are the anchors. Good for early evening before Sixth Street.",
                  t: "Evening · 2–3 hrs",
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
            title="Austin — Music, BBQ &amp; the Weird Capital of Texas"
            subtitle="Live music, world-class brisket, natural springs, and 1.5 million bats at dusk."
            spots={[
              {
                name: "Sixth Street Live Music",
                query: "austin texas sixth street live music bars night entertainment",
                desc: "Sixth Street at night — Austin&apos;s famous entertainment district, where live music pours from every bar simultaneously.",
              },
              {
                name: "Franklin Barbecue Brisket",
                query: "franklin barbecue austin texas brisket smoked meat queue",
                desc: "Franklin Barbecue&apos;s legendary post oak smoked brisket — the queue starts at dawn for the 11am opening.",
              },
              {
                name: "Texas State Capitol",
                query: "texas state capitol building austin dome architecture",
                desc: "The Texas State Capitol — taller than the US Capitol in Washington DC, with free interior tours daily.",
              },
              {
                name: "Barton Springs Pool",
                query: "barton springs pool austin texas natural spring swimming",
                desc: "Barton Springs Pool — a natural 68°F spring in Zilker Park, open year-round for $5 entry.",
              },
              {
                name: "South Congress Avenue",
                query: "south congress avenue austin texas shops street murals",
                desc: "South Congress Avenue — Austin&apos;s most characterful street, with the &quot;I love you so much&quot; mural and the best taco trucks in Texas.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Austin can be done on a genuine budget — the Capitol, Sixth Street, the bat colony, and Barton Springs are free or nearly free. The main costs are accommodation (which surges dramatically during SXSW and ACL) and Franklin Barbecue. All prices in USD.
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
                    ["🏨 Accommodation (per night)", "$35–45 (hostel dorm)", "$180–220 (boutique)", "$350–700 (Four Seasons)"],
                    ["🍖 Food (per day)", "$20–30 (tacos + trucks)", "$55–80 (restaurants)", "$100–150 (Uchi/Odd Duck)"],
                    ["🚕 Transport (per day)", "$5–15 (bus + rideshare)", "$25–45 (rideshare)", "$60–200 (private car)"],
                    ["🎸 Activities (per day)", "$15–25 (Capitol + pool)", "$30–60 (museums + kayak)", "$150–600 (tours + boat)"],
                    ["TOTAL (per day)", "$75–115/day", "$290–405/day", "$660–1,650/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($75–115/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Austin Hostel or Drifter Jack&apos;s ($35–45/night dorm), eat at food trucks and Torchy&apos;s Tacos, take the 100 Flyer bus from AUS, and walk Sixth Street for free. Franklin Barbecue is $22 for a plate — budget travellers should not skip it.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">⚠️ SXSW &amp; ACL Surge</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">During SXSW (March) and ACL (October), accommodation rates double or triple — a $180 boutique hotel becomes $400+. Book 3–4 months in advance. Rideshare surge pricing is extreme. Budget an extra $200–400 over your base daily cost during festival weeks.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Austin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Austin has four main areas to stay: Downtown (walkable to Capitol and Sixth Street), East Austin (trendiest neighbourhood, best restaurants), South Congress (boutique hotels, walkable to SoCo), and the Domain (north Austin tech area, useful if that&apos;s your base).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Magdalena",
                  type: "Boutique · South Congress Avenue",
                  price: "From $180/night",
                  badge: "Best location",
                  desc: "Pool-bar boutique hotel designed by local architects, directly on South Congress Avenue. Walking distance to Jo&apos;s Coffee, Torchy&apos;s Tacos, and the Continental Club. The outdoor bar is a scene in itself. Book well in advance — consistently full.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Kimpton Hotel Van Zandt",
                  type: "Boutique music hotel · Rainey Street",
                  price: "From $200/night",
                  badge: "Most Austin",
                  desc: "Music-themed boutique hotel on Rainey Street with live performances in the lobby bar. Walking distance to Rainey Street bars and a short Lyft to Sixth Street. The rooftop pool has city views. The most distinctly Austin hotel experience at the mid-range tier.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Austin Hostel / Drifter Jack&apos;s Hostel",
                  type: "Budget · Central locations",
                  price: "$35–45/night (dorm)",
                  badge: "Best budget",
                  desc: "Two solid budget options in central Austin. Austin Hostel is near campus and walkable to downtown. Drifter Jack&apos;s is on the East Side near the food scene. Both clean, well-run, and with good common areas. The best options for solo budget travellers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Four Seasons Austin",
                  type: "Luxury · Downtown Colorado River",
                  price: "From $450/night",
                  badge: "Best luxury",
                  desc: "On the banks of Lady Bird Lake, the Four Seasons Austin has one of the city&apos;s best pools and the finest breakfast in town. Walking distance to the Congress Avenue Bridge bat colony. The terrace overlooking the lake at sunset is exceptional. Reserve the spa well in advance.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍖 Where to Eat in Austin</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Austin&apos;s food scene is extraordinary for a city of its size. Central Texas BBQ is the headline act, but the breakfast taco culture, the Japanese restaurant scene (Uchi/Uchiko), and the food truck parks are equally serious. Do not leave without eating at least three tacos.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Franklin Barbecue",
                  t: "Central Texas BBQ · East 11th Street",
                  d: "The most discussed BBQ in America. Post oak smoked brisket with salt and pepper only — no sauce needed, no sauce wanted. Queue from 6–7am for the 11am opening. Full brisket plate with sides $22–28. Sells out every day. If you can only eat one meal in Austin, this is it.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Torchy&apos;s Tacos",
                  t: "Tex-Mex tacos · Multiple locations",
                  d: "Austin&apos;s most beloved taco chain (and it deserves the love). The Trailer Park (fried chicken, green chile, pico de gallo) and the Democrat (pulled pork, mango habanero) are the signatures. Multiple SoCo and downtown locations. $10–14 for a full order. Open late.",
                  b: "Austin institution",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Uchi",
                  t: "Japanese farmhouse · South Lamar",
                  d: "Tyson Cole&apos;s original restaurant — the one that put Austin on the national culinary map. Japanese farmhouse cuisine with Texas influences. The daily tastings menu ($85–100/person) is extraordinary. Reservations essential — book 2–3 weeks in advance. Uchiko (sister restaurant, North Loop) is equally acclaimed.",
                  b: "Fine dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Juan in a Million",
                  t: "Mexican breakfast · East César Chávez",
                  d: "East Austin&apos;s legendary breakfast taco institution. The Don Juan — a massive flour tortilla stuffed with egg, potato, bacon, cheese, and your choice of salsa — is the move. Under $6. Cash only. Opens at 7am. The line moves fast and the banter with the counter staff is part of the experience.",
                  b: "Best tacos",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Food Trucks on South Congress and East 6th",
                  t: "Street food · Various locations",
                  d: "Austin&apos;s food truck culture is serious. Veracruz All Natural (breakfast tacos, Airport Blvd), Via 313 Detroit-style pizza (multiple parks), and Micklethwait Craft Meats (BBQ truck, East 11th) are among the best. Most truck parks have covered seating and a full bar. $8–15 per person.",
                  b: "Essential Austin",
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
            destination="Austin Texas"
            hotels={[
              {
                name: "Hotel Magdalena",
                type: "Boutique · South Congress Avenue",
                price: "From $180/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/us/magdalena-austin.html?aid=2820480",
              },
              {
                name: "Kimpton Hotel Van Zandt",
                type: "Music boutique · Rainey Street",
                price: "From $200/night",
                rating: "5",
                badge: "Most Austin",
                url: "https://www.booking.com/hotel/us/van-zandt-austin.html?aid=2820480",
              },
              {
                name: "Four Seasons Austin",
                type: "Luxury · Lady Bird Lake",
                price: "From $450/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/us/four-seasons-austin.html?aid=2820480",
              },
              {
                name: "South Congress Hotel",
                type: "Boutique · South Congress",
                price: "From $160/night",
                rating: "4",
                badge: "Great value",
                url: "https://www.booking.com/hotel/us/south-congress-austin.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Austin Live Music & Sixth Street Walking Tour",
                duration: "3 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=austin+live+music+tour&partner_id=PSZA5UI",
              },
              {
                name: "Congress Avenue Bat Colony Kayak Tour",
                duration: "2 hrs",
                price: "From $55/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=austin+bat+colony+kayak&partner_id=PSZA5UI",
              },
              {
                name: "Texas Hill Country Day Trip from Austin",
                duration: "8 hrs",
                price: "From $90/person",
                url: "https://www.getyourguide.com/s/?q=austin+hill+country+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Austin Food Tour: BBQ & Tacos",
                duration: "3 hrs",
                price: "From $65/person",
                url: "https://www.getyourguide.com/s/?q=austin+food+tour+bbq&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Austin</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⏰",
                  title: "Arriving at Franklin Barbecue after 9am",
                  desc: "Franklin sells out every single day, usually by 1pm. Arrive at 11am when they open without having queued and you will be turned away. The queue starts at 6–7am. Bring a camp chair, coffee, snacks, and patience. Alternatively: La Barbecue (shorter queue) or Terry Black&apos;s (no queue) — both excellent.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🚗",
                  title: "Assuming you don&apos;t need a car",
                  desc: "Downtown, South Congress, and East Austin are walkable — but Lake Travis, the Hill Country, Round Rock, and LBJ Ranch all require a car. Austin&apos;s public transport is limited outside the central corridor. Rent a car for day trips or you&apos;ll pay $40–60 each way in rideshares. Lyft/Uber surge pricing during SXSW and ACL Festival is extreme.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "🎸",
                  title: "Only going to Sixth Street (and missing the better venues)",
                  desc: "Sixth Street is famous but Red River Cultural District (Stubb&apos;s, Mohawk, Emo&apos;s, Antone&apos;s) is where Austin&apos;s real music scene lives. South Congress has the Continental Club — one of the most historically important music venues in American roots music. Don&apos;t spend all three nights on crowded tourist Sixth Street.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🌡️",
                  title: "Underestimating Austin summer heat",
                  desc: "June–August in Austin is genuinely brutal — 38–42°C (100–107°F) with humidity. Outdoor activities become difficult by noon. Schedule outdoor plans for before 10am and after 6pm. Barton Springs (68°F year-round) is essential. March–May and October–November are far more pleasant for first-time visitors.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "📅",
                  title: "Not checking the live music calendar in advance",
                  desc: "Austin has national-level acts most nights — but the best shows sell out weeks ahead. Check Do512.com (Austin&apos;s best events calendar) before you travel and book tickets for any shows you want. Stubb&apos;s outdoor amphitheater and ACL Live at the Moody Center have ticketed shows. The free outdoor shows are great but ticketed shows are often extraordinary.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🦇",
                  title: "The bat emergence is free and extraordinary",
                  desc: "Congress Avenue Bridge hosts the largest urban bat colony in North America — 1.5 million Mexican free-tailed bats emerge at dusk March through November. Show up 20 minutes before sunset, stand on the bridge or watch from the kayak launch below. It takes 45 minutes for all bats to emerge. Completely free, completely spectacular.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌮",
                  title: "Breakfast tacos are the religion — order correctly",
                  desc: "Austin&apos;s breakfast taco is a cultural institution. The best are at Veracruz All Natural (food truck), Juan in a Million (East Austin), and Tacodeli. Order: migas taco (eggs with crispy tortilla strips), barbacoa taco (braised beef cheek), and the Don Juan at Juan in a Million. Under $5 each. Eat three.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💻",
                  title: "SXSW is worth building a trip around",
                  desc: "South by Southwest (March, 10 days) transforms Austin into the world&apos;s largest convergence of music, film, and tech. A wristband ($200–300) gives access to hundreds of official showcases. Dozens of free outdoor shows happen simultaneously — walk Sixth Street and Red River for free world-class performances. The energy during SXSW is unlike any other event.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏊",
                  title: "Barton Springs is the best $5 you&apos;ll spend in Texas",
                  desc: "Barton Springs Pool is a 68°F natural spring in Zilker Park, open year-round except Thursdays for cleaning. In summer heat it&apos;s essential. In winter, locals still swim. $5 entry, bring your own towel. The Barton Creek Greenbelt trail starts here and winds through limestone canyons — completely free.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎸",
                  title: "Check Do512.com before you travel",
                  desc: "Do512 is Austin&apos;s definitive events calendar — live music listings, food events, festivals, and free outdoor shows. Check it before you arrive and plan at least one ticketed show. Stubb&apos;s outdoor amphitheater has acts most weekends from March to November. Free outdoor shows are good; ticketed shows at Stubb&apos;s are often extraordinary.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌵",
                  title: "Reserve a day for the Hill Country",
                  desc: "The Texas Hill Country — wildflowers, limestone canyons, German Texan towns like Fredericksburg, and the LBJ Ranch at Stonewall — starts 45 minutes west of downtown. In March–April it&apos;s covered in bluebonnets. Rent a car. Drive the Willow City Loop during wildflower season. Eat at the Ausländer Biergarten in Fredericksburg.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Austin" />

          {/* Combine With */}
          <CombineWith currentSlug="austin-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do UK and Australian passport holders need a visa for Austin / the USA?",
                  a: "No. UK and Australian citizens (along with most EU passport holders) qualify for ESTA — the Electronic System for Travel Authorization. Apply online at esta.cbp.dhs.gov for $21. Approval is usually instant. ESTA allows up to 90 days per visit and is valid for 2 years or until your passport expires. Apply at least 72 hours before departure. Never use third-party ESTA websites — only the official .gov site.",
                },
                {
                  q: "Is 3 days enough for Austin?",
                  a: "Three days covers the essential Austin experience — Franklin Barbecue, Sixth Street live music, Barton Springs, the Capitol, the bat colony, and South Congress. Four or five days adds Lake Travis, the Hill Country, and a more relaxed pace. If visiting during SXSW (March) or ACL Festival (October), extend to 4–5 days to absorb the festival atmosphere. Austin rewards slow exploration.",
                },
                {
                  q: "When is the best time to visit Austin?",
                  a: "March–May is peak season: wildflower season (Texas bluebonnets cover the Hill Country), SXSW in March, and warm but not brutal weather. October–November is equally excellent — Austin City Limits Music Festival in October, cooler temperatures. Avoid June–August unless you&apos;re heat-tolerant: it regularly hits 40°C+ and outdoor activities become difficult between noon and 6pm.",
                },
                {
                  q: "What makes Austin&apos;s BBQ different from other Texas BBQ?",
                  a: "Central Texas BBQ — the style at Franklin, La Barbecue, and Terry Black&apos;s — is defined by beef brisket cooked low-and-slow over post oak wood for 12–18 hours with only salt and pepper as seasoning. No sauce (sauce is served on the side as an afterthought). The goal is a deep mahogany bark, a pink smoke ring, and meat so tender it collapses. It is fundamentally different from Memphis ribs, Kansas City sauce-heavy BBQ, or Carolina pulled pork. Austin&apos;s style is considered by many food critics to be the apex of American BBQ.",
                },
                {
                  q: "What is SXSW and should I plan my Austin trip around it?",
                  a: "South by Southwest is a 10-day festival held every March in Austin — simultaneously a music festival (2,000+ acts), film festival, and tech/innovation conference. A wristband ($200–300) gives access to hundreds of official showcases. But dozens of free outdoor shows happen on Sixth Street and Red River simultaneously — you can experience a significant portion of SXSW without paying for a badge. Accommodation during SXSW doubles or triples in price — book 3–4 months in advance.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Austin trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-austin", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/austin-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/franklin-barbecue-guide", label: "Franklin BBQ guide", icon: "🍖" },
                { href: "/blog/austin-live-music-guide", label: "Live music guide", icon: "🎸" },
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
          <RelatedGuides currentSlug="austin-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nashville 3 Days — Music City", href: "/blog/nashville-3-days" },
                { label: "New Orleans 4 Days — Jazz &amp; Culture", href: "/blog/new-orleans-4-days" },
                { label: "Denver 4 Days — Rocky Mountain Gateway", href: "/blog/denver-4-days" },
                { label: "San Antonio 2 Days — The Alamo", href: "/blog/san-antonio-2-days" },
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
