"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "@/app/blog/[slug]/BlogSlugNav";
import TableOfContents from "@/components/blog/TableOfContents";
import InlineSignup from "@/components/email/InlineSignup";
import DestinationGallery from "@/components/blog/DestinationGallery";
import RelatedGuides from "@/components/blog/RelatedGuides";

const tocItems = [
  { id: "overview", label: "Why May Is Tricky", emoji: "☀️" },
  { id: "mountains", label: "Mountain Picks", emoji: "⛰️" },
  { id: "beaches", label: "Beach Picks", emoji: "🏖️" },
  { id: "culture", label: "Culture & Heritage", emoji: "🏛️" },
  { id: "avoid", label: "What to Avoid", emoji: "🚫" },
  { id: "tips", label: "Practical Tips", emoji: "📋" },
  { id: "faq", label: "FAQ", emoji: "❓" },
];

interface Destination {
  number: number;
  name: string;
  slug?: string;
  temp: string;
  crowd: string;
  bestFor: string;
  highlight: string;
  verdict: string;
}

const MOUNTAINS: Destination[] = [
  {
    number: 1,
    name: "Spiti Valley",
    slug: "spiti-valley-7-days",
    temp: "8–18°C (day), 0–5°C (night)",
    crowd: "Very low — roads just opening",
    bestFor: "Adventure couples, photographers, off-road enthusiasts",
    highlight: "Snow patches at Kunzum Pass, Key Monastery with no one else around, Chandratal Lake before the June surge",
    verdict: "May is one of the best months for Spiti — you catch the roads opening (Kunzum usually mid-May), snow still covers the passes dramatically, and you're ahead of the peak-season crowd that arrives June onwards. Check BRO road status before going — Rohtang can still be closed early May. The Shimla–Kaza route via Kinnaur opens earlier than the Manali route.",
  },
  {
    number: 2,
    name: "Kasol + Parvati Valley",
    slug: "kasol-3-days",
    temp: "18–24°C",
    crowd: "Moderate — popular but manageable in May",
    bestFor: "Trekkers, backpackers, those wanting mountains without the high-altitude commitment",
    highlight: "Kheerganga trek (14km to natural hot springs at 2,950m) is at its best in May — rhododendrons, flowing streams, and none of the monsoon mud",
    verdict: "May is Kasol's sweet spot. Cool, green, waterfalls flowing from snowmelt, and the Kheerganga trail is clear and beautiful. The Israeli-café culture on the riverside is in full swing. Avoid July–August when landslides close the Beas Valley road intermittently.",
  },
  {
    number: 3,
    name: "Jibhi + Tirthan Valley",
    slug: "jibhi-tirthan-valley-3-days",
    temp: "18–22°C",
    crowd: "Low — still off the main tourist radar",
    bestFor: "People escaping crowded hill stations, couples, those wanting genuine peace",
    highlight: "Jalori Pass with snow patches, apple orchards in bloom, the Tirthan River trout fishing, zero crowds at waterfalls that will be packed in June",
    verdict: "Jibhi is what Manali used to be before it got discovered. In May, the apple blossoms are out, the Jalori Pass is passable with some snow still on it, and the valley smells like cold river and pine. Great Himalayan National Park entry is nearby. Stay in a riverside cottage and do nothing for two days — it's perfectly fine.",
  },
  {
    number: 4,
    name: "Dharamshala + McLeodganj",
    slug: "dharamshala-3-days",
    temp: "20–26°C",
    crowd: "Moderate",
    bestFor: "Trekkers, spiritual seekers, those wanting a mix of culture and mountains",
    highlight: "Kareri Lake trek (15km each way, 2,950m) is perfect in May — snow-fed lake, clear trails, Dhauladhar range views",
    verdict: "Dharamshala in May is genuinely pleasant — the summer crowds haven't arrived, the Tibetan quarter is calm, and the treks into the Dhauladhar range are at their best. Triund is a classic easy hike. Kareri Lake requires a day or overnight and rewards properly. The refugee market in McLeodganj has excellent Tibetan food.",
  },
  {
    number: 5,
    name: "Manali",
    slug: "manali-5-days",
    temp: "18–25°C",
    crowd: "Low in early May, building from mid-May onwards",
    bestFor: "First-time Himachal visitors, those wanting road trip infrastructure",
    highlight: "Solang Valley still has snow for activities, Hampta Pass trek opens, Old Manali is actually pleasant before the June chaos",
    verdict: "Go in early-to-mid May if you want Manali without the madness. By late May the Volvo buses from Delhi fill up with school holiday crowds. Rohtang Pass requires a permit (book at hptdc.in, ₹500) and can still be snow-covered and spectacular. Hampta Pass trek (4 days, 4,270m) is one of the best moderate Himalayan treks and May is the opening window.",
  },
  {
    number: 6,
    name: "Leh-Ladakh",
    slug: "leh-ladakh-7-days",
    temp: "15–22°C (Leh town), cold at passes",
    crowd: "Low in early May, moderate by late May",
    bestFor: "Anyone who wants dramatic high-altitude landscapes without rain",
    highlight: "Pangong Lake before crowds, Magnetic Hill, Nubra Valley, monasteries without tour groups",
    verdict: "Leh is accessible by flight year-round — the Manali–Leh highway opens late May. In early May, you'll have Ladakh almost to yourself: stark Buddhist monasteries, blue-sky days, and temperatures mild enough to explore comfortably. Acclimatise for 2 days before doing anything strenuous. This is one of the few places in India that gets better the less infrastructure you need.",
  },
  {
    number: 7,
    name: "Chopta + Tungnath (Uttarakhand)",
    temp: "10–18°C",
    crowd: "Very low",
    bestFor: "Trekkers, spiritual pilgrims, anyone wanting Himalayan views without Himachal crowds",
    highlight: "Tungnath temple (3,680m, world's highest Shiva temple) opens post-snow in May, Chandrashila summit (4,090m) with 360° Himalayan panorama, Deoria Tal reflection lake",
    verdict: "Chopta is Uttarakhand's secret. The Chandrashila trek (7km return from Tungnath) gives you a panorama from Kedarnath to Nanda Devi. The Deoria Tal reflection pool is a 3km walk from the road and genuinely stunning. Almost no commercial development. Go in May before the Char Dham yatra crowds spill over into this area.",
  },
];

