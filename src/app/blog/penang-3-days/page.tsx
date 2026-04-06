import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Penang",
  country: "Malaysia",
  countryFlag: "🇲🇾",
  slug: "penang-3-days",
  heroQuery: "penang georgetown street art colorful murals heritage malaysia",
  heroAlt: "Penang Georgetown street art murals and heritage shophouses Malaysia",
  category: "Asia",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "Penang is where food becomes religion. The island state's capital Georgetown is a UNESCO World Heritage city with the most debated hawker stalls in Asia — locals argue with genuine passion about whose char kway teow is superior, which cendol is authentic, where the asam laksa is right. Add one of the world's great street art scenes, ornate Peranakan mansions, and clan jetties built on stilts over the water, and you have one of Southeast Asia's most compelling three-day destinations.",
  stats: {
    duration: "3 Days",
    budgetFrom: "RM 70",
    bestMonths: "Dec–Feb, Jun–Jul",
    airport: "PEN (Penang International)",
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
        ["Visa-Free (2024)", "Under the 2024 India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free entry to Malaysia — Penang is part of Malaysia."],
        ["Getting to Penang", "Fly to Penang (PEN) from Kuala Lumpur (55 minutes, from RM 60 on AirAsia), or take the Aeroline coach from KL (4.5 hours, RM 60). Direct flights also from Singapore, Bangkok, Jakarta, and Chennai."],
        ["Direct from India", "IndiGo and AirAsia India operate seasonal direct flights from Chennai and Kolkata to Penang. Check current routes as schedules change."],
        ["Duration", "Up to 30 days visa-free. Georgetown and Penang Hill are within easy reach of the airport (30 min by Grab)."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, EU countries, Canada, Australia, New Zealand — 90 days visa-free in all of Malaysia including Penang."],
        ["Penang as a Hub", "Penang is well-connected to Bangkok, Singapore, and Bali — common on Southeast Asia circuit routes. Fly in from one, fly out to another."],
        ["Budget Airlines", "AirAsia hub at Penang Airport. Flights from Singapore from SGD 30, from Bangkok from THB 1,000 in advance."],
        ["Tip", "Georgetown accommodation along Love Lane and Chulia Street is excellent value — boutique heritage hotels in restored shophouses for RM 100–180/night."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "RM 70–130/day",
      days: [
        {
          day: "Day 1",
          title: "Georgetown UNESCO Heritage Walk",
          items: [
            "7:00am — Start on Armenian Street (Lebuh Armenian) for the street art before the heat and crowds arrive. The 'Boy on Bicycle' mural by Lithuanian artist Ernest Zacharevic is here — the most photographed street art in Asia",
            "8:30am — Walk the Georgetown street art trail — the tourist information office on Jalan Penang has a free printed map of all murals. The wire sculpture installations (cats, rickshaws, characters) are along the same route",
            "10:00am — Cheong Fatt Tze Mansion — the Blue Mansion (RM 17 guided tour, 45 min) — indigo-blue Penang Peranakan mansion restored to its 1880s grandeur. One of only three blue buildings in the world with this shade",
            "12:00pm — Lunch on Chulia Street — a kopitiam (coffee shop) with economy rice (pick your dishes from a spread, RM 6–10 all-in)",
            "2:00pm — Clan Jetties (Weld Quay) — Chinese clan water villages built on stilts over the Penang Strait. Chew Jetty is the largest and most visited (free). Families have lived here for 200 years",
            "4:30pm — Fort Cornwallis (RM 10) — 18th century British fort at the tip of Georgetown, the first British outpost in Malaysia",
            "6:00pm — Sunset at the clan jetties — the light on the water and the stilted houses is remarkable",
            "7:30pm — Hawker stall dinner on New Lane (Lorong Baru) — the locals' hawker centre, not the tourist one. Char kway teow, popiah, and ABC (ais batu campur — shaved ice dessert)",
          ],
          cost: "RM 80–110 total",
        },
        {
          day: "Day 2",
          title: "Penang Hill, Kek Lok Si & Batu Ferringhi",
          items: [
            "8:00am — Penang Hill funicular railway (RM 30 return) from Air Itam — the 5-minute ride to the summit (833m) gives panoramic views over Georgetown, the Penang Bridge, and the Straits of Malacca on a clear morning",
            "Walk the colonial bungalows and gardens at the summit. The Habitat nature walk (RM 46) is excellent if you have the morning",
            "11:00am — Kek Lok Si Temple (10 min by Grab from Penang Hill base, RM 8) — the largest Buddhist temple in Malaysia. The grounds are free; RM 5 for the panoramic pagoda top. The main seven-storey pagoda (Ban Po Thar) combines Chinese, Thai, and Burmese architecture",
            "1:30pm — Lunch at Air Itam market near Kek Lok Si — asam laksa (a sour, spicy mackerel-based soup with thick rice noodles — one of CNN's greatest dishes in the world). RM 5–8 per bowl",
            "3:30pm — Grab to Batu Ferringhi beach (40 min from Georgetown) — Penang's main beach strip. Not the best beach in Malaysia but a decent afternoon swim",
            "6:00pm — Batu Ferringhi night market (starts at dusk) — cheap shopping, copy goods, beachwear",
            "8:00pm — Return to Georgetown for dinner at a night hawker centre",
          ],
          cost: "RM 80–120 total",
        },
        {
          day: "Day 3",
          title: "The Penang Food Pilgrimage",
          items: [
            "8:00am — Char kway teow at Siam Road Char Koay Teow (Jalan Siam, Penang Road area) — widely considered the best char kway teow in Malaysia. Wok-fried flat rice noodles with cockles, bean sprouts, egg, and Chinese sausage. Open from about 10:30am — arrive early for the queue. RM 6–9 per plate",
            "10:30am — Penang Road Famous Cendol (Jalan Penang) — the original cendol stall, operating since the 1930s. Shaved ice with pandan rice flour jelly, coconut milk, and palm sugar syrup. RM 3.50–5",
            "12:00pm — Assam laksa at Air Itam market or Penang Road area — the sour fish soup with a complex layered flavour that divides opinion but converts the converted",
            "2:00pm — Rojak at Supreme Noodles (Penang Road) — a mixed fruit and vegetable salad with thick shrimp paste dressing. Under RM 10",
            "3:30pm — Little India (Jalan Masjid India / Brick Kiln Road) — Indian spice shops, flower garland sellers, textile traders from Tamil Nadu",
            "5:00pm — Kapitan Keling Mosque (free, largest mosque in Georgetown) and Sri Mahamariamman Temple (free) side by side — Penang's religious buildings are architecturally extraordinary",
            "7:30pm — Farewell dinner at Gurney Drive Hawker Centre — the most famous hawker centre in Georgetown, on the seafront promenade",
          ],
          cost: "RM 70–100 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "RM 300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Heritage Hotel & Private Georgetown Tour",
          items: [
            "Check in to Yeng Keng Hotel, Muntri Mews, or Macalister Mansion — boutique heritage hotels in restored Georgetown shophouses",
            "9:00am — Private Georgetown walking food and architecture tour (RM 150 per person, 3 hours) — includes hawker stall tastings, Peranakan mansion exteriors, and heritage building history",
            "1:00pm — Lunch at Kebaya — Nyonya cuisine (Peranakan Chinese-Malay fusion) in a restored shophouse",
            "4:00pm — Clan Jetties at golden hour with a photographer",
            "7:30pm — Dinner at Edelweiss Café or Rasa Sayang restaurant — upscale Penang cuisine",
          ],
          cost: "RM 320–420 total",
        },
        {
          day: "Day 2",
          title: "Penang Hill VIP & Cooking Class",
          items: [
            "8:00am — Penang Hill first funicular + The Habitat nature walk (RM 46) — treetop walkway through primary rainforest with hornbill sightings",
            "Kek Lok Si Temple with a guide who explains the iconography",
            "Afternoon: Penang Nyonya cooking class (RM 180 per person) — learn to cook assam laksa, otak-otak (spiced fish custard in banana leaf), and ondeh-ondeh (pandan cake)",
            "Evening: Dinner at Auntie Gaik Lean's Old School Eatery — the most acclaimed Nyonya restaurant in Penang",
          ],
          cost: "RM 380–480 total",
        },
        {
          day: "Day 3",
          title: "Food Pilgrimage & Penang Hill Sunset",
          items: [
            "Morning food tour — the Siam Road char kway teow, Penang Road cendol, and Air Itam asam laksa",
            "Afternoon: Penang Hill second visit for sunset panorama",
            "Final dinner at Ferringhi Garden or Beach Blanket Babylon — beachfront dining at Batu Ferringhi",
          ],
          cost: "RM 300–400 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "RM 800+/day",
      days: [
        {
          day: "Day 1",
          title: "Eastern & Oriental Hotel & Private Heritage",
          items: [
            "Check in to Eastern & Oriental Hotel (E&O) — Penang's legendary 1885 colonial grand hotel on the seafront",
            "Private Penang heritage architecture tour with a conservation architect",
            "Lunch at Sarkies at E&O — the hotel's main restaurant with Straits of Malacca views",
            "Afternoon: private visit to Cheong Fatt Tze Mansion with the curator's extended tour",
            "Dinner at Entier or Chris Wan's Social — Penang's most acclaimed modern restaurants",
          ],
          cost: "RM 1,500–2,500 total",
        },
        {
          day: "Day 2",
          title: "Private Food Tour & Penang Hill",
          items: [
            "Private Penang food tour with a culinary guide — hidden hawker stalls, spice market, Peranakan sweets",
            "Penang Hill first gondola with private naturalist at The Habitat",
            "Kek Lok Si with a Buddhist monk guide (arrangement possible through certain tour companies)",
            "Dinner at Macalister Mansion's The Dining Room — intimate fine dining in a 1930s colonial mansion",
          ],
          cost: "RM 1,200–1,800 total",
        },
        {
          day: "Day 3",
          title: "Island Exploration & Farewell",
          items: [
            "Private car tour of Penang Island — spice garden, Entopia by Penang Butterfly Farm, colonial hill stations",
            "Private cooking class with a Nyonya matriarch",
            "Afternoon: E&O hotel spa treatment",
            "Farewell dinner at Sarkies with sunset over the Straits",
          ],
          cost: "RM 1,000–1,500 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "RM 30–80", food: "RM 20–40", transport: "RM 10–20", activities: "RM 15–30", total: "RM 75–170/day" },
    { tier: "✨ Mid-Range", accommodation: "RM 120–300", food: "RM 80–150", transport: "RM 30–50", activities: "RM 60–120", total: "RM 290–620/day" },
    { tier: "💎 Luxury", accommodation: "RM 500–1,500", food: "RM 200–500", transport: "RM 80–200", activities: "RM 150–400", total: "RM 930–2,600/day" },
  ],
  mistakes: [
    {
      icon: "🌅",
      title: "Not Waking Up Early for the Street Art",
      desc: "The best light for photographing Georgetown's street art is 7–9am — soft golden morning light, empty streets, no tour groups blocking the murals. By 10am the Armenian Street area fills with tour groups and the murals become difficult to photograph without crowds. Set an early alarm on at least one morning.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍜",
      title: "Eating Only at Air-Conditioned Restaurants",
      desc: "Penang's greatest food is served at outdoor hawker stalls and kopitiams with plastic chairs and no air conditioning. The char kway teow at Siam Road, the cendol on Penang Road, the asam laksa at Air Itam market — none of these are in comfort-cooled restaurants. The heat and the smoke and the noise are part of the experience. Eat where you see locals eating.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌊",
      title: "Missing the Clan Jetties at Sunset",
      desc: "Most visitors do the clan jetties in the afternoon and leave before golden hour. At sunset, the light turns the wooden stilted houses amber, the water reflects the sky, and fishermen return from the day. The Chew Jetty is free to enter and walk through at any time. The 6–7pm window is the one to catch.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍴",
      title: "Not Understanding That Penang Food Rivalry Is Serious",
      desc: "Penang locals argue about which char kway teow stall is superior with the same energy people argue about football teams. Recommendations will contradict each other. The 'best' version depends on who you ask. The correct approach: try multiple versions. Go to Siam Road first, then try one at a night hawker centre, and form your own opinion. This is how Penangites live.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🍽️",
      title: "Penang Is the Food Capital of Malaysia — Possibly All of Asia",
      desc: "The claim is made frequently and seriously. A 2021 CNN poll named Penang's asam laksa one of the 50 greatest dishes in the world. Anthony Bourdain, Gordon Ramsay, and virtually every food writer who has visited Penang has said the same thing: the hawker food here is exceptional. Eat constantly, eat at stalls with queues, and don't fill up on hotel breakfasts.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚲",
      title: "Rent a Bicycle to Explore Georgetown",
      desc: "Georgetown's UNESCO heritage zone is flat — unusual for Malaysia — and about 2.5km across. Bicycle rental costs RM 15/day from shops along Chulia Street and Love Lane. The street art trail, clan jetties, clan association buildings, temples, and colonial shophouses are all within cycling distance. It's the best way to cover the ground at your own pace.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📱",
      title: "The Penang Food Trail App Maps All the Famous Stalls",
      desc: "The George Town World Heritage Incorporated office and the Penang tourism board have both produced maps and apps for the food trail. The Penang Food Trail app (free on iOS and Android) has GPS-located markers for famous stalls with operating hours and dish recommendations. Useful for the first day when you don't yet know the city layout.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎨",
      title: "Penang Has One of the World's Best Street Art Scenes — Get the Full Map",
      desc: "Georgetown's street art goes far beyond the famous 'Boy on Bicycle' mural. There are over 50 murals by multiple international and local artists, plus 50+ wire sculpture installations ('Children on Bicycle', 'Bicycle Thief', 'Sidecar Kids'). The most complete printed map is available free at the George Town World Heritage tourist information office on Jalan Penang. Digital maps at georgetownpenang.com.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Penang visa-free for Indian passport holders?",
      a: "Yes — under the 2024 India-Malaysia visa-free agreement, Indian nationals get 30 days visa-free entry to all of Malaysia including Penang. Direct flights operate from Chennai and Kolkata (check current routes — IndiGo and AirAsia). Alternatively fly to KL and take a 55-minute AirAsia domestic flight to Penang (from RM 60).",
    },
    {
      q: "What is the best time to visit Penang?",
      a: "December to February is peak season — dry weather, NE monsoon on the east coast of the peninsula but Penang on the northwest is sheltered. June to July is also good. Avoid October and November when rain can be persistent. The Georgetown street art and hawker food are year-round, but outdoor exploring is more pleasant in dry season.",
    },
    {
      q: "How do I get to Penang from Kuala Lumpur?",
      a: "Fly (55 minutes from KLIA2 or KL Sentral Air Terminal, from RM 60 on AirAsia) or take the Aeroline express coach (4.5 hours, RM 60, door-to-door Georgetown service). The train (ETS Gold from KL Sentral) takes 3.5 hours to Butterworth, then a 5-minute ferry to Georgetown. Flying is fastest. The coach is comfortable and connects centrally.",
    },
    {
      q: "Penang vs KL — which is better for food?",
      a: "Penang, almost universally. This is not a close debate among serious food travellers. Penang's hawker traditions are older, more consistent, and more fiercely maintained than KL's. The char kway teow, asam laksa, cendol, and nasi kandar in Penang are the originals that KL restaurants try to replicate. KL has more variety and more high-end options. Penang has better street food.",
    },
    {
      q: "How many days do I need in Penang?",
      a: "3 days covers Georgetown UNESCO heritage, street art, Penang Hill, Kek Lok Si, and the full food pilgrimage. 4 days lets you add a day trip to Penang's spice garden, Balik Pulau (the quieter south of the island with durian farms and orchards), or a day across to Butterworth on the mainland. 2 days is possible but you'll leave feeling you ate too little.",
    },
  ],
  combineWith: ["kuala-lumpur-3-days", "langkawi-3-days", "singapore-3-days"],
  relatedSlugs: ["kuala-lumpur-3-days", "singapore-3-days", "bangkok-4-days", "chiang-mai-4-days"],
  galleryQuery: "penang georgetown street art heritage shophouses clan jetties kek lok si temple",
};

export const metadata: Metadata = {
  title: "Penang in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Penang plans — Budget, Mid-Range, Luxury — covering Georgetown street art, the best hawker food in Asia, Penang Hill, Kek Lok Si, and the clan jetties.",
  keywords: [
    "penang itinerary 3 days",
    "penang travel guide 2026",
    "georgetown penang street art",
    "penang hawker food guide",
    "char kway teow penang",
    "penang hill funicular",
    "penang visa india",
    "malaysia food capital",
  ],
  openGraph: {
    title: "Penang in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Georgetown street art, char kway teow, asam laksa, Penang Hill — 3 complete Penang plans with real RM costs.",
    images: [{ url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80", width: 1200, height: 630, alt: "Penang Georgetown street art murals heritage Malaysia" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Penang", "Malaysia", "Travel", "Itinerary", "Asia", "Food"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penang in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, street art walk, char kway teow guide, Penang Hill — real RM costs.",
    images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/penang-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/penang-3-days#article",
      headline: "Penang in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Penang plans covering Georgetown UNESCO heritage, street art, the best hawker food in Asia, Penang Hill, Kek Lok Si, and the clan jetties.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/penang-3-days" },
      keywords: "penang itinerary, georgetown heritage, penang street art, char kway teow, asam laksa, penang hill, kek lok si, clan jetties",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5100,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Penang in 3 Days", item: "https://www.incredibleitinerary.com/blog/penang-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Penang, Malaysia",
      description: "Malaysia's island state with a UNESCO Heritage Georgetown, renowned as the food capital of Asia, famous for street art murals, Peranakan mansions, and clan jetties.",
      url: "https://www.incredibleitinerary.com/blog/penang-3-days",
      touristType: ["Culinary Tourism", "Cultural Tourism", "Heritage Tourism", "Urban Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Penang visa-free for Indian passport holders?", acceptedAnswer: { "@type": "Answer", text: "Yes — 30 days visa-free under the 2024 India-Malaysia agreement. Direct flights from Chennai and Kolkata, or via KL (55-min domestic flight from RM 60)." } },
        { "@type": "Question", name: "What is the best time to visit Penang?", acceptedAnswer: { "@type": "Answer", text: "December to February and June to July for dry weather. Avoid October–November (persistent rain). Street art and hawker food are year-round." } },
        { "@type": "Question", name: "How do I get to Penang from Kuala Lumpur?", acceptedAnswer: { "@type": "Answer", text: "Fly (55 min, from RM 60 on AirAsia), Aeroline coach (4.5 hrs, RM 60 door-to-door), or ETS train to Butterworth then 5-min ferry (3.5 hrs total)." } },
        { "@type": "Question", name: "Penang vs KL — which is better for food?", acceptedAnswer: { "@type": "Answer", text: "Penang, almost universally. The char kway teow, asam laksa, and cendol are the originals that KL tries to replicate. KL has more variety; Penang has better street food." } },
        { "@type": "Question", name: "How many days do I need in Penang?", acceptedAnswer: { "@type": "Answer", text: "3 days covers Georgetown heritage, street art, Penang Hill, Kek Lok Si, and the full food pilgrimage. 4 days adds Balik Pulau and more eating time." } },
      ],
};

export default function PenangPage() {
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
