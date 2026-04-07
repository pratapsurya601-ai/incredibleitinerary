import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Siargao",
  country: "Philippines",
  countryFlag: "🇵🇭",
  slug: "siargao-4-days",
  heroQuery: "siargao cloud 9 surf philippines tropical island",
  heroAlt: "Cloud 9 surf break at Siargao Island Philippines with surfers on turquoise waves",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Siargao is the surf capital of the Philippines and one of Southeast Asia's last genuinely untouched island paradises. Cloud 9 — a hollow right-hand reef break — has put the island on every surfer's bucket list, but Siargao is far more than one wave. Island-hop to three tiny islets in a single morning, paddle a kayak into the cathedral stillness of Sugba Lagoon, cruise the coconut road lined with 10,000 palms at sunset, and eat the freshest tuna of your life in General Luna village. Four days gives you surf, jungle, lagoon, and every shade of blue the Mindanao Sea can offer.",
  stats: {
    duration: "4 Days",
    budgetFrom: "PHP 1,500",
    bestMonths: "Mar–May or Sep–Oct",
    airport: "IAO (Sayak)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Cloud 9 & General Luna" },
    { id: "day2", emoji: "📅", label: "Day 2 — Island Hopping" },
    { id: "day3", emoji: "📅", label: "Day 3 — Sugba Lagoon & Coconut Road" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa on Arrival",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Visa on Arrival available"],
        ["Processing", "Issued on arrival at major airports"],
        ["Fee", "Free for up to 30 days"],
        ["Validity", "30 days, extendable to 59 days at Bureau of Immigration"],
        ["Extension", "PHP 3,030 fee at BI office in Surigao City"],
        ["Documents", "Return/onward ticket, proof of funds, accommodation booking"],
        ["Notes", "Fly into Cebu (CEB) or Manila (MNL) first, then connect to Siargao (IAO). E-arrival card required."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (30 days)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "30 days on arrival, extendable to 59 days"],
        ["Extension", "Available at Bureau of Immigration, PHP 3,030"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "US citizens get 30 days free. Onward/return ticket required at immigration."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "PHP 1,500–2,200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Cloud 9 & General Luna",
          items: [
            "12:00 — Land at Sayak Airport (IAO); shared van transfer to General Luna village takes 45 minutes (PHP 200 per person) — book in advance through your hostel as vans fill up fast",
            "14:00 — Check into a fan-room guesthouse or surf hostel in General Luna (PHP 400–600/night); drop bags and head straight to Cloud 9 boardwalk (free entry) for your first view of the famous right-hand reef break",
            "15:30 — Rent a surfboard at Cloud 9 (PHP 200–300/hour) and take a beginner lesson at the sandy Jacking Horse break 200m from the main reef — calmer and ideal for learning; lessons PHP 500 including board",
            "18:00 — Sunset walk along the Cloud 9 boardwalk tower (free) — the elevated platform gives the best angle on the wave and a perfect Pacific sunset behind the coconut trees",
            "19:30 — Dinner in General Luna: grilled tuna belly (yellowfin tuna is caught daily by local fishermen) for PHP 200 at Kermit Siargao or any seafood grill along the main road; add garlic rice and a San Miguel for PHP 300 total",
          ],
          cost: "PHP 1,500–1,800 (transfer, accommodation, surf lesson, dinner)",
        },
        {
          day: "Day 2",
          title: "Island Hopping — Naked, Daku & Guyam",
          items: [
            "07:30 — Join a shared island-hopping boat from the General Luna wharf (PHP 500–600 per person for 3-island tour) — boats seat 8–12 people and depart when full; going early means calmer seas and the islands to yourselves",
            "09:00 — Naked Island: a pure sandbar with no shade or trees, just white sand and turquoise water on all sides — bring sunscreen; swimming and snorkelling around the sandbar edge takes about 1 hour",
            "11:00 — Daku Island: the largest of the three with coconut palms, a small village, and simple beach huts; buy fresh coconut (PHP 30) and eat a packed lunch or pay PHP 150 for grilled fish at a local carenderia on the island",
            "13:30 — Guyam Island: the most beautiful of the three — a tiny postcard-perfect islet with a lagoon fringe; bring a waterproof bag for your phone and spend 45 minutes snorkelling the surrounding reef",
            "15:30 — Return to General Luna; rinse off and rent a habal-habal (motorbike taxi) to cruise the Coconut Road (PHP 100–150 per trip) — the 10km strip through a tunnel of 10,000 palms glows orange at dusk",
            "19:00 — Dinner: kinilaw (raw tuna ceviche with coconut vinegar and ginger, PHP 180) at a beachfront resto; one of the best things to eat in the Philippines",
          ],
          cost: "PHP 1,600–2,000 (boat, food, motorbike, dinner)",
        },
        {
          day: "Day 3",
          title: "Sugba Lagoon & Coconut Road Sunset",
          items: [
            "06:30 — Early boat to Sugba Lagoon (1.5 hours from General Luna, PHP 800–1,000 per person in shared boat) — the lagoon is at its most glassy and turquoise in morning light before the wind picks up",
            "08:30 — Arrive Sugba Lagoon: rent a kayak (PHP 200/hour) and paddle across the emerald water to the floating platform diving board in the middle; the lagoon is surrounded by mangroves and limestone cliffs",
            "10:00 — Snorkelling at the lagoon edges (snorkel gear PHP 150 rental) — coral gardens are healthy and visibility is 10–15m; giant trevally and reef fish are common sightings",
            "12:30 — Return boat to General Luna; rest and eat lunch at a local carinderia (PHP 100–150 per meal)",
            "16:00 — Rent a motorbike for the afternoon (PHP 400–500/day) and ride the Coconut Road yourself at sunset — stop at the mangrove boardwalk at the north end (free) for a 20-minute walk among aerial roots",
            "19:30 — Dinner at Bravo Beach Resort outdoor grill (PHP 300–400/pp) — bigger budget but right on the beach with torches and live music some evenings",
          ],
          cost: "PHP 2,000–2,500 (lagoon boat, kayak, motorbike, dinner)",
        },
        {
          day: "Day 4",
          title: "Magmang Islets, Bucas Grande & Departure",
          items: [
            "05:30 — Optional pre-dawn boat tour to Magmang Islets (PHP 600–800 shared) — a cluster of mushroom-shaped limestone rock formations rising from the sea at sunrise; fewer than 5% of Siargao visitors make this trip",
            "09:00 — Return to General Luna; check out of accommodation and store bags",
            "10:00 — If time allows, a half-day speedboat trip to Bucas Grande and the Sohoton Cove marine sanctuary (3–4 hours, PHP 1,500–2,000 per person) — bioluminescent jellyfish lake and underwater caves; book 1 day ahead",
            "14:00 — Last meal of kinilaw and rice at the General Luna market before shared van transfer back to Sayak Airport (depart 2.5 hours before flight)",
          ],
          cost: "PHP 1,500–2,500 (optional tours, transfer, departure meal)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "PHP 4,000–6,500/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Cloud 9 Surf & Beachfront Dinner",
          items: [
            "12:00 — Private van transfer from Sayak Airport to a boutique resort in General Luna or Pacifico (PHP 800–1,200) — mid-range resorts include Harana Surf Resort and Paglaum Transient House",
            "14:30 — 2-hour surf lesson with a certified Cloud 9 instructor (PHP 1,500 including board and rash guard) — instructors here train international competitors and know exactly which tide window gives beginners the best waves",
            "17:30 — Cloud 9 Tower boardwalk at golden hour — borrow a longtail from your resort or rent a kayak (PHP 300/hour) to paddle alongside the surfers from the water",
            "20:00 — Dinner at Kermit Restaurant and Pizzeria (PHP 600–800/pp) — the best pizza in Siargao, made in a wood-fired oven; the seafood pasta with fresh tuna and capers is the standout dish",
          ],
          cost: "PHP 4,500–5,500 (resort, lesson, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Island Hopping & Snorkelling",
          items: [
            "07:00 — Private chartered boat for the 3-island hopping tour (PHP 2,500–3,500 per boat, fits 4 people) — leaves when you want, stops as long as you want, no rushing for the group boat schedule",
            "09:00 — Naked Island swim and snorkel; then Daku Island beach lunch at a proper bamboo table with grilled freshly-caught tanigue (mackerel, PHP 400) and fresh buko juice",
            "13:00 — Guyam Island private reef snorkel (bring your own mask and fins or rent from the boat captain for PHP 200) — the reef around Guyam has staghorn coral and schools of snapper",
            "16:00 — Coconut Road motorbike ride at dusk — rent a semi-automatic Honda (PHP 500/day); the road runs through Del Carmen municipality and the palms arch overhead creating a natural cathedral",
            "20:00 — Dinner at Bravo Beach Resort (PHP 800–1,200/pp) — beachfront tables, live acoustic music on weekends, excellent grilled prawns and fresh tuna sashimi",
          ],
          cost: "PHP 5,000–6,500 (private boat, lunch, dinner, motorbike)",
        },
        {
          day: "Day 3",
          title: "Sugba Lagoon Private Tour & Spa",
          items: [
            "06:00 — Private speedboat to Sugba Lagoon (PHP 2,500–3,500 per boat) — arrive before any day-tour boats and have the entire lagoon to yourselves for 90 minutes",
            "07:30 — Kayak and dive-platform session on the lagoon; the water is shallow enough to see the sandy bottom clearly from the kayak; snorkelling the perimeter reef reveals lionfish, blue-ringed octopus, and triggerfish",
            "11:00 — Boat continues to Bucas Grande Sohoton Cove (1-hour ride) for guided cave and jellyfish lagoon tour (PHP 500 guide fee plus park fee PHP 200)",
            "15:00 — Return to General Luna; 90-minute traditional hilot massage at a resort spa (PHP 800–1,200)",
            "20:00 — Farewell dinner at a beachfront restaurant in General Luna; order the whole grilled grouper (lapu-lapu, PHP 600–800 per fish) with garlic butter and sinigang broth",
          ],
          cost: "PHP 5,500–7,000 (private boat, Bucas Grande, spa, dinner)",
        },
        {
          day: "Day 4",
          title: "Dawn Surf Session & Departure",
          items: [
            "05:30 — Pre-dawn surf session at Cloud 9 before the crowds — dawn patrol with a guide gives you the reef mostly to yourself; rent a performance shortboard (PHP 500/day) if you surf at intermediate level",
            "08:00 — Breakfast at a cafe in General Luna: acai bowl, fresh papaya, and flat white (PHP 350)",
            "10:00 — Check out and transfer to Sayak Airport; stop at the Siargao market on the way to buy dried mangoes and bagoong (shrimp paste) as souvenirs",
          ],
          cost: "PHP 3,000–4,000 (surf, breakfast, transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "PHP 15,000–25,000/day",
      days: [
        {
          day: "Day 1",
          title: "Private Transfer, Villa Check-in & Sunset Cruise",
          items: [
            "12:00 — Private vehicle from Sayak Airport to a luxury villa resort (PHP 2,000–3,000) — Nay Palad Hideaway, Dedon Island, or private villa rentals on the northern coast offer complete seclusion with butler service",
            "15:00 — Private surf coaching session at Cloud 9 with a professional WCT-level local coach (PHP 5,000 for 2 hours) — personalised feedback on positioning, timing, and paddling technique that group lessons never offer",
            "18:30 — Private sunset sailing catamaran tour around the north coast (PHP 6,000–8,000 for 2 hours) — champagne, fresh fruit, and the best views of the island; book through resort concierge",
            "21:00 — Private chef dinner at villa: whole roasted grouper, kinilaw amuse-bouche, local crab and coconut curry (PHP 4,000–6,000 for in-villa dining experience)",
          ],
          cost: "PHP 18,000–25,000 (villa, surf coach, sailing, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Island Hopping & Underwater Drone Photography",
          items: [
            "07:00 — Private chartered speedboat for a full-day custom island hopping itinerary including Naked, Daku, Guyam, and the rarely visited Mamon Island (PHP 8,000–12,000 for the day)",
            "10:00 — Underwater photographer joins the boat to capture snorkelling footage at Guyam reef; prints and digital files delivered same evening; this is a service offered by several Siargao photography operators",
            "13:00 — Private lunch on Daku Island: resort packs a premium cooler with charcuterie, fresh ceviche, tropical fruit, and cold coconut water",
            "17:00 — Magmang Islets at afternoon light — the mushroom-rock formations are most dramatic at low tide; paddle around them in a transparent kayak (PHP 800) brought on the boat",
          ],
          cost: "PHP 15,000–20,000 (private boat, photographer, picnic)",
        },
        {
          day: "Day 3",
          title: "Sugba Lagoon Private & Sohoton Cave",
          items: [
            "05:30 — Private speedboat departs at first light for Sugba Lagoon (1.5 hours); arrive at dawn with only fishermen on the water; kayak solo on mirror-still water as the sun rises behind the cliffs",
            "09:00 — Sohoton Cove Bucas Grande private guided tour: bioluminescent jellyfish lagoon and Hagukan Cave (echo cave) with a private naturalist guide (PHP 3,000) who explains the marine ecology and geology",
            "14:00 — Return to resort; private hilot massage and herbal steam treatment at the villa (PHP 2,500 for 2 hours)",
            "20:00 — Dinner at the resort restaurant with a curated tasting menu of Filipino coastal cuisine: kinilaw, sinuglaw (tuna and pork kinilaw), grilled baby squid, and halo-halo dessert with fresh jackfruit; paired with local craft beer from Sugba Brew (PHP 5,000–8,000 per person)",
          ],
          cost: "PHP 18,000–25,000 (private boat, guide, spa, tasting menu)",
        },
        {
          day: "Day 4",
          title: "Dawn Yoga, Final Surf & Departure",
          items: [
            "06:00 — Private sunrise yoga session on the resort beach deck with a local instructor (PHP 1,500 for 60 minutes) — face the ocean as the sun rises over the Pacific",
            "08:00 — Final surf at Cloud 9 boardwalk viewing platform; if the swell is good your coach may suggest the inside reef for one last ride",
            "10:00 — Resort checkout; private vehicle to Sayak Airport with a farewell bag of fresh tropical fruit from the kitchen",
          ],
          cost: "PHP 8,000–12,000 (yoga, surf, villa checkout, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "PHP 400–700 (hostel dorm or fan guesthouse)",
      food: "PHP 300–500 (carinderias + seafood grills)",
      transport: "PHP 200–400 (shared vans + habal-habal)",
      activities: "PHP 600–1,000 (shared boat tours)",
      total: "PHP 1,500–2,600/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "PHP 2,000–4,000 (boutique resort)",
      food: "PHP 800–1,500 (restaurants + beachfront dining)",
      transport: "PHP 500–1,000 (motorbike + private transfer)",
      activities: "PHP 1,500–3,000 (private boat or surf lessons)",
      total: "PHP 4,800–9,500/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "PHP 8,000–20,000 (villa or hideaway resort)",
      food: "PHP 3,000–8,000 (in-villa chef + fine dining)",
      transport: "PHP 2,000–5,000 (private speedboat + vehicle)",
      activities: "PHP 5,000–12,000 (private coach + experiences)",
      total: "PHP 18,000–45,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🌊",
      title: "Surfing Cloud 9 reef without experience",
      desc: "Cloud 9 is a shallow, fast, hollow reef break that injures inexperienced surfers every week. Beginners should surf Jacking Horse or the beach break at General Luna. Only paddle out to the Cloud 9 reef if you can comfortably surf head-high waves elsewhere.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🛥️",
      title: "Skipping Bucas Grande and Sohoton Cove",
      desc: "Most visitors do the 3-island hop and nothing else. Sohoton Cove (2–3 hours from General Luna by speedboat) has bioluminescent jellyfish that do not sting and a cave with acoustics that sound like a cathedral. It requires an early start and advance booking but is one of the best experiences in the Philippines.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "☀️",
      title: "Visiting during typhoon season without checking forecasts",
      desc: "Siargao sits in the Philippine typhoon belt. July and August bring monsoon rains and occasional typhoons (Typhoon Odette struck in December 2021). The safest and sunniest months are March to May and September to October. Always check PAGASA forecasts before island-hopping day trips.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏍️",
      title: "Renting a motorbike without island driving experience",
      desc: "The Coconut Road and Siargao roads are largely unpaved or poorly maintained. Motorbike accidents are the leading cause of tourist injuries on the island. Wear a helmet at all times, drive slowly, and avoid riding after dark when potholes and stray dogs are invisible.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💵",
      title: "Not bringing enough cash",
      desc: "Siargao has very few ATMs and they run out of cash regularly during peak season. The only reliable ATMs are in General Luna (BDO and Landbank). Bring PHP 5,000–10,000 in cash per person from Cebu or Manila before arriving. Many resorts and restaurants do not accept cards.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🐟",
      title: "Eat at the General Luna market for the freshest fish",
      desc: "Siargao's fishermen sell yellowfin tuna, tanigue mackerel, and fresh squid directly at the General Luna market every morning. You can buy a whole tuna belly for PHP 150 and take it to a nearby grill restaurant to cook it for a PHP 50 fee. This is how locals eat and it is the best meal on the island. Book tours in advance at https://www.getyourguide.com/s/?q=Siargao&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Arrive at Sugba Lagoon before 8am",
      desc: "Sugba Lagoon is 1.5 hours from General Luna and most day-tour boats arrive between 10am and noon. If you charter a private boat (or join an early shared boat), you get 2 hours of solitude on water so clear it looks like turquoise glass. The light at 8am is also perfect for photography.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏄",
      title: "Rent a board from local shapers, not resort shops",
      desc: "Local board shapers in General Luna rent boards for PHP 200–300/hour compared to PHP 500+ at resort shops. The boards are also better-suited to the local waves. Ask your hostel or any surfer on the beach where the shaper shops are — they are on the backstreets behind the main strip.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌙",
      title: "Time your Siargao visit around the swell forecast",
      desc: "Cloud 9 works best on NE swells from October to April. The magic size is 3–6 feet: big enough to be powerful and hollow, small enough for intermediates to enjoy the inside. Use Surfline or Magic Seaweed to check the swell 5 days before arrival and plan your surf days accordingly.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get to Siargao from Manila or Cebu?",
      a: "There are direct flights from Manila (MNL) to Siargao Sayak Airport (IAO) with Cebu Pacific and Philippine Airlines, taking 1.5 hours. From Cebu (CEB), flights take 1 hour. From Surigao City on Mindanao, a fast ferry takes 2 hours and costs PHP 550. The cheapest route is typically Manila to Siargao direct. Book domestic flights 4–8 weeks ahead as they sell out during peak season.",
    },
    {
      q: "Is Siargao safe for solo female travellers?",
      a: "Siargao is considered one of the safest islands in the Philippines for solo travellers including women. General Luna is a small, tight-knit community where most residents know each other. Standard safety precautions apply: do not ride motorbikes alone after dark, keep valuables in your accommodation safe, and trust your instincts. The surf community culture is welcoming and respectful.",
    },
    {
      q: "What is the best time of year to visit Siargao?",
      a: "March to May is the dry season with calm seas and consistent swells ideal for beginner surfers. September to October brings the best swells for experienced surfers (the Siargao International Surfing Competition runs in September). November to February can have typhoons but also excellent swells. June to August is the wettest month with flatter seas and fewer tourists.",
    },
    {
      q: "Can non-surfers enjoy Siargao?",
      a: "Absolutely. Non-surfers love Siargao for island hopping (Naked, Daku, Guyam islets), Sugba Lagoon kayaking, Sohoton Cove and its jellyfish lake, coconut road motorbike rides, and some of the best fresh seafood in the Philippines. The island has a laid-back bohemian atmosphere with excellent cafes, yoga studios, and free beaches that require no surfing ability whatsoever.",
    },
  ],
  combineWith: ["palawan-5-days", "cebu-3-days", "bohol-3-days"],
  relatedSlugs: ["palawan-5-days", "bali-5-days", "philippines-island-hopping", "cebu-3-days"],
  galleryQuery: "siargao island philippines surf lagoon",
};

