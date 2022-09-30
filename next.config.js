/**
 * @type {import('next').NextConfig}
 */
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
}

module.exports = nextConfig


