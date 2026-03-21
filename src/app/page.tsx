"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import HomepageFAQ from "@/components/sections/HomepageFAQ";
import Testimonials from "@/components/sections/Testimonials";

// ── TYPES ──────────────────────────────────────────────────────────────────────
type TripStyle = "budget" | "couple" | "party" | "relax";

// ── HELPERS ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ── SECTION: HERO ──────────────────────────────────────────────────────────────
const STYLES: { id: TripStyle; emoji: string; label: string; sub: string; href: string }[] = [
  { id: "budget", emoji: "💰", label: "Budget Trip",  sub: "Under ₹20k",    href: "/blog/goa-3-days" },
  { id: "couple", emoji: "💑", label: "Couple Trip",  sub: "Romantic",      href: "/blog/kashmir-6-days" },
  { id: "party",  emoji: "🎉", label: "Friends Trip", sub: "Group fun",     href: "/blog/goa-3-days" },
  { id: "relax",  emoji: "😌", label: "Relaxed Trip", sub: "Slow & peaceful",href: "/blog/kerala-5-days" },
];

function Hero({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [hovered, setHovered] = useState<TripStyle | null>(null);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Base dark layer — ensures text always readable */}
      <div className="absolute inset-0 bg-ink/55" />
      {/* Background image */}
      <div className="absolute inset-0 will-change-transform animate-zoom-bg -z-10"
        style={{ background: `url('https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=85') center/cover no-repeat` }} />
      {/* Gradient overlay — strong top and bottom, consistent middle */}
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, rgba(10,6,2,0.75) 0%, rgba(10,6,2,0.50) 35%, rgba(10,6,2,0.55) 65%, rgba(10,6,2,0.92) 100%)` }} />

      <div className="relative z-10 max-w-[840px] px-6 pt-28 pb-16 mx-auto w-full">

        {/* Hook badge — the pattern interrupt */}
        <div className="inline-flex items-center gap-2.5 bg-red-500/20 backdrop-blur-sm border border-red-400/40 rounded-full px-4 py-2 mb-7" style={{ animation: "fadeUp .7s .1s both" }}>
          <span className="text-red-400 text-base leading-none">⚠</span>
          <span className="text-[0.7rem] tracking-[0.12em] uppercase text-red-200 font-medium">Most Indian travellers overpay by ₹3,000–₹5,000 per trip</span>
        </div>

        {/* Headline — problem → solution */}
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.6rem)] font-light text-white leading-[1.05] mb-5" style={{ animation: "fadeUp .8s .2s both" }}>
          Stop Using Generic<br />
          <em className="italic text-gold-light">Itineraries. Start Saving.</em>
        </h1>

        {/* Subline — specific, visceral */}
        <p className="text-[1.05rem] text-white/80 font-light max-w-[520px] mx-auto mb-2 leading-relaxed" style={{ animation: "fadeUp .8s .32s both" }}>
          Free, handcrafted India itineraries that tell you <strong className="text-white font-medium">exactly</strong> where you&apos;re being overcharged — and the better, cheaper alternatives locals actually use.
        </p>
        <p className="text-sm text-gold-light/80 font-light mb-2" style={{ animation: "fadeUp .8s .38s both" }}>
          Built for Indian travellers · 500+ trips planned · 24hr reply
        </p>
        {/* Credibility line */}
        <p className="text-[0.75rem] text-white/55 font-light mb-3" style={{ animation: "fadeUp .8s .41s both" }}>
          Free to plan. No obligation. Just great trips.
        </p>
        <p className="text-[0.68rem] text-white/35 tracking-[0.14em] uppercase mb-10" style={{ animation: "fadeUp .8s .44s both" }}>
          Goa · Rajasthan · Kashmir · Kerala · Andaman · Varanasi · Golden Triangle
        </p>

        {/* Trip style selector */}
        <div style={{ animation: "fadeUp .8s .52s both" }}>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-3">🧭 What kind of trip are you planning?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-[640px] mx-auto mb-8">
            {STYLES.map((s) => (
              <Link key={s.id} href={s.href}
                onMouseEnter={() => setHovered(s.id)} onMouseLeave={() => setHovered(null)}
                className={`flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl border-2 transition-all duration-200 backdrop-blur-sm ${
                  hovered === s.id ? "bg-gold border-gold text-ink scale-[1.04] shadow-xl" : "bg-white/10 border-white/20 text-white hover:bg-white/15"
                }`}>
                <span className="text-2xl">{s.emoji}</span>
                <span className="font-medium text-sm">{s.label}</span>
                <span className={`text-[0.62rem] ${hovered === s.id ? "text-ink/60" : "text-white/50"}`}>{s.sub}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 justify-center flex-wrap" style={{ animation: "fadeUp .8s .62s both" }}>
          <button onClick={onPlanTrip} className="btn-gold text-[0.85rem] px-9 py-4 shadow-[0_8px_32px_rgba(201,169,110,0.4)]">
            Fix My Itinerary — Free →
          </button>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
            Where Should I Go? ✦
          </Link>
        </div>

        {/* Micro proof */}
        <p className="text-[0.62rem] text-white/30 mt-5 font-light" style={{ animation: "fadeUp .8s .72s both" }}>
          No account · No credit card · Priya saved ₹4,200 on her Rajasthan trip last month
        </p>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fadeUp .8s 1s both" }}>
        <span className="text-[0.58rem] tracking-[0.22em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-8 bg-gold/40 animate-scroll-pulse origin-top" />
      </div>
    </section>
  );
}

// ── SECTION: TRUST STRIP ───────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <div className="bg-ink py-3 px-6 flex items-center justify-center gap-3 md:gap-8 flex-wrap">
      {[
        "⭐  500+ Trips Planned",
        "💰  Saves ₹3k–₹5k Per Trip",
        "🇮🇳  Built for Indian Travellers",
        "✓  100% Free Planning",
        "⚡  24hr Response",
      ].map((t, i) => (
        <span key={i} className="text-[0.67rem] tracking-[0.1em] uppercase text-gold-light/80 whitespace-nowrap font-light flex items-center gap-2">
          {i > 0 && <span className="hidden md:block w-px h-3.5 bg-gold/20" />}
          {t}
        </span>
      ))}
    </div>
  );
}

// ── SECTION: WHY DIFFERENT ─────────────────────────────────────────────────────
function WhyDifferent({ onPlanTrip }: { onPlanTrip: () => void }) {
  const points = [
    { icon: "💰", title: "You overpay by ₹3,000–₹5,000. We fix that.", desc: "We tell you the exact spots where tourists get overcharged — and the cheaper local alternatives that are often better. Every. Single. Guide." },
    { icon: "🚫", title: "Zero paid recommendations. Ever.", desc: "No sponsored hotel mentions. No affiliate pressure. No 'government approved shop' detours. If we recommend it, it's because it's genuinely worth it." },
    { icon: "📍", title: "Plans that account for reality.", desc: "We know which roads flood in monsoon. What's actually open at 6am. Where the taxi touts wait. What 'family friendly' actually means on the ground." },
    { icon: "🇮🇳", title: "For Indians, by Indians.", desc: "Indian train routes, UPI-friendly spots, local bus costs, veg/non-veg options, and the places your Indian neighbour would tell you about — not TripAdvisor." },
  ];
  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">Why we exist</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-3">
            Generic AI gives you itineraries.<br />
            <em className="italic text-gold-light">We give you the local&apos;s version.</em>
          </h2>
          <p className="text-sm text-white/45 font-light max-w-[400px] mx-auto">Every plan is built by someone who has been to these places, eaten the food, made the expensive mistakes — and learned how to avoid them.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/30 transition-all duration-300 h-full group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <p className="font-semibold text-sm text-white mb-2 leading-snug">{p.title}</p>
                <p className="text-xs text-white/40 font-light leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Comparison table */}
        <FadeIn delay={360}>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 text-center">
              <div className="p-4 border-r border-white/10">
                <p className="text-[0.62rem] text-white/30 uppercase tracking-wider mb-2">Feature</p>
              </div>
              <div className="p-4 border-r border-white/10 bg-gold/10">
                <p className="text-[0.62rem] text-gold uppercase tracking-wider mb-2 font-semibold">IncredibleItinerary</p>
              </div>
              <div className="p-4">
                <p className="text-[0.62rem] text-white/30 uppercase tracking-wider mb-2">Generic AI / Blog</p>
              </div>
              {[
                ["Real local prices",           "✓", "Estimates only"],
                ["Tourist trap warnings",        "✓", "✗"],
                ["Built for Indian travellers", "✓", "Generic"],
                ["Personalised to your group",  "✓", "✗"],
                ["Cost",                        "Free", "Free but useless"],
              ].map(([feat, us, them]) => (
                <>
                  <div key={feat} className="px-4 py-2.5 border-t border-white/10 text-xs text-white/50 font-light">{feat}</div>
                  <div className="px-4 py-2.5 border-t border-white/10 border-x border-gold/20 text-xs text-gold font-semibold text-center bg-gold/5">{us}</div>
                  <div className="px-4 py-2.5 border-t border-white/10 text-xs text-white/30 font-light text-center">{them}</div>
                </>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={440} className="mt-10 text-center">
          <button onClick={onPlanTrip} className="btn-gold">Get My Free Itinerary →</button>
        </FadeIn>
      </div>
    </section>
  );
}

// ── SECTION: SAMPLE ITINERARY ──────────────────────────────────────────────────
const SAMPLE_DAYS = [
  {
    day: "Day 1", title: "Palolem Beach — arrive before the crowds",
    time: "6:00 AM", activity: "Palolem Beach at dawn. Walk 2km of empty white sand — you'll have it to yourself until 8am. The same beach costs ₹800 to reach by tourist taxi. Take the local bus for ₹30.",
    cost: "₹30 bus + free beach",
    tip: "Tourist taxi from airport = ₹900. Local bus = ₹30. Same destination."
  },
  {
    day: "Day 1", title: "Lunch at Café del Mar (not the tourist strip)",
    time: "12:30 PM", activity: "Prawn curry + rice at Café del Mar on South Goa beach road — ₹280. The identical dish at the beach shacks 200m away? ₹650. Same prawns. Different sign.",
    cost: "₹280 vs ₹650 tourist price",
    tip: "Rule: walk 3 minutes away from any beach = prices drop 40%"
  },
  {
    day: "Day 1", title: "Chapora Fort at 5pm — not 2pm",
    time: "5:00 PM", activity: "Chapora Fort (the Dil Chahta Hai fort). Go at 5pm — golden hour, cool breeze, Instagram crowd has left. At 2pm it's 38°C and full of tour groups. Entry is free.",
    cost: "Free",
    tip: "The view at sunset is better than midday by a factor of 10"
  },
];

const SAMPLE_TOTAL = { budget: "₹1,840", saved: "₹3,200", vs: "vs ₹5,040 tourist price" };

function SampleItinerary({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [active, setActive] = useState(0);
  const blogs = [
    { label: "Goa 3 Days",         href: "/blog/goa-3-days" },
    { label: "Kashmir 6 Days",     href: "/blog/kashmir-6-days" },
    { label: "Rajasthan 7 Days",   href: "/blog/rajasthan-7-days" },
    { label: "Andaman 5 Days",     href: "/blog/andaman-5-days" },
  ];
  return (
    <section className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-label">Real sample output</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
              Goa Day 1 — Budget Plan.<br />
              <em className="italic text-teal">This is what you get.</em>
            </h2>
            <p className="text-sm text-muted font-light mt-2 max-w-[340px] leading-relaxed">
              Not vague suggestions. Real times, real prices, the exact tricks locals use.
            </p>
          </div>
          {/* Savings callout */}
          <div className="bg-teal text-white rounded-2xl px-6 py-4 text-center min-w-[180px] shadow-lg">
            <p className="text-[0.62rem] tracking-[0.15em] uppercase font-light mb-1 text-white/70">Day 1 total spend</p>
            <p className="font-serif text-3xl font-light mb-0.5">{SAMPLE_TOTAL.budget}</p>
            <p className="text-[0.65rem] text-white/60 line-through">{SAMPLE_TOTAL.vs}</p>
            <p className="text-[0.7rem] font-semibold text-white/90 mt-1">You save {SAMPLE_TOTAL.saved}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Day cards */}
          <div className="space-y-3">
            {SAMPLE_DAYS.map((d, i) => (
              <FadeIn key={i} delay={i * 80}>
                <button onClick={() => setActive(i)} className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${active === i ? "border-teal bg-white shadow-lg" : "border-parchment-2 bg-white/60 hover:border-teal/40"}`}>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`text-[0.65rem] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${active === i ? "bg-teal text-white" : "bg-parchment text-muted"}`}>{d.time}</span>
                    <span className="font-medium text-sm text-ink">{d.title}</span>
                  </div>
                  {active === i && (
                    <div className="mt-3 pt-3 border-t border-parchment-2 space-y-3">
                      <p className="text-sm text-muted font-light leading-relaxed">{d.activity}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs bg-teal/10 text-teal px-3 py-1.5 rounded-full font-medium">💰 {d.cost}</span>
                        <span className="flex items-center gap-1.5 text-xs bg-gold/10 text-gold-dark px-3 py-1.5 rounded-full">💡 {d.tip}</span>
                      </div>
                    </div>
                  )}
                </button>
              </FadeIn>
            ))}

            {/* Mini savings bar */}
            <FadeIn delay={280}>
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="font-medium text-sm text-green-800">Day 1 total: {SAMPLE_TOTAL.budget}</p>
                  <p className="text-xs text-green-600 font-light">Tourist doing the same day without this guide: {SAMPLE_TOTAL.vs}</p>
                </div>
                <span className="ml-auto font-serif text-xl text-green-700 flex-shrink-0">-{SAMPLE_TOTAL.saved}</span>
              </div>
            </FadeIn>
          </div>

          {/* Side panel */}
          <FadeIn delay={300}>
            <div className="bg-white rounded-2xl border-2 border-gold/30 p-6 sticky top-24">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-1">Every free guide includes</p>
              <p className="text-xs text-muted font-light mb-4">This is what separates us from generic travel blogs</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Hour-by-hour day schedule",
                  "Actual prices (not estimates)",
                  "Where tourists pay 2x — and what to do instead",
                  "Google Maps links for every location",
                  "Best time of day for each spot",
                  "Where locals actually eat",
                  "What to completely skip and why",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-muted font-light">
                    <span className="text-teal mt-0.5 flex-shrink-0 font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-parchment-2 pt-4 mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl text-ink font-light">Free.</span>
                  <span className="text-xs text-muted font-light">Travel agents charge ₹2,000–₹5,000 for this.</span>
                </div>
              </div>
              <button onClick={onPlanTrip} className="w-full btn-gold justify-center mb-3">Get Mine Free →</button>
              <div className="grid grid-cols-2 gap-2">
                {blogs.map((b) => (
                  <Link key={b.label} href={b.href} className="text-center text-[0.65rem] font-light text-muted hover:text-teal transition-colors py-1.5 border border-parchment-2 rounded-lg hover:border-teal">
                    {b.label} →
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── SECTION: HOW IT WORKS ──────────────────────────────────────────────────────
function HowItWorks({ onPlanTrip }: { onPlanTrip: () => void }) {
  const steps = [
    { n: "01", icon: "📝", title: "Tell us your trip",      desc: "Destination, dates, group size, budget — 2 minutes max.", action: "Fill the form →" },
    { n: "02", icon: "✦",  title: "We build your plan",    desc: "A real person creates your day-by-day itinerary within 24 hours.", action: null },
    { n: "03", icon: "✅", title: "Travel better",          desc: "Save money, avoid tourist traps, experience India like a local.", action: null },
  ];
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="section-label">How it works</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
            Plan smarter in <em className="italic text-teal">3 steps</em>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 100}>
              <div className="relative text-center bg-white rounded-2xl border border-parchment-2 p-7 hover:border-gold hover:shadow-md transition-all duration-300">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 z-10 text-gold/30 text-2xl">→</div>
                )}
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-xl mx-auto mb-4">{s.icon}</div>
                <div className="text-[0.62rem] text-muted/50 tracking-widest uppercase font-light mb-2">{s.n}</div>
                <p className="font-medium text-base text-ink mb-2">{s.title}</p>
                <p className="text-xs text-muted font-light leading-relaxed mb-3">{s.desc}</p>
                {s.action && (
                  <button onClick={onPlanTrip} className="text-xs text-teal font-medium hover:underline">{s.action}</button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={350} className="text-center">
          <button onClick={onPlanTrip} className="btn-gold">Start — It&apos;s Free →</button>
          <p className="text-xs text-muted font-light mt-3">No account needed · No credit card · Reply in 24 hours</p>
        </FadeIn>
      </div>
    </section>
  );
}

// ── SECTION: TESTIMONIALS + STATS ─────────────────────────────────────────────
const REVIEWS = [
  { name: "Priya S.", trip: "Rajasthan · Feb 2026", saved: "₹4,200", color: "bg-amber-50 border-amber-200", text: "I was quoted ₹18,000 for a Jaipur–Jodhpur tour package. The itinerary here told me to book the same trip myself for ₹13,800. And it was better — no forced shopping stops." },
  { name: "Anika M.", trip: "Golden Triangle · Jan 2026", saved: "₹5,800", color: "bg-blue-50 border-blue-200", text: "First time in India. The guide warned me about every scam before I encountered it. The Taj Mahal sunrise tip (arrive at 5:50am, not 9am) — absolutely changed the experience." },
  { name: "Rahul & Deepa", trip: "Kerala Honeymoon · Dec 2025", saved: "₹3,500", color: "bg-teal-50 border-teal-200", text: "Got a private houseboat for ₹6,500 instead of the ₹12,000 we were quoted. Munnar sunrise tip: had the viewpoint to ourselves for 40 minutes. Worth every second." },
];

function TrustSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-parchment py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="section-label">Real travellers, real savings</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
            What people say after<br /><em className="italic text-gold-dark">using our itineraries</em>
          </h2>
        </FadeIn>

        {/* Stats row */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { val: "500+", label: "Trips planned", icon: "✈️" },
              { val: "₹4,100", label: "Avg. saving per trip", icon: "💰" },
              { val: "7",    label: "Destinations covered", icon: "🗺️" },
              { val: "4.9★", label: "Average traveller rating", icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-parchment-2 p-5 text-center shadow-sm hover:border-gold transition-colors duration-300">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="font-serif text-[1.7rem] font-light text-ink leading-none mb-1">{s.val}</p>
                <p className="text-[0.65rem] text-muted uppercase tracking-wide font-light">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {REVIEWS.map((r, i) => (
            <FadeIn key={r.name} delay={i * 80}>
              <div className={`rounded-2xl border-2 p-6 transition-all duration-500 ${active === i ? `${r.color} shadow-lg scale-[1.01]` : "bg-white border-parchment-2"} cursor-pointer`}
                onClick={() => setActive(i)}>
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, s) => <span key={s} className="text-gold text-sm">★</span>)}</div>
                <p className="text-sm text-ink font-light leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-3 border-t border-parchment-2/50">
                  <div>
                    <p className="font-medium text-sm text-ink">{r.name}</p>
                    <p className="text-[0.65rem] text-muted font-light">{r.trip}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.6rem] text-muted uppercase tracking-wide">Saved</p>
                    <p className="font-serif text-base text-teal">{r.saved}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={300} className="text-center">
          <button onClick={onPlanTrip} className="btn-gold">Join 500+ Happy Travellers →</button>
        </FadeIn>
      </div>
    </section>
  );
}

