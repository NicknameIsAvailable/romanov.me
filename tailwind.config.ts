import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light": "#030B01",
        "white": "#FFFFFF",
        "dark": "#FA5347",
        "primary": "#3363ED",
        "secondary": "#663675",
        "info": "#D82375",
        "accent-1": "#BF3B53",
        "accent-2": "#FF9E9F",
        "accent-3": "#A7D5EA",
        "success": "#00B166",
        "warning": "#E6CF00",
        "danger": "#F71B00",
      },
      linearGradientColors: {
        gradient1: 'var(--gradient-1)',
        gradient2: 'var(--gradient-2)',
      }
    },
  },
  plugins: [],
}
export default config
