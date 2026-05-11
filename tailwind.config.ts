import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'graphite': '#0a0a0a',
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
