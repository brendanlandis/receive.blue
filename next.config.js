/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.slownames.net',
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'css')],
    },
};

module.exports = nextConfig;
