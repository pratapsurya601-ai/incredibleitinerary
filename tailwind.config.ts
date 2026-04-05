import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#E8D4A8",
          DEFAULT: "#C9A96E",
          dark: "#8B6835",
        },
        ink: {
          DEFAULT: "#161008",
          mid: "#332515",
        },
        parchment: {
          DEFAULT: "#F8F2E8",
          2: "#EDE4D2",
        },
        cream: "#FDFAF4",
        teal: "#1E6B5E",
        rust: "#B84E24",
        muted: "#7A6A52",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem", letterSpacing: "0.15em" }],
        "xs": ["0.75rem", { lineHeight: "1.2rem" }],
      },
      animation: {
        "zoom-bg":    "zoomBg 24s ease-in-out infinite alternate",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "fade-up":    "fadeUp 0.8s ease forwards",
        "slide-down": "slideDown 0.28s cubic-bezier(0.4,0,0.2,1) forwards",
        "slide-up":   "slideUp 0.22s cubic-bezier(0.4,0,0.2,1) forwards",
        "shimmer":    "shimmer 1.6s ease-in-out infinite",
      },
      keyframes: {
        zoomBg: {
          "0%":   { transform: "scale(1)" },
          "100%": { transform: "scale(1.07)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(0.5)" },
          "50%":      { opacity: "1",   transform: "scaleY(1)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%":   { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        toastIn: {
          "0%":   { opacity: "0", transform: "translateY(12px) scale(0.92)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        toastOut: {
          "0%":   { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-8px) scale(0.95)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
