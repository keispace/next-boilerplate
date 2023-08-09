/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    transpilePackages: ['antd'],
    swcMinify: true,
    experimental: {
        appDir: true,
        // serverActions: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },

}

module.exports = nextConfig
