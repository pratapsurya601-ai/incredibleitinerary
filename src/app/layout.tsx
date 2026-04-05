import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import EmailCaptureWrapper from "@/components/email/EmailCaptureWrapper";
import { blogPosts } from "@/data/blog";
import "./globals.css";

const _count = blogPosts.length;

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
  verification: {
    google: "BmoxUjBfGA7mVKr8qayc8cxC7_ND1hdJOEb6zaxloSA",
    other: { "msvalidate.01": ["32471722DA608250B1B461D6531492B0"] },
  },
  title: `IncredibleItinerary — ${_count} Free Travel Guides Worldwide`,
  description:
    `Free, detailed travel guides for India, Thailand, Japan, Italy, Vietnam, Greece, Turkey, Portugal, Malaysia & more. ${_count} destination itineraries with real prices, local tips, and day-by-day plans. Skip the tourist traps.`,
  keywords: [
    "travel itinerary",
    "India travel guide",
    "Thailand travel guide",
    "Japan travel guide",
    "Italy travel guide",
    "budget travel",
    "free travel itinerary",
    "Bangkok itinerary",
    "Tokyo itinerary",
    "Rome itinerary",
    "Rajasthan tour",
    "Kerala backwaters",
    "Goa itinerary",
    "custom travel planner",
  ],
  openGraph: {
    title: `IncredibleItinerary — ${_count} Free Travel Guides Worldwide`,
    description:
      `${_count} free travel guides across India, Thailand, Japan, Italy, Indonesia, UAE, Spain, Vietnam, Greece, Turkey, Portugal & Malaysia. Real prices, local tips, day-by-day itineraries.`,
    url: "https://www.incredibleitinerary.com",
    siteName: "IncredibleItinerary",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "IncredibleItinerary — Free Travel Guides Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IncredibleItinerary — Free Travel Guides Worldwide",
    description: `${_count} free travel guides across India, Thailand, Japan, Indonesia, UAE, Spain, Italy, Vietnam, Greece, Turkey, Portugal & more.`,
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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8778466914590495"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="travelpayouts" strategy="afterInteractive">
          {`
            (function () {
              var script = document.createElement("script");
              script.async = 1;
              script.src = 'https://emrld.ltd/NTE1MTIx.js?t=515121';
              document.head.appendChild(script);
            })();
          `}
        </Script>
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
              url: "https://www.incredibleitinerary.com",
              logo: "https://www.incredibleitinerary.com/logo.png",
              description: `${_count} free travel guides across India, Japan, Thailand, Italy, Bali, Dubai, Greece & 50+ countries. Real prices, day-by-day itineraries, local tips.`,
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
        <BackToTop />
        <EmailCaptureWrapper />
      </body>
    </html>
  );
}
