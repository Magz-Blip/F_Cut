/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  // Some classes (color utilities like from-*/to-* or slash opacity) may be
  // removed by the optimizer if Tailwind can't detect them at compile time.
  // Add a small safelist to ensure the landing page color utilities are kept.
  safelist: [
    'from-yellow-500',
    'to-white',
    'bg-yellow-900/25',
    'hover:text-yellow-600',
    'text-gray-800'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
