"use client";

import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

/* ─────────────────────── Types ─────────────────────── */

type DestinationType =
  | "beach"
  | "mountains"
  | "city"
  | "cultural"
  | "winter-cold"
  | "tropical"
  | "safari"
  | "desert";

type DurationType =
  | "weekend"
  | "short"
  | "week"
  | "extended"
  | "long";

type SeasonType = "summer" | "winter" | "monsoon" | "spring";

type TravelStyleType = "backpacker" | "comfort" | "business" | "luxury";

type SpecialNeed = "baby" | "photography" | "hiking" | "watersports" | "wintersports";

type Priority = "essential" | "recommended" | "optional";

interface PackingItem {
  id: string;
  name: string;
  priority: Priority;
  checked: boolean;
}

interface PackingCategory {
  id: string;
  label: string;
  emoji: string;
  items: PackingItem[];
}

/* ─────────────────────── Item Database ─────────────────────── */

// Base clothing items — always included
const BASE_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-tshirts", name: "T-shirts / casual tops", priority: "essential" },
  { id: "cl-bottoms", name: "Trousers / jeans / shorts", priority: "essential" },
  { id: "cl-underwear", name: "Underwear (1 per day + 2 extras)", priority: "essential" },
  { id: "cl-socks", name: "Socks (1 pair per day + 2 extras)", priority: "essential" },
  { id: "cl-sleepwear", name: "Sleepwear / pyjamas", priority: "recommended" },
  { id: "cl-belt", name: "Belt", priority: "recommended" },
  { id: "cl-cap", name: "Cap / hat for sun protection", priority: "recommended" },
  { id: "cl-sunglasses", name: "Sunglasses (UV protection)", priority: "recommended" },
  { id: "cl-sneakers", name: "Comfortable walking shoes / sneakers", priority: "essential" },
  { id: "cl-sandals", name: "Casual sandals / slip-ons", priority: "recommended" },
  { id: "cl-laundry-bag", name: "Laundry bag / drawstring bag", priority: "optional" },
];

const BEACH_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-swimwear", name: "Swimwear / swimsuit (2 sets)", priority: "essential" },
  { id: "cl-rash-guard", name: "Rash guard / swim shirt (UV protection)", priority: "recommended" },
  { id: "cl-beach-cover", name: "Beach cover-up / sarong", priority: "recommended" },
  { id: "cl-flipflops", name: "Flip flops / beach sandals", priority: "essential" },
  { id: "cl-beach-towel", name: "Quick-dry microfibre beach towel", priority: "recommended" },
  { id: "cl-light-dress", name: "Light summer dress / linen shirt", priority: "recommended" },
  { id: "cl-waterproof-bag", name: "Waterproof bag / dry bag for beach", priority: "recommended" },
];

const MOUNTAIN_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-layers", name: "Moisture-wicking base layer tops", priority: "essential" },
  { id: "cl-fleece", name: "Fleece / mid-layer jacket", priority: "essential" },
  { id: "cl-waterproof-jacket", name: "Waterproof & windproof outer jacket", priority: "essential" },
  { id: "cl-trekking-pants", name: "Trekking / quick-dry trousers", priority: "essential" },
  { id: "cl-hiking-socks", name: "Wool or cushioned hiking socks (3+ pairs)", priority: "essential" },
  { id: "cl-hiking-boots", name: "Sturdy ankle-support hiking boots", priority: "essential" },
  { id: "cl-gaiters", name: "Gaiters (for muddy / snowy trails)", priority: "optional" },
  { id: "cl-buff", name: "Buff / neck gaiter / balaclava", priority: "recommended" },
  { id: "cl-light-gloves", name: "Light liner gloves", priority: "recommended" },
];

const WINTER_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-thermal-top", name: "Thermal / merino wool base layer tops", priority: "essential" },
  { id: "cl-thermal-bottom", name: "Thermal / long-john base layer bottoms", priority: "essential" },
  { id: "cl-heavy-jacket", name: "Heavy insulated / down jacket", priority: "essential" },
  { id: "cl-gloves-thick", name: "Waterproof insulated gloves / mittens", priority: "essential" },
  { id: "cl-scarf", name: "Warm scarf / muffler", priority: "essential" },
  { id: "cl-beanie", name: "Warm beanie / winter hat", priority: "essential" },
  { id: "cl-wool-socks", name: "Thick wool socks (4+ pairs)", priority: "essential" },
  { id: "cl-boots-winter", name: "Waterproof insulated winter boots", priority: "essential" },
  { id: "cl-hand-warmers", name: "Disposable hand warmers (pack of 10)", priority: "recommended" },
  { id: "cl-snow-pants", name: "Waterproof snow / ski trousers", priority: "recommended" },
];

const TROPICAL_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-linen-tops", name: "Linen / cotton breathable tops (5+)", priority: "essential" },
  { id: "cl-light-shorts", name: "Light shorts / linen trousers", priority: "essential" },
  { id: "cl-rain-poncho", name: "Compact rain poncho or light jacket", priority: "essential" },
  { id: "cl-ventilated-shoes", name: "Ventilated / mesh walking shoes", priority: "recommended" },
  { id: "cl-insect-clothing", name: "Long-sleeve shirt for evenings (mosquitoes)", priority: "essential" },
];

const SAFARI_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-neutral-tops", name: "Neutral-coloured shirts (khaki / olive / beige)", priority: "essential" },
  { id: "cl-neutral-pants", name: "Neutral-coloured trousers / cargo pants", priority: "essential" },
  { id: "cl-wide-hat", name: "Wide-brim sun hat", priority: "essential" },
  { id: "cl-safari-boots", name: "Closed-toe sturdy shoes / bush boots", priority: "essential" },
  { id: "cl-fleece-eve", name: "Fleece or light layer for cool mornings/evenings", priority: "recommended" },
  { id: "cl-no-white", name: "Avoid white / bright colours (attract insects)", priority: "essential" },
];

const DESERT_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-loose-white", name: "Loose, light-coloured long-sleeve tops", priority: "essential" },
  { id: "cl-loose-pants", name: "Loose breathable trousers (sun & sand protection)", priority: "essential" },
  { id: "cl-desert-hat", name: "Wide-brim hat with neck flap", priority: "essential" },
  { id: "cl-light-scarf-desert", name: "Lightweight scarf / shemagh (dust & sun)", priority: "essential" },
  { id: "cl-desert-boots", name: "Closed-toe sand-appropriate footwear", priority: "essential" },
  { id: "cl-warm-eve-layer", name: "Warm layer for cold desert nights", priority: "recommended" },
];

const CITY_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-smart-casual", name: "Smart-casual outfit for restaurants / attractions", priority: "recommended" },
  { id: "cl-city-shoes", name: "Comfortable city walking shoes (flat sole)", priority: "essential" },
  { id: "cl-light-layer-city", name: "Light layer / cardigan for air-conditioned venues", priority: "recommended" },
];

const CULTURAL_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-modest-top", name: "Modest full-sleeve top for religious sites", priority: "essential" },
  { id: "cl-modest-bottom", name: "Modest trousers / long skirt for temples / mosques", priority: "essential" },
  { id: "cl-scarf-temple", name: "Head-covering scarf (for religious sites)", priority: "essential" },
  { id: "cl-slip-shoes", name: "Easy slip-on shoes (removed at many sites)", priority: "recommended" },
];

const BUSINESS_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-formal-shirt", name: "Formal shirts / blouses (2–3)", priority: "essential" },
  { id: "cl-formal-trousers", name: "Formal trousers / skirt", priority: "essential" },
  { id: "cl-blazer", name: "Blazer / suit jacket", priority: "essential" },
  { id: "cl-formal-shoes", name: "Formal leather shoes / heels", priority: "essential" },
  { id: "cl-tie", name: "Tie / formal accessories", priority: "recommended" },
  { id: "cl-garment-bag", name: "Garment bag / suit carrier", priority: "recommended" },
];

