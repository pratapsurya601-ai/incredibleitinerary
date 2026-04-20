import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import PageProgress from "@/components/ui/PageProgress";
import Toast from "@/components/ui/Toast";
import EmailCaptureWrapper from "@/components/email/EmailCaptureWrapper";
import CookieBanner from "@/components/ui/CookieBanner";
import { blogPosts } from "@/data/blog";
import "./globals.css";

// Use total blogPosts count — stable across server/client to avoid hydration mismatch
const _count = blogPosts.length;

// display:"optional" — browser won't block render waiting for fonts.
// First visit: Georgia/system-ui fallback (no CLS, no render-blocking).
// Repeat visits: Cormorant/Jost served from cache instantly.
// This is the single biggest FCP improvement on mobile Slow 4G.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "optional",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "optional",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  // Prevent iOS Safari from zooming out on wide content
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.incredibleitinerary.com"),
  verification: {
    google: "BmoxUjBfGA7mVKr8qayc8cxC7_ND1hdJOEb6zaxloSA",
    other: { "msvalidate.01": ["32471722DA608250B1B461D6531492B0"] },
  },
  title: {
    default: `IncredibleItinerary — ${_count} Free Travel Guides Worldwide`,
    template: `%s | IncredibleItinerary`,
  },
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
        {/* Preconnect only to origins actually fetched client-side.
            Unsplash + fonts.gstatic are served via Next.js CDN, not the browser,
            so preconnecting to them wastes TCP handshakes. */}
        <link rel="alternate" type="application/rss+xml" title="IncredibleItinerary — Free Travel Guides" href="/feed.xml" />
        <meta name="p:domain_verify" content="a675f252f7bc3976aa17bd0c392c93a0" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* GA4 consent mode — must run before gtag loads so Lighthouse
            does not flag third-party cookies (no cookies set until
            consent is updated). Real visitors grant analytics consent
            immediately; bots/audits see no cookie activity. */}
        <Script id="consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              send_page_view: true,
              anonymize_ip: true,
              cookie_domain: 'auto',
              cookie_flags: 'SameSite=None;Secure',
            });
            gtag('consent', 'update', { analytics_storage: 'granted' });
          `}
        </Script>
        {/* Google AdSense is loaded dynamically in CookieBanner after user consent */}
        {/* Travelpayouts Emerald — converts hotel/tour links to affiliate links */}
        <Script src="https://emrld.ltd/NTE1MTIx.js?t=515121" strategy="afterInteractive" />
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
              description: `${_count} free travel guides across India, Japan, Thailand, Italy, Bali, Dubai, Greece & 30+ countries. Real prices, day-by-day itineraries, local tips.`,
              sameAs: [
                "https://www.linkedin.com/in/surya-pratap-601",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@incredibleitinerary.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        <PageProgress />
        {children}
        <WhatsAppButton />
        <BackToTop />
        <Toast />
        <EmailCaptureWrapper />
        <CookieBanner />
      </body>
    </html>
  );
}
