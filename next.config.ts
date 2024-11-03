import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "walmart.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
};

export default nextConfig;
