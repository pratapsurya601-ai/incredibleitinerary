"use client";
import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

/* ─────────────────────── Types ─────────────────────── */
interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rateFromUSD: number; // how many of this currency = 1 USD
}

/* ─────────────── Hardcoded Rates (base: 1 USD) ─────────────── */
const CURRENCIES: CurrencyInfo[] = [
  { code: "USD", name: "US Dollar",           symbol: "$",    flag: "🇺🇸", rateFromUSD: 1 },
  { code: "INR", name: "Indian Rupee",         symbol: "₹",    flag: "🇮🇳", rateFromUSD: 83.5 },
  { code: "EUR", name: "Euro",                 symbol: "€",    flag: "🇪🇺", rateFromUSD: 0.92 },
  { code: "GBP", name: "British Pound",        symbol: "£",    flag: "🇬🇧", rateFromUSD: 0.79 },
  { code: "THB", name: "Thai Baht",            symbol: "฿",    flag: "🇹🇭", rateFromUSD: 35.2 },
  { code: "JPY", name: "Japanese Yen",         symbol: "¥",    flag: "🇯🇵", rateFromUSD: 149.5 },
  { code: "AED", name: "UAE Dirham",           symbol: "د.إ",  flag: "🇦🇪", rateFromUSD: 3.67 },
  { code: "SGD", name: "Singapore Dollar",     symbol: "S$",   flag: "🇸🇬", rateFromUSD: 1.34 },
  { code: "MYR", name: "Malaysian Ringgit",    symbol: "RM",   flag: "🇲🇾", rateFromUSD: 4.72 },
  { code: "VND", name: "Vietnamese Dong",      symbol: "₫",    flag: "🇻🇳", rateFromUSD: 25100 },
  { code: "TRY", name: "Turkish Lira",         symbol: "₺",    flag: "🇹🇷", rateFromUSD: 32.5 },
  { code: "IDR", name: "Indonesian Rupiah",    symbol: "Rp",   flag: "🇮🇩", rateFromUSD: 15800 },
  { code: "AUD", name: "Australian Dollar",    symbol: "A$",   flag: "🇦🇺", rateFromUSD: 1.53 },
  { code: "CAD", name: "Canadian Dollar",      symbol: "C$",   flag: "🇨🇦", rateFromUSD: 1.36 },
  { code: "CHF", name: "Swiss Franc",          symbol: "CHF",  flag: "🇨🇭", rateFromUSD: 0.90 },
  { code: "BRL", name: "Brazilian Real",       symbol: "R$",   flag: "🇧🇷", rateFromUSD: 4.97 },
  { code: "MXN", name: "Mexican Peso",         symbol: "MX$",  flag: "🇲🇽", rateFromUSD: 17.2 },
];

const CURRENCY_MAP = new Map(CURRENCIES.map((c) => [c.code, c]));

/* ─────────────── Conversion Logic ─────────────── */
function convert(amount: number, fromCode: string, toCode: string): number {
  const from = CURRENCY_MAP.get(fromCode);
  const to = CURRENCY_MAP.get(toCode);
  if (!from || !to || amount <= 0) return 0;
  // Convert from → USD → to
  const inUSD = amount / from.rateFromUSD;
  return inUSD * to.rateFromUSD;
}

