module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "10": "10rem",
    },
    fontFamily: {
      display: ['"Lato"', "sans-serif"],
      body: ['"Lato"', "sans-serif"],
    },
    extend: {
      backgroundOpacity: {
        "85": "0.85",
      },
      height: {
        "screen-25": "25vh",
        "screen-50": "50vh",
        "screen-75": "75vh",
      },
      colors: {
        primary: "#E896A2",
        dark: "#150c1c",
        "black-800": "#292929",
      },
      spacing: {
        "neg-10": "-10rem",
      },
      inset: { 2: "2rem", 6: "6rem" },
      rotate: { 360: "360deg" },
    },
  },
}
