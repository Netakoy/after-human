// NOTE: In Tailwind v4, this file is NOT read by the Tailwind PostCSS plugin.
// The actual theme configuration lives in src/app/globals.css (@theme inline block).
// This file is kept for reference and IDE tooling only.
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'graphite': '#000000',
        'surface': '#141414',
        'silver': '#6b6b6b',
        'muted-white': '#f0f0f0',
        'cyan-accent': '#00d4ff',
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
