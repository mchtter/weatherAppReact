// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      boxShadow: {
        "button": "3px 3px 0px 0px",
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }