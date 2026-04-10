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
const HOI_AN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Hoi An Actually Is" },
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
          href: `mailto:?subject=Hoi An 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hoi An in 3 Days — lanterns, tailors and the Ancient Town&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hoi-an-3-days"
        imageUrl="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
        description="Hoi An in 3 Days: Ancient Town UNESCO, lantern festival dates 2026, tailor secrets, An Bang Beach and cao lau noodles — complete Vietnam travel guide."
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
export default function HoiAnClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HOI_AN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hoi An" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hoi an lanterns vietnam ancient town yellow buildings thu bon river"
            fallback="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
            alt="Hoi An Ancient Town at night with colourful lanterns reflected in the Thu Bon River Vietnam"
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
              <span className="text-white/70">Hoi An 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hoi An in 3 Days:
                <em className="italic text-amber-300"> Lanterns, Tailors &amp; the Ancient Town</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                UNESCO Ancient Town, the Full Moon Lantern Festival, custom-stitched clothes in 24 hours, cao lầu you can&apos;t get anywhere else, and An Bang Beach before the sun beds come out. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏮 Hội An, Vietnam</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $20/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hoi An at 6am — the Old Town&apos;s yellow walls glowing in the first light before the motorbikes, a bánh mì from Madam Khanh&apos;s cart for 25,000 VND, the Thu Bon River mirror-still and empty — is the most photogenic hour in Southeast Asia.
            </p>
          </blockquote>

          {/* ── WHAT HOI AN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hoi An Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hoi An was the most important trading port in Southeast Asia between the 15th and 19th centuries. Japanese, Chinese, Dutch, Portuguese, and Indian merchants all had permanent trading quarters here — you can still identify the architectural fingerprints of each community in the Old Town&apos;s merchant houses, assembly halls, and the famous Japanese Covered Bridge. The town was so well-preserved because it was bypassed by modern development: the river silted up, trade moved to Da Nang, and Hoi An was left almost exactly as it was.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The result is a UNESCO World Heritage Ancient Town — 1,107 heritage structures in a compact 30-hectare area — that still functions as a living town rather than a museum. Families live in 300-year-old merchant houses. Tailors cut cloth in workshops that have operated for generations. The Thu Bon River brings in fishing boats every morning. And every 14th day of the lunar month, the electric lights go out, lanterns are floated on the river, and the town turns into something that doesn&apos;t look like it belongs to this century.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is enough to see the main Ancient Town highlights, eat every important dish, commission a tailor-made piece of clothing, and get to An Bang Beach before the sun beds come out. It&apos;s a short trip, but Hoi An is compact — almost everything is walkable or within a 15-minute bicycle ride.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="Da Nang (DAD)" />
              <StatCard icon="🌡️" label="Best Season" value="Feb–Apr" />
              <StatCard icon="🏛️" label="Heritage Sites" value="1,107" />
              <StatCard icon="💰" label="Budget From" value="$20/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hoi An</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Feb–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Window",
                  d: "22–30°C, low humidity, almost no rain. This is the sweet spot — warm enough for the beach, cool enough for walking the Old Town all day. February and March have the softest light for photography. April gets hotter but remains very pleasant. Book accommodation early for March–April as this is peak demand.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Aug–Sep",
                  i: "🌤️",
                  t: "Late Summer — Good Alternative",
                  d: "28–34°C, mostly dry. August and September sit in a dry gap between the monsoon cycles. The beach season is strong. Slightly hotter than February–April but still very manageable. Fewer crowds than peak season. The full moon lantern festivals in August and September are among the most atmospheric.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jul",
                  i: "🔆",
                  t: "Hot Season — Manageable",
                  d: "32–38°C. The heat is serious but not prohibitive if you follow the early-morning and late-afternoon rhythm. Beach is at its calmest. Old Town walking is best done before 10am and after 4pm. Fewer tourists and lower prices than peak season. Bring sun protection.",
                  b: "Acceptable",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Oct–Jan",
                  i: "🌧️",
                  t: "Monsoon & Flood Season — Avoid",
                  d: "Hoi An sits in a typhoon corridor. October and November bring the heaviest rain and are the most likely months for street flooding in the Ancient Town — historic flood markers on Old Town walls show water levels reaching 1.5m in bad years. December and January see moderate rain easing. If visiting in this window, bring waterproof boots and accept that An Bang Beach will be rough.",
                  b: "Higher flood risk",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hoi An</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hoi An has no airport. All international and domestic flights arrive at <strong className="font-medium">Da Nang International Airport (DAD)</strong>, 30km north. The transfer to Hoi An takes 30–45 minutes depending on traffic.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚕",
                  t: "Taxi from Da Nang Airport (recommended)",
                  d: "Fixed-rate metered taxis from the official airport taxi counter cost approximately VND 350,000 ($14) for the 45-minute journey. Use the official counter inside arrivals — do not accept offers from touts outside the terminal. Grab (the regional ride-hailing app) is slightly cheaper at VND 250,000–300,000 ($10–12) and is fully reliable from Da Nang Airport.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Public bus from Da Nang",
                  d: "Bus route Da Nang–Hoi An costs VND 50,000 ($2) and runs approximately every 30–45 minutes. Journey time: 60–90 minutes including stops. Catch it from the Da Nang bus station (not the airport directly — you need a short city bus or taxi to the main bus station first). Good budget option if you have time and light luggage.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🏍️",
                  t: "Motorbike taxi (Xe Om)",
                  d: "Motorbike taxis can take you from Da Nang to Hoi An for VND 150,000–200,000 ($6–8). Only practical for solo travellers with minimal luggage. The coastal road (Son Tra Peninsula route) is one of the most scenic in Vietnam — ask the driver to take the coast road via the Marble Mountains for an extra 20 minutes but a significantly better journey.",
                  b: "Scenic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Private hotel transfer",
                  d: "Most mid-range and luxury hotels in Hoi An offer airport pickup for VND 400,000–600,000 ($16–24). More expensive than Grab but convenient — the driver meets you in arrivals and brings you directly to the hotel.",
                  b: "Most convenient",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Hoi An Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to hit the Ancient Town before the midday tourist peak, reach the beach in the morning calm, and catch the best evening lantern light. Tailor visits are woven through all three days to allow 48–72 hours for quality work.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Ancient Town, Japanese Covered Bridge &amp; Lantern Evening"
                cost="$25–45 total (heritage ticket $5 + food + accommodation)"
                items={[
                  "7:00am — Arrive from Da Nang by taxi (VND 350,000, 45 minutes; or Grab VND 250,000–300,000). Check in to your accommodation — budget guesthouses in or near the Old Town run $12–25/night for a private room with AC and breakfast. La Siesta Hoi An (from $80/night) and Hoa Nang Boutique Hostel (from $12/dorm, $25/private) are excellent at their respective price points.",
                  "9:00am — Purchase the Ancient Town heritage ticket at the Hoi An Tourism Office on Le Loi Street. The ticket costs VND 120,000 ($5) and covers entry to five heritage monuments of your choice from the full list: ancient houses, assembly halls, handicraft workshops, the Japanese Covered Bridge (Lai Vien Kieu), and the trade ceramic museum. Without the ticket, you can walk all streets freely — only the interiors require it.",
                  "9:30am — Japanese Covered Bridge (Cầu Nhật Bản / Lai Vien Kieu), western end of Tran Phu Street. Built by the Japanese merchant community around 1593, the bridge spans a small canal and contains a small shrine to the Weather God inside its roof. It is the most iconic structure in the Ancient Town. Most beautiful in the soft light before 10am — by noon it is crowded with tour groups. Entry is included in the heritage ticket.",
                  "10:30am — Tan Ky Old House (101 Nguyen Thai Hoc Street, included in heritage ticket). A 200-year-old merchant&apos;s house built by a Vietnamese family of Chinese descent, showing Japanese, Chinese, and Vietnamese architectural elements in the same building — the carved crab motifs on the beams are a prosperity symbol, the hand-painted Japanese ceramic tiles are 17th-century export ware. The family still lives here; the grandmother will point out the flood markers on the wall from the 2020 flooding.",
                  "12:30pm — Lunch at White Marble (8 Le Loi Street, $8–18/person). One of the most respected modern Vietnamese restaurants in the Old Town — the white rose dumplings (bánh bao vạc, a Hoi An speciality) are beautifully done here, and the cao lầu is a reference version. Book ahead for midday.",
                  "2:30pm — Walk Tran Phu, Bach Dang (the riverside road), and Nguyen Thai Hoc. The afternoon light on the yellow ochre walls between 3–5pm is the photographer&apos;s prime window. Browse the lantern shops — a handmade silk lantern costs VND 25,000–120,000 ($1–5) and packs flat for luggage.",
                  "7:30pm — Evening on the Thu Bon River promenade. Lantern boats (thuyền hoa đăng) can be hired for VND 60,000 ($2.50) per boat to float a paper lantern on the river — a ritual believed to bring good luck. If your dates fall on the 14th of the lunar month, the entire town turns off electric lights for the Full Moon Lantern Festival: one of the most extraordinary spectacles in Asia. Check the 2026 dates in the Pro Tips section and plan your trip around one of these evenings.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Tailors, Cooking Class &amp; Mỳ Quảng Morning"
                cost="$55–100 total (tailor deposit + cooking class + food)"
                items={[
                  "8:00am — Breakfast: bánh mì from Madam Khanh — &apos;The Bánh Mì Queen&apos; (115 Tran Cao Van Street, VND 25,000–30,000 per bánh mì, cash only, queue forms from 7am). The baguette is baked fresh that morning, the fillings — pâté, Vietnamese cold cuts, pickled daikon, cucumber, fresh herbs, chilli — are assembled to order. Widely regarded as the best bánh mì in a city that is itself regarded as having the best bánh mì in Vietnam.",
                  "9:00am — Tailor row: walk the full length of Tran Phu, Le Loi, and Nguyen Thai Hoc before committing to any shop. There are over 400 tailoring workshops in Hoi An. Examine the sample garments on display — feel the lining, check the button holes, look at the hem stitching. A well-made suit can be delivered in 48 hours for $80–150; a simple dress in 24 hours for $30–60. The quality of a 48-hour piece is substantially better than a rushed 24-hour one. Pay 50% deposit only, get a written receipt with the delivery time.",
                  "11:30am — Mỳ Quảng noodles for lunch — a Quảng Nam province speciality that sits between a noodle soup and a dry noodle dish: thick yellow turmeric rice noodles with pork, shrimp, quail eggs, roasted peanuts, sesame crackers, and a small amount of rich broth poured over the top. Price at a local eatery: VND 30,000–50,000 ($1.25–2). Find it at the market stalls on Tran Phu or at Mì Quảng 1A (1 Hai Phong Street).",
                  "1:30pm — Rest through the early afternoon. Arrange a second tailor fitting for late afternoon (Day 2, around 4pm) — this is when adjustments are easiest and cheapest. Mid-range tailors Yaly Couture, Bebe Tailor, and A Dong Silk all offer second fittings as standard.",
                  "4:00pm — Second tailor fitting. Allow 30–45 minutes. Any seam, shoulder, or length adjustments are made now before final stitching.",
                  "5:30pm — Cooking class evening session ($30–50/person, includes 3–4 dishes). Morning classes typically begin with a market visit (better for immersion); evening classes focus on technique. Both cover cao lầu, white rose dumplings, and Vietnamese spring rolls. The Red Bridge Cooking School and Morning Glory Cooking School are the most consistent in quality. Book in advance — popular evening slots fill quickly.",
                  "8:30pm — Dinner: the cooking class usually ends with eating everything you&apos;ve cooked. If you have appetite for more, Bale Well Restaurant (45/51 Tran Hung Dao, $6–12/person) is famous for its bánh xèo sizzling pancakes and fresh spring roll assembly — you grill your own meat over charcoal and roll everything in rice paper at the table.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="An Bang Beach, Coconut Boats &amp; Farewell Cao Lầu"
                cost="$30–55 total (bike + beach + final tailor + food)"
                items={[
                  "7:30am — Bike to An Bang Beach. Hire a bicycle in the Old Town for VND 50,000/day ($2) and cycle the 4km coastal road — 15 minutes at a relaxed pace. An Bang is the closest beach to the Old Town and significantly less developed than Da Nang&apos;s My Khe — quieter, more local, without the pressure-selling that characterises resort beaches. The water is clearest in February–April.",
                  "8:00am — The beach before 9am: raked sand, horizontal light, water calm. Bring snorkelling gear if your guesthouse has it (visibility varies by season). Rent a sun lounger for VND 50,000 ($2) or use the free sand. Buy a fresh coconut from a beach vendor for VND 25,000 ($1).",
                  "10:30am — Coconut Village (Cam Thanh) boat tour ($10–15/person, 90 minutes). Traditional round bamboo basket boats (thuyền thúng) navigate the flooded water palm (nipa palm) forest in the estuary north of Hoi An. The boatmen perform spinning tricks and cast circular fishing nets. Book at the An Bang beachfront or through any Old Town travel agency the day before.",
                  "12:30pm — Cycle back to the Old Town (15 minutes). Final tailor pickup — allow 30 minutes for any last-minute adjustments. A reputable shop will fix anything on the spot. If the piece needs significant work, most good tailors can complete same-day corrections in 2–3 hours.",
                  "3:00pm — Last wander through the Ancient Town. The Fukien Assembly Hall (46 Tran Phu Street, included in heritage ticket) is the most spectacular interior in the Old Town — gilded altars, incense spirals hanging from the ceiling, a wall mural of Quan Cong&apos;s journey from China to Vietnam, and carved wooden dragon pillars. Worth 20 minutes even if you&apos;ve already used your heritage ticket.",
                  "5:30pm — Farewell cao lầu. Cao lầu is a Hoi An culinary institution: thick chewy rice noodles (made using water drawn from the ancient Ba Le well in the Old Town — this is not marketing mythology, the noodle texture genuinely cannot be replicated without it), served with barbecued char siu pork, crispy rice crackers, bean sprouts, and fresh herbs. Price: VND 40,000–80,000 ($1.50–3) at a local stall, VND 120,000–200,000 ($5–8) at a restaurant. Eat it at Trung Bac (87 Tran Phu) or Quan Cao Lau (Nguyen Truong To Street).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hoi An" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Hoi An Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The VND 120,000 ($5) heritage ticket covers 5 monuments from the full list. These are the ones worth spending your five entries on. Entry is free for the street exteriors — you only pay to enter the interiors.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Japanese Covered Bridge (Lai Vien Kieu)",
                  e: "Included in heritage ticket",
                  d: "Built c.1593 by the Japanese trading community. The bridge contains a small temple to the Weather God in its roof structure — a fusion of Japanese and Vietnamese religious architecture. The most photographed structure in Hoi An and the symbol of the Ancient Town. Best light: before 9am or after 5pm when the tour groups thin.",
                  t: "Must see · 20–30 mins",
                },
                {
                  n: "Tan Ky Old House",
                  e: "Included in heritage ticket",
                  d: "A 200-year-old merchant&apos;s house with 7 generations of family history visible in its architecture — the Japanese roof brackets, Chinese carved screens, and Vietnamese tiled floors represent the trading networks that made Hoi An great. The flood markers on the interior walls are sobering: the 2020 flood reached 1.4m inside this house.",
                  t: "Must see · 30–45 mins",
                },
                {
                  n: "Fukien Assembly Hall (Phuc Kien Hoi Quan)",
                  e: "Included in heritage ticket",
                  d: "The most impressive interior in the Ancient Town. Built by the Fujian Chinese community in 1697 and expanded through the 18th century. The gilded altars, incense spiral ceiling, and 10-metre carved wooden panels depicting mythological scenes are extraordinary. The rear courtyard has a garden with ceramic mosaic sculptures. Allow 20 minutes minimum.",
                  t: "Must see · 20–30 mins",
                },
                {
                  n: "Cantonese Assembly Hall (Quang Trieu Hoi Quan)",
                  e: "Included in heritage ticket",
                  d: "The Cantonese merchant community&apos;s hall built in 1855. Smaller than the Fukien hall but with beautiful blue-and-white ceramic detail work and a particularly fine central altar. The stone carving in the front courtyard features two dragons pursuing a flaming pearl — a symbol of wisdom and good fortune.",
                  t: "Recommended · 15–20 mins",
                },
                {
                  n: "Thu Bon River Lantern Boats",
                  e: "VND 60,000 ($2.50) per boat",
                  d: "Not a heritage monument but the most atmospheric experience in Hoi An. Paper lanterns are floated on the Thu Bon every evening from the Bach Dang riverside. On Full Moon nights (14th of the lunar month), the electric lights go out and the river becomes a field of floating light. The boat operators are on the riverside from dusk — negotiate the price before boarding.",
                  t: "Evening only · 20 mins",
                },
                {
                  n: "An Bang Beach",
                  e: "Free (sun lounger VND 50,000)",
                  d: "15 minutes by bicycle from the Ancient Town (VND 50,000/day bike hire). The most accessible beach to Hoi An and significantly less commercialised than the resort beaches further north. White sand, clear water in dry season, and a collection of low-key beach bars and restaurants behind the shoreline. Get there before 9am for the best experience.",
                  t: "Beach · Half day",
                },
                {
                  n: "Marble Mountains (Ngu Hanh Son)",
                  e: "VND 40,000 ($1.60) entry + VND 15,000 elevator",
                  d: "Five marble and limestone mountains 30km south of Hoi An containing Buddhist sanctuaries, Hindu shrines, and natural cave systems. Huyen Khong cave has a skylight aperture that casts a beam of light across a large Buddha statue — one of the most striking scenes in central Vietnam. Take the elevator up (VND 15,000) and walk the cave networks. Half-day trip by motorbike taxi or Grab.",
                  t: "Day trip · 2–3 hrs",
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
            title="Hoi An — Lanterns, Yellow Walls &amp; the Thu Bon"
            subtitle="The Ancient Town&apos;s light at dusk, the river at dawn, and the streets between."
            spots={[
              {
                name: "Hoi An Lantern Street at Night",
                query: "hoi an ancient town lanterns night tran phu street yellow walls vietnam",
                desc: "Tran Phu Street lined with silk lanterns at dusk — the most photographed scene in Hoi An and the reason people come.",
              },
              {
                name: "Japanese Covered Bridge",
                query: "japanese covered bridge lai vien kieu hoi an vietnam ancient town",
                desc: "The 1593 Japanese Covered Bridge (Lai Vien Kieu) — the symbol of Hoi An and the Ancient Town&apos;s most iconic structure.",
              },
              {
                name: "Thu Bon River at Dawn",
                query: "thu bon river hoi an dawn boats vietnam reflections morning",
                desc: "The Thu Bon River at first light — fishing boats, still water, and the Old Town&apos;s yellow facades reflecting in the river.",
              },
              {
                name: "Hoi An Lantern Festival Full Moon",
                query: "hoi an lantern festival full moon river paper lanterns vietnam",
                desc: "The Full Moon Lantern Festival on the 14th of each lunar month — electric lights extinguished, paper lanterns on the river, candlelight on the streets.",
              },
              {
                name: "An Bang Beach Hoi An",
                query: "an bang beach hoi an vietnam white sand clear water morning",
                desc: "An Bang Beach 15 minutes by bicycle from the Old Town — white sand, calm water, and a fraction of the development of the resort beaches north.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hoi An spans a wide budget range — the street food and guesthouses make it one of Southeast Asia&apos;s best value destinations, while the tailors, cooking classes, and resort hotels mean mid-range and luxury travellers can spend as much as they like. The heritage ticket is the same for everyone.
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
                    ["🏨 Accommodation (per night)", "$12–25", "$60–150", "$200–800"],
                    ["🍽️ Food (per day)", "$5–12", "$20–40", "$60–150"],
                    ["🚕 Da Nang transfer", "$10–14", "$15–25", "$25–50"],
                    ["🏛️ Heritage ticket", "$5", "$5", "$5"],
                    ["✂️ Tailor (one piece)", "$30–60", "$80–200", "$200–500"],
                    ["🍳 Cooking class", "$20–35", "$35–60", "$150–250"],
                    ["🚲 Bike hire (per day)", "$2", "$2", "$5–10"],
                    ["🏖️ An Bang Beach + boats", "$10–20", "$20–40", "$50–100"],
                    ["TOTAL (3 days, per person)", "$80–180", "$300–600", "$800–2,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($20–38/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Hoa Nang Boutique Hostel or a guesthouse near the Old Town ($12–25/night), eat at market stalls and local eateries (VND 30,000–80,000 per meal), bike everywhere. Hoi An on a budget is excellent — the street food alone justifies the trip.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($60–120/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">La Siesta Hoi An Resort ($80–120/night, pool, great breakfast), eat at White Marble and Mango Rooms, take a morning cooking class, commission a tailored jacket from Yaly or Bebe Tailor. The comfortable, unhurried way to do Hoi An.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($200–600/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Anantara Hoi An Resort ($200–500/night on the Thu Bon riverside), The Nam Hai Four Seasons for pure resort luxury ($400–1,200), private boat charters on the river, Nam Hai&apos;s cooking school, and bespoke tailoring with European-sourced fabric.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hoi An</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Staying inside or immediately adjacent to the Ancient Town gives you the best access to the early-morning and evening atmosphere — the times when the Old Town is most beautiful. The Anantara and La Siesta are both within easy walking distance of the heritage sites.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Anantara Hoi An Resort",
                  type: "Luxury riverside · Ancient Town edge",
                  price: "From $200/night",
                  badge: "Best location",
                  desc: "The most prestigious hotel in the Ancient Town itself — a French colonial-style resort directly on the Thu Bon River, 5 minutes&apos; walk from the Japanese Covered Bridge. The riverside pool and garden restaurant are exceptional. The location means you can walk the Old Town lantern streets at night and be back in your room in minutes.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "La Siesta Hoi An Resort & Spa",
                  type: "Mid-range boutique · Old Town proximity",
                  price: "From $80/night",
                  badge: "Best value mid-range",
                  desc: "The best mid-range option in Hoi An by a significant margin. Pool, spa, excellent breakfast included, and genuinely warm service. 10-minute walk to the Ancient Town. The deluxe rooms are well-sized. La Siesta consistently outperforms its price category and is the obvious choice for travellers who want comfort without paying Anantara prices.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hoa Nang Boutique Hostel",
                  type: "Budget boutique · Near Ancient Town",
                  price: "From $12/dorm, $25/private",
                  badge: "Best budget",
                  desc: "Clean, well-run, with a genuine boutique aesthetic for the price. Dorm beds from $12/night, private rooms from $25. Great common area, friendly staff who know the town well, and the location puts you within easy walking distance of the Old Town. Not a party hostel — genuinely peaceful for the price.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "The Nam Hai (Four Seasons)",
                  type: "Luxury resort · Dien Ban, 10 min from Old Town",
                  price: "From $400/night",
                  badge: "Most luxurious",
                  desc: "The finest resort in the Hoi An area — 100 pool villas on a private beach 4km from the Ancient Town. Three restaurants, three pools, a spectacular spa, and the best cooking school in central Vietnam (run with a resident chef, $150–250/person for a private class). The resort runs a private shuttle to the Old Town. If budget is not a consideration, this is the definitive Hoi An base.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hoi An</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hoi An has one of the best food scenes in Vietnam — a combination of local specialities you can&apos;t eat anywhere else (cao lầu requires the Old Town well water, white rose dumplings are a family-controlled recipe), excellent mid-range restaurants, and street food stalls that have been serving the same dishes for generations.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "White Marble",
                  t: "Modern Vietnamese · 8 Le Loi Street",
                  d: "One of the most accomplished Vietnamese restaurants in the Ancient Town. The white rose dumplings (bánh bao vạc) are a reference version — translucent rice flour wrappers, delicate shrimp filling. The cao lầu and chicken rice (cơm gà Hội An) are equally strong. Wine list is the best in Hoi An. $8–18/dish. Book ahead for evenings.",
                  b: "Best overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Mango Rooms",
                  t: "Inventive Vietnamese-fusion · 111 Nguyen Thai Hoc",
                  d: "The Old Town&apos;s most celebrated fusion restaurant — Vietnamese technique, French influence, and unexpected flavour combinations in a beautiful courtyard setting. The caramelised fish in clay pot is a signature dish. The cocktail list is excellent. $15–30/person. Internationally reviewed and consistently excellent. Book at least a day ahead.",
                  b: "Must book ahead",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Bale Well",
                  t: "Traditional Vietnamese · 45/51 Tran Hung Dao",
                  d: "The most famous local-style restaurant in Hoi An for traditional dishes. Known particularly for bánh xèo (sizzling rice-flour pancake with pork, shrimp, and bean sprouts) and fresh spring rolls assembled at the table from a basket of herbs, greens, and grilled pork. $6–12/person. The garden setting and communal tables give it an authentic feel that the more upmarket restaurants lack.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Trung Bac (Cao Lầu specialist)",
                  t: "Local noodles · 87 Tran Phu Street",
                  d: "The most straightforward place to eat proper cao lầu — thick chewy noodles with barbecued pork, rice crackers, and bean sprouts, served in the traditional Hoi An style with only a small amount of broth. VND 40,000–60,000 ($1.50–2.50). A tiny local shop with plastic stools. The cao lầu here has been made the same way for decades and is the most authentic version available.",
                  b: "Best cao lầu",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "White Rose Restaurant",
                  t: "Hoi An specialities · 533 Hai Phong Street",
                  d: "The only restaurant in the world with the rights to the original white rose dumpling recipe — bánh bao vạc, delicate steamed shrimp dumplings shaped into white roses. The family holds the recipe and supplies several other Hoi An restaurants. Eating them here is the definitive version. VND 60,000–90,000 ($2.50–3.50) for a plate of 8. The pork wontons (cao lầu-style) are also excellent.",
                  b: "Unique recipe",
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
            destination="Hoi An Vietnam"
            hotels={[
              {
                name: "Anantara Hoi An Resort",
                type: "Luxury riverside · Ancient Town edge",
                price: "From $200/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/vn/anantara-hoi-an-resort.html?aid=2820480",
              },
              {
                name: "La Siesta Hoi An Resort & Spa",
                type: "Mid-range boutique · Pool & spa",
                price: "From $80/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/vn/la-siesta-hoi-an-resort-spa.html?aid=2820480",
              },
              {
                name: "Hoa Nang Boutique Hostel",
                type: "Budget boutique · Near Old Town",
                price: "From $12/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/vn/hoa-nang-boutique-hostel.html?aid=2820480",
              },
              {
                name: "The Nam Hai (Four Seasons)",
                type: "Luxury beach resort · Pool villas",
                price: "From $400/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/vn/the-nam-hai.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hoi An Ancient Town Private Walking Tour",
                duration: "3 hrs",
                price: "From $30/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=hoi+an+ancient+town+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Vietnamese Cooking Class with Market Visit",
                duration: "4 hrs",
                price: "From $35/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=hoi+an+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Coconut Basket Boat Tour — Cam Thanh",
                duration: "90 mins",
                price: "From $12/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=hoi+an+basket+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "My Son Sanctuary Half-Day Tour",
                duration: "4 hrs",
                price: "From $18/person",
                url: "https://www.getyourguide.com/s/?q=my+son+sanctuary+hoi+an&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💰",
                  title: "Paying the First Price a Tailor Quotes",
                  desc: "The initial price at most Hoi An tailor shops is negotiating-room pricing. Start at 50–60% of the quoted price and settle in the middle. A jacket quoted at $100 typically settles at $55–70 with respectful negotiation. Once you&apos;ve agreed a price, honour it at pickup — attempting to renegotiate on collection is considered bad faith and will embarrass you and the tailor.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⏰",
                  title: "Asking for a 24-Hour Tailor Turnaround",
                  desc: "A 24-hour suit or jacket is a rushed product. The stitching is compressed, there is no time for a second fitting, and the result shows. Good tailoring requires 48–72 hours minimum: measurement on Day 1, a fitting on Day 2, final collection on Day 3. Shops that advertise &apos;24-hour turnaround&apos; can technically deliver it — but the 72-hour version will be substantially better. If quality matters, tell the tailor you need 72 hours from the start.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌧️",
                  title: "Visiting October–November Without Checking Flood Forecasts",
                  desc: "Hoi An is in a typhoon corridor and the Ancient Town floods regularly in October and November — the flood markers on Old Town walls show water levels reaching 1.5m in bad years. Shops and restaurants raise their stock onto shelves and continue trading through knee-deep water, which is oddly charming, but this is not the experience most visitors want. Check weather forecasts and typhoon warnings carefully if booking in this window. February–April is far more predictable.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🎫",
                  title: "Assuming the Heritage Ticket Covers Everything",
                  desc: "The VND 120,000 heritage ticket covers entry to five monuments — you select which five from the full list at the Tourism Office. It does not give unlimited access to all 1,107 heritage sites, nor does it cover the Japanese Covered Bridge for free entry without using one of your five tickets. Plan which five sites you want before purchasing so you don&apos;t waste tickets on sites you can see perfectly well from the exterior.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
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

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hoi An</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏮",
                  title: "Check the Full Moon Lantern Festival Dates First",
                  desc: "The Hoi An Full Moon Lantern Festival occurs on the 14th of every lunar month — electric lights in the Old Town go off, paper lanterns fill the river, traditional music plays in the streets. 2026 dates: February 11, March 13, April 12, May 11, June 10, July 9, August 8, September 7, October 6, November 4, December 4. Plan your trip to include one of these dates. February and March are the best combination of weather and atmosphere.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "The Old Town at 6am Is Worth the Alarm",
                  desc: "Before the day-trippers from Da Nang arrive (they come on buses from around 9am), the Ancient Town streets are almost empty. The light is soft and golden, the yellow walls glow without harsh shadows, and you can photograph the Japanese Covered Bridge without a crowd. This hour — 6am to 8am — is why photographers make Hoi An a priority destination. It genuinely looks different before 8am.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚲",
                  title: "Bicycle Over Tuk-Tuk or Taxi for the Old Town",
                  desc: "The Ancient Town is car-free and the surrounding area is flat. A bicycle hired for VND 50,000/day ($2) covers everything — the Old Town, An Bang Beach (15 minutes), the coconut village road, and the market streets. Cycling slows you down to the pace the town deserves and lets you stop at anything interesting on the way. Tuk-tuk tours rush you and miss the best things.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🧵",
                  title: "Walk the Full Tailor Strip Before Choosing",
                  desc: "There are 400+ tailoring shops in Hoi An and quality varies dramatically. Before committing, walk the full length of Tran Phu, Le Loi, and Nguyen Thai Hoc and examine samples in 5–6 different shops. Feel the lining, check the button holes, look at the hem. The best shops keep a portfolio of completed pieces on satisfied customers — ask to see it. A guesthouse owner&apos;s recommendation (who knows which shops reliably satisfy international clients) is worth more than any online review.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍜",
                  title: "Eat Cao Lầu Before You Leave — It Doesn&apos;t Exist Elsewhere",
                  desc: "Cao lầu is not available anywhere outside Hoi An in authentic form — the noodle recipe requires water drawn from the Ba Le well in the Ancient Town, which gives the noodles their distinctive chewy texture. Restaurants outside Hoi An that sell &apos;cao lầu&apos; are serving an approximation. Eat it at least once at a local stall (VND 40,000–60,000) and once at a proper restaurant for comparison.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💧",
                  title: "Carry Cash in VND — Many Small Stalls Are Cash Only",
                  desc: "The best food in Hoi An is at the street stalls, market vendors, and small family restaurants — almost all of which are cash only. Madam Khanh&apos;s bánh mì, the cao lầu stalls, the White Rose Restaurant, and the lantern boat operators all require VND cash. Draw money from the ATMs on Tran Phu or Le Loi before heading to the market. Mid-range restaurants and hotels accept cards.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hoi An" />

          {/* Combine With */}
          <CombineWith currentSlug="hoi-an-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I guarantee tailor quality in Hoi An?",
                  a: "Quality tailoring requires three things: time, a second fitting, and the right shop. Allow 72 hours not 24 — rushed tailoring shows in the stitching and lining. Attend a second fitting on Day 2 before final stitching, when adjustments are easiest. Pay only 50% deposit and the balance on satisfactory collection. Recommended shops: Yaly Couture (consistent international quality, suits from $120), Bebe Tailor (excellent bespoke suits, well-regarded by return customers), A Dong Silk (heritage silk specialist, dresses from $50). If a shop declines to do a second fitting, choose a different shop.",
                },
                {
                  q: "When are the Hoi An Lantern Festival dates in 2026?",
                  a: "The Full Moon Lantern Festival occurs on the 14th of each lunar month. 2026 dates: January 13, February 11, March 13, April 12, May 11, June 10, July 9, August 8, September 7, October 6, November 4, December 4. The festival runs from approximately 6pm to midnight. Electric lights in the Old Town are extinguished, lanterns are lit, paper lanterns are floated on the Thu Bon River, and traditional music is performed on the streets. Entry is free — the Old Town is simply open. February and March festivals have the best weather.",
                },
                {
                  q: "How do I get from Da Nang Airport to Hoi An?",
                  a: "Grab (Southeast Asia&apos;s Uber equivalent) is the most reliable option — approximately VND 250,000–300,000 ($10–12) for the 30–45 minute journey. The Grab app works perfectly at Da Nang Airport. Official metered taxis from the airport counter cost VND 350,000 ($14) — avoid the unlicensed touts outside arrivals. The public bus (VND 50,000/$2) requires a transfer in Da Nang city and takes 60–90 minutes total — good budget option if you have light luggage. Hotel transfers run VND 400,000–600,000 ($16–24) but include a meet-and-greet in arrivals.",
                },
                {
                  q: "What is cao lầu and why can&apos;t you eat it outside Hoi An?",
                  a: "Cao lầu is a Hoi An noodle dish: thick, chewy yellow-brown rice noodles served with char siu-style barbecued pork, crispy rice crackers, bean sprouts, and fresh herbs, with only a small amount of broth. The noodle texture — its distinctive chewiness — comes from the lye water used in production, which is made using water drawn from the Ba Le well in the Ancient Town. This specific water mineral composition cannot be replicated elsewhere. Restaurants outside Hoi An that sell cao lầu are using approximations. Price: VND 40,000–80,000 ($1.50–3) at a stall, VND 120,000–200,000 ($5–8) at a restaurant. Eat it at Trung Bac (87 Tran Phu) for the most authentic version.",
                },
                {
                  q: "What is the Ancient Town heritage ticket and how does it work?",
                  a: "The VND 120,000 ($5) heritage ticket is purchased at the Hoi An Tourism Office on Le Loi Street. It grants entry to five monuments from the full list, which includes ancient houses (Tan Ky Old House, Phung Hung Old House), assembly halls (Fukien/Phuc Kien, Cantonese/Quang Trieu), handicraft workshops, the trade ceramic museum, and the Japanese Covered Bridge. You choose which five when you use the ticket — each entry is stamped. Without the ticket, you can walk all streets and view all exteriors for free. Only the interiors require the ticket.",
                },
                {
                  q: "Is An Bang Beach worth visiting from Hoi An?",
                  a: "Yes, for most travellers An Bang is the right beach — it&apos;s close enough (15 minutes by bicycle, VND 50,000/day bike hire) to do as a half-morning, the sand is clean and white, the water is good in dry season (February–April), and it&apos;s significantly less commercialised than the resort beaches north of Da Nang. The beach is best before 9am when the sand is freshly raked and the light is horizontal. Grab a sun lounger for VND 50,000 or use the free sand. Several good beach bar-restaurants are open from 8am. Avoid July–September when waves can be rough.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hoi An trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hoi-an-lantern-festival-dates", label: "Lantern festival dates", icon: "🏮" },
                { href: "/blog/hoi-an-tailor-guide", label: "Tailor guide", icon: "🧵" },
                { href: "/blog/hoi-an-ancient-town-tips", label: "Ancient Town tips", icon: "🏛️" },
                { href: "/blog/vietnam-travel-guide", label: "Vietnam overview", icon: "🇻🇳" },
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
          <RelatedGuides currentSlug="hoi-an-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Hanoi 4 Days — Old Quarter &amp; Street Food", href: "/blog/hanoi-4-days" },
                { label: "Ho Chi Minh City 3 Days — War History &amp; Pho", href: "/blog/ho-chi-minh-city-3-days" },
                { label: "Bangkok 4 Days — Temples, Markets &amp; Street Food", href: "/blog/bangkok-4-days" },
                { label: "Luang Prabang 3 Days — Mekong Monks &amp; Waterfalls", href: "/blog/luang-prabang-3-days" },
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
