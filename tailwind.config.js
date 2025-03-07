module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",      // Make sure pages folder is covered
    "./src/**/*.{js,ts,jsx,tsx}",        // Make sure src folder is covered for components
    "./react-components/**/*.{js,ts,jsx,tsx}", // If your components are in this folder (you can adjust it based on your structure)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
