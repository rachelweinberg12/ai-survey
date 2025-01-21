import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "dm-display": [
        "var(--font-dm-display)",
        ...defaultTheme.fontFamily.serif,
      ],
      "dm-sans": ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        matisse: {
          50: "#f4f7fb",
          100: "#e8eff6",
          200: "#ccddeb",
          300: "#9fc2da",
          400: "#6ba1c5",
          500: "#4886af",
          600: "#33658a",
          700: "#2d5777",
          800: "#284a64",
          900: "#263f54",
          950: "#192938",
        },
        sage: {
          50: "#f3f9ec",
          100: "#e3f2d5",
          200: "#c9e6b0",
          300: "#a7d482",
          400: "#87c15a",
          500: "#68a63c",
          600: "#548c2f",
          700: "#3e6526",
          800: "#345123",
          900: "#2e4621",
          950: "#16250e",
        },
        sun: {
          50: "#fff9eb",
          100: "#fdeec8",
          200: "#fadb8d",
          300: "#f8c451",
          400: "#f6ae2d",
          500: "#ef8b11",
          600: "#d4670b",
          700: "#b0470d",
          800: "#8f3711",
          900: "#752e12",
          950: "#431505",
        },

        tiger: {
          50: "#fef6ee",
          100: "#feead6",
          200: "#fbd2ad",
          300: "#f9b278",
          400: "#f58842",
          500: "#f26419",
          600: "#e34d13",
          700: "#bd3811",
          800: "#962e16",
          900: "#792915",
          950: "#411109",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
