import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Yangon",
  country: "Myanmar",
  countryFlag: "🇲🇲",
  slug: "yangon-3-days",
  heroQuery: "yangon shwedagon pagoda myanmar golden",
  heroAlt: "Shwedagon Pagoda glowing gold at sunrise above the Yangon skyline",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Yangon is Southeast Asia's most intact colonial city, a place where British-era mercantile buildings stand beside golden pagodas and monks in burgundy robes walk past crumbling Art Deco facades. Shwedagon Pagoda at sunrise is one of the most spiritually charged experiences in the Buddhist world. Three days is enough to ride the Circular Train past rice paddies and bamboo villages, slurp mohinga breakfast noodles at a sidewalk stall, and understand why Graham Greene called the Strand Hotel one of Asia's legendary addresses.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$40",
    bestMonths: "Nov–Feb",
    airport: "RGN",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Shwedagon at Sunrise" },
    { id: "day2", emoji: "📅", label: "Day 2 — Circular Train & Bogyoke Market" },
    { id: "day3", emoji: "📅", label: "Day 3 — Colonial Downtown" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — eVisa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist eVisa (single entry)"],
        ["Processing", "3–5 business days"],
        ["Fee", "$50 USD"],
        ["Validity", "28 days stay, 3 months from issue"],
        ["Apply at", "evisa.moip.gov.mm (official Myanmar portal)"],
        ["Documents", "Passport scan, photo, accommodation details, onward ticket"],
        ["Notes", "Apply at least 2 weeks before departure. The political situation in Myanmar is fluid — check your government travel advisory before booking. Travel insurance that covers political unrest is strongly recommended."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — eVisa Required",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Requirement", "Tourist eVisa (single entry)"],
        ["Processing", "3–5 business days"],
        ["Fee", "$50 USD"],
        ["Validity", "28 days stay, 3 months from issue"],
        ["Passport", "Must be valid 6+ months beyond intended stay"],
        ["Advisory", "US, UK, and EU governments advise reconsider travel or do not travel as of 2026 — check current official advisories"],
        ["Notes", "Proof of onward travel and sufficient funds required on arrival. USD cash is useful but kyat is preferred at local businesses."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$40–60/day",
      days: [
        {
          day: "Day 1",
          title: "Shwedagon Pagoda at Sunrise & Street Food",
          items: [
            "05:30 — Taxi to Shwedagon Pagoda (MMK 5,000, about $2.50) in time for sunrise; the foreign-visitor entrance on the southern staircase charges $10 (USD or equivalent in kyat)",
            "06:00 — Shwedagon at sunrise: the 98-metre gold-plated stupa catches the first light before the day-trippers arrive; devotees light candles and chant at the Tuesday planetary post (visit your birthday post for a blessing)",
            "08:30 — Descend and walk to a nearby street stall for mohinga: Myanmar's national breakfast of fish-broth rice noodles with banana stem, crispy fritters, and lime; a bowl costs MMK 800–1,200 ($0.40–0.60)",
            "10:00 — Sule Pagoda in the heart of downtown: this 2,000-year-old pagoda sits in the centre of a roundabout and marks the geometric heart of British Rangoon; entry $3",
            "12:00 — Lunch at 999 Shan Noodle Shop on Anawrahta Road: a local institution serving Shan tofu noodles, laphet thoke (tea leaf salad), and cold Myanmar beer for MMK 3,000–4,500 total",
            "15:00 — Bogyoke Aung San Market (closed on Mondays and public holidays): the largest covered market in Myanmar with lacquerware, thanaka paste, jade, and puppets; bargaining is expected at gem and jewellery stalls",
            "19:00 — Street-food dinner walk along Mahabandoola Garden Street: samosas, naan with chickpea curry (nan pyan), and sweet tea from Indian-Burmese stalls for MMK 2,000",
          ],
          cost: "$20–28 (Shwedagon, lunch, market, street food, taxis)",
        },
        {
          day: "Day 2",
          title: "Circular Train Ride & Tea Leaf Salad",
          items: [
            "07:00 — Mohinga breakfast at any street stall near the train station: this is the authentic Yangon morning ritual that every visitor should experience at least once",
            "08:00 — Yangon Circular Railway from Yangon Central Station: the 3-hour loop costs MMK 200 ($0.10) and passes through bamboo-house villages, rice-paddy stations, and riverside market stops that feel entirely unchanged from decades past",
            "11:00 — Disembark at any suburban station for 30 minutes to explore the local market (Insein market is the most vivid) before reboarding the next circular train",
            "13:00 — Return to central Yangon; lunch at a local laphet restaurant: laphet thoke (tea leaf salad with tomatoes, fried garlic, sesame seeds, and dried shrimp) is Myanmar's most distinctive dish and costs MMK 2,500",
            "15:00 — Afternoon walk through Chinatown on Latha Street: the oldest Chinese temples in Yangon, dried seafood and spice markets, and the best gold-leaf workshops outside Mandalay",
            "18:30 — Sunset from the rooftop of any downtown building with a bar, or walk to Inya Lake shoreline for free sunset views; Yangon sunsets over the lake and pagoda spires are spectacular",
            "20:00 — Dinner at a street barbecue (BBQ skewer stall) on 19th Street in Chinatown: skewers of tofu, quail eggs, corn, and meat for MMK 500–800 each, eaten at plastic tables on the pavement",
          ],
          cost: "$15–22 (train, meals, market, street food)",
        },
        {
          day: "Day 3",
          title: "Colonial Architecture Walk & Strand Hotel",
          items: [
            "08:00 — Self-guided colonial architecture walking tour of downtown: start at the High Court (1911, Venetian-Gothic), walk to the Strand Hotel (1901), Customs House, and the former Sofaer Building — the highest concentration of intact Victorian and Edwardian commercial architecture in Asia",
            "10:00 — Walk into the Strand Hotel lobby for a free look at the teak-panelled bar and rattan furniture; a morning coffee costs $5–8 but the colonial atmosphere is worth the price of a pot of tea",
            "12:00 — Lunch at Rangoon Tea House in the colonial district: trendy cafe in a renovated shophouse; Myanmar milk tea, samosas, and chickpea curry; MMK 5,000–7,000 per person",
            "14:00 — National Museum of Myanmar on Pyay Road: entry $5; highlights include the Royal Regalia Hall with King Mindon's lion throne, and the traditional Myanmar dress galleries — allow 90 minutes",
            "16:30 — Final walk through Mahabandoola Garden Park: the colonial-era park with the Independence Monument at its centre, surrounded by crumbling British government buildings draped in tropical vines",
            "19:00 — Farewell dinner: Shan noodles or mohinga at your favourite street stall before heading to Mingaladon International Airport (RGN)",
          ],
          cost: "$18–25 (museum, Strand coffee, lunch, dinner, airport taxi)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$110–160/day",
      days: [
        {
          day: "Day 1",
          title: "Shwedagon at Sunrise with Guide & Bogyoke Market",
          items: [
            "05:30 — Private taxi to Shwedagon Pagoda in time for sunrise ($5); hire a licensed guide at the south entrance ($20 for 2 hours) — guides explain the planetary posts, the jewel-encrusted crown of the stupa (worth $3 billion), and the legend of the eight hairs of the Buddha enshrined inside",
            "08:30 — Mohinga breakfast at the famous Aung Thukha restaurant on U Htun Yi Road: the most reliably authentic traditional breakfast in Yangon; MMK 4,500 for a full set with fritters and green tea",
            "11:00 — Bogyoke Aung San Market with a shopping guide: a knowledgeable fixer helps identify quality lacquerware versus tourist copies and negotiates fair prices at gem stalls; budget $30–50 for purchases",
            "13:30 — Lunch at The House of Memories restaurant: a Burmese-heritage villa restaurant with traditional Myanmar multi-course lunch; $15–18 per person",
            "16:00 — Chaukhtatgyi Pagoda: the massive 66-metre reclining Buddha that is more impressive and less visited than the Shwedagon; free entry, taxi $3",
            "20:00 — Dinner at Rangoon Tea House: modern Burmese cuisine in a beautifully restored shophouse; mohinga with prawn, laphet salad, and fish curry; $12–18 per person",
          ],
          cost: "$90–115 (Shwedagon guide, meals, market, taxis)",
        },
        {
          day: "Day 2",
          title: "Circular Train First Class & Tea Leaf Salad Workshop",
          items: [
            "07:30 — First-class Circular Train carriage (reserved, MMK 2,000 for the full loop): cleaner and has seats, though the third-class open doors and hanging-out experience is more authentic for the brave",
            "10:30 — Disembark at Insein for a 45-minute market walk: the largest suburban market in Yangon; fresh flowers, live chickens, and street food stalls where locals have never seen foreign tourists",
            "13:00 — Laphet thoke cooking class at a Yangon home kitchen ($35): learn to balance the fermented tea leaves, sesame oil, fried garlic, tomatoes, and nuts that make Myanmar's iconic salad; take the recipe home",
            "16:00 — Afternoon at Kandawgyi Lake: pleasant lakeside walk with views of Shwedagon reflected in the water; Myanmar Beer at a lakeside restaurant at sunset",
            "20:00 — Dinner at Sky Bistro on the 17th floor of Sakura Tower: 360-degree Yangon view; Burmese-international menu; $20–28 per person; book ahead for a window table at sunset",
          ],
          cost: "$110–135 (cooking class, meals, lake, Sky Bistro)",
        },
        {
          day: "Day 3",
          title: "Colonial Walk, Strand Afternoon Tea & Departure",
          items: [
            "08:30 — Colonial architecture walking tour with a licensed heritage guide ($40 for 3 hours): Yangon Heritage Trust-trained guides explain the British urban plan, the story of each landmark building, and the current preservation battles",
            "12:00 — Lunch at The Strand Grill: the hotel restaurant serves a colonial-era menu of Burmese curry tiffin, Anglo-Burmese fish pie, and proper iced Myanmar lager; $25–35 per person",
            "14:30 — Strand Hotel afternoon tea in the teak-panelled bar: cucumber sandwiches, Myanmar-spiced scones, and leaf tea; $20 per person for the full set — the most civilised afternoon in Yangon",
            "17:00 — Final market stop at Theingyi Zei market for last-minute thanaka paste, lacquerware gifts, and longyi fabric",
            "19:00 — Taxi to Yangon International Airport (RGN) — 45 minutes from downtown; allow extra time for airport security",
          ],
          cost: "$120–140 (guide, Strand meals, market, airport taxi)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–550/day",
      days: [
        {
          day: "Day 1",
          title: "Private Shwedagon Experience & Strand Hotel",
          items: [
            "05:00 — Private vehicle to Shwedagon with the Strand Hotel's dedicated guide for a VIP pre-sunrise access arrangement; the guide arranges the opening blessing ceremony visit and explains each pavilion in the pre-dawn silence",
            "08:30 — Return to The Strand Hotel for a full colonial breakfast: scrambled eggs with smoked hilsa fish, fresh papaya, and single-estate Myanmar tea in the Dining Room ($40 pp)",
            "11:00 — Check into The Strand Hotel ($300–500/night): book the Strand Suite for the teak-floored salon and marble bathroom; the 1901 building was built by the Sarkies brothers who also built Raffles Singapore",
            "14:00 — Private half-day city tour with a Yangon Heritage Trust guide ($80): access to closed heritage buildings, rooftop views of the colonial grid, and the private Upper Strand terrace with Irrawaddy River views",
            "20:00 — Dinner at The Strand Grill: tasting menu with Burmese wine pairing; the chef incorporates mohinga-inspired sauces and laphet elements into a formal fine-dining interpretation; $80–100 pp",
          ],
          cost: "$500–650 (hotel, private guide, Strand meals, transport)",
        },
        {
          day: "Day 2",
          title: "Private Circular Train Carriage & Cooking Masterclass",
          items: [
            "07:00 — Strand Hotel breakfast; packed mohinga in a traditional tiffin carrier prepared by the kitchen for eating on the train",
            "08:00 — Private chartered Circular Train carriage (arranged through hotel, $200 for the loop): a vintage carriage reserved for your party with guide, cold drinks, and stops arranged at the most photogenic stations",
            "12:00 — Return to hotel; afternoon at the rooftop pool at Belmond Governor's Residence or Park Royal Yangon (day pass arrangement through hotel concierge)",
            "15:00 — Private laphet thoke masterclass with a master Burmese chef at a private kitchen ($80): learn the fermentation process for the tea leaves, the correct proportions, and the history of the dish in Shan culture",
            "20:00 — Private dinner at The House of Memories heritage villa: exclusively booked for your table; traditional Burmese silver service with seven-course tasting menu; $120 pp minimum for private booking",
          ],
          cost: "$450–600 (private train, cooking class, private dinner)",
        },
        {
          day: "Day 3",
          title: "Sule Pagoda Blessing, Shopping & Departure",
          items: [
            "08:00 — Private merit-making ceremony at Sule Pagoda with a monk guide ($60): release caged birds, light candles at your planetary post, and receive a morning blessing from the resident monks",
            "10:00 — Curated shopping at Bogyoke Market with a gem expert ($100 for 2 hours): Myanmar ruby, sapphire, and jade assessments with a licensed GIA-trained gemologist before you spend on precious stones",
            "13:00 — Farewell lunch at The Strand: the Burma Curry Tiffin is the hotel's signature dish; three tiers of traditional curries with jasmine rice, pickled tea, and coconut dessert; $35 pp",
            "15:30 — Private airport transfer to Yangon International Airport (RGN) in The Strand Hotel Mercedes; the hotel concierge handles check-in formalities from the car if connecting to Bangkok or Singapore",
          ],
          cost: "$300–400 (ceremony, gem consultant, Strand farewell, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–20 (guesthouse, fan room)",
      food: "$5–10 (mohinga, street stalls, noodle shops)",
      transport: "$3–6 (taxis, circular train)",
      activities: "$15–20 (Shwedagon, museums, markets)",
      total: "$40–60/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–90 (3-star hotel, central Yangon)",
      food: "$20–35 (restaurants, Rangoon Tea House)",
      transport: "$15–25 (private taxis, guided tours)",
      activities: "$25–45 (guides, cooking class)",
      total: "$110–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–500 (The Strand, Belmond Governor's)",
      food: "$80–150 (Strand Grill, private dinners)",
      transport: "$40–100 (private vehicles, chartered train)",
      activities: "$80–200 (private guides, gem experts)",
      total: "$350–550+/day",
    },
    {
      tier: "🍜 Street Food Only",
      accommodation: "$10–20 (basic guesthouse)",
      food: "$3–6 (mohinga, BBQ stalls, tea houses)",
      transport: "$2–4 (shared taxis, circular train)",
      activities: "$10–15 (pagodas only)",
      total: "$25–45/day",
    },
    {
      tier: "🏛️ Heritage Focus",
      accommodation: "$80–150 (boutique colonial hotel)",
      food: "$25–40 (Rangoon Tea House, House of Memories)",
      transport: "$20–35 (heritage walk guides)",
      activities: "$50–80 (guided tours, museum access)",
      total: "$150–250/day",
    },
  ],
  mistakes: [
    {
      icon: "🌤️",
      title: "Visiting during the monsoon without a rain plan",
      desc: "May to October is monsoon season in Yangon with daily heavy rainfall and high humidity. November to February is the cool dry season with clear skies and temperatures of 25-30C. March to April is hot and increasingly humid. Plan for November to February for the most comfortable experience.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏛️",
      title: "Missing the colonial architecture walk",
      desc: "Yangon has more intact Victorian and Edwardian commercial architecture than any other city in Asia, but many buildings are being demolished for Chinese-funded development. The Yangon Heritage Trust has a free self-guided walking map at their office on Shwebontha Street. Do the walk in the cool morning before 10am.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💵",
      title: "Arriving without enough USD cash",
      desc: "ATMs in Yangon are unreliable and international cards are not accepted at many businesses due to banking sanctions. Bring crisp, unfolded USD bills from 2006 or newer (older or damaged bills are refused) and exchange at a licensed Forex bureau for kyat. Keep USD for the Shwedagon and museum entry fees.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👟",
      title: "Wearing shoes to pagodas and forgetting socks are also removed",
      desc: "All Buddhist pagodas in Myanmar require removing shoes AND socks before entering the pagoda platform. Marble platforms get very hot by 10am in the dry season. Carry a small bag for your footwear and visit pagodas early morning or after 4pm to avoid scorched feet.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📰",
      title: "Ignoring the current political situation",
      desc: "Myanmar has been under military rule since the February 2021 coup. Check your government's current travel advisory before booking. Some areas outside Yangon have active conflict. Yangon city is generally calm for tourists but the humanitarian situation is serious. Consider the ethical implications of tourism spending and choose locally owned businesses where possible.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Shwedagon before sunrise is transformative",
      desc: "The Shwedagon Pagoda at dawn, before the tourist minibuses arrive at 8am, is one of Southeast Asia's most profound experiences. Monks chanting, candles flickering, devotees washing the Buddha images, and the gold stupa catching the first light. Get there by 5:45am. Book a guided dawn walk at https://www.getyourguide.com/s/?q=Yangon+Shwedagon&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚂",
      title: "The Circular Train is a $0.10 window into real Yangon",
      desc: "The 3-hour loop costs less than a cent per kilometre and passes through a cross-section of suburban Yangon life that no other transport reveals. Bring water, a snack, and a wide-angle lens. Sit on the left side heading out of Yangon Central for the best market and paddy-field views.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍵",
      title: "Eat laphet thoke at least once every day",
      desc: "Tea leaf salad is Myanmar's most nutritious and distinctive dish: fermented tea leaves tossed with crunchy fried garlic, sesame seeds, peanuts, dried shrimp, cherry tomatoes, and lime. It is simultaneously a snack, a salad, and a mild stimulant. Every tea house and noodle shop serves a version for under $1.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏦",
      title: "Exchange money at Forex bureaus, not hotels",
      desc: "Licensed Forex bureaus on Bogyoke Aung San Road give 10–15% better rates than hotel exchange desks. Bring USD in denominations of $50 and $100 for the best rates. The kyat rate fluctuates significantly due to the current economic situation — exchange only what you need for 1–2 days at a time.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is it safe to travel to Yangon in 2026?",
      a: "Yangon city has remained relatively calm for tourists since the 2021 military coup. However, the situation in Myanmar is serious and some areas outside Yangon have active armed conflict. Check your government's current travel advisory immediately before booking. The US, UK, and Australian governments advise reconsider travel or do not travel as of 2026. If you go, register with your embassy, avoid political gatherings, and book comprehensive travel insurance that covers political unrest.",
    },
    {
      q: "What is mohinga and where is the best place to try it?",
      a: "Mohinga is Myanmar's national dish: a rich fish-broth rice noodle soup garnished with banana stem, crispy chickpea fritters, boiled egg, and lime. It is eaten for breakfast by most Burmese people every morning. The best mohinga is at street stalls before 9am when the broth is freshest. Aung Thukha restaurant on U Htun Yi Road and the stalls around Shwedagon Pagoda's south entrance are consistently recommended by locals.",
    },
    {
      q: "How do I get around Yangon without getting lost?",
      a: "Yangon has no metro. Taxis are the most reliable option for tourists ($1.50-3 per ride within the city). Grab app (Southeast Asia's Uber equivalent) works in Yangon for transparent pricing. The Circular Train is excellent for the suburban experience but the timetable can be erratic. Walking is fine in the colonial downtown area (roughly 1km across) but the city is very spread out for other attractions.",
    },
    {
      q: "Can I dress casually in Yangon?",
      a: "For daily sightseeing, light cotton clothing is ideal in the heat. For pagoda visits you need covered shoulders and legs that reach below the knee (longyi wraps are sold or loaned at all major pagoda entrances for $0.50-1). Women do not need to cover their heads. Shorts and sleeveless tops are fine in restaurants and markets but not appropriate inside pagodas and temples.",
    },
  ],
  combineWith: ["bagan-4-days", "inle-lake-myanmar", "bangkok-4-days"],
  relatedSlugs: ["bagan-4-days", "bangkok-4-days", "chiang-mai-4-days", "phnom-penh-3-days"],
  galleryQuery: "yangon myanmar shwedagon pagoda colonial architecture",
};

export const metadata: Metadata = {
  title: "Yangon in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Yangon itinerary — Shwedagon Pagoda at sunrise, Circular Train ride, Bogyoke Market, Strand Hotel colonial atmosphere, mohinga breakfast, and tea leaf salad. Budget $40/day to luxury. Visa info included.",
  keywords: [
    "Yangon itinerary",
    "Yangon 3 days",
    "Yangon travel guide 2026",
    "Shwedagon Pagoda",
    "Yangon Circular Train",
    "Bogyoke Market",
    "mohinga Myanmar",
    "Yangon visa Indian passport",
  ],
  openGraph: {
    title: "Yangon in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Shwedagon Pagoda at sunrise, Circular Train through bamboo villages, mohinga breakfast noodles, and colonial grandeur at the Strand Hotel — Yangon in 3 days.",
    type: "article",
    url: `${siteUrl}/blog/yangon-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Yangon in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Shwedagon at sunrise, $0.10 Circular Train ride, tea leaf salad, and the Strand Hotel bar — Yangon in 3 days, all budgets covered.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/yangon-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Yangon in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Yangon in 3 Days",
          item: `${siteUrl}/blog/yangon-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Yangon",
      description:
        "Yangon, Myanmar — Southeast Asia's most intact colonial city, home to the golden Shwedagon Pagoda, the legendary Strand Hotel, and the Circular Train through bamboo villages.",
      geo: { "@type": "GeoCoordinates", latitude: 16.8661, longitude: 96.1951 },
    },
  ],
};

export default function YangonPage() {
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
