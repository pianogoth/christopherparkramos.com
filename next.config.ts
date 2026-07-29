import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves a static artifact. The apex custom domain means no
  // repository-name basePath is needed.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
