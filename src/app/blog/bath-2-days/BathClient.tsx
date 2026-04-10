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
const BATH_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Bath Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
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
          href: `mailto:?subject=Bath 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bath in 2 Days — Roman Baths, Thermae Spa and Georgian architecture&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bath-2-days"
        imageUrl="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80"
        description="Bath in 2 Days: Roman Baths, Thermae Spa rooftop pool, Stonehenge day trip, and Georgian architecture — complete travel guide with budget breakdown."
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
export default function BathClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BATH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bath" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bath roman baths england uk georgian architecture abbey"
            fallback="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80"
            alt="Roman Baths with Bath Abbey reflection in the sacred spring water England UK"
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
              <span className="text-white/70">Bath 2 Days</span>
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
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bath in 2 Days:
                <em className="italic text-amber-300"> Roman Baths, Thermae Spa &amp; Stonehenge</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Georgian terraces glowing honey-gold at dawn, Roman springs that have flowed for 2,000 years, the only natural thermal spa in the UK, and Pulteney Bridge at sunset. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="10 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏛️ Somerset, England</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From £50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bath at 7am — the Georgian terraces glowing honey-gold in early light, steam rising from the thermal springs that have drawn visitors since the Romans arrived in 43 AD, the Abbey tower catching the sun above a still-quiet Stall Street — is one of England&apos;s most quietly spectacular sights.
            </p>
          </blockquote>

          {/* ── WHAT BATH ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bath Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bath is not just a pretty city — it is the only place in the United Kingdom where geothermally heated water naturally reaches the surface. Three hot springs bubble up through the limestone at 46°C, and they have done so continuously since before the Romans arrived in 43 AD. The Romans built an elaborate temple and bathing complex over the main spring — the Great Bath, the gilded temple of Sulis Minerva, the hypocaust heating systems — that remained in use for three centuries and was only rediscovered and excavated in the 1870s.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              On top of this Roman foundation, Bath was rebuilt entirely in the 18th century as England&apos;s fashionable resort city. The architect John Wood the Elder and his son John Wood the Younger designed a coherent Georgian streetscape of honey-coloured Bath stone — the Royal Crescent, the Circus, the Assembly Rooms, Pulteney Bridge — that is so unified in style that the entire city was designated a UNESCO World Heritage Site in 1987. The stone itself, quarried from the hills surrounding Bath, has a warm amber quality in morning and evening light that photographs cannot fully capture.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Jane Austen lived here from 1801 to 1806, and two of her novels — Northanger Abbey and Persuasion — are set substantially in Bath&apos;s Assembly Rooms, Pump Room, and terraces. Thermae Bath Spa, opened in 2006 in a building connected directly to the Roman spring system, is the only place in Britain where you can bathe in natural thermal water. The rooftop infinity pool, at 33.5°C with views over the Georgian skyline, is Bath&apos;s defining modern experience.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From London" value="1h 25min" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Oct" />
              <StatCard icon="🏛️" label="Springs" value="3 Roman" />
              <StatCard icon="💰" label="Budget From" value="£50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bath</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "12–18°C, long days, Bath stone glowing in warm light. The Royal Crescent and Circus look their best with fresh greenery. Thermae Spa is bookable weeks rather than months ahead. Quieter than summer. May and early June are the sweet spot — long golden evenings, Pulteney Bridge at dusk, and comfortable walking temperatures.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy but Beautiful",
                  d: "18–24°C, excellent weather, but both the Roman Baths and Thermae Spa sell out weeks or months in advance. Day-trippers from London arrive in large numbers by 10am. Book everything — hotel, Roman Baths tickets, and Thermae Spa — months ahead. Visit the Royal Crescent at 7am before the crowds.",
                  b: "Book very far ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent Alternative",
                  d: "10–16°C, fewer visitors than summer but good weather. Stonehenge in autumn light is particularly atmospheric. Thermae Spa bookings become easier to secure 2–3 weeks ahead. The plane trees in the Circus turn golden in October — some of the best photography of the year.",
                  b: "Highly recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Quieter and Atmospheric",
                  d: "4–10°C. The Roman Baths and city centre are significantly less crowded. Thermae Spa rooftop pool is magical on cold evenings — steam rising, city lights reflected. Christmas Market (late November–December) fills the Abbey churchyard. Stonehenge in winter has a particular quality of light.",
                  b: "Best for spa, fewer crowds",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Bath</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bath Spa railway station is a <strong className="font-medium">5-minute walk</strong> from the Roman Baths and 10 minutes from the city centre. It is one of the most centrally located train stations of any major UK tourist destination — you can be at the Roman Baths entrance within minutes of arriving by train.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from London Paddington (recommended)",
                  d: "GWR (Great Western Railway) direct service: London Paddington → Bath Spa. Journey time: approximately 1 hour 25 minutes. Advance tickets: £25–50. Walk-up fares: £45–75. Trains run every 30 minutes throughout the day from early morning to late evening. The most convenient option by a considerable margin — Bath Spa station is a 5-minute walk from the Roman Baths.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "National Express Coach from London Victoria",
                  d: "London Victoria Coach Station → Bath Bus Station: 2.5–3 hours depending on traffic. Advance fares: £10–20. Walk-up fares: £25–35. Significantly slower than the train but cheaper. Useful if budget is a primary concern. The coach station in Bath is a 15-minute walk from the city centre.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Flying to Bristol Airport (BRS)",
                  d: "Bristol Airport (BRS) is 30 minutes from Bath by taxi (£35–50) or bus (Bristol Airport Flyer connects to Bristol Temple Meads, then GWR train to Bath Spa — total journey 1 hour). Many European budget airlines fly to Bristol including easyJet and Ryanair. Better value than London airports for visitors from continental Europe.",
                  b: "Good for European visitors",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from London",
                  d: "London → Bath via M4 motorway: approximately 2 hours from central London (115 miles). Traffic on the M4 near London and near the Bath exit can add 30–60 minutes. Parking in Bath city centre is expensive (£3–5/hour) and limited. The park-and-ride services (Lansdown, Newbridge, Odd Down — £3.80 return per person) are far more practical for city centre visits.",
                  b: "Flexible but parking challenging",
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

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 2-Day Bath Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Both the Roman Baths and Thermae Bath Spa must be pre-booked — this is the single most important logistical step for any Bath trip. Book both before you book your hotel or train.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Roman Baths · Bath Abbey · Pulteney Bridge · Thermae Spa"
                cost="£65–85 total (Roman Baths £20, Thermae £45, food £15–20)"
                items={[
                  "9:00am — Roman Baths (£18–22 adult, MUST pre-book at romanbaths.co.uk — sells out weeks in advance in summer, often months ahead in July and August). Arrive at opening for the smallest crowds. The audio guide narrated by Bill Bryson is included and genuinely excellent — follow it properly rather than rushing through. The Great Bath itself (the open-air pool fed by the sacred spring), the excavated Roman temple precinct, the museum of Roman finds including the gilded bronze head of Minerva, and the hypocaust underfloor heating system all take 2–2.5 hours to see properly.",
                  "11:30am — Bath Abbey (free entry, £8 for the tower tour). The fan vaulting in the interior — completed in 1611 — is considered the finest example in England. The west front with its carved angels ascending and descending Jacob&apos;s Ladder is one of the most distinctive church facades in the country. The tower tour takes you through the bell chamber (10 bells, regularly rung) and up to roof-level views across the Georgian city.",
                  "1:00pm — Lunch: Pick up food from the covered market on Grand Parade or the Guildhall Market (indoor, cold cuts, local cheese, bread, £5–8 per person) and eat at Parade Gardens on the River Avon (free in winter, £1–2 seasonal charge in summer). Or try a Cornish pasty from one of the bakeries on Stall Street (£4–5).",
                  "2:30pm — Pulteney Bridge: one of only four bridges in the world with shops built across its full span on both sides (alongside Florence&apos;s Ponte Vecchio, Venice&apos;s Rialto, and Erfurt&apos;s Krämerbrücke). Free to walk across. The weir immediately below the bridge creates a perfect reflection in the still pool above. Walk Great Pulteney Street behind the bridge — 1,100 feet long, 100 feet wide, the grandest Georgian street in Bath.",
                  "3:30pm — Holburne Museum at the far end of Great Pulteney Street (free permanent collection). Thomas William Holburne&apos;s collection includes works by Gainsborough, Guardi, Ramsay, and Turner. The building — an 18th-century villa extended by Eric Parry architects in 2011 — sits in a lovely garden setting beside the canal.",
                  "4:30pm — Thermae Bath Spa (£45 for a standard 2-hour session, BOOK WEEKS OR MONTHS AHEAD at thermaebathspa.com — this is the only place in the UK to bathe in natural thermal waters). The open-air rooftop infinity pool at 33.5°C with a 360-degree view over Bath&apos;s UNESCO World Heritage skyline is the defining Bath experience. Book a late afternoon session and stay for dusk — the sky turns orange over the Georgian rooftops and the water steams more visibly in cooler air.",
                  "7:30pm — Dinner: The Scallop Shell (Monmouth Place, fish and chips £14–16, frequently ranked among the best in south-west England) or The Pump Room Restaurant (overlooking the Great Bath, £18–25 for a two-course dinner, traditional British). Budget £15–25 total for dinner.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Royal Crescent · The Circus · Jane Austen Centre · Stonehenge Day Trip"
                cost="£60–80 total (Stonehenge bus + entry ~£55, museum £12.50, food £15)"
                items={[
                  "7:00am — Royal Crescent before the tourists arrive: 30 Georgian townhouses arranged in a sweeping elliptical arc, the most celebrated example of Georgian architecture in England and possibly the world. The exterior is completely free to view. At 7am on a weekday you may have the entire Crescent to yourself — the morning light hits the honey-Bath-stone from the east, illuminating the curved facade in warm gold. The view looking up from the ha-ha lawn is the iconic Bath photograph.",
                  "8:00am — The Circus (5 minutes&apos; walk from Royal Crescent): a complete circle of 33 Georgian townhouses with three symmetrical entrance streets, designed by John Wood the Elder and completed by his son John Wood the Younger in 1768. The mature plane trees in the central garden now tower above the rooflines. Notable former residents include William Pitt the Elder, David Livingstone, and Thomas Gainsborough.",
                  "9:30am — No. 1 Royal Crescent Museum (£12.50 adult, book ahead at no1royalcrescent.org.uk). A Georgian townhouse restored exactly as it would have appeared in the 1770s: original plaster, period wallpapers, correct furniture, silverware, and kitchenware. The contrast between the grand public rooms and the servants&apos; quarters below stairs is the most telling thing about Georgian social life.",
                  "11:00am — Jane Austen Centre (£14 adult, Gay Street, near The Circus). Jane Austen lived in Bath from 1801 to 1806. The centre covers her relationship with Bath through original letters, Regency-era costume (you can try a bonnet), and well-curated exhibits connecting specific Bath locations to scenes in Northanger Abbey and Persuasion. The Regency Tea Room upstairs serves cream teas for £12.",
                  "12:30pm — Stonehenge Day Trip: the Stonehenge Tour bus departs Bath Bus Station approximately twice daily (check current timetable at visitbath.co.uk). English Heritage entry: £38 adult. Total cost including bus transport: approximately £52–58. BOOK MONTHS IN ADVANCE in summer. The stones in person — 5 metres tall, up to 25 tonnes each, transported from Wales 4,500 years ago — are both more overwhelming and more mysterious than photographs suggest.",
                  "OR 12:30pm — Wells & Cheddar Gorge alternative (1 hour from Bath by bus): Wells Cathedral is the smallest city in England and has one of the finest medieval cathedrals in the country. Cheddar Gorge (20 minutes from Wells) — the deepest gorge in the UK — has show caves (£18) and a free walk along the top of the gorge with spectacular views.",
                  "Evening — Return to Bath. Sally Lunn&apos;s bun (4 North Parade Passage, oldest house in Bath built 1482): the famous Sally Lunn Bun served sweet (clotted cream and strawberry jam) or savoury (smoked salmon and cream cheese), £8–12. The original kitchen museum in the cellar is free to visit. This is the one Bath food experience that is genuinely irreplaceable.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bath" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Bath Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. Pre-book the Roman Baths and Thermae Spa before arriving — both sell out, especially in summer.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Roman Baths",
                  e: "£18–22 (adults, pre-book online)",
                  d: "The best-preserved Roman bathing complex in northern Europe. The Great Bath — fed by the sacred spring at 46°C, open to the sky, surrounded by Roman columns — is one of the most atmospheric ancient sites in Britain. The museum of Roman finds includes the gilded bronze head of Minerva and thousands of curse tablets thrown into the spring by Roman bathers. The Bill Bryson audio guide is included and worth following properly.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "Thermae Bath Spa",
                  e: "£45 for 2-hour session (book months ahead)",
                  d: "The only place in the UK to bathe in natural thermal spring water. The rooftop infinity pool at 33.5°C with a panoramic view over the Georgian skyline is Bath&apos;s defining experience. Book an evening session for dusk light and steaming water. The Cross Bath (nearby, private octagonal pool, £45/session) is an even more intimate and historic alternative.",
                  t: "Must do · 2–3 hrs",
                },
                {
                  n: "Royal Crescent",
                  e: "Free (exterior) · £12.50 No. 1 Museum",
                  d: "Thirty Georgian townhouses sweeping in a perfect elliptical arc — the most celebrated example of Georgian architecture in the world. View the exterior for free at any time; No. 1 Royal Crescent Museum (interior, restored to 1770s) gives the best sense of what Georgian life actually looked and felt like. Visit the exterior at 7am for empty-street photographs.",
                  t: "Must see · 30 min (exterior) · 1 hr (museum)",
                },
                {
                  n: "Bath Abbey",
                  e: "Free (tower tour £8)",
                  d: "The fan vaulting inside Bath Abbey — completed in 1611 — is considered the finest example in England. The west front with its carved angels ascending Jacob&apos;s Ladder is architecturally remarkable. The tower tour takes you through the working bell chamber and up to views across the Georgian city. Allow 45 minutes inside.",
                  t: "Highly recommended · 45 min",
                },
                {
                  n: "Pulteney Bridge & Weir",
                  e: "Free",
                  d: "One of only four bridges in the world with shops built across both sides of its full span. The weir below the bridge creates a continuous sheet of water that catches evening light in extraordinary ways. Position yourself on the north bank 45 minutes before sunset for the best reflection photograph. Walk the full length of Great Pulteney Street behind the bridge — 1,100 feet of Georgian grandeur.",
                  t: "Must see · Free · 30 min",
                },
                {
                  n: "The Circus",
                  e: "Free (exterior)",
                  d: "A complete circle of 33 Georgian townhouses designed by John Wood the Elder, with three symmetrical streets leading in. The mature plane trees in the central garden — planted in the 19th century — now tower over the rooflines, creating a cathedral-scale canopy. Former residents: William Pitt the Elder, David Livingstone, Thomas Gainsborough. Five minutes&apos; walk from the Royal Crescent.",
                  t: "Must see · Free · 20 min",
                },
                {
                  n: "Jane Austen Centre",
                  e: "£14 adult",
                  d: "Well-curated exhibition on Jane Austen&apos;s six years in Bath (1801–1806) and the two novels set here — Northanger Abbey and Persuasion. Original letters, Regency costume, and specific location mapping from novels to Bath streets. The Regency Tea Room upstairs serves cream teas (£12). Located on Gay Street, 3 minutes from the Circus.",
                  t: "Recommended · 1–1.5 hrs",
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
            title="Bath — Roman Springs, Georgian Terraces &amp; Pulteney Bridge"
            subtitle="England&apos;s most beautiful Georgian city, UNESCO World Heritage since 1987."
            spots={[
              {
                name: "Roman Baths Great Bath",
                query: "roman baths great bath bath england sacred spring ancient",
                desc: "The Great Bath — the open-air pool fed by the sacred Roman spring at 46°C, the centrepiece of the best-preserved Roman bathing complex in northern Europe.",
              },
              {
                name: "Royal Crescent Bath",
                query: "royal crescent bath england georgian architecture honey stone",
                desc: "Thirty Georgian townhouses in a sweeping elliptical arc — the most celebrated example of 18th-century architecture in England.",
              },
              {
                name: "Pulteney Bridge & Weir",
                query: "pulteney bridge bath weir river avon reflection england",
                desc: "Pulteney Bridge and its famous weir — one of only four bridges in the world with shops on both sides of the full span.",
              },
              {
                name: "Thermae Bath Spa Rooftop Pool",
                query: "thermae bath spa rooftop pool thermal water bath england skyline",
                desc: "The rooftop infinity pool at Thermae Bath Spa — the only place in the UK to bathe in natural thermal spring water, with panoramic views over the Georgian skyline.",
              },
              {
                name: "Bath Abbey Interior",
                query: "bath abbey interior fan vaulting england gothic architecture",
                desc: "The fan vaulting inside Bath Abbey — completed in 1611 and considered the finest example of this architectural technique in England.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bath is one of England&apos;s more expensive day-trip destinations — the Roman Baths and Thermae Spa entry fees add up quickly. Accommodation ranges from YHA hostel beds to some of the most expensive Georgian hotels in the country. Plan your budget carefully around the two non-negotiable pre-bookings.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "£35–70 (YHA Bath, guesthouses)", "£100–180 (Queensberry, Brooks)", "£350–900 (Royal Crescent Hotel)"],
                    ["🍽️ Food (per day)", "£15–25 (market, pubs, pasties)", "£30–55 (restaurants, cream teas)", "£60–150 (fine dining, afternoon tea)"],
                    ["🏛️ Roman Baths", "£18–22 (adult, pre-book)", "£18–22 (adult, pre-book)", "£33–38 (Twilight Tour, evenings)"],
                    ["🌊 Thermae Bath Spa", "£45 (2-hour standard session)", "£45 standard or £45 Cross Bath", "Gainsborough private spa (residents)"],
                    ["🚂 Train from London (return)", "£25–50 (advance)", "£50–90 (flexible)", "£90–150 (first class)"],
                    ["🗿 Stonehenge (optional)", "£52–58 (bus + entry)", "£65–90 (private tour)", "£55–75 (special access)"],
                    ["TOTAL (2-day trip, excl. train)", "£80–145/day", "£170–305/day", "£480–1,210/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (£50–85/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at YHA Bath (dorms £35–55, private rooms £65–90), eat at Guildhall Market and the Scallop Shell, skip Thermae Spa and use the £8 Abbey tower instead. Roman Baths is non-negotiable — it is the whole reason Bath exists.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (£120–200/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Stay at The Queensberry Hotel or No. 15 Great Pulteney, do the Roman Baths and Thermae Spa, eat at Sotto Sotto in the evening, cream tea at the Francis Hotel. This is the sweet spot for a Bath weekend.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury (£300–700/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">The Royal Crescent Hotel or Gainsborough Bath Spa, private Roman Baths Twilight Tour, dinner at Menu Gordon Jones, Stonehenge Special Access. Bath has one of the best luxury hotel collections in England.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bath</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The city centre is compact — almost every hotel is within 15 minutes&apos; walk of the Roman Baths. Staying in the Georgian quarter (near the Royal Crescent or The Circus) puts you in the most architecturally remarkable part of the city. Book well ahead for summer weekends, when Bath fills quickly.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Royal Crescent Hotel & Spa",
                  type: "5-star luxury · 16 Royal Crescent",
                  price: "From £400/night",
                  badge: "Most iconic",
                  desc: "Two Grade I listed Georgian townhouses occupying the centre of the Royal Crescent. Garden rooms overlook the private walled garden and croquet lawn. The hotel&apos;s spa uses thermal waters. The 1 Crescent restaurant is one of Bath&apos;s best. Step outside and you are standing on the Royal Crescent itself — the most famous street in Bath.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "No. 15 Great Pulteney",
                  type: "Boutique hotel · Great Pulteney Street",
                  price: "From £180/night",
                  badge: "Best mid-luxury",
                  desc: "A beautifully converted Georgian townhouse on Great Pulteney Street — the grandest Georgian street in Bath, 100 yards from Pulteney Bridge. Individually designed rooms, excellent breakfast, genuinely helpful staff. The location is outstanding: 5 minutes from the Roman Baths, 10 minutes from the Royal Crescent.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "The Queensberry Hotel",
                  type: "Boutique · Russel Street, Georgian quarter",
                  price: "From £130/night",
                  badge: "Best value boutique",
                  desc: "Four restored Georgian townhouses in the quieter part of the Georgian quarter, 10 minutes&apos; walk from the Roman Baths. The Olive Tree restaurant in the basement holds a AA Rosette. Rooms vary — ask for one of the larger ones in the main building. Consistently excellent reviews for service and atmosphere.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "YHA Bath",
                  type: "Hostel · Bathwick Hill",
                  price: "From £35/night (dorm)",
                  badge: "Best budget",
                  desc: "The YHA in Bath occupies a Victorian Gothic mansion on Bathwick Hill, a 15-minute walk from the city centre (steep uphill return). Dorm beds £35–50, private rooms £70–100. Excellent facilities including a common room, self-catering kitchen, and a garden with views. One of the best-located and most architecturally interesting youth hostels in England.",
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

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bath</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bath has a genuinely excellent restaurant scene for a city of its size — from the historic Pump Room to some of the most creative cooking in south-west England. The Milsom Street and Kingsmead Square areas have the highest concentration of restaurants; Walcot Street is better for independent cafes.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "The Pump Room",
                  t: "Historic Georgian · Stall Street (beside Roman Baths)",
                  d: "The original 18th-century assembly room where Austen&apos;s characters came to take the waters and be seen. Lunch (£18–25 for two courses) and traditional afternoon tea (£28–35) are served to the accompaniment of a resident string trio. Try a glass of the thermal spring water at the pump — warm, sulphurous, and ancient. The setting — Georgian chandeliers, Roman spring visible through the windows — is worth the price.",
                  b: "Most historic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sotto Sotto",
                  t: "Italian · North Parade (vaulted stone cellars)",
                  d: "Exceptional Italian cooking in a vaulted Georgian stone cellar beneath a North Parade building. One of Bath&apos;s most atmospheric dining rooms — arched sandstone ceilings, candlelight, and genuinely good pasta and risotto (£15–25 mains). Sotto Sotto requires advance booking — try for a table 1–2 weeks ahead. Closed lunchtimes.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "The Scallop Shell",
                  t: "Fish & chips · Monmouth Place",
                  d: "Consistently ranked among the best fish and chip restaurants in south-west England. The haddock and chips (£14–16) use daily-delivered sustainable fish from day-boats off the Devon and Cornwall coast. The tartare sauce and mushy peas are made from scratch. Eat in or take away. Arrive before 12:30pm or after 2:30pm to avoid queuing.",
                  b: "Best fish & chips",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Sally Lunn&apos;s",
                  t: "Historic bakery & tea room · 4 North Parade Passage",
                  d: "The oldest house in Bath (built 1482) has been serving its famous Sally Lunn Bun since at least the 1680s. The bun is unlike anything else in English baking — part brioche, part milk roll — served sweet (clotted cream and preserves, £8) or savoury (smoked salmon and cream cheese, £11). The medieval kitchen in the basement is free to visit. This is the one Bath food experience that is genuinely irreplaceable.",
                  b: "Must visit",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "The Olive Tree",
                  t: "Modern British · Russell Street (Queensberry Hotel)",
                  d: "Bath&apos;s most acclaimed restaurant — 1 AA Rosette, modern British cooking using South West produce (Cornish seafood, Somerset cheese, local game in season). Mains £25–45. Set menu at lunch offers better value (£28–35 for 3 courses). Book 1–2 weeks ahead for weekends. The wine list focuses on small, independent producers.",
                  b: "Best fine dining",
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
            destination="Bath England"
            hotels={[
              {
                name: "The Royal Crescent Hotel & Spa",
                type: "5-star luxury · Grade I listed Georgian townhouses",
                price: "From £400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/gb/the-royal-crescent.html?aid=2820480",
              },
              {
                name: "No. 15 Great Pulteney",
                type: "Boutique · Great Pulteney Street",
                price: "From £180/night",
                rating: "4",
                badge: "Best mid-luxury",
                url: "https://www.booking.com/hotel/gb/no15-great-pulteney.html?aid=2820480",
              },
              {
                name: "The Queensberry Hotel",
                type: "Boutique · Georgian quarter",
                price: "From £130/night",
                rating: "4",
                badge: "Best value boutique",
                url: "https://www.booking.com/hotel/gb/the-queensberry.html?aid=2820480",
              },
              {
                name: "YHA Bath",
                type: "Hostel · Bathwick Hill Victorian mansion",
                price: "From £35/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gb/yha-bath.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Roman Baths Guided Tour",
                duration: "2.5 hrs",
                price: "From £22/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=roman+baths+bath+england&partner_id=PSZA5UI",
              },
              {
                name: "Stonehenge Day Trip from Bath",
                duration: "Full day",
                price: "From £52/person",
                badge: "Top experience",
                url: "https://www.getyourguide.com/s/?q=stonehenge+day+trip+bath&partner_id=PSZA5UI",
              },
              {
                name: "Bath Georgian Architecture Walking Tour",
                duration: "2 hrs",
                price: "From £18/person",
                badge: "Highly rated",
                url: "https://www.getyourguide.com/s/?q=bath+georgia+architecture+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Jane Austen Walking Tour Bath",
                duration: "1.5 hrs",
                price: "From £15/person",
                url: "https://www.getyourguide.com/s/?q=jane+austen+bath+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎟️",
                  title: "Not Pre-Booking Roman Baths and Thermae Spa",
                  desc: "Both the Roman Baths (romanbaths.co.uk) and Thermae Bath Spa (thermaebathspa.com) sell out weeks — sometimes months — in advance in summer. Walk-in tickets are occasionally available at the door but cannot be relied on, especially for the Thermae Spa rooftop pool which has limited capacity by design. In July and August, same-day Thermae Spa availability is essentially non-existent. Book both before you book your train, hotel, or anything else for your Bath trip. This single mistake ruins more Bath trips than any other.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗺️",
                  title: "Skipping the Stonehenge Day Trip",
                  desc: "Many visitors dismiss Stonehenge as &apos;touristy&apos; or &apos;overrated&apos; — usually people who have only seen photographs. Standing 5 metres from stones that weigh up to 25 tonnes, were moved 200 miles from Pembrokeshire in Wales approximately 4,500 years ago, and have stood in precise astronomical alignment ever since is an experience of genuinely different scale to any photograph. The Stonehenge Tour bus from Bath (about £52 all-inclusive) means no car is required. Book at least 2 weeks ahead in summer.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⏰",
                  title: "Visiting Bath as a Day Trip from London",
                  desc: "Bath is 1 hour 25 minutes from London Paddington by GWR train (£25–50 advance booking). Many visitors attempt Bath as a long day trip — arriving at 10am, leaving at 7pm. This gives you barely enough time for the Roman Baths and a walk around the city centre. You will miss the Royal Crescent at dawn, the Thermae Spa at sunset, dinner in a vaulted cellar, and the city when the day-trippers have gone. Bath genuinely deserves two nights minimum.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📸",
                  title: "Arriving at the Royal Crescent After 9am",
                  desc: "The Royal Crescent has parked cars, tour groups, and steady visitor streams by 10am. At 7am on a weekday it is often completely empty — and the morning light from the east hits the Bath stone in warm gold. If you want the iconic photograph without other tourists in the frame, set your alarm. The same principle applies to the Circus and Pulteney Bridge, though both retain their grandeur even with people in the frame.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1.5">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bath</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📸",
                  title: "Royal Crescent at 7am for empty-street photos",
                  desc: "By 10am the Royal Crescent has parked cars, tour groups, and steady streams of visitors. At 7am on a weekday — especially in spring — it is often completely empty and the morning light from the east hits the Georgian stone perfectly. The view from the ha-ha lawn looking up at the sweep of all 30 houses in one arc is the defining Bath photograph. Walk up from the city centre (15 minutes uphill) or take a taxi. Set your alarm.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Pulteney Bridge at sunset for the perfect reflection",
                  desc: "Position yourself on the north bank of the Avon (the Parade Gardens side, facing west) approximately 45 minutes before sunset. The weir creates a continuous sheet of water that catches the last light in long gold reflections. The bridge&apos;s arch and the weir&apos;s curve make a natural frame. Late April through September gives the longest golden evenings — the best are in May and early June when the light is warmest.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌊",
                  title: "Book Thermae Spa for a late afternoon session",
                  desc: "An evening slot (5pm–7pm) in the Thermae Spa rooftop pool is significantly better than a morning session. The light turns golden over the Georgian rooftops, the water steams more visibly in cooling air, and the city transitions from afternoon to dusk while you soak. In winter this is even more atmospheric — cold air, warm pool, city lights beginning to glow.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍞",
                  title: "Sally Lunn&apos;s bun: the one Bath food experience you cannot skip",
                  desc: "Sally Lunn&apos;s (4 North Parade Passage, open daily) occupies the oldest house in Bath (built 1482) and has been baking its distinctive large, soft bun since at least the 1680s. The bun is unlike anything else in English baking — part brioche, part milk roll — and is served sweet (clotted cream and preserves, £8) or savoury (smoked salmon and cream cheese, £11). The medieval kitchen in the basement is free to visit even if you don&apos;t eat.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚶",
                  title: "Walk the full Georgian circuit in order",
                  desc: "The Georgian quarter is best explored in one connected circuit: Royal Crescent → Circus → Assembly Rooms → Milsom Street → Bridge Street → Pulteney Bridge → Great Pulteney Street → Holburne Museum. Allow 2.5–3 hours at a relaxed pace. Each section connects naturally to the next — you are walking the social geography of 18th-century Bath in the correct order.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎭",
                  title: "Roman Baths Twilight Tour for a completely different experience",
                  desc: "On select evenings (check romanbaths.co.uk — typically Friday and Saturday evenings year-round), the Roman Baths are open after closing time lit by torches and candles rather than strip lights. The crowds are gone, the Great Bath steams under the night sky, and the atmosphere is genuinely different from the daytime visit. Cost: £33–38. Book months ahead — these sell out faster than standard tickets.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bath" />

          {/* Combine With */}
          <CombineWith currentSlug="bath-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Can I swim in the Roman Baths?",
                  a: "No. The Roman Baths are a heritage museum and archaeological site — the water in the Great Bath and other pools is not treated for swimming. Bathing was stopped in the 1970s after a meningitis outbreak linked to an amoeba in the water. If you want to bathe in Bath&apos;s natural thermal waters (which flow at 46°C from the spring before being cooled to pool temperature), visit Thermae Bath Spa on nearby Beau Street — the only place in the UK where bathing in natural thermal spring water is possible. Book weeks or months in advance.",
                },
                {
                  q: "Is Stonehenge worth visiting from Bath?",
                  a: "Yes — emphatically, if you have not been before. Stonehenge is 24 miles from Bath (about 1 hour by the tour bus). English Heritage entry is £38, total cost with transport approximately £52–58. The stones in person — larger and more mysterious than photographs suggest, each up to 25 tonnes and 5 metres tall — are worth the trip. Go in the morning or early afternoon for the best light. The English Heritage visitor centre is well-designed with an excellent exhibition on Neolithic Britain. Book months ahead in July and August.",
                },
                {
                  q: "How do I get from London to Bath?",
                  a: "The GWR (Great Western Railway) train from London Paddington to Bath Spa station is the standard route — fast, frequent, and direct. Journey time: approximately 1 hour 25 minutes. Advance tickets: £25–50. Walk-up fares: £45–75. Trains run every 30 minutes throughout the day. Bath Spa station is a 5-minute walk from the Roman Baths and 10 minutes from the city centre. Alternatively: National Express coach from London Victoria (2.5–3 hours, £10–20 advance) or driving via M4 motorway (approximately 2 hours from central London). The train is by far the most convenient option.",
                },
                {
                  q: "What is the Jane Austen connection to Bath?",
                  a: "Jane Austen lived in Bath from 1801 to 1806, after her father unexpectedly moved the family there from Steventon. She was not happy in Bath — the city&apos;s relentless social round and the absence of quiet country life made her largely unproductive. Despite this, Bath permeates two of her six completed novels: Northanger Abbey (set almost entirely in Bath, following naive Catherine Morland through the Pump Room, Assembly Rooms, and surrounding countryside) and Persuasion (where Captain Wentworth courts Anne Elliot against Bath&apos;s social hierarchies). The Jane Austen Centre on Gay Street covers both her biography and her literary Bath in well-curated detail.",
                },
                {
                  q: "How many days do I need in Bath?",
                  a: "Two nights (two full days) is the ideal minimum for a first visit. One day is enough to see the Roman Baths and the city centre highlights but leaves no time for Thermae Spa, the Stonehenge day trip, the Royal Crescent at dawn, or any sense of the evening city. Three days allows a leisurely pace with both Stonehenge and a Wells/Cheddar Gorge excursion, plus time to explore Bristol (15 minutes by train — Banksy&apos;s hometown, with exceptional street art and the Clifton Suspension Bridge). If you have only one day from London, it is still worth going — but know that you are getting a fraction of what Bath offers.",
                },
                {
                  q: "What is the best thing to do in Bath for free?",
                  a: "Quite a lot: the Royal Crescent exterior, the Circus exterior, Pulteney Bridge (free to walk across), Parade Gardens (free in winter), the Holburne Museum (free permanent collection), Bath Abbey interior (free, tower tour £8), and the entire Georgian city as a walking experience are all free. The city itself is the attraction — the entry-fee experiences (Roman Baths, Thermae Spa) add to it enormously, but Bath rewards just walking more than almost any other English city.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-0 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bath trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bath", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bath-trip-cost-breakdown", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-bath", label: "How to get there", icon: "🚂" },
                { href: "/blog/bath-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="bath-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More UK &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "London in 5 Days — The Complete Guide", href: "/blog/london-5-days" },
                { label: "Cotswolds in 3 Days — Villages &amp; Countryside", href: "/blog/cotswolds-3-days" },
                { label: "Edinburgh in 4 Days — Castle, Old Town &amp; Whisky", href: "/blog/edinburgh-4-days" },
                { label: "Paris in 5 Days — Art, Food &amp; Architecture", href: "/blog/paris-5-days" },
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
