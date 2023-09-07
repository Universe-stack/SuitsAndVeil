/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-none":"#FFFFFF",
        "gray-200":"#F4F4F4",
        "gray-600":"#49516F",
        "Primary-600":"#FF477E",
        "primary-800":"#B73058",
        "Secondary-blue":"#5465FF",
        "Secondary-yellow":"#FFC200",
      },
      backgroundImage: (theme)=> ({
        "gradient-pinkwhite":"background: #FBD3E9;-webkit-linear-gradient(to right, #BB377D, #FBD3E9);linear-gradient(to right, #BB377D, #FBD3E9)",
        "gradient-pinkblue":"background: #556270;-webkit-linear-gradient(to right, #FF6B6B, #556270); linear-gradient(to right, #FF6B6B, #556270)",
        "hero-pic":"url('./assets/heropic.png')"
      }),
      fontFamily: {
        dmsans:["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/heropic.png')"
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md:"1060px"
      }
      }
    },
  plugins: [],
}

