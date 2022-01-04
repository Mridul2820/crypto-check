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
                'bs1': '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
                'bs2': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
            },
            backgroundImage: {
                'light-blue': 'linear-gradient(180deg,rgb(233, 244, 254),rgba(233, 244, 254, .99) 25%, rgba(255, 255, 255, 0))'
            },
            backgroundColor: {
                'slate-light': 'rgba(75, 85, 99, .5)'
            }
        },
    },
    plugins: [],
}