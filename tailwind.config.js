/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            primary: "#191970",
            secondary: "#00ADAC",
            start: "#FFFF00",
            next: "#90EE90",
         },
         screens: {
            phone: "414px",
            tablet: "768px",
            tabletlg: "960px",
            tabletxl: "1024px",
            laptop: "1200px",
            laptoplg: "1400px",
            desktop: "1700px",
         },
      },
   },
   plugins: [],
};
