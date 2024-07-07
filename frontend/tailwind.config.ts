import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#583900",
        "lighter-primary": "#C98200",
        "darker-primary": "#E69500",
        red: "#FF0000",
        "darker-red": "#D2042D",
      },
      backgroundColor: {
        orange: "#FFA500",
        "light-orange": "#FFD78D",
        "lighter-orange": "#FFF2DA",
      },
      aspectRatio: {
        "752/444": "752/444",
      },
      backgroundImage: {
        bedroom: "url('/images/bedroom.webp')",
        chairs: "url('/images/chair.jpg')",
        coffee_table: "url('/images/coffee_table.jpg')",
        dining: "url('/images/dining.webp')",
        kitchen: "url('/images/kitchen.webp')",
        outdoor: "url('/images/outdoor.jpg')",
        sofas: "url('/images/sofas.jpg')",
      },
      keyframes: {
        skeleton: {
          "0%": { backgroundColor: "#E6E6E6" },
          "50%": { backgroundColor: "#D9D9D9" },
          "100%": { backgroundColor: "#E6E6E6" },
        },
      },
      animation: {
        skeleton: "skeleton 2.75s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
