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

/* ── TOC ─────────────────────────────────────────────────────────────── */
const TOC = [
  { id: "honest", emoji: "⚡", label: "Why Southeast Asia" },
  { id: "countries", emoji: "🗺️", label: "Country-by-Country Guide" },
  { id: "routes", emoji: "📅", label: "Best Multi-Country Routes" },
  { id: "budget", emoji: "💰", label: "Budget Comparison" },
  { id: "visa", emoji: "📋", label: "Visa Guide for Indians" },
  { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
  { id: "faq", emoji: "❓", label: "FAQ" },
];

/* ── Reading-progress bar ────────────────────────────────────────────── */
function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

/* ── Share bar ────────────────────────────────────────────────────────── */
function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Southeast Asia Travel Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Southeast%20Asia%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

/* ── FAQ accordion ────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function SoutheastAsiaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Southeast Asia" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bali rice terrace temple sunset indonesia southeast asia tropical"
            alt="Bali rice terraces at sunset with temple silhouette in Southeast Asia"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Southeast Asia Travel Guide</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Southeast Asia
                </span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">22 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Southeast Asia Travel Guide:
                <em className="italic text-amber-300"> Thailand, Bali, Vietnam, Singapore &amp; Beyond</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                10 countries, 30+ city guides, real budgets in INR, visa requirements for Indian passports &mdash; and the routes that actually make sense.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🌏 10 Countries</span>
              <span>{"·"}</span>
              <span>🗓 30+ Guides</span>
              <span>{"·"}</span>
              <span>💰 From ₹1,200/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Southeast Asia is the reason half of India discovered international travel. Cheap flights, visa on arrival, vegetarian food everywhere, and daily budgets that start at ₹1,200. This guide covers every country worth visiting, with honest assessments and links to our detailed city guides.
            </p>
          </blockquote>

          {/* ── WHY SOUTHEAST ASIA ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Why Southeast Asia Is the Best First International Trip</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              If you&apos;ve never left India before, Southeast Asia is where you should start. Here&apos;s why it works so well for Indian travellers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">🛂</span>
                  <div>
                    <p className="font-medium text-sm text-stone-900 mb-1">Easy Visa Access</p>
                    <p className="text-xs text-gray-700 font-light leading-relaxed">Most SE Asian countries offer visa on arrival or e-visa for Indian passports. Thailand, Bali, Cambodia and Nepal don&apos;t require any pre-approval. No embassy visits, no interviews, no stress.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">✈️</span>
                  <div>
                    <p className="font-medium text-sm text-stone-900 mb-1">Cheap Direct Flights</p>
                    <p className="text-xs text-gray-700 font-light leading-relaxed">AirAsia, IndiGo and VietJet fly direct from Delhi, Mumbai and Bangalore to Bangkok, KL and Bali. Return tickets range from ₹8,000 to ₹18,000 if booked 6&ndash;8 weeks ahead.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">🥬</span>
                  <div>
                    <p className="font-medium text-sm text-stone-900 mb-1">Vegetarian Food Available</p>
                    <p className="text-xs text-gray-700 font-light leading-relaxed">Thailand has &quot;jay&quot; (เจ) restaurants everywhere. Bali is a vegetarian paradise. Singapore has Indian food on every corner. Vietnam and Cambodia are trickier but manageable with phrases like &quot;khong thit&quot; (no meat).</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">💰</span>
                  <div>
                    <p className="font-medium text-sm text-stone-900 mb-1">Genuinely Budget-Friendly</p>
                    <p className="text-xs text-gray-700 font-light leading-relaxed">Vietnam, Cambodia and Nepal cost less than Goa. Thailand and Bali are comparable to Rajasthan. Only Singapore feels expensive &mdash; and even there, hawker centres offer meals for ₹300&ndash;500.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── COUNTRY-BY-COUNTRY GUIDE ── */}
          <section id="countries" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Country-by-Country Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every Southeast Asian country worth visiting from India, with visa status, daily budgets and links to our detailed city guides.
            </p>

            {/* Thailand */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇹🇭</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Thailand</h3>
                  <p className="text-xs text-muted">Visa on arrival · ₹2,000–₹5,000/day · Best: Nov–Feb</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The most complete SE Asian destination for first-timers. Bangkok has temples, street food and nightlife. Chiang Mai has mountains and elephant sanctuaries. Phuket and Krabi have world-class beaches. The infrastructure for tourists is excellent &mdash; you&apos;ll never feel lost. Thai massage, pad thai for ₹150, and night markets that stay open past midnight. Visa on arrival is free for 60 days.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/bangkok-4-days" className="text-xs text-teal hover:underline">Bangkok 4 Days →</Link>
                <Link href="/blog/phuket-5-days" className="text-xs text-teal hover:underline">Phuket 5 Days →</Link>
                <Link href="/blog/chiang-mai-4-days" className="text-xs text-teal hover:underline">Chiang Mai 4 Days →</Link>
              </div>
            </div>

            {/* Indonesia (Bali) */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇮🇩</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Indonesia (Bali)</h3>
                  <p className="text-xs text-muted">Visa on arrival · ₹2,500–₹6,000/day · Best: Apr–Oct</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">Bali is the spiritual heart of Southeast Asia for Indian travellers. Hindu temples, rice terraces, yoga retreats and surf breaks within a single island. Ubud is culture and terraces. Uluwatu is cliffs and sunsets. Seminyak and Canggu are beach clubs and nightlife. Beyond Bali, Lombok offers quieter beaches and Komodo has the dragons. Nusa Penida&apos;s Kelingking Beach is one of the most photographed coastlines in Asia.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/bali-5-days" className="text-xs text-teal hover:underline">Bali 5 Days →</Link>
                <Link href="/blog/ubud-3-days" className="text-xs text-teal hover:underline">Ubud 3 Days →</Link>
                <Link href="/blog/lombok-4-days" className="text-xs text-teal hover:underline">Lombok 4 Days →</Link>
                <Link href="/blog/nusa-penida-3-days" className="text-xs text-teal hover:underline">Nusa Penida 3 Days →</Link>
                <Link href="/blog/komodo-4-days" className="text-xs text-teal hover:underline">Komodo 4 Days →</Link>
              </div>
            </div>

            {/* Vietnam */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇻🇳</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Vietnam</h3>
                  <p className="text-xs text-muted">E-visa · ₹1,500–₹4,000/day · Best: Oct–Apr (north), Dec–Aug (south)</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The best value destination in Southeast Asia. Pho for ₹80, rooms for ₹800/night, and scenery that rivals any country on earth. Ha Long Bay&apos;s limestone karsts from a junk boat at sunrise. Hoi An&apos;s lantern-lit ancient town. Ho Chi Minh City&apos;s war tunnels and rooftop bars. The country stretches 1,650km north to south &mdash; each region feels like a different country. E-visa takes 3 working days online.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/hanoi-3-days" className="text-xs text-teal hover:underline">Hanoi 3 Days →</Link>
                <Link href="/blog/ho-chi-minh-city-3-days" className="text-xs text-teal hover:underline">Ho Chi Minh 3 Days →</Link>
                <Link href="/blog/ha-long-bay-3-days" className="text-xs text-teal hover:underline">Ha Long Bay 3 Days →</Link>
                <Link href="/blog/hoi-an-3-days" className="text-xs text-teal hover:underline">Hoi An 3 Days →</Link>
                <Link href="/blog/da-nang-4-days" className="text-xs text-teal hover:underline">Da Nang 4 Days →</Link>
                <Link href="/blog/mekong-delta-3-days" className="text-xs text-teal hover:underline">Mekong Delta 3 Days →</Link>
              </div>
            </div>

            {/* Singapore */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇸🇬</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Singapore</h3>
                  <p className="text-xs text-muted">Visa required for Indians · ₹5,000–₹12,000/day · Best: Year-round</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The cleanest, most efficient city in Asia. Marina Bay Sands, Gardens by the Bay, Sentosa Island and hawker centres that are UNESCO-recognised. Singapore is expensive by SE Asian standards but hawker food keeps meals affordable at ₹300&ndash;600. Little India and Chinatown feel genuinely authentic. The visa requires 2&ndash;3 weeks processing but the city is worth the paperwork. Perfect as a 3-day stopover combined with Malaysia or Bali.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/singapore-3-days" className="text-xs text-teal hover:underline">Singapore 3 Days →</Link>
              </div>
            </div>

            {/* Malaysia */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇲🇾</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Malaysia</h3>
                  <p className="text-xs text-muted">E-visa / eNTRI · ₹2,000–₹5,000/day · Best: Mar–Oct</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The most underrated country in Southeast Asia. Kuala Lumpur&apos;s Petronas Towers and Batu Caves. Langkawi&apos;s duty-free island with cable cars and mangrove tours. Penang has the best street food in all of Asia &mdash; and that&apos;s not an exaggeration. The eNTRI system lets Indians get a 15-day entry note online in minutes. Malaysia also has a large Indian Tamil community, so you&apos;ll find familiar food everywhere.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/malaysia-7-days" className="text-xs text-teal hover:underline">Malaysia 7 Days →</Link>
                <Link href="/blog/kuala-lumpur-3-days" className="text-xs text-teal hover:underline">Kuala Lumpur 3 Days →</Link>
                <Link href="/blog/langkawi-3-days" className="text-xs text-teal hover:underline">Langkawi 3 Days →</Link>
                <Link href="/blog/penang-3-days" className="text-xs text-teal hover:underline">Penang 3 Days →</Link>
              </div>
            </div>

            {/* Cambodia */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇰🇭</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Cambodia</h3>
                  <p className="text-xs text-muted">Visa on arrival · ₹1,200–₹3,000/day · Best: Nov–Mar</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">Angkor Wat alone justifies the trip &mdash; sunrise over the world&apos;s largest religious monument is one of Asia&apos;s defining travel moments. Siem Reap is the temple town, cheap and backpacker-friendly. Phnom Penh is grittier but has the Royal Palace, riverside promenades and sobering Killing Fields history. Cambodia is one of the cheapest countries in SE Asia with beers for ₹50 and rooms for ₹600/night.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/angkor-wat-4-days" className="text-xs text-teal hover:underline">Angkor Wat 4 Days →</Link>
                <Link href="/blog/phnom-penh-3-days" className="text-xs text-teal hover:underline">Phnom Penh 3 Days →</Link>
              </div>
            </div>

            {/* Sri Lanka */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇱🇰</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Sri Lanka</h3>
                  <p className="text-xs text-muted">ETA online · ₹2,000–₹5,000/day · Best: Dec–Mar (west), Apr–Sep (east)</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">India&apos;s closest international neighbour packs temples, tea plantations, wildlife safaris and beaches into an island you can drive across in 6 hours. Colombo is developing fast with modern restaurants and colonial architecture. Kandy has the Temple of the Tooth. Ella&apos;s train ride through tea country is one of the most scenic rail journeys in the world. The ETA is processed online in 24&ndash;48 hours.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/sri-lanka-7-days" className="text-xs text-teal hover:underline">Sri Lanka 7 Days →</Link>
                <Link href="/blog/colombo-3-days" className="text-xs text-teal hover:underline">Colombo 3 Days →</Link>
              </div>
            </div>

            {/* Philippines */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇵🇭</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Philippines</h3>
                  <p className="text-xs text-muted">Visa-free 30 days · ₹2,000–₹5,000/day · Best: Nov–May</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">7,641 islands with some of the clearest water in the world. Palawan was voted the best island on earth multiple times. Boracay has perfect white sand beaches (now regulated to prevent overcrowding). Siargao is the surfing capital of the Philippines. The country is visa-free for 30 days for Indian passport holders &mdash; one of the few that offers this. English is widely spoken, making it the easiest SE Asian country to navigate.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/palawan-4-days" className="text-xs text-teal hover:underline">Palawan 4 Days →</Link>
                <Link href="/blog/boracay-4-days" className="text-xs text-teal hover:underline">Boracay 4 Days →</Link>
                <Link href="/blog/siargao-4-days" className="text-xs text-teal hover:underline">Siargao 4 Days →</Link>
              </div>
            </div>

            {/* Nepal */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇳🇵</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Nepal</h3>
                  <p className="text-xs text-muted">Visa on arrival (free for Indians) · ₹1,500–₹3,500/day · Best: Oct–Nov, Mar–Apr</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The easiest international trip from India &mdash; no visa needed, just carry your passport or voter ID. Kathmandu&apos;s Durbar Square and Boudhanath Stupa are UNESCO treasures. Pokhara is the gateway to the Annapurna Circuit. Chitwan National Park has rhinos and tigers. Budget-wise, Nepal is cheaper than most Indian hill stations. The October&ndash;November window offers clear Himalayan views and the Dashain festival.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/nepal-7-days" className="text-xs text-teal hover:underline">Nepal 7 Days →</Link>
                <Link href="/blog/kathmandu-4-days" className="text-xs text-teal hover:underline">Kathmandu 4 Days →</Link>
              </div>
            </div>

            {/* Myanmar */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🇲🇲</span>
                <div>
                  <h3 className="font-serif text-lg font-light text-ink">Myanmar</h3>
                  <p className="text-xs text-muted">E-visa · ₹1,500–₹3,000/day · Best: Nov–Feb</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The last frontier of Southeast Asian travel. Bagan&apos;s 2,000+ ancient temples spread across a dusty plain rival Angkor Wat in scale and surpass it in solitude. Yangon&apos;s Shwedagon Pagoda is covered in real gold and is genuinely awe-inspiring. Inle Lake has floating gardens and stilt villages. Myanmar is less tourist-developed than its neighbours, which means fewer comforts but more authentic experiences. The e-visa takes 3 days to process online.</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/bagan-4-days" className="text-xs text-teal hover:underline">Bagan 4 Days →</Link>
                <Link href="/blog/yangon-3-days" className="text-xs text-teal hover:underline">Yangon 3 Days →</Link>
              </div>
            </div>
          </section>

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="angkor wat sunrise cambodia temple reflection orange sky"
              alt="Angkor Wat at sunrise with reflection in the moat, Cambodia"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Angkor Wat at sunrise &mdash; arrive by 5:15am and position yourself at the left reflecting pool for the iconic shot without the crowds.
              </p>
            </div>
          </div>

          {/* ── BEST MULTI-COUNTRY ROUTES ── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Best Multi-Country Routes</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three tested routes that minimise backtracking and maximise diversity. All routes use cheap internal flights on AirAsia, VietJet or Lion Air (₹2,000&ndash;5,000 per hop).
            </p>

            {/* Route 1 */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">14 Days</span>
                <h3 className="font-serif text-lg font-light text-ink">The 2-Week Classic</h3>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The most popular multi-country route for first-timers. Covers temples, street food, beaches and rice terraces across 4 countries.</p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Bangkok (3D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Chiang Mai (2D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Siem Reap (3D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Ho Chi Minh (2D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Bali (4D)</span>
              </div>
              <p className="text-xs text-muted font-light">Est. budget: ₹80,000&ndash;₹1,40,000 (flights + accommodation + food + activities)</p>
            </div>

            {/* Route 2 */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded-full">10 Days</span>
                <h3 className="font-serif text-lg font-light text-ink">The Budget City Route</h3>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">Three cities connected by cheap flights. Mix of temples, modern skylines and hawker food. Perfect for a tight schedule.</p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Bangkok (4D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Kuala Lumpur (3D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Singapore (3D)</span>
              </div>
              <p className="text-xs text-muted font-light">Est. budget: ₹60,000&ndash;₹1,10,000 (flights + accommodation + food + activities)</p>
            </div>

            {/* Route 3 */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">21 Days</span>
                <h3 className="font-serif text-lg font-light text-ink">The 3-Week Ultimate</h3>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-3">The definitive Southeast Asia trip. North to south through mainland SE Asia, ending in the Indonesian islands. Requires good planning but rewards with incredible diversity.</p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Bangkok (3D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Hanoi (2D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Ha Long Bay (2D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Hoi An (2D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Siem Reap (3D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Bali (4D)</span>
                <span className="text-muted text-xs">→</span>
                <span className="bg-parchment text-xs text-ink px-3 py-1.5 rounded-full">Lombok (3D)</span>
              </div>
              <p className="text-xs text-muted font-light">Est. budget: ₹1,20,000&ndash;₹2,20,000 (flights + accommodation + food + activities)</p>
            </div>
          </section>

          {/* ── BUDGET COMPARISON TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💰 Budget Comparison</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Daily costs per person across SE Asian countries. All prices in INR, based on mid-range travel style (private room, local restaurants, public transport + occasional taxi).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment text-left">
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Country</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Accommodation</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Food</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Transport</th>
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Total/Day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  <tr className="bg-white"><td className="px-4 py-3 text-muted font-light">🇻🇳 Vietnam</td><td className="px-4 py-3 text-muted font-light">₹600–₹1,500</td><td className="px-4 py-3 text-muted font-light">₹400–₹800</td><td className="px-4 py-3 text-muted font-light">₹200–₹500</td><td className="px-4 py-3 font-medium text-ink">₹1,500–₹4,000</td></tr>
                  <tr className="bg-parchment/30"><td className="px-4 py-3 text-muted font-light">🇰🇭 Cambodia</td><td className="px-4 py-3 text-muted font-light">₹500–₹1,200</td><td className="px-4 py-3 text-muted font-light">₹300–₹700</td><td className="px-4 py-3 text-muted font-light">₹200–₹400</td><td className="px-4 py-3 font-medium text-ink">₹1,200–₹3,000</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 text-muted font-light">🇳🇵 Nepal</td><td className="px-4 py-3 text-muted font-light">₹600–₹1,500</td><td className="px-4 py-3 text-muted font-light">₹400–₹800</td><td className="px-4 py-3 text-muted font-light">₹200–₹500</td><td className="px-4 py-3 font-medium text-ink">₹1,500–₹3,500</td></tr>
                  <tr className="bg-parchment/30"><td className="px-4 py-3 text-muted font-light">🇲🇲 Myanmar</td><td className="px-4 py-3 text-muted font-light">₹600–₹1,200</td><td className="px-4 py-3 text-muted font-light">₹300–₹700</td><td className="px-4 py-3 text-muted font-light">₹300–₹600</td><td className="px-4 py-3 font-medium text-ink">₹1,500–₹3,000</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 text-muted font-light">🇹🇭 Thailand</td><td className="px-4 py-3 text-muted font-light">₹800–₹2,500</td><td className="px-4 py-3 text-muted font-light">₹500–₹1,200</td><td className="px-4 py-3 text-muted font-light">₹300–₹800</td><td className="px-4 py-3 font-medium text-ink">₹2,000–₹5,000</td></tr>
                  <tr className="bg-parchment/30"><td className="px-4 py-3 text-muted font-light">🇮🇩 Bali</td><td className="px-4 py-3 text-muted font-light">₹1,000–₹3,000</td><td className="px-4 py-3 text-muted font-light">₹500–₹1,200</td><td className="px-4 py-3 text-muted font-light">₹300–₹600</td><td className="px-4 py-3 font-medium text-ink">₹2,500–₹6,000</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 text-muted font-light">🇲🇾 Malaysia</td><td className="px-4 py-3 text-muted font-light">₹800–₹2,500</td><td className="px-4 py-3 text-muted font-light">₹400–₹1,000</td><td className="px-4 py-3 text-muted font-light">₹300–₹700</td><td className="px-4 py-3 font-medium text-ink">₹2,000–₹5,000</td></tr>
                  <tr className="bg-parchment/30"><td className="px-4 py-3 text-muted font-light">🇱🇰 Sri Lanka</td><td className="px-4 py-3 text-muted font-light">₹800–₹2,500</td><td className="px-4 py-3 text-muted font-light">₹400–₹1,000</td><td className="px-4 py-3 text-muted font-light">₹300–₹800</td><td className="px-4 py-3 font-medium text-ink">₹2,000–₹5,000</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 text-muted font-light">🇵🇭 Philippines</td><td className="px-4 py-3 text-muted font-light">₹800–₹2,500</td><td className="px-4 py-3 text-muted font-light">₹400–₹1,000</td><td className="px-4 py-3 text-muted font-light">₹400–₹800</td><td className="px-4 py-3 font-medium text-ink">₹2,000–₹5,000</td></tr>
                  <tr className="bg-parchment/30"><td className="px-4 py-3 text-muted font-light">🇸🇬 Singapore</td><td className="px-4 py-3 text-muted font-light">₹3,000–₹8,000</td><td className="px-4 py-3 text-muted font-light">₹1,000–₹2,500</td><td className="px-4 py-3 text-muted font-light">₹500–₹1,200</td><td className="px-4 py-3 font-medium text-ink">₹5,000–₹12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── VISA GUIDE FOR INDIANS ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📋 Visa Guide for Indian Passport Holders</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Quick reference for every country covered in this guide. Always check the latest requirements on the official embassy website before booking.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                <span className="text-green-700 font-medium text-xs w-24 flex-shrink-0">VOA (Free)</span>
                <span className="text-sm text-muted font-light">🇹🇭 Thailand (60 days) · 🇰🇭 Cambodia ($30 fee) · 🇳🇵 Nepal (free, no visa needed)</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                <span className="text-green-700 font-medium text-xs w-24 flex-shrink-0">VOA (Paid)</span>
                <span className="text-sm text-muted font-light">🇮🇩 Indonesia/Bali (Rp500,000 / ~₹2,700 for 30 days)</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3">
                <span className="text-blue-700 font-medium text-xs w-24 flex-shrink-0">E-Visa</span>
                <span className="text-sm text-muted font-light">🇻🇳 Vietnam (90 days, $25) · 🇲🇲 Myanmar (28 days, $50) · 🇱🇰 Sri Lanka ETA ($50) · 🇲🇾 Malaysia eNTRI (15 days) or e-visa (30 days)</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-xl px-5 py-3">
                <span className="text-purple-700 font-medium text-xs w-24 flex-shrink-0">Visa-Free</span>
                <span className="text-sm text-muted font-light">🇵🇭 Philippines (30 days visa-free for Indian passports)</span>
              </div>
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3">
                <span className="text-amber-700 font-medium text-xs w-24 flex-shrink-0">Visa Required</span>
                <span className="text-sm text-muted font-light">🇸🇬 Singapore (apply through VFS Global, 2&ndash;3 weeks processing, ~₹2,000&ndash;3,000 fee)</span>
              </div>
            </div>
          </section>

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "✈️", title: "Not booking internal flights early", desc: "AirAsia and VietJet fares double 2 weeks before departure. Book inter-city flights 4\u20136 weeks ahead. A Bangkok to Bali flight that costs \u20B93,000 in advance costs \u20B912,000 last minute." },
                { icon: "💸", title: "Overpaying for everything in Bali", desc: "Bali has a tourist tax on everything. Always negotiate taxi fares before getting in. Use Grab instead of airport taxis. Eat at local warungs, not the tourist strip. The same nasi goreng is \u20B980 at a warung and \u20B9500 at a Seminyak restaurant." },
                { icon: "🛡️", title: "Skipping travel insurance", desc: "Medical evacuation from a remote SE Asian island costs \u20B915\u201325 lakh. A basic policy from ICICI Lombard or Bajaj Allianz costs \u20B9500\u20131,500 for 2 weeks. Motorbike accidents in Bali and Thailand are the most common claims." },
                { icon: "🏃", title: "Trying to cover too many countries", desc: "3 countries in 2 weeks is the maximum for a good trip. More than that and you spend more time in airports and buses than actually experiencing places. Better to do 2 countries properly than 5 countries in a rush." },
                { icon: "💱", title: "Exchanging money at airports", desc: "Airport exchange counters give 5\u201310% worse rates than city centres. In Bangkok, SuperRich on Ratchadamri gives the best rates. In Bali, authorised money changers in Ubud and Seminyak are reliable. Always carry a Niyo or Fi travel card for the best forex rates." },
                { icon: "📱", title: "Not getting a local SIM card", desc: "Buy a local SIM at the airport arrivals hall. Thailand (AIS or TrueMove), Vietnam (Viettel), Bali (Telkomsel) \u2014 all cost \u20B9300\u2013600 for 7\u201315 days of unlimited data. Don\u2019t rely on international roaming, which costs 50x more." },
              ].map((m) => (
                <div key={m.title} className="rounded-xl p-5 border bg-white border-parchment-2 hover:border-rust/30 transition-colors">
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

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Southeast Asia &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Southeast Asia&apos;s most iconic destinations."
            spots={[
              { name: "Angkor Wat, Cambodia", query: "angkor wat sunrise cambodia temple ancient stone reflection", desc: "The world\u2019s largest religious monument. Sunrise over the moat is one of Asia\u2019s defining travel moments." },
              { name: "Ha Long Bay, Vietnam", query: "ha long bay vietnam limestone karst junk boat emerald water", desc: "1,600 limestone karsts rising from emerald water. Best experienced on an overnight junk boat cruise." },
              { name: "Tegallalang Rice Terraces, Bali", query: "tegallalang rice terraces bali green paddy fields morning mist", desc: "Ubud\u2019s most iconic landscape. Arrive at 6:30am for mist and silence before the crowds arrive." },
              { name: "Phi Phi Islands, Thailand", query: "phi phi islands thailand turquoise water limestone cliffs longtail boat", desc: "Turquoise water framed by towering limestone cliffs. Take a longtail boat from Phuket for the day trip." },
              { name: "Marina Bay, Singapore", query: "marina bay sands singapore skyline night lights reflection", desc: "Singapore\u2019s iconic skyline. Gardens by the Bay\u2019s Supertrees light up at 7:45pm and 8:45pm nightly." },
              { name: "Bagan Temples, Myanmar", query: "bagan temples myanmar sunrise hot air balloon ancient pagoda plain", desc: "Over 2,000 ancient temples spread across a dusty plain. Sunrise with hot air balloons is unforgettable." },
            ]}
          />

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Southeast Asia"
            hotels={[
              { name: "Lub d Bangkok Siam", type: "Social Hostel · Bangkok", price: "From ₹800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/th/lub-d-bangkok-siam-square.html?aid=2820480" },
              { name: "Alila Seminyak", type: "Beachfront Boutique · Bali", price: "From ₹6,000/night", rating: "5", badge: "Mid-range", url: "https://www.booking.com/hotel/id/alila-seminyak.html?aid=2820480" },
              { name: "Raffles Singapore", type: "Heritage Luxury · Singapore", price: "From ₹35,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/sg/raffles.html?aid=2820480" },
            ]}
            activities={[
              { name: "Angkor Wat Sunrise Tour", duration: "Full day", price: "From ₹2,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=angkor+wat&partner_id=PSZA5UI" },
              { name: "Ha Long Bay Overnight Cruise", duration: "2 days", price: "From ₹5,000/person", badge: "Top rated", url: "https://www.getyourguide.com/s/?q=ha+long+bay&partner_id=PSZA5UI" },
              { name: "Bangkok Temple & Street Food Tour", duration: "Half day", price: "From ₹1,800/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=bangkok+temple+tour&partner_id=PSZA5UI" },
              { name: "Bali Tegallalang & Ubud Tour", duration: "10 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=bali+ubud+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="southeast-asia-guide-pdf"
          />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Southeast Asia?", a: "November to February is the best overall window for mainland SE Asia (Thailand, Vietnam, Cambodia, Myanmar). Bali\u2019s dry season is April to October. Singapore and Malaysia are year-round. Avoid June\u2013September for the mainland monsoon, but this is actually Bali\u2019s best season." },
                { q: "How much does a 2-week SE Asia trip cost from India?", a: "Budget: \u20B960,000\u2013\u20B980,000 for 2 countries (Vietnam + Cambodia or Thailand + Cambodia). Mid-range: \u20B91,00,000\u2013\u20B91,50,000 for 2\u20133 countries. Luxury: \u20B92,00,000+ for the full experience. Flights from India are \u20B98,000\u2013\u20B925,000 return depending on destination." },
                { q: "Which SE Asian countries need a visa for Indians?", a: "Thailand, Indonesia, Cambodia and Nepal offer visa on arrival. Vietnam, Myanmar, Sri Lanka and Malaysia require an e-visa applied online. Philippines is visa-free for 30 days. Only Singapore requires a traditional embassy visa with 2\u20133 weeks processing." },
                { q: "Which country is best for first-time international travellers?", a: "Thailand is the best first trip. Visa on arrival, cheap flights from India (\u20B98,000\u2013\u20B915,000 return), excellent tourist infrastructure, vegetarian food available, and daily budgets from \u20B92,000. Bangkok alone has temples, street food, nightlife and shopping. Bali is a close second." },
                { q: "How many days do I need for a SE Asia trip?", a: "5\u20137 days for a single country. 10\u201314 days for 2\u20133 countries (the classic Bangkok\u2013Siem Reap\u2013Ho Chi Minh route). 3 weeks for 4\u20135 countries. Don\u2019t try more than 3 countries in 2 weeks \u2014 you\u2019ll spend more time in airports than at temples." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── COMBINE WITH + RELATED ── */}
          <CombineWith currentSlug="southeast-asia-travel-guide" />
          <RelatedGuides currentSlug="southeast-asia-travel-guide" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
