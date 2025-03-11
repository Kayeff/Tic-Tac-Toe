/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'border': '#ecdfcc 0px 1px 4px, #ecdfcc 0px 0px 0px 3px;',
      },
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif'],
        'Aspect-Range': ['Aspect-Range', 'sans-serif'],
        'General-Sans': ['General-Sans', 'sans-serif'],
      },
      colors: {
        'matt-black': '#181C14',
        'beige': '#ECDFCC',
        'basix-brown': '#3C3D37',
        'teal-green': '#697565',
        'pearl': '#eae0c8',
        'fire-brick': '#b22222',
        'dark-cool-blue': '#001F3F',
      }
    },
  },
  plugins: [],
}