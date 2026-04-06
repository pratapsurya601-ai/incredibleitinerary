import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Hanoi",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "hanoi-3-days",
  heroQuery: "hanoi old quarter street vietnam hoan kiem lake",
  heroAlt: "Hanoi Old Quarter street with motorbikes and lanterns Vietnam",
  category: "Southeast Asia",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "Vietnam's capital rewards slow walkers — Hoan Kiem Lake at dawn before the joggers arrive, 36 streets of the Old Quarter each selling one thing, egg coffee in a hidden rooftop cafe, and pho at 7am with locals who've eaten at the same stall for 20 years.",
  stats: {
    duration: "3 Days",
    budgetFrom: "₫400,000",
    bestMonths: "Oct – Apr",
    airport: "HAN (Noi Bai)",
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
        ["E-Visa", "Apply at evisa.xuatnhapcanh.gov.vn — valid 90 days, single or multiple entry. Processed in 3 working days. Cost: $25 USD."],
        ["Visa on Arrival", "Requires pre-approval letter from agency (book online). Pay $25 stamping fee on arrival. Takes 30–60 min at airport."],
        ["Documents", "Passport valid 6+ months, return ticket, hotel booking, 2 passport photos, approval letter (for VOA)."],
        ["Duration", "Tourist visa allows 30-day stay, extendable once at immigration office."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "Citizens of UK, France, Germany, Spain, Italy, Denmark, Finland, Norway, Sweden, Belarus get 45 days visa-free."],
        ["E-Visa", "USA, Canada, Australia get E-Visa on arrival portal — $25 USD, 90-day validity."],
        ["Extension", "Extend at any immigration office. Cost varies by location. Hanoi office is on Tran Phu street."],
        ["Tip", "Always show proof of onward travel when asked — airlines sometimes check before boarding."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₫400,000–800,000/day (~$16–32)",
      days: [
        {
          day: "Day 1",
          title: "Old Quarter & Hoan Kiem Lake",
          items: [
            "7:00am — Bun bo nam bo (beef noodles) breakfast at a street stall in Old Quarter, ₫50,000",
            "8:30am — Walk around Hoan Kiem Lake before crowds. Ngoc Son Temple on Jade Island opens 8am (₫30,000 entry)",
            "10:00am — Explore 36 guild streets of Old Quarter on foot — Hang Gai (silk), Hang Bac (silver), Hang Ma (paper offerings)",
            "12:30pm — Bun cha lunch at a local spot — grilled pork with noodles, ₫60,000. Obama ate here.",
            "3:00pm — Visit Bach Ma Temple (free) — oldest temple in Hanoi",
            "5:00pm — Hoa Lo Prison Museum (₫30,000) — sobering but essential",
            "7:00pm — Bia hoi corner at junction of Ta Hien & Luong Ngoc Quyen — street beer, ₫10,000 per glass",
          ],
          cost: "₫400,000–500,000 total",
        },
        {
          day: "Day 2",
          title: "Ho Chi Minh Mausoleum & Temple of Literature",
          items: [
            "7:30am — Ho Chi Minh Mausoleum (free, Tues/Thurs/Sat/Sun 7:30–10:30am only) — arrive early, queues start",
            "9:30am — One Pillar Pagoda (free) — 5 minute walk from mausoleum",
            "10:30am — Ho Chi Minh Museum (₫40,000) — well-curated",
            "12:00pm — Pho ga (chicken pho) lunch in Ba Dinh district, ₫70,000",
            "2:00pm — Temple of Literature (₫30,000) — Vietnam's first university, peaceful gardens",
            "4:00pm — Tay Ho (West Lake) — walk around the shore, visit Tran Quoc Pagoda (free)",
            "7:00pm — Egg coffee at Giang Café (₫35,000 per cup) — upstairs in alley off Nguyen Huu Huan",
          ],
          cost: "₫350,000–450,000 total",
        },
        {
          day: "Day 3",
          title: "Day Trip to Ninh Binh or Bat Trang Pottery Village",
          items: [
            "Option A: Ninh Binh day trip — bus from My Dinh station (₫70,000 each way). Rent bicycle (₫50,000) to explore Tam Coc rice fields and Trang An caves",
            "Option B: Bat Trang Pottery Village — 45 min by bus or Grab (₫150,000 round trip). Make your own ceramic at workshops",
            "Return by 5pm for evening market at Dong Xuan — Hanoi's largest covered market",
            "Final dinner: Banh cuon (steamed rice rolls) at a local restaurant, ₫60,000",
          ],
          cost: "₫400,000–600,000 total with day trip",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₫1,200,000–2,000,000/day (~$48–80)",
      days: [
        {
          day: "Day 1",
          title: "Old Quarter, Cooking Class & Rooftop Dining",
          items: [
            "8:00am — Breakfast at The Breakfast Club cafe, Hoan Kiem area — eggs, coffee, ₫120,000",
            "9:30am — Private cyclo tour of Old Quarter (₫300,000 for 1.5 hrs) — best way to understand the street grid",
            "11:00am — Ngoc Son Temple visit, photo walk around the lake",
            "1:00pm — Hanoian cooking class at a local school (₫800,000 half-day) — make pho, spring rolls, banh xeo",
            "6:00pm — Rooftop dinner at Skyline Bar, Hilton Hanoi — cocktails + Vietnamese cuisine with lake views",
          ],
          cost: "₫1,500,000–1,800,000 total",
        },
        {
          day: "Day 2",
          title: "Cultural Day & Fine Dining",
          items: [
            "8:00am — Vietnam Museum of Ethnology (₫40,000) — outstanding museum on 54 ethnic groups, 2 hours",
            "10:30am — Ho Chi Minh Complex + One Pillar Pagoda",
            "1:00pm — Lunch at La Badiane French-Vietnamese fusion restaurant",
            "3:00pm — Temple of Literature walking tour with audio guide",
            "6:00pm — Tay Ho sunset walk, visit Quan Thanh Temple",
            "8:00pm — Dinner at Cha Ca La Vong — turmeric fish dish cooked tableside since 1871",
          ],
          cost: "₫1,500,000–2,000,000 total",
        },
        {
          day: "Day 3",
          title: "Ninh Binh Private Day Trip",
          items: [
            "7:30am — Private car to Ninh Binh (₫1,200,000 round trip for the car, split 2–4 people)",
            "10:00am — Boat tour through Tam Coc caves (₫200,000) — limestone karsts like Ha Long Bay on land",
            "12:30pm — Lunch at a local restaurant overlooking rice paddies",
            "2:30pm — Trang An Grottoes (₫250,000) — UNESCO site, 2-hr boat",
            "5:00pm — Hoa Lu Ancient Capital (free entry) — Vietnam's 10th-century capital",
            "7:30pm — Return to Hanoi. Night cap at Tadioto bar",
          ],
          cost: "₫1,800,000–2,200,000 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₫4,000,000+/day (~$160+)",
      days: [
        {
          day: "Day 1",
          title: "Private Tour & Rooftop Dinner",
          items: [
            "Check in to Sofitel Legend Metropole Hanoi — the most historic hotel in Vietnam",
            "Private half-day tour of Old Quarter with expert local guide (₫1,500,000)",
            "Afternoon tea at Metropole's Bamboo Bar — French colonial setting",
            "Evening cocktails at Summit Lounge, Intercontinental West Lake — 360° lake views",
            "Dinner at Le Beaulieu French restaurant inside Metropole — fine dining since 1901",
          ],
          cost: "₫6,000,000–8,000,000 total",
        },
        {
          day: "Day 2",
          title: "Museums, Spa & Tasting Menu",
          items: [
            "Morning: Private guided Ho Chi Minh Complex + Vietnam Museum of Ethnology",
            "Lunch at Maison Van — contemporary Vietnamese in a colonial villa",
            "Afternoon: Spa treatment at Sofitel Metropole (₫2,500,000 for 90 min)",
            "Temple of Literature private sunset tour",
            "Dinner: Tasting menu at Anan Saigon or Chefs Hanoi — modern Vietnamese cuisine",
          ],
          cost: "₫6,000,000–10,000,000 total",
        },
        {
          day: "Day 3",
          title: "Private Ninh Binh & Farewell Dinner",
          items: [
            "Private luxury car + guide to Ninh Binh (₫2,500,000 for private tour)",
            "Private boat through Tam Coc, Trang An, Hoa Lu — skip all queues",
            "Lunch at Emeralda Resort terrace restaurant",
            "Return by 5pm — sunset drinks at Hilton Hanoi Opera rooftop",
            "Farewell dinner at Green Tangerine — French-Vietnamese fusion in a 1928 villa",
          ],
          cost: "₫8,000,000–12,000,000 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₫250,000–400,000", food: "₫100,000–150,000", transport: "₫50,000–100,000", activities: "₫50,000–100,000", total: "₫450,000–750,000" },
    { tier: "✨ Mid-Range", accommodation: "₫700,000–1,200,000", food: "₫300,000–600,000", transport: "₫200,000–400,000", activities: "₫200,000–400,000", total: "₫1,400,000–2,600,000" },
    { tier: "💎 Luxury", accommodation: "₫2,500,000–6,000,000", food: "₫800,000–2,000,000", transport: "₫500,000–1,500,000", activities: "₫500,000–1,000,000", total: "₫4,300,000–10,500,000" },
  ],
  mistakes: [
    { icon: "🛵", title: "Not Using Grab for Transport", desc: "Xe om (motorbike taxis) will negotiate 3–5x the fair price. Always use the Grab app — transparent pricing, safe drivers, no haggling.", color: "bg-red-50 border-red-200" },
    { icon: "🌧️", title: "Visiting in Summer Without Checking Forecast", desc: "July–September brings heavy rain and typhoons. October–April is the best period. Even 'dry season' can have drizzly mornings — pack a light rain jacket.", color: "bg-orange-50 border-orange-200" },
    { icon: "💵", title: "Using USD When VND is Better", desc: "While USD is accepted many places, you always get a worse exchange rate. Withdraw Vietnamese Dong from Techcombank or Vietcombank ATMs — avoid airport exchange counters.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🍜", title: "Eating Only at Tourist Restaurants", desc: "The best pho in Hanoi is at street stalls with plastic stools, not restaurants with English menus. Follow the queues, not the reviews.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "☕", title: "Find Egg Coffee Before You Leave", desc: "Egg coffee (ca phe trung) is a Hanoi invention — whipped egg yolk, sugar and condensed milk over strong coffee. Giang Café is the original. It tastes like dessert.", color: "bg-amber-50 border-amber-200" },
    { icon: "🕐", title: "Visit Hoan Kiem Lake at 6am", desc: "By 9am it's full of tourists. At 6am, it's locals doing tai chi, elderly couples walking, and food carts setting up. The best street photography window of the day.", color: "bg-teal-50 border-teal-200" },
    { icon: "🛍️", title: "Dong Xuan Market for Authentic Shopping", desc: "Skip the tourist shops on Hang Gai. Dong Xuan covered market (Hanoi's oldest, 1889) has better prices on lacquerware, silk, and ceramics. Bargain hard — start at 40% of asking price.", color: "bg-green-50 border-green-200" },
    { icon: "🚌", title: "Ninh Binh Over Ha Long Bay for Short Trips", desc: "If you only have 3 days, Ninh Binh (2.5 hrs by bus) gives the same limestone karst landscape as Ha Long Bay without the overnight cruise commitment and at a fraction of the cost.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Is Hanoi safe for solo female travellers?", a: "Yes — Hanoi is one of Southeast Asia's safer capitals. Petty theft (bag snatching by motorbike) does happen on busy streets. Keep bags on the inside, away from the road. Night areas around Old Quarter are well-lit and busy until late." },
    { q: "What's the best way to get from Hanoi airport to the city?", a: "Grab taxi app is the easiest — around ₫200,000–300,000 to Old Quarter. Airport bus 86 (₫35,000) runs directly to Hoan Kiem area every 20 min from 5am–11pm. Avoid unmarked taxis outside arrivals." },
    { q: "How much should I budget for Hanoi per day?", a: "Budget travellers can manage on ₫500,000–800,000 per day ($20–32) including hostel dorm, street food, and local transport. Mid-range is ₫1,500,000–2,500,000 ($60–100). Luxury hotels alone start at ₫2,500,000/night." },
    { q: "Can I drink tap water in Hanoi?", a: "No — tap water is not safe to drink. Buy bottled water (₫10,000–15,000 per 1.5L at convenience stores) or use a filtered bottle. Most guesthouses provide free filtered water." },
    { q: "What's the difference between Hanoi and Ho Chi Minh City?", a: "Hanoi (north) is older, slower, more traditional, and has better street food — especially pho and bun cha. Ho Chi Minh City (south) is faster, more modern, and more international. First-time Vietnam visitors should see both." },
    { q: "Do I need to tip in Hanoi restaurants?", a: "Tipping is not expected at street food stalls. At mid-range restaurants, rounding up or leaving 10% is appreciated but not mandatory. High-end restaurants may include a service charge. Tip tour guides and drivers separately." },
  ],
  combineWith: ["ha-long-bay-3-days", "ho-chi-minh-city-3-days", "chiang-mai-4-days"],
  relatedSlugs: ["bangkok-4-days", "ho-chi-minh-city-3-days", "ha-long-bay-3-days", "singapore-3-days"],
  galleryQuery: "hanoi vietnam old quarter street food temple",
};

export const metadata: Metadata = {
  title: "Hanoi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Hanoi plans — Budget, Mid-Range, Luxury — with real timings, Vietnamese Dong costs, Old Quarter map, street food guide and the mistakes every first-timer makes.",
  keywords: ["hanoi itinerary 3 days", "hanoi travel guide 2026", "hanoi budget travel", "hanoi old quarter", "hoan kiem lake", "hanoi street food", "vietnam travel guide"],
  openGraph: {
    title: "Hanoi in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Real timings, actual budgets in VND, Old Quarter map. 3 complete plans for every type of traveller.",
    images: [{ url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80", width: 1200, height: 630, alt: "Hanoi Old Quarter street Vietnam" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
  },
  twitter: { card: "summary_large_image", title: "Hanoi in 3 Days: The Only Guide You Need (2026)", description: "3 plans, real timings, actual costs in VND." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/hanoi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Hanoi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", description: "3 complete Hanoi plans with real timings and costs.", datePublished: "2026-04-04T00:00:00Z", dateModified: "2026-04-04T00:00:00Z", author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" }, publisher: { "@type": "Organization", name: "IncredibleItinerary", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Hanoi in 3 Days", item: "https://www.incredibleitinerary.com/blog/hanoi-3-days" }] },
        { "@type": "TouristDestination", name: "Hanoi, Vietnam", description: "Vietnam's capital city known for its centuries-old architecture, Old Quarter streets, Hoan Kiem Lake, and distinctive street food culture.", url: "https://www.incredibleitinerary.com/blog/hanoi-3-days" },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
   "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Is Hanoi safe for solo female travellers?", acceptedAnswer: { "@type": "Answer", text: "Yes — Hanoi is one of Southeast Asia's safer capitals. Keep bags on the inside of your body, away from the road to avoid motorbike snatching." } }, { "@type": "Question", name: "How much does a 3-day Hanoi trip cost?", acceptedAnswer: { "@type": "Answer", text: "Budget travellers can manage ₫500,000–800,000 per day ($20–32). Mid-range is ₫1,500,000–2,500,000 ($60–100) per day including accommodation, food, transport and activities." } }]
};

export default function HanoiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
