import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/companion/:path*',
        destination: '/companions/:path*',
      },
      {
        source: '/companion/images/:path*',
        destination: '/images/:path*',
      },
      {
        source: '/companion/icons/:path*',
        destination: '/icons/:path*',
      },
    ];
  },

  images: {
    remotePatterns: [{ hostname: 'img.clerk.com' }],
  },
};

export default nextConfig;
