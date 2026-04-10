"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { showToast } from "@/components/ui/Toast";

// Animated inline field error
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-[0.7rem] text-rust mt-1.5 animate-[slideDown_0.2s_ease_forwards]">
      <span className="font-bold leading-none">!</span>
      {message}
    </p>
  );
}

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  destination: string;
  duration: string;
  month: string;
  budget: string;
  message: string;
}

const destinations = [
  // India
  "Goa", "Rajasthan", "Kerala", "Kashmir", "Golden Triangle",
  "Leh Ladakh", "Manali", "Andaman", "Varanasi", "Coorg",
  "Meghalaya", "Sikkim", "Rishikesh", "Jaipur", "Udaipur",
  // Thailand
  "Bangkok", "Phuket", "Chiang Mai",
  // Japan
  "Tokyo", "Kyoto", "Osaka",
  // Italy
  "Rome", "Florence", "Amalfi Coast",
  // Indonesia
  "Bali", "Ubud", "Lombok",
  // UAE & Oman
  "Dubai", "Abu Dhabi", "Muscat",
  // Spain
  "Barcelona", "Madrid", "Seville",
  // Other
  "Multiple / Custom",
];
const durations = ["3–4 Days", "5–7 Days", "8–10 Days", "11–14 Days", "15+ Days"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December","Flexible"];
const budgets = ["Under ₹20,000/person","₹20,000–₹50,000/person","₹50,000–₹1,00,000/person","₹1,00,000+/person"];

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm<FormData>();
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const onSubmit = async (data: FormData) => {
    setApiError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("API error");
      trackEvent("inquiry_submitted", { destination: data.destination });
      showToast("Inquiry sent! We'll reply within 24 hours ✓", "success");
    } catch {
      setApiError("Something went wrong. Please try again or email us at hello@incredibleitinerary.com");
      showToast("Something went wrong — please try again", "error");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful && !apiError) {
      setTimeout(() => { reset(); onClose(); }, 3000);
    }
  }, [isSubmitSuccessful, apiError, reset, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-cream rounded-xl w-full max-w-[540px] max-h-[90vh] overflow-y-auto shadow-2xl animate-[fadeUp_0.3s_ease_both]">

        {/* Header */}
        <div className="flex justify-between items-start p-7 pb-0">
          <div>
            <h2 className="font-serif text-[2rem] font-light leading-tight">Plan My Trip</h2>
            <p className="text-sm text-muted font-light mt-1">Free personalised itinerary within 24 hours. No obligation.</p>
          </div>
          <button onClick={onClose} className="text-muted hover:text-ink transition-colors p-1 mt-1"><X size={20} /></button>
        </div>

        <div className="p-7 pt-5">
          {isSubmitSuccessful && !apiError ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-ink">Inquiry Received!</h3>
              <p className="text-sm text-muted font-light leading-relaxed max-w-[300px] mx-auto">
                We&apos;ll send your personalised itinerary to your email within 24 hours. Check your inbox!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* Name */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">First Name *</label>
                  <input {...register("firstName", { required: "First name is required" })} placeholder="Rahul" className={`form-field ${errors.firstName ? "border-rust" : ""}`} />
                  <FieldError message={errors.firstName?.message} />
                </div>
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Last Name *</label>
                  <input {...register("lastName", { required: "Last name is required" })} placeholder="Sharma" className={`form-field ${errors.lastName ? "border-rust" : ""}`} />
                  <FieldError message={errors.lastName?.message} />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Email Address *</label>
                <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })} type="email" placeholder="rahul@gmail.com" className={`form-field ${errors.email ? "border-rust" : ""}`} />
                <FieldError message={errors.email?.message} />
              </div>

              {/* WhatsApp */}
              <div className="mb-4">
                <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">WhatsApp Number *</label>
                <input {...register("whatsapp", { required: "WhatsApp number is required", validate: (v) => v.replace(/\D/g, "").length >= 10 || "Must be at least 10 digits" })} type="tel" placeholder="+91 98765 43210" className={`form-field ${errors.whatsapp ? "border-rust" : ""}`} />
                <FieldError message={errors.whatsapp?.message} />
              </div>

              {/* Destination + Duration */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Destination *</label>
                  <select {...register("destination", { required: "Please select a destination" })} className={`form-field ${errors.destination ? "border-rust" : ""}`}>
                    <option value="">Choose...</option>
                    {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <FieldError message={errors.destination?.message} />
                </div>
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Duration</label>
                  <select {...register("duration")} className="form-field">
                    <option value="">Select...</option>
                    {durations.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Month + Budget */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Travel Month</label>
                  <select {...register("month")} className="form-field">
                    <option value="">Select...</option>
                    {months.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Budget Range</label>
                  <select {...register("budget")} className="form-field">
                    <option value="">Select...</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="text-[0.68rem] tracking-[0.12em] uppercase text-muted block mb-1.5">Anything else? (Optional)</label>
                <textarea {...register("message")} rows={3} placeholder="Group size, travel style, special requests, things you want to avoid..." className="form-field resize-none" />
              </div>

              {apiError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">{apiError}</p>
              )}

              <button type="submit" disabled={isSubmitting}
                className="w-full py-3.5 bg-gold text-ink text-sm font-medium tracking-[0.12em] uppercase rounded-[1px] transition-all duration-200 hover:bg-gold-dark hover:text-white disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send My Inquiry →"}
              </button>

              <p className="text-center text-xs text-muted/80 mt-3 font-light">
                We reply within 24 hours · No spam · No obligation
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
