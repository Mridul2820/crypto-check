module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'gridcoin': '30px 1.8fr 40px .8fr 1fr 300px',
                'gridcoinsm': '16px 1.2fr 40px .8fr',
            }
        },
    },
    plugins: [],
}