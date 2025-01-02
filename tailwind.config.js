/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "defaultHeight": "5vh",
      },
      colors: {
        "primaryColor":"#0761AE",
        "secondaryColor":"#F89D1E",
        "accentColor":"#F09A1C",
        "textColor":"#222222",
        "backgroundColor":"#F2F2F2",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'tab': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mob': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
       
      },
      fontWeight: {
        
      },
      fontSize:{
    
      },
      fontStyle: {
       
      },
    
    },
  },
  plugins: [],
}