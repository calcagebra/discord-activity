/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards"
      }
    }
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
  ]
};
