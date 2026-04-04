import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Phnom Penh",
  country: "Cambodia",
  countryFlag: "🇰🇭",
  slug: "phnom-penh-3-days",
  heroQuery: "phnom penh royal palace mekong river cambodia",
  heroAlt: "Royal Palace golden spires reflected in the Mekong River at sunset, Phnom Penh, Cambodia",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Phnom Penh is one of Southeast Asia's most compelling capitals — a city that holds the full weight of Cambodian history while transforming at extraordinary speed. The Royal Palace glitters beside the Mekong, the Killing Fields and Tuol Sleng demand a full day of respectful attention, and the riverfront night scene buzzes with energy after dark. Three days is enough to absorb the history, eat well at street stalls and rooftop restaurants, and cruise the confluence of the Mekong and Tonle Sap rivers at golden hour.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$25",
    bestMonths: "Nov–Feb",
    airport: "PNH",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Royal Palace & National Museum" },
    { id: "day2", emoji: "📅", label: "Day 2 — Killing Fields & Tuol Sleng" },
    { id: "day3", emoji: "📅", label: "Day 3 — Mekong Cruise & Street Food" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — E-Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Cambodia E-Visa (tourist)"],
        ["Processing", "3 business days"],
        ["Fee", "$36 USD (e-visa fee + processing)"],
        ["Validity", "30 days, single entry"],
        ["Apply at", "evisa.gov.kh (official Cambodia e-visa portal)"],
        ["Documents", "Passport scan, digital photo, credit card"],
        ["Notes", "Visa on arrival is also available at Phnom Penh International Airport ($30 USD) but the e-visa avoids queues. Always use the official government portal."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — E-Visa or Visa on Arrival",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "E-Visa or Visa on Arrival"],
        ["Processing", "3 days (e-visa) or on arrival"],
        ["Fee", "$30 USD (visa on arrival) or $36 USD (e-visa)"],
        ["Validity", "30 days, single entry"],
        ["Apply at", "evisa.gov.kh or at the airport"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "The e-visa is recommended to avoid airport queues. Extensions are possible at the immigration department in Phnom Penh for another 30 days ($45)."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$25–40/day",
      days: [
        {
          day: "Day 1",
          title: "Royal Palace, National Museum & Riverside Street Food",
          items: [
            "08:30 — Royal Palace and Silver Pagoda complex ($10 entrance): the palace is still used by the King of Cambodia so only the outer grounds and Silver Pagoda are open to visitors; the 5,000 silver floor tiles and Emerald Buddha are extraordinary",
            "10:30 — Walk north along the Sisowath Quay riverfront (free): the promenade along the Tonle Sap and Mekong confluence is Phnom Penh's most beautiful public space; look for the distinctive French colonial architecture along the waterfront",
            "11:30 — National Museum of Cambodia ($10 entrance): one of Southeast Asia's finest collections of Khmer art including the pre-Angkor Sambor Prei Kuk sculptures and the massive Vishnu from Angkor Wat — allow 90 minutes",
            "13:30 — Lunch at the Phnom Penh street food market near the Central Market (Psar Thmei): nom banh chok (Khmer noodles with green curry broth) and fried rice for $2–4 total; the Art Deco dome of the Central Market is worth seeing from outside",
            "15:00 — Tuk-tuk tour of the French Quarter: Phnom Penh Railway Station (free to admire from outside), the Post Office, and the old Hotel le Royal (now Raffles) — French colonial architecture at its most intact in Southeast Asia; negotiate a 2-hour tuk-tuk for $5",
            "19:00 — Sunset drinks and dinner on the riverfront at a local Khmer restaurant: fish amok (coconut curry with fish), beef lok lak (peppered beef), and Angkor beer for $8–12/person; avoid the tourist-facing restaurants with English menus at the front",
          ],
          cost: "$25–35 (entrance fees, tuk-tuk, meals)",
        },
        {
          day: "Day 2",
          title: "Killing Fields of Choeung Ek & Tuol Sleng Genocide Museum",
          items: [
            "08:00 — Depart for the Killing Fields of Choeung Ek (15km south of city centre): rent a tuk-tuk for the morning ($8–10 round trip with waiting time); the site closes for lunch",
            "08:45 — Killing Fields of Choeung Ek ($6 entrance including audio guide): the audio guide narrated by survivors takes 90 minutes; the Memorial Stupa containing 5,000 skulls and the mass grave depressions across the site are profoundly moving; this is sacred ground — dress respectfully and observe silence",
            "11:00 — Return to the city; lunch at a local restaurant near Tuol Sleng: try Khmer curry with rice and fresh coconut water ($4–6)",
            "13:00 — Tuol Sleng Genocide Museum S-21 ($5 entrance, or $12 with a survivor guide): the former high school converted into a Khmer Rouge prison where 17,000 people were detained; the Documentation Centre provides historical context; survivor-guided tours run at specific times and are among the most powerful museum experiences in the world",
            "16:00 — Time for reflection: walk to the nearby Wat Langka pagoda (free entry) — an active Buddhist temple that served as a centre of Khmer Rouge resistance documentation; monks welcome respectful visitors",
            "19:00 — Street food dinner at the Kandal Market night stalls: grilled meats, papaya salad, and sticky rice for $5–8 total",
          ],
          cost: "$20–30 (tuk-tuk, entrance fees, meals)",
        },
        {
          day: "Day 3",
          title: "Mekong Sunset Cruise, Wat Phnom & Departure",
          items: [
            "09:00 — Wat Phnom (the founding hill of Phnom Penh, $1 donation): the hilltop temple where legend says the city was founded by a woman named Penh; climb the naga-flanked stairway and watch monks perform morning blessings",
            "10:30 — Psar Toul Tom Poung (Russian Market): the best market in Phnom Penh for silk scarves, carved wooden Ganesh figures, silverwork, and Khmer-print shirts at factory outlet prices; expect to negotiate and budget $10–20 for gifts",
            "13:00 — Final Khmer lunch: beef lok lak or fish amok with coconut milk rice at a local restaurant near the market ($4–6)",
            "17:30 — Mekong and Tonle Sap River sunset cruise ($8–12 per person on a shared boat): the confluence of two of Asia's great rivers at golden hour, with the Royal Palace visible on the bank; many budget boats depart from the riverfront near the Palace",
            "19:30 — Final evening on Sisowath Quay: cold Angkor beer at a riverside bar as the city lights reflect in the water",
          ],
          cost: "$20–30 (entrance, market, cruise, meals)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$70–120/day",
      days: [
        {
          day: "Day 1",
          title: "Royal Palace, National Museum & Rooftop Dinner",
          items: [
            "09:00 — Royal Palace and Silver Pagoda with a licensed guide ($10 entrance + $25 for a 2-hour guided tour): the guide explains the architectural symbolism of the Khmer and French hybrid design and the significance of the coronation hall for the current king",
            "11:30 — National Museum of Cambodia guided tour ($10 + $20 guide): focus on the Khmer Shiva and Vishnu sculptures from the Angkor period and the guide's explanation of the looting and repatriation campaign that has recovered 600 stolen artefacts since 2000",
            "13:30 — Lunch at a riverside restaurant on Sisowath Quay: Cambodian fish amok and fresh spring rolls with a river view ($15–20/person)",
            "16:00 — Explore the French Quarter independently: Phnom Penh Railway Station, Central Market Art Deco dome, and the riverside promenade; Phnom Penh is very walkable in the late afternoon when the heat drops",
            "19:30 — Rooftop dinner at a sky bar overlooking the Mekong ($20–30/person): many hotels on Sisowath Quay have rooftop bars with excellent Khmer tasting menus and cocktails; the city lights along the river are beautiful after dark",
          ],
          cost: "$70–90 (guides, meals, drinks)",
        },
        {
          day: "Day 2",
          title: "Killing Fields & Tuol Sleng with Survivor Guide",
          items: [
            "08:00 — Private tuk-tuk booked through hotel for a full day of historical sites ($25 for a driver who waits all day)",
            "09:00 — Killing Fields of Choeung Ek with audio guide ($6): allocate the full 90 minutes for the audio guide before your companion visits the memorial",
            "11:00 — Drive to a quiet lunch restaurant; debrief on the morning; Cambodian food is known to comfort as much as nourish — try the sweet and sour tamarind fish soup",
            "13:00 — Tuol Sleng S-21 with a survivor guide ($12 with survivor guide, runs at 2pm — book online in advance): this 75-minute guided tour with a genocide survivor is the most important museum experience in Southeast Asia and often sells out",
            "15:30 — Wat Phnom and the Documentation Centre of Cambodia (DC-Cam, free): DC-Cam houses 600,000+ documents from the Khmer Rouge period and is open to researchers and respectful visitors",
            "20:00 — Dinner at Malis Restaurant ($30/person): the best Cambodian fine-dining restaurant in the city run by Chef Luu Meng; the beef amok and banana blossom salad are exceptional",
          ],
          cost: "$70–100 (tuk-tuk, guides, survivor tour, dinner)",
        },
        {
          day: "Day 3",
          title: "Mekong Cruise, Silk Island & Departure",
          items: [
            "09:00 — Silk Island (Koh Dach, 12km upstream): arrange a private speedboat through the hotel ($40 round trip) to visit the island where traditional Cambodian silk weaving has been practiced for centuries; watch weavers on hand looms and buy silk directly from producers",
            "12:00 — Return to the city for lunch at a French-Cambodian cafe in the Boeung Keng Kang neighbourhood (BKK1): the city's expat quarter has excellent cafes and bakeries",
            "14:30 — Russian Market for silk scarves, silverwork, and Angkor beer t-shirts; the market is best in the afternoon when the morning crowds have thinned",
            "17:30 — Private Mekong sunset cruise ($40–60 for a private boat for up to 6 people): arrange through the hotel for a proper traditional wooden boat with sunset drinks provided",
            "20:00 — Farewell dinner at a restaurant on the riverfront",
          ],
          cost: "$80–110 (boat, lunch, market, private cruise, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$200–400/day",
      days: [
        {
          day: "Day 1",
          title: "Private Palace Tour, Raffles & Fine Dining",
          items: [
            "09:00 — Private Royal Palace guided tour arranged through Raffles Hotel Le Royal or Rosewood Phnom Penh ($50 private guide): the most knowledgeable independent guides in Phnom Penh can arrange access to areas of the palace grounds not included in standard visits",
            "12:00 — Lunch at Raffles Hotel Le Royal ($40/person): the legendary 1929 colonial hotel where Somerset Maugham, Jacqueline Kennedy, and Charles de Gaulle all stayed; the veranda lunch of Cambodian classics in a restored colonial dining room is extraordinary",
            "14:30 — National Museum private curator tour (arrange through hotel concierge, $80): the museum's academic curators can explain the provenance and significance of individual pieces including the repatriated sculptures returned from US museums after 2010",
            "19:00 — Rosewood Phnom Penh rooftop bar (42nd floor): the highest bar in Cambodia with panoramic views over the Mekong and the city skyline; cocktails at $15–18",
            "21:00 — Dinner at Malis or Restaurant Topaz ($50–80/person): the two finest restaurants in Phnom Penh for elevated Khmer and French-Cambodian cuisine",
          ],
          cost: "$250–400 (luxury hotel, private guides, fine dining)",
        },
        {
          day: "Day 2",
          title: "Private Killing Fields & S-21 with Historian",
          items: [
            "08:30 — Private car with hotel driver to Killing Fields ($100 for full-day private car with English-speaking driver)",
            "09:00 — Killing Fields of Choeung Ek with a historian guide ($80, 2-hour private tour): a specialist historian explains the political events of 1975–1979, the mechanics of the Khmer Rouge infrastructure, and the role of individual sites within the broader genocide — a profound level of understanding beyond the standard audio guide",
            "11:30 — Private lunch at a secluded garden restaurant outside the city: traditional Cambodian home-cooking prepared by a social enterprise employing genocide survivor families ($30/person)",
            "14:00 — Tuol Sleng S-21 with a survivor guide ($12) followed by a private meeting with a Documentation Centre Cambodia researcher ($100) who walks through the declassified Khmer Rouge documents and explains the ongoing trial proceedings",
            "20:00 — Dinner at Topaz Restaurant ($60/person, French-Cambodian cuisine): regarded as Phnom Penh's finest restaurant with an exceptional wine cellar and tableside service",
          ],
          cost: "$300–450 (private car, historian, researcher meeting, fine dining)",
        },
        {
          day: "Day 3",
          title: "Private Mekong Cruise, Silk Island & Departure",
          items: [
            "08:00 — Private luxury speedboat to Silk Island with a textile historian ($150, 3-hour excursion): observe the finest royal silk weaving workshops and commission a bespoke piece from a master weaver (delivery by courier to your home country, $200–500)",
            "12:00 — Return to the city; final lunch at the Raffles veranda or a rooftop restaurant of your choice",
            "15:00 — Private Mekong and Tonle Sap sunset cruise on a traditional wooden boat ($200, private charter with sundowner drinks and Cambodian snacks): the confluence of two of the world's great rivers as the sun drops behind Phnom Penh is an unforgettable farewell scene",
            "20:00 — Final dinner at Rosewood's restaurant or a private dining experience arranged by the concierge on a boat moored at the Royal Quay ($100/person private dining experience)",
          ],
          cost: "$350–500 (silk island tour, private cruise, fine dining, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Ultra Budget",
      accommodation: "$4–7 (dormitory hostel near riverfront)",
      food: "$3–5 (nom banh chok $1, street rice $2, market meals)",
      transport: "$1–3 (shared moto, walking in the riverfront area)",
      activities: "$3–8 (Wat Phnom donation, free riverfront, night market)",
      total: "$12–20/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "$8–15 (guesthouse or hostel near riverfront)",
      food: "$6–10 (street food, market stalls, local restaurants)",
      transport: "$3–8 (tuk-tuk, shared songthaew)",
      activities: "$8–15 (entrance fees, boat cruise)",
      total: "$25–40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$40–80 (3-4 star hotel near riverfront)",
      food: "$20–35 (sit-down restaurants, rooftop bars)",
      transport: "$15–25 (private tuk-tuk, speedboat)",
      activities: "$25–40 (guides, survivor tours, silk island)",
      total: "$70–120/day",
    },
    {
      tier: "🌟 Premium",
      accommodation: "$100–180 (boutique riverside hotel)",
      food: "$40–70 (Malis or Topaz dinner, rooftop sundowners)",
      transport: "$30–60 (private car full day, private boat)",
      activities: "$50–80 (historian guide, cooking class, silk island)",
      total: "$130–200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–500 (Raffles Hotel Le Royal or Rosewood Phnom Penh)",
      food: "$80–150 (Malis, Topaz, fine dining)",
      transport: "$80–150 (private car, luxury boat charter)",
      activities: "$100–200 (historian guides, private curator tours)",
      total: "$200–400/day",
    },
  ],
  mistakes: [
    {
      icon: "🌡️",
      title: "Visiting in the dry heat of March–May without preparation",
      desc: "Phnom Penh temperatures reach 38–40 degrees Celsius in April and May with intense humidity. The Killing Fields and outdoor sites become genuinely exhausting. Plan outdoor visits before 10am and after 4pm, carry water, and allow afternoon rest time in an air-conditioned space.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📸",
      title: "Treating Tuol Sleng and the Killing Fields as photo opportunities",
      desc: "Both sites are memorials to mass atrocity and the families of victims still visit. Photography of human remains is prohibited at the Killing Fields memorial. Dress conservatively (knees and shoulders covered), speak quietly, and spend the full guided time rather than rushing through for Instagram photos.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚕",
      title: "Not negotiating tuk-tuk fares before departing",
      desc: "Tuk-tuks in Phnom Penh are inexpensive but fares are negotiated before the ride, not after. Agree on the price clearly, including any waiting time, before getting in. PassApp and Grab work well for ride-hailing with fixed prices if you prefer not to negotiate.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💰",
      title: "Using US dollars everywhere without keeping small Cambodian riel",
      desc: "Cambodia uses both USD and Cambodian riel. USD is accepted almost everywhere but change is often given in riel. Keep riel for tuk-tuks, market stalls, and small purchases. The rate is approximately 4,000 riel per USD. ATMs dispense USD in Phnom Penh.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🍺",
      title: "Underestimating the Phnom Penh food scene",
      desc: "Phnom Penh has one of Southeast Asia's most underrated food scenes. Fish amok, beef lok lak, Cambodian curry, and nom banh chok noodles are excellent. Many visitors eat at tourist-facing Western restaurants and miss the local food entirely. The Central Market and Kandal Market areas have the best street food.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Book the Tuol Sleng survivor guide tour well in advance",
      desc: "The Tuol Sleng survivor-guided tours ($12) run at specific times and have limited capacity. They are the most powerful museum experience in Southeast Asia and frequently sell out. Book online at least 48 hours ahead. Find guided Phnom Penh tours at https://www.getyourguide.com/s/?q=Phnom+Penh&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Take the sunset river cruise when the light is gold on the Royal Palace",
      desc: "The confluence of the Mekong and Tonle Sap rivers at 5:30–6:30pm catches the Royal Palace towers in perfect golden light. Budget boats ($8–12) depart from the riverfront throughout the afternoon. The view of Phnom Penh's skyline from the water is completely different from the riverfront promenade.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍜",
      title: "Start each morning with nom banh chok at the market",
      desc: "Nom banh chok (Khmer noodles with fish-based green curry broth, bean sprouts, and fresh herbs) is served only in the morning at market food stalls. It costs $1–1.50 and is the most authentic Cambodian breakfast available. The Central Market noodle sellers open at 6am.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏍️",
      title: "Use PassApp or Grab for all city transport",
      desc: "PassApp and Grab both operate in Phnom Penh with transparent fixed pricing. A tuk-tuk across the city costs $2–5. The apps also offer car hire for day trips to the Killing Fields. Street hailing is fine but agree on the price before departing. Motodops (motorcycle taxis) are the fastest and cheapest option for short city hops.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Phnom Penh safe for tourists?",
      a: "Phnom Penh is generally safe for tourists. The main risks are petty theft (bag-snatching from motos is common on busy streets — keep bags on the inside away from traffic) and tuk-tuk overcharging. The riverfront area and BKK1 neighbourhood are well-lit and busy at night. Avoid displaying expensive cameras and phones openly on the street. The city has improved significantly in safety over the past decade.",
    },
    {
      q: "How long should I spend at the Killing Fields and Tuol Sleng?",
      a: "Allow a full day for both sites together. The Killing Fields audio guide takes 90 minutes if you follow the full route. After the Killing Fields, most visitors need quiet time before Tuol Sleng. Plan 2 hours at Tuol Sleng for the standard visit or 2.5 hours with a survivor guide. Combine both into one day but do not plan any other major activities on that day.",
    },
    {
      q: "What is the best way to get from Phnom Penh to Siem Reap for Angkor Wat?",
      a: "The most comfortable option is the Giant Ibis or Mekong Express bus ($12–15, 6 hours) — the gold standard for intercity buses in Cambodia with air-conditioning, meals, and reliable timing. The speedboat on the Tonle Sap Lake ($35, 5–6 hours) is scenic but rough in dry season. Budget airlines (Cambodian Bayon Airlines) fly Phnom Penh to Siem Reap in 45 minutes from $40.",
    },
    {
      q: "Do I need to tip in Cambodia?",
      a: "Tipping is not mandatory in Cambodia but is genuinely appreciated. Restaurant tips of 10% are standard in tourist-facing restaurants (check whether a service charge has been added first). Tuk-tuk drivers appreciate rounding up the fare. Survivor guides at Tuol Sleng work for low wages and a $5–10 tip acknowledges the emotional labour of their work. Hotel staff appreciate $1–2 per service.",
    },
  ],
  combineWith: ["siem-reap-4-days", "ho-chi-minh-city-4-days", "bangkok-4-days"],
  relatedSlugs: ["siem-reap-4-days", "ho-chi-minh-city-4-days", "bangkok-4-days", "chiang-mai-3-days"],
};

export const metadata: Metadata = {
  title: "Phnom Penh in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Phnom Penh itinerary — Royal Palace, National Museum, Tuol Sleng, Killing Fields, Mekong River sunset cruise, and street food scene. Budget $25/day to luxury Raffles Hotel. All visa info included.",
  keywords: [
    "Phnom Penh itinerary",
    "Phnom Penh 3 days",
    "Phnom Penh travel guide 2026",
    "Killing Fields Phnom Penh",
    "Tuol Sleng Genocide Museum",
    "Royal Palace Cambodia",
    "Mekong River cruise",
    "Phnom Penh visa Indian passport",
    "Cambodia travel guide",
  ],
  openGraph: {
    title: "Phnom Penh in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Royal Palace, Killing Fields, Tuol Sleng, Mekong sunset cruise — Phnom Penh in 3 days from $25/day to luxury Raffles.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/phnom-penh-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phnom Penh in 3 Days: Complete 2026 Itinerary",
    description:
      "Royal Palace, Killing Fields, Tuol Sleng, Mekong sunset cruise — Phnom Penh in 3 days from $25/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/phnom-penh-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Phnom Penh in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Phnom Penh in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/phnom-penh-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Phnom Penh",
      description:
        "Phnom Penh, Cambodia — Royal Palace, National Museum, Tuol Sleng Genocide Museum, the Killing Fields of Choeung Ek, and Mekong River sunset cruises.",
      geo: { "@type": "GeoCoordinates", latitude: 11.5564, longitude: 104.9282 },
    },
  ],
};

export default function PhnomPenhPage() {
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
