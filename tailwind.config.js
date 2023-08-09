const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    darkMode: ['class'],
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './UI/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            '3xl': '1600px',
        },

        extend: {
            fontFamily: {

            },
        },
    },
    plugins: [],
};