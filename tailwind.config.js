module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'gridcoin': '30px 1.8fr 40px .8fr 1fr 2fr',
                'gridcoinsm': '6fr 40px',
            }
        },
    },
    plugins: [],
}