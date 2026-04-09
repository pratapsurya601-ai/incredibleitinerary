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
  { id: "quick-picks", label: "Quick Picks by Type", emoji: "⚡" },
  { id: "under-3hrs", label: "Under 3 Hours", emoji: "🚗" },
  { id: "3-5hrs", label: "3–5 Hours Away", emoji: "🛣️" },
  { id: "5-8hrs", label: "5–8 Hours Away", emoji: "⛰️" },
  { id: "monsoon", label: "Best in Monsoon", emoji: "🌧️" },
  { id: "planning-tips", label: "Planning Tips", emoji: "📋" },
  { id: "faq", label: "FAQ", emoji: "❓" },
];

interface Getaway {
  name: string;
  slug?: string;
  distance: string;
  time: string;
  bestFor: string;
  bestSeason: string;
  avoid: string;
  stay: string;
  cost: string;
  verdict: string;
}

const UNDER_3HRS: Getaway[] = [
  {
    name: "Nandi Hills",
    distance: "60km",
    time: "1.5 hrs",
    bestFor: "Sunrise, paragliding, cycling",
    bestSeason: "Oct–Feb (winter sunrise)",
    avoid: "Weekends — massive crowds from 5am",
    stay: "Not needed — day trip only",
    cost: "₹500–800 total (petrol + entry)",
    verdict: "Best sunrise in South India. Go on a Tuesday/Wednesday. Arrive before 5:30am in winter — the cloud sea below is unreal. Skip if you're going on a Saturday.",
  },
  {
    name: "Mysore",
    slug: "mysore-3-days",
    distance: "140km",
    time: "3 hrs via NH275",
    bestFor: "Mysore Palace, Chamundeshwari Temple, silk shopping",
    bestSeason: "Oct–Feb; Dasara (Oct) is spectacular",
    avoid: "Dasara week if you hate crowds — city is packed",
    stay: "Hotel Roopa or KSTDC Mayura Hotels (budget), Radisson (mid-range)",
    cost: "₹3,000–6,000 for 2 people (stay + food + sightseeing)",
    verdict: "The most complete weekend trip from Bangalore. Palace, zoo, Chamundi hill, Devaraja market, and good restaurants all within 15km. Dasara illuminations on weeknights are worth the extra drive.",
  },
  {
    name: "Ramanagara",
    distance: "50km",
    time: "1 hr",
    bestFor: "Rock climbing, Sholay filming location, silk weaving",
    bestSeason: "Nov–Feb",
    avoid: "Summer — rocks get dangerously hot",
    stay: "Day trip only",
    cost: "₹1,500–2,500 (climbing guide included)",
    verdict: "Where Gabbar Singh lived in Sholay. Granite boulders make it one of South India's best rock climbing spots. The Ramadevara Betta vulture sanctuary nearby is a bonus — 400+ long-billed vultures.",
  },
  {
    name: "Shivanasamudra Falls",
    distance: "130km",
    time: "2.5 hrs",
    bestFor: "Waterfall, picnic, Kaveri gorge",
    bestSeason: "Aug–Nov (monsoon fills the falls)",
    avoid: "Jan–May — reduced to a trickle",
    stay: "Day trip",
    cost: "₹1,000–1,500",
    verdict: "India's first hydroelectric station and a spectacular twin waterfall. The Gaganachukki falls are the showstopper — crashing into a deep gorge. Combine with Somnathpur temple (15th century Hoysala) on the return.",
  },
];

