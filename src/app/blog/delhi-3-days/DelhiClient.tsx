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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const DELHI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Delhi Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
        className="h-full bg-amber-600 transition-all duration-100"
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
          href: `mailto:?subject=Delhi 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Delhi in 3 Days — Red Fort, Karim%27s, Chandni Chowk and the Mughal monuments&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/delhi-3-days"
        imageUrl="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80"
        description="Delhi in 3 Days: Red Fort, Chandni Chowk, Qutub Minar, India Gate, and Karim&apos;s — complete travel guide with budget breakdown in INR and USD."
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
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function DelhiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DELHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Delhi" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="delhi india gate red fort old delhi spices"
            fallback="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80"
            alt="Delhi India Gate at sunset with the hexagonal war memorial lit against the evening sky"
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
              <span className="text-white/70">Delhi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  India&apos;s Capital
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Delhi in 3 Days:
                <em className="italic text-amber-300"> Mughals, Markets &amp; the Capital&apos;s Two Souls</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Red Fort, Chandni Chowk, Karim&apos;s, India Gate, Qutub Minar, Humayun&apos;s Tomb — three days that feel like three weeks anywhere else. The complete guide.
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
              <span>🇮🇳 Delhi, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹1,200/day (~$14 USD)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Delhi is two cities occupying one — and that collision is exactly what makes three days here feel like three weeks anywhere else. Old Delhi&apos;s lanes still smell of cardamom and frying jalebi, the same lanes where Mughal emperors once paraded on elephants. New Delhi&apos;s broad Lutyens avenues lead to monuments so large they challenge comprehension.
            </p>
          </blockquote>

          {/* ── WHAT DELHI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Delhi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Delhi has been continuously inhabited for over 3,000 years and has served as the capital of multiple empires — the Tomars, the Slave Dynasty, the Khiljis, the Tughlaqs, the Mughals, and the British. Each wave of rulers built their city on top of or beside the last, which is why Delhi is not one city but eight, and why you can spend a week here and feel like you&apos;ve barely started.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Old Delhi (Shahjahanabad, built by Shah Jahan in 1638) is the Mughal city — the Red Fort, Jama Masjid, and the dense commercial lanes of Chandni Chowk. New Delhi was built by the British between 1911 and 1931, designed by Edwin Lutyens and Herbert Baker: ceremonial boulevards, colonial bungalows, and India Gate. South Delhi has the oldest monuments — the Qutub Minar (1193 CE), Humayun&apos;s Tomb (1570 CE), and the medieval tombs scattered through the Lodhi Garden.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Day one belongs to the Mughals. Day two to Lutyens&apos; New Delhi and the medieval south. Day three to wherever the city takes you — Dilli Haat with its craft villages, Akshardham Temple, or the Agra Gatimaan Express for one pre-dawn Taj Mahal moment. Delhi rewards curiosity and punishes rushing.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DEL T3" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="3 in city" />
              <StatCard icon="💰" label="Budget From" value="₹1,200/day (~$14)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Delhi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Feb",
                  i: "☀️",
                  t: "Winter — Ideal Season",
                  d: "18–28°C daytime, 3–15°C nights in December–January. The best sightseeing weather — clear days, manageable heat, Mughal gardens in their best condition. October–November is ideal (post-monsoon freshness) but air quality deteriorates in November from Diwali stubble burning. December–February is peak season: bright days, cold mornings, pack layers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Feb–Mar",
                  i: "🌸",
                  t: "Spring — Best Compromise",
                  d: "18–28°C, low smog, spring colour in Mughal gardens. February and March are arguably the most photogenic months in Delhi — the Amrit Udyan at Rashtrapati Bhavan opens to the public, bougainvillea blazes across the city, and sightseeing is comfortable all day. Slightly less crowded than December peak.",
                  b: "Excellent",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Apr–Jun",
                  i: "🔥",
                  t: "Summer — Brutal Heat",
                  d: "38–46°C. Delhi summer is genuinely punishing — the Red Fort&apos;s red sandstone radiates heat, the wide Lutyens avenues offer no shade, and outdoor sightseeing after 10am is exhausting. If you must travel in summer, start everything before 8:30am, retreat indoors by noon, and resume after 5pm. Air-conditioned Metro is your best friend.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jul–Sep",
                  i: "🌧️",
                  t: "Monsoon — Uncrowded but Humid",
                  d: "35–38°C with high humidity, frequent heavy rain. Monuments are dramatically less crowded — the Red Fort and Qutub Minar in rain-washed air have a quality all their own. But rain delays, flooded lanes in Old Delhi, and the relentless humidity make for exhausting sightseeing. Malaria and dengue precautions are important in July–August.",
                  b: "For rain lovers",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Delhi</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Air quality note:</strong> Delhi regularly records hazardous AQI levels in November–January (stubble-burning season). If you are sensitive to air pollution, check the AQI at aqicn.org before travelling. An N95 mask (₹50–₹120) is worth carrying October–February.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Indira Gandhi International Airport — Terminal 3",
                  d: "DEL T3 is one of Asia&apos;s busiest terminals. The Delhi Metro Airport Express Line connects T3 directly to New Delhi station in 22 minutes (₹60 / ~$0.72). Trains run every 10–15 minutes from 4:45am–11:30pm. Pre-paid taxi counters in T3 arrivals charge ₹350–600 (~$4–7) to central Delhi. Airtel and Jio SIM counters are in the arrivals hall past customs.",
                  b: "Main entry",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚇",
                  t: "Delhi Metro Airport Express",
                  d: "The Airport Express Line (Orange Line) is the fastest, cheapest, and most reliable way between DEL T3 and central Delhi. 22 minutes to New Delhi station (₹60), with luggage racks at every door. The Metro system covers virtually every major Delhi sight — Red Fort (Chandni Chowk station, Yellow Line), Qutub Minar (Yellow Line terminus), Humayun&apos;s Tomb (Violet Line), Akshardham (Blue Line). Buy a 3-day Tourist Card (₹500 / ~$6) at any major station.",
                  b: "Best option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Train to New Delhi Station",
                  d: "New Delhi (NDLS) is the most central railway station. Hazrat Nizamuddin (NZM) is better for South Delhi and Agra-bound trains (including the Gatimaan Express to Agra). Old Delhi station (DLI) is closest to Chandni Chowk. Book on IRCTC (irctc.co.in) 60 days ahead — trains from Mumbai, Jaipur, Agra, and Amritsar fill early.",
                  b: "Good option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚌",
                  t: "Bus — ISBT Kashmere Gate",
                  d: "Delhi&apos;s main interstate bus terminal. Volvo AC buses from Jaipur (5 hrs, ₹500–₹800 / ~$6–10), Agra (3.5 hrs, ₹350–₹500), Chandigarh (5 hrs, ₹400–₹600), and Amritsar (8 hrs, ₹700–₹1,000). Kashmere Gate Metro station connects to the Yellow and Violet lines. Book Volvo buses on redbus.in or abhibus.com.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Delhi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. All costs listed in both INR and approximate USD ($1 ≈ ₹84). The itinerary is designed around the Metro — you won&apos;t need a taxi or auto for most of it.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Delhi — Red Fort · Chandni Chowk · Jama Masjid · Karim&apos;s"
                cost="₹700–₹1,100 (~$8–13)"
                items={[
                  "7:00am — Red Fort (Lal Qila) opens at sunrise. Entry ₹35 for Indians (~$0.42), ₹550 for foreigners. Arrive at opening to beat the crowds — the Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas, and the Pearl Mosque are best before the 10am rush. Pre-book tickets on asi.payumoney.com to skip the cash queue (especially critical on weekends). The fort was Shah Jahan&apos;s palace-city, built in 1638, and served as the seat of the Mughal Empire until 1857.",
                  "9:00am — Walk to Chandni Chowk via the Chatta Chowk bazaar exit. The main road is pedestrianised from the Red Fort to the Town Hall — no vehicles. This is India&apos;s oldest planned market street, and despite 380 years of continuous commerce it is still one of the most visually extraordinary streets in the country. The 17th-century Hira Mahal Vav stepwell is 200 metres down Dariba Kalan lane.",
                  "9:30am — Breakfast at Paranthe Wali Gali, Chandni Chowk — the narrow lane off the main chowk with 5–6 paratha stalls. Stuffed paratha with aloo, mooli, or paneer: ₹40–60 (~$0.50–0.72) per piece, served with dahi and achar. The best is Kanhaiya Lal Durga Prasad Dixit at the lane entrance. Possibly the best ₹120 breakfast in India.",
                  "11:00am — Jama Masjid — India&apos;s largest mosque, built by Shah Jahan in 1656. Entry free (₹300 to bring a camera inside; mobile photography free). Climb the south minaret for a panoramic view over Old Delhi&apos;s rooftops and the Red Fort: ₹100 (~$1.20). The mosque accommodates 25,000 worshippers and its scale, even by world standards, is astonishing.",
                  "1:00pm — Lunch at Karim&apos;s, Gali Kababiyan (30 seconds from Jama Masjid south gate) — mutton seekh kebab ₹180 (~$2.15), mutton korma ₹220 (~$2.60), roomali roti ₹25. India&apos;s most famous Mughal restaurant, founded in 1913 by Haji Karimuddin, direct descendant of the royal Mughal kitchen. Arrive before 1:30pm or expect a 30-minute queue.",
                  "3:00pm — Khari Baoli Spice Market — Asia&apos;s largest wholesale spice market, two lanes off Chandni Chowk near Fatehpuri Mosque. The colours, aromas, and 100-kg sacks of red chilli, cumin, and cardamom are extraordinary. No purchase necessary — this is one of Delhi&apos;s great sensory experiences and it&apos;s completely free.",
                  "5:30pm — Metro (Chandni Chowk station, Yellow Line) to Connaught Place for evening chai at United Coffee House, Inner Circle — chai ₹60 (~$0.72). The last surviving art deco café in CP.",
                  "7:30pm — Dinner at Bengali Market, Minto Road — Nathu&apos;s Sweets for dahi bhalla and chaat (₹80–₹120 per plate), then the neighbouring dhabas for dal makhani and tandoori roti (₹180–₹250 / ~$2–3 for a full meal). One of Delhi&apos;s most reliable evening food streets.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="New Delhi — India Gate · Humayun&apos;s Tomb · Qutub Minar · Lodhi Garden · Hauz Khas"
                cost="₹600–₹1,000 (~$7–12)"
                items={[
                  "7:30am — India Gate at sunrise. The 42-metre war memorial on Kartavya Path (formerly Rajpath) is most photogenic in the early morning light before the tour coaches arrive. Entry is free and the gate is always accessible. The Amar Jawan Jyoti eternal flame was merged with the National War Memorial in 2022. The 3km ceremonial axis from Rashtrapati Bhavan to India Gate is one of the world&apos;s great planned public spaces.",
                  "9:00am — Metro (Central Secretariat station, Violet/Yellow Line) to Qutub Minar — transfer to Yellow Line south toward Huda City Centre, alight at Qutub Minar station, 10-minute walk. Total Metro fare: ₹40 (~$0.48).",
                  "9:30am — Qutub Minar complex (₹35 / ~$0.42 for Indians, ₹550 for foreigners) — the 73-metre 12th-century minaret, the Iron Pillar (resisted rust for 1,600 years without corrosion), the Quwwat-ul-Islam mosque (India&apos;s first mosque, built 1193 CE), and the Alai Darwaza. Budget 1.5 hours. Best visited before 11am in summer.",
                  "11:30am — Auto to Humayun&apos;s Tomb (₹80–₹100 / ~$1–1.20, or Metro to JLN Stadium + 15-minute walk). Entry ₹35 (Indians) / ₹550 (foreigners). The 1570 CE Mughal garden tomb that directly inspired the Taj Mahal — its proportions, red sandstone and white marble inlay, and the charbagh garden are magnificent. Allow 1 hour minimum.",
                  "1:00pm — Lunch at Sunder Nagar Market, 10 minutes from Humayun&apos;s Tomb — Triveni Terrace Café (₹120–₹200 for lunch thali) or the Potbelly Rooftop Café in Shahpur Jat (₹180–₹280 mains, 15-minute auto ride).",
                  "3:00pm — Lodhi Garden (free, open 5am–8pm) — a 90-acre park with the 15th-century Lodi Dynasty tombs dispersed across manicured lawns. The Muhammad Shah tomb and Bada Gumbad are the finest. The garden at 3–4pm, with families picnicking and joggers weaving between Mughal ruins, is one of Delhi&apos;s best free experiences.",
                  "5:30pm — Hauz Khas Village — the medieval reservoir, 13th-century madrasa and mosque ruins on the hillock above the lake are free to explore. The surrounding lanes have Delhi&apos;s best independent cafés, vintage boutiques, and streetwear stores. The ruins at dusk, with the water below and the city visible beyond, are one of Delhi&apos;s quieter surprises.",
                  "8:00pm — Dinner at Saravana Bhavan, Connaught Place (Inner Circle, P Block) — South Indian, masala dosa ₹120 (~$1.43), filter coffee ₹60 (~$0.72). Or Wengers Deli, A Block CP for club sandwiches and cold coffee (₹150–₹250 / ~$1.80–3).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Akshardham · Dilli Haat · Safdarjung&apos;s Tomb · Old Delhi at Dusk"
                cost="₹500–₹900 (~$6–11)"
                items={[
                  "8:30am — Akshardham Temple (Metro to Akshardham station, Blue Line). Entry to the main monument is free. No photography of the main temple complex permitted; leave phone and camera in the cloakroom (₹25 / ~$0.30). The 234-foot pink sandstone and marble complex is among the most technically elaborate Hindu temples built in the modern era — over 20,000 carved figures, 234 intricately carved pillars, and a 141-foot-tall central shikhara. Budget 2.5 hours.",
                  "11:30am — Return Metro to INA station (Yellow Line). Dilli Haat INA (entry ₹100 / ~$1.20) — a permanent craft bazaar with rotating stalls from every Indian state. Pashmina shawls from Srinagar, Channapatna wooden toys, Madhubani paintings, Kutch embroidery. Real artisans, fair prices. The best single place in Delhi for quality Indian crafts and gifts.",
                  "1:30pm — Lunch inside Dilli Haat — each state&apos;s stall serves regional food. Rajasthani dal baati churma (₹120 / ~$1.43), Kashmiri rogan josh (₹180 / ~$2.15), Odisha pithas (₹60 / ~$0.72). The variety in one spot is India&apos;s best culinary sampler.",
                  "3:30pm — Safdarjung&apos;s Tomb (₹35 / ~$0.42 for Indians, 10-minute Metro from INA to Jor Bagh or short auto) — the last great Mughal garden tomb in Delhi, built in 1754. Almost always quiet and unhurried, it is a calm alternative to the more famous Humayun&apos;s Tomb and an excellent place to understand the Mughal garden tomb tradition without the crowds.",
                  "5:30pm — Return to Old Delhi for the evening. Dariba Kalan lane for silver jewellery and traditional bangles. Kinari Bazaar (the adjacent lane) for wedding accessories and zari work. Chandni Chowk at dusk, with the shopkeepers lighting their stalls and the street food vendors setting up, is the most atmospheric version of this ancient market.",
                  "7:30pm — Dinner at Al Jawahar, Matia Mahal Chowk (opposite Jama Masjid) — mutton nihari ₹220 (~$2.60), baida roti ₹80, kheer ₹60. Founded in 1947 and essentially unchanged since. A better Mughal dining experience than most hotel restaurants charging 10x the price.",
                  "9:00pm — Walk to the Jama Masjid steps at night — the mosque lit from outside, the Red Fort floodlit to the east, and the narrow lanes of Old Delhi humming with late-night street food and chai stalls. This is the city at its most alive.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Delhi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Delhi Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Entry fees as of early 2026. ASI-managed monuments use the same pricing structure — Indian nationals ₹35 at most sites. Foreigners pay ₹550 for major ASI monuments. Book online at asi.payumoney.com to avoid queues.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Red Fort (Lal Qila)",
                  e: "₹35 Indians / ₹550 Foreigners",
                  d: "Shah Jahan&apos;s 1638 palace-city and UNESCO World Heritage Site. The Diwan-i-Aam, Diwan-i-Khas, Pearl Mosque, and Rang Mahal are the highlights. The sound and light show (evenings, ₹80 / ~$0.96) is worth attending separately. Pre-book tickets online to skip the queue — the cash line on weekends is 45–90 minutes.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "Qutub Minar",
                  e: "₹35 Indians / ₹550 Foreigners",
                  d: "India&apos;s tallest minaret (73 metres) and a UNESCO World Heritage Site, begun in 1193 CE. The Iron Pillar (1,600 years old, no rust), the Quwwat-ul-Islam mosque (first mosque built in India), and the Alai Darwaza are in the same complex. Best before 11am to avoid heat and crowds.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Humayun&apos;s Tomb",
                  e: "₹35 Indians / ₹550 Foreigners",
                  d: "The 1570 CE Mughal garden tomb that served as the prototype for the Taj Mahal. Red sandstone and white marble inlay, a perfect charbagh garden, and a quiet atmosphere that the Taj rarely has. The adjacent Sunder Nursery (free, open to public) is a 90-acre heritage garden with Mughal water channels — combine both.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Jama Masjid",
                  e: "Free (₹300 camera fee, mobile free)",
                  d: "India&apos;s largest mosque, built by Shah Jahan between 1650–1656. The main courtyard accommodates 25,000 worshippers. Climb the south minaret for the best panoramic view over Old Delhi&apos;s rooftops: ₹100 (~$1.20). Dress modestly — cover shoulders and knees. Sarongs available to borrow at the gate.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "India Gate",
                  e: "Free (always open)",
                  d: "The 42-metre war memorial on Kartavya Path, built to honour the 90,000 Indian soldiers who died in World War I. Most photogenic at sunrise and after dark when it is lit. The 3km ceremonial boulevard from Rashtrapati Bhavan to India Gate is Delhi&apos;s grandest public space. Free at all hours.",
                  t: "Best at sunrise or night",
                },
                {
                  n: "Lodhi Garden",
                  e: "Free · Open 5am–8pm",
                  d: "A 90-acre park with Lodi Dynasty tombs (15th century) dispersed among manicured gardens. The Muhammad Shah Sayyid tomb, Bada Gumbad, and Shish Gumbad are the finest. One of Delhi&apos;s best free experiences — the atmosphere of medieval ruins in a working public park is genuinely unusual.",
                  t: "Afternoon · 1 hr",
                },
                {
                  n: "Hauz Khas Village",
                  e: "Free to explore",
                  d: "A 13th-century reservoir, madrasa, and mosque ruins on a hillock above a lake in South Delhi, surrounded by independent cafés and boutiques. The ruins themselves are free and often overlooked by tourists who only come for the restaurants. Best at dusk when the water and city lights are both visible.",
                  t: "Evening · 1–2 hrs",
                },
                {
                  n: "Dilli Haat (INA)",
                  e: "₹100 / ~$1.20 entry",
                  d: "A permanent craft market with stalls from every Indian state, operated by Delhi Tourism. Rotating artisans mean the stock changes regularly. Better value than tourist shops (prices are fixed and reasonable), with on-site regional food stalls from all over India. Open 10:30am–10pm daily.",
                  t: "Shopping · 1.5–2 hrs",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Delhi — Monuments, Markets &amp; Old City"
            subtitle="The Red Fort, Chandni Chowk, Qutub Minar, and Old Delhi&apos;s extraordinary street life."
            spots={[
              {
                name: "Red Fort at Sunset",
                query: "red fort delhi lal qila sunset india mughal architecture",
                desc: "Shah Jahan&apos;s 1638 palace-city — the Red Fort glowing at dusk, its ochre sandstone walls reflected in the light of the setting sun.",
              },
              {
                name: "Chandni Chowk Street Life",
                query: "chandni chowk old delhi street market india bazaar food",
                desc: "India&apos;s most famous commercial street — 380 years of continuous trade, spice markets, sweet shops, and the morning chai ritual.",
              },
              {
                name: "Qutub Minar",
                query: "qutub minar delhi minaret india medieval architecture 12th century",
                desc: "India&apos;s tallest minaret at 73 metres, built in 1193 CE — the centrepiece of Delhi&apos;s oldest UNESCO World Heritage Site.",
              },
              {
                name: "India Gate Kartavya Path",
                query: "india gate delhi kartavya path war memorial evening india",
                desc: "The 42-metre war memorial on Lutyens&apos; great ceremonial boulevard — one of Delhi&apos;s most iconic and freely accessible monuments.",
              },
              {
                name: "Jama Masjid Old Delhi",
                query: "jama masjid delhi mosque old delhi india mughal architecture",
                desc: "India&apos;s largest mosque, built by Shah Jahan between 1650–1656, with a courtyard that accommodates 25,000 worshippers.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Delhi is very affordable by world capital standards. Monument entry fees are the main cost for Indian nationals (₹35 per ASI site). The Delhi Metro makes transport remarkably cheap. All INR figures include USD equivalents at ₹84 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (INR / USD)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (INR / USD)</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury (INR / USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "₹400–1,000 / $5–12", "₹4,000–8,000 / $48–95", "₹15,000–35,000 / $179–417"],
                    ["🍽️ Food", "₹250–500 / $3–6", "₹800–2,500 / $10–30", "₹3,000–8,000 / $36–95"],
                    ["🚇 Transport", "₹100–200 / $1–2", "₹300–600 / $4–7", "₹2,000–5,000 / $24–60"],
                    ["🏛️ Activities", "₹200–500 / $2–6", "₹500–2,000 / $6–24", "₹2,000–8,000 / $24–95"],
                    ["TOTAL per day", "₹950–2,200 / $11–26", "₹5,600–13,100 / $67–156", "₹22,000–56,000 / $262–667"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₹1,200–₹2,200/day / ~$14–26)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Paharganj or Karol Bagh guesthouse (₹400–₹800/night), eat at dhabas and Chandni Chowk street food, use the Metro for all transport. Delhi&apos;s budget infrastructure is excellent — you can eat extraordinarily well for ₹300/day if you know where to go.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (₹5,600–₹13,100/day / ~$67–156)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel in Connaught Place or Karol Bagh (₹4,000–₹8,000/night), mix of restaurant meals and street food, a guided tour of Red Fort or Chandni Chowk food walk (₹1,500–₹1,800). The sweet spot for comfort without losing the authentic Delhi experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Delhi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Delhi&apos;s best-value location is anywhere along the Yellow Metro Line — it connects Old Delhi, Connaught Place, and South Delhi. Avoid booking accommodation accessible only by road in Old Delhi; traffic can make a 2km journey take 45 minutes.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Paharganj (Backpacker Strip)",
                  type: "Budget · Central Delhi, near New Delhi Station",
                  price: "₹400–₹1,200/night / ~$5–14",
                  badge: "Best budget",
                  desc: "Guesthouses and hostels within walking distance of New Delhi station. Functional, noisy, and very tourist-focused. Good Metro access to the entire city. Clean options include Hotel Shelton and Hotel Vivek. Not recommended if you prioritise quiet or cleanliness above cost.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Karol Bagh",
                  type: "Budget-mid · West Delhi, Metro accessible",
                  price: "₹1,500–₹4,000/night / ~$18–48",
                  badge: "Best value mid-range",
                  desc: "The most practical mid-range neighbourhood in Delhi — quieter than Paharganj, strong Metro connections (Blue Line), and a range of good hotels. The Karol Bagh market is one of Delhi&apos;s best for clothing and electronics. Hotel Ajanta and Hotel Godwin are reliable mid-range options.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Connaught Place",
                  type: "Mid-range to luxury · Central New Delhi",
                  price: "₹5,000–₹15,000/night / ~$60–179",
                  badge: "Most central",
                  desc: "The geographic and commercial centre of New Delhi, with Metro connections on both Yellow and Blue lines. Within walking distance of India Gate, Parliament House, and multiple museums. The Park Hotel and Le Méridien are the standout mid-luxury options at CP. Premium pricing but unbeatable centrality.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "South Delhi (Hauz Khas / Greater Kailash)",
                  type: "Mid-range to boutique · South Delhi",
                  price: "₹3,000–₹10,000/night / ~$36–119",
                  badge: "Safest neighbourhood",
                  desc: "Delhi&apos;s most liveable residential neighbourhoods — safer, greener, and far less hectic than Central Delhi. Close to Qutub Minar, Lodhi Garden, and Hauz Khas Village. Slightly farther from Old Delhi (30–40 minutes Metro). Several excellent boutique guesthouses and serviced apartments. The Devna and Khasmahal Heritage Home are excellent options.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Delhi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Delhi has one of the world&apos;s great street food cultures and some of India&apos;s finest restaurants. The best food is almost never in tourist zones — it&apos;s in the specific institutions listed here.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Old Famous Jalebi Wala + Paranthe Wali Gali",
                  t: "Street food · Chandni Chowk, Old Delhi",
                  d: "The definitive Old Delhi morning food circuit. Old Famous Jalebi Wala (since 1884) fries fresh jalebi in a cast-iron kadhai — jalebi with rabri ₹80 (~$0.96) per 100g, eat it standing at the fryer at 8am. Then Paranthe Wali Gali for stuffed parathas (₹40–₹60 / ~$0.50–0.72), served at the same family stalls that have been there since the 1870s.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sita Ram Diwan Chand — Chole Bhature",
                  t: "Old Delhi institution · Paharganj area",
                  d: "Widely considered the best chole bhature in Delhi — possibly in India. The recipe has been unchanged since 1950. The fried bread (bhatura) is served with a deeply spiced chickpea curry (chole) topped with raw onion and green chilli. ₹120 (~$1.43) per plate. Open 8am–5pm only. Closes when the chole runs out.",
                  b: "Best chole bhature",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Karim&apos;s, Jama Masjid",
                  t: "Mughal restaurant · Old Delhi, since 1913",
                  d: "The most famous restaurant in Delhi. Mutton seekh kebab ₹180 (~$2.15), mutton korma ₹220 (~$2.60), roomali roti ₹25. Founded by Haji Karimuddin, a descendant of the royal Mughal kitchen. The quality has remained consistent for over a century. Arrive before 1:30pm for lunch — the queue after that is 30+ minutes. No alcohol.",
                  b: "Most famous",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "ITC Bukhara (Splurge)",
                  t: "Fine dining · ITC Maurya, Sardar Patel Marg",
                  d: "India&apos;s most legendary restaurant, operating since 1977 with the same menu. Dal bukhara (slow-cooked for 18 hours) ₹950 (~$11.30), sikandari raan (24-hour marinated leg of lamb) ₹3,800 (~$45). Bill Clinton, Vladimir Putin, and practically every Indian PM have eaten here. Reservations required at least one week ahead. Smart casual dress code.",
                  b: "Best splurge",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Nathu&apos;s Sweets — Bengali Market",
                  t: "Chaat · Minto Road, near Connaught Place",
                  d: "The benchmark for Delhi chaat. Dahi bhalla (₹80 / ~$0.96), golgappa (₹60 / ~$0.72), and aloo tikki (₹60) — all made fresh, with chutneys balanced to the specific Bengali Market standard. The chaat here is more refined than the Old Delhi versions — cleaner flavours, lighter hand on the oil. Open all day.",
                  b: "Best chaat",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Gulati Restaurant — Pandara Road",
                  t: "North Indian · Pandara Road Market, behind Khan Market",
                  d: "Delhi&apos;s most reliable neighbourhood for classic Punjabi restaurant cooking. Butter chicken ₹450 (~$5.35), dal makhani ₹320 (~$3.81), naan ₹45. Open past 11pm. Pandara Road has been Delhi&apos;s late-night restaurant row since the 1960s and has outlasted every food trend. Khan Market is a 10-minute walk for books and coffee after dinner.",
                  b: "Best North Indian",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Delhi"
            hotels={[
              {
                name: "The Imperial, Janpath",
                type: "Luxury colonial · Central New Delhi",
                price: "From ₹18,000/night (~$214)",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/in/the-imperial.html?aid=2820480",
              },
              {
                name: "ITC Maurya",
                type: "Luxury · Sardar Patel Marg (Bukhara restaurant)",
                price: "From ₹12,000/night (~$143)",
                rating: "5",
                badge: "Best restaurant",
                url: "https://www.booking.com/hotel/in/itc-maurya.html?aid=2820480",
              },
              {
                name: "The Lodhi Hotel",
                type: "Luxury boutique · Lodhi Road, South Delhi",
                price: "From ₹14,000/night (~$167)",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/in/the-lodhi-new-delhi.html?aid=2820480",
              },
              {
                name: "Hotel Ajanta, Karol Bagh",
                type: "Mid-range · Karol Bagh, West Delhi",
                price: "From ₹2,500/night (~$30)",
                rating: "3",
                badge: "Best value",
                url: "https://www.booking.com/hotel/in/ajanta-new-delhi.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Delhi Old City Food Walk",
                duration: "3 hrs",
                price: "From ₹1,500/person (~$18)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=delhi+old+city+food+walk&partner_id=PSZA5UI",
              },
              {
                name: "Red Fort Guided Tour",
                duration: "2 hrs",
                price: "From ₹1,200/person (~$14)",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=delhi+red+fort+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Delhi Monuments Full Day Tour",
                duration: "8 hrs",
                price: "From ₹2,000/person (~$24)",
                badge: "Best overview",
                url: "https://www.getyourguide.com/s/?q=delhi+monuments+tour&partner_id=PSZA5UI",
              },
              {
                name: "Agra Taj Mahal Day Trip from Delhi",
                duration: "Full day",
                price: "From ₹3,500/person (~$42)",
                url: "https://www.getyourguide.com/s/?q=agra+taj+mahal+day+trip+delhi&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Delhi</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "😷",
                  title: "Ignoring Air Pollution in Winter",
                  desc: "Delhi&apos;s AQI in November–January frequently enters the hazardous range (above 300). The Red Fort sandstone, the Chandni Chowk lanes, and the open Lutyens avenues offer no protection from particulate matter. An N95 mask (not a surgical mask — N95 specifically) filters PM2.5 particles. They cost ₹50–₹120 at any pharmacy. If you are asthmatic or have any respiratory condition, check aqicn.org before planning outdoor sightseeing days.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚗",
                  title: "Taking Autos Without the Meter (or Ola)",
                  desc: "Delhi autos are legally required to run the meter (₹25 base + ₹9.5/km). Most drivers near tourist spots refuse the meter and quote fixed rates 3–4x higher. The solution: open Ola or Uber on your phone and show the estimated fare — most drivers will agree to a similar figure on the meter. Or book Ola Auto directly for a guaranteed upfront price. Never agree to a fixed rate before checking Ola first. The auto fare from Red Fort to Connaught Place should be ₹80–₹120 on meter; touts quote ₹300–₹400.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎟️",
                  title: "Visiting Red Fort Without Pre-Booking",
                  desc: "The Red Fort cash ticket queue on weekends and public holidays is 45–90 minutes. The ASI online portal (asi.payumoney.com) allows timed entry bookings up to 48 hours ahead for ₹35 (Indians) — no queue at the booked-entry gate. The evening sound-and-light show (₹80, evenings only) also needs advance booking and sells out on weekends. Plan both at the same time.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating Near India Gate or Major Tourist Sites",
                  desc: "The food kiosks on Kartavya Path and in the India Gate garden area are overpriced and mediocre. The Bengali Market (1.5km north), Pandara Road Market (1km south-east), Connaught Place inner circle restaurants, and Old Delhi chaat streets are vastly better for the same or lower prices. India Gate is a monument and a park — not a food destination.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗺️",
                  title: "Underestimating Delhi&apos;s Scale",
                  desc: "Delhi is massive — 1,484 km² with metro-area population exceeding 32 million. Old Delhi and Qutub Minar are 18km apart. The Chandni Chowk food circuit and Hauz Khas Village are not &quot;nearby&quot; to each other. Plan each day around a geographic cluster, not a list of sites. The Metro covers nearly everything — but check transfer times on Google Maps before committing to a day plan. A badly planned day in Delhi means 3 hours stuck in traffic.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Delhi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚇",
                  title: "Buy the 3-Day Delhi Metro Tourist Card",
                  desc: "The 3-day unlimited Metro Tourist Card costs ₹500 (~$6) including ₹50 refundable deposit. It covers all Metro lines including the Airport Express. The Metro connects virtually every major Delhi sight: Red Fort (Chandni Chowk, Yellow Line), Qutub Minar (Yellow Line terminus), Akshardham (Blue Line), Humayun&apos;s Tomb (Violet Line), Dilli Haat INA (Yellow Line). Buy at New Delhi, Rajiv Chowk, or DEL Airport station customer windows.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⏰",
                  title: "Start the Red Fort at Opening (7am)",
                  desc: "The Red Fort at 7am is empty, golden, and quiet. By 10am, tour groups arrive in numbers and the experience degrades significantly. The same principle applies to all ASI monuments in Delhi — Humayun&apos;s Tomb and Qutub Minar are both worth opening-hour visits. Book your timed entry online the night before (asi.payumoney.com) for a smooth arrival.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🥘",
                  title: "The Best Chaat Circuit in Delhi",
                  desc: "Delhi&apos;s chaat geography matters: Old Famous Jalebi Wala, Chandni Chowk (since 1884) for jalebi-rabri. Nathu&apos;s Sweets, Bengali Market for dahi bhalla benchmark. Annapurna Sweets, Sarojini Nagar for aloo tikki (₹40). Khan Chacha, Khan Market for seekh rolls (₹130). Do not eat chaat from random street carts — the institution addresses above maintain consistent standards.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗓️",
                  title: "Check Monument Closure Days",
                  desc: "Delhi&apos;s major ASI monuments close on Fridays (Red Fort, Qutub Minar, Humayun&apos;s Tomb). Jama Masjid is closed to non-Muslim visitors during prayer times. Akshardham is closed on Mondays. Plan your 3-day itinerary around the correct open days — arriving at Red Fort on a Friday is a common mistake for first-time visitors.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💧",
                  title: "Carry Water and Use Bottled Water Only",
                  desc: "Delhi tap water is not safe to drink without boiling or purification. Carry a 1-litre bottle and refill at hotel; sealed 1L bottles at Metro station convenience stores cost ₹20. In summer, 2 litres minimum for outdoor sightseeing days. The heat and dry air at the Chandni Chowk monuments and on the wide Lutyens avenues dehydrate faster than expected.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📱",
                  title: "Offline Maps Are Essential",
                  desc: "Download Delhi on Google Maps or Maps.me before arrival. Old Delhi&apos;s lanes are extremely difficult to navigate even with GPS — the lanes are narrow, poorly labelled, and frequently blocked by hand-carts. The Metro network map (DMRC app) is equally important. Data-heavy international SIM plans are expensive in Delhi; pick up a Jio or Airtel tourist SIM at DEL T3 arrivals for ₹349 (~$4) — 2GB/day for 28 days.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Delhi" />

          {/* Combine With */}
          <CombineWith currentSlug="delhi-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from DEL airport to central Delhi?",
                  a: "The Airport Express Metro (Orange Line) runs from T3 to New Delhi station in 22 minutes (₹60 / ~$0.72) and every 10–15 minutes from 4:45am–11:30pm. For luggage-heavy arrivals, pre-paid taxis from the official counter in T3 arrivals charge ₹350–₹500 (~$4–6) to Connaught Place, ₹450–₹650 to Karol Bagh, ₹600–₹900 to South Delhi. Uber and Ola operate from the designated app cab zone outside T3 arrivals (lower level exit). Avoid unauthorised taxi touts inside the terminal.",
                },
                {
                  q: "Is Delhi safe for solo female travellers?",
                  a: "Delhi requires more situational awareness than other Indian metros. Stick to well-lit, populated areas after dark. The Metro is safe — use the ladies-only first coach. Use Ola or Uber rather than negotiated autos at night. Connaught Place, Khan Market, Hauz Khas, and South Delhi neighbourhoods are all comfortable. Avoid Paharganj after midnight. The tourist police helpline (1363 or 100) is responsive in tourist zones. Most solo women travelling in Delhi report no issues when applying standard urban precautions.",
                },
                {
                  q: "Can I do an Agra day trip from Delhi?",
                  a: "Yes, and it is extremely well set up. The Gatimaan Express (Train 12049) departs Hazrat Nizamuddin at 8:10am and arrives Agra Cantonment at 9:50am (1h40min, ₹755 / ~$9 chair car). The return train departs Agra at 5:50pm and arrives Delhi at 7:25pm. This gives 8 hours in Agra — enough for the Taj Mahal (₹1,100 / ~$13, sunrise entry is best), Agra Fort (₹40 / ~$0.48), and Fatehpur Sikri if you pre-hire a car. Book all tickets on IRCTC in advance — Gatimaan sells out.",
                },
                {
                  q: "What is the best way to experience Old Delhi food?",
                  a: "Morning is when Old Delhi&apos;s food scene is most genuine. Paranthe Wali Gali for breakfast (7–11am, ₹40–₹60 per paratha). Old Famous Jalebi Wala on Dariba Kalan for jalebi-rabri (8am onwards). Karim&apos;s for a late lunch (arrive by 1:30pm). Al Jawahar opposite Jama Masjid for dinner (7pm–midnight). The Delhi Food Walks tour (₹1,500 / ~$18, delhifoodwalks.com) is worthwhile even for experienced travellers — guide access to century-old commercial kitchens and historical context on each dish transforms the experience.",
                },
                {
                  q: "How do I buy a Delhi Metro Tourist Card?",
                  a: "Metro Tourist Cards are sold at the Customer Service Centre at all major stations: New Delhi (Airport Express + Yellow Line), Rajiv Chowk (Yellow + Blue Line junction), Kashmere Gate, and DEL Airport T3 station. The 1-day card costs ₹200 (~$2.40) including ₹50 refundable deposit; the 3-day card ₹500 (~$6) including ₹50 deposit. Return the card at your last station to reclaim ₹50. Alternatively, buy a Smart Card (₹150 with ₹50 deposit) and top up with cash — works as a stored-value card on all lines.",
                },
                {
                  q: "Which Delhi monuments are closed on which days?",
                  a: "Red Fort, Qutub Minar, and Humayun&apos;s Tomb all close on Fridays. Akshardham Temple closes on Mondays. Jama Masjid is closed to non-Muslim visitors during the five daily prayer times — the main tourist windows are 9am–12pm and 2:30pm–5:30pm (approximate; times shift seasonally). India Gate and Lodhi Garden are open every day, all day. Always verify on the ASI website (asi.gov.in) as seasonal timings can change.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Delhi trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-delhi", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/delhi-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-delhi", label: "How to get there", icon: "✈️" },
                { href: "/blog/delhi-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="delhi-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Agra in 2 Days — Taj Mahal &amp; Agra Fort", href: "/blog/agra-2-days" },
                { label: "Jaipur in 3 Days — Pink City Guide", href: "/blog/jaipur-3-days" },
                { label: "Amritsar 2 Days — Golden Temple", href: "/blog/amritsar-2-days" },
                { label: "Mumbai in 3 Days — City Essentials", href: "/blog/mumbai-3-days" },
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
