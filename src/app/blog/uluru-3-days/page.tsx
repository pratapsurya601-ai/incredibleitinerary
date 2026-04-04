import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Uluru",
  country: "Australia",
  countryFlag: "🇦🇺",
  slug: "uluru-3-days",
  heroQuery: "uluru ayers rock australia outback red desert sunrise",
  heroAlt: "Uluru Ayers Rock glowing red at sunrise in the Australian outback red desert",
  category: "Australia & Pacific",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro: "Uluru rises 348 metres from the flat red plain of the Northern Territory — a single sandstone monolith that has been the spiritual centre of Anangu country for at least 60,000 years. No photograph prepares you for the scale. No description conveys the way the rock shifts colour through 40 shades of orange and red from dawn to dusk. Three days here is long enough to walk the base, experience Kata Tjuta's extraordinary gorges, lie beneath the most undiluted starfield in Australia, and understand why the Traditional Owners call this place Tjukurpa — the Law.",
  stats: {
    duration: "3 Days",
    budgetFrom: "A$120",
    bestMonths: "May–Sep (winter, 15–25°C)",
    airport: "AYQ (Ayers Rock/Connellan Airport)",
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
        ["Visitor Visa Required", "Indian passport holders require an Australian Visitor Visa (subclass 600). Fee: A$145. Apply online through ImmiAccount at immi.homeaffairs.gov.au. Processing typically takes 20–40 days but can extend to 8 weeks. Apply at least 6–8 weeks before departure, especially during peak application periods around Australian summer holidays."],
        ["Key Documents", "Valid passport (minimum 6 months beyond your return date), bank statements demonstrating sufficient funds, confirmed accommodation bookings at Ayers Rock Resort (there is only one resort in the park), return or onward flight tickets, employment letter with approved leave, and travel insurance documentation."],
        ["Uluru Special Note", "Uluru-Kata Tjuta National Park is in the Northern Territory. There is no separate permit required to visit the park for international visitors — the national park pass (A$25/adult, 3 days) is purchased on arrival at the park gate or pre-booked online. It is the only additional fee beyond your accommodation and activities."],
        ["Travel Insurance", "Medical insurance is strongly recommended. The nearest major hospital is Alice Springs, 450km away. Medical evacuation from the park requires a Royal Flying Doctor Service aircraft. Emergency medical costs for uninsured international visitors in remote Australia can reach A$100,000+."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ETA (Electronic Travel Authority)", "USA, Canada, UK, and many European passport holders qualify for the ETA (subclass 601). Apply via the Australian ETA app or the Department of Home Affairs website. Cost: A$20 service charge. Approval is usually instant to 24 hours. Valid for 12 months with multiple entries, up to 3 months per stay."],
        ["eVisitor (Free)", "EU citizens and several other nationalities qualify for the free eVisitor (subclass 651), applied online through the Department of Home Affairs. Typically instant approval, no charge. Multiple entries, up to 3 months per visit, valid 12 months from grant date."],
        ["New Zealand Citizens", "NZ citizens automatically receive a Special Category Visa (SCV) on arrival in Australia — no pre-arrangement required. They may visit Uluru as part of any Australian trip without visa formalities."],
        ["Park Pass Note", "All international visitors regardless of passport type must purchase the Uluru-Kata Tjuta National Park pass (A$25/adult, 3-consecutive-day entry). This is separate from any visa and is paid at the park entry gate or online through Parks Australia."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "A$120–200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Uluru Base & Sounds of Silence",
          items: [
            "Arrive at Ayers Rock Airport (AYQ) — flights from Sydney (3 hours, A$200–400), Melbourne (3 hours, A$200–400), or Alice Springs (1 hour, A$120–200). The airport is 5km from Ayers Rock Resort. A shuttle bus runs every 30 minutes (A$20 return) or walk if travelling light.",
            "Check into Outback Pioneer Lodge (A$55–85/night dormitory) or Ayers Rock Campground (A$40–60/night). These are the budget options within the resort precinct — both are well-maintained. Purchase your 3-day national park pass (A$25) at the park gate 5km from the resort.",
            "4:30pm — Talinguru Nyakunytjaku sunrise/sunset viewing area for your first Uluru encounter at dusk. This is the purpose-built viewing area 10km from the resort with car parking and marked viewpoints. Arriving here for your first view sets the scale — the rock fills the horizon. No photograph has prepared you for this.",
            "Sunset — Watch Uluru transition from orange to deep red to purple as the sun drops. The colour change takes approximately 45 minutes. Budget 1.5 hours for the full display including twilight afterglow.",
            "8:00pm — Sounds of Silence dinner (A$250/person — must be booked months in advance for peak season). This is the definitive Uluru experience: a candlelit dinner table set in the desert, 3 courses of Australian bush tucker cuisine (kangaroo, barramundi, native herbs), followed by a 45-minute guided stargazing session with a resident astronomer and a sophisticated telescope array. The Southern Cross, the Milky Way's galactic core, and a silence deeper than most people have ever experienced.",
          ],
          cost: "A$330–400 total Day 1 (incl. park pass, accommodation, Sounds of Silence)",
        },
        {
          day: "Day 2",
          title: "Kata Tjuta Valley of the Winds",
          items: [
            "5:30am — Wake up before sunrise. Drive 50km west from the resort to Kata Tjuta (The Olgas). The Valley of the Winds hike (7.4km, 4 hours, classified Hard) begins at the Valley of the Winds car park. Starting early is essential — the trail closes when temperatures exceed 36°C (this happens regularly in shoulder months), and the valley is dramatically more beautiful in morning light.",
            "The Valley of the Winds trail passes through spectacular gorges between the 36 domed rock formations of Kata Tjuta. The rocks are up to 546 metres tall — taller than Uluru — and the valley corridors funnel wind into an audible, physical presence. This is Kata Tjuta's sacred law site for Anangu men.",
            "Lookout 1 (Karu) at 2.2km: the first panoramic view across the domed valley. Lookout 2 (Karingana) at 5.4km: the full western face of Kata Tjuta with the desert horizon beyond. Each lookout requires a pause of at least 15 minutes to properly absorb the scale.",
            "10:30am — Return from Valley of the Winds. Shorter option: Walpa Gorge walk (2.6km return, 45 minutes, Easy) along a creek bed between two of Kata Tjuta's tallest domes. This is the accessible alternative for those who find the Valley of the Winds too demanding.",
            "12:30pm — Rest and rehydrate at the resort. The heat in early afternoon is not manageable for outdoor activity — budget A$15–20 for lunch at the Outback Pioneer Barbecue or buy supplies from the IGA supermarket within the resort.",
            "4:30pm — Return to Uluru for the sunset viewing area (Talinguru or the road-side pullout on Yulara Drive). This is sunset number two — each sunset is different depending on cloud cover, dust in the atmosphere, and the angle of the light.",
          ],
          cost: "A$40–60 total (fuel or shuttle transport, food)",
        },
        {
          day: "Day 3",
          title: "Uluru Base Walk, Field of Light & Departure",
          items: [
            "5:00am — Dawn at Uluru. The eastern sunrise viewing area gives the first direct light hitting the rock face. Arrive 30 minutes before sunrise and position yourself for the transition from grey silhouette to incandescent orange — the most photographed moment at Uluru and still genuinely moving every time.",
            "6:30am — Uluru base walk (10.6km, 3 hours, Easy-Moderate). The circumnavigation of the entire rock is the single most important activity at Uluru. Walking the full base reveals the scale: Uluru is 9.4km in circumference, with sheer cliff faces, desert oak groves, ancient rock art sites, Anangu ceremonial areas marked by low fences, and waterholes that remain from the last rainfall. A guided interpretive walk (A$55, 2.5 hours, departs 7am from the Cultural Centre) provides the Tjukurpa stories behind what you're seeing.",
            "Cultural Centre (free, open from 7am) — the best introduction to Anangu culture in the park. Exhibits explain the Tjukurpa creation stories, traditional law, the 1985 land rights return, the 2019 climbing ban, and the living culture of the Anangu people. The gallery sells authentic Anangu artwork — dot paintings, carved wooden objects — purchased directly benefits the artists.",
            "Mutitjulu Waterhole — the permanent waterhole on the south face of Uluru, surrounded by ancient rock paintings. A 900-metre walk from the Cultural Centre car park. The waterhole is sacred; the rock art is a living record of law, not decoration.",
            "8:00pm — Field of Light art installation by Bruce Munro (A$45, runs April 2023 onward). 50,000 frosted glass spheres on slender stems cover 7 hectares of desert, illuminated at night with slowly colour-shifting light. The installation is accessed by shuttle from the resort from sunset. Walking through it after dark, with Uluru as a silhouette on the horizon, is otherworldly.",
          ],
          cost: "A$100–150 total (guided walk option, Cultural Centre, Field of Light, food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "A$280–500/day",
      days: [
        {
          day: "Day 1",
          title: "Desert Gardens Hotel & Sunset Canapés",
          items: [
            "Fly into AYQ and transfer to Desert Gardens Hotel (A$250–400/night) — the mid-range Ayers Rock Resort property set among native desert gardens with direct Uluru views from upper-floor rooms. Check in by 2pm if possible — the afternoon light through the room window facing Uluru is immediately striking.",
            "3:00pm — Cultural Centre visit with the Anangu guide experience (A$40): a 90-minute guided interpretation of the Tjukurpa stories, traditional tools, bush food, and the history of land rights. Understanding the culture before you encounter the landscape transforms the experience of the subsequent days.",
            "5:00pm — Uluru Canapés at Sunset (A$60/person through Ayers Rock Resort activities desk): a sunset viewing spot set up with canapés, sparkling wine, and a cultural interpreter who narrates the Anangu stories of the sunset ceremony as the rock changes colour. The combination of quality food, excellent wine, and narrative context elevates this above the standard sunset car park experience.",
            "8:00pm — Sounds of Silence dinner (A$250/person) — book this months in advance for mid-range and budget alike. The experience is identical regardless of which hotel tier you're staying in; the quality of the food, wine, and stargazing is the same. This is non-negotiable for any 3-day Uluru itinerary.",
          ],
          cost: "A$560–710 total Day 1 (hotel, Cultural Centre, canapés, Sounds of Silence)",
        },
        {
          day: "Day 2",
          title: "Kata Tjuta & Afternoon Photography",
          items: [
            "6:00am — Valley of the Winds hike at Kata Tjuta, starting at sunrise. With a mid-range budget, hire a local Aboriginal guide through the resort activities desk (A$100/person, 4 hours) — the guide translates what you're seeing within the Tjukurpa framework, explains which rock formations correspond to which ancestral creation stories, and identifies medicinal and food plants along the trail.",
            "10:30am — Return to the resort for a late breakfast at the Bough House Restaurant (buffet, A$35/person) — the best mid-range breakfast option in the park, with fresh tropical fruit, eggs cooked to order, and Queensland regional produce.",
            "1:00pm — Rest period during peak afternoon heat. Pool at Desert Gardens Hotel or Sails in the Desert (hotel guests have access to the lagoon pool). Read Bruce Chatwin's 'The Songlines' in the shade — the definitive literary companion to the Australian outback.",
            "4:30pm — Sunset photography at Uluru from the less-visited northern road. The standard sunset viewing area is crowded with tour buses; the northern access road gives private viewing spots with the rock's east face in full golden-hour light and none of the tourist infrastructure in frame.",
            "7:30pm — Dinner at Arnguli Grill (Sails in the Desert hotel) — the resort's mid-range restaurant serving Northern Territory produce: crocodile skewers, NT barramundi, kangaroo fillet with bush plum reduction. A$45–70/person for two courses.",
          ],
          cost: "A$280–380 total (guide, meals, hotel facilities)",
        },
        {
          day: "Day 3",
          title: "Sunrise Base Walk & Helicopter Farewell",
          items: [
            "5:00am — Pre-dawn drive to the Talinguru Nyakunytjaku sunrise area for best first-light position. The parking area fills up by 5:30am during peak season — arrive early.",
            "6:30am — Uluru base walk with a guided Cultural Immersion Tour (A$85/person, 3 hours) — the park's most comprehensive interpretive experience. Anangu guides lead small groups around the full base, sharing creation stories at each significant feature: Kantju Gorge (the waterhole that fills during rain), Lungkata rock paintings (a cautionary story about a blue-tongued lizard's greed), Mala Walk sacred sites.",
            "10:00am — Mutitjulu Waterhole and Cultural Centre at leisure. Browse the Maruku Arts gallery — the largest Aboriginal-owned art organisation in Australia, with pieces from 800+ artists across the region. A direct purchase supports the artist directly.",
            "12:30pm — Farewell lunch at Bough House Restaurant or a picnic assembled from IGA provisions in the resort grounds.",
            "2:00pm — Helicopter flight over Uluru (A$160 for 15 minutes, A$270 for 30 minutes, from Ayers Rock Helicopters at the resort). The flight takes you directly over the rock — the scale from above is impossible to comprehend at ground level. Kata Tjuta appears as a mass of 36 domes extending to the horizon. The desert stretches flat and red in every direction. This is the most dramatic perspective available at Uluru.",
            "4:00pm — Transfer to AYQ Airport for evening departure.",
          ],
          cost: "A$330–450 total (guided walk, helicopter, meals, transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "A$600–1,800/day",
      days: [
        {
          day: "Day 1",
          title: "Longitude 131° Arrival & Private Sunset",
          items: [
            "Fly into AYQ and transfer to Longitude 131° — Australia's most acclaimed luxury camp, with 16 private tented pavilions facing Uluru across the desert. Rates A$1,600–3,000/night all-inclusive (all meals, all activities, open bar, dedicated guide). The pavilions are glass-fronted luxury tents elevated on decks, with a direct Uluru view from your bed. Your dedicated guide meets you at the airport.",
            "Private arrival experience: champagne on your deck, orientation briefing, and a 30-minute guide conversation about the cultural context of Uluru before any activities begin. Longitude 131°'s approach is understanding first, experience second.",
            "4:30pm — Private sunset viewing with your guide at an exclusive position away from the public viewing areas. The guide narrates the colour transformation against the backdrop of Anangu creation stories — the same content as the public tours, but in private.",
            "8:00pm — Private Sounds of Silence dinner: Longitude 131° guests have a reserved section of the dinner site, served with a more elevated menu and premium Australian wine list. Your personal guide continues the cultural narrative. This is the single finest night in Australian outback hospitality.",
          ],
          cost: "A$1,800–3,200 total Day 1 (all-inclusive lodge, Sounds of Silence premium)",
        },
        {
          day: "Day 2",
          title: "Private Kata Tjuta & Anangu Cultural Walk",
          items: [
            "5:30am — Private sunrise drive to the Valley of the Winds at Kata Tjuta with your Longitude 131° guide and a private vehicle. Arriving as the gates open at sunrise, before any public tours, means the first 90 minutes of the Valley of the Winds hike are in near-complete solitude.",
            "Private guided Valley of the Winds: the guide's narration of Kata Tjuta's significance in Anangu law adds a dimension unavailable on public tours. The domed formations are understood differently when each one is named, storied, and part of a living ceremonial landscape.",
            "10:30am — Private morning tea in the Valley of the Winds — Longitude 131° packs a hamper with fresh pastries, fruit, and quality coffee served from a thermos at a viewpoint. One of the small, disproportionately pleasurable moments of the luxury outback experience.",
            "Afternoon — Extended rest at the camp. The midday pool terrace at Longitude 131° faces Uluru directly — afternoon napping beside the pool with the rock in unobstructed view is one of the more spectacular ways to spend 2 hours anywhere in Australia.",
            "5:00pm — Private photography session with your guide at a sunset viewpoint. High-quality photography tips for the colour transitions, optimal exposure settings, and composition positions that avoid other visitors.",
            "Dinner — Longitude 131° dining room: 4-course degustation with Northern Territory native ingredients. Pairing wines selected from Australia's best producers — Henschke, Penfolds, Vasse Felix.",
          ],
          cost: "All-inclusive in lodge rate (approx. A$1,600–3,000/night)",
        },
        {
          day: "Day 3",
          title: "Dawn Base Walk, Helicopter & Departure",
          items: [
            "5:00am — Private pre-dawn departure to Uluru for a guided Mala Walk (2km, 45 minutes, the most culturally rich section of the base). The guide tells the Mala hare-wallaby creation story that defines this section of the rock while walking in the dark, arriving at the base in complete darkness before the first light defines the sky behind Uluru.",
            "Sunrise — Watch the full rock illumination from the base. Being at the base of Uluru rather than at the distant viewing area during sunrise is a completely different experience: the scale is overwhelming, the sound of wind across the rock face is audible, and the colour change is visible in the texture of the sandstone inches from your hand.",
            "8:00am — Guided circumnavigation continues: the full 10.6km base walk with interpretive narration at all significant sites — rock art panels, sacred waterholes, the natural features that correspond to creation story characters.",
            "12:00pm — Luxury farewell lunch at Longitude 131° with Uluru as the backdrop. Barramundi, buffalo cheese, desert lime panna cotta.",
            "2:30pm — Helicopter flight: the 30-minute flight (A$270, booked through the camp concierge) with private transfer. Your guide accompanies you to the helipad and the pilot provides aerial narration.",
            "4:30pm — Private airport transfer. Your Longitude 131° guide accompanies you to AYQ and stays until boarding — the service continues until you've left the outback.",
          ],
          cost: "All-inclusive lodge + helicopter A$270, activities included",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "A$40–85",
      food: "A$25–40",
      transport: "A$15–30",
      activities: "A$40–80",
      total: "A$120–200/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "A$150–350",
      food: "A$50–90",
      transport: "A$25–50",
      activities: "A$60–120",
      total: "A$280–500/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "A$400–1,500",
      food: "A$100–200",
      transport: "A$50–100",
      activities: "A$100–300",
      total: "A$600–1,800/day",
    },
  ],
  mistakes: [
    {
      icon: "🧗",
      title: "Attempting to Climb Uluru",
      desc: "Climbing Uluru was permanently banned in October 2019 following decades of requests from the Anangu Traditional Owners, for whom the summit is a sacred site associated with ancestral law. The climb is closed permanently — not seasonally, not weather-dependent, not by discretion. Attempting to climb is illegal, deeply disrespectful to the Anangu people whose country this is, and physically dangerous on an exposed rock face in outback heat. The base walk around Uluru is a superior experience in every measurable way.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌡️",
      title: "Visiting in Summer (November–March)",
      desc: "Uluru in summer regularly exceeds 40°C — reaching 48°C on extreme days. Trail closures are mandatory above 36°C, which means the Valley of the Winds at Kata Tjuta and even parts of the Uluru base walk close before 9am. Summer also brings flies in extraordinary numbers — a biblical, face-covering density that makes outdoor activity genuinely miserable. The park is open, but outdoor activities are severely curtailed. Visit May to September when temperatures are 15–25°C and conditions are genuinely excellent.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏔️",
      title: "Skipping Kata Tjuta Entirely",
      desc: "Many visitors spend all three days at Uluru and see Kata Tjuta only as a half-hour detour on the way back from the Valley of the Winds lookout. This is a significant error. Kata Tjuta's Valley of the Winds hike is arguably more spectacular than any single Uluru walk — the gorge corridors, the sheer scale of the domed formations, and the absence of other visitors in the early morning make it the most physically dramatic landscape in Central Australia.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🪰",
      title: "Underestimating the Flies",
      desc: "The bush flies at Uluru from June to October are persistent, numerous, and committed to investigating every opening on your face. They do not bite, but they land on lips, eyes, and nostrils in continuous rotation. A fly net head cover (A$5 from the IGA in the resort, or bring your own) is not optional — it is the difference between an enjoyable base walk and a gruelling ordeal. Budget travellers: buy one before your first morning walk.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🍽️",
      title: "Book Sounds of Silence at Least 3 Months Ahead",
      desc: "The Sounds of Silence dinner runs nightly with a capped number of guests. In peak season (June–September), it sells out 3–4 months in advance. It is the single most memorable experience available at Uluru and worth planning the entire trip around. Book directly through Ayers Rock Resort at ayersrockresort.com.au as soon as your dates are confirmed. If sold out, join the waitlist — cancellations happen regularly.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌐",
      title: "Do the Base Walk with a Guided Cultural Tour",
      desc: "The Uluru base walk is extraordinary on its own. With a guide who speaks Anangu law and can interpret the rock art, ancient water management systems, and creation story features — it becomes a completely different experience. The Cultural Centre provides self-guided materials (free), but a guided walk (A$55–85) led by a local operator or Anangu guide translates the landscape into a comprehensible story. Understanding Tjukurpa does not diminish the mystery — it deepens it.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Different Viewpoints for Sunrise and Sunset Each Day",
      desc: "Uluru has multiple designated viewing areas with different angles and distances to the rock. Do not use the same viewpoint for sunrise and sunset, or the same viewpoint across multiple days. Talinguru Nyakunytjaku gives the classic straight-on view. The northern access road gives a quarter-angle view with desert oaks in the foreground. The Cultural Centre car park gives the closest ground-level view. The helicopter gives the overview. Each is a different rock, a different experience.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌌",
      title: "Full Moon Nights Are Magical — Plan Accordingly",
      desc: "Uluru under a full moon is an experience not available anywhere else on earth. The rock becomes visible in moonlight without any artificial illumination — a glowing silhouette against a sky full of stars so dense the Milky Way casts a shadow. The Field of Light installation is also extraordinary at full moon. Check the lunar calendar before booking dates: if your visit can coincide with a full moon, adjust your trip timing. This is worth planning around.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "Can I still climb Uluru?",
      a: "No. Climbing Uluru was permanently banned on 26 October 2019 following a formal decision by the Uluru-Kata Tjuta National Park Board of Management and consistent requests from the Anangu Traditional Owners over many decades. The closure is permanent and applies at all times regardless of weather conditions. The climbing track is closed and the historic metal chain handrail has been removed. There are no exceptions. The 10.6km base walk is a superior experience and the one the Anangu have always asked visitors to take.",
    },
    {
      q: "How remote is Uluru and how do I get there?",
      a: "Uluru is 450km from Alice Springs in the Northern Territory — in the geographic centre of Australia. The easiest access is to fly directly to Ayers Rock Airport (AYQ) from Sydney (3 hours, A$200–400), Melbourne (3 hours, A$200–400), or Alice Springs (1 hour connecting flight). Jetstar, Qantas, and Virgin Australia operate routes. Driving from Alice Springs takes 4.5 hours on sealed road — a worthwhile road trip but adds time. There is no public transport to Uluru.",
    },
    {
      q: "Where is the best spot to photograph Uluru?",
      a: "For sunrise: the Talinguru Nyakunytjaku viewing area on the east side of Uluru catches the first direct light. For sunset: the sunset viewing car park on Yulara Drive gives the classic straight-on view, but the northern access road gives a more unusual angle. For the base: Kantju Gorge on the west face, and Mutitjulu Waterhole on the south face, offer the most intimate close-up photography. For the overview: helicopter flight. Full moon nights from any viewpoint produce extraordinary images without artificial lighting.",
    },
    {
      q: "How much does Ayers Rock Resort cost — is it worth it?",
      a: "Ayers Rock Resort is a monopoly — the only accommodation within or near the park, run by Voyages Indigenous Tourism Australia. Budget dormitories start at A$40–55/night; mid-range hotel rooms run A$250–400/night; Longitude 131° luxury camp starts at A$1,600/night all-inclusive. Food and activities within the resort are priced at premium rates. However, the experience of staying in the park — being present for pre-dawn starts without a long drive — is worth the premium over Alice Springs accommodation 450km away.",
    },
    {
      q: "Is Uluru an Alice Springs day trip?",
      a: "No. Alice Springs to Uluru is 450km (4.5 hours driving). By the time you arrive, the morning light is gone and you have 2–3 hours before you need to start the return drive to make it back before dark. A same-day visit from Alice Springs means seeing Uluru in harsh midday light, missing both sunrise and sunset, and rushing through the park without absorbing its scale. The minimum meaningful stay is 2 nights; 3 nights is ideal.",
    },
    {
      q: "Is Uluru worth the significant expense and effort to reach?",
      a: "Yes, almost universally. Uluru is in Australia's top 3 most visited natural wonders for a reason that becomes clear the moment you see it. The combination of scale, colour, spiritual atmosphere, and the living culture of the Anangu people creates an experience that has no equivalent elsewhere. The remoteness — which adds cost and travel time — is inseparable from the experience: the silence, the darkness, the sense of profound isolation in the red centre. Budget travellers who made the effort universally report it as one of the most memorable experiences of their travels.",
    },
  ],
  combineWith: ["great-barrier-reef-4-days", "melbourne-4-days", "sydney-5-days"],
  relatedSlugs: ["great-barrier-reef-4-days", "sydney-5-days", "melbourne-4-days", "bali-5-days"],
  galleryQuery: "uluru ayers rock australia outback red centre desert sunrise kata tjuta",
};

export const metadata: Metadata = {
  title: "Uluru in 3 Days: Sacred Red Rock, Kata Tjuta & Outback Stargazing (2026)",
  description:
    "Complete 3-day Uluru guide — base walk, Kata Tjuta Valley of the Winds, Sounds of Silence dinner, Field of Light, and everything you need to know about visiting the red centre of Australia.",
  keywords: [
    "uluru itinerary 3 days",
    "ayers rock travel guide 2026",
    "uluru kata tjuta guide",
    "sounds of silence dinner uluru",
    "uluru base walk",
    "australia outback guide",
  ],
  openGraph: {
    title: "Uluru in 3 Days: Sacred Red Rock, Kata Tjuta & Outback Stargazing (2026)",
    description:
      "Base walk, Valley of the Winds, Sounds of Silence dinner, Field of Light, and A$ costs for budget to luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529967297634-f4c80f3a4dc3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Uluru Ayers Rock glowing red at sunrise Australian outback",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uluru in 3 Days (2026)",
    description: "Base walk, Kata Tjuta, Sounds of Silence, and A$ costs for every budget.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/uluru-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Uluru in 3 Days: Sacred Red Rock, Kata Tjuta & Outback Stargazing (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1529967297634-f4c80f3a4dc3?w=1200&q=80",
      description:
        "3-day Uluru itinerary covering base walk, Kata Tjuta Valley of the Winds, Sounds of Silence dinner, Field of Light, and budget breakdowns from A$120/day to luxury.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Uluru 3 Days",
          item: "https://www.incredibleitinerary.com/blog/uluru-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Uluru-Kata Tjuta National Park, Northern Territory, Australia",
      description:
        "A UNESCO World Heritage Site in the red centre of Australia, home to Uluru (Ayers Rock) and Kata Tjuta (The Olgas), sacred sites of the Anangu Traditional Owners for over 60,000 years.",
      touristType: [
        "Cultural tourists",
        "Nature lovers",
        "Photography enthusiasts",
        "Spiritual travellers",
        "Adventure travellers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -25.3444,
        longitude: 131.0369,
      },
    },
  ],
};

export default function UluruPage() {
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
