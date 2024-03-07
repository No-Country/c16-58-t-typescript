// import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-image":
          "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/home2.jpg')",
        "foco-image":
          "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/mapa.jpg')",
        "carta-image":
          "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/imgCarta.jpg')",
        "header-image":
          "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/header2.jpg')",
        "close": "url('/close.svg')",
        "menu":"url('/menu.svg')",
      },
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"], // Aquí se define la fuente y el tipo de fuente
        playfair: ['"Playfair Display"', "serif"],
        cormorant: ["Cormorant", "serif"],
        sans: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
});

// const config: Config = {
//   // content: [
//   //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   // ],
//   theme: {
//     extend: {
//       // backgroundImage: {
//       //   // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       //   // "gradient-conic":
//       //   //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       //   'home': "url('/public/home.jpeg')",
//       // },

//       // backgroundImage: (theme) => ({
//       //   "home-image":
//       //     "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/home.jpg')",
//       //   "foco-image":
//       //     "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/mapa.jpg')",
//       // }),

//       backgroundPosition: {
//         center: "center",
//       },
//       backgroundSize: {
//         cover: "cover",
//         contain: "contain",
//       },
//       backgroundRepeat: {
//         "no-repeat": "no-repeat",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
