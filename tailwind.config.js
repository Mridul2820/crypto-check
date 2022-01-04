module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'gridcoin': '30px .8fr 50px .5fr .8fr 60px 60px 60px 250px',
                'gridcoinsm': '20px 1.2fr .8fr 40px',
            },
            keyframes: {
                'rotate': {
                    '0%': {
                        '-webkit-transform': 'rotate(0deg)',
                        transform: 'rotate(0deg)',
                    },
                    '100%': {
                        '-webkit-transform': 'rotate(360deg)',
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                'rotate-slow': 'rotate 15s linear infinite',
            },
            boxShadow: {
                'big': '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)'
            }
        },
    },
    plugins: [],
}