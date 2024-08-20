module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'glass-bg': 'rgba(255, 255, 255, 0.15)', // Glass effect
        'light-text': '#ffffff',
        'glow': '#00ff99', // Glow effect color
        'highlight': '#ff5722', // Additional highlight color
        'accent': '#3f51b5', // Accent color
        'muted': '#9e9e9e', // Muted color
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 255, 0.7)', // Glow effect shadow
        'glass': '0 0 20px rgba(255, 255, 255, 0.3)', // Glassmorphism shadow
      },
      backdropBlur: {
        'sm': '6px', // Glass effect
      },
    },
  },
  plugins: [],
}
