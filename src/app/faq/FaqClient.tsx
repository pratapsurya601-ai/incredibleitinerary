"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

/* ── Single accordion item ─────────────────────────────────────────────── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-ink pr-4 leading-snug">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-parchment-2 flex items-center justify-center text-gold text-base font-light transition-transform duration-200 ${
            open ? "rotate-45 bg-gold/10 border-gold/40" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2 bg-parchment">
          <p className="text-sm text-muted font-light leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ data ───────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  {
    icon: "🎁",
    label: "Free Guides",
    items: [
      {
        question: "Are all 307 guides really free?",
        answer:
          "Yes. Every blog guide on incredibleitinerary.com is completely free to read online. No account, no email, no paywall. Just go to /blog and find any destination.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. You can read all guides, use all planning tools, and browse every itinerary without ever creating an account.",
      },
      {
        question: "How often are guides updated?",
        answer:
          "We update guides as prices, timings, or regulations change. If you spot something outdated, email us at hello@incredibleitinerary.com and we'll fix it within 24 hours.",
      },
    ],
  },
  {
    icon: "📄",
    label: "PDF Downloads",
    items: [
      {
        question: "What's the difference between the blog guides and PDF guides?",
        answer:
          "The blog guides are full online articles — great for research. The PDFs are optimised for travel: formatted for mobile, downloadable for offline use, and structured as day-by-day action plans with budget tables, maps references, and checklists.",
      },
      {
        question: "How do I download my PDF after payment?",
        answer:
          "After Razorpay payment you're redirected to /shop/success. Click \"Download Your Guides\" → go to /guides → enter the email you used for payment → your unlocked PDFs appear with download buttons.",
      },
      {
        question: "Can I use the PDF offline, on my phone?",
        answer:
          "Yes — that's the whole point. Download before you leave, save to your phone. No internet needed during the trip.",
      },
      {
        question: "Can I share the PDF with my travel group?",
        answer:
          "Yes, share with your travel companions. Please don't resell or publicly distribute it.",
      },
      {
        question: "My payment went through but I can't find my download.",
        answer:
          "Go to /guides, enter the exact email you used for payment. If guides don't appear, email hello@incredibleitinerary.com with your Razorpay payment ID and we'll manually unlock within 1 hour.",
      },
      {
        question: "Do PDF prices include GST?",
        answer:
          "Yes, all prices are inclusive of GST. No hidden charges.",
      },
    ],
  },
  {
    icon: "💳",
    label: "Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Razorpay — supports UPI (GPay, PhonePe, Paytm), all Credit/Debit cards, Net Banking, and Wallets. Very smooth for Indian users.",
      },
      {
        question: "Is payment secure?",
        answer:
          "Yes. Payments are processed entirely by Razorpay. We never see or store your card details.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes. If you're not happy with a guide, email us within 7 days of purchase and we'll give you a full refund, no questions asked.",
      },
      {
        question: "I was charged but didn't get the guide.",
        answer:
          "Email hello@incredibleitinerary.com with your Razorpay payment ID and we'll resolve it within 1 hour.",
      },
    ],
  },
  {
    icon: "✦",
    label: "Custom Itineraries",
    items: [
      {
        question: "What is the free custom itinerary service?",
        answer:
          "You tell us where you're going, your dates, group size, and budget — we build a personalised day-by-day itinerary for you. Free, always. No catch. Response within 24 hours.",
      },
      {
        question: "How do I request a custom itinerary?",
        answer:
          "Click \"Plan My Trip\" in the top navbar or on the homepage. Fill in the inquiry form.",
      },
      {
        question: "Is the custom itinerary really free?",
        answer:
          "Yes, completely free. We make money from the PDF shop and affiliate links — the custom planning service is how we help more people travel better.",
      },
    ],
  },
  {
    icon: "🙋",
    label: "About the Site",
    items: [
      {
        question: "Who runs IncredibleItinerary?",
        answer:
          "Surya Pratap, based in Delhi. Solo-built the entire site — every guide, every tool, every line of code. More on the /about page.",
      },
      {
        question: "Does IncredibleItinerary accept sponsored content?",
        answer:
          "No. Zero sponsored posts. No hotel or tour has paid to appear in any guide. All recommendations are based solely on quality and value.",
      },
      {
        question: "How can I contact you?",
        answer:
          "Email hello@incredibleitinerary.com or go to /contact. Response within 24 hours.",
      },
    ],
  },
];

/* ── Main client component ──────────────────────────────────────────────── */
export default function FaqClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen pt-[72px]">

        {/* Hero */}
        <div className="bg-ink py-16 px-6 md:px-12 text-center">
          <div className="max-w-[640px] mx-auto">
            <span className="section-label text-white/50">Help Centre</span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mt-3 mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-[460px] mx-auto">
              Everything you need to know about IncredibleItinerary
            </p>
          </div>
        </div>

        {/* FAQ content */}
        <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16">

          {FAQ_CATEGORIES.map((category) => (
            <section key={category.label} className="mb-12 last:mb-0">
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-lg">{category.icon}</span>
                <span className="section-label">{category.label}</span>
              </div>

              {/* Accordion items */}
              <div className="space-y-2.5">
                {category.items.map((item) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Bottom CTA */}
          <div className="mt-16 bg-parchment border border-parchment-2 rounded-2xl p-8 text-center">
            <p className="font-serif text-xl font-light text-ink mb-2">
              Still have questions?
            </p>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed max-w-[380px] mx-auto">
              We&apos;re happy to help. Email us directly or click below to plan
              your trip — response within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="mailto:hello@incredibleitinerary.com"
                className="inline-flex items-center gap-1.5 border border-parchment-2 bg-white text-sm text-ink px-5 py-2.5 rounded-full hover:border-gold transition-colors duration-150 font-light"
              >
                <span>📧</span>
                hello@incredibleitinerary.com
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-gold text-ink text-sm font-medium tracking-wide px-5 py-2.5 rounded-full hover:bg-gold-dark hover:text-white transition-all duration-150"
              >
                Plan My Trip →
              </button>
            </div>
            <p className="text-xs text-muted mt-5 font-light">
              Or visit{" "}
              <Link href="/contact" className="text-gold-dark underline underline-offset-2 hover:text-ink transition-colors">
                /contact
              </Link>{" "}
              for more ways to reach us.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
