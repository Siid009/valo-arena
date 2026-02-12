/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['Zentry', 'sans-serif'],
        general: ["General", "sans-serif"],
        "robert-medium": ["Robert-Medium", "sans-serif"],
        "robert-regular": ["Robert-Regular", "sans-serif"],
        "circular-web": ["Circular-Web", "sans-serif"],
        'valorant': ['valorant', 'sans-serif'],
        'chicle': ['chicle', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        red: {
          primary: '#ff5246',
          secondary: '#f03131',
          tertiary: '#ff1023',
        },
        yellow: {
          primary: "#facc15",
          secondary: "#f4c715",
          tertiary: "#fef08a",
          title: "#fef9c3",
        },
        button: {
          50: '#EE7F6D',
          100: '#EB635E',
          150: "#e9464e",

        }
      }
    },
  },
  plugins: [],
}