const LUXURY_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-evening-wear", name: "Evening / cocktail attire", priority: "recommended" },
  { id: "cl-resort-wear", name: "Resort / smart-casual day outfits", priority: "recommended" },
  { id: "cl-good-watch", name: "Watch / fine jewellery", priority: "optional" },
];

// Long-trip extra clothing
const LONG_TRIP_CLOTHING: Omit<PackingItem, "checked">[] = [
  { id: "cl-extra-tops", name: "Extra tops (5+ variety)", priority: "recommended" },
  { id: "cl-compression-bags", name: "Compression packing cubes / vacuum bags", priority: "recommended" },
  { id: "cl-portable-iron", name: "Travel clothes steamer / mini iron", priority: "optional" },
];

/* ─── Toiletries ─── */

const BASE_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-toothbrush", name: "Toothbrush (travel-size or foldable)", priority: "essential" },
  { id: "to-toothpaste", name: "Toothpaste (100ml or less for carry-on)", priority: "essential" },
  { id: "to-shampoo", name: "Shampoo / 2-in-1 (travel bottle)", priority: "essential" },
  { id: "to-conditioner", name: "Conditioner or leave-in spray", priority: "recommended" },
  { id: "to-body-wash", name: "Body wash / soap bar", priority: "essential" },
  { id: "to-deodorant", name: "Deodorant / antiperspirant", priority: "essential" },
  { id: "to-moisturiser", name: "Face & body moisturiser", priority: "recommended" },
  { id: "to-razor", name: "Razor + shaving cream / electric shaver", priority: "recommended" },
  { id: "to-sunscreen", name: "Broad-spectrum SPF 50+ sunscreen", priority: "essential" },
  { id: "to-lip-balm", name: "Lip balm with SPF", priority: "recommended" },
  { id: "to-hair-ties", name: "Hair ties / clips / comb", priority: "recommended" },
  { id: "to-nail-clipper", name: "Nail clippers / nail file", priority: "recommended" },
  { id: "to-cotton-buds", name: "Cotton buds / cotton rounds", priority: "optional" },
  { id: "to-toilet-paper", name: "Small pack of tissues / toilet paper", priority: "recommended" },
  { id: "to-hand-sanitizer", name: "Hand sanitiser (100ml)", priority: "essential" },
  { id: "to-wet-wipes", name: "Antibacterial wet wipes", priority: "recommended" },
  { id: "to-period-products", name: "Period / menstrual hygiene products (as needed)", priority: "essential" },
];

const BEACH_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-reef-sunscreen", name: "Reef-safe sunscreen SPF 50+ (large tube)", priority: "essential" },
  { id: "to-after-sun", name: "After-sun lotion / aloe vera gel", priority: "recommended" },
  { id: "to-waterproof-pouch", name: "Waterproof toiletries pouch / case", priority: "recommended" },
];

const TROPICAL_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-insect-repellent", name: "DEET insect repellent (tropical strength)", priority: "essential" },
  { id: "to-antifungal", name: "Antifungal powder / cream (humidity)", priority: "recommended" },
  { id: "to-cooling-spray", name: "Cooling / refreshing face mist spray", priority: "optional" },
];

const SAFARI_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-safari-repellent", name: "Strong DEET insect repellent (100ml)", priority: "essential" },
  { id: "to-no-perfume", name: "Fragrance-free toiletries (scents attract insects)", priority: "recommended" },
];

const DESERT_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-high-spf", name: "Very high SPF sunscreen + frequent reapplication", priority: "essential" },
  { id: "to-eye-drops", name: "Moisturising eye drops (dust & dry air)", priority: "recommended" },
  { id: "to-lip-balm-spf", name: "Heavy-duty lip balm SPF (chapping)", priority: "essential" },
  { id: "to-dustproof-bag", name: "Dustproof zip-lock bags for toiletries", priority: "recommended" },
];

const LUXURY_TOILETRIES: Omit<PackingItem, "checked">[] = [
  { id: "to-skincare", name: "Full skincare routine (serum, toner, eye cream)", priority: "recommended" },
  { id: "to-perfume", name: "Fragrance / travel-size perfume", priority: "optional" },
];

/* ─── Medications & First Aid ─── */

const BASE_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-paracetamol", name: "Paracetamol / ibuprofen (fever & pain relief)", priority: "essential" },
  { id: "md-antihistamine", name: "Antihistamine tablets (allergies)", priority: "recommended" },
  { id: "md-antidiarrheal", name: "Anti-diarrhoeal medication (Imodium / Loperamide)", priority: "recommended" },
  { id: "md-antacid", name: "Antacid / indigestion tablets", priority: "recommended" },
  { id: "md-prescription", name: "Personal prescription medications (30 day supply)", priority: "essential" },
  { id: "md-prescription-note", name: "Doctor's prescription letter for medications", priority: "recommended" },
  { id: "md-plasters", name: "Adhesive plasters / bandaids (assorted sizes)", priority: "essential" },
  { id: "md-antiseptic", name: "Antiseptic cream / wipes (Savlon / Dettol)", priority: "recommended" },
  { id: "md-gauze", name: "Gauze pads + medical tape", priority: "recommended" },
  { id: "md-tweezers", name: "Tweezers + small scissors", priority: "recommended" },
  { id: "md-thermometer", name: "Digital travel thermometer", priority: "recommended" },
  { id: "md-motion-sickness", name: "Motion sickness tablets (Dramamine / Avomine)", priority: "optional" },
  { id: "md-rehydration", name: "Oral rehydration salts (ORS sachets)", priority: "recommended" },
];

const MOUNTAIN_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-altitude", name: "Altitude sickness pills (Acetazolamide / Diamox)", priority: "essential" },
  { id: "md-blister-kit", name: "Blister prevention pads / Compeed plasters", priority: "essential" },
  { id: "md-knee-support", name: "Knee support brace / ankle support bandage", priority: "recommended" },
  { id: "md-muscle-gel", name: "Muscle / joint pain relief gel (Voltaren etc.)", priority: "recommended" },
  { id: "md-sun-lip", name: "Zinc oxide lip balm (UV + windburn)", priority: "recommended" },
];

const TROPICAL_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-malaria", name: "Malaria prophylaxis (consult doctor before trip)", priority: "essential" },
  { id: "md-probiotic", name: "Probiotic supplements (gut health in tropical regions)", priority: "recommended" },
  { id: "md-electrolytes", name: "Electrolyte tablets / sachets (heat & sweating)", priority: "recommended" },
  { id: "md-hydrocortisone", name: "Hydrocortisone cream (insect bites & rashes)", priority: "recommended" },
];

const SAFARI_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-malaria-sf", name: "Malaria prophylaxis tablets (doctor prescribed)", priority: "essential" },
  { id: "md-yellow-fever", name: "Yellow fever vaccination certificate", priority: "essential" },
  { id: "md-safari-aid", name: "Comprehensive first aid kit (remote areas)", priority: "essential" },
];

const BABY_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-baby-paracetamol", name: "Baby / infant paracetamol / Calpol", priority: "essential" },
  { id: "md-baby-rash", name: "Nappy rash cream / barrier cream", priority: "essential" },
  { id: "md-baby-teething", name: "Teething gel (if applicable)", priority: "recommended" },
  { id: "md-baby-thermometer", name: "Baby digital thermometer", priority: "essential" },
  { id: "md-baby-saline", name: "Baby saline nasal drops", priority: "recommended" },
];

