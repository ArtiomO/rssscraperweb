/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'echofm.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tvrain.tv',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
