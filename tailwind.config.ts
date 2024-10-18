import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#008080",
        white: "#FFFFFF",
        lightGrey: "#F3F4F6",
        green: "#4CAF50",
        blue: "#2196F3"
      },
    },
  },
  plugins: [],
};
export default config;
