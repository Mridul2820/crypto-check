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
            }
        },
    },
    plugins: [],
}