const BEACHES: Destination[] = [
  {
    number: 8,
    name: "Andaman Islands",
    slug: "andaman-5-days",
    temp: "28–30°C, clear skies",
    crowd: "Peak season — book in advance",
    bestFor: "Snorkelers, divers, beach lovers who want actual tropical water",
    highlight: "Havelock Island (Radhanagar Beach, Elephant Beach snorkeling), Neil Island calm, visibility 15–20m for diving",
    verdict: "April–May is the Andaman's best season, full stop. The Bay of Bengal is calm, the water is clear, and the coral at Elephant Beach and North Bay is accessible. The southwest monsoon arrives late May to early June, so you have a narrow, excellent window. Book Havelock ferries and permits well ahead — this is genuinely popular in May.",
  },
  {
    number: 9,
    name: "Varkala",
    slug: "varkala-3-days",
    temp: "28–32°C",
    crowd: "Low-to-moderate — the right crowd for this kind of place",
    bestFor: "Those wanting a quieter Kerala beach alternative to Kovalam, Ayurveda seekers",
    highlight: "Cliff-top beach with absolutely no cars (you walk down steps), Ayurveda centres along the cliff, Janardanaswamy temple",
    verdict: "Varkala works until the monsoon arrives in early June. The cliff beach is one of India's most atmospheric — you eat at the cliff-top restaurants and watch the Arabian Sea. May is warm but sea breezes keep it bearable. It's significantly less developed than Kovalam and better for it.",
  },
  {
    number: 10,
    name: "Gokarna",
    slug: "gokarna-3-days",
    temp: "30–34°C",
    crowd: "Very low — tourists thin out before monsoon",
    bestFor: "Those wanting Goa's atmosphere without Goa's prices and crowds",
    highlight: "Om Beach, Half Moon Beach, Paradise Beach (all accessible only by boat or trek), Mahabaleshwara temple",
    verdict: "May is actually a good time for Gokarna — the beach crowds thin out as people assume pre-monsoon heat is bad (it's not if you're at the beach). The sea is still swimmable, prices drop, and you can find accommodation easily. By late May into June it gets rough. A great alternative to Goa which is largely closed.",
  },
];

