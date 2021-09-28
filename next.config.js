/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["i.esdrop.com", "localhost"],
  },
};

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "jpg", "png", "svg"],
});
