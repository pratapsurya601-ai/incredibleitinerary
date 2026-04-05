"use client";
import { useState } from "react";

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
  onComplete: (answers: PreQualAnswers) => void;
}

export interface PreQualAnswers {
  month: string;
  groupSize: string;
  budget: string;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Flexible / Not sure yet"];
const GROUP_SIZES = ["Solo (just me)", "Couple (2 people)", "Small group (3–4)", "Group (5–8)", "Large group (9+)", "Family with kids"];
const BUDGETS = ["Under ₹20,000/person", "₹20,000–₹40,000/person", "₹40,000–₹80,000/person", "₹80,000–₹1,50,000/person", "₹1,50,000+/person", "I need help deciding"];

const STEPS = ["When?", "Who?", "Budget?"];

export default function PreQualModal({ isOpen, onClose, packageName, onComplete }: PreQualModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PreQualAnswers>({ month: "", groupSize: "", budget: "" });

  if (!isOpen) return null;

  const keys: (keyof PreQualAnswers)[] = ["month", "groupSize", "budget"];
  const options = [MONTHS, GROUP_SIZES, BUDGETS];
  const questions = [
    "When are you planning to travel?",
    "Who's coming on the trip?",
    "What's your budget per person?",
  ];
  const key = keys[step];
  const current = answers[key];

  const handleSelect = (val: string) => {
    const updated = { ...answers, [key]: val };
    setAnswers(updated);
    if (step < 2) {
      setTimeout(() => setStep(step + 1), 280);
    } else {
      setTimeout(() => { onComplete(updated); onClose(); setStep(0); setAnswers({ month: "", groupSize: "", budget: "" }); }, 280);
    }
  };

  const reset = () => { setStep(0); setAnswers({ month: "", groupSize: "", budget: "" }); onClose(); };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" onClick={(e) => { if (e.target === e.currentTarget) reset(); }}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={reset} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[440px] overflow-hidden">

        {/* Header */}
        <div className="bg-parchment px-6 pt-6 pb-5 border-b border-parchment-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-medium">
              {packageName ? `Enquiring about: ${packageName}` : "Quick trip details"}
            </p>
            <button onClick={reset} aria-label="Close" className="w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-parchment-2 transition-colors text-xl leading-none">×</button>
          </div>
          {/* Step progress */}
          <div className="flex gap-2 mb-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1">
                <div className={`h-1 rounded-full transition-all duration-300 ${i <= step ? "bg-gold" : "bg-parchment-2"}`} />
                <p className={`text-xs mt-1 text-center transition-colors ${i === step ? "text-gold-dark font-medium" : "text-muted/50"}`}>{s}</p>
              </div>
            ))}
          </div>
          <h3 className="font-serif text-[1.25rem] font-light text-ink">{questions[step]}</h3>
        </div>

        {/* Options */}
        <div className="p-4 max-h-[320px] overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {options[step].map((opt) => (
              <button key={opt} onClick={() => handleSelect(opt)}
                className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-light transition-all duration-150 ${
                  current === opt
                    ? "border-gold bg-gold/10 text-ink font-medium"
                    : "border-parchment-2 bg-parchment hover:border-gold/50 hover:bg-gold/5 text-muted hover:text-ink"
                }`}>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-parchment-2 bg-parchment/50 flex items-center justify-between">
          {step > 0 ? (
            <button onClick={() => setStep(step - 1)} className="text-xs text-muted hover:text-ink transition-colors px-3 py-2 min-h-[44px] flex items-center">← Back</button>
          ) : <div />}
          <p className="text-xs text-muted/70 font-light">No obligation · Free planning · 24hr reply</p>
        </div>
      </div>
    </div>
  );
}
