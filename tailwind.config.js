/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        offWhite: "rgba(225, 225, 225, 0.9)",
      },
      colors: {
        myTextLight: "rgba(51, 46, 66, 0.69)",
        myText: "rgba(51, 46, 66, 1)",
        indigo: "#483B70",
        indigoLight: "#7958e0",
        grey: "#D9D9D9",
        inShadow: "#E04040D9",
        inShadow2: " rgba(0, 0, 0, 0.25)",
        boxShadow: "10px 10px 10px 5px rgba(0, 0, 0, 0.25)",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)"],
        changa: ["var(--font-changa_One)"],
      },
      fontSize: {
        xl: ["24px"],
      },
      lineHeight: {
        sm: ["1.2"],
      },
    },
  },
  plugins: [],
};
