/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['m.media-amazon.com', 'encrypted-tbn2.gstatic.com'],
  },
  
  
}

module.exports = nextConfig
