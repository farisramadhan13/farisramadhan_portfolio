module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'glass-bg': 'rgba(255, 255, 255, 0.1)', // Glass effect
        'light-text': '#ffffff',
        'glow': '#00ff99', // Glow effect color
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 255, 0.7)', // Glow effect shadow
      },
      backdropBlur: {
        'sm': '4px', // Glass effect
      },
    },
  },
  plugins: [],
}