const HIKING_MEDS: Omit<PackingItem, "checked">[] = [
  { id: "md-blister-hike", name: "Blister plasters / moleskin pads", priority: "essential" },
  { id: "md-compression-bandage", name: "Compression / elastic bandage (ankle sprains)", priority: "essential" },
  { id: "md-emergency-whistle", name: "Emergency whistle + signal mirror (safety)", priority: "recommended" },
  { id: "md-muscle-rub", name: "Muscle pain relief cream / spray", priority: "recommended" },
];

/* ─── Electronics ─── */

const BASE_ELECTRONICS: Omit<PackingItem, "checked">[] = [
  { id: "el-phone", name: "Smartphone (fully charged before travel)", priority: "essential" },
  { id: "el-phone-charger", name: "Phone charger + cable", priority: "essential" },
  { id: "el-power-bank", name: "Power bank / portable charger (10,000+ mAh)", priority: "essential" },
  { id: "el-travel-adapter", name: "Universal travel adapter / plug converter", priority: "essential" },
  { id: "el-earphones", name: "Earphones / earbuds (noise-cancelling preferred)", priority: "recommended" },
  { id: "el-laptop", name: "Laptop / tablet", priority: "optional" },
  { id: "el-laptop-charger", name: "Laptop charger + bag", priority: "optional" },
  { id: "el-surge-protector", name: "Multi-port USB travel surge protector", priority: "recommended" },
];

const BUSINESS_ELECTRONICS: Omit<PackingItem, "checked">[] = [
  { id: "el-laptop-biz", name: "Laptop / ultrabook (essential for work)", priority: "essential" },
  { id: "el-laptop-biz-charger", name: "Laptop charger + spare USB-C cable", priority: "essential" },
  { id: "el-portable-mouse", name: "Portable wireless mouse", priority: "recommended" },
  { id: "el-hdmi", name: "HDMI / USB-C to display adapter (presentations)", priority: "recommended" },
  { id: "el-noise-cancel", name: "Noise-cancelling headphones (flights / co-working)", priority: "essential" },
];

const PHOTO_ELECTRONICS: Omit<PackingItem, "checked">[] = [
  { id: "el-camera", name: "DSLR / mirrorless camera body", priority: "essential" },
  { id: "el-lenses", name: "Camera lenses (wide + telephoto)", priority: "essential" },
  { id: "el-memory-cards", name: "Memory cards (64GB+ × 2)", priority: "essential" },
  { id: "el-camera-charger", name: "Camera charger + spare battery", priority: "essential" },
  { id: "el-camera-bag", name: "Padded camera bag / insert", priority: "essential" },
  { id: "el-tripod", name: "Travel tripod or gorilla pod", priority: "recommended" },
  { id: "el-filters", name: "ND / polarising filters", priority: "recommended" },
  { id: "el-lens-cloth", name: "Lens cleaning kit (cloth, brush, fluid)", priority: "recommended" },
  { id: "el-sd-reader", name: "SD card reader for laptop backup", priority: "recommended" },
  { id: "el-drone", name: "Travel drone + extra batteries + ND filters", priority: "optional" },
];

const WATER_SPORTS_ELECTRONICS: Omit<PackingItem, "checked">[] = [
  { id: "el-underwater-cam", name: "Waterproof underwater camera / GoPro", priority: "recommended" },
  { id: "el-waterproof-case", name: "Waterproof phone case / dry bag", priority: "essential" },
];

/* ─── Documents ─── */

const BASE_DOCS: Omit<PackingItem, "checked">[] = [
  { id: "dc-passport", name: "Passport (valid 6+ months beyond return date)", priority: "essential" },
  { id: "dc-visa", name: "Visa / e-visa printout", priority: "essential" },
  { id: "dc-flight-tickets", name: "Flight tickets / boarding pass printout", priority: "essential" },
  { id: "dc-hotel-confirm", name: "Hotel / accommodation confirmation printouts", priority: "essential" },
  { id: "dc-travel-insurance", name: "Travel insurance policy + emergency contact card", priority: "essential" },
  { id: "dc-id-card", name: "National ID card / driving licence", priority: "essential" },
  { id: "dc-emergency-contacts", name: "Emergency contacts list (written on paper)", priority: "essential" },
  { id: "dc-cash", name: "Cash in local & home currency (small denominations)", priority: "essential" },
  { id: "dc-credit-cards", name: "Credit / debit cards (2 different networks)", priority: "essential" },
  { id: "dc-copies", name: "Photocopies of all key documents (kept separate)", priority: "essential" },
  { id: "dc-digital-copies", name: "Digital copies of documents (cloud / email)", priority: "recommended" },
  { id: "dc-itinerary", name: "Printed trip itinerary & tour confirmations", priority: "recommended" },
  { id: "dc-health-card", name: "Health insurance card + blood group card", priority: "recommended" },
  { id: "dc-vaccination", name: "Vaccination certificates (Yellow fever, COVID etc.)", priority: "recommended" },
  { id: "dc-currency-card", name: "Forex / travel money card (multi-currency)", priority: "recommended" },
];

const BUSINESS_DOCS: Omit<PackingItem, "checked">[] = [
  { id: "dc-business-cards", name: "Business cards (50+ printed)", priority: "essential" },
  { id: "dc-presentations", name: "Presentations / reports on USB + laptop + cloud", priority: "essential" },
  { id: "dc-nda", name: "NDA / contract documents (as required)", priority: "optional" },
  { id: "dc-work-letter", name: "Company invitation / work letter (for visa purposes)", priority: "recommended" },
];

/* ─── Bags & Organisation ─── */

const BASE_BAGS: Omit<PackingItem, "checked">[] = [
  { id: "bg-main-luggage", name: "Main suitcase / travel backpack", priority: "essential" },
  { id: "bg-daypack", name: "Day backpack / day bag (20–30L)", priority: "essential" },
  { id: "bg-packing-cubes", name: "Packing cubes (set of 4–6)", priority: "recommended" },
  { id: "bg-toiletries-bag", name: "Toiletries bag / hanging wash bag", priority: "recommended" },
  { id: "bg-cable-organiser", name: "Cable / tech organiser pouch", priority: "recommended" },
  { id: "bg-money-belt", name: "Hidden money belt / neck wallet (anti-theft)", priority: "recommended" },
  { id: "bg-tote", name: "Reusable tote / fold-up shopping bag", priority: "optional" },
  { id: "bg-luggage-lock", name: "TSA-approved luggage lock (× 2)", priority: "recommended" },
  { id: "bg-luggage-tag", name: "Luggage tag with contact info", priority: "essential" },
  { id: "bg-luggage-scale", name: "Portable luggage scale", priority: "optional" },
];

const BACKPACKER_BAGS: Omit<PackingItem, "checked">[] = [
  { id: "bg-travel-towel", name: "Compact quick-dry travel towel", priority: "essential" },
  { id: "bg-compression-bags", name: "Compression / vacuum packing bags", priority: "recommended" },
  { id: "bg-rain-cover", name: "Backpack rain cover", priority: "essential" },
  { id: "bg-carabiner", name: "Carabiner clips (× 4) for attaching gear", priority: "optional" },
  { id: "bg-small-padlock", name: "Small padlocks for hostel lockers", priority: "essential" },
];

const LUXURY_BAGS: Omit<PackingItem, "checked">[] = [
  { id: "bg-luxury-case", name: "Hard-shell premium luggage (× 2)", priority: "recommended" },
  { id: "bg-jewelry-roll", name: "Jewellery roll / valuables case", priority: "optional" },
];

/* ─── Food & Snacks ─── */

const BASE_SNACKS: Omit<PackingItem, "checked">[] = [
  { id: "fn-energy-bars", name: "Protein / energy bars (×10)", priority: "recommended" },
  { id: "fn-nuts", name: "Mixed nuts / trail mix (sealed packs)", priority: "recommended" },
  { id: "fn-instant-noodles", name: "Instant noodles / oatmeal packets", priority: "optional" },
  { id: "fn-water-bottle", name: "Refillable water bottle (1L BPA-free)", priority: "essential" },
  { id: "fn-electrolyte-drink", name: "Electrolyte drink mix / sachets", priority: "recommended" },
  { id: "fn-water-filter", name: "Water purification tablets or filter straw", priority: "optional" },
  { id: "fn-chocolate", name: "Chocolate / biscuits for long journeys", priority: "optional" },
  { id: "fn-spices", name: "Small spice / condiment kit (for self-catering)", priority: "optional" },
];

const LONG_SNACKS: Omit<PackingItem, "checked">[] = [
  { id: "fn-coffee", name: "Instant coffee / tea sachets", priority: "optional" },
  { id: "fn-dried-fruit", name: "Dried fruits (dates, apricots, mango)", priority: "recommended" },
  { id: "fn-protein-powder", name: "Protein powder travel sachets", priority: "optional" },
  { id: "fn-hot-sauce", name: "Small hot sauce / chilli flakes bottle", priority: "optional" },
];

const BABY_SNACKS: Omit<PackingItem, "checked">[] = [
  { id: "fn-baby-food", name: "Baby food pouches / formula (enough for journey + 2 extra days)", priority: "essential" },
  { id: "fn-baby-snacks", name: "Toddler snacks (puffs, rice cakes)", priority: "essential" },
  { id: "fn-sippy-cup", name: "Sippy cup / baby water bottle", priority: "essential" },
];

/* ─── Entertainment ─── */

const BASE_ENTERTAINMENT: Omit<PackingItem, "checked">[] = [
  { id: "en-book", name: "Book / e-reader (Kindle loaded with titles)", priority: "recommended" },
  { id: "en-journal", name: "Travel journal / notebook + pen", priority: "optional" },
  { id: "en-games", name: "Card game / travel board game", priority: "optional" },
  { id: "en-downloads", name: "Offline movies / shows / podcasts downloaded", priority: "recommended" },
  { id: "en-spotify", name: "Offline music / playlists downloaded", priority: "optional" },
  { id: "en-language-app", name: "Language learning app (offline mode)", priority: "optional" },
  { id: "en-guidebook", name: "Destination guidebook or downloaded PDF guide", priority: "optional" },
];

const LONG_ENTERTAINMENT: Omit<PackingItem, "checked">[] = [
  { id: "en-tablet", name: "Tablet loaded with content for long haul", priority: "recommended" },
  { id: "en-travel-pillow", name: "Inflatable travel neck pillow", priority: "recommended" },
  { id: "en-eye-mask", name: "Sleep eye mask + earplugs (flights)", priority: "recommended" },
];

const BABY_ENTERTAINMENT: Omit<PackingItem, "checked">[] = [
  { id: "en-baby-toys", name: "Small familiar toys (2–3, not noisy)", priority: "essential" },
  { id: "en-sticker-book", name: "Sticker book / colouring kit", priority: "recommended" },
  { id: "en-tablet-kids", name: "Kids tablet with downloaded content + headphones", priority: "recommended" },
  { id: "en-blanket", name: "Small comfort blanket / lovey toy", priority: "recommended" },
];

/* ─── Destination Specific ─── */

const DESTINATION_SPECIFIC: Record<DestinationType, Omit<PackingItem, "checked">[]> = {
  beach: [
    { id: "ds-beach-umbrella", name: "Compact beach umbrella / pop-up shade tent", priority: "recommended" },
    { id: "ds-snorkel", name: "Snorkel, mask & fins set", priority: "optional" },
    { id: "ds-underwater-camera-ds", name: "Underwater camera case / GoPro", priority: "optional" },
    { id: "ds-sand-mat", name: "Sand-free beach mat", priority: "optional" },
    { id: "ds-coral-shoes", name: "Water shoes / coral reef shoes", priority: "recommended" },
    { id: "ds-sea-sickness", name: "Sea-sickness bands / tablets (boat trips)", priority: "optional" },
    { id: "ds-waterproof-watch", name: "Waterproof watch / waterproof phone case", priority: "recommended" },
    { id: "ds-insect-eve", name: "Insect repellent for evenings near beach", priority: "recommended" },
  ],
  mountains: [
    { id: "ds-trekking-poles", name: "Collapsible trekking / walking poles", priority: "optional" },
    { id: "ds-headlamp", name: "Head torch / headlamp + spare batteries", priority: "essential" },
    { id: "ds-map-compass", name: "Offline maps (downloaded) or physical trail map", priority: "essential" },
    { id: "ds-bear-spray", name: "Bear spray / wildlife deterrent (if relevant)", priority: "optional" },
    { id: "ds-emergency-blanket", name: "Emergency space / mylar blanket", priority: "essential" },
    { id: "ds-water-filter-m", name: "Water filter bottle or purification tablets", priority: "recommended" },
    { id: "ds-fire-starter", name: "Waterproof matches / lighter", priority: "recommended" },
    { id: "ds-whistle-m", name: "Emergency whistle", priority: "essential" },
    { id: "ds-sunscreen-glacier", name: "High-altitude SPF 60+ lip balm & sunscreen", priority: "essential" },
    { id: "ds-gps-watch", name: "GPS watch / altimeter", priority: "optional" },
  ],
  city: [
    { id: "ds-city-map", name: "Offline city map (downloaded on phone)", priority: "essential" },
    { id: "ds-metro-card", name: "Metro / transport card or ticket wallet", priority: "recommended" },
    { id: "ds-local-sim", name: "Local SIM card or international eSIM", priority: "recommended" },
    { id: "ds-anti-theft-bag", name: "Anti-theft day bag with cut-proof straps", priority: "recommended" },
    { id: "ds-umbrella-city", name: "Compact folding umbrella", priority: "recommended" },
    { id: "ds-portable-wifi", name: "Pocket WiFi device or international data plan", priority: "recommended" },
    { id: "ds-comfortable-insoles", name: "Gel insoles for cobblestones / long walking days", priority: "optional" },
  ],
  cultural: [
    { id: "ds-guidebook-culture", name: "Cultural etiquette guide / app", priority: "recommended" },
    { id: "ds-temple-socks", name: "Socks (required at many temples & mosques)", priority: "essential" },
    { id: "ds-scarf-dupatta", name: "Dupatta / stole for covering up at sites", priority: "essential" },
    { id: "ds-small-bag-culture", name: "Small bag for day trips to historical sites", priority: "recommended" },
    { id: "ds-translation-app", name: "Translation app (offline) for local interactions", priority: "recommended" },
    { id: "ds-loose-change", name: "Loose change / small notes for temples & donations", priority: "recommended" },
  ],
  "winter-cold": [
    { id: "ds-boot-grips", name: "Ice / snow traction grips (Yaktrax) for boots", priority: "recommended" },
    { id: "ds-ski-goggles", name: "Snow / ski goggles", priority: "optional" },
    { id: "ds-ski-pass", name: "Ski pass wallet / holder", priority: "optional" },
    { id: "ds-hot-water-bottle", name: "Compact hot water bottle", priority: "optional" },
    { id: "ds-car-winter-kit", name: "Car winter kit (if driving: de-icer, ice scraper)", priority: "optional" },
    { id: "ds-snow-boots-confirm", name: "Waterproof snow boots (double-check insulation)", priority: "essential" },
    { id: "ds-vaseline", name: "Petroleum jelly / barrier balm (windburn)", priority: "recommended" },
  ],
  tropical: [
    { id: "ds-mosquito-net", name: "Portable mosquito net (for basic accommodation)", priority: "recommended" },
    { id: "ds-coconut-water", name: "Electrolyte sachets for humidity & sweating", priority: "recommended" },
    { id: "ds-stomach-meds", name: "Anti-diarrhoeal meds (street food caution)", priority: "essential" },
    { id: "ds-travel-umbrella-rain", name: "Compact umbrella or rain poncho (tropical showers)", priority: "essential" },
    { id: "ds-quick-dry-towel", name: "Quick-dry towel (humidity + water activities)", priority: "recommended" },
    { id: "ds-money-waterproof", name: "Waterproof pouch for phone & cash (humidity)", priority: "recommended" },
  ],
  safari: [
    { id: "ds-binoculars", name: "Compact binoculars (8×42 or 10×42)", priority: "essential" },
    { id: "ds-wildlife-book", name: "Wildlife identification field guide app / book", priority: "recommended" },
    { id: "ds-dust-bag", name: "Dustproof bags for camera & electronics", priority: "essential" },
    { id: "ds-safari-torch", name: "Powerful torch / headlamp for night drives", priority: "essential" },
    { id: "ds-wipes-safari", name: "Biodegradable wet wipes (no water at game reserves)", priority: "recommended" },
    { id: "ds-cash-usd", name: "US Dollar cash (widely accepted at parks)", priority: "recommended" },
    { id: "ds-safari-permit", name: "Park entry permits / game reserve bookings printout", priority: "essential" },
    { id: "ds-long-lens", name: "Long telephoto lens (200–400mm) for wildlife shots", priority: "optional" },
  ],
  desert: [
    { id: "ds-sand-goggles", name: "Sand / dust goggles or wraparound sunglasses", priority: "essential" },
    { id: "ds-water-extra", name: "Extra large water bottles or hydration bladder (3L+)", priority: "essential" },
    { id: "ds-camel-back", name: "Hydration backpack / CamelBak bladder", priority: "recommended" },
    { id: "ds-solar-charger", name: "Solar charger panel for remote areas", priority: "recommended" },
    { id: "ds-desert-navigation", name: "Offline GPS map + compass for navigation", priority: "essential" },
    { id: "ds-sand-bag-liner", name: "Dust-proof liner bags for backpack contents", priority: "recommended" },
    { id: "ds-rehydration-desert", name: "ORS / rehydration salt sachets (×20)", priority: "essential" },
    { id: "ds-emergency-flare", name: "Emergency signal flare / mirror (remote desert)", priority: "optional" },
  ],
};

/* ─── Special Needs ─── */

const BABY_ITEMS_BAGS: Omit<PackingItem, "checked">[] = [
  { id: "bb-nappies", name: "Nappies / diapers (enough for journey + 3 days)", priority: "essential" },
  { id: "bb-wipes", name: "Baby wipes (×2 large packs)", priority: "essential" },
  { id: "bb-changing-mat", name: "Portable changing mat", priority: "essential" },
  { id: "bb-stroller", name: "Lightweight compact travel stroller / baby carrier", priority: "essential" },
  { id: "bb-car-seat", name: "Portable baby car seat / travel vest (check local law)", priority: "recommended" },
  { id: "bb-sunscreen-baby", name: "Baby SPF sunscreen (mineral / zinc oxide)", priority: "essential" },
  { id: "bb-hat-baby", name: "Baby sun hat with neck flap", priority: "essential" },
  { id: "bb-nightlight", name: "Portable night light for hotel room", priority: "recommended" },
  { id: "bb-monitor", name: "Travel baby monitor (if needed)", priority: "optional" },
  { id: "bb-room-thermometer", name: "Room thermometer (ideal 16–20°C for sleeping)", priority: "recommended" },
];

const HIKING_ITEMS: Omit<PackingItem, "checked">[] = [
  { id: "hk-trekking-poles-hk", name: "Trekking poles (collapsible)", priority: "recommended" },
  { id: "hk-gaiters", name: "Waterproof trail gaiters", priority: "recommended" },
  { id: "hk-hat-sun", name: "Wide-brim sun hat for trails", priority: "essential" },
  { id: "hk-trail-map", name: "Downloaded offline trail maps (AllTrails / Gaia)", priority: "essential" },
  { id: "hk-headlamp-hk", name: "Headlamp + extra batteries", priority: "essential" },
  { id: "hk-space-blanket", name: "Emergency foil / space blanket", priority: "recommended" },
  { id: "hk-snacks-trail", name: "Trail snacks: energy gels, nuts, dried fruit", priority: "essential" },
  { id: "hk-water-filter", name: "Water purification filter bottle / tablets", priority: "essential" },
  { id: "hk-whistle", name: "Emergency whistle", priority: "essential" },
  { id: "hk-fire-starter", name: "Waterproof matches / lighter / fire starter", priority: "recommended" },
  { id: "hk-multi-tool", name: "Multi-tool / Swiss Army knife", priority: "recommended" },
];

const WATER_SPORTS_ITEMS: Omit<PackingItem, "checked">[] = [
  { id: "ws-wetsuit", name: "Wetsuit or rash guard set", priority: "recommended" },
  { id: "ws-fins", name: "Swim fins / flippers", priority: "optional" },
  { id: "ws-snorkel-gear", name: "Personal snorkel + mask set", priority: "recommended" },
  { id: "ws-life-jacket", name: "Personal flotation device / life jacket (check rental)", priority: "optional" },
  { id: "ws-waterproof-bag-ws", name: "Waterproof dry bag (10L+)", priority: "essential" },
  { id: "ws-anti-fog-spray", name: "Anti-fog spray for dive / snorkel mask", priority: "recommended" },
  { id: "ws-surf-wax", name: "Surf wax / grip pad (if surfing)", priority: "optional" },
  { id: "ws-rope", name: "Quick-dry microfibre towel ×2", priority: "essential" },
];

const WINTER_SPORTS_ITEMS: Omit<PackingItem, "checked">[] = [
  { id: "ws-ski-jacket", name: "Ski / snowboard jacket (waterproof, insulated)", priority: "essential" },
  { id: "ws-ski-pants", name: "Ski / snowboard trousers (waterproof)", priority: "essential" },
  { id: "ws-ski-base-layer", name: "Thermal base layers ×2 (top & bottom)", priority: "essential" },
  { id: "ws-ski-socks", name: "Ski socks (wool or specialised, ×3 pairs)", priority: "essential" },
  { id: "ws-ski-boots", name: "Ski / snowboard boots (or rental confirmation)", priority: "essential" },
  { id: "ws-helmet", name: "Helmet (or rental confirmation)", priority: "essential" },
  { id: "ws-goggles", name: "Snow / ski goggles (polarised lens)", priority: "essential" },
  { id: "ws-balaclave", name: "Balaclava / face mask for extreme cold", priority: "recommended" },
  { id: "ws-wrist-guards", name: "Wrist guards (snowboarding)", priority: "optional" },
  { id: "ws-pass", name: "Lift pass / ski resort confirmation", priority: "essential" },
];

/* ─────────────────────── Generator Logic ─────────────────────── */

