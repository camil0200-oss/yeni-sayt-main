/** @type {import('next').NextConfig} */
// Make bundle-analyzer optional — only require it when ANALYZE=true
let withBundleAnalyzer = (config) => config;
if (process.env.ANALYZE === 'true') {
  try {
    withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true });
  } catch (err) {
    // If the package is not installed, continue without analyzer
    // This prevents build failures in environments without the dev dependency.
    // eslint-disable-next-line no-console
    console.warn('@next/bundle-analyzer not installed — skipping bundle analysis.');
    withBundleAnalyzer = (config) => config;
  }
}

const nextConfig = withBundleAnalyzer({
  output: 'standalone',
  experimental: {
    // Remove if not using Server Components
    serverComponentsExternalPackages: ['mongodb'],
    // recommend optimizing imports for large libs to enable tree-shaking
    optimizePackageImports: ['lucide-react', 'date-fns', 'lodash'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    // Disable Next.js runtime image optimization in standalone mode where sharp
    // may not be available. This avoids runtime errors; to re-enable optimized
    // images install the "sharp" package or run on a platform with libvips.
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // CSS optimization
  optimizeFonts: true,
  
  webpack(config, { dev }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules'],
      };
    }
    
    // CSS optimization
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
            priority: 20,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    };
    
    // CSS extraction optimization
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.minimizer = config.optimization.minimizer || [];
    }
    
    return config;
  },
  
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
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

          // **Performance**
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },

          // **CORS** – lazım olsa daralda bilərik
          { key: 'Access-Control-Allow-Origin', value: process.env.CORS_ORIGINS || '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
});

module.exports = nextConfig;

