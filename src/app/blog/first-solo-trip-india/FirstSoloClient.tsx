"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const SOLO_TOC = [
  { id: "why",          emoji: "✈️",  label: "Why Solo Travel in India" },
  { id: "destinations", emoji: "📍",  label: "Best First Destinations" },
  { id: "budget",       emoji: "💰",  label: "Budget Breakdown" },
  { id: "safety",       emoji: "🛡️",  label: "Safety (Honest)" },
  { id: "trains",       emoji: "🚂",  label: "Train Booking" },
  { id: "pack",         emoji: "🎒",  label: "What to Pack" },
  { id: "mistakes",     emoji: "💡",  label: "10 Things Nobody Tells You" },
  { id: "faq",          emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
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
          href: `mailto:?subject=First Solo Trip India Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=First Solo Trip in India guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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

// ── Destination Card ──────────────────────────────────────────────────────────
function DestCard({
  name,
  region,
  tag,
  tagColor,
  points,
  link,
}: {
  name: string;
  region: string;
  tag: string;
  tagColor: string;
  points: string[];
  link?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-5">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <p className="font-serif text-base text-ink font-normal">
            {link ? (
              <Link href={link} className="hover:text-gold transition-colors">
                {name}
              </Link>
            ) : (
              name
            )}
          </p>
          <p className="text-xs text-muted font-light">{region}</p>
        </div>
        <span className={`text-[0.6rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${tagColor}`}>
          {tag}
        </span>
      </div>
      <ul className="space-y-1.5">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-muted font-light leading-relaxed">
            <span className="text-amber-700 mt-0.5 flex-shrink-0 text-[0.6rem]">{"●"}</span>
            {pt}
          </li>
        ))}
      </ul>
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

// ── Pack Item ─────────────────────────────────────────────────────────────────
function PackItem({ icon, label, detail }: { icon: string; label: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-parchment-2 last:border-0">
      <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-muted font-light mt-0.5 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-parchment-2 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left hover:text-gold transition-colors"
      >
        <span className="text-sm font-medium text-ink leading-snug">{q}</span>
        <span className="text-muted text-lg flex-shrink-0 mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-sm text-muted font-light leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function FirstSoloClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const easyDestinations = [
    {
      name: "Kasol, Himachal Pradesh",
      region: "Parvati Valley",
      tag: "Easiest",
      tagColor: "bg-green-100 text-green-700",
      points: [
        "Backpacker valley with the strongest solo traveller community in India",
        "Easy to meet people — most cafes, hostels, and trails are solo-friendly",
        "Extremely safe, beautiful pine forests and river walks",
        "Springboard for Kheerganga trek (a must-do if fit enough)",
      ],
      link: "/blog/kasol-3-days",
    },
    {
      name: "Rishikesh, Uttarakhand",
      region: "Ganga Foothills",
      tag: "Easiest",
      tagColor: "bg-green-100 text-green-700",
      points: [
        "Yoga and adventure hub with massive international crowd",
        "Very safe, English widely spoken, logistics are simple",
        "Ganga aarti at Triveni Ghat is one of India's great free experiences",
        "White-water rafting, bungee jumping, cliff jumping all available",
      ],
      link: "/blog/rishikesh-haridwar-3-days",
    },
    {
      name: "Goa (North Beaches)",
      region: "Arambol, Anjuna, Morjim",
      tag: "Easy",
      tagColor: "bg-green-100 text-green-700",
      points: [
        "Party and chill mix — you choose your vibe",
        "Well-developed tourist infrastructure, safe areas",
        "Easy to meet other solo travellers",
        "Higher cost than Himachal but worth it for beach + nightlife combo",
      ],
      link: "/blog/goa-3-days",
    },
    {
      name: "Varkala, Kerala",
      region: "Cliff Beach",
      tag: "Easy",
      tagColor: "bg-green-100 text-green-700",
      points: [
        "Clifftop beach with solo traveller community and Ayurveda culture",
        "More chilled than Goa, genuinely beautiful setting",
        "Safe, English spoken, great seafood",
        "Good base for day trips into Kerala backwaters",
      ],
      link: "/blog/varkala-3-days",
    },
    {
      name: "Jibhi + Tirthan Valley, Himachal",
      region: "Banjar Valley",
      tag: "Easy",
      tagColor: "bg-green-100 text-green-700",
      points: [
        "Peaceful forest homestay culture — zero sketchy situations",
        "Great for introverts who want nature without party scene",
        "Very affordable, exceptional scenery",
        "Low tourist volume means genuine local interactions",
      ],
      link: "/blog/jibhi-tirthan-valley-3-days",
    },
  ];

  const mediumDestinations = [
    {
      name: "Jaipur, Rajasthan",
      region: "The Pink City",
      tag: "Medium",
      tagColor: "bg-amber-100 text-amber-700",
      points: [
        "Excellent tourist infrastructure, iconic sites (Amber Fort, City Palace, Hawa Mahal)",
        "English spoken widely, tuk-tuks are generally metered",
        "More tourist touts than Himachal — know your prices beforehand",
        "Food scene is exceptional for vegetarians",
      ],
      link: "/blog/jaipur-3-days",
    },
    {
      name: "Dharamshala + McLeodganj",
      region: "Himachal Pradesh",
      tag: "Medium",
      tagColor: "bg-amber-100 text-amber-700",
      points: [
        "Tibetan culture, home of the Dalai Lama — unique and peaceful",
        "Very safe, good solo traveller community",
        "Triund trek is one of the best accessible day treks in India",
        "More infrastructure than Kasol, slightly less raw scenery",
      ],
      link: "/blog/dharamshala-3-days",
    },
    {
      name: "Varanasi",
      region: "Uttar Pradesh",
      tag: "Medium",
      tagColor: "bg-amber-100 text-amber-700",
      points: [
        "The most intense city you will ever experience — in the best possible way",
        "Ganga Aarti at Dashashwamedh Ghat is India's most spectacular free event",
        "Best with 3+ days to absorb the chaos and find the rhythm",
        "Touts exist but the city beneath them is extraordinary",
      ],
      link: "/blog/varanasi-3-days",
    },
  ];

  const advancedDestinations = [
    {
      name: "Mumbai",
      region: "Maharashtra",
      tag: "Advanced",
      tagColor: "bg-red-100 text-red-700",
      points: [
        "Massive but manageable once you understand the metro network",
        "Victoria Terminus, Dharavi, Marine Drive, Colaba — all walkable or metro-connected",
        "Safe for solo travel, relatively low street harassment",
        "Save for trip 2 or 3 — the metro learning curve is steep first time",
      ],
    },
    {
      name: "Delhi",
      region: "NCT",
      tag: "Advanced",
      tagColor: "bg-red-100 text-red-700",
      points: [
        "Chaotic, some scams possible (especially Paharganj area)",
        "Metro is excellent and safe — stick to it rather than random autos",
        "Incredible food, history, and culture once you know how to navigate it",
        "Do this after you have India experience — it rewards competence",
      ],
      link: "/blog/delhi-3-days",
    },
    {
      name: "Kolkata",
      region: "West Bengal",
      tag: "Advanced",
      tagColor: "bg-red-100 text-red-700",
      points: [
        "Actually one of India's friendliest cities — reputation for danger is undeserved",
        "Most open city in India for LGBT+ travellers",
        "College Street, Howrah Bridge, Kumartuli — extraordinary character",
        "Marked advanced only because the city takes time to appreciate",
      ],
      link: "/blog/kolkata-3-days",
    },
  ];

  const budgetRows = [
    {
      tier: "Shoestring",
      range: "₹1,500–₹2,000/day",
      color: "bg-green-50 border-green-200",
      th: "text-green-800",
      items: ["Hostel dorm (₹400–₹700)", "Street food and local dhabas", "Local buses and shared autos", "Free sights + budget temples"],
    },
    {
      tier: "Comfortable Budget",
      range: "₹2,500–₹4,000/day",
      color: "bg-amber-50 border-amber-200",
      th: "text-amber-800",
      items: ["Private room in good guesthouse", "Decent café meals + one restaurant", "Occasional cab or Ola", "Paid attractions and one activity"],
    },
    {
      tier: "Mid-Range",
      range: "₹5,000–₹8,000/day",
      color: "bg-blue-50 border-blue-200",
      th: "text-blue-800",
      items: ["Hotel with attached bathroom + AC", "Restaurant meals twice daily", "Private cabs where needed", "Full-day activities and guided experiences"],
    },
  ];

  const trainTips = [
    { icon: "📱", label: "Book on IRCTC app or Cleartrip", detail: "IRCTC is the official platform. Cleartrip has a cleaner interface for first-timers. Both require registration with your passport for international travellers." },
    { icon: "📅", label: "Book 30–60 days in advance", detail: "Popular routes on AC classes fill fast. This is the single biggest mistake first-time India travellers make — they leave booking too late." },
    { icon: "⚡", label: "Tatkal quota if quota is full", detail: "Opens 1 day before departure at premium price (30–50% higher). Expensive but guaranteed seat — worth it if your train is sold out." },
    { icon: "🪑", label: "Classes: 3AC is best value", detail: "3AC (air-conditioned sleeper, 3 berths per bay) is the sweet spot for long journeys. Sleeper class (non-AC) is fine for budget overnight travel in cooler months." },
    { icon: "📡", label: "Track with NTES app", detail: "Download the NTES app for live train tracking. Indian trains run late regularly — knowing the actual arrival time saves hours of platform waiting." },
  ];

  const packItems = [
    { icon: "🎒", label: "40–50L backpack (not a suitcase)", detail: "Suitcases are impractical on Indian trains, in mountain areas, and in narrow lanes. A mid-size backpack handles everything." },
    { icon: "👕", label: "Quick-dry clothes (2–3 sets)", detail: "Synthetic or merino. You can wash and dry overnight at most hostels. Carry one modest outfit for temples (covered shoulders and knees)." },
    { icon: "👟", label: "Good walking shoes + flip flops", detail: "Walking shoes for cities and treks, flip flops for beaches and hostels. You will remove your shoes constantly at temples." },
    { icon: "🔋", label: "Power bank (20,000 mAh)", detail: "Essential for long train journeys. Outlets in train compartments are not reliable. Keep your phone alive at all times." },
    { icon: "🗺️", label: "Offline maps downloaded", detail: "Download Google Maps offline for your destination before departure. Maps.me works well in remote Himalayan areas with no signal." },
    { icon: "📶", label: "Airtel or Jio SIM", detail: "Buy at the airport arrivals hall — you need your passport and a passport photo. Airtel has better coverage in hills; Jio is cheaper everywhere else." },
    { icon: "💵", label: "Cash: ₹3,000–₹5,000 buffer", detail: "ATMs are unreliable in remote areas. Remote Himalayan villages may not accept UPI. Always carry enough cash to cover two nights and one emergency journey." },
    { icon: "💊", label: "Stomach medicine + first aid", detail: "Norflox (antibiotic for traveller's diarrhoea), ORS sachets, ibuprofen, and a basic wound kit. Indian pharmacies are excellent but having basics saves hassle." },
  ];

  const tenThings = [
    { num: "01", title: "The train system is actually easy once you understand it", body: "It looks overwhelming on IRCTC — it is not. Book 3AC or Sleeper, find your berth number, stow your bag under the seat. That is it. After your first overnight train you will wonder why you were worried." },
    { num: "02", title: "Saying no firmly is fine", body: "You do not owe anyone a long explanation. \"No thank you\" once is enough. Persistent touts respond to confidence, not apology. Walk away without guilt." },
    { num: "03", title: "Solo means you move at your own pace", body: "You can stay three extra days because you love the place. You can skip the tourist site everyone recommends. This is the biggest luxury in travel — and you have it completely." },
    { num: "04", title: "Budget accommodation in tourist areas is usually safe and social", body: "Hostels in Kasol, Rishikesh, and Varkala are populated by other solo travellers from 20+ countries. Walk into any common room and you have an instant social network." },
    { num: "05", title: "Fixed price is negotiable more often than you think", body: "Except in government shops and IRCTC — almost everything else has room. Ask politely, be willing to walk away, and never haggle angrily. Smiling gets you further." },
    { num: "06", title: "The best food is never in tourist restaurants", body: "The dhaba with plastic chairs and no English menu is usually serving better food for one-third of the price. Follow local density, not TripAdvisor ratings." },
    { num: "07", title: "Connecting with other travellers is easy — hostels, hostels, hostels", body: "Even if you prefer private rooms, check into at least one hostel during your trip. The connections you make will change your travel and often your plans for the better." },
    { num: "08", title: "Your phone is your best tool — download everything before you go", body: "Offline maps, train tracking app, UPI payment app, translation app. A fully prepared phone is worth more than any guidebook. Download all of it on good WiFi before departure." },
    { num: "09", title: "Slow travel wins", body: "Five days in one place beats two days in five places. You find the hidden café on day three. The locals start recognising you on day four. The magic of a place only emerges when you stop rushing." },
    { num: "10", title: "The scary part is before you go, not after you arrive", body: "Every solo traveller says this. The anxiety is heaviest in the days before departure. By the time you land, find your hostel, and have your first chai — it dissolves completely." },
  ];

  const faqs = [
    {
      q: "Is India safe for solo female travel?",
      a: "Yes, with preparation. Kasol, Rishikesh, Varkala, and Jibhi are genuinely safe with strong backpacker communities. Use Rapido or Ola instead of random autos, share your location with someone, and stay in well-reviewed hostels. The risk profile varies significantly between destinations — research your specific area before going.",
    },
    {
      q: "What is the best first solo trip in India for beginners?",
      a: "Kasol or Rishikesh for most beginners. Both have strong solo traveller infrastructure, English is widely spoken, safety is genuinely high, and meeting other travellers is easy. Both are comfortable on ₹1,500–₹2,500/day.",
    },
    {
      q: "How much money do I need for a solo India trip?",
      a: "Shoestring: ₹1,500–₹2,000/day (dorm, street food, buses). Comfortable: ₹2,500–₹4,000/day (private room, decent meals). Mid-range: ₹5,000–₹8,000/day (hotel, restaurant meals). Himalayan destinations are noticeably cheaper than cities.",
    },
    {
      q: "How do I book trains in India as a first-time traveller?",
      a: "Use the IRCTC app or Cleartrip.com. Register with your passport. Book 30–60 days ahead for AC classes. If quota is full, Tatkal opens 1 day before at premium price. For long overnight journeys, 3AC is the best value class.",
    },
    {
      q: "Is solo travel in India expensive?",
      a: "India is one of the most affordable solo travel destinations in the world. ₹2,000–₹4,000/day covers comfortable accommodation, good food, and transport. Himalayan destinations are especially cheap compared to major cities.",
    },
    {
      q: "What should I pack for my first solo trip to India?",
      a: "Keep it light: 40–50L backpack, 2–3 sets of quick-dry clothes, good walking shoes and flip flops, power bank, offline maps, Airtel or Jio SIM, ₹3,000–₹5,000 cash buffer, and stomach medicine. Avoid suitcases — they are not practical on Indian trains or in mountain areas.",
    },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SOLO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="First Solo Trip India" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="solo backpacker traveller mountains India Himachal Pradesh"
            alt="Solo traveller with a backpack on a mountain trail in India"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">First Solo Trip India</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Travel Tips
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                First Solo Trip in India:
                <em className="italic text-gold-light"> The Honest Beginner&apos;s Guide (2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Best destinations by experience level, honest safety advice, train booking demystified, what to pack, and the 10 things nobody tells you before your first solo trip.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"🇮🇳"} India</span>
              <span>{"·"}</span>
              <span>{"🎒"} Solo Travel</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹1,500/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The scary part of solo travel in India is the week before you go, not after you arrive. Every solo traveller who has done it says exactly this. This guide is designed to get you to that realisation faster.
            </p>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"💰"} label="Budget From" value="₹1,500/day" />
            <StatCard icon={"🏨"} label="Best Base" value="Hostel" />
            <StatCard icon={"🚂"} label="Transport" value="Trains + Apps" />
            <StatCard icon={"📅"} label="Best Season" value="Oct – Mar" />
          </div>

          {/* ── WHY SOLO TRAVEL IN INDIA ── */}
          <section id="why" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"✈️"} Why Solo Travel in India</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Before the practical stuff — why India, and why now?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  emoji: "🏠",
                  title: "Strong backpacker infrastructure",
                  body: "India has more solo travellers than almost any other country. From Kasol to Rishikesh to Varkala, hostels, backpacker cafes, and solo-friendly routes are well-established and affordable.",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                },
                {
                  emoji: "🤝",
                  title: "Genuinely welcoming people",
                  body: "Strangers help, invite, share food. Asking for directions leads to getting walked there. Getting invited for chai is a daily occurrence. India's reputation for hostility does not match the lived reality for most solo travellers.",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                },
                {
                  emoji: "💰",
                  title: "Budget-friendly",
                  body: "₹2,000–₹4,000/day is a comfortable budget in most of India. You can eat well, sleep safely, and travel effectively on this. Himachal Pradesh and Uttarakhand are even cheaper.",
                  bg: "bg-green-50 border-green-200",
                  th: "text-green-800",
                },
                {
                  emoji: "🌱",
                  title: "Life-changing experience",
                  body: "Solo travel forces self-reliance. You make every decision, solve every problem, meet every stranger. The confidence it builds — especially in a high-intensity country like India — is genuinely transformative.",
                  bg: "bg-blue-50 border-blue-200",
                  th: "text-blue-800",
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-xl border p-5 ${card.bg}`}>
                  <h3 className={`font-serif text-base font-normal mb-2 flex items-center gap-2 ${card.th}`}>
                    <span>{card.emoji}</span>{card.title}
                  </h3>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEST FIRST DESTINATIONS ── */}
          <section id="destinations" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📍"} Best First Destinations</h2>
            <p className="text-sm text-muted font-light mb-8 leading-relaxed">
              Sorted by experience level — not every destination is right for every first-timer. Start where the infrastructure matches your confidence, then level up.
            </p>

            {/* Easy */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">Easy — Start Here</span>
                <p className="text-xs text-muted font-light">Low chaos, English spoken, strong solo infrastructure</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {easyDestinations.map((d) => (
                  <DestCard key={d.name} {...d} />
                ))}
              </div>
            </div>

            {/* Medium */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">Medium — More Chaos</span>
                <p className="text-xs text-muted font-light">More tourist touts, but very manageable</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {mediumDestinations.map((d) => (
                  <DestCard key={d.name} {...d} />
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="mb-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">Advanced — After Some India Experience</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {advancedDestinations.map((d) => (
                  <DestCard key={d.name} {...d} />
                ))}
              </div>
            </div>
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"💰"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What does solo travel in India actually cost? Here is what each tier looks like in practice.
            </p>
            <div className="space-y-4">
              {budgetRows.map((row) => (
                <div key={row.tier} className={`rounded-xl border p-5 ${row.color}`}>
                  <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                    <h3 className={`font-serif text-base font-normal ${row.th}`}>{row.tier}</h3>
                    <span className={`text-sm font-medium ${row.th}`}>{row.range}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {row.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-light">
                        <span className="text-gray-400 mt-0.5 flex-shrink-0">{"–"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Note:</strong> Himachal Pradesh and Uttarakhand are significantly cheaper than Goa, Kerala, or major cities. If budget is the primary concern, Kasol or Jibhi gives more value per rupee than almost anywhere else.
              </p>
            </div>
          </section>

          {/* ── SAFETY ── */}
          <section id="safety" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🛡️"} Safety — The Honest Version</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              India is generally safe for solo travel. It requires awareness, not fear.
            </p>
            <div className="space-y-4 mb-6">
              <TipCard
                icon="🚦"
                title="Biggest real risks: traffic and food"
                desc="Use Ola or Rapido apps rather than flagging random autos — you get GPS tracking, fixed fares, and a record of your ride. For food: eat where locals eat and where food is cooked fresh in front of you. Street food from high-turnover stalls is usually safer than restaurant salads."
                color="bg-amber-50 border-amber-200"
              />
              <TipCard
                icon="👜"
                title="Petty theft in crowded areas"
                desc="Keep your phone in a front pocket on busy trains and bus stations. Use a small day bag with a zip rather than an open tote. This is not India-specific — it applies to any crowded tourist destination anywhere in the world."
                color="bg-amber-50 border-amber-200"
              />
              <TipCard
                icon="👩"
                title="For women: use apps, share your location"
                desc="Research your specific areas — Kasol and Rishikesh are genuinely safe; some Delhi neighbourhoods require more vigilance after dark. Use Rapido or Ola over random autos. Share your live location with someone you trust. Stay in well-reviewed hostels where staff know who is coming and going."
                color="bg-blue-50 border-blue-200"
              />
              <TipCard
                icon="🏳️‍🌈"
                title="LGBT+ travellers: location matters"
                desc="Kolkata and Goa are India's most open cities for LGBT+ travellers. Delhi and Mumbai are manageable with discretion. Rural and small-town India requires more care — public displays of affection between same-sex couples attract unwanted attention. Kasol's backpacker culture is accepting; smaller Himalayan towns less so."
                color="bg-purple-50 border-purple-200"
              />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Reality check:</strong> The vast majority of solo travellers in India — including solo women — report their trip as significantly safer than they expected. Not every destination is equal, but the overall picture is positive. Do your research by destination, not by country-level generalisation.
              </p>
            </div>
          </section>

          {/* ── TRAIN BOOKING ── */}
          <section id="trains" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🚂"} How to Book Trains in India</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Indian train network is extraordinary — 13,000+ trains, 8,000+ stations, some of the world&apos;s longest routes. It looks intimidating. It is not.
            </p>
            <div className="bg-white rounded-xl border border-parchment-2 divide-y divide-parchment-2 mb-5">
              {trainTips.map((tip) => (
                <PackItem key={tip.label} {...tip} />
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Classes explained:</strong> 3AC (air-conditioned, 3 berths, curtains for privacy) is the best value for overnight journeys — ₹600–₹1,500 for a 10-hour route. Sleeper class (non-AC) is ₹200–₹500 for the same route, fine in cooler months. 2AC and 1AC are comfortable but rarely necessary for solo budget travel.
              </p>
            </div>
          </section>

          {/* ── WHAT TO PACK ── */}
          <section id="pack" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🎒"} What to Pack</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pack light. You can buy almost anything you forget in India for a fraction of the price. The items below are the ones that actually matter.
            </p>
            <div className="bg-white rounded-xl border border-parchment-2 divide-y divide-parchment-2">
              {packItems.map((item) => (
                <PackItem key={item.label} {...item} />
              ))}
            </div>
          </section>

          {/* ── 10 THINGS NOBODY TELLS YOU ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"💡"} 10 Things Nobody Tells First-Time Solo Travellers</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The things every experienced India solo traveller wishes they had known before trip one.
            </p>
            <div className="space-y-4">
              {tenThings.map((item) => (
                <div key={item.num} className="bg-white rounded-xl border border-parchment-2 p-5 flex gap-4">
                  <span className="font-serif text-2xl text-amber-200 font-light flex-shrink-0 leading-none mt-0.5">{item.num}</span>
                  <div>
                    <p className="text-sm font-medium text-ink mb-1.5">{item.title}</p>
                    <p className="text-xs text-muted font-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"❓"} FAQ</h2>
            <div className="bg-white rounded-xl border border-parchment-2 px-5 divide-y divide-parchment-2">
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-ink rounded-2xl p-8 text-center mb-14">
            <p className="font-serif text-2xl text-white font-light mb-2">Ready to plan your first solo trip?</p>
            <p className="text-white/60 text-sm font-light mb-6 max-w-sm mx-auto">
              Tell us where you want to go and we&apos;ll help you build the perfect first itinerary.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gold text-ink font-medium text-sm px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              Plan My Solo Trip
            </button>
          </div>

          <RelatedGuides currentSlug="first-solo-trip-india" />
          <Comments />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
