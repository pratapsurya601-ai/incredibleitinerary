"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface FormState {
  name: string;
  email: string;
  instagram: string;
  destination: string;
  photoCount: string;
  photoLinks: string;
  story: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  instagram: "",
  destination: "",
  photoCount: "1",
  photoLinks: "",
  story: "",
};

export default function ContributeClient() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const destinationSlug = form.destination
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // Success state
  if (status === "success") {
    return (
      <>
        <Navbar onPlanTrip={() => setModalOpen(true)} />
        <main className="min-h-screen bg-cream pt-[72px]">
          <div className="max-w-[600px] mx-auto px-6 py-24 text-center">
            <div className="text-5xl mb-6">🙏</div>
            <h1 className="font-serif text-[2rem] font-light text-ink mb-4">
              Thanks, {form.name}!
            </h1>
            <p className="text-muted font-light leading-relaxed mb-6">
              We&apos;ve received your {form.photoCount} photo{Number(form.photoCount) > 1 ? "s" : ""} of{" "}
              <strong className="text-ink">{form.destination}</strong>. We&apos;ll review them and email
              you within 48 hours if they&apos;re featured.
            </p>
            <div className="bg-parchment border border-parchment-2 rounded-2xl p-6 mb-8 text-left">
              <p className="text-xs text-muted uppercase tracking-widest mb-3 font-medium">While you wait</p>
              <p className="text-sm text-muted font-light mb-4">
                Check out our {form.destination} travel guide — it&apos;s free, no email required.
              </p>
              <Link
                href={`/blog/${destinationSlug}`}
                className="inline-flex items-center gap-2 bg-gold text-ink text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gold/90 transition-colors"
              >
                View {form.destination} Guide →
              </Link>
            </div>
            <button
              onClick={() => { setForm(EMPTY); setStatus("idle"); }}
              className="text-sm text-muted underline hover:text-gold-dark transition-colors"
            >
              Submit photos for another destination
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="min-h-screen bg-cream pt-[72px]">

        {/* Hero */}
        <div className="bg-parchment border-b border-parchment-2 py-16 px-6 text-center">
          <div className="max-w-[640px] mx-auto">
            <span className="inline-block bg-gold/20 text-gold-dark text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-5">
              Community Photos
            </span>
            <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-light text-ink mb-4 leading-tight">
              Share Your Travel Photos
            </h1>
            <p className="text-muted font-light leading-relaxed text-base max-w-[480px] mx-auto">
              Been somewhere amazing? Your real photos help thousands of travellers plan better trips.
              Get featured in our guides with full credit — name, Instagram, everything.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="border-b border-parchment-2 py-10 px-6">
          <div className="max-w-[720px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📤", title: "Submit", desc: "Fill the form with your photo links (Google Drive, Dropbox, WeTransfer — anything works)" },
              { icon: "✅", title: "We Review", desc: "We review within 48 hours and pick the best shots that match the guide" },
              { icon: "🌟", title: "Get Featured", desc: "Your photo goes live in the guide with your name and Instagram credited" },
            ].map((step) => (
              <div key={step.title} className="bg-white rounded-2xl border border-parchment-2 p-5">
                <div className="text-3xl mb-2">{step.icon}</div>
                <p className="font-medium text-sm text-stone-900 mb-1">{step.title}</p>
                <p className="text-xs text-muted font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-[600px] mx-auto px-6 py-14">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                  Your Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Priya Sharma"
                  className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="@yourhandle"
                  className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
              />
              <p className="text-[11px] text-muted/80 mt-1 font-light">
                We&apos;ll only use this to notify you if your photo is featured. No marketing emails.
              </p>
            </div>

            {/* Destination + Photo count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                  Destination <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="e.g. Kedarnath, Goa, Bali"
                  className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                  Number of Photos <span className="text-gold">*</span>
                </label>
                <select
                  name="photoCount"
                  required
                  value={form.photoCount}
                  onChange={handleChange}
                  className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors"
                >
                  {["1", "2", "3", "4", "5", "6–10", "10+"].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Photo links */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                Photo Links <span className="text-gold">*</span>
              </label>
              <textarea
                name="photoLinks"
                required
                value={form.photoLinks}
                onChange={handleChange}
                rows={3}
                placeholder="Paste your Google Drive / Dropbox / WeTransfer / iCloud link here. Make sure sharing is set to 'Anyone with the link'."
                className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-muted/40"
              />
              <p className="text-[11px] text-muted/80 mt-1 font-light">
                Upload your best shots to Google Drive or Dropbox and paste the share link here. Full-resolution photos preferred (minimum 1080px wide).
              </p>
            </div>

            {/* Story */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5 uppercase tracking-wide">
                Your Story (optional)
              </label>
              <textarea
                name="story"
                value={form.story}
                onChange={handleChange}
                rows={3}
                placeholder="What's the story behind these photos? When did you visit? Any caption you'd like us to use?"
                className="w-full border border-parchment-2 rounded-xl px-4 py-3 text-sm text-ink bg-white focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-muted/40"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold text-ink font-medium py-3.5 rounded-xl hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
            >
              {status === "sending" ? "Sending..." : "Submit Photos →"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-light">
                Something went wrong. Please email your photos directly to{" "}
                <a href="mailto:hello@incredibleitinerary.com" className="underline">
                  hello@incredibleitinerary.com
                </a>
              </p>
            )}

            <p className="text-[11px] text-muted/50 text-center font-light leading-relaxed">
              By submitting, you confirm these are your own photos and grant IncredibleItinerary
              a non-exclusive licence to display them with full credit. You can withdraw consent any time
              by emailing us.
            </p>
          </form>
        </div>

      </main>
      <Footer />
    </>
  );
}
