const withMT = require("@material-tailwind/react/utils/withMT");
import type { Config } from "tailwindcss";

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
  darkMode: "class",
});
export default config;
