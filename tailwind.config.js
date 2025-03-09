import { COLORS } from "./src/react-components/theme/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./react-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS // ✅ Imports your `COLORS` object directly
      },
    },
  },
  plugins: [],
};
