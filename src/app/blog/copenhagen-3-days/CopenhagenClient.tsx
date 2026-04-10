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
const COPENHAGEN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Copenhagen Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏰",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Copenhagen 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Copenhagen in 3 Days — Nyhavn, Tivoli and the happiest city on earth&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/copenhagen-3-days"
        imageUrl="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80"
        description="Copenhagen in 3 Days: Nyhavn at dawn, Tivoli at night, Freetown Christiania, and the world&apos;s best smørrebrød — complete travel guide with DKK costs."
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
export default function CopenhagenClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COPENHAGEN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Copenhagen" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="copenhagen nyhavn denmark colorful canal houses bikes"
            fallback="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1600&q=80"
            alt="Copenhagen Nyhavn canal with colourful 17th-century townhouses and sailing boats at golden hour"
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
              <span className="text-white/70">Copenhagen 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Copenhagen in 3 Days:
                <em className="italic text-amber-300"> Nyhavn, Tivoli &amp; Freetown Christiania</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s most bicycle-friendly city, the world&apos;s happiest population, and three days that include Nyhavn at dawn, Tivoli at midnight, and a train to Sweden for lunch. Real DKK costs.
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
              <span>🇩🇰 Denmark, Europe</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €70/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Copenhagen is the city that invented hygge — that untranslatable Danish concept of warmth, candles, good food, and contentment in the moment. Three days is enough to understand why Denmark tops the World Happiness Report year after year.
            </p>
          </blockquote>

          {/* ── WHAT COPENHAGEN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Copenhagen Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Copenhagen is a compact, walkable, spectacularly bicycle-friendly capital of 794,000 people on the eastern coast of Zealand island. It is the cultural, economic, and design capital of Scandinavia — the city that gave the world New Nordic cuisine (Noma opened here in 2003), the Egg Chair, flat-pack furniture philosophy, and the concept of hygge as a serious cultural value rather than a marketing campaign.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nyhavn — the narrow 17th-century canal lined with yellow, pink, orange, and red townhouses — is Copenhagen&apos;s most photographed image. But it is just one of many extraordinary things compressed into a 90 km² city. Within cycling distance: a functioning 16th-century castle with Crown Jewels in the basement, Europe&apos;s oldest amusement park still operating, an 84-acre autonomous commune operating under self-governance since 1971, and one of the world&apos;s most beautiful modern art museums 45 minutes away by train.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Prices are higher than Southern Europe but comparable to Paris — budget travellers spending €70–110/day is realistic if you avoid the Nyhavn canal-front restaurants and buy groceries at Netto for breakfast. The Copenhagen Card (DKK 899 / €121 for 72 hours) covers all Metro and bus travel plus 80+ museums and pays for itself within 1.5 days.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CPH" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏰" label="Landmarks" value="20+" />
              <StatCard icon="💰" label="Budget From" value="€70/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Copenhagen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "15–22°C, long daylight hours (up to 17 hours in June), Tivoli Gardens open, canal boat tours running, outdoor café terraces packed. The city is at its most alive. June and August are peak months — book accommodation early. September is excellent: fewer crowds, still warm.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr & Oct",
                  i: "🌸",
                  t: "Shoulder — Good Value",
                  d: "8–14°C, quieter, cheaper hotels, and the city is still entirely functional. April sees Tivoli open for the season. October has Copenhagen&apos;s autumn colours in the Frederiksberg Gardens. A good choice if you want the experience without peak-season crowds and prices.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Jan",
                  i: "❄️",
                  t: "Winter — Cold but Magical",
                  d: "2–6°C, dark by 4pm, but Tivoli opens for Christmas (mid-November to January 5). The Christmas market inside Tivoli is one of the best in Europe — mulled wine, fairy lights, and real hygge. Nyhavn in the snow is genuinely extraordinary. Dress in layers.",
                  b: "For Christmas season",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Feb–Mar",
                  i: "🌧️",
                  t: "Late Winter — Avoid if Possible",
                  d: "1–5°C, short days, Tivoli closed, and Copenhagen at its greyest. The city is still fully functional and museums are uncrowded, but this is the hardest season to enjoy Copenhagen. Unless you specifically want a winter city break with no tourist crowds.",
                  b: "Low season",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Copenhagen</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Copenhagen Airport (CPH / Kastrup) is one of Europe&apos;s most efficient airports — the Metro M2 connects the terminal directly to the city centre in <strong className="font-medium">15 minutes</strong> for DKK 39 (€5.20). It runs 24 hours, 7 days a week, with no separate airport surcharge.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "Metro from CPH Airport (recommended)",
                  d: "Metro M2 from Terminal 3 → Copenhagen Central (Kongens Nytorv or Nørreport): 15 minutes, DKK 39 / €5.20. The metro runs 24 hours and accepts contactless payment. The cheapest and fastest way to reach the city. Buy a city pass at the machine for multi-day use.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Flying from India (Delhi / Mumbai)",
                  d: "Direct flights from Delhi to Copenhagen on SAS and Scandinavian-connecting carriers take 9–10 hours. From Mumbai: 10–11 hours with one stop (often via Amsterdam, Frankfurt, or Dubai). Return fares from India: ₹45,000–₹90,000 depending on season and airline. Book 6–8 weeks ahead for better fares.",
                  b: "From India",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚆",
                  t: "Train from Germany / Hamburg",
                  d: "Hamburg → Copenhagen: 4.5 hours by train via the Fehmarnbelt route (or ferry crossing at Puttgarden–Rødby). Excellent option if combining Copenhagen with a Germany trip. The Øresund train from Copenhagen continues to Malmö (15 mins) and Gothenburg (3 hours) for Scandinavia rail trips.",
                  b: "From Europe",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Stockholm / Oslo",
                  d: "FlixBus and Swebus operate Copenhagen–Stockholm (9 hours, from €25) and Copenhagen–Oslo (9 hours, from €30). Slower than flying but significantly cheaper and city-centre to city-centre. Good option for backpackers doing a Scandinavia loop.",
                  b: "Budget travel",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Copenhagen Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Prices are shown in DKK and euros — Copenhagen is expensive by Southern European standards but very manageable with smart choices. All entries assume May–September visiting (Tivoli open, canal boats running).
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Nyhavn · Rosenborg Castle · The Little Mermaid · Strøget"
                cost="DKK 350–500 / €47–67 (transport, castle, food)"
                items={[
                  "Arrive at CPH Airport. Take the Metro M2 to the city centre — DKK 39 / €5.20, 15 minutes. Runs 24 hours. Check in to your accommodation in Nørreport, Vesterbro, or near Central Station.",
                  "Nyhavn canal — arrive before 9am for the definitive photograph. The row of 17th-century townhouses in yellow, pink, orange, and red reflected in the canal water with historic sailing vessels moored in front. By 8am the café terraces are being set up. By 10am the quayside is packed. At 6–7am it is entirely yours — and the morning light on the coloured facades is the best it will ever be.",
                  "Amalienborg Palace — the winter home of the Danish royal family. The changing of the guard happens at noon daily and is free to watch. Four identical rococo palaces surround a cobbled octagonal courtyard. The view across to the Marble Church (Frederiks Kirke) dome behind is one of Copenhagen&apos;s finest architectural compositions.",
                  "The Little Mermaid (Den lille Havfrue) — free. Walk 10 minutes north from Amalienborg along the harbour. The 1913 bronze statue by Edvard Eriksen is 1.25 metres tall and regularly vandalised. Go anyway — the waterfront walk there and back is lovely and the collective experience of expectation management is part of the story.",
                  "Rosenborg Castle (DKK 130 / €17) — a 17th-century Dutch Renaissance palace in the King&apos;s Garden. The basement treasury holds the Danish Crown Jewels including the Christian IV crown (1596), the sceptre, and the orb. The palace interior is preserved as it was in 1700.",
                  "Strøget pedestrian shopping street — 1.1km of shops from Rådhuspladsen to Kongens Nytorv. Danish design brands: Georg Jensen (silverware), Royal Copenhagen (porcelain), Illums Bolighus (home design). Window shopping is free. Budget DKK 800–2,000 if you intend to buy.",
                  "Evening: rød pølse (hot dog) from a pølsevogn street cart — DKK 25–35 / €3–4.70. The Danish hot dog with remoulade, crunchy onions, and mustard on a warm bun is the national street food and the best value meal in the city.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Freetown Christiania · Canal Boat Tour · Tivoli Gardens at Night"
                cost="DKK 400–700 / €54–94 (boat, Tivoli, food)"
                items={[
                  "Freetown Christiania (Pusher Street) — free to enter, open all hours. The 84-acre autonomous commune established in 1971 when squatters occupied an abandoned military barracks near the city centre. Approximately 850 people live here under self-governance. Walk the commune freely — the murals, the DIY architecture built over 50 years, the lake, and the live music venues. Photography is strictly forbidden inside Pusher Street (the only rule that is truly enforced).",
                  "Torvehallerne food market (Israels Plads, near Nørreport) — Copenhagen&apos;s covered market with 60+ stalls: fresh fish, smørrebrød vendors, coffee roasters, cheese, and the best smoked salmon sandwiches in the city. Buy lunch here — DKK 80–180 / €11–24 for a proper meal. This is where Copenhagen actually eats.",
                  "Canal boat tour — DKK 89 / €12 for the 1-hour Netto-Bådene hop-on-hop-off water bus through Copenhagen&apos;s canals. Passes under 12 bridges, past the Opera House, the Royal Library Black Diamond, and Christianshavn. The cheapest and most informative way to see the city. Sit on the open upper deck.",
                  "Christiansborg Palace — the home of the Danish Parliament, Supreme Court, and the Prime Minister&apos;s office, all on one island. The Royal Reception Rooms are open to visitors (DKK 110 / €15). The tower has the best panoramic view in all of Copenhagen — and it&apos;s free.",
                  "Tivoli Gardens evening (DKK 169 / €23 entry, rides extra or DKK 399 / €53 with unlimited rides) — open May through late September. Come at 6pm when the 100,000 coloured lights switch on and the gardens transform. The world&apos;s oldest wooden roller coaster (Bjergbanen, 1914) is still running. Stay until midnight in summer — Tivoli at night is the best version.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Day Trip to Malmö (or Kronborg Castle) · Smørrebrød Farewell"
                cost="DKK 250–500 / €34–67 (day trip, smørrebrød, pastry)"
                items={[
                  "Option A — Malmö, Sweden (recommended): Take the regional train from Copenhagen Central to Malmö C — 15 minutes, DKK 105 / €14 return. You cross the Øresund Bridge — a 7.8km tunnel-island-bridge combination across the strait. No passport check within Schengen. Malmö&apos;s Gamla Stan old town, Stortorget square, the Malmöhus Castle (SEK 60 entry), and Santiago Calatrava&apos;s Turning Torso skyscraper. Back in Copenhagen by 4pm.",
                  "Option B — Kronborg Castle, Helsingør: Shakespeare&apos;s Hamlet&apos;s castle, 45 minutes north by train (DKK 140 / €19 return, DKK 140 / €19 entry). UNESCO listed. The 16th-century fortress with cannon-lined ramparts looking across to Sweden, 2km away. The casemates beneath the castle hold a dormant statue of Holger Danske, the legendary Viking warrior who sleeps until Denmark needs him.",
                  "Farewell smørrebrød — the open-faced Danish sandwich on dense rye bread is the national lunch. Aamanns Etablissement (Nørre Farimagsgade) or Schønnemann (Hauser Plads) serve the definitive versions: DKK 115–175 / €15–24 per piece. Traditional toppings: pickled herring, smoked salmon, roast beef with remoulade, egg with shrimp.",
                  "Danish pastry (wienerbrød) — the correct kind has real butter laminated through the layers in the Austrian fashion brought to Denmark in the 19th century. Hart Bageri on Jægersborggade in Nørrebro and Juno the Bakery are Copenhagen&apos;s best. DKK 35–55 / €4.70–7.40 per pastry.",
                  "Design Museum Denmark (DKK 145 / €19) — the definitive collection of Danish design: Arne Jacobsen&apos;s Egg Chair and Swan Chair, Hans Wegner&apos;s Wishbone Chair, the Poul Henningsen PH lamp. Danish design philosophy explained in context. Plan 1.5–2 hours.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Copenhagen" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Copenhagen Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees as of early 2026. The Copenhagen Card (DKK 899 / €121, 72 hours) covers most paid attractions and all public transport.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Nyhavn Canal",
                  e: "Free",
                  d: "Copenhagen&apos;s most iconic image — the narrow 17th-century canal lined with coloured townhouses and historic sailing vessels. Best at 6–7am before crowds arrive. The canal-front restaurants are tourist-priced; eat elsewhere and come just for the atmosphere and photography.",
                  t: "Iconic · Best at 6am",
                },
                {
                  n: "Tivoli Gardens",
                  e: "DKK 169 / €23 (entry) · DKK 399 / €53 (entry + rides)",
                  d: "The world&apos;s second-oldest amusement park, opened 1843. The gardens are beautiful in themselves — fountains, flowers, peacocks, music stages. At night, 100,000 coloured lights transform the atmosphere entirely. Open May–September and Christmas season. Come in the evening.",
                  t: "Must see · Go at night",
                },
                {
                  n: "Rosenborg Castle",
                  e: "DKK 130 / €17",
                  d: "17th-century Dutch Renaissance castle in the King&apos;s Garden. The basement treasury holds the Crown Jewels — the Christian IV crown (1596), sceptre, orb, and coronation regalia. The palace interior is preserved as it was in 1700, with tapestries, furniture, and the throne room intact.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Freetown Christiania",
                  e: "Free to enter",
                  d: "84-acre autonomous commune since 1971 in the heart of Copenhagen. Walk the full commune beyond Pusher Street — the lake, the DIY architecture, the Great Hall concert venue, the Månefiskeren restaurant. One of Europe&apos;s most remarkable urban experiments, functioning within one of the world&apos;s most orderly cities.",
                  t: "Unique · 1.5–2 hrs",
                },
                {
                  n: "Christiansborg Palace",
                  e: "DKK 110 / €15 (Royal Rooms) · Tower: Free",
                  d: "The seat of Danish government — Parliament, Supreme Court, and Prime Minister on one island. The tower offers Copenhagen&apos;s best free panoramic view. The Royal Reception Rooms have the finest interiors in any Danish royal palace.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Louisiana Museum of Modern Art",
                  e: "DKK 145 / €19 + DKK 105 / €14 return train to Humlebæk",
                  d: "45 minutes north of Copenhagen. One of the most beautiful art museums in the world: Alexander Calder mobiles, Giacometti sculptures, Francis Bacon triptychs, and a sculpture park overlooking the Øresund Strait toward Sweden. The architecture and landscape are inseparable.",
                  t: "Day trip · 3–4 hrs",
                },
                {
                  n: "The Little Mermaid",
                  e: "Free",
                  d: "The 1913 bronze statue by Edvard Eriksen on a rock at the harbour edge — 1.25 metres tall, regularly vandalised, and smaller than every visitor expects. Go for the experience of collective expectation rather than the statue itself. The harbour walk to and from Amalienborg is lovely.",
                  t: "Iconic · 20 mins",
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
            title="Copenhagen — Canals, Castles &amp; Danish Design"
            subtitle="Nyhavn, Tivoli, Christiania and the happiest city on earth."
            spots={[
              {
                name: "Nyhavn Canal at Golden Hour",
                query: "copenhagen nyhavn canal colorful townhouses boats denmark golden hour",
                desc: "The 17th-century canal front that defines Copenhagen — coloured townhouses, historic sailing vessels, and the morning light that changes everything.",
              },
              {
                name: "Tivoli Gardens at Night",
                query: "tivoli gardens copenhagen night lights illuminated amusement park",
                desc: "100,000 coloured lights transform Tivoli after dark — the world&apos;s second-oldest amusement park at its most magical after 6pm.",
              },
              {
                name: "Rosenborg Castle",
                query: "rosenborg castle copenhagen denmark kings garden",
                desc: "The 17th-century Dutch Renaissance palace in the King&apos;s Garden — home to the Danish Crown Jewels since 1700.",
              },
              {
                name: "Freetown Christiania",
                query: "christiania copenhagen freetown commune murals denmark",
                desc: "Europe&apos;s most remarkable urban experiment — an autonomous 84-acre commune functioning since 1971 in the middle of one of the world&apos;s most orderly capitals.",
              },
              {
                name: "Øresund Bridge — Copenhagen to Malmö",
                query: "oresund bridge copenhagen malmo sweden denmark strait",
                desc: "The 7.8km Øresund Bridge connecting Denmark and Sweden — a 15-minute train ride that crosses a country border without a passport check.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Copenhagen Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Copenhagen is expensive by Southern European standards — comparable to Paris, cheaper than Oslo. Budget travel is very doable with smart choices: avoid Nyhavn restaurants, use the Copenhagen Card, buy groceries at Netto or Lidl. All prices in DKK and euros.
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
                    ["🏨 Accommodation / night", "DKK 200–350 / €27–47", "DKK 980–1,500 / €131–200", "DKK 3,350–9,000 / €450–1,200"],
                    ["🍽️ Food / day", "DKK 150–260 / €20–35", "DKK 450–750 / €60–100", "DKK 1,125–4,500 / €150–600"],
                    ["🚇 Transport / day", "DKK 75–150 / €10–20", "DKK 150–225 / €20–30", "DKK 375–750 / €50–100"],
                    ["🏛️ Activities / day", "DKK 150–300 / €20–40", "DKK 300–600 / €40–80", "DKK 750–2,250 / €100–300"],
                    ["TOTAL / day", "DKK 525–820 / €70–110", "DKK 1,500–2,625 / €200–350", "DKK 4,500–11,250 / €600–1,500+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€70–110/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm (DKK 200–350/night), buy groceries from Netto for breakfast and lunch, eat one restaurant dinner. Use the Metro&apos;s 24-hour ticket (DKK 80). The Copenhagen Card pays for itself on day 2.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€200–350/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in Indre By or Frederiksberg (DKK 980–1,500/night), two restaurant meals per day, the Copenhagen Card covering all transport and museums. This is the comfortable, unhurried way to see Copenhagen.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€600–1,500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel d&apos;Angleterre or Nimb Hotel inside Tivoli (DKK 3,350–9,000/night), dinner at Geranium (3 Michelin stars, DKK 4,500 / €600/person with wine pairing), private guides and curator access.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Copenhagen</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Copenhagen&apos;s four best neighbourhoods for visitors are Nørreport (central, near Rosenborg), Vesterbro (hipster, good restaurants), Nørrebro (local, independent shops), and near Central Station (convenient, varied price range). The Metro M2 makes everywhere accessible.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Nørreport / Indre By",
                  type: "Central · Walking distance to everything",
                  price: "From DKK 780–3,750 / €105–500/night",
                  badge: "Best location",
                  desc: "The inner city around Nørreport station is Copenhagen&apos;s most convenient base: walking distance to Rosenborg Castle, Torvehallerne market, Nyhavn (20 minutes on foot), and the Metro for everywhere else. Higher prices for the location, but no transport costs.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Vesterbro",
                  type: "Trendy · 10 mins from Central Station",
                  price: "From DKK 650–2,250 / €87–300/night",
                  badge: "Best vibe",
                  desc: "Copenhagen&apos;s most dynamic neighbourhood — the old meatpacking district (Kødbyen) transformed into galleries, restaurants, and bars. Excellent independent restaurant scene, good hostel and mid-range hotel options. Central Station is 10 minutes on foot. Tivoli is next door.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Nørrebro",
                  type: "Local · Authentic Copenhagen life",
                  price: "From DKK 450–1,500 / €60–200/night",
                  badge: "Most authentic",
                  desc: "The most genuinely local neighbourhood in Copenhagen — diverse, creative, and where younger Copenhageners actually live. Jægersborggade street has the best independent shops, Hart Bageri pastries, and the Assistens Cemetery (where Kierkegaard and HC Andersen are buried). Metro 15 minutes to the centre.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Near Copenhagen Central Station",
                  type: "Convenient · All transport links",
                  price: "From DKK 550–2,250 / €74–300/night",
                  badge: "Best convenience",
                  desc: "Central Station (Hovedbanegården) connects to the Metro, all regional trains, the Airport Express, and buses to Germany and Sweden. Tivoli Gardens is directly across the street. Good for travellers arriving by train from Hamburg or continuing to Malmö. Wide range of price points.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Copenhagen</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Copenhagen has the highest density of Michelin-starred restaurants per capita in the Nordic countries — but you don&apos;t need a reservation at Geranium to eat exceptionally well. The real Copenhagen food experiences are smørrebrød, hot dogs, Torvehallerne, and the noma-adjacent bistros that former staff opened after leaving the mothership.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Torvehallerne (Israels Plads)",
                  t: "Covered market · Nørreport",
                  d: "Copenhagen&apos;s definitive food market — 60+ stalls under two glass-roofed halls. Fresh smoked salmon on rye, Coffee Collective espresso (the best in Denmark), Danish cheese, charcuterie, and the smørrebrød vendors that Copenhageners themselves use for lunch. DKK 80–180 / €11–24 for a full meal. Arrive before 12:30pm on weekdays before the lunch rush.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Aamanns Etablissement",
                  t: "Modern smørrebrød · Nørre Farimagsgade",
                  d: "The definitive modern smørrebrød restaurant. Adam Aamann elevated the open-faced sandwich from lunchtime staple to high cuisine — pickled herring with mustard seeds, smoked duck with plum, fried plaice with remoulade. DKK 115–175 / €15–24 per piece. Three pieces make a proper lunch. Book ahead for the tasting menu.",
                  b: "Best smørrebrød",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Pølsevogn Hot Dog Carts",
                  t: "Street food · Citywide",
                  d: "The Danish hot dog (rød pølse) from a pølsevogn street cart is the most democratic meal in Copenhagen — DKK 25–35 / €3–4.70 for a soft bun with a steamed sausage, remoulade, mustard, crunchy fried onions, and cucumber slices. Find carts outside Central Station, on Strøget, and near Tivoli. Do not skip this.",
                  b: "Best value",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Bror (Sankt Peders Stræde)",
                  t: "Noma-alumni · Mid-range fine dining",
                  d: "Run by former Noma chefs Victor Wagman and Johan Rønnow, Bror serves precise, seasonal Nordic cooking at mid-range prices. The tasting menu is DKK 500–750 / €67–100 — a fraction of Noma&apos;s price for food of similar intellectual seriousness. Book 1–2 weeks ahead.",
                  b: "Post-Noma dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Schønnemann (Hauser Plads)",
                  t: "Traditional smørrebrød · Since 1877",
                  d: "Copenhagen&apos;s oldest smørrebrød restaurant — operating continuously since 1877. The room is panelled dark wood with white tablecloths. The herring, the beef tartare with egg yolk, and the fried plaice are the classics. Lunch only, Monday–Friday. DKK 130–200 / €17–27 per piece. Book a week ahead.",
                  b: "Traditional classic",
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
            destination="Copenhagen Denmark"
            hotels={[
              {
                name: "Hotel d&apos;Angleterre",
                type: "Grand luxury · Kongens Nytorv",
                price: "From DKK 3,735 / €500/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/dk/d-angleterre.html?aid=2820480",
              },
              {
                name: "Nimb Hotel",
                type: "Luxury · Inside Tivoli Gardens",
                price: "From DKK 3,350 / €450/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/dk/nimb.html?aid=2820480",
              },
              {
                name: "Hotel Skt. Petri",
                type: "Design hotel · Latin Quarter",
                price: "From DKK 1,500 / €200/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/dk/skt-petri.html?aid=2820480",
              },
              {
                name: "Generator Copenhagen",
                type: "Design hostel · Adelgade",
                price: "From DKK 200 / €27/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/dk/generator-copenhagen.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Copenhagen City Walking Tour",
                duration: "3 hrs",
                price: "From €15/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=copenhagen+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Nyhavn Canal Boat Tour",
                duration: "1 hr",
                price: "From DKK 89 / €12",
                badge: "Best value",
                url: "https://www.getyourguide.com/s/?q=copenhagen+canal+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Copenhagen Bike Rental + City Tour",
                duration: "3 hrs",
                price: "From DKK 200 / €27",
                url: "https://www.getyourguide.com/s/?q=copenhagen+bike+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kronborg Castle Hamlet Tour",
                duration: "5 hrs",
                price: "From DKK 350 / €47",
                url: "https://www.getyourguide.com/s/?q=kronborg+castle+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Copenhagen</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🍽️",
                  title: "Eating at Nyhavn Canalfront Restaurants",
                  desc: "The restaurants that line Nyhavn are among the most expensive and least authentic in Copenhagen — tourist markup of 2–3x standard prices. A smørrebrød here costs DKK 200–350 / €27–47 for the same dish that costs DKK 115–175 / €15–24 three blocks away. Walk 5 minutes: Aamanns Etablissement (Nørre Farimagsgade), Schønnemann (Hauser Plads), and Torvehallerne are the correct choices.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚲",
                  title: "Not Renting a Bicycle",
                  desc: "Copenhagen has 390km of dedicated bike lanes and traffic lights timed to cycling speed. 62% of residents cycle to work every day. Renting a bike (DKK 139 / €19/day) transforms Copenhagen from a city you walk around to one you feel part of. Cycling along Nørrebrogade, to Amager beach, through Frederiksberg Gardens, and across the bridges reaches a Copenhagen tour buses never see.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏘️",
                  title: "Skipping Freetown Christiania",
                  desc: "Many visitors skip Christiania as uncomfortable or edgy. This is a mistake. The 84-acre commune is one of Europe&apos;s most remarkable urban experiments — self-governing since 1971 within one of the world&apos;s most orderly cities. Walk the lake path, see the DIY architecture, visit the Great Hall, eat at Månefiskeren. Yes, Pusher Street is there, but the rest of Christiania is open, beautiful, and entirely unusual.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📅",
                  title: "Not Booking Michelin Restaurants Months Ahead",
                  desc: "Geranium (3 Michelin stars) and Noma release reservations exactly 90 days in advance. Alchemist requires booking 3–4 months ahead. If a Michelin dinner is part of your Copenhagen plan, set calendar reminders and be on the reservation platform at the exact release time. Walk-in is not an option at these restaurants.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Copenhagen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Nyhavn at 6am — The Empty Canal",
                  desc: "Nyhavn is photographed at all hours but the undisputed best time is 6–7am on a weekday. The canal is still, the coloured facades catch direct morning light, the boats are unmoved, and there are no tourists. By 8am the café terraces are being set up. By 10am the quayside is packed. Set your alarm once — it is a completely different place.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎡",
                  title: "Tivoli After 6pm — When the Lights Come On",
                  desc: "Tivoli is open from noon but the correct time to visit is from 6pm when the 100,000 coloured lights switch on. The fountains illuminate, the music stages fill, and the atmosphere becomes genuinely magical. Entry is the same price at noon or 8pm — come late, stay until midnight.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "⛵",
                  title: "Canal Boat Tour — DKK 89 for the Best Hour in Copenhagen",
                  desc: "The Netto-Bådene harbour bus (DKK 89 / €12, May–September) is Copenhagen&apos;s best budget experience: a 1-hour loop through the city&apos;s canals past the Opera House, the Royal Library Black Diamond, Christianshavn, and Nyhavn from the water. Sit on the open upper deck. No commentary — just the city at water level.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚆",
                  title: "Take the 15-Minute Train to Sweden",
                  desc: "The regional train from Copenhagen Central to Malmö, Sweden costs DKK 105 / €14 return and takes 15 minutes across the Øresund Bridge. No passport check within Schengen. You have lunch in another country and are back by 4pm. This is one of travel&apos;s genuine freebies — a different country on your Copenhagen ticket.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎫",
                  title: "Copenhagen Card — Worth It from Day 1.5",
                  desc: "The Copenhagen Card (DKK 899 / €121, 72 hours) covers all Metro and bus travel plus 80+ attractions including Rosenborg Castle, the National Museum, Ny Carlsberg Glyptotek, and most museums. It pays for itself within 1.5 days of mid-range sightseeing. Don&apos;t buy it for a one-day visit — buy a 24-hour transport ticket instead (DKK 80 / €11).",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌊",
                  title: "Swim in Copenhagen Harbour — It&apos;s Legal and Clean",
                  desc: "Copenhagen Harbour has been clean enough to swim in since 2002 — a remarkable feat of environmental restoration. The Islands Brygge Harbour Bath (free, open June–September) has five pools in the harbour. Copenhageners swim here in the city centre on lunch breaks. One of the most surprising things you can do in any European capital.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Copenhagen" />

          {/* Combine With */}
          <CombineWith currentSlug="copenhagen-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Copenhagen vs Stockholm — which city should I visit first?",
                  a: "Both are excellent, and different enough to justify visiting both. Copenhagen is more compact, more walkable, and more architecturally coherent — a city you can understand in 3 days. Stockholm is spread across 14 islands, more grand in scale, with a different cultural weight. For first-time Scandinavia visitors: Copenhagen is the better introduction. It&apos;s also 15 minutes by train from Malmö, giving you a Sweden experience within a Copenhagen trip.",
                },
                {
                  q: "Is Denmark really the world&apos;s happiest country?",
                  a: "Denmark has topped or nearly topped the World Happiness Report since it began in 2012. The reasons are debated: high social trust, universal healthcare and education, strong work-life balance (average 37-hour work week), excellent public infrastructure, and low corruption. What visitors notice: people seem relaxed, public spaces are clean and functional, cycling is treated as a serious adult activity, and the concept of hygge — cosy togetherness — is a genuine cultural value, not a marketing campaign.",
                },
                {
                  q: "Do Indian passport holders need a Schengen visa for Denmark?",
                  a: "Yes. Denmark is a full Schengen member. Indian passport holders must apply for a Schengen short-stay C visa through the Danish embassy or VFS Global Denmark. Fee: €80. Apply at least 6 weeks before travel in summer. Required: confirmed hotel bookings, bank statements (€70+/day), return flight tickets, employment proof, and travel insurance covering €30,000 minimum. The same visa covers the Malmö day trip to Sweden — no additional paperwork.",
                },
                {
                  q: "How expensive is Copenhagen really?",
                  a: "Copenhagen is expensive by Southern European standards but comparable to Paris and cheaper than Oslo. Budget travellers at €70–110/day is realistic: hostel accommodation, grocery breakfast and lunch from Netto or Lidl, one restaurant dinner. The Copenhagen Card (DKK 899 / €121, 72 hours) covers the Metro, all buses, and 80+ museums — it pays for itself within 1.5 days.",
                },
                {
                  q: "What is hygge and is it a real thing in Copenhagen?",
                  a: "Hygge (pronounced roughly HOO-gah) is an untranslatable Danish concept meaning the quality of cosiness, warmth, and convivial togetherness — candles, good food, close friends, contentment in the present moment. It is genuinely real in Copenhagen: Danes light candles even in summer, café culture is about staying not turning tables, and the design of public spaces prioritises comfort over efficiency. You will feel it rather than understand it.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Copenhagen trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/copenhagen-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/nyhavn-guide", label: "Nyhavn guide", icon: "🏘️" },
                { href: "/blog/tivoli-gardens-tips", label: "Tivoli tips", icon: "🎡" },
                { href: "/blog/denmark-schengen-visa", label: "Visa guide", icon: "📋" },
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
          <RelatedGuides currentSlug="copenhagen-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Amsterdam in 4 Days — Canals &amp; Museums", href: "/blog/amsterdam-4-days" },
                { label: "Berlin in 4 Days — History &amp; Culture", href: "/blog/berlin-4-days" },
                { label: "Norway Fjords — 6-Day Guide", href: "/blog/norway-fjords-6-days" },
                { label: "Paris in 5 Days — The Complete Guide", href: "/blog/paris-5-days" },
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
