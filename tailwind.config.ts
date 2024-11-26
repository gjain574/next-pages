import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        default: '#37352F',
        gray: {
          light: '#F7F6F3',
          muted: '#E3E2E0',
          DEFAULT: '#9B9A97',
          dark: '#787774',
          darker: '#37352F',
        },
        blue: {
          light: '#E3EEFF',
          muted: '#C5DEFF',
          DEFAULT: '#2383E2',
          dark: '#0B6FCD',
        },
        red: {
          light: '#FFE9E5',
          muted: '#FFC7C3',
          DEFAULT: '#FF4D4D',
          dark: '#E03E3E',
        },
        yellow: {
          light: '#FFF6E5',
          muted: '#FFEBB3',
          DEFAULT: '#FFB800',
          dark: '#DBAB09',
        },
        green: {
          light: '#E7F7E9',
          muted: '#C2EBC7',
          DEFAULT: '#4DAB55',
          dark: '#3D8C44',
        },
        purple: {
          light: '#F2EFFE',
          muted: '#DDD6FE',
          DEFAULT: '#9B51E0',
          dark: '#7E3FB3',
        },
        pink: {
          light: '#FFE9F2',
          muted: '#FFC2DE',
          DEFAULT: '#FF4DB8',
          dark: '#E03D96',
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'h4': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'medium': ['0.9375rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config;
