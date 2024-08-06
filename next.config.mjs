/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        URL_CONTENT: 'https://api.cosmicjs.com/v3/buckets/web-jsalamanc-production/objects/66b18fa26939dfa72986e7ed?read_key=fuLdzlYDeNIbB34rLJJ2K1GiN1T6BJvp8L74utQMIkNDIWaTJZ&depth=1&props=slug,title,metadata'
    },
    images: {
        domains: [
            'alphatrader.best',
        ],
    },
};

export default nextConfig;
