import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Nairobi",
  country: "Kenya",
  countryFlag: "🇰🇪",
  slug: "nairobi-4-days",
  heroQuery: "nairobi kenya city skyline national park",
  heroAlt: "Nairobi National Park with lions in the foreground and the city skyline behind",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Nairobi is the only capital city on earth where you can watch lions hunt with skyscrapers in the background. Four days unlocks everything that makes it extraordinary: hand-feeding endangered Rothschild giraffes at dawn, watching baby elephants splash in red-mud pools at the David Sheldrick orphanage, and eating extraordinary nyama choma at Carnivore while haggling for Maasai blankets at the weekend market. The coffee at Nairobi Java House alone is worth the flight.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$45",
    bestMonths: "Jun–Oct, Jan–Feb",
    airport: "NBO",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Giraffe Centre & Elephant Orphanage" },
    { id: "day2", emoji: "📅", label: "Day 2 — Nairobi National Park" },
    { id: "day3", emoji: "📅", label: "Day 3 — Karen Blixen & Maasai Market" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — eVisa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "eVisa (single or multiple entry)"],
        ["Processing", "3–5 business days"],
        ["Fee", "$52 USD (single entry)"],
        ["Validity", "90 days from issue date"],
        ["Apply at", "evisa.go.ke (Kenya official portal)"],
        ["Documents", "Passport scan, photo, return ticket, hotel booking"],
        ["Notes", "Apply at least 2 weeks before departure. Yellow fever vaccination certificate required if arriving from endemic countries."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — eVisa Required",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "eTA or eVisa via evisa.go.ke"],
        ["Processing", "1–3 business days"],
        ["Fee", "$30 USD (eTA) or $52 USD (eVisa)"],
        ["Validity", "90 days"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Yellow Fever", "Certificate required if arriving from endemic country"],
        ["Notes", "Kenya accepts online applications only. Visa on arrival is no longer available. Print approval before travel."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$45–65/day",
      days: [
        {
          day: "Day 1",
          title: "Giraffe Centre & David Sheldrick Elephant Orphanage",
          items: [
            "08:30 — Matatu (shared minibus) from city centre to Langata area for KSh 60 (about $0.45) — ask conductor for Giraffe Centre stop; the famous yellow-and-black matatus run every 10 minutes",
            "09:00 — Giraffe Centre opens at 9am; feeding the endangered Rothschild giraffes by hand costs KSh 1,300 ($10) — arrive early before tour groups; giraffes are most active in the morning cool",
            "11:00 — Walk or take a boda-boda (motorcycle taxi, KSh 100) to David Sheldrick Wildlife Trust Elephant Orphanage (1.5km away) — visiting hours are 11am to 12pm daily, entry KSh 1,300 ($10)",
            "12:00 — Watch baby elephants play in red-earth mud pools and be bottle-fed by keepers; adopt an elephant for $50/year to fund their care through sheldrickwildlifetrust.org",
            "14:00 — Lunch at a local jua kali (open-air) canteen in Langata: ugali, sukuma wiki (kale), and beans for KSh 200 ($1.50); these workers' canteens serve fresh hot food all day",
            "16:00 — Return by matatu to city centre; evening walk through the CBD to Nairobi Java House on Mama Ngina Street for proper Kenyan Arabica coffee and a mandazi (KSh 400)",
          ],
          cost: "$25–30 (two attractions, food, transport)",
        },
        {
          day: "Day 2",
          title: "Nairobi National Park — Lions with Skyline",
          items: [
            "06:00 — Take a matatu to the main gate of Nairobi National Park (KSh 100); the park opens at 6am and early morning offers the best wildlife sightings before heat haze builds",
            "06:30 — Non-resident entry fee: $52 per adult for the day — this is the most affordable national park in the world that guarantees big-game wildlife within 10km of a capital city",
            "07:00 — The black rhino is Nairobi NP's icon; the park has the highest density of black rhinos in Africa — the misty skyline backdrop for wildlife photos is unique on earth",
            "09:00 — Lions, cheetahs, and leopards are all present; the flat savanna grassland near the Mbagathi River is the best big-cat hunting ground in the morning hours",
            "11:30 — Hippo Pool: walk the short trail to see hippos resting in the shallows; a family of hippos has lived here for decades and are reliably visible all year",
            "13:00 — Exit the park; budget self-drive in a taxi-share works out cheaper than guided tours; return by matatu and have nyama choma (grilled meat) at a Kenyatta Market stall for KSh 400",
          ],
          cost: "$60–70 (park entry, shared taxi, food)",
        },
        {
          day: "Day 3",
          title: "Karen Blixen Museum & Maasai Market",
          items: [
            "09:30 — Matatu to Karen suburb (KSh 70) to visit Karen Blixen Museum, the former farm of the Out of Africa author; entry KSh 1,200 ($9); the Ngong Hills backdrop looks exactly as Meryl Streep flew over them",
            "11:30 — Walk the Karen Blixen neighbourhood: wide tree-lined roads, colonial bungalows, and the most peaceful corner of Nairobi; pop into Talisman restaurant for a fresh juice (KSh 400)",
            "13:00 — Maasai Market at the Village Market mall (check weekday schedule; it rotates between venues) — hundreds of stalls selling beaded jewellery, kikoy fabric, and carved soapstone; bargaining starts at half the asking price",
            "15:30 — Return to city centre; evening at Nairobi Java House on Kenyatta Avenue for Kenyan single-origin flat white and a nyama choma sandwich",
            "19:00 — Budget dinner: Kenchic fried chicken chain for KSh 500 or a Swahili pilau rice restaurant in the River Road area for KSh 350",
          ],
          cost: "$20–28 (museum, market purchases, food, transport)",
        },
        {
          day: "Day 4",
          title: "Nairobi National Museum & Departure",
          items: [
            "09:00 — Nairobi National Museum on Museum Hill: entry KSh 1,500 ($11.50); covers Kenya's prehistory (Turkana Boy skull), colonial history, and natural history — allow 2 hours",
            "11:00 — Adjacent Snake Park has live African species including black mambas and Nile crocodiles: entry included with museum ticket — an unexpectedly excellent wildlife addition",
            "13:00 — Final lunch at a CBD cafe; try mandazi with chai or an Arabica pour-over at Java House before heading to Jomo Kenyatta International Airport (NBO)",
            "15:00 — Take a taxi to NBO (KSh 1,200, about $9) or the Nairobi Expressway bus for KSh 300 — allow 1.5 hours for traffic on the Mombasa Road corridor",
          ],
          cost: "$22–30 (museum, lunch, airport taxi)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Giraffe Centre, Elephant Orphanage & Carnivore",
          items: [
            "09:00 — Uber or Bolt to Giraffe Centre ($5–7) and join the feeding platform at opening; Rothschild giraffes at eye level is one of East Africa's most tactile wildlife encounters; entry $10",
            "11:00 — Driver waits and takes you to David Sheldrick Elephant Orphanage for the 11am visiting hour; adopt an elephant at the gift shop; entry $10",
            "13:00 — Lunch at The Talisman restaurant in Karen: Kenyan fusion cuisine in a colonial-era bungalow garden; mains KSh 1,800–2,500 ($14–19); one of the best lunch settings in Nairobi",
            "15:00 — Afternoon at Daphne Sheldrick Animal Orphanage inside Nairobi National Park for the 3pm second baby elephant visit (pre-registration required, $50 per person)",
            "19:30 — Dinner at Carnivore restaurant on Langata Road: the famous revolving-spit all-you-can-eat includes game meat (crocodile, ostrich, wildebeest) plus beef and pork; cover charge KSh 4,500 ($34) includes unlimited meat",
          ],
          cost: "$90–110 (attractions, lunch, Carnivore dinner, transport)",
        },
        {
          day: "Day 2",
          title: "Nairobi National Park Private Game Drive",
          items: [
            "06:00 — Private game drive vehicle with a licensed Kenya Wildlife Service guide departs at 6am; park fees $52 plus guide fee $50 for a 4-hour morning drive — the golden-hour light on the lions against the skyline is unmissable",
            "09:00 — Stop at Hippo Pool for the walk to the riverbank; lions and cheetahs are most active between 6 and 9am before the heat sets in",
            "10:30 — Safari Walks: a 2km guided walking trail inside the park fence, KSh 2,000 — see zebra, gazelle, and ostrich at close range on foot",
            "13:00 — Post-safari brunch at Nairobi Tented Camp inside the park boundary (restaurant open to non-guests): breakfast platter with views across the savanna",
            "16:00 — Afternoon free in Westlands neighbourhood: Karen Horticultural Society garden or Sarit Centre for shopping; dinner at Artcaffe for Kenyan-Italian fusion (mains $12–16)",
          ],
          cost: "$140–165 (guide, park entry, meals, transport)",
        },
        {
          day: "Day 3",
          title: "Karen Blixen Museum, Maasai Market & Rooftop Sundowner",
          items: [
            "09:30 — Uber to Karen Blixen Museum; private guided tour with museum guide (KSh 2,000 supplement) unlocks details about Denys Finch Hatton and the real Out of Africa story",
            "11:30 — Karen Blixen coffee farm trail: a 45-minute walk through the original farm estate where Isak Dinesen wrote her memoir",
            "13:00 — Lunch at Karen Blixen Coffee Garden and Cottages: garden terrace serving Kenyan buffet; KSh 2,200 ($17) per person",
            "15:00 — Maasai Market at Village Market: budget $30–50 for quality beaded jewellery and kikoy fabric; the market has some of the finest Maasai craftwork in Kenya outside the Maasai Mara",
            "18:30 — Sundowner cocktail at The Alchemist bar in Westlands: outdoor courtyard with live music Wednesday through Saturday; Tusker craft beer or dawa cocktail KSh 800",
            "20:30 — Dinner at Cultiva in Westlands: modern Kenyan farm-to-table cuisine; butternut squash soup and grilled tilapia mains are outstanding (KSh 2,500 per person)",
          ],
          cost: "$120–140 (museum, market, meals, transport)",
        },
        {
          day: "Day 4",
          title: "Nairobi National Museum & Departure",
          items: [
            "09:00 — Nairobi National Museum and Snake Park: the Turkana Boy skull (1.6 million years old, discovered in 1984) is the most complete early human skeleton ever found; allow 2 hours",
            "11:30 — Coffee tasting at a specialty roaster in Westlands: Nairobi has a rapidly growing specialty coffee scene; Ethiopian and Kenyan single-origin pourover tastings at Java House or Kaldis",
            "13:30 — Final lunch at Mama Oliech: the legendary Kenyan tilapia and omena (silver cyprinid) restaurant; cash only; KSh 1,200 ($9) for a full tilapia with ugali",
            "15:30 — Bolt to Jomo Kenyatta International Airport: allow 90 minutes from CBD in afternoon traffic ($8–12 by ride-share)",
          ],
          cost: "$60–80 (museum, coffee, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Private Conservation Experience & Carnivore",
          items: [
            "10:00 — Check in to The Emakoko boutique lodge on the boundary of Nairobi National Park ($400–600/night); rooms overlook a waterhole where buffalo, giraffe, and leopard visit at dawn and dusk",
            "11:00 — Private conservation tour of Giraffe Centre with dedicated guide and behind-the-scenes access to the breeding program; then David Sheldrick for the VIP keeper-for-a-day experience ($250) — feed, walk, and assist baby elephants all morning",
            "14:00 — Private lunch on the Emakoko lodge deck overlooking the Mbagathi River valley: three-course Kenyan menu with wine pairing",
            "19:30 — Private table at Carnivore restaurant with a reserved spit section: the full game meat experience including game board starters, unlimited spit-roast, and dessert buffet; KSh 8,000 ($60) pp",
          ],
          cost: "$500–650 (lodge, keeper experience, Carnivore, transfers)",
        },
        {
          day: "Day 2",
          title: "Dawn Game Drive Inside National Park",
          items: [
            "05:30 — Pre-dawn wake-up; private game drive direct from Emakoko lodge into Nairobi National Park at 5:30am — the park is accessible directly from the lodge through a private gate",
            "06:00 — The black rhino is best spotted in early morning near the Athi River boundary; lions are frequently seen hunting on the Kitengela plains at sunrise with the CBD glass towers visible on the horizon",
            "09:30 — Return to lodge for full safari breakfast: Kenyan eggs benedict, fresh papaya, and Arabica coffee on the outdoor terrace",
            "14:00 — Afternoon walking safari along the Mbagathi River corridor with a professional Kenya Wildlife Service ranger; track rhino footprints, spot grey crowned cranes and hippos from the bank",
            "19:30 — Sundowner drinks on the lodge rooftop: gin and tonic with Kenyan tonic water; leopards are occasionally spotted from the terrace at dusk",
          ],
          cost: "$450–550 (lodge full board, private drives, ranger guide)",
        },
        {
          day: "Day 3",
          title: "Karen Blixen, Helicopter & Fine Dining",
          items: [
            "09:00 — Private helicopter flight over the Ngong Hills and Karen coffee estate ($350 for 45 minutes, up to 3 passengers) — recreate the Out of Africa aerial scenes over Finch Hatton country",
            "11:00 — Private guided tour of Karen Blixen Museum with the senior curator: access the archive rooms and personal correspondence not shown on standard tours",
            "13:00 — Lunch at Karen Blixen Coffee Garden private dining pavilion: pre-arranged four-course tasting menu with Kenyan wine and single-origin coffee flight ($80 pp)",
            "16:00 — Exclusive shopping at Utamaduni crafts gallery in Karen: the best-curated Kenyan and African art and craft collection in Nairobi; also visit Kazuri Bead Studio where single-mother artisans make fair-trade ceramic beads",
            "20:00 — Dinner at Talisman restaurant: the tasting menu with wine pairing is $120 pp; finish with a Kenyan dessert platter and Arabica digestif espresso",
          ],
          cost: "$550–700 (helicopter, lunch, dinner, shopping)",
        },
        {
          day: "Day 4",
          title: "Sheldrick Sunrise Visit & Departure",
          items: [
            "07:00 — VIP early morning visit to David Sheldrick Wildlife Trust for the keeper-led sunrise elephant walk ($150 supplementary fee): see the orphans before they are released into the park at 6am",
            "09:30 — Breakfast at The Emakoko terrace with final views over the Nairobi National Park valley",
            "11:00 — Private airport transfer to Jomo Kenyatta International Airport in a luxury Land Cruiser ($40–60); lounge access at NBO for international departures",
          ],
          cost: "$300–400 (sunrise visit, lodge checkout, private transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–25 (hostel or guesthouse)",
      food: "$8–12 (local canteens, Java House)",
      transport: "$3–7 (matatu, boda-boda)",
      activities: "$15–25 (park entry, museums)",
      total: "$45–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–100 (3-star hotel, Westlands)",
      food: "$25–45 (restaurants, Carnivore)",
      transport: "$15–25 (Uber, Bolt)",
      activities: "$30–50 (guided tours, markets)",
      total: "$120–180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–600 (The Emakoko, Giraffe Manor)",
      food: "$80–150 (fine dining, Talisman)",
      transport: "$40–120 (private vehicles, helicopter)",
      activities: "$100–200 (private guides, VIP experiences)",
      total: "$350–600+/day",
    },
    {
      tier: "🦒 Giraffe Manor",
      accommodation: "$700–900 (full board, iconic giraffe hotel)",
      food: "Included",
      transport: "$40–80 (private transfers)",
      activities: "$50–100 (add-on game drives)",
      total: "$800–1,000/day",
    },
    {
      tier: "🌍 Safari Add-On",
      accommodation: "$150–400 (Maasai Mara camp)",
      food: "Included in most lodges",
      transport: "$150–300 (light aircraft from Wilson Airport)",
      activities: "Included in lodge rates",
      total: "$350–700/day",
    },
  ],
  mistakes: [
    {
      icon: "🚕",
      title: "Taking metered taxis instead of Uber or Bolt",
      desc: "Street taxis in Nairobi charge 3–5x the app rate and rarely use meters honestly. Uber and Bolt are widely available, safe, and dramatically cheaper — a trip from Westlands to Karen is about $4–6 on app versus $15–20 by street taxi.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🦒",
      title: "Skipping Nairobi National Park because it seems too close",
      desc: "Many visitors dismiss the park as too urban. It is the world's only capital city national park with free-roaming lions, black rhinos, and cheetahs. The skyline-and-lion photograph is available nowhere else on earth and the park is only 15 minutes from the CBD.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌧️",
      title: "Visiting during the long rains without planning",
      desc: "April to May are the long-rain months: roads to game parks flood and the national park has fewer wildlife sightings. June to October (dry season) and January to February are the ideal windows for Nairobi National Park and the Maasai Mara.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📸",
      title: "Photographing people without asking",
      desc: "Kenyans are generally hospitable but some communities, particularly Maasai vendors at markets, expect a small payment (KSh 50–200) for photographs. Always ask first and respect refusals. Photography inside Westgate Mall and government buildings is prohibited.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏥",
      title: "Skipping malaria prophylaxis",
      desc: "Nairobi city is at 1,700m elevation and is considered malaria-low-risk. However, any safari extension to the Maasai Mara, Amboseli, or coastal Mombasa requires antimalarial medication. Consult a travel doctor 6 weeks before departure to start the right course.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "☕",
      title: "Drink Kenyan AA coffee at source",
      desc: "Kenya AA is among the world's most prized coffee grades, grown in the Nyeri highlands at 1,700m. Nairobi Java House and Kaldis Coffee roast and brew single-origin Kenyan Arabica that costs $3 in the cafe and $30 in a London specialty shop. Book a Nairobi coffee tour via https://www.getyourguide.com/s/?q=Nairobi+coffee+tour&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐘",
      title: "Book the Sheldrick Elephant Orphanage in advance",
      desc: "Visiting hours are strictly 11am to 12pm daily, and the 3pm keeper-adoption visit for fee-paying adopters is even more limited. Register online at sheldrickwildlifetrust.org before arrival. A $50 adoption fee is one of the most meaningful souvenirs from Kenya.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🛡️",
      title: "Stay in Westlands or Karen for best safety and access",
      desc: "The Westlands and Karen neighbourhoods have the best restaurants, reliable app-based transport, and the lowest street crime exposure in Nairobi. The CBD (downtown) is fine in daylight but avoid walking with visible valuables after dark. Keep your phone in your pocket on busy streets.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💱",
      title: "Pay in Kenyan shillings wherever possible",
      desc: "USD is widely accepted but you always get a worse rate than paying in KSh after exchanging at a Forex bureau (not hotels, which charge 10–15% spread). Nairobi Forex bureaus on Kenyatta Avenue give the best rates. M-Pesa mobile payment works everywhere locals shop.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Nairobi safe for tourists in 2026?",
      a: "Nairobi is safe for tourists who use standard urban precautions. Westlands, Karen, Gigiri (UN area), and Lavington are the safest neighbourhoods. Use Uber or Bolt exclusively rather than hailing street taxis. Avoid walking after dark in the CBD. Keep phone and camera out of sight on busy streets. The tourist areas around the Giraffe Centre and Sheldrick Orphanage are completely safe.",
    },
    {
      q: "How many days do I need in Nairobi before a safari?",
      a: "Two to three days in Nairobi gives you the Giraffe Centre, Elephant Orphanage, and Nairobi National Park before flying to the Maasai Mara. Four days lets you add the Karen Blixen Museum and Nairobi National Museum. Wilson Airport (WIL) has daily light aircraft flights to Maasai Mara airstrips operated by SafariLink and AirKenya.",
    },
    {
      q: "What is the best time to visit Nairobi and the Maasai Mara?",
      a: "July to October is peak season for the Great Wildebeest Migration crossing the Mara River from Tanzania into Kenya — one of wildlife watching's greatest spectacles. January to February is also excellent with dry weather and fewer tourists than July-October. The Nairobi National Park is good year-round, with the dry seasons offering better visibility.",
    },
    {
      q: "Do I need vaccinations to visit Kenya?",
      a: "Yellow fever vaccination is required if arriving from a yellow-fever-endemic country. Hepatitis A, typhoid, and tetanus are recommended by most travel clinics. Malaria prophylaxis is required for any destinations outside Nairobi city (Mara, Amboseli, Mombasa coast). Consult a travel health clinic 6 weeks before departure for your personalised vaccination schedule.",
    },
  ],
  combineWith: ["kenya-safari-7-days", "tanzania-zanzibar-7-days", "rwanda-gorillas-5-days"],
  relatedSlugs: ["kenya-safari-7-days", "cape-town-5-days", "ethiopia-lalibela-5-days", "botswana-okavango-6-days"],
  galleryQuery: "nairobi kenya giraffe elephant national park",
};

export const metadata: Metadata = {
  title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Nairobi itinerary — Giraffe Centre, David Sheldrick Elephant Orphanage, Nairobi National Park lions with skyline, Karen Blixen Museum, and Carnivore restaurant. Budget $45/day to luxury lodge. All visa info included.",
  keywords: [
    "Nairobi itinerary",
    "Nairobi 4 days",
    "Nairobi travel guide 2026",
    "Giraffe Centre Nairobi",
    "David Sheldrick Elephant Orphanage",
    "Nairobi National Park",
    "Karen Blixen Museum",
    "Nairobi visa Indian passport",
  ],
  openGraph: {
    title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Giraffe Centre, baby elephants, lions against the Nairobi skyline, Karen Blixen Museum, and Carnivore restaurant — Nairobi in 4 days from $45/day.",
    type: "article",
    url: `${siteUrl}/blog/nairobi-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Feed giraffes by hand, watch baby elephants play, and see lions with a city skyline backdrop — Nairobi in 4 days, all budgets covered.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/nairobi-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Nairobi in 4 Days",
          item: `${siteUrl}/blog/nairobi-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nairobi",
      description:
        "Nairobi, Kenya — the world's only capital city with a national park featuring lions, black rhinos, and cheetahs within sight of glass skyscrapers.",
      geo: { "@type": "GeoCoordinates", latitude: -1.2921, longitude: 36.8219 },
    },
  ],
};

export default function NairobiPage() {
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
