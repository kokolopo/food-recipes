/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#E5E5E5",
        backgroundInput: "#FFFFFF",
        primary: "#EFC81A",
        secondary: "#EFEFEF",
        secondaryText: "#B6B6B6",
        secondaryText2: "#999999",
      },
      fontFamily: {
        custom: ["AirBnB"],
      },
      backgroundImage: {
        login: "url('/src/assets/images/bg-login.svg')",
        detailRecipe: "",
      },
    },
  },
  plugins: [require("daisyui")],
};
