/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgLogin':'#021431',
        'bgHeader':'#F0F6FF',
        'headerLogo':'#057AFF',
        'hdLogo':"#FF7AC6",

        'dMain':"#181920",
        'dMain2':'#414558',
        'dMain3':'#272935',
        'dMain4':'#2B3440',
        'yellow':'#FFB86B',


        'text1':'#394E6A'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}