import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Singapore",
  country: "Singapore",
  countryFlag: "🇸🇬",
  slug: "singapore-3-days",
  heroQuery: "singapore marina bay sands gardens by the bay night skyline",
  heroAlt: "Singapore Marina Bay Sands and Gardens by the Bay Supertrees illuminated at night",
  category: "Asia",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "A city-state that should not exist — Singapore has no natural resources, no hinterland, and imported its water until recently. What it built instead is one of the world's most efficient, green, and astonishing cities. Hawker centres serve food that earned Michelin stars for $3. Gardens by the Bay grew a forest under a glass dome. And Changi Airport is genuinely a tourist attraction.",
  stats: { duration: "3 Days", budgetFrom: "SGD 80", bestMonths: "Feb – Apr, Aug – Oct", airport: "SIN (Changi Airport)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["Entry Requirement", "Indians need an Entry Permission from ICA (Immigration and Checkpoints Authority). Apply online at ica.gov.sg — typically SGD 30, approved in 1–3 business days."],
        ["IVisa/SingaVisa", "Third-party services like IVisa.com process the Singapore tourist visa for convenience. Apply at least 5–7 days before travel."],
        ["Processing", "Approval is usually instant to 3 days. Print or save the approval digitally — show on arrival."],
        ["Duration", "30 days stay permitted. Singapore is usually a multi-stop trip — combine with Bangkok, Kuala Lumpur, or Bali."],
      ],
    },
    {
      flag: "🌍",
      title: "Western & Most Other Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, Australia, Canada, EU, Japan, Korea, and most Western passports get 30–90 days visa-free. No pre-approval needed."],
        ["ASEAN", "All ASEAN nationals (Thailand, Malaysia, Philippines, etc.) enter visa-free for 30+ days."],
        ["EZ-Link Card", "Buy an EZ-Link contactless card at Changi Airport for SGD 12 (includes SGD 7 credit). Use it on MRT, buses, and some taxis — no cash needed anywhere."],
        ["Transport", "Singapore MRT is one of the world's best metro systems — clean, air-conditioned, and covers every major attraction. Never take a taxi when MRT is available."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "SGD 80–130/day (~$60–97)",
      days: [
        {
          day: "Day 1",
          title: "Marina Bay, Gardens by the Bay & Maxwell Hawker Centre",
          items: [
            "9:00am — Marina Bay waterfront walk — free, one of the world's most spectacular urban waterfronts. Walk from the Helix Bridge to the Merlion.",
            "10:00am — Merlion Park (free) — the half-lion half-fish statue. Overrated but obligatory. Takes 10 minutes.",
            "10:30am — Walk to Gardens by the Bay: Supertree Grove (free to walk around). Skyway bridge between the Supertrees: SGD 14. Worth it for the views.",
            "12:00pm — Cloud Forest and Flower Dome inside Gardens by the Bay (SGD 28 for both domes) — the Cloud Forest has a 35m indoor mountain waterfall. Extraordinary.",
            "2:00pm — Lunch at Maxwell Food Centre (nearby, 10 min by MRT): Tian Tian Hainanese Chicken Rice — the stall that had a Michelin star. Chicken rice + soup for SGD 5–6.",
            "4:00pm — Chinatown: Sri Mariamman Temple (free), Chinatown Heritage Centre, Pagoda Street",
            "6:00pm — Chinatown Complex Food Centre for dinner — 260 stalls, SGD 4–8 per dish. Order char kway teow, laksa, or BBQ stingray.",
            "7:45pm — Return to Gardens by the Bay for the Supertree Grove Garden Rhapsody light show (free, 7:45pm and 8:45pm nightly)",
          ],
          cost: "SGD 60–80 total",
        },
        {
          day: "Day 2",
          title: "Sentosa, Little India & Haw Par Villa",
          items: [
            "9:00am — Take MRT to HarbourFront, walk across the Sentosa Boardwalk to Sentosa Island (free on foot)",
            "10:00am — Palawan Beach and Siloso Beach (free) — Sentosa's beaches are man-made but pleasant. The water is calm.",
            "11:30am — Universal Studios Singapore (SGD 83) — optional. Skip if you've been to a Universal park. The rides are good but the park is small.",
            "1:00pm — Lunch at Sentosa food court or back in Harbourfront Vivo City mall (SGD 10–15)",
            "3:00pm — Return to mainland. Take MRT to Little India — Mustafa Centre (24-hr shopping), Sri Veeramakaliamman Temple, Tekka Centre wet market",
            "5:00pm — Haw Par Villa (free) — Singapore's strangest attraction. A 1937 Chinese mythology theme park with 1,000 statues depicting hell, heaven, and Chinese legends. Utterly bizarre and fascinating.",
            "7:30pm — Dinner at Tekka Centre food court in Little India — roti prata, fish head curry, biryani for SGD 6–10",
          ],
          cost: "SGD 30–120 (depending on Universal Studios)",
        },
        {
          day: "Day 3",
          title: "Singapore Zoo, Orchard Road & Changi Airport",
          items: [
            "9:00am — Singapore Zoo (SGD 48) — consistently voted one of the world's best zoos, open-concept moats instead of cages, orangutans roam freely overhead",
            "Breakfast in the Zoo with orangutans (SGD 38 additional) — optional but memorable",
            "River Wonders (adjacent to zoo, SGD 38 separate) — giant pandas, Amazon river manatees, the world's largest freshwater aquarium",
            "1:00pm — Lunch at the zoo or return to city for hawker lunch",
            "3:00pm — Orchard Road — Singapore's famous shopping street. Window-shop or browse ION Orchard for luxury brands.",
            "5:00pm — Bugis Street market for souvenir shopping — clothes, accessories, snacks at low prices",
            "7:00pm — Dinner at Lau Pa Sat (Telok Ayer Market) — a Victorian cast-iron market, outdoor satay street in the evenings. Satay 3 sticks for SGD 3.",
            "After dinner: If departing, Changi Airport is worth arriving 3 hours early — the Jewel waterfall, butterfly garden, and rooftop cactus garden are genuine attractions",
          ],
          cost: "SGD 80–120 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "SGD 200–400/day (~$150–300)",
      days: [
        {
          day: "Day 1",
          title: "Marina Bay Sands & Fine Dining",
          items: [
            "Check in to a boutique hotel in the Marina Bay area (SGD 180–300/night)",
            "Morning: Gardens by the Bay with Cloud Forest and Flower Dome (SGD 28)",
            "Lunch at Liao Fan Hong Kong Soya Sauce Chicken — $2 Michelin-starred hawker meal (budget within a mid-range trip)",
            "Afternoon: Marina Bay Sands SkyPark observation deck (SGD 32) — 200m views of the city skyline. Non-hotel guests can access the SkyPark.",
            "Evening: Dinner at Violet Oon Singapore in Clarke Quay — Peranakan cuisine, SGD 60–100 per person",
            "After dinner: Clarke Quay riverside bars for cocktails",
          ],
          cost: "SGD 250–400",
        },
        {
          day: "Day 2",
          title: "Sentosa Resort & Night Safari",
          items: [
            "Morning: Sentosa island resort beach day — Amara Sanctuary or Capella Singapore poolside (day access)",
            "Lunch at Quayside Isle, Sentosa Cove — seafood restaurant with marina views",
            "Afternoon: Cable car from Mount Faber to Sentosa (SGD 35 return) — panoramic harbour views",
            "Evening: Singapore Night Safari (SGD 55) — the world's first nocturnal zoo. See lions, hyenas, tapirs in natural darkness.",
          ],
          cost: "SGD 250–350",
        },
        {
          day: "Day 3",
          title: "Botanic Gardens, Dempsey Hill & Farewell",
          items: [
            "Morning: Singapore Botanic Gardens (free) — UNESCO World Heritage Site, the National Orchid Garden (SGD 15)",
            "Brunch at Dempsey Hill — former British military barracks turned restaurant enclave. PS Café or Long Beach Seafood.",
            "Afternoon: Ann Siang Hill and Club Street — Singapore's boutique bar and café district",
            "Farewell dinner at Odette, Labyrinth, or Candlenut — Singapore's Michelin-starred restaurants, SGD 150–300 per person",
          ],
          cost: "SGD 300–500",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "SGD 600+/day (~$450+)",
      days: [
        {
          day: "Days 1–3",
          title: "Singapore in Complete Luxury",
          items: [
            "Stay at Raffles Singapore (the legendary colonial hotel, reopened after restoration, from SGD 1,200/night) or The Fullerton Hotel (colonial heritage on the Singapore River)",
            "Private Singapore city tour with a licensed cultural guide — Peranakan heritage, colonial history, street art",
            "Afternoon tea at Raffles Long Bar — invented the Singapore Sling cocktail in 1915",
            "Dinner at Odette (3 Michelin stars, French-inspired) or Les Amis — Singapore's finest dining, SGD 300–500 per person",
            "Private yacht charter around Sentosa and the Southern Islands (SGD 800–1,500 for a half day)",
            "Spa day at Raffles Spa or COMO Shambhala",
            "Helicopter tour over the city skyline (SGD 500–800 per person for 20 min)",
          ],
          cost: "SGD 2,000–5,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "SGD 30–60 (hostel/budget hotel)", food: "SGD 15–30 (hawker centres)", transport: "SGD 5–10 (MRT + bus)", activities: "SGD 20–60", total: "SGD 70–160/day" },
    { tier: "✨ Mid-Range", accommodation: "SGD 150–300", food: "SGD 50–100", transport: "SGD 20–40 (Grab + MRT)", activities: "SGD 60–150", total: "SGD 280–590/day" },
    { tier: "💎 Luxury", accommodation: "SGD 500–1,500", food: "SGD 150–400", transport: "SGD 50–200", activities: "SGD 200–800", total: "SGD 900–2,900/day" },
  ],
  mistakes: [
    { icon: "🍽️", title: "Spending Too Much on Restaurants When Hawker Centres Have Michelin Food", desc: "Singapore's hawker centres serve food that earned Michelin Bib Gourmand and even starred recognition — Tian Tian chicken rice, Liao Fan soya sauce chicken (once the world's cheapest Michelin meal at $2), Hill Street Tai Hwa pork noodles. A full hawker meal costs SGD 4–8. There is no reason to spend SGD 40 on the same dish at a restaurant.", color: "bg-red-50 border-red-200" },
    { icon: "🐉", title: "Missing Haw Par Villa", desc: "Haw Par Villa is free, deeply strange, and completely unique — 1,000 statues built in 1937 by the Tiger Balm brothers to teach Chinese mythology and moral values. The 'Ten Courts of Hell' dioramas showing punishments for various sins are unlike anything else in Asia. Most tourists skip it entirely. Go.", color: "bg-orange-50 border-orange-200" },
    { icon: "💳", title: "Not Getting an EZ-Link Card", desc: "Singapore's MRT and bus network covers every attraction in this guide for SGD 1–2.50 per trip. Not having an EZ-Link card means paying cash, which costs more and slows you down. Buy the card at the airport for SGD 12 (includes SGD 7 credit) the moment you land.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🎢", title: "Visiting Universal Studios When Singapore Zoo is Better Value", desc: "Universal Studios Singapore (SGD 83) has maybe 10 rides and takes half a day. Singapore Zoo (SGD 48) is genuinely world-class — open-concept, animals roam freely, the orangutan breakfast is unforgettable — and you can easily spend a full day. Unless you have kids who specifically want Universal, the Zoo wins.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌳", title: "Gardens by the Bay Supertree Show at 7:45pm is Free", desc: "The Garden Rhapsody light and music show at the Supertree Grove runs every night at 7:45pm and 8:45pm. It's completely free — just stand in the grove and watch the Supertrees come alive in colour and sound. One of the most spectacular free shows in Asia. The SGD 14 Skyway bridge lets you walk between the trees at canopy height.", color: "bg-amber-50 border-amber-200" },
    { icon: "🍗", title: "Maxwell Hawker Centre for Tian Tian Chicken Rice", desc: "Tian Tian Hainanese Chicken Rice at Maxwell Food Centre held a Michelin Bib Gourmand for years. The queue starts at 11am, peaks at noon — arrive at 11:15am for the shortest wait. Poached chicken, rice cooked in chicken fat, chilli sauce, and soup. SGD 5.50 for one of Singapore's defining dishes.", color: "bg-teal-50 border-teal-200" },
    { icon: "✈️", title: "Changi Airport is Worth Arriving 3 Hours Early", desc: "Jewel Changi Airport has the world's tallest indoor waterfall (7 storeys, free to view from the terminal), a hedge maze, mirror maze, butterfly garden, and rooftop cactus garden. The retail and food offerings are excellent. Budget travellers: arrive early and have a full duty-free dinner instead of paying city restaurant prices.", color: "bg-green-50 border-green-200" },
    { icon: "🚇", title: "The MRT Gets You Everywhere for Under SGD 3", desc: "Marina Bay, Orchard, Little India, Chinatown, Sentosa, and the Zoo are all MRT-accessible. Singapore's metro is air-conditioned, punctual to the minute, and covers 200km of track. Download the MyTransport.SG app for live arrival times. A Grab taxi costs 5–10x more for the same journey.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Is Singapore expensive to visit?", a: "It depends entirely on how you approach it. Staying in a hostel (SGD 30–50/night), eating exclusively at hawker centres (SGD 5–10 per meal), and using the MRT (SGD 2–3 per trip) brings the total to SGD 80–120/day — comparable to European budget travel. The trap is eating at restaurants and taking Grab taxis, which inflates costs to SGD 200+/day without adding value." },
    { q: "How many days do you need in Singapore?", a: "3 days covers the essential highlights — Marina Bay, Gardens by the Bay, Sentosa, Little India, Chinatown, and the Zoo. 4–5 days allows you to add day trips to Pulau Ubin island, Johor Bahru (Malaysia, 30 min by bus), or a deeper dive into the hawker centre scene. Singapore is small — 3 days is genuinely sufficient for most visitors." },
    { q: "What is the best area to stay in Singapore?", a: "Marina Bay area (expensive but spectacular views), Chinatown or Little India (budget-friendly, central, good food), Bugis/Arab Street (character and central location), or Orchard (shopping and mid-range hotels). Avoid staying in Sentosa unless you're specifically at a resort — it's not well-connected to the city." },
    { q: "Is Singapore good for Indian tourists?", a: "Exceptionally so. Singapore has a large Indian community (Tamil, Punjabi, Bengali) — Little India is a full neighbourhood with temples, sarees, and South Indian food. Mustafa Centre is a 24-hr Indian department store. Vegetarian food is widely available at hawker centres and Little India restaurants. Indian tourists also benefit from the visa-free or easy entry process for many Indian passport holders via the ICA electronic visa." },
    { q: "What is the best hawker centre in Singapore?", a: "Maxwell Food Centre (Tian Tian chicken rice, SGD 5), Lau Pa Sat (best for evening satay and atmosphere), Old Airport Road Food Centre (old-school variety, least touristy), Newton Food Centre (central, slightly touristy but excellent), Chinatown Complex Food Centre (260 stalls, bargain prices). Locals say Old Airport Road is the best overall." },
  ],
  combineWith: ["bali-5-days", "bangkok-4-days", "maldives-5-days"],
  relatedSlugs: ["bali-5-days", "bangkok-4-days", "maldives-5-days", "phuket-5-days"],
  galleryQuery: "singapore marina bay sands gardens supertrees skyline night",
};

export const metadata: Metadata = {
  title: "Singapore in 3 Days: Complete Guide (Hawker Food, Gardens by the Bay & Singapore Zoo, 2026)",
  description: "3-day Singapore itinerary — Gardens by the Bay free show, Maxwell hawker chicken rice, Singapore Zoo vs Universal Studios, EZ-Link card guide, and budget vs luxury costs in SGD.",
  keywords: ["singapore itinerary 3 days", "singapore travel guide 2026", "gardens by the bay guide", "singapore hawker centres", "singapore budget travel", "singapore zoo guide"],
  openGraph: {
    title: "Singapore in 3 Days: Hawker Food, Gardens & Skyline 2026",
    description: "Free Supertree show, Michelin hawker food, and the world's best zoo.",
    images: [{ url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", width: 1200, height: 630, alt: "Singapore Marina Bay Sands skyline night" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Singapore in 3 Days (2026)", description: "Hawker Michelin food, free Supertree show, Singapore Zoo guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/singapore-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Singapore in 3 Days: Complete Guide (Hawker Food, Gardens by the Bay & Singapore Zoo, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Singapore 3 Days", item: "https://www.incredibleitinerary.com/blog/singapore-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Singapore",
      description: "City-state in Southeast Asia known for Gardens by the Bay, hawker centres with Michelin-starred food, one of the world's best zoos, and Changi Airport.",
    },
  ],
};

export default function SingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
