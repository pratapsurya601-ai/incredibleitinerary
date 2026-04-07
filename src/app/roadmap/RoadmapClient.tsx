"use client";
import { useState } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CURRENT_STATE = {
  posts: 362,
  indexedPages: 384,
  traffic: "~0 organic (brand new)",
  affiliates: ["Booking.com aid=2820480", "Viator pid=P00295956", "GetYourGuide PSZA5UI"],
  tools: 2,
  pdfs: 10,
  monthlyRevenue: "₹0 (pre-traffic)",
};

const PHASES = [
  {
    id: 1,
    label: "Phase 1",
    emoji: "🇮🇳",
    title: "Own India",
    timeline: "Apr 2026 – Oct 2026",
    duration: "6 months",
    color: "bg-teal",
    light: "bg-teal/8 border-teal/25",
    textColor: "text-teal",
    status: "active",
    goal: "Become the #1 India itinerary site. First 25K monthly visitors. First ₹20K/month.",
    metric: "25K monthly visits",
    why: "You already have the content and the personal authority for India. This is the fastest path to real traffic. Don't dilute by going global too early — own one market deeply first.",
    tasks: [
      { done: true,  text: "362 hand-written India posts live and indexed" },
      { done: true,  text: "Personal brand established — Surya, Delhi, real trips" },
      { done: true,  text: "Technical SEO foundation: sitemap, structured data, IndexNow" },
      { done: true,  text: "Category filters fixed and working" },
      { done: true,  text: "14 previously template posts now have full content" },
      { done: false, text: "Submit all 362 posts to Google Search Console manually (15/day, 24 days)" },
      { done: false, text: "Write 20 more India guides: Arunachal, Nagaland, Mizoram, Manipur, Tripura, Meghalaya deep dives, Coorg, Ooty, Mysore, Pondicherry, Hampi extended, Gokarna, Varkala deep dive, Dalhousie, Kasol, Tirthan Valley, Chopta extended, Binsar, Jim Corbett, Ranthambore" },
      { done: false, text: "Add first-person voice to Delhi and Rishikesh posts (you've been, zero personal references currently)" },
      { done: false, text: "Build 5 more PDF guides: Kerala, Leh Ladakh, Uttarakhand, Northeast, Golden Triangle" },
      { done: false, text: "Get first 10 backlinks: answer 3 Reddit posts/week, guest post on 2 India travel blogs" },
      { done: false, text: "Start email list properly — real signup incentive (free PDF on signup)" },
      { done: false, text: "Build a media kit page once 5K monthly visitors hit" },
      { done: false, text: "Apply to Mediavine/Raptive when sessions hit 50K" },
    ],
    revenue: {
      affiliate: "₹5K–20K/month",
      pdfs: "₹2K–8K/month",
      ads: "Not yet",
      total: "₹7K–28K/month",
    },
  },
  {
    id: 2,
    label: "Phase 2",
    emoji: "🌏",
    title: "Southeast Asia + Display Ads",
    timeline: "Oct 2026 – Apr 2027",
    duration: "6 months",
    color: "bg-gold-dark",
    light: "bg-gold/8 border-gold/25",
    textColor: "text-gold-dark",
    status: "upcoming",
    goal: "Hit 50K monthly sessions. Launch display ads. Expand to 6 high-intent international destinations.",
    metric: "50K monthly visits",
    why: "Bali, Thailand, Singapore, Japan, Dubai, Maldives are the top 6 destinations searched by Indian travellers. You already have some content here. These are the international destinations with the most India-origin searchers — easiest traffic after India itself.",
    tasks: [
      { done: false, text: "Hit 50K sessions → apply for Mediavine or Raptive display ads (₹75K–2L/month passive at this scale)" },
      { done: false, text: "Write 30 deep, researched guides for: Bali (10 guides), Thailand (8), Japan (8), Dubai (4), Singapore (4), Maldives (4) — each needs to feel as good as your India guides" },
      { done: false, text: "Brand evolution: site header changes from 'India, planned properly' to 'Travel, planned properly. Real research. No filler.' — your India personal travel remains the anchor, international is obsessively researched" },
      { done: false, text: "Launch custom itinerary service at ₹1,499–2,999/plan — you already have the inquiry modal, charge for it" },
      { done: false, text: "Affiliate: add Klook links to all Asia guides (higher commission than Viator for Asia)" },
      { done: false, text: "Build 10 more PDFs for international destinations: Bali, Thailand, Japan, Dubai, Singapore, Maldives, Vietnam, Indonesia, South Korea, Malaysia" },
      { done: false, text: "Launch newsletter — one India tip per week; by end of phase target 500 real subscribers" },
      { done: false, text: "Start building a backlink profile: HARO requests, India travel journalists, state tourism boards" },
      { done: false, text: "Add Google Adsense as interim until Mediavine threshold hit" },
      { done: false, text: "Build a 'Trip Cost Calculator' for international destinations (input: days + travel style → estimated cost)" },
    ],
    revenue: {
      affiliate: "₹25K–60K/month",
      pdfs: "₹8K–20K/month",
      ads: "₹20K–80K/month (display)",
      custom: "₹15K–40K/month (itineraries)",
      total: "₹68K–2L/month",
    },
  },
  {
    id: 3,
    label: "Phase 3",
    emoji: "🌍",
    title: "Go Global — Selective",
    timeline: "Apr 2027 – Jan 2028",
    duration: "9 months",
    color: "bg-ink",
    light: "bg-ink/5 border-ink/20",
    textColor: "text-ink",
    status: "future",
    goal: "200K monthly visitors. Coverage across 40 countries. ₹3–5L/month. First team member.",
    metric: "200K monthly visits",
    why: "By now you have domain authority, real traffic, and proven revenue. Time to expand systematically into Europe, Americas, and Africa — not all at once, but 2-3 new destinations per week, highest-search-volume first.",
    tasks: [
      { done: false, text: "Hire first researcher/writer — someone who has lived in or extensively travelled Europe (₹25K–40K/month, remote). They produce 3 guides/week to your quality standard." },
      { done: false, text: "Europe first: Paris, Rome, Barcelona, Amsterdam, Prague, Vienna, Santorini, Amalfi Coast, Swiss Alps, London, Lisbon, Istanbul — each city needs 5–8 guide variants (3 days, 5 days, budget, couples)" },
      { done: false, text: "Americas expansion: New York, Los Angeles, Miami, Canada road trips, Machu Picchu, Amazon, Patagonia — again, highest Indian-traveller search volume first" },
      { done: false, text: "Africa: Safari circuit (Kenya, Tanzania, South Africa), Morocco, Egypt — growing interest from Indian HNI travellers" },
      { done: false, text: "Launch itinerary builder v1 — interactive day-by-day planner embedded on site (no login required, free, affiliate links embedded in hotel recommendations)" },
      { done: false, text: "Apply to India Tourism Board, Rajasthan Tourism, Kerala Tourism for content partnerships — at 200K monthly visitors you have genuine leverage" },
      { done: false, text: "Sponsorships: ₹25K–₹1L per sponsored travel brand post — build a media kit with your traffic numbers" },
      { done: false, text: "Pinterest — 10 pins per day from existing posts (travel Pinterest converts extremely well to blog traffic); one person can manage this" },
      { done: false, text: "First YouTube videos — short-form (Reels/Shorts) embedded on blog posts: 60-second 'Is [destination] worth it?' format" },
      { done: false, text: "Target Domain Authority: 35+ (from ~0 currently). Need 50+ backlinks from DA40+ sites." },
    ],
    revenue: {
      affiliate: "₹80K–1.5L/month",
      pdfs: "₹20K–50K/month",
      ads: "₹1L–3L/month",
      custom: "₹30K–80K/month",
      sponsorships: "₹50K–2L/month",
      total: "₹2.8L–7.8L/month",
    },
  },
  {
    id: 4,
    label: "Phase 4",
    emoji: "🚀",
    title: "Platform — Not Just a Blog",
    timeline: "Jan 2028 – Dec 2028",
    duration: "12 months",
    color: "bg-purple-600",
    light: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
    status: "future",
    goal: "500K monthly visitors. Launch paid itinerary builder SaaS. Team of 5. ₹10L+/month.",
    metric: "500K monthly visits",
    why: "At this scale, you stop being a travel blog and become a travel planning platform. The itinerary builder becomes a standalone product. Your 362+ guides are the knowledge base that powers it.",
    tasks: [
      { done: false, text: "Itinerary Builder v2 — paid SaaS tier at ₹199/month: AI-assisted, custom day-by-day plans, PDF export, hotel links embedded. Free tier keeps guides accessible." },
      { done: false, text: "Team of 5: 1 lead writer (you), 2 destination researchers, 1 SEO manager, 1 social/Pinterest manager" },
      { done: false, text: "Coverage: 80+ countries, 500+ destinations, 2,000+ guides total" },
      { done: false, text: "Launch affiliate program — other bloggers embed your itinerary builder and earn 20% referral commission" },
      { done: false, text: "White-label itinerary tool for travel agencies — B2B revenue stream at ₹5K–25K/month per agency client" },
      { done: false, text: "App: Android + iOS itinerary planner (offline mode) — freemium, ₹499 one-time or ₹99/month" },
      { done: false, text: "Partnerships: direct hotel partnerships (better rates than Booking.com, higher margins), tour operator white-label" },
      { done: false, text: "PR: pitch to Economic Times Travel, Condé Nast Traveller India, Lonely Planet — at 500K visitors you are a genuine story" },
    ],
    revenue: {
      saas: "₹2L–8L/month (itinerary builder subscribers)",
      affiliate: "₹2L–4L/month",
      ads: "₹3L–6L/month",
      sponsorships: "₹1L–4L/month",
      b2b: "₹1L–3L/month",
      total: "₹9L–25L/month",
    },
  },
  {
    id: 5,
    label: "Phase 5",
    emoji: "🌐",
    title: "Global Authority",
    timeline: "2029+",
    duration: "Ongoing",
    color: "bg-amber-600",
    light: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    status: "vision",
    goal: "1M+ monthly visitors. The most detailed free itinerary resource on the internet. ₹50L+/month ARR.",
    metric: "1M+ monthly visits",
    why: "Lonely Planet built a publishing empire. TripAdvisor built a review empire. You build the itinerary empire — the place where anyone, anywhere, planning any trip goes first.",
    tasks: [
      { done: false, text: "Every country in the world covered with at least 3 guides" },
      { done: false, text: "Itinerary builder used by 100K+ travellers/month" },
      { done: false, text: "Brand recognition: 'Just use IncredibleItinerary' as the standard answer on Reddit travel threads" },
      { done: false, text: "Acquisition interest from major travel brands (Booking Holdings, Airbnb, MakeMyTrip) — the exit opportunity" },
      { done: false, text: "Or: raise a seed round, hire aggressively, become the Lonely Planet of the internet age" },
    ],
    revenue: {
      total: "₹50L+/month",
    },
  },
];

