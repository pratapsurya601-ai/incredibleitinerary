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
const BORACAY_TOC = [
  { id: "honest",      emoji: "🏖️",  label: "What Boracay Actually Is" },
  { id: "season",      emoji: "🌡️",  label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",   label: "Getting There" },
  { id: "itinerary",   emoji: "📅",   label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🗺️",   label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",   label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",   label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️",  label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",   label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",   label: "Pro Tips" },
  { id: "faq",         emoji: "❓",   label: "FAQ" },
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
          href: `mailto:?subject=Boracay 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Boracay in 4 Days — White Beach, paraw sunsets and Asia&apos;s best kitesurfing&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/boracay-4-days"
        imageUrl="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80"
        description="Boracay in 4 Days: White Beach sunrise, paraw sunset sails, island hopping, Ariel&apos;s Point cliff diving, and world-class kitesurfing at Bulabog Beach — complete Philippines travel guide."
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
export default function BoracayClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BORACAY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Boracay" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="boracay white beach philippines crystal blue water sunset"
            fallback="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1600&q=80"
            alt="Boracay White Beach Philippines crystal clear blue water palm trees sunset"
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
              <span className="text-white/70">Boracay 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Philippines&#39; Crown Jewel
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Boracay in 4 Days:
                <em className="italic text-amber-300"> White Beach, Paraw Sunsets &amp; Asia&apos;s Best Kitesurfing</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                4km of powdery white sand, paraw silhouettes against a technicolour sunset, cliff diving at Ariel&apos;s Point, and world-class kitesurfing at Bulabog. The complete guide — budget to Shangri-La.
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
              <span>🇵🇭 Western Visayas, Philippines</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $70/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Boracay is what happens when you take the finest sand in Southeast Asia, point the beach west into a flat horizon over the Sibuyan Sea, and let the Amihan wind do the rest — paraw outriggers at sunset, windsurfers arcing over crystalline water, and a resort island that shut itself down for 6 months to come back cleaner.
            </p>
          </blockquote>

          {/* ── WHAT BORACAY ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏖️ What Boracay Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Boracay is a 10-kilometre island in the Western Visayas region of the Philippines, home to White Beach — a 4km arc of white sand so fine it stays cool under your feet at midday and squeaks when you walk on it. For decades it was ranked the world&apos;s best beach by multiple travel publications. In 2018 President Duterte ordered it closed for six months of environmental rehabilitation: illegal sewage pipes discharging directly onto the reef, unlicensed beachfront construction, and over-development that the island&apos;s infrastructure could not handle.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The closure worked. The water is measurably cleaner, wastewater treatment was rebuilt, illegal structures were removed, and 1.5 metres of beach were added back by natural sand accretion once the drainage stopped. The Boracay you visit today is the best version of the island in 20 years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The island divides into three informal zones: Station 1 (north, calmest water, luxury resorts), Station 2 (centre, D&apos;Mall, busiest, most restaurants and boats), and Station 3 (south, budget, lively nightlife). All three share the same sand. Bulabog Beach on the eastern side is the kitesurfing and windsurfing hub. Puka Shell Beach at the northern tip is free, uncrowded, and different in character from White Beach entirely.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Manila" value="1 hr flight" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–May" />
              <StatCard icon="🏖️" label="White Beach" value="4 km" />
              <StatCard icon="💰" label="Budget From" value="$70/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Boracay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–May",
                  i: "☀️",
                  t: "Amihan Season — Best Time",
                  d: "The northeast monsoon (Amihan) brings dry, clear weather with consistent 15–25 knot side-shore winds — ideal for White Beach and for kitesurfing at Bulabog. Water is calm on the White Beach side, visibility is excellent for snorkeling and diving. November and December are particularly uncrowded before the Christmas peak.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Dec–Jan",
                  i: "🎄",
                  t: "Peak Season — Book Ahead",
                  d: "Christmas through New Year and Holy Week (March–April) are the busiest periods. Flights sell out weeks ahead, hotels charge 2–3x, and White Beach is packed. The weather is excellent — same Amihan conditions — but the crowds are intense. Book everything at least 8 weeks ahead. If you want great weather without peak crowds, aim for November or May.",
                  b: "Book early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Oct",
                  i: "🌧️",
                  t: "Habagat Season — Avoid",
                  d: "The southwest monsoon (Habagat) brings heavy rain, grey skies, and rough water on the White Beach side. Swimming and island-hopping boats are frequently unsafe. The kite crowd migrates to Bulabog which receives the Habagat onshore wind — but for a classic White Beach holiday this season is genuinely disappointing. Typhoon risk exists from June to October.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "May",
                  i: "🌺",
                  t: "Late Amihan — Sweet Spot",
                  d: "May is the final month of the dry Amihan season: crowds thin out from peak, prices drop from January levels, but the weather remains mostly clear and the water is still calm. The transition to Habagat happens gradually — you might get 3 out of 4 days perfect. Good compromise for travellers with flexible dates.",
                  b: "Good value",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Boracay</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> There are two airports that serve Boracay — <strong className="font-medium">Caticlan (MPH)</strong>, a 5-minute tricycle ride from the ferry jetty (preferred), and <strong className="font-medium">Kalibo (KLO)</strong>, 2 hours away by shuttle but with more budget flight options. The ferry crossing from Caticlan to Boracay takes 15 minutes. All visitors pay a <strong className="font-medium">₱300 tourist tax</strong> at the Caticlan jetty (₱150 Environmental Fee + ₱100 terminal fee + ₱50 boat fee) — keep your receipts.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly Manila (MNL) → Caticlan (MPH) — Recommended",
                  d: "Multiple daily flights from Manila Ninoy Aquino on Cebu Pacific, Philippine Airlines, and AirAsia. Flight time: 1 hour. From Caticlan airport, a tricycle (₱30–50) takes you to the jetty in 5 minutes. Pay the ₱150 Environmental Fee and ₱100 terminal fee at the counter, then board the public ferry (₱30, 15 min) to Boracay&apos;s Cagban pier. Total time airport to hotel: 40–50 minutes.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly Cebu (CEB) → Caticlan (MPH)",
                  d: "45-minute flight from Mactan-Cebu International Airport. Good option if combining Boracay with Cebu or the Visayas. Same ferry transfer as above. Cebu Pacific and Philippine Airlines both operate this route.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Kalibo (KLO) — Budget Alternative",
                  d: "Kalibo airport is 2 hours from Caticlan by shuttle bus (₱250, operated by multiple companies, buses meet flights). More budget airline options and lower fares than MPH — but factor in the extra 2-hour drive. On-time flights become a concern: a delayed flight plus traffic to the jetty can mean missing the last ferry in the evening.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🇮🇳",
                  t: "From India (Mumbai / Delhi / Bengaluru)",
                  d: "No direct flights to Boracay from India. Standard routing: fly to Manila (MNL) on Air India, IndiGo codeshare, or Philippine Airlines — typically 3.5 to 4.5 hours from Mumbai or Delhi. Connect in Manila to a domestic Cebu Pacific or Philippine Airlines flight to Caticlan (MPH). Total travel time from India: 8–12 hours with the connection. Book domestic legs separately or as a through itinerary via Philippine Airlines.",
                  b: "Via Manila",
                  c: "bg-amber-50 border-amber-200",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Boracay Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Costs shown in PHP and USD. The itinerary is built for the Amihan season (November–May) — adjust watersports plans if visiting in transition months.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive · White Beach First Sunset · Station 2 Dinner"
                cost="₱2,800–4,000 (~$50–70)"
                items={[
                  "Fly into Caticlan (MPH) — tricycle to the jetty (₱30–50, 5 min). Pay the ₱150 Environmental Fee and ₱100 terminal fee at the counter. Board the public ferry to Boracay&apos;s Cagban jetty (₱30, 15 min). Tricycle from Cagban to your accommodation (₱50–100).",
                  "Check in to your accommodation: Station 3 for budget guesthouses ($20–40/night), Station 2 for mid-range hotels ($80–180/night), or Station 1 for luxury resorts ($180–400/night). Station 3 has the same sand as Station 1 at significantly lower prices across all categories.",
                  "Afternoon — Walk White Beach from Station 3 north to Station 1: 4km total, all on the same continuous white sand beach. The sand is uniquely fine — powdery, cool underfoot even in the afternoon, and stays white whether wet or dry. The Amihan wind creates gentle side-shore chop ideal for swimming in the Station 1 area.",
                  "4:30pm — Rent a beachfront lounger (₱100–200 for the afternoon). Watch the afternoon windsurfers and paraw outrigger sailboats on the bay. The Amihan produces 15–25 knot side-shore winds that make the bay consistently active from November to May.",
                  "5:30pm — Boracay sunset. White Beach faces due west over the flat Sibuyan Sea horizon. The combination of westerly orientation, humid tropical air refracting the light, and the silhouettes of the paraw outriggers produces sunsets of extreme colour intensity — deep orange, red, and purple that last 25–30 minutes. Every evening is different. Every evening is extraordinary.",
                  "7:30pm — Dinner at a Station 2 or Station 3 beachfront restaurant: grilled bangus (milkfish, ₱180–250), adobo chicken (₱160–200), garlic rice (₱60), and San Miguel beer (₱80). Full meal budget: ₱400–550 (~$7–10). D&apos;Mall area has the largest concentration of restaurants spanning all cuisines and price points.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Island Hopping · Crystal Cove · Magic Island Cliff Jumping · D&apos;Mall"
                cost="₱1,700–3,500 (~$30–63)"
                items={[
                  "8:00am — Join an island hopping boat tour (shared outrigger, ₱600–800/person including snorkeling gear). Standard route: Crystal Cove Island (coral reef snorkeling, ₱1,500 island entry fee separate from the boat), Magic Island (cliff jumping from 3 platforms: 3m, 5m, and 8m — one of Southeast Asia&apos;s most exhilarating free activities), Bat Cave (large fruit bat colony visible at the cave entrance), and a floating restaurant lunch stop.",
                  "10:30am — Crystal Cove: a small offshore island with a coral reef on its western side. The reef shows recovery since the 2018 rehabilitation — colourful fish, some coral regrowth, and reasonable visibility at 9–11am. Snorkeling is best in morning light before the tour crowds arrive.",
                  "12:00pm — Magic Island cliff jumping. The 5-metre platform is manageable for most adults. The 8-metre platform requires full commitment — look straight ahead, not down, and jump straight. The water is clear and 10 metres deep. Local teenagers who have done it 300 times will cheer you loudly from every platform. Jump.",
                  "2:00pm — Alternative: Ariel&apos;s Point full day trip (₱2,500–3,000/person, departs D&apos;Mall pier 11am, returns 6pm, includes meals and unlimited San Miguel beer). Five cliff diving levels from 3 to 15 metres, kayaking, paddle boards, and a full Filipino lunch on a private island. Good value, lively crowd, complete Boracay adventure day.",
                  "5:00pm — Return to White Beach. Shower and head to D&apos;Mall for the evening browse. D&apos;Mall (Station 2) is an open-air complex: restaurants from Filipino to Korean BBQ, souvenir shops, spas (₱500–800 for a 1-hour traditional hilot massage), and enough activity to fill 2 hours comfortably.",
                  "7:30pm — Dinner options: Lemoni Cafe (pasta and Filipino fusion, ₱350–500/person), Korean BBQ near D&apos;Mall (₱500–700/person unlimited), or budget street food along Balabag Road: isaw (grilled chicken intestines, ₱20), kwek-kwek (quail eggs in orange batter, ₱15), and balut (fertilised duck egg, ₱25).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Bulabog Kitesurfing · Puka Shell Beach · Paraw Sunset Sail"
                cost="₱2,200–5,000 (~$40–90)"
                items={[
                  "9:00am — Walk 15 minutes inland from White Beach to Bulabog Beach on the island&apos;s eastern side. Bulabog is the watersports beach: the Amihan blows directly onshore here, making it one of Asia&apos;s premier kitesurfing and windsurfing locations. Learn-to-kitesurf lesson: ₱4,500–6,500 ($80–120/person, 3-hour IKO certified lesson with equipment). The Amihan season (Nov–May) produces textbook learning conditions.",
                  "11:00am — Helmet diving at Crocodile Island (a distinct island-hopping add-on, ₱1,000–1,500/person): walk on the seabed 3–5 metres down in a standard diving helmet, no certification required. Crocodile Island has one of the better coral reefs in the Boracay area with visible reef fish, parrotfish, and occasional reef sharks in the deeper water.",
                  "1:00pm — Tricycle north (₱50–80) to Puka Shell Beach, Boracay&apos;s northern tip (20 minutes from D&apos;Mall). Puka Shell is free, uncrowded, and backed by palm trees rather than resort buildings. The sand is slightly coarser than White Beach but the beach is longer, wilder in character, and rarely crowded even in peak season. Small stalls sell fresh puka shell jewellery (the beach&apos;s namesake shells, ₱50–200) and fresh buko (coconut water, ₱60).",
                  "3:30pm — Diniwid Beach: a small cove immediately north of Station 1, accessible by a 5-minute walk along the rocky beachfront path. Only a handful of small guesthouses and a beach bar. At 3:30pm it is often nearly empty — good for a quiet swim before sunset.",
                  "5:00pm — Paraw sailing sunset: book a paraw outrigger sunset trip (₱800–1,200/person, 1.5 hours, boats depart Station 2 beach around 5pm). Book by 3pm on busy days — the best boats sell out. The paraw is the traditional Philippine outrigger; seeing Boracay from the water at sunset, the White Beach glowing behind you, is the definitive island experience.",
                  "8:00pm — Fire dancing shows on White Beach: free to watch from the beach, several Station 2 bars host nightly performances. Philippine fire dancers perform poi and staff spinning — the skill level is genuinely impressive. Watch with a San Miguel from a beachside table.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sunrise · Willy&apos;s Rock · Jonah&apos;s Shakes · Departure"
                cost="₱1,500–3,000 (~$27–54)"
                items={[
                  "5:30am — Sunrise at White Beach: at this hour, the beach has perhaps 30 people on it — joggers, resort staff setting up loungers, a few fishermen returning boats to shore. The sand is still cool, the water glassy before the Amihan builds. The contrast with 11am — 10,000 people, vendors, jet skis, music — is so extreme it feels like a different beach. Set the alarm.",
                  "6:30am — Walk north to Willy&apos;s Rock: a small volcanic rock formation 50 metres offshore at the northern end of Station 1, accessible by wading at low tide. A small Catholic shrine with a Virgin Mary statue sits on top. The rock formation, the shrine, the white sand, and the early morning light create one of Boracay&apos;s most photographed compositions. At 6:30am you often have it to yourself.",
                  "8:00am — Jonah&apos;s Fruit Shake Bar at Station 2 beachfront: a Boracay institution since the 1980s. The best fresh fruit shakes on the island — mango, papaya, passion fruit, or mixed combinations (₱100–150 large). Breakfast here watching the beach vendors set up is the ideal last Boracay morning.",
                  "10:00am — Optional: ATV ride through the island&apos;s interior (₱800–1,500/person for 30–60 min, departing from Station 1 area). The ATV tracks through inland palm groves and farm roads show a completely different side of Boracay beyond the beach strip.",
                  "12:00pm — Final lunch: Smoke Restaurant near D&apos;Mall for grilled seafood and Filipino classics. Order kare-kare (oxtail peanut stew, ₱350–450), grilled squid (₱280), and halo-halo (Filipino shaved ice with sweetened beans, jellies, and ube ice cream, ₱180) for a complete final Filipino meal.",
                  "2:00pm — Checkout and tricycle to Cagban jetty. Ferry to Caticlan (15 min). Tricycle to airport (5 min). Boracay departures connect back to Manila (1 hr) or Cebu (45 min) for international connections.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Boracay" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Boracay Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Every beach and activity spot on the island has a different character. Here is what to know about each one before you plan your time.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "White Beach — Station 1 (North)",
                  e: "Free · Calm water",
                  d: "The calmest, shallowest water on White Beach. Best for families, non-swimmers, and anyone wanting to wade in flat water. Most upscale resort frontage. Willy&apos;s Rock is at the northern end. Quieter atmosphere than Stations 2 and 3. The paraw sailboats launch from here.",
                  t: "Best for: families, couples, luxury · Quietest",
                },
                {
                  n: "White Beach — Station 2 (Centre, D&apos;Mall)",
                  e: "Free · All activities",
                  d: "The hub of Boracay: most restaurants, boat tour departures, massage vendors, beach bars, and the fire dancing shows. D&apos;Mall shopping complex is directly behind the beach. The busiest section but also the most convenient. All price ranges. The paraw sunset tours depart from here.",
                  t: "Best for: everything · Most convenient",
                },
                {
                  n: "White Beach — Station 3 (South)",
                  e: "Free · Livelier atmosphere",
                  d: "The budget and nightlife end of White Beach. Same sand, same sunset, cheaper food and accommodation. More local Filipino atmosphere. Better for solo travellers and backpackers. Livelier party scene after 10pm. Gets slightly more swell than Station 1 on windy days — check flags before swimming.",
                  t: "Best for: budget travellers, nightlife · Cheapest",
                },
                {
                  n: "Bulabog Beach (East Side)",
                  e: "Free · Watersports hub",
                  d: "The island&apos;s eastern beach faces into the Amihan wind — this is where kitesurf and windsurf schools operate November to May. The beach itself is narrower and rockier than White Beach but the energy is completely different: athletic, focused, competitive. Not ideal for casual swimming but essential for anyone interested in watersports.",
                  t: "Best for: kitesurfing, windsurfing · Nov–May",
                },
                {
                  n: "Puka Shell Beach (North Tip)",
                  e: "Free · Uncrowded",
                  d: "20 minutes north of D&apos;Mall by tricycle (₱50–80). Longer, wider, and significantly less crowded than White Beach. Backed by palm trees, not resort buildings. The sand is slightly coarser (hence the naturally occurring puka shells it&apos;s named for). No admission fee, small food stalls, completely different atmosphere. One of the best beach alternatives on the island.",
                  t: "Best for: escape from crowds · Free · Uncrowded",
                },
                {
                  n: "Crystal Cove Island",
                  e: "₱1,500/person (island entry)",
                  d: "A small offshore island accessed on the standard island hopping boat tour. The ₱1,500 entry fee covers beach access and the island&apos;s facilities including two small caves accessible at low tide. The coral reef on the western side has colourful reef fish and recovering coral after bleaching events. Best snorkeled 9–11am before tour boat activity disturbs visibility.",
                  t: "Island hopping stop · 2 hrs",
                },
                {
                  n: "Magic Island (Cliff Jumping)",
                  e: "Included in island hopping tour",
                  d: "Three platforms at 3m, 5m, and 8m above clear, deep water — one of Southeast Asia&apos;s most accessible adventure activities. The 5m jump is manageable for most adults. The 8m requires commitment. Water is clear and deep; jump straight. Accessed by island hopping boat from White Beach.",
                  t: "Adventure · 1 hr",
                },
                {
                  n: "D&apos;Mall (Station 2 Hub)",
                  e: "Free to enter",
                  d: "The open-air commercial centre of Boracay at Station 2: restaurants covering Filipino, Korean, Mediterranean, and international cuisines; souvenir shops; spa and massage (₱500–800/hour); boat tour booking desks; and ATMs. Most island hopping tours depart from the pier behind D&apos;Mall. Essential for shopping, booking, and evening dining.",
                  t: "Shopping & dining hub · Evenings",
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
            title="Boracay — White Beach, Sunsets &amp; Island Life"
            subtitle="The Philippines&apos; most photographed island, from sunrise to paraw silhouettes."
            spots={[
              {
                name: "White Beach Sunset Boracay",
                query: "boracay white beach philippines sunset orange sky paraw",
                desc: "The Boracay sunset from White Beach — westerly facing, flat horizon over the Sibuyan Sea, and paraw outrigger silhouettes.",
              },
              {
                name: "Paraw Outrigger Sailboat",
                query: "paraw sailboat boracay philippines sunset silhouette outrigger",
                desc: "A traditional Philippine paraw outrigger at sunset — the defining image of Boracay and a must-do activity.",
              },
              {
                name: "Puka Shell Beach",
                query: "puka shell beach boracay philippines north uncrowded palm trees",
                desc: "Puka Shell Beach at the northern tip — free, uncrowded, backed by palms, and completely different from White Beach.",
              },
              {
                name: "Kitesurfing Bulabog Beach",
                query: "kitesurfing bulabog beach boracay philippines amihan wind",
                desc: "Bulabog Beach during Amihan season — ranked among the world&apos;s best kitesurfing venues for its consistent side-shore wind.",
              },
              {
                name: "Willy&apos;s Rock Boracay",
                query: "willy rock boracay philippines white beach station 1 shrine",
                desc: "Willy&apos;s Rock at sunrise — a volcanic formation with a Catholic shrine, one of Boracay&apos;s most photographed spots.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Boracay can be done well on $70/day or spent at $1,500/day at Shangri-La. The main cost drivers are accommodation and activities — food and transport are inexpensive regardless of budget level.
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
                    ["🏨 Accommodation", "₱1,100–2,200 ($20–40)", "₱4,400–9,900 ($80–180)", "₱16,500–49,500 ($300–900)"],
                    ["🍽️ Food & Drinks", "₱825–1,375 ($15–25)", "₱1,650–3,300 ($30–60)", "₱4,400–11,000 ($80–200)"],
                    ["🛺 Transport", "₱275–550 ($5–10)", "₱825–1,650 ($15–30)", "₱1,650–5,500 ($30–100)"],
                    ["🏄 Activities", "₱1,100–1,925 ($20–35)", "₱2,200–4,400 ($40–80)", "₱5,500–16,500 ($100–300)"],
                    ["TOTAL/day", "₱3,300–6,050 ($60–110)", "₱9,075–19,250 ($165–350)", "₱28,050–82,500 ($510–1,500)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–110/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Station 3 guesthouses, local Filipino restaurants, shared boat tours, and public transport. Very comfortable and still gets the full Boracay experience.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($165–350/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Station 1 or 2 hotel, sit-down restaurants, private snorkeling and island-hopping charters, paraw sunset sail. The sweet spot for comfort and value.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($510–1,500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Shangri-La or Discovery Shores, private yacht charters, personal kitesurf instructors, spa days, and fine dining. The Philippines&apos; best resort experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Boracay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation breaks down clearly by station. Station 1 is luxury and calm; Station 2 is convenient; Station 3 is budget and lively. Bulabog is where the kitesurf crowd stays.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Station 1 — Shangri-La Boracay",
                  type: "Luxury · Private beach cove north of Station 1",
                  price: "From $350–900/night",
                  badge: "Most luxurious",
                  desc: "Occupies its own secluded bay north of the main White Beach strip. Private beach, multiple pools, overwater dining, spa. One of Southeast Asia&apos;s best beach resorts. Completely separated from the White Beach crowd — almost another island experience within Boracay.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Station 1 — Discovery Shores Boracay",
                  type: "Boutique luxury · Station 1 beachfront",
                  price: "From $300–700/night",
                  badge: "Best boutique",
                  desc: "Boutique luxury property directly on Station 1 beach. Recognised as one of the top beach resorts in Asia. The calm Station 1 water, attentive service, and Indigo restaurant make this the preferred choice for couples and honeymooners who want luxury with beach access.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Frendz Resort Station 2",
                  type: "Mid-range · Station 2, steps from D&apos;Mall",
                  price: "From $60/night",
                  badge: "Best location value",
                  desc: "Well-located mid-range resort steps from D&apos;Mall and the main White Beach strip. Clean, comfortable rooms with pool access. The ideal base for first-time visitors who want to be central to all restaurants, boat tours, and beach activities without paying Station 1 luxury rates. The most convenient mid-range option on the island.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Station 3 — Budget Guesthouses",
                  type: "Budget · Local atmosphere",
                  price: "$20–50/night",
                  badge: "Best budget",
                  desc: "Station 3 has the island&apos;s best value accommodation — small guesthouses and family-run hotels with direct beach access at a fraction of Station 1 prices. The same sand, the same sunsets, lower prices on everything. Best for solo travellers, backpackers, and budget-conscious visitors who want the White Beach experience without the luxury markup.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Bulabog Beach — Windsurf / Kite Schools",
                  type: "Budget-mid · Watersports hub",
                  price: "$30–120/night",
                  badge: "Watersports base",
                  desc: "Habagat Kite Center and Amihan Kiteboarding both have accommodation attached to their schools on Bulabog Beach. Staying here puts you steps from the kite school launch area. The beach is less pretty than White Beach but the access to the kite community and the school is unbeatable for anyone whose primary goal is learning to kitesurf.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Boracay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Boracay&apos;s food scene ranges from ₱20 street food to ₱3,000/person fine dining beachfront. The Filipino classics — fresh seafood BBQ, halo-halo, kare-kare — are the best value and the most authentic experiences on the island.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Talipapa Market (Cafe Talipapa) — Fresh Seafood BBQ",
                  t: "Local market · Station 2 / D&apos;Mall area",
                  d: "The best value seafood experience in Boracay. Buy fresh fish, prawns, squid, and shellfish by weight from the market stalls (₱200–600/kg depending on species), then take it to one of the attached grill restaurants to cook for a ₱50–100 cooking fee. The seafood is fresh from that morning&apos;s catch. This is how locals and long-stay travellers eat.",
                  b: "Best value seafood",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Jonah&apos;s Fruit Shake Bar",
                  t: "Beach institution · Station 2 beachfront",
                  d: "A Boracay institution since the 1980s — fresh-blended fruit shakes at beachfront prices. Mango, papaya, passion fruit, or a mixed combination (₱100–150 large). The best breakfast location on the island: watch the vendors set up from a plastic chair while the Amihan starts building and the beach is still half empty. Not to be missed.",
                  b: "Must visit",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Halo-Halo (all over D&apos;Mall)",
                  t: "Filipino dessert · Everywhere",
                  d: "Halo-halo is the Philippines&apos; definitive dessert: shaved ice layered with sweetened red beans, jellies, banana, jackfruit, leche flan, and a scoop of ube (purple yam) ice cream, finished with evaporated milk. Every restaurant on Boracay serves it (₱150–200). Best versions: Chowking (fast food, consistent, ₱150) and the sit-down restaurants along D&apos;Mall.",
                  b: "Try once minimum",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Lemoni Cafe",
                  t: "Filipino fusion · Station 1",
                  d: "The most consistently well-reviewed mid-range restaurant in Boracay: Filipino-influenced pasta, grilled seafood, and local fusion dishes in an open-air garden setting. ₱350–700/person. Known for fresh ingredients and attentive service. Good for a proper sit-down dinner that isn&apos;t a beach BBQ.",
                  b: "Best mid-range dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Dos Mestizos",
                  t: "Spanish-Filipino cuisine · Station 1 area",
                  d: "One of Boracay&apos;s most enduring quality restaurants — Spanish and Filipino flavours in a Mediterranean terrace setting. Paella for two (₱950–1,200), garlic butter prawns (₱650), and a proper wine list. Not cheap by Boracay standards but consistently well-reviewed for both food quality and attentive service. ₱600–1,200/person. The go-to for a proper sit-down dinner beyond the beach BBQ circuit.",
                  b: "Best Spanish-Filipino",
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
            destination="Boracay Philippines"
            hotels={[
              {
                name: "Shangri-La Boracay",
                type: "Luxury · Private beach cove north of Station 1",
                price: "From $350/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/ph/shangri-la-boracay.html?aid=2820480",
              },
              {
                name: "Discovery Shores Boracay",
                type: "Boutique luxury · Station 1 beachfront",
                price: "From $300/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/ph/discovery-shores-boracay.html?aid=2820480",
              },
              {
                name: "The Lind Boracay",
                type: "Mid-range luxury · Station 1",
                price: "From $180/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/ph/the-lind-boracay.html?aid=2820480",
              },
              {
                name: "Frendz Resort Station 2",
                type: "Mid-range · Station 2, D&apos;Mall area",
                price: "From $60/night",
                rating: "3",
                badge: "Best location value",
                url: "https://www.booking.com/hotel/ph/frendz-resort-boracay-station-2.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Boracay Island Hopping Tour",
                duration: "4 hrs",
                price: "From ₱600/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=boracay+island+hopping&partner_id=PSZA5UI",
              },
              {
                name: "Ariel&apos;s Point Cliff Diving Day Trip",
                duration: "Full day",
                price: "From ₱2,500/person",
                badge: "Most fun",
                url: "https://www.getyourguide.com/s/?q=ariels+point+boracay&partner_id=PSZA5UI",
              },
              {
                name: "Kitesurfing Beginner Lesson Bulabog",
                duration: "3 hrs",
                price: "From $80/person",
                badge: "Best activity",
                url: "https://www.getyourguide.com/s/?q=boracay+kitesurfing+lesson&partner_id=PSZA5UI",
              },
              {
                name: "Paraw Sunset Sailing Tour",
                duration: "1.5 hrs",
                price: "From ₱800/person",
                url: "https://www.getyourguide.com/s/?q=boracay+paraw+sailing&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Boracay</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📅",
                  title: "Paying the Tourist Tax Without Knowing What It Is",
                  desc: "The ₱150 Environmental Fee is legitimate and mandatory — paid at the Caticlan jetty counter before boarding the ferry. Keep the receipt; accommodation may check for it. Separately, a ₱100 terminal fee is charged at the jetty. These are official government fees, not scams. However, unofficial &apos;environmental fee&apos; collections elsewhere are not legitimate. Pay only at the official counter at Caticlan jetty, and only in the amounts stated on the official sign.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏖️",
                  title: "Visiting During High Season Without Booking Ahead",
                  desc: "Boracay during Christmas (December 23–January 2) and Holy Week (March–April) is genuinely overcrowded. The beach at noon has 10,000+ people on it, flights are fully booked weeks in advance, accommodation prices double or triple, and Caticlan airport is chaotic. If you must visit at peak, book flights and hotels 8–12 weeks ahead. For first-time visitors, November or May gives identical weather with dramatically fewer crowds.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚢",
                  title: "Not Booking Your Return Flight from Caticlan Early",
                  desc: "Caticlan (MPH) airport has 4 gates and no jetways. Flights sell out during peak season faster than most travellers expect. Book your outbound flight from Caticlan at the same time you book your inbound — do not rely on availability when you decide to leave. If you get stranded, the alternative to a flight is a 12-hour bus from Caticlan to Manila via multiple ferry crossings. This happens to first-time visitors every peak season.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌊",
                  title: "Ignoring the Beach Safety Flag System",
                  desc: "White Beach&apos;s water is generally calm, but on strong Amihan days or during the Habagat-Amihan transition the surf at Stations 2 and 3 can produce dangerous rip currents. The flag system is enforced by the local coastguard: green = safe swimming, yellow = caution, red = no swimming. Red flags at Boracay are serious — the currents are genuinely dangerous and visitors have drowned ignoring them. Station 1 is consistently calmer than Station 3. Check the flags every time.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🛺",
                  title: "Not Using Grab for Tricycle Rides",
                  desc: "Tricycle drivers will quote 2–3x the going rate to obvious tourists. The standard fare for a short ride (Station 1 to D&apos;Mall, or D&apos;Mall to Cagban pier) is ₱30–50 per person on a shared tricycle, or ₱100–150 for a private charter. Always confirm price before getting in. Grab operates on Boracay with fixed rates — use the app to eliminate negotiation entirely. The app also shows you the standard rates so you know when you&apos;re being overcharged.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Boracay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "White Beach at 5:30am is a Different World",
                  desc: "At 5:30am, the beach has perhaps 30 people on it. The sand is still cool, the water glassy before the Amihan builds, and the light on the palms at golden hour is extraordinary. The contrast with the same beach at 11am — 10,000 people, vendors, jet skis, music — is so extreme it feels like a different place. Set an alarm for at least one sunrise during your stay.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛵",
                  title: "Book Your Paraw Sunset Sail Before 3pm",
                  desc: "Paraw outrigger sunset sailings depart between 5pm and 5:30pm and sell out on busy days. The best boats (larger, more stable, cushioned seating) are booked by 3pm in peak season. Walk to the Station 2 beachfront between 1pm and 2pm and book directly with a paraw operator. Cost: ₱800–1,200/person for 1.5 hours. Private charters for 2: ₱3,000–5,000. Do not miss this.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏊",
                  title: "Station 1 Has the Calmest Water for Swimming",
                  desc: "All three stations share the same sand but the water conditions differ. Station 1 (north) is the calmest, shallowest, and most suitable for swimming — gentle waves, no rips, water stays clear even on windy days. Station 3 (south) gets more swell and stronger current. Families with children and non-swimmers should stay in the Station 1 area.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🪁",
                  title: "Learn to Kitesurf Here — Amihan Wind is the Best in Asia",
                  desc: "Bulabog Beach during Amihan season (November–May) is ranked among the world&apos;s best learning venues for kitesurfing by IKO instructors. Consistent 15–20 knot side-shore wind, a flat lagoon, shallow water, and a high density of IKO-certified schools. A 9–12 hour course over 3 days costs $200–350. If you&apos;ve ever wanted to try kitesurfing, this is the place to start.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐚",
                  title: "Puka Shell Beach is Free and Uncrowded — Go",
                  desc: "Most Boracay tourists spend all four days on White Beach and never make it to Puka Shell Beach. It is 20 minutes north by tricycle (₱50–80), free to enter, longer than White Beach, backed by palm trees, and usually uncrowded even in peak season. Spend a half-day here. The contrast with White Beach&apos;s resort strip is striking and worth seeing.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📱",
                  title: "Get a Philippine SIM at Manila Airport",
                  desc: "Globe and Smart have counters at Manila Ninoy Aquino International Airport with tourist SIM cards (₱299–599 for 30 days, unlimited social media and 3–8GB data). Buy before boarding your Boracay connection — Caticlan airport has no SIM counter. On Boracay, Globe has the best coverage on the White Beach strip. A Philippine SIM also lets you use Grab for tricycle rides without negotiating.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Boracay" />

          {/* Combine With */}
          <CombineWith currentSlug="boracay-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do you get to Boracay from Manila?",
                  a: "Fly from Manila Ninoy Aquino International (MNL) to Caticlan Airport (MPH) — 1 hour, multiple daily flights on Cebu Pacific, Philippine Airlines, and AirAsia. From Caticlan airport, a tricycle takes you to the jetty in 5 minutes (₱30–50). Pay the ₱150 Environmental Fee and ₱100 terminal fee at the jetty counter, then board the public ferry to Boracay&apos;s Cagban pier (15 minutes, ₱30). Tricycle from Cagban to most hotels: ₱50–100. Total time from Caticlan airport to your hotel: 35–50 minutes.",
                },
                {
                  q: "Is Boracay crowded? Was the 2018 closure effective?",
                  a: "Boracay is the Philippines&apos; most visited island and yes, peak season (Christmas, Holy Week/Easter, and major Philippine public holidays) is extremely crowded. The 2018 6-month closure ordered to address severe environmental degradation — illegal sewage discharge, unlicensed beachfront construction, and 4 million annual visitors overwhelming the island&apos;s waste infrastructure — was genuinely effective. The beach is measurably cleaner, the water clearer, wastewater treatment was rebuilt, and illegal structures removed. The island today is better than pre-closure, though still busy in peak season. November and May are the best months: ideal weather with significantly reduced crowds.",
                },
                {
                  q: "Is Ariel&apos;s Point worth the price?",
                  a: "Yes, if you want a full social day with cliff diving, kayaking, and unlimited food and drinks. At ₱2,500–3,000/person the all-inclusive price covers the boat transfer, all activities, a full Filipino lunch, and unlimited San Miguel beer. The cliff platforms range from 3 to 15 metres and the crowd is international and lively. It is not a quiet, nature-focused experience — it is a party-adjacent social activity on a scenic private island. Most people who do it enjoy it; most people who dislike crowds do not.",
                },
                {
                  q: "What is the best area to stay in Boracay?",
                  a: "Station 1 (north): calmest water, most upscale resorts, quietest beach — best for families, couples, and those wanting calm swimming. Mid-range to luxury. Station 2 (D&apos;Mall area): most convenient for restaurants, shopping, and boat trips. All budgets. Station 3 (south): cheapest accommodation, best for budget travellers and nightlife, livelier party atmosphere. The sand is identical at all three stations — choose based on budget and how much peace vs. activity you want.",
                },
                {
                  q: "How do I get to Boracay from India?",
                  a: "There are no direct flights from India to Boracay. The standard route is: fly from Mumbai (BOM), Delhi (DEL), or Bengaluru (BLR) to Manila Ninoy Aquino (MNL) — typically 3.5 to 4.5 hours. Then connect domestically from Manila to Caticlan (MPH) — 1 hour. Book the domestic leg separately on Cebu Pacific or Philippine Airlines, or as a through itinerary via Philippine Airlines. Indian passport holders enter the Philippines visa-free for 30 days — no visa required. You must show a return or onward ticket at the Philippine immigration counter.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Boracay trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-boracay", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/boracay-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-boracay", label: "How to get there", icon: "✈️" },
                { href: "/blog/boracay-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="boracay-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Palawan in 4 Days — El Nido &amp; Coron", href: "/blog/palawan-4-days" },
                { label: "Bali in 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
                { label: "Phuket in 5 Days — Islands &amp; Old Town", href: "/blog/phuket-5-days" },
                { label: "Maldives in 5 Days — Overwater Villas", href: "/blog/maldives-5-days" },
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
