import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Antalya",
  country: "Turkey",
  countryFlag: "🇹🇷",
  slug: "antalya-3-days",
  heroQuery: "antalya old city harbor turkey mediterranean turquoise coast",
  heroAlt: "Antalya old city Kaleiçi harbor with Roman ruins and turquoise Mediterranean coast Turkey",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "The Turkish Riviera's crown jewel — Antalya has Roman harbour walls, Hadrian's Gate built for a visiting emperor, waterfalls that pour directly into the Mediterranean, and the clearest turquoise water in Turkey. It's the base for exploring ancient Aspendos theatre, Perge ruins, and coastal boat trips to sea caves that Lycian sailors once navigated 2,000 years ago.",
  stats: { duration: "3 Days", budgetFrom: "₺400", bestMonths: "Apr – Jun, Sep – Oct", airport: "AYT (Antalya Airport)" },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["E-Visa", "Apply at evisa.gov.tr — $60 USD, instant to 24-hr processing. Single entry, 30-day stay."],
        ["Airport", "Antalya Airport (AYT) — direct flights from Mumbai, Delhi on IndiGo, Air Arabia, and Turkish Airlines via Istanbul."],
        ["Currency", "Turkish Lira (TRY). ATMs widely available in city centre and Kaleiçi. Garanti Bank ATMs recommended."],
        ["Getting Around", "Antalya tram line runs from airport area to Kaleiçi old city. Taxis are metered. Rent a car for Aspendos and Perge (30–40km out of city)."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa", "USA, UK, Canada, Australia need E-Visa ($60 USD). Apply at evisa.gov.tr before travel."],
        ["Visa-Free", "Japan, Korea, Singapore, most EU countries get 90 days visa-free. Check your country at evisa.gov.tr."],
        ["Flights", "Direct flights from London, Amsterdam, Frankfurt, Vienna — major European hubs. Turkish Airlines hub is Istanbul (1 hr connecting flight)."],
        ["Tip", "Kaleiçi old city is compact and walkable. Book accommodation inside the walls for the best atmosphere."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₺400–700/day (~$13–23)",
      days: [
        {
          day: "Day 1",
          title: "Kaleiçi Old City, Hadrian's Gate & Old Harbour",
          items: [
            "9:00am — Enter Kaleiçi (old city) through Hadrian's Gate — built in 130 AD for Emperor Hadrian's visit, free to walk through",
            "10:00am — Walk the Roman-era city walls around the harbour cliff — views over the Mediterranean",
            "11:00am — Antalya Museum (₺200) — one of Turkey's best — Roman statues from Perge, sarcophagi, Bronze Age finds",
            "1:00pm — Lunch in Kaleiçi: pide (Turkish flatbread) and ayran for ₺120 at a local restaurant",
            "3:00pm — Old Harbour (Yat Limanı) — Roman harbour still in use today, lined with fishing boats and yachts",
            "4:00pm — Hıdırlık Tower (free) — 2nd century Roman lighthouse with views down the cliff coast",
            "6:00pm — Stroll the harbour promenade as the sun sets over the Taurus Mountains",
            "8:00pm — Dinner at a Kaleiçi courtyard restaurant — lamb kebab and mezze, ₺180",
          ],
          cost: "₺500–650 total",
        },
        {
          day: "Day 2",
          title: "Düden Waterfalls & Konyaaltı Beach",
          items: [
            "9:00am — Upper Düden Waterfall (free) — 15km north of city, the Düden River plunges through a gorge. Walk the canyon trail.",
            "11:30am — Lower Düden Waterfall (free from the beach below) — the river falls directly 40m into the sea from a cliff. View from the boat or from Lara Beach.",
            "1:00pm — Lunch at a Lara beach restaurant — fresh grilled sea bass, ₺200",
            "3:00pm — Konyaaltı Beach (free) — 7km pebble beach backed by the Taurus Mountains, water is crystal clear",
            "5:00pm — Atatürk Park and the cliff-top promenade — free, locals come here for evening walks",
            "7:30pm — Dinner in Kaleiçi — köfte with fresh bread, ₺100",
          ],
          cost: "₺500–600 total",
        },
        {
          day: "Day 3",
          title: "Aspendos Roman Theatre & Coast Boat Trip",
          items: [
            "8:30am — Drive or take a minibus to Aspendos (50km east, ₺200 by minibus or ₺400 by taxi)",
            "9:30am — Aspendos Roman Theatre (₺350) — the best-preserved Roman theatre in the world, holds 15,000 people and still used for concerts",
            "11:30am — Perge Ancient City (₺350, 17km from Antalya) — colonnaded street, Roman baths, stadium, theatre",
            "1:00pm — Return to Antalya for lunch",
            "3:00pm — Afternoon boat trip from Old Harbour (₺300 per person, includes 3 swimming stops) — sea caves, Düden waterfall from the sea",
            "6:00pm — Return to harbour as sun sets",
            "8:00pm — Farewell dinner at the harbour — fresh fish meze, ₺250",
          ],
          cost: "₺900–1,100 total (transport + entry fees + boat)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₺1,500–3,000/day (~$50–100)",
      days: [
        {
          day: "Day 1",
          title: "Private Old City Tour & Sunset Dinner",
          items: [
            "Check in to a boutique hotel inside Kaleiçi walls (₺1,200–2,000/night)",
            "Private guided tour of Kaleiçi, Hadrian's Gate, and the Antalya Museum (₺1,000 for 3 hrs)",
            "Lunch at Seraser Fine Dining — Ottoman-influenced menu in a restored mansion",
            "Sunset cocktails at a rooftop bar overlooking the harbour",
            "Dinner at a Kaleiçi courtyard restaurant with live traditional music",
          ],
          cost: "₺2,500–3,500",
        },
        {
          day: "Day 2",
          title: "Private Boat Charter & Beach Club",
          items: [
            "Private gulet charter for the day (₺4,000–6,000 for a 6-person boat) — Düden waterfall, sea caves, hidden coves",
            "Swimming, snorkelling, lunch served on board",
            "Afternoon at a beach club on Konyaaltı (sunbed + service, ₺300–500)",
            "Dinner at Vanilla restaurant — modern Turkish cuisine",
          ],
          cost: "₺4,500–6,500",
        },
        {
          day: "Day 3",
          title: "Aspendos VIP & Countryside",
          items: [
            "Private car and guide to Aspendos and Perge (₺2,000 for car + guide full day)",
            "Picnic lunch in the Köprülü Canyon national park",
            "Optional rafting on the Köprüçay River (₺400 per person)",
            "Farewell dinner at Pio restaurant in Kaleiçi",
          ],
          cost: "₺2,500–3,500",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₺6,000+/day (~$195+)",
      days: [
        {
          day: "Days 1–3",
          title: "Antalya Turkish Riviera in Full Luxury",
          items: [
            "Stay at Mardan Palace or Rixos Premium Belek — all-inclusive 5-star resorts on Belek's private beach (₺6,000–15,000/night)",
            "Private helicopter transfer from Antalya Airport to resort",
            "Private archaeologist guide for Aspendos and Perge with exclusive early access before opening",
            "Private yacht charter along the Turquoise Coast — Kekova sunken city, Butterfly Valley, Ölüdeniz",
            "Spa treatments using traditional Ottoman hammam rituals",
            "Sunset dinner at the resort's fine-dining restaurant — fresh Aegean seafood",
          ],
          cost: "₺10,000–25,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₺300–600", food: "₺150–250", transport: "₺100–300", activities: "₺200–700", total: "₺750–1,850/day" },
    { tier: "✨ Mid-Range", accommodation: "₺1,200–2,500", food: "₺400–800", transport: "₺300–600", activities: "₺500–3,000", total: "₺2,400–6,900/day" },
    { tier: "💎 Luxury", accommodation: "₺6,000–15,000", food: "₺1,500–4,000", transport: "₺1,000–3,000", activities: "₺1,000–5,000", total: "₺9,500–27,000/day" },
  ],
  mistakes: [
    { icon: "🏛️", title: "Not Visiting Aspendos Theatre", desc: "Most visitors skip Aspendos because it's 50km from the city. This is a mistake — it's the best-preserved Roman theatre on Earth, built in 155 AD, and still acoustically perfect. A taxi there and back costs ₺400 and the entry is ₺350. Go.", color: "bg-red-50 border-red-200" },
    { icon: "💧", title: "Skipping Upper Düden Waterfall", desc: "Everyone photographs the famous Lower Düden waterfall from the sea — the cliff-fall into the Mediterranean. But the Upper Düden is a completely different experience: a forested gorge you walk through with the river crashing through rock channels. Go to both.", color: "bg-orange-50 border-orange-200" },
    { icon: "🏨", title: "Staying Only in the Resort Area", desc: "Belek and Lara resort strips are pleasant but they're not Antalya. Base yourself in Kaleiçi old city for your first two nights to walk Roman streets, eat at local restaurants, and see the harbour at sunrise — then move to a beach resort if you want.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "☀️", title: "Going in Peak Summer Heat", desc: "July and August in Antalya hit 38–42°C. Walking Kaleiçi and Aspendos in that heat is brutal. April–June and September–October have perfect 22–28°C weather, fewer crowds, and much cheaper accommodation rates.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "Kaleiçi at 8am Before the Tourists Arrive", desc: "The old city's narrow Roman-era streets are virtually empty before 9am. Walk through Hadrian's Gate, down to the harbour, and along the cliff walls in the morning light. The cats that live in Kaleiçi come out at dawn — the whole place feels like a film set.", color: "bg-amber-50 border-amber-200" },
    { icon: "⛵", title: "Take a Boat to See the Sunken City", desc: "The afternoon boat trips from the old harbour include swimming stops at sea caves and a view of the Lower Düden waterfall from the water — you can swim right up to where the river meets the sea. The boats also go south toward Kemer with its pirate-castle backdrop.", color: "bg-teal-50 border-teal-200" },
    { icon: "🐟", title: "Fresh Seafood at the Old Harbour Restaurants", desc: "The restaurants lining the old harbour are more touristy than the city centre but the fish is genuinely fresh — the boats go out daily. Order the balık çorbası (fish soup), grilled levrek (sea bass), and fresh mezze. Compare menus — prices vary 30% between restaurants.", color: "bg-green-50 border-green-200" },
    { icon: "🏺", title: "Perge Ruins Are Often Completely Empty", desc: "Perge ancient city (17km from Antalya) has a Roman colonnaded street, enormous baths, a stadium that seated 12,000, and scattered marble everywhere — and on most mornings you'll share it with almost no one. Go Tuesday–Thursday for the emptiest experience.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "What is the best time to visit Antalya?", a: "April–June and September–October are ideal — 22–28°C, low humidity, calm sea, and accommodation is 30–40% cheaper than peak summer. July–August is extremely hot (38–42°C) and very crowded with European package tourists. November–March is mild (15–20°C) and very quiet — good for ruins and city exploration." },
    { q: "What beaches are near Antalya city?", a: "Konyaaltı Beach is a 7km pebble beach directly west of the city centre — free and backed by dramatic Taurus Mountain views. Lara Beach is a long sandy beach 10km east — more resort-oriented. For the best sand beaches, drive 30km east to Belek or Side. The water everywhere is exceptionally clear." },
    { q: "How do I get from Istanbul to Antalya?", a: "Fly (1 hour, from ₺300–700 one way on Pegasus, AnadoluJet, or Turkish Airlines — the cheapest domestic route in Turkey). Bus (12 hours overnight, ₺400–600, scenic through the Taurus Mountains). The flight is always recommended — it's fast and cheap." },
    { q: "How much does Antalya cost per day?", a: "Budget travellers can do ₺500–700/day staying in Kaleiçi guesthouses, eating at local restaurants, and using public transport. Mid-range in a boutique hotel with private tours runs ₺2,000–3,500/day. A 5-star Belek resort all-inclusive is ₺6,000–15,000/night per room." },
    { q: "Is Antalya or Bodrum better?", a: "Antalya has far more history — Roman theatres, ancient ruins, a genuine old city. Bodrum is more of a party and yacht destination. For cultural travellers: Antalya. For nightlife and beach clubs: Bodrum. Antalya also has more affordable accommodation and is easier to reach from major international airports." },
  ],
  combineWith: ["istanbul-5-days", "cappadocia-3-days"],
  relatedSlugs: ["istanbul-5-days", "cappadocia-3-days", "athens-3-days", "santorini-4-days"],
  galleryQuery: "antalya old city harbor turkey mediterranean ruins",
};

export const metadata: Metadata = {
  title: "Antalya in 3 Days: Complete Guide (Kaleiçi, Aspendos & Turkish Riviera, 2026)",
  description: "3-day Antalya itinerary — Hadrian's Gate, Aspendos Roman Theatre, Düden Waterfalls, boat trips along the coast, and local seafood. Budget to luxury in Turkish Lira.",
  keywords: ["antalya itinerary 3 days", "antalya travel guide 2026", "aspendos roman theatre", "antalya old city", "turkish riviera guide", "kaleiçi antalya"],
  openGraph: {
    title: "Antalya in 3 Days: Turkish Riviera Complete Guide 2026",
    description: "Hadrian's Gate, Aspendos Theatre, Düden Waterfalls, and coastal boat trips.",
    images: [{ url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80", width: 1200, height: 630, alt: "Antalya old harbour Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Antalya in 3 Days (2026)", description: "Kaleiçi, Aspendos, waterfalls, and the Turkish Riviera." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/antalya-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Antalya in 3 Days: Complete Guide (Kaleiçi, Aspendos & Turkish Riviera, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Antalya 3 Days", item: "https://www.incredibleitinerary.com/blog/antalya-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Antalya, Turkey",
      description: "Turkish Riviera city with a Roman harbour, Hadrian's Gate, the world-class Aspendos theatre, and the clearest turquoise water in Turkey.",
    },
  ],
};

export default function AntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
