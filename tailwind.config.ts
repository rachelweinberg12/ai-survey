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
      },
    },
  },
  plugins: [],
} satisfies Config;
