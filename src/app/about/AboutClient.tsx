"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog";
import InquiryModal from "@/components/ui/InquiryModal";

const TRIPS = [
  { place: "Kedarnath",       year: "2022", emoji: "⛰️" },
  { place: "Gangotri",        year: "2023", emoji: "🏔️" },
  { place: "Badrinath",       year: "2022", emoji: "🛕" },
  { place: "Vaishno Devi",    year: "2021", emoji: "🌄" },
  { place: "Manali",          year: "2023", emoji: "❄️" },
  { place: "Shimla",          year: "2025", emoji: "🏛️" },
  { place: "Dharamshala",     year: "2022", emoji: "🌿" },
  { place: "Rishikesh",       year: "2022", emoji: "🌊" },
  { place: "Jaipur",          year: "2023", emoji: "🏯" },
  { place: "Agra",            year: "2021", emoji: "🕌" },
  { place: "Delhi",           year: "2026", emoji: "🏙️" },
  { place: "Chakrata",        year: "2022", emoji: "🌲" },
];

export default function AboutClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen pt-[72px]">

        {/* ── HERO ── */}
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <Image
            src="/images/surya/blog-kedarnath-temple.jpg"
            alt="Kedarnath temple with snow peaks — photographed by Surya Pratap"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10 max-w-[860px]">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-3">
              The Person Behind the Guides
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white leading-tight">
              Hi, I&apos;m Surya.<br />
              <em className="italic text-gold-light">I built IncredibleItinerary.</em>
            </h1>
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] text-white/30 font-light">
            📸 Kedarnath Temple, Oct 2022 — my own photo
          </span>
        </div>

        {/* ── STATS BAR ── */}
        <div className="bg-ink py-8 px-6 md:px-12">
          <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: `${blogPosts.length}+`, label: "Free Guides Written" },
              { num: "∞",    label: "Solo Trips Across India" },
              { num: "24",   label: "Years Old" },
              { num: "100%", label: "Solo Built" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-[2.2rem] font-light text-gold leading-none mb-1">{s.num}</p>
                <p className="text-[0.72rem] tracking-[0.12em] uppercase text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">

          {/* ── FOUNDER STORY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20 items-center">

            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/images/surya/surya-author-primary.jpg"
                  alt="Surya Pratap — Founder of IncredibleItinerary"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
              {/* Quote card */}
              <div className="absolute -bottom-5 -right-3 lg:-right-6 bg-gold rounded-xl p-4 max-w-[230px] shadow-lg">
                <p className="font-serif text-xs italic text-ink leading-relaxed">
                  &ldquo;I couldn&apos;t find a single honest guide when I was planning my own trips. So I built the one I wished existed.&rdquo;
                </p>
                <p className="text-[0.65rem] font-semibold text-ink mt-2">— Surya Pratap</p>
              </div>
            </div>

            {/* Story */}
            <div className="order-1 lg:order-2">
              <span className="section-label">My Story</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink mb-6 leading-tight">
                From solo trips to 307 guides.
                <em className="italic text-teal"> Here&apos;s the story.</em>
              </h2>
              <div className="space-y-4 text-sm text-muted font-light leading-[1.85]">
                <p>
                  From Delhi. 24 years old. I&apos;ve always been obsessed with two things — building digital products
                  and travelling solo through India&apos;s wildest places. Before IncredibleItinerary, I built trading
                  systems, data tools, and finance apps. That background in systems thinking and data analysis is exactly
                  what makes these guides different — every itinerary is structured like a product, not a blog post.
                </p>
                <p>
                  Kedarnath at 3,583m. Gangotri glacier trek in June. Badrinath at night.
                  The Bhagirathi valley stretching out below you in silence.
                  These mountains shaped how I think about travel — every trip should be planned with precision but experienced with wonder.
                </p>
                <p>
                  When I was planning those trips, I kept hitting the same wall — every
                  travel blog was vague, outdated, full of sponsored hotel suggestions and
                  zero real information. Prices from 2019. Timings that were wrong.
                  &ldquo;5 must-see spots!&rdquo; lists with no context.
                </p>
                <p>
                  So I built the guide I wished existed. Then I built 307 of them.
                  Every destination I&apos;ve been to, I wrote from personal experience.
                  Every destination I haven&apos;t, I researched obsessively until the
                  guide was good enough to be genuinely useful.
                </p>
                <p className="font-medium text-ink">
                  IncredibleItinerary is entirely solo-built — every guide, every tool, every line of code.
                  What started as one guide for a friend planning Kashmir turned into India&apos;s most detailed
                  free travel planning platform. 307 guides. 5 interactive tools. Zero sponsored content.
                </p>
              </div>
            </div>
          </div>

          {/* ── TRIP GALLERY ── */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="section-label">On The Road</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink">
                Trips that shaped how I write
              </h2>
              <p className="text-sm text-muted font-light mt-3 max-w-[500px] mx-auto leading-relaxed">
                I&apos;ve been travelling solo across India since my teens. These aren&apos;t all the places I&apos;ve been —
                they&apos;re the ones that changed how I think about travel.
              </p>
            </div>

            {/* 3-photo grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/surya/surya-kedarnath-ridge.jpg"
                  alt="Surya at Kedarnath ridge, October 2022"
                  fill className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-serif text-base font-light">Kedarnath, 2022</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/surya/surya-gangotri-glacier.jpg"
                  alt="Surya at Gangotri glacier, June 2023"
                  fill className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-serif text-base font-light">Gangotri Glacier, 2023</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/surya/surya-manali-snowsuit.jpg"
                  alt="Surya in Manali, December 2023"
                  fill className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-serif text-base font-light">Manali, 2023</p>
              </div>
            </div>

            {/* Visited places pills */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {TRIPS.map((t) => (
                <span key={t.place}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-parchment-2 rounded-full text-xs text-muted font-light hover:border-gold transition-colors">
                  <span>{t.emoji}</span>
                  <span className="font-medium text-ink">{t.place}</span>
                  <span className="text-muted/60">{t.year}</span>
                </span>
              ))}
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/40 rounded-full text-xs font-medium text-amber-700 hover:border-gold transition-colors">
                <span>✦</span>
                <span>and plenty more I haven&apos;t listed</span>
              </span>
            </div>
          </div>

          {/* ── WHAT I STAND FOR ── */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="section-label">What This Site Is</span>
              <h2 className="font-serif text-[clamp(1.9rem,3vw,2.7rem)] font-light text-ink">
                What makes these guides different
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "💰", title: "Real prices — verified", desc: "Every price I quote I've personally checked or sourced from people who paid it in 2025–2026. No 2019 prices dressed up as current." },
                { icon: "🗓️", title: "Actual timings", desc: "Opening hours, trek durations, train timings — all verified. If I couldn't verify it, I say so." },
                { icon: "🚫", title: "Zero sponsored picks", desc: "No hotel or tour paid to be in these guides. I recommend based on quality and value only." },
                { icon: "🧠", title: "Written for your trip type", desc: "Every guide has separate plans for budget travellers, couples, families, and adventure seekers — not one generic route." },
                { icon: "📍", title: "The mistakes section", desc: "Every guide has a 'common mistakes' section. The traps. The rip-offs. The things I had to learn the hard way." },
                { icon: "🔓", title: "Completely free", desc: "307 full guides, no email required, no paywall. If I can help someone plan a better trip — that's the point." },
              ].map((v) => (
                <div key={v.title}
                  className="bg-white rounded-xl border border-parchment-2 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="font-serif text-base font-normal text-ink mb-2">{v.title}</h3>
                  <p className="text-xs text-muted font-light leading-[1.75]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── LINKEDIN / CONTACT ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="bg-parchment rounded-2xl p-8 border border-parchment-2">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/30">
                  <Image
                    src="/images/surya/surya-author-primary.jpg"
                    alt="Surya Pratap"
                    fill className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-light text-ink">Surya Pratap</p>
                  <p className="text-xs text-muted font-light">Founder, IncredibleItinerary · Delhi</p>
                </div>
              </div>
              <p className="text-sm text-muted font-light leading-relaxed mb-5">
                I post about building this site in public — traffic growth, SEO experiments,
                what&apos;s working and what flopped. Follow along if you&apos;re building something too.
              </p>
              <a
                href="https://www.linkedin.com/in/surya-pratap-singh-490a18320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#0A66C2]/90 transition-colors"
              >
                Follow on LinkedIn →
              </a>
            </div>

            <div className="bg-ink rounded-2xl p-8 text-center flex flex-col justify-center">
              <h3 className="font-serif text-xl font-light text-white mb-3">
                Want a custom itinerary?
              </h3>
              <p className="text-sm text-white/55 font-light mb-6 leading-relaxed">
                Tell me where you want to go — I&apos;ll build a personalised day-by-day plan
                around your exact dates and budget. Free, always.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button onClick={() => setModalOpen(true)} className="btn-gold">
                  Plan My Trip →
                </button>
                <Link href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-light rounded-xl hover:border-gold transition-colors">
                  Browse Guides
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
