/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack5: false,
  images: {
    domains: [process.NEXT_PUBLIC_IMAGE_URL],
  },
};
