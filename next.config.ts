import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    imageSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
};

export default nextConfig;
