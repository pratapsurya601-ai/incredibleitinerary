import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Hong Kong 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Hong Kong trip in 4 days. Complete Hong Kong travel guide: Victoria Peak, dim sum, Star Ferry, Kowloon night markets, Lantau Big Buddha, Macau.",
  keywords: [
    "Hong Kong travel guide",
    "Hong Kong itinerary 4 days",
    "Victoria Peak Hong Kong",
    "dim sum Hong Kong",
    "Star Ferry",
    "Kowloon night market",
    "Lantau Big Buddha",
    "Hong Kong budget travel",
  ],
  openGraph: {
    title: "Hong Kong 4-Day Itinerary 2026: Asia's Greatest Skyline",
    description:
      "The most vertical city on Earth — 8 million people, the highest concentration of skyscrapers in the world, dim sum at 6am, and a harbour skyline that lights up every night. The complete Hong Kong guide.",
    url: "https://www.incredibleitinerary.com/blog/hong-kong-4-days",
    siteName: "IncredibleItinerary",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1532029387626-82c5a7f7b53b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hong Kong skyline at night from Victoria Harbour with Kowloon and skyscrapers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hong Kong 4-Day Itinerary 2026: Trip Planner",
    description:
      "Victoria Peak, dim sum, Star Ferry and Symphony of Lights. Budget to luxury day-by-day itineraries.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hong-kong-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hong Kong in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete Hong Kong travel guide covering Victoria Peak, Kowloon night markets, the Star Ferry, dim sum culture, Lantau Island and the Macau day trip — with day-by-day itineraries for every budget.",
      image: "https://images.unsplash.com/photo-1532029387626-82c5a7f7b53b?w=1200&q=80",
      datePublished: "2026-01-20",
      dateModified: "2026-04-01",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/hong-kong-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Hong Kong 4-Day Guide", item: "https://www.incredibleitinerary.com/blog/hong-kong-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hong Kong",
      description:
        "Hong Kong is one of Asia's greatest cities — the world's most vertical skyline, extraordinary dim sum culture, Victoria Peak views, Kowloon street life, and a unique East-meets-West identity.",
      touristType: ["City travellers", "Food lovers", "Shoppers", "Photography enthusiasts", "Culture seekers"],
      geo: { "@type": "GeoCoordinates", latitude: 22.3193, longitude: 114.1694 },
      containedInPlace: { "@type": "AdministrativeArea", name: "Hong Kong SAR, China" },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Hong Kong",
  country: "Hong Kong SAR",
  countryFlag: "🇭🇰",
  slug: "hong-kong-4-days",
  heroQuery: "hong kong skyline victoria harbour night kowloon tram",
  heroAlt: "Hong Kong skyline at night from Victoria Harbour with Kowloon and skyscrapers",
  category: "East Asia",
  date: "January 20, 2026",
  readTime: "14 min read",
  intro:
    "Picture the most vertical city on Earth: 8 million people living in the world's highest concentration of skyscrapers, clustered on a peninsula and island where there is almost nowhere to build but up. A tram that has been grinding up Victoria Peak since 1888, rewarding you at the top with a skyline so densely built it looks physically impossible. Dim sum at 6am in a restaurant so loud with families shouting orders that you communicate by ticking boxes on paper while aunties push rattling carts at you — the most alive breakfast experience anywhere in the world. And every evening at 8pm, the buildings on both sides of Victoria Harbour light up simultaneously in the Symphony of Lights — a free, 13-minute show that turns the skyline into the world's largest theatrical display. Hong Kong, where China meets the world at its most intense, its most delicious and its most visually stunning.",

  stats: {
    duration: "4 Days",
    budgetFrom: "HKD $450 (~$58)",
    bestMonths: "Oct–Dec",
    airport: "HKG (Chek Lap Kok)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏙️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚇", label: "Getting Around" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa-free", "Indian passport holders can enter Hong Kong visa-free for 14 days"],
        ["Separate rules", "Hong Kong entry is completely independent of mainland China visa requirements"],
        ["No prior arrangement", "Simply arrive at HKG — no pre-registration needed"],
        ["Extension", "Can apply for extension at HK Immigration Department if needed"],
        ["Note", "This 14-day visa-free access does not apply to mainland China — you need a separate visa for Shenzhen or Guangzhou"],
        ["VPN", "Hong Kong has unrestricted internet — VPN not required (unlike mainland China)"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "Western Passports (US / UK / EU / AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["US passport", "Visa-free for 90 days"],
        ["UK passport", "Visa-free for 180 days (British National Overseas holders: 90 days)"],
        ["EU passports", "Visa-free for 90 days for most EU member states"],
        ["Australia", "Visa-free for 90 days"],
        ["No registration", "No prior arrangement needed — just arrive"],
        ["Separate from China", "Hong Kong entry does not grant access to mainland China — apply separately if needed"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "HKD $450/day (~$58)",
      days: [
        {
          day: "Day 1",
          title: "Arrive + Kowloon Street Life + Symphony of Lights",
          items: [
            "Arrive HKG — Airport Express to Kowloon or Central (HKD $90–110, 24 min)",
            "Check in to hostel in Mong Kok or Tsim Sha Tsui (HKD $150–220/night dorm)",
            "Get an Octopus card at the airport (HKD $150 deposit + balance) — essential for all transport",
            "Explore Kowloon: Nathan Road, Temple Street market (open from 4pm), Ladies' Market (Tung Choi Street)",
            "Street food dinner in Mong Kok: roast pork rice, curry fish balls, egg waffles (HKD $40–60)",
            "8pm: walk to Tsim Sha Tsui waterfront promenade for Symphony of Lights — free, faces Hong Kong Island",
          ],
          cost: "HKD $430–480 (transport + hostel + food + Octopus)",
        },
        {
          day: "Day 2",
          title: "Victoria Peak + Central + Star Ferry",
          items: [
            "Morning dim sum: find a local cha chaan teng (Hong Kong café) or dim sum parlour — order har gow, siu mai, cheung fun (HKD $60–80)",
            "Take the Star Ferry from Tsim Sha Tsui to Central (HKD $3.40 — one of the world's great transport bargains)",
            "Ride the Peak Tram to Victoria Peak (HKD $88 return — book online to skip the queue)",
            "Walk the Peak Circle Walk (45 min loop) for multiple skyline angles",
            "Afternoon: explore Central's mid-levels, SoHo neighbourhood, PMQ design market (free)",
            "Ride the Central-Mid-Levels Escalator — world's longest outdoor covered escalator, free",
            "Dinner: Wan Chai or Causeway Bay local restaurants (HKD $80–120)",
          ],
          cost: "HKD $380–430 (ferry + tram + food)",
        },
        {
          day: "Day 3",
          title: "Lantau Island: Big Buddha + Macau Option",
          items: [
            "Take MTR to Tung Chung then Ngong Ping 360 cable car (HKD $220 return) to Tian Tan Buddha (Big Buddha)",
            "Tian Tan Buddha and Po Lin Monastery: entry free, vegetarian lunch at monastery (HKD $100)",
            "Option A: Continue to Macau — ferry from Tung Chung or Central Ferry Terminal (HKD $180–220 each way, 1hr)",
            "In Macau: Ruins of St Paul's, Senado Square, Venetian Casino (free to walk through), Portuguese egg tarts",
            "Return by last ferry (check schedule — last boats around 10pm–midnight)",
            "Option B (no Macau): afternoon Stanley Market and Stanley seafront promenade by bus",
          ],
          cost: "HKD $550–650 (cable car + ferry if Macau + meals)",
        },
        {
          day: "Day 4",
          title: "Hong Kong Island Markets + Last Skyline + Depart",
          items: [
            "Morning: wet market visit in Central or Wan Chai — the real Hong Kong before 9am",
            "Walk the Sheung Wan antique shops on Hollywood Road (free browsing)",
            "Man Mo Temple (free) — incense spirals hanging from the ceiling, 1847",
            "Lunch: last dim sum or roast goose (char siu) at a local BBQ shop (HKD $80–100)",
            "Final harbour views from the Star Ferry (HKD $3.40) crossing back to Kowloon",
            "Airport Express from Kowloon or Hong Kong station (HKD $90–110)",
          ],
          cost: "HKD $300–360 (food + ferry + airport express)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "HKD $1,000/day (~$128)",
      days: [
        {
          day: "Day 1",
          title: "Arrive + Kowloon Culture + Rooftop Bar",
          items: [
            "Airport Express to hotel (HKD $110)",
            "Check in to 3-star hotel in Tsim Sha Tsui or Jordan (HKD $500–700/night)",
            "Guided afternoon: Kowloon Walled City Park (free), Nan Lian Garden (free), Chi Lin Nunnery (free)",
            "Temple Street Night Market — evening street food and browsing",
            "Symphony of Lights from Tsim Sha Tsui waterfront (8pm, free)",
            "Post-show drink at a Tsim Sha Tsui rooftop bar with harbour views (HKD $100–150/drink)",
          ],
          cost: "HKD $900–1,050 (hotel + transport + food + drinks)",
        },
        {
          day: "Day 2",
          title: "Peak + Central Fine Dining + Star Ferry",
          items: [
            "Proper dim sum breakfast at a real dim sum restaurant — Tim Ho Wan (cheapest Michelin, ~HKD $150/person)",
            "Peak Tram + Victoria Peak (HKD $88 return, book online)",
            "Explore The Peak Galleria and Circle Walk",
            "Star Ferry crossing (HKD $3.40) — the most iconic 8 minutes in Hong Kong",
            "Afternoon: Central galleries, PMQ, Soho neighbourhood exploration",
            "Evening: dinner at a recommended Cantonese restaurant in Wan Chai (HKD $250–400/person)",
          ],
          cost: "HKD $950–1,100 (hotel share + meals + activities)",
        },
        {
          day: "Day 3",
          title: "Macau Day Trip",
          items: [
            "TurboJet or Cotai Water Jet ferry to Macau (HKD $180–220 each way, 55 min)",
            "Macau: Ruins of St Paul's, Monte Fort, Senado Square — all free",
            "Portuguese lunch in Taipa Village (HKD $200–300/person)",
            "Afternoon: walk through the Venetian Macao casino floor (free), optional Cotai Strip exploring",
            "Lord Stow's Bakery — original Macau egg tarts in Coloane Village",
            "Evening ferry back to Hong Kong: arrive for a late dinner in Causeway Bay",
          ],
          cost: "HKD $800–1,000 (ferry + meals in Macau)",
        },
        {
          day: "Day 4",
          title: "Lantau Buddha + Aberdeen + Depart",
          items: [
            "Morning: Ngong Ping 360 cable car to Tian Tan Buddha (HKD $220 return)",
            "Big Buddha, Po Lin Monastery vegetarian lunch (HKD $100)",
            "Afternoon: Aberdeen fishing village — sampan tour of Aberdeen Harbour (HKD $80)",
            "Jumbo Floating Restaurant area photos (exterior, the restaurant itself has relocated)",
            "Final Star Ferry crossing and skyline views",
            "Airport Express from Hong Kong station with in-town check-in (HKD $110)",
          ],
          cost: "HKD $900–1,000 (activities + meals + transport)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "HKD $3,000/day (~$385)",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Harbour View Hotel + Kowloon at Night",
          items: [
            "Airport Express + taxi to hotel (or limousine transfer HKD $600–800)",
            "Check in to The Peninsula Hong Kong, Mandarin Oriental or Four Seasons (HKD $2,500–5,000+/night)",
            "Peninsula Hotel afternoon tea — a Hong Kong institution (HKD $500–700/person, book in advance)",
            "Private guide for Kowloon evening tour: Tsim Sha Tsui waterfront, viewing deck at ICC (HKD $500)",
            "Symphony of Lights from a reserved waterfront table at a Tsim Sha Tsui restaurant",
            "Dinner at T'ang Court (Langham Hotel, 3 Michelin stars) or Yan Toh Heen (HKD $1,200–2,000/person)",
          ],
          cost: "HKD $4,000–5,500 (hotel + afternoon tea + guide + dinner)",
        },
        {
          day: "Day 2",
          title: "Victoria Peak + Private Harbour Cruise + Michelin Dinner",
          items: [
            "Private Peak Tram booking + VIP access (arrange through concierge)",
            "Breakfast at The Peak with panoramic views",
            "Private harbour cruise on a traditional junk boat (HKD $2,000–3,500 for 2hrs, sunset timing)",
            "Cruise includes champagne, canapes and unobstructed skyline views from the water",
            "Afternoon: private shopping guide in Central — Lane Crawford, Pedder Building, IFC Mall",
            "Dinner at Lung King Heen (Four Seasons, 3 Michelin stars — first Chinese restaurant globally to receive 3 stars, HKD $1,500–2,500/person)",
          ],
          cost: "HKD $5,000–7,000 (hotel + junk + shopping + Michelin dinner)",
        },
        {
          day: "Day 3",
          title: "Macau VIP Day Trip + Lantau Option",
          items: [
            "Private ferry to Macau or helicopter transfer (HKD $5,000+, 16 min — most dramatic arrival)",
            "Private guide in Macau: UNESCO heritage trail, colonial Taipa Village",
            "Lunch at Robuchon au Dôme (3 Michelin stars, ¥4,000+ per person)",
            "VIP casino access if desired (Grand Lisboa, MGM Macau)",
            "Return to Hong Kong by private ferry or helicopter",
            "Or: Lantau Island private tour including Big Buddha + secluded beach (Pui O Beach) by private car",
          ],
          cost: "HKD $6,000–12,000 (helicopter + private guide + Michelin lunch)",
        },
        {
          day: "Day 4",
          title: "Final Luxury Morning + Departure",
          items: [
            "Breakfast at hotel restaurant with harbour views",
            "Spa treatment at Peninsula or Mandarin Oriental spa (HKD $1,500–2,500)",
            "Farewell dim sum at Michelin-starred venue — Fook Lam Moon or Forum Restaurant",
            "Final walk through Central, Man Mo Temple and Sheung Wan antique street",
            "Limousine to HKG, business or first class departure",
          ],
          cost: "HKD $3,500–5,000 (hotel + spa + lunch + limousine)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "HKD $150–220 (hostel dorm)",
      food: "HKD $80–120 (local eateries)",
      transport: "HKD $50–80 (Octopus MTR)",
      activities: "HKD $100–150",
      total: "HKD $380–570/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "HKD $500–700 (3-star hotel)",
      food: "HKD $200–350 (restaurants)",
      transport: "HKD $100–150 (MTR + taxi)",
      activities: "HKD $200–350",
      total: "HKD $1,000–1,550/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "HKD $2,500–5,000+ (5-star)",
      food: "HKD $800–2,000 (Michelin)",
      transport: "HKD $500–1,200 (private car)",
      activities: "HKD $500–2,000",
      total: "HKD $4,300–10,200/day",
    },
  ],

  mistakes: [
    {
      icon: "🚡",
      title: "Not Booking the Peak Tram in Advance",
      desc: "The Peak Tram queue on weekends and holidays can stretch to 2 hours without a pre-booked ticket. Buy tickets online at the official Peak Tram website (HKD $88 return) to join the much shorter pre-booked lane. Go on a clear evening — the night skyline view from The Peak is one of the world's great sights.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌧️",
      title: "Visiting Victoria Peak on a Cloudy Day",
      desc: "Hong Kong's summer (June–September) brings frequent low cloud that sits exactly at Peak level, obscuring the entire view. Check the Hong Kong Observatory app before making the trip up. The peak is best visited in October–December when skies are clear and visibility is exceptional. If it's cloudy at 10am, try again in the late afternoon.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "💳",
      title: "Not Getting an Octopus Card Immediately at the Airport",
      desc: "The Octopus card works on MTR, buses, trams, ferries, 7-Eleven, McDonald's and many restaurants. Without one, you'll spend 5 minutes fumbling for correct change at every transaction. Get one at the Airport Express customer service counter (HKD $150: $50 refundable deposit + $100 usable balance) before leaving the arrivals hall.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🇨🇳",
      title: "Assuming Hong Kong Rules Are the Same as Mainland China",
      desc: "Hong Kong operates under completely separate rules from mainland China. Most passports can enter Hong Kong visa-free; the same passport may need a China visa for Shenzhen (just across the border). Internet is uncensored in Hong Kong — no VPN needed. Cantonese is the primary language, not Mandarin. The currency is Hong Kong Dollars, not RMB.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍱",
      title: "Eating Only at Tourist Restaurants in Tsim Sha Tsui",
      desc: "The tourist strip around Nathan Road and Tsim Sha Tsui has overpriced, mediocre food catering to visitors. Walk 10 minutes away from the waterfront into Jordan, Mong Kok or Sham Shui Po for the real Hong Kong: cha chaan tengs (local cafés), roast meat shops, noodle houses. A proper meal costs HKD $60–80; at tourist traps, the same food costs HKD $200.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "⛴️",
      title: "The Star Ferry is the World's Best 50-Cent Transport Experience",
      desc: "The Star Ferry between Tsim Sha Tsui (Kowloon) and Central (Hong Kong Island) costs HKD $3.40 and takes 8 minutes. Do it both ways — the view of Hong Kong Island's skyscrapers from the water on the crossing is genuinely one of the great city views on Earth. The lower deck (HKD $2.70) is slightly cheaper and the same view. Take it at golden hour.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🍵",
      title: "Hong Kong 4-Day Itinerary 2026: Trip Planner",
      desc: "Dim sum is Hong Kong's greatest food tradition and done properly is a multi-hour family affair. Go to a crowded local restaurant (not one with English menus at the door) on a Sunday morning before 10am. Point at carts or tick boxes on the paper menu. Order: har gow (shrimp dumplings), siu mai (pork & prawn), cheung fun (rice noodle rolls), char siu bao (BBQ pork buns). Budget HKD $100–150/person.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌃",
      title: "Hong Kong 4-Day Itinerary 2026: Trip Planner",
      desc: "The Symphony of Lights (8pm nightly) lights up the Hong Kong Island skyline — so you watch it from the Kowloon side (Tsim Sha Tsui Avenue of Stars waterfront), not from Hong Kong Island itself. The show lasts 13 minutes and is completely free. Arrive by 7:45pm for a good railing spot. The ICC building on the west also participates.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🚌",
      title: "Take the Tram (Ding Ding) Along Hong Kong Island",
      desc: "The Hong Kong Tramways (locally: 'ding dings' for the bell sound) run the length of Hong Kong Island for HKD $3 flat fare — one of the world's cheapest rides. Sit on the top deck at the front for the best urban cinema experience in Asia: narrow colonial-era streets, wet markets, neon signs. Line: Kennedy Town to Shau Kei Wan. Pay with Octopus card.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "Is Hong Kong expensive to visit?",
      a: "Hong Kong has extremes at both ends. Transport (MTR, Star Ferry, trams) is genuinely cheap — cross the harbour for HKD $3.40. Street food and local restaurants are very affordable (HKD $50–80 per meal). What's expensive is accommodation — there's no getting around Hong Kong's famously small and pricey hotel rooms. Budget travellers should use hostels in Mong Kok (HKD $150–220 dorm). The city can be done on HKD $450/day or enjoyed at HKD $3,000/day — both are valid.",
    },
    {
      q: "Do I need a VPN in Hong Kong?",
      a: "No. Hong Kong has completely unrestricted internet access — unlike mainland China. Google, Gmail, WhatsApp, Instagram, Twitter/X and all Western services work normally. If you're planning to cross into Shenzhen or elsewhere in mainland China, install a VPN before leaving home, but you won't need it for Hong Kong itself.",
    },
    {
      q: "How do I get from Hong Kong to Guilin or mainland China?",
      a: "To Guilin: fly (1.5 hours, multiple daily flights) or take a train to Guangzhou then high-speed train to Guilin (total ~4-5 hours). To Shenzhen: take the MTR East Rail Line to Lo Wu or Lok Ma Chau border crossing (50 min, HKD $46) — walk across and you're in mainland China. Note you'll need a Chinese visa for mainland entry even if you entered Hong Kong visa-free.",
    },
    {
      q: "What is the best neighbourhood to stay in Hong Kong?",
      a: "Tsim Sha Tsui (Kowloon) is the best all-round base: great transport links, close to the waterfront, and excellent range of hotels at every price. Mong Kok is better for budget travellers who want local atmosphere. Central (Hong Kong Island) puts you near the business district and Peak Tram. For the best harbour views, pay the premium for a harbour-view room on the Kowloon side — waking up to that skyline is worth every dollar.",
    },
  ],

  combineWith: ["guilin-3-days", "xian-4-days", "tokyo-5-days", "taipei-4-days"],
  relatedSlugs: ["guilin-3-days", "xian-4-days", "tokyo-5-days", "taipei-4-days"],

  galleryQuery: "hong kong skyline victoria peak harbour kowloon night lights",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function HongKongPage() {
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
