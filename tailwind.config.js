/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#CAE9FF",
        blue: "#007BE9",
        gray9: "999999",
        grayB: "#BBBBBB",
        grayE: "#EEEEEE",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
