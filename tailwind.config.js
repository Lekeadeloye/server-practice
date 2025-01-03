/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-purple': "linear-gradient(to bottom right, #6889FF, #C668FF)",
        'gradient-peach': "linear-gradient(to bottom right, #FF6868, #FF68DE)",
        'gradient-ocean': "linear-gradient(to bottom right, #5B7FFF, #33CCFC)",
        'gradient-sunset': "linear-gradient(to bottom right, #FDC639, #FF7C60)",
        'gradient-grass': "linear-gradient(to bottom right, #45C270, #21CDC3)",
        'gradient-night': "linear-gradient(to bottom right, #403F44, #1E11B32)",
        'gradient-synthwave': "linear-gradient(to bottom right, #FF9E68, #FF68DE)",
      },
      colors: {
        mainPurple: "hsl(279, 38%, 73%)",
        secondary: "#C668FF",
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
      },
    },
  },
  plugins: [],
};
