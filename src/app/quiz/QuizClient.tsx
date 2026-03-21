"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

// ── QUIZ DATA ──────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "vibe",
    emoji: "🌈",
    question: "What's your ideal trip vibe?",
    subtitle: "Pick the one that excites you most",
    options: [
      { id: "beach",     emoji: "🏖️", label: "Beach & Chill",       sub: "Sun, sand, seafood" },
      { id: "culture",   emoji: "🏛️", label: "History & Culture",    sub: "Forts, temples, stories" },
      { id: "nature",    emoji: "🌿", label: "Nature & Mountains",   sub: "Valleys, treks, views" },
      { id: "spiritual", emoji: "🕯️", label: "Spiritual & Soulful",  sub: "Ghats, ashrams, silence" },
    ],
  },
  {
    id: "budget",
    emoji: "💰",
    question: "What's your trip budget per person?",
    subtitle: "Total including flights, stays and food",
    options: [
      { id: "budget",   emoji: "💸", label: "Under ₹20,000",  sub: "Backpacker mode" },
      { id: "mid",      emoji: "💳", label: "₹20k – ₹50,000", sub: "Comfortable mid-range" },
      { id: "premium",  emoji: "💎", label: "₹50k – ₹1,50,000", sub: "Premium experience" },
      { id: "luxury",   emoji: "👑", label: "₹1,50,000+",      sub: "Palace hotels, private tours" },
    ],
  },
  {
    id: "group",
    emoji: "👥",
    question: "Who are you travelling with?",
    subtitle: "Your group changes everything",
    options: [
      { id: "solo",    emoji: "🧳", label: "Solo",         sub: "Just me" },
      { id: "couple",  emoji: "💑", label: "Couple",       sub: "Partner trip" },
      { id: "friends", emoji: "🎉", label: "Friends",      sub: "Group of 3–6" },
      { id: "family",  emoji: "👨‍👩‍👧", label: "Family",      sub: "With kids or parents" },
    ],
  },
  {
    id: "duration",
    emoji: "🗓️",
    question: "How many days do you have?",
    subtitle: "Include travel days",
    options: [
      { id: "short",  emoji: "⚡", label: "3–4 Days",  sub: "Quick getaway" },
      { id: "week",   emoji: "📅", label: "5–7 Days",  sub: "Full week" },
      { id: "long",   emoji: "🌍", label: "8–14 Days", sub: "Extended holiday" },
      { id: "open",   emoji: "♾️", label: "15+ Days",  sub: "Long trip" },
    ],
  },
  {
    id: "priority",
    emoji: "✨",
    question: "What matters most to you?",
    subtitle: "Choose your #1 priority",
    options: [
      { id: "food",       emoji: "🍛", label: "Amazing Food",        sub: "Local cuisine & hidden spots" },
      { id: "photo",      emoji: "📸", label: "Jaw-dropping Photos",  sub: "Instagram-worthy moments" },
      { id: "adventure",  emoji: "🤿", label: "Adventure Activities", sub: "Diving, trekking, rafting" },
      { id: "relax",      emoji: "😌", label: "Total Relaxation",     sub: "Zero stress, slow pace" },
    ],
  },
];

// ── DESTINATION RESULTS ────────────────────────────────────────────────────────

type Answers = Record<string, string>;

