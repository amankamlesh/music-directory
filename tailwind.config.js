module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",    // Scans all JS, JSX, TS, and TSX files in the 'src' folder
    "./public/index.html",           // Scans the HTML file
    "./music-player/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
