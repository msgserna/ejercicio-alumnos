import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/next-app",
  assetPrefix: "/next-app/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
