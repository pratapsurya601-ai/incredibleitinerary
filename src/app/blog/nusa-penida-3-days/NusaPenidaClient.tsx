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

// -- Table of Contents ----------------------------------------------------------
const NUSA_PENIDA_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Nusa Penida Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u26F4\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "\uD83C\uDFD6\uFE0F", label: "Landmark Guide" },
  { id: "budget",      emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",         emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "mistakes",    emoji: "\u274C",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753",  label: "FAQ" },
];

// -- Reading Progress Bar -------------------------------------------------------
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

// -- Share Bar ------------------------------------------------------------------
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
          href: `mailto:?subject=Nusa Penida 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nusa Penida in 3 Days — Kelingking, manta rays and Indonesia&apos;s best cliffs&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/nusa-penida-3-days"
        imageUrl="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
        description="Nusa Penida in 3 Days: Kelingking Beach, manta ray snorkeling, Diamond Beach, Angel&apos;s Billabong and Indonesia&apos;s most dramatic cliffs — complete guide with budget."
      />
    </div>
  );
}

// -- Stat Card ------------------------------------------------------------------
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// -- Day Card -------------------------------------------------------------------
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

// -- Tip Card -------------------------------------------------------------------
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

// -- FAQ Accordion --------------------------------------------------------------
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

// -- MAIN COMPONENT -------------------------------------------------------------
export default function NusaPenidaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NUSA_PENIDA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nusa Penida" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* -- HERO -- */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nusa penida kelingking beach bali indonesia cliff ocean"
            fallback="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80"
            alt="Kelingking Beach Nusa Penida Indonesia dramatic T-Rex cliff above turquoise ocean"
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
              <span className="text-white/70">Nusa Penida 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Island Adventure
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nusa Penida in 3 Days:
                <em className="italic text-amber-300"> Kelingking, Manta Rays &amp; Indonesia&apos;s Best Cliffs</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A T-Rex cliff above turquoise water, manta rays at dawn, a natural infinity pool carved into rock, and the most photographed viewpoint in Indonesia. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* -- ARTICLE -- */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDE9"} Bali, Indonesia</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From $30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nusa Penida is Bali&apos;s raw, unfinished cousin &mdash; an island of vertiginous cliff faces, turquoise water so clear it looks artificial, manta rays drifting below your snorkel at dawn, and a T-Rex shaped promontory that has become the most-photographed single viewpoint in all of Indonesia. Come before the roads improve any further.
            </p>
          </blockquote>

          {/* -- WHAT NUSA PENIDA ACTUALLY IS -- */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Nusa Penida Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nusa Penida is a limestone island 45 minutes by fast boat from Bali&apos;s Sanur harbour. It&apos;s part of the Klungkung Regency and sits southeast of the mainland across the Badung Strait. The island is roughly 20 kilometres across but feels much larger because the roads are steep, unpaved in sections, and genuinely treacherous after rain. There are no traffic lights and no petrol stations &mdash; you refuel from roadside bottles.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What draws travellers here is the coastline. Nusa Penida has some of the most dramatic cliff formations in Southeast Asia: Kelingking Beach&apos;s T-Rex promontory, the natural stone arch at Broken Beach, Angel&apos;s Billabong&apos;s infinity pool carved into raw limestone, and the horseshoe amphitheatre of Diamond Beach on the east coast. Below the cliffs, the Lombok Strait currents bring year-round manta rays to a cleaning station at Manta Point &mdash; one of the most reliable manta encounters anywhere in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is the right amount. Day one covers the west coast&apos;s headline sites, day two takes you east to Diamond Beach and the mantas, and day three finishes with the north coast waterfalls before the fast boat back to Bali. The island is rougher, cheaper, and more physically demanding than anything on the Bali mainland &mdash; and most people cite it as the highlight of their entire Indonesia trip.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u26F4\uFE0F"} label="From Bali (Sanur)" value="35-45 min" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="Apr\u2013Oct" />
              <StatCard icon={"\uD83E\uDDAB"} label="Manta Rays" value="Year-round" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="$30/day" />
            </div>
          </section>

          {/* -- BEST TIME TO VISIT -- */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Nusa Penida</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr\u2013Jun",
                  i: "\u2600\uFE0F",
                  t: "Early Dry \u2014 Best Season",
                  d: "Clear skies, calm seas for the fast boat crossing, excellent underwater visibility at Manta Point and Crystal Bay. Roads are dry and manageable by scooter. Crowds are lighter than July\u2013August peak. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul\u2013Sep",
                  i: "\uD83C\uDF1E",
                  t: "Peak Dry \u2014 Busy But Perfect",
                  d: "The driest months with the clearest water. Mola mola (oceanic sunfish) pass through Crystal Bay July\u2013October \u2014 one of the rarest marine encounters in Southeast Asia. This is peak tourist season: Kelingking gets 2,000+ visitors per day. Book accommodation 2 weeks ahead.",
                  b: "Peak season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct\u2013Nov",
                  i: "\uD83C\uDF27\uFE0F",
                  t: "Shoulder \u2014 Transitional",
                  d: "Occasional afternoon rain but still largely dry. Fewer tourists than July\u2013September. Water visibility starts to drop. Roads can become slippery after rain \u2014 hire a driver rather than renting a scooter if visiting late October onwards.",
                  b: "Viable with caution",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec\u2013Mar",
                  i: "\uD83C\uDF0A",
                  t: "Wet Season \u2014 Avoid if Possible",
                  d: "Heavy rain, rough seas that can cancel fast boat crossings, muddy roads that become genuinely dangerous on the east coast. Multiple scooter accidents occur monthly. The Kelingking descent is unsafe when wet. Manta rays are still present but visibility drops significantly.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u26F4\uFE0F"} Getting to Nusa Penida</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> All fast boats to Nusa Penida depart from <strong className="font-medium">Sanur Harbour</strong> on Bali&apos;s east coast. The crossing takes 35&ndash;45 minutes depending on the operator and sea conditions. Ticket cost: IDR 150,000&ndash;200,000 ($10&ndash;$13 USD) one way.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u26F4\uFE0F",
                  t: "Fast boat from Sanur (standard)",
                  d: "Multiple operators run daily from 7am to 5pm: Rocky Fast Cruise, Semaya One, Maruti Express, and Mola Mola Fast Boat. IDR 150,000\u2013200,000 one way ($10\u2013$13 USD). Boats dock at Toyapakeh or Banjar Nyuh pier on Nusa Penida. Book the day before through your Bali accommodation or directly at the Sanur pier. Do not use unlicensed cheap boats.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE95",
                  t: "Getting to Sanur from DPS airport",
                  d: "Sanur harbour is 30\u201340 minutes from Ngurah Rai Airport (DPS) by taxi. Grab or Blue Bird metered taxi: IDR 100,000\u2013150,000 ($6\u2013$10 USD). If arriving in Bali the same day, book an early morning fast boat and arrange a pre-dawn airport-to-Sanur transfer.",
                  b: "Easy connection",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDEB2",
                  t: "On-island transport: scooter or driver",
                  d: "Rent a scooter at the pier for IDR 75,000/day ($5 USD) including fuel \u2014 the most flexible and economical option. Roads are rough in sections, especially on the east coast. For a safer alternative, hire a local driver for IDR 400,000\u2013600,000/day ($25\u2013$40 USD) who knows the tidal windows, crowd patterns, and road conditions.",
                  b: "Essential info",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDEE5\uFE0F",
                  t: "Private charter (luxury option)",
                  d: "Private speedboat charter from Sanur: $150\u2013$250 one way for an 8-person boat. Arrive ahead of the public boats. Worth considering for groups of 4+ where the per-person cost approaches the public boat fare.",
                  b: "Groups / luxury",
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

          {/* -- 3-DAY ITINERARY -- */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 3-Day Nusa Penida Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around tidal windows for Angel&apos;s Billabong and optimal morning light for Kelingking &mdash; check tide tables the night before each day.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="West Coast: Kelingking Beach \u00B7 Angel&apos;s Billabong \u00B7 Broken Beach \u00B7 Crystal Bay"
                cost="$30\u2013$45"
                items={[
                  "7:00am \u2014 Fast boat from Sanur. Arrive Toyapakeh pier ~7:45am. Rent a scooter at the pier (IDR 75,000/day, ~$5 USD). Fill up from a roadside petrol bottle (IDR 10,000/litre) and head west.",
                  "8:30am \u2014 Kelingking Beach viewpoint (free). The T-Rex cliff is the single most-photographed spot in Indonesia: a white limestone promontory shaped like a dinosaur head above a crescent of electric-blue water. The viewpoint is at the top and takes your breath away. The hike down to the beach takes 30\u201345 minutes on a steep rope-assisted trail \u2014 only attempt it if fit, in dry conditions, and carrying water.",
                  "11:00am \u2014 Angel&apos;s Billabong (free, low tide only). A natural infinity pool carved into the clifftop rock by wave action, filled with turquoise water. At high tide the waves crash over and the pool is inaccessible. Check tide times on TideForecast.com the night before. At low tide it is one of the most beautiful natural swimming spots in Southeast Asia.",
                  "12:30pm \u2014 Broken Beach (Pasih Uwug, free). A natural stone arch through which the sea surges into a circular cove. Not swimmable but one of the most dramatic coastal formations in all of Bali. Five minutes walk from Angel&apos;s Billabong. Warungs at the carpark serve nasi goreng (IDR 25,000\u201335,000) and cold Bintang.",
                  "3:30pm \u2014 Crystal Bay. A sheltered bay on the west coast with calm water ideal for snorkeling. Snorkel hire: IDR 30,000\u201350,000. Turtle sightings are common. The sunset over Crystal Bay with Agung volcano silhouetted on the Bali mainland is one of Nusa Penida&apos;s best moments.",
                  "6:00pm \u2014 Return to accommodation near Toyapakeh or Crystal Bay. Budget guesthouses and homestays: IDR 150,000\u2013400,000/night ($10\u2013$25) including breakfast.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="East Coast &amp; Mantas: Manta Point \u00B7 Diamond Beach \u00B7 Atuh Beach \u00B7 Teletubbies Hills"
                cost="$35\u2013$60"
                items={[
                  "6:00am \u2014 Early departure for Manta Point snorkeling. Book through your guesthouse the evening before ($20\u2013$30/person for a shared boat with basic snorkel gear). The mantas are reef mantas with 2\u20134 metre wingspans, circling a cleaning station. They are completely unbothered by snorkelers as long as you do not touch or chase them.",
                  "6:30am \u2014 Manta Point: the water at dawn is glassily calm and the mantas are most active. Ethical guidelines: no touching, no blocking their path, no flash photography. Hovering above a 3-metre manta ray in open water is one of the most affecting wildlife encounters available in Asia. Bring a waterproof phone case.",
                  "9:30am \u2014 Return to shore. Drive east across the island to Diamond Beach (Pantai Diamond). The cliff viewpoint above Diamond Beach is stunning: a horseshoe bay with white sand and jagged limestone walls on three sides. The descent takes 15\u201320 minutes on steep stone steps with metal handrails.",
                  "12:00pm \u2014 Atuh Beach (10 minutes by scooter from Diamond Beach). Similar dramatic limestone setting with warung food at the beach \u2014 grilled fish with rice for IDR 50,000\u201375,000 ($3\u2013$5).",
                  "2:00pm \u2014 Teletubbies Hills \u2014 the island&apos;s famous rolling green hills that look like the children&apos;s TV show landscape. Free entry, best in the afternoon light. Continue to Rumah Pohon (Tree House) viewpoint \u2014 a wooden platform above the eastern cliffs with panoramic ocean views. Entry: IDR 20,000\u201350,000.",
                  "5:00pm \u2014 Return to accommodation. Evening: eat at a local warung (IDR 25,000\u201350,000 for a full meal). Nusa Penida has minimal nightlife \u2014 most visitors sleep by 9pm and wake for sunrise activities.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="North Coast Waterfalls &amp; Return: Peguyangan \u00B7 Guyangan \u00B7 Boat to Bali"
                cost="$25\u2013$40"
                items={[
                  "6:30am \u2014 Peguyangan Waterfall: reached by descending a steep blue-painted staircase cut into the cliff face above the ocean (free, 45\u201360 minute round trip). At the bottom, a small Hindu water temple sits on a platform above the waves where fresh water cascades from the cliff. One of Nusa Penida&apos;s most spiritually atmospheric locations. Sturdy footwear essential.",
                  "9:00am \u2014 Guyangan Waterfall (north coast, free): a cascading spring flowing through a temple complex set into the clifftop. Balinese Hindu ceremonies are frequently held here \u2014 dress modestly if a ceremony is in progress (sarong and sash required, available to borrow at the entrance).",
                  "11:00am \u2014 Final scooter ride along the north coast road. This section has the least tourist infrastructure and the most dramatic coastal views. The raw limestone cliffs dropping into blue-green water is Nusa Penida at its least curated and most beautiful.",
                  "1:00pm \u2014 Return scooter to the pier. Final warung lunch at Toyapakeh: fish soup (IDR 30,000), grilled snapper (IDR 50,000\u201380,000), and coconut water (IDR 15,000) at the pier-side stalls.",
                  "2:30pm \u2014 Fast boat back to Sanur, Bali. Buy return ticket from same operator or any pier booth (IDR 150,000\u2013200,000). Arrive Sanur ~3:15pm.",
                  "Evening \u2014 Back in Bali. The contrast between Nusa Penida&apos;s raw silence and Bali&apos;s infrastructure is immediate and striking. Most travellers cite the three days on Nusa Penida as the highlight of their Bali trip.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nusa Penida" onPlanTrip={() => setModalOpen(true)} />

          {/* -- LANDMARK GUIDE -- */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFD6\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Most are free to visit &mdash; the island does not charge formal entry fees at natural landmarks (some viewpoints have small parking or conservation fees of IDR 5,000&ndash;15,000).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kelingking Beach",
                  e: "Free",
                  d: "The T-Rex cliff is Indonesia&apos;s most-photographed viewpoint. The viewpoint at the top is extraordinary on its own. The hike down to the beach takes 30\u201345 minutes on a steep rope-assisted trail \u2014 only attempt in dry conditions with good fitness. The beach at the bottom is usually deserted. Arrive before 9am to avoid the tour bus crowds.",
                  t: "Must see \u00B7 1\u20132 hrs",
                },
                {
                  n: "Manta Point",
                  e: "$20\u2013$30 (shared boat) / $60\u2013$80 (private dive)",
                  d: "Year-round manta ray encounters at a cleaning station on the southwest coast. Reef mantas with 2\u20134 metre wingspans circle repeatedly, completely undisturbed by snorkelers. The 6:30\u20139am window has the best visibility and the highest manta concentration. One of the most reliable manta encounters anywhere in the world.",
                  t: "Must do \u00B7 2\u20133 hrs",
                },
                {
                  n: "Angel&apos;s Billabong",
                  e: "Free (low tide only)",
                  d: "A natural infinity pool carved into clifftop limestone by wave action. At low tide, the turquoise water is calm and swimmable. At high tide, waves crash over the rim and the pool is inaccessible and dangerous. Always check tide tables before visiting. Five minutes from Broken Beach.",
                  t: "Tide-dependent \u00B7 1 hr",
                },
                {
                  n: "Broken Beach (Pasih Uwug)",
                  e: "Free",
                  d: "A natural stone arch through which the sea surges into a perfectly circular cove. Not swimmable but one of the most dramatic coastal formations in Bali. The viewing platform gives a full perspective of the arch and cove. Warungs and parking at the entrance.",
                  t: "Must see \u00B7 30\u201345 min",
                },
                {
                  n: "Diamond Beach",
                  e: "Free",
                  d: "A horseshoe bay of white sand flanked by vertical limestone cliffs on three sides. The cliff viewpoint is stunning; the descent via steep stone steps takes 15\u201320 minutes. Water has strong currents \u2014 swimming is not recommended. The beach itself is one of Indonesia&apos;s most beautiful.",
                  t: "Must see \u00B7 1.5 hrs",
                },
                {
                  n: "Crystal Bay",
                  e: "Free (snorkel hire IDR 30,000\u201350,000)",
                  d: "Sheltered bay on the west coast with calm water for snorkeling. Turtle sightings are common. Mola mola (oceanic sunfish) pass through July\u2013October. The sunset here with Agung volcano on the horizon is Nusa Penida&apos;s best.",
                  t: "Snorkeling \u00B7 2 hrs",
                },
                {
                  n: "Atuh Beach",
                  e: "Free",
                  d: "Dramatic east coast beach with limestone cliff amphitheatre setting. Warung food available at the beach. A quieter alternative to Diamond Beach with similarly extraordinary scenery.",
                  t: "1\u20131.5 hrs",
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
            title="Nusa Penida &mdash; Cliffs, Mantas &amp; Turquoise Water"
            subtitle="Indonesia&apos;s most dramatic island coastline."
            spots={[
              {
                name: "Kelingking Beach T-Rex Cliff",
                query: "kelingking beach nusa penida bali indonesia trex cliff turquoise ocean",
                desc: "The T-Rex promontory above Kelingking Beach \u2014 Indonesia&apos;s most photographed viewpoint and the single image that defines Nusa Penida.",
              },
              {
                name: "Manta Ray at Manta Point",
                query: "manta ray snorkeling nusa penida bali indonesia underwater ocean",
                desc: "Reef mantas with 2\u20134 metre wingspans circle a cleaning station at Manta Point year-round, unbothered by snorkelers.",
              },
              {
                name: "Angel&apos;s Billabong",
                query: "angels billabong nusa penida bali natural infinity pool turquoise",
                desc: "A natural infinity pool carved into the limestone clifftop by wave action \u2014 one of Southeast Asia&apos;s most beautiful swimming spots at low tide.",
              },
              {
                name: "Diamond Beach Amphitheatre",
                query: "diamond beach nusa penida bali indonesia limestone cliff white sand",
                desc: "A horseshoe bay of white sand flanked by vertical limestone walls on three sides.",
              },
              {
                name: "Broken Beach Stone Arch",
                query: "broken beach pasih uwug nusa penida bali stone arch ocean",
                desc: "The natural stone arch at Broken Beach through which the sea surges into a circular cove.",
              },
            ]}
          />

          {/* -- BUDGET BREAKDOWN -- */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nusa Penida is one of Indonesia&apos;s most budget-friendly island destinations. The main costs are the fast boat crossing and any diving or manta snorkeling tours. Food, accommodation, and on-island transport are very cheap by international standards.
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
                    ["\u26F4\uFE0F Fast boat (return)", "IDR 300K\u2013400K ($20\u2013$26)", "IDR 300K\u2013400K ($20\u2013$26)", "$150\u2013$250 (private)"],
                    ["\uD83C\uDFE8 Accommodation (2 nights)", "$20\u2013$50", "$100\u2013$200", "$400\u2013$900"],
                    ["\uD83D\uDEB2 Transport (scooter/driver)", "IDR 150K ($10, scooter)", "IDR 800K\u20131.2M ($50\u2013$80, driver)", "$120\u2013$200 (guide+driver)"],
                    ["\uD83E\uDDAB Manta snorkel/dive", "$20\u2013$30 (shared)", "$50\u2013$80 (private)", "$120\u2013$200 (marine guide)"],
                    ["\uD83C\uDF7D Food (3 days)", "$15\u2013$25", "$40\u2013$80", "$120\u2013$250"],
                    ["\uD83C\uDFDD\uFE0F Activities / misc", "$5\u2013$10", "$20\u2013$40", "$80\u2013$150"],
                    ["TOTAL (per person, 3 days)", "$90\u2013$150", "$230\u2013$430", "$990\u2013$1,750"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ($30\u2013$50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Homestay with breakfast, scooter rental, warung meals, shared manta boat. Completely comfortable and the way most backpackers do it. Bring IDR cash from Bali \u2014 ATMs on the island run out on busy weekends.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">{"\uD83C\uDF1F"} Mid-Range ($80\u2013$150/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Private bungalow with pool, local driver for the full day, private manta snorkel boat, and proper restaurant meals. The sweet spot between comfort and adventure.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ($300\u2013$600/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Clifftop villa with infinity pool, private speedboat, marine biologist guide, catered clifftop lunches. Semabu Hills and Adiwana Warnakali are genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* -- WHERE TO STAY -- */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Nusa Penida</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most accommodation clusters around Toyapakeh pier and Crystal Bay on the west coast. The luxury tier sits on the island&apos;s central ridgeline with dramatic ocean views. Book ahead for July&ndash;August and Christmas peak seasons &mdash; availability on the island is limited.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Semabu Hills Hotel",
                  type: "Luxury clifftop \u00B7 Sea-view villas with infinity pool",
                  price: "From $200/night",
                  badge: "Best luxury",
                  desc: "Perched on the island\u2019s ridgeline with infinity pools overlooking the Lombok Strait. The views from the terrace make every other accommodation on the island feel like a compromise. Restaurant on-site with an excellent wine list.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Penida Colada",
                  type: "Mid-range \u00B7 Boutique bungalows with pool",
                  price: "From $60/night",
                  badge: "Best mid-range",
                  desc: "Well-designed bungalows with private bathroom, AC, and a communal pool. Clean, friendly, and well-located near the main pier. Good restaurant attached. The sweet spot between comfort and budget on Nusa Penida.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "La Roja Bungalows",
                  type: "Budget-mid \u00B7 Near Crystal Bay",
                  price: "From $25/night",
                  badge: "Best value",
                  desc: "Simple but clean bungalows within walking distance of Crystal Bay. Private bathroom, fan or AC options, breakfast included. The kind of place where the owner helps you arrange a manta boat and tells you the best tidal windows for Angel\u2019s Billabong.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Local Homestays (Toyapakeh area)",
                  type: "Budget \u00B7 Basic but authentic",
                  price: "IDR 150,000\u2013250,000/night ($10\u2013$16)",
                  badge: "Cheapest",
                  desc: "Basic rooms with shared or private bathroom, often including breakfast. Squat toilets and cold water at the cheapest places. The most authentic way to experience the island \u2014 your host family will know every local spot and tide schedule.",
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

          {/* -- WHERE TO EAT -- */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Nusa Penida</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nusa Penida&apos;s food scene is dominated by local warungs (small family-run restaurants) serving Indonesian staples at very low prices. A few Western-style cafes have opened near the main pier. Expect to pay IDR 25,000&ndash;50,000 ($1.50&ndash;$3) for a full local meal.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Penida Espresso",
                  t: "Cafe \u00B7 Near Toyapakeh pier",
                  d: "The best coffee on the island and the closest thing to a Western-style brunch spot. Good avocado toast, smoothie bowls, and proper espresso. IDR 35,000\u201365,000 for a meal. Popular with digital nomads and mid-range travellers. Air-conditioned \u2014 a genuine luxury after a morning on the scooter.",
                  b: "Best coffee",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Warung Bogasari",
                  t: "Local seafood \u00B7 Near Toyapakeh pier",
                  d: "Fresh tuna with sambal matah (Balinese raw shallot-chilli relish), grilled snapper, and nasi campur. IDR 40,000\u201390,000 per plate. The fish is caught that morning and the sambal is made fresh. This is the kind of food Bali charges five times more for.",
                  b: "Best seafood",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Roadside Warungs (island-wide)",
                  t: "Local \u00B7 Everywhere",
                  d: "Small family-run stalls serving nasi goreng (fried rice, IDR 25,000\u201335,000), mie goreng (fried noodles, IDR 25,000), grilled corn (IDR 10,000), and cold drinks. Found at every major viewpoint carpark and along main roads. The cheapest and most authentic way to eat on the island.",
                  b: "Cheapest eats",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Atuh Beach Warung",
                  t: "Beachside \u00B7 Atuh Beach",
                  d: "Grilled fish with rice served directly on the beach with the limestone cliff amphitheatre behind you. IDR 50,000\u201375,000 for a full plate. The setting alone is worth the visit. Simple, fresh, and perfectly placed.",
                  b: "Best setting",
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
            destination="Nusa Penida Bali"
            hotels={[
              {
                name: "Semabu Hills Hotel",
                type: "Luxury clifftop \u00B7 Infinity pool with ocean views",
                price: "From $200/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/id/semabu-hills-nusa-penida.html?aid=2820480",
              },
              {
                name: "Adiwana Warnakali Resort",
                type: "Luxury boutique \u00B7 Sea-view villas",
                price: "From $180/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/id/adiwana-warnakali-nusa-penida.html?aid=2820480",
              },
              {
                name: "Penida Colada",
                type: "Mid-range bungalows \u00B7 Pool",
                price: "From $60/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/id/penida-colada-nusa-penida.html?aid=2820480",
              },
              {
                name: "La Roja Bungalows",
                type: "Budget-mid \u00B7 Near Crystal Bay",
                price: "From $25/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/id/la-roja-bungalows-nusa-penida.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Manta Ray Snorkeling Tour",
                duration: "3 hrs",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=nusa+penida+manta+snorkeling&partner_id=PSZA5UI",
              },
              {
                name: "Nusa Penida Full Day Tour from Bali",
                duration: "10 hrs",
                price: "From $40/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=nusa+penida+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Crystal Bay Diving + Mola Mola",
                duration: "4 hrs",
                price: "From $60/person",
                url: "https://www.getyourguide.com/s/?q=nusa+penida+crystal+bay+diving&partner_id=PSZA5UI",
              },
              {
                name: "East Coast Private Tour (Diamond + Atuh)",
                duration: "8 hrs",
                price: "From $50/person",
                url: "https://www.getyourguide.com/s/?q=nusa+penida+east+coast+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* -- MISTAKES TO AVOID -- */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83C\uDF27\uFE0F",
                  title: "Riding a Scooter on East Coast Roads After Rain",
                  desc: "Nusa Penida\u2019s roads are unpaved in sections and become genuinely dangerous after heavy rain, particularly on the east coast routes to Diamond Beach, Atuh, and Seganing Waterfall. Wet season (November\u2013March) turns steep clay slopes into slides. Multiple scooter accidents happen every month during this period, including fatalities. If visiting outside the dry season, hire a driver rather than renting a scooter \u2014 a local driver will refuse to take routes that are unsafe.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "\u26F0\uFE0F",
                  title: "Attempting the Kelingking Descent Unprepared",
                  desc: "The Kelingking Beach descent is 300 metres of steep rope-and-stake trail dropping down a limestone cliff face. The ascent back up takes 45\u201360 minutes in heat that rarely drops below 30\u00B0C. If you have knee issues, vertigo, or haven\u2019t done significant exercise recently, stay at the top viewpoint \u2014 the view from the top is itself extraordinary. Don\u2019t put yourself in a position where you need an emergency evacuation from a cliff trail on an island with one small medical clinic.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83D\uDCB8",
                  title: "Not Bringing Enough Cash from Bali",
                  desc: "Nusa Penida has very limited ATM infrastructure. There are a few ATMs in Toyapakeh but they run out of cash on busy weekends and charge high foreign transaction fees. The island operates almost entirely on IDR cash \u2014 guesthouses, warungs, scooter rentals, boat tours, all require cash. Withdraw IDR 800,000\u20131,500,000 per day from a Bali ATM (Sanur has several near the harbour) before boarding your speedboat.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "\uD83C\uDF0A",
                  title: "Ignoring Tide Tables for Angel\u2019s Billabong",
                  desc: "Angel\u2019s Billabong is only safe to visit at low tide. At high tide, powerful waves crash over the rock rim into the pool \u2014 several tourists have been swept into the ocean and killed. Check tide times on TideForecast.com the night before and plan your west coast day around the low tide window. This is not a suggestion \u2014 it is a genuine safety requirement.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* -- PRO TIPS -- */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Nusa Penida</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDF05",
                  title: "Kelingking at 6am \u2014 before the boats arrive",
                  desc: "The first speedboat from Sanur docks at 7:45am and the viewpoint fills by 9am. Staying overnight on the island gives you access to the 6\u20138am window that day-trippers can never reach. The golden morning light illuminates the T-Rex cliff face in a way afternoon sun cannot. Every great Kelingking photo was taken in this window.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83D\uDC1F",
                  title: "Manta snorkeling at 6:30am for the best encounter",
                  desc: "After 9am, the tour boats arrive in waves and the mantas become more erratic. Book a 6:30am departure from the pier nearest Manta Point. Bring a wetsuit top \u2014 the water is cooler than you expect at dawn. Bring a waterproof phone case \u2014 underwater manta footage is non-negotiable.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83D\uDEB5",
                  title: "Hire a local driver for $25\u2013$40/day",
                  desc: "A local driver knows the road conditions in real time, the best tide windows for Angel\u2019s Billabong, the parking areas that avoid the tour group crush at Kelingking, and the small warungs that locals actually eat at. The saving on potential scooter medical bills makes this a rational economic decision.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83D\uDCB5",
                  title: "Withdraw IDR cash in Sanur before the boat",
                  desc: "The island\u2019s few ATMs run out on weekends. Withdraw IDR 1,000,000\u20132,000,000 in Sanur before boarding. Everything on the island is cash-only \u2014 guesthouses, warungs, scooter hire, manta boats. Don\u2019t count on getting cash on Nusa Penida.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83C\uDF0A",
                  title: "Check tide tables the night before Day 1",
                  desc: "Angel\u2019s Billabong is only accessible at low tide. Plan your entire west coast day (Day 1) around the tidal window. Use TideForecast.com or ask your guesthouse \u2014 they check daily. If low tide is in the afternoon, reverse the Day 1 order: Crystal Bay first, Billabong after lunch.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\uD83D\uDCF1",
                  title: "Bring a waterproof phone case",
                  desc: "Essential for manta ray footage at Manta Point and for the Billabong. A good waterproof case (IDR 50,000\u2013100,000 in Sanur or bring from home) protects against salt spray on the scooter as well. Most phone damage on Nusa Penida comes from scooter rain, not the sea.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nusa Penida" />

          {/* Combine With */}
          <CombineWith currentSlug="nusa-penida-3-days" />

          {/* -- FAQ -- */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do you get to Nusa Penida from Bali?",
                  a: "Take a speedboat from Sanur Beach on Bali\u2019s east coast. Multiple operators run daily between 7am and 5pm \u2014 the crossing takes 35\u201345 minutes. Ticket cost: IDR 150,000\u2013200,000 ($10\u2013$13 USD) one way. Recommended operators: Rocky Fast Cruise, Semaya One, Maruti Express, and Mola Mola Fast Boat. Book tickets the day before through your Bali accommodation or at the Sanur pier. Do not use unlicensed cheap boats. Return boats from Nusa Penida depart from Toyapakeh pier.",
                },
                {
                  q: "Is Nusa Penida worth visiting vs staying in Bali?",
                  a: "Nusa Penida offers experiences Bali\u2019s main island cannot: Kelingking\u2019s cliff drama, accessible manta rays at Manta Point, Angel\u2019s Billabong\u2019s infinity pool, and Diamond Beach\u2019s limestone amphitheatre. If you have 5 days in Bali, most experienced travellers recommend 2 nights on Nusa Penida over additional nights in Seminyak or Ubud. However, accommodation quality and road infrastructure lag behind mainland Bali \u2014 it\u2019s a raw adventure destination, not a resort holiday.",
                },
                {
                  q: "When is manta ray season at Nusa Penida?",
                  a: "Manta rays are present at Manta Point year-round, making Nusa Penida more reliable than most manta destinations globally. Visibility is best April\u2013October (dry season). December\u2013March can bring rougher seas and lower visibility. For optimal encounters: May, June, or September. Mola mola (oceanic sunfish) also pass through Crystal Bay July\u2013October.",
                },
                {
                  q: "Is it safe to ride a scooter on Nusa Penida?",
                  a: "In dry season (April\u2013October), experienced scooter riders can handle most roads. The west coast roads to Kelingking, Broken Beach, and Crystal Bay are the best maintained. East coast roads to Diamond Beach and Atuh are steep, unpaved in sections, and more demanding. In wet season, scooter riding is genuinely dangerous \u2014 hire a local driver instead. Multiple accidents occur monthly, especially with tourists unfamiliar with the road conditions.",
                },
                {
                  q: "How much money should I bring to Nusa Penida?",
                  a: "Budget travellers should bring IDR 800,000\u20131,500,000 per day ($50\u2013$100 total for 3 days) in cash from Bali. The island has very limited ATMs that frequently run out of cash on weekends. Everything operates on IDR cash \u2014 guesthouses, warungs, scooter hire, and boat tours. Withdraw from ATMs in Sanur before boarding the fast boat. Cards are only accepted at a few higher-end hotels.",
                },
                {
                  q: "What should I not miss on Nusa Penida?",
                  a: "The absolute must-sees are: Kelingking Beach viewpoint at dawn (the T-Rex cliff), manta ray snorkeling at Manta Point (book a 6:30am boat), Angel\u2019s Billabong at low tide, Broken Beach, and Diamond Beach on the east coast. If you dive, Crystal Bay for mola mola season (July\u2013October) is extraordinary. The Peguyangan blue staircase waterfall is Nusa Penida\u2019s most underrated site.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nusa Penida trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/bali-7-days", label: "Bali 7-day guide", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/nusa-penida-3-days", label: "This guide (bookmark)", icon: "\uD83D\uDCCC" },
                { href: "/blog/lombok-3-days", label: "Lombok 3 days", icon: "\u2708\uFE0F" },
                { href: "/blog/gili-islands-2-days", label: "Gili Islands 2 days", icon: "\uD83D\uDCCB" },
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
          <RelatedGuides currentSlug="nusa-penida-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Indonesia &amp; Bali Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali in 7 Days &mdash; Temples, Rice Terraces &amp; Beaches", href: "/blog/bali-7-days" },
                { label: "Lombok 3 Days &mdash; Waterfalls &amp; Beaches", href: "/blog/lombok-3-days" },
                { label: "Gili Islands 2 Days &mdash; Snorkeling Paradise", href: "/blog/gili-islands-2-days" },
                { label: "Komodo 3 Days &mdash; Dragons &amp; Diving", href: "/blog/komodo-3-days" },
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