const THREE_TO_FIVE: Getaway[] = [
  {
    name: "Coorg (Madikeri)",
    slug: "coorg-3-days",
    distance: "265km",
    time: "5–6 hrs via NH275 through Mysuru",
    bestFor: "Coffee estates, Abbey Falls, Dubare Elephant Camp, trekking",
    bestSeason: "Oct–Mar (harvest season + clear skies)",
    avoid: "Jun–Aug — leeches everywhere on trails, heavy rain",
    stay: "Coffee estate homestays are the highlight: ₹3,000–8,000/night with all meals",
    cost: "₹8,000–15,000 for 2 people (2 nights coffee estate + food)",
    verdict: "The single best 2-night trip from Bangalore. Stay in a coffee estate, not a hotel — estates include breakfast, estate walks, and the smell of coffee blossoms. Abbey Falls is touristy but quick. Dubare Elephant Camp (7am bathing session) is genuinely memorable.",
  },
  {
    name: "Chikmagalur",
    distance: "240km",
    time: "4.5 hrs via NH373",
    bestFor: "Coffee plantations, Mullayanagiri (highest peak in Karnataka), trekking",
    bestSeason: "Sep–Feb",
    avoid: "Weekends in Jan–Feb — over-discovered recently",
    stay: "Plantation homestays ₹2,500–6,000/night, Serenity Plantation Retreat (mid-range)",
    cost: "₹7,000–12,000 for 2 people",
    verdict: "Better for serious trekkers than Coorg. Mullayanagiri at 1,930m is Karnataka's highest peak — 3-hour trek. Coffee estates are slightly less touristy than Coorg. Bababudangiri (sacred Sufi shrine surrounded by hills) is a must-see.",
  },
  {
    name: "Wayanad",
    slug: "wayanad-3-days",
    distance: "280km",
    time: "5–6 hrs (enters Kerala after Kalpetta ghat)",
    bestFor: "Chembra Peak, Edakkal Caves, Neelimala viewpoint, tea estates",
    bestSeason: "Oct–Feb",
    avoid: "Peak monsoon Jun–Jul (roads sometimes closed at Thamaraserry Pass)",
    stay: "Treehouse resorts and homestays ₹2,500–6,000",
    cost: "₹6,000–12,000 for 2 people",
    verdict: "Chembra Peak's heart-shaped lake is the Instagram image. The hike (3hrs up, 2hrs down) is strenuous but worth it. Edakkal Caves have prehistoric rock carvings 2,000+ years old. Wayanad feels less commercialised than Coorg.",
  },
  {
    name: "Kabini",
    distance: "220km",
    time: "4.5 hrs",
    bestFor: "Wildlife safari, black panther (melanistic leopard), elephant herds",
    bestSeason: "Apr–Jun (summer, animals cluster at water), Nov–Mar (cool)",
    avoid: "Monsoon — park partially closes",
    stay: "Orange County or Jungle Lodges (₹12,000–25,000/night with safaris) or budget camps near Nagarhole",
    cost: "₹15,000–35,000 for 2 people (2 nights with safaris)",
    verdict: "Nagarhole National Park is India's best bet for spotting a black panther — regular sightings since 2019. Even without the panther, elephant herds crossing the Kabini river backwaters at dawn is one of India's greatest wildlife spectacles. Book 2–3 months ahead.",
  },
  {
    name: "Ooty",
    slug: "ooty-3-days",
    distance: "270km",
    time: "5 hrs via Mysuru–Gudalur route",
    bestFor: "Nilgiri toy train, Doddabetta peak, rose garden, tea estates",
    bestSeason: "Apr–Jun (cool escape from Bangalore heat), Sep–Nov",
    avoid: "Dec–Jan — very cold nights (2–5°C), summer holidays are packed",
    stay: "Lymond House (heritage), Savoy (IHCL), budget hotels on Commercial Road",
    cost: "₹6,000–12,000 for 2 people",
    verdict: "The Nilgiri Mountain Railway (UNESCO) from Mettupalayam to Ooty is one of India's great train journeys. Book a steam engine departure when possible. Avoid Ooty town on weekends — it's chaotic. The surrounding Toda hamlets and Avalanche Lake are much better than the main sights.",
  },
  {
    name: "Pondicherry",
    slug: "pondicherry-3-days",
    distance: "310km",
    time: "5–6 hrs via ECR (East Coast Road) or NH66",
    bestFor: "French Quarter, Auroville, Sri Aurobindo Ashram, seafood",
    bestSeason: "Oct–Feb (northeast monsoon ends, pleasant)",
    avoid: "Nov–Dec — northeast monsoon brings heavy rain to Pondi",
    stay: "French Quarter heritage guesthouses ₹3,000–8,000/night (Villa Shanti, La Villa)",
    cost: "₹7,000–14,000 for 2 people",
    verdict: "The French Quarter feels like a different country — yellow colonial buildings, boulangeries, promenades. Auroville's Matrimandir is worth the early-morning meditation booking. Take the ECR from Chennai for the coast views — stop at Mahabalipuram on the way.",
  },
];

