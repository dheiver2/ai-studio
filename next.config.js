/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Importante: isso configura para build estático
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig
