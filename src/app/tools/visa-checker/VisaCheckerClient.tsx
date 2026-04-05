"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { trackEvent } from "@/lib/analytics";

// ── PASSPORT COUNTRIES ────────────────────────────────────────────────────────

const PASSPORTS = [
  { id: "IN", label: "India", flag: "\ud83c\uddee\ud83c\uddf3" },
  { id: "US", label: "United States", flag: "\ud83c\uddfa\ud83c\uddf8" },
  { id: "GB", label: "United Kingdom", flag: "\ud83c\uddec\ud83c\udde7" },
  { id: "CA", label: "Canada", flag: "\ud83c\udde8\ud83c\udde6" },
  { id: "AU", label: "Australia", flag: "\ud83c\udde6\ud83c\uddfa" },
  { id: "DE", label: "Germany", flag: "\ud83c\udde9\ud83c\uddea" },
  { id: "FR", label: "France", flag: "\ud83c\uddeb\ud83c\uddf7" },
  { id: "SG", label: "Singapore", flag: "\ud83c\uddf8\ud83c\uddec" },
  { id: "AE", label: "UAE", flag: "\ud83c\udde6\ud83c\uddea" },
  { id: "MY", label: "Malaysia", flag: "\ud83c\uddf2\ud83c\uddfe" },
  { id: "ZA", label: "South Africa", flag: "\ud83c\uddff\ud83c\udde6" },
  { id: "CN", label: "China", flag: "\ud83c\udde8\ud83c\uddf3" },
  { id: "OTHER", label: "Other", flag: "\ud83c\udf10" },
] as const;

// ── DESTINATIONS ──────────────────────────────────────────────────────────────

const DESTINATIONS = [
  {
    id: "india",
    label: "India",
    flag: "\ud83c\uddee\ud83c\uddf3",
    cities: [
      { name: "Delhi", href: "/blog/golden-triangle-7-days" },
      { name: "Goa", href: "/blog/goa-3-days" },
      { name: "Rajasthan", href: "/blog/rajasthan-7-days" },
      { name: "Kerala", href: "/blog/kerala-5-days" },
    ],
  },
  {
    id: "thailand",
    label: "Thailand",
    flag: "\ud83c\uddf9\ud83c\udded",
    cities: [
      { name: "Bangkok", href: "/blog/bangkok-4-days" },
      { name: "Chiang Mai", href: "/blog/chiang-mai-4-days" },
      { name: "Phuket", href: "/blog/phuket-5-days" },
    ],
  },
  {
    id: "japan",
    label: "Japan",
    flag: "\ud83c\uddef\ud83c\uddf5",
    cities: [
      { name: "Tokyo", href: "/blog/tokyo-5-days" },
      { name: "Kyoto", href: "/blog/kyoto-4-days" },
      { name: "Osaka", href: "/blog/osaka-3-days" },
    ],
  },
  {
    id: "italy",
    label: "Italy",
    flag: "\ud83c\uddee\ud83c\uddf9",
    cities: [
      { name: "Rome", href: "/blog/rome-4-days" },
      { name: "Florence", href: "/blog/florence-3-days" },
      { name: "Amalfi Coast", href: "/blog/amalfi-coast-4-days" },
    ],
  },
  {
    id: "uae",
    label: "UAE",
    flag: "\ud83c\udde6\ud83c\uddea",
    cities: [
      { name: "Dubai", href: "/blog/dubai-4-days" },
      { name: "Abu Dhabi", href: "/blog/abu-dhabi-3-days" },
    ],
  },
  {
    id: "spain",
    label: "Spain",
    flag: "\ud83c\uddea\ud83c\uddf8",
    cities: [
      { name: "Barcelona", href: "/blog/barcelona-4-days" },
      { name: "Madrid", href: "/blog/madrid-3-days" },
      { name: "Seville", href: "/blog/seville-3-days" },
    ],
  },
  {
    id: "indonesia",
    label: "Indonesia / Bali",
    flag: "\ud83c\uddee\ud83c\udde9",
    cities: [
      { name: "Bali", href: "/blog/bali-5-days" },
      { name: "Ubud", href: "/blog/ubud-3-days" },
      { name: "Lombok", href: "/blog/lombok-4-days" },
    ],
  },
  {
    id: "vietnam",
    label: "Vietnam",
    flag: "\ud83c\uddfb\ud83c\uddf3",
    cities: [
      { name: "Hanoi", href: "/blog/hanoi-3-days" },
      { name: "Ho Chi Minh City", href: "/blog/ho-chi-minh-city-3-days" },
      { name: "Ha Long Bay", href: "/blog/ha-long-bay-3-days" },
    ],
  },
  {
    id: "greece",
    label: "Greece",
    flag: "\ud83c\uddec\ud83c\uddf7",
    cities: [
      { name: "Athens", href: "/blog/athens-3-days" },
      { name: "Santorini", href: "/blog/santorini-4-days" },
      { name: "Crete", href: "/blog/crete-5-days" },
    ],
  },
  {
    id: "turkey",
    label: "Turkey",
    flag: "\ud83c\uddf9\ud83c\uddf7",
    cities: [
      { name: "Istanbul", href: "/blog/istanbul-5-days" },
      { name: "Cappadocia", href: "/blog/cappadocia-3-days" },
    ],
  },
  {
    id: "portugal",
    label: "Portugal",
    flag: "\ud83c\uddf5\ud83c\uddf9",
    cities: [
      { name: "Lisbon", href: "/blog/lisbon-4-days" },
      { name: "Porto", href: "/blog/porto-3-days" },
      { name: "Algarve", href: "/blog/algarve-4-days" },
    ],
  },
  {
    id: "malaysia",
    label: "Malaysia",
    flag: "\ud83c\uddf2\ud83c\uddfe",
    cities: [
      { name: "Kuala Lumpur", href: "/blog/kuala-lumpur-3-days" },
      { name: "Langkawi", href: "/blog/langkawi-3-days" },
      { name: "Penang", href: "/blog/penang-3-days" },
    ],
  },
] as const;

