import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Additional optimizations
  compress: true, // Enable gzip compression
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles
  // Security headers for static export (note: middleware won't run in static export)
  // These will need to be configured at your hosting provider level
};

export default nextConfig;
