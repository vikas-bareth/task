/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",         // Include the root HTML file
      "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5E56E7",        // Primary button color
          background: "#F8F7FF",     // Background color
          grayLight: "#F0F0F6",      // Light gray for cards
          grayMedium: "#A0A0A0",     // Medium gray for text
          grayDark: "#333333",       // Dark gray for headers
        },
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"], // Custom font
        },
        boxShadow: {
          card: "0 2px 5px 0 rgba(211, 209, 238, 0.5)", // Custom shadow for cards
        },
        borderRadius: {
          sm: "4px",
          md: "8px",
        },
        screens: {
          sm: "640px", // Small devices (640px and up)
          md: "768px", // Medium devices (768px and up)
          lg: "1024px", // Large devices (1024px and up)
          xl: "1280px", // Extra large devices (1280px and up)
        },
      },
    },
    plugins: [],
  };
  