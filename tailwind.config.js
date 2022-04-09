module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Kumbh+Sans", "sans-serif"],
      },

      colors: {
        dark: "hsl(238, 29%, 16%)",
        red: "hsl(14, 88%, 65%)",
        violet: "hsl(273, 75%, 66%)",
        blue: "hsl(240, 73%, 65%)",
        "text-dark": "hsl(237, 12%, 33%)",
        "text-light": "hsl(240, 6%, 50%)",
        light: "hsl(240, 5%, 91%)",
      },

      fontSize: {
        "primary-size": "12px",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },
    },
  },
  plugins: [],
};
