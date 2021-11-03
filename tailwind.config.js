const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
      salmon: '#eb3f58',
      rose: '#f17383',
      transparent: "#0000ffff",
      black: "#000",
      white: "#fff",
      gray: '#D1D5DB',
      lightgray:"#fafafa",
      darkgray:"#4B5563"

    },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
