var getPackageWebpackConfig = require('./getPackageWebpackConfig');

module.exports = [
  ...getPackageWebpackConfig({
    packageName: '@cassette/core',
    hasStyles: false,
    entrySrc: './packages/core/src/index.js'
  }),
  ...getPackageWebpackConfig({
    packageName: '@cassette/components',
    hasStyles: false,
    entrySrc: './packages/components/src/index.js'
  }),
  ...getPackageWebpackConfig({
    packageName: '@cassette/player',
    hasStyles: true,
    entrySrc: './packages/player/src/index.js'
  }),
  ...getPackageWebpackConfig({
    packageName: '@cassette/hooks',
    hasStyles: false,
    entrySrc: './packages/hooks/src/index.js'
  })
];
