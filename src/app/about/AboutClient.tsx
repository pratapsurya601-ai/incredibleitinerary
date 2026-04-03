"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import { SITE_CONFIG } from "@/lib/config";

export default function AboutClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { num: "500+", label: "Trips Planned" },
    { num: "4+", label: "Years Experience" },
    { num: "24hr", label: "Response Time" },
    { num: "100%", label: "Personalised" },
  ];

  const values = [
    {
      icon: "🗺",
      title: "No templates. Ever.",
      desc: "Every itinerary is built from scratch for you — your dates, your interests, your pace. We've never sent the same plan twice.",
    },
    {
      icon: "🤝",
      title: "Local knowledge, not guidebooks",
      desc: "We know which dhaba near Jaisalmer Fort serves the best dal baati. We know which Amber Fort guide actually knows the history. This comes from years on the ground.",
    },
    {
      icon: "💬",
      title: "One real person, not a call centre",
      desc: "When you WhatsApp us, you talk to the same person who plans your trip. No transfers, no hold music, no 'your call is important to us'.",
    },
    {
      icon: "💰",
      title: "Honest about money",
      desc: "We tell you the real prices. The rip-off spots. Where to eat for ₹150 and where spending ₹1,500 is actually worth it. Some links earn us a small commission — that keeps planning free — but we never recommend a place just because it pays us.",
    },
    {
      icon: "🔍",
      title: "Obsessively detailed",
      desc: "Our itineraries include timings, entry fees, what to order, which entrance to use at the fort, where to sit for the best sunset view. The details are the product.",
    },
    {
      icon: "🌱",
      title: "Sustainable travel",
      desc: "We recommend locally-owned guesthouses over chains, local restaurants over tourist traps, and experiences that put money into the communities you visit.",
    },
  ];

  const destinations = [
    "Rajasthan", "Goa", "Kerala", "Himachal Pradesh",
    "Uttarakhand", "Kashmir", "Varanasi", "Golden Triangle",
    "Ladakh", "Karnataka", "Tamil Nadu", "Andaman Islands",
  ];

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen pt-[72px]">

        {/* ── HERO ── */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <SmartImage
            imageKey="whyUs"
            fallback="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1600&q=85"
            alt="India travel experience"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10 max-w-[860px]">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-3">
              Our Story
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white leading-tight">
              We&apos;re Not a Travel Agency.<br />
              <em className="italic text-gold-light">We&apos;re Your India Expert.</em>
            </h1>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="bg-ink py-8 px-6 md:px-12">
          <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-[2.2rem] font-light text-gold leading-none mb-1">
                  {s.num}
                </p>
                <p className="text-[0.72rem] tracking-[0.12em] uppercase text-white/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">

          {/* ── STORY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20 items-center">
            <div>
              <span className="section-label">How It Started</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink mb-6 leading-tight">
                Born from a frustration with
                <em className="italic text-teal"> generic travel advice</em>
              </h2>
              <div className="space-y-4 text-sm text-muted font-light leading-[1.85]">
                <p>
                  IncredibleItinerary started when we kept seeing the same problem: travellers arriving in India with a plan downloaded from a travel blog, only to find the timings were wrong, the restaurants had closed, and half the "must-see" attractions weren't worth the detour.
                </p>
                <p>
                  Generic itineraries are written for no one in particular. They don't know that you travel slowly and hate crowds. They don't know you'd rather spend ₹3,000 on a great meal than ₹8,000 on a palace hotel. They don't know your trip of a lifetime starts in 6 days.
                </p>
                <p>
                  So we built something different — a personal travel planning service where every itinerary is built from scratch, around the actual human who will be travelling. Not a template. Not an algorithm. A plan made by someone who has been to these places, eaten the food, made the mistakes, and knows what's actually worth your time.
                </p>
                <p className="font-medium text-ink">
                  That's IncredibleItinerary. India, planned for you.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <SmartImage
                  imageKey="rajasthan"
                  fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
                  alt="Rajasthan heritage travel"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute -bottom-5 -left-5 bg-gold rounded-xl p-5 max-w-[260px] shadow-lg">
                <p className="font-serif text-sm italic text-ink-mid leading-relaxed">
                  &ldquo;India rewards the traveller who slows down, asks questions, and gets lost on purpose.&rdquo;
                </p>
                <p className="text-xs font-medium text-ink-mid mt-2">
                  — IncredibleItinerary
                </p>
              </div>
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="section-label">What We Stand For</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink">
                How We Do Things Differently
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title}
                  className="bg-white rounded-xl border border-parchment-2 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="font-serif text-base font-normal text-ink mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-muted font-light leading-[1.75]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DESTINATIONS WE COVER ── */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <span className="section-label">Where We Plan</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink">
                Across All of India
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {destinations.map((d) => (
                <span key={d}
                  className="px-4 py-2 bg-parchment border border-parchment-2 rounded-full text-sm text-muted font-light hover:border-gold hover:text-ink transition-all duration-200">
                  {d}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm text-gold-dark font-medium">
                + anywhere you want to go
              </span>
            </div>
          </div>

          {/* ── HOW IT WORKS ── */}
          <div className="mb-20 bg-parchment rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="section-label">The Process</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-light text-ink">
                From Idea to Itinerary
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "You tell us your dream", desc: "Share your destinations, travel style, budget, and dates via WhatsApp or the form." },
                { num: "02", title: "We build your plan", desc: "Our experts craft a bespoke, day-by-day itinerary matched to your exact preferences." },
                { num: "03", title: "We refine together", desc: "You give feedback. We revise until every detail — hotels, guides, timings — is perfect." },
                { num: "04", title: "You travel", desc: "Pack your bags. We stay on WhatsApp through your whole trip, every day, for anything you need." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-4 bg-cream">
                    <span className="font-serif text-base text-gold-dark">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-base font-normal text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="bg-ink rounded-2xl p-10 md:p-14 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">
              Start Planning
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-white mb-4">
              Ready to See India Properly?
            </h2>
            <p className="text-sm text-white/55 font-light mb-8 max-w-[440px] mx-auto leading-relaxed">
              Tell us where you want to go and we&apos;ll send a personalised
              itinerary within 24 hours. No templates. No upsells. Just a great
              plan.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Trip — Free →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold-light transition-colors">
                Read Our Guides
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