function getResult(answers: Answers) {
  const { vibe, budget, group, duration, priority } = answers;

  // Scoring system — each destination gets points
  const scores: Record<string, number> = {
    goa: 0, rajasthan: 0, kashmir: 0, kerala: 0,
    golden_triangle: 0, varanasi: 0, andaman: 0,
  };

  // VIBE scoring
  if (vibe === "beach")    { scores.goa += 4; scores.andaman += 4; scores.kerala += 2; }
  if (vibe === "culture")  { scores.rajasthan += 4; scores.golden_triangle += 4; scores.varanasi += 3; }
  if (vibe === "nature")   { scores.kashmir += 4; scores.kerala += 3; scores.andaman += 2; }
  if (vibe === "spiritual") { scores.varanasi += 5; scores.rajasthan += 2; scores.kashmir += 1; }

  // BUDGET scoring
  if (budget === "budget")  { scores.goa += 3; scores.varanasi += 3; scores.rajasthan += 1; }
  if (budget === "mid")     { scores.kerala += 2; scores.goa += 2; scores.golden_triangle += 2; scores.rajasthan += 2; }
  if (budget === "premium") { scores.kashmir += 3; scores.andaman += 3; scores.kerala += 2; }
  if (budget === "luxury")  { scores.kashmir += 3; scores.rajasthan += 3; scores.andaman += 2; }

  // GROUP scoring
  if (group === "solo")    { scores.goa += 2; scores.varanasi += 2; scores.rajasthan += 1; }
  if (group === "couple")  { scores.kashmir += 3; scores.kerala += 3; scores.andaman += 3; }
  if (group === "friends") { scores.goa += 4; scores.andaman += 2; scores.rajasthan += 2; }
  if (group === "family")  { scores.golden_triangle += 3; scores.rajasthan += 3; scores.kerala += 2; }

  // DURATION scoring
  if (duration === "short") { scores.goa += 3; scores.varanasi += 3; scores.andaman += 1; }
  if (duration === "week")  { scores.kashmir += 2; scores.kerala += 2; scores.andaman += 2; scores.rajasthan += 1; }
  if (duration === "long")  { scores.rajasthan += 3; scores.golden_triangle += 2; scores.kashmir += 2; }
  if (duration === "open")  { scores.rajasthan += 2; scores.golden_triangle += 2; scores.kashmir += 2; }

  // PRIORITY scoring
  if (priority === "food")      { scores.varanasi += 3; scores.rajasthan += 2; scores.goa += 2; scores.kerala += 2; }
  if (priority === "photo")     { scores.kashmir += 3; scores.rajasthan += 3; scores.andaman += 2; }
  if (priority === "adventure") { scores.andaman += 4; scores.kashmir += 3; scores.kerala += 2; }
  if (priority === "relax")     { scores.kerala += 4; scores.andaman += 3; scores.kashmir += 2; }

  // Find top 3
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [top, second, third] = sorted;

  return {
    primary: DESTINATIONS[top[0]],
    secondary: DESTINATIONS[second[0]],
    tertiary: DESTINATIONS[third[0]],
    scores,
  };
}

