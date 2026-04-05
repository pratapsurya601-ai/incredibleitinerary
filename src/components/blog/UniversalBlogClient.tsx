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
import InlineSignup from "@/components/email/InlineSignup";
import { AFFILIATE } from "@/lib/config";

/* ── Types ─────────────────────────────────────────────────────────────── */
export interface DayData {
  day: string;
  title: string;
  items: string[];
  cost: string;
}

export interface PlanData {
  label: string;
  sub: string;
  days: DayData[];
}

export interface VisaInfo {
  flag: string;
  title: string;
  bg: string;
  border: string;
  titleColor: string;
  items: [string, string][];
}

export interface BudgetRow {
  tier: string;
  accommodation: string;
  food: string;
  transport: string;
  activities: string;
  total: string;
}

export interface TipData {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface FaqData {
  q: string;
  a: string;
}

export interface TocItem {
  id: string;
  emoji: string;
  label: string;
}

export interface UniversalBlogData {
  destination: string;
  country: string;
  countryFlag: string;
  slug: string;
  heroQuery: string;
  heroAlt: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  stats: { duration: string; budgetFrom: string; bestMonths: string; airport: string };
  toc: TocItem[];
  visa: [VisaInfo, VisaInfo];
  plans: [PlanData, PlanData, PlanData];
  budgetTable: BudgetRow[];
  mistakes: TipData[];
  tips: TipData[];
  faqs: FaqData[];
  combineWith: string[];
  relatedSlugs: string[];
  galleryQuery?: string;
}

/* ── Reading-progress bar ─────────────────────────────────────────────── */
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

/* ── Share bar ─────────────────────────────────────────────────────────── */
function ShareBar({ title }: { title: string }) {
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=${encodeURIComponent(title)}&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

/* ── Stat card ─────────────────────────────────────────────────────────── */
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

/* ── Day card (collapsible) ───────────────────────────────────────────── */
function DayCard({ day, title, items, cost }: DayData) {
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

/* ── Tip card ──────────────────────────────────────────────────────────── */
function TipCard({ icon, title, desc, color }: TipData) {
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

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
function FaqItem({ q, a }: FaqData) {
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

/* ══════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════════════════════════════════ */
export default function UniversalBlogClient({ data }: { data: UniversalBlogData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(1);

  const planEmojis = ["💰", "✨", "💎"];
  const planColors = [
    "border-amber-300 bg-amber-50 text-amber-800",
    "border-blue-300 bg-blue-50 text-blue-800",
    "border-purple-300 bg-purple-50 text-purple-800",
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={data.toc} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination={data.destination} />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query={data.heroQuery}
            alt={data.heroAlt}
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">{data.destination}</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  {data.category}
                </span>
                <span className="text-white/60 text-xs">{data.date}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">{data.readTime}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                {data.destination} in {data.stats.duration}: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                {data.intro}
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar title={`${data.destination} Travel Guide`} />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{data.countryFlag} {data.country}</span>
              <span>·</span>
              <span>🗓 {data.stats.duration}</span>
              <span>·</span>
              <span>💰 From {data.stats.budgetFrom}/day</span>
            </div>
          </div>

          {/* Intro blockquote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              {data.intro}
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value={data.stats.duration} />
            <StatCard icon="💰" label="Budget From" value={data.stats.budgetFrom + "/day"} />
            <StatCard icon="🌡️" label="Best Months" value={data.stats.bestMonths} />
            <StatCard icon="✈️" label="Airport" value={data.stats.airport} />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📋 Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Entry requirements vary by passport. Here&apos;s the 2026 breakdown.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.visa.map((v, i) => (
                <div key={i} className={`rounded-xl border p-5 ${v.bg} ${v.border}`}>
                  <h3 className={`font-serif text-lg font-normal mb-3 flex items-center gap-2 ${v.titleColor}`}>
                    <span>{v.flag}</span> {v.title}
                  </h3>
                  <div className="space-y-2">
                    {v.items.map(([k, val]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.plans.map((p, i) => (
                <button key={i} onClick={() => { setActiveTab(i as 0|1|2); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{planEmojis[i]}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {data.plans.map((p, i) => (
                <button key={i} onClick={() => setActiveTab(i as 0|1|2)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === i ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {planEmojis[i]} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {data.plans[activeTab].days.map((day, i) => (
                <DayCard key={i} {...day} />
              ))}
            </div>

            <div className={`mt-6 rounded-xl p-4 border ${planColors[activeTab]}`}>
              <p className="text-xs font-medium">{planEmojis[activeTab]} {data.plans[activeTab].label} Plan Total: {data.plans[activeTab].sub}/day average</p>
            </div>
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-6">All costs per person per day.</p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    {["Tier", "Accommodation", "Food", "Transport", "Activities", "Total/Day"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-medium text-ink/70 tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.budgetTable.map((row, i) => (
                    <tr key={i} className={`border-b border-parchment-2 ${i % 2 === 0 ? "bg-white" : "bg-parchment/40"}`}>
                      <td className="px-4 py-3 font-medium text-ink">{row.tier}</td>
                      <td className="px-4 py-3 text-muted">{row.accommodation}</td>
                      <td className="px-4 py-3 text-muted">{row.food}</td>
                      <td className="px-4 py-3 text-muted">{row.transport}</td>
                      <td className="px-4 py-3 text-muted">{row.activities}</td>
                      <td className="px-4 py-3 font-semibold text-ink">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <InlineCTA destination={data.destination} onPlanTrip={() => setModalOpen(true)} />

          {/* ── EMAIL SIGNUP ── */}
          <InlineSignup />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">❌ Mistakes to Avoid</h2>
            <p className="text-sm text-muted font-light mb-6">Things every first-timer gets wrong.</p>
            <div className="space-y-3">
              {data.mistakes.map((m, i) => <TipCard key={i} {...m} />)}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💡 Pro Tips</h2>
            <p className="text-sm text-muted font-light mb-6">Insider knowledge that saves time and money.</p>
            <div className="space-y-3">
              {data.tips.map((t, i) => <TipCard key={i} {...t} />)}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">❓ FAQ</h2>
            <p className="text-sm text-muted font-light mb-6">Quick answers to the most searched questions.</p>
            <div className="space-y-3">
              {data.faqs.map((f, i) => <FaqItem key={i} {...f} />)}
            </div>
          </section>
        </div>

        <DestinationGallery
          title={`${data.destination} — Must-See Places`}
          subtitle={data.intro ? data.intro.split('.')[0] + '.' : `Explore the best of ${data.destination}, ${data.country}`}
          spots={[
            { name: `${data.destination} Highlights`, query: data.galleryQuery || data.heroQuery, desc: `The iconic sights and unmissable experiences of ${data.destination}.` },
            { name: `${data.destination} Landscapes`, query: `${data.heroQuery} scenic landscape nature`, desc: `The natural scenery that makes ${data.destination} unforgettable.` },
            { name: `${data.destination} Architecture`, query: `${data.destination} ${data.country} architecture historic landmark`, desc: `Historic landmarks and architectural wonders of ${data.destination}.` },
            { name: `${data.destination} Food & Culture`, query: `${data.destination} ${data.country} local food culture market`, desc: `Local cuisine, markets, and cultural life in ${data.destination}.` },
            { name: `${data.destination} Streets & Life`, query: `${data.destination} ${data.country} street life people vibrant`, desc: `The everyday atmosphere and street character of ${data.destination}.` },
          ]}
        />
        <AffiliateBlock
          destination={data.destination}
          hotels={(() => {
            const rows = data.budgetTable;
            const tiers = [
              { idx: 0, name: `Budget Stay in ${data.destination}`, rating: "3", badge: "Best Value" },
              { idx: Math.floor(rows.length / 2), name: `Mid-Range Hotel in ${data.destination}`, rating: "4", badge: "Most Popular" },
              { idx: rows.length - 1, name: `Luxury Hotel in ${data.destination}`, rating: "5" },
            ];
            return tiers.map(({ idx, name, rating, badge }) => {
              const row = rows[idx] || rows[0];
              const acc = row?.accommodation || "";
              const priceRaw = acc.split("(")[0].trim();
              const typeRaw = acc.includes("(") ? acc.replace(/^[^(]+\(/, "").replace(/\)$/, "") : "Hotel";
              return { name, type: typeRaw, price: priceRaw, rating, url: AFFILIATE.bookingCom(data.destination), badge };
            });
          })()}
          activities={[
            { name: `Top-Rated Tours in ${data.destination}`, duration: "Half or full day", price: "From $25", url: AFFILIATE.getYourGuide(data.destination), badge: "Bestseller" },
            { name: `${data.destination} City Highlights Tour`, duration: "3–4 hours", price: "From $15", url: AFFILIATE.getYourGuide(data.destination) },
          ]}
        />
        <CombineWith currentSlug={data.slug} />
        <RelatedGuides currentSlug={data.slug} />
        <Comments />
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
