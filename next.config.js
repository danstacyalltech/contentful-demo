/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "creative.alltech.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "www.alltech.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
		loader: "default",
  },
};
