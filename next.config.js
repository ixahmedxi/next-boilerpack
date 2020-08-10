const withBundleAnalyzer = require('@next/bundle-analyzer')
const withImages = require('next-images')

module.exports = withBundleAnalyzer(
  withImages({
    enabled: process.env.ANALYZE === 'true'
  })
)