export const metadata: Metadata = {
  title: "Siargao in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Siargao itinerary — Cloud 9 surf break, island hopping to Naked/Daku/Guyam, Sugba Lagoon, coconut road, and Bucas Grande. Budget PHP 1,500/day to luxury villas. All visa info included.",
  keywords: [
    "Siargao itinerary",
    "Siargao 4 days",
    "Siargao travel guide 2026",
    "Cloud 9 surf Siargao",
    "Siargao island hopping",
    "Sugba Lagoon",
    "Siargao budget travel",
    "Siargao visa Indian passport",
  ],
  openGraph: {
    title: "Siargao in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cloud 9 surf, Naked Island, Sugba Lagoon, coconut road — Siargao in 4 days from PHP 1,500/day to luxury hideaway villas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/siargao-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siargao in 4 Days: Complete 2026 Itinerary",
    description:
      "Cloud 9 surf, island hopping, Sugba Lagoon and the best tuna in the Philippines. Complete budget to luxury guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/siargao-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Siargao in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Siargao in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/siargao-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Siargao",
      description:
        "Siargao Island, Philippines — home of the Cloud 9 surf break, Sugba Lagoon, island hopping to Naked, Daku and Guyam islets, and some of the best seafood in Southeast Asia.",
      geo: { "@type": "GeoCoordinates", latitude: 9.8482, longitude: 126.0458 },
    },
  ],
};

export default function SiargaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
