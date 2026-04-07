import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Nusa Penida",
  country: "Indonesia",
  countryFlag: "🇮🇩",
  slug: "nusa-penida-3-days",
  heroQuery: "nusa penida kelingking beach bali indonesia cliff ocean",
  heroAlt: "Kelingking Beach Nusa Penida Indonesia dramatic T-Rex cliff above turquoise ocean",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro: "Nusa Penida is Bali's raw, unfinished cousin — an island of vertiginous cliff faces, turquoise water so clear it looks artificial, manta rays drifting below your snorkel in the early morning, and a T-Rex shaped promontory above a beach that has become the most-photographed single viewpoint in all of Indonesia. Three days on the island covers the West's Kelingking and Broken Beach, the East's Diamond Beach and Atuh, the North's blue-staircase waterfall, and a manta ray encounter that no oceanarium can replicate. Come before the roads improve any further.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$30",
    bestMonths: "Apr–Oct (dry)",
    airport: "DPS (Bali/Denpasar), then speedboat 45 min",
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
        ["Visa on Arrival", "Indian passport holders can obtain a Visa on Arrival (VoA) at Ngurah Rai Airport (DPS) in Bali. Cost: IDR 500,000 (~$30 USD). Valid for 30 days, extendable once for another 30 days at the immigration office. No advance application required — simply queue at the VoA counter after landing."],
        ["B211A e-Visa Option", "The B211A tourist e-visa can be applied for online at molina.imigrasi.go.id before travel. Cost: ~$35 USD. Processing: 3–5 business days. Grants 60-day stay and is extendable. Recommended if you want to avoid the VoA queue at DPS, which can be 30–90 minutes on busy days."],
        ["Nusa Penida Access", "Nusa Penida is part of the Klungkung Regency of Bali — your Bali VoA covers the island. You take a speedboat from Sanur Beach in Bali (45 minutes, $15–20 USD for the crossing) and no additional visa or entry permit is required for the island itself."],
        ["Key Documents", "Passport valid 6 months beyond your return date, return ticket, hotel/accommodation booking, and USD cash or card for the VoA fee at DPS. Some VoA counters now accept card — but carry cash as backup. Immigration queues at DPS move quickly with e-visa."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "USA, UK, EU, Australian, and most Western passport holders can get a Visa on Arrival at DPS Bali. Cost: IDR 500,000 (~$30 USD). Valid 30 days, one-time extension available. The VoA queue at DPS is separate from immigration — clear VoA first, then join the main immigration line."],
        ["Visa-Free (Select Countries)", "Some nationalities receive 30-day visa-free entry without needing a VoA — check the latest Indonesian immigration list as this changes. Even if your country is technically visa-free, having USD cash for the VoA is useful insurance at the airport."],
        ["No Extra Permit for Nusa Penida", "Nusa Penida, Nusa Lembongan, and Nusa Ceningan are all covered by your Bali entry stamp or VoA. The speedboat from Sanur to Nusa Penida is a domestic crossing. No additional registration or entry fee is charged on the island (some private beaches may charge a small conservation fee of IDR 5,000–15,000)."],
        ["Getting to Sanur", "Sanur harbour is 30–40 minutes from DPS airport by taxi (IDR 100,000–150,000 with Grab or Blue Bird metered taxi). Several speedboat operators run from Sanur to Nusa Penida pier (Toyapakeh or Banjar Nyuh pier). Departure times: roughly 7am–5pm. Book tickets the day before through your accommodation or operators like Rocky Fast Cruise, Maruti Fast Boat, or Semaya One."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$30–55/day",
      days: [
        {
          day: "Day 1",
          title: "West Side: Kelingking, Angel's Billabong & Broken Beach",
          items: [
            "6:00am — Speedboat from Sanur, Bali (depart 7am, arrive ~7:45am at Nusa Penida's Toyapakeh pier). Rent a scooter at the pier ($5–8/day including fuel for the day). This is the most economical and most flexible way to explore — but the roads are rough in places, so drive slowly and avoid riding after dark.",
            "8:30am — Kelingking Beach viewpoint (free). This is the most-photographed spot in Indonesia: a T-Rex shaped promontory of white limestone above a crescent of electric-blue water. The viewpoint is at the top. The hike down to the beach itself takes 30–45 minutes each way on a steep rope-assisted trail — fit, non-muddy conditions only. The beach at the bottom is usually deserted. Going down and back is worth it if you have the fitness and it hasn't rained in the past 24 hours.",
            "11:00am — Angel's Billabong (free, low tide only — check tide tables before going). A natural infinity pool carved into the clifftop rock by wave action, filled with clear turquoise water. At high tide the waves crash over the rim and the pool is inaccessible. At low tide it's one of the most beautiful natural swimming spots in Southeast Asia. Check current tide times on TideForecast.com the night before.",
            "12:30pm — Broken Beach (Pasih Uwug, free) — a natural stone arch through which the sea surges into a circular cove. Not swimmable but one of the most dramatic coastal formations in Bali. 5 minutes walk from Angel's Billabong. Warungs (small food stalls) at the carpark serve nasi goreng (fried rice, IDR 25,000–35,000) and cold drinks.",
            "3:30pm — Crystal Bay: a sheltered bay on the island's west coast with calm water ideal for snorkeling. Turtle sightings are common in the bay. Snorkel hire: IDR 30,000–50,000. The sunset over Crystal Bay is one of Nusa Penida's best — the Agung volcano on Bali's mainland often silhouettes against the orange sky.",
            "6:00pm — Return to accommodation in the Toyapakeh or Crystal Bay area. Budget guesthouses and homestays: $10–25/night including breakfast.",
          ],
          cost: "$30–45 total",
        },
        {
          day: "Day 2",
          title: "East Side: Diamond Beach, Atuh & Manta Rays",
          items: [
            "6:30am — Early departure by scooter to Manta Point on the island's southwest coast (30–40 minutes from most accommodation). Arrange a manta ray snorkeling boat tour through your guesthouse the evening before ($20–30 per person including boat and basic snorkel gear). Manta rays congregate year-round at this cleaning station; early morning has the clearest water and the highest manta concentration.",
            "7:00am — Manta Point snorkeling: mantas here are reef mantas (wingspan 2–4 metres), not the larger oceanic species. They circle the cleaning station repeatedly, completely undisturbed by snorkelers as long as you do not touch or chase them. Ethical guidelines: no touching, no blocking their path, no flash photography. The experience of hovering above a 3-metre manta ray in open water is one of the most affecting wildlife encounters available anywhere in Asia.",
            "9:30am — Return to shore. Drive east to Diamond Beach (Pantai Diamond) viewpoint and descent. The cliff viewpoint above Diamond Beach is one of Indonesia's most dramatic — a horseshoe bay with diamond-white sand, impossibly blue water, and jagged limestone cliffs on three sides. The descent to the beach takes 15–20 minutes on steep stone steps with metal handrails.",
            "12:00pm — Atuh Beach (nearby, 10 minutes by scooter) — similar dramatic limestone cliff setting with warung food at the beach ($4–7 for grilled fish with rice).",
            "2:00pm — Tree House viewpoint (Rumah Pohon): a famous Instagram location — a literally tree-mounted wooden platform above the eastern cliffs with a swing over the ocean. Cost: IDR 20,000–50,000 depending on facilities open. The walk to it along the clifftop offers the best panoramic views of the east coast.",
            "5:00pm — Return to accommodation. Evening: eat at a local warung ($5–10 for a full meal with seafood, rice, and vegetables). Nusa Penida has minimal nightlife — most visitors sleep by 9pm and wake for sunrise activities.",
          ],
          cost: "$35–50 total",
        },
        {
          day: "Day 3",
          title: "North Side Waterfalls & Return to Bali",
          items: [
            "6:30am — Peguyangan Waterfall: reached by descending a steep blue-painted staircase that cuts into the cliff face above the ocean (free, 45–60 minute round trip). At the bottom, a small Hindu water temple sits on a platform above the waves where fresh water cascades from the cliff. One of Nusa Penida's most spiritually atmospheric locations. The staircase is challenging but not technical; sturdy footwear recommended.",
            "9:00am — Guyangan Waterfall (north coast, free): a different waterfall experience — a cascading spring flowing through a temple complex set into the clifftop. Balinese Hindu ceremonies are frequently held here; dress modestly and be respectful if a ceremony is in progress (sarong and sash required — available to borrow at the entrance).",
            "11:00am — Final scooter ride along the north coast road: this section of the island has the least tourist infrastructure and the most dramatic coastal views. Pull over wherever you can see the ocean — the raw limestone cliffs dropping into blue-green water is Nusa Penida at its least curated.",
            "1:00pm — Return scooter to the pier. Final warung lunch at Toyapakeh: fish soup (IDR 30,000), grilled snapper (IDR 50,000–80,000), and coconut water (IDR 15,000) at the pier-side stalls.",
            "2:30pm — Speedboat back to Sanur, Bali (departs roughly on the hour; buy return ticket from same operator or any pier booth, $15–20). Arrive Sanur ~3:15pm.",
            "Evening: back in Bali. The contrast between Nusa Penida's raw silence and Bali's infrastructure is immediate and striking. Have a final Bintang beer on Seminyak beach and reflect on three days that most travellers cite as the highlight of their Bali trip.",
          ],
          cost: "$25–40 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$80–160/day",
      days: [
        {
          day: "Day 1",
          title: "West Side Private Driver & Crystal Bay Snorkel",
          items: [
            "7:00am — Speedboat from Sanur (book a confirmed time-slot ticket in advance through Rocky Fast Cruise or Semaya One, $18–25). Meet your pre-arranged local driver at the pier (Pak Wayan or similar through your guesthouse; $25–40/day for a full-island driver who knows the roads, the tide schedules, and the crowd patterns).",
            "9:00am — Kelingking Beach: your driver will know the optimal arrival time. If arriving before 9:30am, the viewpoint is often near-empty. They'll also advise on whether the hike to the beach is safe based on overnight weather.",
            "11:30am — Angel's Billabong (timed to low tide — your driver checks this automatically) + Broken Beach + the less-visited Suwehan Beach viewpoint to the south.",
            "1:30pm — Lunch at a slightly better warung in the inland village of Ped or near Toyapakeh: babi guling (Balinese suckling pig, IDR 50,000–80,000) if available, or a proper nasi campur spread.",
            "3:30pm — Crystal Bay afternoon snorkeling: hire a private snorkeling guide through the bay's dive operators ($30–50 for 90-minute guided snorkel with mola mola season information). Mola mola (oceanic sunfish) pass through Crystal Bay July–October — one of the most extraordinary marine encounters in Southeast Asia.",
            "6:30pm — Check in to a mid-range villa or bungalow with pool near Crystal Bay or Toyapakeh ($50–100/night). Watch the sunset from your private terrace with Agung volcano on the horizon.",
          ],
          cost: "$80–120 total",
        },
        {
          day: "Day 2",
          title: "Manta Point Dawn & East Coast Full Exploration",
          items: [
            "5:30am — Pre-dawn departure for Manta Point. A private manta snorkel charter ($50–80 for a private boat rather than shared) departs before the tour boat convoys arrive. At 6am the water is often glassily calm and the mantas are most active.",
            "8:00am — Return to shore. Driver takes you to breakfast at a café in the island's interior — the view over Nusa Penida's agricultural interior (coconut groves, rice terraces, small temples) is unexpectedly peaceful.",
            "10:00am — Diamond Beach: descend the cliff steps to the beach itself (not just the viewpoint). The water is not suitable for swimming due to currents, but the beach itself — fine white sand flanked by vertical limestone walls — is one of Indonesia's most beautiful.",
            "12:00pm — Atuh Beach for swimming and a warung lunch with fresh grilled seafood ($10–18/person).",
            "2:30pm — Tree House ($5–8 entry depending on configuration), then the less-visited Seganing Waterfall on the northeast coast — a 200-step descent to a waterfall that flows directly onto a rocky beach. Very few visitors reach it. Allow 2 hours round trip.",
            "6:00pm — Return to accommodation via the sunset point at the east coast ridge — the Lombok and Sumbawa island chain is visible on the eastern horizon at sunset.",
          ],
          cost: "$ 90–140 total",
        },
        {
          day: "Day 3",
          title: "Peguyangan at Sunrise & Return in Style",
          items: [
            "5:00am — Departure for Peguyangan Waterfall blue staircase before dawn. Arriving at the cliff at first light (6am), with the staircase still empty and the ocean glowing orange below, is one of Nusa Penida's most extraordinary experiences. Bring a headlamp for the descent.",
            "8:00am — Guyangan Waterfall temple complex + a visit to Pura Dalem Penataran Ped (the island's most important Hindu temple, near Toyapakeh) — the carved demons and nagas guarding the entrance are masterworks of Balinese stone carving.",
            "11:00am — North coast drive to the Banah Cliff viewpoint (less visited) — a clifftop temple perched above a 200m sheer drop to the ocean below. The scale of the cliffs here is Nusa Penida's most vertigo-inducing.",
            "1:00pm — Final lunch at Warung Bogasari near Toyapakeh pier: fresh tuna with sambal matah (Balinese raw shallot-chili relish, IDR 60,000–90,000).",
            "2:30pm — Fast boat return to Sanur. Evening in Bali: if returning to Seminyak, treat yourself to sunset cocktails at Ku De Ta or Potato Head Beach Club ($15–25/cocktail but the Bali sunset from a deck chair with a drink in hand is genuinely earned after three days on rough roads).",
          ],
          cost: "$70–110 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$250–600/day",
      days: [
        {
          day: "Day 1",
          title: "Private Charter & West Coast at Dawn",
          items: [
            "7:00am — Private speedboat charter from Sanur ($150–250 one-way for a private boat, 8-person capacity; your group has the boat). Arrive at Nusa Penida ahead of all public boats.",
            "Check in to Semabu Hills Hotel or the Adiwana Warnakali Resort ($200–450/night for sea-view villas with infinity pools overlooking the Lombok Strait). These properties sit on the island's ridgeline with views that make every other accommodation feel like a compromise.",
            "10:00am — Private driver and guide ($60–100/day for an experienced local guide who manages tidal timing, crowd windows, and island history). Kelingking at 10am after the morning tour boats have moved on — your guide ensures optimal timing.",
            "1:00pm — Lunch catered at a clifftop private setting — some resort concierges will arrange a picnic lunch with local ingredients at a quiet viewpoint ($40–80/person catered).",
            "3:30pm — Angel's Billabong and Broken Beach in the golden afternoon light, followed by a private snorkeling session in Crystal Bay with a marine biologist guide who explains the reef ecology ($80–120 for 2 hours).",
            "7:00pm — Dinner at your resort's restaurant with a wine list: the Adiwana Warnakali's chef uses island-sourced fish and Balinese ingredients for a menu that justifies the location. $60–120/person for dinner.",
          ],
          cost: "$300–500 total (excl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Private Manta Dive + East Coast Photography",
          items: [
            "5:30am — Private manta diving or snorkeling charter with a marine conservation guide ($120–200 for a private certified boat with a marine biologist diver). Departing before any other boat, you have Manta Point entirely to yourself at dawn. The behaviour of the mantas without any other swimmers in the water is completely different — slower, more curious, willing to approach.",
            "9:00am — Return to resort for breakfast. Depart at 10am for east coast with private driver.",
            "11:00am — Diamond Beach: private photography guide ($80–150 for 2 hours) for the clifftop and beach descent, with equipment and composition guidance. The light on Diamond Beach at 11am is optimal for photography.",
            "1:30pm — Atuh Beach: private boat access to the beach from the water side ($50–80 for a local fishing boat), which gives an entirely different perspective on the limestone amphitheatre.",
            "4:00pm — Tree House and Seganing Waterfall with your guide. Very few visitors reach Seganing — at this pace and with a private arrangement, you'll have it completely to yourself.",
            "7:00pm — Return to resort. Balinese healing massage at your villa ($60–100 for 90-minute treatment using island-sourced coconut oil and traditional Balinese techniques).",
          ],
          cost: "$350–550 total (excl. accommodation)",
        },
        {
          day: "Day 3",
          title: "Sunrise Waterfall & Private Return",
          items: [
            "5:00am — Private pre-dawn excursion to Peguyangan blue staircase. Your guide carries extra lights and knows the safest descent route. Arriving at the base at sunrise — ocean completely alone below you, the sound of the waterfall and the waves — is the most serene experience Nusa Penida offers.",
            "8:00am — Guyangan Waterfall temple visit with a Balinese cultural guide who explains the ritual significance of the water source and the temple's role in island spiritual life.",
            "10:00am — North coast cliff drive to Banah and the rarely-visited Saren Cliff viewpoint, followed by a boat trip along the cliff base (local fishing boat, $30–50) to see the cave systems and sea arches from below.",
            "1:00pm — Final lunch at your resort or a recommended local seafood restaurant in the interior.",
            "3:00pm — Private speedboat back to Bali's Sanur. Transfer directly to your Bali resort by private car ($25–50). If departing Bali that evening, the airport transfer from Sanur to DPS is 30–40 minutes by Grab or private car.",
            "Evening in Bali (if staying): rooftop dinner at Sarong Restaurant in Seminyak ($80–120/person) or a beach club sunset experience to close out the Indonesia chapter properly.",
          ],
          cost: "$250–450 total (excl. accommodation)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–25",
      food: "$8–15",
      transport: "$5–10",
      activities: "$5–15",
      total: "$28–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–100",
      food: "$20–40",
      transport: "$25–40",
      activities: "$20–50",
      total: "$115–230/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–450",
      food: "$60–120",
      transport: "$60–100",
      activities: "$80–200",
      total: "$400–870/day",
    },
  ],
  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting the East Side Roads in Rainy Season",
      desc: "Nusa Penida's roads are unpaved in sections and become genuinely dangerous after heavy rain, particularly on the east coast routes to Diamond Beach, Atuh, and Seganing Waterfall. Wet season (November–March) turns steep clay slopes into slides. Multiple scooter accidents happen every month during this period, including fatalities. Visit April–October. If you're visiting outside the dry season, hire a driver rather than renting a scooter — a local driver will refuse to take routes that are unsafe.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛰️",
      title: "Going to Kelingking Without the Fitness for the Hike",
      desc: "The Kelingking Beach descent is 300 metres of steep rope-and-stake trail dropping down a limestone cliff face. The ascent back up is harder and takes 45–60 minutes at a moderate pace. In hot weather (which is every day on Nusa Penida), it is a serious physical effort. The beach at the bottom is worth it — but if you have knee issues, vertigo on exposed trails, or haven't done significant exercise recently, stay at the top viewpoint. The view from the top is itself extraordinary. Don't put yourself in a position where you need a helicopter rescue from a cliff trail.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💸",
      title: "Forgetting to Bring Enough Cash to the Island",
      desc: "Nusa Penida has very limited ATM infrastructure. There are a few ATMs in Toyapakeh and near the main pier, but they run out of cash on busy weekends and charge high foreign transaction fees. The island operates almost entirely on cash — guesthouses, warungs, scooter rentals, boat tours, viewpoint entry fees, and souvenir vendors all require IDR cash. Withdraw IDR 800,000–1,500,000 per day from an ATM in Bali (Sanur has several near the harbour) before boarding your speedboat. Don't count on getting cash on the island.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Kelingking at 6am — The Only People There",
      desc: "Kelingking Beach viewpoint gets up to 2,000 visitors per day in peak season. At 6am, you may be one of five people there. The first speedboat from Sanur docks at 7:45am and the viewpoint starts filling by 9am. Staying overnight on the island (even one night) gives you access to this window that day-trippers from Bali can never reach. The golden morning light from the east illuminates the T-Rex cliff face in a way that afternoon sun — which hits from behind — cannot. Every Instagram photo you've seen of Kelingking was probably taken between 6am and 8am.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐟",
      title: "Manta Ray Snorkeling at 7am for the Best Encounter",
      desc: "Manta Point's manta rays are present year-round but the window between 6:30am and 9am produces the most consistent sightings and the clearest water. After 9am, the tour boats arrive in waves and the mantas, while still present, become more erratic and harder to observe. Book an early private or shared boat for 6:30am departure from the pier nearest Manta Point. Bring a wetsuit top or rash guard — the water is cooler than you expect at dawn. Bring a waterproof case for your phone; underwater manta footage is non-negotiable.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🛵",
      title: "Hire a Local Driver for $25–40 Instead of a Scooter",
      desc: "Nusa Penida's roads range from reasonable to actively dangerous, and none of them are signposted in English. A local driver ($25–40/day for a full 8–10 hour day) knows the road conditions in real time, the best tide windows for Angel's Billabong, the parking areas that avoid the tour group crush at Kelingking, and the small warungs that locals actually eat at. The saving on potential scooter medical bills, repairs, or insurance claims makes this not just a comfort upgrade but a rational economic decision.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "How do you get to Nusa Penida from Bali?",
      a: "Take a speedboat from Sanur Beach on Bali's east coast. Multiple operators run boats between 7am and 5pm daily — the crossing takes 30–45 minutes depending on the boat. Ticket cost: $15–20 USD one way. Recommended operators: Rocky Fast Cruise, Semaya One, Maruti Express, and Mola Mola Fast Boat. Book tickets the day before through your Bali accommodation or directly at the Sanur pier. Do not use unlicensed 'very cheap' boats — there have been accidents. The return boats from Nusa Penida to Sanur depart roughly hourly from Toyapakeh pier on the island's north side.",
    },
    {
      q: "Is Nusa Penida worth visiting vs staying in Bali?",
      a: "Nusa Penida offers experiences that Bali's main island simply cannot: Kelingking Beach's cliff drama, accessible manta rays at Manta Point, Angel's Billabong's natural infinity pool, and Diamond Beach's limestone amphitheatre. These are genuinely unique. If you only have 5 days in Bali and have to choose, most experienced travellers recommend 2 nights on Nusa Penida over an additional 2 nights in Seminyak or Ubud. However, Nusa Penida's accommodation quality and road infrastructure lag significantly behind Bali proper — it's a raw adventure destination, not a resort holiday.",
    },
    {
      q: "When is manta ray season at Nusa Penida?",
      a: "Manta rays are present at Manta Point year-round — this is what makes Nusa Penida's manta encounter more reliable than most manta destinations globally. The mantas use the cleaning station at Manta Point consistently regardless of season. However, water visibility is best April–October (dry season) when the currents are cleaner. December–March can bring rougher seas, lower visibility, and the Kelingking hike becomes muddy. For optimal manta encounters: May, June, or September. Mola mola (oceanic sunfish) also pass through Crystal Bay July–October.",
    },
    {
      q: "What is the accommodation quality like on Nusa Penida?",
      a: "Nusa Penida's accommodation ranges from very basic guesthouses and homestays ($10–25/night) to genuinely beautiful cliff-top villas and boutique resorts ($150–450/night). The luxury tier — Semabu Hills, Adiwana Warnakali, Ohana's Nusa Penida — is excellent by any international standard, with infinity pools above the ocean and sea views that are truly extraordinary. The budget tier is functional but basic: squat toilets, cold water, no AC. The mid-range $50–100 tier is the sweet spot: private bathroom, AC, and often small pool. Book ahead for peak season (July–August and Christmas); availability on the island is limited.",
    },
  ],
  combineWith: ["bali-7-days", "lombok-3-days", "gili-islands-2-days"],
  relatedSlugs: ["bali-7-days", "lombok-3-days", "komodo-3-days", "ubud-3-days"],
  galleryQuery: "nusa penida bali indonesia kelingking cliff diamond beach manta ray ocean",
};

export const metadata: Metadata = {
  title: "Nusa Penida in 3 Days: Kelingking Beach, Manta Rays & Indonesia's Best Views (2026)",
  description: "Complete Nusa Penida 3-day guide: Kelingking Beach hike, manta ray snorkeling at Manta Point, Diamond Beach, Angel's Billabong, and how to get from Bali. Real costs, tips.",
  keywords: [
    "nusa penida itinerary 3 days",
    "nusa penida travel guide 2026",
    "kelingking beach hike",
    "manta ray snorkeling nusa penida",
    "diamond beach nusa penida",
    "angel's billabong nusa penida",
    "nusa penida from bali",
    "indonesia travel guide",
  ],
  openGraph: {
    title: "Nusa Penida in 3 Days: Kelingking, Manta Rays & Indonesia's Best Views (2026)",
    description: "Kelingking at 6am, manta rays at dawn, Diamond Beach from above and below — the complete Nusa Penida guide for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kelingking Beach Nusa Penida Bali Indonesia",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusa Penida in 3 Days (2026)",
    description: "Kelingking, manta rays, Diamond Beach — Indonesia's most dramatic island guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nusa-penida-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nusa Penida in 3 Days: Kelingking Beach, Manta Rays & Indonesia's Best Views (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      description:
        "Complete 3-day Nusa Penida itinerary covering Kelingking Beach, Angel's Billabong, Manta Point snorkeling, Diamond Beach, Atuh Beach, and Peguyangan Waterfall.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nusa Penida 3 Days",
          item: "https://www.incredibleitinerary.com/blog/nusa-penida-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nusa Penida, Indonesia",
      description:
        "An island off the southeastern coast of Bali — home to Indonesia's most photographed beach viewpoint, year-round manta ray encounters, dramatic limestone cliff formations, and some of the most pristine ocean scenery in Southeast Asia.",
      touristType: ["Adventure travellers", "Snorkeling and diving enthusiasts", "Photography travellers", "Wildlife watchers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.7278,
        longitude: 115.5444,
      },
    },
  ],
};

export default function NusaPenidaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
