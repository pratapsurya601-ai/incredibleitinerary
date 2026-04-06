import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Kathmandu",
  country: "Nepal",
  countryFlag: "\uD83C\uDDF3\uD83C\uDDF5",
  slug: "kathmandu-4-days",
  heroQuery: "kathmandu nepal boudhanath stupa himalaya",
  heroAlt: "Boudhanath Stupa rising above Kathmandu with Himalayan peaks in the distance",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Kathmandu is one of the last cities on earth where you can stand in a 2,000-year-old temple courtyard, watch cremation fires at a sacred river at dawn, and then sit in a trekking-gear cafe sipping masala tea before a flight to Everest Base Camp. The Kathmandu Valley holds seven UNESCO World Heritage Sites within a 20 km radius. Pashupatinath burns ghats, Boudhanath's prayer flags fluttering in high-altitude wind, the medieval Durbar Squares of Kathmandu, Patan, and Bhaktapur, and the chaotic brilliance of Thamel all coexist in a city that rewires how you see the world. Four days is enough to touch all of it.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$25",
    bestMonths: "Oct-Nov or Mar-Apr",
    airport: "KTM",
  },
  toc: [
    { id: "visa", emoji: "\uD83D\uDEC2", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
    { id: "budget", emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "\uD83D\uDCA1", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "\uD83D\uDCC5", label: "Day 1 — Pashupatinath & Boudhanath" },
    { id: "day2", emoji: "\uD83D\uDCC5", label: "Day 2 — Swayambhunath & Durbar Square" },
    { id: "day3", emoji: "\uD83D\uDCC5", label: "Day 3 — Patan & Bhaktapur" },
  ],
  visa: [
    {
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      title: "Indian Passport — Visa Free",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "No visa required for Indian citizens"],
        ["Processing", "Instant — show valid Indian passport or Voter ID"],
        ["Fee", "Free"],
        ["Validity", "Unlimited stays as an Indian national"],
        ["Entry", "Open land borders and Tribhuvan International Airport"],
        ["Documents", "Valid Indian passport or government-issued photo ID"],
        ["Notes", "Indian citizens are treated as domestic travellers under the 1950 Treaty of Peace and Friendship."],
      ],
    },
    {
      flag: "\uD83C\uDDFA\uD83C\uDDF8",
      title: "US / UK / EU / AU — Visa on Arrival",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa on Arrival or e-Visa"],
        ["Processing", "15 days: $30 | 30 days: $50 | 90 days: $125"],
        ["Fee", "$30–$125 USD (cash or card at airport)"],
        ["Validity", "15, 30, or 90 days single entry"],
        ["e-Visa", "Apply online at Nepal e-Visa portal before travel to skip airport queue"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "Airport queues can be 45–60 min on busy days — e-Visa recommended to use the fast lane."],
      ],
    },
  ],
  plans: [
    {
      label: "\uD83D\uDCB0 Budget",
      sub: "$25–40/day",
      days: [
        {
          day: "Day 1",
          title: "Pashupatinath & Boudhanath",
          items: [
            "07:00 — Pashupatinath Temple at dawn (entry $15 for non-Hindus) — arrive before 8am to witness the Bagmati River ghats at their most atmospheric; cremation fires burn continuously and sadhus in orange robes meditate on the stone steps",
            "10:00 — Walk 20 minutes to Boudhanath Stupa, one of the world's largest Buddhist stupas (entry $3); circle the stupa clockwise with pilgrims spinning prayer wheels, then climb to the rooftop of any surrounding monastery for panoramic views",
            "13:00 — Lunch at a Tibetan cafe around Boudhanath circuit: a bowl of thukpa noodle soup with yak butter tea costs under $3; the area has dozens of Tibetan-owned budget eateries",
            "15:00 — Walk or share a taxi back to Thamel ($1 in a shared tempo): browse trekking gear shops on Thamel Marg for North Face, Mammut, and Patagonia copies at $5–15; quality originals at certified gear shops from $30",
            "19:00 — Dinner in Thamel: a full dal bhat set (lentil soup, rice, curried vegetables, pickle, papad) at a local restaurant costs $3–4 and comes with unlimited refills — the national dish and the best calorie-per-dollar meal in Nepal",
          ],
          cost: "$18–25 (entry fees, meals, local transport)",
        },
        {
          day: "Day 2",
          title: "Swayambhunath & Kathmandu Durbar Square",
          items: [
            "07:30 — Swayambhunath Monkey Temple at sunrise (entry $3): climb 365 steps to the hilltop stupa where resident rhesus monkeys roam freely; the all-seeing Buddha eyes painted on the four sides of the tower face the four cardinal directions across the valley",
            "10:00 — Kathmandu Durbar Square (entry $15): the medieval palace complex with Kumari Chowk (residence of the living goddess), the 17th-century Kasthamandap building, and intricately carved wooden temples that predate the Mughal era",
            "13:00 — Dal bhat at Thakali Kitchen near New Road ($3): the best budget thakali set in the old city; queue with office workers and students at this no-frills canteen",
            "15:30 — Walk the old bazaars of Ason and Indrachowk: brass idol shops, spice merchants, and Newari jewellery vendors line streets unchanged since the 14th century",
            "18:30 — Rooftop sunset drinks at a Thamel guesthouse terrace ($1–2 per Nepali beer Everest or Gorkha) with Himalayan silhouette views on clear days",
          ],
          cost: "$20–28 (entry fees, meals, transport)",
        },
        {
          day: "Day 3",
          title: "Patan Durbar Square & Bhaktapur",
          items: [
            "09:00 — Taxi to Patan ($3) for Patan Durbar Square (entry $10): the finest collection of Newari architecture in the valley with the 17th-century Krishna Mandir temple built entirely of stone, the royal palace courtyards, and the Patan Museum of Hindu and Buddhist art",
            "12:00 — Lunch in Patan at Cafe Swotha adjacent to the Durbar Square: momos (steamed dumplings with beef or vegetable filling) for $2.50, one of the best budget lunch spots in the valley",
            "14:00 — Shared bus or taxi to Bhaktapur ($1.50): medieval city with its own Durbar Square (entry $15) featuring the 55-window palace, the Golden Gate, and the Nyatapola pagoda rising 5 tiers above the central square",
            "17:00 — Juju dhau (king curd) in Bhaktapur from a clay pot vendor near Taumadhi Square ($0.80): the richest, thickest curd in Nepal, a Bhaktapur speciality for centuries",
            "19:00 — Return to Kathmandu by local bus ($0.50) and dinner at a Thamel rooftop restaurant: a full Nepali set with local raksi (millet spirit) for $5",
          ],
          cost: "$25–35 (entry fees, meals, transport)",
        },
        {
          day: "Day 4",
          title: "Nagarkot Sunrise & Departure",
          items: [
            "05:00 — Pre-arranged sunrise jeep to Nagarkot hill station ($15 round trip shared): on clear October-November days the Himalayan panorama from Nagarkot includes Everest, Langtang, and the Annapurna range stretching across the horizon",
            "08:30 — Breakfast at Nagarkot hilltop cafes: Tibetan bread with honey and black tea for $2; many budget guesthouses serve early breakfasts for pre-dawn arrivals",
            "11:00 — Return to Kathmandu and visit the Garden of Dreams near Thamel ($3): a restored Edwardian pleasure garden in the middle of the city, perfect for a quiet final morning",
            "13:00 — Last momo lunch at a Thamel street stall ($1.50 for 8 fried momos with chilli sauce) before checkout and taxi to Tribhuvan Airport ($5 from Thamel)",
          ],
          cost: "$22–30 (Nagarkot trip, meals, airport taxi)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$80–130/day",
      days: [
        {
          day: "Day 1",
          title: "Pashupatinath, Boudhanath & Thamel",
          items: [
            "07:00 — Pre-arranged hotel taxi to Pashupatinath Temple at dawn ($8): a knowledgeable local guide ($20–30 for 2 hours) transforms the ghat experience, explaining Shaivite rituals, the significance of each lingam shrine, and the caste-based cremation zones along the Bagmati",
            "10:00 — Boudhanath Stupa with a Tibetan Buddhism guide ($25): learn about the symbolism of the mandala base, the 13-tier spire representing the stages of enlightenment, and visit a monastery above the stupa for a private butter-lamp offering ceremony",
            "13:00 — Lunch at OR2K restaurant in Thamel ($8–12): Middle Eastern and Nepali fusion on a cushioned rooftop terrace, one of Kathmandu's longest-running expat favourites",
            "16:00 — Thamel trekking gear shopping at authorised dealers: genuine Arc'teryx, Black Diamond, and Osprey gear for the same price as Western retail; stock up for any planned hike",
            "20:00 — Dinner at Krishnarpan restaurant at Dwarika's Hotel ($30 set menu): a 7-course Nepali royal banquet in a heritage setting, one of the finest dining experiences in the Himalayan region",
          ],
          cost: "$80–100 (guides, meals, hotel)",
        },
        {
          day: "Day 2",
          title: "Swayambhunath, Durbar Square & Patan",
          items: [
            "08:00 — Swayambhunath with a local Newari guide ($20): understand the syncretic Hindu-Buddhist symbolism at every stupa, shrine, and image carved into the hilltop complex going back to the 5th century AD",
            "11:00 — Kathmandu Durbar Square deep tour: visit the Kumari Bahal to see the living goddess on her carved wooden balcony (audience times 9–11am), explore the Hanuman Dhoka palace museum ($3 extra)",
            "13:30 — Lunch at Thamel House restaurant ($12–15): heritage Newari cuisine in a restored courtyard house; try the choila (spiced grilled buffalo) and aloo tama (bamboo shoot curry)",
            "15:30 — Patan Durbar Square and Patan Museum ($5): the curated museum inside the royal palace has the finest collection of bronze Nepali and Tibetan deities in the world",
            "20:00 — Cooking class at a Thamel cooking school ($35): learn to make dal bhat, momo dumplings, and gundruk (fermented vegetable soup) over a 3-hour evening session",
          ],
          cost: "$90–115 (guides, museum, cooking class, meals)",
        },
        {
          day: "Day 3",
          title: "Bhaktapur & Changu Narayan",
          items: [
            "08:30 — Private taxi to Bhaktapur ($10): full morning in the medieval city with a local guide ($25) covering the 55-window palace, the Nyatapola Temple built in 1702, and the pottery square where Bhaktapur potters still fire traditional clay vessels",
            "13:00 — Lunch in Bhaktapur at a Newari restaurant: a full feast of bara (lentil pancakes), yomari (rice-flour sweet dumplings), and juju dhau for $8",
            "14:30 — Changu Narayan Temple ($3, a 30-min taxi from Bhaktapur): Nepal's oldest temple, dating to the 4th century; the stone sculptures in the courtyard include the finest examples of Licchavi-era Vishnu iconography anywhere",
            "17:30 — Return to Kathmandu: sunset rooftop drinks at Northfield Cafe or Sam's Bar in Thamel ($4–6 per drink)",
            "20:00 — Dinner at Yin Yang Restaurant ($15–20): Kathmandu's best pan-Asian restaurant with excellent sushi and a calm garden courtyard away from Thamel noise",
          ],
          cost: "$85–110 (private transport, guide, meals)",
        },
        {
          day: "Day 4",
          title: "Nagarkot Sunrise & Mountain Flight Option",
          items: [
            "05:00 — Hotel-arranged Nagarkot sunrise drive ($20 private taxi): the panorama at dawn reveals the full Himalayan arc from Dhaulagiri through Annapurna, Manaslu, Ganesh Himal, Langtang, and on clear days the summit pyramid of Everest 190 km away",
            "09:00 — Optional mountain flight from Kathmandu Airport ($179 with Buddha Air or Yeti Airlines): a 1-hour scenic flight that passes within 10 km of Everest and 8 other 8,000m peaks, with a window seat guaranteed for every passenger",
            "12:00 — Final lunch at a riverside garden restaurant in Bouddha area ($10–12): quiet, green, and far from the tourist rush",
            "14:00 — Last Thamel souvenir shopping: singing bowls ($15–40 for quality pieces), thangka paintings ($20–80), and pashmina scarves ($20–40 for genuine Chyangra grade) before checkout",
          ],
          cost: "$80–130 (Nagarkot, optional flight, meals, shopping)",
        },
      ],
    },
    {
      label: "\uD83D\uDC8E Luxury",
      sub: "$250–500/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at a Heritage Hotel & Private Temple Tour",
          items: [
            "12:00 — Private airport transfer to Dwarika's Hotel ($15): Kathmandu's most celebrated heritage property, built around rescued Newari wood-carved architecture from the 14th-19th centuries; rooms are individually designed around authentic carved windows, doors, and struts from medieval buildings",
            "15:00 — Private cultural expert tour of Pashupatinath ($80 for 3 hours): a leading Shaivite scholar or senior museum curator provides exclusive access to inner temple precincts unavailable to general visitors, explaining the 5th-century origins of the site",
            "18:30 — Private rooftop sunset experience at a heritage haveli overlooking Kathmandu Valley: arranged by hotel concierge with canapés and local wine ($50 per person)",
            "20:30 — Krishnarpan royal banquet at Dwarika's Hotel ($45 set menu, 22 courses): Nepal's premier dining experience presenting dishes from all 75 districts, served by staff in traditional Newari dress in a torchlit courtyard",
          ],
          cost: "$300–400 (heritage hotel, private guide, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Helicopter to Everest Base Camp",
          items: [
            "06:00 — Private helicopter to Everest Base Camp and Kala Patthar (5,545m) with sunrise landing ($950–1,200 per helicopter, fits 4–5 people): the most dramatic morning activity on earth; land above the clouds with Everest's south face filling the horizon",
            "10:00 — Return to Kathmandu; rest and acclimatise at the hotel spa (altitude wellness treatment, $80–120): Dwarika's Spa offers Ayurvedic treatments designed for post-high-altitude recovery",
            "14:00 — Private Patan Durbar Square tour with a master craftsman: a Patan metalsmith demonstrates lost-wax bronze casting, the medieval technique used to create the ritual statues now in museums worldwide ($60 for a 2-hour private session)",
            "20:00 — Dinner at Bhojan Griha ($35 per person): a 250-year-old mansion with classical Nepali music, traditional Newari cuisine across 10 courses, and oil-lamp ambiance that makes it one of Asia's most atmospheric dining experiences",
          ],
          cost: "$450–600 (helicopter, spa, private tour, dinner)",
        },
        {
          day: "Day 3",
          title: "Bhaktapur Private Access & Valley Paragliding",
          items: [
            "08:00 — Private car to Bhaktapur for early-morning exclusive temple access arranged through the Bhaktapur municipality ($100 donation opens areas before general opening): sunrise at the Nyatapola and 55-Window Palace before crowds arrive at 9am is extraordinarily peaceful",
            "11:00 — Paragliding over the Kathmandu Valley from Nagarkot ridge ($120 tandem): fly above the medieval city grid with Himalayan views; operates year-round in clear weather",
            "13:30 — Private lunch at Changu Narayan hilltop with valley views: hotel-arranged picnic in the temple gardens with local delicacies and Himalayan mineral water ($40)",
            "17:00 — Traditional thangka painting session with a master artist from Boudhanath ($75 for 2 hours): learn the precise grid-construction method used to paint Tibetan deities; your work mounted and ready to take home",
            "21:00 — Cocktails and live Newari music at the Hyatt Regency rooftop ($15 per drink): the best hotel bar view in Kathmandu, with the Bouddhanath neighbourhood spread below",
          ],
          cost: "$400–550 (private access, paragliding, thangka class)",
        },
        {
          day: "Day 4",
          title: "Private Mountain Flight & Departure",
          items: [
            "06:00 — Private charter mountain flight with guaranteed window seats (Buddha Air private charter $600–800 for 8-seat aircraft): a personal Himalayan panorama tour at sunrise with a pilot commentary on each peak",
            "09:00 — Hotel checkout and final spa treatment: Tibetan hot stone massage at Dwarika's Spa ($90, 90 minutes) to prepare for a long-haul flight",
            "11:30 — Farewell dal bhat at the hotel's Malla restaurant: even at a luxury property, Nepal's national dish is the way to close the journey; the version at Dwarika's uses heirloom rice and single-origin spices from the hills above the valley",
            "14:00 — Private chauffeur to Tribhuvan International Airport ($20): hotel concierge fast-tracks departures with VIP baggage assistance and airport lounge access through Himalayan Airlines",
          ],
          cost: "$700–900 (private charter, spa, hotel checkout)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "\uD83D\uDCB0 Budget",
      accommodation: "$8–15 (guesthouse or hostel in Thamel)",
      food: "$6–10 (dal bhat, momos, street food)",
      transport: "$2–5 (shared tempo, local bus)",
      activities: "$10–15 (stupa and Durbar entry fees)",
      total: "$25–40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$40–70 (3-star hotel in Thamel or Bouddha)",
      food: "$20–35 (restaurants and one cooking class)",
      transport: "$10–20 (private taxi and guided day trips)",
      activities: "$25–40 (guided tours, Patan Museum)",
      total: "$80–130/day",
    },
    {
      tier: "\uD83D\uDC8E Luxury",
      accommodation: "$180–350 (Dwarika's or Hyatt)",
      food: "$60–120 (heritage restaurants and set menus)",
      transport: "$30–80 (private car and airport transfers)",
      activities: "$150–400 (helicopter, paragliding, private guides)",
      total: "$250–500/day",
    },
    {
      tier: "\uD83D\uDE4F Budget Plus",
      accommodation: "$20–35 (boutique guesthouse)",
      food: "$10–18 (mix of local and tourist restaurants)",
      transport: "$5–10 (metered taxi)",
      activities: "$15–25 (self-guided entry fees)",
      total: "$45–70/day",
    },
    {
      tier: "\uD83C\uDFD4\uFE0F Trekker",
      accommodation: "$12–25 (trekking lodge standard)",
      food: "$8–15 (dal bhat and trekking sets)",
      transport: "$15–30 (airport to trailhead)",
      activities: "$20–50 (TIMS card, national park permit)",
      total: "$50–90/day",
    },
  ],
  mistakes: [
    {
      icon: "\uD83D\uDDD3\uFE0F",
      title: "Visiting in June-August (Monsoon Season)",
      desc: "Kathmandu receives 80% of its annual rainfall June through August. Mountain flights are cancelled most days, trekking trails become leeches-infested mud, and the Himalayan views that define the destination are hidden behind clouds for weeks at a time. Stick to October-November or March-April.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\uD83D\uDCB8",
      title: "Changing Money at the Airport",
      desc: "The airport exchange desks offer rates 8–12% worse than Thamel money changers. Take just $20–30 at the airport for a taxi, then change money in bulk at licensed exchange houses on Thamel Marg where rates are competitive and receipts are provided.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "\uD83E\uDDF3",
      title: "Buying Trekking Gear Without Comparing Quality",
      desc: "Thamel is flooded with fake branded gear alongside genuine Nepali outdoor manufacturers like Sherpa Adventures Gear. Learn to check zippers (YKK is real), seam taping, and stitching before buying. Budget $30–50 for quality local-brand gear rather than $8 for a logo-only fake.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "\uD83D\uDEE3\uFE0F",
      title: "Skipping Bhaktapur to Save the Entry Fee",
      desc: "At $15, Bhaktapur's entry fee is the most complained-about charge in the valley, but it funds a medieval city that has been preserved better than anywhere else in Asia. The Nyatapola Temple, the pottery square, and juju dhau alone justify the cost. Do not skip it.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\uD83C\uDF7D\uFE0F",
      title: "Eating Only in Thamel Tourist Restaurants",
      desc: "Thamel's tourist restaurants serve passable but sanitised versions of Nepali food at 3x the local price. For authentic dal bhat that refills automatically, Newari choila and bara, and local raksi, walk 10 minutes to Asan Chowk or the old bazaar area where locals actually eat.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "\uD83C\uDF04",
      title: "Time Entry Fees for Combined UNESCO Sites",
      desc: "The Kathmandu Valley multi-site pass ($35) covers all seven UNESCO sites for a week and costs less than buying Kathmandu Durbar Square, Patan, and Bhaktapur separately. Buy it at the first entry booth you reach. Book guided tours in advance at https://www.getyourguide.com/s/?q=Kathmandu&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "\uD83C\uDFD4\uFE0F",
      title: "Book Mountain Flights or Helicopter for Early Morning",
      desc: "Himalayan mountain views are clearest before 9am year-round, particularly in October and November when post-monsoon skies are crystal clear. By 11am clouds build around the peaks daily. Mountain flights depart 6am-8am — book the earliest slot available.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "\uD83E\uDD5F",
      title: "Learn the Momo Hierarchy",
      desc: "Momos in Kathmandu range from $1.50 street stall steamed dumplings to $8 restaurant fusion versions. The best momos are often found at tiny neighbourhood shops in Patan and Bhaktapur with no English signage. Look for a steamer in the window and a queue of locals.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "\uD83D\uDEAB",
      title: "Respect Temple Dress Codes Without Exception",
      desc: "Pashupatinath requires shoulders and knees covered for all visitors, regardless of passport or religion. Non-Hindus are restricted to the outer precincts — do not attempt to enter the inner sanctum. Swayambhunath and Boudhanath are more relaxed but remove shoes before entering any shrine building.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Kathmandu safe for solo travellers including women?",
      a: "Kathmandu is generally safe for solo travellers including solo women. Thamel is well-lit and patrolled, most guesthouses have 24-hour security, and the Nepali people are extraordinarily friendly toward visitors. Take standard urban precautions: use licensed taxis (apps Pathao and InDrive work well), avoid poorly lit back alleys after midnight, and keep a photocopy of your passport rather than the original when out exploring.",
    },
    {
      q: "Do I need altitude sickness medication for Kathmandu?",
      a: "Kathmandu city sits at 1,400m above sea level, which is well below the altitude where acclimatisation becomes necessary (typically above 3,000m). Most visitors feel no symptoms in the city. If you plan to take a mountain flight or helicopter to Everest Base Camp (5,364m), your time at altitude is brief (under 30 minutes at high elevation) and the risk is low. Consult a doctor before any actual trekking above 3,500m.",
    },
    {
      q: "What is the best way to get from Kathmandu Airport to Thamel?",
      a: "Official metered taxis from the airport to Thamel cost NPR 700–900 (approximately $5–7). Use the prepaid taxi counter inside the arrivals hall to avoid negotiation. The journey takes 20–40 minutes depending on traffic. Avoid touts who approach in the arrivals hall before you reach the official counter. Ride-hailing apps Pathao and InDrive are available once you have a local SIM.",
    },
    {
      q: "When is the best time to visit Kathmandu for clear Himalayan views?",
      a: "October and November (post-monsoon) offer the clearest Himalayan skies with visibility extending to Everest on most days. The air is washed clean by months of rain and the temperature is warm but not hot (15-25 degrees Celsius in the valley). March and April are the second-best window before pre-monsoon haze builds. December through February is cold but clear, with the best mountain photography light of the year.",
    },
  ],
  combineWith: ["delhi-4-days", "pokhara-3-days", "varanasi-3-days"],
  relatedSlugs: ["delhi-4-days", "bangkok-4-days", "bali-7-days", "varanasi-3-days"],
  galleryQuery: "kathmandu nepal temples himalaya",
};

export const metadata: Metadata = {
  title: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Kathmandu itinerary covering Pashupatinath, Boudhanath, Swayambhunath, Durbar Squares, Himalayan views, dal bhat, and momos. Budget $25/day to luxury heritage hotels. Full visa info for Indian and Western passports.",
  keywords: [
    "Kathmandu itinerary",
    "Kathmandu 4 days",
    "Kathmandu travel guide 2026",
    "Nepal budget travel",
    "Pashupatinath Temple",
    "Boudhanath Stupa",
    "Swayambhunath Monkey Temple",
    "Kathmandu visa Indian passport",
  ],
  openGraph: {
    title: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Pashupatinath ghats, Boudhanath Stupa, Himalayan sunrises, dal bhat, and momo dumplings — Kathmandu in 4 days from $25/day to luxury heritage hotels.",
    type: "article",
    url: `${siteUrl}/blog/kathmandu-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathmandu in 4 Days: Complete 2026 Itinerary",
    description:
      "Budget to luxury guide for 4 days in Kathmandu, Nepal — Pashupatinath, Boudhanath, Himalayan views, momos, and dal bhat.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/kathmandu-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Kathmandu in 4 Days",
          item: `${siteUrl}/blog/kathmandu-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kathmandu",
      description:
        "Kathmandu, Nepal — gateway to the Himalayas, home to seven UNESCO World Heritage Sites, and the spiritual capital of the Hindu and Buddhist world.",
      geo: { "@type": "GeoCoordinates", latitude: 27.7172, longitude: 85.3240 },
    },
  ],
};

export default function KathmanduPage() {
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