const DESTINATIONS: Record<string, {
  name: string; emoji: string; tagline: string; why: string;
  duration: string; budget: string; href: string;
  color: string; image: string; tips: string[];
}> = {
  goa: {
    name: "Goa",
    emoji: "🏖️",
    tagline: "India's beach paradise — your perfect match",
    why: "Your love of beach vibes, the budget and group size all point straight to Goa. You'll get the best of both worlds — empty northern beaches in the morning, great food and nightlife in the evening.",
    duration: "3–5 days ideal",
    budget: "₹8,000–₹25,000/person",
    href: "/blog/goa-3-days",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80",
    tips: ["Go to Palolem at 6am — beach is empty", "Eat at Café del Mar, not tourist shacks", "Avoid November–December (peak prices, crowds)"],
  },
  rajasthan: {
    name: "Rajasthan",
    emoji: "🏰",
    tagline: "India's royal heartland — made for you",
    why: "Your taste for culture and history, combined with your budget and timeframe, is a perfect match for Rajasthan. The Jaipur–Jodhpur–Udaipur circuit is India's most rewarding cultural journey.",
    duration: "7–10 days ideal",
    budget: "₹15,000–₹80,000/person",
    href: "/blog/rajasthan-7-days",
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    tips: ["Amber Fort at 6am — no crowds, golden light", "Stay in a heritage haveli, not a chain hotel", "Jodhpur + Jaisalmer are underrated vs Jaipur"],
  },
  kashmir: {
    name: "Kashmir",
    emoji: "🏔️",
    tagline: "Heaven on earth — your dream destination",
    why: "Dal Lake houseboats, Gulmarg snow, Pahalgam pine forests — your answers show someone who wants natural beauty and romance above all. Kashmir delivers all three in six days.",
    duration: "5–7 days ideal",
    budget: "₹18,000–₹90,000/person",
    href: "/blog/kashmir-6-days",
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tips: ["Dal Lake shikara at 5:30am — you'll have it to yourself", "Visit Oct–Nov for golden chinar trees", "Gondola Phase 2 at Gulmarg — worth every rupee"],
  },
  kerala: {
    name: "Kerala",
    emoji: "🌿",
    tagline: "God's own country — perfect for your style",
    why: "Your relaxation priority and love of nature point directly to Kerala. Houseboat stays on the backwaters, Munnar tea gardens, Varkala cliffs — it's the most varied destination in India for five days.",
    duration: "5–8 days ideal",
    budget: "₹15,000–₹60,000/person",
    href: "/blog/kerala-5-days",
    color: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    tips: ["Book houseboat direct — saves ₹2,000–₹3,000 vs agents", "Munnar sunrise at Mattupetty — arrive by 5:45am", "Varkala is better than Kovalam for first-timers"],
  },
  golden_triangle: {
    name: "Golden Triangle",
    emoji: "🕌",
    tagline: "India's iconic circuit — your perfect first trip",
    why: "Delhi, Agra and Jaipur cover everything you said you want — history, culture, incredible food and iconic photographs. The Taj Mahal at sunrise is the single most breathtaking moment in Indian travel.",
    duration: "6–8 days ideal",
    budget: "₹18,000–₹85,000/person",
    href: "/blog/golden-triangle-7-days",
    color: "from-yellow-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    tips: ["Taj Mahal at 6am — you'll have 20 minutes near-alone", "Take the Gatimaan Express to Agra — 1hr 40min", "Skip Jaipur taxis — walk or hire a cycle rickshaw"],
  },
  varanasi: {
    name: "Varanasi",
    emoji: "🕯️",
    tagline: "India's soul — unlike anything else on earth",
    why: "Your spiritual answers and food priorities point to Varanasi above everywhere else. It's the most intense, overwhelming and unforgettable city in India — and the street food is extraordinary.",
    duration: "3–4 days ideal",
    budget: "₹6,000–₹20,000/person",
    href: "/blog/varanasi-3-days",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    tips: ["Morning Ganges boat at 5:30am — the best thing you'll do in India", "Ganga Aarti — arrive 45 minutes early for a spot", "Blue Lassi Shop — queue for it, worth every minute"],
  },
  andaman: {
    name: "Andaman Islands",
    emoji: "🤿",
    tagline: "India's tropical secret — your adventure paradise",
    why: "Your adventure priority and beach vibe match perfectly with Andaman. Radhanagar Beach (Asia's Best Beach), scuba diving, Neil Island — it's what Maldives wishes it was, at a fraction of the price.",
    duration: "5–7 days ideal",
    budget: "₹18,000–₹75,000/person",
    href: "/blog/andaman-5-days",
    color: "from-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    tips: ["Book Makruzz ferry before you arrive — sells out in peak season", "Radhanagar Beach at 5:30am — 2km of empty Asia's Best Beach", "Fly via Chennai — saves ₹5,000–₹8,000 vs Delhi"],
  },
};

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full h-1 bg-parchment-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-gold transition-all duration-500 ease-out rounded-full"
        style={{ width: `${((current) / total) * 100}%` }}
      />
    </div>
  );
}

// ── RESULT CARD ──────────────────────────────────────────────────────────────

