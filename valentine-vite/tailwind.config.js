/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                romantic: {
                    red: '#C21807',
                    rose: '#FF4F81',
                    pink: '#FFB6C1',
                    light: '#FFE4E9',
                    white: '#FFFFFF',
                },
            },
            fontFamily: {
                'dancing': ['"Dancing Script"', 'cursive'],
                'playfair': ['"Playfair Display"', 'serif'],
                'poppins': ['"Poppins"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
