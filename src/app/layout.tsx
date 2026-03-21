import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "IncredibleItinerary — Curated Private Journeys Across India",
  description:
    "Bespoke, privately crafted travel itineraries across India's most iconic and hidden destinations. Rajasthan, Himalayas, Golden Triangle, Kerala & beyond. 500+ happy travellers.",
  keywords: [
    "India travel itinerary",
    "private tours India",
    "Rajasthan tour packages",
    "Golden Triangle itinerary",
    "Kerala backwaters tour",
    "custom India travel planner",
    "luxury India tours",
    "budget India travel",
    "Goa itinerary",
    "India trip planner",
  ],
  openGraph: {
    title: "IncredibleItinerary — Curated Private Journeys Across India",
    description:
      "Handcrafted itineraries built around your pace, passions and budget. 500+ trips planned. Free consultation.",
    url: "https://incredibleitinerary.com",
    siteName: "IncredibleItinerary",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Incredible India travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IncredibleItinerary — Curated Private Journeys Across India",
    description: "Handcrafted India itineraries. 500+ trips planned. Free consultation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = "G-DE3KGWD3KS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