function generateList(
  destination: DestinationType,
  duration: DurationType,
  season: SeasonType,
  style: TravelStyleType,
  specials: Set<SpecialNeed>
): PackingCategory[] {
  const isLong = duration === "extended" || duration === "long";
  const isShort = duration === "weekend";

  // Helper to stamp checked = false
  const mk = (items: Omit<PackingItem, "checked">[]): PackingItem[] =>
    items.map((i) => ({ ...i, checked: false }));

  // --- CLOTHING ---
  let clothingItems: Omit<PackingItem, "checked">[] = [...BASE_CLOTHING];

  if (destination === "beach") clothingItems.push(...BEACH_CLOTHING);
  if (destination === "mountains") clothingItems.push(...MOUNTAIN_CLOTHING);
  if (destination === "safari") clothingItems.push(...SAFARI_CLOTHING);
  if (destination === "desert") clothingItems.push(...DESERT_CLOTHING);
  if (destination === "city") clothingItems.push(...CITY_CLOTHING);
  if (destination === "cultural") clothingItems.push(...CULTURAL_CLOTHING);
  if (destination === "tropical") clothingItems.push(...TROPICAL_CLOTHING);

  if (season === "winter" || destination === "winter-cold") clothingItems.push(...WINTER_CLOTHING);
  if (style === "business") clothingItems.push(...BUSINESS_CLOTHING);
  if (style === "luxury") clothingItems.push(...LUXURY_CLOTHING);
  if (isLong) clothingItems.push(...LONG_TRIP_CLOTHING);

  // --- TOILETRIES ---
  let toiletryItems: Omit<PackingItem, "checked">[] = [...BASE_TOILETRIES];
  if (destination === "beach") toiletryItems.push(...BEACH_TOILETRIES);
  if (destination === "tropical" || destination === "safari") {
    toiletryItems.push(...TROPICAL_TOILETRIES);
  }
  if (destination === "safari") toiletryItems.push(...SAFARI_TOILETRIES);
  if (destination === "desert") toiletryItems.push(...DESERT_TOILETRIES);
  if (style === "luxury") toiletryItems.push(...LUXURY_TOILETRIES);

  // --- MEDICATIONS ---
  let medItems: Omit<PackingItem, "checked">[] = [...BASE_MEDS];
  if (destination === "mountains") medItems.push(...MOUNTAIN_MEDS);
  if (destination === "tropical" || destination === "safari") medItems.push(...TROPICAL_MEDS);
  if (destination === "safari") medItems.push(...SAFARI_MEDS);
  if (specials.has("baby")) medItems.push(...BABY_MEDS);
  if (specials.has("hiking")) medItems.push(...HIKING_MEDS);

  // --- ELECTRONICS ---
  let electronicsItems: Omit<PackingItem, "checked">[] = [...BASE_ELECTRONICS];
  if (style === "business") electronicsItems.push(...BUSINESS_ELECTRONICS);
  if (specials.has("photography")) electronicsItems.push(...PHOTO_ELECTRONICS);
  if (specials.has("watersports")) electronicsItems.push(...WATER_SPORTS_ELECTRONICS);

  // --- DOCUMENTS ---
  let docItems: Omit<PackingItem, "checked">[] = [...BASE_DOCS];
  if (style === "business") docItems.push(...BUSINESS_DOCS);

  // --- BAGS ---
  let bagItems: Omit<PackingItem, "checked">[] = [...BASE_BAGS];
  if (style === "backpacker") bagItems.push(...BACKPACKER_BAGS);
  if (style === "luxury") bagItems.push(...LUXURY_BAGS);

  // --- FOOD & SNACKS ---
  let snackItems: Omit<PackingItem, "checked">[] = [];
  if (!isShort) {
    snackItems = [...BASE_SNACKS];
    if (isLong) snackItems.push(...LONG_SNACKS);
    if (specials.has("baby")) snackItems.push(...BABY_SNACKS);
  } else {
    // For weekends still include basics
    snackItems = [
      { id: "fn-water-bottle-s", name: "Refillable water bottle", priority: "essential" },
      { id: "fn-energy-bars-s", name: "Energy bars / snacks for travel day", priority: "recommended" },
    ];
    if (specials.has("baby")) snackItems.push(...BABY_SNACKS);
  }

  // --- ENTERTAINMENT ---
  let entItems: Omit<PackingItem, "checked">[] = [...BASE_ENTERTAINMENT];
  if (isLong) entItems.push(...LONG_ENTERTAINMENT);
  if (!isLong && !isShort) {
    // week / short trip — add travel pillow as optional
    entItems.push({ id: "en-travel-pillow-w", name: "Inflatable travel neck pillow", priority: "optional" });
  }
  if (specials.has("baby")) entItems.push(...BABY_ENTERTAINMENT);

  // --- DESTINATION SPECIFIC ---
  let destSpecific: Omit<PackingItem, "checked">[] = [...DESTINATION_SPECIFIC[destination]];

  // Add special need items into destination specific category
  if (specials.has("baby")) destSpecific.push(...BABY_ITEMS_BAGS);
  if (specials.has("hiking")) destSpecific.push(...HIKING_ITEMS);
  if (specials.has("watersports")) destSpecific.push(...WATER_SPORTS_ITEMS);
  if (specials.has("wintersports")) destSpecific.push(...WINTER_SPORTS_ITEMS);

  // Deduplicate by id
  const dedup = (arr: Omit<PackingItem, "checked">[]): Omit<PackingItem, "checked">[] => {
    const seen = new Set<string>();
    return arr.filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  };

  const categories: PackingCategory[] = [
    { id: "clothing", label: "Clothing & Accessories", emoji: "👔", items: mk(dedup(clothingItems)) },
    { id: "toiletries", label: "Toiletries & Health", emoji: "🧴", items: mk(dedup(toiletryItems)) },
    { id: "medications", label: "Medications & First Aid", emoji: "💊", items: mk(dedup(medItems)) },
    { id: "electronics", label: "Electronics & Gadgets", emoji: "📱", items: mk(dedup(electronicsItems)) },
    { id: "documents", label: "Documents & Money", emoji: "📄", items: mk(dedup(docItems)) },
    { id: "bags", label: "Bags & Organisation", emoji: "🎒", items: mk(dedup(bagItems)) },
    { id: "food", label: "Food & Snacks", emoji: "🍎", items: mk(dedup(snackItems)) },
    { id: "entertainment", label: "Entertainment", emoji: "🎭", items: mk(dedup(entItems)) },
    { id: "destination", label: "Destination Specific", emoji: "🌍", items: mk(dedup(destSpecific)) },
  ];

  return categories.filter((c) => c.items.length > 0);
}

/* ─────────────────────── Pill / Badge ─────────────────────── */

function PriorityBadge({ priority }: { priority: Priority }) {
  const config: Record<Priority, { label: string; className: string }> = {
    essential: {
      label: "Essential",
      className: "bg-[#FEF2E8] text-[#B84E24] border border-[#F5C4A0]",
    },
    recommended: {
      label: "Recommended",
      className: "bg-[#F0F8F0] text-[#2E6B3E] border border-[#9ECBAA]",
    },
    optional: {
      label: "Optional",
      className: "bg-parchment text-muted border border-parchment-2",
    },
  };
  const { label, className } = config[priority];
  return (
    <span
      className={`inline-block text-[10px] font-medium tracking-[0.08em] uppercase px-1.5 py-0.5 rounded-sm ${className} print:hidden`}
    >
      {label}
    </span>
  );
}

/* ─────────────────────── Option Card ─────────────────────── */

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  emoji?: string;
  label: string;
  sub?: string;
}