const HONEST_CHALLENGES = [
  {
    challenge: "You haven't been to most international destinations",
    solution: "Acknowledge it on the About page — change brand to 'obsessively researched'. Use primary sources: local blogs, tourism boards, verified travellers. When you hire researchers in Phase 3, use people who have actually lived in those regions.",
    severity: "medium",
  },
  {
    challenge: "SEO takes 6–12 months minimum",
    solution: "There are no shortcuts. Your first 6 months will feel like shouting into the void. This is normal. The posts you write in April 2026 will rank in October 2026. Trust the process, keep publishing.",
    severity: "medium",
  },
  {
    challenge: "362 posts but zero backlinks",
    solution: "No backlinks = Google doesn't trust you yet regardless of content quality. Your single highest-ROI activity right now is Reddit answers and Quora answers that link back to your guides. 3 quality answers/week = 150+/year.",
    severity: "high",
  },
  {
    challenge: "The generated posts (1,208) are noindexed but still exist",
    solution: "You have two options: (A) Gradually upgrade the best-performing generated posts to real guides — 2-3 per week; or (B) Delete them entirely in 6 months if they get zero user engagement. Don't keep dead weight forever.",
    severity: "low",
  },
  {
    challenge: "Competition from Lonely Planet, Nomadic Matt, Wikitravel",
    solution: "They're generic. You're specific. Lonely Planet covers 'Kashmir in 5 days' in 400 words. Your guide is 4,000 words with real prices from 2026, common mistakes, and a day-by-day structure nobody else offers at this detail level.",
    severity: "low",
  },
];

