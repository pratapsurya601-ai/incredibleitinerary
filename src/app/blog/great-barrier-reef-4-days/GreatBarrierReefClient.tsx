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
const GBR_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Great Barrier Reef Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🪸",  label: "Reef & Attraction Guide" },
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
        className="h-full bg-teal-600 transition-all duration-100"
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
          href: `mailto:?subject=Great Barrier Reef 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Great Barrier Reef in 4 Days — outer reef, Daintree &amp; Cairns complete guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/great-barrier-reef-4-days"
        imageUrl="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80"
        description="Great Barrier Reef in 4 Days: outer reef snorkeling, Daintree Rainforest, intro scuba diving, and real A$ costs — complete Cairns travel guide."
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
          <span className="font-serif text-xl text-teal-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-teal-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function GreatBarrierReefClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GBR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Great Barrier Reef" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="great barrier reef coral snorkeling australia queensland"
            fallback="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1600&q=80"
            alt="Great Barrier Reef coral gardens with tropical fish snorkeling Queensland Australia"
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
              <span className="text-white/70">Great Barrier Reef 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">🇦🇺 Australia &amp; Pacific</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Great Barrier Reef in 4 Days:
                <em className="italic text-teal-300"> Snorkeling, Daintree &amp; Cairns</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px] leading-relaxed">
                The world&apos;s largest living structure, 2,300 kilometres of coral, 1,500 species of fish, and a rainforest that&apos;s been growing for 135 million years just behind the beach. The complete guide from Cairns.
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
              <span>🪸 Cairns, Queensland</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From A$100/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Great Barrier Reef stretches 2,300 kilometres along Queensland&apos;s coast — the largest living structure on earth, visible from space, and home to 1,500 species of fish, 4,000 types of mollusc, and coral formations that have been growing for 20,000 years.
            </p>
          </blockquote>

          {/* ── WHAT THE GREAT BARRIER REEF ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Great Barrier Reef Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Great Barrier Reef Marine Park covers 344,400 square kilometres — larger than Italy, and the only living structure on earth visible from space. It contains 2,900 individual reefs and 900 islands, hosting over 1,500 species of fish, 4,000 types of mollusc, six of the world&apos;s seven marine turtle species, 30 species of whale and dolphin, and more than 1,600 types of coral. It was declared a UNESCO World Heritage Site in 1981. There is nothing else on earth remotely like it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most visitors base themselves in <strong className="font-medium text-ink">Cairns (CNS)</strong>, the gateway city in Far North Queensland. The outer reef is 1.5–2 hours offshore by fast catamaran. The key distinction — one that determines whether your reef experience is transformative or merely pleasant — is the difference between the <strong className="font-medium text-ink">inner reef</strong> (Green Island, Fitzroy Island) and the <strong className="font-medium text-ink">outer reef</strong> (Moore Reef, Flynn Reef, Norman Reef, Milln Reef). The outer reef has visibility three times greater, coral formations twenty times taller, and fish populations ten times denser. Spend the extra A$40–60 and go to the outer reef.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days from Cairns gives you the outer reef at its most extraordinary, the ancient Daintree Rainforest where jungle meets the Coral Sea, the scenic Kuranda Railway through the rainforest canopy, and enough time to decide whether you want to dive into it literally or simply float above it in awe. The 135-million-year-old Daintree is not a side trip — it is equal billing with the reef.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Gateway Airport" value="CNS Cairns" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Oct" />
              <StatCard icon="🪸" label="Reef Species" value="1,500+ fish" />
              <StatCard icon="💰" label="Budget From" value="A$100/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Great Barrier Reef</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Oct",
                  i: "☀️",
                  t: "Dry Season — Best Conditions",
                  d: "Water visibility 15–30 metres, water temperature 22–26°C, no stinger risk, and the lowest rainfall of the year. July and August are peak season with the best conditions but highest prices. June and October are ideal shoulder months — excellent reef and rainforest conditions with fewer crowds.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May & Nov",
                  i: "🌅",
                  t: "Shoulder Season — Good Value",
                  d: "Transitional months with generally good conditions. May marks the end of stinger season — most operators still provide stinger suits. November can have early monsoonal showers. Good compromise between conditions, crowd levels, and price.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌧️",
                  t: "Wet Season — Stingers & Rain",
                  d: "High humidity, frequent afternoon downpours, and the peak of stinger season (box jellyfish and Irukandji present in coastal waters). Reef tours continue year-round — stinger suits are provided and mandatory. The Daintree is lush and green. Not recommended for first-timers.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Mar–Apr",
                  i: "⚠️",
                  t: "Late Wet — Cyclone Risk",
                  d: "March and April are in the tail of cyclone season. Reef tours can be cancelled at short notice due to rough seas. Stingers still present until May. Some years are completely fine; others have significant weather disruptions. Travel insurance is essential.",
                  b: "Check forecasts",
                  c: "bg-red-50 border-red-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cairns</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cairns International Airport (CNS) is the gateway to the Great Barrier Reef. It sits just 7 minutes from the city centre. Direct flights connect Cairns to all major Australian cities daily — no transit needed from Sydney, Melbourne, Brisbane, or Perth.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From Sydney (SYD) — Direct",
                  d: "Flight time: 3 hours. Multiple daily departures with Qantas, Jetstar, and Virgin Australia. Fares range from A$120–A$350 one-way depending on how far in advance you book. Sydney is the most common arrival point for international travellers connecting to Cairns.",
                  b: "3 hrs direct",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Melbourne (MEL) — Direct",
                  d: "Flight time: 3.5 hours. Qantas, Jetstar, and Virgin all operate this route daily. Fares from A$150–A$380. Melbourne to Cairns is one of Australia&apos;s busiest domestic routes — plenty of flight options at all times of day.",
                  b: "3.5 hrs direct",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Brisbane (BNE) — Direct",
                  d: "Flight time: 2.5 hours. The shortest domestic connection. Multiple flights daily on all major carriers. A$100–A$250 one-way. Ideal if you&apos;re combining a Gold Coast or Brisbane visit with the reef.",
                  b: "2.5 hrs direct",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "International Connections",
                  d: "Singapore Airlines, Air Asia, and Scoot operate seasonal direct international flights to Cairns (CNS) from Singapore, Tokyo, and other Asian hubs. Most international travellers connect through Sydney or Brisbane. Singapore to Cairns: 6.5 hours direct when operating.",
                  b: "Via SYD/BNE",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Great Barrier Reef Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary uses Cairns as a base for all four days — no need to move accommodation. Days 1 and 3 are the outer reef days; Day 2 covers the Daintree; Day 4 gives you rainforest highlands or a second reef dive.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Cairns Arrival · Esplanade · Reef Fleet Terminal Briefing"
                cost="A$65–90 total (hostel, Tjapukai, food)"
                items={[
                  "Check into your accommodation: Gilligan&apos;s Backpacker Hotel (A$30–55/night dorm) or Nomads Cairns (A$28–50/night) for budget travellers, or Pullman Cairns International (A$200–350/night) and Riley, a Crystalbrook Collection Resort (A$250–400/night) for mid-range and luxury. All are within 10 minutes of Reef Fleet Terminal.",
                  "10:00am — Walk the Cairns Esplanade: the 4km boardwalk along Trinity Inlet with views across the Coral Sea to the reef beyond. The Esplanade Lagoon is a free public swimming lagoon — the ocean itself is not swimmable here year-round due to marine stingers, so the lagoon is the locals&apos; solution.",
                  "12:00pm — Lunch at the Night Market food court (open from midday): A$8–15 for laksa, noodle boxes, grilled meats, or fresh tropical juice. Far better value than the restaurants along the strip.",
                  "2:00pm — Tjapukai Aboriginal Cultural Park (A$47): the most substantial introduction to First Nations culture in northern Queensland. Live dance performances, boomerang and spear-throwing demonstrations, Dreamtime story presentations, and bush tucker tasting. The cultural context enriches the entire Daintree and reef experience that follows.",
                  "5:00pm — Walk to Reef Fleet Terminal on Wharf Street and check your reef tour departure time for tomorrow. Most operators depart between 7:30am and 8:30am — check-in is 30 minutes before departure.",
                  "7:00pm — Night Market (5pm–11pm, free entry) for dinner: full plates of Thai, Chinese, Malaysian, or Australian food for A$8–12. The reef tanks near the entrance display live coral — a preview of tomorrow.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Outer Great Barrier Reef Full Day — Snorkeling &amp; Intro Dive"
                cost="A$220–280 total (outer reef tour incl. snorkel, wetsuit, lunch)"
                items={[
                  "7:00am — Reef-safe sunscreen (mandatory on most operators), seasickness tablets if you&apos;re prone, and a hat. The outer reef is 1.5–2 hours offshore — the crossing is on fast catamarans and can be choppy in winter trade winds.",
                  "Reef operator options: Sunlover Reef Cruises (A$220, Moore Reef, glass-bottom boat and semi-submersible included), Reef Magic Cruises (A$220–250, Marine World pontoon platform with underwater observatory), or Great Adventures (A$220–260, Green Island stop option). All include snorkeling gear, stinger suit, wetsuit, and buffet lunch. The A$220 bracket represents honest outer reef pricing — anything significantly cheaper is visiting inner reef sites.",
                  "10:00am — First snorkel at the outer reef. The outer reef is categorically different from the inner reef: visibility 15–30 metres, coral structures 2–8 metres high, and fish density that makes you feel like you have swum into an aquarium. Brain corals the size of small cars, Maori wrasse that approach and study you, turtles moving between coral heads at their own pace.",
                  "11:30am — Optional intro scuba dive (A$150–200 extra): a certified instructor accompanies you to 5–8 metres depth. No certification needed. The transition from snorkeling on the surface to breathing underwater and descending into the coral is one of the most genuinely profound experiences available in travel. The majority of first-time divers describe it as transformative.",
                  "1:00pm — Buffet lunch on the pontoon or vessel. The glass-bottom boat tour (usually A$10–15 extra) floats over reef sections where snorkeling is not permitted, giving a different perspective on the coral architecture below.",
                  "2:30pm — Second snorkel at a different reef site. Most operators move between 2–3 sites across the day — afternoon light changes the colour spectrum of the coral noticeably. If you rented an underwater camera (A$35–50), this is the session where you get the best footage.",
                  "5:30pm — Return to Cairns. Reef Fleet Terminal. Recovery dinner at an Esplanade restaurant — budget A$15–25 for a burger, barramundi, or pasta.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Daintree Rainforest · Cape Tribulation · Mossman Gorge"
                cost="A$120–200 total (tour or car hire, ferry, gorge shuttle, Daintree cruise)"
                items={[
                  "6:30am — Early departure. The Daintree is 1.5–2 hours north of Cairns. Budget option: day tour from Cairns (A$115–130 fully guided, transport included). Mid-range option: hire a car (A$55–70/day) and self-drive — the route is well-signposted once you reach the Daintree River. Premium option: private naturalist-guided tour (A$200+) with a guide who can identify birds by call and access private properties.",
                  "9:30am — Mossman Gorge: crystal-clear freshwater creek cutting through ancient rainforest boulders in Daintree National Park. Take the A$10 shuttle from the Mossman Gorge Centre (no private vehicles to the gorge head). Swimming in the cold creek pools is one of Queensland&apos;s genuinely great free experiences — cool, clear water in 135-million-year-old rainforest.",
                  "11:00am — Daintree River crocodile cruise (A$30, 1 hour). The Daintree River is one of the most accessible habitats for wild saltwater crocodiles in Australia. The 11am cruise reliably spots 2–5 crocodiles resting on mud banks — they are enormous, prehistoric, and completely indifferent to the boat.",
                  "12:30pm — Drive north across the Daintree River cable ferry (A$26 for a car, free for foot passengers) into the World Heritage rainforest. The Daintree is the world&apos;s oldest continuously surviving tropical rainforest — 135 million years old and older than the Amazon.",
                  "1:30pm — Cape Tribulation: the only place on earth where two UNESCO World Heritage sites meet — the Great Barrier Reef Marine Park and the Daintree Rainforest. The beach here looks directly onto the Coral Sea. Eat lunch at the Cape Trib Beach House café (A$12–18) with the jungle at your back and the reef in front.",
                  "3:30pm — Afternoon rainforest boardwalk: fan palms, strangler figs, and the distinctive Licuala fan palm that grows only in this region. Watch for Boyd&apos;s forest dragons (bright green lizards) on tree trunks. The light through the rainforest canopy in the afternoon is extraordinary.",
                  "Return to Cairns by 6:30–7:30pm. The Cairns Esplanade has a permanent colony of spectacled flying foxes (thousands of them) that emerge at sunset — free, spectacular.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Kuranda Scenic Railway · Atherton Tablelands · Departure"
                cost="A$50–400 depending on activity choice"
                items={[
                  "Option A — Kuranda Scenic Railway (A$50 one-way, A$86 return): Australia&apos;s most scenic railway journey, constructed in 1891 through the rainforest escarpment above Cairns. The 34km journey takes 1.5 hours, passing 15 tunnels and 37 bridges through dense tropical rainforest. Combine with the Skyrail Rainforest Cableway (A$60) for a different return route over the rainforest canopy.",
                  "Option B — Atherton Tablelands (free to A$20): Self-drive into the cool highlands 1 hour south of Cairns. Millaa Millaa Falls (the most photographed waterfall in Queensland, free), Lake Eacham (ancient volcanic crater lake, swimming allowed, free), Josephine Falls (natural rock waterslide, free), and Mungalli Creek Dairy (organic farm, cheese tasting, A$10). At dusk, the creek at Mt Hypipamee National Park is one of the most reliable wild platypus viewing spots in Queensland — arrive 30–45 minutes before sunset.",
                  "Option C — Second Outer Reef Dive (A$180–250 for certified divers): A two-tank morning dive with a local operator covers Flynn Reef, Milln Reef, or Norman Reef — each with distinct coral architecture. Equipment hire included. Non-certified divers can do a second intro dive (A$150–200 extra on a reef day tour).",
                  "Option D — Reef HQ Aquarium Townsville (if extending to Townsville): Australia&apos;s largest living coral reef aquarium — 2.5 million litres of water, the only place in the world with a live predator exhibit inside a living reef exhibit. A$32 entry. Better as a standalone day trip from Townsville (1.5 hours south of Cairns by road).",
                  "Afternoon — Pack and farewell Cairns. Shop for Daintree Chocolate (local cacao grown in the World Heritage Rainforest, A$10–15 a bar) at Rusty&apos;s Markets or specialty shops near the Esplanade. Cairns Airport (CNS) is 10 minutes from the city centre.",
                  "Evening departure or final night. Cairns to Sydney: 3 hours. Cairns to Melbourne: 3.5 hours. Cairns to Singapore: 6.5 hours direct.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Great Barrier Reef" onPlanTrip={() => setModalOpen(true)} />

          {/* ── REEF & ATTRACTION GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🪸 Reef &amp; Attraction Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Prices as of 2026. Outer reef tours are day-long departures from Reef Fleet Terminal, Cairns; island day trips are shorter crossings by ferry.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Outer Great Barrier Reef — Day Tour",
                  e: "A$220–260 (incl. snorkel gear, wetsuit, lunch)",
                  d: "Moore Reef, Flynn Reef, Milln Reef, and Norman Reef are the primary outer reef sites accessed from Cairns. Visibility 15–30 metres, coral heads 2–8 metres high, turtles, Maori wrasse, and reef sharks. Sunlover Reef Cruises, Reef Magic, and Great Adventures are the main operators. Book 2–4 weeks ahead in July–September.",
                  t: "Must do · Full day",
                },
                {
                  n: "Green Island Day Trip",
                  e: "A$116 return ferry (Great Adventures)",
                  d: "A coral cay 27km northeast of Cairns — the closest reef island accessible by a short ferry crossing (45 minutes). Beautiful but represents the inner reef: snorkeling is pleasant rather than extraordinary. Best for travellers who cannot manage the longer outer reef crossing, or as a second day&apos;s activity after the outer reef.",
                  t: "Inner reef · Half or full day",
                },
                {
                  n: "Fitzroy Island Day Trip",
                  e: "A$80–90 return ferry",
                  d: "A continental island 29km from Cairns with fringing coral reef directly off the beach. More rugged than Green Island — good for hiking (Summit Track, 2.5 hours return) and beach snorkeling. The snorkeling directly off the beach is accessible and good for beginners. Raging Thunder and Sunlover operate regular ferries.",
                  t: "Inner reef · Half day",
                },
                {
                  n: "Daintree Rainforest &amp; Cape Tribulation",
                  e: "A$115–200 (day tour from Cairns) or A$55–70 (car hire)",
                  d: "The world&apos;s oldest surviving tropical rainforest, 135 million years old. Cape Tribulation is where the Daintree meets the Great Barrier Reef — the only place on earth where two UNESCO World Heritage sites share a coastline. Mossman Gorge, the Daintree River, and Cape Trib beach are the key sites.",
                  t: "Must do · Full day",
                },
                {
                  n: "Kuranda Scenic Railway",
                  e: "A$50 one-way / A$86 return",
                  d: "The 1891 railway from Cairns to Kuranda through the rainforest escarpment — 34km, 1.5 hours, 15 tunnels, 37 bridges. The journey through the dense rainforest and across the Barron Falls gorge is genuinely spectacular. Combine with Skyrail Rainforest Cableway (A$60 one-way) over the rainforest canopy for a round trip.",
                  t: "Highly recommended · Half day",
                },
                {
                  n: "Spirit of Freedom Liveaboard",
                  e: "From A$1,100 (3-day / 2-night)",
                  d: "The benchmark liveaboard diving vessel on the Great Barrier Reef, operating to the Ribbon Reefs and Cod Hole in the remote northern section. Certified divers access sites inaccessible to day-trip vessels — Cod Hole (potato cod up to 1 metre long come to the divers), Challenger Bay, and the Ribbons. Mike Ball Dive Expeditions operates a similar premium itinerary to Osprey Reef and Coral Sea.",
                  t: "Certified divers · 3–7 days",
                },
                {
                  n: "Atherton Tablelands Waterfalls &amp; Platypus",
                  e: "Free to A$10",
                  d: "The cool volcanic highlands 1 hour south of Cairns: Millaa Millaa Falls (the most photographed waterfall in Queensland), Josephine Falls (natural waterslide), Lake Eacham (volcanic crater swimming lake), and the Mt Hypipamee creek at dusk for wild platypus viewing. Entirely self-driveable and largely free.",
                  t: "Day 4 option · Full day",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Great Barrier Reef — Coral, Cairns &amp; the Daintree"
            subtitle="The world&apos;s largest living structure and the ancient rainforest behind it."
            spots={[
              {
                name: "Outer Reef Snorkeling",
                query: "great barrier reef snorkeling coral fish australia queensland",
                desc: "The outer reef at Moore Reef or Flynn Reef — 15–30 metre visibility, coral heads taller than a person, and fish populations unlike anywhere else on earth.",
              },
              {
                name: "Cairns Esplanade",
                query: "cairns esplanade trinity inlet lagoon queensland australia",
                desc: "The Cairns Esplanade boardwalk along Trinity Inlet — the free public swimming lagoon and the gateway view of Far North Queensland.",
              },
              {
                name: "Cape Tribulation Beach",
                query: "cape tribulation beach daintree rainforest coral sea queensland",
                desc: "Cape Tribulation — where the Daintree Rainforest meets the Coral Sea, the only place on earth where two UNESCO World Heritage sites share a coastline.",
              },
              {
                name: "Daintree Rainforest",
                query: "daintree rainforest cape tribulation queensland ancient tropical",
                desc: "The Daintree — 135 million years old, older than the Amazon, and home to 30% of Australia&apos;s frog species in just 0.2% of the country&apos;s land area.",
              },
              {
                name: "Kuranda Scenic Railway",
                query: "kuranda scenic railway rainforest cairns queensland barron falls",
                desc: "The 1891 Kuranda railway threading through rainforest escarpment, 15 tunnels, and 37 bridges above the Barron Falls gorge.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Great Barrier Reef is not a cheap destination by global backpacker standards — the outer reef tour alone costs A$220. But the reef experience is worth the investment, and there is plenty of room to economise on accommodation, food, and secondary activities.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation / night", "A$28–55", "A$150–300", "A$400–1,500"],
                    ["🍽️ Food / day", "A$25–40", "A$50–80", "A$100–250"],
                    ["🚌 Local transport / day", "A$10–20", "A$20–40", "A$50–150"],
                    ["🪸 Outer reef tour (Day 2)", "A$220", "A$260", "A$500–800"],
                    ["🌿 Daintree tour (Day 3)", "A$115–130", "A$150–200", "A$200–300"],
                    ["🚂 Kuranda Railway (Day 4)", "A$50", "A$86 return", "A$86 + Skyrail"],
                    ["💰 Daily total", "A$100–170", "A$280–500", "A$700–2,500+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (A$100–170/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Gilligan&apos;s or Nomads (A$30–55/night dorm), eat at Night Market food courts (A$8–15/meal), and book the standard outer reef tour (A$220). Completely achievable — Cairns has excellent backpacker infrastructure.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (A$280–500/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Pullman Cairns or Crystalbrook Riley (A$200–350/night), dinners at Ochre or Dundee&apos;s (A$35–55/person), and a premium reef operator with marine biologist guide. This is the sweet spot for a genuinely comfortable reef trip.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (A$700–2,500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Silky Oaks Lodge in the Daintree (A$800–1,500/night), private reef charter (A$500–800/person), helicopter flight over the reef (A$400–650), and the Spirit of Freedom liveaboard (A$1,100+ for 3 days).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cairns</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cairns is a compact city. The best locations are within walking distance of Reef Fleet Terminal (Wharf Street), the Esplanade, and the Night Market. Staying central saves time every morning when reef tours depart at 7:30–8:30am.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Pullman Cairns International",
                  type: "5-star hotel · City centre, Esplanade",
                  price: "From A$200/night",
                  badge: "Best mid-range",
                  desc: "The benchmark mid-range hotel in Cairns — well-located on the Esplanade, rooftop pool, consistently reliable service. Walking distance to Reef Fleet Terminal and the Night Market. A$200–350/night depending on season. Book via Booking.com with flexible cancellation.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Riley, a Crystalbrook Collection Resort",
                  type: "5-star resort · Wharf Street, Cairns",
                  price: "From A$250/night",
                  badge: "Best luxury",
                  desc: "Cairns&apos; most design-forward hotel — rooftop infinity pool with views over Trinity Inlet and the Coral Sea beyond. Pet-friendly, solar-powered, sustainably operated. The 74-metre lagoon pool is the best hotel pool in the city. A$250–400/night. Outstanding reef trip first impression.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Gilligan&apos;s Hostel Cairns",
                  type: "Hostel · Grafton Street, Cairns CBD",
                  price: "From A$30/night (dorm)",
                  badge: "Best budget",
                  desc: "The most well-known backpacker hostel in Cairns — 750-bed property with a pool, onsite bar and restaurant, reef tour booking desk, and laundry. Legendary on the Australian backpacker circuit. Dorms from A$30, private rooms from A$90. The reef booking desk often has access to same-week tour spots when online operators are sold out.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Silky Oaks Lodge (Daintree)",
                  type: "Luxury eco-lodge · Mossman River, Daintree",
                  price: "From A$800/night",
                  badge: "Most unique",
                  desc: "Treehouse rooms 8 metres above the Mossman River in the ancient Daintree Rainforest. The lodge&apos;s naturalist guides have exclusive access to forest paths not open to the public. Heliconia Restaurant serves a degustation menu built around foraged rainforest ingredients (A$150–200/person). The benchmark luxury lodge for Far North Queensland.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cairns</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cairns punches well above its size for food. The signature ingredients of Far North Queensland — barramundi, coral trout, mud crab, Coral Sea prawns, and tropical fruit — appear on menus across all price ranges. The Night Market food court is the budget benchmark.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ochre Restaurant",
                  t: "Contemporary Australian · Cairns Esplanade",
                  d: "Northern Queensland&apos;s most respected contemporary Australian restaurant. Bush tucker ingredients throughout: wattle seed, lemon myrtle, kangaroo fillet, barramundi, saltbush. The matched Queensland wine list is excellent. A$40–60/person for two courses. Reserve ahead for dinner — it fills completely on weekends.",
                  b: "Best restaurant",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dundee&apos;s on the Waterfront",
                  t: "Queensland seafood · Cairns harbour",
                  d: "Outdoor deck over the harbour inlet — the best dining position in the city. Queensland barramundi, mud crab, Coral Sea prawns, and crocodile dishes are the specialities. A$35–55/person for a full dinner. The mud crab when in season (A$45–65 per half) is the definitive local luxury.",
                  b: "Best seafood",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Night Market Food Court",
                  t: "International street food · Night Market, Cairns",
                  d: "The daily food market running 5pm–11pm on Abbott Street. Full plates of Thai, Chinese, Malaysian, Vietnamese, and Australian food for A$8–12. The most reliable budget dinner in Cairns — busy, noisy, excellent value. Also open for lunch. Free entry to the market itself.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Tamarind Restaurant (Crystalbrook Riley)",
                  t: "Contemporary Asian-Australian · Wharf Street",
                  d: "The hotel restaurant at Riley — contemporary Australian cuisine with a strong Asian influence. A$50–80/person for a full dinner. The rooftop positioning gives views over Trinity Inlet. Excellent cocktail program using local tropical fruits. Book ahead for dinner service.",
                  b: "Best hotel dining",
                  c: "bg-rose-50 border-rose-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-teal-700 px-2.5 py-1 rounded-full border border-teal-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Great Barrier Reef Cairns"
            hotels={[
              {
                name: "Pullman Cairns International",
                type: "5-star hotel · Esplanade, Cairns",
                price: "From A$200/night",
                rating: "5",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/au/pullman-cairns-international.html?aid=2820480",
              },
              {
                name: "Riley, a Crystalbrook Collection",
                type: "5-star resort · Wharf Street, Cairns",
                price: "From A$250/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/au/crystalbrook-riley-cairns.html?aid=2820480",
              },
              {
                name: "Gilligan&apos;s Hostel Cairns",
                type: "Hostel · Grafton Street, Cairns",
                price: "From A$30/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/au/gilligans-backpacker-hotel-cairns.html?aid=2820480",
              },
              {
                name: "Silky Oaks Lodge",
                type: "Luxury eco-lodge · Daintree Rainforest",
                price: "From A$800/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/au/silky-oaks-lodge-and-healing-waters-spa.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Outer Great Barrier Reef Full Day",
                duration: "Full day",
                price: "From A$220/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=great+barrier+reef+outer+reef+cairns&partner_id=PSZA5UI",
              },
              {
                name: "Daintree Rainforest Day Tour from Cairns",
                duration: "Full day",
                price: "From A$115/person",
                badge: "Highly recommended",
                url: "https://www.getyourguide.com/s/?q=daintree+rainforest+day+tour+cairns&partner_id=PSZA5UI",
              },
              {
                name: "Intro Scuba Dive on the Reef",
                duration: "3 hrs",
                price: "From A$150/person",
                badge: "Life-changing",
                url: "https://www.getyourguide.com/s/?q=great+barrier+reef+intro+scuba+dive+cairns&partner_id=PSZA5UI",
              },
              {
                name: "Kuranda Scenic Railway + Skyrail",
                duration: "Half day",
                price: "From A$86/person",
                url: "https://www.getyourguide.com/s/?q=kuranda+scenic+railway+cairns&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🪸",
                  title: "Not Booking Reef Tours in Advance",
                  desc: "The outer reef tours from Cairns sell out 2–4 weeks ahead during peak season (July–September). The most reputable operators — Sunlover, Reef Magic, Great Adventures — have fixed daily departures with limited capacity. Showing up at Reef Fleet Terminal hoping for a same-day ticket is a gamble that often fails. Book online as soon as your Cairns dates are confirmed.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🪼",
                  title: "Visiting Stinger Season Without Protection",
                  desc: "Box jellyfish and Irukandji jellyfish are present in Cairns coastal waters from October to May. Box jellyfish stings range from excruciatingly painful to potentially fatal; Irukandji stings cause delayed but severe systemic reactions requiring hospital treatment. All reputable reef tour operators provide full-length stinger suits as standard — wear one for every water activity. Do not swim in open beach water in stinger season without one.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌿",
                  title: "Skipping the Daintree Rainforest",
                  desc: "Most first-time visitors to Cairns fill every day with reef activities and never see the Daintree. This is a significant miss. The Daintree is 135 million years old — more ancient than the Amazon — and contains 30% of Australia&apos;s frog species, 65% of its bat species, and 18% of its bird species in just 0.2% of Australia&apos;s land area. It is not a side trip; it is equal billing with the reef.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🐠",
                  title: "Booking Inner Reef Instead of Outer Reef",
                  desc: "Budget constraints sometimes push travellers toward tours visiting inner reef sites — Green Island, Fitzroy Island, Michaelmas Cay. These are beautiful but incomparable to the outer reef. The outer reef has visibility three times greater, coral formations twenty times taller, and fish populations ten times denser. Spend the extra A$40–60 and go to the outer reef. It is the actual Great Barrier Reef experience.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Great Barrier Reef</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🤿",
                  title: "Do the Intro Scuba Dive — Even if You&apos;re Nervous",
                  desc: "Every major reef tour operator offers an introductory scuba dive for non-certified divers at A$150–200 extra. A certified instructor accompanies you throughout at 5–8 metres depth. Breathing underwater for the first time on the Great Barrier Reef is a genuinely life-altering experience that snorkeling cannot replicate — you descend into the reef rather than floating above it.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🦆",
                  title: "Wild Platypus at Dusk in the Atherton Tablelands",
                  desc: "The creek at the base of Mt Hypipamee National Park (Atherton Tablelands, 1 hour from Cairns) is one of the most reliable wild platypus viewing spots in Queensland. Arrive 30–45 minutes before sunset and sit quietly. Platypuses emerge to feed at dusk. No guide needed, free to enter. One of Australia&apos;s most underrated wildlife moments.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧥",
                  title: "Wear a Stinger Suit Regardless of Season",
                  desc: "Outside the October–May stinger season, jellyfish populations drop significantly — but they do not disappear entirely. All tours provide stinger suits at no extra charge. There is no downside to wearing one — they provide UV protection and are hydrodynamic. Put it on every time, every season.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Book Liveaboards for the Remote Reef",
                  desc: "Spirit of Freedom and Mike Ball Dive Expeditions operate liveaboard vessels to the Ribbon Reefs and Cod Hole — sections of the outer reef inaccessible to day trips. The Cod Hole has potato cod up to 1 metre long that come to certified divers. If you dive, the liveaboard experience is the Great Barrier Reef at its most undisturbed. Book 3–6 months ahead for peak season.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎫",
                  title: "Check the Great Barrier Reef Marine Park Authority Site",
                  desc: "The GBRMPA website (gbrmpa.gov.au) publishes real-time reef health monitoring and can direct you to the healthiest reef sections based on current conditions. Some reef zones are rotated through seasonal closures to allow recovery. Your tour operator should know the current conditions, but checking independently is worthwhile.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍫",
                  title: "Buy Daintree Chocolate Before You Leave",
                  desc: "The Daintree Rainforest is one of the only places in Australia where cacao is commercially grown. Daintree Chocolate makes single-origin bars from Daintree-grown cacao — A$10–15 per bar and genuinely extraordinary. Available at Rusty&apos;s Markets (Friday–Sunday, Grafton Street), specialty shops near the Esplanade, and at Cairns Airport.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Great Barrier Reef" />

          {/* Combine With */}
          <CombineWith currentSlug="great-barrier-reef-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit the Great Barrier Reef?",
                  a: "June to October is the optimal window — dry season, water visibility at its best (15–30 metres), water temperature 22–26°C, and no stinger risk. July and August are peak season with the best conditions but highest prices. May and November are shoulder months with good conditions and fewer crowds. Avoid December to April: stinger season, high rainfall, and occasional cyclone risk.",
                },
                {
                  q: "Do I need scuba certification to experience the reef?",
                  a: "No. Snorkeling gives excellent reef access and all major tour operators include gear at no extra charge — stinger suit, wetsuit, mask, fins. Introductory scuba dives (A$150–200 extra) are available to anyone in reasonable health with no certification needed — a certified instructor accompanies you throughout at 5–8 metres depth. If you want to dive independently, Open Water certification courses run 3–4 days in Cairns for A$350–600.",
                },
                {
                  q: "Has coral bleaching affected the reef — is it still worth visiting?",
                  a: "The reef has experienced significant bleaching events in 2016, 2017, 2020, 2022, and 2024. However, approximately 70% of the outer reef remains in healthy condition, and the sites accessed by major Cairns tour operators are consistently among the best-preserved sections. The Great Barrier Reef Marine Park Authority actively monitors reef health. It remains one of the most extraordinary natural environments on earth and the urgency of climate change makes visiting now — and understanding what is at stake — more important, not less.",
                },
                {
                  q: "Should I base myself in Cairns or Port Douglas?",
                  a: "Cairns for budget and mid-range travel. Port Douglas for luxury. Cairns has dramatically better transport connections, more hostel and mid-range hotel options, more operators, and the same outer reef access as Port Douglas. Port Douglas is quieter and more upscale, but costs A$50–80 more per person on reef tours because operators factor in the extra travel time north. The same outer reef sites are accessible from both.",
                },
                {
                  q: "How much should I budget per day in Cairns?",
                  a: "Budget travellers: A$100–170/day (hostel dorm A$30–55, meals A$25–40, outer reef tour A$220 amortised across 4 days). Mid-range: A$280–500/day with a 3–4 star hotel and premium reef experiences. Luxury: A$700–2,500+/day at Silky Oaks Lodge in the Daintree or qualia in the Whitsundays. The single biggest daily expense is always the reef tour — build that into your planning first.",
                },
                {
                  q: "What is stinger season and how dangerous is it?",
                  a: "Stinger season runs October through May, when box jellyfish and the near-invisible Irukandji jellyfish are present in Cairns coastal waters. Box jellyfish stings are excruciatingly painful and can cause cardiac arrest in severe cases; Irukandji stings cause delayed but severe systemic reactions requiring hospitalisation. All reputable tour operators provide full-length stinger suits — wearing one eliminates the risk. Never swim in open beach water in stinger season without one.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Great Barrier Reef trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/great-barrier-reef-snorkeling-guide", label: "Snorkeling guide", icon: "🤿" },
                { href: "/blog/cairns-budget-travel", label: "Cairns on a budget", icon: "💰" },
                { href: "/blog/daintree-rainforest-guide", label: "Daintree guide", icon: "🌿" },
                { href: "/blog/great-barrier-reef-dive-sites", label: "Best dive sites", icon: "🪸" },
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
          <RelatedGuides currentSlug="great-barrier-reef-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Australia &amp; Pacific Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sydney in 5 Days — Harbour &amp; Beaches", href: "/blog/sydney-5-days" },
                { label: "Melbourne in 4 Days — Culture &amp; Coffee", href: "/blog/melbourne-4-days" },
                { label: "Uluru in 3 Days — Red Centre Guide", href: "/blog/uluru-3-days" },
                { label: "Bali in 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
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
