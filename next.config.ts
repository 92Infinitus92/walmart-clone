import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "walmart.com",
      },
    ],
  },
};

export default nextConfig;
