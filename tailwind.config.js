/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                script: ['var(--font-script)', 'cursive'],
                sans: ['var(--font-sans)', 'sans-serif'],
                bodoni: ['var(--font-bodoni)', 'serif'],
            },
            colors: {
                ink: '#1e1f1f',
                dark: '#0f0f10',
                page: '#121212',
                cream: '#f4f4f3',
            },
        },
    },
    plugins: [
        require("daisyui")
    ],
};
