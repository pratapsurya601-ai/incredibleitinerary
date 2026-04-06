import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Langkawi",
  country: "Malaysia",
  countryFlag: "🇲🇾",
  slug: "langkawi-3-days",
  heroQuery: "langkawi beach tropical turquoise water malaysia island",
  heroAlt: "Langkawi tropical beach with turquoise water and palm trees Malaysia island",
  category: "Asia",
  date: "April 4, 2026",
  readTime: "11 min read",
  intro: "Langkawi is Malaysia's duty-free island — a 99-island archipelago where the rum costs a quarter of what you'd pay in Singapore, the cable car lifts you above jungle-covered mountains to views of the Andaman Sea, and the mangrove kayak tours put you face to face with Brahminy kites plucking fish from the water while macaques watch from the tree roots. The last big Malaysian island before Thailand, and one of the most underrated in Southeast Asia.",
  stats: {
    duration: "3 Days",
    budgetFrom: "RM 100",
    bestMonths: "Nov–Apr",
    airport: "LGK (Langkawi International)",
  },
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
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa-Free (2024)", "Under the 2024 India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free entry to Malaysia — including Langkawi."],
        ["Getting to Langkawi", "Fly to Langkawi (LGK) directly from Kuala Lumpur (1 hour, from RM 80 on AirAsia or Firefly) or take a ferry from Penang (2.75 hours, RM 70). Direct flights also from Singapore and Bangkok."],
        ["Duty-Free Status", "Langkawi is a duty-free island — alcohol, cigarettes, and chocolate are significantly cheaper than on the Malaysian mainland. You can bring a personal allowance back."],
        ["Duration", "Up to 30 days per visit. Visa-free status applies to all of Malaysia including Langkawi."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, EU, Canada, Australia, New Zealand get 90 days visa-free in all of Malaysia including Langkawi."],
        ["Duty-Free Shopping", "Alcohol in Langkawi is one-third the price of Singapore and significantly cheaper than anywhere on the Malaysian mainland. This is legally the main reason the island is popular with regional travellers."],
        ["Ferry from Thailand", "Langkawi is accessible by seasonal ferry from Koh Lipe, Thailand (the Satun Pakbara Speedboat Club operates April–October). Cross-border island hopping is possible in the right season."],
        ["Tip", "Book accommodation well in advance for November–February (peak season). Pantai Cenang accommodation fills weeks ahead during Christmas–New Year period."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "RM 100–170/day",
      days: [
        {
          day: "Day 1",
          title: "Pantai Cenang Beach & Duty-Free Shopping",
          items: [
            "Arrive at Langkawi International Airport (LGK) — the airport is tiny and charming, 10 minutes from Pantai Cenang",
            "Check in to a Pantai Cenang guesthouse or budget hotel (RM 50–100/night)",
            "Afternoon — Pantai Cenang beach (free) — the most popular beach on the island. Long, flat, with clear water in the dry season. Good for swimming and sunset watching",
            "3:00pm — Duty-free shopping at Cenang Mall and the shophouses along Jalan Pantai Cenang — rum, wine, beer, cigarettes, and chocolate are all dramatically cheaper than the mainland. A bottle of rum that costs RM 80 in KL costs RM 28 here",
            "5:30pm — Dataran Lang (Eagle Square, free) — the giant eagle statue at the ferry terminal, Langkawi's icon. Hundreds of Brahminy kites and white-bellied sea eagles circle around it at dusk",
            "7:30pm — Dinner at Cenang Mall food court (RM 8–15 per dish) — nasi goreng, mee goreng, char kway teow. Multiple stalls, choose what smells good",
          ],
          cost: "RM 100–140 total",
        },
        {
          day: "Day 2",
          title: "Cable Car, Sky Bridge & Eagle Watching",
          items: [
            "9:00am — Langkawi Cable Car (RM 55) at Oriental Village, Burau Bay — 15-minute gondola ride to the summit of Mat Cincang mountain (708m). One of the steepest cable cars in the world",
            "At the top — views over the entire archipelago to Thailand on clear days, down into the jungle canopy",
            "Sky Bridge (RM 10 extra) — curved pedestrian suspension bridge at the summit, hanging over the jungle gorge",
            "12:00pm — Lunch at a restaurant near Pantai Tengah or back at Oriental Village",
            "2:00pm — Dataran Lang eagle watching — the best time for eagle activity is late afternoon. Brahminy kites with their rust-brown plumage and white-bellied sea eagles are both present in large numbers",
            "4:30pm — Pantai Tengah beach (quieter than Cenang, less commercial, good for swimming)",
            "7:00pm — Sunset cocktails at a beach bar on Pantai Cenang — rum punch with local prices",
          ],
          cost: "RM 100–130 total",
        },
        {
          day: "Day 3",
          title: "Mangrove Kayak Through Kilim Geoforest Park",
          items: [
            "8:30am — Mangrove kayak tour through Kilim Geoforest Park (RM 80 shared tour, 3 hours) — paddle through limestone karst formations, mangrove tunnels, and open sea channels",
            "Eagles catching fish from the water surface — your guide will feed fish scraps to attract eagles that dive within metres of the kayak",
            "Macaques in the mangrove trees, monitor lizards on the banks, kingfishers darting through the roots",
            "Limestone caves accessible by kayak — The Bat Cave has thousands of cave swiftlets",
            "12:00pm — Return to Pantai Cenang for lunch",
            "2:00pm — Last swim at the beach or a second round of duty-free shopping before departure",
            "4:00pm — Depart from LGK Airport or take the evening ferry to Penang",
          ],
          cost: "RM 100–130 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "RM 350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Boutique Resort Arrival & Beach Club",
          items: [
            "Check in to The Danna Langkawi, Casa del Mar, or Meritus Pelangi Beach Resort — beachfront boutique properties on Pantai Cenang",
            "Afternoon: resort beach club with sun loungers, swimming pool, and Andaman views",
            "Sunset cocktails at the resort bar or at Pantai Cenang beach",
            "Dinner at La Sal at Casa del Mar — Mediterranean beachfront restaurant, tables on the sand",
          ],
          cost: "RM 400–550 total",
        },
        {
          day: "Day 2",
          title: "Private Cable Car & Island Hopping",
          items: [
            "Morning: Langkawi Cable Car and Sky Bridge (book first gondola of the day)",
            "Afternoon: private island hopping boat charter (RM 200–300 for 3–4 hours) — visit Pulau Dayang Bunting (Pregnant Maiden Lake — freshwater lake inside an island, good for swimming), snorkelling at Pulau Payar marine park",
            "Sunset dinner at Bon Ton Restaurant — housed in antique Malay wooden houses, surrounded by a cat sanctuary",
          ],
          cost: "RM 380–500 total",
        },
        {
          day: "Day 3",
          title: "Private Mangrove Tour & Farewell",
          items: [
            "Private mangrove and eagle watching boat tour (RM 200 for a private boat, 3 hours) — more flexibility than shared tours, guide feeds eagles at closer range",
            "Kilim Geoforest Park fish farm visit",
            "Farewell lunch at Ikan Bakar Mutiara (grilled fish on the jetty) — the freshest fish in Langkawi",
            "Afternoon spa treatment before departure",
          ],
          cost: "RM 400–500 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "RM 1,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Four Seasons Langkawi — Arrival",
          items: [
            "Check in to Four Seasons Resort Langkawi (private beach villas with plunge pools) or The Datai Langkawi (surrounded by ancient rainforest)",
            "Private resort naturalist tour of the rainforest surrounding The Datai",
            "Afternoon: overwater villa pool and Andaman Sea views",
            "Dinner at The Datai's The Beach Club or Four Seasons Serai Restaurant",
          ],
          cost: "RM 2,000–3,500 total",
        },
        {
          day: "Day 2",
          title: "Private Yacht & Andaman Islands",
          items: [
            "Full-day private sailing yacht charter (RM 800–1,500 for the day) — sail to uninhabited islands in the Langkawi archipelago",
            "Snorkelling in clear water, beach picnic lunch prepared on board",
            "Anchor at a private bay for sunset with cocktails",
            "Dinner at Gulai House at The Datai — traditional Malay cuisine in a jungle setting",
          ],
          cost: "RM 1,500–2,500 total",
        },
        {
          day: "Day 3",
          title: "Rainforest Spa & Private Mangrove",
          items: [
            "Morning: signature spa treatment at Four Seasons (overwater treatment rooms) or The Datai Spa",
            "Private mangrove boat tour with a marine biologist guide",
            "Afternoon: resort leisure",
            "Farewell dinner at Kelapa at Four Seasons — contemporary Malaysian cuisine beachfront",
          ],
          cost: "RM 1,200–2,000 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "RM 50–100", food: "RM 25–45", transport: "RM 20–40", activities: "RM 30–60", total: "RM 125–245/day" },
    { tier: "✨ Mid-Range", accommodation: "RM 200–450", food: "RM 80–150", transport: "RM 40–80", activities: "RM 80–150", total: "RM 400–830/day" },
    { tier: "💎 Luxury", accommodation: "RM 800–3,000", food: "RM 200–500", transport: "RM 100–300", activities: "RM 200–500", total: "RM 1,300–4,300/day" },
  ],
  mistakes: [
    {
      icon: "🌧️",
      title: "Coming During Monsoon Season",
      desc: "Langkawi's west coast (where Pantai Cenang is) faces the southwest monsoon from May to September. During this period, the sea is rough, many boat tours are cancelled, and rain can be persistent. The best season is November to April — calm seas, clear water, and the best conditions for the mangrove tours and island hopping. Check seasonality before booking.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🛒",
      title: "Missing the Duty-Free Opportunity",
      desc: "Langkawi's duty-free status is genuine and significant. Alcohol is sold openly in supermarkets at Malaysian mainland prices minus the alcohol tax — a bottle of wine costs RM 25–35, rum RM 28–45, imported whisky RM 80–100. Chocolate and cigarettes are also cheaper. There are limits on what you can take back to the mainland (1 litre of alcohol per person) but for consumption on the island, it's remarkable value.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🛵",
      title: "Not Renting a Motorbike or Car",
      desc: "Langkawi has almost no public transport between beaches and attractions. Taxis are expensive and scarce. Renting a scooter (RM 35/day) or car (RM 70–100/day) is essential for getting around. Most guesthouses and rental shops near Pantai Cenang offer motorbike hire. Drive on the left. Roads are good.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🦅",
      title: "Skipping the Mangrove Tour",
      desc: "Many visitors spend all 3 days on the beach and skip Kilim Geoforest Park. The mangrove kayak or boat tour — eagles diving for fish at arm's length, limestone cave tunnels, the eerie beauty of the mangrove channels — is one of the best wildlife experiences in all of Malaysia. It's RM 80–200 and available every morning.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🦅",
      title: "Eagle Square at Dusk — Hundreds of Eagles Feeding",
      desc: "Dataran Lang (Eagle Square) near the Kuah ferry terminal has a reliable eagle feeding phenomenon at dusk. Fishing boats return and discard fish scraps — Brahminy kites and white-bellied sea eagles circle in dozens, diving and catching. Bring a long lens camera if you have one. It's free and genuinely spectacular.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Pantai Cenang Has the Best Sunset in Langkawi",
      desc: "Pantai Cenang faces west into the Andaman Sea — the sunset is directly ahead of you from the beach. From November to April with clear skies, the sun drops into the sea in a clean line. Bring a drink from a duty-free shop, sit on the sand, and watch. The beach bars also do passable cocktails.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "⛴️",
      title: "Ferry to Koh Lipe (Thailand) — Seasonal Island Hopping",
      desc: "From approximately April to October (check current seasonal schedules), a speedboat ferry runs between Langkawi and Koh Lipe in Thailand — roughly 1.5 hours across international waters. Koh Lipe is one of Thailand's most beautiful small islands. Combine Langkawi and Koh Lipe for a genuine cross-border island hop that very few travellers do.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🥃",
      title: "Duty-Free Rum and Wine at One-Third of Singapore Prices",
      desc: "Stock up at the duty-free shops along Pantai Cenang and in Kuah town. Langkawi's Duty Free City has the widest selection. A bottle of Mount Gay rum costs about RM 28. A decent Chilean wine is RM 25. Imported single malt whisky at RM 80–120. These prices apply only on the island — you'll pay triple in Singapore or double on the mainland.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "When is the best time to visit Langkawi?",
      a: "November to April is the dry season for the west coast of Langkawi where the main beaches and Pantai Cenang are. December to February is peak season — calm seas, clear skies, and good conditions for boat tours and snorkelling. May to September is monsoon season for the west coast — rough seas, cancelled boat tours, and persistent rain. Check the seasonal ferry to Koh Lipe if you're planning to island hop.",
    },
    {
      q: "Is Langkawi visa-free for Indian passport holders?",
      a: "Yes — under the 2024 India-Malaysia visa-free agreement, Indian nationals get 30 days visa-free entry to Malaysia including Langkawi. You can fly directly from India to Langkawi (LGK) via KL or arrive from Penang by ferry. Confirm current visa status before travel as policies can be updated.",
    },
    {
      q: "How do I get around Langkawi?",
      a: "Rent a motorbike (RM 35/day) or car (RM 70–100/day) — this is the only practical option. Public buses are minimal and taxis are expensive (RM 30–50 per trip) and unreliable. Almost every hotel and guesthouse can arrange or direct you to rental shops. International driving licence is accepted.",
    },
    {
      q: "Is Langkawi good for families?",
      a: "Yes — the cable car, the eagle watching, the mangrove boat tours, the duty-free chocolate shops, and the calm beach swimming in the dry season make it very family-friendly. The Underwater World aquarium at Pantai Cenang (RM 38 for adults) is popular with children. Pantai Cenang beach is gentle with minimal surf in the dry season.",
    },
    {
      q: "Langkawi vs Penang — which is better for 3 days?",
      a: "Different destinations entirely. Langkawi is a beach and nature island — cable car, mangrove wildlife, duty-free, and the Andaman Sea. Penang is a city destination — UNESCO heritage, world-class street food, street art, and culture. For a beach holiday, Langkawi. For food and culture, Penang. Most travellers do both in one Malaysia trip.",
    },
  ],
  combineWith: ["kuala-lumpur-3-days", "penang-3-days", "singapore-3-days"],
  relatedSlugs: ["kuala-lumpur-3-days", "penang-3-days", "singapore-3-days", "bangkok-4-days"],
  galleryQuery: "langkawi beach eagles mangrove cable car andaman sea malaysia island",
};

export const metadata: Metadata = {
  title: "Langkawi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Langkawi plans — Budget, Mid-Range, Luxury — covering the cable car, mangrove eagle tours, Pantai Cenang beach, duty-free shopping, and the ferry to Koh Lipe.",
  keywords: [
    "langkawi itinerary 3 days",
    "langkawi travel guide 2026",
    "langkawi cable car sky bridge",
    "kilim geoforest park kayak",
    "langkawi duty free",
    "pantai cenang beach",
    "langkawi mangrove tour",
    "malaysia island holiday",
  ],
  openGraph: {
    title: "Langkawi in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Cable car, mangrove eagle tours, Pantai Cenang beach, duty-free rum — 3 complete Langkawi plans with real RM costs.",
    images: [{ url: "https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80", width: 1200, height: 630, alt: "Langkawi tropical beach turquoise water Malaysia island" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Langkawi", "Malaysia", "Travel", "Itinerary", "Asia", "Beaches"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Langkawi in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, cable car, mangrove eagles, duty-free tips — real RM costs.",
    images: ["https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/langkawi-3-days#article",
      headline: "Langkawi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Langkawi plans covering the cable car, Kilim Geoforest mangrove tours, Pantai Cenang beach, duty-free shopping, and the Koh Lipe ferry.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
      keywords: "langkawi itinerary, langkawi cable car, kilim geoforest, pantai cenang, duty free langkawi, langkawi eagles, koh lipe ferry",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4700,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Langkawi in 3 Days", item: "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Langkawi, Malaysia",
      description: "Malaysia's duty-free island archipelago, known for the cable car over Mat Cincang mountain, Kilim Geoforest mangrove eagle watching, and Pantai Cenang beach.",
      url: "https://www.incredibleitinerary.com/blog/langkawi-3-days",
      touristType: ["Beach Tourism", "Nature Tourism", "Wildlife Tourism", "Island Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "When is the best time to visit Langkawi?", acceptedAnswer: { "@type": "Answer", text: "November to April for dry season and calm seas. December–February is peak season. May–September is monsoon season — rough seas and cancelled boat tours on the west coast." } },
        { "@type": "Question", name: "Is Langkawi visa-free for Indian passport holders?", acceptedAnswer: { "@type": "Answer", text: "Yes — 30 days visa-free under the 2024 India-Malaysia agreement. Confirm current policy before travel." } },
        { "@type": "Question", name: "How do I get around Langkawi?", acceptedAnswer: { "@type": "Answer", text: "Rent a motorbike (RM 35/day) or car (RM 70–100/day). Public buses are minimal, taxis expensive. Almost all hotels can direct you to rentals." } },
        { "@type": "Question", name: "Is Langkawi good for families?", acceptedAnswer: { "@type": "Answer", text: "Yes — cable car, eagle watching, mangrove boat tours, duty-free chocolate, and calm beach swimming in dry season. Underwater World aquarium (RM 38 adults) popular with children." } },
        { "@type": "Question", name: "Langkawi vs Penang — which is better for 3 days?", acceptedAnswer: { "@type": "Answer", text: "Different destinations. Langkawi for beach and nature. Penang for UNESCO heritage, world-class street food, and culture. Most travellers do both in one Malaysia trip." } },
      ],
};

export default function LangkawiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
