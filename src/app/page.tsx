import HomeClient from "@/components/sections/home/HomeClient";
import { blogPosts } from "@/data/blog";

const _count = blogPosts.length;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "IncredibleItinerary",
            url: "https://www.incredibleitinerary.com",
            description: `${_count} free travel guides across 30+ countries — India, Japan, Thailand, Italy, Bali, Dubai, Greece & more. Real prices, local tips, day-by-day itineraries.`,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.incredibleitinerary.com/blog?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How does the free planning service work?", acceptedAnswer: { "@type": "Answer", text: "Fill in the Plan My Trip form with your destination, dates, group size and budget. We build a personalised day-by-day itinerary within 24 hours and email it to you — completely free." }},
              { "@type": "Question", name: "Is there any obligation after I enquire?", acceptedAnswer: { "@type": "Answer", text: "None whatsoever. We send you the itinerary, you use it however you like. Many people book everything themselves using our plan." }},
              { "@type": "Question", name: "What is the difference between the free plan and a PDF guide?", acceptedAnswer: { "@type": "Answer", text: "The free plan is custom-built for your dates and budget. PDF guides are pre-written general itineraries you can download instantly." }},
              { "@type": "Question", name: "How far in advance should I enquire?", acceptedAnswer: { "@type": "Answer", text: "2-4 weeks ahead is ideal. For peak season (Ladakh Jun-Sep, Rajasthan Oct-Feb, Goa Dec-Jan), 4-8 weeks gives you the best options." }},
            ],
          }),
        }}
      />
      <HomeClient />
    </>
  );
}
