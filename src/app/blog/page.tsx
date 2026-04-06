import type { Metadata } from "next";
import BlogClient from "./BlogClient";

const SITE = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Travel Guides & Destination Itineraries — IncredibleItinerary",
  description:
    "Free travel guides for 302+ destinations — India, Southeast Asia, Europe, Japan, Dubai and more. No paywalls, no email required. Real itineraries from a real traveller.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "Free Travel Guides — IncredibleItinerary",
    description:
      "302+ free destination guides with day-by-day itineraries, real costs, and honest tips. No paywalls, no email required.",
    url: `${SITE}/blog`,
    images: [{ url: `${SITE}/images/surya/blog-kedarnath-temple.jpg`, width: 1400, height: 647 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Travel Guides — IncredibleItinerary",
    description: "302+ free destination guides. No paywalls.",
    images: [`${SITE}/images/surya/blog-kedarnath-temple.jpg`],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
