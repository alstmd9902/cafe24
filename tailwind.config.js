/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main-img':'url("./assets/main_img.png")',
        'mobile-img':'url("./assets/mobile_main.png")',
        'nav-iconimg':'url("./assets/icon_bar.png")',
        'section1-img':'url("./assets/section1_img.png")',
        'section2-img':'url("./assets/section2_img.png")',
        'section3-img':'url("./assets/section3_img.png")',
      }
    },
  },
  plugins: [],
}

