import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Maldives",
  country: "Maldives",
  countryFlag: "🇲🇻",
  slug: "maldives-5-days",
  heroQuery: "maldives overwater bungalow turquoise lagoon coral reef",
  heroAlt: "Maldives overwater bungalow villa above turquoise lagoon with coral reef below",
  category: "Asia",
  date: "April 4, 2026",
  readTime: "13 min read",
  intro: "The Maldives is 1,200 islands and atolls scattered across the Indian Ocean — 99% water, 1% land. The overwater bungalow dream is real, but so is the secret most travel agents don't want you to know: local islands like Maafushi give you the same crystal lagoons, the same house reef snorkelling, and the same white sand beaches for 90% less than a resort. Both versions are extraordinary.",
  stats: { duration: "5 Days", budgetFrom: "$80", bestMonths: "Nov – Apr", airport: "MLE (Velana International)" },
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
        ["Visa on Arrival", "Free 30-day visa on arrival for all nationalities including Indians. No pre-approval needed — just show up."],
        ["Documents", "Valid passport, return ticket, proof of accommodation (hotel or resort booking). No bank statements required."],
        ["Getting There", "Direct flights from Mumbai, Delhi, Bengaluru, Kochi on IndiGo, Air India, and Maldivian. Flight time: 2–3.5 hrs depending on origin city."],
        ["From Male", "Speedboat to local islands like Maafushi: $10–20 one way, 45 min. Resort seaplane transfers: $300–500 return."],
      ],
    },
    {
      flag: "🌍",
      title: "Western & All Other Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "Free 30-day visa on arrival for ALL nationalities — no exceptions, no pre-approval. The Maldives is one of the most open visa policies in the world."],
        ["Extension", "Can extend to 90 days at immigration for $30. Rarely needed for tourists."],
        ["Currency", "USD is widely accepted alongside Maldivian Rufiyaa (MVR). Resorts price everything in USD. Local islands use MVR — carry both."],
        ["Tip", "Book speedboat transfers to local islands in advance — they sell out on peak season weekends. Use Bookaway or direct guesthouse booking."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$80–150/day (local island option)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Male & Transfer to Maafushi",
          items: [
            "Land at Velana International Airport (MLE), clear immigration quickly — visa on arrival is instant",
            "Take the public ferry from Male ferry terminal to Maafushi ($3, 1 hour — runs twice daily at 9am and 3pm) OR a speedboat ($15–20, 45 min — runs frequently)",
            "Check in to a guesthouse on Maafushi ($40–80/night for a double room with AC and breakfast)",
            "Afternoon: Walk Maafushi island end to end in 15 minutes — it's tiny. Find the bikini beach (designated for swimwear) on the western tip",
            "Sunset snorkel at the house reef with your guesthouse's free equipment",
            "Dinner at a local restaurant — tuna curry, roshi bread, and fresh juice for $8–12",
          ],
          cost: "$70–120 total (transport + accommodation + food)",
        },
        {
          day: "Day 2",
          title: "House Reef Snorkelling & Sandbank Excursion",
          items: [
            "6:30am — Dawn snorkel at the house reef before breakfast — turtles, reef sharks, and rays come out at first light",
            "Breakfast at your guesthouse (included)",
            "10:00am — Book a sandbank excursion through your guesthouse ($30–40 per person) — uninhabited sandbank in the middle of the lagoon, 360° of turquoise water",
            "Swim, snorkel, and picnic on the sandbank for 2–3 hours",
            "Afternoon: Rent a snorkel set ($5/day) and explore the house reef independently",
            "5:00pm — Sunset from the beach with a fresh coconut ($1.50)",
            "8:00pm — Dinner at Maafushi's main restaurant strip — $10–15",
          ],
          cost: "$60–90 total",
        },
        {
          day: "Day 3",
          title: "Diving & Dolphin Cruise",
          items: [
            "Morning: Try a discover scuba dive if you've never dived — $80–100 for a 2-tank dive with a PADI instructor at Maafushi dive school",
            "Alternatively: Snorkelling trip to nearby dive sites with manta rays and whale sharks (seasonal, $40–60)",
            "Afternoon: Rest on the beach or kayak in the lagoon (kayak rental $5/hr)",
            "5:30pm — Sunset dolphin cruise ($25–35 per person) — spinner dolphins come out at sunset in the channel between atolls",
            "7:30pm — Return as the stars come out — the Maldives has zero light pollution, the Milky Way is visible",
          ],
          cost: "$100–150 total (depending on dive/snorkel choice)",
        },
        {
          day: "Day 4",
          title: "Male City Tour & Day Resort Visit",
          items: [
            "Morning: Take a speedboat back to Male ($15, 45 min)",
            "10:00am — Male city tour: Sultan Park, Friday Mosque (Hukuru Miskiy, built 1658), fish market, local streets",
            "12:00pm — Lunch at a Male local 'short eats' café — mas huni (tuna and coconut) and roshi bread for $3",
            "2:00pm — Take a speedboat to a 'day use' resort — several resorts offer $100–200 day packages with beach, pool, lunch, and water sports",
            "Alternatively: Visit Hulhumale island (20 min from Male by ferry) — a cleaner, quieter island with good beaches",
            "Return to Maafushi or stay in Male for the final night",
          ],
          cost: "$80–200 depending on day resort choice",
        },
        {
          day: "Day 5",
          title: "Final Snorkel & Departure",
          items: [
            "Early morning: One last dawn snorkel at the house reef",
            "Breakfast and checkout",
            "Speedboat to Male airport (allow 2 hours before flight for transport + check-in)",
            "Browse the duty-free at Male Airport — local honey, dried tuna, and coral reef souvenirs are the best buys",
          ],
          cost: "$30–50 (transport + food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$300–600/day (small resort or outer island)",
      days: [
        {
          day: "Day 1",
          title: "Arrive & Speedboat to Outer Island Resort",
          items: [
            "Check in to a small boutique resort or island hotel ($150–350/night) on an outer atoll",
            "Speedboat transfer from Male ($30–60 per person each way)",
            "Afternoon snorkelling at the resort house reef",
            "Welcome sunset cocktail and fresh grilled fish dinner at the resort restaurant",
          ],
          cost: "$300–450 total",
        },
        {
          day: "Day 2",
          title: "Snorkelling Safari & Sandbank Picnic",
          items: [
            "Full-day snorkelling safari by dhoni boat ($80–120 per person) — multiple snorkel sites, reef sharks, turtles, manta rays",
            "Lunch on a private sandbank — resort-packed picnic basket",
            "Afternoon: Water sports at the resort — paddleboard, kayak, windsurfer",
            "Sunset cocktail hour on the jetty",
          ],
          cost: "$300–400 total",
        },
        {
          day: "Day 3",
          title: "Scuba Diving Certification or Day on the Water",
          items: [
            "PADI Open Water certification course ($400–600 for 3-day course) — start today, finish day 5",
            "OR 2-tank fun dive with your resort dive centre ($120–150)",
            "Afternoon: Spa treatment using island coconut and local herbs ($80–150)",
            "Evening: Dinner at the resort's beach restaurant — whole grilled lobster, $80–100",
          ],
          cost: "$350–550 total",
        },
        {
          day: "Day 4",
          title: "Fishing & Local Island Visit",
          items: [
            "Morning: Traditional Maldivian fishing trip at dawn — hand-line fishing on a traditional dhoni ($50–80)",
            "Cook your catch at the resort for lunch",
            "Afternoon: Resort speedboat to a nearby local island — see how Maldivians actually live, visit the school, mosque, and harbour",
            "Evening: Bioluminescent plankton night swim (seasonal, May–October) — the water glows electric blue as you move",
          ],
          cost: "$200–350 total",
        },
        {
          day: "Day 5",
          title: "Last Swim & Departure",
          items: [
            "Morning: Last dive or snorkel before checkout",
            "Brunch at the resort",
            "Speedboat transfer to Male airport",
          ],
          cost: "$100–150 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$1,000+/day (overwater villa resort)",
      days: [
        {
          day: "Days 1–5",
          title: "Maldives Overwater Villa Experience",
          items: [
            "Seaplane transfer from Male to your resort (15–45 min, $300–500 return) — the seaplane ride itself is a highlight, flying over the atolls",
            "Stay in an overwater bungalow at Six Senses Laamu, One&Only Reethi Rah, Soneva Jani, or Gili Lankanfushi — the world's most iconic overwater villas ($1,500–5,000/night)",
            "Private butler, personal chef, in-villa infinity pool and slide directly into the lagoon",
            "Private snorkelling guide for personal reef tours — skip the crowds, see the best spots",
            "Submarine excursion to see coral reefs you cannot access by snorkelling ($500–800 for 1 hr)",
            "Private dining on a sandbank under the stars — the resort sets up a table, candles, and a chef",
            "Whale shark snorkelling excursion (seasonal) with a marine biologist guide",
          ],
          cost: "$2,000–6,000/day all-in",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget (Local Island)", accommodation: "$40–80", food: "$15–30", transport: "$10–25", activities: "$30–100", total: "$95–235/day" },
    { tier: "✨ Mid-Range (Resort)", accommodation: "$150–350", food: "$60–120", transport: "$20–50", activities: "$80–200", total: "$310–720/day" },
    { tier: "💎 Luxury (Overwater Villa)", accommodation: "$1,500–5,000", food: "$200–500", transport: "$100–300", activities: "$200–800", total: "$2,000–6,600/day" },
  ],
  mistakes: [
    { icon: "🏝️", title: "Not Considering the Local Island Option", desc: "The Maldives government created 'local islands' policy in 2010 — guesthouses on inhabited islands like Maafushi, Thulusdhoo, and Dhigurah offer the same lagoons and house reefs as resorts for $50–100/night instead of $500–2,000. This is the secret the travel industry doesn't advertise. Budget travellers can absolutely do the Maldives.", color: "bg-red-50 border-red-200" },
    { icon: "💸", title: "Booking Overwater Villas for All 5 Nights Unnecessarily", desc: "Most visitors find that 2–3 nights in an overwater villa is more than enough to tick the bucket-list box. Spending 5 nights at $2,000–5,000/night is overkill for most travellers. Combine 2 nights at a resort with 2–3 nights on a local island for the best of both worlds at a fraction of the cost.", color: "bg-orange-50 border-orange-200" },
    { icon: "🏙️", title: "Skipping Male City Entirely", desc: "Male is one of the world's smallest and most densely populated capitals — interesting to see for a few hours. The 17th century Friday Mosque, the colourful harbour, the fish market, and the local 'short eats' cafés give context to Maldivian life. Stop for half a day before or after your island stay.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🌧️", title: "Going Without Checking Monsoon Dates", desc: "The Maldives has two monsoons. The dry season (November–April) is peak season — clear water, calm seas, excellent visibility. The wet season (May–October) brings heavy rain, rough seas, and cancelled excursions. Diving visibility also drops. November–April is strongly preferred for a first visit.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🐠", title: "Local Islands Are 90% Cheaper with the Same Ocean", desc: "Maafushi, Thulusdhoo (famous surf break), Dhigurah (whale shark season May–November), and Fulidhoo all have guesthouses, bikini beaches, and house reefs with turtles and reef sharks. You're in the same Indian Ocean as the $3,000/night resorts. The difference is the room — not the water.", color: "bg-amber-50 border-amber-200" },
    { icon: "🐢", title: "Snorkel the House Reef at Dawn, Not 10am", desc: "The house reef at Maafushi (and most local island guesthouses) is 50m from the beach. At 6:30am before breakfast, the reef is uncrowded and marine life is active — green sea turtles graze the coral, reef sharks cruise the drop-off, and Napoleon wrasse hover at the edge. By 10am, snorkel tours arrive and the animals retreat.", color: "bg-teal-50 border-teal-200" },
    { icon: "⛵", title: "Book Speedboat Transfers in Advance", desc: "Speedboats from Male to local islands like Maafushi run frequently but sell out on Friday–Saturday (the Maldivian weekend). Book your return transfer when you book your guesthouse — most guesthouses arrange this for $15–20 per person. Don't assume you can just show up at the jetty.", color: "bg-green-50 border-green-200" },
    { icon: "🧴", title: "Bring All Your Sunscreen from Home", desc: "Sunscreen in resort shops costs 3–5x the home price ($40–60 for a small bottle). Reef-safe sunscreen (required in the Maldives marine protected areas) is even harder to find. Bring 2–3 bottles from home. Also bring insect repellent, antihistamines, and any prescription medications — the outer islands have no pharmacies.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Can I visit the Maldives on a budget?", a: "Yes — the local island option makes the Maldives accessible for $80–150/day total including accommodation, food, transport, and activities. Stay on local islands like Maafushi, Thulusdhoo, or Dhigurah. You'll have the same Indian Ocean, the same house reef snorkelling, and the same white sand beaches as the resorts — minus the overwater villa and the $30 cocktails." },
    { q: "When is the best time to visit the Maldives?", a: "November to April is the dry season — calm seas, excellent visibility (20–30m), and reliable sunshine. December–February are the busiest and most expensive months. April is excellent value with fewer crowds. May–October is wet season — cheaper rates but rough seas and cancelled excursions. Whale shark season at Dhigurah is May–November." },
    { q: "How do I get from Male airport to my island?", a: "Local islands within 1 hour: speedboat ($10–25 per person, 20–90 min). Local islands over 1 hour away: domestic flight ($80–150 one way) + speedboat. Resort islands: seaplane ($300–500 return per person) or speedboat. Book transfers in advance — seaplanes only fly during daylight, so late arrivals go by speedboat." },
    { q: "Is the Maldives good for snorkelling or only diving?", a: "Both — but snorkelling is excellent even without diving. The house reefs at most local islands and resorts have turtles, reef sharks, rays, and dense coral at 2–5m depth — accessible to any swimmer. Whale sharks and manta rays at specific sites require a boat excursion but not diving — snorkellers swim on the surface while these giants pass below." },
    { q: "What is the alcohol situation in the Maldives?", a: "The Maldives is a Muslim country. Alcohol is strictly prohibited on local islands — you cannot buy or consume alcohol in Maafushi, Thulusdhoo, or any inhabited island. Resorts on private uninhabited islands are exempt from this rule and serve alcohol freely. This is the main practical difference between local island and resort experiences." },
  ],
  combineWith: ["dubai-4-days", "singapore-3-days", "bali-5-days"],
  relatedSlugs: ["dubai-4-days", "singapore-3-days", "bali-5-days", "phuket-5-days"],
  galleryQuery: "maldives overwater villa turquoise lagoon coral reef snorkelling",
};

export const metadata: Metadata = {
  title: "Maldives in 5 Days: Complete Guide (Local Islands vs Resorts, Budget to Luxury, 2026)",
  description: "5-day Maldives guide — local island option for $80/day vs overwater villa resorts, Maafushi snorkelling, whale sharks, and the free 30-day visa on arrival.",
  keywords: ["maldives itinerary 5 days", "maldives budget travel", "maldives local islands guide", "maafushi travel guide", "maldives overwater bungalow", "maldives travel 2026"],
  openGraph: {
    title: "Maldives in 5 Days: Local Islands vs Resorts 2026",
    description: "The $80/day local island secret, house reef snorkelling, and overwater villa guide.",
    images: [{ url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80", width: 1200, height: 630, alt: "Maldives overwater bungalow turquoise lagoon" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Maldives in 5 Days (2026)", description: "Local islands vs resorts — the complete guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/maldives-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Maldives in 5 Days: Complete Guide (Local Islands vs Resorts, Budget to Luxury, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Maldives 5 Days", item: "https://www.incredibleitinerary.com/blog/maldives-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Maldives",
      description: "Archipelago nation of 1,200 islands in the Indian Ocean, famous for overwater bungalows, coral reefs, and the clearest turquoise water in the world.",
    },
  ],
};

export default function MaldivesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
