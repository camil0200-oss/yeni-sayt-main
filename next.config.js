/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Remove if not using Server Components
    serverComponentsExternalPackages: ['mongodb'],
  },
  webpack(config, { dev, isServer }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules'],
      };
    }
    
    // Optimize for modern browsers and reduce bundle size
    if (!isServer) {
      // Enable tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
            },
          },
        },
      };
      
      // Remove unused code
      config.optimization.minimize = true;
    }
    
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // **Security**
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },                 // clickjacking-dən qoruyur
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self';" }, // yalnız öz saytınızdan embed olunsun
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // **CORS** – lazım olsa daralda bilərik
          { key: 'Access-Control-Allow-Origin', value: process.env.CORS_ORIGINS || '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

