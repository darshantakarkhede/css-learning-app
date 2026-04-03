import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages serves from /css-learning-app/ subdirectory
  // (matches the repo name: darshantakarkhede/css-learning-app)
  basePath: process.env.NODE_ENV === "production" ? "/css-learning-app" : "",

  // Disable image optimisation — not supported in static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
