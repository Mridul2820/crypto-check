const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        SITE_URL: process.env.SITE_URL,
        THEGUARDIAN_API_KEY: process.env.THEGUARDIAN_API_KEY,
    },
    publicRuntimeConfig: {},
    images: {
        formats: [
            'image/avif', 
            'image/webp'
        ],
        domains: [
            'localhost', 
            'media.guim.co.uk',
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
