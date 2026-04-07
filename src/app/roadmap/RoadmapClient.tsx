"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  TrendingUp,
  Link2,
  Globe,
  Calendar,
  XCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Phase {
  id: number;
  label: string;
  period: string;
  months: string;
  visitGoal: string;
  revenueGoal: string;
  focus: string;
  deliverables: string[];
  posts: number;
  backlinks: number;
}

interface BacklinkTactic {
  name: string;
  effort: "Low" | "Medium" | "High";
  linksPerMonth: string;
  hoursPerWeek: string;
  how: string;
}

interface GlobalTier {
  tier: number;
  label: string;
  period: string;
  countries: string[];
  why: string;
  audience: string;
  contentAngle: string;
  rpmRange: string;
  affiliates: string;
}

interface FailureMode {
  risk: string;
  mitigation: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PHASES: Phase[] = [
  {
    id: 1,
    label: "Phase 1 — Foundation",
    period: "Apr–Sep 2026",
    months: "Months 1–6",
    visitGoal: "0 → 5,000/month",
    revenueGoal: "₹0–3,000/month",
    focus: "India only. Survive the Google sandbox. Build topical authority on one region before expanding.",
    deliverables: [
      "72 new hand-written India posts (3 posts/week, every week)",
      "All 362 existing posts submitted to Google Search Console",
      "50+ quality backlinks via Reddit, Quora, HARO, and guest posts",
      "AdSense application submitted once 90+ days of content exist",
      "Email signup form live with a free India itinerary PDF as incentive",
      "Internal linking audit: every new post links to 5 existing posts",
      "First-person voice added to Delhi and Rishikesh posts",
    ],
    posts: 72,
    backlinks: 50,
  },
  {
    id: 2,
    label: "Phase 2 — India Authority + First Income",
    period: "Oct 2026–Mar 2027",
    months: "Months 7–12",
    visitGoal: "5,000 → 20,000/month",
    revenueGoal: "₹3,000–15,000/month",
    focus: "80% India (consolidate rankings), 20% SE Asia testing — Bali, Phuket, Bangkok, Singapore, Kuala Lumpur.",
    deliverables: [
      "72 new posts (India + first SE Asia guides)",
      "100+ total backlinks",
      "AdSense live and optimised",
      "Custom itinerary service launched at ₹1,499 via Razorpay",
      "First ₹10,000 month (realistic by Month 10–11)",
      "Email list: 100+ subscribers",
      "Media kit page live once traffic crosses 5K/month",
    ],
    posts: 72,
    backlinks: 100,
  },
  {
    id: 3,
    label: "Phase 3 — Regional Expansion",
    period: "Apr–Sep 2027",
    months: "Months 13–18",
    visitGoal: "20,000 → 60,000/month",
    revenueGoal: "₹15,000–50,000/month",
    focus: "50% India, 50% SE Asia. Add Vietnam, Cambodia, Sri Lanka, Nepal, Bhutan. Apply to Mediavine at 50K sessions.",
    deliverables: [
      "72 new posts across India and SE Asia",
      "200+ total backlinks",
      "Mediavine application submitted at 50K sessions milestone",
      "First freelance writer hired at ₹500–800/post for India top-10 posts",
      "Pinterest account active with 3 pins/week from existing content",
      "5 PDF itinerary products for sale on site",
    ],
    posts: 72,
    backlinks: 200,
  },
  {
    id: 4,
    label: "Phase 4 — High-RPM Global Markets",
    period: "Oct 2027–Mar 2028",
    months: "Months 19–24",
    visitGoal: "60,000 → 150,000/month",
    revenueGoal: "₹50,000–1,50,000/month",
    focus: "Add high-RPM English-speaking markets: Dubai, Turkey, Egypt, Morocco, Eastern Europe (Prague, Budapest, Krakow). Skip US/Western Europe — too competitive.",
    deliverables: [
      "90 new posts targeting Tier 3 global markets",
      "350+ total backlinks",
      "Mediavine live (or Raptive as fallback)",
      "Second writer hired",
      "Email list: 1,000+ subscribers",
      "Sponsorship / brand deals for travel products",
    ],
    posts: 90,
    backlinks: 350,
  },
];

const BACKLINK_TACTICS: BacklinkTactic[] = [
  {
    name: "Reddit (r/IndiaTravel, r/solotravel, r/backpacking)",
    effort: "Low",
    linksPerMonth: "2–5 referral links",
    hoursPerWeek: "1 hr",
    how: "Answer 3 genuine questions per week. Only link when it directly answers the question. Build karma first — no spam. r/IndiaTravel alone can drive hundreds of visits per post.",
  },
  {
    name: "Quora",
    effort: "Low",
    linksPerMonth: "2–4 referral links",
    hoursPerWeek: "1 hr",
    how: "Build a travel expert profile. Answer 3 India travel questions/week. Link to specific guides only when answering the exact question. Quora answers rank on Google themselves.",
  },
  {
    name: "HARO / Qwoted / Featured.com",
    effort: "Medium",
    linksPerMonth: "1–2 DA 60+ links",
    hoursPerWeek: "30 min/day",
    how: "Sign up for HARO (free). Check journalist queries 3x/week. Respond within 2 hours to travel/India/tourism queries with a clear, quotable paragraph. These are the highest-quality links you can get for free.",
  },
  {
    name: "Guest posts on Indian travel blogs",
    effort: "High",
    linksPerMonth: "1–2 do-follow links",
    hoursPerWeek: "3 hrs",
    how: "Pitch 5 blogs/month via email. Target DA 20–40 Indian travel blogs first (Holidify, Thrillophilia contributors, smaller personal travel blogs). Offer a unique 1,200-word post they can't easily write themselves.",
  },
  {
    name: "Resource page link building",
    effort: "Medium",
    linksPerMonth: "1–3 links",
    hoursPerWeek: "1 hr",
    how: "Google: 'best India travel resources' OR 'india travel links' intitle:resources. Email site owners: 'I noticed you link to X — I've built a more comprehensive guide on [destination], would you consider adding it?' Keep email under 5 lines.",
  },
  {
    name: "Broken link building",
    effort: "High",
    linksPerMonth: "2–4 links",
    hoursPerWeek: "2 hrs",
    how: "Use Ahrefs free trial or Check My Links Chrome extension. Find broken outbound links on India travel pages. Email the owner: 'Hey, your link to [X] is broken — my guide on [destination] covers the same topic if you want a working replacement.'",
  },
  {
    name: "Indian state tourism boards",
    effort: "Medium",
    linksPerMonth: "0–1 links (slow burn)",
    hoursPerWeek: "30 min",
    how: "Contact Kerala Tourism, Rajasthan Tourism, Himachal Pradesh Tourism digital teams via their contact pages. Offer your detailed guide for their 'travel resources' section. Requires follow-up — treat as a 3-month project per board.",
  },
  {
    name: "Travel forums (IndiaMike, TripAdvisor, LP Thorn Tree)",
    effort: "Low",
    linksPerMonth: "1–3 referral links",
    hoursPerWeek: "30 min",
    how: "Build profiles and answer questions that match your content. These forums are mostly nofollow but drive real referral traffic that Google notices. Post signature links only where forum rules allow.",
  },
  {
    name: "Wikipedia citations",
    effort: "Low",
    linksPerMonth: "1–5 nofollow links",
    hoursPerWeek: "30 min",
    how: "Find Wikipedia pages for destinations you've covered. Look for [citation needed] tags or outdated references. Add your guide as a citation where it genuinely adds verifiable detail. Nofollow but signals authority to Google.",
  },
  {
    name: "Skyscraper technique",
    effort: "High",
    linksPerMonth: "2–5 links (batched)",
    hoursPerWeek: "4 hrs (one-time per post)",
    how: "Find a top-ranking India travel guide (e.g., 'best time to visit Rajasthan' on a DA 50 site). Build a measurably better version: more detail, photos, updated prices. Use Ahrefs/Ubersuggest to find who links to the original. Email them: 'I built a better version of [article they link to].'",
  },
  {
    name: "Pinterest",
    effort: "Low",
    linksPerMonth: "Not a backlink — referral traffic",
    hoursPerWeek: "30 min",
    how: "Create tall pins (1000x1500px) for every destination guide. Pin 3/week. Pinterest drives referral traffic that signals real visitors to Google. Particularly strong for 'itinerary' and 'best places' content. Use Canva for free templates.",
  },
  {
    name: "Reciprocal links (non-competing niches)",
    effort: "Low",
    linksPerMonth: "2–4 links",
    hoursPerWeek: "30 min",
    how: "Partner with food blogs, photography blogs, expat blogs in India. 'I link to your Rajasthan food guide from my Jaipur itinerary, you link to my Jaipur guide from your food post.' Only do this with relevant, quality sites.",
  },
  {
    name: "Press releases (milestones only)",
    effort: "Low",
    linksPerMonth: "5–15 nofollow links",
    hoursPerWeek: "1 hr (occasional)",
    how: "When you hit real milestones (1,000 guides, partnership with tourism board), submit to free PR sites: PRLog, OpenPR, 24-7PressRelease. Low-quality links but builds citation footprint. Only use for genuine news.",
  },
  {
    name: "YouTube video descriptions",
    effort: "Medium",
    linksPerMonth: "Referral traffic",
    hoursPerWeek: "1 hr",
    how: "If/when you make Hindi Shorts or destination videos, link to your written guides in the description. Video search traffic is different from text search — cross-pollinate audiences. Even 1 viral Short can send 10K visits.",
  },
  {
    name: "Local Indian travel directories",
    effort: "Low",
    linksPerMonth: "3–5 mostly nofollow",
    hoursPerWeek: "30 min",
    how: "Submit to: TraveList, TripHobo, HolidayIQ, Justdial travel section, Sulekha travel. These are low DA but build citation signals and send occasional referral traffic from Indian users.",
  },
];

const GLOBAL_TIERS: GlobalTier[] = [
  {
    tier: 1,
    label: "Launch First",
    period: "Months 7–12 (Oct 2026–Mar 2027)",
    countries: ["Bali (Indonesia)", "Phuket & Bangkok (Thailand)", "Singapore", "Kuala Lumpur (Malaysia)"],
    why: "Highest Indian outbound tourist interest. Your affiliate networks (Booking.com, Viator, GetYourGuide) cover all these destinations. Content gap exists — most India travel sites don't cover SE Asia.",
    audience: "Indian travellers planning their first international trip",
    contentAngle: "Indian-specific: visa on arrival guide, halal/vegetarian food spots, direct flight costs from major Indian cities, budget breakdown in INR",
    rpmRange: "$3–6 RPM (mixed Indian + international audience)",
    affiliates: "Booking.com, Agoda, Klook, Viator, GetYourGuide",
  },
  {
    tier: 2,
    label: "Expand",
    period: "Months 13–18 (Apr–Sep 2027)",
    countries: ["Vietnam (Hanoi, Ho Chi Minh, Da Nang)", "Cambodia (Siem Reap, Phnom Penh)", "Sri Lanka", "Nepal", "Bhutan"],
    why: "Top Indian outbound bucket list destinations. High search volume from Indian travellers. Lower content competition than Bali/Thailand. Bhutan and Nepal have unique permit systems — perfect for detailed guides.",
    audience: "Indian travellers seeking adventure, culture, and value",
    contentAngle: "Permit logistics (Bhutan), circuit routes (Vietnam), Indian embassy contacts, INR-to-local-currency guidance, vegetarian restaurant lists",
    rpmRange: "$4–8 RPM (better English-language searchers mixed in)",
    affiliates: "Booking.com, Viator, local tour operators, Bhutan certified agents",
  },
  {
    tier: 3,
    label: "High-RPM Markets",
    period: "Months 19–24 (Oct 2027–Mar 2028)",
    countries: ["Dubai (UAE)", "Istanbul & Cappadocia (Turkey)", "Egypt (Cairo, Luxor)", "Morocco (Marrakech, Fes)", "Prague, Budapest, Krakow (Eastern Europe)"],
    why: "English-speaking global traffic with $8–15 RPM vs Indian traffic at $1–2 RPM. Indians increasingly visit all these destinations. Eastern Europe is underserved compared to Western Europe but growing fast.",
    audience: "International English-speaking travellers + ambitious Indian travellers",
    contentAngle: "Best neighbourhoods to stay, safety for solo travellers, day trip itineraries, off-season travel, budget vs luxury breakdowns",
    rpmRange: "$8–15 RPM — highest income per 1,000 visitors",
    affiliates: "Booking.com, GetYourGuide (dominant in Europe), Airbnb, Rentalcars.com",
  },
  {
    tier: 4,
    label: "Avoid Initially",
    period: "Skip until Year 3+",
    countries: ["USA (NYC, LA, national parks)", "UK domestic", "Paris, Rome, Barcelona, Amsterdam"],
    why: "These markets are dominated by sites with 10+ years of backlinks and domain authority. Lonely Planet, TripAdvisor, Condé Nast Traveler, and thousands of English-speaking travel bloggers have saturated every keyword. You will not rank in months 1–24.",
    audience: "Not your audience yet",
    contentAngle: "Not applicable — revisit after you have 200+ backlinks and DA 30+",
    rpmRange: "$15–25 RPM but near-zero traffic for a new site",
    affiliates: "Not relevant yet",
  },
];

const WEEKLY_RHYTHM = [
  { day: "Monday", tasks: ["Write Post 1 (2 hrs)"], hours: 2 },
  { day: "Tuesday", tasks: ["Reddit + Quora answers — 3 genuine replies (1 hr)"], hours: 1 },
  { day: "Wednesday", tasks: ["Write Post 2 (2 hrs)", "1 backlink outreach email (15 min)"], hours: 2.25 },
  { day: "Thursday", tasks: ["HARO/Qwoted responses (30 min)", "Pinterest — create 2 pins (30 min)"], hours: 1 },
  { day: "Friday", tasks: ["Write Post 3 (2 hrs)"], hours: 2 },
  { day: "Saturday", tasks: ["Update 1 old post with new prices/info (45 min)", "Internal linking check on new posts (30 min)"], hours: 1.25 },
  { day: "Sunday", tasks: ["GSC review — which posts got impressions this week (20 min)", "Plan next week's 3 posts (20 min)"], hours: 0.67 },
];

const FAILURE_MODES: FailureMode[] = [
  {
    risk: "Google algorithm update wipes early rankings",
    mitigation: "Diversify traffic sources from Day 1 — Reddit, Pinterest, email list. Never rely 100% on Google.",
  },
  {
    risk: "AdSense rejected (common for new sites with thin pages)",
    mitigation: "Apply only after 6+ months and 50+ substantial posts. Use Ezoic as a lower-barrier fallback while building toward Mediavine.",
  },
  {
    risk: "Mediavine rejects at 50K sessions (happens — quality standards vary)",
    mitigation: "Apply to Raptive as alternative. Both have similar income potential. Don't treat Mediavine as the only path.",
  },
  {
    risk: "Solo founder burnout at Month 9–12 when results are slow",
    mitigation: "Schedule one 'no publish' week every 2 months. Track leading indicators (impressions, clicks) not just revenue. Slow is normal — the compounding hasn't started yet.",
  },
  {
    risk: "AI-generated content floods the niche and outranks you",
    mitigation: "Your moat is personal experience and local knowledge. Add first-person detail, real photos, and current on-the-ground accuracy that AI cannot replicate.",
  },
  {
    risk: "Affiliate programs change commission rates or close (happened with Amazon Associates)",
    mitigation: "Never rely on a single affiliate partner. Maintain accounts with Travelpayouts, Booking.com (Awin), Viator, GetYourGuide, and Klook simultaneously.",
  },
];

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

function SectionAnchor({ id }: { id: string }) {
  return <span id={id} className="block" style={{ scrollMarginTop: "80px" }} />;
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal/10 text-teal">
          <Icon size={18} />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-muted font-light ml-12 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function EffortBadge({ effort }: { effort: BacklinkTactic["effort"] }) {
  const map = {
    Low: "bg-teal/10 text-teal",
    Medium: "bg-gold/20 text-gold-dark",
    High: "bg-rust/10 text-rust",
  };
  return (
    <span className={`inline-block text-2xs tracking-[0.1em] uppercase font-medium px-2 py-0.5 rounded-sm ${map[effort]}`}>
      {effort} effort
    </span>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  const [open, setOpen] = useState(false);
  const phaseColors: Record<number, string> = {
    1: "border-l-teal",
    2: "border-l-gold",
    3: "border-l-rust",
    4: "border-l-ink-mid",
  };
  return (
    <div className={`border border-parchment-2 border-l-4 ${phaseColors[phase.id]} bg-white rounded-xl overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-parchment/40 transition-colors"
      >
        <div className="flex-1">
          <p className="text-2xs tracking-[0.15em] uppercase text-muted font-medium mb-1">
            {phase.months} · {phase.period}
          </p>
          <h3 className="font-serif text-xl font-light text-ink">{phase.label}</h3>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="text-xs text-muted">
              <span className="text-ink font-medium">{phase.visitGoal}</span> visits
            </span>
            <span className="text-xs text-muted">
              <span className="text-ink font-medium">{phase.revenueGoal}</span> revenue
            </span>
            <span className="text-xs text-muted">
              <span className="text-teal font-medium">{phase.posts} posts</span> to write
            </span>
            <span className="text-xs text-muted">
              <span className="text-teal font-medium">{phase.backlinks}+ backlinks</span> target
            </span>
          </div>
        </div>
        <div className="mt-1 text-muted flex-shrink-0">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-parchment-2 pt-5">
          <p className="text-sm text-muted font-light leading-relaxed mb-4">
            <span className="text-ink font-medium">Focus: </span>{phase.focus}
          </p>
          <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-3">Deliverables</p>
          <ul className="space-y-2">
            {phase.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-ink-mid font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function BacklinkRow({ tactic, idx }: { tactic: BacklinkTactic; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-parchment-2 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-parchment/30"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-4 flex items-center justify-between gap-4 hover:bg-parchment/60 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm font-medium text-ink">{tactic.name}</span>
            <EffortBadge effort={tactic.effort} />
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-muted">
            <span>{tactic.linksPerMonth}</span>
            <span>{tactic.hoursPerWeek}/week</span>
          </div>
        </div>
        <div className="text-muted flex-shrink-0">
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-sm text-muted font-light leading-relaxed border-l-2 border-teal pl-3">
            {tactic.how}
          </p>
        </div>
      )}
    </div>
  );
}

function TierCard({ tier }: { tier: GlobalTier }) {
  const [open, setOpen] = useState(false);
  const colors: Record<number, { border: string; label: string }> = {
    1: { border: "border-l-teal", label: "bg-teal/10 text-teal" },
    2: { border: "border-l-gold", label: "bg-gold/20 text-gold-dark" },
    3: { border: "border-l-rust", label: "bg-rust/10 text-rust" },
    4: { border: "border-l-muted", label: "bg-muted/10 text-muted" },
  };
  const c = colors[tier.tier];
  return (
    <div className={`border border-parchment-2 border-l-4 ${c.border} bg-white rounded-xl overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-parchment/40 transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-2xs tracking-[0.1em] uppercase font-medium px-2 py-0.5 rounded-sm ${c.label}`}>
              Tier {tier.tier}
            </span>
            <span className="text-2xs text-muted tracking-wide">{tier.period}</span>
          </div>
          <h3 className="font-serif text-lg font-light text-ink mb-2">{tier.label}</h3>
          <div className="flex flex-wrap gap-2">
            {tier.countries.map((country) => (
              <span key={country} className="text-xs bg-parchment text-ink-mid px-2 py-0.5 rounded">
                {country}
              </span>
            ))}
          </div>
        </div>
        <div className="text-muted flex-shrink-0 mt-1">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-parchment-2 pt-5 space-y-4">
          <div>
            <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-1">Why this region</p>
            <p className="text-sm text-muted font-light leading-relaxed">{tier.why}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-1">Target audience</p>
              <p className="text-sm text-muted font-light">{tier.audience}</p>
            </div>
            <div>
              <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-1">Expected RPM</p>
              <p className="text-sm font-medium text-ink">{tier.rpmRange}</p>
            </div>
          </div>
          <div>
            <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-1">Content angle</p>
            <p className="text-sm text-muted font-light leading-relaxed">{tier.contentAngle}</p>
          </div>
          <div>
            <p className="text-2xs tracking-[0.12em] uppercase text-muted mb-1">Affiliate partners</p>
            <p className="text-sm text-muted font-light">{tier.affiliates}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── STICKY NAV ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Reality Check", href: "#reality" },
  { label: "24-Month Plan", href: "#phases" },
  { label: "Backlink Playbook", href: "#backlinks" },
  { label: "Global Strategy", href: "#global" },
  { label: "Weekly Rhythm", href: "#rhythm" },
  { label: "Failure Modes", href: "#failure" },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function RoadmapClient() {
  return (
    <div className="bg-cream min-h-screen pt-[72px]">
      {/* Hero */}
      <div className="bg-ink text-white px-6 py-14 md:py-20">
        <div className="max-w-[820px] mx-auto">
          <p className="text-2xs tracking-[0.2em] uppercase text-gold mb-3">Public Accountability Document</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight mb-4">
            IncredibleItinerary Growth Roadmap
          </h1>
          <p className="text-white/70 font-light leading-relaxed max-w-[600px]">
            A 24-month execution plan to build a sustainable travel media business from India to global scale.
            The numbers here are honest — not aspirational. Revenue projections are based on what affiliate
            travel sites actually earn at each traffic milestone.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60 font-light">
            <span>Started: April 2026</span>
            <span>·</span>
            <span>362 live guides</span>
            <span>·</span>
            <span>Solo founder</span>
            <span>·</span>
            <span>Zero paid ads</span>
          </div>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <nav className="sticky top-[64px] z-30 bg-white border-b border-parchment-2 shadow-sm overflow-x-auto">
        <div className="max-w-[820px] mx-auto px-6 flex gap-0">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-shrink-0 px-4 py-3.5 text-xs text-muted font-medium tracking-wide hover:text-teal hover:bg-parchment/60 transition-colors border-b-2 border-transparent hover:border-teal whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-[820px] mx-auto px-6 py-14 space-y-20">

        {/* ── SECTION 1: REALITY CHECK ── */}
        <section>
          <SectionAnchor id="reality" />
          <SectionHeading
            icon={AlertTriangle}
            title="Honest Revenue Expectations"
            subtitle="Based on real affiliate site income data — not best-case scenarios. Anyone promising faster results is selling a course."
          />

          {/* Warning callout */}
          <div className="bg-rust/8 border border-rust/20 rounded-xl p-6 mb-8">
            <p className="text-sm font-medium text-rust mb-2">The Google Sandbox is Real</p>
            <p className="text-sm text-muted font-light leading-relaxed">
              New domains typically take 6–12 months before Google trusts them enough to rank for competitive
              keywords. During this period, you can publish consistently, build backlinks, and do everything
              right — and still see near-zero organic traffic. This is normal. The work you do in months 1–6
              pays off in months 9–18. Do not judge the strategy by Month 3 results.
            </p>
          </div>

          {/* Revenue timeline table */}
          <div className="border border-parchment-2 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium">Period</th>
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium">Monthly Traffic</th>
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium">Realistic Revenue</th>
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium hidden md:table-cell">Primary Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "Months 1–6", label: "Apr–Sep 2026", traffic: "0 – 5,000", revenue: "₹0 – 3,000", source: "Possible first affiliate clicks only" },
                    { period: "Months 7–12", label: "Oct 2026–Mar 2027", traffic: "5,000 – 20,000", revenue: "₹3,000 – 15,000", source: "Affiliate + AdSense if approved" },
                    { period: "Months 13–18", label: "Apr–Sep 2027", traffic: "20,000 – 60,000", revenue: "₹15,000 – 50,000", source: "AdSense + affiliate + itinerary service" },
                    { period: "Months 19–24", label: "Oct 2027–Mar 2028", traffic: "60,000 – 150,000", revenue: "₹50,000 – 1,50,000", source: "Mediavine/Raptive + multiple affiliate programs" },
                    { period: "Year 3+", label: "Apr 2028 onwards", traffic: "150,000+", revenue: "₹1,50,000 – 5,00,000", source: "Display ads + affiliate + sponsored + products" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-parchment-2 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-parchment/20"}`}>
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{row.period}</p>
                        <p className="text-xs text-muted mt-0.5">{row.label}</p>
                      </td>
                      <td className="px-5 py-4 text-muted font-light">{row.traffic}</td>
                      <td className="px-5 py-4">
                        <span className={`font-medium ${i >= 2 ? "text-teal" : "text-muted"}`}>{row.revenue}</span>
                      </td>
                      <td className="px-5 py-4 text-muted font-light hidden md:table-cell text-xs">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-muted font-light mt-4 leading-relaxed">
            These ranges assume consistent 3 posts/week, active backlink building, and no major Google penalties.
            Upper-range revenue requires successful Mediavine approval and high-RPM global traffic — not guaranteed.
            Most new travel sites earn ₹0 for the first 6 months even with good content.
          </p>
        </section>

        {/* ── SECTION 2: 24-MONTH PLAN ── */}
        <section>
          <SectionAnchor id="phases" />
          <SectionHeading
            icon={TrendingUp}
            title="24-Month Phased Plan"
            subtitle="Four phases from India-only foundation to global high-RPM markets. Click each phase for full deliverables."
          />

          {/* Visual timeline */}
          <div className="grid grid-cols-4 gap-0 mb-8 overflow-hidden rounded-xl border border-parchment-2">
            {[
              { num: 1, label: "Foundation", period: "M1–6", color: "bg-teal" },
              { num: 2, label: "First Income", period: "M7–12", color: "bg-gold" },
              { num: 3, label: "Regional", period: "M13–18", color: "bg-rust" },
              { num: 4, label: "Global", period: "M19–24", color: "bg-ink-mid" },
            ].map((p, i) => (
              <div key={i} className={`${p.color} text-white text-center py-4 px-2`}>
                <p className="text-xs font-medium opacity-80">{p.period}</p>
                <p className="text-sm font-medium mt-1">{p.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {PHASES.map((phase) => (
              <PhaseCard key={phase.id} phase={phase} />
            ))}
          </div>
        </section>

        {/* ── SECTION 3: BACKLINK PLAYBOOK ── */}
        <section>
          <SectionAnchor id="backlinks" />
          <SectionHeading
            icon={Link2}
            title="Backlink Playbook"
            subtitle="The most underestimated part of SEO. Backlinks are votes of trust — Google uses them to decide whether to rank you above competitors with the same content quality. Click each tactic for the exact how-to."
          />

          {/* Priority callout */}
          <div className="bg-teal/8 border border-teal/20 rounded-xl p-5 mb-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-serif text-xl text-teal">HARO</p>
              <p className="text-xs text-muted mt-1">Highest quality links. Do this first.</p>
            </div>
            <div>
              <p className="font-serif text-xl text-teal">Reddit/Quora</p>
              <p className="text-xs text-muted mt-1">Referral traffic + community trust.</p>
            </div>
            <div>
              <p className="font-serif text-xl text-teal">Guest Posts</p>
              <p className="text-xs text-muted mt-1">Best do-follow links from DA 20–40 sites.</p>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Tactics listed", value: "15" },
              { label: "Target Month 6", value: "50+ links" },
              { label: "Target Month 12", value: "100+ links" },
              { label: "Weekly time needed", value: "~3 hrs" },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-parchment-2 rounded-lg p-4 text-center">
                <p className="font-serif text-xl text-ink">{s.value}</p>
                <p className="text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="border border-parchment-2 rounded-xl overflow-hidden">
            {BACKLINK_TACTICS.map((tactic, idx) => (
              <BacklinkRow key={idx} tactic={tactic} idx={idx} />
            ))}
          </div>
        </section>

        {/* ── SECTION 4: GLOBAL STRATEGY ── */}
        <section>
          <SectionAnchor id="global" />
          <SectionHeading
            icon={Globe}
            title="Global Expansion Strategy"
            subtitle="Country-by-country expansion in 4 tiers. The order matters — getting Tier 1 wrong wastes 6 months on markets that won't convert."
          />

          <div className="space-y-4">
            {GLOBAL_TIERS.map((tier) => (
              <TierCard key={tier.tier} tier={tier} />
            ))}
          </div>

          {/* RPM context */}
          <div className="mt-6 bg-parchment border border-parchment-2 rounded-xl p-5">
            <p className="text-xs font-medium text-ink mb-3">What RPM means for income</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                { audience: "Indian traffic", rpm: "$1–2 RPM", income: "10,000 visits = ₹800–1,600/month from ads" },
                { audience: "SE Asia mix", rpm: "$3–6 RPM", income: "10,000 visits = ₹2,500–5,000/month from ads" },
                { audience: "European/English", rpm: "$8–15 RPM", income: "10,000 visits = ₹6,500–12,500/month from ads" },
              ].map((row, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-parchment-2">
                  <p className="font-medium text-ink text-xs">{row.audience}</p>
                  <p className="text-teal font-medium mt-1">{row.rpm}</p>
                  <p className="text-xs text-muted font-light mt-1">{row.income}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WEEKLY RHYTHM ── */}
        <section>
          <SectionAnchor id="rhythm" />
          <SectionHeading
            icon={Calendar}
            title="Weekly Execution Rhythm"
            subtitle="10 hours/week total. Sustainable for a solo founder with a day job. Consistency over 24 months beats intensity over 3 months every time."
          />

          <div className="border border-parchment-2 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium w-28">Day</th>
                    <th className="text-left px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium">Tasks</th>
                    <th className="text-right px-5 py-3.5 text-2xs tracking-[0.12em] uppercase text-muted font-medium w-20">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {WEEKLY_RHYTHM.map((row, i) => (
                    <tr key={i} className={`border-b border-parchment-2 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-parchment/20"}`}>
                      <td className="px-5 py-4 font-medium text-sm text-ink align-top">{row.day}</td>
                      <td className="px-5 py-4 align-top">
                        <ul className="space-y-1">
                          {row.tasks.map((t, j) => (
                            <li key={j} className="text-sm text-muted font-light">{t}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-5 py-4 text-right text-sm text-teal font-medium align-top">{row.hours}h</td>
                    </tr>
                  ))}
                  <tr className="bg-ink text-white">
                    <td className="px-5 py-3 font-medium text-sm">Total</td>
                    <td className="px-5 py-3 text-sm text-white/70">3 posts published · 6 backlink actions · analytics reviewed</td>
                    <td className="px-5 py-3 text-right font-medium text-gold">~10h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Non-negotiables", items: ["3 posts every single week", "3 Reddit/Quora answers every week", "1 backlink outreach action every week"] },
              { title: "Monthly additions", items: ["1 old post updated with new prices", "1 GSC review of top/bottom performers", "5 new Pinterest pins from existing content"] },
              { title: "Quarterly reviews", items: ["Which keywords are gaining impressions", "Top 5 affiliate earners — expand those", "Lowest traffic posts — update or delete"] },
            ].map((col, i) => (
              <div key={i} className="bg-white border border-parchment-2 rounded-lg p-4">
                <p className="text-2xs tracking-[0.12em] uppercase text-muted font-medium mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-ink-mid font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: FAILURE MODES ── */}
        <section>
          <SectionAnchor id="failure" />
          <SectionHeading
            icon={XCircle}
            title="What Can Go Wrong"
            subtitle="Every business plan has failure modes. These are the specific risks for a new travel affiliate site in 2026."
          />

          <div className="space-y-3">
            {FAILURE_MODES.map((item, i) => (
              <div key={i} className="bg-white border border-parchment-2 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rust/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle size={12} className="text-rust" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink mb-1">{item.risk}</p>
                    <p className="text-sm text-muted font-light leading-relaxed">
                      <span className="text-teal font-medium">Mitigation: </span>
                      {item.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="border-t border-parchment-2 pt-10">
          <div className="bg-ink text-white rounded-2xl p-8 md:p-10 text-center">
            <p className="text-2xs tracking-[0.2em] uppercase text-gold mb-3">Public Accountability</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">
              This roadmap is public so I can be held to it.
            </h2>
            <p className="text-white/70 font-light leading-relaxed max-w-[480px] mx-auto mb-6 text-sm">
              If the milestones are wrong, if I miss targets, or if I discover better strategies — this page
              will be updated. No hidden pivots. If you are building a similar site and want to compare notes,
              email me.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-ink text-xs tracking-[0.1em] uppercase font-medium px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
              >
                <ExternalLink size={13} />
                Email if I&apos;m off-track
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-xs tracking-[0.1em] uppercase font-medium px-6 py-3 rounded-sm hover:border-white/50 hover:text-white transition-colors"
              >
                Read the guides
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
