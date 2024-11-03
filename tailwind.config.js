/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-dark": "url('./assets/polygon-bg-hero-dark.svg')",
        "hero-light": "url('./assets/polygon-bg-hero-light.svg')",
        "projects-dark": "url('./assets/polygon-bg-projects-dark.svg')",
        "projects-light": "url('./assets/polygon-bg-projects-light.svg')",
        "skills-dark": "url('./assets/polygon-bg-skills-dark.svg')",
        "skills-light": "url('./assets/polygon-bg-skills-light.svg')",
        "contact-dark": "url('./assets/polygon-bg-contact-dark.svg')",
        "contact-light": "url('./assets/polygon-bg-contact-light.svg')",
        "footer-dark": "url('./assets/polygon-bg-footer-dark.svg')",
        "footer-light": "url('./assets/polygon-bg-footer-light.svg')",
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
      },
      colors: {
        lightBlue: "#0093FF",
        darkGray: "#424242",
        veryDarkGray: "#2C2C2C",
        superDarkGray: "#1F1F1F",
        lightGray: "#D3D3D3",
        veryLightGray: "#E5E5E5",
        veryVeryLightGray: "#DDDDDD",
        superLightGray: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
