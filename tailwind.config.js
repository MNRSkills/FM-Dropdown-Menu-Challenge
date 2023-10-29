/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeights: {
      normal: 500,
      bold: 700,
    },
    colors: {
      almostWhite: "hsl(0, 0%, 98%)",
      mediumGray: "hsl(0, 0%, 41%)",
      almostBlack: "hsl(0, 0%, 8%)",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "hero-mobile": 'url("/src/assets/images/image-hero-mobile.png")',
        "hero-desktop": 'url("/src/assets/images/image-hero-desktop.png")',
      },
      fontFamily: {
        header: ["Epiloque"],
        content: ["Epiloque", 500],
      },
    },
  },
  plugins: [],
};
