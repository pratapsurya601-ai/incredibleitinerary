import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Iguazu Falls in 4 Days: The Complete Guide — Argentine & Brazilian Sides (2026)",
  description:
    "Plan the perfect 4-day Iguazu Falls trip. Both sides of the falls, Devil's Throat, jungle walks, boat rides, Triple Frontier, and Itaipu Dam — full itineraries from $80/day.",
  keywords: [
    "Iguazu Falls travel guide",
    "Iguazu Falls 4 days itinerary",
    "Argentine side vs Brazilian side Iguazu",
    "Devil's Throat Iguazu",
    "Foz do Iguaçu travel guide",
    "Puerto Iguazú Argentina",
    "Iguazu boat ride under falls",
    "Triple Frontier Argentina Brazil Paraguay",
    "Iguazu Falls visa Indian passport",
    "Iguazu budget travel 2026",
  ],
  openGraph: {
    title: "Iguazu Falls in 4 Days: The Complete Guide (Argentine & Brazilian Sides, 2026)",
    description:
      "275 waterfalls, 2.7km wide, and a Devil's Throat that thunders 82m straight down. Our complete 4-day guide to both sides of Iguazu from $80/day.",
    url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Iguazu Falls Argentina Brazil panoramic waterfalls jungle rainbow mist",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iguazu Falls in 4 Days: The Complete Guide (2026)",
    description:
      "Eleanor Roosevelt said 'Poor Niagara' after seeing Iguazu. Our 4-day guide covers both sides, the boat ride, and the Triple Frontier — from $80/day.",
    images: ["https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Iguazu Falls in 4 Days: The Complete Guide — Argentine & Brazilian Sides (2026)",
      description:
        "A complete 4-day Iguazu Falls guide covering both the Argentine and Brazilian sides, Devil's Throat, boat rides, Triple Frontier, and Itaipu Dam — for every budget.",
      image: "https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Iguazu Falls 4-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Iguazu Falls",
      description:
        "The world's most theatrical natural wonder — 275 individual falls stretching 2.7km wide on the Argentina-Brazil border, with the Devil's Throat plunging 82 metres in a thundering horseshoe.",
      url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
      touristType: ["Nature Traveller", "Adventure Traveller", "Photographer"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -25.6953,
        longitude: -54.4367,
      },
      containedInPlace: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Brazil" },
      ],
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Iguazu Falls",
  country: "Argentina/Brazil",
  countryFlag: "🇦🇷",
  slug: "iguazu-falls-4-days",
  heroQuery: "iguazu falls argentina brazil waterfalls jungle rainbow",
  heroAlt: "Iguazu Falls Argentina Brazil panoramic waterfalls jungle rainbow mist",
  category: "South America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Eleanor Roosevelt reportedly said upon seeing Iguazu Falls: 'Poor Niagara', and she was right — 275 individual falls stretching 2.7km wide with the Devil's Throat thundering 82 metres straight down so loudly you feel it in your chest, toucans and coatis wandering the forest walkways between viewing platforms, standing at the point where Argentina, Brazil, and Paraguay share a border in the middle of three mighty rivers. Iguazu Falls: nature's most theatrical masterpiece.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$80",
    bestMonths: "Mar–Nov (avoid Dec–Feb peak heat)",
    airport: "IGR (Argentina) or IGU (Brazil, Foz do Iguaçu)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "both-sides",  emoji: "🗺️", label: "Argentine vs Brazilian Side" },
    { id: "border",      emoji: "🛂", label: "Crossing the Border" },
    { id: "book",        emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Argentina", "No visa required (updated 2023) — free entry up to 90 days"],
        ["Brazil", "e-Visa required — apply at consular.itamaraty.gov.br"],
        ["Brazil fee", "$42 USD"],
        ["Brazil processing", "5–10 business days — apply before departure"],
        ["Important", "Get your Brazil e-Visa BEFORE flying — cannot apply on arrival"],
        ["Border crossing", "Direct bus from Puerto Iguazú (Argentina) to Foz do Iguaçu (Brazil) — 30 mins"],
        ["Note", "Keep your Argentine entry stamp — you re-enter Argentina when returning"],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Argentina", "Visa-free — up to 90 days"],
        ["Brazil", "Visa-free — up to 90 days"],
        ["Passport requirement", "Valid for 6 months beyond departure"],
        ["Border crossing", "Simple stamp process at the Argentina-Brazil bridge border"],
        ["Triple Frontier", "The Argentina-Brazil-Paraguay corner: no entry to Paraguay required for the viewpoint"],
        ["Note", "Carry your passport (not a photocopy) when crossing — border officials check ID"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$80/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Foz do Iguaçu (Brazil) — Settle In",
          items: [
            "Fly into IGU airport (Foz do Iguaçu, Brazilian side) — usually cheaper flights than IGR (Argentine side)",
            "Take bus #120 from the airport to Foz do Iguaçu city centre (R$5 / $1) — 30 minutes",
            "Check into a hostel or budget hotel in Foz do Iguaçu from $15/night (Brazilian side is notably cheaper than Puerto Iguazú)",
            "Afternoon: visit the Triple Frontier (Marco das Três Fronteiras) where Argentina, Brazil, and Paraguay meet — free viewpoint, great photos",
            "Evening: eat at a Brazilian churrascaria (all-you-can-eat barbecue) for $8–12 — extraordinary value",
          ],
          cost: "$55 (accommodation $15, bus $2, food $18, Triple Frontier free, activities $20)",
        },
        {
          day: "Day 2",
          title: "Brazilian Side of the Falls — Panoramic Views",
          items: [
            "Take bus from Foz city to the Brazilian side park entrance (R$5 each way) — 30 min",
            "Entry fee: R$90 ($18) per person; obligatory shuttle bus inside the park is included",
            "Walk the 1.2km elevated walkway: full panoramic view of the entire falls arc — this is where the 'wow' moment happens",
            "Devil's Throat from the Brazilian side: the closest accessible viewing platform to the central cascade",
            "The boat ride (Macuco Safari on Brazilian side, $30) goes right under the main curtain — wear your swimwear",
          ],
          cost: "$80 (transport $4, park entry $18, boat ride $30, food inside park $15, small expenses $13)",
        },
        {
          day: "Day 3",
          title: "Cross to Argentine Side — Devil's Throat Up Close",
          items: [
            "Take the direct bus from Foz do Iguaçu to Puerto Iguazú, Argentina (R$15 / $3) — 30 min, includes brief border stop",
            "Enter Argentine side park (ARS / $18 entry); take the free park train to Devil's Throat station",
            "Walk the elevated catwalk directly over the Gran Garganta del Diablo — you're on TOP of the falls, 82m down, mist soaking you from below",
            "Upper and Lower Circuit: see individual falls from all angles, coatis raiding backpacks, toucans in the canopy",
            "Evening in Puerto Iguazú: cheaper restaurants than Foz — Argentine parilla (grill) with local Malbec wine, $12 for dinner",
          ],
          cost: "$75 (bus $3, park entry $18, food $20, accommodation in Puerto Iguazú from $18, misc $16)",
        },
        {
          day: "Day 4",
          title: "Macuco Jungle Trail & Departure",
          items: [
            "Morning: re-enter Argentine side park (your ticket is valid multiple days — check current policy) for the Macuco Trail",
            "Macuco Trail is a 3.5km jungle walk to a hidden waterfall (Arrechea) — toucans, butterflies, howler monkeys",
            "Midday: buy souvenir mate gourds and guarana artisan products from the Puerto Iguazú market",
            "Afternoon flight from IGR (Argentine airport) or IGU (Brazilian airport) depending on your onward routing",
            "Airport tip: IGR has immigration where you can change your remaining Argentine pesos — do it before you leave Argentina",
          ],
          cost: "$70 (park (Macuco) $18, food $18, souvenirs $15, transport to airport $10, misc $9)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$160/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Puerto Iguazú (Argentina) — Boutique Hotel",
          items: [
            "Fly into IGR (Argentine airport) — transfers to Puerto Iguazú town take 20 min ($8 taxi)",
            "Check into a comfortable boutique hotel in Puerto Iguazú from $70/night — pool, breakfast included",
            "Afternoon: visit the Triple Frontier on the Argentine side (Hito Argentino viewpoint) — boats trip past the Paraguay and Brazil borders ($15 short boat tour)",
            "Bird walk along the Iguazú River at the border area — toucans, swallows flying under the bridge",
            "Dinner at La Rueda restaurant in Puerto Iguazú: fresh Argentine pasta and empanadas with local Torrontés wine ($25)",
          ],
          cost: "$140 (hotel $70, taxi $8, boat tour $15, dinner $25, activities $22)",
        },
        {
          day: "Day 2",
          title: "Argentine Side — Full Day with Private Guide",
          items: [
            "Hire a private bilingual guide for the Argentine side ($60 for half day) — makes a dramatic difference",
            "Guide takes you before the crowds: 8am opening, Devil's Throat walkway before the tour groups arrive",
            "Lower Circuit: San Martín Island boat crossing ($5) to a private viewing platform with 270-degree falls views",
            "Private guide knows where the coati mothers have their dens — guaranteed close encounter with wildlife",
            "Afternoon: Macuco Safari boat adventure — zodiac boat under the falls' full force, get soaked ($50 Argentine side)",
          ],
          cost: "$185 (hotel $70, park entry $18, private guide $60, boat ride $50, meals $30) — worth every cent for guide",
        },
        {
          day: "Day 3",
          title: "Brazilian Side & Itaipu Dam",
          items: [
            "Cross to Brazil by direct bus ($5); enter Parque Nacional do Iguaçu (R$90/$18)",
            "Brazilian side panoramic walkway in the morning before afternoon heat",
            "Post-falls: afternoon tour to Itaipu Dam ($20 basic tour, $35 special tour with turbine room access) — the world's second-largest hydroelectric dam and a genuine engineering marvel",
            "The Itaipu light show at night ($15) is on Saturdays — if timing works, worth staying for",
            "Overnight in Foz do Iguaçu: mid-range hotel from $55/night",
          ],
          cost: "$160 (transport $5, park $18, Itaipu $35, hotel $55, meals $40, misc $7)",
        },
        {
          day: "Day 4",
          title: "Bird Park & Departure",
          items: [
            "Morning: Parque das Aves (Bird Park) adjacent to the Brazilian park entrance ($16 entry) — free-flying toucans, macaws, and 150 endemic species in walk-through aviaries",
            "Walk-through butterfly aviary: hundreds of Blue Morpho butterflies land on your clothing",
            "Final lunch at the Belmond das Cataratas Hotel terrace (even if not staying) — has its own walkway to the falls, $30 lunch",
            "Afternoon: transfer to IGU or IGR airport depending on your departure side",
            "Take home: yerba mate, dulce de leche, and artisan honey from the Puerto Iguazú market",
          ],
          cost: "$150 (bird park $16, hotel $55, lunch at Belmond terrace $30, airport transfer $15, souvenirs $34)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$380/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive & Belmond das Cataratas Check-In",
          items: [
            "Fly into IGU or IGR; private transfer arranged by the hotel",
            "Check in at Belmond Hotel das Cataratas — the only hotel INSIDE the Brazilian national park ($400–700/night, all-inclusive of park access)",
            "Afternoon: exclusive access to the falls walkway after 6pm when the day-trippers leave — completely private Devil's Throat experience",
            "Sundowner cocktails on the hotel's colonial terrace with the falls lit behind you in the fading light",
            "Seven-course dinner at the hotel's Itaipú restaurant: Brazilian fine dining with falls visible through the windows",
          ],
          cost: "$700 (hotel $500, private transfer $40, dinner included, sundowners included)",
        },
        {
          day: "Day 2",
          title: "Early Morning Falls & Private Argentine Side",
          items: [
            "Dawn walk (6am) — hotel guests have exclusive access before the park opens: just you and the falls, howler monkeys, and mist",
            "Private boat to the base of the tallest falls on the Brazilian side — personalized experience with your guide",
            "Cross to Argentine side: private vehicle and bilingual naturalist guide for the full day ($120)",
            "VIP access to Devil's Throat elevated platform: 30 min uninterrupted before group tours arrive",
            "Macuco Trail with private guide: birdwatching with a spotting scope — 200+ species in the jungle",
          ],
          cost: "$800 (hotel $500, private Argentine guide $120, boat experience $80, meals included, transport $30) — includes various add-ons",
        },
        {
          day: "Day 3",
          title: "Helicopter, Itaipu & Triple Frontier",
          items: [
            "Helicopter flight over Iguazu Falls ($150 for 10 min, book via IGR airport) — aerial view of all 275 falls simultaneously: extraordinary perspective",
            "Private tour to Itaipu Dam with exclusive turbine room access and engineer briefing ($60 private tour)",
            "Luxury catamaran to the Triple Frontier — private 2-hour boat tour to the Argentina-Brazil-Paraguay border confluence",
            "Lunch at the Belmond Hotel — signature Brazilian moqueca seafood stew with local caipirinhas ($45)",
            "Afternoon spa at the Belmond: Amazonian clay body treatment using local guarana and passion fruit oils",
          ],
          cost: "$900 (hotel $500, helicopter $150, Itaipu private $60, catamaran $80, spa $120, lunch $45) — adjust per preferences",
        },
        {
          day: "Day 4",
          title: "Private Sunrise & Farewell",
          items: [
            "Private sunrise guide walk through the Belmond's exclusive park access — misty golden light on the falls with no crowds",
            "Farewell Brazilian breakfast on the colonial terrace: fresh açaí, pão de queijo, and tropical fruits",
            "Private helicopter transfer to IGU or IGR airport ($200) or luxury vehicle with champagne send-off",
            "Airport lounge: buy premium Brazilian coffee and Iguazu craft chocolate for gifts",
            "Connect to Buenos Aires (1 hr) or Rio de Janeiro (2 hrs) for an extended South America itinerary",
          ],
          cost: "$700 (hotel $500, helicopter transfer $200, airport extras $50, breakfast included)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–25 (Foz do Iguaçu hostel/hotel)",
      food: "$10–18 (Brazilian churrascaria + street food)",
      transport: "$5–12 (local buses)",
      activities: "$20–40 (park entries + boat ride)",
      total: "$80–115/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–90 (Puerto Iguazú boutique hotel)",
      food: "$25–40 (restaurant meals + Belmond lunch)",
      transport: "$15–25 (taxi + guided transfers)",
      activities: "$50–90 (private guide + Itaipu + Bird Park)",
      total: "$150–245/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–700 (Belmond das Cataratas or Gran Meliá)",
      food: "Included or $60–100 (fine dining)",
      transport: "$80–200 (private + helicopter)",
      activities: "$100–200 (helicopter, private guide, catamaran)",
      total: "$640–1,200/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$10–15 (Foz hostel dorm)",
      food: "$6–12 (market + per kg restaurants)",
      transport: "$3–6 (local bus only)",
      activities: "$18–36 (park entry both sides)",
      total: "$60–85/day",
    },
    {
      tier: "🌊 Adventure Focus",
      accommodation: "$30–60 (Puerto Iguazú guesthouse)",
      food: "$20–30 (parilla + cafe)",
      transport: "$15–25 (cross-border transfers)",
      activities: "$80–130 (boat rides, rappelling, zipline)",
      total: "$145–245/day",
    },
  ],

  mistakes: [
    {
      icon: "🇧🇷",
      title: "Only Visiting One Side",
      desc: "Seeing only the Argentine side or only the Brazilian side is like reading half a book. The Argentine side gives you the close-up, thundering, inside experience. The Brazilian side gives you the panoramic wide shot showing the full scale. You need both. Allocate 1 full day to each side.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "☀️",
      title: "Visiting in Peak Summer Heat (Dec–Feb)",
      desc: "December to February is Iguazu's peak tourist season and the hottest, most humid months. Temperatures hit 40°C with 90% humidity. Crowds are double, prices are higher, and standing at the falls in the midday heat is unpleasant. March–November is dramatically more comfortable.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎒",
      title: "Bringing a Bag You Don't Want Soaked",
      desc: "The Devil's Throat walkway and the boat ride produce extraordinary amounts of mist and spray. You WILL get wet — if you're on the boat you'll be completely soaked. Bring a dry bag or use the park's plastic bag service ($2). Electronics and important documents must be waterproofed.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🦝",
      title: "Not Protecting Your Food from Coatis",
      desc: "Coatis (raccoon relatives) roam the park walkways and are fearless thieves. They have stolen sandwiches directly from hands and unzipped backpacks. Signs throughout the park warn against feeding them — it's also illegal. Keep food sealed in your bag and don't eat on the main walkways.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "💱",
      title: "Not Using the Blue Dollar Rate in Argentina",
      desc: "Argentina's currency situation means the unofficial exchange rate (blue dollar) can be 2–3x the official bank rate. Withdraw cash from ATMs in Brazil (reais) for Brazilian costs, and bring US dollars to exchange informally in Puerto Iguazú for Argentine costs. Ask your hotel — they'll point you to the right place.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Arrive at the Argentine Park at 8am Sharp",
      desc: "The Argentine side park opens at 8am. The first train to Devil's Throat at 8:15am puts you on the walkway by 8:30am — before the tour buses arrive from both airports. From 10am, the Devil's Throat walkway is wall-to-wall people. The morning light and the solitude are extraordinary. This is the single most important tip.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌈",
      title: "The Rainbow Timing: 10am–2pm Brazilian Side",
      desc: "Rainbows appear in the mist when the sun is at the right angle — typically mid-morning on the Brazilian side's panoramic walkway. Plan your Brazilian visit for mid-morning if you want the classic rainbow-over-the-falls photograph. Mornings are also cooler.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🏨",
      title: "Stay on the Brazilian Side — It's Cheaper",
      desc: "Foz do Iguaçu (Brazil) is significantly cheaper for accommodation, food, and transport than Puerto Iguazú (Argentina). The direct bus between the two towns takes 30 minutes. Base yourself in Foz and day-trip to Argentina. You save 30–40% on daily costs without sacrificing any experience.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🐦",
      title: "Visit Parque das Aves (Bird Park) — Underrated",
      desc: "The Bird Park next to the Brazilian park entrance is one of South America's best aviaries — 150 species, walk-through aviaries, and Blue Morpho butterflies landing on your shoulders. It takes 1.5 hours and costs $16. Most visitors skip it; don't. Schedule it for a morning when you've already done both sides of the falls.",
      color: "border-amber-200 bg-amber-50",
    },
  ],

  faqs: [
    {
      q: "Which side of Iguazu Falls is better — Argentine or Brazilian?",
      a: "Both sides are essential and different. The Argentine side has the most dramatic experience: you walk on elevated catwalks directly over and beside the falls, including the Devil's Throat platform where you stand above an 82m drop with mist soaking you from below. The Brazilian side has the panoramic wide-angle view showing the full 2.7km arc of falls — the iconic postcard photograph. Most visitors say the Argentine side is more emotionally impactful, but the Brazilian side shows you the full scale. Visit both.",
    },
    {
      q: "Do I need to pre-book tickets for Iguazu Falls?",
      a: "Yes, especially for the Argentine side in peak season (July, December–January). Book Argentine side tickets online at iguazuargentina.com. Brazilian side tickets can usually be bought at the gate but online booking at cataratasdoiguacu.com.br guarantees entry. Book the Macuco Safari (boat ride) separately and in advance — it sells out daily. Belmond Hotel guests get priority park access.",
    },
    {
      q: "How long does it take to see Iguazu Falls properly?",
      a: "Allow 1 full day for the Argentine side (both Upper Circuit, Lower Circuit, and Devil's Throat — 5–6 hours walking) and 1 full day for the Brazilian side (2–3 hours walking, plus Macuco Safari boat ride). Two full days total is the absolute minimum; 3 days is comfortable. If you also want Itaipu Dam, Bird Park, and Triple Frontier, 4 days is perfect.",
    },
    {
      q: "Is the boat ride at Iguazu worth it?",
      a: "The Macuco Safari (Argentine side, $50) and Macuco Safari (Brazilian side, $30) both take you by zodiac boat directly under the falling water. You will be completely soaked — there is no other outcome. Wear swimwear or clothes you don't mind getting wet. Waterproof your phone and camera. Most visitors call it one of the best experiences of their trip. It is absolutely worth it — but only do it once (the Argentine and Brazilian rides are very similar).",
    },
  ],

  combineWith: [
    "Buenos Aires (3-4 days — 2 hr flight from IGR; tango, steak, Patagonia gateway)",
    "Rio de Janeiro (3-4 days — 2 hr flight from IGU; Christ the Redeemer, Copacabana)",
    "Patagonia — Torres del Paine (5 days — fly Buenos Aires to Punta Arenas)",
    "Bolivia — Salar de Uyuni (3 days — fly Buenos Aires to La Paz, world's largest salt flat)",
  ],

  relatedSlugs: [
    "buenos-aires-5-days",
    "rio-de-janeiro-5-days",
    "patagonia-7-days",
    "peru-machu-picchu-7-days",
    "colombia-cartagena-5-days",
  ],

  galleryQuery: "iguazu falls argentina brazil devil throat waterfall rainbow jungle",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function IguazuFallsPage() {
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
