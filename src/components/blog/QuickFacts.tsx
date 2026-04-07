import { Clock, Calendar, Wallet, Thermometer, MapPin, Users, Plane, AlertTriangle } from "lucide-react";

export interface QuickFactItem {
  icon: "duration" | "best-time" | "budget" | "weather" | "base" | "group" | "nearest-airport" | "note";
  label: string;
  value: string;
}

const ICON_MAP = {
  duration: Clock,
  "best-time": Calendar,
  budget: Wallet,
  weather: Thermometer,
  base: MapPin,
  group: Users,
  "nearest-airport": Plane,
  note: AlertTriangle,
};

interface QuickFactsProps {
  facts: QuickFactItem[];
  title?: string;
}

export default function QuickFacts({ facts, title = "Quick Facts" }: QuickFactsProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden my-8 not-prose"
      style={{
        background: "rgba(253,250,244,0.9)",
        border: "1px solid rgba(237,228,210,0.9)",
        boxShadow: "0 2px 16px rgba(22,16,8,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 border-b flex items-center gap-2"
        style={{ borderColor: "rgba(237,228,210,0.8)", background: "rgba(201,169,110,0.08)" }}
      >
        <span className="text-gold text-base">✦</span>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/70">
          {title}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {facts.map((fact, i) => {
          const Icon = ICON_MAP[fact.icon];
          const isLast = i === facts.length - 1;
          const isOddCount = facts.length % 2 !== 0;
          const isLastOdd = isLast && isOddCount;

          return (
            <div
              key={fact.label}
              className={`flex items-start gap-3 px-5 py-4 ${
                isLastOdd ? "sm:col-span-2" : ""
              }`}
              style={{
                borderBottom:
                  i < facts.length - (isOddCount ? 1 : 2)
                    ? "1px solid rgba(237,228,210,0.5)"
                    : undefined,
                borderRight:
                  !isLastOdd && i % 2 === 0 && i !== facts.length - 1
                    ? "1px solid rgba(237,228,210,0.5)"
                    : undefined,
              }}
            >
              <Icon
                size={15}
                className="text-gold flex-shrink-0 mt-0.5"
                strokeWidth={1.75}
              />
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.14em] uppercase text-muted font-medium mb-0.5">
                  {fact.label}
                </p>
                <p className="text-sm text-ink font-light leading-snug">{fact.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
