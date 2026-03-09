import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/runrait-tech",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
