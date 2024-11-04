import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
        display: [
          '2.5rem',
          {
            fontWeight: 'regular',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        h1: [
          '1.5rem',
          {
            fontWeight: 'regular',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        title: [
          '0.875rem',
          {
            fontWeight: 'regular',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        subtitle: [
          '0.75rem',
          {
            fontWeight: 'regular',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        body: [
          '0.75rem',
          {
            fontWeight: 'regular',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
      },
      colors: {
        white: 'var(--white)',
        stroke: 'var(--stroke)',
        'off-white': 'var(--off-white)',
        black: 'var(--black)',
        green: 'var(--green)',
      },
      fontFamily: {
        sfProText: [
          'var(--font-sf-pro-text)',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
