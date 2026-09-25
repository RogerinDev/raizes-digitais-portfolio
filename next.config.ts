import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/raizes-digitais-portfolio',
  allowedDevOrigins: ['192.168.1.24'],
};

export default nextConfig;
