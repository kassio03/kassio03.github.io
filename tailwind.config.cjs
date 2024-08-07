/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        solidPrimary: 'hsl(var(--color-solid-primary) / <alpha-value>)',
        solidSecondary: 'hsl(var(--color-solid-secondary) / <alpha-value>)',
        solidTertiary: 'hsl(var(--color-solid-tertiary) / <alpha-value>)',
        solidSeason: 'hsl(var(--color-solid-seasons) / <alpha-value>)',

        solidTextPrimary: 'hsl(var(--text-solid-primary) / <alpha-value>)',
      },
      fontSize: {},
    },
  },
  plugins: [],
};
