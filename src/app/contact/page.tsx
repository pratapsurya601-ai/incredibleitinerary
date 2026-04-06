import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — IncredibleItinerary",
  description:
    "Plan your India trip with IncredibleItinerary. Get a free personalised itinerary within 24 hours. WhatsApp, email or fill in the form.",
  alternates: { canonical: "https://www.incredibleitinerary.com/contact" },
  openGraph: {
    title: "Contact Us — IncredibleItinerary",
    description: "Get a free personalised India itinerary within 24 hours. WhatsApp, email or fill in the form.",
    url: "https://www.incredibleitinerary.com/contact",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", width: 1200, height: 630, alt: "IncredibleItinerary — Free Travel Guides" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