const WEEK_BY_WEEK = [
  { week: "Week 1–2 (Now)", task: "Submit all 362 posts to GSC (15/day). Fix the remaining Rishikesh and Delhi posts to add first-person voice.", priority: "high" },
  { week: "Week 3–4", task: "Write 3 new India guides (Arunachal Pradesh, Nagaland, Jim Corbett). Answer 6 Reddit travel questions linking to your guides.", priority: "high" },
  { week: "Week 5–6", task: "Build 2 new PDFs (Kerala extended, Leh Ladakh). Add Klook affiliate links to all international posts.", priority: "medium" },
  { week: "Week 7–8", task: "Write 3 more India guides. Answer 6 Reddit questions. Start tracking which posts get first GSC impressions.", priority: "high" },
  { week: "Month 2", task: "Double down on whatever 5 posts get first impressions. Update them with even better content. Internal linking audit.", priority: "high" },
  { week: "Month 3", task: "First 10 Reddit/Quora backlinks should be live. Write Hindi versions of top 3 India guides. Build newsletter welcome sequence.", priority: "medium" },
  { week: "Month 4–5", task: "If getting 5K+ monthly visits: build media kit. If not: analyse which posts Google is showing and why, fix gap.", priority: "high" },
  { week: "Month 6", task: "Evaluate: Are you at 25K visits/month? If yes: start Southeast Asia expansion. If no: extend Phase 1 and fix what's not working.", priority: "high" },
];

