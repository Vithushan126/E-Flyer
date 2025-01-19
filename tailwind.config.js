/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        defaultHeight: "5vh",
      },
      colors: {
        primaryColor: "#0761AE",
        secondaryColor: "#F89D1E",
        accentColor: "#F09A1C",
        textColor: "#222222",
        backgroundColor: "#F2F2F2",
        darkBlue: "#024575",
        white: "#FFFFFF",
        orange: "#FFA333",
        gray: "#3C3C3C",
        smokeGray: "#C2C2C2",
        borderGray: "#DDDDDD",
        smokyGray: "#5A5A5A",
        red: "#E30606",
        lightGray: "#9C9C9C",
        footercolor: "#F5F5F6",
        darkcolor: "#484747",
        offWhite: "#F5F5F6",
        borderCol: "#D5D5D5",
      },

      maxWidth: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        italiana: ["Italiana", "serif"],
      },

      fontWeight: {},

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },

      fontStyle: {},
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
