import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Mumbai",
  country: "India",
  countryFlag: "🇮🇳",
  slug: "mumbai-3-days",
  heroQuery: "mumbai marine drive gateway of india skyline",
  heroAlt: "Mumbai Marine Drive at dusk with the Arabian Sea and city skyline glittering behind it",
  category: "India",
  date: "April 6, 2026",
  readTime: "13 min read",
  intro: "Mumbai at 6am is unlike any city in India — the local trains already thundering with office workers, vada pav vendors lighting their tavas on every footpath corner, fishermen returning to Sassoon Dock, and Marine Drive catching the first Arabian Sea light. Three days in this city won't exhaust it, but done right they'll give you the Gateway, Elephanta, Dharavi, the Bandra waterfront, Juhu beach, the best street food in the country, and the electric pulse that makes Mumbai the city that never quite sleeps.",
  stats: { duration: "3 Days", budgetFrom: "₹1,500", bestMonths: "Nov–Feb", airport: "BOM (Chhatrapati Shivaji Maharaj)" },
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
      title: "Indian Citizens — Domestic Travel",
      bg: "bg-orange-50", border: "border-orange-200", titleColor: "text-orange-800",
      items: [
        ["No Visa Required", "Mumbai is a domestic destination for Indian passport holders. A valid government-issued photo ID (Aadhaar, PAN card, driving licence, or passport) is sufficient for flights, trains, and hotel check-in."],
        ["Train Booking Tips", "Book IRCTC trains 60–120 days in advance on irctc.co.in or the IRCTC Rail Connect app. For last-minute trips, check Tatkal quota (opens 1 day before departure at a ₹200–400 premium). Central Railway and Western Railway both terminate at Mumbai CST and Mumbai Central respectively."],
        ["Flight Tips", "IndiGo, Air India Express, SpiceJet, and Akasa Air all serve BOM. Book 3–6 weeks ahead for fares under ₹3,000 from most major Indian metros. BOM is served by T1 (domestic) and T2 (international + some domestic IndiGo/Air India flights). Check your terminal before heading to the airport."],
      ],
    },
    {
      flag: "🌍",
      title: "Travelling from Abroad",
      bg: "bg-blue-50", border: "border-blue-200", titleColor: "text-blue-800",
      items: [
        ["e-Visa Available", "Most nationalities can apply for an Indian e-Tourist Visa online at indianvisaonline.gov.in. Fee: USD 25 (30-day single entry) or USD 40 (1-year multiple entry). Apply at least 4 business days before arrival. The e-Visa is linked to your passport — print the approval letter and carry it."],
        ["Visa on Arrival", "Citizens of Japan, South Korea, UAE, and a handful of other countries can obtain a Visa on Arrival at BOM T2 international arrivals. Fees and terms vary — verify on the Indian government's official visa portal before travel."],
        ["SIM Card at BOM", "Airtel, Jio, and Vi kiosks are available inside T2 arrivals (post customs). A prepaid tourist SIM with 1.5GB/day data for 28 days costs ₹300–400. Bring a passport copy and passport photo — required for activation. Jio's network is strongest in suburban Mumbai."],
        ["Currency", "Exchange at the Thomas Cook or BookMyForex counter inside T2 arrivals for competitive rates. Avoid the first kiosk you see post-customs. ATMs (SBI, HDFC, ICICI) in the arrivals hall dispense ₹2,000–20,000 per transaction. Inform your home bank before travel to avoid card blocks."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₹1,500–2,500/day",
      days: [
        {
          day: "Day 1",
          title: "Gateway, Colaba & Marine Drive",
          items: [
            "7:30am — Start at Gateway of India before the tour boats arrive and the selfie crowds gather. The basalt arch frames the harbour beautifully at sunrise. Entry is free. Stand on the waterfront and watch the ferries leave for Elephanta.",
            "8:30am — Breakfast at Cafe Mondegar (Metro House, Colaba Causeway) — keema pav ₹110, masala chai ₹40. A Mumbai institution since 1932 with murals by Mario Miranda covering every wall.",
            "10:00am — Walk Colaba Causeway for books, antiques, and silver jewellery. Bargain firmly — open at 50% of the first price. The Strand Book Stall (PM Road, Fort) is nearby and sells discounted originals, not piracy.",
            "12:00pm — Vada pav at Ashok Vada Pav, junction of SV Patel Road and Nariman Point — ₹20 per piece, widely considered the benchmark. Two pieces and a cutting chai (₹15 at the tapri next door) is a complete Mumbai lunch.",
            "1:30pm — Walk or take a BEST bus (₹9–15) to Marine Drive. The Art Deco buildings lining the curve are a UNESCO World Heritage Site. Walk the full 3.6km promenade from Nariman Point to Chowpatty Beach.",
            "4:00pm — Bhel puri and sev puri at Chowpatty Beach from the stalls near the central section — ₹40–60 per plate. The masala puri at Panshikar's stall is the most requested. Sit facing the sea.",
            "7:00pm — Marine Drive at dusk: the 'Queen's Necklace' city lights stretch along the arc. Best viewed from the steps between the two signal bridges. Free, and genuinely one of India's most beautiful urban views.",
            "8:30pm — Dinner at Olympia Coffee House, Colaba — mutton kheema per ₹180, brain masala ₹220. Cash only. A colonial-era Irani café that hasn't changed its menu in 50 years.",
          ],
          cost: "₹800–1,200 total",
        },
        {
          day: "Day 2",
          title: "Elephanta Caves & Dharavi",
          items: [
            "7:30am — Reach Gateway of India by 8am. Boat to Elephanta Island departs every 30 minutes from 9am (MTDC launches, ₹230 return, 1 hour journey). Buy tickets at the MTDC counter near the Gateway — no advance booking needed on weekdays but arrive early on weekends.",
            "9:00am — Elephanta Caves (₹40 for Indians, ₹600 for foreigners). The main cave's Trimurti sculpture — Shiva as Creator, Preserver, and Destroyer — is a 6-metre masterpiece of 6th-century rock-cut artistry. Budget 2 hours for the island.",
            "11:30am — Return boat to Gateway. Grab a fresh sugarcane juice (₹30) from the vendor near Sassoon Dock road.",
            "1:00pm — Dharavi walking tour with Reality Tours & Travel (₹950/person including ₹100 donation to Dharavi community programs, book online at realitytoursandtravel.com). 2-hour walk through Asia's largest informal economy — recycling district, pottery village, leather workshops, bakeries. No photography inside the residential section — respect the rule.",
            "3:30pm — Exit Dharavi near Mahim. BEST bus or rickshaw to Bandra West (₹25–60). Carter Road waterfront and the Bandra-Worli Sea Link view from Castella de Aguada (Mount Mary Steps area) — the bridge lit at evening is exceptional.",
            "6:00pm — Street food on Hill Road, Bandra: pav bhaji at Sardar Refreshments (Tardeo) or the bhaji stalls outside the market — ₹80 for a full plate with two pavs.",
            "8:00pm — Dinner at Lucky Restaurant, Bandra West (Turner Road) — nihari ₹220, phirni ₹80, roomali roti ₹25. Open until midnight. A Muslim-owned institution beloved across South Mumbai and Bandra.",
          ],
          cost: "₹1,200–1,800 total",
        },
        {
          day: "Day 3",
          title: "Juhu Beach, Versova & Local Train Experience",
          items: [
            "6:30am — Juhu Beach at sunrise before the crowds. Walk from the Juhu Hotel end toward JVPD. The bhel puri and corn carts set up by 7am. Priti Bhelpuri (opposite the Marriott) opens at 6:30am — ₹50 per plate.",
            "8:30am — Mumbai local train experience: board at Vile Parle station (Western Line, heading south toward Churchgate). Trains every 3–5 minutes, ₹10–15 per journey. Travel in the general coach to experience the rush — or ladies' compartment for solo women. This is Mumbai's real circulatory system.",
            "9:30am — Churchgate Station to Crawford Market (take a taxi or walk via DN Road, 25 minutes). Crawford Market (Mahatma Phule Market) — fruit wholesale, pet section, spice traders. The British-era building with Lockwood Kipling friezes is worth seeing even if you don't buy anything.",
            "11:00am — Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (Prince of Wales Museum), Fort — ₹85 for Indians, excellent collection of Mughal miniatures, terracotta sculpture, and natural history. 1.5 hours.",
            "1:00pm — Lunch at Britannia & Co., Ballard Estate — berry pulao ₹320, chicken dhansak ₹280. The last remaining Irani Parsi restaurant in the city, run by 95-year-old Boman Kohinoor. Closed Sundays.",
            "3:00pm — CST (Chhatrapati Shivaji Maharaj Terminus) exterior — the Gothic-Victorian-Indian fusion UNESCO World Heritage building. Free to photograph from the street. The interior platforms are accessible to anyone with a platform ticket (₹10).",
            "5:00pm — Versova Beach via auto from Andheri (₹80–100). The village end of Versova near the fishing colony is one of Mumbai's genuinely unspoiled corners. Sit at the chai tapri at the fishing colony gate until sunset.",
            "7:30pm — Final dinner at Bastian, Bandra West (New Link Road) for seafood — prawn koliwada ₹350, sol kadhi ₹80 — or stay budget at Shiv Sagar, Vile Parle for Punjabi thali ₹160.",
          ],
          cost: "₹900–1,400 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₹4,000–8,000/day",
      days: [
        {
          day: "Day 1",
          title: "South Mumbai Heritage & Sunset Cruise",
          items: [
            "9:00am — Check into a South Mumbai hotel: Gordon House Hotel (Colaba, ₹4,500–6,000/night) or The Fariyas Hotel (Arthur Bunder Road, ₹5,000–7,000/night) — both walkable to major landmarks.",
            "10:00am — Gateway of India then Taj Mahal Palace Hotel lobby tour — the Heritage Wing's grand staircase, chandelier dome, and sea-facing corridor are among the finest hotel interiors in India. Non-guests can enter the lobby and sea-view corridor.",
            "12:30pm — Lunch at Trishna, Fort (Rope Walk Lane) — butter-pepper-garlic crab ₹850–1,200, kolambi curry ₹450. One of India's most celebrated seafood restaurants. Book ahead on weekends.",
            "3:00pm — Walk to Horniman Circle — Mumbai's finest colonial square with a reading garden — then Kala Ghoda Art District. The Chhatrapati Shivaji Maharaj Vastu Sangrahalaya museum (₹85) and the National Gallery of Modern Art (₹20) are both within 5 minutes' walk.",
            "6:00pm — Maharashtra Tourism sunset cruise (₹250/person, departs Gateway of India, 1 hour). The harbour view of South Mumbai at dusk — with the Taj Hotel, the Gateway arch, and the distant Bandra-Worli bridge — is one of the city's defining images.",
            "8:30pm — Dinner at Indigo Restaurant, Colaba (Mandlik Road) — Continental-Indian fusion, mains ₹600–1,100, excellent wine list. Reserve 2 days ahead.",
          ],
          cost: "₹3,500–5,500 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Elephanta + Dharavi Reality Tour + Bandra Evening",
          items: [
            "8:30am — Deluxe catamaran to Elephanta (Maldar Catamarans, ₹680 return, air-conditioned, 25 minutes). Departs 9am from Gateway. Book online or at their counter the previous evening.",
            "9:30am — Elephanta Caves with an audio guide (rent at the island, ₹100). The Trimurti panel and the marriage of Shiva and Parvati reliefs in the eastern wing are the highlights. Allow 2 hours for the main cave complex.",
            "12:00pm — Return to Gateway. Lunch at Leopold Cafe, Colaba (Shahid Bhagat Singh Road) — chicken stroganoff ₹380, cold coffee ₹150. A Mumbai landmark since 1871.",
            "2:30pm — Dharavi tour with Reality Tours (₹950, pre-booked). The recycling district processes 80% of Mumbai's plastic; the mini-leather industry exports goods to European brands. Context-setting, not poverty tourism.",
            "5:00pm — Bandra West: sunset at Bandstand Promenade, walk past the Shah Rukh Khan bungalow Mannat, then sea-facing walk along Carter Road.",
            "8:00pm — Dinner at The Bombay Canteen, Lower Parel (Thomas Scott Compound) — modern Indian menu, mains ₹450–800. The pork vindaloo and the kori roti are exceptional. Reserve online 3 days ahead.",
          ],
          cost: "₹3,000–5,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Dhobi Ghat, Mahalakshmi & Juhu",
          items: [
            "8:00am — Dhobi Ghat (Mahalakshmi Dhobi Ghat) — the world's largest open-air laundry. Best viewed from the bridge on Dr E Moses Road (free, no entry required). 800 dhobi families wash 900,000 garments daily here. The colour and choreography of the washing rows is remarkable at 8–9am.",
            "9:30am — Mahalakshmi Temple — one of Mumbai's most significant temples. Remove shoes, dress modestly (cover shoulders and knees). Darshan on a weekday morning takes 20–30 minutes. Prasad thali ₹30.",
            "11:00am — Haji Ali Dargah (accessible on foot via the causeway at low tide — check tide timings, free entry). The Indo-Islamic architecture and the sea-surrounded location are architecturally striking.",
            "1:00pm — Lunch at Olympia Coffee House (Colaba) or Bademiya's famous seekh kebabs, Colaba back lane — ₹180–220 per skewer, minimum order 2.",
            "3:30pm — Juhu Beach. Rent a sun lounger (₹200), order fresh coconut water (₹60). The stalls at Juhu serve Mumbai's best street food concentration: sev puri, dahi puri, paani puri, corn, kulfi.",
            "6:30pm — Juhu sunset then cocktails at The Bar at JW Marriott Juhu (Juhu Tara Road) — beachside bar, cocktails ₹700–950, the Arabian Sea view at dusk.",
            "8:30pm — Farewell dinner at Pali Bhavan, Bandra (Pali Naka) — Goan-influenced menu, fish curry ₹380, prawn recheado ₹450. One of Bandra's most-loved neighbourhood restaurants.",
          ],
          cost: "₹3,500–5,000 total (excl. hotel)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₹15,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Taj Mahal Palace & South Mumbai Icons",
          items: [
            "Check into Taj Mahal Palace, Colaba — Heritage Wing sea-view room ₹25,000–45,000/night. The hotel that survived the 26/11 attacks and still carries the most storied address in Indian hospitality.",
            "Private transfer from BOM in a chauffeur-driven Innova Crysta or Mercedes — pre-arranged through the hotel concierge, ₹2,500–4,000.",
            "12:00pm — Lunch at Wasabi by Morimoto, Taj Mahal Palace — Chef Nobu Matsuhisa's Mumbai outpost. Omakase set ₹4,500/person, à la carte from ₹800.",
            "3:00pm — Private heritage walk of Kala Ghoda and Fort with a Khaki Tours guide (₹2,500/person, khakitours.com) — the finest expert-led architectural walk in Mumbai covering the full Indo-Saracenic collection.",
            "7:00pm — Sundowner at the Sea Lounge, Taj Mahal Palace — cocktails ₹900–1,400, the harbour view from this first-floor bar framed perfectly.",
            "9:00pm — Dinner at Souk, Taj Mahal Palace — Middle Eastern and Mediterranean menu, mezze for two ₹3,500, mains ₹1,200–2,200.",
          ],
          cost: "₹15,000–22,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Elephanta + Dharavi Design Tour",
          items: [
            "8:00am — Breakfast at Harbour Bar, Taj Mahal Palace — the full Mumbai breakfast spread with harbour views. ₹1,800–2,500/person.",
            "9:00am — Private boat charter to Elephanta (arrange through Taj concierge or Aquasail Mumbai, ₹8,000–15,000 for a private launch). Arrive before the public ferries — the caves with fewer than 10 people are a completely different experience.",
            "12:30pm — Lunch at O Pedro, BKC (Unit 2, Jet Airways Bandra-Kurla Complex) — Goan-Portuguese menu, sharing plates ₹600–1,100 each, wine ₹800/glass. Reserve 5 days ahead.",
            "3:00pm — Dharavi design and social enterprise tour with Reality Gives (₹2,500/person, realitygives.org) — the upscale version that includes conversations with entrepreneurs, visits to the design studios producing exported goods, and a sit-down with a community leader.",
            "6:00pm — Bandra: private shopping experience at Ogaan boutique (Hill Road) — the best Indian designer multi-brand store in Mumbai. Kallol Datta, Abraham & Thakore, Pero — all stocked.",
            "9:00pm — Dinner at Olive Bar & Kitchen, Bandra (14 Union Park) — Mediterranean menu, burrata ₹950, sea bass ₹1,800. The enclosed outdoor courtyard under a neem tree is one of the city's finest dining settings.",
          ],
          cost: "₹18,000–28,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Juhu, Juhu Tara & Farewell Dinner at Aer",
          items: [
            "7:00am — Private yoga session on the Taj rooftop terrace or at the hotel spa's quiet garden. The Jiva Spa at Taj Mahal Palace is among the best hotel spas in India — treatments from ₹4,500.",
            "10:00am — Drive to Juhu in hotel car. Private cooking class at Salt Water Cafe (Juhu Tara Road, ₹3,500/person) — Maharashtrian home cooking, includes market visit.",
            "1:00pm — Lunch at Bastian Hospitality's Juhu outpost or at Estella (Juhu Tara Road) — wood-fired pizzas and Italian plates, mains ₹600–1,200.",
            "3:30pm — ISKCON Juhu temple visit (Hare Krishna Land, Juhu Church Road) — the magnificent marble complex with its gilt domes is the largest ISKCON temple in the world. Respectful dress required.",
            "6:00pm — Check-in time at the Taj or transfer to Four Seasons Mumbai (Dr E Moses Road, Worli) for the finest views from any hotel room in the city — Bandra-Worli Sea Link directly across the bay.",
            "9:00pm — Farewell dinner at Aer, Four Seasons Mumbai (34th floor open-air bar-restaurant) — the Bandra-Worli Sea Link lit at night, the curve of the bay, Mumbai stretching in every direction. Cocktails ₹1,200–1,800, dinner for two ₹8,000–14,000. Reserve 1 week ahead.",
          ],
          cost: "₹18,000–30,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₹600–1,200", food: "₹300–600", transport: "₹100–200", activities: "₹300–700", total: "₹1,300–2,700/day" },
    { tier: "✨ Mid-Range", accommodation: "₹3,500–6,500", food: "₹800–2,000", transport: "₹400–800", activities: "₹500–1,200", total: "₹5,200–10,500/day" },
    { tier: "💎 Luxury", accommodation: "₹18,000–45,000", food: "₹3,000–8,000", transport: "₹1,500–4,000", activities: "₹2,000–8,000", total: "₹24,500–65,000/day" },
  ],
  mistakes: [
    { icon: "🚕", title: "Trusting Taxi Meters Without Negotiating", desc: "Mumbai's black-and-yellow Premier Padmini taxis use a card rate conversion (the meter shows a lower number multiplied by a rate card factor). Always ask the driver to show you the rate card and calculate before getting in. Better: use Ola or Uber — both work everywhere in Mumbai with fixed prices and no conversion drama. A South Mumbai to Bandra Uber averages ₹180–280.", color: "bg-red-50 border-red-200" },
    { icon: "🏝️", title: "Skipping Elephanta Because of the Ferry Queue", desc: "The Gateway of India ferry queue looks daunting on weekends, but moves fast — rarely more than 20 minutes' wait. Elephanta Caves are a UNESCO World Heritage Site with carvings that took hundreds of artisans decades to complete. Skipping them to save two hours is one of the most common Mumbai regrets. Go on a Tuesday or Wednesday morning to avoid the weekend crowd entirely.", color: "bg-orange-50 border-orange-200" },
    { icon: "🍛", title: "Eating at Restaurants Near Tourist Landmarks", desc: "The restaurants immediately around the Gateway of India and in the gateway square serve overpriced, mediocre food aimed entirely at tourists. Walk two minutes to Colaba Causeway (Cafe Mondegar, Olympia Coffee House, Bademiya's) or five minutes to the Irani cafes in Fort. The price difference is 60–70% and the quality difference is just as dramatic.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🌧️", title: "Visiting During Monsoon Without Preparation", desc: "Mumbai's monsoon (June–September) is genuinely intense — 2,400mm of rain concentrated over 4 months, flooding in low-lying areas like Dadar, Sion, and parts of Kurla. Elephanta ferry services are suspended on rough-sea days. If you must travel in monsoon, pack waterproof shoes, a collapsible umbrella, and build buffer into every plan. The city is also lush and beautiful during this period — just different.", color: "bg-blue-50 border-blue-200" },
  ],
  tips: [
    { icon: "🚉", title: "Get a Mumbai Local Train Tourist Pass", desc: "A 1-day unlimited local train pass costs ₹85 (AC) or ₹35 (non-AC) and covers the entire Central, Western, and Harbour rail network. Mumbai's suburban rail carries 7.5 million passengers daily — it's the fastest way between Churchgate, Dadar, Bandra, Andheri, Borivali, and CST. Buy at any major suburban station booking window. Use only the Western Line for tourist zones (Churchgate–Virar) and Central Line (CST–Kasara).", color: "bg-amber-50 border-amber-200" },
    { icon: "🥙", title: "Best Street Food Zones By Neighbourhood", desc: "Chowpatty Beach (Marine Drive end) for bhel puri and kulfi. Colaba Causeway back lanes for pav bhaji and kebabs after 8pm. Juhu Beach for sev puri and dahi puri. Mohammed Ali Road in Ramzan season (dates vary) for nihari, naan, and sheer khurma from century-old stalls. Dadar's Hindu Colony for sabudana khichdi and misal pav. Tardeo's Sardar Refreshments for the pav bhaji Mumbai invented.", color: "bg-green-50 border-green-200" },
    { icon: "⏰", title: "Beat the Monsoon and Peak Season with Timing", desc: "November to February is peak season — cool (22–30°C), virtually no rain, every attraction open and ferries running. March and October are shoulder months with some heat. Avoid May–June (extreme humidity before monsoon, 35–39°C). The best possible time is December–January when temperatures are mild and the city's festival calendar is packed with Kala Ghoda, Banganga Classical Music Festival, and the Mumbai Marathon.", color: "bg-purple-50 border-purple-200" },
    { icon: "📱", title: "Use Ola Over Autos for Night Trips", desc: "After 11pm, finding autos willing to use the meter in Mumbai is nearly impossible — especially in South Mumbai and Andheri. Uber and Ola are consistently available at fixed prices and the drivers are GPS-tracked. Keep Google Maps running during rides. The Mumbai Metro (Lines 1, 2A, 7) also connects Versova–Andheri–Dahisar and Dahisar–Mandala for ₹10–50 per journey — excellent for the western suburbs.", color: "bg-teal-50 border-teal-200" },
  ],
  faqs: [
    { q: "How do I get from BOM airport to South Mumbai?", a: "The best options: (1) Ola/Uber — ₹350–550 from T1 (domestic), ₹550–800 from T2 (international) to Colaba, 45–75 minutes depending on traffic. (2) MERU cabs from the airport taxi stand — metered, ₹450–700. (3) Local train: auto to Vile Parle station (₹60–80), then Western Line to Churchgate (₹15, 45 minutes). The train is the fastest option in rush hour. No metro yet connects the airport to South Mumbai directly." },
    { q: "Is Mumbai safe for solo travellers and women?", a: "Mumbai is India's safest major city by most crime metrics. Colaba, Fort, Bandra, and Juhu are all comfortable for solo women at night. Avoid poorly lit alleys in Dharavi or the waterfront past Nariman Point after midnight. The local train ladies' compartment (marked with a pink stripe) is mandatory for women during peak hours and strongly recommended otherwise. Uber/Ola are safer than autos for lone women after 10pm." },
    { q: "What is the best area to stay in Mumbai?", a: "Budget: Colaba for proximity to landmarks (Backpacker Panda Hostel from ₹600/dorm, Lawrence & Mayo Guest House from ₹1,800 double). Mid-range: Bandra West for restaurants and nightlife (Hotel Suba International ₹3,500–5,000). Luxury: Colaba for the Taj (₹25,000+) or Worli for the Four Seasons (₹18,000+) with sea link views. Avoid staying in Andheri East or Goregaon unless you have specific business near BKC." },
    { q: "What is a vada pav and where is the best one?", a: "Vada pav is Mumbai's defining street food — a spiced potato dumpling (vada) deep-fried in gram flour batter, stuffed into a soft white bun (pav) with dry garlic chutney, green chutney, and fried chilli. It costs ₹15–25 everywhere. Top vendors: Ashok Vada Pav (SV Patel Road, outside Kirti College, Dadar West), Shivaji Park Vada Pav, and the nameless stall outside Andheri station's east exit. Never pay more than ₹30 for a street vada pav." },
    { q: "Can I visit Dharavi independently or do I need a tour?", a: "Dharavi is a functioning residential and industrial neighbourhood of 700,000+ people — not a museum. Independent visits without context often result in disrespectful photography or getting lost in the residential lanes. Reality Tours & Travel (realitytoursandtravel.com, ₹950/person) runs responsible tours with local guides and donates a portion to community programs. Photography is restricted to the industrial zones. This is the right way to visit." },
  ],
  combineWith: ["goa-3-days", "pune-2-days", "lonavala-2-days"],
  relatedSlugs: ["goa-3-days", "jaipur-3-days", "delhi-3-days", "hyderabad-3-days"],
  galleryQuery: "mumbai gateway of india marine drive dharavi street food local train",
};

export const metadata: Metadata = {
  title: "Mumbai in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
  description: "3 complete Mumbai plans with Gateway of India, Elephanta, Dharavi, Marine Drive, real rupee costs, local train tips, and the best vada pav spots — for every budget.",
  keywords: ["mumbai itinerary 3 days", "mumbai travel guide 2026", "mumbai budget travel", "gateway of india guide", "mumbai street food", "elephanta caves", "dharavi tour"],
  openGraph: {
    title: "Mumbai in 3 Days: Budget to Luxury 2026 Itinerary",
    description: "Gateway, Elephanta, Dharavi, Marine Drive and the best street food in India — real rupee costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80", width: 1200, height: 630, alt: "Mumbai Marine Drive Gateway of India skyline India" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Mumbai in 3 Days (2026)", description: "3 plans, real rupee costs, local train tips, best vada pav spots." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/mumbai-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mumbai in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
      description: "3 complete Mumbai itinerary plans with Gateway of India, Elephanta Caves, Dharavi, Marine Drive, and real rupee costs for budget, mid-range, and luxury travellers.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Mumbai 3 Days", item: "https://www.incredibleitinerary.com/blog/mumbai-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mumbai, India",
      description: "India's financial capital and maximum city — home to the Gateway of India, Elephanta Caves, Dharavi, Marine Drive, Bollywood, and the world's best street food.",
      touristType: ["Cultural tourists", "Food lovers", "History buffs", "Architecture enthusiasts"],
    },
  ],
};

export default function MumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
