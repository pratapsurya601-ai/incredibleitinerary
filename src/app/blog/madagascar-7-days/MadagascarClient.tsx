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
const MADAGASCAR_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Madagascar Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",   emoji: "🗺️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Madagascar 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Madagascar in 7 Days — lemurs, baobabs, tsingy and pristine beaches&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/madagascar-7-days"
        imageUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
        description="Madagascar in 7 Days: Avenue of the Baobabs, Andasibe lemurs, Tsingy de Bemaraha, Nosy Be beaches — complete travel guide with budget breakdown."
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
export default function MadagascarClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MADAGASCAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Madagascar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="madagascar avenue baobabs sunset ancient trees africa unique wildlife"
            fallback="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
            alt="Madagascar Avenue of the Baobabs ancient trees at sunset unique Africa"
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
              <span className="text-white/70">Madagascar 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Madagascar in 7 Days:
                <em className="italic text-amber-300"> Lemurs, Baobabs, Tsingy &amp; Beaches</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                90% of wildlife exists nowhere else on Earth. The complete guide to the Avenue of the Baobabs, Andasibe indri lemurs, Tsingy de Bemaraha, and Nosy Be&apos;s turquoise water — every budget.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🌍 Madagascar, Africa</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Madagascar is evolution&apos;s experiment on its own — a landmass that broke off from Africa 165 million years ago and went its own way. The result: ring-tailed lemurs dancing across red laterite soil, 800-year-old baobabs that look like upturned roots against a Mozambique Channel sunset, and tsingy limestone karst so sharp it cuts through hiking boots. Nowhere prepares you for it.
            </p>
          </blockquote>

          {/* ── WHAT MADAGASCAR ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Madagascar Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Madagascar is the world&apos;s fourth-largest island and its most biodiverse per square kilometre. When it separated from Gondwana roughly 88 million years ago, the animals and plants left behind evolved in total isolation — which is why 90% of Madagascar&apos;s wildlife is endemic, found literally nowhere else on Earth. There are over 100 species of lemur alone. The panther chameleon grows to the length of your forearm and can shift from brown to electric green in seconds. The elephant bird, which stood three metres tall and laid eggs ten times the size of an ostrich&apos;s, went extinct here in the 17th century — its fossils are in the Musée de la Paléontologie in Antananarivo.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The island divides broadly into distinct ecological zones. The east coast is wet tropical rainforest — this is where the indri lemur and the golden bamboo lemur live. The west and south are dry deciduous forest and spiny desert, where the iconic baobabs stand and the fossa (Madagascar&apos;s apex predator) hunts. The northwest has the Tsingy de Bemaraha — a UNESCO World Heritage Site of razor-sharp limestone pinnacles that form the most surreal landscape on the island. The northwest coast and offshore islands, especially Nosy Be, are tropical Indian Ocean paradise: white sand, sea turtles, whale sharks in season.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The honest reality of travelling Madagascar is that the country is large (roughly the size of France), the roads are mostly terrible, and the logistics require planning. A 7-day trip covering everything would mean spending most of your time in transit. The approach that works: pick 2–3 regions, fly domestically between them with Air Madagascar (expensive but worth it versus days on the road), and slow down to actually experience each place rather than rushing through every park on the island.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="TNR Ivato" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Nov" />
              <StatCard icon="🦎" label="Endemic Species" value="90%+" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Madagascar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Early Dry Season — Best Overall",
                  d: "The rains have stopped, roads are passable, and the landscape is lush from the wet season. Temperatures are comfortable (18–28°C in the highlands). Ring-tailed lemur mating season is April–June — spectacular behaviour. Crowds are thin. The ideal window for most travellers to Madagascar.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Sep",
                  i: "🐋",
                  t: "Peak Dry Season — Whale Watching",
                  d: "Humpback whales migrate through the Mozambique Channel July–September — visible from Nosy Be and Île Sainte-Marie on the east coast. Dry, clear weather across the island. Slightly busier at parks, but still uncrowded by international standards. Excellent for Tsingy and Isalo.",
                  b: "Whale season",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌸",
                  t: "Late Dry Season — Good Value",
                  d: "Hot and dry (28–34°C on the coasts), but still excellent for wildlife. Aye-ayes become more active October–December. Fewer tourists than mid-dry season. Some parks at their most photogenic as rains approach and dust settles. Good for budget travellers who want dry conditions at lower prices.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🌀",
                  t: "Cyclone Season — Avoid Coasts",
                  d: "The wet season brings heavy rains, flooded roads, and occasional tropical cyclones that can be severe on the east coast. Many parks temporarily close. If visiting Dec–Mar, stick to Antananarivo and the central plateau. The wet season has its own beauty — waterfalls, empty forests, and lush greenery — but planning is difficult.",
                  b: "Avoid coasts",
                  c: "bg-orange-50 border-orange-200",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Madagascar</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> All international flights arrive at <strong className="font-medium">Ivato International Airport (TNR)</strong> in Antananarivo. Visa on arrival is available for most nationalities ($35 USD for 30 days). Bring USD cash — the on-arrival fee must be paid in US dollars.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From Europe (recommended)",
                  d: "Air France flies Paris CDG → Antananarivo direct (10.5 hrs). Kenya Airways connects via Nairobi. Ethiopian Airlines via Addis Ababa. Turkish Airlines via Istanbul. Typical fares: €400–€900 return. Air Madagascar also operates some international routes seasonally.",
                  b: "Most connections",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Africa (Nairobi, Johannesburg, Addis)",
                  d: "Kenya Airways and Ethiopian Airlines are the main carriers connecting East Africa and Southern Africa to Antananarivo. From Johannesburg: 3–4 hrs. From Nairobi: 3 hrs direct. From Addis Ababa: 4 hrs. Good options for combining Madagascar with a safari.",
                  b: "Via Africa",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Domestic Flights (Air Madagascar)",
                  d: "Air Madagascar operates domestic flights connecting Antananarivo to Nosy Be (NOB), Morondava (MOQ), Toamasina (TMM), Toliara (TLE), and Mahajanga (MJN). Fares: $60–$150 one-way. Book at least 2 weeks ahead — seats sell out in peak season. Domestic flying saves days of terrible road travel and is almost always worth it.",
                  b: "Essential for 7 days",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Taxi-Brousse (Bush Taxi)",
                  d: "For short regional legs, the taxi-brousse (shared minibus or 4WD) is the local transport. Dirt cheap ($2–$15) but very slow — Madagascar&apos;s roads are some of the world&apos;s worst. The 600km from Tana to Morondava takes 14–18 hours by road. Use for short hops only; fly for anything over 200km.",
                  b: "Short distances only",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Madagascar Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Antananarivo, Andasibe (indri lemurs), Morondava (Avenue of the Baobabs and Kirindy forest), and Nosy Be (island beaches). Domestic flights are used between major regions — essential to avoid days of road travel.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Antananarivo Arrival — Haute-Ville, Rova &amp; Sakamanga"
                cost="$60–$130 (accommodation $20–$80, food $15–$30, transport $10–$20)"
                items={[
                  "Fly into Ivato International Airport (TNR). Visa on arrival: $35 USD cash, queue moves in 20–40 minutes. Exchange some USD to Malagasy Ariary (MGA) at the airport bureau — you&apos;ll get a better rate at banks in town but the airport desk is fine for the first day&apos;s spending money.",
                  "Taxi from the airport to Antananarivo city centre (Antananarivo, known as Tana): MGA 50,000–80,000 (~$12–18). Agree the fare before getting in. The 12km drive takes 20–40 minutes depending on traffic.",
                  "Check into accommodation in Haute-Ville (upper town): budget guesthouses from $15/night near the market, or the Palissandre Hôtel & Spa (a design boutique with rooftop views, from $90/night) for mid-range. Both are walkable to the main sights.",
                  "Afternoon: walk the steep cobbled streets of Haute-Ville — Tana&apos;s old town is built on a series of hills at 1,400m altitude, and the views across the city&apos;s red-brick architecture and rice paddies are genuinely beautiful. Visit the Queen&apos;s Palace (Rova d&apos;Antananarivo) ruins on the highest hill — free to view from outside, MGA 15,000 to enter the grounds.",
                  "Visit the Musée de la Paléontologie in Tsimbazaza — elephant bird eggs, subfossil giant lemur skulls, and a full-size Aepyornis (elephant bird) skeleton. Madagascar produces some of the most extraordinary palaeontological finds in Africa. Entry ~MGA 10,000.",
                  "Dinner at Sakamanga restaurant in Isoraka — Tana&apos;s most famous restaurant, a converted colonial house with great Malagasy cuisine: romazava (beef and greens stew), ravitoto (cassava leaves with pork), and zebu brochettes. Budget ~$15–25 for dinner.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Antananarivo → Andasibe — Indri Lemurs in the Rainforest"
                cost="$60–$180 (transport $4–$45, guide+park $30–$55, accommodation $18–$55, food $8–$30)"
                items={[
                  "Early morning departure east towards Andasibe-Mantadia National Park. Budget option: take a taxi-brousse (shared bush taxi) from the Fasan&apos;ny Karana terminal (~$4, 3 hrs). Mid-range: hire a private car or minivan ($45). The road east is one of Madagascar&apos;s best — paved and reasonably fast.",
                  "Arrive Andasibe village by mid-morning. Check into accommodation: budget guesthouses in the village from $18/night; Andasibe Hotel or Vakôna Forest Lodge from $55–$150/night with rainforest setting and private lemur island.",
                  "Enter Andasibe-Mantadia National Park with a mandatory ANGAP-certified guide. Entry: MGA 55,000 (~$12). Guide fee: MGA 55,000–90,000 ($12–$20). The guides know where individual indri families are roosting — without them, finding indri is nearly impossible.",
                  "The indri — the largest living lemur — is the reason most people come to Andasibe. Its call is extraordinary: a haunting, operatic wail that carries 3km through the forest. The call sounds like something between a whale song and a foghorn. You&apos;ll hear it before you see them. Approach slowly — indri are territorial but unbothered by quiet observers.",
                  "Also in Andasibe: brown lemurs, black-and-white ruffed lemurs, Parson&apos;s chameleons (the world&apos;s largest), and dozens of endemic frog species. The park is also exceptional for orchids — over 50 endemic species.",
                  "Evening: guided night walk in the village reserve (~$10) to find mouse lemurs (the world&apos;s smallest primate), woolly lemurs, and tenrecs by torch. Dinner at your guesthouse: rice, zebu meat, and local vegetables.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Andasibe Full Day — Mitsinjo Reserve, Night Walk &amp; Orchid Trail"
                cost="$45–$120 (reserves $18–$30, night walk $10–$20, accommodation $18–$55, food $10–$25)"
                items={[
                  "Morning walk in Mitsinjo Community Reserve, directly beside the national park. Entry: MGA 35,000 (~$8). This community-managed reserve is cheaper than the main park and often better for chameleons — Parson&apos;s and short-horned chameleons are seen here daily. Proceeds go directly to the village conservation fund.",
                  "Visit the private IUCN-supported orchid greenhouse near the park entrance — over 50 species of endemic Malagasy orchid cultivated for research and reintroduction. Small entry fee. A quiet gem that most visitors miss.",
                  "Afternoon: rest at your guesthouse or walk the rice terraces outside the village. Andasibe sits in a valley of terraced paddies — the landscape is quietly beautiful and very different from the park interior. Buy street snacks from roadside stalls: mofo baolina (fried dough balls), sugarcane, and fresh passion fruit.",
                  "4pm: return to the national park for a second guided walk — different trails see different lemur groups. Late afternoon light on the indri is exceptional for photography.",
                  "8pm: second guided night walk for aye-ayes if in season (Oct–Dec) or mouse lemurs and chameleons sleeping on leaves year-round. The aye-aye — Madagascar&apos;s most extraordinary lemur, with its skeletal middle finger for extracting grubs from bark — is one of the hardest animals on Earth to observe. Andasibe is one of the best places to try.",
                  "Dinner back at guesthouse. Zebu meat (Madagascar&apos;s staple protein — the zebu is the sacred cattle of the island) rice, and the local vegetable broth known as laoka. Total for the day keeps low if you eat at the guesthouse kitchen.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Fly/Drive to Morondava — Avenue of the Baobabs at Sunset"
                cost="$80–$160 (transport $60–$90, accommodation $20–$80, activities $5–$20, food $15–$30)"
                items={[
                  "Morning taxi-brousse or shared ride back to Antananarivo (3 hrs, $4). Catch your pre-booked domestic Air Madagascar flight to Morondava airport (MOQ) — approximately $60–$90 one-way. Book this at least 2 weeks ahead, especially in peak season (Jul–Sep). The flight takes 1.5 hrs versus 14–18 hrs by road.",
                  "Morondava is a small coastal town on the Mozambique Channel, the base for the Avenue of the Baobabs. Check into accommodation: budget auberges from $20/night near the beach; Le Palissandre Côte Ouest from $80/night with garden and pool.",
                  "Afternoon: rent a bicycle ($3) or take a zebu cart ride ($5) along the red laterite road 24km north towards Belo sur Tsiribihina to the Avenue of the Baobabs (Allée des Baobabs). The avenue is not a park — it is a public road lined on both sides with approximately 25 ancient Adansonia grandidieri trees, some 800 years old, 25–30 metres tall, with no branches except at the crown.",
                  "Arrive 45 minutes before sunset. The trees glow amber and gold as the light drops. The silhouette of the baobabs against the orange sky is exactly as extraordinary as every photograph you&apos;ve seen — and more so in person because of the scale. Entry is free. A small community donation of MGA 2,000 is customary.",
                  "Wait for the full sunset — the last 10 minutes as the sun touches the horizon are the best. Then turn around: the colours on the opposite side can be equally extraordinary if the eastern sky is catching light.",
                  "Dinner at Chez Maggie, a popular beach shack in Morondava: grilled fresh fish, coconut rice, and cold THB (Three Horses Beer — Madagascar&apos;s national lager). $7–$12.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Kirindy Forest Reserve — The Fossa &amp; Baobabs at Dawn"
                cost="$50–$120 (transport $15–$30, Kirindy $25–$40, accommodation $20–$80, food $10–$20)"
                items={[
                  "5:30am: return to the Avenue of the Baobabs at dawn before other visitors arrive. Sunrise is quieter than sunset, the light comes from the east (different from sunset), and the atmosphere is completely different — mist sometimes sits low in the field between the trees. This is the shot most photographers actually prefer.",
                  "8am: drive 60km north to Kirindy Forest Reserve — a dry deciduous forest reserve 2 hours north of Morondava by 4WD track. Entry: MGA 45,000 (~$10). Guide fee: MGA 65,000 (~$15). A 4WD is essential — the track is impassable after rain.",
                  "Kirindy is the best place in Madagascar to find the fossa (Cryptoprocta ferox) — Madagascar&apos;s apex predator and largest carnivore. The fossa is a mongoose relative that looks like a small puma: russet-coloured, low to the ground, extraordinarily agile. It hunts lemurs. There is nothing else on Earth quite like it. Kirindy guides know the fossa&apos;s regular patrol routes.",
                  "Also in Kirindy: giant jumping rats (the world&apos;s largest nocturnal rodent, hopping like a miniature kangaroo), banded mongooses, Coquerel&apos;s giant coua, and seven species of lemur including Verreaux&apos;s sifaka (the dancing lemur — it moves across open ground with sideways leaps that look like choreography).",
                  "Return to Morondava by mid-afternoon. Final walk along the Mozambique Channel beach — watch local pirogue (outrigger canoe) fishermen returning with the morning catch. The beach at Morondava is wide, flat, and very quiet by international coastal standards.",
                  "Evening: last dinner in Morondava. Pack and prepare for the morning flight to Nosy Be.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Fly to Nosy Be — Snorkelling, Ylang-Ylang &amp; Island Life"
                cost="$100–$250 (flight $80–$120, accommodation $25–$150, boat $15–$45, food $20–$45)"
                items={[
                  "Morning Air Madagascar flight from Morondava to Nosy Be (NOB) — usually routed via Antananarivo, total travel time 3–4 hrs including connection. Alternatively fly Morondava → Tana → Nosy Be. Book the full routing at once. Fare: ~$80–$120.",
                  "Nosy Be (&apos;Big Island&apos; in Malagasy) is Madagascar&apos;s main tourist island: heavily forested with ylang-ylang and vanilla plantations, ringed with white-sand beaches, and surrounded by a marine environment of exceptional quality. It is called the &apos;perfume island&apos; — the ylang-ylang flower is distilled here for the global perfume industry.",
                  "Check into accommodation in Ambatoloaka (the main tourist beach) or Hell-Ville (the main town): budget bungalows from $25/night; mid-range beach resorts from $80/night with pool and breakfast.",
                  "Afternoon: arrange a boat to Nosy Tanikely Marine Reserve ($15 boat transfer + MGA 20,000 entry) — a small island 10km south of Nosy Be with a protected marine park. Snorkelling in the reserve: sea turtles are virtually guaranteed (hawksbill and green turtles rest on the reef), clownfish in the anemones, parrotfish, and schools of tropical reef fish in exceptional clarity.",
                  "Back in Nosy Be before sunset: visit an ylang-ylang distillery (~$5 guided tour). See how the copper pot stills extract the essential oil — it takes approximately 150kg of flowers to produce 1 litre of ylang-ylang oil. Buy a small bottle direct from the producer for a fraction of the retail price.",
                  "Sunset at a beachside bar in Ambatoloaka with Trois Chevaux beer ($1.50) or a rum sour made with local rhum arrangé (fruit-infused rum — Madagascar does it exceptionally well). Dinner: fresh prawns and zebu brochettes at a beachside grill ($12–$20).",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Nosy Komba Lemurs, Coral, &amp; Farewell"
                cost="$50–$130 (boat trips $20–$60, food $15–$25, souvenirs $20–$40, transfer $10–$20)"
                items={[
                  "Morning boat trip to Nosy Komba — &apos;lemur island&apos;, 20 minutes south of Nosy Be by motorboat ($20 day trip return). Nosy Komba has a village and a semi-wild population of black lemurs (Eulemur macaco) that have been habituated to humans for generations. They climb onto your arms and sit on your shoulder for a banana. Nothing about this is arranged wildlife — they come and go freely from the surrounding forest.",
                  "Snorkel off Nosy Sakatia or Nosy Iranja (the twin-island sandbar, accessible at low tide) if timing allows. Nosy Iranja is 50km south of Nosy Be and requires a dedicated day trip ($45–$80 all-in) but offers the most spectacular scenery in the archipelago: two islands connected by a white sand causeway that disappears at high tide, sea turtle nesting beach, and superb snorkelling.",
                  "July–September: whale watching from Nosy Be. Humpback whales migrate through the Mozambique Channel during these months — visible from shore and on dedicated 2-hour boat trips ($30–$50). Some years also bring whale sharks to the Nosy Be reef.",
                  "Afternoon: souvenir shopping in Hell-Ville market or Ambatoloaka. Must-buy items: genuine Madagascan vanilla pods (1kg for MGA 85,000, ~$20 at source, versus $150+ abroad — bring a vacuum-seal bag), ylang-ylang and patchouli essential oils direct from distilleries, handwoven raffia baskets, and zebu leather goods.",
                  "Evening flight back to Antananarivo (TNR) for your international connection. If your international flight departs the following morning, overnight in Tana at a hotel near the airport. The Ibis Antananarivo Airport is reliable, $55–$70, and 5 minutes from the terminal.",
                  "Final tip: at Ivato airport departure hall, pick up Malagasy silk scarves and hand-painted zebu leather wallets from the artisan shops. They are genuinely good quality and not overpriced. The vanilla pods available airside are also real, though at a slight premium over the market.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Madagascar" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Madagascar Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Entry fees in MGA and approximate USD equivalents as of early 2026. Park entry fees are set by Madagascar National Parks (MNP) and are per person per 24-hour period.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Avenue of the Baobabs (Allée des Baobabs)",
                  e: "Free (community donation MGA 2,000 customary)",
                  d: "Twenty-five ancient Adansonia grandidieri baobabs lining a public road 24km north of Morondava. Some are estimated at 800+ years old. The silhouette at sunset is the most photographed image in Madagascar. Come for both sunset and sunrise — the light is different and sunrise is less crowded. No formal park structure — the road is open day and night.",
                  t: "Must see · Sunset + Sunrise",
                },
                {
                  n: "Andasibe-Mantadia National Park",
                  e: "MGA 55,000 (~$12) + guide fee MGA 55,000–90,000",
                  d: "The best place in Madagascar to hear and observe the indri lemur — the largest living lemur, with one of the most extraordinary vocalisations in the animal kingdom. Also excellent for chameleons, orchids, and nocturnal species on night walks. 140km east of Antananarivo; paved road, 3 hrs.",
                  t: "Must see · Full day",
                },
                {
                  n: "Tsingy de Bemaraha (UNESCO World Heritage)",
                  e: "MGA 55,000 (~$12) + guide MGA 90,000–150,000",
                  d: "The Grand Tsingy is a landscape of razor-sharp limestone pinnacles (tsingy means &apos;where one cannot walk barefoot&apos; in Malagasy). The Grande Tsingy circuit involves suspension bridges and iron ladders through a labyrinth of karst formations. Located in the northwest, accessible from Morondava or Mahajanga — requires 4WD and advance planning. One of the most extraordinary landscapes on Earth.",
                  t: "Extraordinary · 2 days minimum",
                },
                {
                  n: "Ranomafana National Park",
                  e: "MGA 55,000 (~$12) + guide MGA 65,000–150,000",
                  d: "Eastern rainforest park, 5 hours south of Antananarivo. Home to the golden bamboo lemur (discovered here in 1986) and the critically endangered greater bamboo lemur. Also: red-fronted brown lemur, white-fronted brown lemur, and extraordinary birdlife. Hot spring thermal pools just outside the park entrance for post-trek soaking ($3).",
                  t: "Wildlife · Full day",
                },
                {
                  n: "Isalo National Park",
                  e: "MGA 55,000 (~$12) + guide MGA 90,000",
                  d: "Sandstone canyon landscape in the southwest — natural swimming pools (Piscine Naturelle Bleue and Noire), waterfalls, canyon slots, and ring-tailed lemurs sunbathing on warm rocks. The Isalo massif at sunset is dramatic. Stay at Relais de la Reine Isalo — one of Madagascar&apos;s finest lodges, built into the canyon.",
                  t: "Scenic · Full day",
                },
                {
                  n: "Nosy Be Marine Reserve (Nosy Tanikely)",
                  e: "MGA 20,000 (~$5) + boat hire $15",
                  d: "The small island of Nosy Tanikely, 10km south of Nosy Be, has one of Madagascar&apos;s best snorkelling environments — sea turtles are reliably present on the reef, alongside hundreds of species of reef fish. The lighthouse summit gives panoramic views of the Nosy Be archipelago. Half-day trip from Nosy Be.",
                  t: "Snorkelling · Half day",
                },
                {
                  n: "Kirindy Forest Reserve",
                  e: "MGA 45,000 (~$10) + guide MGA 65,000",
                  d: "Dry deciduous forest north of Morondava, the best location in Madagascar for fossa observation. Verreaux&apos;s sifaka, giant jumping rat, banded mongooses, and seven lemur species. The fossa is most active in November (breeding season) but present year-round. Requires 4WD to reach.",
                  t: "Rare wildlife · Full day",
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
            title="Madagascar — Baobabs, Lemurs &amp; the Indian Ocean"
            subtitle="The world&apos;s most biodiverse island per square kilometre."
            spots={[
              {
                name: "Avenue of the Baobabs at Sunset",
                query: "avenue baobabs madagascar sunset morondava ancient trees africa",
                desc: "The 800-year-old Adansonia grandidieri baobabs lining a red laterite road near Morondava — the most iconic image in Madagascar.",
              },
              {
                name: "Indri Lemur in the Rainforest",
                query: "indri lemur andasibe madagascar rainforest endemic wildlife",
                desc: "The indri — the largest living lemur — in the Andasibe-Mantadia rainforest. Its call carries 3km through the canopy.",
              },
              {
                name: "Tsingy de Bemaraha Karst",
                query: "tsingy de bemaraha limestone karst madagascar unesco pinnacles",
                desc: "The Grand Tsingy — razor-sharp limestone pinnacles in Madagascar&apos;s most extraordinary UNESCO landscape.",
              },
              {
                name: "Nosy Be Beach &amp; Marine Life",
                query: "nosy be madagascar beach sea turtle snorkelling island",
                desc: "The turquoise waters of the Nosy Be archipelago, home to hawksbill sea turtles, whale sharks, and pristine coral reefs.",
              },
              {
                name: "Ring-Tailed Lemur, Isalo",
                query: "ring tailed lemur madagascar isalo national park sandstone",
                desc: "Ring-tailed lemurs sunbathing on the sandstone rocks of Isalo National Park — one of Madagascar&apos;s most photographed wildlife encounters.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Madagascar&apos;s biggest variable costs are domestic flights (worth every dollar) and park fees (add up quickly if visiting multiple parks). Accommodation and food are cheap by international standards — the real spend is getting between regions.
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
                    ["🏨 Accommodation (per night)", "$15–25", "$55–80", "$150–400"],
                    ["🍽️ Food (per day)", "$8–15", "$25–40", "$70–120"],
                    ["✈️ Domestic flights (per leg)", "$60–80", "$80–120", "$150–300 (charter)"],
                    ["🚌 Ground transport (per day)", "$5–15", "$30–60", "$60–120"],
                    ["🌿 Park fees (per day)", "$12–25", "$25–55", "$55–120 (private guide)"],
                    ["TOTAL (per person per day)", "$80–95", "$145–240", "$360–920"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–95/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses, hotelys (local canteens with rice + laoka for $2–3), taxi-brousse between points, ANGAP guides at standard rate. Requires flexibility and tolerance for slow travel. Completely doable and very rewarding.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($145–240/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star lodges and beach bungalows, restaurant meals, private car hire for some legs, Air Madagascar domestic flights. The sweet spot for most travellers who want comfort without the luxury price tag.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($360+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Private island resorts (Miavana, Anjajavy), private guides and vehicles, specialist naturalist experiences. Madagascar has genuinely world-class luxury lodges, particularly on Nosy Be and in Isalo.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Madagascar</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Madagascar&apos;s accommodation ranges from $15 village guesthouses to $1,000+/night private islands. The best lodges are in Nosy Be and Isalo. In Antananarivo and the national park areas, mid-range lodges offer good value.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Palissandre Hôtel & Spa, Antananarivo",
                  type: "Boutique hotel · Haute-Ville, Antananarivo",
                  price: "From $90/night",
                  badge: "Best in Tana",
                  desc: "A design hotel in a restored colonial building in Tana&apos;s upper town. Rooftop pool, spa, excellent Malagasy restaurant. The benchmark for mid-range accommodation in Antananarivo. Well-located for walking to the Rova and the museum.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Relais de la Reine, Isalo",
                  type: "Canyon lodge · Ranohira, Isalo National Park",
                  price: "From $150/night",
                  badge: "Most scenic lodge",
                  desc: "Built into the sandstone canyon of Isalo, with a natural rock swimming pool, sunset terrace, and ring-tailed lemurs visiting the garden. One of the finest lodge settings in Madagascar. Book directly for best rates and guided park walks from the property.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Vakôna Forest Lodge, Andasibe",
                  type: "Rainforest lodge · Andasibe-Mantadia",
                  price: "From $100/night",
                  badge: "Best for lemurs",
                  desc: "Set in the forest at the edge of the national park, with a private lemur island where several lemur species roam free. Pool, restaurant, guided walks from the property. The best base for multiple days of lemur spotting in Andasibe.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Anjajavy Private Reserve, Northwest",
                  type: "Private island resort · Northwest coast",
                  price: "From $300/night",
                  badge: "Most exclusive",
                  desc: "A private 175-hectare dry forest reserve on the northwest coast, accessible only by charter flight. 25 villas on the beach, private snorkelling, guided lemur and bird walks in the forest reserve. One of Africa&apos;s great wildlife lodges.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Budget Guesthouses, Nosy Be (Ambatoloaka)",
                  type: "Budget bungalows · Ambatoloaka beach, Nosy Be",
                  price: "From $25/night",
                  badge: "Best budget island",
                  desc: "Ambatoloaka has dozens of bungalow operations from $25–60/night with varying quality. Ask to see the room before committing. Most include breakfast. The area has good beach access, restaurants within walking distance, and boat-trip operators on the beach.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Madagascar</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Malagasy cuisine centres on rice (vary) eaten three times a day, zebu meat (the sacred cattle of Madagascar), fresh seafood on the coasts, and a range of laoka (side dishes). Eating at local hotelys (canteens) costs $2–3 for a full meal. Restaurant meals in tourist areas run $8–25.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sakamanga Restaurant, Antananarivo",
                  t: "Malagasy fine dining · Isoraka district, Tana",
                  d: "The most famous restaurant in Antananarivo — a converted colonial house in the Isoraka district with a courtyard, craft shop, and guesthouse attached. The menu spans authentic Malagasy cuisine (romazava, ravitoto, zebu tenderloin) and international dishes. Warm, atmospheric, and genuinely excellent food. Budget $15–25 for dinner including drinks.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Chez Maggie, Morondava",
                  t: "Beach shack seafood · Morondava waterfront",
                  d: "A simple, open-air beach restaurant on the Morondava waterfront. Grilled fresh fish (the daily catch from pirogue boats), coconut rice, and ice-cold THB beer. The kind of place you eat at every day when based in Morondava. Cheap ($6–12), casual, and the fish is excellent.",
                  b: "Best beach dining",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "La Plantation, Nosy Be",
                  t: "Seafood restaurant · Hell-Ville area, Nosy Be",
                  d: "One of Nosy Be&apos;s best restaurants: octopus salad, grilled Malagasy lobster, and homemade rum arrangé infusions (vanilla, lemongrass, ginger). Excellent wine list for Madagascar. A splurge dinner ($35–50/person) that is well worth it after a week of budget eating.",
                  b: "Best in Nosy Be",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Local Hotelys (anywhere)",
                  t: "Canteen dining · Nationwide",
                  d: "The hotely is Madagascar&apos;s equivalent of a canteen: a simple room serving rice, laoka (meat or fish in sauce), and broth for MGA 3,000–8,000 ($0.70–$2). Eaten at breakfast, lunch, and dinner by most Malagasy people. Quality varies but the best ones are excellent. Always ask what&apos;s available today rather than ordering from a menu — there often isn&apos;t one.",
                  b: "Most authentic",
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
            destination="Madagascar"
            hotels={[
              {
                name: "Palissandre Hôtel & Spa",
                type: "Boutique hotel · Antananarivo",
                price: "From $90/night",
                rating: "4",
                badge: "Best in Tana",
                url: "https://www.booking.com/hotel/mg/palissandre.html?aid=2820480",
              },
              {
                name: "Relais de la Reine",
                type: "Canyon lodge · Isalo National Park",
                price: "From $150/night",
                rating: "5",
                badge: "Most scenic",
                url: "https://www.booking.com/hotel/mg/relais-de-la-reine.html?aid=2820480",
              },
              {
                name: "Vakôna Forest Lodge",
                type: "Rainforest lodge · Andasibe",
                price: "From $100/night",
                rating: "4",
                badge: "Best for lemurs",
                url: "https://www.booking.com/hotel/mg/vakona-forest-lodge.html?aid=2820480",
              },
              {
                name: "Nosy Be Beach Bungalows",
                type: "Beach resort · Ambatoloaka, Nosy Be",
                price: "From $40/night",
                rating: "3",
                badge: "Best value island",
                url: "https://www.booking.com/searchresults.html?dest_id=900040476&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Andasibe Lemur Guided Walk",
                duration: "Half day",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=andasibe+lemur+madagascar&partner_id=PSZA5UI",
              },
              {
                name: "Avenue of the Baobabs Sunset Tour",
                duration: "3 hrs",
                price: "From $20/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=avenue+baobabs+madagascar+sunset&partner_id=PSZA5UI",
              },
              {
                name: "Nosy Be Snorkelling & Sea Turtles",
                duration: "Half day",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=nosy+be+snorkelling+sea+turtle&partner_id=PSZA5UI",
              },
              {
                name: "Tsingy de Bemaraha Guided Trek",
                duration: "Full day",
                price: "From $50/person",
                url: "https://www.getyourguide.com/s/?q=tsingy+de+bemaraha+madagascar&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Madagascar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚌",
                  title: "Underestimating Road Travel Times",
                  desc: "Madagascar&apos;s roads are some of the world&apos;s worst. The 600km from Tana to Morondava takes 14–18 hours by road. Always fly domestically where possible ($60–120 one-way). Use taxi-brousse for short regional hops only. Without flights, a 7-day itinerary is impossible.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "💊",
                  title: "Skipping Malaria Prophylaxis",
                  desc: "Malaria is present year-round in Madagascar, especially on the coast and in Nosy Be. Start prophylaxis (doxycycline or Malarone) before departure as directed by a travel health clinic. Also get hepatitis A and typhoid vaccinations. Carry DEET spray — mosquito exposure is constant in the forests.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "📅",
                  title: "Visiting During Cyclone Season (Dec–Mar)",
                  desc: "The wet season brings tropical cyclones, flooded roads, and temporarily closed parks. April–November is the dry season and the correct window for most travellers. If visiting Dec–Mar, stick to Antananarivo and the central plateau highlands and avoid the east and west coasts.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "💵",
                  title: "Not Bringing Enough USD Cash",
                  desc: "ATMs outside Antananarivo are unreliable and often out of cash. Bring USD in small denominations ($1, $5, $10 bills) and exchange at BNI or BFV banks in Tana on arrival. Cards are only accepted at upscale hotels. MGA currency is not convertible abroad — use it all before you leave.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🗺️",
                  title: "Trying to See Everything in 7 Days",
                  desc: "Madagascar is the size of France. The baobabs (west), tsingy (far northwest), rainforest (east), Isalo canyons (southwest), and Nosy Be (northwest) cannot all be seen overland in 7 days. Pick 2–3 regions and fly between them. Depth is better than breadth here.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🦟",
                  title: "Underestimating the Insects",
                  desc: "In the rainforest and on the coast, mosquitoes are constant. Bring high-percentage DEET (40%+), long-sleeve shirts for evening, and a treated mosquito net if staying in budget guesthouses. Leeches are common in the wet season in eastern parks — tuck trousers into socks on forest trails.",
                  color: "border-yellow-200 bg-yellow-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Madagascar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌿",
                  title: "Always Hire a Specialist Naturalist Guide",
                  desc: "Park guides are mandatory, but the best guides are ANGAP-certified naturalists who know individual lemur families, their territories, and their behaviour. Tip generously ($10–20 extra). A great guide finds an indri family in 20 minutes; without one, you could spend the whole day listening and looking and finding nothing.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍦",
                  title: "Buy Vanilla at Source in Nosy Be",
                  desc: "Madagascar produces 80% of the world&apos;s vanilla supply. In Nosy Be or the SAVA vanilla-growing region, Grade A bourbon vanilla pods cost MGA 85,000–100,000/kg (~$20–25) direct from producers. The same kilogram sells for $150+ in Western supermarkets. Bring a vacuum-seal bag and buy as much as your luggage allows.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📸",
                  title: "Avenue of the Baobabs: Go at Sunrise Too",
                  desc: "Sunset at the Avenue of the Baobabs is spectacular but crowded. Sunrise has fewer visitors, different directional light, and sometimes mist sitting in the field between the trees — visually more interesting for photography. Stay overnight in Morondava and catch both. The full moon rising behind the baobabs in the right months is extraordinary.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🗣️",
                  title: "Learn a Few Words of Malagasy",
                  desc: "'Misaotra' (thank you), 'Salama' (hello), 'Tsara be' (very good) — a few words of Malagasy open extraordinary warmth. Outside Antananarivo, English is rare. French is the second language and widely understood in tourist areas. Carry a phrasebook or download a Malagasy phrase app before you go.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚗",
                  title: "Book Domestic Flights Weeks Ahead",
                  desc: "Air Madagascar is the only reliable domestic carrier. Seats on popular routes (Tana–Nosy Be, Tana–Morondava) sell out 2–4 weeks ahead in peak season (Jul–Sep). Book online immediately after confirming your international flights. Delays are common — build buffer time into your itinerary around domestic connections.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🦎",
                  title: "Evening Wildlife is as Good as Daytime",
                  desc: "Madagascar has a disproportionate number of nocturnal species — mouse lemurs, aye-ayes, chameleons, tenrecs, and extraordinary spiders. A guided night walk ($10–20) in any forest reserve is almost always excellent. In Andasibe especially, the night walk often produces more individual wildlife sightings than the daytime walk.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Madagascar" />

          {/* Combine With */}
          <CombineWith currentSlug="madagascar-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Madagascar safe for tourists?",
                  a: "Madagascar is generally safe in the main national parks and tourist areas. Petty theft occurs in Antananarivo — avoid walking alone at night in the capital, use hotel-arranged airport transfers, and keep valuables secured. The national parks and coastal resorts are very safe. Political instability occurs occasionally but rarely affects tourists. Travel insurance with medical evacuation cover is strongly recommended.",
                },
                {
                  q: "Do I need a guide in Madagascar&apos;s national parks?",
                  a: "Yes — local guides are mandatory in all Madagascar national parks managed by Madagascar National Parks (MNP). ANGAP-certified guides must accompany all visitors. This is not just a formality: finding wildlife without a local expert is nearly impossible. The best guides know individual indri families and their territories, where the fossa patrols, and the specific trees where chameleons sleep. Guides charge MGA 55,000–150,000 per trip.",
                },
                {
                  q: "What is the best time to see lemurs in Madagascar?",
                  a: "Lemurs are visible year-round in the national parks. April–October (dry season) is best for most parks — trails are passable and animals are active. Indri in Andasibe are active year-round. Mouse lemurs are easier to spot during the dry season when they venture out more frequently. The ring-tailed lemur mating season is April–June — dramatic behaviour is common at Isalo and Berenty. Aye-ayes are more active October–December.",
                },
                {
                  q: "Can I visit Madagascar on a budget of $80/day?",
                  a: "$80/day is achievable if you use taxi-brousse for transport, stay in local guesthouses, eat at hotelys ($2–3 per meal), and book guides through the parks directly. The biggest costs are domestic flights (worth it to save days of road travel) and park fees ($12–25 each). A 7-day trip including domestic flights within Madagascar can be done for $500–600 total land costs, not including international flights.",
                },
                {
                  q: "Do I need a visa for Madagascar?",
                  a: "Most nationalities including Indian, US, UK, EU, and Australian passport holders can get a visa on arrival at Antananarivo Ivato Airport (TNR) for $35 USD (30-day stay). An e-visa is also available online at madagascar-evisa.com for $35–$85 depending on duration (30 or 60 days). Bring USD cash for on-arrival payment — card payment is not available. The process takes 20–40 minutes.",
                },
                {
                  q: "What currency should I bring to Madagascar?",
                  a: "The Malagasy Ariary (MGA) is the local currency. US dollars are the best foreign currency to bring — they are widely accepted for larger payments (park fees, hotel bills, domestic flights) and exchange easily at BNI and BFV banks in Antananarivo. Bring $1, $5, and $10 bills for small exchanges. ATMs outside the capital are unreliable and often empty. Cards are accepted only at upscale hotels in Tana and Nosy Be. Budget for all expenses in cash.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Madagascar trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-madagascar", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/madagascar-budget-travel", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/madagascar-visa-guide", label: "Visa & entry guide", icon: "📋" },
                { href: "/blog/madagascar-wildlife-guide", label: "Wildlife guide", icon: "🦎" },
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
          <RelatedGuides currentSlug="madagascar-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; Indian Ocean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Zanzibar in 7 Days — Spice Island", href: "/blog/zanzibar-7-days" },
                { label: "Kenya Safari 7 Days — Masai Mara", href: "/blog/kenya-safari-7-days" },
                { label: "South Africa 10 Days — Cape to Kruger", href: "/blog/south-africa-10-days" },
                { label: "Ethiopia 7 Days — Lalibela &amp; Simien", href: "/blog/ethiopia-7-days" },
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
