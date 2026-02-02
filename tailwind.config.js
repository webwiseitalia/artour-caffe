/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'lago': {
          DEFAULT: '#1A3A5C',
          light: '#2D5A8A',
          dark: '#0D1B2A',
        },
        'tramonto': {
          DEFAULT: '#E8B86D',
          light: '#F0CFA0',
          dark: '#C99A4D',
        },
        // Accent
        'spritz': '#FF6B35',
        'cielo': '#2D9CDB',
        'porto': '#27AE60',
        // Neutral
        'carbone': '#1D1D1D',
        'grigio': {
          DEFAULT: '#4A4A4A',
          chiaro: '#B0B0B0',
          perla: '#F5F5F5',
        },
        'notte': '#0D1B2A',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'accent': ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-lago': 'linear-gradient(135deg, #1A3A5C 0%, #0D1B2A 100%)',
        'gradient-tramonto': 'linear-gradient(135deg, #E8B86D 0%, #FF6B35 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(13, 27, 42, 0.7) 0%, rgba(26, 58, 92, 0.5) 100%)',
      },
    },
  },
  plugins: [],
}