function OptionCard({ selected, onClick, emoji, label, sub }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-start gap-0.5 px-4 py-3 rounded-lg border text-left transition-all duration-200 w-full ${
        selected
          ? "bg-gold/10 border-gold shadow-[0_0_0_2px_rgba(201,169,110,0.3)] text-ink"
          : "bg-white border-parchment-2 text-muted hover:border-gold-light hover:text-ink"
      }`}
    >
      {emoji && <span className="text-lg leading-none mb-0.5">{emoji}</span>}
      <span className={`text-sm font-medium leading-tight ${selected ? "text-ink" : "text-ink/70"}`}>{label}</span>
      {sub && <span className="text-[11px] text-muted leading-tight">{sub}</span>}
      {selected && (
        <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-gold rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}
    </button>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

const DEST_OPTIONS: { value: DestinationType; emoji: string; label: string }[] = [
  { value: "beach", emoji: "🏖️", label: "Beach" },
  { value: "mountains", emoji: "⛰️", label: "Mountains" },
  { value: "city", emoji: "🏙️", label: "City" },
  { value: "cultural", emoji: "🕌", label: "Cultural / Heritage" },
  { value: "winter-cold", emoji: "❄️", label: "Winter Cold" },
  { value: "tropical", emoji: "🌴", label: "Tropical Heat" },
  { value: "safari", emoji: "🦁", label: "Safari / Wildlife" },
  { value: "desert", emoji: "🏜️", label: "Desert" },
];

const DURATION_OPTIONS: { value: DurationType; label: string; sub: string }[] = [
  { value: "weekend", label: "Weekend", sub: "2–3 days" },
  { value: "short", label: "Short Trip", sub: "4–6 days" },
  { value: "week", label: "Week", sub: "7–10 days" },
  { value: "extended", label: "Extended", sub: "11–14 days" },
  { value: "long", label: "Long Trip", sub: "15+ days" },
];

const SEASON_OPTIONS: { value: SeasonType; emoji: string; label: string }[] = [
  { value: "summer", emoji: "☀️", label: "Summer (hot)" },
  { value: "winter", emoji: "🌨️", label: "Winter (cold)" },
  { value: "monsoon", emoji: "🌧️", label: "Monsoon / Rain" },
  { value: "spring", emoji: "🌸", label: "Spring / Autumn (mild)" },
];

const STYLE_OPTIONS: { value: TravelStyleType; emoji: string; label: string; sub: string }[] = [
  { value: "backpacker", emoji: "🎒", label: "Backpacker", sub: "Pack light, hostels" },
  { value: "comfort", emoji: "🛏️", label: "Comfort Traveler", sub: "Hotels, moderate" },
  { value: "business", emoji: "💼", label: "Business", sub: "Work trips, formal" },
  { value: "luxury", emoji: "✨", label: "Luxury", sub: "5-star, premium" },
];

const SPECIAL_OPTIONS: { value: SpecialNeed; emoji: string; label: string }[] = [
  { value: "baby", emoji: "👶", label: "Baby / Toddler" },
  { value: "photography", emoji: "📷", label: "Photography (camera gear)" },
  { value: "hiking", emoji: "🥾", label: "Hiking" },
  { value: "watersports", emoji: "🤿", label: "Water Sports" },
  { value: "wintersports", emoji: "⛷️", label: "Winter Sports" },
];

export default function PackingListClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [generated, setGenerated] = useState(false);

  /* Inputs */
  const [destination, setDestination] = useState<DestinationType>("city");
  const [duration, setDuration] = useState<DurationType>("week");
  const [season, setSeason] = useState<SeasonType>("summer");
  const [style, setStyle] = useState<TravelStyleType>("comfort");
  const [specials, setSpecials] = useState<Set<SpecialNeed>>(new Set());

  /* Generated list state */
  const [categories, setCategories] = useState<PackingCategory[]>([]);

  const toggleSpecial = useCallback((need: SpecialNeed) => {
    setSpecials((prev) => {
      const next = new Set(prev);
      if (next.has(need)) next.delete(need);
      else next.add(need);
      return next;
    });
  }, []);

  const handleGenerate = useCallback(() => {
    const list = generateList(destination, duration, season, style, specials);
    setCategories(list);
    setGenerated(true);
    setTimeout(() => {
      document.getElementById("packing-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, [destination, duration, season, style, specials]);

  const handleReset = useCallback(() => {
    setGenerated(false);
    setCategories([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleItem = useCallback((catId: string, itemId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id !== catId
          ? cat
          : {
              ...cat,
              items: cat.items.map((item) =>
                item.id !== itemId ? item : { ...item, checked: !item.checked }
              ),
            }
      )
    );
  }, []);

  const checkAll = useCallback((catId: string, checked: boolean) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id !== catId
          ? cat
          : { ...cat, items: cat.items.map((item) => ({ ...item, checked })) }
      )
    );
  }, []);

  const { totalItems, checkedItems } = useMemo(() => {
    let total = 0;
    let checked = 0;
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        total++;
        if (item.checked) checked++;
      });
    });
    return { totalItems: total, checkedItems: checked };
  }, [categories]);

  const progressPct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  const destLabel = DEST_OPTIONS.find((d) => d.value === destination)?.label ?? "";
  const durationLabel = DURATION_OPTIONS.find((d) => d.value === duration)?.label ?? "";

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #packing-results, #packing-results * { visibility: visible; }
          #packing-results { position: absolute; left: 0; top: 0; width: 100%; }
          .print\\:hidden { display: none !important; }
          .print-page-title { display: block !important; }
          button { display: none !important; }
          input[type="checkbox"] { display: inline-block !important; }
        }
        .print-page-title { display: none; }
      `}</style>

      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main id="main-content" className="min-h-screen bg-cream pt-[72px]">
        {/* ── Hero ── */}
        <section className="bg-parchment py-14 md:py-20 px-6 md:px-12 text-center">
          <div className="max-w-[780px] mx-auto">
            <span className="section-label">Free Travel Tool</span>
            <h1 className="serif-title text-[clamp(2rem,4vw,3.2rem)] text-ink mb-4">
              Packing List Generator
            </h1>
            <p className="text-sm text-muted font-light max-w-[540px] mx-auto leading-relaxed">
              Tell us your destination type, trip length, and travel style — we&apos;ll generate a comprehensive,
              printable packing checklist tailored exactly to your trip.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                50–100+ items per list
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Printable checklist
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                100% free — no sign up
              </span>
            </div>
          </div>
        </section>

        {/* ── Form Section ── */}
        <section className="py-12 md:py-16 px-6 md:px-12 print:hidden">
          <div className="max-w-[900px] mx-auto">

            {/* Destination type */}
            <div className="mb-10">
              <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-gold-dark mb-1">
                Step 1
              </h2>
              <p className="font-serif text-xl text-ink mb-5">
                Where are you going?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DEST_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={destination === opt.value}
                    onClick={() => setDestination(opt.value)}
                    emoji={opt.emoji}
                    label={opt.label}
                  />
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-10">
              <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-gold-dark mb-1">
                Step 2
              </h2>
              <p className="font-serif text-xl text-ink mb-5">
                How long is your trip?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {DURATION_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={duration === opt.value}
                    onClick={() => setDuration(opt.value)}
                    label={opt.label}
                    sub={opt.sub}
                  />
                ))}
              </div>
            </div>

            {/* Season */}
            <div className="mb-10">
              <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-gold-dark mb-1">
                Step 3
              </h2>
              <p className="font-serif text-xl text-ink mb-5">
                What&apos;s the weather like?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SEASON_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={season === opt.value}
                    onClick={() => setSeason(opt.value)}
                    emoji={opt.emoji}
                    label={opt.label}
                  />
                ))}
              </div>
            </div>

            {/* Travel style */}
            <div className="mb-10">
              <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-gold-dark mb-1">
                Step 4
              </h2>
              <p className="font-serif text-xl text-ink mb-5">
                What&apos;s your travel style?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STYLE_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={style === opt.value}
                    onClick={() => setStyle(opt.value)}
                    emoji={opt.emoji}
                    label={opt.label}
                    sub={opt.sub}
                  />
                ))}
              </div>
            </div>

            {/* Special needs */}
            <div className="mb-10">
              <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-gold-dark mb-1">
                Step 5
              </h2>
              <p className="font-serif text-xl text-ink mb-2">
                Any special requirements?
              </p>
              <p className="text-sm text-muted mb-5">Select all that apply (optional)</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {SPECIAL_OPTIONS.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={specials.has(opt.value)}
                    onClick={() => toggleSpecial(opt.value)}
                    emoji={opt.emoji}
                    label={opt.label}
                  />
                ))}
              </div>
            </div>

            {/* Generate button */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={handleGenerate}
                className="btn-gold text-base px-10 py-4 shadow-[0_8px_24px_rgba(201,169,110,0.3)]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Generate My Packing List
              </button>
              {generated && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="ml-4 text-sm text-muted underline underline-offset-2 hover:text-gold-dark transition-colors duration-200"
                >
                  Start over
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        {generated && categories.length > 0 && (
          <section id="packing-results" className="py-12 md:py-16 px-6 md:px-12 bg-parchment/60">
            <div className="max-w-[900px] mx-auto">

              {/* Print title (only visible when printing) */}
              <div className="print-page-title mb-6">
                <h1 className="font-serif text-2xl text-ink">
                  Packing List — {destLabel} {durationLabel}
                </h1>
                <p className="text-sm text-muted">Generated by IncredibleItinerary.com</p>
              </div>

              {/* Results header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 print:hidden">
                <div>
                  <span className="section-label">Your Packing List</span>
                  <h2 className="serif-title text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight">
                    {destLabel} · {durationLabel}
                  </h2>
                  <p className="text-sm text-muted mt-1">
                    {totalItems} items across {categories.length} categories
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-5 py-2.5 border border-parchment-2 bg-white rounded text-sm text-ink font-medium hover:border-gold hover:shadow-sm transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print List
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 px-5 py-2.5 border border-parchment-2 bg-white rounded text-sm text-muted font-medium hover:border-gold-light hover:text-ink transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    New List
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8 print:hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-ink">
                    Packing progress
                  </span>
                  <span className="text-sm text-muted">
                    <span className="font-semibold text-ink">{checkedItems}</span> of{" "}
                    <span className="font-semibold text-ink">{totalItems}</span> items packed
                    <span className="ml-2 text-xs font-medium text-gold-dark">({progressPct}%)</span>
                  </span>
                </div>
                <div className="w-full h-2.5 bg-parchment-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                {progressPct === 100 && (
                  <p className="text-center text-sm text-[#2E6B3E] font-medium mt-2">
                    You&apos;re all packed! Have a wonderful trip. ✈️
                  </p>
                )}
              </div>

              {/* Category summary chips */}
              <div className="flex flex-wrap gap-2 mb-8 print:hidden">
                {categories.map((cat) => {
                  const catChecked = cat.items.filter((i) => i.checked).length;
                  const allDone = catChecked === cat.items.length;
                  return (
                    <a
                      key={cat.id}
                      href={`#cat-${cat.id}`}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                        allDone
                          ? "bg-[#F0F8F0] border-[#9ECBAA] text-[#2E6B3E]"
                          : "bg-white border-parchment-2 text-muted hover:border-gold-light hover:text-ink"
                      }`}
                    >
                      <span>{cat.emoji}</span>
                      <span>{cat.label}</span>
                      <span className={`font-semibold ${allDone ? "text-[#2E6B3E]" : "text-ink"}`}>
                        {catChecked}/{cat.items.length}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Category sections */}
              <div className="space-y-6">
                {categories.map((cat) => {
                  const catChecked = cat.items.filter((i) => i.checked).length;
                  const allChecked = catChecked === cat.items.length;
                  return (
                    <div
                      key={cat.id}
                      id={`cat-${cat.id}`}
                      className="bg-white rounded-xl border border-parchment-2 overflow-hidden shadow-[0_2px_12px_rgba(22,16,8,0.04)]"
                    >
                      {/* Category header */}
                      <div className="flex items-center justify-between px-5 py-4 border-b border-parchment-2 bg-parchment/40">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">{cat.emoji}</span>
                          <div>
                            <h3 className="font-serif text-lg text-ink leading-tight">{cat.label}</h3>
                            <p className="text-xs text-muted">
                              {catChecked} of {cat.items.length} packed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 print:hidden">
                          <button
                            type="button"
                            onClick={() => checkAll(cat.id, true)}
                            disabled={allChecked}
                            className="text-[11px] font-medium text-gold-dark hover:text-gold disabled:opacity-40 disabled:cursor-default transition-colors duration-200 underline underline-offset-2"
                          >
                            Check all
                          </button>
                          <span className="text-muted/40 text-xs">|</span>
                          <button
                            type="button"
                            onClick={() => checkAll(cat.id, false)}
                            disabled={catChecked === 0}
                            className="text-[11px] font-medium text-muted hover:text-ink disabled:opacity-40 disabled:cursor-default transition-colors duration-200 underline underline-offset-2"
                          >
                            Uncheck all
                          </button>
                        </div>
                      </div>

                      {/* Items list */}
                      <ul className="divide-y divide-parchment-2/60">
                        {cat.items.map((item) => (
                          <li
                            key={item.id}
                            className={`flex items-center gap-3 px-5 py-3 transition-colors duration-150 ${
                              item.checked ? "bg-[#F8FEF8]" : "hover:bg-parchment/30"
                            }`}
                          >
                            <input
                              type="checkbox"
                              id={`item-${item.id}`}
                              checked={item.checked}
                              onChange={() => toggleItem(cat.id, item.id)}
                              className="w-4 h-4 rounded border-parchment-2 accent-[#C9A96E] cursor-pointer flex-shrink-0"
                            />
                            <label
                              htmlFor={`item-${item.id}`}
                              className={`flex-1 text-sm cursor-pointer leading-snug transition-all duration-150 ${
                                item.checked
                                  ? "line-through text-muted/60"
                                  : "text-ink"
                              }`}
                            >
                              {item.name}
                            </label>
                            <PriorityBadge priority={item.priority} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 rounded-xl bg-parchment border border-parchment-2 p-6 md:p-8 text-center print:hidden">
                <span className="section-label">Ready to Book?</span>
                <h3 className="font-serif text-2xl text-ink mb-2">
                  Let us plan your perfect trip
                </h3>
                <p className="text-sm text-muted max-w-md mx-auto mb-6">
                  Our travel experts at IncredibleItinerary craft bespoke itineraries tailored to your style,
                  budget, and destination. Free consultation — no obligations.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="btn-gold"
                >
                  Plan My Trip
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ── How it works ── */}
        {!generated && (
          <section className="py-12 md:py-16 px-6 md:px-12 print:hidden">
            <div className="max-w-[900px] mx-auto">
              <div className="text-center mb-10">
                <span className="section-label">How it works</span>
                <h2 className="serif-title text-[clamp(1.6rem,3vw,2.2rem)] text-ink">
                  Your custom list in 30 seconds
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "Tell us about your trip",
                    desc: "Select your destination type, duration, weather, and travel style using the simple selectors above.",
                  },
                  {
                    step: "02",
                    title: "Add special requirements",
                    desc: "Travelling with a baby? Bringing a camera? Doing water sports? We add the right gear for your needs.",
                  },
                  {
                    step: "03",
                    title: "Check off & print",
                    desc: "Get a comprehensive checklist you can tick off as you pack, then print it for easy reference.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white border border-parchment-2 rounded-xl p-6 shadow-[0_2px_12px_rgba(22,16,8,0.04)]"
                  >
                    <span className="block font-serif text-3xl text-gold/40 font-light mb-3">{item.step}</span>
                    <h3 className="font-serif text-lg text-ink mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
