/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  basePath: '/sport-rec',
  assetPrefix: '/sport-rec/'
};

export default nextConfig;
