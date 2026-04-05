"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { SITE_CONFIG } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  
  destination: string;
  message: string;
}

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "contact-page" }),
    });
  };

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-14">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-serif text-2xl font-light text-ink mb-2">Message Received!</h3>
        <p className="text-sm text-muted font-light mb-6 max-w-sm mx-auto leading-relaxed">
          We'll get back to you with a personalised itinerary within 24 hours.
          Keep an eye on your email for our response.
        </p>
        <button onClick={() => reset()} className="text-sm text-gold-dark underline underline-offset-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Your Name *</label>
          <input {...register("name", { required: true })}
            placeholder="Rahul Sharma"
            className={`form-field ${errors.name ? "border-rust" : ""}`} />
        </div>
        <div>
          <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Email *</label>
          <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            type="email" placeholder="rahul@example.com"
            className={`form-field ${errors.email ? "border-rust" : ""}`} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        </div>
        <div>
          <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Where do you want to go?</label>
          <select {...register("destination")} className="form-field">
            <option value="">Select destination</option>
            {["Rajasthan", "Goa", "Kerala", "Kashmir", "Himalayas", "Golden Triangle", "Bali / Indonesia", "Japan", "Thailand", "Dubai / UAE", "Europe", "Vietnam", "Singapore", "Greece", "Italy", "Spain", "Portugal", "Multiple / Custom"].map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Tell us more</label>
        <textarea {...register("message")} rows={4}
          placeholder="Dates, group size, budget, special interests, anything..."
          className="form-field resize-none" />
      </div>
      <button type="submit" disabled={isSubmitting}
        className="w-full py-3.5 bg-gold text-ink text-sm font-medium tracking-[0.12em] uppercase rounded-[1px] transition-all duration-200 hover:bg-gold-dark hover:text-white disabled:opacity-60">
        {isSubmitting ? "Sending..." : "Send My Inquiry →"}
      </button>
      <p className="text-xs text-muted text-center font-light">
        Free service. We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}

export default function ContactClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      desc: "Best for detailed trip enquiries. We reply within 24 hours.",
      action: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      highlight: true,
    },
    {
      icon: "📋",
      title: "Fill the Form",
      desc: "Tell us your dates, group and budget — we'll build your plan.",
      action: "Scroll down ↓",
      href: "#form",
      highlight: false,
    },
    {
      icon: "📞",
      title: "Call Us",
      desc: "Prefer to speak directly? We're available 9am–9pm IST.",
      action: "Book a call →",
      href: "/contact#form",
      highlight: false,
    },
  ];

  const faqs = [
    { q: "How quickly do you respond?", a: "Within 24 hours — usually much faster. Email is the best way to reach us." },
    { q: "Is the itinerary planning service free?", a: "Yes, completely free. We charge nothing to plan your trip. Revenue comes from the service arrangements if you choose to book through us." },
    { q: "Which countries do you cover?", a: "We cover 50+ countries — India, Japan, Thailand, Bali, Vietnam, UAE, Spain, Italy, Portugal, Greece, Turkey, UK, France, and many more. Browse all 284+ free guides at incredibleitinerary.com/blog." },
    { q: "Can you help with last-minute trips?", a: "Absolutely. We've planned trips with as little as 48 hours notice. Email us directly for urgent requests." },
    { q: "Do you arrange hotels and transport too?", a: "Yes — we can handle everything end-to-end: hotels, transport, guides, activities, permits. Or we can just give you the plan and you book yourself." },
  ];

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen pt-[72px]">

        {/* Hero */}
        <div className="bg-parchment py-16 px-6 md:px-12 text-center border-b border-parchment-2">
          <div className="max-w-[640px] mx-auto">
            <span className="section-label">Get in Touch</span>
            <h1 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light text-ink mb-4 leading-tight">
              Let&apos;s Plan Your<br />
              <em className="italic text-teal">Perfect Trip</em>
            </h1>
            <p className="text-sm text-muted font-light leading-relaxed mb-8 max-w-[480px] mx-auto">
              Tell us where you want to go, your travel dates, and your budget.
              We&apos;ll send you a personalised day-by-day itinerary within 24 hours — completely free.
            </p>
            {/* Trust bar */}
            <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-muted">
              {["✦ Free service", "⚡ 24hr response", "🌍 50+ countries", "284+ free guides"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — contact methods + FAQ */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact methods */}
              <div>
                <h2 className="font-serif text-xl font-light text-ink mb-5">How to Reach Us</h2>
                <div className="space-y-3">
                  {contactMethods.map((m) => (
                    <a key={m.title} href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-sm group ${
                        m.highlight
                          ? "bg-gold/8 border-gold/30 hover:border-gold/60"
                          : "bg-white border-parchment-2 hover:border-gold"
                      }`}>
                      <span className="text-2xl flex-shrink-0">{m.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-ink">{m.title}</p>
                        <p className="text-xs text-muted font-light mt-0.5">{m.desc}</p>
                        <p className={`text-xs font-medium mt-1.5 truncate group-hover:underline ${
                          m.highlight ? "text-gold-dark" : "text-gold-dark"
                        }`}>{m.action}</p>
                      </div>
                      <span className="text-muted/40 self-center">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time promise */}
              <div className="bg-ink rounded-xl p-5 text-center">
                <p className="text-2xl mb-2">⚡</p>
                <p className="font-serif text-base text-white font-light mb-1">We reply within 24 hours</p>
                <p className="text-xs text-white/45 font-light">
                  Usually within 2–3 hours during business hours (9am–9pm IST).
                  Email is fastest for detailed enquiries.
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-serif text-xl font-light text-ink mb-4">Quick Answers</h2>
                <div className="space-y-2">
                  {faqs.map((f, i) => <MiniAccordion key={i} q={f.q} a={f.a} />)}
                </div>
              </div>
            </div>

            {/* Right — main form */}
            <div id="form" className="lg:col-span-3 scroll-mt-24">
              <div className="bg-white rounded-2xl border border-parchment-2 p-7 md:p-9 shadow-sm">
                <div className="mb-7">
                  <h2 className="font-serif text-2xl font-light text-ink mb-1.5">
                    Plan My India Trip
                  </h2>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    Fill in the details below — the more you tell us, the better
                    itinerary we can build for you.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Popular destinations */}
              <div className="mt-8">
                <p className="text-xs text-muted uppercase tracking-widest mb-4">
                  Popular starting points
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { name: "Rajasthan", emoji: "🏰", href: "/blog/rajasthan-7-days" },
                    { name: "Goa", emoji: "🏖️", href: "/blog/goa-3-days" },
                    { name: "Kerala", emoji: "🌿", href: "/blog/kerala-5-days" },
                    { name: "Golden Triangle", emoji: "🕌", href: "/blog/golden-triangle-7-days" },
                    { name: "Himalayas", emoji: "🏔️", href: "/#packages" },
                    { name: "Custom Route", emoji: "✦", href: "#form" },
                  ].map((d) => (
                    <Link key={d.name} href={d.href}
                      className="flex items-center gap-2.5 p-3 bg-parchment rounded-lg border border-parchment-2 hover:border-gold hover:bg-white transition-all duration-200 group">
                      <span className="text-lg">{d.emoji}</span>
                      <span className="text-xs text-ink font-light group-hover:text-teal transition-colors">
                        {d.name}
                      </span>
                    </Link>
                  ))}
                </div>
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

function MiniAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-parchment transition-colors">
        <span className="text-xs font-medium text-ink pr-3">{q}</span>
        <span className={`text-gold text-base flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-4 pb-3 pt-1 bg-parchment border-t border-parchment-2">
          <p className="text-xs text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