function ResultCard({
  dest, rank, onPlanTrip
}: {
  dest: typeof DESTINATIONS[string]; rank: "primary"|"secondary"|"tertiary"; onPlanTrip: () => void;
}) {
  const isPrimary = rank === "primary";
  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${isPrimary ? "border-gold shadow-xl" : "border-parchment-2"}`}>
      {isPrimary && (
        <div className="bg-gold text-ink text-center text-[0.65rem] tracking-[0.15em] uppercase font-semibold py-2">
          ✦ Your Perfect Match
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[0.62rem] tracking-[0.15em] uppercase text-gold-light mb-1">
            {isPrimary ? "Best match" : rank === "secondary" ? "2nd choice" : "Also great"}
          </p>
          <h3 className="font-serif text-2xl font-light text-white">{dest.emoji} {dest.name}</h3>
        </div>
      </div>
      <div className="p-5 bg-white">
        {isPrimary && (
          <p className="text-sm text-muted font-light leading-relaxed mb-4">{dest.why}</p>
        )}
        <div className="flex gap-3 mb-4 flex-wrap">
          <span className="text-[0.65rem] bg-parchment text-muted px-3 py-1.5 rounded-full">🗓 {dest.duration}</span>
          <span className="text-[0.65rem] bg-parchment text-muted px-3 py-1.5 rounded-full">💰 {dest.budget}</span>
        </div>
        {isPrimary && (
          <div className="mb-4 space-y-1.5">
            {dest.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-2 text-xs text-muted font-light">
                <span className="text-gold mt-0.5 flex-shrink-0">✦</span>{tip}
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          <Link href={dest.href}
            className={`flex-1 text-center py-2.5 text-xs font-medium tracking-wide uppercase rounded-[1px] transition-colors ${isPrimary ? "bg-gold text-ink hover:bg-gold-dark hover:text-white" : "bg-parchment text-ink hover:bg-gold/20"}`}>
            Read Full Guide →
          </Link>
          {isPrimary && (
            <button onClick={onPlanTrip}
              className="flex-1 text-center py-2.5 text-xs font-medium tracking-wide uppercase rounded-[1px] border border-teal text-teal hover:bg-teal hover:text-white transition-colors">
              Plan This Trip Free →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── EMAIL CAPTURE ─────────────────────────────────────────────────────────────

function EmailCapture({ destination, onSkip }: { destination: string; onSkip: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { onSkip(); return; }
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: `Quiz - ${destination}` }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
    setTimeout(onSkip, 1800);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">🎉</div>
        <p className="font-serif text-xl text-ink mb-1">You&apos;re on the list!</p>
        <p className="text-sm text-muted font-light">Loading your personalised results...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-gold p-8 text-center max-w-[460px] mx-auto">
      <div className="text-3xl mb-3">📬</div>
      <h3 className="font-serif text-2xl font-light text-ink mb-2">Get your free itinerary</h3>
      <p className="text-sm text-muted font-light mb-6 leading-relaxed">
        Enter your email and we&apos;ll send you a personalised <strong className="text-ink">{destination}</strong> itinerary — real budgets, insider tips, zero tourist traps.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" placeholder="Your name (optional)" value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-parchment-2 text-sm font-light text-ink focus:outline-none focus:border-gold transition-colors bg-parchment"
        />
        <input
          type="email" placeholder="Your email address" value={email}
          onChange={(e) => setEmail(e.target.value)} required
          className="w-full px-4 py-3 rounded-lg border border-parchment-2 text-sm font-light text-ink focus:outline-none focus:border-gold transition-colors bg-parchment"
        />
        <button type="submit" disabled={loading}
          className="w-full bg-gold text-ink py-3.5 text-sm font-medium tracking-[0.08em] uppercase rounded-[1px] hover:bg-gold-dark hover:text-white transition-colors disabled:opacity-60">
          {loading ? "Sending..." : "Send My Free Itinerary →"}
        </button>
      </form>
      <button onClick={onSkip} className="mt-3 text-xs text-muted hover:text-ink transition-colors underline-offset-2 hover:underline">
        Skip — just show my results
      </button>
      <p className="text-[0.62rem] text-muted/60 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

// ── MAIN QUIZ COMPONENT ───────────────────────────────────────────────────────

export default function QuizClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1–5 = questions, 6 = email, 7 = results
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<ReturnType<typeof getResult> | null>(null);

  const totalQuestions = QUESTIONS.length;
  const currentQ = QUESTIONS[step - 1];
  const isQuestion = step >= 1 && step <= totalQuestions;

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    // Auto-advance after 400ms
    setTimeout(() => {
      const newAnswers = { ...answers, [currentQ.id]: optionId };
      setAnswers(newAnswers);
      setSelected(null);
      if (step === totalQuestions) {
        setResult(getResult(newAnswers));
        setStep(totalQuestions + 1); // email capture
      } else {
        setStep(step + 1);
      }
    }, 380);
  };

  const handleEmailDone = () => setStep(totalQuestions + 2); // results
  const restart = () => { setStep(0); setAnswers({}); setSelected(null); setResult(null); };

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="min-h-screen bg-cream pt-[72px]">

        {/* INTRO */}
        {step === 0 && (
          <div className="max-w-[680px] mx-auto px-6 py-16 text-center">
            <span className="inline-block bg-gold/15 border border-gold/30 text-gold-dark text-[0.65rem] tracking-[0.18em] uppercase font-medium px-4 py-1.5 rounded-full mb-6">
              Takes 60 seconds
            </span>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-light text-ink leading-[1.08] mb-5">
              Where in India<br />
              <em className="italic text-teal">should you go?</em>
            </h1>
            <p className="text-base text-muted font-light max-w-[440px] mx-auto mb-8 leading-relaxed">
              Answer 5 quick questions and get your perfect Indian destination — with a free personalised itinerary, real budgets and insider tips.
            </p>

            {/* What you'll get */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {[
                { icon: "🎯", label: "Destination match", desc: "Scored to your exact preferences" },
                { icon: "📋", label: "Free itinerary", desc: "Day-by-day plan via email" },
                { icon: "💰", label: "Real budget", desc: "Actual costs, no surprises" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium text-sm text-ink mb-0.5">{item.label}</p>
                  <p className="text-[0.68rem] text-muted font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setStep(1)}
              className="btn-gold text-base px-10 py-4 inline-block">
              Start the Quiz →
            </button>
            <p className="text-xs text-muted mt-4 font-light">7 destinations · No signup required · Free forever</p>
          </div>
        )}

        {/* QUESTIONS */}
        {isQuestion && currentQ && (
          <div className="max-w-[680px] mx-auto px-6 py-12">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted font-light">Question {step} of {totalQuestions}</span>
                <span className="text-xs text-muted font-light">{Math.round((step / totalQuestions) * 100)}% done</span>
              </div>
              <ProgressBar current={step} total={totalQuestions} />
            </div>

            {/* Question */}
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">{currentQ.emoji}</div>
              <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] font-light text-ink mb-2">
                {currentQ.question}
              </h2>
              <p className="text-sm text-muted font-light">{currentQ.subtitle}</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {currentQ.options.map((opt) => (
                <button key={opt.id} onClick={() => handleSelect(opt.id)}
                  className={`group flex flex-col items-center gap-2 p-5 rounded-2xl border-2 text-center transition-all duration-200 ${
                    selected === opt.id
                      ? "border-gold bg-gold/10 scale-[1.02] shadow-md"
                      : "border-parchment-2 bg-white hover:border-gold hover:shadow-md hover:-translate-y-0.5"
                  }`}>
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="font-medium text-sm text-ink">{opt.label}</span>
                  <span className="text-[0.68rem] text-muted font-light">{opt.sub}</span>
                </button>
              ))}
            </div>

            {/* Back */}
            {step > 1 && (
              <div className="text-center mt-6">
                <button onClick={() => setStep(step - 1)}
                  className="text-xs text-muted hover:text-ink transition-colors">
                  ← Back
                </button>
              </div>
            )}
          </div>
        )}

        {/* EMAIL CAPTURE */}
        {step === totalQuestions + 1 && result && (
          <div className="max-w-[680px] mx-auto px-6 py-16">
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">{result.primary.emoji}</div>
              <h2 className="font-serif text-[1.8rem] font-light text-ink mb-2">
                Your match is <em className="italic text-teal">{result.primary.name}!</em>
              </h2>
              <p className="text-sm text-muted font-light">{result.primary.tagline}</p>
            </div>
            <EmailCapture destination={result.primary.name} onSkip={handleEmailDone} />
          </div>
        )}

        {/* RESULTS */}
        {step === totalQuestions + 2 && result && (
          <div className="max-w-[900px] mx-auto px-6 py-12">

            {/* Result header */}
            <div className="text-center mb-10">
              <span className="inline-block bg-gold/15 border border-gold/30 text-gold-dark text-[0.65rem] tracking-[0.18em] uppercase font-medium px-4 py-1.5 rounded-full mb-4">
                Your Results
              </span>
              <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-ink mb-3">
                You should go to <em className="italic text-teal">{result.primary.name}</em>
              </h1>
              <p className="text-base text-muted font-light max-w-[480px] mx-auto">{result.primary.tagline}</p>
            </div>

            {/* Match score bar */}
            <div className="bg-white rounded-2xl border border-parchment-2 p-6 mb-8">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Your destination compatibility scores</p>
              <div className="space-y-3">
                {Object.entries(result.scores)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([key, score]) => {
                    const dest = DESTINATIONS[key];
                    const max = Math.max(...Object.values(result.scores));
                    const pct = Math.round((score / max) * 100);
                    return (
                      <div key={key} className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0">{dest.emoji}</span>
                        <span className="text-xs font-medium text-ink w-28 flex-shrink-0">{dest.name}</span>
                        <div className="flex-1 h-2 bg-parchment-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gold rounded-full transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted w-10 text-right">{pct}%</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Top 3 destination cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <ResultCard dest={result.primary}   rank="primary"   onPlanTrip={() => setModalOpen(true)} />
              <ResultCard dest={result.secondary} rank="secondary" onPlanTrip={() => setModalOpen(true)} />
              <ResultCard dest={result.tertiary}  rank="tertiary"  onPlanTrip={() => setModalOpen(true)} />
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <button onClick={() => setModalOpen(true)}
                className="flex flex-col items-center gap-2 p-5 bg-ink rounded-xl text-center hover:bg-ink/90 transition-colors">
                <span className="text-2xl">✦</span>
                <span className="font-medium text-sm text-white">Get Free Custom Itinerary</span>
                <span className="text-[0.65rem] text-white/50 font-light">We plan it for you in 24hrs</span>
              </button>
              <Link href={result.primary.href}
                className="flex flex-col items-center gap-2 p-5 bg-gold rounded-xl text-center hover:bg-gold-dark transition-colors">
                <span className="text-2xl">📖</span>
                <span className="font-medium text-sm text-ink">Read Full {result.primary.name} Guide</span>
                <span className="text-[0.65rem] text-ink/60 font-light">Free blog post</span>
              </Link>
              <Link href="/shop"
                className="flex flex-col items-center gap-2 p-5 bg-parchment rounded-xl border-2 border-parchment-2 text-center hover:border-gold transition-colors">
                <span className="text-2xl">📄</span>
                <span className="font-medium text-sm text-ink">Download PDF Itinerary</span>
                <span className="text-[0.65rem] text-muted font-light">From ₹149 · Instant download</span>
              </Link>
            </div>

            {/* Restart */}
            <div className="text-center">
              <button onClick={restart} className="text-xs text-muted hover:text-ink transition-colors underline-offset-2 hover:underline">
                ↺ Take the quiz again
              </button>
            </div>

          </div>
        )}

      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
