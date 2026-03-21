export default function TrustStrip() {
  const items = [
    { icon: "⭐", text: "500+ Trips Planned" },
    { icon: "💰", text: "Saves ₹3k–₹5k Per Trip" },
    { icon: "🇮🇳", text: "Built for Indian Travellers" },
    { icon: "✦",  text: "100% Free Planning" },
    { icon: "📧", text: "Reply in Under 24 Hours" },
    { icon: "🗺",  text: "7 Destinations & Growing" },
  ];
  return (
    <div className="bg-ink py-3.5 px-6 flex items-center justify-center gap-4 md:gap-8 flex-wrap overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 shrink-0">
          {i > 0 && <div className="hidden md:block w-px h-4 bg-gold/20 mr-2" />}
          <span className="text-[0.68rem] tracking-[0.1em] uppercase text-gold-light whitespace-nowrap font-light">
            {item.icon} {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
