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
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        h1: [
          '1.5rem',
          {
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        title: [
          '0.875rem',
          {
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        subtitle: [
          '0.75rem',
          {
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        body: [
          '0.75rem',
          {
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
        cta: [
          '1rem',
          {
            fontWeight: 'normal',
            lineHeight: '0.9375rem',
            letterSpacing: '-0.03125rem',
          },
        ],
      },
      padding: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '20': '20px',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '8px',
        small: '4px',
        medium: '8px',
        large: '88px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '0.6': '0.6px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
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
