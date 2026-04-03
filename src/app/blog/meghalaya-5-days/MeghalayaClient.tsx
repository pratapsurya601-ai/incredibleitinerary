"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const MEGHALAYA_TOC = [
  { id: "why-5-days", emoji: "🤔", label: "Why 5 Days?" },
  { id: "plans",      emoji: "📋", label: "Pick Your Plan" },
  { id: "itinerary",  emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "warnings",   emoji: "⚠️", label: "Honest Warnings" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Meghalaya 5-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Meghalaya in 5 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "Copied" : "Copy Link"}
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

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
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
export default function MeghalayaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹15k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🎒", label: "Comfortable", sub: "₹15k–30k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹30k+", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MEGHALAYA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Meghalaya" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cherrapunji living root bridges meghalaya"
            alt="Living root bridges in Meghalaya surrounded by lush green forest"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Meghalaya 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Northeast India
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Meghalaya in 5 Days: The Honest Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs — and the things most travel blogs conveniently leave out about the Abode of Clouds.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ₹12,000</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <StatCard icon="✈️" label="Nearest Airport" value="Guwahati" />
            <StatCard icon="🗓" label="Best Months" value="Oct–Nov" />
            <StatCard icon="💰" label="Budget / day" value="₹2,500+" />
            <StatCard icon="🥾" label="Trek Difficulty" value="Moderate" />
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most blogs recommend 3 days for Meghalaya. That&apos;s not enough. You need 5 to properly see Cherrapunji AND the Jaintia Hills without turning the whole trip into a car marathon. I&apos;ve done this route four times now, and 5 days is where the trip stops feeling rushed and starts feeling like an actual experience.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Here&apos;s what I wish someone had told me before my first Meghalaya trip: the roads will test your patience, the food will surprise you, and the landscapes will genuinely make you forget you&apos;re still in India. This isn&apos;t Kashmir-pretty or Goa-easy. Meghalaya is raw, wet, and absolutely worth the effort — if you plan it right.
          </p>
          <p className="text-sm text-muted font-light leading-relaxed mb-10">
            The drive from Guwahati to Shillong is 3 hours of hairpin turns — take Dramamine if you get carsick. But once you crest that final hill and see Shillong spread out beneath the clouds, you&apos;ll understand why the Khasi people call this the Abode of Clouds.
          </p>

          {/* ── WHY 5 DAYS ── */}
          <section id="why-5-days" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🤔 Why Exactly 5 Days?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Because 3 days means you&apos;re spending 40% of your trip in a car. And 7 days is more than most people can take off work. Here&apos;s the math:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { days: "3 Days", verdict: "Too rushed", desc: "You'll see Shillong and maybe Cherrapunji. You'll skip Dawki, Mawlynnong, and Laitlum entirely. You'll feel like you missed the best parts — because you did.", color: "bg-red-50 border-red-200" },
                { days: "5 Days", verdict: "The sweet spot", desc: "Shillong, Cherrapunji (2 full days), Dawki + Mawlynnong day trip, and Laitlum Canyons. No rushing. Time for chai stops and unexpected detours.", color: "bg-green-50 border-green-200" },
                { days: "7 Days", verdict: "For deep explorers", desc: "Add the Nongriat double-decker root bridge trek (needs a full day), Jaintia Hills caves, and Mawphlang sacred forest. The ultimate Meghalaya trip.", color: "bg-blue-50 border-blue-200" },
              ].map((d) => (
                <div key={d.days} className={`rounded-xl border p-5 ${d.color}`}>
                  <p className="font-serif text-lg font-normal mb-1 text-ink">{d.days}</p>
                  <p className="text-xs font-semibold tracking-wide uppercase text-muted mb-2">{d.verdict}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📋 Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same incredible places, different comfort levels. Pick what suits your wallet.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className={`p-5 rounded-xl border-2 transition-all duration-200 text-center group ${activeTab === p.id ? "border-gold shadow-md bg-gold/5" : "border-parchment-2 bg-white hover:border-gold hover:shadow-md"}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All three plans follow the same route — the difference is where you sleep and eat. Timings are realistic, not aspirational.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((t) => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeTab === t.id ? "bg-gold text-ink border-gold" : "border-parchment-2 text-muted hover:border-gold bg-white"}`}>
                  {t.emoji} {t.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* Day 1 — all plans share the same route */}
              <DayCard
                day="Day 1"
                title="Guwahati to Shillong"
                items={[
                  "7:00am — Land at Guwahati Airport (or start from railway station). Grab breakfast at the airport — options inside are surprisingly decent.",
                  "8:00am — Shared Sumo from Paltan Bazaar (₹400-500/person, Budget) or pre-booked cab (₹2,500-3,500, Comfortable/Premium). The NH6 is decent but winding.",
                  "11:00am — Stop at Umiam Lake (Barapani) for 20 minutes. It's touristy but genuinely beautiful. Don't pay for the boat ride — the view from the road is better.",
                  "12:00pm — Arrive Shillong. Check into your hotel. Budget: homestays in Laitumkhrah (₹600-900). Comfortable: Hotel Polo Towers or similar (₹2,500-4,000). Premium: Ri Kynjai at Umiam Lake (₹8,000+).",
                  "1:30pm — Lunch at Jadoh Stall, Lewduh (Bara Bazaar) — try jadoh (rice cooked in pork blood) and tungrymbai. Sounds weird, tastes incredible. ₹80-150 per person.",
                  "3:00pm — Walk through Police Bazaar and Lewduh (Bara Bazaar). Lewduh is one of the oldest and most chaotic markets in the Northeast. Don't skip it.",
                  "5:00pm — Ward's Lake for a quiet walk (₹20 entry), then Don Bosco Museum if it's still open (₹100 entry, closes at 5:30pm — worth seeing for the seven-sisters exhibit).",
                  "7:30pm — Dinner. Budget: ML05 Cafe in Laitumkhrah (momo + thukpa under ₹200). Premium: Dylan's Cafe for live music and continental food (₹500-800).",
                ]}
                cost={activeTab === "A" ? "₹1,800–2,500" : activeTab === "B" ? "₹4,500–6,000" : "₹9,000–12,000"}
              />

              <DayCard
                day="Day 2"
                title="Shillong to Cherrapunji (Sohra)"
                items={[
                  "6:30am — Early start. This is a big day. Grab parathas from a street stall or hotel breakfast.",
                  "7:00am — Drive to Laitlum Canyons (32km from Shillong, 1hr). Get there before 9am and you'll have the place nearly to yourself. Skip the Elephant Falls tourist circus — Laitlum is 10x better and usually empty before 9am.",
                  "9:30am — Leave Laitlum. Drive to Cherrapunji/Sohra (about 2 hours from Laitlum). The road from Shillong to Cherrapunji is genuinely one of the best drives in India — waterfalls appear out of nowhere.",
                  "12:00pm — Check in at Cherrapunji. Budget: Cherrapunjee Holiday Resort dorms (₹500-800). Comfortable: Polo Orchid Resort (₹3,000-5,000). Premium: Jiva Resort (₹7,000+).",
                  "1:00pm — Lunch at Orange Roots Cafe — surprisingly good Western food for a town this remote. Or eat at your hotel.",
                  "2:30pm — Nohkalikai Falls viewpoint (India's tallest plunge waterfall, 340m). The walk down to the lower viewpoint takes 20 minutes — do it. The top viewpoint is crowded and doesn't show the scale.",
                  "4:00pm — Mawsmai Cave (₹30 entry). Tight in places — skip if you're claustrophobic. It's a short 150m walk-through cave, impressive for the stalactites but not life-changing.",
                  "5:30pm — Seven Sisters Falls viewpoint, then Eco Park (₹40 entry) for the best sunset panorama in all of Meghalaya. Bring a jacket — it gets cold fast up here.",
                  "8:00pm — Dinner at hotel or local dhaba. Cherrapunji shuts down early — don't expect Shillong-level nightlife.",
                ]}
                cost={activeTab === "A" ? "₹1,500–2,200" : activeTab === "B" ? "₹4,000–5,500" : "₹8,000–11,000"}
              />

              <DayCard
                day="Day 3"
                title="Living Root Bridges + Cherrapunji Deep Dive"
                items={[
                  "6:00am — Wake up early. This is the trek day. Have a solid breakfast — you'll need the energy.",
                  "7:00am — Head to Tyrna village (the trailhead for Nongriat). If doing the full double-decker root bridge: 3,500 steps down, 3,500 steps back up. Budget 5-6 hours total. Local guide: ₹500-800. What most guides won't tell you: the climb back up is genuinely brutal. I've seen fit 25-year-olds stop every 50 steps. Start early so you're not climbing in afternoon heat.",
                  "Alternative (easier): Visit the single-decker root bridge at Mawlynnong/Riwai (Day 4 option) instead, and spend today exploring more of Cherrapunji.",
                  "1:00pm — Back at Tyrna. Lunch at a village stall — basic rice and dal but you'll be too hungry to care.",
                  "3:00pm — Arwah Cave (2km from Sohra) — much less touristy than Mawsmai, longer trail, fossils embedded in the walls. ₹50 entry.",
                  "4:30pm — Dainthlen Falls — small but scenic, and usually deserted. Good spot to rest your legs after the trek.",
                  "6:00pm — Early dinner and rest. Your legs will thank you. Seriously, if you did Nongriat today, you won't want to move.",
                ]}
                cost={activeTab === "A" ? "₹1,200–1,800" : activeTab === "B" ? "₹3,000–4,500" : "₹6,000–9,000"}
              />

              <DayCard
                day="Day 4"
                title="Dawki + Mawlynnong (Cleanest Village)"
                items={[
                  "6:30am — Leave Cherrapunji for Dawki (about 2.5 hours). The road passes through some of the most dramatic limestone landscapes you'll ever see.",
                  "9:00am — Arrive at Dawki River (Umngot River). Dawki River looks fake in photos. It's not. The water really is that clear — I had to touch it to believe it. Boat ride: ₹500-800 for 30 minutes (shared) or ₹1,500 for a private boat. Go before 10am for the best clarity — the light angle matters.",
                  "10:30am — Cross the river to the Bangladesh border viewpoint. You can literally see Bangladesh from the bridge. ₹0 cost, weirdly emotional experience.",
                  "11:30am — Drive to Mawlynnong (45 min from Dawki). This village won the 'Cleanest Village in Asia' tag in 2003 and they've never let it go. It's maintained but genuinely tidy — bamboo dustbins everywhere, flower gardens, and zero plastic.",
                  "12:30pm — Walk the village, see the living root bridge at Riwai (10-minute walk from Mawlynnong, much easier than Nongriat). Climb the bamboo sky walk for aerial views — it sways, which is either terrifying or fun depending on your personality.",
                  "1:30pm — Lunch in Mawlynnong. Simple Khasi food — rice, pork/chicken, local greens. ₹100-200.",
                  "3:00pm — Drive back to Shillong (3 hours). What most guides won't tell you: the Dawki-Shillong road is rough and poorly lit — don't attempt it after dark.",
                  "6:00pm — Arrive Shillong. Same hotel as Day 1 or try a different area. Laitumkhrah has the best food scene.",
                  "7:30pm — Dinner at Cafe Shillong or City Hut Dhaba. Try the pork ribs with bamboo shoot — it's a Meghalaya thing and it's genuinely excellent.",
                ]}
                cost={activeTab === "A" ? "₹2,000–2,800" : activeTab === "B" ? "₹4,500–6,500" : "₹8,500–12,000"}
              />

              <DayCard
                day="Day 5"
                title="Shillong Gems + Departure"
                items={[
                  "7:00am — Sunrise at Shillong Peak (the highest point in Meghalaya, 1,965m). Air Force maintained — opens early, ₹30 entry. Clear morning = views to Bangladesh. Cloudy morning = you're literally standing inside a cloud, which is its own kind of magic.",
                  "8:30am — Breakfast at your hotel. Pack up and check out.",
                  "9:30am — Mawphlang Sacred Forest (25km from Shillong). This is the what-most-guides-won't-tell-you moment: Mawphlang is better than most things on the standard tourist circuit. An ancient sacred forest protected by Khasi law for centuries — nothing can be removed, not even a leaf. Guided walk takes 1-1.5 hours (₹300 for a guide, mandatory). The forest is genuinely eerie and beautiful.",
                  "11:30am — Drive back through Shillong. Quick stop at Camelot Inn for their famous pork momos if hungry.",
                  "12:00pm — Begin drive to Guwahati Airport (3 hours). Budget: shared Sumo (₹400-500). Others: pre-booked cab.",
                  "3:00pm — Arrive Guwahati Airport. If your flight is later, visit Kamakhya Temple (30 min detour) — one of India's most important Shakti Peethas. Or just grab a last chai and process what you just experienced.",
                  "Pro tip: Book a flight after 5pm on Day 5. The Shillong-to-Guwahati drive is unpredictable — roadwork, military convoys, and fog can add an hour.",
                ]}
                cost={activeTab === "A" ? "₹1,200–1,800" : activeTab === "B" ? "₹3,000–4,000" : "₹5,000–8,000"}
              />
            </div>
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💰 Budget Breakdown (Per Person)</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Real numbers from real trips. These assume you&apos;re starting from Guwahati — flights to Guwahati are extra (typically ₹3,000-8,000 from metros).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Category</th>
                    <th className="text-center px-4 py-3 font-medium text-amber-700 text-xs uppercase tracking-wide">💰 Budget</th>
                    <th className="text-center px-4 py-3 font-medium text-teal text-xs uppercase tracking-wide">🎒 Comfortable</th>
                    <th className="text-center px-4 py-3 font-medium text-purple-700 text-xs uppercase tracking-wide">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Accommodation (4 nights)", "₹2,400–3,600", "₹12,000–20,000", "₹28,000–40,000"],
                    ["Transport (Guwahati-Shillong + local)", "₹2,500–3,500", "₹6,000–8,000", "₹10,000–14,000"],
                    ["Food (5 days)", "₹2,000–3,000", "₹4,000–6,000", "₹7,000–10,000"],
                    ["Activities & Entry Fees", "₹800–1,200", "₹1,500–2,500", "₹3,000–5,000"],
                    ["Misc (tips, snacks, chai)", "₹500–800", "₹1,000–1,500", "₹2,000–3,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/30 transition-colors">
                      <td className="px-4 py-3 text-muted font-light">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="px-4 py-3 text-center text-muted font-light">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-parchment font-medium">
                    <td className="px-4 py-3 text-ink">TOTAL (5 days)</td>
                    <td className="px-4 py-3 text-center text-amber-700">₹8,200–12,100</td>
                    <td className="px-4 py-3 text-center text-teal">₹24,500–38,000</td>
                    <td className="px-4 py-3 text-center text-purple-700">₹50,000–72,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              * Budget assumes shared transport, homestays/dorms, and local dhabas. Premium includes private cab for 5 days, boutique stays, and guided experiences.
            </p>
          </section>

          {/* ── Affiliate Block ── */}
          <AffiliateBlock
            destination="Meghalaya"
            hotels={[
              { name: "Ri Kynjai, Umiam Lake", type: "Luxury Lakeside Resort", price: "₹8,000+/night", rating: "4.6", url: "https://www.booking.com/hotel/in/ri-kynjai.html", badge: "Best Views" },
              { name: "Polo Orchid Resort, Cherrapunji", type: "Mid-Range Resort", price: "₹3,000–5,000/night", rating: "4.3", url: "https://www.booking.com/hotel/in/polo-orchid-resort-cherrapunjee.html" },
              { name: "By The Way Homestay, Shillong", type: "Budget Homestay", price: "₹800–1,200/night", rating: "4.5", url: "https://www.booking.com/hotel/in/by-the-way-shillong.html", badge: "Best Value" },
            ]}
            activities={[
              { name: "Nongriat Root Bridge Trek (Guided)", duration: "Full Day", price: "₹800–1,200", url: "https://www.getyourguide.com/meghalaya-l97028/", badge: "Must Do" },
              { name: "Dawki River Boating", duration: "30–60 min", price: "₹500–1,500", url: "https://www.getyourguide.com/meghalaya-l97028/" },
              { name: "Mawphlang Sacred Forest Walk", duration: "1.5 hours", price: "₹300 (guide)", url: "https://www.getyourguide.com/meghalaya-l97028/" },
            ]}
          />

          {/* ── Mid-article image ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dawki river crystal clear water boat meghalaya"
              alt="Crystal clear Dawki River in Meghalaya with boats appearing to float in air"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dawki River (Umngot) — the water is so clear the boats look like they&apos;re floating in air. Go before 10am for the best light.
              </p>
            </div>
          </div>

          {/* ── HONEST WARNINGS ── */}
          <section id="warnings" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⚠️ Honest Warnings</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              I love Meghalaya, but I&apos;m not going to pretend it&apos;s all Instagram perfection. Here&apos;s the stuff that will actually affect your trip:
            </p>
            <div className="space-y-3">
              {[
                { icon: "🛣️", title: "The roads are rough. Really rough.", desc: "Outside the NH6 highway, expect single-lane roads with potholes the size of bathtubs. The Cherrapunji-Dawki road is especially bad. Budget extra travel time — Google Maps timings are optimistic by 30-40%." },
                { icon: "🌧️", title: "June-September: just don't", desc: "Cherrapunji gets 11,000mm of annual rainfall. Most of it falls Jun-Sep. Roads wash out, treks become dangerous, visibility drops to zero. If you must go in monsoon, stick to Shillong and skip Dawki entirely." },
                { icon: "🏧", title: "ATMs are scarce outside Shillong", desc: "Cherrapunji has maybe 2 ATMs, and they run out of cash regularly. Dawki and Mawlynnong have zero ATMs. Carry enough cash from Shillong for the entire Cherrapunji-Dawki leg — at least ₹5,000-8,000." },
                { icon: "📱", title: "Phone signal disappears", desc: "BSNL has the best coverage in Meghalaya, followed by Jio. Airtel is basically useless outside Shillong. Download offline Google Maps for the entire state before you leave Guwahati. Seriously — I've gotten lost twice because of dead signal." },
                { icon: "🍖", title: "Vegetarian options are limited", desc: "Meghalaya is predominantly non-vegetarian. Pork, chicken, and dried fish are everywhere. Vegetarians won't starve — rice, dal, eggs, and momos are available — but don't expect variety. Pack snacks." },
                { icon: "🚗", title: "Self-driving is stressful", desc: "Unless you're comfortable with mountain driving on narrow roads with no guardrails, hire a local driver. They know the roads, the shortcuts, and which stretches flood during rain. A 5-day cab with driver costs ₹8,000-14,000 total — worth every rupee." },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🥾", title: "Bring Real Trekking Shoes", desc: "Not sneakers. Not sandals. Actual waterproof trekking shoes with grip. The stone steps at Nongriat are wet 300 days a year. I've seen three people slip in one morning wearing Converse.", color: "bg-amber-50 border-amber-200" },
                { icon: "☁️", title: "Best Time: October-November", desc: "Post-monsoon magic — waterfalls are thundering, everything is impossibly green, skies are clear. March-May is also great for treks (dry trails). December-February is cold and foggy — beautiful but visibility suffers.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏡", title: "Stay in Homestays", desc: "Forget generic hotels. Khasi homestays give you home-cooked jadoh, real conversations, and a window into matrilineal culture. They're also half the price of hotels. Ask your cab driver — they always know the best ones.", color: "bg-teal-50 border-teal-200" },
                { icon: "🧥", title: "Layer Up", desc: "Shillong sits at 1,500m and Cherrapunji even higher. Mornings and evenings drop to 8-12°C even in October. Bring a proper jacket, not just a hoodie. Wind chill at Laitlum Canyons is no joke.", color: "bg-teal-50 border-teal-200" },
                { icon: "📸", title: "Golden Hour at Dawki = 7-9am", desc: "The famous crystal-clear-water photos you've seen? All shot before 10am when the sun angle lights up the riverbed. Afternoon visits look completely different — still nice, but not the same.", color: "bg-rose-50 border-rose-200" },
                { icon: "🍜", title: "Eat Local, Not Tourist", desc: "Skip the 'multi-cuisine' restaurants. Find the stall with the longest local queue. Jadoh, tungrymbai, doh khlieh (pork salad), and Meghalaya's smoked pork are experiences you can't get anywhere else in India.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size and budget — we&apos;ll send a personalised Meghalaya itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Meghalaya Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Meghalaya?", a: "5 days is the sweet spot. 3 days means skipping either Dawki or the root bridges — don't do that to yourself. 5 days covers Shillong, Cherrapunji (with treks), Dawki, Mawlynnong, and Laitlum without rushing. 7 days if you want Nongriat's double-decker root bridge and the Jaintia Hills." },
                { q: "What is the best time to visit Meghalaya?", a: "October-November is peak perfection — post-monsoon waterfalls, green hills, clear skies. March-May is great for trekking with dry trails. December-February is cold but atmospheric. June-September is monsoon — roads flood, treks close, and you'll spend most of the time indoors." },
                { q: "How much does a 5-day Meghalaya trip cost?", a: "Budget backpacker: ₹8,000-12,000 (shared Sumos, homestays, dhabas). Comfortable mid-range: ₹24,000-38,000 (private cab, 3-star hotels, mix of restaurants). Premium: ₹50,000-72,000 (boutique stays, private guide, curated food experiences). All exclude flights to Guwahati." },
                { q: "Is Meghalaya safe for solo and women travellers?", a: "Very safe. Meghalaya has a matrilineal society — women hold property and family names. Locals are warm and helpful. Violent crime against tourists is extremely rare. Standard precautions apply: don't trek alone in remote areas after dark, keep your phone charged, tell your hotel your daily plans." },
                { q: "Do I need a guide for the Living Root Bridges?", a: "For the easy root bridge at Riwai (near Mawlynnong): no guide needed, it's a 10-minute flat walk. For Nongriat's double-decker: a guide isn't mandatory but highly recommended (₹500-800). The trail is 3,500+ steps each way and some sections aren't well-marked. Your knees will also appreciate knowing the shortcuts." },
                { q: "How do I get to Meghalaya?", a: "Fly to Guwahati (Assam) — direct flights from Delhi, Mumbai, Kolkata, Bangalore. From Guwahati to Shillong: shared Sumo from Paltan Bazaar (₹400-500, 3 hours) or pre-booked cab (₹2,500-3,500). There's no railway station or commercial airport in Meghalaya itself. Shillong's small airport (Umroi) has very limited flights." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Northeast India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kashmir — 6 Day Complete Guide", href: "/blog/kashmir-6-days", soon: false },
                { label: "Spiti Valley — 7 Day Adventure", href: "/blog/spiti-valley-7-days", soon: false },
                { label: "Manali — 5 Day Itinerary", href: "/blog/manali-5-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="meghalaya-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
