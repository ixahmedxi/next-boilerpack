module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignore all .spec and .test files
    config.plugins.push(new webpack.IgnorePlugin(/\.(spec|test).(ts|tsx)$/))
    return config
  }
}
