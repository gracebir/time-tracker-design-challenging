/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-color":"var(--color-blue)",
        "work-color":"var(--light-red-work)",
        "play-color":"var(--soft-blue-play)",
        "study-color":"var(--light-red-study)",
        "exercise-color":"var(--lime-green-exercise)",
        "social-color":"var(--violet-social)",
        "care-color":"var(--soft-orange-self-care)",
        "very-dark":"var(--very-dark-blue)",
        "dark-blue":"var(--dark-blue)",
        "desaturated-blue":"var(--desaturated-blue)",
        "pale-blue":"var(--pale-Blue)"
      }
    },
  },
  plugins: [],
}