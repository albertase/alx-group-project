/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
      return config
    } 
  }