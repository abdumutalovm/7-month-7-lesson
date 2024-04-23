/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   extend:{
    backgroundColor:{
      'header':"#021431",
      'hMain':"#F0F6FF",
      'hLogo':'#057AFF'
    },
    colors:{
      'tMain':"#021431",
      'darkBlue':"#394E6A",
      'mLogo':'#057AFF'
    },
    boxShadow:{
      'norm':"0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);"
    }
   }
    
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
  
};


