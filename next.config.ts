import type { NextConfig } from 'next'

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
    compress: true,
    productionBrowserSourceMaps: true, // Enable source maps in production too
    env: {
        NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    },
}

export default nextConfig
