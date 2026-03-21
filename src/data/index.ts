export const destinations = [
  {
    id: "kashmir",
    name: "Kashmir",
    tag: "Heaven on Earth",
    description: "Dal Lake houseboats, Gulmarg snow & Pahalgam pine forests",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    alt: "Dal Lake Kashmir houseboat at sunrise",
    featured: true,
    href: "/blog/kashmir-6-days",
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle",
    tag: "History · Culture",
    description: "Delhi · Agra · Jaipur — Taj Mahal & iconic Mughal heritage",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&q=80",
    alt: "Taj Mahal at sunrise — Agra",
    featured: false,
    href: "/blog/golden-triangle-7-days",
  },
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    tag: "Heritage · Desert · Royalty",
    description: "Palaces, forts & golden sands across Jaipur, Jodhpur & Udaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=80",
    alt: "Amber Fort, Jaipur — Royal Rajasthan",
    featured: false,
    href: "/blog/rajasthan-7-days",
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    tag: "Nature · Wellness",
    description: "Houseboat stays, Munnar tea gardens & Ayurvedic retreats",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80",
    alt: "Kerala backwaters houseboat",
    featured: false,
    href: "/blog/kerala-5-days",
  },
];

export type PackageCategory = "all" | "cultural" | "adventure" | "luxury" | "budget";

export const packages = [
  {
    id: "royal-rajasthan",
    name: "Royal Rajasthan Circuit",
    region: "Rajasthan",
    description:
      "Journey through Jaipur's pink palaces, Udaipur's lake city romance, Jodhpur's blue streets, and Jaisalmer's golden dunes.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=80",
    alt: "Amber Fort Jaipur",
    duration: "10 Days",
    accommodation: "4★ Hotels",
    groupType: "Private Tour",
    price: "₹45,000",
    priceNote: "/ person",
    badge: "Most Popular",
    categories: ["cultural", "luxury"] as PackageCategory[],
    featured: true,
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Classic",
    region: "Delhi · Agra · Jaipur",
    description:
      "India's most celebrated circuit — the Taj Mahal at sunrise, Amber Fort on elephant-back, and Old Delhi's bazaars.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    alt: "Taj Mahal Agra",
    duration: "7 Days",
    accommodation: "3★ Hotels",
    groupType: "AC Car",
    price: "₹28,000",
    priceNote: "/ person",
    badge: null,
    categories: ["cultural", "budget"] as PackageCategory[],
    featured: false,
  },
  {
    id: "himalayan-serenity",
    name: "Himalayan Serenity",
    region: "Himalaya",
    description:
      "From Rishikesh's yoga banks to the monasteries of Leh and the spiritual heights of Gangotri — a journey inward.",
    image:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=700&q=80",
    alt: "Himalayan mountains Leh",
    duration: "12 Days",
    accommodation: "Camps & Hotels",
    groupType: "Yoga Included",
    price: "₹52,000",
    priceNote: "/ person",
    badge: null,
    categories: ["adventure"] as PackageCategory[],
    featured: false,
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Wellness Retreat",
    region: "Kerala",
    description:
      "Float through the backwaters on a private houseboat, explore tea plantations and unwind at an Ayurvedic spa.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80",
    alt: "Kerala backwaters",
    duration: "8 Days",
    accommodation: "Boutique Resorts",
    groupType: "Ayurveda Included",
    price: "₹38,000",
    priceNote: "/ person",
    badge: null,
    categories: ["luxury", "adventure"] as PackageCategory[],
    featured: false,
  },
  {
    id: "varanasi-ganga",
    name: "Varanasi & the Ganga",
    region: "Uttar Pradesh",
    description:
      "Witness the ancient Ganga Aarti, boat at dawn past ghats, and trace the spiritual heartbeat of India's holiest city.",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=700&q=80",
    alt: "Varanasi Ganga ghats",
    duration: "5 Days",
    accommodation: "Heritage Hotels",
    groupType: "Private Guide",
    price: "₹18,000",
    priceNote: "/ person",
    badge: null,
    categories: ["cultural", "budget"] as PackageCategory[],
    featured: false,
  },
  {
    id: "luxury-north",
    name: "Luxury North India",
    region: "Delhi · Agra · Rajasthan",
    description:
      "Palace hotels, private art tours, chef-curated dinners, and helicopter transfers — India at its most opulent.",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=700&q=80",
    alt: "Luxury palace hotel India",
    duration: "14 Days",
    accommodation: "5★ Palace Hotels",
    groupType: "All Inclusive",
    price: "₹1,80,000",
    priceNote: "/ person",
    badge: "Premium",
    categories: ["luxury"] as PackageCategory[],
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    text: "They didn't just plan a trip — they planned the trip of my life. Every hotel, every guide, every hidden restaurant was perfect. I felt like royalty travelling through Rajasthan.",
    author: "Priya Sharma",
    trip: "Royal Rajasthan Circuit · Feb 2026",
    initials: "PS",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    text: "As a solo traveller, I was nervous, but IncredibleItinerary made everything seamless. The support alone is worth it — they responded to emails in minutes, even at midnight.",
    author: "Anika Müller",
    trip: "Golden Triangle + Varanasi · Jan 2026",
    initials: "AM",
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    text: "We had a family of six with completely different interests — and somehow they built an itinerary everyone loved. The kids still talk about the elephant ride at Amber Fort.",
    author: "Rahul Mehra",
    trip: "Custom Family Trip · Dec 2025",
    initials: "RM",
    rating: 5,
    featured: false,
  },
];

