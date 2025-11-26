/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
//tailwind safe list for unrecognised pieces of cs or pieces that are not working //
  safelist: [
    'text-gray-800',
    { pattern: /from-/ },
    { pattern: /to-/ },
    { pattern: /bg-.*yellow/ },
    { pattern: /text-.*yellow/ },
    { pattern: /hover:text-.*yellow/}
    


  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
