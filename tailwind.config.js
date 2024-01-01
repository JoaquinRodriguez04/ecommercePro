/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'bgBody': '#111',
      'bgRed': '#ff0f51',
      'bgCard': '#000',
      'bgNumberCart': '#f1f1ff',
      'bgBtn': '#222',
      'bgBtnHover': '#202020',
      'bgSlider': '#001',
      'bgCyan': '#eaffff',
      'bgAmount': '#111',
    },
    colors:{
      'clrBody': '#b1b1b1',
      'clrApp': '#60d6ff',
      'clrBlack': '#111',
      'clrCyan': '#4CB7DC',
      'clrGreen': '#7be592',
      'clrOrange': '#c95f2b',
      'clrRed': '#ff0f51',
    },
    fontFamily:{
      'AppPoppins': 'Poppins, sans-serif',
    },
    screens:{
      'desktop': '1280px',
      'laptop': '1024px',
      'mobile': '768px',
    },
    extend: {},
  },
  plugins: [],
}

