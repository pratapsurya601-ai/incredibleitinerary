import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — IncredibleItinerary",
  description:
    "Plan your India trip with IncredibleItinerary. Get a free personalised itinerary within 24 hours. WhatsApp, email or fill in the form.",
  alternates: { canonical: "https://www.incredibleitinerary.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
