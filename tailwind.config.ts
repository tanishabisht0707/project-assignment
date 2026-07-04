import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F6FA",
        surface: "#FFFFFF",
        ink: "#15131F",
        muted: "#6B6B7B",
        line: "#E4E3EC",
        primary: {
          DEFAULT: "#4F3DFF",
          dark: "#3B2ECF",
          subtle: "#EEECFF",
        },
        signal: {
          DEFAULT: "#0EA5A0",
          subtle: "#E1F7F5",
        },
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "monospace"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out",
        blink: "blink 1s step-end infinite",
        rise: "rise 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,19,31,0.04)",
        "card-hover": "0 12px 24px -8px rgba(79,61,255,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
