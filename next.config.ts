import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Point Turbopack to the actual workspace root to silence lockfile root warnings
    root: __dirname,
  },
  // Memory optimizations
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  // Reduce bundle size
  productionBrowserSourceMaps: false,
  // Optimize for production
  compress: true,
};

export default nextConfig;
