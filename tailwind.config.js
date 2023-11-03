/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        green: "#0d9d58",
        red: "#ea4334",
        blue: "#2b82fb",
        whitesmoke: "#eff1f4",
        lavender: "#d5e6fe",
        dodgerblue: {
          "100": "#4285f4",
          "200": "rgba(43, 130, 251, 0.2)",
        },
        darkgray: "#a1a1a1",
        gray: "rgba(0, 0, 0, 0.4)",
        yellow: "#ffba00",
        orange: "rgba(252, 188, 5, 0.2)",
      },
      spacing: {},
      fontFamily: {
        "product-sans-light": "'Product Sans Light'",
        "product-sans-medium": "'Product Sans Medium'",
        "product-sans": "'Product Sans'",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "12xs-5": "0.5px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      "21xl": "40px",
      lg: "18px",
      "13xl": "32px",
      sm: "14px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
  },
  
  corePlugins: {
      preflight: false,
    },
  
}

