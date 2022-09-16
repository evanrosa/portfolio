/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA({
    images: {
      domains: ['res.cloudinary.com', 'ipfs.io', 'api.illogics.io', 'api.clayfriends.io', 'metadata.ens.domains','ihyys2500.s3.us-west-1.amazonaws.com','api.loserclub.io', 'storage.gridcraft.net', 'wagmiarmy.io', 'prairie-user-content.s3.amazonaws.com','rl.mypinata.cloud', 'media.dippies.io'],
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
    ],
  },nextConfig});