const FIVE_TO_EIGHT: Getaway[] = [
  {
    name: "Hampi",
    slug: "hampi-3-days",
    distance: "340km",
    time: "6–7 hrs via NH48 then NH67",
    bestFor: "Vijayanagara empire ruins, boulder landscapes, Virupaksha temple",
    bestSeason: "Oct–Feb",
    avoid: "Apr–Jun — 40°C+ heat on bare boulders",
    stay: "Guesthouses on the Tungabhadra river (south side) ₹800–2,500, or Kamalapur KSTDC hotel",
    cost: "₹4,000–8,000 for 2 people (2 nights + rickshaw for sights)",
    verdict: "One of India's most underrated UNESCO sites. 500+ ancient monuments spread across a landscape of giant boulders and banana plantations. Hire a bicycle (₹100/day) to explore the bazaar street, Vittala temple, elephant stables, and Queen's Bath. Sunset from Matanga Hill is extraordinary.",
  },
  {
    name: "Gokarna",
    slug: "gokarna-3-days",
    distance: "480km",
    time: "8 hrs via Dharwad or overnight bus",
    bestFor: "Om Beach, Half-Moon Beach, Kudle Beach, Mahabaleshwara temple",
    bestSeason: "Oct–Feb",
    avoid: "Monsoon — sea is rough and shacks close",
    stay: "Beach shacks at Om Beach ₹600–2,000, guesthouses in town ₹500–1,500",
    cost: "₹3,000–6,000 for 2 people (budget beach trip)",
    verdict: "Goa's quieter, cheaper, more spiritual cousin. Om Beach trek to Half-Moon and Paradise Beach (1.5hr) is one of Karnataka's best coastal walks. The Mahabaleshwara temple is a functioning Hindu temple, not a tourist sight. Crowds growing fast — go soon.",
  },
  {
    name: "Kodagu — Iruppu Falls & Brahmagiri",
    distance: "330km",
    time: "6.5 hrs via Mysuru",
    bestFor: "Iruppu Falls, Brahmagiri Peak, Nagarhole forest drive",
    bestSeason: "Oct–Feb",
    avoid: "Jul–Aug — trail to Brahmagiri closes",
    stay: "Iruppu area forest homestays ₹1,500–3,500",
    cost: "₹5,000–9,000 for 2 people",
    verdict: "Less known than central Coorg. Iruppu Falls drop straight into a river — you can wade into the shallows. Brahmagiri Peak (4hrs trek) sits on the Kerala-Karnataka border with views over two states. Very few tourists compared to Madikeri.",
  },
  {
    name: "Sakleshpur & Bisle Ghat",
    distance: "250km",
    time: "4.5 hrs via Hassan",
    bestFor: "Western Ghat trekking, coffee estates, Manjarabad Fort, Bisle viewpoint",
    bestSeason: "Sep–Feb",
    avoid: "Monsoon Jul–Aug — leeches, slippery trails",
    stay: "Coffee plantation homestays ₹2,000–5,000",
    cost: "₹5,000–9,000",
    verdict: "Bisle Ghat viewpoint shows a three-state view (Karnataka, Kerala, Tamil Nadu). The Sakleshpur to Subrahmanya trek (2 days, camping) is one of South India's most challenging and rewarding. Requires forest dept permission and a guide.",
  },
];

