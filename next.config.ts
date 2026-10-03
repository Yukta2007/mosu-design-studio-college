/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/i1hfhoaw/**",
      },
    ],
  },
};

module.exports = nextConfig;