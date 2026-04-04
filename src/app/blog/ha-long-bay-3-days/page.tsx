import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Ha Long Bay",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "ha-long-bay-3-days",
  heroQuery: "ha long bay limestone karsts emerald water vietnam cruise junk boat",
  heroAlt: "Ha Long Bay limestone karsts emerging from emerald water Vietnam",
  category: "Southeast Asia",
  date: "April 4, 2026",
  readTime: "11 min read",
  intro: "2,000 limestone islands rising from emerald water — kayak through hidden lagoons at dawn when mist still hangs between the karsts, sleep on a wooden junk boat under stars, wake to fishing boats passing at 5am, and find the cave that none of the day-trippers know about.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$80",
    bestMonths: "Mar – May, Sep – Nov",
    airport: "HAN (Hanoi Noi Bai)",
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
        ["E-Visa", "Same Vietnam E-Visa covers Ha Long Bay — apply at evisa.xuatnhapcanh.gov.vn, $25 USD."],
        ["Getting There", "All Ha Long Bay tours depart from Hanoi. Transfer is included in most cruise packages."],
        ["Documents", "Passport valid 6+ months. Carry hotel/cruise booking confirmation."],
        ["Transfer", "Hanoi to Ha Long Bay is 3.5 hrs by road. Most cruise companies include hotel pickup."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "UK, EU citizens get 45 days visa-free. USA, Canada, Australia get E-Visa ($25 USD)."],
        ["Cruise Booking", "Book cruise at least 2 weeks ahead in peak season (June-August). Last-minute is possible off-season."],
        ["Alternatives", "Lan Ha Bay (less crowded, same geology) is 30 min further but significantly quieter than Ha Long."],
        ["Tip", "The bay has 3 zones — the tourist zone, Bai Tu Long Bay, and Lan Ha Bay. Lan Ha is the best-kept secret."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$80–120 total for 2 nights",
      days: [
        {
          day: "Day 1",
          title: "Hanoi to Ha Long Bay — Budget Cruise Check-in",
          items: [
            "7:00am — Pickup from Hanoi Old Quarter hotel (included in most tours)",
            "10:30am — Stop at Tuan Chau Harbour. Transfer to cruise junk boat",
            "11:30am — Set sail. Lunch on boat included. Explore limestone views from deck",
            "2:00pm — Sung Sot Cave (Surprising Cave) — largest cave in the bay",
            "4:00pm — Kayaking through limestone arches and hidden lagoons (included in most tours)",
            "6:00pm — Swimming stop at Titov Beach or Ti Top Island",
            "7:30pm — Dinner on boat. Squid fishing off the deck (midnight activity)",
          ],
          cost: "$80–100 for 2-night cruise (all inclusive)",
        },
        {
          day: "Day 2",
          title: "Sunrise, Pearl Farm & More Kayaking",
          items: [
            "6:00am — Wake for sunrise over the karsts from the deck — worth the early alarm",
            "7:30am — Tai chi session on sundeck (most budget boats offer this)",
            "8:00am — Breakfast. Morning sail to a different cluster of islands",
            "9:30am — Pearl farm visit (usually included) — see how cultured pearls are made",
            "11:00am — Kayak or bamboo boat through floating fishing village",
            "1:00pm — Lunch. Checkout from cabin but continue sailing",
            "3:00pm — Return to harbour. Transfer bus back to Hanoi",
            "7:30pm — Arrive Hanoi",
          ],
          cost: "Included in cruise package",
        },
        {
          day: "Day 3",
          title: "Option: Lan Ha Bay Extension",
          items: [
            "For a 3rd day: upgrade to a 3-night cruise that includes Lan Ha Bay (Cat Ba Island area)",
            "Lan Ha Bay has 139 islands vs Ha Long's 1,969 — far less crowded",
            "Activities: cycling on Cat Ba Island, Cat Ba National Park hiking, hidden beach kayaking",
            "Many travelers say Lan Ha Bay is more beautiful and peaceful than Ha Long Bay itself",
          ],
          cost: "$30–50 extra per person for 3-night vs 2-night cruise",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$200–350 for 2 nights",
      days: [
        {
          day: "Day 1",
          title: "Limousine Transfer & Mid-Range Cruise",
          items: [
            "7:30am — VIP limousine bus from Hanoi (more comfortable, fewer stops than budget buses)",
            "12:00pm — Board Indochina Sails or Heritage Cruises — mid-range vessel with ensuite cabins",
            "Afternoon: Guided cave tour, kayaking, floating village visit",
            "Evening: Cooking class on boat — learn to make Vietnamese spring rolls",
            "7:30pm — Set dinner with multiple courses. Wine pairing available",
          ],
          cost: "$200–250 per person for 2-night cruise",
        },
        {
          day: "Day 2",
          title: "Sunrise Tai Chi & Bamboo Boat",
          items: [
            "6:00am — Sunrise from sundeck with complimentary tea/coffee",
            "7:30am — Guided tai chi session",
            "9:00am — Bamboo boat rowing through quiet karst area inaccessible to larger boats",
            "11:00am — Final kayaking session. Swimming in clear water",
            "1:00pm — 4-course farewell lunch",
            "3:30pm — Return to harbour. Limousine transfer to Hanoi",
          ],
          cost: "Included in cruise",
        },
        {
          day: "Day 3",
          title: "Cat Ba Island Base (Alternate Structure)",
          items: [
            "Alternative to 2-night cruise: 1 night on boat + 1 night at Cat Ba Island",
            "Cat Ba town has budget guesthouses (₫300,000–500,000/night) and mid-range hotels ($50–80)",
            "Day activities: Cat Ba National Park hiking (₫60,000 entry), kayaking Lan Ha Bay ($25 for half-day)",
            "Evening: Seafood dinner at harbour restaurants in Cat Ba town (₫400,000–600,000)",
          ],
          cost: "$80–120 for Cat Ba day/night",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500–1,200 for 2 nights",
      days: [
        {
          day: "Day 1",
          title: "Seaplane or Luxury Transfer",
          items: [
            "Transfer by seaplane from Hanoi to Ha Long Bay — 45 min vs 3.5 hr road transfer (book via Vietnam Airlines)",
            "Board Paradise Elegance or Signature Halong Cruise — boutique luxury vessels",
            "Private sundeck, butler service, personal kayak guide",
            "Afternoon: Private cave tour (no groups), cliff jumping at secret spot",
            "Evening: Private candlelit dinner on the sundeck with chef's tasting menu",
          ],
          cost: "$600–800 per person for 2-night cruise (excl. seaplane)",
        },
        {
          day: "Day 2",
          title: "Private Islands & Water Activities",
          items: [
            "6:00am — Private sunrise kayak in the mist with guide — magical experience",
            "8:00am — Gourmet Vietnamese breakfast",
            "10:00am — Snorkeling in crystal-clear water with private guide",
            "12:00pm — Floating lunch at a secluded beach",
            "3:00pm — Stand-up paddleboarding",
            "7:30pm — Farewell seafood BBQ under stars on private beach",
          ],
          cost: "Included in luxury cruise package",
        },
        {
          day: "Day 3",
          title: "Early Return & Hanoi Luxury",
          items: [
            "6:30am — Early departure to catch morning seaplane or limousine back",
            "Check in to Sofitel Legend Metropole Hanoi for one night",
            "Afternoon: Spa treatment, high tea in the French colonial lounge",
            "Evening: Fine dining at La Terrasse restaurant",
          ],
          cost: "$500–800 for Hanoi luxury night",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget (2 nights)", accommodation: "Included in cruise", food: "Included in cruise", transport: "$15–25 (bus)", activities: "Mostly included", total: "$80–120 total" },
    { tier: "✨ Mid-Range (2 nights)", accommodation: "Included in cruise", food: "Included + extras", transport: "$25–40 (VIP bus)", activities: "Included + optional", total: "$200–350 total" },
    { tier: "💎 Luxury (2 nights)", accommodation: "Included (luxury cabin)", food: "All gourmet meals", transport: "$350 (seaplane)", activities: "Private guides + all", total: "$800–1,500 total" },
  ],
  mistakes: [
    { icon: "📅", title: "Booking a 1-Day Tour", desc: "Day tours only give you 4–5 hours on the bay — barely enough to see one cave. The magic of Ha Long Bay happens at dawn and dusk when day-trippers are gone. Always book 2+ nights.", color: "bg-red-50 border-red-200" },
    { icon: "☀️", title: "Going in July–August Peak Season", desc: "Peak summer brings maximum crowds, higher prices, and occasional jellyfish. March–May and September–November have the best visibility, fewer people, and lower prices.", color: "bg-orange-50 border-orange-200" },
    { icon: "🚌", title: "Taking the Cheapest Bus", desc: "The cheapest $15 buses stop at souvenir shops along the way and take 5+ hours. Spend $10 more for a limousine bus — 3.5 hrs, direct, comfortable, no stops.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🏨", title: "Ignoring Lan Ha Bay", desc: "Ha Long Bay gets 3 million visitors a year. Lan Ha Bay (30 min further) is equally stunning with almost no crowds. Ask your cruise operator to route through Lan Ha — same price.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "Set an Alarm for 5:30am", desc: "The bay at dawn in mist is the image Vietnam Tourism uses in every poster. It lasts about 45 minutes. Most travellers sleep through it. Don't be those travellers.", color: "bg-amber-50 border-amber-200" },
    { icon: "🦑", title: "Squid Fishing at Night is Free Fun", desc: "Most cruise boats offer squid fishing off the deck at 9–10pm — all equipment provided. It's surprisingly effective and the crew will cook what you catch.", color: "bg-teal-50 border-teal-200" },
    { icon: "🏊", title: "Bring Water Shoes", desc: "Cave floors are slippery, and pebble beaches are painful in bare feet. A $10 pair of water shoes makes kayaking, cave visits, and swimming dramatically more comfortable.", color: "bg-green-50 border-green-200" },
    { icon: "📸", title: "Best Photography Spot: Ti Top Island", desc: "Climb 400 steps to the top of Ti Top Island for a 360° view of the bay — the most photographed spot in Ha Long Bay. Go at 4pm for best light, not midday.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How far is Ha Long Bay from Hanoi?", a: "About 170km, taking 3.5–4 hours by road. Most cruise companies include Hanoi hotel pickup and drop-off in the package price. A direct limousine bus takes about 3.5 hours with no stops." },
    { q: "What's the best cruise line for Ha Long Bay?", a: "Budget: Bhaya Classic or Paradise Cruises entry level ($80–120 for 2 nights). Mid-range: Indochina Sails or Heritage Cruises ($200–300). Luxury: Paradise Elegance or Era Cruises ($500–800+). Always book directly or via a reputable travel agency." },
    { q: "Is Ha Long Bay worth the hype?", a: "Yes — but only if you spend at least 2 nights on the bay. Day-trippers often leave disappointed because the magic happens at dawn and dusk when the boats are quieter and the light is different." },
    { q: "What should I pack for a Ha Long Bay cruise?", a: "Light, quick-dry clothes, swimwear, water shoes, sunscreen, seasickness tablets (some people are affected by boat motion), a dry bag for valuables when kayaking, and a light jacket for evenings — it can get cool on the water." },
    { q: "Can I visit Ha Long Bay independently without a tour?", a: "Technically yes — you can take a public bus to Ha Long City and book a day boat. But 90% of travelers book a cruise package because it includes transport, accommodation, food, and activities in one price." },
  ],
  combineWith: ["hanoi-3-days", "ho-chi-minh-city-3-days", "sapa-3-days"],
  relatedSlugs: ["hanoi-3-days", "ho-chi-minh-city-3-days", "bangkok-4-days", "phuket-5-days"],
  galleryQuery: "ha long bay vietnam limestone karsts cruise junk boat",
};

export const metadata: Metadata = {
  title: "Ha Long Bay in 3 Days: Complete Cruise Guide (Budget to Luxury, 2026)",
  description: "Everything you need for Ha Long Bay — which cruise to book, how to avoid crowds, best time to visit, sunrise spots, and whether it's worth the hype (it is).",
  keywords: ["ha long bay cruise guide", "ha long bay itinerary", "ha long bay best cruise 2026", "vietnam ha long bay", "lan ha bay guide"],
  openGraph: { title: "Ha Long Bay in 3 Days: Complete Cruise Guide 2026", description: "Which cruise to book, how to avoid crowds, sunrise spots.", images: [{ url: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=1200&q=80", width: 1200, height: 630, alt: "Ha Long Bay limestone karsts emerald water Vietnam" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Ha Long Bay in 3 Days (2026)", description: "Complete cruise guide — which boat, how to avoid crowds, sunrise secrets." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/ha-long-bay-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Ha Long Bay in 3 Days: Complete Cruise Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Organization", name: "IncredibleItinerary" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Ha Long Bay 3 Days", item: "https://www.incredibleitinerary.com/blog/ha-long-bay-3-days" }] },
    { "@type": "TouristDestination", name: "Ha Long Bay, Vietnam", description: "UNESCO World Heritage Site with 1,600 limestone islands and islets in the Gulf of Tonkin, Vietnam." },
  ],
};

export default function HaLongBayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
