/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            custom_slate_100: 'hsl(202, 86%, 94%)',
            custom_slate_300: 'hsl(203, 41%, 72%)',
            custom_slate_500: 'hsl(200, 26%, 54%)',
            custom_slate_700: 'hsl(200, 24%, 40%)',
            custom_slate_900: 'hsl(202, 55%, 16%)',
            custom_line: 'hsl(61, 70%, 52%)',
            custom_red: 'hsl(4, 69%, 50%)'
        },
        fontFamily: {
            plus_jakarta_sans: ['Plus Jakarta Sans']
        }
    },
  },
  plugins: [],
}