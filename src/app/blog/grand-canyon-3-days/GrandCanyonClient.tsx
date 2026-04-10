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
const GRAND_CANYON_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Grand Canyon Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚗",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏜️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Grand Canyon 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Grand Canyon in 3 Days — hikes, viewpoints and the Colorado River&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/grand-canyon-3-days"
        imageUrl="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1200&q=80"
        description="Grand Canyon in 3 Days: Bright Angel Trail, South Rim viewpoints, Desert View Drive, helicopter tours and real USD costs — complete travel guide."
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
export default function GrandCanyonClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GRAND_CANYON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Grand Canyon" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="grand canyon south rim arizona usa sunset colorado river"
            fallback="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1600&q=80"
            alt="Grand Canyon South Rim at sunset with Colorado River and layered red rock Arizona USA"
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
              <span className="text-white/70">Grand Canyon 3 Days</span>
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
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">North America</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Grand Canyon in 3 Days:
                <em className="italic text-amber-300"> Hikes, Viewpoints &amp; the Colorado River</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                446 km long, 1,800 m deep, and 5 million years in the making. Three days gives you South Rim sunrises, Bright Angel Trail, Desert View Drive, and the canyon at its most extraordinary. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏜️ Arizona, USA</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Standing at the rim of the Grand Canyon for the first time is one of the few moments in travel that genuinely stops people mid-sentence. The canyon is 446 km long, up to 29 km wide, and more than 1,800 metres deep — numbers that mean nothing until you&apos;re looking at them.
            </p>
          </blockquote>

          {/* ── WHAT THE GRAND CANYON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Grand Canyon Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Grand Canyon is not just a big hole in the ground. It is a 446-kilometre-long geological record of nearly two billion years of Earth&apos;s history, carved by the Colorado River over 5–6 million years. The canyon exposes rock formations from the Proterozoic era at its deepest point — the Vishnu Basement Rocks at 1.84 billion years old are among the oldest exposed rocks on the planet&apos;s surface. Above them, in visible bands of red, orange, tan, and grey, is the Cambrian, Devonian, Permian, and Triassic sequence, each layer representing hundreds of millions of years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The South Rim is where most visitors go: open year-round, easily accessible from Flagstaff (1.5h), Phoenix (3.5h), and Las Vegas (4.5h), and home to the majority of viewpoints, trails, and facilities. The North Rim is 365 metres higher, significantly less visited, and open only mid-May to mid-October. First-timers should do the South Rim. The park charges $35 per vehicle, valid for 7 days. If you&apos;re visiting multiple national parks on the same trip, the America the Beautiful annual pass ($80) covers all US national parks for 12 months and pays for itself at three parks.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is the right amount of time to see the canyon properly — enough to do the iconic South Rim viewpoints, hike genuinely into the canyon, drive Desert View Drive with its eight panoramas, and have at least one sunrise and one sunset on the rim. Less than two full days and you&apos;re grazing the surface. More than four and you&apos;re either deep hiking or exploring beyond the South Rim.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚗" label="From Las Vegas" value="4 hrs" />
              <StatCard icon="🌡️" label="Best Months" value="Mar–May, Sep–Nov" />
              <StatCard icon="🏜️" label="Canyon Depth" value="1,800 m" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Grand Canyon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–25°C on the rim, 25–35°C in the canyon — ideal for hiking. Wildflowers appear on the rim and in the canyon corridors. Crowds are moderate; accommodation is more available than summer. North Rim opens mid-May. The best all-round window.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Second Best",
                  d: "October is arguably the sweet spot: summer crowds drop 30–40%, hiking temperatures are perfect (15–25°C rim, 25–35°C canyon), and autumn colour appears in North Rim aspen groves. North Rim closes mid-October — go early in the month if you want both rims.",
                  b: "Sweet spot",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Avoid Midday Hiking",
                  d: "Most visited season (peak crowds, book accommodation 6–13 months ahead). Rim temperatures hit 35°C; canyon floor exceeds 48°C. The NPS explicitly advises against rim-to-river day hikes June through August. Hike only before 10am or after 4pm. Sunrises and evenings are still spectacular.",
                  b: "Caution",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Quiet & Beautiful",
                  d: "Fewest crowds, lowest prices, and a genuinely stunning canyon when snow dusts the red rock formations. Rim temperatures often drop below freezing. The South Rim is open year-round; the North Rim is closed December through mid-May. Winter hiking is possible with proper gear.",
                  b: "For solitude",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚗 Getting to the Grand Canyon</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The Grand Canyon South Rim entrance is on AZ-64, about 1.5 hours south of Flagstaff and 4 hours from Las Vegas. There is no commercial airport at the canyon — fly into <strong className="font-medium">Flagstaff (FLG)</strong>, <strong className="font-medium">Phoenix (PHX, 3.5h)</strong>, or <strong className="font-medium">Las Vegas (LAS, 4h)</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚗",
                  t: "Drive from Las Vegas (recommended for most)",
                  d: "Las Vegas to Grand Canyon South Rim: 4 hours via US-93 to I-40 East, then north on AZ-64. One of the great American Southwest road trips. Stop at Hoover Dam (30 min detour, $10 parking) en route. Rental cars from Las Vegas: $45–90/day. Park entry: $35/vehicle (valid 7 days).",
                  b: "Most popular route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Tour bus from Las Vegas",
                  d: "Day-tour buses and multi-day packages from Las Vegas to the South Rim depart daily. Cost: $45–120/person depending on operator and inclusions. Companies include Gray Line and many Las Vegas hotel concierge options. One-day tours are rushed (4h drive each way, 2–3h at the rim) — at minimum book a 2-day tour with an overnight stay.",
                  b: "No rental car needed",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Flagstaff (FLG)",
                  d: "Flagstaff Regional Airport has direct flights from LA, Phoenix, and Dallas. Rental car from Flagstaff to South Rim: 1.5 hours south on US-89 and AZ-64 through Kaibab National Forest — a beautiful approach drive. The Grand Canyon Shuttle from Flagstaff runs twice daily ($30 return, 2 hours).",
                  b: "Best for East Coast travelers",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚂",
                  t: "Grand Canyon Railway from Williams",
                  d: "Williams, AZ (1h south of the rim on I-40) is the terminus of the historic Grand Canyon Railway. Vintage steam/diesel trains depart daily at 9:30am, arrive at the canyon at 11:45am, depart at 3:30pm. Cost: $67–226 return depending on class. The train journey itself is an experience — live music, cowboy characters, and high desert scenery.",
                  b: "Most atmospheric",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Grand Canyon Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured around the canyon&apos;s light — sunrise and golden hour are when the South Rim is at its most extraordinary, and the midday heat (especially in summer) is best spent in shade or on the shaded north-facing trails.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive South Rim — Mather Point, Rim Trail & Yavapai Sunset"
                cost="$60–90 total (park entry + camp/hostel + food)"
                items={[
                  "Arrive at South Rim via your chosen route. Pay the $35/vehicle park entry fee at the entrance station on AZ-64 — valid for 7 days. The America the Beautiful annual pass ($80) covers all US national parks for 12 months and pays for itself in 3 parks. If arriving on foot or by bicycle, the fee is $20/person.",
                  "Drop bags at Mather Campground ($18–44/night, book via recreation.gov months in advance) or at Grand Canyon International Hostel in Flagstaff ($30–50/night — a practical base for budget travellers who commute in each day). Mid-range: Yavapai Lodge ($150–220/night) is the best value inside the park for non-historic accommodation.",
                  "First stop: Mather Point — the most visited viewpoint on the South Rim, and for good reason. The main viewing platform juts out on a peninsula directly over the canyon. Give yourself 30–45 minutes. The sheer scale of what you&apos;re looking at takes time to register — the South Rim is 2,100 metres above sea level and the canyon drops more than a kilometre below you.",
                  "Walk the Rim Trail east toward Yavapai Point (1.6 km from Mather, flat, paved). The Yavapai Geology Museum here (free, open daily) has the best cross-section displays in the park, explaining the 1.8-billion-year rock sequence visible in the canyon walls. Worth 30 minutes inside before continuing to the viewpoint.",
                  "Sunset at Yavapai Point: faces west with a wide, unobstructed sweep across the canyon. Less crowded than Mather Point at sunset. The light on the Redwall Limestone at golden hour turns the canyon walls deep orange and crimson. Arrive 30 minutes before sunset to claim a good position.",
                  "Dinner at Canyon Village Market & Deli (Yavapai Lodge area) — grab sandwiches, trail snacks, and tomorrow&apos;s breakfast supplies ($12–20). Budget tip: every sit-down restaurant inside the park charges a 30–40% location premium. Cook at camp or eat from the market to keep costs controlled.",
                  "Evening: the South Rim is a certified International Dark Sky Park. Walk back to Mather Point after 9pm — the Milky Way is visible from late spring through summer with no light pollution for hundreds of kilometres in any direction.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sunrise at Mather Point + Bright Angel Trail Hike + Desert View Drive"
                cost="$40–80 total (food + shuttles)"
                items={[
                  "5:30am — Sunrise at Mather Point. Set the alarm. The canyon at first light — when colour bleeds from grey to gold to orange across the layered buttes — is the single best thing you will see here. Crowds don&apos;t arrive until 8am. Bring a jacket; rim temperatures at dawn are 10–15°C cooler than midday.",
                  "7:00am — Bright Angel Trailhead (Grand Canyon Village, catch the free Village Route shuttle from the Visitor Centre). This is the canyon&apos;s most famous hiking trail — and one of the most dangerous in America in the wrong conditions. The cardinal rule: DO NOT attempt to hike rim to river and back in one day. The round trip to the Colorado River is 24 km with 1,400 m of elevation change. People die attempting this every year, almost always from heat exhaustion and hyponatremia in summer.",
                  "The safe budget hike: descend to the 1.5-Mile Resthouse (3 km down, 290 m descent) and turn back. This takes 2–2.5 hours round trip, puts you genuinely inside the canyon with walls rising above you on both sides, and is safely achievable for most hikers. Seasonal water at the resthouse — check current availability at the Visitor Centre. For fitter hikers: the 3-Mile Resthouse (9.6 km round trip, 4–5 hours, 550 m descent) is more rewarding.",
                  "Water discipline: drink 500 ml before you start, carry at least 2 litres, drink 1 litre per hour while hiking. The canyon&apos;s dry desert air evaporates sweat before you feel wet — by the time you feel thirsty, you&apos;re already mildly dehydrated. The ranger rule: turn around at the halfway point of your water supply, not the halfway point of your time.",
                  "11:00am — Desert View Drive: drive (or take the free East Rim shuttle in summer) the 45 km eastern route along the South Rim through eight viewpoints: Yaki Point, Grandview Point, Moran Point, Tusayan Ruin (free Ancestral Puebloan site c. 1185 AD), Lipan Point (arguably the best river view on the South Rim), Navajo Point, and Desert View itself. Each reveals a completely different angle on the canyon.",
                  "Desert View Watchtower: the far eastern end of the South Rim, at the highest point (2,363 m). This 21-metre stone tower built by Mary Colter in 1932 sits on the rim with panoramic views east toward the canyon&apos;s wider mouth and the Colorado River. Climb to the top — free, included in park entry. The interior murals by Hopi artist Fred Kabotie (1933) are exceptional.",
                  "Sunset: return to Grand Canyon Village. Hopi Point (free Hermit Road shuttle, seasonal) is widely regarded as the best sunset viewpoint on the South Rim — faces due west, unobstructed horizon. Alternatively, Bright Angel Lodge porch: the oldest continually operating accommodation at the canyon has rocking chairs on the rim that face the canyon. Coffee there at dusk is one of the great simple pleasures in American travel.",
                  "Dinner: Bright Angel Restaurant (inside Bright Angel Lodge, $18–32/person, no reservation needed) — the most accessible mid-priced sit-down option inside the park. Or splurge at El Tovar Dining Room ($45–70/person, 1905 historic lodge on the rim — book 6 months ahead).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Choose Your Adventure — Helicopter, Skywalk, River Rafting or Depart"
                cost="$100–500 depending on option"
                items={[
                  "Morning ritual before departure: Mather Point one final time, or the Bright Angel Lodge porch with coffee at 6am. The canyon at dawn never gets old.",
                  "Option A — IMAX Theatre Tusayan ($15, opens 8:30am): The IMAX film &apos;Grand Canyon: The Hidden Secrets&apos; at Tusayan (10 km south of the rim) is a surprisingly good primer — aerial footage taken in formations inaccessible on foot gives the canyon&apos;s scale context that even three days on the rim doesn&apos;t fully deliver. A good first-morning activity before driving out.",
                  "Option B — Helicopter Tour ($200–280/person, 30–40 min): Maverick Helicopters and Grand Canyon Scenic Airlines operate from Grand Canyon National Park Airport in Tusayan. The aerial view reveals the canyon&apos;s true scale — the Colorado River snaking along the floor, side canyons invisible from the rim, formations accessible only from above. Book online 1–2 weeks ahead; same-day availability is rare.",
                  "Option C — Skywalk at the West Rim ($60 with shuttle, Hualapai Nation): The glass-bottomed walkway extending 21 m over the canyon floor at Eagle Point is 217 km west of the South Rim (2.5h drive). The Hualapai Nation&apos;s Grand Canyon West package ($60–80 includes shuttle + entry) also includes Guano Point and Hualapai Ranch. Different canyon, same overwhelming scale. Photos on personal cameras are not permitted on the Skywalk itself.",
                  "Option D — Colorado River Rafting ($300+/day): Multi-day commercial rafting trips through the Grand Canyon are among the great wilderness experiences in North America. Operators include Arizona Raft Adventures, Hatch River Expeditions, and Oar-Arizona. Full canyon trips (225 miles) take 14–21 days; partial trips start at 3–4 days from Lees Ferry or Diamond Creek. Book 6–12 months ahead — permits are highly competitive. The experience of sleeping on the canyon floor, surrounded by billion-year-old walls, bears no resemblance to standing on the rim.",
                  "Depart options from the South Rim: Las Vegas (4.5h northwest on US-93 — the Hoover Dam is a 30-min detour on the way, well worth it); Flagstaff (1.5h south — college town, excellent craft breweries, Walnut Canyon and Wupatki national monuments nearby); Sedona (2h south — red rock vortex sites, Oak Creek Canyon scenic road); Phoenix (3.5h for international departures). En route: Cameron Trading Post on the Navajo Nation (1h from the rim on US-89) — authentic Navajo jewelry, rugs, and fry bread since 1916.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Grand Canyon" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏜️ Landmark &amp; Trail Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important viewpoints, trails, and sites on the South Rim, in priority order. Entry is covered by the $35/vehicle park pass unless noted.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mather Point",
                  e: "Included in park entry",
                  d: "The most visited viewpoint on the South Rim and the default first stop for almost every visitor — for good reason. The viewing platform juts out on a natural peninsula, giving unobstructed views in three directions. Particularly good for sunrise: the eastward-facing canyon fills with colour as the sun rises behind you.",
                  t: "Must see · Sunrise",
                },
                {
                  n: "Bright Angel Trail",
                  e: "Free — hiking permit not required for day hikes",
                  d: "The Grand Canyon&apos;s most famous and most hiked trail, descending 1,400 m to the Colorado River over 12 km. Safe targets for day hikers: the 1.5-Mile Resthouse (3 km round trip) or the 3-Mile Resthouse (9.6 km round trip, the Indian Garden / Havasupai Gardens area). Rim-to-river in a day is not safe — the NPS explicitly advises against it. Seasonal water at resthouses; check availability at the Visitor Centre.",
                  t: "Must hike · Start early",
                },
                {
                  n: "Rim Trail",
                  e: "Free",
                  d: "A 21 km (13 mile) paved and unpaved trail running along the entire South Rim from South Kaibab Trailhead east to Hermits Rest west. Flat, accessible to all fitness levels, and the best way to move between viewpoints without a car. Pick any section — the stretch between Mather Point and Yavapai Point is the easiest and most rewarding 3 km in the park.",
                  t: "All levels · 13 miles total",
                },
                {
                  n: "South Kaibab Trail",
                  e: "Free — day hiking only (no water on trail)",
                  d: "Steeper and more exposed than Bright Angel, but with better panoramic views. The Ooh Aah Point (3 km round trip) and Cedar Ridge (6.4 km round trip) are the safe day-hike targets — both offer extraordinary open canyon views with no tree cover. No water on this trail at any point; carry everything you need from the rim. Avoid in summer heat.",
                  t: "Best views · No water",
                },
                {
                  n: "Desert View Watchtower",
                  e: "Included in park entry",
                  d: "At the eastern end of Desert View Drive, this 21-metre stone tower (built by Mary Colter, 1932) sits at the highest point on the South Rim (2,363 m). Interior murals by Hopi artist Fred Kabotie are among the finest Native American art in the Southwest. The views east toward the canyon mouth and Colorado River are spectacular — often less crowded than the Village viewpoints.",
                  t: "Must see · Desert View Drive",
                },
                {
                  n: "Hopi Point",
                  e: "Free (access via Hermit Road shuttle, seasonal)",
                  d: "Widely considered the best sunset viewpoint on the South Rim — faces due west with an unobstructed horizon, allowing you to watch the full sunset arc. Multiple canyon layers are lit simultaneously at golden hour. Accessible only by the free Hermit Road shuttle (March–November); the road is closed to private vehicles in peak season.",
                  t: "Best sunset · Hermit Road shuttle",
                },
                {
                  n: "Yavapai Geology Museum & Point",
                  e: "Free",
                  d: "The Yavapai Geology Museum (1.6 km east of Mather Point along the Rim Trail) has the park&apos;s best geological displays, including a large window-panorama cross-section that overlays the rock strata names onto the actual canyon view. Essential for understanding what you&apos;re looking at. Open daily.",
                  t: "Educational · Free museum",
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
            title="Grand Canyon — Viewpoints, Trails &amp; the Colorado River"
            subtitle="South Rim in all seasons — sunrise light, canyon depth, and the river 1,800 m below."
            spots={[
              {
                name: "Mather Point Sunrise",
                query: "mather point grand canyon south rim sunrise arizona usa",
                desc: "Sunrise from Mather Point — when colour bleeds from grey to gold across the canyon buttes, this is the single best thing the South Rim offers.",
              },
              {
                name: "Bright Angel Trail Inside the Canyon",
                query: "bright angel trail grand canyon hiking arizona canyon walls",
                desc: "Below the rim on Bright Angel Trail — canyon walls rising above, the temperature already warmer, the world above invisible.",
              },
              {
                name: "Desert View Watchtower",
                query: "desert view watchtower grand canyon arizona colorado river",
                desc: "Mary Colter&apos;s 1932 stone tower at the highest point on the South Rim, with views east to the Colorado River&apos;s canyon mouth.",
              },
              {
                name: "Colorado River from the Canyon",
                query: "colorado river grand canyon arizona canyon floor inner gorge",
                desc: "The Colorado River as seen from deep in the canyon — the Vishnu Basement Rocks flanking the Inner Gorge, 1.84 billion years old.",
              },
              {
                name: "Hopi Point Sunset",
                query: "hopi point grand canyon sunset arizona south rim hermit road",
                desc: "Hopi Point at golden hour — the best sunset viewpoint on the South Rim, facing due west with multiple canyon layers lit simultaneously.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Grand Canyon&apos;s main costs are accommodation (book far in advance — South Rim lodges fill 6–13 months out) and transport. The park entry fee ($35/vehicle) covers 7 days and all trails and viewpoints. Activities beyond hiking are optional add-ons.
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
                    ["🏨 Accommodation (2 nights)", "$36–100 (camp/hostel)", "$240–400 (lodge)", "$600–1,200 (El Tovar)"],
                    ["🍽️ Food (3 days)", "$60–105 (self-catered + deli)", "$150–270 (restaurants)", "$240–600 (El Tovar dining)"],
                    ["🚗 Transport (car rental + gas)", "$60–105 (budget car)", "$120–180 (mid-range car)", "$300–600 (private/charter)"],
                    ["🎟️ Park entry + activities", "$35–50 (trails only)", "$95–155 (trails + IMAX)", "$235–980 (helicopter + guide)"],
                    ["TOTAL (per person, 3 days)", "$190–360", "$605–1,005", "$1,375–3,380"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–140/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Camp at Mather Campground ($18–44/night), eat from the Canyon Village Market & Deli, use the free shuttle system for everything. The trails are all free beyond the park entry fee — a budget Grand Canyon trip is entirely feasible and completely rewarding.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($200–380/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Bright Angel Lodge ($120–200/night) or Yavapai Lodge ($150–220), dine at Bright Angel Restaurant and the Arizona Room, add the IMAX film and a ranger-led hike. This is the sweet spot — comfortable, well-located, without the booking-13-months-ahead stress of El Tovar.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($450–1,200/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">El Tovar Hotel ($300–600/night, book 13 months to the day at midnight MST), El Tovar Dining Room, private guided hike with a Grand Canyon Field Institute specialist, sunrise helicopter charter. The benchmark luxury canyon experience — and the historic lodge itself justifies the premium.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay at the Grand Canyon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All South Rim lodges are booked through Xanterra (xanterra.com). El Tovar and Bright Angel Lodge become available exactly 13 months before the desired date at midnight Mountain Standard Time — regulars set alarms. If you miss the opening window, check back regularly for cancellations.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "El Tovar Hotel",
                  type: "Historic luxury · South Rim — on the canyon edge",
                  price: "From $300/night",
                  badge: "Book 13 months ahead",
                  desc: "The most prestigious accommodation at the Grand Canyon and one of the great historic National Park lodges. Built in 1905, on the National Register of Historic Places, directly on the canyon rim. Rim-view suites look straight into the canyon. Roosevelt, Einstein, and every US president since have stayed here. The dining room serves elk, buffalo, and Arizona trout. Sells out in the first hour of availability — 13 months in advance.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Bright Angel Lodge",
                  type: "Historic mid-range · South Rim — rim-edge cabins",
                  price: "From $120/night",
                  badge: "Best mid-range",
                  desc: "Mary Colter&apos;s 1935 lodge complex right on the South Rim. The Rim Cabin rooms have private canyon views; the historic cabins sleep 2 and feel like a 1930s national park film. Book 6–13 months ahead through xanterra.com. The rocking chairs on the rim outside the lodge are legendary — coffee there at dawn is one of the great simple pleasures in American travel.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Yavapai Lodge",
                  type: "Motel-style · Canyon Village — near Visitor Centre",
                  price: "From $150/night",
                  badge: "Best availability",
                  desc: "The largest lodge at the South Rim (358 rooms) and the most likely to have last-minute availability. Standard motel rooms without the historic character of El Tovar or Bright Angel Lodge, but well-located near the Visitor Centre and the shuttle stops. Good option if you&apos;re booking within 6 months of travel.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Grand Canyon International Hostel (Flagstaff)",
                  type: "Budget hostel · Flagstaff — 1.5h from South Rim",
                  price: "From $30/night",
                  badge: "Best budget base",
                  desc: "Located in downtown Flagstaff, 90 minutes from the South Rim. Dorm beds from $30, private rooms from $80. A practical base for budget travellers who don&apos;t need to be on the rim at dawn — though you will miss sunrise at Mather Point if you&apos;re driving in. The hostel organises day trips to the canyon.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat at the Grand Canyon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dining inside the park carries a significant location premium — expect to pay 30–40% more than equivalent food in Flagstaff or Williams. Budget travellers do best buying supplies at Canyon Village Market & Deli and eating at camp. Mid-range visitors will find Bright Angel Restaurant the most practical sit-down option.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "El Tovar Dining Room",
                  t: "Fine dining · El Tovar Hotel — on the rim",
                  d: "The most storied restaurant at the Grand Canyon. The 1905 log-and-stone dining room serves elk, buffalo, and Arizona trout with a wine list that punches well above its pay grade given the location. $45–70/person for dinner. Book 6 months in advance via xanterra.com — walk-in availability is rare. The porch outside El Tovar at night, with canyon darkness beyond the railing, is worth a post-dinner stop regardless of where you ate.",
                  b: "Most historic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bright Angel Restaurant",
                  t: "Casual dining · Bright Angel Lodge",
                  d: "The most accessible mid-range restaurant inside the park. Burgers, sandwiches, salads, and Arizona staples — $18–32/person. No reservations needed; walk-ins almost always accommodated. Open from 6:30am for breakfast. The adjacent Bright Angel Fountain Bar (open seasonally) is a canyon institution: the best lemonade and hot dogs you will ever eat after a morning hike, for entirely contextual reasons.",
                  b: "Most accessible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Yavapai Lodge Restaurant",
                  t: "Casual · Yavapai Lodge — Canyon Village",
                  d: "Buffet-style and à la carte options in a cafeteria setting. Not the most atmospheric dining in the park, but reliable, reasonably priced ($14–25), and consistently available when El Tovar and Bright Angel Lodge are at capacity. Good for breakfast before an early start.",
                  b: "Most reliable",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Canyon Village Market & Deli",
                  t: "Deli & grocery · Yavapai Lodge area",
                  d: "The best option for budget travellers. Sandwiches, wraps, salads, grab-and-go meals ($8–15), plus a full grocery section for camp provisions — bread, peanut butter, trail mix, fresh fruit, snacks. Open daily. Stock up here for hike food the night before; pre-packaged trail lunches from the deli are genuinely good and save $20+ over the sit-down restaurants.",
                  b: "Best value",
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
            destination="Grand Canyon Arizona"
            hotels={[
              {
                name: "El Tovar Hotel",
                type: "Historic luxury · Directly on the South Rim",
                price: "From $300/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/el-tovar.html?aid=2820480",
              },
              {
                name: "Bright Angel Lodge",
                type: "Historic · South Rim cabins",
                price: "From $120/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/us/bright-angel-lodge.html?aid=2820480",
              },
              {
                name: "Yavapai Lodge",
                type: "Standard · Canyon Village",
                price: "From $150/night",
                rating: "4",
                badge: "Best availability",
                url: "https://www.booking.com/hotel/us/yavapai-lodge-grand-canyon.html?aid=2820480",
              },
              {
                name: "Grand Canyon International Hostel",
                type: "Hostel · Flagstaff, 1.5h from rim",
                price: "From $30/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/grand-canyon-international-hostel.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Grand Canyon South Rim Helicopter Tour",
                duration: "30–40 min",
                price: "From $200/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=grand+canyon+helicopter+tour&partner_id=PSZA5UI",
              },
              {
                name: "Bright Angel Trail Guided Hike",
                duration: "4–5 hrs",
                price: "From $80/person",
                badge: "Best hike",
                url: "https://www.getyourguide.com/s/?q=bright+angel+trail+guided+hike&partner_id=PSZA5UI",
              },
              {
                name: "Grand Canyon Sunrise Tour from Las Vegas",
                duration: "Full day",
                price: "From $99/person",
                url: "https://www.getyourguide.com/s/?q=grand+canyon+sunrise+tour+las+vegas&partner_id=PSZA5UI",
              },
              {
                name: "Colorado River Rafting Day Trip",
                duration: "Full day",
                price: "From $300/person",
                url: "https://www.getyourguide.com/s/?q=grand+canyon+river+rafting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid at the Grand Canyon</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "☀️",
                  title: "Hiking Rim to River in Summer",
                  desc: "This is the single deadliest mistake at the Grand Canyon. The NPS explicitly advises against hiking from the rim to the Colorado River and back in a single day, and especially not in June, July, or August. Canyon floor temperatures regularly exceed 48°C (118°F). Two to three people die from heat-related causes at the canyon every year, almost always on summer day hikes. Hike before 10am, turn back at the 1.5-Mile or 3-Mile Resthouse, and carry far more water than you think you need.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏨",
                  title: "Not Booking Accommodation Far Enough Ahead",
                  desc: "South Rim lodges book out 6–13 months in advance. El Tovar and Bright Angel Lodge rooms become available exactly 13 months before the desired date at midnight MST — regulars set alarms. If you show up without a reservation in peak season (May–September), you will be sleeping in Flagstaff or Williams and commuting 1.5–2 hours each way. Check recreation.gov for last-minute Mather Campground cancellations — these appear, but require daily monitoring.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🗺️",
                  title: "Skipping Desert View Drive",
                  desc: "Most visitors spend their entire time within 2 km of Grand Canyon Village — the most crowded section of the South Rim. Desert View Drive (the 45 km eastern route with eight viewpoints) is less visited, often more dramatic, and includes the Tusayan Ruin (free Ancestral Puebloan site c. 1185 AD) and Desert View Watchtower. Budget 3–4 hours for this drive; it transforms a standard canyon visit into a complete experience.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🎟️",
                  title: "Paying Per-Vehicle When Visiting Multiple Parks",
                  desc: "The Grand Canyon charges $35 per vehicle valid for 7 days. If you&apos;re visiting more than one national park — Zion, Bryce Canyon, Arches, Petrified Forest — the America the Beautiful annual pass costs $80 and covers all US national parks and federal recreation lands for 12 months. Three parks visited in sequence means the pass pays for itself immediately.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💧",
                  title: "Underestimating Water Needs on the Trail",
                  desc: "The canyon&apos;s dry desert air evaporates sweat before you feel wet, masking dehydration. The NPS recommended rate is 500 ml per hour of hiking — more in summer. Carry at least 2 litres for any hike beyond the first viewpoints, and 3–4 litres for the 3-Mile Resthouse. Refill stations are available at the 1.5-Mile and 3-Mile Resthouses on Bright Angel Trail, but these are seasonal — check current status at the Visitor Centre before descending.",
                  color: "bg-pink-50 border-pink-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Grand Canyon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📷",
                  title: "Golden Hour Photography Windows",
                  desc: "The canyon&apos;s best light arrives at two windows. Golden hour (30–45 min after sunrise and before sunset) turns the Redwall Limestone and Coconino Sandstone vivid orange and red. Blue hour (20 min before sunrise and after sunset) fills the canyon with cool lavender that reveals depth the midday sun flattens. Mather Point for sunrise; Hopi Point for sunset; Yavapai Point works for both. Midday (10am–3pm) is typically flat — use that time to hike.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "Master the Free Shuttle System",
                  desc: "Once you&apos;ve parked (or arrived by shuttle from Flagstaff/Williams), you don&apos;t need your car. The South Rim has four free shuttle routes: Village Route (Grand Canyon Village facilities), Kaibab/Rim Route (viewpoints east of the Visitor Centre), Hermit Road Route (western viewpoints, March–November, closed to private vehicles), and the Tusayan Route (from Tusayan to the park entrance). In summer, shuttles are faster than driving.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍂",
                  title: "October Is the Sweet Spot",
                  desc: "October is arguably the best month to visit. Summer crowds drop 30–40% from August. Temperatures are ideal for hiking (15–25°C on the rim, 25–35°C in the canyon). The North Rim&apos;s aspen groves turn golden. The North Rim closes mid-October — go early in the month if you want both rims. Spring (April–May) is the second-best window: wildflowers, moderate temperatures, shoulder-season pricing.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🦅",
                  title: "Pair with Antelope Canyon & Horseshoe Bend",
                  desc: "Page, Arizona is 3 hours east of Grand Canyon Village on US-89. Antelope Canyon requires a mandatory Navajo-guided tour ($65–120/person — book months ahead). Horseshoe Bend is a 15-min walk from Page ($10 day-use fee). Combining Grand Canyon, Antelope Canyon, and Horseshoe Bend in a 4–5 day Southwest road trip is one of the best itineraries in the American West.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎒",
                  title: "Canyon Hiking Packing List",
                  desc: "What separates safe canyon hikers from the ones rangers carry out: water (minimum 2 litres, ideally 3–4 for longer hikes), electrolyte tablets or salty snacks, wide-brim hat and sunscreen, trekking poles (descent is harder on knees than ascent), a small first-aid kit, headlamp, and a printed trail map (phone signal is unreliable below the rim). Wear sturdy closed-toe shoes — the canyon&apos;s limestone trails are irregular.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌃",
                  title: "Dark Sky Stargazing After 9pm",
                  desc: "The Grand Canyon National Park is a certified International Dark Sky Park. On clear nights from late spring through summer, the Milky Way is visible from the South Rim with no light pollution for hundreds of kilometres. Walk to Mather Point or Yavapai Point after 9pm. The canyon below disappears into complete darkness, making the star field look even more extraordinary. Bring a jacket — rim temperatures drop sharply after sunset.",
                  color: "bg-indigo-50 border-indigo-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Grand Canyon" />

          {/* Combine With */}
          <CombineWith currentSlug="grand-canyon-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is the Grand Canyon dangerous?",
                  a: "The Grand Canyon is not inherently dangerous but becomes dangerous when visitors underestimate it. Around 250 people require search and rescue operations annually. The main risks: heat exhaustion and dehydration on summer hikes (the canyon floor is routinely 15–20°C hotter than the rim), falls from unfenced viewpoints (stay behind barriers — dozens of fatalities have occurred from people stepping over railings for photos), and flash floods in side canyons after distant rainstorms. Follow the NPS guidelines, hike with ample water, start early, and turn back before you are tired — the hike out is always harder than the descent in.",
                },
                {
                  q: "What is the best time to visit the Grand Canyon?",
                  a: "March to May and September to November are the best windows. Spring brings wildflowers, comfortable hiking temperatures, and the North Rim&apos;s reopening in mid-May. Autumn — especially October — has the best combination of cool weather, lower crowds, and clear skies. Summer (June–August) is the most visited period and the most dangerous for hiking. Winter (December–February) is cold but spectacularly beautiful when snow covers the canyon&apos;s red rock formations — and the fewest crowds of any season.",
                },
                {
                  q: "South Rim vs North Rim — which should I visit?",
                  a: "For most visitors: South Rim. It is open year-round, has the most facilities and viewpoints, and is accessible from Flagstaff (1.5h), Phoenix (3.5h), and Las Vegas (4.5h). The North Rim is only open mid-May to mid-October, requires a longer drive (4.5h from the South Rim), has minimal facilities, and receives roughly one-tenth of the visitors — which is its appeal. The North Rim is 365 m higher, gets more precipitation, and has a forest of aspen and fir trees down to the rim. Serious canyon visitors try to see both; first-timers should do the South Rim.",
                },
                {
                  q: "How far can I hike — can I reach the river in a day?",
                  a: "The National Park Service explicitly advises against attempting to hike from the rim to the Colorado River and back in a single day on any trail. The river is 12 km from the South Rim on Bright Angel Trail with 1,400 m of elevation change — a hike that takes most fit people 8–12 hours. In summer, this hike has killed people. The safe day-hike target is the 1.5-Mile Resthouse (3 km round trip, 2–3 hours) or 3-Mile Resthouse (9.6 km round trip, 4–5 hours). To reach the river legitimately, book a Phantom Ranch overnight permit (lottery through recreation.gov) or a multi-day commercial rafting trip.",
                },
                {
                  q: "Can you see the Colorado River from the rim?",
                  a: "Yes, but only from specific viewpoints — the canyon is so wide that the river is not visible from most of the rim. The best viewpoints for river sightings from the South Rim are: Lipan Point (arguably the best river view on the South Rim, visible in both directions), Desert View (river visible winding through the canyon&apos;s mouth), and Navajo Point. On a clear day, the river is also visible from high on the Bright Angel Trail. Plateau Point (accessible on a long day hike) places you 370 m directly above the river.",
                },
                {
                  q: "How do I get a Havasu Falls permit?",
                  a: "Havasu Falls access requires a permit issued exclusively through the Havasupai Tribe&apos;s lottery system at havasupaitribe.com. The lottery opens every year on February 1st at 8am Arizona time for the following year (February through November dates). It fills within hours. Cost: $100 permit + $50 tribal entry + $5 environmental fee = $155/person. The hike is 16 km each way from Hualapai Hilltop with 730 m descent — or take the Airwest helicopter ($85–100 one-way). The turquoise waterfalls are, genuinely, worth the lottery-level effort.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Grand Canyon trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-grand-canyon", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/grand-canyon-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/las-vegas-to-grand-canyon", label: "Las Vegas to Grand Canyon", icon: "🚗" },
                { href: "/blog/grand-canyon-hiking-guide", label: "Hiking guide", icon: "🥾" },
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
          <RelatedGuides currentSlug="grand-canyon-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Las Vegas 4 Days — Casinos &amp; Day Trips", href: "/blog/las-vegas-4-days" },
                { label: "Zion National Park 3 Days — Angels Landing", href: "/blog/zion-national-park-3-days" },
                { label: "Yellowstone 4 Days — Geysers &amp; Wildlife", href: "/blog/yellowstone-4-days" },
                { label: "Monument Valley 1 Day — The Mittens", href: "/blog/monument-valley-1-day" },
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