export default function BangaloreGetawaysClient() {
  return (
    <>
      <BlogSlugNav />
      <TableOfContents items={tocItems} />

      <main className="pt-[72px] bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1400&q=80"
            alt="Coorg coffee plantation misty hills Karnataka weekend getaway from Bangalore"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[900px]">
            <span className="inline-block bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
              Weekend Trips
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight">
              21 Best Weekend Getaways from Bangalore (2026)
            </h1>
            <p className="text-white/65 text-sm mt-3">April 7, 2026 · 15 min read</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-5 md:px-8 py-10 md:py-14">

          {/* Lede */}
          <p className="font-serif text-xl font-light text-muted italic leading-relaxed mb-8">
            Bangalore has a 3-hour radius that contains some of India&apos;s best scenery. Coffee-scented hills to the west, ancient empires to the north, UNESCO railways to the south, and beach roads to the east. These are all of them — honest about which ones to skip.
          </p>

          {/* Quick picks */}
          <section id="quick-picks">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">Quick Picks by Type</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {[
                { type: "Best Overall", pick: "Coorg — coffee estates + Abbey Falls + Dubare", emoji: "🏆" },
                { type: "Best Heritage", pick: "Mysore — Palace, Chamundeshwari, Devaraja market", emoji: "🏛️" },
                { type: "Best Wildlife", pick: "Kabini — black panther, Nagarhole NP", emoji: "🐆" },
                { type: "Best for Trek", pick: "Chikmagalur — Mullayanagiri peak", emoji: "⛰️" },
                { type: "Best Beach", pick: "Gokarna — Om Beach + Half-Moon trek", emoji: "🏖️" },
                { type: "Best Day Trip", pick: "Nandi Hills — sunrise + paragliding", emoji: "🌅" },
                { type: "Best for Culture", pick: "Hampi — Vijayanagara ruins", emoji: "🏰" },
                { type: "Best in Monsoon", pick: "Coorg / Agumbe / Dudhsagar", emoji: "🌧️" },
                { type: "Best Budget", pick: "Hampi — ₹4,000 for 2 people, 2 nights", emoji: "💰" },
              ].map((item) => (
                <div key={item.type} className="bg-white border border-parchment-2 rounded-xl p-4">
                  <p className="text-lg mb-1">{item.emoji}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6835] mb-1">{item.type}</p>
                  <p className="text-sm text-ink font-light">{item.pick}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Under 3 hrs */}
          <section id="under-3hrs" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🚗 Under 3 Hours — Day Trips</h2>
            <p className="text-sm text-muted font-light mb-6">These are best as day trips — no need to book accommodation.</p>
            <div className="space-y-6">
              {UNDER_3HRS.map((g) => (
                <GetawayCard key={g.name} g={g} />
              ))}
            </div>
          </section>

          {/* 3–5 hrs */}
          <section id="3-5hrs" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🛣️ 3–5 Hours — Perfect Weekend Trips</h2>
            <p className="text-sm text-muted font-light mb-6">Leave Friday night or early Saturday, return Sunday evening — the sweet spot for a Bangalore weekend.</p>
            <div className="space-y-6">
              {THREE_TO_FIVE.map((g) => (
                <GetawayCard key={g.name} g={g} />
              ))}
            </div>
          </section>

          <InlineSignup />

          {/* 5–8 hrs */}
          <section id="5-8hrs" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">⛰️ 5–8 Hours — Extended Weekends</h2>
            <p className="text-sm text-muted font-light mb-6">Worth it for a long weekend or if you leave Thursday/Friday night. Book accommodation in advance.</p>
            <div className="space-y-6">
              {FIVE_TO_EIGHT.map((g) => (
                <GetawayCard key={g.name} g={g} />
              ))}
            </div>
          </section>

          {/* Monsoon specials */}
          <section id="monsoon" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">🌧️ Best Destinations in Monsoon</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Most Bangaloreans avoid travel Jun–Sep. That&apos;s a mistake — the Western Ghats in monsoon are extraordinary. Here&apos;s what works and what doesn&apos;t.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Agumbe (360km)",
                  rating: "Excellent",
                  why: "India's second-highest rainfall. Giant spider webs, king cobras, Sunset Point over the Western Ghats. The last village before the rain descends.",
                },
                {
                  name: "Dudhsagar Falls (350km)",
                  rating: "Excellent",
                  why: "India's tallest waterfall only comes alive in monsoon. Jeep safari from Kulem through jungle to the falls. November access via Goa bridge is better for photos.",
                },
                {
                  name: "Jog Falls (380km)",
                  rating: "Good",
                  why: "India's highest untiered waterfall. Only has water Jun–Oct. Impressive from the viewpoint; the trek to the bottom is dangerous in rain.",
                },
                {
                  name: "Coorg (265km)",
                  rating: "For rain lovers only",
                  why: "Very lush and atmospheric, but leeches infest all forest trails. Coffee blossoms in April are worth it — early monsoon.",
                },
                {
                  name: "Hampi (340km)",
                  rating: "Avoid",
                  why: "Tungabhadra floods. Access road can be cut off. The magic of Hampi is in the dry landscape, not green.",
                },
                {
                  name: "Gokarna (480km)",
                  rating: "Avoid",
                  why: "Beach shacks closed, rough seas, no swimming. Go Oct–Mar.",
                },
              ].map((item) => (
                <div key={item.name} className={`rounded-xl p-4 border ${
                  item.rating === "Excellent" ? "bg-teal/8 border-teal/20" :
                  item.rating === "Good" ? "bg-gold/8 border-gold/20" :
                  item.rating === "Avoid" ? "bg-rust/8 border-rust/20" :
                  "bg-parchment border-parchment-2"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-medium ${
                      item.rating === "Excellent" ? "bg-teal/15 text-teal" :
                      item.rating === "Good" ? "bg-gold/15 text-[#8B6835]" :
                      item.rating === "Avoid" ? "bg-rust/15 text-rust" :
                      "bg-parchment text-muted"
                    }`}>{item.rating}</span>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Planning tips */}
          <section id="planning-tips" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">📋 Planning Tips for Bangalore Getaways</h2>
            <div className="space-y-3">
              {[
                {
                  tip: "Leave Friday night, not Saturday morning",
                  detail: "Friday 9pm–10pm departure means you arrive fresh Saturday morning. Waiting for Saturday morning means hitting Mysuru/Coorg roads at 7am with every other Bangalorean.",
                },
                {
                  tip: "Book Kabini and coffee estates 6–8 weeks ahead",
                  detail: "Kabini's Orange County and Jungle Lodges fill fast. Quality coffee estate homestays get booked months ahead for Oct–Feb season. Last-minute = slim pickings.",
                },
                {
                  tip: "NH275 (Bangalore–Mysuru) is excellent; NH48 to Hampi has patches",
                  detail: "The Bangalore–Mysuru Expressway (NH275) is highway-quality all the way. NH48 toward Hampi has some rough sections near Hospet. Budget extra time after Davangere.",
                },
                {
                  tip: "For Gokarna and long drives — overnight bus is fine",
                  detail: "KSRTC sleeper buses to Gokarna (₹600–900) leave around 9pm, arrive 5am. You wake up at the beach. Better than a 9pm drive on a tired Friday.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-parchment-2 rounded-xl p-5">
                  <p className="text-sm font-medium text-ink mb-1.5">{item.tip}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the single best weekend getaway from Bangalore for first-timers?",
                  a: "Coorg for nature and coffee culture. Mysore for heritage. If you've done both, Hampi or Kabini. Coorg is the most complete 2-day experience — coffee estate stay, waterfall, elephant camp, and great food are all within 40km of Madikeri."
                },
                {
                  q: "Can I do Ooty as a day trip from Bangalore?",
                  a: "Technically yes (270km, 5hrs one-way) but not recommended. You'd spend 10 hours driving for maybe 3 hours in Ooty. Stay overnight at minimum. The Nilgiri Mountain Railway experience also requires an overnight stay unless you're starting from Mettupalayam (4hrs from Bangalore)."
                },
                {
                  q: "Is Coorg better than Chikmagalur?",
                  a: "Coorg is more touristy but more polished — better coffee estate experiences, better homestays, more activities. Chikmagalur has better trekking (Mullayanagiri) and is slightly less discovered. If you just want a coffee estate stay, Coorg. If you want serious hiking, Chikmagalur."
                },
                {
                  q: "What are the best weekend trips from Bangalore without a car?",
                  a: "KSRTC buses are surprisingly good for most destinations: Mysore (every 30 min, ₹200–400), Coorg/Madikeri (6–7hr, ₹400–700), Hampi (overnight, ₹500–800), Gokarna (overnight, ₹600–900). Trains: Shatabdi to Mysore (2hrs, ₹200 unreserved). For Ooty, train from Bangalore to Mettupalayam then Nilgiri Mountain Railway."
                },
              ].map((faq, i) => (
                <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 bg-ink rounded-2xl p-7">
            <p className="font-serif text-xl font-light text-white mb-3">Plan a Custom South India Trip</p>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
              Want a personalised multi-stop itinerary covering Coorg, Kabini, Hampi, and beyond? We&apos;ll build it around your dates, group, and budget — free.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Get My Free Itinerary →
            </Link>
          </div>

          <DestinationGallery
            title="Weekend Getaways from bangalore — Highlights"
            subtitle="The best of Weekend Getaways from bangalore in photos."
            spots={[
              { name: "Weekend Getaways from bangalore Landscape", query: "weekend getaways from bangalore india landscape scenic beautiful travel", desc: "The stunning landscapes of Weekend Getaways from bangalore." },
              { name: "Weekend Getaways from bangalore Heritage", query: "weekend getaways from bangalore temple architecture heritage india", desc: "Historic heritage and architecture in Weekend Getaways from bangalore." },
              { name: "Weekend Getaways from bangalore Culture", query: "weekend getaways from bangalore street market local culture india", desc: "Local life and culture in Weekend Getaways from bangalore." },
              { name: "Weekend Getaways from bangalore Nature", query: "weekend getaways from bangalore nature hills forest river india", desc: "Natural beauty around Weekend Getaways from bangalore." },
              { name: "Weekend Getaways from bangalore Sunset", query: "weekend getaways from bangalore sunset golden hour india travel", desc: "Weekend Getaways from bangalore at golden hour." },
            ]}
          />

         

          <RelatedGuides currentSlug="best-weekend-getaways-from-bangalore" />
        </div>
      </main>
      <Footer />
    </>
  );
}

function GetawayCard({ g }: { g: Getaway }) {
  return (
    <div className="bg-white border border-parchment-2 rounded-2xl overflow-hidden">
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {g.slug ? (
              <Link href={`/blog/${g.slug}`} className="font-serif text-lg font-light text-ink hover:text-gold transition-colors">
                {g.name}
              </Link>
            ) : (
              <h3 className="font-serif text-lg font-light text-ink">{g.name}</h3>
            )}
            <p className="text-xs text-muted font-light mt-0.5">{g.distance} · {g.time}</p>
          </div>
          {g.slug && (
            <Link href={`/blog/${g.slug}`} className="shrink-0 text-xs bg-gold/10 hover:bg-gold/20 text-[#8B6835] font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
              Full Guide →
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">Best For</span>
            <p className="text-ink font-light mt-0.5">{g.bestFor}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">Best Season</span>
            <p className="text-ink font-light mt-0.5">{g.bestSeason}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Avoid</span>
            <p className="text-muted font-light mt-0.5 text-xs">{g.avoid}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Approx Cost (2 people)</span>
            <p className="text-muted font-light mt-0.5 text-xs">{g.cost}</p>
          </div>
        </div>

        <div className="bg-parchment rounded-xl p-4">
          <p className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium mb-1">Verdict</p>
          <p className="text-sm text-muted font-light leading-relaxed">{g.verdict}</p>
        </div>
      </div>
    </div>
  );
}