const CULTURE: Destination[] = [
  {
    number: 11,
    name: "Hampi",
    slug: "hampi-3-days",
    temp: "36–38°C",
    crowd: "Very low — most tourists sensibly avoid May",
    bestFor: "History obsessives, photographers who want empty ruins",
    highlight: "Virupaksha Temple, the boulder landscape, Vittala Temple's stone chariot, Matanga Hill sunset with zero crowds",
    verdict: "Hampi in May is hot — 36°C is real. But it's also completely empty of tourists, which means you get Vijayanagara's ruins to yourself. Start at 6am, finish by noon, rest at your guesthouse, go out again at 5pm. The light at golden hour on the granite boulders is extraordinary. Not for heat-sensitive travellers, but rewarding for those who plan around the heat.",
  },
  {
    number: 12,
    name: "Jaisalmer (Rajasthan)",
    slug: "rajasthan-7-days",
    temp: "40–45°C",
    crowd: "Very low",
    bestFor: "Those who want the Thar Desert experience without the crowds",
    highlight: "Jaisalmer Fort, Sam Sand Dunes camel safari, havelis, the desert actually making sense in heat",
    verdict: "Counterintuitively, Jaisalmer in summer is better than winter for the authentic desert experience. The fort is empty, the dune camps are nearly free, and the heat IS the desert. You're not fighting October crowds. Manage it like Hampi — early mornings, afternoon rest, evening walks. Don't combine with Jodhpur or Jaipur in May (those cities are just hot without the desert logic).",
  },
];

