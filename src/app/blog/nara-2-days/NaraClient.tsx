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
const NARA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Nara Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚆",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "2-Day Itinerary" },
  { id: "landmarks",   emoji: "⛩️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Nara 2-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nara in 2 Days — sacred deer, Great Buddha and Japan's ancient capital&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/nara-2-days"
        imageUrl="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
        description="Nara in 2 Days: Feed 1,300 sacred deer, see the Great Buddha in the world's largest wooden building, walk Kasuga Taisha's 3,000 lanterns — complete travel guide."
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
export default function NaraClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NARA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nara" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nara japan deer todaiji temple great buddha park"
            fallback="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
            alt="Nara Japan deer bowing in front of Todai-ji Temple Great Buddha"
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
              <span className="text-white/70">Nara 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Japan&apos;s Ancient Capital
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nara in 2 Days:
                <em className="italic text-amber-300"> Deer, Great Buddha &amp; Japan&apos;s Ancient Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,300 sacred deer, the world&apos;s largest wooden building, a 15-metre bronze Buddha, 3,000 stone lanterns, and a primeval forest untouched for 1,300 years. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇯🇵 Nara, Japan</span>
              <span>&middot;</span>
              <span>🗓 2 Days</span>
              <span>&middot;</span>
              <span>💰 From &yen;6,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              1,300 wild deer that have been considered sacred since the 8th century roam freely through the park and bow to visitors for shika senbei, the world&apos;s largest wooden structure houses a 15-metre bronze Buddha that took 2 million workers to cast in 752 AD, and a town that was Japan&apos;s capital before Kyoto still feels like time stopped in the 8th century &mdash; Nara, Japan&apos;s gentlest city.
            </p>
          </blockquote>

          {/* ── WHAT NARA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">&#9889; What Nara Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Before Kyoto, before Tokyo, there was Nara. From 710 to 784 AD, Nara (then called Heijo-kyo) served as Japan&apos;s first permanent imperial capital. Emperor Shomu commissioned the Great Buddha of Todai-ji to protect the nation from a smallpox epidemic that had killed a third of the population. The project required 2.6 million labourers, 500 tonnes of copper, 440 tonnes of charcoal, and 25 kilograms of gold. The resulting Vairocana Buddha &mdash; 15 metres tall, weighing 500 tonnes &mdash; sits inside the Daibutsuden (Great Buddha Hall), the largest wooden building on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              But Nara&apos;s most famous residents are not in the temples. 1,200 wild sika deer roam freely through Nara Park, across roads, into shops, and up to visitors. They have been considered divine messengers of the Kasuga Shrine since the 8th century and are protected as a national natural treasure. The deer bow to visitors in exchange for shika senbei (deer crackers, &yen;200 per packet) &mdash; a behaviour they learned by watching humans bow to each other over centuries.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Most visitors treat Nara as a half-day trip from Kyoto. That covers Todai-ji and the deer park &mdash; roughly 15% of what the city contains. Kasuga-taisha&apos;s 3,000 lanterns, the Kasugayama primeval forest untouched for 1,300 years, Yoshikien Garden (free for foreigners), Isuien&apos;s borrowed scenery of Todai-ji&apos;s rooftop, Naramachi&apos;s Edo-period machiya lanes, and the empty evening hours when the deer settle in mist below the Great Buddha Hall &mdash; all of this requires at least two days.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚆" label="From Osaka/Kyoto" value="35–45 min" />
              <StatCard icon="🌸" label="Best Season" value="Mar–May" />
              <StatCard icon="🦌" label="Sacred Deer" value="1,200+" />
              <StatCard icon="💰" label="Budget From" value="&yen;6,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#127777;&#65039; Best Time to Visit Nara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring &mdash; Cherry Blossom Season",
                  d: "12&ndash;22&deg;C. Late March to early April brings cherry blossoms across Nara Park &mdash; the combination of blooming sakura and deer grazing beneath them is extraordinary. The park&apos;s 1,700 cherry trees peak around the first week of April. Peak crowds during Golden Week (late April).",
                  b: "Best season",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍁",
                  t: "Autumn &mdash; Koyo Colours",
                  d: "10&ndash;20&deg;C. Maple trees around Kasugayama Forest, Isuien Garden, and the temple approaches turn brilliant red and gold. Fewer crowds than spring. Mid-November is typically peak colour. The deer among autumn leaves is Nara&apos;s second-most photogenic moment after cherry blossoms.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Summer &amp; Rainy Season",
                  d: "25&ndash;35&deg;C with high humidity. June brings the tsuyu (rainy season) lasting 3&ndash;4 weeks. July and August are hot but include the Obon Mantoro lantern festival at Kasuga-taisha when all 3,000 lanterns are lit. Early mornings remain comfortable for the park.",
                  b: "Hot but festivals",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter &mdash; Quiet &amp; Atmospheric",
                  d: "2&ndash;10&deg;C. Few tourists, clear skies, and the Setsubun Mantoro lantern festival in early February. The deer gather in larger groups for warmth and are more docile. Occasional light snow on the temple rooftops creates a scene that feels centuries old.",
                  b: "Fewest crowds",
                  c: "bg-green-50 border-green-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: `${s.s} &mdash; ${s.t}` }} />
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#128646; Getting to Nara</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Nara has two main stations &mdash; <strong className="font-medium">Kintetsu Nara</strong> (500m from the park, more convenient) and <strong className="font-medium">JR Nara</strong> (1.5km from the park, covered by JR Pass). Use the Kintetsu line unless you&apos;re committed to using a JR Rail Pass.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "Kintetsu from Osaka Namba (recommended)",
                  d: "Kintetsu Namba Line: 35 minutes, &yen;680. Direct limited express to Kintetsu Nara Station, which deposits you 500 metres from the entrance to Nara Park. The fastest, cheapest, and most convenient route. Trains run every 10&ndash;15 minutes throughout the day.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚆",
                  t: "Kintetsu from Kyoto",
                  d: "Kintetsu Kyoto Line: 45 minutes, &yen;720. Direct from Kintetsu Kyoto Station (inside JR Kyoto Station building, B1 level) to Kintetsu Nara. Slightly faster than JR and drops you closer to Nara Park. Limited express trains with reserved seats available for an additional &yen;520.",
                  b: "Most popular",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚃",
                  t: "JR from Kyoto (covered by JR Pass)",
                  d: "JR Nara Line: 45 minutes, &yen;720. Covered by the Japan Rail Pass if you hold one. However, JR Nara Station is a 20-minute walk farther from Nara Park than Kintetsu Nara. Only use this if you have a JR Pass and want to save the Kintetsu fare.",
                  b: "JR Pass holders",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From Kansai International Airport (KIX)",
                  d: "Take the Nankai or JR Haruka to Osaka/Kyoto, then transfer to the Kintetsu line. Total journey approximately 90 minutes to Nara. Alternatively, an airport limousine bus runs directly to JR Nara Station (&yen;2,100, 85 minutes) &mdash; but service is limited.",
                  b: "From airport",
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
                      <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.d }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">&#128197; 2-Day Nara Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary assumes you arrive from Kyoto or Osaka on Day 1 and stay at least one night in Nara &mdash; the dawn deer meadows on Day 2 alone justify the overnight.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Todai-ji &middot; Nara Park &middot; Kofuku-ji &middot; Kasuga-taisha &middot; Naramachi"
                cost="&yen;4,500&ndash;&yen;7,000"
                items={[
                  "8:30am &mdash; Arrive at Kintetsu Nara Station from Kyoto (45 min, &yen;720) or Osaka Namba (35 min, &yen;680). Store luggage in coin lockers at the station (&yen;400&ndash;&yen;600). Walk east along Sanjo-dori shopping street toward the park.",
                  "9:00am &mdash; Enter Nara Park. Buy a packet of shika senbei (deer crackers, &yen;200) from the vendors at the park entrance. Hold them up so the deer can see them &mdash; the deer will bow to you reflexively. This is not a trained trick: Nara&apos;s deer learned this behaviour over centuries of watching humans bow to each other. Feed them quickly once you show the crackers &mdash; they headbutt and bite if you tease.",
                  "9:45am &mdash; Todai-ji Temple (&yen;600). Pass through the Nandaimon Gate where two 8-metre Nio guardian statues (carved by Unkei and Kaikei in 1203) stand on either side. The Great Buddha Hall (Daibutsuden) is the world&apos;s largest wooden building. Inside, the Vairocana Buddha sits 15 metres high, weighing 500 tonnes. Note the wooden pillar near the back with a hole at its base &mdash; legend holds that those who crawl through it are guaranteed enlightenment. The hole is the same size as the Buddha&apos;s nostril.",
                  "11:30am &mdash; Wander the deer meadows east of Todai-ji. The deer here are calmer than those near the food vendors. Hundreds graze in the open grassland below the treeline &mdash; this is one of the most peaceful scenes in all of Japan.",
                  "12:30pm &mdash; Lunch along Higashimuki arcade near Kintetsu station. Try kakinoha-zushi (persimmon-leaf-wrapped sushi, Nara&apos;s signature dish, &yen;800&ndash;&yen;1,200 for a set) or warabi mochi (bracken-starch jelly rolled in kinako flour, &yen;400).",
                  "1:30pm &mdash; Kofuku-ji Temple (grounds free; National Treasure Museum &yen;700). The 5-storey pagoda (50 metres) is the second-tallest in Japan and appears in every Nara photograph. The museum holds extraordinary 8th-century Buddhist sculptures including the dry-lacquer Ashura figure &mdash; considered one of the finest sculptures in Japan.",
                  "3:00pm &mdash; Kasuga-taisha Shrine (outer precincts free; inner sanctum &yen;500). The vermilion-lacquered corridors are lined with 2,000 hanging bronze lanterns. The outer approach path passes 1,000 moss-covered stone lanterns beneath an ancient cedar canopy. All 3,000 lanterns are lit twice a year during Mantoro festivals in February and August.",
                  "4:30pm &mdash; Walk south through Naramachi, the preserved Edo-period merchant quarter. Narrow machiya townhouses with hanging migawari-saru charm bags line the lanes. Several small free museums occupy restored buildings. Stop for coffee in a converted machiya.",
                  "6:00pm &mdash; Check in to your accommodation. Budget: Guesthouse Nara Backpackers (&yen;2,800&ndash;&yen;4,500/night). Mid-range: Dormy Inn Nara or Hotel Fujita Nara (&yen;8,000&ndash;&yen;14,000). Evening dinner at an izakaya near the station: yakitori set (&yen;800&ndash;&yen;1,200), beer (&yen;500). Nara is quiet at night &mdash; by 9pm the park streets are empty.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Dawn Deer Meadows &middot; Kasugayama Forest &middot; Yoshikien &middot; Isuien &middot; Shin-Yakushi-ji"
                cost="&yen;3,500&ndash;&yen;6,000"
                items={[
                  "6:30am &mdash; Nara Park at dawn. Before any tour groups arrive, several hundred deer gather in the meadows east of Todai-ji. The morning mist, the silhouetted deer against the treeline, and the first light catching the pagoda above the cedars &mdash; this is Nara&apos;s most photogenic moment and the single best reason to stay overnight.",
                  "7:30am &mdash; Walk east into Kasugayama Primeval Forest (free). This ancient forest on the slopes behind Kasuga-taisha is one of the few lowland primary forests remaining in Japan &mdash; untouched for 1,300 years because it is sacred. Walking trails wind through enormous cryptomeria cedars. Almost no tourists come this early.",
                  "9:00am &mdash; Kasuga-taisha morning visit. The shrine priests perform morning purification rituals around 8:30am, which quiet observers can watch from a respectful distance. The morning light filtering through the cedar canopy onto the stone-lantern corridor creates an atmosphere unlike anywhere else in Japan.",
                  "10:30am &mdash; Yoshikien Garden (&yen;250, or FREE for foreign passport holders &mdash; show your passport at the gate). Three distinct sections: a pond garden, a moss garden, and an iris garden. The moss garden in spring is extraordinary. Rarely crowded &mdash; one of Nara&apos;s most underrated spots.",
                  "11:30am &mdash; Isuien Garden (&yen;1,200). One of Japan&apos;s finest traditional stroll gardens, combining two Edo and Meiji-era sections with borrowed scenery (shakkei) of Todai-ji&apos;s rooftop and Mount Wakakusa. The garden teahouse serves matcha and wagashi with the borrowed view (&yen;700&ndash;&yen;900).",
                  "1:00pm &mdash; Lunch in Naramachi: miwa somen (thin noodles in clear broth, &yen;900) or a traditional Yamato cuisine set (&yen;1,500&ndash;&yen;2,500) featuring persimmon vinegar salad, sesame tofu, and local mountain vegetables.",
                  "2:30pm &mdash; Shin-Yakushi-ji Temple (&yen;600). Often overlooked, this 8th-century temple retains its original Nara-period interior with remarkable clay warrior statues (juni-shinsho) surrounding the central Yakushi Nyorai figure. More intimate than Todai-ji and often nearly empty.",
                  "4:00pm &mdash; Final walk through the deer park as tour groups depart. The deer become calm and settled in late afternoon &mdash; the most peaceful time to sit among them. If time allows, climb Mt. Wakakusa (&yen;150, 30 min) for panoramic views over Nara.",
                  "5:30pm &mdash; Train back to Kyoto (&yen;720, 45 min) or Osaka (&yen;680, 35 min). Or stay a second night and repeat the dawn meadows tomorrow morning.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nara" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#9961;&#65039; Nara Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. Most temples and gardens are cash-only.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Todai-ji Temple (Great Buddha Hall)",
                  e: "&yen;600",
                  d: "The world&apos;s largest wooden building housing a 15-metre, 500-tonne bronze Vairocana Buddha cast in 752 AD. The Nandaimon Gate&apos;s guardian statues are among Japan&apos;s finest wooden sculptures. Allow 60&ndash;90 minutes. Arrive before 9:30am to avoid crowds.",
                  t: "Must see &middot; 1&ndash;1.5 hrs",
                },
                {
                  n: "Kasuga-taisha Shrine",
                  e: "&yen;500 (inner sanctum)",
                  d: "Founded in 768 AD with 3,000 stone and bronze lanterns. The vermilion corridors lined with hanging lanterns are extraordinary at any hour. All lanterns are lit during Mantoro festivals in February and August. The outer precincts and stone-lantern approach are free.",
                  t: "Must see &middot; 1&ndash;1.5 hrs",
                },
                {
                  n: "Nara Park &amp; Deer",
                  e: "Free (shika senbei &yen;200)",
                  d: "660 hectares of open parkland with 1,200 wild sika deer. The deer bow for crackers, are active throughout the day, and gather in large groups at dawn. Buy crackers from official vendors only. The park connects all major sites.",
                  t: "Must see &middot; Throughout",
                },
                {
                  n: "Kofuku-ji Temple",
                  e: "&yen;700 (museum)",
                  d: "The 5-storey pagoda (50m, second-tallest in Japan) is visible from across the city. The National Treasure Museum holds the iconic dry-lacquer Ashura figure and other masterpieces of 8th-century Buddhist sculpture. Temple grounds are free.",
                  t: "Must see &middot; 1 hr",
                },
                {
                  n: "Isuien Garden",
                  e: "&yen;1,200",
                  d: "One of Japan&apos;s best traditional stroll gardens. Two connected gardens (Edo and Meiji-era) using shakkei (borrowed scenery) of Todai-ji&apos;s roof and Mount Wakakusa. The garden teahouse serves matcha overlooking the moss garden.",
                  t: "Highly recommended &middot; 45 min",
                },
                {
                  n: "Yoshikien Garden",
                  e: "FREE for foreigners (&yen;250 locals)",
                  d: "Three-section garden with pond, moss, and iris areas. Show your foreign passport at the gate for free entry. Less formal than Isuien, the moss section is genuinely extraordinary. Almost never crowded.",
                  t: "Hidden gem &middot; 30&ndash;45 min",
                },
                {
                  n: "Kasugayama Primeval Forest",
                  e: "Free",
                  d: "One of the few lowland primary forests in Japan &mdash; sacred and untouched for 1,300 years. Walking trails through enormous cedars and cryptomeria on the slopes behind Kasuga-taisha. Best experienced before 8am when no other visitors are present.",
                  t: "Underrated &middot; 1&ndash;2 hrs",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: place.n }} />
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full" dangerouslySetInnerHTML={{ __html: place.e }} />
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200" dangerouslySetInnerHTML={{ __html: place.t }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: place.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Nara &mdash; Deer, Temples &amp; Ancient Gardens"
            subtitle="Japan&apos;s first capital and its 1,200 sacred deer."
            spots={[
              {
                name: "Todai-ji Great Buddha Hall",
                query: "todaiji temple great buddha hall nara japan wooden building",
                desc: "The world&apos;s largest wooden building containing the 15-metre bronze Vairocana Buddha &mdash; cast in 752 AD.",
              },
              {
                name: "Nara Park Deer at Dawn",
                query: "nara park deer dawn morning mist japan sacred sika",
                desc: "Hundreds of deer gathering in the morning mist below Todai-ji &mdash; Nara&apos;s most photogenic moment.",
              },
              {
                name: "Kasuga-taisha Stone Lanterns",
                query: "kasuga taisha shrine stone lanterns nara japan moss vermilion",
                desc: "The moss-covered stone lanterns lining the approach to Kasuga-taisha through the ancient cedar forest.",
              },
              {
                name: "Isuien Garden Borrowed Scenery",
                query: "isuien garden nara japan pond traditional stroll borrowed scenery",
                desc: "Isuien Garden&apos;s famous shakkei view &mdash; Todai-ji&apos;s rooftop and Mount Wakakusa appear as part of the garden.",
              },
              {
                name: "Kofuku-ji Five-Storey Pagoda",
                query: "kofukuji five storey pagoda nara japan sarusawa pond reflection",
                desc: "The 50-metre pagoda of Kofuku-ji &mdash; the second-tallest in Japan, visible above the rooftops at every turn.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#128176; Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nara is significantly cheaper than Kyoto or Tokyo. Temple entry fees are the main expense. Many of Nara&apos;s best experiences &mdash; the deer park, Kasugayama Forest, Yoshikien Garden (for foreigners) &mdash; are free.
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
                    ["🏨 Accommodation/night", "&yen;2,500&ndash;&yen;4,500", "&yen;8,000&ndash;&yen;14,000", "&yen;25,000&ndash;&yen;80,000"],
                    ["🍽 Food/day", "&yen;1,500&ndash;&yen;3,000", "&yen;4,000&ndash;&yen;8,000", "&yen;8,000&ndash;&yen;20,000"],
                    ["🚆 Transport (round trip)", "&yen;700&ndash;&yen;1,500", "&yen;1,000&ndash;&yen;2,500", "&yen;2,000&ndash;&yen;12,000"],
                    ["⛩️ Activities/day", "&yen;1,300&ndash;&yen;2,800", "&yen;2,000&ndash;&yen;4,500", "&yen;5,000&ndash;&yen;25,000"],
                    ["TOTAL (per day)", "&yen;6,000&ndash;&yen;11,800", "&yen;15,000&ndash;&yen;29,000", "&yen;40,000&ndash;&yen;137,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium" dangerouslySetInnerHTML={{ __html: cat }} />
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center" dangerouslySetInnerHTML={{ __html: v }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">&#128154; Budget (&yen;6,000&ndash;&yen;12,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Guesthouse Nara Backpackers or Nara Guest House (&yen;2,500&ndash;&yen;4,500/night), eat at Higashimuki arcade food stalls and local izakaya. Walk everywhere &mdash; Nara is compact. Temple entries total roughly &yen;2,500 for all major sites.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">&#127775; Mid-Range (&yen;15,000&ndash;&yen;29,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Dormy Inn Nara or Hotel Fujita Nara (&yen;8,000&ndash;&yen;14,000/night). Enjoy kaiseki-style lunches in Naramachi, matcha at Isuien&apos;s teahouse, and a sake brewery visit. The sweet spot for comfort.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">&#128142; Luxury (&yen;40,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at the historic Nara Hotel (1909, from &yen;25,000) or Kikusui Ryokan with kaiseki dinner. Private cultural guide (&yen;15,000&ndash;&yen;25,000/day), tea ceremony at Isuien, and multi-course Yamato kaiseki dinners.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#127976; Where to Stay in Nara</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most visitors stay near Kintetsu Nara Station or within walking distance of Nara Park. Staying overnight is strongly recommended &mdash; the dawn deer meadows and evening silence completely change the experience.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Nara Hotel",
                  type: "Historic luxury &middot; Est. 1909 &middot; Edge of Nara Park",
                  price: "From &yen;25,000/night",
                  badge: "Most historic",
                  desc: "A grand Meiji-era hotel overlooking the park, built in 1909 and frequented by royalty and heads of state. The architecture blends Western and Japanese styles. Wake up to deer grazing on the hotel lawns. The dining room serves exceptional Western and Japanese cuisine.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Dormy Inn Nara Natural Hot Spring",
                  type: "Mid-range chain &middot; Near Kintetsu Nara",
                  price: "From &yen;8,000/night",
                  badge: "Best value mid-range",
                  desc: "Clean, reliable, with an onsen (natural hot spring bath) on the top floor &mdash; rare for a city hotel in Nara. Free late-night ramen for guests. 5-minute walk to the park entrance. Breakfast buffet included. The onsen alone justifies the price after a day walking temples.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Guesthouse Nara Backpackers",
                  type: "Budget hostel &middot; Naramachi area",
                  price: "From &yen;2,800/night",
                  badge: "Best budget",
                  desc: "Well-run hostel in a converted machiya townhouse in the Naramachi district. Dormitory and private rooms available. Shared kitchen, common area, and the kind of hostel where you meet people and plan together. 15-minute walk to Todai-ji.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Kikusui Ryokan",
                  type: "Traditional ryokan &middot; Near Nara Park",
                  price: "From &yen;35,000/night (incl. dinner &amp; breakfast)",
                  badge: "Most authentic",
                  desc: "A Michelin-recommended traditional Japanese inn with tatami rooms, futon bedding, and a multi-course kaiseki dinner served in-room. The garden courtyard is beautiful. Full Japanese breakfast included. The quintessential Nara luxury experience.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: stay.type }} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60" dangerouslySetInnerHTML={{ __html: stay.price }} />
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: stay.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#127869;&#65039; Where to Eat in Nara</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nara&apos;s cuisine reflects its ancient heritage &mdash; Yamato vegetables, persimmon-leaf sushi, bracken-starch mochi, and Buddhist vegetarian dishes developed in the city&apos;s monasteries over 1,300 years. The restaurant scene is quieter than Kyoto&apos;s but genuinely excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kakinoha-zushi Restaurants (Tanaka / Hiraso)",
                  t: "Traditional Nara cuisine &middot; Near Kintetsu station",
                  d: "Nara&apos;s signature dish: mackerel or salmon pressed onto vinegared rice and wrapped in persimmon leaves (kakinoha). Tanaka and Hiraso are the best-known shops, operating for generations. A set of 7&ndash;8 pieces costs &yen;800&ndash;&yen;1,200. Eat them fresh &mdash; the persimmon leaf imparts a subtle aroma that fades within hours.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Naramachi Machiya Restaurants",
                  t: "Traditional Yamato cuisine &middot; Naramachi district",
                  d: "Several small restaurants in restored Edo-period townhouses serve traditional Yamato cuisine: miwa somen noodles, sesame tofu, mountain vegetables, and persimmon vinegar salad. Lunch sets run &yen;1,500&ndash;&yen;3,500. The atmosphere of eating in a centuries-old machiya adds immeasurably.",
                  b: "Atmospheric",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Higashimuki Shopping Arcade",
                  t: "Street food &amp; casual dining &middot; Near station",
                  d: "A covered arcade connecting Kintetsu Nara Station to the park area. Dozens of food options from mochi shops to yakitori stands to ramen. Budget meals &yen;500&ndash;&yen;1,000. Excellent for a quick lunch between temple visits. Try the warabi mochi &mdash; bracken-starch jelly dusted in kinako flour (&yen;300&ndash;&yen;400).",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Shojin Ryori (Buddhist Vegetarian Cuisine)",
                  t: "Temple cuisine &middot; Various locations",
                  d: "Nara&apos;s ancient monasteries developed Japan&apos;s original vegetarian cuisine &mdash; shojin ryori &mdash; over 1,300 years ago. Several restaurants in Naramachi and near the temples serve full multi-course shojin ryori sets (&yen;3,500&ndash;&yen;5,000). Exquisitely prepared seasonal vegetables, tofu preparations, and pickles. This cuisine predates meat-eating in Japan.",
                  b: "Unique to Nara",
                  c: "bg-purple-50 border-purple-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: r.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Nara Japan"
            hotels={[
              {
                name: "Nara Hotel",
                type: "Historic luxury &middot; Est. 1909 &middot; Park views",
                price: "From &yen;25,000/night",
                rating: "5",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/jp/nara.html?aid=2820480",
              },
              {
                name: "Dormy Inn Nara Natural Hot Spring",
                type: "Mid-range &middot; Onsen &middot; Near station",
                price: "From &yen;8,000/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/jp/dormy-inn-nara.html?aid=2820480",
              },
              {
                name: "Hotel Fujita Nara",
                type: "Mid-range &middot; Near Kintetsu Nara",
                price: "From &yen;9,000/night",
                rating: "4",
                badge: "Great location",
                url: "https://www.booking.com/hotel/jp/fujita-nara.html?aid=2820480",
              },
              {
                name: "Guesthouse Nara Backpackers",
                type: "Budget hostel &middot; Naramachi machiya",
                price: "From &yen;2,800/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/jp/guesthouse-nara-backpackers.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Nara Deer Park &amp; Temples Walking Tour",
                duration: "4 hrs",
                price: "From &yen;5,000/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=nara+deer+park+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Nara Private Cultural Guide",
                duration: "6 hrs",
                price: "From &yen;15,000/person",
                badge: "In-depth",
                url: "https://www.getyourguide.com/s/?q=nara+private+guide+cultural+tour&partner_id=PSZA5UI",
              },
              {
                name: "Nara Sake Brewery Tour &amp; Tasting",
                duration: "2 hrs",
                price: "From &yen;3,500/person",
                url: "https://www.getyourguide.com/s/?q=nara+sake+brewery+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kyoto to Nara Day Trip with Guide",
                duration: "8 hrs",
                price: "From &yen;12,000/person",
                url: "https://www.getyourguide.com/s/?q=kyoto+nara+day+trip+guide&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#10060; Mistakes to Avoid in Nara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🦌",
                  title: "Underestimating the Deer",
                  desc: "Nara&apos;s deer are wild animals, not a petting zoo. They headbutt, bite, and chase visitors who show food and don&apos;t deliver immediately. Buy shika senbei from official vendors only (&yen;200/pack), hold them up so the deer can see them, and distribute quickly. Never put food in your bag &mdash; deer will headbutt your bag off your back. This happens dozens of times daily.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⏰",
                  title: "Visiting Only Mid-Morning on a Weekend",
                  desc: "Nara receives 13 million visitors per year, concentrated at Todai-ji between 10am and 3pm on weekends. The fix is simple: arrive before 9am. The park, deer meadows, and temples are dramatically more pleasant in the first 90 minutes of opening. Nara is 35&ndash;45 minutes from Osaka or Kyoto &mdash; you don&apos;t need to align with tourist rush hours.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍵",
                  title: "Treating Nara as a Half-Day Trip",
                  desc: "Most visitors spend a single morning covering Todai-ji and the deer park &mdash; roughly 15% of what Nara contains. Kasuga-taisha&apos;s lantern corridors, Kasugayama Forest, Yoshikien Garden, Isuien, Naramachi, Shin-Yakushi-ji, and the empty evening hours are all better than most things in Kyoto. Spend at least one night.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💴",
                  title: "Not Carrying Enough Cash",
                  desc: "Japan is still substantially a cash economy. Most Nara temples, gardens, food stalls, and small restaurants do not accept cards. Carry &yen;10,000&ndash;&yen;15,000 in cash per day. 7-Eleven and Japan Post ATMs accept foreign cards reliably. Japan is absolutely safe to carry cash &mdash; there is effectively zero pickpocketing.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚆",
                  title: "Using JR Instead of Kintetsu",
                  desc: "JR Nara Station is a 20-minute walk farther from Nara Park than Kintetsu Nara Station. Unless you hold a JR Rail Pass and need to use it, always take the Kintetsu line. From Kyoto or Osaka, Kintetsu is equally fast, similarly priced, and deposits you 500 metres from the park entrance.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#128161; Pro Tips for Nara</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive at 6:30am for the Dawn Deer Meadows",
                  desc: "Before food vendors set up and before the first tour groups arrive from Kyoto, Nara Park&apos;s deer meadows are hauntingly beautiful &mdash; hundreds of deer in the morning mist below Todai-ji&apos;s roofline. This window lasts about 90 minutes and requires staying overnight. It is the single best thing you can do in Nara.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎫",
                  title: "Yoshikien Garden Is Free for Foreigners",
                  desc: "One of Nara&apos;s most beautiful gardens is completely free for foreign passport holders &mdash; show your passport at the gate. Located next to Isuien (&yen;1,200) and often skipped in favour of it. The moss garden section is genuinely extraordinary. Visit both consecutively for the full garden experience.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏮",
                  title: "Check the Lantern Festival Dates",
                  desc: "Kasuga-taisha&apos;s 3,000 lanterns are lit twice yearly: Setsubun Mantoro (early February) and Obon Mantoro (mid-August). Every lantern &mdash; stone, bronze, hanging &mdash; glows amber simultaneously. Hotels book months in advance. If your dates can flex by even one day, aligning with the Mantoro is worth rerouting your entire Kansai trip.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚶",
                  title: "Walk Everywhere &mdash; Nara Is Compact",
                  desc: "Unlike Kyoto, Nara&apos;s main sites are clustered within a 2km radius of Kintetsu Nara Station. You do not need buses, taxis, or bicycles. Todai-ji, Kasuga-taisha, Kofuku-ji, Isuien, Yoshikien, and Naramachi are all connected by pleasant park paths and take 10&ndash;20 minutes to walk between.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📸",
                  title: "Best Photo Spots and Timing",
                  desc: "Dawn deer meadows (6:30&ndash;8am) for mist and deer silhouettes. Kasuga-taisha stone-lantern path (morning light through cedars). Kofuku-ji pagoda reflected in Sarusawa Pond (late afternoon). Isuien Garden borrowed scenery (midday for the full shakkei effect). Naramachi lanes (golden hour).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎌",
                  title: "Learn Three Words of Japanese",
                  desc: "Sumimasen (excuse me), arigatou gozaimasu (thank you very much), and oishii (delicious) will transform your interactions in Nara. The city sees fewer international visitors than Kyoto or Tokyo, and locals genuinely appreciate the effort. A small bow accompanying each word is always returned.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nara" />

          {/* Combine With */}
          <CombineWith currentSlug="nara-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">&#10067; Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Nara worth visiting if I\u2019ve already been to Kyoto?",
                  a: "Absolutely yes \u2014 and not just for the deer. Todai-ji\u2019s Great Buddha is larger than anything in Kyoto. Kasugayama primeval forest is one of the few ancient lowland forests in Japan. Yoshikien and Isuien gardens are among the best in Japan and far less crowded than Kyoto\u2019s equivalents. And the experience of sitting in a silent park at dawn with 300 wild deer is genuinely unlike anything Kyoto offers.",
                },
                {
                  q: "Is Nara a day trip or should I stay overnight?",
                  a: "Nara is usually done as a day trip from Kyoto (45 min) or Osaka (35 min), but spending even one night changes the experience completely. You get the park at dawn before tour groups, the evening silence after they depart, and time to reach Kasugayama Forest, Yoshikien, Shin-Yakushi-ji, and Naramachi \u2014 sites day-trippers almost never see. Budget accommodation starts at \u00a52,800/night.",
                },
                {
                  q: "How do the deer bow? Is it trained?",
                  a: "The bowing is real and spontaneous, not trained. Nara\u2019s sika deer have been fed by humans for over 1,000 years and developed a soliciting bow by watching humans bow to each other. When you hold up shika senbei (\u00a5200 from park vendors), the deer bow in anticipation. If you bow first, many bow back. This is a documented ethological phenomenon studied in academic literature.",
                },
                {
                  q: "What is the best time of year to visit Nara?",
                  a: "Spring (late March to early April) for cherry blossoms \u2014 the combination of sakura and deer is extraordinary. October and November for autumn colours (koyo) in Kasugayama Forest and around the temples. Winter has the Setsubun Mantoro lantern festival in February and far fewer tourists. Avoid Golden Week (late April to early May) and Obon (mid-August) if you dislike extreme crowds.",
                },
                {
                  q: "How do I get to Nara from Kyoto or Osaka?",
                  a: "From Kyoto: Kintetsu Kyoto Line, 45 minutes, \u00a5720 to Kintetsu Nara Station (500m from the park). From Osaka Namba: Kintetsu Namba Line, 35 minutes, \u00a5680. JR also runs from both cities (covered by JR Pass) but JR Nara Station is a 20-minute walk farther from the park. Use Kintetsu unless you have a JR Pass.",
                },
                {
                  q: "How many days do you need in Nara?",
                  a: "Two days is ideal for the complete Nara experience \u2014 covering Todai-ji, Kasuga-taisha, Kofuku-ji, both gardens, Naramachi, Kasugayama Forest, Shin-Yakushi-ji, and the essential dawn deer meadows. One full day is the absolute minimum for the major sites. A half-day (the most common visit) covers Todai-ji and the deer park only \u2014 about 15% of what Nara offers.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nara trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/nara-2-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/nara-2-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/nara-2-days/packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/kyoto-4-days", label: "Kyoto 4-day guide", icon: "⛩️" },
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
          <RelatedGuides currentSlug="nara-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Japan &amp; Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kyoto in 4 Days &mdash; Temples &amp; Gardens", href: "/blog/kyoto-4-days" },
                { label: "Osaka in 3 Days &mdash; Street Food Capital", href: "/blog/osaka-3-days" },
                { label: "Tokyo in 5 Days &mdash; Modern &amp; Traditional", href: "/blog/tokyo-5-days" },
                { label: "Hiroshima in 2 Days &mdash; Peace &amp; Miyajima", href: "/blog/hiroshima-2-days" },
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
                  <span className="text-xs text-muted">Read &rarr;</span>
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
