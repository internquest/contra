/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'a576': { 'min': '576px' },
        'a992': { 'min': '992px' },
        'a1120': { 'min': '1120px' },
        'a1200': { 'min': '1200px' },
      }
      ,
      animation: {
        gradientAnimation: "gradientAnimation 1.25s linear infinite",
        bgtrans: "bgtrans 6s ease 0s infinite normal none running"
      },
      keyframes: {

        bgtrans: {
          "0%": {
            backgroundPosition: "10% 50%",
          },
          "50%": {
            backgroundPosition: "90% 50%",
          },
          "100%": {
            backgroundPosition: "10% 50%",
          },
        }
        ,
        gradientAnimation: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "200% 50%",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
