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
      inset: {
        "15vh": "15vh",
        "85vh": "85vh",
      },
      width: {
        "15vw": "15vw",
        "25vw": "25vw",
        "50vw": "50vw",
        "100vw": "100vw",
      },
      height: {
        "12vh": "12vh",
        "15vh": "15vh",
        "35vh": "35vh",
        "50vh": "50vh",
        "85vh": "85vh",
        "100vh": "100vh",
      },
      margin: {
        "15vh": "15vh",
      },
    },
  },
  plugins: [],
};
export default config;
