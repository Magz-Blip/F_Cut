/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  // Some classes (color utilities like from-*/to-* or slash opacity) may be
  // removed by the optimizer if Tailwind can't detect them at compile time.
  // Add a small safelist to ensure the landing page color utilities are kept.
  // Use a mixture of exact strings + regex patterns to ensure classes are
  // preserved even when they include slashes or are generated dynamically.
  safelist: [
    'text-gray-800',
    { pattern: /from-/ },
    { pattern: /to-/ },
    { pattern: /bg-.*yellow/ },
    { pattern: /text-.*yellow/ },
    { pattern: /hover:text-.*yellow/ }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
