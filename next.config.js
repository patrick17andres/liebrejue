/**
 * @type {import('next').NextConfig}
 */
 const isProd = process.env.NODE_ENV === 'production'
 const nextConfig = {
  webpack: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com',
    domains: ['res.cloudinary.com'],
  },
  assetPrefix: isProd ? '/liebrejue/' : undefined,
  basePath: isProd ? '/liebrejue' : undefined,
}

module.exports = nextConfig


