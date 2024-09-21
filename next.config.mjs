/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // 모든 http 도메인 허용
      },
      {
        protocol: "https",
        hostname: "**", // 모든 https 도메인 허용
      },
    ],
  },
};

export default nextConfig;
