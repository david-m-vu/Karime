/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        "ticketBackground": "rgba(255, 255, 255, 0.5)"
      }
    },
  },
  plugins: [],
}

