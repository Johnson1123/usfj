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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "mobile-landscape": {
          raw: "screen and ((max-height: 480px) and (max-width: 960px)) and (orientation: landscape)",
        },
        "md-landscape": {
          raw: "screen and ((max-device-height: 1024px) and (max-device-width: 768px) and  (orientation: landscape))",
        },
        "md:portrait": {
          raw: "(min-width:768px) and (max-width:1023px) and (orientation:portrait)",
        },
        "3k": {
          raw: "(min-width:1920px)",
        },

        "4k": {
          raw: "(min-width:2568px)",
        },
      },
    },
  },
  plugins: [],
};
