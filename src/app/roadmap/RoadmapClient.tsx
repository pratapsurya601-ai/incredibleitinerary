"use client";
import { useState } from "react";
import Link from "next/link";

const PHASES = [
  {
    id: 1,
    label: "Phase 1",
    title: "Fix & Connect",
    timeline: "Now — 4 weeks",
    color: "bg-teal",
    light: "bg-teal/10 border-teal/30",
    status: "active",
    goal: "Make every page earn",
    tasks: [
      { done: true,  text: "Replace all YOUR_AFFILIATE_ID → real Booking.com aid=2820480" },
      { done: true,  text: "Fix GetYourGuide 404 links → search URL format" },
      { done: true,  text: "Add exit-intent email popup + Mailchimp integration" },
      { done: true,  text: "Build Currency Converter + Packing List tools" },
      { done: false, text: "Add Mediavine / Raptive application (needs 50K sessions)" },
      { done: false, text: "Embed Stay22 hotel map widget on top 10 blogs" },
      { done: false, text: "Submit sitemap to Google Search Console" },
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Scale Content",
    timeline: "Month 2–3",
    color: "bg-gold-dark",
    light: "bg-gold/10 border-gold/30",
    status: "upcoming",
    goal: "Triple indexed pages to 300+",
    tasks: [
      { done: false, text: "Generate 'Best Time to Visit X' for all 96 destinations" },
      { done: false, text: "Generate 'X for Couples' budget guides" },
      { done: false, text: "Generate 'X Packing List' SEO pages" },
      { done: false, text: "Add 20 more India destinations (Northeast, South)" },
      { done: false, text: "Write 5 Hindi destination guides (unfair advantage)" },
      { done: false, text: "Build 3 more PDF guides (Kerala, Ladakh, Bangkok)" },
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Monetise Traffic",
    timeline: "Month 4–6",
    color: "bg-ink",
    light: "bg-ink/5 border-ink/20",
    status: "future",
    goal: "₹1L+/month passive income",
    tasks: [
      { done: false, text: "Install Mediavine/Raptive display ads (50K sessions hit)" },
      { done: false, text: "Launch sponsored content packages for hotel chains" },
      { done: false, text: "Apply to India Tourism Board content partnerships" },
      { done: false, text: "Add Klook affiliate links (Asia destinations)" },
      { done: false, text: "Launch YouTube channel with site traffic loop" },
      { done: false, text: "Build email sequence → promote PDFs to subscribers" },
    ],
  },
];

const STREAMS = [
  {
    rank: 1,
    emoji: "📺",
    name: "Display Ads",
    provider: "Mediavine / Raptive",
    passivity: 100,
    potential: "₹75K–2L/month",
    potentialNote: "at 50K sessions",
    status: "locked",
    statusLabel: "Needs 50K sessions",
    color: "border-purple-300 bg-purple-50",
    accent: "text-purple-700",
    bar: "bg-purple-400",
    detail: "Most passive income stream. Install once, earn forever. At 50K sessions/month, this alone can generate ₹75K–₹2L monthly without any extra work.",
    action: "Focus on SEO to hit 50K sessions — this unlocks everything.",
  },
  {
    rank: 2,
    emoji: "🏨",
    name: "Hotel Affiliates",
    provider: "Booking.com (aid=2820480)",
    passivity: 85,
    potential: "₹20K–80K/month",
    potentialNote: "at scale",
    status: "live",
    statusLabel: "Live on 96 blogs",
    color: "border-blue-300 bg-blue-50",
    accent: "text-blue-700",
    bar: "bg-blue-400",
    detail: "4–6% commission per booking. Every guide mentions hotels with prices. 96 guides × average 3 hotel links = 288 affiliate touchpoints earning while you sleep.",
    action: "Add Stay22 map widget to top 10 India guides for visual bookings.",
  },
  {
    rank: 3,
    emoji: "🎯",
    name: "Activity Affiliates",
    provider: "GetYourGuide (PSZA5UI) + Klook",
    passivity: 80,
    potential: "₹10K–50K/month",
    potentialNote: "8% per booking",
    status: "live",
    statusLabel: "Live on 96 blogs",
    color: "border-orange-300 bg-orange-50",
    accent: "text-orange-700",
    bar: "bg-orange-400",
    detail: "8% commission on tours and experiences. GYG search links live on every blog. Add Klook for Asia-specific destinations (Thailand, Bali, Singapore, Japan).",
    action: "Add Klook affiliate links to all Asia destination blogs.",
  },
  {
    rank: 4,
    emoji: "📄",
    name: "PDF Sales",
    provider: "Gumroad (surya601)",
    passivity: 70,
    potential: "₹5K–30K/month",
    potentialNote: "3 PDFs live",
    status: "partial",
    statusLabel: "3 of 96 destinations",
    color: "border-teal-300 bg-teal-50",
    accent: "text-teal-700",
    bar: "bg-teal-400",
    detail: "Goa ₹199, Rajasthan ₹299, India Budget ₹149 — already live. Massive expansion opportunity: 93 destinations with no PDF yet. Each takes a few hours, earns for years.",
    action: "Build Kerala, Ladakh, Bangkok PDFs next — highest search volume.",
  },
  {
    rank: 5,
    emoji: "🤝",
    name: "Sponsored Content",
    provider: "Hotels, Tour Operators, State Tourism",
    passivity: 40,
    potential: "₹5K–2L/piece",
    potentialNote: "per sponsored post",
    status: "future",
    statusLabel: "Unlocks at traffic scale",
    color: "border-rose-300 bg-rose-50",
    accent: "text-rose-700",
    bar: "bg-rose-400",
    detail: "Indian hotel chains, tour operators, and state tourism boards (Rajasthan Tourism, Kerala Tourism) pay ₹5K–₹2L per featured article. Requires domain authority + traffic.",
    action: "Build media kit page once you hit 10K monthly visitors.",
  },
  {
    rank: 6,
    emoji: "🔧",
    name: "Tools Monetisation",
    provider: "Trip Calculator, Visa Checker, Currency",
    passivity: 90,
    potential: "₹10K–40K/month",
    potentialNote: "embed affiliate in results",
    status: "partial",
    statusLabel: "Tools live, not monetised",
    color: "border-green-300 bg-green-50",
    accent: "text-green-700",
    bar: "bg-green-400",
    detail: "Trip Calculator shows estimated cost → embed 'Book hotels now →' Booking.com link in result. Visa Checker → embed travel insurance affiliate. Currency tool → embed Wise referral.",
    action: "Add affiliate CTAs inside calculator and visa checker results.",
  },
];

const SEO_OPPORTUNITIES = [
  { page: "Best time to visit [destination]", volume: "High", pages: 96, effort: "Low" },
  { page: "[Destination] for couples — budget & itinerary", volume: "High", pages: 96, effort: "Low" },
  { page: "[Destination] packing list", volume: "Medium", pages: 96, effort: "Low" },
  { page: "[Destination] budget for family of 4", volume: "Medium", pages: 96, effort: "Low" },
  { page: "How to get from [A] to [B]", volume: "High", pages: 50, effort: "Medium" },
  { page: "[Destination] travel guide in Hindi", volume: "High", pages: 10, effort: "Medium" },
];

const MILESTONES = [
  { sessions: "5K", label: "Current est.", revenue: "₹500–2K/mo", unlocks: "Affiliate income begins", active: true },
  { sessions: "10K", label: "Month 2–3", revenue: "₹5K–15K/mo", unlocks: "Media kit, first sponsors", active: false },
  { sessions: "25K", label: "Month 4–5", revenue: "₹20K–50K/mo", unlocks: "Apply to Mediavine", active: false },
  { sessions: "50K", label: "Month 6+", revenue: "₹75K–2L/mo", unlocks: "Display ads + full monetisation", active: false },
];

function PassivityBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-parchment-2 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-1000`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-muted w-7 text-right">{value}%</span>
    </div>
  );
}

export default function RoadmapClient() {
  const [activeStream, setActiveStream] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState(1);

  return (
    <main className="bg-cream min-h-screen">

      {/* Header */}
      <div className="bg-ink pt-16 pb-12 px-6 md:px-12">
        <div className="max-w-[1180px] mx-auto">
          <Link href="/" className="text-white/40 text-xs hover:text-gold transition-colors mb-6 block">
            ← Back to site
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-3">Strategic Plan</span>
              <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white leading-tight mb-3">
                The Monetisation Roadmap
              </h1>
              <p className="text-sm text-white/50 font-light max-w-[520px] leading-relaxed">
                96 guides × smart affiliate placement × SEO scale = ₹2L+/month. Every guide you publish is an asset that earns for 5–10 years.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-5 text-center">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Target</p>
              <p className="font-serif text-3xl text-gold font-light">₹2L</p>
              <p className="text-[0.65rem] text-white/40">per month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-14 space-y-16">

        {/* Traffic Milestones */}
        <section>
          <span className="section-label">Traffic → Revenue</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-8">
            Sessions unlock income streams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MILESTONES.map((m, i) => (
              <div key={m.sessions}
                className={`rounded-2xl p-5 border-2 transition-all duration-300 ${m.active
                  ? "border-teal bg-teal/5 shadow-md"
                  : "border-parchment-2 bg-white"}`}>
                <div className={`text-xs uppercase tracking-widest font-medium mb-2 ${m.active ? "text-teal" : "text-muted"}`}>
                  {m.label}
                </div>
                <div className={`font-serif text-3xl font-light mb-1 ${m.active ? "text-teal" : "text-ink"}`}>
                  {m.sessions}
                </div>
                <div className="text-xs text-muted mb-3">sessions/month</div>
                <div className={`text-sm font-semibold mb-1 ${m.active ? "text-teal" : "text-ink"}`}>{m.revenue}</div>
                <div className="text-[0.65rem] text-muted font-light leading-relaxed">{m.unlocks}</div>
                {m.active && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs text-teal font-medium">You are here</span>
                  </div>
                )}
                {!m.active && (
                  <div className="mt-3 text-xs text-muted/60">
                    Step {i + 1} of 4
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Arrow connectors */}
          <div className="hidden md:flex items-center justify-center gap-0 mt-2 px-12">
            {[0,1,2].map(i => (
              <div key={i} className="flex-1 h-px bg-parchment-2 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-parchment-2 text-xs">›</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Revenue Streams */}
        <section>
          <span className="section-label">Revenue Streams</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-2">
            6 streams — ranked by passivity
          </h2>
          <p className="text-sm text-muted font-light mb-8">Click any stream to see the action plan.</p>

          <div className="space-y-3">
            {STREAMS.map((s) => (
              <div key={s.rank}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 cursor-pointer ${activeStream === s.rank ? s.color + " shadow-md" : "border-parchment-2 bg-white hover:border-parchment-2 hover:shadow-sm"}`}
                onClick={() => setActiveStream(activeStream === s.rank ? null : s.rank)}>
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className="w-8 h-8 rounded-full bg-ink text-white text-xs font-serif flex items-center justify-center flex-shrink-0">
                      {s.rank}
                    </div>
                    {/* Emoji */}
                    <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="font-semibold text-ink text-sm">{s.name}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          s.status === "live" ? "bg-teal/15 text-teal" :
                          s.status === "partial" ? "bg-gold/20 text-gold-dark" :
                          s.status === "locked" ? "bg-purple-100 text-purple-600" :
                          "bg-parchment-2 text-muted"}`}>
                          {s.statusLabel}
                        </span>
                      </div>
                      <p className="text-[0.65rem] text-muted">{s.provider}</p>
                    </div>
                    {/* Potential */}
                    <div className="text-right flex-shrink-0 hidden sm:block">
                      <p className="font-semibold text-sm text-ink">{s.potential}</p>
                      <p className="text-xs text-muted">{s.potentialNote}</p>
                    </div>
                    {/* Passivity */}
                    <div className="w-24 flex-shrink-0 hidden md:block">
                      <p className="text-xs text-muted mb-1">Passivity</p>
                      <PassivityBar value={s.passivity} color={s.bar} />
                    </div>
                    {/* Toggle */}
                    <div className="text-muted text-sm flex-shrink-0">
                      {activeStream === s.rank ? "▲" : "▼"}
                    </div>
                  </div>

                  {/* Expanded */}
                  {activeStream === s.rank && (
                    <div className="mt-5 pt-5 border-t border-black/[0.08] grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold text-ink mb-2">Why this works</p>
                        <p className="text-sm text-muted font-light leading-relaxed">{s.detail}</p>
                      </div>
                      <div className={`rounded-xl p-4 ${s.color}`}>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-ink mb-2">Next action →</p>
                        <p className={`text-sm font-medium leading-relaxed ${s.accent}`}>{s.action}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phase Plan */}
        <section>
          <span className="section-label">Execution Plan</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-8">
            3 phases to ₹2L/month
          </h2>

          {/* Phase tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {PHASES.map((p) => (
              <button key={p.id}
                onClick={() => setActivePhase(p.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activePhase === p.id
                  ? `${p.color} text-white shadow-md`
                  : "bg-white border border-parchment-2 text-muted hover:border-gold"}`}>
                {p.label}: {p.title}
              </button>
            ))}
          </div>

          {PHASES.filter(p => p.id === activePhase).map((phase) => (
            <div key={phase.id} className={`rounded-2xl border-2 p-7 ${phase.light}`}>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-[0.65rem] text-muted uppercase tracking-widest mb-1">{phase.timeline}</p>
                  <h3 className="font-serif text-xl font-light text-ink">{phase.title}</h3>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 border border-parchment-2">
                  <p className="text-xs text-muted uppercase tracking-wide">Goal</p>
                  <p className="text-sm font-semibold text-ink">{phase.goal}</p>
                </div>
              </div>
              <div className="space-y-3">
                {phase.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs mt-0.5 ${task.done ? "bg-teal text-white" : "border-2 border-parchment-2 bg-white"}`}>
                      {task.done ? "✓" : ""}
                    </div>
                    <p className={`text-sm leading-relaxed ${task.done ? "text-muted line-through" : "text-ink"}`}>
                      {task.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                <p className="text-xs text-muted">
                  {phase.tasks.filter(t => t.done).length} of {phase.tasks.length} tasks complete
                </p>
                <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                  <div className={`h-full ${phase.color} rounded-full`}
                    style={{ width: `${(phase.tasks.filter(t => t.done).length / phase.tasks.length) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* SEO Opportunity */}
        <section>
          <span className="section-label">Programmatic SEO</span>
          <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ink mb-3">
            Triple your pages from 96 → 300+
          </h2>
          <p className="text-sm text-muted font-light mb-8 max-w-[560px] leading-relaxed">
            Each destination can generate 5+ SEO-optimised pages with minimal effort. These are templated but highly rankable — each one captures a different search intent.
          </p>
          <div className="bg-white rounded-2xl border border-parchment-2 overflow-hidden">
            <div className="px-5 py-3 bg-parchment border-b border-parchment-2 grid grid-cols-4 gap-4">
              <p className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Page Type</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Search Volume</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Pages to Create</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Effort</p>
            </div>
            {SEO_OPPORTUNITIES.map((row, i) => (
              <div key={i} className={`px-5 py-4 grid grid-cols-4 gap-4 items-center ${i % 2 === 0 ? "" : "bg-parchment/40"}`}>
                <p className="text-sm text-ink font-light">{row.page}</p>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium w-fit ${row.volume === "High" ? "bg-teal/10 text-teal" : "bg-gold/10 text-gold-dark"}`}>
                  {row.volume}
                </span>
                <p className="font-semibold text-ink">{row.pages}</p>
                <span className={`text-[0.65rem] px-2 py-1 rounded-full font-medium w-fit ${row.effort === "Low" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {row.effort}
                </span>
              </div>
            ))}
            <div className="px-5 py-4 bg-gold/10 border-t border-gold/20 flex items-center justify-between">
              <p className="font-semibold text-ink text-sm">Total new pages</p>
              <p className="font-serif text-2xl text-gold-dark">~530</p>
            </div>
          </div>
        </section>

        {/* Hindi Advantage */}
        <section>
          <div className="bg-ink rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Unfair Advantage</span>
                <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-light text-white mb-4 leading-tight">
                  Hindi content is a<br />
                  <em className="italic text-gold-light">blue ocean</em>
                </h2>
                <p className="text-sm text-white/55 font-light leading-relaxed mb-6">
                  Most travel blogs targeting Indian travellers are in English. The Hindi-speaking market — 600M+ speakers — is almost completely underserved online. Your YouTube skills transfer directly here.
                </p>
                <div className="space-y-3">
                  {[
                    "Virtual zero competition for Hindi travel guides",
                    "Massive underserved audience — 600M+ Hindi speakers",
                    "YouTube skills transfer directly to Hindi blogs",
                    "Hindi guides rank faster (lower competition)",
                    "Opens door to Indian brand sponsorships",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                      <p className="text-sm text-white/70 font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-[0.65rem] text-white/40 uppercase tracking-widest mb-1">Start with</p>
                  <p className="text-white font-medium mb-0.5">Top 5 Hindi guides</p>
                  <p className="text-sm text-white/50 font-light">Rajasthan, Goa, Kerala, Manali, Kashmir — highest search intent from Hindi speakers</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-[0.65rem] text-white/40 uppercase tracking-widest mb-1">Distribution</p>
                  <p className="text-white font-medium mb-0.5">YouTube → Blog loop</p>
                  <p className="text-sm text-white/50 font-light">Post Hindi YouTube video → embed in Hindi blog → both rank → both drive affiliate clicks</p>
                </div>
                <div className="bg-gold/10 border border-gold/20 rounded-xl p-5">
                  <p className="text-[0.65rem] text-gold uppercase tracking-widest mb-1">Revenue potential</p>
                  <p className="text-white font-medium mb-0.5">₹50K–₹1.5L/month</p>
                  <p className="text-sm text-white/50 font-light">From Hindi content alone at scale — brand deals pay premium for Hindi reach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary numbers */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "96+", label: "Live guides (assets earning now)" },
            { num: "288+", label: "Affiliate touchpoints across site" },
            { num: "530+", label: "Programmatic pages to build" },
            { num: "₹2L", label: "Monthly target (6 months)" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-parchment-2 p-6 text-center">
              <p className="font-serif text-3xl font-light text-gold mb-2">{s.num}</p>
              <p className="text-xs text-muted font-light leading-relaxed">{s.label}</p>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
