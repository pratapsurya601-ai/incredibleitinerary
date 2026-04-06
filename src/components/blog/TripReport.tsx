"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TripReport() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", destination: "", trip: "", highlights: "", saved: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.destination || !form.trip) return;
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name,
          email: "tripreport@incredibleitinerary.com",
          destination: form.destination,
          message: `TRIP REPORT from ${form.name}\n\nDestination: ${form.destination}\nSaved: ${form.saved}\n\nTrip experience:\n${form.trip}\n\nHighlights:\n${form.highlights}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      trackEvent("trip_report_submitted", { destination: form.destination });
    } catch {
      setError(true);
    }
    setSending(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center my-10">
        <p className="text-2xl mb-2">🙏</p>
        <h3 className="font-serif text-xl text-green-800 mb-2">Thank you!</h3>
        <p className="text-sm text-green-700 font-light">Your trip report helps other travellers plan better trips. We may feature it on the site (with your permission).</p>
      </div>
    );
  }

  return (
    <div className="bg-parchment border border-parchment-2 rounded-2xl p-6 md:p-8 my-10">
      <div className="text-center mb-6">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-1">
          Used our itinerary?
        </p>
        <h3 className="font-serif text-xl font-light text-ink">
          Share your trip report
        </h3>
        <p className="text-xs text-muted font-light mt-1">Help other travellers — tell us what worked, what surprised you, and how much you saved.</p>
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4 text-center">
          Something went wrong — please try again or email us at{" "}
          <a href="mailto:hello@incredibleitinerary.com" className="underline">hello@incredibleitinerary.com</a>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-3">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name *" required className="form-field" />
          <input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} placeholder="Destination *" required className="form-field" />
        </div>
        <textarea value={form.trip} onChange={(e) => setForm({ ...form, trip: e.target.value })} placeholder="How was the trip? What did you love? Any surprises? *" required rows={4} className="form-field resize-none" />
        <div className="grid grid-cols-2 gap-3">
          <input value={form.highlights} onChange={(e) => setForm({ ...form, highlights: e.target.value })} placeholder="Best moment?" className="form-field" />
          <input value={form.saved} onChange={(e) => setForm({ ...form, saved: e.target.value })} placeholder="How much did you save? (e.g. ₹4,000)" className="form-field" />
        </div>
        <button type="submit" disabled={sending} className="w-full btn-gold justify-center disabled:opacity-60">
          {sending ? "Sending..." : "Submit Trip Report"}
        </button>
      </form>
    </div>
  );
}
