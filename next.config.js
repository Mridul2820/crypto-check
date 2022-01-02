const path = require('path')
require('dotenv').config()

module.exports = {
    env: {},
    publicRuntimeConfig: {},
    images: {
        formats: [
            'image/avif', 
            'image/webp'
        ],
        domains: [
            'localhost', 
            'res.cloudinary.com',
            'assets.coingecko.com'
        ]
    },

    webpack: (config, { isServer }) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config
    },
}
