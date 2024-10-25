import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      width:{
        "25vw": "25vw",
        "50vw": "50vw",
        "100vw": "100vw",
      },
      height: {
        "15vh": "15vh",
        "35vh": "35vh",
        "50vh": "50vh",
        "85vh": "85vh",
      },
      margin: {
        "15vh": "15vh",
      },
    },
  },
  plugins: [],
};
export default config;