export const services = [
  {
    icon: "📋",
    title: "Personalised Itinerary Planning",
    description:
      "Day-by-day plans tailored to your travel style, pace, interests, and exact budget — no generic templates, ever.",
  },
  {
    icon: "📖",
    title: "Expert Travel Guides",
    description:
      "Destination guides on best-time-to-visit, local food, hidden gems, and practical tips for confident exploration.",
  },
  {
    icon: "💸",
    title: "Budget-Friendly Options",
    description:
      "Stretch every rupee further. We know India's best-value stays, transport, and experiences at every budget level.",
  },
  {
    icon: "🎭",
    title: "Cultural Experiences",
    description:
      "Cooking classes, folk performances, village walks, craft workshops — authentic India beyond the tourist traps.",
  },
];

export const howItWorks = [
  {
    num: "01",
    title: "Tell Us Your Dream",
    description:
      "Share your destinations, travel style, budget, and dates via our inquiry form or email.",
  },
  {
    num: "02",
    title: "We Craft Your Plan",
    description:
      "Our travel experts build a bespoke, day-by-day itinerary matched exactly to your preferences.",
  },
  {
    num: "03",
    title: "Refine Together",
    description:
      "We revise until every detail is perfect — hotels, guides, transfers, experiences, all locked in.",
  },
  {
    num: "04",
    title: "Travel Worry-Free",
    description:
      "Pack your bags. Our ground team and 24/7 email support ensure a seamless, stress-free journey.",
  },
];

export const whyUsPoints = [
  {
    icon: "🗺",
    title: "100% Personalised Itineraries",
    description:
      "No template tours. We build your trip around your exact preferences, pace, and budget from scratch.",
  },
  {
    icon: "🤝",
    title: "Trusted Local Network",
    description:
      "Hand-picked hotels, verified guides, and reliable transfers — built over years of ground-level relationships.",
  },
  {
    icon: "💬",
    title: "Email Support, Always",
    description:
      "From planning to landing back home — no call centres, just real people on email and phone.",
  },
  {
    icon: "💰",
    title: "Any Budget, Any Style",
    description:
      "Backpacker-friendly or heritage palace stays — we find the best value at every price point.",
  },
];

export const filterCategories: { label: string; value: PackageCategory }[] = [
  { label: "All", value: "all" },
  { label: "Cultural", value: "cultural" },
  { label: "Adventure", value: "adventure" },
  { label: "Luxury", value: "luxury" },
  { label: "Budget", value: "budget" },
];
