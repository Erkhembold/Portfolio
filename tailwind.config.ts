import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        ink: "#1A1A1A",
        accent: "#C4442E",
        gold: "#C9A24B",
        muted: "#8A8A8A",
        border: "#E4E1D8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
