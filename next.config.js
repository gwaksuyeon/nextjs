/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [process.NEXT_PUBLIC_IMAGE_URL],
  },
};
