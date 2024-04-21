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
    redirects: async () => {
        return [
            {
                source: '/:path*',
                has: [{ type: 'header', key: 'host', value: 'www.receive.blue' }],
                destination: 'https://receive.blue/:path*',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
