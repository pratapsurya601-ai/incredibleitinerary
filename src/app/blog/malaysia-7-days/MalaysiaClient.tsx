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

// ── Table of Contents ─────────────────────────────────────────────────────────
const MALAYSIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Malaysia Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",  emoji: "🏙️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Malaysia 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Malaysia in 7 Days — Petronas Towers, Penang street food &amp; Langkawi beaches&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/malaysia-7-days"
        imageUrl="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80"
        description="Malaysia in 7 Days: Petronas Twin Towers, Penang Georgetown street art, Langkawi duty-free beaches — complete 7-day itinerary with real prices in MYR."
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
export default function MalaysiaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MALAYSIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Malaysia" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kuala lumpur petronas towers malaysia penang street food"
            fallback="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&q=80"
            alt="Petronas Twin Towers illuminated at night in Kuala Lumpur with Penang street food hawker stalls"
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
              <span className="text-white/70">Malaysia 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Southeast Asia
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Malaysia in 7 Days:
                <em className="italic text-amber-300"> KL, Penang &amp; Langkawi</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Petronas Towers at night, Penang&apos;s UNESCO street food, Batu Caves at dawn, and Langkawi&apos;s duty-free beaches. Visa-free for Indians. The complete guide.
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
              <span>🇲🇾 Malaysia</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From RM 200/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Malaysia is the most underrated country in Southeast Asia for Indian travellers. KL has the world&apos;s most photogenic skyscrapers, food that rivals anything in Asia, and an Indian diaspora so large you&apos;ll find Tamil signboards and banana-leaf rice on every corner. And Indians get 30 days visa-free.
            </p>
          </blockquote>

          {/* ── WHAT MALAYSIA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Malaysia Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Malaysia sits at the crossroads of three of Asia&apos;s great civilisations — Malay, Chinese, and Indian — and the collision produces a country unlike anywhere else in Southeast Asia. In a single afternoon in Kuala Lumpur you can eat nasi lemak (coconut rice, RM 5/≈₹90) at a Malay hawker stall, have banana-leaf rice at a Tamil restaurant in Brickfields, and drink craft beer at a rooftop bar overlooking the Petronas Towers. The cultural layering is genuine, not performed for tourists.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Petronas Twin Towers — completed in 1998 at 452 metres — remain among the most dramatic urban skylines on earth. Batu Caves, 13km north of KL, houses a Hindu temple in a limestone cave with a 272-step rainbow staircase and a 43-metre golden Lord Murugan statue. Penang&apos;s George Town is a UNESCO World Heritage Site where every alley has a story — Chinese clan associations, art deco shophouses, and the famous Ernest Zacharevic murals that turned the city into an open-air gallery.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Langkawi, Malaysia&apos;s duty-free island, offers beaches without Bali&apos;s crowds, a cable car over primary rainforest, and mangrove ecosystems that look like they belong in a nature documentary. RM 1 costs approximately ₹18, making Malaysia one of the best quality-to-price travel destinations in the world for Indian travellers. AirAsia flies direct from Chennai, Kolkata, Kochi, and Delhi.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="KUL / KLIA" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Mar" />
              <StatCard icon="🗓️" label="Duration" value="7 Days" />
              <StatCard icon="💰" label="Budget From" value="RM 200/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Malaysia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Mar",
                  i: "☀️",
                  t: "Dry Season — Best for West Coast",
                  d: "The best window for Kuala Lumpur, Penang, and Langkawi. Dry, warm at 27–32°C, minimal rain. December–January is peak tourist season. Langkawi&apos;s beaches are calm and swimmable. Book accommodation 4–6 weeks ahead in December.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr–Sep",
                  i: "🌤️",
                  t: "Inter-Monsoon &amp; Southwest Monsoon",
                  d: "KL and Penang remain largely viable — brief afternoon thunderstorms are typical but rarely all-day. Langkawi gets wetter from May–September. Flights and hotels are cheaper. Crowds thinner. A reasonable time to visit if you accept some rain.",
                  b: "Acceptable with caveats",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌧️",
                  t: "Northeast Monsoon Transition",
                  d: "October–November can bring heavy rain to the east coast of Peninsular Malaysia (Terengganu, Kelantan). KL and Penang are still fine. Langkawi gets less rain than Penang in this period. Borneo has its own distinct weather pattern — check separately.",
                  b: "West coast OK",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Year-round",
                  i: "🏙️",
                  t: "Kuala Lumpur — Always Viable",
                  d: "KL has no real off-season — it&apos;s a tropical city with 28–33°C temperatures and afternoon showers all year. The city&apos;s indoor malls, covered walkways, and the KLIA Express mean rain rarely disrupts plans. Any month works for a KL city trip.",
                  b: "Anytime",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} —{" "}
                        <span dangerouslySetInnerHTML={{ __html: s.t }} />
                      </p>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Malaysia</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kuala Lumpur has two terminals at the same airport complex — <strong className="font-medium">KLIA</strong> (Malaysia Airlines, Batik Air) and <strong className="font-medium">KLIA2</strong> (AirAsia budget terminal). They are 5 minutes apart by shuttle. The KLIA Express train from both terminals to KL Sentral takes 28 minutes and costs <strong className="font-medium">RM 55 (≈₹990)</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "AirAsia Direct from Indian Cities (recommended)",
                  d: "AirAsia flies direct to KLIA2 from Chennai (MAA), Kolkata (CCU), Kochi (COK), Delhi (DEL), and Hyderabad (HYD). Return fares booked 3–4 months ahead: ₹8,000–18,000 including baggage. The Chennai–KL route is the cheapest — often ₹6,000–9,000 one-way during sales.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Malaysia Airlines from Mumbai &amp; Delhi",
                  d: "Malaysia Airlines flies from Mumbai (BOM) and Delhi (DEL) to KLIA. Slightly pricier than AirAsia but includes checked baggage, meals, and KLIA terminal (faster immigration). Return fares: ₹20,000–35,000.",
                  b: "Full service",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚂",
                  t: "KLIA Express to KL Sentral (from airport)",
                  d: "The KLIA Express train from KLIA or KLIA2 to KL Sentral: 28 minutes, RM 55 (≈₹990) one-way. Trains run every 15–20 minutes, 5am–1am. This is significantly faster than taking a taxi or bus through KL traffic. Buy tickets at the KLIA Express kiosks at the airport.",
                  b: "Fastest into KL",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport Bus — Budget Option",
                  d: "Skybus and Aerobus from KLIA2 to KL Sentral: RM 10–15 (≈₹180–270), 1–1.5 hrs depending on traffic. Fine if you are not in a hurry and travelling light. Buy tickets at the ground floor arrivals of KLIA2.",
                  b: "Budget",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p
                          className="font-semibold text-sm text-ink"
                          dangerouslySetInnerHTML={{ __html: t.t }}
                        />
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Malaysia Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Days 1–3 in Kuala Lumpur, Days 4–5 in Penang, Days 6–7 in Langkawi. Each day card is expandable. All prices in Malaysian Ringgit (RM) with Indian Rupee equivalents — RM 1 ≈ ₹18.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive KL — Petronas Towers, Bukit Bintang &amp; Jalan Alor"
                cost="RM 150–200 total (≈₹2,700–3,600)"
                items={[
                  "Arrive at KLIA2 (AirAsia terminal). Take KLIA Express train to KL Sentral: RM 55 (≈₹990). Or shared airport bus for RM 12 (≈₹216) — takes longer but half the price.",
                  "Check in to hostel or budget hotel in Bukit Bintang — CapsuleTransit KLCC (RM 80/≈₹1,440) or Reggae Mansion (RM 60/≈₹1,080) in Chinatown. Both are excellent base camps for first-timers.",
                  "10:00am — Walk to Petronas Twin Towers (exterior viewing free). The towers are breathtaking at ground level — the KLCC Park fountain show runs daily at 8pm and is completely free. Standing at the base and looking up is one of the great urban experiences of Southeast Asia.",
                  "Book Skybridge tickets in advance at petronastwintowers.com.my — RM 85 (≈₹1,530) for timed entry including the 41st-floor sky bridge and 86th-floor observation deck. Book 2–3 weeks ahead as they sell out quickly.",
                  "1:00pm — Lunch at Jalan Alor, Bukit Bintang — KL&apos;s famous food street. Wong Ah Wah chicken wings (RM 12/≈₹216 for 6 pieces), char kway teow (RM 8/≈₹144), Malaysian fried rice (RM 7/≈₹126).",
                  "4:00pm — Petaling Street (Chinatown) — KL&apos;s oldest market, knockoff goods, dried foods, Chinese temples. Visit Sri Mahamariamman Temple (free) on the same street — a Tamil Hindu temple with a stunning gopuram.",
                  "7:00pm — Dinner at Masjid India area — Indian-Muslim mamak stalls serve roti canai (RM 1.50/≈₹27), teh tarik (RM 2/≈₹36), nasi lemak (RM 5/≈₹90). Open 24 hours.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Batu Caves, Little India &amp; Central Market"
                cost="RM 120–180 total (≈₹2,160–3,240)"
                items={[
                  "7:30am — Batu Caves by KTM Komuter from KL Sentral (RM 3/≈₹54, 30 minutes). Arrive early to beat the heat and the crowds — by 10am the staircase is packed.",
                  "8:00am — Batu Caves: free entry, 272 rainbow-painted steps to the main Hindu temple cave. The 43-metre golden Lord Murugan statue at the base is the world&apos;s tallest Murugan statue. The cave interior is vast — vaulted limestone ceilings with shafts of natural light. Takes 90 minutes.",
                  "Dark Cave inside: guided tour RM 40 (≈₹720), shows bats, cave racer snakes, and formations. Book at the ticket counter at the base of the stairs.",
                  "10:30am — Return to KL. Walk Brickfields (Little India) — colourful garlands, banana-leaf rice restaurants, Tamil music on every street. Saravana Bhavan KL serves banana-leaf meals for RM 15–20 (≈₹270–360). The whole neighbourhood feels like a transplanted slice of Chennai.",
                  "1:00pm — Central Market (Pasar Seni) — colonial-era Art Deco market, now a crafts and souvenir hub. Best place for batik fabric, pewter items, and Malaysian handicrafts. Free entry.",
                  "3:00pm — KL Tower (Menara KL): observation deck RM 52 (≈₹936). Sits on a hill above KLCC — actually higher than the Petronas observation deck. 360° views of the entire city.",
                  "8:00pm — Mamak stall dinner — Restoran Pelita or Nasi Kandar Pelita, open 24hr. Murtabak RM 9, teh tarik RM 2.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Thean Hou Temple, Aquaria KLCC &amp; Evening to Penang"
                cost="RM 200–300 including flight (≈₹3,600–5,400)"
                items={[
                  "9:00am — Thean Hou Temple (free) — six-tiered Chinese temple on a hilltop, spectacular architecture. The view of KL from the temple courtyard at morning is excellent and almost entirely free of tourists at this hour.",
                  "11:00am — Petaling Street morning: explore the wet market section and have dim sum breakfast at Kedai Kopi Chun Heong (RM 15–20/≈₹270–360).",
                  "1:00pm — Suria KLCC food court (inside the mall below Petronas Towers): browse the mall, eat at the food courts (RM 12–18/≈₹216–324 per meal). The KLCC Aquaria is directly accessible from the basement — RM 60 (≈₹1,080) for the underwater tunnel with sharks and rays.",
                  "4:00pm — Check out and take Grab to KLIA2 for your evening AirAsia flight to Penang. KL to Penang: RM 60–120 (≈₹1,080–2,160) booked 4–6 weeks ahead, 55-minute flight.",
                  "Arrive Penang Airport (PEN) evening, take Grab to Georgetown hotel: RM 20–25 (≈₹360–450). Check in to Red Inn Heritage Boutique or Broadway Budget Hotel in Georgetown (RM 60–100/≈₹1,080–1,800).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Penang — Georgetown Heritage, Clan Jetties &amp; Street Art"
                cost="RM 150–220 (≈₹2,700–3,960)"
                items={[
                  "9:00am — Clan Jetties (free) — five Chinese water villages built on stilts over the sea, each belonging to a different clan (Chew, Tan, Lee, Lim, Yeoh). The Chew Jetty is the most photogenic. Most atmospheric at sunrise or during early morning when the light is soft.",
                  "11:00am — Georgetown Street Art walk (free) — follow the Ernest Zacharevic murals map. The famous &apos;Boy on Bicycle&apos; mural and &apos;Children on a Swing&apos; are must-sees. Pick up a map at the tourist info office on Lebuh Light. The murals are scattered across a 2km walkable radius.",
                  "1:00pm — Lunch at Gurney Drive Hawker Centre or New Lane Hawker Centre. Penang assam laksa (RM 5/≈₹90), char kway teow (RM 6/≈₹108), Penang prawn mee (RM 6/≈₹108). The best char kway teow in Malaysia is widely agreed to be at Lorong Selamat — a dedicated pilgrimage for food travellers.",
                  "4:00pm — Kek Lok Si Temple (RM 10/≈₹180 for the pagoda) — Malaysia&apos;s largest Buddhist temple complex on a hillside above Air Itam. The pagoda blends Chinese, Thai, and Burmese architecture. The panoramic view of Georgetown and the sea from the upper level is one of the best free viewpoints in Penang.",
                  "7:00pm — Chulia Street at night — the backpacker hub of Georgetown with cheap eats, Indian food stalls, and live music cafes.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Penang Hill, Spice Garden &amp; Final Hawker Evening"
                cost="RM 180–260 (≈₹3,240–4,680)"
                items={[
                  "8:00am — Penang Hill funicular railway (RM 30/≈₹540 return). The summit at 833m is 5°C cooler than Georgetown below. Views of Georgetown, the Penang Bridge (the longest in Southeast Asia), and the Straits of Malacca on a clear day.",
                  "Owl Museum at the top: RM 25 (≈₹450). Entopia butterfly farm on the way up: RM 60 (≈₹1,080). Both optional.",
                  "11:00am — Tropical Spice Garden (RM 26/≈₹468) — walk among 500 spice and herb plants with guided audio commentary. Cafe on site serves spice-infused food and cold drinks.",
                  "1:00pm — Lunch at Air Itam market (hawker stalls near Kek Lok Si). Air Itam assam laksa is widely considered the best in Penang — one bowl RM 4. The market is a 10-minute Grab ride from Penang Hill.",
                  "3:00pm — Sri Mahamariamman Temple Penang (free) — Tamil Hindu temple on Queen Street, magnificent gopuram tower. Very similar in spirit to KL&apos;s temple but older and more worn — more atmospheric.",
                  "5:00pm — Penang Esplanade and Padang Kota Lama waterfront: free walk, sea views, colonial clock tower and Fort Cornwallis (RM 20/≈₹360 to enter).",
                  "7:00pm — Hawker dinner at Gurney Drive Hawker Centre — outdoor seafood, 100+ stalls, most dishes RM 5–12. End with cendol (shaved ice dessert with coconut milk and palm sugar) for RM 3.",
                  "Take early morning AirAsia flight to Langkawi OR ferry from Penang Jetty (RM 60/≈₹1,080, 3 hours — scenic). Ferry is recommended if the sea is calm.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Langkawi — Cenang Beach, Eagle Square &amp; Cable Car"
                cost="RM 200–300 (≈₹3,600–5,400)"
                items={[
                  "Arrive Langkawi Airport (LGK) or ferry port. Grab or taxi to Cenang Beach area: RM 25–35 (≈₹450–630). Check in to budget guesthouse near Cenang: RM 80–120 (≈₹1,440–2,160). Cenang Beach has the best concentration of restaurants and accommodation.",
                  "Langkawi is duty-free — alcohol is 40–50% cheaper than mainland Malaysia. Bottles of spirits cost RM 40–80 (≈₹720–1,440). Chocolates, perfumes, and electronics also have no GST.",
                  "11:00am — Pantai Cenang (Cenang Beach): free. Long stretch of white sand with calm water, good for swimming. Rent a sun lounger for RM 10. The beach is quieter than Bali with cleaner water than Phuket.",
                  "1:00pm — Lunch at Cenang Beach restaurants: grilled fish rice for RM 15–25 (≈₹270–450), laksa, or Indian banana-leaf rice at the many Tamil restaurants along the strip.",
                  "3:00pm — Eagle Square (Dataran Lang): free. Giant eagle sculpture at the north tip of the island — the emblem of Langkawi. Pleasant waterfront esplanade with views of the strait.",
                  "5:00pm — Langkawi Cable Car (SkyCab) + SkyBridge: RM 55 (≈₹990) combo. The cable car rises 700m above primary rainforest canopy in one of the world&apos;s steepest ascents. The 125m curved pedestrian bridge hangs from a single mountain peak — views of southern Thailand on clear days.",
                  "8:00pm — Dinner at Cenang Beach night stalls: grilled seafood, chicken satay, Malaysian BBQ. Budget RM 30–50 (≈₹540–900) for a full spread.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Langkawi Mangrove Tour, Duty-Free Shopping &amp; Departure"
                cost="RM 200–280 (≈₹3,600–5,040)"
                items={[
                  "8:00am — Kilim Karst Geoforest Mangrove Tour (RM 90–120/≈₹1,620–2,160 per person, half-day, includes boat). Guides take you through cathedral-like mangrove tunnels, visit the eagle feeding area where white-bellied sea eagles swoop down to take fish from the water&apos;s surface, and explore bat caves in limestone karst formations.",
                  "Kuah Jetty fish farm en route: see sea bass, grouper, and tiger prawns in floating pens.",
                  "12:00pm — Lunch at Kuah Town (Langkawi&apos;s main town): cheaper than Cenang, local restaurants serve lunch for RM 8–15 (≈₹144–270). Worth the 20-minute drive for the price difference.",
                  "2:00pm — Langkawi duty-free shops in Kuah: Lindt, Toblerone, and Cadbury chocolate at 40% cheaper than mainland prices. Johnny Walker Black Label RM 70 vs RM 140 on the mainland. The Duty Free Complex has the best selection.",
                  "4:00pm — Final swim at Cenang Beach or Tengah Beach (quieter, 5 min walk from Cenang, fewer tourists).",
                  "Evening — Fly home from Langkawi Airport (LGK). AirAsia flies Langkawi to Chennai, Bangalore, and KL with onwards connections. Allow 2 hours at the airport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Malaysia" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. All Malaysian landmarks are significantly cheaper to visit than equivalent sites in Europe, Japan, or Singapore.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Petronas Twin Towers",
                  e: "Free (exterior) / RM 85 Skybridge",
                  d: "The most iconic skyline in Southeast Asia. The exterior and KLCC Park are completely free — the 8pm fountain show is excellent. The Skybridge (41st floor) and Observation Deck (86th floor) cost RM 85 (≈₹1,530) and must be pre-booked at petronastwintowers.com.my. Sell out weeks in advance.",
                  t: "Must see · Book ahead",
                },
                {
                  n: "Batu Caves",
                  e: "Free entry + RM 5 for Rainbow Steps",
                  d: "The 272 rainbow-painted steps lead to a Hindu temple inside a cathedral limestone cave. The 43-metre golden Lord Murugan statue at the base is the world&apos;s tallest. Arrive before 9am to beat the crowds and the heat. The Dark Cave guided tour (RM 40) is genuinely impressive.",
                  t: "Must see · Arrive early",
                },
                {
                  n: "Penang Georgetown Street Art",
                  e: "Free",
                  d: "Ernest Zacharevic&apos;s murals turned Georgetown into one of the most-photographed cities in Southeast Asia. &apos;Boy on Bicycle&apos; and &apos;Children on a Swing&apos; are the most famous. Pick up a map from the tourist info office on Lebuh Light and walk the route — takes 2–3 hours.",
                  t: "Must see · Free",
                },
                {
                  n: "Langkawi Cable Car &amp; SkyBridge",
                  e: "RM 55 combo",
                  d: "One of the world&apos;s steepest cable car ascents — 700m of primary rainforest canopy below you. The 125m curved pedestrian bridge at the top hangs from a single mountain peak with views of southern Thailand on clear days. Best visited on a weekday morning.",
                  t: "Must do · Weekday morning",
                },
                {
                  n: "Kek Lok Si Temple, Penang",
                  e: "Free (RM 10 for pagoda)",
                  d: "Malaysia&apos;s largest Buddhist temple complex, built on a hillside above Air Itam. The pagoda blends Chinese, Thai, and Burmese architectural styles in a way that shouldn&apos;t work but does. The panoramic view of Georgetown and the Penang Strait from the upper terrace is exceptional.",
                  t: "Afternoon · 2 hrs",
                },
                {
                  n: "Cameron Highlands Tea Estates",
                  e: "Free (estate tours RM 10–25)",
                  d: "A 3-hour drive from KL, Cameron Highlands is Malaysia&apos;s hill station — tea estates at 1,500m altitude, cool climate at 18–25°C, and the Boh Tea Estate&apos;s viewing deck is spectacular. Best as a day trip from KL or an overnight if you have extra time beyond the 7-day itinerary.",
                  t: "Day trip from KL",
                },
                {
                  n: "Sepilok Orangutan Sanctuary, Borneo",
                  e: "RM 30 (foreigners)",
                  d: "If you extend beyond the 7-day West Malaysia itinerary, Sepilok in Sabah (Borneo) is the world&apos;s best place to see wild-release orangutans. Feeding times at 10am and 3pm. Requires a separate flight from KL to Kota Kinabalu (1.5 hrs, RM 80–150 on AirAsia).",
                  t: "Extension · Borneo",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900"
                      dangerouslySetInnerHTML={{ __html: place.n }}
                    />
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
            title="Malaysia — KL, Penang &amp; Langkawi"
            subtitle="Petronas Towers at night, Penang&apos;s UNESCO streets, Langkawi&apos;s duty-free beaches."
            spots={[
              {
                name: "Petronas Twin Towers at Night",
                query: "petronas twin towers kuala lumpur night malaysia skyline",
                desc: "The Petronas Twin Towers illuminated against the KL skyline — the most photographed view in Southeast Asia.",
              },
              {
                name: "Batu Caves Rainbow Steps",
                query: "batu caves rainbow steps kuala lumpur hindu temple malaysia",
                desc: "The 272 rainbow-painted steps leading to the Hindu temple cave with the golden Lord Murugan statue at the base.",
              },
              {
                name: "Penang Georgetown Street Art",
                query: "penang george town street art murals malaysia heritage",
                desc: "Ernest Zacharevic&apos;s murals in Georgetown — the street art that turned Penang into one of Asia&apos;s most-photographed cities.",
              },
              {
                name: "Langkawi Beach",
                query: "langkawi cenang beach malaysia tropical island duty free",
                desc: "Pantai Cenang — Langkawi&apos;s main beach on Malaysia&apos;s duty-free island, with calm waters and fewer crowds than Bali.",
              },
              {
                name: "Penang Hawker Stalls",
                query: "penang hawker food stalls char kway teow malaysia street food",
                desc: "Penang&apos;s legendary hawker centres — the city that gave the world char kway teow, assam laksa, and prawn mee.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Malaysia offers exceptional value at every price tier. RM 1 ≈ ₹18. The main variables are flights between cities (budget for RM 150–250 KL→Penang→Langkawi) and accommodation choice.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation/night", "RM 60–120", "RM 250–500", "RM 800–2,500"],
                    ["🍽️ Food/day", "RM 30–60", "RM 100–200", "RM 300–600"],
                    ["🚇 Transport/day", "RM 20–50", "RM 60–120", "RM 150–400"],
                    ["🎟️ Activities/day", "RM 50–100", "RM 150–300", "RM 500–2,000"],
                    ["✈️ Inter-city flights", "RM 60–100", "RM 100–200", "RM 200–500"],
                    ["TOTAL/day (excl. intl. flights)", "RM 160–330", "RM 560–1,120", "RM 1,750–5,500"],
                    ["≈ in Indian Rupees", "₹2,880–5,940", "₹10,080–20,160", "₹31,500–99,000"],
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (RM 160–330/day ≈ ₹2,880–5,940)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels like Reggae Mansion (RM 60), hawker stalls for all meals (RM 5–12/dish), LRT and Grab for transport. Completely comfortable — Malaysia&apos;s budget infrastructure is Southeast Asia&apos;s best.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (RM 560–1,120/day ≈ ₹10,080–20,160)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotels like Aloft KL Sentral or Cheong Fatt Tze Mansion in Penang, mix of hawker and restaurant dining, Grab for all transfers. The sweet spot for most Indian travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (RM 1,750–5,500/day ≈ ₹31,500–99,000)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Mandarin Oriental KL (from RM 1,200/night), The Majestic Hotel KL, Four Seasons Langkawi (from RM 2,500/night), private transfers, tasting menus. Malaysia&apos;s luxury tier is world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Malaysia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation recommendations across the three cities. All prices are per room per night and are approximate — book via Booking.com or direct hotel websites for best rates.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Mandarin Oriental Kuala Lumpur",
                  type: "Luxury · Facing Petronas Towers · Kuala Lumpur",
                  price: "From RM 1,200/night (≈₹21,600)",
                  badge: "Most iconic KL",
                  desc: "The city&apos;s benchmark luxury hotel, facing the Petronas Towers from across KLCC Park. The pool terrace view of the towers at night is extraordinary. Room service, spa, three restaurants. Perfect for a special occasion.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "The Majestic Hotel Kuala Lumpur",
                  type: "Heritage luxury · KL Sentral",
                  price: "From RM 600/night (≈₹10,800)",
                  badge: "Best heritage",
                  desc: "A 1932 colonial-era landmark hotel next to KL Sentral railway station, restored to its original grandeur with period furniture, the Orchid Conservatory restaurant, and a palm-fringed pool. The perfect blend of history and comfort.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Cheong Fatt Tze Mansion (The Blue Mansion)",
                  type: "UNESCO heritage boutique · Georgetown, Penang",
                  price: "From RM 380/night (≈₹6,840)",
                  badge: "Most unique Penang",
                  desc: "A restored 1880s indigo-blue Peranakan mansion with 18 guestrooms, award-winning architecture, and guided mansion tours included for guests. One of the most photographed buildings in Malaysia. Book 4–6 weeks ahead.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Reggae Mansion Hostel",
                  type: "Budget · Chinatown, Kuala Lumpur",
                  price: "From RM 60/night (≈₹1,080)",
                  badge: "Best budget KL",
                  desc: "The best-known backpacker hostel in KL, in the heart of Chinatown near Petaling Street. Rooftop bar, social vibe, clean dormitories and private rooms. Walk to Petronas Towers in 20 minutes. Excellent base for first-timers.",
                  color: "border-parchment-2 bg-white",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Malaysia</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Malaysia&apos;s food culture is one of the great reasons to visit. Hawker stalls are the backbone — nasi lemak for RM 5, char kway teow for RM 7, assam laksa for RM 4. These are not &quot;cheap versions&quot; — they are the original and best.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Jalan Alor Night Market, KL",
                  t: "Street food · Bukit Bintang, Kuala Lumpur",
                  d: "The most famous food street in KL, lined with outdoor tables and open-air restaurants from 5pm until midnight. Wong Ah Wah for chicken wings (RM 12), multiple char kway teow stalls (RM 8), Malaysian fried rice (RM 7), and fresh fruit stalls. Loud, bright, and completely worth it.",
                  b: "Must visit KL",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lorong Selamat Char Kway Teow, Penang",
                  t: "Hawker stall · Georgetown, Penang",
                  d: "Widely regarded as the best char kway teow in Malaysia — flat rice noodles stir-fried at extreme heat with bean sprouts, egg, lap cheong (Chinese sausage), and prawns in a dark soy and chili sauce. RM 7. Queue for 20–30 minutes. Worth every minute of it.",
                  b: "Best char kway teow",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Gurney Drive Hawker Centre, Penang",
                  t: "Outdoor hawker centre · Gurney, Penang",
                  d: "The grandest hawker centre in Penang — 100+ stalls outdoors along the seafront, most dishes RM 4–12. Penang laksa, otak-otak, prawn mee, rojak, and cendol (shaved ice dessert). Best visited at dinner when all stalls are open and the sea breeze makes it pleasant.",
                  b: "Best Penang dinner",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Restoran Pelita (Mamak Chain)",
                  t: "Indian-Muslim mamak · Multiple KL locations",
                  d: "The benchmark mamak restaurant chain, open 24 hours. Roti canai RM 1.50, teh tarik RM 2, murtabak RM 9, nasi kandar with multiple curries RM 8–15. This is where KL locals eat at 2am after a night out and where the morning construction crew has breakfast at 6am. Pure KL institution.",
                  b: "Authentic mamak",
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
            destination="Malaysia"
            hotels={[
              {
                name: "Mandarin Oriental Kuala Lumpur",
                type: "Luxury · Facing Petronas Towers",
                price: "From RM 1,200/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/my/mandarin-oriental-kuala-lumpur.html?aid=2820480",
              },
              {
                name: "The Majestic Hotel Kuala Lumpur",
                type: "Heritage luxury · KL Sentral",
                price: "From RM 600/night",
                rating: "5",
                badge: "Best heritage",
                url: "https://www.booking.com/hotel/my/majestic-kuala-lumpur.html?aid=2820480",
              },
              {
                name: "Cheong Fatt Tze Mansion (Blue Mansion)",
                type: "UNESCO boutique · Georgetown Penang",
                price: "From RM 380/night",
                rating: "5",
                badge: "Most unique Penang",
                url: "https://www.booking.com/hotel/my/cheong-fatt-tze-mansion.html?aid=2820480",
              },
              {
                name: "Reggae Mansion Hostel",
                type: "Budget hostel · Chinatown KL",
                price: "From RM 60/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/my/reggae-mansion.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Petronas Towers Skybridge + Observation Deck",
                duration: "2 hrs",
                price: "From RM 85/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=petronas+towers+skybridge&partner_id=PSZA5UI",
              },
              {
                name: "Penang Street Art &amp; Heritage Walking Tour",
                duration: "3 hrs",
                price: "From RM 150/person",
                badge: "Best of Penang",
                url: "https://www.getyourguide.com/s/?q=penang+heritage+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Langkawi Mangrove &amp; Eagle Feeding Tour",
                duration: "4 hrs",
                price: "From RM 90/person",
                url: "https://www.getyourguide.com/s/?q=langkawi+mangrove+tour&partner_id=PSZA5UI",
              },
              {
                name: "Batu Caves Dark Cave Guided Tour",
                duration: "1.5 hrs",
                price: "From RM 40/person",
                url: "https://www.getyourguide.com/s/?q=batu+caves+dark+cave+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏙️",
                  title: "Visiting Petronas Towers Without Pre-Booking the Skybridge",
                  desc: "The Petronas Twin Towers Skybridge and Observation Deck tickets are timed and limited — they release online weeks ahead and sell out completely. Book 2–3 weeks ahead at petronastwintowers.com.my. Walk-in availability at 8:30am is possible but not guaranteed, especially on weekends and public holidays. The exterior view is free and dramatic, but the 41st-floor bridge is worth the effort of booking.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍜",
                  title: "Skipping Penang&apos;s Hawker Centres for Air-Conditioned Restaurants",
                  desc: "Penang is Asia&apos;s street food capital — the city&apos;s hawker centres serve food that regularly tops &apos;World&apos;s Best Street Food&apos; lists. Char kway teow at Lorong Selamat (RM 7), assam laksa at Air Itam market (RM 4), and prawn mee at Jalan Macalister are irreplaceable. Eating at air-conditioned restaurants in Penang is like visiting Paris and eating at McDonald&apos;s.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏨",
                  title: "Booking a Hotel in Kuah Town Instead of Near Langkawi&apos;s Beaches",
                  desc: "Kuah Town is Langkawi&apos;s administrative centre — fine for duty-free shopping but has no beach. The beaches (Cenang, Tengah, Tanjung Rhu) are 15–25km away. Always book accommodation near Pantai Cenang or Pantai Tengah. Grab rides from Kuah to Cenang cost RM 25–35 each way — it adds up if you&apos;re going back and forth.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "✈️",
                  title: "Not Checking AirAsia&apos;s Direct Routes from Indian Cities",
                  desc: "AirAsia flies direct from Chennai (MAA), Kolkata (CCU), Kochi (COK), Delhi (DEL), and Hyderabad (HYD) to Kuala Lumpur (KLIA2). Return fares during sales can be as low as ₹8,000–12,000 including baggage. Booking 3–4 months ahead secures the best fares. The Chennai–KL route is particularly cheap — often ₹6,000–9,000 one-way.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p
                        className="font-medium text-sm text-stone-900 mb-1"
                        dangerouslySetInnerHTML={{ __html: m.title }}
                      />
                      <p
                        className="text-xs text-gray-700 font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: m.desc }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Malaysia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍛",
                  title: "Mamak Stalls Are Open 24 Hours — Use Them",
                  desc: "Indian-Muslim mamak restaurants are a Malaysian institution. They serve roti canai (RM 1.50), teh tarik (RM 2), murtabak (RM 8), and nasi kandar (RM 8–15). Open 24 hours, found everywhere in KL and Penang. Restoran Pelita and Nasi Kandar Pelita are the reliable nationwide chains — the best late-night food option in Malaysia.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "AirAsia Flies KL to Penang for RM 40–80 — Book Early",
                  desc: "The KL to Penang flight takes 55 minutes and costs RM 40–80 (≈₹720–1,440) booked 4–6 weeks ahead. The bus takes 4.5 hours (RM 35) and the train 3.5 hours (RM 40). For a 7-day trip, flying saves a half-day each way. Book KL→Penang and Penang→Langkawi separately for best prices.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💳",
                  title: "Buy a Touch &apos;n Go Card at KLIA",
                  desc: "The Touch &apos;n Go card (RM 10 at KLIA) is Malaysia&apos;s universal transport card — works on KL&apos;s LRT, MRT, monorail, buses, and highway tolls. Load credit as needed. Saves significant time over buying individual tickets. The Touch &apos;n Go eWallet app version works at most Malaysian shops and restaurants.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌿",
                  title: "Langkawi Is Duty-Free — Buy Alcohol &amp; Chocolate Here",
                  desc: "Langkawi is a duty-free island. Alcohol costs 40–50% less than mainland Malaysia — Johnnie Walker Black Label RM 70 vs RM 140 on the mainland. Lindt, Toblerone, and Cadbury chocolate at 40% cheaper. You can bring 1 litre of spirits and 1 litre of wine back duty-free to Malaysia. The Duty Free Complex in Kuah has the best selection.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗺️",
                  title: "Get a Grab Account Before You Land",
                  desc: "Grab is Southeast Asia&apos;s Uber, works seamlessly in KL, Penang, and Langkawi. Download the app and set up your Indian credit or debit card before travel — it works with Visa/Mastercard. Grab is significantly cheaper than metered taxis and eliminates negotiation entirely. Most KL rides cost RM 8–20.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💱",
                  title: "Exchange Money at Brickfields or Petaling Street, Not the Airport",
                  desc: "Airport money changers in KLIA give poor rates. The best rates in KL are at licensed money changers in Brickfields (Little India) or Petaling Street (Chinatown) — 5–8% better than the airport. Carry RM 200–300 cash for hawker stalls and small shops. ATMs are widely available and usually give competitive rates.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Malaysia" />

          {/* Combine With */}
          <CombineWith currentSlug="malaysia-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indians need a visa for Malaysia in 2025–2026?",
                  a: "As of 2024, Indian passport holders receive a 30-day visa-free entry to Malaysia. The previous eNTRI system (RM 14 electronic registration) has been replaced by full visa exemption for tourism. Simply arrive with a valid passport (6 months validity), confirmed return ticket, and hotel bookings. Always verify the current status on imi.gov.my before travel as policies can change.",
                },
                {
                  q: "What is the best time to visit Malaysia?",
                  a: "November to March is generally best for West Malaysia — KL, Penang, and Langkawi are drier with less rain, and Langkawi&apos;s beaches are at their calmest. December–January is peak tourist season with higher hotel prices. KL is viable year-round with brief afternoon showers expected in any season. Avoid planning a Langkawi beach trip during May–September when rain increases.",
                },
                {
                  q: "How much does a 7-day Malaysia trip cost from India?",
                  a: "Flights from India to KL cost ₹8,000–18,000 return on AirAsia booked in advance. On a budget of RM 200/day (≈₹3,600/day), total on-ground cost for 7 days is approximately RM 1,400 (≈₹25,200). Add inter-city flights KL→Penang→Langkawi for another RM 150–250. Total budget trip including flights: ₹40,000–55,000. Mid-range: ₹80,000–1,20,000.",
                },
                {
                  q: "Is Malaysia vegetarian-friendly for Indian tourists?",
                  a: "Very much so. Indian-Muslim mamak restaurants serve vegetarian roti canai, dal, vegetable curries, and banana-leaf meals throughout Malaysia. Indian restaurants in Brickfields (KL) and Penang&apos;s Mahamariamman Temple area serve pure vegetarian South Indian food. Chinese Buddhist restaurants in KL also serve mock-meat vegetarian options. Look for &apos;vegetarian&apos; or Chinese vegetarian signage.",
                },
                {
                  q: "Is street food from hawker stalls safe to eat?",
                  a: "Hawker stalls in Malaysia are extremely safe. Malaysia&apos;s hawker culture is regulated — stalls must have hygiene certificates displayed. Food is cooked fresh at very high temperatures in woks and karahs. Millions of tourists eat hawker food daily without issue. The only precaution: avoid raw salads and unpeeled fruit at roadside stalls. Cooked hawker food — laksa, char kway teow, satay — is perfectly safe.",
                },
                {
                  q: "How do I get from KL to Penang and Penang to Langkawi?",
                  a: "KL to Penang: AirAsia flight (55 mins, RM 40–80 booked ahead) or bus (4.5 hrs, RM 35) from Terminal Bersepadu Selatan (TBS) bus station. Penang to Langkawi: AirAsia flight (45 mins, RM 50–100) or ferry from Penang Jetty (3 hrs, RM 60 — scenic but slower). For a 7-day trip, flying saves significant time.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Malaysia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/kuala-lumpur-3-days", label: "KL in 3 days", icon: "🏙️" },
                { href: "/blog/penang-3-days", label: "Penang guide", icon: "🍜" },
                { href: "/blog/langkawi-3-days", label: "Langkawi guide", icon: "🏖️" },
                { href: "/blog/malaysia-visa-indians", label: "Visa for Indians", icon: "📋" },
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
          <RelatedGuides currentSlug="malaysia-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Singapore in 3 Days — The Complete City Guide", href: "/blog/singapore-3-days" },
                { label: "Bali in 5 Days — Temples, Rice Terraces &amp; Beaches", href: "/blog/bali-5-days" },
                { label: "Bangkok in 4 Days — Temples, Markets &amp; Street Food", href: "/blog/bangkok-4-days" },
                { label: "Thailand in 7 Days — Bangkok to Chiang Mai", href: "/blog/thailand-7-days" },
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