const CONTENT_PRIORITIES = [
  { region: "India — Northeast", guides: 8, reason: "Fastest growing search segment, almost zero quality competition", urgency: "Now" },
  { region: "India — South Deep Dives", guides: 6, reason: "Coorg, Ooty, Mysore, Pondicherry, Hampi — underserved long-tail", urgency: "Now" },
  { region: "India — Adventure & Trek", guides: 6, reason: "High intent, affiliate bookings for gear and stays", urgency: "Now" },
  { region: "Bali (Indonesia)", guides: 10, reason: "#1 international destination for Indians. You have 1 guide. Need 10.", urgency: "Phase 2" },
  { region: "Thailand (Bangkok + islands)", guides: 8, reason: "Highest affiliate conversion of any Asia destination", urgency: "Phase 2" },
  { region: "Japan", guides: 8, reason: "Growing fast, very high avg spend → high affiliate commissions", urgency: "Phase 2" },
  { region: "Dubai + UAE", guides: 5, reason: "Already have 1 guide, 4 more needed", urgency: "Phase 2" },
  { region: "Singapore + Malaysia", guides: 5, reason: "Budget-friendly Asia gateway, Indian diaspora huge", urgency: "Phase 2" },
  { region: "Europe Top 15 Cities", guides: 45, reason: "High volume, high competition — need DA30+ before these rank well", urgency: "Phase 3" },
  { region: "Americas Top 10", guides: 30, reason: "Growing Indian outbound travel to USA, Canada, Latin America", urgency: "Phase 3" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-teal/15 text-teal",
    upcoming: "bg-gold/20 text-gold-dark",
    future: "bg-ink/10 text-ink",
    vision: "bg-purple-100 text-purple-700",
  };
  const labels: Record<string, string> = {
    active: "Active Now",
    upcoming: "Up Next",
    future: "Future",
    vision: "Vision",
  };
  return (
    <span className={`text-[0.6rem] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function RevenueTable({ revenue }: { revenue: Record<string, string> }) {
  const labels: Record<string, string> = {
    affiliate: "Affiliate commissions",
    pdfs: "PDF sales",
    ads: "Display advertising",
    custom: "Custom itinerary service",
    sponsorships: "Brand sponsorships",
    saas: "Itinerary builder SaaS",
    b2b: "B2B / agency white-label",
    total: "TOTAL",
  };
  return (
    <div className="bg-white/70 rounded-xl border border-parchment-2 overflow-hidden mt-4">
      {Object.entries(revenue).map(([key, val], i) => (
        <div key={key} className={`flex items-center justify-between px-4 py-2.5 ${key === "total" ? "bg-gold/10 border-t-2 border-gold/30 font-semibold" : i % 2 === 0 ? "" : "bg-parchment/50"}`}>
          <span className="text-xs text-muted font-light">{labels[key] ?? key}</span>
          <span className={`text-xs font-semibold ${key === "total" ? "text-gold-dark text-sm" : "text-ink"}`}>{val}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function RoadmapClient() {
  const [activePhase, setActivePhase] = useState(1);
  const [showChallenges, setShowChallenges] = useState(false);

  const phase = PHASES.find((p) => p.id === activePhase)!;

  return (
    <main className="bg-cream min-h-screen">

      {/* ── HERO ── */}
      <div className="bg-ink pt-16 pb-14 px-6 md:px-12">
        <div className="max-w-[1180px] mx-auto">
          <Link href="/" className="text-white/40 text-xs hover:text-gold transition-colors mb-8 block">
            ← Back to site
          </Link>
          <div className="max-w-[720px]">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-4">Strategic Roadmap — April 2026</span>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-light text-white leading-[1.05] mb-5">
              From 362 India guides<br />
              <em className="italic text-gold-light">to the global itinerary standard.</em>
            </h1>
            <p className="text-sm text-white/55 font-light max-w-[560px] leading-relaxed mb-8">
              5 phases. 3 years. The honest plan — what&apos;s working, what needs to change,
              and exactly how IncredibleItinerary becomes the most detailed free travel
              planning resource on the internet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { num: "362", label: "Live guides" },
                { num: "0", label: "Organic traffic today" },
                { num: "5", label: "Phases to global" },
                { num: "₹50L+", label: "Monthly revenue target" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="font-serif text-2xl font-light text-gold">{s.num}</p>
                  <p className="text-[0.65rem] text-white/40 uppercase tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-14 space-y-20">

        {/* ── WHERE WE ARE ── */}
        <section>
          <span className="section-label">Where We Are — April 2026</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-6">
            The honest current state
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-white rounded-2xl border border-parchment-2 p-7">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-teal font-medium mb-5">What&apos;s working</p>
              <div className="space-y-3">
                {[
                  "362 hand-written guides — real content, real research, not AI fluff",
                  "Personal brand: Surya, Delhi, 24, actual Himalayan treks — unmatched India credibility",
                  "Solid tech: Next.js 14, SSG, clean sitemap, IndexNow for fast indexing",
                  "3 affiliate networks live: Booking.com, Viator, GetYourGuide",
                  "10 PDFs ready to sell, 2 tools live",
                  "Category filter now works correctly, all 14 shell posts have real content",
                ].map((s) => (
                  <div key={s} className="flex items-start gap-2.5">
                    <span className="text-teal flex-shrink-0 mt-0.5 text-sm">✓</span>
                    <p className="text-sm text-muted font-light leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Gaps */}
            <div className="bg-white rounded-2xl border border-parchment-2 p-7">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-rose-500 font-medium mb-5">What needs fixing</p>
              <div className="space-y-3">
                {[
                  "Zero organic traffic — site is new, Google hasn't trusted it yet",
                  "Zero backlinks — without backlinks, even great content won't rank",
                  "1,208 generated posts noindexed but sitting dead — need a plan for them",
                  "No email list (old fake count removed — starting from 0 honestly)",
                  "Rishikesh and Delhi posts have zero first-person voice despite you visiting both",
                  "International guides exist but brand is still India-only — tension to resolve",
                ].map((s) => (
                  <div key={s} className="flex items-start gap-2.5">
                    <span className="text-rose-400 flex-shrink-0 mt-0.5 text-sm">→</span>
                    <p className="text-sm text-muted font-light leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PHASE SELECTOR ── */}
        <section>
          <span className="section-label">The 5-Phase Plan</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-6">
            Select a phase to see the full detail
          </h2>

          {/* Phase tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(p.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
                  activePhase === p.id
                    ? `${p.color} text-white border-transparent shadow-md`
                    : "bg-white border-parchment-2 text-muted hover:border-ink/30 hover:text-ink"
                }`}
              >
                <span>{p.emoji}</span>
                <span>{p.label}: {p.title}</span>
                {p.status === "active" && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Phase detail */}
          <div className={`rounded-2xl border-2 overflow-hidden ${phase.light}`}>
            {/* Phase header */}
            <div className="p-7 pb-0">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{phase.emoji}</span>
                    <StatusBadge status={phase.status} />
                    <span className="text-xs text-muted">{phase.timeline} · {phase.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-light text-ink">{phase.title}</h3>
                </div>
                <div className="bg-white rounded-xl px-5 py-3 border border-parchment-2 max-w-[240px]">
                  <p className="text-[0.6rem] text-muted uppercase tracking-widest mb-1">Target metric</p>
                  <p className={`text-base font-semibold ${phase.textColor}`}>{phase.metric}</p>
                </div>
              </div>

              {/* Why this phase */}
              <div className="bg-white/60 rounded-xl p-5 mb-6 border border-black/[0.06]">
                <p className="text-[0.65rem] text-muted uppercase tracking-widest mb-2">Why this phase matters</p>
                <p className="text-sm text-ink font-light leading-relaxed">{phase.why}</p>
              </div>

              <p className="text-sm text-muted font-light leading-relaxed mb-6 max-w-[680px]">{phase.goal}</p>
            </div>

            {/* Tasks */}
            <div className="px-7 pb-2">
              <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-4">Tasks</p>
              <div className="space-y-3 mb-6">
                {phase.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs mt-0.5 border-2 ${
                      task.done
                        ? "bg-teal border-teal text-white"
                        : "border-parchment-2 bg-white"
                    }`}>
                      {task.done ? "✓" : ""}
                    </div>
                    <p className={`text-sm leading-relaxed ${task.done ? "text-muted/60 line-through" : "text-ink"}`}>
                      {task.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue projection */}
            <div className="px-7 pb-7">
              <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-2">Revenue projection — end of phase</p>
              <RevenueTable revenue={phase.revenue} />
              <div className="mt-4 flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full ${phase.color} opacity-30`} />
                <p className="text-xs text-muted italic">Projections assume consistent publishing and backlink building throughout the phase</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WEEK BY WEEK (PHASE 1) ── */}
        <section>
          <span className="section-label">Phase 1 in Detail</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-3">
            What to do, week by week
          </h2>
          <p className="text-sm text-muted font-light mb-8 max-w-[560px]">
            The next 6 months broken into concrete actions. Every week should produce either new content, new backlinks, or both.
          </p>
          <div className="space-y-3">
            {WEEK_BY_WEEK.map((w, i) => (
              <div key={i} className={`flex gap-5 p-5 rounded-2xl border-2 bg-white ${w.priority === "high" ? "border-teal/30" : "border-parchment-2"}`}>
                <div className="flex-shrink-0 w-28">
                  <p className={`text-xs font-semibold ${w.priority === "high" ? "text-teal" : "text-muted"}`}>{w.week}</p>
                  {w.priority === "high" && (
                    <span className="text-[0.55rem] bg-teal/10 text-teal px-1.5 py-0.5 rounded-full font-medium mt-1 inline-block">Critical</span>
                  )}
                </div>
                <p className="text-sm text-muted font-light leading-relaxed">{w.task}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTENT PRIORITIES ── */}
        <section>
          <span className="section-label">Content Priority Order</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-3">
            Write these first — in this order
          </h2>
          <p className="text-sm text-muted font-light mb-8 max-w-[560px]">
            Not all destinations are equal. These are ranked by: search volume × competition level × your ability to rank.
          </p>
          <div className="bg-white rounded-2xl border border-parchment-2 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-parchment border-b border-parchment-2">
              <p className="col-span-4 text-[0.65rem] uppercase tracking-widest text-muted font-medium">Region</p>
              <p className="col-span-2 text-[0.65rem] uppercase tracking-widest text-muted font-medium text-center">Guides</p>
              <p className="col-span-4 text-[0.65rem] uppercase tracking-widest text-muted font-medium">Why</p>
              <p className="col-span-2 text-[0.65rem] uppercase tracking-widest text-muted font-medium text-right">When</p>
            </div>
            {CONTENT_PRIORITIES.map((row, i) => (
              <div key={i} className={`grid grid-cols-12 gap-4 px-5 py-4 items-center ${i % 2 === 0 ? "" : "bg-parchment/40"}`}>
                <p className="col-span-4 text-sm text-ink font-light">{row.region}</p>
                <p className="col-span-2 text-center font-semibold text-ink">{row.guides}</p>
                <p className="col-span-4 text-xs text-muted font-light leading-relaxed">{row.reason}</p>
                <div className="col-span-2 flex justify-end">
                  <span className={`text-[0.6rem] px-2 py-1 rounded-full font-semibold ${
                    row.urgency === "Now" ? "bg-teal/10 text-teal" :
                    row.urgency === "Phase 2" ? "bg-gold/15 text-gold-dark" :
                    "bg-ink/8 text-ink"
                  }`}>{row.urgency}</span>
                </div>
              </div>
            ))}
            <div className="px-5 py-4 bg-gold/10 border-t border-gold/20 flex items-center justify-between">
              <p className="font-semibold text-ink text-sm">Total guides to write</p>
              <p className="font-serif text-2xl text-gold-dark">131+</p>
            </div>
          </div>
        </section>

        {/* ── HONEST CHALLENGES ── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="section-label">Honest Challenges</span>
              <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink">
                Problems you need to solve
              </h2>
            </div>
            <button
              onClick={() => setShowChallenges(!showChallenges)}
              className="btn-gold text-sm"
            >
              {showChallenges ? "Hide" : "Show"} challenges
            </button>
          </div>

          {showChallenges && (
            <div className="space-y-4">
              {HONEST_CHALLENGES.map((c, i) => (
                <div key={i} className={`rounded-2xl border-2 p-6 ${
                  c.severity === "high" ? "border-rose-200 bg-rose-50" :
                  c.severity === "medium" ? "border-amber-200 bg-amber-50" :
                  "border-parchment-2 bg-white"
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold uppercase ${
                      c.severity === "high" ? "bg-rose-100 text-rose-600" :
                      c.severity === "medium" ? "bg-amber-100 text-amber-600" :
                      "bg-parchment-2 text-muted"
                    }`}>{c.severity}</span>
                  </div>
                  <p className="font-semibold text-ink text-sm mb-2">⚠ {c.challenge}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">→ {c.solution}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── THE ONE BIG TRUTH ── */}
        <section>
          <div className="bg-ink rounded-2xl p-8 md:p-12">
            <div className="max-w-[680px]">
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-4">The single most important thing</span>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-light text-white mb-6 leading-tight">
                Backlinks are the bottleneck.<br />
                <em className="italic text-gold-light">Everything else is secondary.</em>
              </h2>
              <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                You can have the best content in the world. If Google doesn&apos;t see other sites linking to you,
                it won&apos;t rank you. This is the single hardest and most important task in Phase 1.
                Every week you should be producing at least 3 backlinks — Reddit answers, Quora answers,
                travel community mentions. Not paid links. Real mentions that real people find useful.
              </p>
              <div className="space-y-3">
                {[
                  { action: "Answer 3 Reddit travel questions per week linking to relevant guides", value: "~150 backlinks/year, also drives direct traffic" },
                  { action: "Guest post on 2 India travel blogs (Backpacker India, Travel Triangle blog, etc.)", value: "High-DA backlinks, referral traffic" },
                  { action: "HARO (Help a Reporter Out) — respond to journalist queries about India travel", value: "Potential DA60+ news site backlinks" },
                  { action: "Create shareable assets: India trip cost calculator, Northeast packing list", value: "Other sites link to useful tools naturally" },
                ].map((item) => (
                  <div key={item.action} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-sm text-white font-medium mb-1">{item.action}</p>
                    <p className="text-xs text-white/45 font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section className="text-center py-8">
          <span className="section-label">The End Goal</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-ink mb-6 leading-tight max-w-[760px] mx-auto">
            &ldquo;Just check IncredibleItinerary&rdquo; —<br />
            <em className="italic text-teal">the standard answer to every travel planning question.</em>
          </h2>
          <p className="text-sm text-muted font-light max-w-[520px] mx-auto leading-relaxed mb-8">
            Lonely Planet was a book. TripAdvisor is reviews. You build the itinerary layer —
            the specific, day-by-day, budget-honest planning resource that nobody has built properly yet.
            India first. Then the world.
          </p>
          <div className="inline-flex items-center gap-3 bg-parchment border border-parchment-2 rounded-full px-6 py-3 text-sm text-muted font-light">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            You are at the start of this. That&apos;s the good part.
          </div>
        </section>

      </div>
    </main>
  );
}
