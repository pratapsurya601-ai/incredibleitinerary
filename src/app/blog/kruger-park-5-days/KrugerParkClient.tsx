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
const KRUGER_TOC = [
  { id: "honest",      emoji: "🦁",  label: "What Kruger Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "🐆",  label: "Landmark & Camp Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏕️", label: "Where to Stay" },
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
          href: `mailto:?subject=Kruger Park 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Kruger National Park in 5 Days — Big Five, self-drive safari and the Panorama Route&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kruger-park-5-days"
        imageUrl="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"
        description="Kruger National Park in 5 Days: Big Five self-drive safari, best camps, Sabi Sands, and the Panorama Route — complete guide from $120/day."
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
export default function KrugerParkClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KRUGER_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kruger National Park" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kruger national park south africa big five lion elephant safari"
            fallback="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
            alt="Kruger National Park South Africa lion pride sunset safari game drive"
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
              <span className="text-white/70">Kruger Park 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa&apos;s Greatest Safari
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kruger National Park in 5 Days:
                <em className="italic text-amber-300"> Big Five, Self-Drive Safari &amp; the Panorama Route</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                20,000 sq km of wilderness where a leopard walks across your bonnet and a lioness carries her cub past your window at dawn. Africa&apos;s original safari park — and still its greatest.
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
              <span>🦁 Limpopo, South Africa</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $120/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kruger is the best self-drive safari on earth — you park on a tar road at dawn, cut the engine, and a pride of twelve lions crosses 10 metres in front of you. No ranger. No script. Just you and the animals and 20,000 square kilometres of bush that couldn&apos;t care less you&apos;re there.
            </p>
          </blockquote>

          {/* ── WHAT KRUGER ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🦁 What Kruger Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kruger National Park is the oldest and largest national park in South Africa — 19,485 square kilometres of savanna, thornveld, and mopane woodland straddling Limpopo and Mpumalanga provinces. It shares an unfenced border with Mozambique&apos;s Limpopo National Park and Zimbabwe&apos;s Gonarezhou, forming the Great Limpopo Transfrontier Park, one of the largest wildlife conservation areas in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The park was proclaimed by President Paul Kruger in 1898 and opened to the public as a motor game reserve in 1926 — making it the pioneer of the self-drive safari concept that now defines African wildlife tourism. Today it hosts an estimated 147 mammal species, 507 bird species, 114 reptile species, and the full Big Five: lion, leopard, elephant, Cape buffalo, and white rhinoceros.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What makes Kruger uniquely accessible is its infrastructure. Tar roads connect the main camps, there are no dangerous river crossings without bridges, GPS works throughout, and the SANParks (South African National Parks) rest camps offer a range of accommodation from basic huts to air-conditioned chalets — all inside the park fence. You genuinely do not need a guide. You drive yourself, at your own pace, and find your own lion. When you do — and you will — it is completely unforgettable.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="MQP / HDS" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🦁" label="Mammal Species" value="147+" />
              <StatCard icon="💰" label="Budget From" value="$120/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kruger</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Dry Season — Best for Wildlife",
                  d: "The definitive safari season. Vegetation is stripped bare, animals concentrate at permanent waterholes, and morning temperatures are cool (8–18°C). Lion sightings from the road are at their most frequent. June–August is peak, booked months in advance. The park gates open at 5:30am and the golden hour drive is extraordinary.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌸",
                  t: "Spring — Good & Less Crowded",
                  d: "Temperatures rise (22–34°C), the first rains arrive in November, and the bush begins to green. Animal sightings are still excellent, particularly elephant. Newborn impala and other prey species fill the plains — which keeps predators active. Fewer visitors than peak dry season, meaning shorter queues at popular waterholes.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌧️",
                  t: "Wet Season — Lush but Harder",
                  d: "The green season transforms the landscape into thick bush — beautiful to look at, but animals are spread across large areas and visibility through dense vegetation is limited. Malaria risk is higher. Birdwatching peaks as migratory species arrive. Accommodation is significantly cheaper. The park is much quieter.",
                  b: "For birders / budget",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌿",
                  t: "Late Wet / Shoulder — Mixed",
                  d: "Still lush and warm (25–35°C). Animals begin moving back toward waterholes as the rains taper. Good for predators that have had a season of easy hunting among the newborns. April specifically is underrated — the rains end, temperatures drop, and sightings improve rapidly. Conservation fee is ZAR 412/person/day year-round.",
                  b: "Underrated",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kruger</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> There are two airports serving Kruger. <strong className="font-medium">Kruger Mpumalanga International Airport (MQP / KMIA)</strong> near Nelspruit/Mbombela is closest to the southern gates (Numbi, Paul Kruger, Phabeni). <strong className="font-medium">Hoedspruit (HDS)</strong> serves the central/northern camps and private reserves including Sabi Sands. Flying from Johannesburg (O.R. Tambo) takes about 1 hour to either.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly Johannesburg → KMIA / Hoedspruit (recommended)",
                  d: "O.R. Tambo International (JNB) has multiple daily flights to KMIA (~1 hr, from $70 one-way) and Hoedspruit (HDS, ~1 hr, from $90). Collect a hire car at the airport — Toyota Corolla from $35/day, no 4WD needed on Kruger&apos;s tar roads. From KMIA to Paul Kruger Gate: 45 minutes. From Hoedspruit to Orpen Gate: 35 minutes.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Self-Drive from Johannesburg (budget option)",
                  d: "JNB to Numbi Gate via the N4 highway: approximately 470km, 5–5.5 hours. The N4 is well-maintained and straightforward. Petrol stations are available en route and at Komatipoort near the southern border gate. Driving yourself from Joburg is the most flexible budget option — you arrive at the gate on your own schedule.",
                  b: "Budget / flexible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus to Nelspruit + local transfer",
                  d: "Intercape and Greyhound run daily coaches from Johannesburg to Nelspruit (Mbombela), roughly 5 hours and from ZAR 280. From Nelspruit, hire a car or take a shuttle to your gate. This is viable for budget travellers who can manage without a hire car — some camps are walkable from the gate, though very limited without transport inside the park.",
                  b: "Budget",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚁",
                  t: "Private charter or lodge transfer (luxury)",
                  d: "Most private lodges in Sabi Sands and the northern reserves (Singita, Lion Sands, Londolozi) arrange lodge-to-lodge charter flights from Johannesburg or Cape Town directly to bush airstrips — typically 1.5–2 hrs and included in the lodge package or from $300 supplement. The most seamless option for luxury travellers.",
                  b: "Luxury / seamless",
                  c: "bg-purple-50 border-purple-200",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Kruger Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary follows the classic southern-to-central Kruger route — maximising lion and leopard country. The conservation fee (ZAR 412/day for foreign adults) is paid per person per day at the gate and is non-negotiable.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Paul Kruger Gate · Skukuza Rest Camp · Sabie River Sundowner"
                cost="$115 — park entry ZAR 412 ($22) + hut ZAR 650 ($35) + fuel $20 + food $25 + hire car $35"
                items={[
                  "Fly into KMIA (Nelspruit) or drive from Johannesburg via the N4. Collect your hire car — a Toyota Corolla or Fortuner is sufficient for all of Kruger&apos;s tar roads. No 4WD required unless you plan extensive gravel loops.",
                  "Enter via Paul Kruger Gate or Numbi Gate — the two main southern entrances, closest to Skukuza. Pay the daily conservation fee (ZAR 412/adult/day for foreigners) at the gate. Get your SANParks day map from the gate kiosk — free and essential.",
                  "Afternoon game drive on the H1-1 between Paul Kruger Gate and Skukuza: elephants, impala, wildebeest and zebra are almost guaranteed within the first 30 minutes. Drive at 20–30km/h and stop at every waterhole.",
                  "Check into Skukuza Rest Camp (from ZAR 650/$35/night for a 2-bed hut; ZAR 1,100/$60 for an air-conditioned chalet). Skukuza is the largest camp in Kruger — restaurant, shop, petrol station, and wi-fi. Book via sanparks.org, up to 11 months in advance.",
                  "Sundowner on the camp&apos;s restaurant deck overlooking the Sabie River. Hippos grunt below and occasionally surface. Order a Windhoek lager and a boerewors roll (ZAR 80) and watch the river turn orange. This is Kruger at its most accessible and it&apos;s extraordinary.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Skukuza → Lower Sabie — Leopard Road &amp; Elephant River Crossings"
                cost="$110 — fuel $15 + hut $35 + food $20 + park fee included day 1 + guided sunset drive ZAR 400 ($22)"
                items={[
                  "Gate opens 5:30am (May–Sep). Be in your car by 5:15am. Drive the H4-1 from Skukuza towards Lower Sabie — this 40km tar road along the Sabie River is the single best leopard road in all of Kruger. Drive slowly. Scan every tree along the riverbank.",
                  "Nkhulu picnic site (H4-1 km 23): cheetah are sometimes spotted in the open thornveld east of the picnic site in the early morning. Stop and scan for 10 minutes. The same area produces regular lion sightings near the Mlondozi waterhole just north.",
                  "Lower Sabie waterhole (in front of the camp): elephant herds crossing the Sabie River in single file — often 60 to 80 animals — is one of the most extraordinary wildlife spectacles in Africa. Time your arrival at the waterhole for 7:30–9am and again at 3:30–5pm.",
                  "Lunch at Lower Sabie camp restaurant (ZAR 120–180) on the elevated deck directly above the hippo pools. Hippos surface and spar below while you eat. Pick up a cold picnic pack from the camp shop (ZAR 60) if you prefer to eat in the bush.",
                  "Afternoon: drive the S28 loop — a slow gravel track south of Lower Sabie through mixed thornveld. Lions sleep in the long grass alongside this road in the wet season; in the dry season they use the track itself as a path. Close all windows and drive at walking speed.",
                  "Book a SANParks sunset guided drive from Lower Sabie camp reception (ZAR 400/$22) — open vehicle, ranger with radio contact, departing 3:30pm. Night drives (ZAR 500/$27) are also available and reveal civets, genets, and sometimes leopards hunting.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Lower Sabie → Satara — Lion Capital of Kruger"
                cost="$120 — fuel $15 + chalet $40 + night drive ZAR 500 ($27) + meals $22 + park fee $22"
                items={[
                  "Dawn drive north on H1-2 from Lower Sabie to Satara (84km, 2 hrs with stops). This stretch of open thornveld has the highest lion density of any road in Kruger. Early mornings between July and September often see lions finishing a night&apos;s hunt at the roadside.",
                  "Stop at Tshokwane picnic site (midway) for coffee and a boerewors roll (ZAR 45). The picnic site is popular with vervet monkeys and baboons — keep windows closed. The sightings board here often has morning lion reports from rangers.",
                  "Satara Rest Camp sits in open, flat thornveld — the most lion-dense region in the park. Check in (from ZAR 750/$40 for an air-conditioned chalet). The camp&apos;s sightings board is your single best intelligence source for the afternoon drive. Rangers and self-drivers update it every few hours with precise road names and kilometre markers.",
                  "Afternoon: drive the Satara Lion Triangle — S100 south loop, S41 west, and the H6 north. Lions are visible in the open in the dry season, often resting under a solitary tree within metres of the road. White rhino are frequently seen near the Gudzani waterhole on the S41.",
                  "Night drive from Satara camp (ZAR 500/$27; book at camp reception, maximum 20 people, departing 7pm). The ranger uses a filtered spotlight. Lions hunting, spotted hyenas on the roads, honey badgers, and the occasional civet crossing in the headlights. One of the definitive Kruger experiences.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Satara → Olifants Camp — Cliff Panoramas, Buffalo &amp; White Rhino"
                cost="$110 — fuel $20 + chalet $40 + meals $25 + park fee $22 + sundry $5"
                items={[
                  "Drive north from Satara on H1-4 (62km, 90 mins with stops). Olifants Rest Camp is the most spectacular camp in all of Kruger — perched on a 100-metre sandstone cliff above the Olifants River, with a panoramic terrace view over a wide bend in the river.",
                  "The terrace at Olifants (open to day visitors as well as camp guests, ZAR 50 day entry fee) overlooks an active waterhole and river crossing. Elephant herds, cape buffalo in large aggregations (500+ animals during the dry season), and large crocodile colonies are visible from the cliff throughout the day.",
                  "Morning loop: drive the S90 and S91 roads along the Olifants River. These quiet gravel roads produce white rhino sightings regularly — often solitary bulls or mother-calf pairs grazing the riverine woodland. Large hippo pods are visible from several designated viewing points.",
                  "Birdwatching from the Olifants terrace: African fish eagle calling from the leadwood trees, Goliath heron stalking the shallows, and — for the lucky — Pel&apos;s fishing owl roosting in the sycamore fig trees above the river. The terrace at dawn is exceptional for birders.",
                  "Check into Olifants Rest Camp chalet (ZAR 750/$40/night). The camp has a restaurant, small shop, and petrol. Sunset from the terrace looking west over the river bend is perhaps the most cinematic view in the entire park — bring a sundowner drink and watch it.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Final Dawn Drive → Panorama Route → Blyde River Canyon"
                cost="$100 — fuel $30 + panorama viewpoints $5 + Graskop lunch $20 + accommodation $35 + Harrie&apos;s Pancakes $8"
                items={[
                  "Final 2-hour dawn game drive from Olifants — exit through Phalaborwa Gate (10 minutes north) or drive south to exit via Orpen Gate (45 minutes south). Gate opens at 5:30am; plan to be driving by 5:15am for the last lion chance.",
                  "Drive the Panorama Route — one of South Africa&apos;s great scenic drives (R532 from Hoedspruit/Orpen area). Allow 3 hours for the full loop. Bourke&apos;s Luck Potholes: cylindrical rock potholes carved by swirling water at the confluence of the Blyde and Treur rivers. Entry ZAR 242 per vehicle.",
                  "Blyde River Canyon viewpoints: the Three Rondavels — three massive cylindrical rock formations rising from the canyon floor — are the iconic image of the Panorama Route. God&apos;s Window: stand at 1,800m altitude and look down through clouds to the Lowveld escarpment 1,000 metres below. The scale is hard to process.",
                  "Graskop town: a small forestry town that has become a culinary stop on the Panorama Route. The Graskop Gorge Lift — a glass-sided gondola descending 50m into a lush forested gorge — costs ZAR 280 and takes 25 minutes.",
                  "Dinner at Harrie&apos;s Pancakes in Graskop — a local institution since 1984. Both sweet (caramel, banana, local jams) and savoury (chicken curry, smoked salmon) pancakes at ZAR 90–140. Incredibly popular with South Africans and international visitors alike — arrive before 6pm to avoid a queue.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kruger National Park" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK & CAMP GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🐆 Camp &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important camps and viewing areas in order of priority. Conservation fee (ZAR 412/adult/day for foreign visitors) is payable at entry gates, separate from accommodation costs.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Skukuza Rest Camp",
                  e: "From ZAR 650/night",
                  d: "The largest SANParks camp in Kruger, situated on the Sabie River. Full facilities including restaurant, petrol, ATM, and doctor. The river below the camp terrace produces hippo and crocodile sightings year-round. Best base for southern Kruger — closest to Paul Kruger Gate and the Sabie River leopard roads.",
                  t: "Southern zone · Best base",
                },
                {
                  n: "Lower Sabie Rest Camp",
                  e: "From ZAR 620/night",
                  d: "Smaller and more intimate than Skukuza, sitting above the Sabie River 40km east. The camp&apos;s waterhole produces elephant sightings daily. The H4-1 road between Skukuza and Lower Sabie is the definitive Kruger leopard road. Book 6–8 months in advance for dry season.",
                  t: "Southern zone · Leopard country",
                },
                {
                  n: "Satara Rest Camp",
                  e: "From ZAR 750/night",
                  d: "Set in open thornveld in the central zone, Satara has the highest lion density of any region in Kruger. The camp&apos;s sightings board is updated constantly and is your best tool for finding predators. Night drives from Satara are consistently the best in the park for nocturnal animals.",
                  t: "Central zone · Lion capital",
                },
                {
                  n: "Olifants Rest Camp",
                  e: "From ZAR 750/night",
                  d: "Perched on a 100m sandstone cliff above the Olifants River — the most scenically spectacular camp in Kruger. The open terrace looks over a wide river bend with permanent elephant, buffalo, and crocodile activity. The S90/S91 loops below produce white rhino and hippo sightings reliably.",
                  t: "Central zone · Most scenic",
                },
                {
                  n: "Berg-en-Dal Rest Camp",
                  e: "From ZAR 500/night",
                  d: "Kruger&apos;s southernmost camp, located in rocky mountain bushveld near the Malelane Gate. The region has good rhino and leopard populations. The dam at the camp entrance is productive for white rhino and elephants. Quieter and less visited than Skukuza — a good alternative if Skukuza is full.",
                  t: "Southern zone · Rhino &amp; leopard",
                },
                {
                  n: "Singita Boulders Lodge (Sabi Sands)",
                  e: "From $800/night fully inclusive",
                  d: "One of Africa&apos;s most acclaimed private lodges, set on the Sand River in the Sabi Sands Game Reserve adjoining Kruger&apos;s western border. Off-road tracking is permitted (unlike Kruger). Leopard sightings are near-daily. Maximum 6 vehicles per sighting. Fully inclusive: accommodation, all meals, twice-daily game drives, and conservation fees.",
                  t: "Private reserve · Benchmark luxury",
                },
                {
                  n: "Lion Sands Ivory Lodge (Sabi Sands)",
                  e: "From $900/night fully inclusive",
                  d: "Six-suite private lodge on the Sand River with glass-walled suites overlooking a permanent waterhole — elephants drink 30m from your bed. Private guided game drives in open vehicles, bush walks with an armed ranger, and the famous Chalkley Treehouse — sleep under the stars in an elevated platform in a fever tree. One of South Africa&apos;s iconic safari experiences.",
                  t: "Private reserve · Iconic stay",
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
            title="Kruger National Park — Big Five &amp; the African Bush"
            subtitle="20,000 sq km of savanna where lions cross the road at dawn."
            spots={[
              {
                name: "Sabie River Lion Sighting",
                query: "kruger national park lion pride sabie river south africa safari",
                desc: "A lion pride crossing the Sabie River at dawn — the H4-1 road between Skukuza and Lower Sabie is the definitive Kruger Big Cat road.",
              },
              {
                name: "Elephant Herd at Waterhole",
                query: "kruger national park elephant herd waterhole south africa safari",
                desc: "A breeding herd of 60+ elephants crossing the Sabie River — one of the most extraordinary wildlife spectacles in the park.",
              },
              {
                name: "Leopard in the Tree",
                query: "leopard tree kruger sabi sands south africa safari wildlife",
                desc: "A leopard draped across a marula tree branch — the lower Sabie corridor and Sabi Sands are the best regions for leopard sightings.",
              },
              {
                name: "Olifants River Panorama",
                query: "olifants river camp kruger south africa cliff panorama buffalo",
                desc: "The Olifants Rest Camp cliff terrace — 100 metres above the river with elephant, buffalo, and crocodile visible in the bend below.",
              },
              {
                name: "Blyde River Canyon",
                query: "blyde river canyon three rondavels panorama route south africa",
                desc: "The Three Rondavels rising from the Blyde River Canyon — the iconic image of the Panorama Route, 2 hours from Kruger.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kruger ranges from one of Africa&apos;s most affordable safari destinations (self-drive in SANParks camps) to one of its most expensive (Singita or Londolozi). The conservation fee (ZAR 412/$22/day for foreigners) is unavoidable and charged per person per day inside the park.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget Self-Drive</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Private Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights (JNB → MQP return)", "$140–180", "$140–180", "$200–400 (charter)"],
                    ["🚗 Hire car (5 days)", "$175–250", "$225–300", "Included / $300+"],
                    ["⛽ Fuel (Kruger + Panorama)", "$80–120", "$80–120", "N/A"],
                    ["🎟 Conservation fee (5 days)", "$110 (ZAR 2,060)", "$110", "Included in lodge"],
                    ["🏕 Accommodation (5 nights)", "$175–275 (SANParks)", "$400–600 (lodge)", "$4,000–10,000 (private)"],
                    ["🍽 Food & drink (5 days)", "$75–125", "$175–250", "Included"],
                    ["🦁 Night drives / activities", "$55–80", "$100–180", "Included"],
                    ["TOTAL (per person)", "$815–1,040", "$1,230–1,740", "$4,500–11,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($120–170/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">SANParks rest camps (ZAR 600–900/night), self-cater where possible, self-drive only. Completely viable and genuinely excellent — the self-drive experience is irreplaceable.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">⭐ Mid-Range ($200–310/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Hazyview or Hoedspruit guesthouse (ZAR 1,200–2,000/night), hire car, add one night at Sabi Sands from $180. The best balance of comfort and wildlife quality.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($700–1,500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Singita, Lion Sands, or Londolozi — all inclusive from $800/night. Off-road tracking, dedicated ranger and tracker, private game drives. The benchmark of the African safari experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏕️ Where to Stay in &amp; Around Kruger</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation falls into three categories: SANParks rest camps inside the park (the most immersive, booked via sanparks.org), private lodges just outside the fence (comfortable, mid-range), and the extraordinary private game reserves sharing Kruger&apos;s western boundary — Sabi Sands being the most famous.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Skukuza Rest Camp",
                  type: "SANParks camp · Inside the park · Southern zone",
                  price: "From ZAR 650 ($35)/night",
                  badge: "Best base",
                  desc: "The largest SANParks camp in Kruger, on the Sabie River. Full restaurant, petrol, ATM, and wi-fi. The river view from the terrace produces daily hippo sightings. Huts from ZAR 650, air-conditioned cottages from ZAR 1,100. Book 6–11 months ahead for June–August.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lower Sabie Rest Camp",
                  type: "SANParks camp · Inside the park · Southern zone",
                  price: "From ZAR 620 ($34)/night",
                  badge: "Best for leopard",
                  desc: "Smaller, quieter camp on the Sabie River 40km east of Skukuza. The camp waterhole and adjacent H4-1 road are the best leopard habitat in Kruger. The deck restaurant above the hippo pools is one of the best lunch spots in Africa.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Olifants Rest Camp",
                  type: "SANParks camp · Inside the park · Central zone",
                  price: "From ZAR 750 ($41)/night",
                  badge: "Most scenic",
                  desc: "The jewel of the SANParks camps — 100m above the Olifants River, with panoramic views over a wide bend where elephant, buffalo, and crocodile are visible all day. The sunset from the terrace is genuinely cinematic. Book early for any dry season dates.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  name: "Singita Boulders Lodge",
                  type: "Private luxury · Sabi Sands Game Reserve",
                  price: "From $800/night fully inclusive",
                  badge: "Africa&apos;s best lodge",
                  desc: "Eight suites on the Sand River with private plunge pools and decks overlooking the water. Fully inclusive: gourmet meals, premium drinks, twice-daily game drives in open Land Rovers, a dedicated tracker, and all conservation fees. Leopard sightings are near-daily. One of the world&apos;s definitive safari lodges.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Lion Sands Ivory Lodge",
                  type: "Private luxury · Sabi Sands Game Reserve",
                  price: "From $900/night fully inclusive",
                  badge: "Iconic treehouse",
                  desc: "Six suites on the Sand River, each with glass walls facing a permanent waterhole — elephants drink outside your window. The Chalkley Treehouse (bookable separately, from $400/night) lets you sleep under the stars in an elevated platform in a fever tree. Bush walks, twice-daily drives, and private dining included.",
                  color: "border-rose-200 bg-rose-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium" dangerouslySetInnerHTML={{ __html: stay.badge }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in &amp; Around Kruger</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dining inside Kruger ranges from the surprisingly good SANParks camp restaurants (ZAR 80–180 for a full meal) to the exceptional private lodge dining in Sabi Sands — multi-course boma dinners under the stars. Outside the park, Hazyview and Graskop have proper restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cattle Baron Restaurant, Skukuza",
                  t: "Steakhouse · Skukuza Rest Camp",
                  d: "The best restaurant inside Kruger proper — an outdoor terrace overlooking the Sabie River with a full steakhouse menu. Kruger boerewors (ZAR 95), kudu carpaccio (ZAR 120), and the obligatory Springbok burger (ZAR 140) are the picks. Sundowners here with hippos visible in the river below are a legitimate Kruger highlight. Book ahead in peak season.",
                  b: "Best inside Kruger",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lower Sabie Camp Restaurant",
                  t: "Camp restaurant · Lower Sabie",
                  d: "A simple but well-positioned deck restaurant directly above the hippo pools on the Sabie River. The menu is standard SANParks fare (grills, salads, toasted sandwiches, ZAR 80–160) but the setting is world-class — hippos surface and grunt below while you eat. The best lunch stop on the H4-1 leopard road.",
                  b: "Best setting",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Harrie&apos;s Pancakes, Graskop",
                  t: "Pancakes · Graskop town",
                  d: "A Graskop institution since 1984 — the benchmark pancake restaurant in South Africa. Both sweet (banana, caramel, peach, lemon curd, local jams) and savoury (chicken curry, smoked salmon, mushroom, feta) pancakes at ZAR 90–140. Always busy. The queue is worth it. Go before 6pm.",
                  b: "Local institution",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Saffron Restaurant, Perry&apos;s Bridge (Hazyview)",
                  t: "Fine dining · Hazyview",
                  d: "The best restaurant in the Hazyview area — inside the Perry&apos;s Bridge Trading Post complex. Contemporary South African cuisine: Karoo lamb chops (ZAR 280), wood-fired kingklip (ZAR 320), and a good South African wine list heavy on Stellenbosch and Franschhoek labels. ZAR 200–350 for a full dinner.",
                  b: "Best outside park",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Boma Dinner at Sabi Sands Lodges",
                  t: "Private lodge dining · Sabi Sands",
                  d: "Most private Sabi Sands lodges serve their main dinner as a boma meal — a traditional circular fireside enclosure, with a set menu of three to five courses, South African wine, and the sounds of the bush at night. Singita and Lion Sands both include a dedicated sommelier and a rotating seasonal menu. Fully included in lodge rates.",
                  b: "Once in a lifetime",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Kruger National Park South Africa"
            hotels={[
              {
                name: "Singita Boulders Lodge",
                type: "Private luxury · Sabi Sands · Fully inclusive",
                price: "From $800/night",
                rating: "5",
                badge: "Africa&apos;s finest",
                url: "https://www.booking.com/hotel/za/singita-boulders-lodge.html?aid=2820480",
              },
              {
                name: "Lion Sands Ivory Lodge",
                type: "Private luxury · Sabi Sands · Sleeps under the stars",
                price: "From $900/night",
                rating: "5",
                badge: "Iconic treehouse",
                url: "https://www.booking.com/hotel/za/lion-sands-ivory-lodge.html?aid=2820480",
              },
              {
                name: "Skukuza Rest Camp",
                type: "SANParks camp · Inside Kruger · Best location",
                price: "From ZAR 650/night",
                rating: "4",
                badge: "Best value inside",
                url: "https://www.booking.com/hotel/za/skukuza-rest-camp.html?aid=2820480",
              },
              {
                name: "Olifants Rest Camp",
                type: "SANParks camp · Cliff terrace · River panoramas",
                price: "From ZAR 750/night",
                rating: "4",
                badge: "Most scenic camp",
                url: "https://www.booking.com/hotel/za/olifants-rest-camp.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kruger Big Five Self-Drive Safari — Full Day",
                duration: "10 hrs",
                price: "From $45/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=kruger+national+park+safari&partner_id=PSZA5UI",
              },
              {
                name: "Kruger Night Drive — Nocturnal Wildlife",
                duration: "3 hrs",
                price: "From ZAR 500/person",
                badge: "Essential experience",
                url: "https://www.getyourguide.com/s/?q=kruger+night+drive&partner_id=PSZA5UI",
              },
              {
                name: "Panorama Route Full Day Tour",
                duration: "8 hrs",
                price: "From $55/person",
                badge: "Blyde Canyon",
                url: "https://www.getyourguide.com/s/?q=panorama+route+blyde+river+canyon&partner_id=PSZA5UI",
              },
              {
                name: "Sabi Sands Game Drive — Leopard Country",
                duration: "4 hrs",
                price: "From $120/person",
                badge: "Leopard guaranteed",
                url: "https://www.getyourguide.com/s/?q=sabi+sands+game+drive&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Kruger</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⏰",
                  title: "Missing the Dawn Drive Window",
                  desc: "Kruger gates open at 5:30am (winter) and 4:30am (summer). The golden hour — 5:30 to 8:00am — is the single best time for predator activity. Lions finish their night hunts, cheetah move in the open, and leopards descend from their trees. Arriving at 8am when the sun is high means sleeping lions in deep shade. The dawn drive is not optional.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🚗",
                  title: "Driving at 50km/h Through the Park",
                  desc: "The speed limit is 50km/h on tar roads and 40km/h on gravel. Every experienced self-driver slows to 20km/h on roads with good wildlife habitat, and to walking pace when scanning riverine forest. A leopard 3 metres off the road is invisible at 50km/h. A lion sleeping in the grass alongside the S100 is invisible unless you&apos;re crawling. Slow down or you will drive past everything.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "📅",
                  title: "Not Booking SANParks Camps 6–11 Months Ahead",
                  desc: "SANParks camps open bookings 11 months in advance at sanparks.org. Lower Sabie, Satara, Olifants, and Skukuza sell out for peak season (June–September) within days of the booking window opening. If you&apos;re visiting in dry season, set a calendar reminder and book the morning your 11-month window opens. Last-minute availability does not exist in peak season.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🌧️",
                  title: "Expecting the Same Sightings in Summer",
                  desc: "The wet season (November–March) produces lush, beautiful scenery and near-zero visibility through dense vegetation. Animals are spread across the park, waterholes are everywhere, and you can drive for 2 hours without a single sighting. If you can only travel in summer, go anyway — but manage your expectations and focus on birdwatching and the green landscapes rather than Big Five checks.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🦟",
                  title: "Skipping Malaria Prophylaxis",
                  desc: "Kruger is a malaria-endemic area year-round, with risk higher in the wet season (November–April). Take Malarone (atovaquone/proguanil) or doxycycline — start before you arrive, continue after departure per the prescription. Use DEET 50% repellent at dawn and dusk when mosquitoes are active. This is not optional. Most visitors are fine, but untreated malaria is potentially fatal.",
                  color: "border-yellow-200 bg-yellow-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kruger</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📋",
                  title: "Read the Sightings Board at Every Camp",
                  desc: "Each SANParks camp has a sightings board updated by rangers and self-drivers every few hours. It shows exactly where lions, leopards, cheetah, and wild dog were spotted that morning — with precise road names and kilometre markers. This board is your best navigation tool. Check it when you arrive and when you leave every camp.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💧",
                  title: "Park at Waterholes and Wait",
                  desc: "In the dry season, animals must drink. Park at a permanent waterhole (Gudzani, Mlondozi, the Lower Sabie camp waterhole) at 7am or 4pm and switch off the engine. You will see lion, elephant, rhino, buffalo, and giraffe all come to drink within 45 minutes. The best wildlife photography in Kruger is done from a stationary car at a waterhole.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📻",
                  title: "Follow the Traffic Cluster",
                  desc: "If you see 8–12 cars stationary on a Kruger road, do not drive past. Stop. A cluster of stopped vehicles in Kruger means a predator sighting. Rangers share locations by radio and self-drivers follow. Join the cluster, switch off your engine, and wait. The animal will either move into view or you&apos;ll hear what&apos;s happening from the car in front.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Book a Night Drive — It&apos;s a Different World",
                  desc: "Night drives from Satara or Lower Sabie (ZAR 400–500/$22–27; book at camp reception, 20 people maximum) reveal a completely parallel ecosystem: civets stalking insects, genets hunting in the roadside grass, spotted hyenas with their peculiar lope, and occasionally leopards hunting in the red spotlight beam. One of the best experiences in Africa.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🐆",
                  title: "Do the H4-1 Twice",
                  desc: "The 40km tar road between Skukuza and Lower Sabie along the Sabie River is Kruger&apos;s most productive wildlife road. Drive it eastbound at dawn on Day 2 and westbound on the late afternoon of Day 2 or morning of Day 3. Animals follow a daily routine — the leopards that use this corridor appear at specific trees and waterpoints at predictable times.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎒",
                  title: "Pack Your Own Food for Day Drives",
                  desc: "SANParks picnic sites (Tshokwane, Nkuhlu, Afsaal) are well-maintained and have braai facilities, but some require you to bring your own food. Buy cold drinks, biltong, fruit, and sandwiches from the Spar in Hazyview or Hoedspruit the night before. Eating a packed lunch parked at a waterhole — watching elephants drink 20m away — is one of the best meals you will ever have.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kruger National Park" />

          {/* Combine With */}
          <CombineWith currentSlug="kruger-park-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a guide or can I self-drive Kruger National Park?",
                  a: "You absolutely can self-drive Kruger — it is one of the world&apos;s great self-drive safari destinations. The roads are well-maintained tar and gravel, GPS works throughout, signage is clear, and the rest camps provide all facilities. You remain in your vehicle at all times on self-drives (windows closed in the presence of predators). The advantage of a guide is that rangers know animal routines and have radio contact with colleagues. But many visitors find that finding their own lion on a self-drive — with no one else in the car and complete silence — is an incomparable experience.",
                },
                {
                  q: "What is the difference between Kruger and Sabi Sands?",
                  a: "Kruger National Park is a public park operated by SANParks — self-drive accessible from ZAR 412/day conservation fee plus accommodation. Sabi Sands is an adjacent private game reserve on Kruger&apos;s western boundary, with no fence between them. In Sabi Sands, off-road tracking is permitted (illegal in Kruger), rangers are expert naturalists with a maximum of 8 guests per vehicle, and guest ratios are low. Lodges range from $300 to $2,000/night all-inclusive. Leopard sightings are near-daily in Sabi Sands; in Kruger they require patience and good timing on the H4-1.",
                },
                {
                  q: "What is the Big Five and will I see all five in 5 days?",
                  a: "The Big Five are lion, leopard, elephant, white rhinoceros, and Cape buffalo. In 5 days during the dry season (May–September), most self-drive visitors see all five. Elephant and buffalo are almost certain on any full day in the park. Lions are very likely near Satara camp and on the H1-2 corridor. White rhino probability is highest in the central zone on the S41 and S90/S91 loops. Leopard is the hardest to find on a self-drive — the H4-1 Lower Sabie road is your best bet. In Sabi Sands, leopard sightings are near-guaranteed. Bonus sightings to hope for: wild dog, cheetah, and spotted hyena.",
                },
                {
                  q: "How much does Kruger cost? What is the conservation fee?",
                  a: "The SANParks conservation fee (park entry) is ZAR 412 per foreign adult per day (2026 rate). South African residents pay ZAR 116/day. Children under 12 are ZAR 206/day (foreign). Accommodation in SANParks rest camps ranges from ZAR 500 (Berg-en-Dal basic hut) to ZAR 1,200 (Skukuza air-conditioned cottage). A budget self-drive trip including flights from Johannesburg, hire car, 5 nights of camp accommodation, and food runs approximately $800–$1,000 per person total for 5 days.",
                },
                {
                  q: "Is Kruger safe for tourists?",
                  a: "Inside the park, Kruger is extremely safe. You remain in your vehicle on game drives and do not get out except at designated picnic sites and rest camps. Rest camps are fenced, staffed 24 hours, and have security. The N4 highway from Johannesburg to Kruger is safe to drive in daylight. Do not stop on the highway after dark. Solo travellers, couples, families, and first-time Africa visitors all travel Kruger safely every year.",
                },
                {
                  q: "What is the best camp in Kruger?",
                  a: "Lower Sabie is consistently rated the best camp in Kruger by experienced self-drivers — the combination of the Sabie River leopard road (H4-1) and the camp&apos;s own waterhole and hippo pools makes it the most wildlife-productive location. Olifants is the most scenically spectacular — the cliff terrace is incomparable. Satara is best if your priority is lions. Skukuza is the most convenient with the best facilities. For a 5-day trip, a combination of Skukuza/Lower Sabie + Satara + Olifants is the classic optimum route.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kruger safari</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-kruger", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kruger-self-drive-guide", label: "Self-drive tips", icon: "🚗" },
                { href: "/blog/sabi-sands-vs-kruger", label: "Sabi Sands vs Kruger", icon: "🐆" },
                { href: "/blog/south-africa-safari-budget", label: "Safari budget guide", icon: "💰" },
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
          <RelatedGuides currentSlug="kruger-park-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Safari Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cape Town 7 Days — Table Mountain &amp; Wine", href: "/blog/cape-town-7-days" },
                { label: "Serengeti 5 Days — Great Migration", href: "/blog/serengeti-5-days" },
                { label: "Victoria Falls 3 Days — Zimbabwe &amp; Zambia", href: "/blog/victoria-falls-3-days" },
                { label: "Kenya Safari 7 Days — Masai Mara", href: "/blog/kenya-safari-7-days" },
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
