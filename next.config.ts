import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Point Turbopack to the actual workspace root to silence lockfile root warnings
    root: __dirname,
  },
};

export default nextConfig;