// ── SECTION: DESTINATIONS / BLOGS ─────────────────────────────────────────────
const BLOGS = [
  { name: "Kashmir",        emoji: "🏔️", days: "6 Days", budget: "From ₹18k", href: "/blog/kashmir-6-days",        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75", tag: "Heaven on Earth" },
  { name: "Golden Triangle",emoji: "🕌", days: "7 Days", budget: "From ₹18k", href: "/blog/golden-triangle-7-days",img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=75", tag: "Most Popular" },
  { name: "Rajasthan",      emoji: "🏰", days: "7 Days", budget: "From ₹15k", href: "/blog/rajasthan-7-days",      img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", tag: "Heritage" },
  { name: "Kerala",         emoji: "🌿", days: "5 Days", budget: "From ₹15k", href: "/blog/kerala-5-days",         img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=75", tag: "Nature" },
  { name: "Andaman",        emoji: "🤿", days: "5 Days", budget: "From ₹18k", href: "/blog/andaman-5-days",        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=75", tag: "Trending" },
  { name: "Goa",            emoji: "🏖️", days: "3 Days", budget: "From ₹8k",  href: "/blog/goa-3-days",           img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=75", tag: "Beach" },
  { name: "Varanasi",       emoji: "🕯️", days: "3 Days", budget: "From ₹6k",  href: "/blog/varanasi-3-days",      img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=75", tag: "Spiritual" },
];

function DestinationGrid() {
  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="section-label">Free itinerary guides</span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-ink">
              7 destinations.<br /><em className="italic text-teal">All free. All detailed.</em>
            </h2>
          </div>
          <Link href="/blog" className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-dark border-b border-gold-dark pb-0.5 hover:text-ink transition-colors">
            View All Guides →
          </Link>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BLOGS.map((b, i) => (
            <FadeIn key={b.name} delay={i * 60}>
              <Link href={b.href} className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative h-36 overflow-hidden">
                  <img src={b.img} alt={b.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 text-[0.58rem] font-semibold tracking-wider uppercase bg-gold text-ink px-2 py-0.5 rounded-full">{b.tag}</span>
                  <p className="absolute bottom-2.5 left-3 font-serif text-white text-lg font-light">{b.emoji} {b.name}</p>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-xs text-muted font-light">🗓 {b.days}</span>
                  <span className="text-xs text-teal font-medium">{b.budget}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION: MONETIZATION ──────────────────────────────────────────────────────
function MonetizationSection({ onPlanTrip }: { onPlanTrip: () => void }) {
  const items = [
    {
      icon: "✦", title: "Free Custom Itinerary",
      desc: "Tell us your trip details. We build a personalised day-by-day plan in 24 hours — completely free.",
      cta: "Get Mine Free →", action: "modal", highlight: true,
      price: "Free", sub: "Always",
    },
    {
      icon: "📄", title: "Premium PDF Guides",
      desc: "Instant-download itineraries with offline maps, hotel picks and budget breakdowns. Same guides our clients use.",
      cta: "Browse Shop →", href: "/shop", highlight: false,
      price: "From ₹149", sub: "Instant download",
    },
    {
      icon: "🏨", title: "Recommended Hotels",
      desc: "Every guide includes verified stays across all budgets — from ₹700 hostels to ₹25,000 heritage palaces.",
      cta: "See Our Picks →", href: "/blog", highlight: false,
      price: "Free", sub: "In every guide",
    },
  ];
  return (
    <section className="bg-ink py-20 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="text-[0.68rem] tracking-[0.22em] uppercase text-gold block mb-3">What you get</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light text-white">
            Everything you need.<br /><em className="italic text-gold-light">Most of it free.</em>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div className={`rounded-2xl p-7 flex flex-col h-full transition-all duration-300 ${item.highlight ? "bg-gold text-ink border-2 border-gold shadow-[0_8px_32px_rgba(201,169,110,0.3)]" : "bg-white/5 border border-white/10 hover:border-white/25"}`}>
                <div className={`text-3xl mb-4 ${item.highlight ? "" : ""}`}>{item.icon}</div>
                <p className={`font-semibold text-base mb-2 ${item.highlight ? "text-ink" : "text-white"}`}>{item.title}</p>
                <p className={`text-sm font-light leading-relaxed mb-6 flex-1 ${item.highlight ? "text-ink/70" : "text-white/50"}`}>{item.desc}</p>
                <div className={`border-t pt-4 mb-4 ${item.highlight ? "border-ink/15" : "border-white/10"}`}>
                  <p className={`font-serif text-2xl font-light ${item.highlight ? "text-ink" : "text-white"}`}>{item.price}</p>
                  <p className={`text-[0.65rem] font-light ${item.highlight ? "text-ink/50" : "text-white/35"}`}>{item.sub}</p>
                </div>
                {item.action === "modal" ? (
                  <button onClick={onPlanTrip} className="w-full py-3 bg-ink text-white text-xs font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-ink/80 transition-colors">
                    {item.cta}
                  </button>
                ) : (
                  <Link href={item.href!} className={`block w-full py-3 text-center text-xs font-medium tracking-[0.1em] uppercase rounded-[1px] transition-colors border ${item.highlight ? "border-ink/20 text-ink hover:bg-ink/10" : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"}`}>
                    {item.cta}
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION: FINAL CTA ─────────────────────────────────────────────────────────
function FinalCTA({ onPlanTrip }: { onPlanTrip: () => void }) {
  return (
    <section className="bg-ink py-24 px-6 md:px-12 text-center">
      <div className="max-w-[620px] mx-auto">
        <FadeIn>
          {/* Urgency line */}
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-5">Your next trip is 2 minutes away</p>

          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-light text-white mb-5 leading-[1.1]">
            Stop planning badly.<br />
            <em className="italic text-gold-light">Start travelling smarter.</em>
          </h2>

          {/* 3 micro-proof lines */}
          <div className="flex flex-col gap-2 mb-8 max-w-[360px] mx-auto">
            {[
              "Priya saved ₹4,200 on Rajasthan last month",
              "Anika's first India trip — zero scams, zero stress",
              "Rahul & Deepa's Kerala honeymoon — ₹3,500 under budget",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5 text-xs text-white/55 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {line}
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap mb-5">
            <button onClick={onPlanTrip} className="btn-gold text-[0.88rem] px-10 py-4 shadow-[0_8px_24px_rgba(201,169,110,0.35)]">
              Fix My Next Trip — Free →
            </button>
            <Link href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold-light text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:bg-gold hover:text-ink transition-all duration-300">
              Take the Quiz ✦
            </Link>
          </div>

          <p className="text-[0.62rem] text-white/25 font-light">
            No account · No credit card · 500+ travellers already use this · 24hr reply
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────────
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  return (
    <>
      <Navbar onPlanTrip={open} />
      <main>
        <Hero onPlanTrip={open} />
        <TrustStrip />
        <WhyDifferent onPlanTrip={open} />
        <SampleItinerary onPlanTrip={open} />
        <HowItWorks onPlanTrip={open} />
        <Testimonials />
        <DestinationGrid />
        <MonetizationSection onPlanTrip={open} />
        <HomepageFAQ />
        <FinalCTA onPlanTrip={open} />
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
