import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    newDevOverlay: false,
  }
};

export default nextConfig;