function formatAmount(value: number, code: string): string {
  if (value === 0) return "0";
  // For currencies with large values, no decimals; otherwise 2
  const noDecimalCodes = new Set(["JPY", "VND", "IDR"]);
  const decimals = noDecimalCodes.has(code) ? 0 : 2;
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

const PRESET_AMOUNTS = [1000, 5000, 10000, 50000];

/* ─────────────── Main Client Component ─────────────── */
export default function CurrencyConverterClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState<string>("1000");
  const [fromCode, setFromCode] = useState("INR");
  const [toCode, setToCode] = useState("USD");

  const numericAmount = useMemo(() => {
    const n = parseFloat(amount);
    return isNaN(n) || n < 0 ? 0 : n;
  }, [amount]);

  const result = useMemo(
    () => convert(numericAmount, fromCode, toCode),
    [numericAmount, fromCode, toCode]
  );

  const fromCurrency = CURRENCY_MAP.get(fromCode)!;
  const toCurrency = CURRENCY_MAP.get(toCode)!;

  const handleSwap = useCallback(() => {
    setFromCode(toCode);
    setToCode(fromCode);
  }, [fromCode, toCode]);

  const multiConvert = useMemo(() => {
    return CURRENCIES.map((c) => ({
      ...c,
      converted: convert(numericAmount, fromCode, c.code),
    }));
  }, [numericAmount, fromCode]);

  const rate = useMemo(
    () => convert(1, fromCode, toCode),
    [fromCode, toCode]
  );

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main id="main-content" className="min-h-screen bg-cream pt-[72px]">

        {/* ── Hero ── */}
        <section className="bg-parchment py-16 md:py-20 px-6 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="section-label">Free Travel Tool</span>
            <h1 className="serif-title text-[clamp(2rem,4vw,3.2rem)] text-ink mb-3">
              Currency Converter
            </h1>
            <p className="text-sm text-muted font-light max-w-[480px] mx-auto leading-relaxed">
              Instantly convert between 17 major travel currencies. Perfect for
              trip planning — know what your money is worth before you go.
            </p>
          </div>
        </section>

        {/* ── Main Converter Card ── */}
        <section className="px-4 md:px-8 py-10 max-w-[820px] mx-auto">

          {/* Converter Card */}
          <div className="bg-white border border-parchment-2 rounded-xl shadow-[0_8px_40px_rgba(22,16,8,0.07)] overflow-hidden">

            {/* Card Header */}
            <div className="px-7 pt-7 pb-5 border-b border-parchment-2">
              <h2 className="serif-title text-[1.4rem] text-ink">
                Convert Currency
              </h2>
              <p className="text-xs text-muted mt-1">
                1 {fromCurrency.code} = {formatAmount(rate, toCode)} {toCurrency.code}
              </p>
            </div>

            {/* Card Body */}
            <div className="px-7 py-7">

              {/* Amount + Preset Buttons */}
              <div className="mb-6">
                <label className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-dark font-medium mb-2 block">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-dark font-medium text-base pointer-events-none select-none">
                    {fromCurrency.symbol}
                  </span>
                  <input
                    type="number"
                    value={amount}
                    min={0}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 border border-parchment-2 rounded-lg bg-cream text-ink font-sans text-xl font-light outline-none transition-colors duration-200 focus:border-gold placeholder:text-muted/40 appearance-none"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Preset amounts */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {PRESET_AMOUNTS.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(String(preset))}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 ${
                        numericAmount === preset
                          ? "bg-gold text-ink border-gold shadow-[0_2px_8px_rgba(201,169,110,0.3)]"
                          : "bg-cream border-parchment-2 text-muted hover:border-gold hover:text-gold-dark"
                      }`}
                    >
                      {fromCurrency.symbol}{preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* From / Swap / To row */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end mb-8">

                {/* From */}
                <div>
                  <label className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-dark font-medium mb-2 block">
                    From
                  </label>
                  <div className="relative">
                    <select
                      value={fromCode}
                      onChange={(e) => setFromCode(e.target.value)}
                      className="w-full px-3.5 py-3 border border-parchment-2 rounded-lg bg-cream text-ink font-sans text-sm font-light outline-none transition-colors duration-200 focus:border-gold appearance-none cursor-pointer pr-8"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted text-xs">▾</span>
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  onClick={handleSwap}
                  aria-label="Swap currencies"
                  className="h-[46px] w-[46px] flex items-center justify-center rounded-full border border-gold/40 bg-parchment text-gold-dark hover:bg-gold hover:text-ink hover:border-gold hover:shadow-[0_4px_16px_rgba(201,169,110,0.3)] transition-all duration-200 text-lg font-light mb-0"
                  title="Swap currencies"
                >
                  ⇄
                </button>

                {/* To */}
                <div>
                  <label className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-dark font-medium mb-2 block">
                    To
                  </label>
                  <div className="relative">
                    <select
                      value={toCode}
                      onChange={(e) => setToCode(e.target.value)}
                      className="w-full px-3.5 py-3 border border-parchment-2 rounded-lg bg-cream text-ink font-sans text-sm font-light outline-none transition-colors duration-200 focus:border-gold appearance-none cursor-pointer pr-8"
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} — {c.name}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted text-xs">▾</span>
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-parchment rounded-xl px-7 py-6 text-center border border-gold/20">
                <p className="text-xs text-muted tracking-widest uppercase mb-2">
                  {numericAmount > 0
                    ? `${formatAmount(numericAmount, fromCode)} ${fromCurrency.code} equals`
                    : "Enter an amount above"}
                </p>
                <div className="flex items-baseline justify-center gap-2 flex-wrap">
                  <span className="serif-title text-[clamp(2.2rem,6vw,3.5rem)] text-gold-dark leading-none">
                    {toCurrency.symbol}
                  </span>
                  <span className="serif-title text-[clamp(2rem,5.5vw,3.2rem)] text-ink leading-none tabular-nums">
                    {formatAmount(result, toCode)}
                  </span>
                  <span className="text-muted text-sm font-light">{toCurrency.code}</span>
                </div>
                <p className="text-xs text-muted mt-3">
                  {toCurrency.flag} {toCurrency.name}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-[0.7rem] text-muted/70 text-center mt-4 leading-relaxed">
                Rates are approximate and updated periodically. Always check your bank for exact rates.
              </p>
            </div>
          </div>

          {/* ── Quick Multi-Convert Grid ── */}
          <div className="mt-10">
            <div className="text-center mb-6">
              <span className="section-label">Quick Multi-Convert</span>
              <h2 className="serif-title text-[1.6rem] text-ink">
                {numericAmount > 0
                  ? `${fromCurrency.symbol}${formatAmount(numericAmount, fromCode)} ${fromCode} in every currency`
                  : "Enter an amount to see all conversions"}
              </h2>
              <p className="text-xs text-muted mt-1">
                How far does your money go around the world?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {multiConvert.map((c) => {
                const isFrom = c.code === fromCode;
                return (
                  <button
                    key={c.code}
                    onClick={() => setToCode(c.code)}
                    className={`group text-left p-4 rounded-xl border transition-all duration-200 ${
                      c.code === toCode
                        ? "border-gold bg-parchment shadow-[0_4px_20px_rgba(201,169,110,0.2)]"
                        : "border-parchment-2 bg-white hover:border-gold/50 hover:shadow-[0_4px_16px_rgba(22,16,8,0.06)]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-2xl leading-none">{c.flag}</span>
                      <div>
                        <span className="text-[0.7rem] font-medium tracking-widest uppercase text-muted">
                          {c.code}
                        </span>
                        {c.code === toCode && (
                          <span className="ml-1.5 text-xs bg-gold/20 text-gold-dark px-1.5 py-0.5 rounded-full uppercase tracking-wide font-medium">
                            selected
                          </span>
                        )}
                        {isFrom && (
                          <span className="ml-1.5 text-xs bg-ink/10 text-ink px-1.5 py-0.5 rounded-full uppercase tracking-wide font-medium">
                            source
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-[0.68rem] text-muted mb-1 truncate">{c.name}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gold-dark font-medium text-sm">{c.symbol}</span>
                      <span className="text-ink font-light text-lg tabular-nums leading-tight">
                        {numericAmount > 0 ? formatAmount(c.converted, c.code) : "—"}
                      </span>
                    </div>
                    <p className="text-xs text-muted/80 mt-1">
                      1 {fromCode} = {formatAmount(convert(1, fromCode, c.code), c.code)} {c.code}
                    </p>
                  </button>
                );
              })}
            </div>

            <p className="text-[0.68rem] text-muted/80 text-center mt-5 leading-relaxed">
              Click any currency card to set it as your &ldquo;To&rdquo; currency.
              Rates are approximate — always verify with your bank or card provider before traveling.
            </p>
          </div>

          {/* ── Travel Money Tips ── */}
          <div className="mt-12 bg-parchment rounded-xl border border-parchment-2 p-7">
            <span className="section-label">Travel Money Tips</span>
            <h2 className="serif-title text-[1.35rem] text-ink mb-5">
              Make the most of your money abroad
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "💳",
                  title: "Use a zero-forex card",
                  tip: "Cards like Niyo or Wise charge no foreign transaction fees — saving you 2–4% on every purchase.",
                },
                {
                  icon: "🏧",
                  title: "Withdraw at bank ATMs",
                  tip: "Airport and hotel ATMs often have poor rates. Local bank ATMs in your destination city give better exchange.",
                },
                {
                  icon: "📉",
                  title: "Avoid dynamic currency conversion",
                  tip: "Always pay in the local currency when using your card abroad — never let the merchant convert for you.",
                },
                {
                  icon: "📆",
                  title: "Watch the rate trends",
                  tip: "Exchange rates shift daily. If the rate is favorable a few weeks before your trip, convert early.",
                },
              ].map((tip) => (
                <div key={tip.title} className="flex gap-3">
                  <span className="text-2xl mt-0.5 shrink-0">{tip.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-ink mb-1">{tip.title}</p>
                    <p className="text-xs text-muted leading-relaxed font-light">{tip.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="mt-12 text-center bg-white border border-parchment-2 rounded-xl p-8 shadow-[0_4px_24px_rgba(22,16,8,0.05)]">
            <span className="section-label">Ready to Travel?</span>
            <h2 className="serif-title text-[1.5rem] text-ink mb-2">
              Let us plan your perfect trip
            </h2>
            <p className="text-sm text-muted font-light max-w-[400px] mx-auto mb-6 leading-relaxed">
              From budget to luxury, our travel experts craft personalised itineraries so you
              can focus on the experience — not the spreadsheet.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold"
            >
              Plan My Trip
            </button>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
