import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   // "gradient-conic":
      //   //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   'home': "url('/public/home.jpeg')",
      // },

      backgroundImage: theme => ({
        'home-image': "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/home.jpg')",
        'foco-image': "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/mapa.jpg')",
      }),
        
      backgroundPosition: {
        'center': 'center', 
      },
      backgroundSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
};
export default config;
