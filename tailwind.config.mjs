/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DB9E04",
        textColor: "#667085",
        borderColor: "#D0D5DD",
        bgBlue: "#142560",
        bgOrange: "#db9e04",
        bgWhite: "#fff",
        bgBlack: "#000",
      },
      fontFamily: {
        manFont: "Kodchasan",
        secondaryFont: "Nunito",
      },
      backgroundImage: {
        regBG: "url('/Background Image Black and White.png')",
        blueColor: "#142560",
        orangeColor: "#db9e04",
        whiteColor: "#fff",
        blackColor: "#000",
      },
      screens: {
        "mobile-landscape": {
          raw: "(max-width:800px) and (orientation:landscape)",
        },

        "3k": {
          raw: "(min-width:1920px)",
        },
        "4k": {
          raw: "(min-width:2560px)",
        },
        "5k": {
          raw: "(min-width:3200px)",
        },
      },
    },
  },
  plugins: [],
};
