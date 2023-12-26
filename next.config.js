/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/anime",
  assetPrefix: "/anime/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
