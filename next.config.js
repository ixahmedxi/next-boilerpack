const images = require('next-images')
const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins([images, bundleAnalyzer])
