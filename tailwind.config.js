module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1f2937', // Dark background
        'glass-bg': 'rgba(255, 255, 255, 0.1)', // Glass effect
        'light-text': '#f3f4f6', // Light text color
        'accent': '#3b82f6', // Accent color (blue)
        'highlight': '#f97316', // Highlight color (orange)
        'border': '#374151', // Border color
        'muted': '#9ca3af', // Muted text color
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
        'glow': '0 0 10px rgba(59, 130, 246, 0.7)', // Glow effect color
        'glass': '0 0 20px rgba(255, 255, 255, 0.2)', // Glassmorphism shadow
      },
      backdropBlur: {
        'sm': '6px', // Glass effect
      },
    },
  },
  plugins: [],
}
