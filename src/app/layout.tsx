import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
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
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();
        `}} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IncredibleItinerary",
              url: "https://incredibleitinerary.com",
              logo: "https://incredibleitinerary.com/logo.png",
              description: "Bespoke, privately crafted travel itineraries across India's most iconic and hidden destinations.",
              sameAs: [
                "https://instagram.com/incredibleitinerary",
                "https://facebook.com/incredibleitinerary",
                "https://youtube.com/@incredibleitinerary",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@incredibleitinerary.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
