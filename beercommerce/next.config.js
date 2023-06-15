/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/stock-price/:code',
        destination: '/api/stock-price',
      },
      {
        source: '/products/:productId-:productBrand',
        destination: '/ProductDetailPage',
      },
    ];
  },
};

module.exports = nextConfig;