// ── VISA STATUS TYPES ─────────────────────────────────────────────────────────

type VisaStatus = "visa_free" | "evisa" | "visa_on_arrival" | "visa_required";

interface VisaResult {
  status: VisaStatus;
  label: string;
  emoji: string;
  duration: string;
  cost: string;
  processing: string;
  requirements: string[];
  notes?: string;
}

const STATUS_CONFIG: Record<VisaStatus, { bg: string; border: string; text: string; darkBg: string }> = {
  visa_free:       { bg: "bg-emerald-50",  border: "border-emerald-200", text: "text-emerald-800", darkBg: "dark:bg-emerald-950/30" },
  evisa:           { bg: "bg-amber-50",    border: "border-amber-200",   text: "text-amber-800",   darkBg: "dark:bg-amber-950/30" },
  visa_on_arrival: { bg: "bg-sky-50",      border: "border-sky-200",     text: "text-sky-800",     darkBg: "dark:bg-sky-950/30" },
  visa_required:   { bg: "bg-red-50",      border: "border-red-200",     text: "text-red-800",     darkBg: "dark:bg-red-950/30" },
};

// ── VISA DATA ─────────────────────────────────────────────────────────────────

type PassportGroup = "IN" | "US" | "GB" | "CA" | "AU" | "DE" | "FR" | "SG" | "AE" | "MY" | "ZA" | "CN" | "OTHER";

function getPassportGroup(id: string): "IN" | "US_UK_CA_AU" | "EU" | "SG_MY" | "OTHER" {
  if (id === "IN") return "IN";
  if (["US", "GB", "CA", "AU"].includes(id)) return "US_UK_CA_AU";
  if (["DE", "FR"].includes(id)) return "EU";
  if (["SG", "MY"].includes(id)) return "SG_MY";
  return "OTHER";
}

