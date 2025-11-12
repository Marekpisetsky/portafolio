/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#22d3ee',
          purple: '#8b5cf6',
          lime: '#a3e635',
        },
      },
      backgroundImage: {
        'grid-tech':
          'linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px), linear-gradient(0deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
      },
    },
  },
  plugins: [],
};
