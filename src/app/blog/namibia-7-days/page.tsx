import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Namibia in 7 Days: The Complete Self-Drive Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Complete Namibia 7-day self-drive itinerary covering Sossusvlei, Deadvlei, Etosha National Park, Swakopmund, Fish River Canyon, and the Namib Desert. Budget ($120/day) to luxury ($500/day) plans with visa info for Indian and Western passports.",
  keywords: [
    "Namibia 7 day itinerary",
    "Namibia self-drive guide",
    "Sossusvlei sand dunes",
    "Deadvlei dead trees",
    "Etosha National Park safari",
    "Namibia travel guide 2026",
    "Namibia budget itinerary",
    "Fish River Canyon",
    "Swakopmund adventure",
    "Namibia visa Indian passport",
  ],
  openGraph: {
    title: "Namibia in 7 Days: The Complete Self-Drive Guide (Budget to Luxury, 2026)",
    description:
      "Climb the world's tallest sand dunes at dawn, stand among 900-year-old dead trees in Deadvlei, and watch lions at Etosha waterholes. Complete 7-day Namibia itinerary from $120/day.",
    url: "https://incredibleitinerary.com/blog/namibia-7-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/namibia-7-days.jpg",
        width: 1200,
        height: 630,
        alt: "Namibia Sossusvlei red sand dunes with dead trees in Deadvlei ancient lake",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namibia in 7 Days: Complete Self-Drive Guide (Budget to Luxury, 2026)",
    description:
      "Complete Namibia self-drive itinerary from $120/day. Sossusvlei, Etosha, Swakopmund, Fish River Canyon — day-by-day plans for every budget.",
    images: ["https://incredibleitinerary.com/og/namibia-7-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/namibia-7-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Namibia in 7 Days: The Complete Self-Drive Guide (Budget to Luxury, 2026)",
    description:
      "Complete Namibia 7-day self-drive itinerary covering Sossusvlei, Etosha National Park, Swakopmund, and Fish River Canyon with budget to luxury plans.",
    image: "https://incredibleitinerary.com/og/namibia-7-days.jpg",
    datePublished: "2026-01-20",
    dateModified: "2026-04-01",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/namibia-7-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Namibia 7 Days", item: "https://incredibleitinerary.com/blog/namibia-7-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Namibia — Sossusvlei & Namib Desert",
    description:
      "Home to the world's oldest desert, the tallest sand dunes on Earth, and one of Africa's most spectacular self-drive safari destinations.",
    url: "https://incredibleitinerary.com/blog/namibia-7-days",
    touristType: ["Adventure Traveller", "Wildlife Enthusiast", "Photography Enthusiast"],
    geo: { "@type": "GeoCoordinates", latitude: -24.7419, longitude: 15.2663 },
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Sossusvlei & Deadvlei" },
      { "@type": "TouristAttraction", name: "Etosha National Park" },
      { "@type": "TouristAttraction", name: "Fish River Canyon" },
      { "@type": "TouristAttraction", name: "Swakopmund" },
    ],
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Namibia",
  country: "Namibia",
  countryFlag: "🇳🇦",
  slug: "namibia-7-days",
  heroQuery: "namibia sossusvlei red sand dunes deadvlei africa desert",
  heroAlt: "Namibia Sossusvlei red sand dunes with dead trees in Deadvlei ancient lake",
  category: "Africa",
  date: "January 20, 2026",
  readTime: "16 min read",

  intro:
    "Climbing the 325-metre sand dunes of Sossusvlei at dawn as orange and purple shadows race across the world's oldest desert — this is Namibia. Below you, in a white clay pan that has not held water for 900 years, the bleached skeletons of ancient camel thorn trees stand in perfect, eerie stillness. Wild horses gallop across a desert that receives less rain than the Sahara. And at night, more stars than anywhere else on Earth blaze from a sky with zero light pollution. Namibia is Africa distilled to its most otherworldly essence: silence, scale, and geological time stretching in every direction.",

  stats: {
    duration: "7 Days",
    budgetFrom: "$120",
    bestMonths: "May–Oct (dry season)",
    airport: "WDH (Hosea Kutako, Windhoek)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "self-drive", emoji: "🚗", label: "Self-Drive Essentials" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🗺️", label: "Getting Around" },
    { id: "combine", emoji: "🌍", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Yes — Indian passport holders need a visa for Namibia"],
        ["Apply At", "Namibian Embassy in New Delhi or High Commission in Mumbai"],
        ["Fee", "Approximately $80 USD (may vary by embassy)"],
        ["Processing", "10–15 business days — apply well in advance"],
        ["Documents", "Valid passport (6+ months), photos, bank statement, travel itinerary"],
        ["Tip", "Apply at least 4 weeks before travel to avoid delays"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa-Free", "Most Western passport holders — up to 90 days"],
        ["No Action Needed", "Simply arrive, show passport, receive stamp"],
        ["Nationalities", "US, UK, EU, Australia, Canada, NZ and many others"],
        ["Duration", "90 days visa-free tourist stay"],
        ["Check", "namibiaembassyusa.org for the full list of visa-exempt countries"],
        ["Ease Rating", "One of the most straightforward entry processes in Africa"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$120/day (self-drive camping)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Windhoek — Collect Car & First Night",
          items: [
            "Arrive at Hosea Kutako International Airport (WDH). Collect your pre-booked 4x4 rental — essential for Namibia. Budget option: a basic Toyota HiLux or Land Cruiser from a local operator like Asco Car Hire or Odyssey Rent a Car ($60–90/day).",
            "Stop at a Spar or Checkers supermarket in Windhoek — stock up on food, water, and camping supplies. Namibia self-drive means self-catering on most nights.",
            "Drive through Windhoek city centre: Christuskirche (German Lutheran church), the Alte Feste museum, and the vibrant Independence Memorial Museum ($4 entry).",
            "Stay the night in Windhoek: Chameleon Backpackers ($15–25) or a budget guesthouse ($30–50). The city is safe, compact, and well-organised.",
            "Pre-load your Maps.me offline maps for Namibia — cell signal disappears the moment you leave Windhoek. Many Namibia roads are gravel; offline GPS is not optional.",
          ],
          cost: "$50–90 (guesthouse + food + supermarket stock-up)",
        },
        {
          day: "Day 2",
          title: "Windhoek to Sesriem — Drive Through the Namib",
          items: [
            "Early start (7am). Drive south from Windhoek to Sesriem (~5 hours, 380km on the C19 gravel road). This drive itself is spectacular — red rock plains, oryx, springbok.",
            "Stop at Solitaire — an impossibly remote petrol station and bakery in the middle of nothing. Famous apple pie and the rusted hulks of abandoned cars. A Namibia icon.",
            "Arrive Sesriem, the gateway to Sossusvlei. Camp at Sesriem Campsite ($20/person) — basic ablutions but you wake up 15 minutes from Dune 45.",
            "Key: stay INSIDE the park (Sesriem campsite). The park gates open at sunrise — if you camp outside, you'll lose 30–40 minutes of the golden hour to gate queues.",
            "Evening: walk to Sesriem Canyon (small gorge carved by the Tsauchab River) — free with park entry. Sunset from the canyon rim is dramatic.",
            "Prepare your kit for tomorrow's 4am alarm: headlamp, camera, water, snacks. You want to summit Dune 45 before the sun destroys the shadow lines.",
          ],
          cost: "$40–60 (camping, park entry $10, petrol)",
        },
        {
          day: "Day 3",
          title: "Sossusvlei & Deadvlei — The Iconic Dunes",
          items: [
            "4:30am alarm. Drive through the park gate at sunrise (5:30–6am depending on season). Race to Dune 45 — the most climbed dune in the world — and summit before the crowds and the heat arrive.",
            "The view from the top: 300-degree panorama of orange dunes and flat plains stretching to the horizon. Nothing prepares you for the scale.",
            "Drive to the 2x4 car park (the last 4km to Sossusvlei requires either a 4x4 or the free park shuttle). Take the shuttle to Sossusvlei.",
            "DEADVLEI: a 1km walk from Sossusvlei car park. This is the photograph. Ancient camel thorn trees, dead for 900 years, standing in a bright white clay pan ringed by towering red dunes. One of the great landscapes on Earth.",
            "Spend 2–3 hours in Deadvlei. The light is extraordinary in the morning. By 11am the midday sun turns it into a furnace — evacuate before then.",
            "Return to camp, rest through the heat of the day, and drive around the sunset viewpoints in the afternoon. Star-gazing at Sesriem is among the best in the world.",
          ],
          cost: "$30–50 (park entry, shuttle, food)",
        },
        {
          day: "Day 4",
          title: "Drive North to Swakopmund — Skeleton Coast",
          items: [
            "Early start: drive from Sesriem to Swakopmund (~5 hours, 350km). Take the C14 through the Gaub and Kuiseb river canyons — stark, beautiful, and rarely driven.",
            "Stop at Welwitschia Drive — to see welwitschia plants, some over 1,500 years old. Namibia's iconic living fossil plant.",
            "Arrive Swakopmund, a surreal German colonial beach town on the Skeleton Coast. Art Deco architecture, German bakeries, and Atlantic Ocean cold enough to hurt.",
            "Check in to the Lighthouse Backpackers ($20–30) or a budget guesthouse ($40–60). Swakopmund is compact and walkable.",
            "Walk the Swakopmund waterfront and lighthouse area. Eat at The Tug — a restaurant built on an old tugboat, famous for fresh seafood ($15–25).",
            "Browse the craft market for semi-precious stones, ostrich eggs, and malachite jewellery. Namibia produces excellent gemstones.",
          ],
          cost: "$60–90 (guesthouse, food, petrol)",
        },
        {
          day: "Day 5",
          title: "Swakopmund Adventures — Dunes, Seals & Desert",
          items: [
            "Morning: Cape Cross Seal Colony (90 min north of Swakopmund). One of the largest Cape Fur Seal colonies in the world — 250,000 seals, the noise and smell are overwhelming. $10 entry.",
            "Back in Swakopmund: choose your adventure. Budget options include sandboarding on the coastal dunes ($25), quad biking ($50), or a desert tour on foot with a local guide ($30).",
            "Lunch at Café Anton or a local bakery — try German Schwarzbrot bread and Namibian game biltong (dried meat). Swakopmund's German heritage is genuine and delicious.",
            "Afternoon: Swakopmund Museum ($5) — excellent natural history and German colonial history section.",
            "Evening: the beach at Swakopmund faces west. The sunsets are extraordinary — cold Atlantic mist rolling in as the sun drops behind the dunes.",
            "Dinner: try Raft Restaurant on the lagoon or a simple local braai (BBQ) at your campsite.",
          ],
          cost: "$50–90 (activities, food, seal colony entry)",
        },
        {
          day: "Day 6",
          title: "Drive to Etosha National Park — First Game Drive",
          items: [
            "Long drive day: Swakopmund to Etosha (5–6 hours, 420km via Omaruru and Outjo). A genuine Namibian road trip through changing landscapes.",
            "Enter Etosha through the Anderson Gate (south) or Von Lindequist Gate (east). Pick up your park permit at the gate ($10/person/day + $10/vehicle).",
            "Etosha is unique: the 4,760km² Etosha Pan — a vast white salt pan — dominates the landscape. Animals concentrate at waterholes around the pan edge, making game viewing remarkably productive.",
            "Camp at Okaukuejo Camp (NWR camps are excellent value — $15–20/person). Okaukuejo has a floodlit waterhole 50m from the camp that operates 24 hours — elephants, rhinos, and lions come to drink.",
            "Afternoon game drive through the western sections. Etosha is malaria-free and self-drive — this is Africa's best self-drive safari destination.",
            "Night: sit at the Okaukuejo waterhole until midnight. Watching a black rhino drink under the stars is one of Africa's great experiences.",
          ],
          cost: "$50–80 (park entry, camping, petrol, self-catering)",
        },
        {
          day: "Day 7",
          title: "Full Day Etosha Safari — Drive Back to Windhoek",
          items: [
            "Full dawn game drive (6am–12pm). Etosha at dawn: the pan glows pink, lions are still active from the night, and cheetahs hunt in the open grassland.",
            "Must-see waterholes: Halali, Rietfontein, Gemsbokvlakte, and Klein Namutoni. Each attracts different species — Halali is famous for rhinos.",
            "Big Five in Etosha: lions, leopards (rare), elephants, rhinos (both black and white), and buffalos. Etosha has the highest density of black rhino in the world.",
            "Midday: check out of camp. Drive south toward Windhoek (4 hours from Anderson Gate).",
            "Stop in Okahandja for Namibian curio markets — the best wood carving market in the country, with items from across Africa ($5–50).",
            "Return rental car in Windhoek. Evening flight home, or extend to Botswana (Chobe, Okavango Delta) for more wildlife.",
          ],
          cost: "$50–80 (park entry, petrol, crafts, food)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$250/day (lodges + self-drive)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Windhoek — Boutique Stay & City Tour",
          items: [
            "Arrive WDH. Collect a comfortable 4x4 with roof tent or soft tonneau cover — mid-range self-drive offers flexibility and comfort.",
            "Check in to Hotel Heinitzburg (a castle hotel from the German colonial era) or Olive Grove Guesthouse ($80–140/night). Boutique with excellent breakfast.",
            "Guided half-day Windhoek city tour ($40–60): Christuskirche, the National Museum, Katutura Township tour (genuinely enlightening — a formerly apartheid-era black township that is now a vibrant community).",
            "Dinner at Joe's Beerhouse — Windhoek's most famous restaurant, serving game meats (kudu, oryx, crocodile), with a German beer hall atmosphere ($25–40/person).",
            "Pick up pre-ordered fuel cans and a Namibia road map from the rental company. Namibia distances are vast — always have extra fuel.",
          ],
          cost: "$110–180 (hotel, guided tour, dinner)",
        },
        {
          day: "Day 2",
          title: "Windhoek to Sesriem — Scenic Drive & Canyon Sundowner",
          items: [
            "Drive south to Sesriem (5 hours). Stop at Rehoboth for coffee and to explore the small Baster Museum — an interesting detour on the culture of the Rehoboth Baster community.",
            "Check in to Sesriem Lodge or Le Mirage Desert Lodge & Spa ($100–180/night). Air-conditioned rooms with pool — genuinely needed after the Namib heat.",
            "Afternoon: Sesriem Canyon walk with a lodge guide. The canyon is only 1km long but cuts 30m deep — beautiful erosion geology.",
            "Sundowner: the lodge organises a sundowner drive to a high viewpoint. The Namib sunset is an event — every colour from rose to deep crimson across the dune landscape.",
            "Dinner at the lodge restaurant. Namibian game meat is excellent — try oryx fillet or kudu steak, locally farmed and wonderfully lean.",
          ],
          cost: "$150–220 (lodge, guided activities, meals)",
        },
        {
          day: "Day 3",
          title: "Sossusvlei & Deadvlei — Guided Dune Experience",
          items: [
            "Guided sunrise dune experience with a lodge naturalist ($40–60 extra) — a guide who explains the Namib's ecology, geology, and the adaptations of desert plants and animals makes the experience substantially richer.",
            "Summit Big Daddy or Dune 45 at dawn. Big Daddy at 325m is the tallest — a 45-minute climb rewarded with views that justify every step.",
            "Deadvlei: stand among the 900-year-old dead camel thorn trees. Your guide will explain why they died (the dunes cut off the water source), how old they are, and why they haven't decomposed (the desiccated air preserves the wood).",
            "Return to lodge for brunch and a rest through the midday heat (the Namib can reach 45°C in summer).",
            "Afternoon: optional hot air balloon flight over the Namib dunes at sunset ($150–180 extra) — one of the most spectacular experiences in Africa.",
            "Dinner at the lodge. Star-gazing with the lodge's telescope — the Milky Way is so dense here it casts a shadow.",
          ],
          cost: "$150–280 (lodge, guided walk, optional balloon)",
        },
        {
          day: "Day 4",
          title: "Drive to Swakopmund — Welwitschia Plains & Coastal Arrival",
          items: [
            "Morning drive C14 through the Kuiseb River Canyon. Stop at the Tropic of Capricorn sign — a classic Namibia photo stop.",
            "Welwitschia Drive in the Namib-Naukluft Park: these extraordinary plants have been alive since before the Middle Ages. Some individual plants are older than the Notre-Dame Cathedral.",
            "Arrive Swakopmund midday. Check in to Swakopmund Hotel & Entertainment Centre (housed in a historic railway station) or The Stiltz ($120–180/night).",
            "Afternoon: Swakopmund adventure — sandboarding, dune quad biking, or a desert ecology tour with Chameleon Desert Tours ($50–80).",
            "Evening: dinner at The Tug restaurant (seafood on the old tugboat) or Lighthouse Restaurant for fresh Namibian crayfish ($35–55/person).",
          ],
          cost: "$150–230 (hotel, adventure activity, fine dining)",
        },
        {
          day: "Day 5",
          title: "Cape Cross + Swakopmund Free Day",
          items: [
            "Morning drive to Cape Cross Seal Colony — 250,000 Cape Fur Seals on the Skeleton Coast. The scale is staggering. Get there early before tour buses arrive.",
            "Stop at the Cape Cross Lodge for a glass of wine with the Atlantic Ocean and the seal colony stretching to the horizon.",
            "Return to Swakopmund. Afternoon free: kayaking in Walvis Bay lagoon (flamingos and pelicans guaranteed) with Mola Mola Tours ($60) — one of Namibia's best wildlife experiences.",
            "Optional: Spitzkoppe day trip (the 'Matterhorn of Namibia') for photography — a spectacular granite inselberg rising from the desert floor. 1.5 hours inland.",
            "Dinner at Kücki's Pub — a Swakopmund institution. Local venison pie and cold Tafel Lager ($20–30).",
          ],
          cost: "$120–200 (seal colony, kayaking, meals)",
        },
        {
          day: "Day 6",
          title: "Drive to Etosha — Afternoon Game Drive",
          items: [
            "Long morning drive: Swakopmund to Etosha (5–6 hours). Stop at Omaruru for the charming Kristall Kellerei winery — surprisingly good Namibian rosé.",
            "Enter Etosha through Anderson Gate. Stay at Okaukuejo or Halali Rest Camp (NWR — excellent value mid-range, $60–100/night for a bungalow with AC).",
            "Afternoon game drive: the Etosha Pan extends to the horizon. The white salt crust creates a heat haze that makes animals appear to float. Surreal photography.",
            "Must-see: the Okaukuejo floodlit waterhole. Pull up a chair at sunset and wait. Lions, rhinos, elephants, and leopards all come to drink. Staff will tell you what's been coming.",
            "Dinner at the camp restaurant. Namibian braai (BBQ) with kudu boerewors (sausage) and maize pap.",
          ],
          cost: "$130–200 (park entry, bungalow, meals)",
        },
        {
          day: "Day 7",
          title: "Full Etosha Safari — Return to Windhoek",
          items: [
            "Dawn game drive from 6am. Mid-range tip: hire a park guide from the camp for the morning ($40–50) — they know the waterhole schedules and recent lion locations.",
            "Eastern Etosha: drive from Halali to Namutoni. The eastern section is more wooded and excellent for kudu, eland, and giraffe. Fischer's Pan holds flamingos after rain.",
            "Midday exit through the Von Lindequist Gate. Head south toward Windhoek via Otjiwarongo.",
            "Stop at the Cheetah Conservation Fund outside Otjiwarongo ($20 entry) — the world's largest cheetah sanctuary, rescuing cheetahs from farmland conflict.",
            "Evening return to Windhoek. Stay at Olive Grove for a farewell dinner. Try the Namibian game meat platter if you haven't yet.",
            "Return rental car. Early morning flight home from WDH.",
          ],
          cost: "$100–180 (park entry, park guide, CCF visit, hotel)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$500/day (fly-in camps)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Windhoek — The Olive Exclusive & City",
          items: [
            "Private VIP transfer from WDH. Met by your safari company's ground team.",
            "Check in to The Olive Exclusive Boutique Hotel ($250–350/night) — eight villas each with a private deck and panoramic Windhoek hills views. Namibia's finest city hotel.",
            "Private Windhoek city tour with a top historian guide: Katutura Township history, the National Art Gallery, and the Christuskirche in golden hour light.",
            "Private dinner at the hotel's chef's table — Namibian cuisine elevated: Kalahari truffle, oryx carpaccio, springbok loin, and local dessert wines from Namibia's Omaruru region.",
            "Full pre-trip logistics briefing with your safari company over post-dinner digestifs.",
          ],
          cost: "$300–500 (hotel, private guide, fine dining)",
        },
        {
          day: "Day 2",
          title: "Fly to Sossusvlei — &Beyond Sossusvlei Desert Lodge",
          items: [
            "Private charter flight from Windhoek to Sossusvlei airstrip (1 hour vs 5 hours driving). Aerial views of the Namib Desert are extraordinary from 1,000m.",
            "Check in to &Beyond Sossusvlei Desert Lodge ($800–1,200/night all-inclusive) — ten 'observatory suites' built into the ancient quartz plains with private plunge pools and telescopes in the roof.",
            "Private afternoon dune walk with the lodge's award-winning naturalist. Learning the Namib's ecology — from fog beetles to sidewinder adders — with an expert changes the landscape from beautiful to astonishing.",
            "Private sundowner on a dune crest. Champagne, local biltong, and 360-degree Namib silence.",
            "Private astronomy experience in your suite's open roof — the lodge has curated star charts and the naturalist gives a personalised night sky talk.",
          ],
          cost: "$900–1,300 (charter flight, lodge, all-inclusive)",
        },
        {
          day: "Day 3",
          title: "Deadvlei at Dawn — Private Hot Air Balloon",
          items: [
            "Pre-dawn departure with a private tracker and vehicle — you reach Deadvlei before any other vehicles arrive. The clay pan at first light, in silence, is one of the most extraordinary places on Earth.",
            "Private photography session in Deadvlei — your naturalist positions you for the best light angles. For landscape photographers this is a bucket-list morning.",
            "Return to lodge for brunch. The lodge's chef produces extraordinary meals with Namibian ingredients flown in from local producers.",
            "Afternoon: private hot air balloon flight over the Namib ($350–450 extra for private flight). Float above the dunes as the afternoon light turns them crimson.",
            "Cocktail hour on the lodge deck. Evening dinner under the stars — the lodge uses fire and lantern lighting for an authentic desert atmosphere.",
          ],
          cost: "$1,000–1,500 (lodge all-inclusive, private balloon)",
        },
        {
          day: "Day 4",
          title: "Fly to Swakopmund — Luxury Atlantic Coastal Experience",
          items: [
            "Morning charter flight from Sossusvlei to Swakopmund/Walvis Bay (45 minutes). The Skeleton Coast from the air — dramatic, desolate, and ancient.",
            "Check in to The Strand Hotel Swakopmund ($200–300/night) — a luxury beach hotel on the Atlantic with German colonial architecture and ocean suites.",
            "Private catamaran cruise from Walvis Bay with Mola Mola: bottle-nosed dolphins alongside the boat, African penguins, Cape Fur Seals, and Heaviside's dolphins (endemic to the Benguela Current). Oysters and sparkling wine on board.",
            "Afternoon: private Swakopmund sand dune tour on a luxury 4x4 — standing boarding and sand surfing if desired, plus a detailed geological explanation of the Namib coastal dunes.",
            "Dinner at The Tug's exclusive dining room — private table on the restored tugboat, fresh Namibian rock lobster, and Namibian Grüner Veltliner wine.",
          ],
          cost: "$400–600 (charter, hotel, private catamaran, dinner)",
        },
        {
          day: "Day 5",
          title: "Cape Cross — Spitzkoppe — Etosha Transfer",
          items: [
            "Private morning drive to Cape Cross Seal Colony at dawn — arrive before the tour buses for a genuinely wild experience with 250,000 seals and zero crowd noise.",
            "Drive inland to Spitzkoppe — a lone granite inselberg rising 700m from the desert plains, known as Namibia's Matterhorn and a sacred site for the San Bushmen.",
            "Private picnic lunch at the base of Spitzkoppe with Bushmen rock art viewing — some paintings are over 5,000 years old.",
            "Afternoon private charter flight to Etosha. Check in to Onguma The Fort or &Beyond Ongava Lodge ($400–700/night) — luxury private concessions on the Etosha boundary.",
            "Afternoon private game drive in the private concession — no park rules apply, meaning night drives and off-road tracking are possible.",
          ],
          cost: "$500–800 (private drive, charter, luxury lodge)",
        },
        {
          day: "Day 6",
          title: "Etosha Private Concession — Full Safari Day",
          items: [
            "Dawn private game drive with a specialist guide (5:30am). Private concession lodges have top-tier guides with radio networks tracking all major predators.",
            "Inside Etosha National Park: midday drive to the main waterholes. The concession vehicle can position in the prime spots.",
            "Bush lunch in the field — your lodge packs a gourmet picnic and the guide finds a shaded spot near an active waterhole.",
            "Afternoon: return to the concession for a walking safari with an armed guide. Tracking rhino on foot in Etosha is among Africa's most thrilling wildlife experiences.",
            "Sundowner at a remote waterhole in the concession. No other vehicles. Just wildlife, silence, and sundowner cocktails.",
            "Night game drive after dinner — the concession's night drives regularly encounter lions, leopards, and brown hyenas that stay off the road during daylight.",
          ],
          cost: "$500–800 (luxury lodge all-inclusive, private drives)",
        },
        {
          day: "Day 7",
          title: "Final Etosha Morning — Charter Home",
          items: [
            "Final dawn game drive (5:30am). Guides often save the best waterhole for the last morning.",
            "Bush breakfast in the field — eggs cooked on a camp fire, Namibian filter coffee, fresh fruit, and the sound of lions in the distance.",
            "Return to the lodge for checkout brunch — the lodge team presents a farewell gift of local Namibian products.",
            "Private charter flight from the Etosha airstrip directly to Windhoek (1 hour). Skip the 4-hour drive entirely.",
            "VIP lounge access at Windhoek airport and complimentary refreshments while you await your international connection.",
            "Depart Namibia — the world's least-densely populated country, one of its most spectacular, and for many travellers the journey that resets their sense of what 'natural world' means.",
          ],
          cost: "$400–600 (lodge, charter flight, airport transfers)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–35 (camping/hostel)",
      food: "$15–25 (self-catering + local)",
      transport: "$60–90 (basic 4x4 rental)",
      activities: "$20–50 (park entries + seals)",
      total: "~$120/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–180 (lodges/guesthouses)",
      food: "$30–60 (lodge + restaurants)",
      transport: "$80–120 (comfortable 4x4)",
      activities: "$50–120 (guided activities)",
      total: "~$250/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–1,200 (&Beyond/Onguma)",
      food: "$80–150 (all-inclusive, fine dining)",
      transport: "$200–500 (charter flights)",
      activities: "$100–300 (private guides + balloon)",
      total: "~$500+/day",
    },
    {
      tier: "🏕️ Camping Note",
      accommodation: "NWR camps $15–20/person",
      food: "Self-catering strongly recommended",
      transport: "4x4 required for Sossusvlei",
      activities: "Etosha park entry: $10/person/day",
      total: "Budget-friendly",
    },
    {
      tier: "✈️ Flights Note",
      accommodation: "N/A",
      food: "N/A",
      transport: "WDH internal charters: $200–500",
      activities: "Hot air balloon: $150–450",
      total: "Plan carefully",
    },
  ],

  mistakes: [
    {
      icon: "🚗",
      title: "Booking a 2x2 Car Instead of a 4x4",
      desc: "The last 4km to Sossusvlei, most of Etosha's secondary roads, and essentially everything west of Windhoek requires at minimum a high-clearance vehicle, and ideally a 4x4. A 2x2 sedan will get you stuck in the Namib sand within hours. Always book a 4x4 for Namibia — it is not optional.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌡️",
      title: "Arriving at Deadvlei After 10am",
      desc: "By 10am the Namibian sun has destroyed the shadow lines on the dunes that make Deadvlei photographs iconic. By 11am the heat in the clay pan is physically dangerous. The only correct time to be in Deadvlei is between sunrise and 9:30am. Set that alarm for 4:30am — it is worth every lost minute of sleep.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⛽",
      title: "Underestimating Fuel Range",
      desc: "Namibia's distances are enormous and petrol stations are sparse once you leave the main towns. The C14 between Sesriem and Swakopmund has stretches of 200km without a fuel stop. Always leave any town or camp with a full tank and carry a 20-litre jerry can. Running out of fuel in the Namib is not a minor inconvenience — it is a rescue emergency.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌙",
      title: "Leaving Etosha Before Dark",
      desc: "The Okaukuejo floodlit waterhole at night is one of Africa's great wildlife experiences. Rhinos arrive after dark. Lions drink between 9pm and midnight. Leopards appear at 2am. Camp inside the park and sit at the waterhole after dinner — do not leave Etosha before experiencing at least one full night at the waterhole.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🗓️",
      title: "Visiting in Summer Without Heat Strategy",
      desc: "Namibia in November to February can reach 45°C in the Namib and 38°C in Etosha. Wildlife activity drops to zero between 10am and 4pm and you will be miserable outside. Travel in May–October for the best conditions. If you must travel in summer, plan all outdoor activities for dawn and dusk only.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  tips: [
    {
      icon: "📡",
      title: "Download Offline Maps Before You Leave Windhoek",
      desc: "Cell signal in most of Namibia is non-existent. Download Maps.me or Google Maps offline data for the entire country before leaving Windhoek. The gravel roads in particular require reliable navigation. A dedicated Garmin GPS with Namibia maps is also worth renting from your car hire company.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🦁",
      title: "Stay Inside Etosha at Night — Waterhole Magic",
      desc: "Etosha's NWR rest camps (Okaukuejo, Halali, Namutoni) all have floodlit waterholes within the camp perimeter. Sitting at the waterhole from 9pm to midnight costs nothing and often produces more dramatic wildlife sightings than a full day's game driving. The black rhino population at Okaukuejo is the main event.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "The Dune 45 Sunrise Is Non-Negotiable",
      desc: "Sossusvlei is visited by thousands of tourists a year but the vast majority arrive after 9am and see a washed-out, shadowless landscape. If you arrive for sunrise and summit Dune 45 before 7am, you may have the entire ridge to yourself. The orange and purple shadow lines that make Namibia famous only exist in the first hour of light.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🐟",
      title: "Swakopmund Is the Best Food Town in Namibia",
      desc: "The Benguela Current that makes the Namib coast one of the world's most productive fishing grounds means the seafood in Swakopmund is exceptional. Fresh Namibian rock lobster, oysters from Walvis Bay, and Kingklip (a local reef fish) are all superb. The German bakeries are also genuinely excellent — imported recipes, local ingredients.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  faqs: [
    {
      q: "Do I need a 4x4 to self-drive Namibia?",
      a: "For the standard 7-day circuit (Windhoek, Sossusvlei, Swakopmund, Etosha), a high-clearance 4x4 is strongly recommended. The last 4km to Sossusvlei is sand-only and requires 4x4 or the free park shuttle. Etosha's main roads are gravel but manageable in a high-clearance 2x4. The secondary game-viewing roads in Etosha are better in a 4x4. Budget $60–90/day for a basic 4x4 from local operators.",
    },
    {
      q: "Is Namibia safe to self-drive?",
      a: "Namibia is one of Africa's safest countries for self-drive travel. Crime rates are low, roads (while mostly gravel) are well-maintained and signposted, and NWR rest camps are secure. The main risks are wildlife encounters (stay in your vehicle in game parks), heat exhaustion (drive at dawn and dusk in summer), and mechanical breakdowns in remote areas (take a spare tyre — ideally two — and a basic tool kit).",
    },
    {
      q: "What is the best time to visit Namibia?",
      a: "May to October is the dry season and the best time to visit. Wildlife concentrates around waterholes (easiest game viewing), temperatures are comfortable (15–28°C days, cold nights), and there are no malaria risks in most areas. July–August are the peak months with cooler temperatures. November–February is very hot but offers green landscapes, baby animals, and migrant birds. Avoid December–January in the Namib unless you can handle 40°C+ heat.",
    },
    {
      q: "Can I combine Namibia with Botswana or South Africa?",
      a: "Yes — this is one of Africa's best road trip combinations. Namibia to Botswana: drive through the Caprivi Strip (now Zambezi Region) to Chobe National Park and the Okavango Delta. Namibia to South Africa: drive south through Fish River Canyon and across the Orange River border. Many travellers do a 14-21 day Southern Africa circuit: Johannesburg, Namibia, Botswana, Victoria Falls, and back. All three countries are visa-friendly for Western passport holders.",
    },
  ],

  combineWith: ["Botswana Okavango", "South Africa Cape Town", "Zimbabwe Victoria Falls", "Zambia"],
  relatedSlugs: ["rwanda-gorillas-5-days", "ethiopia-lalibela-5-days", "kenya-masai-mara-7-days"],

  galleryQuery: "namibia sossusvlei deadvlei etosha safari desert landscape",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function NamibiaPage() {
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
