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
        red: "#FF0000",
        "darker-red": "#D2042D",
      },
      backgroundColor: {
        orange: "#FFA500",
        "light-orange": "#FFD78D",
      },
      aspectRatio: {
        "752/444": "752/444",
      },
    },
  },
  plugins: [],
};
export default config;
