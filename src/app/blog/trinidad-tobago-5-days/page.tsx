import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";
const slug = "trinidad-tobago-5-days";
const canonicalUrl = `${siteUrl}/blog/${slug}`;

const data: UniversalBlogData = {
  destination: "Trinidad & Tobago",
  country: "Trinidad & Tobago",
  countryFlag: "🇹🇹",
  slug,
  heroQuery: "Trinidad Tobago Caribbean beach carnival steel pan",
  heroAlt: "Pigeon Point beach Tobago with turquoise Caribbean water and palm trees",
  category: "Caribbean",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Trinidad and Tobago packs two utterly different islands into one nation. Trinidad is the birthplace of Carnival, soca and steelpan — a pulsing, polyglot island where doubles vendors set up at dawn, Asa Wright Nature Centre attracts birders from every continent, and the rum punch flows from roadside bars long into the night. Thirty minutes by plane away, Tobago is the Caribbean you dreamed of: Pigeon Point's white sand and impossibly clear water, Buccoo Reef teeming with parrotfish and sea turtles, and leatherback turtles nesting on Grande Riviere beach in one of the most extraordinary wildlife spectacles on Earth. Five days gives you both islands and a taste of everything.",
  stats: {
    duration: "5 Days",
    budgetFrom: "USD $70",
    bestMonths: "Jan–May (Carnival: Feb/Mar)",
    airport: "POS (Port of Spain)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Port of Spain & Carnival Culture" },
    { id: "day2", emoji: "📅", label: "Day 2 — Asa Wright & Nature" },
    { id: "day3", emoji: "📅", label: "Days 3–5 — Tobago Island" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist Visa required"],
        ["Fee", "USD $50 approx (single entry)"],
        ["Processing", "5–15 business days"],
        ["Validity", "Up to 30 days on arrival approval"],
        ["Apply at", "Trinidad & Tobago High Commission or Embassy"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Apply at least 4 weeks before travel. Some applicants obtain on-arrival endorsement — confirm current policy with the embassy before booking."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU / CA — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free for most Western passports"],
        ["Stay limit", "Up to 90 days (US, UK, EU, AU, CA)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Passport validity", "Must be valid for 6 months beyond travel dates"],
        ["Currency", "Trinidad & Tobago Dollar (TTD). USD widely accepted."],
        ["Notes", "Onward/return ticket required at immigration. Proof of accommodation may be requested."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "USD $70–95/day",
      days: [
        {
          day: "Day 1",
          title: "Port of Spain Arrival & Street Food",
          items: [
            "Land at Piarco International Airport (POS); take the PTSC bus or shared maxi-taxi to Port of Spain (TTD $4–8) rather than a private taxi (TTD $150)",
            "Check in to a budget guesthouse in Woodbrook or St. Ann's (USD $30–45/night) — both are safer, walkable neighbourhoods close to the city centre",
            "Evening on Ariapita Avenue (the Strip) — the social heart of Port of Spain with open-air bars and roadside doubles stalls; doubles cost TTD $5–8 each and are the definitive Trinidad street food",
            "Visit a steelband yard in Laventille or Woodbrook if timing aligns with practice sessions (usually evenings Tue/Thu) — free and extraordinary to watch pan tuners at work",
            "Rum punch at a local rum shop (TTD $15–20) — the real rum shops have no menus and pour Angostura straight from the bottle",
          ],
          cost: "USD $45–55 (accommodation, food, local transport)",
        },
        {
          day: "Day 2",
          title: "Asa Wright Nature Centre & Northern Range",
          items: [
            "Take a shared taxi to Arima (TTD $10) then a route taxi up the Blanchisseuse Road toward Asa Wright Nature Centre (TTD $15–25 for the mountain stretch)",
            "Asa Wright Nature Centre day visitor fee: USD $25 — includes a guided veranda birdwatching session; over 200 species have been recorded here including the Oilbird colony in the caves",
            "Bring binoculars; the veranda at dawn is considered one of the top 10 birdwatching spots in the Western Hemisphere with hummingbirds, mot-mots and trogons all visible within 30 minutes",
            "Trail walk to the Dunstan Cave to observe nesting Oilbirds — eerie, unforgettable and found almost nowhere else in the world accessible to visitors",
            "Return to Port of Spain for a pepper-pot stew dinner at a local roti shop (TTD $30–40)",
          ],
          cost: "USD $55–70 (entry, transport, food)",
        },
        {
          day: "Day 3",
          title: "Fly to Tobago & Pigeon Point Beach",
          items: [
            "Morning Caribbean Airlines inter-island flight POS to ANR Robinson Airport Tobago (30 min, USD $60–80 return if booked in advance)",
            "Check in to a budget guesthouse near Crown Point (USD $35–55/night) — Crown Point is the most affordable base on Tobago, a 5-minute walk from Pigeon Point",
            "Pigeon Point Heritage Park beach: USD $5 entry fee to use the thatched jetty area; the water is shallow, crystal clear and one of the Caribbean's most photographed beaches",
            "Rent a snorkel set (USD $10/day) and explore the rocky outcrops at the eastern end of Pigeon Point where brain coral and sergeant-major fish are abundant",
            "Bake-and-shark dinner at a beach shack near Store Bay beach (TTD $40–60) — fresh shark fillet in a fry bake with chadon beni sauce",
          ],
          cost: "USD $80–100 (flight, accommodation, beach, food)",
        },
        {
          day: "Day 4",
          title: "Buccoo Reef & Nylon Pool",
          items: [
            "Morning glass-bottom boat tour to Buccoo Reef and the Nylon Pool (USD $20–25 per person from Pigeon Point or Buccoo village) — book through local operators, not resort desks, for the best price",
            "Buccoo Reef snorkelling: coral gardens with parrotfish, angelfish, spotted eagle rays and frequent sea turtle sightings; the reef was once damaged but has partially recovered under protection",
            "The Nylon Pool: a shallow sandbar in the middle of the sea with crystal-clear waist-deep water — a bizarre and beautiful Caribbean phenomenon",
            "Afternoon: Tobago Main Ridge Forest Reserve walk (free entry) — the oldest protected rainforest in the Western Hemisphere (1776); trails meander past motmots, white-tailed sabrewings and manakins",
            "Evening at Sunday School Buccoo (every Sunday, but worth visiting any evening for local bars) — rum, dancing and live parang music",
          ],
          cost: "USD $50–65 (boat tour, forest, food, rum)",
        },
        {
          day: "Day 5",
          title: "Speyside & Departure",
          items: [
            "Early morning drive to Speyside on Tobago's northeast coast (shared taxi or rented car, TTD $60–80) — the drive past the Atlantic coast is spectacular",
            "Glass-bottom boat or snorkel trip off Speyside: brain corals the size of cars, manta rays in season and the giant manta cleaning station at Anse Bateau Bay (USD $25–35)",
            "Lunch at a Speyside cookshop: stewed chicken, rice and peas, callaloo (TTD $25–35) — home-cooked Tobagonian food at its purest",
            "Return to Crown Point for the afternoon Caribbean Airlines flight back to Trinidad and onward connections",
          ],
          cost: "USD $60–80 (transport, snorkelling, food, flight)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "USD $150–200/day",
      days: [
        {
          day: "Day 1",
          title: "Port of Spain, Carnival Culture & Panyard",
          items: [
            "Arrive at Piarco; private airport transfer to a 3-star guesthouse or small hotel in Woodbrook (USD $70–100/night)",
            "Guided Port of Spain orientation tour (USD $40) covering Queen's Park Savannah, the Magnificent Seven colonial buildings, and National Museum of Trinidad and Tobago",
            "Carnival culture visit: the National Carnival Commission Museum or a costumed band camp during Carnival season (Jan–Mar); see the feathered and jewelled mas costumes being constructed",
            "Doubles and street food lunch at the corner of Ariapita and Cornelio — the best doubles vendor in the city according to locals; doubles, pholourie and black pudding (TTD $30)",
            "Dinner at Chaud restaurant in Port of Spain — contemporary Caribbean cuisine with a French edge; mains USD $20–30",
          ],
          cost: "USD $140–170 (hotel, tour, restaurant dinner)",
        },
        {
          day: "Day 2",
          title: "Asa Wright Full Day & Northern Coast",
          items: [
            "Chartered taxi to Asa Wright Nature Centre (USD $40–50 for a shared private car, 1.5 hrs from POS)",
            "Full-day visit with two guided birdwatching walks (morning and early afternoon); USD $25 entry; dawn walk from 5:30am for the best oilbird and hummingbird activity",
            "Lunch at the Asa Wright dining room — buffet of Trinidadian dishes overlooking the rainforest (included with some packages; otherwise USD $25)",
            "Afternoon drive across the Northern Range to Maracas Beach — Trinidad's most famous beach with fine golden sand and shark-and-bake vendors; USD $5 toll road",
            "Maracas Bay sunset with Richard's Shark and Bake (TTD $50–70) — the definitive Trinidadian beach meal; lines form but move fast",
          ],
          cost: "USD $130–160 (transport, entry, food)",
        },
        {
          day: "Day 3",
          title: "Tobago Arrival & Pigeon Point",
          items: [
            "Morning Caribbean Airlines flight to Tobago; taxi to a 3-star boutique hotel near Pigeon Point or Buccoo (USD $90–130/night)",
            "Afternoon at Pigeon Point Heritage Park: rent a kayak (USD $15/hr) and paddle along the reef line toward Buccoo",
            "Snorkel session on the inner reef at Store Bay — less crowded than Pigeon Point and free for hotel guests in most cases",
            "Cocktail hour at the hotel beach bar: rum punch with fresh coconut water, tropical garnishes",
            "Dinner at Seahorse Inn or La Tartaruga restaurant in Buccoo (USD $35–50/pp) — consistently recommended for fresh catch on the island",
          ],
          cost: "USD $170–210 (hotel, flight, activities, dinner)",
        },
        {
          day: "Day 4",
          title: "Buccoo Reef, Argyle Waterfall & Speyside",
          items: [
            "Morning Buccoo Reef glass-bottom boat and snorkel tour (USD $25–30 from Buccoo jetty)",
            "Nylon Pool swim — the boat tour includes a stop here; bring waterproof sandals",
            "Drive to Argyle Waterfall (USD $7 entry) — Tobago's highest waterfall at 54 m with three swimming tiers; slippery trail requires good shoes; guide included in fee",
            "Lunch at a roadside cookshop in Roxborough — curried crab and dumplings, the island's signature dish (TTD $50–70)",
            "Speyside lookout point at sunset: the view over Little Tobago island and the Atlantic is the best coastal panorama on the island",
          ],
          cost: "USD $100–130 (rental car, tours, food, waterfalls)",
        },
        {
          day: "Day 5",
          title: "Leatherback Turtle Search & Departure",
          items: [
            "Depending on season (Mar–Aug): pre-booked leatherback turtle nesting tour at Grande Riviere on Trinidad's north coast or Stonehaven Bay Tobago at night (USD $25–40 through licensed operators only)",
            "If not turtle season: sunrise snorkel at Speyside, followed by the Tobago Heritage Festival trail or a cooking class with a local family (USD $50)",
            "Final beach lunch at Englishman's Bay — the most beautiful and least-visited beach on Tobago's north coast, with calm water and no facilities",
            "Airport transfer to ANR Robinson for the afternoon flight back to POS and onward connections",
          ],
          cost: "USD $120–160 (turtle tour, snorkel, lunch, transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "USD $350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Port of Spain, Steel Pan & Gastronomy",
          items: [
            "Private airport transfer (USD $60) to a 5-star boutique hotel such as the Hyatt Regency Port of Spain or a private villa in St. Ann's (USD $200–350/night)",
            "Private Carnival culture immersion tour (USD $120) with a cultural guide — visit a mas camp, meet a pan tuner in Laventille, watch a soca artist record in a private studio if timing allows",
            "Afternoon rum tasting at Angostura Distillery (the home of Angostura Bitters since 1875) with a private guide and premium rum blends (USD $40–60 per person)",
            "Dinner at Jaffa at the Oval — one of Port of Spain's finest restaurants; mains USD $35–55; try the local red snapper with callaloo",
          ],
          cost: "USD $380–500 (villa/hotel, private tours, distillery, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Asa Wright Birding & Maracas",
          items: [
            "Private naturalist-guided dawn birding tour at Asa Wright starting at 5am (USD $180 for a private guide, 4-hour session) — the oilbird cave, hummingbird feeders and forest trails on a private basis",
            "Breakfast at the Asa Wright Great House veranda overlooking the rainforest",
            "Private vehicle to Maracas Beach — swim at the calmest Caribbean beach in Trinidad with lifeguard service",
            "Chartered boat from Maracas Bay to snorkel with manta rays and observe the northern coast sea caves (USD $120 for a 3-hour private charter)",
            "Evening at Trotters Sports Bar on Ariapita Avenue — the social heart of upscale Port of Spain; cocktails and tapas",
          ],
          cost: "USD $400–520 (private guiding, charter boat, hotel)",
        },
        {
          day: "Day 3",
          title: "Tobago Private Villa & Pigeon Point",
          items: [
            "Chartered air transfer or private Caribbean Airlines flight to Tobago; private villa rental near Pigeon Point with pool and cook (USD $300–500/night)",
            "Private boat charter around the western tip of Tobago: snorkelling at Speyside, Buccoo Reef and hidden coves not accessible by road (USD $150–200 for 4 hours)",
            "Private chef lunch on the villa terrace: freshly caught kingfish, grilled lobster, callaloo soup",
            "Afternoon massage at a luxury spa such as the Blue Waters Inn spa or private spa at Coco Reef Resort",
            "Sunset dinner on the beach arranged by villa concierge: driftwood tables, candles, local band",
          ],
          cost: "USD $550–750 (villa, private boat, chef, spa)",
        },
        {
          day: "Day 4",
          title: "Speyside Dive & Argyle Waterfall",
          items: [
            "Private certified dive guide for two dives at Speyside (USD $120 for two dives with equipment) — manta cleaning station dive and Cathedral dive site with massive brain corals are world-class",
            "Gourmet picnic delivered to Argyle Waterfall — swim in private pools above the falls before other day visitors arrive (arrange through villa or hotel concierge at 7am)",
            "Helicopter scenic flight over Tobago's north coast and offshore reefs (USD $200 for 30 min; arrange through ANR Aviation)",
            "Private rum blending class with a master blender from a local Tobago rum producer (USD $80 per person)",
          ],
          cost: "USD $450–600 (diving, helicopter, picnic, rum class)",
        },
        {
          day: "Day 5",
          title: "Leatherback Turtle Night Tour & Departure",
          items: [
            "In season (Mar–Aug): private licensed guide for leatherback turtle nesting at Stonehaven Bay or Grande Riviere at dusk (USD $60 for a private guided experience with no group crowds)",
            "Dawn snorkel session at a secluded bay arranged by villa concierge before departure",
            "Brunch at a clifftop terrace restaurant: eggs with smoked herring, fresh papaya, local cocoa chocolate with breakfast rum",
            "Private transfer to ANR Robinson Airport and private airport lounge access for the return journey",
          ],
          cost: "USD $400–550 (private turtle tour, snorkel, transfer, lounge)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "USD $30–45 (guesthouse)",
      food: "USD $15–20 (street food, roti)",
      transport: "USD $8–12 (maxi-taxi, local buses)",
      activities: "USD $20–30 (reef tour, beach entry)",
      total: "USD $70–95/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "USD $70–100 (3-star hotel)",
      food: "USD $35–55 (mix of restaurants)",
      transport: "USD $20–30 (taxis, rental car)",
      activities: "USD $40–60 (guided tours, boat)",
      total: "USD $150–200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "USD $200–500 (villa or 5-star)",
      food: "USD $80–150 (fine dining, private chef)",
      transport: "USD $50–120 (private transfers)",
      activities: "USD $120–250 (private guides, dives)",
      total: "USD $350–600/day",
    },
    {
      tier: "🎭 Carnival Season",
      accommodation: "USD $80–300 (surge pricing Feb/Mar)",
      food: "USD $25–60 (festival food, fetes)",
      transport: "USD $15–40 (shared rides, buses)",
      activities: "USD $60–200 (fete tickets, mas costume)",
      total: "USD $180–600/day",
    },
    {
      tier: "🐢 Turtle Season",
      accommodation: "USD $50–120 (Grande Riviere lodge)",
      food: "USD $20–40",
      transport: "USD $20–50 (north coast access)",
      activities: "USD $25–80 (licensed turtle tour)",
      total: "USD $115–290/day",
    },
  ],
  mistakes: [
    {
      icon: "🎭",
      title: "Not planning for Carnival season early enough",
      desc: "Trinidad Carnival (February/March) is among the world's top three carnivals. Hotels book out 6–12 months ahead and prices triple. Fete tickets sell out months in advance. If Carnival is your goal, start planning in August the prior year. If you hate crowds, avoid this window entirely.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🐠",
      title: "Only staying on one island",
      desc: "Trinidad and Tobago are completely different experiences. Trinidad is urban, cultural and natural; Tobago is beach, reef and rainforest. Flying between them takes 30 minutes and costs USD $60–80 return booked in advance. Visiting only one island means missing half the country.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Eating at tourist restaurants and skipping doubles",
      desc: "The best food in Trinidad costs under a dollar. Doubles (two bara flatbreads with curried channa) at dawn from a street vendor is the national breakfast. Pholourie, bake-and-shark, roti and pepper-pot from cookshops costs TTD $10–40 and beats any restaurant meal for authenticity and flavour.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚗",
      title: "Relying on public transport in Tobago",
      desc: "Tobago's public buses are infrequent outside Crown Point. Renting a car (USD $40–60/day) unlocks the entire island — the north coast beaches, Speyside, Argyle Waterfall and the Main Ridge Forest are all inaccessible without private transport or expensive taxis.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Swimming at unpatrolled beaches without checking conditions",
      desc: "Both islands have beaches with dangerous rip currents. Maracas Bay, Las Cuevas and some Tobago north coast beaches have powerful Atlantic swells. Always ask locals before entering unfamiliar water. Patrolled beaches include Pigeon Point, Store Bay, Maracas and Englishman's Bay.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🐦",
      title: "Book Asa Wright well in advance",
      desc: "Asa Wright Nature Centre limits day visitor numbers. Book through their official website at least 2–3 weeks ahead. Early morning (5:30–8am) is when the most species are active at the veranda feeders. The oilbird cave tours run in guided groups of 8 maximum. Book tours at https://www.getyourguide.com/s/?q=Trinidad+nature+tour&partner_id=PSZA5UI",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🐢",
      title: "See leatherback turtles nesting on Grande Riviere",
      desc: "March to August is leatherback turtle nesting season. Grande Riviere in northern Trinidad sees more nesting leatherbacks per mile of beach than almost anywhere else in the world on peak nights (400+ turtles). Book a licensed operator only — unlicensed guides disturb nesting and are illegal. The experience is profound and deeply moving.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎵",
      title: "Attend a steelband practice for free",
      desc: "Most steelbands in Port of Spain practice Tuesday and Thursday evenings year-round, intensifying before Carnival. Visiting a panyard (the outdoor practice arena) is free and genuinely one of the world's great cultural experiences. Ask your guesthouse owner or a local for the nearest panyard — they will be proud to direct you.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "💱",
      title: "Use TTD for street food, USD or card for hotels",
      desc: "The Trinidad & Tobago Dollar (TTD) is the currency but USD is widely accepted in hotels and tourist businesses. Get TTD from an airport ATM on arrival (better rates than currency exchange booths). All street food, maxi-taxis and cookshops operate in TTD only. 1 USD = approx TTD $6.80 (check current rate).",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Trinidad and Tobago safe for tourists?",
      a: "Tobago is considered very safe — comparable to other Caribbean islands — and most tourists visiting for beaches and nature have no incidents. Trinidad has a higher crime rate concentrated in specific urban areas of Port of Spain (particularly East Port of Spain and Laventille at night). In practice, tourists staying in Woodbrook, St. Ann's, St. Clair and the hotel belt face minimal risk. Use common sense, avoid late-night wandering in unfamiliar areas, and ask locals for current advice on specific neighbourhoods.",
    },
    {
      q: "What is the best time to visit Trinidad and Tobago?",
      a: "January to May is the dry season and the best time to visit both islands. Carnival falls in February or March and is spectacular but requires months of advance planning and budget for higher accommodation costs. The leatherback turtle nesting season runs March to August on Trinidad's north coast and is one of the world's great wildlife spectacles. The wet season (June to December) brings afternoon showers but fewer tourists and lower prices. Hurricane season technically runs June to November but Trinidad and Tobago sit below the main hurricane belt and are rarely affected.",
    },
    {
      q: "How do I get between Trinidad and Tobago?",
      a: "Caribbean Airlines operates 30-minute flights between Piarco (POS) and ANR Robinson Airport (TAB) on Tobago roughly 8–12 times daily. Book well in advance for USD $60–80 return. The state ferry between Port of Spain and Scarborough (Tobago) takes 5.5–6 hours and costs TTD $50–100 return — cheap but very slow and sometimes unreliable. The fast ferry (when operating) takes 2.5 hours. Flying is strongly recommended for a 5-day trip.",
    },
    {
      q: "Can I drink the tap water in Trinidad and Tobago?",
      a: "In Port of Spain and most hotels, tap water is technically treated but locals and most visitors prefer bottled water for drinking. In rural areas and on Tobago's north coast, stick to bottled water. Bottled water costs TTD $4–8 (under USD $1.50) at any shop. Staying hydrated in the Caribbean heat is essential — drink 2–3 litres daily.",
    },
  ],
  combineWith: [
    "barbados-5-days",
    "jamaica-5-days",
    "colombia-7-days",
    "costa-rica-7-days",
  ],
  relatedSlugs: [
    "barbados-5-days",
    "jamaica-5-days",
    "cuba-7-days",
    "puerto-rico-5-days",
  ],
  galleryQuery: "Trinidad Tobago Caribbean beach reef Carnival steelband",
};

export const metadata: Metadata = {
  title: "Trinidad & Tobago in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Trinidad & Tobago itinerary — Port of Spain Carnival culture, Asa Wright birdwatching, Tobago's Pigeon Point beach, Buccoo Reef snorkelling, doubles street food and leatherback turtle nesting. Visa info for Indian and Western passports.",
  keywords: [
    "Trinidad and Tobago itinerary",
    "Trinidad Tobago 5 days",
    "Trinidad Tobago travel guide 2026",
    "Trinidad Carnival",
    "Tobago Pigeon Point",
    "Buccoo Reef snorkelling",
    "Asa Wright Nature Centre",
    "Trinidad visa Indian passport",
    "leatherback turtle Trinidad",
    "Caribbean travel guide",
  ],
  openGraph: {
    title: "Trinidad & Tobago in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Port of Spain Carnival culture, Asa Wright birdwatching, Tobago's Pigeon Point beach, Buccoo Reef snorkelling and leatherback turtles — 5 days in Trinidad & Tobago from USD $70/day.",
    type: "article",
    url: canonicalUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinidad & Tobago in 5 Days: Complete 2026 Travel Guide",
    description:
      "Carnival, birdwatching, Caribbean beaches and leatherback turtles — your complete 5-day guide to Trinidad & Tobago.",
  },
  alternates: { canonical: canonicalUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Trinidad & Tobago in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Trinidad & Tobago in 5 Days",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Trinidad and Tobago",
      description:
        "A twin-island Caribbean nation — Trinidad for Carnival, steelpan, Asa Wright birdwatching and doubles street food; Tobago for Pigeon Point beach, Buccoo Reef snorkelling and leatherback turtle nesting.",
      geo: { "@type": "GeoCoordinates", latitude: 10.6918, longitude: -61.2225 },
    },
  ],
};

export default function TrinidadTobagoPage() {
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
