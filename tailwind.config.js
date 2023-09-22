/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bg_login: 'rgba(123, 164, 208, 1)',
        color_login: 'rgba(0, 0, 0, 0.5)',
        black_color: 'rgba(0, 0, 0, 1)',
        bginput_color: 'rgba(0, 100, 210, 0.1)',
        btn_bg: 'rgba(0, 100, 210, 1)',
        grey_text: 'rgba(0, 0, 0, 0.2)',
        navbar_bg: 'rgba(0, 0, 0, 0.1)',
        search_bg: 'rgba(243, 243, 243, 1)',
        main_color: 'rgba(47, 41, 77, 1)',
        text_gray: 'rgba(47, 41, 77, 0.4)',
        bg_grey: 'rgba(217, 217, 217, 0.2)'
      }
    },
  },
  plugins: [],
}

