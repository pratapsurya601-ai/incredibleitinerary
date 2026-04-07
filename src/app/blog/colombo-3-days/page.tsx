import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Colombo",
  country: "Sri Lanka",
  countryFlag: "🇱🇰",
  slug: "colombo-3-days",
  heroQuery: "colombo sri lanka galle face green ocean sunset",
  heroAlt: "Galle Face Green seafront promenade at sunset with the Colombo skyline behind",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Colombo defies its underdog reputation at every turn. The Galle Face Green at sunset is a kilometre-long ocean promenade where kite vendors, crab-eating families, and business-suited professionals share the same sea breeze. The National Museum holds the tooth relic crown jewels of Kandyan kings. Pettah bazaar is the most frenetic market in South Asia. And the Ministry of Crab, where Sri Lanka's cricket heroes serve whole crabs in a Dutch hospital from 1681, is one of Asia's most extraordinary dining experiences. Three days, done properly.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$35",
    bestMonths: "Dec–Mar",
    airport: "CMB",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Galle Face Green & Pettah" },
    { id: "day2", emoji: "📅", label: "Day 2 — Temple, Museum & Dutch Hospital" },
    { id: "day3", emoji: "📅", label: "Day 3 — Kandy Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — ETA Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Electronic Travel Authorisation (ETA)"],
        ["Processing", "Within 24 hours (usually minutes)"],
        ["Fee", "$20 USD (tourist single entry)"],
        ["Validity", "30 days stay, 6 months from issue"],
        ["Apply at", "eta.gov.lk (official Sri Lanka ETA portal)"],
        ["Documents", "Passport details, accommodation address, return ticket"],
        ["Notes", "Indian passport holders can also apply on arrival for $35 but online ETA is faster and cheaper. Ensure passport is valid 6 months beyond travel dates."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — ETA Required",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Electronic Travel Authorisation (ETA)"],
        ["Processing", "Within 24 hours (usually instant)"],
        ["Fee", "$20 USD (tourist single entry)"],
        ["Validity", "30 days stay, 6 months from issue"],
        ["Passport", "Must be valid 6+ months beyond intended travel dates"],
        ["Extension", "Extendable at Department of Immigration for up to 180 days"],
        ["Notes", "Apply only through eta.gov.lk (official). Third-party sites charge more. Multiple entry ETA is $35."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$35–55/day",
      days: [
        {
          day: "Day 1",
          title: "Galle Face Green, Pettah Bazaar & Kottu Roti",
          items: [
            "09:00 — Tuk-tuk from guesthouse to Pettah bazaar (Rs 150, about $0.50): the most chaotic and colourful market district in South Asia; separate streets for fabric, spices, electronics, fruit, and fish",
            "09:30 — Old Town Hall and the Dutch Period Museum in Pettah: the Dutch colonial building (1780) has free entry and displays ceramics, furniture, and maps from VOC-era Ceylon",
            "11:00 — Jami Ul-Alfar Mosque (Red Mosque) on Second Cross Street: the red-and-white candy-striped 1909 mosque is Colombo's most photographed building; non-Muslim visitors welcome with covered shoulders and removed shoes",
            "13:00 — Lunch at a Pettah rice-and-curry canteen: Rs 300–450 ($1–1.50) for a full plate of rice with 4–5 curries, papadum, and sambol — the most authentic and cheapest meal in Colombo",
            "15:30 — Walk to Galle Face Green: the 1.5km ocean promenade with kite vendors, snack stalls selling isso wade (prawn fritters), and spectacular afternoon sea breeze; an isso wade costs Rs 60 ($0.20)",
            "18:30 — Sunset at Galle Face Green: one of Asia's great urban sunset spots; buy a bag of isso wade and a King Coconut water (Rs 80) and watch the sun drop into the Indian Ocean",
            "20:00 — Dinner: kottu roti at a roadside restaurant on Galle Road; shredded roti chopped with vegetables, egg, and curry sauce on a flat iron griddle for Rs 450–600; the rhythmic clatter of metal blades is a Colombo soundtrack",
          ],
          cost: "$18–25 (market, lunch, Galle Face snacks, kottu roti)",
        },
        {
          day: "Day 2",
          title: "Gangaramaya Temple, National Museum & Crab Curry",
          items: [
            "08:30 — Gangaramaya Temple on Beira Lake: entry Rs 300 ($1); the temple museum is a magnificent hoard of Buddha statues, ivory, vintage cars, and ceremonial elephants donated by devotees from around the world",
            "10:00 — Seema Malaka floating temple on Beira Lake: a serene wooden pavilion on pontoons accessible from Gangaramaya; monks meditate here at dawn and dusk; Rs 300 entry",
            "11:30 — Tuk-tuk to the National Museum of Sri Lanka on Marcus Fernando Mawatha: entry Rs 500; highlights include the original throne and crown of the Kandyan kings, and the Tooth Relic replica — one of the most important collections in South Asia",
            "13:30 — Lunch at Curry Leaf restaurant (Hilton rooftop) for a budget fixed-price Sri Lankan buffet: Rs 1,800 ($6); incredible views of Beira Lake from the open terrace",
            "15:30 — Dutch Hospital Shopping Precinct in Fort: the oldest colonial building in Colombo (1681), now a preserved shopping and dining complex; the architecture alone is worth visiting for free",
            "19:00 — Dinner: Ministry of Crab at Dutch Hospital (budget option: share a 500g crab for Rs 4,500 split two ways; the garlic chilli crab preparation is outstanding); booking essential at ministryofcrab.com",
          ],
          cost: "$30–45 (temples, museum, Dutch Hospital, Ministry of Crab share)",
        },
        {
          day: "Day 3",
          title: "Day Trip to Kandy by Train",
          items: [
            "06:30 — Colombo Fort railway station: second-class train to Kandy departs at 6:55am; ticket Rs 200 ($0.65); the 3-hour journey through rubber and coconut estates and mountain tunnels is one of the great railway rides of Asia",
            "10:00 — Arrive Kandy station; tuk-tuk to the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa): entry Rs 1,500 ($5); the tooth of the Buddha is the most important Buddhist relic outside of Thailand and draws pilgrims from across Asia",
            "12:00 — Walk around Kandy Lake: the artificial lake built by the last Kandyan king in 1807, surrounded by the cloud forest hills; Kandy is Sri Lanka's spiritual capital",
            "13:00 — Lunch at a Kandy town rice-and-curry restaurant: Rs 400–600 for authentic upcountry Sri Lankan cooking with jackfruit curry and pol sambol",
            "15:30 — Return train to Colombo: departs 3:40pm or 5:35pm from Kandy station; second class Rs 200; arrive Colombo Fort by 7pm",
            "20:00 — Final dinner in Colombo: roti and dhal at a Muslim restaurant on Maradana Road for Rs 300, or treat yourself to crab curry at Beach Wadiya seafood restaurant on Station Road ($10–15 pp)",
          ],
          cost: "$18–28 (train, Tooth Relic, lunch, return, dinner)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$100–150/day",
      days: [
        {
          day: "Day 1",
          title: "Fort, Pettah & Galle Face Sunset Dinner",
          items: [
            "09:00 — Private tuk-tuk for the morning ($8–10) to Pettah Market, Old Town Hall, and the Dutch Period Museum with an English-speaking guide (Rs 2,500 for 2 hours): the stories of VOC merchant Colombo are extraordinary",
            "11:00 — Jami Ul-Alfar Mosque and the Kayman's Gate ruins: the historic gateway to Dutch-era Colombo, hidden in an alley behind the Fort bus station",
            "13:00 — Lunch at Ministry of Crab Dutch Hospital: a table for two for crab soup, garlic chilli mud crab, and coconut ice cream; Rs 6,000–9,000 per person; book 48 hours ahead at ministryofcrab.com",
            "15:30 — Walk the Fort business district: Chatham Street, the colonial General Post Office (1891), and the Cargills department store building for its ornate Victorian shopfront",
            "17:30 — Sunset at Galle Face Green: promenade walk with isso wade and local snacks from street vendors",
            "20:00 — Dinner at Naga at Shangri-La: rooftop Indian Ocean view with a fusion Sri Lankan-contemporary menu; Rs 4,500–6,000 per person; book ahead for a terrace table",
          ],
          cost: "$90–120 (guide, Ministry of Crab, Naga dinner, transport)",
        },
        {
          day: "Day 2",
          title: "Gangaramaya, National Museum & Dutch Hospital",
          items: [
            "08:00 — Gangaramaya Temple at opening for the dawn puja ceremony: monks chant and devotees offer lotus flowers and jasmine in the most atmospheric prayer ritual in Colombo",
            "10:00 — National Museum private guided tour ($30 for 90 minutes): a licensed guide brings the Kandyan crown jewels and ancient chronicles to life beyond the exhibit labels",
            "13:00 — Lunch at the Kingsbury Hotel all-day dining for a Sri Lankan set menu with ocean views: Rs 2,500 per person",
            "15:00 — Dutch Hospital Shopping Precinct: explore the boutique stores selling Sri Lankan artisan products (cotton, batik, gem-set silver); the colonial stone-vaulted corridors are extraordinary",
            "17:00 — Barefoot Gallery on Galle Road: the finest Sri Lankan crafts, textiles, and contemporary art gallery in Colombo; also has a bookshop and garden cafe for afternoon tea",
            "20:00 — Dinner at Noorani restaurant: legendary Colombo institution since 1942 serving the best biryani in the city; Rs 2,000 per person for the full spread",
          ],
          cost: "$100–130 (guided tour, museum, lunch, Dutch Hospital shopping, dinner)",
        },
        {
          day: "Day 3",
          title: "Scenic Train to Kandy & Temple of the Tooth",
          items: [
            "06:00 — First-class reserved train to Kandy (Rs 700; book at the station the day before): air-conditioned carriage with guaranteed seats for the spectacular hill-country journey",
            "09:30 — Arrive Kandy; private tuk-tuk to Temple of the Tooth Relic for the morning puja ceremony at 9:30am — the drums, incense, and candlelight as priests unveil the reliquary casket is deeply moving; entry Rs 1,500",
            "11:00 — Royal Botanical Gardens at Peradeniya (8km from Kandy): 60 hectares of orchid houses, spice gardens, and the famous 150-year-old Java fig tree; entry Rs 1,800 ($6)",
            "13:30 — Lunch at Helga's Folly in Kandy: the most eccentric hotel dining room in Sri Lanka, with walls covered in murals and antiques; Sri Lankan curry lunch Rs 2,500",
            "16:00 — Return train to Colombo; evening arrival and farewell dinner at a Colombo hotel restaurant of your choice",
          ],
          cost: "$100–130 (first-class train, Tooth Temple, Botanical Gardens, Helga's lunch)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Fort Heritage, Private Pettah & Ministry of Crab",
          items: [
            "09:00 — Check in to Galle Face Hotel (Rs 45,000–80,000/night, $150–270): the oldest hotel east of Suez, opened 1864, with ocean-facing rooms and a heritage that includes guest signatures from Queen Elizabeth to John D. Rockefeller",
            "10:00 — Private heritage walking tour of Fort and Pettah with a Colombo Heritage Trust guide ($80 for 3 hours): access to closed colonial buildings, the original Dutch fort ramparts visible in a basement carpark, and the story of the VOC trading empire",
            "13:00 — Lunch at the Verandah Restaurant at Galle Face Hotel: colonial-era three-course lunch on the ocean terrace; Sri Lankan prawn curry, wood apple sorbet, and a chilled Lion lager; $40–50 per person",
            "16:00 — Private curated shopping at Paradise Road gallery on Alfred House Road: the finest Sri Lankan art, antique furniture, and homeware; frequented by Colombo's diplomatic community",
            "20:00 — Dinner at Ministry of Crab: prime table reserved in advance; the XXL Crab (2kg+) in pepper sauce with string hoppers is the benchmark Sri Lankan crab dish anywhere in the world; Rs 15,000–20,000 pp",
          ],
          cost: "$500–650 (hotel, private tour, Galle Face lunch, Ministry of Crab)",
        },
        {
          day: "Day 2",
          title: "Private Temple Tour, Museum & Rooftop Colombo",
          items: [
            "08:00 — Private dawn puja ceremony at Gangaramaya Temple with a monk-accompanied visit ($60 arranged through hotel): sit inside the inner sanctum during the morning offering — not normally accessible to casual tourists",
            "10:00 — National Museum with a senior curator-led private tour ($100 for 90 minutes): handle replica Kandyan jewellery, see the restricted archive collections, and learn the full context of the Portuguese, Dutch, and British colonial periods",
            "13:00 — Lunch at the Sky Lounge at Cinnamon Grand: panoramic Colombo views, contemporary Sri Lankan tasting menu with wine pairing; $60–80 per person",
            "16:00 — Spa afternoon at the Mandara Spa within the hotel: traditional Ayurvedic treatments using Sri Lankan herbs and oils; 90-minute signature treatment Rs 12,000",
            "19:30 — Sundowner on the Galle Face Hotel Long Bar terrace: the 155-year-old Long Bar faces the Indian Ocean; gin sling with local lime and bitters is the signature drink; Rs 2,000 per cocktail",
            "21:00 — Private farewell dinner at the Galle Face Hotel Veranda: booked exclusively for your table; Colombo lobster and crab tasting menu with champagne",
          ],
          cost: "$500–700 (museum tour, sky lunch, spa, Galle Face dinner)",
        },
        {
          day: "Day 3",
          title: "Private Helicopter to Kandy & Temple of the Tooth",
          items: [
            "08:00 — Private helicopter transfer to Kandy ($400 for up to 4 passengers, 25 minutes): the aerial view of Colombo harbour, paddy fields, and the cloud-wreathed Kandyan hills is extraordinary",
            "09:00 — VIP access to Temple of the Tooth Relic including the inner sanctum with a senior monk guide ($120 arranged through hotel concierge): see the solid gold reliquary casket of the Buddha's tooth up close during morning puja",
            "11:30 — Royal Botanical Gardens at Peradeniya: private guided botanical walk ($50 for 2 hours) through the orchid collections, the spice garden, and the royal palm avenue",
            "14:00 — Lunch at the Helga's Folly private dining room: the owner or manager personally receives VIP guests; Sri Lankan tasting menu with rare arrack cocktails; $80 pp",
            "16:30 — Private helicopter return to Colombo ($400); transfer to Bandaranaike International Airport (CMB) for evening departure",
          ],
          cost: "$600–800 (helicopter, VIP temple, botanical garden tour, Helga's)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–22 (guesthouse, hostel)",
      food: "$6–12 (rice and curry, kottu roti, street food)",
      transport: "$3–6 (tuk-tuk, train)",
      activities: "$8–15 (temples, museums, Galle Face)",
      total: "$35–55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–100 (boutique hotel, Fort area)",
      food: "$25–40 (Ministry of Crab, Barefoot cafe, restaurants)",
      transport: "$10–20 (private tuk-tuk, first-class train)",
      activities: "$20–35 (guided tours, temples)",
      total: "$100–150/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–400 (Galle Face Hotel, Cinnamon Grand)",
      food: "$80–160 (Ministry of Crab XXL, Sky Lounge, fine dining)",
      transport: "$50–200 (private car, helicopter)",
      activities: "$80–150 (private guides, VIP temple access)",
      total: "$350–600+/day",
    },
    {
      tier: "🦞 Seafood Focus",
      accommodation: "$60–100 (mid-range, near Fort)",
      food: "$50–80 (Ministry of Crab, Beach Wadiya)",
      transport: "$10–20 (tuk-tuk)",
      activities: "$15–25 (Dutch Hospital, Galle Face)",
      total: "$130–200/day",
    },
    {
      tier: "🚂 Train + Temple",
      accommodation: "$15–30 (guesthouse)",
      food: "$8–15 (canteen, Kandy lunch)",
      transport: "$5–8 (second-class train, Kandy tuk-tuk)",
      activities: "$10–15 (Tooth Relic, Botanical Gardens)",
      total: "$40–65/day",
    },
  ],
  mistakes: [
    {
      icon: "🦞",
      title: "Not booking Ministry of Crab at least 2 days in advance",
      desc: "Ministry of Crab is one of the most in-demand restaurants in Asia. Walk-ins are almost never accepted. Book online at ministryofcrab.com at least 48 hours ahead, ideally a week in advance for weekend dinner. If fully booked, the adjacent Noorani biryani restaurant at Maradana is a magnificent consolation.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌦️",
      title: "Visiting during the south-west monsoon without flexibility",
      desc: "Colombo receives its heaviest rains from May to August (south-west monsoon). December to March is the dry season for the west coast. The east coast of Sri Lanka has the opposite pattern. If visiting during monsoon, indoor attractions like the National Museum and Dutch Hospital are the priority; beach activities are out.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚕",
      title: "Arguing over tuk-tuk fares instead of using PickMe",
      desc: "PickMe is Sri Lanka's ride-hailing app (equivalent to Uber) and gives metered, transparent pricing in Colombo. Street tuk-tuks will quote 3–4x the app rate for tourists. Download PickMe before leaving the airport and use it exclusively. A Fort-to-Gangaramaya ride should cost Rs 150–250 by app versus Rs 600–800 street quoted price.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕌",
      title: "Entering temples without proper dress",
      desc: "All Buddhist temples and Hindu kovils in Colombo require covered shoulders and legs below the knee. Women need not cover their head. Shoes and socks are removed at the entrance. Galle Face Green and street areas are fine in shorts, but carry a light cotton wrap for temple visits. Sarongs are sold outside temples for Rs 200.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏖️",
      title: "Treating Colombo as just a transit stop to beaches",
      desc: "Most visitors fly in and rush to Galle, Mirissa, or Ella the same day. Colombo has extraordinary food, architecture, markets, and the Dutch Hospital neighbourhood that rewards 2–3 days. The Ministry of Crab, Gangaramaya Temple, and Pettah Market alone justify an overnight stay.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🦀",
      title: "Order the garlic chilli preparation at Ministry of Crab",
      desc: "Ministry of Crab offers crab in several preparations but the garlic chilli is the original and definitive version. Order a medium crab (500–700g) as a starter and share a large (1–1.5kg) as the main. The crab is caught the same day from Sri Lankan lagoons. Book tours and activities around Colombo at https://www.getyourguide.com/s/?q=Colombo+Sri+Lanka&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚂",
      title: "Take the scenic train to Kandy, not the highway bus",
      desc: "The Colombo-Kandy highway takes 2.5 hours in a car but the train takes 3 hours and passes through landscapes the highway misses entirely: colonial-era viaducts, rubber estates, and the hill country rising dramatically from the coastal plain. The second-class carriage with open windows is the authentic experience for Rs 200 each way.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🥥",
      title: "Eat isso wade at Galle Face Green as the sun sets",
      desc: "Isso wade are deep-fried lentil patties topped with a whole prawn, served with pol sambol and lime. Vendors at Galle Face Green have been selling them since the 1920s. Three isso wade and a King Coconut water costs Rs 250 ($0.80). This is the definitive Colombo street-food experience and the best Rs 250 you will spend in Sri Lanka.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "💱",
      title: "Exchange money at licensed Forex counters in Fort",
      desc: "Bank of Ceylon and licensed Forex counters in the Fort business district give better rates than airport counters (which are 8–12% worse). The official rate for USD to Sri Lankan Rupee fluctuates significantly; check xe.com before exchanging. Credit cards are accepted at most restaurants and hotels in Fort and Colombo 7 areas.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "How many days should I spend in Colombo?",
      a: "Two to three days is ideal for Colombo. Day 1 covers Pettah market, Galle Face Green, and kottu roti. Day 2 covers Gangaramaya Temple, the National Museum, and Ministry of Crab. Day 3 works perfectly as a day trip to Kandy (3 hours by train, one of the most scenic rail journeys in Asia). If short on time, Colombo works as a 2-night stopover before continuing to Galle, Ella, or Mirissa.",
    },
    {
      q: "What is kottu roti and where should I eat it?",
      a: "Kottu roti is Sri Lanka's most beloved street food: shredded roti bread chopped vigorously on a flat iron griddle with vegetables, egg, curry sauce, and optional chicken or seafood. The metallic clatter of the blades chopping against the griddle is unmistakable. The best kottu in Colombo is at roadside roti stalls on Galle Road between Fort and Wellawatte, open from 7pm onwards. A full plate costs Rs 400–600 ($1.30–2).",
    },
    {
      q: "Is the day trip to Kandy worth it from Colombo?",
      a: "Absolutely. The Temple of the Sacred Tooth Relic in Kandy is Sri Lanka's most important Buddhist site and the morning puja ceremony (9:30am) with drums and incense is deeply memorable. The Royal Botanical Gardens at Peradeniya are among the best in Asia. The train journey through the hill country is itself a highlight. Leave Colombo on the 6:55am train, arrive by 10am, and return by the 5:35pm train for a full day.",
    },
    {
      q: "What is the best area to stay in Colombo?",
      a: "Fort and Pettah give maximum proximity to colonial architecture and the Dutch Hospital, but are noisy and not ideal for families. Colombo 3 (Kollupitiya) and Colombo 7 (Cinnamon Gardens) are the most comfortable neighbourhoods with good restaurants, Barefoot Gallery, and easy PickMe access to all major sights. The Galle Face Hotel in Colombo 3 is the iconic mid-to-luxury choice for its ocean views and heritage atmosphere.",
    },
  ],
  combineWith: ["sri-lanka-7-days", "galle-3-days", "maldives-5-days"],
  relatedSlugs: ["sri-lanka-7-days", "kerala-5-days", "mumbai-india", "singapore-3-days"],
  galleryQuery: "colombo sri lanka galle face gangaramaya temple kottu roti",
};

export const metadata: Metadata = {
  title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Colombo itinerary — Galle Face Green, National Museum, Pettah bazaar, Gangaramaya Temple, Dutch Hospital, kottu roti, crab curry at Ministry of Crab, and a day trip to Kandy. Budget $35/day to luxury. Visa info included.",
  keywords: [
    "Colombo itinerary",
    "Colombo 3 days",
    "Colombo travel guide 2026",
    "Ministry of Crab Colombo",
    "Galle Face Green",
    "Gangaramaya Temple",
    "kottu roti Sri Lanka",
    "Colombo visa Indian passport",
  ],
  openGraph: {
    title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Galle Face Green sunset, Ministry of Crab, Gangaramaya Temple, Pettah market, and a scenic train to Kandy — Colombo in 3 days from $35/day.",
    type: "article",
    url: `${siteUrl}/blog/colombo-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Isso wade at sunset on Galle Face Green, whole crabs at Ministry of Crab, and the scenic train to Kandy — Colombo done right.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/colombo-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Colombo in 3 Days",
          item: `${siteUrl}/blog/colombo-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Colombo",
      description:
        "Colombo, Sri Lanka — a layered colonial city of Dutch hospitals, Buddhist temples, chaotic bazaars, ocean promenades, and some of Asia's finest crab curry.",
      geo: { "@type": "GeoCoordinates", latitude: 6.9271, longitude: 79.8612 },
    },
  ],
};

export default function ColomboPage() {
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
