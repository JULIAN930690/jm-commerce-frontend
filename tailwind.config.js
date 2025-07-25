/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // azul Tailwind
        secondary: "#f97316", // naranja
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // ✅ Este está bien
    require('@tailwindcss/forms'),       // 🆗 Plugin oficial
    require('@tailwindcss/typography'),  // 🆗 Plugin oficial
  ],
}