function getVisaResult(passport: string, destination: string): VisaResult {
  const group = getPassportGroup(passport);

  // ── India ───────────────────────────────────────────────────────────
  if (destination === "india") {
    if (group === "IN") {
      return {
        status: "visa_free", label: "No Visa Needed", emoji: "\u2705",
        duration: "Unlimited", cost: "Free", processing: "N/A",
        requirements: ["Valid Indian passport"],
        notes: "As an Indian citizen, you do not need a visa to enter India.",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU") {
      return {
        status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
        duration: "30 days", cost: "$25 (approx.)", processing: "3\u20135 business days",
        requirements: [
          "Passport valid for 6+ months from arrival",
          "Two recent passport-sized photos",
          "Return/onward flight ticket",
          "Proof of accommodation",
          "Sufficient funds for your stay",
        ],
        notes: "Apply online at indianvisaonline.gov.in. The eVisa is available for tourism, business and medical purposes.",
      };
    }
    if (group === "SG_MY") {
      return {
        status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
        duration: "30 days", cost: "$25 (approx.)", processing: "3\u20135 business days",
        requirements: [
          "Passport valid for 6+ months from arrival",
          "Two recent passport-sized photos",
          "Return/onward flight ticket",
          "Proof of accommodation",
        ],
      };
    }
    return {
      status: "visa_required", label: "Tourist Visa Required", emoji: "\ud83c\udfe2",
      duration: "Up to 90 days", cost: "Varies by nationality", processing: "5\u201315 business days",
      requirements: [
        "Passport valid for 6+ months from arrival",
        "Completed visa application form",
        "Two passport-sized photos",
        "Proof of accommodation and return flights",
        "Financial proof (bank statements)",
      ],
      notes: "Apply at the nearest Indian embassy or consulate. Some nationalities may be eligible for eVisa \u2014 check indianvisaonline.gov.in.",
    };
  }

  // ── Thailand ────────────────────────────────────────────────────────
  if (destination === "thailand") {
    if (group === "IN") {
      return {
        status: "visa_on_arrival", label: "Visa on Arrival", emoji: "\u2708\ufe0f",
        duration: "15 days", cost: "\u0e3f2,000 (~$56)", processing: "On arrival (30\u201360 min queue)",
        requirements: [
          "Passport valid for 6+ months",
          "One recent passport photo (4x6 cm)",
          "Confirmed return flight within 15 days",
          "Proof of accommodation",
          "Cash: 10,000 THB per person or 20,000 THB per family",
        ],
        notes: "Alternatively, apply for an eVisa in advance for a smoother arrival. The eVisa allows a 60-day stay.",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "30\u201360 days (varies)", cost: "Free", processing: "N/A",
        requirements: [
          "Passport valid for 6+ months",
          "Return flight within exemption period",
          "Proof of accommodation (may be asked)",
        ],
        notes: "Most Western passport holders get 30 days visa-free (extendable to 60 days at immigration). UK and US citizens may get up to 60 days.",
      };
    }
    return {
      status: "visa_required", label: "Visa Required", emoji: "\ud83c\udfe2",
      duration: "Varies", cost: "Varies by nationality", processing: "5\u201310 business days",
      requirements: [
        "Passport valid for 6+ months",
        "Completed application form",
        "Passport photos",
        "Return flight and accommodation proof",
      ],
      notes: "Check with the nearest Thai embassy for specific requirements for your nationality.",
    };
  }

  // ── Japan ───────────────────────────────────────────────────────────
  if (destination === "japan") {
    if (group === "IN") {
      return {
        status: "visa_required", label: "Visa Required", emoji: "\ud83c\udfe2",
        duration: "15\u201390 days (single/multiple entry)", cost: "\u00a53,000\u2013\u00a56,000 (~$20\u2013$40)", processing: "15\u201330 business days",
        requirements: [
          "Passport valid for duration of stay",
          "Completed visa application form",
          "One recent passport photo (45x45 mm)",
          "Detailed travel itinerary",
          "Flight reservation and hotel bookings",
          "Bank statements (last 6 months)",
          "Employment/income proof",
          "Letter of invitation or tour booking (recommended)",
        ],
        notes: "Apply at the nearest Japanese embassy or consulate. Processing can take up to 4 weeks during peak seasons. A well-documented itinerary significantly improves approval chances.",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days", cost: "Free", processing: "N/A",
        requirements: [
          "Passport valid for duration of stay",
          "Return/onward flight ticket",
          "Proof of sufficient funds (may be asked)",
        ],
        notes: "You will receive a 90-day temporary visitor status on arrival. This cannot be used for employment.",
      };
    }
    return {
      status: "visa_required", label: "Visa Required", emoji: "\ud83c\udfe2",
      duration: "15\u201390 days", cost: "Varies", processing: "5\u201330 business days",
      requirements: [
        "Passport valid for duration of stay",
        "Completed visa application",
        "Travel itinerary and hotel bookings",
        "Financial proof",
        "Passport photos",
      ],
      notes: "Requirements vary by nationality. Check with the nearest Japanese embassy.",
    };
  }

  // ── Italy (Schengen) ────────────────────────────────────────────────
  if (destination === "italy") {
    if (group === "IN") {
      return {
        status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
        duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15\u201330 business days",
        requirements: [
          "Passport valid for 3+ months beyond return date",
          "Completed Schengen visa application form",
          "Two recent passport photos (35x45 mm)",
          "Travel insurance (min. \u20ac30,000 coverage)",
          "Flight reservation (round trip)",
          "Hotel bookings for entire stay",
          "Bank statements (last 3\u20136 months)",
          "Employment/income proof or sponsor letter",
          "Cover letter with travel purpose",
        ],
        notes: "Apply at VFS Global or the Italian embassy at least 3 months before travel. Appointments fill up fast during summer \u2014 book early. The Schengen visa allows you to visit all 27 Schengen countries.",
      };
    }
    if (group === "EU") {
      return {
        status: "visa_free", label: "Free Movement (EU)", emoji: "\u2705",
        duration: "Unlimited", cost: "Free", processing: "N/A",
        requirements: [
          "Valid EU national ID card or passport",
        ],
        notes: "As an EU citizen, you have the right to live and work in Italy without a visa under EU free movement rules.",
      };
    }
    if (group === "US_UK_CA_AU") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: [
          "Passport valid for 3+ months beyond departure from Schengen area",
          "Return/onward flight ticket",
          "Proof of accommodation",
          "Proof of sufficient funds (may be asked)",
          "Travel insurance (recommended)",
        ],
        notes: "The 90-day allowance applies across all Schengen countries combined. ETIAS pre-authorization may be required \u2014 check before booking.",
      };
    }
    if (group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: [
          "Passport valid for 3+ months beyond departure",
          "Return/onward flight",
          "Proof of accommodation and funds",
        ],
      };
    }
    return {
      status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
      duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15\u201330 business days",
      requirements: [
        "Passport valid for 3+ months beyond return date",
        "Schengen visa application form",
        "Passport photos, travel insurance",
        "Flight and hotel bookings",
        "Financial proof and employment letter",
      ],
      notes: "Apply at VFS Global or the nearest Italian embassy/consulate.",
    };
  }

  // ── UAE ─────────────────────────────────────────────────────────────
  if (destination === "uae") {
    if (group === "IN") {
      return {
        status: "visa_on_arrival", label: "Visa on Arrival", emoji: "\u2708\ufe0f",
        duration: "14 days (extendable)", cost: "AED 100–120 (~$27–$33)", processing: "On arrival",
        requirements: [
          "Passport valid for 6+ months",
          "Return flight ticket",
          "Proof of accommodation",
          "Sufficient funds",
        ],
        notes: "Indian passport holders can get visa on arrival at Dubai and Abu Dhabi airports. Can also apply for a pre-approved UAE visa through airlines or travel agents.",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "30–90 days (varies)", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months", "Return flight ticket"],
        notes: "Most Western passport holders receive 30–90 days visa-free on arrival. UK citizens get 30 days; US/EU citizens get 90 days.",
      };
    }
    return {
      status: "evisa", label: "eVisa Required", emoji: "\ud83d\udcf1",
      duration: "30 days", cost: "AED 250–350 (~$68–$95)", processing: "3–5 business days",
      requirements: ["Passport valid for 6+ months", "Passport photo", "Return ticket", "Bank statement"],
      notes: "Apply for a UAE tourist visa through Emirates, Air Arabia, or the official ICA portal (ICA.GOV.AE).",
    };
  }

  // ── Spain (Schengen) ────────────────────────────────────────────────
  if (destination === "spain") {
    if (group === "IN") {
      return {
        status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
        duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15–30 business days",
        requirements: [
          "Passport valid for 3+ months beyond return date",
          "Schengen visa application form",
          "Two recent passport photos (35x45 mm)",
          "Travel insurance (min. \u20ac30,000 coverage)",
          "Round-trip flight reservation",
          "Hotel bookings for entire stay",
          "Bank statements (last 3–6 months)",
          "Employment/income proof",
        ],
        notes: "Apply at VFS Global (Spain) at least 3 months before travel. Book appointments early — they fill quickly during summer. The Schengen visa covers all 27 Schengen countries.",
      };
    }
    if (group === "EU") {
      return {
        status: "visa_free", label: "Free Movement (EU)", emoji: "\u2705",
        duration: "Unlimited", cost: "Free", processing: "N/A",
        requirements: ["Valid EU national ID card or passport"],
      };
    }
    if (group === "US_UK_CA_AU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 3+ months beyond departure", "Return/onward ticket", "Proof of accommodation"],
        notes: "90-day allowance applies across all Schengen countries combined. ETIAS pre-authorization may be required — check before booking.",
      };
    }
    return {
      status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
      duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15–30 business days",
      requirements: ["Schengen application form", "Passport photos", "Travel insurance", "Flight & hotel bookings", "Financial proof"],
    };
  }

  // ── Indonesia / Bali ────────────────────────────────────────────────
  if (destination === "indonesia") {
    if (group === "IN") {
      return {
        status: "visa_on_arrival", label: "Visa on Arrival", emoji: "\u2708\ufe0f",
        duration: "30 days (extendable once)", cost: "IDR 500,000 (~$31)", processing: "On arrival (15–30 min)",
        requirements: [
          "Passport valid for 6+ months",
          "Return flight ticket",
          "Proof of accommodation",
          "IDR 500,000 cash (USD/EUR not accepted at most counters)",
        ],
        notes: "VOA available at Ngurah Rai (Bali), Soekarno-Hatta (Jakarta) and other major airports. Can be extended once for another 30 days at immigration office.",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "30 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months", "Return flight ticket", "Proof of accommodation"],
        notes: "30 days visa-free on arrival at designated airports including Bali. Can be extended once for 30 days.",
      };
    }
    return {
      status: "visa_on_arrival", label: "Visa on Arrival", emoji: "\u2708\ufe0f",
      duration: "30 days", cost: "IDR 500,000 (~$31)", processing: "On arrival",
      requirements: ["Passport valid for 6+ months", "Return ticket", "Proof of accommodation", "IDR 500,000 cash"],
    };
  }

  // ── Vietnam ─────────────────────────────────────────────────────────
  if (destination === "vietnam") {
    if (group === "IN") {
      return {
        status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
        duration: "90 days (single or multiple entry)", cost: "$25", processing: "3 business days",
        requirements: [
          "Passport valid for 6+ months from entry date",
          "Digital passport photo",
          "Entry/exit dates and accommodation address",
        ],
        notes: "Apply at evisa.xuatnhapcanh.gov.vn — the official Vietnam e-visa portal. Processing is fast (3 business days) and reliable.",
      };
    }
    if (group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "30 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months", "Return/onward ticket"],
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "45 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months", "Return/onward ticket"],
        notes: "UK, EU, US, CA, AU citizens get 45 days visa-free. Can be extended or re-entered after leaving.",
      };
    }
    return {
      status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
      duration: "90 days", cost: "$25", processing: "3 business days",
      requirements: ["Passport valid 6+ months", "Digital photo", "Accommodation address"],
      notes: "Apply at evisa.xuatnhapcanh.gov.vn.",
    };
  }

  // ── Greece (Schengen) ───────────────────────────────────────────────
  if (destination === "greece") {
    if (group === "IN") {
      return {
        status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
        duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15–30 business days",
        requirements: [
          "Passport valid for 3+ months beyond return date",
          "Schengen visa application",
          "Two passport photos",
          "Travel insurance (min. \u20ac30,000)",
          "Round-trip flight reservation",
          "Hotel bookings",
          "Bank statements (last 3–6 months)",
          "Employment/income proof",
        ],
        notes: "Apply at VFS Global (Greece) 3+ months in advance. Peak season (June–Sept) appointments fill very fast.",
      };
    }
    if (group === "EU") {
      return { status: "visa_free", label: "Free Movement (EU)", emoji: "\u2705", duration: "Unlimited", cost: "Free", processing: "N/A", requirements: ["Valid EU ID card or passport"] };
    }
    if (group === "US_UK_CA_AU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid 3+ months beyond departure", "Return ticket", "Proof of accommodation"],
        notes: "90-day allowance covers all Schengen countries combined.",
      };
    }
    return {
      status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
      duration: "Up to 90 days in 180 days", cost: "\u20ac80", processing: "15–30 business days",
      requirements: ["Schengen application form", "Passport photos", "Travel insurance", "Flight & hotel bookings", "Financial proof"],
    };
  }

  // ── Turkey ──────────────────────────────────────────────────────────
  if (destination === "turkey") {
    if (group === "IN") {
      return {
        status: "evisa", label: "eVisa Required", emoji: "\ud83d\udcf1",
        duration: "30 days per entry (multiple entry, 180 days total)", cost: "$50", processing: "Instant (usually)",
        requirements: [
          "Passport valid for 6+ months",
          "Credit/debit card for payment",
          "Email address for delivery",
        ],
        notes: "Apply at evisa.gov.tr — Turkey's official e-visa portal. Processing is near-instant. Print or save the e-visa to your phone.",
      };
    }
    if (group === "EU") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months (or valid national ID for some EU nationalities)"],
      };
    }
    if (group === "US_UK_CA_AU") {
      return {
        status: "evisa", label: "eVisa Required", emoji: "\ud83d\udcf1",
        duration: "90 days per entry", cost: "$50", processing: "Instant",
        requirements: ["Passport valid for 6+ months", "Credit card for payment"],
        notes: "Apply at evisa.gov.tr. US/UK/CA/AU citizens need an eVisa (not visa-free). Process takes minutes.",
      };
    }
    if (group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "30–90 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months"],
      };
    }
    return {
      status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
      duration: "30 days", cost: "$50", processing: "Instant",
      requirements: ["Passport valid 6+ months", "Payment card"],
      notes: "Apply at evisa.gov.tr.",
    };
  }

  // ── Portugal (Schengen) ─────────────────────────────────────────────
  if (destination === "portugal") {
    if (group === "IN") {
      return {
        status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
        duration: "Up to 90 days in 180 days", cost: "\u20ac80 (~$86)", processing: "15–30 business days",
        requirements: [
          "Passport valid for 3+ months beyond return date",
          "Schengen visa application",
          "Two passport photos",
          "Travel insurance (min. \u20ac30,000)",
          "Round-trip flight reservation",
          "Hotel bookings",
          "Bank statements (last 3–6 months)",
          "Employment/income proof",
        ],
        notes: "Apply at VFS Global (Portugal) or the Portuguese consulate 3+ months in advance.",
      };
    }
    if (group === "EU") {
      return { status: "visa_free", label: "Free Movement (EU)", emoji: "\u2705", duration: "Unlimited", cost: "Free", processing: "N/A", requirements: ["Valid EU ID card or passport"] };
    }
    if (group === "US_UK_CA_AU" || group === "SG_MY") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days in 180 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid 3+ months beyond departure", "Return ticket"],
        notes: "90-day allowance covers all Schengen countries combined. ETIAS may be required — check before booking.",
      };
    }
    return {
      status: "visa_required", label: "Schengen Visa Required", emoji: "\ud83c\udfe2",
      duration: "Up to 90 days in 180 days", cost: "\u20ac80", processing: "15–30 business days",
      requirements: ["Schengen application form", "Passport photos", "Travel insurance", "Flight & hotel bookings", "Financial proof"],
    };
  }

  // ── Malaysia ────────────────────────────────────────────────────────
  if (destination === "malaysia") {
    if (group === "IN") {
      return {
        status: "evisa", label: "eVisa Required", emoji: "\ud83d\udcf1",
        duration: "30 days", cost: "MYR 200 (~$43)", processing: "1–3 business days",
        requirements: [
          "Passport valid for 6+ months",
          "Digital passport photo",
          "Return flight ticket",
          "Proof of accommodation",
          "Bank statement",
        ],
        notes: "Apply at evisa.imi.gov.my — Malaysia's official e-visa portal. Indian nationals require an eVisa (not visa on arrival).",
      };
    }
    if (group === "US_UK_CA_AU" || group === "EU") {
      return {
        status: "visa_free", label: "Visa Free", emoji: "\u2705",
        duration: "90 days", cost: "Free", processing: "N/A",
        requirements: ["Passport valid for 6+ months", "Return/onward ticket"],
        notes: "Most Western passport holders get 90 days visa-free. Immigration may ask for hotel booking proof.",
      };
    }
    if (group === "SG_MY") {
      return { status: "visa_free", label: "Visa Free", emoji: "\u2705", duration: "Unlimited (MY) / 30 days (SG)", cost: "Free", processing: "N/A", requirements: ["Valid passport"] };
    }
    return {
      status: "evisa", label: "eVisa Available", emoji: "\ud83d\udcf1",
      duration: "30 days", cost: "MYR 200 (~$43)", processing: "1–3 business days",
      requirements: ["Passport valid 6+ months", "Digital photo", "Return ticket", "Bank statement"],
      notes: "Apply at evisa.imi.gov.my.",
    };
  }

  // Fallback
  return {
    status: "visa_required", label: "Check Requirements", emoji: "\ud83c\udfe2",
    duration: "Varies", cost: "Varies", processing: "Varies",
    requirements: ["Please check with the official embassy or consulate for up-to-date requirements."],
  };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function VisaCheckerClient() {
  const [passport, setPassport] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState<VisaResult | null>(null);

  const selectedDest = DESTINATIONS.find((d) => d.id === destination);

  function handleCheck() {
    if (!passport || !destination) return;
    const r = getVisaResult(passport, destination);
    setResult(r);
    trackEvent("visa_check", { passport, destination });
  }

  function handleReset() {
    setPassport("");
    setDestination("");
    setResult(null);
  }

  return (
    <>
      <Navbar onPlanTrip={() => {}} />

      <main className="min-h-screen bg-cream pt-24 pb-20">
        {/* ── Header ───────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-5 text-center mb-12">
          <span className="section-label">Travel Tools</span>
          <h1 className="serif-title text-3xl sm:text-4xl md:text-5xl text-ink mb-4">
            Visa Checker
          </h1>
          <p className="text-muted font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Select your passport country and destination to instantly check visa
            requirements, costs and processing times.
          </p>
        </section>

        {/* ── Checker Card ─────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-5">
          <div className="bg-white border border-parchment-2 rounded-xl p-6 sm:p-8 shadow-sm">

            {!result ? (
              <>
                {/* Step 1 — Passport */}
                <div className="mb-8">
                  <label className="block mb-3">
                    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-gold-dark font-medium">
                      Step 1
                    </span>
                    <span className="block font-serif text-xl text-ink mt-1">
                      Select Your Passport
                    </span>
                  </label>
                  <select
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    className="form-field text-base"
                  >
                    <option value="">Choose your passport country...</option>
                    {PASSPORTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.flag} {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 2 — Destination */}
                <div className="mb-8">
                  <label className="block mb-3">
                    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-gold-dark font-medium">
                      Step 2
                    </span>
                    <span className="block font-serif text-xl text-ink mt-1">
                      Select Destination
                    </span>
                  </label>

                  {/* Country buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {DESTINATIONS.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDestination(d.id)}
                        className={`flex flex-col items-center gap-1.5 py-4 px-3 rounded-lg border transition-all duration-200 ${
                          destination === d.id
                            ? "border-gold bg-gold/10 shadow-sm"
                            : "border-parchment-2 hover:border-gold-light hover:bg-parchment/50"
                        }`}
                      >
                        <span className="text-2xl">{d.flag}</span>
                        <span className="text-sm font-medium text-ink">{d.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* City links */}
                  {selectedDest && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs text-muted mr-1 self-center">
                        Or explore a city:
                      </span>
                      {selectedDest.cities.map((c) => (
                        <Link
                          key={c.name}
                          href={c.href}
                          className="text-xs px-3 py-1.5 rounded-full border border-parchment-2 text-gold-dark hover:border-gold hover:bg-gold/5 transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Check button */}
                <button
                  onClick={handleCheck}
                  disabled={!passport || !destination}
                  className="btn-gold w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  Check Visa Requirements
                </button>
              </>
            ) : (
              /* ── Result Card ─────────────────────────────────────── */
              <div className="animate-fade-up">
                {/* Status badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                    STATUS_CONFIG[result.status].bg
                  } ${STATUS_CONFIG[result.status].border} ${
                    STATUS_CONFIG[result.status].text
                  } ${STATUS_CONFIG[result.status].darkBg} border`}
                >
                  <span className="text-lg">{result.emoji}</span>
                  {result.label}
                </div>

                {/* Passport + Destination summary */}
                <div className="flex items-center gap-3 text-sm text-muted mb-6">
                  <span>
                    {PASSPORTS.find((p) => p.id === passport)?.flag}{" "}
                    {PASSPORTS.find((p) => p.id === passport)?.label} passport
                  </span>
                  <span className="text-parchment-2">\u2192</span>
                  <span>
                    {selectedDest?.flag} {selectedDest?.label}
                  </span>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-parchment/50 rounded-lg p-4 text-center">
                    <span className="text-xs tracking-[0.14em] uppercase text-muted block mb-1">
                      Duration
                    </span>
                    <span className="font-serif text-lg text-ink">{result.duration}</span>
                  </div>
                  <div className="bg-parchment/50 rounded-lg p-4 text-center">
                    <span className="text-xs tracking-[0.14em] uppercase text-muted block mb-1">
                      Cost
                    </span>
                    <span className="font-serif text-lg text-ink">{result.cost}</span>
                  </div>
                  <div className="bg-parchment/50 rounded-lg p-4 text-center">
                    <span className="text-xs tracking-[0.14em] uppercase text-muted block mb-1">
                      Processing
                    </span>
                    <span className="font-serif text-lg text-ink">{result.processing}</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-[0.68rem] tracking-[0.12em] uppercase text-gold-dark font-medium mb-3">
                    Key Requirements
                  </h3>
                  <ul className="space-y-2">
                    {result.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink/80 font-light leading-relaxed">
                        <span className="text-gold mt-0.5 shrink-0">\u2022</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notes */}
                {result.notes && (
                  <div className="bg-parchment/40 border border-parchment-2 rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted font-light leading-relaxed">
                      <span className="font-medium text-ink">Note:</span>{" "}
                      {result.notes}
                    </p>
                  </div>
                )}

                {/* Blog link */}
                {selectedDest && (
                  <Link
                    href={selectedDest.cities[0].href}
                    className="block text-center text-sm text-gold-dark hover:text-gold font-medium mb-4 transition-colors"
                  >
                    Read our full {selectedDest.label} guide for travel tips \u2192
                  </Link>
                )}

                {/* CTA */}
                <Link
                  href="/contact"
                  className="btn-gold w-full justify-center mb-4"
                >
                  Need help planning? Get a free custom itinerary
                </Link>

                {/* Reset */}
                <button
                  onClick={handleReset}
                  className="w-full text-center text-sm text-muted hover:text-gold-dark transition-colors py-2"
                >
                  \u2190 Check another destination
                </button>
              </div>
            )}
          </div>

          {/* ── Disclaimer ─────────────────────────────────────────── */}
          <p className="text-center text-xs text-muted/70 font-light mt-6 max-w-lg mx-auto leading-relaxed">
            This information is for general guidance only. Always verify with the
            official embassy or consulate before traveling. Visa rules change
            frequently and may vary based on your specific circumstances.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