export default function BestMayClient() {
  return (
    <>
      <BlogSlugNav />
      <TableOfContents items={tocItems} />

      <main className="pt-[72px] bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <Image
            src="/images/blog/india-may-travel.jpg"
            alt="Spiti Valley Himachal Pradesh India May travel mountains snow"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[900px]">
            <span className="inline-block bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
              Travel Planning
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight">
              Best Places to Visit in India in May 2026
            </h1>
            <p className="text-white/65 text-sm mt-3">April 7, 2026 · 8 min read · By Surya Pratap</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-5 md:px-8 py-10 md:py-14">

          {/* Lede */}
          <p className="font-serif text-xl font-light text-muted italic leading-relaxed mb-8">
            India in May splits into two completely different countries. One is brutal — Delhi at 42°C, Rajasthan at 45°C, South India humid and airless. The other is extraordinary — Himachal Pradesh opening up after winter, Andaman&apos;s clearest waters, hill stations before peak-season crowds arrive. The trick is knowing which India you&apos;re booking.
          </p>

          {/* Quick picks */}
          <div className="grid sm:grid-cols-3 gap-3 my-8">
            {[
              { type: "Best Mountain", pick: "Spiti Valley — roads opening, dramatic landscapes", emoji: "⛰️" },
              { type: "Best Beach", pick: "Andaman — peak season, crystal water", emoji: "🏖️" },
              { type: "Best Trek", pick: "Kasol → Kheerganga hot spring", emoji: "🥾" },
              { type: "Best Offbeat", pick: "Jibhi-Tirthan Valley — apple blossoms", emoji: "🌸" },
              { type: "Best Adventure", pick: "Leh-Ladakh — beat the crowds", emoji: "🏔️" },
              { type: "Best Spiritual", pick: "Chopta-Tungnath — world's highest Shiva temple", emoji: "🕉️" },
            ].map((item) => (
              <div key={item.type} className="bg-white border border-parchment-2 rounded-xl p-4">
                <p className="text-lg mb-1">{item.emoji}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6835] mb-1">{item.type}</p>
                <p className="text-sm text-ink font-light">{item.pick}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section id="overview" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">Why May Is Tricky — And Where It Works</h2>
            <div className="bg-white border border-parchment-2 rounded-2xl p-6 mb-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-2">Avoid</p>
                  <ul className="space-y-1.5 text-sm text-muted font-light">
                    <li>Delhi — 42–44°C, suffocating</li>
                    <li>Agra — same heat, marble burns</li>
                    <li>Rajasthan plains — 44–46°C</li>
                    <li>Goa — off-season, mostly closed</li>
                    <li>Kerala backwaters — humid, airless</li>
                    <li>Darjeeling — foggy, zero views</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8B6835] font-semibold mb-2">Go Here</p>
                  <ul className="space-y-1.5 text-sm text-muted font-light">
                    <li>Himachal Pradesh — 18–24°C</li>
                    <li>Leh-Ladakh — dry, clear skies</li>
                    <li>Uttarakhand mountains — fresh</li>
                    <li>Andaman Islands — peak season</li>
                    <li>Varkala/Gokarna — still good</li>
                    <li>Hampi/Jaisalmer — empty ruins</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal font-semibold mb-2">Why It Works</p>
                  <ul className="space-y-1.5 text-sm text-muted font-light">
                    <li>Mountains: roads reopen post-winter</li>
                    <li>Schools still in session → fewer families</li>
                    <li>Beaches: before southwest monsoon</li>
                    <li>Himalayan treks opening for season</li>
                    <li>Budget: pre-peak prices in hills</li>
                    <li>Crowd-free cultural sites in plains</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted font-light leading-relaxed">
              The southwest monsoon hits Kerala around June 1st, then sweeps up the west coast. Andaman gets rain slightly later — but the northeast monsoon hasn&apos;t arrived yet in May. This narrow window between winter&apos;s end and monsoon&apos;s start is when the Himalayan roads open and the southern beaches are at their clearest.
            </p>
          </section>

          {/* Mountains */}
          <section id="mountains" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">⛰️ Mountain Destinations — Best Month for Most</h2>
            <p className="text-sm text-muted font-light mb-6">
              Himachal Pradesh, Ladakh, and Uttarakhand emerge from winter in May. Roads open, snow patches remain dramatic, and crowds are weeks away.
            </p>
            <div className="space-y-6">
              {MOUNTAINS.map((d) => <DestinationCard key={d.number} d={d} />)}
            </div>
          </section>

          {/* Beaches */}
          <section id="beaches" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🏖️ Beach Destinations — Before the Monsoon</h2>
            <p className="text-sm text-muted font-light mb-6">
              The southwest monsoon arrives June 1st in Kerala and sweeps up the west coast. May is the last clear month for most Indian beaches — and the best month for Andaman.
            </p>
            <div className="space-y-6">
              {BEACHES.map((d) => <DestinationCard key={d.number} d={d} />)}
            </div>
          </section>

          <InlineSignup />

          {/* Culture */}
          <section id="culture" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🏛️ Culture & Heritage — Hot but Empty</h2>
            <p className="text-sm text-muted font-light mb-6">
              Some of India&apos;s greatest heritage sites are actually best in summer — not because the weather is pleasant, but because they&apos;re completely empty of tourists.
            </p>
            <div className="space-y-6">
              {CULTURE.map((d) => <DestinationCard key={d.number} d={d} />)}
            </div>
          </section>

          {/* What to Avoid */}
          <section id="avoid" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">🚫 What to Avoid in May</h2>
            <div className="space-y-4">
              {[
                {
                  place: "Delhi, Agra, Varanasi",
                  reason: "42–45°C with high humidity. Agra's marble fort becomes a heat trap. Varanasi's ghats are punishing. These cities reward October–March visits — there's no good reason to be here in May.",
                },
                {
                  place: "Goa",
                  reason: "Officially off-season. Most beach shacks and restaurants close for maintenance from May onwards. Pre-monsoon humidity is unpleasant, the sea gets choppy, and prices don't reflect the lack of experience. Save Goa for October–March.",
                },
                {
                  place: "Kerala Backwaters (Alleppey, Kumarakom)",
                  reason: "Hot, humid, and closed-in on a houseboat before monsoon. The air barely moves on the backwaters in May. Beautiful in October–February when it's 28°C and breezy.",
                },
                {
                  place: "Darjeeling, Sikkim",
                  reason: "Pre-monsoon fog and haze mean you travel all that way for zero Kanchenjunga views. The entire point of visiting Darjeeling is the mountain panorama — which you won't see in May. Wait until October–November for clarity.",
                },
                {
                  place: "Northeast India (Meghalaya, Assam)",
                  reason: "Pre-monsoon heat and pre-monsoon rain — the worst of both. Meghalaya gets gorgeous in July when the monsoon is in full swing. Assam is better October–March for wildlife (Kaziranga).",
                },
              ].map((item) => (
                <div key={item.place} className="bg-white border border-parchment-2 rounded-xl p-5">
                  <p className="text-sm font-semibold text-ink mb-1.5">{item.place}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section id="tips" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">📋 Practical Tips for May Travel in India</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left p-3 text-xs font-medium text-ink">Category</th>
                    <th className="text-left p-3 text-xs font-medium text-ink">What to Know</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Book Early", note: "Andaman ferries (Makruzz, Green Ocean) book out 2–3 weeks ahead in April-May. Spiti homestays don't need advance booking but Chandratal camping does.", rowClass: "bg-white" },
                    { cat: "Road Conditions", note: "Always check BRO GREF Twitter/website for Rohtang, Kunzum Pass, and Manali-Leh highway status. Roads open week-by-week in May.", rowClass: "bg-parchment/40" },
                    { cat: "Acclimatisation", note: "Ladakh and Spiti above 3,500m require 2 rest days on arrival. Don't fly into Leh and drive to Pangong the same day. Altitude sickness is real.", rowClass: "bg-white" },
                    { cat: "Packing", note: "Mountains: layers are essential — 22°C day becomes 5°C night at altitude. Beaches: light cotton, sunscreen SPF 50+.", rowClass: "bg-parchment/40" },
                    { cat: "Monsoon Watch", note: "If going to Andaman, target first two weeks of May to be safe. Southwest monsoon arrives around May 20–25 in Andaman.", rowClass: "bg-white" },
                    { cat: "Budget", note: "May is shoulder season for most hill stations — 20–30% cheaper than June-July peak. Andaman is peak season — full prices.", rowClass: "bg-parchment/40" },
                  ].map((row) => (
                    <tr key={row.cat} className={row.rowClass}>
                      <td className="p-3 text-xs font-semibold text-ink align-top">{row.cat}</td>
                      <td className="p-3 text-xs text-muted font-light">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is May a good time to visit India?",
                  a: "May is excellent for mountains and beaches — terrible for plains. If you're going to Himachal Pradesh, Ladakh, Uttarakhand, Andaman, or Lakshadweep, May is actually one of the best months. The key is knowing which India you're visiting. Delhi, Agra, and most of Rajasthan are genuinely unpleasant in May.",
                },
                {
                  q: "Which hill station is best to visit in May?",
                  a: "Spiti Valley (roads just opening, dramatic snow-patched landscapes), Kasol and Parvati Valley (18–22°C, best month for Kheerganga trek), and Jibhi-Tirthan Valley (apple blossoms, peaceful) are the top picks. Manali and Dharamshala are also excellent pre-peak season.",
                },
                {
                  q: "Is Andaman good to visit in May?",
                  a: "Yes — April-May is Andaman's peak season. Waters are calmest, visibility for diving is best (15–20m), and temperatures are 28–30°C. The southwest monsoon hits around late May, so early-to-mid May is ideal.",
                },
                {
                  q: "Can I visit Spiti Valley in May?",
                  a: "Yes, with caveats. The Manali–Spiti road (via Kunzum Pass) usually opens late May. The Shimla–Spiti road (via Kinnaur) opens by early May. Expect snow patches, cold nights (0–5°C), and dramatic, crowd-free landscapes.",
                },
                {
                  q: "What should I avoid in India in May?",
                  a: "Delhi (42°C+), Agra, Varanasi, most of Rajasthan, Goa (off-season), Kerala backwaters (hot and humid), and Darjeeling-Sikkim (pre-monsoon fog blocks all mountain views).",
                },
                {
                  q: "Is Leh Ladakh open in May?",
                  a: "Leh town is accessible by flight year-round. The Manali–Leh highway typically opens late May. By late May, most attractions are accessible and you're ahead of June–August peak crowds. Temperature in Leh in May: 15–20°C days, 5–8°C nights.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 bg-ink rounded-2xl p-7">
            <p className="font-serif text-xl font-light text-white mb-3">
              Plan Your May India Trip
            </p>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
              Tell us where you&apos;re flying from, your dates, and whether you want mountains or beaches — we&apos;ll build a personalised May itinerary around what&apos;s actually open and good.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              Get My Free Itinerary →
            </Link>
          </div>

          <DestinationGallery
            title="India in may — Highlights"
            subtitle="The best of India in may in photos."
            spots={[
              { name: "India in may Landscape", query: "india in may india landscape scenic beautiful travel", desc: "The stunning landscapes of India in may." },
              { name: "India in may Heritage", query: "india in may temple architecture heritage india", desc: "Historic heritage and architecture in India in may." },
              { name: "India in may Culture", query: "india in may street market local culture india", desc: "Local life and culture in India in may." },
              { name: "India in may Nature", query: "india in may nature hills forest river india", desc: "Natural beauty around India in may." },
              { name: "India in may Sunset", query: "india in may sunset golden hour india travel", desc: "India in may at golden hour." },
            ]}
          />

         

          <RelatedGuides currentSlug="best-places-india-may" />
        </div>
      </main>
      <Footer />
    </>
  );
}

function DestinationCard({ d }: { d: Destination }) {
  return (
    <div className="bg-white border border-parchment-2 rounded-2xl overflow-hidden">
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold text-[#8B6835] bg-gold/10 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                {d.number}
              </span>
              {d.slug ? (
                <Link
                  href={`/blog/${d.slug}`}
                  className="font-serif text-lg font-light text-ink hover:text-gold transition-colors"
                >
                  {d.name}
                </Link>
              ) : (
                <h3 className="font-serif text-lg font-light text-ink">{d.name}</h3>
              )}
            </div>
            <p className="text-xs text-muted font-light mt-0.5 ml-8">{d.temp}</p>
          </div>
          {d.slug && (
            <Link
              href={`/blog/${d.slug}`}
              className="shrink-0 text-xs bg-gold/10 hover:bg-gold/20 text-[#8B6835] font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Full Guide →
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4 ml-8">
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">
              Crowd Level
            </span>
            <p className="text-ink font-light mt-0.5">{d.crowd}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">
              Best For
            </span>
            <p className="text-ink font-light mt-0.5">{d.bestFor}</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">
              Highlight
            </span>
            <p className="text-muted font-light mt-0.5 text-xs">{d.highlight}</p>
          </div>
        </div>

        <div className="bg-parchment rounded-xl p-4 ml-8">
          <p className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium mb-1">
            Verdict
          </p>
          <p className="text-sm text-muted font-light leading-relaxed">{d.verdict}</p>
        </div>
      </div>
    </div>
  );
}
