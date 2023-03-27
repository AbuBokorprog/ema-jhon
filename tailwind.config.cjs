/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mytheme: {
    primary: "#3b4fbf",

    secondary: "#c6fcae",

    accent: "#018734",

    neutral: "#191B1F",

    "base-100": "#402D43",

    info: "#5DA3EE",

    success: "#60DCAB",

    warning: "#FFE0B3",

    error: "#FF3030",
    extends: {},
  },

  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
