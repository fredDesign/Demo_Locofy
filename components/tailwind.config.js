/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#29022f",
        bottom: "#a166a8",
        white: "#fff",
        orange: "#ffa101",
        "zima-blue": "#2c57f1",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        gray: "#fffefe",
      },
      spacing: {},
      fontFamily: {
        geologica: "Geologica",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      lgi: "1.188rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      base: "1rem",
      "25xl": "2.75rem",
      "57xl": "4.75rem",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
