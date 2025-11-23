/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        primary: {
          default: "#0FB7B7",  
          variant: "#13D5D5",    
        },

        dark: {
          default: "#1A1A1A",      
          variant: "#242424",  
        },

        light: {
          default: "#F0F0F0",   
          variant: "#FAFAFA",  
        },

        text: {
          white: "#FFFFFF",
        },

        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
