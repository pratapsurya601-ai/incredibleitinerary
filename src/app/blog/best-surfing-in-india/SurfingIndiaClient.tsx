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
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";
import { usePageUrl } from "@/lib/hooks";

const SURF_TOC = [
  { id: "overview",   emoji: "🏄",  label: "Surfing in India Overview" },
  { id: "spots",      emoji: "📍",  label: "Best Surf Spots" },
  { id: "schools",    emoji: "🎓",  label: "Surf Schools & Costs" },
  { id: "season",     emoji: "📅",  label: "Best Season by Location" },
  { id: "beginners",  emoji: "🌊",  label: "Beginner Tips" },
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
        className="h-full bg-gold transition-all duration-100"
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
          href: `mailto:?subject=Best Surfing in India 2026&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Best surfing in India guide 2026&url=${pageUrl}`,
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

// ── Surf Spot Card ────────────────────────────────────────────────────────────
function SpotCard({
  rank,
  name,
  region,
  badge,
  badgeColor,
  wave,
  season,
  school,
  cost,
  points,
  link,
  highlight,
}: {
  rank: string;
  name: string;
  region: string;
  badge: string;
  badgeColor: string;
  wave: string;
  season: string;
  school: string;
  cost: string;
  points: string[];
  link?: string;
  highlight?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <div className="bg-parchment px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-start gap-3">
          <span className="font-serif text-2xl text-amber-200 font-light leading-none mt-0.5">{rank}</span>
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
        </div>
        <span className={`text-[0.6rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: "Wave type", value: wave },
            { label: "Best season", value: season },
            { label: "Main school", value: school },
            { label: "Course cost", value: cost },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[0.6rem] text-muted uppercase tracking-wide mb-0.5">{label}</p>
              <p className="text-xs font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-1.5 mb-4">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted font-light leading-relaxed">
              <span className="text-amber-700 mt-0.5 flex-shrink-0 text-[0.6rem]">{"●"}</span>
              {pt}
            </li>
          ))}
        </ul>
        {highlight && (
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-3">
            <p className="text-xs text-ink-mid font-light italic">{highlight}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Season Row ────────────────────────────────────────────────────────────────
function SeasonRow({ location, coast, peak, shoulder, avoid }: {
  location: string;
  coast: string;
  peak: string;
  shoulder: string;
  avoid: string;
}) {
  return (
    <div className="grid grid-cols-4 gap-3 py-3 border-b border-parchment-2 last:border-0 text-xs">
      <div>
        <p className="font-medium text-ink">{location}</p>
        <p className="text-muted font-light text-[0.65rem]">{coast}</p>
      </div>
      <div>
        <p className="text-[0.6rem] text-muted uppercase tracking-wide mb-0.5">Peak</p>
        <p className="text-green-700 font-medium">{peak}</p>
      </div>
      <div>
        <p className="text-[0.6rem] text-muted uppercase tracking-wide mb-0.5">Shoulder</p>
        <p className="text-amber-700 font-medium">{shoulder}</p>
      </div>
      <div>
        <p className="text-[0.6rem] text-muted uppercase tracking-wide mb-0.5">Avoid</p>
        <p className="text-red-600 font-medium">{avoid}</p>
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
export default function SurfingIndiaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const spots = [
    {
      rank: "01",
      name: "Mulki, Karnataka",
      region: "Near Mangalore — 350km from Bangalore",
      badge: "India's Best",
      badgeColor: "bg-gold/20 text-amber-800",
      wave: "Consistent beach break",
      season: "June – September",
      school: "Mantra Surf Club",
      cost: "₹12,000–₹18,000 (5-day residential)",
      points: [
        "India's undisputed surfing capital — the most consistent and well-schooled surf destination in the country",
        "Mantra Surf Club runs India's best surf school, with 5-day beginner courses including accommodation",
        "Monsoon swells (June–September) create reliable beach break conditions gentle enough for beginners",
        "River mouth creates interesting and variable conditions for more experienced surfers",
        "Instagram-famous geography: river on one side of the road, Arabian Sea on the other",
      ],
      highlight: "The 5-day residential course at Mantra Surf Club is the single best introduction to surfing in India — structured lessons, good boards, and a surf community that makes learning social.",
    },
    {
      rank: "02",
      name: "Covelong (Kovalam), Tamil Nadu",
      region: "40km south of Chennai, near Mahabalipuram",
      badge: "East Coast Best",
      badgeColor: "bg-blue-100 text-blue-700",
      wave: "Consistent beach break",
      season: "October – December",
      school: "Covelong Point Surf School",
      cost: "₹3,000–₹5,000 (lesson packages)",
      points: [
        "The east coast's best surf destination — northeast monsoon swells create consistent waves Oct–Dec",
        "Covelong Point Surf School is well-established with qualified instructors",
        "Easy day-trip or weekend add-on from Chennai — 40km south on the East Coast Road",
        "Can combine with a Mahabalipuram heritage visit for a culture + surf weekend",
        "More affordable lessons than Mulki, good beginner setup",
      ],
      highlight: "If you are based in Chennai or doing a south India circuit, Covelong is the logical surf stop — close, convenient, and with reliable October–December waves.",
    },
    {
      rank: "03",
      name: "Varkala, Kerala",
      region: "Cliff beach, 50km north of Trivandrum",
      badge: "Most Scenic",
      badgeColor: "bg-teal-100 text-teal-700",
      wave: "Open beach break",
      season: "October – March",
      school: "Various cliff-top schools",
      cost: "₹2,000–₹3,500/day",
      points: [
        "Waves are more consistent than Kovalam — the cliff-backed setting makes it Kerala's best surf beach",
        "Several surf schools operate along the cliff path, mostly informal but competent",
        "Best October–March when the Arabian Sea has some swell without monsoon intensity",
        "Not as powerful as Mulki but significantly more scenic — red laterite cliffs, coconut trees, warm water",
        "Solo traveller-friendly location with good accommodation and food on the cliff",
      ],
      link: "/blog/varkala-3-days",
    },
    {
      rank: "04",
      name: "Gokarna, Karnataka",
      region: "Om Beach and Kudle Beach",
      badge: "Relaxed Scene",
      badgeColor: "bg-green-100 text-green-700",
      wave: "Seasonal beach break",
      season: "October – February",
      school: "Local instructors (informal)",
      cost: "₹1,500–₹3,000/day",
      points: [
        "Not a dedicated surf destination but Om Beach and Kudle Beach have rideable waves Oct–February",
        "More relaxed, hippie-ish scene than Mulki — surf here for the vibe as much as the waves",
        "Informal instructors and board rentals available, no large surf school",
        "Good for experienced surfers looking for uncrowded waves in a beautiful setting",
        "Combine with a Gokarna temple visit and cliff path trek",
      ],
      link: "/blog/gokarna-3-days",
    },
    {
      rank: "05",
      name: "Diglipur, Andaman Islands",
      region: "North Andaman — 330km from Port Blair",
      badge: "Advanced",
      badgeColor: "bg-red-100 text-red-700",
      wave: "Open ocean swells",
      season: "Nov – Dec, Mar – May",
      school: "None (bring your own)",
      cost: "Board rental only (bring skills)",
      points: [
        "Less known but with genuinely international-standard waves — open ocean exposure means serious swell",
        "Very difficult to reach — 10+ hours by ferry from Port Blair, flights via helicopter are expensive",
        "No surf school infrastructure — come with experience or with your own instructor",
        "The reward: near-empty waves in one of India's most beautiful island settings",
        "Combine with the Andaman island circuit if already making the journey",
      ],
      link: "/blog/andaman-5-days",
    },
    {
      rank: "06",
      name: "Morjim, Goa",
      region: "North Goa",
      badge: "Convenient",
      badgeColor: "bg-purple-100 text-purple-700",
      wave: "Seasonal, not powerful",
      season: "November – February",
      school: "Morjim surf schools",
      cost: "₹2,000–₹4,000/day",
      points: [
        "Seasonal waves November–February, not powerful but consistent enough for beginners",
        "Several surf schools operate at Morjim beach — quality varies, ask for instructor credentials",
        "Main advantage: convenience — you are already in Goa, might as well try surfing",
        "Not worth travelling specifically for the surf — waves are mild compared to Mulki or Covelong",
        "Good option if you want to dip your toes in (literally) before committing to a proper course",
      ],
      link: "/blog/goa-3-days",
    },
  ];

  const seasons = [
    { location: "Mulki", coast: "West Coast, Karnataka", peak: "Jun – Sep", shoulder: "Oct – Nov", avoid: "Dec – May" },
    { location: "Covelong", coast: "East Coast, Tamil Nadu", peak: "Oct – Dec", shoulder: "Jan – Feb", avoid: "Apr – Sep" },
    { location: "Varkala", coast: "West Coast, Kerala", peak: "Oct – Mar", shoulder: "Apr – May", avoid: "Jun – Sep" },
    { location: "Gokarna", coast: "West Coast, Karnataka", peak: "Oct – Feb", shoulder: "Mar – Apr", avoid: "Jun – Sep" },
    { location: "Morjim, Goa", coast: "West Coast, Goa", peak: "Nov – Feb", shoulder: "Oct, Mar", avoid: "Jun – Sep" },
    { location: "Diglipur (Andaman)", coast: "Bay of Bengal", peak: "Nov – Dec", shoulder: "Mar – May", avoid: "Jun – Oct" },
  ];

  const beginnerTips = [
    {
      icon: "🏄",
      title: "Start with Mulki or Covelong — in that order",
      body: "Mulki has the best school infrastructure in India and the most consistent beginner-friendly waves. Covelong is the best east coast option. Both have qualified instructors who will get you standing up within 2–3 lessons.",
    },
    {
      icon: "💰",
      title: "Budget ₹2,000–₹4,000 per day for lessons",
      body: "Daily lessons including board rental run ₹2,000–₹4,000 at most Indian surf schools. Full 5-day courses at Mulki (including accommodation) cost ₹12,000–₹25,000 — better value than daily lessons if you are committing to learning properly.",
    },
    {
      icon: "🌊",
      title: "West coast June–September, east coast October–March",
      body: "India's best surfing follows the monsoon: Arabian Sea (west) gets swell from June to September, Bay of Bengal (east) gets its best waves from October to March with the northeast monsoon. Plan your trip by coast.",
    },
    {
      icon: "👕",
      title: "Wear a rash guard — always",
      body: "Indian surf beaches have intense tropical sun, even when overcast. A rash guard (long or short sleeve) protects against sunburn and board rash. Most surf schools include rash guard rental in the price — ask beforehand.",
    },
    {
      icon: "🏊",
      title: "Surfboard rental is included at all schools",
      body: "You do not need to bring a surfboard. All surf schools include board rental in lesson and course costs. Fins, leash, and wax are also included. Just bring a rash guard, reef-safe sunscreen, and water.",
    },
    {
      icon: "📱",
      title: "Check swell conditions before booking",
      body: "Use Surfline or Magicseaweed to check swell forecasts for your destination dates. Indian surf is seasonal — booking during the wrong monsoon window (e.g., west coast in January) means flat water. Match your dates to the peak season table above.",
    },
  ];

  const faqs = [
    {
      q: "Where is the best place to learn to surf in India?",
      a: "Mulki (Karnataka, near Mangalore) is India's best place to learn. Mantra Surf Club runs 5-day residential packages for ₹12,000–₹18,000 including accommodation — consistent waves, qualified instructors, and a surf community. Covelong (Tamil Nadu, 40km from Chennai) is the second-best option.",
    },
    {
      q: "What is the best season for surfing in India?",
      a: "West coast (Mulki, Varkala, Gokarna, Goa): June–September. East coast (Covelong): October–March. Andaman Islands: November–December and March–May. For a trip covering multiple spots, September–October is the transition month when both coasts can be reasonable.",
    },
    {
      q: "How much does surfing in India cost?",
      a: "Single lessons: ₹2,000–₹4,000/day including board rental. 5-day beginner courses without accommodation: ₹8,000–₹15,000. 5-day residential at Mulki: ₹12,000–₹18,000 — the best value for a proper introduction to surfing in India.",
    },
    {
      q: "Is Mulki the best surfing spot in India?",
      a: "Yes, by consensus. Mantra Surf Club is India's most established school, the beach break is consistent, and the June–September monsoon swells are reliable. The river-meets-sea geography is also uniquely photogenic.",
    },
    {
      q: "Can complete beginners surf in India?",
      a: "Absolutely. Mulki and Covelong are specifically set up for beginner instruction. Most people can stand up on a board within 2–3 lessons. The 5-day residential courses at Mulki are designed for complete beginners with zero experience.",
    },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SURF_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Best Surfing in India" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="surfing wave India beach Karnataka ocean"
            alt="Surfer riding a wave at an Indian beach during monsoon season"
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
              <span className="text-white/70">Best Surfing in India</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Activity Guide
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">8 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Best Surfing in India 2026:
                <em className="italic text-gold-light"> Top Spots, Surf Schools & When to Go</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Mulki is India&apos;s surfing capital, Covelong is the east coast&apos;s best, Varkala has the most scenic waves. Complete guide with school costs and best seasons.
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
              <span>{"🏄"} Water Sports</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹2,000/lesson</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              India has a surfing scene that most people who have been to Goa and Kerala have no idea exists. Mulki in Karnataka is a world-class beginner destination. The east coast gets consistent swells in winter. And Varkala&apos;s cliff backdrop is the most scenic surf setting in the country.
            </p>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🏄"} label="Top Spot" value="Mulki" />
            <StatCard icon={"💰"} label="Lesson Cost" value="₹2,000–₹4,000" />
            <StatCard icon={"📅"} label="West Coast" value="Jun – Sep" />
            <StatCard icon={"📅"} label="East Coast" value="Oct – Mar" />
          </div>

          {/* ── OVERVIEW ── */}
          <section id="overview" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏄"} Surfing in India — Overview</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              India has over 7,500km of coastline and a growing surf culture that punches above its weight. The scene is still young compared to Bali or Sri Lanka, but the infrastructure at key spots — especially Mulki and Covelong — is legitimate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  emoji: "🌊",
                  title: "West Coast: Monsoon Surfing",
                  bg: "bg-blue-50 border-blue-200",
                  th: "text-blue-800",
                  rows: [
                    ["Best months", "June – September"],
                    ["Key spots", "Mulki, Varkala, Gokarna, Morjim"],
                    ["Wave type", "Monsoon swells, beach break"],
                    ["Level", "Beginner to Intermediate"],
                  ],
                  note: "Monsoon swells create the most consistent waves on the Arabian Sea coast. Mulki peaks in this window.",
                },
                {
                  emoji: "🌊",
                  title: "East Coast: Winter Surfing",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  rows: [
                    ["Best months", "October – March"],
                    ["Key spots", "Covelong, Mahabalipuram"],
                    ["Wave type", "Northeast monsoon swells"],
                    ["Level", "Beginner to Intermediate"],
                  ],
                  note: "Northeast monsoon brings reliable waves to Tamil Nadu's coast when the west coast is flat.",
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-base font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">
                    {"⚠️"} {area.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SURF SPOTS ── */}
          <section id="spots" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📍"} Best Surf Spots in India</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ranked by consistency, school infrastructure, and overall surf experience.
            </p>
            <div className="space-y-5">
              {spots.map((spot) => (
                <SpotCard key={spot.rank} {...spot} />
              ))}
            </div>
          </section>

          {/* ── SURF SCHOOLS & COSTS ── */}
          <section id="schools" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🎓"} Surf Schools & Costs</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What to expect to pay at India&apos;s main surf schools.
            </p>
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-5">
              <div className="grid grid-cols-4 gap-3 px-5 py-3 bg-parchment text-[0.6rem] text-muted uppercase tracking-widest font-medium">
                <span>School</span>
                <span>Location</span>
                <span>Daily lesson</span>
                <span>5-day course</span>
              </div>
              {[
                { school: "Mantra Surf Club", location: "Mulki, Karnataka", daily: "₹2,500–₹4,000", course: "₹12,000–₹18,000 (with stay)" },
                { school: "Covelong Point", location: "Covelong, Tamil Nadu", daily: "₹2,000–₹3,500", course: "₹8,000–₹15,000" },
                { school: "Varkala surf schools", location: "Varkala, Kerala", daily: "₹1,800–₹3,000", course: "₹8,000–₹12,000" },
                { school: "Morjim schools", location: "Morjim, Goa", daily: "₹2,000–₹4,000", course: "₹10,000–₹18,000" },
              ].map((row) => (
                <div key={row.school} className="grid grid-cols-4 gap-3 px-5 py-3 border-t border-parchment-2 text-xs">
                  <span className="font-medium text-ink">{row.school}</span>
                  <span className="text-muted font-light">{row.location}</span>
                  <span className="text-muted font-light">{row.daily}</span>
                  <span className="text-muted font-light">{row.course}</span>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">What is included:</strong> Board rental, leash, fins, and instructor time are included at all schools. Rash guard rental is usually ₹200–₹500/day extra, or bring your own. Accommodation is included in Mantra Surf Club&apos;s residential packages only.
              </p>
            </div>
          </section>

          {/* ── SEASON ── */}
          <section id="season" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} Best Season by Location</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              India&apos;s surf season is driven by the monsoon — get the timing wrong and you will find flat water.
            </p>
            <div className="bg-white rounded-xl border border-parchment-2 px-5">
              <div className="grid grid-cols-4 gap-3 py-3 border-b border-parchment-2 text-[0.6rem] text-muted uppercase tracking-widest font-medium">
                <span>Location</span>
                <span>Peak</span>
                <span>Shoulder</span>
                <span>Avoid</span>
              </div>
              {seasons.map((s) => (
                <SeasonRow key={s.location} {...s} />
              ))}
            </div>
            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Planning a multi-coast surf trip?</strong> September–October is the transition window when west coast conditions are winding down and east coast is picking up. A Mulki to Covelong loop in this window is feasible, though neither coast is at absolute peak.
              </p>
            </div>
          </section>

          {/* ── BEGINNER TIPS ── */}
          <section id="beginners" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🌊"} Beginner Tips</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Never surfed before? This is what you need to know before your first lesson in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beginnerTips.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-ink mb-1.5">{tip.title}</p>
                      <p className="text-xs text-muted font-light leading-relaxed">{tip.body}</p>
                    </div>
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
            <p className="font-serif text-2xl text-white font-light mb-2">Planning a surf trip in India?</p>
            <p className="text-white/60 text-sm font-light mb-6 max-w-sm mx-auto">
              Tell us where you want to go and we&apos;ll help you build the perfect surf and travel itinerary.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gold text-ink font-medium text-sm px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              Plan My Surf Trip
            </button>
          </div>

          <RelatedGuides currentSlug="best-surfing-in-india" />

          <DestinationGallery
            title="Best Surfing In India — Highlights"
            subtitle="The best of Best Surfing In India in photos."
            spots={[
              { name: "Best Surfing In India Landscape", query: "best surfing in india india landscape scenic beautiful travel", desc: "The stunning landscapes of Best Surfing In India." },
              { name: "Best Surfing In India Temple", query: "best surfing in india temple architecture heritage india", desc: "Historic temples and architecture in Best Surfing In India." },
              { name: "Best Surfing In India Street Scene", query: "best surfing in india street market local culture india", desc: "Local life and culture in Best Surfing In India." },
              { name: "Best Surfing In India Nature", query: "best surfing in india nature hills forest river india", desc: "Natural beauty around Best Surfing In India." },
              { name: "Best Surfing In India Sunset", query: "best surfing in india sunset golden hour india travel", desc: "Best Surfing In India at golden hour." },
            ]}
          />

         
          <Comments />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
